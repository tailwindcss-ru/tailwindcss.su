(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[30],{"5xSE":function(e,t,a){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),s=a.n(n),c=a("98BF"),o=a("Zb5r"),r=a("AOjV"),i=s.a.createElement;function l(e){var{plugin:t,name:a}=e,n=c.defaultConfig.variants[t]||["responsive"];a=a||t.replace(/([a-z])([A-Z])/g,(e,t,a)=>"".concat(t," ").concat(a.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(e=>!n.includes(e)).slice(0,2),l="\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ".concat(n.length?"\u0442\u043e\u043b\u044c\u043a\u043e ".concat(Object(o.a)(n).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")):"\u043d\u0435\u0442"," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ").concat(a,".");return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:l}}),i("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",a," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",i("code",null,t)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",i("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",i("code",null,"tailwind.config.js"),"."),i("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",n.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(o.a)(s),":"),i(r.a,{path:"variants.extend",before:"...",add:{[t]:s}}))}},"9AdG":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:e,variants:t}){e({".bg-fixed":{"background-attachment":"fixed"},".bg-local":{"background-attachment":"local"},".bg-scroll":{"background-attachment":"scroll"}},t("backgroundAttachment"))}}},AOjV:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("q1tI"),s=a.n(n),c=(a("Btb4"),a("AI3G")),o=a("iuhU"),r=s.a.createElement;function i(e){var{value:t}=e;return"string"===typeof t?r("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?r(s.a.Fragment,null,r("span",{className:"token punctuation"},"["),t.map((e,a)=>r(n.Fragment,{key:a},r(i,{value:e}),a===t.length-1?null:r("span",{className:"token punctuation"},", "))),r("span",{className:"token punctuation"},"]")):"boolean"===typeof t?r("span",{className:"token boolean"},t.toString()):t.toString()}function l(e){var{edits:t,indent:a="",type:s="inserted"}=e;return r("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(t).map((e,c)=>{return r(n.Fragment,{key:c},r("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",a,/^[a-z_$][a-z0-9_$]*$/i.test(l=e)?l:"'".concat(l,"'"),r("span",{className:"token operator"},":")," ",r(i,{value:t[e]}),r("span",{className:"token punctuation"},","),"\n");var l}))}function p(e){var{path:t,add:a,remove:s,before:o,after:i}=e;return t="string"===typeof t?t.split("."):t,r("div",{className:"prose"},r("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},r("pre",{className:"language-diff"},r("code",{className:"language-diff"},r("span",{className:"token unchanged"},"  ",r("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",r("span",{className:"token punctuation"},"."),r("span",{className:"token property-access"},"exports")," ",r("span",{className:"token operator"},"=")," ",r("span",{className:"token punctuation"},"{"),"\n",t.map((e,t)=>r(n.Fragment,{key:t},"  ","  ".repeat(t+1),e,r("span",{className:"token operator"},":")," ",r("span",{className:"token punctuation"},"{"),"\n")),o&&Object(c.a)(o).map((e,a)=>r(n.Fragment,{key:a},"  ".repeat(t.length+2),r("span",{className:"token comment"},"// ".concat(e)),"\n"))),s&&r(l,{edits:s,type:"deleted",indent:"  ".repeat(t.length+1)}),a&&r(l,{edits:a,type:"inserted",indent:"  ".repeat(t.length+1)}),r("span",{className:"token unchanged"},i&&Object(c.a)(i).map(e=>"".concat("  ".repeat(t.length+2)).concat(e,"\n")),t.map((e,a)=>r(n.Fragment,{key:a},"  ","  ".repeat(t.length-a),"}\n")),"  }")))))}},Btb4:function(e,t,a){"use strict";const n=a("5xSE"),s=a("p+I8"),c=a("GAX2").default;e.exports=(e,t,a)=>{const o=[];return function e(t,a,r){let i;(a=a||{}).indent=a.indent||"\t",r=r||"",i=void 0===a.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:r,indent:r+a.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=e=>{if(void 0===a.inlineCharacterLimit)return e;const t=e.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return t.length<=a.inlineCharacterLimit?t:e.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),r).replace(new RegExp(i.indent,"g"),r+a.indent)};if(-1!==o.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||n(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";o.push(t);const n="["+i.newLine+t.map((n,s)=>{const c=t.length-1===s?i.newLine:","+i.newLineOrSpace;let o=e(n,a,r+a.indent);return a.transform&&(o=a.transform(t,s,o)),i.indent+o+c}).join("")+i.pad+"]";return o.pop(),l(n)}if(s(t)){let n=Object.keys(t).concat(c(t));if(a.filter&&(n=n.filter(e=>a.filter(t,e))),0===n.length)return"{}";o.push(t);const s="{"+i.newLine+n.map((s,c)=>{const o=n.length-1===c?i.newLine:","+i.newLineOrSpace,l="symbol"===typeof s,p=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=l||p?s:e(s,a);let d=e(t[s],a,r+a.indent);return a.transform&&(d=a.transform(t,s,d)),i.indent+String(u)+": "+d+o}).join("")+i.pad+"}";return o.pop(),l(s)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===a.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,a)}},GAX2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},KhL8:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/background-attachment",function(){return a("w7aB")}])},Zb5r:function(e,t,a){"use strict";function n(e){return e.reduce((t,a,n)=>0===n?a:n===e.length-1?"".concat(t," and ").concat(a):"".concat(t,", ").concat(a),"")}a.d(t,"a",(function(){return n}))},ap0H:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("q1tI"),s=a.n(n),c=a("8Kt/"),o=a.n(c),r=s.a.createElement;function i(e){var{suffix:t,children:a}=e,n=a+(t?" - ".concat(t):"");return r(o.a,null,r("title",{key:"title"},n),r("meta",{key:"twitter:title",name:"twitter:title",content:n}),r("meta",{key:"og:title",property:"og:title",content:n}))}},"p+I8":function(e,t,a){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},pOT7:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return f}));var n=a("wx14"),s=a("q1tI"),c=a.n(s),o=a("iuhU"),r=a("ZMKu"),i=c.a.createElement,l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},p={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function g(e){var t=Object(s.useRef)(),{0:a,1:c}=Object(s.useState)(!1),{0:o,1:r}=Object(s.useState)({});return Object(s.useEffect)(()=>{if(a){var e=new window.ResizeObserver(n);return n(),e.observe(t.current.contentDocument.body),()=>{e.disconnect()}}function n(){r({height:t.current.contentDocument.body.scrollHeight})}},[a]),i("iframe",Object(n.a)({},e,{ref:t,onLoad:()=>c(!0),style:o}))}function m(e){var{color:t,snippet:a}=e;return i("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",l[t],{"bg-gray-800":!l[t]})},i("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[t]})},i("code",{className:"language-html",dangerouslySetInnerHTML:{__html:a}})))}function b(e){var{preview:t,src:a,snippet:n,previewClassName:s,color:c="gray"}=e;return i("div",{className:"relative overflow-hidden mb-8"},t?i("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",p[c],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:t}}):i(g,{src:a,className:Object(o.a)("w-full rounded-t-xl",p[c])}),i(m,{color:c,snippet:n}))}function f(e){var{preview:t,src:a,previewClassName:n,snippet:c,color:l="gray",min:b=!1}=e,f=Object(s.useRef)(),h=Object(r.h)(0),v=Object(s.useRef)(),{0:k,1:O}=Object(s.useState)(!1);return Object(s.useEffect)(()=>{var e=new window.ResizeObserver(()=>{h.set(0)});return e.observe(f.current),()=>{e.disconnect()}},[]),i("div",{className:"relative mb-8"},i("div",{ref:f,className:"relative rounded-t-xl ".concat(u[l])},i("div",{className:b?"md:w-88":void 0},i(r.d.div,{className:"relative",style:{marginRight:Object(r.i)(h,e=>-e)}},t?i("div",{className:Object(o.a)("rounded-t-xl",n,p[l],{"p-10":!n}),dangerouslySetInnerHTML:{__html:t}}):i(g,{src:a,className:Object(o.a)("w-full rounded-t-xl",p[l],{"pointer-events-none":k})}))),i("div",{ref:v,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},i(r.d.div,{drag:"x",_dragX:h,dragMomentum:!1,dragElastic:0,dragConstraints:v,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(b?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:h},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),O(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),O(!1)}},i("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},i("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[l]),style:{width:"0.4375rem"}},i("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),i(m,{color:l,snippet:c}))}},vRWG:function(e,t,a){"use strict";a.r(t),a.d(t,"DocumentationLayout",(function(){return g}));var n=a("wx14"),s=a("q1tI"),c=a.n(s),o=a("ekQu"),r=a("8Kt/"),i=a.n(r),l=a("nOHt"),p=a("ap0H"),u=a("1Q1k"),d=c.a.createElement;function g(e){var t=Object(l.useRouter)();return d(c.a.Fragment,null,d(p.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),d(i.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.su".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(o.b,Object(n.a)({nav:u.a},e)))}},w7aB:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var n=a("wx14"),s=a("Ff2n"),c=a("q1tI"),o=a.n(c),r=a("7ljp"),i=a("YFqc"),l=a.n(i),p=a("tc9R"),u=a("pOT7"),d=a("vRWG"),g=a("I6Nb"),m=a("9AdG"),b=a.n(m),f=a("8C7G"),h=a("wH44"),v=(o.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:b()},meta:{title:"Background Attachment",description:"Utilities for controlling how a background image behaves when scrolling.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},tableOfContents:[{title:"Fixed",slug:"fixed",children:[]},{title:"Local",slug:"local",children:[]},{title:"Scroll",slug:"scroll",children:[]},{title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",slug:"adaptivnost",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]}),k=g.ContentsLayout;function O(e){var{components:t}=e,a=Object(s.a)(e,["components"]);return Object(r.a)(k,Object(n.a)({},v,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("div",{className:"prose"},Object(r.a)(p.a,{level:2,id:"fixed",toc:!0},"Fixed"),Object(r.a)("p",null,"Use ",Object(r.a)("inlineCode",{parentName:"p"},"bg-fixed")," to fix the background image relative to the viewport.")),Object(r.a)(u.a,{preview:'\n  <div class="w-full h-48 bg-fixed bg-contain bg-center overflow-y-scroll" style="background-image:url(\'/img/placeholder-light-blue.svg\');">\n    <div class="h-64"></div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">bg-fixed</span> ...<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(p.a,{level:2,id:"local",toc:!0},"Local"),Object(r.a)("p",null,"Use ",Object(r.a)("inlineCode",{parentName:"p"},"bg-local")," to scroll the background image with the container and the viewport.")),Object(r.a)(u.a,{preview:'\n  <div class="w-full h-72 bg-local bg-cover bg-center overflow-y-scroll" style="background-image:url(\'/img/placeholder-indigo.svg\');">\n    <div class="h-96"></div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">bg-local</span> ...<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(p.a,{level:2,id:"scroll",toc:!0},"Scroll"),Object(r.a)("p",null,"Use ",Object(r.a)("inlineCode",{parentName:"p"},"bg-scroll")," to scroll the background image with the viewport, but not with the container.")),Object(r.a)(u.a,{preview:'\n  <div class="w-full h-72 bg-scroll bg-cover overflow-y-scroll" style="background-image:url(\'/img/placeholder-fuchsia.svg\');">\n    <div class="h-96"></div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">bg-scroll</span> ...<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"fuchsia",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(p.a,{level:2,id:"adaptivnost",toc:!0},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),Object(r.a)("p",null,"To control the background attachment of an element at a specific breakpoint, add a ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing background attachment utility. For example, use ",Object(r.a)("inlineCode",{parentName:"p"},"md:bg-fixed")," to apply the ",Object(r.a)("inlineCode",{parentName:"p"},"bg-fixed")," utility at only medium screen sizes and above."),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"bg-local ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:bg-fixed")," ...",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 Tailwind \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 ",Object(r.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(r.a)("a",null,"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430")),"."),Object(r.a)(p.a,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),Object(r.a)(p.a,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),Object(r.a)(f.a,{plugin:"backgroundAttachment",mdxType:"Variants"}),Object(r.a)("div",{className:"prose"},Object(r.a)(p.a,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),Object(r.a)(h.a,{plugin:"backgroundAttachment",mdxType:"Disabling"}))}O.isMDXComponent=!0,O.layoutProps=v},wH44:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("rePB"),s=a("q1tI"),c=a.n(s),o=a("AOjV"),r=a("AI3G"),i=a("Zb5r"),l=c.a.createElement;function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e){var{plugin:t,name:a}=e,n=Object(r.a)(t);return a=a||t.replace(/([a-z])([A-Z])/g,(e,t,a)=>"".concat(t," ").concat(a.toLowerCase())),l("div",{className:"prose"},l("p",null,"\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",a,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",l("span",{dangerouslySetInnerHTML:{__html:Object(i.a)(n.map(e=>"<code>".concat(e,"</code>")))}})," ",n.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",l("code",null,"false")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",l("code",null,"corePlugins")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"),l(o.a,{path:"corePlugins",before:"...",add:n.reduce((e,t)=>u(u({},e),{},{[t]:!1}),{})}))}}},[["KhL8",0,2,6,1,3,4,5,7]]]);