webpackJsonp([0],{

/***/ "+XYY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "+fS+":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//
//
//
//
//
//
//
//
//
//
//


var CPopup = function () {
  function CPopup() {
    _classCallCheck(this, CPopup);

    this.props = {
      mask: {
        type: Boolean,
        default: true
      },
      show: {
        type: Boolean,
        default: false
      },
      center: {
        type: Boolean,
        default: true
      },
      position: {
        type: String,
        default: ''
      }
    };
    this.data = {};
    this.computed = {
      maskClass: function maskClass() {
        return this.mask ? "has-mask" : "no-mask";
      },
      containerStyle: function containerStyle() {
        if (this.center) {
          return this.$cmlStyle({
            'align-items': 'center',
            'justify-content': 'center'
          });
        }
      },
      contentStyle: function contentStyle() {
        var style = "position: absolute;left:0;right:0;top:0;bottom:0;";
        switch (this.position) {
          case 'top':
            style = style.replace('bottom:0;', 'display:flex;flex-direction:column;');
            break;
          case 'right':
            style = style.replace('left:0;', 'display:flex;flex-direction:row;');
            break;
          case 'bottom':
            style = style.replace('top:0;', 'display:flex;flex-direction:column;');
            break;
          case 'left':
            style = style.replace('right:0;', 'display:flex;flex-direction:row;');
            break;
          default:
            style = "position:relative;";
            break;
        }
        return this.$cmlStyle(style);
      }
    };
    this.watch = {};
    this.methods = {
      closeevent: function closeevent() {
        this.$cmlEmit("close");
      },
      contentTap: function contentTap() {}
    };
  }

  _createClass(CPopup, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);

  return CPopup;
}();

exports.default = new CPopup();


exports.default.components = _extends({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "+iRC":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = showToast;

var _index = __webpack_require__("nFN1");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function showToast(opt) {
  var _opt$message = opt.message,
      message = _opt$message === undefined ? '' : _opt$message,
      _opt$duration = opt.duration,
      duration = _opt$duration === undefined ? 2000 : _opt$duration;

  _index2.default.showToast({
    message: message,
    duration: duration
  });
}

/***/ }),

/***/ "/Jkn":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLaunchUrl = getLaunchUrl;

var _index = __webpack_require__("zYxj");

var moduleName = 'cml';
var methodName = 'getLaunchUrl';

function getLaunchUrl(param, cb) {
  (0, _index.callNative)(moduleName, methodName, param, cb);
}

getLaunchUrl.prototype.moduleName = moduleName;
getLaunchUrl.prototype.methodName = methodName;

/***/ }),

/***/ "/aye":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_helpers_debug__ = __webpack_require__("6hTE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_lang_string__ = __webpack_require__("9L/J");



/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    _checkDeprecated() {
      const props = this.$options.props
      const componentName = this.$options.name

      Object.entries(props).forEach(([key, prop]) => {
        const deprecated = prop.deprecated

        if (deprecated && this[key] !== undefined) {
          Object(__WEBPACK_IMPORTED_MODULE_0__common_helpers_debug__["a" /* tip */])(`The property "${Object(__WEBPACK_IMPORTED_MODULE_1__common_lang_string__["kebab"])(key)}" is deprecated, please use the recommended property "${deprecated.replacedBy}" to replace it. Details could be found in https://didi.github.io/cube-ui/#/en-US/docs/${componentName.substr(5)}#cube-Propsconfiguration-anchor`, componentName)
        }
      })
    }
  },
  mounted() {
    this._checkDeprecated()
  }
});


/***/ }),

/***/ "09Zy":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _common = __webpack_require__("Go0R");

var _util = __webpack_require__("Pn5V");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'getWidth',
    value: function getWidth() {
      var _getViewportSize = (0, _common.getViewportSize)(),
          viewportWidth = _getViewportSize.viewportWidth;

      return viewportWidth;
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "0lJV":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _chooseImage = __webpack_require__("UznO");

var chooseImage = _interopRequireWildcard(_chooseImage);

var _clipboard = __webpack_require__("7hyw");

var clipboard = _interopRequireWildcard(_clipboard);

var _close = __webpack_require__("4Jta");

var close = _interopRequireWildcard(_close);

var _location = __webpack_require__("WmH8");

var location = _interopRequireWildcard(_location);

var _navigator = __webpack_require__("9SjX");

var navigator = _interopRequireWildcard(_navigator);

var _openPage = __webpack_require__("T1iD");

var openPage = _interopRequireWildcard(_openPage);

var _reload = __webpack_require__("Mw6c");

var reload = _interopRequireWildcard(_reload);

var _request = __webpack_require__("y268");

var request = _interopRequireWildcard(_request);

var _rollbackWeb = __webpack_require__("lHlG");

var rollbackWeb = _interopRequireWildcard(_rollbackWeb);

var _socket = __webpack_require__("otVu");

var socket = _interopRequireWildcard(_socket);

var _storage = __webpack_require__("klzv");

var storage = _interopRequireWildcard(_storage);

var _systemInfo = __webpack_require__("eH8E");

var systemInfo = _interopRequireWildcard(_systemInfo);

var _canIUse = __webpack_require__("VNbL");

var canIUse = _interopRequireWildcard(_canIUse);

var _getSDKInfo = __webpack_require__("dv89");

var getSDKInfo = _interopRequireWildcard(_getSDKInfo);

var _title = __webpack_require__("zBSf");

var title = _interopRequireWildcard(_title);

var _index = __webpack_require__("ZcqR");

var query = _interopRequireWildcard(_index);

var _getLaunchUrl = __webpack_require__("/Jkn");

var getLaunchUrl = _interopRequireWildcard(_getLaunchUrl);

var _ui = __webpack_require__("hljV");

var ui = _interopRequireWildcard(_ui);

var _inSDK = __webpack_require__("qywW");

var inSDK = _interopRequireWildcard(_inSDK);

var _index2 = __webpack_require__("2XSf");

var getComponentRect = _interopRequireWildcard(_index2);

var _index3 = __webpack_require__("zYxj");

var core = _interopRequireWildcard(_index3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = _extends({}, chooseImage, clipboard, close, location, navigator, openPage, reload, request, rollbackWeb, socket, storage, systemInfo, canIUse, getSDKInfo, title, query, getLaunchUrl, getComponentRect, ui, inSDK, getComponentRect, core);

/***/ }),

/***/ "1+/X":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPage = createPage;

var _index = __webpack_require__("lKwg");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPage(options) {
  return _index2.default.createPage(options);
}

/***/ }),

/***/ "1BE8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("canvas", {
    ref: "bubble",
    style: _vm.style,
    attrs: { width: _vm.width, height: _vm.height }
  })
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-292b3aea", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "1H6C":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__("HhN8");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "1HDH":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__("h696");

var _index2 = __webpack_require__("1+/X");

var _index3 = __webpack_require__("HTWf");

var _index4 = __webpack_require__("axut");

var _index5 = _interopRequireDefault(_index4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({
  createApp: _index.createApp,
  createPage: _index2.createPage,
  createComponent: _index3.createComponent
}, _index5.default);

/***/ }),

/***/ "1yVu":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _web = __webpack_require__("en+i");

var _util = __webpack_require__("Pn5V");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 定义模块的interface
var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'createApp',
    value: function createApp(options) {
      return new _web.App(options);
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "204m":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.buildToast = buildToast;

var _cToast = __webpack_require__("vpr6");

var _cToast2 = _interopRequireDefault(_cToast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createElement(id) {
  var popupContainer = document.createElement('div');
  popupContainer.setAttribute('id', id);
  document.body.appendChild(popupContainer);
}
// 在web端，以api的形式调用组件

/**
 * 在web端构建toast弹出层
 * @param {Object} opt 传入的弹出层配置
 * **/
function buildToast(opt) {

  createElement('popupContainer');

  var ToastConstructor = Vue.extend(_cToast2.default);
  var instance = new ToastConstructor({
    propsData: _extends({
      needIcon: false
    }, opt)
  });
  instance.$mount('#popupContainer');
  return instance;
}

/***/ }),

/***/ "2XSf":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getComponentRect = getComponentRect;

var _index = __webpack_require__("iIzD");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moduleName = 'dom';
var methodName = 'getComponentRect';

function getComponentRect(module, method, args, callback) {
  _index2.default.getComponentRect.apply(_index2.default, arguments);
}

getComponentRect.prototype.moduleName = moduleName;
getComponentRect.prototype.methodName = methodName;

/***/ }),

/***/ "2miP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    // the options of BetterScroll
    options: {
      type: Object,
      default() {
        return {}
      }
    }
  }
});


/***/ }),

/***/ "2x5J":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "46z+":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// options transform 基类
var BaseOptionsTransformer = function () {
  function BaseOptionsTransformer(config) {
    _classCallCheck(this, BaseOptionsTransformer);

    this.type = config.type;
    this.options = config.options;
    this.injectMixins = config.injectMixins || [];
    this.builtinMixins = config.builtinMixins;
    this.hooks = config.hooks;
    this.hooksMap = config.hooksMap;
    this.platform = '';
  }

  _createClass(BaseOptionsTransformer, [{
    key: 'getOptions',
    value: function getOptions() {
      return this.options;
    }
  }]);

  return BaseOptionsTransformer;
}();

exports.default = BaseOptionsTransformer;

/***/ }),

/***/ "49QK":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__("k7Ng");

var COMPONENT_NAME = 'cube-index-list-item'; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var ACTIVE_CLS = 'cube-index-list-item_active';
var EVENT_SELECT = 'select';

exports.default = {
  name: COMPONENT_NAME,
  props: {
    item: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: {
    itemClass: function itemClass() {
      return this.item.active ? ACTIVE_CLS : '';
    }
  },
  methods: {
    addActiveCls: function addActiveCls(e) {
      (0, _dom.addClass)(e.currentTarget, ACTIVE_CLS);
    },
    removeActiveCls: function removeActiveCls(e) {
      (0, _dom.removeClass)(e.currentTarget, ACTIVE_CLS);
    },
    selectItem: function selectItem() {
      this.$emit(EVENT_SELECT, this.item);
    }
  }
};

/***/ }),

/***/ "4Jta":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = close;

var _index = __webpack_require__("zYxj");

var moduleName = 'cml';
var methodName = 'closePage';

function close() {
  (0, _index.callNative)(moduleName, methodName, {}, function () {});
}

close.prototype.moduleName = moduleName;
close.prototype.methodName = methodName;

/***/ }),

/***/ "4Qds":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cmlBridge = __webpack_require__("8D69");

var _cmlBridge2 = _interopRequireDefault(_cmlBridge);

var _env = __webpack_require__("8d/N");

var _ua = __webpack_require__("R0Nl");

var _common = __webpack_require__("Ud/e");

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'getSystemInfo',
    value: function getSystemInfo(cb) {
      var os = (0, _ua.isIos)() ? 'ios' : 'android';

      var _getViewportSize = (0, _common.getViewportSize)(),
          viewportWidth = _getViewportSize.viewportWidth,
          viewportHeight = _getViewportSize.viewportHeight;

      if ((0, _env.inSDK)()) {
        _cmlBridge2.default.getSystemInfo({}, function (res) {
          var errno = res.errno,
              data = res.data;

          if (errno == 0) {
            var _os = data.os,
                _viewportWidth = data.viewportWidth,
                _viewportHeight = data.viewportHeight,
                _extraParams = data.extraParams,
                extra = _objectWithoutProperties(data, ['os', 'viewportWidth', 'viewportHeight', 'extraParams']);

            cb({
              os: _os,
              env: 'web',
              viewportWidth: _viewportWidth,
              viewportHeight: _viewportHeight,
              extraParams: _extends({}, _extraParams, extra)
            });
          }
        });
      } else {
        cb({
          os: os,
          env: 'web',
          viewportWidth: viewportWidth,
          viewportHeight: viewportHeight,
          extraParams: {}
        });
      }
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "4Ypl":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = __webpack_require__("EK/L");

exports.default = {
  methods: {
    $stopOuterA: function $stopOuterA(e) {
      if (e && e.preventDefault && e.target) {
        if ((0, _component.insideA)(e.target)) {
          e.preventDefault();
        }
      }
    },
    $stopPropagation: function $stopPropagation(e) {
      if (e && e.stopPropagation) {
        e.stopPropagation();
      }
    }
  }
};

/***/ }),

/***/ "5qCB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_loading_vue__ = __webpack_require__("Bna5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_loading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_loading_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_loading_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_loading_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_8c6006f6_hasScoped_false_optionsId_1_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_loading_vue__ = __webpack_require__("6RER");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("j4WI")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_loading_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_8c6006f6_hasScoped_false_optionsId_1_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_loading_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_8c6006f6_hasScoped_false_optionsId_1_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_loading_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/cube-ui/src/components/loading/loading.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8c6006f6", Component.options)
  } else {
    hotAPI.reload("data-v-8c6006f6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "6RER":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cube-loading", attrs: {} }, [
    _c(
      "span",
      { staticClass: "cube-loading-spinners", style: _vm.style, attrs: {} },
      _vm._l(_vm.balde, function(item) {
        return _c("i", { staticClass: "cube-loading-spinner", attrs: {} })
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8c6006f6", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "6hTE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const warn = function (msg, componentName) {
   /* istanbul ignore if */
  if (false) {
    const component = componentName ? `<${componentName}> ` : ''
    console.error(`[Cube warn]: ${component}${msg}`)
  }
}
/* unused harmony export warn */


const tip = function (msg, componentName) {
  if (false) {
    const component = componentName ? `<${componentName}> ` : ''
    console.warn(`[Cube tip]: ${component}${msg}`)
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = tip;



/***/ }),

/***/ "7hyw":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClipBoardData = getClipBoardData;
exports.setClipBoardData = setClipBoardData;

var _index = __webpack_require__("zYxj");

var moduleName = 'clipboard';
var methodGet = 'getClipBoardData';
var methodSet = 'setClipBoardData';

function getClipBoardData() {
  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var cb = arguments[1];

  /**
   * params {}
   */
  (0, _index.callNative)(moduleName, methodGet, param, function (res) {
    /**
    * errno
    * msg
    * data
    */
    cb(res);
  });
}

getClipBoardData.prototype.moduleName = moduleName;
getClipBoardData.prototype.methodName = methodGet;

function setClipBoardData(_ref, cb) {
  var _ref$data = _ref.data,
      data = _ref$data === undefined ? '' : _ref$data;

  (0, _index.callNative)(moduleName, methodSet, {
    data: data
  }, function (res) {
    /**
    * errno
    * msg
    * data
    */
    cb(res);
  });
}

setClipBoardData.prototype.moduleName = moduleName;
setClipBoardData.prototype.methodName = methodSet;

/***/ }),

/***/ "8D69":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chameleonBridge = __webpack_require__("0lJV");

var _chameleonBridge2 = _interopRequireDefault(_chameleonBridge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _chameleonBridge2.default;

/***/ }),

/***/ "8d/N":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inSDK = inSDK;

var _cmlBridge = __webpack_require__("8D69");

var _cmlBridge2 = _interopRequireDefault(_cmlBridge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 判断是在ChameleonSDK中
 * @returns {boolean}
 */
function inSDK() {
  return _cmlBridge2.default.inSDK();
}

/***/ }),

/***/ "9EvJ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9L/J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["camelize"] = camelize;
/* harmony export (immutable) */ __webpack_exports__["kebab"] = kebab;
const camelizeRE = /-(\w)/g
function camelize (str) {
  str = String(str)
  return str.replace(camelizeRE, function (m, c) {
    return c ? c.toUpperCase() : ''
  })
}

function kebab (str) {
  str = String(str)
  return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}


/***/ }),

/***/ "9S/u":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _BaseCtor2 = __webpack_require__("yVTO");

var _BaseCtor3 = _interopRequireDefault(_BaseCtor2);

var _lifecycle = __webpack_require__("wbAX");

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _OptTransformer = __webpack_require__("njES");

var _OptTransformer2 = _interopRequireDefault(_OptTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = exports.App = function (_BaseCtor) {
  _inherits(App, _BaseCtor);

  function App(options) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, options));

    _this.cmlType = 'web';

    _this.initOptTransformer(_OptTransformer2.default, {
      type: 'app',
      hooks: _lifecycle2.default.get('cml.hooks')
    });
    return _this;
  }

  return App;
}(_BaseCtor3.default);

/***/ }),

/***/ "9SjX":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigateTo = navigateTo;
exports.redirectTo = redirectTo;
exports.navigateBack = navigateBack;
function navigateTo(opt) {
  var runtime = __webpack_require__("1HDH").default;

  var _runtime$getInfo = runtime.getInfo(),
      router = _runtime$getInfo.router,
      routerConfig = _runtime$getInfo.routerConfig;

  var path = opt.path,
      query = opt.query;


  if (path && router) {
    var flag = false;

    var routes = routerConfig.routes;
    for (var i = 0; i < routes.length; i++) {
      var route = routes[i];
      if (path === route.path) {
        flag = true;
        router.push({
          path: route.url,
          query: query
        });
        break;
      }
    }
    if (!flag) {
      router.push({
        path: router.options.routes[0].path,
        query: query
      });
    }
  } else {
    router.push({
      path: router.options.routes[0].path,
      query: query
    });
  }
}

function redirectTo(opt) {
  var runtime = __webpack_require__("1HDH").default;

  var _runtime$getInfo2 = runtime.getInfo(),
      router = _runtime$getInfo2.router;

  var path = opt.path,
      query = opt.query;


  router.replace({
    path: path,
    query: query
  });
}

function navigateBack(backPageNum) {
  var runtime = __webpack_require__("1HDH").default;

  var _runtime$getInfo3 = runtime.getInfo(),
      router = _runtime$getInfo3.router;

  router.go(backPageNum);
}

/***/ }),

/***/ "AJI0":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _web = __webpack_require__("en+i");

var _util = __webpack_require__("Pn5V");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 定义模块的interface
var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'createComponent',
    value: function createComponent(options) {
      return new _web.Component(options);
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "BRW+":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Bna5":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//

var COMPONENT_NAME = 'cube-loading';

exports.default = {
  name: COMPONENT_NAME,
  data: function data() {
    return {
      balde: 12
    };
  },

  props: {
    size: {
      type: Number
    }
  },
  computed: {
    style: function style() {
      if (!this.size) {
        return;
      }
      var value = this.size + 'px';
      return {
        width: value,
        height: value
      };
    }
  }
};

/***/ }),

/***/ "CHsc":
/***/ (function(module, exports, __webpack_require__) {


var _ = module.exports = {};
var utils = __webpack_require__("TdLX");
_.eventProxyName = '_cmlEventProxy';
_.modelEventProxyName = '_cmlModelEventProxy'; // c-model  v-model的事件代理
_.inlineStatementEventProxy = '_cmlInlineStatementEventProxy'; // 内联语句的事件代理
_.eventEmitName = '$cmlEmit'; // 触发事件的方法
_.styleParseName = '$cmlStyle'; // 提供各端处理style属性的方法  weex中处理成对象，wx中处理成字符串，web中不处理
_.styleProxyName = '_cmlStyleProxy'; // 提供代理 weex和web端处理style
_.mergeStyleName = '$cmlMergeStyle';
_.animationProxy = '_animationCb';
_.weexClassProxy = '_weexClassProxy';
_.merge = function (target, fromObj) {
  Object.keys(fromObj).forEach(function (key) {
    target[key] = fromObj[key];
  });
};

_.isType = function (obj, type) {
  return Object.prototype.toString.call(obj).slice(8, -1) === type;
};

_.mergeStyle = function () {
  // 可以接受字符串或者对象
  function styleToObj(str) {
    var obj = {};
    str.split(';').filter(function (item) {
      return !!item.trim();
    }).forEach(function (item) {
      var _utils$getStyleKeyVal = utils.getStyleKeyValue(item),
          key = _utils$getStyleKeyVal.key,
          value = _utils$getStyleKeyVal.value;

      key = key.replace(/\s+/, '');
      value = value.replace(/\s+/, '');
      obj[key] = value;
    });
    return obj;
  }
  var arr = [];

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args.forEach(function (arg) {
    if (typeof arg === 'string') {
      arr.push(styleToObj(arg));
    } else if (Object.prototype.toString.call(arg) === '[object Object]') {
      arr.push(arg);
    }
  });
  var resultObj = Object.assign.apply(Object, arr);

  var resultStr = '';
  Object.keys(resultObj).forEach(function (key) {
    resultStr += key + ':' + resultObj[key] + ';';
  });
  return resultStr;
};
_.trim = function (value) {
  return value.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};
_.isReactive = function (value) {
  var reg = /(?:^'([^']*?)'$)/;
  return _.trim(value).match(reg);
};

/***/ }),

/***/ "CW7I":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Chameleon 默认module名
var moduleDefault = exports.moduleDefault = 'cml';

/***/ }),

/***/ "Dmbm":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _type = __webpack_require__("rffR");

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } //
//
//
//
//
//
//


function str2obj(str) {
  var styleArr = str.split(';');
  var style = {};
  styleArr.forEach(function (item) {
    var si = item.split(':');
    if (si.length === 2) {
      style[si[0]] = si[1];
    }
  });
  return style;
  // return String.keys(obj)
  //   .map(key => `${key}:${obj[key]}`)
  //   .join(";");
}

function obj2str(obj) {
  return Object.keys(obj).map(function (key) {
    return key + ':' + obj[key];
  }).join(";");
}

var Button = function Button() {
  _classCallCheck(this, Button);

  this.props = {
    text: {
      type: String,
      default: "确认"
    },
    size: {
      type: String,
      default: "none"
    },
    type: {
      type: String,
      default: "blue"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    btnStyle: {
      type: String,
      default: ""
    },
    textStyle: {
      type: String,
      default: ""
    },
    disabledStyle: {
      type: String,
      default: ""
    },
    openType: {
      type: String,
      default: ""
    },
    lang: {
      type: String,
      default: "en"
    },
    sessionFrom: {
      type: String,
      default: ""
    },
    sendMessageTitle: {
      type: String,
      default: "当前标题"
    },
    sendMessagePath: {
      type: String,
      default: "当前分享路径"
    },
    sendMessageImg: {
      type: String,
      default: "截图"
    },
    showMessageCard: {
      type: Boolean,
      default: false
    },
    appParameter: {
      type: String,
      default: ""
    }
  };
  this.computed = {
    mrBtnStyle: function mrBtnStyle() {
      var type = this.type,
          disabled = this.disabled,
          btnStyle = this.btnStyle,
          size = this.size,
          disabledStyle = this.disabledStyle;

      var mrBtnStyle = _extends({}, _type.STYLE_MAP[type], str2obj(btnStyle), _type.BUTTON_STYLE_MAP[size]);

      var disabledInStyle = { opacity: 0.2 };
      if (type === "white") {
        disabledInStyle = { "background-color": "rgba(0, 0, 0, 0.1)" };
      }

      var afterStyle = disabled ? _extends({}, mrBtnStyle, disabledInStyle, str2obj(disabledStyle), {
        "border-width": 0
      }) : mrBtnStyle;

      return obj2str(afterStyle);
    },
    mrTextStyle: function mrTextStyle() {
      var type = this.type,
          disabled = this.disabled,
          textStyle = this.textStyle,
          size = this.size;

      var mrTextStyle = _extends({}, _type.TEXT_STYLE_MAP[type], str2obj(textStyle), _type.TEXT_FONTSIZE_STYLE_MAP[size]);
      var afterStyle = disabled ? _extends({}, mrTextStyle, { color: "#FFFFFF" }) : mrTextStyle;

      return obj2str(afterStyle);
    }
  };
  this.methods = {
    onclick: function onclick(e) {
      var type = this.type,
          disabled = this.disabled;

      if (disabled) return;
      this.$cmlEmit('onclick', {
        type: type,
        disabled: disabled
      });
    }
  };
};

exports.default = new Button();


exports.default.components = _extends({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "ED0k":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _betterScroll = __webpack_require__("GQaK");

var _betterScroll2 = _interopRequireDefault(_betterScroll);

var _loading = __webpack_require__("5qCB");

var _loading2 = _interopRequireDefault(_loading);

var _bubble = __webpack_require__("Eo+l");

var _bubble2 = _interopRequireDefault(_bubble);

var _scroll = __webpack_require__("2miP");

var _scroll2 = _interopRequireDefault(_scroll);

var _deprecated = __webpack_require__("/aye");

var _deprecated2 = _interopRequireDefault(_deprecated);

var _dom = __webpack_require__("k7Ng");

var _string = __webpack_require__("9L/J");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_NAME = 'cube-scroll'; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var DIRECTION_H = 'horizontal';
var DIRECTION_V = 'vertical';
var DEFAULT_REFRESH_TXT = 'Refresh success';
var DEFAULT_STOP_TIME = 600;

var EVENT_CLICK = 'click';
var EVENT_PULLING_DOWN = 'pulling-down';
var EVENT_PULLING_UP = 'pulling-up';

var EVENT_SCROLL = 'scroll';
var EVENT_BEFORE_SCROLL_START = 'before-scroll-start';
var EVENT_SCROLL_END = 'scroll-end';

var NEST_MODE_NONE = 'none';
var NEST_MODE_NATIVE = 'native';

var SCROLL_EVENTS = [EVENT_SCROLL, EVENT_BEFORE_SCROLL_START, EVENT_SCROLL_END];

var DEFAULT_OPTIONS = {
  observeDOM: true,
  click: true,
  probeType: 1,
  scrollbar: false,
  pullDownRefresh: false,
  pullUpLoad: false
};

exports.default = {
  name: COMPONENT_NAME,
  mixins: [_scroll2.default, _deprecated2.default],
  provide: function provide() {
    return {
      parentScroll: this
    };
  },

  inject: {
    parentScroll: {
      default: null
    }
  },
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    scrollEvents: {
      type: Array,
      default: function _default() {
        return [];
      },
      validator: function validator(arr) {
        return arr.every(function (item) {
          return SCROLL_EVENTS.indexOf(item) !== -1;
        });
      }
    },
    // TODO: plan to remove at 1.10.0
    listenScroll: {
      type: Boolean,
      default: undefined,
      deprecated: {
        replacedBy: 'scroll-events'
      }
    },
    listenBeforeScroll: {
      type: Boolean,
      default: undefined,
      deprecated: {
        replacedBy: 'scroll-events'
      }
    },
    direction: {
      type: String,
      default: DIRECTION_V
    },
    refreshDelay: {
      type: Number,
      default: 20
    },
    nestMode: {
      type: String,
      default: NEST_MODE_NONE
    }
  },
  data: function data() {
    return {
      beforePullDown: true,
      isPullingDown: false,
      isPullUpLoad: false,
      pullUpDirty: true,
      bubbleY: 0,
      pullDownStyle: '',
      pullDownStop: 40,
      pullDownHeight: 60
    };
  },

  computed: {
    pullDownRefresh: function pullDownRefresh() {
      var pullDownRefresh = this.options.pullDownRefresh;
      if (!pullDownRefresh) {
        return pullDownRefresh;
      }
      if (pullDownRefresh === true) {
        pullDownRefresh = {};
      }
      return Object.assign({ stop: this.pullDownStop }, pullDownRefresh);
    },
    pullUpLoad: function pullUpLoad() {
      return this.options.pullUpLoad;
    },
    pullUpTxt: function pullUpTxt() {
      var pullUpLoad = this.pullUpLoad;
      var txt = pullUpLoad && pullUpLoad.txt;
      var moreTxt = txt && txt.more || '';
      var noMoreTxt = txt && txt.noMore || '';

      return this.pullUpDirty ? moreTxt : noMoreTxt;
    },
    refreshTxt: function refreshTxt() {
      var pullDownRefresh = this.pullDownRefresh;
      return pullDownRefresh && pullDownRefresh.txt || DEFAULT_REFRESH_TXT;
    },
    finalScrollEvents: function finalScrollEvents() {
      var finalScrollEvents = this.scrollEvents.slice();

      if (!finalScrollEvents.length) {
        this.listenScroll && finalScrollEvents.push(EVENT_SCROLL);
        this.listenBeforeScroll && finalScrollEvents.push(EVENT_BEFORE_SCROLL_START);
      }
      return finalScrollEvents;
    },
    needListenScroll: function needListenScroll() {
      return this.finalScrollEvents.indexOf(EVENT_SCROLL) !== -1 || this.parentScroll;
    }
  },
  watch: {
    data: function data() {
      var _this = this;

      setTimeout(function () {
        _this.forceUpdate(true);
      }, this.refreshDelay);
    },

    pullDownRefresh: {
      handler: function handler(newVal, oldVal) {
        if (newVal) {
          this.scroll.openPullDown(newVal);
          if (!oldVal) {
            this._onPullDownRefresh();
            this._calculateMinHeight();
          }
        }

        if (!newVal && oldVal) {
          this.scroll.closePullDown();
          this._offPullDownRefresh();
          this._calculateMinHeight();
        }
      },

      deep: true
    },
    pullUpLoad: {
      handler: function handler(newVal, oldVal) {
        if (newVal) {
          this.scroll.openPullUp(newVal);
          if (!oldVal) {
            this._onPullUpLoad();
            this._calculateMinHeight();
          }
        }

        if (!newVal && oldVal) {
          this.scroll.closePullUp();
          this._offPullUpLoad();
          this._calculateMinHeight();
        }
      },

      deep: true
    }
  },
  activated: function activated() {
    /* istanbul ignore next */
    this.enable();
  },
  deactivated: function deactivated() {
    /* istanbul ignore next */
    this.disable();
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      _this2.initScroll();
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.destroy();
  },

  methods: {
    initScroll: function initScroll() {
      if (!this.$refs.wrapper) {
        return;
      }
      this._calculateMinHeight();

      var options = Object.assign({}, DEFAULT_OPTIONS, {
        scrollY: this.direction === DIRECTION_V,
        scrollX: this.direction === DIRECTION_H,
        probeType: this.needListenScroll ? 3 : 1
      }, this.options);

      this.scroll = new _betterScroll2.default(this.$refs.wrapper, options);

      this.parentScroll && this.nestMode !== NEST_MODE_NONE && this._handleNestScroll();

      this._listenScrollEvents();

      if (this.pullDownRefresh) {
        this._getPullDownEleHeight();
        this._onPullDownRefresh();
      }

      if (this.pullUpLoad) {
        this._onPullUpLoad();
      }
    },
    disable: function disable() {
      this.scroll && this.scroll.disable();
    },
    enable: function enable() {
      this.scroll && this.scroll.enable();
    },
    refresh: function refresh() {
      this._calculateMinHeight();
      this.scroll && this.scroll.refresh();
    },
    destroy: function destroy() {
      this.scroll && this.scroll.destroy();
      this.scroll = null;
    },
    scrollTo: function scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },
    scrollToElement: function scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    },
    clickItem: function clickItem(item) {
      this.$emit(EVENT_CLICK, item);
    },
    forceUpdate: function forceUpdate() {
      var _this3 = this;

      var dirty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.pullDownRefresh && this.isPullingDown) {
        this.isPullingDown = false;
        this._reboundPullDown(function () {
          _this3._afterPullDown(dirty);
        });
      } else if (this.pullUpLoad && this.isPullUpLoad) {
        this.isPullUpLoad = false;
        this.scroll.finishPullUp();
        this.pullUpDirty = dirty;
        dirty && this.refresh();
      } else {
        dirty && this.refresh();
      }
    },
    resetPullUpTxt: function resetPullUpTxt() {
      this.pullUpDirty = true;
    },
    _listenScrollEvents: function _listenScrollEvents() {
      var _this4 = this;

      this.finalScrollEvents.forEach(function (event) {
        _this4.scroll.on((0, _string.camelize)(event), function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this4.$emit.apply(_this4, [event].concat(args));
        });
      });
    },
    _handleNestScroll: function _handleNestScroll() {
      var _this5 = this;

      // waiting scroll initial
      this.$nextTick(function () {
        var innerScroll = _this5.scroll;
        var outerScroll = _this5.parentScroll.scroll;
        var scrolls = [innerScroll, outerScroll];
        scrolls.forEach(function (scroll, index, arr) {
          // scroll ended always enable them
          scroll.on('touchEnd', function () {
            outerScroll.enable();
            innerScroll.enable();
            // when inner scroll reaching boundary, we will disable inner scroll, so when 'touchend' event fire,
            // the inner scroll will not reset initiated within '_end' method in better-scroll.
            // then lead to inner and outer scrolls together when we touch and move on the outer scroll element,
            // so here we reset inner scroll's 'initiated' manually.
            innerScroll.initiated = false;
          });

          scroll.on('beforeScrollStart', function () {
            _this5.touchStartMoment = true;
            var anotherScroll = arr[(index + 1) % 2];
            anotherScroll.stop();
            anotherScroll.resetPosition();
          });
        });

        innerScroll.on('scroll', function (pos) {
          // if scroll event triggered not by touch event, such as by 'scrollTo' method
          if (!innerScroll.initiated || innerScroll.isInTransition) {
            return;
          }

          if (_this5.nestMode === NEST_MODE_NATIVE && !_this5.touchStartMoment) {
            return;
          }

          var reachBoundary = _this5._checkReachBoundary(pos);
          if (reachBoundary) {
            innerScroll.resetPosition();
            innerScroll.disable();
            // Prevent outer scroll have a bouncing step when enabled in 'free' nestMode.
            outerScroll.pointX = innerScroll.pointX;
            outerScroll.pointY = innerScroll.pointY;
            outerScroll.enable();
          } else {
            outerScroll.disable();
          }
          _this5.touchStartMoment = false;
        });
      });
    },
    _checkReachBoundary: function _checkReachBoundary(pos) {
      var distX = this.scroll.distX;
      var distY = this.scroll.distY;
      var reachBoundaryX = distX > 0 ? pos.x >= this.scroll.minScrollX : distX < 0 ? pos.x <= this.scroll.maxScrollX : false;
      var reachBoundaryY = distY > 0 ? pos.y >= this.scroll.minScrollY : distY < 0 ? pos.y <= this.scroll.maxScrollY : false;
      var freeScroll = this.scroll.freeScroll;

      var reachBoundary = void 0;
      if (freeScroll) {
        return reachBoundaryX || reachBoundaryY;
      }

      if (this.scroll.movingDirectionX) {
        reachBoundary = reachBoundaryX;
      } else if (this.scroll.movingDirectionY) {
        reachBoundary = reachBoundaryY;
      }
      return reachBoundary;
    },
    _calculateMinHeight: function _calculateMinHeight() {
      if (this.$refs.listWrapper) {
        this.$refs.listWrapper.style.minHeight = this.pullDownRefresh || this.pullUpLoad ? (0, _dom.getRect)(this.$refs.wrapper).height + 1 + 'px' : 0;
      }
    },
    _onPullDownRefresh: function _onPullDownRefresh() {
      this.scroll.on('pullingDown', this._pullDownHandle);
      this.scroll.on('scroll', this._pullDownScrollHandle);
    },
    _offPullDownRefresh: function _offPullDownRefresh() {
      this.scroll.off('pullingDown', this._pullDownHandle);
      this.scroll.off('scroll', this._pullDownScrollHandle);
    },
    _pullDownHandle: function _pullDownHandle() {
      if (this.resetPullDownTimer) {
        clearTimeout(this.resetPullDownTimer);
      }
      this.beforePullDown = false;
      this.isPullingDown = true;
      this.$emit(EVENT_PULLING_DOWN);
    },
    _pullDownScrollHandle: function _pullDownScrollHandle(pos) {
      if (this.beforePullDown) {
        this.bubbleY = Math.max(0, pos.y - this.pullDownHeight);
        this.pullDownStyle = 'top:' + Math.min(pos.y - this.pullDownHeight, 0) + 'px';
      } else {
        this.bubbleY = 0;
        this.pullDownStyle = 'top:' + Math.min(pos.y - this.pullDownStop, 0) + 'px';
      }
    },
    _onPullUpLoad: function _onPullUpLoad() {
      this.scroll.on('pullingUp', this._pullUpHandle);
    },
    _offPullUpLoad: function _offPullUpLoad() {
      this.scroll.off('pullingUp', this._pullUpHandle);
    },
    _pullUpHandle: function _pullUpHandle() {
      this.isPullUpLoad = true;
      this.$emit(EVENT_PULLING_UP);
    },
    _reboundPullDown: function _reboundPullDown(next) {
      var _this6 = this;

      var _pullDownRefresh$stop = this.pullDownRefresh.stopTime,
          stopTime = _pullDownRefresh$stop === undefined ? DEFAULT_STOP_TIME : _pullDownRefresh$stop;

      setTimeout(function () {
        _this6.scroll.finishPullDown();
        next();
      }, stopTime);
    },
    _afterPullDown: function _afterPullDown(dirty) {
      var _this7 = this;

      this.resetPullDownTimer = setTimeout(function () {
        _this7.pullDownStyle = 'top: -' + _this7.pullDownHeight + 'px';
        _this7.beforePullDown = true;
        dirty && _this7.refresh();
      }, this.scroll.options.bounceTime);
    },
    _getPullDownEleHeight: function _getPullDownEleHeight() {
      var _this8 = this;

      var pulldown = this.$refs.pulldown.firstChild;
      this.pullDownHeight = (0, _dom.getRect)(pulldown).height;

      this.beforePullDown = false;
      this.isPullingDown = true;
      this.$nextTick(function () {
        _this8.pullDownStop = (0, _dom.getRect)(pulldown).height;

        _this8.beforePullDown = true;
        _this8.isPullingDown = false;
      });
    }
  },
  components: {
    Loading: _loading2.default,
    Bubble: _bubble2.default
  }
};

/***/ }),

/***/ "EEl8":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.supportsPassive = supportsPassive;
exports.createEvent = createEvent;
exports.createBubblesEvent = createBubblesEvent;
exports.createCustomEvent = createCustomEvent;
exports.dispatchNativeEvent = dispatchNativeEvent;


function extend(to) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (!args || args.length <= 0) {
    return to;
  }
  args.forEach(function (from) {
    if ((typeof from === 'undefined' ? 'undefined' : _typeof(from)) !== 'object') {
      return;
    }
    for (var key in from) {
      to[key] = from[key];
    }
  });
  return to;
}

// if support passive event listeners. 支持的浏览器会优化滚动性能：https://segmentfault.com/a/1190000007913386
var _supportsPassive = false;
try {
  document.createElement('div').addEventListener('test', function (_) {}, {
    get passive() {
      _supportsPassive = true;
    }
  });
} catch (e) {
  // do nothing.
}
function supportsPassive() {
  return _supportsPassive;
}

/**
 * Create Event.
 * @param {DOMString} type
 * @param {Object} props
 */
function createEvent(target, type, props) {
  var event = new Event(type, { bubbles: false });

  extend(event, props);
  //  phantomjs don't support customer event
  if (window.navigator.userAgent.toLowerCase().indexOf('phantomjs') !== -1) {
    return event;
  }
  try {
    Object.defineProperty(event, 'target', {
      enumerable: true,
      value: target
    });
  } catch (err) {
    return extend({}, event, { target: target });
  }
  return event;
}

/**
 * Create a bubbable Event.
 * @param {DOMString} type
 * @param {Object} props
 */
function createBubblesEvent(target, type, props) {
  var event = new Event(type, { bubbles: true });
  extend(event, props);
  //  phantomjs don't support customer event
  if (window.navigator.userAgent.toLowerCase().indexOf('phantomjs') !== -1) {
    return event;
  }
  try {
    Object.defineProperty(event, 'target', {
      enumerable: true,
      value: target
    });
  } catch (err) {
    return extend({}, event, { target: target });
  }
  return event;
}

/**
 * Create Custom Event.
 * @param {DOMString} type
 * @param {Object} props
 */
function createCustomEvent(target, type, props) {
  // compatibility: http://caniuse.com/#search=customevent
  // const event = new CustomEvent(type)
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(type, false, true, {});
  // event.preventDefault()
  // event.stopPropagation()

  extend(event, props);

  // event.target is readonly
  try {
    Object.defineProperty(event, 'target', {
      enumerable: true,
      value: target || null
    });
  } catch (err) {
    return extend({}, event, { target: target || null });
  }

  return event;
}

/**
 * dispatch a event on a HTML element.
 * @param  {HTMLElement} elm
 * @param  {Event} type event name.
 * @param  {Object} data extra data.
 */
function dispatchNativeEvent(elm, type, data) {
  elm.dispatchEvent(createEvent(elm, type, data));
}

/***/ }),

/***/ "EK/L":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insideA = insideA;
function insideA(el) {
  if (typeof el._insideA === 'boolean') {
    return el._insideA;
  }
  var parent = el.parentElement;
  var parents = [];
  var checkParents = function checkParents(inside) {
    for (var i = 0, l = parents.length; i < l; i++) {
      parents[i]._insideA = inside;
    }
  };
  var check = function check(inside) {
    el._insideA = inside;
    checkParents(inside);
    return inside;
  };
  while (parent && parent !== document.body) {
    if (parent.tagName.toLowerCase() === 'a') {
      return check(true);
    }
    if (typeof parent._insideA === 'boolean') {
      return check(parent._insideA);
    }
    parents.push(parent);
    parent = parent.parentElement;
  }
  return check(false);
}

/***/ }),

/***/ "EYO0":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = getSystemInfo;

var _index = __webpack_require__("4Qds");

var _index2 = _interopRequireDefault(_index);

var _utils = __webpack_require__("z4ZC");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSystemInfo() {
  return new Promise(function (resolve, reject) {
    _index2.default.getSystemInfo(function (res) {
      res.extraParams = (0, _utils.tryJsonParse)(res.extraParams);
      // px2viewpx
      var pxRpxRate = 750 / res.viewportWidth;
      var viewportHeight = (res.viewportHeight * pxRpxRate).toFixed(3);
      var viewportWidth = (res.viewportWidth * pxRpxRate).toFixed(3);

      if (res.os) {
        resolve(_extends({}, res, {
          viewportHeight: viewportHeight,
          viewportWidth: viewportWidth
        }));
      } else {
        reject(res);
      }
    });
  });
}

/***/ }),

/***/ "Eo+l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_bubble_vue__ = __webpack_require__("qvX/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_bubble_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_bubble_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_bubble_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_bubble_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_292b3aea_hasScoped_false_optionsId_1_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_bubble_vue__ = __webpack_require__("1BE8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_bubble_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_292b3aea_hasScoped_false_optionsId_1_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_bubble_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_292b3aea_hasScoped_false_optionsId_1_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_bubble_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/cube-ui/src/components/bubble/bubble.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-292b3aea", Component.options)
  } else {
    hotAPI.reload("data-v-292b3aea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "FND0":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("+iRC");

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index3 = __webpack_require__("FSU9");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__("HR9g");

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } //
//
//
//
//
//
//
//

var Index = function Index() {
  _classCallCheck(this, Index);

  this.data = {
    dataList: _index5.dataList
  };
  this.methods = {
    onItemSelect: function onItemSelect(e) {
      (0, _index2.default)({
        message: JSON.stringify(e.detail),
        duration: 1000
      });
    }
  };
};

exports.default = new Index();


exports.default.components = _extends({}, exports.default.components, { indexlist: _index4.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "FSU9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__ = __webpack_require__("xmar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_7bcfe391_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__ = __webpack_require__("LjcS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("Q9kK")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7bcfe391"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_7bcfe391_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_7bcfe391_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/indexlist2/index.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7bcfe391", Component.options)
  } else {
    hotAPI.reload("data-v-7bcfe391", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "G8cg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.show
    ? _c(
        "div",
        {
          staticClass: "c-popup  cml-base cml-view",
          style: _vm._cmlStyleProxy(_vm.containerStyle, {
            rem: true,
            scale: 0.5,
            remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
            autoprefixOptions: {
              browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
              grid: false
            }
          }),
          attrs: {}
        },
        [
          _c("div", {
            class: _vm.maskClass + "  cml-base cml-view",
            attrs: { "data-evt-click": "" },
            on: {
              click: _vm.$stopOuterA,
              cml$tap: function($event) {
                _vm._cmlEventProxy($event, "closeevent")
              }
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "c-popup-content  cml-base cml-view",
              style: _vm._cmlStyleProxy(_vm.contentStyle, {
                rem: true,
                scale: 0.5,
                remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
                autoprefixOptions: {
                  browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                  grid: false
                }
              }),
              attrs: { "data-evt-click": "" },
              on: {
                click: _vm.$stopOuterA,
                cml$tap: function($event) {
                  _vm._cmlEventProxy($event, "contentTap")
                }
              }
            },
            [_vm._t("default", null, {})],
            2
          )
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-33f99648", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "G8qx":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", {
  value: true
});

var _instance = __webpack_require__("xfCQ");

var _instance2 = _interopRequireDefault(_instance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.global = window;
exports.default = global.chameleon = _instance2.default;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("PvPp")))

/***/ }),

/***/ "GQaK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/*!
 * better-normal-scroll v1.12.6
 * (c) 2016-2018 ustbhuangyi
 * Released under the MIT License.
 */
var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function eventMixin(BScroll) {
  BScroll.prototype.on = function (type, fn) {
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

    if (!this._events[type]) {
      this._events[type] = [];
    }

    this._events[type].push([fn, context]);
  };

  BScroll.prototype.once = function (type, fn) {
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

    function magic() {
      this.off(type, magic);

      fn.apply(context, arguments);
    }
    // To expose the corresponding function method in order to execute the off method
    magic.fn = fn;

    this.on(type, magic);
  };

  BScroll.prototype.off = function (type, fn) {
    var _events = this._events[type];
    if (!_events) {
      return;
    }

    var count = _events.length;
    while (count--) {
      if (_events[count][0] === fn || _events[count][0] && _events[count][0].fn === fn) {
        _events[count][0] = undefined;
      }
    }
  };

  BScroll.prototype.trigger = function (type) {
    var events = this._events[type];
    if (!events) {
      return;
    }

    var len = events.length;
    var eventsCopy = [].concat(toConsumableArray(events));
    for (var i = 0; i < len; i++) {
      var event = eventsCopy[i];

      var _event = slicedToArray(event, 2),
          fn = _event[0],
          context = _event[1];

      if (fn) {
        fn.apply(context, [].slice.call(arguments, 1));
      }
    }
  };
}

// ssr support
var inBrowser = typeof window !== 'undefined';
var ua = inBrowser && navigator.userAgent.toLowerCase();
var isWeChatDevTools = ua && /wechatdevtools/.test(ua);
var isAndroid = ua && ua.indexOf('android') > 0;

function getNow() {
  return window.performance && window.performance.now ? window.performance.now() + window.performance.timing.navigationStart : +new Date();
}

function extend(target) {
  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  for (var i = 0; i < rest.length; i++) {
    var source = rest[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target;
}

function isUndef(v) {
  return v === undefined || v === null;
}

function getDistance(x, y) {
  return Math.sqrt(x * x + y * y);
}

var elementStyle = inBrowser && document.createElement('div').style;

var vendor = function () {
  if (!inBrowser) {
    return false;
  }
  var transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  };

  for (var key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key;
    }
  }

  return false;
}();

function prefixStyle(style) {
  if (vendor === false) {
    return false;
  }

  if (vendor === 'standard') {
    if (style === 'transitionEnd') {
      return 'transitionend';
    }
    return style;
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1);
}

function addEvent(el, type, fn, capture) {
  el.addEventListener(type, fn, { passive: false, capture: !!capture });
}

function removeEvent(el, type, fn, capture) {
  el.removeEventListener(type, fn, { passive: false, capture: !!capture });
}

function offset(el) {
  var left = 0;
  var top = 0;

  while (el) {
    left -= el.offsetLeft;
    top -= el.offsetTop;
    el = el.offsetParent;
  }

  return {
    left: left,
    top: top
  };
}

function offsetToBody(el) {
  var rect = el.getBoundingClientRect();

  return {
    left: -(rect.left + window.pageXOffset),
    top: -(rect.top + window.pageYOffset)
  };
}

var transform = prefixStyle('transform');

var hasPerspective = inBrowser && prefixStyle('perspective') in elementStyle;
// fix issue #361
var hasTouch = inBrowser && ('ontouchstart' in window || isWeChatDevTools);
var hasTransform = transform !== false;
var hasTransition = inBrowser && prefixStyle('transition') in elementStyle;

var style = {
  transform: transform,
  transitionTimingFunction: prefixStyle('transitionTimingFunction'),
  transitionDuration: prefixStyle('transitionDuration'),
  transitionDelay: prefixStyle('transitionDelay'),
  transformOrigin: prefixStyle('transformOrigin'),
  transitionEnd: prefixStyle('transitionEnd')
};

var TOUCH_EVENT = 1;
var MOUSE_EVENT = 2;

var eventType = {
  touchstart: TOUCH_EVENT,
  touchmove: TOUCH_EVENT,
  touchend: TOUCH_EVENT,

  mousedown: MOUSE_EVENT,
  mousemove: MOUSE_EVENT,
  mouseup: MOUSE_EVENT
};

function getRect(el) {
  if (el instanceof window.SVGElement) {
    var rect = el.getBoundingClientRect();
    return {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    };
  } else {
    return {
      top: el.offsetTop,
      left: el.offsetLeft,
      width: el.offsetWidth,
      height: el.offsetHeight
    };
  }
}

function preventDefaultException(el, exceptions) {
  for (var i in exceptions) {
    if (exceptions[i].test(el[i])) {
      return true;
    }
  }
  return false;
}

function tap(e, eventName) {
  var ev = document.createEvent('Event');
  ev.initEvent(eventName, true, true);
  ev.pageX = e.pageX;
  ev.pageY = e.pageY;
  e.target.dispatchEvent(ev);
}

function click(e) {
  var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'click';

  var eventSource = void 0;
  if (e.type === 'mouseup' || e.type === 'mousecancel') {
    eventSource = e;
  } else if (e.type === 'touchend' || e.type === 'touchcancel') {
    eventSource = e.changedTouches[0];
  }
  var posSrc = {};
  if (eventSource) {
    posSrc.screenX = eventSource.screenX || 0;
    posSrc.screenY = eventSource.screenY || 0;
    posSrc.clientX = eventSource.clientX || 0;
    posSrc.clientY = eventSource.clientY || 0;
  }
  var ev = void 0;
  var bubbles = true;
  var cancelable = true;
  if (typeof MouseEvent !== 'undefined') {
    try {
      ev = new MouseEvent(event, extend({
        bubbles: bubbles,
        cancelable: cancelable
      }, posSrc));
    } catch (e) {
      createEvent();
    }
  } else {
    createEvent();
  }

  function createEvent() {
    ev = document.createEvent('Event');
    ev.initEvent(event, bubbles, cancelable);
    extend(ev, posSrc);
  }

  // forwardedTouchEvent set to true in case of the conflict with fastclick
  ev.forwardedTouchEvent = true;
  ev._constructed = true;
  e.target.dispatchEvent(ev);
}

function dblclick(e) {
  click(e, 'dblclick');
}

function prepend(el, target) {
  if (target.firstChild) {
    before(el, target.firstChild);
  } else {
    target.appendChild(el);
  }
}

function before(el, target) {
  target.parentNode.insertBefore(el, target);
}

function removeChild(el, child) {
  el.removeChild(child);
}

var DEFAULT_OPTIONS = {
  startX: 0,
  startY: 0,
  scrollX: false,
  scrollY: true,
  freeScroll: false,
  directionLockThreshold: 5,
  eventPassthrough: '',
  click: false,
  tap: false,
  /**
   * support any side
   * bounce: {
   *   top: true,
   *   bottom: true,
   *   left: true,
   *   right: true
   * }
   */
  bounce: true,
  bounceTime: 800,
  momentum: true,
  momentumLimitTime: 300,
  momentumLimitDistance: 15,
  swipeTime: 2500,
  swipeBounceTime: 500,
  deceleration: 0.0015,
  flickLimitTime: 200,
  flickLimitDistance: 100,
  resizePolling: 60,
  probeType: 0,
  preventDefault: true,
  preventDefaultException: {
    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
  },
  HWCompositing: true,
  useTransition: true,
  useTransform: true,
  bindToWrapper: false,
  disableMouse: hasTouch,
  disableTouch: !hasTouch,
  observeDOM: true,
  autoBlur: true,
  /**
   * for picker
   * wheel: {
   *   selectedIndex: 0,
   *   rotate: 25,
   *   adjustTime: 400
   *   wheelWrapperClass: 'wheel-scroll',
   *   wheelItemClass: 'wheel-item'
   * }
   */
  wheel: false,
  /**
   * for slide
   * snap: {
   *   loop: false,
   *   el: domEl,
   *   threshold: 0.1,
   *   stepX: 100,
   *   stepY: 100,
   *   speed: 400,
   *   easing: {
   *     style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
   *     fn: function (t) {
   *       return t * (2 - t)
   *     }
   *   }
   *   listenFlick: true
   * }
   */
  snap: false,
  /**
   * for scrollbar
   * scrollbar: {
   *   fade: true,
   *   interactive: false
   * }
   */
  scrollbar: false,
  /**
   * for pull down and refresh
   * pullDownRefresh: {
   *   threshold: 50,
   *   stop: 20
   * }
   */
  pullDownRefresh: false,
  /**
   * for pull up and load
   * pullUpLoad: {
   *   threshold: 50
   * }
   */
  pullUpLoad: false,
  /**
   * for mouse wheel
   * mouseWheel: {
   *   speed: 20,
   *   invert: false,
   *   easeTime: 300
   * }
   */
  mouseWheel: false,
  stopPropagation: false,
  /**
   * for zoom
   * zoom: {
   *   start: 1,
   *   min: 1,
   *   max: 4
   * }
   */
  zoom: false,
  /**
   * for infinity
   * infinity: {
   *   render(item, div) {
   *   },
   *   createTombstone() {
   *   },
   *   fetch(count) {
   *   }
   * }
   */
  infinity: false,
  /**
   * for double click
   * dblclick: {
   *   delay: 300
   * }
   */
  dblclick: false
};

function initMixin(BScroll) {
  BScroll.prototype._init = function (el, options) {
    this._handleOptions(options);

    // init private custom events
    this._events = {};

    this.x = 0;
    this.y = 0;
    this.directionX = 0;
    this.directionY = 0;

    this.setScale(1);

    this._addDOMEvents();

    this._initExtFeatures();

    this._watchTransition();

    if (this.options.observeDOM) {
      this._initDOMObserver();
    }

    if (this.options.autoBlur) {
      this._handleAutoBlur();
    }

    this.refresh();

    if (!this.options.snap) {
      this.scrollTo(this.options.startX, this.options.startY);
    }

    this.enable();
  };

  BScroll.prototype.setScale = function (scale) {
    this.lastScale = isUndef(this.scale) ? scale : this.scale;
    this.scale = scale;
  };

  BScroll.prototype._handleOptions = function (options) {
    this.options = extend({}, DEFAULT_OPTIONS, options);

    this.translateZ = this.options.HWCompositing && hasPerspective ? ' translateZ(0)' : '';

    this.options.useTransition = this.options.useTransition && hasTransition;
    this.options.useTransform = this.options.useTransform && hasTransform;

    this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

    // If you want eventPassthrough I have to lock one of the axes
    this.options.scrollX = this.options.eventPassthrough === 'horizontal' ? false : this.options.scrollX;
    this.options.scrollY = this.options.eventPassthrough === 'vertical' ? false : this.options.scrollY;

    // With eventPassthrough we also need lockDirection mechanism
    this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
    this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

    if (this.options.tap === true) {
      this.options.tap = 'tap';
    }
  };

  BScroll.prototype._addDOMEvents = function () {
    var eventOperation = addEvent;
    this._handleDOMEvents(eventOperation);
  };

  BScroll.prototype._removeDOMEvents = function () {
    var eventOperation = removeEvent;
    this._handleDOMEvents(eventOperation);
  };

  BScroll.prototype._handleDOMEvents = function (eventOperation) {
    var target = this.options.bindToWrapper ? this.wrapper : window;
    eventOperation(window, 'orientationchange', this);
    eventOperation(window, 'resize', this);

    if (this.options.click) {
      eventOperation(this.wrapper, 'click', this, true);
    }

    if (!this.options.disableMouse) {
      eventOperation(this.wrapper, 'mousedown', this);
      eventOperation(target, 'mousemove', this);
      eventOperation(target, 'mousecancel', this);
      eventOperation(target, 'mouseup', this);
    }

    if (hasTouch && !this.options.disableTouch) {
      eventOperation(this.wrapper, 'touchstart', this);
      eventOperation(target, 'touchmove', this);
      eventOperation(target, 'touchcancel', this);
      eventOperation(target, 'touchend', this);
    }

    eventOperation(this.scroller, style.transitionEnd, this);
  };

  BScroll.prototype._initExtFeatures = function () {
    if (this.options.snap) {
      this._initSnap();
    }
    if (this.options.scrollbar) {
      this._initScrollbar();
    }
    if (this.options.pullUpLoad) {
      this._initPullUp();
    }
    if (this.options.pullDownRefresh) {
      this._initPullDown();
    }
    if (this.options.wheel) {
      this._initWheel();
    }
    if (this.options.mouseWheel) {
      this._initMouseWheel();
    }
    if (this.options.zoom) {
      this._initZoom();
    }
    if (this.options.infinity) {
      this._initInfinite();
    }
  };

  BScroll.prototype._watchTransition = function () {
    if (typeof Object.defineProperty !== 'function') {
      return;
    }
    var me = this;
    var isInTransition = false;
    var key = this.useTransition ? 'isInTransition' : 'isAnimating';
    Object.defineProperty(this, key, {
      get: function get() {
        return isInTransition;
      },
      set: function set(newVal) {
        isInTransition = newVal;
        // fix issue #359
        var el = me.scroller.children.length ? me.scroller.children : [me.scroller];
        var pointerEvents = isInTransition && !me.pulling ? 'none' : 'auto';
        for (var i = 0; i < el.length; i++) {
          el[i].style.pointerEvents = pointerEvents;
        }
      }
    });
  };

  BScroll.prototype._handleAutoBlur = function () {
    this.on('scrollStart', function () {
      var activeElement = document.activeElement;
      if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
        activeElement.blur();
      }
    });
  };

  BScroll.prototype._initDOMObserver = function () {
    var _this = this;

    if (typeof MutationObserver !== 'undefined') {
      var timer = void 0;
      var observer = new MutationObserver(function (mutations) {
        // don't do any refresh during the transition, or outside of the boundaries
        if (_this._shouldNotRefresh()) {
          return;
        }
        var immediateRefresh = false;
        var deferredRefresh = false;
        for (var i = 0; i < mutations.length; i++) {
          var mutation = mutations[i];
          if (mutation.type !== 'attributes') {
            immediateRefresh = true;
            break;
          } else {
            if (mutation.target !== _this.scroller) {
              deferredRefresh = true;
              break;
            }
          }
        }
        if (immediateRefresh) {
          _this.refresh();
        } else if (deferredRefresh) {
          // attributes changes too often
          clearTimeout(timer);
          timer = setTimeout(function () {
            if (!_this._shouldNotRefresh()) {
              _this.refresh();
            }
          }, 60);
        }
      });
      var config = {
        attributes: true,
        childList: true,
        subtree: true
      };
      observer.observe(this.scroller, config);

      this.on('destroy', function () {
        observer.disconnect();
      });
    } else {
      this._checkDOMUpdate();
    }
  };

  BScroll.prototype._shouldNotRefresh = function () {
    var outsideBoundaries = this.x > this.minScrollX || this.x < this.maxScrollX || this.y > this.minScrollY || this.y < this.maxScrollY;

    return this.isInTransition || this.stopFromTransition || outsideBoundaries;
  };

  BScroll.prototype._checkDOMUpdate = function () {
    var scrollerRect = getRect(this.scroller);
    var oldWidth = scrollerRect.width;
    var oldHeight = scrollerRect.height;

    function check() {
      if (this.destroyed) {
        return;
      }
      scrollerRect = getRect(this.scroller);
      var newWidth = scrollerRect.width;
      var newHeight = scrollerRect.height;

      if (oldWidth !== newWidth || oldHeight !== newHeight) {
        this.refresh();
      }
      oldWidth = newWidth;
      oldHeight = newHeight;

      next.call(this);
    }

    function next() {
      var _this2 = this;

      setTimeout(function () {
        check.call(_this2);
      }, 1000);
    }

    next.call(this);
  };

  BScroll.prototype.handleEvent = function (e) {
    switch (e.type) {
      case 'touchstart':
      case 'mousedown':
        this._start(e);
        if (this.options.zoom && e.touches && e.touches.length > 1) {
          this._zoomStart(e);
        }
        break;
      case 'touchmove':
      case 'mousemove':
        if (this.options.zoom && e.touches && e.touches.length > 1) {
          this._zoom(e);
        } else {
          this._move(e);
        }
        break;
      case 'touchend':
      case 'mouseup':
      case 'touchcancel':
      case 'mousecancel':
        if (this.scaled) {
          this._zoomEnd(e);
        } else {
          this._end(e);
        }
        break;
      case 'orientationchange':
      case 'resize':
        this._resize();
        break;
      case 'transitionend':
      case 'webkitTransitionEnd':
      case 'oTransitionEnd':
      case 'MSTransitionEnd':
        this._transitionEnd(e);
        break;
      case 'click':
        if (this.enabled && !e._constructed) {
          if (!preventDefaultException(e.target, this.options.preventDefaultException)) {
            e.preventDefault();
            e.stopPropagation();
          }
        }
        break;
      case 'wheel':
      case 'DOMMouseScroll':
      case 'mousewheel':
        this._onMouseWheel(e);
        break;
    }
  };

  BScroll.prototype.refresh = function () {
    var isWrapperStatic = window.getComputedStyle(this.wrapper, null).position === 'static';
    var wrapperRect = getRect(this.wrapper);
    this.wrapperWidth = wrapperRect.width;
    this.wrapperHeight = wrapperRect.height;

    var scrollerRect = getRect(this.scroller);
    this.scrollerWidth = Math.round(scrollerRect.width * this.scale);
    this.scrollerHeight = Math.round(scrollerRect.height * this.scale);

    this.relativeX = scrollerRect.left;
    this.relativeY = scrollerRect.top;

    if (isWrapperStatic) {
      this.relativeX -= wrapperRect.left;
      this.relativeY -= wrapperRect.top;
    }

    this.minScrollX = 0;
    this.minScrollY = 0;

    var wheel = this.options.wheel;
    if (wheel) {
      this.items = this.scroller.children;
      this.options.itemHeight = this.itemHeight = this.items.length ? this.scrollerHeight / this.items.length : 0;
      if (this.selectedIndex === undefined) {
        this.selectedIndex = wheel.selectedIndex || 0;
      }
      this.options.startY = -this.selectedIndex * this.itemHeight;
      this.maxScrollX = 0;
      this.maxScrollY = -this.itemHeight * (this.items.length - 1);
    } else {
      this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
      if (!this.options.infinity) {
        this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
      }
      if (this.maxScrollX < 0) {
        this.maxScrollX -= this.relativeX;
        this.minScrollX = -this.relativeX;
      } else if (this.scale > 1) {
        this.maxScrollX = this.maxScrollX / 2 - this.relativeX;
        this.minScrollX = this.maxScrollX;
      }
      if (this.maxScrollY < 0) {
        this.maxScrollY -= this.relativeY;
        this.minScrollY = -this.relativeY;
      } else if (this.scale > 1) {
        this.maxScrollY = this.maxScrollY / 2 - this.relativeY;
        this.minScrollY = this.maxScrollY;
      }
    }

    this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < this.minScrollX;
    this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < this.minScrollY;

    if (!this.hasHorizontalScroll) {
      this.maxScrollX = this.minScrollX;
      this.scrollerWidth = this.wrapperWidth;
    }

    if (!this.hasVerticalScroll) {
      this.maxScrollY = this.minScrollY;
      this.scrollerHeight = this.wrapperHeight;
    }

    this.endTime = 0;
    this.directionX = 0;
    this.directionY = 0;
    this.wrapperOffset = offset(this.wrapper);

    this.trigger('refresh');

    !this.scaled && this.resetPosition();
  };

  BScroll.prototype.enable = function () {
    this.enabled = true;
  };

  BScroll.prototype.disable = function () {
    this.enabled = false;
  };
}

var ease = {
  // easeOutQuint
  swipe: {
    style: 'cubic-bezier(0.23, 1, 0.32, 1)',
    fn: function fn(t) {
      return 1 + --t * t * t * t * t;
    }
  },
  // easeOutQuard
  swipeBounce: {
    style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    fn: function fn(t) {
      return t * (2 - t);
    }
  },
  // easeOutQuart
  bounce: {
    style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    fn: function fn(t) {
      return 1 - --t * t * t * t;
    }
  }
};

function momentum(current, start, time, lowerMargin, upperMargin, wrapperSize, options) {
  var distance = current - start;
  var speed = Math.abs(distance) / time;

  var deceleration = options.deceleration,
      itemHeight = options.itemHeight,
      swipeBounceTime = options.swipeBounceTime,
      wheel = options.wheel,
      swipeTime = options.swipeTime;

  var duration = swipeTime;
  var rate = wheel ? 4 : 15;

  var destination = current + speed / deceleration * (distance < 0 ? -1 : 1);

  if (wheel && itemHeight) {
    destination = Math.round(destination / itemHeight) * itemHeight;
  }

  if (destination < lowerMargin) {
    destination = wrapperSize ? Math.max(lowerMargin - wrapperSize / 4, lowerMargin - wrapperSize / rate * speed) : lowerMargin;
    duration = swipeBounceTime;
  } else if (destination > upperMargin) {
    destination = wrapperSize ? Math.min(upperMargin + wrapperSize / 4, upperMargin + wrapperSize / rate * speed) : upperMargin;
    duration = swipeBounceTime;
  }

  return {
    destination: Math.round(destination),
    duration: duration
  };
}

var DEFAULT_INTERVAL = 100 / 60;

function noop() {}

var requestAnimationFrame = function () {
  if (!inBrowser) {
    /* istanbul ignore if */
    return noop;
  }
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
  // if all else fails, use setTimeout
  function (callback) {
    return window.setTimeout(callback, (callback.interval || DEFAULT_INTERVAL) / 2); // make interval as precise as possible.
  };
}();

var cancelAnimationFrame = function () {
  if (!inBrowser) {
    /* istanbul ignore if */
    return noop;
  }
  return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
    window.clearTimeout(id);
  };
}();

var DIRECTION_UP = 1;
var DIRECTION_DOWN = -1;
var DIRECTION_LEFT = 1;
var DIRECTION_RIGHT = -1;

var PROBE_DEBOUNCE = 1;

var PROBE_REALTIME = 3;

function warn(msg) {
  console.error('[BScroll warn]: ' + msg);
}

function assert(condition, msg) {
  if (!condition) {
    throw new Error('[BScroll] ' + msg);
  }
}

function coreMixin(BScroll) {
  BScroll.prototype._start = function (e) {
    var _eventType = eventType[e.type];
    if (_eventType !== TOUCH_EVENT) {
      if (e.button !== 0) {
        return;
      }
    }
    if (!this.enabled || this.destroyed || this.initiated && this.initiated !== _eventType) {
      return;
    }
    this.initiated = _eventType;

    if (this.options.preventDefault && !preventDefaultException(e.target, this.options.preventDefaultException)) {
      e.preventDefault();
    }
    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    this.moved = false;
    this.distX = 0;
    this.distY = 0;
    this.directionX = 0;
    this.directionY = 0;
    this.movingDirectionX = 0;
    this.movingDirectionY = 0;
    this.directionLocked = 0;

    this._transitionTime();
    this.startTime = getNow();

    if (this.options.wheel) {
      this.target = e.target;
    }

    this.stop();

    var point = e.touches ? e.touches[0] : e;

    this.startX = this.x;
    this.startY = this.y;
    this.absStartX = this.x;
    this.absStartY = this.y;
    this.pointX = point.pageX;
    this.pointY = point.pageY;

    this.trigger('beforeScrollStart');
  };

  BScroll.prototype._move = function (e) {
    if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
      return;
    }

    if (this.options.preventDefault) {
      e.preventDefault();
    }
    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    var point = e.touches ? e.touches[0] : e;
    var deltaX = point.pageX - this.pointX;
    var deltaY = point.pageY - this.pointY;

    this.pointX = point.pageX;
    this.pointY = point.pageY;

    this.distX += deltaX;
    this.distY += deltaY;

    var absDistX = Math.abs(this.distX);
    var absDistY = Math.abs(this.distY);

    var timestamp = getNow();

    // We need to move at least momentumLimitDistance pixels for the scrolling to initiate
    if (timestamp - this.endTime > this.options.momentumLimitTime && absDistY < this.options.momentumLimitDistance && absDistX < this.options.momentumLimitDistance) {
      return;
    }

    // If you are scrolling in one direction lock the other
    if (!this.directionLocked && !this.options.freeScroll) {
      if (absDistX > absDistY + this.options.directionLockThreshold) {
        this.directionLocked = 'h'; // lock horizontally
      } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
        this.directionLocked = 'v'; // lock vertically
      } else {
        this.directionLocked = 'n'; // no lock
      }
    }

    if (this.directionLocked === 'h') {
      if (this.options.eventPassthrough === 'vertical') {
        e.preventDefault();
      } else if (this.options.eventPassthrough === 'horizontal') {
        this.initiated = false;
        return;
      }
      deltaY = 0;
    } else if (this.directionLocked === 'v') {
      if (this.options.eventPassthrough === 'horizontal') {
        e.preventDefault();
      } else if (this.options.eventPassthrough === 'vertical') {
        this.initiated = false;
        return;
      }
      deltaX = 0;
    }

    deltaX = this.hasHorizontalScroll ? deltaX : 0;
    deltaY = this.hasVerticalScroll ? deltaY : 0;
    this.movingDirectionX = deltaX > 0 ? DIRECTION_RIGHT : deltaX < 0 ? DIRECTION_LEFT : 0;
    this.movingDirectionY = deltaY > 0 ? DIRECTION_DOWN : deltaY < 0 ? DIRECTION_UP : 0;

    var newX = this.x + deltaX;
    var newY = this.y + deltaY;

    var top = false;
    var bottom = false;
    var left = false;
    var right = false;
    // Slow down or stop if outside of the boundaries
    var bounce = this.options.bounce;
    if (bounce !== false) {
      top = bounce.top === undefined ? true : bounce.top;
      bottom = bounce.bottom === undefined ? true : bounce.bottom;
      left = bounce.left === undefined ? true : bounce.left;
      right = bounce.right === undefined ? true : bounce.right;
    }
    if (newX > this.minScrollX || newX < this.maxScrollX) {
      if (newX > this.minScrollX && left || newX < this.maxScrollX && right) {
        newX = this.x + deltaX / 3;
      } else {
        newX = newX > this.minScrollX ? this.minScrollX : this.maxScrollX;
      }
    }
    if (newY > this.minScrollY || newY < this.maxScrollY) {
      if (newY > this.minScrollY && top || newY < this.maxScrollY && bottom) {
        newY = this.y + deltaY / 3;
      } else {
        newY = newY > this.minScrollY ? this.minScrollY : this.maxScrollY;
      }
    }

    if (!this.moved) {
      this.moved = true;
      this.trigger('scrollStart');
    }

    this._translate(newX, newY);

    if (timestamp - this.startTime > this.options.momentumLimitTime) {
      this.startTime = timestamp;
      this.startX = this.x;
      this.startY = this.y;

      if (this.options.probeType === PROBE_DEBOUNCE) {
        this.trigger('scroll', {
          x: this.x,
          y: this.y
        });
      }
    }

    if (this.options.probeType > PROBE_DEBOUNCE) {
      this.trigger('scroll', {
        x: this.x,
        y: this.y
      });
    }

    var scrollLeft = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

    var pX = this.pointX - scrollLeft;
    var pY = this.pointY - scrollTop;

    if (pX > document.documentElement.clientWidth - this.options.momentumLimitDistance || pX < this.options.momentumLimitDistance || pY < this.options.momentumLimitDistance || pY > document.documentElement.clientHeight - this.options.momentumLimitDistance) {
      this._end(e);
    }
  };

  BScroll.prototype._end = function (e) {
    if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
      return;
    }
    this.initiated = false;

    if (this.options.preventDefault && !preventDefaultException(e.target, this.options.preventDefaultException)) {
      e.preventDefault();
    }
    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    this.trigger('touchEnd', {
      x: this.x,
      y: this.y
    });

    this.isInTransition = false;

    // ensures that the last position is rounded
    var newX = Math.round(this.x);
    var newY = Math.round(this.y);

    var deltaX = newX - this.absStartX;
    var deltaY = newY - this.absStartY;
    this.directionX = deltaX > 0 ? DIRECTION_RIGHT : deltaX < 0 ? DIRECTION_LEFT : 0;
    this.directionY = deltaY > 0 ? DIRECTION_DOWN : deltaY < 0 ? DIRECTION_UP : 0;

    // if configure pull down refresh, check it first
    if (this.options.pullDownRefresh && this._checkPullDown()) {
      return;
    }

    // check if it is a click operation
    if (this._checkClick(e)) {
      this.trigger('scrollCancel');
      return;
    }

    // reset if we are outside of the boundaries
    if (this.resetPosition(this.options.bounceTime, ease.bounce)) {
      return;
    }

    this._translate(newX, newY);

    this.endTime = getNow();
    var duration = this.endTime - this.startTime;
    var absDistX = Math.abs(newX - this.startX);
    var absDistY = Math.abs(newY - this.startY);

    // flick
    if (this._events.flick && duration < this.options.flickLimitTime && absDistX < this.options.flickLimitDistance && absDistY < this.options.flickLimitDistance) {
      this.trigger('flick');
      return;
    }

    var time = 0;
    // start momentum animation if needed
    if (this.options.momentum && duration < this.options.momentumLimitTime && (absDistY > this.options.momentumLimitDistance || absDistX > this.options.momentumLimitDistance)) {
      var top = false;
      var bottom = false;
      var left = false;
      var right = false;
      var bounce = this.options.bounce;
      if (bounce !== false) {
        top = bounce.top === undefined ? true : bounce.top;
        bottom = bounce.bottom === undefined ? true : bounce.bottom;
        left = bounce.left === undefined ? true : bounce.left;
        right = bounce.right === undefined ? true : bounce.right;
      }
      var wrapperWidth = this.directionX === DIRECTION_RIGHT && left || this.directionX === DIRECTION_LEFT && right ? this.wrapperWidth : 0;
      var wrapperHeight = this.directionY === DIRECTION_DOWN && top || this.directionY === DIRECTION_UP && bottom ? this.wrapperHeight : 0;
      var momentumX = this.hasHorizontalScroll ? momentum(this.x, this.startX, duration, this.maxScrollX, this.minScrollX, wrapperWidth, this.options) : { destination: newX, duration: 0 };
      var momentumY = this.hasVerticalScroll ? momentum(this.y, this.startY, duration, this.maxScrollY, this.minScrollY, wrapperHeight, this.options) : { destination: newY, duration: 0 };
      newX = momentumX.destination;
      newY = momentumY.destination;
      time = Math.max(momentumX.duration, momentumY.duration);
      this.isInTransition = true;
    } else {
      if (this.options.wheel) {
        newY = Math.round(newY / this.itemHeight) * this.itemHeight;
        time = this.options.wheel.adjustTime || 400;
      }
    }

    var easing = ease.swipe;
    if (this.options.snap) {
      var snap = this._nearestSnap(newX, newY);
      this.currentPage = snap;
      time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
      newX = snap.x;
      newY = snap.y;

      this.directionX = 0;
      this.directionY = 0;
      easing = this.options.snap.easing || ease.bounce;
    }

    if (newX !== this.x || newY !== this.y) {
      // change easing function when scroller goes out of the boundaries
      if (newX > this.minScrollX || newX < this.maxScrollX || newY > this.minScrollY || newY < this.maxScrollY) {
        easing = ease.swipeBounce;
      }
      this.scrollTo(newX, newY, time, easing);
      return;
    }

    if (this.options.wheel) {
      this.selectedIndex = Math.round(Math.abs(this.y / this.itemHeight));
    }
    this.trigger('scrollEnd', {
      x: this.x,
      y: this.y
    });
  };

  BScroll.prototype._checkClick = function (e) {
    // when in the process of pulling down, it should not prevent click
    var preventClick = this.stopFromTransition && !this.pulling;
    this.stopFromTransition = false;

    // we scrolled less than 15 pixels
    if (!this.moved) {
      if (this.options.wheel) {
        if (this.target && this.target.classList.contains(this.options.wheel.wheelWrapperClass)) {
          var index = Math.abs(Math.round(this.y / this.itemHeight));
          var _offset = Math.round((this.pointY + offsetToBody(this.wrapper).top - this.wrapperHeight / 2) / this.itemHeight);
          this.target = this.items[index + _offset];
        }
        this.scrollToElement(this.target, this.options.wheel.adjustTime || 400, true, true, ease.swipe);
        return true;
      } else {
        if (!preventClick) {
          var _dblclick = this.options.dblclick;
          var dblclickTrigged = false;
          if (_dblclick && this.lastClickTime) {
            var _dblclick$delay = _dblclick.delay,
                delay = _dblclick$delay === undefined ? 300 : _dblclick$delay;

            if (getNow() - this.lastClickTime < delay) {
              dblclickTrigged = true;
              dblclick(e);
            }
          }
          if (this.options.tap) {
            tap(e, this.options.tap);
          }

          if (this.options.click && !preventDefaultException(e.target, this.options.preventDefaultException)) {
            click(e);
          }
          this.lastClickTime = dblclickTrigged ? null : getNow();
          return true;
        }
        return false;
      }
    }
    return false;
  };

  BScroll.prototype._resize = function () {
    var _this = this;

    if (!this.enabled) {
      return;
    }
    // fix a scroll problem under Android condition
    if (isAndroid) {
      this.wrapper.scrollTop = 0;
    }
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(function () {
      _this.refresh();
    }, this.options.resizePolling);
  };

  BScroll.prototype._startProbe = function () {
    cancelAnimationFrame(this.probeTimer);
    this.probeTimer = requestAnimationFrame(probe);

    var me = this;

    function probe() {
      var pos = me.getComputedPosition();
      me.trigger('scroll', pos);
      if (!me.isInTransition) {
        me.trigger('scrollEnd', pos);
        return;
      }
      me.probeTimer = requestAnimationFrame(probe);
    }
  };

  BScroll.prototype._transitionTime = function () {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    this.scrollerStyle[style.transitionDuration] = time + 'ms';

    if (this.options.wheel) {
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].style[style.transitionDuration] = time + 'ms';
      }
    }

    if (this.indicators) {
      for (var _i = 0; _i < this.indicators.length; _i++) {
        this.indicators[_i].transitionTime(time);
      }
    }
  };

  BScroll.prototype._transitionTimingFunction = function (easing) {
    this.scrollerStyle[style.transitionTimingFunction] = easing;

    if (this.options.wheel) {
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].style[style.transitionTimingFunction] = easing;
      }
    }

    if (this.indicators) {
      for (var _i2 = 0; _i2 < this.indicators.length; _i2++) {
        this.indicators[_i2].transitionTimingFunction(easing);
      }
    }
  };

  BScroll.prototype._transitionEnd = function (e) {
    if (e.target !== this.scroller || !this.isInTransition) {
      return;
    }

    this._transitionTime();
    var needReset = !this.pulling || this.movingDirectionY === DIRECTION_UP;
    if (needReset && !this.resetPosition(this.options.bounceTime, ease.bounce)) {
      this.isInTransition = false;
      if (this.options.probeType !== PROBE_REALTIME) {
        this.trigger('scrollEnd', {
          x: this.x,
          y: this.y
        });
      }
    }
  };

  BScroll.prototype._translate = function (x, y, scale) {
    assert(!isUndef(x) && !isUndef(y), 'Translate x or y is null or undefined.');
    if (isUndef(scale)) {
      scale = this.scale;
    }
    if (this.options.useTransform) {
      this.scrollerStyle[style.transform] = 'translate(' + x + 'px,' + y + 'px) scale(' + scale + ')' + this.translateZ;
    } else {
      x = Math.round(x);
      y = Math.round(y);
      this.scrollerStyle.left = x + 'px';
      this.scrollerStyle.top = y + 'px';
    }

    if (this.options.wheel) {
      var _options$wheel$rotate = this.options.wheel.rotate,
          rotate = _options$wheel$rotate === undefined ? 25 : _options$wheel$rotate;

      for (var i = 0; i < this.items.length; i++) {
        var deg = rotate * (y / this.itemHeight + i);
        this.items[i].style[style.transform] = 'rotateX(' + deg + 'deg)';
      }
    }

    this.x = x;
    this.y = y;
    this.setScale(scale);

    if (this.indicators) {
      for (var _i3 = 0; _i3 < this.indicators.length; _i3++) {
        this.indicators[_i3].updatePosition();
      }
    }
  };

  BScroll.prototype._animate = function (destX, destY, duration, easingFn) {
    var me = this;
    var startX = this.x;
    var startY = this.y;
    var startScale = this.lastScale;
    var destScale = this.scale;
    var startTime = getNow();
    var destTime = startTime + duration;

    function step() {
      var now = getNow();

      if (now >= destTime) {
        me.isAnimating = false;
        me._translate(destX, destY, destScale);

        me.trigger('scroll', {
          x: me.x,
          y: me.y
        });

        if (!me.pulling && !me.resetPosition(me.options.bounceTime)) {
          me.trigger('scrollEnd', {
            x: me.x,
            y: me.y
          });
        }
        return;
      }
      now = (now - startTime) / duration;
      var easing = easingFn(now);
      var newX = (destX - startX) * easing + startX;
      var newY = (destY - startY) * easing + startY;
      var newScale = (destScale - startScale) * easing + startScale;

      me._translate(newX, newY, newScale);

      if (me.isAnimating) {
        me.animateTimer = requestAnimationFrame(step);
      }

      if (me.options.probeType === PROBE_REALTIME) {
        me.trigger('scroll', {
          x: me.x,
          y: me.y
        });
      }
    }

    this.isAnimating = true;
    cancelAnimationFrame(this.animateTimer);
    step();
  };

  BScroll.prototype.scrollBy = function (x, y) {
    var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;

    x = this.x + x;
    y = this.y + y;

    this.scrollTo(x, y, time, easing);
  };

  BScroll.prototype.scrollTo = function (x, y) {
    var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;

    this.isInTransition = this.options.useTransition && time > 0 && (x !== this.x || y !== this.y);

    if (!time || this.options.useTransition) {
      this._transitionTimingFunction(easing.style);
      this._transitionTime(time);
      this._translate(x, y);

      if (time && this.options.probeType === PROBE_REALTIME) {
        this._startProbe();
      }

      if (!time && (x !== this.x || y !== this.y)) {
        this.trigger('scroll', {
          x: x,
          y: y
        });
        // force reflow to put everything in position
        this._reflow = document.body.offsetHeight;
        if (!this.resetPosition(this.options.bounceTime, ease.bounce)) {
          this.trigger('scrollEnd', {
            x: x,
            y: y
          });
        }
      }

      if (this.options.wheel) {
        if (y > this.minScrollY) {
          this.selectedIndex = 0;
        } else if (y < this.maxScrollY) {
          this.selectedIndex = this.items.length - 1;
        } else {
          this.selectedIndex = Math.round(Math.abs(y / this.itemHeight));
        }
      }
    } else {
      this._animate(x, y, time, easing.fn);
    }
  };

  BScroll.prototype.scrollToElement = function (el, time, offsetX, offsetY, easing) {
    if (!el) {
      return;
    }
    el = el.nodeType ? el : this.scroller.querySelector(el);

    if (this.options.wheel && !el.classList.contains(this.options.wheel.wheelItemClass)) {
      return;
    }

    var pos = offset(el);
    pos.left -= this.wrapperOffset.left;
    pos.top -= this.wrapperOffset.top;

    // if offsetX/Y are true we center the element to the screen
    if (offsetX === true) {
      offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
    }
    if (offsetY === true) {
      offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
    }

    pos.left -= offsetX || 0;
    pos.top -= offsetY || 0;
    pos.left = pos.left > this.minScrollX ? this.minScrollX : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
    pos.top = pos.top > this.minScrollY ? this.minScrollY : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;

    if (this.options.wheel) {
      pos.top = Math.round(pos.top / this.itemHeight) * this.itemHeight;
    }

    this.scrollTo(pos.left, pos.top, time, easing);
  };

  BScroll.prototype.resetPosition = function () {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var easeing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ease.bounce;

    var x = this.x;
    var roundX = Math.round(x);
    if (!this.hasHorizontalScroll || roundX > this.minScrollX) {
      x = this.minScrollX;
    } else if (roundX < this.maxScrollX) {
      x = this.maxScrollX;
    }

    var y = this.y;
    var roundY = Math.round(y);
    if (!this.hasVerticalScroll || roundY > this.minScrollY) {
      y = this.minScrollY;
    } else if (roundY < this.maxScrollY) {
      y = this.maxScrollY;
    }

    if (x === this.x && y === this.y) {
      return false;
    }

    this.scrollTo(x, y, time, easeing);

    return true;
  };

  BScroll.prototype.getComputedPosition = function () {
    var matrix = window.getComputedStyle(this.scroller, null);
    var x = void 0;
    var y = void 0;

    if (this.options.useTransform) {
      matrix = matrix[style.transform].split(')')[0].split(', ');
      x = +(matrix[12] || matrix[4]);
      y = +(matrix[13] || matrix[5]);
    } else {
      x = +matrix.left.replace(/[^-\d.]/g, '');
      y = +matrix.top.replace(/[^-\d.]/g, '');
    }

    return {
      x: x,
      y: y
    };
  };

  BScroll.prototype.stop = function () {
    if (this.options.useTransition && this.isInTransition) {
      this.isInTransition = false;
      cancelAnimationFrame(this.probeTimer);
      var pos = this.getComputedPosition();
      this._translate(pos.x, pos.y);
      if (this.options.wheel) {
        this.target = this.items[Math.round(-pos.y / this.itemHeight)];
      } else {
        this.trigger('scrollEnd', {
          x: this.x,
          y: this.y
        });
      }
      this.stopFromTransition = true;
    } else if (!this.options.useTransition && this.isAnimating) {
      this.isAnimating = false;
      cancelAnimationFrame(this.animateTimer);
      this.trigger('scrollEnd', {
        x: this.x,
        y: this.y
      });
      this.stopFromTransition = true;
    }
  };

  BScroll.prototype.destroy = function () {
    this.destroyed = true;
    this.trigger('destroy');
    if (this.options.useTransition) {
      cancelAnimationFrame(this.probeTimer);
    } else {
      cancelAnimationFrame(this.animateTimer);
    }
    this._removeDOMEvents();
    // remove custom events
    this._events = {};
  };
}

function snapMixin(BScroll) {
  BScroll.prototype._initSnap = function () {
    var _this = this;

    this.currentPage = {};
    var snap = this.options.snap;

    if (snap.loop) {
      var children = this.scroller.children;
      if (children.length > 1) {
        prepend(children[children.length - 1].cloneNode(true), this.scroller);
        this.scroller.appendChild(children[1].cloneNode(true));
      } else {
        // Loop does not make any sense if there is only one child.
        snap.loop = false;
      }
    }

    var el = snap.el;
    if (typeof el === 'string') {
      el = this.scroller.querySelectorAll(el);
    }

    this.on('refresh', function () {
      _this.pages = [];

      if (!_this.wrapperWidth || !_this.wrapperHeight || !_this.scrollerWidth || !_this.scrollerHeight) {
        return;
      }

      var stepX = snap.stepX || _this.wrapperWidth;
      var stepY = snap.stepY || _this.wrapperHeight;

      var x = 0;
      var y = void 0;
      var cx = void 0;
      var cy = void 0;
      var i = 0;
      var l = void 0;
      var m = 0;
      var n = void 0;
      var rect = void 0;
      if (!el) {
        cx = Math.round(stepX / 2);
        cy = Math.round(stepY / 2);

        while (x > -_this.scrollerWidth) {
          _this.pages[i] = [];
          l = 0;
          y = 0;

          while (y > -_this.scrollerHeight) {
            _this.pages[i][l] = {
              x: Math.max(x, _this.maxScrollX),
              y: Math.max(y, _this.maxScrollY),
              width: stepX,
              height: stepY,
              cx: x - cx,
              cy: y - cy
            };

            y -= stepY;
            l++;
          }

          x -= stepX;
          i++;
        }
      } else {
        l = el.length;
        n = -1;

        for (; i < l; i++) {
          rect = getRect(el[i]);
          if (i === 0 || rect.left <= getRect(el[i - 1]).left) {
            m = 0;
            n++;
          }

          if (!_this.pages[m]) {
            _this.pages[m] = [];
          }

          x = Math.max(-rect.left, _this.maxScrollX);
          y = Math.max(-rect.top, _this.maxScrollY);
          cx = x - Math.round(rect.width / 2);
          cy = y - Math.round(rect.height / 2);

          _this.pages[m][n] = {
            x: x,
            y: y,
            width: rect.width,
            height: rect.height,
            cx: cx,
            cy: cy
          };

          if (x > _this.maxScrollX) {
            m++;
          }
        }
      }

      _this._checkSnapLoop();

      var initPageX = snap._loopX ? 1 : 0;
      var initPageY = snap._loopY ? 1 : 0;
      _this._goToPage(_this.currentPage.pageX || initPageX, _this.currentPage.pageY || initPageY, 0);

      // Update snap threshold if needed.
      var snapThreshold = snap.threshold;
      if (snapThreshold % 1 === 0) {
        _this.snapThresholdX = snapThreshold;
        _this.snapThresholdY = snapThreshold;
      } else {
        _this.snapThresholdX = Math.round(_this.pages[_this.currentPage.pageX][_this.currentPage.pageY].width * snapThreshold);
        _this.snapThresholdY = Math.round(_this.pages[_this.currentPage.pageX][_this.currentPage.pageY].height * snapThreshold);
      }
    });

    this.on('scrollEnd', function () {
      if (snap.loop) {
        if (snap._loopX) {
          if (_this.currentPage.pageX === 0) {
            _this._goToPage(_this.pages.length - 2, _this.currentPage.pageY, 0);
          }
          if (_this.currentPage.pageX === _this.pages.length - 1) {
            _this._goToPage(1, _this.currentPage.pageY, 0);
          }
        } else {
          if (_this.currentPage.pageY === 0) {
            _this._goToPage(_this.currentPage.pageX, _this.pages[0].length - 2, 0);
          }
          if (_this.currentPage.pageY === _this.pages[0].length - 1) {
            _this._goToPage(_this.currentPage.pageX, 1, 0);
          }
        }
      }
    });

    if (snap.listenFlick !== false) {
      this.on('flick', function () {
        var time = snap.speed || Math.max(Math.max(Math.min(Math.abs(_this.x - _this.startX), 1000), Math.min(Math.abs(_this.y - _this.startY), 1000)), 300);

        _this._goToPage(_this.currentPage.pageX + _this.directionX, _this.currentPage.pageY + _this.directionY, time);
      });
    }

    this.on('destroy', function () {
      if (snap.loop) {
        var _children = _this.scroller.children;
        if (_children.length > 2) {
          removeChild(_this.scroller, _children[_children.length - 1]);
          removeChild(_this.scroller, _children[0]);
        }
      }
    });
  };

  BScroll.prototype._checkSnapLoop = function () {
    var snap = this.options.snap;

    if (!snap.loop || !this.pages || !this.pages.length) {
      return;
    }

    if (this.pages.length > 1) {
      snap._loopX = true;
    }
    if (this.pages[0] && this.pages[0].length > 1) {
      snap._loopY = true;
    }
    if (snap._loopX && snap._loopY) {
      warn('Loop does not support two direction at the same time.');
    }
  };

  BScroll.prototype._nearestSnap = function (x, y) {
    if (!this.pages.length) {
      return { x: 0, y: 0, pageX: 0, pageY: 0 };
    }

    var i = 0;
    // Check if we exceeded the snap threshold
    if (Math.abs(x - this.absStartX) <= this.snapThresholdX && Math.abs(y - this.absStartY) <= this.snapThresholdY) {
      return this.currentPage;
    }

    if (x > this.minScrollX) {
      x = this.minScrollX;
    } else if (x < this.maxScrollX) {
      x = this.maxScrollX;
    }

    if (y > this.minScrollY) {
      y = this.minScrollY;
    } else if (y < this.maxScrollY) {
      y = this.maxScrollY;
    }

    var l = this.pages.length;
    for (; i < l; i++) {
      if (x >= this.pages[i][0].cx) {
        x = this.pages[i][0].x;
        break;
      }
    }

    l = this.pages[i].length;

    var m = 0;
    for (; m < l; m++) {
      if (y >= this.pages[0][m].cy) {
        y = this.pages[0][m].y;
        break;
      }
    }

    if (i === this.currentPage.pageX) {
      i += this.directionX;

      if (i < 0) {
        i = 0;
      } else if (i >= this.pages.length) {
        i = this.pages.length - 1;
      }

      x = this.pages[i][0].x;
    }

    if (m === this.currentPage.pageY) {
      m += this.directionY;

      if (m < 0) {
        m = 0;
      } else if (m >= this.pages[0].length) {
        m = this.pages[0].length - 1;
      }

      y = this.pages[0][m].y;
    }

    return {
      x: x,
      y: y,
      pageX: i,
      pageY: m
    };
  };

  BScroll.prototype._goToPage = function (x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var time = arguments[2];
    var easing = arguments[3];

    var snap = this.options.snap;

    if (!snap || !this.pages || !this.pages.length) {
      return;
    }

    easing = easing || snap.easing || ease.bounce;

    if (x >= this.pages.length) {
      x = this.pages.length - 1;
    } else if (x < 0) {
      x = 0;
    }

    if (!this.pages[x]) {
      return;
    }

    if (y >= this.pages[x].length) {
      y = this.pages[x].length - 1;
    } else if (y < 0) {
      y = 0;
    }

    var posX = this.pages[x][y].x;
    var posY = this.pages[x][y].y;

    time = time === undefined ? snap.speed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;

    this.currentPage = {
      x: posX,
      y: posY,
      pageX: x,
      pageY: y
    };
    this.scrollTo(posX, posY, time, easing);
  };

  BScroll.prototype.goToPage = function (x, y, time, easing) {
    var snap = this.options.snap;
    if (!snap || !this.pages || !this.pages.length) {
      return;
    }

    if (snap.loop) {
      var len = void 0;
      if (snap._loopX) {
        len = this.pages.length - 2;
        if (x >= len) {
          x = len - 1;
        } else if (x < 0) {
          x = 0;
        }
        x += 1;
      } else {
        len = this.pages[0].length - 2;
        if (y >= len) {
          y = len - 1;
        } else if (y < 0) {
          y = 0;
        }
        y += 1;
      }
    }
    this._goToPage(x, y, time, easing);
  };

  BScroll.prototype.next = function (time, easing) {
    var snap = this.options.snap;
    if (!snap) {
      return;
    }

    var x = this.currentPage.pageX;
    var y = this.currentPage.pageY;

    x++;
    if (x >= this.pages.length && this.hasVerticalScroll) {
      x = 0;
      y++;
    }

    this._goToPage(x, y, time, easing);
  };

  BScroll.prototype.prev = function (time, easing) {
    var snap = this.options.snap;
    if (!snap) {
      return;
    }

    var x = this.currentPage.pageX;
    var y = this.currentPage.pageY;

    x--;
    if (x < 0 && this.hasVerticalScroll) {
      x = 0;
      y--;
    }

    this._goToPage(x, y, time, easing);
  };

  BScroll.prototype.getCurrentPage = function () {
    var snap = this.options.snap;
    if (!snap) {
      return null;
    }

    if (snap.loop) {
      var currentPage = void 0;
      if (snap._loopX) {
        currentPage = extend({}, this.currentPage, {
          pageX: this.currentPage.pageX - 1
        });
      } else {
        currentPage = extend({}, this.currentPage, {
          pageY: this.currentPage.pageY - 1
        });
      }
      return currentPage;
    }
    return this.currentPage;
  };
}

function wheelMixin(BScroll) {
  BScroll.prototype.wheelTo = function () {
    var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    if (this.options.wheel) {
      this.y = -index * this.itemHeight;
      this.scrollTo(0, this.y);
    }
  };

  BScroll.prototype.getSelectedIndex = function () {
    return this.options.wheel && this.selectedIndex;
  };

  BScroll.prototype._initWheel = function () {
    var wheel = this.options.wheel;
    if (!wheel.wheelWrapperClass) {
      wheel.wheelWrapperClass = 'wheel-scroll';
    }
    if (!wheel.wheelItemClass) {
      wheel.wheelItemClass = 'wheel-item';
    }
    if (wheel.selectedIndex === undefined) {
      wheel.selectedIndex = 0;
      warn('wheel option selectedIndex is required!');
    }
  };
}

var INDICATOR_MIN_LEN = 8;

function scrollbarMixin(BScroll) {
  BScroll.prototype._initScrollbar = function () {
    var _this = this;

    var _options$scrollbar = this.options.scrollbar,
        _options$scrollbar$fa = _options$scrollbar.fade,
        fade = _options$scrollbar$fa === undefined ? true : _options$scrollbar$fa,
        _options$scrollbar$in = _options$scrollbar.interactive,
        interactive = _options$scrollbar$in === undefined ? false : _options$scrollbar$in;

    this.indicators = [];
    var indicator = void 0;

    if (this.options.scrollX) {
      indicator = {
        el: createScrollbar('horizontal'),
        direction: 'horizontal',
        fade: fade,
        interactive: interactive
      };
      this._insertScrollBar(indicator.el);

      this.indicators.push(new Indicator(this, indicator));
    }

    if (this.options.scrollY) {
      indicator = {
        el: createScrollbar('vertical'),
        direction: 'vertical',
        fade: fade,
        interactive: interactive
      };
      this._insertScrollBar(indicator.el);
      this.indicators.push(new Indicator(this, indicator));
    }

    this.on('refresh', function () {
      for (var i = 0; i < _this.indicators.length; i++) {
        _this.indicators[i].refresh();
      }
    });

    if (fade) {
      this.on('scrollEnd', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade();
        }
      });

      this.on('scrollCancel', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade();
        }
      });

      this.on('scrollStart', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade(true);
        }
      });

      this.on('beforeScrollStart', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade(true, true);
        }
      });
    }

    this.on('destroy', function () {
      _this._removeScrollBars();
    });
  };

  BScroll.prototype._insertScrollBar = function (scrollbar) {
    this.wrapper.appendChild(scrollbar);
  };

  BScroll.prototype._removeScrollBars = function () {
    for (var i = 0; i < this.indicators.length; i++) {
      this.indicators[i].destroy();
    }
  };
}

function createScrollbar(direction) {
  var scrollbar = document.createElement('div');
  var indicator = document.createElement('div');

  scrollbar.style.cssText = 'position:absolute;z-index:9999;pointerEvents:none';
  indicator.style.cssText = 'box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;';

  indicator.className = 'bscroll-indicator';

  if (direction === 'horizontal') {
    scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
    indicator.style.height = '100%';
    scrollbar.className = 'bscroll-horizontal-scrollbar';
  } else {
    scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
    indicator.style.width = '100%';
    scrollbar.className = 'bscroll-vertical-scrollbar';
  }

  scrollbar.style.cssText += ';overflow:hidden';
  scrollbar.appendChild(indicator);

  return scrollbar;
}

function Indicator(scroller, options) {
  this.wrapper = options.el;
  this.wrapperStyle = this.wrapper.style;
  this.indicator = this.wrapper.children[0];
  this.indicatorStyle = this.indicator.style;
  this.scroller = scroller;
  this.direction = options.direction;
  if (options.fade) {
    this.visible = 0;
    this.wrapperStyle.opacity = '0';
  } else {
    this.visible = 1;
  }

  this.sizeRatioX = 1;
  this.sizeRatioY = 1;
  this.maxPosX = 0;
  this.maxPosY = 0;
  this.x = 0;
  this.y = 0;

  if (options.interactive) {
    this._addDOMEvents();
  }
}

Indicator.prototype.handleEvent = function (e) {
  switch (e.type) {
    case 'touchstart':
    case 'mousedown':
      this._start(e);
      break;
    case 'touchmove':
    case 'mousemove':
      this._move(e);
      break;
    case 'touchend':
    case 'mouseup':
    case 'touchcancel':
    case 'mousecancel':
      this._end(e);
      break;
  }
};

Indicator.prototype.refresh = function () {
  if (this._shouldShow()) {
    this.transitionTime();
    this._calculate();
    this.updatePosition();
  }
};

Indicator.prototype.fade = function (visible, hold) {
  var _this2 = this;

  if (hold && !this.visible) {
    return;
  }

  var time = visible ? 250 : 500;

  visible = visible ? '1' : '0';

  this.wrapperStyle[style.transitionDuration] = time + 'ms';

  clearTimeout(this.fadeTimeout);
  this.fadeTimeout = setTimeout(function () {
    _this2.wrapperStyle.opacity = visible;
    _this2.visible = +visible;
  }, 0);
};

Indicator.prototype.updatePosition = function () {
  if (this.direction === 'vertical') {
    var y = Math.round(this.sizeRatioY * this.scroller.y);

    if (y < 0) {
      this.transitionTime(500);
      var height = Math.max(this.indicatorHeight + y * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.height = height + 'px';
      y = 0;
    } else if (y > this.maxPosY) {
      this.transitionTime(500);
      var _height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.height = _height + 'px';
      y = this.maxPosY + this.indicatorHeight - _height;
    } else {
      this.indicatorStyle.height = this.indicatorHeight + 'px';
    }
    this.y = y;

    if (this.scroller.options.useTransform) {
      this.indicatorStyle[style.transform] = 'translateY(' + y + 'px)' + this.scroller.translateZ;
    } else {
      this.indicatorStyle.top = y + 'px';
    }
  } else {
    var x = Math.round(this.sizeRatioX * this.scroller.x);

    if (x < 0) {
      this.transitionTime(500);
      var width = Math.max(this.indicatorWidth + x * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.width = width + 'px';
      x = 0;
    } else if (x > this.maxPosX) {
      this.transitionTime(500);
      var _width = Math.max(this.indicatorWidth - (x - this.maxPosX) * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.width = _width + 'px';
      x = this.maxPosX + this.indicatorWidth - _width;
    } else {
      this.indicatorStyle.width = this.indicatorWidth + 'px';
    }

    this.x = x;

    if (this.scroller.options.useTransform) {
      this.indicatorStyle[style.transform] = 'translateX(' + x + 'px)' + this.scroller.translateZ;
    } else {
      this.indicatorStyle.left = x + 'px';
    }
  }
};

Indicator.prototype.transitionTime = function () {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  this.indicatorStyle[style.transitionDuration] = time + 'ms';
};

Indicator.prototype.transitionTimingFunction = function (easing) {
  this.indicatorStyle[style.transitionTimingFunction] = easing;
};

Indicator.prototype.destroy = function () {
  this._removeDOMEvents();
  this.wrapper.parentNode.removeChild(this.wrapper);
};

Indicator.prototype._start = function (e) {
  var point = e.touches ? e.touches[0] : e;

  e.preventDefault();
  e.stopPropagation();

  this.transitionTime();

  this.initiated = true;
  this.moved = false;
  this.lastPointX = point.pageX;
  this.lastPointY = point.pageY;

  this.startTime = getNow();

  this._handleMoveEvents(addEvent);
  this.scroller.trigger('beforeScrollStart');
};

Indicator.prototype._move = function (e) {
  var point = e.touches ? e.touches[0] : e;

  e.preventDefault();
  e.stopPropagation();

  if (!this.moved) {
    this.scroller.trigger('scrollStart');
  }

  this.moved = true;

  var deltaX = point.pageX - this.lastPointX;
  this.lastPointX = point.pageX;

  var deltaY = point.pageY - this.lastPointY;
  this.lastPointY = point.pageY;

  var newX = this.x + deltaX;
  var newY = this.y + deltaY;

  this._pos(newX, newY);
};

Indicator.prototype._end = function (e) {
  if (!this.initiated) {
    return;
  }
  this.initiated = false;

  e.preventDefault();
  e.stopPropagation();

  this._handleMoveEvents(removeEvent);

  var snapOption = this.scroller.options.snap;
  if (snapOption) {
    var speed = snapOption.speed,
        _snapOption$easing = snapOption.easing,
        easing = _snapOption$easing === undefined ? ease.bounce : _snapOption$easing;

    var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

    var time = speed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - snap.x), 1000), Math.min(Math.abs(this.scroller.y - snap.y), 1000)), 300);

    if (this.scroller.x !== snap.x || this.scroller.y !== snap.y) {
      this.scroller.directionX = 0;
      this.scroller.directionY = 0;
      this.scroller.currentPage = snap;
      this.scroller.scrollTo(snap.x, snap.y, time, easing);
    }
  }

  if (this.moved) {
    this.scroller.trigger('scrollEnd', {
      x: this.scroller.x,
      y: this.scroller.y
    });
  }
};

Indicator.prototype._pos = function (x, y) {
  if (x < 0) {
    x = 0;
  } else if (x > this.maxPosX) {
    x = this.maxPosX;
  }

  if (y < 0) {
    y = 0;
  } else if (y > this.maxPosY) {
    y = this.maxPosY;
  }

  x = Math.round(x / this.sizeRatioX);
  y = Math.round(y / this.sizeRatioY);

  this.scroller.scrollTo(x, y);
  this.scroller.trigger('scroll', {
    x: this.scroller.x,
    y: this.scroller.y
  });
};

Indicator.prototype._shouldShow = function () {
  if (this.direction === 'vertical' && this.scroller.hasVerticalScroll || this.direction === 'horizontal' && this.scroller.hasHorizontalScroll) {
    this.wrapper.style.display = '';
    return true;
  }
  this.wrapper.style.display = 'none';
  return false;
};

Indicator.prototype._calculate = function () {
  if (this.direction === 'vertical') {
    var wrapperHeight = this.wrapper.clientHeight;
    this.indicatorHeight = Math.max(Math.round(wrapperHeight * wrapperHeight / (this.scroller.scrollerHeight || wrapperHeight || 1)), INDICATOR_MIN_LEN);
    this.indicatorStyle.height = this.indicatorHeight + 'px';

    this.maxPosY = wrapperHeight - this.indicatorHeight;

    this.sizeRatioY = this.maxPosY / this.scroller.maxScrollY;
  } else {
    var wrapperWidth = this.wrapper.clientWidth;
    this.indicatorWidth = Math.max(Math.round(wrapperWidth * wrapperWidth / (this.scroller.scrollerWidth || wrapperWidth || 1)), INDICATOR_MIN_LEN);
    this.indicatorStyle.width = this.indicatorWidth + 'px';

    this.maxPosX = wrapperWidth - this.indicatorWidth;

    this.sizeRatioX = this.maxPosX / this.scroller.maxScrollX;
  }
};

Indicator.prototype._addDOMEvents = function () {
  var eventOperation = addEvent;
  this._handleDOMEvents(eventOperation);
};

Indicator.prototype._removeDOMEvents = function () {
  var eventOperation = removeEvent;
  this._handleDOMEvents(eventOperation);
  this._handleMoveEvents(eventOperation);
};

Indicator.prototype._handleMoveEvents = function (eventOperation) {
  if (!this.scroller.options.disableTouch) {
    eventOperation(window, 'touchmove', this);
  }
  if (!this.scroller.options.disableMouse) {
    eventOperation(window, 'mousemove', this);
  }
};

Indicator.prototype._handleDOMEvents = function (eventOperation) {
  if (!this.scroller.options.disableTouch) {
    eventOperation(this.indicator, 'touchstart', this);
    eventOperation(window, 'touchend', this);
  }
  if (!this.scroller.options.disableMouse) {
    eventOperation(this.indicator, 'mousedown', this);
    eventOperation(window, 'mouseup', this);
  }
};

function pullDownMixin(BScroll) {
  BScroll.prototype._initPullDown = function () {
    // must watch scroll in real time
    this.options.probeType = PROBE_REALTIME;
  };

  BScroll.prototype._checkPullDown = function () {
    var _options$pullDownRefr = this.options.pullDownRefresh,
        _options$pullDownRefr2 = _options$pullDownRefr.threshold,
        threshold = _options$pullDownRefr2 === undefined ? 90 : _options$pullDownRefr2,
        _options$pullDownRefr3 = _options$pullDownRefr.stop,
        stop = _options$pullDownRefr3 === undefined ? 40 : _options$pullDownRefr3;

    // check if a real pull down action

    if (this.directionY !== DIRECTION_DOWN || this.y < threshold) {
      return false;
    }

    if (!this.pulling) {
      this.pulling = true;
      this.trigger('pullingDown');
    }
    this.scrollTo(this.x, stop, this.options.bounceTime, ease.bounce);

    return this.pulling;
  };

  BScroll.prototype.finishPullDown = function () {
    this.pulling = false;
    this.resetPosition(this.options.bounceTime, ease.bounce);
  };

  BScroll.prototype.openPullDown = function () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    this.options.pullDownRefresh = config;
    this._initPullDown();
  };

  BScroll.prototype.closePullDown = function () {
    this.options.pullDownRefresh = false;
  };
}

function pullUpMixin(BScroll) {
  BScroll.prototype._initPullUp = function () {
    // must watch scroll in real time
    this.options.probeType = PROBE_REALTIME;

    this.pullupWatching = false;
    this._watchPullUp();
  };

  BScroll.prototype._watchPullUp = function () {
    if (this.pullupWatching) {
      return;
    }
    this.pullupWatching = true;
    this.on('scroll', this._checkToEnd);
  };

  BScroll.prototype._checkToEnd = function (pos) {
    var _this = this;

    var _options$pullUpLoad$t = this.options.pullUpLoad.threshold,
        threshold = _options$pullUpLoad$t === undefined ? 0 : _options$pullUpLoad$t;

    if (this.movingDirectionY === DIRECTION_UP && pos.y <= this.maxScrollY + threshold) {
      // reset pullupWatching status after scroll end.
      this.once('scrollEnd', function () {
        _this.pullupWatching = false;
      });
      this.trigger('pullingUp');
      this.off('scroll', this._checkToEnd);
    }
  };

  BScroll.prototype.finishPullUp = function () {
    var _this2 = this;

    if (this.pullupWatching) {
      this.once('scrollEnd', function () {
        _this2._watchPullUp();
      });
    } else {
      this._watchPullUp();
    }
  };

  BScroll.prototype.openPullUp = function () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    this.options.pullUpLoad = config;
    this._initPullUp();
  };

  BScroll.prototype.closePullUp = function () {
    this.options.pullUpLoad = false;
    if (!this.pullupWatching) {
      return;
    }
    this.pullupWatching = false;
    this.off('scroll', this._checkToEnd);
  };
}

function mouseWheelMixin(BScroll) {
  BScroll.prototype._initMouseWheel = function () {
    var _this = this;

    this._handleMouseWheelEvent(addEvent);

    this.on('destroy', function () {
      clearTimeout(_this.mouseWheelTimer);
      clearTimeout(_this.mouseWheelEndTimer);
      _this._handleMouseWheelEvent(removeEvent);
    });

    this.firstWheelOpreation = true;
  };

  BScroll.prototype._handleMouseWheelEvent = function (eventOperation) {
    eventOperation(this.wrapper, 'wheel', this);
    eventOperation(this.wrapper, 'mousewheel', this);
    eventOperation(this.wrapper, 'DOMMouseScroll', this);
  };

  BScroll.prototype._onMouseWheel = function (e) {
    var _this2 = this;

    if (!this.enabled) {
      return;
    }
    e.preventDefault();

    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    if (this.firstWheelOpreation) {
      this.trigger('scrollStart');
    }
    this.firstWheelOpreation = false;

    var _options$mouseWheel = this.options.mouseWheel,
        _options$mouseWheel$s = _options$mouseWheel.speed,
        speed = _options$mouseWheel$s === undefined ? 20 : _options$mouseWheel$s,
        _options$mouseWheel$i = _options$mouseWheel.invert,
        invert = _options$mouseWheel$i === undefined ? false : _options$mouseWheel$i,
        _options$mouseWheel$e = _options$mouseWheel.easeTime,
        easeTime = _options$mouseWheel$e === undefined ? 300 : _options$mouseWheel$e;


    clearTimeout(this.mouseWheelTimer);
    this.mouseWheelTimer = setTimeout(function () {
      if (!_this2.options.snap && !easeTime) {
        _this2.trigger('scrollEnd', {
          x: _this2.x,
          y: _this2.y
        });
      }
      _this2.firstWheelOpreation = true;
    }, 400);

    var wheelDeltaX = void 0;
    var wheelDeltaY = void 0;

    switch (true) {
      case 'deltaX' in e:
        if (e.deltaMode === 1) {
          wheelDeltaX = -e.deltaX * speed;
          wheelDeltaY = -e.deltaY * speed;
        } else {
          wheelDeltaX = -e.deltaX;
          wheelDeltaY = -e.deltaY;
        }
        break;
      case 'wheelDeltaX' in e:
        wheelDeltaX = e.wheelDeltaX / 120 * speed;
        wheelDeltaY = e.wheelDeltaY / 120 * speed;
        break;
      case 'wheelDelta' in e:
        wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * speed;
        break;
      case 'detail' in e:
        wheelDeltaX = wheelDeltaY = -e.detail / 3 * speed;
        break;
      default:
        return;
    }

    var direction = invert ? -1 : 1;
    wheelDeltaX *= direction;
    wheelDeltaY *= direction;

    if (!this.hasVerticalScroll) {
      wheelDeltaX = wheelDeltaY;
      wheelDeltaY = 0;
    }

    var newX = void 0;
    var newY = void 0;
    if (this.options.snap) {
      newX = this.currentPage.pageX;
      newY = this.currentPage.pageY;

      if (wheelDeltaX > 0) {
        newX--;
      } else if (wheelDeltaX < 0) {
        newX++;
      }

      if (wheelDeltaY > 0) {
        newY--;
      } else if (wheelDeltaY < 0) {
        newY++;
      }

      this._goToPage(newX, newY);
      return;
    }

    newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
    newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

    this.movingDirectionX = this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
    this.movingDirectionY = this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;

    if (newX > this.minScrollX) {
      newX = this.minScrollX;
    } else if (newX < this.maxScrollX) {
      newX = this.maxScrollX;
    }

    if (newY > this.minScrollY) {
      newY = this.minScrollY;
    } else if (newY < this.maxScrollY) {
      newY = this.maxScrollY;
    }

    var needTriggerEnd = this.y === newY;
    this.scrollTo(newX, newY, easeTime, ease.swipe);
    this.trigger('scroll', {
      x: this.x,
      y: this.y
    });
    clearTimeout(this.mouseWheelEndTimer);
    if (needTriggerEnd) {
      this.mouseWheelEndTimer = setTimeout(function () {
        _this2.trigger('scrollEnd', {
          x: _this2.x,
          y: _this2.y
        });
      }, easeTime);
    }
  };
}

function zoomMixin(BScroll) {
  BScroll.prototype._initZoom = function () {
    var _options$zoom = this.options.zoom,
        _options$zoom$start = _options$zoom.start,
        start = _options$zoom$start === undefined ? 1 : _options$zoom$start,
        _options$zoom$min = _options$zoom.min,
        min = _options$zoom$min === undefined ? 1 : _options$zoom$min,
        _options$zoom$max = _options$zoom.max,
        max = _options$zoom$max === undefined ? 4 : _options$zoom$max;

    this.scale = Math.min(Math.max(start, min), max);
    this.setScale(this.scale);
    this.scrollerStyle[style.transformOrigin] = '0 0';
  };

  BScroll.prototype._zoomTo = function (scale, originX, originY, startScale) {
    this.scaled = true;

    var lastScale = scale / (startScale || this.scale);
    this.setScale(scale);

    this.refresh();

    var newX = Math.round(this.startX - (originX - this.relativeX) * (lastScale - 1));
    var newY = Math.round(this.startY - (originY - this.relativeY) * (lastScale - 1));

    if (newX > this.minScrollX) {
      newX = this.minScrollX;
    } else if (newX < this.maxScrollX) {
      newX = this.maxScrollX;
    }

    if (newY > this.minScrollY) {
      newY = this.minScrollY;
    } else if (newY < this.maxScrollY) {
      newY = this.maxScrollY;
    }

    if (this.x !== newX || this.y !== newY) {
      this.scrollTo(newX, newY, this.options.bounceTime);
    }

    this.scaled = false;
  };

  BScroll.prototype.zoomTo = function (scale, x, y) {
    var _offsetToBody = offsetToBody(this.wrapper),
        left = _offsetToBody.left,
        top = _offsetToBody.top;

    var originX = x + left - this.x;
    var originY = y + top - this.y;
    this._zoomTo(scale, originX, originY);
  };

  BScroll.prototype._zoomStart = function (e) {
    var firstFinger = e.touches[0];
    var secondFinger = e.touches[1];
    var deltaX = Math.abs(firstFinger.pageX - secondFinger.pageX);
    var deltaY = Math.abs(firstFinger.pageY - secondFinger.pageY);

    this.startDistance = getDistance(deltaX, deltaY);
    this.startScale = this.scale;

    var _offsetToBody2 = offsetToBody(this.wrapper),
        left = _offsetToBody2.left,
        top = _offsetToBody2.top;

    this.originX = Math.abs(firstFinger.pageX + secondFinger.pageX) / 2 + left - this.x;
    this.originY = Math.abs(firstFinger.pageY + secondFinger.pageY) / 2 + top - this.y;

    this.trigger('zoomStart');
  };

  BScroll.prototype._zoom = function (e) {
    if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
      return;
    }

    if (this.options.preventDefault) {
      e.preventDefault();
    }

    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    var firstFinger = e.touches[0];
    var secondFinger = e.touches[1];
    var deltaX = Math.abs(firstFinger.pageX - secondFinger.pageX);
    var deltaY = Math.abs(firstFinger.pageY - secondFinger.pageY);
    var distance = getDistance(deltaX, deltaY);
    var scale = distance / this.startDistance * this.startScale;

    this.scaled = true;

    var _options$zoom2 = this.options.zoom,
        _options$zoom2$min = _options$zoom2.min,
        min = _options$zoom2$min === undefined ? 1 : _options$zoom2$min,
        _options$zoom2$max = _options$zoom2.max,
        max = _options$zoom2$max === undefined ? 4 : _options$zoom2$max;


    if (scale < min) {
      scale = 0.5 * min * Math.pow(2.0, scale / min);
    } else if (scale > max) {
      scale = 2.0 * max * Math.pow(0.5, max / scale);
    }

    var lastScale = scale / this.startScale;

    var x = this.startX - (this.originX - this.relativeX) * (lastScale - 1);
    var y = this.startY - (this.originY - this.relativeY) * (lastScale - 1);

    this.setScale(scale);

    this.scrollTo(x, y, 0);
  };

  BScroll.prototype._zoomEnd = function (e) {
    if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
      return;
    }

    if (this.options.preventDefault) {
      e.preventDefault();
    }

    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    this.isInTransition = false;
    this.isAnimating = false;
    this.initiated = 0;

    var _options$zoom3 = this.options.zoom,
        _options$zoom3$min = _options$zoom3.min,
        min = _options$zoom3$min === undefined ? 1 : _options$zoom3$min,
        _options$zoom3$max = _options$zoom3.max,
        max = _options$zoom3$max === undefined ? 4 : _options$zoom3$max;


    var scale = this.scale > max ? max : this.scale < min ? min : this.scale;

    this._zoomTo(scale, this.originX, this.originY, this.startScale);

    this.trigger('zoomEnd');
  };
}

// import { ease } from '../util/ease'

// Number of items to instantiate beyond current view in the scroll direction.
var RUNWAY_ITEMS = 30;

// Number of items to instantiate beyond current view in the opposite direction.
var RUNWAY_ITEMS_OPPOSITE = 10;

// The animation interval (in ms) for fading in content from tombstones.
var ANIMATION_DURATION_MS = 200;

// The number of pixels of default additional length to allow scrolling to.
var DEFAULT_SCROLL_RUNWAY = 2000;

function infiniteMixin(BScroll) {
  BScroll.prototype._initInfinite = function () {
    this.options.probeType = 3;
    this.maxScrollY = -DEFAULT_SCROLL_RUNWAY;
    this.infiniteScroller = new InfiniteScroller(this, this.options.infinity);
  };
}

function isTombstoneNode(node) {
  if (node && node.classList) {
    return node.classList.contains('tombstone');
  }
}

function InfiniteScroller(scroller, options) {
  var _this = this;

  this.options = options;
  assert(typeof this.options.createTombstone === 'function', 'Infinite scroll need createTombstone Function to create tombstone');

  assert(typeof this.options.fetch === 'function', 'Infinite scroll need fetch Function to fetch new data.');

  assert(typeof this.options.render === 'function', 'Infinite scroll need render Function to render each item.');

  this.firstAttachedItem = 0;
  this.lastAttachedItem = 0;

  this.anchorScrollTop = 0;
  this.anchorItem = {
    index: 0,
    offset: 0
  };
  this.tombstoneHeight = 0;
  this.tombstoneWidth = 0;
  this.tombstones = [];

  this.items = [];
  this.loadedItems = 0;
  this.requestInProgress = false;
  this.hasMore = true;

  this.scroller = scroller;
  this.wrapperEl = this.scroller.wrapper;
  this.scrollerEl = this.scroller.scroller;
  this.scroller.on('scroll', function () {
    _this.onScroll();
  });
  this.scroller.on('resize', function () {
    _this.onResize();
  });

  this.onResize();
}

InfiniteScroller.prototype.onScroll = function () {
  var scrollTop = -this.scroller.y;
  var delta = scrollTop - this.anchorScrollTop;
  if (scrollTop === 0) {
    this.anchorItem = {
      index: 0,
      offset: 0
    };
  } else {
    this.anchorItem = this._calculateAnchoredItem(this.anchorItem, delta);
  }

  this.anchorScrollTop = scrollTop;
  var lastScreenItem = this._calculateAnchoredItem(this.anchorItem, this.wrapperEl.offsetHeight);

  var start = this.anchorItem.index;
  var end = lastScreenItem.index;
  if (delta < 0) {
    start -= RUNWAY_ITEMS;
    end += RUNWAY_ITEMS_OPPOSITE;
  } else {
    start -= RUNWAY_ITEMS_OPPOSITE;
    end += RUNWAY_ITEMS;
  }
  this.fill(start, end);
  this.maybeRequestContent();
};

InfiniteScroller.prototype.onResize = function () {
  var tombstone = this.options.createTombstone();
  tombstone.style.position = 'absolute';
  this.scrollerEl.appendChild(tombstone);
  tombstone.style.display = '';
  this.tombstoneHeight = tombstone.offsetHeight;
  this.tombstoneWidth = tombstone.offsetWidth;
  this.scrollerEl.removeChild(tombstone);

  for (var i = 0; i < this.items.length; i++) {
    this.items[i].height = this.items[i].width = 0;
  }

  this.onScroll();
};

InfiniteScroller.prototype.fill = function (start, end) {
  this.firstAttachedItem = Math.max(0, start);
  if (!this.hasMore) {
    end = Math.min(end, this.items.length);
  }
  this.lastAttachedItem = end;
  this.attachContent();
};

InfiniteScroller.prototype.maybeRequestContent = function () {
  var _this2 = this;

  if (this.requestInProgress || !this.hasMore) {
    return;
  }
  var itemsNeeded = this.lastAttachedItem - this.loadedItems;
  if (itemsNeeded <= 0) {
    return;
  }
  this.requestInProgress = true;
  this.options.fetch(itemsNeeded).then(function (items) {
    _this2.requestInProgress = false;
    if (items) {
      _this2.addContent(items);
    } else {
      _this2.hasMore = false;
      var tombstoneLen = _this2._removeTombstones();
      var curPos = 0;
      if (_this2.anchorItem.index <= _this2.items.length) {
        curPos = _this2._fixScrollPosition();
        _this2._setupAnimations({}, curPos);
        _this2.scroller.resetPosition(_this2.scroller.options.bounceTime);
      } else {
        _this2.anchorItem.index -= tombstoneLen;
        curPos = _this2._fixScrollPosition();
        _this2._setupAnimations({}, curPos);
        _this2.scroller.stop();
        _this2.scroller.resetPosition();
        _this2.onScroll();
      }
    }
  });
};

InfiniteScroller.prototype.addContent = function (items) {
  for (var i = 0; i < items.length; i++) {
    if (this.items.length <= this.loadedItems) {
      this._addItem();
    }
    this.items[this.loadedItems++].data = items[i];
  }
  this.attachContent();
  this.maybeRequestContent();
};

InfiniteScroller.prototype.attachContent = function () {
  var unusedNodes = this._collectUnusedNodes();
  var tombstoneAnimations = this._createDOMNodes(unusedNodes);
  this._cleanupUnusedNodes(unusedNodes);
  this._cacheNodeSize();
  var curPos = this._fixScrollPosition();
  this._setupAnimations(tombstoneAnimations, curPos);
};

InfiniteScroller.prototype.resetMore = function () {
  this.hasMore = true;
};

InfiniteScroller.prototype._removeTombstones = function () {
  var markIndex = void 0;
  var tombstoneLen = 0;
  var itemLen = this.items.length;
  for (var i = 0; i < itemLen; i++) {
    var currentNode = this.items[i].node;
    var currentData = this.items[i].data;
    if ((!currentNode || isTombstoneNode(currentNode)) && !currentData) {
      if (!markIndex) {
        markIndex = i;
      }
      if (currentNode) {
        this.scrollerEl.removeChild(currentNode);
      }
    }
  }
  tombstoneLen = itemLen - markIndex;
  this.items.splice(markIndex);
  this.lastAttachedItem = Math.min(this.lastAttachedItem, this.items.length);
  return tombstoneLen;
};

InfiniteScroller.prototype._collectUnusedNodes = function () {
  var unusedNodes = [];
  for (var i = 0; i < this.items.length; i++) {
    // Skip the items which should be visible.
    if (i === this.firstAttachedItem) {
      i = this.lastAttachedItem - 1;
      continue;
    }
    var currentNode = this.items[i].node;
    if (currentNode) {
      if (isTombstoneNode(currentNode)) {
        // Cache tombstones for reuse
        this.tombstones.push(currentNode);
        this.tombstones[this.tombstones.length - 1].style.display = 'none';
      } else {
        unusedNodes.push(currentNode);
      }
    }
    this.items[i].node = null;
  }
  return unusedNodes;
};

InfiniteScroller.prototype._createDOMNodes = function (unusedNodes) {
  var tombstoneAnimations = {};
  for (var i = this.firstAttachedItem; i < this.lastAttachedItem; i++) {
    while (this.items.length <= i) {
      this._addItem();
    }
    var currentNode = this.items[i].node;
    var currentData = this.items[i].data;
    if (currentNode) {
      if (isTombstoneNode(currentNode) && currentData) {
        currentNode.style.zIndex = 1;
        tombstoneAnimations[i] = [currentNode, this.items[i].top - this.anchorScrollTop];
        this.items[i].node = null;
      } else {
        continue;
      }
    }
    var node = currentData ? this.options.render(currentData, unusedNodes.pop()) : this._getTombStone();
    node.style.position = 'absolute';
    this.items[i].top = -1;
    this.scrollerEl.appendChild(node);
    this.items[i].node = node;
  }
  return tombstoneAnimations;
};

InfiniteScroller.prototype._cleanupUnusedNodes = function (unusedNodes) {
  while (unusedNodes.length) {
    this.scrollerEl.removeChild(unusedNodes.pop());
  }
};

InfiniteScroller.prototype._cacheNodeSize = function () {
  for (var i = this.firstAttachedItem; i < this.lastAttachedItem; i++) {
    // Only cache the height if we have the real contents, not a placeholder.
    if (this.items[i].data && !this.items[i].height) {
      this.items[i].height = this.items[i].node.offsetHeight;
      this.items[i].width = this.items[i].node.offsetWidth;
    }
  }
};

InfiniteScroller.prototype._fixScrollPosition = function () {
  this.anchorScrollTop = 0;
  for (var _i = 0; _i < this.anchorItem.index; _i++) {
    this.anchorScrollTop += this.items[_i].height || this.tombstoneHeight;
  }
  this.anchorScrollTop += this.anchorItem.offset;

  // Position all nodes.
  var curPos = this.anchorScrollTop - this.anchorItem.offset;
  var i = this.anchorItem.index;
  while (i > this.firstAttachedItem) {
    curPos -= this.items[i - 1].height || this.tombstoneHeight;
    i--;
  }

  return curPos;
};

InfiniteScroller.prototype._setupAnimations = function (tombstoneAnimations, curPos) {
  var _this3 = this;

  for (var i in tombstoneAnimations) {
    var animation = tombstoneAnimations[i];
    this.items[i].node.style.transform = 'translateY(' + (this.anchorScrollTop + animation[1]) + 'px) scale(' + this.tombstoneWidth / this.items[i].width + ', ' + this.tombstoneHeight / this.items[i].height + ')';
    // Call offsetTop on the nodes to be animated to force them to apply current transforms.
    /* eslint-disable no-unused-expressions */
    this.items[i].node.offsetTop;
    animation[0].offsetTop;
    this.items[i].node.style.transition = 'transform ' + ANIMATION_DURATION_MS + 'ms';
  }

  for (var _i2 = this.firstAttachedItem; _i2 < this.lastAttachedItem; _i2++) {
    var _animation = tombstoneAnimations[_i2];
    if (_animation) {
      var tombstoneNode = _animation[0];
      tombstoneNode.style.transition = 'transform ' + ANIMATION_DURATION_MS + 'ms, opacity ' + ANIMATION_DURATION_MS + 'ms';
      tombstoneNode.style.transform = 'translateY(' + curPos + 'px) scale(' + this.items[_i2].width / this.tombstoneWidth + ', ' + this.items[_i2].height / this.tombstoneHeight + ')';
      tombstoneNode.style.opacity = 0;
    }
    if (curPos !== this.items[_i2].top) {
      if (!_animation) {
        this.items[_i2].node.style.transition = '';
      }
      this.items[_i2].node.style.transform = 'translateY(' + curPos + 'px)';
    }
    this.items[_i2].top = curPos;
    curPos += this.items[_i2].height || this.tombstoneHeight;
  }

  this.scroller.maxScrollY = -(curPos - this.wrapperEl.offsetHeight + (this.hasMore ? DEFAULT_SCROLL_RUNWAY : 0));

  setTimeout(function () {
    for (var _i3 in tombstoneAnimations) {
      var _animation2 = tombstoneAnimations[_i3];
      _animation2[0].style.display = 'none';
      // Tombstone can be recycled now.
      _this3.tombstones.push(_animation2[0]);
    }
  }, ANIMATION_DURATION_MS);
};

InfiniteScroller.prototype._getTombStone = function () {
  var tombstone = this.tombstones.pop();
  if (tombstone) {
    tombstone.style.display = '';
    tombstone.style.opacity = 1;
    tombstone.style.transform = '';
    tombstone.style.transition = '';
    return tombstone;
  }
  return this.options.createTombstone();
};

InfiniteScroller.prototype._addItem = function () {
  this.items.push({
    data: null,
    node: null,
    height: 0,
    width: 0,
    top: 0
  });
};

InfiniteScroller.prototype._calculateAnchoredItem = function (initialAnchor, delta) {
  if (delta === 0) {
    return initialAnchor;
  }
  var i = initialAnchor.index;
  var tombstones = 0;

  delta += initialAnchor.offset;
  if (delta < 0) {
    while (delta < 0 && i > 0 && this.items[i - 1].height) {
      delta += this.items[i - 1].height;
      i--;
    }
    tombstones = Math.max(-i, Math.ceil(Math.min(delta, 0) / this.tombstoneHeight));
  } else {
    while (delta > 0 && i < this.items.length && this.items[i].height && this.items[i].height < delta) {
      delta -= this.items[i].height;
      i++;
    }
    if (i >= this.items.length || !this.items[i].height) {
      tombstones = Math.floor(Math.max(delta, 0) / this.tombstoneHeight);
    }
  }
  i += tombstones;
  delta -= tombstones * this.tombstoneHeight;

  return {
    index: i,
    offset: delta
  };
};

function BScroll(el, options) {
  this.wrapper = typeof el === 'string' ? document.querySelector(el) : el;
  if (!this.wrapper) {
    warn('Can not resolve the wrapper DOM.');
  }
  this.scroller = this.wrapper.children[0];
  if (!this.scroller) {
    warn('The wrapper need at least one child element to be scroller.');
  }
  // cache style for better performance
  this.scrollerStyle = this.scroller.style;

  this._init(el, options);
}

initMixin(BScroll);
coreMixin(BScroll);
eventMixin(BScroll);
snapMixin(BScroll);
wheelMixin(BScroll);
scrollbarMixin(BScroll);
pullDownMixin(BScroll);
pullUpMixin(BScroll);
mouseWheelMixin(BScroll);
zoomMixin(BScroll);
infiniteMixin(BScroll);

BScroll.Version = '1.12.6';

/* harmony default export */ __webpack_exports__["default"] = (BScroll);


/***/ }),

/***/ "GS4Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__ = __webpack_require__("OhPr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_31022192_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__ = __webpack_require__("X+2N");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("2x5J")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-31022192"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_31022192_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_31022192_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/page/index.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-31022192", Component.options)
  } else {
    hotAPI.reload("data-v-31022192", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Gl2V":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__("d1LM");

var _util = __webpack_require__("Pn5V");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'getQueryObjSync',
    value: function getQueryObjSync() {
      return (0, _utils.queryParse)(location.href);
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "Go0R":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getViewportSize = getViewportSize;
function getViewportSize() {
  var viewportWidth = void 0;
  var viewportHeight = void 0;
  if (window.innerWidth) {
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
  } else if (document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth) {
    viewportWidth = document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
    viewportHeight = document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight;
  }
  return {
    viewportWidth: viewportWidth,
    viewportHeight: viewportHeight
  };
}

/***/ }),

/***/ "HR9g":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var dataList = exports.dataList = [{
  name: '阿里',
  pinYin: 'ali',
  py: 'al'
}, {
  name: '北京',
  pinYin: 'beijing',
  py: 'bj'
}, {
  name: '包头',
  pinYin: 'baotou',
  py: 'bt'
}, {
  name: '北海',
  pinYin: 'beihai',
  py: 'bh'
}, {
  name: '宝鸡',
  pinYin: 'baoji',
  py: 'bj'
}, {
  name: '成都',
  pinYin: 'chengdu',
  py: 'cd'
}, {
  name: '重庆',
  pinYin: 'chongqing',
  py: 'cq'
}, {
  name: '长沙',
  pinYin: 'changsha',
  py: 'cs'
}, {
  name: '长春',
  pinYin: 'changchun',
  py: 'cc'
}, {
  name: '常州',
  pinYin: 'changzhou',
  py: 'cz'
}, {
  name: '常德',
  pinYin: 'changde',
  py: 'cd'
}, {
  name: '沧州',
  pinYin: 'cangzhou',
  py: 'cz'
}, {
  name: '承德',
  pinYin: 'chengde',
  py: 'cd'
}, {
  name: '长治',
  pinYin: 'changzhi',
  py: 'cz'
}, {
  name: '滁州',
  pinYin: 'chuzhou',
  py: 'cz'
}, {
  name: '大连',
  pinYin: 'dalian',
  py: 'dl'
}, {
  name: '东莞',
  pinYin: 'dongguan',
  py: 'dg'
}, {
  name: '大同',
  pinYin: 'datong',
  py: 'dt'
}, {
  name: '达州',
  pinYin: 'dazhou',
  py: 'dz'
}, {
  name: '鄂尔多斯',
  pinYin: 'eerduosi',
  py: 'eeds'
}, {
  name: '恩施',
  pinYin: 'enshi',
  py: 'es'
}, {
  name: '福州',
  pinYin: 'fuzhou',
  py: 'fz'
}, {
  name: '佛山',
  pinYin: 'foshan',
  py: 'fs'
}, {
  name: '抚顺',
  pinYin: 'fushun',
  py: 'fs'
}, {
  name: '抚州',
  pinYin: 'fuzhou',
  py: 'fz'
}, {
  name: '防城港',
  pinYin: 'fangchenggang',
  py: 'fcg'
}, {
  name: '广州',
  pinYin: 'guangzhou',
  py: 'gz'
}, {
  name: '贵阳',
  pinYin: 'guiyang',
  py: 'gy'
}, {
  name: '桂林',
  pinYin: 'guilin',
  py: 'gl'
}, {
  name: '广元',
  pinYin: 'guangyuan',
  py: 'gy'
}, {
  name: '广安',
  pinYin: 'guangan',
  py: 'ga'
}, {
  name: '杭州',
  pinYin: 'hangzhou',
  py: 'hz'
}, {
  name: '哈尔滨',
  pinYin: 'haerbin',
  py: 'heb'
}, {
  name: '合肥',
  pinYin: 'hefei',
  py: 'hf'
}, {
  name: '呼和浩特',
  pinYin: 'huhehaote',
  py: 'hhht'
}, {
  name: '海口',
  pinYin: 'haikou',
  py: 'hk'
}, {
  name: '黄山',
  pinYin: 'huangshan',
  py: 'hs'
}, {
  name: '呼伦贝尔',
  pinYin: 'hulunbeier',
  py: 'hlbe'
}, {
  name: '邯郸',
  pinYin: 'handan',
  py: 'hd'
}, {
  name: '衡阳',
  pinYin: 'hengyang',
  py: 'hy'
}, {
  name: '汉中',
  pinYin: 'hanzhong',
  py: 'hz'
}, {
  name: '济南',
  pinYin: 'jinan',
  py: 'jn'
}, {
  name: '济宁',
  pinYin: 'jining',
  py: 'jn'
}, {
  name: '九江',
  pinYin: 'jiujiang',
  py: 'jj'
}, {
  name: '景德镇',
  pinYin: 'jingdezhen',
  py: 'jdz'
}, {
  name: '吉林',
  pinYin: 'jilin',
  py: 'jl'
}, {
  name: '江门',
  pinYin: 'jiangmen',
  py: 'jm'
}, {
  name: '晋城',
  pinYin: 'jincheng',
  py: 'jc'
}, {
  name: '嘉峪关',
  pinYin: 'jiayuguan',
  py: 'jyg'
}, {
  name: '酒泉',
  pinYin: 'jiuquan',
  py: 'jq'
}, {
  name: '昆明',
  pinYin: 'kunming',
  py: 'km'
}, {
  name: '克拉玛依',
  pinYin: 'kelamayi',
  py: 'klmy'
}, {
  name: '兰州',
  pinYin: 'lanzhou',
  py: 'lz'
}, {
  name: '丽江',
  pinYin: 'lijiang',
  py: 'lj'
}, {
  name: '洛阳',
  pinYin: 'luoyang',
  py: 'ly'
}, {
  name: '柳州',
  pinYin: 'liuzhou',
  py: 'lz'
}, {
  name: '泸州',
  pinYin: 'luzhou',
  py: 'lz'
}, {
  name: '拉萨',
  pinYin: 'lasa',
  py: 'ls'
}, {
  name: '临汾',
  pinYin: 'linfen',
  py: 'lf'
}, {
  name: '乐山',
  pinYin: 'leshan',
  py: 'ls'
}, {
  name: '聊城',
  pinYin: 'liaocheng',
  py: 'lc'
}, {
  name: '丽水',
  pinYin: 'lishui',
  py: 'ls'
}, {
  name: '绵阳',
  pinYin: 'mianyang',
  py: 'my'
}, {
  name: '梅州',
  pinYin: 'meizhou',
  py: 'mz'
}, {
  name: '眉山',
  pinYin: 'meishan',
  py: 'ms'
}, {
  name: '南昌',
  pinYin: 'nanchang',
  py: 'nc'
}, {
  name: '南京',
  pinYin: 'nanjing',
  py: 'nj'
}, {
  name: '南宁',
  pinYin: 'nanning',
  py: 'nn'
}, {
  name: '宁波',
  pinYin: 'ningbo',
  py: 'nb'
}, {
  name: '南通',
  pinYin: 'nantong',
  py: 'nt'
}, {
  name: '南充',
  pinYin: 'nanchong',
  py: 'nc'
}, {
  name: '内江',
  pinYin: 'neijiang',
  py: 'nj'
}, {
  name: '萍乡',
  pinYin: 'pingxiang',
  py: 'px'
}, {
  name: '攀枝花',
  pinYin: 'panzhihua',
  py: 'pzh'
}, {
  name: '青岛',
  pinYin: 'qingdao',
  py: 'qd'
}, {
  name: '泉州',
  pinYin: 'quanzhou',
  py: 'qz'
}, {
  name: '上海',
  pinYin: 'shanghai',
  py: 'sh'
}, {
  name: '深圳',
  pinYin: 'shenzhen',
  py: 'sz'
}, {
  name: '沈阳',
  pinYin: 'shenyang',
  py: 'sy'
}, {
  name: '石家庄',
  pinYin: 'shijiazhuang',
  py: 'sjz'
}, {
  name: '苏州',
  pinYin: 'suzhou',
  py: 'sz'
}, {
  name: '三亚',
  pinYin: 'sanya',
  py: 'sy'
}, {
  name: '汕头',
  pinYin: 'shantou',
  py: 'st'
}, {
  name: '上饶',
  pinYin: 'shangrao',
  py: 'sr'
}, {
  name: '遂宁',
  pinYin: 'suining',
  py: 'sn'
}, {
  name: '宿迁',
  pinYin: 'suqian',
  py: 'sq'
}, {
  name: '天津',
  pinYin: 'tianjin',
  py: 'tj'
}, {
  name: '太原',
  pinYin: 'taiyuan',
  py: 'ty'
}, {
  name: '台州',
  pinYin: 'taizhou',
  py: 'tz'
}, {
  name: '唐山',
  pinYin: 'tangshan',
  py: 'ts'
}, {
  name: '铁岭',
  pinYin: 'tieling',
  py: 'tl'
}, {
  name: '武汉',
  pinYin: 'wuhan',
  py: 'wh'
}, {
  name: '无锡',
  pinYin: 'wuxi',
  py: 'wx'
}, {
  name: '温州',
  pinYin: 'wenzhou',
  py: 'wz'
}, {
  name: '乌鲁木齐',
  pinYin: 'wulumuqi',
  py: 'wlmq'
}, {
  name: '威海',
  pinYin: 'weihai',
  py: 'wh'
}, {
  name: '渭南',
  pinYin: 'weinan',
  py: 'wn'
}, {
  name: '西安',
  pinYin: 'xian',
  py: 'xa'
}, {
  name: '厦门',
  pinYin: 'xiamen',
  py: 'xm'
}, {
  name: '香港',
  pinYin: 'xianggang',
  py: 'xg'
}, {
  name: '徐州',
  pinYin: 'xuzhou',
  py: 'xz'
}, {
  name: '西宁',
  pinYin: 'xining',
  py: 'xn'
}, {
  name: '襄阳',
  pinYin: 'xiangyang',
  py: 'xy'
}, {
  name: '新余',
  pinYin: 'xinyu',
  py: 'xy'
}, {
  name: '许昌',
  pinYin: 'xuchang',
  py: 'xc'
}, {
  name: '信阳',
  pinYin: 'xinyang',
  py: 'xy'
}, {
  name: '银川',
  pinYin: 'yinchuan',
  py: 'yc'
}, {
  name: '宜昌',
  pinYin: 'yichang',
  py: 'yc'
}, {
  name: '烟台',
  pinYin: 'yantai',
  py: 'yt'
}, {
  name: '扬州',
  pinYin: 'yangzhou',
  py: 'yz'
}, {
  name: '宜宾',
  pinYin: 'yibin',
  py: 'yb'
}, {
  name: '运城',
  pinYin: 'yuncheng',
  py: 'yc'
}, {
  name: '榆林',
  pinYin: 'yulin',
  py: 'yl'
}, {
  name: '盐城',
  pinYin: 'yancheng',
  py: 'yc'
}, {
  name: '岳阳',
  pinYin: 'yueyang',
  py: 'yy'
}, {
  name: '延安',
  pinYin: 'yanan',
  py: 'ya'
}, {
  name: '鹰潭',
  pinYin: 'yingtan',
  py: 'yt'
}, {
  name: '永州',
  pinYin: 'yongzhou',
  py: 'yz'
}, {
  name: '郑州',
  pinYin: 'zhengzhou',
  py: 'zz'
}, {
  name: '珠海',
  pinYin: 'zhuhai',
  py: 'zh'
}, {
  name: '张家界',
  pinYin: 'zhangjiajie',
  py: 'zzj'
}, {
  name: '中山',
  pinYin: 'zhongshan',
  py: 'zs'
}, {
  name: '遵义',
  pinYin: 'zunyi',
  py: 'zy'
}, {
  name: '湛江',
  pinYin: 'zhanjiang',
  py: 'zj'
}, {
  name: '株洲',
  pinYin: 'zhuzhou',
  py: 'zz'
}, {
  name: '肇庆',
  pinYin: 'zhaoqing',
  py: 'zq'
}, {
  name: '枣庄',
  pinYin: 'zaozhuang',
  py: 'zz'
}, {
  name: '舟山',
  pinYin: 'zhoushan',
  py: 'zs'
}, {
  name: '自贡',
  pinYin: 'zigong',
  py: 'zg'
}, {
  name: '资阳',
  pinYin: 'ziyang',
  py: 'zy'
}, {
  name: '张掖',
  pinYin: 'zhangye',
  py: 'zy'
}];

/***/ }),

/***/ "HTWf":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComponent = createComponent;

var _index = __webpack_require__("AJI0");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createComponent(options) {
  return _index2.default.createComponent(options);
}

/***/ }),

/***/ "HhN8":
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "HtJK":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getViewportSize = getViewportSize;
function getViewportSize() {
  var viewportWidth = 0;
  var viewportHeight = 0;

  var documentElementClientWidth = document.documentElement && document.documentElement.clientWidth;
  var documentElementClientHeight = document.documentElement && document.documentElement.clientHeight;
  var bodyClientWidth = document.body && document.body.clientWidth;
  var bodyClientHeight = document.body && document.body.clientHeight;

  viewportWidth = window.innerWidth || documentElementClientWidth || bodyClientWidth;
  viewportHeight = window.innerHeight || documentElementClientHeight || bodyClientHeight;

  return {
    viewportWidth: viewportWidth,
    viewportHeight: viewportHeight
  };
}

/***/ }),

/***/ "IMan":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wex = __webpack_require__("JCgp");

var _wex2 = _interopRequireDefault(_wex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _wex2.default;

/***/ }),

/***/ "IYim":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Page = undefined;

var _BaseCtor2 = __webpack_require__("yVTO");

var _BaseCtor3 = _interopRequireDefault(_BaseCtor2);

var _lifecycle = __webpack_require__("wbAX");

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _OptTransformer = __webpack_require__("njES");

var _OptTransformer2 = _interopRequireDefault(_OptTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = exports.Page = function (_BaseCtor) {
  _inherits(Page, _BaseCtor);

  function Page(options) {
    _classCallCheck(this, Page);

    var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, options));

    _this.cmlType = 'web';

    _this.initOptTransformer(_OptTransformer2.default, {
      type: 'page',
      hooks: _lifecycle2.default.get('cml.hooks'),
      needAddHookMixin: true
    });
    return _this;
  }

  return Page;
}(_BaseCtor3.default);

/***/ }),

/***/ "IcnI":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__("mUbh");

var _actions2 = _interopRequireDefault(_actions);

var _getters = __webpack_require__("UjVw");

var _getters2 = _interopRequireDefault(_getters);

var _state = __webpack_require__("lwq5");

var _state2 = _interopRequireDefault(_state);

var _mutations = __webpack_require__("ukYY");

var _mutations2 = _interopRequireDefault(_mutations);

var _chameleonStore = __webpack_require__("VWiq");

var _chameleonStore2 = _interopRequireDefault(_chameleonStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _chameleonStore2.default)({
  actions: _actions2.default,
  getters: _getters2.default,
  state: _state2.default,
  mutations: _mutations2.default
});

/***/ }),

/***/ "Ie4F":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("VnQQ");

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _buttonWeb = __webpack_require__("laRC");

var _buttonWeb2 = _interopRequireDefault(_buttonWeb);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } //
//
//
//
//
//
//
//
//
//
//

var Index = function Index() {
  _classCallCheck(this, Index);

  this.methods = {
    openIndexList: function openIndexList(arg) {
      var path = arg ? "/pages/page2/index" : "/pages/page/index";
      (0, _index2.default)({ path: path });
    }
  };
};

exports.default = new Index();


exports.default.components = _extends({}, exports.default.components, { cmlBuildinButton: _buttonWeb2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "Ih0d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_index_list_group_vue__ = __webpack_require__("vF0E");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_index_list_group_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_index_list_group_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_index_list_group_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_index_list_group_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6e488e1d_hasScoped_false_optionsId_1_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_index_list_group_vue__ = __webpack_require__("Rc/8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_index_list_group_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6e488e1d_hasScoped_false_optionsId_1_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_index_list_group_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6e488e1d_hasScoped_false_optionsId_1_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_index_list_group_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/cube-ui/src/components/index-list/index-list-group.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e488e1d", Component.options)
  } else {
    hotAPI.reload("data-v-6e488e1d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Ixu1":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "JCgp":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createStore;

var _vuex = __webpack_require__("NYxO");

var _vuex2 = _interopRequireDefault(_vuex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.use(_vuex2.default);

function createStore() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var store = new (Function.prototype.bind.apply(_vuex2.default.Store, [null].concat(args)))();['mapGetters', 'mapMutations', 'mapActions', 'mapState'].forEach(function (key) {
    store[key] = _vuex2.default[key];
  });

  return store;
}

/***/ }),

/***/ "JPzv":
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "JWCL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      staticClass: "cube-index-list-item",
      class: _vm.itemClass,
      attrs: {
        "data-evt-touchstart": "",
        "data-evt-touchend": "",
        "data-evt-click": ""
      },
      on: {
        touchstart: function($event) {
          return _vm.addActiveCls($event)
        },
        touchend: function($event) {
          return _vm.removeActiveCls($event)
        },
        click: _vm.$stopOuterA,
        cml$tap: function($event) {
          _vm.selectItem()
        }
      }
    },
    [
      _vm._t(
        "default",
        [
          _c(
            "div",
            {
              staticClass: "cube-index-list-item-def border-bottom-1px",
              attrs: {}
            },
            [_vm._v("\n      " + _vm._s(_vm.item.name) + "\n    ")]
          )
        ],
        {}
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3c0386e5", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "Jx0+":
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isInitialized = false;

// major events supported:
//   panstart
//   panmove
//   panend
//   swipe
//   longpress
// extra events supported:
//   dualtouchstart
//   dualtouch
//   dualtouchend
//   tap
//   doubletap
//   pressend

var doc = window.document;
var docEl = doc.documentElement;
var slice = Array.prototype.slice;
var gestures = {};
var lastTap = null;

/**
 * find the closest common ancestor
 * if there's no one, return null
 *
 * @param  {Element} el1 first element
 * @param  {Element} el2 second element
 * @return {Element}     common ancestor
 */
function getCommonAncestor(el1, el2) {
  var el = el1;
  while (el) {
    if (el.contains(el2) || el == el2) {
      return el;
    }
    el = el.parentNode;
  }
  return null;
}

/**
 * fire a HTMLEvent
 *
 * @param  {Element} element which element to fire a event on
 * @param  {string}  type    type of event
 * @param  {object}  extra   extra data for the event object
 */
function fireEvent(element, type, extra) {
  var event = doc.createEvent('HTMLEvents');
  event.initEvent(type, true, true);

  if ((typeof extra === 'undefined' ? 'undefined' : _typeof(extra)) === 'object') {
    for (var p in extra) {
      event[p] = extra[p];
    }
  }

  /**
   * A flag to distinguish with other events with the same name generated
   * by another library in the same page.
   */
  event._for = 'cml';

  element.dispatchEvent(event);
}

/**
 * calc the transform
 * assume 4 points ABCD on the coordinate system
 * > rotate：angle rotating from AB to CD
 * > scale：scale ratio from AB to CD
 * > translate：translate shift from A to C
 *
 * @param  {number} x1 abscissa of A
 * @param  {number} y1 ordinate of A
 * @param  {number} x2 abscissa of B
 * @param  {number} y2 ordinate of B
 * @param  {number} x3 abscissa of C
 * @param  {number} y3 ordinate of C
 * @param  {number} x4 abscissa of D
 * @param  {number} y4 ordinate of D
 * @return {object}    transform object like
 *   {rotate, scale, translate[2], matrix[3][3]}
 */
function calc(x1, y1, x2, y2, x3, y3, x4, y4) {
  var rotate = Math.atan2(y4 - y3, x4 - x3) - Math.atan2(y2 - y1, x2 - x1);
  var scale = Math.sqrt((Math.pow(y4 - y3, 2) + Math.pow(x4 - x3, 2)) / (Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2)));
  var translate = [x3 - scale * x1 * Math.cos(rotate) + scale * y1 * Math.sin(rotate), y3 - scale * y1 * Math.cos(rotate) - scale * x1 * Math.sin(rotate)];

  return {
    rotate: rotate,
    scale: scale,
    translate: translate,
    matrix: [[scale * Math.cos(rotate), -scale * Math.sin(rotate), translate[0]], [scale * Math.sin(rotate), scale * Math.cos(rotate), translate[1]], [0, 0, 1]]
  };
}

/**
 * take over the touchstart events. Add new touches to the gestures.
 * If there is no previous records, then bind touchmove, tochend
 * and touchcancel events.
 * new touches initialized with state 'tapping', and within 500 milliseconds
 * if the state is still tapping, then trigger gesture 'press'.
 * If there are two touche points, then the 'dualtouchstart' is triggerd. The
 * node of the touch gesture is their cloest common ancestor.
 *
 * @event
 * @param  {event} event
 */
function touchstartHandler(event) {
  if (Object.keys(gestures).length === 0) {
    docEl.addEventListener('touchmove', touchmoveHandler, true);
    docEl.addEventListener('touchend', touchendHandler, true);
    docEl.addEventListener('touchcancel', touchcancelHandler, true);
  }

  // record every touch
  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var touchRecord = {};

    for (var p in touch) {
      touchRecord[p] = touch[p];
    }

    var gesture = {
      startTouch: touchRecord,
      startTime: Date.now(),
      status: 'tapping',
      element: event.srcElement || event.target,
      pressingHandler: setTimeout(function (element, touch) {
        return function () {
          if (gesture.status === 'tapping') {
            gesture.status = 'pressing';

            fireEvent(element, 'longpress', {
              // add touch data for cml
              touch: touch,
              touches: event.touches,
              changedTouches: event.changedTouches,
              touchEvent: event
            });
          }

          clearTimeout(gesture.pressingHandler);
          gesture.pressingHandler = null;
        };
      }(event.srcElement || event.target, event.changedTouches[i]), 500)
    };
    gestures[touch.identifier] = gesture;
  }

  if (Object.keys(gestures).length == 2) {
    var elements = [];

    for (var p in gestures) {
      elements.push(gestures[p].element);
    }

    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchstart', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }
}

/**
 * take over touchmove events, and handle pan and dual related gestures.
 *
 * 1. traverse every touch point：
 * > if 'tapping' and the shift is over 10 pixles, then it's a 'panning'.
 * 2. if there are two touch points, then calc the tranform and trigger
 *   'dualtouch'.
 *
 * @event
 * @param  {event} event
 */
function touchmoveHandler(event) {
  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var gesture = gestures[touch.identifier];

    if (!gesture) {
      return;
    }

    if (!gesture.lastTouch) {
      gesture.lastTouch = gesture.startTouch;
    }
    if (!gesture.lastTime) {
      gesture.lastTime = gesture.startTime;
    }
    if (!gesture.velocityX) {
      gesture.velocityX = 0;
    }
    if (!gesture.velocityY) {
      gesture.velocityY = 0;
    }
    if (!gesture.duration) {
      gesture.duration = 0;
    }

    var time = Date.now() - gesture.lastTime;
    var vx = (touch.clientX - gesture.lastTouch.clientX) / time;
    var vy = (touch.clientY - gesture.lastTouch.clientY) / time;

    var RECORD_DURATION = 70;
    if (time > RECORD_DURATION) {
      time = RECORD_DURATION;
    }
    if (gesture.duration + time > RECORD_DURATION) {
      gesture.duration = RECORD_DURATION - time;
    }

    gesture.velocityX = (gesture.velocityX * gesture.duration + vx * time) / (gesture.duration + time);
    gesture.velocityY = (gesture.velocityY * gesture.duration + vy * time) / (gesture.duration + time);
    gesture.duration += time;

    gesture.lastTouch = {};

    for (var p in touch) {
      gesture.lastTouch[p] = touch[p];
    }
    gesture.lastTime = Date.now();

    var displacementX = touch.clientX - gesture.startTouch.clientX;
    var displacementY = touch.clientY - gesture.startTouch.clientY;
    var distance = Math.sqrt(Math.pow(displacementX, 2) + Math.pow(displacementY, 2));
    var isVertical = !(Math.abs(displacementX) > Math.abs(displacementY));
    var direction = isVertical ? displacementY >= 0 ? 'down' : 'up' : displacementX >= 0 ? 'right' : 'left';

    // magic number 10: moving 10px means pan, not tap
    if ((gesture.status === 'tapping' || gesture.status === 'pressing') && distance > 10) {
      gesture.status = 'panning';
      gesture.isVertical = isVertical;
      gesture.direction = direction;

      fireEvent(gesture.element, 'panstart', {
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: direction
      });
    }

    if (gesture.status === 'panning') {
      gesture.panTime = Date.now();

      fireEvent(gesture.element, 'panmove', {
        displacementX: displacementX,
        displacementY: displacementY,
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: direction
      });
    }
  }

  if (Object.keys(gestures).length == 2) {
    var position = [];
    var current = [];
    var elements = [];
    var transform;

    for (var i = 0; i < event.touches.length; i++) {
      var touch = event.touches[i];
      var gesture = gestures[touch.identifier];
      position.push([gesture.startTouch.clientX, gesture.startTouch.clientY]);
      current.push([touch.clientX, touch.clientY]);
    }

    for (var p in gestures) {
      elements.push(gestures[p].element);
    }

    transform = calc(position[0][0], position[0][1], position[1][0], position[1][1], current[0][0], current[0][1], current[1][0], current[1][1]);
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouch', {
      transform: transform,
      touches: event.touches,
      touchEvent: event
    });
  }
}

/**
 * handle touchend event
 *
 * 1. if there are tow touch points, then trigger 'dualtouchend'如
 *
 * 2. traverse every touch piont：
 * > if tapping, then trigger 'tap'.
 * If there is a tap 300 milliseconds before, then it's a 'doubletap'.
 * > if padding, then decide to trigger 'panend' or 'swipe'
 * > if pressing, then trigger 'pressend'.
 *
 * 3. remove listeners.
 *
 * @event
 * @param  {event} event
 */
function touchendHandler(event) {

  if (Object.keys(gestures).length == 2) {
    var elements = [];
    for (var p in gestures) {
      elements.push(gestures[p].element);
    }
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }

  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var id = touch.identifier;
    var gesture = gestures[id];

    if (!gesture) {
      continue;
    }

    if (gesture.pressingHandler) {
      clearTimeout(gesture.pressingHandler);
      gesture.pressingHandler = null;
    }

    if (gesture.status === 'tapping') {
      gesture.timestamp = Date.now();
      // fire click, not tap.
      fireEvent(gesture.element, 'cml$tap', {
        touch: touch,
        touchEvent: event
      });

      if (lastTap && gesture.timestamp - lastTap.timestamp < 300) {
        fireEvent(gesture.element, 'doubletap', {
          touch: touch,
          touchEvent: event
        });
      }

      lastTap = gesture;
    }

    if (gesture.status === 'panning') {
      var now = Date.now();
      var duration = now - gesture.startTime;
      var displacementX = touch.clientX - gesture.startTouch.clientX;
      var displacementY = touch.clientY - gesture.startTouch.clientY;

      var velocity = Math.sqrt(gesture.velocityY * gesture.velocityY + gesture.velocityX * gesture.velocityX);
      var isSwipe = velocity > 0.5 && now - gesture.lastTime < 100;
      var extra = {
        duration: duration,
        isSwipe: isSwipe,
        velocityX: gesture.velocityX,
        velocityY: gesture.velocityY,
        displacementX: displacementX,
        displacementY: displacementY,
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: gesture.direction
      };

      fireEvent(gesture.element, 'panend', extra);
      if (isSwipe) {
        fireEvent(gesture.element, 'swipe', extra);
      }
    }

    if (gesture.status === 'pressing') {
      fireEvent(gesture.element, 'pressend', {
        touch: touch,
        touchEvent: event
      });
    }

    delete gestures[id];
  }

  if (Object.keys(gestures).length === 0) {
    docEl.removeEventListener('touchmove', touchmoveHandler, false);
    docEl.removeEventListener('touchend', touchendHandler, false);
    docEl.removeEventListener('touchcancel', touchcancelHandler, false);
  }
}

/**
 * handle touchcancel
 *
 * 1. if there are two touch points, then trigger 'dualtouchend'
 *
 * 2. traverse everty touch point:
 * > if pannnig, then trigger 'panend'
 * > if pressing, then trigger 'pressend'
 *
 * 3. remove listeners
 *
 * @event
 * @param  {event} event
 */
function touchcancelHandler(event) {

  if (Object.keys(gestures).length == 2) {
    var elements = [];
    for (var p in gestures) {
      elements.push(gestures[p].element);
    }
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }

  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var id = touch.identifier;
    var gesture = gestures[id];

    if (!gesture) {
      continue;
    }

    if (gesture.pressingHandler) {
      clearTimeout(gesture.pressingHandler);
      gesture.pressingHandler = null;
    }

    if (gesture.status === 'panning') {
      fireEvent(gesture.element, 'panend', {
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event
      });
    }
    if (gesture.status === 'pressing') {
      fireEvent(gesture.element, 'pressend', {
        touch: touch,
        touchEvent: event
      });
    }
    delete gestures[id];
  }

  if (Object.keys(gestures).length === 0) {
    docEl.removeEventListener('touchmove', touchmoveHandler, true);
    docEl.removeEventListener('touchend', touchendHandler, true);
    docEl.removeEventListener('touchcancel', touchcancelHandler, true);
  }
}

if (!isInitialized) {
  docEl.addEventListener('touchstart', touchstartHandler, true);
  isInitialized = true;
}

/***/ }),

/***/ "K0I2":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var BridgeGlobal = exports.BridgeGlobal = function () {
  var instance = void 0;
  function init() {
    return {
      listenCallbacks: {},
      callbackId: 0
    };
  }
  return {
    getInstance: function getInstance() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
}();

/***/ }),

/***/ "L5K4":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__("k7Ng");

var _env = __webpack_require__("kh/a");

var _scroll = __webpack_require__("PnfF");

var _scroll2 = _interopRequireDefault(_scroll);

var _indexListGroup = __webpack_require__("Ih0d");

var _indexListGroup2 = _interopRequireDefault(_indexListGroup);

var _scroll3 = __webpack_require__("2miP");

var _scroll4 = _interopRequireDefault(_scroll3);

var _deprecated = __webpack_require__("/aye");

var _deprecated2 = _interopRequireDefault(_deprecated);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var COMPONENT_NAME = 'cube-index-list';
var EVENT_SELECT = 'select';
var EVENT_TITLE_CLICK = 'title-click';
var EVENT_PULLING_UP = 'pulling-up';
var EVENT_PULLING_DOWN = 'pulling-down';

var ANCHOR_HEIGHT = _env.inBrowser ? window.innerHeight <= 480 ? 17 : 18 : 18;
var transformStyleKey = (0, _dom.prefixStyle)('transform');

exports.default = {
  name: COMPONENT_NAME,
  mixins: [_scroll4.default, _deprecated2.default],
  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    speed: {
      type: Number,
      default: 0
    },
    navbar: {
      type: Boolean,
      default: true
    },
    pullDownRefresh: {
      type: [Object, Boolean],
      default: undefined,
      deprecated: {
        replacedBy: 'options'
      }
    },
    pullUpLoad: {
      type: [Object, Boolean],
      default: undefined,
      deprecated: {
        replacedBy: 'options'
      }
    }
  },
  data: function data() {
    return {
      scrollEvents: ['scroll'],
      currentIndex: 0,
      scrollY: -1,
      diff: -1,
      titleHeight: 0
    };
  },

  computed: {
    fixedTitle: function fixedTitle() {
      this.title && !this.titleHeight && this._caculateTitleHeight();

      return this.scrollY <= -this.titleHeight && this.data[this.currentIndex] ? this.data[this.currentIndex].name : '';
    },
    shortcutList: function shortcutList() {
      return this.data.map(function (group) {
        return group ? group.shortcut || group.name.substr(0, 1) : '';
      });
    },
    scrollOptions: function scrollOptions() {
      return Object.assign({}, {
        pullDownRefresh: this.pullDownRefresh,
        pullUpLoad: this.pullUpLoad
      }, this.options);
    }
  },
  created: function created() {
    this.groupList = [];
    this.listHeight = [];
    this.touch = {};
    this.subTitleHeight = 0;
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.title && _this._caculateTitleHeight();
      _this._calculateHeight();
    });
  },

  methods: {
    /* TODO: remove refresh next minor version */
    refresh: function refresh() {
      this.$refs.scroll.refresh();
    },
    selectItem: function selectItem(item) {
      this.$emit(EVENT_SELECT, item);
    },
    scroll: function scroll(pos) {
      this.scrollY = pos.y;
    },
    titleClick: function titleClick() {
      this.$emit(EVENT_TITLE_CLICK, this.title);
    },
    forceUpdate: function forceUpdate() {
      this.$refs.scroll.forceUpdate();
    },
    onShortcutTouchStart: function onShortcutTouchStart(e) {
      var target = (0, _dom.getMatchedTarget)(e, 'cube-index-list-nav-item');
      if (!target) return;
      var anchorIndex = (0, _dom.getData)(target, 'index');
      var firstTouch = e.touches[0];
      this.touch.y1 = firstTouch.pageY;
      this.touch.anchorIndex = anchorIndex;

      this._scrollTo(anchorIndex);
    },
    onShortcutTouchMove: function onShortcutTouchMove(e) {
      var firstTouch = e.touches[0];
      this.touch.y2 = firstTouch.pageY;
      var delta = (this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT | 0;
      var anchorIndex = parseInt(this.touch.anchorIndex) + delta;

      this._scrollTo(anchorIndex);
    },
    onPullingUp: function onPullingUp() {
      this.$emit(EVENT_PULLING_UP);
    },
    onPullingDown: function onPullingDown() {
      this.$emit(EVENT_PULLING_DOWN);
    },
    _caculateTitleHeight: function _caculateTitleHeight() {
      this.titleHeight = this.$refs.title ? (0, _dom.getRect)(this.$refs.title).height : 0;
    },
    _calculateHeight: function _calculateHeight() {
      this.groupList = this.$el.getElementsByClassName('cube-index-list-group');
      var subTitleEl = this.$el.getElementsByClassName('cube-index-list-anchor')[0];
      this.subTitleHeight = subTitleEl ? (0, _dom.getRect)(subTitleEl).height : 0;
      this.listHeight = [];

      if (!this.groupList) {
        return;
      }

      var height = this.titleHeight;
      this.listHeight.push(height);
      for (var i = 0; i < this.groupList.length; i++) {
        var item = this.groupList[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    },
    _scrollTo: function _scrollTo(index) {
      if (index < 0) {
        index = 0;
      } else if (index > this.listHeight.length - 2) {
        index = this.listHeight.length - 2;
      }
      this.$refs.scroll.scrollToElement(this.groupList[index], this.speed);
      this.scrollY = this.$refs.scroll.scroll.y;
    }
  },
  watch: {
    data: function data() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2._calculateHeight();
      });
    },
    title: function title(newVal) {
      var _this3 = this;

      this.$nextTick(function () {
        _this3._caculateTitleHeight();
        _this3._calculateHeight();
      });
    },
    diff: function diff(newVal) {
      var fixedTop = newVal > 0 && newVal < this.subTitleHeight ? newVal - this.subTitleHeight : 0;
      if (this.fixedTop === fixedTop) {
        return;
      }
      this.fixedTop = fixedTop;
      this.$refs.fixed.style[transformStyleKey] = 'translate3d(0,' + fixedTop + 'px,0)';
    },
    scrollY: function scrollY(newY) {
      var listHeight = this.listHeight;
      // top
      if (newY > -this.titleHeight) {
        this.currentIndex = 0;
        return;
      }
      // midd
      for (var i = 0; i < listHeight.length - 1; i++) {
        var height1 = listHeight[i];
        var height2 = listHeight[i + 1];
        if (-newY >= height1 && -newY < height2) {
          this.currentIndex = i;
          this.diff = height2 + newY;
          return;
        }
      }
      // bottom
      this.currentIndex = listHeight.length - 2;
    }
  },
  components: {
    CubeScroll: _scroll2.default,
    CubeIndexListGroup: _indexListGroup2.default
  }
};

/***/ }),

/***/ "LQwH":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "LYi0":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "LjcS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page-wrapper  cml-base cml-view", attrs: {} },
    [
      _c(
        "cml-buildin-scroller",
        {
          staticClass: "index-list-wrapper  cml-base cml-scroller",
          attrs: {
            height: -1,
            "scroll-top": _vm.offsetTop,
            "data-evt-onscroll": ""
          },
          on: {
            onscroll: function($event) {
              _vm._cmlEventProxy($event, "handleScroll")
            }
          }
        },
        _vm._l(_vm.list, function(listitem, index) {
          return _c(
            "div",
            { staticClass: "index-list-item  cml-base cml-view", attrs: {} },
            [
              _c(
                "div",
                {
                  staticClass: "index-list-item-name  cml-base cml-view",
                  style: _vm._cmlStyleProxy(_vm.compItemNameHeight, {
                    rem: true,
                    scale: 0.5,
                    remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
                    autoprefixOptions: {
                      browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                      grid: false
                    }
                  }),
                  attrs: {}
                },
                [
                  _c(
                    "span",
                    {
                      staticClass:
                        "index-list-item-name-text  cml-base cml-text",
                      attrs: {}
                    },
                    [_vm._v(_vm._s(listitem.name))]
                  )
                ]
              ),
              _vm._v(" "),
              _vm._l(listitem.items, function(subitem, index) {
                return _c(
                  "div",
                  {
                    staticClass: "index-list-item-content  cml-base cml-view",
                    style: _vm._cmlStyleProxy(_vm.compItemContentHeight, {
                      rem: true,
                      scale: 0.5,
                      remOptions: {
                        rootValue: { cpx: 75 },
                        minPixelValue: null
                      },
                      autoprefixOptions: {
                        browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                        grid: false
                      }
                    }),
                    attrs: { "data-evt-click": "" },
                    on: {
                      click: _vm.$stopOuterA,
                      cml$tap: function($event) {
                        _vm._cmlInlineStatementEventProxy(
                          "handleSelect",
                          subitem
                        )
                      }
                    }
                  },
                  [
                    _c(
                      "span",
                      {
                        staticClass:
                          "index-list-item-content-text  cml-base cml-text",
                        attrs: {}
                      },
                      [_vm._v(" " + _vm._s(subitem.name))]
                    )
                  ]
                )
              })
            ],
            2
          )
        })
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "short-cut-wrapper  cml-base cml-view",
          style: _vm._cmlStyleProxy(_vm.compScwStyle, {
            rem: true,
            scale: 0.5,
            remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
            autoprefixOptions: {
              browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
              grid: false
            }
          }),
          attrs: {}
        },
        _vm._l(_vm.shortcut, function(item, index) {
          return _c(
            "div",
            {
              staticClass: "short-cut-item  cml-base cml-view",
              attrs: { "data-evt-click": "" },
              on: {
                click: _vm.$stopOuterA,
                cml$tap: function($event) {
                  _vm._cmlInlineStatementEventProxy("scrollToItem", item)
                }
              }
            },
            [
              _c(
                "span",
                {
                  staticClass: "short-cut-item-text  cml-base cml-text",
                  style: _vm._cmlStyleProxy(
                    _vm.activeIndex === index ? "color:orange" : "",
                    {
                      rem: true,
                      scale: 0.5,
                      remOptions: {
                        rootValue: { cpx: 75 },
                        minPixelValue: null
                      },
                      autoprefixOptions: {
                        browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                        grid: false
                      }
                    }
                  ),
                  attrs: {}
                },
                [_vm._v(_vm._s(item))]
              )
            ]
          )
        })
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7bcfe391", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "M8Ay":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _viewport = __webpack_require__("HtJK");

var idCnt = 0;

exports.default = {
  updated: function updated() {
    var el = this.$el;
    if (!el || el.nodeType !== 1) {
      return;
    }
    if (this._rootId) {
      if (el.className.indexOf('cml-root') <= -1) {
        el.classList.add('cml-root');
        el.classList.add('cml-flx');
        el.setAttribute('data-cml-root-id', this._rootId);
      }
    }

    var tagName = this.$options && this.$options._componentTag;
    var metaUp = chameleon._meta.updated;
    if (!metaUp[tagName]) {
      metaUp[tagName] = 0;
    }
    metaUp[tagName]++;
  },
  mounted: function mounted() {
    var tagName = this.$options && this.$options._componentTag;
    var el = this.$el;
    if (!el || el.nodeType !== 1) {
      return;
    }
    if (typeof chameleon._components[tagName] !== 'undefined') {
      chameleon._components[tagName]++;
    }
    var metaMt = chameleon._meta.mounted;
    if (!metaMt[tagName]) {
      metaMt[tagName] = 0;
    }
    metaMt[tagName]++;

    // when this is the root element of Vue instance.
    if (this === this.$root) {
      var rootId = 'cml-root-' + idCnt++;
      if (!chameleon._root) {
        chameleon._root = {};
      }
      chameleon._root[rootId] = this;
      this._rootId = rootId;
      if (el.nodeType !== 1) {
        return;
      }
      el.classList.add('cml-root');
      el.classList.add('cml-flx');
      el.setAttribute('data-cml-root-id', rootId);

      var _getViewportSize = (0, _viewport.getViewportSize)(),
          viewportHeight = _getViewportSize.viewportHeight;

      el.style.height = viewportHeight + 'px';
    }
  },
  destroyed: function destroyed() {
    var el = this.$el;
    if (!el || el.nodeType !== 1) {
      return;
    }

    if (this._rootId) {
      delete chameleon._root[this._rootId];
      delete this._rootId;
    }
    var tagName = this.$options && this.$options._componentTag;
    if (typeof chameleon._components[tagName] !== 'undefined') {
      chameleon._components[tagName]--;
    }
    var metaDs = chameleon._meta.destroyed;
    if (!metaDs[tagName]) {
      metaDs[tagName] = 0;
    }
    metaDs[tagName]++;
  },


  methods: {}
};

/***/ }),

/***/ "MPvF":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.str2obj = str2obj;
exports.cpx2px = cpx2px;
exports.pxTransform = pxTransform;
exports.cmlStyleTransfer = cmlStyleTransfer;
exports.getValBetweenMaxAndMin = getValBetweenMaxAndMin;
function str2obj(str) {
    var styleAry = str.split(';');
    var obj = {};
    styleAry.forEach(function (element) {
        var classObj = element.split(':');
        var className = String(classObj[0]).replace(/(^\s*)|(\s*)$/g, "");
        var classValue = String(classObj[1]).replace(/(^\s*)|(\s*)$/g, "");
        obj[className] = classValue;
    });
    return obj;
}
function cpx2px(cpx) {
    if (typeof cpx !== 'number') {
        console.error('Parameter must be a number');
        return;
    }
    var viewportWidth = window.innerWidth;
    var px = viewportWidth / 750 * cpx;
    return px;
}
function pxTransform(s) {
    if (!s) return '';
    if (/(-?\d*\.?\d*)cpx/ig.test(s)) {
        return s.replace(/(-?\d*\.?\d*)cpx/ig, function (matchs, $1) {
            return cpx2px(Number($1)) + 'px';
        });
    }
    return s;
}
function cmlStyleTransfer(str) {
    if (!str) return {};
    var styleAry = str.split(';');
    var obj = {};
    styleAry.forEach(function (element) {
        var classObj = element.split(':');
        var className = String(classObj[0]).replace(/(^\s*)|(\s*)$/g, "");
        if (className) {
            var classValue = pxTransform(String(classObj[1]).replace(/(^\s*)|(\s*)$/g, ""));
            obj[className] = classValue;
        }
    });
    return obj;
}

function getValBetweenMaxAndMin(value, maxValue, minValue) {
    if (isNaN(Number(value))) {
        return '';
    }
    if (isNaN(maxValue) || isNaN(minValue)) {
        return value;
    }
    if (maxValue != Infinity && maxValue <= Number(value)) {
        value = String(maxValue);
    }
    if (minValue != -Infinity && minValue >= Number(value)) {
        value = String(minValue);
    }
    return value;
}

/***/ }),

/***/ "MtSG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__ = __webpack_require__("FND0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d6a5d2e_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__ = __webpack_require__("cO5h");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("LQwH")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2d6a5d2e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d6a5d2e_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d6a5d2e_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/page2/index.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d6a5d2e", Component.options)
  } else {
    hotAPI.reload("data-v-2d6a5d2e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Mw6c":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reload = reload;

var _index = __webpack_require__("zYxj");

var moduleName = 'cml'; /**
                         * 重新加载weex页面
                         */

var methodName = 'reloadPage';

function reload() {
  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  /**
   * url
   */
  (0, _index.callNative)(moduleName, methodName, param, function () {});
}

reload.prototype.moduleName = moduleName;
reload.prototype.methodName = methodName;

/***/ }),

/***/ "NIpK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_scrollable_vue__ = __webpack_require__("nQTj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_scrollable_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_scrollable_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_scrollable_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_scrollable_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_053b33c2_hasScoped_true_optionsId_1_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_scrollable_vue__ = __webpack_require__("zVv0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("k2OQ")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-053b33c2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_scrollable_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_053b33c2_hasScoped_true_optionsId_1_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_scrollable_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_053b33c2_hasScoped_true_optionsId_1_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_scrollable_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/chameleon-ui-builtin/assets/vue/scrollable.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-053b33c2", Component.options)
  } else {
    hotAPI.reload("data-v-053b33c2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "NnZs":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //
//
//
//
//
//
//
//

var _indexList = __webpack_require__("aaSh");

var _indexList2 = _interopRequireDefault(_indexList);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var words = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var Indexlist = function () {
  function Indexlist() {
    _classCallCheck(this, Indexlist);

    this.props = {
      dataList: {
        type: Array,
        default: []
      }
    };
    this.name = "indexlist";
    this.data = {
      list: [],
      percent: 50
    };
    this.methods = {
      initData: function initData() {
        var cityData = [];
        words.forEach(function (item, index) {
          cityData[index] = {};
          cityData[index].items = [];
          cityData[index].name = item;
        });
        this.dataList.forEach(function (item) {
          var firstName = item.pinYin.substring(0, 1).toUpperCase();
          var index = words.indexOf(firstName);
          cityData[index].items.push(item);
        });
        this.list = cityData;
      },
      onItemSelect: function onItemSelect(item) {
        this.$cmlEmit('onselect', item);
      }
    };
  }

  _createClass(Indexlist, [{
    key: "mounted",
    value: function mounted() {
      this.initData();
    }
  }]);

  return Indexlist;
}();

exports.default = new Indexlist();


exports.default.components = _extends({}, exports.default.components, { cubeIndexList: _indexList2.default });


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "ONZj":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = px2cpx;

var _getWidth = __webpack_require__("09Zy");

var _getWidth2 = _interopRequireDefault(_getWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function px2cpx(px) {

  if (typeof px !== 'number') {
    console.error('Parameter must be a number');
    return;
  }

  var viewportWidth = _getWidth2.default.getWidth();
  var cpx = +(750 / viewportWidth * px).toFixed(3);
  return cpx;
}

/***/ }),

/***/ "Octk":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serializeProtocol = serializeProtocol;
exports.deserializeProtocol = deserializeProtocol;
exports.registerCallback = registerCallback;
exports.registerListen = registerListen;
exports.dispatchProtocol = dispatchProtocol;

var _global = __webpack_require__("K0I2");

var _const = __webpack_require__("CW7I");

function serializeProtocol(_ref) {
  var action = _ref.action,
      module = _ref.module,
      method = _ref.method,
      args = _ref.args,
      callbackId = _ref.callbackId;

  var param = encodeURIComponent(JSON.stringify(args));
  var url = 'cml://channel?';
  url += 'module=' + module + '&';
  url += 'action=' + action + '&';
  url += 'method=' + method + '&';
  url += 'args=' + param + '&';
  url += 'callbackId=' + callbackId;
  return url;
}

function deserializeProtocol(ptcStr) {
  var ptcObj = {};
  var arr = ptcStr && ptcStr.split(/(\?|&)/);
  for (var i = 0; i < arr.length; i++) {
    if (~arr[i].indexOf('=')) {
      var keyValue = arr[i].match(/([^=]*)=(.*)/);
      ptcObj[keyValue[1]] = decodeURIComponent(keyValue[2]);
    }
  }

  // 获得所需的参数
  var action = ptcObj.action,
      module = ptcObj.module,
      method = ptcObj.method,
      args = ptcObj.args,
      callbackId = ptcObj.callbackId;


  try {
    args = JSON.parse(args);
  } catch (e) {}

  try {
    args.data = args.data ? decodeURIComponent(args.data) : '{}';
    args.data = JSON.parse(args.data);
  } catch (e) {}

  var listenName = module + '_' + method;

  return {
    action: action, module: module, method: method, args: args, callbackId: callbackId, listenName: listenName
  };
}

/**
 * 注册主动调用端上的回调监听
 * @param {Function} callback 回调方法体
 */
function registerCallback(module, method, callback) {
  var module = module || _const.moduleDefault;
  var instance = _global.BridgeGlobal.getInstance();
  var callbackId = module + '_' + method + '_callback_' + instance.callbackId;
  instance.listenCallbacks[callbackId] = callback;
  instance.callbackId++;
  return callbackId;
}

/**
 * 注册等待端上主动调用监听方法
 * @param {Function} callback 监听方法体
 */
function registerListen(module, method, callback) {
  var instance = _global.BridgeGlobal.getInstance();
  var module = module || _const.moduleDefault;
  var listenName = module + '_' + method;
  instance.listenCallbacks[listenName] = callback;
  return listenName;
}

/**
 * 处理通道协议
 * @param {string} protocol 协议
 */
function dispatchProtocol(protocol) {
  var _deserializeProtocol = deserializeProtocol(protocol),
      action = _deserializeProtocol.action,
      module = _deserializeProtocol.module,
      method = _deserializeProtocol.method,
      args = _deserializeProtocol.args,
      callbackId = _deserializeProtocol.callbackId,
      listenName = _deserializeProtocol.listenName;

  var instance = _global.BridgeGlobal.getInstance();

  if (action === 'callbackToJs') {
    instance.listenCallbacks[callbackId] && instance.listenCallbacks[callbackId](args);
  }

  if (action === 'invokeJsMethod') {
    instance.listenCallbacks[listenName] && instance.listenCallbacks[listenName](args);
  }
}

/***/ }),

/***/ "OhPr":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("+iRC");

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _indexlistWeb = __webpack_require__("roJc");

var _indexlistWeb2 = _interopRequireDefault(_indexlistWeb);

var _index3 = __webpack_require__("HR9g");

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } //
//
//
//
//
//
//
//

var Index = function Index() {
  _classCallCheck(this, Index);

  this.data = {
    dataList: _index3.dataList
  };
  this.methods = {
    onItemSelect: function onItemSelect(e) {
      (0, _index2.default)({
        message: JSON.stringify(e.detail),
        duration: 1000
      });
    }
  };
};

exports.default = new Index();


exports.default.components = _extends({}, exports.default.components, { indexlist: _indexlistWeb2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "Pn5V":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyProtoProperty = copyProtoProperty;
/* eslint-disable */
/**
 * 原型上的方法放到对象上
 * @param  {Object} obj   待添加属性对象
 * @param  {Object} proto 差异方法
 * @return {Object}       修改后值
 */
function copyProtoProperty() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var EXPORT_OBJ = obj;
  var EXPORT_PROTO = EXPORT_OBJ.__proto__;

  if (EXPORT_PROTO.constructor !== Object) {
    Object.getOwnPropertyNames(EXPORT_PROTO).forEach(function (key) {
      if (!/constructor|prototype|length/ig.test(key)) {
        // 原型上有自身没有的属性 放到自身上
        if (!EXPORT_OBJ.hasOwnProperty(key)) {
          EXPORT_OBJ[key] = EXPORT_PROTO[key];
        }
      }
    });
  }

  return EXPORT_OBJ;
}

/***/ }),

/***/ "PnfF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_scroll_vue__ = __webpack_require__("ED0k");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_scroll_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_scroll_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_scroll_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_scroll_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_9f05d12a_hasScoped_false_optionsId_1_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_scroll_vue__ = __webpack_require__("VFh4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("To5o")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_scroll_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_9f05d12a_hasScoped_false_optionsId_1_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_scroll_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_9f05d12a_hasScoped_false_optionsId_1_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_scroll_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/cube-ui/src/components/scroll/scroll.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9f05d12a", Component.options)
  } else {
    hotAPI.reload("data-v-9f05d12a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Q/N/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scrollable",
    {
      staticClass: " cml-base cml-scrollable",
      attrs: {
        cstyle: _vm.cstyle,
        bottomOffset: _vm.bottomOffset,
        scrollDirection: _vm.scrollDirection,
        bounce: _vm.bounce,
        height: _vm.heightPx,
        width: _vm.widthPx,
        template: "scroller",
        scrollTop: _vm.scrollTopPx,
        scrollLeft: _vm.scrollLeftPx,
        "data-evt-onscroll": "",
        "data-evt-scrolltobottom": ""
      },
      on: { onscroll: _vm.scrollEvent, scrolltobottom: _vm.scrolltobottomEvent }
    },
    [_vm._t("default", null, {})],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ba8aae36", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "Q9kK":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "QYOt":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.event = exports.base = undefined;

var _base = __webpack_require__("M8Ay");

var _base2 = _interopRequireDefault(_base);

var _event = __webpack_require__("4Ypl");

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.base = _base2.default;
exports.event = _event2.default;

/***/ }),

/***/ "Qr3T":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyProtoProperty = copyProtoProperty;
/**
 * 原型上的方法放到对象上
 * @param  {Object} obj   待添加属性对象
 * @param  {Object} proto 差异方法
 * @return {Object}       修改后值
 */
function copyProtoProperty() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var EXPORT_OBJ = obj;
  var EXPORT_PROTO = EXPORT_OBJ.__proto__;

  if (EXPORT_PROTO.constructor !== Object) {
    Object.getOwnPropertyNames(EXPORT_PROTO).forEach(function (key) {
      if (!/constructor|prototype|length/ig.test(key)) {
        //原型上有自身没有的属性 放到自身上
        if (!EXPORT_OBJ.hasOwnProperty(key)) {
          EXPORT_OBJ[key] = EXPORT_PROTO[key];
        }
      }
    });
  }

  return EXPORT_OBJ;
}

/***/ }),

/***/ "R0Nl":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIos = isIos;
exports.isAndroid = isAndroid;
exports.compareVersion = compareVersion;
/**
 * 存放关于所处环境判断的方法
 */
var ua = window.navigator.userAgent;

/**
 * 判断是ios
 * @returns {boolean}
 */
function isIos() {
  return !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}

/**
 * 判断是安卓
 * @returns {boolean}
 */
function isAndroid() {
  return ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;
}

/**
 * 比较版本号
 * @param {String} v1 版本号1
 * @param {String} symb 比较符
 * @param {String} v2 版本号2
 */
function compareVersion(v1, symb, v2) {
  v1 = parseVersion(v1);
  v2 = parseVersion(v2);
  if (symb.indexOf('=') !== -1 && v1 === v2) {
    return true;
  }
  if (symb.indexOf('>') !== -1 && v1 > v2) {
    return true;
  }
  if (symb.indexOf('<') !== -1 && v1 < v2) {
    return true;
  }
  return false;
}

function parseVersion() {
  var version = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  version = version.split('.');
  version.length = 4;

  var ret = [];
  version.forEach(function (n) {
    n = n * 1;
    if (n) {
      ret.push(n >= 10 ? n : '0' + n);
    } else {
      ret.push('00');
    }
  });
  return parseInt(ret.join(''), 10);
}

/***/ }),

/***/ "Rc/8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("li", { staticClass: "cube-index-list-group", attrs: {} }, [
    _c("h2", {
      staticClass: "cube-index-list-anchor",
      attrs: {},
      domProps: { innerHTML: _vm._s(_vm.group.name) }
    }),
    _vm._v(" "),
    _c(
      "ul",
      [
        _vm._t(
          "default",
          _vm._l(_vm.group.items, function(item, index) {
            return _c("cube-index-list-item", {
              key: index,
              attrs: { item: item, "data-evt-select": "" },
              on: { select: _vm.selectItem }
            })
          }),
          {}
        )
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6e488e1d", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "RwSr":
/***/ (function(module, exports, __webpack_require__) {

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

var _app = __webpack_require__("v8KS");

var _app2 = _interopRequireDefault(_app);

var _index = __webpack_require__("IcnI");

var _index2 = _interopRequireDefault(_index);

var _$ROUTER = __webpack_require__("sufT");

var _$ROUTER2 = _interopRequireDefault(_$ROUTER);

var _routerConfig = __webpack_require__("oJVY");

var _routerConfig2 = _interopRequireDefault(_routerConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chameleonRuntime2.default.bootstrap({ app: _app2.default, store: _index2.default, router: _$ROUTER2.default, routerConfig: _routerConfig2.default });

/***/ }),

/***/ "T1iD":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.open = open;

var _index = __webpack_require__("zYxj");

var _utils = __webpack_require__("d1LM");

var moduleName = 'cml';
var methodName = 'openPage';

function open(param) {
  /**
   * param: url, commonPatchParams, extraOptions
   */
  var url = param.url;
  var commonPatchParams = param.commonPatchParams;
  var closeCurrent = param.extraOptions && param.extraOptions.closeCurrent || false;
  url = (0, _utils.getUrlWithConnector)(url) + (0, _utils.queryStringify)(commonPatchParams);
  var openObj = (0, _utils.getOpenObj)(url);
  var urlOpen = openObj.weex ? openObj.weex : openObj.web;

  (0, _index.callNative)(moduleName, methodName, {
    url: urlOpen,
    closeCurrent: closeCurrent
  }, function () {});
}

open.prototype.moduleName = moduleName;
open.prototype.methodName = methodName;

/***/ }),

/***/ "TdLX":
/***/ (function(module, exports) {

var _ = module.exports = {};

_.getStyleKeyValue = function (declaration) {
  var colonIndex = declaration.indexOf(':');
  var key = declaration.slice(0, colonIndex);
  var value = declaration.slice(colonIndex + 1);
  return {
    key: key, value: value
  };
};

/***/ }),

/***/ "To5o":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Ud/e":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getViewportSize = getViewportSize;
function getViewportSize() {
  var viewportWidth = 0;
  var viewportHeight = 0;

  var documentElementClientWidth = document.documentElement && document.documentElement.clientWidth;
  var documentElementClientHeight = document.documentElement && document.documentElement.clientHeight;
  var bodyClientWidth = document.body && document.body.clientWidth;
  var bodyClientHeight = document.body && document.body.clientHeight;

  viewportWidth = window.innerWidth || documentElementClientWidth || bodyClientWidth;
  viewportHeight = window.innerHeight || documentElementClientHeight || bodyClientHeight;

  return {
    viewportWidth: viewportWidth,
    viewportHeight: viewportHeight
  };
}

/***/ }),

/***/ "UgjY":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _call = __webpack_require__("a0EA");

var _listen = __webpack_require__("Yfae");

var _util = __webpack_require__("Pn5V");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'initChannel',
    value: function initChannel() {
      (0, _listen.init)();
    }
  }, {
    key: 'callNative',
    value: function callNative(module, method, args, callback) {
      _call.call.apply(undefined, ['invokeNativeMethod'].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: 'listenNative',
    value: function listenNative(module, method, callback) {
      _listen.listen.apply(undefined, arguments);
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "Uibo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "index-list-wrapper  cml-base cml-view", attrs: {} },
    [
      _c("cube-index-list", {
        staticClass: " cml-base cml-cube-index-list",
        attrs: { data: _vm.list, "data-evt-select": "" },
        on: { select: _vm.onItemSelect }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6d19485a", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "UjVw":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),

/***/ "UznO":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chooseImage = chooseImage;

var _index = __webpack_require__("zYxj");

var moduleName = 'cml';
var methodName = 'chooseImage';

function chooseImage(param, cb) {
  /**
   * type: camera/album/choice
   * cut: true/false
   * quality: 默认100 [0-100]
   * width: 0
   * height: 0
   */
  (0, _index.callNative)(moduleName, methodName, param, function (res) {
    if (res.errno == 0) {
      var base64 = 'data:image/' + res.data.type + ';base64,' + res.data.image;
      res.data.base64 = base64;
    } else {
      res.data = {
        type: '',
        image: '',
        base64: ''
      };
    }

    /**
    * errno: 0成功，1失败，2取消，3没权限
    * msg
    * data: {
    *   type,
    *   image,
    *   base64
    * }
    */
    cb(res);
  });
}

chooseImage.prototype.moduleName = moduleName;
chooseImage.prototype.methodName = methodName;

/***/ }),

/***/ "VFh4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { ref: "wrapper", staticClass: "cube-scroll-wrapper", attrs: {} },
    [
      _c(
        "div",
        { staticClass: "cube-scroll-content", attrs: {} },
        [
          _c(
            "div",
            {
              ref: "listWrapper",
              staticClass: "cube-scroll-list-wrapper",
              attrs: {}
            },
            [
              _vm._t(
                "default",
                [
                  _c(
                    "ul",
                    { staticClass: "cube-scroll-list", attrs: {} },
                    _vm._l(_vm.data, function(item, index) {
                      return _c(
                        "li",
                        {
                          key: index,
                          staticClass: "cube-scroll-item border-bottom-1px",
                          attrs: { "data-evt-click": "" },
                          on: {
                            click: _vm.$stopOuterA,
                            cml$tap: function($event) {
                              _vm.clickItem(item)
                            }
                          }
                        },
                        [_vm._v(_vm._s(item))]
                      )
                    })
                  )
                ],
                {}
              )
            ],
            2
          ),
          _vm._v(" "),
          _vm._t(
            "pullup",
            [
              _vm.pullUpLoad
                ? _c("div", { staticClass: "cube-pullup-wrapper", attrs: {} }, [
                    !_vm.isPullUpLoad
                      ? _c(
                          "div",
                          { staticClass: "before-trigger", attrs: {} },
                          [_c("span", [_vm._v(_vm._s(_vm.pullUpTxt))])]
                        )
                      : _c(
                          "div",
                          { staticClass: "after-trigger", attrs: {} },
                          [_c("loading")],
                          1
                        )
                  ])
                : _vm._e()
            ],
            { pullUpLoad: _vm.pullUpLoad, isPullUpLoad: _vm.isPullUpLoad }
          )
        ],
        2
      ),
      _vm._v(" "),
      _vm.pullDownRefresh
        ? _c(
            "div",
            { ref: "pulldown", staticClass: "cube-pulldown", attrs: {} },
            [
              _vm._t(
                "pulldown",
                [
                  _c(
                    "div",
                    {
                      staticClass: "cube-pulldown-wrapper",
                      style: _vm.pullDownStyle,
                      attrs: {}
                    },
                    [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.beforePullDown,
                              expression: "beforePullDown"
                            }
                          ],
                          staticClass: "before-trigger",
                          attrs: {}
                        },
                        [
                          _c("bubble", {
                            staticClass: "bubble",
                            attrs: { y: _vm.bubbleY }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !_vm.beforePullDown,
                              expression: "!beforePullDown"
                            }
                          ],
                          staticClass: "after-trigger",
                          attrs: {}
                        },
                        [
                          _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.isPullingDown,
                                  expression: "isPullingDown"
                                }
                              ],
                              staticClass: "loading",
                              attrs: {}
                            },
                            [_c("loading")],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: !_vm.isPullingDown,
                                  expression: "!isPullingDown"
                                }
                              ],
                              staticClass: "cube-pulldown-loaded",
                              attrs: {}
                            },
                            [_c("span", [_vm._v(_vm._s(_vm.refreshTxt))])]
                          )
                        ]
                      )
                    ]
                  )
                ],
                {
                  pullDownRefresh: _vm.pullDownRefresh,
                  pullDownStyle: _vm.pullDownStyle,
                  beforePullDown: _vm.beforePullDown,
                  isPullingDown: _vm.isPullingDown,
                  bubbleY: _vm.bubbleY
                }
              )
            ],
            2
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9f05d12a", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "VNbL":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canIUse = canIUse;

var _index = __webpack_require__("zYxj");

var cModuleName = 'cml';
var cMethodName = 'canIUse';

function canIUse(_ref, cb) {
  var method = _ref.method;

  var moduleName = this[method] && this[method].prototype.moduleName;
  var methodName = this[method] && this[method].prototype.methodName;

  if (module && method) {
    (0, _index.callNative)(cModuleName, cMethodName, {
      module: moduleName,
      method: methodName
    }, cb);
  } else {
    this[method] ? cb(true) : cb(false);
  }
}

canIUse.prototype.moduleName = cModuleName;
canIUse.prototype.methodName = cMethodName;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("JPzv")(module)))

/***/ }),

/***/ "VWiq":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("mrKC");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _index2.default;

/***/ }),

/***/ "VnQQ":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = navigateTo;

var _index = __webpack_require__("p4KU");

var _index2 = _interopRequireDefault(_index);

var _utils = __webpack_require__("z4ZC");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function navigateTo(opt) {
  // 转换为字符串通过多态不支持object，需改
  var query = (0, _utils.queryStringify)(opt.query) || '';
  var path = opt.path || '';
  var url = opt.url || '';

  // 不能通过直接转换类型对opt.query重新赋值的操作, 否则会造成opt原始传入对象数据被篡改的问题
  _index2.default.navigateTo({
    path: path,
    url: url,
    query: query
  });
}

/***/ }),

/***/ "WFxG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "cube-index-list", attrs: {} },
    [
      _c(
        "cube-scroll",
        {
          ref: "scroll",
          attrs: {
            "scroll-events": _vm.scrollEvents,
            options: _vm.scrollOptions,
            data: _vm.data,
            "data-evt-scroll": "",
            "data-evt-pulling-down": "",
            "data-evt-pulling-up": ""
          },
          on: {
            "pulling-down": _vm.onPullingDown,
            "pulling-up": _vm.onPullingUp,
            cml$scroll: function($event) {
              return _vm.scroll($event)
            }
          },
          scopedSlots: _vm._u([
            {
              key: "pullup",
              fn: function(props) {
                return _vm.$slots.pullup || _vm.$scopedSlots.pullup
                  ? [
                      _vm._t("pullup", null, {
                        pullUpLoad: props.pullUpLoad,
                        isPullUpLoad: props.isPullUpLoad
                      })
                    ]
                  : undefined
              }
            },
            {
              key: "pulldown",
              fn: function(props) {
                return _vm.$slots.pulldown || _vm.$scopedSlots.pulldown
                  ? [
                      _vm._t("pulldown", null, {
                        pullDownRefresh: props.pullDownRefresh,
                        pullDownStyle: props.pullDownStyle,
                        beforePullDown: props.beforePullDown,
                        isPullingDown: props.isPullingDown,
                        bubbleY: props.bubbleY
                      })
                    ]
                  : undefined
              }
            }
          ])
        },
        [
          _c(
            "div",
            {
              ref: "content",
              staticClass: "cube-index-list-content",
              attrs: {}
            },
            [
              _vm.title
                ? _c(
                    "h1",
                    {
                      ref: "title",
                      staticClass: "cube-index-list-title",
                      attrs: { "data-evt-click": "" },
                      on: {
                        click: _vm.$stopOuterA,
                        cml$tap: function($event) {
                          return _vm.titleClick($event)
                        }
                      }
                    },
                    [_vm._v("\n        " + _vm._s(_vm.title) + "\n      ")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "ul",
                [
                  _vm._t(
                    "default",
                    _vm._l(_vm.data, function(group, index) {
                      return _c("cube-index-list-group", {
                        key: index,
                        attrs: { group: group, "data-evt-select": "" },
                        on: { select: _vm.selectItem }
                      })
                    }),
                    {}
                  )
                ],
                2
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _vm.navbar
        ? _c(
            "div",
            {
              staticClass: "cube-index-list-nav",
              attrs: { "data-evt-touchstart": "", "data-evt-touchmove": "" },
              on: {
                touchstart: function($event) {
                  return _vm.onShortcutTouchStart($event)
                },
                touchmove: function($event) {
                  $event.stopPropagation()
                  $event.preventDefault()
                  return _vm.onShortcutTouchMove($event)
                }
              }
            },
            [
              _c(
                "ul",
                { staticClass: "cube-index-list-nav-list", attrs: {} },
                _vm._l(_vm.shortcutList, function(item, index) {
                  return _c(
                    "li",
                    {
                      key: index,
                      staticClass: "cube-index-list-nav-item",
                      class: { active: _vm.currentIndex === index },
                      attrs: { "data-index": index }
                    },
                    [
                      _vm._t("nav-item", [_vm._v(_vm._s(item))], { item: item })
                    ],
                    2
                  )
                })
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.fixedTitle,
            expression: "fixedTitle"
          }
        ],
        ref: "fixed",
        staticClass: "cube-index-list-fixed cube-index-list-anchor",
        attrs: {},
        domProps: { innerHTML: _vm._s(_vm.fixedTitle) }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4f31d6eb", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "WgSU":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseOptionsTransformer = __webpack_require__("46z+");

var _BaseOptionsTransformer2 = _interopRequireDefault(_BaseOptionsTransformer);

var _type = __webpack_require__("lNMv");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// web&&weex options transform 基类
var WexOptTransformer = function (_BaseOptionsTransform) {
  _inherits(WexOptTransformer, _BaseOptionsTransform);

  function WexOptTransformer(config) {
    _classCallCheck(this, WexOptTransformer);

    var _this = _possibleConstructorReturn(this, (WexOptTransformer.__proto__ || Object.getPrototypeOf(WexOptTransformer)).call(this, config));

    _this.needAddHookMixin = config.needAddHookMixin;
    return _this;
  }

  _createClass(WexOptTransformer, [{
    key: 'init',
    value: function init() {
      this.transformData();
      this.needAddHookMixin && this.addHookMixin();
    }

    // 对象属性 `data` 的 映射

  }, {
    key: 'transformData',
    value: function transformData() {
      if (this.options['data']) {
        var _temp = this.options['data'];

        this.options['data'] = function () {
          return _extends({}, _temp);
        };
      }
    }
  }, {
    key: 'addHookMixin',
    value: function addHookMixin() {
      var _this2 = this;

      if (!this.hooks || !this.hooks.length) return;

      var self = this;

      this.hooks.forEach(function (key) {
        var hook = _this2.options[key];
        hook && (_this2.options[key] = function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var result = void 0;

          if ((0, _type.type)(hook) === 'Function') {
            switch (key) {
              case 'beforeCreate':
                // 钩子函数参数mixin
                args = self.beforeCreateArgsMixin ? self.beforeCreateArgsMixin.apply(this, args) : args;
                break;
              default:
                break;
            }
            // 这里的 this 是指向运行时上下文的
            result = hook.apply(this, args);
          }

          return result;
        });
      });
    }
  }]);

  return WexOptTransformer;
}(_BaseOptionsTransformer2.default);

exports.default = WexOptTransformer;

/***/ }),

/***/ "Wh0r":
/***/ (function(module, exports) {

var _ = {};
module.exports = _;
// 将字符串中的 单引号变成 双引号；
_.singlequot2doublequot = function (value) {
  return value.replace(/['']/g, '"');
};
// 用于将css样式值中的重复样式去掉
_.uniqueStyle = function (content) {
  var uniqueStyleKeyValue = {};
  var splitStyleKeyValue = content.split(';').filter(function (item) {
    return !!item.trim();
  });
  splitStyleKeyValue.forEach(function (declaration) {
    var _$getStyleKeyValue = _.getStyleKeyValue(declaration),
        key = _$getStyleKeyValue.key,
        value = _$getStyleKeyValue.value;

    if (!key || !value) {
      throw new Error('please check if the style that you write is correct');
    }
    uniqueStyleKeyValue[key] = value;
  });

  var result = [];
  Object.keys(uniqueStyleKeyValue).forEach(function (key) {
    result.push(key + ':' + uniqueStyleKeyValue[key]);
  });
  return result.join(';');
};
// 用于删除css样式的注释； /*width:100px;*/ ==> ''
_.disappearCssComment = function (content) {
  var commentReg = /\/\*[\s\S]*?\*\//g;
  return content.replace(commentReg, function (match) {
    return '';
  });
};
_.getStyleKeyValue = function (declaration) {
  var colonIndex = declaration.indexOf(':');
  var key = declaration.slice(0, colonIndex).trim();
  var value = declaration.slice(colonIndex + 1).trim();
  return {
    key: key, value: value
  };
};

/***/ }),

/***/ "WmH8":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocationInfo = getLocationInfo;

var _index = __webpack_require__("zYxj");

var moduleName = 'cml';
var methodName = 'getLocationInfo';

function getLocationInfo(param, cb) {
  (0, _index.callNative)(moduleName, methodName, param, function (res) {
    /**
     * lat:number
     * lng:number
     */
    cb(res);
  });
}

getLocationInfo.prototype.moduleName = moduleName;
getLocationInfo.prototype.methodName = methodName;

/***/ }),

/***/ "X+2N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page-wrapper  cml-base cml-view", attrs: {} },
    [
      _c("indexlist", {
        staticClass: " cml-base cml-indexlist",
        attrs: { dataList: _vm.dataList, "data-evt-onselect": "" },
        on: {
          onselect: function($event) {
            _vm._cmlEventProxy($event, "onItemSelect")
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-31022192", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "XnZI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "c-popup",
    {
      staticClass: " cml-base cml-c-popup",
      attrs: { show: _vm.show, mask: _vm.mask }
    },
    [
      _c(
        "div",
        { staticClass: "toast-content  cml-base cml-view", attrs: {} },
        [
          _vm.needIcon
            ? _c("img", {
                staticClass: "toast-icon  cml-base cml-image",
                attrs: { src: _vm.typeImg }
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "toast-text  cml-base cml-text", attrs: {} },
            [_vm._v(_vm._s(_vm.message))]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4e72ff30", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "Xxa5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1H6C");


/***/ }),

/***/ "Yfae":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.listen = listen;

var _common = __webpack_require__("Octk");

/**
 * 注册监听通道
 */
function init() {
  window.cmlBridge = {};
  window.cmlBridge.channel = function (protocol) {
    (0, _common.dispatchProtocol)(protocol);
  };
}

/**
 * 注册主动监听
 * @param {String} module 
 * @param {String} method 
 * @param {Function} callback 
 */
function listen(module, method, callback) {
  _common.registerListen.apply(undefined, arguments);
}

/***/ }),

/***/ "ZcqR":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQueryObjSync = getQueryObjSync;

var _index = __webpack_require__("Gl2V");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getQueryObjSync() {
  return _index2.default.getQueryObjSync();
}

getQueryObjSync.prototype.moduleName = 'cml';
getQueryObjSync.prototype.methodName = 'getLaunchUrl';

/***/ }),

/***/ "Zmns":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Zva/":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__("ifN7");

var _util = __webpack_require__("Pn5V");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var router = void 0,
    routerConfig = void 0,
    app = void 0,
    store = void 0;

// 定义模块的interface

/* istanbul ignore next */
var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'bootstrap',
    value: function bootstrap() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      (0, _utils.validOptions)(options);

      options.createVM = options.createVM === false ? false : true;
      app = options.app;
      router = options.router;
      routerConfig = options.routerConfig;
      store = options.store;

      var vueOptions = {
        el: '#root',
        router: router,
        store: store,
        render: function render(h) {
          return h(app);
        }
      };

      if (options.createVM) {
        new Vue(vueOptions);
      }
    }
  }, {
    key: 'getInfo',
    value: function getInfo() {
      return {
        router: router,
        routerConfig: routerConfig
      };
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "a0EA":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.call = call;

var _const = __webpack_require__("CW7I");

var _common = __webpack_require__("Octk");

/**
 * js调用客户端
 * @param {String} action 行为方式
 * @param {String} module 模块名
 * @param {String} method 方法名
 * @param {Array}  args   参数数组
 */
function call(action, module, method, args, callback) {
  var module = module || _const.moduleDefault;
  var callbackId = (0, _common.registerCallback)(module, method, callback);
  var url = (0, _common.serializeProtocol)({
    action: action,
    module: module,
    method: method,
    args: args,
    callbackId: callbackId
  });

  schemeJump(url);
}

function schemeJump(url) {
  var iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.style.display = 'none';
  document.documentElement.appendChild(iframe);
  setTimeout(function () {
    document.documentElement.removeChild(iframe);
  }, 0);
}

/***/ }),

/***/ "a9Gy":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * chameleon-scroll v0.0.1
 */
!function(t,i){ true?module.exports=i():"function"==typeof define&&define.amd?define(i):t.CScroll=i()}(this,function(){"use strict";var a=function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,i){var o=[],e=!0,s=!1,n=void 0;try{for(var r,h=t[Symbol.iterator]();!(e=(r=h.next()).done)&&(o.push(r.value),!i||o.length!==i);e=!0);}catch(t){s=!0,n=t}finally{try{!e&&h.return&&h.return()}finally{if(s)throw n}}return o}(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")};var o="undefined"!=typeof window,t=o&&navigator.userAgent.toLowerCase(),i=t&&/wechatdevtools/.test(t),e=t&&0<t.indexOf("android");function w(){return window.performance&&window.performance.now?window.performance.now()+window.performance.timing.navigationStart:+new Date}function l(t){for(var i=arguments.length,o=Array(1<i?i-1:0),e=1;e<i;e++)o[e-1]=arguments[e];for(var s=0;s<o.length;s++){var n=o[s];for(var r in n)t[r]=n[r]}return t}function s(t){return null==t}var n=o&&document.createElement("div").style,r=function(){if(!o)return!1;var t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(var i in t)if(void 0!==n[t[i]])return i;return!1}();function h(t){return!1!==r&&("standard"===r?"transitionEnd"===t?"transitionend":t:r+t.charAt(0).toUpperCase()+t.substr(1))}function c(t,i,o,e){t.addEventListener(i,o,{passive:!1,capture:!!e})}function p(t,i,o,e){t.removeEventListener(i,o,{passive:!1,capture:!!e})}function u(t){for(var i=0,o=0;t;)i-=t.offsetLeft,o-=t.offsetTop,t=t.offsetParent;return{left:i,top:o}}r&&"standard"!==r&&r.toLowerCase();var d=h("transform"),m=h("transition"),f=o&&h("perspective")in n,v=o&&("ontouchstart"in window||i),g=!1!==d,y=o&&m in n,T={transform:d,transition:m,transitionTimingFunction:h("transitionTimingFunction"),transitionDuration:h("transitionDuration"),transitionDelay:h("transitionDelay"),transformOrigin:h("transformOrigin"),transitionEnd:h("transitionEnd")},b={touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2};function S(t){if(t instanceof window.SVGElement){var i=t.getBoundingClientRect();return{top:i.top,left:i.left,width:i.width,height:i.height}}return{top:t.offsetTop,left:t.offsetLeft,width:t.offsetWidth,height:t.offsetHeight}}function x(t,i){for(var o in i)if(i[o].test(t[o]))return!0;return!1}function _(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"click",o=void 0;"mouseup"===t.type||"mousecancel"===t.type?o=t:"touchend"!==t.type&&"touchcancel"!==t.type||(o=t.changedTouches[0]);var e={};o&&(e.screenX=o.screenX||0,e.screenY=o.screenY||0,e.clientX=o.clientX||0,e.clientY=o.clientY||0);var s=void 0,n=!0,r=!0;if("undefined"!=typeof MouseEvent)try{s=new MouseEvent(i,l({bubbles:n,cancelable:r},e))}catch(t){h()}else h();function h(){(s=document.createEvent("Event")).initEvent(i,n,r),l(s,e)}s.forwardedTouchEvent=!0,s._constructed=!0,t.target.dispatchEvent(s)}var Y={startX:0,startY:0,scrollX:!1,scrollY:!0,directionLockThreshold:5,eventPassthrough:"",click:!1,tap:!1,bounce:!0,bounceTime:800,momentum:!0,momentumLimitTime:300,momentumLimitDistance:15,swipeTime:2500,swipeBounceTime:500,deceleration:.0015,flickLimitTime:200,flickLimitDistance:100,resizePolling:60,probeType:0,preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},useTransition:!0,useTransform:!0,bindToWrapper:!1,disableMouse:v,disableTouch:!v,observeDOM:!0,autoBlur:!0,pullDownRefresh:!1,pullUpLoad:!1,stopPropagation:!1,dblclick:!1};var X={swipe:{style:"cubic-bezier(0.23, 1, 0.32, 1)",fn:function(t){return 1+--t*t*t*t*t}},swipeBounce:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},bounce:{style:"cubic-bezier(0.165, 0.84, 0.44, 1)",fn:function(t){return 1- --t*t*t*t}}};function D(t,i,o,e,s,n,r){var h=t-i,l=Math.abs(h)/o,a=r.deceleration,c=r.itemHeight,p=r.swipeBounceTime,u=r.wheel,d=r.swipeTime,m=u?4:15,f=t+l/a*(h<0?-1:1);return u&&c&&(f=Math.round(f/c)*c),f<e?(f=n?Math.max(e-n/4,e-n/m*l):e,d=p):s<f&&(f=n?Math.min(s+n/4,s+n/m*l):s,d=p),{destination:Math.round(f),duration:d}}function E(){}var P,k,M,L,O,A=o?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||function(t){return window.setTimeout(t,(t.interval||100/60)/2)}:E,z=o?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||function(t){window.clearTimeout(t)}:E;function U(t,i){this.wrapper="string"==typeof t?document.querySelector(t):t,this.wrapper||warn("Can not resolve the wrapper DOM."),this.scroller=this.wrapper.children[0],this.scroller||warn("The wrapper need at least one child element to be scroller."),this.scrollerStyle=this.scroller.style,this._init(t,i)}return(P=U).prototype._init=function(t,i){this._handleOptions(i),this._events={},this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._addDOMEvents(),this._initExtFeatures(),this._watchTransition(),this._initDOMObserver(),this._handleAutoBlur(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY)},P.prototype._handleOptions=function(t){this.options=l({},Y,t),this.translateZ=f?" translateZ(0)":"",this.options.useTransition=this.options.useTransition&&y,this.options.useTransform=this.options.useTransform&&g,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollX="horizontal"!==this.options.eventPassthrough&&this.options.scrollX,this.options.scrollY="vertical"!==this.options.eventPassthrough&&this.options.scrollY,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,!0===this.options.tap&&(this.options.tap="tap")},P.prototype._addDOMEvents=function(){var t=c;this._handleDOMEvents(t)},P.prototype._removeDOMEvents=function(){var t=p;this._handleDOMEvents(t)},P.prototype._handleDOMEvents=function(t){var i=this.options.bindToWrapper?this.wrapper:window;t(window,"orientationchange",this),t(window,"resize",this),this.options.click&&t(this.wrapper,"click",this,!0),this.options.disableMouse||(t(this.wrapper,"mousedown",this),t(i,"mousemove",this),t(i,"mousecancel",this),t(i,"mouseup",this)),v&&!this.options.disableTouch&&(t(this.wrapper,"touchstart",this),t(i,"touchmove",this),t(i,"touchcancel",this),t(i,"touchend",this)),t(this.scroller,T.transitionEnd,this)},P.prototype._initExtFeatures=function(){this.options.pullUpLoad&&this._initPullUp(),this.options.pullDownRefresh&&this._initPullDown()},P.prototype._watchTransition=function(){if("function"==typeof Object.defineProperty){var s=this,n=!1,t=this.useTransition?"isInTransition":"isAnimating";Object.defineProperty(this,t,{get:function(){return n},set:function(t){n=t;for(var i=s.scroller.children.length?s.scroller.children:[s.scroller],o=n&&!s.pulling?"none":"auto",e=0;e<i.length;e++)i[e].style.pointerEvents=o}})}},P.prototype._handleAutoBlur=function(){this.on("scrollStart",function(){var t=document.activeElement;!t||"INPUT"!==t.tagName&&"TEXTAREA"!==t.tagName||t.blur()})},P.prototype._initDOMObserver=function(){var n=this;if("undefined"!=typeof MutationObserver){var r=void 0,t=new MutationObserver(function(t){if(!n._shouldNotRefresh()){for(var i=!1,o=!1,e=0;e<t.length;e++){var s=t[e];if("attributes"!==s.type){i=!0;break}if(s.target!==n.scroller){o=!0;break}}i?n.refresh():o&&(clearTimeout(r),r=setTimeout(function(){n._shouldNotRefresh()||n.refresh()},60))}});t.observe(this.scroller,{attributes:!0,childList:!0,subtree:!0}),this.on("destroy",function(){t.disconnect()})}else this._checkDOMUpdate()},P.prototype._shouldNotRefresh=function(){var t=this.x>this.minScrollX||this.x<this.maxScrollX||this.y>this.minScrollY||this.y<this.maxScrollY;return this.isInTransition||this.stopFromTransition||t},P.prototype._checkDOMUpdate=function(){var o=S(this.scroller),e=o.width,s=o.height;function n(){var t=this;setTimeout(function(){(function(){if(!this.destroyed){var t=(o=S(this.scroller)).width,i=o.height;e===t&&s===i||this.refresh(),e=t,s=i,n.call(this)}}).call(t)},1e3)}n.call(this)},P.prototype.handleEvent=function(t){switch(t.type){case"touchstart":case"mousedown":this._start(t);break;case"touchmove":case"mousemove":this._move(t);break;case"touchend":case"mouseup":case"touchcancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"click":t._constructed||x(t.target,this.options.preventDefaultException)||(t.preventDefault(),t.stopPropagation());break;case"DOMMouseScroll":case"mousewheel":this._onMouseWheel(t)}},P.prototype.refresh=function(){var t="static"===window.getComputedStyle(this.wrapper,null).position,i=S(this.wrapper);this.wrapperWidth=i.width,this.wrapperHeight=i.height;var o=S(this.scroller);this.scrollerWidth=Math.round(o.width),this.scrollerHeight=Math.round(o.height),this.relativeX=o.left,this.relativeY=o.top,t&&(this.relativeX-=i.left,this.relativeY-=i.top),this.minScrollX=0,this.minScrollY=0,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.maxScrollX<0&&(this.maxScrollX-=this.relativeX,this.minScrollX=-this.relativeX),this.maxScrollY<0&&(this.maxScrollY-=this.relativeY,this.minScrollY=-this.relativeY),this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<this.minScrollX,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<this.minScrollY,this.hasHorizontalScroll||(this.maxScrollX=this.minScrollX,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=this.minScrollY,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=u(this.wrapper),this.trigger("refresh"),this.resetPosition()},(k=U).prototype._start=function(t){var i=b[t.type];if((1===i||0===t.button)&&!(this.destroyed||this.initiated&&this.initiated!==i)){this.initiated=i,this.options.preventDefault&&!x(t.target,this.options.preventDefaultException)&&t.preventDefault(),this.options.stopPropagation&&t.stopPropagation(),this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.movingDirectionX=0,this.movingDirectionY=0,this.directionLocked=0,this._transitionTime(),this.startTime=w(),this.stop();var o=t.touches?t.touches[0]:t;this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=o.pageX,this.pointY=o.pageY,this.trigger("beforeScrollStart")}},k.prototype._move=function(t){if(!this.destroyed&&b[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault(),this.options.stopPropagation&&t.stopPropagation();var i=t.touches?t.touches[0]:t,o=i.pageX-this.pointX,e=i.pageY-this.pointY;this.pointX=i.pageX,this.pointY=i.pageY,this.distX+=o,this.distY+=e;var s=Math.abs(this.distX),n=Math.abs(this.distY),r=w();if(!(r-this.endTime>this.options.momentumLimitTime&&n<this.options.momentumLimitDistance&&s<this.options.momentumLimitDistance)){if(this.directionLocked||(s>n+this.options.directionLockThreshold?this.directionLocked="h":n>=s+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"===this.directionLocked){if("vertical"===this.options.eventPassthrough)t.preventDefault();else if("horizontal"===this.options.eventPassthrough)return void(this.initiated=!1);e=0}else if("v"===this.directionLocked){if("horizontal"===this.options.eventPassthrough)t.preventDefault();else if("vertical"===this.options.eventPassthrough)return void(this.initiated=!1);o=0}o=this.hasHorizontalScroll?o:0,e=this.hasVerticalScroll?e:0,this.movingDirectionX=0<o?-1:o<0?1:0,this.movingDirectionY=0<e?-1:e<0?1:0;var h=this.x+o,l=this.y+e,a=!1,c=!1,p=!1,u=!1,d=this.options.bounce;!1!==d&&(a=void 0===d.top||d.top,c=void 0===d.bottom||d.bottom,p=void 0===d.left||d.left,u=void 0===d.right||d.right),(h>this.minScrollX||h<this.maxScrollX)&&(h=h>this.minScrollX&&p||h<this.maxScrollX&&u?this.x+o/3:h>this.minScrollX?this.minScrollX:this.maxScrollX),(l>this.minScrollY||l<this.maxScrollY)&&(l=l>this.minScrollY&&a||l<this.maxScrollY&&c?this.y+e/3:l>this.minScrollY?this.minScrollY:this.maxScrollY),this.moved||(this.moved=!0,this.trigger("scrollStart")),this._translate(h,l),r-this.startTime>this.options.momentumLimitTime&&(this.startTime=r,this.startX=this.x,this.startY=this.y,1===this.options.probeType&&this.trigger("scroll",{x:this.x,y:this.y})),1<this.options.probeType&&this.trigger("scroll",{x:this.x,y:this.y});var m=document.documentElement.scrollLeft||window.pageXOffset||document.body.scrollLeft,f=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,v=this.pointX-m,g=this.pointY-f;(v>document.documentElement.clientWidth-this.options.momentumLimitDistance||v<this.options.momentumLimitDistance||g<this.options.momentumLimitDistance||g>document.documentElement.clientHeight-this.options.momentumLimitDistance)&&this._end(t)}}},k.prototype._end=function(t){if(!this.destroyed&&b[t.type]===this.initiated){this.initiated=!1,this.options.preventDefault&&!x(t.target,this.options.preventDefaultException)&&t.preventDefault(),this.options.stopPropagation&&t.stopPropagation(),this.trigger("touchEnd",{x:this.x,y:this.y}),this.isInTransition=!1;var i=Math.round(this.x),o=Math.round(this.y),e=i-this.absStartX,s=o-this.absStartY;if(this.directionX=0<e?-1:e<0?1:0,this.directionY=0<s?-1:s<0?1:0,!this.options.pullDownRefresh||!this._checkPullDown())if(this._checkClick(t))this.trigger("scrollCancel");else if(!this.resetPosition(this.options.bounceTime,X.bounce)){this._translate(i,o),this.endTime=w();var n=this.endTime-this.startTime,r=Math.abs(i-this.startX),h=Math.abs(o-this.startY),l=0;if(this.options.momentum&&n<this.options.momentumLimitTime&&(h>this.options.momentumLimitDistance||r>this.options.momentumLimitDistance)){var a=!1,c=!1,p=!1,u=!1,d=this.options.bounce;!1!==d&&(a=void 0===d.top||d.top,c=void 0===d.bottom||d.bottom,p=void 0===d.left||d.left,u=void 0===d.right||d.right);var m=-1===this.directionX&&p||1===this.directionX&&u?this.wrapperWidth:0,f=-1===this.directionY&&a||1===this.directionY&&c?this.wrapperHeight:0,v=this.hasHorizontalScroll?D(this.x,this.startX,n,this.maxScrollX,this.minScrollX,m,this.options):{destination:i,duration:0},g=this.hasVerticalScroll?D(this.y,this.startY,n,this.maxScrollY,this.minScrollY,f,this.options):{destination:o,duration:0};i=v.destination,o=g.destination,l=Math.max(v.duration,g.duration),this.isInTransition=!0}var y=X.swipe;if(i!==this.x||o!==this.y)return(i>this.minScrollX||i<this.maxScrollX||o>this.minScrollY||o<this.maxScrollY)&&(y=X.swipeBounce),void this.scrollTo(i,o,l,y);this.trigger("scrollEnd",{x:this.x,y:this.y})}}},k.prototype._checkClick=function(t){var i,o,e,s=this.stopFromTransition&&!this.pulling;if(this.stopFromTransition=!1,this.moved)return!1;if(s)return!1;var n=this.options.dblclick,r=!1;if(n&&this.lastClickTime){var h=n.delay,l=void 0===h?300:h;w()-this.lastClickTime<l&&(r=!0,_(t,"dblclick"))}return this.options.tap&&(i=t,o=this.options.tap,(e=document.createEvent("Event")).initEvent(o,!0,!0),e.pageX=i.pageX,e.pageY=i.pageY,i.target.dispatchEvent(e)),this.options.click&&!x(t.target,this.options.preventDefaultException)&&_(t),this.lastClickTime=r?null:w(),!0},k.prototype._resize=function(){var t=this;e&&(this.wrapper.scrollTop=0),clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling)},k.prototype._startProbe=function(){z(this.probeTimer),this.probeTimer=A(function t(){var i=o.getComputedPosition();o.trigger("scroll",i),o.isInTransition?o.probeTimer=A(t):o.trigger("scrollEnd",i)});var o=this},k.prototype._transitionTime=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;this.scrollerStyle[T.transitionDuration]=t+"ms"},k.prototype._transitionTimingFunction=function(t){this.scrollerStyle[T.transitionTimingFunction]=t},k.prototype._transitionEnd=function(t){t.target===this.scroller&&this.isInTransition&&(this._transitionTime(),(!this.pulling||1===this.movingDirectionY)&&!this.resetPosition(this.options.bounceTime,X.bounce)&&(this.isInTransition=!1,3!==this.options.probeType&&this.trigger("scrollEnd",{x:this.x,y:this.y})))},k.prototype._translate=function(t,i){!function(t,i){if(!t)throw new Error("[Scroll] "+i)}(!s(t)&&!s(i),"Translate x or y is null or undefined."),this.scrollerStyle[T.transform]="translate("+t+"px,"+i+"px) scale(1)"+this.translateZ,this.x=t,this.y=i},k.prototype.scrollTo=function(t,i){var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,e=3<arguments.length&&void 0!==arguments[3]?arguments[3]:X.bounce;this.isInTransition=this.options.useTransition&&0<o&&(t!==this.x||i!==this.y),this._transitionTimingFunction(e.style),this._transitionTime(o),this._translate(t,i),o&&3===this.options.probeType&&this._startProbe(),o||t===this.x&&i===this.y||(this.trigger("scroll",{x:t,y:i}),this._reflow=document.body.offsetHeight,this.resetPosition(this.options.bounceTime,X.bounce)||this.trigger("scrollEnd",{x:t,y:i}))},k.prototype.scrollToElement=function(t,i,o,e,s){if(t){var n=u(t=t.nodeType?t:this.scroller.querySelector(t));n.left-=this.wrapperOffset.left,n.top-=this.wrapperOffset.top,!0===o&&(o=Math.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),!0===e&&(e=Math.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),n.left-=o||0,n.top-=e||0,n.left=n.left>this.minScrollX?this.minScrollX:n.left<this.maxScrollX?this.maxScrollX:n.left,n.top=n.top>this.minScrollY?this.minScrollY:n.top<this.maxScrollY?this.maxScrollY:n.top,this.scrollTo(n.left,n.top,i,s)}},k.prototype.resetPosition=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:X.bounce,o=this.x,e=Math.round(o);!this.hasHorizontalScroll||e>this.minScrollX?o=this.minScrollX:e<this.maxScrollX&&(o=this.maxScrollX);var s=this.y,n=Math.round(s);return!this.hasVerticalScroll||n>this.minScrollY?s=this.minScrollY:n<this.maxScrollY&&(s=this.maxScrollY),(o!==this.x||s!==this.y)&&(this.scrollTo(o,s,t,i),!0)},k.prototype.getComputedPosition=function(){var t=window.getComputedStyle(this.scroller,null);return{x:+((t=t[T.transform].split(")")[0].split(", "))[12]||t[4]),y:+(t[13]||t[5])}},k.prototype.stop=function(){if(this.isInTransition){this.isInTransition=!1,z(this.probeTimer);var t=this.getComputedPosition();this._translate(t.x,t.y),this.trigger("scrollEnd",{x:this.x,y:this.y}),this.stopFromTransition=!0}},k.prototype.destroy=function(){this.destroyed=!0,this.trigger("destroy"),z(this.probeTimer),this._removeDOMEvents(),this._events={}},(M=U).prototype.on=function(t,i){var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:this;this._events[t]||(this._events[t]=[]),this._events[t].push([i,o])},M.prototype.once=function(t,i){var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:this;function e(){this.off(t,e),i.apply(o,arguments)}e.fn=i,this.on(t,e)},M.prototype.off=function(t,i){var o=this._events[t];if(o)for(var e=o.length;e--;)(o[e][0]===i||o[e][0]&&o[e][0].fn===i)&&(o[e][0]=void 0)},M.prototype.trigger=function(t){var i=this._events[t];if(i)for(var o=i.length,e=[].concat(function(t){if(Array.isArray(t)){for(var i=0,o=Array(t.length);i<t.length;i++)o[i]=t[i];return o}return Array.from(t)}(i)),s=0;s<o;s++){var n=e[s],r=a(n,2),h=r[0],l=r[1];h&&h.apply(l,[].slice.call(arguments,1))}},(L=U).prototype._initPullDown=function(){this.options.probeType=3},L.prototype._checkPullDown=function(){var t=this.options.pullDownRefresh,i=t.threshold,o=void 0===i?90:i,e=t.stop,s=void 0===e?40:e;return!(-1!==this.directionY||this.y<o)&&(this.pulling||(this.pulling=!0,this.trigger("pullingDown")),this.scrollTo(this.x,s,this.options.bounceTime,X.bounce),this.pulling)},L.prototype.finishPullDown=function(){this.pulling=!1,this.resetPosition(this.options.bounceTime,X.bounce)},L.prototype.openPullDown=function(){var t=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];this.options.pullDownRefresh=t,this._initPullDown()},L.prototype.closePullDown=function(){this.options.pullDownRefresh=!1},(O=U).prototype._initPullUp=function(){this.options.probeType=3,this.pullupWatching=!1,this._watchPullUp()},O.prototype._watchPullUp=function(){this.pullupWatching||(this.pullupWatching=!0,this.on("scroll",this._checkToEnd))},O.prototype._checkToEnd=function(t){var i=this,o=this.options.pullUpLoad.threshold,e=void 0===o?0:o;1===this.movingDirectionY&&t.y<=this.maxScrollY+e&&(this.once("scrollEnd",function(){i.pullupWatching=!1}),this.trigger("pullingUp"),this.off("scroll",this._checkToEnd))},O.prototype.finishPullUp=function(){var t=this;this.pullupWatching?this.once("scrollEnd",function(){t._watchPullUp()}):this._watchPullUp()},O.prototype.openPullUp=function(){var t=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];this.options.pullUpLoad=t,this._initPullUp()},O.prototype.closePullUp=function(){this.options.pullUpLoad=!1,this.pullupWatching&&(this.pullupWatching=!1,this.off("scroll",this._checkToEnd))},U});

/***/ }),

/***/ "aFq8":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "aaSh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_index_list_vue__ = __webpack_require__("L5K4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_index_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_index_list_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_index_list_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_index_list_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4f31d6eb_hasScoped_false_optionsId_1_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_index_list_vue__ = __webpack_require__("WFxG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("rxwH")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_index_list_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4f31d6eb_hasScoped_false_optionsId_1_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_index_list_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4f31d6eb_hasScoped_false_optionsId_1_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_index_list_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/cube-ui/src/components/index-list/index-list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4f31d6eb", Component.options)
  } else {
    hotAPI.reload("data-v-4f31d6eb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "amoi":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isObject = isObject;
/**
 * url相关操作
 *
 * @module lib/url
 */

function isObject(obj) {
  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
}

/**
 * 把对象转换成key=val的url参数
 * @param obj
 * @param isEncode 是否进行encodeURIComponent 默认为true
 * @return {string}
 */
var json2query = exports.json2query = function json2query(obj, isEncode) {
  isEncode = isEncode !== false;
  var url = '';
  if (isObject(obj)) {
    Object.keys(obj).forEach(function (key) {
      var value = obj[key] !== undefined ? obj[key] : '';
      url += '&' + key + '=' + (isEncode ? encodeURIComponent(value) : value);
    });
  }
  return url ? url.substring(1) : '';
};

/**
 * 解析url参数
 * @example ?id=12345&a=b 或者 #id=12345&a=b
 * @return Object {id:12345,a:b}
 */
var query2json = exports.query2json = function query2json() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var reg = /[#?&][^#?&]+=[^#?&]+/g;
  var arr = url.match(reg);
  var obj = {};
  if (arr) {
    arr.forEach(function (item) {
      var tempArr = item.substring(1).split('=');
      var key = decodeURIComponent(tempArr[0]);
      var val = decodeURIComponent(tempArr[1]);
      obj[key] = val;
    });
  }
  return obj;
};

exports.default = {
  json2query: json2query,
  query2json: query2json
};

/***/ }),

/***/ "axut":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("Zva/");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
exports.default = {
  bootstrap: function bootstrap() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _index2.default.bootstrap.call(_index2.default, options);
  },
  getInfo: _index2.default.getInfo

};

/***/ }),

/***/ "bFEg":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _app = __webpack_require__("9S/u");

Object.defineProperty(exports, 'App', {
  enumerable: true,
  get: function get() {
    return _app.App;
  }
});

var _page = __webpack_require__("IYim");

Object.defineProperty(exports, 'Page', {
  enumerable: true,
  get: function get() {
    return _page.Page;
  }
});

var _component = __webpack_require__("ll/r");

Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _component.Component;
  }
});

/***/ }),

/***/ "c92h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "cml-btn  cml-base cml-view",
      style: _vm._cmlStyleProxy(_vm.mrBtnStyle, {
        rem: true,
        scale: 0.5,
        remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
        autoprefixOptions: {
          browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
          grid: false
        }
      }),
      attrs: { "data-evt-click": "" },
      on: {
        click: _vm.$stopOuterA,
        cml$tap: function($event) {
          _vm._cmlEventProxy($event, "onclick")
        }
      }
    },
    [
      _c(
        "span",
        {
          staticClass: "btn-text  cml-base cml-text",
          style: _vm._cmlStyleProxy(_vm.mrTextStyle, {
            rem: true,
            scale: 0.5,
            remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
            autoprefixOptions: {
              browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
              grid: false
            }
          }),
          attrs: {}
        },
        [_vm._v(_vm._s(_vm.text))]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-98542db6", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "cL84":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _component = __webpack_require__("EK/L");

var component = _interopRequireWildcard(_component);

var _event = __webpack_require__("EEl8");

var event = _interopRequireWildcard(_event);

var _viewport = __webpack_require__("HtJK");

var viewport = _interopRequireWildcard(_viewport);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = _extends({}, component, event, viewport);

/***/ }),

/***/ "cO5h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page-wrapper  cml-base cml-view", attrs: {} },
    [
      _c("indexlist", {
        staticClass: " cml-base cml-indexlist",
        attrs: { dataList: _vm.dataList, "data-evt-onselect": "" },
        on: {
          onselect: function($event) {
            _vm._cmlEventProxy($event, "onItemSelect")
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2d6a5d2e", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "caUD":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extendVue;

var _mixins = __webpack_require__("QYOt");

var _webMixins = __webpack_require__("p+oX");

var _webMixins2 = _interopRequireDefault(_webMixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function extendVue(Vue) {

  // 自定义原生标签处理 覆盖Vue方法
  var htmlRegex = /^html:/i;
  Vue.config.isReservedTag = function (tag) {
    return htmlRegex.test(tag);
  };
  Vue.config.parsePlatformTagName = function (tag) {
    return tag.replace(htmlRegex, '');
  };

  function isCmlTag(tag) {
    return typeof chameleon._components[tag] !== 'undefined';
  }
  var oldGetTagNamespace = Vue.config.getTagNamespace;
  Vue.config.getTagNamespace = function (tag) {
    if (isCmlTag(tag)) {
      return;
    }
    return oldGetTagNamespace(tag);
  };

  Vue.mixin(_mixins.base);
  Vue.mixin(_mixins.event);

  Vue.mixin(_webMixins2.default.mixins);
}

/***/ }),

/***/ "d1LM":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFn = isFn;
exports.isStr = isStr;
exports.isObj = isObj;
exports.isArray = isArray;
exports.isUndefined = isUndefined;
exports.isEmpty = isEmpty;
exports.noop = noop;
exports.parseQuery = parseQuery;
exports.queryStringify = queryStringify;
exports.queryParse = queryParse;
exports.isNeedApiPrefix = isNeedApiPrefix;
exports.addApiPrefix = addApiPrefix;
exports.tryJsonParse = tryJsonParse;
exports.getQueryParamsFromSearchStr = getQueryParamsFromSearchStr;
exports.getOpenObj = getOpenObj;
exports.getUrlWithConnector = getUrlWithConnector;
exports.compareVersion = compareVersion;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * 基础js方法的封装
 *
 */
function typeEqual(obj, type) {
  return Object.prototype.toString.call(obj) === '[object ' + type + ']';
}

function isFn(obj) {
  return typeEqual(obj, 'Function');
}

function isStr(obj) {
  return typeEqual(obj, 'String');
}

function isObj(obj) {
  return typeEqual(obj, 'Object');
}

function isArray(obj) {
  return typeEqual(obj, 'Array');
}

function isUndefined(obj) {
  return typeEqual(obj, 'Undefined');
}

function isEmpty(obj) {
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

function noop() {}

function parseQuery(obj) {
  var str = '&';
  var keys = null;
  if (obj && Object.keys(obj).length > 0) {
    keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      var _key = keys[i];
      str += _key + '=' + encodeURIComponent(obj[_key]) + '&';
    }
  }
  return str;
}

function queryStringify(obj) {
  var str = '&';
  var keys = null;
  if (obj && Object.keys(obj).length > 0) {
    keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      var _key2 = keys[i];
      str += _key2 + '=' + encodeURIComponent(obj[_key2]) + '&';
    }
  }
  return str;
}

function queryParse(search) {
  search = search || '';
  var arr = search.split(/(\?|&)/);
  var parmsObj = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].indexOf('=') !== -1) {
      var keyValue = arr[i].match(/([^=]*)=(.*)/);
      parmsObj[keyValue[1]] = keyValue[2];
    }
  }
  return parmsObj;
}

function isNeedApiPrefix(url) {
  return (/^\/[^/]/.test(url)
  );
}

function addApiPrefix(url) {
  if (process && process.env && "https://api.chameleon.com") {
    return "https://api.chameleon.com" + url;
  }
  return url;
}

function tryJsonParse(some) {
  // 这里eslint提示也先别删除\[\]
  if (isStr(some) && /[\{\[].*[\}\]]/.test(some)) {
    some = JSON.parse(some);
  }
  return some;
}

function getQueryParamsFromSearchStr(qs) {
  var search = qs;
  var arr = search.split(/(\?|&)/);
  var parmsObj = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].indexOf('=') !== -1) {
      var keyValue = arr[i].match(/([^=]*)=(.*)/);
      parmsObj[keyValue[1]] = decodeURIComponent(keyValue[2]);
    }
  }
  return parmsObj;
}

/**
 * 获取处理后的各端打开的地址
 * @param {String} url url地址
 * @return {Object} objTreated 处理好的三端地址及对象
 */
function getOpenObj(url) {
  var webUrlWithoutQuery = url.split('?')[0];
  var queryObj = getQueryParamsFromSearchStr(url);

  var _queryObj$weixin_appi = queryObj.weixin_appid,
      weixin_appid = _queryObj$weixin_appi === undefined ? '' : _queryObj$weixin_appi,
      _queryObj$weixin_path = queryObj.weixin_path,
      weixin_path = _queryObj$weixin_path === undefined ? '' : _queryObj$weixin_path,
      _queryObj$weixin_envV = queryObj.weixin_envVersion,
      weixin_envVersion = _queryObj$weixin_envV === undefined ? '' : _queryObj$weixin_envV,
      _queryObj$weex_path = queryObj.weex_path,
      weex_path = _queryObj$weex_path === undefined ? '' : _queryObj$weex_path,
      _queryObj$wx_addr = queryObj.wx_addr,
      wx_addr = _queryObj$wx_addr === undefined ? '' : _queryObj$wx_addr,
      _queryObj$cml_addr = queryObj.cml_addr,
      cml_addr = _queryObj$cml_addr === undefined ? '' : _queryObj$cml_addr,
      extraData = _objectWithoutProperties(queryObj, ['weixin_appid', 'weixin_path', 'weixin_envVersion', 'weex_path', 'wx_addr', 'cml_addr']);

  // weex 链接


  var weexUrl = '';
  if (cml_addr) {
    cml_addr = cml_addr + '?_cml_r=' + ~~(Math.random() * 1E5);
    cml_addr = encodeURIComponent(cml_addr);
    weexUrl = webUrlWithoutQuery + '?weex_path=' + weex_path + queryStringify(extraData) + '&cml_addr=' + cml_addr;
  }
  // 向下兼容
  if (wx_addr) {
    wx_addr = wx_addr + '?_cml_r=' + ~~(Math.random() * 1E5);
    wx_addr = encodeURIComponent(wx_addr);
    weexUrl = webUrlWithoutQuery + '?weex_path=' + weex_path + queryStringify(extraData) + '&wx_addr=' + wx_addr;
  }

  var objTreated = {
    weex: weexUrl,
    web: webUrlWithoutQuery + '?' + queryStringify(extraData),
    wx: {
      appId: weixin_appid,
      path: weixin_path,
      extraData: extraData,
      envVersion: weixin_envVersion
    }
  };
  return objTreated;
}

// 获得带正确连接符的url
function getUrlWithConnector(url) {
  var connector = url.includes('?') ? '&' : '?';
  return url + connector;
}

/**
 * 比较版本号
 * @param {String} v1 版本号1
 * @param {String} symb 比较符
 * @param {String} v2 版本号2
 */
function compareVersion(v1, symb, v2) {
  v1 = parseVersion(v1);
  v2 = parseVersion(v2);
  if (symb.indexOf('=') !== -1 && v1 === v2) {
    return true;
  }
  if (symb.indexOf('>') !== -1 && v1 > v2) {
    return true;
  }
  if (symb.indexOf('<') !== -1 && v1 < v2) {
    return true;
  }
  return false;
}

function parseVersion() {
  var version = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  version = version.split('.');
  version.length = 4;
  var ret = [];
  version.forEach(function (n) {
    n = n * 1;
    if (n) {
      ret.push(n >= 10 ? n : '0' + n);
    } else {
      ret.push('00');
    }
  });
  return parseInt(ret.join(''), 10);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("uIsA")))

/***/ }),

/***/ "dWRg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/loading_1f26c50.gif";

/***/ }),

/***/ "dv89":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSDKInfo = getSDKInfo;

var _index = __webpack_require__("zYxj");

var moduleName = 'cml';
var methodName = 'getSDKInfo';

function getSDKInfo(param, cb) {
  (0, _index.callNative)(moduleName, methodName, param, cb);
}

getSDKInfo.prototype.moduleName = moduleName;
getSDKInfo.prototype.methodName = methodName;

/***/ }),

/***/ "dzj4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_index_list_item_vue__ = __webpack_require__("49QK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_index_list_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_index_list_item_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_index_list_item_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_index_list_item_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3c0386e5_hasScoped_false_optionsId_1_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_index_list_item_vue__ = __webpack_require__("JWCL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("+XYY")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_index_list_item_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3c0386e5_hasScoped_false_optionsId_1_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_index_list_item_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3c0386e5_hasScoped_false_optionsId_1_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_index_list_item_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/cube-ui/src/components/index-list/index-list-item.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c0386e5", Component.options)
  } else {
    hotAPI.reload("data-v-3c0386e5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "eH8E":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSystemInfo = getSystemInfo;

var _index = __webpack_require__("zYxj");

var moduleName = 'cml';
var methodName = 'getSystemInfo';

function getSystemInfo(param, cb) {
  (0, _index.callNative)(moduleName, methodName, param, function (res) {
    /**
     * res.data
     * {
      "scale": 3,
      "deviceWidth": 1080,
      "deviceHeight": 2340,
      "os": "android",
      "extraParams": {
        "model": "PAFM00",
        "imei": "356416465466244",
        "netType": "WIFI",
        "statusbarHeight": 80, // 状态栏高度
        "navigationHeight": 0, // 虚拟键高度 iphoneX会有值 android中有虚拟键盘的机型会有值
        "viewHeight":  2260 // 实际视图高度
      }
    }
     */
    // 兼容原始数据结构
    res.data.extraParams.os = res.data.os;

    var _res$data = res.data,
        deviceWidth = _res$data.deviceWidth,
        deviceHeight = _res$data.deviceHeight,
        scale = _res$data.scale;
    var viewHeight = res.data.extraParams.viewHeight;

    res.data.viewportWidth = deviceWidth / scale;
    res.data.viewportHeight = (viewHeight || deviceHeight) / scale;
    cb(res);
  });
}

getSystemInfo.prototype.moduleName = moduleName;
getSystemInfo.prototype.methodName = methodName;

/***/ }),

/***/ "en+i":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = exports.Page = exports.App = undefined;

var _instance = __webpack_require__("bFEg");

Object.defineProperty(exports, 'App', {
  enumerable: true,
  get: function get() {
    return _instance.App;
  }
});
Object.defineProperty(exports, 'Page', {
  enumerable: true,
  get: function get() {
    return _instance.Page;
  }
});
Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _instance.Component;
  }
});

var _render = __webpack_require__("k1x2");

var _render2 = _interopRequireDefault(_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_render2.default.init(Vue);
// import './style'

/***/ }),

/***/ "gAYa":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _scrollable = __webpack_require__("NIpK");

var _scrollable2 = _interopRequireDefault(_scrollable);

var _utils = __webpack_require__("MPvF");

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } //
//
//
//
//
//
//

var Scroller = function Scroller() {
  _classCallCheck(this, Scroller);

  this.props = {
    bottomOffset: {
      // 距底部/右边多远时（单位cpx），触发 scrollbottom 事件
      type: Number,
      default: 0
    },
    bounce: {
      type: Boolean,
      default: true
    },
    cstyle: {
      type: String,
      default: ''
    },
    scrollDirection: {
      // 可选为 horizontal 或者 vertical，默认值为 vertical 。定义滚动的方向。
      type: String,
      default: 'vertical'
    },
    height: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 0
    },
    scrollTop: {
      type: Number,
      default: 0
    },
    scrollLeft: {
      type: Number,
      default: 0
    }
  };
  this.computed = {
    heightPx: function heightPx() {
      if (this.height >= 0) {
        return (0, _utils.cpx2px)(this.height);
      }
      return -1;
    },
    widthPx: function widthPx() {
      if (this.width >= 0) {
        return (0, _utils.cpx2px)(this.width);
      }
      return -1;
    },
    scrollTopPx: function scrollTopPx() {
      return (0, _utils.cpx2px)(this.scrollTop);
    },
    scrollLeftPx: function scrollLeftPx() {
      return (0, _utils.cpx2px)(this.scrollLeft);
    }
  };
  this.methods = {
    scrollEvent: function scrollEvent(e) {
      this.$cmlEmit('onscroll', e);
      this.$cmlEmit('customscroll', e);
    },
    scrolltobottomEvent: function scrolltobottomEvent(e) {
      this.$cmlEmit('scrolltobottom', e);
    }
  };
};

exports.default = new Scroller();


exports.default.components = _extends({}, exports.default.components, { scrollable: _scrollable2.default });


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "h2Ex":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Config = function () {
  function Config(data) {
    _classCallCheck(this, Config);

    this.data = data;
  }

  _createClass(Config, [{
    key: 'get',
    value: function get() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var def = arguments[1];

      var result = this.data;
      path.split('.').forEach(function (key) {
        if (key && typeof result !== 'undefined') {
          result = result[key];
        }
      });
      if (typeof result !== 'undefined') {
        return result;
      } else {
        return def;
      }
    }
  }, {
    key: 'set',
    value: function set(path, value) {
      if (typeof value === 'undefined') {
        this.data = path;
      } else {
        path = String(path || '').trim();
        if (path) {
          var paths = path.split('.');
          var last = paths.pop();
          var data = this.data || {};
          paths.forEach(function (key) {
            var type = data[key];
            if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object') {
              data = data[key];
            } else if (typeof type === 'undefined') {
              data = data[key] = {};
            } else {
              throw new Error('forbidden to set property[' + key + '] of [' + type + '] data');
            }
          });
          data[last] = value;
        }
      }
    }
  }]);

  return Config;
}();

exports.default = Config;

/***/ }),

/***/ "h696":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApp = createApp;

var _index = __webpack_require__("1yVu");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createApp(options) {
  return _index2.default.createApp(options);
}

/***/ }),

/***/ "hGaY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page-wrapper  cml-base cml-view", attrs: {} },
    [
      _c(
        "div",
        {
          staticClass: " cml-base cml-view",
          staticStyle: { "margin-bottom": "0.4rem" },
          attrs: {}
        },
        [
          _c("cml-buildin-button", {
            staticClass: " cml-base cml-button",
            attrs: { text: "第三方库封装indexlist", "data-evt-onclick": "" },
            on: {
              onclick: function($event) {
                _vm._cmlInlineStatementEventProxy("openIndexList", 0)
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("cml-buildin-button", {
        staticClass: " cml-base cml-button",
        attrs: {
          text: "基于chameleon统一实现indexlist",
          "data-evt-onclick": ""
        },
        on: {
          onclick: function($event) {
            _vm._cmlInlineStatementEventProxy("openIndexList", 1)
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1bad7fbd", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "hljV":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showToast = showToast;
exports.alert = alert;
exports.confirm = confirm;

var _index = __webpack_require__("zYxj");

var moduleName = 'modal';
var methodShowToast = 'showToast';
var methodAlert = 'alert';
var methodConfirm = 'confirm';

function showToast(param) {
  /**
   * message
   * duration(ms)
   */
  (0, _index.callNative)(moduleName, methodShowToast, param, function () {});
}

showToast.prototype.moduleName = moduleName;
showToast.prototype.methodName = methodShowToast;

function alert(param, successCallBack) {
  /**
   * message
   * confirmTitle
   */
  (0, _index.callNative)(moduleName, methodAlert, param, successCallBack);
}

alert.prototype.moduleName = moduleName;
alert.prototype.methodName = methodAlert;

function confirm(param, successCallBack, failCallBack) {
  /**
   * message
   * confirmTitle
   * cancelTitle
   */
  (0, _index.callNative)(moduleName, methodConfirm, param, successCallBack);
}

confirm.prototype.moduleName = moduleName;
confirm.prototype.methodName = methodConfirm;

/***/ }),

/***/ "iIzD":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__("Pn5V");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'getComponentRect',
    value: function getComponentRect(param, cb) {}
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "iSEW":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _web = __webpack_require__("IMan");

var _web2 = _interopRequireDefault(_web);

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 定义模块的interface
var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'createStore',
    value: function createStore(options) {
      return (0, _web2.default)(options);
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "iXZ3":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ifN7":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validOptions = validOptions;
function validOptions(options) {
  var validList = [{
    name: 'app',
    message: '\u8C03\u7528chameleon bootstrap\u65B9\u6CD5\u65F6\uFF0C\u8BF7\u4F20\u5165app'
  }, {
    name: 'store',
    message: '\u8C03\u7528chameleon bootstrap\u65B9\u6CD5\u65F6\uFF0C\u8BF7\u4F20\u5165store'
  }, {
    name: 'routerConfig',
    message: '\u8C03\u7528chameleon bootstrap\u65B9\u6CD5\u65F6\uFF0C\u8BF7\u4F20\u5165routerConfig'
  }, {
    name: 'router',
    message: '\u8C03\u7528chameleon bootstrap\u65B9\u6CD5\u65F6\uFF0C\u8BF7\u4F20\u5165router'
  }];

  validList.forEach(function (item) {
    if (!options[item.name]) {
      throw new Error(item.message);
    }
  });
}

/***/ }),

/***/ "j4WI":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "k1x2":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__("Jx0+");

var _chameleon = __webpack_require__("G8qx");

var _chameleon2 = _interopRequireDefault(_chameleon);

var _extendVue = __webpack_require__("caUD");

var _extendVue2 = _interopRequireDefault(_extendVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _inited = false;

_chameleon2.default.init = function init(Vue) {
  if (_inited) {
    return;
  }
  _inited = true;
  _chameleon2.default._inited = true;

  (0, _extendVue2.default)(Vue);
};

if (global.Vue) {
  _chameleon2.default.init(global.Vue);
}

exports.default = _chameleon2.default;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("PvPp")))

/***/ }),

/***/ "k2OQ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "k7Ng":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["hasClass"] = hasClass;
/* harmony export (immutable) */ __webpack_exports__["addClass"] = addClass;
/* harmony export (immutable) */ __webpack_exports__["removeClass"] = removeClass;
/* harmony export (immutable) */ __webpack_exports__["getData"] = getData;
/* harmony export (immutable) */ __webpack_exports__["getRect"] = getRect;
/* harmony export (immutable) */ __webpack_exports__["prefixStyle"] = prefixStyle;
/* harmony export (immutable) */ __webpack_exports__["getMatchedTarget"] = getMatchedTarget;
/* harmony export (immutable) */ __webpack_exports__["dispatchEvent"] = dispatchEvent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__env__ = __webpack_require__("kh/a");


function hasClass(el, className) {
  const reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

function addClass(el, className) {
  /* istanbul ignore if */
  if (hasClass(el, className)) {
    return
  }

  const newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

function removeClass(el, className) {
  /* istanbul ignore if */
  if (!hasClass(el, className)) {
    return
  }

  const reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g')
  el.className = el.className.replace(reg, ' ')
}

function getData(el, name) {
  const prefix = 'data-'
  return el.getAttribute(prefix + name)
}

function getRect(el) {
  return {
    top: el.offsetTop,
    left: el.offsetLeft,
    width: el.offsetWidth,
    height: el.offsetHeight
  }
}

let vendor = (() => {
  /* istanbul ignore if */
  if (!__WEBPACK_IMPORTED_MODULE_0__env__["inBrowser"]) {
    return false
  }
  let elementStyle = document.createElement('div').style
  let transformNames = {
    standard: 'transform',
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform'
  }

  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }

  /* istanbul ignore next */
  return false
})()

function prefixStyle(style) {
  /* istanbul ignore if */
  if (vendor === false) {
    return false
  }

  if (vendor === 'standard') {
    if (style === 'transitionEnd') {
      return 'transitionend'
    }
    return style
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}

function getMatchedTarget(e, targetClassName) {
  let el = e.target

  while (el && !hasClass(el, targetClassName)) {
    if (el === e.currentTarget) return null
    el = el.parentNode
  }

  return el
}

function dispatchEvent(ele, name, { type = 'Event', bubbles = true, cancelable = true } = {}) {
  const e = document.createEvent(type)
  e.initEvent(name, bubbles, cancelable)
  ele.dispatchEvent(e)
}


/***/ }),

/***/ "kdbS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "kh/a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
// ssr support
const inBrowser = typeof window !== 'undefined'
/* harmony export (immutable) */ __webpack_exports__["inBrowser"] = inBrowser;

const ua = inBrowser && navigator.userAgent.toLowerCase()
/* harmony export (immutable) */ __webpack_exports__["ua"] = ua;

const isAndroid = ua && ua.indexOf('android') > 0
/* harmony export (immutable) */ __webpack_exports__["isAndroid"] = isAndroid;



/***/ }),

/***/ "klzv":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setStorage = setStorage;
exports.getStorage = getStorage;
exports.removeStorage = removeStorage;

var _index = __webpack_require__("zYxj");

var moduleName = 'storage';
var methodSet = 'setStorage';
var methodGet = 'getStorage';
var methodRemove = 'removeStorage';

function setStorage(param, cb) {
  /**
   * key
   * value
   */
  (0, _index.callNative)(moduleName, methodSet, param, function (res) {
    /**
     * errno
     * msg
     * data
     */
    cb(res);
  });
}

setStorage.prototype.moduleName = moduleName;
setStorage.prototype.methodName = methodSet;

function getStorage(param, cb) {
  /**
   * key
   */
  (0, _index.callNative)(moduleName, methodGet, param, function (res) {
    /**
     * errno
     * msg
     * data
     */
    cb(res);
  });
}

getStorage.prototype.moduleName = moduleName;
getStorage.prototype.methodName = methodGet;

function removeStorage(param, cb) {
  /**
   * key
   */
  (0, _index.callNative)(moduleName, methodRemove, param, function (res) {
    /**
     * errno
     * msg
     * data
     */
    cb(res);
  });
}

removeStorage.prototype.moduleName = moduleName;
removeStorage.prototype.methodName = methodRemove;

/***/ }),

/***/ "lHlG":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rollbackWeb = rollbackWeb;

var _index = __webpack_require__("zYxj");

var moduleName = 'cml';
var methodName = 'rollbackWeb';

function rollbackWeb() {
  (0, _index.callNative)(moduleName, methodName, {}, function () {});
}

rollbackWeb.prototype.moduleName = moduleName;
rollbackWeb.prototype.methodName = methodName;

/***/ }),

/***/ "lKwg":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _web = __webpack_require__("en+i");

var _util = __webpack_require__("Pn5V");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 定义模块的interface
var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'createPage',
    value: function createPage(options) {
      return new _web.Page(options);
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "lNMv":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = type;
function type(n) {
  return Object.prototype.toString.call(n).slice(8, -1);
}

/***/ }),

/***/ "laRC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_button_web_cml__ = __webpack_require__("Dmbm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_button_web_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_button_web_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_button_web_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_button_web_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_98542db6_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_button_web_cml__ = __webpack_require__("c92h");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("LYi0")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-98542db6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_button_web_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_98542db6_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_button_web_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_98542db6_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_button_web_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/chameleon-ui-builtin/components/button/button.web.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-98542db6", Component.options)
  } else {
    hotAPI.reload("data-v-98542db6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "ll/r":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _BaseCtor2 = __webpack_require__("yVTO");

var _BaseCtor3 = _interopRequireDefault(_BaseCtor2);

var _lifecycle = __webpack_require__("wbAX");

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _OptTransformer = __webpack_require__("njES");

var _OptTransformer2 = _interopRequireDefault(_OptTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = exports.Component = function (_BaseCtor) {
  _inherits(Component, _BaseCtor);

  function Component(options) {
    _classCallCheck(this, Component);

    var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, options));

    _this.cmlType = 'web';

    _this.initOptTransformer(_OptTransformer2.default, {
      type: 'component',
      hooks: _lifecycle2.default.get('cml.hooks')
    });
    return _this;
  }

  return Component;
}(_BaseCtor3.default);

/***/ }),

/***/ "lrTe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "app", attrs: {} }, [_c("router-view")], 1)
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5d879fa6", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "lwq5":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var state = {};

exports.default = state;

/***/ }),

/***/ "mU5j":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/warn_da3ad45.png";

/***/ }),

/***/ "mUbh":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),

/***/ "mrKC":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createStore;

var _index = __webpack_require__("iSEW");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createStore(options) {
  return _index2.default.createStore(options);
}

/***/ }),

/***/ "nFN1":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _popupFactory = __webpack_require__("204m");

var _util = __webpack_require__("Pn5V");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'showToast',
    value: function showToast(opt) {
      var message = opt.message,
          duration = opt.duration;

      var instance = (0, _popupFactory.buildToast)({ message: message, show: true });
      setTimeout(function () {
        instance.show = false;
      }, duration);
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "nOyz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_scroller_web_cml__ = __webpack_require__("gAYa");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_scroller_web_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_scroller_web_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_scroller_web_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_scroller_web_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_ba8aae36_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_scroller_web_cml__ = __webpack_require__("Q/N/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("Zmns")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ba8aae36"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_scroller_web_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_ba8aae36_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_scroller_web_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_ba8aae36_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_scroller_web_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/chameleon-ui-builtin/components/scroller/scroller.web.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ba8aae36", Component.options)
  } else {
    hotAPI.reload("data-v-ba8aae36", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "nQTj":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("ONZj");

var _index2 = _interopRequireDefault(_index);

var _chameleonScroll = __webpack_require__("a9Gy");

var _chameleonScroll2 = _interopRequireDefault(_chameleonScroll);

var _utils = __webpack_require__("MPvF");

var _collectSlotRefs = __webpack_require__("t+t5");

var _collectSlotRefs2 = _interopRequireDefault(_collectSlotRefs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_collectSlotRefs2.default],
  props: {
    bottomOffset: {
      // 距底部/右边多远时（单位cpx），触发 scrollbottom 事件
      type: Number,
      default: 0
    },
    bounce: {
      type: Boolean,
      default: true
    },
    cstyle: {
      type: String,
      default: ''
    },
    scrollDirection: {
      // 可选为 horizontal 或者 vertical，默认值为 vertical 。定义滚动的方向。
      type: String,
      default: 'vertical'
    },
    // -1表示占用剩余高度或者宽度
    height: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 0
    },
    toElement: {
      type: String,
      default: ''
    },
    scrollTop: {
      type: Number,
      default: 0
    },
    scrollLeft: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      scroll: null,
      loadmoreReset: true,
      wrapperStyle: '',
      scrollOptions: {
        probeType: 3,
        // 上拉下拉是否回弹
        bounce: this.bounce
      }
    };
  },
  watch: {
    cstyle: function cstyle() {
      if (!this.hasSize) return;
      this.initWrapperStyle();
    },
    height: function height(val) {
      if (!val) return;
      this.sizeInitAndChange();
    },
    width: function width() {
      if (!val) return;
      this.sizeInitAndChange();
    },
    scrollTop: function scrollTop(val) {
      if (!this.scroll) return;
      this.scroll.scrollTo(0, -val, 1000);
    },
    scrollLeft: function scrollLeft(val) {
      if (!this.scroll) return;
      this.scroll.scrollTo(-val, 0, 1000);
    },
    toElement: function toElement(val) {
      this.collectSlotRefs(this.$slots.default);
      var el = this._slotRefs[val];
      if (Array.isArray(el) && el.length) {
        el = this._slotRefs[val][0];
      }
      if (el) {
        /**
          scrollToElement(el, time, offsetX, offsetY, easing)
          {DOM | String} el 滚动到的目标元素, 如果是字符串，则内部会尝试调用 querySelector 转换成 DOM 对象。
          {Number} time 滚动动画执行的时长（单位 ms）
          {Number | Boolean} offsetX 相对于目标元素的横轴偏移量，如果设置为 true，则滚到目标元素的中心位置
          {Number | Boolean} offsetY 相对于目标元素的纵轴偏移量，如果设置为 true，则滚到目标元素的中心位置
        **/
        this.scroll.scrollToElement(el, 1000, false, false);
      }
    }
  },
  computed: {
    hasSize: function hasSize() {
      return this.height > 0 || this.width > 0;
    },
    innerStyle: function innerStyle() {
      return this.scrollDirection === 'vertical' ? 'flex-direction:column;' : 'flex-direction:row;';
    }
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      if (_this.scrollDirection === 'vertical' && !_this.height) {
        console.error('纵向滚动必须传递高度属性');
        return;
      }
      if (_this.scrollDirection === 'horizontal' && !_this.width) {
        console.error('横向滚动必须传递宽度属性');
        return;
      }
      _this.sizeInitAndChange();
    }, 200);
  },

  methods: {
    initWraper: function initWraper() {
      this.wrapper = this.$refs["c-scroller"];
    },
    sizeInitAndChange: function sizeInitAndChange() {
      var _this2 = this;

      this.initWraper();
      this.initWrapperStyle();
      if (!this.scroll) {
        this.calculateInnerWidth();
        // 等待WrapperStyle渲染完成，否则maxScrollY计算有问题
        setTimeout(function () {
          _this2.initScroller();
        }, 0);
      }
    },

    // 用于input blur
    touchstartHandler: function touchstartHandler(e) {
      var target = e.target.tagName;
      var activeElement = document.activeElement;
      if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') && activeElement.tagName !== target) {
        activeElement.blur();
      }
    },
    onScrollHandler: function onScrollHandler() {
      var scroll = this.scroll;
      var startX = scroll.startX || 0;
      var startY = scroll.startY || 0;
      var detail = {
        deltaX: (0, _index2.default)(scroll.x - startX),
        deltaY: (0, _index2.default)(scroll.y - startY),
        scrollHeight: (0, _index2.default)(scroll.scrollerHeight),
        scrollLeft: (0, _index2.default)(Math.abs(scroll.x)),
        scrollTop: (0, _index2.default)(Math.abs(scroll.y)),
        scrollWidth: (0, _index2.default)(scroll.scrollerWidth)
      };
      this.$emit('onscroll', detail);
      this.$emit('customscroll', detail);
    },
    onBottomHandler: function onBottomHandler(detail) {
      this.$emit('scrolltobottom', {
        direction: 'bottom'
      });
    },
    resetLoadmore: function resetLoadmore() {
      this.loadmoreReset = true;
    },
    finishPull: function finishPull() {
      var _this3 = this;

      this.$nextTick(function () {
        _this3.scroll.finishPullUp();
        _this3.scroll.finishPullDown();
        var timer = setTimeout(function () {
          _this3.scroll && _this3.scroll.refresh();
          _this3._refresh.isRebounding = false;
          _this3._loading.isRebounding = false;
          clearTimeout(timer);
        }, 1000);
      });
    },
    initWrapperStyle: function initWrapperStyle() {
      if (!this.wrapper) return;
      var wrapper = this.wrapper;
      var style = '';
      if (this.scrollDirection === 'vertical') {
        style = this.height < 0 ? 'height:' + (window.innerHeight - wrapper.getBoundingClientRect().top) + 'px;' : 'height:' + this.height + 'px;';
      } else {
        style = this.width < 0 ? 'width:' + (window.innerWidth - wrapper.getBoundingClientRect().left) + 'px;' : 'width:' + this.width + 'px;';
      }
      var wrapperStyle = this.hasSize ? this.cstyle + style : style + this.cstyle;
      this.wrapperStyle = (0, _utils.cmlStyleTransfer)(wrapperStyle);
    },
    calculateInnerWidth: function calculateInnerWidth() {
      if (this.scrollDirection !== 'horizontal') return;
      // 仅横向滚动需要
      var inner = this.$refs.inner;
      var width = 0;
      if (inner.children && inner.children.length) {
        var lastChild = inner.children[inner.children.length - 1];
        var marginRight = document.defaultView.getComputedStyle(lastChild, null)['marginRight'];
        //  去掉px 转为数字
        marginRight = +marginRight.substring(0, marginRight.length - 2);
        width += lastChild.offsetLeft + lastChild.offsetWidth + marginRight;
      }
      // 设置子元素宽度
      inner.style.width = width + 'px';
    },
    initOptions: function initOptions() {
      if (this.scrollDirection !== 'vertical') {
        this.scrollOptions.scrollX = true;
        this.scrollOptions.eventPassthrough = 'vertical';
      }

      // 仅垂直方向可设置refresh loading
      if (this._refresh && this.scrollDirection === 'vertical') {
        this.scrollOptions.pullDownRefresh = {
          threshold: 50, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
          stop: 20 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
        };
      }

      if (this._loading && this.scrollDirection === 'vertical') {
        this.scrollOptions.pullUpLoad = {
          threshold: 50
        };
      }
    },
    initScroller: function initScroller() {
      var _this4 = this;

      var wrapper = this.wrapper;
      var inner = this.$refs.inner;

      if (!wrapper || !inner) {
        return;
      }

      this.initOptions();
      this.scroll = new _chameleonScroll2.default(wrapper, this.scrollOptions);

      // 监听事件
      // 上拉
      if (this.scrollOptions.pullUpLoad) {
        this.scroll.on('pullingUp', function () {
          if (_this4._loading) {
            _this4._loading.pullingUp();
          }
        });
      }

      // 下拉
      if (this.scrollOptions.pullDownRefresh) {
        this.scroll.on('pullingDown', function () {
          // 刷新数据的过程中，回弹停留在距离顶部还有20px的位置
          _this4._refresh.pullingDown();
        });
      }

      this.scroll.on('scroll', function (pos) {
        _this4.onScrollHandler(pos);
        _this4._refresh && _this4._refresh.toggleBeforeRefreshing(pos.y);
      });

      this.scroll.on('scrollEnd', function () {
        // offset > 0 说明方向向bottom
        var offset = void 0,
            isReachedBottom = void 0;
        if (_this4.scrollDirection === 'vertical') {
          offset = _this4.scroll.startY - _this4.scroll.y;
          isReachedBottom = _this4.scroll.y <= _this4.scroll.maxScrollY + (0, _utils.cpx2px)(_this4.bottomOffset);
        } else {
          offset = _this4.scroll.startX - _this4.scroll.x;
          isReachedBottom = _this4.scroll.x <= _this4.scroll.maxScrollX + (0, _utils.cpx2px)(_this4.bottomOffset);
        }
        // 滚动到底部
        if (offset > 0 && _this4.loadmoreReset && isReachedBottom) {
          _this4.onBottomHandler();
        } else if (!isReachedBottom && !_this4.loadmoreReset) {
          _this4.resetLoadmore();
        }
      });

      this.scroll.on('beforeScrollStart', function () {
        _this4.scroll.refresh();
        _this4.calculateInnerWidth();
      });
    }
  }
}; //
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "njES":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _WexOptTransformer2 = __webpack_require__("WgSU");

var _WexOptTransformer3 = _interopRequireDefault(_WexOptTransformer2);

var _url = __webpack_require__("amoi");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OptTransformer = function (_WexOptTransformer) {
  _inherits(OptTransformer, _WexOptTransformer);

  function OptTransformer(config) {
    _classCallCheck(this, OptTransformer);

    var _this = _possibleConstructorReturn(this, (OptTransformer.__proto__ || Object.getPrototypeOf(OptTransformer)).call(this, config));

    _this.init();
    return _this;
  }

  _createClass(OptTransformer, [{
    key: 'beforeCreateArgsMixin',
    value: function beforeCreateArgsMixin() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      args = args || [];

      var searchObj = (0, _url.query2json)(location.search);

      var hashObj = (0, _url.query2json)(location.hash);

      args[0] = Object.assign({}, args[0], searchObj, hashObj);

      return args;
    }
  }]);

  return OptTransformer;
}(_WexOptTransformer3.default);

exports.default = OptTransformer;

/***/ }),

/***/ "oJVY":
/***/ (function(module, exports) {

module.exports = {"mode":"hash","domain":"https://www.chameleon.com","routes":[{"url":"/cml/h5/index","path":"/pages/index/index","name":"首页","mock":"index.php"},{"url":"/cml/indexlist1","path":"/pages/page/index","name":"第三方库实现indexlist"},{"url":"/cml/indexlist2","path":"/pages/page2/index","name":"基于chameleon实现indexlist"}]}

/***/ }),

/***/ "otVu":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSocket = initSocket;

var _index = __webpack_require__("zYxj");

var moduleName = 'webSocket';
var methodName = 'WebSocket';

function initSocket(_ref) {
  var url = _ref.url;

  WebSocket.WebSocket(url);
  return WebSocket;
}

initSocket.prototype.moduleName = moduleName;
initSocket.prototype.methodName = methodName;

var WebSocket = {
  WebSocket: function WebSocket(url) {
    this._callAdapter(methodName, { url: url });
  },
  onopen: function onopen(cb) {
    this._listenAdapter('onopen', cb);
  },
  onmessage: function onmessage(cb) {
    this._listenAdapter('onmessage', cb);
  },
  onerror: function onerror(cb) {
    this._listenAdapter('onerror', cb);
  },
  onclose: function onclose(cb) {
    this._listenAdapter('onclose', cb);
  },
  send: function send() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    this._callAdapter('send', data);
  },
  close: function close() {
    var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { code: 0, reason: 'close' };

    /**
     * code: 0
     * reason: string
     */
    this._callAdapter('close', param);
  },
  _callAdapter: function _callAdapter(key, param) {
    (0, _index.callNative)(moduleName, key, param, function () {});
  },
  _listenAdapter: function _listenAdapter(key, cb) {
    (0, _index.listenNative)(moduleName, key, cb);
  }
};

/***/ }),

/***/ "p+oX":
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _methods;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var common = __webpack_require__("CHsc");
var webStyleHandle = __webpack_require__("r3pY");

var _ = module.exports = {};
common.merge(_, common);

_.mixins = {
  methods: (_methods = {}, _defineProperty(_methods, _.inlineStatementEventProxy, function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    args = args.reduce(function (result, arg) {
      if (arg instanceof Event) {
        result.push(getNewEvent(arg));
      } else {
        result.push(arg);
      }
      return result;
    }, []);
    var originFuncName = args[0];
    if (this[originFuncName] && _.isType(this[originFuncName], 'Function')) {
      this[originFuncName].apply(this, _toConsumableArray(args.slice(1)));
    } else {
      console.log('can not find function ' + originFuncName);
    }
  }), _defineProperty(_methods, _.modelEventProxyName, function (e, modelKey) {
    var newEvent = getNewEvent(e);
    this[modelKey] = newEvent.detail.value;
  }), _defineProperty(_methods, _.eventProxyName, function (e, originFuncName) {
    //调用原始事件
    if (this[originFuncName] && _.isType(this[originFuncName], 'Function')) {
      //获取新的事件对象
      var newEvent = getNewEvent(e);
      this[originFuncName](newEvent);
    } else {
      console.log('can not find function  ' + originFuncName);
    }
  }), _defineProperty(_methods, _.eventEmitName, function (eventKey, detail) {
    //传递的参数内容包装成detail参数
    this.$emit(eventKey, {
      type: eventKey,
      detail: detail,
      stopPropagation: function stopPropagation() {}
    });
    if (this['$__checkCmlEmit__']) {
      this['$__checkCmlEmit__'](eventKey, detail);
    }
  }), _defineProperty(_methods, _.styleParseName, function (content) {
    //web端不需要处理直接返回
    var res = '';
    if (_.isType(content, 'String')) {
      res = content;
    } else if (_.isType(content, 'Object')) {
      Object.keys(content).forEach(function (key) {
        res += key + ':' + content[key] + ';';
      });
    }
    return res;
  }), _defineProperty(_methods, _.styleProxyName, function (content, options) {
    return webStyleHandle(content, options);
  }), _defineProperty(_methods, _.mergeStyleName, function () {
    return _.mergeStyle.apply(_, arguments);
  }), _methods)
};

function getNewEvent(e) {
  var newEvent = {};
  var type = e.type,
      timeStamp = e.timeStamp,
      target = e.target,
      currentTarget = e.currentTarget,
      touches = e.touches,
      changedTouches = e.changedTouches,
      _e$detail = e.detail,
      detail = _e$detail === undefined ? {} : _e$detail;


  newEvent._originEvent = e;

  if (type) {
    type = type.replace(/^weex\$/, '');
    type = type === 'click' ? 'tap' : type;
    newEvent.type = type;
  }

  if (timeStamp) {
    newEvent.timeStamp = parseInt(timeStamp);
  }

  if (target) {
    newEvent.target = {
      id: target.id,
      // offsetLeft: target.offsetLeft,
      // offsetTop: target.offsetTop,
      dataset: target.dataset
    };
  }

  if (currentTarget) {
    newEvent.currentTarget = {
      id: currentTarget.id,
      // offsetLeft: currentTarget.offsetLeft,
      // offsetTop: currentTarget.offsetTop,
      dataset: currentTarget.dataset
    };
  }

  if (touches) {
    newEvent.touches = [];
    for (var i = 0; i < touches.length; i++) {
      var touch = touches[i];
      var ret = {};
      ret.identifier = touch.identifier;
      ret.pageX = parseInt(touch.pageX);
      ret.pageY = parseInt(touch.pageY);
      ret.clientX = parseInt(touch.clientX);
      ret.clientY = parseInt(touch.clientY);
      newEvent.touches.push(ret);
    }
  }

  if (changedTouches) {
    newEvent.changedTouches = [];
    for (var _i = 0; _i < changedTouches.length; _i++) {
      var _touch = changedTouches[_i];
      var _ret = {};
      _ret.identifier = _touch.identifier;
      _ret.pageX = parseInt(_touch.pageX);
      _ret.pageY = parseInt(_touch.pageY);
      _ret.clientX = parseInt(_touch.clientX);
      _ret.clientY = parseInt(_touch.clientY);
      newEvent.changedTouches.push(_ret);
    }
  }

  if (_.isType(detail, 'Object')) {
    newEvent.detail = detail;
  } else {
    newEvent.detail = {};
  }

  if (target) {
    newEvent.detail.value = target.value;
  }

  //特殊事件处理
  if (type === 'loadmore') {
    newEvent.detail.direction = 'bottom';
  }

  if (type === 'scroll') {
    newEvent.detail = _extends({}, newEvent.detail, {
      scrollHeight: e.contentSize ? e.contentSize.height : 0,
      scrollWidth: e.contentSize ? e.contentSize.width : 0,
      scrollLeft: e.contentOffset ? Math.abs(e.contentOffset.x) : 0,
      scrollTop: e.contentOffset ? Math.abs(e.contentOffset.y) : 0, // 坐标轴变换
      deltaX: 0,
      deltaY: 0
    });
  }

  return newEvent;
}

/***/ }),

/***/ "p4KU":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__("z4ZC");

var _util = __webpack_require__("Pn5V");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'navigateTo',
    value: function navigateTo(opt) {
      var path = opt.path,
          query = opt.query;

      query = (0, _utils.queryParse)(query);

      var runtime = __webpack_require__("1HDH").default;

      var _runtime$getInfo = runtime.getInfo(),
          router = _runtime$getInfo.router,
          routerConfig = _runtime$getInfo.routerConfig;

      if (path && router) {
        var flag = false;

        var routes = routerConfig.routes;
        for (var i = 0; i < routes.length; i++) {
          var route = routes[i];
          if (path === route.path) {
            flag = true;
            router.push({
              path: route.url,
              query: query
            });
            break;
          }
        }
        if (!flag) {
          router.push({
            path: router.options.routes[0].path,
            query: query
          });
        }
      } else {
        router.push({
          path: router.options.routes[0].path,
          query: query
        });
      }
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "piik":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_c_popup_cml__ = __webpack_require__("+fS+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_c_popup_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_c_popup_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_c_popup_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_c_popup_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_33f99648_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_c_popup_cml__ = __webpack_require__("G8cg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("Ixu1")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-33f99648"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_c_popup_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_33f99648_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_c_popup_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_33f99648_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_c_popup_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/chameleon-api/src/interfaces/alert/components/c-popup/c-popup.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-33f99648", Component.options)
  } else {
    hotAPI.reload("data-v-33f99648", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "qvX/":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//

exports.default = {
  props: {
    y: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      width: 50,
      height: 80
    };
  },

  computed: {
    distance: function distance() {
      return Math.max(0, Math.min(this.y * this.ratio, this.maxDistance));
    },
    style: function style() {
      return 'width:' + this.width / this.ratio + 'px;height:' + this.height / this.ratio + 'px';
    }
  },
  mounted: function mounted() {
    this.ratio = window.devicePixelRatio;
    this.width *= this.ratio;
    this.height *= this.ratio;
    this.initRadius = 18 * this.ratio;
    this.minHeadRadius = 12 * this.ratio;
    this.minTailRadius = 5 * this.ratio;
    this.initArrowRadius = 10 * this.ratio;
    this.minArrowRadius = 6 * this.ratio;
    this.arrowWidth = 3 * this.ratio;
    this.maxDistance = 40 * this.ratio;
    this.initCenterX = 25 * this.ratio;
    this.initCenterY = 25 * this.ratio;
    this.headCenter = {
      x: this.initCenterX,
      y: this.initCenterY
    };
    this._draw();
  },

  methods: {
    _draw: function _draw() {
      var bubble = this.$refs.bubble;
      var ctx = bubble.getContext('2d');
      ctx.clearRect(0, 0, bubble.width, bubble.height);

      this._drawBubble(ctx);

      this._drawArrow(ctx);
    },
    _drawBubble: function _drawBubble(ctx) {
      ctx.save();
      ctx.beginPath();

      var rate = this.distance / this.maxDistance;
      var headRadius = this.initRadius - (this.initRadius - this.minHeadRadius) * rate;

      this.headCenter.y = this.initCenterY - (this.initRadius - this.minHeadRadius) * rate;

      // upper semicircle
      ctx.arc(this.headCenter.x, this.headCenter.y, headRadius, 0, Math.PI, true);

      // left bessel
      var tailRadius = this.initRadius - (this.initRadius - this.minTailRadius) * rate;
      var tailCenter = {
        x: this.headCenter.x,
        y: this.headCenter.y + this.distance
      };

      var tailPointL = {
        x: tailCenter.x - tailRadius,
        y: tailCenter.y
      };
      var controlPointL = {
        x: tailPointL.x,
        y: tailPointL.y - this.distance / 2
      };

      ctx.quadraticCurveTo(controlPointL.x, controlPointL.y, tailPointL.x, tailPointL.y);

      // lower semicircle
      ctx.arc(tailCenter.x, tailCenter.y, tailRadius, Math.PI, 0, true);

      // right bessel
      var headPointR = {
        x: this.headCenter.x + headRadius,
        y: this.headCenter.y
      };
      var controlPointR = {
        x: tailCenter.x + tailRadius,
        y: headPointR.y + this.distance / 2
      };
      ctx.quadraticCurveTo(controlPointR.x, controlPointR.y, headPointR.x, headPointR.y);

      ctx.fillStyle = 'rgb(170,170,170)';
      ctx.fill();
      ctx.strokeStyle = 'rgb(153,153,153)';
      ctx.stroke();
      ctx.restore();
    },
    _drawArrow: function _drawArrow(ctx) {
      ctx.save();
      ctx.beginPath();

      var rate = this.distance / this.maxDistance;
      var arrowRadius = this.initArrowRadius - (this.initArrowRadius - this.minArrowRadius) * rate;

      // inner circle
      ctx.arc(this.headCenter.x, this.headCenter.y, arrowRadius - (this.arrowWidth - rate), -Math.PI / 2, 0, true);

      // outer circle
      ctx.arc(this.headCenter.x, this.headCenter.y, arrowRadius, 0, Math.PI * 3 / 2, false);

      ctx.lineTo(this.headCenter.x, this.headCenter.y - arrowRadius - this.arrowWidth / 2 + rate);
      ctx.lineTo(this.headCenter.x + this.arrowWidth * 2 - rate * 2, this.headCenter.y - arrowRadius + this.arrowWidth / 2);

      ctx.lineTo(this.headCenter.x, this.headCenter.y - arrowRadius + this.arrowWidth * 3 / 2 - rate);

      ctx.fillStyle = 'rgb(255,255,255)';
      ctx.fill();
      ctx.strokeStyle = 'rgb(170,170,170)';
      ctx.stroke();
      ctx.restore();
    }
  },
  watch: {
    y: function y() {
      this._draw();
    }
  }
};

/***/ }),

/***/ "qywW":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inSDK = inSDK;
function inSDK() {
  var query = this.getQueryObjSync();
  var inSDK = !!query.cml_sdk;
  return inSDK;
}

/***/ }),

/***/ "r3pY":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** 提供编译时样式处理的方法 */
// 运行时不能使用postcss 体积过大

var utils = __webpack_require__("Wh0r");
module.exports = function (content, options) {
  if (typeof options === 'string') {
    options = JSON.parse(utils.singlequot2doublequot(options));
  }
  if (typeof content !== 'string') {
    throw new Error('expected the value of style is string but get ' + (typeof content === 'undefined' ? 'undefined' : _typeof(content)));
  }
  content = utils.disappearCssComment(content);
  content = utils.uniqueStyle(content);
  return parse(content);
  function parse(style) {
    return style.split(';').filter(function (declaration) {
      return !!declaration.trim();
    }).map(function (declaration) {
      var _utils$getStyleKeyVal = utils.getStyleKeyValue(declaration),
          key = _utils$getStyleKeyVal.key,
          value = _utils$getStyleKeyVal.value;

      return {
        property: key,
        value: value
      };
    }).map(function (declaration) {
      declaration.value = handle(declaration.value, options);
      return declaration.property + ':' + declaration.value;
    }).join(';');
  }

  function handle(content, options) {
    var pxRegex = /(\d*\.?\d+)cpx/gi;
    var unitPrecision = 5;
    function toFixed(number, precision) {
      var multiplier = Math.pow(10, precision + 1);
      var wholeNumber = Math.floor(number * multiplier);
      return Math.round(wholeNumber / 10) * 10 / multiplier;
    }
    if (options.rem === true) {
      var base = options.remOptions.rootValue.cpx;
      return content.replace(pxRegex, function (m, $1) {
        return toFixed(parseFloat($1, 10) / base, unitPrecision) + 'rem';
      });
    } else {
      var scale = options.scale;
      return content.replace(pxRegex, function (m, $1) {
        return toFixed(parseFloat($1, 10) * scale, unitPrecision) + 'px';
      });
    }
  }
};

/***/ }),

/***/ "rffR":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var STYLE_MAP = exports.STYLE_MAP = {
  red: {
    'background-color': '#db2a36'
  },
  orange: {
    'background-color': '#fc9153'
  },
  white: {
    'background-color': '#FFFFFF',
    'border-color': '#A5A5A5',
    'border-width': '1px'
  },
  blue: {
    'background-color': '#4a4c5b'
  },
  green: {
    'background-color': '#50a050'
  }
};

var TEXT_STYLE_MAP = exports.TEXT_STYLE_MAP = {
  red: {
    color: '#FFFFFF'
  },
  orange: {
    color: '#FFFFFF'
  },
  blue: {
    color: '#FFFFFF'
  },
  white: {
    color: '#3D3D3D'
  },
  green: {
    color: '#FFFFFF'
  }
};

var BUTTON_STYLE_MAP = exports.BUTTON_STYLE_MAP = {
  full: {
    width: '702cpx',
    height: '88cpx'
  },
  big: {
    width: '339cpx',
    height: '70cpx'
  },
  medium: {
    width: '218cpx',
    height: '60cpx'
  },
  small: {
    width: '157cpx',
    height: '44cpx'
  }
};

var TEXT_FONTSIZE_STYLE_MAP = exports.TEXT_FONTSIZE_STYLE_MAP = {
  full: {
    'font-size': '36cpx'
  },
  big: {
    'font-size': '32cpx'
  },
  medium: {
    'font-size': '28cpx'
  },
  small: {
    'font-size': '24cpx'
  }
};

/***/ }),

/***/ "roJc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_indexlist_web_cml__ = __webpack_require__("NnZs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_indexlist_web_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_indexlist_web_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_indexlist_web_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_indexlist_web_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6d19485a_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_indexlist_web_cml__ = __webpack_require__("Uibo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("aFq8")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6d19485a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_indexlist_web_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6d19485a_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_indexlist_web_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6d19485a_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_indexlist_web_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/indexlist/indexlist.web.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6d19485a", Component.options)
  } else {
    hotAPI.reload("data-v-6d19485a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "rxwH":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "sufT":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueRouter = __webpack_require__("5oF4");

var _vueRouter2 = _interopRequireDefault(_vueRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.use(_vueRouter2.default);

// 根据配置生成的路由options

/*global Vue*/
var routerOptions = 
    //根据配置生成路由
    {
      mode: "hash",
      routes: [
      {
        path: "/cml/h5/index",
        name: "首页",
        component: __webpack_require__("w8mr").default
      },
      
      {
        path: "/cml/indexlist1",
        name: "第三方库实现indexlist",
        component: __webpack_require__("GS4Q").default
      },
      
      {
        path: "/cml/indexlist2",
        name: "基于chameleon实现indexlist",
        component: __webpack_require__("MtSG").default
      },
      ]
    }    
    ;

routerOptions.mode =  true ? routerOptions.mode : 'abstract';

var Router = new _vueRouter2.default(routerOptions);
exports.default = Router;

/***/ }),

/***/ "t+t5":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  methods: {
    collectSlotRefs: function collectSlotRefs() {
      var VNodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (!VNodes || !VNodes.length) return;

      var node = checkContext(VNodes);
      if (node) {
        this._slotRefs = node.context.$refs || {};
      } else {
        this._slotRefs = {};
      }

      function checkContext(vnodes) {
        var children = [];
        var node = null;
        for (var i = 0; i < vnodes.length; i++) {
          var vnode = vnodes[i];
          if (vnode.context) {
            return node = vnode;
          }

          if (vnode.children && vnode.children.length) {
            children = children.concat(vnode.children);
          }
        }
        if (children.length) {
          return checkContext(children);
        }
      }

      // const refs = this._slotRefs = {}

      // function getRefs(vnodes) {
      //   vnodes = vnodes.filter((vnode) => {
      //     if (vnode.children && vnode.children.length) {
      //       getRefs(vnode.children)
      //     }
      //     return vnode.data && vnode.data.ref
      //   })
      //   if (!vnodes.length) return
      //   vnodes.forEach(vnode => {
      //     const key = vnode.data.ref
      //     const ref = vnode.componentInstance || vnode.elm

      //     if (vnode.data.refInFor) {
      //       if (!Array.isArray(refs[key])) {
      //         refs[key] = [ref]
      //       } else if (refs[key].indexOf(ref) < 0) {
      //         refs[key].push(ref)
      //       }
      //     } else {
      //       refs[key] = ref
      //     }
      //   })
      // }
      // getRefs(VNodes)
    }
  }
};

/***/ }),

/***/ "ukYY":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),

/***/ "v4CN":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //
//
//
//
//
//


var _index = __webpack_require__("IcnI");

var _index2 = _interopRequireDefault(_index);

var _routerConfig = __webpack_require__("oJVY");

var _routerConfig2 = _interopRequireDefault(_routerConfig);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
        function App() {
                _classCallCheck(this, App);

                this.data = {
                        store: _index2.default,
                        routerConfig: _routerConfig2.default
                };
        }

        _createClass(App, [{
                key: 'created',
                value: function created(res) {}
        }]);

        return App;
}();

exports.default = new App();


exports.default.components = _extends({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createApp(exports.default).getOptions();

/***/ }),

/***/ "v8KS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_app_cml__ = __webpack_require__("v4CN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_app_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_app_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_app_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_app_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d879fa6_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_app_cml__ = __webpack_require__("lrTe");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("BRW+")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5d879fa6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_app_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d879fa6_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_app_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d879fa6_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_app_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/app/app.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5d879fa6", Component.options)
  } else {
    hotAPI.reload("data-v-5d879fa6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "vF0E":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexListItem = __webpack_require__("dzj4");

var _indexListItem2 = _interopRequireDefault(_indexListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_NAME = 'cube-index-list-group'; //
//
//
//
//
//
//
//
//
//
//

var EVENT_SELECT = 'select';

exports.default = {
  name: COMPONENT_NAME,
  props: {
    group: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  methods: {
    selectItem: function selectItem(item) {
      this.$emit(EVENT_SELECT, item);
    }
  },
  components: {
    CubeIndexListItem: _indexListItem2.default
  }
};

/***/ }),

/***/ "vpr6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_c_toast_cml__ = __webpack_require__("x5ZJ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_c_toast_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_c_toast_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_c_toast_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_c_toast_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4e72ff30_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_c_toast_cml__ = __webpack_require__("XnZI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("9EvJ")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4e72ff30"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_c_toast_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4e72ff30_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_c_toast_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4e72ff30_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_c_toast_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/chameleon-api/src/interfaces/showToast/components/c-toast/c-toast.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e72ff30", Component.options)
  } else {
    hotAPI.reload("data-v-4e72ff30", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "w8mr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__ = __webpack_require__("Ie4F");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1bad7fbd_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__ = __webpack_require__("hGaY");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("iXZ3")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1bad7fbd"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1bad7fbd_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1bad7fbd_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v10_13_0_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1bad7fbd", Component.options)
  } else {
    hotAPI.reload("data-v-1bad7fbd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "wbAX":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__("h2Ex");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LIFECYCLE = {
  web: {
    hooks: ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed']
  },
  weex: {
    hooks: ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed']
  },
  wx: {
    app: {
      hooks: ['onLaunch', 'onShow', 'onHide'],
      hooksMap: {
        'beforeCreate': 'onLaunch',
        'created': 'onLaunch',
        'beforeMount': 'onLaunch',
        'mounted': 'onShow',
        'beforeDestroy': 'onHide',
        'destroyed': 'onHide'
      },
      whitelist: ['onError', 'onPageNotFound']
    },
    page: {
      hooks: ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload'],
      hooksMap: {
        'beforeCreate': 'onLoad',
        'created': 'onLoad',
        'beforeMount': 'onShow',
        'mounted': 'onReady',
        'beforeDestroy': 'onUnload',
        'destroyed': 'onUnload'
      },
      whitelist: ['onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap']
    },
    component: {
      hooks: ['created', 'attached', 'ready', 'detached'],
      hooksMap: {
        'beforeCreate': 'created',
        'created': 'created',
        'beforeMount': 'attached',
        'mounted': 'ready',
        'beforeDestroy': 'detached',
        'destroyed': 'detached'
      },
      whitelist: ['moved']
    }
  },
  alipay: {
    app: {
      hooks: ['onLaunch', 'onShow', 'onHide'],
      hooksMap: {
        'beforeCreate': 'onLaunch',
        'created': 'onLaunch',
        'beforeMount': 'onLaunch',
        'mounted': 'onShow',
        'beforeDestroy': 'onHide',
        'destroyed': 'onHide'
      },
      whitelist: ['onError', 'onPageNotFound']
    },
    page: {
      hooks: ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload'],
      hooksMap: {
        'beforeCreate': 'onLoad',
        'created': 'onLoad',
        'beforeMount': 'onShow',
        'mounted': 'onReady',
        'beforeDestroy': 'onUnload',
        'destroyed': 'onUnload'
      },
      whitelist: ['onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onTitleClick']
    },
    component: {
      hooks: ['didMount', 'didUnmount'],
      hooksMap: {
        'beforeCreate': 'didMount',
        'created': 'didMount',
        'beforeMount': 'didMount',
        'mounted': 'didMount',
        'beforeDestroy': 'didUnmount',
        'destroyed': 'didUnmount'
      },
      whitelist: []
    }
  },
  baidu: {
    app: {
      hooks: ['onLaunch', 'onShow', 'onHide'],
      hooksMap: {
        'beforeCreate': 'onLaunch',
        'created': 'onLaunch',
        'beforeMount': 'onLaunch',
        'mounted': 'onShow',
        'beforeDestroy': 'onHide',
        'destroyed': 'onHide'
      },
      whitelist: ['onError', 'onPageNotFound']
    },
    page: {
      hooks: ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload'],
      hooksMap: {
        'beforeCreate': 'onLoad',
        'created': 'onLoad',
        'beforeMount': 'onShow',
        'mounted': 'onReady',
        'beforeDestroy': 'onUnload',
        'destroyed': 'onUnload'
      },
      whitelist: ['onForceReLaunch', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap']
    },
    component: {
      hooks: ['created', 'attached', 'ready', 'detached'],
      hooksMap: {
        'beforeCreate': 'created',
        'created': 'created',
        'beforeMount': 'created',
        'mounted': 'ready',
        'beforeDestroy': 'detached',
        'destroyed': 'detached'
      },
      whitelist: []
    }
  },
  cml: {
    hooks: ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed']
  }
};

exports.default = new _config2.default(LIFECYCLE);

/***/ }),

/***/ "x5ZJ":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //
//
//
//
//
//
//
//
//
//

var _cPopup = __webpack_require__("piik");

var _cPopup2 = _interopRequireDefault(_cPopup);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CToast = function () {
  function CToast() {
    _classCallCheck(this, CToast);

    this.props = {
      type: {
        type: String,
        default: "loading"
      },
      message: {
        type: String,
        default: ""
      },
      duration: {
        type: Number,
        default: 3000
      },
      show: {
        type: Boolean,
        default: false
      },
      mask: {
        type: Boolean,
        default: false
      },
      needIcon: {
        type: Boolean,
        default: true
      }
    };
    this.data = {
      transitionStyle: "",
      IconMap: {
        loading: __webpack_require__("dWRg"),
        success: __webpack_require__("yS3Q"),
        warn: __webpack_require__("mU5j")
      }
    };
    this.computed = {
      typeImg: function typeImg() {
        return this.IconMap[this.type];
      },
      maskClass: function maskClass() {
        return this.mask ? "has-mask" : "no-mask";
      }
    };
    this.watch = {
      show: function show(n, o) {
        var _this = this;

        if (n) {
          setTimeout(function () {
            _this.$cmlEmit("show", { value: false });
          }, this.duration);
        }
      }
    };
    this.methods = {};
  }

  _createClass(CToast, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);

  return CToast;
}();

exports.default = new CToast();


exports.default.components = _extends({}, exports.default.components, { cPopup: _cPopup2.default });


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "xfCQ":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__("cL84");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var chameleon = {
  config: {
    bundleUrl: location.href
  },

  utils: _utils2.default,
  mixins: {},
  _components: {
    button: 1,
    checkbox: 1,
    input: 1,
    list: 1,
    page: 1,
    radio: 1,
    richtext: 1,
    scroller: 1,
    switch: 1,
    textarea: 1,
    video: 1
  },
  _meta: {
    mounted: {},
    updated: {},
    destroyed: {},
    requiredModules: {},
    apiCalled: {},
    perf: {}
  }

};

exports.default = chameleon;

/***/ }),

/***/ "xmar":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _index = __webpack_require__("EYO0");

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _scrollerWeb = __webpack_require__("nOyz");

var _scrollerWeb2 = _interopRequireDefault(_scrollerWeb);

var _chameleonRuntime = __webpack_require__("1HDH");

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


exports.default.components = _extends({}, exports.default.components, { cmlBuildinScroller: _scrollerWeb2.default });


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "y268":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = request;

var _index = __webpack_require__("zYxj");

var moduleName = 'stream';
var methodName = 'fetch';

function request(params) {
  var url = params.url,
      headers = params.headers,
      body = params.body,
      method = params.method,
      cb = params.cb;


  var args = {
    url: url,
    method: method,
    headers: headers,
    type: 'text'

    // get不传body，for ios sdk
  };if (method.toLocaleLowerCase() != 'get') {
    args.body = body;
  }

  (0, _index.callNative)(moduleName, methodName, args, function (res) {
    /**
     * errno
     * data:
     *  status
     *  statusText
     *  data
     *  headers
     */
    var errno = res.errno,
        _res$data = res.data,
        data = _res$data === undefined ? '' : _res$data;

    if (errno == 0) {
      cb(data);
    }
  });
}

request.prototype.moduleName = moduleName;
request.prototype.methodName = methodName;

/***/ }),

/***/ "yS3Q":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/succ_1ecca56.png";

/***/ }),

/***/ "yVTO":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _proto = __webpack_require__("Qr3T");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseCtor = function () {
  function BaseCtor(options) {
    _classCallCheck(this, BaseCtor);

    // 拷贝原型链上属性
    (0, _proto.copyProtoProperty)(options);

    this.options = Object.assign({}, options);
    this.originalOptions = options;
  }

  _createClass(BaseCtor, [{
    key: 'initOptTransformer',
    value: function initOptTransformer(OptTransformer, config) {
      var optTransformer = new OptTransformer(_extends({
        options: this.options
      }, config));
      this.options = optTransformer.getOptions();
    }
  }, {
    key: 'getOptions',
    value: function getOptions() {
      return this.options;
    }
  }]);

  return BaseCtor;
}();

exports.default = BaseCtor;

/***/ }),

/***/ "z4ZC":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFn = isFn;
exports.isStr = isStr;
exports.isNum = isNum;
exports.isObj = isObj;
exports.isArray = isArray;
exports.isUndefined = isUndefined;
exports.isEmpty = isEmpty;
exports.noop = noop;
exports.parseQuery = parseQuery;
exports.queryStringify = queryStringify;
exports.queryParse = queryParse;
exports.isNeedApiPrefix = isNeedApiPrefix;
exports.addApiPrefix = addApiPrefix;
exports.tryJsonParse = tryJsonParse;
exports.getQueryParamsFromUrl = getQueryParamsFromUrl;
exports.getOpenObj = getOpenObj;
exports.getUrlWithConnector = getUrlWithConnector;
exports.getRefObj = getRefObj;
exports.compareVersion = compareVersion;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * 基础js方法的封装
 *
 */
function typeEqual(obj, type) {
  return Object.prototype.toString.call(obj) === '[object ' + type + ']';
}

function isFn(obj) {
  return typeEqual(obj, 'Function');
}

function isStr(obj) {
  return typeEqual(obj, 'String');
}

function isNum(obj) {
  return typeof obj === 'number';
}

function isObj(obj) {
  return typeEqual(obj, 'Object');
}

function isArray(obj) {
  return typeEqual(obj, 'Array');
}

function isUndefined(obj) {
  return typeEqual(obj, 'Undefined');
}

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

function noop() {}

function parseQuery(obj) {
  var str = '&';
  var keys = null;
  if (obj && Object.keys(obj).length > 0) {
    keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      str += key + '=' + encodeURIComponent(obj[key]) + '&';
    }
  }
  return str;
}

function queryStringify(obj) {
  var str = '&';
  var keys = null;
  if (obj && Object.keys(obj).length > 0) {
    keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      str += key + '=' + encodeURIComponent(obj[key]) + '&';
    }
  }
  return str;
}

function queryParse() {
  var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var arr = search.split(/(\?|&)/);
  var parmsObj = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].indexOf('=') !== -1) {
      var keyValue = arr[i].match(/([^=]*)=(.*)/);
      parmsObj[keyValue[1]] = keyValue[2];
    }
  }
  return parmsObj;
}

function isNeedApiPrefix(url) {
  return (/^\/[^/]/.test(url)
  );
}

function addApiPrefix(url, domainkey) {
  var domainMap = {"apiPrefix":"https://api.chameleon.com"};
  if (domainMap) {
    return domainMap[domainkey] + url;
  }
  return url;
}

function tryJsonParse(some) {
  // 这里eslint提示也先别删除\[\]
  if (isStr(some) && /[\{\[].*[\}\]]/.test(some)) {
    some = JSON.parse(some);
  }
  return some;
}

function getQueryParamsFromUrl(url) {
  var arr = url.split(/(\?|&)/);
  var parmsObj = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].indexOf('=') !== -1) {
      var keyValue = arr[i].match(/([^=]*)=(.*)/);
      parmsObj[keyValue[1]] = decodeURIComponent(keyValue[2]);
    }
  }
  return parmsObj;
}

/**
 * 获取处理后的各端打开的地址
 * @param {String} url url地址
 * @return {Object} objTreated 处理好的三端地址及对象
 */
function getOpenObj(url) {
  var webUrlWithoutQuery = url.split('?')[0];
  var queryObj = getQueryParamsFromUrl(url);

  var _queryObj$weixin_appi = queryObj.weixin_appid,
      weixin_appid = _queryObj$weixin_appi === undefined ? '' : _queryObj$weixin_appi,
      _queryObj$weixin_path = queryObj.weixin_path,
      weixin_path = _queryObj$weixin_path === undefined ? '' : _queryObj$weixin_path,
      _queryObj$weixin_envV = queryObj.weixin_envVersion,
      weixin_envVersion = _queryObj$weixin_envV === undefined ? '' : _queryObj$weixin_envV,
      _queryObj$weex_path = queryObj.weex_path,
      weex_path = _queryObj$weex_path === undefined ? '' : _queryObj$weex_path,
      _queryObj$wx_addr = queryObj.wx_addr,
      wx_addr = _queryObj$wx_addr === undefined ? '' : _queryObj$wx_addr,
      extraData = _objectWithoutProperties(queryObj, ['weixin_appid', 'weixin_path', 'weixin_envVersion', 'weex_path', 'wx_addr']);

  var objTreated = {
    weex: wx_addr ? webUrlWithoutQuery + '?weex_path=' + weex_path + queryStringify(extraData) + '&wx_addr=' + wx_addr : null,
    web: webUrlWithoutQuery + '?' + queryStringify(extraData),
    wx: {
      appId: weixin_appid,
      path: weixin_path,
      extraData: extraData,
      envVersion: weixin_envVersion
    }
  };
  return objTreated;
}

// 获得带正确连接符的url
function getUrlWithConnector(url) {
  var connector = url.includes('?') ? '&' : '?';
  return url + connector;
}

// 获取ref的通用对象
function getRefObj(ref, context) {
  var refObj = {
    webDom: '',
    id: '',
    weexRef: '',
    context: context
  };
  // 容错处理
  if (!ref) return refObj;

  // 兼容新版ref, 为字符串
  if (typeof ref == 'string') {
    refObj.id = ref;
    if (false) {
      refObj.weexRef = context.$refs && context.$refs[ref];
    } else if (true) {
      refObj.webDom = context.$refs[ref] && context.$refs[ref].$el || context.$refs[ref];
    }
    return refObj;
  }

  // 向下兼容旧版ref
  if (false) {
    refObj.id = ref.id;
  } else if (false) {
    refObj.weexRef = ref;
  } else if (ref.$el) {
    refObj.webDom = ref.$el;
  } else {
    refObj.webDom = ref;
  }
  return refObj;
}

/**
 * 比较版本号
 * @param {String} v1 版本号1
 * @param {String} symb 比较符
 * @param {String} v2 版本号2
 */
function compareVersion(v1, symb, v2) {
  v1 = parseVersion(v1);
  v2 = parseVersion(v2);
  if (symb.indexOf('=') !== -1 && v1 === v2) {
    return true;
  }
  if (symb.indexOf('>') !== -1 && v1 > v2) {
    return true;
  }
  if (symb.indexOf('<') !== -1 && v1 < v2) {
    return true;
  }
  return false;
}

function parseVersion() {
  var version = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  version = version.split('.');
  version.length = 4;
  var ret = [];
  version.forEach(function (n) {
    n = n * 1;
    if (n) {
      ret.push(n >= 10 ? n : '0' + n);
    } else {
      ret.push('00');
    }
  });
  return parseInt(ret.join(''), 10);
}

/**
 * 判断targetMap中的属性是否被checkMap的属性包含，不是则抛出错误
 * @param {Object || Array} checkMap 
 * @param {Object} targetMap 
 * @returns {Boolean}
 */
var checkValue = exports.checkValue = function checkValue(check, targetMap) {
  if (isObj(check) || isArray(check)) {
    var checkArray = isObj(check) ? Object.keys(check) : check;
    Object.keys(targetMap).forEach(function (key) {
      if (!checkArray.includes(key)) {
        throw Error(key + '\u503C\u4E0D\u5408\u6CD5\uFF0C\u8BF7\u68C0\u67E5\uFF01');
      }
    });
  } else {
    // redLog('请传入数组或对象')
    return false;
  }
  return true;
};

/***/ }),

/***/ "zBSf":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTitle = setTitle;

var _index = __webpack_require__("zYxj");

var moduleName = 'cml';
var methodName = 'setTitle';

function setTitle(param) {
  (0, _index.callNative)(moduleName, methodName, param, function () {});
}

setTitle.prototype.moduleName = moduleName;
setTitle.prototype.methodName = methodName;

/***/ }),

/***/ "zVv0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "c-scroller",
      staticClass: "scroll-container",
      style: _vm.wrapperStyle,
      attrs: { "data-evt-touchstart": "" },
      on: {
        touchstart: function($event) {
          return _vm.touchstartHandler($event)
        }
      }
    },
    [
      _c(
        "div",
        {
          ref: "inner",
          staticClass: "inner-scroll",
          style: _vm.innerStyle,
          attrs: {}
        },
        [_vm._t("default", null, {})],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-053b33c2", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "zYxj":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callNative = callNative;
exports.listenNative = listenNative;

var _index = __webpack_require__("UgjY");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 初始化通道
_index2.default.initChannel();

function callNative(module, method, args, callback) {
  _index2.default.callNative.apply(_index2.default, arguments);
}

function listenNative(module, method, callback) {
  _index2.default.listenNative.apply(_index2.default, arguments);
}

/***/ })

},["RwSr"]);