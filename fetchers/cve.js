import { CVE_CONFIG } from '../config.js'

function getTodayRange() {
  const now = new Date()
  const end = now.toISOString().replace(/\.\d{3}Z/, '.000')
  const start = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000)
    .toISOString()
    .replace(/\.\d{3}Z/, '.000')
  return { start, end }
}

function isRelevant(desc, title) {
  const text = `${title} ${desc}`.toLowerCase()
  const matches = CVE_CONFIG.aiKeywords.filter((kw) => text.includes(kw))
  return matches.length >= 2 ? matches : false
}

export async function fetchCVEs() {
  try {
    const { start, end } = getTodayRange()
    const url = `https://services.nvd.nist.gov/rest/json/cves/2.0?pubStartDate=${start}&pubEndDate=${end}&resultsPerPage=${CVE_CONFIG.maxResults}`

    const resp = await fetch(url, {
      headers: { 'User-Agent': 'aisec-daily/1.0' },
      signal: AbortSignal.timeout(15000),
    })
    if (!resp.ok) {
      console.warn(`[CVE] HTTP ${resp.status}`)
      return []
    }
    const data = await resp.json()
    const vulns = data.vulnerabilities || []
    const items = []

    for (const v of vulns) {
      const cve = v.cve
      const id = cve.id
      const descriptions = cve.descriptions || []
      const descObj =
        descriptions.find((d) => d.lang === 'en') || descriptions[0]
      const description = descObj ? descObj.value.slice(0, 500) : ''

      const metrics = cve.metrics || {}
      const cvssV31 = metrics.cvssMetricV31 || metrics.cvssMetricV30
      let score = 0
      let severity = ''
      if (cvssV31 && cvssV31[0]) {
        score = cvssV31[0].cvssData.baseScore
        severity = cvssV31[0].cvssData.baseSeverity || ''
      }

      if (score < CVE_CONFIG.minScore) continue

      const relevant = isRelevant(description, id)
      const isAICVE = relevant !== false

      items.push({
        id: `CVE::${id}`,
        type: 'cve',
        title: `${id}${severity ? ` [${severity} ${score}]` : ''}${isAICVE ? ' 🔬' : ''}`,
        url: `https://nvd.nist.gov/vuln/detail/${id}`,
        description: description.slice(0, 600),
        published_date: cve.published || new Date().toISOString(),
        source: 'NVD',
        lang: 'en',
        details: {
          score,
          severity,
          isAIRelevant: isAICVE,
          aiMatches: isAICVE ? relevant : [],
        },
      })
    }

    console.log(`[CVE] ${items.length} items (≥ CVSS ${CVE_CONFIG.minScore})`)
    return items
  } catch (err) {
    console.warn(`[CVE] Error: ${err.message}`)
    return []
  }
}
