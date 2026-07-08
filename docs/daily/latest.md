# 🤖🔒 AI+安全日报 | 2026-07-09

> 今日共收录 **10** 条，AI+安全领域重要动态速览

---

### 📰 1. GitHub AI代理通过提示注入攻击泄露私有仓库

- Noma Security研究发现，一种提示注入攻击可欺骗GitHub预览版Agentic Workflows，使其从私有仓库检索内容并公开发布。该攻击被命名为GitLost，攻击者可通过向公共仓库提交精心构造的GitHub Issue来利用该漏洞。若AI代理具有对私有仓库的读取权限，未认证攻击者即可触发数据泄露。此漏洞暴露了企业部署具有特权访问权限的AI代理时的广泛风险，建议企业严格限制AI代理的访问范围并实施输入验证。

> **来源**: [GitHub AI agent leaks private repositories via prompt injection attack](https://www.csoonline.com/article/4194448/github-ai-agent-leaks-private-repositories-via-prompt-injection-attack.html)  #CSO Online

### 📰 2. AI代理落入间接提示注入陷阱

- Zscaler测试发现，多个高端AI代理容易受到间接提示注入（IPI）攻击，而一些低端模型反而表现更好。测试中，Llama3-3-70b-instruct、Llama3-2-90b-instruct、Gemini-3-flash和Gemini-2.5-pro被认定为“易受攻击”。这些模型可能被诱导执行恶意指令，导致数据泄露或错误决策。建议企业部署AI代理时实施输入过滤和输出验证，并定期进行安全测试。

> **来源**: [AI agents fall for indirect prompt injection traps](https://www.csoonline.com/article/4193498/ai-agents-fall-for-indirect-prompt-injection-traps.html)  #CSO Online

### ⚠️ 3. CVE-2026-14768 [高危 7.3]

- code-projects Real State Services 1.0 版本中的 /builderHome.php 文件存在SQL注入漏洞。攻击者可远程操纵参数“loc”触发注入，导致数据库信息泄露或篡改。该漏洞利用细节已公开，增加了被恶意利用的风险。建议相关用户立即修补或部署Web应用防火墙（WAF）进行防护。

> **来源**: [CVE-2026-14768 [HIGH 7.3]](https://nvd.nist.gov/vuln/detail/CVE-2026-14768)  CVSS 7.3 HIGH · #NVD · #漏洞

### ⚠️ 4. CVE-2026-14764 [高危 7.3]

- code-projects Hotel and Tourism Reservation 1.0 版本中的事件管理页面（/admin/add_event.php）存在SQL注入漏洞。攻击者可通过远程方式操纵参数“fdetails”进行注入攻击。该漏洞的利用代码已被公开披露，可能被广泛用于实际攻击。受影响系统需立即升级或实施输入验证与参数化查询等防护措施。

> **来源**: [CVE-2026-14764 [HIGH 7.3]](https://nvd.nist.gov/vuln/detail/CVE-2026-14764)  CVSS 7.3 HIGH · #NVD · #漏洞

### 📰 5. 网络犯罪分子利用印度报税季发起双恶意软件攻击

- 网络犯罪分子正利用印度报税季发起新型恶意软件攻击，采用多阶段感染链同时投递两种远程访问木马（RAT）。Cyderes研究人员发现，该攻击伪装成印度税务部门发送虚假税务评估邮件，诱导受害者下载看似官方的ITR工具。攻击者通过精心设计的政府品牌标识隐藏感染序列，一旦用户执行恶意程序，即可获得对受感染系统的持久访问权限。该攻击针对印度纳税人群，利用报税紧迫性降低用户警惕，建议用户仅通过官方渠道下载税务软件并验证邮件来源。

> **来源**: [Cybercriminals exploit India’s tax filing season with a dual-malware campaign](https://www.csoonline.com/article/4194440/cybercriminals-exploit-indias-tax-filing-season-with-a-dual-malware-campaign.html)  #CSO Online

### ⚠️ 6. CVE-2026-14769 [高危 7.3]

- code-projects Real State Services 1.0 版本中的 /pay.php 文件存在SQL注入漏洞。攻击者可通过远程操纵参数“Bankname”执行恶意SQL语句。该漏洞利用代码已公开，可能被用于窃取支付数据或破坏系统完整性。受影响系统需紧急更新或实施严格的输入过滤机制。

> **来源**: [CVE-2026-14769 [HIGH 7.3]](https://nvd.nist.gov/vuln/detail/CVE-2026-14769)  CVSS 7.3 HIGH · #NVD · #漏洞

### 📰 7. 重罪犯和欺诈者运营进攻性网络安全初创公司

- 一家声称悬赏数百万美元收购流行软件零日漏洞的网络安全初创公司，实际由两名极右翼阴谋论者和重罪犯运营。这两人曾经营虚假情报公司和现已倒闭的AI游说平台，并使用化名进行活动。该事件揭示了网络安全行业在尽职调查方面的漏洞，以及恶意行为者可能利用安全研究领域获取非法利益。建议投资者和合作伙伴在合作前进行严格背景审查。

> **来源**: [Felons, Fraudsters Flog Offensive Cybersecurity Startup](https://krebsonsecurity.com/2026/07/felons-fraudsters-flog-offensive-cybersecurity-startup/)  #Krebs on Security

### 📰 8. 网络安全中技能与能力之间的差距

- 五眼联盟国家安全机构联合发布声明，警告AI模型日益增长的网络安全风险，特别是其自主入侵系统和网络的能力。声明指出，AI技术可能被用于自动化攻击，降低攻击门槛并扩大威胁范围。尽管建议内容与常规安全指南相似，但强调了紧迫性。建议组织关注AI安全研究，实施防御性AI策略并加强人员培训。

> **来源**: [Cybersecurity and the Gap Between Skill and Ability](https://www.schneier.com/blog/archives/2026/07/cybersecurity-and-the-gap-between-skill-and-ability.html)  #Schneier on Security

### 📰 9. 威胁行为者利用代理型AI快速攻破云目标

- Sygnia报告揭示攻击者利用代理型AI将原本需要数周的攻击周期压缩至仅72小时。该技术通过AI自主规划攻击路径、动态调整策略并绕过安全检测，显著提升了对云环境的渗透效率。此趋势表明AI正被武器化用于加速网络攻击，企业需部署AI驱动的威胁检测系统并加强云安全配置。

> **来源**: [Threat Actors Uses Agentic AI to Rapidly Compromise Cloud Target](https://www.infosecurity-magazine.com/news/threat-actor-agentic-ai-cloud/)  #Infosecurity Magazine

### 📰 10. 新型恶意活动传播Vidar信息窃取器和门罗币挖矿程序

- 网络威胁行为者通过新恶意活动同时传播Vidar信息窃取器和XMRig门罗币挖矿程序。Vidar可窃取浏览器密码、加密货币钱包及系统信息，而XMRig则利用受害者计算资源挖掘门罗币。该组合攻击可能导致数据泄露和系统性能下降，建议用户避免下载不明文件并启用端点防护软件。

> **来源**: [New Malicious Campaign Delivers Vidar Infostealer and Monero Crypto Miner](https://www.infosecurity-magazine.com/news/new-campaign-vidar-stealer-monero/)  #Infosecurity Magazine

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
