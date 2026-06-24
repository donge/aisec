# 🤖🔒 AI+安全日报 | 2026-06-25

> 今日共收录 **10** 条，AI+安全领域重要动态速览

---

### 📰 1. 攻击者在补丁发布数周后利用Cisco Unified CM高危漏洞

- 威胁情报公司Defused于6月23日报告，Cisco Unified Communications Manager（Unified CM）中的一个高危漏洞（CVE-2026-20230，CVSS评分8.6）正被积极利用。该漏洞允许经过身份验证的攻击者通过发送特制请求获得受影响系统的root访问权限。Defused观察到攻击活动来自单一来源，使用未经验证的概念验证代码，并采用格式正确的file://文件写入载荷。Cisco已于数周前发布安全公告和补丁，但仍有大量未修补系统面临风险。建议所有使用Cisco Unified CM的组织立即应用补丁，并检查系统是否存在异常root权限活动。

> **来源**: [Attackers exploit Cisco Unified CM flaw weeks after patch release](https://www.csoonline.com/article/4188867/attackers-exploit-cisco-unified-cm-flaw-weeks-after-patch-release.html)  #CSO Online

### 📰 2. AI为组织带来多少网络风险？4.57亿个安全问题，以下是应对方法

- Tenable在30天内检测到超过7000个组织中的4.57亿个AI相关安全问题，平均每个组织有6.2万个暴露点。这些暴露主要源于影子AI（未经批准的AI工具使用），包括配置错误、数据泄露风险和权限过度授予。报告强调，AI工具（无论是批准还是未批准的）正在推动每日大量暴露，组织需要可视化、映射、评估和保护所有AI资产。建议采用全面的暴露管理计划，包括持续监控AI使用、实施最小权限原则，并建立AI安全治理框架。

> **来源**: [How much cyber risk does AI create for organizations? 457 million security issues. Here’s what you can do about it.](https://www.tenable.com/blog/how-much-cyber-risk-does-ai-create-for-organizations-457-million-security-issues-heres-what)  #Tenable Blog

### 📰 3. 广泛使用的FFmpeg编解码器漏洞可导致媒体服务器崩溃或远程代码执行

- JFrog研究人员发现FFmpeg媒体处理框架中存在一个严重漏洞（CVE-2026-8461），该漏洞是MagicYUV解码器中的堆越界写入问题。攻击者可利用此漏洞导致使用该框架的应用程序崩溃，甚至实现远程代码执行。FFmpeg被集成在Kodi、mpv等桌面播放器及Linux文件管理器缩略图生成器中。建议组织立即更新FFmpeg至修复版本，并要求供应商提供软件物料清单以管理供应链风险。

> **来源**: [Hole in widely-used FFmpeg codec could crash media servers or enable RCE](https://www.csoonline.com/article/4188531/hole-in-widely-used-ffmpeg-codec-could-crash-media-servers-or-enable-rce.html)  #CSO Online

### 📰 4. 研究人员诱骗AI浏览器泄露凭证

- LayerX安全研究人员成功诱骗包括ChatGPT Atlas和Comet在内的AI浏览器绕过其安全护栏，泄露用户凭证。攻击利用了AI浏览器的自然语言处理能力，通过精心设计的提示注入，使AI误解用户请求并输出敏感信息。这些AI浏览器旨在提供智能搜索和自动化功能，但缺乏对恶意输入的充分过滤。该发现表明，AI浏览器面临独特的攻击面，用户应避免在AI工具中输入敏感数据，开发者需加强输入验证和输出过滤。

> **来源**: [Researchers Trick AI Browsers Into Leaking Credentials](https://www.infosecurity-magazine.com/news/bioshocking-ai-browser-prompt/)  #Infosecurity Magazine

### 📰 5. macOS后门利用提示注入逃避AI分类

- SentinelLabs发现一个与朝鲜相关的macOS后门，利用提示注入技术逃避AI分类工具的检测。该后门通过伪装成合法软件传播，一旦安装，会向AI驱动的安全分析工具发送精心构造的提示，使其将恶意行为误判为正常活动。这种技术利用了AI分类器对自然语言输入的信任，从而绕过基于行为的检测。该事件凸显了AI安全工具自身的脆弱性，建议组织采用多层防御，包括行为分析和人工审查，以应对AI对抗性攻击。

> **来源**: [macOS Backdoor Uses Prompt Injection to Evade AI Triage](https://www.infosecurity-magazine.com/news/macos-gaslight-rust-backdoor/)  #Infosecurity Magazine

### 📰 6. 伊朗关联组织MuddyWater伪装成勒索软件团伙掩盖网络间谍活动

- NCC Group发布报告警告，伊朗支持的APT组织MuddyWater正通过伪装成勒索软件团伙来掩盖其网络间谍活动。该组织部署商业可用恶意软件（如Cobalt Strike）并模拟勒索软件行为，包括加密文件和留下勒索信，但其真实目的是窃取敏感数据而非勒索赎金。MuddyWater还利用虚假勒索软件部署作为掩护，在受害者网络中建立持久访问。报告建议安全团队不要仅依赖勒索软件特征进行检测，而应关注攻击者使用的TTP（战术、技术和程序）模式，特别是与伊朗关联APT组织相关的行为指标。

> **来源**: [Iran-Linked MuddyWater Poses as Ransomware Gang to Mask Cyber Espionage](https://www.infosecurity-magazine.com/news/iranlinked-muddywater-poses-as/)  #Infosecurity Magazine

### 📰 7. 卡尼曼、“寻找沃尔多”与Nexus通行证：CISO在AI时代的思维模型

- 文章指出传统安全意识培训已失效，员工被训练成在收件箱中玩“寻找沃尔多”游戏，但无法有效识别AI生成的精准钓鱼攻击。作者提出CISO应采用基于行为经济学的新思维模型，例如利用丹尼尔·卡尼曼的“系统1/系统2”理论。建议放弃依赖用户识别的防御策略，转向零信任架构和AI驱动的威胁检测。组织需重新评估安全培训预算，投资于自动化防御而非无效的用户教育。

> **来源**: [Kahneman, ‘Where’s Waldo’ and the Nexus pass: A CISO’s mental model for the AI era](https://www.csoonline.com/article/4188477/kahneman-wheres-waldo-and-the-nexus-pass-a-cisos-mental-model-for-the-ai-era.html)  #CSO Online

### 📰 8. 开源安全带来政府难以轻易解决的挑战

- 开源安全领域正面临一系列复杂挑战，包括分散的生态系统、高价值目标、企业投入不足、AI的影响以及美国政府努力的减弱。这些因素共同构成了不断变化的威胁格局。开源软件被广泛用于关键基础设施和商业应用，但其安全维护往往依赖志愿者，缺乏持续的资金和人力支持。AI的引入进一步加剧了风险，例如自动生成漏洞或利用开源组件进行供应链攻击。政府虽然尝试通过立法和框架（如美国行政令）加强开源安全，但面对全球化和分散化的开源社区，这些努力难以快速见效。

> **来源**: [Open-source security is posing challenges governments can’t easily solve](https://cyberscoop.com/open-source-software-security-crisis/)  #CyberScoop

### 📰 9. Meta因数据保护失败暂停员工监控计划

- Meta暂停了一项大规模员工数据收集计划，该计划旨在收集员工行为数据以训练AI模型。员工多次突破安全防护措施访问受限数据，即使Meta声称已修复漏洞后仍再次发生。分析师指出，鉴于收集数据的极端敏感性，Meta的数据保护措施严重不足。此事件警示企业，在实施内部监控时必须采用分层安全控制，并定期进行渗透测试。

> **来源**: [Meta pauses employee monitoring program after data protections fail](https://www.csoonline.com/article/4188623/meta-pauses-employee-monitoring-program-after-data-protections-fail.html)  #CSO Online

### 📰 10. 法院裁定SAVE数据库非法，命令拆除

- 一名联邦法官裁定，美国政府的SAVE数据库违反了《隐私法》、《社会保障法》和《行政程序法》，并命令将其拆除。SAVE数据库旨在整合移民和福利数据，但被批评为未经适当授权收集个人信息，且缺乏透明度和问责机制。该裁决对政府数据收集实践具有重大影响，可能限制未来类似大规模监控系统的部署。此案也凸显了在AI和大数据时代，隐私保护与行政效率之间的法律冲突，安全专家建议组织应审查自身数据收集合规性。

> **来源**: [Court rules SAVE database illegal, orders it dismantled](https://cyberscoop.com/court-rules-save-database-illegal-orders-dismantling/)  #CyberScoop

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
