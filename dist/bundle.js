!function(e){var n={};function t(a){if(n[a])return n[a].exports;var c=n[a]={i:a,l:!1,exports:{}};return e[a].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)t.d(a,c,function(n){return e[n]}.bind(null,c));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=6)}([function(e,n,t){"use strict";t.r(n),n.default=t.p+"28c0bcbcc79452699abc805de3699247.jpg"},function(e,n,t){var a=t(2),c=t(3);"string"==typeof(c=c.__esModule?c.default:c)&&(c=[[e.i,c,""]]);var r={insert:"head",singleton:!1};a(c,r);e.exports=c.locals||{}},function(e,n,t){"use strict";var a,c=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function i(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},a=[],c=0;c<e.length;c++){var r=e[c],s=n.base?r[0]+n.base:r[0],d=t[s]||0,u="".concat(s," ").concat(d);t[s]=d+1;var l=i(u),p={css:r[1],media:r[2],sourceMap:r[3]};-1!==l?(o[l].references++,o[l].updater(p)):o.push({identifier:u,updater:v(p,n),references:1}),a.push(u)}return a}function d(e){var n=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var c=t.nc;c&&(a.nonce=c)}if(Object.keys(a).forEach((function(e){n.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(n);else{var o=r(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var u,l=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function p(e,n,t,a){var c=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=l(n,c);else{var r=document.createTextNode(c),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(r,o[n]):e.appendChild(r)}}function m(e,n,t){var a=t.css,c=t.media,r=t.sourceMap;if(c?e.setAttribute("media",c):e.removeAttribute("media"),r&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var f=null,h=0;function v(e,n){var t,a,c;if(n.singleton){var r=h++;t=f||(f=d(n)),a=p.bind(null,t,r,!1),c=p.bind(null,t,r,!0)}else t=d(n),a=m.bind(null,t,n),c=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return a(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;a(e=n)}else c()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=c());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<t.length;a++){var c=i(t[a]);o[c].references--}for(var r=s(e,n),d=0;d<t.length;d++){var u=i(t[d]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}t=r}}}},function(e,n,t){var a=t(4),c=t(5),r=t(0);n=a(!1);var o=c(r);n.push([e.i,"#content {\n  color: red;\n  background: url("+o+");\n}\n",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",a=e[3];if(!a)return t;if(n&&"function"==typeof btoa){var c=(o=a,i=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(s," */")),r=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[t].concat(r).concat([c]).join("\n")}var o,i,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,a){"string"==typeof e&&(e=[[null,e,""]]);var c={};if(a)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(c[o]=!0)}for(var i=0;i<e.length;i++){var s=[].concat(e[i]);a&&c[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},function(e,n,t){"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,n,t){"use strict";t.r(n);t(1);var a=t(0),c=t.p+"4a4ec76df64f7ce5bb2076a5cf260309.jpg",r=t.p+"223b557a8f114dbdeb5c307e000c9a5f.jpg",o=t.p+"a00f375bb25404d52e1e6aa8d48a91e7.png",i=t.p+"fb4b201da6f930b8c8730811048748c6.png",s=t.p+"cc307ecbfc6250f476f935e2693afc3a.png",d=t.p+"5022fc7d03be0ae72dc018963b14ec11.png",u=t.p+"2e9d816d7586e6b974c3a7433814b00e.png";const l=document.createElement("a");l.innerText="Read More",l.href="#";const p=document.createElement("a");p.innerText="Read More",p.href="#";const m=document.createElement("a");m.innerText="Read More",m.href="#";const f=new Image;f.src=a.default,f.classList.add("active");const h=new Image;h.src=c;const v=new Image;v.src=r;const b=new Image;b.src=o;const g=new Image;g.src=i;const E=new Image;E.src=s;const y=new Image;y.src=d;const x=new Image;x.src=u;window.onload=()=>{(()=>{const e=document.getElementById("container"),n=document.createElement("header");n.className="active",n.id="navbar",e.appendChild(n);const t=document.createElement("a");t.href="#",t.className="logo",t.innerHTML="Good";const a=document.createElement("span");a.innerHTML="Foods",t.appendChild(a),n.appendChild(t);const c=document.createElement("ul"),r=document.createElement("li"),o=document.createElement("li"),i=document.createElement("li"),s=document.createElement("li"),d=document.createElement("a");d.className="active",d.innerText="Home",d.href="#";const u=document.createElement("a");u.innerText="Menu",u.href="#";const l=document.createElement("a");l.innerText="About",l.href="#";const p=document.createElement("a");p.innerText="Contact",p.href="#",r.appendChild(d),o.appendChild(u),i.appendChild(l),s.appendChild(p),c.appendChild(r),c.appendChild(o),c.appendChild(i),c.appendChild(s),n.appendChild(c)})(),(()=>{const e=document.getElementById("container"),n=document.createElement("div");n.className="content";const t=document.createElement("div");t.className="bannerText",t.id="slideShowText",n.append(t);const a=document.createElement("div");a.className="active";const c=document.createElement("h2");c.innerHTML="Eat Healthy<br> Stay Healthy";const r=document.createElement("p");r.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget urna molestie, efficitur mi quis, lobortis sapien. Sed auctor porta massa, at luctus ante molestie non.",t.append(a),a.append(c),a.append(r),a.append(l);const o=document.createElement("div"),i=document.createElement("h2");i.innerHTML="Eat Your<br>Veggies";const s=document.createElement("p");s.innerText="Vivamus malesuada est vitae finibus pulvinar. Integer nulla ipsum, accumsan et maximus vel, aliquet quis arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hemenaeos.",t.append(o),o.append(i),o.append(s),o.append(p);const d=document.createElement("div"),u=document.createElement("h2");u.innerHTML="Good Food<br>Good Mood";const C=document.createElement("p");C.innerText="Sed auctor porta massa, at luctus ante molestie non. Vivamus malesua est vitae finibus pulvinar. Integer nulla ipsum, accumsan et maximus vel, aliquet quis arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hemenaeos.",t.append(d),d.append(u),d.append(C),d.append(m);const T=document.createElement("div");T.className="bannerImg",T.id="slideShow",T.append(f),T.append(h),T.append(v),n.append(T);const M=document.createElement("div");M.className="icons";const w=document.createElement("ul");w.className="sci";const j=document.createElement("li"),S=document.createElement("li"),I=document.createElement("li"),N=document.createElement("a");N.href="#";const L=document.createElement("a");L.href="#";const O=document.createElement("a");O.href="#",N.append(b),L.append(g),O.append(E),j.append(N),S.append(L),I.append(O),w.append(j),w.append(S),w.append(I),M.append(w),n.append(M);const q=document.createElement("ul");q.className="controls";const H=document.createElement("li"),_=document.createElement("li"),R=document.createElement("a");R.href="#";const P=document.createElement("a");P.href="#",R.append(y),P.append(x),H.append(R),_.append(P),q.append(H),q.append(_),n.append(q),e.append(n)})()}}]);