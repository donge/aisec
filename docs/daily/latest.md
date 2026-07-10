# 🤖🔒 AI+安全日报 | 2026-07-11

> 今日共收录 **10** 条，AI+安全领域重要动态速览

---

### 📰 1. CrowdStrike识别出五种新型AI提示注入威胁

- 安全公司CrowdStrike在其提示注入分类体系中新增了五种攻击技术，这些技术利用企业日益增长的AI使用场景，通过欺骗大语言模型（LLM）接受人类操作员会识别为可疑的指令来实施攻击。新增类型包括：触发激活规则添加（攻击者添加看似无害的规则，后续可触发模型异常行为）、认知令牌抑制（干扰模型正常推理过程）等。这些攻击可导致AI系统输出错误信息、泄露敏感数据或执行未授权操作。CrowdStrike建议企业加强AI系统的输入验证和异常行为监控，并对LLM进行对抗性训练以提升防御能力。

> **来源**: [CrowdStrike identifies five new prompt injection threats to AI](https://www.csoonline.com/article/4195670/crowdstrike-identifies-five-new-prompt-injection-threats-to-ai.html)  #CSO Online

### 📰 2. Anthropic和OpenAI安全工具可能助长网络攻击

- AI Now研究所的研究人员开发了一个概念验证漏洞，展示了常用的AI安全工具可能被反向利用。该漏洞利用AI安全工具（如Anthropic的Claude和OpenAI的GPT系列）的自动化响应机制，通过精心构造的输入诱导工具执行恶意操作。研究指出，这些工具在设计时未充分考虑对抗性场景，攻击者可绕过安全限制实现数据窃取或系统破坏。该发现警示AI安全工具本身可能成为攻击面，建议开发者在部署前进行全面的红队测试和威胁建模。

> **来源**: [Anthropic and OpenAI Security Tools Could Fuel Cyber-Attacks, Researchers Warn](https://www.infosecurity-magazine.com/news/anthropic-openai-report-exploit/)  #Infosecurity Magazine

### ⚠️ 3. CVE-2026-57851 [高危 7.8]

- MSI Feature Manager 的 KernCoreLib64.sys 内核驱动中存在本地权限提升漏洞（CVE-2026-57851，CVSS 7.8）。任何本地登录用户无需管理员权限，即可通过访问暴露的 IOCTL 处理程序，执行任意物理内存读写和不受限制的 I/O 端口操作。攻击者可利用该漏洞操纵内核对象、篡改内核模式回调、绕过受保护进程轻量级（PPL）保护，并禁用安全功能。受影响的版本包括 MSI Feature Manager 的特定版本，建议用户立即更新至厂商发布的安全补丁。

> **来源**: [CVE-2026-57851 [HIGH 7.8]](https://nvd.nist.gov/vuln/detail/CVE-2026-57851)  CVSS 7.8 HIGH · #NVD · #漏洞

### 📰 4. 微软发现GigaWiper：按需破坏的后门程序

- 微软威胁情报团队在技术分析中详细描述了GigaWiper，这是一个基于Golang编写的后门程序，首次在2025年10月的入侵活动中被发现。该恶意软件融合了远程管理功能与磁盘擦除和勒索软件模块，通过将多个现有恶意软件家族的代码作为模块化命令嵌入单个后门实现。GigaWiper模糊了间谍软件和擦除器之间的界限，攻击者可根据需要选择执行数据窃取或破坏性操作。微软建议组织加强端点检测响应（EDR）系统，并对Golang编译的二进制文件进行重点监控。

> **来源**: [Microsoft uncovers GigaWiper, a backdoor designed for destruction on demand](https://www.csoonline.com/article/4195470/microsoft-uncovers-gigawiper-a-backdoor-designed-for-destruction-on-demand.html)  #CSO Online

### 📰 5. AI编码工具漏洞暴露“人在回路”机制的重大问题

- 网络安全研究公司Wiz发现了名为GhostApproval的系统性漏洞模式，影响六大主流AI编码助手：Amazon Q Developer、Anthropic Claude Code、Augment、Cursor、Google Antigravity和Windsurf（现为Devin Desktop）。该漏洞允许恶意代码仓库欺骗AI代理绕过工作区沙箱，访问任意文件。攻击者通过误导“人在回路”中的人类审批者，使其误认为工具操作是安全的，从而批准恶意行为。Wiz建议开发者对AI编码工具的输出进行严格审查，并实施更细粒度的权限控制。

> **来源**: [AI coding tool hole illustrates a big problem with human in the loop](https://www.csoonline.com/article/4195235/ai-coding-tool-hole-illustrates-a-big-problem-with-human-in-the-loop.html)  #CSO Online

### 📰 6. 英国网络机构推出AI驱动的Cyber Shield以机器速度对抗攻击

- 英国国家网络安全中心（NCSC）与科学、创新和技术部（DSIT）联合发布了Cyber Shield蓝图，旨在部署自主AI代理实时发现并消除国家网络上的网络攻击。该计划目标是构建国家级、协作式的代理化网络防御体系，利用前沿AI识别、降低和解决国家网络风险。Cyber Shield强调“机器速度”响应，通过自动化决策和行动缩短攻击检测到响应的时间窗口。NCSC呼吁行业合作伙伴共同参与技术开发，并计划在关键基础设施领域进行试点部署。

> **来源**: [UK cyber agency unveils AI-powered Cyber Shield to counter attacks at machine speed](https://www.csoonline.com/article/4194997/uk-cyber-agency-unveils-ai-powered-cyber-shield-to-counter-attacks-at-machine-speed.html)  #CSO Online

### 📰 7. 前 DigitalMint 勒索软件谈判者因欺骗客户被判 70 个月监禁

- 前 DigitalMint 勒索软件谈判员 Angelo Martino 因利用内部职位向勒索软件共谋者泄露机密信息，被判 70 个月监禁。他通过向受害者施压并配合攻击者，从五家美国受害者处共勒索 7530 万美元。Martino 的行为暴露了勒索软件谈判行业中的信任危机，即内部人员可能成为攻击者的帮凶。此案警示企业在遭遇勒索攻击时，应谨慎选择谈判服务商，并建立独立的安全审计机制。

> **来源**: [Former DigitalMint ransomware negotiator who duped clients sentenced to 70 months in jail](https://cyberscoop.com/digitalmint-ransomware-negotiator-angelo-martino-sentenced/)  #CyberScoop

### 📰 8. 超 70 家网络安全公司支持新 AI 安全宪章

- 超过 70 家网络安全组织签署了由 CREST 发布的 AI 宪章，详细规定了 AI 在安全领域的负责任使用原则。该宪章旨在为安全厂商和从业者提供 AI 部署的伦理与安全框架，涵盖透明度、问责制、数据隐私和偏见缓解等关键议题。此举反映了行业对 AI 安全风险（如模型投毒、对抗性攻击）的集体关注，并试图建立统一的自律标准。建议安全团队在引入 AI 工具时参考该宪章，确保技术应用符合最佳实践。

> **来源**: [New AI Security Charter Backed by Over 70 Cyber Firms](https://www.infosecurity-magazine.com/news/crest-ai-security-charter-cyber/)  #Infosecurity Magazine

### 📰 9. 英国 NCSC 推动国家级 AI 驱动“网络盾牌”防御计划

- 英国国家网络安全中心（NCSC）宣布计划与 AI 合作伙伴共同构建名为“Cyber Shield”的新型国家级防御体系。该体系将利用 AI 技术实现大规模威胁检测、自动响应和情报共享，旨在提升英国整体网络韧性。NCSC 强调，AI 的引入将使防御系统能够更快速地识别和应对新兴威胁，尤其是针对关键基础设施的攻击。此计划标志着政府层面将 AI 作为网络安全战略核心，建议企业关注相关技术标准并评估自身与国家级防御体系的对接可能性。

> **来源**: [NCSC Touts National Scale, AI-Powered “Cyber Shield” for Defense](https://www.infosecurity-magazine.com/news/ncsc-national-cyber-sheild-ai/)  #Infosecurity Magazine

### 📰 10. 英国政府启动网络弹性承诺计划，已有60多家机构签署

- 英国政府正式推出“网络弹性承诺”计划，旨在提升英国企业的网络安全与抗风险能力。目前已有超过60家组织签署该承诺，包括玛莎百货（M&S）、微软英国和沃达丰等知名企业。该计划要求签署方承诺采取一系列网络安全最佳实践，如定期风险评估、员工培训和事件响应演练。此举标志着英国政府在推动公私合作、强化国家整体网络防御方面迈出重要一步，尤其对中小企业具有示范和带动作用。

> **来源**: [UK Government Launches Cyber Resilience Pledge, Claiming 60+ Signatories](https://www.infosecurity-magazine.com/news/uk-gov-launches-cyber-resilience/)  #Infosecurity Magazine

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
