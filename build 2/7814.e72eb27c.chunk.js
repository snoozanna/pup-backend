(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[7814],{12494:function(ye,sn,X){var Q=X(25108);/*!
 * Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */(function(_,bt){bt(sn)})(this,function(_){"use strict";function bt(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?bt(Object(e),!0).forEach(function(a){w(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):bt(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function rt(t){return rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},rt(t)}function K(){K=function(r,i){return new e(r,void 0,i)};var t=RegExp.prototype,n=new WeakMap;function e(r,i,o){var f=new RegExp(r,i);return n.set(f,o||n.get(r)),gt(f,e.prototype)}function a(r,i){var o=n.get(i);return Object.keys(o).reduce(function(f,l){return f[l]=r[o[l]],f},Object.create(null))}return fn(e,RegExp),e.prototype.exec=function(r){var i=t.exec.call(this,r);return i&&(i.groups=a(i,this)),i},e.prototype[Symbol.replace]=function(r,i){if(typeof i=="string"){var o=n.get(this);return t[Symbol.replace].call(this,r,i.replace(/\$<([^>]+)>/g,function(l,d){return"$"+o[d]}))}if(typeof i=="function"){var f=this;return t[Symbol.replace].call(this,r,function(){var l=arguments;return typeof l[l.length-1]!="object"&&(l=[].slice.call(l)).push(a(l,f)),i.apply(this,l)})}return t[Symbol.replace].call(this,r,i)},K.apply(this,arguments)}function Wt(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function F(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function pt(t,n,e){return n&&F(t.prototype,n),e&&F(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function w(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function fn(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&gt(t,n)}function gt(t,n){return gt=Object.setPrototypeOf||function(a,r){return a.__proto__=r,a},gt(t,n)}function it(t,n){return cn(t)||un(t,n)||Ht(t,n)||mn()}function ot(t){return ln(t)||St(t)||Ht(t)||Bt()}function ln(t){if(Array.isArray(t))return Et(t)}function cn(t){if(Array.isArray(t))return t}function St(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function un(t,n){var e=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,i=!1,o,f;try{for(e=e.call(t);!(r=(o=e.next()).done)&&(a.push(o.value),!(n&&a.length===n));r=!0);}catch(l){i=!0,f=l}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw f}}return a}}function Ht(t,n){if(!!t){if(typeof t=="string")return Et(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Et(t,n)}}function Et(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function Bt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Gt=function(){},_t={},It={},Ct=null,Xt={mark:Gt,measure:Gt};try{typeof window!="undefined"&&(_t=window),typeof document!="undefined"&&(It=document),typeof MutationObserver!="undefined"&&(Ct=MutationObserver),typeof performance!="undefined"&&(Xt=performance)}catch(t){}var Kt=_t.navigator||{},ht=Kt.userAgent,J=ht===void 0?"":ht,$=_t,s=It,m=Ct,p=Xt,y=!!$.document,h=!!s.documentElement&&!!s.head&&typeof s.addEventListener=="function"&&typeof s.createElement=="function",O=~J.indexOf("MSIE")||~J.indexOf("Trident/"),U,W,P,S,T,M="___FONT_AWESOME___",st=16,ft="fa",yt="svg-inline--fa",j="data-fa-i2svg",L="data-fa-pseudo-element",Nt="data-fa-pseudo-element-pending",Z="data-prefix",lt="data-icon",Tt="fontawesome-i2svg",kt="async",ke=["HTML","HEAD","STYLE","SCRIPT"],Rn=function(){try{return!0}catch(t){return!1}}(),x="classic",A="sharp",dn=[x,A];function Mt(t){return new Proxy(t,{get:function(e,a){return a in e?e[a]:e[x]}})}var Lt=Mt((U={},w(U,x,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),w(U,A,{fa:"solid",fass:"solid","fa-solid":"solid"}),U)),Rt=Mt((W={},w(W,x,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),w(W,A,{solid:"fass"}),W)),jt=Mt((P={},w(P,x,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),w(P,A,{fass:"fa-solid"}),P)),we=Mt((S={},w(S,x,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),w(S,A,{"fa-solid":"fass"}),S)),xe=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,jn="fa-layers-text",Ae=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Oe=Mt((T={},w(T,x,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),w(T,A,{900:"fass"}),T)),Dn=[1,2,3,4,5,6,7,8,9,10],Pe=Dn.concat([11,12,13,14,15,16,17,18,19,20]),Se=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ct={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Dt=new Set;Object.keys(Rt[x]).map(Dt.add.bind(Dt)),Object.keys(Rt[A]).map(Dt.add.bind(Dt));var Ee=[].concat(dn,ot(Dt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ct.GROUP,ct.SWAP_OPACITY,ct.PRIMARY,ct.SECONDARY]).concat(Dn.map(function(t){return"".concat(t,"x")})).concat(Pe.map(function(t){return"w-".concat(t)})),Ft=$.FontAwesomeConfig||{};function _e(t){var n=s.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function Ie(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(s&&typeof s.querySelector=="function"){var Ce=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ce.forEach(function(t){var n=it(t,2),e=n[0],a=n[1],r=Ie(_e(e));r!=null&&(Ft[a]=r)})}var Fn={styleDefault:"solid",familyDefault:"classic",cssPrefix:ft,replacementClass:yt,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ft.familyPrefix&&(Ft.cssPrefix=Ft.familyPrefix);var wt=c(c({},Fn),Ft);wt.autoReplaceSvg||(wt.observeMutations=!1);var v={};Object.keys(Fn).forEach(function(t){Object.defineProperty(v,t,{enumerable:!0,set:function(e){wt[t]=e,zt.forEach(function(a){return a(v)})},get:function(){return wt[t]}})}),Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(n){wt.cssPrefix=n,zt.forEach(function(e){return e(v)})},get:function(){return wt.cssPrefix}}),$.FontAwesomeConfig=v;var zt=[];function Ne(t){return zt.push(t),function(){zt.splice(zt.indexOf(t),1)}}var tt=st,H={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Te(t){if(!(!t||!h)){var n=s.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=s.head.childNodes,a=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return s.head.insertBefore(n,a),t}}var Me="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Yt(){for(var t=12,n="";t-- >0;)n+=Me[Math.random()*62|0];return n}function xt(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function vn(t){return t.classList?xt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function zn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Le(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(zn(t[e]),'" ')},"").trim()}function Vt(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function bn(t){return t.size!==H.size||t.x!==H.x||t.y!==H.y||t.rotate!==H.rotate||t.flipX||t.flipY}function Re(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),f="rotate(".concat(n.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(f)},d={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:d}}function je(t){var n=t.transform,e=t.width,a=e===void 0?st:e,r=t.height,i=r===void 0?st:r,o=t.startCentered,f=o===void 0?!1:o,l="";return f&&O?l+="translate(".concat(n.x/tt-a/2,"em, ").concat(n.y/tt-i/2,"em) "):f?l+="translate(calc(-50% + ".concat(n.x/tt,"em), calc(-50% + ").concat(n.y/tt,"em)) "):l+="translate(".concat(n.x/tt,"em, ").concat(n.y/tt,"em) "),l+="scale(".concat(n.size/tt*(n.flipX?-1:1),", ").concat(n.size/tt*(n.flipY?-1:1),") "),l+="rotate(".concat(n.rotate,"deg) "),l}var De=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Yn(){var t=ft,n=yt,e=v.cssPrefix,a=v.replacementClass,r=De;if(e!==t||a!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),f=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(f,".".concat(a))}return r}var $n=!1;function pn(){v.autoAddCss&&!$n&&(Te(Yn()),$n=!0)}var Fe={mixout:function(){return{dom:{css:Yn,insertCss:pn}}},hooks:function(){return{beforeDOMElementCreation:function(){pn()},beforeI2svg:function(){pn()}}}},V=$||{};V[M]||(V[M]={}),V[M].styles||(V[M].styles={}),V[M].hooks||(V[M].hooks={}),V[M].shims||(V[M].shims=[]);var z=V[M],Un=[],ze=function t(){s.removeEventListener("DOMContentLoaded",t),qt=1,Un.map(function(n){return n()})},qt=!1;h&&(qt=(s.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(s.readyState),qt||s.addEventListener("DOMContentLoaded",ze));function Ye(t){!h||(qt?setTimeout(t,0):Un.push(t))}function $t(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?zn(t):"<".concat(n," ").concat(Le(a),">").concat(i.map($t).join(""),"</").concat(n,">")}function Wn(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var $e=function(n,e){return function(a,r,i,o){return n.call(e,a,r,i,o)}},gn=function(n,e,a,r){var i=Object.keys(n),o=i.length,f=r!==void 0?$e(e,r):e,l,d,u;for(a===void 0?(l=1,u=n[i[0]]):(l=0,u=a);l<o;l++)d=i[l],u=f(u,n[d],d,n);return u};function Ue(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var i=t.charCodeAt(e++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function hn(t){var n=Ue(t);return n.length===1?n[0].toString(16):null}function We(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Hn(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function yn(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,i=Hn(n);typeof z.hooks.addPack=="function"&&!r?z.hooks.addPack(t,Hn(n)):z.styles[t]=c(c({},z.styles[t]||{}),i),t==="fas"&&yn("fa",n)}var Za=[K(/path d="((?:(?!")[\s\S])+)".*path d="((?:(?!")[\s\S])+)"/,{d1:1,d2:2}),K(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)".*path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/,{cls1:1,d1:2,cls2:3,d2:4}),K(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/,{cls1:1,d1:2})],Qt,Jt,Zt,At=z.styles,He=z.shims,Be=(Qt={},w(Qt,x,Object.values(jt[x])),w(Qt,A,Object.values(jt[A])),Qt),kn=null,Bn={},Gn={},Xn={},Kn={},Vn={},Ge=(Jt={},w(Jt,x,Object.keys(Lt[x])),w(Jt,A,Object.keys(Lt[A])),Jt);function Xe(t){return~Ee.indexOf(t)}function Ke(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!Xe(r)?r:null}var qn=function(){var n=function(i){return gn(At,function(o,f,l){return o[l]=gn(f,i,{}),o},{})};Bn=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var f=i[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){r[l.toString(16)]=o})}return r}),Gn=n(function(r,i,o){if(r[o]=o,i[2]){var f=i[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){r[l]=o})}return r}),Vn=n(function(r,i,o){var f=i[2];return r[o]=o,f.forEach(function(l){r[l]=o}),r});var e="far"in At||v.autoFetchSvg,a=gn(He,function(r,i){var o=i[0],f=i[1],l=i[2];return f==="far"&&!e&&(f="fas"),typeof o=="string"&&(r.names[o]={prefix:f,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:f,iconName:l}),r},{names:{},unicodes:{}});Xn=a.names,Kn=a.unicodes,kn=tn(v.styleDefault,{family:v.familyDefault})};Ne(function(t){kn=tn(t.styleDefault,{family:v.familyDefault})}),qn();function wn(t,n){return(Bn[t]||{})[n]}function Ve(t,n){return(Gn[t]||{})[n]}function ut(t,n){return(Vn[t]||{})[n]}function Qn(t){return Xn[t]||{prefix:null,iconName:null}}function qe(t){var n=Kn[t],e=wn("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function nt(){return kn}var xn=function(){return{prefix:null,iconName:null,rest:[]}};function tn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.family,a=e===void 0?x:e,r=Lt[a][t],i=Rt[a][t]||Rt[a][r],o=t in z.styles?t:null;return i||o||null}var Jn=(Zt={},w(Zt,x,Object.keys(jt[x])),w(Zt,A,Object.keys(jt[A])),Zt);function nn(t){var n,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,r=a===void 0?!1:a,i=(n={},w(n,x,"".concat(v.cssPrefix,"-").concat(x)),w(n,A,"".concat(v.cssPrefix,"-").concat(A)),n),o=null,f=x;(t.includes(i[x])||t.some(function(d){return Jn[x].includes(d)}))&&(f=x),(t.includes(i[A])||t.some(function(d){return Jn[A].includes(d)}))&&(f=A);var l=t.reduce(function(d,u){var b=Ke(v.cssPrefix,u);if(At[u]?(u=Be[f].includes(u)?we[f][u]:u,o=u,d.prefix=u):Ge[f].indexOf(u)>-1?(o=u,d.prefix=tn(u,{family:f})):b?d.iconName=b:u!==v.replacementClass&&u!==i[x]&&u!==i[A]&&d.rest.push(u),!r&&d.prefix&&d.iconName){var g=o==="fa"?Qn(d.iconName):{},k=ut(d.prefix,d.iconName);g.prefix&&(o=null),d.iconName=g.iconName||k||d.iconName,d.prefix=g.prefix||d.prefix,d.prefix==="far"&&!At.far&&At.fas&&!v.autoFetchSvg&&(d.prefix="fas")}return d},xn());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===A&&(At.fass||v.autoFetchSvg)&&(l.prefix="fass",l.iconName=ut(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=nt()||"fas"),l}var Qe=function(){function t(){Wt(this,t),this.definitions={}}return pt(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(f){e.definitions[f]=c(c({},e.definitions[f]||{}),o[f]),yn(f,o[f]);var l=jt[x][f];l&&yn(l,o[f]),qn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],f=o.prefix,l=o.iconName,d=o.icon,u=d[2];e[f]||(e[f]={}),u.length>0&&u.forEach(function(b){typeof b=="string"&&(e[f][b]=d)}),e[f][l]=d}),e}}]),t}(),Zn=[],Ot={},Pt={},Je=Object.keys(Pt);function Ze(t,n){var e=n.mixoutsTo;return Zn=t,Ot={},Object.keys(Pt).forEach(function(a){Je.indexOf(a)===-1&&delete Pt[a]}),Zn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(e[o]=r[o]),rt(r[o])==="object"&&Object.keys(r[o]).forEach(function(f){e[o]||(e[o]={}),e[o][f]=r[o][f]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){Ot[o]||(Ot[o]=[]),Ot[o].push(i[o])})}a.provides&&a.provides(Pt)}),e}function An(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var i=Ot[t]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(a))}),n}function mt(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=Ot[t]||[];r.forEach(function(i){i.apply(null,e)})}function q(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return Pt[t]?Pt[t].apply(null,n):void 0}function On(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||nt();if(!!n)return n=ut(e,n)||n,Wn(te.definitions,e,n)||Wn(z.styles,e,n)}var te=new Qe,ta=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,mt("noAuto")},na={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return h?(mt("beforeI2svg",n),q("pseudoElements2svg",n),q("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,Ye(function(){aa({autoReplaceSvgRoot:e}),mt("watch",n)})}},ea={icon:function(n){if(n===null)return null;if(rt(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:ut(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=tn(n[0]);return{prefix:a,iconName:ut(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(v.cssPrefix,"-"))>-1||n.match(xe))){var r=nn(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||nt(),iconName:ut(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=nt();return{prefix:i,iconName:ut(i,n)||n}}}},N={noAuto:ta,config:v,dom:na,parse:ea,library:te,findIconDefinition:On,toHtml:$t},aa=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?s:e;(Object.keys(z.styles).length>0||v.autoFetchSvg)&&h&&v.autoReplaceSvg&&N.dom.i2svg({node:a})};function en(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return $t(a)})}}),Object.defineProperty(t,"node",{get:function(){if(!!h){var a=s.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function ra(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(bn(o)&&e.found&&!a.found){var f=e.width,l=e.height,d={x:f/l/2,y:.5};r.style=Vt(c(c({},i),{},{"transform-origin":"".concat(d.x+o.x/16,"em ").concat(d.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function ia(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(n,"-").concat(v.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:o}),children:a}]}]}function Pn(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,i=t.iconName,o=t.transform,f=t.symbol,l=t.title,d=t.maskId,u=t.titleId,b=t.extra,g=t.watchable,k=g===void 0?!1:g,I=a.found?a:e,D=I.width,Y=I.height,B=r==="fak",E=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(at){return b.classes.indexOf(at)===-1}).filter(function(at){return at!==""||!!at}).concat(b.classes).join(" "),C={children:[],attributes:c(c({},b.attributes),{},{"data-prefix":r,"data-icon":i,class:E,role:b.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(D," ").concat(Y)})},G=B&&!~b.classes.indexOf("fa-fw")?{width:"".concat(D/Y*16*.0625,"em")}:{};k&&(C.attributes[j]=""),l&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(u||Yt())},children:[l]}),delete C.attributes.title);var R=c(c({},C),{},{prefix:r,iconName:i,main:e,mask:a,maskId:d,transform:o,symbol:f,styles:c(c({},G),b.styles)}),dt=a.found&&e.found?q("generateAbstractMask",R)||{children:[],attributes:{}}:q("generateAbstractIcon",R)||{children:[],attributes:{}},vt=dt.children,Ln=dt.attributes;return R.children=vt,R.attributes=Ln,f?ia(R):ra(R)}function ne(t){var n=t.content,e=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,f=t.watchable,l=f===void 0?!1:f,d=c(c(c({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(d[j]="");var u=c({},o.styles);bn(r)&&(u.transform=je({transform:r,startCentered:!0,width:e,height:a}),u["-webkit-transform"]=u.transform);var b=Vt(u);b.length>0&&(d.style=b);var g=[];return g.push({tag:"span",attributes:d,children:[n]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function oa(t){var n=t.content,e=t.title,a=t.extra,r=c(c(c({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),i=Vt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var Sn=z.styles;function En(t){var n=t[0],e=t[1],a=t.slice(4),r=it(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(ct.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(ct.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(ct.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:e,icon:o}}var sa={found:!1,width:512,height:512};function fa(t,n){!Rn&&!v.showMissingIcons&&t&&Q.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function _n(t,n){var e=n;return n==="fa"&&v.styleDefault!==null&&(n=nt()),new Promise(function(a,r){var i={found:!1,width:512,height:512,icon:q("missingIconAbstract")||{}};if(e==="fa"){var o=Qn(t)||{};t=o.iconName||t,n=o.prefix||n}if(t&&n&&Sn[n]&&Sn[n][t]){var f=Sn[n][t];return a(En(f))}fa(t,n),a(c(c({},sa),{},{icon:v.showMissingIcons&&t?q("missingIconAbstract")||{}:{}}))})}var ee=function(){},In=v.measurePerformance&&p&&p.mark&&p.measure?p:{mark:ee,measure:ee},Ut='FA "6.2.0"',la=function(n){return In.mark("".concat(Ut," ").concat(n," begins")),function(){return ae(n)}},ae=function(n){In.mark("".concat(Ut," ").concat(n," ends")),In.measure("".concat(Ut," ").concat(n),"".concat(Ut," ").concat(n," begins"),"".concat(Ut," ").concat(n," ends"))},Cn={begin:la,end:ae},an=function(){};function re(t){var n=t.getAttribute?t.getAttribute(j):null;return typeof n=="string"}function ca(t){var n=t.getAttribute?t.getAttribute(Z):null,e=t.getAttribute?t.getAttribute(lt):null;return n&&e}function ua(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(v.replacementClass)}function ma(){if(v.autoReplaceSvg===!0)return rn.replace;var t=rn[v.autoReplaceSvg];return t||rn.replace}function da(t){return s.createElementNS("http://www.w3.org/2000/svg",t)}function va(t){return s.createElement(t)}function ie(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?da:va:e;if(typeof t=="string")return s.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(ie(o,{ceFn:a}))}),r}function ba(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var rn={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(ie(r),e)}),e.getAttribute(j)===null&&v.keepOriginalSource){var a=s.createComment(ba(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~vn(e).indexOf(v.replacementClass))return rn.replace(n);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(f,l){return l===v.replacementClass||l.match(r)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(f){return $t(f)}).join(`
`);e.setAttribute(j,""),e.innerHTML=o}};function oe(t){t()}function se(t,n){var e=typeof n=="function"?n:an;if(t.length===0)e();else{var a=oe;v.mutateApproach===kt&&(a=$.requestAnimationFrame||oe),a(function(){var r=ma(),i=Cn.begin("mutate");t.map(r),i(),e()})}}var Nn=!1;function fe(){Nn=!0}function Tn(){Nn=!1}var on=null;function le(t){if(!!m&&!!v.observeMutations){var n=t.treeCallback,e=n===void 0?an:n,a=t.nodeCallback,r=a===void 0?an:a,i=t.pseudoElementsCallback,o=i===void 0?an:i,f=t.observeMutationsRoot,l=f===void 0?s:f;on=new m(function(d){if(!Nn){var u=nt();xt(d).forEach(function(b){if(b.type==="childList"&&b.addedNodes.length>0&&!re(b.addedNodes[0])&&(v.searchPseudoElements&&o(b.target),e(b.target)),b.type==="attributes"&&b.target.parentNode&&v.searchPseudoElements&&o(b.target.parentNode),b.type==="attributes"&&re(b.target)&&~Se.indexOf(b.attributeName))if(b.attributeName==="class"&&ca(b.target)){var g=nn(vn(b.target)),k=g.prefix,I=g.iconName;b.target.setAttribute(Z,k||u),I&&b.target.setAttribute(lt,I)}else ua(b.target)&&r(b.target)})}}),h&&on.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function pa(){!on||on.disconnect()}function ga(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],f=i.slice(1);return o&&f.length>0&&(a[o]=f.join(":").trim()),a},{})),e}function ha(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=nn(vn(t));return r.prefix||(r.prefix=nt()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ve(r.prefix,t.innerText)||wn(r.prefix,hn(t.innerText))),!r.iconName&&v.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function ya(t){var n=xt(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return v.autoA11y&&(e?n["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(a||Yt()):(n["aria-hidden"]="true",n.focusable="false")),n}function ka(){return{iconName:null,title:null,titleId:null,prefix:null,transform:H,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ce(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=ha(t),a=e.iconName,r=e.prefix,i=e.rest,o=ya(t),f=An("parseNodeAttributes",{},t),l=n.styleParser?ga(t):[];return c({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:H,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},f)}var wa=z.styles;function ue(t){var n=v.autoReplaceSvg==="nest"?ce(t,{styleParser:!1}):ce(t);return~n.extra.classes.indexOf(jn)?q("generateLayersText",t,n):q("generateSvgReplacementMutation",t,n)}var et=new Set;dn.map(function(t){et.add("fa-".concat(t))}),Object.keys(Lt[x]).map(et.add.bind(et)),Object.keys(Lt[A]).map(et.add.bind(et)),et=ot(et);function me(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!h)return Promise.resolve();var e=s.documentElement.classList,a=function(b){return e.add("".concat(Tt,"-").concat(b))},r=function(b){return e.remove("".concat(Tt,"-").concat(b))},i=v.autoFetchSvg?et:dn.map(function(u){return"fa-".concat(u)}).concat(Object.keys(wa));i.includes("fa")||i.push("fa");var o=[".".concat(jn,":not([").concat(j,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(j,"])")})).join(", ");if(o.length===0)return Promise.resolve();var f=[];try{f=xt(t.querySelectorAll(o))}catch(u){}if(f.length>0)a("pending"),r("complete");else return Promise.resolve();var l=Cn.begin("onTree"),d=f.reduce(function(u,b){try{var g=ue(b);g&&u.push(g)}catch(k){Rn||k.name==="MissingIcon"&&Q.error(k)}return u},[]);return new Promise(function(u,b){Promise.all(d).then(function(g){se(g,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),l(),u()})}).catch(function(g){l(),b(g)})})}function xa(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ue(t).then(function(e){e&&se([e],n)})}function Aa(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:On(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:On(r||{})),t(a,c(c({},e),{},{mask:r}))}}var Oa=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?H:a,i=e.symbol,o=i===void 0?!1:i,f=e.mask,l=f===void 0?null:f,d=e.maskId,u=d===void 0?null:d,b=e.title,g=b===void 0?null:b,k=e.titleId,I=k===void 0?null:k,D=e.classes,Y=D===void 0?[]:D,B=e.attributes,E=B===void 0?{}:B,C=e.styles,G=C===void 0?{}:C;if(!!n){var R=n.prefix,dt=n.iconName,vt=n.icon;return en(c({type:"icon"},n),function(){return mt("beforeDOMElementCreation",{iconDefinition:n,params:e}),v.autoA11y&&(g?E["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(I||Yt()):(E["aria-hidden"]="true",E.focusable="false")),Pn({icons:{main:En(vt),mask:l?En(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:R,iconName:dt,transform:c(c({},H),r),symbol:o,title:g,maskId:u,titleId:I,extra:{attributes:E,styles:G,classes:Y}})})}},Pa={mixout:function(){return{icon:Aa(Oa)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=me,e.nodeCallback=xa,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?s:a,i=e.callback,o=i===void 0?function(){}:i;return me(r,o)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,i=a.title,o=a.titleId,f=a.prefix,l=a.transform,d=a.symbol,u=a.mask,b=a.maskId,g=a.extra;return new Promise(function(k,I){Promise.all([_n(r,f),u.iconName?_n(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(D){var Y=it(D,2),B=Y[0],E=Y[1];k([e,Pn({icons:{main:B,mask:E},prefix:f,iconName:r,transform:l,symbol:d,maskId:b,title:i,titleId:o,extra:g,watchable:!0})])}).catch(I)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.transform,f=e.styles,l=Vt(f);l.length>0&&(r.style=l);var d;return bn(o)&&(d=q("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(d||i.icon),{children:a,attributes:r}}}},Sa={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return en({type:"layer"},function(){mt("beforeDOMElementCreation",{assembler:e,params:a});var o=[];return e(function(f){Array.isArray(f)?f.map(function(l){o=o.concat(l.abstract)}):o=o.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(ot(i)).join(" ")},children:o}]})}}}},Ea={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,f=o===void 0?[]:o,l=a.attributes,d=l===void 0?{}:l,u=a.styles,b=u===void 0?{}:u;return en({type:"counter",content:e},function(){return mt("beforeDOMElementCreation",{content:e,params:a}),oa({content:e.toString(),title:i,extra:{attributes:d,styles:b,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(ot(f))}})})}}}},_a={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?H:r,o=a.title,f=o===void 0?null:o,l=a.classes,d=l===void 0?[]:l,u=a.attributes,b=u===void 0?{}:u,g=a.styles,k=g===void 0?{}:g;return en({type:"text",content:e},function(){return mt("beforeDOMElementCreation",{content:e,params:a}),ne({content:e,transform:c(c({},H),i),title:f,extra:{attributes:b,styles:k,classes:["".concat(v.cssPrefix,"-layers-text")].concat(ot(d))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,i=a.transform,o=a.extra,f=null,l=null;if(O){var d=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();f=u.width/d,l=u.height/d}return v.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,ne({content:e.innerHTML,width:f,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},Ia=new RegExp('"',"ug"),de=[1105920,1112319];function Ca(t){var n=t.replace(Ia,""),e=We(n,0),a=e>=de[0]&&e<=de[1],r=n.length===2?n[0]===n[1]:!1;return{value:hn(r?n[0]:n),isSecondary:a||r}}function ve(t,n){var e="".concat(Nt).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var i=xt(t.children),o=i.filter(function(vt){return vt.getAttribute(L)===n})[0],f=$.getComputedStyle(t,n),l=f.getPropertyValue("font-family").match(Ae),d=f.getPropertyValue("font-weight"),u=f.getPropertyValue("content");if(o&&!l)return t.removeChild(o),a();if(l&&u!=="none"&&u!==""){var b=f.getPropertyValue("content"),g=~["Sharp"].indexOf(l[2])?A:x,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Rt[g][l[2].toLowerCase()]:Oe[g][d],I=Ca(b),D=I.value,Y=I.isSecondary,B=l[0].startsWith("FontAwesome"),E=wn(k,D),C=E;if(B){var G=qe(D);G.iconName&&G.prefix&&(E=G.iconName,k=G.prefix)}if(E&&!Y&&(!o||o.getAttribute(Z)!==k||o.getAttribute(lt)!==C)){t.setAttribute(e,C),o&&t.removeChild(o);var R=ka(),dt=R.extra;dt.attributes[L]=n,_n(E,k).then(function(vt){var Ln=Pn(c(c({},R),{},{icons:{main:vt,mask:xn()},prefix:k,iconName:C,extra:dt,watchable:!0})),at=s.createElement("svg");n==="::before"?t.insertBefore(at,t.firstChild):t.appendChild(at),at.outerHTML=Ln.map(function(Ja){return $t(Ja)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function Na(t){return Promise.all([ve(t,"::before"),ve(t,"::after")])}function Ta(t){return t.parentNode!==document.head&&!~ke.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(L)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function be(t){if(!!h)return new Promise(function(n,e){var a=xt(t.querySelectorAll("*")).filter(Ta).map(Na),r=Cn.begin("searchPseudoElements");fe(),Promise.all(a).then(function(){r(),Tn(),n()}).catch(function(){r(),Tn(),e()})})}var Ma={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=be,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?s:a;v.searchPseudoElements&&be(r)}}},pe=!1,La={mixout:function(){return{dom:{unwatch:function(){fe(),pe=!0}}}},hooks:function(){return{bootstrap:function(){le(An("mutationObserverCallbacks",{}))},noAuto:function(){pa()},watch:function(e){var a=e.observeMutationsRoot;pe?Tn():le(An("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},ge=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],f=i.slice(1).join("-");if(o&&f==="h")return a.flipX=!0,a;if(o&&f==="v")return a.flipY=!0,a;if(f=parseFloat(f),isNaN(f))return a;switch(o){case"grow":a.size=a.size+f;break;case"shrink":a.size=a.size-f;break;case"left":a.x=a.x-f;break;case"right":a.x=a.x+f;break;case"up":a.y=a.y-f;break;case"down":a.y=a.y+f;break;case"rotate":a.rotate=a.rotate+f;break}return a},e)},Ra={mixout:function(){return{parse:{transform:function(e){return ge(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=ge(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,i=e.containerWidth,o=e.iconWidth,f={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),d="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),b={transform:"".concat(l," ").concat(d," ").concat(u)},g={transform:"translate(".concat(o/2*-1," -256)")},k={outer:f,inner:b,path:g};return{tag:"g",attributes:c({},k.outer),children:[{tag:"g",attributes:c({},k.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:c(c({},a.icon.attributes),k.path)}]}]}}}},Mn={x:0,y:0,width:"100%",height:"100%"};function he(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function ja(t){return t.tag==="g"?t.children:[t]}var Da={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),i=r?nn(r.split(" ").map(function(o){return o.trim()})):xn();return i.prefix||(i.prefix=nt()),e.mask=i,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.mask,f=e.maskId,l=e.transform,d=i.width,u=i.icon,b=o.width,g=o.icon,k=Re({transform:l,containerWidth:b,iconWidth:d}),I={tag:"rect",attributes:c(c({},Mn),{},{fill:"white"})},D=u.children?{children:u.children.map(he)}:{},Y={tag:"g",attributes:c({},k.inner),children:[he(c({tag:u.tag,attributes:c(c({},u.attributes),k.path)},D))]},B={tag:"g",attributes:c({},k.outer),children:[Y]},E="mask-".concat(f||Yt()),C="clip-".concat(f||Yt()),G={tag:"mask",attributes:c(c({},Mn),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,B]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:ja(g)},G]};return a.push(R,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(E,")")},Mn)}),{children:a,attributes:r}}}},Fa={provides:function(n){var e=!1;$.matchMedia&&(e=$.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:c(c({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=c(c({},i),{},{attributeName:"opacity"}),f={tag:"circle",attributes:c(c({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||f.children.push({tag:"animate",attributes:c(c({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(f),a.push({tag:"path",attributes:c(c({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:c(c({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:c(c({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},za={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},Ya=[Fe,Pa,Sa,Ea,_a,Ma,La,Ra,Da,Fa,za];Ze(Ya,{mixoutsTo:N});var $a=N.noAuto,Ua=N.config,Wa=N.library,Ha=N.dom,Ba=N.parse,Ga=N.findIconDefinition,Xa=N.toHtml,Ka=N.icon,Va=N.layer,qa=N.text,Qa=N.counter;_.noAuto=$a,_.config=Ua,_.library=Wa,_.dom=Ha,_.parse=Ba,_.findIconDefinition=Ga,_.toHtml=Xa,_.icon=Ka,_.layer=Va,_.text=qa,_.counter=Qa,_.api=N,Object.defineProperty(_,"__esModule",{value:!0})})},67814:(ye,sn,X)=>{"use strict";X.d(sn,{G:()=>J});var Q=X(12494),_=X.n(Q),bt=X(45697),c=X.n(bt),rt=X(67294),K=X(25108);function Wt(s,m){var p=Object.keys(s);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(s);m&&(y=y.filter(function(h){return Object.getOwnPropertyDescriptor(s,h).enumerable})),p.push.apply(p,y)}return p}function F(s){for(var m=1;m<arguments.length;m++){var p=arguments[m]!=null?arguments[m]:{};m%2?Wt(Object(p),!0).forEach(function(y){w(s,y,p[y])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(p)):Wt(Object(p)).forEach(function(y){Object.defineProperty(s,y,Object.getOwnPropertyDescriptor(p,y))})}return s}function pt(s){return pt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},pt(s)}function w(s,m,p){return m in s?Object.defineProperty(s,m,{value:p,enumerable:!0,configurable:!0,writable:!0}):s[m]=p,s}function fn(s,m){if(s==null)return{};var p={},y=Object.keys(s),h,O;for(O=0;O<y.length;O++)h=y[O],!(m.indexOf(h)>=0)&&(p[h]=s[h]);return p}function gt(s,m){if(s==null)return{};var p=fn(s,m),y,h;if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(s);for(h=0;h<O.length;h++)y=O[h],!(m.indexOf(y)>=0)&&(!Object.prototype.propertyIsEnumerable.call(s,y)||(p[y]=s[y]))}return p}function it(s){return ot(s)||ln(s)||cn(s)||un()}function ot(s){if(Array.isArray(s))return St(s)}function ln(s){if(typeof Symbol!="undefined"&&s[Symbol.iterator]!=null||s["@@iterator"]!=null)return Array.from(s)}function cn(s,m){if(!!s){if(typeof s=="string")return St(s,m);var p=Object.prototype.toString.call(s).slice(8,-1);if(p==="Object"&&s.constructor&&(p=s.constructor.name),p==="Map"||p==="Set")return Array.from(s);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return St(s,m)}}function St(s,m){(m==null||m>s.length)&&(m=s.length);for(var p=0,y=new Array(m);p<m;p++)y[p]=s[p];return y}function un(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ht(s){var m,p=s.beat,y=s.fade,h=s.beatFade,O=s.bounce,U=s.shake,W=s.flash,P=s.spin,S=s.spinPulse,T=s.spinReverse,M=s.pulse,st=s.fixedWidth,ft=s.inverse,yt=s.border,j=s.listItem,L=s.flip,Nt=s.size,Z=s.rotation,lt=s.pull,Tt=(m={"fa-beat":p,"fa-fade":y,"fa-beat-fade":h,"fa-bounce":O,"fa-shake":U,"fa-flash":W,"fa-spin":P,"fa-spin-reverse":T,"fa-spin-pulse":S,"fa-pulse":M,"fa-fw":st,"fa-inverse":ft,"fa-border":yt,"fa-li":j,"fa-flip":L===!0,"fa-flip-horizontal":L==="horizontal"||L==="both","fa-flip-vertical":L==="vertical"||L==="both"},w(m,"fa-".concat(Nt),typeof Nt!="undefined"&&Nt!==null),w(m,"fa-rotate-".concat(Z),typeof Z!="undefined"&&Z!==null&&Z!==0),w(m,"fa-pull-".concat(lt),typeof lt!="undefined"&&lt!==null),w(m,"fa-swap-opacity",s.swapOpacity),m);return Object.keys(Tt).map(function(kt){return Tt[kt]?kt:null}).filter(function(kt){return kt})}function Et(s){return s=s-0,s===s}function Bt(s){return Et(s)?s:(s=s.replace(/[\-_\s]+(.)?/g,function(m,p){return p?p.toUpperCase():""}),s.substr(0,1).toLowerCase()+s.substr(1))}var mn=["style"];function Gt(s){return s.charAt(0).toUpperCase()+s.slice(1)}function _t(s){return s.split(";").map(function(m){return m.trim()}).filter(function(m){return m}).reduce(function(m,p){var y=p.indexOf(":"),h=Bt(p.slice(0,y)),O=p.slice(y+1).trim();return h.startsWith("webkit")?m[Gt(h)]=O:m[h]=O,m},{})}function It(s,m){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof m=="string")return m;var y=(m.children||[]).map(function(P){return It(s,P)}),h=Object.keys(m.attributes||{}).reduce(function(P,S){var T=m.attributes[S];switch(S){case"class":P.attrs.className=T,delete m.attributes.class;break;case"style":P.attrs.style=_t(T);break;default:S.indexOf("aria-")===0||S.indexOf("data-")===0?P.attrs[S.toLowerCase()]=T:P.attrs[Bt(S)]=T}return P},{attrs:{}}),O=p.style,U=O===void 0?{}:O,W=gt(p,mn);return h.attrs.style=F(F({},h.attrs.style),U),s.apply(void 0,[m.tag,F(F({},h.attrs),W)].concat(it(y)))}var Ct=!1;try{Ct=!0}catch(s){}function Xt(){if(!Ct&&K&&typeof K.error=="function"){var s;(s=K).error.apply(s,arguments)}}function Kt(s){if(s&&pt(s)==="object"&&s.prefix&&s.iconName&&s.icon)return s;if(Q.parse.icon)return Q.parse.icon(s);if(s===null)return null;if(s&&pt(s)==="object"&&s.prefix&&s.iconName)return s;if(Array.isArray(s)&&s.length===2)return{prefix:s[0],iconName:s[1]};if(typeof s=="string")return{prefix:"fas",iconName:s}}function ht(s,m){return Array.isArray(m)&&m.length>0||!Array.isArray(m)&&m?w({},s,m):{}}var J=rt.forwardRef(function(s,m){var p=s.icon,y=s.mask,h=s.symbol,O=s.className,U=s.title,W=s.titleId,P=s.maskId,S=Kt(p),T=ht("classes",[].concat(it(Ht(s)),it(O.split(" ")))),M=ht("transform",typeof s.transform=="string"?Q.parse.transform(s.transform):s.transform),st=ht("mask",Kt(y)),ft=(0,Q.icon)(S,F(F(F(F({},T),M),st),{},{symbol:h,title:U,titleId:W,maskId:P}));if(!ft)return Xt("Could not find icon",S),null;var yt=ft.abstract,j={ref:m};return Object.keys(s).forEach(function(L){J.defaultProps.hasOwnProperty(L)||(j[L]=s[L])}),$(yt[0],j)});J.displayName="FontAwesomeIcon",J.propTypes={beat:c().bool,border:c().bool,beatFade:c().bool,bounce:c().bool,className:c().string,fade:c().bool,flash:c().bool,mask:c().oneOfType([c().object,c().array,c().string]),maskId:c().string,fixedWidth:c().bool,inverse:c().bool,flip:c().oneOf([!0,!1,"horizontal","vertical","both"]),icon:c().oneOfType([c().object,c().array,c().string]),listItem:c().bool,pull:c().oneOf(["right","left"]),pulse:c().bool,rotation:c().oneOf([0,90,180,270]),shake:c().bool,size:c().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:c().bool,spinPulse:c().bool,spinReverse:c().bool,symbol:c().oneOfType([c().bool,c().string]),title:c().string,titleId:c().string,transform:c().oneOfType([c().string,c().object]),swapOpacity:c().bool},J.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var $=It.bind(null,rt.createElement)}}]);
