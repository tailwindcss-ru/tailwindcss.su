_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[122],{"5xSE":function(e,t,n){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("KQm4"),r=n("rePB"),i=n("q1tI"),c=n.n(i),s=n("98BF"),o=n("Zb5r"),l=n("AOjV"),u=c.a.createElement;function p(e){var t=e.plugin,n=e.name,i=s.defaultConfig.variants[t]||["responsive"];n=n||t.replace(/([a-z])([A-Z])/g,(function(e,t,n){return"".concat(t," ").concat(n.toLowerCase())}));var p=["responsive","hover","focus","active","group-hover"].filter((function(e){return!i.includes(e)})).slice(0,2);return u(c.a.Fragment,null,u("p",null,"By default, ",i.length?"only ".concat(Object(o.a)(i)):"no"," variants are generated for ",n," utilities."),u("p",null,"You can control which variants are generated for the ",n," utilities by modifying the"," ",u("code",null,t)," property in the ",u("code",null,"variants")," section of your"," ",u("code",null,"tailwind.config.js")," file."),u("p",null,"For example, this config will ",i.length>0?"also ":"","generate"," ",Object(o.a)(p)," variants:"),u(l.a,{path:"variants",before:"// ...",remove:Object(r.a)({},t,i),add:Object(r.a)({},t,[].concat(Object(a.a)(i),Object(a.a)(p)))}))}},AOjV:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("q1tI"),r=n.n(a),i=n("Btb4"),c=n.n(i),s=n("AI3G"),o=n("iuhU"),l=r.a.createElement;function u(e){var t=e.edits,n=e.indent,r=void 0===n?"":n,i=e.type,s=void 0===i?"inserted":i;return l("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(t).map((function(e,n){return l(a.Fragment,{key:n},l("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",r,/^[a-z_$][a-z0-9_$]*$/i.test(i=e)?i:"'".concat(i,"'"),":"," ",c()(t[e],{indent:"  "}).replace(/\[([^\]]+)\]/g,(function(e,t){return"[".concat(t.replace(/\n\s*/g," ").trim(),"]")})).split("\n").map((function(e,t){return"".concat(0===t?"":"+ "+r).concat(e)})).join("\n"),",\n");var i})))}function p(e){var t=e.path,n=e.add,r=e.remove,i=e.before,c=e.after;return t="string"===typeof t?t.split("."):t,l("pre",{className:"language-diff"},l("code",{className:"language-diff"},l("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",t.map((function(e,t){return l(a.Fragment,{key:t},"  ","  ".repeat(t+1),e,": ","{\n")})),i&&Object(s.a)(i).map((function(e){return"".concat("  ".repeat(t.length+2)).concat(e,"\n")}))),r&&l(u,{edits:r,type:"deleted",indent:"  ".repeat(t.length+1)}),n&&l(u,{edits:n,type:"inserted",indent:"  ".repeat(t.length+1)}),l("span",{className:"token unchanged"},c&&Object(s.a)(c).map((function(e){return"".concat("  ".repeat(t.length+2)).concat(e,"\n")})),t.map((function(e,n){return l(a.Fragment,{key:n},"  ","  ".repeat(t.length-n),"}\n")})),"  }")))}},Btb4:function(e,t,n){"use strict";const a=n("5xSE"),r=n("p+I8"),i=n("GAX2").default;e.exports=(e,t,n)=>{const c=[];return function e(t,n,s){let o;(n=n||{}).indent=n.indent||"\t",s=s||"",o=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:s,indent:s+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=e=>{if(void 0===n.inlineCharacterLimit)return e;const t=e.replace(new RegExp(o.newLine,"g"),"").replace(new RegExp(o.newLineOrSpace,"g")," ").replace(new RegExp(o.pad+"|"+o.indent,"g"),"");return t.length<=n.inlineCharacterLimit?t:e.replace(new RegExp(o.newLine+"|"+o.newLineOrSpace,"g"),"\n").replace(new RegExp(o.pad,"g"),s).replace(new RegExp(o.indent,"g"),s+n.indent)};if(-1!==c.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||a(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";c.push(t);const a="["+o.newLine+t.map((a,r)=>{const i=t.length-1===r?o.newLine:","+o.newLineOrSpace;let c=e(a,n,s+n.indent);return n.transform&&(c=n.transform(t,r,c)),o.indent+c+i}).join("")+o.pad+"]";return c.pop(),l(a)}if(r(t)){let a=Object.keys(t).concat(i(t));if(n.filter&&(a=a.filter(e=>n.filter(t,e))),0===a.length)return"{}";c.push(t);const r="{"+o.newLine+a.map((r,i)=>{const c=a.length-1===i?o.newLine:","+o.newLineOrSpace,l="symbol"===typeof r,u=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(r),p=l||u?r:e(r,n);let d=e(t[r],n,s+n.indent);return n.transform&&(d=n.transform(t,r,d)),o.indent+String(p)+": "+d+c}).join("")+o.pad+"}";return c.pop(),l(r)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===n.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,n)}},"Ca+n":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("q1tI"),r=n.n(a),i=n("S5AU"),c=n.n(i),s=n("iuhU"),o=r.a.createElement,l=["","sm:","md:","lg:","xl:"];function u(e){var t=e.children,n=e.active,a=e.onClick;return o("button",{type:"button",className:Object(s.a)("inline-block text-center cursor-pointer select-none px-3",{"text-gray-800":n,"text-gray-500":!n}),onClick:a},t)}var p=function(e){return'<div class="'.concat(e,'"></div>')};function d(e){var t=e.classNames,n=e.snippet,r=void 0===n?p:n,i=e.preview,d=e.previewClassName,m=Array.isArray(t[0])?t.length:1,f=Object(a.useState)(0),g=f[0],b=f[1];return o("div",{className:"mt-8"},o("div",{className:"flex justify-center"},o("div",{className:"grid grid-cols-5 mb-2 bg-white"},o(u,{active:0===g,onClick:function(){return b(0)}},o("svg",{width:"8.57142857142857",height:"24",viewBox:"0 0 10 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"all")),o(u,{active:1===g,onClick:function(){return b(1)}},o("svg",{width:"11.999999999999998",height:"24",viewBox:"0 0 14 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"sm")),o(u,{active:2===g,onClick:function(){return b(2)}},o("svg",{width:"22.28571428571428",height:"24",viewBox:"0 0 26 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"md")),o(u,{active:3===g,onClick:function(){return b(3)}},o("svg",{width:"32.57142857142856",height:"24",viewBox:"0 0 38 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"lg")),o(u,{active:4===g,onClick:function(){return b(4)}},o("svg",{width:"30.85714285714285",height:"24",viewBox:"0 0 36 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"})),o("p",{className:"text-xs"},"xl")))),o("div",{className:"overflow-hidden mb-8"},o("div",{className:"rounded-t-lg bg-gray-800 border-b border-gray-300 whitespace-pre font-mono text-gray-500 text-sm"},o("pre",{className:"scrollbar-none m-0 p-0 overflow-auto scrolling-touch"},o("code",{className:"inline-block p-4"},c()(r(1===m?"{{CLASSNAMES}}":Array.from({length:m}).map((function(e,t){return"{{CLASSNAMES[".concat(t,"]}}")})))).trim().split(/(\{\{CLASSNAMES(?:\[[0-9]+\])?\}\})/).flatMap((function(e,n){if(n%2===1){var a=e.match(/\[([0-9]+)\]/);return(a?t[parseInt(a[1],10)]:t).map((function(e,t){return e?o("span",{key:"".concat(n,"-").concat(t),className:g===t?"text-code-yellow":""},0===t?"":" ",e.replace(/\(([^)]+)\)/g,"").trim().split(/\s+/).map((function(e){return"".concat(l[t]).concat(e)})).join(" ")):null})).filter(Boolean)}return e}))))),o("div",{className:Object(s.a)("rounded-b-lg border-l border-r border-b border-gray-400 bg-white",d,{"p-4":!d})},i(function(e){if(m>1)return t.map((function(t){for(var n=e;n>=0;n--)if(t[n])return t[n].replace(/\(([^)]+)\)/g,"$1")}));for(var n=e;n>=0;n--)if(t[n])return t[n].replace(/\(([^)]+)\)/g,"$1")}(g)))))}},DVEO:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:e,e:t,theme:n,variants:a}){e(r.default.fromPairs(r.default.map(n("maxWidth"),(e,n)=>[`.${t(`max-w-${n}`)}`,{"max-width":e}])),a("maxWidth"))}};var a,r=(a=n("LvDl"))&&a.__esModule?a:{default:a}},GAX2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},"IBu/":function(e,t,n){"use strict";const a=n("sQdO");e.exports=e=>{const t=a(e);if(0===t)return e;const n=new RegExp(`^[ \\t]{${t}}`,"gm");return e.replace(n,"")}},Qtp6:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/max-width",function(){return n("rOsi")}])},S5AU:function(e,t,n){"use strict";const a=n("IBu/"),r=n("S6im");e.exports=(e,t=0,n)=>r(a(e),t,n)},S6im:function(e,t,n){"use strict";e.exports=(e,t=1,n)=>{if(n={indent:" ",includeEmptyLines:!1,...n},"string"!==typeof e)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);if("number"!==typeof t)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);if("string"!==typeof n.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof n.indent}\``);if(0===t)return e;const a=n.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return e.replace(a,n.indent.repeat(t))}},YuTi:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},Zb5r:function(e,t,n){"use strict";function a(e){return e.reduce((function(t,n,a){return 0===a?n:a===e.length-1?"".concat(t," and ").concat(n):"".concat(t,", ").concat(n)}),"")}n.d(t,"a",(function(){return a}))},"p+I8":function(e,t,n){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},pOT7:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("q1tI"),r=n.n(a),i=n("iuhU"),c=r.a.createElement;function s(e){var t=e.preview,n=e.snippet,a=e.previewClassName;return c("div",{className:"relative overflow-hidden mb-8"},c("div",{className:Object(i.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",a,{"p-4":!a}),dangerouslySetInnerHTML:{__html:t}}),c("div",{className:"rounded-b-lg bg-gray-800"},c("pre",{className:"scrollbar-none m-0 p-0 language-html"},c("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:n}}))))}},rOsi:function(e,t,n){"use strict";n.r(t),n.d(t,"Layout",(function(){return w})),n.d(t,"classes",(function(){return O})),n.d(t,"meta",(function(){return x})),n.d(t,"tableOfContents",(function(){return j})),n.d(t,"default",(function(){return k}));var a=n("wx14"),r=n("Ff2n"),i=n("q1tI"),c=n.n(i),s=n("7ljp"),o=n("YFqc"),l=n.n(o),u=n("tc9R"),p=n("pOT7"),d=n("vRWG"),m=n("I6Nb"),f=n("DVEO"),g=n.n(f),b=n("8C7G"),h=n("wH44"),v=n("Ca+n"),w=(c.a.createElement,d.DocumentationLayout),O={plugin:g.a},x={title:"Max-Width",description:"Utilities for setting the maximum width of an element"},j=[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Max-Width Scale",slug:"max-width-scale"},{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],y={Layout:w,classes:O,meta:x,tableOfContents:j},N=m.ContentsLayout;function k(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.a)(N,Object(a.a)({},y,n,{components:t,mdxType:"MDXLayout"}),Object(s.a)(u.a,{level:2,id:"usage",toc:!0},"Usage"),Object(s.a)("p",null,"Set the maximum width of an element using the ",Object(s.a)("inlineCode",{parentName:"p"},"max-w-{size}")," utilities."),Object(s.a)(p.a,{preview:'\n  <div class="max-w-md mx-auto text-center p-6 bg-gray-300">\n    max-w-md\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>max-w-md mx-auto ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  max-w-md\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(s.a)("hr",null),Object(s.a)(u.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(s.a)("p",null,"To control the max-width of an element at a specific breakpoint, add a ",Object(s.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing max-width utility."),Object(s.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(s.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(s.a)("a",null,"Responsive Design"))," documentation."),Object(s.a)(v.a,{classNames:["max-w-sm","max-w-md","max-w-lg","max-w-xl","max-w-2xl"],snippet:function(e){return'\n    <div class="'.concat(e,' ...">\n      Target\n    </div>\n  ')},preview:function(e){return Object(s.a)("div",{className:"mx-auto text-center p-6 bg-gray-300 ".concat(e)},"Target")},mdxType:"ResponsiveCodeSample"}),Object(s.a)("hr",null),Object(s.a)(u.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(s.a)(u.a,{level:3,id:"max-width-scale",toc:!0},"Max-Width Scale"),Object(s.a)("p",null,"Customize Tailwind's default max-width scale in the ",Object(s.a)("inlineCode",{parentName:"p"},"theme.maxWidth")," section of your ",Object(s.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),Object(s.a)("pre",{className:"language-diff"},Object(s.a)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),Object(s.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(s.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(s.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(s.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(s.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     maxWidth: {\n"),Object(s.a)("span",Object(a.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(s.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       '1/4': '25%',\n",Object(s.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       '1/2': '50%',\n",Object(s.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       '3/4': '75%',\n"),Object(s.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(s.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(s.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(s.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(s.a)("p",null,"Learn more about customizing the default theme in the ",Object(s.a)(l.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(s.a)("a",null,"theme customization documentation")),"."),Object(s.a)(u.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(s.a)(b.a,{plugin:"maxWidth",name:"max-width",mdxType:"Variants"}),Object(s.a)(u.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(s.a)(h.a,{plugin:"maxWidth",name:"max-width",mdxType:"Disabling"}))}k.isMDXComponent=!0,k.layoutProps=y},sQdO:function(e,t,n){"use strict";e.exports=e=>{const t=e.match(/^[ \t]*(?=\S)/gm);return t?t.reduce((e,t)=>Math.min(e,t.length),1/0):0}},wH44:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("rePB"),r=n("q1tI"),i=n.n(r),c=n("AOjV"),s=n("AI3G"),o=n("Zb5r"),l=i.a.createElement;function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){var t=e.plugin,n=e.name,r=Object(s.a)(t);return n=n||t.replace(/([a-z])([A-Z])/g,(function(e,t,n){return"".concat(t," ").concat(n.toLowerCase())})),l(i.a.Fragment,null,l("p",null,"If you don't plan to use the ",n," utilities in your project, you can disable them entirely by setting the"," ",l("span",{dangerouslySetInnerHTML:{__html:Object(o.a)(r.map((function(e){return"<code>".concat(e,"</code>")})))}})," ",r.length>1?"properties":"property"," to ",l("code",null,"false")," in the"," ",l("code",null,"corePlugins")," section of your config file:"),l(c.a,{path:"corePlugins",before:"// ...",add:r.reduce((function(e,t){return p(p({},e),{},Object(a.a)({},t,!1))}),{})}))}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(a){"object"===typeof window&&(n=window)}e.exports=n}},[["Qtp6",0,2,5,1,3,4]]]);