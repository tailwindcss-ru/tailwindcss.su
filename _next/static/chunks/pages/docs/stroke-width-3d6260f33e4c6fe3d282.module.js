(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[151],{"1kYG":function(e,t,n){"use strict";n.r(t),n.d(t,"Layout",(function(){return y})),n.d(t,"classes",(function(){return x})),n.d(t,"meta",(function(){return O})),n.d(t,"tableOfContents",(function(){return w})),n.d(t,"default",(function(){return N}));var a=n("wx14"),s=n("Ff2n"),r=n("q1tI"),i=n.n(r),o=n("7ljp"),c=n("YFqc"),l=n.n(c),p=n("tc9R"),u=n("pOT7"),d=n("vRWG"),m=n("I6Nb"),g=n("2jbF"),f=n.n(g),b=n("8C7G"),h=n("wH44"),v=n("Ca+n"),y=(i.a.createElement,d.DocumentationLayout),x={plugin:f()},O={title:"Stroke Width",description:"Utilities for styling the stroke width of SVG elements.",featureVersion:"v1.2.0+"},w=[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],j={Layout:y,classes:x,meta:O,tableOfContents:w},k=m.ContentsLayout;function N(e){var{components:t}=e,n=Object(s.a)(e,["components"]);return Object(o.a)(k,Object(a.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)(p.a,{level:2,id:"usage",toc:!0},"Usage"),Object(o.a)("p",null,"Use the ",Object(o.a)("inlineCode",{parentName:"p"},".stroke-{width}")," utilities to set the stroke width of an SVG."),Object(o.a)("p",null,"Useful for styling icon sets like ",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"https://feathericons.com/"}),"Feather")," that are drawn entirely with strokes."),Object(o.a)(u.a,{preview:'\n  <svg class="stroke-current stroke-1 text-green-500 inline-block h-24 w-24" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">\n    <circle cx="12" cy="12" r="10" />\n    <line x1="14.31" y1="8" x2="20.05" y2="17.94" />\n    <line x1="9.69" y1="8" x2="21.17" y2="8" />\n    <line x1="7.38" y1="12" x2="13.12" y2="2.06" />\n    <line x1="9.69" y1="16" x2="3.95" y2="6.06" />\n    <line x1="14.31" y1="16" x2="2.83" y2="16" />\n    <line x1="16.62" y1="12" x2="10.88" y2="21.94" />\n  </svg>\n  <svg class="stroke-current stroke-2 text-green-500 inline-block h-24 w-24" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">\n    <circle cx="12" cy="12" r="10" />\n    <line x1="14.31" y1="8" x2="20.05" y2="17.94" />\n    <line x1="9.69" y1="8" x2="21.17" y2="8" />\n    <line x1="7.38" y1="12" x2="13.12" y2="2.06" />\n    <line x1="9.69" y1="16" x2="3.95" y2="6.06" />\n    <line x1="14.31" y1="16" x2="2.83" y2="16" />\n    <line x1="16.62" y1="12" x2="10.88" y2="21.94" />\n  </svg>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stroke-current stroke-1 text-green-500 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stroke-current stroke-2 text-green-500 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>',previewClassName:"text-center p-4"}),Object(o.a)(p.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control the stroke width of an SVG element at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing width utility. For example, adding the class ",Object(o.a)("inlineCode",{parentName:"p"},"md:stroke-2")," to an element would apply the ",Object(o.a)("inlineCode",{parentName:"p"},"stroke-2")," utility at medium screen sizes and above."),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(v.a,{classNames:["stroke-1","stroke-2","stroke-1","stroke-0","stroke-1"],snippet:e=>'\n    <svg class="'.concat(e,' ...">\n      \x3c!-- ... --\x3e\n    </svg>\n  '),previewClassName:"text-center p-4",preview:e=>Object(o.a)("svg",{className:"stroke-current text-green-500 inline-block h-24 w-24 ".concat(e),viewBox:"0 0 24 24",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},Object(o.a)("circle",{cx:"12",cy:"12",r:"10"}),Object(o.a)("line",{x1:"14.31",y1:"8",x2:"20.05",y2:"17.94"}),Object(o.a)("line",{x1:"9.69",y1:"8",x2:"21.17",y2:"8"}),Object(o.a)("line",{x1:"7.38",y1:"12",x2:"13.12",y2:"2.06"}),Object(o.a)("line",{x1:"9.69",y1:"16",x2:"3.95",y2:"6.06"}),Object(o.a)("line",{x1:"14.31",y1:"16",x2:"2.83",y2:"16"}),Object(o.a)("line",{x1:"16.62",y1:"12",x2:"10.88",y2:"21.94"})),mdxType:"ResponsiveCodeSample"}),Object(o.a)(p.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)("p",null,"Control which stroke-width utilities Tailwind generates by customizing the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.strokeWidth")," section in your ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),Object(o.a)("pre",{className:"language-diff"},Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),Object(o.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend: {\n",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       strokeWidth: {\n"),Object(o.a)("span",Object(a.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '3': '3',\n",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '4': '4',\n"),Object(o.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       }\n",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(o.a)("p",null,"Learn more about customizing the default theme in the ",Object(o.a)(l.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(o.a)("a",null,"theme customization documentation")),"."),Object(o.a)(p.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(o.a)(b.a,{plugin:"strokeWidth",name:"stroke-width",mdxType:"Variants"}),Object(o.a)(p.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(o.a)(h.a,{plugin:"strokeWidth",name:"stroke-width",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=j},"2jbF":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:e,e:t,theme:n,variants:a}){e(s.default.fromPairs(s.default.map(n("strokeWidth"),(e,n)=>[`.${t(`stroke-${n}`)}`,{strokeWidth:e}])),a("strokeWidth"))}};var a,s=(a=n("LvDl"))&&a.__esModule?a:{default:a}},"5xSE":function(e,t,n){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI"),s=n.n(a),r=n("98BF"),i=n("Zb5r"),o=n("AOjV"),c=s.a.createElement;function l(e){var{plugin:t,name:n}=e,a=r.defaultConfig.variants[t]||["responsive"];n=n||t.replace(/([a-z])([A-Z])/g,(e,t,n)=>"".concat(t," ").concat(n.toLowerCase()));var l=["responsive","hover","focus","active","group-hover"].filter(e=>!a.includes(e)).slice(0,2);return c(s.a.Fragment,null,c("p",null,"By default, ",a.length?"only ".concat(Object(i.a)(a)):"no"," variants are generated for ",n," utilities."),c("p",null,"You can control which variants are generated for the ",n," utilities by modifying the"," ",c("code",null,t)," property in the ",c("code",null,"variants")," section of your"," ",c("code",null,"tailwind.config.js")," file."),c("p",null,"For example, this config will ",a.length>0?"also ":"","generate"," ",Object(i.a)(l)," variants:"),c(o.a,{path:"variants",before:"// ...",remove:{[t]:a},add:{[t]:[...a,...l]}}))}},AOjV:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("q1tI"),s=n.n(a),r=n("Btb4"),i=n.n(r),o=n("AI3G"),c=n("iuhU"),l=s.a.createElement;function p(e){var{edits:t,indent:n="",type:s="inserted"}=e;return l("span",{className:Object(c.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(t).map((e,r)=>l(a.Fragment,{key:r},l("span",{className:Object(c.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",n,function(e){return/^[a-z_$][a-z0-9_$]*$/i.test(e)?e:"'".concat(e,"'")}(e),":"," ",i()(t[e],{indent:"  "}).replace(/\[([^\]]+)\]/g,(e,t)=>"[".concat(t.replace(/\n\s*/g," ").trim(),"]")).split("\n").map((e,t)=>"".concat(0===t?"":"+ "+n).concat(e)).join("\n"),",\n")))}function u(e){var{path:t,add:n,remove:s,before:r,after:i}=e;return t="string"===typeof t?t.split("."):t,l("pre",{className:"language-diff"},l("code",{className:"language-diff"},l("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",t.map((e,t)=>l(a.Fragment,{key:t},"  ","  ".repeat(t+1),e,": ","{\n")),r&&Object(o.a)(r).map(e=>"".concat("  ".repeat(t.length+2)).concat(e,"\n"))),s&&l(p,{edits:s,type:"deleted",indent:"  ".repeat(t.length+1)}),n&&l(p,{edits:n,type:"inserted",indent:"  ".repeat(t.length+1)}),l("span",{className:"token unchanged"},i&&Object(o.a)(i).map(e=>"".concat("  ".repeat(t.length+2)).concat(e,"\n")),t.map((e,n)=>l(a.Fragment,{key:n},"  ","  ".repeat(t.length-n),"}\n")),"  }")))}},Btb4:function(e,t,n){"use strict";const a=n("5xSE"),s=n("p+I8"),r=n("GAX2").default;e.exports=(e,t,n)=>{const i=[];return function e(t,n,o){let c;(n=n||{}).indent=n.indent||"\t",o=o||"",c=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=e=>{if(void 0===n.inlineCharacterLimit)return e;const t=e.replace(new RegExp(c.newLine,"g"),"").replace(new RegExp(c.newLineOrSpace,"g")," ").replace(new RegExp(c.pad+"|"+c.indent,"g"),"");return t.length<=n.inlineCharacterLimit?t:e.replace(new RegExp(c.newLine+"|"+c.newLineOrSpace,"g"),"\n").replace(new RegExp(c.pad,"g"),o).replace(new RegExp(c.indent,"g"),o+n.indent)};if(-1!==i.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||a(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";i.push(t);const a="["+c.newLine+t.map((a,s)=>{const r=t.length-1===s?c.newLine:","+c.newLineOrSpace;let i=e(a,n,o+n.indent);return n.transform&&(i=n.transform(t,s,i)),c.indent+i+r}).join("")+c.pad+"]";return i.pop(),l(a)}if(s(t)){let a=Object.keys(t).concat(r(t));if(n.filter&&(a=a.filter(e=>n.filter(t,e))),0===a.length)return"{}";i.push(t);const s="{"+c.newLine+a.map((s,r)=>{const i=a.length-1===r?c.newLine:","+c.newLineOrSpace,l="symbol"===typeof s,p=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=l||p?s:e(s,n);let d=e(t[s],n,o+n.indent);return n.transform&&(d=n.transform(t,s,d)),c.indent+String(u)+": "+d+i}).join("")+c.pad+"}";return i.pop(),l(s)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===n.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,n)}},"Ca+n":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("q1tI"),s=n.n(a),r=n("S5AU"),i=n.n(r),o=n("iuhU"),c=s.a.createElement,l=["","sm:","md:","lg:","xl:"];function p(e){var{children:t,active:n,onClick:a}=e;return c("button",{type:"button",className:Object(o.a)("inline-block text-center cursor-pointer select-none px-3",{"text-gray-800":n,"text-gray-500":!n}),onClick:a},t)}var u=e=>'<div class="'.concat(e,'"></div>');function d(e){var{classNames:t,snippet:n=u,preview:s,previewClassName:r}=e,d=Array.isArray(t[0])?t.length:1,{0:m,1:g}=Object(a.useState)(0);return c("div",{className:"mt-8"},c("div",{className:"flex justify-center"},c("div",{className:"grid grid-cols-5 mb-2 bg-white"},c(p,{active:0===m,onClick:()=>g(0)},c("svg",{width:"8.57142857142857",height:"24",viewBox:"0 0 10 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},c("path",{d:"M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z",fillRule:"evenodd"})),c("p",{className:"text-xs"},"all")),c(p,{active:1===m,onClick:()=>g(1)},c("svg",{width:"11.999999999999998",height:"24",viewBox:"0 0 14 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},c("path",{d:"M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),c("p",{className:"text-xs"},"sm")),c(p,{active:2===m,onClick:()=>g(2)},c("svg",{width:"22.28571428571428",height:"24",viewBox:"0 0 26 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},c("path",{d:"M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),c("p",{className:"text-xs"},"md")),c(p,{active:3===m,onClick:()=>g(3)},c("svg",{width:"32.57142857142856",height:"24",viewBox:"0 0 38 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},c("path",{d:"M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z",fillRule:"evenodd"})),c("p",{className:"text-xs"},"lg")),c(p,{active:4===m,onClick:()=>g(4)},c("svg",{width:"30.85714285714285",height:"24",viewBox:"0 0 36 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},c("path",{d:"M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"})),c("p",{className:"text-xs"},"xl")))),c("div",{className:"overflow-hidden mb-8"},c("div",{className:"rounded-t-lg bg-gray-800 border-b border-gray-300 whitespace-pre font-mono text-gray-500 text-sm"},c("pre",{className:"scrollbar-none m-0 p-0 overflow-auto scrolling-touch"},c("code",{className:"inline-block p-4"},i()(n(1===d?"{{CLASSNAMES}}":Array.from({length:d}).map((e,t)=>"{{CLASSNAMES[".concat(t,"]}}")))).trim().split(/(\{\{CLASSNAMES(?:\[[0-9]+\])?\}\})/).flatMap((e,n)=>{if(n%2===1){var a=e.match(/\[([0-9]+)\]/);return(a?t[parseInt(a[1],10)]:t).map((e,t)=>e?c("span",{key:"".concat(n,"-").concat(t),className:m===t?"text-code-yellow":""},0===t?"":" ",e.replace(/\(([^)]+)\)/g,"").trim().split(/\s+/).map(e=>"".concat(l[t]).concat(e)).join(" ")):null).filter(Boolean)}return e})))),c("div",{className:Object(o.a)("rounded-b-lg border-l border-r border-b border-gray-400 bg-white",r,{"p-4":!r})},s(function(e){if(d>1)return t.map(t=>{for(var n=e;n>=0;n--)if(t[n])return t[n].replace(/\(([^)]+)\)/g,"$1")});for(var n=e;n>=0;n--)if(t[n])return t[n].replace(/\(([^)]+)\)/g,"$1")}(m)))))}},GAX2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},"IBu/":function(e,t,n){"use strict";const a=n("sQdO");e.exports=e=>{const t=a(e);if(0===t)return e;const n=new RegExp(`^[ \\t]{${t}}`,"gm");return e.replace(n,"")}},KQ9m:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/stroke-width",function(){return n("1kYG")}])},S5AU:function(e,t,n){"use strict";const a=n("IBu/"),s=n("S6im");e.exports=(e,t=0,n)=>s(a(e),t,n)},S6im:function(e,t,n){"use strict";e.exports=(e,t=1,n)=>{if(n={indent:" ",includeEmptyLines:!1,...n},"string"!==typeof e)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);if("number"!==typeof t)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);if("string"!==typeof n.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof n.indent}\``);if(0===t)return e;const a=n.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return e.replace(a,n.indent.repeat(t))}},YuTi:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},Zb5r:function(e,t,n){"use strict";function a(e){return e.reduce((t,n,a)=>0===a?n:a===e.length-1?"".concat(t," and ").concat(n):"".concat(t,", ").concat(n),"")}n.d(t,"a",(function(){return a}))},"p+I8":function(e,t,n){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},pOT7:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI"),s=n.n(a),r=n("iuhU"),i=s.a.createElement;function o(e){var{preview:t,snippet:n,previewClassName:a}=e;return i("div",{className:"relative overflow-hidden mb-8"},i("div",{className:Object(r.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",a,{"p-4":!a}),dangerouslySetInnerHTML:{__html:t}}),i("div",{className:"rounded-b-lg bg-gray-800"},i("pre",{className:"scrollbar-none m-0 p-0 language-html"},i("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:n}}))))}},sQdO:function(e,t,n){"use strict";e.exports=e=>{const t=e.match(/^[ \t]*(?=\S)/gm);return t?t.reduce((e,t)=>Math.min(e,t.length),1/0):0}},wH44:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("rePB"),s=n("q1tI"),r=n.n(s),i=n("AOjV"),o=n("AI3G"),c=n("Zb5r"),l=r.a.createElement;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){var{plugin:t,name:n}=e,a=Object(o.a)(t);return n=n||t.replace(/([a-z])([A-Z])/g,(e,t,n)=>"".concat(t," ").concat(n.toLowerCase())),l(r.a.Fragment,null,l("p",null,"If you don't plan to use the ",n," utilities in your project, you can disable them entirely by setting the"," ",l("span",{dangerouslySetInnerHTML:{__html:Object(c.a)(a.map(e=>"<code>".concat(e,"</code>")))}})," ",a.length>1?"properties":"property"," to ",l("code",null,"false")," in the"," ",l("code",null,"corePlugins")," section of your config file:"),l(i.a,{path:"corePlugins",before:"// ...",add:a.reduce((e,t)=>u(u({},e),{},{[t]:!1}),{})}))}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(a){"object"===typeof window&&(n=window)}e.exports=n}},[["KQ9m",0,2,5,1,3,4]]]);