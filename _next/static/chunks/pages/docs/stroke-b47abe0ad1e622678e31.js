_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[151],{"5xSE":function(n,e,t){"use strict";n.exports=function(n){return"[object RegExp]"===Object.prototype.toString.call(n)}},"8C7G":function(n,e,t){"use strict";t.d(e,"a",(function(){return u}));var a=t("KQm4"),s=t("rePB"),c=t("q1tI"),o=t.n(c),r=t("98BF"),p=t("Zb5r"),i=t("AOjV"),l=o.a.createElement;function u(n){var e=n.plugin,t=n.name,c=r.defaultConfig.variants[e]||["responsive"];t=t||e.replace(/([a-z])([A-Z])/g,(function(n,e,t){return"".concat(e," ").concat(t.toLowerCase())}));var u=["responsive","hover","focus","active","group-hover"].filter((function(n){return!c.includes(n)})).slice(0,2);return l(o.a.Fragment,null,l("p",null,"By default, ",c.length?"only ".concat(Object(p.a)(c)):"no"," variants are generated for ",t," utilities."),l("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",l("code",null,e)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",c.length>0?"also ":"","generate"," ",Object(p.a)(u)," variants:"),l(i.a,{path:"variants",before:"// ...",remove:Object(s.a)({},e,c),add:Object(s.a)({},e,[].concat(Object(a.a)(c),Object(a.a)(u)))}))}},"9Jru":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(n){return(0,s.default)(n).flatMap((n,e)=>s.default.isFunction(n)||!s.default.isObject(n)?[[e,n]]:s.default.map(n,(n,t)=>{return[`${e}${"default"===t?"":`-${t}`}`,n]})).fromPairs().value()};var a,s=(a=t("LvDl"))&&a.__esModule?a:{default:a}},AOjV:function(n,e,t){"use strict";t.d(e,"a",(function(){return u}));var a=t("q1tI"),s=t.n(a),c=t("Btb4"),o=t.n(c),r=t("AI3G"),p=t("iuhU"),i=s.a.createElement;function l(n){var e=n.edits,t=n.indent,s=void 0===t?"":t,c=n.type,r=void 0===c?"inserted":c;return i("span",{className:Object(p.a)("token",{"inserted-sign inserted":"inserted"===r,"deleted-sign deleted":"inserted"!==r})},Object.keys(e).map((function(n,t){return i(a.Fragment,{key:t},i("span",{className:Object(p.a)("token prefix",{inserted:"inserted"===r,deleted:"inserted"!==r})},"inserted"===r?"+":"-")," ",s,/^[a-z_$][a-z0-9_$]*$/i.test(c=n)?c:"'".concat(c,"'"),":"," ",o()(e[n],{indent:"  "}).replace(/\[([^\]]+)\]/g,(function(n,e){return"[".concat(e.replace(/\n\s*/g," ").trim(),"]")})).split("\n").map((function(n,e){return"".concat(0===e?"":"+ "+s).concat(n)})).join("\n"),",\n");var c})))}function u(n){var e=n.path,t=n.add,s=n.remove,c=n.before,o=n.after;return e="string"===typeof e?e.split("."):e,i("pre",{className:"language-diff"},i("code",{className:"language-diff"},i("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",e.map((function(n,e){return i(a.Fragment,{key:e},"  ","  ".repeat(e+1),n,": ","{\n")})),c&&Object(r.a)(c).map((function(n){return"".concat("  ".repeat(e.length+2)).concat(n,"\n")}))),s&&i(l,{edits:s,type:"deleted",indent:"  ".repeat(e.length+1)}),t&&i(l,{edits:t,type:"inserted",indent:"  ".repeat(e.length+1)}),i("span",{className:"token unchanged"},o&&Object(r.a)(o).map((function(n){return"".concat("  ".repeat(e.length+2)).concat(n,"\n")})),e.map((function(n,t){return i(a.Fragment,{key:t},"  ","  ".repeat(e.length-t),"}\n")})),"  }")))}},Btb4:function(n,e,t){"use strict";const a=t("5xSE"),s=t("p+I8"),c=t("GAX2").default;n.exports=(n,e,t)=>{const o=[];return function n(e,t,r){let p;(t=t||{}).indent=t.indent||"\t",r=r||"",p=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:r,indent:r+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const i=n=>{if(void 0===t.inlineCharacterLimit)return n;const e=n.replace(new RegExp(p.newLine,"g"),"").replace(new RegExp(p.newLineOrSpace,"g")," ").replace(new RegExp(p.pad+"|"+p.indent,"g"),"");return e.length<=t.inlineCharacterLimit?e:n.replace(new RegExp(p.newLine+"|"+p.newLineOrSpace,"g"),"\n").replace(new RegExp(p.pad,"g"),r).replace(new RegExp(p.indent,"g"),r+t.indent)};if(-1!==o.indexOf(e))return'"[Circular]"';if(null===e||void 0===e||"number"===typeof e||"boolean"===typeof e||"function"===typeof e||"symbol"===typeof e||a(e))return String(e);if(e instanceof Date)return`new Date('${e.toISOString()}')`;if(Array.isArray(e)){if(0===e.length)return"[]";o.push(e);const a="["+p.newLine+e.map((a,s)=>{const c=e.length-1===s?p.newLine:","+p.newLineOrSpace;let o=n(a,t,r+t.indent);return t.transform&&(o=t.transform(e,s,o)),p.indent+o+c}).join("")+p.pad+"]";return o.pop(),i(a)}if(s(e)){let a=Object.keys(e).concat(c(e));if(t.filter&&(a=a.filter(n=>t.filter(e,n))),0===a.length)return"{}";o.push(e);const s="{"+p.newLine+a.map((s,c)=>{const o=a.length-1===c?p.newLine:","+p.newLineOrSpace,i="symbol"===typeof s,l=!i&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=i||l?s:n(s,t);let d=n(e[s],t,r+t.indent);return t.transform&&(d=t.transform(e,s,d)),p.indent+String(u)+": "+d+o}).join("")+p.pad+"}";return o.pop(),i(s)}return e=String(e).replace(/[\r\n]/g,n=>"\n"===n?"\\n":"\\r"),!1===t.singleQuotes?`"${e=e.replace(/"/g,'\\"')}"`:`'${e=e.replace(/\\?'/g,"\\'")}'`}(n,e,t)}},EiYB:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/stroke",function(){return t("ptxX")}])},GAX2:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=n=>Object.getOwnPropertySymbols(n).filter(e=>Object.prototype.propertyIsEnumerable.call(n,e))},YuTi:function(n,e){n.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),n.webpackPolyfill=1),n}},Zb5r:function(n,e,t){"use strict";function a(n){return n.reduce((function(e,t,a){return 0===a?t:a===n.length-1?"".concat(e," and ").concat(t):"".concat(e,", ").concat(t)}),"")}t.d(e,"a",(function(){return a}))},"p+I8":function(n,e,t){"use strict";n.exports=function(n){var e=typeof n;return null!==n&&("object"===e||"function"===e)}},pOT7:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var a=t("q1tI"),s=t.n(a),c=t("iuhU"),o=s.a.createElement;function r(n){var e=n.preview,t=n.snippet,a=n.previewClassName;return o("div",{className:"relative overflow-hidden mb-8"},o("div",{className:Object(c.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",a,{"p-4":!a}),dangerouslySetInnerHTML:{__html:e}}),o("div",{className:"rounded-b-lg bg-gray-800"},o("pre",{className:"scrollbar-none m-0 p-0 language-html"},o("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:t}}))))}},ptxX:function(n,e,t){"use strict";t.r(e),t.d(e,"Layout",(function(){return O})),t.d(e,"classes",(function(){return j})),t.d(e,"meta",(function(){return h})),t.d(e,"tableOfContents",(function(){return v})),t.d(e,"default",(function(){return N}));var a=t("wx14"),s=t("Ff2n"),c=t("q1tI"),o=t.n(c),r=t("7ljp"),p=t("YFqc"),i=t.n(p),l=t("tc9R"),u=t("pOT7"),d=t("vRWG"),f=t("I6Nb"),m=t("tpGF"),g=t.n(m),k=t("8C7G"),b=t("wH44"),O=(o.a.createElement,d.DocumentationLayout),j={plugin:g.a},h={title:"Stroke",description:"Utilities for styling the stroke of SVG elements."},v=[{title:"Usage",slug:"usage",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],y={Layout:O,classes:j,meta:h,tableOfContents:v},w=f.ContentsLayout;function N(n){var e=n.components,t=Object(s.a)(n,["components"]);return Object(r.a)(w,Object(a.a)({},y,t,{components:e,mdxType:"MDXLayout"}),Object(r.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(r.a)("p",null,"Use ",Object(r.a)("inlineCode",{parentName:"p"},".stroke-current")," to set the stroke color of an SVG to the current text color. This makes it easy to set an element's stroke color by combining this class with an existing ",Object(r.a)(i.a,{href:"/docs/text-color",passHref:!0},Object(r.a)("a",null,"text color utility")),"."),Object(r.a)("p",null,"Useful for styling icon sets like ",Object(r.a)("a",Object(a.a)({parentName:"p"},{href:"https://feathericons.com/"}),"Feather")," that are drawn entirely with strokes."),Object(r.a)(u.a,{preview:'\n  <svg class="stroke-current text-purple-500 inline-block h-12 w-12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <circle cx="8" cy="21" r="2" />\n    <circle cx="20" cy="21" r="2" />\n    <path d="M5.67 6H23l-1.68 8.39a2 2 0 0 1-2 1.61H8.75a2 2 0 0 1-2-1.74L5.23 2.74A2 2 0 0 0 3.25 1H1" />\n  </svg>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stroke-current text-purple-500 inline-block h-12 w-12<span class="token punctuation">"</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0 0 24 24<span class="token punctuation">"</span></span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span> <span class="token attr-name">stroke-width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">stroke-linecap</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>round<span class="token punctuation">"</span></span> <span class="token attr-name">stroke-linejoin</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>round<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>8<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>21<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>21<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>M5.67 6H23l-1.68 8.39a2 2 0 0 1-2 1.61H8.75a2 2 0 0 1-2-1.74L5.23 2.74A2 2 0 0 0 3.25 1H1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>',previewClassName:"text-center p-4"}),Object(r.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(r.a)("p",null,"Control which stroke utilities Tailwind generates by customizing the ",Object(r.a)("inlineCode",{parentName:"p"},"theme.stroke")," section in your ",Object(r.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),Object(r.a)("pre",{className:"language-diff"},Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n"),Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token deleted-sign deleted"}),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"     stroke: {\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       current: 'currentColor',\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"     }\n"),Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     stroke: theme => ({\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       'red': theme('colors.red.500'),\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       'green': theme('colors.green.500'),\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       'blue': theme('colors.blue.500'),\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     })\n"),Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(r.a)(l.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(r.a)(k.a,{plugin:"stroke",mdxType:"Variants"}),Object(r.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(r.a)(b.a,{plugin:"stroke",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=y},tpGF:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return function({addUtilities:n,e:e,theme:t,variants:c}){const o=(0,s.default)(t("stroke"));n(a.default.fromPairs(a.default.map(o,(n,t)=>[`.${e(`stroke-${t}`)}`,{stroke:n}])),c("stroke"))}};var a=c(t("LvDl")),s=c(t("9Jru"));function c(n){return n&&n.__esModule?n:{default:n}}},wH44:function(n,e,t){"use strict";t.d(e,"a",(function(){return d}));var a=t("rePB"),s=t("q1tI"),c=t.n(s),o=t("AOjV"),r=t("AI3G"),p=t("Zb5r"),i=c.a.createElement;function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){Object(a.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function d(n){var e=n.plugin,t=n.name,s=Object(r.a)(e);return t=t||e.replace(/([a-z])([A-Z])/g,(function(n,e,t){return"".concat(e," ").concat(t.toLowerCase())})),i(c.a.Fragment,null,i("p",null,"If you don't plan to use the ",t," utilities in your project, you can disable them entirely by setting the"," ",i("span",{dangerouslySetInnerHTML:{__html:Object(p.a)(s.map((function(n){return"<code>".concat(n,"</code>")})))}})," ",s.length>1?"properties":"property"," to ",i("code",null,"false")," in the"," ",i("code",null,"corePlugins")," section of your config file:"),i(o.a,{path:"corePlugins",before:"// ...",add:s.reduce((function(n,e){return u(u({},n),{},Object(a.a)({},e,!1))}),{})}))}},yLpj:function(n,e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(a){"object"===typeof window&&(t=window)}n.exports=t}},[["EiYB",0,2,5,1,3,4]]]);