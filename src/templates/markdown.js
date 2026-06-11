export function generateMarkdown(items, dateStr) {
  const dateDisplay = dateStr.replace(/-/g, '/')
  const lines = []
  lines.push(`# 🤖🔒 AI+安全日报 | ${dateStr}`)
  lines.push('')
  lines.push(`> 今日共收录 **${items.length}** 条，AI+安全领域重要动态速览`)
  lines.push('')
  lines.push('---')
  lines.push('')

  items.forEach((item, i) => {
    const catIcons = { news: '📰', paper: '📄', cve: '⚠️', project: '🛠️' }
    const icon = catIcons[item.type] || '📌'
    const tags = []
    if (item.type === 'cve' && item.details?.severity) {
      tags.push(`CVSS ${item.details.score} ${item.details.severity}`)
    }
    if (item.lang === 'zh') tags.push('🇨🇳')
    tags.push(`#${item.source}`)
    if (item.type === 'paper') tags.push('#论文')
    if (item.type === 'cve') tags.push('#漏洞')

    lines.push(`### ${icon} ${i + 1}. ${item.title}`)
    lines.push('')
    const summary = item.summary || item.description.slice(0, 200)
    lines.push(summary)
    lines.push('')
    const meta = []
    meta.push(`**来源**: [${item.source}](${item.url})`)
    if (tags.length > 0) meta.push(tags.join(' · '))
    lines.push(`> ${meta.join('  ')}`)
    lines.push('')
  })

  lines.push('---')
  lines.push('')
  lines.push(
    `> 📮 本日报由 AI (Google Gemini) 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。`
  )
  lines.push('')

  return lines.join('\n')
}
