# 🤖🔒 AI+安全日报 | 2026-07-15

> 今日共收录 **10** 条，AI+安全领域重要动态速览

---

### 📰 1. AI驱动的攻击为事件响应敲响警钟

- 越来越多的威胁行为者正在利用LLM驱动的智能体自动化攻击的各个阶段，包括横向移动，这严重缩短了从初始访问到深度环境入侵的时间。企业多年来为应对日益复杂的攻击而改进检测和响应时间的努力正面临AI的威胁。核心变化在于速度、规模和编排：熟悉的云攻击技术以比防御者所能协调的更快的速度在更多表面上执行。这要求安全团队必须重新评估其事件响应策略，并考虑引入AI驱动的防御工具来对抗自动化攻击。

> **来源**: [AI-powered breaches provide wake-up call for incident response](https://www.csoonline.com/article/4196409/ai-powered-breaches-provide-wake-up-call-for-incident-response.html)  #CSO Online

### ⚠️ 2. CVE-2026-15481 [高危 8.8]

- Trendnet TEW-635BRM路由器（版本至1.00.03）存在一个安全漏洞，影响IPoA WAN连接设置组件中/sbin/rc文件的ipoa_test函数。通过操纵ipoa_ipaddr参数可导致命令注入，攻击者可远程利用此漏洞。该漏洞的利用代码已公开，可能被用于实际攻击。厂商表示无法确认漏洞是否存在，且该产品已停产。建议用户立即更换或隔离受影响设备。

> **来源**: [CVE-2026-15481 [HIGH 8.8]](https://nvd.nist.gov/vuln/detail/CVE-2026-15481)  CVSS 8.8 HIGH · #NVD · #漏洞

### 📰 3. 政府敦促企业改善路由器安全卫生

- 全球安全机构警告称，俄罗斯政府支持的攻击者正在利用路由器弱点进行攻击。一份来自北美、英国、欧洲和澳大利亚19个联邦机构的多国网络安全公告指出，攻击者继续通过老式手段利用保护不足或配置不当的网络设备。威胁行为者扫描弱化设备（通常是路由器），从而“机会性地”入侵关键基础设施网络，然后传输配置文件。这强调了企业必须加强路由器安全配置和补丁管理，以防范国家级攻击。

> **来源**: [Governments to enterprises: Improve your router security hygiene](https://www.csoonline.com/article/4196447/governments-to-enterprises-improve-your-router-security-hygiene.html)  #CSO Online

### ⚠️ 4. CVE-2026-15483 [高危 8.8]

- TRENDnet TEW-821DAP无线接入点（版本1.12B01）存在缓冲区溢出漏洞，影响/goform/tools_nslookup文件中的sub_41EC14函数。攻击者可通过远程操纵nslookup_target参数触发溢出。供应商表示无法确认漏洞存在，且该产品已停止支持（EOL）。此漏洞仅影响不再受支持的老旧设备。建议用户立即更换该型号接入点，因为无法获得安全补丁。

> **来源**: [CVE-2026-15483 [HIGH 8.8]](https://nvd.nist.gov/vuln/detail/CVE-2026-15483)  CVSS 8.8 HIGH · #NVD · #漏洞

### ⚠️ 5. CVE-2026-15480 [高危 8.8]

- Trendnet TEW-635BRM路由器（版本至1.00.03）存在栈缓冲区溢出漏洞，影响Web服务组件中的start_httpd函数。攻击者可通过远程操纵device_name参数触发漏洞，导致缓冲区溢出。漏洞利用代码已公开，可能被实际攻击利用。供应商表示无法确认漏洞存在，且该产品自2011年起已停止支持（EOL）。建议用户立即更换该型号路由器，因为不再接收安全更新。

> **来源**: [CVE-2026-15480 [HIGH 8.8]](https://nvd.nist.gov/vuln/detail/CVE-2026-15480)  CVSS 8.8 HIGH · #NVD · #漏洞

### 📰 6. 为对方工作的勒索软件谈判者

- 当公司遭受勒索软件攻击时，通常会求助于专家，专业谈判公司代表受害者与犯罪团伙沟通。然而，受害者意想不到的是，他们信任的谈判者可能私下将受害者的网络安全保险政策和谈判策略细节直接分享给攻击者。这一事件揭示了勒索软件响应中的信任危机，企业应谨慎选择谈判伙伴，并考虑内部加密通信和独立审计。

> **来源**: [The ransomware negotiator who was working for the other side](https://www.bitdefender.com/en-us/blog/hotforsecurity/ransomware-negotiator-working-other-side)  #Graham Cluley

### 📰 7. 美国财政部制裁首个VPN服务及其他协助勒索软件团伙的实体

- 美国财政部对1VPNS VPN服务及其涉嫌乌克兰的管理员，以及一名涉嫌销售“加密器”以隐藏勒索软件和其他恶意软件的白俄罗斯人实施制裁。这是美国首次针对协助勒索软件团伙的VPN服务采取行动。制裁旨在切断勒索软件生态系统的关键支持环节，包括匿名化工具和恶意软件混淆服务。此举向全球发出信号，任何为勒索软件提供便利的实体都将面临法律后果，建议企业审查其使用的VPN和加密服务来源。

> **来源**: [Treasury sanctions First VPN Service, others for abetting ransomware gangs](https://cyberscoop.com/us-sanctions-first-vpn-ransomware/)  #CyberScoop

### 📰 8. 针对傻瓜的钓鱼：Forg365降低M365账户接管门槛

- 一个通过Telegram分发的新钓鱼即服务平台Forg365正在降低微软365账户接管的技术门槛，为低技能攻击者提供自动化工具来规避某些身份验证控制并在入侵后保持访问权限。根据安全公司ZeroBEC的研究，该平台利用AI辅助诱饵创建，结合设备代码滥用和中间人攻击技术。Forg365提供五天免费试用，随后订阅价格为每月400美元或每年3800美元。这凸显了AI在钓鱼工具中的应用正使攻击民主化，企业需加强多因素认证和用户培训。

> **来源**: [Phishing for dummies: Forg365 lowers barrier to M365 account takeovers](https://www.csoonline.com/article/4196646/phishing-for-dummies-forg365-lowers-barrier-to-m365-account-takeovers.html)  #CSO Online

### ⚠️ 9. CVE-2026-15479 [高 7.3]

- 该漏洞存在于H3C NX15路由器固件版本V100R017中，严重等级为高（7.3分）。漏洞位于组件“管理员密码修改端点”的/api/login/modify文件中，通过操纵newPass参数可导致弱密码恢复。攻击者可远程利用此漏洞，且利用代码已公开，增加了被实际攻击的风险。H3C已被告知此漏洞，但尚未发布补丁。建议用户立即限制对该端点的网络访问，并监控异常密码修改请求，同时关注厂商更新。

> **来源**: [CVE-2026-15479 [HIGH 7.3]](https://nvd.nist.gov/vuln/detail/CVE-2026-15479)  CVSS 7.3 HIGH · #NVD · #漏洞

### 📰 10. 新MacOS恶意软件利用合法开发者ID伪装成Apple Crash Reporter

- Jamf威胁实验室的研究人员详细描述了名为CrashStealer的恶意软件，它窃取密码、加密货币钱包等敏感信息。该恶意软件利用合法的苹果开发者ID进行签名，伪装成Apple Crash Reporter以逃避检测。它通过社会工程学手段诱导用户安装，然后收集系统凭证和钱包数据。这提醒MacOS用户不要轻易信任看似合法的系统提示，并定期检查已签名的应用程序。

> **来源**: [New MacOS Malware Exploits Legitimate Developer ID to Pose as Apple Crash Reporter](https://www.infosecurity-magazine.com/news/macos-malware-apple-crash-reporter/)  #Infosecurity Magazine

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
