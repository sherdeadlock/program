# css
* 定期會更新的外站資源 https://www.facebook.com/notes/front-end-developers-taiwan/%E5%AE%9A%E6%9C%9F%E6%9C%83%E6%9B%B4%E6%96%B0%E7%9A%84%E5%A4%96%E7%AB%99%E8%B3%87%E6%BA%90/894905667213466?hc_location=ufi
* Elika J. Etemad ( W3C CSSWG specwriter ) CSS 心法
	* http://fantasai.inkedblade.net/style/talks/best-practices/#title
* http://blog.xdite.net/posts/2012/01/29/css-tricks-summary CSS 基礎技巧懶人包
* https://github.com/AllThingsSmitty/css-protips
* [HTML Dog](http://www.htmldog.com/)
* [How to center in CSS](http://howtocenterincss.com/  )
* [You Dont Need Javascript](https://github.com/NamPNQ/You-Dont-Need-Javascript)
* [The Sass Way](http://thesassway.com/)
* [reset css](http://meyerweb.com/eric/tools/css/reset/)
* [normalize.css](https://necolas.github.io/normalize.css/)
* [modernizr](https://github.com/modernizr/modernizr)
* [CSS Game](http://flukeout.github.io/)
* [photon](https://developer.wordpress.com/docs/photon/) cdn


# reference

* [css-tricks](https://css-tricks.com/)
* http://cssreference.io/  reference with example


# convention

* [bem](http://getbem.com/)


# examples

* [impress.js](https://github.com/impress/impress.js) presentation, 炫
* [reveal.js](https://github.com/hakimel/reveal.js) presentation, 可以動作宣傳用, 實用
* [html5up](http://html5up.net/)
* http://thenextweb.com/dd/2015/07/24/6-design-trends-taking-over-the-web/
* 18 css example http://adon988.logdown.com/posts/291649-using-css-to-create-a-small-soldier-did-you-see-it
* 滾動視差 parallax scrolling
* https://codyhouse.co/gem/animated-transition-effects/?utm_source=designernews
* http://hci.macroviz.com/demo/css3D/menu.html 3d menu
* http://bttn.surge.sh buttons


# build tool

* [uncss](https://github.com/giakki/uncss) Remove unused styles from CSS


# framework

* [bootstrap](http://getbootstrap.com/)
	* http://startbootstrap.com/
	* https://bootswatch.com/
	* http://bootsnipp.com/
	* https://gist.github.com/anthonyholmes/b397e8a95ce2aca71f8e  sass mixin cheatsheet
	* material design
	* http://rosskevin.github.io/bootstrap-material-design/
		* https://github.com/FezVrasta/bootstrap-material-design
		* http://demos.creative-tim.com/material-kit-pro/presentation.html
	* https://github.com/mdbootstrap/bootstrap-material-design material design for bootstrap
	* https://github.com/almasaeed2010/AdminLTE
	* https://github.com/keen/dashboards
	* https://github.com/puikinsh/gentelella Admin Template
	* https://www.bootstrapzero.com/
	* https://wrapbootstrap.com
* [material](https://material.io/)
    * [mdl](https://getmdl.io/)
    * [mdc](https://github.com/material-components/material-components-web)
* [ratchet](http://goratchet.com/) mobile
* [Flat-UI](http://designmodo.github.io/Flat-UI)
* [pure](http://purecss.io/)
* [Skeleton](http://getskeleton.com/) light ~2014
* [primer](https://github.com/primer/primer)
* [picnic](https://github.com/picnicss/picnic)
* [topcoat](http://topcoat.io/)
* [materialize](http://materializecss.com/)
* [weui](https://github.com/weui/weui)
* [bulma](http://bulma.io/) flexbox
* [uikit](http://getuikit.com/)
* https://github.com/joshuaclayton/blueprint-css
* [photon](http://photonkit.com/)


# basic

```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.1.1/normalize.min.css" rel="stylesheet" type="text/css">
```
width
height
max-width
min-width
margin
padding
border
border-width
border-radius
background
color
opacity
list-style
outline
box-shadow
cursor
vertical-align
overflow
filter
user-select


# text

* font
* letter-spacing 字體間距
	The letter-spacing and word-spacing properties are for spacing between
	letters or words. The value can be a length or normal.
* line-height
	The line-height property sets the height of the lines in an element, such as a paragraph, without adjusting the size of the font. It can be a number (which specifies a multiple of the font size, so “2” will be two times the font size, for example), a length, a percentage, or normal.
	文字一行的高度
* text-align
	The text-align property will align the text inside an element to left, right, center, or justify.
* text-indent
	The text-indent property will indent the first line of a paragraph, for example, to a given length or percentage. This is a style traditionally used in print, but rarely in digital media such as the web.
* text-shadow
* text-transform
* text-decoration
* white-space


# shorthand

Set with shorthand, tweak with longhand.
```css
margin: 1px;              /* top: 1px, right: 1px, bottom: 1px, left: 1px */
margin: 1px 2px;          /* top: 1px, right: 2px, bottom: 2px, left: 1px */
margin: 1px 2px 3px;      /* top: 1px, right: 2px, bottom: 3px, left: 1px */
margin: 1px 2px 3px 4px;  /* top: 1px, right: 2px, bottom: 3px, left: 4px */
```
border: width style color;
border: 1px solid black;
border-width: 1px 2px 3px 4px;

# units

* http://devdocs.io/css-values-units/
* http://pxtoem.com/
* px  pixel
* em  font-size of the element
* rem  font-size of the root element
* vh  1/100th of the height of the viewport.
* vw  1/100th of the width of the viewport.
* vmin  1/100th of the minimum value of the height and the width of the viewport.
* vmax  1/100th of the maximum value of the height and the width of the viewport.

# display

* none 不顯示
* inline
  boxes that are displayed inline follow the flow of a line.
* block
  makes a box standalone, fitting the entire width of its containing box,
  with an effective line break before and after it.
* inline-block
    * box 照著 inline 方式排列，但有 width height
    * will keep a box inline but lend the greater formatting flexibility of block boxes.
    * https://blog.mozilla.org/webdev/2009/02/20/cross-browser-inline-block/ ie6,ie7
* flex
* inline-flex
* table

# !important
* https://css-tricks.com/when-using-important-is-the-right-choice/

# box
* http://devdocs.io/css-basic-box-model/
box-sizing
* http://devdocs.io/css/box-sizing border-box
* https://css-tricks.com/box-sizing/

# position
* http://www.barelyfitz.com/screencast/html-training/css/positioning/
* A static element is said to be not positioned

# float / clear
* clearfix http://stackoverflow.com/questions/211383/which-method-of-clearfix-is-best
* http://stackoverflow.com/questions/26306864/firefox-float-bug-how-do-i-get-my-floatright-on-the-same-line
* http://css.maxdesign.com.au/floatutorial/

# layout
* display(none, block, inline), box-sizing, position, float/clear, inline-block, flex
* http://devdocs.io/css/layout_mode
* http://learnlayout.com/

# flex
* http://devdocs.io/css-flexible-box-layout/
* [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* https://github.com/facebook/css-layout
* https://github.com/cjcenizal/flexbox-patterns Build awesome user interfaces with CSS flexbox.
* [flexbugs](https://github.com/philipwalton/flexbugs)
* http://codepen.io/enxaneta/full/adLPwv/ codepen example
* https://philipwalton.github.io/solved-by-flexbox/
* [grd](https://github.com/1000ch/grd) grid  512 bytes (Gzipped)
* http://tympanus.net/codrops/css_reference/flexbox/ blog
* https://www.smashingmagazine.com/2016/02/the-flexbox-reading-list/
* http://webkit-flex.atomeye.com/
* http://flexbox.io/#/
* Playing With Flexbox and Quantity Queries https://www.aaron-gustafson.com/notebook/playing-with-flexbox-and-quantity-queries/
* fill page with flex http://stackoverflow.com/questions/34965787/ipad-safari-css-fill-page-with-flex
* Normalizing Cross-browser Flexbox Bugs http://philipwalton.com/articles/normalizing-cross-browser-flexbox-bugs/
* Flexbox Based Responsive Equal Height Blocks With JavaScript Fallback http://osvaldas.info/flexbox-based-responsive-equal-height-blocks-with-javascript-fallback
* 正常shrink http://stackoverflow.com/questions/31349304/why-image-inside-flexbox-doesnt-shrink
* http://flexboxfroggy.com/  game

flex: 0 0 230px; which means:
* 0 = don't grow (shorthand for flex-grow)
* 0 = don't shrink (shorthand for flex-shrink)
* 230px = start at 230px (shorthand for flex-basis)

## container
* flex-direction row, row-reverse, column, column-reverse
* flex-wrap nowrap, wrap, wrap-reverse
* align-items flex-start, flex-end, center, baseline, stretch
* justify-content flex-start, flex-end, space-between, center, space-around
* align-content flex-start, flex-end, center, space-between, space-around, stretch
## item
* align-sefl auto, flex-start, flex-end, center, baseline, stretch
* flex-grow
* flex-shrink
* flex-basis
* flex
* order

先以mobile排版，再用min-width 排 tablet, desktop


Supported Attributes
--------------------

Name | Value
----:|------
width, height | positive number
minWidth, minHeight | positive number
maxWidth, maxHeight | positive number
left, right, top, bottom | number
margin, marginLeft, marginRight, marginTop, marginBottom | number
padding, paddingLeft, paddingRight, paddingTop, paddingBottom | positive number
borderWidth, borderLeftWidth, borderRightWidth, borderTopWidth, borderBottomWidth | positive number
flexDirection | 'column', 'row'
justifyContent | 'flex-start', 'center', 'flex-end', 'space-between', 'space-around'
alignItems, alignSelf | 'flex-start', 'center', 'flex-end', 'stretch'
flex | positive number
flexWrap | 'wrap', 'nowrap'
position | 'relative', 'absolute'


# Transforms
* http://devdocs.io/css/css_transforms


# transition
* http://robertpenner.com/easing/
* http://devdocs.io/css/css_transitions
* Easing functions cheatsheet http://easings.net/
* ease - specifies a transition effect with a slow start, then fast, then end slowly (this is default)
* linear - specifies a transition effect with the same speed from start to end
* ease-in - specifies a transition effect with a slow start
* ease-out - specifies a transition effect with a slow end
* ease-in-out - specifies a transition effect with a slow start and end
* cubic-bezier(n,n,n,n) - lets you define your own values in a cubic-bezier function


# animation
* [using_css_animations](http://devdocs.io/css/css_animations/using_css_animations)
* [animate.css](https://github.com/daneden/animate.css)
* [move.js](https://github.com/visionmedia/move.js)
* [aos](https://github.com/michalsnik/aos) Animate on scroll library
* @keyframes
* https://github.com/IanLunn/Hover hover effects
* [Effeckt.css](https://github.com/h5bp/Effeckt.css)
* [hint.css](https://github.com/chinchang/hint.css)
* [SpinKit](https://github.com/tobiasahlin/SpinKit) loader
* [loaders.css](https://github.com/ConnorAtherton/loaders.css)


# orientation
* Portrait 直式
* Landscape 橫式


# media queries
* http://devdocs.io/css/media_queries/using_media_queries
* http://mediaqueri.es/
* Desktop HD: 1200px
* Desktop: 1000px
* Tablet: 750px
* Phablet: 550px
* Mobile: 400px
* mql = window.matchMedia(mediaQueryString)

# image

* https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/
* https://www.sitepoint.com/how-to-build-responsive-images-with-srcset/
* https://jmperezperez.com/medium-image-progressive-loading-placeholder/

# mobile
* momentum scrolling
  * -webkit-overflow-scrolling: touch;

# css sprites
* node https://github.com/sprity/sprity
* python https://github.com/jorgebastida/glue  功能多
* java & php http://csssprites.org/
* ruby
  * compass http://compass-style.org/reference/compass/helpers/sprites/
  * https://github.com/jakesgordon/sprite-factory


# gradients
* http://devdocs.io/css/css_images/using_css_gradients
* linear-gradient


# css-modules
* [css-modules](https://github.com/css-modules/css-modules)
  - http://glenmaddern.com/articles/css-modules
  - https://github.com/gajus/react-css-modules
  - http://amobiz.github.io/2016/04/22/modular-css-notes/
  - http://andrewhfarmer.com/css-modules-by-example/
* How would this works with RN?

# At-rule
* http://devdocs.io/css/at-rule
* @import
* @supports


# Calculating Specificity
The actual specificity of a group of nested selectors takes some calculating. Basically, you give every ID selector (“#whatever”) a value of 100, every class selector (“.whatever”) a value of 10 and every HTML selector (“whatever”) a value of 1. Then you add them all up and hey presto, you have the specificity value.
```
p has a specificity of 1 (1 HTML selector)
div p has a specificity of 2 (2 HTML selectors, 1+1)
.tree has a specificity of 10 (1 class selector)
div p.tree has a specificity of 12 (2 HTML selectors + a class selector, 1+1+10)
#baobab has a specificity of 100 (1 id selector)
body #content .alternative p has a specificity of 112 (HTML selector + id selector + class selector + HTML selector, 1+100+10+1)
```
So if all of these examples were used, div p.tree (with a specificity of 12) would win out over div p (with a specificity of 2) and body #content .alternative p would win out over all of them, regardless of the order.

# design
* flow
	1. 先做完全無色（黑白）的 Wireframe （先 mobile 後 Desktop )
	2. 做 Logo 調色，調色先做個三個基調，確認要走那個顏色
	3. 再把 Wireframe 調色上上去。
* wireframe
    * sketch https://www.sketchapp.com/
        * https://github.com/airbnb/react-sketchapp
    * http://www.uxpin.com/knowledge.html
    * https://framer.com/
    * http://simulify.com/
    * http://www.lovelycharts.com/
    * https://github.com/utom/sketch-measure  sketch-measure
* http://facebook.github.io/design/index.html
* ios9  https://uxuipro.wordpress.com/2015/11/08/ios-9%E4%BA%BA%E6%A9%9F%E7%95%8C%E9%9D%A2%E6%8C%87%E5%8D%97%EF%BC%88%E4%B8%80%EF%BC%89/
* css tool http://designposts.net/amazing-css-tools-you-should-be-using/
* css 3d http://csscoke.com/modern_web
* http://www.invisionapp.com/do
* ios icon http://appicontemplate.com/ios9/
* material-design
  * https://www.google.com/design/spec/material-design/introduction.html
* https://medium.com/@WebdesignerDepot/the-best-of-what-s-new-for-designers-2015-d952d196e2b#.phe42lgjw The best of what’s new for designers, 2015
* https://tenten.co/blog/tenten-frontend-mac-apps-2016  美編工具
* http://www.ogdesign.tw/resources     設計資源總匯
* http://www.shakacode.com/
* http://www.inside.com.tw/2016/05/29/how-to-set-gradient-color-in-ios 寫給不是設計師的——漸層配色（上）
* http://www.webdesignernews.com/
* http://buzzorange.com/techorange/2013/10/01/get-a-job-as-a-designer-without-going-to-design-school/
* https://medium.com/@zonble/%E7%BF%BB%E8%AD%AF-%E9%81%AD%E5%88%B0%E8%AA%A4%E7%94%A8%E7%9A%84%E8%A1%8C%E5%8B%95%E8%A3%9D%E7%BD%AE-ux-%E8%A8%AD%E8%A8%88%E6%A8%A1%E5%BC%8F-b4a8fc41c6d6#.n08k902ad mobile UX
* https://uxdesign.cc/design-better-forms-96fadca0f49c#.srkzovn9r form
* https://buzzorange.com/techorange/2015/05/28/design/
* http://www.templatemonster.com/ 範例
* http://www.awwwards.com/ 範例
* https://w3layouts.com/ 範例
* http://www.responsivefull.com/html5-ecommerce/ 範例
* http://qrohlf.com/trianglify/ triangle art
* https://github.com/neutraltone/awesome-stock-resources font icon ...
* https://themeforest.net/  template
* http://www.nopcommerce.com/ template
* http://www.coverr.co   影片素材
* http://www.psdtoresponsivehtml5.com/great-sites-web-design-inspiration/ 範例
* http://www.mobile-patterns.com/ 手機
* https://www.google.com/nikcollection/  圖片後置
* http://blocsapp.com prototype tool (RWD)
* https://unsplash.com/ 圖片
* https://www.pexels.com 圖片
* https://market.envato.com/
* https://www.udemy.com/web-design-secrets


# icon
* [Font-Awesome](https://github.com/FortAwesome/Font-Awesome)
* http://www.flaticon.com/
  * http://www.flaticon.com/packs/ios7-set-lined-1
* https://www.iconfinder.com/
* http://www.iconsdb.com/
* https://design.google.com/icons/
* https://icomoon.io/
* https://octicons.github.com/  GitHub's icons
* http://ionicons.com/
* http://cssicon.space/ pure css


# font
* https://www.google.com/fonts/
  * https://github.com/ubuwaits/beautiful-web-type
* 思源黑體
  * https://github.com/adobe-fonts/source-han-sans/
  * http://www.google.com/get/noto/
* https://github.com/chrissimpkins/Hack
* https://www.fontsquirrel.com/
* https://github.com/mozilla/Fira
* https://typekit.com/fonts
* http://www.1001fonts.com/


# postcss

* [cssnext](http://cssnext.io/)
* [postcss-modules](https://github.com/css-modules/postcss-modules) css modules
* http://caniuse.com/#feat=css-variables

# favicon
* http://www.favicon.cc/

# center
* https://css-tricks.com/centering-css-complete-guide/
```css
vertical-align: middle; // vertical centering
text-align: center;
margin: 0 auto;  // 水平置中

.center {
	display: flex;

	// vertical  
	align-items: flex-start;  // top
	align-items: center;  // middle
	align-items: flex-end;  // bottom
	align-items: stretch;
	align-items: baseline;
  
	// horizontal
	justify-content: flex-start;  // left
	justify-content: center;  // center
	justify-content: flex-end;  // right
	justify-content: space-between;
	justify-content: space-around;
}
```



# sass

* [bourbon](http://bourbon.io/) mixin library for Sass
* [susy](http://susy.oddbird.net/)


# reset

```
.reset-this {
    animation : none;
    animation-delay : 0;
    animation-direction : normal;
    animation-duration : 0;
    animation-fill-mode : none;
    animation-iteration-count : 1;
    animation-name : none;
    animation-play-state : running;
    animation-timing-function : ease;
    backface-visibility : visible;
    background : 0;
    background-attachment : scroll;
    background-clip : border-box;
    background-color : transparent;
    background-image : none;
    background-origin : padding-box;
    background-position : 0 0;
    background-position-x : 0;
    background-position-y : 0;
    background-repeat : repeat;
    background-size : auto auto;
    border : 0;
    border-style : none;
    border-width : medium;
    border-color : inherit;
    border-bottom : 0;
    border-bottom-color : inherit;
    border-bottom-left-radius : 0;
    border-bottom-right-radius : 0;
    border-bottom-style : none;
    border-bottom-width : medium;
    border-collapse : separate;
    border-image : none;
    border-left : 0;
    border-left-color : inherit;
    border-left-style : none;
    border-left-width : medium;
    border-radius : 0;
    border-right : 0;
    border-right-color : inherit;
    border-right-style : none;
    border-right-width : medium;
    border-spacing : 0;
    border-top : 0;
    border-top-color : inherit;
    border-top-left-radius : 0;
    border-top-right-radius : 0;
    border-top-style : none;
    border-top-width : medium;
    bottom : auto;
    box-shadow : none;
    box-sizing : content-box;
    caption-side : top;
    clear : none;
    clip : auto;
    color : inherit;
    columns : auto;
    column-count : auto;
    column-fill : balance;
    column-gap : normal;
    column-rule : medium none currentColor;
    column-rule-color : currentColor;
    column-rule-style : none;
    column-rule-width : none;
    column-span : 1;
    column-width : auto;
    content : normal;
    counter-increment : none;
    counter-reset : none;
    cursor : auto;
    direction : ltr;
    display : inline;
    empty-cells : show;
    float : none;
    font : normal;
    font-family : inherit;
    font-size : medium;
    font-style : normal;
    font-variant : normal;
    font-weight : normal;
    height : auto;
    hyphens : none;
    left : auto;
    letter-spacing : normal;
    line-height : normal;
    list-style : none;
    list-style-image : none;
    list-style-position : outside;
    list-style-type : disc;
    margin : 0;
    margin-bottom : 0;
    margin-left : 0;
    margin-right : 0;
    margin-top : 0;
    max-height : none;
    max-width : none;
    min-height : 0;
    min-width : 0;
    opacity : 1;
    orphans : 0;
    outline : 0;
    outline-color : invert;
    outline-style : none;
    outline-width : medium;
    overflow : visible;
    overflow-x : visible;
    overflow-y : visible;
    padding : 0;
    padding-bottom : 0;
    padding-left : 0;
    padding-right : 0;
    padding-top : 0;
    page-break-after : auto;
    page-break-before : auto;
    page-break-inside : auto;
    perspective : none;
    perspective-origin : 50% 50%;
    position : static;
    /* May need to alter quotes for different locales (e.g fr) */
    quotes : '\201C' '\201D' '\2018' '\2019';
    right : auto;
    tab-size : 8;
    table-layout : auto;
    text-align : inherit;
    text-align-last : auto;
    text-decoration : none;
    text-decoration-color : inherit;
    text-decoration-line : none;
    text-decoration-style : solid;
    text-indent : 0;
    text-shadow : none;
    text-transform : none;
    top : auto;
    transform : none;
    transform-style : flat;
    transition : none;
    transition-delay : 0s;
    transition-duration : 0s;
    transition-property : none;
    transition-timing-function : ease;
    unicode-bidi : normal;
    vertical-align : baseline;
    visibility : visible;
    white-space : normal;
    widows : 0;
    width : auto;
    word-spacing : normal;
    z-index : auto;
    /* basic modern patch */
    all: initial;
    all: unset;
}

/* basic modern patch */

#reset-this-root {
    all: initial;
    * {
        all: unset;
    }
}
```




span 直式 writing-mode: vertical-lr;
超出範圍時 ... text-overflow:ellipsis;


http://webnetamemo.com/coding/css/201507161181 ol 括號

# iphone

* https://medium.com/@bobtung/面對iphone-x-web設計師需要知道的幾個css屬性-b7c03b314c6a



# border arround text

* https://stackoverflow.com/questions/5214127/css-technique-for-a-horizontal-line-with-words-in-the-middle


# box-reflect

* http://hsrtech.com/css/create-reflection-effect-using-css3/
* https://codepen.io/jonathan/pen/pgioE

```
-webkit-box-reflect: below 0px linear-gradient(rgba(255,255,255,.1), rgba(255, 255, 255, .7));
-webkit-gradient( linear, left bottom, left top, color-stop(0.60, rgb(255,255,255)), color-stop(0.75, rgba(255,255,255,0)) );
-webkit-linear-gradient(bottom, rgba(255, 255, 255, 0.3) 0%, transparent 50%, transparent 100%);
```
