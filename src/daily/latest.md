# 今日日报
# 🤖🔒 AI+安全日报 | 2026-07-16

> 今日共收录 **10** 条，AI+安全领域重要动态速览

---

### 📰 1. 新型Windows绑定链接技术可规避EDR和安全控制

- 安全研究人员发现三种滥用Windows绑定链接（Bind Links）的新技术，该功能是合法的文件系统虚拟化能力。攻击者利用这些技术，无需利用易受攻击的驱动程序或修改受信任的二进制文件，即可绕过端点安全防护。Bitdefender研究人员警告称，这些技术可用于“致盲EDR传感器并绕过内置Windows防御机制，如AMSI和AppLocker”。攻击者通过占用安全工具处理干净文件，同时让恶意文件在无检测情况下执行，从而实现对系统的隐蔽控制。该发现对依赖EDR和Windows原生安全功能的企业构成严重威胁，建议加强管理员权限监控并部署行为分析检测。

> **来源**: [New Windows Bind Link techniques let attackers evade EDR, security controls](https://www.csoonline.com/article/4197184/new-windows-bind-link-techniques-let-attackers-evade-edr-security-controls.html)  #CSO Online

### ⚠️ 2. CVE-2026-15514 [高危 7.3]

- 美特软件 MetaCRM 至 6.4.0 Beta06 版本存在一个安全弱点，影响组件 PHPRPC 远程调用接口中文件 /customizemt/xkq/rpc.jsp 的函数 RPCService.query。攻击者通过操纵参数 phprpc_args 可实施 SQL 注入攻击，且攻击可远程发起。该漏洞的利用代码已公开，可能被用于攻击。厂商在早期被通知后未作出任何回应，建议用户采取额外防护措施。

> **来源**: [CVE-2026-15514 [HIGH 7.3]](https://nvd.nist.gov/vuln/detail/CVE-2026-15514)  CVSS 7.3 HIGH · #NVD · #漏洞

### 📰 3. 白宫启动AI驱动漏洞中心以加速网络修复

- 白宫宣布启动名为“金鹰”（Gold Eagle）的新计划，将AI应用从网络威胁检测扩展到漏洞管理领域。该计划旨在帮助政府机构和关键基础设施运营商更快地识别、优先级排序和修复软件漏洞。作为网络安全漏洞的集中交换中心，“金鹰”将协调联邦机构、开源软件社区和关键基础设施运营商之间的漏洞报告、验证和修复工作。此举标志着美国政府将AI技术系统性地应用于漏洞管理流程，以应对日益复杂的网络威胁环境。该计划有望显著缩短漏洞发现到修复的时间窗口，提升整体网络安全韧性。

> **来源**: [White House launches AI-driven vulnerability clearinghouse to speed cyber remediation](https://www.csoonline.com/article/4197348/white-house-launches-ai-driven-vulnerability-clearinghouse-to-speed-cyber-remediation.html)  #CSO Online

### 📰 4. Claude for Chrome新漏洞允许扩展滥用AI权限

- Manifold Security研究发现，Anthropic的Claude for Chrome扩展存在两个未修复漏洞，影响版本1.0.80（2024年7月7日发布）。恶意浏览器扩展可利用这些漏洞，诱使Claude代表用户执行特权操作，包括读取Gmail邮件、Google Docs内容和日历条目。研究人员在报告后8个版本更新中仍未得到修复，建议用户暂时禁用该扩展或限制其权限。

> **来源**: [New bugs in Claude for Chrome allow extensions to abuse AI privileges](https://www.csoonline.com/article/4197325/new-bugs-in-claude-for-chrome-allow-extensions-to-abuse-ai-privileges.html)  #CSO Online

### 📰 5. 网络安全需要更多预防而非依赖补救

- 行业观察指出，当前网络安全工具过度侧重检测而非预防，导致成本高昂且效果有限。早期系统因缺乏内置安全机制而依赖事后检测，但现代AI和自动化技术已能实现主动阻断。呼吁网络安全创新者和风险投资重新聚焦于预防性技术，如行为分析和自动补丁系统。预防性策略可降低平均事件响应时间，并减少数据泄露造成的财务损失。

> **来源**: [Cybersecurity needs more prevention and less reliance on cure](https://www.csoonline.com/article/4196818/cybersecurity-needs-more-prevention-and-less-reliance-on-cure.html)  #CSO Online

### ⚠️ 6. CVE-2026-15515 [高危 7]

- 腾讯电脑管家 18.1.30242.301 版本被发现存在一个安全漏洞，影响组件 QMUDisk Driver 中的库 qmudisk64.sys。该漏洞可导致不受控制的搜索路径问题，攻击者需本地访问且攻击复杂度较高，利用难度较大。该漏洞的利用代码已公开披露，可能被用于攻击。厂商在早期被通知后未回应，建议用户关注官方更新。

> **来源**: [CVE-2026-15515 [HIGH 7]](https://nvd.nist.gov/vuln/detail/CVE-2026-15515)  CVSS 7 HIGH · #NVD · #漏洞

### ⚠️ 7. CVE-2026-15506 [高危 7.8]

- SecureAge CatchPulse 至 10.9.3 版本被发现存在一个安全漏洞，影响组件 Driver 中的 saappctl.sys 库的未知函数。该漏洞可被利用导致基于堆的缓冲区溢出，攻击者需本地访问目标系统。该漏洞的利用代码已公开披露，可能被用于实际攻击。厂商已发布版本 10.10.0 修复此问题，建议用户立即升级受影响组件。

> **来源**: [CVE-2026-15506 [HIGH 7.8]](https://nvd.nist.gov/vuln/detail/CVE-2026-15506)  CVSS 7.8 HIGH · #NVD · #漏洞

### 📰 8. 忘掉模型：网络安全的关键在于“缰绳”

- 行业已开发出多种工具来引导和约束前沿大语言模型在网络安全中的应用，但攻击者也在快速跟进。所谓“缰绳”指控制模型行为的安全框架，包括输入过滤、输出审核和权限隔离。当前攻击者已开始利用模型漏洞进行提示注入和越狱攻击。安全团队应优先部署模型行为监控系统，而非仅关注模型本身的能力提升。

> **来源**: [Forget the model. When it comes to cybersecurity, it’s all about the harness](https://cyberscoop.com/ai-cybersecurity-harness-autonomous-hacking/)  #CyberScoop

### 📰 9. 微软修复创纪录的570个安全漏洞

- 微软今日发布软件更新，修复了Windows操作系统及其他软件中的至少570个安全漏洞，几乎是上月创纪录的Patch Tuesday修复数量的三倍。微软将漏洞数量激增归因于人工智能辅助发现的漏洞。此次更新覆盖范围广泛，涉及多个产品线，建议用户尽快部署补丁以降低风险。这一趋势表明AI在安全研究中的应用正显著提升漏洞发现效率。

> **来源**: [Microsoft Patches a Record 570 Security Flaws](https://krebsonsecurity.com/2026/07/microsoft-patches-a-record-570-security-flaws/)  #Krebs on Security

### 📰 10. 受损登录凭证激增成为勒索软件攻击最常见入口

- Sophos的研究发现，网络钓鱼、暴力破解攻击和其他基于身份的攻击已超过软件漏洞，成为勒索软件交付的主要手段。攻击者通过窃取或猜测登录凭证，获得初始访问权限后部署勒索软件。这一趋势表明，传统的漏洞修补策略已不足以防御勒索软件，企业需加强身份验证和访问控制。研究建议组织部署多因素认证、监控异常登录行为并定期进行安全意识培训。

> **来源**: [Compromised Logins Surge as the Most Common Entry Point for Ransomware Attacks](https://www.infosecurity-magazine.com/news/compromised-logins-ransomware-entry/)  #Infosecurity Magazine

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
