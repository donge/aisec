import { ARXIV_CONFIG } from '../config.js'

function stripHtml(str) {
  if (!str) return ''
  return str.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
}

export async function fetchArxivPapers() {
  try {
    const baseUrl = 'https://export.arxiv.org/api/query'
    const query = new URLSearchParams({
      search_query: ARXIV_CONFIG.query,
      start: '0',
      max_results: String(ARXIV_CONFIG.maxResults),
      sortBy: ARXIV_CONFIG.sortBy,
      sortOrder: ARXIV_CONFIG.sortOrder,
    })

    const resp = await fetch(`${baseUrl}?${query}`, {
      headers: {
        Accept: 'application/atom+xml',
        'User-Agent': 'aisec-daily/1.0',
      },
      signal: AbortSignal.timeout(20000),
    })
    if (!resp.ok) {
      console.warn(`[arXiv] HTTP ${resp.status}`)
      return []
    }
    const xml = await resp.text()
    const entries = xml.split('<entry>').slice(1)
    const papers = []

    for (const entry of entries) {
      const extract = (tag) => {
        const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i')
        const m = re.exec(entry)
        if (!m) return ''
        return stripHtml(m[1])
      }
      const title = extract('title').replace(/\s+/g, ' ')
      if (!title) continue

      const idRaw = extract('id')
      const idMatch = /arxiv\.org\/abs\/(\d+\.\d+)/.exec(idRaw)
      const arxivId = idMatch ? idMatch[1] : ''

      const summary = extract('summary').replace(/\s+/g, ' ').slice(0, 800)
      const published = extract('published')
      const updated = extract('updated')
      const link = `https://arxiv.org/abs/${arxivId}`
      const authors = []
      const authorRe = /<author>[\s\S]*?<name>([\s\S]*?)<\/name>/gi
      let am
      while ((am = authorRe.exec(entry)) !== null) {
        authors.push(stripHtml(am[1]))
      }

      const categories = []
      const catRe = /<category\s+term="([^"]*)"/gi
      let cm
      while ((cm = catRe.exec(entry)) !== null) {
        categories.push(cm[1])
      }

      papers.push({
        id: `arXiv::${arxivId}`,
        type: 'paper',
        title: title.replace(/\n/g, ' ').trim(),
        url: link,
        description: summary.replace(/\n/g, ' ').trim(),
        published_date: published || updated,
        source: 'arXiv',
        lang: 'en',
        details: {
          arxivId,
          authors: authors.join(', '),
          categories: categories.join(', '),
        },
      })
    }

    console.log(`[arXiv] ${papers.length} papers`)
    return papers
  } catch (err) {
    console.warn(`[arXiv] Error: ${err.message}`)
    return []
  }
}
