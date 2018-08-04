* [規格文件](http://sony1708.pixnet.net/blog/post/29993099--網站企劃--將網站需求與功能寫成規格文件?fref=gc)


* 自動測試
	* http://karma-runner.github.io/1.0/config/browsers.html
	* https://www.browserstack.com/ 貴
	* http://www.seleniumhq.org/
* 手動實機測試
	* mac 目前可以用 ios simulator 測試 ios8 以上
	* android vm 也可以測預設瀏覽器/Chrome
	* safari
	* [各版本IE](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/)

重點順序

1. 正常登入
2. 下單流程
3. 載入速度


前台

1. 整理用到那些API，再重規劃API
2. 收集前台遇到的問題
3. 改善登入流程
4. 改善下單流程
5. 解決Client/Server程式碼同步問題
6. URL 重設計
    * 參考 https://ihower.tw/rails/restful.html
7. ga紀錄訂購流程使用者停留在那個階段 (https://github.com/angulartics/angulartics)


軟工相關：

### Client:

* HTML 模板引擎: PostHTML
* CSS 前置處理器: ~~SCSS~~ vs PostCSS
* JavaScript 前置處理器: Babel vs ~~TypeScript~~
* Design 框架: Bootstrap v3.x
* App 框架: Angular v1.6
* 靜態分析: HTMLHint, StyleLint, & ESLint
* 測試相關: Jasmine, Karma, & Protractor
* 建置工具: Gulp & (Webpack vs ~~Rollup~~)
* 前台套件整理
    * [angular-strap](http://mgcrea.github.io/angular-strap/)
    * [ui-bootstrap](https://github.com/angular-ui/bootstrap#webpack--jspm)  可以用webpack只載入需要的元件
    * [ui-route](https://github.com/angular-ui/ui-router)
    * [SpinKit](https://github.com/tobiasahlin/SpinKit)
* [AngularJS動態載入CSS](http://stackoverflow.com/questions/15193492/how-to-include-view-partial-specific-styling-in-angularjs)
* google tag 設定 ga, index.html 拿掉 ga


單元測試: https://github.com/Puigcerber/angular-unit-testing

風格指南:
* https://github.com/johnpapa/angular-styleguide  es5
* https://github.com/mgechev/angularjs-style-guide
* https://github.com/toddmotto/angular-styleguide  es6

### Server:

* getsentry
* 獨立環境，與後台分開
* Stress test
    * [ab](https://httpd.apache.org/docs/2.4/programs/ab.html)
    * [jmeter](http://jmeter.apache.org/)
    * [gatling](http://gatling.io/)


# analysis

* https://piwik.org/
* [google page speed insights](https://developers.google.com/speed/pagespeed/insights)
    * [PageSpeed Nginx Module](https://developers.google.com/speed/pagespeed/module/)
* [mobile-friendly](https://search.google.com/search-console/mobile-friendly)
* Lighthouse



# Notification

* https://onesignal.com/  free
* https://medium.com/front-end-hacking/browser-push-notifications-using-javascript-10453a78110#.oqkzsvlvb



# 測試環境

* [ie vms]
* [saucelabs]
* [browserstack]


[saucelabs]: https://saucelabs.com/
[browserstack]: https://www.browserstack.com/
[ie vms]: https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/
[in-app browser]: http://www.stateofdigital.com/facebook-browser-biggest-browser-ignore/


# lorem

產生假字

假圖
* http://lorempixel.com/400/200/
* http://loremflickr.com/320/240
* http://placehold.it/350x150

# Web Component

* polyfill https://github.com/WebComponents/webcomponentsjs
* github components https://github.com/search?p=1&q=topic%3Aweb-components+org%3Agithub&type=Repositories
* [Using custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)


# Route

* history
	* putState
	* windows.onpopstate
* location

# Service worker

* https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/
* https://github.com/facebook/create-react-app/blob/next/packages/react-scripts/template/src/serviceWorker.js
* https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app

