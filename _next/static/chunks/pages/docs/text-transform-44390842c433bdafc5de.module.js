(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[148],{"5xSE":function(e,t,a){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("q1tI"),s=a.n(n),r=a("98BF"),c=a("Zb5r"),o=a("AOjV"),i=s.a.createElement;function p(e){var{plugin:t,name:a}=e,n=r.defaultConfig.variants[t]||["responsive"];a=a||t.replace(/([a-z])([A-Z])/g,(e,t,a)=>"".concat(t," ").concat(a.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(e=>!n.includes(e)).slice(0,2),p="\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ".concat(n.length?"\u0442\u043e\u043b\u044c\u043a\u043e ".concat(Object(c.a)(n).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")):"\u043d\u0435\u0442"," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ").concat(a,".");return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:p}}),i("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",a," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",i("code",null,t)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",i("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",i("code",null,"tailwind.config.js"),"."),i("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",n.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(c.a)(s),":"),i(o.a,{path:"variants.extend",before:"...",add:{[t]:s}}))}},AOjV:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),s=a.n(n),r=(a("Btb4"),a("AI3G")),c=a("iuhU"),o=s.a.createElement;function i(e){var{value:t}=e;return"string"===typeof t?o("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?o(s.a.Fragment,null,o("span",{className:"token punctuation"},"["),t.map((e,a)=>o(n.Fragment,{key:a},o(i,{value:e}),a===t.length-1?null:o("span",{className:"token punctuation"},", "))),o("span",{className:"token punctuation"},"]")):"boolean"===typeof t?o("span",{className:"token boolean"},t.toString()):t.toString()}function p(e){var{edits:t,indent:a="",type:s="inserted"}=e;return o("span",{className:Object(c.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(t).map((e,r)=>{return o(n.Fragment,{key:r},o("span",{className:Object(c.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",a,/^[a-z_$][a-z0-9_$]*$/i.test(p=e)?p:"'".concat(p,"'"),o("span",{className:"token operator"},":")," ",o(i,{value:t[e]}),o("span",{className:"token punctuation"},","),"\n");var p}))}function l(e){var{path:t,add:a,remove:s,before:c,after:i}=e;return t="string"===typeof t?t.split("."):t,o("div",{className:"prose"},o("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},o("pre",{className:"language-diff"},o("code",{className:"language-diff"},o("span",{className:"token unchanged"},"  ",o("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",o("span",{className:"token punctuation"},"."),o("span",{className:"token property-access"},"exports")," ",o("span",{className:"token operator"},"=")," ",o("span",{className:"token punctuation"},"{"),"\n",t.map((e,t)=>o(n.Fragment,{key:t},"  ","  ".repeat(t+1),e,o("span",{className:"token operator"},":")," ",o("span",{className:"token punctuation"},"{"),"\n")),c&&Object(r.a)(c).map((e,a)=>o(n.Fragment,{key:a},"  ".repeat(t.length+2),o("span",{className:"token comment"},"// ".concat(e)),"\n"))),s&&o(p,{edits:s,type:"deleted",indent:"  ".repeat(t.length+1)}),a&&o(p,{edits:a,type:"inserted",indent:"  ".repeat(t.length+1)}),o("span",{className:"token unchanged"},i&&Object(r.a)(i).map(e=>"".concat("  ".repeat(t.length+2)).concat(e,"\n")),t.map((e,a)=>o(n.Fragment,{key:a},"  ","  ".repeat(t.length-a),"}\n")),"  }")))))}},Btb4:function(e,t,a){"use strict";const n=a("5xSE"),s=a("p+I8"),r=a("GAX2").default;e.exports=(e,t,a)=>{const c=[];return function e(t,a,o){let i;(a=a||{}).indent=a.indent||"\t",o=o||"",i=void 0===a.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+a.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const p=e=>{if(void 0===a.inlineCharacterLimit)return e;const t=e.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return t.length<=a.inlineCharacterLimit?t:e.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),o).replace(new RegExp(i.indent,"g"),o+a.indent)};if(-1!==c.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||n(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";c.push(t);const n="["+i.newLine+t.map((n,s)=>{const r=t.length-1===s?i.newLine:","+i.newLineOrSpace;let c=e(n,a,o+a.indent);return a.transform&&(c=a.transform(t,s,c)),i.indent+c+r}).join("")+i.pad+"]";return c.pop(),p(n)}if(s(t)){let n=Object.keys(t).concat(r(t));if(a.filter&&(n=n.filter(e=>a.filter(t,e))),0===n.length)return"{}";c.push(t);const s="{"+i.newLine+n.map((s,r)=>{const c=n.length-1===r?i.newLine:","+i.newLineOrSpace,p="symbol"===typeof s,l=!p&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=p||l?s:e(s,a);let d=e(t[s],a,o+a.indent);return a.transform&&(d=a.transform(t,s,d)),i.indent+String(u)+": "+d+c}).join("")+i.pad+"}";return c.pop(),p(s)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===a.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,a)}},GAX2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},GoC5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:e,variants:t}){e({".uppercase":{"text-transform":"uppercase"},".lowercase":{"text-transform":"lowercase"},".capitalize":{"text-transform":"capitalize"},".normal-case":{"text-transform":"none"}},t("textTransform"))}}},NbsJ:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/text-transform",function(){return a("uuw1")}])},Zb5r:function(e,t,a){"use strict";function n(e){return e.reduce((t,a,n)=>0===n?a:n===e.length-1?"".concat(t," \u0438 ").concat(a):"".concat(t,", ").concat(a),"")}a.d(t,"a",(function(){return n}))},ap0H:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("q1tI"),s=a.n(n),r=a("8Kt/"),c=a.n(r),o=s.a.createElement;function i(e){var{suffix:t,children:a}=e,n=a+(t?" - ".concat(t):"");return o(c.a,null,o("title",{key:"title"},n),o("meta",{key:"twitter:title",name:"twitter:title",content:n}),o("meta",{key:"og:title",property:"og:title",content:n}))}},"p+I8":function(e,t,a){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},pOT7:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return f}));var n=a("wx14"),s=a("q1tI"),r=a.n(s),c=a("iuhU"),o=a("ZMKu"),i=r.a.createElement,p={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function m(e){var t=Object(s.useRef)(),{0:a,1:r}=Object(s.useState)(!1),{0:c,1:o}=Object(s.useState)({});return Object(s.useEffect)(()=>{if(a){var e=new window.ResizeObserver(n);return n(),e.observe(t.current.contentDocument.body),()=>{e.disconnect()}}function n(){o({height:t.current.contentDocument.body.scrollHeight})}},[a]),i("iframe",Object(n.a)({},e,{ref:t,onLoad:()=>r(!0),style:c}))}function g(e){var{color:t,snippet:a}=e;return i("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",p[t],{"bg-gray-800":!p[t]})},i("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":p[t]})},i("code",{className:"language-html",dangerouslySetInnerHTML:{__html:a}})))}function b(e){var{preview:t,src:a,snippet:n,previewClassName:s,color:r="gray"}=e;return i("div",{className:"relative overflow-hidden mb-8"},t?i("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",l[r],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:t}}):i(m,{src:a,className:Object(c.a)("w-full rounded-t-xl",l[r])}),i(g,{color:r,snippet:n}))}function f(e){var{preview:t,src:a,previewClassName:n,snippet:r,color:p="gray",min:b=!1}=e,f=Object(s.useRef)(),O=Object(o.h)(0),v=Object(s.useRef)(),{0:h,1:j}=Object(s.useState)(!1);return Object(s.useEffect)(()=>{var e=new window.ResizeObserver(()=>{O.set(0)});return e.observe(f.current),()=>{e.disconnect()}},[]),i("div",{className:"relative mb-8"},i("div",{ref:f,className:"relative rounded-t-xl ".concat(u[p])},i("div",{className:b?"md:w-88":void 0},i(o.d.div,{className:"relative",style:{marginRight:Object(o.i)(O,e=>-e)}},t?i("div",{className:Object(c.a)("rounded-t-xl",n,l[p],{"p-10":!n}),dangerouslySetInnerHTML:{__html:t}}):i(m,{src:a,className:Object(c.a)("w-full rounded-t-xl",l[p],{"pointer-events-none":h})}))),i("div",{ref:v,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},i(o.d.div,{drag:"x",_dragX:O,dragMomentum:!1,dragElastic:0,dragConstraints:v,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(b?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:O},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),j(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),j(!1)}},i("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},i("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[p]),style:{width:"0.4375rem"}},i("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),i(g,{color:p,snippet:r}))}},uuw1:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var n=a("wx14"),s=a("Ff2n"),r=a("q1tI"),c=a.n(r),o=a("7ljp"),i=a("YFqc"),p=a.n(i),l=a("tc9R"),u=a("pOT7"),d=a("vRWG"),m=a("I6Nb"),g=a("GoC5"),b=a.n(g),f=a("8C7G"),O=a("wH44"),v=(c.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:b()},meta:{title:"\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u0435\u043a\u0441\u0442\u0430",shortTitle:"Text Transform",description:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0442\u0435\u043a\u0441\u0442\u0430.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},tableOfContents:[{title:"\u041d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440",slug:"normalnyj-registr",children:[]},{title:"\u0412\u0435\u0440\u0445\u043d\u0438\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440",slug:"verhnij-registr",children:[]},{title:"\u0421\u0442\u0440\u043e\u0447\u043d\u044b\u0435 \u0431\u0443\u043a\u0432\u044b",slug:"strochnye-bukvy",children:[]},{title:"\u0417\u0430\u0433\u043b\u0430\u0432\u043d\u044b\u0435 \u0431\u0443\u043a\u0432\u044b",slug:"zaglavnye-bukvy",children:[]},{title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",slug:"adaptivnost",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]}),h=m.ContentsLayout;function j(e){var{components:t}=e,a=Object(s.a)(e,["components"]);return Object(o.a)(h,Object(n.a)({},v,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"normalnyj-registr",toc:!0},"\u041d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440"),Object(o.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",Object(o.a)("inlineCode",{parentName:"p"},"normal-case"),", \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0440\u043f\u0443\u0441. \u041e\u0431\u044b\u0447\u043d\u043e \u044d\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0441\u0431\u0440\u043e\u0441\u0430 \u0437\u0430\u0433\u043b\u0430\u0432\u043d\u044b\u0445 \u0431\u0443\u043a\u0432 \u0432 \u0440\u0430\u0437\u043d\u044b\u0445 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u044b\u0445 \u0442\u043e\u0447\u043a\u0430\u0445.")),Object(o.a)(u.a,{preview:'\n  <p class="normal-case text-xl text-emerald-600">\u0411\u044b\u0441\u0442\u0440\u0430\u044f, \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430, \u043f\u0435\u0440\u0435\u043f\u0440\u044b\u0433\u043d\u0443\u043b\u0430 \u0447\u0435\u0440\u0435\u0437 \u043b\u0435\u043d\u0438\u0432\u043e\u0433\u043e \u043f\u0441\u0430.</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">normal-case</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"verhnij-registr",toc:!0},"\u0412\u0435\u0440\u0445\u043d\u0438\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440"),Object(o.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",Object(o.a)("inlineCode",{parentName:"p"},"uppercase")," \u0434\u043b\u044f \u0442\u0435\u043a\u0441\u0442\u0430 \u0432 \u0432\u0435\u0440\u0445\u043d\u0435\u043c \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0435.")),Object(o.a)(u.a,{preview:'\n  <p class="uppercase text-xl text-purple-600">\u0411\u044b\u0441\u0442\u0440\u0430\u044f, \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430, \u043f\u0435\u0440\u0435\u043f\u0440\u044b\u0433\u043d\u0443\u043b\u0430 \u0447\u0435\u0440\u0435\u0437 \u043b\u0435\u043d\u0438\u0432\u043e\u0433\u043e \u043f\u0441\u0430.</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">uppercase</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"strochnye-bukvy",toc:!0},"\u0421\u0442\u0440\u043e\u0447\u043d\u044b\u0435 \u0431\u0443\u043a\u0432\u044b"),Object(o.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",Object(o.a)("inlineCode",{parentName:"p"},"lowercase")," \u0434\u043b\u044f \u0442\u0435\u043a\u0441\u0442\u0430 \u0432 \u043d\u0438\u0436\u043d\u0435\u043c \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0435.")),Object(o.a)(u.a,{preview:'\n  <p class="lowercase text-xl text-rose-600">\u0411\u044b\u0441\u0442\u0440\u0430\u044f, \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430, \u043f\u0435\u0440\u0435\u043f\u0440\u044b\u0433\u043d\u0443\u043b\u0430 \u0447\u0435\u0440\u0435\u0437 \u043b\u0435\u043d\u0438\u0432\u043e\u0433\u043e \u043f\u0441\u0430.</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">lowercase</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"rose",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"zaglavnye-bukvy",toc:!0},"\u0417\u0430\u0433\u043b\u0430\u0432\u043d\u044b\u0435 \u0431\u0443\u043a\u0432\u044b"),Object(o.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",Object(o.a)("inlineCode",{parentName:"p"},"capitalize")," \u0434\u043b\u044f \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0442\u0435\u043a\u0441\u0442\u0430 \u0441 \u0437\u0430\u0433\u043b\u0430\u0432\u043d\u043e\u0439 \u0431\u0443\u043a\u0432\u044b.")),Object(o.a)(u.a,{preview:'\n  <p class="capitalize text-xl text-fuchsia-600">\u0411\u044b\u0441\u0442\u0440\u0430\u044f, \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430, \u043f\u0435\u0440\u0435\u043f\u0440\u044b\u0433\u043d\u0443\u043b\u0430 \u0447\u0435\u0440\u0435\u0437 \u043b\u0435\u043d\u0438\u0432\u043e\u0433\u043e \u043f\u0441\u0430.</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">capitalize</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"fuchsia",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"adaptivnost",toc:!0},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),Object(o.a)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0442\u0435\u043a\u0441\u0442\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," \u043a \u043b\u044e\u0431\u043e\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0443\u0442\u0438\u043b\u0438\u0442\u0435 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0442\u0435\u043a\u0441\u0442\u0430. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(o.a)("inlineCode",{parentName:"p"},"md:uppercase"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",Object(o.a)("inlineCode",{parentName:"p"},"uppercase")," \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u0445 \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0432\u044b\u0448\u0435."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"capitalize ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:uppercase")," ...",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  \u0411\u044b\u0441\u0442\u0440\u0430\u044f, \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430, \u043f\u0435\u0440\u0435\u043f\u0440\u044b\u0433\u043d\u0443\u043b\u0430 \u0447\u0435\u0440\u0435\u0437 \u043b\u0435\u043d\u0438\u0432\u043e\u0433\u043e \u043f\u0441\u0430.\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"p"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 Tailwind \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 ",Object(o.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430")),"."),Object(o.a)(l.a,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),Object(o.a)(l.a,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),Object(o.a)(f.a,{plugin:"textTransform",name:"text transformation",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),Object(o.a)(O.a,{plugin:"textTransform",name:"text transformation",mdxType:"Disabling"}))}j.isMDXComponent=!0,j.layoutProps=v},vRWG:function(e,t,a){"use strict";a.r(t),a.d(t,"DocumentationLayout",(function(){return m}));var n=a("wx14"),s=a("q1tI"),r=a.n(s),c=a("ekQu"),o=a("8Kt/"),i=a.n(o),p=a("nOHt"),l=a("ap0H"),u=a("1Q1k"),d=r.a.createElement;function m(e){var t=Object(p.useRouter)();return d(r.a.Fragment,null,d(l.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),d(i.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.su".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(c.b,Object(n.a)({nav:u.a},e)))}},wH44:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("rePB"),s=a("q1tI"),r=a.n(s),c=a("AOjV"),o=a("AI3G"),i=a("Zb5r"),p=r.a.createElement;function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e){var{plugin:t,name:a}=e,n=Object(o.a)(t);return a=a||t.replace(/([a-z])([A-Z])/g,(e,t,a)=>"".concat(t," ").concat(a.toLowerCase())),p("div",{className:"prose"},p("p",null,"\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",a,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",p("span",{dangerouslySetInnerHTML:{__html:Object(i.a)(n.map(e=>"<code>".concat(e,"</code>")))}})," ",n.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",p("code",null,"false")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",p("code",null,"corePlugins")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"),p(c.a,{path:"corePlugins",before:"...",add:n.reduce((e,t)=>u(u({},e),{},{[t]:!1}),{})}))}}},[["NbsJ",0,2,6,1,3,4,5,7]]]);