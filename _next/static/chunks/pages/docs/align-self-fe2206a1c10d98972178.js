_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{"2c5R":function(a,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/align-self",function(){return t("Y9Rh")}])},"5xSE":function(a,n,t){"use strict";a.exports=function(a){return"[object RegExp]"===Object.prototype.toString.call(a)}},"8C7G":function(a,n,t){"use strict";t.d(n,"a",(function(){return i}));var e=t("q1tI"),s=t.n(e),p=t("98BF"),c=t("Zb5r"),l=t("AOjV"),o=s.a.createElement;function i({plugin:a,name:n}){const t=p.defaultConfig.variants[a]||["responsive"];n=n||a.replace(/([a-z])([A-Z])/g,((a,n,t)=>`${n} ${t.toLowerCase()}`));const e=["responsive","hover","focus","active","group-hover"].filter((a=>!t.includes(a))).slice(0,2),s=`\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ${t.length?`\u0442\u043e\u043b\u044c\u043a\u043e ${Object(c.a)(t).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")}`:"\u043d\u0435\u0442"} \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ${n}.`;return o("div",{className:"prose"},o("p",{dangerouslySetInnerHTML:{__html:s}}),o("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",n," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",o("code",null,a)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",o("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",o("code",null,"tailwind.config.js"),"."),o("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",t.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(c.a)(e),":"),o(l.a,{path:"variants.extend",before:"...",add:{[a]:e}}))}},AOjV:function(a,n,t){"use strict";t.d(n,"a",(function(){return r}));var e=t("q1tI"),s=t.n(e),p=(t("Btb4"),t("AI3G")),c=t("iuhU"),l=s.a.createElement;function o({value:a}){return"string"===typeof a?l("span",{className:"token string"},"'",a,"'"):Array.isArray(a)?l(s.a.Fragment,null,l("span",{className:"token punctuation"},"["),a.map(((n,t)=>l(e.Fragment,{key:t},l(o,{value:n}),t===a.length-1?null:l("span",{className:"token punctuation"},", ")))),l("span",{className:"token punctuation"},"]")):"boolean"===typeof a?l("span",{className:"token boolean"},a.toString()):a.toString()}function i({edits:a,indent:n="",type:t="inserted"}){return l("span",{className:Object(c.a)("token",{"inserted-sign inserted":"inserted"===t,"deleted-sign deleted":"inserted"!==t})},Object.keys(a).map(((s,p)=>{return l(e.Fragment,{key:p},l("span",{className:Object(c.a)("token prefix",{inserted:"inserted"===t,deleted:"inserted"!==t})},"inserted"===t?"+":"-")," ",n,/^[a-z_$][a-z0-9_$]*$/i.test(i=s)?i:`'${i}'`,l("span",{className:"token operator"},":")," ",l(o,{value:a[s]}),l("span",{className:"token punctuation"},","),"\n");var i})))}function r({path:a,add:n,remove:t,before:s,after:c}){return a="string"===typeof a?a.split("."):a,l("div",{className:"prose"},l("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},l("pre",{className:"language-diff"},l("code",{className:"language-diff"},l("span",{className:"token unchanged"},"  ",l("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",l("span",{className:"token punctuation"},"."),l("span",{className:"token property-access"},"exports")," ",l("span",{className:"token operator"},"=")," ",l("span",{className:"token punctuation"},"{"),"\n",a.map(((a,n)=>l(e.Fragment,{key:n},"  ","  ".repeat(n+1),a,l("span",{className:"token operator"},":")," ",l("span",{className:"token punctuation"},"{"),"\n"))),s&&Object(p.a)(s).map(((n,t)=>l(e.Fragment,{key:t},"  ".repeat(a.length+2),l("span",{className:"token comment"},`// ${n}`),"\n")))),t&&l(i,{edits:t,type:"deleted",indent:"  ".repeat(a.length+1)}),n&&l(i,{edits:n,type:"inserted",indent:"  ".repeat(a.length+1)}),l("span",{className:"token unchanged"},c&&Object(p.a)(c).map((n=>`${"  ".repeat(a.length+2)}${n}\n`)),a.map(((n,t)=>l(e.Fragment,{key:t},"  ","  ".repeat(a.length-t),"}\n"))),"  }")))))}},Btb4:function(a,n,t){"use strict";const e=t("5xSE"),s=t("p+I8"),p=t("GAX2").default;a.exports=(a,n,t)=>{const c=[];return function a(n,t,l){let o;(t=t||{}).indent=t.indent||"\t",l=l||"",o=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:l,indent:l+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const i=a=>{if(void 0===t.inlineCharacterLimit)return a;const n=a.replace(new RegExp(o.newLine,"g"),"").replace(new RegExp(o.newLineOrSpace,"g")," ").replace(new RegExp(o.pad+"|"+o.indent,"g"),"");return n.length<=t.inlineCharacterLimit?n:a.replace(new RegExp(o.newLine+"|"+o.newLineOrSpace,"g"),"\n").replace(new RegExp(o.pad,"g"),l).replace(new RegExp(o.indent,"g"),l+t.indent)};if(-1!==c.indexOf(n))return'"[Circular]"';if(null===n||void 0===n||"number"===typeof n||"boolean"===typeof n||"function"===typeof n||"symbol"===typeof n||e(n))return String(n);if(n instanceof Date)return`new Date('${n.toISOString()}')`;if(Array.isArray(n)){if(0===n.length)return"[]";c.push(n);const e="["+o.newLine+n.map(((e,s)=>{const p=n.length-1===s?o.newLine:","+o.newLineOrSpace;let c=a(e,t,l+t.indent);return t.transform&&(c=t.transform(n,s,c)),o.indent+c+p})).join("")+o.pad+"]";return c.pop(),i(e)}if(s(n)){let e=Object.keys(n).concat(p(n));if(t.filter&&(e=e.filter((a=>t.filter(n,a)))),0===e.length)return"{}";c.push(n);const s="{"+o.newLine+e.map(((s,p)=>{const c=e.length-1===p?o.newLine:","+o.newLineOrSpace,i="symbol"===typeof s,r=!i&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=i||r?s:a(s,t);let d=a(n[s],t,l+t.indent);return t.transform&&(d=t.transform(n,s,d)),o.indent+String(u)+": "+d+c})).join("")+o.pad+"}";return c.pop(),i(s)}return n=String(n).replace(/[\r\n]/g,(a=>"\n"===a?"\\n":"\\r")),!1===t.singleQuotes?`"${n=n.replace(/"/g,'\\"')}"`:`'${n=n.replace(/\\?'/g,"\\'")}'`}(a,n,t)}},GAX2:function(a,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=a=>Object.getOwnPropertySymbols(a).filter((n=>Object.prototype.propertyIsEnumerable.call(a,n)))},Y9Rh:function(a,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return O}));var e=t("HALo"),s=t("dhJC"),p=t("q1tI"),c=t.n(p),l=t("7ljp"),o=t("YFqc"),i=t.n(o),r=t("tc9R"),u=t("pOT7"),d=t("vRWG"),g=t("I6Nb"),m=t("iWgA"),b=t.n(m),k=t("8C7G"),f=t("wH44");c.a.createElement;const v={Layout:d.DocumentationLayout,classes:{plugin:b()},meta:{title:"\u0412\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u0435 \u0441\u0435\u0431\u044f",description:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0444\u043b\u0435\u043a\u0441 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0438\u043b\u0438 \u0441\u0435\u0442\u043a\u0438 \u0432\u0434\u043e\u043b\u044c \u043f\u043e\u043f\u0435\u0440\u0435\u0447\u043d\u043e\u0439 \u043e\u0441\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430."},tableOfContents:[{title:"Auto",slug:"auto",children:[]},{title:"Start",slug:"start",children:[]},{title:"Center",slug:"center",children:[]},{title:"End",slug:"end",children:[]},{title:"Stretch",slug:"stretch",children:[]},{title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",slug:"adaptivnost",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]},h=g.ContentsLayout;function O(a){let{components:n}=a,t=Object(s.a)(a,["components"]);return Object(l.a)(h,Object(e.a)({},v,t,{components:n,mdxType:"MDXLayout"}),Object(l.a)("div",{className:"prose"},Object(l.a)(r.a,{level:2,id:"auto",toc:!0},"Auto"),Object(l.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(l.a)("inlineCode",{parentName:"p"},"self-auto")," \u0434\u043b\u044f \u0432\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 ",Object(l.a)("inlineCode",{parentName:"p"},"align-items"),":")),Object(l.a)(u.a,{preview:'\n  <div class="flex items-stretch h-24 space-x-2">\n    <div class="flex-1 rounded-md bg-emerald-300 text-white text-2xl font-extrabold flex items-center justify-center">1</div>\n    <div class="self-auto flex-1 rounded-md bg-emerald-500 text-white text-2xl font-extrabold flex items-center justify-center">2</div>\n    <div class="flex-1 rounded-md bg-emerald-300 text-white text-2xl font-extrabold flex items-center justify-center">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">self-auto</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-6",color:"emerald",min:!1}),Object(l.a)("div",{className:"prose"},Object(l.a)(r.a,{level:2,id:"start",toc:!0},"Start"),Object(l.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(l.a)("inlineCode",{parentName:"p"},"self-start"),", \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0440\u043e\u0432\u043d\u044f\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043f\u043e \u043d\u0430\u0447\u0430\u043b\u0443 \u043f\u043e\u043f\u0435\u0440\u0435\u0447\u043d\u043e\u0439 \u043e\u0441\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430, \u043d\u0435\u0441\u043c\u043e\u0442\u0440\u044f \u043d\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 ",Object(l.a)("inlineCode",{parentName:"p"},"align-items"),":")),Object(l.a)(u.a,{preview:'\n  <div class="flex items-stretch h-24 space-x-2">\n    <div class="flex-1 rounded-md bg-amber-300 text-white text-2xl font-extrabold flex items-center justify-center">1</div>\n    <div class="self-start flex-1 rounded-md bg-amber-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">2</div>\n    <div class="flex-1 rounded-md bg-amber-300 text-white text-2xl font-extrabold flex items-center justify-center">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">self-start</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-6",color:"amber",min:!1}),Object(l.a)("div",{className:"prose"},Object(l.a)(r.a,{level:2,id:"center",toc:!0},"Center"),Object(l.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(l.a)("inlineCode",{parentName:"p"},"self-center"),", \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0440\u043e\u0432\u043d\u044f\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043f\u043e \u0446\u0435\u043d\u0442\u0440\u0443 \u043f\u043e\u043f\u0435\u0440\u0435\u0447\u043d\u043e\u0439 \u043e\u0441\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430, \u043d\u0435\u0441\u043c\u043e\u0442\u0440\u044f \u043d\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 ",Object(l.a)("inlineCode",{parentName:"p"},"align-items"),":")),Object(l.a)(u.a,{preview:'\n  <div class="flex items-stretch h-24 space-x-2">\n    <div class="flex-1 rounded-md bg-purple-300 text-white text-2xl font-extrabold flex items-center justify-center">1</div>\n    <div class="self-center flex-1 rounded-md bg-purple-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">2</div>\n    <div class="flex-1 rounded-md bg-purple-300 text-white text-2xl font-extrabold flex items-center justify-center">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">self-center</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-6",color:"purple",min:!1}),Object(l.a)("div",{className:"prose"},Object(l.a)(r.a,{level:2,id:"end",toc:!0},"End"),Object(l.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(l.a)("inlineCode",{parentName:"p"},"self-end"),", \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0440\u043e\u0432\u043d\u044f\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043f\u043e \u043a\u043e\u043d\u0446\u0443 \u043f\u043e\u043f\u0435\u0440\u0435\u0447\u043d\u043e\u0439 \u043e\u0441\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430, \u043d\u0435\u0441\u043c\u043e\u0442\u0440\u044f \u043d\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 ",Object(l.a)("inlineCode",{parentName:"p"},"align-items"),":")),Object(l.a)(u.a,{preview:'\n  <div class="flex items-stretch h-24 space-x-2">\n    <div class="flex-1 rounded-md bg-rose-300 text-white text-2xl font-extrabold flex items-center justify-center">1</div>\n    <div class="self-end flex-1 rounded-md bg-rose-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">2</div>\n    <div class="flex-1 rounded-md bg-rose-300 text-white text-2xl font-extrabold flex items-center justify-center">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">self-end</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-6",color:"rose",min:!1}),Object(l.a)("div",{className:"prose"},Object(l.a)(r.a,{level:2,id:"stretch",toc:!0},"Stretch"),Object(l.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(l.a)("inlineCode",{parentName:"p"},"self-stretch"),", \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0441\u0442\u044f\u043d\u0443\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0434\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u043e\u043f\u0435\u0440\u0435\u0447\u043d\u043e\u0439 \u043e\u0441\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430, \u043d\u0435\u0441\u043c\u043e\u0442\u0440\u044f \u043d\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 ",Object(l.a)("inlineCode",{parentName:"p"},"align-items"),":")),Object(l.a)(u.a,{preview:'\n  <div class="flex items-stretch h-24 space-x-2">\n    <div class="flex-1 rounded-md bg-fuchsia-300 text-white text-2xl font-extrabold flex items-center justify-center">1</div>\n    <div class="self-stretch flex-1 rounded-md bg-fuchsia-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">2</div>\n    <div class="flex-1 rounded-md bg-fuchsia-300 text-white text-2xl font-extrabold flex items-center justify-center">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">self-stretch</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-6",color:"fuchsia",min:!1}),Object(l.a)("div",{className:"prose"},Object(l.a)(r.a,{level:2,id:"adaptivnost",toc:!0},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),Object(l.a)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u0435 \u0433\u0438\u0431\u043a\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",Object(l.a)("inlineCode",{parentName:"p"},"{screen}:")," \u043a \u043b\u044e\u0431\u043e\u043c\u0443 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u043c\u0443 \u043a\u043b\u0430\u0441\u0441\u0443 \u0443\u0442\u0438\u043b\u0438\u0442\u044b. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(l.a)("inlineCode",{parentName:"p"},"md:self-end"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",Object(l.a)("inlineCode",{parentName:"p"},"self-end")," \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u0445 \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0432\u044b\u0448\u0435."),Object(l.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(l.a)("pre",Object(e.a)({parentName:"div"},{className:"language-html"}),Object(l.a)("code",Object(e.a)({parentName:"pre"},{className:"language-html"}),Object(l.a)("span",Object(e.a)({parentName:"code"},{className:"token tag"}),Object(l.a)("span",Object(e.a)({parentName:"span"},{className:"token tag"}),Object(l.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(l.a)("span",Object(e.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(l.a)("span",Object(e.a)({parentName:"span"},{className:"token attr-value"}),Object(l.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(l.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),'"'),"items-stretch ...",Object(l.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(l.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(l.a)("span",Object(e.a)({parentName:"code"},{className:"token tag"}),Object(l.a)("span",Object(e.a)({parentName:"span"},{className:"token tag"}),Object(l.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(l.a)("span",Object(e.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(l.a)("span",Object(e.a)({parentName:"span"},{className:"token attr-value"}),Object(l.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(l.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),'"'),"self-auto ",Object(l.a)("span",Object(e.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:self-end")," ...",Object(l.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(l.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n    ",Object(l.a)("span",Object(e.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n  ",Object(l.a)("span",Object(e.a)({parentName:"code"},{className:"token tag"}),Object(l.a)("span",Object(e.a)({parentName:"span"},{className:"token tag"}),Object(l.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(l.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(l.a)("span",Object(e.a)({parentName:"code"},{className:"token tag"}),Object(l.a)("span",Object(e.a)({parentName:"span"},{className:"token tag"}),Object(l.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(l.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(l.a)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 Tailwind \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 ",Object(l.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(l.a)("a",null,"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430")),"."),Object(l.a)(r.a,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),Object(l.a)(r.a,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),Object(l.a)(k.a,{plugin:"alignSelf",name:"align-self",mdxType:"Variants"}),Object(l.a)("div",{className:"prose"},Object(l.a)(r.a,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),Object(l.a)(f.a,{plugin:"alignSelf",name:"align-self",mdxType:"Disabling"}))}O.isMDXComponent=!0,O.layoutProps=v},Zb5r:function(a,n,t){"use strict";function e(a){return a.reduce(((n,t,e)=>0===e?t:e===a.length-1?`${n} \u0438 ${t}`:`${n}, ${t}`),"")}t.d(n,"a",(function(){return e}))},iWgA:function(a,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:a,variants:n}){a({".self-auto":{"align-self":"auto"},".self-start":{"align-self":"flex-start"},".self-end":{"align-self":"flex-end"},".self-center":{"align-self":"center"},".self-stretch":{"align-self":"stretch"}},n("alignSelf"))}}},"p+I8":function(a,n,t){"use strict";a.exports=function(a){var n=typeof a;return null!==a&&("object"===n||"function"===n)}},pOT7:function(a,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return k}));var e=t("HALo"),s=t("q1tI"),p=t.n(s),c=t("iuhU"),l=t("ZMKu"),o=p.a.createElement;const i={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},r={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function g(a){const n=Object(s.useRef)(),{0:t,1:p}=Object(s.useState)(!1),{0:c,1:l}=Object(s.useState)({});return Object(s.useEffect)((()=>{if(!t)return;function a(){l({height:n.current.contentDocument.body.scrollHeight})}const e=new window.ResizeObserver(a);return a(),e.observe(n.current.contentDocument.body),()=>{e.disconnect()}}),[t]),o("iframe",Object(e.a)({},a,{ref:n,onLoad:()=>p(!0),style:c}))}function m({color:a,snippet:n}){return o("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",i[a],{"bg-gray-800":!i[a]})},o("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":i[a]})},o("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}})))}function b({preview:a,src:n,snippet:t,previewClassName:e,color:s="gray"}){return o("div",{className:"relative overflow-hidden mb-8"},a?o("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",r[s],e,{"p-10":!e}),dangerouslySetInnerHTML:{__html:a}}):o(g,{src:n,className:Object(c.a)("w-full rounded-t-xl",r[s])}),o(m,{color:s,snippet:t}))}function k({preview:a,src:n,previewClassName:t,snippet:e,color:p="gray",min:i=!1}){const b=Object(s.useRef)(),k=Object(l.h)(0),f=Object(s.useRef)(),{0:v,1:h}=Object(s.useState)(!1);return Object(s.useEffect)((()=>{const a=new window.ResizeObserver((()=>{k.set(0)}));return a.observe(b.current),()=>{a.disconnect()}}),[]),o("div",{className:"relative mb-8"},o("div",{ref:b,className:`relative rounded-t-xl ${u[p]}`},o("div",{className:i?"md:w-88":void 0},o(l.d.div,{className:"relative",style:{marginRight:Object(l.i)(k,(a=>-a))}},a?o("div",{className:Object(c.a)("rounded-t-xl",t,r[p],{"p-10":!t}),dangerouslySetInnerHTML:{__html:a}}):o(g,{src:n,className:Object(c.a)("w-full rounded-t-xl",r[p],{"pointer-events-none":v})}))),o("div",{ref:f,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},o(l.d.div,{drag:"x",_dragX:k,dragMomentum:!1,dragElastic:0,dragConstraints:f,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing "+(i?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:k},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),h(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),h(!1)}},o("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},o("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:`h-3 flex-none ${d[p]}`,style:{width:"0.4375rem"}},o("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),o(m,{color:p,snippet:e}))}},wH44:function(a,n,t){"use strict";t.d(n,"a",(function(){return d}));var e=t("cpVT"),s=t("q1tI"),p=t.n(s),c=t("AOjV"),l=t("AI3G"),o=t("Zb5r"),i=p.a.createElement;function r(a,n){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),t.push.apply(t,e)}return t}function u(a){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){Object(e.a)(a,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(t,n))}))}return a}function d({plugin:a,name:n}){const t=Object(l.a)(a);return n=n||a.replace(/([a-z])([A-Z])/g,((a,n,t)=>`${n} ${t.toLowerCase()}`)),i("div",{className:"prose"},i("p",null,"\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",n,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",i("span",{dangerouslySetInnerHTML:{__html:Object(o.a)(t.map((a=>`<code>${a}</code>`)))}})," ",t.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",i("code",null,"false")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",i("code",null,"corePlugins")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"),i(c.a,{path:"corePlugins",before:"...",add:t.reduce(((a,n)=>u(u({},a),{},{[n]:!1})),{})}))}}},[["2c5R",0,2,6,1,3,4,5,7]]]);