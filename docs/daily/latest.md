# 🤖🔒 AI+安全日报 | 2026-07-28

> 今日共收录 **10** 条，AI+安全领域重要动态速览

---

### 📰 1. Certighost 漏洞困扰微软 Active Directory 证书服务

- 安全研究人员警告称，微软Active Directory证书服务（AD CS）中存在一个漏洞，允许低权限域用户冒充域控制器。该漏洞被命名为Certighost，源于证书颁发机构（CA）在目录对象解析过程中使用的一种称为“chase”的注册回退机制。攻击者可通过提供如“cdc”等请求属性，诱骗CA获取攻击者控制的身份，而非合法的域控制器。此漏洞影响范围广泛，可能导致攻击者获得域内最高权限，企业应立即审查并修补AD CS配置。

> **来源**: [Certighost haunts Microsoft Active Directory Certificate Services](https://www.csoonline.com/article/4201771/certighost-haunts-microsoft-active-directory-certificate-services.html)  #CSO Online

### 📰 2. 黑客被黑：Klue 漏洞事件与第三方网络风险的新现实

- 2026年发生的Klue安全事件颠覆了传统认知：原本只是一起软件即服务（SaaS）供应链漏洞事件，却演变为一个罕见案例——第二个犯罪团伙声称入侵了第一个勒索团伙，并窃取了已被盗的数据。该事件暴露了SaaS集成、基于身份信任机制以及第三方风险管理中的根本性弱点。它不仅仅是又一起勒索软件故事，而是揭示了攻击者自身基础设施也可能存在安全漏洞，导致“黑吃黑”的局面。这一事件警示企业，在评估第三方风险时，不仅要考虑服务提供商本身，还需考虑其可能面临的来自其他攻击者的连锁威胁。

> **来源**: [When the hackers get hacked: The Klue breach and the new reality of third-party cyber risk](https://www.csoonline.com/article/4200130/when-the-hackers-get-hacked-the-klue-breach-and-the-new-reality-of-third-party-cyber-risk.html)  #CSO Online

### ⚠️ 3. CVE-2026-66033 [高危 7.5]

- libssh2库至1.11.1版本（已在提交a2ed82d中修复）存在一个预认证整数下溢漏洞，位于src/openssl.c文件的ssh2_cipher_crypt()函数中。恶意SSH服务器可通过在握手期间协商AES-GCM密码，利用计算blocksize减去aadlen再减去认证标签长度时的表达式下溢，触发越界读取和接近SIZE_MAX长度的memcpy调用，导致任何连接客户端立即崩溃。该漏洞影响所有使用受影响版本libssh2的SSH客户端，攻击者无需认证即可远程利用，建议用户立即升级至修复版本。

> **来源**: [CVE-2026-66033 [HIGH 7.5]](https://nvd.nist.gov/vuln/detail/CVE-2026-66033)  CVSS 7.5 HIGH · #NVD · #漏洞

### ⚠️ 4. CVE-2026-65710 [高危 7.1]

- sysPass 3.2.11及之前版本存在缺失授权漏洞，允许具有PUBLICLINK_CREATE配置文件标志的认证用户触发未经授权的解密和持久存储任何保险库账户的密码。漏洞源于公开链接创建流程中缺乏AccountAcl检查，攻击者可调用saveCreateFromAccountAction端点，使AccountService::getDataForLink加载任意目标账户而不受AccountFilterUser限制。此漏洞可导致敏感凭证泄露，影响所有使用sysPass的企业，建议立即修补并限制PUBLICLINK_CREATE权限的分配。

> **来源**: [CVE-2026-65710 [HIGH 7.1]](https://nvd.nist.gov/vuln/detail/CVE-2026-65710)  CVSS 7.1 HIGH · #NVD · #漏洞

### ⚠️ 5. CVE-2026-65708 [高危 8.1]

- sysPass 3.2.11及之前版本存在不安全的直接对象引用漏洞（IDOR），允许任何经过身份验证的攻击者访问其无权访问的账户文件附件。漏洞源于AccountFileController中缺乏授权检查，攻击者可通过下载、查看、删除、上传和列出操作提供任意数字文件ID，枚举并操纵保险库中的任何附件，绕过账户级访问控制。该漏洞影响所有使用sysPass进行密码管理的组织，建议立即升级至3.2.11之后的版本，并实施严格的ACL审计。

> **来源**: [CVE-2026-65708 [HIGH 8.1]](https://nvd.nist.gov/vuln/detail/CVE-2026-65708)  CVSS 8.1 HIGH · #NVD · #漏洞

### ⚠️ 6. CVE-2026-65709 [高危 8.3]

- sysPass 至3.2.11版本存在缺失对象级授权漏洞，影响其JSON-RPC API。攻击者作为API令牌持有者可枚举账户元数据、覆盖密码并删除整个保险库中的账户，无需逐账户访问控制。具体而言，攻击者可调用AccountController方法（如viewAction、editAction、deleteAction和editPassAction），绕过AccountFilterUser检查，修改或删除超出令牌权限范围的账户。该漏洞严重等级为8.3（高危），建议用户立即升级至3.2.11以上版本，并实施严格的API权限审计。

> **来源**: [CVE-2026-65709 [HIGH 8.3]](https://nvd.nist.gov/vuln/detail/CVE-2026-65709)  CVSS 8.3 HIGH · #NVD · #漏洞

### 📰 7. 假设AI网络安全攻击是未来：43%的公司已遭遇过

- CDW最新研究显示，人工智能（AI）正在驱动新型网络钓鱼和基于恶意软件的攻击，43%的受访公司已遭遇过此类攻击。该研究强调，AI攻击正变得日益复杂，能够生成高度定制化的钓鱼邮件和绕过传统检测的恶意代码。然而，报告也指出，尽管威胁加剧，但并非所有公司都充分使用AI来防御这些攻击。行业意义在于，企业必须加速采用AI驱动的安全工具，以应对AI赋能的攻击者，否则将面临更大的安全风险。

> **来源**: [Assume AI cybersecurity attacks are the future: 43% of companies have already experienced it](https://www.zdnet.com/article/assume-ai-cybersecurity-attacks-are-the-future-43-percent-of-companies-have-already-experienced-it/)  #ZDNet Security

### 📰 8. OpenAI 未加入新的开放安全 AI 联盟

- OpenAI明显缺席了“开放安全AI联盟”（Open Secure AI Alliance）的初始支持者名单，该联盟由Nvidia发起，旨在推动基于开源平台构建强大、安全、防御性的AI网络安全工具。该联盟获得了包括Cisco、Databricks、Dell Technologies、HPE、IBM、Microsoft、Palantir、Salesforce、SAP、ServiceNow、Siemens、Snowflake和Thinking Machines等30多家主要AI制造商和用户的支持。Nvidia表示，联盟成立的驱动因素之一是近期OpenAI允许其两个最强大模型的事件。OpenAI的缺席可能反映了其在AI安全策略上的独立立场，或对开源防御工具联盟的参与意愿有限。

> **来源**: [OpenAI not part of the new Open Secure AI Alliance](https://www.csoonline.com/article/4201761/openai-not-part-of-the-new-open-secure-ai-alliance.html)  #CSO Online

### 📰 9. 勒索软件组织越来越多地部署EDR终结技术

- Halcyon最新季度勒索软件报告显示，尽管勒索软件攻击数量有所下降，但攻击者使用的混淆技术正变得越来越难以对抗。报告指出，勒索软件组织正在积极开发能够绕过或禁用端点检测与响应（EDR）系统的技术，例如通过内核级驱动程序或进程注入来终止安全代理。这种趋势意味着传统基于签名的检测方法可能失效，企业需要部署多层防御策略，包括行为分析、内存保护和不可变备份。安全团队应定期测试EDR的韧性，并准备手动响应流程以应对自动化工具失效的情况。

> **来源**: [Ransomware Groups Increasingly Deploy EDR Kill Techniques](https://www.infosecurity-magazine.com/news/ransomware-q2-2026-edr-kill/)  #Infosecurity Magazine

### 📰 10. 开源是解决恶意AI代理的答案吗？英伟达的新联盟表示肯定

- 随着AI网络安全事件激增，英伟达牵头成立了一个新联盟，主张通过开源方法应对恶意AI代理的威胁。该联盟认为，开源框架能促进透明协作，加速开发检测和防御AI滥用（如自动化攻击或数据操纵）的工具。英伟达强调，封闭系统在应对快速演变的AI威胁时反应迟缓，而开源社区可提供更灵活的补丁和共享情报。这一举措标志着行业对AI安全治理的转向，建议企业参与开源安全项目以增强防御能力。

> **来源**: [Is open source the answer to rogue AI agents? Nvidia's new alliance says yes](https://www.zdnet.com/article/is-open-source-the-answer-to-rogue-ai-security-incidents-nvidia-thinks-so/)  #ZDNet Security

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
