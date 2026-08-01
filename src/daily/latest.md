# 今日日报
# 🤖🔒 AI+安全日报 | 2026-08-02

> 今日共收录 **10** 条，AI+安全领域重要动态速览

---

### 📰 1. Anthropic’s Opus 5 Is Better at Resisting Prompt Injection

The chart is interesting. On the IPI benchmark, Opus 5 improved over Opus 4.8, reducing the probability of an attacker succeeding within 15 attempts from 5.5% to 2.0%, and from 0.5% to 0.2% on 1 attempt. It also improved on Sonnet 5 (5.9% at k=15) and Mythos 5 (2.6%), making it the most robust model

> **来源**: [Anthropic’s Opus 5 Is Better at Resisting Prompt Injection](https://www.schneier.com/blog/archives/2026/07/anthropics-opus-5-is-better-at-resisting-prompt-injection.html)  #Schneier on Security

### 📰 2. Chinese Hacker Uses DeepSeek AI to Orchestrate Vulnerability Exploits

A Chinese-speaking threat actor has been using DeepSeek’s AI models to orchestrate cyber-attacks targeting Asian organizations

> **来源**: [Chinese Hacker Uses DeepSeek AI to Orchestrate Vulnerability Exploits](https://www.infosecurity-magazine.com/news/chinese-hacker-deepseek-ai/)  #Infosecurity Magazine

### ⚠️ 3. CVE-2026-67191 [CRITICAL 9.8]

Xlight FTP Server before 3.9.5 contains a pre-authentication heap buffer overflow vulnerability that allows remote unauthenticated attackers to write past the end of a heap buffer by sending a malformed SSH client identification string. A logic error in the recv loop's termination condition uses an 

> **来源**: [CVE-2026-67191 [CRITICAL 9.8]](https://nvd.nist.gov/vuln/detail/CVE-2026-67191)  CVSS 9.8 CRITICAL · #NVD · #漏洞

### ⚠️ 4. CVE-2026-60112 [CRITICAL 9.8]

AMMOS Instrument Toolkit (AIT) GUI before 2.5.1 contains a missing authentication vulnerability that allows any unauthenticated network attacker to obtain a valid session and issue arbitrary spacecraft commands by calling Sessions.create() without any credential check. Attackers can exploit the unau

> **来源**: [CVE-2026-60112 [CRITICAL 9.8]](https://nvd.nist.gov/vuln/detail/CVE-2026-60112)  CVSS 9.8 CRITICAL · #NVD · #漏洞

### ⚠️ 5. CVE-2026-67192 [HIGH 8.1]

Xlight FTP Server before 3.9.5 contains a pre-authentication stack buffer overflow vulnerability that allows unauthenticated attackers to corrupt stack memory by sending malformed SSH packets when a GCM cipher is negotiated. Attackers can craft packets with an unvalidated length field passed directl

> **来源**: [CVE-2026-67192 [HIGH 8.1]](https://nvd.nist.gov/vuln/detail/CVE-2026-67192)  CVSS 8.1 HIGH · #NVD · #漏洞

### ⚠️ 6. CVE-2026-60113 [CRITICAL 9.8]

AMMOS Instrument Toolkit (AIT) Deep Space Network (DSN) Interface before 2.2.2 contains a missing authentication vulnerability in the Space Link Extension (SLE) interface manager that allows unauthenticated network attackers to access seven unprotected API routes by sending direct HTTP requests with

> **来源**: [CVE-2026-60113 [CRITICAL 9.8]](https://nvd.nist.gov/vuln/detail/CVE-2026-60113)  CVSS 9.8 CRITICAL · #NVD · #漏洞

### 📰 7. How OpenAI's agent escaped: Sprung by humans in a series of preventable events

Behind the rogue agent's attack on Hugging Face was a particular sequence of human decisions. We all need to pay better attention - because threat actors are learning, too.

> **来源**: [How OpenAI's agent escaped: Sprung by humans in a series of preventable events](https://www.zdnet.com/article/how-openais-agent-escaped-mapping-a-series-of-preventable-events/)  #ZDNet Security

### 📰 8. The $5 million threat: AI Is supercharging phishing attacks

According to the newly-published study, phishing and social engineering are becoming more expensive to recover from, trickier to detect, and increasingly augmented by artificial intelligence. Read more in my article on the Fortra blog.

> **来源**: [The $5 million threat: AI Is supercharging phishing attacks](https://www.fortra.com/blog/5-million-threat-ai-supercharging-phishing-attacks)  #Graham Cluley

### 📰 9. How MFA gets hacked — and strategies to prevent it

The security benefits of multifactor authentication (MFA) are well-known, yet MFA continues to be poorly, sporadically, and inconsistently implemented, undercutting its effectiveness as a security tool while often saddling users with an extra workflow burden — one of many obstacles to MFA’s success.

> **来源**: [How MFA gets hacked — and strategies to prevent it](https://www.csoonline.com/article/570795/how-to-hack-2fa.html)  #CSO Online

### 📰 10. 7 States’ Water Systems Hit by Cyberattacks Likely Tied to Iran

Plus: The FBI eyes AI-powered tech to detect future crimes, Russia charges Telegram’s founder, xAI sues to stop a state’s “nudification” ban, and the Democrats learn a lesson about getting scammed.

> **来源**: [7 States’ Water Systems Hit by Cyberattacks Likely Tied to Iran](https://www.wired.com/story/security-news-this-week-7-states-water-systems-hit-by-cyberattacks-likely-tied-to-iran/)  #Wired Security

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
