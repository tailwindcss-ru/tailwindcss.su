(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[119],{"5xSE":function(n,t,a){"use strict";n.exports=function(n){return"[object RegExp]"===Object.prototype.toString.call(n)}},"8C7G":function(n,t,a){"use strict";a.d(t,"a",(function(){return i}));var e=a("q1tI"),s=a.n(e),p=a("98BF"),c=a("Zb5r"),o=a("AOjV"),l=s.a.createElement;function i(n){var{plugin:t,name:a}=n,e=p.defaultConfig.variants[t]||["responsive"];a=a||t.replace(/([a-z])([A-Z])/g,(n,t,a)=>"".concat(t," ").concat(a.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(n=>!e.includes(n)).slice(0,2),i="\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ".concat(e.length?"\u0442\u043e\u043b\u044c\u043a\u043e ".concat(Object(c.a)(e).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")):"\u043d\u0435\u0442"," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ").concat(a,".");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:i}}),l("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",a," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",l("code",null,t)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",l("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",l("code",null,"tailwind.config.js"),"."),l("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",e.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(c.a)(s),":"),l(o.a,{path:"variants.extend",before:"...",add:{[t]:s}}))}},AOjV:function(n,t,a){"use strict";a.d(t,"a",(function(){return r}));var e=a("q1tI"),s=a.n(e),p=(a("Btb4"),a("AI3G")),c=a("iuhU"),o=s.a.createElement;function l(n){var{value:t}=n;return"string"===typeof t?o("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?o(s.a.Fragment,null,o("span",{className:"token punctuation"},"["),t.map((n,a)=>o(e.Fragment,{key:a},o(l,{value:n}),a===t.length-1?null:o("span",{className:"token punctuation"},", "))),o("span",{className:"token punctuation"},"]")):"boolean"===typeof t?o("span",{className:"token boolean"},t.toString()):t.toString()}function i(n){var{edits:t,indent:a="",type:s="inserted"}=n;return o("span",{className:Object(c.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(t).map((n,p)=>{return o(e.Fragment,{key:p},o("span",{className:Object(c.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",a,/^[a-z_$][a-z0-9_$]*$/i.test(i=n)?i:"'".concat(i,"'"),o("span",{className:"token operator"},":")," ",o(l,{value:t[n]}),o("span",{className:"token punctuation"},","),"\n");var i}))}function r(n){var{path:t,add:a,remove:s,before:c,after:l}=n;return t="string"===typeof t?t.split("."):t,o("div",{className:"prose"},o("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},o("pre",{className:"language-diff"},o("code",{className:"language-diff"},o("span",{className:"token unchanged"},"  ",o("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",o("span",{className:"token punctuation"},"."),o("span",{className:"token property-access"},"exports")," ",o("span",{className:"token operator"},"=")," ",o("span",{className:"token punctuation"},"{"),"\n",t.map((n,t)=>o(e.Fragment,{key:t},"  ","  ".repeat(t+1),n,o("span",{className:"token operator"},":")," ",o("span",{className:"token punctuation"},"{"),"\n")),c&&Object(p.a)(c).map((n,a)=>o(e.Fragment,{key:a},"  ".repeat(t.length+2),o("span",{className:"token comment"},"// ".concat(n)),"\n"))),s&&o(i,{edits:s,type:"deleted",indent:"  ".repeat(t.length+1)}),a&&o(i,{edits:a,type:"inserted",indent:"  ".repeat(t.length+1)}),o("span",{className:"token unchanged"},l&&Object(p.a)(l).map(n=>"".concat("  ".repeat(t.length+2)).concat(n,"\n")),t.map((n,a)=>o(e.Fragment,{key:a},"  ","  ".repeat(t.length-a),"}\n")),"  }")))))}},BHwf:function(n,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var e=a("wx14"),s=a("Ff2n"),p=a("q1tI"),c=a.n(p),o=a("7ljp"),l=a("YFqc"),i=a.n(l),r=a("tc9R"),u=a("pOT7"),d=a("vRWG"),g=a("I6Nb"),m=a("zmQS"),k=a.n(m),b=a("8C7G"),v=a("wH44"),f=(c.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:k()},meta:{title:"Place Items",description:"Utilities for controlling how items are justified and aligned at the same time."},tableOfContents:[{title:"Auto",slug:"auto",children:[]},{title:"Start",slug:"start",children:[]},{title:"End",slug:"end",children:[]},{title:"Center",slug:"center",children:[]},{title:"Stretch",slug:"stretch",children:[]},{title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",slug:"adaptivnost",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]}),h=g.ContentsLayout;function x(n){var{components:t}=n,a=Object(s.a)(n,["components"]);return Object(o.a)(h,Object(e.a)({},f,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"auto",toc:!0},"Auto"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"place-items-auto")," to place grid items automatically in their grid areas:")),Object(o.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 gap-2 place-items-auto h-48">\n    <div class="rounded-md bg-indigo-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">1</div>\n    <div class="rounded-md bg-indigo-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">2</div>\n    <div class="rounded-md bg-indigo-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">3</div>\n    <div class="rounded-md bg-indigo-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">4</div>\n    <div class="rounded-md bg-indigo-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">5</div>\n    <div class="rounded-md bg-indigo-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">6</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid grid-cols-3 gap-2 <span class="code-highlight bg-code-highlight">place-items-auto</span> h-48 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"start",toc:!0},"Start"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"place-items-start")," to place grid items on the start of their grid areas on both axis:")),Object(o.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 gap-2 place-items-start h-48">\n    <div class="rounded-md bg-emerald-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">1</div>\n    <div class="rounded-md bg-emerald-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">2</div>\n    <div class="rounded-md bg-emerald-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">3</div>\n    <div class="rounded-md bg-emerald-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">4</div>\n    <div class="rounded-md bg-emerald-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">5</div>\n    <div class="rounded-md bg-emerald-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">6</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid grid-cols-3 gap-2 <span class="code-highlight bg-code-highlight">place-items-start</span> h-48 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"end",toc:!0},"End"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"place-items-end")," to place grid items on the end of their grid areas on both axis:")),Object(o.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 gap-2 place-items-end h-48">\n    <div class="rounded-md bg-amber-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">1</div>\n    <div class="rounded-md bg-amber-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">2</div>\n    <div class="rounded-md bg-amber-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">3</div>\n    <div class="rounded-md bg-amber-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">4</div>\n    <div class="rounded-md bg-amber-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">5</div>\n    <div class="rounded-md bg-amber-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">6</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid grid-cols-3 gap-2 <span class="code-highlight bg-code-highlight">place-items-end</span> h-48 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"amber",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"center",toc:!0},"Center"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"place-items-center")," to place grid items on the center of their grid areas on both axis:")),Object(o.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 gap-2 place-items-center h-48">\n    <div class="rounded-md bg-purple-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">1</div>\n    <div class="rounded-md bg-purple-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">2</div>\n    <div class="rounded-md bg-purple-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">3</div>\n    <div class="rounded-md bg-purple-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">4</div>\n    <div class="rounded-md bg-purple-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">5</div>\n    <div class="rounded-md bg-purple-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">6</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid grid-cols-3 gap-2 <span class="code-highlight bg-code-highlight">place-items-center</span> h-48 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"stretch",toc:!0},"Stretch"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"place-items-stretch")," to stretch items along their grid areas on both axis:")),Object(o.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 gap-2 place-items-stretch h-48">\n    <div class="rounded-md bg-light-blue-500 text-white text-2xl font-extrabold flex items-center justify-center">1</div>\n    <div class="rounded-md bg-light-blue-500 text-white text-2xl font-extrabold flex items-center justify-center">2</div>\n    <div class="rounded-md bg-light-blue-500 text-white text-2xl font-extrabold flex items-center justify-center">3</div>\n    <div class="rounded-md bg-light-blue-500 text-white text-2xl font-extrabold flex items-center justify-center">4</div>\n    <div class="rounded-md bg-light-blue-500 text-white text-2xl font-extrabold flex items-center justify-center">5</div>\n    <div class="rounded-md bg-light-blue-500 text-white text-2xl font-extrabold flex items-center justify-center">6</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid grid-cols-3 gap-2 <span class="code-highlight bg-code-highlight">place-items-stretch</span> h-48 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"adaptivnost",toc:!0},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),Object(o.a)("p",null,"To place items at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing ",Object(o.a)("inlineCode",{parentName:"p"},"place-items")," utility. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:place-items-center")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"place-items-center")," utility at only medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(e.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(e.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),'"'),"place-items-start md:place-items-center",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 Tailwind \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 ",Object(o.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430")),"."),Object(o.a)(r.a,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),Object(o.a)(r.a,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),Object(o.a)(b.a,{plugin:"placeItems",name:"place-items",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),Object(o.a)(v.a,{plugin:"placeItems",name:"place-items",mdxType:"Disabling"}))}x.isMDXComponent=!0,x.layoutProps=f},Btb4:function(n,t,a){"use strict";const e=a("5xSE"),s=a("p+I8"),p=a("GAX2").default;n.exports=(n,t,a)=>{const c=[];return function n(t,a,o){let l;(a=a||{}).indent=a.indent||"\t",o=o||"",l=void 0===a.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+a.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const i=n=>{if(void 0===a.inlineCharacterLimit)return n;const t=n.replace(new RegExp(l.newLine,"g"),"").replace(new RegExp(l.newLineOrSpace,"g")," ").replace(new RegExp(l.pad+"|"+l.indent,"g"),"");return t.length<=a.inlineCharacterLimit?t:n.replace(new RegExp(l.newLine+"|"+l.newLineOrSpace,"g"),"\n").replace(new RegExp(l.pad,"g"),o).replace(new RegExp(l.indent,"g"),o+a.indent)};if(-1!==c.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||e(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";c.push(t);const e="["+l.newLine+t.map((e,s)=>{const p=t.length-1===s?l.newLine:","+l.newLineOrSpace;let c=n(e,a,o+a.indent);return a.transform&&(c=a.transform(t,s,c)),l.indent+c+p}).join("")+l.pad+"]";return c.pop(),i(e)}if(s(t)){let e=Object.keys(t).concat(p(t));if(a.filter&&(e=e.filter(n=>a.filter(t,n))),0===e.length)return"{}";c.push(t);const s="{"+l.newLine+e.map((s,p)=>{const c=e.length-1===p?l.newLine:","+l.newLineOrSpace,i="symbol"===typeof s,r=!i&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=i||r?s:n(s,a);let d=n(t[s],a,o+a.indent);return a.transform&&(d=a.transform(t,s,d)),l.indent+String(u)+": "+d+c}).join("")+l.pad+"}";return c.pop(),i(s)}return t=String(t).replace(/[\r\n]/g,n=>"\n"===n?"\\n":"\\r"),!1===a.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(n,t,a)}},GAX2:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=n=>Object.getOwnPropertySymbols(n).filter(t=>Object.prototype.propertyIsEnumerable.call(n,t))},OF2o:function(n,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/place-items",function(){return a("BHwf")}])},Zb5r:function(n,t,a){"use strict";function e(n){return n.reduce((t,a,e)=>0===e?a:e===n.length-1?"".concat(t," and ").concat(a):"".concat(t,", ").concat(a),"")}a.d(t,"a",(function(){return e}))},ap0H:function(n,t,a){"use strict";a.d(t,"a",(function(){return l}));var e=a("q1tI"),s=a.n(e),p=a("8Kt/"),c=a.n(p),o=s.a.createElement;function l(n){var{suffix:t,children:a}=n,e=a+(t?" - ".concat(t):"");return o(c.a,null,o("title",{key:"title"},e),o("meta",{key:"twitter:title",name:"twitter:title",content:e}),o("meta",{key:"og:title",property:"og:title",content:e}))}},"p+I8":function(n,t,a){"use strict";n.exports=function(n){var t=typeof n;return null!==n&&("object"===t||"function"===t)}},pOT7:function(n,t,a){"use strict";a.d(t,"a",(function(){return k})),a.d(t,"b",(function(){return b}));var e=a("wx14"),s=a("q1tI"),p=a.n(s),c=a("iuhU"),o=a("ZMKu"),l=p.a.createElement,i={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},r={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function g(n){var t=Object(s.useRef)(),{0:a,1:p}=Object(s.useState)(!1),{0:c,1:o}=Object(s.useState)({});return Object(s.useEffect)(()=>{if(a){var n=new window.ResizeObserver(e);return e(),n.observe(t.current.contentDocument.body),()=>{n.disconnect()}}function e(){o({height:t.current.contentDocument.body.scrollHeight})}},[a]),l("iframe",Object(e.a)({},n,{ref:t,onLoad:()=>p(!0),style:c}))}function m(n){var{color:t,snippet:a}=n;return l("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",i[t],{"bg-gray-800":!i[t]})},l("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":i[t]})},l("code",{className:"language-html",dangerouslySetInnerHTML:{__html:a}})))}function k(n){var{preview:t,src:a,snippet:e,previewClassName:s,color:p="gray"}=n;return l("div",{className:"relative overflow-hidden mb-8"},t?l("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",r[p],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:t}}):l(g,{src:a,className:Object(c.a)("w-full rounded-t-xl",r[p])}),l(m,{color:p,snippet:e}))}function b(n){var{preview:t,src:a,previewClassName:e,snippet:p,color:i="gray",min:k=!1}=n,b=Object(s.useRef)(),v=Object(o.h)(0),f=Object(s.useRef)(),{0:h,1:x}=Object(s.useState)(!1);return Object(s.useEffect)(()=>{var n=new window.ResizeObserver(()=>{v.set(0)});return n.observe(b.current),()=>{n.disconnect()}},[]),l("div",{className:"relative mb-8"},l("div",{ref:b,className:"relative rounded-t-xl ".concat(u[i])},l("div",{className:k?"md:w-88":void 0},l(o.d.div,{className:"relative",style:{marginRight:Object(o.i)(v,n=>-n)}},t?l("div",{className:Object(c.a)("rounded-t-xl",e,r[i],{"p-10":!e}),dangerouslySetInnerHTML:{__html:t}}):l(g,{src:a,className:Object(c.a)("w-full rounded-t-xl",r[i],{"pointer-events-none":h})}))),l("div",{ref:f,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},l(o.d.div,{drag:"x",_dragX:v,dragMomentum:!1,dragElastic:0,dragConstraints:f,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(k?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:v},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),x(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),x(!1)}},l("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},l("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[i]),style:{width:"0.4375rem"}},l("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),l(m,{color:i,snippet:p}))}},vRWG:function(n,t,a){"use strict";a.r(t),a.d(t,"DocumentationLayout",(function(){return g}));var e=a("wx14"),s=a("q1tI"),p=a.n(s),c=a("ekQu"),o=a("8Kt/"),l=a.n(o),i=a("nOHt"),r=a("ap0H"),u=a("1Q1k"),d=p.a.createElement;function g(n){var t=Object(i.useRouter)();return d(p.a.Fragment,null,d(r.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},n.layoutProps.meta.metaTitle||n.layoutProps.meta.title),d(l.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.su".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(c.b,Object(e.a)({nav:u.a},n)))}},wH44:function(n,t,a){"use strict";a.d(t,"a",(function(){return d}));var e=a("rePB"),s=a("q1tI"),p=a.n(s),c=a("AOjV"),o=a("AI3G"),l=a("Zb5r"),i=p.a.createElement;function r(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.push.apply(a,e)}return a}function u(n){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(e.a)(n,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(a,t))}))}return n}function d(n){var{plugin:t,name:a}=n,e=Object(o.a)(t);return a=a||t.replace(/([a-z])([A-Z])/g,(n,t,a)=>"".concat(t," ").concat(a.toLowerCase())),i("div",{className:"prose"},i("p",null,"\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",a,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",i("span",{dangerouslySetInnerHTML:{__html:Object(l.a)(e.map(n=>"<code>".concat(n,"</code>")))}})," ",e.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",i("code",null,"false")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",i("code",null,"corePlugins")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"),i(c.a,{path:"corePlugins",before:"...",add:e.reduce((n,t)=>u(u({},n),{},{[t]:!1}),{})}))}},zmQS:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:n,variants:t}){n({".place-items-auto":{"place-items":"auto"},".place-items-start":{"place-items":"start"},".place-items-end":{"place-items":"end"},".place-items-center":{"place-items":"center"},".place-items-stretch":{"place-items":"stretch"}},t("placeItems"))}}}},[["OF2o",0,2,6,1,3,4,5,7]]]);