webpackJsonp([0],{

/***/ "+/tp":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
// ssr support
var inBrowser = exports.inBrowser = typeof window !== 'undefined';
var ua = exports.ua = inBrowser && navigator.userAgent.toLowerCase();
var isWeChatDevTools = exports.isWeChatDevTools = ua && /wechatdevtools/.test(ua);
var isAndroid = exports.isAndroid = ua && ua.indexOf('android') > 0;

/***/ }),

/***/ "+gIU":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _event = __webpack_require__("fpcZ");

var _init = __webpack_require__("Z5Xs");

var _core = __webpack_require__("4bam");

var _pulldown = __webpack_require__("j8uF");

var _pullup = __webpack_require__("Lwr/");

function CScroll(el, options) {
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

(0, _init.initMixin)(CScroll);
(0, _core.coreMixin)(CScroll);
(0, _event.eventMixin)(CScroll);
(0, _pulldown.pullDownMixin)(CScroll);
(0, _pullup.pullUpMixin)(CScroll);

exports.default = CScroll;

/***/ }),

/***/ "/+/s":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cancelAnimationFrame = exports.requestAnimationFrame = undefined;

var _env = __webpack_require__("+/tp");

var DEFAULT_INTERVAL = 100 / 60;

function noop() {}

var requestAnimationFrame = exports.requestAnimationFrame = function () {
  if (!_env.inBrowser) {
    /* istanbul ignore if */
    return noop;
  }
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
  // if all else fails, use setTimeout
  function (callback) {
    return window.setTimeout(callback, (callback.interval || DEFAULT_INTERVAL) / 2); // make interval as precise as possible.
  };
}();

var cancelAnimationFrame = exports.cancelAnimationFrame = function () {
  if (!_env.inBrowser) {
    /* istanbul ignore if */
    return noop;
  }
  return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
    window.clearTimeout(id);
  };
}();

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

/***/ "/b3d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_page_web_cml__ = __webpack_require__("1nLs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_page_web_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_page_web_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_page_web_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_page_web_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_74469485_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_page_web_cml__ = __webpack_require__("VMoN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("31s9")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-74469485"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_page_web_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_74469485_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_page_web_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_74469485_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_page_web_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/chameleon-ui-builtin/components/page/page.web.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74469485", Component.options)
  } else {
    hotAPI.reload("data-v-74469485", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


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

/***/ "1nLs":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("xp5m");

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //
//
//
//
//
//
//


var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CPage = function () {
  function CPage() {
    _classCallCheck(this, CPage);

    this.props = {
      title: {
        required: true,
        type: String,
        default: ''
      }
    };
    this.watch = {
      title: function title(v) {
        this.setTitle(v);
      }
    };
    this.methods = {
      setTitle: function setTitle(v) {
        document.title = v;
        (0, _index2.default)(v);
      }
    };
  }

  _createClass(CPage, [{
    key: 'created',
    value: function created() {
      this.setTitle(this.title);
    }
  }]);

  return CPage;
}();

exports.default = new CPage();


exports.default.components = _extends({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

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

/***/ "3+ZC":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "31s9":
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

/***/ "4QbY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ "4bam":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.coreMixin = coreMixin;

var _dom = __webpack_require__("9Cgj");

var _ease = __webpack_require__("Rwfi");

var _momentum = __webpack_require__("SQbs");

var _raf = __webpack_require__("/+/s");

var _lang = __webpack_require__("FkXn");

var _const = __webpack_require__("B3mp");

var _env = __webpack_require__("+/tp");

var _debug = __webpack_require__("axW8");

function coreMixin(CScroll) {
  CScroll.prototype._start = function (e) {
    var _eventType = _dom.eventType[e.type];
    if (_eventType !== _dom.TOUCH_EVENT) {
      if (e.button !== 0) {
        return;
      }
    }
    if (this.destroyed || this.initiated && this.initiated !== _eventType) {
      return;
    }
    this.initiated = _eventType;

    if (this.options.preventDefault && !(0, _dom.preventDefaultException)(e.target, this.options.preventDefaultException)) {
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
    this.startTime = (0, _lang.getNow)();

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

  CScroll.prototype._move = function (e) {
    if (this.destroyed || _dom.eventType[e.type] !== this.initiated) {
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

    var timestamp = (0, _lang.getNow)();

    // We need to move at least momentumLimitDistance pixels for the scrolling to initiate
    if (timestamp - this.endTime > this.options.momentumLimitTime && absDistY < this.options.momentumLimitDistance && absDistX < this.options.momentumLimitDistance) {
      return;
    }

    // If you are scrolling in one direction lock the other
    if (!this.directionLocked) {
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
    this.movingDirectionX = deltaX > 0 ? _const.DIRECTION_RIGHT : deltaX < 0 ? _const.DIRECTION_LEFT : 0;
    this.movingDirectionY = deltaY > 0 ? _const.DIRECTION_DOWN : deltaY < 0 ? _const.DIRECTION_UP : 0;

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

      if (this.options.probeType === _const.PROBE_DEBOUNCE) {
        this.trigger('scroll', {
          x: this.x,
          y: this.y
        });
      }
    }

    if (this.options.probeType > _const.PROBE_DEBOUNCE) {
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

  CScroll.prototype._end = function (e) {
    if (this.destroyed || _dom.eventType[e.type] !== this.initiated) {
      return;
    }
    this.initiated = false;

    if (this.options.preventDefault && !(0, _dom.preventDefaultException)(e.target, this.options.preventDefaultException)) {
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
    this.directionX = deltaX > 0 ? _const.DIRECTION_RIGHT : deltaX < 0 ? _const.DIRECTION_LEFT : 0;
    this.directionY = deltaY > 0 ? _const.DIRECTION_DOWN : deltaY < 0 ? _const.DIRECTION_UP : 0;

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
    if (this.resetPosition(this.options.bounceTime, _ease.ease.bounce)) {
      return;
    }

    this._translate(newX, newY);

    this.endTime = (0, _lang.getNow)();
    var duration = this.endTime - this.startTime;
    var absDistX = Math.abs(newX - this.startX);
    var absDistY = Math.abs(newY - this.startY);

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
      var wrapperWidth = this.directionX === _const.DIRECTION_RIGHT && left || this.directionX === _const.DIRECTION_LEFT && right ? this.wrapperWidth : 0;
      var wrapperHeight = this.directionY === _const.DIRECTION_DOWN && top || this.directionY === _const.DIRECTION_UP && bottom ? this.wrapperHeight : 0;
      var momentumX = this.hasHorizontalScroll ? (0, _momentum.momentum)(this.x, this.startX, duration, this.maxScrollX, this.minScrollX, wrapperWidth, this.options) : { destination: newX, duration: 0 };
      var momentumY = this.hasVerticalScroll ? (0, _momentum.momentum)(this.y, this.startY, duration, this.maxScrollY, this.minScrollY, wrapperHeight, this.options) : { destination: newY, duration: 0 };
      newX = momentumX.destination;
      newY = momentumY.destination;
      time = Math.max(momentumX.duration, momentumY.duration);
      this.isInTransition = true;
    }

    var easing = _ease.ease.swipe;

    if (newX !== this.x || newY !== this.y) {
      // change easing function when scroller goes out of the boundaries
      if (newX > this.minScrollX || newX < this.maxScrollX || newY > this.minScrollY || newY < this.maxScrollY) {
        easing = _ease.ease.swipeBounce;
      }
      this.scrollTo(newX, newY, time, easing);
      return;
    }

    this.trigger('scrollEnd', {
      x: this.x,
      y: this.y
    });
  };

  CScroll.prototype._checkClick = function (e) {
    // when in the process of pulling down, it should not prevent click
    var preventClick = this.stopFromTransition && !this.pulling;
    this.stopFromTransition = false;

    // we scrolled less than 15 pixels
    if (!this.moved) {
      if (!preventClick) {
        var _dblclick = this.options.dblclick;
        var dblclickTrigged = false;
        if (_dblclick && this.lastClickTime) {
          var _dblclick$delay = _dblclick.delay,
              delay = _dblclick$delay === undefined ? 300 : _dblclick$delay;

          if ((0, _lang.getNow)() - this.lastClickTime < delay) {
            dblclickTrigged = true;
            (0, _dom.dblclick)(e);
          }
        }
        if (this.options.tap) {
          (0, _dom.tap)(e, this.options.tap);
        }

        if (this.options.click && !(0, _dom.preventDefaultException)(e.target, this.options.preventDefaultException)) {
          (0, _dom.click)(e);
        }
        this.lastClickTime = dblclickTrigged ? null : (0, _lang.getNow)();
        return true;
      }
      return false;
    }
    return false;
  };

  CScroll.prototype._resize = function () {
    var _this = this;

    // fix a scroll problem under Android condition
    if (_env.isAndroid) {
      this.wrapper.scrollTop = 0;
    }
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(function () {
      _this.refresh();
    }, this.options.resizePolling);
  };

  CScroll.prototype._startProbe = function () {
    (0, _raf.cancelAnimationFrame)(this.probeTimer);
    this.probeTimer = (0, _raf.requestAnimationFrame)(probe);

    var me = this;

    function probe() {
      var pos = me.getComputedPosition();
      me.trigger('scroll', pos);
      if (!me.isInTransition) {
        me.trigger('scrollEnd', pos);
        return;
      }
      me.probeTimer = (0, _raf.requestAnimationFrame)(probe);
    }
  };

  CScroll.prototype._transitionTime = function () {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    this.scrollerStyle[_dom.style.transitionDuration] = time + 'ms';
  };

  CScroll.prototype._transitionTimingFunction = function (easing) {
    this.scrollerStyle[_dom.style.transitionTimingFunction] = easing;
  };

  CScroll.prototype._transitionEnd = function (e) {
    if (e.target !== this.scroller || !this.isInTransition) {
      return;
    }

    this._transitionTime();
    var needReset = !this.pulling || this.movingDirectionY === _const.DIRECTION_UP;
    if (needReset && !this.resetPosition(this.options.bounceTime, _ease.ease.bounce)) {
      this.isInTransition = false;
      if (this.options.probeType !== _const.PROBE_REALTIME) {
        this.trigger('scrollEnd', {
          x: this.x,
          y: this.y
        });
      }
    }
  };

  CScroll.prototype._translate = function (x, y) {
    (0, _debug.assert)(!(0, _lang.isUndef)(x) && !(0, _lang.isUndef)(y), 'Translate x or y is null or undefined.');

    this.scrollerStyle[_dom.style.transform] = 'translate(' + x + 'px,' + y + 'px) scale(1)' + this.translateZ;

    this.x = x;
    this.y = y;
  };

  CScroll.prototype.scrollTo = function (x, y) {
    var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _ease.ease.bounce;

    this.isInTransition = this.options.useTransition && time > 0 && (x !== this.x || y !== this.y);

    this._transitionTimingFunction(easing.style);
    this._transitionTime(time);
    this._translate(x, y);

    if (time && this.options.probeType === _const.PROBE_REALTIME) {
      this._startProbe();
    }

    if (!time && (x !== this.x || y !== this.y)) {
      this.trigger('scroll', {
        x: x,
        y: y
      });
      // force reflow to put everything in position
      this._reflow = document.body.offsetHeight;
      if (!this.resetPosition(this.options.bounceTime, _ease.ease.bounce)) {
        this.trigger('scrollEnd', {
          x: x,
          y: y
        });
      }
    }
  };

  CScroll.prototype.scrollToElement = function (el, time, offsetX, offsetY, easing) {
    if (!el) {
      return;
    }
    el = el.nodeType ? el : this.scroller.querySelector(el);

    var pos = (0, _dom.offset)(el);
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

    this.scrollTo(pos.left, pos.top, time, easing);
  };

  CScroll.prototype.resetPosition = function () {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var easeing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _ease.ease.bounce;

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

  CScroll.prototype.getComputedPosition = function () {
    var matrix = window.getComputedStyle(this.scroller, null);
    var x = void 0;
    var y = void 0;

    matrix = matrix[_dom.style.transform].split(')')[0].split(', ');
    x = +(matrix[12] || matrix[4]);
    y = +(matrix[13] || matrix[5]);

    return {
      x: x,
      y: y
    };
  };

  CScroll.prototype.stop = function () {
    if (this.isInTransition) {
      this.isInTransition = false;
      (0, _raf.cancelAnimationFrame)(this.probeTimer);
      var pos = this.getComputedPosition();
      this._translate(pos.x, pos.y);
      this.trigger('scrollEnd', {
        x: this.x,
        y: this.y
      });
      this.stopFromTransition = true;
    }
  };

  CScroll.prototype.destroy = function () {
    this.destroyed = true;
    this.trigger('destroy');
    (0, _raf.cancelAnimationFrame)(this.probeTimer);
    this._removeDOMEvents();
    // remove custom events
    this._events = {};
  };
}

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

/***/ "7xFj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

exports.__esModule = true;
exports.unifySlots = unifySlots;
exports.default = void 0;

__webpack_require__("cc63");

var _ = __webpack_require__("VxeN");

var _slots = _interopRequireDefault(__webpack_require__("Uh1x"));

/**
 * Create a basic component with common options
 */
;
var arrayProp = {
  type: Array,
  default: function _default() {
    return [];
  }
};
var numberProp = {
  type: Number,
  default: 0
};

function defaultProps(props) {
  Object.keys(props).forEach(function (key) {
    if (props[key] === Array) {
      props[key] = arrayProp;
    } else if (props[key] === Number) {
      props[key] = numberProp;
    }
  });
}

function install(Vue) {
  var name = this.name;

  if (name) {
    Vue.component(name, this);
    Vue.component((0, _.camelize)("-" + name), this);
  }
} // unify slots & scopedSlots


function unifySlots(context) {
  var scopedSlots = context.scopedSlots || context.data.scopedSlots || {};
  var slots = context.slots();
  Object.keys(slots).forEach(function (key) {
    if (!scopedSlots[key]) {
      scopedSlots[key] = function () {
        return slots[key];
      };
    }
  });
  return scopedSlots;
}

function transformFunctionalComponent(pure) {
  return {
    functional: true,
    props: pure.props,
    model: pure.model,
    render: function render(h, context) {
      return pure(h, context.props, unifySlots(context), context);
    }
  };
}

var _default2 = function _default2(name) {
  return function (sfc) {
    if (typeof sfc === 'function') {
      sfc = transformFunctionalComponent(sfc);
    }

    if (!sfc.functional) {
      sfc.mixins = sfc.mixins || [];
      sfc.mixins.push(_slots.default);
    }

    if (sfc.props) {
      defaultProps(sfc.props);
    }

    sfc.name = name;
    sfc.install = install;
    return sfc;
  };
};

exports.default = _default2;

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

/***/ "9Cgj":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventType = exports.MOUSE_EVENT = exports.TOUCH_EVENT = exports.style = exports.hasTransition = exports.hasTransform = exports.hasTouch = exports.hasPerspective = exports.cssVendor = undefined;
exports.addEvent = addEvent;
exports.removeEvent = removeEvent;
exports.offset = offset;
exports.offsetToBody = offsetToBody;
exports.getRect = getRect;
exports.preventDefaultException = preventDefaultException;
exports.tap = tap;
exports.click = click;
exports.dblclick = dblclick;
exports.prepend = prepend;
exports.before = before;
exports.removeChild = removeChild;

var _env = __webpack_require__("+/tp");

var _lang = __webpack_require__("FkXn");

var elementStyle = _env.inBrowser && document.createElement('div').style;

var vendor = function () {
  if (!_env.inBrowser) {
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

var cssVendor = exports.cssVendor = vendor && vendor !== 'standard' ? '-' + vendor.toLowerCase() + '-' : '';

var transform = prefixStyle('transform');
var transition = prefixStyle('transition');

var hasPerspective = exports.hasPerspective = _env.inBrowser && prefixStyle('perspective') in elementStyle;
// fix issue #361
var hasTouch = exports.hasTouch = _env.inBrowser && ('ontouchstart' in window || _env.isWeChatDevTools);
var hasTransform = exports.hasTransform = transform !== false;
var hasTransition = exports.hasTransition = _env.inBrowser && transition in elementStyle;

var style = exports.style = {
  transform: transform,
  transition: transition,
  transitionTimingFunction: prefixStyle('transitionTimingFunction'),
  transitionDuration: prefixStyle('transitionDuration'),
  transitionDelay: prefixStyle('transitionDelay'),
  transformOrigin: prefixStyle('transformOrigin'),
  transitionEnd: prefixStyle('transitionEnd')
};

var TOUCH_EVENT = exports.TOUCH_EVENT = 1;
var MOUSE_EVENT = exports.MOUSE_EVENT = 2;

var eventType = exports.eventType = {
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
      ev = new MouseEvent(event, (0, _lang.extend)({
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
    (0, _lang.extend)(ev, posSrc);
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

/***/ "AA6R":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var normalMerge=["attrs","props","domProps"],toArrayMerge=["class","style","directives"],functionalMerge=["on","nativeOn"],mergeJsxProps=function(a){return a.reduce(function(c,a){for(var b in a)if(!c[b])c[b]=a[b];else if(-1!==normalMerge.indexOf(b))c[b]=_extends({},c[b],a[b]);else if(-1!==toArrayMerge.indexOf(b)){var d=c[b]instanceof Array?c[b]:[c[b]],e=a[b]instanceof Array?a[b]:[a[b]];c[b]=d.concat(e)}else if(-1!==functionalMerge.indexOf(b)){for(var f in a[b])if(c[b][f]){var g=c[b][f]instanceof Array?c[b][f]:[c[b][f]],h=a[b][f]instanceof Array?a[b][f]:[a[b][f]];c[b][f]=g.concat(h)}else c[b][f]=a[b][f];}else if("hook"==b)for(var i in a[b])c[b][i]=c[b][i]?mergeFn(c[b][i],a[b][i]):a[b][i];else c[b]=a[b];return c},{})},mergeFn=function(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}};module.exports=mergeJsxProps;


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

/***/ "AMN1":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "B3mp":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DIRECTION_UP = exports.DIRECTION_UP = 1;
var DIRECTION_DOWN = exports.DIRECTION_DOWN = -1;
var DIRECTION_LEFT = exports.DIRECTION_LEFT = 1;
var DIRECTION_RIGHT = exports.DIRECTION_RIGHT = -1;

var PROBE_DEBOUNCE = exports.PROBE_DEBOUNCE = 1;
var PROBE_NORMAL = exports.PROBE_NORMAL = 2;
var PROBE_REALTIME = exports.PROBE_REALTIME = 3;

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

/***/ "F4UL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
var ELEMENT = '__';
var MODS = '--';

function join(name, el, symbol) {
  return el ? name + symbol + el : name;
}

function prefix(name, mods) {
  if (typeof mods === 'string') {
    return join(name, mods, MODS);
  }

  if (Array.isArray(mods)) {
    return mods.map(function (item) {
      return prefix(name, item);
    });
  }

  var ret = {};

  if (mods) {
    Object.keys(mods).forEach(function (key) {
      ret[name + MODS + key] = mods[key];
    });
  }

  return ret;
}

var _default = function _default(name) {
  return function (el, mods) {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }

    el = join(name, el, ELEMENT);
    return mods ? [el, prefix(el, mods)] : el;
  };
};

exports.default = _default;

/***/ }),

/***/ "FkXn":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNow = getNow;
exports.extend = extend;
exports.isUndef = isUndef;
exports.getDistance = getDistance;
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

/***/ }),

/***/ "Fl3q":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = src;

/**
 * Is image source
 */
function src(url) {
  return /^(https?:)?\/\/|data:image/.test(url);
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _pageWeb = __webpack_require__("/b3d");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _scrollerWeb = __webpack_require__("nOyz");

var _scrollerWeb2 = _interopRequireDefault(_scrollerWeb);

var _progressWeb = __webpack_require__("wCsG");

var _progressWeb2 = _interopRequireDefault(_progressWeb);

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
//

var Index = function Index() {
        _classCallCheck(this, Index);

        this.data = {};
};

exports.default = new Index();


exports.default.components = _extends({}, exports.default.components, { progress: _progressWeb2.default, cmlBuildinPage: _pageWeb2.default, cmlBuildinScroller: _scrollerWeb2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

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

/***/ "Jq84":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__("AA6R"));

var _utils = __webpack_require__("VxeN");

var _functional = __webpack_require__("qOQ7");

var _use = (0, _utils.use)('loading'),
    sfc = _use[0],
    bem = _use[1];

var DEFAULT_COLOR = '#c9c9c9';

var Loading = function Loading(h, props, slots, ctx) {
  var color = props.color,
      size = props.size,
      type = props.type;
  var colorType = color === 'white' || color === 'black' ? color : '';
  var style = {
    color: color === 'black' ? DEFAULT_COLOR : color,
    width: size,
    height: size
  };
  var Spin = [];

  if (type === 'spinner') {
    for (var i = 0; i < 12; i++) {
      Spin.push(h("i"));
    }
  }

  var Circular = type === 'circular' && h("svg", {
    "class": bem('circular'),
    "attrs": {
      "viewBox": "25 25 50 50"
    }
  }, [h("circle", {
    "attrs": {
      "cx": "50",
      "cy": "50",
      "r": "20",
      "fill": "none"
    }
  })]);
  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem([type, colorType]),
    "style": style
  }, (0, _functional.inherit)(ctx, true)]), [h("span", {
    "class": bem('spinner', type)
  }, [Spin, Circular])]);
};

Loading.props = {
  size: String,
  type: {
    type: String,
    default: 'circular'
  },
  color: {
    type: String,
    default: DEFAULT_COLOR
  }
};

var _default = sfc(Loading);

exports.default = _default;

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

/***/ "K73O":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

exports.__esModule = true;
exports.default = void 0;

var _utils = __webpack_require__("VxeN");

var _icon = _interopRequireDefault(__webpack_require__("WQwN"));

var _use = (0, _utils.use)('notice-bar'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  props: {
    text: String,
    mode: String,
    color: String,
    leftIcon: String,
    background: String,
    delay: {
      type: [String, Number],
      default: 1
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 50
    }
  },
  data: function data() {
    return {
      wrapWidth: 0,
      firstRound: true,
      duration: 0,
      offsetWidth: 0,
      showNoticeBar: true,
      animationClass: ''
    };
  },
  watch: {
    text: {
      handler: function handler() {
        var _this = this;

        this.$nextTick(function () {
          var _this$$refs = _this.$refs,
              wrap = _this$$refs.wrap,
              content = _this$$refs.content;

          if (!wrap || !content) {
            return;
          }

          var wrapWidth = wrap.getBoundingClientRect().width;
          var offsetWidth = content.getBoundingClientRect().width;

          if (_this.scrollable && offsetWidth > wrapWidth) {
            _this.wrapWidth = wrapWidth;
            _this.offsetWidth = offsetWidth;
            _this.duration = offsetWidth / _this.speed;
            _this.animationClass = bem('play');
          }
        });
      },
      immediate: true
    }
  },
  methods: {
    onClickIcon: function onClickIcon() {
      if (this.mode === 'closeable') {
        this.showNoticeBar = false;
        this.$emit('close');
      }
    },
    onAnimationEnd: function onAnimationEnd() {
      var _this2 = this;

      this.firstRound = false;
      this.$nextTick(function () {
        _this2.duration = (_this2.offsetWidth + _this2.wrapWidth) / _this2.speed;
        _this2.animationClass = bem('play--infinite');
      });
    }
  },
  render: function render(h) {
    var _this3 = this;

    var mode = this.mode;
    var iconName = mode === 'closeable' ? 'cross' : mode === 'link' ? 'arrow' : '';
    var barStyle = {
      color: this.color,
      background: this.background
    };
    var contentStyle = {
      paddingLeft: this.firstRound ? 0 : this.wrapWidth + 'px',
      animationDelay: (this.firstRound ? this.delay : 0) + 's',
      animationDuration: this.duration + 's'
    };
    return h("div", {
      "directives": [{
        name: "show",
        value: this.showNoticeBar
      }],
      "class": bem({
        withicon: mode
      }),
      "style": barStyle,
      "on": {
        "click": function click() {
          _this3.$emit('click');
        }
      }
    }, [this.leftIcon && h(_icon.default, {
      "class": bem('left-icon'),
      "attrs": {
        "name": this.leftIcon
      }
    }), h("div", {
      "ref": "wrap",
      "class": bem('wrap')
    }, [h("div", {
      "ref": "content",
      "class": [bem('content'), this.animationClass, {
        'van-ellipsis': !this.scrollable
      }],
      "style": contentStyle,
      "on": {
        "animationend": this.onAnimationEnd,
        "webkitAnimationEnd": this.onAnimationEnd
      }
    }, [this.slots() || this.text])]), iconName && h(_icon.default, {
      "class": bem('right-icon'),
      "attrs": {
        "name": iconName
      },
      "on": {
        "click": this.onClickIcon
      }
    })]);
  }
});

exports.default = _default;

/***/ }),

/***/ "KWhw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

exports.__esModule = true;
exports.default = void 0;

var _utils = __webpack_require__("VxeN");

var _info = _interopRequireDefault(__webpack_require__("XpDp"));

var _use = (0, _utils.use)('badge'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  props: {
    url: String,
    info: [String, Number],
    title: String
  },
  inject: ['vanBadgeGroup'],
  created: function created() {
    this.parent.badges.push(this);
  },
  beforeDestroy: function beforeDestroy() {
    var _this = this;

    this.parent.badges = this.parent.badges.filter(function (item) {
      return item !== _this;
    });
  },
  computed: {
    parent: function parent() {
      if (false) {
        console.error('[Vant] Badge needs to be child of BadgeGroup');
      }

      return this.vanBadgeGroup;
    },
    select: function select() {
      return this.parent.badges.indexOf(this) === +this.parent.activeKey;
    }
  },
  methods: {
    onClick: function onClick() {
      var index = this.parent.badges.indexOf(this);
      this.$emit('click', index);
      this.parent.$emit('change', index);
    }
  },
  render: function render(h) {
    return h("a", {
      "attrs": {
        "href": this.url
      },
      "class": [bem({
        select: this.select
      }), 'van-hairline'],
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": bem('text')
    }, [this.title, h(_info.default, {
      "attrs": {
        "info": this.info
      },
      "class": bem('info')
    })])]);
  }
});

exports.default = _default;

/***/ }),

/***/ "KzJ3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  name: '姓名',
  tel: '电话',
  save: '保存',
  confirm: '确认',
  cancel: '取消',
  delete: '删除',
  complete: '完成',
  loading: '加载中...',
  telEmpty: '请填写电话',
  nameEmpty: '请填写姓名',
  confirmDelete: '确定要删除么',
  telInvalid: '请填写正确的电话',
  vanContactCard: {
    addText: '添加联系人'
  },
  vanContactList: {
    addText: '新建联系人'
  },
  vanPagination: {
    prev: '上一页',
    next: '下一页'
  },
  vanPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '释放即可刷新...'
  },
  vanSubmitBar: {
    label: '合计：'
  },
  vanCoupon: {
    valid: '有效期',
    unlimited: '无使用门槛',
    discount: function discount(_discount) {
      return _discount + "\u6298";
    },
    condition: function condition(_condition) {
      return "\u6EE1" + _condition + "\u5143\u53EF\u7528";
    }
  },
  vanCouponCell: {
    title: '优惠券',
    tips: '使用优惠',
    count: function count(_count) {
      return _count + "\u5F20\u53EF\u7528";
    }
  },
  vanCouponList: {
    empty: '暂无优惠券',
    exchange: '兑换',
    close: '不使用优惠',
    enable: '可使用优惠券',
    disabled: '不可使用优惠券',
    placeholder: '请输入优惠码'
  },
  vanAddressEdit: {
    area: '地区',
    postal: '邮政编码',
    areaEmpty: '请选择地区',
    addressEmpty: '请填写详细地址',
    postalEmpty: '邮政编码格式不正确',
    defaultAddress: '设为默认收货地址',
    telPlaceholder: '收货人手机号',
    namePlaceholder: '收货人姓名',
    areaPlaceholder: '选择省 / 市 / 区'
  },
  vanAddressEditDetail: {
    label: '详细地址',
    placeholder: '街道门牌、楼层房间号等信息'
  },
  vanAddressList: {
    add: '新增地址'
  }
};
exports.default = _default;

/***/ }),

/***/ "Lwr/":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pullUpMixin = pullUpMixin;

var _const = __webpack_require__("B3mp");

function pullUpMixin(CScroll) {
  CScroll.prototype._initPullUp = function () {
    // must watch scroll in real time
    this.options.probeType = _const.PROBE_REALTIME;

    this.pullupWatching = false;
    this._watchPullUp();
  };

  CScroll.prototype._watchPullUp = function () {
    if (this.pullupWatching) {
      return;
    }
    this.pullupWatching = true;
    this.on('scroll', this._checkToEnd);
  };

  CScroll.prototype._checkToEnd = function (pos) {
    var _this = this;

    var _options$pullUpLoad$t = this.options.pullUpLoad.threshold,
        threshold = _options$pullUpLoad$t === undefined ? 0 : _options$pullUpLoad$t;

    if (this.movingDirectionY === _const.DIRECTION_UP && pos.y <= this.maxScrollY + threshold) {
      // reset pullupWatching status after scroll end.
      this.once('scrollEnd', function () {
        _this.pullupWatching = false;
      });
      this.trigger('pullingUp');
      this.off('scroll', this._checkToEnd);
    }
  };

  CScroll.prototype.finishPullUp = function () {
    var _this2 = this;

    if (this.pullupWatching) {
      this.once('scrollEnd', function () {
        _this2._watchPullUp();
      });
    } else {
      this._watchPullUp();
    }
  };

  CScroll.prototype.openPullUp = function () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    this.options.pullUpLoad = config;
    this._initPullUp();
  };

  CScroll.prototype.closePullUp = function () {
    this.options.pullUpLoad = false;
    if (!this.pullupWatching) {
      return;
    }
    this.pullupWatching = false;
    this.off('scroll', this._checkToEnd);
  };
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_scrollable_vue__ = __webpack_require__("nQTj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_scrollable_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_scrollable_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_scrollable_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_scrollable_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_053b33c2_hasScoped_true_optionsId_1_buble_transforms_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_scrollable_vue__ = __webpack_require__("zVv0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("AMN1")
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

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_scrollable_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_053b33c2_hasScoped_true_optionsId_1_buble_transforms_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_scrollable_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_053b33c2_hasScoped_true_optionsId_1_buble_transforms_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_scrollable_vue__["b" /* staticRenderFns */],
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

/***/ "OZSe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _utils = __webpack_require__("VxeN");

var _use = (0, _utils.use)('badge-group'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  props: {
    activeKey: {
      type: [Number, String],
      default: 0
    }
  },
  provide: function provide() {
    return {
      vanBadgeGroup: this
    };
  },
  data: function data() {
    return {
      badges: []
    };
  },
  render: function render(h) {
    return h("div", {
      "class": [bem(), 'van-hairline--top-bottom']
    }, [this.slots()]);
  }
});

exports.default = _default;

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

/***/ "PF9E":
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

var _button = __webpack_require__("w+oK");

var _button2 = _interopRequireDefault(_button);

var _noticeBar = __webpack_require__("K73O");

var _noticeBar2 = _interopRequireDefault(_noticeBar);

var _slider = __webpack_require__("Rl/V");

var _slider2 = _interopRequireDefault(_slider);

var _badge = __webpack_require__("KWhw");

var _badge2 = _interopRequireDefault(_badge);

var _badgeGroup = __webpack_require__("OZSe");

var _badgeGroup2 = _interopRequireDefault(_badgeGroup);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Progress = function () {
  function Progress() {
    _classCallCheck(this, Progress);

    this.props = {
      name: {
        type: String,
        default: '默认值'
      }
    };
    this.data = {
      val: 50,
      activeKey: 0
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      buttonclick: function buttonclick() {
        console.log(111);
      },
      handleClick: function handleClick() {
        console.log('sss');
      },
      onChange: function onChange() {
        console.log('slider change');
      },
      changeActiveKey: function changeActiveKey(key) {
        console.log(111);
        this.activeKey = key;
      }
    };
  }

  _createClass(Progress, [{
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

  return Progress;
}();

exports.default = new Progress();


exports.default.components = _extends({}, exports.default.components, { vanButton: _button2.default, vanNoticeBar: _noticeBar2.default, vanSlider: _slider2.default, vanBadge: _badge2.default, vanBadgeGroup: _badgeGroup2.default });


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

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

/***/ "R6lU":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Rl/V":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

exports.__esModule = true;
exports.default = void 0;

var _utils = __webpack_require__("VxeN");

var _touch = _interopRequireDefault(__webpack_require__("pNwR"));

var _use = (0, _utils.use)('slider'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  mixins: [_touch.default],
  props: {
    min: Number,
    value: Number,
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    barHeight: {
      type: String,
      default: '2px'
    }
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      if (this.disabled) return;
      this.touchStart(event);
      this.startValue = this.format(this.value);
    },
    onTouchMove: function onTouchMove(event) {
      event.preventDefault();
      event.stopPropagation();
      if (this.disabled) return;
      this.touchMove(event);
      var rect = this.$el.getBoundingClientRect();
      var diff = this.deltaX / rect.width * 100;
      this.updateValue(this.startValue + diff);
    },
    onTouchEnd: function onTouchEnd() {
      if (this.disabled) return;
      this.updateValue(this.value, true);
    },
    onClick: function onClick(event) {
      event.stopPropagation();
      if (this.disabled) return;
      var rect = this.$el.getBoundingClientRect();
      var value = (event.clientX - rect.left) / rect.width * 100;
      this.updateValue(value, true);
    },
    updateValue: function updateValue(value, end) {
      value = this.format(value);
      this.$emit('input', value);

      if (end) {
        this.$emit('change', value);
      }
    },
    format: function format(value) {
      return Math.round(Math.max(this.min, Math.min(value, this.max)) / this.step) * this.step;
    }
  },
  render: function render(h) {
    var style = {
      background: this.inactiveColor
    };
    var barStyle = {
      width: this.format(this.value) + "%",
      height: this.barHeight,
      background: this.activeColor
    };
    return h("div", {
      "style": style,
      "class": bem({
        disabled: this.disabled
      }),
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": bem('bar'),
      "style": barStyle
    }, [h("div", {
      "class": bem('button-wrapper'),
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [this.slots('button') || h("div", {
      "class": bem('button')
    })])])]);
  }
});

exports.default = _default;

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

/***/ "Rwfi":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ease = exports.ease = {
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

/***/ }),

/***/ "SQbs":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.momentum = momentum;
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

/***/ }),

/***/ "Sryf":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ "Uh1x":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * Use scopedSlots in Vue 2.6+
 * downgrade to slots in lower version
 */
var _default = {
  methods: {
    slots: function slots(name, props) {
      if (name === void 0) {
        name = 'default';
      }

      var $slots = this.$slots,
          $scopedSlots = this.$scopedSlots;

      if ($scopedSlots[name]) {
        return $scopedSlots[name](props);
      }

      return $slots[name];
    }
  }
};
exports.default = _default;

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

/***/ "VMoN":
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
    { staticClass: "page  cml-base cml-view", attrs: {} },
    [_vm._t("default", null, {})],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-74469485", { render: render, staticRenderFns: staticRenderFns })
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

/***/ "VxeN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

exports.__esModule = true;
exports.noop = noop;
exports.isDef = isDef;
exports.isObj = isObj;
exports.get = get;
exports.camelize = camelize;
exports.isAndroid = isAndroid;
exports.isIOS = isIOS;
exports.range = range;
exports.isServer = exports.use = void 0;

var _vue = _interopRequireDefault(__webpack_require__("w2Ub"));

var _use = __webpack_require__("hriK");

exports.use = _use.use;
var isServer = _vue.default.prototype.$isServer;
exports.isServer = isServer;

function noop() {}

function isDef(value) {
  return value !== undefined && value !== null;
}

function isObj(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function get(object, path) {
  var keys = path.split('.');
  var result = object;
  keys.forEach(function (key) {
    result = isDef(result[key]) ? result[key] : '';
  });
  return result;
}

var camelizeRE = /-(\w)/g;

function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c.toUpperCase();
  });
}

function isAndroid() {
  /* istanbul ignore next */
  return isServer ? false : /android/.test(navigator.userAgent.toLowerCase());
}

function isIOS() {
  /* istanbul ignore next */
  return isServer ? false : /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
}

function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

/***/ }),

/***/ "WQwN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__("AA6R"));

var _utils = __webpack_require__("VxeN");

var _functional = __webpack_require__("qOQ7");

var _info = _interopRequireDefault(__webpack_require__("XpDp"));

var _src = _interopRequireDefault(__webpack_require__("Fl3q"));

var _use = (0, _utils.use)('icon'),
    sfc = _use[0];

var Icon = function Icon(h, props, slots, ctx) {
  var urlIcon = (0, _src.default)(props.name);
  return h("i", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": [props.classPrefix, urlIcon ? 'van-icon--image' : props.classPrefix + "-" + props.name],
    "style": {
      color: props.color,
      fontSize: props.size
    }
  }, (0, _functional.inherit)(ctx, true)]), [slots.default && slots.default(), urlIcon && h("img", {
    "attrs": {
      "src": props.name
    }
  }), h(_info.default, {
    "attrs": {
      "info": props.info
    }
  })]);
};

Icon.props = {
  name: String,
  size: String,
  color: String,
  info: [String, Number],
  classPrefix: {
    type: String,
    default: 'van-icon'
  }
};

var _default = sfc(Icon);

exports.default = _default;

/***/ }),

/***/ "WShj":
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
    { staticClass: "test-container  cml-base cml-view", attrs: {} },
    [
      _c(
        "div",
        {
          staticClass: " cml-base cml-div",
          attrs: { "data-evt-click": "" },
          on: {
            click: _vm.$stopOuterA,
            cml$tap: function($event) {
              $event.stopPropagation()
              _vm._cmlEventProxy($event, "handleClick")
            }
          }
        },
        [_vm._v("sss")]
      ),
      _vm._v(" "),
      _c(
        "van-button",
        {
          staticClass: " cml-base cml-van-button",
          attrs: { type: "danger", size: "large", "data-evt-click": "" },
          on: {
            click: _vm.$stopOuterA,
            cml$tap: function($event) {
              $event.stopPropagation()
              return _vm.buttonclick($event)
            }
          }
        },
        [_vm._v("\n  按钮\n")]
      ),
      _vm._v(" "),
      _c(
        "van-notice-bar",
        {
          staticClass: " cml-base cml-van-notice-bar",
          attrs: { mode: "link" }
        },
        [
          _vm._v(
            "\n  足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。\n"
          )
        ]
      ),
      _vm._v(" "),
      _c("van-slider", {
        staticClass: " cml-base cml-van-slider",
        attrs: { "data-evt-change": "" },
        on: {
          change: function($event) {
            $event.stopPropagation()
            return _vm.onChange($event)
          }
        },
        model: {
          value: _vm.val,
          callback: function($$v) {
            _vm.val = $$v
          },
          expression: "val"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "test-badge-wrapper  cml-base cml-view", attrs: {} },
        [
          _c(
            "van-badge-group",
            {
              staticClass: " cml-base cml-van-badge-group",
              attrs: { "active-key": _vm.activeKey, "data-evt-change": "" },
              on: {
                change: function($event) {
                  $event.stopPropagation()
                  return _vm.changeActiveKey($event)
                }
              }
            },
            [
              _c("van-badge", {
                staticClass: " cml-base cml-van-badge",
                attrs: { title: "标签名称" }
              }),
              _vm._v(" "),
              _c("van-badge", {
                staticClass: " cml-base cml-van-badge",
                attrs: { title: "标签名称", info: "8" }
              }),
              _vm._v(" "),
              _c("van-badge", {
                staticClass: " cml-base cml-van-badge",
                attrs: { title: "标签名称", info: "99" }
              }),
              _vm._v(" "),
              _c("van-badge", {
                staticClass: " cml-base cml-van-badge",
                attrs: { title: "标签名称", info: "99+" }
              })
            ],
            1
          )
        ],
        1
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
    require("vue-hot-reload-api")      .rerender("data-v-6677ca11", { render: render, staticRenderFns: staticRenderFns })
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

/***/ "XpDp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__("AA6R"));

var _utils = __webpack_require__("VxeN");

var _functional = __webpack_require__("qOQ7");

var _use = (0, _utils.use)('info'),
    sfc = _use[0],
    bem = _use[1];

var Info = function Info(h, props, slots, ctx) {
  if (!(0, _utils.isDef)(props.info)) {
    return;
  }

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem()
  }, (0, _functional.inherit)(ctx, true)]), [props.info]);
};

Info.props = {
  info: [String, Number]
};

var _default = sfc(Info);

exports.default = _default;

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

/***/ "Z5Xs":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initMixin = initMixin;

var _dom = __webpack_require__("9Cgj");

var _lang = __webpack_require__("FkXn");

var DEFAULT_OPTIONS = {
  startX: 0,
  startY: 0,
  scrollX: false,
  scrollY: true,
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
  useTransition: true,
  useTransform: true,
  bindToWrapper: false,
  disableMouse: _dom.hasTouch,
  disableTouch: !_dom.hasTouch,
  observeDOM: true,
  autoBlur: true,
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
  stopPropagation: false,
  /**
   * for double click
   * dblclick: {
   *   delay: 300
   * }
   */
  dblclick: false
};

function initMixin(CScroll) {
  CScroll.prototype._init = function (el, options) {
    this._handleOptions(options);

    // init private custom events
    this._events = {};

    this.x = 0;
    this.y = 0;
    this.directionX = 0;
    this.directionY = 0;

    this._addDOMEvents();
    this._initExtFeatures();
    this._watchTransition();
    this._initDOMObserver();
    this._handleAutoBlur();
    this.refresh();

    this.scrollTo(this.options.startX, this.options.startY);
  };

  CScroll.prototype._handleOptions = function (options) {
    this.options = (0, _lang.extend)({}, DEFAULT_OPTIONS, options);

    this.translateZ = _dom.hasPerspective ? ' translateZ(0)' : '';

    this.options.useTransition = this.options.useTransition && _dom.hasTransition;
    this.options.useTransform = this.options.useTransform && _dom.hasTransform;

    this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

    // If you want eventPassthrough I have to lock one of the axes
    this.options.scrollX = this.options.eventPassthrough === 'horizontal' ? false : this.options.scrollX;
    this.options.scrollY = this.options.eventPassthrough === 'vertical' ? false : this.options.scrollY;

    // With eventPassthrough we also need lockDirection mechanism
    this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

    if (this.options.tap === true) {
      this.options.tap = 'tap';
    }
  };

  CScroll.prototype._addDOMEvents = function () {
    var eventOperation = _dom.addEvent;
    this._handleDOMEvents(eventOperation);
  };

  CScroll.prototype._removeDOMEvents = function () {
    var eventOperation = _dom.removeEvent;
    this._handleDOMEvents(eventOperation);
  };

  CScroll.prototype._handleDOMEvents = function (eventOperation) {
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

    if (_dom.hasTouch && !this.options.disableTouch) {
      eventOperation(this.wrapper, 'touchstart', this);
      eventOperation(target, 'touchmove', this);
      eventOperation(target, 'touchcancel', this);
      eventOperation(target, 'touchend', this);
    }

    eventOperation(this.scroller, _dom.style.transitionEnd, this);
  };

  CScroll.prototype._initExtFeatures = function () {
    if (this.options.pullUpLoad) {
      this._initPullUp();
    }
    if (this.options.pullDownRefresh) {
      this._initPullDown();
    }
  };

  CScroll.prototype._watchTransition = function () {
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

  CScroll.prototype._handleAutoBlur = function () {
    this.on('scrollStart', function () {
      var activeElement = document.activeElement;
      if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
        activeElement.blur();
      }
    });
  };

  CScroll.prototype._initDOMObserver = function () {
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

  CScroll.prototype._shouldNotRefresh = function () {
    var outsideBoundaries = this.x > this.minScrollX || this.x < this.maxScrollX || this.y > this.minScrollY || this.y < this.maxScrollY;
    return this.isInTransition || this.stopFromTransition || outsideBoundaries;
  };

  CScroll.prototype._checkDOMUpdate = function () {
    var scrollerRect = (0, _dom.getRect)(this.scroller);
    var oldWidth = scrollerRect.width;
    var oldHeight = scrollerRect.height;

    function check() {
      if (this.destroyed) {
        return;
      }
      scrollerRect = (0, _dom.getRect)(this.scroller);
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

  CScroll.prototype.handleEvent = function (e) {
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
        if (!e._constructed) {
          if (!(0, _dom.preventDefaultException)(e.target, this.options.preventDefaultException)) {
            e.preventDefault();
            e.stopPropagation();
          }
        }
        break;
      case 'DOMMouseScroll':
      case 'mousewheel':
        this._onMouseWheel(e);
        break;
    }
  };

  CScroll.prototype.refresh = function () {
    var isWrapperStatic = window.getComputedStyle(this.wrapper, null).position === 'static';
    var wrapperRect = (0, _dom.getRect)(this.wrapper);
    this.wrapperWidth = wrapperRect.width;
    this.wrapperHeight = wrapperRect.height;

    var scrollerRect = (0, _dom.getRect)(this.scroller);
    this.scrollerWidth = Math.round(scrollerRect.width);
    this.scrollerHeight = Math.round(scrollerRect.height);

    this.relativeX = scrollerRect.left;
    this.relativeY = scrollerRect.top;

    if (isWrapperStatic) {
      this.relativeX -= wrapperRect.left;
      this.relativeY -= wrapperRect.top;
    }

    this.minScrollX = 0;
    this.minScrollY = 0;

    this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
    this.maxScrollY = this.wrapperHeight - this.scrollerHeight;

    if (this.maxScrollX < 0) {
      this.maxScrollX -= this.relativeX;
      this.minScrollX = -this.relativeX;
    }
    if (this.maxScrollY < 0) {
      this.maxScrollY -= this.relativeY;
      this.minScrollY = -this.relativeY;
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
    this.wrapperOffset = (0, _dom.offset)(this.wrapper);

    this.trigger('refresh');

    this.resetPosition();
  };
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

/***/ "amoi":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = Object.entries(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _ref = _step.value;

        var _ref2 = _slicedToArray(_ref, 2);

        var k = _ref2[0];
        var v = _ref2[1];

        var value = v !== undefined ? v : '';
        url += '&' + k + '=' + (isEncode ? encodeURIComponent(value) : value);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
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

/***/ "axW8":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warn = warn;
exports.assert = assert;
function warn(msg) {
  console.error('[Scroll warn]: ' + msg);
}

function assert(condition, msg) {
  if (!condition) {
    throw new Error('[Scroll] ' + msg);
  }
}

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

/***/ "bhS9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = assign;

var _ = __webpack_require__("VxeN");

/* eslint-disable no-use-before-define */
var hasOwnProperty = Object.prototype.hasOwnProperty;

function assignKey(to, from, key) {
  var val = from[key];

  if (!(0, _.isDef)(val) || hasOwnProperty.call(to, key) && !(0, _.isDef)(to[key])) {
    return;
  }

  if (!hasOwnProperty.call(to, key) || !(0, _.isObj)(val)) {
    to[key] = val;
  } else {
    to[key] = assign(Object(to[key]), from[key]);
  }
}

function assign(to, from) {
  Object.keys(from).forEach(function (key) {
    assignKey(to, from, key);
  });
  return to;
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

/***/ "cc63":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

exports.__esModule = true;
exports.default = void 0;

var _vue = _interopRequireDefault(__webpack_require__("w2Ub"));

var _deepAssign = _interopRequireDefault(__webpack_require__("bhS9"));

var _zhCN = _interopRequireDefault(__webpack_require__("KzJ3"));

var proto = _vue.default.prototype;
var defineReactive = _vue.default.util.defineReactive;
defineReactive(proto, '$vantLang', 'zh-CN');
defineReactive(proto, '$vantMessages', {
  'zh-CN': _zhCN.default
});
var _default = {
  messages: function messages() {
    return proto.$vantMessages[proto.$vantLang];
  },
  use: function use(lang, messages) {
    var _this$add;

    proto.$vantLang = lang;
    this.add((_this$add = {}, _this$add[lang] = messages, _this$add));
  },
  add: function add(messages) {
    if (messages === void 0) {
      messages = {};
    }

    (0, _deepAssign.default)(proto.$vantMessages, messages);
  }
};
exports.default = _default;

/***/ }),

/***/ "cpVn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

exports.__esModule = true;
exports.default = void 0;

var _ = __webpack_require__("VxeN");

var _locale = _interopRequireDefault(__webpack_require__("cc63"));

var _default = function _default(name) {
  var prefix = (0, _.camelize)(name) + '.';
  return function (path) {
    var message = (0, _.get)(_locale.default.messages(), prefix + path) || (0, _.get)(_locale.default.messages(), path);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return typeof message === 'function' ? message.apply(void 0, args) : message;
  };
};

exports.default = _default;

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

/***/ "fpcZ":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.eventMixin = eventMixin;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function eventMixin(CScroll) {
  CScroll.prototype.on = function (type, fn) {
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

    if (!this._events[type]) {
      this._events[type] = [];
    }

    this._events[type].push([fn, context]);
  };

  CScroll.prototype.once = function (type, fn) {
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

    function magic() {
      this.off(type, magic);

      fn.apply(context, arguments);
    }
    // To expose the corresponding function method in order to execute the off method
    magic.fn = fn;

    this.on(type, magic);
  };

  CScroll.prototype.off = function (type, fn) {
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

  CScroll.prototype.trigger = function (type) {
    var events = this._events[type];
    if (!events) {
      return;
    }

    var len = events.length;
    var eventsCopy = [].concat(_toConsumableArray(events));
    for (var i = 0; i < len; i++) {
      var event = eventsCopy[i];

      var _event = _slicedToArray(event, 2),
          fn = _event[0],
          context = _event[1];

      if (fn) {
        fn.apply(context, [].slice.call(arguments, 1));
      }
    }
  };
}

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
    "cml-buildin-page",
    { staticClass: " cml-base cml-page", attrs: { title: "chameleon" } },
    [
      _c(
        "cml-buildin-scroller",
        { staticClass: " cml-base cml-scroller", attrs: { height: -1 } },
        [
          _c(
            "div",
            { staticClass: "scroller-wrap  cml-base cml-view", attrs: {} },
            [
              _c("progress", {
                staticClass: " cml-base cml-progress",
                attrs: {}
              })
            ]
          )
        ]
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

/***/ "hriK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

exports.__esModule = true;
exports.use = use;

var _bem = _interopRequireDefault(__webpack_require__("F4UL"));

var _sfc = _interopRequireDefault(__webpack_require__("7xFj"));

var _i18n = _interopRequireDefault(__webpack_require__("cpVn"));

function use(name) {
  name = 'van-' + name;
  return [(0, _sfc.default)(name), (0, _bem.default)(name), (0, _i18n.default)(name)];
}

/***/ }),

/***/ "i0PX":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cmlBridge = __webpack_require__("8D69");

var _cmlBridge2 = _interopRequireDefault(_cmlBridge);

var _env = __webpack_require__("8d/N");

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'setTitle',
    value: function setTitle(title) {
      if ((0, _env.inSDK)()) {
        _cmlBridge2.default.setTitle({
          title: title
        });
      } else {
        document.title = title;
      }
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

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

/***/ "j8uF":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pullDownMixin = pullDownMixin;

var _ease = __webpack_require__("Rwfi");

var _const = __webpack_require__("B3mp");

function pullDownMixin(CScroll) {
  CScroll.prototype._initPullDown = function () {
    // must watch scroll in real time
    this.options.probeType = _const.PROBE_REALTIME;
  };

  CScroll.prototype._checkPullDown = function () {
    var _options$pullDownRefr = this.options.pullDownRefresh,
        _options$pullDownRefr2 = _options$pullDownRefr.threshold,
        threshold = _options$pullDownRefr2 === undefined ? 90 : _options$pullDownRefr2,
        _options$pullDownRefr3 = _options$pullDownRefr.stop,
        stop = _options$pullDownRefr3 === undefined ? 40 : _options$pullDownRefr3;

    // check if a real pull down action

    if (this.directionY !== _const.DIRECTION_DOWN || this.y < threshold) {
      return false;
    }

    if (!this.pulling) {
      this.pulling = true;
      this.trigger('pullingDown');
    }
    this.scrollTo(this.x, stop, this.options.bounceTime, _ease.ease.bounce);

    return this.pulling;
  };

  CScroll.prototype.finishPullDown = function () {
    this.pulling = false;
    this.resetPosition(this.options.bounceTime, _ease.ease.bounce);
  };

  CScroll.prototype.openPullDown = function () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    this.options.pullDownRefresh = config;
    this._initPullDown();
  };

  CScroll.prototype.closePullDown = function () {
    this.options.pullDownRefresh = false;
  };
}

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

/***/ "lt8z":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "lwq5":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var state = {};

exports.default = state;

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

/***/ "nOyz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_scroller_web_cml__ = __webpack_require__("gAYa");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_scroller_web_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_scroller_web_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_scroller_web_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_scroller_web_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_ba8aae36_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_scroller_web_cml__ = __webpack_require__("Q/N/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("xb8I")
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

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_scroller_web_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_ba8aae36_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_scroller_web_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_ba8aae36_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_scroller_web_cml__["b" /* staticRenderFns */],
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

var _chameleonScroll = __webpack_require__("+gIU");

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

module.exports = {"mode":"history","domain":"https://www.chameleon.com","routes":[{"url":"/cml/h5/index","path":"/pages/index/index","name":"首页","mock":"index.php"}]}

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

/***/ "pNwR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var MIN_DISTANCE = 10;

function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }

  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }

  return '';
}

var _default = {
  data: function data() {
    return {
      direction: ''
    };
  },
  methods: {
    touchStart: function touchStart(event) {
      this.resetTouchStatus();
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },
    touchMove: function touchMove(event) {
      var touch = event.touches[0];
      this.deltaX = touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.direction || getDirection(this.offsetX, this.offsetY);
    },
    resetTouchStatus: function resetTouchStatus() {
      this.direction = '';
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "qOQ7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

exports.__esModule = true;
exports.inherit = inherit;
exports.emit = emit;

var _extends2 = _interopRequireDefault(__webpack_require__("lt8z"));

var inheritKey = ['style', 'class', 'attrs', 'nativeOn', 'directives', 'staticClass', 'staticStyle'];
var mapInheritKey = {
  nativeOn: 'on'
}; // inherit partial context, map nativeOn to on

function inherit(context, inheritListeners) {
  var result = inheritKey.reduce(function (obj, key) {
    if (context.data[key]) {
      obj[mapInheritKey[key] || key] = context.data[key];
    }

    return obj;
  }, {});

  if (inheritListeners) {
    result.on = result.on || {};
    (0, _extends2.default)(result.on, context.data.on);
  }

  return result;
} // emit event


function emit(context, eventName) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var listeners = context.listeners[eventName];

  if (listeners) {
    if (Array.isArray(listeners)) {
      listeners.forEach(function (listener) {
        listener.apply(void 0, args);
      });
    } else {
      listeners.apply(void 0, args);
    }
  }
}

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

/***/ "rGpm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.route = route;
exports.functionalRoute = functionalRoute;
exports.routeProps = void 0;

/**
 * Vue Router support
 */
function route(router, config) {
  var to = config.to,
      url = config.url,
      replace = config.replace;

  if (to && router) {
    router[replace ? 'replace' : 'push'](to);
  } else if (url) {
    replace ? location.replace(url) : location.href = url;
  }
}

function functionalRoute(context) {
  route(context.parent && context.parent.$router, context.props);
}

var routeProps = {
  url: String,
  replace: Boolean,
  to: [String, Object]
};
exports.routeProps = routeProps;

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
      mode: "history",
      routes: [
      {
        path: "/cml/h5/index",
        name: "首页",
        component: __webpack_require__("w8mr").default
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_app_cml__ = __webpack_require__("v4CN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_app_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_app_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_app_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_app_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d879fa6_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_app_cml__ = __webpack_require__("lrTe");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("4QbY")
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

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_app_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d879fa6_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_app_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d879fa6_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_app_cml__["b" /* staticRenderFns */],
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

/***/ "w+oK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("lt8z"));

var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__("AA6R"));

var _utils = __webpack_require__("VxeN");

var _functional = __webpack_require__("qOQ7");

var _router = __webpack_require__("rGpm");

var _loading = _interopRequireDefault(__webpack_require__("Jq84"));

var _use = (0, _utils.use)('button'),
    sfc = _use[0],
    bem = _use[1];

var Button = function Button(h, props, slots, ctx) {
  var tag = props.tag,
      type = props.type,
      disabled = props.disabled,
      loading = props.loading,
      loadingText = props.loadingText;

  var onClick = function onClick(event) {
    if (!loading && !disabled) {
      (0, _functional.emit)(ctx, 'click', event);
      (0, _router.functionalRoute)(ctx);
    }
  };

  return h(tag, (0, _babelHelperVueJsxMergeProps.default)([{
    "attrs": {
      "type": props.nativeType,
      "disabled": disabled
    },
    "class": bem([type, props.size, {
      loading: loading,
      disabled: disabled,
      block: props.block,
      plain: props.plain,
      round: props.round,
      square: props.square,
      'bottom-action': props.bottomAction
    }]),
    "on": {
      "click": onClick
    }
  }, (0, _functional.inherit)(ctx)]), [loading ? [h(_loading.default, {
    "attrs": {
      "size": "20px",
      "color": type === 'default' ? undefined : ''
    }
  }), loadingText && h("span", {
    "class": bem('loading-text')
  }, [loadingText])] : h("span", {
    "class": bem('text')
  }, [slots.default ? slots.default() : props.text])]);
};

Button.props = (0, _extends2.default)({}, _router.routeProps, {
  text: String,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  square: Boolean,
  loading: Boolean,
  disabled: Boolean,
  nativeType: String,
  loadingText: String,
  bottomAction: Boolean,
  tag: {
    type: String,
    default: 'button'
  },
  type: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'normal'
  }
});

var _default = sfc(Button);

exports.default = _default;

/***/ }),

/***/ "w8mr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__ = __webpack_require__("Ie4F");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1bad7fbd_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__ = __webpack_require__("hGaY");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("3+ZC")
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

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1bad7fbd_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1bad7fbd_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_index_cml__["b" /* staticRenderFns */],
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

/***/ "wCsG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_progress_web_cml__ = __webpack_require__("PF9E");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_progress_web_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_progress_web_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_progress_web_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_progress_web_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6677ca11_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_progress_web_cml__ = __webpack_require__("WShj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("Sryf")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6677ca11"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_GongLei_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_progress_web_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6677ca11_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_progress_web_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6677ca11_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v9_11_2_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_12_1_progress_web_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/progress/progress.web.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6677ca11", Component.options)
  } else {
    hotAPI.reload("data-v-6677ca11", Component.options)
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

/***/ "xb8I":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ "xp5m":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setTitle;

var _index = __webpack_require__("i0PX");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setTitle() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  _index2.default.setTitle(title);
}

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
          $event.stopPropagation()
          return _vm.touchstartHandler($event)
        }
      }
    },
    [
      _c(
        "div",
        { ref: "inner", style: _vm.innerStyle, attrs: {} },
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