# webpack
* [webpack-howto](https://github.com/petehunt/webpack-howto)
* [react-webpack-cookbook](https://christianalfoni.github.io/react-webpack-cookbook/)
* [hjs-webpack](https://github.com/HenrikJoreteg/hjs-webpack) hotloading react and ES6(2015) using Babel.
* [WebpackStudyDemo](https://github.com/zhbhun/WebpackStudyDemo)
* https://medium.com/@dtothefp/why-can-t-anyone-write-a-simple-webpack-tutorial-d0b075db35ed#.u6k9z0tqq
* tree-shaking
  * https://github.com/rauschma/tree-shaking-demo
* http://www.pro-react.com/materials/appendixA/
* https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9#.fob929ld9
* https://webpack.github.io/docs/code-splitting.html code splitting
* https://egghead.io/courses/using-webpack-for-production-javascript-applications Using Webpack for Production JavaScript Applications
* [webpack toobug](http://webpack.toobug.net/zh-cn/)

# plugin
* [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin)
* [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin)
* [react-style](https://github.com/js-next/react-style-webpack-plugin)
* webpack.optimize.CommonsChunkPlugin
* webpack.HotModuleReplacementPlugin()
* [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin) generate html


# loader
* [sass-loader](https://github.com/jtangelder/sass-loader)
* [bootstrap-loader](https://github.com/shakacode/bootstrap-loader)
* [sass-resources-loader](https://github.com/shakacode/sass-resources-loader)
* babel-eslint eslint eslint-plugin-react eslint-loader
* csslint csslint-loader
* [strip-loader](https://github.com/yahoo/strip-loader) 拔掉 debug log


root http://stackoverflow.com/questions/30777009/include-paths-for-imports-in-babel-using-webpack


使用 lib, 不打包進 bundle
https://webpack.github.io/docs/library-and-externals.html


loaders array 中的順序是相當重要的，因為它的順序是從最後面開始往前執行。

把 eslint-loader 放在 preloaders 中


# webpack2

* https://segmentfault.com/a/1190000008390333


```js
new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    "window.jQuery": "jquery"
})
```
