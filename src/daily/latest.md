# 今日日报
# 🤖🔒 AI+安全日报 | 2026-06-13

> 今日共收录 **10** 条，AI+安全领域重要动态速览

---

### 📰 1. Oracle PeopleSoft零日漏洞助长ShinyHunters勒索活动

- 新披露的Oracle PeopleSoft零日漏洞成为ShinyHunters勒索活动的主要武器，主要针对大学和教育机构。攻击者利用PeopleSoft环境管理组件中的关键远程代码执行（RCE）漏洞（CVE-2026-XXXX，严重等级：关键），在Oracle于2026年6月10日发布警告前已发起攻击。Google Cloud威胁情报团队（GTIG）发现攻击发生在5月27日至6月9日之间。Oracle敦促客户立即打补丁，但未确认漏洞是否被积极利用。受影响版本包括PeopleSoft 9.2及更早版本，建议组织立即应用补丁并加强网络分段。

> **来源**: [Oracle PeopleSoft zero‑day fuels ShinyHunters extortion spree](https://www.csoonline.com/article/4184408/oracle-peoplesoft-zero%e2%80%91day-fuels-shinyhunters-extortion-spree.html)  #CSO Online

### 📰 2. CISA敦促机构更智能地修补漏洞，预示行业实践变革

- CISA发布新指南，要求联邦机构采用更智能的漏洞修补策略，而非单纯增加修补数量，以应对攻击者利用漏洞速度加快的现状。据Verizon 2026年数据泄露调查报告，去年组织仅修复了26%的被积极利用漏洞，较前年的38%大幅下降，而修复中位时间延长至43天，攻击者却能在数天内完成利用。CISA强调，安全团队需优先修补已知被利用的高危漏洞，并利用自动化工具和威胁情报缩短响应窗口。这一政策转变预计将推动整个行业从“全面修补”转向“风险导向修补”，减少资源浪费并提升防御效率。

> **来源**: [CISA tells agencies to patch smarter, not harder — foreshadowing broader industry practice](https://www.csoonline.com/article/4183750/cisa-tells-agencies-to-patch-smarter-not-harder-foreshadowing-broader-industry-practice.html)  #CSO Online

### 📰 3. Ivanti修复可导致设备完全沦陷的Sentry严重漏洞

- IT软件提供商Ivanti修复了Ivanti Sentry（前身为MobileIron Sentry）中的两个漏洞，该设备为安全移动网关设备。漏洞CVE-2026-10523（CVSS评分9.9）允许未认证远程攻击者绕过认证并在设备上创建任意管理员账户，由研究员Bryan Lam发现。第二个漏洞CVE-2026-10520为命令注入问题，可导致以root权限远程执行代码。这两个漏洞组合可使攻击者完全控制部署。建议所有使用Ivanti Sentry的组织立即应用补丁。

> **来源**: [Ivanti patches critical Sentry flaws that lead to full device takeover](https://www.csoonline.com/article/4183735/ivanti-patches-critical-sentry-flaws-that-lead-to-full-device-takeover.html)  #CSO Online

### 📰 4. OpenAI推出ChatGPT账户安全控制功能

- OpenAI为ChatGPT引入“锁定模式”和“活跃会话”功能，旨在防止提示注入攻击导致的数据窃取。锁定模式限制用户只能访问预设的会话，阻止恶意提示修改系统行为；活跃会话功能则允许用户查看和管理当前登录的设备，及时发现异常访问。这些措施针对日益增多的针对AI聊天机器人的攻击，攻击者通过精心设计的提示诱导模型泄露敏感信息或执行未授权操作。OpenAI建议企业用户启用这些功能，并结合多因素认证（MFA）和会话超时策略，以增强账户安全性。

> **来源**: [OpenAI Unveils ChatGPT Account Security Controls](https://www.infosecurity-magazine.com/news/chatgpt-lockdown-mode-active/)  #Infosecurity Magazine

### 📰 5. Mini Shai-Hulud：关于TeamPCP npm和PyPI供应链攻击的常见问题解答

- TeamPCP发起的“Mini Shai-Hulud”蠕虫攻击已感染超过170个npm和PyPI软件包，成功绕过SLSA Build Level 3来源证明机制，并入侵了OpenAI和Mistral AI的系统。该蠕虫通过自我复制传播，窃取开发者和云凭证，首次实现了对具有有效来源证明的软件包的破坏，证明现有流程完整性控制可被攻破。任何安装了受影响软件包的系统都必须视为完全被攻陷，需立即隔离并重置所有凭证。Tenable建议开发者立即检查依赖项，使用软件物料清单（SBOM）进行审计，并加强包管理器的安全配置。

> **来源**: [Mini Shai-Hulud: Frequently asked questions about the TeamPCP npm and PyPI supply chain campaign](https://www.tenable.com/blog/mini-shai-hulud-frequently-asked-questions)  #Tenable Blog

### 📰 6. GreatXML零日漏洞绕过BitLocker加密尚未成功

- 一名不满的研究人员发布了名为GreatXML的零日漏洞，声称可从Windows恢复环境（WinRE）绕过BitLocker加密，但经知名安全专家验证，该漏洞并未按描述生效。该漏洞与Windows Defender脱机扫描功能相关，但实际利用条件苛刻且效果有限。研究人员正在寻找修复方法。尽管当前无效，此事件仍提醒用户，BitLocker并非绝对安全，需结合TPM、PIN码和启动密钥等多重保护措施，并保持系统更新。

> **来源**: [GreatXML zero-day BitLocker bypass doesn’t seem to work, yet](https://www.csoonline.com/article/4184678/greatxml-zero-day-bitlocker-bypass-doesnt-seem-to-work-yet.html)  #CSO Online

### 📰 7. Infosecurity Europe：Proton如何利用机器学习对抗滥用其服务的网络犯罪分子

- Proton公司采用机器学习模型来检测其服务（尤其是电子邮件地址）被网络犯罪分子滥用的行为。这些模型能够分析用户行为模式，识别异常活动，如批量注册或发送恶意邮件。该技术已成功拦截多起利用Proton邮箱进行钓鱼攻击的事件。此举展示了AI在服务提供商层面主动防御中的关键作用，为其他平台提供了可借鉴的自动化检测方案。

> **来源**: [Infosecurity Europe: How Proton Fights Against Cybercriminals Using Its Services](https://www.infosecurity-magazine.com/news/how-proton-fights-against/)  #Infosecurity Magazine

### 📰 8. npm威胁态势：攻击面与缓解措施（6月2日更新）

- Unit 42分析了npm供应链在Shai Hulud攻击后的演变，揭示了可蠕虫化恶意软件、CI/CD持久化、多阶段攻击等新威胁。攻击者通过发布恶意npm包，利用依赖混淆、typosquatting和恶意脚本注入等手段，感染开发环境并横向传播。CI/CD管道中的持久化机制允许攻击者在构建过程中植入后门，影响下游用户。建议开发者使用包锁定文件、实施代码签名、定期扫描依赖项，并采用最小权限原则管理CI/CD令牌。

> **来源**: [The npm Threat Landscape: Attack Surface and Mitigations (Updated June 2)](https://unit42.paloaltonetworks.com/monitoring-npm-supply-chain-attacks/)  #Unit 42

### 📰 9. 英国企业优先应对AI威胁，43%视其为最大风险

- 在Infosecurity Europe上发布的研究显示，43%的英国组织将AI驱动的攻击列为首要网络风险，并因此大幅增加对高级威胁防御的投资。这些组织正在部署AI驱动的安全工具，如行为分析、自动化威胁响应和对抗性机器学习防御，以应对AI生成的钓鱼邮件、深度伪造和自动化攻击。研究还指出，企业同时面临内部AI使用带来的风险，如员工误用生成式AI导致数据泄露。行业建议企业制定AI安全策略，包括风险评估、员工培训和监管合规，以平衡创新与安全。

> **来源**: [Infosecurity Europe: UK Firms Prioritize AI Threat Preparedness as Cyber Risks Evolve](https://www.infosecurity-magazine.com/news/uk-firms-prioritize-ai-threat/)  #Infosecurity Magazine

### 📰 10. 下载量注水：npm新型供应链攻击欺骗技术

- 攻击者利用自动化机器人流量作为软件供应链攻击的一部分，人为抬高下载计数器并掩盖恶意负载。关键要点：下载量不等于可信度；具有大量版本和高下载量的包可能看似合法，但攻击者易操纵这些指标。攻击者通过先向注册表注入大量良性版本，触发镜像、扫描器和分析机器人的自动下载，从而人为膨胀流量。建议开发者在评估npm包时，不要仅依赖下载量，应结合代码审查、来源验证和依赖分析。

> **来源**: [Download pumping: New npm deception technique for supply chain attacks](https://www.tenable.com/blog/how-cyberattackers-inflate-malicious-package-npm-download-counts)  #Tenable Blog

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
