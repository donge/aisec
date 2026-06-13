# 今日日报
# 🤖🔒 AI+安全日报 | 2026-06-14

> 今日共收录 **10** 条，AI+安全领域重要动态速览

---

### 📰 1. Oracle PeopleSoft零日漏洞助长ShinyHunters勒索浪潮

- 新披露的Oracle PeopleSoft零日漏洞被ShinyHunters勒索组织利用，主要针对大学和教育机构。该漏洞是PeopleSoft环境管理组件中的关键远程代码执行（RCE）漏洞，Oracle于2026年6月10日发布警告，但攻击早在5月27日至6月9日期间就已发生。Google Cloud威胁情报团队（GTIG）指出，攻击者利用该漏洞获取系统控制权，进而加密数据并勒索赎金。Oracle已敦促用户立即打补丁，但未确认漏洞是否被积极利用。建议教育机构优先修补PeopleSoft系统，并加强网络监控。

> **来源**: [Oracle PeopleSoft zero‑day fuels ShinyHunters extortion spree](https://www.csoonline.com/article/4184408/oracle-peoplesoft-zero%e2%80%91day-fuels-shinyhunters-extortion-spree.html)  #CSO Online

### 📰 2. CISA要求机构更智能地修补漏洞，而非更费力——预示行业更广泛实践

- 美国网络安全和基础设施安全局（CISA）敦促机构采用更智能的漏洞修补策略，而非单纯增加修补工作量。Verizon 2026年数据泄露调查报告显示，去年组织仅完全修复了26%被攻击者积极利用的漏洞，低于前一年的38%。漏洞修复的中位时间延长至43天，而攻击者的利用时间窗口已缩短至数天。CISA建议优先修补被积极利用的漏洞，并采用自动化工具和风险优先级排序，以应对攻击者利用漏洞作为初始访问向量的趋势。

> **来源**: [CISA tells agencies to patch smarter, not harder — foreshadowing broader industry practice](https://www.csoonline.com/article/4183750/cisa-tells-agencies-to-patch-smarter-not-harder-foreshadowing-broader-industry-practice.html)  #CSO Online

### 📰 3. Ivanti修复关键Sentry漏洞，可导致设备完全被接管

- Ivanti修复了Ivanti Sentry（原MobileIron Sentry）中的两个漏洞，该设备是一种安全移动网关设备。第一个漏洞CVE-2026-10523（CVSS评分9.9）允许未认证的远程攻击者绕过认证并创建任意管理员账户。第二个漏洞CVE-2026-10520是命令注入问题，可导致以root权限执行远程代码。这两个漏洞组合使用可使攻击者完全控制部署。Ivanti已发布补丁，建议用户立即更新。该漏洞影响所有未打补丁的Sentry版本，企业应优先修复。

> **来源**: [Ivanti patches critical Sentry flaws that lead to full device takeover](https://www.csoonline.com/article/4183735/ivanti-patches-critical-sentry-flaws-that-lead-to-full-device-takeover.html)  #CSO Online

### 📰 4. OpenAI推出ChatGPT账户安全控制

- OpenAI为ChatGPT引入了锁定模式和活动会话功能，以防范提示注入数据窃取攻击。锁定模式可限制ChatGPT在特定会话中的操作权限，防止恶意提示诱导模型泄露敏感信息。活动会话功能允许用户实时查看和管理所有活跃会话，增强账户可见性和控制力。这些措施旨在应对日益增长的针对AI聊天机器人的攻击，特别是通过提示注入窃取用户数据的威胁。

> **来源**: [OpenAI Unveils ChatGPT Account Security Controls](https://www.infosecurity-magazine.com/news/chatgpt-lockdown-mode-active/)  #Infosecurity Magazine

### 📰 5. Mini Shai-Hulud：关于TeamPCP npm和PyPy供应链活动的常见问题

- TeamPCP发起的Mini Shai-Hulud蠕虫已感染超过170个npm和PyPI软件包，成功绕过供应链安全验证，并入侵了OpenAI和Mistral AI的系统。该活动实现了关键安全突破：首次攻破了具有有效SLSA Build Level 3来源证明的软件包，证明流程完整性控制可被击败。该蠕虫窃取开发者和云凭证，任何安装了受感染软件包的系统都必须视为完全受损。建议组织立即审查其依赖项，并实施更严格的软件供应链安全措施。

> **来源**: [Mini Shai-Hulud: Frequently asked questions about the TeamPCP npm and PyPI supply chain campaign](https://www.tenable.com/blog/mini-shai-hulud-frequently-asked-questions)  #Tenable Blog

### 📰 6. FCC拟禁一次性手机

- 美国联邦通信委员会（FCC）提议限制一次性手机（burner phones）的销售，以打击犯罪活动中的匿名通信。此外，微软在史上最大规模“补丁星期二”中修复了AI驱动的漏洞挖掘工具发现的多个高危漏洞；ShinyHunters勒索软件团伙利用Oracle零日漏洞发动攻击。一次性手机的禁令可能影响隐私保护需求，但有助于减少网络犯罪中的匿名工具。建议企业及时应用安全补丁，并关注Oracle等关键系统的漏洞公告。

> **来源**: [The FCC Wants to Kill Burner Phones](https://www.wired.com/story/security-news-this-week-the-fcc-wants-to-kill-burner-phones/)  #Wired Security

### 📰 7. GreatXML零日漏洞声称可绕过BitLocker，但尚未证实有效

- 一名不满的研究员发布了名为GreatXML的零日漏洞，声称可通过Windows恢复环境（WinRE）绕过锁定设备上的BitLocker加密。然而，一位备受尊敬的安全专家指出，该漏洞的实际效果与描述不符，无法成功绕过加密。该漏洞似乎与Windows Defender离线扫描功能有关，但具体机制尚不明确。研究员正在寻找修复方法，但尚未发布可用的PoC。目前，该漏洞对实际系统构成的风险较低，但建议用户保持Windows更新以防范潜在威胁。

> **来源**: [GreatXML zero-day BitLocker bypass doesn’t seem to work, yet](https://www.csoonline.com/article/4184678/greatxml-zero-day-bitlocker-bypass-doesnt-seem-to-work-yet.html)  #CSO Online

### 📰 8. npm威胁格局：攻击面与缓解措施（6月2日更新）

- Unit 42分析了自Shai Hulud事件后npm供应链的演变，揭示了可蠕虫化的恶意软件、CI/CD持久化机制以及多阶段攻击等新型威胁。报告指出，攻击者通过利用npm包管理器的依赖关系，在开发环境中植入后门，并通过自动更新机制横向传播。这些攻击不仅影响单个项目，还可能通过共享的CI/CD管道感染整个组织。建议开发者启用双因素认证、审计依赖项来源，并限制npm install脚本的执行权限。

> **来源**: [The npm Threat Landscape: Attack Surface and Mitigations (Updated June 2)](https://unit42.paloaltonetworks.com/monitoring-npm-supply-chain-attacks/)  #Unit 42

### 📰 9. Infosecurity Europe：英国企业优先考虑AI威胁准备，随着网络风险演变

- 英国组织正优先投资AI驱动的网络安全，43%的企业将AI驱动的攻击列为首要风险。调查显示，这些企业正在大幅增加对高级威胁防御技术的投入，包括AI驱动的检测和响应系统。AI攻击的复杂性要求组织采用更智能的防御策略，如机器学习模型对抗和自动化威胁狩猎。专家建议企业建立跨部门AI安全团队，并定期进行红队演练以测试防御能力。

> **来源**: [Infosecurity Europe: UK Firms Prioritize AI Threat Preparedness as Cyber Risks Evolve](https://www.infosecurity-magazine.com/news/uk-firms-prioritize-ai-threat/)  #Infosecurity Magazine

### 📰 10. 下载泵送：npm供应链攻击的新型欺骗技术

- Tenable博客揭示了攻击者如何利用自动化机器人流量在npm供应链攻击中人为抬高下载计数器，从而掩盖恶意负载。攻击者首先向注册表上传大量良性版本的包，触发镜像、扫描器和分析机器人的自动下载，人为制造高下载量。这种“下载泵送”技术使恶意包看起来像合法包，诱使开发者信任并安装。建议开发者不要仅依赖下载量判断包的安全性，应审查源代码、检查依赖关系，并使用安全扫描工具。

> **来源**: [Download pumping: New npm deception technique for supply chain attacks](https://www.tenable.com/blog/how-cyberattackers-inflate-malicious-package-npm-download-counts)  #Tenable Blog

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
