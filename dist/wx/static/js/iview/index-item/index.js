var __CML__GLOBAL = require("../../manifest.js");
__CML__GLOBAL.webpackJsonp([27],{

/***/ "../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/GongLei/.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/cml-compile/wxml-selector.js?type=script!./src/iview/index-item/index.wxml":
/***/ (function(module, exports) {

Component({
    externalClasses: ['i-class'],
    properties: {
        name: {
            type: String,
            value: ''
        }
    },
    relations: {
        '../index/index': {
            type: 'parent'
        }
    },
    data: {
        top: 0,
        height: 0,
        currentName: ''
    },
    methods: {
        updateDataChange: function updateDataChange() {
            var _this = this;

            var className = '.i-index-item';
            var query = wx.createSelectorQuery().in(this);
            query.select(className).boundingClientRect(function (res) {
                _this.setData({
                    top: res.top,
                    height: res.height,
                    currentName: _this.data.name
                });
            }).exec();
        }
    }
});

/***/ }),

/***/ "../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\"}!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/GongLei/.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/cml-compile/wxml-selector.js?type=styles!./src/iview/index-item/index.wxml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/iview/index-item/index.wxml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style = __webpack_require__("../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\"}!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/GongLei/.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/cml-compile/wxml-selector.js?type=styles!./src/iview/index-item/index.wxml");
var __cml__script = __webpack_require__("../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/GongLei/.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/cml-compile/wxml-selector.js?type=script!./src/iview/index-item/index.wxml");


/***/ })

},["./src/iview/index-item/index.wxml"]);