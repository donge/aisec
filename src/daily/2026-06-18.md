# 🤖🔒 AI+安全日报 | 2026-06-18

> 今日共收录 **10** 条，AI+安全领域重要动态速览

---

### 📰 1. Infosecurity Europe：OWASP研究员警告提示注入仍是未解难题

- 在Infosecurity Europe 2026大会上，OWASP研究员Ariel Fogel警告称，提示注入（Prompt Injection）仍是生成式AI架构中“未解决的难题”。该漏洞允许攻击者通过精心设计的输入操纵AI模型输出，绕过安全限制，可能导致数据泄露或恶意内容生成。Fogel指出，当前防御手段（如输入过滤和输出验证）无法完全消除风险，因为AI模型的语义理解能力使其难以区分合法指令与恶意注入。这一问题影响所有基于大语言模型的应用，包括聊天机器人、代码助手和自动化决策系统。行业需加速研究鲁棒性更强的模型架构和运行时监控机制，以应对日益复杂的AI安全威胁。

> **来源**: [Infosecurity Europe: Prompt Injection Remains Unsolved, OWASP Researcher Warns](https://www.infosecurity-magazine.com/news/infosec-europe-prompt-injection/)  #Infosecurity Magazine

### 📰 2. 攻击者利用Fortinet在4月披露的两个严重漏洞

- 多家安全公司观察到，Fortinet在4月披露的两个FortiSandbox严重漏洞正被积极利用。这些漏洞允许攻击者远程执行代码或绕过安全限制，且攻击来源多样，并非单一活动。受影响版本包括FortiSandbox 4.0.0至4.2.3等。建议用户立即升级至修复版本，并检查日志中是否存在异常访问行为。

> **来源**: [Attackers hit pair of critical Fortinet vulnerabilities the vendor disclosed in April](https://cyberscoop.com/fortinet-fortisandbox-vulnerabilities-exploits/)  #CyberScoop

### 📰 3. AI威胁与警报疲劳挑战网络安全团队

- Filigran在2026年Infosecurity Europe上发布的调查显示，AI驱动的攻击已成为网络安全团队的首要担忧，同时虚假警报、警报疲劳和手动流程正在耗尽团队资源。调查指出，AI攻击的复杂性和自动化程度使得传统防御系统难以应对，而大量误报导致安全分析师注意力分散，关键威胁可能被忽略。该现象影响了从中小企业到大型企业的各类组织，导致响应时间延长和运营成本上升。行业建议采用AI辅助的威胁检测和自动化响应工具，以减轻人工负担并提高威胁识别准确性。

> **来源**: [AI Threats and Alert Fatigue Challenge Cybersecurity Teams](https://www.infosecurity-magazine.com/news/ai-threats-alert-fatigue-challenge/)  #Infosecurity Magazine

### 📰 4. Google Vertex AI SDK存在存储桶劫持漏洞，可导致远程代码执行

- Unit 42研究人员发现，Google Cloud的Vertex AI SDK（Python版）存在设计缺陷，攻击者可通过存储桶命名逻辑漏洞和缺失的认证机制，仅凭项目ID和区域信息即可劫持受害者的AI项目。该漏洞允许攻击者预注册存储桶名称，从而注入恶意模型或数据，导致模型中毒或远程代码执行。影响范围涉及所有使用该SDK的Google Cloud用户。建议开发者立即更新SDK至最新版本，并严格验证存储桶名称的唯一性。

> **来源**: [Google’s Vertex AI SDK could allow RCE through bucket squatting](https://www.csoonline.com/article/4186193/googles-vertex-ai-sdk-could-allow-rce-through-bucket-squatting.html)  #CSO Online

### 📰 5. 浏览器钓鱼攻击五分之一未被检测到

- Menlo Security的研究警告称，随着企业应用日益转向浏览器端，传统网络安全工具在检测基于浏览器的钓鱼攻击方面存在显著漏洞，约五分之一的此类攻击未被发现。该研究指出，攻击者利用浏览器作为主要入口点，通过伪造登录页面、恶意重定向等技术手段绕过传统安全防护。这一发现凸显了企业安全架构在应对现代威胁时的不足，尤其是当员工通过浏览器访问SaaS应用和云服务时。行业建议企业采用浏览器隔离、零信任架构和AI驱动的威胁检测来弥补传统工具的盲区。

> **来源**: [Cybersecurity Software Fails to Detect Fifth of Brower-Based Phishing Attacks](https://www.infosecurity-magazine.com/news/cybersecurity-fails-to-detect/)  #Infosecurity Magazine

### 📰 6. 欧盟安全专家将在网络攻击时支持乌克兰组织

- 乌克兰已被纳入欧盟网络安全储备（EU Cybersecurity Reserve），该机制旨在为大规模网络攻击事件提供应急响应服务。根据协议，欧盟安全专家将在乌克兰组织遭受重大网络攻击时提供技术支持、事件响应和恢复协助。此举是欧盟加强对乌克兰网络安全支持的一部分，特别是在地缘政治紧张背景下，乌克兰已成为国家级网络攻击的频繁目标。该合作将提升乌克兰关键基础设施（如能源、交通和通信）的防御能力，并促进欧盟与乌克兰之间的威胁情报共享。

> **来源**: [EU Security Experts to Support Ukrainian Organizations in Case of Cyber-Attacks](https://www.infosecurity-magazine.com/news/ukraine-included-eu-cyber-reserve/)  #Infosecurity Magazine

### 📰 7. FBI警告：Kali365钓鱼工具包无需密码即可入侵Microsoft 365账户

- FBI近日发出警告，名为Kali365的新型钓鱼工具包能够绕过多因素认证，无需用户输入密码即可入侵Microsoft 365账户。该工具包通过伪造登录页面，利用中间人攻击技术实时窃取会话令牌，从而直接接管账户。即使企业已启用多因素认证并培训员工识别钓鱼页面，仍可能面临威胁。建议企业采用基于证书的认证、加强会话管理监控，并部署反钓鱼解决方案。

> **来源**: [FBI warns of Kali365 phishing kit that breaks into Microsoft 365 accounts – no password required](https://www.bitdefender.com/en-us/blog/hotforsecurity/fbi-kali365-phishing-kit-breaks-microsoft-365-accounts-no-password-required)  #Graham Cluley

### 📰 8. CISA管理员在GitHub上泄露AWS GovCloud密钥

- 直到上周末，一名CISA承包商在公开的GitHub仓库中暴露了多个高权限AWS GovCloud账户凭证及大量内部系统信息。安全专家称，该仓库包含CISA内部软件构建、测试和部署的详细文档，是近年来最严重的政府数据泄露事件之一。泄露的密钥可能允许攻击者访问敏感政府云环境。CISA已紧急撤销相关凭证，并建议所有政府机构加强GitHub仓库的访问控制和密钥管理。

> **来源**: [CISA Admin Leaked AWS GovCloud Keys on Github](https://krebsonsecurity.com/2026/05/cisa-admin-leaked-aws-govcloud-keys-on-github/)  #Krebs on Security

### 📰 9. 学校为何仍是网络犯罪分子的首选目标

- 近日，大西洋两岸的多所学校接连遭到黑客攻击，再次提醒我们，勒索软件团伙全年都将教育机构视为重点目标。攻击者利用学校网络安全预算有限、系统老旧且数据敏感（如学生和员工个人信息）的特点，频繁发动攻击。这类事件不仅导致教学中断，还可能造成大量敏感数据泄露。教育机构应加强网络安全培训、定期备份数据，并部署多因素认证以降低风险。

> **来源**: [Why schools remain one of cybercriminals’ favourite targets](https://www.bitdefender.com/en-us/blog/hotforsecurity/why-schools-remain-one-of-cybercriminals-favourite-targets)  #Graham Cluley

### 📰 10. 勒索软件走向实体：网络犯罪分子转向暴力威胁

- 网络犯罪团伙正越来越多地采用现实世界威胁手段，包括雇佣当地打手上门施压，以迫使受害者支付赎金。这种“物理勒索”模式将数字攻击与线下暴力结合，显著提高了受害者的心理压力和安全风险。攻击者通常先通过数据窃取或系统加密制造恐慌，再通过电话、邮件或直接派人威胁。企业应建立应急响应计划，与执法部门保持联系，并加强物理安全措施。

> **来源**: [When ransomware gets physical: cybercriminals turn to threats of violence](https://www.bitdefender.com/en-us/blog/hotforsecurity/ransomware-physical-threats-violence)  #Graham Cluley

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
