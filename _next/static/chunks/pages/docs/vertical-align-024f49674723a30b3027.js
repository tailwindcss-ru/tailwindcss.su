_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[181],{"5xSE":function(e,a,n){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,a,n){"use strict";n.d(a,"a",(function(){return p}));var t=n("q1tI"),s=n.n(t),o=n("98BF"),l=n("Zb5r"),c=n("AOjV"),r=s.a.createElement;function p({plugin:e,name:a}){const n=o.defaultConfig.variants[e]||["responsive"];a=a||e.replace(/([a-z])([A-Z])/g,((e,a,n)=>`${a} ${n.toLowerCase()}`));const t=["responsive","hover","focus","active","group-hover"].filter((e=>!n.includes(e))).slice(0,2),s=`\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ${n.length?`\u0442\u043e\u043b\u044c\u043a\u043e ${Object(l.a)(n).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")}`:"\u043d\u0435\u0442"} \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ${a}.`;return r("div",{className:"prose"},r("p",{dangerouslySetInnerHTML:{__html:s}}),r("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",a," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",r("code",null,e)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",r("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",r("code",null,"tailwind.config.js"),"."),r("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",n.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(l.a)(t),":"),r(c.a,{path:"variants.extend",before:"...",add:{[e]:t}}))}},AOjV:function(e,a,n){"use strict";n.d(a,"a",(function(){return i}));var t=n("q1tI"),s=n.n(t),o=(n("Btb4"),n("AI3G")),l=n("iuhU"),c=s.a.createElement;function r({value:e}){return"string"===typeof e?c("span",{className:"token string"},"'",e,"'"):Array.isArray(e)?c(s.a.Fragment,null,c("span",{className:"token punctuation"},"["),e.map(((a,n)=>c(t.Fragment,{key:n},c(r,{value:a}),n===e.length-1?null:c("span",{className:"token punctuation"},", ")))),c("span",{className:"token punctuation"},"]")):"boolean"===typeof e?c("span",{className:"token boolean"},e.toString()):e.toString()}function p({edits:e,indent:a="",type:n="inserted"}){return c("span",{className:Object(l.a)("token",{"inserted-sign inserted":"inserted"===n,"deleted-sign deleted":"inserted"!==n})},Object.keys(e).map(((s,o)=>{return c(t.Fragment,{key:o},c("span",{className:Object(l.a)("token prefix",{inserted:"inserted"===n,deleted:"inserted"!==n})},"inserted"===n?"+":"-")," ",a,/^[a-z_$][a-z0-9_$]*$/i.test(p=s)?p:`'${p}'`,c("span",{className:"token operator"},":")," ",c(r,{value:e[s]}),c("span",{className:"token punctuation"},","),"\n");var p})))}function i({path:e,add:a,remove:n,before:s,after:l}){return e="string"===typeof e?e.split("."):e,c("div",{className:"prose"},c("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},c("pre",{className:"language-diff"},c("code",{className:"language-diff"},c("span",{className:"token unchanged"},"  ",c("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",c("span",{className:"token punctuation"},"."),c("span",{className:"token property-access"},"exports")," ",c("span",{className:"token operator"},"=")," ",c("span",{className:"token punctuation"},"{"),"\n",e.map(((e,a)=>c(t.Fragment,{key:a},"  ","  ".repeat(a+1),e,c("span",{className:"token operator"},":")," ",c("span",{className:"token punctuation"},"{"),"\n"))),s&&Object(o.a)(s).map(((a,n)=>c(t.Fragment,{key:n},"  ".repeat(e.length+2),c("span",{className:"token comment"},`// ${a}`),"\n")))),n&&c(p,{edits:n,type:"deleted",indent:"  ".repeat(e.length+1)}),a&&c(p,{edits:a,type:"inserted",indent:"  ".repeat(e.length+1)}),c("span",{className:"token unchanged"},l&&Object(o.a)(l).map((a=>`${"  ".repeat(e.length+2)}${a}\n`)),e.map(((a,n)=>c(t.Fragment,{key:n},"  ","  ".repeat(e.length-n),"}\n"))),"  }")))))}},Btb4:function(e,a,n){"use strict";const t=n("5xSE"),s=n("p+I8"),o=n("GAX2").default;e.exports=(e,a,n)=>{const l=[];return function e(a,n,c){let r;(n=n||{}).indent=n.indent||"\t",c=c||"",r=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:c,indent:c+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const p=e=>{if(void 0===n.inlineCharacterLimit)return e;const a=e.replace(new RegExp(r.newLine,"g"),"").replace(new RegExp(r.newLineOrSpace,"g")," ").replace(new RegExp(r.pad+"|"+r.indent,"g"),"");return a.length<=n.inlineCharacterLimit?a:e.replace(new RegExp(r.newLine+"|"+r.newLineOrSpace,"g"),"\n").replace(new RegExp(r.pad,"g"),c).replace(new RegExp(r.indent,"g"),c+n.indent)};if(-1!==l.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||t(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";l.push(a);const t="["+r.newLine+a.map(((t,s)=>{const o=a.length-1===s?r.newLine:","+r.newLineOrSpace;let l=e(t,n,c+n.indent);return n.transform&&(l=n.transform(a,s,l)),r.indent+l+o})).join("")+r.pad+"]";return l.pop(),p(t)}if(s(a)){let t=Object.keys(a).concat(o(a));if(n.filter&&(t=t.filter((e=>n.filter(a,e)))),0===t.length)return"{}";l.push(a);const s="{"+r.newLine+t.map(((s,o)=>{const l=t.length-1===o?r.newLine:","+r.newLineOrSpace,p="symbol"===typeof s,i=!p&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=p||i?s:e(s,n);let d=e(a[s],n,c+n.indent);return n.transform&&(d=n.transform(a,s,d)),r.indent+String(u)+": "+d+l})).join("")+r.pad+"}";return l.pop(),p(s)}return a=String(a).replace(/[\r\n]/g,(e=>"\n"===e?"\\n":"\\r")),!1===n.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(e,a,n)}},EL43:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/vertical-align",function(){return n("yLNH")}])},GAX2:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=e=>Object.getOwnPropertySymbols(e).filter((a=>Object.prototype.propertyIsEnumerable.call(e,a)))},Zb5r:function(e,a,n){"use strict";function t(e){return e.reduce(((a,n,t)=>0===t?n:t===e.length-1?`${a} \u0438 ${n}`:`${a}, ${n}`),"")}n.d(a,"a",(function(){return t}))},"p+I8":function(e,a,n){"use strict";e.exports=function(e){var a=typeof e;return null!==e&&("object"===a||"function"===a)}},pOT7:function(e,a,n){"use strict";n.d(a,"a",(function(){return g})),n.d(a,"b",(function(){return O}));var t=n("HALo"),s=n("q1tI"),o=n.n(s),l=n("iuhU"),c=n("ZMKu"),r=o.a.createElement;const p={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},i={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function b(e){const a=Object(s.useRef)(),{0:n,1:o}=Object(s.useState)(!1),{0:l,1:c}=Object(s.useState)({});return Object(s.useEffect)((()=>{if(!n)return;function e(){c({height:a.current.contentDocument.body.scrollHeight})}const t=new window.ResizeObserver(e);return e(),t.observe(a.current.contentDocument.body),()=>{t.disconnect()}}),[n]),r("iframe",Object(t.a)({},e,{ref:a,onLoad:()=>o(!0),style:l}))}function m({color:e,snippet:a}){return r("div",{className:Object(l.a)("overflow-hidden rounded-b-xl",p[e],{"bg-gray-800":!p[e]})},r("pre",{className:Object(l.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":p[e]})},r("code",{className:"language-html",dangerouslySetInnerHTML:{__html:a}})))}function g({preview:e,src:a,snippet:n,previewClassName:t,color:s="gray"}){return r("div",{className:"relative overflow-hidden mb-8"},e?r("div",{className:Object(l.a)("rounded-t-xl overflow-hidden",i[s],t,{"p-10":!t}),dangerouslySetInnerHTML:{__html:e}}):r(b,{src:a,className:Object(l.a)("w-full rounded-t-xl",i[s])}),r(m,{color:s,snippet:n}))}function O({preview:e,src:a,previewClassName:n,snippet:t,color:o="gray",min:p=!1}){const g=Object(s.useRef)(),O=Object(c.h)(0),h=Object(s.useRef)(),{0:j,1:f}=Object(s.useState)(!1);return Object(s.useEffect)((()=>{const e=new window.ResizeObserver((()=>{O.set(0)}));return e.observe(g.current),()=>{e.disconnect()}}),[]),r("div",{className:"relative mb-8"},r("div",{ref:g,className:`relative rounded-t-xl ${u[o]}`},r("div",{className:p?"md:w-88":void 0},r(c.d.div,{className:"relative",style:{marginRight:Object(c.i)(O,(e=>-e))}},e?r("div",{className:Object(l.a)("rounded-t-xl",n,i[o],{"p-10":!n}),dangerouslySetInnerHTML:{__html:e}}):r(b,{src:a,className:Object(l.a)("w-full rounded-t-xl",i[o],{"pointer-events-none":j})}))),r("div",{ref:h,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},r(c.d.div,{drag:"x",_dragX:O,dragMomentum:!1,dragElastic:0,dragConstraints:h,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing "+(p?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:O},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),f(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),f(!1)}},r("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},r("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:`h-3 flex-none ${d[o]}`,style:{width:"0.4375rem"}},r("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),r(m,{color:o,snippet:t}))}},qkm3:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({addUtilities:e,variants:a}){e({".align-baseline":{"vertical-align":"baseline"},".align-top":{"vertical-align":"top"},".align-middle":{"vertical-align":"middle"},".align-bottom":{"vertical-align":"bottom"},".align-text-top":{"vertical-align":"text-top"},".align-text-bottom":{"vertical-align":"text-bottom"}},a("verticalAlign"))}}},wH44:function(e,a,n){"use strict";n.d(a,"a",(function(){return d}));var t=n("cpVT"),s=n("q1tI"),o=n.n(s),l=n("AOjV"),c=n("AI3G"),r=n("Zb5r"),p=o.a.createElement;function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){Object(t.a)(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function d({plugin:e,name:a}){const n=Object(c.a)(e);return a=a||e.replace(/([a-z])([A-Z])/g,((e,a,n)=>`${a} ${n.toLowerCase()}`)),p("div",{className:"prose"},p("p",null,"\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",a,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",p("span",{dangerouslySetInnerHTML:{__html:Object(r.a)(n.map((e=>`<code>${e}</code>`)))}})," ",n.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",p("code",null,"false")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",p("code",null,"corePlugins")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"),p(l.a,{path:"corePlugins",before:"...",add:n.reduce(((e,a)=>u(u({},e),{},{[a]:!1})),{})}))}},yLNH:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return v}));var t=n("HALo"),s=n("dhJC"),o=n("q1tI"),l=n.n(o),c=n("7ljp"),r=n("YFqc"),p=n.n(r),i=n("tc9R"),u=n("pOT7"),d=n("vRWG"),b=n("I6Nb"),m=n("qkm3"),g=n.n(m),O=n("8C7G"),h=n("wH44");l.a.createElement;const j={Layout:d.DocumentationLayout,classes:{plugin:g()},meta:{title:"\u0412\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u0432\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u0435",description:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u043c \u0432\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u0435\u043c \u0441\u0442\u0440\u043e\u0447\u043d\u043e\u0433\u043e \u0438\u043b\u0438 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044f.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},tableOfContents:[{title:"Baseline",slug:"baseline",children:[]},{title:"Top",slug:"top",children:[]},{title:"Middle",slug:"middle",children:[]},{title:"Bottom",slug:"bottom",children:[]},{title:"Text Top",slug:"text-top",children:[]},{title:"Text Bottom",slug:"text-bottom",children:[]},{title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",slug:"adaptivnost",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]},f=b.ContentsLayout;function v(e){let{components:a}=e,n=Object(s.a)(e,["components"]);return Object(c.a)(f,Object(t.a)({},j,n,{components:a,mdxType:"MDXLayout"}),Object(c.a)("div",{className:"prose"},Object(c.a)(i.a,{level:2,id:"baseline",toc:!0},"Baseline"),Object(c.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(c.a)("inlineCode",{parentName:"p"},"align-baseline"),", \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0440\u043e\u0432\u043d\u044f\u0442\u044c \u0431\u0430\u0437\u043e\u0432\u0443\u044e \u043b\u0438\u043d\u0438\u044e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0441 \u0431\u0430\u0437\u043e\u0432\u043e\u0439 \u043b\u0438\u043d\u0438\u0435\u0439 \u0435\u0433\u043e \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f.")),Object(c.a)(u.a,{preview:'\n  <div class="leading-none relative">\n    <span class="w-0 h-8 inline-block align-baseline">\n      <span class="absolute top-0 border-light-blue-300 border-t border-b border-dashed w-full h-8"></span>\n      <span class="absolute top-0 border-light-blue-300 border-t border-b border-dashed w-full h-4"></span>\n    </span>\n    <span class="relative z-10 text-light-blue-600 font-medium">\u0411\u044b\u0441\u0442\u0440\u0430\u044f, \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430, \u043f\u0435\u0440\u0435\u043f\u0440\u044b\u0433\u043d\u0443\u043b\u0430 \u0447\u0435\u0440\u0435\u0437 \u043b\u0435\u043d\u0438\u0432\u043e\u0433\u043e \u043f\u0441\u0430.</span>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inline-block <span class="code-highlight bg-code-highlight">align-baseline</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(i.a,{level:2,id:"top",toc:!0},"Top"),Object(c.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(c.a)("inlineCode",{parentName:"p"},"align-top"),", \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0440\u043e\u0432\u043d\u044f\u0442\u044c \u0432\u0435\u0440\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0438 \u0435\u0433\u043e \u043f\u043e\u0442\u043e\u043c\u043a\u043e\u0432 \u0441 \u0432\u0435\u0440\u0445\u043e\u043c \u0432\u0441\u0435\u0439 \u0441\u0442\u0440\u043e\u043a\u0438.")),Object(c.a)(u.a,{preview:'\n  <div class="leading-none relative">\n    <span class="w-0 h-8 inline-block align-top">\n      <span class="absolute top-0 border-emerald-300 border-t border-b border-dashed w-full h-8"></span>\n      <span class="absolute top-0 border-emerald-300 border-t border-b border-dashed w-full h-4"></span>\n    </span>\n    <span class="relative z-10 text-emerald-600 font-medium">\u0411\u044b\u0441\u0442\u0440\u0430\u044f, \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430, \u043f\u0435\u0440\u0435\u043f\u0440\u044b\u0433\u043d\u0443\u043b\u0430 \u0447\u0435\u0440\u0435\u0437 \u043b\u0435\u043d\u0438\u0432\u043e\u0433\u043e \u043f\u0441\u0430.</span>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inline-block <span class="code-highlight bg-code-highlight">align-top</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(i.a,{level:2,id:"middle",toc:!0},"Middle"),Object(c.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(c.a)("inlineCode",{parentName:"p"},"align-middle"),", \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0440\u043e\u0432\u043d\u044f\u0442\u044c \u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0443 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0441 \u0431\u0430\u0437\u043e\u0432\u043e\u0439 \u043b\u0438\u043d\u0438\u0435\u0439 \u043f\u043b\u044e\u0441 \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u0443 x-\u0432\u044b\u0441\u043e\u0442\u044b \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430.")),Object(c.a)(u.a,{preview:'\n  <div class="leading-none relative">\n    <span class="w-0 h-8 inline-block align-middle">\n      <span class="absolute top-0 border-purple-300 border-t border-b border-dashed w-full h-8"></span>\n      <span class="absolute top-0 border-purple-300 border-t border-b border-dashed w-full h-4"></span>\n    </span>\n    <span class="relative z-10 text-purple-600 font-medium">\u0411\u044b\u0441\u0442\u0440\u0430\u044f, \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430, \u043f\u0435\u0440\u0435\u043f\u0440\u044b\u0433\u043d\u0443\u043b\u0430 \u0447\u0435\u0440\u0435\u0437 \u043b\u0435\u043d\u0438\u0432\u043e\u0433\u043e \u043f\u0441\u0430.</span>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inline-block <span class="code-highlight bg-code-highlight">align-middle</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(i.a,{level:2,id:"bottom",toc:!0},"Bottom"),Object(c.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(c.a)("inlineCode",{parentName:"p"},"align-bottom"),", \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0440\u043e\u0432\u043d\u044f\u0442\u044c \u043d\u0438\u0436\u043d\u044e\u044e \u0447\u0430\u0441\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0438 \u0435\u0433\u043e \u043f\u043e\u0442\u043e\u043c\u043a\u043e\u0432 \u0441 \u043d\u0438\u0436\u043d\u0435\u0439 \u0447\u0430\u0441\u0442\u044c\u044e \u0432\u0441\u0435\u0439 \u0441\u0442\u0440\u043e\u043a\u0438.")),Object(c.a)(u.a,{preview:'\n  <div class="leading-none relative">\n    <span class="w-0 h-8 inline-block align-bottom">\n      <span class="absolute top-0 border-rose-300 border-t border-b border-dashed w-full h-8"></span>\n      <span class="absolute top-0 border-rose-300 border-t border-b border-dashed w-full h-4"></span>\n    </span>\n    <span class="relative z-10 text-rose-600 font-medium">\u0411\u044b\u0441\u0442\u0440\u0430\u044f, \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430, \u043f\u0435\u0440\u0435\u043f\u0440\u044b\u0433\u043d\u0443\u043b\u0430 \u0447\u0435\u0440\u0435\u0437 \u043b\u0435\u043d\u0438\u0432\u043e\u0433\u043e \u043f\u0441\u0430.</span>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inline-block <span class="code-highlight bg-code-highlight">align-bottom</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"rose",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(i.a,{level:2,id:"text-top",toc:!0},"Text Top"),Object(c.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(c.a)("inlineCode",{parentName:"p"},"align-text-top"),", \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0440\u043e\u0432\u043d\u044f\u0442\u044c \u0432\u0435\u0440\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043f\u043e \u0432\u0435\u0440\u0445\u043d\u0435\u043c\u0443 \u043a\u0440\u0430\u044e \u0448\u0440\u0438\u0444\u0442\u0430 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430.")),Object(c.a)(u.a,{preview:'\n  <div class="leading-none relative">\n    <span class="w-0 h-8 inline-block align-text-top">\n      <span class="absolute top-0 border-amber-300 border-t border-b border-dashed w-full h-8"></span>\n      <span class="absolute top-0 border-amber-300 border-t border-b border-dashed w-full h-4"></span>\n    </span>\n    <span class="relative z-10 text-amber-600 font-medium">\u0411\u044b\u0441\u0442\u0440\u0430\u044f, \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430, \u043f\u0435\u0440\u0435\u043f\u0440\u044b\u0433\u043d\u0443\u043b\u0430 \u0447\u0435\u0440\u0435\u0437 \u043b\u0435\u043d\u0438\u0432\u043e\u0433\u043e \u043f\u0441\u0430.</span>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inline-block <span class="code-highlight bg-code-highlight">align-text-top</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"amber",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(i.a,{level:2,id:"text-bottom",toc:!0},"Text Bottom"),Object(c.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(c.a)("inlineCode",{parentName:"p"},"align-text-bottom"),", \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0440\u043e\u0432\u043d\u044f\u0442\u044c \u043d\u0438\u0436\u043d\u044e\u044e \u0447\u0430\u0441\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043f\u043e \u043d\u0438\u0436\u043d\u0435\u0439 \u0447\u0430\u0441\u0442\u0438 \u0448\u0440\u0438\u0444\u0442\u0430 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430.")),Object(c.a)(u.a,{preview:'\n  <div class="leading-none relative">\n    <span class="w-0 h-8 inline-block align-text-bottom">\n      <span class="absolute top-0 border-fuchsia-300 border-t border-b border-dashed w-full h-8"></span>\n      <span class="absolute top-0 border-fuchsia-300 border-t border-b border-dashed w-full h-4"></span>\n    </span>\n    <span class="relative z-10 text-fuchsia-600 font-medium">\u0411\u044b\u0441\u0442\u0440\u0430\u044f, \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430, \u043f\u0435\u0440\u0435\u043f\u0440\u044b\u0433\u043d\u0443\u043b\u0430 \u0447\u0435\u0440\u0435\u0437 \u043b\u0435\u043d\u0438\u0432\u043e\u0433\u043e \u043f\u0441\u0430.</span>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inline-block <span class="code-highlight bg-code-highlight">align-text-bottom</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"fuchsia",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(i.a,{level:2,id:"adaptivnost",toc:!0},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),Object(c.a)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u043c \u0432\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u0435\u043c \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",Object(c.a)("inlineCode",{parentName:"p"},"{screen}:")," \u043a \u043b\u044e\u0431\u043e\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0443\u0442\u0438\u043b\u0438\u0442\u0435 \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0432\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u044f. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043b\u0430\u0441\u0441\u0430 ",Object(c.a)("inlineCode",{parentName:"p"},"md:align-top")," \u043a \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0443 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",Object(c.a)("inlineCode",{parentName:"p"},"align-top")," \u043f\u0440\u0438 \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u0445 \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0432\u044b\u0448\u0435."),Object(c.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(c.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(c.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"relative",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"span")," ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"align-middle ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:align-top")," ...",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"...",Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"span"),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"span"),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"span"),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(c.a)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 Tailwind \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 ",Object(c.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(c.a)("a",null,"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430")),"."),Object(c.a)(i.a,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),Object(c.a)(i.a,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),Object(c.a)(O.a,{plugin:"verticalAlign",name:"vertical-alignment",mdxType:"Variants"}),Object(c.a)("div",{className:"prose"},Object(c.a)(i.a,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),Object(c.a)(h.a,{plugin:"verticalAlign",name:"vertical-alignment",mdxType:"Disabling"}))}v.isMDXComponent=!0,v.layoutProps=j}},[["EL43",0,2,6,1,3,4,5,7]]]);