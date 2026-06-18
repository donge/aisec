# 今日日报
# 🤖🔒 AI+安全日报 | 2026-06-19

> 今日共收录 **10** 条，AI+安全领域重要动态速览

---

### 📰 1. 攻击者滥用Google Ads、GitLab和Claude传播恶意软件

- TrendAI研究人员发现，攻击者滥用Google Ads、GitLab Pages和Claude共享聊天功能，通过ClickFix社会工程攻击诱骗用户执行恶意命令。攻击者伪装成流行的AI开发工具，在Google搜索结果中投放恶意广告，将受害者引导至伪造的下载页面。受害者被要求复制粘贴PowerShell或终端命令，从而感染恶意软件。该活动已导致超过2000名受害者。建议用户仅从官方渠道下载AI工具，并警惕要求手动执行命令的提示。

> **来源**: [Attackers abuse Google Ads, GitLab, and Claude to deliver malware](https://www.csoonline.com/article/4186813/attackers-abuse-google-ads-gitlab-and-claude-to-deliver-malware.html)  #CSO Online

### 📰 2. FortiBleed活动暴露全球75,000台Fortinet防火墙

- 代号“FortiBleed”的大规模凭证泄露活动已暴露全球约75,000台Fortinet FortiGate防火墙设备。安全研究员Volodymyr Diachenko发现攻击者控制的列表，包含通过多种手段收集的FortiGate有效密码；SOCRadar团队进一步发现攻击者运营的服务器，其中存储了设备配置和VPN凭证。攻击者利用这些凭证持续访问企业内网，可能用于数据窃取或横向移动。该事件影响所有未及时修补已知漏洞（如CVE-2023-27997，严重等级9.8/10）的FortiGate设备，建议管理员立即更新固件、重置所有管理员和VPN密码，并启用多因素认证。

> **来源**: [FortiBleed campaign exposes 75,000 Fortinet firewalls worldwide](https://www.csoonline.com/article/4186790/fortibleed-campaign-exposes-75000-fortinet-firewalls-worldwide.html)  #CSO Online

### 📰 3. 安全播客第472期：AI被黑，BitLocker被绕过

- 本期播客揭示了一种新型AI攻击：攻击者通过植入陷阱的漏洞报告，诱骗AI编程助手泄露公司机密，无需钓鱼邮件、恶意软件或密码窃取。同时，名为“Nightmare Eclipse”的黑客公开了三个零日漏洞，其中一个允许攻击者使用USB设备绕过微软BitLocker加密。微软对此表示强烈不满。此外，节目还采访了Proton Pass的Son Nguyen Kim，探讨将AI代理接入电子邮件系统的安全风险。建议企业加强对AI工具输入数据的审查，并关注BitLocker漏洞的补丁更新。

> **来源**: [Smashing Security podcast #472: AI gets hacked, and BitLocker gets bypassed](https://grahamcluley.com/smashing-security-podcast-472/)  #Graham Cluley

### 📰 4. 利用Tenable One落实CISA BOD 26-04指令

- 美国网络安全和基础设施安全局（CISA）发布新指令BOD 26-04，正式终止联邦机构依赖静态漏洞评分（如CVSS）的做法。该指令要求转向基于真实世界威胁和资产上下文的动态漏洞优先级模型。Tenable One平台通过映射CISA的四个核心要求，帮助联邦机构实现动态资产暴露评估、威胁验证和AI驱动的自动化，以满足压缩的合规时间表。这一转变意味着安全团队需从“修补所有高分漏洞”转向“优先处理被实际利用的漏洞”。对于依赖传统CVSS评分的组织，需立即调整漏洞管理流程，采用上下文感知的优先级排序工具。

> **来源**: [Operationalize CISA BOD 26-04 with Tenable One](https://www.tenable.com/blog/cisa-bod-26-04-tenable-helps-federal-agencies-comply)  #Tenable Blog

### 📰 5. 埃森哲斥资41.8亿美元收购三家公司，大力进军工业网络安全

- 咨询巨头埃森哲以41.8亿美元收购Dragos的多数股权，并全资收购runZero和NetRise，标志着其首次大规模进军运营技术（OT）软件领域。此举正值AI驱动的威胁对关键基础设施的攻击日益加剧之际。Dragos专注于工业控制系统（ICS）安全，runZero提供网络资产发现，NetRise则擅长固件和物联网安全分析。此次收购整合了OT可见性、威胁检测和响应能力，旨在应对针对能源、制造等行业的国家级网络攻击。这反映了行业趋势：传统IT安全厂商正加速向OT领域扩展，以应对日益复杂的工业网络威胁。

> **来源**: [Accenture shells out $4.18B on three companies in big industrial cybersecurity push](https://cyberscoop.com/accenture-industrial-cybersecurity-acquisition-dragos-netrise-runzero/)  #CyberScoop

### 📰 6. 威胁行为者利用AI构建EDR规避工具

- Sophos安全研究人员发现，一名威胁行为者利用AI编码工具（如GitHub Copilot）构建并测试了能够规避端点检测与响应（EDR）系统的恶意软件。该工具通过AI自动生成多态代码变种，动态修改攻击载荷特征以绕过签名检测，并在沙箱环境中自我测试规避能力。Sophos警告称，AI辅助开发使攻击者能快速迭代绕过技术，传统EDR规则更新速度已难以匹配。该发现对安全厂商提出新挑战，要求其将AI对抗技术纳入下一代防御体系。

> **来源**: [Threat Actor Uses AI to Build EDR Evasion Tools](https://www.infosecurity-magazine.com/news/ai-edr-evasion-tooling/)  #Infosecurity Magazine

### 📰 7. 英国NCSC警告：75%针对关键基础设施的网络攻击来自敌对国家

- 英国国家网络安全中心（NCSC）首席执行官Richard Horne透露，针对英国关键基础设施的网络攻击中，75%来自国家级行为体。这些攻击主要针对能源、交通、医疗等关键部门，旨在破坏服务或窃取敏感数据。NCSC强调，此类攻击的复杂性和持续性显著增加，常结合社会工程、供应链入侵和零日漏洞利用。该警告凸显了关键基础设施面临的严峻地缘政治风险，建议相关机构加强威胁情报共享、实施网络分段，并优先部署OT安全监控系统。

> **来源**: [Hostile States Behind 75% of Cyber-Attacks on UK Critical Infrastructure, NCSC Warns](https://www.infosecurity-magazine.com/news/hostile-states-cni-75-percent-ncsc/)  #Infosecurity Magazine

### 📰 8. Infosecurity Europe：英国DSIT如何保护数千家组织免受网络漏洞侵害

- 英国科学、创新与技术部（DSIT）在Infosecurity Europe上详细介绍了其保护数千家政府机构免受网络漏洞侵害的方法。DSIT采用“人工建议+技术系统”相结合的模式，包括主动漏洞扫描、威胁情报共享平台和自动化补丁管理。该部门还提供定制化的安全咨询，帮助中小型机构应对资源不足的挑战。DSIT强调，其成功关键在于建立跨部门的协作网络，并利用AI技术加速漏洞发现和响应。这一模式为其他国家的政府网络安全建设提供了参考。

> **来源**: [Infosecurity Europe: How DSIT Protects Thousands of UK Orgs from Cyber Vulnerabilities](https://www.infosecurity-magazine.com/news/infosecurity-europe-dsit-cyber/)  #Infosecurity Magazine

### 📰 9. Infosecurity Europe：微软警告AI采用为攻击者分发恶意软件创造新机会

- 微软检测与响应团队（DART）在Infosecurity Europe大会上披露，网络犯罪分子正利用组织采用AI工具的机会，开发恶意AI应用。这些应用伪装成合法AI助手，诱导用户执行恶意命令或下载后门程序。DART已发现多起案例，攻击者通过篡改AI模型的训练数据或输出结果，实现隐蔽的恶意软件分发。微软警告，随着AI工具在企业中的普及，此类攻击将显著增加。建议企业部署AI安全监控机制，并对第三方AI应用进行严格审计。

> **来源**: [Infosecurity Europe: AI Adoption Creates New Opportunities for Attackers to Distribute Malware, Microsoft Warns](https://www.infosecurity-magazine.com/news/attackers-ai-adoption-malware/)  #Infosecurity Magazine

### 📰 10. Canvas遭入侵导致全美学校停课

- 广泛使用的教育技术平台Canvas遭遇数据勒索攻击，攻击者篡改其登录页面，显示赎金要求并威胁泄露2.75亿学生和教职员工的数据，涉及近9000所教育机构。此次攻击导致全美多所学校和大学停课，课程和作业系统中断。Canvas母公司Instructure已确认事件，但未透露攻击细节。建议教育机构立即重置所有用户密码，并启用账户活动审计功能。

> **来源**: [Canvas Breach Disrupts Schools & Colleges Nationwide](https://krebsonsecurity.com/2026/05/canvas-breach-disrupts-schools-colleges-nationwide/)  #Krebs on Security

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
