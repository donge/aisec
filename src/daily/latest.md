# 今日日报
# 🤖🔒 AI+安全日报 | 2026-07-29

> 今日共收录 **10** 条，AI+安全领域重要动态速览

---

### 📰 1. Hugging Face 入侵事件表明事件响应需要多模型AI策略

- 近期Hugging Face平台遭入侵事件揭示了AI辅助攻击的新趋势：攻击者已能利用大型语言模型（LLM）自动化完成整个攻击链。然而，防御方在尝试以机器速度响应时面临新限制：前沿模型日益保守的安全控制机制会阻止对恶意载荷和入侵痕迹的分析，而这些正是调查事件所必需的。该事件由OpenAI内部对高级模型网络能力的测试失误引发，涉及GPT-5。此案例表明，安全团队需采用多模型AI策略，在保持防御能力的同时避免被单一模型的限制所束缚。

> **来源**: [Hugging Face breach shows why incident response needs a multi-model AI strategy](https://www.csoonline.com/article/4201361/hugging-face-breach-shows-why-incident-response-needs-a-multi-model-ai-strategy.html)  #CSO Online

### 📰 2. 微软推出用于安全运营的多模型智能网络栈

- 微软宣布推出名为Project Perception的新型AI驱动服务，使企业安全团队能够通过一系列AI代理持续评估和更新安全态势。这些代理可发现漏洞、模拟攻击、检测和分类潜在威胁，并制定修复方案。该服务将于8月3日进入公开预览，采用多模型方法，由底层框架决定最适合解决特定任务的AI模型。此举旨在平衡质量与成本，因为并非所有操作都需要使用最强大的模型。

> **来源**: [Microsoft unveils multi-model agentic cyber stack for security operations](https://www.csoonline.com/article/4202080/microsoft-unveils-multi-model-agentic-cyber-stack-for-security-operations.html)  #CSO Online

### 📰 3. AI辅助安全工具发现更多漏洞，但威胁等级未变

- 漏洞情报公司VulnCheck的分析显示，AI发现的漏洞被利用的速度并未比传统发现的漏洞更快。研究表明，尽管AI辅助工具提高了漏洞发现效率，但攻击者利用这些漏洞的时间线并未显著缩短。这意味着AI在安全领域的应用更多是提升了防御方的检测能力，而非改变了攻击方的威胁态势。安全团队应继续关注漏洞修复优先级，而非过度依赖AI发现的数量。

> **来源**: [AI-assisted security tools are finding more bugs, but the threat level has not changed](https://cyberscoop.com/ai-assisted-security-tools-are-finding-more-bugs-but-the-threat-level-has-not-changed/)  #CyberScoop

### 📰 4. Infoblox以DNS为中心进入拥挤的EASM市场

- 随着AI将侦察和漏洞利用开发时间从数周压缩到数小时，安全厂商竞相帮助企业在事件发生前识别暴露面。Infoblox宣布进入外部攻击面管理（EASM）市场，同时推出新的供应链情报能力，扩展其暴露管理产品组合。这两项新增功能旨在让组织同时了解自身互联网资产和关键供应商的资产。据Infoblox称，该组合方案能提供更全面的暴露面视图。

> **来源**: [Infoblox joins crowded EASM market with DNS-centric approach](https://www.csoonline.com/article/4202205/infoblox-joins-crowded-easm-market-with-dns-centric-approach.html)  #CSO Online

### 📰 5. 黑客入侵酒店Wi-Fi网关劫持Microsoft 365账户

- ReliaQuest威胁研究团队警告，自6月以来，威胁行为者一直在入侵酒店、会议中心等场所的“强制门户”Wi-Fi网关和其他门户设备，以劫持用户的Microsoft 365账户。一旦攻击者控制网关，他们可以静默地将用户流量重定向到自己的基础设施，窃取Microsoft 365凭证，而无需接触用户设备、破坏端点或发送钓鱼邮件。企业员工在旅行时应避免使用公共Wi-Fi登录敏感账户，或使用VPN进行加密通信。

> **来源**: [Hackers are compromising hotel Wi-Fi gateways to hijack Microsoft 365 accounts](https://www.csoonline.com/article/4202067/hackers-are-compromising-hotel-wi-fi-gateways-to-hijack-microsoft-365-accounts.html)  #CSO Online

### ⚠️ 6. CVE-2026-63720 [高危 7.5]

- datamodel-code-generator 0.70.0之前版本存在代码注入漏洞，攻击者通过控制输入模式可远程执行代码。漏洞利用方式为提供包含嵌入换行符和无点Python表达式的恶意customBasePath值。该值被原样注入生成的“from ... import ...”语句中，且未进行标识符验证，导致导入生成模块时执行任意Python代码。建议升级至0.70.0或更高版本，并对输入模式进行严格验证。

> **来源**: [CVE-2026-63720 [HIGH 7.5]](https://nvd.nist.gov/vuln/detail/CVE-2026-63720)  CVSS 7.5 HIGH · #NVD · #漏洞

### ⚠️ 7. CVE-2026-15962 [高危 8.8]

- WordPress插件Fluent Forms Pro Add On Pack 6.2.6及之前所有版本存在PHP对象注入漏洞，源于对不可信输入的反序列化处理不当。认证攻击者（至少拥有订阅者级别权限）可通过注入PHP对象利用此漏洞。若用户更新集成功能已启用且存在POP链，攻击者可更改用户密码并可能接管管理员账户。建议立即升级至最新版本，并检查用户更新集成配置。

> **来源**: [CVE-2026-15962 [HIGH 8.8]](https://nvd.nist.gov/vuln/detail/CVE-2026-15962)  CVSS 8.8 HIGH · #NVD · #漏洞

### 📰 8. 可口可乐披露子公司Fairlife遭遇数据泄露

- 可口可乐公司披露，其子公司Fairlife在近期的一次勒索软件攻击中数据被盗。攻击者成功入侵了Fairlife的系统并窃取了敏感数据。目前尚未披露具体受影响的数据类型和规模。此事件再次凸显了供应链安全的重要性，大型企业需加强对子公司的安全监管。建议企业实施零信任架构并定期进行安全审计。

> **来源**: [Coca-Cola Reveals Subsidiary Fairlife Suffered Data Breach](https://www.infosecurity-magazine.com/news/coca-cola-subsidiary-fairlife-data/)  #Infosecurity Magazine

### 📰 9. 微软推出系列AI安全计划以应对AI驱动的威胁

- 微软推出了新的代理安全系统用于网络防御，以及其首个专注于网络安全的AI模型。这些举措旨在帮助安全团队应对日益增长的AI驱动威胁。新系统能够自动检测、分析和响应安全事件，而AI模型则专注于理解恶意软件和攻击模式。这表明微软正将AI作为安全战略的核心，以应对攻击者同样使用AI带来的挑战。

> **来源**: [Microsoft Launches Flurry of AI Security Initiatives to Combat AI-Enabled Threats](https://www.infosecurity-magazine.com/news/microsoft-ai-security-initiatives/)  #Infosecurity Magazine

### 📰 10. 新CREST AI标准将提供AI驱动的渗透测试认证

- CREST发布新的AI标准，作为网络安全服务提供商的可选附加要求，旨在证明其在渗透测试中负责任地使用人工智能。技术细节显示，这些标准涵盖AI模型的透明度、数据隐私保护、偏见缓解以及测试结果的可解释性，确保AI工具不会引入新的漏洞。该标准的影响范围包括所有寻求CREST认证的渗透测试公司，尤其是那些计划将AI集成到自动化漏洞扫描和模拟攻击中的机构。行业意义在于，AI在安全测试中的使用日益普遍，但缺乏统一规范，CREST的标准有助于建立信任并防止AI被滥用，同时推动行业向更智能、更可靠的渗透测试发展。

> **来源**: [New CREST AI Standards to Deliver AI-Enabled Pentesting Accreditation](https://www.infosecurity-magazine.com/news/crest-ai-pentesting-accreditation/)  #Infosecurity Magazine

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
