(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[117],{"5xSE":function(e,t,a){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("q1tI"),c=a.n(n),r=a("98BF"),s=a("Zb5r"),i=a("AOjV"),o=c.a.createElement;function p(e){var{plugin:t,name:a}=e,n=r.defaultConfig.variants[t]||["responsive"];a=a||t.replace(/([a-z])([A-Z])/g,(e,t,a)=>"".concat(t," ").concat(a.toLowerCase()));var c=["responsive","hover","focus","active","group-hover"].filter(e=>!n.includes(e)).slice(0,2),p="\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ".concat(n.length?"\u0442\u043e\u043b\u044c\u043a\u043e ".concat(Object(s.a)(n).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")):"\u043d\u0435\u0442"," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ").concat(a,".");return o("div",{className:"prose"},o("p",{dangerouslySetInnerHTML:{__html:p}}),o("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",a," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",o("code",null,t)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",o("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",o("code",null,"tailwind.config.js"),"."),o("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",n.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(s.a)(c),":"),o(i.a,{path:"variants.extend",before:"...",add:{[t]:c}}))}},AOjV:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),c=a.n(n),r=(a("Btb4"),a("AI3G")),s=a("iuhU"),i=c.a.createElement;function o(e){var{value:t}=e;return"string"===typeof t?i("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?i(c.a.Fragment,null,i("span",{className:"token punctuation"},"["),t.map((e,a)=>i(n.Fragment,{key:a},i(o,{value:e}),a===t.length-1?null:i("span",{className:"token punctuation"},", "))),i("span",{className:"token punctuation"},"]")):"boolean"===typeof t?i("span",{className:"token boolean"},t.toString()):t.toString()}function p(e){var{edits:t,indent:a="",type:c="inserted"}=e;return i("span",{className:Object(s.a)("token",{"inserted-sign inserted":"inserted"===c,"deleted-sign deleted":"inserted"!==c})},Object.keys(t).map((e,r)=>{return i(n.Fragment,{key:r},i("span",{className:Object(s.a)("token prefix",{inserted:"inserted"===c,deleted:"inserted"!==c})},"inserted"===c?"+":"-")," ",a,/^[a-z_$][a-z0-9_$]*$/i.test(p=e)?p:"'".concat(p,"'"),i("span",{className:"token operator"},":")," ",i(o,{value:t[e]}),i("span",{className:"token punctuation"},","),"\n");var p}))}function l(e){var{path:t,add:a,remove:c,before:s,after:o}=e;return t="string"===typeof t?t.split("."):t,i("div",{className:"prose"},i("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},i("pre",{className:"language-diff"},i("code",{className:"language-diff"},i("span",{className:"token unchanged"},"  ",i("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",i("span",{className:"token punctuation"},"."),i("span",{className:"token property-access"},"exports")," ",i("span",{className:"token operator"},"=")," ",i("span",{className:"token punctuation"},"{"),"\n",t.map((e,t)=>i(n.Fragment,{key:t},"  ","  ".repeat(t+1),e,i("span",{className:"token operator"},":")," ",i("span",{className:"token punctuation"},"{"),"\n")),s&&Object(r.a)(s).map((e,a)=>i(n.Fragment,{key:a},"  ".repeat(t.length+2),i("span",{className:"token comment"},"// ".concat(e)),"\n"))),c&&i(p,{edits:c,type:"deleted",indent:"  ".repeat(t.length+1)}),a&&i(p,{edits:a,type:"inserted",indent:"  ".repeat(t.length+1)}),i("span",{className:"token unchanged"},o&&Object(r.a)(o).map(e=>"".concat("  ".repeat(t.length+2)).concat(e,"\n")),t.map((e,a)=>i(n.Fragment,{key:a},"  ","  ".repeat(t.length-a),"}\n")),"  }")))))}},Btb4:function(e,t,a){"use strict";const n=a("5xSE"),c=a("p+I8"),r=a("GAX2").default;e.exports=(e,t,a)=>{const s=[];return function e(t,a,i){let o;(a=a||{}).indent=a.indent||"\t",i=i||"",o=void 0===a.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:i,indent:i+a.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const p=e=>{if(void 0===a.inlineCharacterLimit)return e;const t=e.replace(new RegExp(o.newLine,"g"),"").replace(new RegExp(o.newLineOrSpace,"g")," ").replace(new RegExp(o.pad+"|"+o.indent,"g"),"");return t.length<=a.inlineCharacterLimit?t:e.replace(new RegExp(o.newLine+"|"+o.newLineOrSpace,"g"),"\n").replace(new RegExp(o.pad,"g"),i).replace(new RegExp(o.indent,"g"),i+a.indent)};if(-1!==s.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||n(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";s.push(t);const n="["+o.newLine+t.map((n,c)=>{const r=t.length-1===c?o.newLine:","+o.newLineOrSpace;let s=e(n,a,i+a.indent);return a.transform&&(s=a.transform(t,c,s)),o.indent+s+r}).join("")+o.pad+"]";return s.pop(),p(n)}if(c(t)){let n=Object.keys(t).concat(r(t));if(a.filter&&(n=n.filter(e=>a.filter(t,e))),0===n.length)return"{}";s.push(t);const c="{"+o.newLine+n.map((c,r)=>{const s=n.length-1===r?o.newLine:","+o.newLineOrSpace,p="symbol"===typeof c,l=!p&&/^[a-z$_][a-z$_0-9]*$/i.test(c),u=p||l?c:e(c,a);let m=e(t[c],a,i+a.indent);return a.transform&&(m=a.transform(t,c,m)),o.indent+String(u)+": "+m+s}).join("")+o.pad+"}";return s.pop(),p(c)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===a.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,a)}},GAX2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},Zb5r:function(e,t,a){"use strict";function n(e){return e.reduce((t,a,n)=>0===n?a:n===e.length-1?"".concat(t," \u0438 ").concat(a):"".concat(t,", ").concat(a),"")}a.d(t,"a",(function(){return n}))},aZ6q:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/invert",function(){return a("y7BL")}])},ap0H:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI"),c=a.n(n),r=a("8Kt/"),s=a.n(r),i=c.a.createElement;function o(e){var{suffix:t,children:a}=e,n=a+(t?" - ".concat(t):"");return i(s.a,null,i("title",{key:"title"},n),i("meta",{key:"twitter:title",name:"twitter:title",content:n}),i("meta",{key:"og:title",property:"og:title",content:n}))}},"p+I8":function(e,t,a){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},vRWG:function(e,t,a){"use strict";a.r(t),a.d(t,"DocumentationLayout",(function(){return d}));var n=a("wx14"),c=a("q1tI"),r=a.n(c),s=a("ekQu"),i=a("8Kt/"),o=a.n(i),p=a("nOHt"),l=a("ap0H"),u=a("1Q1k"),m=r.a.createElement;function d(e){var t=Object(p.useRouter)();return m(r.a.Fragment,null,m(l.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),m(o.a,null,m("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),m("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.su".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),m(s.b,Object(n.a)({nav:u.a},e)))}},wH44:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("rePB"),c=a("q1tI"),r=a.n(c),s=a("AOjV"),i=a("AI3G"),o=a("Zb5r"),p=r.a.createElement;function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e){var{plugin:t,name:a}=e,n=Object(i.a)(t);return a=a||t.replace(/([a-z])([A-Z])/g,(e,t,a)=>"".concat(t," ").concat(a.toLowerCase())),p("div",{className:"prose"},p("p",null,"\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",a,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",p("span",{dangerouslySetInnerHTML:{__html:Object(o.a)(n.map(e=>"<code>".concat(e,"</code>")))}})," ",n.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",p("code",null,"false")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",p("code",null,"corePlugins")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"),p(s.a,{path:"corePlugins",before:"...",add:n.reduce((e,t)=>u(u({},e),{},{[t]:!1}),{})}))}},y7BL:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return g}));var n=a("wx14"),c=a("Ff2n"),r=a("q1tI"),s=a.n(r),i=a("7ljp"),o=a("YFqc"),p=a.n(o),l=a("tc9R"),u=a("vRWG"),m=a("I6Nb"),d=a("8C7G"),b=a("wH44"),O=(s.a.createElement,{Layout:u.DocumentationLayout,classes:{plugin:function(){return function(e){var{addUtilities:t}=e;t({".invert-0":{"--tw-invert":"invert(0)"},".invert":{"--tw-invert":"invert(1)"}})}}},meta:{title:"\u0418\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",description:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0438\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432 \u043a \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0443.",featureVersion:"v2.1+"},tableOfContents:[{title:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435",slug:"primenenie",children:[]},{title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",slug:"adaptivnost",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]}),j=m.ContentsLayout;function g(e){var{components:t}=e,a=Object(c.a)(e,["components"]);return Object(i.a)(j,Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:2,id:"primenenie",toc:!0},"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435"),Object(i.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",Object(i.a)("inlineCode",{parentName:"p"},"invert")," \u0438 ",Object(i.a)("inlineCode",{parentName:"p"},"invert-0")," \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0443\u0442\u0438\u043b\u0438\u0442\u043e\u0439 ",Object(i.a)("inlineCode",{parentName:"p"},"filter"),", \u0447\u0442\u043e\u0431\u044b \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c, \u0434\u043e\u043b\u0436\u0435\u043d \u043b\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0441 \u0438\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u0446\u0432\u0435\u0442\u0430\u043c\u0438 \u0438\u043b\u0438 \u0432 \u043e\u0431\u044b\u0447\u043d\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435."),Object(i.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(i.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"filter invert ...",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(i.a)(l.a,{level:2,id:"adaptivnost",toc:!0},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),Object(i.a)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u043c \u0438\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",Object(i.a)("inlineCode",{parentName:"p"},"{screen}:")," \u043a \u043b\u044e\u0431\u043e\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0443\u0442\u0438\u043b\u0438\u0442\u0435 \u0438\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(i.a)("inlineCode",{parentName:"p"},"md:invert-0"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",Object(i.a)("inlineCode",{parentName:"p"},"invert-0")," \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u0445 \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0432\u044b\u0448\u0435."),Object(i.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(i.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"filter invert ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:invert-0")," ...",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(i.a)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 Tailwind \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 ",Object(i.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(i.a)("a",null,"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430")),"."),Object(i.a)(l.a,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),Object(i.a)(l.a,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),Object(i.a)(d.a,{plugin:"invert",name:"invert",mdxType:"Variants"}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),Object(i.a)(b.a,{plugin:"invert",name:"invert",mdxType:"Disabling"}))}g.isMDXComponent=!0,g.layoutProps=O}},[["aZ6q",0,2,1,3,4,5]]]);