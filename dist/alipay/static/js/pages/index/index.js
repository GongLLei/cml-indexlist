var __CML__GLOBAL=require("../../manifest.js");__CML__GLOBAL.webpackJsonp([3],{57:function(e,n,t){t(58),t(59)},58:function(e,n){},59:function(e,n,t){function a(e){return e&&e.__esModule?e:{default:e}}function u(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=t(60),o=a(r),i=t(0),f=a(i),l=function e(){u(this,e),this.methods={openIndexList:function(e){var n=e?"/pages/page2/index":"/pages/page/index";(0,o.default)({path:n})}}};n.default=new l,n.default=f.default.createPage(n.default).getOptions()},60:function(e,n,t){function a(e){var n=(0,o.queryStringify)(e.query)||"",t=e.path||"",a=e.url||"";r.default.navigateTo({path:t,url:a,query:n})}Object.defineProperty(n,"__esModule",{value:!0}),n.default=a;var u=t(61),r=function(e){return e&&e.__esModule?e:{default:e}}(u),o=t(14)},61:function(e,n,t){function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),r=t(1),o=function(){function e(){a(this,e)}return u(e,[{key:"navigateTo",value:function(e){var n=e.path,t=e.query;-1===n.indexOf("?")&&(t="?"+t),n+=t,my.navigateTo({url:n})}}]),e}();n.default=new o,(0,r.copyProtoProperty)(n.default)}},[57]);