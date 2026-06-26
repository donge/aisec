# 今日日报
# 🤖🔒 AI+安全日报 | 2026-06-27

> 今日共收录 **7** 条，AI+安全领域重要动态速览

---

### 📰 1. 恶意软件作者颠覆AI检测系统

- 安全公司SentinelLabs发现，恶意软件作者正在利用代码指令让LLM辅助安全产品中止分析或拒绝执行检测，从而绕过AI防御系统。该恶意软件针对macOS系统，苹果XProtect已将其检测为MACOS_BONZAI_COBUCH规则下的样本。SentinelLabs将BONZAI签名家族与朝鲜威胁活动相关联，并认为已识别出幕后黑手。这一发现表明，依赖AI增强安全防御的企业可能需要重新评估其策略，因为攻击者正积极开发对抗AI检测的技术。

> **来源**: [Malware authors subvert AI detection systems](https://www.csoonline.com/article/4190094/malware-authors-subvert-ai-detection-systems.html)  #CSO Online

### 📰 2. 澳大利亚网络攻击构成“生命威胁”

- 澳大利亚安全情报组织（ASIO）发现，国家支持的黑客已入侵一家关键基础设施运营商的网络，并准备进行破坏活动。ASIO总干事Mike Burgess在年度威胁评估中表示，该国面临的基础设施网络攻击危险“无法夸大”，并将其分类为“生命威胁”和“生活方式威胁”。他指出，其他国家也面临类似的关键基础设施网络威胁。这一警告凸显了关键基础设施网络安全的重要性，呼吁加强防护措施。

> **来源**: [Cyberattacks pose a ‘threat to life’ in Australia](https://www.csoonline.com/article/4190054/cyberattacks-pose-a-threat-to-life-in-australia.html)  #CSO Online

### 📰 3. Mythos是信号而非警报：前沿AI应如何改变CISO的思维

- 文章指出，当Mythos等前沿AI能力成为头条时，董事会和高级管理层常陷入恐慌，担心攻击者会利用AI创造全新风险类别。然而，作者认为，对大多数组织而言，更大的问题并非AI突然引入新风险，而是这些模型能加速攻击者和防御者双方的工作。CISO应关注AI如何提升现有威胁（如自动化钓鱼攻击或漏洞利用）的效率，而非过度担忧未知风险。文章建议，CISO需调整策略，将AI视为信号，推动安全团队采用AI驱动的防御工具，并加强人机协作，以应对加速的威胁环境。

> **来源**: [Mythos is a signal, not a siren: What frontier AI should change for CISOs](https://www.csoonline.com/article/4189600/mythos-is-a-signal-not-a-siren-what-frontier-ai-should-change-for-cisos.html)  #CSO Online

### 📰 4. 攻击者结合ClickFix与PySoxy代理技术维持持久化访问

- ReliaQuest研究人员警告，攻击者利用开源工具ClickFix和PySoxy代理技术，在初始社会工程攻击后维持持久化访问。ClickFix通过伪造系统更新提示诱导用户执行恶意脚本，PySoxy则建立加密代理隧道绕过网络监控。该组合攻击已针对金融和医疗行业，攻击者可在受感染系统上潜伏数周。建议组织部署行为分析工具检测异常代理流量，并限制用户执行脚本的权限。

> **来源**: [Attackers Combine ClickFix With PySoxy Proxying to Maintain Persistence](https://www.infosecurity-magazine.com/news/clickfix-combined-pysoxy-proxying/)  #Infosecurity Magazine

### 📰 5. NCSC发布关于保障代理型AI使用安全的指南

- 英国国家网络安全中心（NCSC）发布指南，帮助组织理解代理型AI的安全风险。代理型AI能够自主执行任务，如自动化决策和系统交互，但其自主性也带来了新的威胁，包括权限滥用、数据泄露和对抗性攻击。指南建议组织实施严格的访问控制、持续监控AI行为，并建立人工干预机制。这一举措反映了监管机构对AI安全的前瞻性关注，建议企业将AI安全纳入整体风险管理框架。

> **来源**: [NCSC Publishes Guidance on Securing Agentic AI Use](https://www.infosecurity-magazine.com/news/ncsc-publishes-guidance-securing/)  #Infosecurity Magazine

### 📰 6. 英国央行、FCA和财政部对前沿AI发出警报

- 英国金融监管机构（包括央行、金融行为监管局和财政部）对前沿AI技术带来的网络安全和运营韧性风险发出警告。这些机构要求金融行业评估AI模型在关键业务中的潜在脆弱性，如算法偏见、数据投毒和系统故障。监管机构强调，金融机构需确保AI系统的透明度和可解释性，并制定应急计划以应对AI引发的运营中断。这一警报标志着金融监管对AI风险的正式关注，建议相关企业立即开展AI风险评估并加强合规准备。

> **来源**: [Bank of England, FCA and Treasury Raise Alarm Over Frontier AI](https://www.infosecurity-magazine.com/news/bank-england-fca-treasury-alarm/)  #Infosecurity Magazine

### 📰 7. 多数组织已使用AI代理处理敏感安全任务

- Semperis研究显示，74%的组织认为AI将增加针对身份基础设施的攻击。调查发现，超过半数企业已部署AI代理执行身份验证、权限管理等敏感安全任务，但其中42%的受访者承认缺乏对AI决策过程的充分审计。AI代理的自动化特性可能被攻击者利用，通过对抗性输入绕过安全策略。行业需建立AI安全治理框架，确保代理行为可解释、可追溯，并定期进行红队测试。

> **来源**: [Most Organizations Now Use AI Agents for Sensitive Security Tasks](https://www.infosecurity-magazine.com/news/most-organizations-ai-agents/)  #Infosecurity Magazine

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
