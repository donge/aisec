import { GEMINI_CONFIG } from './config.js'

function buildSummaryPrompt(items) {
  const list = items
    .map(
      (item, i) =>
        `${i + 1}. 标题：${item.title}\n   内容：${item.description.slice(0, 600)}\n   来源：${item.source}`
    )
    .join('\n\n')

  return `你是一个AI+安全领域的信息分析师。请为以下资讯逐条生成中文摘要。

要求：
- 每条摘要 2-3 句，突出关键信息和技术要点
- AI 相关的内容强调 AI 技术角度
- 安全事件强调影响范围和严重程度
- CVE 漏洞注明严重等级
- 不要编造原文没有的信息
- 每条摘要以 "- " 开头

返回格式示例：
- [摘要1内容]
- [摘要2内容]

资讯列表：

${list}`
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

  const BATCH_SIZE = 8
  const results = []

  for (let i = 0; i < items.length; i += BATCH_SIZE) {
    const batch = items.slice(i, i + BATCH_SIZE)
    const prompt = buildSummaryPrompt(batch)

    try {
      const url = `${GEMINI_CONFIG.apiBaseUrl}/models/${GEMINI_CONFIG.model}:generateContent?key=${apiKey}`
      const resp = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: GEMINI_CONFIG.temperature,
            maxOutputTokens: GEMINI_CONFIG.maxOutputTokens,
          },
        }),
        signal: AbortSignal.timeout(30000),
      })

      if (!resp.ok) {
        const errText = await resp.text()
        const errMsg = errText.slice(0, 200)
        console.warn(`[Gemini] HTTP ${resp.status}: ${errMsg}`)

        if (resp.status === 429) {
          console.warn('[Gemini] Rate limited, waiting 5s before retry...')
          await new Promise((r) => setTimeout(r, 5000))
          i -= BATCH_SIZE
          continue
        }

        results.push(...batch.map((item) => ({ ...item, summary: '' })))
        continue
      }

      const data = await resp.json()
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || ''
      const summaries = text
        .split('\n')
        .filter((line) => line.trim().startsWith('- '))
        .map((line) => line.replace(/^-\s*/, '').trim())

      for (let j = 0; j < batch.length; j++) {
        batch[j].summary = summaries[j] || ''
      }

      results.push(...batch)
      console.log(`[Gemini] Summarized batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(items.length / BATCH_SIZE)}`)
    } catch (err) {
      console.warn(`[Gemini] Error: ${err.message}`)
      results.push(...batch.map((item) => ({ ...item, summary: '' })))
    }

    if (i + BATCH_SIZE < items.length) {
      await new Promise((r) => setTimeout(r, 500))
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
