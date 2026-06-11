# 🤖🔒 AI+安全日报

每日精选 10 条 AI 与安全领域重要动态，自动生成 AI 摘要，支持 GitHub Pages 与微信公众号发布。

## 功能

- 📰 **多源聚合** — 聚合国内外 7+ 安全媒体 RSS
- 📄 **论文跟踪** — arXiv AI+安全相关论文
- ⚠️ **漏洞情报** — NVD 高危 CVE 过滤
- 🤖 **AI 摘要** — Google Gemini 中文摘要
- 🎯 **智能排序** — 每日 Top 10 精选
- 📱 **微信发布** — 生成公众号排版，一键复制

## 数据源

| 来源 | 类型 | 语言 |
|------|------|------|
| The Hacker News | 安全新闻 | EN |
| BleepingComputer | 安全新闻 | EN |
| The Record | 安全新闻 | EN |
| SecurityWeek | 安全新闻 | EN |
| Krebs on Security | 安全新闻 | EN |
| FreeBuf | 安全新闻 | ZH |
| 安全客 | 安全新闻 | ZH |
| arXiv (cs.CR + cs.AI) | 学术论文 | EN |
| NVD | CVE漏洞 | EN |

## 架构

```
GitHub Actions (cron 每日 UTC 15:00)
  ↓
Node.js 脚本:
  1. 抓取 RSS / arXiv / NVD
  2. Gemini AI 中文摘要
  3. 智能排序 Top 10
  4. 生成 daily/*.md + wechat/*.html
  ↓
Git commit → push
  ↓
mdBook → GitHub Pages (站点)
手动: 打开 wechat/*.html → 复制 → 粘贴到公众号
```

## 部署步骤

### 1. 创建 GitHub 仓库

```bash
gh repo create aisec --public
git remote add origin https://github.com/donge/aisec.git
git push -u origin main
```

### 2. 获取 Gemini API Key

前往 [Google AI Studio](https://aistudio.google.com/apikey) 获取免费的 API Key。

### 3. 设置 GitHub Secrets

仓库 → Settings → Secrets and variables → Actions → New repository secret:

| Name | Value |
|------|-------|
| `GEMINI_API_KEY` | 你的 Google Gemini API Key (需在 [Google AI Studio](https://aistudio.google.com/apikey) 获取) |

### 4. 启用 GitHub Pages

仓库 → Settings → Pages → Source: **GitHub Actions**

### 5. 触发首次运行

Actions → **每日生成日报** → Run workflow

### 6. 微信公众号发布

1. 访问 `https://donge.github.io/aisec/wechat/latest.html`
2. 点击"一键复制"按钮
3. 打开微信公众号后台 → 草稿箱 → 新建图文
4. Ctrl+V 粘贴 → 微调格式 → 保存 → 审核发布

## 手动运行

```bash
GEMINI_API_KEY=your_key_here node src/daily.js
```

## 输出

```
daily/
├── 2025-06-11.md     # 日报 Markdown
├── latest.md          # 最新日报副本
wechat/
├── 2025-06-11.html   # 公众号排版 HTML
├── latest.html        # 最新排版副本
```
