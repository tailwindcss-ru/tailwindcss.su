_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[102],{"5xSE":function(e,t,n){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"7OmX":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:e,variants:t}){e({".list-inside":{"list-style-position":"inside"},".list-outside":{"list-style-position":"outside"}},t("listStylePosition"))}}},"8C7G":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("rePB"),s=n("q1tI"),i=n.n(s),r=n("98BF"),c=n("Zb5r"),o=n("AOjV"),l=i.a.createElement;function p(e){var t=e.plugin,n=e.name,s=r.defaultConfig.variants[t]||["responsive"];n=n||t.replace(/([a-z])([A-Z])/g,(function(e,t,n){return"".concat(t," ").concat(n.toLowerCase())}));var i=["responsive","hover","focus","active","group-hover"].filter((function(e){return!s.includes(e)})).slice(0,2),p="\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ".concat(s.length?"\u0442\u043e\u043b\u044c\u043a\u043e ".concat(Object(c.a)(s).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")):"\u043d\u0435\u0442"," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ").concat(n,".");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:p}}),l("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",n," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",l("code",null,t)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",l("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",l("code",null,"tailwind.config.js"),"."),l("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",s.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(c.a)(i),":"),l(o.a,{path:"variants.extend",before:"...",add:Object(a.a)({},t,i)}))}},AOjV:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("q1tI"),s=n.n(a),i=(n("Btb4"),n("AI3G")),r=n("iuhU"),c=s.a.createElement;function o(e){var t=e.value;return"string"===typeof t?c("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?c(s.a.Fragment,null,c("span",{className:"token punctuation"},"["),t.map((function(e,n){return c(a.Fragment,{key:n},c(o,{value:e}),n===t.length-1?null:c("span",{className:"token punctuation"},", "))})),c("span",{className:"token punctuation"},"]")):"boolean"===typeof t?c("span",{className:"token boolean"},t.toString()):t.toString()}function l(e){var t=e.edits,n=e.indent,s=void 0===n?"":n,i=e.type,l=void 0===i?"inserted":i;return c("span",{className:Object(r.a)("token",{"inserted-sign inserted":"inserted"===l,"deleted-sign deleted":"inserted"!==l})},Object.keys(t).map((function(e,n){return c(a.Fragment,{key:n},c("span",{className:Object(r.a)("token prefix",{inserted:"inserted"===l,deleted:"inserted"!==l})},"inserted"===l?"+":"-")," ",s,/^[a-z_$][a-z0-9_$]*$/i.test(i=e)?i:"'".concat(i,"'"),c("span",{className:"token operator"},":")," ",c(o,{value:t[e]}),c("span",{className:"token punctuation"},","),"\n");var i})))}function p(e){var t=e.path,n=e.add,s=e.remove,r=e.before,o=e.after;return t="string"===typeof t?t.split("."):t,c("div",{className:"prose"},c("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},c("pre",{className:"language-diff"},c("code",{className:"language-diff"},c("span",{className:"token unchanged"},"  ",c("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",c("span",{className:"token punctuation"},"."),c("span",{className:"token property-access"},"exports")," ",c("span",{className:"token operator"},"=")," ",c("span",{className:"token punctuation"},"{"),"\n",t.map((function(e,t){return c(a.Fragment,{key:t},"  ","  ".repeat(t+1),e,c("span",{className:"token operator"},":")," ",c("span",{className:"token punctuation"},"{"),"\n")})),r&&Object(i.a)(r).map((function(e,n){return c(a.Fragment,{key:n},"  ".repeat(t.length+2),c("span",{className:"token comment"},"// ".concat(e)),"\n")}))),s&&c(l,{edits:s,type:"deleted",indent:"  ".repeat(t.length+1)}),n&&c(l,{edits:n,type:"inserted",indent:"  ".repeat(t.length+1)}),c("span",{className:"token unchanged"},o&&Object(i.a)(o).map((function(e){return"".concat("  ".repeat(t.length+2)).concat(e,"\n")})),t.map((function(e,n){return c(a.Fragment,{key:n},"  ","  ".repeat(t.length-n),"}\n")})),"  }")))))}},Btb4:function(e,t,n){"use strict";const a=n("5xSE"),s=n("p+I8"),i=n("GAX2").default;e.exports=(e,t,n)=>{const r=[];return function e(t,n,c){let o;(n=n||{}).indent=n.indent||"\t",c=c||"",o=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:c,indent:c+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=e=>{if(void 0===n.inlineCharacterLimit)return e;const t=e.replace(new RegExp(o.newLine,"g"),"").replace(new RegExp(o.newLineOrSpace,"g")," ").replace(new RegExp(o.pad+"|"+o.indent,"g"),"");return t.length<=n.inlineCharacterLimit?t:e.replace(new RegExp(o.newLine+"|"+o.newLineOrSpace,"g"),"\n").replace(new RegExp(o.pad,"g"),c).replace(new RegExp(o.indent,"g"),c+n.indent)};if(-1!==r.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||a(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";r.push(t);const a="["+o.newLine+t.map((a,s)=>{const i=t.length-1===s?o.newLine:","+o.newLineOrSpace;let r=e(a,n,c+n.indent);return n.transform&&(r=n.transform(t,s,r)),o.indent+r+i}).join("")+o.pad+"]";return r.pop(),l(a)}if(s(t)){let a=Object.keys(t).concat(i(t));if(n.filter&&(a=a.filter(e=>n.filter(t,e))),0===a.length)return"{}";r.push(t);const s="{"+o.newLine+a.map((s,i)=>{const r=a.length-1===i?o.newLine:","+o.newLineOrSpace,l="symbol"===typeof s,p=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=l||p?s:e(s,n);let d=e(t[s],n,c+n.indent);return n.transform&&(d=n.transform(t,s,d)),o.indent+String(u)+": "+d+r}).join("")+o.pad+"}";return r.pop(),l(s)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===n.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,n)}},GAX2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},UHFo:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/list-style-position",function(){return n("aqwg")}])},Zb5r:function(e,t,n){"use strict";function a(e){return e.reduce((function(t,n,a){return 0===a?n:a===e.length-1?"".concat(t," \u0438 ").concat(n):"".concat(t,", ").concat(n)}),"")}n.d(t,"a",(function(){return a}))},ap0H:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI"),s=n.n(a),i=n("8Kt/"),r=n.n(i),c=s.a.createElement;function o(e){var t=e.suffix,n=e.children+(t?" - ".concat(t):"");return c(r.a,null,c("title",{key:"title"},n),c("meta",{key:"twitter:title",name:"twitter:title",content:n}),c("meta",{key:"og:title",property:"og:title",content:n}))}},aqwg:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return N}));var a=n("wx14"),s=n("Ff2n"),i=n("q1tI"),r=n.n(i),c=n("7ljp"),o=n("YFqc"),l=n.n(o),p=n("tc9R"),u=n("pOT7"),d=n("vRWG"),m=n("I6Nb"),g=n("7OmX"),b=n.n(g),f=n("8C7G"),O=n("wH44"),j=(r.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:b.a},meta:{title:"\u041f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0441\u0442\u0438\u043b\u044f \u0441\u043f\u0438\u0441\u043a\u0430",shortTitle:"List Style Position",description:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c \u043c\u0430\u0440\u043a\u0435\u0440\u043e\u0432/\u0446\u0438\u0444\u0440 \u0432 \u0441\u043f\u0438\u0441\u043a\u0430\u0445.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},tableOfContents:[{title:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435",slug:"primenenie",children:[]},{title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",slug:"adaptivnost",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]}),v=m.ContentsLayout;function N(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(c.a)(v,Object(a.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("div",{className:"prose"},Object(c.a)(p.a,{level:2,id:"primenenie",toc:!0},"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435"),Object(c.a)("p",null,"\u0423\u043f\u0440\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c \u043c\u0430\u0440\u043a\u0435\u0440\u043e\u0432 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0443\u0442\u0438\u043b\u0438\u0442 ",Object(c.a)("inlineCode",{parentName:"p"},"list-inside")," \u0438 ",Object(c.a)("inlineCode",{parentName:"p"},"list-outside"),".")),Object(c.a)(u.a,{preview:'\n  <div class="mb-6">\n    <p class="mb-1 text-sm text-light-blue-600">.list-inside</p>\n    <ul class="list-disc list-inside bg-light-blue-200 bg-stripes bg-stripes-white text-light-blue-600 py-2 rounded-md">\n      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>\n      <li>Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>\n      <li>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>\n    </ul>\n  </p>\n  </div>\n  <div class="mb-6">\n    <p class="mb-1 text-sm text-light-blue-600">.list-outside</p>\n    <ul class="list-disc list-outside bg-light-blue-200 bg-stripes bg-stripes-white text-light-blue-600 py-2 rounded-md">\n      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>\n      <li>Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>\n      <li>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>\n    </ul>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>list-inside bg-rose-200 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  ...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>list-outside bg-rose-200 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  ...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>',previewClassName:"p-4 px-8",color:"lightBlue",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(p.a,{level:2,id:"adaptivnost",toc:!0},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),Object(c.a)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043f\u043e\u0437\u0438\u0446\u0438\u0435\u0439 \u0441\u0442\u0438\u043b\u044f \u0441\u043f\u0438\u0441\u043a\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0441\u043f\u0438\u0441\u043a\u0430 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",Object(c.a)("inlineCode",{parentName:"p"},"{screen}:")," \u043a \u043b\u044e\u0431\u043e\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0443\u0442\u0438\u043b\u0438\u0442\u0435 \u0441\u043f\u0438\u0441\u043a\u0430. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(c.a)("inlineCode",{parentName:"p"},".md:list-inside"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",Object(c.a)("inlineCode",{parentName:"p"},"list-inside")," \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u0445 \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0432\u044b\u0448\u0435."),Object(c.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(c.a)("pre",Object(a.a)({parentName:"div"},{className:"language-html"}),Object(c.a)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),Object(c.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"<"),"ul")," ",Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-value"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'),"list-outside ",Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:list-inside"),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(c.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"<"),"li"),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")),"Lorem ipsum dolor sit amet, consectetur adipisicing elit",Object(c.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"</"),"li"),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(c.a)("span",Object(a.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(c.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"</"),"ul"),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(c.a)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 Tailwind \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 ",Object(c.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(c.a)("a",null,"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430")),"."),Object(c.a)(p.a,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),Object(c.a)(p.a,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),Object(c.a)(f.a,{plugin:"listStylePosition",mdxType:"Variants"}),Object(c.a)("div",{className:"prose"},Object(c.a)(p.a,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),Object(c.a)(O.a,{plugin:"listStylePosition",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=j},"p+I8":function(e,t,n){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},pOT7:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n("wx14"),s=n("q1tI"),i=n.n(s),r=n("iuhU"),c=n("ZMKu"),o=i.a.createElement,l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},p={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function m(e){var t=Object(s.useRef)(),n=Object(s.useState)(!1),i=n[0],r=n[1],c=Object(s.useState)({}),l=c[0],p=c[1];return Object(s.useEffect)((function(){if(i){var e=new window.ResizeObserver(n);return n(),e.observe(t.current.contentDocument.body),function(){e.disconnect()}}function n(){p({height:t.current.contentDocument.body.scrollHeight})}}),[i]),o("iframe",Object(a.a)({},e,{ref:t,onLoad:function(){return r(!0)},style:l}))}function g(e){var t=e.color,n=e.snippet;return o("div",{className:Object(r.a)("overflow-hidden rounded-b-xl",l[t],{"bg-gray-800":!l[t]})},o("pre",{className:Object(r.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[t]})},o("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}})))}function b(e){var t=e.preview,n=e.src,a=e.snippet,s=e.previewClassName,i=e.color,c=void 0===i?"gray":i;return o("div",{className:"relative overflow-hidden mb-8"},t?o("div",{className:Object(r.a)("rounded-t-xl overflow-hidden",p[c],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:t}}):o(m,{src:n,className:Object(r.a)("w-full rounded-t-xl",p[c])}),o(g,{color:c,snippet:a}))}function f(e){var t=e.preview,n=e.src,a=e.previewClassName,i=e.snippet,l=e.color,b=void 0===l?"gray":l,f=e.min,O=void 0!==f&&f,j=Object(s.useRef)(),v=Object(c.h)(0),N=Object(s.useRef)(),h=Object(s.useState)(!1),k=h[0],y=h[1];return Object(s.useEffect)((function(){var e=new window.ResizeObserver((function(){v.set(0)}));return e.observe(j.current),function(){e.disconnect()}}),[]),o("div",{className:"relative mb-8"},o("div",{ref:j,className:"relative rounded-t-xl ".concat(u[b])},o("div",{className:O?"md:w-88":void 0},o(c.d.div,{className:"relative",style:{marginRight:Object(c.i)(v,(function(e){return-e}))}},t?o("div",{className:Object(r.a)("rounded-t-xl",a,p[b],{"p-10":!a}),dangerouslySetInnerHTML:{__html:t}}):o(m,{src:n,className:Object(r.a)("w-full rounded-t-xl",p[b],{"pointer-events-none":k})}))),o("div",{ref:N,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},o(c.d.div,{drag:"x",_dragX:v,dragMomentum:!1,dragElastic:0,dragConstraints:N,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(O?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:v},onDragStart:function(){document.body.classList.add("cursor-grabbing"),y(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),y(!1)}},o("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},o("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[b]),style:{width:"0.4375rem"}},o("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),o(g,{color:b,snippet:i}))}},vRWG:function(e,t,n){"use strict";n.r(t),n.d(t,"DocumentationLayout",(function(){return m}));var a=n("wx14"),s=n("q1tI"),i=n.n(s),r=n("ekQu"),c=n("8Kt/"),o=n.n(c),l=n("nOHt"),p=n("ap0H"),u=n("1Q1k"),d=i.a.createElement;function m(e){var t=Object(l.useRouter)();return d(i.a.Fragment,null,d(p.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),d(o.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.su".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(r.b,Object(a.a)({nav:u.a},e)))}},wH44:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("rePB"),s=n("q1tI"),i=n.n(s),r=n("AOjV"),c=n("AI3G"),o=n("Zb5r"),l=i.a.createElement;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){var t=e.plugin,n=e.name,s=Object(c.a)(t);return n=n||t.replace(/([a-z])([A-Z])/g,(function(e,t,n){return"".concat(t," ").concat(n.toLowerCase())})),l("div",{className:"prose"},l("p",null,"\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",n,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",l("span",{dangerouslySetInnerHTML:{__html:Object(o.a)(s.map((function(e){return"<code>".concat(e,"</code>")})))}})," ",s.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",l("code",null,"false")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",l("code",null,"corePlugins")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"),l(r.a,{path:"corePlugins",before:"...",add:s.reduce((function(e,t){return u(u({},e),{},Object(a.a)({},t,!1))}),{})}))}}},[["UHFo",0,2,6,1,3,4,5,7]]]);