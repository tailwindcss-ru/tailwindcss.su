(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[83],{"7WJl":function(a,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/divide-color",function(){return e("OvEn")}])},OvEn:function(a,n,e){"use strict";e.r(n),e.d(n,"Layout",(function(){return j})),e.d(n,"classes",(function(){return f})),e.d(n,"meta",(function(){return y})),e.d(n,"tableOfContents",(function(){return N})),e.d(n,"default",(function(){return C}));var s=e("wx14"),t=e("Ff2n"),p=e("q1tI"),c=e.n(p),o=e("7ljp"),i=e("YFqc"),l=e.n(i),d=e("tc9R"),r=e("pOT7"),u=e("vRWG"),v=e("I6Nb"),b=e("dYni"),k=e.n(b),m=e("8C7G"),g=e("wH44"),O=e("Ca+n"),j=(c.a.createElement,u.DocumentationLayout),f={plugin:k(),filterProperties:(a,n)=>!a.includes("--")&&!n.includes("--"),transformSelector:a=>Object(o.a)(c.a.Fragment,null,a.split(">").shift().trim()," ",Object(o.a)("span",{className:"ml-1 text-purple-300"},"> * + *")),preview:(a,n)=>{var{className:e}=n;return Object(o.a)("td",{className:"relative w-20 p-2 ".concat(e)},Object(o.a)("div",{className:"absolute inset-0 flex flex-col m-2"},Object(o.a)("div",{className:"flex-1"}),Object(o.a)("div",{className:"flex-1 border-t",style:{borderColor:Array.isArray(a["border-color"])?a["border-color"][0]:a["border-color"]}})))}},y={title:"Divide Color",description:"Utilities for controlling the border color between elements.",featureVersion:"v1.3.0+"},N=[{title:"Usage",slug:"usage",children:[{title:"Changing opacity",slug:"changing-opacity"}]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Border Colors",slug:"border-colors"},{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],h={Layout:j,classes:f,meta:y,tableOfContents:N},x=v.ContentsLayout;function C(a){var{components:n}=a,e=Object(t.a)(a,["components"]);return Object(o.a)(x,Object(s.a)({},h,e,{components:n,mdxType:"MDXLayout"}),Object(o.a)(d.a,{level:2,id:"usage",toc:!0},"Usage"),Object(o.a)("p",null,"Control the border color between elements using the ",Object(o.a)("inlineCode",{parentName:"p"},"divide-{color}")," utilities."),Object(o.a)(r.a,{preview:'\n  <div class="divide-y divide-blue-300">\n    <div class="text-center py-2">1</div>\n    <div class="text-center py-2">2</div>\n    <div class="text-center py-2">3</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>divide-y divide-blue-300<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-center py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-center py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-center py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(o.a)(d.a,{level:3,id:"changing-opacity",toc:!0,badge:"v1.4.0+",mdxType:"Heading"},"Changing opacity"),Object(o.a)("p",null,"Control the opacity of borders between elements using the ",Object(o.a)("inlineCode",{parentName:"p"},".divide-opacity-{amount}")," utilities."),Object(o.a)(r.a,{preview:'\n  <div class="divide-y-4 divide-black divide-opacity-25">\n    <div class="text-center py-2">1</div>\n    <div class="text-center py-2">2</div>\n    <div class="text-center py-2">3</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>divide-y-4 divide-black divide-opacity-25<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-center py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-center py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-center py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"bg-checkered p-4"}),Object(o.a)("p",null,"Learn more in the ",Object(o.a)(l.a,{href:"/docs/divide-opacity",passHref:!0},Object(o.a)("a",null,"divide opacity documentation")),"."),Object(o.a)("hr",null),Object(o.a)(d.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control the borders between elements at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing divide utility. For example, adding the class ",Object(o.a)("inlineCode",{parentName:"p"},"md:divide-x-8")," to an element would apply the ",Object(o.a)("inlineCode",{parentName:"p"},"divide-x-8")," utility at medium screen sizes and above."),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(O.a,{classNames:["divide-teal-400","divide-pink-400","divide-orange-400","divide-green-400","divide-red-400"],snippet:a=>'\n    <div class="'.concat(a,' divide-y">\n      <div class="text-center py-2">1</div>\n      <div class="text-center py-2">2</div>\n      <div class="text-center py-2">3</div>\n    </div>\n  '),preview:a=>Object(o.a)("div",{className:"divide-y ".concat(a)},Object(o.a)("div",{className:"text-center py-2"},"1"),Object(o.a)("div",{className:"text-center py-2"},"2"),Object(o.a)("div",{className:"text-center py-2"},"3")),mdxType:"ResponsiveCodeSample"}),Object(o.a)("hr",null),Object(o.a)(d.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(d.a,{level:3,id:"border-colors",toc:!0},"Border Colors"),Object(o.a)("p",null,"By default Tailwind makes the entire ",Object(o.a)(l.a,{href:"/docs/customizing-colors#default-color-palette",passHref:!0},Object(o.a)("a",null,"default color palette"))," available as divide colors."),Object(o.a)("p",null,"You can ",Object(o.a)(l.a,{href:"/docs/colors#customizing",passHref:!0},Object(o.a)("a",null,"customize your color palette"))," by editing the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.colors")," section of your ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file, customize just your border and divide colors together using the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.borderColor")," section, or customize only the divide colors using the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.divideColor")," section."),Object(o.a)("pre",{className:"language-diff"},Object(o.a)("code",Object(s.a)({parentName:"pre"},{className:"language-diff"}),Object(o.a)("span",Object(s.a)({parentName:"code"},{className:"token unchanged"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     divideColor: theme => ({\n"),Object(o.a)("span",Object(s.a)({parentName:"code"},{className:"token deleted-sign deleted"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ...theme('borderColors'),\n"),Object(o.a)("span",Object(s.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       'primary': '#3490dc',\n",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       'secondary': '#ffed4a',\n",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       'danger': '#e3342f',\n"),Object(o.a)("span",Object(s.a)({parentName:"code"},{className:"token unchanged"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     })\n",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(o.a)(d.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(o.a)(m.a,{plugin:"divideColor",mdxType:"Variants"}),Object(o.a)(d.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(o.a)(g.a,{plugin:"divideColor",mdxType:"Disabling"}))}C.isMDXComponent=!0,C.layoutProps=h},dYni:function(a,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:a,e:n,theme:e,variants:c,target:o,corePlugins:i}){const l=(0,t.default)(e("divideColor")),d=a=>"ie11"===o("divideColor")?{"border-color":a}:i("divideOpacity")?(0,p.default)({color:a,property:"border-color",variable:"--divide-opacity"}):{"border-color":a};a(s.default.fromPairs(s.default.map(s.default.omit(l,"default"),(a,e)=>[`.${n(`divide-${e}`)} > :not(template) ~ :not(template)`,d(a)])),c("divideColor"))}};var s=c(e("LvDl")),t=c(e("9Jru")),p=c(e("kFV+"));function c(a){return a&&a.__esModule?a:{default:a}}}},[["7WJl",0,2,5,1,3,4,9]]]);