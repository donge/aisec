function escapeHtml(str) {
  if (!str) return ''
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function itemToWeChat(item, i) {
  const catIcons = { news: '📰', paper: '📄', cve: '⚠️', project: '🛠️' }
  const icon = catIcons[item.type] || '📌'

  let tagHtml = ''
  const tags = []
  if (item.type === 'cve' && item.details?.severity) {
    const severityColors = { CRITICAL: '#e74c3c', HIGH: '#e67e22', MEDIUM: '#f39c12' }
    const color = severityColors[item.details.severity] || '#95a5a6'
    tags.push(
      `<span style="display:inline-block;background:${color};color:#fff;font-size:12px;padding:1px 8px;border-radius:3px;margin-right:4px;">CVSS ${item.details.score}</span>`
    )
  }
  tags.push(`<span style="color:#95a5a6;font-size:13px;">#${escapeHtml(item.source)}</span>`)
  tagHtml = tags.join(' ')

  return `
    <section style="margin-bottom: 25px; padding: 18px; background: #f8f9fa; border-radius: 8px;">
      <h3 style="font-size: 17px; font-weight: 600; margin: 0 0 10px 0; color: #2c3e50;">
        ${icon} ${i + 1}. ${escapeHtml(item.title)}
      </h3>
      <p style="font-size: 15px; line-height: 1.75; color: #444; margin: 0 0 10px 0; text-indent: 2em;">
        ${escapeHtml(item.summary || item.description.slice(0, 300))}
      </p>
      <p style="font-size: 13px; color: #95a5a6; margin: 0;">
        <a href="${escapeHtml(item.url)}" style="color: #3498db; text-decoration: none;">${escapeHtml(item.source)}</a>
        &nbsp;${tagHtml}
      </p>
    </section>`
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
    font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
    background: #fff;
    color: #333;
    padding: 0;
  }
  .container {
    max-width: 640px;
    margin: 0 auto;
    padding: 20px 16px 40px;
  }
  .header {
    text-align: center;
    padding: 24px 0 20px;
    border-bottom: 2px solid #2c3e50;
    margin-bottom: 24px;
  }
  .header h1 {
    font-size: 22px;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 6px;
  }
  .header .subtitle {
    font-size: 14px;
    color: #95a5a6;
  }
  .copy-btn {
    display: block;
    width: 100%;
    max-width: 360px;
    margin: 16px auto;
    padding: 14px 0;
    background: #2c3e50;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    transition: background 0.2s;
  }
  .copy-btn:hover { background: #34495e; }
  .copy-btn:active { background: #1a252f; }
  .copy-btn.copied { background: #27ae60; }
  .toast {
    display: none;
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #27ae60;
    color: #fff;
    padding: 12px 24px;
    border-radius: 6px;
    font-size: 14px;
    z-index: 9999;
  }
  .wechat-content {
    padding: 0 4px;
  }
  .footer {
    text-align: center;
    padding: 20px 0;
    color: #95a5a6;
    font-size: 12px;
    border-top: 1px solid #eee;
    margin-top: 20px;
  }
</style>
</head>
<body>

<div class="toast" id="toast">✅ 已复制到剪贴板，请粘贴到公众号编辑器</div>

<div class="container">
  <div class="header">
    <h1>🤖🔒 AI+安全日报</h1>
    <div class="subtitle">${dateDisplay} · 共 ${items.length} 条</div>
  </div>

  <button class="copy-btn" id="copyBtn">📋 一键复制（公众号格式）</button>

  <div class="wechat-content" id="wechatContent">
    <section style="font-size: 16px; line-height: 1.75; padding: 0 6px; color: #333;">
      ${itemHtml}

      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">

      <p style="font-size: 13px; color: #95a5a6; text-align: center;">
        📮 本日报由 AI 自动生成 · 数据来源：RSS/arXiv/NVD<br>
        仅供学习参考，不构成投资或决策建议
      </p>
    </section>
  </div>

  <button class="copy-btn" id="copyBtn2" style="margin-top: 12px;">📋 一键复制（公众号格式）</button>

  <div class="footer">
    <p>AI+安全日报 · 每日精选 10 条</p>
  </div>
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
})();
</script>
</body>
</html>`
}
