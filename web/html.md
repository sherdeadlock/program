* http://html5please.com/
* https://github.com/aFarkas/html5shiv  polyfill?


```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title></title>
  <link href="normalize.css/normalize.css" rel="stylesheet" type="text/css">
  <script src="bundle.js"></script>
</head>
<body>
</body>
</html>
```

* Page Titles: Titles. For Pages. A difficult concept, we know…
* Paragraphs: Structuring your content with paragraphs.
  * p, em, strong, br
  * abbr, blockquote, q
  * figure, figcaption
  * pre, cite, code, var, samp, kbd
  * address, dfn, bdo, ins, del
  * article, header, section, footer, aside
  * time, mark, hr
* Headings: The six levels of headings.
  * h1, h2, h3, h4, h5, and h6
* Lists: How to define ordered and unordered lists.
  * ul, ol, li
  * dl, dt, dd
* Links: How to makes links to other pages, and elsewhere.
  * a
    * tabindex
    * accesskey
  * nav
* Images: Adding something a bit more than text…
  * img
* Tables: How to use tabular data.
  * table, thead, tbody, tr, td, caption
  * thead, tfoot, tbody
  * colgroup, col
* Forms: Text boxes and other user-input thingamajigs.
  * form, textarea, datalist
  * input
    * autofocus
  * fieldset, legend
  * select, option, optgroup
* widgets
  * progress
  * audio
  * video
 * dialog
  * window.alert
  * window.prompt
  * window.confirm

template
* http://stackoverflow.com/questions/16055275/html-templates-javascript-polyfills
* https://github.com/webcomponents/webcomponentsjs/blob/master/src/Template/Template.js
* https://github.com/neovov/template-element-polyfill/blob/master/template.js

span is an inline element
div is a block element

input vs textarea

conditional comments
```html
<!--[if IE]><link href="stupidie.css" rel="stylesheet"><![endif]-->
<!--[if IE 6><![endif]-->
<!--[if IE gt 6><![endif]-->
<!--[if IE gte 6><![endif]-->
<!--[if IE lt 6><![endif]-->
<!--[if IE lte 6><![endif]-->
```

# html auto refresh
```html
<center>
<br><a href="t51sb10?Stp=R"><font class="AS21" color="blue" size="3"><u>即時資訊</u></font></a>
<meta http-equiv="refresh" content="180" url="/mops/web/ajax_t51sb10?Stp=R&amp;isToday=Y">
</center>
```

# favicon
https://github.com/audreyr/favicon-cheat-sheet

# header
* https://github.com/joshbuchea/HEAD
```html
<meta charset="UTF-8">
<meta name="description" content="Free Web tutorials">
<meta name="keywords" content="HTML,CSS,XML,JavaScript">
<meta name="author" content="Hege Refsnes">
<meta http-equiv="refresh" content="30">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
```

# js
* http://youmightnotneedjquery.com/

* document.createElement
* document.createDocument
* document.createDocumentFragment

selector
* document.querySelector
* document.querySelectorAll
* document.getElementById
* document.getElementsByClassName
* document.getElementsByName
* document.getElementsByTagName

* window.addEventListener('event', e => handle(e))
* window.removeEventListener('event', e => handle(e))

* getBoundingClientRect: {top, bottom, left, right, width, height}

```js
var el = document.getElementById('app')
el.style.color = "#FFFFFF"
el.style.background = "#FFFFFF"

el.getBoundingClientRect()
```

API                      | JS                                                 | jQuery
------------------------ | -------------------------------------------------- | -----------------
Hide                     | `el.style.display = 'none'`                        | `$(el).hide()`
Show                     | `el.style.display = ''`                            | `$(el).show()`
Fade In                  | `$fadeIn(el)`                                      | `$(el).fadeIn()`
Add Class                | `el.classList.add(className)`                      | `$(el).addClass(className)`
Remove Class             | `el.classList.remove(className)`                   | `$(el).removeClass(className)`
Has Class                | `el.classList.contains(className)`                 | `$(el).hasClass(className)`
Toggle Class             | `el.classList.toggle(className)`                   | `$(el).toggleClass(className)`
className                | `el.className`                                     | `$(el).attr('class')`
Get Attributes           | `el.getAttribute('tabindex')`                      | `$(el).attr('tabindex')`
Set Attributes           | `el.setAttribute('tabindex', 3)`                   | `$(el).attr('tabindex', 3)`
Empty HTML               | `el.innerHTML = ''`                                | `$(el).empty()`
Get HTML                 | `el.innerHTML`                                     | `$(el).html()`
Set HTML                 | `el.innerHTML = string`                            | `$(el).html(string)`
Get Outer HTML           | `el.outerHTML`                                     | `$('<div>').append($(el).clone()).html()`
Replace From HTML        | `el.outerHTML = string`                            | `$(el).replaceWith(string)`
Get Style                | `getComputedStyle(el)[ruleName]`                   | `$(el).css(ruleName)`
Set Style                | `el.style.borderWidth = '20px'`                    | `$(el).css('border-width', '20px')`
Get Text                 | `el.textContent`                                   | `$(el).text()`
Set Text                 | `el.textContent = string`                          | `$(el).text(string)`
Offset                   | `$offset(el)`                                      | `$(el).offset()`
Offset Parent            | `el.offsetParent || el`                            | `$(el).offsetParent()`
Top                      | `el.offsetTop`                                     | `$(el).offset().top`
Position                 | `{left: el.offsetLeft, top: el.offsetTop}`         | `$(el).position()`

Dimensions API           | JS                                                 | jQuery
------------------------ | -------------------------------------------------- | -----------------------------
Outer Width              | `el.offsetWidth`                                   | `$(el).outerWidth()`
Outer Height             | `el.offsetHeight`                                  | `$(el).outerHeight()`
Outer Width With Margin  | `$outerWidth(el)`                                  | `$(el).outerWidth(true)`
Outer Height With Margin | `$outerHeight(el)`                                 | `$(el).outerHeight(true)`


API                      | JS                                                 | jQuery
------------------------ | -------------------------------------------------- | -----------------------------
Insert After             | `el.insertAdjacentHTML('afterend', htmlString)`    | `$(el).after(htmlString)`
Insert Before            | `el.insertAdjacentHTML('beforebegin', htmlString)` | `$(el).before(htmlString)`
Prepend                  | `parent.insertBefore(el, parent.firstChild)`       | `$(parent).prepend(el)`
Append                   | `parent.appendChild(el)`                           | `$(parent).append(el)`
Remove                   | `el.parentNode.removeChild(el)`                    | `$(el).remove()`
Clone                    | `el.cloneNode(true)`                               | `$.contains(el, child)`
Parent                   | `el.parentNode`                                    | `$(el).parent()`
Children                 | `el.children`                                      | `$(el).children()`
Find Children            | `el.querySelectorAll(selector)`                    | `$(el).find(selector)`
Prev Sibling             | `el.previousElementSibling`                        | `$(el).prev()`
Next Sibling             | `el.nextElementSibling`                            | `$(el).next()`
Siblings                 | `$siblings(el)`                                    | `$(el).siblings()`
Contains                 | `el.querySelector(selector) !== null`              | `$(el).find(selector).length`
Each                     | `$each(selector, function(el, i) {})`              | `$(selector).each(function(i, el){ })`
Filter                   | `$filter(selector, filterFn)`                      | `$(selector).filter(filterFn)`
Matches                  | `el === otherEl`                                   | `$(el).is($(otherEl))`
Matches Selector         | `$matches(el, '.my-class')`                        | `$(el).is('.my-class')`


API                      | JS                                                 | jQuery
------------------------ | -------------------------------------------------- | -----------------------------
Ready                    | `$ready(fn)`                                       | `$(document).ready(fn)`
Evnet Off                | `el.removeEventListener(eventName, eventHandler)`  | `$(el).off(eventName, eventHandler)`
Evnet On                 | `el.addEventListener(eventName, eventHandler)`     | `$(el).on(eventName, eventHandler)`
Trigger Custom           | `$trigger(el, 'my-event', {some: 'data'})`         | `$(el).trigger('my-event', {some: 'data'})`
Trigger Native           | `$trigger(el, 'change')`                           | `$(el).trigger('change')`


API                      | JS                                                 | jQuery
------------------------ | -------------------------------------------------- | -----------------------------
Bind                     | `fn.bind(context)`                                 | `$.proxy(fn, context)`
Array Each               | `array.forEach(function(item, i){ })`              | `$.each(array, function(i, item){ })`
Array Index Of           | `array.indexOf(item)`                              | `$.inArray(item, array)`
Is Array                 | `Array.isArray(arr)`                               | `$.isArray(arr)`
map                      | `array.map(function(value, index){ })`             | `$.map(array, function(value, index){ })`
Date Now                 | `Date.now()`                                       | `$.now()`
Parse Html               | `$parseHTML(htmlString)`                           | `$.parseHTML(htmlString)`
Parse Json               | `JSON.parse(string)`                               | `$.parseJSON(string)`
To Json					 | `JSON.stringify(obj)` 							  | 
Trim  String             | `string.trim()`                                    | `$.trim(string)`
Extend                   | `Object.assign({}, objA, objB)`                    | `$.extend({}, objA, objB)`
Deep Extend              | `$deepExtend({}, objA, objB)`                      | `$.extend(true, {}, objA, objB)`


```js
function $each(selector, eachFn: (el, i) => void) {
  var elements = document.querySelectorAll(selector)
  Array.prototype.forEach.call(elements, eachFn)
}

function $filter(selector, filterFn) {
  Array.prototype.filter.call(document.querySelectorAll(selector), filterFn)
}

function $matches(el, selector) {
  return (el.matches || el.matchesSelector || el.msMatchesSelector
    || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector
  ).call(el, selector)
}

function $offset(el) {
  var rect = el.getBoundingClientRect()
  return {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
  }
}

function $outerHeight(el) {
  var height = el.offsetHeight
  var style = getComputedStyle(el)

  height += parseInt(style.marginTop) + parseInt(style.marginBottom)
  return height
}

function $outerWidth(el) {
  var width = el.offsetWidth
  var style = getComputedStyle(el)

  width += parseInt(style.marginLeft) + parseInt(style.marginRight)
  return width
}

function $siblings(el) {
  return Array.prototype.filter.call(el.parentNode.children, function(child) {
    return child !== el
  })
}

function $ready(fn) {
  if (document.readyState != 'loading'){
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

function $trigger(el, eventType, extraParameters) {
  if (extraParameters == null) {
    // For a full list of event types:
    // https://developer.mozilla.org/en-US/docs/Web/API/document.createEvent
    var event = document.createEvent('HTMLEvents')
    event.initEvent(eventType, true, false)
    el.dispatchEvent(event)
  } else {
    if (window.CustomEvent) {
      var event = new CustomEvent(eventType, {detail: extraParameters})
    } else {
      var event = document.createEvent('CustomEvent')
      event.initCustomEvent(eventType, true, true, extraParameters)
    }
    el.dispatchEvent(event)
  }
}

function $parseHTML(str) {
  var tmp = document.implementation.createHTMLDocument()
  tmp.body.innerHTML = str
  return tmp.body.children
}

function $type(obj) {
  return Object.prototype.toString.call(obj)
    .replace(/^\[object (.+)\]$/, '$1')
    .toLowerCase()
}

function $deepExtend(out) {
  out = out || {}

  for (var i = 1, l = arguments.length; i < l; i++) {
    var obj = arguments[i]

    if (!obj)
      continue

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object')
          out[key] = deepExtend(out[key], obj[key])
        else
          out[key] = obj[key]
      }
    }
  }

  return out
}

function $fadeIn(el) {
  var opacity = 0;

  el.style.opacity = 0;
  el.style.filter = '';

  var last = +new Date();
  var tick = function() {
    opacity += (new Date() - last) / 400;
    el.style.opacity = opacity;
    el.style.filter = 'alpha(opacity=' + (100 * opacity)|0 + ')';

    last = +new Date();

    if (opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}

```

# YOU MIGHT NOT NEED JAVASCRIPT
* http://youmightnotneedjs.com


# standards / specifications
- Frontend standards / specifications
  - HTTP/1.1: RFCs 7230-7235
  - [HTTP/2](https://http2.github.io/)
  - [ECMAScript3/5](http://www.ecma-international.org/publications/standards/Ecma-262.htm)
  - [W3C: DOM/BOM/XHTML/XML/JSON/JSONP/...](http://www.w3.org/TR/)
  - [CommonJS Modules](http://wiki.commonjs.org/wiki/Modules/1.0)
  * [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)
  - [HTML5](http://www.w3.org/html/wg/drafts/html/master/)
  * [CSS3](http://www.w3.org/Style/CSS/specs.en.html)
  - [Semantic Web](http://semanticweb.org/)
      - [MicroData](http://schema.org)
      - [RDFa](http://www.w3.org/TR/rdfa-core/)
  - [Web Accessibility](http://www.w3.org/WAI/)
      - [WCAG](http://www.w3.org/TR/WAI-WEBCONTENT/)
      - [Role Attribute](http://www.w3.org/TR/role-attribute/)
      - [WAI-ARIA](http://www.w3.org/TR/wai-aria/)
	* [URI](https://tools.ietf.org/html/rfc3986)
- Security
  - [CSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)
  - [XSS](http://en.wikipedia.org/wiki/Cross-site_scripting)
  - [CSP](http://www.w3.org/TR/CSP/)
  - [Same-origin policy](https://developer.mozilla.org/docs/Web/Security/Same-origin_policy)
  * [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
  - ADsafe/Caja/Sandbox
  * https://www.owasp.org/index.php/About_OWASP
  * [TLS 1.3 draft](https://tools.ietf.org/html/draft-ietf-tls-tls13-28)
- Mobile Web
  - [W3C Mobile Web Initiative](http://www.w3.org/Mobile/)
  - [W3C mobileOK Checker](http://validator.w3.org/mobile/)
  - [Open Mobile Alliance](http://openmobilealliance.org/)
* web socket
  * [The WebSocket Protocol](https://tools.ietf.org/html/rfc6455)
  * [Compression Extensions for WebSocket](https://tools.ietf.org/html/rfc7692)
* json
    * https://tools.ietf.org/html/rfc7159
    * https://tools.ietf.org/html/rfc3339
* datetime
    * https://www.w3.org/TR/NOTE-datetime

* [HTML5 Application Cache](http://www.w3schools.com/html/html5_app_cache.asp)
* [CSS](https://www.w3.org/TR/CSS/)
