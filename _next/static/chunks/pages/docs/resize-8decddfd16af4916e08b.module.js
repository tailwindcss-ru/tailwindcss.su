(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[128],{"/WC5":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:e,variants:t}){e({".resize-none":{resize:"none"},".resize-y":{resize:"vertical"},".resize-x":{resize:"horizontal"},".resize":{resize:"both"}},t("resize"))}}},"5xSE":function(e,t,n){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI"),s=n.n(a),r=n("98BF"),o=n("Zb5r"),i=n("AOjV"),c=s.a.createElement;function l(e){var{plugin:t,name:n}=e,a=r.defaultConfig.variants[t]||["responsive"];n=n||t.replace(/([a-z])([A-Z])/g,(e,t,n)=>"".concat(t," ").concat(n.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(e=>!a.includes(e)).slice(0,2),l="\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ".concat(a.length?"\u0442\u043e\u043b\u044c\u043a\u043e ".concat(Object(o.a)(a).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")):"\u043d\u0435\u0442"," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ").concat(n,".");return c("div",{className:"prose"},c("p",{dangerouslySetInnerHTML:{__html:l}}),c("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",n," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",c("code",null,t)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",c("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",c("code",null,"tailwind.config.js"),"."),c("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",a.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(o.a)(s),":"),c(i.a,{path:"variants.extend",before:"...",add:{[t]:s}}))}},AOjV:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("q1tI"),s=n.n(a),r=(n("Btb4"),n("AI3G")),o=n("iuhU"),i=s.a.createElement;function c(e){var{value:t}=e;return"string"===typeof t?i("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?i(s.a.Fragment,null,i("span",{className:"token punctuation"},"["),t.map((e,n)=>i(a.Fragment,{key:n},i(c,{value:e}),n===t.length-1?null:i("span",{className:"token punctuation"},", "))),i("span",{className:"token punctuation"},"]")):"boolean"===typeof t?i("span",{className:"token boolean"},t.toString()):t.toString()}function l(e){var{edits:t,indent:n="",type:s="inserted"}=e;return i("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(t).map((e,r)=>{return i(a.Fragment,{key:r},i("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",n,/^[a-z_$][a-z0-9_$]*$/i.test(l=e)?l:"'".concat(l,"'"),i("span",{className:"token operator"},":")," ",i(c,{value:t[e]}),i("span",{className:"token punctuation"},","),"\n");var l}))}function p(e){var{path:t,add:n,remove:s,before:o,after:c}=e;return t="string"===typeof t?t.split("."):t,i("div",{className:"prose"},i("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},i("pre",{className:"language-diff"},i("code",{className:"language-diff"},i("span",{className:"token unchanged"},"  ",i("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",i("span",{className:"token punctuation"},"."),i("span",{className:"token property-access"},"exports")," ",i("span",{className:"token operator"},"=")," ",i("span",{className:"token punctuation"},"{"),"\n",t.map((e,t)=>i(a.Fragment,{key:t},"  ","  ".repeat(t+1),e,i("span",{className:"token operator"},":")," ",i("span",{className:"token punctuation"},"{"),"\n")),o&&Object(r.a)(o).map((e,n)=>i(a.Fragment,{key:n},"  ".repeat(t.length+2),i("span",{className:"token comment"},"// ".concat(e)),"\n"))),s&&i(l,{edits:s,type:"deleted",indent:"  ".repeat(t.length+1)}),n&&i(l,{edits:n,type:"inserted",indent:"  ".repeat(t.length+1)}),i("span",{className:"token unchanged"},c&&Object(r.a)(c).map(e=>"".concat("  ".repeat(t.length+2)).concat(e,"\n")),t.map((e,n)=>i(a.Fragment,{key:n},"  ","  ".repeat(t.length-n),"}\n")),"  }")))))}},Btb4:function(e,t,n){"use strict";const a=n("5xSE"),s=n("p+I8"),r=n("GAX2").default;e.exports=(e,t,n)=>{const o=[];return function e(t,n,i){let c;(n=n||{}).indent=n.indent||"\t",i=i||"",c=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:i,indent:i+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=e=>{if(void 0===n.inlineCharacterLimit)return e;const t=e.replace(new RegExp(c.newLine,"g"),"").replace(new RegExp(c.newLineOrSpace,"g")," ").replace(new RegExp(c.pad+"|"+c.indent,"g"),"");return t.length<=n.inlineCharacterLimit?t:e.replace(new RegExp(c.newLine+"|"+c.newLineOrSpace,"g"),"\n").replace(new RegExp(c.pad,"g"),i).replace(new RegExp(c.indent,"g"),i+n.indent)};if(-1!==o.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||a(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";o.push(t);const a="["+c.newLine+t.map((a,s)=>{const r=t.length-1===s?c.newLine:","+c.newLineOrSpace;let o=e(a,n,i+n.indent);return n.transform&&(o=n.transform(t,s,o)),c.indent+o+r}).join("")+c.pad+"]";return o.pop(),l(a)}if(s(t)){let a=Object.keys(t).concat(r(t));if(n.filter&&(a=a.filter(e=>n.filter(t,e))),0===a.length)return"{}";o.push(t);const s="{"+c.newLine+a.map((s,r)=>{const o=a.length-1===r?c.newLine:","+c.newLineOrSpace,l="symbol"===typeof s,p=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=l||p?s:e(s,n);let d=e(t[s],n,i+n.indent);return n.transform&&(d=n.transform(t,s,d)),c.indent+String(u)+": "+d+o}).join("")+c.pad+"}";return o.pop(),l(s)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===n.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,n)}},GAX2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},KIci:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var a=n("wx14"),s=n("Ff2n"),r=n("q1tI"),o=n.n(r),i=n("7ljp"),c=(n("YFqc"),n("tc9R")),l=n("pOT7"),p=n("vRWG"),u=n("I6Nb"),d=n("/WC5"),m=n.n(d),g=n("8C7G"),b=n("wH44"),f=(o.a.createElement,{Layout:p.DocumentationLayout,classes:{plugin:m()},meta:{title:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u0430",description:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435\u043c \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430."},tableOfContents:[{title:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440 \u0432\u043e \u0432\u0441\u0435\u0445 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f\u0445",slug:"izmenit-razmer-vo-vseh-napravleniyah",children:[]},{title:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440 \u043f\u043e \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u0438",slug:"izmenit-razmer-po-vertikali",children:[]},{title:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440 \u043f\u043e \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u0438",slug:"izmenit-razmer-po-gorizontali",children:[]},{title:"\u041f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0442\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u0430",slug:"predotvratit-izmenenie-razmera",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]}),v=u.ContentsLayout;function O(e){var{components:t}=e,n=Object(s.a)(e,["components"]);return Object(i.a)(v,Object(a.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("div",{className:"prose"},Object(i.a)(c.a,{level:2,id:"izmenit-razmer-vo-vseh-napravleniyah",toc:!0},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440 \u0432\u043e \u0432\u0441\u0435\u0445 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f\u0445"),Object(i.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(i.a)("inlineCode",{parentName:"p"},"resize"),", \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043f\u043e \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u0438 \u0438 \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u0438.")),Object(i.a)(l.a,{preview:'\n  <textarea class="resize border rounded-md"></textarea>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>resize border rounded-md<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(c.a,{level:2,id:"izmenit-razmer-po-vertikali",toc:!0},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440 \u043f\u043e \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u0438"),Object(i.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(i.a)("inlineCode",{parentName:"p"},"resize-y"),", \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043f\u043e \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u0438.")),Object(i.a)(l.a,{preview:'\n  <textarea class="resize-y border rounded-md"></textarea>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>resize-y border rounded-md<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(c.a,{level:2,id:"izmenit-razmer-po-gorizontali",toc:!0},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440 \u043f\u043e \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u0438"),Object(i.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(i.a)("inlineCode",{parentName:"p"},"resize-x"),", \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043f\u043e \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u0438.")),Object(i.a)(l.a,{preview:'\n  <textarea class="resize-x border rounded-md"></textarea>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>resize-x border rounded-md<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"amber",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(c.a,{level:2,id:"predotvratit-izmenenie-razmera",toc:!0},"\u041f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0442\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u0430"),Object(i.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(i.a)("inlineCode",{parentName:"p"},"resize-none"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0442\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430.")),Object(i.a)(l.a,{preview:'\n  <textarea class="resize-none border rounded-md"></textarea>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>resize-none border rounded-md<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(c.a,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),Object(i.a)(c.a,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),Object(i.a)(g.a,{plugin:"resize",name:"resizing",mdxType:"Variants"}),Object(i.a)("div",{className:"prose"},Object(i.a)(c.a,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),Object(i.a)(b.a,{plugin:"resize",name:"resizing",mdxType:"Disabling"}))}O.isMDXComponent=!0,O.layoutProps=f},Zb5r:function(e,t,n){"use strict";function a(e){return e.reduce((t,n,a)=>0===a?n:a===e.length-1?"".concat(t," \u0438 ").concat(n):"".concat(t,", ").concat(n),"")}n.d(t,"a",(function(){return a}))},ap0H:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("q1tI"),s=n.n(a),r=n("8Kt/"),o=n.n(r),i=s.a.createElement;function c(e){var{suffix:t,children:n}=e,a=n+(t?" - ".concat(t):"");return i(o.a,null,i("title",{key:"title"},a),i("meta",{key:"twitter:title",name:"twitter:title",content:a}),i("meta",{key:"og:title",property:"og:title",content:a}))}},"p+I8":function(e,t,n){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},pOT7:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n("wx14"),s=n("q1tI"),r=n.n(s),o=n("iuhU"),i=n("ZMKu"),c=r.a.createElement,l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},p={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function m(e){var t=Object(s.useRef)(),{0:n,1:r}=Object(s.useState)(!1),{0:o,1:i}=Object(s.useState)({});return Object(s.useEffect)(()=>{if(n){var e=new window.ResizeObserver(a);return a(),e.observe(t.current.contentDocument.body),()=>{e.disconnect()}}function a(){i({height:t.current.contentDocument.body.scrollHeight})}},[n]),c("iframe",Object(a.a)({},e,{ref:t,onLoad:()=>r(!0),style:o}))}function g(e){var{color:t,snippet:n}=e;return c("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",l[t],{"bg-gray-800":!l[t]})},c("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[t]})},c("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}})))}function b(e){var{preview:t,src:n,snippet:a,previewClassName:s,color:r="gray"}=e;return c("div",{className:"relative overflow-hidden mb-8"},t?c("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",p[r],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:t}}):c(m,{src:n,className:Object(o.a)("w-full rounded-t-xl",p[r])}),c(g,{color:r,snippet:a}))}function f(e){var{preview:t,src:n,previewClassName:a,snippet:r,color:l="gray",min:b=!1}=e,f=Object(s.useRef)(),v=Object(i.h)(0),O=Object(s.useRef)(),{0:h,1:y}=Object(s.useState)(!1);return Object(s.useEffect)(()=>{var e=new window.ResizeObserver(()=>{v.set(0)});return e.observe(f.current),()=>{e.disconnect()}},[]),c("div",{className:"relative mb-8"},c("div",{ref:f,className:"relative rounded-t-xl ".concat(u[l])},c("div",{className:b?"md:w-88":void 0},c(i.d.div,{className:"relative",style:{marginRight:Object(i.i)(v,e=>-e)}},t?c("div",{className:Object(o.a)("rounded-t-xl",a,p[l],{"p-10":!a}),dangerouslySetInnerHTML:{__html:t}}):c(m,{src:n,className:Object(o.a)("w-full rounded-t-xl",p[l],{"pointer-events-none":h})}))),c("div",{ref:O,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},c(i.d.div,{drag:"x",_dragX:v,dragMomentum:!1,dragElastic:0,dragConstraints:O,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(b?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:v},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),y(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),y(!1)}},c("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},c("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[l]),style:{width:"0.4375rem"}},c("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),c(g,{color:l,snippet:r}))}},r9Ns:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/resize",function(){return n("KIci")}])},vRWG:function(e,t,n){"use strict";n.r(t),n.d(t,"DocumentationLayout",(function(){return m}));var a=n("wx14"),s=n("q1tI"),r=n.n(s),o=n("ekQu"),i=n("8Kt/"),c=n.n(i),l=n("nOHt"),p=n("ap0H"),u=n("1Q1k"),d=r.a.createElement;function m(e){var t=Object(l.useRouter)();return d(r.a.Fragment,null,d(p.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),d(c.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.su".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(o.b,Object(a.a)({nav:u.a},e)))}},wH44:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("rePB"),s=n("q1tI"),r=n.n(s),o=n("AOjV"),i=n("AI3G"),c=n("Zb5r"),l=r.a.createElement;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){var{plugin:t,name:n}=e,a=Object(i.a)(t);return n=n||t.replace(/([a-z])([A-Z])/g,(e,t,n)=>"".concat(t," ").concat(n.toLowerCase())),l("div",{className:"prose"},l("p",null,"\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",n,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",l("span",{dangerouslySetInnerHTML:{__html:Object(c.a)(a.map(e=>"<code>".concat(e,"</code>")))}})," ",a.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",l("code",null,"false")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",l("code",null,"corePlugins")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"),l(o.a,{path:"corePlugins",before:"...",add:a.reduce((e,t)=>u(u({},e),{},{[t]:!1}),{})}))}}},[["r9Ns",0,2,6,1,3,4,5,7]]]);