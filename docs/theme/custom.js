;(function () {
  // ── Animated scan line overlay ──
  var scanline = document.createElement('div')
  scanline.id = 'aisec-scanline'
  scanline.style.cssText =
    'pointer-events:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999;' +
    'background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(56,189,248,0.03) 2px,rgba(56,189,248,0.03) 4px);' +
    'opacity:0.3;'
  document.body.appendChild(scanline)

  // ── Glow cursor on headings ──
  var style = document.createElement('style')
  style.textContent =
    '@keyframes cursor-blink {' +
    '0%,100%{opacity:1}' +
    '50%{opacity:0}' +
    '}' +
    '#aisec-cursor{display:inline-block;width:2px;height:1.1em;background:var(--primary,#38bdf8);' +
    'margin-left:2px;vertical-align:text-bottom;animation:cursor-blink 1s step-end infinite}'
  document.head.appendChild(style)

  var h1 = document.querySelector('.content h1')
  if (h1 && !h1.dataset.typed) {
    h1.dataset.typed = '1'
    var text = h1.textContent
    h1.textContent = ''
    var cursor = document.createElement('span')
    cursor.id = 'aisec-cursor'
    h1.appendChild(document.createTextNode(''))
    h1.appendChild(cursor)
    var i = 0
    function type() {
      if (i < text.length) {
        h1.firstChild.textContent += text[i]
        i++
        setTimeout(type, 30 + Math.random() * 40)
      } else {
        setTimeout(function () { cursor.style.display = 'none' }, 2000)
      }
    }
    type()
  }

  // ── Dynamic glow on blockquotes on scroll ──
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.borderColor = 'rgba(56,189,248,0.5)'
          entry.target.style.background = 'rgba(255,255,255,0.06)'
          setTimeout(function () {
            entry.target.style.borderColor = ''
            entry.target.style.background = ''
          }, 1000)
        }
      })
    },
    { threshold: 0.3 }
  )
  document.querySelectorAll('.content blockquote').forEach(function (el) {
    observer.observe(el)
  })
})()
