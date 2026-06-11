import { LLM_CONFIG } from './config.js'

const AI_SEC_KEYWORDS = [
  'ai', 'llm', 'gpt', 'chatgpt', 'machine learning', 'deep learning',
  'neural', 'adversarial', 'jailbreak', 'prompt injection',
  'ransomware', 'malware', 'vulnerability', 'exploit', 'zero-day',
  'attack', 'breach', 'security', 'threat', 'cyber',
  'authentication', 'encryption', 'privacy', 'backdoor',
  'supply chain', 'phishing', 'red team',
]

function keywordScore(item) {
  const text = `${item.title} ${item.description}`.toLowerCase()
  return AI_SEC_KEYWORDS.filter((kw) => text.includes(kw)).length
}

function preFilterItems(items, maxCount = 30) {
  const scored = items.map((item) => ({ ...item, _kwScore: keywordScore(item) }))
  scored.sort((a, b) => b._kwScore - a._kwScore)
  return scored.slice(0, maxCount)
}

function buildSummaryPrompt(items) {
  const list = items
    .map(
      (item, i) =>
        `${i + 1}. 标题：${item.title}\n   内容：${item.description.slice(0, 600)}\n   来源：${item.source}`
    )
    .join('\n\n')

  return {
    system: '你是一个AI+安全领域的信息分析师。请为以下每条资讯完成两项任务：\n\n1. 将英文标题翻译为中文（保持专业术语准确）\n2. 生成详细的中文摘要（4-5句，包含：核心事件、技术细节、影响范围、行业意义或安全建议）\n\n返回格式（严格按此格式）：\n\n1. 中文标题 | EN: 原标题\n   - 详细摘要内容...\n\n2. 中文标题 | EN: 原标题\n   - 详细摘要内容...\n\n要求：标题翻译要准确简洁；摘要要有足够信息量，不要笼统概括；CVE漏洞注明严重等级和影响版本。不要编造原文没有的信息。',
    user: `资讯列表：

${list}`,
  }
}

function buildRankPrompt(items) {
  const list = items
    .map(
      (item, i) =>
        `${i + 1}. 标题：${item.title}\n   摘要：${item.summary}\n   来源：${item.source}\n   类型：${item.type}`
    )
    .join('\n\n')

  return `你是一个AI+安全领域的资深编辑。请从以下资讯中选出最重要的 TOP 10 条。

排序标准：
1. AI+安全相关性（优先：AI安全风险、AI赋能安全、AI系统漏洞）
2. 新闻重要性（影响范围、严重程度）
3. 时效性
4. 多样性（避免同一个来源多条）

返回格式（仅输出序号，每行一个）：
3
7
1
...`

  // We don't actually use this - we sort by our own heuristic
  // and let the user override via the markdown ordering
}

export async function summarizeItems(items, apiKey) {
  if (items.length === 0) return []

  const filtered = preFilterItems(items)
  console.log(`[Gemini] Pre-filtered: ${items.length} → ${filtered.length} items`)

  const BATCH_SIZE = 8
  const MAX_RETRIES = 3
  const results = []

  for (let i = 0; i < filtered.length; i += BATCH_SIZE) {
    const batch = filtered.slice(i, i + BATCH_SIZE)
    const { system, user } = buildSummaryPrompt(batch)
    let retries = 0
    let success = false

    while (retries <= MAX_RETRIES && !success) {
      try {
        const url = `${LLM_CONFIG.apiBaseUrl}/chat/completions`
        const resp = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: LLM_CONFIG.model,
            messages: [
              { role: 'system', content: system },
              { role: 'user', content: user },
            ],
            temperature: LLM_CONFIG.temperature,
            max_tokens: LLM_CONFIG.maxTokens,
          }),
          signal: AbortSignal.timeout(60000),
        })

        if (!resp.ok) {
          const errText = await resp.text()
          const errMsg = errText.slice(0, 200)

          if (resp.status === 429 && retries < MAX_RETRIES) {
            retries++
            const wait = 5 * Math.pow(2, retries)
            console.warn(`[LLM] Rate limited, retry ${retries}/${MAX_RETRIES} after ${wait}s...`)
            await new Promise((r) => setTimeout(r, wait * 1000))
            continue
          }

          console.warn(`[LLM] HTTP ${resp.status}: ${errMsg}`)
          batch.forEach((item) => results.push({ ...item, summary: '' }))
          success = true
          continue
        }

        const data = await resp.json()
        const text = data.choices?.[0]?.message?.content || ''
        const lines = text.split('\n')
        let itemIdx = 0

        for (let j = 0; j < lines.length && itemIdx < batch.length; j++) {
          const line = lines[j]
          const titleMatch = line.match(/^\d+\.\s*(.+?)\s*\|\s*EN:\s*(.+)$/i)
          if (titleMatch) {
            batch[itemIdx].title = titleMatch[1].trim()
            batch[itemIdx].englishTitle = titleMatch[2].trim()
            const nextLine = lines[j + 1]
            if (nextLine && nextLine.trim().startsWith('- ')) {
              batch[itemIdx].summary = nextLine.replace(/^-\s*/, '').trim()
            } else {
              batch[itemIdx].summary = ''
            }
            itemIdx++
          }
        }

        for (let j = 0; j < batch.length; j++) {
          if (!batch[j].summary) {
            batch[j].summary = batch[j].description.slice(0, 300)
          }
        }

        results.push(...batch)
        console.log(`[LLM] Batch ${Math.ceil((i + 1) / BATCH_SIZE)}/${Math.ceil(filtered.length / BATCH_SIZE)}`)
        success = true
      } catch (err) {
        if (retries < MAX_RETRIES) {
          retries++
          console.warn(`[LLM] Error: ${err.message}, retry ${retries}/${MAX_RETRIES}...`)
          await new Promise((r) => setTimeout(r, 3000))
          continue
        }
        console.warn(`[LLM] Failed: ${err.message}`)
        batch.forEach((item) => results.push({ ...item, summary: item.description.slice(0, 200) }))
        success = true
      }
    }
  }

  return results
}

export function scoreItem(item) {
  let score = 0
  const text = `${item.title} ${item.description} ${item.summary || ''}`.toLowerCase()

  if (item.type === 'cve') {
    if (item.details?.isAIRelevant) {
      score += 8
      if (item.details?.score >= 9) score += 3
      else if (item.details?.score >= 7) score += 1
    }
  }

  if (item.type === 'paper') {
    const titleMatch = text.includes('adversarial') || text.includes('attack') || text.includes('defense') ||
      text.includes('security') || text.includes('vulnerability') || text.includes('malware') ||
      text.includes('privacy') || text.includes('jailbreak') || text.includes('prompt injection') ||
      text.includes('backdoor') || text.includes('poisoning') || text.includes('extraction')
    if (titleMatch) score += 5
    else score += 1
  }

  const aiKeywords = [
    'ai', 'llm', 'gpt', 'machine learning', 'deep learning',
    'neural network', 'adversarial', 'prompt injection', 'jailbreak',
    'large language model', 'diffusion', 'transformer',
  ]
  for (const kw of aiKeywords) {
    if (text.includes(kw)) score += 2
  }

  const secKeywords = [
    'vulnerability', 'cve', 'exploit', 'ransomware', 'malware',
    'zero-day', 'attack', 'breach', 'security', 'threat',
  ]
  for (const kw of secKeywords) {
    if (text.includes(kw)) score += 1
  }

  return score
}
