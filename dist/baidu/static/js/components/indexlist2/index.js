var __CML__GLOBAL = require("../../manifest.js");
__CML__GLOBAL.webpackJsonp([11],{

/***/ "../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/GongLei/.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[\"Object\",\"Array\",\"Nullable\"]}!./src/components/indexlist2/index.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _index = __webpack_require__("./node_modules/chameleon-api/src/interfaces/getSystemInfo/index.js");

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 默认高度
var DEFAULT_ITEM_NAME_HEIGHT = 90;
var DEFAULT_ITEM_CONTENT_HEIGHT = 100;

var IndexList = function () {
  function IndexList() {
    _classCallCheck(this, IndexList);

    this.props = {
      dataList: {
        type: Array,
        default: []
      }
    };
    this.data = {
      list: [],
      shortcut: [],
      viewportHeight: 0,
      offsetTop: 0,
      activeIndex: 0,
      itemContentHeight: DEFAULT_ITEM_CONTENT_HEIGHT,
      itemNameHeight: DEFAULT_ITEM_NAME_HEIGHT
    };
    this.computed = {
      compScwStyle: function compScwStyle() {
        return 'top:' + this.viewportHeight / 2 + 'cpx';
      },
      compItemNameHeight: function compItemNameHeight() {
        return 'height:' + this.itemNameHeight + 'cpx';
      },
      compItemContentHeight: function compItemContentHeight() {
        return 'height:' + this.itemContentHeight + 'cpx';
      }
    };
    this.methods = {
      getViewportHeight: function getViewportHeight() {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var res;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return (0, _index2.default)();

                case 2:
                  res = _context.sent;

                  _this.viewportHeight = res.viewportHeight;

                case 4:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }))();
      },
      initData: function initData() {
        var _this2 = this;

        // get shortcut
        this.dataList.forEach(function (item) {
          if (item.pinYin) {
            var firstName = item.pinYin.substring(0, 1);
            if (item.pinYin && _this2.shortcut.indexOf(firstName.toUpperCase()) === -1) {
              _this2.shortcut.push(firstName.toUpperCase());
            };
          };
        });

        // handle input data
        var cityData = this.shortcut.map(function (item) {
          return { items: [], name: item };
        });
        this.dataList.forEach(function (item) {
          var firstName = item.pinYin.substring(0, 1).toUpperCase();
          var index = _this2.shortcut.indexOf(firstName);
          cityData[index].items.push(item);
        });

        // calculate offsetTop
        cityData.forEach(function (item, index) {
          var arr = cityData.slice(0, index);
          item.totalHeight = _this2.itemNameHeight + item.items.length * _this2.itemContentHeight;
          item.offsetTop = arr.reduce(function (total, cur) {
            return total + _this2.itemNameHeight + cur.items.length * _this2.itemContentHeight;
          }, 0);
        });
        this.list = cityData;
      },
      scrollToItem: function scrollToItem(shortcut) {
        var _list$find = this.list.find(function (item) {
          return item.name === shortcut;
        }),
            offsetTop = _list$find.offsetTop;

        this.offsetTop = offsetTop;
      },
      handleScroll: function handleScroll(e) {
        var scrollTop = e.detail.scrollTop;

        scrollTop = Math.ceil(scrollTop);
        this.activeIndex = this.list.findIndex(function (item) {
          return scrollTop >= item.offsetTop && scrollTop < item.totalHeight + item.offsetTop;
        });
      },
      handleSelect: function handleSelect(e) {
        this.$cmlEmit('onselect', e);
      }
    };
  }

  _createClass(IndexList, [{
    key: 'mounted',
    value: function mounted() {
      this.initData();
      this.getViewportHeight();
    }
  }]);

  return IndexList;
}();

exports.default = new IndexList();


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\"}!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/GongLei/.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/configs/postcss/baidu/.postcssrc.js\"}}!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"baidu\"}!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[\"Object\",\"Array\",\"Nullable\"]}!./src/components/indexlist2/index.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/components/indexlist2/index.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\"}!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/GongLei/.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/configs/postcss/baidu/.postcssrc.js\"}}!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"baidu\"}!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[\"Object\",\"Array\",\"Nullable\"]}!./src/components/indexlist2/index.cml");
var __cml__script = __webpack_require__("../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/GongLei/.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../.nvm/versions/node/v10.13.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[\"Object\",\"Array\",\"Nullable\"]}!./src/components/indexlist2/index.cml");


/***/ })

},["./src/components/indexlist2/index.cml"]);