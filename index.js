var hashchange = require('hashchange')

module.exports = function () {
  hashchange.update(focusTab)
  hashchange.update() // fire once, for url hash

  function focusTab (hash) {
    var element = document.getElementById(hash)
    if (element) {
      var isTabbable = /^(?:a|select|input|button|textarea)$/i.test(element.tagName)
      if (!isTabbable) element.tabIndex = -1
      element.focus()
    }
  }
}
