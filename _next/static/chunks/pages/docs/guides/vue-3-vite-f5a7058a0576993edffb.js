_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[93],{"8ccc":function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return N}));var n=t("wx14"),c=t("Ff2n"),s=t("q1tI"),p=t.n(s),o=t("7ljp"),m=t("YFqc"),l=t.n(m),r=t("tc9R"),j=t("vRWG"),b=t("I6Nb"),i=(p.a.createElement,{Layout:j.DocumentationLayout,meta:{title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 Tailwind CSS \u0441 Vue 3 \u0438 Vite",description:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Tailwind CSS \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435 Vue 3 \u0438 Vite.",tool:"Vue 3 \u0438 Vite"},tableOfContents:[{title:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430",slug:"sozdanie-vashego-proekta",children:[]},{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Tailwind CSS",slug:"nastrojka-tailwind-css",children:[{title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 Tailwind \u0447\u0435\u0440\u0435\u0437 npm",slug:"ustanovka-tailwind-cherez-npm"},{title:"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0441\u0432\u043e\u044e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u0444\u0430\u0439\u043b\u043e\u0432",slug:"sozdajte-svoyu-konfiguracziyu-fajlov"},{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435 Tailwind, \u0447\u0442\u043e\u0431\u044b \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043d\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0441\u0442\u0438\u043b\u0438 \u0432 \u043f\u0440\u043e\u0434\u0430\u043a\u0448\u0435\u043d\u0435",slug:"nastrojte-tailwind-chtoby-udalit-neispolzuemye-stili-v-prodakshene"},{title:"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u0435 Tailwind \u0432 \u0441\u0432\u043e\u0439 CSS",slug:"vklyuchite-tailwind-v-svoj-css"}]}]}),O=b.ContentsLayout;function N(a){var e=a.components,t=Object(c.a)(a,["components"]);return Object(o.a)(O,Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"sozdanie-vashego-proekta",toc:!0},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430"),Object(o.a)("p",null,"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430 Vite, \u0435\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0433\u043e \u0435\u0449\u0435 \u043d\u0435\u0442."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-shell"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"npx create-vite-app my-project\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token builtin class-name"}),"cd")," my-project"))),Object(o.a)("p",null,"\u0417\u0430\u0442\u0435\u043c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 Vite, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",Object(o.a)("inlineCode",{parentName:"p"},"npm"),":"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-shell"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"npm")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"install")))),Object(o.a)("hr",null),Object(o.a)(r.a,{level:2,id:"nastrojka-tailwind-css",toc:!0},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Tailwind CSS"),Object(o.a)(r.a,{level:3,id:"ustanovka-tailwind-cherez-npm",toc:!0},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 Tailwind \u0447\u0435\u0440\u0435\u0437 npm"),Object(o.a)("p",null,"\u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u043c Tailwind \u0435\u0433\u043e \u043e\u0434\u043d\u043e\u0440\u0430\u043d\u0433\u043e\u0432\u044b\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",Object(o.a)("inlineCode",{parentName:"p"},"npm"),":"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-shell"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"npm")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"install")," -D tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9"))),Object(o.a)("p",null,"Vue 3 \u0438 Vite \u043d\u0435 \u043f\u043e\u043a\u0430 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 PostCSS 8 \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c ",Object(o.a)(l.a,{href:"/docs/installation#post-css-7-compatibility-build",passHref:!0},Object(o.a)("a",null,"\u0441\u0431\u043e\u0440\u043a\u0443 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0438 \u0441 Tailwind CSS v2.0 PostCSS 7")),", \u043a\u0430\u043a \u043c\u044b \u043f\u043e\u043a\u0430\u0437\u0430\u043b\u0438 \u0432\u044b\u0448\u0435.\n"),Object(o.a)(r.a,{level:3,id:"sozdajte-svoyu-konfiguracziyu-fajlov",toc:!0},"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0441\u0432\u043e\u044e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u0444\u0430\u0439\u043b\u043e\u0432"),Object(o.a)("p",null,"\u0417\u0430\u0442\u0435\u043c \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0439\u0442\u0435 \u0441\u0432\u043e\u0438(\u0439) ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," \u0438 ",Object(o.a)("inlineCode",{parentName:"p"},"postcss.config.js")," \u0444\u0430\u0439\u043b\u044b:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-shell"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"npx tailwindcss init -p"))),Object(o.a)("p",null,"\u042d\u0442\u043e \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0444\u0430\u0439\u043b ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," \u0432 \u043a\u043e\u0440\u043d\u0435 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\nmodule",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  purge",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  darkMode",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token boolean"}),"false"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// or 'media' or 'class'"),"\n  theme",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    extend",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  variants",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    extend",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  plugins",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(o.a)("p",null,"\u0423\u0437\u043d\u0430\u0439\u0442\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 Tailwind \u0432 ",Object(o.a)(l.a,{href:"/docs/configuration",passHref:!0},Object(o.a)("a",null,"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u043f\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438")),"."),Object(o.a)("p",null,"\u041e\u043d \u0442\u0430\u043a\u0436\u0435 \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u0444\u0430\u0439\u043b ",Object(o.a)("inlineCode",{parentName:"p"},"postcss.config.js"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0443\u0436\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b ",Object(o.a)("inlineCode",{parentName:"p"},"tailwindcss")," \u0438 ",Object(o.a)("inlineCode",{parentName:"p"},"autoprefixer"),":"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// postcss.config.js"),"\nmodule",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  plugins",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    tailwindcss",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    autoprefixer",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(o.a)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u043a\u0438\u0435-\u043b\u0438\u0431\u043e \u0434\u0440\u0443\u0433\u0438\u0435 \u043f\u043b\u0430\u0433\u0438\u043d\u044b PostCSS, \u0432\u0430\u043c \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u043d\u0430\u0448\u0443 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e \u043f\u043e ",Object(o.a)(l.a,{href:"/docs/using-with-preprocessors",passHref:!0},Object(o.a)("a",null,"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044e PostCSS \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0440\u0435\u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u0430"))," \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0442\u043e\u043c, \u043a\u0430\u043a \u043b\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0438\u0445 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 Tailwind."),Object(o.a)(r.a,{level:3,id:"nastrojte-tailwind-chtoby-udalit-neispolzuemye-stili-v-prodakshene",toc:!0},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435 Tailwind, \u0447\u0442\u043e\u0431\u044b \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043d\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0441\u0442\u0438\u043b\u0438 \u0432 \u043f\u0440\u043e\u0434\u0430\u043a\u0448\u0435\u043d\u0435"),Object(o.a)("p",null,"\u0412 \u0432\u0430\u0448\u0435\u043c \u0444\u0430\u0439\u043b\u0435 ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js"),", \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043e\u043f\u0446\u0438\u044e ",Object(o.a)("inlineCode",{parentName:"p"},"purge"),", \u0443\u043a\u0430\u0437\u0430\u0432 \u043f\u0443\u0442\u0438 \u043a\u043e \u0432\u0441\u0435\u043c \u0432\u0430\u0448\u0438\u043c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b, \u0447\u0442\u043e\u0431\u044b Tailwind \u043c\u043e\u0433 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0434\u0435\u0440\u0435\u0432\u043e \u043d\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0445 \u0441\u0442\u0438\u043b\u0435\u0439 \u0432 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u0441\u0431\u043e\u0440\u043a\u0430\u0445:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token deleted-sign deleted language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"   purge",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"["),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"]"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"   purge",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"["),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'./index.html'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),",")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'./src/**/*.{vue,js,ts,jsx,tsx}'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"]"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   darkMode",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token boolean"}),"false"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),",")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// or 'media' or 'class'"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   variants",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   plugins",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"["),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"]"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)("p",null,"\u041f\u0440\u043e\u0447\u0442\u0438\u0442\u0435 \u043d\u0430\u0448\u0435 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0435 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e ",Object(o.a)(l.a,{href:"/docs/optimizing-for-production",passHref:!0},Object(o.a)("a",null,"\u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u043b\u044f \u043f\u0440\u043e\u0434\u0430\u043a\u0448\u0435\u043d\u0430")),", \u0447\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u043e \u0434\u0440\u0435\u0432\u043e\u0432\u0438\u0434\u043d\u044b\u0445 \u043d\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0445 \u0441\u0442\u0438\u043b\u044f\u0445 \u0434\u043b\u044f \u043b\u0443\u0447\u0448\u0435\u0439 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438.\n"),Object(o.a)(r.a,{level:3,id:"vklyuchite-tailwind-v-svoj-css",toc:!0},"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u0435 Tailwind \u0432 \u0441\u0432\u043e\u0439 CSS"),Object(o.a)("p",null,"\u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0444\u0430\u0439\u043b ",Object(o.a)("inlineCode",{parentName:"p"},"./src/index.css"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 Vite \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0434\u043b\u044f \u0432\u0430\u0441 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e\n, \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0434\u0438\u0440\u0435\u043a\u0442\u0438\u0432\u0443 ",Object(o.a)("inlineCode",{parentName:"p"},"@tailwind"),", \u0447\u0442\u043e\u0431\u044b \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0443\u0442\u0438\u043b\u0438\u0442\u044b Tailwind ",Object(o.a)("inlineCode",{parentName:"p"},"base"),", ",Object(o.a)("inlineCode",{parentName:"p"},"components")," \u0438 ",Object(o.a)("inlineCode",{parentName:"p"},"utilities")," \u0441\u0442\u0438\u043b\u0438, \u0437\u0430\u043c\u0435\u043d\u044f\u044e\u0449\u0438\u0435 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0444\u0430\u0439\u043b\u0430:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-css"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"/* ./src/index.css */"),"\n\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"/*! @import */"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," base",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," components",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," utilities",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";"))))),Object(o.a)("p",null,Object(o.a)("em",{parentName:"p"},"\u0418\u0437-\u0437\u0430 ",Object(o.a)("a",Object(n.a)({parentName:"em"},{href:"https://bugs.chromium.org/p/chromium/issues/detail?id=1131113"}),"\u043e\u0448\u0438\u0431\u043a\u0438 \u0432 Chromium")," \u0432\u0430\u0436\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u0432\u044b \u0432\u043a\u043b\u044e\u0447\u0438\u043b\u0438 \u0441\u0442\u0440\u0430\u043d\u043d\u044b\u0439 \u0441\u0438\u043c\u0432\u043e\u043b ",Object(o.a)("inlineCode",{parentName:"em"},"/*! @import */")," \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439, \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0441 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c\u044e \u0432 Chrome DevTools \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438. \u042d\u0442\u043e \u0443\u0436\u0435 \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u0432 Canary, \u043d\u043e \u0432 \u0446\u0435\u043b\u043e\u043c \u0435\u0449\u0435 \u043d\u0435 \u0432\u044b\u043f\u0443\u0449\u0435\u043d\u043e.")),Object(o.a)("p",null,"Tailwind \u0437\u0430\u043c\u0435\u043d\u0438\u0442 \u044d\u0442\u0438 \u0434\u0438\u0440\u0435\u043a\u0442\u0438\u0432\u044b \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0441\u0431\u043e\u0440\u043a\u0438 \u043d\u0430 \u0432\u0441\u0435 \u0441\u0442\u0438\u043b\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u043d \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0432\u0430\u0448\u0435\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0439 \u0434\u0438\u0437\u0430\u0439\u043d-\u0441\u0438\u0441\u0442\u0435\u043c\u044b."),Object(o.a)("p",null,"\u041f\u0440\u043e\u0447\u0442\u0438\u0442\u0435 \u043d\u0430\u0448\u0443 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e \u043f\u043e ",Object(o.a)(l.a,{href:"/docs/adding-base-styles",passHref:!0},Object(o.a)("a",null,"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044e \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u0441\u0442\u0438\u043b\u0435\u0439")),", ",Object(o.a)(l.a,{href:"/docs/extracting-components",passHref:!0},Object(o.a)("a",null,"\u0438\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432")),", \u0438 ",Object(o.a)(l.a,{href:"/docs/adding-new-utilities",passHref:!0},Object(o.a)("a",null,"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044e \u043d\u043e\u0432\u044b\u0445 \u0443\u0442\u0438\u043b\u0438\u0442"))," \u0434\u043b\u044f \u043b\u0443\u0447\u0448\u0438\u0435 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438 \u043f\u043e \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044e Tailwind \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e CSS.\n"),Object(o.a)("p",null,"\u041d\u0430\u043a\u043e\u043d\u0435\u0446, \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0432\u0430\u0448 \u0444\u0430\u0439\u043b CSS \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0432 \u0444\u0430\u0439\u043b ",Object(o.a)("inlineCode",{parentName:"p"},"./src/main.js"),":"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// src/main.js"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword module"}),"import")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{")," createApp ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword module"}),"from")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'vue'"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword module"}),"import")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token maybe-class-name"}),"App")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword module"}),"from")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'./App.vue'"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword module"}),"import")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'./index.css'"),"\n\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"createApp"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token maybe-class-name"}),"App"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token method function property-access"}),"mount"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'#app'"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")")))),Object(o.a)("hr",null),Object(o.a)("p",null,"\u0412\u044b \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0438! \u0422\u0435\u043f\u0435\u0440\u044c, \u043a\u043e\u0433\u0434\u0430 \u0442\u044b \u0431\u0435\u0436\u0438\u0448\u044c ",Object(o.a)("inlineCode",{parentName:"p"},"npm run dev"),", Tailwind CSS \u0431\u0443\u0434\u0435\u0442 \u0433\u043e\u0442\u043e\u0432 \u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044e \u0432 \u0432\u0430\u0448\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 Vue 3 \u0438 Vite."),Object(o.a)("p",null,Object(o.a)(l.a,{href:"/docs/utility-first",passHref:!0},Object(o.a)("a",null,'\u0414\u0430\u043b\u0435\u0435 \u0443\u0437\u043d\u0430\u0439\u0442\u0435 \u043e \u0440\u0430\u0431\u043e\u0447\u0435\u043c \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 "\u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0443\u0442\u0438\u043b\u0438\u0442\u044b" ',"\u2192")),"\n")))}N.isMDXComponent=!0,N.layoutProps=i},ap0H:function(a,e,t){"use strict";t.d(e,"a",(function(){return m}));var n=t("q1tI"),c=t.n(n),s=t("8Kt/"),p=t.n(s),o=c.a.createElement;function m(a){var e=a.suffix,t=a.children+(e?" - ".concat(e):"");return o(p.a,null,o("title",{key:"title"},t),o("meta",{key:"twitter:title",name:"twitter:title",content:t}),o("meta",{key:"og:title",property:"og:title",content:t}))}},vRWG:function(a,e,t){"use strict";t.r(e),t.d(e,"DocumentationLayout",(function(){return i}));var n=t("wx14"),c=t("q1tI"),s=t.n(c),p=t("ekQu"),o=t("8Kt/"),m=t.n(o),l=t("nOHt"),r=t("ap0H"),j=t("1Q1k"),b=s.a.createElement;function i(a){var e=Object(l.useRouter)();return b(s.a.Fragment,null,b(r.a,{suffix:"/"===e.pathname?void 0:"Tailwind CSS"},a.layoutProps.meta.metaTitle||a.layoutProps.meta.title),b(m.a,null,b("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),b("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.su".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),b(p.b,Object(n.a)({nav:j.a},a)))}},xJVz:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guides/vue-3-vite",function(){return t("8ccc")}])}},[["xJVz",0,2,1,3,4,5]]]);