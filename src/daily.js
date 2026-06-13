import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'
import { RSS_SOURCES, MAX_DAILY_ITEMS } from './config.js'
import { fetchAllRSS } from './fetchers/rss.js'
import { fetchArxivPapers } from './fetchers/arxiv.js'
import { fetchCVEs } from './fetchers/cve.js'
import { summarizeItems } from './summarizer.js'
import { selectTopItems } from './generator.js'
import { generateMarkdown } from './templates/markdown.js'
import { generateWeChatHtml } from './templates/wechat.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

function loadPublishedUrls() {
  const dailyDir = path.join(ROOT, 'daily')
  const urls = new Set()
  try {
    const files = fs.readdirSync(dailyDir).filter((f) => f.endsWith('.md') && f !== 'latest.md')
    for (const file of files) {
      const content = fs.readFileSync(path.join(dailyDir, file), 'utf-8')
      const linkRegex = /\]\(([^)]+)\)/g
      let m
      while ((m = linkRegex.exec(content)) !== null) {
        const url = m[1].split('#')[0].split('?')[0].replace(/\/+$/, '')
        if (url.startsWith('http')) urls.add(url)
      }
    }
    console.log(`       已加载 ${files.length} 篇历史日报，${urls.size} 个已发布 URL`)
  } catch {
    console.log('       无历史日报数据')
  }
  return urls
}

function getDateStr() {
  const now = new Date()
  const beijing = new Date(now.getTime() + 8 * 60 * 60 * 1000)
  const y = beijing.getUTCFullYear()
  const m = String(beijing.getUTCMonth() + 1).padStart(2, '0')
  const d = String(beijing.getUTCDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

async function main() {
  const apiKey = process.env.DEEPSEEK_API_KEY
  if (!apiKey) {
    console.error('❌ DEEPSEEK_API_KEY 环境变量未设置')
    process.exit(1)
  }

  const dateStr = getDateStr()
  console.log(`\n=== 🤖🔒 AI+安全日报 | ${dateStr} ===\n`)

  console.log('[1/5] 抓取 RSS 数据源...')
  const rssItems = await fetchAllRSS(RSS_SOURCES)
  console.log(`       RSS 总计: ${rssItems.length} 条`)

  console.log('[2/5] 抓取 arXiv 论文...')
  const arxivItems = await fetchArxivPapers()
  console.log(`       arXiv: ${arxivItems.length} 篇`)

  console.log('[3/5] 抓取 CVE 漏洞...')
  const cveItems = await fetchCVEs()
  console.log(`       CVE: ${cveItems.length} 条`)

  const allItems = [...rssItems, ...arxivItems, ...cveItems]
  console.log(`\n       总计: ${allItems.length} 条`)

  if (allItems.length === 0) {
    console.error('❌ 未获取到任何数据')
    process.exit(1)
  }

  console.log('[3.5/5] 去重: 过滤已发布内容...')
  const publishedUrls = loadPublishedUrls()
  const beforeDedup = allItems.length
  const deduped = allItems.filter((item) => !publishedUrls.has(item.url.split('#')[0].split('?')[0].replace(/\/+$/, '')))
  const removed = beforeDedup - deduped.length
  console.log(`       去重: 移除 ${removed} 条已发布内容，剩余 ${deduped.length} 条`)

  console.log('\n[4/5] DeepSeek AI 摘要生成...')
  const summarized = await summarizeItems(deduped, apiKey)
  const withSummary = summarized.filter((item) => item.summary)
  console.log(`       成功摘要: ${withSummary.length}/${summarized.length} 条`)

  console.log('\n[5/5] 排序筛选 Top 10...')
  const topItems = selectTopItems(withSummary.length > 0 ? withSummary : summarized, MAX_DAILY_ITEMS)
  console.log(`       精选: ${topItems.length} 条\n`)

  for (const item of topItems) {
    const score = (item.score || 0).toFixed(1)
    console.log(`  ${topItems.indexOf(item) + 1}. [${item.source}] ${item.title.slice(0, 60)}`)
  }

  console.log('\n--- 生成文件 ---')

  const md = generateMarkdown(topItems, dateStr)
  const mdPath = path.join(ROOT, 'daily', `${dateStr}.md`)
  fs.mkdirSync(path.dirname(mdPath), { recursive: true })
  fs.writeFileSync(mdPath, md, 'utf-8')
  console.log(`  ✅ daily/${dateStr}.md`)

  const latestMdPath = path.join(ROOT, 'daily', 'latest.md')
  fs.writeFileSync(latestMdPath, md, 'utf-8')
  console.log(`  ✅ daily/latest.md`)

  const html = generateWeChatHtml(topItems, dateStr)
  const htmlPath = path.join(ROOT, 'wechat', `${dateStr}.html`)
  fs.mkdirSync(path.dirname(htmlPath), { recursive: true })
  fs.writeFileSync(htmlPath, html, 'utf-8')
  console.log(`  ✅ wechat/${dateStr}.html`)

  const latestHtmlPath = path.join(ROOT, 'wechat', 'latest.html')
  fs.writeFileSync(latestHtmlPath, html, 'utf-8')
  console.log(`  ✅ wechat/latest.html`)

  console.log('\n=== ✅ 完成 ===\n')
}

main().catch((err) => {
  console.error('❌ 运行时错误:', err)
  process.exit(1)
})
