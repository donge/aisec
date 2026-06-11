import { scoreItem } from './summarizer.js'

export function selectTopItems(items, maxItems = 10) {
  const scored = items
    .filter((item) => item.title && (item.summary || item.description))
    .map((item) => ({
      ...item,
      score: scoreItem(item),
    }))

  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score
    return new Date(b.published_date) - new Date(a.published_date)
  })

  const selected = []
  const seenSources = {}
  const seenTypes = {}

  for (const item of scored) {
    if (selected.length >= maxItems) break

    const source = item.source
    const type = item.type

    if ((seenSources[source] || 0) >= 4) continue

    selected.push(item)
    seenSources[source] = (seenSources[source] || 0) + 1
  }

  return selected
}
