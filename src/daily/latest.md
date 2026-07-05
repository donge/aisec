# 今日日报
# 🤖🔒 AI+安全日报 | 2026-07-06

> 今日共收录 **10** 条，AI+安全领域重要动态速览

---

### ⚠️ 1. CVE-2024-58352 [高 7.5]

- 蓝凌OA存在一个未经身份验证的HQL注入漏洞，攻击者可通过向wechatLoginHelper.do端点的uid POST参数注入恶意HQL语法，查询任意Hibernate实体类。漏洞源于字符串拼接的过滤表达式未进行输入清理，直接传递给Hibernate的findList()调用。攻击者可利用此漏洞提取敏感数据，如管理员密码哈希，并在数据库权限足够时执行进一步操作。该漏洞影响蓝凌OA相关版本，建议升级或实施输入验证。

> **来源**: [CVE-2024-58352 [HIGH 7.5]](https://nvd.nist.gov/vuln/detail/CVE-2024-58352)  CVSS 7.5 HIGH · #NVD · #漏洞

### ⚠️ 2. CVE-2026-58455 [严重 9.8]

- Dockwatch 0.6.567及之前版本存在一个未经身份验证的操作系统命令注入漏洞。攻击者通过利用loader.php中认证重定向后缺少exit()的问题，结合ajax/compose.php中未经过滤的输入传递给shell_exec()，可以远程执行任意shell命令。攻击者可通过不完整的认证检查植入所需的会话标志，然后通过composePull操作中的composePath POST参数注入任意命令，从而完全控制主机。该漏洞影响所有Dockwatch 0.6.567版本，建议立即升级或禁用相关功能。

> **来源**: [CVE-2026-58455 [CRITICAL 9.8]](https://nvd.nist.gov/vuln/detail/CVE-2026-58455)  CVSS 9.8 CRITICAL · #NVD · #漏洞

### ⚠️ 3. CVE-2026-58465 [高 7.5]

- Eclipse Wakaama在snapshot/2026-05-26之前版本中存在一个无界内存分配漏洞，位于coap/block.c的CoAP Block1处理程序中。未经身份验证的远程攻击者可通过发送一系列块号递增的Block1 PUT请求，耗尽服务器内存。攻击者可针对UDP上的注册端点进行攻击，无需认证，导致服务器反复重新分配不断增长的累积缓冲区，每次追加块负载而不施加任何限制。该漏洞影响Eclipse Wakaama旧版本，建议升级到snapshot/2026-05-26或更高版本。

> **来源**: [CVE-2026-58465 [HIGH 7.5]](https://nvd.nist.gov/vuln/detail/CVE-2026-58465)  CVSS 7.5 HIGH · #NVD · #漏洞

### ⚠️ 4. CVE-2022-50973 [严重 9.8]

- 用友KSOA 9.0存在一个未经身份验证的任意文件上传漏洞，位于com.sksoft.bill.ImageUpload servlet中。攻击者无需任何认证即可通过POST请求提交攻击者控制的文件路径和文件名参数，且系统未对文件类型、扩展名或内容进行任何验证。攻击者可上传JSP webshell，通过指定恶意文件名和根路径，将文件存储在pictures目录下，从而完全控制服务器。该漏洞影响用友KSOA 9.0版本，建议立即应用补丁或限制访问。

> **来源**: [CVE-2022-50973 [CRITICAL 9.8]](https://nvd.nist.gov/vuln/detail/CVE-2022-50973)  CVSS 9.8 CRITICAL · #NVD · #漏洞

### 📰 5. Microsoft 365用户遭遇大规模密码喷洒攻击

- 微软用户近期遭受了一次大规模自动化密码喷洒攻击，安全公司Huntress的客户成为主要目标。攻击者在6月12日至26日期间，从单一IP地址发起了8100万次登录尝试，成功入侵至少78个账户。密码喷洒攻击通过尝试常见弱密码绕过账户锁定机制，其成功率虽低但规模庞大。Huntress警告称，实际受损账户数可能更高，建议用户启用多因素认证并监控异常登录活动。

> **来源**: [Microsoft 365 users fall victim to one-in-a-million password spray attack](https://www.csoonline.com/article/4192819/microsoft-365-users-fall-victim-to-one-in-a-million-password-spray-attack.html)  #CSO Online

### 📰 6. 恶意Chromium扩展伪装成Perplexity AI劫持浏览器搜索

- 谷歌已移除一个伪装成Perplexity AI的恶意浏览器扩展，该扩展由微软研究人员发现。该扩展通过拦截用户搜索流量，将查询路由至攻击者控制的服务器，再转发至合法搜索引擎，同时收集浏览数据。微软威胁情报分析称，其核心目标是窃取搜索数据，同时维持正常浏览体验以隐藏活动。用户应仅从官方商店安装扩展，并检查权限请求是否合理。

> **来源**: [Malicious Chromium extension spoofs Perplexity AI to hijack browser searches](https://www.csoonline.com/article/4191060/malicious-chromium-extension-spoofs-perplexity-ai-to-hijack-browser-searches.html)  #CSO Online

### 📰 7. CISO需向董事会传达的零信任OT策略：90天沟通与行动计划

- 一位管道运营商的首席专家撰文指出，自2021年Colonial管道勒索软件事件后，工业界对OT环境中零信任的讨论日益增多。文章建议CISO在90天内向董事会传达零信任的核心价值，包括通过审计请求、TSA安全指令和项目目标来量化风险。零信任在OT中需逐步实施，重点包括网络分段、持续监控和最小权限原则。该计划旨在帮助董事会理解OT安全投资对业务连续性的关键作用。

> **来源**: [What CISOs need to tell the board about zero trust in OT: A 90-day communication and action plan](https://www.csoonline.com/article/4189605/what-cisos-need-to-tell-the-board-about-zero-trust-in-ot-a-90-day-communication-and-action-plan.html)  #CSO Online

### 📰 8. 全局命名空间风险：云数据外传的通用存储桶劫持技术

- Unit 42研究揭示一种利用全局名称唯一性的存储桶劫持技术，攻击者可跨主流云服务提供商（如AWS S3、Azure Blob、GCP Cloud Storage）重定向数据流。该技术基于云存储桶名称的全局唯一性，攻击者通过注册未使用的桶名或利用DNS缓存投毒，将合法数据请求导向恶意存储桶，从而窃取上传或下载的数据。该攻击无需访问目标云账户，且可绕过传统访问控制策略。Unit 42建议企业使用随机化桶名、启用存储桶策略中的来源IP限制，并监控DNS解析异常以检测劫持行为。

> **来源**: [The Global Namespace Risk: Universal Bucket Hijacking Technique for Cloud Data Exfiltration](https://unit42.paloaltonetworks.com/cloud-bucket-hijacking-risks/)  #Unit 42

### 📰 9. 现代安全运营中心内部：72分钟竞速

- 研究显示，攻击者从初始访问到数据外传的平均时间已缩短至72分钟，迫使安全运营中心（SOC）必须加速响应。Unit 42提出通过AI驱动的自动化、威胁狩猎、托管检测与响应（MDR）以及Managed XSIAM平台来缩小速度差距。具体措施包括：利用机器学习模型实时分析日志和网络流量，自动隔离可疑端点；通过威胁情报集成预判攻击路径；以及采用XDR（扩展检测与响应）工具统一告警视图。专家强调，SOC团队需将平均检测时间（MTTD）和平均响应时间（MTTR）压缩至分钟级，否则将面临数据泄露风险。

> **来源**: [Inside the Modern SOC: The 72-Minute Race](https://unit42.paloaltonetworks.com/soc-72-minute-race/)  #Unit 42

### 📰 10. 威胁简报：PAN-OS CVE-2026-0257 遭积极利用

- Unit 42发布报告称，PAN-OS存在一个高危漏洞CVE-2026-0257，目前已被积极利用。该漏洞影响特定版本的PAN-OS防火墙操作系统，攻击者可利用其远程执行代码或提升权限。报告提供了相关的入侵指标（IoC）和缓解措施，建议用户立即应用补丁或启用临时防护规则。该漏洞的广泛利用可能对全球使用Palo Alto Networks设备的企业网络构成严重威胁。

> **来源**: [Threat Brief: Active Exploitation of PAN-OS CVE-2026-0257](https://unit42.paloaltonetworks.com/active-exploitation-of-pan-os-cve-2026-0257/)  #Unit 42

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
