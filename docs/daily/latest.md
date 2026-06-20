# 🤖🔒 AI+安全日报 | 2026-06-21

> 今日共收录 **9** 条，AI+安全领域重要动态速览

---

### ⚠️ 1. CVE-2026-32652 [高危 7.8]

- Dell AIOps Collector 1.18.3之前版本存在“使用默认凭证”漏洞，允许具有控制台访问权限的低权限攻击者获取文件系统访问权限。该漏洞仅影响1.18.3之前版本的初始安装，通过手动或自动方式升级到1.18.3或更高版本的系统不受影响。攻击者可利用默认管理员账户（如admin/admin）登录并读取敏感配置文件。建议立即检查所有Dell AIOps Collector实例，确保已升级到1.18.3+，并更改所有默认凭证。此漏洞凸显了AI运维工具中默认配置的安全风险。

> **来源**: [CVE-2026-32652 [HIGH 7.8]](https://nvd.nist.gov/vuln/detail/CVE-2026-32652)  CVSS 7.8 HIGH · #NVD · #漏洞

### ⚠️ 2. CVE-2026-20190 [高危 7.5]

- Cisco ISE和ISE-PIC中存在高危信息泄露漏洞，允许未经身份验证的远程攻击者查看敏感信息。漏洞源于资源访问时授权检查不当，攻击者可通过发送特制流量获取包括哈希凭证在内的敏感数据。这些哈希凭证可能被用于后续的离线破解或传递哈希攻击。影响版本与CVE-2026-20181相同。建议立即应用Cisco安全公告中的补丁，并启用日志审计以检测异常访问模式。此漏洞与CVE-2026-20181结合使用可导致完全系统接管。

> **来源**: [CVE-2026-20190 [HIGH 7.5]](https://nvd.nist.gov/vuln/detail/CVE-2026-20190)  CVSS 7.5 HIGH · #NVD · #漏洞

### ⚠️ 3. CVE-2026-20181 [严重 9.1]

- Cisco ISE和ISE-PIC中存在严重漏洞，允许经过身份验证的远程攻击者在受影响设备的底层操作系统上执行任意命令。漏洞源于对用户提供的输入验证不足，攻击者需拥有有效管理员凭证，通过发送特制HTTP请求触发。成功利用后，攻击者可完全控制设备，包括修改配置、窃取数据和横向移动。影响版本包括Cisco ISE 3.1及更早版本、ISE-PIC 1.4及更早版本。建议立即升级到Cisco发布的修复版本，并限制管理接口仅对可信IP开放。

> **来源**: [CVE-2026-20181 [CRITICAL 9.1]](https://nvd.nist.gov/vuln/detail/CVE-2026-20181)  CVSS 9.1 CRITICAL · #NVD · #漏洞

### 📰 4. 威胁简报：缓解大规模凭证攻击

- Unit 42发布指南，针对近期针对安全厂商设备的大规模凭证攻击活动，提供缓解措施。攻击者利用暴力破解、凭证填充和撞库技术，针对VPN、防火墙和远程访问设备的管理员账户。受影响范围包括所有使用默认或弱密码的企业网络设备，尤其是安全厂商的网关产品。建议措施包括：强制实施多因素认证、禁用默认管理员账户、部署账户锁定策略、并监控异常登录行为。Unit 42强调，凭证攻击已成为初始入侵的主要手段，组织需将凭证安全列为最高优先级。

> **来源**: [Threat Brief: Mitigating Large-Scale Credential Attacks](https://unit42.paloaltonetworks.com/large-scale-credential-attacks/)  #Unit 42

### 📰 5. 威胁行为者向勒索软件即服务平台添加高级“EDR杀手”工具

- 安全公司ESET研究发现，知名勒索软件即服务（RaaS）平台“The Gentlemen”向其附属成员提供了能够禁用企业端点检测与响应（EDR）产品的高级工具。该平台自去年出现以来，凭借90/10的分成模式（附属成员获90%赎金）迅速崛起。今年5月，该平台服务器遭未知攻击者入侵，但未影响其运营。ESET警告，此类工具可绕过主流EDR产品，使企业面临更高勒索风险。建议组织部署多层防御体系，包括行为分析和端点隔离技术。

> **来源**: [Threat actor adds advanced ‘EDR killer’ tools to ransomware-as-a-service platform](https://www.csoonline.com/article/4187329/threat-actor-adds-advanced-edr-killer-tools-to-ransomware-as-a-service-platform.html)  #CSO Online

### 📰 6. Infosecurity Europe：漏洞管理创新者Konvu赢得网络安全初创企业奖

- 在Infosecurity Europe大会上，初创公司Konvu凭借其在AI时代优先处理漏洞的创新方案赢得首届网络安全初创企业奖。Konvu的平台利用机器学习分析漏洞上下文、资产价值和攻击路径，自动生成修复优先级排序。评审团称赞其能解决传统漏洞管理工具“噪音过多”的问题，帮助安全团队聚焦关键风险。该奖项凸显了AI在提升漏洞管理效率方面的潜力，尤其适用于大型企业应对海量安全告警的场景。

> **来源**: [Infosecurity Europe: Vulnerability Management Innovator Konvu Wins Cyber Startup Award](https://www.infosecurity-magazine.com/news/konvu-wins-cyber-startup-award/)  #Infosecurity Magazine

### 📰 7. Infosecurity Europe：拜耳重塑安全意识培训以应对AI威胁

- 拜耳公司正在彻底改革其安全意识培训计划，从传统的技术检测方法转向基于心理学的社交工程防御策略。新培训重点教授员工识别AI生成的深度伪造语音、视频和钓鱼邮件中的心理操纵手法，而非单纯的技术指标。拜耳安全团队发现，随着AI工具使攻击内容更加逼真，员工对技术检测的依赖已失效，需要培养批判性思维和情境感知能力。该案例为大型企业应对AI增强型社会工程攻击提供了创新培训范式。

> **来源**: [Infosecurity Europe: Bayer Reinvents Security Awareness Training to Counter AI Threats](https://www.infosecurity-magazine.com/news/bayer-reinvents-security-awareness/)  #Infosecurity Magazine

### 📰 8. 欧洲信息安全大会：安全厂商称AI SOC仍需SOC分析师

- 在Infosecurity Europe大会上，多家顶级网络安全厂商表示，人工智能不会取代入门级SOC分析师，只会自动化常规的工单处理和分类工作。厂商强调，AI当前更适合辅助而非替代人类分析师，尤其在复杂威胁研判和应急响应环节。这一表态回应了行业对AI导致安全岗位流失的担忧，同时指出AI可提升SOC运营效率。建议安全团队将AI定位为增强工具，而非完全替代人力，并持续培养分析师的深度分析能力。

> **来源**: [Infosecurity Europe: AI SOCs Will Still Need SOC Analysts, Security Vendors Say](https://www.infosecurity-magazine.com/news/ai-soc-still-need-analysts/)  #Infosecurity Magazine

### 📰 9. GCHQ负责人敦促行动：AI重塑网络威胁格局

- 英国政府通信总部（GCHQ）负责人发出紧急呼吁，要求企业立即采取行动应对AI和量子计算带来的网络威胁变革。他指出，AI正被攻击者用于自动化漏洞利用、生成更逼真的钓鱼邮件，并加速恶意软件变种开发。同时，量子计算未来可能破解现有加密体系，威胁数据长期安全。GCHQ建议企业立即启动后量子密码学迁移计划，并加强AI驱动的威胁检测能力。这一警告凸显了国家级安全机构对新兴技术风险的紧迫关注。

> **来源**: [GCHQ Chief Urges Action as AI Reshapes Cyber Threats](https://www.infosecurity-magazine.com/news/gchq-keast-butler-cyber-action-ai/)  #Infosecurity Magazine

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
