_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[81],{"5xSE":function(e,n,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("q1tI"),s=t.n(a),o=t("98BF"),p=t("Zb5r"),c=t("AOjV"),l=s.a.createElement;function r({plugin:e,name:n}){const t=o.defaultConfig.variants[e]||["responsive"];n=n||e.replace(/([a-z])([A-Z])/g,((e,n,t)=>`${n} ${t.toLowerCase()}`));const a=["responsive","hover","focus","active","group-hover"].filter((e=>!t.includes(e))).slice(0,2),s=`\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ${t.length?`\u0442\u043e\u043b\u044c\u043a\u043e ${Object(p.a)(t).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")}`:"\u043d\u0435\u0442"} \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ${n}.`;return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:s}}),l("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",n," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",l("code",null,e)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",l("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",l("code",null,"tailwind.config.js"),"."),l("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",t.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(p.a)(a),":"),l(c.a,{path:"variants.extend",before:"...",add:{[e]:a}}))}},AOjV:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t("q1tI"),s=t.n(a),o=(t("Btb4"),t("AI3G")),p=t("iuhU"),c=s.a.createElement;function l({value:e}){return"string"===typeof e?c("span",{className:"token string"},"'",e,"'"):Array.isArray(e)?c(s.a.Fragment,null,c("span",{className:"token punctuation"},"["),e.map(((n,t)=>c(a.Fragment,{key:t},c(l,{value:n}),t===e.length-1?null:c("span",{className:"token punctuation"},", ")))),c("span",{className:"token punctuation"},"]")):"boolean"===typeof e?c("span",{className:"token boolean"},e.toString()):e.toString()}function r({edits:e,indent:n="",type:t="inserted"}){return c("span",{className:Object(p.a)("token",{"inserted-sign inserted":"inserted"===t,"deleted-sign deleted":"inserted"!==t})},Object.keys(e).map(((s,o)=>{return c(a.Fragment,{key:o},c("span",{className:Object(p.a)("token prefix",{inserted:"inserted"===t,deleted:"inserted"!==t})},"inserted"===t?"+":"-")," ",n,/^[a-z_$][a-z0-9_$]*$/i.test(r=s)?r:`'${r}'`,c("span",{className:"token operator"},":")," ",c(l,{value:e[s]}),c("span",{className:"token punctuation"},","),"\n");var r})))}function i({path:e,add:n,remove:t,before:s,after:p}){return e="string"===typeof e?e.split("."):e,c("div",{className:"prose"},c("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},c("pre",{className:"language-diff"},c("code",{className:"language-diff"},c("span",{className:"token unchanged"},"  ",c("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",c("span",{className:"token punctuation"},"."),c("span",{className:"token property-access"},"exports")," ",c("span",{className:"token operator"},"=")," ",c("span",{className:"token punctuation"},"{"),"\n",e.map(((e,n)=>c(a.Fragment,{key:n},"  ","  ".repeat(n+1),e,c("span",{className:"token operator"},":")," ",c("span",{className:"token punctuation"},"{"),"\n"))),s&&Object(o.a)(s).map(((n,t)=>c(a.Fragment,{key:t},"  ".repeat(e.length+2),c("span",{className:"token comment"},`// ${n}`),"\n")))),t&&c(r,{edits:t,type:"deleted",indent:"  ".repeat(e.length+1)}),n&&c(r,{edits:n,type:"inserted",indent:"  ".repeat(e.length+1)}),c("span",{className:"token unchanged"},p&&Object(o.a)(p).map((n=>`${"  ".repeat(e.length+2)}${n}\n`)),e.map(((n,t)=>c(a.Fragment,{key:t},"  ","  ".repeat(e.length-t),"}\n"))),"  }")))))}},Aunq:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:e,variants:n}){e({".flex-wrap":{"flex-wrap":"wrap"},".flex-wrap-reverse":{"flex-wrap":"wrap-reverse"},".flex-nowrap":{"flex-wrap":"nowrap"}},n("flexWrap"))}}},Btb4:function(e,n,t){"use strict";const a=t("5xSE"),s=t("p+I8"),o=t("GAX2").default;e.exports=(e,n,t)=>{const p=[];return function e(n,t,c){let l;(t=t||{}).indent=t.indent||"\t",c=c||"",l=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:c,indent:c+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const r=e=>{if(void 0===t.inlineCharacterLimit)return e;const n=e.replace(new RegExp(l.newLine,"g"),"").replace(new RegExp(l.newLineOrSpace,"g")," ").replace(new RegExp(l.pad+"|"+l.indent,"g"),"");return n.length<=t.inlineCharacterLimit?n:e.replace(new RegExp(l.newLine+"|"+l.newLineOrSpace,"g"),"\n").replace(new RegExp(l.pad,"g"),c).replace(new RegExp(l.indent,"g"),c+t.indent)};if(-1!==p.indexOf(n))return'"[Circular]"';if(null===n||void 0===n||"number"===typeof n||"boolean"===typeof n||"function"===typeof n||"symbol"===typeof n||a(n))return String(n);if(n instanceof Date)return`new Date('${n.toISOString()}')`;if(Array.isArray(n)){if(0===n.length)return"[]";p.push(n);const a="["+l.newLine+n.map(((a,s)=>{const o=n.length-1===s?l.newLine:","+l.newLineOrSpace;let p=e(a,t,c+t.indent);return t.transform&&(p=t.transform(n,s,p)),l.indent+p+o})).join("")+l.pad+"]";return p.pop(),r(a)}if(s(n)){let a=Object.keys(n).concat(o(n));if(t.filter&&(a=a.filter((e=>t.filter(n,e)))),0===a.length)return"{}";p.push(n);const s="{"+l.newLine+a.map(((s,o)=>{const p=a.length-1===o?l.newLine:","+l.newLineOrSpace,r="symbol"===typeof s,i=!r&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=r||i?s:e(s,t);let d=e(n[s],t,c+t.indent);return t.transform&&(d=t.transform(n,s,d)),l.indent+String(u)+": "+d+p})).join("")+l.pad+"}";return p.pop(),r(s)}return n=String(n).replace(/[\r\n]/g,(e=>"\n"===e?"\\n":"\\r")),!1===t.singleQuotes?`"${n=n.replace(/"/g,'\\"')}"`:`'${n=n.replace(/\\?'/g,"\\'")}'`}(e,n,t)}},GAX2:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e=>Object.getOwnPropertySymbols(e).filter((n=>Object.prototype.propertyIsEnumerable.call(e,n)))},VWga:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/flex-wrap",function(){return t("wv3D")}])},Zb5r:function(e,n,t){"use strict";function a(e){return e.reduce(((n,t,a)=>0===a?t:a===e.length-1?`${n} \u0438 ${t}`:`${n}, ${t}`),"")}t.d(n,"a",(function(){return a}))},"p+I8":function(e,n,t){"use strict";e.exports=function(e){var n=typeof e;return null!==e&&("object"===n||"function"===n)}},pOT7:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var a=t("HALo"),s=t("q1tI"),o=t.n(s),p=t("iuhU"),c=t("ZMKu"),l=o.a.createElement;const r={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},i={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function g(e){const n=Object(s.useRef)(),{0:t,1:o}=Object(s.useState)(!1),{0:p,1:c}=Object(s.useState)({});return Object(s.useEffect)((()=>{if(!t)return;function e(){c({height:n.current.contentDocument.body.scrollHeight})}const a=new window.ResizeObserver(e);return e(),a.observe(n.current.contentDocument.body),()=>{a.disconnect()}}),[t]),l("iframe",Object(a.a)({},e,{ref:n,onLoad:()=>o(!0),style:p}))}function m({color:e,snippet:n}){return l("div",{className:Object(p.a)("overflow-hidden rounded-b-xl",r[e],{"bg-gray-800":!r[e]})},l("pre",{className:Object(p.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":r[e]})},l("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}})))}function b({preview:e,src:n,snippet:t,previewClassName:a,color:s="gray"}){return l("div",{className:"relative overflow-hidden mb-8"},e?l("div",{className:Object(p.a)("rounded-t-xl overflow-hidden",i[s],a,{"p-10":!a}),dangerouslySetInnerHTML:{__html:e}}):l(g,{src:n,className:Object(p.a)("w-full rounded-t-xl",i[s])}),l(m,{color:s,snippet:t}))}function f({preview:e,src:n,previewClassName:t,snippet:a,color:o="gray",min:r=!1}){const b=Object(s.useRef)(),f=Object(c.h)(0),v=Object(s.useRef)(),{0:k,1:h}=Object(s.useState)(!1);return Object(s.useEffect)((()=>{const e=new window.ResizeObserver((()=>{f.set(0)}));return e.observe(b.current),()=>{e.disconnect()}}),[]),l("div",{className:"relative mb-8"},l("div",{ref:b,className:`relative rounded-t-xl ${u[o]}`},l("div",{className:r?"md:w-88":void 0},l(c.d.div,{className:"relative",style:{marginRight:Object(c.i)(f,(e=>-e))}},e?l("div",{className:Object(p.a)("rounded-t-xl",t,i[o],{"p-10":!t}),dangerouslySetInnerHTML:{__html:e}}):l(g,{src:n,className:Object(p.a)("w-full rounded-t-xl",i[o],{"pointer-events-none":k})}))),l("div",{ref:v,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},l(c.d.div,{drag:"x",_dragX:f,dragMomentum:!1,dragElastic:0,dragConstraints:v,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing "+(r?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:f},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),h(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),h(!1)}},l("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},l("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:`h-3 flex-none ${d[o]}`,style:{width:"0.4375rem"}},l("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),l(m,{color:o,snippet:a}))}},wH44:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t("cpVT"),s=t("q1tI"),o=t.n(s),p=t("AOjV"),c=t("AI3G"),l=t("Zb5r"),r=o.a.createElement;function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d({plugin:e,name:n}){const t=Object(c.a)(e);return n=n||e.replace(/([a-z])([A-Z])/g,((e,n,t)=>`${n} ${t.toLowerCase()}`)),r("div",{className:"prose"},r("p",null,"\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",n,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",r("span",{dangerouslySetInnerHTML:{__html:Object(l.a)(t.map((e=>`<code>${e}</code>`)))}})," ",t.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",r("code",null,"false")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",r("code",null,"corePlugins")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"),r(p.a,{path:"corePlugins",before:"...",add:t.reduce(((e,n)=>u(u({},e),{},{[n]:!1})),{})}))}},wv3D:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return O}));var a=t("HALo"),s=t("dhJC"),o=t("q1tI"),p=t.n(o),c=t("7ljp"),l=t("YFqc"),r=t.n(l),i=t("tc9R"),u=t("pOT7"),d=t("vRWG"),g=t("I6Nb"),m=t("Aunq"),b=t.n(m),f=t("8C7G"),v=t("wH44");p.a.createElement;const k={Layout:d.DocumentationLayout,classes:{plugin:b()},meta:{title:"\u041f\u0435\u0440\u0435\u043d\u043e\u0441 flex-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432",description:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u043e\u043c flex-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},tableOfContents:[{title:"\u041d\u0435 \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u0442\u044c",slug:"ne-perenosit",children:[]},{title:"\u041f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u0442\u044c \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e",slug:"perenosit-normalno",children:[]},{title:"\u041e\u0431\u0440\u0430\u0442\u043d\u044b\u0439 \u043f\u0435\u0440\u0435\u043d\u043e\u0441",slug:"obratnyj-perenos",children:[]},{title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",slug:"adaptivnost",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]},h=g.ContentsLayout;function O(e){let{components:n}=e,t=Object(s.a)(e,["components"]);return Object(c.a)(h,Object(a.a)({},k,t,{components:n,mdxType:"MDXLayout"}),Object(c.a)("div",{className:"prose"},Object(c.a)(i.a,{level:2,id:"ne-perenosit",toc:!0},"\u041d\u0435 \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u0442\u044c"),Object(c.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(c.a)("inlineCode",{parentName:"p"},"flex-nowrap"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0442\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u043d\u043e\u0441 flex-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432, \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0447\u0435\u0433\u043e flex-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u0435\u0440\u0435\u043f\u043e\u043b\u043d\u044f\u044e\u0442 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440:")),Object(c.a)(u.a,{preview:'\n  <div class="flex flex-nowrap space-x-4">\n    <div class="h-12 w-2/5 rounded-md text-white flex-none bg-emerald-500 flex items-center justify-center text-2xl font-semibold ">1</div>\n    <div class="h-12 w-2/5 rounded-md text-white flex-none bg-emerald-500 flex items-center justify-center text-2xl font-semibold ">2</div>\n    <div class="h-12 w-2/5 rounded-md text-white flex-none bg-emerald-500 flex items-center justify-center text-2xl font-semibold ">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">flex-nowrap</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(i.a,{level:2,id:"perenosit-normalno",toc:!0},"\u041f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u0442\u044c \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e"),Object(c.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(c.a)("inlineCode",{parentName:"p"},"flex-wrap"),", \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442\u044c flex-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c \u043f\u0435\u0440\u0435\u043d\u043e\u0441:")),Object(c.a)(u.a,{preview:'\n  <div class="flex flex-wrap -m-2">\n    <div class="h-12 m-2 w-2/5 rounded-md text-white bg-light-blue-500 flex items-center justify-center text-2xl font-semibold ">1</div>\n    <div class="h-12 m-2 w-2/5 rounded-md text-white bg-light-blue-500 flex items-center justify-center text-2xl font-semibold ">2</div>\n    <div class="h-12 m-2 w-2/5 rounded-md text-white bg-light-blue-500 flex items-center justify-center text-2xl font-semibold ">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">flex-wrap</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(i.a,{level:2,id:"obratnyj-perenos",toc:!0},"\u041e\u0431\u0440\u0430\u0442\u043d\u044b\u0439 \u043f\u0435\u0440\u0435\u043d\u043e\u0441"),Object(c.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(c.a)("inlineCode",{parentName:"p"},"flex-wrap-reverse"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u0442\u044c flex-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0432 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u043c \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0438:")),Object(c.a)(u.a,{preview:'\n  <div class="flex flex-wrap-reverse -m-2">\n    <div class="h-12 m-2 w-2/5 rounded-md text-white bg-purple-500 flex items-center justify-center text-2xl font-semibold ">1</div>\n    <div class="h-12 m-2 w-2/5 rounded-md text-white bg-purple-500 flex items-center justify-center text-2xl font-semibold ">2</div>\n    <div class="h-12 m-2 w-2/5 rounded-md text-white bg-purple-500 flex items-center justify-center text-2xl font-semibold ">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">flex-wrap-reverse</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(i.a,{level:2,id:"adaptivnost",toc:!0},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),Object(c.a)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u043e\u043c flex-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u0443\u044e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u0443\u044e \u0442\u043e\u0447\u043a\u0443, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",Object(c.a)("inlineCode",{parentName:"p"},"{screen}:")," \u043a \u043b\u044e\u0431\u043e\u043c\u0443 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u043c\u0443 \u043a\u043b\u0430\u0441\u0441\u0443 \u0443\u0442\u0438\u043b\u0438\u0442\u044b. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(c.a)("inlineCode",{parentName:"p"},"md:flex-wrap-reverse"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",Object(c.a)("inlineCode",{parentName:"p"},"flex-wrap-reverse")," \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u0445 \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0432\u044b\u0448\u0435."),Object(c.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(c.a)("pre",Object(a.a)({parentName:"div"},{className:"language-html"}),Object(c.a)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),Object(c.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-value"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'),"flex flex-wrap ",Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:flex-wrap-reverse")," ...",Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(c.a)("span",Object(a.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(c.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(c.a)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 Tailwind \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 ",Object(c.a)(r.a,{href:"/docs/responsive-design",passHref:!0},Object(c.a)("a",null,"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430")),"."),Object(c.a)(i.a,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),Object(c.a)(i.a,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),Object(c.a)(f.a,{plugin:"flexWrap",name:"flex-wrap",mdxType:"Variants"}),Object(c.a)("div",{className:"prose"},Object(c.a)(i.a,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),Object(c.a)(v.a,{plugin:"flexWrap",name:"flex-wrap",mdxType:"Disabling"}))}O.isMDXComponent=!0,O.layoutProps=k}},[["VWga",0,2,6,1,3,4,5,7]]]);