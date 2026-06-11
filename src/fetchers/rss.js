const CDATA = /<!\[CDATA\[([\s\S]*?)\]\]>/
const TAG = /<\/?[^>]+>/g

function extract(xml, tag) {
  const regex = new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, 'i')
  const m = regex.exec(xml)
  if (!m) return ''
  let val = m[1].trim()
  const cdata = CDATA.exec(val)
  if (cdata) val = cdata[1]
  return val.replace(TAG, '').trim()
}

function extractAttr(xml, tag, attr) {
  const regex = new RegExp(`<${tag}[^>]*${attr}=["']([^"']*)["']`, 'i')
  const m = regex.exec(xml)
  return m ? m[1].trim() : ''
}

function extractAll(xml, tag) {
  const results = []
  const regex = new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, 'gi')
  let m
  while ((m = regex.exec(xml)) !== null) {
    results.push(m[1].trim())
  }
  return results
}

function parseItem(xml) {
  const title = extract(xml, 'title')
  if (!title) return null

  let link = extract(xml, 'link')
  if (!link || link.startsWith('<')) {
    link = extractAttr(xml, 'link', 'href')
  }

  const desc = extract(xml, 'description') || extract(xml, 'summary') || extract(xml, 'content')
  const pubDate = extract(xml, 'pubDate') || extract(xml, 'published') || extract(xml, 'updated')
  const creator = extract(xml, 'dc:creator') || extract(xml, 'author')

  return {
    title: title.trim(),
    link: link.trim(),
    description: desc.slice(0, 1000),
    pubDate: pubDate ? new Date(pubDate).toISOString() : new Date().toISOString(),
    creator: creator || '',
  }
}

function detectFormat(xml) {
  if (/<rss\b/i.test(xml)) return 'rss'
  if (/<feed\b/i.test(xml)) return 'atom'
  return null
}

function parseRSS(xml) {
  const items = []
  const rawItems = extractAll(xml, 'item')
  for (const raw of rawItems) {
    const item = parseItem(raw)
    if (item) items.push(item)
  }
  return items
}

function parseAtom(xml) {
  const items = []
  const rawItems = extractAll(xml, 'entry')
  for (const raw of rawItems) {
    const item = parseItem(raw)
    if (item) items.push(item)
  }
  return items
}

function decodeEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, '/')
    .replace(/&#x60;/g, '`')
    .replace(/&#x3D;/g, '=')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&nbsp;/g, ' ')
    .replace(/&hellip;/g, '...')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&lsquo;/g, "'")
    .replace(/&rsquo;/g, "'")
}

function stripHtml(str) {
  if (!str) return ''
  return decodeEntities(str)
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

export async function fetchRSS(source) {
  try {
    const resp = await fetch(source.url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
        Accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml',
      },
      signal: AbortSignal.timeout(15000),
    })
    if (!resp.ok) {
      console.warn(`[${source.name}] HTTP ${resp.status}`)
      return []
    }
    const xml = await resp.text()
    const format = detectFormat(xml)
    if (!format) {
      console.warn(`[${source.name}] Unknown format`)
      return []
    }
    const rawItems = format === 'rss' ? parseRSS(xml) : parseAtom(xml)
    const items = rawItems.map((item) => ({
      id: `${source.name}::${item.link}`,
      type: 'news',
      title: stripHtml(item.title),
      url: item.link,
      description: stripHtml(item.description),
      published_date: item.pubDate,
      source: source.name,
      lang: source.lang,
    }))
    console.log(`[${source.name}] ${items.length} items`)
    return items
  } catch (err) {
    console.warn(`[${source.name}] Error: ${err.message}`)
    return []
  }
}

export async function fetchAllRSS(sources) {
  const results = await Promise.allSettled(sources.map(fetchRSS))
  const items = []
  for (const r of results) {
    if (r.status === 'fulfilled') items.push(...r.value)
  }
  return items
}
