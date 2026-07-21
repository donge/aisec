# 🤖🔒 AI+安全日报 | 2026-07-22

> 今日共收录 **10** 条，AI+安全领域重要动态速览

---

### ⚠️ 1. CVE-2026-12228 [高危 8.7] 🔬

- parisneo/lollms（最新版本）的`POST /api/prompts/share`端点存在存储型跨站脚本（XSS）漏洞。攻击者可通过该端点将恶意`prompt_content`存储到`DBDirectMessage.content`中，且服务器端未进行清理。当受害者打开直接消息（DM）线程时，DM UI通过`MessageContentRenderer`使用`v-html`将渲染后的HTML插入DOM，而前端基于正则表达式的清理器无法完全防御。该漏洞影响所有使用该版本的lollms用户，攻击者可窃取会话令牌或执行恶意操作。建议升级至修复版本或实施服务器端输入验证。

> **来源**: [CVE-2026-12228 [HIGH 8.7] 🔬](https://nvd.nist.gov/vuln/detail/CVE-2026-12228)  CVSS 8.7 HIGH · #NVD · #漏洞

### 📰 2. ServiceNow沙箱逃逸远程代码执行漏洞已在野外被利用

- 威胁情报公司Defused报告称，ServiceNow上周修补的一个可能导致远程代码执行（RCE）的沙箱安全漏洞（CVE-2026-6875）正在被积极利用。Defused在X平台上发布报告，表示观察到针对ServiceNow预认证沙箱逃逸RCE漏洞的野外利用行为。Defused CEO Simo Kohonen在接受CSO Online采访时指出，攻击者似乎已改变战术，以应对ServiceNow的补丁，其手法与Searchlight Cyber研究人员早前公开的概念验证（PoC）有所不同。该漏洞影响所有未打补丁的ServiceNow实例，建议企业立即应用安全更新，并监控异常网络活动。

> **来源**: [ServiceNow’s sandbox escape RCE hole now exploited in the wild](https://www.csoonline.com/article/4198993/servicenows-sandbox-escape-rce-hole-now-exploited-in-the-wild.html)  #CSO Online

### 📰 3. AI代理配置成为攻击载荷：攻击者如何瞄准开发者代理工具链

- 攻击者已从躲避AI工具转向在AI工具内部进行攻击，通过投毒AI编码助手的配置文件（如settings.json钩子、.cursorrules Cursor MDC规则等）实现新型蠕虫攻击。这种攻击方式能够实现静默持久化、规避基于AI的扫描器，并通过开发者自身工具在组织仓库间传播。这些配置文件同时处于开发者信任、工具信任和供应链信任三个信任关系的交叉点，成为供应链攻击的明确目标而非附带损害。建议开发团队对AI编码助手的配置文件实施严格的版本控制和访问权限管理，并定期审计配置变更。

> **来源**: [Your AI agent’s config is now the payload: How attackers are targeting the developer agent harness](https://www.tenable.com/blog/ai-coding-assistant-agent-harness-attacks)  #Tenable Blog

### 📰 4. 上下文炸弹预示AI时代欺骗性防御新纪元

- 攻击者正越来越多地使用AI代理来自动化网络攻击的各个阶段，这促使安全行业和企业寻找新的网络防御方法。一种有前景的技术是故意植入带有提示的诱饵文件，这些提示会触发大型语言模型（LLM）内置的内容安全护栏，旨在破坏恶意代理工作流。在网络安全中，使用诱饵资源作为警报器来提醒防御者潜在的未授权访问并非新概念，这些被称为“金丝雀”（canaries），源自煤矿中的预警系统，可以是虚假文档。这种“上下文炸弹”技术利用AI自身的机制进行防御，标志着欺骗性防御进入AI时代，但需注意其可能被对手反向利用。

> **来源**: [Context bombing heralds a new AI era of deceptive defense](https://www.csoonline.com/article/4198524/context-bombing-heralds-a-new-ai-era-of-deceptive-defense.html)  #CSO Online

### 📰 5. 白帽黑客Park Chan-am聚焦AI时代关键安全挑战

- 被誉为“天才黑客”的Park Chan-am，在11岁就开始了白帽黑客生涯，十几岁起就在国内外黑客竞赛中获奖。他曾担任韩国多个政府机构（包括国家警察厅）的网络安全顾问，并在该国防御与朝鲜（DPRK）相关的网络攻击中发挥了关键作用。在本月由韩国多个政府机构主办的第15届信息安全日活动研讨会上，他重点讨论了AI时代的关键安全挑战，包括AI驱动的攻击自动化、深度伪造威胁以及关键基础设施的防护。Park强调，随着AI技术的普及，安全社区需要开发新的防御策略，并加强国际合作以应对跨国网络威胁。

> **来源**: [White hat hacker Park Chan-am zeros in on the AI era’s key security challenges](https://www.csoonline.com/article/4198528/security-in-the-age-of-ai-where-to-start-key-challenges-identified-by-white-hacker-ceo-park-chan-am.html)  #CSO Online

### ⚠️ 6. CVE-2026-10130 [高危 8.2]

- QueryWeaver存在认证绕过漏洞，允许未认证攻击者通过提交已知受害者电子邮件地址的注册请求，获取现有账户的有效会话令牌。注册路由在检查电子邮件是否属于现有账户之前，通过Cypher MERGE操作无条件创建并链接新令牌到匹配的身份，导致服务器返回受害者身份的有效认证会话令牌。该漏洞影响所有QueryWeaver版本，攻击者可完全接管账户。建议立即应用补丁或修改注册逻辑以先验证邮箱唯一性。

> **来源**: [CVE-2026-10130 [HIGH 8.2]](https://nvd.nist.gov/vuln/detail/CVE-2026-10130)  CVSS 8.2 HIGH · #NVD · #漏洞

### 📰 7. Claude Mythos常见问题解答：能力、访问、竞争对手、影响

- Anthropic公司开发的Claude Mythos是一款针对网络安全和医疗应用优化的高级AI模型。Mythos 5最初于4月向一小批经过审查的技术合作伙伴发布，计划后续更广泛推广。Anthropic建立了Project Glasswing联盟，向基础设施提供商、开源开发者及大型科技公司提供有限且受控的Mythos访问权限。该计划旨在帮助防御者比攻击者更快发现和修复漏洞，许多合作伙伴已利用该模型提升安全响应效率。此举标志着AI在安全防御领域的战略应用，可能重塑漏洞管理行业格局。

> **来源**: [Claude Mythos FAQ: Capabilities, access, competitors, implications](https://www.csoonline.com/article/4198019/claude-mythos-faq-capabilities-access-competitors-implications.html)  #CSO Online

### ⚠️ 8. CVE-2026-16154 [高危 7.3]

- SourceCodester Class and Exam Timetabling System 1.0/1.php存在SQL注入漏洞，影响文件/edit_room1.php中未知功能，通过操纵ID参数可实现远程SQL注入攻击。该漏洞与CVE-2026-16152类似但影响不同文件，漏洞利用代码已公开。建议用户同时修复这两个漏洞，并部署Web应用防火墙（WAF）作为临时防护措施，同时对所有数据库查询实施预编译语句。

> **来源**: [CVE-2026-16154 [HIGH 7.3]](https://nvd.nist.gov/vuln/detail/CVE-2026-16154)  CVSS 7.3 HIGH · #NVD · #漏洞

### ⚠️ 9. CVE-2026-16152 [高危 7.3]

- SourceCodester Class and Exam Timetabling System 1.0存在SQL注入漏洞，影响文件/edit_rooma.php中未知功能，通过操纵ID参数可实现远程SQL注入攻击。漏洞利用代码已公开，可能被广泛利用。该系统常用于教育机构排课管理，建议管理员立即应用补丁或升级到最新版本，并对所有用户输入进行参数化查询处理。

> **来源**: [CVE-2026-16152 [HIGH 7.3]](https://nvd.nist.gov/vuln/detail/CVE-2026-16152)  CVSS 7.3 HIGH · #NVD · #漏洞

### 📰 10. AI、自动化与攻击：解读Unit 42 2026年全球事件响应报告

- Palo Alto Networks的Unit 42团队发布了2026年全球事件响应报告，深入分析了AI对网络安全的影响。报告指出，AI驱动的攻击自动化已成为主流，攻击者利用生成式AI快速生成钓鱼邮件、恶意代码和漏洞利用工具，显著缩短了攻击时间线。同时，AI也被用于防御端，例如自动化威胁检测、事件响应和漏洞修复。报告还强调了勒索软件、供应链攻击和云安全漏洞仍然是主要威胁，而AI的滥用加剧了这些风险的复杂性。Unit 42建议企业将AI安全纳入整体风险管理框架，并投资于AI驱动的安全运营中心（SOC）以应对日益自动化的攻击。

> **来源**: [AI, Automation and Attacks: Unpacking the Unit 42 2026 Global Incident Response Report](https://unit42.paloaltonetworks.com/ai-insights-incident-response-report/)  #Unit 42

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
