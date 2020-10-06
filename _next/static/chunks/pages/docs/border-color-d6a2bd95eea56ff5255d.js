_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[66],{"9x0n":function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return function({addUtilities:a,e:e,theme:n,variants:c,target:p,corePlugins:r}){const l=(0,s.default)(n("borderColor")),i=a=>"ie11"===p("borderColor")?{"border-color":a}:r("borderOpacity")?(0,o.default)({color:a,property:"border-color",variable:"--border-opacity"}):{"border-color":a};a(t.default.fromPairs(t.default.map(t.default.omit(l,"default"),(a,n)=>[`.${e(`border-${n}`)}`,i(a)])),c("borderColor"))}};var t=c(n("LvDl")),s=c(n("9Jru")),o=c(n("kFV+"));function c(a){return a&&a.__esModule?a:{default:a}}},RjVE:function(a,e,n){"use strict";n.r(e),n.d(e,"Layout",(function(){return N})),n.d(e,"classes",(function(){return f})),n.d(e,"meta",(function(){return v})),n.d(e,"tableOfContents",(function(){return h})),n.d(e,"default",(function(){return C}));var t=n("wx14"),s=n("Ff2n"),o=n("q1tI"),c=n.n(o),p=n("7ljp"),r=n("YFqc"),l=n.n(r),i=n("tc9R"),u=n("pOT7"),b=n("vRWG"),d=n("I6Nb"),m=n("9x0n"),j=n.n(m),O=n("8C7G"),k=n("wH44"),g=n("Ca+n"),N=(c.a.createElement,b.DocumentationLayout),f={plugin:j.a,filterProperties:function(a,e){return!a.includes("--")&&!e.includes("--")},preview:function(a,e){var n=e.className;return Object(p.a)("td",{className:"relative w-16 p-2 font-mono text-xs whitespace-pre ".concat(n)},Object(p.a)("div",{className:"absolute inset-0 m-2 border",style:{borderColor:Array.isArray(a["border-color"])?a["border-color"][0]:a["border-color"]}}))}},v={title:"Border Color",description:"Utilities for controlling the color of an element's borders.",features:{responsive:!0,customizable:!0,hover:!0,focus:!1}},h=[{title:"Usage",slug:"usage",children:[{title:"Changing opacity",slug:"changing-opacity"}]},{title:"Responsive",slug:"responsive",children:[]},{title:"Hover",slug:"hover",children:[]},{title:"Focus",slug:"focus",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Border Colors",slug:"border-colors"},{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],y={Layout:N,classes:f,meta:v,tableOfContents:h},x=d.ContentsLayout;function C(a){var e=a.components,n=Object(s.a)(a,["components"]);return Object(p.a)(x,Object(t.a)({},y,n,{components:e,mdxType:"MDXLayout"}),Object(p.a)(i.a,{level:2,id:"usage",toc:!0},"Usage"),Object(p.a)("p",null,"Control the border color of an element using the ",Object(p.a)("inlineCode",{parentName:"p"},".border-{color}")," utilities."),Object(p.a)(u.a,{preview:'\n  <div class="max-w-xs w-full mx-auto">\n    <input class="border border-red-500 bg-white text-gray-900 appearance-none block w-full text-gray-900 border rounded py-3 px-4 focus:outline-none" placeholder="Your email">\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-red-500 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',previewClassName:"text-center p-4"}),Object(p.a)(i.a,{level:3,id:"changing-opacity",toc:!0,badge:"v1.4.0+",mdxType:"Heading"},"Changing opacity"),Object(p.a)("p",null,"Control the opacity of an element's border color using the ",Object(p.a)("inlineCode",{parentName:"p"},".border-opacity-{amount}")," utilities."),Object(p.a)(u.a,{preview:'\n  <div class="flex justify-around">\n    <div class="h-16 w-16 rounded border-4 border-blue-500 border-opacity-100"></div>\n    <div class="h-16 w-16 rounded border-4 border-blue-500 border-opacity-75"></div>\n    <div class="h-16 w-16 rounded border-4 border-blue-500 border-opacity-50"></div>\n    <div class="h-16 w-16 rounded border-4 border-blue-500 border-opacity-25"></div>\n    <div class="h-16 w-16 rounded border-4 border-blue-500 border-opacity-0"></div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border-blue-500 border-opacity-100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border-blue-500 border-opacity-75<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border-blue-500 border-opacity-50<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border-blue-500 border-opacity-25<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border-blue-500 border-opacity-0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"bg-checkered p-4"}),Object(p.a)("p",null,"Learn more in the ",Object(p.a)(l.a,{href:"/docs/border-opacity",passHref:!0},Object(p.a)("a",null,"border opacity documentation")),"."),Object(p.a)(i.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(p.a)("p",null,"To control the border color of an element at a specific breakpoint, add a ",Object(p.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing border color utility. For example, use ",Object(p.a)("inlineCode",{parentName:"p"},"md:border-green-500")," to apply the ",Object(p.a)("inlineCode",{parentName:"p"},"border-green-500")," utility at only medium screen sizes and above."),Object(p.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(p.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(p.a)("a",null,"Responsive Design"))," documentation."),Object(p.a)(g.a,{classNames:["border-blue-500","border-green-500","border-indigo-500","border-red-500","border-black"],snippet:function(a){return'\n    <button class="'.concat(a,' ...">\n      Button\n    </button>\n  ')},preview:function(a){return Object(p.a)("div",{className:"text-center"},Object(p.a)("button",{className:"border-2 bg-transparent py-2 px-4 font-semibold rounded ".concat(a," ").concat({"border-blue-500":"text-blue-700","border-green-500":"text-green-700","border-indigo-500":"text-indigo-700","border-red-500":"text-red-700","border-black":"text-gray-900"}[a])},"Button"))},mdxType:"ResponsiveCodeSample"}),Object(p.a)(i.a,{level:2,id:"hover",toc:!0},"Hover"),Object(p.a)("p",null,"To control the border color of an element on hover, add the ",Object(p.a)("inlineCode",{parentName:"p"},"hover:")," prefix to any existing border color utility. For example, use ",Object(p.a)("inlineCode",{parentName:"p"},"hover:border-blue-500")," to apply the ",Object(p.a)("inlineCode",{parentName:"p"},"border-blue-500")," utility on hover."),Object(p.a)(u.a,{preview:'\n  <button class="border-2 border-blue-500 hover:border-red-500 bg-transparent text-blue-700 hover:text-red-700 py-2 px-4 font-semibold rounded">\n    Button\n  </button>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border-2 border-blue-500 hover:border-red-500 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Button\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',previewClassName:"text-center p-4"}),Object(p.a)("p",null,"Hover utilities can also be combined with responsive utilities by adding the responsive ",Object(p.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix ",Object(p.a)("em",{parentName:"p"},"before")," the ",Object(p.a)("inlineCode",{parentName:"p"},"focus:")," prefix."),Object(p.a)("pre",{className:"language-html"},Object(p.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"... md:border-blue-500 md:hover:border-blue-700 ...",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"Button",Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"button"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")))),Object(p.a)(i.a,{level:2,id:"focus",toc:!0},"Focus"),Object(p.a)("p",null,"To control the border color of an element on focus, add the ",Object(p.a)("inlineCode",{parentName:"p"},"focus:")," prefix to any existing border color utility. For example, use ",Object(p.a)("inlineCode",{parentName:"p"},"focus:border-blue-500")," to apply the ",Object(p.a)("inlineCode",{parentName:"p"},"border-blue-500")," utility on focus."),Object(p.a)(u.a,{preview:'\n  <div class="max-w-xs w-full mx-auto">\n    <input class="border border-gray-400 focus:border-blue-500 bg-white text-gray-900 appearance-none inline-block w-full text-gray-900 border rounded py-3 px-4 focus:outline-none" placeholder="Focus me">\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border-gray-400 focus:border-blue-500 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(p.a)("p",null,"Focus utilities can also be combined with responsive utilities by adding the responsive ",Object(p.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix ",Object(p.a)("em",{parentName:"p"},"before")," the ",Object(p.a)("inlineCode",{parentName:"p"},"focus:")," prefix."),Object(p.a)("pre",{className:"language-html"},Object(p.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"input")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"... md:border-gray-200 md:focus:border-white ...",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")))),Object(p.a)("hr",null),Object(p.a)(i.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(p.a)(i.a,{level:3,id:"border-colors",toc:!0},"Border Colors"),Object(p.a)("p",null,"By default Tailwind makes the entire ",Object(p.a)(l.a,{href:"/docs/customizing-colors#default-color-palette",passHref:!0},Object(p.a)("a",null,"default color palette"))," available as border colors."),Object(p.a)("p",null,"You can ",Object(p.a)(l.a,{href:"/docs/colors#customizing",passHref:!0},Object(p.a)("a",null,"customize your color palette"))," by editing the ",Object(p.a)("inlineCode",{parentName:"p"},"theme.colors")," section of your ",Object(p.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file, or customize just your border colors using the ",Object(p.a)("inlineCode",{parentName:"p"},"theme.borderColor")," section."),Object(p.a)("pre",{className:"language-diff"},Object(p.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff"}),Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     borderColor: theme => ({\n"),Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token deleted-sign deleted"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ...theme('colors'),\n"),Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       default: theme('colors.gray.300', 'currentColor'),\n"),Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       'primary': '#3490dc',\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       'secondary': '#ffed4a',\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       'danger': '#e3342f',\n"),Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     })\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(p.a)(i.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(p.a)(O.a,{plugin:"borderColor",mdxType:"Variants"}),Object(p.a)(i.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(p.a)(k.a,{plugin:"borderColor",mdxType:"Disabling"}))}C.isMDXComponent=!0,C.layoutProps=y},gVji:function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/border-color",function(){return n("RjVE")}])}},[["gVji",0,2,5,1,3,4,9]]]);