_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{"5xSE":function(e,t,a){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("rePB"),r=a("q1tI"),c=a.n(r),o=a("98BF"),s=a("Zb5r"),p=a("AOjV"),i=c.a.createElement;function l(e){var t=e.plugin,a=e.name,r=o.defaultConfig.variants[t]||["responsive"];a=a||t.replace(/([a-z])([A-Z])/g,(function(e,t,a){return"".concat(t," ").concat(a.toLowerCase())}));var c=["responsive","hover","focus","active","group-hover"].filter((function(e){return!r.includes(e)})).slice(0,2),l="\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ".concat(r.length?"\u0442\u043e\u043b\u044c\u043a\u043e ".concat(Object(s.a)(r).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")):"\u043d\u0435\u0442"," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ").concat(a,".");return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:l}}),i("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",a," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",i("code",null,t)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",i("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",i("code",null,"tailwind.config.js"),"."),i("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",r.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(s.a)(c),":"),i(p.a,{path:"variants.extend",before:"...",add:Object(n.a)({},t,c)}))}},AOjV:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),r=a.n(n),c=(a("Btb4"),a("AI3G")),o=a("iuhU"),s=r.a.createElement;function p(e){var t=e.value;return"string"===typeof t?s("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?s(r.a.Fragment,null,s("span",{className:"token punctuation"},"["),t.map((function(e,a){return s(n.Fragment,{key:a},s(p,{value:e}),a===t.length-1?null:s("span",{className:"token punctuation"},", "))})),s("span",{className:"token punctuation"},"]")):"boolean"===typeof t?s("span",{className:"token boolean"},t.toString()):t.toString()}function i(e){var t=e.edits,a=e.indent,r=void 0===a?"":a,c=e.type,i=void 0===c?"inserted":c;return s("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===i,"deleted-sign deleted":"inserted"!==i})},Object.keys(t).map((function(e,a){return s(n.Fragment,{key:a},s("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===i,deleted:"inserted"!==i})},"inserted"===i?"+":"-")," ",r,/^[a-z_$][a-z0-9_$]*$/i.test(c=e)?c:"'".concat(c,"'"),s("span",{className:"token operator"},":")," ",s(p,{value:t[e]}),s("span",{className:"token punctuation"},","),"\n");var c})))}function l(e){var t=e.path,a=e.add,r=e.remove,o=e.before,p=e.after;return t="string"===typeof t?t.split("."):t,s("div",{className:"prose"},s("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},s("pre",{className:"language-diff"},s("code",{className:"language-diff"},s("span",{className:"token unchanged"},"  ",s("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",s("span",{className:"token punctuation"},"."),s("span",{className:"token property-access"},"exports")," ",s("span",{className:"token operator"},"=")," ",s("span",{className:"token punctuation"},"{"),"\n",t.map((function(e,t){return s(n.Fragment,{key:t},"  ","  ".repeat(t+1),e,s("span",{className:"token operator"},":")," ",s("span",{className:"token punctuation"},"{"),"\n")})),o&&Object(c.a)(o).map((function(e,a){return s(n.Fragment,{key:a},"  ".repeat(t.length+2),s("span",{className:"token comment"},"// ".concat(e)),"\n")}))),r&&s(i,{edits:r,type:"deleted",indent:"  ".repeat(t.length+1)}),a&&s(i,{edits:a,type:"inserted",indent:"  ".repeat(t.length+1)}),s("span",{className:"token unchanged"},p&&Object(c.a)(p).map((function(e){return"".concat("  ".repeat(t.length+2)).concat(e,"\n")})),t.map((function(e,a){return s(n.Fragment,{key:a},"  ","  ".repeat(t.length-a),"}\n")})),"  }")))))}},Btb4:function(e,t,a){"use strict";const n=a("5xSE"),r=a("p+I8"),c=a("GAX2").default;e.exports=(e,t,a)=>{const o=[];return function e(t,a,s){let p;(a=a||{}).indent=a.indent||"\t",s=s||"",p=void 0===a.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:s,indent:s+a.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const i=e=>{if(void 0===a.inlineCharacterLimit)return e;const t=e.replace(new RegExp(p.newLine,"g"),"").replace(new RegExp(p.newLineOrSpace,"g")," ").replace(new RegExp(p.pad+"|"+p.indent,"g"),"");return t.length<=a.inlineCharacterLimit?t:e.replace(new RegExp(p.newLine+"|"+p.newLineOrSpace,"g"),"\n").replace(new RegExp(p.pad,"g"),s).replace(new RegExp(p.indent,"g"),s+a.indent)};if(-1!==o.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||n(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";o.push(t);const n="["+p.newLine+t.map((n,r)=>{const c=t.length-1===r?p.newLine:","+p.newLineOrSpace;let o=e(n,a,s+a.indent);return a.transform&&(o=a.transform(t,r,o)),p.indent+o+c}).join("")+p.pad+"]";return o.pop(),i(n)}if(r(t)){let n=Object.keys(t).concat(c(t));if(a.filter&&(n=n.filter(e=>a.filter(t,e))),0===n.length)return"{}";o.push(t);const r="{"+p.newLine+n.map((r,c)=>{const o=n.length-1===c?p.newLine:","+p.newLineOrSpace,i="symbol"===typeof r,l=!i&&/^[a-z$_][a-z$_0-9]*$/i.test(r),u=i||l?r:e(r,a);let b=e(t[r],a,s+a.indent);return a.transform&&(b=a.transform(t,r,b)),p.indent+String(u)+": "+b+o}).join("")+p.pad+"}";return o.pop(),i(r)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===a.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,a)}},EaJ6:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/backdrop-blur",function(){return a("mLbH")}])},GAX2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},Zb5r:function(e,t,a){"use strict";function n(e){return e.reduce((function(t,a,n){return 0===n?a:n===e.length-1?"".concat(t," \u0438 ").concat(a):"".concat(t,", ").concat(a)}),"")}a.d(t,"a",(function(){return n}))},ap0H:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("q1tI"),r=a.n(n),c=a("8Kt/"),o=a.n(c),s=r.a.createElement;function p(e){var t=e.suffix,a=e.children+(t?" - ".concat(t):"");return s(o.a,null,s("title",{key:"title"},a),s("meta",{key:"twitter:title",name:"twitter:title",content:a}),s("meta",{key:"og:title",property:"og:title",content:a}))}},mLbH:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var n=a("wx14"),r=a("Ff2n"),c=a("q1tI"),o=a.n(c),s=a("7ljp"),p=a("YFqc"),i=a.n(p),l=a("tc9R"),u=a("vRWG"),b=a("I6Nb"),m=a("8C7G"),d=a("wH44"),O=(o.a.createElement,{Layout:u.DocumentationLayout,classes:{plugin:function(){return function(e){(0,e.addUtilities)({".backdrop-blur-0":{"--tw-backdrop-blur":"blur(0)"},".backdrop-blur-sm":{"--tw-backdrop-blur":"blur(4px)"},".backdrop-blur":{"--tw-backdrop-blur":"blur(8px)"},".backdrop-blur-md":{"--tw-backdrop-blur":"blur(12px)"},".backdrop-blur-lg":{"--tw-backdrop-blur":"blur(16px)"},".backdrop-blur-xl":{"--tw-backdrop-blur":"blur(24px)"},".backdrop-blur-2xl":{"--tw-backdrop-blur":"blur(40px)"},".backdrop-blur-3xl":{"--tw-backdrop-blur":"blur(64px)"}})}}},meta:{title:"\u0420\u0430\u0437\u043c\u044b\u0442\u0438\u0435 \u0444\u043e\u043d\u0430",description:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432 \u0440\u0430\u0437\u043c\u044b\u0442\u0438\u044f \u0444\u043e\u043d\u0430 \u043a \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0443.",featureVersion:"v2.1+"},tableOfContents:[{title:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435",slug:"primenenie",children:[]},{title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",slug:"adaptivnost",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]}),j=b.ContentsLayout;function f(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.a)(j,Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(s.a)("div",{className:"prose"},Object(s.a)(l.a,{level:2,id:"primenenie",toc:!0},"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435"),Object(s.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",Object(s.a)("inlineCode",{parentName:"p"},"backdrop-blur-{amount?}")," \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0443\u0442\u0438\u043b\u0438\u0442\u043e\u0439 ",Object(s.a)("inlineCode",{parentName:"p"},"backdrop-filter"),", \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0437\u043c\u044b\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442."),Object(s.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(s.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(s.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(s.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"backdrop-filter backdrop-blur-lg ...",Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(s.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(s.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(s.a)(l.a,{level:2,id:"adaptivnost",toc:!0},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),Object(s.a)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0440\u0430\u0437\u043c\u044b\u0442\u0438\u0435\u043c \u0444\u043e\u043d\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",Object(s.a)("inlineCode",{parentName:"p"},"{screen}:")," \u043a \u043b\u044e\u0431\u043e\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0443\u0442\u0438\u043b\u0438\u0442\u0435 \u0440\u0430\u0437\u043c\u044b\u0442\u0438\u044f \u0444\u043e\u043d\u0430. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(s.a)("inlineCode",{parentName:"p"},"md:backdrop-blur-lg"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",Object(s.a)("inlineCode",{parentName:"p"},"backdrop-blur-lg")," \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u0445 \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0432\u044b\u0448\u0435."),Object(s.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(s.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(s.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(s.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"backdrop-filter backdrop-blur-sm ",Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:backdrop-blur-lg")," ...",Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(s.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(s.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(s.a)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 Tailwind \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 ",Object(s.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(s.a)("a",null,"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430")),"."),Object(s.a)(l.a,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),Object(s.a)(l.a,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),Object(s.a)(m.a,{plugin:"backdropBlur",name:"backdrop blur",mdxType:"Variants"}),Object(s.a)("div",{className:"prose"},Object(s.a)(l.a,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),Object(s.a)(d.a,{plugin:"backdropBlur",name:"backdrop blur",mdxType:"Disabling"}))}f.isMDXComponent=!0,f.layoutProps=O},"p+I8":function(e,t,a){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},vRWG:function(e,t,a){"use strict";a.r(t),a.d(t,"DocumentationLayout",(function(){return m}));var n=a("wx14"),r=a("q1tI"),c=a.n(r),o=a("ekQu"),s=a("8Kt/"),p=a.n(s),i=a("nOHt"),l=a("ap0H"),u=a("1Q1k"),b=c.a.createElement;function m(e){var t=Object(i.useRouter)();return b(c.a.Fragment,null,b(l.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),b(p.a,null,b("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),b("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.su".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),b(o.b,Object(n.a)({nav:u.a},e)))}},wH44:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a("rePB"),r=a("q1tI"),c=a.n(r),o=a("AOjV"),s=a("AI3G"),p=a("Zb5r"),i=c.a.createElement;function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e){var t=e.plugin,a=e.name,r=Object(s.a)(t);return a=a||t.replace(/([a-z])([A-Z])/g,(function(e,t,a){return"".concat(t," ").concat(a.toLowerCase())})),i("div",{className:"prose"},i("p",null,"\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",a,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",i("span",{dangerouslySetInnerHTML:{__html:Object(p.a)(r.map((function(e){return"<code>".concat(e,"</code>")})))}})," ",r.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",i("code",null,"false")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",i("code",null,"corePlugins")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"),i(o.a,{path:"corePlugins",before:"...",add:r.reduce((function(e,t){return u(u({},e),{},Object(n.a)({},t,!1))}),{})}))}}},[["EaJ6",0,2,1,3,4,5]]]);