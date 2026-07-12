# 🤖🔒 AI+安全日报 | 2026-07-13

> 今日共收录 **10** 条，AI+安全领域重要动态速览

---

### 📰 1. CrowdStrike识别出五种新型AI提示注入威胁

- 安全公司CrowdStrike在其提示注入分类体系中新增了五种攻击技术，这些技术利用企业日益增长的AI使用场景，通过欺骗大型语言模型（LLM）接受人类操作员会识别为可疑的指令来实施攻击。新增类型包括：触发激活规则添加（攻击者添加看似无害但可被后期触发导致模型异常行为的规则）、认知令牌抑制（通过抑制模型正常推理所需的认知令牌来干扰输出）等。这些攻击可导致AI系统执行非授权操作、泄露敏感数据或产生恶意输出。CrowdStrike建议企业加强AI应用的输入验证、实施多层安全检测，并对LLM行为进行持续监控以防范此类新型威胁。

> **来源**: [CrowdStrike identifies five new prompt injection threats to AI](https://www.csoonline.com/article/4195670/crowdstrike-identifies-five-new-prompt-injection-threats-to-ai.html)  #CSO Online

### 📰 2. 微软发现GigaWiper：按需破坏的后门程序

- 微软威胁情报团队在技术分析中详细描述了GigaWiper，这是一种基于Golang编写的后门程序，首次于2025年10月的入侵活动中被发现。该恶意软件融合了远程管理功能与多种磁盘擦除和勒索软件例程，模糊了间谍软件与擦除器之间的界限。攻击者并非从头构建新的破坏工具，而是从多个现有恶意软件家族中提取模块，将其作为模块化命令嵌入到单一后门中。GigaWiper可执行静默间谍活动、按需擦除磁盘数据并部署勒索软件，对受感染系统构成严重威胁。微软建议组织加强端点检测、实施网络分段，并监控异常的后门通信行为。

> **来源**: [Microsoft uncovers GigaWiper, a backdoor designed for destruction on demand](https://www.csoonline.com/article/4195470/microsoft-uncovers-gigawiper-a-backdoor-designed-for-destruction-on-demand.html)  #CSO Online

### 📰 3. AI编码工具漏洞揭示“人在回路中”的重大问题

- 网络安全研究公司Wiz发现了一种名为GhostApproval的系统性漏洞模式，影响了六大主流AI编码助手：Amazon Q Developer、Anthropic Claude Code、Augment、Cursor、Google Antigravity和Windsurf（现更名为Devin Desktop）。该漏洞允许攻击者通过恶意仓库欺骗AI代理访问工作区沙箱之外的任意文件，从而绕过本应由人类操作员知情批准的安全机制。攻击者利用AI代理对用户指令的信任，通过误导“人在回路中”的审核流程来执行未授权操作。Wiz指出，这一漏洞暴露了当前AI开发工具中安全审核机制的缺陷，建议开发者实施更严格的沙箱隔离和权限控制。

> **来源**: [AI coding tool hole illustrates a big problem with human in the loop](https://www.csoonline.com/article/4195235/ai-coding-tool-hole-illustrates-a-big-problem-with-human-in-the-loop.html)  #CSO Online

### 📰 4. 英国网络机构推出AI驱动的Cyber Shield以机器速度反击攻击

- 英国国家网络安全中心（NCSC）联合科学、创新与技术部（DSIT）发布了名为Cyber Shield的蓝图，旨在部署能够实时发现并中和国家级网络攻击的自主AI代理。该系统将利用前沿AI技术构建国家级规模的协作式自主防御体系，以机器速度识别、降低和解决国家网络风险。Cyber Shield标志着英国向主权、机器速度的网络防御系统迈进，其核心是开发能够自主决策和响应的AI安全代理。NCSC表示，该计划将整合政府、行业和学术界的资源，推动AI在网络安全领域的创新应用。

> **来源**: [UK cyber agency unveils AI-powered Cyber Shield to counter attacks at machine speed](https://www.csoonline.com/article/4194997/uk-cyber-agency-unveils-ai-powered-cyber-shield-to-counter-attacks-at-machine-speed.html)  #CSO Online

### 📰 5. 研究人员警告Anthropic和OpenAI安全工具可能助长网络攻击

- AI Now研究所的研究人员开发了一个概念验证漏洞利用，展示了常用于安全的AI工具（如Anthropic和OpenAI提供的安全检测模型）可能被反向利用。该漏洞利用通过精心构造的输入，使安全AI工具产生误判或执行攻击者指令，从而绕过安全防护。研究指出，这些工具在设计时未充分考虑对抗性攻击场景，导致其安全功能可能被恶意利用。这一发现凸显了AI安全工具自身的安全性问题，建议开发者在部署前进行严格的对抗性测试，并建立人工审核机制。

> **来源**: [Anthropic and OpenAI Security Tools Could Fuel Cyber-Attacks, Researchers Warn](https://www.infosecurity-magazine.com/news/anthropic-openai-report-exploit/)  #Infosecurity Magazine

### 📰 6. 前DigitalMint勒索软件谈判者因欺骗客户被判70个月监禁

- 前DigitalMint勒索软件谈判员Angelo Martino因利用内部职位向勒索软件同谋泄露机密信息，被判70个月监禁。他协助从五家美国受害者处勒索总计7530万美元，同时欺骗客户支付更高赎金。Martino的行为暴露了勒索软件生态中的内部腐败风险。此案警示企业需谨慎选择安全服务商，并建立独立审计机制。

> **来源**: [Former DigitalMint ransomware negotiator who duped clients sentenced to 70 months in jail](https://cyberscoop.com/digitalmint-ransomware-negotiator-angelo-martino-sentenced/)  #CyberScoop

### 📰 7. 超70家网络安全公司支持新AI安全宪章

- 超过70家网络安全组织签署了CREST AI宪章，明确AI在安全领域的负责任使用原则。宪章涵盖透明度、问责制、数据隐私和偏见缓解等关键领域，旨在防止AI被滥用。此举标志着行业对AI安全治理的集体承诺，影响全球AI安全标准制定。建议企业参考该宪章制定内部AI使用政策，并参与行业协作。

> **来源**: [New AI Security Charter Backed by Over 70 Cyber Firms](https://www.infosecurity-magazine.com/news/crest-ai-security-charter-cyber/)  #Infosecurity Magazine

### 📰 8. NCSC宣称打造国家级AI驱动“网络盾牌”用于防御

- 英国国家网络安全中心（NCSC）计划与AI合作伙伴共同构建名为“网络盾牌”的新型防御系统。该系统将利用AI技术实现全国范围的威胁检测和自动响应，旨在提升英国整体网络韧性。NCSC强调该计划将整合公共和私营部门资源。此举对英国关键基础设施保护具有战略意义，建议相关机构提前对接技术标准。

> **来源**: [NCSC Touts National Scale, AI-Powered “Cyber Shield” for Defense](https://www.infosecurity-magazine.com/news/ncsc-national-cyber-sheild-ai/)  #Infosecurity Magazine

### 📰 9. 英国政府启动网络韧性承诺，称已有60多个签署方

- 英国政府推出“网络韧性承诺”计划，已有包括M&S、微软英国和沃达丰在内的60多家组织签署。该计划旨在提升英国企业的网络安全和韧性，要求签署方承诺实施基本安全措施。此举将推动中小企业安全能力建设，影响英国整体网络安全生态。建议企业评估自身安全水平，考虑加入该承诺以获取政策支持。

> **来源**: [UK Government Launches Cyber Resilience Pledge, Claiming 60+ Signatories](https://www.infosecurity-magazine.com/news/uk-gov-launches-cyber-resilience/)  #Infosecurity Magazine

### 📰 10. 信任无技能：AI代理供应链的完整性验证

- Unit 42发布报告指出，企业AI代理面临来自第三方技能（Skills）的供应链安全风险，这些技能可能包含隐藏漏洞和多阶段攻击链。攻击者可以通过向AI代理市场提交恶意技能，在看似无害的功能中植入后门，从而在代理执行任务时窃取数据或操控决策。报告详细描述了攻击者如何利用AI代理的权限提升和上下文切换机制，构建从初始访问到数据外泄的完整攻击路径。该研究建议企业实施严格的技能完整性验证流程，包括代码审计、行为沙箱测试和运行时监控，以防范供应链攻击。这一发现对依赖第三方AI组件的金融、医疗和政务系统具有重要警示意义。

> **来源**: [Trust No Skill: Integrity Verification for AI Agent Supply Chains](https://unit42.paloaltonetworks.com/ai-agent-supply-chain-risks/)  #Unit 42

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
