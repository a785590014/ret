;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shouji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M623.893307 275.673221 400.099395 275.673221c-7.902372 0-14.360983 6.414824-14.360983 14.253948l0 419.579831c0 7.837908 6.458611 14.245433 14.360983 14.245433l223.793911 0c7.903588 0 14.368281-6.407526 14.368281-14.245433L638.261588 289.927169C638.261588 282.088045 631.796895 275.673221 623.893307 275.673221zM512.766276 292.837801c10.251068 0 18.573068 8.321999 18.573068 18.573068 0 10.251068-8.321999 18.558472-18.573068 18.558472-10.251068 0-18.56577-8.307404-18.56577-18.558472C494.200506 301.1598 502.515207 292.837801 512.766276 292.837801zM611.315436 664.673779 414.214684 664.673779 414.214684 347.531654l197.100752 0L611.315436 664.673779z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-duigou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M951.478801 256.400624 428.439374 760.956072c-1.088798 1.042749-2.290159 1.890047-3.53143 2.63399l-63.317071 65.256236c-7.471159 7.786337-19.846 8.043187-27.632337 0.563842L70.458213 556.500517c-7.785314-7.471159-8.043187-19.847024-0.572028-27.632337l34.597983-36.840046c7.470135-7.785314 19.846-8.033977 27.631314-0.563842l210.391754 162.589029L890.116245 191.078897c7.80578-7.447623 20.180622-7.157004 27.631314 0.657986l34.387181 37.031405C959.580317 236.582253 959.290721 248.951979 951.478801 256.400624z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-cross" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M768.992 839.542c-15.595 0-31.187-6.237-43.677-18.72l-530.309-530.309c-24.954-24.954-24.954-62.395 0-87.343s62.395-24.954 87.343 0l530.309 530.309c24.954 24.954 24.954 62.395 0 87.343-12.485 12.485-28.081 18.72-43.677 18.72z"  ></path>' +
    '' +
    '<path d="M238.682 839.542c-15.595 0-31.187-6.237-43.677-18.72-24.954-24.954-24.954-62.395 0-87.343l530.309-530.309c24.954-24.954 62.395-24.954 87.343 0s24.954 62.395 0 87.343l-530.309 530.309c-12.485 12.485-28.081 18.72-43.677 18.72z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)