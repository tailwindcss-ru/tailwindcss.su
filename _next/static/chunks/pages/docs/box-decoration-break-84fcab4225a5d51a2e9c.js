_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[52],{"4R8O":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/box-decoration-break",function(){return n("wiIH")}])},"5xSE":function(e,t,n){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI"),r=n.n(a),s=n("98BF"),o=n("Zb5r"),i=n("AOjV"),c=r.a.createElement;function l({plugin:e,name:t}){const n=s.defaultConfig.variants[e]||["responsive"];t=t||e.replace(/([a-z])([A-Z])/g,((e,t,n)=>`${t} ${n.toLowerCase()}`));const a=["responsive","hover","focus","active","group-hover"].filter((e=>!n.includes(e))).slice(0,2),r=`\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ${n.length?`\u0442\u043e\u043b\u044c\u043a\u043e ${Object(o.a)(n).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")}`:"\u043d\u0435\u0442"} \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ${t}.`;return c("div",{className:"prose"},c("p",{dangerouslySetInnerHTML:{__html:r}}),c("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",t," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",c("code",null,e)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",c("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",c("code",null,"tailwind.config.js"),"."),c("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",n.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(o.a)(a),":"),c(i.a,{path:"variants.extend",before:"...",add:{[e]:a}}))}},AOjV:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("q1tI"),r=n.n(a),s=(n("Btb4"),n("AI3G")),o=n("iuhU"),i=r.a.createElement;function c({value:e}){return"string"===typeof e?i("span",{className:"token string"},"'",e,"'"):Array.isArray(e)?i(r.a.Fragment,null,i("span",{className:"token punctuation"},"["),e.map(((t,n)=>i(a.Fragment,{key:n},i(c,{value:t}),n===e.length-1?null:i("span",{className:"token punctuation"},", ")))),i("span",{className:"token punctuation"},"]")):"boolean"===typeof e?i("span",{className:"token boolean"},e.toString()):e.toString()}function l({edits:e,indent:t="",type:n="inserted"}){return i("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===n,"deleted-sign deleted":"inserted"!==n})},Object.keys(e).map(((r,s)=>{return i(a.Fragment,{key:s},i("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===n,deleted:"inserted"!==n})},"inserted"===n?"+":"-")," ",t,/^[a-z_$][a-z0-9_$]*$/i.test(l=r)?l:`'${l}'`,i("span",{className:"token operator"},":")," ",i(c,{value:e[r]}),i("span",{className:"token punctuation"},","),"\n");var l})))}function p({path:e,add:t,remove:n,before:r,after:o}){return e="string"===typeof e?e.split("."):e,i("div",{className:"prose"},i("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},i("pre",{className:"language-diff"},i("code",{className:"language-diff"},i("span",{className:"token unchanged"},"  ",i("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",i("span",{className:"token punctuation"},"."),i("span",{className:"token property-access"},"exports")," ",i("span",{className:"token operator"},"=")," ",i("span",{className:"token punctuation"},"{"),"\n",e.map(((e,t)=>i(a.Fragment,{key:t},"  ","  ".repeat(t+1),e,i("span",{className:"token operator"},":")," ",i("span",{className:"token punctuation"},"{"),"\n"))),r&&Object(s.a)(r).map(((t,n)=>i(a.Fragment,{key:n},"  ".repeat(e.length+2),i("span",{className:"token comment"},`// ${t}`),"\n")))),n&&i(l,{edits:n,type:"deleted",indent:"  ".repeat(e.length+1)}),t&&i(l,{edits:t,type:"inserted",indent:"  ".repeat(e.length+1)}),i("span",{className:"token unchanged"},o&&Object(s.a)(o).map((t=>`${"  ".repeat(e.length+2)}${t}\n`)),e.map(((t,n)=>i(a.Fragment,{key:n},"  ","  ".repeat(e.length-n),"}\n"))),"  }")))))}},Btb4:function(e,t,n){"use strict";const a=n("5xSE"),r=n("p+I8"),s=n("GAX2").default;e.exports=(e,t,n)=>{const o=[];return function e(t,n,i){let c;(n=n||{}).indent=n.indent||"\t",i=i||"",c=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:i,indent:i+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=e=>{if(void 0===n.inlineCharacterLimit)return e;const t=e.replace(new RegExp(c.newLine,"g"),"").replace(new RegExp(c.newLineOrSpace,"g")," ").replace(new RegExp(c.pad+"|"+c.indent,"g"),"");return t.length<=n.inlineCharacterLimit?t:e.replace(new RegExp(c.newLine+"|"+c.newLineOrSpace,"g"),"\n").replace(new RegExp(c.pad,"g"),i).replace(new RegExp(c.indent,"g"),i+n.indent)};if(-1!==o.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||a(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";o.push(t);const a="["+c.newLine+t.map(((a,r)=>{const s=t.length-1===r?c.newLine:","+c.newLineOrSpace;let o=e(a,n,i+n.indent);return n.transform&&(o=n.transform(t,r,o)),c.indent+o+s})).join("")+c.pad+"]";return o.pop(),l(a)}if(r(t)){let a=Object.keys(t).concat(s(t));if(n.filter&&(a=a.filter((e=>n.filter(t,e)))),0===a.length)return"{}";o.push(t);const r="{"+c.newLine+a.map(((r,s)=>{const o=a.length-1===s?c.newLine:","+c.newLineOrSpace,l="symbol"===typeof r,p=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(r),u=l||p?r:e(r,n);let d=e(t[r],n,i+n.indent);return n.transform&&(d=n.transform(t,r,d)),c.indent+String(u)+": "+d+o})).join("")+c.pad+"}";return o.pop(),l(r)}return t=String(t).replace(/[\r\n]/g,(e=>"\n"===e?"\\n":"\\r")),!1===n.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,n)}},GAX2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter((t=>Object.prototype.propertyIsEnumerable.call(e,t)))},ODCF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:e,variants:t}){e({".decoration-slice":{"box-decoration-break":"slice"},".decoration-clone":{"box-decoration-break":"clone"}},t("boxDecorationBreak"))}}},Zb5r:function(e,t,n){"use strict";function a(e){return e.reduce(((t,n,a)=>0===a?n:a===e.length-1?`${t} \u0438 ${n}`:`${t}, ${n}`),"")}n.d(t,"a",(function(){return a}))},"p+I8":function(e,t,n){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},pOT7:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var a=n("HALo"),r=n("q1tI"),s=n.n(r),o=n("iuhU"),i=n("ZMKu"),c=s.a.createElement;const l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},p={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function b(e){const t=Object(r.useRef)(),{0:n,1:s}=Object(r.useState)(!1),{0:o,1:i}=Object(r.useState)({});return Object(r.useEffect)((()=>{if(!n)return;function e(){i({height:t.current.contentDocument.body.scrollHeight})}const a=new window.ResizeObserver(e);return e(),a.observe(t.current.contentDocument.body),()=>{a.disconnect()}}),[n]),c("iframe",Object(a.a)({},e,{ref:t,onLoad:()=>s(!0),style:o}))}function g({color:e,snippet:t}){return c("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",l[e],{"bg-gray-800":!l[e]})},c("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[e]})},c("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function m({preview:e,src:t,snippet:n,previewClassName:a,color:r="gray"}){return c("div",{className:"relative overflow-hidden mb-8"},e?c("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",p[r],a,{"p-10":!a}),dangerouslySetInnerHTML:{__html:e}}):c(b,{src:t,className:Object(o.a)("w-full rounded-t-xl",p[r])}),c(g,{color:r,snippet:n}))}function f({preview:e,src:t,previewClassName:n,snippet:a,color:s="gray",min:l=!1}){const m=Object(r.useRef)(),f=Object(i.h)(0),O=Object(r.useRef)(),{0:j,1:N}=Object(r.useState)(!1);return Object(r.useEffect)((()=>{const e=new window.ResizeObserver((()=>{f.set(0)}));return e.observe(m.current),()=>{e.disconnect()}}),[]),c("div",{className:"relative mb-8"},c("div",{ref:m,className:`relative rounded-t-xl ${u[s]}`},c("div",{className:l?"md:w-88":void 0},c(i.d.div,{className:"relative",style:{marginRight:Object(i.i)(f,(e=>-e))}},e?c("div",{className:Object(o.a)("rounded-t-xl",n,p[s],{"p-10":!n}),dangerouslySetInnerHTML:{__html:e}}):c(b,{src:t,className:Object(o.a)("w-full rounded-t-xl",p[s],{"pointer-events-none":j})}))),c("div",{ref:O,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},c(i.d.div,{drag:"x",_dragX:f,dragMomentum:!1,dragElastic:0,dragConstraints:O,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing "+(l?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:f},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),N(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),N(!1)}},c("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},c("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:`h-3 flex-none ${d[s]}`,style:{width:"0.4375rem"}},c("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),c(g,{color:s,snippet:a}))}},wH44:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("cpVT"),r=n("q1tI"),s=n.n(r),o=n("AOjV"),i=n("AI3G"),c=n("Zb5r"),l=s.a.createElement;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d({plugin:e,name:t}){const n=Object(i.a)(e);return t=t||e.replace(/([a-z])([A-Z])/g,((e,t,n)=>`${t} ${n.toLowerCase()}`)),l("div",{className:"prose"},l("p",null,"\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",t,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",l("span",{dangerouslySetInnerHTML:{__html:Object(c.a)(n.map((e=>`<code>${e}</code>`)))}})," ",n.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",l("code",null,"false")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",l("code",null,"corePlugins")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"),l(o.a,{path:"corePlugins",before:"...",add:n.reduce(((e,t)=>u(u({},e),{},{[t]:!1})),{})}))}},wiIH:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var a=n("HALo"),r=n("dhJC"),s=n("q1tI"),o=n.n(s),i=n("7ljp"),c=n("YFqc"),l=n.n(c),p=n("tc9R"),u=n("pOT7"),d=n("vRWG"),b=n("I6Nb"),g=n("ODCF"),m=n.n(g),f=n("8C7G"),O=n("wH44");o.a.createElement;const j={Layout:d.DocumentationLayout,classes:{plugin:m()},meta:{title:"\u0423\u043a\u0440\u0430\u0448\u0435\u043d\u0438\u0435 \u043a\u043e\u0440\u043e\u0431\u043a\u0438",description:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u043e\u0432 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0432 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0441\u0442\u0440\u043e\u043a\u0430\u0445, \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u0445 \u0438\u043b\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0445.",featureVersion:"v2.1+"},tableOfContents:[{title:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435",slug:"primenenie",children:[]},{title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",slug:"adaptivnost",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]},N=b.ContentsLayout;function h(e){let{components:t}=e,n=Object(r.a)(e,["components"]);return Object(i.a)(N,Object(a.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:2,id:"primenenie",toc:!0},"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435"),Object(i.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",Object(i.a)("inlineCode",{parentName:"p"},"decoration-slice")," \u0438 ",Object(i.a)("inlineCode",{parentName:"p"},"decoration-clone"),", \u0447\u0442\u043e\u0431\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c \u0442\u0430\u043a\u0438\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432, \u043a\u0430\u043a ",Object(i.a)("inlineCode",{parentName:"p"},"background"),", ",Object(i.a)("inlineCode",{parentName:"p"},"border"),", ",Object(i.a)("inlineCode",{parentName:"p"},"border-image"),", ",Object(i.a)("inlineCode",{parentName:"p"},"box-shadow"),", ",Object(i.a)("inlineCode",{parentName:"p"},"clip-page"),", ",Object(i.a)("inlineCode",{parentName:"p"},"margin")," \u0438 ",Object(i.a)("inlineCode",{parentName:"p"},"padding"),", \u043a\u0430\u043a \u0435\u0441\u043b\u0438 \u0431\u044b \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0431\u044b\u043b \u043e\u0434\u043d\u0438\u043c \u043d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u044b\u043c \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u043e\u043c \u0438\u043b\u0438 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u043c \u0431\u043b\u043e\u043a\u043e\u043c.")),Object(i.a)(u.a,{preview:'\n  <div class="text-center text-5xl font-extrabold leading-none tracking-tight">\n    <span class="decoration-clone bg-clip-text text-transparent bg-gradient-to-b from-amber-400 to-red-500">\n      \u041f\u0440\u0438\u0432\u0435\u0442<br>\n      \u041c\u0438\u0440\n    </span>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">decoration-clone</span> bg-gradient-to-b from-yellow-400 to-red-500 text-transparent ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  \u041f\u0440\u0438\u0432\u0435\u0442<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>\n  \u041c\u0438\u0440\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"amber",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:2,id:"adaptivnost",toc:!0},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),Object(i.a)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e\u043c ",Object(i.a)("inlineCode",{parentName:"p"},"box-decoration-break")," \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",Object(i.a)("inlineCode",{parentName:"p"},"{screen}:")," \u043a \u043b\u044e\u0431\u043e\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0443\u0442\u0438\u043b\u0438\u0442\u0435 ",Object(i.a)("inlineCode",{parentName:"p"},"box-decoration-break"),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(i.a)("inlineCode",{parentName:"p"},"md:decoration-slice"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",Object(i.a)("inlineCode",{parentName:"p"},"decoration-slice")," \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u0432 \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0432\u044b\u0448\u0435."),Object(i.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(i.a)("pre",Object(a.a)({parentName:"div"},{className:"language-html"}),Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-value"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'),"decoration-clone ",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:decoration-slice")," ...",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(i.a)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 Tailwind \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 ",Object(i.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(i.a)("a",null,"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430")),"."),Object(i.a)(p.a,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),Object(i.a)(p.a,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),Object(i.a)(f.a,{plugin:"boxDecorationBreak",name:"box-decoration-break",mdxType:"Variants"}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),Object(i.a)(O.a,{plugin:"boxDecorationBreak",name:"box-decoration-break",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=j}},[["4R8O",0,2,6,1,3,4,5,7]]]);