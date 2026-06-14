# 今日日报
# 🤖🔒 AI+安全日报 | 2026-06-15

> 今日共收录 **10** 条，AI+安全领域重要动态速览

---

### ⚠️ 1. CVE-2026-48546 [高危 7.3]

- KanaDojo 0.1.18之前版本存在沙箱逃逸漏洞，攻击者可通过在issue-auto-respond.yml工作流中显式将全局require函数传入Node.js vm.runInNewContext()沙箱上下文来执行任意代码。攻击者可以提交修改messages.cjs的拉取请求，导入任意Node.js模块，从而绕过沙箱限制并实现远程代码执行，获得完整的GitHub Actions运行器权限，包括访问AUT（自动化测试）环境。该漏洞CVSS评分为7.3（高危），影响所有使用KanaDojo且版本低于0.1.18的GitHub仓库。建议用户立即升级至0.1.18或更高版本，并审查工作流配置中的沙箱使用方式。

> **来源**: [CVE-2026-48546 [HIGH 7.3]](https://nvd.nist.gov/vuln/detail/CVE-2026-48546)  CVSS 7.3 HIGH · #NVD · #漏洞

### 📰 2. 6月补丁星期二标志“新常态”：超过200个CVE，32个被评为“严重”

- 6月补丁星期二更新中，SAP修复了4个严重漏洞，微软解决了超过200个CVE，创下历史新高。微软的修复清单包括3个零日漏洞、32个“严重”级别补丁，以及一批需要紧急评估的高危漏洞。此外，还有一个旧漏洞正在被利用，部分企业产品补丁被标记为“可能被利用”。Adobe也修复了企业软件中的严重漏洞。安全专家警告，漏洞数量激增已成“新常态”，组织需优先修复已知被利用的漏洞，并缩短补丁部署周期。

> **来源**: [June Patch Tuesday marks a ‘new normal’ with over 200 CVEs, 32 rated ‘critical’](https://www.csoonline.com/article/4183632/june-patch-tuesday-marks-a-new-normal-with-over-200-cves-32-rated-critical.html)  #CSO Online

### 📰 3. ServiceNow修复API问题，此前报告可疑租户活动

- ServiceNow在发现并修复了一个漏洞后通知客户，该漏洞可能通过受影响实例上的未认证API端点暴露数据。问题源于客户开始讨论ServiceNow的安全通知以及与其环境相关的可疑活动报告。根据公告，该漏洞最初于4月通过漏洞赏金计划报告，促使调查和后续安全更新。ServiceNow表示，托管客户已于6月收到安全更新（KB3067321）。该漏洞未分配CVE编号，但影响所有未打补丁的实例，建议客户立即应用更新。

> **来源**: [ServiceNow fixes API issue after reports of suspicious tenant activity](https://www.csoonline.com/article/4184082/servicenow-fixes-api-issue-after-reports-of-suspicious-tenant-activity.html)  #CSO Online

### 📰 4. Infosecurity Europe：Proton如何对抗利用其服务的网络犯罪分子

- 安全通信服务提供商Proton在Infosecurity Europe上介绍了其利用机器学习模型检测服务滥用的方法，特别是针对网络犯罪分子使用的电子邮件地址。Proton的模型分析用户行为模式，如异常登录、大量发送垃圾邮件等，以识别并阻止恶意活动。该技术已成功拦截数千个用于钓鱼和恶意软件分发的账户，同时保护合法用户隐私。Proton强调，这种主动防御策略对于维护信任至关重要，并建议其他服务提供商采用类似AI驱动的检测机制。

> **来源**: [Infosecurity Europe: How Proton Fights Against Cybercriminals Using Its Services](https://www.infosecurity-magazine.com/news/how-proton-fights-against/)  #Infosecurity Magazine

### 📰 5. AI暴露了网络安全的最大弱点：我们从未建立健康模型。直到现在！

- 文章指出，过去30年网络安全一直像急诊室一样运作——反应式、危机驱动、持续分诊，尽管检测和响应能力很强，但无法实现“健康”状态。AI的普及迫使行业正视这一缺陷：预防、持续监控、早期诊断和主动修复才是关键。作者提出，应借鉴医疗健康模型，建立“网络安全健康体系”，通过AI驱动的行为分析、自动化补丁和威胁预测，从被动防御转向主动健康管理。这一理念可能重塑未来安全架构。

> **来源**: [AI is exposing the biggest weakness in cybersecurity: We never built a health model. Until now!](https://www.csoonline.com/article/4184138/ai-is-exposing-the-biggest-weakness-in-cybersecurity-we-never-built-a-health-model-until-now.html)  #CSO Online

### 📰 6. OpenAI：疑似中国影响力行动试图利用ChatGPT引发数据中心辩论

- OpenAI报告称，一个疑似与中国有关的影响力行动试图利用其ChatGPT模型生成内容，以引发关于数据中心的政策辩论。该行动通过创建虚假社交媒体账号和发布AI生成的评论，试图放大对数据中心环境影响和能源消耗的争议。OpenAI表示，几乎没有证据表明这些活动影响了任何实际政策讨论，但已采取行动关闭相关账号。此事件反映了AI工具被用于信息操纵的潜在风险，建议平台加强内容审核和滥用检测机制。

> **来源**: [OpenAI: ‘Likely’ Chinese influence operation tried to use ChatGPT to stir debate on data centers](https://cyberscoop.com/openai-china-influence-campaign-chatgpt/)  #CyberScoop

### 📰 7. 谁在运营勒索软件组织“绅士”？

- 名为“The Gentlemen”的网络犯罪组织已迅速成为按受害者数量计算的第二大活跃勒索软件团伙，通过激进的招募策略（承诺向附属成员支付90%的赎金）吸引了大量技术人才。该组织采用双重勒索模式，在加密数据前窃取敏感信息，并运营一个数据泄露网站。Krebs on Security的分析通过技术痕迹、通信模式和支付记录，指向该组织管理员可能是一名来自东欧的年轻黑客。此案例表明，高分成模式正在重塑勒索软件生态系统，建议企业加强端点检测和备份策略，并关注新兴团伙的TTP（战术、技术和程序）。

> **来源**: [Who Runs the Ransomware Group ‘The Gentlemen?’](https://krebsonsecurity.com/2026/06/who-runs-the-ransomware-group-the-gentlemen/)  #Krebs on Security

### 📰 8. 2026年6月补丁星期二创纪录

- 微软在2026年6月的补丁星期二发布了近200个安全更新，创下该公司月度补丁周期的历史记录，覆盖Windows操作系统及支持软件。其中近36个漏洞被标记为“严重”等级，至少3个漏洞的利用代码已公开可用。这些漏洞涉及远程代码执行、权限提升和拒绝服务等多种类型，影响范围包括所有受支持的Windows版本及多个关键服务器产品。鉴于漏洞数量庞大且部分已遭利用，建议IT管理员立即优先部署更新，特别是针对已公开利用代码的漏洞，并启用自动更新功能。

> **来源**: [A Record-Breaking Patch Tuesday for June 2026](https://krebsonsecurity.com/2026/06/a-record-breaking-patch-tuesday-for-june-2026/)  #Krebs on Security

### 📰 9. 2026年6月AI行政令：联邦机构须知及Tenable如何提供帮助

- 2026年6月2日，白宫签署了一项AI行政令，要求联邦机构在30天内加强系统安全，部署AI驱动的网络防御，并建立一个新的AI网络安全信息交换中心。该行政令优先考虑国家安全和民用联邦机构，要求其适应前沿AI模型能力带来的新威胁。Tenable公司表示，其平台能够帮助联邦机构全面了解环境（包括AI资产）并优先处理风险。此行政令标志着美国政府将AI安全提升至国家战略层面，对网络安全行业和联邦IT采购产生重大影响。

> **来源**: [The June 2026 AI Executive Order: What federal agencies need to know and how Tenable can help](https://www.tenable.com/blog/summary-june-2026-ai-executive-order-requirements)  #Tenable Blog

### 📰 10. Silent Ransom组织通过当面冒充IT人员入侵系统

- Silent Ransom Group（又名Luna Moth）的威胁行为者正在升级攻击手段，通过电话冒充IT人员，甚至亲自到场以直接获取受害者系统的访问权限。这种社会工程攻击结合了电话钓鱼和物理入侵，攻击者会事先收集目标信息，然后以技术支持为借口诱骗员工提供凭证或直接进入办公场所。该组织此前以勒索软件攻击闻名，此次策略转变表明其攻击手法更加激进和多样化。企业应加强员工安全意识培训，特别是针对冒充IT人员的电话和现场访问的验证流程，并实施多因素认证和严格的物理访问控制。

> **来源**: [Silent Ransom Group Uses In-Person IT Impersonation to Breach Systems](https://www.infosecurity-magazine.com/news/silent-ransom-group-it/)  #Infosecurity Magazine

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
