# 今日日报
# 🤖🔒 AI+安全日报 | 2026-07-19

> 今日共收录 **10** 条，AI+安全领域重要动态速览

---

### 📰 1. 虚假TTF文件在全球钓鱼活动中传播隐蔽恶意软件

- 根据Fortinet FortiGuard Labs的最新研究，威胁行为者正在利用一种普通字体文件（TrueType Font，TTF）来传播低检测率的恶意软件，该恶意软件能够窃取凭证并在受感染的Windows系统上建立持久性。该全球钓鱼活动使用高度混淆的JavaScript和一个伪装成TTF文件的Lua加载器来规避安全检测，并投放远程访问木马（RAT）和信息窃取程序。TTF文件是操作系统和应用程序用于显示文本的标准字体文件，攻击者利用其正常外观来绕过安全扫描。该活动已部署了Agent Tesla、Remcos、XWo等恶意软件家族，对企业和个人用户构成严重威胁，建议加强电子邮件过滤和端点检测。

> **来源**: [Fake TTF files deliver stealthy malware in global phishing campaign](https://www.csoonline.com/article/4198165/fake-ttf-files-deliver-stealthy-malware-in-global-phishing-campaign.html)  #CSO Online

### 📰 2. 2026年新任CISO任命动态

- 企业安全高层正经历高频率人事变动，公司为适应不断演变的威胁格局而调整架构。许多企业首次设立首席安全官（CSO）或首席信息安全官（CISO）职位，以深化对信息安全的承诺。该专栏将持续追踪高级安全职位的新任命，并分析招聘趋势。如有相关任命公告，可联系新闻执行编辑Peter Sayer（peter_sayer@foundryco.com）提交。

> **来源**: [New CISO appointments 2026](https://www.csoonline.com/article/4186743/new-ciso-appointments-2026.html)  #CSO Online

### 📰 3. AI、自动化与攻击：解读Unit 42 2026年全球事件响应报告

- Palo Alto Networks的Unit 42团队发布了2026年全球事件响应报告，探讨了AI对网络安全的影响，包括自2025年报告以来的关键更新。报告指出，AI正被攻击者用于自动化攻击、生成更逼真的钓鱼邮件和绕过安全检测，同时也被防御者用于加速威胁检测和响应。自动化工具在事件响应中变得至关重要，但攻击者也在利用AI提升攻击效率。建议组织采用AI驱动的安全解决方案，并加强人员培训以应对AI增强型威胁。

> **来源**: [AI, Automation and Attacks: Unpacking the Unit 42 2026 Global Incident Response Report](https://unit42.paloaltonetworks.com/ai-incident-response-report/)  #Unit 42

### ⚠️ 4. CVE-2026-14890 [严重 9.1]

- SGLang的专家并行备份子系统暴露了一个ZeroMQ PULL套接字，该套接字位于可路由网络接口上，且缺乏身份验证或反序列化保护。当该功能启用且服务可通过网络访问时，攻击者可提供恶意pickle文件，导致未经身份验证的远程代码执行。该漏洞CVSS评分为9.1（严重等级），影响所有启用该功能的SGLang版本。建议立即禁用该功能或限制网络访问，并关注厂商补丁更新。

> **来源**: [CVE-2026-14890 [CRITICAL 9.1]](https://nvd.nist.gov/vuln/detail/CVE-2026-14890)  CVSS 9.1 CRITICAL · #NVD · #漏洞

### 📰 5. 精英安全工程师的7项关键技能与特质

- 安全工程师在企业网络安全中扮演核心角色，负责设计、构建和部署安全系统，以保护组织的数据、应用、系统、网络及其他IT组件免受各类网络威胁。CISO及安全负责人需优先寻找不仅合格、更应是最优秀的安全工程师，尤其在AI快速崛起及其带来的企业威胁背景下。文章列出了精英安全工程师的关键技能与特质，以帮助组织识别和招募顶尖人才。

> **来源**: [7 skills and traits of elite security engineers](https://www.csoonline.com/article/4196428/7-skills-and-traits-of-elite-security-engineers.html)  #CSO Online

### 📰 6. 微软强制企业向通行密钥过渡

- 微软宣布，从2025年9月1日起，将在其基于云的身份和访问管理（IAM）服务Entra ID中，将通行密钥（passkeys）设为默认认证方法。经过一段过渡期后，微软提供的短信和语音认证将于2027年2月1日正式终止。此举旨在推动更安全的认证标准，以应对攻击者日益增强的攻击能力。企业用户将被迫迁移至通行密钥，这有助于减少对传统密码和短信验证码的依赖，降低凭证窃取和钓鱼攻击的风险。建议企业提前规划通行密钥的部署和用户培训。

> **来源**: [Microsoft is forcing an enterprise transition to passkeys](https://www.csoonline.com/article/4197086/microsoft-is-forcing-an-enterprise-transition-to-passkeys-2.html)  #CSO Online

### 📰 7. Scattered Spider核心成员在英国被判66个月监禁

- 黑客组织Scattered Spider的两名核心成员Thalha Jubair和Owen Flowers在英国被判66个月监禁。该组织是The Com黑客子集的主要领导者，曾策划并指挥多起网络攻击。美国当局此前指控Jubair参与了至少120起攻击事件。此判决标志着跨国执法合作打击网络犯罪的重要成果，对类似黑客组织具有威慑作用。

> **来源**: [Leading members of Scattered Spider sentenced in UK to 66 months in jail](https://cyberscoop.com/scattered-spider-leaders-sentenced-united-kingdom/)  #CyberScoop

### 📰 8. 安全播客#476：远程控制三轮车与虚假图书营销骗局

- 本期播客报道了印度出现的一款存在严重安全漏洞的应用程序，该应用允许任何拥有智能手机的人无需登录、密码或权限即可远程停止行驶中的电动三轮车（e-rickshaw）。这一漏洞可能导致交通事故或恶意拦截，暴露了物联网设备缺乏基本安全认证的普遍问题。此外，播客还探讨了作者Geoff White遭遇的AI生成虚假图书营销骗局，诈骗者利用AI生成看似专业的营销方案进行欺诈。这些案例提醒用户，AI技术正被用于制造更逼真的诈骗，需提高对未经验证的营销服务的警惕。

> **来源**: [Smashing Security podcast #476: Remote-control rickshaws and rogue book marketers](https://grahamcluley.com/smashing-security-podcast-476/)  #Graham Cluley

### 📰 9. 民主党对DNI提名人Jay Clayton的选举安全质询未获满意答复

- 在参议院听证会上，民主党议员就选举安全问题对国家情报总监（DNI）提名人Jay Clayton进行质询。Clayton坚称自己不是“选举否认者”，但拒绝直接回答关于2020年大选、其前任参与1月份选举办公室突击搜查等多项问题。民主党议员对Clayton的回避态度表示失望。此事件凸显了美国选举安全议题的政治敏感性，以及情报机构领导层在关键问题上的立场分歧。

> **来源**: [Dems press DNI nominee Jay Clayton on election security questions, but leave dismayed](https://cyberscoop.com/jay-clayton-dni-confirmation-hearing-election-security/)  #CyberScoop

### 📰 10. 白宫公布“金鹰”AI网络威胁信息共享中心详情

- 白宫正式公布了名为“金鹰”（Gold Eagle）的AI网络威胁信息共享中心。该中心已开始接收漏洞情报，并优先处理补丁修复工作。此举旨在整合政府与私营部门的AI安全威胁信息，加速应对新型网络攻击。这是美国在AI安全领域的重要政策举措，将影响联邦机构及关键基础设施的网络安全防御体系。

> **来源**: [White House details ‘Gold Eagle’ clearinghouse for AI cyber threats](https://cyberscoop.com/trump-gold-eagle-ai-cyber-clearinghouse/)  #CyberScoop

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
