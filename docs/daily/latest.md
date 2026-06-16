# 🤖🔒 AI+安全日报 | 2026-06-17

> 今日共收录 **10** 条，AI+安全领域重要动态速览

---

### 📰 1. 提升CTEM精度：Tenable One中的持续控制验证如何转变暴露管理

- Tenable One引入了持续控制验证功能，旨在通过过滤警报噪音并考虑主动网络防御来改进CTEM（持续威胁暴露管理）计划。该功能将EDR、MFA和防火墙等主动安全控制直接映射到潜在攻击路径上，帮助团队专注于可访问和可利用的攻击路径。随着漏洞利用成为首要初始访问向量，以及前沿AI加速漏洞发现，组织必须从管理理论网络风险转向验证实际、可访问的暴露。Tenable One的这一功能使安全团队能够更精确地识别和修复真正的风险。

> **来源**: [Improving precision in CTEM: How continuous controls validation in Tenable One transforms exposure management](https://www.tenable.com/blog/ctem-exposure-management-validation)  #Tenable Blog

### 📰 2. 思科在发现主动利用证据后修补SD-WAN漏洞

- 思科发布了针对其Catalyst SD-WAN Manager软件中一个漏洞的修复补丁，此前已发现该漏洞被有限利用。核心事件是漏洞CVE-2026-20262（严重等级未明确，但根据描述可能导致提权，通常为高严重性）影响Catalyst SD-WAN Manager（原SD-WAN vManage）的Web界面。技术细节显示，该漏洞源于文件上传过程中对用户提供输入的验证不足，允许经过身份验证的攻击者创建或覆盖文件，这些文件随后可能被用于获取root权限。影响范围是所有使用思科Catalyst SD-WAN Manager管理分布式网络环境的企业。行业意义在于，鉴于已有主动利用证据，组织应立即应用补丁，并审查相关系统的访问控制，防止未经授权的文件操作。

> **来源**: [Cisco patches SD-WAN flaw amid evidence of active exploitation](https://www.csoonline.com/article/4185525/cisco-sd-wan-flaw-puts-spotlight-on-enterprise-management-plane-risk.html)  #CSO Online

### 📰 3. 中国关联黑客利用遗留REDCap漏洞攻击美加研究机构

- Google威胁情报组（GTIG）警告称，一个与中国关联的威胁行为者UNC6508针对美国和加拿大的研究环境进行了长达一年多的网络间谍活动。该活动滥用了REDCap（一个广泛用于收集和管理研究数据的平台），攻击者拦截了REDCap的升级过程以注入持久性恶意软件。目标包括学术机构、医学研究中心、医疗保健提供商、军事健康网络和国防研究机构。Google表示该活动已被破坏，但强调此类针对研究基础设施的攻击对国家安全和知识产权构成严重威胁。

> **来源**: [China-linked hackers target US, Canada research using legacy REDCap exploits](https://www.csoonline.com/article/4185582/china-linked-hackers-target-us-canada-research-using-legacy-redcap-exploits.html)  #CSO Online

### ⚠️ 4. RevoUninstaller IOCTL处理堆缓冲区溢出漏洞

- VS Revo RevoUninstaller 2.5.x和2.6.x版本中存在高危堆缓冲区溢出漏洞（CVSS 7.8）。漏洞位于RevoDetector.sys驱动库的IOCtl_Handler函数中，本地攻击者可通过发送特制的IOCTL请求触发堆缓冲区溢出，可能导致系统崩溃或权限提升。该漏洞利用代码已公开，建议用户立即升级至2.7.0版本以修复此问题。

> **来源**: [CVE-2026-12193 [HIGH 7.8]](https://nvd.nist.gov/vuln/detail/CVE-2026-12193)  CVSS 7.8 HIGH · #NVD · #漏洞

### ⚠️ 5. CVE-2026-12174 [高严重性 8.8]

- D-Link DCS-935L网络摄像头1.10.01版本中发现一个安全漏洞，该漏洞影响HTTP处理组件中/web/cgi-bin/greece/rhea文件的snprintf函数。技术细节显示，攻击者可以通过操纵data参数触发格式字符串漏洞，从而可能导致信息泄露或代码执行。该漏洞的CVSS评分为8.8（高严重性），攻击者可远程发起攻击。影响范围是使用D-Link DCS-935L型号摄像头的用户，且漏洞利用代码已公开披露。行业意义在于，物联网设备（如网络摄像头）的固件漏洞是常见攻击面，用户应尽快检查并安装厂商提供的固件更新，同时限制设备对公网的暴露。

> **来源**: [CVE-2026-12174 [HIGH 8.8]](https://nvd.nist.gov/vuln/detail/CVE-2026-12174)  CVSS 8.8 HIGH · #NVD · #漏洞

### 📰 6. 行业联盟应对AI威胁，保障开源安全

- 由Chainguard、摩根大通和纽约梅隆银行等机构共同发起的新行业联盟“Athena”正式成立，旨在修复前沿AI模型发现的开源软件漏洞，防止攻击者抢先利用。该联盟将聚焦于AI驱动的漏洞发现与自动化修复流程，通过协作共享威胁情报和补丁方案，提升开源生态系统的整体韧性。此举标志着金融与科技巨头首次联合应对AI对开源安全的系统性风险，预计将推动行业标准制定，并鼓励更多企业参与开源安全治理。

> **来源**: [Chainguard, JPMorgan, BNY Team Up to Secure Open Source from AI Threats](https://www.infosecurity-magazine.com/news/chainguard-bny-open-source-athena/)  #Infosecurity Magazine

### ⚠️ 7. GL-MT3000 在线固件升级命令注入漏洞

- GL.iNet GL-MT3000路由器在4.4.5及之前版本中存在高危命令注入漏洞（CVSS 8.8）。攻击者可远程利用/usr/bin/one_click_upgrade文件中的在线固件升级处理功能，通过精心构造的请求执行任意系统命令。该漏洞利用代码已公开，可能被大规模利用。建议用户立即升级至4.7版本以修复此问题，并关注厂商后续安全公告。

> **来源**: [CVE-2026-12187 [HIGH 8.8]](https://nvd.nist.gov/vuln/detail/CVE-2026-12187)  CVSS 8.8 HIGH · #NVD · #漏洞

### 📰 8. 涉嫌运营Kimwolf僵尸网络的“Dort”在美加两国被捕

- 加拿大警方于周三逮捕了一名23岁的渥太华男子，其涉嫌构建并运营名为Kimwolf的物联网僵尸网络。该僵尸网络在过去六个月内感染了数百万台设备，用于发动大规模分布式拒绝服务（DDoS）攻击。KrebsOnSecurity在2026年2月公开指认该嫌疑人后，其又对作者和一名安全研究员发动了DDoS、人肉搜索和报假警攻击。目前该嫌疑人面临加拿大和美国的刑事黑客指控。

> **来源**: [Alleged Kimwolf Botmaster ‘Dort’ Arrested, Charged in U.S. and Canada](https://krebsonsecurity.com/2026/05/alleged-kimwolf-botmaster-dort-arrested-charged-in-u-s-and-canada/)  #Krebs on Security

### 📰 9. 虚假SSA邮件驱动Venomous#Helper钓鱼攻击

- Venomous#Helper攻击者冒充美国社会保障局（SSA）发送钓鱼邮件，诱骗用户下载并安装经过数字签名的远程管理软件（RMM），从而在目标网络中建立持久访问权限。该攻击利用合法签名绕过安全检测，一旦安装，攻击者可远程控制设备、窃取凭证并横向移动。安全公司指出，该活动已影响多个美国组织，建议用户警惕声称来自SSA的异常邮件，并启用应用白名单和端点检测响应（EDR）系统以阻止未授权的RMM部署。

> **来源**: [Fake SSA Emails Drive Venomous#Helper Phishing Campaign](https://www.infosecurity-magazine.com/news/ssa-emails-venomous-helper-phishing/)  #Infosecurity Magazine

### 📰 10. 多数网络安全团队难觅时间接受新威胁培训

- 调查显示，尽管组织普遍认识到AI等新技术带来的安全挑战，但多数网络安全团队因日常运营压力，难以在工作时间内安排针对新威胁的培训。员工反映，持续警报响应、合规审计和补丁管理挤占了学习时间，导致技能更新滞后。这种培训缺口可能加剧防御漏洞，使组织更易受AI驱动的攻击（如深度伪造钓鱼或自动化漏洞利用）。建议企业将培训嵌入日常工作流（如微学习模块），并优先投资自动化工具以释放人力用于能力提升。

> **来源**: [Most Cybersecurity Teams Struggle to Find Time for Training on New Cyber Threats](https://www.infosecurity-magazine.com/news/cybersecurity-training-time/)  #Infosecurity Magazine

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
