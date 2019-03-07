// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://gonglei.me/cml-indexlist/dist/weex/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+C+F":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var commonLoader = exports.commonLoader = function commonLoader(descriptions) {
  return descriptions;
};

var transformOriginMap = {};
var cacheTransformOriginLoader = exports.cacheTransformOriginLoader = function cacheTransformOriginLoader(descriptions, styles, id) {
  var returnDescriptions = descriptions;

  var transformOrigin = descriptions.transformOrigin;
  if (!transformOriginMap[id]) {
    transformOriginMap[id] = {};
  }

  if (transformOrigin) {
    transformOriginMap[id].transformOrigin = transformOrigin;
  }

  returnDescriptions.transformOrigin = transformOriginMap[id].transformOrigin;
  return returnDescriptions;
};

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

/***/ "+rwS":
/***/ (function(module, exports) {

module.exports = {
  "border-1px": {
    "borderStyle": "solid",
    "borderWidth": "1",
    "borderColor": "#cccccc"
  },
  "border-top-1px": {
    "borderTopStyle": "solid",
    "borderTopWidth": "1",
    "borderTopColor": "#cccccc"
  },
  "border-right-1px": {
    "borderRightStyle": "solid",
    "borderRightWidth": "1",
    "borderRightColor": "#cccccc"
  },
  "border-bottom-1px": {
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1",
    "borderBottomColor": "#cccccc"
  },
  "border-left-1px": {
    "borderLeftStyle": "solid",
    "borderLeftWidth": "1",
    "borderLeftColor": "#cccccc"
  },
  "cml-btn": {
    "display": "flex",
    "width": "702",
    "height": "88",
    "backgroundColor": "#4a4c5b",
    "alignItems": "center",
    "justifyContent": "center",
    "borderTopLeftRadius": "4",
    "borderTopRightRadius": "4",
    "borderBottomRightRadius": "4",
    "borderBottomLeftRadius": "4",
    "opacity": 1,
    "opacity:active": 0.9
  },
  "btn-text": {
    "textAlign": "center",
    "verticalAlign": "middle",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap",
    "outline": "none",
    "lines": 1,
    "fontSize": "36",
    "fontWeight": "500",
    "color": "#ffffff"
  }
}

/***/ }),

/***/ "+yno":
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _methods;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var common = __webpack_require__("CHsc");
var weexStyleHandle = __webpack_require__("QhbD");
var utils = __webpack_require__("TdLX");

var _ = module.exports = {};
common.merge(_, common);

_.mixins = {
  methods: (_methods = {}, _defineProperty(_methods, _.inlineStatementEventProxy, function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    function _is__WEEX__EVENT(weexEvent) {
      var weexEventKeys = Object.keys(weexEvent);
      var weexEventFlagKeys = ['type', 'target', 'timestamp'];
      return weexEventFlagKeys.every(function (flagKey) {
        return weexEventKeys.includes(flagKey);
      });
    }
    args = args.reduce(function (result, arg) {
      if (_is__WEEX__EVENT(arg)) {
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
      detail: detail
    });
    if (this['$__checkCmlEmit__']) {
      this['$__checkCmlEmit__'](eventKey, detail);
    }
  }), _defineProperty(_methods, _.styleParseName, function (content) {
    return content;
  }), _defineProperty(_methods, _.styleProxyName, function (content) {
    var res = '';
    if (_.isType(content, 'String')) {
      res = content;
    } else if (_.isType(content, 'Object')) {
      Object.keys(content).forEach(function (key) {
        res += key + ':' + content[key] + ';';
      });
    }
    //先统一转成字符串，处理后再转成对象
    res = weexStyleHandle.parse(res);
    var obj = {};
    res.split(';').filter(function (styleitem) {
      return !!styleitem.trim();
    }).forEach(function (item) {
      var _utils$getStyleKeyVal = utils.getStyleKeyValue(item),
          key = _utils$getStyleKeyVal.key,
          value = _utils$getStyleKeyVal.value;

      key = key.replace(/\s/g, '');
      value = value.replace(/\s/g, '');
      obj[key] = value;
    });
    return obj;
  }), _defineProperty(_methods, _.mergeStyleName, function () {
    return _.mergeStyle.apply(_, arguments);
  }), _defineProperty(_methods, _.weexClassProxy, function (value) {
    if (typeof value === 'string') {
      return value.split(' ').filter(function (item) {
        return !!item.trim();
      });
    } else if (Object.prototype.toString.call(value) === '[object Array]') {
      return value;
    } else if (Object.prototype.toString.call(value) === '[object Object]') {
      return Object.keys(value).filter(function (key) {
        return value[key];
      });
    } else {
      throw new Error('please check if the value of class is right at ' + JSON.stringify(value));
    }
  }), _methods)
};

function getNewEvent(e) {
  var newEvent = {};
  var type = e.type,
      timestamp = e.timestamp,
      target = e.target,
      currentTarget = e.currentTarget,
      touches = e.touches,
      changedTouches = e.changedTouches,
      value = e.value,
      _e$detail = e.detail,
      detail = _e$detail === undefined ? {} : _e$detail;


  newEvent._originEvent = e;

  if (type) {
    type = type.replace(/^weex\$/, '');
    type = type === 'click' ? 'tap' : type;
    newEvent.type = type;
  }

  if (timestamp) {
    newEvent.timeStamp = parseInt(e.timestamp);
  }

  if (target) {
    newEvent.target = getTarget(target);
  }

  if (currentTarget) {
    newEvent.currentTarget = getTarget(currentTarget);
  }

  function getTarget(originTarget) {
    var attr = originTarget.attr;

    var id = void 0;
    var dataset = {};
    if (attr) {
      Object.keys(attr).forEach(function (key) {
        var originKey = key;
        if (key === 'id') {
          id = attr[key];
        } else {
          if (key.indexOf('data') === 0) {
            key = key.slice(4);
            //weex中会把data-name="yyl"  变成 dataName:yyl  data后的第一个字母大写
            key = key[0].toLowerCase() + key.slice(1);
            dataset[key] = attr[originKey];
          }
        }
      });
    }
    return {
      id: id,
      dataset: dataset
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
      ret.clientX = parseInt(touch.screenX);
      ret.clientY = parseInt(touch.screenY);
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
      _ret.clientX = parseInt(_touch.screenX);
      _ret.clientY = parseInt(_touch.screenY);
      newEvent.changedTouches.push(_ret);
    }
  }

  if (_.isType(detail, 'Object')) {
    newEvent.detail = detail;
  } else {
    newEvent.detail = {};
  }

  if (value) {
    newEvent.detail.value = value;
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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RwSr");


/***/ }),

/***/ "09Zy":
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
    key: 'getWidth',
    value: function getWidth() {
      var _weex$config$env = weex.config.env,
          scale = _weex$config$env.scale,
          deviceWidth = _weex$config$env.deviceWidth;

      var viewportWidth = deviceWidth / scale;
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

/***/ "1TbB":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("8TDS");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RequestAnimationFactory = _index2.default.init();

var animationFrame = new RequestAnimationFactory();
exports.default = animationFrame.requestAnimationFrame();

/***/ }),

/***/ "1yVu":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _weex = __webpack_require__("RtyP");

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
      return new _weex.App(options);
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "2Wm+":
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
    key: 'alert',
    value: function alert(opt, successCallBack, failCallBack) {
      if ((0, _env.inSDK)()) {
        _cmlBridge2.default.alert(opt, function (res) {
          if (res.errno == 0) {
            successCallBack(opt.confirmTitle);
          } else {
            failCallBack(opt.confirmTitle);
          }
        });
      } else {
        var modal = weex.requireModule('modal');
        var _message = opt.message,
            _confirmTitle = opt.confirmTitle;

        modal.alert({
          message: _message,
          okTitle: _confirmTitle
        }, successCallBack);
      }
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

/***/ "2fUE":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = open;

var _index = __webpack_require__("64Kf");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function open() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var commonPatchParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var extraOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { closeCurrent: false };

  _index2.default.open(url, commonPatchParams, extraOptions);
}

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
              env: 'weex',
              viewportWidth: _viewportWidth,
              viewportHeight: _viewportHeight,
              extraParams: _extends({}, _extraParams, extra)
            });
          }
        });
      } else {
        var _viewportWidth2 = WXEnvironment.deviceWidth / WXEnvironment.scale - 0;
        var _viewportHeight2 = WXEnvironment.deviceHeight / WXEnvironment.scale - 0;

        var _os2 = WXEnvironment.platform.toLowerCase();
        var _extraParams2 = Object.assign({}, WXEnvironment);

        var systemInfo = {
          os: _os2,
          env: 'weex',
          viewportWidth: _viewportWidth2,
          viewportHeight: _viewportHeight2,
          extraParams: _extends({}, _extraParams2, {
            os: _os2
          })
        };

        cb(systemInfo);
      }
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "4WzV":
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
    key: 'getClipBoardData',
    value: function getClipBoardData(cb) {
      if ((0, _env.inSDK)()) {
        _cmlBridge2.default.getClipBoardData({}, function (res) {
          var errno = res.errno,
              data = res.data,
              msg = res.msg;

          cb({
            errno: errno,
            data: data,
            errMsg: msg
          });
        });
      } else {
        var clipboard = weex.requireModule('clipboard');
        clipboard.getString(function (ret) {
          ret.result == 'success' ? cb({
            errno: 0,
            errMsg: '',
            data: ret.data
          }) : null;

          ret.result === 'fail' ? cb({
            errno: -1,
            errMsg: 'weex clipboard.getString fail',
            data: ''
          }) : null;
        });
      }
    }
  }, {
    key: 'setClipBoardData',
    value: function setClipBoardData(text, cb) {
      if ((0, _env.inSDK)()) {
        _cmlBridge2.default.setClipBoardData({ data: text }, function (res) {
          var errno = res.errno,
              _res$msg = res.msg,
              msg = _res$msg === undefined ? '' : _res$msg;

          cb({
            errno: errno,
            data: '',
            errMsg: msg
          });
        });
      } else {
        var clipboard = weex.requireModule('clipboard');
        clipboard.setString(text);
        cb({
          errno: 0,
          errMsg: '',
          data: text
        });
      }
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "5oF4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
  * vue-router v3.0.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (false) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (false) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

function extend (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "production" !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (false) {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (false) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (false) {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (false) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (false) {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (false) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (false) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (false) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (false) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (false) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  window.history.replaceState({ key: getStateKey() }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (false) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (false) {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "production" !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (false) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  "production" !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);


/***/ }),

/***/ "5z19":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cmlBridge = __webpack_require__("8D69");

var _cmlBridge2 = _interopRequireDefault(_cmlBridge);

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'getLaunchOptionsSync',
    value: function getLaunchOptionsSync() {
      return {
        query: _cmlBridge2.default.getQueryObjSync()
      };
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "64Kf":
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
    key: 'open',
    value: function open(url, commonPatchParams, extraOptions) {
      if ((0, _env.inSDK)()) {
        _cmlBridge2.default.open({ url: url, commonPatchParams: commonPatchParams, extraOptions: extraOptions });
      } else {
        var navigator = weex.requireModule('navigator');
        var weexUrlMatch = url.match(/(cml_addr|wx_addr)=([^&]*)/);
        if (weexUrlMatch) {
          url = decodeURIComponent(weexUrlMatch[2]);
        }
        navigator.push({
          url: url
        });
      }
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

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

/***/ "86tA":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm._weexClassProxy('page-wrapper  cml-base cml-view')
  }, [_c('indexlist', {
    staticClass: ["cml-base", "cml-indexlist"],
    attrs: {
      "dataList": (_vm.dataList)
    },
    on: {
      "onselect": function($event) {
        _vm._cmlEventProxy($event, 'onItemSelect')
      }
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

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

/***/ "8R4g":
/***/ (function(module, exports) {

module.exports = {
  "border-1px": {
    "borderStyle": "solid",
    "borderWidth": "1",
    "borderColor": "#cccccc"
  },
  "border-top-1px": {
    "borderTopStyle": "solid",
    "borderTopWidth": "1",
    "borderTopColor": "#cccccc"
  },
  "border-right-1px": {
    "borderRightStyle": "solid",
    "borderRightWidth": "1",
    "borderRightColor": "#cccccc"
  },
  "border-bottom-1px": {
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1",
    "borderBottomColor": "#cccccc"
  },
  "border-left-1px": {
    "borderLeftStyle": "solid",
    "borderLeftWidth": "1",
    "borderLeftColor": "#cccccc"
  },
  "page-wrapper": {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center"
  }
}

/***/ }),

/***/ "8TDS":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animationShim = __webpack_require__("K1x2");

var _util = __webpack_require__("Pn5V");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'init',
    value: function init() {
      return function () {
        function AnimationFrameFactory() {
          _classCallCheck(this, AnimationFrameFactory);
        }

        _createClass(AnimationFrameFactory, [{
          key: 'requestAnimationFrame',
          value: function requestAnimationFrame() {
            return _animationShim.requestAnimationFrame;
          }
        }]);

        return AnimationFrameFactory;
      }();
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

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

/***/ "9PhS":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setClipBoardData;

var _index = __webpack_require__("4WzV");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setClipBoardData(text) {
  return new Promise(function (resolve, reject) {
    _index2.default.setClipBoardData(text, function (res) {
      if (res.errno === 0) {
        resolve(res.data);
      } else {
        reject(res.errMsg);
      }
    });
  });
}

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

/***/ "9Smy":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var api = {
  alert: {
    baseOn: {
      sdk: 'alert',
      web: 'alert',
      wx: 'showModal',
      baidu: 'showModal',
      alipay: 'alert',
      weex: 'modal.alert'
    }
  },
  cancelAnimationFrame: {
    allCanUse: true,
    baseOn: {
      sdk: 'cancelAnimationFrame',
      web: 'cancelAnimationFrame',
      wx: 'cancelAnimationFrame',
      baidu: 'cancelAnimationFrame',
      weex: 'cancelAnimationFrame',
      alipay: 'cancelAnimationFrame'
    }
  },
  canIUse: {
    allCanUse: true,
    baseOn: {
      sdk: 'canIUse',
      web: 'canIUse',
      wx: 'canIUse',
      baidu: 'canIUse',
      weex: 'canIUse',
      alipay: 'canIUse'
    }
  },
  inSDK: {
    allCanUse: true,
    baseOn: {
      sdk: 'inSDK',
      web: 'inSDK',
      wx: '',
      baidu: '',
      weex: ''
    }
  },
  chooseImage: {
    baseOn: {
      sdk: 'chooseImage',
      web: 'chooseImage',
      wx: 'chooseImage',
      baidu: 'chooseImage',
      weex: '',
      alipay: 'chooseImage'
    }
  },
  close: {
    baseOn: {
      sdk: 'close',
      web: 'close',
      wx: 'navigateBack',
      baidu: 'navigateBack',
      weex: '',
      alipay: 'navigateBack'
    }
  },
  confirm: {
    baseOn: {
      sdk: 'confirm',
      web: 'confirm',
      wx: 'showModal',
      baidu: 'showModal',
      weex: 'modal.confirm',
      alipay: 'confirm'
    }
  },
  cpx2px: {
    baseOn: {
      sdk: 'getSystemInfo',
      web: 'getSystemInfo',
      wx: 'getSystemInfoSync',
      baidu: 'getSystemInfoSync',
      weex: 'getSystemInfo',
      alipay: 'getSystemInfoSync'
    }
  },
  get: {
    baseOn: {
      sdk: 'request',
      web: 'fetch',
      wx: 'request',
      baidu: 'request',
      weex: 'fetch',
      alipay: 'httpRequest'
    }
  },
  getClipBoardData: {
    baseOn: {
      sdk: 'getClipBoardData',
      web: 'getClipboardData',
      wx: 'getClipboardData',
      baidu: 'getClipboardData',
      weex: 'clipboard.getString',
      alipay: 'getClipboard'
    }
  },
  getLocationInfo: {
    baseOn: {
      sdk: 'getLocationInfo',
      web: 'getCurrentPosition',
      wx: 'getLocation',
      baidu: 'getLocation',
      weex: '',
      alipay: 'getLocation'
    }
  },
  getRect: {
    baseOn: {
      sdk: 'getComponentRect',
      web: 'getComputedStyle',
      wx: 'createSelectorQuery',
      baidu: 'createSelectorQuery',
      weex: 'getComponentRect',
      alipay: ''
    }
  },
  getStorage: {
    baseOn: {
      sdk: 'getStorage',
      web: 'localStorage.getItem',
      wx: 'getStorageSync',
      baidu: 'getStorageSync',
      weex: 'storage.getItem',
      alipay: 'getStorageSync'
    }
  },
  getSystemInfo: {
    baseOn: {
      sdk: 'getSystemInfo',
      web: 'getSystemInfo',
      wx: 'getSystemInfo',
      baidu: 'getSystemInfo',
      weex: 'getSystemInfo',
      alipay: 'getSystemInfo'
    }
  },
  initSocket: {
    baseOn: {
      sdk: 'initSocket',
      web: 'initSocket',
      wx: 'connectSocket',
      baidu: 'connectSocket',
      weex: '',
      alipay: 'connectSocket'
    }
  },
  getLaunchOptionsSync: {
    baseOn: {
      sdk: 'getQueryObjSync',
      web: 'location.href',
      wx: 'getLaunchOptionsSync',
      baidu: '',
      weex: 'weex.config.bundleUrl',
      alipay: ''
    }
  },
  navigateBack: {
    baseOn: {
      sdk: 'navigateBack',
      web: 'navigateBack',
      wx: 'navigateBack',
      baidu: 'navigateBack',
      weex: 'navigateBack',
      alipay: 'navigateBack'
    }
  },
  navigateTo: {
    baseOn: {
      sdk: 'navigateTo',
      web: 'navigateTo',
      wx: 'navigateTo',
      baidu: 'navigateTo',
      weex: 'navigateTo',
      alipay: 'navigateTo'
    }
  },
  open: {
    baseOn: {
      sdk: 'open',
      web: 'location.href',
      wx: 'navigateToMiniProgram',
      baidu: 'navigateToSmartProgram',
      weex: 'navigator.push',
      alipay: 'navigateToMiniProgram'
    }
  },
  post: {
    baseOn: {
      sdk: 'request',
      web: 'fetch',
      wx: 'request',
      baidu: 'request',
      weex: 'fetch',
      alipay: 'httpRequest'
    }
  },
  px2cpx: {
    baseOn: {
      sdk: 'getSystemInfo',
      web: 'getSystemInfo',
      wx: 'getSystemInfoSync',
      baidu: 'getSystemInfoSync',
      weex: 'getSystemInfo',
      alipay: ''
    }
  },
  redirectTo: {
    baseOn: {
      sdk: 'redirectTo',
      web: 'router.replace',
      wx: 'redirectTo',
      baidu: 'redirectTo',
      weex: 'router.replace',
      alipay: 'redirectTo'
    }
  },
  reload: {
    baseOn: {
      sdk: 'reload',
      web: 'location.reload',
      wx: '',
      baidu: '',
      weex: '',
      alipay: ''
    }
  },
  removeStorage: {
    baseOn: {
      sdk: 'removeStorage',
      web: 'localStorage.removeItem',
      wx: 'removeStorageSync',
      baidu: 'removeStorageSync',
      weex: 'storage.removeItem',
      alipay: 'removeStorageSync'
    }
  },
  request: {
    baseOn: {
      sdk: 'request',
      web: 'fetch',
      wx: 'request',
      baidu: 'request',
      weex: 'fetch',
      alipay: 'httpRequest'
    }
  },
  requestAnimationFrame: {
    allCanUse: true,
    baseOn: {
      sdk: 'setTimeout',
      web: 'requestAnimationFrame',
      wx: 'setTimeout',
      baidu: 'setTimeout',
      weex: 'requestAnimationFrame',
      alipay: 'requestAnimationFrame'
    }
  },
  setClipBoardData: {
    baseOn: {
      sdk: 'setClipBoardData',
      web: 'setClipBoardData',
      wx: 'setClipBoardData',
      baidu: 'setClipBoardData',
      weex: 'clipboard.setString',
      alipay: 'setClipboard'
    }
  },
  setStorage: {
    baseOn: {
      sdk: 'setStorage',
      web: 'localStorage.setItem',
      wx: 'setStorageSync',
      baidu: 'setStorageSync',
      weex: 'storage.setItem',
      alipay: 'setStorageSync'
    }
  },
  setTitle: {
    baseOn: {
      sdk: 'setTitle',
      web: 'document.title',
      wx: 'setNavigationBarTitle',
      baidu: 'setNavigationBarTitle',
      weex: '',
      alipay: 'setNavigationBar'
    }
  },
  showToast: {
    baseOn: {
      sdk: 'showToast',
      web: 'showToast',
      wx: 'showToast',
      baidu: 'showToast',
      weex: 'modal.toast',
      alipay: 'showToast'
    }
  }
};

exports.api = api;

/***/ }),

/***/ "9vSM":
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
    key: 'request',
    value: function request(params) {
      if ((0, _env.inSDK)()) {
        _cmlBridge2.default.request(params);
      } else {
        var stream = weex.requireModule('stream');
        var _url = params.url,
            _body = params.body,
            _headers = params.headers,
            _method = params.method,
            _cb = params.cb;


        stream.fetch({
          url: _url,
          method: _method,
          headers: _headers,
          body: _body,
          type: 'text'
        }, function (res) {
          var status = res.status,
              data = res.data,
              headers = res.headers;

          _cb({
            status: status,
            data: data,
            headers: headers
          });
        });
      }
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "AJI0":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _weex = __webpack_require__("RtyP");

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
      return new _weex.Component(options);
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "ANk0":
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

var _scrollerWeex = __webpack_require__("dLYe");

var _scrollerWeex2 = _interopRequireDefault(_scrollerWeex);

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


exports.default.components = _extends({}, exports.default.components, { cmlBuildinScroller: _scrollerWeex2.default });


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "AbV7":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var rotateStyles = exports.rotateStyles = ['rotate', 'rotateX', 'retateY'];

var isNumTypeStyles = exports.isNumTypeStyles = ['width', 'height', 'translateX', 'translateY'];

var transformStyles = exports.transformStyles = ['translate', 'translateX', 'translateY', 'scale', 'scaleX', 'scaleY', 'rotate', 'rotateX', 'rotateY'];

var compositeStyles = exports.compositeStyles = ['translate', 'scale'];

var commonLoader = exports.commonLoader = function commonLoader(styles) {
  var returnStyles = {};

  Object.keys(styles).forEach(function (key) {
    var value = styles[key];
    //
    if (value.length === 1) {
      returnStyles[key] = value[0];
    } else {
      if (compositeStyles.includes(key)) {
        returnStyles[key + 'X'] = value[0];
        returnStyles[key + 'Y'] = value[1];
        // returnStyles[`${key}Z`] = value[2];
      } else {
          // redLog(`${key}属性不支持传多个参数`);
        }
    }
  });
  return returnStyles;
};

// 缓存transform属性
var transformStylesMap = {};
var cacheTransformStylesLoader = exports.cacheTransformStylesLoader = function cacheTransformStylesLoader(styles, descriptions, id) {
  var returnStyles = {};

  if (!transformStylesMap[id]) {
    transformStylesMap[id] = {};
  }

  Object.keys(styles).forEach(function (key) {
    var value = styles[key];

    if (transformStyles.includes(key)) {
      transformStylesMap[id][key] = value;
    }
    returnStyles[key] = value;
  });

  if (JSON.stringify(transformStylesMap[id]) !== '{}') {
    Object.keys(transformStylesMap[id]).forEach(function (key) {
      var value = transformStylesMap[id][key];

      returnStyles[key] = value;
    });
  }

  return returnStyles;
};

/***/ }),

/***/ "B0A7":
/***/ (function(module, exports) {

module.exports = {
  "border-1px": {
    "borderStyle": "solid",
    "borderWidth": "1",
    "borderColor": "#cccccc"
  },
  "border-top-1px": {
    "borderTopStyle": "solid",
    "borderTopWidth": "1",
    "borderTopColor": "#cccccc"
  },
  "border-right-1px": {
    "borderRightStyle": "solid",
    "borderRightWidth": "1",
    "borderRightColor": "#cccccc"
  },
  "border-bottom-1px": {
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1",
    "borderBottomColor": "#cccccc"
  },
  "border-left-1px": {
    "borderLeftStyle": "solid",
    "borderLeftWidth": "1",
    "borderLeftColor": "#cccccc"
  }
}

/***/ }),

/***/ "B4Pb":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm._weexClassProxy('page-wrapper  cml-base cml-view')
  }, [_c('indexlist', {
    staticClass: ["cml-base", "cml-indexlist"],
    attrs: {
      "dataList": (_vm.dataList)
    },
    on: {
      "onselect": function($event) {
        _vm._cmlEventProxy($event, 'onItemSelect')
      }
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "BTCX":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cmlBridge = __webpack_require__("8D69");

var _cmlBridge2 = _interopRequireDefault(_cmlBridge);

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'initSocket',
    value: function initSocket(url) {
      return _cmlBridge2.default.initSocket({ url: url });
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

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

/***/ "CiLZ":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initSocket;

var _index = __webpack_require__("BTCX");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initSocket() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var instance = _index2.default.initSocket(url);
  return instance;
}

/***/ }),

/***/ "DKIa":
/***/ (function(module, exports) {

module.exports = {
  "border-1px": {
    "borderStyle": "solid",
    "borderWidth": "1",
    "borderColor": "#cccccc"
  },
  "border-top-1px": {
    "borderTopStyle": "solid",
    "borderTopWidth": "1",
    "borderTopColor": "#cccccc"
  },
  "border-right-1px": {
    "borderRightStyle": "solid",
    "borderRightWidth": "1",
    "borderRightColor": "#cccccc"
  },
  "border-bottom-1px": {
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1",
    "borderBottomColor": "#cccccc"
  },
  "border-left-1px": {
    "borderLeftStyle": "solid",
    "borderLeftWidth": "1",
    "borderLeftColor": "#cccccc"
  },
  "page-wrapper": {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center"
  }
}

/***/ }),

/***/ "DnW9":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cpx2px;

var _getWidth = __webpack_require__("09Zy");

var _getWidth2 = _interopRequireDefault(_getWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cpx2px(cpx) {
  if (typeof cpx !== 'number') {
    console.error('Parameter must be a number');
    return;
  }
  var viewportWidth = _getWidth2.default.getWidth();
  var px = +(viewportWidth / 750 * cpx).toFixed(3);
  return px;
}

/***/ }),

/***/ "DzjB":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("1TbB");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("NQJC");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__("c0s4");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__("r6bs");

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__("qK0v");

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__("m26z");

var _index12 = _interopRequireDefault(_index11);

var _index13 = __webpack_require__("MoWX");

var _index14 = _interopRequireDefault(_index13);

var _index15 = __webpack_require__("RoY7");

var _index16 = _interopRequireDefault(_index15);

var _index17 = __webpack_require__("yqBP");

var _index18 = _interopRequireDefault(_index17);

var _index19 = __webpack_require__("VnQQ");

var _index20 = _interopRequireDefault(_index19);

var _index21 = __webpack_require__("t7x7");

var _index22 = _interopRequireDefault(_index21);

var _index23 = __webpack_require__("bpnX");

var _index24 = _interopRequireDefault(_index23);

var _index25 = __webpack_require__("2fUE");

var _index26 = _interopRequireDefault(_index25);

var _index27 = __webpack_require__("Q4BO");

var _index28 = _interopRequireDefault(_index27);

var _index29 = __webpack_require__("bHvN");

var _index30 = _interopRequireDefault(_index29);

var _index31 = __webpack_require__("Z7cO");

var _index32 = _interopRequireDefault(_index31);

var _index33 = __webpack_require__("xp5m");

var _index34 = _interopRequireDefault(_index33);

var _index35 = __webpack_require__("CiLZ");

var _index36 = _interopRequireDefault(_index35);

var _index37 = __webpack_require__("xPyr");

var _index38 = _interopRequireDefault(_index37);

var _index39 = __webpack_require__("Rx0g");

var _index40 = _interopRequireDefault(_index39);

var _index41 = __webpack_require__("h9Ml");

var _index42 = _interopRequireDefault(_index41);

var _index43 = __webpack_require__("EYO0");

var _index44 = _interopRequireDefault(_index43);

var _index45 = __webpack_require__("+iRC");

var _index46 = _interopRequireDefault(_index45);

var _index47 = __webpack_require__("G932");

var _index48 = _interopRequireDefault(_index47);

var _index49 = __webpack_require__("hODF");

var _index50 = _interopRequireDefault(_index49);

var _index51 = __webpack_require__("clyH");

var _index52 = _interopRequireDefault(_index51);

var _index53 = __webpack_require__("9PhS");

var _index54 = _interopRequireDefault(_index53);

var _index55 = __webpack_require__("ONZj");

var _index56 = _interopRequireDefault(_index55);

var _index57 = __webpack_require__("DnW9");

var _index58 = _interopRequireDefault(_index57);

var _index59 = __webpack_require__("KpXy");

var _index60 = _interopRequireDefault(_index59);

var _index61 = __webpack_require__("RGNC");

var _index62 = _interopRequireDefault(_index61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  requestAnimationFrame: _index2.default,
  cancelAnimationFrame: _index4.default,
  createAnimation: _index6.default,
  canIUse: _index8.default,
  chooseImage: _index10.default,
  close: _index12.default,
  reload: _index14.default,
  getRect: _index16.default,
  getLocationInfo: _index18.default,
  navigateTo: _index20.default,
  redirectTo: _index22.default,
  navigateBack: _index24.default,
  open: _index26.default,
  get: _index28.default,
  post: _index30.default,
  request: _index32.default,
  setTitle: _index34.default,
  initSocket: _index36.default,
  getStorage: _index38.default,
  setStorage: _index40.default,
  removeStorage: _index42.default,
  getSystemInfo: _index44.default,
  showToast: _index46.default,
  alert: _index48.default,
  confirm: _index50.default,
  getClipBoardData: _index52.default,
  setClipBoardData: _index54.default,
  px2cpx: _index56.default,
  cpx2px: _index58.default,
  getLaunchOptionsSync: _index60.default,
  inSDK: _index62.default
};

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

/***/ "FSU9":
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__("Mf5O")
)

/* script */
__vue_exports__ = __webpack_require__("ANk0")

/* template */
var __vue_template__ = __webpack_require__("Ycaq")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/GongLei/Desktop/test/cml-indexlist/src/components/indexlist2/index.cml"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0ee60b13"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

exports.__esModule = true;
exports["default"] = __vue_exports__


/***/ }),

/***/ "FoMl":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _env = __webpack_require__("8d/N");

var _util = __webpack_require__("Pn5V");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'inSDK',
    value: function inSDK() {
      return (0, _env.inSDK)();
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "G932":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = alert;

var _index = __webpack_require__("2Wm+");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function alert(opt) {
  var _opt$message = opt.message,
      message = _opt$message === undefined ? '' : _opt$message,
      _opt$confirmTitle = opt.confirmTitle,
      confirmTitle = _opt$confirmTitle === undefined ? '确定' : _opt$confirmTitle;

  return new Promise(function (resolve, reject) {
    _index2.default.alert({ message: message, confirmTitle: confirmTitle }, function () {
      resolve();
    }, function () {
      reject();
    });
  });
}

/***/ }),

/***/ "GDhw":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wex = __webpack_require__("JCgp");

var _wex2 = _interopRequireDefault(_wex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _wex2.default;

/***/ }),

/***/ "GS4Q":
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__("H1rL")
)

/* script */
__vue_exports__ = __webpack_require__("kNfr")

/* template */
var __vue_template__ = __webpack_require__("86tA")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/GongLei/Desktop/test/cml-indexlist/src/pages/page/index.cml"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-580cd160"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

exports.__esModule = true;
exports["default"] = __vue_exports__


/***/ }),

/***/ "GW3J":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.listen = listen;

var _common = __webpack_require__("Octk");

var globalEvent = weex.requireModule('globalEvent');

/**
 * 注册监听通道
 */
function init() {
  globalEvent.addEventListener('cmlBridgeChannel', function (ptc) {
    var ptcStr = ptc.protocol;
    (0, _common.dispatchProtocol)(ptcStr);
  });
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

/***/ "Gl2V":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__("zYxj");

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
      var queryObj = {};
      var search = '';

      // cml端sdk环境
      if (weex.config.query && weex.config.query.cml_url) {
        var launchUrl = weex.config.query.cml_url;
        queryObj.cml_sdk = weex.config.query.cml_sdk;
        search = launchUrl.split('?')[1] || '';
      } else {
        var bundleUrl = weex.config.bundleUrl || '';
        if (bundleUrl && ~bundleUrl.indexOf('?')) {
          search = bundleUrl.split('?')[1] || '';
        }
      }

      queryObj = _extends({}, queryObj, (0, _utils.queryParse)(search));

      Object.keys(queryObj).forEach(function (key) {
        queryObj[key] = decodeURIComponent(queryObj[key]);
      });

      return queryObj;
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "H1rL":
/***/ (function(module, exports) {

module.exports = {
  "border-1px": {
    "borderStyle": "solid",
    "borderWidth": "1",
    "borderColor": "#cccccc"
  },
  "border-top-1px": {
    "borderTopStyle": "solid",
    "borderTopWidth": "1",
    "borderTopColor": "#cccccc"
  },
  "border-right-1px": {
    "borderRightStyle": "solid",
    "borderRightWidth": "1",
    "borderRightColor": "#cccccc"
  },
  "border-bottom-1px": {
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1",
    "borderBottomColor": "#cccccc"
  },
  "border-left-1px": {
    "borderLeftStyle": "solid",
    "borderLeftWidth": "1",
    "borderLeftColor": "#cccccc"
  },
  "page-wrapper": {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center"
  }
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

/***/ "IB0N":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _index = __webpack_require__("EYO0");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("RoY7");

var _index4 = _interopRequireDefault(_index3);

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


var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dom = weex.requireModule('dom');

var Scroller = function () {
  function Scroller() {
    _classCallCheck(this, Scroller);

    this.props = {
      cstyle: {
        type: String,
        default: ''
      },
      bottomOffset: {
        // 距底部/右边多远时（单位px），触发 scrolltolower 事件
        type: Number,
        default: 0
      },
      scrollDirection: {
        // 可选为 horizontal 或者 vertical，默认值为 vertical 。定义滚动的方向。
        type: String,
        default: 'vertical'
      },
      bounce: {
        type: Boolean,
        default: true
      },
      //-1表示占用剩余高度或者宽度
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
    this.data = {
      cmtStyle: ''
    };
    this.computed = {
      wrapperStyle: function wrapperStyle() {
        if (this.scrollDirection === 'vertical') {
          if (this.height >= 0) {
            return this.cstyle + ';height:' + this.height + 'cpx;';
          } else if (this.cstyle && this.cstyle.indexOf('height') !== -1) {
            return this.cstyle;
          }
        } else {
          if (this.width >= 0) {
            return this.cstyle + ';width:' + this.width + 'cpx;white-space:nowrap;';
          } else if (this.cstyle && this.cstyle.indexOf('width') !== -1) {
            return this.cstyle;
          }
        }
        // 没有传递的情况
        return this.cmtStyle + this.cstyle;
      },
      afterClass: function afterClass() {
        return this.scrollDirection === 'vertical' ? 'flex-column' : 'flex-row';
      }
    };
    this.watch = {
      scrollTop: function scrollTop(val) {
        this.scrollTo(val);
      },
      scrollLeft: function scrollLeft(val) {
        this.scrollTo(val);
      }
    };
    this.methods = {
      scrollTo: function scrollTo(offset) {
        var el = this.$refs['c-scroller'] && this.$refs['c-scroller'].children[0];
        if (el) {
          dom.scrollToElement(el, { offset: offset });
        }
      },
      onScroll: function onScroll(e) {
        var detail = e.detail;
        detail.deltaX = detail.deltaX || 0;
        detail.deltaY = detail.deltaY || 0;
        this.$cmlEmit('onscroll', detail);
        this.$cmlEmit('customscroll', detail);
      },
      onBottom: function onBottom(e) {
        this.$cmlEmit('scrolltobottom', e.detail);
      }
    };
  }

  _createClass(Scroller, [{
    key: 'mounted',
    value: function mounted() {
      var _this = this;

      setTimeout(_asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var rectData, windowRect, height, width;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.scrollDirection === 'vertical' && !_this.height)) {
                  _context.next = 3;
                  break;
                }

                console.error('纵向滚动必须传递高度属性');
                return _context.abrupt('return');

              case 3:
                if (!(_this.scrollDirection === 'horizontal' && !_this.width)) {
                  _context.next = 6;
                  break;
                }

                console.error('横向滚动必须传递宽度属性');
                return _context.abrupt('return');

              case 6:
                if (!(_this.height === -1 || _this.width === -1)) {
                  _context.next = 14;
                  break;
                }

                _context.next = 9;
                return (0, _index4.default)('c-scroller', _this);

              case 9:
                rectData = _context.sent;
                _context.next = 12;
                return (0, _index2.default)();

              case 12:
                windowRect = _context.sent;

                if (_this.scrollDirection === 'vertical') {
                  height = windowRect.viewportHeight - rectData.top;

                  _this.cmtStyle = 'height:' + height + 'cpx;';
                } else {
                  width = windowRect.viewportWidth - rectData.left;

                  _this.cmtStyle = 'width:' + width + 'cpx;white-space:nowrap;';
                }

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      })), 200);
    }
  }]);

  return Scroller;
}();

exports.default = new Scroller();


exports.default.components = _extends({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "IToD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["totalList"] = totalList;
/* harmony export (immutable) */ __webpack_exports__["getSpecialData"] = getSpecialData;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("XFow");
/**
 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
 * Created by Tw93 on 17/11/01
 */



/**
 * 根据26个字母取每一项首字母对数据进行排序,处理数据变换
 * @return {[array]}
 */
function totalList (source, hotListConfig, cityLocationConfig) {
  const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const res = [];
  LETTERS.split('').forEach(letter => {
    const _data = source.filter(item => {
      if (item.pinYin) {
        return item.pinYin.slice(0, 1).toLowerCase() === letter.toLowerCase();
      } else if (item.py) {
        return item.py.slice(0, 1).toLowerCase() === letter.toLowerCase();
      } else {
        return false;
      }
    });
    if (_data.length) {
      res.push({
        title: letter,
        data: _data,
        type: 'list'
      });
    }
  });

  // 处理热门数据
  const hotList = getSpecialData(hotListConfig);
  hotList && res.unshift(hotList);

  // 处理特殊定位数据
  const cityLocation = getSpecialData(cityLocationConfig);
  cityLocation && res.unshift(cityLocation);

  return res;
}

function getSpecialData (data) {
  if (data && data.type && data.list && data.list.length > 0) {
    const { type, title, list } = data;
    return {
      title,
      type,
      data: type === 'group' ? __WEBPACK_IMPORTED_MODULE_0__utils__["default"].arrayChunk(list) : list
    };
  } else {
    return null;
  }
}


/***/ }),

/***/ "IWA1":
/***/ (function(module, exports) {

module.exports = {
  "border-1px": {
    "borderStyle": "solid",
    "borderWidth": "1",
    "borderColor": "#cccccc"
  },
  "border-top-1px": {
    "borderTopStyle": "solid",
    "borderTopWidth": "1",
    "borderTopColor": "#cccccc"
  },
  "border-right-1px": {
    "borderRightStyle": "solid",
    "borderRightWidth": "1",
    "borderRightColor": "#cccccc"
  },
  "border-bottom-1px": {
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1",
    "borderBottomColor": "#cccccc"
  },
  "border-left-1px": {
    "borderLeftStyle": "solid",
    "borderLeftWidth": "1",
    "borderLeftColor": "#cccccc"
  },
  "flex-row": {
    "flexDirection": "row"
  },
  "flex-column": {
    "flexDirection": "column"
  }
}

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

/***/ "K1x2":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var enterPageTime = Date.now();

var TARGET_FPS = 60;

var requests = Object.create(null);

var raf_handle = 0;

var timeout_handle = -1;

function onFrameTimer() {
  var cur_requests = requests;
  requests = Object.create(null);
  timeout_handle = -1;
  Object.keys(cur_requests).forEach(function (id) {
    var request = cur_requests[id];

    request(Date.now() - enterPageTime);
  });
}

var requestAnimationFrame = exports.requestAnimationFrame = function requestAnimationFrame(callback) {
  var cb_handle = ++raf_handle;
  requests[cb_handle] = callback;
  if (timeout_handle === -1) {
    timeout_handle = setTimeout(onFrameTimer, 1000 / TARGET_FPS);
  }
  return cb_handle;
};

var cancelAnimationFrame = exports.cancelAnimationFrame = function cancelAnimationFrame(handle) {
  delete requests[handle];
  if (Object.keys(requests).length === 0) {
    clearTimeout(timeout_handle);
    timeout_handle = -1;
  }
};

/***/ }),

/***/ "KpXy":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLaunchOptionsSync;

var _index = __webpack_require__("5z19");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getLaunchOptionsSync() {
  return _index2.default.getLaunchOptionsSync();
}

/***/ }),

/***/ "KvZo":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cmlBridge = __webpack_require__("8D69");

var _cmlBridge2 = _interopRequireDefault(_cmlBridge);

var _env = __webpack_require__("8d/N");

var _config = __webpack_require__("9Smy");

var _weex = __webpack_require__("v/rT");

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'canIUse',
    value: function canIUse(metName, cb) {
      if (!_config.api[metName]) {
        cb(false);
        return;
      }

      var allCan = _config.api[metName].allCanUse;
      if (allCan) {
        cb(true);
        return;
      }

      if ((0, _env.inSDK)()) {
        var method = _config.api[metName].baseOn.sdk;
        _cmlBridge2.default.canIUse({ method: method }, function (res) {
          var result = true;
          if (res.errno != 0) {
            result = false;
          }
          cb(result);
        });
      } else {
        var _method = _config.api[metName].baseOn.weex;
        cb((0, _weex.weexCanIUse)(_method));
      }
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "LZyZ":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animationShim = __webpack_require__("K1x2");

var _util = __webpack_require__("Pn5V");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'init',
    value: function init() {
      return function () {
        function AnimationFrameFactory() {
          _classCallCheck(this, AnimationFrameFactory);
        }

        _createClass(AnimationFrameFactory, [{
          key: 'cancelAnimationFrame',
          value: function cancelAnimationFrame() {
            return _animationShim.cancelAnimationFrame;
          }
        }]);

        return AnimationFrameFactory;
      }();
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "MSGl":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Page = undefined;

var _BaseCtor2 = __webpack_require__("yVTO");

var _BaseCtor3 = _interopRequireDefault(_BaseCtor2);

var _lifecycle = __webpack_require__("wbAX");

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _OptTransformer = __webpack_require__("rDCK");

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

    _this.cmlType = 'weex';

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

/***/ "Mf5O":
/***/ (function(module, exports) {

module.exports = {
  "border-1px": {
    "borderStyle": "solid",
    "borderWidth": "1",
    "borderColor": "#cccccc"
  },
  "border-top-1px": {
    "borderTopStyle": "solid",
    "borderTopWidth": "1",
    "borderTopColor": "#cccccc"
  },
  "border-right-1px": {
    "borderRightStyle": "solid",
    "borderRightWidth": "1",
    "borderRightColor": "#cccccc"
  },
  "border-bottom-1px": {
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1",
    "borderBottomColor": "#cccccc"
  },
  "border-left-1px": {
    "borderLeftStyle": "solid",
    "borderLeftWidth": "1",
    "borderLeftColor": "#cccccc"
  },
  "page-wrapper": {
    "display": "flex",
    "position": "relative",
    "width": "750"
  },
  "index-list-item": {
    "width": "750"
  },
  "index-list-item-name": {
    "display": "flex",
    "flexDirection": "column",
    "paddingLeft": "50",
    "backgroundColor": "#f7f7f7",
    "justifyContent": "center"
  },
  "index-list-item-name-text": {
    "fontSize": "28",
    "color": "#999999"
  },
  "index-list-item-content": {
    "display": "flex",
    "flexDirection": "column",
    "paddingLeft": "40",
    "justifyContent": "center"
  },
  "index-list-item-content-text": {
    "fontSize": "28",
    "color": "#808080"
  },
  "short-cut-wrapper": {
    "position": "absolute",
    "right": "30",
    "zIndex": 99,
    "transform": "translateY(-50%)"
  },
  "short-cut-item": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "marginTop": "15",
    "width": "35",
    "height": "35",
    "backgroundColor": "#edf0f4",
    "borderTopLeftRadius": "35",
    "borderTopRightRadius": "35",
    "borderBottomRightRadius": "35",
    "borderBottomLeftRadius": "35"
  },
  "short-cut-item-text": {
    "fontSize": "28",
    "color": "#666666"
  }
}

/***/ }),

/***/ "MoWX":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reload;

var _index = __webpack_require__("U/mm");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reload() {
  _index2.default.reload();
}

/***/ }),

/***/ "Mqar":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.call = call;

var _const = __webpack_require__("CW7I");

var _common = __webpack_require__("Octk");

var cmlBridge = weex.requireModule('cmlBridge');

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

  cmlBridge && cmlBridge.channel && cmlBridge.channel(url);
}

/***/ }),

/***/ "MtSG":
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__("DKIa")
)

/* script */
__vue_exports__ = __webpack_require__("ghTG")

/* template */
var __vue_template__ = __webpack_require__("B4Pb")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/GongLei/Desktop/test/cml-indexlist/src/pages/page2/index.cml"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2d3cc1a0"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

exports.__esModule = true;
exports["default"] = __vue_exports__


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

/***/ "NQJC":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("LZyZ");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CancelAnimationFactory = _index2.default.init();

var animationFrame = new CancelAnimationFactory();

exports.default = animationFrame.cancelAnimationFrame();

/***/ }),

/***/ "NVdb":
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
    key: 'removeStorage',
    value: function removeStorage(key, cb) {
      if ((0, _env.inSDK)()) {
        _cmlBridge2.default.removeStorage({ key: key }, function (res) {
          var errno = res.errno,
              _res$msg = res.msg,
              msg = _res$msg === undefined ? '' : _res$msg;

          cb({
            errno: errno,
            errMsg: msg,
            data: ''
          });
        });
      } else {
        var storage = weex.requireModule('storage');
        storage.removeItem(key, function (e) {
          if (e.result === 'success') {
            cb({
              errno: 0,
              errMsg: '',
              data: ''
            });
          } else {
            cb({
              errno: -1,
              errMsg: 'weex storage.removeItem fail',
              data: ''
            });
          }
        });
      }
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "NYxO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (false) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (false) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (false) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (false) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (false) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (false) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    false
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (false) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (false) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (false) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (false) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (false) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (false) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (false) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (false) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (false) {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (false) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (false) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (false) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["default"] = (index_esm);


/***/ }),

/***/ "NqBF":
/***/ (function(module, exports) {

var COLOR_MAP = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgrey: '#a9a9a9',
  darkgreen: '#006400',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  gold: '#ffd700',
  goldenrod: '#daa520',
  gray: '#808080',
  grey: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavender: '#e6e6fa',
  lavenderblush: '#fff0f5',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgrey: '#d3d3d3',
  lightgreen: '#90ee90',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslateblue: '#8470ff',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  transparent: '#000000',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  violetred: '#d02090',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32'
};

module.exports = function (color) {
  return COLOR_MAP[color] || color;
};

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

/***/ "Po6x":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    ref: "c-scroller",
    class: _vm._weexClassProxy((_vm.afterClass) + '  cml-base cml-scroller'),
    style: _vm._cmlStyleProxy(((_vm.wrapperStyle))),
    attrs: {
      "showScrollbar": "false",
      "scrollDirection": (_vm.scrollDirection),
      "loadmoreoffset": (_vm.bottomOffset),
      "offsetAccuracy": "10"
    },
    on: {
      "loadmore": function($event) {
        _vm._cmlEventProxy($event, 'onBottom')
      },
      "scroll": function($event) {
        _vm._cmlEventProxy($event, 'onScroll')
      }
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "Q4BO":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = get;

var _index = __webpack_require__("9vSM");

var _index2 = _interopRequireDefault(_index);

var _utils = __webpack_require__("z4ZC");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function get(_ref) {
  var domainkey = _ref.domainkey,
      url = _ref.url,
      _ref$data = _ref.data,
      data = _ref$data === undefined ? {} : _ref$data,
      _ref$header = _ref.header,
      header = _ref$header === undefined ? {} : _ref$header,
      _ref$setting = _ref.setting,
      setting = _ref$setting === undefined ? { apiPrefix: (0, _utils.isNeedApiPrefix)(url) } : _ref$setting,
      _ref$resDataType = _ref.resDataType,
      resDataType = _ref$resDataType === undefined ? 'json' : _ref$resDataType;

  var media = "build";
  domainkey = domainkey || "apiPrefix";
  // 兼容mock-api
  if (media === 'dev') {
    if (url.indexOf('?') === -1) {
      url += '?';
    }
    url += (0, _utils.queryStringify)({ domainkey: domainkey });
  }
  if (setting.apiPrefix) {
    url = (0, _utils.addApiPrefix)(url, domainkey);
  }
  if (data && !(0, _utils.isEmpty)(data) && (0, _utils.queryStringify)(data)) {
    if (url.indexOf('?') === -1) {
      url += '?';
    }
    url += (0, _utils.queryStringify)(data);
  }

  return new Promise(function (resolve, reject) {
    _index2.default.request({
      url: url,
      body: '',
      method: 'GET',
      setting: setting,
      headers: header,
      cb: function cb(res) {
        var status = res.status,
            data = res.data;

        if (status >= 200 && status < 300) {
          if (resDataType === 'json') {
            data = (0, _utils.tryJsonParse)(data);
          }
          resolve(data);
        } else {
          reject('http statusCode:' + status);
        }
      }
    });
  });
}

/***/ }),

/***/ "QhbD":
/***/ (function(module, exports, __webpack_require__) {

var color = __webpack_require__("NqBF");
var utils = __webpack_require__("Wh0r");

/**
 * 处理映射表
 *
 * @type {Object}
 */
var HANDLE_MAP = {
  directions: ['top', 'right', 'bottom', 'left'],
  angles: ['top-left', 'top-right', 'bottom-right', 'bottom-left'],
  borderAttributes: ['style', 'width', 'color'],
  backgroundAttributes: ['color', 'position', 'size', 'repeat', 'origin', 'clip', 'attachment', 'image'],
  flexAttributes: ['direction', 'wrap']
};

/**
 * 获取声明列表
 *
 * @param  {string} tpl   声明模板
 * @param  {string} value 声明值
 * @param  {string} type  声明类型
 * @return {Array}        声明列表
 */
var getDeclarations = function getDeclarations(tpl, value, type) {
  var declarations = [];
  tpl.replace(/\${(.*)}/g, function (match, varible) {
    declarations = HANDLE_MAP[varible + 's'].map(function (item) {
      var val = value;

      if (type == 'margin' || type == 'padding') {
        val = getBoxValues(value)[item];
      } else if (varible == 'borderAttribute') {
        val = getBorderValues(value)[item];
      } else if (varible == 'backgroundAttribute') {
        val = getBackgroundValues(value)[item];
      } else if (varible == 'flexAttribute') {
        val = getFlexValues(value)[item];
      } else if (varible == 'angle') {
        val = getBorderRadiusValues(value)[item];
      } else {
        val = value;
      }

      if (val) {
        return {
          type: 'declaration',
          property: tpl.replace(/\${.*}/g, item),
          value: val
        };
      } else {
        return null;
      }
    }).filter(function (declaration) {
      return declaration;
    });
  });

  return declarations;
};

var getValueSegs = function getValueSegs(value) {
  var vals = value.replace(/\s*,\s*/g, ',').split(/\s+/);
  return vals.map(color);
};

/**
 * 获取边框样式值
 *
 * @param  {string} value 边框样式值
 * @return {Object}       边框样式表
 */
var getBorderValues = function getBorderValues(value) {
  var result = {};
  var vals = getValueSegs(value);

  vals.forEach(function (val) {
    if (/^(solid|dashed|dotted|none)/g.test(val)) {
      result.style = val;
    } else if (/^(0(px)?|[0-9]+px)/g.test(val)) {
      result.width = val;
    } else if (/^(#[0-9a-fA-F]*|rgba?\(.*?\))/g.test(val)) {
      result.color = val;
    }
  });

  return result;
};

var getFlexValues = function getFlexValues(value) {
  var result = {};
  var vals = getValueSegs(value);

  if (vals.length == 2) {
    result = {
      direction: 'inherit',
      wrap: 'inherit'
    };
  }

  var directions = ['row', 'row-reverse', 'column', 'column-reverse', 'initial', 'initial'];
  var wraps = ['nowrap', 'wrap', 'wrap-reverse', 'initial', 'initial'];

  vals.forEach(function (val, index) {
    if (index == 0 && directions.indexOf(val) > -1) {
      result.direction = val;
    } else if (index == 1 && wraps.indexOf(val) > -1) {
      result.wrap = val;
    }
  });

  return result;
};

/**
 * 获取box样式值
 *
 * @param  {string} value box样式值
 * @return {Object}       box样式表
 */
var getBoxValues = function getBoxValues(value) {
  var vals = getValueSegs(value);

  if (vals.length == 1) {
    return {
      top: vals[0],
      right: vals[0],
      bottom: vals[0],
      left: vals[0]
    };
  } else if (vals.length == 2) {
    return {
      top: vals[0],
      right: vals[1],
      bottom: vals[0],
      left: vals[1]
    };
  } else if (vals.length == 3) {
    return {
      top: vals[0],
      right: vals[1],
      bottom: vals[2],
      left: vals[1]
    };
  } else if (vals.length == 4) {
    return {
      top: vals[0],
      right: vals[1],
      bottom: vals[2],
      left: vals[3]
    };
  } else {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
};

var getBorderRadiusValues = function getBorderRadiusValues(value) {
  var results = [];

  var vals = value.split('/');

  vals.forEach(function (val) {
    var vals = getValueSegs(value);
    var result = void 0;
    if (vals.length == 1) {
      result = {
        'top-left': vals[0],
        'top-right': vals[0],
        'bottom-right': vals[0],
        'bottom-left': vals[0]
      };
    } else if (vals.length == 2) {
      result = {
        'top-left': vals[0],
        'top-right': vals[1],
        'bottom-right': vals[0],
        'bottom-left': vals[1]
      };
    } else if (vals.length == 3) {
      result = {
        'top-left': vals[0],
        'top-right': vals[1],
        'bottom-right': vals[2],
        'bottom-left': vals[1]
      };
    } else if (vals.length == 4) {
      result = {
        'top-left': vals[0],
        'top-right': vals[1],
        'bottom-right': vals[2],
        'bottom-left': vals[3]
      };
    }
    results.push(result);
  });
  var result = {};
  results.forEach(function (current) {
    ['top-left', 'top-right', 'bottom-right', 'bottom-left'].forEach(function (key) {
      if (!result[key]) {
        result[key] = current[key];
      } else {
        result[key] += ' ' + current[key];
      }
    });
  });

  return result;
};

/**
 * 获取background样式值
 *
 * @param  {string} value 背景样式值
 * @return {Object}       背景样式表
 */
var getBackgroundValues = function getBackgroundValues(value) {
  var result = {};
  var vals = getValueSegs(value);
  var positionEnd = false;
  /* eslint-disable */
  vals.forEach(function (val) {
    if (/#[0-9a-fA-F]*|rgba?\(.*?\)/g.test(val)) {
      result.color = val;
    } else if (/^url\(.*\)/g.test(val)) {
      result.image = val;
    } else if (/^(repeat|repeat-x|repeat-y|no-repeat)/g.test(val)) {
      result.repeat = val;
    } else if (/^(padding\-box|border\-box|content\-box)/g.test(val) && !result.origin) {
      result.origin = val;
    } else if (/^(padding\-box|border\-box|content\-box)/g.test(val)) {
      result.clip = val;
    } else if (/^(top|center|bottom|left|right|[0-9.]+(px|%))/g.test(val) && !positionEnd) {
      result.position = !result.position ? val : result.position + ' ' + val;
    } else if (/\//g.test(val)) {
      positionEnd = true;
    } else if (/^(top|center|bottom|left|right|[0-9.]+(px|%))/g.test(val)) {
      result.size = !result.size ? val : result.size + ' ' + val;
    } else if (/^(scroll|fixed)/g.test(val)) {
      result.attachment = val;
    }
  });
  /* eslint-disable */
  return result;
};

var parse = function parse(style) {
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
    return convert(declaration).map(function (declaration) {
      return declaration.property + ': ' + declaration.value;
    }).join(';');
  }).join(';');
};

var convert = function convert(declaration) {
  var declarations = [];
  var property = declaration.property,
      value = declaration.value;

  value = value.replace(/(\d*\.?\d+)cpx/gi, function (m, $1, $2) {
    return $1 + "px";
  });

  switch (property) {
    case 'margin':
      declarations = getDeclarations('margin-${direction}', value, property);
      break;
    case 'padding':
      declarations = getDeclarations('padding-${direction}', value, property);
      break;
    case 'background':
      declarations = getDeclarations('background-${backgroundAttribute}', value, property);
      break;
    case 'border':
    case 'border-top':
    case 'border-right':
    case 'border-bottom':
    case 'border-left':
      declarations = getDeclarations(property + '-${borderAttribute}', value, property);
      break;
    case 'border-style':
      declarations = getDeclarations('border-${direction}-style', value, property);
      break;
    case 'border-width':
      declarations = getDeclarations('border-${direction}-width', value);
      break;
    case 'border-color':
      declarations = getDeclarations('border-${direction}-color', value);
      break;
    case 'border-radius':
      declarations = getDeclarations('border-${angle}-radius', value, property);
      break;
    case 'flex-flow':
      declarations = getDeclarations('flex-${flexAttribute}', value, property);
      break;
    default:
      declarations = [{
        type: 'declaration',
        property: property,
        value: getValueSegs(value).join(' ')
      }];
      break;
  }
  return declarations;
};

module.exports = {
  convert: convert,
  parse: parse
};

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

/***/ "RGNC":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inSDK;

var _index = __webpack_require__("FoMl");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inSDK() {
  return _index2.default.inSDK();
}

/***/ }),

/***/ "Rdwb":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
    key: 'getStorage',
    value: function getStorage(key, cb) {
      if ((0, _env.inSDK)()) {
        _cmlBridge2.default.getStorage({ key: key }, function (res) {
          var errno = res.errno,
              _res$msg = res.msg,
              msg = _res$msg === undefined ? '' : _res$msg,
              data = res.data;

          if (data && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) == 'object') {
            data = JSON.stringify(data);
          }
          cb({
            errno: errno,
            errMsg: msg,
            data: data
          });
        });
      } else {
        var storage = weex.requireModule('storage');
        storage.getItem(key, function (e) {
          if (e.result === 'success') {
            cb({
              errno: 0,
              errMsg: '',
              data: e.data
            });
          } else {
            cb({
              errno: -1,
              errMsg: '获取失败或未存储',
              data: ''
            });
          }
        });
      }
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "RoY7":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRect;

var _index = __webpack_require__("jzoE");

var _index2 = _interopRequireDefault(_index);

var _utils = __webpack_require__("z4ZC");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRect(ref, context) {
  return new Promise(function (resolve, reject) {
    var refObj = (0, _utils.getRefObj)(ref, context);
    _index2.default.getRect(refObj, function (res) {
      resolve(res);
    });
  });
}

/***/ }),

/***/ "RtXD":
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

/***/ "RtyP":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = exports.Page = exports.App = undefined;

var _instance = __webpack_require__("j32x");

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

var _render = __webpack_require__("evHt");

var _render2 = _interopRequireDefault(_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/***/ "Rx0g":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = setStorage;

var _index = __webpack_require__("kyQH");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setStorage(key, value) {
  var valueType = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  if (valueType !== 'string') {
    value = JSON.stringify(value);
  }
  if (valueType === 'undefined') {
    console.warn('The type of storage value can not be "undefined"');
    return Promise.reject('The type of storage value cannot be "undefined"');
  }
  return new Promise(function (resolve, reject) {
    _index2.default.setStorage(key, value, function (res) {
      if (res.errno === 0) {
        resolve(res.data);
      } else {
        reject(res.errMsg);
      }
    });
  });
}

/***/ }),

/***/ "SkeF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , undef;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    if (key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = []
    , value
    , key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(value));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


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

/***/ "TC8s":
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
    key: 'redirectTo',
    value: function redirectTo(opt) {
      var runtime = __webpack_require__("1HDH").default;

      opt.query = (0, _utils.queryParse)(opt.query);

      var _runtime$getInfo = runtime.getInfo(),
          router = _runtime$getInfo.router;

      var path = opt.path,
          query = opt.query;


      router.replace({
        path: path,
        query: query
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "THig":
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
    key: 'confirm',
    value: function confirm(opt, successCallBack, failCallBack) {
      if ((0, _env.inSDK)()) {
        _cmlBridge2.default.confirm(opt, function (res) {
          if (res.errno == 0) {
            successCallBack(res.data);
          } else {
            failCallBack();
          }
        });
      } else {
        var modal = weex.requireModule('modal');
        var _message = opt.message,
            _confirmTitle = opt.confirmTitle,
            _cancelTitle = opt.cancelTitle;

        modal.confirm({
          message: _message,
          okTitle: _confirmTitle,
          cancelTitle: _cancelTitle
        }, function (value) {
          successCallBack(value);
        });
      }
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

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

/***/ "U/mm":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cmlBridge = __webpack_require__("8D69");

var _cmlBridge2 = _interopRequireDefault(_cmlBridge);

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'reload',
    value: function reload() {
      _cmlBridge2.default.reload({});
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "UgjY":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _call = __webpack_require__("Mqar");

var _listen = __webpack_require__("GW3J");

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

/***/ "V8yL":
/***/ (function(module, exports) {

module.exports = {
  "border-1px": {
    "borderStyle": "solid",
    "borderWidth": "1",
    "borderColor": "#cccccc"
  },
  "border-top-1px": {
    "borderTopStyle": "solid",
    "borderTopWidth": "1",
    "borderTopColor": "#cccccc"
  },
  "border-right-1px": {
    "borderRightStyle": "solid",
    "borderRightWidth": "1",
    "borderRightColor": "#cccccc"
  },
  "border-bottom-1px": {
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1",
    "borderBottomColor": "#cccccc"
  },
  "border-left-1px": {
    "borderLeftStyle": "solid",
    "borderLeftWidth": "1",
    "borderLeftColor": "#cccccc"
  },
  "index-list-wrapper": {
    "width": "750",
    "height": "1200"
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

/***/ "Wkwn":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('list', {
    staticClass: ["index-list"],
    style: {
      height: _vm.height + 'px'
    }
  }, [_c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_vm._t("head")], 2), _vm._l((_vm.formatList), function(v, i) {
    return _c('cell', {
      key: i,
      ref: 'index-item-title-' + v.title,
      refInFor: true,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [(!_vm.onlyShowList) ? _c('text', {
      class: ['index-list-title', v.type && v.type == 'group' && 'group-title'],
      style: _vm.headerStyle
    }, [_vm._v(_vm._s(v.title))]) : _vm._e(), (v.type && v.type === 'group' && !_vm.onlyShowList) ? _c('div', {
      staticClass: ["group"],
      style: _vm.groupWrapStyle
    }, _vm._l((v.data), function(group, index) {
      return _c('div', {
        key: index,
        staticClass: ["group-list"]
      }, _vm._l((group), function(item, i) {
        return _c('div', {
          key: i,
          staticClass: ["group-item"],
          style: _vm.groupItemStyle,
          attrs: {
            "accessible": true,
            "ariaLabel": ((item.name) + "," + (item.desc?item.desc:''))
          },
          on: {
            "click": function($event) {
              _vm.itemClicked(item)
            }
          }
        }, [(item.isLocation) ? _c('image', {
          staticClass: ["location-icon"],
          attrs: {
            "src": "https://gw.alicdn.com/tfs/TB1JUiUPFXXXXXUXXXXXXXXXXXX-32-32.png"
          }
        }) : _vm._e(), _c('div', [_c('text', {
          staticClass: ["item-name"],
          style: _vm.groupItemTextStyle
        }, [_vm._v(_vm._s(item.name))]), (item.desc) ? _c('text', {
          staticClass: ["item-desc"],
          style: _vm.groupItemDescStyle
        }, [_vm._v(_vm._s(item.desc))]) : _vm._e()])])
      }))
    })) : _vm._e(), (v.type === 'list') ? _c('div', _vm._l((v.data), function(item, index) {
      return _c('div', {
        key: index,
        staticClass: ["index-list-item"],
        style: _vm.itemStyle,
        attrs: {
          "accessible": true,
          "ariaLabel": ((item.name) + "," + (item.desc?item.desc:''))
        },
        on: {
          "click": function($event) {
            _vm.itemClicked(item)
          }
        }
      }, [_c('text', {
        staticClass: ["title"],
        style: _vm.itemTextStyle
      }, [_vm._v(_vm._s(item.name))]), _c('text', {
        staticClass: ["desc"],
        style: _vm.itemDescStyle
      }, [_vm._v(_vm._s(item.desc))])])
    })) : _vm._e()])
  }), (_vm.isIPhoneX) ? _c('cell', {
    staticClass: ["iphone-x"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }) : _vm._e()], 2), (_vm.showIndex && !_vm.onlyShowList) ? _c('div', {
    staticClass: ["index-list-nav"],
    style: _vm.navStyle
  }, _vm._l((_vm.formatList), function(item, index) {
    return _c('text', {
      key: index,
      staticClass: ["list-nav-key"],
      style: _vm.navTextStyle,
      attrs: {
        "title": item.title
      },
      on: {
        "click": function($event) {
          _vm.go2Key(item.title)
        }
      }
    }, [_vm._v(_vm._s(item.title))])
  })) : _vm._e(), (_vm.popKeyShow) ? _c('div', {
    staticClass: ["index-list-pop"],
    style: _vm.popStyle
  }, [_c('text', {
    staticClass: ["list-pop-text"],
    style: _vm.popTextStyle
  }, [_vm._v(_vm._s(_vm.popKey))])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

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

/***/ "XFow":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_url_parse__ = __webpack_require__("dyOy");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_url_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_url_parse__);
/**
 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
 * Created by Tw93 on 17/11/01
 */



const Utils = {
  UrlParser: __WEBPACK_IMPORTED_MODULE_0_url_parse___default.a,
  _typeof (obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  },
  isPlainObject (obj) {
    return Utils._typeof(obj) === 'object';
  },
  isString (obj) {
    return typeof (obj) === 'string';
  },
  isNonEmptyArray (obj = []) {
    return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
  },
  isObject (item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
  },
  isEmptyObject (obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },
  decodeIconFont (text) {
    // 正则匹配 图标和文字混排 eg: 我去上学校&#xe600;,天天不&#xe600;迟到
    const regExp = /&#x[a-z|0-9]{4,5};?/g;
    if (regExp.test(text)) {
      return text.replace(new RegExp(regExp, 'g'), function (iconText) {
        const replace = iconText.replace(/&#x/, '0x').replace(/;$/, '');
        return String.fromCharCode(replace);
      });
    } else {
      return text;
    }
  },
  mergeDeep (target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();
    if (Utils.isObject(target) && Utils.isObject(source)) {
      for (const key in source) {
        if (Utils.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, {
              [key]: {}
            });
          }
          Utils.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }
    return Utils.mergeDeep(target, ...sources);
  },
  appendProtocol (url) {
    if (/^\/\//.test(url)) {
      const {
        bundleUrl
      } = weex.config;
      return `http${/^https:/.test(bundleUrl) ? 's' : ''}:${url}`;
    }
    return url;
  },
  encodeURLParams (url) {
    const parsedUrl = new __WEBPACK_IMPORTED_MODULE_0_url_parse___default.a(url, true);
    return parsedUrl.toString();
  },
  goToH5Page (jumpUrl, animated = false, callback = null) {
    const Navigator = weex.requireModule('navigator');
    const jumpUrlObj = new Utils.UrlParser(jumpUrl, true);
    const url = Utils.appendProtocol(jumpUrlObj.toString());
    Navigator.push({
      url: Utils.encodeURLParams(url),
      animated: animated.toString()
    }, callback);
  },
  env: {
    isTaobao () {
      const { appName } = weex.config.env;
      return /(tb|taobao|淘宝)/i.test(appName);
    },
    isTrip () {
      const { appName } = weex.config.env;
      return appName === 'LX';
    },
    isBoat () {
      const { appName } = weex.config.env;
      return appName === 'Boat' || appName === 'BoatPlayground';
    },
    isWeb () {
      const { platform } = weex.config.env;
      return typeof (window) === 'object' && platform.toLowerCase() === 'web';
    },
    isIOS () {
      const { platform } = weex.config.env;
      return platform.toLowerCase() === 'ios';
    },
    /**
     * 是否为 iPhone X or iPhoneXS or iPhoneXR or iPhoneXS Max
     * @returns {boolean}
     */
    isIPhoneX () {
      const { deviceHeight } = weex.config.env;
      if (Utils.env.isWeb()) {
        return typeof window !== undefined && window.screen && window.screen.width && window.screen.height 
        && ((parseInt(window.screen.width, 10) === 375) && (parseInt(window.screen.height, 10) === 812)
        || (parseInt(window.screen.width, 10) === 414) && (parseInt(window.screen.height, 10) === 896));
      }
      return Utils.env.isIOS() && (deviceHeight === 2436 || deviceHeight === 2688 || deviceHeight == 1792);
    },
    isAndroid () {
      const { platform } = weex.config.env;
      return platform.toLowerCase() === 'android';
    },
    isAlipay () {
      const { appName } = weex.config.env;
      return appName === 'AP';
    },
    isTmall () {
      const { appName } = weex.config.env;
      return /(tm|tmall|天猫)/i.test(appName);
    },
    isAliWeex () {
      return Utils.env.isTmall() || Utils.env.isTrip() || Utils.env.isTaobao();
    },
    /**
     * 获取weex屏幕真实的设置高度，需要减去导航栏高度
     * @returns {Number}
     */
    getPageHeight () {
      const { env } = weex.config;
      const navHeight = Utils.env.isWeb() ? 0 : (Utils.env.isIPhoneX() ? 176 : 132);
      return env.deviceHeight / env.deviceWidth * 750 - navHeight;
    },
    /**
     * 获取weex屏幕真实的设置高度
     * @returns {Number}
     */
    getScreenHeight () {
      const { env } = weex.config;
      return env.deviceHeight / env.deviceWidth * 750;
    }
  },

  /**
   * 版本号比较
   * @memberOf Utils
   * @param currVer {string}
   * @param promoteVer {string}
   * @returns {boolean}
   * @example
   *
   * const { Utils } = require('@ali/wx-bridge');
   * const { compareVersion } = Utils;
   * console.log(compareVersion('0.1.100', '0.1.11')); // 'true'
   */
  compareVersion (currVer = '0.0.0', promoteVer = '0.0.0') {
    if (currVer === promoteVer) return true;
    const currVerArr = currVer.split('.');
    const promoteVerArr = promoteVer.split('.');
    const len = Math.max(currVerArr.length, promoteVerArr.length);
    for (let i = 0; i < len; i++) {
      const proVal = ~~promoteVerArr[i];
      const curVal = ~~currVerArr[i];
      if (proVal < curVal) {
        return true;
      } else if (proVal > curVal) {
        return false;
      }
    }
    return false;
  },
  /**
   * 分割数组
   * @param arr 被分割数组
   * @param size 分割数组的长度
   * @returns {Array}
   */
  arrayChunk (arr = [], size = 4) {
    let groups = [];
    if (arr && arr.length > 0) {
      groups = arr.map((e, i) => {
        return i % size === 0 ? arr.slice(i, i + size) : null;
      }).filter(e => {
        return e;
      });
    }
    return groups;
  },
  /*
   * 截断字符串
   * @param str 传入字符串
   * @param len 截断长度
   * @param hasDot 末尾是否...
   * @returns {String}
   */
  truncateString (str, len, hasDot = true) {
    let newLength = 0;
    let newStr = '';
    let singleChar = '';
    const chineseRegex = /[^\x00-\xff]/g;
    const strLength = str.replace(chineseRegex, '**').length;
    for (let i = 0; i < strLength; i++) {
      singleChar = str.charAt(i).toString();
      if (singleChar.match(chineseRegex) !== null) {
        newLength += 2;
      } else {
        newLength++;
      }
      if (newLength > len) {
        break;
      }
      newStr += singleChar;
    }

    if (hasDot && strLength > len) {
      newStr += '...';
    }
    return newStr;
  },
  /*
   * 转换 obj 为 url params参数
   * @param obj 传入字符串
   * @returns {String}
   */
  objToParams (obj) {
    let str = "";
    for (let key in obj) {
      if (str !== "") {
        str += "&";
      }
      str += key + "=" + encodeURIComponent(obj[key]);
    }
    return str;
  },
  /*
   * 转换 url params参数为obj
   * @param str 传入url参数字符串
   * @returns {Object}
   */
  paramsToObj (str) {
    let obj = {};
    try {
      obj = JSON.parse('{"' + decodeURI(str).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
    } catch (e) {
      console.log(e);
    }
    return obj;
  },
  animation: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param ref
     * @param transform 运动类型
     * @param status
     * @param callback 回调函数
     */
    pageTransitionAnimation (ref, transform, status, callback) {
      const animation = weex.requireModule('animation');
      animation.transition(ref, {
        styles: {
          transform: transform
        },
        duration: status ? 250 : 300, // ms
        timingFunction: status ? 'ease-in' : 'ease-out',
        delay: 0 // ms
      }, function () {
        callback && callback();
      });
    }
  },
  uiStyle: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param animationType 页面转场动画的类型 push，model
     * @param size 分割数组的长度
     * @returns {}
     */
    pageTransitionAnimationStyle (animationType) {
      if (animationType === 'push') {
        return {
          left: '750px',
          top: '0px',
          height: (weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750) + 'px'
        }
      } else if (animationType === 'model') {
        return {
          top: (weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750) + 'px',
          left: '0px',
          height: (weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750) + 'px'
        }
      }
      return {}
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Utils);


/***/ }),

/***/ "Xxa5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1H6C");


/***/ }),

/***/ "Ycaq":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm._weexClassProxy('page-wrapper  cml-base cml-view')
  }, [_c('cml-buildin-scroller', {
    class: _vm._weexClassProxy('index-list-wrapper  cml-base cml-scroller'),
    attrs: {
      "height": (-1),
      "scrollTop": (_vm.offsetTop)
    },
    on: {
      "onscroll": function($event) {
        _vm._cmlEventProxy($event, 'handleScroll')
      }
    }
  }, _vm._l((_vm.list), function(listitem, index) {
    return _c('div', {
      class: _vm._weexClassProxy('index-list-item  cml-base cml-view')
    }, [_c('div', {
      class: _vm._weexClassProxy('index-list-item-name  cml-base cml-view'),
      style: _vm._cmlStyleProxy(((_vm.compItemNameHeight)))
    }, [_c('text', {
      class: _vm._weexClassProxy('index-list-item-name-text  cml-base cml-text')
    }, [_vm._v(_vm._s(listitem.name))])]), _vm._l((listitem.items), function(subitem, index) {
      return _c('div', {
        class: _vm._weexClassProxy('index-list-item-content  cml-base cml-view'),
        style: _vm._cmlStyleProxy(((_vm.compItemContentHeight))),
        on: {
          "click": function($event) {
            _vm._cmlInlineStatementEventProxy('handleSelect', subitem)
          }
        }
      }, [_c('text', {
        class: _vm._weexClassProxy('index-list-item-content-text  cml-base cml-text')
      }, [_vm._v(" " + _vm._s(subitem.name))])])
    })], 2)
  })), _c('div', {
    class: _vm._weexClassProxy('short-cut-wrapper  cml-base cml-view'),
    style: _vm._cmlStyleProxy(((_vm.compScwStyle)))
  }, _vm._l((_vm.shortcut), function(item, index) {
    return _c('div', {
      class: _vm._weexClassProxy('short-cut-item  cml-base cml-view'),
      on: {
        "click": function($event) {
          _vm._cmlInlineStatementEventProxy('scrollToItem', item)
        }
      }
    }, [_c('text', {
      class: _vm._weexClassProxy('short-cut-item-text  cml-base cml-text'),
      style: _vm._cmlStyleProxy(((_vm.activeIndex === index ? 'color:orange' : '')))
    }, [_vm._v(_vm._s(item))])])
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "Z7cO":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = request;

var _index = __webpack_require__("9vSM");

var _index2 = _interopRequireDefault(_index);

var _utils = __webpack_require__("z4ZC");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 为支持 DELETE / PUT 方法增加此方法
function request(_ref) {
  var domainkey = _ref.domainkey,
      url = _ref.url,
      _ref$data = _ref.data,
      data = _ref$data === undefined ? {} : _ref$data,
      _ref$method = _ref.method,
      method = _ref$method === undefined ? 'GET' : _ref$method,
      _ref$header = _ref.header,
      header = _ref$header === undefined ? {} : _ref$header,
      _ref$contentType = _ref.contentType,
      contentType = _ref$contentType === undefined ? 'form' : _ref$contentType,
      _ref$setting = _ref.setting,
      setting = _ref$setting === undefined ? { apiPrefix: (0, _utils.isNeedApiPrefix)(url) } : _ref$setting,
      _ref$resDataType = _ref.resDataType,
      resDataType = _ref$resDataType === undefined ? 'json' : _ref$resDataType;

  var media = "build";
  domainkey = domainkey || "apiPrefix";
  // 兼容mock-api
  if (media === 'dev') {
    if (url.indexOf('?') === -1) {
      url += '?';
    }
    url += (0, _utils.queryStringify)({ domainkey: domainkey });
  }
  if (setting.apiPrefix) {
    url = (0, _utils.addApiPrefix)(url, domainkey);
  }
  if (/get/gi.test(method)) {
    if (data && !(0, _utils.isEmpty)(data) && (0, _utils.queryStringify)(data)) {
      if (url.indexOf('?') === -1) {
        url += '?';
      }
      url += (0, _utils.queryStringify)(data);
    }
  }
  switch (contentType) {
    case 'form':
      data = (0, _utils.queryStringify)(data);
      header = _extends({}, header, {
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      break;
    case 'json':
      data = JSON.stringify(data);
      header = _extends({}, header, {
        'Content-Type': 'application/json'
      });
      break;
  }

  return new Promise(function (resolve, reject) {
    _index2.default.request({
      url: url,
      body: data,
      setting: setting,
      method: method,
      headers: header,
      cb: function cb(res) {
        var status = res.status,
            data = res.data;

        if (status >= 200 && status < 300) {
          if (resDataType === 'json') {
            data = (0, _utils.tryJsonParse)(data);
          }
          resolve(data);
        } else {
          reject('http statusCode:' + status);
        }
      }
    });
  });
}

/***/ }),

/***/ "ZZp4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__("akQm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__index_vue___default.a; });



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

// 定义模块的interface
var router = void 0,
    routerConfig = void 0,
    app = void 0,
    store = void 0;
/* istanbul ignore next */

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'bootstrap',
    value: function bootstrap(options) {
      /*global Vue*/
      (0, _utils.validOptions)(options);

      options.createVM = options.createVM === false ? false : true;
      app = options.app;
      router = options.router;
      routerConfig = options.routerConfig;
      store = options.store;

      var vueOptions = { el: '#root', router: router, store: store };

      if (options.createVM) {
        var cmlApi = __webpack_require__("DzjB").default;
        var launchOpt = cmlApi.getLaunchOptionsSync();
        var path = launchOpt.query.path;

        new Vue(Vue.util.extend(vueOptions, app));
        cmlApi.navigateTo({
          path: path
        });
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

/***/ "akQm":
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__("f/mD")
)

/* script */
__vue_exports__ = __webpack_require__("lZ4d")

/* template */
var __vue_template__ = __webpack_require__("Wkwn")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/GongLei/Desktop/test/cml-indexlist/node_modules/weex-ui/packages/wxc-indexlist/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-fcacda04"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


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

/***/ "bGYz":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("jVJD");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var exportMiddleWare = _index2.default.exportMiddleWare,
    checkNumber = _index2.default.checkNumber,
    checkString = _index2.default.checkString;


var id = 0;

// 可用options
var STYLES = [{ key: 'width', type: 'number' }, { key: 'height', type: 'number' }, { key: 'opacity', type: 'number' }, { key: 'backgroundColor', type: 'string' }, // 16进制数值
{ key: 'translate', type: 'number' }, // web不支持
{ key: 'translateX', type: 'number' }, { key: 'translateY', type: 'number' }, { key: 'scale', type: 'number' }, // web不支持
{ key: 'scaleX', type: 'number' }, { key: 'scaleY', type: 'number' },
// {key:'skew', type: 'string'}, //weex不支持
// {key:'skewX', type: 'string'},
// {key:'skewY', type: 'string'},
// 暂时不支持校验，因为cml底层不支持校验多种类型
{ key: 'rotate', type: '' }, // web不支持,
{ key: 'rotateX', type: '' }, { key: 'rotateY', type: '' }, { key: 'transform', type: 'string' }];
// 可用descriptions
// const DESCRIPTIONS = [
//   'duration',
//   'timingFunction',
//   'delay',
//   'transformOrigin',
//   'cb'
// ];

var utils = {
  // 将styles的值 变为原型上的方法
  enhanceAnimationPrototype: function enhanceAnimationPrototype(target, styles) {
    var transformProps = Array.isArray(styles) ? styles : Object.keys(styles);
    transformProps.forEach(function (item) {
      target[item.key] = function () {
        for (var _len = arguments.length, style = Array(_len), _key = 0; _key < _len; _key++) {
          style[_key] = arguments[_key];
        }

        // 校验类型
        if (item.type === 'number') {
          checkNumber(style[0]);
        } else if (item.type === 'string') {
          checkString(style[0]);
        }
        this.styles[item.key] = style;
        return this;
      };
    }, this);
  }
};

var createAnimationFactory = function createAnimationFactory() {
  var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var updateQueue = [];
  // let stashQueue = [];

  this.id = id;
  id = id + 1;

  this.descriptions = description;

  this.styles = {};

  // 判断用户是否使用export
  this.useExport = '0';

  this.enqueue = function (param) {
    updateQueue.push(param);
  };

  this["export"] = function () {
    this.useExport = '1';

    var result = exportMiddleWare({
      id: this.id,
      useExport: this.useExport,
      updateQueue: [].concat(_toConsumableArray(updateQueue))
    });
    // 清空
    updateQueue = [];
    this.useExport = '0';
    return result;
  };

  // 此操作与重新构建类重复
  // this.reset = function() {
  //   updateQueue = [];
  // }
  // 暂存
  // this.stash = function() {
  //   stashQueue = [...updateQueue];
  // };

  // this.stashExport = function() {
  //   this.useExport = '1';

  //   const result = exportMiddleWare({
  //     id: this.id,
  //     useExport: this.useExport,
  //     updateQueue: [...updateQueue]
  //   });
  //   // 清空
  //   this.useExport = '0';
  //   stashQueue = [];
  //   return result;
  // };
};

createAnimationFactory.prototype = {
  clear: function clear() {
    this.styles = {};
    this.descriptions = {};
    return this;
  },

  styles: function styles(_styles) {
    this.styles = Object.assign({}, this.styles, _styles);
    return this;
  },

  step: function step(descriptions) {
    this.enqueue({
      styles: this.styles,
      descriptions: Object.assign({ cb: function cb() {
          return false;
        }, duration: 400 }, this.descriptions, descriptions)
    });
    this.clear();
    return this;
  }
};

utils.enhanceAnimationPrototype(createAnimationFactory.prototype, STYLES);

exports.default = createAnimationFactory;

/***/ }),

/***/ "bHvN":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = post;

var _index = __webpack_require__("9vSM");

var _index2 = _interopRequireDefault(_index);

var _utils = __webpack_require__("z4ZC");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// contentType 支持json和form 不支持formdata body不知道如何处理
function post(_ref) {
  var domainkey = _ref.domainkey,
      url = _ref.url,
      _ref$data = _ref.data,
      data = _ref$data === undefined ? {} : _ref$data,
      _ref$header = _ref.header,
      header = _ref$header === undefined ? {} : _ref$header,
      _ref$contentType = _ref.contentType,
      contentType = _ref$contentType === undefined ? 'form' : _ref$contentType,
      _ref$setting = _ref.setting,
      setting = _ref$setting === undefined ? { apiPrefix: (0, _utils.isNeedApiPrefix)(url) } : _ref$setting,
      _ref$resDataType = _ref.resDataType,
      resDataType = _ref$resDataType === undefined ? 'json' : _ref$resDataType;

  var media = "build";
  domainkey = domainkey || "apiPrefix";
  if (media === 'dev') {
    if (url.indexOf('?') === -1) {
      url += '?';
    }
    url += (0, _utils.queryStringify)({ domainkey: domainkey });
  }
  if (setting.apiPrefix) {
    url = (0, _utils.addApiPrefix)(url, domainkey);
  }
  switch (contentType) {
    case 'form':
      data = (0, _utils.queryStringify)(data);
      header = _extends({}, header, {
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      break;
    case 'json':
      data = JSON.stringify(data);
      header = _extends({}, header, {
        'Content-Type': 'application/json'
      });
      break;
  }

  return new Promise(function (resolve, reject) {
    _index2.default.request({
      url: url,
      body: data,
      setting: setting,
      method: 'POST',
      headers: header,
      cb: function cb(res) {
        var status = res.status,
            data = res.data,
            headers = res.headers;

        if (status >= 200 && status < 300) {
          if (resDataType === 'json') {
            data = (0, _utils.tryJsonParse)(data);
          }
          resolve(data);
        } else {
          reject('http statusCode:' + status);
        }
      }
    });
  });
}

/***/ }),

/***/ "bpnX":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = navigateBack;

var _index = __webpack_require__("eCbU");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function navigateBack() {
  var backPageNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

  _index2.default.navigateBack(backPageNum);
}

/***/ }),

/***/ "c0s4":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("jVJD");

var _index2 = _interopRequireDefault(_index);

var _createAnimationFactory = __webpack_require__("bGYz");

var _createAnimationFactory2 = _interopRequireDefault(_createAnimationFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.initAnimation();

exports.default = function (description) {
  return new _createAnimationFactory2.default(description);
};

/***/ }),

/***/ "clyH":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getClipBoardData;

var _index = __webpack_require__("4WzV");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getClipBoardData() {
  return new Promise(function (resolve, reject) {
    _index2.default.getClipBoardData(function (res) {
      if (res.errno === 0) {
        resolve(res.data);
      } else {
        reject(res.msg);
      }
    });
  });
}

/***/ }),

/***/ "d1LM":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
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

/***/ }),

/***/ "d9nG":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _BaseCtor2 = __webpack_require__("yVTO");

var _BaseCtor3 = _interopRequireDefault(_BaseCtor2);

var _lifecycle = __webpack_require__("wbAX");

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _OptTransformer = __webpack_require__("rDCK");

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

    _this.cmlType = 'weex';

    _this.initOptTransformer(_OptTransformer2.default, {
      type: 'app',
      hooks: _lifecycle2.default.get('cml.hooks')
    });
    return _this;
  }

  return App;
}(_BaseCtor3.default);

/***/ }),

/***/ "dLYe":
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__("IWA1")
)

/* script */
__vue_exports__ = __webpack_require__("IB0N")

/* template */
var __vue_template__ = __webpack_require__("Po6x")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/GongLei/Desktop/test/cml-indexlist/node_modules/chameleon-ui-builtin/components/scroller/scroller.weex.cml"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-eb88ca8c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

exports.__esModule = true;
exports["default"] = __vue_exports__


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

/***/ "dyOy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var required = __webpack_require__("mgwV")
  , qs = __webpack_require__("SkeF")
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  function sanitize(address) {          // Sanitize what is left of the address
    return address.replace('\\', '/');
  },
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var globalVar;

  if (typeof window !== 'undefined') globalVar = window;
  else if (typeof global !== 'undefined') globalVar = global;
  else if (typeof self !== 'undefined') globalVar = self;
  else globalVar = {};

  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.qs = qs;

module.exports = Url;


/***/ }),

/***/ "e3yk":
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__("V8yL")
)

/* script */
__vue_exports__ = __webpack_require__("wpzS")

/* template */
var __vue_template__ = __webpack_require__("eEaO")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/GongLei/Desktop/test/cml-indexlist/src/components/indexlist/indexlist.weex.cml"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-42d0bc8c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

exports.__esModule = true;
exports["default"] = __vue_exports__


/***/ }),

/***/ "eCbU":
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
    key: "navigateBack",
    value: function navigateBack(backPageNum) {
      var runtime = __webpack_require__("1HDH").default;

      var _runtime$getInfo = runtime.getInfo(),
          router = _runtime$getInfo.router;

      router.go(backPageNum);
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "eEaO":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["cml-base", "cml-view"]
  }, [_c('div', {
    class: _vm._weexClassProxy('index-list-wrapper  cml-base cml-view')
  }, [_c('wex-indexlist', {
    staticClass: ["cml-base", "cml-wex-indexlist"],
    attrs: {
      "normalList": _vm.list
    },
    on: {
      "wxcIndexlistItemClicked": _vm.onItemSelect
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

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

/***/ "evHt":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _weexMixins = __webpack_require__("+yno");

var _weexMixins2 = _interopRequireDefault(_weexMixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.mixin(_weexMixins2.default.mixins); /*global Vue*/
exports.default = Vue;

/***/ }),

/***/ "f/mD":
/***/ (function(module, exports) {

module.exports = {
  "index-list": {
    "width": "750",
    "height": "1334"
  },
  "index-list-title": {
    "borderBottomWidth": "1",
    "borderBottomColor": "rgba(32,35,37,0.15)",
    "backgroundColor": "#FBFBFB",
    "fontSize": "24",
    "color": "#666666",
    "height": "48",
    "lineHeight": "48",
    "paddingLeft": "24",
    "width": "750"
  },
  "group-title": {
    "borderBottomWidth": 0,
    "paddingBottom": 0,
    "height": "60",
    "paddingTop": "24"
  },
  "index-list-item": {
    "width": "750",
    "flexDirection": "row",
    "alignItems": "center",
    "borderBottomWidth": "1",
    "borderBottomColor": "#e0e0e0",
    "height": "92",
    "paddingLeft": "24",
    "paddingRight": "24",
    "backgroundColor": "#FFFFFF"
  },
  "iphone-x": {
    "height": "68"
  },
  "title": {
    "fontSize": "32",
    "color": "#3D3D3D"
  },
  "desc": {
    "fontSize": "24",
    "color": "#A5A5A5",
    "marginLeft": "30"
  },
  "index-list-nav": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "marginBottom": "60",
    "marginTop": "60",
    "paddingBottom": "20",
    "paddingTop": "20",
    "width": "70"
  },
  "list-nav-key": {
    "textAlign": "center",
    "fontSize": "24",
    "height": "40",
    "color": "#666666"
  },
  "index-list-pop": {
    "position": "fixed",
    "top": "550",
    "left": "316",
    "width": "120",
    "height": "120",
    "textAlign": "center",
    "justifyContent": "center",
    "backgroundColor": "rgba(32,35,37,0.6)",
    "borderBottomLeftRadius": "60",
    "borderBottomRightRadius": "60",
    "borderTopLeftRadius": "60",
    "borderTopRightRadius": "60",
    "paddingLeft": 0,
    "paddingRight": 0,
    "paddingTop": "35",
    "paddingBottom": "35",
    "color": "#ffffff"
  },
  "list-pop-text": {
    "fontSize": "40",
    "textAlign": "center",
    "color": "#ffffff"
  },
  "group": {
    "paddingBottom": "18",
    "paddingRight": "70",
    "backgroundColor": "#FBFBFB"
  },
  "group-list": {
    "flexDirection": "row",
    "marginLeft": "18",
    "marginTop": "18"
  },
  "group-item": {
    "width": "146",
    "height": "64",
    "borderTopWidth": "1",
    "borderRightWidth": "1",
    "borderBottomWidth": "1",
    "borderLeftWidth": "1",
    "borderTopColor": "#e0e0e0",
    "borderRightColor": "#e0e0e0",
    "borderBottomColor": "#e0e0e0",
    "borderLeftColor": "#e0e0e0",
    "marginRight": "18",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "backgroundColor": "#ffffff"
  },
  "item-name": {
    "fontSize": "24",
    "lineHeight": "26",
    "color": "#333333"
  },
  "item-desc": {
    "marginTop": "2",
    "color": "#999999",
    "fontSize": "20",
    "textAlign": "center"
  },
  "location-icon": {
    "width": "32",
    "height": "32",
    "marginRight": "8"
  }
}

/***/ }),

/***/ "fnCu":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("VnQQ");

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _buttonWeex = __webpack_require__("w7a9");

var _buttonWeex2 = _interopRequireDefault(_buttonWeex);

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


exports.default.components = _extends({}, exports.default.components, { cmlBuildinButton: _buttonWeex2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "ghTG":
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

/***/ "h9Ml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeStorage;

var _index = __webpack_require__("NVdb");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function removeStorage(key) {
  return new Promise(function (resolve, reject) {
    _index2.default.removeStorage(key, function (res) {
      if (res.errno === 0) {
        resolve();
      } else {
        reject(res.errMsg);
      }
    });
  });
}

/***/ }),

/***/ "hODF":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = confirm;

var _index = __webpack_require__("THig");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function confirm(opt) {
  var _opt$message = opt.message,
      message = _opt$message === undefined ? '' : _opt$message,
      _opt$confirmTitle = opt.confirmTitle,
      confirmTitle = _opt$confirmTitle === undefined ? '确定' : _opt$confirmTitle,
      _opt$cancelTitle = opt.cancelTitle,
      cancelTitle = _opt$cancelTitle === undefined ? '取消' : _opt$cancelTitle;

  return new Promise(function (resolve, reject) {
    _index2.default.confirm({ message: message, confirmTitle: confirmTitle, cancelTitle: cancelTitle }, function (value) {
      resolve(value);
    }, function () {
      reject();
    });
  });
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

/***/ "i0PX":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cmlBridge = __webpack_require__("8D69");

var _cmlBridge2 = _interopRequireDefault(_cmlBridge);

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
      // weex 端使用titleBar组件实现， 此处不再实现
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

var dom = weex.requireModule('dom');

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'getComponentRect',
    value: function getComponentRect(param, cb) {
      dom.getComponentRect(param.ref, function (res) {
        /**
        * size:
        *  width
        *  height
        *  left
        *  top
        *  right
        *  bottom
        */
        cb(res);
      });
    }
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

var _weex = __webpack_require__("GDhw");

var _weex2 = _interopRequireDefault(_weex);

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
      return (0, _weex2.default)(options);
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

/***/ "j32x":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _app = __webpack_require__("d9nG");

Object.defineProperty(exports, 'App', {
  enumerable: true,
  get: function get() {
    return _app.App;
  }
});

var _page = __webpack_require__("MSGl");

Object.defineProperty(exports, 'Page', {
  enumerable: true,
  get: function get() {
    return _page.Page;
  }
});

var _component = __webpack_require__("uhcq");

Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _component.Component;
  }
});

/***/ }),

/***/ "jVJD":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _common = __webpack_require__("AbV7");

var _weex = __webpack_require__("kur/");

var _common2 = __webpack_require__("+C+F");

var _util = __webpack_require__("uXFq");

var _util2 = __webpack_require__("Pn5V");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var styleLoaderQueue = [_common.commonLoader, _common.cacheTransformStylesLoader, _weex.transformLoader, _weex.originLoader];
var descriptionLoaderQueue = [_common2.commonLoader, _common2.cacheTransformOriginLoader];
var transformMap = {};
var transformOriginMap = {};

var animation = weex.requireModule('animation');

var beginAnimation = function beginAnimation(elm, animationInfo) {
  if (animationInfo && animationInfo.useExport === '1') {
    var updateQueue = animationInfo.updateQueue;

    var len = updateQueue.length;
    var current = Promise.resolve();

    var _loop = function _loop(i) {
      var info = updateQueue[i];

      current = current.then(function () {
        return new Promise(function (res, rej) {
          animation.transition(elm, Object.assign(info.descriptions, { styles: info.styles }), function () {
            info.descriptions.cb();
            res();
          });
        });
      });
    };

    for (var i = 0; i < len; i++) {
      _loop(i);
    }
  }
};

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'initAnimation',
    value: function initAnimation() {
      Vue.directive('animation', {
        bind: function bind(elm, binding) {
          beginAnimation(elm, binding.value);
        },
        update: function update(elm, binding) {
          beginAnimation(elm, binding.value);
        }
      });
    }
  }, {
    key: 'checkNumber',
    value: function checkNumber(number) {}
  }, {
    key: 'checkString',
    value: function checkString(string) {}
  }, {
    key: 'checkObject',
    value: function checkObject(object) {}
  }, {
    key: 'getViewportWidth',
    value: function getViewportWidth() {
      return 0;
    }
  }, {
    key: 'exportMiddleWare',
    value: function exportMiddleWare(param) {
      return {
        useExport: param.useExport,
        updateQueue: param.updateQueue.map(function (tick) {
          return {
            styles: (0, _util.stylePipe)(tick.styles, tick.descriptions, styleLoaderQueue, param.id),
            descriptions: (0, _util.descriptionPipe)(tick.descriptions, tick.styles, descriptionLoaderQueue, param.id)
          };
        })
      };
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util2.copyProtoProperty)(exports.default);

/***/ }),

/***/ "jqlD":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cmlBridge = __webpack_require__("8D69");

var _cmlBridge2 = _interopRequireDefault(_cmlBridge);

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'getLocationInfo',
    value: function getLocationInfo(cb) {
      _cmlBridge2.default.getLocationInfo({}, function (res) {
        var errno = res.errno,
            _res$msg = res.msg,
            msg = _res$msg === undefined ? '' : _res$msg,
            _res$data = res.data,
            data = _res$data === undefined ? { lat: 0, lng: 0 } : _res$data;

        if (errno == 0) {
          cb({
            errno: errno,
            errMsg: msg,
            data: data
          });
        }
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "jzoE":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cmlBridge = __webpack_require__("8D69");

var _cmlBridge2 = _interopRequireDefault(_cmlBridge);

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'getRect',
    value: function getRect(refObj, cb) {
      setTimeout(function () {
        _cmlBridge2.default.getComponentRect({ ref: refObj.weexRef }, function (res) {
          cb({
            width: res.size && res.size.width || 0,
            height: res.size && res.size.height || 0,
            left: res.size && res.size.left || 0,
            top: res.size && res.size.top || 0,
            right: res.size && res.size.right || 0,
            bottom: res.size && res.size.bottom || 0
          });
        });
      }, 50);
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "kC4W":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cmlBridge = __webpack_require__("8D69");

var _cmlBridge2 = _interopRequireDefault(_cmlBridge);

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'chooseImage',
    value: function chooseImage(params, callbackSuccess, callbackFail) {
      // 图片质量
      params.quality = '60';
      _cmlBridge2.default.chooseImage(params, function (res) {
        var errno = res.errno,
            data = res.data;

        if (errno == 0) {
          var _type = data.type,
              image = data.image;

          var _base = '';
          if (_type && image) {
            _base = 'data:image/' + _type + ';base64,' + image;
            callbackSuccess({
              base64: _base,
              WxTempFilePaths: []
            });
          } else {
            callbackFail({ errMsg: 'bridge返回字段错误' });
          }
        }
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "kNfr":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("+iRC");

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _indexlistWeex = __webpack_require__("e3yk");

var _indexlistWeex2 = _interopRequireDefault(_indexlistWeex);

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


exports.default.components = _extends({}, exports.default.components, { indexlist: _indexlistWeex2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

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

/***/ "kur/":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.originLoader = exports.transformLoader = undefined;

var _utils = __webpack_require__("z4ZC");

var _common = __webpack_require__("AbV7");

var transformLoader = exports.transformLoader = function transformLoader(styles) {
  var returnStyles = {};
  var transformMap = {};

  var transformStr = '';
  var haveMixinStyle = false;
  var mixinStyleMap = {
    translateX: '0px',
    translateY: '0px'
  };

  Object.keys(styles).forEach(function (key) {
    var value = styles[key];

    if (_common.isNumTypeStyles.includes(key)) {
      if (!(0, _utils.isNum)(value)) {
        console.error('Parameter must be a number');
      } else {
        value = value + 'px';
      }
    }

    if (_common.rotateStyles.includes(key) && (0, _utils.isNum)(value)) {
      value = value + 'deg';
    }

    // 此处使用transformMap保留transform状态。因为weex每次会初始化transform。行为会跟web，wx端不一致
    // id是为每一个元素都保存一套状态
    if (_common.transformStyles.includes(key)) {
      transformMap[key] = value;
    } else {
      returnStyles[key] = value;
    }
  });
  if (JSON.stringify(transformMap) !== '{}') {
    Object.keys(transformMap).forEach(function (key) {
      var value = transformMap[key];
      if (mixinStyleMap[key]) {

        haveMixinStyle = true;
        mixinStyleMap[key] = value;
      } else {
        if (key === 'transform') {
          transformStr += value + ' ';
        } else {
          transformStr += key + '(' + value + ') ';
        }
      }
    });

    // bug  weexsdk不支持 transform: 'translateX() translateY()'
    if (haveMixinStyle) {
      transformStr += 'translate(' + mixinStyleMap.translateX + ', ' + mixinStyleMap.translateY + ')';
    }

    returnStyles.transform = transformStr;
  }

  return returnStyles;
};

// 将descriptions上的transformOrigin转移到styles上
var originLoader = exports.originLoader = function originLoader(styles, descriptions) {
  var returnStyles = styles;

  returnStyles.transformOrigin = descriptions.transformOrigin;
  delete descriptions.transformOrigin;

  return returnStyles;
};

/***/ }),

/***/ "kyQH":
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
    key: 'setStorage',
    value: function setStorage(key, value, cb) {
      if ((0, _env.inSDK)()) {
        _cmlBridge2.default.setStorage({ key: key, value: value }, function (res) {
          var errno = res.errno,
              _res$msg = res.msg,
              msg = _res$msg === undefined ? '' : _res$msg;

          cb({
            errno: errno,
            errMsg: msg,
            data: ''
          });
        });
      } else {
        var storage = weex.requireModule('storage');
        storage.setItem(key, value, function (e) {
          if (e.result === 'success') {
            cb({
              errno: 0,
              errMsg: '',
              data: value
            });
          } else {
            cb({
              errno: -1,
              errMsg: 'weex storage.setItem fail',
              data: ''
            });
          }
        });
      }
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

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

var _weex = __webpack_require__("RtyP");

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
      return new _weex.Page(options);
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

/***/ "lZ4d":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _format = __webpack_require__("IToD");

var Format = _interopRequireWildcard(_format);

var _utils = __webpack_require__("XFow");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

var dom = weex.requireModule('dom');
exports.default = {
  props: {
    height: {
      type: [Number, String],
      default: _utils2.default.env.getPageHeight()
    },
    normalList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    onlyShowList: {
      type: Boolean,
      default: false
    },
    showIndex: {
      type: Boolean,
      default: true
    },
    needAnimation: {
      type: Boolean,
      default: true
    },
    hotListConfig: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    // 城市选择子组件 特殊情况支持
    cityLocationConfig: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    headerStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    navStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    navTextStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    popStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    popTextStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    itemStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    itemTextStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    itemDescStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    groupWrapStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    groupItemStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    groupItemTextStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    groupItemDescStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  created: function created() {
    this.isIPhoneX = _utils2.default.env.isIPhoneX();
  },

  computed: {
    formatList: function formatList() {
      var normalList = this.normalList,
          hotListConfig = this.hotListConfig,
          cityLocationConfig = this.cityLocationConfig;

      return Format.totalList(normalList, hotListConfig, cityLocationConfig);
    }
  },
  data: function data() {
    return {
      popKeyShow: false,
      popKey: '',
      navOffsetY: 0,
      timer: null
    };
  },
  methods: {
    itemClicked: function itemClicked(item) {
      this.$emit('wxcIndexlistItemClicked', {
        item: item
      });
    },
    go2Key: function go2Key(key) {
      var _this = this;

      var keyEl = this.$refs['index-item-title-' + key][0];
      keyEl && dom.scrollToElement(keyEl, {
        offset: 0,
        animated: this.needAnimation
      });
      this.popKey = key;
      this.popKeyShow = true;
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this.popKeyShow = false;
      }, 600);
    }
  }
};

/***/ }),

/***/ "lwq5":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var state = {};

exports.default = state;

/***/ }),

/***/ "m26z":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = close;

var _index = __webpack_require__("q5CL");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function close() {
  _index2.default.close();
}

/***/ }),

/***/ "mUbh":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),

/***/ "mgwV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


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

/***/ "nF0/":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm._weexClassProxy('cml-btn  cml-base cml-view'),
    style: _vm._cmlStyleProxy(((_vm.mrBtnStyle))),
    on: {
      "click": function($event) {
        _vm._cmlEventProxy($event, 'onclick')
      }
    }
  }, [_c('text', {
    class: _vm._weexClassProxy('btn-text  cml-base cml-text'),
    style: _vm._cmlStyleProxy(((_vm.mrTextStyle)))
  }, [_vm._v(_vm._s(_vm.text))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "nFN1":
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

var modal = weex.requireModule('modal');

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'showToast',
    value: function showToast(opt) {
      if ((0, _env.inSDK)()) {
        _cmlBridge2.default.showToast(opt);
      } else {
        var _message = opt.message,
            _duration = opt.duration;

        modal.toast({
          message: _message,
          duration: _duration / 1000
        });
      }
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

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
      var runtime = __webpack_require__("1HDH").default;

      var _runtime$getInfo = runtime.getInfo(),
          router = _runtime$getInfo.router,
          routerConfig = _runtime$getInfo.routerConfig;

      opt.query = (0, _utils.queryParse)(opt.query);
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
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "q0FZ":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm._weexClassProxy('page-wrapper  cml-base cml-view')
  }, [_c('div', {
    staticClass: ["cml-base", "cml-view"],
    staticStyle: {
      marginBottom: "30px"
    }
  }, [_c('cml-buildin-button', {
    staticClass: ["cml-base", "cml-button"],
    attrs: {
      "text": "第三方库封装indexlist"
    },
    on: {
      "onclick": function($event) {
        _vm._cmlInlineStatementEventProxy('openIndexList', 0)
      }
    }
  })], 1), _c('cml-buildin-button', {
    staticClass: ["cml-base", "cml-button"],
    attrs: {
      "text": "基于chameleon统一实现indexlist"
    },
    on: {
      "onclick": function($event) {
        _vm._cmlInlineStatementEventProxy('openIndexList', 1)
      }
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "q5CL":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cmlBridge = __webpack_require__("8D69");

var _cmlBridge2 = _interopRequireDefault(_cmlBridge);

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'close',
    value: function close() {
      _cmlBridge2.default.close();
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "qK0v":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = chooseImage;

var _index = __webpack_require__("kC4W");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function chooseImage() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    type: 'choice'
  };

  return new Promise(function (resolve, reject) {
    _index2.default.chooseImage(params, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    });
  });
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

/***/ "r6bs":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = canIUse;

var _index = __webpack_require__("KvZo");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function canIUse(metName) {
  return new Promise(function (resolve, reject) {
    _index2.default.canIUse(metName, function (res) {
      if (res) {
        resolve(res);
      } else {
        reject(res);
      }
    });
  });
}

/***/ }),

/***/ "rDCK":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _WexOptTransformer2 = __webpack_require__("WgSU");

var _WexOptTransformer3 = _interopRequireDefault(_WexOptTransformer2);

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

      var obj = this.$route && this.$route.query;

      args[0] = Object.assign({}, args[0], obj);

      return args;
    }
  }]);

  return OptTransformer;
}(_WexOptTransformer3.default);

exports.default = OptTransformer;

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

routerOptions.mode =  false ? routerOptions.mode : 'abstract';

var Router = new _vueRouter2.default(routerOptions);
exports.default = Router;

/***/ }),

/***/ "t7x7":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = redirectTo;

var _index = __webpack_require__("TC8s");

var _index2 = _interopRequireDefault(_index);

var _utils = __webpack_require__("z4ZC");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function redirectTo(opt) {
  var query = '';
  var path = '';
  var url = '';
  if (opt.path) {
    path = opt.path;
  }
  if (opt.url) {
    url = opt.url;
  }
  if (typeof opt.query !== 'string') {
    query = (0, _utils.queryStringify)(opt.query);
  }
  _index2.default.redirectTo({
    path: path,
    url: url,
    query: query
  });
}

/***/ }),

/***/ "uXFq":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cpx2px = exports.descriptionPipe = exports.stylePipe = undefined;

var _index = __webpack_require__("jVJD");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stylePipe = exports.stylePipe = function stylePipe(styles, descriptions, quene) {
  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var current = styles;
  quene.forEach(function (fuc) {
    current = fuc.apply(null, [current, descriptions].concat(args));
  });
  return current;
};

var descriptionPipe = exports.descriptionPipe = function descriptionPipe(descriptions, styles, quene) {
  for (var _len2 = arguments.length, args = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    args[_key2 - 3] = arguments[_key2];
  }

  var current = descriptions;
  quene.forEach(function (fuc) {
    current = fuc.apply(null, [current, styles].concat(args));
  });
  return current;
};

var cpx2px = exports.cpx2px = function cpx2px(v) {
  return +(_index2.default.getViewportWidth() / 750 * v).toFixed(3);
};

exports.default = {};

/***/ }),

/***/ "uZGx":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: ["app"]
  }, [_c('router-view')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "uhcq":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _BaseCtor2 = __webpack_require__("yVTO");

var _BaseCtor3 = _interopRequireDefault(_BaseCtor2);

var _lifecycle = __webpack_require__("wbAX");

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _OptTransformer = __webpack_require__("rDCK");

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

    _this.cmlType = 'weex';

    _this.initOptTransformer(_OptTransformer2.default, {
      type: 'component',
      hooks: _lifecycle2.default.get('cml.hooks')
    });
    return _this;
  }

  return Component;
}(_BaseCtor3.default);

/***/ }),

/***/ "ukYY":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),

/***/ "v/rT":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.weexCanIUse = weexCanIUse;
var weexSupportMethods = ['modal.alert', 'cancelAnimationFrame', 'canIUse', 'modal.confirm', 'getSystemInfo', 'fetch', 'clipboard.getString', 'getComponentRect', 'storage.getItem', 'getSystemInfo', 'weex.config.bundleUrl', 'navigateBack', 'navigateTo', 'navigator.push', 'fetch', 'getSystemInfo', 'router.replace', 'storage.removeItem', 'fetch', 'requestAnimationFrame', 'clipboard.setString', 'storage.setItem', 'modal.toast'];

function weexCanIUse(method) {
  return weexSupportMethods.includes(method);
}

/***/ }),

/***/ "v8KS":
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__("B0A7")
)

/* script */
__vue_exports__ = __webpack_require__("RtXD")

/* template */
var __vue_template__ = __webpack_require__("uZGx")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/GongLei/Desktop/test/cml-indexlist/src/app/app.cml"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-69871c28"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

exports.__esModule = true;
exports["default"] = __vue_exports__


/***/ }),

/***/ "vyqt":
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
      default: ''
    },
    disabledStyle: {
      type: String,
      default: ''
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

      return afterStyle;
    },
    mrTextStyle: function mrTextStyle() {
      var type = this.type,
          disabled = this.disabled,
          textStyle = this.textStyle,
          size = this.size;

      var mrTextStyle = _extends({}, _type.TEXT_STYLE_MAP[type], str2obj(textStyle), _type.TEXT_FONTSIZE_STYLE_MAP[size]);
      var afterStyle = disabled ? _extends({}, mrTextStyle, { color: "#FFFFFF" }) : mrTextStyle;

      return afterStyle;
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

/***/ "w7a9":
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__("+rwS")
)

/* script */
__vue_exports__ = __webpack_require__("vyqt")

/* template */
var __vue_template__ = __webpack_require__("nF0/")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/GongLei/Desktop/test/cml-indexlist/node_modules/chameleon-ui-builtin/components/button/button.weex.cml"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5047f37a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

exports.__esModule = true;
exports["default"] = __vue_exports__


/***/ }),

/***/ "w8mr":
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__("8R4g")
)

/* script */
__vue_exports__ = __webpack_require__("fnCu")

/* template */
var __vue_template__ = __webpack_require__("q0FZ")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/GongLei/Desktop/test/cml-indexlist/src/pages/index/index.cml"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-50b67c82"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

exports.__esModule = true;
exports["default"] = __vue_exports__


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

/***/ "wpzS":
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

var _wxcIndexlist = __webpack_require__("ZZp4");

var _wxcIndexlist2 = _interopRequireDefault(_wxcIndexlist);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Indexlist = function () {
  function Indexlist() {
    _classCallCheck(this, Indexlist);

    this.props = {
      dataList: {
        type: Array,
        default: []
      }
    };
    this.data = {
      list: []
    };
    this.methods = {
      initData: function initData() {
        this.list = this.dataList;
      },
      onItemSelect: function onItemSelect(e) {
        this.$cmlEmit('onselect', e.item);
      }
    };
  }

  _createClass(Indexlist, [{
    key: 'mounted',
    value: function mounted() {
      this.initData();
    }
  }]);

  return Indexlist;
}();

exports.default = new Indexlist();


exports.default.components = _extends({}, exports.default.components, { wexIndexlist: _wxcIndexlist2.default });


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "xPyr":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getStorage;

var _index = __webpack_require__("Rdwb");

var _index2 = _interopRequireDefault(_index);

var _utils = __webpack_require__("z4ZC");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStorage(key) {
  return new Promise(function (resolve, reject) {
    _index2.default.getStorage(key, function (res) {
      if (res.errno === 0) {
        res.data = (0, _utils.tryJsonParse)(res.data);
        resolve(res.data);
      } else {
        reject(res.errMsg);
      }
    });
  });
}

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

/***/ "yqBP":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLocationInfo;

var _index = __webpack_require__("jqlD");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getLocationInfo() {
  return new Promise(function (resolve, reject) {
    _index2.default.getLocationInfo(function (res) {
      if (res.errno === 0) {
        resolve(res.data);
      } else {
        reject(res.errMsg);
      }
    });
  });
}

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
    if (true) {
      refObj.weexRef = context.$refs && context.$refs[ref];
    } else if (process.env.platform === 'web') {
      refObj.webDom = context.$refs[ref] && context.$refs[ref].$el || context.$refs[ref];
    }
    return refObj;
  }

  // 向下兼容旧版ref
  if (false) {
    refObj.id = ref.id;
  } else if (true) {
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

/******/ });