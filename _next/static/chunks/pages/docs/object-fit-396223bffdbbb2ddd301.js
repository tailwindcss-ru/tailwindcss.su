_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[109],{"5xSE":function(e,n,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t("rePB"),s=t("q1tI"),c=t.n(s),o=t("98BF"),i=t("Zb5r"),r=t("AOjV"),p=c.a.createElement;function l(e){var n=e.plugin,t=e.name,s=o.defaultConfig.variants[n]||["responsive"];t=t||n.replace(/([a-z])([A-Z])/g,(function(e,n,t){return"".concat(n," ").concat(t.toLowerCase())}));var c=["responsive","hover","focus","active","group-hover"].filter((function(e){return!s.includes(e)})).slice(0,2),l="\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ".concat(s.length?"\u0442\u043e\u043b\u044c\u043a\u043e ".concat(Object(i.a)(s).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")):"\u043d\u0435\u0442"," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ").concat(t,".");return p("div",{className:"prose"},p("p",{dangerouslySetInnerHTML:{__html:l}}),p("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",t," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",p("code",null,n)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",p("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",p("code",null,"tailwind.config.js"),"."),p("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",s.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(i.a)(c),":"),p(r.a,{path:"variants.extend",before:"...",add:Object(a.a)({},n,c)}))}},AOjV:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t("q1tI"),s=t.n(a),c=(t("Btb4"),t("AI3G")),o=t("iuhU"),i=s.a.createElement;function r(e){var n=e.value;return"string"===typeof n?i("span",{className:"token string"},"'",n,"'"):Array.isArray(n)?i(s.a.Fragment,null,i("span",{className:"token punctuation"},"["),n.map((function(e,t){return i(a.Fragment,{key:t},i(r,{value:e}),t===n.length-1?null:i("span",{className:"token punctuation"},", "))})),i("span",{className:"token punctuation"},"]")):"boolean"===typeof n?i("span",{className:"token boolean"},n.toString()):n.toString()}function p(e){var n=e.edits,t=e.indent,s=void 0===t?"":t,c=e.type,p=void 0===c?"inserted":c;return i("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===p,"deleted-sign deleted":"inserted"!==p})},Object.keys(n).map((function(e,t){return i(a.Fragment,{key:t},i("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===p,deleted:"inserted"!==p})},"inserted"===p?"+":"-")," ",s,/^[a-z_$][a-z0-9_$]*$/i.test(c=e)?c:"'".concat(c,"'"),i("span",{className:"token operator"},":")," ",i(r,{value:n[e]}),i("span",{className:"token punctuation"},","),"\n");var c})))}function l(e){var n=e.path,t=e.add,s=e.remove,o=e.before,r=e.after;return n="string"===typeof n?n.split("."):n,i("div",{className:"prose"},i("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},i("pre",{className:"language-diff"},i("code",{className:"language-diff"},i("span",{className:"token unchanged"},"  ",i("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",i("span",{className:"token punctuation"},"."),i("span",{className:"token property-access"},"exports")," ",i("span",{className:"token operator"},"=")," ",i("span",{className:"token punctuation"},"{"),"\n",n.map((function(e,n){return i(a.Fragment,{key:n},"  ","  ".repeat(n+1),e,i("span",{className:"token operator"},":")," ",i("span",{className:"token punctuation"},"{"),"\n")})),o&&Object(c.a)(o).map((function(e,t){return i(a.Fragment,{key:t},"  ".repeat(n.length+2),i("span",{className:"token comment"},"// ".concat(e)),"\n")}))),s&&i(p,{edits:s,type:"deleted",indent:"  ".repeat(n.length+1)}),t&&i(p,{edits:t,type:"inserted",indent:"  ".repeat(n.length+1)}),i("span",{className:"token unchanged"},r&&Object(c.a)(r).map((function(e){return"".concat("  ".repeat(n.length+2)).concat(e,"\n")})),n.map((function(e,t){return i(a.Fragment,{key:t},"  ","  ".repeat(n.length-t),"}\n")})),"  }")))))}},Btb4:function(e,n,t){"use strict";const a=t("5xSE"),s=t("p+I8"),c=t("GAX2").default;e.exports=(e,n,t)=>{const o=[];return function e(n,t,i){let r;(t=t||{}).indent=t.indent||"\t",i=i||"",r=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:i,indent:i+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const p=e=>{if(void 0===t.inlineCharacterLimit)return e;const n=e.replace(new RegExp(r.newLine,"g"),"").replace(new RegExp(r.newLineOrSpace,"g")," ").replace(new RegExp(r.pad+"|"+r.indent,"g"),"");return n.length<=t.inlineCharacterLimit?n:e.replace(new RegExp(r.newLine+"|"+r.newLineOrSpace,"g"),"\n").replace(new RegExp(r.pad,"g"),i).replace(new RegExp(r.indent,"g"),i+t.indent)};if(-1!==o.indexOf(n))return'"[Circular]"';if(null===n||void 0===n||"number"===typeof n||"boolean"===typeof n||"function"===typeof n||"symbol"===typeof n||a(n))return String(n);if(n instanceof Date)return`new Date('${n.toISOString()}')`;if(Array.isArray(n)){if(0===n.length)return"[]";o.push(n);const a="["+r.newLine+n.map((a,s)=>{const c=n.length-1===s?r.newLine:","+r.newLineOrSpace;let o=e(a,t,i+t.indent);return t.transform&&(o=t.transform(n,s,o)),r.indent+o+c}).join("")+r.pad+"]";return o.pop(),p(a)}if(s(n)){let a=Object.keys(n).concat(c(n));if(t.filter&&(a=a.filter(e=>t.filter(n,e))),0===a.length)return"{}";o.push(n);const s="{"+r.newLine+a.map((s,c)=>{const o=a.length-1===c?r.newLine:","+r.newLineOrSpace,p="symbol"===typeof s,l=!p&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=p||l?s:e(s,t);let d=e(n[s],t,i+t.indent);return t.transform&&(d=t.transform(n,s,d)),r.indent+String(u)+": "+d+o}).join("")+r.pad+"}";return o.pop(),p(s)}return n=String(n).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===t.singleQuotes?`"${n=n.replace(/"/g,'\\"')}"`:`'${n=n.replace(/\\?'/g,"\\'")}'`}(e,n,t)}},GAX2:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e=>Object.getOwnPropertySymbols(e).filter(n=>Object.prototype.propertyIsEnumerable.call(e,n))},Zb5r:function(e,n,t){"use strict";function a(e){return e.reduce((function(n,t,a){return 0===a?t:a===e.length-1?"".concat(n," \u0438 ").concat(t):"".concat(n,", ").concat(t)}),"")}t.d(n,"a",(function(){return a}))},ap0H:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("q1tI"),s=t.n(a),c=t("8Kt/"),o=t.n(c),i=s.a.createElement;function r(e){var n=e.suffix,t=e.children+(n?" - ".concat(n):"");return i(o.a,null,i("title",{key:"title"},t),i("meta",{key:"twitter:title",name:"twitter:title",content:t}),i("meta",{key:"og:title",property:"og:title",content:t}))}},cryp:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/object-fit",function(){return t("u+Ep")}])},"hv1/":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:e,variants:n}){e({".object-contain":{"object-fit":"contain"},".object-cover":{"object-fit":"cover"},".object-fill":{"object-fit":"fill"},".object-none":{"object-fit":"none"},".object-scale-down":{"object-fit":"scale-down"}},n("objectFit"))}}},"p+I8":function(e,n,t){"use strict";e.exports=function(e){var n=typeof e;return null!==e&&("object"===n||"function"===n)}},pOT7:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return f}));var a=t("wx14"),s=t("q1tI"),c=t.n(s),o=t("iuhU"),i=t("ZMKu"),r=c.a.createElement,p={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function g(e){var n=Object(s.useRef)(),t=Object(s.useState)(!1),c=t[0],o=t[1],i=Object(s.useState)({}),p=i[0],l=i[1];return Object(s.useEffect)((function(){if(c){var e=new window.ResizeObserver(t);return t(),e.observe(n.current.contentDocument.body),function(){e.disconnect()}}function t(){l({height:n.current.contentDocument.body.scrollHeight})}}),[c]),r("iframe",Object(a.a)({},e,{ref:n,onLoad:function(){return o(!0)},style:p}))}function b(e){var n=e.color,t=e.snippet;return r("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",p[n],{"bg-gray-800":!p[n]})},r("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":p[n]})},r("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function m(e){var n=e.preview,t=e.src,a=e.snippet,s=e.previewClassName,c=e.color,i=void 0===c?"gray":c;return r("div",{className:"relative overflow-hidden mb-8"},n?r("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",l[i],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:n}}):r(g,{src:t,className:Object(o.a)("w-full rounded-t-xl",l[i])}),r(b,{color:i,snippet:a}))}function f(e){var n=e.preview,t=e.src,a=e.previewClassName,c=e.snippet,p=e.color,m=void 0===p?"gray":p,f=e.min,v=void 0!==f&&f,j=Object(s.useRef)(),k=Object(i.h)(0),O=Object(s.useRef)(),h=Object(s.useState)(!1),N=h[0],w=h[1];return Object(s.useEffect)((function(){var e=new window.ResizeObserver((function(){k.set(0)}));return e.observe(j.current),function(){e.disconnect()}}),[]),r("div",{className:"relative mb-8"},r("div",{ref:j,className:"relative rounded-t-xl ".concat(u[m])},r("div",{className:v?"md:w-88":void 0},r(i.d.div,{className:"relative",style:{marginRight:Object(i.i)(k,(function(e){return-e}))}},n?r("div",{className:Object(o.a)("rounded-t-xl",a,l[m],{"p-10":!a}),dangerouslySetInnerHTML:{__html:n}}):r(g,{src:t,className:Object(o.a)("w-full rounded-t-xl",l[m],{"pointer-events-none":N})}))),r("div",{ref:O,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},r(i.d.div,{drag:"x",_dragX:k,dragMomentum:!1,dragElastic:0,dragConstraints:O,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(v?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:k},onDragStart:function(){document.body.classList.add("cursor-grabbing"),w(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),w(!1)}},r("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},r("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[m]),style:{width:"0.4375rem"}},r("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),r(b,{color:m,snippet:c}))}},"u+Ep":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return O}));var a=t("wx14"),s=t("Ff2n"),c=t("q1tI"),o=t.n(c),i=t("7ljp"),r=t("YFqc"),p=t.n(r),l=t("tc9R"),u=t("pOT7"),d=t("vRWG"),g=t("I6Nb"),b=t("hv1/"),m=t.n(b),f=t("8C7G"),v=t("wH44"),j=(o.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:m.a},meta:{title:"\u041f\u043e\u0434\u0433\u043e\u043d\u043a\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430",description:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435\u043c \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0433\u043e \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u043c\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430."},tableOfContents:[{title:"Contain",slug:"contain",children:[]},{title:"Cover",slug:"cover",children:[]},{title:"Fill",slug:"fill",children:[]},{title:"None",slug:"none",children:[]},{title:"Scale Down",slug:"scale-down",children:[]},{title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",slug:"adaptivnost",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]}),k=g.ContentsLayout;function O(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(i.a)(k,Object(a.a)({},j,t,{components:n,mdxType:"MDXLayout"}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:2,id:"contain",toc:!0},"Contain"),Object(i.a)("p",null,"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u0435 \u0440\u0430\u0437\u043c\u0435\u0440 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430, \u0447\u0442\u043e\u0431\u044b \u043e\u043d\u043e \u043e\u0441\u0442\u0430\u0432\u0430\u043b\u043e\u0441\u044c \u0432\u043d\u0443\u0442\u0440\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",Object(i.a)("inlineCode",{parentName:"p"},".object-contain"),".")),Object(i.a)(u.a,{preview:'\n  <div class="bg-rose-300 bg-stripes bg-stripes-white rounded-md overflow-hidden">\n    <img class="h-48 w-full object-contain" src="/img/placeholder-rose.svg" alt="">\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-rose-300 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">object-contain</span> h-48 w-full ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"rose",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:2,id:"cover",toc:!0},"Cover"),Object(i.a)("p",null,"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u0435 \u0440\u0430\u0437\u043c\u0435\u0440 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",Object(i.a)("inlineCode",{parentName:"p"},".object-cover"),".")),Object(i.a)(u.a,{preview:'\n  <div class="bg-indigo-300 bg-stripes bg-stripes-white rounded-md overflow-hidden">\n    <img class="h-48 w-full object-cover" src="/img/placeholder-indigo.svg" alt="">\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-indigo-300 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">object-cover</span> h-48 w-full ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:2,id:"fill",toc:!0},"Fill"),Object(i.a)("p",null,"\u0420\u0430\u0441\u0442\u044f\u043d\u0438\u0442\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430, \u0447\u0442\u043e\u0431\u044b \u043e\u043d\u043e \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u043b\u043e \u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0443, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",Object(i.a)("inlineCode",{parentName:"p"},".object-fill"),".")),Object(i.a)(u.a,{preview:'\n  <div class="bg-light-blue-300 bg-stripes bg-stripes-white rounded-md overflow-hidden">\n    <img class="h-48 w-full object-fill" src="/img/placeholder-light-blue.svg" alt="">\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-light-blue-300 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">object-fill</span> h-48 w-full ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:2,id:"none",toc:!0},"None"),Object(i.a)("p",null,"\u041e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u044c \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u043c \u0440\u0430\u0437\u043c\u0435\u0440\u0435, \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u044f \u0440\u0430\u0437\u043c\u0435\u0440 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",Object(i.a)("inlineCode",{parentName:"p"},".object-none"),".")),Object(i.a)(u.a,{preview:'\n  <div class="bg-amber-300 bg-stripes bg-stripes-white rounded-md overflow-hidden">\n    <img class="h-48 w-full object-none" src="/img/placeholder-amber.svg" alt="">\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-yellow-300<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">object-none</span> h-48 w-full ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"amber",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:2,id:"scale-down",toc:!0},"Scale Down"),Object(i.a)("p",null,"\u041e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u043c \u0440\u0430\u0437\u043c\u0435\u0440\u0435, \u043d\u043e \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0443\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u0435 \u0435\u0433\u043e \u0434\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",Object(i.a)("inlineCode",{parentName:"p"},".object-scale-down"),".")),Object(i.a)(u.a,{preview:'\n  <div class="bg-emerald-300 bg-stripes bg-stripes-white rounded-md overflow-hidden">\n    <img class="h-48 w-full object-scale-down" src="/img/placeholder-emerald.svg" alt="">\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-green-300<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">object-scale-down</span> h-48 w-full ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:2,id:"adaptivnost",toc:!0},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),Object(i.a)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u043c\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0434\u043e\u043b\u0436\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",Object(i.a)("inlineCode",{parentName:"p"},"{screen}:")," \u043a \u043b\u044e\u0431\u043e\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0443\u0442\u0438\u043b\u0438\u0442\u0435 \u043f\u043e\u0434\u0433\u043e\u043d\u043a\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043b\u0430\u0441\u0441\u0430 ",Object(i.a)("inlineCode",{parentName:"p"},"md:object-scale-down")," \u043a \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0443 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",Object(i.a)("inlineCode",{parentName:"p"},"object-scale-down")," \u043f\u0440\u0438 \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u0445 \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0432\u044b\u0448\u0435."),Object(i.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(i.a)("pre",Object(a.a)({parentName:"div"},{className:"language-html"}),Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div"),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-value"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'),"object-contain ",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:object-scale-down")," ...",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-name"}),"src"),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-value"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'),"...",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(i.a)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 Tailwind \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 ",Object(i.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(i.a)("a",null,"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430")),"."),Object(i.a)(l.a,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),Object(i.a)(l.a,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),Object(i.a)(f.a,{plugin:"objectFit",name:"object-fit",mdxType:"Variants"}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),Object(i.a)(v.a,{plugin:"objectFit",name:"object-fit",mdxType:"Disabling"}))}O.isMDXComponent=!0,O.layoutProps=j},vRWG:function(e,n,t){"use strict";t.r(n),t.d(n,"DocumentationLayout",(function(){return g}));var a=t("wx14"),s=t("q1tI"),c=t.n(s),o=t("ekQu"),i=t("8Kt/"),r=t.n(i),p=t("nOHt"),l=t("ap0H"),u=t("1Q1k"),d=c.a.createElement;function g(e){var n=Object(p.useRouter)();return d(c.a.Fragment,null,d(l.a,{suffix:"/"===n.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),d(r.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.su".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(o.b,Object(a.a)({nav:u.a},e)))}},wH44:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t("rePB"),s=t("q1tI"),c=t.n(s),o=t("AOjV"),i=t("AI3G"),r=t("Zb5r"),p=c.a.createElement;function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e){var n=e.plugin,t=e.name,s=Object(i.a)(n);return t=t||n.replace(/([a-z])([A-Z])/g,(function(e,n,t){return"".concat(n," ").concat(t.toLowerCase())})),p("div",{className:"prose"},p("p",null,"\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",t,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",p("span",{dangerouslySetInnerHTML:{__html:Object(r.a)(s.map((function(e){return"<code>".concat(e,"</code>")})))}})," ",s.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",p("code",null,"false")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",p("code",null,"corePlugins")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"),p(o.a,{path:"corePlugins",before:"...",add:s.reduce((function(e,n){return u(u({},e),{},Object(a.a)({},n,!1))}),{})}))}}},[["cryp",0,2,6,1,3,4,5,7]]]);