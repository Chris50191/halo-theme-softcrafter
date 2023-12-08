import{g as J,c as K}from"./_commonjsHelpers-042e6b4d.js";function Q(x,C){for(var S=0;S<C.length;S++){const _=C[S];if(typeof _!="string"&&!Array.isArray(_)){for(const h in _)if(h!=="default"&&!(h in x)){const c=Object.getOwnPropertyDescriptor(_,h);c&&Object.defineProperty(x,h,c.get?c:{enumerable:!0,get:()=>_[h]})}}}return Object.freeze(Object.defineProperty(x,Symbol.toStringTag,{value:"Module"}))}var R={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(x,C){(function(_,h){x.exports=h()})(K,function(){return function(){var S={686:function(c,f,t){t.d(f,{default:function(){return B}});var a=t(279),s=t.n(a),l=t(370),g=t.n(l),y=t(817),m=t.n(y);function d(i){try{return document.execCommand(i)}catch{return!1}}var v=function(n){var e=m()(n);return d("cut"),e},p=v;function E(i){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(r,"px"),e.setAttribute("readonly",""),e.value=i,e}var k=function(n,e){var r=E(n);e.container.appendChild(r);var o=m()(r);return d("copy"),r.remove(),o},D=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},r="";return typeof n=="string"?r=k(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?r=k(n.value,e):(r=m()(n),d("copy")),r},L=D;function w(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?w=function(e){return typeof e}:w=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(i)}var F=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,r=e===void 0?"copy":e,o=n.container,u=n.target,b=n.text;if(r!=="copy"&&r!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(u!==void 0)if(u&&w(u)==="object"&&u.nodeType===1){if(r==="copy"&&u.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(r==="cut"&&(u.hasAttribute("readonly")||u.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(b)return L(b,{container:o});if(u)return r==="cut"?p(u):L(u,{container:o})},H=F;function T(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?T=function(e){return typeof e}:T=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(i)}function I(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function N(i,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,r.key,r)}}function z(i,n,e){return n&&N(i.prototype,n),e&&N(i,e),i}function U(i,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(n&&n.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),n&&P(i,n)}function P(i,n){return P=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},P(i,n)}function Y(i){var n=V();return function(){var r=A(i),o;if(n){var u=A(this).constructor;o=Reflect.construct(r,arguments,u)}else o=r.apply(this,arguments);return $(this,o)}}function $(i,n){return n&&(T(n)==="object"||typeof n=="function")?n:G(i)}function G(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function V(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function A(i){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},A(i)}function j(i,n){var e="data-clipboard-".concat(i);if(n.hasAttribute(e))return n.getAttribute(e)}var X=function(i){U(e,i);var n=Y(e);function e(r,o){var u;return I(this,e),u=n.call(this),u.resolveOptions(o),u.listenClick(r),u}return z(e,[{key:"resolveOptions",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof o.action=="function"?o.action:this.defaultAction,this.target=typeof o.target=="function"?o.target:this.defaultTarget,this.text=typeof o.text=="function"?o.text:this.defaultText,this.container=T(o.container)==="object"?o.container:document.body}},{key:"listenClick",value:function(o){var u=this;this.listener=g()(o,"click",function(b){return u.onClick(b)})}},{key:"onClick",value:function(o){var u=o.delegateTarget||o.currentTarget,b=this.action(u)||"copy",O=H({action:b,container:this.container,target:this.target(u),text:this.text(u)});this.emit(O?"success":"error",{action:b,text:O,trigger:u,clearSelection:function(){u&&u.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(o){return j("action",o)}},{key:"defaultTarget",value:function(o){var u=j("target",o);if(u)return document.querySelector(u)}},{key:"defaultText",value:function(o){return j("text",o)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(o){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return L(o,u)}},{key:"cut",value:function(o){return p(o)}},{key:"isSupported",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],u=typeof o=="string"?[o]:o,b=!!document.queryCommandSupported;return u.forEach(function(O){b=b&&!!document.queryCommandSupported(O)}),b}}]),e}(s()),B=X},828:function(c){var f=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function a(s,l){for(;s&&s.nodeType!==f;){if(typeof s.matches=="function"&&s.matches(l))return s;s=s.parentNode}}c.exports=a},438:function(c,f,t){var a=t(828);function s(y,m,d,v,p){var E=g.apply(this,arguments);return y.addEventListener(d,E,p),{destroy:function(){y.removeEventListener(d,E,p)}}}function l(y,m,d,v,p){return typeof y.addEventListener=="function"?s.apply(null,arguments):typeof d=="function"?s.bind(null,document).apply(null,arguments):(typeof y=="string"&&(y=document.querySelectorAll(y)),Array.prototype.map.call(y,function(E){return s(E,m,d,v,p)}))}function g(y,m,d,v){return function(p){p.delegateTarget=a(p.target,m),p.delegateTarget&&v.call(y,p)}}c.exports=l},879:function(c,f){f.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},f.nodeList=function(t){var a=Object.prototype.toString.call(t);return t!==void 0&&(a==="[object NodeList]"||a==="[object HTMLCollection]")&&"length"in t&&(t.length===0||f.node(t[0]))},f.string=function(t){return typeof t=="string"||t instanceof String},f.fn=function(t){var a=Object.prototype.toString.call(t);return a==="[object Function]"}},370:function(c,f,t){var a=t(879),s=t(438);function l(d,v,p){if(!d&&!v&&!p)throw new Error("Missing required arguments");if(!a.string(v))throw new TypeError("Second argument must be a String");if(!a.fn(p))throw new TypeError("Third argument must be a Function");if(a.node(d))return g(d,v,p);if(a.nodeList(d))return y(d,v,p);if(a.string(d))return m(d,v,p);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function g(d,v,p){return d.addEventListener(v,p),{destroy:function(){d.removeEventListener(v,p)}}}function y(d,v,p){return Array.prototype.forEach.call(d,function(E){E.addEventListener(v,p)}),{destroy:function(){Array.prototype.forEach.call(d,function(E){E.removeEventListener(v,p)})}}}function m(d,v,p){return s(document.body,d,v,p)}c.exports=l},817:function(c){function f(t){var a;if(t.nodeName==="SELECT")t.focus(),a=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var s=t.hasAttribute("readonly");s||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),s||t.removeAttribute("readonly"),a=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var l=window.getSelection(),g=document.createRange();g.selectNodeContents(t),l.removeAllRanges(),l.addRange(g),a=l.toString()}return a}c.exports=f},279:function(c){function f(){}f.prototype={on:function(t,a,s){var l=this.e||(this.e={});return(l[t]||(l[t]=[])).push({fn:a,ctx:s}),this},once:function(t,a,s){var l=this;function g(){l.off(t,g),a.apply(s,arguments)}return g._=a,this.on(t,g,s)},emit:function(t){var a=[].slice.call(arguments,1),s=((this.e||(this.e={}))[t]||[]).slice(),l=0,g=s.length;for(l;l<g;l++)s[l].fn.apply(s[l].ctx,a);return this},off:function(t,a){var s=this.e||(this.e={}),l=s[t],g=[];if(l&&a)for(var y=0,m=l.length;y<m;y++)l[y].fn!==a&&l[y].fn._!==a&&g.push(l[y]);return g.length?s[t]=g:delete s[t],this}},c.exports=f,c.exports.TinyEmitter=f}},_={};function h(c){if(_[c])return _[c].exports;var f=_[c]={exports:{}};return S[c](f,f.exports,h),f.exports}return function(){h.n=function(c){var f=c&&c.__esModule?function(){return c.default}:function(){return c};return h.d(f,{a:f}),f}}(),function(){h.d=function(c,f){for(var t in f)h.o(f,t)&&!h.o(c,t)&&Object.defineProperty(c,t,{enumerable:!0,get:f[t]})}}(),function(){h.o=function(c,f){return Object.prototype.hasOwnProperty.call(c,f)}}(),h(686)}().default})})(R);var M=R.exports;const W=J(M),tt=Q({__proto__:null,default:W},[M]);export{tt as c};
