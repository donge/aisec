# 🤖🔒 AI+安全日报 | 2026-06-16

> 今日共收录 **10** 条，AI+安全领域重要动态速览

---

### 📰 1. 检测受损AI代理的5个运行时信号

- 2025年6月，提出“提示注入”术语的工程师Simon Willison发布警告，指出AI代理中三种能力组合（访问私密数据、接触不可信内容、外部通信能力）会形成“致命三重奏”，通过间接提示注入几乎必然导致被利用。该问题影响所有具备这些能力的AI代理，如阅读邮件、处理网页内容并发送外部请求的代理。攻击者可通过嵌入恶意指令到不可信内容中，诱导代理泄露数据或执行恶意操作。安全专家建议监控AI代理的运行时行为，包括异常数据访问、非预期外部通信和响应模式变化，以检测潜在入侵。

> **来源**: [5 runtime signals for catching a compromised AI agent](https://www.csoonline.com/article/4184681/5-runtime-signals-for-catching-a-compromised-ai-agent.html)  #CSO Online

### 📰 2. 网络安全专家认为Anthropic的Fable 5不构成独特威胁

- 数十位网络安全从业者表示，对Anthropic的Fable 5模型实施出口管制是误导性的，最近的越狱测试报告并未显示该模型具备独特的黑客能力。Fable 5是Anthropic开发的高级AI模型，但专家认为其安全风险与其他主流模型相当，并未提供突破性的攻击能力。该争议涉及AI安全政策，部分政府担心AI模型被用于网络攻击，但专家认为过度管制可能阻碍创新。行业建议基于实际风险评估而非假设性威胁制定AI安全政策。

> **来源**: [Cybersecurity experts don’t think Anthropic’s Fable 5 presents a unique threat](https://cyberscoop.com/cybersecurity-experts-anthropic-fable-5-not-unique-ai-threat/)  #CyberScoop

### 📰 3. Langflow远程代码执行漏洞在补丁发布数月后仍遭活跃攻击

- 开源AI编排平台Langflow的一个高危路径遍历漏洞（CVE-未明确编号，严重等级：高危）正遭受活跃利用，尽管补丁已发布超过两个月。该漏洞源于Langflow文件上传功能对文件名处理不当，攻击者可向受影响系统的任意位置写入文件，并在特定条件下实现远程代码执行（RCE）。更复杂的是，Langflow默认启用自动登录行为，允许未经身份验证的攻击者利用该漏洞。影响范围包括所有使用Langflow的企业和组织，建议立即应用最新补丁并禁用自动登录功能。

> **来源**: [Langflow RCE under active attack months after a patch was shipped](https://www.csoonline.com/article/4185063/langflow-rce-under-active-attack-months-after-a-patch-was-shipped.html)  #CSO Online

### 📰 4. 网络安全专家敦促美国解除对Anthropic前沿AI模型的禁令

- 特朗普政府已有效禁止非美国公民访问Anthropic公司的两个大型语言模型Mythos 5和Fable 5。网络安全专家呼吁解除这一禁令，认为限制前沿AI模型的国际访问会削弱美国在全球AI安全研究中的领导地位。该禁令影响了跨国合作研究、开源社区贡献以及依赖这些模型进行安全测试的国际组织。专家指出，开放访问有助于识别模型漏洞并推动负责任的AI发展，而封闭政策可能适得其反。

> **来源**: [Cybersecurity Experts Urge US to Lift Ban on Anthropic's Frontier AI Models](https://www.infosecurity-magazine.com/news/cyber-experts-urge-us-lift-ban/)  #Infosecurity Magazine

### 📰 5. 仅勒索攻击增加，数据窃取主导勒索软件索赔

- 仅进行勒索而不加密数据的攻击正在增加，数据窃取成为大多数勒索软件索赔的主要驱动因素。许多组织即使支付赎金，也无法阻止被盗数据被公开泄露。攻击者利用双重勒索策略，先窃取敏感数据再威胁公开，迫使受害者支付。报告建议企业加强数据分类、实施零信任架构，并定期演练事件响应计划以应对数据泄露风险。

> **来源**: [Extortion-Only Attacks Increase, With Data Theft Dominating Ransomware Claims](https://www.infosecurity-magazine.com/news/extortion-only-attacks-surge/)  #Infosecurity Magazine

### 📰 6. 新型“Agentjacking”攻击可劫持AI编码代理

- Tenet Security研究人员揭示了一种名为“Agentjacking”的新型攻击，能够欺骗AI编码代理执行任意代码。攻击者通过向编码代理提供恶意指令或污染其训练数据，诱导代理生成包含后门的代码或直接执行危险操作。该攻击威胁到依赖AI辅助开发的软件供应链安全，可能导致漏洞被植入生产环境。建议开发团队对AI代理的输出进行人工审查，并限制其执行权限。

> **来源**: [New “Agentjacking” Attacks Could Hijack AI Coding Agents](https://www.infosecurity-magazine.com/news/agentjacking-attacks-hijack-ai/)  #Infosecurity Magazine

### 📰 7. Grafana Labs确认代码泄露源于TanStack供应链攻击

- Grafana Labs证实，近期发生的数据泄露事件是由TanStack供应链攻击引发的。攻击者通过入侵TanStack（一个开源前端库）的构建流程，向其中植入恶意代码，进而影响了依赖该库的Grafana产品。泄露数据可能包括部分源代码和内部凭证。此事件再次警示，开源组件供应链攻击具有连锁放大效应，建议企业立即审查是否使用受影响版本的TanStack，并加强第三方依赖的完整性校验和SBOM管理。

> **来源**: [Grafana Labs Says Code Breach Stemmed from TanStack Attack](https://www.infosecurity-magazine.com/news/grafana-labs-code-breach-tanstack/)  #Infosecurity Magazine

### 📰 8. FCC拟禁止匿名手机（Burner Phones）

- 美国联邦通信委员会（FCC）提出新规，要求电信运营商收集所有手机用户的政府身份证明号码和物理地址，实质上禁止匿名预付费手机（Burner Phones）。该措施旨在打击犯罪活动，但隐私倡导者批评其效仿威权国家的监控手段，可能侵犯公民自由。若实施，将影响记者、活动人士及隐私敏感用户，并改变手机市场格局。目前该提案处于公众评议阶段，最终规则可能面临法律挑战。

> **来源**: [The FCC Wants to Eliminate Burner Phones](https://www.schneier.com/blog/archives/2026/06/the-fcc-wants-to-eliminate-burner-phones.html)  #Schneier on Security

### 📰 9. ShinyHunters利用未修补的Oracle漏洞持续勒索大学

- 黑客组织ShinyHunters自5月底以来利用Oracle未公开修复的零日漏洞，入侵多所大学系统并窃取数据，随后进行勒索。该漏洞影响Oracle WebLogic Server等产品，攻击者可远程执行代码。尽管Oracle已获知漏洞，但尚未发布补丁，导致受影响机构持续暴露。ShinyHunters以数据泄露网站和公开勒索著称，此前曾攻击AT&T等企业。建议大学立即隔离受影响系统，部署虚拟补丁（如WAF规则），并监控异常数据库访问。

> **来源**: [ShinyHunters is actively extorting universities after exploiting an unpatched Oracle flaw](https://cyberscoop.com/oracle-peoplesoft-zero-day-vulnerability-shinyhunters-extortion/)  #CyberScoop

### 📰 10. CISA要求美国机构因AI威胁在3天内修复安全漏洞

- 美国网络安全和基础设施安全局（CISA）发布紧急指令，要求联邦机构在3天内修补关键漏洞，理由是AI驱动的攻击工具大幅缩短了漏洞利用窗口。CISA官员警告“防御者不能花数周时间打补丁”，并强调攻击者已利用AI自动化扫描和武器化漏洞。该指令适用于已知被利用的漏洞（KEV）列表中的高危项，未按时修复的机构将面临问责。建议组织采用自动化补丁管理工具，并优先修复面向互联网的系统。

> **来源**: [CISA Tells US Agencies to Fix Security Bugs in as Little as 3 Days Thanks to AI Threats](https://www.wired.com/story/cisa-ai-vulnerability-directive/)  #Wired Security

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
