# 今日日报
# 🤖🔒 AI+安全日报 | 2026-07-18

> 今日共收录 **10** 条，AI+安全领域重要动态速览

---

### 📰 1. OnlyFans创作者成为CISO的意外盟友，助力网站安全

- 安全研究公司Upguard发现，OnlyFans的成人内容创作者正利用谷歌搜索结果和版权法，主动打击黑客利用大学或政府网站托管恶意软件和诈骗的行为。黑客此前通过窃取OnlyFans内容作为诱饵，在合法网站上建立流量分发系统，吸引受害者点击。现在，创作者通过提交版权侵权通知，迫使谷歌下架相关恶意页面，从而破坏攻击者的流量渠道。这一趋势对CISO（首席信息安全官）具有实际意义，尤其是大学和政府机构，可借助版权保护机制快速清理被滥用的网站资源。安全建议包括与内容平台合作，建立自动化举报流程，并加强网站内容监控。

> **来源**: [OnlyFans performers become unlikely allies of CISOs in securing websites](https://www.csoonline.com/article/4198478/onlyfans-performers-become-unlikely-allies-of-cisos-in-securing-websites.html)  #CSO Online

### 📰 2. CVE-2026-32201、CVE-2026-45659、CVE-2026-56164：关于微软SharePoint Server漏洞被积极利用的常见问题解答

- 美国网络安全和基础设施安全局（CISA）确认，三个本地部署的微软SharePoint Server漏洞（CVE-2026-32201、CVE-2026-45659、CVE-2026-56164）正在被积极利用，并发布了加固警报。攻击者利用这些漏洞可获取未授权访问、建立远程代码执行、窃取IIS机器密钥并部署恶意软件以实现持久化。此外，2026年7月14日披露的另外两个SharePoint Server漏洞（CVE-2026...）也增加了运行本地部署组织的压力。这些漏洞的严重性促使CISA要求联邦机构紧急修补，并建议所有组织立即采取行动。该事件凸显了本地部署SharePoint Server面临的持续威胁，以及及时修补已知漏洞的重要性。

> **来源**: [CVE-2026-32201, CVE-2026-45659, CVE-2026-56164: Frequently Asked Questions About Active Exploitation of Microsoft SharePoint Server Vulnerabilities](https://www.tenable.com/blog/cve-2026-32201-cve-2026-45659-cve-2026-56164-faq-sharepoint-server-exploitation)  #Tenable Blog

### 📰 3. CVE-2026-15409、CVE-2026-15410：SonicWall SMA 1000零日漏洞在野被利用

- SonicWall修补了两个在其SMA 1000系列安全远程访问设备中被利用的零日漏洞（CVE-2026-15409和CVE-2026-15410）。这两个漏洞可能被链式利用，实现未经身份验证的远程代码执行。SonicWall确认已观察到这些漏洞的零日利用，并发布了补丁和入侵指标（IoC）。强烈建议用户紧急修补受影响的设备。该事件强调了远程访问设备作为攻击入口点的风险，以及及时应用安全更新的必要性。

> **来源**: [CVE-2026-15409, CVE-2026-15410: SonicWall SMA 1000 zero-day vulnerabilities exploited in the wild](https://www.tenable.com/blog/cve-2026-15409-cve-2026-15410-sonicwall-sma-1000-zero-day-vulnerabilities-exploited-in-the)  #Tenable Blog

### ⚠️ 4. CVE-2026-47158 [高危 8.3]

- Vaultwarden（一个用Rust编写的Bitwarden兼容服务器）在1.36.0版本之前存在一个高危漏洞（CVSS评分8.3）。该漏洞源于SSO授权流程未将/connect/authorize接受的OAuth状态参数绑定到发起浏览器会话，允许攻击者控制的PKCE参数，并且在令牌交换失败后SsoAuth记录保持完整。这允许未经身份验证的攻击者诱导身份提供商（IdP）认证并兑换令牌，从而获得完全认证的会话。该问题已在1.36.0版本中修复，建议用户立即升级。

> **来源**: [CVE-2026-47158 [HIGH 8.3]](https://nvd.nist.gov/vuln/detail/CVE-2026-47158)  CVSS 8.3 HIGH · #NVD · #漏洞

### 📰 5. 将应用安全数据纳入暴露管理平台的5个理由

- 将应用安全扫描器的数据整合到暴露管理平台中，可以利用更广泛的风险背景评估原本孤立的代码缺陷带来的威胁，从而揭示安全团队和开发团队可以共同消除的隐藏暴露点。通过打破应用安全孤岛，集成独立代码扫描器数据，可以获得从代码到运行时的完整可见性。暴露管理通过上下文化应用安全发现、过滤警报噪音和自动化补丁，帮助组织更有效地管理风险。这种方法将应用安全从孤立活动转变为整体风险管理的一部分，提升安全运营效率。

> **来源**: [5 reasons to bring application security data into your exposure management platform](https://www.tenable.com/blog/application-security-data-exposure-management-integration)  #Tenable Blog

### 📰 6. 微软披露“漏洞之母”，数量是6月纪录的三倍

- 微软提前警告客户和防御者，AI将发现大量缺陷，随后确实发布了创纪录的漏洞数量，是6月之前纪录的三倍。这些漏洞涵盖多个产品，包括Windows、Office和Azure，但未提供具体CVE编号或严重等级。这一激增归因于AI辅助的漏洞挖掘技术，提高了发现效率。建议用户立即应用微软的安全更新，并加强补丁管理流程，以应对快速增长的漏洞威胁。

> **来源**: [Microsoft discloses ‘the mother of all’ vulnerability loads, tripling June’s previous record](https://cyberscoop.com/microsoft-patch-tuesday-july-2026/)  #CyberScoop

### 📰 7. 你的经期追踪器（可能）在监视你

- 该报道揭示了经期追踪应用存在隐私泄露风险，可能将用户数据用于不当目的。此外，文中还提及俄罗斯网络间谍转向攻击基础设施、美国国土安全部多次未能发现自身被入侵、以及一起AI音乐生成器数据抓取泄露事件。这些事件共同凸显了个人数据在数字时代面临的广泛威胁，尤其是敏感健康信息。建议用户谨慎选择经期追踪应用，并审查其隐私政策，同时关注基础设施安全漏洞的修复。

> **来源**: [Your Period Tracker Is (Probably) Spying on You](https://www.wired.com/story/security-news-this-week-your-period-tracker-is-probably-spying-on-you/)  #Wired Security

### 📰 8. 欧盟命令谷歌向竞争对手AI代理开放安卓系统

- 欧盟依据《数字市场法案》对谷歌采取行动，要求其向其他AI助手开放安卓操作系统，确保它们能平等访问应用和系统服务。另一项裁决要求谷歌与竞争对手搜索引擎共享其独有的搜索数据。这些措施旨在打破谷歌在移动生态和搜索市场的垄断，促进公平竞争。谷歌对此表示反对，认为这可能损害用户体验和创新。该裁决对全球科技监管具有示范意义，可能影响其他地区对大型科技公司的反垄断政策。

> **来源**: [Google must open Android to rival AI agents, EU orders](https://www.csoonline.com/article/4198425/google-must-open-android-to-rival-ai-agents-eu-orders-2.html)  #CSO Online

### 📰 9. 高管正在扼杀你的影子AI策略

- 调查显示，近三分之二的高管承认使用未经批准的AI工具，而普通员工中这一比例仅为31%。尽管四分之三的员工认识到影子AI存在安全或数据隐私风险，但高管仍普遍使用。TrustedTech的白皮书指出，大多数影子AI用户并非不知风险，而是低估了后果。这种行为给企业CISO带来巨大挑战，因为高管的权限和访问范围更大，可能导致敏感数据泄露。建议企业制定明确的AI使用政策，并对高管进行针对性培训，同时部署监控工具以检测未授权AI工具的使用。

> **来源**: [Senior executives are killing your shadow AI strategy](https://www.csoonline.com/article/4198007/senior-executives-are-killing-your-shadow-ai-strategy.html)  #CSO Online

### 📰 10. 当AI拥有实体，它继承了攻击面

- 文章指出，随着人形机器人等具身AI系统从演示阶段进入采购部署，安全团队往往在缺乏完整评估的情况下被迫签字，因为这些系统被视为网络物理基础设施。技术挑战在于，具身AI继承了物理传感器、执行器和通信接口的攻击面，包括摄像头、激光雷达和云端控制通道，可能被用于物理破坏或数据窃取。影响范围涉及制造业、物流和医疗等采用机器人自动化的行业，安全风险包括远程劫持、传感器欺骗和固件篡改。行业意义在于，组织需在采购前要求供应商提供安全架构文档，并建立涵盖物理和网络安全的综合评估流程。

> **来源**: [When AI gets a body, it inherits an attack surface](https://www.csoonline.com/article/4197463/when-ai-gets-a-body-it-inherits-an-attack-surface.html)  #CSO Online

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
