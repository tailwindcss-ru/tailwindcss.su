_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[160],{"+KAF":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/user-select",function(){return n("iyuR")}])},"5xSE":function(e,t,n){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("rePB"),s=n("q1tI"),r=n.n(s),c=n("98BF"),i=n("Zb5r"),o=n("AOjV"),l=r.a.createElement;function u(e){var t=e.plugin,n=e.name,s=c.defaultConfig.variants[t]||["responsive"];n=n||t.replace(/([a-z])([A-Z])/g,(function(e,t,n){return"".concat(t," ").concat(n.toLowerCase())}));var r=["responsive","hover","focus","active","group-hover"].filter((function(e){return!s.includes(e)})).slice(0,2),u="\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ".concat(s.length?"\u0442\u043e\u043b\u044c\u043a\u043e ".concat(Object(i.a)(s).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")):"\u043d\u0435\u0442"," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ").concat(n,".");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:u}}),l("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",n," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",l("code",null,t)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",l("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",l("code",null,"tailwind.config.js"),"."),l("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",s.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(i.a)(r),":"),l(o.a,{path:"variants.extend",before:"...",add:Object(a.a)({},t,r)}))}},AOjV:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("q1tI"),s=n.n(a),r=(n("Btb4"),n("AI3G")),c=n("iuhU"),i=s.a.createElement;function o(e){var t=e.value;return"string"===typeof t?i("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?i(s.a.Fragment,null,i("span",{className:"token punctuation"},"["),t.map((function(e,n){return i(a.Fragment,{key:n},i(o,{value:e}),n===t.length-1?null:i("span",{className:"token punctuation"},", "))})),i("span",{className:"token punctuation"},"]")):"boolean"===typeof t?i("span",{className:"token boolean"},t.toString()):t.toString()}function l(e){var t=e.edits,n=e.indent,s=void 0===n?"":n,r=e.type,l=void 0===r?"inserted":r;return i("span",{className:Object(c.a)("token",{"inserted-sign inserted":"inserted"===l,"deleted-sign deleted":"inserted"!==l})},Object.keys(t).map((function(e,n){return i(a.Fragment,{key:n},i("span",{className:Object(c.a)("token prefix",{inserted:"inserted"===l,deleted:"inserted"!==l})},"inserted"===l?"+":"-")," ",s,/^[a-z_$][a-z0-9_$]*$/i.test(r=e)?r:"'".concat(r,"'"),i("span",{className:"token operator"},":")," ",i(o,{value:t[e]}),i("span",{className:"token punctuation"},","),"\n");var r})))}function u(e){var t=e.path,n=e.add,s=e.remove,c=e.before,o=e.after;return t="string"===typeof t?t.split("."):t,i("div",{className:"prose"},i("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},i("pre",{className:"language-diff"},i("code",{className:"language-diff"},i("span",{className:"token unchanged"},"  ",i("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",i("span",{className:"token punctuation"},"."),i("span",{className:"token property-access"},"exports")," ",i("span",{className:"token operator"},"=")," ",i("span",{className:"token punctuation"},"{"),"\n",t.map((function(e,t){return i(a.Fragment,{key:t},"  ","  ".repeat(t+1),e,i("span",{className:"token operator"},":")," ",i("span",{className:"token punctuation"},"{"),"\n")})),c&&Object(r.a)(c).map((function(e,n){return i(a.Fragment,{key:n},"  ".repeat(t.length+2),i("span",{className:"token comment"},"// ".concat(e)),"\n")}))),s&&i(l,{edits:s,type:"deleted",indent:"  ".repeat(t.length+1)}),n&&i(l,{edits:n,type:"inserted",indent:"  ".repeat(t.length+1)}),i("span",{className:"token unchanged"},o&&Object(r.a)(o).map((function(e){return"".concat("  ".repeat(t.length+2)).concat(e,"\n")})),t.map((function(e,n){return i(a.Fragment,{key:n},"  ","  ".repeat(t.length-n),"}\n")})),"  }")))))}},Btb4:function(e,t,n){"use strict";const a=n("5xSE"),s=n("p+I8"),r=n("GAX2").default;e.exports=(e,t,n)=>{const c=[];return function e(t,n,i){let o;(n=n||{}).indent=n.indent||"\t",i=i||"",o=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:i,indent:i+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=e=>{if(void 0===n.inlineCharacterLimit)return e;const t=e.replace(new RegExp(o.newLine,"g"),"").replace(new RegExp(o.newLineOrSpace,"g")," ").replace(new RegExp(o.pad+"|"+o.indent,"g"),"");return t.length<=n.inlineCharacterLimit?t:e.replace(new RegExp(o.newLine+"|"+o.newLineOrSpace,"g"),"\n").replace(new RegExp(o.pad,"g"),i).replace(new RegExp(o.indent,"g"),i+n.indent)};if(-1!==c.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||a(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";c.push(t);const a="["+o.newLine+t.map((a,s)=>{const r=t.length-1===s?o.newLine:","+o.newLineOrSpace;let c=e(a,n,i+n.indent);return n.transform&&(c=n.transform(t,s,c)),o.indent+c+r}).join("")+o.pad+"]";return c.pop(),l(a)}if(s(t)){let a=Object.keys(t).concat(r(t));if(n.filter&&(a=a.filter(e=>n.filter(t,e))),0===a.length)return"{}";c.push(t);const s="{"+o.newLine+a.map((s,r)=>{const c=a.length-1===r?o.newLine:","+o.newLineOrSpace,l="symbol"===typeof s,u=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(s),p=l||u?s:e(s,n);let d=e(t[s],n,i+n.indent);return n.transform&&(d=n.transform(t,s,d)),o.indent+String(p)+": "+d+c}).join("")+o.pad+"}";return c.pop(),l(s)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===n.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,n)}},GAX2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},NOoR:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:e,variants:t}){e({".select-none":{"user-select":"none"},".select-text":{"user-select":"text"},".select-all":{"user-select":"all"},".select-auto":{"user-select":"auto"}},t("userSelect"))}}},Zb5r:function(e,t,n){"use strict";function a(e){return e.reduce((function(t,n,a){return 0===a?n:a===e.length-1?"".concat(t," \u0438 ").concat(n):"".concat(t,", ").concat(n)}),"")}n.d(t,"a",(function(){return a}))},ap0H:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI"),s=n.n(a),r=n("8Kt/"),c=n.n(r),i=s.a.createElement;function o(e){var t=e.suffix,n=e.children+(t?" - ".concat(t):"");return i(c.a,null,i("title",{key:"title"},n),i("meta",{key:"twitter:title",name:"twitter:title",content:n}),i("meta",{key:"og:title",property:"og:title",content:n}))}},iyuR:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var a=n("wx14"),s=n("Ff2n"),r=n("q1tI"),c=n.n(r),i=n("7ljp"),o=(n("YFqc"),n("tc9R")),l=n("pOT7"),u=n("vRWG"),p=n("I6Nb"),d=n("NOoR"),g=n.n(d),m=n("8C7G"),b=n("wH44"),f=(c.a.createElement,{Layout:u.DocumentationLayout,classes:{plugin:g.a},meta:{title:"User Select",description:"Utilities for controlling whether the user can select text in an element.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},tableOfContents:[{title:"Disable selecting text",slug:"disable-selecting-text",children:[]},{title:"Allow selecting text",slug:"allow-selecting-text",children:[]},{title:"Select all text in one click",slug:"select-all-text-in-one-click",children:[]},{title:"Auto",slug:"auto",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]}),v=p.ContentsLayout;function h(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(i.a)(v,Object(a.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("div",{className:"prose"},Object(i.a)(o.a,{level:2,id:"disable-selecting-text",toc:!0},"Disable selecting text"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},"select-none")," to prevent selecting text in an element and its children.")),Object(i.a)(l.a,{preview:'\n  <div class="mx-auto max-w-sm bg-amber-200 p-2 select-none text-center">\n    This text is not selectable\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">select-none</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  This text is not selectable\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"amber",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(o.a,{level:2,id:"allow-selecting-text",toc:!0},"Allow selecting text"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},"select-text")," to allow selecting text in an element and its children.")),Object(i.a)(l.a,{preview:'\n  <div class="mx-auto max-w-sm bg-emerald-200 p-2 select-text text-center">\n    This text is selectable\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">select-text</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  This text is selectable\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(o.a,{level:2,id:"select-all-text-in-one-click",toc:!0},"Select all text in one click"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},"select-all")," to automatically select all the text in an element when a user clicks.")),Object(i.a)(l.a,{preview:'\n  <div class="mx-auto max-w-sm bg-fuchsia-200 p-2 select-all text-center">\n    Click anywhere in this text to select it all\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">select-all</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Click anywhere in this text to select it all\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"fuchsia",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(o.a,{level:2,id:"auto",toc:!0},"Auto"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},"select-auto")," to use the default browser behavior for selecting text. Useful for undoing other classes like ",Object(i.a)("inlineCode",{parentName:"p"},".select-none")," at different breakpoints.")),Object(i.a)(l.a,{preview:'\n  <div class="mx-auto max-w-sm bg-light-blue-200 p-2 select-auto text-center">\n    This text is selectable\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">select-auto</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  This text is selectable\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(o.a,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),Object(i.a)(o.a,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),Object(i.a)(m.a,{plugin:"userSelect",name:"user-select",mdxType:"Variants"}),Object(i.a)("div",{className:"prose"},Object(i.a)(o.a,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),Object(i.a)(b.a,{plugin:"userSelect",name:"user-select",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=f},"p+I8":function(e,t,n){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},pOT7:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n("wx14"),s=n("q1tI"),r=n.n(s),c=n("iuhU"),i=n("ZMKu"),o=r.a.createElement,l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},u={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},p={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function g(e){var t=Object(s.useRef)(),n=Object(s.useState)(!1),r=n[0],c=n[1],i=Object(s.useState)({}),l=i[0],u=i[1];return Object(s.useEffect)((function(){if(r){var e=new window.ResizeObserver(n);return n(),e.observe(t.current.contentDocument.body),function(){e.disconnect()}}function n(){u({height:t.current.contentDocument.body.scrollHeight})}}),[r]),o("iframe",Object(a.a)({},e,{ref:t,onLoad:function(){return c(!0)},style:l}))}function m(e){var t=e.color,n=e.snippet;return o("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",l[t],{"bg-gray-800":!l[t]})},o("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[t]})},o("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}})))}function b(e){var t=e.preview,n=e.src,a=e.snippet,s=e.previewClassName,r=e.color,i=void 0===r?"gray":r;return o("div",{className:"relative overflow-hidden mb-8"},t?o("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",u[i],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:t}}):o(g,{src:n,className:Object(c.a)("w-full rounded-t-xl",u[i])}),o(m,{color:i,snippet:a}))}function f(e){var t=e.preview,n=e.src,a=e.previewClassName,r=e.snippet,l=e.color,b=void 0===l?"gray":l,f=e.min,v=void 0!==f&&f,h=Object(s.useRef)(),O=Object(i.h)(0),k=Object(s.useRef)(),w=Object(s.useState)(!1),y=w[0],j=w[1];return Object(s.useEffect)((function(){var e=new window.ResizeObserver((function(){O.set(0)}));return e.observe(h.current),function(){e.disconnect()}}),[]),o("div",{className:"relative mb-8"},o("div",{ref:h,className:"relative rounded-t-xl ".concat(p[b])},o("div",{className:v?"md:w-88":void 0},o(i.d.div,{className:"relative",style:{marginRight:Object(i.i)(O,(function(e){return-e}))}},t?o("div",{className:Object(c.a)("rounded-t-xl",a,u[b],{"p-10":!a}),dangerouslySetInnerHTML:{__html:t}}):o(g,{src:n,className:Object(c.a)("w-full rounded-t-xl",u[b],{"pointer-events-none":y})}))),o("div",{ref:k,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},o(i.d.div,{drag:"x",_dragX:O,dragMomentum:!1,dragElastic:0,dragConstraints:k,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(v?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:O},onDragStart:function(){document.body.classList.add("cursor-grabbing"),j(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),j(!1)}},o("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},o("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[b]),style:{width:"0.4375rem"}},o("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),o(m,{color:b,snippet:r}))}},vRWG:function(e,t,n){"use strict";n.r(t),n.d(t,"DocumentationLayout",(function(){return g}));var a=n("wx14"),s=n("q1tI"),r=n.n(s),c=n("ekQu"),i=n("8Kt/"),o=n.n(i),l=n("nOHt"),u=n("ap0H"),p=n("1Q1k"),d=r.a.createElement;function g(e){var t=Object(l.useRouter)();return d(r.a.Fragment,null,d(u.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),d(o.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.su".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(c.b,Object(a.a)({nav:p.a},e)))}},wH44:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("rePB"),s=n("q1tI"),r=n.n(s),c=n("AOjV"),i=n("AI3G"),o=n("Zb5r"),l=r.a.createElement;function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){var t=e.plugin,n=e.name,s=Object(i.a)(t);return n=n||t.replace(/([a-z])([A-Z])/g,(function(e,t,n){return"".concat(t," ").concat(n.toLowerCase())})),l("div",{className:"prose"},l("p",null,"\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",n,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",l("span",{dangerouslySetInnerHTML:{__html:Object(o.a)(s.map((function(e){return"<code>".concat(e,"</code>")})))}})," ",s.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",l("code",null,"false")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",l("code",null,"corePlugins")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"),l(c.a,{path:"corePlugins",before:"...",add:s.reduce((function(e,t){return p(p({},e),{},Object(a.a)({},t,!1))}),{})}))}}},[["+KAF",0,2,6,1,3,4,5,7]]]);