parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6WbP":[function(require,module,exports) {
var define;
var e;function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}parcelRequire=function(t,n,r,i){var a,s="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function c(e,r){if(!n[e]){if(!t[e]){var o="function"==typeof parcelRequire&&parcelRequire;if(!r&&o)return o(e,!0);if(s)return s(e,!0);if(u&&"string"==typeof e)return u(e);var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}f.resolve=function(n){return t[e][1][n]||n},f.cache={};var a=n[e]=new c.Module(e);t[e][0].call(a.exports,f,a,a.exports,this)}return n[e].exports;function f(e){return c(f.resolve(e))}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=t,c.cache=n,c.parent=s,c.register=function(e,n){t[e]=[function(e,t){t.exports=n},{}]};for(var f=0;f<r.length;f++)try{c(r[f])}catch(t){a||(a=t)}if(r.length){var l=c(r[r.length-1]);"object"==("undefined"==typeof exports?"undefined":o(exports))&&"undefined"!=typeof module?module.exports=l:"function"==typeof e&&e.amd?e(function(){return l}):this.X3P=l}if(parcelRequire=c,a)throw a;return c}({qob1:[function(e,t,n){"use strict";function r(e){return"number"==typeof e&&e>=n.CLAMP_LOWER&&e<=n.CLAMP_UPPER}Object.defineProperty(n,"__esModule",{value:!0}),n.CLAMP_ERROR="Not a valid component value",n.CLAMP_UPPER=255,n.CLAMP_LOWER=0,function(e){e.RED="r",e.GREEN="g",e.BLUE="b",e.ALPHA="a"}(n.KEYS||(n.KEYS={})),function(e){e[e.RED=24]="RED",e[e.GREEN=16]="GREEN",e[e.BLUE=8]="BLUE",e[e.ALPHA=0]="ALPHA"}(n.BIT_OFFSETS||(n.BIT_OFFSETS={})),function(e){e[e.RED=4278190080]="RED",e[e.GREEN=16711680]="GREEN",e[e.BLUE=65280]="BLUE",e[e.ALPHA=255]="ALPHA"}(n.BIT_MASKS||(n.BIT_MASKS={})),n.isValidComponentValue=r,n.validateComponent=function(e){if(!r(e))throw new Error(n.CLAMP_ERROR)}},{}],I86Q:[function(e,n,o){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(o,"__esModule",{value:!0});var a,s=e("./component"),u=i(e("./index")),c="Not a valid rgb value";!function(e){e.OPENING_BRACE="(",e.OPENING_VALUES="rgba",e.NUMBERS="0123456789.",e.CLOSERS=",)",e.SPACE=" ",e.INVALID=""}(a||(a={}));var f=function(){function e(n){t(this,e),this.componentIndex=0,this.componentCount=3,this.sourceComponents=["","","",""],this.parsedComponents=[],this.source=n.source.toLowerCase(),this.target=n.target||new u.default,this.parse()}return r(e,[{key:"getOp",value:function(e){for(var t in a)if(a[t].includes(e))return a[t];return a.INVALID}},{key:"parse",value:function(){for(var e=0;e<this.source.length;e++){var t=this.source[e];switch(this.getOp(t)){case a.OPENING_VALUES:this.parseOpeningValues(e,t);break;case a.OPENING_BRACE:this.parseOpeningBrace(e,t);break;case a.NUMBERS:this.parseNumbers(e,t);break;case a.SPACE:break;case a.CLOSERS:this.parseClosers(e,t);break;default:case a.INVALID:throw new Error(c)}}if(this.parsedComponents.length<this.componentCount)throw new Error(c);for(var n=this.parsedComponents.length,r=0;r<n;++r)this.target.value|=this.parsedComponents[r]<<24-8*r;n<4&&(this.target.value|=255)}},{key:"parseOpeningValues",value:function(e,t){if(a.OPENING_VALUES.indexOf(t)!==e)throw new Error(c);t===a.OPENING_VALUES[3]&&++this.componentCount}},{key:"parseOpeningBrace",value:function(e,t){if(e!==this.componentCount)throw new Error(c)}},{key:"parseNumbers",value:function(e,t){if("."===t&&this.componentIndex<3)throw new Error(c);this.sourceComponents[this.componentIndex]+=t}},{key:"parseClosers",value:function(e,t){var n;if(3===this.componentIndex?(n=parseFloat(this.sourceComponents[this.componentIndex]),n=Math.floor(n*s.CLAMP_UPPER)):n=parseInt(this.sourceComponents[this.componentIndex]),++this.componentIndex>this.componentCount||!s.isValidComponentValue(n))throw new Error(c);this.parsedComponents[this.componentIndex-1]=n}}]),e}();o.default=f},{"./component":"qob1","./index":"f6As"}],f6As:[function(e,n,o){"use strict";var i,a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(o,"__esModule",{value:!0});var s=e("./component"),u=a(e("./functional-parser")),c=[3,4,6,8];!function(e){e[e.Color32=0]="Color32",e[e.Color24=2]="Color24",e[e.Color16=4]="Color16",e[e.Color8=6]="Color8"}(o.Precision||(o.Precision={}));var f=Symbol("The color's 32 bit value"),l=function(){function e(n){if(t(this,e),this[i]=0,void 0!==n)switch(n[0]){case"r":e.parseFunctional(n,this);break;case"#":e.parseHex(n,this)}}return r(e,[{key:"dropPrecisionTo",value:function(e){this.r=(this.r>>>e)/(255>>>e)*255,this.g=(this.g>>>e)/(255>>>e)*255,this.b=(this.b>>>e)/(255>>>e)*255,this.a=(this.a>>>e)/(255>>>e)*255}},{key:"distanceTo",value:function(t){return e.distanceBetween(this,t)}},{key:"value",get:function(){return this[f]},set:function(e){this[f]=e}},{key:"l",get:function(){return Math.ceil(.2126*this.r+.7152*this.g+.0722*this.b)}},{key:"hex8",get:function(){return"#"+("00000000"+this.value.toString(16)).slice(-8)}},{key:"hex6",get:function(){return this.hex8.substring(0,7)}},{key:"rgba",get:function(){return"rgba(".concat(this.r,", ").concat(this.g,", ").concat(this.b,", ").concat(this.a/255,")")}},{key:"rgb",get:function(){return"rgb(".concat(this.r,", ").concat(this.g,", ").concat(this.b,")")}},{key:"hex",get:function(){return this.a<255?this.hex8:this.hex6}},{key:"isDark",get:function(){return this.l<128}},{key:"isLight",get:function(){return this.l>128}}],[{key:"distanceBetween",value:function(e,t){var n=(e.r+t.r)/2,r=Math.abs(e.r-t.r),o=Math.abs(e.g-t.g),i=Math.abs(e.b-t.b);return Math.sqrt(((512+n)*r*4>>8)+4*o*o+((767-n)*i*i>>8))}},{key:"parseHex",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new e,r=t[0],o=t.substring(1),i=o.length;if("#"!==r||!c.includes(i))throw new Error("Not a valid hexadecimal");if(3===i||4===i){for(var a="",s=0;s<i;++s)a+=o[s]+o[s];o=a,i*=2}return 6===i&&(o+="ff"),n.value=parseInt(o,16),n}},{key:"parseFunctional",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new e;new u.default({source:t,target:n})}}]),e}();i=f;var h=function(e){var t=s.KEYS[e],n=s.BIT_OFFSETS[e],r=s.BIT_MASKS[e],o=~r>>>0;Object.defineProperty(l.prototype,t,{get:function(){return this.value>>>n&s.CLAMP_UPPER},set:function(e){s.validateComponent(e);var t=e<<n>>>0,i=(o&this.value)>>>0,a=(t&r)>>>0;this.value=(i|a)>>>0}})};for(var p in s.KEYS)h(p);o.default=l},{"./component":"qob1","./functional-parser":"I86Q"}],"1WM+":[function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var o=r(e("@talenfisher/color"));function i(e,t){if(0===t.length)return e;for(var n=Math.abs(e.distanceTo(t[0])),r=0,o=1;o<t.length;o++){var i=Math.abs(e.distanceTo(t[o]));i<n&&(n=i,r=o)}return t[r]}onmessage=function(e){for(var t=e.data.version,n=e.data.imageData,r=new o.default(e.data.background),a=e.data.annotations.map(function(e){return new o.default(e)}).sort(function(e,t){return t.value-e.value}),s={},u=0;u<n.length-4;u+=4){var c=new o.default;c.r=n[u],c.g=n[u+1],c.b=n[u+2];var f=c;if(1===t){if(c.distanceTo(r)<=150)f=r;else{var l=i(c,a.concat(Object.values(s)));Math.abs(c.distanceTo(l))<=255&&(f=l)}n[u+0]=f.r,n[u+1]=f.g,n[u+2]=f.b}f.hex6!==r.hex6&&(s[f.hex6]=f)}postMessage({imageData:n,colors:Object.keys(s)},[n.buffer]),close()}},{"@talenfisher/color":"f6As"}]},{},["1WM+"]);
},{}]},{},["6WbP"], null)