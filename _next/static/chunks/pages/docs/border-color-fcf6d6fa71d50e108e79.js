_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[47],{"8C7G":function(a,e,t){"use strict";t.d(e,"a",(function(){return l}));var n=t("q1tI"),s=t.n(n),c=t("98BF"),o=t("Zb5r"),r=t("AOjV"),p=s.a.createElement;function l({plugin:a,name:e}){const t=c.defaultConfig.variants[a]||["responsive"];e=e||a.replace(/([a-z])([A-Z])/g,((a,e,t)=>`${e} ${t.toLowerCase()}`));const n=["responsive","hover","focus","active","group-hover"].filter((a=>!t.includes(a))).slice(0,2),s=`\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ${t.length?`\u0442\u043e\u043b\u044c\u043a\u043e ${Object(o.a)(t).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")}`:"\u043d\u0435\u0442"} \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ${e}.`;return p("div",{className:"prose"},p("p",{dangerouslySetInnerHTML:{__html:s}}),p("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",e," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",p("code",null,a)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",p("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",p("code",null,"tailwind.config.js"),"."),p("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",t.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(o.a)(n),":"),p(r.a,{path:"variants.extend",before:"...",add:{[a]:n}}))}},"9Jru":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;const n=a=>Object.assign({},...Object.entries(a).flatMap((([a,e])=>"object"==typeof e?Object.entries(n(e)).map((([e,t])=>({[a+("DEFAULT"===e?"":`-${e}`)]:t}))):[{[`${a}`]:e}])));var s=n;e.default=s},"9x0n":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return function({config:a,addBase:e,matchUtilities:t,theme:c,variants:o,corePlugins:r}){r("borderOpacity")?e({"*, ::before, ::after":(0,s.default)({color:c("borderColor.DEFAULT","currentColor"),property:"border-color",variable:"--tw-border-opacity"})}):e({"*, ::before, ::after":{"border-color":c("borderColor.DEFAULT","currentColor")}}),t({border:a=>r("borderOpacity")?(0,s.default)({color:a,property:"border-color",variable:"--tw-border-opacity"}):{"border-color":a}},{values:(({DEFAULT:a,...e})=>e)((0,n.default)(c("borderColor"))),variants:o("borderColor"),type:"color"}),"jit"===a("mode")&&t({"border-t":a=>r("borderOpacity")?(0,s.default)({color:a,property:"border-top-color",variable:"--tw-border-opacity"}):{"border-top-color":a},"border-r":a=>r("borderOpacity")?(0,s.default)({color:a,property:"border-right-color",variable:"--tw-border-opacity"}):{"border-right-color":a},"border-b":a=>r("borderOpacity")?(0,s.default)({color:a,property:"border-bottom-color",variable:"--tw-border-opacity"}):{"border-bottom-color":a},"border-l":a=>r("borderOpacity")?(0,s.default)({color:a,property:"border-left-color",variable:"--tw-border-opacity"}):{"border-left-color":a}},{values:(({DEFAULT:a,...e})=>e)((0,n.default)(c("borderColor"))),variants:o("borderColor"),type:"color"})}};var n=c(t("9Jru")),s=c(t("kFV+"));function c(a){return a&&a.__esModule?a:{default:a}}},RjVE:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return h}));var n=t("HALo"),s=t("dhJC"),c=t("q1tI"),o=t.n(c),r=t("7ljp"),p=t("YFqc"),l=t.n(p),i=t("tc9R"),b=t("pOT7"),u=t("vRWG"),d=t("I6Nb"),m=t("9x0n"),j=t.n(m),O=t("8C7G"),g=t("wH44");o.a.createElement;const N={Layout:u.DocumentationLayout,classes:{plugin:j(),preview:(a,{className:e})=>Object(r.a)("td",{className:`relative w-16 p-2 font-mono text-xs whitespace-pre ${e}`},Object(r.a)("div",{className:"absolute inset-0 m-2 border",style:{borderColor:Array.isArray(a["border-color"])?a["border-color"][0]:a["border-color"]}}))},meta:{title:"\u0426\u0432\u0435\u0442 \u0433\u0440\u0430\u043d\u0438\u0446\u044b",description:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0446\u0432\u0435\u0442\u043e\u043c \u0433\u0440\u0430\u043d\u0438\u0446 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430.",features:{responsive:!0,customizable:!0,hover:!0,focus:!1}},tableOfContents:[{title:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435",slug:"primenenie",children:[{title:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043d\u0435\u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u0438",slug:"izmenenie-neprozrachnosti"}]},{title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",slug:"adaptivnost",children:[]},{title:"\u041d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0435",slug:"navedenie",children:[]},{title:"\u0424\u043e\u043a\u0443\u0441",slug:"fokus",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0426\u0432\u0435\u0442\u0430 \u0433\u0440\u0430\u043d\u0438\u0446\u044b",slug:"czveta-graniczy"},{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]},k=d.ContentsLayout;function h(a){let{components:e}=a,t=Object(s.a)(a,["components"]);return Object(r.a)(k,Object(n.a)({},N,t,{components:e,mdxType:"MDXLayout"}),Object(r.a)("div",{className:"prose"},Object(r.a)(i.a,{level:2,id:"primenenie",toc:!0},"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435"),Object(r.a)("p",null,"\u0423\u043f\u0440\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u0446\u0432\u0435\u0442\u043e\u043c \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0443\u0442\u0438\u043b\u0438\u0442 ",Object(r.a)("inlineCode",{parentName:"p"},"border-{color}"),".")),Object(r.a)(b.a,{preview:'\n  <div class="max-w-xs w-full mx-auto">\n    <input class="border border-red-500 bg-white text-gray-900 appearance-none block w-full rounded-md py-3 px-4 focus:outline-none" placeholder="Your email">\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border-2 <span class="code-highlight bg-code-highlight">border-red-500</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"rose",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(i.a,{level:3,id:"izmenenie-neprozrachnosti",toc:!0},"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043d\u0435\u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u0438"),Object(r.a)("p",null,"\u0423\u043f\u0440\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u043d\u0435\u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u044c\u044e \u0446\u0432\u0435\u0442\u0430 \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0443\u0442\u0438\u043b\u0438\u0442 ",Object(r.a)("inlineCode",{parentName:"p"},"border-opacity-{amount}"),".")),Object(r.a)(b.a,{preview:'\n  <div class="grid grid-cols-2 gap-2 sm:grid-cols-5">\n    <div class="h-16 flex-1 rounded border-4 border-light-blue-500 border-opacity-100 font-extrabold text-light-blue-600 flex justify-center items-center">100%</div>\n    <div class="h-16 flex-1 rounded border-4 border-light-blue-500 border-opacity-75 font-extrabold text-light-blue-600 flex justify-center items-center">75%</div>\n    <div class="h-16 flex-1 rounded border-4 border-light-blue-500 border-opacity-50 font-extrabold text-light-blue-600 flex justify-center items-center">50%</div>\n    <div class="h-16 flex-1 rounded border-4 border-light-blue-500 border-opacity-25 font-extrabold text-light-blue-600 flex justify-center items-center">25%</div>\n    <div class="h-16 flex-1 rounded border-4 border-light-blue-500 border-opacity-0 font-extrabold text-light-blue-600 flex justify-center items-center">0%</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border-4 border-light-blue-500 <span class="code-highlight bg-code-highlight">border-opacity-100</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border-4 border-light-blue-500 <span class="code-highlight bg-code-highlight">border-opacity-75</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border-4 border-light-blue-500 <span class="code-highlight bg-code-highlight">border-opacity-50</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border-4 border-light-blue-500 <span class="code-highlight bg-code-highlight">border-opacity-25</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border-4 border-light-blue-500 <span class="code-highlight bg-code-highlight">border-opacity-0</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)("p",null,"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432 ",Object(r.a)(l.a,{href:"/docs/border-opacity",passHref:!0},Object(r.a)("a",null,"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u043f\u043e \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u0438 \u0433\u0440\u0430\u043d\u0438\u0446\u044b")),"."),Object(r.a)(i.a,{level:2,id:"adaptivnost",toc:!0},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),Object(r.a)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0446\u0432\u0435\u0442\u043e\u043c \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," \u043a \u043b\u044e\u0431\u043e\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0443\u0442\u0438\u043b\u0438\u0442\u0435 \u0446\u0432\u0435\u0442\u0430 \u0433\u0440\u0430\u043d\u0438\u0446\u044b. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(r.a)("inlineCode",{parentName:"p"},"md:border-green-500"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",Object(r.a)("inlineCode",{parentName:"p"},"border-green-500")," \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u0445 \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0432\u044b\u0448\u0435."),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"border-blue-500 ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:border-green-500")," ...",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  Button\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"button"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 Tailwind \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 ",Object(r.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(r.a)("a",null,"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430")),"."),Object(r.a)(i.a,{level:2,id:"navedenie",toc:!0},"\u041d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0435"),Object(r.a)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0446\u0432\u0435\u0442\u043e\u043c \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",Object(r.a)("inlineCode",{parentName:"p"},"hover:")," \u043a \u043b\u044e\u0431\u043e\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0443\u0442\u0438\u043b\u0438\u0442\u0435 \u0446\u0432\u0435\u0442\u0430 \u0433\u0440\u0430\u043d\u0438\u0446\u044b. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(r.a)("inlineCode",{parentName:"p"},"hover:border-blue-500"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",Object(r.a)("inlineCode",{parentName:"p"},"border-blue-500")," \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438 \u043a\u0443\u0440\u0441\u043e\u0440\u0430.")),Object(r.a)(b.a,{preview:'\n  <div class="flex items-center justify-center">\n    <button class="border-2 border-purple-500 hover:border-gray-500 bg-transparent text-purple-700 hover:text-gray-700 py-3 px-4 font-semibold rounded-md">\n      \u041a\u043d\u043e\u043f\u043a\u0430\n    </button>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border-2 border-purple-500 <span class="code-highlight bg-code-highlight">hover:border-gray-500</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  \u041a\u043d\u043e\u043f\u043a\u0430\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)("p",null,"\u0423\u0442\u0438\u043b\u0438\u0442\u044b Hover \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u043a\u043e\u043c\u0431\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u043c\u0438 \u0443\u0442\u0438\u043b\u0438\u0442\u0430\u043c\u0438, \u0434\u043e\u0431\u0430\u0432\u0438\u0432 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," ",Object(r.a)("em",{parentName:"p"},"\u043f\u0435\u0440\u0435\u0434")," \u043f\u0440\u0435\u0444\u0438\u043a\u0441\u043e\u043c ",Object(r.a)("inlineCode",{parentName:"p"},"hover:"),"."),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"... md:border-blue-500 md:hover:border-blue-700 ...",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\u041a\u043d\u043e\u043f\u043a\u0430",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"button"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)(i.a,{level:2,id:"fokus",toc:!0},"\u0424\u043e\u043a\u0443\u0441"),Object(r.a)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0446\u0432\u0435\u0442\u043e\u043c \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u0444\u043e\u043a\u0443\u0441\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",Object(r.a)("inlineCode",{parentName:"p"},"focus:")," \u043a \u043b\u044e\u0431\u043e\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0443\u0442\u0438\u043b\u0438\u0442\u0435 \u0446\u0432\u0435\u0442\u0430 \u0433\u0440\u0430\u043d\u0438\u0446\u044b. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(r.a)("inlineCode",{parentName:"p"},"focus:border-blue-500"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",Object(r.a)("inlineCode",{parentName:"p"},"border-blue-500")," \u043a \u0444\u043e\u043a\u0443\u0441\u0443.")),Object(r.a)(b.a,{preview:'\n  <div class="max-w-xs w-full mx-auto">\n    <input class="border border-gray-300 bg-white text-gray-900 appearance-none block w-full rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none" placeholder="Your email">\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-red-500 focus:border-blue-500 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"blue",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)("p",null,"\u0423\u0442\u0438\u043b\u0438\u0442\u044b Focus \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u043a\u043e\u043c\u0431\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u043c\u0438 \u0443\u0442\u0438\u043b\u0438\u0442\u0430\u043c\u0438, \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044f \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," ",Object(r.a)("em",{parentName:"p"},"\u043f\u0435\u0440\u0435\u0434")," \u043f\u0440\u0435\u0444\u0438\u043a\u0441\u043e\u043c ",Object(r.a)("inlineCode",{parentName:"p"},"focus:"),"."),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"input")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"... md:border-gray-200 md:focus:border-white ...",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)("hr",null),Object(r.a)(i.a,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),Object(r.a)(i.a,{level:3,id:"czveta-graniczy",toc:!0},"\u0426\u0432\u0435\u0442\u0430 \u0433\u0440\u0430\u043d\u0438\u0446\u044b"),Object(r.a)("p",null,"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e Tailwind \u0434\u0435\u043b\u0430\u0435\u0442 \u0432\u0441\u044e ",Object(r.a)(l.a,{href:"/docs/customizing-colors#default-color-palette",passHref:!0},Object(r.a)("a",null,"\u0446\u0432\u0435\u0442\u043e\u0432\u0443\u044e \u043f\u0430\u043b\u0438\u0442\u0440\u0443 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"))," \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0439 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0446\u0432\u0435\u0442\u043e\u0432 \u0433\u0440\u0430\u043d\u0438\u0446."),Object(r.a)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 ",Object(r.a)(l.a,{href:"/docs/colors#customizing",passHref:!0},Object(r.a)("a",null,"\u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0441\u0432\u043e\u044e \u0446\u0432\u0435\u0442\u043e\u0432\u0443\u044e \u043f\u0430\u043b\u0438\u0442\u0440\u0443")),", \u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0432 \u0440\u0430\u0437\u0434\u0435\u043b ",Object(r.a)("inlineCode",{parentName:"p"},"theme.colors")," \u0432\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 ",Object(r.a)("inlineCode",{parentName:"p"},"tailwind.config.js"),", \u0438\u043b\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0446\u0432\u0435\u0442\u0430 \u0433\u0440\u0430\u043d\u0438\u0446, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0440\u0430\u0437\u0434\u0435\u043b ",Object(r.a)("inlineCode",{parentName:"p"},"theme.borderColor"),"."),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token function-variable function"}),"borderColor"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token parameter"}),"theme")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token arrow operator"}),"=>")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"("),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token deleted-sign deleted language-js"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token spread operator"}),"..."),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token method function property-access"}),"theme"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"("),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'colors'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),")"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token constant"}),"DEFAULT"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token function"}),"theme"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"("),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'colors.gray.300'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),",")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'currentColor'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),")"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'primary'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'#3490dc'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'secondary'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'#ffed4a'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'danger'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'#e3342f'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),")"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(r.a)(i.a,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),Object(r.a)(O.a,{plugin:"borderColor",mdxType:"Variants"}),Object(r.a)("div",{className:"prose"},Object(r.a)(i.a,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),Object(r.a)(g.a,{plugin:"borderColor",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=N},gVji:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/border-color",function(){return t("RjVE")}])},pOT7:function(a,e,t){"use strict";t.d(e,"a",(function(){return j})),t.d(e,"b",(function(){return O}));var n=t("HALo"),s=t("q1tI"),c=t.n(s),o=t("iuhU"),r=t("ZMKu"),p=c.a.createElement;const l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},i={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},b={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},u={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function d(a){const e=Object(s.useRef)(),{0:t,1:c}=Object(s.useState)(!1),{0:o,1:r}=Object(s.useState)({});return Object(s.useEffect)((()=>{if(!t)return;function a(){r({height:e.current.contentDocument.body.scrollHeight})}const n=new window.ResizeObserver(a);return a(),n.observe(e.current.contentDocument.body),()=>{n.disconnect()}}),[t]),p("iframe",Object(n.a)({},a,{ref:e,onLoad:()=>c(!0),style:o}))}function m({color:a,snippet:e}){return p("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",l[a],{"bg-gray-800":!l[a]})},p("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[a]})},p("code",{className:"language-html",dangerouslySetInnerHTML:{__html:e}})))}function j({preview:a,src:e,snippet:t,previewClassName:n,color:s="gray"}){return p("div",{className:"relative overflow-hidden mb-8"},a?p("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",i[s],n,{"p-10":!n}),dangerouslySetInnerHTML:{__html:a}}):p(d,{src:e,className:Object(o.a)("w-full rounded-t-xl",i[s])}),p(m,{color:s,snippet:t}))}function O({preview:a,src:e,previewClassName:t,snippet:n,color:c="gray",min:l=!1}){const j=Object(s.useRef)(),O=Object(r.h)(0),g=Object(s.useRef)(),{0:N,1:k}=Object(s.useState)(!1);return Object(s.useEffect)((()=>{const a=new window.ResizeObserver((()=>{O.set(0)}));return a.observe(j.current),()=>{a.disconnect()}}),[]),p("div",{className:"relative mb-8"},p("div",{ref:j,className:`relative rounded-t-xl ${b[c]}`},p("div",{className:l?"md:w-88":void 0},p(r.d.div,{className:"relative",style:{marginRight:Object(r.i)(O,(a=>-a))}},a?p("div",{className:Object(o.a)("rounded-t-xl",t,i[c],{"p-10":!t}),dangerouslySetInnerHTML:{__html:a}}):p(d,{src:e,className:Object(o.a)("w-full rounded-t-xl",i[c],{"pointer-events-none":N})}))),p("div",{ref:g,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},p(r.d.div,{drag:"x",_dragX:O,dragMomentum:!1,dragElastic:0,dragConstraints:g,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing "+(l?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:O},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),k(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),k(!1)}},p("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},p("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:`h-3 flex-none ${u[c]}`,style:{width:"0.4375rem"}},p("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),p(m,{color:c,snippet:n}))}}},[["gVji",0,2,6,8,1,3,4,5,7,9]]]);