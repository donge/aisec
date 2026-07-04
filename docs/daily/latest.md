# 🤖🔒 AI+安全日报 | 2026-07-05

> 今日共收录 **8** 条，AI+安全领域重要动态速览

---

### ⚠️ 1. CVE-2026-24270 [严重 9.8]

- NVIDIA AIStore框架存在一个认证绕过漏洞，攻击者可利用该漏洞绕过身份验证机制。成功利用此漏洞可能导致拒绝服务、权限提升、信息泄露和数据篡改。该漏洞的CVSS评分为9.8（严重等级），影响所有使用NVIDIA AIStore框架的版本。建议用户立即更新到NVIDIA发布的最新补丁版本，并实施额外的网络访问控制措施以降低风险。

> **来源**: [CVE-2026-24270 [CRITICAL 9.8]](https://nvd.nist.gov/vuln/detail/CVE-2026-24270)  CVSS 9.8 CRITICAL · #NVD · #漏洞

### ⚠️ 2. CVE-2026-24264 [高危 7.5]

- NVIDIA Triton Inference Server for Linux 中存在一个高危漏洞（CVE-2026-24264，CVSS评分7.5），攻击者可利用该漏洞导致对高度压缩数据的不当处理。成功利用此漏洞可能导致拒绝服务（DoS），影响模型推理服务的可用性。该漏洞影响所有使用NVIDIA Triton Inference Server的Linux部署环境，尤其对AI推理工作负载构成威胁。建议用户及时应用NVIDIA发布的安全补丁，并监控异常流量以检测潜在攻击。

> **来源**: [CVE-2026-24264 [HIGH 7.5]](https://nvd.nist.gov/vuln/detail/CVE-2026-24264)  CVSS 7.5 HIGH · #NVD · #漏洞

### ⚠️ 3. CVE-2026-24260 [高危 8.5]

- NVIDIA Container Toolkit for Linux 中存在一个高危漏洞（CVE-2026-24260，CVSS评分8.5），攻击者可利用该漏洞触发检查时间与使用时间（TOCTOU）竞争条件。成功利用此漏洞可能导致代码执行、权限提升及数据篡改。该漏洞影响所有使用NVIDIA Container Toolkit的Linux系统，尤其威胁容器化环境的安全性。建议用户立即更新至最新版本的Container Toolkit，并实施严格的访问控制以降低风险。

> **来源**: [CVE-2026-24260 [HIGH 8.5]](https://nvd.nist.gov/vuln/detail/CVE-2026-24260)  CVSS 8.5 HIGH · #NVD · #漏洞

### ⚠️ 4. CVE-2026-24251 [高危 7.8]

- 该漏洞与 CVE-2026-24246 类似，涉及 NVIDIA Megatron Bridge for Linux 中动态管理代码资源的控制不当问题（CVSS 7.8）。攻击者可利用此漏洞执行恶意代码、提升权限、篡改数据或泄露信息。此漏洞对 AI 基础设施的稳定性和数据完整性构成严重威胁。安全团队应优先处理这些漏洞，并考虑在补丁部署前限制对 Megatron Bridge 服务的访问。

> **来源**: [CVE-2026-24251 [HIGH 7.8]](https://nvd.nist.gov/vuln/detail/CVE-2026-24251)  CVSS 7.8 HIGH · #NVD · #漏洞

### 📰 5. Google发布已在野外被利用的Chrome漏洞补丁

- Google已发布Chrome浏览器安全更新，修复一个已被在野利用的高危漏洞（CVE-2026-11645）。该漏洞允许远程攻击者通过精心构造的HTML页面在沙箱内执行任意代码，绕过浏览器的安全隔离机制。此漏洞影响所有Chrome桌面版和移动版用户，攻击者可能利用其进行恶意软件传播或数据窃取。建议用户立即更新Chrome至最新版本（如Chrome 130+），并启用自动更新功能以防范此类零日攻击。

> **来源**: [Google Releases Patch for Chrome Vulnerability Exploited in the Wild](https://www.infosecurity-magazine.com/news/google-patch-chrome-vulnerability/)  #Infosecurity Magazine

### 📰 6. 伊朗关联黑客利用钓鱼和SEO投毒攻击美国航空业

- 伊朗背景的威胁组织“Nimbus Manticore”针对美国航空业发起了一场复杂的网络攻击活动，结合了钓鱼邮件和搜索引擎优化（SEO）投毒技术。攻击者利用AI构建了名为“MiniFast”的后门恶意软件，通过伪装成合法航空相关内容的钓鱼链接或SEO操纵的搜索结果诱导受害者下载。该后门具备远程控制、数据窃取和持久化能力，可绕过传统安全检测。此次事件凸显了地缘政治驱动的针对性攻击对关键基础设施行业的威胁，建议航空企业加强员工安全意识培训并部署基于行为的端点检测系统。

> **来源**: [Iran-Linked Hackers Target US Aviation with Phishing and SEO Poisoning Campaign](https://www.infosecurity-magazine.com/news/iranian-hackers-us-aviation/)  #Infosecurity Magazine

### 📰 7. FBI警告“Kali365”钓鱼工具包劫持Microsoft 365 OAuth令牌

- 美国联邦调查局（FBI）发布警告称，“Kali365”钓鱼即服务平台正在被网络犯罪分子广泛使用，该工具包专门针对Microsoft 365用户的OAuth认证令牌进行劫持。攻击者通过伪造的登录页面窃取用户授权令牌，从而绕过多因素认证（MFA）并长期访问受害者的云账户。该平台降低了网络犯罪的技术门槛，使非专业黑客也能发起高级钓鱼攻击。FBI建议组织启用条件访问策略、监控异常的OAuth应用授权，并定期审查令牌使用情况。

> **来源**: [FBI Warns 'Kali365' Phishing Kit Hijacks Microsoft 365 OAuth Tokens](https://www.infosecurity-magazine.com/news/fbi-kali365-phishing-kit-m365/)  #Infosecurity Magazine

### 📰 8. DragonForce勒索软件利用Microsoft Teams隐藏攻击大型企业

- DragonForce勒索软件组织在针对一家大型企业的攻击中，利用Microsoft Teams的访客令牌来隐藏其命令与控制流量。攻击者通过滥用Teams访客令牌，使恶意活动看起来像合法的通信，从而绕过安全检测。这种技术使得安全团队难以区分正常协作流量与恶意活动。该事件凸显了攻击者利用合法协作工具进行隐蔽攻击的趋势，建议企业加强对协作平台流量的监控和异常行为检测。

> **来源**: [DragonForce Ransomware Exploited Microsoft Teams to Hide in Attack Against Major Company](https://www.infosecurity-magazine.com/news/dragonforce-ransomware-hidden/)  #Infosecurity Magazine

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
