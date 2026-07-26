# 今日日报
# 🤖🔒 AI+安全日报 | 2026-07-27

> 今日共收录 **10** 条，AI+安全领域重要动态速览

---

### ⚠️ 1. CVE-2026-65917 [高危 8.8]

- CyberPanel 1.9.1及之前版本（在提交b198460中修复）的IncBackups应用程序的增量备份处理程序（deleteBackup、fetchRestorePoints和restorePoint）中存在一个不安全的直接对象引用（IDOR）漏洞。该漏洞允许经过身份验证的面板用户通过提供攻击者控制的全局顺序IncJob整数ID（该ID从未重新限定到授权域）来访问或操纵其他租户的备份资源。攻击者可以枚举顺序备份ID来读取、修改或删除其他租户的备份数据。建议用户立即升级到包含修复的版本。

> **来源**: [CVE-2026-65917 [HIGH 8.8]](https://nvd.nist.gov/vuln/detail/CVE-2026-65917)  CVSS 8.8 HIGH · #NVD · #漏洞

### ⚠️ 2. CVE-2026-65916 [高危 8.1]

- CyberPanel 1.9.1及之前版本（在提交b198460中修复）存在一个缺失授权漏洞，位于cancelBackupCreation处理程序中。该漏洞允许经过身份验证的用户通过发送带有任意backupCancellationDomain和fileName参数的精心构造的POST请求，终止其他租户的备份进程、删除备份归档、破坏备份状态文件以及删除数据库记录。攻击者可以利用此漏洞破坏多租户环境中的数据完整性。建议用户立即升级到包含修复的版本。

> **来源**: [CVE-2026-65916 [HIGH 8.1]](https://nvd.nist.gov/vuln/detail/CVE-2026-65916)  CVSS 8.1 HIGH · #NVD · #漏洞

### 📰 3. 微软在创纪录的补丁星期二修复570个CVE漏洞

- 微软在7月补丁星期二更新中修复了创纪录的570个CVE漏洞，专家警告AI正大幅加速漏洞发现并增加补丁量。此次更新涵盖Windows、Office、Azure和Exchange等产品，其中包含多个严重等级为“关键”的远程代码执行漏洞，影响所有受支持版本。AI驱动的漏洞扫描工具使攻击者能更快识别和利用新漏洞，导致补丁周期压力增大。建议企业优先部署关键补丁，并采用自动化补丁管理系统以应对日益增长的更新频率。

> **来源**: [Microsoft Patches 570 CVEs in Record Patch Tuesday](https://www.infosecurity-magazine.com/news/microsoft-570-cves-patch-tuesday/)  #Infosecurity Magazine

### 📰 4. 德国执法机构声称“瓦解”大型钓鱼即服务组织Kratos

- 德国执法机构领导全球执法行动，查封了大型钓鱼即服务（PhaaS）组织Kratos的基础设施，并在印度尼西亚逮捕了一名未具名的Kratos“开发者和技术管理员”。该行动涉及美国、印度尼西亚等多国机构，德国方面声称Kratos基础设施“已被完全禁用”，且“Kratos支持的钓鱼活动无法再继续进行”。然而，网络安全分析师和顾问质疑此次行动对企业面临的整体钓鱼威胁能产生多大影响，因为PhaaS生态系统具有高度弹性和分散性。专家建议组织继续加强员工安全意识培训和邮件安全过滤。

> **来源**: [German law enforcement claims to have ‘dismantled’ mega phishing-as-a-service group Kratos](https://www.csoonline.com/article/4200215/german-law-enforcement-claims-to-have-dismantled-mega-phishing-as-a-service-group-kratos.html)  #CSO Online

### 📰 5. 恶意软件正针对软件开发环境中的AI工具

- CyberScoop报道称，一种新型蠕虫恶意软件正在软件开发环境中传播，专门针对开发者使用的AI辅助工具（如GitHub Copilot、Codex等）。该恶意软件伪装成日常代码提交或API调用，通过感染AI模型训练数据或代码补全建议，诱导开发者引入后门或漏洞。其行为与正常开发活动高度相似，难以被传统安全工具检测，且来源和最终目的尚未明确。安全研究人员警告，此类攻击可能通过污染AI供应链（如模型权重、训练数据集）实现大规模渗透，尤其威胁开源项目和CI/CD流水线。建议开发者对AI工具生成的代码进行人工审查，并隔离开发环境与生产网络。

> **来源**: [Malware is targeting AI tools in software development environments](https://cyberscoop.com/sandworm-mode-malware-ai-supply-chain-crowdstrike/)  #CyberScoop

### 📰 6. 英国政府更新国家风险登记册并发出网络警告

- 英国政府更新了国家风险登记册，新增对灾难性网络攻击潜在影响的警告，强调此类攻击可能瘫痪关键基础设施（如能源、医疗和交通系统）。报告指出，国家级黑客组织或勒索软件团伙可能利用AI技术发动大规模协同攻击，导致数周服务中断和经济损失数十亿英镑。该更新旨在提升公共和私营部门的应急准备意识，建议组织加强网络弹性、制定业务连续性计划并参与政府主导的演习。

> **来源**: [Government Updates UK’s National Risk Register with Cyber Warnings](https://www.infosecurity-magazine.com/news/uk-national-risk-register-cyber/)  #Infosecurity Magazine

### 📰 7. Lidl通知客户第三方数据泄露事件

- 超市巨头Lidl披露了一起供应商数据泄露事件，影响客户个人信息，包括姓名、地址和支付卡数据。攻击者通过入侵Lidl使用的第三方服务提供商系统，获取了部分客户记录，但Lidl自身系统未受影响。该公司已通知受影响的客户并建议监控账户异常活动，同时与执法部门合作调查。此事件再次警示供应链安全风险，企业应严格审查第三方安全合规性并实施数据最小化原则。

> **来源**: [Lidl Notifies Customers of Third-Party Data Breach](https://www.infosecurity-magazine.com/news/lidl-notifies-customers-of/)  #Infosecurity Magazine

### 📰 8. 新型Dolphin X窃密器利用AI画像优先锁定目标

- 安全研究人员发现一款名为Dolphin X的新型信息窃取恶意软件，其核心创新在于集成了人工智能驱动的受害者画像与排序功能。该恶意软件能够自动分析窃取到的系统信息、浏览器数据及凭证，根据潜在经济价值对受害者进行分级排序，使攻击者能优先处理高价值目标。Dolphin X的AI模块可识别企业财务系统、加密货币钱包及高权限账户等关键资产，大幅提升攻击效率。这一技术演进标志着信息窃取攻击正从“广撒网”向“精准打击”转型，对企业和个人用户的数据安全构成更严峻威胁。

> **来源**: [New Dolphin X Stealer Employs AI Profiling to Prioritize Targets](https://www.infosecurity-magazine.com/news/new-dolphin-x-stealer-ai-targets/)  #Infosecurity Magazine

### 📰 9. CISA近期GitHub泄露事件的经验教训

- 美国网络安全和基础设施安全局（CISA）发布了一份关于数据泄露事件的复盘报告：一名承包商在公共GitHub仓库中发布了数十个内部CISA凭据（包括AWS GovCloud密钥），持续近六个月后才被KrebsOnSecurity发现。泄露的凭据包括API令牌、数据库密码和云服务密钥，可能允许攻击者访问CISA的敏感系统。CISA的初始响应被批评为缓慢且缺乏透明度，例如未及时撤销所有受影响凭据、未通知受影响供应商。专家指出，该事件暴露了三大教训：一是承包商访问权限需严格限制并定期审计；二是GitHub等代码托管平台应启用凭据扫描和自动告警；三是事件响应流程必须包含第三方依赖的快速隔离。CISA已承诺加强供应链安全审查，并部署GitHub Secret Scanning工具。

> **来源**: [Lessons Learned from CISA’s Recent GitHub Leak](https://krebsonsecurity.com/2026/07/lessons-learned-from-cisas-recent-github-leak/)  #Krebs on Security

### 📰 10. Scattered Spider黑客在审判首日认罪

- 两名英国男子在伦敦法庭认罪，承认参与2024年8月导致伦敦交通局（TfL）网络瘫痪的网络攻击，该攻击导致地铁、公交和铁路系统大面积中断。两人是臭名昭著的Scattered Spider黑客组织核心成员，该组织以针对大型企业（如Uber、Rockstar Games）的社交工程和勒索攻击闻名。原定六周的审判在第一天即告终结，两人面临共谋实施计算机滥用、敲诈勒索等多项指控。TfL攻击中，黑客通过SIM交换和钓鱼获取员工凭证，进而加密关键系统并索要赎金。此案凸显了Scattered Spider的“低技术高社会工程”策略的威胁性，以及英国司法系统对关键基础设施攻击的零容忍态度。安全专家建议，交通、能源等关键基础设施企业应部署多因素认证（MFA）和SIM卡锁定机制，并定期进行社交工程演练。

> **来源**: [Scattered Spider Hackers Plead Guilty on Day 1 of Trial](https://krebsonsecurity.com/2026/06/scattered-spider-hackers-plead-guilty-on-day-1-of-trial/)  #Krebs on Security

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
