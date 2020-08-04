(function (doc, win) {
  /* eslint-disable no-undef */
  var docEl = doc.documentElement
  var resizeEvt = ('orientationchange' in window ? 'orientationchange' : 'resize')
  var recalc = function () {
    var clientWidth = docEl.clientWidth
    if (clientWidth <= 1024) {
      clientWidth = 1024
    }
    if (!clientWidth) return
    docEl.style.fontSize = 20 * (clientWidth / 1920) + 'px'
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
  /* eslint-enable no-undef */
})(document, window)
