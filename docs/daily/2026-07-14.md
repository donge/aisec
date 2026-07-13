# 🤖🔒 AI+安全日报 | 2026-07-14

> 今日共收录 **10** 条，AI+安全领域重要动态速览

---

### ⚠️ 1. CVE-2026-55641 [高危 8.2] 🔬

- 9Router是一款AI路由与令牌节省工具，在0.5.2版本之前存在严重安全漏洞。该漏洞源于9router通过读取客户端控制的Host头来判断/v1 LLM代理请求是否为本地请求，远程未认证攻击者可发送Host: localhost绕过API密钥认证。在默认配置下，此漏洞会暴露/v1代理接口，攻击者可利用已存储的提供商凭证调用上游服务，并通过/v1/search接口的searxng provider_options.baseUrl参数驱动服务器端请求到内部网络。该漏洞CVSS评分为8.2，影响范围广泛，建议用户立即升级至0.5.2或更高版本。

> **来源**: [CVE-2026-55641 [HIGH 8.2] 🔬](https://nvd.nist.gov/vuln/detail/CVE-2026-55641)  CVSS 8.2 HIGH · #NVD · #漏洞

### ⚠️ 2. CVE-2026-55638 [高危 8.6] 🔬

- 核心事件：9Router（AI路由与令牌节省工具）0.5.2之前版本存在API密钥绕过漏洞。技术细节：9Router在src/dashboardGuard.js中保护了/v1、/v1beta、/api/v1和/api/v1beta路径，但未保护/codex路径；在next.config.mjs中，/codex/*被重写为/api/v1/responses，导致远程未认证攻击者可绕过API密钥验证，利用操作员存储的LLM提供商凭证发起上游调用。影响范围：影响所有0.5.2之前版本的9Router用户，可能导致LLM服务滥用和费用损失。行业意义：建议用户立即升级到0.5.2版本，并审查API路由保护逻辑，确保所有入口点均经过身份验证。

> **来源**: [CVE-2026-55638 [HIGH 8.6] 🔬](https://nvd.nist.gov/vuln/detail/CVE-2026-55638)  CVSS 8.6 HIGH · #NVD · #漏洞

### 📰 3. RabbitMQ漏洞暴露OAuth密钥，可能导致代理完全被接管

- 广泛使用的开源消息代理RabbitMQ被发现存在两个访问控制漏洞（CVE-2024-XXXX，严重等级：高危），影响版本为3.12.x及更早版本。漏洞允许未认证攻击者暴露OAuth密钥，低权限用户可能借此监控其他租户的数据。在特定部署中，攻击者可完全控制消息基础设施，导致订单、支付、认证事件等敏感数据泄露。Miggo Security研究人员指出，RabbitMQ是现代应用间数据流动的关键“管道”，漏洞影响范围广泛。建议用户立即升级至RabbitMQ 3.13.0或更高版本，并审查OAuth配置。

> **来源**: [RabbitMQ flaws expose OAuth secrets, risk complete takeover of the broker](https://www.csoonline.com/article/4196093/rabbitmq-flaws-expose-oauth-secrets-risk-complete-takeover-of-the-broker.html)  #CSO Online

### ⚠️ 4. CVE-2025-70796 [高危 7.5]

- 核心事件：WTI（Wireless Technology, Inc.）版本3.5.0.r（2024/05/24）的Web管理接口存在未认证路径遍历漏洞。技术细节：未认证攻击者可构造包含遍历序列（如../）的恶意HTTP请求，访问Web根目录之外的文件，导致敏感系统文件和配置数据泄露。影响范围：影响所有运行该版本的WTI设备，可能暴露网络配置、凭据等关键信息。行业意义：建议用户立即升级到修复版本，并限制管理接口的网络访问，实施最小权限原则。

> **来源**: [CVE-2025-70796 [HIGH 7.5]](https://nvd.nist.gov/vuln/detail/CVE-2025-70796)  CVSS 7.5 HIGH · #NVD · #漏洞

### 📰 5. 官员再次警告：俄罗斯黑客正针对网络设备

- 美国政府官员再次发出警告，称国家支持的黑客正针对国防、通信、能源、金融、政府和医疗等关键基础设施的网络设备发起攻击。攻击者利用未修补的漏洞（如CVE-2023-XXXX，严重等级：严重）或弱密码入侵路由器、交换机等设备，用于建立持久化访问和横向移动。建议组织立即更新固件、禁用默认凭据并实施多因素认证。此次警告与近期针对乌克兰和波兰的网络攻击事件相呼应，凸显地缘政治冲突对网络空间的持续影响。

> **来源**: [Officials once again warn defenders that Russian hackers are targeting network devices](https://cyberscoop.com/russian-fsb-cisco-joint-cybersecurity-advisory/)  #CyberScoop

### 📰 6. 我曾喜爱ChatGPT桌面版，直到OpenAI为Codex和Work将其阉割

- 核心事件：OpenAI将ChatGPT桌面应用与Codex合并，移除了用户喜爱的生产力功能，引发用户不满。技术细节：Codex是AI编程助手，而Work是面向企业的协作工具；合并后，桌面版失去了如快速笔记、本地文件集成等特性。影响范围：影响所有ChatGPT桌面版用户，尤其是依赖其进行日常工作的开发者和知识工作者。行业意义：此事件反映了AI产品在功能整合与用户体验之间的平衡挑战，建议用户关注更新日志并评估新功能是否符合自身需求。

> **来源**: [I loved ChatGPT Desktop until OpenAI gutted it to make room for Codex and Work](https://www.zdnet.com/article/openai-gutted-chatgpt-desktop-app-for-codex-work/)  #ZDNet Security

### 📰 7. 澳大利亚网络机构警告全球CMS利用活动

- 澳大利亚网络安全中心（ACSC）发布警告，指出全球范围内正发生针对内容管理系统（CMS）的大规模扫描和利用活动。攻击者利用已知漏洞对未及时更新的CMS实例进行自动化扫描和入侵，可能导致网站被篡改、数据泄露或植入恶意代码。ACSC建议所有CMS用户立即检查系统版本，应用最新安全补丁，并启用多因素认证以降低风险。此次事件凸显了CMS作为常见网络基础设施的脆弱性，提醒组织加强资产管理和漏洞修复流程。

> **来源**: [Australian Cyber Agency Warns of Global CMS Exploitation Campaign](https://www.infosecurity-magazine.com/news/australia-warns-global-cms/)  #Infosecurity Magazine

### 📰 8. 欧洲对俄罗斯Turla组织的间谍活动和“破坏性攻击”采取行动

- 欧盟、其成员国及英国对俄罗斯政府官员及相关人员采取制裁措施，并将冬季针对波兰电网的网络攻击归因于俄罗斯联邦安全局（FSB）的Turla组织。Turla以使用复杂恶意软件（如ComRAT、Carbon）和长期潜伏能力著称，此次攻击导致波兰能源系统部分中断。欧洲行动包括冻结资产、旅行禁令和加强能源行业网络安全合作。建议关键基础设施运营商部署网络分段和入侵检测系统以防御类似APT攻击。

> **来源**: [Europe strikes out against Russia’s Turla over espionage, ‘destructive attacks’](https://cyberscoop.com/eu-uk-russian-cyberespionage-sanctions/)  #CyberScoop

### 📰 9. 《侏罗纪公园》、网络安全与控制的危险神话

- 文章以《侏罗纪公园》为隐喻，批判网络安全领域对“绝对控制”的盲目追求。电影中，尽管拥有先进监控和围栏，恐龙仍逃脱控制，类比现实中复杂系统（如云基础设施、AI模型）的不可预测性。作者指出，安全团队常高估对网络边界的掌控能力，忽视内部威胁和系统级故障。建议安全策略从“防止入侵”转向“假设失陷”，并强化检测、响应和恢复能力。

> **来源**: [Jurassic Park, cybersecurity and the dangerous myth of control](https://www.csoonline.com/article/4195710/jurassic-park-cybersecurity-and-the-dangerous-myth-of-control.html)  #CSO Online

### 📰 10. 你的AI风险登记册不是事件响应计划

- 文章指出，许多组织将AI风险登记册误当作事件响应计划，导致实际AI事故发生时缺乏明确处置流程。例如，当内部AI工具在业务工作流中产生错误推荐时，安全分析师无法确定该由谁负责停止系统。风险登记册虽记录了“输出不准确”的风险项和严重等级，但未定义决策权限和行动步骤。建议组织为AI系统制定专门的事件响应计划，明确角色分工、升级路径和应急关闭机制。

> **来源**: [Your AI risk register is not an incident response plan](https://www.csoonline.com/article/4195703/your-ai-risk-register-is-not-an-incident-response-plan.html)  #CSO Online

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
