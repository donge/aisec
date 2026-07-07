# 今日日报
# 🤖🔒 AI+安全日报 | 2026-07-08

> 今日共收录 **10** 条，AI+安全领域重要动态速览

---

### 📰 1. Gentlemen勒索软件：身份与恢复控制的考验

- Gentlemen勒索软件对CISO构成严峻挑战，其核心在于攻击者获得初始访问权限后如何快速扩散。该恶意软件利用合法的Windows管理工具（如PsExec、WMI）在企业网络中自我传播，同时试图削弱安全与恢复系统。Picus Security报告指出，该勒索软件在加密前会主动破坏备份和恢复机制，增加受害者支付赎金的压力。该分析基于微软威胁情报团队5月底发布的技术报告，建议企业加强身份验证、最小权限原则和恢复系统隔离。

> **来源**: [Why The Gentlemen ransomware is a test of identity and recovery controls](https://www.csoonline.com/article/4193699/why-the-gentlemen-ransomware-is-a-test-of-identity-and-recovery-controls.html)  #CSO Online

### 📰 2. Zscaler发现自主AI代理易受间接提示注入攻击

- Zscaler测试发现，主流大语言模型（LLM）驱动的自主AI代理易受间接提示注入（IPI）攻击，而低级模型反而表现更好。测试中，Llama3-3-70b-instruct、Llama3-2-90b-instruct、Gemini-3-flash和Gemini-2.5-pro被判定为“易受攻击”。这些代理可能被精心设计的欺诈提示诱导执行危险操作，而人类几乎不会上当。建议企业部署AI代理时实施输入过滤、行为监控和人工审核机制。

> **来源**: [Zscaler finds autonomous agents succumb to IPI traps](https://www.csoonline.com/article/4193498/zscaler-finds-autonomous-agents-succumb-to-ipi-traps-2.html)  #CSO Online

### ⚠️ 3. CVE-2026-14654 [高危 7.3]

- SourceCodester Simple and Nice Shopping Cart Script 1.0 版本存在SQL注入漏洞。漏洞位于 /admin/girlsproductdeletequery.php 文件，攻击者可通过操纵user_id参数进行注入攻击。该漏洞可远程利用，利用代码已公开，可能被用于获取管理员权限或窃取购物车系统中的用户数据。建议管理员立即升级系统，并限制对admin目录的访问权限。

> **来源**: [CVE-2026-14654 [HIGH 7.3]](https://nvd.nist.gov/vuln/detail/CVE-2026-14654)  CVSS 7.3 HIGH · #NVD · #漏洞

### ⚠️ 4. CVE-2026-14642 [高危 7.3]

- SourceCodester Class and Exam Timetabling System 1.0 版本存在SQL注入漏洞。漏洞位于 /edit_class2.php 文件，攻击者可通过操纵ID参数进行注入攻击。该漏洞可远程利用，利用代码已公开，可能被用于窃取或篡改数据库中的课程与考试安排数据。建议用户立即升级到最新版本，并对所有用户输入进行参数化查询或严格过滤。

> **来源**: [CVE-2026-14642 [HIGH 7.3]](https://nvd.nist.gov/vuln/detail/CVE-2026-14642)  CVSS 7.3 HIGH · #NVD · #漏洞

### 📰 5. 疑似中国间谍组织利用Roundcube漏洞链入侵大学

- Proofpoint研究人员发现，疑似中国背景的间谍组织利用Roundcube Webmail漏洞链，针对大学物理和工程系发起攻击。攻击者通过邮件系统漏洞获取初始访问权限，随后横向移动窃取研究数据。该活动被认为仍在持续，建议相关机构立即修补Roundcube已知漏洞（如CVE-2023-43770等），并启用邮件日志审计和异常行为检测。

> **来源**: [Suspected Chinese espionage group used a Roundcube exploit chain to burrow into universities](https://cyberscoop.com/china-espionage-attacks-us-canada-universities-proofpoint/)  #CyberScoop

### ⚠️ 6. CVE-2026-14648 [高危 7.3]

- code-projects在线投票系统（版本0.x至1.0）的登录组件存在SQL注入漏洞。攻击者可通过操纵/authentication.php文件中test_input函数的adminUserName/adminPassword参数，远程发起攻击。该漏洞已公开披露，可能被利用窃取数据库敏感信息。受影响版本包括所有0.x系列及1.0版本，建议立即升级或实施输入验证与参数化查询。

> **来源**: [CVE-2026-14648 [HIGH 7.3]](https://nvd.nist.gov/vuln/detail/CVE-2026-14648)  CVSS 7.3 HIGH · #NVD · #漏洞

### ⚠️ 7. CVE-2026-14637 [高危 8.2]

- kirilkirkov Ecommerce-CodeIgniter-Bootstrap 项目（版本至13fd582aaf49aeab7438acc0fc3eb973a1f5e6a7）被发现存在反序列化漏洞。问题位于 application/libraries/ShoppingCart.php 文件中的 getCartItems 函数，攻击者可通过操纵 shopping_cart 参数触发反序列化攻击。该漏洞可远程利用，且利用代码已公开，可能被实际攻击。由于该项目采用持续交付和滚动发布模式，官方未提供固定版本号，建议用户立即更新至最新提交或实施输入验证与反序列化防护措施。

> **来源**: [CVE-2026-14637 [HIGH 8.2]](https://nvd.nist.gov/vuln/detail/CVE-2026-14637)  CVSS 8.2 HIGH · #NVD · #漏洞

### 📰 8. 现代CISO正成为下一个CFO

- 文章指出，CISO越来越多地面临类似CFO的问责：被问及“我们安全吗？”这一核心问题。作者回忆在金融服务公司经历，当时收到威胁情报称攻击者将在节假日攻击，团队启动应急程序。这类问题往往在关键决策时刻出现，要求CISO不仅具备技术能力，还需量化风险、沟通安全投入的ROI。行业趋势显示，CISO角色正从技术专家向战略管理者转变，需掌握财务语言和业务影响分析。

> **来源**: [The modern CISO is becoming the next CFO](https://www.csoonline.com/article/4193375/the-modern-ciso-is-becoming-the-next-cfo.html)  #CSO Online

### 📰 9. Insignary以二进制级清晰度填补SBOM准确性缺口，应对监管风险

- Insignary推出Clarity平台，通过专利二进制指纹技术分析实际构建、部署的软件，而非仅依赖开发者声明的清单，从而解决软件物料清单（SBOM）的准确性缺口。传统SCA工具常遗漏未出现在清单中的开源组件，而Clarity能检测这些隐藏组件及其漏洞，满足Gartner Hype Cycle中可达性分析的要求。该技术对遵守网络安全法规（如美国行政令和欧盟网络弹性法案）至关重要，可减少因不完整SBOM导致的合规风险。建议企业采用二进制级分析工具，确保SBOM反映真实软件组成，以提升供应链透明度。

> **来源**: [Insignary Closes SBOM Accuracy Gap With Binary-Level Clarity for Regulatory Risk](https://www.csoonline.com/article/4193554/insignary-closes-sbom-accuracy-gap-with-binary-level-clarity-for-regulatory-risk.html)  #CSO Online

### 📰 10. 荷兰逮捕两名信用卡钓鱼嫌疑人，该国被列为欧洲支付欺诈最严重国家

- 荷兰警方逮捕了两名涉嫌运营钓鱼操作的年轻男子，该操作窃取受害者的信用卡详细信息。此次逮捕发生在荷兰被列为欧洲支付欺诈最严重国家的背景下，该国因高度数字化的支付系统和消费者对在线交易的依赖而成为攻击目标。嫌疑人通过伪造银行网站和短信诱导用户输入敏感信息，然后利用这些数据进行非法交易。此案提醒用户启用交易双重验证，并避免点击不明链接；金融机构需加强实时欺诈检测系统。

> **来源**: [Two arrested over credit card phishing – as the Netherlands is named Europe’s worst for payment fraud](https://www.bitdefender.com/en-us/blog/hotforsecurity/two-arrested-credit-card-phishing-netherlands-europe-payment-fraud)  #Graham Cluley

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
