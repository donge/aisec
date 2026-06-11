# 今日日报
# 🤖🔒 AI+安全日报 | 2026-06-12

> 今日共收录 **10** 条，AI+安全领域重要动态速览

---

### 📰 1. 哈迪斯：欺骗AI安全代理的恶意软件

- 新发现的“哈迪斯行动”是一种高度复杂的软件供应链攻击，专门针对Python开发者环境。该恶意软件利用流行的Bun工具包，在被感染的包导入时立即执行多层载荷，能够窃取敏感数据、在受感染系统间横向移动，并利用对抗性提示注入劫持AI安全分析系统。攻击者通过恶意Python包感染开发者，一旦导入即触发执行，绕过传统安全检测。该行动展示了攻击者如何利用AI工具本身作为攻击向量，对依赖Python生态的企业构成严重威胁。建议开发者严格验证第三方包来源，并部署AI安全监控工具检测异常行为。

> **来源**: [Meet Hades: The malware that lies to AI security agents](https://www.csoonline.com/article/4182707/meet-hades-the-malware-that-lies-to-ai-security-agents-2.html)  #CSO Online

### 📰 2. AI红队测试走向成熟

- 微软AI红队创始人Ram Shankar Siva Kumar回顾了该领域从2019年至今的发展历程。最初，AI红队采用传统安全方法攻击机器学习系统，但GPT-4的出现彻底改变了游戏规则。传统工具在应对大语言模型时失效，迫使红队开发新的攻击方法，包括提示注入、模型逆向工程和对抗性样本生成。如今，AI红队已成为评估AI系统安全性的关键环节，覆盖从训练数据到部署管道的全生命周期。行业正从“事后修补”转向“设计时安全”，将红队测试嵌入AI开发流程。建议企业建立专门的AI安全团队，定期进行红队演练。

> **来源**: [AI red teaming comes of age](https://www.csoonline.com/article/4181930/ai-red-teaming-comes-of-age.html)  #CSO Online

### 📰 3. AI蠕虫原型显示攻击者无需Mythos即可接管网络

- 多伦多大学的研究人员开发了一个由AI代理驱动的计算机蠕虫原型，该原型成功在模拟计算机网络中的不同系统间自我复制。该蠕虫使用在本地硬件上运行的免费大型语言模型（LLM），并利用了新旧漏洞组合以及企业环境中仍然常见的配置错误。尽管业界担心Anthropic的Mythos等前沿模型能发现关键软件中的零日漏洞，但此实验表明，即使使用免费模型，攻击者也能利用现有漏洞和配置问题造成严重破坏。企业应优先修补已知漏洞和修复配置错误。

> **来源**: [AI worm prototype shows attackers don’t need Mythos to take over your network](https://www.csoonline.com/article/4181924/ai-worm-prototype-shows-attackers-dont-need-mythos-to-take-over-your-network.html)  #CSO Online

### 📰 4. Tenable CTO问答：高管视AI为巨大威胁，网络团队采用暴露管理应对AI攻击

- Tenable CTO Vlad Korsunsky在达沃斯网络安全年会上指出，AI已将漏洞利用时间压缩至“负天数”，即攻击者在补丁发布前就已武器化漏洞。传统补丁周期已过时，企业需转向AI驱动的暴露管理，实时评估风险而非依赖静态CVE评分。AI模型同时加速了漏洞发现和利用，降低了攻击成本，使传统威胁模型失效。高管层将AI视为最大威胁，但暴露管理提供了从被动修补到主动风险量化的转变路径。建议企业部署持续暴露管理平台，整合威胁情报和资产数据，优先修复高风险漏洞。

> **来源**: [Tenable CTO Q&A: C-suite views AI as massive threat, as cyber teams adopt exposure management to counter AI attacks](https://www.tenable.com/blog/tenable-cto-ai-security-threats-exposure-management)  #Tenable Blog

### 📰 5. 前沿AI模型预示网络安全的巨大变革

- Claude Mythos和OpenAI GPT-5.5等前沿AI模型的发布，彻底改变了首席信息安全官（CISO）面临的威胁模型。这些模型能够以更快的速度和更大的规模发现和利用漏洞链，迫使大多数网络安全部门重新思考其策略和运营。专家建议防御者应假设AI会使初始入侵更易发生，并应减少对完美修补的追求，转而专注于通过强化措施限制攻击的爆炸半径。这一趋势要求企业重新评估安全架构，优先考虑快速检测和响应能力。

> **来源**: [Frontier AI models offer sneak peak of seismic cyber shifts ahead](https://www.csoonline.com/article/4183772/frontier-ai-models-offer-sneak-peak-of-seismic-cyber-shifts-ahead.html)  #CSO Online

### 📰 6. Infosecurity Europe：新基准显示Mythos在Google Chrome漏洞利用上超越GPT5.5

- Bugcrowd研究员在Infosecurity Europe上发布了ExploitBench，一个独立评估AI模型漏洞利用能力的基准测试。结果显示，名为Mythos的模型在针对Google Chrome漏洞的利用任务中表现优于GPT5.5，成功生成了更多可执行攻击代码。该基准测试覆盖了从信息收集到漏洞验证的完整攻击链，Mythos在代码生成和漏洞适配方面展现出更高效率。这一发现凸显了AI在自动化攻击中的潜力，可能降低攻击门槛，促使安全社区加速开发AI驱动的防御工具以应对此类威胁。

> **来源**: [Infosecurity Europe: Mythos Outperforms GPT5.5 on Google Chrome Vulnerability Exploits, Says New Benchmark](https://www.infosecurity-magazine.com/news/mythos-gpt-chrome-exploits/)  #Infosecurity Magazine

### 📰 7. 攻击者滥用ChatGPT共享内容进行钓鱼攻击

- Push Security发现攻击者利用chatgpt.com/s/域名托管恶意软件，实施针对ChatGPT用户的钓鱼攻击。攻击者创建看似合法的ChatGPT共享内容链接，诱导用户点击后下载恶意载荷。这些链接利用ChatGPT的共享功能，使受害者误以为来自可信来源。该攻击利用用户对OpenAI域名的信任，绕过传统URL过滤。建议用户谨慎点击来自未知来源的ChatGPT共享链接，企业应部署浏览器安全扩展检测恶意域名。

> **来源**: [Attackers Abuse Shared Content for ChatGPT Phishing Campaign](https://www.infosecurity-magazine.com/news/attackers-shared-content-chatgpt/)  #Infosecurity Magazine

### 📰 8. EXPOSURE 2026为网络安全专业人员迎接AI时代做好准备

- EXPOSURE 2026会议聚焦AI对网络安全的颠覆性影响，指出前沿AI模型同时加速了漏洞发现和利用，大幅降低了攻击成本和复杂度。传统威胁模型和手动工作流已不可行，企业需转向暴露管理程序。会议提供了构建暴露管理计划的蓝图，包括资产发现、风险评分、自动化修复和持续监控。与会者强调，AI时代的安全需要从“事件响应”转向“风险预防”，利用AI自身能力对抗AI攻击。建议企业投资AI安全平台，整合漏洞管理、威胁情报和攻击面管理。

> **来源**: [EXPOSURE 2026 prepares cybersecurity professionals for the AI era](https://www.tenable.com/blog/exposure-2026-prepares-cybersecurity-professionals-for-the-ai-era)  #Tenable Blog

### 📰 9. 威胁简报：PAN-OS Captive Portal零日漏洞被利用进行未认证远程代码执行

- Unit 42披露了CVE-2026-0300，一个影响Palo Alto Networks PAN-OS User-ID认证门户的缓冲区溢出漏洞，严重等级为严重（CVSS 9.8）。该漏洞允许未认证攻击者通过特制请求在目标设备上远程执行任意代码，影响PAN-OS 10.0至11.1版本。攻击者已利用该零日漏洞在野外进行攻击，主要针对教育、政府和医疗行业。Palo Alto Networks已发布安全更新，建议用户立即升级至修复版本。临时缓解措施包括限制Captive Portal的访问IP范围，并启用威胁预防签名。

> **来源**: [Threat Brief: Exploitation of PAN-OS Captive Portal Zero-Day for Unauthenticated Remote Code Execution](https://unit42.paloaltonetworks.com/captive-portal-zero-day/)  #Unit 42

### 📰 10. 发现并修复Zcash严重漏洞

- 2024年5月29日，安全研究员Taylor Hornby使用Claude Opus 4.8在Zcash Orchard隐私池中发现了一个严重漏洞。Zcash团队专门聘请Hornby来寻找此类问题，他很快便发现了该漏洞。Orchard池是Zcash最新、最先进的屏蔽交易系统，于2022年推出，允许用户发送和接收ZEC的同时保持交易细节私密。该漏洞影响使用零知识证明验证交易而不泄露信息的Orchard池，目前已被修复。Zcash用户应立即更新至最新版本以保护资产隐私。

> **来源**: [Critical Zcash Vulnerability Found and Fixed](https://www.schneier.com/blog/archives/2026/06/critical-zcash-vulnerability-found-and-fixed.html)  #Schneier on Security

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
