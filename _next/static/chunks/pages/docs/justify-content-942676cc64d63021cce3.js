_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[113],{"5xSE":function(n,t,a){"use strict";n.exports=function(n){return"[object RegExp]"===Object.prototype.toString.call(n)}},"8C7G":function(n,t,a){"use strict";a.d(t,"a",(function(){return i}));var e=a("q1tI"),s=a.n(e),p=a("98BF"),c=a("Zb5r"),o=a("AOjV"),l=s.a.createElement;function i({plugin:n,name:t}){const a=p.defaultConfig.variants[n]||["responsive"];t=t||n.replace(/([a-z])([A-Z])/g,((n,t,a)=>`${t} ${a.toLowerCase()}`));const e=["responsive","hover","focus","active","group-hover"].filter((n=>!a.includes(n))).slice(0,2),s=`\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ${a.length?`\u0442\u043e\u043b\u044c\u043a\u043e ${Object(c.a)(a).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")}`:"\u043d\u0435\u0442"} \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ${t}.`;return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:s}}),l("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",t," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",l("code",null,n)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",l("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",l("code",null,"tailwind.config.js"),"."),l("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",a.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(c.a)(e),":"),l(o.a,{path:"variants.extend",before:"...",add:{[n]:e}}))}},AOjV:function(n,t,a){"use strict";a.d(t,"a",(function(){return r}));var e=a("q1tI"),s=a.n(e),p=(a("Btb4"),a("AI3G")),c=a("iuhU"),o=s.a.createElement;function l({value:n}){return"string"===typeof n?o("span",{className:"token string"},"'",n,"'"):Array.isArray(n)?o(s.a.Fragment,null,o("span",{className:"token punctuation"},"["),n.map(((t,a)=>o(e.Fragment,{key:a},o(l,{value:t}),a===n.length-1?null:o("span",{className:"token punctuation"},", ")))),o("span",{className:"token punctuation"},"]")):"boolean"===typeof n?o("span",{className:"token boolean"},n.toString()):n.toString()}function i({edits:n,indent:t="",type:a="inserted"}){return o("span",{className:Object(c.a)("token",{"inserted-sign inserted":"inserted"===a,"deleted-sign deleted":"inserted"!==a})},Object.keys(n).map(((s,p)=>{return o(e.Fragment,{key:p},o("span",{className:Object(c.a)("token prefix",{inserted:"inserted"===a,deleted:"inserted"!==a})},"inserted"===a?"+":"-")," ",t,/^[a-z_$][a-z0-9_$]*$/i.test(i=s)?i:`'${i}'`,o("span",{className:"token operator"},":")," ",o(l,{value:n[s]}),o("span",{className:"token punctuation"},","),"\n");var i})))}function r({path:n,add:t,remove:a,before:s,after:c}){return n="string"===typeof n?n.split("."):n,o("div",{className:"prose"},o("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},o("pre",{className:"language-diff"},o("code",{className:"language-diff"},o("span",{className:"token unchanged"},"  ",o("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",o("span",{className:"token punctuation"},"."),o("span",{className:"token property-access"},"exports")," ",o("span",{className:"token operator"},"=")," ",o("span",{className:"token punctuation"},"{"),"\n",n.map(((n,t)=>o(e.Fragment,{key:t},"  ","  ".repeat(t+1),n,o("span",{className:"token operator"},":")," ",o("span",{className:"token punctuation"},"{"),"\n"))),s&&Object(p.a)(s).map(((t,a)=>o(e.Fragment,{key:a},"  ".repeat(n.length+2),o("span",{className:"token comment"},`// ${t}`),"\n")))),a&&o(i,{edits:a,type:"deleted",indent:"  ".repeat(n.length+1)}),t&&o(i,{edits:t,type:"inserted",indent:"  ".repeat(n.length+1)}),o("span",{className:"token unchanged"},c&&Object(p.a)(c).map((t=>`${"  ".repeat(n.length+2)}${t}\n`)),n.map(((t,a)=>o(e.Fragment,{key:a},"  ","  ".repeat(n.length-a),"}\n"))),"  }")))))}},Btb4:function(n,t,a){"use strict";const e=a("5xSE"),s=a("p+I8"),p=a("GAX2").default;n.exports=(n,t,a)=>{const c=[];return function n(t,a,o){let l;(a=a||{}).indent=a.indent||"\t",o=o||"",l=void 0===a.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+a.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const i=n=>{if(void 0===a.inlineCharacterLimit)return n;const t=n.replace(new RegExp(l.newLine,"g"),"").replace(new RegExp(l.newLineOrSpace,"g")," ").replace(new RegExp(l.pad+"|"+l.indent,"g"),"");return t.length<=a.inlineCharacterLimit?t:n.replace(new RegExp(l.newLine+"|"+l.newLineOrSpace,"g"),"\n").replace(new RegExp(l.pad,"g"),o).replace(new RegExp(l.indent,"g"),o+a.indent)};if(-1!==c.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||e(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";c.push(t);const e="["+l.newLine+t.map(((e,s)=>{const p=t.length-1===s?l.newLine:","+l.newLineOrSpace;let c=n(e,a,o+a.indent);return a.transform&&(c=a.transform(t,s,c)),l.indent+c+p})).join("")+l.pad+"]";return c.pop(),i(e)}if(s(t)){let e=Object.keys(t).concat(p(t));if(a.filter&&(e=e.filter((n=>a.filter(t,n)))),0===e.length)return"{}";c.push(t);const s="{"+l.newLine+e.map(((s,p)=>{const c=e.length-1===p?l.newLine:","+l.newLineOrSpace,i="symbol"===typeof s,r=!i&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=i||r?s:n(s,a);let d=n(t[s],a,o+a.indent);return a.transform&&(d=a.transform(t,s,d)),l.indent+String(u)+": "+d+c})).join("")+l.pad+"}";return c.pop(),i(s)}return t=String(t).replace(/[\r\n]/g,(n=>"\n"===n?"\\n":"\\r")),!1===a.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(n,t,a)}},G8D3:function(n,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/justify-content",function(){return a("mOfb")}])},GAX2:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=n=>Object.getOwnPropertySymbols(n).filter((t=>Object.prototype.propertyIsEnumerable.call(n,t)))},Zb5r:function(n,t,a){"use strict";function e(n){return n.reduce(((t,a,e)=>0===e?a:e===n.length-1?`${t} \u0438 ${a}`:`${t}, ${a}`),"")}a.d(t,"a",(function(){return e}))},gtEg:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:n,variants:t}){n({".justify-start":{"justify-content":"flex-start"},".justify-end":{"justify-content":"flex-end"},".justify-center":{"justify-content":"center"},".justify-between":{"justify-content":"space-between"},".justify-around":{"justify-content":"space-around"},".justify-evenly":{"justify-content":"space-evenly"}},t("justifyContent"))}}},mOfb:function(n,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var e=a("HALo"),s=a("dhJC"),p=a("q1tI"),c=a.n(p),o=a("7ljp"),l=a("YFqc"),i=a.n(l),r=a("tc9R"),u=a("pOT7"),d=a("vRWG"),g=a("I6Nb"),m=a("gtEg"),b=a.n(m),k=a("8C7G"),f=a("wH44");c.a.createElement;const v={Layout:d.DocumentationLayout,classes:{plugin:b()},meta:{title:"\u0412\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0433\u043e \u043f\u043e \u0433\u043b\u0430\u0432\u043d\u043e\u0439 \u043e\u0441\u0438",description:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c \u0444\u043b\u0435\u043a\u0441-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0438 \u0441\u0435\u0442\u043a\u0438 \u0432\u0434\u043e\u043b\u044c \u0433\u043b\u0430\u0432\u043d\u043e\u0439 \u043e\u0441\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430."},tableOfContents:[{title:"Start",slug:"start",children:[]},{title:"Center",slug:"center",children:[]},{title:"End",slug:"end",children:[]},{title:"Space between",slug:"space-between",children:[]},{title:"Space around",slug:"space-around",children:[]},{title:"Space evenly",slug:"space-evenly",children:[]},{title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",slug:"adaptivnost",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]},j=g.ContentsLayout;function h(n){let{components:t}=n,a=Object(s.a)(n,["components"]);return Object(o.a)(j,Object(e.a)({},v,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"start",toc:!0},"Start"),Object(o.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(o.a)("inlineCode",{parentName:"p"},"justify-start"),", \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0440\u043e\u0432\u043d\u044f\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043d\u0430\u0447\u0430\u043b\u0430 \u0433\u043b\u0430\u0432\u043d\u043e\u0439 \u043e\u0441\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430:")),Object(o.a)(u.a,{preview:'\n  <div class="flex justify-start -m-2">\n    <div class="w-16 h-16 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-fuchsia-500 m-2">1</div>\n    <div class="w-16 h-16 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-fuchsia-500 m-2">2</div>\n    <div class="w-16 h-16 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-fuchsia-500 m-2">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">justify-start</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-6",color:"fuchsia",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"center",toc:!0},"Center"),Object(o.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(o.a)("inlineCode",{parentName:"p"},"justify-center"),", \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0440\u043e\u0432\u043d\u044f\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043f\u043e \u0446\u0435\u043d\u0442\u0440\u0443 \u0433\u043b\u0430\u0432\u043d\u043e\u0439 \u043e\u0441\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430:")),Object(o.a)(u.a,{preview:'\n  <div class="flex justify-center -m-2">\n    <div class="w-16 h-16 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-indigo-500 m-2">1</div>\n    <div class="w-16 h-16 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-indigo-500 m-2">2</div>\n    <div class="w-16 h-16 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-indigo-500 m-2">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">justify-center</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-6",color:"indigo",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"end",toc:!0},"End"),Object(o.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(o.a)("inlineCode",{parentName:"p"},"justify-end"),", \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0440\u043e\u0432\u043d\u044f\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043a\u043e\u043d\u0446\u0430 \u0433\u043b\u0430\u0432\u043d\u043e\u0439 \u043e\u0441\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430:")),Object(o.a)(u.a,{preview:'\n  <div class="flex justify-end -m-2">\n    <div class="w-16 h-16 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-light-blue-500 m-2">1</div>\n    <div class="w-16 h-16 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-light-blue-500 m-2">2</div>\n    <div class="w-16 h-16 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-light-blue-500 m-2">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">justify-end</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-6",color:"lightBlue",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"space-between",toc:!0},"Space between"),Object(o.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(o.a)("inlineCode",{parentName:"p"},"justify-between")," \u0434\u043b\u044f \u0432\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043f\u043e \u0433\u043b\u0430\u0432\u043d\u043e\u0439 \u043e\u0441\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0447\u0442\u043e\u0431\u044b \u043c\u0435\u0436\u0434\u0443 \u043a\u0430\u0436\u0434\u044b\u043c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u043c \u043e\u0441\u0442\u0430\u0432\u0430\u043b\u043e\u0441\u044c \u0440\u0430\u0432\u043d\u043e\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e:")),Object(o.a)(u.a,{preview:'\n  <div class="flex justify-between -m-2">\n    <div class="w-16 h-16 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-emerald-500 m-2">1</div>\n    <div class="w-16 h-16 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-emerald-500 m-2">2</div>\n    <div class="w-16 h-16 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-emerald-500 m-2">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">justify-between</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-6",color:"emerald",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"space-around",toc:!0},"Space around"),Object(o.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(o.a)("inlineCode",{parentName:"p"},"justify-around")," \u0434\u043b\u044f \u0432\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043f\u043e \u0433\u043b\u0430\u0432\u043d\u043e\u0439 \u043e\u0441\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0447\u0442\u043e\u0431\u044b \u0441 \u043a\u0430\u0436\u0434\u043e\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u044b \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043e\u0441\u0442\u0430\u0432\u0430\u043b\u043e\u0441\u044c \u0440\u0430\u0432\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0435\u0441\u0442\u0430:")),Object(o.a)(u.a,{preview:'\n  <div class="flex justify-around -m-2">\n    <div class="w-16 h-16 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-purple-500 m-2">1</div>\n    <div class="w-16 h-16 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-purple-500 m-2">2</div>\n    <div class="w-16 h-16 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-purple-500 m-2">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">justify-around</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-6",color:"purple",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"space-evenly",toc:!0},"Space evenly"),Object(o.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(o.a)("inlineCode",{parentName:"p"},"justify-evenly")," \u0434\u043b\u044f \u0432\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043f\u043e \u0433\u043b\u0430\u0432\u043d\u043e\u0439 \u043e\u0441\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0447\u0442\u043e\u0431\u044b \u0432\u043e\u043a\u0440\u0443\u0433 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0431\u044b\u043b\u043e \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u043e\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e, \u043d\u043e \u0442\u0430\u043a\u0436\u0435 \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0443\u0434\u0432\u043e\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u044b \u043e\u0431\u044b\u0447\u043d\u043e \u0432\u0438\u0434\u0438\u0442\u0435 \u043c\u0435\u0436\u0434\u0443 \u043a\u0430\u0436\u0434\u044b\u043c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u043c \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 ",Object(o.a)("inlineCode",{parentName:"p"},"justify-around"),":")),Object(o.a)(u.a,{preview:'\n  <div class="flex justify-evenly -m-2">\n    <div class="w-16 h-16 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-amber-500 m-2">1</div>\n    <div class="w-16 h-16 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-amber-500 m-2">2</div>\n    <div class="w-16 h-16 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-amber-500 m-2">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">justify-evenly</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-6",color:"amber",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"adaptivnost",toc:!0},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),Object(o.a)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0432\u044b\u0440\u043e\u0432\u043d\u044f\u0442\u044c \u0444\u043b\u0435\u043a\u0441-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," \u043a \u043b\u044e\u0431\u043e\u043c\u0443 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u043c\u0443 \u043a\u043b\u0430\u0441\u0441\u0443 \u0443\u0442\u0438\u043b\u0438\u0442\u044b. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(o.a)("inlineCode",{parentName:"p"},"md:justify-between"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",Object(o.a)("inlineCode",{parentName:"p"},"justify-between")," \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u0445 \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0432\u044b\u0448\u0435."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(e.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(e.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),'"'),"justify-start ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:justify-between")," ...",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 Tailwind \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 ",Object(o.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430")),"."),Object(o.a)(r.a,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),Object(o.a)(r.a,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),Object(o.a)(k.a,{plugin:"justifyContent",name:"justify-content",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),Object(o.a)(f.a,{plugin:"justifyContent",name:"justify-content",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=v},"p+I8":function(n,t,a){"use strict";n.exports=function(n){var t=typeof n;return null!==n&&("object"===t||"function"===t)}},pOT7:function(n,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return k}));var e=a("HALo"),s=a("q1tI"),p=a.n(s),c=a("iuhU"),o=a("ZMKu"),l=p.a.createElement;const i={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},r={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function g(n){const t=Object(s.useRef)(),{0:a,1:p}=Object(s.useState)(!1),{0:c,1:o}=Object(s.useState)({});return Object(s.useEffect)((()=>{if(!a)return;function n(){o({height:t.current.contentDocument.body.scrollHeight})}const e=new window.ResizeObserver(n);return n(),e.observe(t.current.contentDocument.body),()=>{e.disconnect()}}),[a]),l("iframe",Object(e.a)({},n,{ref:t,onLoad:()=>p(!0),style:c}))}function m({color:n,snippet:t}){return l("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",i[n],{"bg-gray-800":!i[n]})},l("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":i[n]})},l("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function b({preview:n,src:t,snippet:a,previewClassName:e,color:s="gray"}){return l("div",{className:"relative overflow-hidden mb-8"},n?l("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",r[s],e,{"p-10":!e}),dangerouslySetInnerHTML:{__html:n}}):l(g,{src:t,className:Object(c.a)("w-full rounded-t-xl",r[s])}),l(m,{color:s,snippet:a}))}function k({preview:n,src:t,previewClassName:a,snippet:e,color:p="gray",min:i=!1}){const b=Object(s.useRef)(),k=Object(o.h)(0),f=Object(s.useRef)(),{0:v,1:j}=Object(s.useState)(!1);return Object(s.useEffect)((()=>{const n=new window.ResizeObserver((()=>{k.set(0)}));return n.observe(b.current),()=>{n.disconnect()}}),[]),l("div",{className:"relative mb-8"},l("div",{ref:b,className:`relative rounded-t-xl ${u[p]}`},l("div",{className:i?"md:w-88":void 0},l(o.d.div,{className:"relative",style:{marginRight:Object(o.i)(k,(n=>-n))}},n?l("div",{className:Object(c.a)("rounded-t-xl",a,r[p],{"p-10":!a}),dangerouslySetInnerHTML:{__html:n}}):l(g,{src:t,className:Object(c.a)("w-full rounded-t-xl",r[p],{"pointer-events-none":v})}))),l("div",{ref:f,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},l(o.d.div,{drag:"x",_dragX:k,dragMomentum:!1,dragElastic:0,dragConstraints:f,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing "+(i?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:k},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),j(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),j(!1)}},l("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},l("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:`h-3 flex-none ${d[p]}`,style:{width:"0.4375rem"}},l("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),l(m,{color:p,snippet:e}))}},wH44:function(n,t,a){"use strict";a.d(t,"a",(function(){return d}));var e=a("cpVT"),s=a("q1tI"),p=a.n(s),c=a("AOjV"),o=a("AI3G"),l=a("Zb5r"),i=p.a.createElement;function r(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.push.apply(a,e)}return a}function u(n){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(e.a)(n,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(a,t))}))}return n}function d({plugin:n,name:t}){const a=Object(o.a)(n);return t=t||n.replace(/([a-z])([A-Z])/g,((n,t,a)=>`${t} ${a.toLowerCase()}`)),i("div",{className:"prose"},i("p",null,"\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",t,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",i("span",{dangerouslySetInnerHTML:{__html:Object(l.a)(a.map((n=>`<code>${n}</code>`)))}})," ",a.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",i("code",null,"false")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",i("code",null,"corePlugins")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"),i(c.a,{path:"corePlugins",before:"...",add:a.reduce(((n,t)=>u(u({},n),{},{[t]:!1})),{})}))}}},[["G8D3",0,2,6,1,3,4,5,7]]]);