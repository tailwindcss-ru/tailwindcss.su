_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[90],{"/5Oe":function(n,a,t){"use strict";t.r(a),t.d(a,"Layout",(function(){return b})),t.d(a,"classes",(function(){return y})),t.d(a,"meta",(function(){return h})),t.d(a,"tableOfContents",(function(){return O})),t.d(a,"default",(function(){return N}));var e=t("wx14"),s=t("Ff2n"),p=t("q1tI"),c=t.n(p),o=t("7ljp"),i=t("YFqc"),l=t.n(i),r=t("tc9R"),u=t("pOT7"),g=t("vRWG"),d=t("I6Nb"),m=t("V0zS"),f=t.n(m),k=t("8C7G"),x=t("wH44"),v=t("Ca+n"),b=(c.a.createElement,g.DocumentationLayout),y={plugin:f.a},h={title:"Flex",description:"Utilities for controlling how flex items both grow and shrink.",features:{responsive:!0,customizable:!0,hover:!1,focus:!1}},O=[{title:"Initial",slug:"initial",children:[]},{title:"Flex 1",slug:"flex-1",children:[]},{title:"Auto",slug:"auto",children:[]},{title:"None",slug:"none",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Flex Values",slug:"flex-values"},{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],w={Layout:b,classes:y,meta:h,tableOfContents:O},j=d.ContentsLayout;function N(n){var a=n.components,t=Object(s.a)(n,["components"]);return Object(o.a)(j,Object(e.a)({},w,t,{components:a,mdxType:"MDXLayout"}),Object(o.a)(r.a,{level:2,id:"initial",toc:!0},"Initial"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},".flex-initial")," to allow a flex item to shrink but not grow, taking into account its initial size:"),Object(o.a)(u.a,{preview:'\n  <p class="text-sm text-gray-600 mb-1">Items don\'t grow when there\'s extra space</p>\n  <div class="flex bg-gray-200 mb-6">\n    <div class="flex-initial text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">\n      Short\n    </div>\n    <div class="flex-initial text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">\n      Medium length\n    </div>\n  </div>\n\n  <p class="text-sm text-gray-600 mb-1">Items shrink if possible when needed</p>\n  <div class="flex bg-gray-200">\n    <div class="flex-initial text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">\n      Short\n    </div>\n    <div class="flex-initial text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">\n      Medium length\n    </div>\n    <div class="flex-initial text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ad labore ipsam, aut rem quo repellat esse tempore id, quidem\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex bg-gray-200<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-initial text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Short\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-initial text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Medium length\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex bg-gray-200<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-initial text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Short\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-initial text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Medium length\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-initial text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ad labore ipsam, aut rem quo repellat esse tempore id, quidem\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(o.a)(r.a,{level:2,id:"flex-1",toc:!0},"Flex 1"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},".flex-1")," to allow a flex item to grow and shrink as needed, ignoring its initial size:"),Object(o.a)(u.a,{preview:'\n  <p class="text-sm text-gray-600 mb-1">Default behavior</p>\n  <div class="flex bg-gray-200 mb-6">\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">\n      Short\n    </div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">\n      Medium length\n    </div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">\n      Significantly larger amount of content\n    </div>\n  </div>\n  <p class="text-sm text-gray-600 mb-1">With <code>.flex-1</code></p>\n  <div class="flex bg-gray-200">\n    <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">\n      Short\n    </div>\n    <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">\n      Medium length\n    </div>\n    <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">\n      Significantly larger amount of content\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex bg-gray-200<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Short\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Medium length\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Significantly larger amount of content\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(o.a)(r.a,{level:2,id:"auto",toc:!0},"Auto"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},".flex-auto")," to allow a flex item to grow and shrink, taking into account its initial size:"),Object(o.a)(u.a,{preview:'\n  <p class="text-sm text-gray-600 mb-1">Default behavior</p>\n  <div class="flex bg-gray-200 mb-6">\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">\n      Short\n    </div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">\n      Medium length\n    </div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">\n      Significantly larger amount of content\n    </div>\n  </div>\n  <p class="text-sm text-gray-600 mb-1">With <code>.flex-auto</code></p>\n  <div class="flex bg-gray-200">\n    <div class="flex-auto text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">\n      Short\n    </div>\n    <div class="flex-auto text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">\n      Medium length\n    </div>\n    <div class="flex-auto text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">\n      Significantly larger amount of content\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex bg-gray-200<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-auto text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Short\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-auto text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Medium length\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-auto text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Significantly larger amount of content\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(o.a)(r.a,{level:2,id:"none",toc:!0},"None"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},".flex-none")," to prevent a flex item from growing or shrinking:"),Object(o.a)(u.a,{preview:'\n  <div class="flex bg-gray-200">\n    <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">\n      Item that can grow or shrink if needed\n    </div>\n    <div class="flex-none text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">\n      Item that cannot grow or shrink\n    </div>\n    <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">\n      Item that can grow or shrink if needed\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex bg-gray-200<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Item that can grow or shrink if needed\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-none text-gray-800 text-center bg-gray-500 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Item that cannot grow or shrink\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Item that can grow or shrink if needed\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(o.a)(r.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control how a flex item both grows and shrinks at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing utility class. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:flex-1")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"flex-1")," utility at only medium screen sizes and above."),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(v.a,{classNames:["flex-none","flex-1","flex-auto","flex-initial","flex-1"],snippet:function(n){return'\n    <div class="flex ...">\n      \x3c!-- ... --\x3e\n      <div class="'.concat(n,' ...">\n        Responsive flex item\n      </div>\n      \x3c!-- ... --\x3e\n    </div>\n  ')},preview:function(n){return Object(o.a)("div",{className:"flex bg-gray-200"},Object(o.a)("div",{className:"flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"},"Item that can grow or shrink if needed"),Object(o.a)("div",{className:"text-gray-800 text-center bg-gray-500 px-4 py-2 m-2 ".concat(n)},"Responsive flex item"),Object(o.a)("div",{className:"flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"},"Item that can grow or shrink if needed"))},mdxType:"ResponsiveCodeSample"}),Object(o.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(r.a,{level:3,id:"flex-values",toc:!0},"Flex Values"),Object(o.a)("p",null,"By default Tailwind provides four ",Object(o.a)("inlineCode",{parentName:"p"},"flex")," utilities. You change, add, or remove these by editing the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.flex")," section of your Tailwind config."),Object(o.a)("pre",{className:"language-diff"},Object(o.a)("code",Object(e.a)({parentName:"pre"},{className:"language-diff"}),Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token unchanged"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     flex: {\n",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       '1': '1 1 0%',\n",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       auto: '1 1 auto',\n"),Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token deleted-sign deleted"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       initial: '0 1 auto',\n"),Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       inherit: 'inherit',\n"),Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token unchanged"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       none: 'none',\n"),Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       '2': '2 2 0%',\n"),Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token unchanged"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(o.a)(r.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(o.a)(k.a,{plugin:"flex",mdxType:"Variants"}),Object(o.a)(r.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(o.a)(x.a,{plugin:"flex",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=w},"5xSE":function(n,a,t){"use strict";n.exports=function(n){return"[object RegExp]"===Object.prototype.toString.call(n)}},"8C7G":function(n,a,t){"use strict";t.d(a,"a",(function(){return u}));var e=t("KQm4"),s=t("rePB"),p=t("q1tI"),c=t.n(p),o=t("98BF"),i=t("Zb5r"),l=t("AOjV"),r=c.a.createElement;function u(n){var a=n.plugin,t=n.name,p=o.defaultConfig.variants[a]||["responsive"];t=t||a.replace(/([a-z])([A-Z])/g,(function(n,a,t){return"".concat(a," ").concat(t.toLowerCase())}));var u=["responsive","hover","focus","active","group-hover"].filter((function(n){return!p.includes(n)})).slice(0,2);return r(c.a.Fragment,null,r("p",null,"By default, ",p.length?"only ".concat(Object(i.a)(p)):"no"," variants are generated for ",t," utilities."),r("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",r("code",null,a)," property in the ",r("code",null,"variants")," section of your"," ",r("code",null,"tailwind.config.js")," file."),r("p",null,"For example, this config will ",p.length>0?"also ":"","generate"," ",Object(i.a)(u)," variants:"),r(l.a,{path:"variants",before:"// ...",remove:Object(s.a)({},a,p),add:Object(s.a)({},a,[].concat(Object(e.a)(p),Object(e.a)(u)))}))}},AOjV:function(n,a,t){"use strict";t.d(a,"a",(function(){return u}));var e=t("q1tI"),s=t.n(e),p=t("Btb4"),c=t.n(p),o=t("AI3G"),i=t("iuhU"),l=s.a.createElement;function r(n){var a=n.edits,t=n.indent,s=void 0===t?"":t,p=n.type,o=void 0===p?"inserted":p;return l("span",{className:Object(i.a)("token",{"inserted-sign inserted":"inserted"===o,"deleted-sign deleted":"inserted"!==o})},Object.keys(a).map((function(n,t){return l(e.Fragment,{key:t},l("span",{className:Object(i.a)("token prefix",{inserted:"inserted"===o,deleted:"inserted"!==o})},"inserted"===o?"+":"-")," ",s,/^[a-z_$][a-z0-9_$]*$/i.test(p=n)?p:"'".concat(p,"'"),":"," ",c()(a[n],{indent:"  "}).replace(/\[([^\]]+)\]/g,(function(n,a){return"[".concat(a.replace(/\n\s*/g," ").trim(),"]")})).split("\n").map((function(n,a){return"".concat(0===a?"":"+ "+s).concat(n)})).join("\n"),",\n");var p})))}function u(n){var a=n.path,t=n.add,s=n.remove,p=n.before,c=n.after;return a="string"===typeof a?a.split("."):a,l("pre",{className:"language-diff"},l("code",{className:"language-diff"},l("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",a.map((function(n,a){return l(e.Fragment,{key:a},"  ","  ".repeat(a+1),n,": ","{\n")})),p&&Object(o.a)(p).map((function(n){return"".concat("  ".repeat(a.length+2)).concat(n,"\n")}))),s&&l(r,{edits:s,type:"deleted",indent:"  ".repeat(a.length+1)}),t&&l(r,{edits:t,type:"inserted",indent:"  ".repeat(a.length+1)}),l("span",{className:"token unchanged"},c&&Object(o.a)(c).map((function(n){return"".concat("  ".repeat(a.length+2)).concat(n,"\n")})),a.map((function(n,t){return l(e.Fragment,{key:t},"  ","  ".repeat(a.length-t),"}\n")})),"  }")))}},Btb4:function(n,a,t){"use strict";const e=t("5xSE"),s=t("p+I8"),p=t("GAX2").default;n.exports=(n,a,t)=>{const c=[];return function n(a,t,o){let i;(t=t||{}).indent=t.indent||"\t",o=o||"",i=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=n=>{if(void 0===t.inlineCharacterLimit)return n;const a=n.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return a.length<=t.inlineCharacterLimit?a:n.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),o).replace(new RegExp(i.indent,"g"),o+t.indent)};if(-1!==c.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||e(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";c.push(a);const e="["+i.newLine+a.map((e,s)=>{const p=a.length-1===s?i.newLine:","+i.newLineOrSpace;let c=n(e,t,o+t.indent);return t.transform&&(c=t.transform(a,s,c)),i.indent+c+p}).join("")+i.pad+"]";return c.pop(),l(e)}if(s(a)){let e=Object.keys(a).concat(p(a));if(t.filter&&(e=e.filter(n=>t.filter(a,n))),0===e.length)return"{}";c.push(a);const s="{"+i.newLine+e.map((s,p)=>{const c=e.length-1===p?i.newLine:","+i.newLineOrSpace,l="symbol"===typeof s,r=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=l||r?s:n(s,t);let g=n(a[s],t,o+t.indent);return t.transform&&(g=t.transform(a,s,g)),i.indent+String(u)+": "+g+c}).join("")+i.pad+"}";return c.pop(),l(s)}return a=String(a).replace(/[\r\n]/g,n=>"\n"===n?"\\n":"\\r"),!1===t.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(n,a,t)}},"Ca+n":function(n,a,t){"use strict";t.d(a,"a",(function(){return g}));var e=t("q1tI"),s=t.n(e),p=t("S5AU"),c=t.n(p),o=t("iuhU"),i=s.a.createElement,l=["","sm:","md:","lg:","xl:"];function r(n){var a=n.children,t=n.active,e=n.onClick;return i("button",{type:"button",className:Object(o.a)("inline-block text-center cursor-pointer select-none px-3",{"text-gray-800":t,"text-gray-500":!t}),onClick:e},a)}var u=function(n){return'<div class="'.concat(n,'"></div>')};function g(n){var a=n.classNames,t=n.snippet,s=void 0===t?u:t,p=n.preview,g=n.previewClassName,d=Array.isArray(a[0])?a.length:1,m=Object(e.useState)(0),f=m[0],k=m[1];return i("div",{className:"mt-8"},i("div",{className:"flex justify-center"},i("div",{className:"grid grid-cols-5 mb-2 bg-white"},i(r,{active:0===f,onClick:function(){return k(0)}},i("svg",{width:"8.57142857142857",height:"24",viewBox:"0 0 10 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"all")),i(r,{active:1===f,onClick:function(){return k(1)}},i("svg",{width:"11.999999999999998",height:"24",viewBox:"0 0 14 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"sm")),i(r,{active:2===f,onClick:function(){return k(2)}},i("svg",{width:"22.28571428571428",height:"24",viewBox:"0 0 26 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"md")),i(r,{active:3===f,onClick:function(){return k(3)}},i("svg",{width:"32.57142857142856",height:"24",viewBox:"0 0 38 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"lg")),i(r,{active:4===f,onClick:function(){return k(4)}},i("svg",{width:"30.85714285714285",height:"24",viewBox:"0 0 36 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"})),i("p",{className:"text-xs"},"xl")))),i("div",{className:"overflow-hidden mb-8"},i("div",{className:"rounded-t-lg bg-gray-800 border-b border-gray-300 whitespace-pre font-mono text-gray-500 text-sm"},i("pre",{className:"scrollbar-none m-0 p-0 overflow-auto scrolling-touch"},i("code",{className:"inline-block p-4"},c()(s(1===d?"{{CLASSNAMES}}":Array.from({length:d}).map((function(n,a){return"{{CLASSNAMES[".concat(a,"]}}")})))).trim().split(/(\{\{CLASSNAMES(?:\[[0-9]+\])?\}\})/).flatMap((function(n,t){if(t%2===1){var e=n.match(/\[([0-9]+)\]/);return(e?a[parseInt(e[1],10)]:a).map((function(n,a){return n?i("span",{key:"".concat(t,"-").concat(a),className:f===a?"text-code-yellow":""},0===a?"":" ",n.replace(/\(([^)]+)\)/g,"").trim().split(/\s+/).map((function(n){return"".concat(l[a]).concat(n)})).join(" ")):null})).filter(Boolean)}return n}))))),i("div",{className:Object(o.a)("rounded-b-lg border-l border-r border-b border-gray-400 bg-white",g,{"p-4":!g})},p(function(n){if(d>1)return a.map((function(a){for(var t=n;t>=0;t--)if(a[t])return a[t].replace(/\(([^)]+)\)/g,"$1")}));for(var t=n;t>=0;t--)if(a[t])return a[t].replace(/\(([^)]+)\)/g,"$1")}(f)))))}},GAX2:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=n=>Object.getOwnPropertySymbols(n).filter(a=>Object.prototype.propertyIsEnumerable.call(n,a))},"IBu/":function(n,a,t){"use strict";const e=t("sQdO");n.exports=n=>{const a=e(n);if(0===a)return n;const t=new RegExp(`^[ \\t]{${a}}`,"gm");return n.replace(t,"")}},S5AU:function(n,a,t){"use strict";const e=t("IBu/"),s=t("S6im");n.exports=(n,a=0,t)=>s(e(n),a,t)},S6im:function(n,a,t){"use strict";n.exports=(n,a=1,t)=>{if(t={indent:" ",includeEmptyLines:!1,...t},"string"!==typeof n)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof n}\``);if("number"!==typeof a)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof a}\``);if("string"!==typeof t.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof t.indent}\``);if(0===a)return n;const e=t.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return n.replace(e,t.indent.repeat(a))}},V0zS:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({addUtilities:n,e:a,theme:t,variants:e}){n(s.default.fromPairs(s.default.map(t("flex"),(n,t)=>[`.${a(`flex-${t}`)}`,{flex:n}])),e("flex"))}};var e,s=(e=t("LvDl"))&&e.__esModule?e:{default:e}},XvAz:function(n,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/flex",function(){return t("/5Oe")}])},YuTi:function(n,a){n.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),n.webpackPolyfill=1),n}},Zb5r:function(n,a,t){"use strict";function e(n){return n.reduce((function(a,t,e){return 0===e?t:e===n.length-1?"".concat(a," and ").concat(t):"".concat(a,", ").concat(t)}),"")}t.d(a,"a",(function(){return e}))},"p+I8":function(n,a,t){"use strict";n.exports=function(n){var a=typeof n;return null!==n&&("object"===a||"function"===a)}},pOT7:function(n,a,t){"use strict";t.d(a,"a",(function(){return o}));var e=t("q1tI"),s=t.n(e),p=t("iuhU"),c=s.a.createElement;function o(n){var a=n.preview,t=n.snippet,e=n.previewClassName;return c("div",{className:"relative overflow-hidden mb-8"},c("div",{className:Object(p.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",e,{"p-4":!e}),dangerouslySetInnerHTML:{__html:a}}),c("div",{className:"rounded-b-lg bg-gray-800"},c("pre",{className:"scrollbar-none m-0 p-0 language-html"},c("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:t}}))))}},sQdO:function(n,a,t){"use strict";n.exports=n=>{const a=n.match(/^[ \t]*(?=\S)/gm);return a?a.reduce((n,a)=>Math.min(n,a.length),1/0):0}},wH44:function(n,a,t){"use strict";t.d(a,"a",(function(){return g}));var e=t("rePB"),s=t("q1tI"),p=t.n(s),c=t("AOjV"),o=t("AI3G"),i=t("Zb5r"),l=p.a.createElement;function r(n,a){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),t.push.apply(t,e)}return t}function u(n){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){Object(e.a)(n,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))}))}return n}function g(n){var a=n.plugin,t=n.name,s=Object(o.a)(a);return t=t||a.replace(/([a-z])([A-Z])/g,(function(n,a,t){return"".concat(a," ").concat(t.toLowerCase())})),l(p.a.Fragment,null,l("p",null,"If you don't plan to use the ",t," utilities in your project, you can disable them entirely by setting the"," ",l("span",{dangerouslySetInnerHTML:{__html:Object(i.a)(s.map((function(n){return"<code>".concat(n,"</code>")})))}})," ",s.length>1?"properties":"property"," to ",l("code",null,"false")," in the"," ",l("code",null,"corePlugins")," section of your config file:"),l(c.a,{path:"corePlugins",before:"// ...",add:s.reduce((function(n,a){return u(u({},n),{},Object(e.a)({},a,!1))}),{})}))}},yLpj:function(n,a){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"===typeof window&&(t=window)}n.exports=t}},[["XvAz",0,2,5,1,3,4]]]);