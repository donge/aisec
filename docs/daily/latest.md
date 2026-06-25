# 🤖🔒 AI+安全日报 | 2026-06-26

> 今日共收录 **10** 条，AI+安全领域重要动态速览

---

### 📰 1. 提示注入探索的有趣论文

- 该论文深入探讨了大型语言模型（LLMs）如何受到提示注入攻击的影响。研究发现，模型不仅识别角色/指令块中的标签，还学会了识别不同文本风格。结论指出，角色标签原本是一种格式化技巧，却演变成了现代LLMs的安全架构和认知框架，但这种架构并未在模型的实际表示中存活。角色混淆与提示注入直接相关，除非LLMs实现真正的角色感知，否则注入防御将是一场永无止境的“打地鼠”游戏。该研究对AI安全领域具有重要启示，强调了当前基于标签的安全机制的脆弱性。

> **来源**: [Interesting Paper Exploring Prompt Injection](https://www.schneier.com/blog/archives/2026/06/interesting-paper-exploring-prompt-injection.html)  #Schneier on Security

### 📰 2. 警惕勒索软件经纪人使用的新后门Mistic

- 研究人员发现了一个名为Mistic的新后门程序，自4月以来被用于企业入侵，疑似与向勒索软件团伙出售网络访问权限的初始访问经纪人有关。该恶意软件由Symantec发现，已部署在保险、教育、IT和专业服务等多个行业的网络中。在某些案例中，Mistic与ModeloRAT（一种用Python编写的恶意软件）一同使用，后者与威胁行为者Woodgnat（又名KongTuke）有关。建议组织加强网络监控，警惕异常活动，并定期更新安全补丁以防范此类后门。

> **来源**: [Be on the lookout for Mistic, a new backdoor used by ransomware broker](https://www.csoonline.com/article/4189132/be-on-the-lookout-for-mistic-a-new-backdoor-used-by-ransomware-broker.html)  #CSO Online

### 📰 3. 报告警告称针对欧洲的勒索软件攻击大幅增加

- Black Kite研究人员分析发现，过去一年针对欧洲的勒索软件攻击增加了超过50%，其中供应链攻击显著上升。报告指出，攻击者越来越多地利用第三方供应商作为跳板，以渗透大型组织。受影响行业包括医疗、金融和制造业，数据泄露和业务中断风险加剧。建议组织加强供应链安全评估，实施多因素认证和定期备份策略以减轻勒索软件影响。

> **来源**: [Major Increase in Ransomware Attacks Targeting Europe, Warns New Report](https://www.infosecurity-magazine.com/news/increase-ransomware-europe/)  #Infosecurity Magazine

### 📰 4. 恶意黑客利用思科零日漏洞获取通信服务商最高权限

- Mandiant在周三的博客文章中详细披露了这起事件，攻击者利用思科产品中的零日漏洞，成功获取了一家通信服务商的最高访问权限。目前尚不清楚幕后黑手是谁，也不确定他们是否能够广泛查看受害者的内部流量。该漏洞允许攻击者绕过身份验证，直接获得网络设备的完全控制权。这起事件凸显了关键基础设施提供商面临的严重威胁，建议相关企业立即审查思科设备的安全配置并关注官方补丁更新。

> **来源**: [Malicious hackers exploit Cisco zero-day for highest access level at communications service provider](https://cyberscoop.com/cisco-sd-wan-zero-day-exploit-communications-provider/)  #CyberScoop

### 📰 5. 特朗普设定后量子密码截止日期，启动联邦量子计划

- 美国总统特朗普签署了两项行政令，旨在加速联邦政府向抗量子密码（PQC）的过渡，同时扩大美国在量子技术领域的投资。其中一项行政令“保护国家免受高级密码攻击”设定了具体截止日期，另一项“引领量子创新前沿”则建立了协调战略。白宫背景文件称这些举措是为应对量子计算带来的机遇和风险。此举对全球网络安全行业具有重大意义，推动组织提前规划量子安全迁移，以防范未来量子计算机对现有加密体系的威胁。

> **来源**: [Trump sets post-quantum crypto deadlines, launches broader federal quantum initiative](https://www.csoonline.com/article/4188510/trump-sets-post-quantum-crypto-deadlines-launches-broader-federal-quantum-initiative.html)  #CSO Online

### 📰 6. 五眼联盟警告CSO需改变网络风险策略应对AI威胁

- 五眼联盟国家网络安全机构联合警告，攻击者正利用AI绕过传统防御，要求CSO重写网络风险策略。报告指出“前沿AI模型将在数月而非数年内改变攻防格局”，强调网络韧性对业务连续性的关键作用。但专家批评该建议过于笼统，缺乏具体实施指南。建议企业立即评估AI驱动的攻击场景，部署行为分析工具，并建立跨部门AI安全团队。

> **来源**: [Change your cyber risk strategy to meet AI threats, Five Eyes countries warn CSOs](https://www.csoonline.com/article/4188049/change-your-cyber-risk-strategy-to-meet-ai-threats-five-eyes-countries-warn-csos.html)  #CSO Online

### ⚠️ 7. CVE-2026-42127 [高危 7.5]

- 该漏洞存在于公共仪表盘查询端点中，由于在处理请求前未限制请求体大小，未认证的攻击者可以通过发送任意大的JSON负载触发过度的内存分配。这会导致内存耗尽，从而造成拒绝服务攻击。利用该漏洞无需有效的仪表盘访问令牌或身份验证。受影响版本尚未明确公布，但建议使用相关组件的组织立即限制请求体大小并实施访问控制。

> **来源**: [CVE-2026-42127 [HIGH 7.5]](https://nvd.nist.gov/vuln/detail/CVE-2026-42127)  CVSS 7.5 HIGH · #NVD · #漏洞

### 📰 8. 安全播客#473：黑客如何差点让整个世界杯“Rickroll”

- 安全研究员Bob DaHacker发现2026年FIFA世界杯直播控制系统的漏洞，可劫持所有比赛画面。她本可播放恶搞视频“Rickroll”影响全球观众，但最终选择报告漏洞。同时，荷兰警方通过公开100名诈骗嫌疑人模糊照片并限期自首，成功打击银行冒充诈骗。该案例凸显大型活动直播系统的安全风险，建议主办方加强访问控制和渗透测试。

> **来源**: [Smashing Security podcast #473: How a hacker could have Rickrolled the entire World Cup](https://grahamcluley.com/smashing-security-podcast-473/)  #Graham Cluley

### 📰 9. 全球网络机构发布AI供应链SBOM新指南

- G7网络安全工作组发布针对AI系统的软件物料清单（SBOM）指南，明确七项关键数据集群以提升透明度。这些集群包括训练数据来源、模型架构、依赖库版本等，旨在追踪AI供应链中的潜在风险。该指南将影响所有开发或使用AI模型的组织，尤其是金融、医疗等受监管行业。建议企业立即将SBOM纳入AI开发流程，并定期审计第三方组件。

> **来源**: [Global Cyber Agencies Issue New SBOMs for AI Guidance to Tackle AI Supply Chain Risks](https://www.infosecurity-magazine.com/news/new-sboms-for-ai-guidance-2026/)  #Infosecurity Magazine

### 📰 10. 澳大利亚网络安全中心发布ClickFix攻击警报

- 澳大利亚网络安全中心（ACSC）警告称，一场针对组织的活动正在利用ClickFix技术传播Vidar信息窃取恶意软件。ClickFix是一种社会工程攻击，通过诱使用户点击看似修复问题的链接来执行恶意代码。该活动可能通过钓鱼邮件或虚假网站传播，旨在窃取敏感信息如凭证和财务数据。ACSC建议组织加强员工安全意识培训，并部署端点检测和响应解决方案以防范此类威胁。

> **来源**: [Australian Cyber Security Centre Issues Alert Over ClickFix Attacks](https://www.infosecurity-magazine.com/news/australian-cyber-security-centre/)  #Infosecurity Magazine

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
