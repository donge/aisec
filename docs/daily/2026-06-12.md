# 🤖🔒 AI+安全日报 | 2026-06-12

> 今日共收录 **10** 条，AI+安全领域重要动态速览

---

### 📰 1. 哈迪斯：欺骗AI安全代理的恶意软件

- 新发现的“哈迪斯行动”是一种高度复杂的供应链攻击，专门针对Python开发者环境，一旦导入受感染的包即会运行。该恶意软件利用流行的Bun工具包静默执行多层载荷，能够提取敏感数据、在受感染系统间横向移动、利用常见安全框架，甚至通过对抗性提示注入劫持AI看门狗分析系统。攻击者还利用了Python包索引（PyPI）的信任机制，将恶意代码伪装成合法库。此事件凸显了AI安全代理在面对针对性对抗攻击时的脆弱性，建议开发者严格验证第三方包的来源和完整性。

> **来源**: [Meet Hades: The malware that lies to AI security agents](https://www.csoonline.com/article/4182707/meet-hades-the-malware-that-lies-to-ai-security-agents-2.html)  #CSO Online

### 📰 2. AI红队测试走向成熟

- 微软AI红队创始人Ram Shankar Siva Kumar回顾了该领域从2019年起步到GPT-4时代的变化，指出传统红队方法在AI系统面前已失效。GPT-4的出现打破了原有测试工具，因为AI模型的行为不可预测且存在对抗性漏洞，如提示注入和模型反转。红队现在需要模拟AI特有的攻击路径，包括数据投毒、模型窃取和输出操纵。Siva Kumar强调，AI红队测试已成为产品安全的关键环节，但行业仍缺乏标准化方法论。这标志着网络安全领域必须将AI系统视为全新的攻击面，而非传统软件的延伸。

> **来源**: [AI red teaming comes of age](https://www.csoonline.com/article/4181930/ai-red-teaming-comes-of-age.html)  #CSO Online

### 📰 3. AI蠕虫原型显示攻击者无需Mythos即可接管网络

- 多伦多大学的研究人员开发了一个由AI代理驱动的计算机蠕虫原型，该蠕虫在模拟计算机网络中成功自我复制到不同系统。该蠕虫使用在本地硬件上运行的免费大型语言模型（LLM），并利用了新旧漏洞组合以及企业环境中常见的配置错误。这一实验表明，即使没有前沿模型如Anthropic的Mythos，攻击者也能利用现有工具和漏洞实现网络入侵。企业应加强基础安全配置，并定期进行漏洞扫描和修补。

> **来源**: [AI worm prototype shows attackers don’t need Mythos to take over your network](https://www.csoonline.com/article/4181924/ai-worm-prototype-shows-attackers-dont-need-mythos-to-take-over-your-network.html)  #CSO Online

### 📰 4. Infosecurity Europe：新基准测试显示Mythos在Google Chrome漏洞利用上超越GPT5.5

- Bugcrowd的研究人员在Infosecurity Europe上发布了ExploitBench，这是一个独立的AI模型漏洞利用能力基准测试。测试结果显示，名为Mythos的AI模型在利用Google Chrome漏洞方面超越了GPT5.5，表现出更高的自动化漏洞利用成功率。ExploitBench评估了多个AI模型在真实世界漏洞（如CVE-2023-4863，严重等级为高危，影响Chrome 116及更早版本）上的表现。这一发现凸显了AI在网络安全攻防两端的双刃剑效应，建议安全团队加强对AI驱动攻击的防御能力，并定期测试自身系统的抗AI攻击能力。

> **来源**: [Infosecurity Europe: Mythos Outperforms GPT5.5 on Google Chrome Vulnerability Exploits, Says New Benchmark](https://www.infosecurity-magazine.com/news/mythos-gpt-chrome-exploits/)  #Infosecurity Magazine

### 📰 5. Tenable CTO问答：高管层视AI为巨大威胁，网络团队采用暴露管理应对AI攻击

- Tenable CTO Vlad Korsunsky在参加世界经济论坛网络安全年会和Tenable的EXPOSURE 2026大会时指出，AI模型已将漏洞利用时间线压缩至“负天数”，即攻击者在厂商发布补丁前就已武器化漏洞。他呼吁从静态CVE评分转向AI驱动的暴露管理，因为点对点的漏洞评分无法反映实时风险。Korsunsky强调，高管层已将AI视为最大威胁，而暴露管理通过持续评估攻击面、优先级排序和自动化响应，能有效应对AI加速的攻击。这要求企业放弃传统的补丁周期，采用动态风险管理策略。

> **来源**: [Tenable CTO Q&A: C-suite views AI as massive threat, as cyber teams adopt exposure management to counter AI attacks](https://www.tenable.com/blog/tenable-cto-ai-security-threats-exposure-management)  #Tenable Blog

### 📰 6. 前沿AI模型预示网络安全的重大变革

- Claude Mythos和OpenAI GPT-5.5等前沿AI模型的发布，正在改变首席信息安全官（CISO）面临的威胁模型。这些模型能够以更快的速度和更大的规模发现和利用漏洞链，迫使大多数网络安全部门重新思考其策略和运营。专家建议防御者应假设AI将使初始入侵更易发生，并应减少对完美修补的追求，转而专注于通过强化防御来限制攻击的爆炸半径。这一趋势要求企业重新评估其安全架构和响应机制。

> **来源**: [Frontier AI models offer sneak peak of seismic cyber shifts ahead](https://www.csoonline.com/article/4183772/frontier-ai-models-offer-sneak-peak-of-seismic-cyber-shifts-ahead.html)  #CSO Online

### 📰 7. 攻击者滥用ChatGPT共享内容进行钓鱼攻击

- Push Security发现，攻击者利用ChatGPT的共享内容功能（chatgpt.com/s/域名）托管恶意软件，通过钓鱼邮件诱导用户点击看似合法的ChatGPT共享链接。这些链接指向由攻击者创建的伪造共享页面，页面中包含恶意下载或重定向至凭证窃取页面。由于共享域名是ChatGPT官方服务的一部分，传统安全工具难以将其标记为恶意。此攻击利用了用户对官方域名的信任，建议企业部署浏览器隔离技术，并教育用户警惕来自未知来源的共享链接。

> **来源**: [Attackers Abuse Shared Content for ChatGPT Phishing Campaign](https://www.infosecurity-magazine.com/news/attackers-shared-content-chatgpt/)  #Infosecurity Magazine

### 📰 8. EXPOSURE 2026为网络安全专业人员准备AI时代

- EXPOSURE 2026大会汇聚了网络安全领导者和从业者，共同探讨AI对安全的影响，并提供了构建暴露管理计划的蓝图。会议指出，前沿AI模型同时加速了漏洞发现和利用，并大幅降低了攻击成本和复杂度，使传统威胁模型和手动流程不再可行。与会者学习了如何利用AI进行自动化威胁检测、优先级排序和响应，以及如何整合暴露数据以形成统一视图。大会强调了从被动修补向主动暴露管理的转变，这是应对AI时代安全挑战的关键。建议组织立即评估现有安全流程，并投资于AI驱动的暴露管理工具。

> **来源**: [EXPOSURE 2026 prepares cybersecurity professionals for the AI era](https://www.tenable.com/blog/exposure-2026-prepares-cybersecurity-professionals-for-the-ai-era)  #Tenable Blog

### 📰 9. 威胁简报：PAN-OS Captive Portal零日漏洞被利用进行未认证远程代码执行

- Unit 42披露了CVE-2026-0300，这是一个PAN-OS User-ID认证门户中的缓冲区溢出漏洞，严重等级为严重（CVSS评分9.8）。该漏洞允许未经认证的攻击者通过发送特制请求实现远程代码执行，影响PAN-OS 10.2、11.0和11.1的多个版本。攻击者已在野外利用此漏洞部署后门，并可能用于横向移动。Palo Alto Networks已发布安全补丁，建议用户立即升级至修复版本。此漏洞凸显了网络设备作为关键攻击面的风险，组织应优先修补暴露在互联网上的防火墙和VPN设备。

> **来源**: [Threat Brief: Exploitation of PAN-OS Captive Portal Zero-Day for Unauthenticated Remote Code Execution](https://unit42.paloaltonetworks.com/captive-portal-zero-day/)  #Unit 42

### 📰 10. 关键Zcash漏洞被发现并修复

- 2024年5月29日，安全研究员Taylor Hornby使用Claude Opus 4.8在Zcash的Orchard隐私池中发现了一个关键漏洞。Zcash团队专门聘请Hornby来寻找此类问题，他很快便发现了这一漏洞。Orchard池是Zcash中最新的屏蔽交易系统，于2022年推出，允许用户发送和接收ZEC时保持交易细节私密。该漏洞影响零知识证明机制，可能暴露用户隐私。Zcash团队已修复此漏洞，建议所有用户立即更新至最新版本。

> **来源**: [Critical Zcash Vulnerability Found and Fixed](https://www.schneier.com/blog/archives/2026/06/critical-zcash-vulnerability-found-and-fixed.html)  #Schneier on Security

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
