function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{AGyb:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var a=t("8Y7J"),r=function(){var n=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"garageId",get:function(){return this.$garageId},set:function(n){this.$garageId=n}}]),n}();return n.ngInjectableDef=a.Pb({factory:function(){return new n},token:n,providedIn:"root"}),n}()},k0Fy:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var a=t("8Y7J"),r=t("Xr7G"),i=function(){var n=function(){function n(e){_classCallCheck(this,n),this.db=e}return _createClass(n,[{key:"addChassisData",value:function(n){this.db.collection("Chasssis").add(n)}},{key:"addEngineTransData",value:function(n){this.db.collection("EngineTrans").add(n)}},{key:"addGarageData",value:function(n){this.db.collection("Garage").add(n)}}]),n}();return n.ngInjectableDef=a.Pb({factory:function(){return new n(a.Qb(r.a))},token:n,providedIn:"root"}),n}()}}]);