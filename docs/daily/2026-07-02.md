# 🤖🔒 AI+安全日报 | 2026-07-02

> 今日共收录 **8** 条，AI+安全领域重要动态速览

---

### 📰 1. 幻影蹲守：AI幻觉域名作为软件供应链攻击向量

- Unit 42发布分析报告，揭示一种新型攻击手法“幻影蹲守”，攻击者利用大型语言模型（LLM）的域名幻觉现象，生成并注册不存在的域名，从而劫持软件供应链。LLM在生成代码或文档时，可能虚构出看似合理但实际不存在的域名，攻击者抢先注册这些域名后，可植入恶意软件或窃取凭证。该攻击向量影响依赖AI辅助开发的企业，尤其是使用LLM自动生成代码或依赖库引用的团队。建议开发者在集成AI生成内容时，严格验证所有域名和依赖项的真实性，并部署域名监控机制。

> **来源**: [Phantom Squatting: AI-Hallucinated Domains as a Software Supply Chain Vector](https://unit42.paloaltonetworks.com/phantom-squatting-hallucinated-web-domains/)  #Unit 42

### ⚠️ 2. CVE-2026-13521 [高危 7.3]

- SourceCodester Class and Exam Timetabling System 1.0版本中的/preview5.php文件存在SQL注入漏洞，攻击者可通过操控course_year_section参数远程执行恶意SQL查询。该漏洞允许攻击者窃取数据库中的敏感信息，如用户凭证和课程数据。利用代码已公开，影响使用该系统的教育机构。建议立即升级至最新版本，或对输入参数实施严格的过滤和参数化查询。

> **来源**: [CVE-2026-13521 [HIGH 7.3]](https://nvd.nist.gov/vuln/detail/CVE-2026-13521)  CVSS 7.3 HIGH · #NVD · #漏洞

### ⚠️ 3. CVE-2026-13515 [高危 8.8]

- 腾达JD12L路由器固件版本16.03.53.23中存在栈缓冲区溢出漏洞，影响/goform/SetPptpServerCfg文件中的formSetPPTPServer函数。攻击者可通过远程操控startIp参数触发溢出，导致拒绝服务或远程代码执行。该漏洞利用代码已公开，可能被大规模利用。受影响设备为腾达JD12L用户，建议立即更新固件或禁用PPTP服务器功能，并限制管理接口的远程访问。

> **来源**: [CVE-2026-13515 [HIGH 8.8]](https://nvd.nist.gov/vuln/detail/CVE-2026-13515)  CVSS 8.8 HIGH · #NVD · #漏洞

### 📰 4. Anthropic的Fable 5和Mythos 5回归，配备新的安全护栏

- Anthropic发布了更新版AI模型Fable 5和Mythos 5，重点强化了安全防护机制。新引入的分类器能够阻止超过99%的越狱攻击，这类攻击曾试图绕过美国出口管制政策。该技术通过实时检测和拦截恶意输入，显著提升了模型对敏感指令的防御能力。此举旨在应对日益增长的AI安全威胁，特别是针对国家层面监管的规避行为。行业专家认为，这一更新为AI安全标准树立了新标杆，但建议企业仍需结合多层防护策略使用。

> **来源**: [Anthropic's Fable 5 and Mythos 5 Are Back with New Security Guardrails](https://www.infosecurity-magazine.com/news/anthropic-fable-mythos-back/)  #Infosecurity Magazine

### 📰 5. 检测工程：识别网络威胁的程序化方法

- 检测工程已从大型企业的专属实践，演变为各行业安全运营的核心能力。其核心是创建智能规则，在组织的特定技术环境中识别潜在威胁，同时减少误报。通过程序化方法，安全团队可针对网络流量、系统日志和用户行为编写定制化检测逻辑，实现自动化威胁狩猎。该领域的发展推动了SIEM和EDR工具的进化，但成功实施需结合威胁情报和持续规则优化。建议组织投资检测工程团队，建立规则生命周期管理流程。

> **来源**: [Detection engineering: A programmatic approach to identifying cyber threats](https://www.csoonline.com/article/3847510/rising-attack-exposure-threat-sophistication-spur-interest-in-detection-engineering.html)  #CSO Online

### 📰 6. CISA与合作伙伴发布OT安全零信任指南

- 美国网络安全和基础设施安全局（CISA）联合多家机构发布了一份新指南，详细说明如何将零信任安全原则应用于运营技术（OT）环境。该指南强调在保护OT系统时需平衡网络安全、操作安全性和系统可用性，避免传统IT零信任模型直接移植导致的停机风险。核心建议包括对OT网络进行微隔离、实施基于身份和上下文的访问控制，以及持续监控异常行为。该指南对能源、制造等依赖OT的行业具有重要参考价值，建议组织逐步试点零信任策略，优先保护关键资产。

> **来源**: [CISA and Partners Publish Zero Trust Guidance For OT Security](https://www.infosecurity-magazine.com/news/zero-trust-guidance-operational/)  #Infosecurity Magazine

### 📰 7. 网络风险成为全球首要“人员风险”，Marsh报告称

- Marsh发布的2026年人员风险调查显示，网络相关挑战已成为全球首要人员风险，其中网络威胁素养（cyber-threat literacy）位居风险榜首。报告还指出，网络和AI技能短缺问题日益严重，企业难以招聘和留住具备专业能力的安全人才。这一发现强调了组织需优先提升员工网络安全意识，并投资于AI驱动的安全工具以弥补人力缺口。建议企业将网络安全培训纳入员工发展计划，并建立跨部门协作机制应对技能短缺。

> **来源**: [Cyber is the Number One Global “People Risk,” Says Marsh](https://www.infosecurity-magazine.com/news/cyber-number-one-global-people/)  #Infosecurity Magazine

### 📰 8. NCSC警告：SOC中无指标优于糟糕的指标

- 英国国家网络安全中心（NCSC）警告称，使用基于工单的指标（如处理时间、工单数量）来衡量安全运营中心（SOC）效能可能导致误导性结论。NCSC指出，这类指标容易鼓励“快速关闭工单”而非真正解决问题，从而掩盖安全漏洞。建议SOC采用更注重结果的质量指标，如威胁检测准确率、响应时间对业务影响等。该指导对安全团队优化绩效评估体系具有直接参考价值，强调指标设计需与安全目标对齐。

> **来源**: [No Metrics Are Better Than Bad Metrics in the SOC, Says NCSC](https://www.infosecurity-magazine.com/news/no-metrics-better-bad-metrics-soc/)  #Infosecurity Magazine

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
