(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[93],{"5xSE":function(n,a,t){"use strict";n.exports=function(n){return"[object RegExp]"===Object.prototype.toString.call(n)}},"8C7G":function(n,a,t){"use strict";t.d(a,"a",(function(){return i}));var s=t("q1tI"),e=t.n(s),p=t("98BF"),c=t("Zb5r"),o=t("AOjV"),l=e.a.createElement;function i(n){var{plugin:a,name:t}=n,s=p.defaultConfig.variants[a]||["responsive"];t=t||a.replace(/([a-z])([A-Z])/g,(n,a,t)=>"".concat(a," ").concat(t.toLowerCase()));var i=["responsive","hover","focus","active","group-hover"].filter(n=>!s.includes(n)).slice(0,2);return l(e.a.Fragment,null,l("p",null,"By default, ",s.length?"only ".concat(Object(c.a)(s)):"no"," variants are generated for ",t," utilities."),l("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",l("code",null,a)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",s.length>0?"also ":"","generate"," ",Object(c.a)(i)," variants:"),l(o.a,{path:"variants",before:"// ...",remove:{[a]:s},add:{[a]:[...s,...i]}}))}},AOjV:function(n,a,t){"use strict";t.d(a,"a",(function(){return u}));var s=t("q1tI"),e=t.n(s),p=t("Btb4"),c=t.n(p),o=t("AI3G"),l=t("iuhU"),i=e.a.createElement;function r(n){var{edits:a,indent:t="",type:e="inserted"}=n;return i("span",{className:Object(l.a)("token",{"inserted-sign inserted":"inserted"===e,"deleted-sign deleted":"inserted"!==e})},Object.keys(a).map((n,p)=>i(s.Fragment,{key:p},i("span",{className:Object(l.a)("token prefix",{inserted:"inserted"===e,deleted:"inserted"!==e})},"inserted"===e?"+":"-")," ",t,function(n){return/^[a-z_$][a-z0-9_$]*$/i.test(n)?n:"'".concat(n,"'")}(n),":"," ",c()(a[n],{indent:"  "}).replace(/\[([^\]]+)\]/g,(n,a)=>"[".concat(a.replace(/\n\s*/g," ").trim(),"]")).split("\n").map((n,a)=>"".concat(0===a?"":"+ "+t).concat(n)).join("\n"),",\n")))}function u(n){var{path:a,add:t,remove:e,before:p,after:c}=n;return a="string"===typeof a?a.split("."):a,i("pre",{className:"language-diff"},i("code",{className:"language-diff"},i("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",a.map((n,a)=>i(s.Fragment,{key:a},"  ","  ".repeat(a+1),n,": ","{\n")),p&&Object(o.a)(p).map(n=>"".concat("  ".repeat(a.length+2)).concat(n,"\n"))),e&&i(r,{edits:e,type:"deleted",indent:"  ".repeat(a.length+1)}),t&&i(r,{edits:t,type:"inserted",indent:"  ".repeat(a.length+1)}),i("span",{className:"token unchanged"},c&&Object(o.a)(c).map(n=>"".concat("  ".repeat(a.length+2)).concat(n,"\n")),a.map((n,t)=>i(s.Fragment,{key:t},"  ","  ".repeat(a.length-t),"}\n")),"  }")))}},Aunq:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({addUtilities:n,variants:a}){n({".flex-wrap":{"flex-wrap":"wrap"},".flex-wrap-reverse":{"flex-wrap":"wrap-reverse"},".flex-no-wrap":{"flex-wrap":"nowrap"}},a("flexWrap"))}}},Btb4:function(n,a,t){"use strict";const s=t("5xSE"),e=t("p+I8"),p=t("GAX2").default;n.exports=(n,a,t)=>{const c=[];return function n(a,t,o){let l;(t=t||{}).indent=t.indent||"\t",o=o||"",l=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const i=n=>{if(void 0===t.inlineCharacterLimit)return n;const a=n.replace(new RegExp(l.newLine,"g"),"").replace(new RegExp(l.newLineOrSpace,"g")," ").replace(new RegExp(l.pad+"|"+l.indent,"g"),"");return a.length<=t.inlineCharacterLimit?a:n.replace(new RegExp(l.newLine+"|"+l.newLineOrSpace,"g"),"\n").replace(new RegExp(l.pad,"g"),o).replace(new RegExp(l.indent,"g"),o+t.indent)};if(-1!==c.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||s(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";c.push(a);const s="["+l.newLine+a.map((s,e)=>{const p=a.length-1===e?l.newLine:","+l.newLineOrSpace;let c=n(s,t,o+t.indent);return t.transform&&(c=t.transform(a,e,c)),l.indent+c+p}).join("")+l.pad+"]";return c.pop(),i(s)}if(e(a)){let s=Object.keys(a).concat(p(a));if(t.filter&&(s=s.filter(n=>t.filter(a,n))),0===s.length)return"{}";c.push(a);const e="{"+l.newLine+s.map((e,p)=>{const c=s.length-1===p?l.newLine:","+l.newLineOrSpace,i="symbol"===typeof e,r=!i&&/^[a-z$_][a-z$_0-9]*$/i.test(e),u=i||r?e:n(e,t);let g=n(a[e],t,o+t.indent);return t.transform&&(g=t.transform(a,e,g)),l.indent+String(u)+": "+g+c}).join("")+l.pad+"}";return c.pop(),i(e)}return a=String(a).replace(/[\r\n]/g,n=>"\n"===n?"\\n":"\\r"),!1===t.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(n,a,t)}},"Ca+n":function(n,a,t){"use strict";t.d(a,"a",(function(){return g}));var s=t("q1tI"),e=t.n(s),p=t("S5AU"),c=t.n(p),o=t("iuhU"),l=e.a.createElement,i=["","sm:","md:","lg:","xl:"];function r(n){var{children:a,active:t,onClick:s}=n;return l("button",{type:"button",className:Object(o.a)("inline-block text-center cursor-pointer select-none px-3",{"text-gray-800":t,"text-gray-500":!t}),onClick:s},a)}var u=n=>'<div class="'.concat(n,'"></div>');function g(n){var{classNames:a,snippet:t=u,preview:e,previewClassName:p}=n,g=Array.isArray(a[0])?a.length:1,{0:d,1:k}=Object(s.useState)(0);return l("div",{className:"mt-8"},l("div",{className:"flex justify-center"},l("div",{className:"grid grid-cols-5 mb-2 bg-white"},l(r,{active:0===d,onClick:()=>k(0)},l("svg",{width:"8.57142857142857",height:"24",viewBox:"0 0 10 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},l("path",{d:"M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z",fillRule:"evenodd"})),l("p",{className:"text-xs"},"all")),l(r,{active:1===d,onClick:()=>k(1)},l("svg",{width:"11.999999999999998",height:"24",viewBox:"0 0 14 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},l("path",{d:"M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),l("p",{className:"text-xs"},"sm")),l(r,{active:2===d,onClick:()=>k(2)},l("svg",{width:"22.28571428571428",height:"24",viewBox:"0 0 26 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},l("path",{d:"M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),l("p",{className:"text-xs"},"md")),l(r,{active:3===d,onClick:()=>k(3)},l("svg",{width:"32.57142857142856",height:"24",viewBox:"0 0 38 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},l("path",{d:"M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z",fillRule:"evenodd"})),l("p",{className:"text-xs"},"lg")),l(r,{active:4===d,onClick:()=>k(4)},l("svg",{width:"30.85714285714285",height:"24",viewBox:"0 0 36 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},l("path",{d:"M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"})),l("p",{className:"text-xs"},"xl")))),l("div",{className:"overflow-hidden mb-8"},l("div",{className:"rounded-t-lg bg-gray-800 border-b border-gray-300 whitespace-pre font-mono text-gray-500 text-sm"},l("pre",{className:"scrollbar-none m-0 p-0 overflow-auto scrolling-touch"},l("code",{className:"inline-block p-4"},c()(t(1===g?"{{CLASSNAMES}}":Array.from({length:g}).map((n,a)=>"{{CLASSNAMES[".concat(a,"]}}")))).trim().split(/(\{\{CLASSNAMES(?:\[[0-9]+\])?\}\})/).flatMap((n,t)=>{if(t%2===1){var s=n.match(/\[([0-9]+)\]/);return(s?a[parseInt(s[1],10)]:a).map((n,a)=>n?l("span",{key:"".concat(t,"-").concat(a),className:d===a?"text-code-yellow":""},0===a?"":" ",n.replace(/\(([^)]+)\)/g,"").trim().split(/\s+/).map(n=>"".concat(i[a]).concat(n)).join(" ")):null).filter(Boolean)}return n})))),l("div",{className:Object(o.a)("rounded-b-lg border-l border-r border-b border-gray-400 bg-white",p,{"p-4":!p})},e(function(n){if(g>1)return a.map(a=>{for(var t=n;t>=0;t--)if(a[t])return a[t].replace(/\(([^)]+)\)/g,"$1")});for(var t=n;t>=0;t--)if(a[t])return a[t].replace(/\(([^)]+)\)/g,"$1")}(d)))))}},GAX2:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=n=>Object.getOwnPropertySymbols(n).filter(a=>Object.prototype.propertyIsEnumerable.call(n,a))},"IBu/":function(n,a,t){"use strict";const s=t("sQdO");n.exports=n=>{const a=s(n);if(0===a)return n;const t=new RegExp(`^[ \\t]{${a}}`,"gm");return n.replace(t,"")}},S5AU:function(n,a,t){"use strict";const s=t("IBu/"),e=t("S6im");n.exports=(n,a=0,t)=>e(s(n),a,t)},S6im:function(n,a,t){"use strict";n.exports=(n,a=1,t)=>{if(t={indent:" ",includeEmptyLines:!1,...t},"string"!==typeof n)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof n}\``);if("number"!==typeof a)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof a}\``);if("string"!==typeof t.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof t.indent}\``);if(0===a)return n;const s=t.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return n.replace(s,t.indent.repeat(a))}},VWga:function(n,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/flex-wrap",function(){return t("wv3D")}])},Zb5r:function(n,a,t){"use strict";function s(n){return n.reduce((a,t,s)=>0===s?t:s===n.length-1?"".concat(a," and ").concat(t):"".concat(a,", ").concat(t),"")}t.d(a,"a",(function(){return s}))},"p+I8":function(n,a,t){"use strict";n.exports=function(n){var a=typeof n;return null!==n&&("object"===a||"function"===a)}},pOT7:function(n,a,t){"use strict";t.d(a,"a",(function(){return o}));var s=t("q1tI"),e=t.n(s),p=t("iuhU"),c=e.a.createElement;function o(n){var{preview:a,snippet:t,previewClassName:s}=n;return c("div",{className:"relative overflow-hidden mb-8"},c("div",{className:Object(p.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",s,{"p-4":!s}),dangerouslySetInnerHTML:{__html:a}}),c("div",{className:"rounded-b-lg bg-gray-800"},c("pre",{className:"scrollbar-none m-0 p-0 language-html"},c("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:t}}))))}},sQdO:function(n,a,t){"use strict";n.exports=n=>{const a=n.match(/^[ \t]*(?=\S)/gm);return a?a.reduce((n,a)=>Math.min(n,a.length),1/0):0}},wH44:function(n,a,t){"use strict";t.d(a,"a",(function(){return g}));var s=t("rePB"),e=t("q1tI"),p=t.n(e),c=t("AOjV"),o=t("AI3G"),l=t("Zb5r"),i=p.a.createElement;function r(n,a){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),t.push.apply(t,s)}return t}function u(n){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){Object(s.a)(n,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))}))}return n}function g(n){var{plugin:a,name:t}=n,s=Object(o.a)(a);return t=t||a.replace(/([a-z])([A-Z])/g,(n,a,t)=>"".concat(a," ").concat(t.toLowerCase())),i(p.a.Fragment,null,i("p",null,"If you don't plan to use the ",t," utilities in your project, you can disable them entirely by setting the"," ",i("span",{dangerouslySetInnerHTML:{__html:Object(l.a)(s.map(n=>"<code>".concat(n,"</code>")))}})," ",s.length>1?"properties":"property"," to ",i("code",null,"false")," in the"," ",i("code",null,"corePlugins")," section of your config file:"),i(c.a,{path:"corePlugins",before:"// ...",add:s.reduce((n,a)=>u(u({},n),{},{[a]:!1}),{})}))}},wv3D:function(n,a,t){"use strict";t.r(a),t.d(a,"Layout",(function(){return w})),t.d(a,"classes",(function(){return x})),t.d(a,"meta",(function(){return y})),t.d(a,"tableOfContents",(function(){return h})),t.d(a,"default",(function(){return N}));var s=t("wx14"),e=t("Ff2n"),p=t("q1tI"),c=t.n(p),o=t("7ljp"),l=t("YFqc"),i=t.n(l),r=t("tc9R"),u=t("pOT7"),g=t("vRWG"),d=t("I6Nb"),k=t("Aunq"),v=t.n(k),f=t("8C7G"),m=t("wH44"),b=t("Ca+n"),w=(c.a.createElement,g.DocumentationLayout),x={plugin:v()},y={title:"Flex Wrap",description:"Utilities for controlling how flex items wrap.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},h=[{title:"Don't wrap",slug:"don-t-wrap",children:[]},{title:"Wrap normally",slug:"wrap-normally",children:[]},{title:"Wrap reversed",slug:"wrap-reversed",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],O={Layout:w,classes:x,meta:y,tableOfContents:h},j=d.ContentsLayout;function N(n){var{components:a}=n,t=Object(e.a)(n,["components"]);return Object(o.a)(j,Object(s.a)({},O,t,{components:a,mdxType:"MDXLayout"}),Object(o.a)(r.a,{level:2,id:"don-t-wrap",toc:!0},"Don't wrap"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},".flex-no-wrap")," to prevent flex items from wrapping, causing inflexible items to overflow the container if necessary:"),Object(o.a)(u.a,{preview:'\n  <div class="flex flex-no-wrap bg-gray-200">\n    <div class="w-2/5 flex-none p-2">\n      <div class="text-gray-700 text-center bg-gray-400 p-2">1</div>\n    </div>\n    <div class="w-2/5 flex-none p-2">\n      <div class="text-gray-700 text-center bg-gray-400 p-2">2</div>\n    </div>\n    <div class="w-2/5 flex-none p-2">\n      <div class="text-gray-700 text-center bg-gray-400 p-2">3</div>\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex flex-no-wrap bg-gray-200<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>w-2/5 flex-none p-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 p-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>w-2/5 flex-none p-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 p-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>w-2/5 flex-none p-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 p-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(o.a)(r.a,{level:2,id:"wrap-normally",toc:!0},"Wrap normally"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},".flex-wrap")," to allow flex items to wrap:"),Object(o.a)(u.a,{preview:'\n  <div class="flex flex-wrap bg-gray-200">\n    <div class="w-2/5 p-2">\n      <div class="text-gray-700 text-center bg-gray-400 p-2">1</div>\n    </div>\n    <div class="w-2/5 p-2">\n      <div class="text-gray-700 text-center bg-gray-400 p-2">2</div>\n    </div>\n    <div class="w-2/5 p-2">\n      <div class="text-gray-700 text-center bg-gray-400 p-2">3</div>\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex flex-wrap bg-gray-200<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>w-2/5 p-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 p-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>w-2/5 p-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 p-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>w-2/5 p-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 p-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(o.a)(r.a,{level:2,id:"wrap-reversed",toc:!0},"Wrap reversed"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},".flex-wrap-reverse")," to wrap flex items in the reverse direction:"),Object(o.a)(u.a,{preview:'\n  <div class="flex flex-wrap-reverse bg-gray-200">\n    <div class="w-2/5 p-2">\n      <div class="text-gray-700 text-center bg-gray-400 p-2">1</div>\n    </div>\n    <div class="w-2/5 p-2">\n      <div class="text-gray-700 text-center bg-gray-400 p-2">2</div>\n    </div>\n    <div class="w-2/5 p-2">\n      <div class="text-gray-700 text-center bg-gray-400 p-2">3</div>\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex flex-wrap-reverse bg-gray-200<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>w-2/5 p-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 p-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>w-2/5 p-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 p-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>w-2/5 p-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 p-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(o.a)(r.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control how flex items wrap at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing utility class. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:flex-wrap-reverse")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"flex-wrap-reverse")," utility at only medium screen sizes and above."),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(b.a,{classNames:["flex-no-wrap","flex-wrap","flex-wrap-reverse","flex-no-wrap","flex-wrap"],snippet:n=>'\n    <div class="'.concat(n,' ...">\n      \x3c!-- ... --\x3e\n    </div>\n  '),preview:n=>Object(o.a)("div",{className:"flex bg-gray-200 ".concat(n)},Object(o.a)("div",{className:"w-2/5 flex-none p-2"},Object(o.a)("div",{className:"text-gray-700 text-center bg-gray-400 p-2"},"1")),Object(o.a)("div",{className:"w-2/5 flex-none p-2"},Object(o.a)("div",{className:"text-gray-700 text-center bg-gray-400 p-2"},"2")),Object(o.a)("div",{className:"w-2/5 flex-none p-2"},Object(o.a)("div",{className:"text-gray-700 text-center bg-gray-400 p-2"},"3"))),mdxType:"ResponsiveCodeSample"}),Object(o.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(r.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(o.a)(f.a,{plugin:"flexWrap",name:"flex-wrap",mdxType:"Variants"}),Object(o.a)(r.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(o.a)(m.a,{plugin:"flexWrap",name:"flex-wrap",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=O}},[["VWga",0,2,1,3,4]]]);