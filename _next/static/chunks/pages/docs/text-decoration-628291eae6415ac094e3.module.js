(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[145],{"2cYW":function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/text-decoration",function(){return n("unN4")}])},"5xSE":function(e,a,n){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,a,n){"use strict";n.d(a,"a",(function(){return i}));var t=n("q1tI"),s=n.n(t),c=n("98BF"),o=n("Zb5r"),r=n("AOjV"),p=s.a.createElement;function i(e){var{plugin:a,name:n}=e,t=c.defaultConfig.variants[a]||["responsive"];n=n||a.replace(/([a-z])([A-Z])/g,(e,a,n)=>"".concat(a," ").concat(n.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(e=>!t.includes(e)).slice(0,2),i="\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ".concat(t.length?"\u0442\u043e\u043b\u044c\u043a\u043e ".concat(Object(o.a)(t).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")):"\u043d\u0435\u0442"," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ").concat(n,".");return p("div",{className:"prose"},p("p",{dangerouslySetInnerHTML:{__html:i}}),p("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",n," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",p("code",null,a)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",p("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",p("code",null,"tailwind.config.js"),"."),p("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",t.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(o.a)(s),":"),p(r.a,{path:"variants.extend",before:"...",add:{[a]:s}}))}},AOjV:function(e,a,n){"use strict";n.d(a,"a",(function(){return l}));var t=n("q1tI"),s=n.n(t),c=(n("Btb4"),n("AI3G")),o=n("iuhU"),r=s.a.createElement;function p(e){var{value:a}=e;return"string"===typeof a?r("span",{className:"token string"},"'",a,"'"):Array.isArray(a)?r(s.a.Fragment,null,r("span",{className:"token punctuation"},"["),a.map((e,n)=>r(t.Fragment,{key:n},r(p,{value:e}),n===a.length-1?null:r("span",{className:"token punctuation"},", "))),r("span",{className:"token punctuation"},"]")):"boolean"===typeof a?r("span",{className:"token boolean"},a.toString()):a.toString()}function i(e){var{edits:a,indent:n="",type:s="inserted"}=e;return r("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(a).map((e,c)=>{return r(t.Fragment,{key:c},r("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",n,/^[a-z_$][a-z0-9_$]*$/i.test(i=e)?i:"'".concat(i,"'"),r("span",{className:"token operator"},":")," ",r(p,{value:a[e]}),r("span",{className:"token punctuation"},","),"\n");var i}))}function l(e){var{path:a,add:n,remove:s,before:o,after:p}=e;return a="string"===typeof a?a.split("."):a,r("div",{className:"prose"},r("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},r("pre",{className:"language-diff"},r("code",{className:"language-diff"},r("span",{className:"token unchanged"},"  ",r("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",r("span",{className:"token punctuation"},"."),r("span",{className:"token property-access"},"exports")," ",r("span",{className:"token operator"},"=")," ",r("span",{className:"token punctuation"},"{"),"\n",a.map((e,a)=>r(t.Fragment,{key:a},"  ","  ".repeat(a+1),e,r("span",{className:"token operator"},":")," ",r("span",{className:"token punctuation"},"{"),"\n")),o&&Object(c.a)(o).map((e,n)=>r(t.Fragment,{key:n},"  ".repeat(a.length+2),r("span",{className:"token comment"},"// ".concat(e)),"\n"))),s&&r(i,{edits:s,type:"deleted",indent:"  ".repeat(a.length+1)}),n&&r(i,{edits:n,type:"inserted",indent:"  ".repeat(a.length+1)}),r("span",{className:"token unchanged"},p&&Object(c.a)(p).map(e=>"".concat("  ".repeat(a.length+2)).concat(e,"\n")),a.map((e,n)=>r(t.Fragment,{key:n},"  ","  ".repeat(a.length-n),"}\n")),"  }")))))}},Btb4:function(e,a,n){"use strict";const t=n("5xSE"),s=n("p+I8"),c=n("GAX2").default;e.exports=(e,a,n)=>{const o=[];return function e(a,n,r){let p;(n=n||{}).indent=n.indent||"\t",r=r||"",p=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:r,indent:r+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const i=e=>{if(void 0===n.inlineCharacterLimit)return e;const a=e.replace(new RegExp(p.newLine,"g"),"").replace(new RegExp(p.newLineOrSpace,"g")," ").replace(new RegExp(p.pad+"|"+p.indent,"g"),"");return a.length<=n.inlineCharacterLimit?a:e.replace(new RegExp(p.newLine+"|"+p.newLineOrSpace,"g"),"\n").replace(new RegExp(p.pad,"g"),r).replace(new RegExp(p.indent,"g"),r+n.indent)};if(-1!==o.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||t(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";o.push(a);const t="["+p.newLine+a.map((t,s)=>{const c=a.length-1===s?p.newLine:","+p.newLineOrSpace;let o=e(t,n,r+n.indent);return n.transform&&(o=n.transform(a,s,o)),p.indent+o+c}).join("")+p.pad+"]";return o.pop(),i(t)}if(s(a)){let t=Object.keys(a).concat(c(a));if(n.filter&&(t=t.filter(e=>n.filter(a,e))),0===t.length)return"{}";o.push(a);const s="{"+p.newLine+t.map((s,c)=>{const o=t.length-1===c?p.newLine:","+p.newLineOrSpace,i="symbol"===typeof s,l=!i&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=i||l?s:e(s,n);let d=e(a[s],n,r+n.indent);return n.transform&&(d=n.transform(a,s,d)),p.indent+String(u)+": "+d+o}).join("")+p.pad+"}";return o.pop(),i(s)}return a=String(a).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===n.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(e,a,n)}},GAX2:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=e=>Object.getOwnPropertySymbols(e).filter(a=>Object.prototype.propertyIsEnumerable.call(e,a))},Zb5r:function(e,a,n){"use strict";function t(e){return e.reduce((a,n,t)=>0===t?n:t===e.length-1?"".concat(a," \u0438 ").concat(n):"".concat(a,", ").concat(n),"")}n.d(a,"a",(function(){return t}))},ap0H:function(e,a,n){"use strict";n.d(a,"a",(function(){return p}));var t=n("q1tI"),s=n.n(t),c=n("8Kt/"),o=n.n(c),r=s.a.createElement;function p(e){var{suffix:a,children:n}=e,t=n+(a?" - ".concat(a):"");return r(o.a,null,r("title",{key:"title"},t),r("meta",{key:"twitter:title",name:"twitter:title",content:t}),r("meta",{key:"og:title",property:"og:title",content:t}))}},msGM:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({addUtilities:e,variants:a}){e({".underline":{"text-decoration":"underline"},".line-through":{"text-decoration":"line-through"},".no-underline":{"text-decoration":"none"}},a("textDecoration"))}}},"p+I8":function(e,a,n){"use strict";e.exports=function(e){var a=typeof e;return null!==e&&("object"===a||"function"===a)}},pOT7:function(e,a,n){"use strict";n.d(a,"a",(function(){return g})),n.d(a,"b",(function(){return O}));var t=n("wx14"),s=n("q1tI"),c=n.n(s),o=n("iuhU"),r=n("ZMKu"),p=c.a.createElement,i={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function m(e){var a=Object(s.useRef)(),{0:n,1:c}=Object(s.useState)(!1),{0:o,1:r}=Object(s.useState)({});return Object(s.useEffect)(()=>{if(n){var e=new window.ResizeObserver(t);return t(),e.observe(a.current.contentDocument.body),()=>{e.disconnect()}}function t(){r({height:a.current.contentDocument.body.scrollHeight})}},[n]),p("iframe",Object(t.a)({},e,{ref:a,onLoad:()=>c(!0),style:o}))}function b(e){var{color:a,snippet:n}=e;return p("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",i[a],{"bg-gray-800":!i[a]})},p("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":i[a]})},p("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}})))}function g(e){var{preview:a,src:n,snippet:t,previewClassName:s,color:c="gray"}=e;return p("div",{className:"relative overflow-hidden mb-8"},a?p("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",l[c],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:a}}):p(m,{src:n,className:Object(o.a)("w-full rounded-t-xl",l[c])}),p(b,{color:c,snippet:t}))}function O(e){var{preview:a,src:n,previewClassName:t,snippet:c,color:i="gray",min:g=!1}=e,O=Object(s.useRef)(),j=Object(r.h)(0),N=Object(s.useRef)(),{0:h,1:f}=Object(s.useState)(!1);return Object(s.useEffect)(()=>{var e=new window.ResizeObserver(()=>{j.set(0)});return e.observe(O.current),()=>{e.disconnect()}},[]),p("div",{className:"relative mb-8"},p("div",{ref:O,className:"relative rounded-t-xl ".concat(u[i])},p("div",{className:g?"md:w-88":void 0},p(r.d.div,{className:"relative",style:{marginRight:Object(r.i)(j,e=>-e)}},a?p("div",{className:Object(o.a)("rounded-t-xl",t,l[i],{"p-10":!t}),dangerouslySetInnerHTML:{__html:a}}):p(m,{src:n,className:Object(o.a)("w-full rounded-t-xl",l[i],{"pointer-events-none":h})}))),p("div",{ref:N,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},p(r.d.div,{drag:"x",_dragX:j,dragMomentum:!1,dragElastic:0,dragConstraints:N,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(g?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:j},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),f(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),f(!1)}},p("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},p("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[i]),style:{width:"0.4375rem"}},p("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),p(b,{color:i,snippet:c}))}},unN4:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return f}));var t=n("wx14"),s=n("Ff2n"),c=n("q1tI"),o=n.n(c),r=n("7ljp"),p=n("YFqc"),i=n.n(p),l=n("tc9R"),u=n("pOT7"),d=n("vRWG"),m=n("I6Nb"),b=n("msGM"),g=n.n(b),O=n("8C7G"),j=n("wH44"),N=(o.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:g()},meta:{title:"\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0442\u0435\u043a\u0441\u0442\u0430",description:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435\u043c \u0442\u0435\u043a\u0441\u0442\u0430.",features:{responsive:!0,customizable:!1,hover:!0,focus:!0}},tableOfContents:[{title:"\u041f\u043e\u0434\u0447\u0435\u0440\u043a\u0438\u0432\u0430\u043d\u0438\u0435",slug:"podcherkivanie",children:[]},{title:"\u041b\u0438\u043d\u0438\u044f, \u043f\u0440\u043e\u0445\u043e\u0434\u044f\u0449\u0430\u044f \u0447\u0435\u0440\u0435\u0437",slug:"liniya-prohodyashhaya-cherez",children:[]},{title:"\u0411\u0435\u0437 \u043f\u043e\u0434\u0447\u0435\u0440\u043a\u0438\u0432\u0430\u043d\u0438\u044f",slug:"bez-podcherkivaniya",children:[]},{title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",slug:"adaptivnost",children:[]},{title:"\u041d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0435",slug:"navedenie",children:[]},{title:"\u0424\u043e\u043a\u0443\u0441",slug:"fokus",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]}),h=m.ContentsLayout;function f(e){var{components:a}=e,n=Object(s.a)(e,["components"]);return Object(r.a)(h,Object(t.a)({},N,n,{components:a,mdxType:"MDXLayout"}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:2,id:"podcherkivanie",toc:!0},"\u041f\u043e\u0434\u0447\u0435\u0440\u043a\u0438\u0432\u0430\u043d\u0438\u0435"),Object(r.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",Object(r.a)("inlineCode",{parentName:"p"},"underline")," \u0434\u043b\u044f \u043f\u043e\u0434\u0447\u0435\u0440\u043a\u0438\u0432\u0430\u043d\u0438\u044f \u0442\u0435\u043a\u0441\u0442\u0430.")),Object(r.a)(u.a,{preview:'\n  <p class="underline text-xl text-fuchsia-600">\u0411\u044b\u0441\u0442\u0440\u0430\u044f, \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430, \u043f\u0435\u0440\u0435\u043f\u0440\u044b\u0433\u043d\u0443\u043b\u0430 \u0447\u0435\u0440\u0435\u0437 \u043b\u0435\u043d\u0438\u0432\u043e\u0433\u043e \u043f\u0441\u0430.</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">underline</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"fuchsia",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:2,id:"liniya-prohodyashhaya-cherez",toc:!0},"\u041b\u0438\u043d\u0438\u044f, \u043f\u0440\u043e\u0445\u043e\u0434\u044f\u0449\u0430\u044f \u0447\u0435\u0440\u0435\u0437"),Object(r.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",Object(r.a)("inlineCode",{parentName:"p"},"line-through"),", \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u0447\u0435\u0440\u043a\u043d\u0443\u0442\u044c \u0442\u0435\u043a\u0441\u0442.")),Object(r.a)(u.a,{preview:'\n  <p class="line-through text-xl text-rose-600">\u0411\u044b\u0441\u0442\u0440\u0430\u044f, \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430, \u043f\u0435\u0440\u0435\u043f\u0440\u044b\u0433\u043d\u0443\u043b\u0430 \u0447\u0435\u0440\u0435\u0437 \u043b\u0435\u043d\u0438\u0432\u043e\u0433\u043e \u043f\u0441\u0430.</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">line-through</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"rose",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:2,id:"bez-podcherkivaniya",toc:!0},"\u0411\u0435\u0437 \u043f\u043e\u0434\u0447\u0435\u0440\u043a\u0438\u0432\u0430\u043d\u0438\u044f"),Object(r.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",Object(r.a)("inlineCode",{parentName:"p"},"no-underline"),", \u0447\u0442\u043e\u0431\u044b \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u0434\u0447\u0435\u0440\u043a\u0438\u0432\u0430\u043d\u0438\u0435 \u0438\u043b\u0438 \u0441\u043a\u0432\u043e\u0437\u043d\u043e\u0439 \u0441\u0442\u0438\u043b\u044c.")),Object(r.a)(u.a,{preview:'\n  <div class="text-center">\n    <a href="#" class="no-underline text-purple-600 text-xl">\u0421\u0441\u044b\u043b\u043a\u0430 \u0431\u0435\u0437 \u043f\u043e\u0434\u0447\u0435\u0440\u043a\u0438\u0432\u0430\u043d\u0438\u044f</a>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">no-underline</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u0421\u0441\u044b\u043b\u043a\u0430 \u0431\u0435\u0437 \u043f\u043e\u0434\u0447\u0435\u0440\u043a\u0438\u0432\u0430\u043d\u0438\u044f<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:2,id:"adaptivnost",toc:!0},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),Object(r.a)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435\u043c \u0442\u0435\u043a\u0441\u0442\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," \u043a \u043b\u044e\u0431\u043e\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0443\u0442\u0438\u043b\u0438\u0442\u0435 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u0442\u0435\u043a\u0441\u0442\u0430. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(r.a)("inlineCode",{parentName:"p"},"md:underline"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",Object(r.a)("inlineCode",{parentName:"p"},"underline")," \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u0445 \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0432\u044b\u0448\u0435."),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"no-underline ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:underline")," ...",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  \u0411\u044b\u0441\u0442\u0440\u0430\u044f, \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430, \u043f\u0435\u0440\u0435\u043f\u0440\u044b\u0433\u043d\u0443\u043b\u0430 \u0447\u0435\u0440\u0435\u0437 \u043b\u0435\u043d\u0438\u0432\u043e\u0433\u043e \u043f\u0441\u0430.\n",Object(r.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"p"),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 Tailwind \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 ",Object(r.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(r.a)("a",null,"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430")),"."),Object(r.a)(l.a,{level:2,id:"navedenie",toc:!0},"\u041d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0435"),Object(r.a)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435\u043c \u0442\u0435\u043a\u0441\u0442\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 ",Object(r.a)("inlineCode",{parentName:"p"},"hover:")," \u043a \u043b\u044e\u0431\u043e\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0443\u0442\u0438\u043b\u0438\u0442\u0435 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u0442\u0435\u043a\u0441\u0442\u0430. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(r.a)("inlineCode",{parentName:"p"},"hover:underline"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",Object(r.a)("inlineCode",{parentName:"p"},"underline")," \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438 \u043a\u0443\u0440\u0441\u043e\u0440\u0430.")),Object(r.a)(u.a,{preview:'\n  <a href="#hover" class="no-underline hover:underline text-indigo-600 text-xl">\u0421\u0441\u044b\u043b\u043a\u0430</a>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>no-underline <span class="code-highlight bg-code-highlight">hover:underline</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u0421\u0441\u044b\u043b\u043a\u0430<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>',previewClassName:"text-center p-4",color:"indigo",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)("p",null,"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u041d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u043a\u043e\u043c\u0431\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u043c\u0438 \u0443\u0442\u0438\u043b\u0438\u0442\u0430\u043c\u0438, \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044f \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," ",Object(r.a)("em",{parentName:"p"},"\u043f\u0435\u0440\u0435\u0434")," \u043f\u0440\u0435\u0444\u0438\u043a\u0441\u043e\u043c ",Object(r.a)("inlineCode",{parentName:"p"},"hover:"),"."),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"a")," ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"href"),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"#",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"... md:no-underline ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:hover:underline")," ...",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\u0421\u0441\u044b\u043b\u043a\u0430",Object(r.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"a"),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)(l.a,{level:2,id:"fokus",toc:!0},"\u0424\u043e\u043a\u0443\u0441"),Object(r.a)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435\u043c \u0442\u0435\u043a\u0441\u0442\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u0444\u043e\u043a\u0443\u0441\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",Object(r.a)("inlineCode",{parentName:"p"},"focus:")," \u043a \u043b\u044e\u0431\u043e\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0443\u0442\u0438\u043b\u0438\u0442\u0435 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u0442\u0435\u043a\u0441\u0442\u0430. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(r.a)("inlineCode",{parentName:"p"},"focus:underline"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",Object(r.a)("inlineCode",{parentName:"p"},"underline")," \u043a \u0444\u043e\u043a\u0443\u0441\u0443.")),Object(r.a)(u.a,{preview:'\n  <div class="max-w-xs w-full mx-auto">\n    <input class="bg-white focus:underline focus:shadow-outline text-emerald-900 appearance-none inline-block w-full border border-emerald-300 rounded py-3 px-4 focus:outline-none" value="Focus me" placeholder="Focus me">\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">focus:underline</span> ...<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Focus me<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)("p",null,"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0424\u043e\u043a\u0443\u0441\u0430 \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u043a\u043e\u043c\u0431\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u043c\u0438 \u0443\u0442\u0438\u043b\u0438\u0442\u0430\u043c\u0438, \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044f \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," ",Object(r.a)("em",{parentName:"p"},"\u043f\u0435\u0440\u0435\u0434")," \u043f\u0440\u0435\u0444\u0438\u043a\u0441\u043e\u043c ",Object(r.a)("inlineCode",{parentName:"p"},"focus:"),"."),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"input")," ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:focus:underline")," ...",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"value"),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"Focus me",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)(l.a,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),Object(r.a)(l.a,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),Object(r.a)(O.a,{plugin:"textDecoration",mdxType:"Variants"}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),Object(r.a)(j.a,{plugin:"textDecoration",mdxType:"Disabling"}))}f.isMDXComponent=!0,f.layoutProps=N},vRWG:function(e,a,n){"use strict";n.r(a),n.d(a,"DocumentationLayout",(function(){return m}));var t=n("wx14"),s=n("q1tI"),c=n.n(s),o=n("ekQu"),r=n("8Kt/"),p=n.n(r),i=n("nOHt"),l=n("ap0H"),u=n("1Q1k"),d=c.a.createElement;function m(e){var a=Object(i.useRouter)();return d(c.a.Fragment,null,d(l.a,{suffix:"/"===a.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),d(p.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.su".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(o.b,Object(t.a)({nav:u.a},e)))}},wH44:function(e,a,n){"use strict";n.d(a,"a",(function(){return d}));var t=n("rePB"),s=n("q1tI"),c=n.n(s),o=n("AOjV"),r=n("AI3G"),p=n("Zb5r"),i=c.a.createElement;function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){Object(t.a)(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function d(e){var{plugin:a,name:n}=e,t=Object(r.a)(a);return n=n||a.replace(/([a-z])([A-Z])/g,(e,a,n)=>"".concat(a," ").concat(n.toLowerCase())),i("div",{className:"prose"},i("p",null,"\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",n,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",i("span",{dangerouslySetInnerHTML:{__html:Object(p.a)(t.map(e=>"<code>".concat(e,"</code>")))}})," ",t.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",i("code",null,"false")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",i("code",null,"corePlugins")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"),i(o.a,{path:"corePlugins",before:"...",add:t.reduce((e,a)=>u(u({},e),{},{[a]:!1}),{})}))}}},[["2cYW",0,2,6,1,3,4,5,7]]]);