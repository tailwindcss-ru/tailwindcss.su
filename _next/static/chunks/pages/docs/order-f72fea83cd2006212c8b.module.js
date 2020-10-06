(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[127],{"+qKf":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:e,e:n,theme:t,variants:a}){e(s.default.fromPairs(s.default.map(t("order"),(e,t)=>[`.${n(`order-${t}`)}`,{order:e}])),a("order"))}};var a,s=(a=t("LvDl"))&&a.__esModule?a:{default:a}},"4L0O":function(e,n,t){"use strict";t.r(n),t.d(n,"Layout",(function(){return h})),t.d(n,"classes",(function(){return j})),t.d(n,"meta",(function(){return y})),t.d(n,"tableOfContents",(function(){return N})),t.d(n,"default",(function(){return k}));var a=t("wx14"),s=t("Ff2n"),r=t("q1tI"),c=t.n(r),i=t("7ljp"),o=t("YFqc"),p=t.n(o),l=t("tc9R"),d=t("pOT7"),u=t("vRWG"),m=t("I6Nb"),g=t("+qKf"),f=t.n(g),b=t("8C7G"),v=t("wH44"),O=t("Ca+n"),h=(c.a.createElement,u.DocumentationLayout),j={plugin:f()},y={title:"Order",description:"Utilities for controlling the order of flex items."},N=[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],x={Layout:h,classes:j,meta:y,tableOfContents:N},w=m.ContentsLayout;function k(e){var{components:n}=e,t=Object(s.a)(e,["components"]);return Object(i.a)(w,Object(a.a)({},x,t,{components:n,mdxType:"MDXLayout"}),Object(i.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},".order-{order}")," to render flex items in a different order than they appear in the DOM."),Object(i.a)(d.a,{preview:'\n  <div class="flex bg-gray-200">\n    <div class="order-last text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>order-last<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(i.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(i.a)("p",null,"To apply a flex direction utility only at a specific breakpoint, add a ",Object(i.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to the existing class name. For example, adding the class ",Object(i.a)("inlineCode",{parentName:"p"},"md:flex-row")," to an element would apply the ",Object(i.a)("inlineCode",{parentName:"p"},"flex-row")," utility at medium screen sizes and above."),Object(i.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(i.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(i.a)("a",null,"Responsive Design"))," documentation."),Object(i.a)(O.a,{classNames:["order-first","order-last","order-none","order-first","order-last"],snippet:e=>'\n    <div class="flex">\n      <div>1</div>\n      <div>2</div>\n      <div class="'.concat(e,'">3</div>\n      <div>4</div>\n      <div>5</div>\n    </div>\n  '),preview:e=>Object(i.a)("div",{className:"flex bg-gray-200"},Object(i.a)("div",{className:"text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"},"1"),Object(i.a)("div",{className:"text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"},"2"),Object(i.a)("div",{className:"text-gray-700 text-center bg-white px-4 py-2 m-2 ".concat(e)},"3"),Object(i.a)("div",{className:"text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"},"4"),Object(i.a)("div",{className:"text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"},"5")),mdxType:"ResponsiveCodeSample"}),Object(i.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(i.a)("p",null,"By default Tailwind provides utilities for ",Object(i.a)("inlineCode",{parentName:"p"},"order-first"),", ",Object(i.a)("inlineCode",{parentName:"p"},"order-last"),", ",Object(i.a)("inlineCode",{parentName:"p"},"order-none"),", and an ",Object(i.a)("inlineCode",{parentName:"p"},"order-{number}")," utility for the numbers 1 through 12. You change, add, or remove these by editing the ",Object(i.a)("inlineCode",{parentName:"p"},"theme.order")," section of your ",Object(i.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),Object(i.a)("pre",{className:"language-diff"},Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     order: {\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       first: '-9999',\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       last: '9999',\n"),Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token deleted-sign deleted"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       none: '0',\n"),Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       normal: '0',\n"),Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       '1': '1',\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       '2': '2',\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       '3': '3',\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       '4': '4',\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       '5': '5',\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       '6': '6',\n"),Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token deleted-sign deleted"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       '7': '7',\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       '8': '8',\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       '9': '9',\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       '10': '10',\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       '11': '11',\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       '12': '12',\n"),Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(i.a)(l.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(i.a)(b.a,{plugin:"order",mdxType:"Variants"}),Object(i.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(i.a)(v.a,{plugin:"order",mdxType:"Disabling"}))}k.isMDXComponent=!0,k.layoutProps=x},"5xSE":function(e,n,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var a=t("q1tI"),s=t.n(a),r=t("98BF"),c=t("Zb5r"),i=t("AOjV"),o=s.a.createElement;function p(e){var{plugin:n,name:t}=e,a=r.defaultConfig.variants[n]||["responsive"];t=t||n.replace(/([a-z])([A-Z])/g,(e,n,t)=>"".concat(n," ").concat(t.toLowerCase()));var p=["responsive","hover","focus","active","group-hover"].filter(e=>!a.includes(e)).slice(0,2);return o(s.a.Fragment,null,o("p",null,"By default, ",a.length?"only ".concat(Object(c.a)(a)):"no"," variants are generated for ",t," utilities."),o("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",o("code",null,n)," property in the ",o("code",null,"variants")," section of your"," ",o("code",null,"tailwind.config.js")," file."),o("p",null,"For example, this config will ",a.length>0?"also ":"","generate"," ",Object(c.a)(p)," variants:"),o(i.a,{path:"variants",before:"// ...",remove:{[n]:a},add:{[n]:[...a,...p]}}))}},AOjV:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t("q1tI"),s=t.n(a),r=t("Btb4"),c=t.n(r),i=t("AI3G"),o=t("iuhU"),p=s.a.createElement;function l(e){var{edits:n,indent:t="",type:s="inserted"}=e;return p("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(n).map((e,r)=>p(a.Fragment,{key:r},p("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",t,function(e){return/^[a-z_$][a-z0-9_$]*$/i.test(e)?e:"'".concat(e,"'")}(e),":"," ",c()(n[e],{indent:"  "}).replace(/\[([^\]]+)\]/g,(e,n)=>"[".concat(n.replace(/\n\s*/g," ").trim(),"]")).split("\n").map((e,n)=>"".concat(0===n?"":"+ "+t).concat(e)).join("\n"),",\n")))}function d(e){var{path:n,add:t,remove:s,before:r,after:c}=e;return n="string"===typeof n?n.split("."):n,p("pre",{className:"language-diff"},p("code",{className:"language-diff"},p("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",n.map((e,n)=>p(a.Fragment,{key:n},"  ","  ".repeat(n+1),e,": ","{\n")),r&&Object(i.a)(r).map(e=>"".concat("  ".repeat(n.length+2)).concat(e,"\n"))),s&&p(l,{edits:s,type:"deleted",indent:"  ".repeat(n.length+1)}),t&&p(l,{edits:t,type:"inserted",indent:"  ".repeat(n.length+1)}),p("span",{className:"token unchanged"},c&&Object(i.a)(c).map(e=>"".concat("  ".repeat(n.length+2)).concat(e,"\n")),n.map((e,t)=>p(a.Fragment,{key:t},"  ","  ".repeat(n.length-t),"}\n")),"  }")))}},Btb4:function(e,n,t){"use strict";const a=t("5xSE"),s=t("p+I8"),r=t("GAX2").default;e.exports=(e,n,t)=>{const c=[];return function e(n,t,i){let o;(t=t||{}).indent=t.indent||"\t",i=i||"",o=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:i,indent:i+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const p=e=>{if(void 0===t.inlineCharacterLimit)return e;const n=e.replace(new RegExp(o.newLine,"g"),"").replace(new RegExp(o.newLineOrSpace,"g")," ").replace(new RegExp(o.pad+"|"+o.indent,"g"),"");return n.length<=t.inlineCharacterLimit?n:e.replace(new RegExp(o.newLine+"|"+o.newLineOrSpace,"g"),"\n").replace(new RegExp(o.pad,"g"),i).replace(new RegExp(o.indent,"g"),i+t.indent)};if(-1!==c.indexOf(n))return'"[Circular]"';if(null===n||void 0===n||"number"===typeof n||"boolean"===typeof n||"function"===typeof n||"symbol"===typeof n||a(n))return String(n);if(n instanceof Date)return`new Date('${n.toISOString()}')`;if(Array.isArray(n)){if(0===n.length)return"[]";c.push(n);const a="["+o.newLine+n.map((a,s)=>{const r=n.length-1===s?o.newLine:","+o.newLineOrSpace;let c=e(a,t,i+t.indent);return t.transform&&(c=t.transform(n,s,c)),o.indent+c+r}).join("")+o.pad+"]";return c.pop(),p(a)}if(s(n)){let a=Object.keys(n).concat(r(n));if(t.filter&&(a=a.filter(e=>t.filter(n,e))),0===a.length)return"{}";c.push(n);const s="{"+o.newLine+a.map((s,r)=>{const c=a.length-1===r?o.newLine:","+o.newLineOrSpace,p="symbol"===typeof s,l=!p&&/^[a-z$_][a-z$_0-9]*$/i.test(s),d=p||l?s:e(s,t);let u=e(n[s],t,i+t.indent);return t.transform&&(u=t.transform(n,s,u)),o.indent+String(d)+": "+u+c}).join("")+o.pad+"}";return c.pop(),p(s)}return n=String(n).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===t.singleQuotes?`"${n=n.replace(/"/g,'\\"')}"`:`'${n=n.replace(/\\?'/g,"\\'")}'`}(e,n,t)}},"Ca+n":function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t("q1tI"),s=t.n(a),r=t("S5AU"),c=t.n(r),i=t("iuhU"),o=s.a.createElement,p=["","sm:","md:","lg:","xl:"];function l(e){var{children:n,active:t,onClick:a}=e;return o("button",{type:"button",className:Object(i.a)("inline-block text-center cursor-pointer select-none px-3",{"text-gray-800":t,"text-gray-500":!t}),onClick:a},n)}var d=e=>'<div class="'.concat(e,'"></div>');function u(e){var{classNames:n,snippet:t=d,preview:s,previewClassName:r}=e,u=Array.isArray(n[0])?n.length:1,{0:m,1:g}=Object(a.useState)(0);return o("div",{className:"mt-8"},o("div",{className:"flex justify-center"},o("div",{className:"grid grid-cols-5 mb-2 bg-white"},o(l,{active:0===m,onClick:()=>g(0)},o("svg",{width:"8.57142857142857",height:"24",viewBox:"0 0 10 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"all")),o(l,{active:1===m,onClick:()=>g(1)},o("svg",{width:"11.999999999999998",height:"24",viewBox:"0 0 14 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"sm")),o(l,{active:2===m,onClick:()=>g(2)},o("svg",{width:"22.28571428571428",height:"24",viewBox:"0 0 26 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"md")),o(l,{active:3===m,onClick:()=>g(3)},o("svg",{width:"32.57142857142856",height:"24",viewBox:"0 0 38 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"lg")),o(l,{active:4===m,onClick:()=>g(4)},o("svg",{width:"30.85714285714285",height:"24",viewBox:"0 0 36 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"})),o("p",{className:"text-xs"},"xl")))),o("div",{className:"overflow-hidden mb-8"},o("div",{className:"rounded-t-lg bg-gray-800 border-b border-gray-300 whitespace-pre font-mono text-gray-500 text-sm"},o("pre",{className:"scrollbar-none m-0 p-0 overflow-auto scrolling-touch"},o("code",{className:"inline-block p-4"},c()(t(1===u?"{{CLASSNAMES}}":Array.from({length:u}).map((e,n)=>"{{CLASSNAMES[".concat(n,"]}}")))).trim().split(/(\{\{CLASSNAMES(?:\[[0-9]+\])?\}\})/).flatMap((e,t)=>{if(t%2===1){var a=e.match(/\[([0-9]+)\]/);return(a?n[parseInt(a[1],10)]:n).map((e,n)=>e?o("span",{key:"".concat(t,"-").concat(n),className:m===n?"text-code-yellow":""},0===n?"":" ",e.replace(/\(([^)]+)\)/g,"").trim().split(/\s+/).map(e=>"".concat(p[n]).concat(e)).join(" ")):null).filter(Boolean)}return e})))),o("div",{className:Object(i.a)("rounded-b-lg border-l border-r border-b border-gray-400 bg-white",r,{"p-4":!r})},s(function(e){if(u>1)return n.map(n=>{for(var t=e;t>=0;t--)if(n[t])return n[t].replace(/\(([^)]+)\)/g,"$1")});for(var t=e;t>=0;t--)if(n[t])return n[t].replace(/\(([^)]+)\)/g,"$1")}(m)))))}},GAX2:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e=>Object.getOwnPropertySymbols(e).filter(n=>Object.prototype.propertyIsEnumerable.call(e,n))},"IBu/":function(e,n,t){"use strict";const a=t("sQdO");e.exports=e=>{const n=a(e);if(0===n)return e;const t=new RegExp(`^[ \\t]{${n}}`,"gm");return e.replace(t,"")}},S5AU:function(e,n,t){"use strict";const a=t("IBu/"),s=t("S6im");e.exports=(e,n=0,t)=>s(a(e),n,t)},S6im:function(e,n,t){"use strict";e.exports=(e,n=1,t)=>{if(t={indent:" ",includeEmptyLines:!1,...t},"string"!==typeof e)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);if("number"!==typeof n)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof n}\``);if("string"!==typeof t.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof t.indent}\``);if(0===n)return e;const a=t.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return e.replace(a,t.indent.repeat(n))}},YuTi:function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},Zb5r:function(e,n,t){"use strict";function a(e){return e.reduce((n,t,a)=>0===a?t:a===e.length-1?"".concat(n," and ").concat(t):"".concat(n,", ").concat(t),"")}t.d(n,"a",(function(){return a}))},cjDZ:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/order",function(){return t("4L0O")}])},"p+I8":function(e,n,t){"use strict";e.exports=function(e){var n=typeof e;return null!==e&&("object"===n||"function"===n)}},pOT7:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t("q1tI"),s=t.n(a),r=t("iuhU"),c=s.a.createElement;function i(e){var{preview:n,snippet:t,previewClassName:a}=e;return c("div",{className:"relative overflow-hidden mb-8"},c("div",{className:Object(r.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",a,{"p-4":!a}),dangerouslySetInnerHTML:{__html:n}}),c("div",{className:"rounded-b-lg bg-gray-800"},c("pre",{className:"scrollbar-none m-0 p-0 language-html"},c("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:t}}))))}},sQdO:function(e,n,t){"use strict";e.exports=e=>{const n=e.match(/^[ \t]*(?=\S)/gm);return n?n.reduce((e,n)=>Math.min(e,n.length),1/0):0}},wH44:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t("rePB"),s=t("q1tI"),r=t.n(s),c=t("AOjV"),i=t("AI3G"),o=t("Zb5r"),p=r.a.createElement;function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e){var{plugin:n,name:t}=e,a=Object(i.a)(n);return t=t||n.replace(/([a-z])([A-Z])/g,(e,n,t)=>"".concat(n," ").concat(t.toLowerCase())),p(r.a.Fragment,null,p("p",null,"If you don't plan to use the ",t," utilities in your project, you can disable them entirely by setting the"," ",p("span",{dangerouslySetInnerHTML:{__html:Object(o.a)(a.map(e=>"<code>".concat(e,"</code>")))}})," ",a.length>1?"properties":"property"," to ",p("code",null,"false")," in the"," ",p("code",null,"corePlugins")," section of your config file:"),p(c.a,{path:"corePlugins",before:"// ...",add:a.reduce((e,n)=>d(d({},e),{},{[n]:!1}),{})}))}},yLpj:function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(a){"object"===typeof window&&(t=window)}e.exports=t}},[["cjDZ",0,2,5,1,3,4]]]);