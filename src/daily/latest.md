# 今日日报
# 🤖🔒 AI+安全日报 | 2026-07-10

> 今日共收录 **10** 条，AI+安全领域重要动态速览

---

### 📰 1. 针对Amazon Bedrock关联AI网关的攻击揭示新型云安全风险

- 网络安全公司Darktrace发现攻击者入侵了一个作为Amazon Bedrock的LiteLLM代理的AWS EC2实例，最终部署了XMRig加密货币挖矿恶意软件。该攻击不仅涉及挖矿，还试图滥用云身份和AI服务，暴露了AI网关作为集中访问云身份、权限和基础模型的高权限系统的重大风险。Darktrace研究人员指出，尽管攻击以挖矿结束，但更大的担忧是AI网关成为攻击者利用云身份和AI服务的新入口。这一事件凸显了企业在采用AI服务时需加强网关安全配置和身份管理，以防止类似横向移动和资源滥用。

> **来源**: [Attack on Amazon Bedrock-linked AI gateway highlights new cloud security risk](https://www.csoonline.com/article/4194984/attack-on-amazon-bedrock-linked-ai-gateway-highlights-new-cloud-security-risk.html)  #CSO Online

### 📰 2. 修复数据架构比升级检测模型更重要

- 全球AI网络安全市场预计2026年达440亿美元，2034年增至2130亿美元，但安全领导者常误判AI检测工具失效的根本原因。当AI驱动检测表现不佳时，多数组织倾向于调整算法或更换供应商，而真正问题往往是底层数据架构。数据质量、集成和治理问题导致模型无法有效工作。文章建议企业优先优化数据管道和存储，而非单纯追求模型升级，以提升安全运营效率。

> **来源**: [Why fixing your data architecture matters more than upgrading your detection models](https://www.csoonline.com/article/4194544/why-fixing-your-data-architecture-matters-more-than-upgrading-your-detection-models.html)  #CSO Online

### 📰 3. 横向移动风险因企业重便利轻隔离而上升

- Zero Networks的2026年横向移动暴露报告基于312个企业环境的54万亿活动分析发现，超过80%的企业服务器可从网络内部任意位置访问，87%的服务器接受入站远程桌面协议（RDP）连接。网络隔离不足和安全控制薄弱使攻击者在初始入侵后能自由横向移动。报告强调，企业需加强网络分段和访问控制，减少对便利性的过度依赖，以遏制攻击扩散。

> **来源**: [Lateral movement risk rises as enterprises emphasize convenience over containment](https://www.csoonline.com/article/4194708/lateral-movement-risk-rises-as-enterprises-emphasize-convenience-over-containment.html)  #CSO Online

### 📰 4. GitHub公共API成为企业侦察工具

- Datadog安全研究团队发现，过去几个月存在持续性的GitHub API滥用模式，攻击者利用API映射组织及其成员信息。这些请求单独看似“不起眼”，但持续数周跨环境移动后，可能升级为完整的仓库克隆，威胁源代码、机密信息和自动化流水线。GitHub作为软件供应链的核心，为攻击者提供了源代码、机密和自动化管道三大目标。企业需监控API使用模式，实施异常检测，并限制对敏感仓库的访问权限。

> **来源**: [GitHub’s public APIs are becoming an enterprise reconnaissance tool](https://www.csoonline.com/article/4194665/githubs-public-apis-are-becoming-an-enterprise-reconnaissance-tool-2.html)  #CSO Online

### ⚠️ 5. CVE-2026-9182 [严重 9.8]

- Esri ArcGIS Server存在不受限制的文件上传漏洞，影响Windows和Linux平台上的所有12.0及更早版本，但ArcGIS Enterprise for Kubernetes不受影响。未经身份验证的攻击者可利用此漏洞上传恶意文件到受影响端点，可能导致任意文件上传，进而引发其他攻击。建议用户立即应用安全补丁，并配置Web应用防火墙以过滤恶意文件上传请求。

> **来源**: [CVE-2026-9182 [CRITICAL 9.8]](https://nvd.nist.gov/vuln/detail/CVE-2026-9182)  CVSS 9.8 CRITICAL · #NVD · #漏洞

### ⚠️ 6. CVE-2026-9181 [严重 9.8]

- Esri ArcGIS Server存在目录遍历漏洞，影响Windows和Linux平台上的所有12.0及更早版本，但ArcGIS Enterprise on Kubernetes不受影响。未经身份验证的攻击者可通过发送特制的路径参数，覆盖系统上的敏感文件，进而获得ArcGIS Server的完全管理权限，严重威胁机密性、完整性和可用性。建议用户立即升级至12.0之后的补丁版本，并实施网络分段以限制对ArcGIS Server的访问。

> **来源**: [CVE-2026-9181 [CRITICAL 9.8]](https://nvd.nist.gov/vuln/detail/CVE-2026-9181)  CVSS 9.8 CRITICAL · #NVD · #漏洞

### ⚠️ 7. CVE-2026-13753 [高危 7.5]

- HP Deskjet 2800系列打印机固件版本<=TBP1CN2612AR的嵌入式Web服务器存在授权缺失漏洞。未经身份验证的攻击者可通过网络访问，向多个管理API端点发送GET请求，从而获取明文Wi-Fi Direct凭据、设备唯一标识等敏感配置数据。该漏洞影响所有使用受影响固件版本的HP Deskjet 2800系列打印机。建议用户立即更新固件至最新版本，并限制打印机仅暴露于受信任网络。

> **来源**: [CVE-2026-13753 [HIGH 7.5]](https://nvd.nist.gov/vuln/detail/CVE-2026-13753)  CVSS 7.5 HIGH · #NVD · #漏洞

### 📰 8. Smashing Security播客第475期：JadePuffer——完全自主运行勒索软件攻击的AI

- 研究人员记录了首例完全自主的、基于代理的AI驱动勒索软件攻击“JadePuffer”，一名15岁少年通过聊天机器人协助在4小时内取消了近47,000个动漫流媒体订阅。该事件展示了AI在网络安全中的双刃剑效应，既可能被用于自动化攻击，也预示了未来威胁的演变方向。此外，Apple的“隐藏我的电子邮件”功能被发现存在隐私漏洞，尽管苹果已知情超过一年。播客强调了AI代理在攻击中的自主性对网络安全的深远影响。

> **来源**: [Smashing Security podcast #475: JadePuffer – the AI that ran a ransomware attack all by itself](https://grahamcluley.com/smashing-security-podcast-475/)  #Graham Cluley

### 📰 9. 网络犯罪分子在开源工具仓库中植入恶意AI代理

- ESET网络安全研究人员发现，开源工具仓库中可疑和恶意工具集数量大幅上升，这些工具集包含恶意AI代理，使用户面临网络攻击风险。攻击者利用开源生态的信任，植入后门或数据窃取功能。用户需谨慎验证开源工具来源，使用安全扫描工具检测恶意代码，并关注官方安全公告。

> **来源**: [Cybercriminals Plant Malicious AI Agents in Open Source Tool Repositories](https://www.infosecurity-magazine.com/news/cybercriminals-plant-ai-agents/)  #Infosecurity Magazine

### 📰 10. 活跃目录攻击中发现“氛围编码”恶意软件

- 安全公司Huntress发现，攻击者在一次Active Directory网络映射攻击中使用了“氛围编码”（vibe-coded）的PowerShell脚本。该脚本通过模拟合法管理操作来规避检测，成功枚举了域用户、组和权限。此事件表明，攻击者正利用AI辅助生成的代码来加速攻击工具的开发。建议企业加强对PowerShell活动的监控，启用脚本块日志记录，并实施基于行为的异常检测。

> **来源**: [Vibe-Coded Malware Caught in Active Directory Attack](https://www.infosecurity-magazine.com/news/vibe-coded-malware-ai-powershell/)  #Infosecurity Magazine

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
