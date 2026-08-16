# 今日日报
# 🤖🔒 AI+安全日报 | 2026-08-16

> 今日共收录 **10** 条，AI+安全领域重要动态速览

---

### ⚠️ 1. CVE-2026-73670 [HIGH 7.2]

A CMS contains a SQL injection vulnerability in admin/db_data.php at line 509 that allows authenticated administrators to inject arbitrary SQL into a SHOW COLUMNS FROM statement by supplying unsanitized input through the table_name GET or POST parameter. Attackers can perform table traversal, time-b

> **来源**: [CVE-2026-73670 [HIGH 7.2]](https://nvd.nist.gov/vuln/detail/CVE-2026-73670)  CVSS 7.2 HIGH · #NVD · #漏洞

### ⚠️ 2. CVE-2026-73515 [HIGH 8.1]

PostGIS before 3.7.0beta2 contains an out-of-bounds read vulnerability that allows attackers to cause memory disclosure or a server crash by supplying a malformed FlatGeobuf buffer. The FlatGeobuf property metadata decoder verifies that a string length field is present but fails to verify that the s

> **来源**: [CVE-2026-73515 [HIGH 8.1]](https://nvd.nist.gov/vuln/detail/CVE-2026-73515)  CVSS 8.1 HIGH · #NVD · #漏洞

### ⚠️ 3. CVE-2026-73514 [HIGH 8.8]

The address_standardizer extension for PostGIS through 3.7.0, fixed in commit 423570b, contains an out-of-bounds write vulnerability that allows a database user with the ability to supply caller-controlled relation names to standardize_address() to trigger memory corruption by providing a rules tabl

> **来源**: [CVE-2026-73514 [HIGH 8.8]](https://nvd.nist.gov/vuln/detail/CVE-2026-73514)  CVSS 8.8 HIGH · #NVD · #漏洞

### ⚠️ 4. CVE-2026-73533 [CRITICAL 9.8]

Ninja Tables Pro 5.2.11 contains an embedded malicious code vulnerability introduced via a tampered plugin build served through a decommissioned update server. The tampered build introduced a rogue PHP file (app/Library/updater/NinjaTableDataSync.php) that established a backdoor REST API endpoint, d

> **来源**: [CVE-2026-73533 [CRITICAL 9.8]](https://nvd.nist.gov/vuln/detail/CVE-2026-73533)  CVSS 9.8 CRITICAL · #NVD · #漏洞

### 📰 5. Fake CCleaner downloads turn Chrome into a credential-stealing surveillance tool

A convincing fake version of the widely used CCleaner utility is being used to deliver a multi-stage Windows malware that ultimately abuses Google Chrome for credential theft and surveillance. Researchers from Malwarebytes found the campaign distributing a malicious Chrome extension called GhostDesk

> **来源**: [Fake CCleaner downloads turn Chrome into a credential-stealing surveillance tool](https://www.csoonline.com/article/4208565/fake-ccleaner-downloads-turn-chrome-into-a-credential-stealing-surveillance-tool.html)  #CSO Online

### 📰 6. 17 old software bugs that took way too long to squash

In 2021, a vulnerability was revealed in a system that lay at the foundation of modern computing. An attacker could force the system to execute arbitrary code. Shockingly, the vulnerable code was almost 54 years old — and there was no patch available, and no expectation that one would be forthcoming

> **来源**: [17 old software bugs that took way too long to squash](https://www.csoonline.com/article/570815/old-software-bugs-that-took-way-too-long-to-squash.html)  #CSO Online

### 📰 7. The cybersecurity backlog is not a security problem

Cybersecurity teams should be responsible for risk oversight, rather than for executing every corrective action. Assigning security teams the tasks of finding, prioritizing, assigning, implementing, tracking and validating every remediation does not foster accountability. Instead, it results in an o

> **来源**: [The cybersecurity backlog is not a security problem](https://www.csoonline.com/article/4209334/the-cybersecurity-backlog-is-not-a-security-problem.html)  #CSO Online

### 📰 8. Trump administration opens door to private-sector cyber offensives

The Trump administration is opening the door for vetted US companies to conduct cyber operations against foreign cybercriminal organizations under federal supervision, giving the private sector a more direct role in disrupting cyber-enabled crime. A presidential memorandum issued on August 12 direct

> **来源**: [Trump administration opens door to private-sector cyber offensives](https://www.csoonline.com/article/4209169/trump-administration-opens-door-to-private-sector-cyber-offensives.html)  #CSO Online

### 📰 9. NVIDIA Group Proposes SAFE Initiative for Agentic Threat Intel Sharing

The Open Secure AI Alliance has announced plans for the Shared AI Findings Exchange (SAFE)

> **来源**: [NVIDIA Group Proposes SAFE Initiative for Agentic Threat Intel Sharing](https://www.infosecurity-magazine.com/news/safe-initiative-agentic-threat/)  #Infosecurity Magazine

### 📰 10. NCSC Publishes Guidance to Aid Incident Response and Recovery

The National Cyber Security Centre has released a detailed framework to assist with incident response and recovery

> **来源**: [NCSC Publishes Guidance to Aid Incident Response and Recovery](https://www.infosecurity-magazine.com/news/ncsc-publishes-guidance-incident/)  #Infosecurity Magazine

---

> 📮 本日报由 AI 自动生成，仅供参考。数据来源：RSS 聚合 + arXiv + NVD。
