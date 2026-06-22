# 🤖🔒 AI+安全日报 | 2026-06-23

> 今日共收录 **7** 条，AI+安全领域重要动态速览

---

### 📰 1. OpenAI启动全面修复开源漏洞计划，挑战Anthropic的网络安全神话

- OpenAI发布改进版GPT-5.5-Cyber模型，并启动“Patch the Planet”计划，旨在系统性地修复开源软件中的安全漏洞。该计划利用AI自动扫描和修补开源项目中的缺陷，覆盖Linux内核、Web框架等关键组件。此举旨在提升AI在网络安全领域的实际应用能力，同时与Anthropic等竞争对手争夺行业话语权。建议开源社区关注AI驱动的漏洞修复工具，并评估其可靠性。

> **来源**: [OpenAI Launches Full-Scale Effort to Patch Open-Source Bugs as It Takes on Anthropic’s Mythos](https://www.wired.com/story/openai-launches-full-scale-effort-to-patch-open-source-bugs-as-it-takes-on-anthropics-mythos/)  #Wired Security

### 📰 2. Klue数据泄露：被盗OAuth令牌暴露Salesforce CRM数据

- 竞争情报供应商Klue遭遇数据泄露，攻击者通过入侵集成服务中的遗留凭证，窃取了客户用于连接Salesforce等平台的OAuth令牌。Klue CEO Jason Smith确认，攻击者利用这些令牌访问了多个客户环境中的CRM数据。Klue已撤销所有客户OAuth令牌并禁用受影响集成。此事件凸显了OAuth令牌管理的风险，建议企业实施令牌轮换、短期有效期和异常使用监控。

> **来源**: [Klue breach exposed Salesforce CRM data through stolen OAuth tokens](https://www.csoonline.com/article/4187907/klue-breach-exposed-salesforce-crm-data-through-stolen-oauth-tokens.html)  #CSO Online

### 📰 3. 微软将Mastra AI供应链攻击归因于朝鲜

- 微软安全研究人员将针对Mastra的供应链攻击归因于朝鲜威胁组织Sapphire Sleet。该攻击通过篡改软件供应链组件，向Mastra AI平台用户分发恶意代码。微软未披露具体技术细节，但指出该组织常利用社会工程学和凭证窃取手段。此次事件凸显了AI供应链的脆弱性，建议组织加强对第三方组件的完整性验证和代码审计。

> **来源**: [Microsoft Attributes Mastra AI Supply Chain Attack to North Korea](https://www.infosecurity-magazine.com/news/mastra-ai-supply-chain-attack/)  #Infosecurity Magazine

### 📰 4. 零售业勒索软件攻击剖析：桌面推演模拟现代混乱手法

- 在Infosecurity Europe会议上，安全厂商Semperis组织了一场名为“进入作战室”的桌面推演，模拟针对虚构超市连锁BlueCart的网络攻击。CSO作为红队八名成员之一参与，扮演国家背景的攻击者APT 64（代号Checkout Chaos）。该推演突出展示了针对AI系统的攻击和虚假信息作为关键元素，攻击者不仅旨在窃取数据，更注重破坏超市声誉和制造混乱。这一演习揭示了零售业面临的新型混合威胁，建议企业将AI安全与声誉风险管理纳入应急响应计划。

> **来源**: [Anatomy of a retail ransomware attack: Tabletop simulates modern mayhem methods](https://www.csoonline.com/article/4186989/anatomy-of-a-retail-ransomware-attack-tabletop-simulates-modern-mayhem-methods.html)  #CSO Online

### 📰 5. GentleKiller框架禁用受害者安全软件

- ESET安全团队披露GentleKiller框架，该工具被Gentlemen勒索软件团伙提供给附属成员使用，专门用于禁用目标系统的端点检测与响应（EDR）软件。GentleKiller通过内核级操作终止安全进程，并清除日志以逃避检测。该框架已在多起勒索攻击中被使用，建议企业部署多层安全防护，并定期测试EDR软件的韧性。

> **来源**: [GentleKiller Framework Disables Victims' Security Software](https://www.infosecurity-magazine.com/news/gentlekiller-gentlemen-ransomware/)  #Infosecurity Magazine

### 📰 6. GitHub确认通过恶意VS Code扩展入侵内部仓库

- GitHub证实其内部仓库遭入侵，攻击者通过恶意Visual Studio Code扩展实施攻击。知名威胁组织TeamPCP声称对此负责，并宣称已访问GitHub的私有代码库。该事件凸显了供应链攻击的严重性，尤其是针对开发者工具的恶意扩展。GitHub已移除相关扩展并加强内部安全审计，建议开发者仅从可信来源安装扩展。

> **来源**: [GitHub Confirms Breach of Internal Repositories Via Malicious VS Code Extension](https://www.infosecurity-magazine.com/news/github-confirms-breach-vs-code/)  #Infosecurity Magazine

### 📰 7. AI提升漏洞意识与安全设计软件标准

- AI驱动的漏洞扫描技术正消除未修补漏洞的借口，同时欧盟《网络弹性法案》推动企业转向安全设计软件。AI工具能自动识别代码缺陷并生成修复建议，将漏洞发现时间从数周缩短至分钟级。该法案要求制造商在产品设计阶段即嵌入安全机制，否则面临高额罚款。行业分析师认为，AI与法规结合将重塑软件开发生命周期，但需警惕AI误报和过度依赖自动化。

> **来源**: [AI Raises the Bar on Vulnerability Awareness and Secure-by-Design Software](https://www.infosecurity-magazine.com/news/ai-raises-vulnerability-awareness/)  #Infosecurity Magazine

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
