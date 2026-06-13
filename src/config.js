export const RSS_SOURCES = [
  {
    name: 'Krebs on Security',
    url: 'https://krebsonsecurity.com/feed/',
    lang: 'en',
    priority: 1,
  },
  {
    name: 'Infosecurity Magazine',
    url: 'https://www.infosecurity-magazine.com/rss/news/',
    lang: 'en',
    priority: 1,
  },
  {
    name: 'Graham Cluley',
    url: 'https://grahamcluley.com/feed/',
    lang: 'en',
    priority: 2,
  },
  {
    name: 'Unit 42',
    url: 'https://unit42.paloaltonetworks.com/feed/',
    lang: 'en',
    priority: 1,
  },
  {
    name: 'Schneier on Security',
    url: 'https://www.schneier.com/blog/atom.xml',
    lang: 'en',
    priority: 2,
  },
  {
    name: 'Wired Security',
    url: 'https://www.wired.com/feed/category/security/latest/rss',
    lang: 'en',
    priority: 2,
  },
  {
    name: 'CSO Online',
    url: 'https://www.csoonline.com/feed/',
    lang: 'en',
    priority: 2,
  },
  {
    name: 'CyberScoop',
    url: 'https://cyberscoop.com/feed/',
    lang: 'en',
    priority: 1,
  },
  {
    name: 'Tenable Blog',
    url: 'https://www.tenable.com/blog/feed',
    lang: 'en',
    priority: 2,
  },
  {
    name: 'ZDNet Security',
    url: 'https://www.zdnet.com/topic/security/rss.xml',
    lang: 'en',
    priority: 2,
  },
]

export const ARXIV_CONFIG = {
  query: encodeURIComponent(
    '(abs:(adversarial OR "machine learning" OR "deep learning" OR "large language" OR LLM OR "prompt injection" OR jailbreak OR "AI safety" OR "model extraction" OR "data poisoning" OR backdoor OR "membership inference" OR "privacy attack" OR "red teaming" OR "AI security")) AND (cat:cs.CR OR cat:cs.AI OR cat:cs.LG)'
  ),
  maxResults: 30,
  sortBy: 'submittedDate',
  sortOrder: 'descending',
}

export const CVE_CONFIG = {
  minScore: 7.0,
  maxResults: 20,
  aiKeywords: [
    'ai', 'machine learning', 'deep learning', 'llm', 'large language',
    'neural network', 'transformer', 'diffusion', 'gpt-', 'chatgpt',
    'tensorflow', 'pytorch', 'mlflow', 'flowise', 'langchain',
    'prompt', 'embedding', 'tokenizer', 'vector database', 'ray framework',
  ],
}

export const LLM_CONFIG = {
  provider: 'deepseek',
  apiBaseUrl: 'https://api.deepseek.com/v1',
  model: 'deepseek-chat',
  apiKeyEnv: 'DEEPSEEK_API_KEY',
  temperature: 0.3,
  maxTokens: 4096,
}

export const MAX_DAILY_ITEMS = 10

export const AI_SECURITY_KEYWORDS = [
  'AI', 'artificial intelligence', 'machine learning', 'deep learning',
  'LLM', 'large language model', 'neural network', 'adversarial',
  'prompt injection', 'jailbreak', 'AI safety', 'AI security',
  'machine learning security', 'GPT', 'diffusion model', 'transformer',
  'autonomous', 'agent', 'AI-powered', 'intelligent',
]

export const DATE_FORMAT_OPTIONS = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  timeZone: 'Asia/Shanghai',
}
