# 🤖🔒 AI+安全日报 | 2026-06-24

> 今日共收录 **10** 条，AI+安全领域重要动态速览

---

### ⚠️ 1. CVE-2026-12773 [高危 7.3] 🔬

- BerriAI litellm 1.59.8及之前版本中存在身份验证绕过漏洞，影响MCP代理组件的UserAPIKeyAuth函数。攻击者可远程利用该漏洞，通过操纵认证过程绕过安全控制。漏洞利用代码已公开，可能被用于实际攻击。建议用户立即升级至1.59.9或更高版本，并审查MCP代理配置。

> **来源**: [CVE-2026-12773 [HIGH 7.3] 🔬](https://nvd.nist.gov/vuln/detail/CVE-2026-12773)  CVSS 7.3 HIGH · #NVD · #漏洞

### ⚠️ 2. CVE-2026-12782 [高危 7.8]

- EaseUS Partition Master（版本至14.5）的内核驱动组件EUEDKEPM.sys中存在访问控制不当漏洞，与CVE-2026-12781类似。攻击者需要本地访问权限，利用代码已公开。该漏洞可能导致系统权限提升或敏感数据泄露。供应商表示此问题仅影响旧版本，并已在新版本中修复。强烈建议用户升级到最新版本，并限制本地访问权限以减少风险。

> **来源**: [CVE-2026-12782 [HIGH 7.8]](https://nvd.nist.gov/vuln/detail/CVE-2026-12782)  CVSS 7.8 HIGH · #NVD · #漏洞

### ⚠️ 3. CVE-2026-12781 [高危 7.8]

- EaseUS Partition Master（版本至14.5）的内核驱动组件epmntdrv.sys中存在未知功能导致的访问控制不当漏洞。攻击者需要本地访问权限才能利用，且利用代码已公开。该漏洞可能允许攻击者提升权限或执行未授权操作。供应商确认此问题仅存在于旧版本，并已在新版本中修复。建议用户立即升级到最新版本的EaseUS Partition Master。

> **来源**: [CVE-2026-12781 [HIGH 7.8]](https://nvd.nist.gov/vuln/detail/CVE-2026-12781)  CVSS 7.8 HIGH · #NVD · #漏洞

### ⚠️ 4. CVE-2026-12775 [高危 7.3]

- Montodel House-Rental-Management系统（版本至90010017b81265eb1ef3810268909f7719a33863）存在SQL注入漏洞，位于/login.php文件中，通过操纵Username参数可远程利用。该漏洞的利用代码已公开，可能被广泛使用。由于产品采用滚动发布模式，受影响或更新版本的详细信息不可用。建议用户立即检查并更新至最新版本，同时实施输入验证和参数化查询以防止SQL注入。

> **来源**: [CVE-2026-12775 [HIGH 7.3]](https://nvd.nist.gov/vuln/detail/CVE-2026-12775)  CVSS 7.3 HIGH · #NVD · #漏洞

### 📰 5. 微软发现未修补的SharePoint服务器被多个攻击者同时利用

- 微软检测与响应团队（DART）在一次勒索软件调查中发现，同一受害网络内有两个不相关的攻击者同时活动。最初调查针对Storm-2603勒索软件团伙，但随后发现另一个使用不同工具和基础设施的攻击链。两个攻击者均利用了未修补的SharePoint服务器漏洞进入网络，相互掩盖了彼此的活动。微软警告称，未修补的SharePoint服务器已成为多攻击者入侵的常见入口点，建议组织立即应用安全更新并加强网络监控。

> **来源**: [Unpatched SharePoint servers opened the door to multiple attackers, Microsoft finds](https://www.csoonline.com/article/4188359/unpatched-sharepoint-servers-opened-the-door-to-multiple-attackers-microsoft-finds.html)  #CSO Online

### 📰 6. GitHub Actions加强签出安全以阻止“pwn request”攻击

- GitHub宣布actions/checkout v7版本自动阻止在pull_request_target或workflow_run事件中获取未审查的分支代码，以防范“pwn request”攻击。此类攻击利用pull_request_target工作流触发器的不安全使用，使攻击者代码以工作流完整权限运行。新版本默认失败此类工作流，开发者需显式选择退出才能绕过检查。该更新于6月18日发布，旨在应对开发者环境中激增的供应链攻击。

> **来源**: [GitHub Actions hardens checkout security to block ‘pwn request’ attacks](https://www.csoonline.com/article/4188144/github-actions-hardens-checkout-security-to-block-pwn-request-attacks-2.html)  #CSO Online

### 📰 7. OpenAI扩展Daybreak以帮助防御者修补漏洞

- OpenAI扩展了Daybreak项目，发布了完整的GPT-5.5-Cyber版本，旨在帮助安全防御者修补软件漏洞。Daybreak最初专注于自动化漏洞发现，现在通过AI模型增强漏洞修补能力。该工具可能加速安全团队识别和修复漏洞的过程，减少攻击窗口。这一举措标志着AI在网络安全防御中的进一步应用，可能改变传统漏洞管理流程。

> **来源**: [OpenAI Expands Daybreak to Help Defenders Patch Flaws](https://www.infosecurity-magazine.com/news/openai-daybreak-gpt-5-5-cyber/)  #Infosecurity Magazine

### 📰 8. OpenAI推出AI驱动计划修复开源软件漏洞

- OpenAI与网络安全公司Trail of Bits合作启动“Patch the Planet”计划，利用AI辅助漏洞研究和人工审查，为广泛使用的开源软件发现并修复安全缺陷。该计划旨在将安全发现转化为经过测试的补丁，并通过现有项目渠道披露。首批参与项目包括Python、Go、cURL、Sigstore、NATS Server、aiohttp、freenginx、pyca/cryptography和python.org。此举旨在应对企业软件供应链中日益增长的深层漏洞风险。

> **来源**: [OpenAI rolls out AI-led push to fix open-source software flaws](https://www.csoonline.com/article/4188321/openai-rolls-out-ai-led-push-to-fix-open-source-software-flaws.html)  #CSO Online

### 📰 9. 网络安全不再是关于防护，而是关于生存

- 文章指出当前网络安全战略存在根本矛盾：组织口头上承认“假设被攻破”，但预算、治理和架构设计仍以预防为核心。作者认为，随着攻击手段日益复杂，完全阻止入侵已不现实，重点应转向检测、响应和恢复能力。建议企业重新分配资源，从“筑墙”转向“快速恢复”，包括投资事件响应团队、备份系统和业务连续性计划。这一观点挑战了传统安全范式，对所有CISO具有战略指导意义。

> **来源**: [Cybersecurity is no longer about protection. It’s about survival.](https://www.csoonline.com/article/4188186/cybersecurity-is-no-longer-about-protection-its-about-survival.html)  #CSO Online

### 📰 10. Miasma活动揭示新供应链威胁模型与开发者凭证地下市场

- Miasma是一种自传播的npm蠕虫，源自TeamPCP于5月12日开源的Mini Shai-Hulud工具。攻击者利用被盗的会话cookie（在地下市场停留七周后）污染了npm注册表中的32个Red Hat软件包。该活动在6月1日至5日期间分三波攻击，共感染89个以上npm包，影响Red Hat、Vapi.ai和Microsoft等公司。公开的完整武器化工具链意味着任何操作者都能复制结构相同的供应链攻击，凸显了开发者凭证地下市场的严重威胁。

> **来源**: [What the Miasma campaign reveals about the new supply chain threat model and the underground market for developer credentials](https://www.tenable.com/blog/what-the-miasma-campaign-reveals-about-the-new-supply-chain-threat-model-and-the-underground)  #Tenable Blog

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
