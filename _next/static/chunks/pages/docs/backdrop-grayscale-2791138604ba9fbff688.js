_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{"5xSE":function(e,a,n){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,a,n){"use strict";n.d(a,"a",(function(){return l}));var t=n("q1tI"),c=n.n(t),s=n("98BF"),r=n("Zb5r"),p=n("AOjV"),o=c.a.createElement;function l({plugin:e,name:a}){const n=s.defaultConfig.variants[e]||["responsive"];a=a||e.replace(/([a-z])([A-Z])/g,((e,a,n)=>`${a} ${n.toLowerCase()}`));const t=["responsive","hover","focus","active","group-hover"].filter((e=>!n.includes(e))).slice(0,2),c=`\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ${n.length?`\u0442\u043e\u043b\u044c\u043a\u043e ${Object(r.a)(n).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")}`:"\u043d\u0435\u0442"} \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ${a}.`;return o("div",{className:"prose"},o("p",{dangerouslySetInnerHTML:{__html:c}}),o("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",a," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",o("code",null,e)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",o("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",o("code",null,"tailwind.config.js"),"."),o("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",n.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(r.a)(t),":"),o(p.a,{path:"variants.extend",before:"...",add:{[e]:t}}))}},AOjV:function(e,a,n){"use strict";n.d(a,"a",(function(){return i}));var t=n("q1tI"),c=n.n(t),s=(n("Btb4"),n("AI3G")),r=n("iuhU"),p=c.a.createElement;function o({value:e}){return"string"===typeof e?p("span",{className:"token string"},"'",e,"'"):Array.isArray(e)?p(c.a.Fragment,null,p("span",{className:"token punctuation"},"["),e.map(((a,n)=>p(t.Fragment,{key:n},p(o,{value:a}),n===e.length-1?null:p("span",{className:"token punctuation"},", ")))),p("span",{className:"token punctuation"},"]")):"boolean"===typeof e?p("span",{className:"token boolean"},e.toString()):e.toString()}function l({edits:e,indent:a="",type:n="inserted"}){return p("span",{className:Object(r.a)("token",{"inserted-sign inserted":"inserted"===n,"deleted-sign deleted":"inserted"!==n})},Object.keys(e).map(((c,s)=>{return p(t.Fragment,{key:s},p("span",{className:Object(r.a)("token prefix",{inserted:"inserted"===n,deleted:"inserted"!==n})},"inserted"===n?"+":"-")," ",a,/^[a-z_$][a-z0-9_$]*$/i.test(l=c)?l:`'${l}'`,p("span",{className:"token operator"},":")," ",p(o,{value:e[c]}),p("span",{className:"token punctuation"},","),"\n");var l})))}function i({path:e,add:a,remove:n,before:c,after:r}){return e="string"===typeof e?e.split("."):e,p("div",{className:"prose"},p("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},p("pre",{className:"language-diff"},p("code",{className:"language-diff"},p("span",{className:"token unchanged"},"  ",p("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",p("span",{className:"token punctuation"},"."),p("span",{className:"token property-access"},"exports")," ",p("span",{className:"token operator"},"=")," ",p("span",{className:"token punctuation"},"{"),"\n",e.map(((e,a)=>p(t.Fragment,{key:a},"  ","  ".repeat(a+1),e,p("span",{className:"token operator"},":")," ",p("span",{className:"token punctuation"},"{"),"\n"))),c&&Object(s.a)(c).map(((a,n)=>p(t.Fragment,{key:n},"  ".repeat(e.length+2),p("span",{className:"token comment"},`// ${a}`),"\n")))),n&&p(l,{edits:n,type:"deleted",indent:"  ".repeat(e.length+1)}),a&&p(l,{edits:a,type:"inserted",indent:"  ".repeat(e.length+1)}),p("span",{className:"token unchanged"},r&&Object(s.a)(r).map((a=>`${"  ".repeat(e.length+2)}${a}\n`)),e.map(((a,n)=>p(t.Fragment,{key:n},"  ","  ".repeat(e.length-n),"}\n"))),"  }")))))}},Btb4:function(e,a,n){"use strict";const t=n("5xSE"),c=n("p+I8"),s=n("GAX2").default;e.exports=(e,a,n)=>{const r=[];return function e(a,n,p){let o;(n=n||{}).indent=n.indent||"\t",p=p||"",o=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:p,indent:p+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=e=>{if(void 0===n.inlineCharacterLimit)return e;const a=e.replace(new RegExp(o.newLine,"g"),"").replace(new RegExp(o.newLineOrSpace,"g")," ").replace(new RegExp(o.pad+"|"+o.indent,"g"),"");return a.length<=n.inlineCharacterLimit?a:e.replace(new RegExp(o.newLine+"|"+o.newLineOrSpace,"g"),"\n").replace(new RegExp(o.pad,"g"),p).replace(new RegExp(o.indent,"g"),p+n.indent)};if(-1!==r.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||t(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";r.push(a);const t="["+o.newLine+a.map(((t,c)=>{const s=a.length-1===c?o.newLine:","+o.newLineOrSpace;let r=e(t,n,p+n.indent);return n.transform&&(r=n.transform(a,c,r)),o.indent+r+s})).join("")+o.pad+"]";return r.pop(),l(t)}if(c(a)){let t=Object.keys(a).concat(s(a));if(n.filter&&(t=t.filter((e=>n.filter(a,e)))),0===t.length)return"{}";r.push(a);const c="{"+o.newLine+t.map(((c,s)=>{const r=t.length-1===s?o.newLine:","+o.newLineOrSpace,l="symbol"===typeof c,i=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(c),m=l||i?c:e(c,n);let b=e(a[c],n,p+n.indent);return n.transform&&(b=n.transform(a,c,b)),o.indent+String(m)+": "+b+r})).join("")+o.pad+"}";return r.pop(),l(c)}return a=String(a).replace(/[\r\n]/g,(e=>"\n"===e?"\\n":"\\r")),!1===n.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(e,a,n)}},GAX2:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=e=>Object.getOwnPropertySymbols(e).filter((a=>Object.prototype.propertyIsEnumerable.call(e,a)))},Zb5r:function(e,a,n){"use strict";function t(e){return e.reduce(((a,n,t)=>0===t?n:t===e.length-1?`${a} \u0438 ${n}`:`${a}, ${n}`),"")}n.d(a,"a",(function(){return t}))},"b/tz":function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/backdrop-grayscale",function(){return n("yRXd")}])},"p+I8":function(e,a,n){"use strict";e.exports=function(e){var a=typeof e;return null!==e&&("object"===a||"function"===a)}},wH44:function(e,a,n){"use strict";n.d(a,"a",(function(){return b}));var t=n("cpVT"),c=n("q1tI"),s=n.n(c),r=n("AOjV"),p=n("AI3G"),o=n("Zb5r"),l=s.a.createElement;function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function m(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){Object(t.a)(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function b({plugin:e,name:a}){const n=Object(p.a)(e);return a=a||e.replace(/([a-z])([A-Z])/g,((e,a,n)=>`${a} ${n.toLowerCase()}`)),l("div",{className:"prose"},l("p",null,"\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",a,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",l("span",{dangerouslySetInnerHTML:{__html:Object(o.a)(n.map((e=>`<code>${e}</code>`)))}})," ",n.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",l("code",null,"false")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",l("code",null,"corePlugins")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"),l(r.a,{path:"corePlugins",before:"...",add:n.reduce(((e,a)=>m(m({},e),{},{[a]:!1})),{})}))}},yRXd:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return N}));var t=n("HALo"),c=n("dhJC"),s=n("q1tI"),r=n.n(s),p=n("7ljp"),o=n("YFqc"),l=n.n(o),i=n("tc9R"),m=n("vRWG"),b=n("I6Nb"),u=n("8C7G"),O=n("wH44");r.a.createElement;const d={Layout:m.DocumentationLayout,classes:{plugin:function(){return function({addUtilities:e}){e({".backdrop-grayscale-0":{"--tw-backdrop-grayscale":"grayscale(0)"},".backdrop-grayscale":{"--tw-backdrop-grayscale":"grayscale(1)"}})}}},meta:{title:"\u0424\u043e\u043d \u0432 \u043e\u0442\u0442\u0435\u043d\u043a\u0430\u0445 \u0441\u0435\u0440\u043e\u0433\u043e",description:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0444\u043e\u043d\u043e\u0432\u044b\u0445 \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432 \u043e\u0442\u0442\u0435\u043d\u043a\u043e\u0432 \u0441\u0435\u0440\u043e\u0433\u043e \u043a \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0443.",featureVersion:"v2.1+"},tableOfContents:[{title:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435",slug:"primenenie",children:[]},{title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",slug:"adaptivnost",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]},j=b.ContentsLayout;function N(e){let{components:a}=e,n=Object(c.a)(e,["components"]);return Object(p.a)(j,Object(t.a)({},d,n,{components:a,mdxType:"MDXLayout"}),Object(p.a)("div",{className:"prose"},Object(p.a)(i.a,{level:2,id:"primenenie",toc:!0},"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435"),Object(p.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",Object(p.a)("inlineCode",{parentName:"p"},"backdrop-grayscale")," \u0438 ",Object(p.a)("inlineCode",{parentName:"p"},"backdrop-grayscale-0")," \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0443\u0442\u0438\u043b\u0438\u0442\u043e\u0439 ",Object(p.a)("inlineCode",{parentName:"p"},"backdrop-filter"),", \u0447\u0442\u043e\u0431\u044b \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c, \u0434\u043e\u043b\u0436\u0435\u043d \u043b\u0438 \u0444\u043e\u043d \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0432 \u043e\u0442\u0442\u0435\u043d\u043a\u0430\u0445 \u0441\u0435\u0440\u043e\u0433\u043e \u0438\u043b\u0438 \u0432 \u043f\u043e\u043b\u043d\u043e\u0446\u0432\u0435\u0442\u043d\u043e\u043c."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(p.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"backdrop-filter backdrop-grayscale ...",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(p.a)(i.a,{level:2,id:"adaptivnost",toc:!0},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),Object(p.a)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u043c \u0444\u043e\u043d\u0430 \u043e\u0442\u0442\u0435\u043d\u043a\u0430 \u0441\u0435\u0440\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",Object(p.a)("inlineCode",{parentName:"p"},"{screen}:")," \u043a \u043b\u044e\u0431\u043e\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0443\u0442\u0438\u043b\u0438\u0442\u0435 \u0444\u043e\u043d\u0430 \u043e\u0442\u0442\u0435\u043d\u043a\u0430 \u0441\u0435\u0440\u043e\u0433\u043e. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(p.a)("inlineCode",{parentName:"p"},"md:backdrop-grayscale-0"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",Object(p.a)("inlineCode",{parentName:"p"},"backdrop-grayscale-0")," \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u0445 \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0432\u044b\u0448\u0435."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(p.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"backdrop-filter backdrop-grayscale ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:backdrop-grayscale-0")," ...",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(p.a)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 Tailwind \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 ",Object(p.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(p.a)("a",null,"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430")),"."),Object(p.a)(i.a,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),Object(p.a)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",Object(p.a)("inlineCode",{parentName:"p"},"backdrop-grayscale")," \u0431\u0443\u0434\u0443\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043a\u043b\u044e\u0447 ",Object(p.a)("inlineCode",{parentName:"p"},"backdropGrayscale")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",Object(p.a)("inlineCode",{parentName:"p"},"theme")," \u0432\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 ",Object(p.a)("inlineCode",{parentName:"p"},"tailwind.config.js"),"."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(t.a)({parentName:"div"},{className:"language-diff-js"}),Object(p.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff-js"}),Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     extend",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       backdropGrayscale",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token number"}),"50"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'.5'"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n"),Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(p.a)("p",null,"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 \u0442\u0435\u043c\u044b \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432 ",Object(p.a)(l.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(p.a)("a",null,"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u043f\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 \u0442\u0435\u043c\u044b")),"."),Object(p.a)(i.a,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),Object(p.a)(u.a,{plugin:"backdropGrayscale",name:"backdrop grayscale",mdxType:"Variants"}),Object(p.a)("div",{className:"prose"},Object(p.a)(i.a,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),Object(p.a)(O.a,{plugin:"backdropGrayscale",name:"backdrop grayscale",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=d}},[["b/tz",0,2,1,3,4,5]]]);