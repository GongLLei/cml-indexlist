var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([2],{19:function(e,t,r){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),u=function(){function e(){n(this,e)}return o(e,[{key:"getWidth",value:function(){return my.getSystemInfoSync().windowWidth}}]),e}();t.default=new u,(0,i.copyProtoProperty)(t.default)},88:function(e,t,r){r(89),r(90)},89:function(e,t){},90:function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,i){try{var u=t[o](i),c=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(c).then(function(e){n("next",e)},function(e){n("throw",e)});e(c)}return n("next")})}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=r(17),c=n(u),l=r(18),a=n(l),f=r(91),s=n(f),d=r(92),h=n(d),p=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),m=r(0),y=n(m),v=function(){function e(){i(this,e),this.props={cstyle:{type:String,default:""},bottomOffset:{type:Number,default:0},scrollDirection:{type:String,default:"vertical"},bounce:{type:Boolean,default:!0},height:{type:Number,default:0},width:{type:Number,default:0},scrollTop:{type:Number,default:0},scrollLeft:{type:Number,default:0}},this.data={cmtStyle:""},this.computed={wrapperStyle:function(){if("vertical"===this.scrollDirection){if(this.height>=0)return this.cstyle+";height:"+this.height+"rpx;"}else if(this.width>=0)return this.cstyle+";width:"+this.width+"rpx;white-space:nowrap;";return this.cmtStyle+this.cstyle},scrollTopPx:function(){return(0,h.default)(this.scrollTop)},scrollLeftPx:function(){return(0,h.default)(this.scrollLeft)}},this.methods={onScroll:function(e){var t=e.detail;t.deltaX=t.deltaX||0,t.deltaY=t.deltaY||0,Object.keys(t).forEach(function(e){t[e]=(0,s.default)(t[e])}),this.$cmlEmit("onscroll",t),this.$cmlEmit("customscroll",t)},onBottom:function(e){var t={direction:""};this.$cmlEmit("scrolltobottom",t)}}}return p(e,[{key:"mounted",value:function(){var e=this,t=this;setTimeout(o(c.default.mark(function r(){var n,o;return c.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if("vertical"!==e.scrollDirection||e.height){r.next=3;break}return console.error("纵向滚动必须传递高度属性"),r.abrupt("return");case 3:if("vertical"===e.scrollDirection||e.width){r.next=6;break}return console.error("横向滚动必须传递宽度属性"),r.abrupt("return");case 6:if(-1!==e.height&&-1!==e.width){r.next=12;break}return n=my.createSelectorQuery().select("#c-scroller").boundingClientRect(),r.next=10,(0,a.default)();case 10:o=r.sent,n.exec(function(e){var r=e[0];if(r)if("vertical"===t.scrollDirection){var n=o.viewportHeight-r.top;t.cmtStyle="height:"+n+"cpx;"}else{var i=o.viewportWidth-r.left;t.cmtStyle="width:"+i+"cpx;white-space:nowrap;"}});case 12:case"end":return r.stop()}},r,e)})),200)}}]),e}();t.default=new v,t.default=y.default.createComponent(t.default).getOptions()},91:function(e,t,r){function n(e){return"number"!=typeof e?void console.error("Parameter must be a number"):+(750/i.default.getWidth()*e).toFixed(3)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var o=r(19),i=function(e){return e&&e.__esModule?e:{default:e}}(o)},92:function(e,t,r){function n(e){return"number"!=typeof e?void console.error("Parameter must be a number"):+(i.default.getWidth()/750*e).toFixed(3)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var o=r(19),i=function(e){return e&&e.__esModule?e:{default:e}}(o)}},[88]);