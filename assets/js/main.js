$(function () {
  function setCookie (name, value, options) {
    if (typeof options === 'undefined') {
      options = {}
    }
    var cookieString = name + '=' + value + '; path=/'
    if (options.days) {
      var date = new Date()
      date.setTime(date.getTime() + (options.days * 24 * 60 * 60 * 1000))
      cookieString = cookieString + '; expires=' + date.toGMTString()
    }
    if (document.location.protocol == 'https:') {
      cookieString = cookieString + '; Secure'
    }
    document.cookie = cookieString
  }

  function getCookie (name) {
    var nameEQ = name + '='
    var cookies = document.cookie.split(';')
    for (var i = 0, len = cookies.length; i < len; i++) {
      var cookie = cookies[i]
      while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1, cookie.length)
      }
      if (cookie.indexOf(nameEQ) === 0) {
        return decodeURIComponent(cookie.substring(nameEQ.length))
      }
    }
    return null
  }

  function showCookieMessage() {
    var message = document.getElementById("global-cookies-banner");

    if (message && getCookie("transformation_seen_banner") === null) {
      message.style.display = "block";
      setCookie("transformation_seen_banner", "yes", { days: 28 });
    }
  }

  function handleExpanderClick () {
    $(this)
      .toggleClass('is-expanded')
      .siblings('ul')
      .toggleClass('is-collapsed');
  }

  $('.list__expander')
    .on('click', handleExpanderClick)
    .on('keypress', function (evt) {
      if (evt.which === 13 || evt.which === 32) {
        $(this).click()
        evt.preventDefault()
      }
    });

  showCookieMessage();
})
