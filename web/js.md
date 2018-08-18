```
process.env.NODE_ENV !== 'production'
```
* https://github.com/dypsilon/frontend-dev-bookmarks
* https://github.com/moklick/frontend-stuff
* https://tc39.github.io/ecma262/


# tool
* [html editor](http://brackets.io/)
* [documentation](https://github.com/documentationjs/documentation)
* [jsdoc](https://github.com/jsdoc3/jsdoc)
* [rtype](https://github.com/ericelliott/rtype)
* [babel-plugin-handbook](https://github.com/thejameskyle/babel-plugin-handbook#introduction)
* http://jscs.info/ code style
* https://github.com/feross/standard
* https://github.com/ternjs/tern code analyzer
* Wappalyzer  framework detection
* https://github.com/indexzero/http-server simple http server
* https://testmysite.thinkwithgoogle.com/
* [JavaScriptCore](http://trac.webkit.org/wiki/JavaScriptCore)
* https://github.com/kripken/emscripten llvm to js
* https://github.com/estools

# dev tool
* [nodemon](https://github.com/remy/nodemon) monitor and restart the server
* [betwixt](https://github.com/kdzwinel/betwixt) analyze web traffic outside the browser

# Tutorial
* [JS The Right Way](http://jstherightway.org/zh-tw/)
* es6
	* [learn-es2015](https://babeljs.io/docs/learn-es2015/)
	* [es6-features](http://es6-features.org/)
* https://github.com/getify/You-Dont-Know-JS
* https://www.debuggex.com/cheatsheet/regex/javascript
* [MDN Learn](https://developer.mozilla.org/en-US/Learn)
* https://github.com/bolshchikov/js-must-watch
- [canvas tutorial](http://www.html5canvastutorials.com/)
* books
	* https://github.com/substack/stream-handbook
	* https://drboolean.gitbooks.io/mostly-adequate-guide/content/ fp
	* https://github.com/shichuan/javascript-patterns
* http://thibaultlaurens.github.io/javascript/2013/04/29/how-the-v8-engine-works/
* https://codeforgeek.com/2016/06/node-js-redis-tutorial-building-email-verification-system/  eamil 認證
* you don't need jquery
	* http://youmightnotneedjquery.com/
	* http://www.catswhocode.com/blog/javascript-without-jquery-tips-and-practical-examples without jquery
	* https://github.com/oneuijs/You-Dont-Need-jQuery


# FAQ
* http://stackoverflow.com/questions/17638305/why-is-bind-slower-than-a-closure

# Module
* https://gist.github.com/branneman/8048520

這是 node 提供的 module
- exports 表示其他人可以使用
- require 表示使用其他 module, 如果不是在同目錄,必須給路徑

在同一個目錄開啟兩個 file, foo.js, circle.js

circle.js
```javascript
var PI = Math.PI;

exports.area = function (r) {
  return PI * r * r;
};

circumference = function (r) {
  return 2 * PI * r;
};
```

foo.js
```javascript
var circle = require('./circle.js');
console.log( 'The area of a circle of radius 4 is ' + circle.area(4));
var x = circle.circumference(4);
console.log("x", x);
```

執行 foo.js ，會找不到 circumference function, 因為沒有 export
```
$ node foo.js
The area of a circle of radius 4 is 50.26548245743669
/private/tmp/foo.js:3
var x = circle.circumference(4);
               ^
TypeError: undefined is not a function
    at Object.<anonymous> (/private/tmp/foo.js:3:16)
    at Module._compile (module.js:460:26)
    at Object.Module._extensions..js (module.js:478:10)
    at Module.load (module.js:355:32)
    at Function.Module._load (module.js:310:12)
    at Function.Module.runMain (module.js:501:10)
    at startup (node.js:129:16)
    at node.js:814:3
```

另一種 module.exports
```js
var app = {
    x: 1;
    y: 2;
};
module.exports = app;


// other js
var app = require("app");
console.log(app.x, app.y);
```

es6 module
```js
import Immutable from 'immutable';
import { List, Map } from 'immutable';
import * as lib from 'lib';
```


# ES6
* https://nodejs.org/en/docs/es6/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla
- https://github.com/lukehoban/es6features/blob/master/README.md
- http://es6.ruanyifeng.com/


variable as object key
```js
const CALL_API = 'abc';
const obj = {
  [CALL_API]: {
  }
};
```


# this
- http://devdocs.io/javascript/operators/this


# Module
- http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html


# OOP
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript


# trick
* http://stackoverflow.com/questions/19357978/indirect-eval-call-in-strict-mode indirect call


# async
* thunk -> promise -> generator -> async/await
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
* https://strongloop.com/strongblog/how-to-generators-node-js-yield-use-cases/
* http://huli.logdown.com/posts/292655-javascript-promise-generator-async-es6
* [co](https://github.com/tj/co)
* deferred
  * http://blog.mediumequalsmessage.com/promise-deferred-objects-in-javascript-pt1-theory-and-semantics
  * http://skitazaki.appspot.com/translation/twisted-intro-ja/index.html
  * https://github.com/petkaantonov/bluebird/wiki/Promise-anti-patterns#the-deferred-anti-pattern
  * https://github.com/kriskowal/q/wiki/Coming-from-jQuery
* stream
  * http://jxck.hatenablog.com/entry/20111204/1322966453
  * http://www.slideshare.net/shigeki_ohtsu/stream2-kihon
  * http://www.slideshare.net/shigeki_ohtsu/node-v012tng12
* [thunk](https://en.wikipedia.org/wiki/Thunk)
* promise
  * https://github.com/normalize/mz
  * https://medium.com/@WendellLiu/%E5%88%A5%E9%80%99%E6%A8%A3%E4%BD%BF%E7%94%A8promise-d4f5a731adb4#.vbpdqx34w 別這樣使用Promise


# lib
* https://npms.io/
* http://component.github.io/
* http://microjs.com
* https://js.coach
* date util
	* [moment](http://momentjs.com/)
	* [fecha](https://github.com/taylorhakes/fecha)
	* [date-fns](https://github.com/date-fns/date-fns)
- [async](https://github.com/caolan/async)
  - retry
* [fbjs](https://github.com/facebook/fbjs)
- throttle
  - [node-rate-limiter](https://github.com/jhurliman/node-rate-limiter)
- [generic-pool](https://www.npmjs.com/package/generic-pool)
- [immutable](https://github.com/facebook/immutable-js/)
- [globalize](https://github.com/jquery/globalize)
- [forever](https://www.npmjs.com/package/forever)
- [deep-equal](https://github.com/substack/node-deep-equal)
* [is.js](https://github.com/arasatasaygin/is.js) 當做 snippet 參考
* [core-decorators](https://github.com/jayphelps/core-decorators.js) decorator
* [18next](http://i18next.com/)
* [laverna](https://github.com/Laverna/laverna) open source alternative to Evernote
* https://github.com/ether/etherpad-lite  real-time collaborative document editing
* * https://github.com/mozilla/togetherjs  collaborate
* [jquery-minicolors](http://labs.abeautifulsite.net/jquery-minicolors/)
* [dropzone](https://github.com/enyo/dropzone) DND
* [dragula](https://github.com/bevacqua/dragula) DND
* [emojify.js](http://hassankhan.me/emojify.js/)
* https://github.com/twitter/twemoji  twitter emoji
* [highlightjs](https://highlightjs.org/)
* [chosen](https://github.com/harvesthq/chosen) select
* [slick](https://github.com/kenwheeler/slick) 左右滑動
* [fullPage.js](https://github.com/alvarotrigo/fullPage.js)
* [pdf.js](https://github.com/mozilla/pdf.js) reader
* [intro.js](https://github.com/usablica/intro.js) new feature introduction
* [sweetalert](https://github.com/t4t5/sweetalert)
* [typeahead.js](https://github.com/twitter/typeahead.js) autocomplete
* [fastclick](https://github.com/ftlabs/fastclick) remove click delays on browsers with touch UIs
* [clipboard.js](https://github.com/zenorocha/clipboard.js)
* [PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe) image gallery for mobile and desktop
* [nprogress](https://github.com/rstacruz/nprogress) 在最上方的 progress bar
* [masonry](https://github.com/desandro/masonry) grid layout
* [pace](https://github.com/HubSpot/pace) Automatically add a progress bar to your site
* [history.js](https://github.com/browserstate/history.js)
* [Swiper](https://github.com/nolimits4web/Swiper) Most modern mobile touch slider with hardware accelerated transitions
* https://github.com/peachananr/onepage-scroll Apple-like one page scroller website
* https://github.com/selectize/selectize.js
* https://github.com/fgnass/spin.js ~1.9K
* https://github.com/dimsemenov/Magnific-Popup
* https://github.com/WickyNilliams/headroom.js Hide your header until you need it
* https://github.com/NUKnightLab/TimelineJS
* https://github.com/Selz/plyr HTML5, YouTube and Vimeo player
* https://github.com/js-cookie/js-cookie cookies
* https://github.com/cubiq/iscroll Smooth scrolling
* https://github.com/yaronn/blessed-contrib terminal dashboards
* https://github.com/Marak/faker.js fake data
* https://github.com/imakewebthings/waypoints trigger a function when you scroll to an element
* https://github.com/RubaXa/Sortable dnd sort
* http://mojs.io/  motion graphics
* https://github.com/metafizzy/isotope layout
* https://github.com/janpaepke/ScrollMagic scroll interactions
* https://github.com/guillaumepotier/Parsley.js form validation
* https://github.com/HubSpot/offline indication
* https://github.com/ccampbell/mousetrap  keyboard shortcuts
* https://github.com/ejci/favico.js favicon with badges, images or videos
* https://github.com/jessepollak/card  credit card form
* https://github.com/mailcheck/mailcheck  form email
* https://github.com/MrRio/jsPDF  pdf
* https://github.com/davatron5000/FitText.js  font-sizes flexible
* https://github.com/fronteed/icheck  checkbox jquery
* https://github.com/briangonzalez/jquery.adaptive-backgrounds.js
* https://github.com/chriso/validator.js
* https://github.com/zeroclipboard/zeroclipboard
* https://github.com/fullcalendar/fullcalendar  calendar
* https://github.com/thebird/Swipe  touch slider
* https://github.com/Mango/slideout  side bar
* https://github.com/HubSpot/tether  design
* https://github.com/dropbox/zxcvbn  密碼強度偵測
* https://github.com/desandro/imagesloaded
* https://github.com/taye/interact.js  dnd
* https://github.com/HubSpot/vex  dialog
* https://github.com/madrobby/keymaster keyboard shortcuts
* https://github.com/CodeSeven/toastr  notification
* https://github.com/goldfire/howler.js  audio
* https://github.com/PixelsCommander/ViralJS  p2p CDN
* https://www.npmjs.com/package/google-protobuf
* https://github.com/HubSpot/odometer  Smoothly transitions numbers with ease
* https://github.com/jakiestfu/Snap.js/  sidenav
* https://github.com/mathjax/MathJax Beautiful math in all browsers

geomap
* [Leaflet](https://github.com/Leaflet/Leaflet) map


date picker
* [datetimepicker](https://github.com/xdan/datetimepicker)
* https://github.com/eternicode/bootstrap-datepicker
* https://github.com/airbnb/react-dates  react
* https://github.com/amsul/pickadate.js  jQuery date & time input picker
* https://github.com/dangrossman/bootstrap-daterangepicker  datepicker

local storage
* https://github.com/pouchdb/pouchdb
* https://github.com/localForage/localForage local storage
* https://github.com/google/lovefield


cache
* https://github.com/groupon/node-cached
* [lru-memoize](https://github.com/erikras/lru-memoize)


# wordpress
* [wpcomjs](http://wpcomjs.com/) wordpress api
* [wp-calypso](https://github.com/Automattic/wp-calypso)


# image
* [node-canvas](https://github.com/Automattic/node-canvas)
  * Cairo
* [lwip](https://github.com/EyalAr/lwip)
  * [CImg](https://github.com/dtschump/CImg)
- [smartcrop](https://github.com/jwagner/smartcrop.js/) 人臉偵測
  1. 用 laplace 偵測邊緣
  2. 偵測膚色區塊
  3. 偵測高彩度區塊
  4. 以 sliding window 產生多個候選裁切框
  5. 以一個 importance function 評選裁切框
* https://github.com/nowelium/node-bitmap
* https://github.com/cloudinary/responsive_breakpoints_generator
* http://grafijs.org/
* https://github.com/vvo/gifify gif
* https://github.com/scottjehl/picturefill A responsive image polyfill for <picture>, srcset, sizes
* https://github.com/uber/image-diff

# format number
- [numeral](https://github.com/adamwdraper/Numeral-js) Format and manipulate numbers.
- [formatjs](http://formatjs.io/) Internationalize your web apps on the client & server.
* [accounting.js](https://github.com/openexchangerates/accounting.js) number, money and currency formatting


# network
* [request](https://github.com/request/request)
  * [request-promise](https://github.com/request/request-promise)
  * [node-certifi](https://github.com/certifi/node-certifi)
- [socketio](http://socket.io/)
- [http-proxy](https://github.com/nodejitsu/node-http-proxy)
* https://github.com/mscdex/httpolyglot
- [boom](https://www.npmjs.com/package/boom) HTTP-friendly error objects
- [falcor](https://github.com/Netflix/falcor) efficient data fetching
* [axios](https://github.com/mzabriskie/axios)  angularjs api like
* [superagent](https://github.com/visionmedia/superagent)


# viz
* http://blog.infographics.tw/
* https://github.com/mrdoob/three.js
* https://github.com/sebmarkbage/art/
* https://github.com/andreaferretti/paths-js generate chart
* http://www.sce.carleton.ca/faculty/chinneck/po.html
* http://www.chartjs.org/
* [victory](https://github.com/FormidableLabs/victory) react+d3+svg
  * https://github.com/FormidableLabs/victory-chart-native  RN
    * [react-native-svg](https://github.com/magicismight/react-native-svg)
* https://vega.github.io/vega/
* http://www.flotcharts.org/ jquery
* https://github.com/ecomfe/echarts baidu
* https://github.com/kirjs/react-highcharts
* https://github.com/gionkunz/chartist-js 10k SVG
* https://github.com/DmitryBaranovskiy/raphael
* http://paperjs.org/ Vector Graphics Scripting
* https://github.com/VincentGarreau/particles.js  creating particles
* https://github.com/jacomyal/sigma.js
* https://github.com/kangax/fabric.js svg to canvas
* https://github.com/mozilla/metrics-graphics  chart
* https://github.com/sbstjn/timesheet.js  甘特圖
* https://github.com/shutterstock/rickshaw
* https://github.com/square/crossfilter  Multi-Dimensional charting
* https://github.com/dc-js/dc.js  Multi-Dimensional charting
* https://github.com/flot/flot  chart
* https://github.com/plotly/plotly.js  chart
* https://github.com/Netflix/vizceral  WebGL component for displaying animated traffic graphs
* https://developer.oculus.com/blog/introducing-the-react-vr-pre-release/ VR
* http://js.cytoscape.org/ Graph theory / network library for analysis and visualisation
* http://philogb.github.io/
* http://aperturejs.com/
* https://github.com/nicolaskruchten/pivottable pivot table
* https://javascript.daypilot.org/scheduler/
* [morris.js](http://morrisjs.github.io/morris.js/index.html) line,area,bar,donut


# test
- [jest](http://facebook.github.io/jest/)
  - http://stackoverflow.com/questions/29730415/how-to-use-jest-with-react-native
- [jasmine](https://github.com/jasmine/jasmine)
- [mocha](http://mochajs.org/)
- [mocha-jsdom](https://github.com/rstacruz/mocha-jsdom)
- [karma](http://karma-runner.github.io/)
- [supertest](https://github.com/visionmedia/supertest) HTTP assertions
- [nock](https://github.com/pgte/nock) HTTP mocking
* [Vorlonjs](https://github.com/MicrosoftDX/Vorlonjs)
* [chai](http://chaijs.com/)
* [istanbul](https://www.npmjs.com/package/istanbul) code coverage
* https://github.com/marmelab/gremlins.js monkey test
* https://github.com/casperjs/casperjs
* https://github.com/nightwatchjs/nightwatch


# barcode

* https://github.com/lindell/JsBarcode
* https://github.com/LazarSoft/jsqrcode
* https://github.com/EddieLa/JOB
* https://github.com/serratus/quaggaJS


# game
- [cocos2d-js](https://github.com/cocos2d/cocos2d-js)
- [unity](http://unity3d.com/)
* http://www.createjs.com/
* https://github.com/photonstorm/phaser 2d
* https://github.com/pixijs/pixi.js 2d
* https://github.com/NetEase/pomelo  server
* https://github.com/mozilla/BrowserQuest multiplayer game experiment
* https://github.com/liabru/matter-js  a 2D rigid body physics engine
* https://github.com/FormidableLabs/react-game-kit


# fix header
- https://github.com/meetselva/fixed-table-rows-cols
- http://jsfiddle.net/GnN66/2/
- https://github.com/jmosbech/StickyTableHeaders
- https://github.com/Mottie/tablesorter


# finance
* [node-talib](https://github.com/oransel/node-talib)
* [node-yahoo-finance](https://github.com/pilwon/node-yahoo-finance)
* [bitcore-lib](https://github.com/bitpay/bitcore-lib)
js ta lib
* https://github.com/csupnig/ta-lib
* https://github.com/data-forge/data-forge-js
* https://github.com/anandanand84/technicalindicators
* https://github.com/mihaifm/linq


# parser
* https://github.com/chjj/marked markdown
* https://github.com/loadfive/Knwl.js   dates, times, phone numbers, emails, places


# std
## Object.assign(target, ...sources)

## base64

* btoa('hello world')  // aGVsbG8gd29ybGQ=
* atob('aGVsbG8gd29ybGQ=')  // hello world

# async
- https://github.com/caolan/async
- waterfall(tasks, [callback])
- retry([opts = {times: 5, interval: 0}| 5], task, [callback])


# request

## api:
- request(options, (error, response) => void)
- [options](https://github.com/request/request#requestoptions-callback)


# fetch
* The arrayBuffer() method, when invoked, must return the result of running consume body with ArrayBuffer.
* The blob() method, when invoked, must return the result of running consume body with Blob.
* The formData() method, when invoked, must return the result of running consume body with FormData.
* The json() method, when invoked, must return the result of running consume body with JSON.
* The text() method, when invoked, must return the result of running consume body with text.


# network interface
```js
var os = require("os");
var ifs = os.networkInterfaces();
var ppps = Object.keys(ifs).filter(x => x.startsWith("ppp")).map(name => ifs[name]).reduce((a, b) => a.concat(b));
```

# polyfill
* import 'babel-polyfill';
  * https://cdnjs.com/libraries/babel-polyfill  98 KB
* [core-js](https://github.com/zloirock/core-js)
* [webshim](http://afarkas.github.io/webshim/demos/)
* [promise](https://www.npmjs.com/package/promise)
* [Respond](https://github.com/scottjehl/Respond) min/max-width CSS3 Media Queries (for IE 6-8, and more)
* https://github.com/facebook/regenerator  `function*`

```js
new webpack.ProvidePlugin({
  'Promise': 'es6-promise',// 改用  core-js
  'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
})
```

* template
  * http://stackoverflow.com/questions/16055275/html-templates-javascript-polyfills
  * https://github.com/webcomponents/webcomponentsjs/blob/master/src/Template/Template.js
  * https://github.com/neovov/template-element-polyfill/blob/master/template.js


# browser
* https://github.com/marcuswestin/store.js localStorage
* https://github.com/Modernizr/Modernizr detects HTML5 and CSS3 features


# deploy
* https://www.distelli.com/docs/tutorials/build-and-deploy-nodejs-to-digitalocean
* https://codequs.com/p/r1GDakMK/deploying-a-node-js-app-to-digitalocean-server/


# web
scroll
* window.pageYOffset

event
* preventDefault
* stopImmediatePropagation


# scroller

* http://github.com/zynga/scroller
* new Scroller(callback: (left=0, top=0, zoom=1) => void, options)
  * scrollingX=true
    Enable scrolling on x-axis
  * scrollingY=true
    Enable scrolling on y-axis
  * animating=true
    Enable animations for deceleration, snap back, zooming and scrolling
  * animationDuration=250
    duration for animations triggered by scrollTo/zoomTo
  * bouncing=true
    Enable bouncing (content can be slowly moved outside and jumps back after releasing)
  * locking=true
    Enable locking to the main axis if user moves only slightly on one of them at start
  * paging=false
    Enable pagination mode (switching between full page content panes)
    可視畫面
  * snapping=false
    Enable snapping of content to a configured pixel grid
    最小單位
  * zooming=false
    Enable zooming of content via API, fingers and mouse wheel
  * minZoom=0.5
    Minimum zoom level
  * maxZoom=3
    Maximum zoom level
  * speedMultiplier=1
    Multiply or decrease scrolling speed
  * scrollingComplete=NOOP
    Callback that is fired on the later of touch end or deceleration end,
    provided that another scrolling action has not begun. Used to know
    when to fade out a scrollbar.
  * penetrationDeceleration=0.03
    This configures the amount of change applied to deceleration when reaching boundaries
  * penetrationAcceleration=0.08
    This configures the amount of change applied to acceleration when reaching boundaries

* setDimensions(clientWidth, clientHeight, contentWidth, contentHeight)
  Setup scroll object dimensions.

* setPosition(clientLeft, clientTop)
  Setup scroll object position (in relation to the document). Required for
  zooming to event position (mousewheel, touchmove).

* setSnapSize(width, height)
  Setup snap dimensions (only needed when snapping is enabled)

* activatePullToRefresh(height, activate, deactivate, start)
  Setup pull-to-refresh. Height of the info region plus three callbacks
  which are executed on the different stages.

* finishPullToRefresh()
  Stop pull-to-refresh session. Called inside the logic started
  by start callback for activatePullToRefresh call.

* getValues(): { left, top, zoom }
  Get current scroll positions and zooming.

* zoomTo(level, animate=false, originLeft=center, originTop=center)
  Zoom to a specific level. Origin defines the pixel position
  where zooming should centering to. Defaults to center of scrollerObj.

* zoomBy(factor, animate=false, originLeft=center, originTop=center)
  Zoom by a given amount. Same as zoomTo but by a relative value.

* scrollTo(left, top, animate=false)
  Scroll to a specific position.

* scrollBy(leftOffset, topOffset, animate=false)
  Scroll by the given amount.


* doMouseZoom(wheelDelta, timeStamp, pageX, pageY)
  * doMouseZoom(e.wheelDelta, e.timeStamp, e.pageX, e.pageY)

* doTouchStart(touches, timeStamp)

* doTouchMove(touches, timeStamp, scale)
  * touch event: doTouchMove(e.touches, e.timeStamp)
  * mouse event: doTouchMove([e], e.timeStamp)

* doTouchEnd(timeStamp)


# 跨平台
跨 browser, node, AMD ...
* `typeof window !== "undefined"` browser
* `typeof global !== "undefined"` node

```js
(function defineMustache (global, factory) {
  if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
    factory(exports); // CommonJS
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], factory); // AMD
  } else {
    global.Mustache = {};
    factory(global.Mustache); // script, wsh, asp
  }
}(this, function mustacheFactory (mustache) {
}));
```


When a function is invoked with new in front of it, otherwise known as a constructor call, the following things are done automatically:

* a brand new object is created (aka, constructed) out of thin air
* the newly constructed object is [[Prototype]]-linked
* the newly constructed object is set as the this binding for that function call
* unless the function returns its own alternate object, the new-invoked function call will automatically return the newly constructed object.

Steps 1, 3, and 4 apply to our current discussion. We'll skip over step 2 for now and come back to it in Chapter 5.


Object.setPrototypeOf(Buffer, Uint8Array);



# IoT internet of things
* [johnny-five](https://github.com/rwaldron/johnny-five)
* [cylonjs](http://cylonjs.com/) Next generation robotics framework with support
* http://embeddednodejs.com/
* https://tessel.io/
* computer numeric control (CNC) machin


# natural language
* https://github.com/nlp-compromise/nlp_compromise
* https://github.com/NaturalNode/natural


# bot
* https://github.com/colestrode/skellington
* https://github.com/octalmage/robotjs  desktop automation


# no semicolon

expect
```js
// careful: will break
a = b + c
(d + e).print()
```
actual
```js
a = b + c(d + e).print();
```


# ORM
* http://knexjs.org/
* http://bookshelfjs.org/
* http://docs.sequelizejs.com/en/latest/
* https://github.com/balderdashy/waterline


# monitor
* Keymetrics – by PM2.
* Trace – by RisingStack


# reCAPTCHA
* https://codequs.com/p/HJMkD9-t/creat-a-google-recaptcha-with-node-js/

# OCR
* https://github.com/naptha/tesseract.js


# URL

* npm:qs
* encodeURIComponent()
* decodeURIComponent()
* https://gist.github.com/jlong/2428561

```
var parser = document.createElement('a');
parser.href = "http://nil:lin@example.com:3000/pathname/?search=test#hash";

parser.protocol; // => "http:"
parser.hostname; // => "example.com"
parser.port;     // => "3000"
parser.pathname; // => "/pathname/"
parser.search;   // => "?search=test"
parser.hash;     // => "#hash"
parser.host;     // => "example.com:3000"
parser.username; // => "nil"
parser.password; // => "lin"
```

IE 不支援 `URL`

```
new URL('https://gist.github.com/jlong/2428561?foo=bar#test') =>
    {
        hash: "#test",
        search: "?foo=bar",
        pathname: "/jlong/2428561",
        port: "",
        hostname: "gist.github.com",
        host: "gist.github.com",
        password: "",
        username: "",
        protocol: "https:",
        origin: "https://gist.github.com",
        href: "https://gist.github.com/jlong/2428561?foo=bar#test"
    }
```

url param parsing
```js
var params = {},
	regex = /([^&=]+)=([^&]*)/g,
	m;

while ((m = regex.exec(hash)) !== null) {
	params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
}
```

