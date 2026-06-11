function escapeHtml(str) {
  if (!str) return ''
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function severityTag(item) {
  if (item.type !== 'cve' || !item.details?.severity) return ''
  const sev = item.details.severity
  const map = {
    CRITICAL: { label: 'CRITICAL', bg: '#dc2626', color: '#fff', border: '#ef4444' },
    HIGH: { label: 'HIGH', bg: '#ea580c', color: '#fff', border: '#f97316' },
    MEDIUM: { label: 'MEDIUM', bg: '#ca8a04', color: '#fff', border: '#eab308' },
  }
  const s = map[sev] || map.HIGH
  return `<span style="display:inline-block;font-size:11px;font-weight:700;letter-spacing:1px;padding:2px 10px;border-radius:4px;background:${s.bg};color:${s.color};border:1px solid ${s.border};margin-right:8px;">${s.label}</span>`
}

function sourceBadge(source) {
  const colors = {
    'NVD': { bg: 'rgba(239,68,68,0.15)', color: '#fca5a5' },
    'arXiv': { bg: 'rgba(167,139,250,0.15)', color: '#c4b5fd' },
    'Krebs on Security': { bg: 'rgba(56,189,248,0.15)', color: '#7dd3fc' },
    'Unit 42': { bg: 'rgba(34,211,238,0.15)', color: '#67e8f9' },
    'Infosecurity Magazine': { bg: 'rgba(52,211,153,0.15)', color: '#6ee7b7' },
  }
  const c = colors[source] || { bg: 'rgba(255,255,255,0.06)', color: '#94a3b8' }
  return `<span style="display:inline-block;font-size:12px;padding:2px 10px;border-radius:12px;background:${c.bg};color:${c.color};">${escapeHtml(source)}</span>`
}

function itemToWeChat(item, i) {
  const catIcons = { news: '📰', paper: '📄', cve: '⚠️', project: '🛠️' }
  const icon = catIcons[item.type] || '📌'

  return `
    <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px;margin-bottom:16px;transition:border-color 0.3s;">
      <div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:10px;">
        <span style="font-size:20px;flex-shrink:0;margin-top:1px;">${icon}</span>
        <div>
          <div style="display:flex;align-items:center;flex-wrap:wrap;gap:6px;margin-bottom:4px;">
            ${severityTag(item)}
            <span style="font-size:13px;color:#64748b;font-weight:500;">#${String(i + 1).padStart(2, '0')}</span>
          </div>
          <h3 style="font-size:16px;font-weight:700;color:#e2e8f0;margin:0;line-height:1.5;">
            ${escapeHtml(item.title)}
          </h3>
        </div>
      </div>
      <p style="font-size:15px;line-height:1.8;color:#94a3b8;margin:0 0 12px 32px;text-indent:2em;">
        ${escapeHtml(item.summary || item.description.slice(0, 300))}
      </p>
      <div style="display:flex;align-items:center;flex-wrap:wrap;gap:8px;margin-left:32px;">
        <a href="${escapeHtml(item.url)}" style="font-size:13px;color:#38bdf8;text-decoration:none;border-bottom:1px solid transparent;transition:border-color 0.2s;">${escapeHtml(item.englishTitle || item.title)} ↗</a>
        ${sourceBadge(item.source)}
      </div>
    </div>`
}

export function generateWeChatHtml(items, dateStr) {
  const dateDisplay = `${dateStr.slice(0, 4)}年${parseInt(dateStr.slice(5, 7))}月${parseInt(dateStr.slice(8, 10))}日`
  const itemHtml = items.map((item, i) => itemToWeChat(item, i)).join('\n')

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AI+安全日报 ${dateStr}</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
    background: #0b1120;
    color: #e2e8f0;
    min-height: 100vh;
  }
  .container {
    max-width: 640px;
    margin: 0 auto;
    padding: 0 16px 60px;
  }
  .header {
    text-align: center;
    padding: 32px 0 24px;
    position: relative;
    overflow: hidden;
  }
  .header::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 80%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(56,189,248,0.5), transparent);
  }
  .header .logo {
    font-size: 36px;
    margin-bottom: 8px;
  }
  .header h1 {
    font-size: 24px;
    font-weight: 800;
    background: linear-gradient(135deg, #38bdf8, #a78bfa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 6px;
    letter-spacing: -0.02em;
  }
  .header .subtitle {
    font-size: 14px;
    color: #64748b;
  }
  .header .subtitle span {
    display: inline-block;
    background: rgba(56,189,248,0.1);
    color: #38bdf8;
    padding: 2px 10px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 600;
    margin: 0 2px;
  }
  .copy-btn {
    display: block;
    width: 100%;
    max-width: 320px;
    margin: 20px auto;
    padding: 14px 0;
    background: linear-gradient(135deg, #38bdf8, #818cf8);
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 20px rgba(56,189,248,0.25);
    letter-spacing: 0.5px;
  }
  .copy-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 28px rgba(56,189,248,0.35);
  }
  .copy-btn:active {
    transform: translateY(0);
  }
  .copy-btn.copied {
    background: linear-gradient(135deg, #22c55e, #16a34a);
    box-shadow: 0 4px 20px rgba(34,197,94,0.25);
  }
  .toast {
    display: none;
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #22c55e;
    color: #fff;
    padding: 14px 28px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 600;
    z-index: 9999;
    box-shadow: 0 8px 32px rgba(34,197,94,0.3);
  }
  .divider {
    border: none;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
    margin: 20px 0;
  }
  .footer {
    text-align: center;
    padding: 24px 0;
    color: #475569;
    font-size: 12px;
    line-height: 1.8;
    margin-top: 8px;
  }
  .footer .mono {
    font-family: "SF Mono", "Fira Code", monospace;
    font-size: 11px;
    color: #334155;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .item-enter {
    animation: fadeIn 0.5s ease-out both;
  }
</style>
</head>
<body>

<div class="toast" id="toast">✅ 已复制到剪贴板，请粘贴到公众号编辑器</div>

<div class="container">
  <div class="header">
    <div class="logo">🛡️</div>
    <h1>AI+安全日报</h1>
    <div class="subtitle">
      ${dateDisplay} · 共 <span>${items.length}</span> 条
    </div>
  </div>

  <button class="copy-btn" id="copyBtn">📋 一键复制（公众号格式）</button>

  <div id="wechatContent">
    ${itemHtml}
  </div>

  <hr class="divider">

  <div class="footer">
    📮 本日报由 AI 自动生成 · 数据来源：RSS/arXiv/NVD<br>
    仅供学习参考，不构成投资或决策建议<br>
    <span class="mono">// AI+Security Daily · ${items.length} items · ${dateStr}</span>
  </div>

  <button class="copy-btn" id="copyBtn2" style="margin-top:4px;">📋 一键复制（公众号格式）</button>
</div>

<script>
(function() {
  function getContentHtml() {
    var el = document.getElementById('wechatContent');
    return el.innerHTML.trim();
  }
  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    return Promise.resolve();
  }
  function doCopy(btn) {
    var html = getContentHtml();
    copyToClipboard(html).then(function() {
      btn.textContent = '✅ 已复制！';
      btn.classList.add('copied');
      var toast = document.getElementById('toast');
      toast.style.display = 'block';
      setTimeout(function() {
        toast.style.display = 'none';
        btn.textContent = '📋 一键复制（公众号格式）';
        btn.classList.remove('copied');
      }, 2500);
    }).catch(function() {
      btn.textContent = '❌ 复制失败，请手动选择复制';
      setTimeout(function() {
        btn.textContent = '📋 一键复制（公众号格式）';
      }, 2000);
    });
  }
  var btns = document.querySelectorAll('.copy-btn');
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() { doCopy(this); });
  }

  // Staggered fade-in
  var cards = document.querySelectorAll('#wechatContent > div');
  cards.forEach(function(card, i) {
    card.classList.add('item-enter');
    card.style.animationDelay = (i * 0.08) + 's';
  });
})();
</script>
</body>
</html>`
}
