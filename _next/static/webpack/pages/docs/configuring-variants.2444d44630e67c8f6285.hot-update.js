webpackHotUpdate_N_E("pages/docs/configuring-variants",{

/***/ "./src/pages/docs/configuring-variants.mdx":
/*!*************************************************!*\
  !*** ./src/pages/docs/configuring-variants.mdx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Heading */ "./src/components/Heading.js");
/* harmony import */ var _layouts_DocumentationLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/layouts/DocumentationLayout */ "./src/layouts/DocumentationLayout.js");
/* harmony import */ var _layouts_ContentsLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/layouts/ContentsLayout */ "./src/layouts/ContentsLayout.js");
/* harmony import */ var _components_DefaultVariantsConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/DefaultVariantsConfig */ "./src/components/DefaultVariantsConfig.js");
/* harmony import */ var _components_Tip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Tip */ "./src/components/Tip.js");


var _jsxFileName = "C:\\OSPanel\\projects\\tailwindcss.su\\src\\pages\\docs\\configuring-variants.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsxRuntime classic */

/* @jsx mdx */








var Layout = _layouts_DocumentationLayout__WEBPACK_IMPORTED_MODULE_6__["DocumentationLayout"];
var meta = {
  "title": "Настройка вариантов",
  "shortTitle": "Варианты",
  "description": "Настройка того, какие варианты утилит включены в Вашем проекте."
};
var tableOfContents = [{
  "title": "Обзор",
  "slug": "obzor",
  "children": []
}, {
  "title": "Включение дополнительных вариантов",
  "slug": "vklyuchenie-dopolnitelnyh-variantov",
  "children": []
}, {
  "title": "Переопределение вариантов по умолчанию",
  "slug": "pereopredelenie-variantov-po-umolchaniyu",
  "children": [{
    "title": "Варианты заказа",
    "slug": "varianty-zakaza"
  }]
}, {
  "title": "Особые варианты",
  "slug": "osobye-varianty",
  "children": [{
    "title": "Отзывчивый",
    "slug": "otzyvchivyj"
  }, {
    "title": "Темный, с защитой от движения и с уменьшением движения",
    "slug": "temnyj-s-zashhitoj-ot-dvizheniya-i-s-umensheniem-dvizheniya"
  }, {
    "title": "Default",
    "slug": "default"
  }]
}, {
  "title": "Using custom variants",
  "slug": "using-custom-variants",
  "children": [{
    "title": "Ordering custom variants",
    "slug": "ordering-custom-variants"
  }]
}, {
  "title": "Default variants reference",
  "slug": "default-variants-reference",
  "children": []
}];
var layoutProps = {
  Layout: Layout,
  meta: meta,
  tableOfContents: tableOfContents
};
var MDXLayout = _layouts_ContentsLayout__WEBPACK_IMPORTED_MODULE_7__["ContentsLayout"];
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    className: "prose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "obzor",
    toc: true,
    hidden: true,
    mdxType: "Heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, "\u041E\u0431\u0437\u043E\u0440"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, "\u0412 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 24
    }
  }, "variants"), " \u0412\u0430\u0448\u0435\u0433\u043E \u0444\u0430\u0439\u043B\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 94
    }
  }, "tailwind.config.js"), " \u0412\u044B \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442\u0435, \u043A\u0430\u043A\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u044B \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u043F\u043B\u0430\u0433\u0438\u043D\u0430:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "div"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 14
    }
  }), "// tailwind.config.js"), "\nmodule", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property-access"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 28
    }
  }), "exports"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 39
    }
  }), "="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 33
    }
  }), "{"), "\n  variants", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 33
    }
  }), "{"), "\n    extend", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 33
    }
  }), "{"), "\n      backgroundColor", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 24
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 33
    }
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 28
    }
  }), "'active'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 35
    }
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 28
    }
  }), ","), "\n      ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }), "// ..."), "\n      borderColor", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 20
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 33
    }
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 28
    }
  }), "'focus-visible'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 42
    }
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 33
    }
  }), "'first'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 34
    }
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 28
    }
  }), ","), "\n      ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }), "// ..."), "\n      textColor", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 18
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 33
    }
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 28
    }
  }), "'visited'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 36
    }
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 28
    }
  }), ","), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }
  }), "}"), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 5
    }
  }), "}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 28
    }
  }), ","), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 3
    }
  }), "}")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }, "\u041A\u0430\u0436\u0434\u043E\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E - \u044D\u0442\u043E \u0438\u043C\u044F \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u043F\u043B\u0430\u0433\u0438\u043D\u0430, \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0449\u0435\u0435 \u043D\u0430 \u043C\u0430\u0441\u0441\u0438\u0432 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0443\u0436\u043D\u043E \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043F\u043B\u0430\u0433\u0438\u043D\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }
  }, "\u0418\u0437 \u043A\u043E\u0440\u043E\u0431\u043A\u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("thead", {
    parentName: "table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "thead",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 11
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }), "\u0412\u0430\u0440\u0438\u0430\u043D\u0442"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }
  }), "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tbody", {
    parentName: "table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "tbody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 11
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 16
    }
  }, "responsive")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }
  }), "\u0410\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u044B\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B, \u0442\u0430\u043A\u0438\u0435 \u043A\u0430\u043A ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 51
    }
  }, "sm"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 104
    }
  }, "md"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 157
    }
  }, "lg"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 211
    }
  }, "xl"), ".")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "tbody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 11
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 13
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 16
    }
  }, "dark")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }
  }), "\u041D\u0430\u0446\u0435\u043B\u0435\u043D \u043D\u0430 \u0442\u0435\u043C\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "tbody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 11
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 16
    }
  }, "motion-safe")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 13
    }
  }), "\u041D\u0430\u0446\u0435\u043B\u0435\u043D \u043D\u0430 \u043C\u0435\u0434\u0438\u0430 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 47
    }
  }, "prefers-reduced-motion: no-preference"), ".")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "tbody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 11
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 13
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 16
    }
  }, "motion-reduce")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 13
    }
  }), "\u041D\u0430\u0446\u0435\u043B\u0435\u043D \u043D\u0430 \u043C\u0435\u0434\u0438\u0430 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 47
    }
  }, "prefers-reduced-motion: reduce"), ".")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "tbody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 11
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 13
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 16
    }
  }, "first")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 13
    }
  }), "\u041D\u0430\u0446\u0435\u043B\u0435\u043D \u043D\u0430 \u043F\u0441\u0435\u0432\u0434\u043E\u043A\u043B\u0430\u0441\u0441 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 43
    }
  }, "first-child"), ".")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "tbody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 11
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 13
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 16
    }
  }, "last")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 13
    }
  }), "\u041D\u0430\u0446\u0435\u043B\u0435\u043D \u043D\u0430 \u043F\u0441\u0435\u0432\u0434\u043E\u043A\u043B\u0430\u0441\u0441 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 43
    }
  }, "last-child"), ".")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "tbody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 11
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 13
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 16
    }
  }, "odd")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 13
    }
  }), "\u041D\u0430\u0446\u0435\u043B\u0435\u043D \u043D\u0430 \u043F\u0441\u0435\u0432\u0434\u043E\u043A\u043B\u0430\u0441\u0441 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 43
    }
  }, "odd-child"), ".")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "tbody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 11
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 13
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 16
    }
  }, "even")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 13
    }
  }), "\u041D\u0430\u0446\u0435\u043B\u0435\u043D \u043D\u0430 \u043F\u0441\u0435\u0432\u0434\u043E\u043A\u043B\u0430\u0441\u0441 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 43
    }
  }, "even-child"), ".")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "tbody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 11
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 13
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 16
    }
  }, "visited")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 13
    }
  }), "\u041D\u0430\u0446\u0435\u043B\u0435\u043D \u043D\u0430 \u043F\u0441\u0435\u0432\u0434\u043E\u043A\u043B\u0430\u0441\u0441 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 43
    }
  }, "visited"), ".")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "tbody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 11
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 13
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 16
    }
  }, "checked")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 13
    }
  }), "\u041D\u0430\u0446\u0435\u043B\u0435\u043D \u043D\u0430 \u043F\u0441\u0435\u0432\u0434\u043E\u043A\u043B\u0430\u0441\u0441 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 43
    }
  }, "checked"), ".")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "tbody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 11
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 13
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 16
    }
  }, "group-hover")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 13
    }
  }), "\u041D\u0430\u0446\u0435\u043B\u0435\u043D \u043D\u0430 \u044D\u043B\u0435\u043C\u0435\u043D\u0442, \u043A\u043E\u0433\u0434\u0430 \u043E\u0442\u043C\u0435\u0447\u0435\u043D\u043D\u044B\u0439 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 92
    }
  }, "hover"), ".")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "tbody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 11
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 13
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 16
    }
  }, "group-focus")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 13
    }
  }), "\u041D\u0430\u0446\u0435\u043B\u0435\u043D \u043D\u0430 \u044D\u043B\u0435\u043C\u0435\u043D\u0442, \u043A\u043E\u0433\u0434\u0430 \u043E\u0442\u043C\u0435\u0447\u0435\u043D\u043D\u044B\u0439 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 92
    }
  }, "focus"), ".")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "tbody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 11
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 13
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 16
    }
  }, "focus-within")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 13
    }
  }), "\u041D\u0430\u0446\u0435\u043B\u0435\u043D \u043D\u0430 \u043F\u0441\u0435\u0432\u0434\u043E\u043A\u043B\u0430\u0441\u0441 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 43
    }
  }, "focus-within"), ".")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "tbody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 11
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 13
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 16
    }
  }, "hover")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 13
    }
  }), "\u041D\u0430\u0446\u0435\u043B\u0435\u043D \u043D\u0430 \u043F\u0441\u0435\u0432\u0434\u043E\u043A\u043B\u0430\u0441\u0441 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 43
    }
  }, "hover"), ".")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "tbody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 11
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 13
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 16
    }
  }, "focus")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 13
    }
  }), "\u041D\u0430\u0446\u0435\u043B\u0435\u043D \u043D\u0430 \u043F\u0441\u0435\u0432\u0434\u043E\u043A\u043B\u0430\u0441\u0441 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 43
    }
  }, "focus"), ".")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "tbody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 11
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 13
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 16
    }
  }, "focus-visible")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 13
    }
  }), "\u041D\u0430\u0446\u0435\u043B\u0435\u043D \u043D\u0430 \u043F\u0441\u0435\u0432\u0434\u043E\u043A\u043B\u0430\u0441\u0441 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 43
    }
  }, "focus-visible"), ".")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "tbody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 11
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 13
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 16
    }
  }, "active")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 13
    }
  }), "\u041D\u0430\u0446\u0435\u043B\u0435\u043D \u043D\u0430 \u043F\u0441\u0435\u0432\u0434\u043E\u043A\u043B\u0430\u0441\u0441 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 43
    }
  }, "active"), ".")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "tbody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 11
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 13
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 16
    }
  }, "disabled")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 13
    }
  }), "\u041D\u0430\u0446\u0435\u043B\u0435\u043D \u043D\u0430 \u043F\u0441\u0435\u0432\u0434\u043E\u043A\u043B\u0430\u0441\u0441 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 43
    }
  }, "disabled"), ".")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 7
    }
  }, "\u0414\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u0442\u043E\u043C, \u043A\u0430\u043A \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B, \u043F\u0440\u043E\u0447\u0442\u0438\u0442\u0435 \u043D\u0430\u0448\u0443 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044E \u043F\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/responsive-design",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 114
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 161
    }
  }, "\u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u044B\u043C \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430\u043C")), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/dark-mode",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 206
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 245
    }
  }, "\u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430\u043C \u0442\u0435\u043C\u043D\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0430")), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/hover-focus-and-other-states",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 295
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 353
    }
  }, "hover, focus \u0438 \u0434\u0440\u0443\u0433\u0438\u043C \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F")), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "vklyuchenie-dopolnitelnyh-variantov",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 7
    }
  }, "\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 7
    }
  }, "\u0415\u0441\u043B\u0438 \u0412\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u0434\u043B\u044F \u043F\u043B\u0430\u0433\u0438\u043D\u0430 \u0432 \u0434\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043A \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u043C \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E, \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0441\u0432\u043E\u0438 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u043B\u044E\u0447\u0435\u0432\u043E\u0433\u043E \u0441\u043B\u043E\u0432\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 174
    }
  }, "extend"), ", \u0430\u043D\u0430\u043B\u043E\u0433\u0438\u0447\u043D\u043E \u0442\u043E\u043C\u0443, \u043A\u0430\u043A \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435 \u0432\u043D\u0443\u0442\u0440\u0438 \u0440\u0430\u0437\u0434\u0435\u043B\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 300
    }
  }, "theme"), ":"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "div"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 14
    }
  }), "// tailwind.config.js"), "\nmodule", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 9
    }
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property-access"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 28
    }
  }), "exports"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 39
    }
  }), "="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 33
    }
  }), "{"), "\n  variants", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 13
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 33
    }
  }), "{"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 7
    }
  }), "// \"\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0439\" \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0431\u0443\u0434\u0435\u0442 \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D \u0432 \u0434\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043A \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F\u043C \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E."), "\n    extend", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 13
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 33
    }
  }), "{"), "\n      backgroundColor", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 24
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 33
    }
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 28
    }
  }), "'active'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 35
    }
  }), "]"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 7
    }
  }), "}"), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 5
    }
  }), "}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 28
    }
  }), ","), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 3
    }
  }), "}")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 7
    }
  }, "\u041F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/configuring-variants#ordering-variants",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 24
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 92
    }
  }, "\u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 \u0432\u0430\u0436\u0435\u043D")), ", \u043B\u044E\u0431\u044B\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B, \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u043F\u043E\u0434 \u043A\u043B\u044E\u0447\u043E\u043C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 179
    }
  }, "extend"), ", \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0443\u043F\u043E\u0440\u044F\u0434\u043E\u0447\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u0434\u043B\u044F \u0412\u0430\u0441 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0440\u0430\u0437\u0443\u043C\u043D\u043E\u0433\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u0430 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E. \u041F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/configuration#variant-order",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 403
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 460
    }
  }, "variantOrder")), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "pereopredelenie-variantov-po-umolchaniyu",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 7
    }
  }, "\u041F\u0435\u0440\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 7
    }
  }, "\u041B\u044E\u0431\u044B\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B, \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0435 \u043D\u0435\u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u043F\u043E\u0434 \u043A\u043B\u044E\u0447\u043E\u043C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 69
    }
  }, "options"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 126
    }
  }, "\u043F\u0435\u0440\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u044E\u0442"), " \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u043C\u043E\u0433\u043E \u043C\u043E\u0434\u0443\u043B\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "div"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 14
    }
  }), "// tailwind.config.js"), "\nmodule", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 9
    }
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property-access"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 28
    }
  }), "exports"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 39
    }
  }), "="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 33
    }
  }), "{"), "\n  variants", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 13
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 33
    }
  }), "{"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 7
    }
  }), "// \u0411\u0443\u0434\u0443\u0442 \u0441\u043E\u0437\u0434\u0430\u043D\u044B \u0442\u043E\u043B\u044C\u043A\u043E \"\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435\" \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B"), "\n    backgroundColor", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 22
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 33
    }
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 28
    }
  }), "'active'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 35
    }
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 28
    }
  }), ","), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 5
    }
  }), "}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 28
    }
  }), ","), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 3
    }
  }), "}")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 7
    }
  }, "\u041F\u0440\u0438 \u043F\u0435\u0440\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0438 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044C, \u0447\u0442\u043E \u0412\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 93
    }
  }, "\u0432\u0441\u0435"), " \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0445\u043E\u0442\u0438\u0442\u0435 \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C, \u0430 \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u043E\u0432\u044B\u0435, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0412\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 3,
    id: "varianty-zakaza",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 7
    }
  }, "\u0412\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u0437\u0430\u043A\u0430\u0437\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 7
    }
  }, "\u0412\u0430\u0436\u043D\u043E \u043E\u0442\u043C\u0435\u0442\u0438\u0442\u044C, \u0447\u0442\u043E \u043F\u0440\u0438 \u043F\u0435\u0440\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0438 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 64
    }
  }, "\u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u0441\u043E\u0437\u0434\u0430\u044E\u0442\u0441\u044F \u0432 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u043C \u0412\u0430\u043C\u0438 \u043F\u043E\u0440\u044F\u0434\u043A\u0435"), ", \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u0432 \u043A\u043E\u043D\u0446\u0435 \u0441\u043F\u0438\u0441\u043A\u0430 \u0431\u0443\u0434\u0443\u0442 \u0438\u043C\u0435\u0442\u044C \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442 \u043D\u0430\u0434 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430\u043C\u0438 \u0432 \u043D\u0430\u0447\u0430\u043B\u0435 \u0441\u043F\u0438\u0441\u043A\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 7
    }
  }, "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0437\u0434\u0435\u0441\u044C \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 39
    }
  }, "focus"), " \u0438\u043C\u0435\u044E\u0442 \u043D\u0430\u0438\u0432\u044B\u0441\u0448\u0438\u0439 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442 \u0434\u043B\u044F \u0443\u0442\u0438\u043B\u0438\u0442", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 129
    }
  }, " backgroundColor"), ", \u0430 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 206
    }
  }, "hover"), " \u0438\u043C\u0435\u044E\u0442 \u043D\u0430\u0438\u0432\u044B\u0441\u0448\u0438\u0439 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442 \u0434\u043B\u044F \u0443\u0442\u0438\u043B\u0438\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 297
    }
  }, "borderColor"), ":"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "div"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 14
    }
  }), "// tailwind.config.js"), "\nmodule", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 9
    }
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property-access"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 28
    }
  }), "exports"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 39
    }
  }), "="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 33
    }
  }), "{"), "\n  variants", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 13
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 33
    }
  }), "{"), "\n    backgroundColor", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 22
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 33
    }
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 28
    }
  }), "'hover'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 34
    }
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 33
    }
  }), "'focus'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 34
    }
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 28
    }
  }), ","), "\n    borderColor", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 18
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 33
    }
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 28
    }
  }), "'focus'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 34
    }
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 33
    }
  }), "'hover'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 34
    }
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 28
    }
  }), ","), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 5
    }
  }), "}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 28
    }
  }), ","), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 3
    }
  }), "}")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "div"
  }, {
    "className": "language-css"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-css"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 14
    }
  }), "/* \u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 CSS */"), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
      columnNumber: 3
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 16
    }
  }), ".bg-black")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 50
    }
  }), "{"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 33
    }
  }), "background-color"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 43
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token hexcode color"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513,
      columnNumber: 33
    }
  }), "#000"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 36
    }
  }), "}"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 3
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 16
    }
  }), ".bg-white")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 50
    }
  }), "{"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 33
    }
  }), "background-color"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 43
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token hexcode color"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528,
      columnNumber: 33
    }
  }), "#fff"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530,
      columnNumber: 36
    }
  }), "}"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 3
    }
  }), "/* ... */"), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 3
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 16
    }
  }), ".hover"), "\\", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 41
    }
  }), ":bg-black"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token pseudo-class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 38
    }
  }), ":hover")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
      columnNumber: 47
    }
  }), "{"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 33
    }
  }), "background-color"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 43
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token hexcode color"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 33
    }
  }), "#000"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 36
    }
  }), "}"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 3
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 16
    }
  }), ".hover"), "\\", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560,
      columnNumber: 41
    }
  }), ":bg-white"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token pseudo-class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 38
    }
  }), ":hover")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 47
    }
  }), "{"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 33
    }
  }), "background-color"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568,
      columnNumber: 43
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token hexcode color"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570,
      columnNumber: 33
    }
  }), "#fff"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 36
    }
  }), "}"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575,
      columnNumber: 3
    }
  }), "/* ... */"), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579,
      columnNumber: 3
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581,
      columnNumber: 16
    }
  }), ".focus"), "\\", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583,
      columnNumber: 41
    }
  }), ":bg-black"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token pseudo-class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585,
      columnNumber: 38
    }
  }), ":focus")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587,
      columnNumber: 47
    }
  }), "{"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589,
      columnNumber: 33
    }
  }), "background-color"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591,
      columnNumber: 43
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token hexcode color"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593,
      columnNumber: 33
    }
  }), "#000"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 595,
      columnNumber: 36
    }
  }), "}"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 3
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600,
      columnNumber: 16
    }
  }), ".focus"), "\\", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602,
      columnNumber: 41
    }
  }), ":bg-white"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token pseudo-class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604,
      columnNumber: 38
    }
  }), ":focus")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606,
      columnNumber: 47
    }
  }), "{"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608,
      columnNumber: 33
    }
  }), "background-color"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610,
      columnNumber: 43
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token hexcode color"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 612,
      columnNumber: 33
    }
  }), "#fff"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614,
      columnNumber: 36
    }
  }), "}"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617,
      columnNumber: 3
    }
  }), "/* ... */"), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 621,
      columnNumber: 3
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623,
      columnNumber: 16
    }
  }), ".border-black")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625,
      columnNumber: 54
    }
  }), "{"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627,
      columnNumber: 33
    }
  }), "border-color"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 629,
      columnNumber: 39
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token hexcode color"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631,
      columnNumber: 33
    }
  }), "#000"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633,
      columnNumber: 36
    }
  }), "}"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 636,
      columnNumber: 3
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 638,
      columnNumber: 16
    }
  }), ".border-white")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640,
      columnNumber: 54
    }
  }), "{"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 642,
      columnNumber: 33
    }
  }), "border-color"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 644,
      columnNumber: 39
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token hexcode color"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 646,
      columnNumber: 33
    }
  }), "#fff"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 648,
      columnNumber: 36
    }
  }), "}"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651,
      columnNumber: 3
    }
  }), "/* ... */"), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655,
      columnNumber: 3
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 657,
      columnNumber: 16
    }
  }), ".focus"), "\\", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659,
      columnNumber: 41
    }
  }), ":border-black"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token pseudo-class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661,
      columnNumber: 42
    }
  }), ":focus")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663,
      columnNumber: 47
    }
  }), "{"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 665,
      columnNumber: 33
    }
  }), "border-color"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 667,
      columnNumber: 39
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token hexcode color"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 669,
      columnNumber: 33
    }
  }), "#000"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671,
      columnNumber: 36
    }
  }), "}"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 674,
      columnNumber: 3
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676,
      columnNumber: 16
    }
  }), ".focus"), "\\", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 678,
      columnNumber: 41
    }
  }), ":border-white"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token pseudo-class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680,
      columnNumber: 42
    }
  }), ":focus")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 682,
      columnNumber: 47
    }
  }), "{"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684,
      columnNumber: 33
    }
  }), "border-color"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686,
      columnNumber: 39
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token hexcode color"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 688,
      columnNumber: 33
    }
  }), "#fff"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 690,
      columnNumber: 36
    }
  }), "}"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 693,
      columnNumber: 3
    }
  }), "/* ... */"), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697,
      columnNumber: 3
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 699,
      columnNumber: 16
    }
  }), ".hover"), "\\", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 701,
      columnNumber: 41
    }
  }), ":border-black"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token pseudo-class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 703,
      columnNumber: 42
    }
  }), ":hover")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 705,
      columnNumber: 47
    }
  }), "{"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 707,
      columnNumber: 33
    }
  }), "border-color"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 709,
      columnNumber: 39
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token hexcode color"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 711,
      columnNumber: 33
    }
  }), "#000"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 713,
      columnNumber: 36
    }
  }), "}"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 716,
      columnNumber: 3
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 718,
      columnNumber: 16
    }
  }), ".hover"), "\\", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 720,
      columnNumber: 41
    }
  }), ":border-white"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token pseudo-class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 722,
      columnNumber: 42
    }
  }), ":hover")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724,
      columnNumber: 47
    }
  }), "{"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 726,
      columnNumber: 33
    }
  }), "border-color"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 728,
      columnNumber: 39
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token hexcode color"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 730,
      columnNumber: 33
    }
  }), "#fff"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 732,
      columnNumber: 36
    }
  }), "}"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 735,
      columnNumber: 3
    }
  }), "/* ... */")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 738,
      columnNumber: 7
    }
  }, "\u042D\u0442\u043E \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u0441 \u0443\u0447\u0435\u0442\u043E\u043C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E HTML:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 739,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "div"
  }, {
    "className": "language-html"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 741,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 743,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 745,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 747,
      columnNumber: 16
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 749,
      columnNumber: 18
    }
  }), "<"), "input"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-name"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 751,
      columnNumber: 53
    }
  }), "class"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-value"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 753,
      columnNumber: 34
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 755,
      columnNumber: 18
    }
  }), "="), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 757,
      columnNumber: 32
    }
  }), "\""), "focus:bg-white hover:bg-black focus:border-white hover:border-black", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 759,
      columnNumber: 103
    }
  }), "\"")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 761,
      columnNumber: 39
    }
  }), ">"))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 764,
      columnNumber: 7
    }
  }, "...\u0435\u0441\u043B\u0438 \u0431\u044B \u0432\u0445\u043E\u0434 \u0431\u044B\u043B \u0437\u0430\u0432\u0438\u0441 \u0438 \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u0441\u0444\u043E\u043A\u0443\u0441\u0438\u0440\u043E\u0432\u0430\u043D, \u0444\u043E\u043D \u0431\u044B\u043B \u0431\u044B \u0431\u0435\u043B\u044B\u043C, \u0430 \u0433\u0440\u0430\u043D\u0438\u0446\u0430 \u0431\u044B\u043B\u0430 \u0431\u044B \u0447\u0435\u0440\u043D\u043E\u0439."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 765,
      columnNumber: 7
    }
  }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 \u0442\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u0434\u0430\u0435\u0442 \u0412\u0430\u043C \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0443\u044E \u0433\u0438\u0431\u043A\u043E\u0441\u0442\u044C \u043A\u0430\u043A \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u043C\u0443 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E, \u043D\u043E \u044D\u0442\u043E \u0442\u0430\u043A\u0436\u0435 \u043E\u0441\u0442\u0440\u044B\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u0438 \u043C\u043E\u0436\u0435\u0442 \u0438\u043C\u0435\u0442\u044C \u043D\u0435\u043F\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043D\u043D\u044B\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u044F, \u0435\u0441\u043B\u0438 \u0412\u044B \u043D\u0435 \u0431\u0443\u0434\u0435\u0442\u0435 \u043E\u0441\u0442\u043E\u0440\u043E\u0436\u043D\u044B. \u041C\u044B \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "#enabling-extra-variants"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 765,
      columnNumber: 223
    }
  }), "\u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B"), " \u0432\u043C\u0435\u0441\u0442\u043E \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E, \u043A\u043E\u0433\u0434\u0430 \u044D\u0442\u043E \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u044D\u0442\u0443 \u0444\u0443\u043D\u043A\u0446\u0438\u044E \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u0430\u043A \u0430\u0432\u0430\u0440\u0438\u0439\u043D\u044B\u0439 \u0432\u044B\u0445\u043E\u0434."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 768,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "osobye-varianty",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 769,
      columnNumber: 7
    }
  }, "\u041E\u0441\u043E\u0431\u044B\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 3,
    id: "otzyvchivyj",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 770,
      columnNumber: 7
    }
  }, "\u041E\u0442\u0437\u044B\u0432\u0447\u0438\u0432\u044B\u0439"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 771,
      columnNumber: 7
    }
  }, "\u0412\u0430\u0440\u0438\u0430\u043D\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 771,
      columnNumber: 22
    }
  }, "responsive"), " - \u044D\u0442\u043E \u043E\u0441\u043E\u0431\u044B\u0439 \u0441\u043B\u0443\u0447\u0430\u0439 \u0432 Tailwind, \u0438 \u043D\u0430 \u043D\u0435\u0433\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 771,
      columnNumber: 123
    }
  }, "\u043D\u0435"), " \u0432\u043B\u0438\u044F\u0435\u0442 \u043F\u043E\u0440\u044F\u0434\u043E\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0412\u044B \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0435 \u0432 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 772,
      columnNumber: 7
    }
  }, "\u042D\u0442\u043E \u0441\u0432\u044F\u0437\u0430\u043D\u043E \u0441 \u0442\u0435\u043C, \u0447\u0442\u043E \u0432\u0430\u0440\u0438\u0430\u043D\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 772,
      columnNumber: 45
    }
  }, "responsive"), " \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 772,
      columnNumber: 118
    }
  }, "\u0441\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0435\u0442\u0441\u044F"), " \u0441 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430\u043C\u0438, \u0430 \u044D\u0442\u043E \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u0435\u0441\u043B\u0438 \u0412\u044B \u0443\u043A\u0430\u0436\u0435\u0442\u0435 \u0434\u043B\u044F \u0443\u0442\u0438\u043B\u0438\u0442\u044B \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 772,
      columnNumber: 235
    }
  }, "responsive"), ", \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 772,
      columnNumber: 297
    }
  }, "hover"), " \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B , Tailwind \u0442\u0430\u043A\u0436\u0435 \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u0435\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 772,
      columnNumber: 389
    }
  }, "responsive hover"), " \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 773,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "div"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 775,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 777,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 779,
      columnNumber: 14
    }
  }), "// tailwind.config.js"), "\nmodule", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 782,
      columnNumber: 9
    }
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property-access"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 784,
      columnNumber: 28
    }
  }), "exports"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 786,
      columnNumber: 39
    }
  }), "="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 788,
      columnNumber: 33
    }
  }), "{"), "\n  variants", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 791,
      columnNumber: 13
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 793,
      columnNumber: 33
    }
  }), "{"), "\n    backgroundColor", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 796,
      columnNumber: 22
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 798,
      columnNumber: 33
    }
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 800,
      columnNumber: 28
    }
  }), "'responsive'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 802,
      columnNumber: 39
    }
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 804,
      columnNumber: 33
    }
  }), "'hover'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 806,
      columnNumber: 34
    }
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 808,
      columnNumber: 28
    }
  }), ","), "\n    borderColor", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 811,
      columnNumber: 18
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 813,
      columnNumber: 33
    }
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 815,
      columnNumber: 28
    }
  }), "'responsive'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 817,
      columnNumber: 39
    }
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 819,
      columnNumber: 33
    }
  }), "'focus'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 821,
      columnNumber: 34
    }
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 823,
      columnNumber: 28
    }
  }), ","), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 826,
      columnNumber: 5
    }
  }), "}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 828,
      columnNumber: 28
    }
  }), ","), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 831,
      columnNumber: 3
    }
  }), "}")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 834,
      columnNumber: 7
    }
  }, "\u0410\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u044B\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u0441\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u044B \u0432\u043C\u0435\u0441\u0442\u0435 \u0438 \u0432\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B \u0432 \u043A\u043E\u043D\u0435\u0446 \u0412\u0430\u0448\u0435\u0439 \u0442\u0430\u0431\u043B\u0438\u0446\u044B \u0441\u0442\u0438\u043B\u0435\u0439 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E, \u0447\u0442\u043E\u0431\u044B \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044C \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u0441\u043E \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u0447\u043D\u043E\u0441\u0442\u044C\u044E, \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u043E\u0442 \u0442\u043E\u0433\u043E, \u0433\u0434\u0435 \u0432 \u0412\u0430\u0448\u0435\u043C \u0441\u043F\u0438\u0441\u043A\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 834,
      columnNumber: 191
    }
  }, "variants"), " \u043F\u043E\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 834,
      columnNumber: 259
    }
  }, "responsive"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 835,
      columnNumber: 7
    }
  }, "\u0415\u0441\u043B\u0438 \u0412\u044B \u043F\u043E \u043A\u0430\u043A\u043E\u0439-\u043B\u0438\u0431\u043E \u043F\u0440\u0438\u0447\u0438\u043D\u0435 \u0445\u043E\u0442\u0438\u0442\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u044D\u0442\u043E \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435, \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0434\u0438\u0440\u0435\u043A\u0442\u0438\u0432\u0443 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/functions-and-directives#tailwind",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 835,
      columnNumber: 109
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 835,
      columnNumber: 172
    }
  }, "@tailwind screens")), ", \u0447\u0442\u043E\u0431\u044B \u0443\u043A\u0430\u0437\u0430\u0442\u044C, \u0433\u0434\u0435 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0432\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u044B\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 3,
    id: "temnyj-s-zashhitoj-ot-dvizheniya-i-s-umensheniem-dvizheniya",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 836,
      columnNumber: 7
    }
  }, "\u0422\u0435\u043C\u043D\u044B\u0439, \u0441 \u0437\u0430\u0449\u0438\u0442\u043E\u0439 \u043E\u0442 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u0438 \u0441 \u0443\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u0438\u0435\u043C \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 837,
      columnNumber: 7
    }
  }, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 837,
      columnNumber: 18
    }
  }, "dark"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 837,
      columnNumber: 72
    }
  }, "motion-safe"), ", and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 837,
      columnNumber: 137
    }
  }, "motion-reduce"), " variants also stack with other variants, but unlike ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 837,
      columnNumber: 251
    }
  }, "responsive"), ", they stack in the same \"slot\", so you can combine them with both ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 837,
      columnNumber: 376
    }
  }, "responsive"), " and simple state variants, but not with each other."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 838,
      columnNumber: 7
    }
  }, "The order of these variants matter relative to each other, but not relative to other variants. There is just about no situation imaginable where these would conflict with each other in practice, so this ends up being a non-issue anyways."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 839,
      columnNumber: 7
    }
  }, "You can include these variants in any order in your ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 839,
      columnNumber: 66
    }
  }, "variants"), " configuration and never notice the difference."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 3,
    id: "default",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 840,
      columnNumber: 7
    }
  }, "Default"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 841,
      columnNumber: 7
    }
  }, "You can use the special ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 841,
      columnNumber: 38
    }
  }, "DEFAULT"), " variant to control where the normal, non-prefixed version of a utility is generated relative to the other variants."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 842,
      columnNumber: 7
    }
  }, "This is an advanced feature and only really useful if you have a custom variant (like ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 842,
      columnNumber: 100
    }
  }, "children"), " in the example below) that should have a lower precedence than the normal version of a utility."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 843,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "div"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 845,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 847,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 849,
      columnNumber: 14
    }
  }), "// tailwind.config.js"), "\nmodule", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 852,
      columnNumber: 9
    }
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property-access"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 854,
      columnNumber: 28
    }
  }), "exports"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 856,
      columnNumber: 39
    }
  }), "="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 858,
      columnNumber: 33
    }
  }), "{"), "\n  variants", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 861,
      columnNumber: 13
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 863,
      columnNumber: 33
    }
  }), "{"), "\n    backgroundColor", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 866,
      columnNumber: 22
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 868,
      columnNumber: 33
    }
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 870,
      columnNumber: 28
    }
  }), "'children'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 872,
      columnNumber: 37
    }
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 874,
      columnNumber: 33
    }
  }), "'DEFAULT'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 876,
      columnNumber: 36
    }
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 878,
      columnNumber: 33
    }
  }), "'hover'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 880,
      columnNumber: 34
    }
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 882,
      columnNumber: 33
    }
  }), "'focus'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 884,
      columnNumber: 34
    }
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 886,
      columnNumber: 28
    }
  }), ","), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 889,
      columnNumber: 5
    }
  }), "}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 891,
      columnNumber: 28
    }
  }), ","), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 894,
      columnNumber: 3
    }
  }), "}")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 897,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "div"
  }, {
    "className": "language-css"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 899,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-css"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 901,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 903,
      columnNumber: 14
    }
  }), "/* Generated CSS */"), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 907,
      columnNumber: 3
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 909,
      columnNumber: 16
    }
  }), ".children"), "\\", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 911,
      columnNumber: 44
    }
  }), ":bg-black"), " > *"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 913,
      columnNumber: 58
    }
  }), "{"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 915,
      columnNumber: 33
    }
  }), "background-color"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 917,
      columnNumber: 43
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token hexcode color"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 919,
      columnNumber: 33
    }
  }), "#000"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 921,
      columnNumber: 31
    }
  }), ";"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 923,
      columnNumber: 33
    }
  }), "}"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 926,
      columnNumber: 3
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 928,
      columnNumber: 16
    }
  }), ".children"), "\\", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 930,
      columnNumber: 44
    }
  }), ":bg-white"), " > *"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 932,
      columnNumber: 58
    }
  }), "{"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 934,
      columnNumber: 33
    }
  }), "background-color"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 936,
      columnNumber: 43
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token hexcode color"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 938,
      columnNumber: 33
    }
  }), "#fff"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 940,
      columnNumber: 31
    }
  }), ";"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 942,
      columnNumber: 33
    }
  }), "}"), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 946,
      columnNumber: 3
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 948,
      columnNumber: 16
    }
  }), ".bg-black")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 950,
      columnNumber: 50
    }
  }), "{"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 952,
      columnNumber: 33
    }
  }), "background-color"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 954,
      columnNumber: 43
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token hexcode color"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 956,
      columnNumber: 33
    }
  }), "#000"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 958,
      columnNumber: 36
    }
  }), "}"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 961,
      columnNumber: 3
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 963,
      columnNumber: 16
    }
  }), ".bg-white")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 965,
      columnNumber: 50
    }
  }), "{"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 967,
      columnNumber: 33
    }
  }), "background-color"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 969,
      columnNumber: 43
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token hexcode color"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 971,
      columnNumber: 33
    }
  }), "#fff"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 973,
      columnNumber: 36
    }
  }), "}"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 976,
      columnNumber: 3
    }
  }), "/* ... */"), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 980,
      columnNumber: 3
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 982,
      columnNumber: 16
    }
  }), ".hover"), "\\", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 984,
      columnNumber: 41
    }
  }), ":bg-black"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token pseudo-class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 986,
      columnNumber: 38
    }
  }), ":hover")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 988,
      columnNumber: 47
    }
  }), "{"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 990,
      columnNumber: 33
    }
  }), "background-color"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 992,
      columnNumber: 43
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token hexcode color"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 994,
      columnNumber: 33
    }
  }), "#000"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 996,
      columnNumber: 36
    }
  }), "}"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 999,
      columnNumber: 3
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1001,
      columnNumber: 16
    }
  }), ".hover"), "\\", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1003,
      columnNumber: 41
    }
  }), ":bg-white"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token pseudo-class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1005,
      columnNumber: 38
    }
  }), ":hover")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1007,
      columnNumber: 47
    }
  }), "{"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1009,
      columnNumber: 33
    }
  }), "background-color"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1011,
      columnNumber: 43
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token hexcode color"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1013,
      columnNumber: 33
    }
  }), "#fff"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1015,
      columnNumber: 36
    }
  }), "}"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1018,
      columnNumber: 3
    }
  }), "/* ... */"), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1022,
      columnNumber: 3
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1024,
      columnNumber: 16
    }
  }), ".focus"), "\\", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1026,
      columnNumber: 41
    }
  }), ":bg-black"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token pseudo-class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1028,
      columnNumber: 38
    }
  }), ":focus")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1030,
      columnNumber: 47
    }
  }), "{"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1032,
      columnNumber: 33
    }
  }), "background-color"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1034,
      columnNumber: 43
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token hexcode color"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1036,
      columnNumber: 33
    }
  }), "#000"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1038,
      columnNumber: 36
    }
  }), "}"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1041,
      columnNumber: 3
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1043,
      columnNumber: 16
    }
  }), ".focus"), "\\", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1045,
      columnNumber: 41
    }
  }), ":bg-white"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token pseudo-class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1047,
      columnNumber: 38
    }
  }), ":focus")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1049,
      columnNumber: 47
    }
  }), "{"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1051,
      columnNumber: 33
    }
  }), "background-color"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1053,
      columnNumber: 43
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token hexcode color"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1055,
      columnNumber: 33
    }
  }), "#fff"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1057,
      columnNumber: 36
    }
  }), "}"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1060,
      columnNumber: 3
    }
  }), "/* ... */")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1063,
      columnNumber: 7
    }
  }, "Learn more about creating custom variants in the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/plugins#adding-variants",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1063,
      columnNumber: 63
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1063,
      columnNumber: 116
    }
  }, "variant plugin documentation")), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1064,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "using-custom-variants",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1065,
      columnNumber: 7
    }
  }, "Using custom variants"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1066,
      columnNumber: 7
    }
  }, "If you've written or installed a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/plugins",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1066,
      columnNumber: 47
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1066,
      columnNumber: 84
    }
  }, "plugin")), " that adds a new variant, you can enable that variant by including it in your variants configuration just like if it were a built-in variant."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1067,
      columnNumber: 7
    }
  }, "For example, the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/benface/tailwindcss-interaction-variants"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1067,
      columnNumber: 31
    }
  }), "tailwindcss-interaction-variants plugin"), " adds a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1069,
      columnNumber: 71
    }
  }, "group-disabled"), " variant (among others):"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1070,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "div"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1072,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1074,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1076,
      columnNumber: 14
    }
  }), "// tailwind.config.js"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1079,
      columnNumber: 3
    }
  }), "{"), "\n  variants", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1082,
      columnNumber: 13
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1084,
      columnNumber: 33
    }
  }), "{"), "\n    backgroundColor", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1087,
      columnNumber: 22
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1089,
      columnNumber: 33
    }
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1091,
      columnNumber: 28
    }
  }), "'responsive'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1093,
      columnNumber: 39
    }
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1095,
      columnNumber: 33
    }
  }), "'hover'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1097,
      columnNumber: 34
    }
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1099,
      columnNumber: 33
    }
  }), "'focus'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1101,
      columnNumber: 34
    }
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1103,
      columnNumber: 33
    }
  }), "'group-disabled'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1105,
      columnNumber: 43
    }
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1107,
      columnNumber: 28
    }
  }), ","), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1110,
      columnNumber: 5
    }
  }), "}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1112,
      columnNumber: 28
    }
  }), ","), "\n  plugins", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1115,
      columnNumber: 12
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1117,
      columnNumber: 33
    }
  }), "["), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1120,
      columnNumber: 7
    }
  }), "require"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1122,
      columnNumber: 34
    }
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1124,
      columnNumber: 28
    }
  }), "'tailwindcss-interaction-variants'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1126,
      columnNumber: 61
    }
  }), ")"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1128,
      columnNumber: 28
    }
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1130,
      columnNumber: 28
    }
  }), ")"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1132,
      columnNumber: 28
    }
  }), ","), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1135,
      columnNumber: 5
    }
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1137,
      columnNumber: 28
    }
  }), ","), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1140,
      columnNumber: 3
    }
  }), "}")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1143,
      columnNumber: 7
    }
  }, "Learn more about creating custom variants in the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/plugins#adding-variants",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1143,
      columnNumber: 63
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1143,
      columnNumber: 116
    }
  }, "variant plugin documentation")), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 3,
    id: "ordering-custom-variants",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1144,
      columnNumber: 7
    }
  }, "Ordering custom variants"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1145,
      columnNumber: 7
    }
  }, "If you'd like to specify a default sort position for a custom variant, override your ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1145,
      columnNumber: 99
    }
  }, "variantOrder"), " to include the custom variant:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1146,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "div"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1148,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1150,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1152,
      columnNumber: 14
    }
  }), "// tailwind.config.js"), "\nmodule", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1155,
      columnNumber: 9
    }
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property-access"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1157,
      columnNumber: 28
    }
  }), "exports"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1159,
      columnNumber: 39
    }
  }), "="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1161,
      columnNumber: 33
    }
  }), "{"), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1164,
      columnNumber: 5
    }
  }), "// ..."), "\n  variantOrder", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1167,
      columnNumber: 17
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1169,
      columnNumber: 33
    }
  }), "["), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1172,
      columnNumber: 7
    }
  }), "'first'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1174,
      columnNumber: 34
    }
  }), ","), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1177,
      columnNumber: 7
    }
  }), "'last'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1179,
      columnNumber: 33
    }
  }), ","), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1182,
      columnNumber: 7
    }
  }), "'odd'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1184,
      columnNumber: 32
    }
  }), ","), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1187,
      columnNumber: 7
    }
  }), "'even'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1189,
      columnNumber: 33
    }
  }), ","), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1192,
      columnNumber: 7
    }
  }), "'visited'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1194,
      columnNumber: 36
    }
  }), ","), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1197,
      columnNumber: 7
    }
  }), "'checked'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1199,
      columnNumber: 36
    }
  }), ","), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1202,
      columnNumber: 7
    }
  }), "'group-hover'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1204,
      columnNumber: 40
    }
  }), ","), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1207,
      columnNumber: 7
    }
  }), "'group-focus'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1209,
      columnNumber: 40
    }
  }), ","), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1212,
      columnNumber: 7
    }
  }), "'focus-within'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1214,
      columnNumber: 41
    }
  }), ","), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1217,
      columnNumber: 7
    }
  }), "'hover'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1219,
      columnNumber: 34
    }
  }), ","), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1222,
      columnNumber: 7
    }
  }), "'focus'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1224,
      columnNumber: 34
    }
  }), ","), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1227,
      columnNumber: 7
    }
  }), "'focus-visible'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1229,
      columnNumber: 42
    }
  }), ","), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1232,
      columnNumber: 7
    }
  }), "'active'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1234,
      columnNumber: 35
    }
  }), ","), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1237,
      columnNumber: 7
    }
  }), "'group-disabled'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1239,
      columnNumber: 43
    }
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1241,
      columnNumber: 33
    }
  }), "// Custom variant"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1244,
      columnNumber: 7
    }
  }), "'disabled'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1246,
      columnNumber: 37
    }
  }), ","), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1249,
      columnNumber: 5
    }
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1251,
      columnNumber: 28
    }
  }), ","), "\n  variants", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1254,
      columnNumber: 13
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1256,
      columnNumber: 33
    }
  }), "{"), "\n    extend", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1259,
      columnNumber: 13
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1261,
      columnNumber: 33
    }
  }), "{"), "\n      backgroundColor", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1264,
      columnNumber: 24
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1266,
      columnNumber: 33
    }
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1268,
      columnNumber: 28
    }
  }), "'group-disabled'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1270,
      columnNumber: 43
    }
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1272,
      columnNumber: 28
    }
  }), ","), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1275,
      columnNumber: 7
    }
  }), "}"), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1278,
      columnNumber: 5
    }
  }), "}"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1281,
      columnNumber: 3
    }
  }), "}")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1284,
      columnNumber: 7
    }
  }, "You'll need to specify the entire list when overriding the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1284,
      columnNumber: 73
    }
  }, "variantOrder"), " to include any custom variants."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1285,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "default-variants-reference",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1286,
      columnNumber: 7
    }
  }, "Default variants reference"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1287,
      columnNumber: 7
    }
  }, "Here is a complete reference of Tailwind's default variants configuration, which can be useful when you'd like to add a new variant while preserving the defaults.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_DefaultVariantsConfig__WEBPACK_IMPORTED_MODULE_8__["DefaultVariantsConfig"], {
    mdxType: "DefaultVariantsConfig",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1289,
      columnNumber: 5
    }
  }));
}
_c = MDXContent;
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;

var _c;

$RefreshReg$(_c, "MDXContent");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2RvY3MvY29uZmlndXJpbmctdmFyaWFudHMubWR4Il0sIm5hbWVzIjpbIkxheW91dCIsIl9MYXlvdXQiLCJtZXRhIiwidGFibGVPZkNvbnRlbnRzIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJfRGVmYXVsdCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLE1BQU0sR0FBR0MsZ0ZBQWY7QUFDQSxJQUFNQyxJQUFJLEdBQUc7QUFDWCxXQUFTLHFCQURFO0FBRVgsZ0JBQWMsVUFGSDtBQUdYLGlCQUFlO0FBSEosQ0FBYjtBQUtBLElBQU1DLGVBQWUsR0FBRyxDQUFDO0FBQ3ZCLFdBQVMsT0FEYztBQUV2QixVQUFRLE9BRmU7QUFHdkIsY0FBWTtBQUhXLENBQUQsRUFJckI7QUFDRCxXQUFTLG9DQURSO0FBRUQsVUFBUSxxQ0FGUDtBQUdELGNBQVk7QUFIWCxDQUpxQixFQVFyQjtBQUNELFdBQVMsd0NBRFI7QUFFRCxVQUFRLDBDQUZQO0FBR0QsY0FBWSxDQUFDO0FBQ1gsYUFBUyxpQkFERTtBQUVYLFlBQVE7QUFGRyxHQUFEO0FBSFgsQ0FScUIsRUFlckI7QUFDRCxXQUFTLGlCQURSO0FBRUQsVUFBUSxpQkFGUDtBQUdELGNBQVksQ0FBQztBQUNYLGFBQVMsWUFERTtBQUVYLFlBQVE7QUFGRyxHQUFELEVBR1Q7QUFDRCxhQUFTLHdEQURSO0FBRUQsWUFBUTtBQUZQLEdBSFMsRUFNVDtBQUNELGFBQVMsU0FEUjtBQUVELFlBQVE7QUFGUCxHQU5TO0FBSFgsQ0FmcUIsRUE0QnJCO0FBQ0QsV0FBUyx1QkFEUjtBQUVELFVBQVEsdUJBRlA7QUFHRCxjQUFZLENBQUM7QUFD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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWxFLHFDQXJyQ0YsRUFzckNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0ckNGLEVBdXJDRSwwREFBQywyREFBRDtBQUFVLFNBQUssRUFBRSxDQUFqQjtBQUFvQixNQUFFLEVBQUMsNEJBQXZCO0FBQW9ELE9BQUcsRUFBRSxJQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQXZyQ0YsRUF3ckNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEtBeHJDRixDQVJLLEVBa3NDTCwwREFBQyx1RkFBRDtBQUF1QixXQUFPLEVBQUMsdUJBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsc0NLLENBQVA7QUFzc0NEO0tBMXNDdUJELFU7QUE0c0N4QjtBQUNBQSxVQUFVLENBQUNHLGNBQVgsR0FBNEIsSUFBNUI7QUFDQUgsVUFBVSxDQUFDSCxXQUFYLEdBQXlCQSxXQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL2NvbmZpZ3VyaW5nLXZhcmlhbnRzLjI0NDRkNDQ2MzBlNjdjOGY2Mjg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgX0xpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgSGVhZGluZyBhcyBfSGVhZGluZyB9IGZyb20gJ0AvY29tcG9uZW50cy9IZWFkaW5nJ1xuaW1wb3J0IHsgRG9jdW1lbnRhdGlvbkxheW91dCBhcyBfTGF5b3V0IH0gZnJvbSAnQC9sYXlvdXRzL0RvY3VtZW50YXRpb25MYXlvdXQnXG5pbXBvcnQgeyBDb250ZW50c0xheW91dCBhcyBfRGVmYXVsdCB9IGZyb20gJ0AvbGF5b3V0cy9Db250ZW50c0xheW91dCdcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tICdAL2NvbXBvbmVudHMvSGVhZGluZydcbmltcG9ydCB7IERlZmF1bHRWYXJpYW50c0NvbmZpZyB9IGZyb20gJ0AvY29tcG9uZW50cy9EZWZhdWx0VmFyaWFudHNDb25maWcnXG5pbXBvcnQgeyBUaXBHb29kLCBUaXBCYWQgfSBmcm9tICdAL2NvbXBvbmVudHMvVGlwJ1xuY29uc3QgTGF5b3V0ID0gX0xheW91dDtcbmNvbnN0IG1ldGEgPSB7XG4gIFwidGl0bGVcIjogXCLQndCw0YHRgtGA0L7QudC60LAg0LLQsNGA0LjQsNC90YLQvtCyXCIsXG4gIFwic2hvcnRUaXRsZVwiOiBcItCS0LDRgNC40LDQvdGC0YtcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcItCd0LDRgdGC0YDQvtC50LrQsCDRgtC+0LPQviwg0LrQsNC60LjQtSDQstCw0YDQuNCw0L3RgtGLINGD0YLQuNC70LjRgiDQstC60LvRjtGH0LXQvdGLINCyINCS0LDRiNC10Lwg0L/RgNC+0LXQutGC0LUuXCJcbn07XG5jb25zdCB0YWJsZU9mQ29udGVudHMgPSBbe1xuICBcInRpdGxlXCI6IFwi0J7QsdC30L7RgFwiLFxuICBcInNsdWdcIjogXCJvYnpvclwiLFxuICBcImNoaWxkcmVuXCI6IFtdXG59LCB7XG4gIFwidGl0bGVcIjogXCLQktC60LvRjtGH0LXQvdC40LUg0LTQvtC/0L7Qu9C90LjRgtC10LvRjNC90YvRhSDQstCw0YDQuNCw0L3RgtC+0LJcIixcbiAgXCJzbHVnXCI6IFwidmtseXVjaGVuaWUtZG9wb2xuaXRlbG55aC12YXJpYW50b3ZcIixcbiAgXCJjaGlsZHJlblwiOiBbXVxufSwge1xuICBcInRpdGxlXCI6IFwi0J/QtdGA0LXQvtC/0YDQtdC00LXQu9C10L3QuNC1INCy0LDRgNC40LDQvdGC0L7QsiDQv9C+INGD0LzQvtC70YfQsNC90LjRjlwiLFxuICBcInNsdWdcIjogXCJwZXJlb3ByZWRlbGVuaWUtdmFyaWFudG92LXBvLXVtb2xjaGFuaXl1XCIsXG4gIFwiY2hpbGRyZW5cIjogW3tcbiAgICBcInRpdGxlXCI6IFwi0JLQsNGA0LjQsNC90YLRiyDQt9Cw0LrQsNC30LBcIixcbiAgICBcInNsdWdcIjogXCJ2YXJpYW50eS16YWthemFcIlxuICB9XVxufSwge1xuICBcInRpdGxlXCI6IFwi0J7RgdC+0LHRi9C1INCy0LDRgNC40LDQvdGC0YtcIixcbiAgXCJzbHVnXCI6IFwib3NvYnllLXZhcmlhbnR5XCIsXG4gIFwiY2hpbGRyZW5cIjogW3tcbiAgICBcInRpdGxlXCI6IFwi0J7RgtC30YvQstGH0LjQstGL0LlcIixcbiAgICBcInNsdWdcIjogXCJvdHp5dmNoaXZ5alwiXG4gIH0sIHtcbiAgICBcInRpdGxlXCI6IFwi0KLQtdC80L3Ri9C5LCDRgSDQt9Cw0YnQuNGC0L7QuSDQvtGCINC00LLQuNC20LXQvdC40Y8g0Lgg0YEg0YPQvNC10L3RjNGI0LXQvdC40LXQvCDQtNCy0LjQttC10L3QuNGPXCIsXG4gICAgXCJzbHVnXCI6IFwidGVtbnlqLXMtemFzaGhpdG9qLW90LWR2aXpoZW5peWEtaS1zLXVtZW5zaGVuaWVtLWR2aXpoZW5peWFcIlxuICB9LCB7XG4gICAgXCJ0aXRsZVwiOiBcIkRlZmF1bHRcIixcbiAgICBcInNsdWdcIjogXCJkZWZhdWx0XCJcbiAgfV1cbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIlVzaW5nIGN1c3RvbSB2YXJpYW50c1wiLFxuICBcInNsdWdcIjogXCJ1c2luZy1jdXN0b20tdmFyaWFudHNcIixcbiAgXCJjaGlsZHJlblwiOiBbe1xuICAgIFwidGl0bGVcIjogXCJPcmRlcmluZyBjdXN0b20gdmFyaWFudHNcIixcbiAgICBcInNsdWdcIjogXCJvcmRlcmluZy1jdXN0b20tdmFyaWFudHNcIlxuICB9XVxufSwge1xuICBcInRpdGxlXCI6IFwiRGVmYXVsdCB2YXJpYW50cyByZWZlcmVuY2VcIixcbiAgXCJzbHVnXCI6IFwiZGVmYXVsdC12YXJpYW50cy1yZWZlcmVuY2VcIixcbiAgXCJjaGlsZHJlblwiOiBbXVxufV07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBMYXlvdXQsXG5tZXRhLFxudGFibGVPZkNvbnRlbnRzXG59O1xuY29uc3QgTURYTGF5b3V0ID0gX0RlZmF1bHRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cblxuXG5cblxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9zZVwiPlxuICAgICAgPEhlYWRpbmcgbGV2ZWw9ezJ9IGlkPVwib2J6b3JcIiB0b2M9e3RydWV9IGhpZGRlbiBtZHhUeXBlPVwiSGVhZGluZ1wiPtCe0LHQt9C+0YA8L0hlYWRpbmc+XG4gICAgICA8cD57YNCSINGA0LDQt9C00LXQu9C1IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHZhcmlhbnRzYH08L2lubGluZUNvZGU+e2Ag0JLQsNGI0LXQs9C+INGE0LDQudC70LAgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdGFpbHdpbmQuY29uZmlnLmpzYH08L2lubGluZUNvZGU+e2Ag0JLRiyDQvtC/0YDQtdC00LXQu9GP0LXRgtC1LCDQutCw0LrQuNC1INCy0LDRgNC40LDQvdGC0Ysg0LTQvtC70LbQvdGLINCx0YvRgtGMINCy0LrQu9GO0YfQtdC90Ysg0LTQu9GPINC60LDQttC00L7Qs9C+INC+0YHQvdC+0LLQvdC+0LPQviDQv9C70LDQs9C40L3QsDpgfTwvcD5cbiAgICAgIDxkaXYgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJteS02IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktODAwXCJcbiAgICAgIH19PjxwcmUgcGFyZW50TmFtZT1cImRpdlwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICAgIH19Pjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGNvbW1lbnRcIlxuICAgICAgICAgICAgfX0+e2AvLyB0YWlsd2luZC5jb25maWcuanNgfTwvc3Bhbj57YFxubW9kdWxlYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2AuYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHByb3BlcnR5LWFjY2Vzc1wiXG4gICAgICAgICAgICB9fT57YGV4cG9ydHNgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICB9fT57YD1gfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YHtgfTwvc3Bhbj57YFxuICB2YXJpYW50c2B9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG9wZXJhdG9yXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19Pntge2B9PC9zcGFuPntgXG4gICAgZXh0ZW5kYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gb3BlcmF0b3JcIlxuICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+e2BcbiAgICAgIGJhY2tncm91bmRDb2xvcmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG9wZXJhdG9yXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgW2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBzdHJpbmdcIlxuICAgICAgICAgICAgfX0+e2AnYWN0aXZlJ2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YF1gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2BcbiAgICAgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGNvbW1lbnRcIlxuICAgICAgICAgICAgfX0+e2AvLyAuLi5gfTwvc3Bhbj57YFxuICAgICAgYm9yZGVyQ29sb3JgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YFtgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gc3RyaW5nXCJcbiAgICAgICAgICAgIH19PntgJ2ZvY3VzLXZpc2libGUnYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHN0cmluZ1wiXG4gICAgICAgICAgICB9fT57YCdmaXJzdCdgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2BdYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgXG4gICAgICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjb21tZW50XCJcbiAgICAgICAgICAgIH19PntgLy8gLi4uYH08L3NwYW4+e2BcbiAgICAgIHRleHRDb2xvcmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG9wZXJhdG9yXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgW2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBzdHJpbmdcIlxuICAgICAgICAgICAgfX0+e2AndmlzaXRlZCdgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2BdYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgXG4gICAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B9YH08L3NwYW4+e2BcbiAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B9YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YH1gfTwvc3Bhbj48L2NvZGU+PC9wcmU+PC9kaXY+XG4gICAgICA8cD57YNCa0LDQttC00L7QtSDRgdCy0L7QudGB0YLQstC+IC0g0Y3RgtC+INC40LzRjyDQvtGB0L3QvtCy0L3QvtCz0L4g0L/Qu9Cw0LPQuNC90LAsINGD0LrQsNC30YvQstCw0Y7RidC10LUg0L3QsCDQvNCw0YHRgdC40LIg0LLQsNGA0LjQsNC90YLQvtCyLCDQutC+0YLQvtGA0YvQtSDQvdGD0LbQvdC+INGB0LPQtdC90LXRgNC40YDQvtCy0LDRgtGMINC00LvRjyDRjdGC0L7Qs9C+INC/0LvQsNCz0LjQvdCwLmB9PC9wPlxuICAgICAgPHA+e2DQmNC3INC60L7RgNC+0LHQutC4INC/0L7QtNC00LXRgNC20LjQstCw0Y7RgtGB0Y8g0YHQu9C10LTRg9GO0YnQuNC1INCy0LDRgNC40LDQvdGC0Ys6YH08L3A+XG4gICAgICA8dGFibGU+XG4gICAgICAgIDx0aGVhZCBwYXJlbnROYW1lPVwidGFibGVcIj5cbiAgICAgICAgICA8dHIgcGFyZW50TmFtZT1cInRoZWFkXCI+XG4gICAgICAgICAgICA8dGggcGFyZW50TmFtZT1cInRyXCIgey4uLntcbiAgICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgICB9fT57YNCS0LDRgNC40LDQvdGCYH08L3RoPlxuICAgICAgICAgICAgPHRoIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICAgIFwiYWxpZ25cIjogbnVsbFxuICAgICAgICAgICAgfX0+e2DQntC/0LjRgdCw0L3QuNC1YH08L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keSBwYXJlbnROYW1lPVwidGFibGVcIj5cbiAgICAgICAgICA8dHIgcGFyZW50TmFtZT1cInRib2R5XCI+XG4gICAgICAgICAgICA8dGQgcGFyZW50TmFtZT1cInRyXCIgey4uLntcbiAgICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgICB9fT48aW5saW5lQ29kZSBwYXJlbnROYW1lPVwidGRcIj57YHJlc3BvbnNpdmVgfTwvaW5saW5lQ29kZT48L3RkPlxuICAgICAgICAgICAgPHRkIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICAgIFwiYWxpZ25cIjogbnVsbFxuICAgICAgICAgICAgfX0+e2DQkNC00LDQv9GC0LjQstC90YvQtSDQstCw0YDQuNCw0L3RgtGLLCDRgtCw0LrQuNC1INC60LDQuiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJ0ZFwiPntgc21gfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwidGRcIj57YG1kYH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInRkXCI+e2BsZ2B9PC9pbmxpbmVDb2RlPntgINC4IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInRkXCI+e2B4bGB9PC9pbmxpbmVDb2RlPntgLmB9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0ciBwYXJlbnROYW1lPVwidGJvZHlcIj5cbiAgICAgICAgICAgIDx0ZCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJ0ZFwiPntgZGFya2B9PC9pbmxpbmVDb2RlPjwvdGQ+XG4gICAgICAgICAgICA8dGQgcGFyZW50TmFtZT1cInRyXCIgey4uLntcbiAgICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgICB9fT57YNCd0LDRhtC10LvQtdC9INC90LAg0YLQtdC80L3Ri9C5INGA0LXQttC40LwuYH08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyIHBhcmVudE5hbWU9XCJ0Ym9keVwiPlxuICAgICAgICAgICAgPHRkIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICAgIFwiYWxpZ25cIjogbnVsbFxuICAgICAgICAgICAgfX0+PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInRkXCI+e2Btb3Rpb24tc2FmZWB9PC9pbmxpbmVDb2RlPjwvdGQ+XG4gICAgICAgICAgICA8dGQgcGFyZW50TmFtZT1cInRyXCIgey4uLntcbiAgICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgICB9fT57YNCd0LDRhtC10LvQtdC9INC90LAg0LzQtdC00LjQsCDQstGL0YDQsNC20LXQvdC40LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwidGRcIj57YHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IG5vLXByZWZlcmVuY2VgfTwvaW5saW5lQ29kZT57YC5gfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHIgcGFyZW50TmFtZT1cInRib2R5XCI+XG4gICAgICAgICAgICA8dGQgcGFyZW50TmFtZT1cInRyXCIgey4uLntcbiAgICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgICB9fT48aW5saW5lQ29kZSBwYXJlbnROYW1lPVwidGRcIj57YG1vdGlvbi1yZWR1Y2VgfTwvaW5saW5lQ29kZT48L3RkPlxuICAgICAgICAgICAgPHRkIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICAgIFwiYWxpZ25cIjogbnVsbFxuICAgICAgICAgICAgfX0+e2DQndCw0YbQtdC70LXQvSDQvdCwINC80LXQtNC40LAg0LLRi9GA0LDQttC10L3QuNC1IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInRkXCI+e2BwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2VgfTwvaW5saW5lQ29kZT57YC5gfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHIgcGFyZW50TmFtZT1cInRib2R5XCI+XG4gICAgICAgICAgICA8dGQgcGFyZW50TmFtZT1cInRyXCIgey4uLntcbiAgICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgICB9fT48aW5saW5lQ29kZSBwYXJlbnROYW1lPVwidGRcIj57YGZpcnN0YH08L2lubGluZUNvZGU+PC90ZD5cbiAgICAgICAgICAgIDx0ZCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICAgIH19Pntg0J3QsNGG0LXQu9C10L0g0L3QsCDQv9GB0LXQstC00L7QutC70LDRgdGBIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInRkXCI+e2BmaXJzdC1jaGlsZGB9PC9pbmxpbmVDb2RlPntgLmB9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0ciBwYXJlbnROYW1lPVwidGJvZHlcIj5cbiAgICAgICAgICAgIDx0ZCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJ0ZFwiPntgbGFzdGB9PC9pbmxpbmVDb2RlPjwvdGQ+XG4gICAgICAgICAgICA8dGQgcGFyZW50TmFtZT1cInRyXCIgey4uLntcbiAgICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgICB9fT57YNCd0LDRhtC10LvQtdC9INC90LAg0L/RgdC10LLQtNC+0LrQu9Cw0YHRgSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJ0ZFwiPntgbGFzdC1jaGlsZGB9PC9pbmxpbmVDb2RlPntgLmB9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0ciBwYXJlbnROYW1lPVwidGJvZHlcIj5cbiAgICAgICAgICAgIDx0ZCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJ0ZFwiPntgb2RkYH08L2lubGluZUNvZGU+PC90ZD5cbiAgICAgICAgICAgIDx0ZCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICAgIH19Pntg0J3QsNGG0LXQu9C10L0g0L3QsCDQv9GB0LXQstC00L7QutC70LDRgdGBIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInRkXCI+e2BvZGQtY2hpbGRgfTwvaW5saW5lQ29kZT57YC5gfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHIgcGFyZW50TmFtZT1cInRib2R5XCI+XG4gICAgICAgICAgICA8dGQgcGFyZW50TmFtZT1cInRyXCIgey4uLntcbiAgICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgICB9fT48aW5saW5lQ29kZSBwYXJlbnROYW1lPVwidGRcIj57YGV2ZW5gfTwvaW5saW5lQ29kZT48L3RkPlxuICAgICAgICAgICAgPHRkIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICAgIFwiYWxpZ25cIjogbnVsbFxuICAgICAgICAgICAgfX0+e2DQndCw0YbQtdC70LXQvSDQvdCwINC/0YHQtdCy0LTQvtC60LvQsNGB0YEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwidGRcIj57YGV2ZW4tY2hpbGRgfTwvaW5saW5lQ29kZT57YC5gfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHIgcGFyZW50TmFtZT1cInRib2R5XCI+XG4gICAgICAgICAgICA8dGQgcGFyZW50TmFtZT1cInRyXCIgey4uLntcbiAgICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgICB9fT48aW5saW5lQ29kZSBwYXJlbnROYW1lPVwidGRcIj57YHZpc2l0ZWRgfTwvaW5saW5lQ29kZT48L3RkPlxuICAgICAgICAgICAgPHRkIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICAgIFwiYWxpZ25cIjogbnVsbFxuICAgICAgICAgICAgfX0+e2DQndCw0YbQtdC70LXQvSDQvdCwINC/0YHQtdCy0LTQvtC60LvQsNGB0YEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwidGRcIj57YHZpc2l0ZWRgfTwvaW5saW5lQ29kZT57YC5gfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHIgcGFyZW50TmFtZT1cInRib2R5XCI+XG4gICAgICAgICAgICA8dGQgcGFyZW50TmFtZT1cInRyXCIgey4uLntcbiAgICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgICB9fT48aW5saW5lQ29kZSBwYXJlbnROYW1lPVwidGRcIj57YGNoZWNrZWRgfTwvaW5saW5lQ29kZT48L3RkPlxuICAgICAgICAgICAgPHRkIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICAgIFwiYWxpZ25cIjogbnVsbFxuICAgICAgICAgICAgfX0+e2DQndCw0YbQtdC70LXQvSDQvdCwINC/0YHQtdCy0LTQvtC60LvQsNGB0YEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwidGRcIj57YGNoZWNrZWRgfTwvaW5saW5lQ29kZT57YC5gfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHIgcGFyZW50TmFtZT1cInRib2R5XCI+XG4gICAgICAgICAgICA8dGQgcGFyZW50TmFtZT1cInRyXCIgey4uLntcbiAgICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgICB9fT48aW5saW5lQ29kZSBwYXJlbnROYW1lPVwidGRcIj57YGdyb3VwLWhvdmVyYH08L2lubGluZUNvZGU+PC90ZD5cbiAgICAgICAgICAgIDx0ZCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICAgIH19Pntg0J3QsNGG0LXQu9C10L0g0L3QsCDRjdC70LXQvNC10L3Rgiwg0LrQvtCz0LTQsCDQvtGC0LzQtdGH0LXQvdC90YvQuSDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0Y3Qu9C10LzQtdC90YIg0YHQvtC+0YLQstC10YLRgdGC0LLRg9C10YIgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwidGRcIj57YGhvdmVyYH08L2lubGluZUNvZGU+e2AuYH08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyIHBhcmVudE5hbWU9XCJ0Ym9keVwiPlxuICAgICAgICAgICAgPHRkIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICAgIFwiYWxpZ25cIjogbnVsbFxuICAgICAgICAgICAgfX0+PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInRkXCI+e2Bncm91cC1mb2N1c2B9PC9pbmxpbmVDb2RlPjwvdGQ+XG4gICAgICAgICAgICA8dGQgcGFyZW50TmFtZT1cInRyXCIgey4uLntcbiAgICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgICB9fT57YNCd0LDRhtC10LvQtdC9INC90LAg0Y3Qu9C10LzQtdC90YIsINC60L7Qs9C00LAg0L7RgtC80LXRh9C10L3QvdGL0Lkg0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INGN0LvQtdC80LXQvdGCINGB0L7QvtGC0LLQtdGC0YHRgtCy0YPQtdGCIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInRkXCI+e2Bmb2N1c2B9PC9pbmxpbmVDb2RlPntgLmB9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0ciBwYXJlbnROYW1lPVwidGJvZHlcIj5cbiAgICAgICAgICAgIDx0ZCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJ0ZFwiPntgZm9jdXMtd2l0aGluYH08L2lubGluZUNvZGU+PC90ZD5cbiAgICAgICAgICAgIDx0ZCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICAgIH19Pntg0J3QsNGG0LXQu9C10L0g0L3QsCDQv9GB0LXQstC00L7QutC70LDRgdGBIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInRkXCI+e2Bmb2N1cy13aXRoaW5gfTwvaW5saW5lQ29kZT57YC5gfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHIgcGFyZW50TmFtZT1cInRib2R5XCI+XG4gICAgICAgICAgICA8dGQgcGFyZW50TmFtZT1cInRyXCIgey4uLntcbiAgICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgICB9fT48aW5saW5lQ29kZSBwYXJlbnROYW1lPVwidGRcIj57YGhvdmVyYH08L2lubGluZUNvZGU+PC90ZD5cbiAgICAgICAgICAgIDx0ZCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICAgIH19Pntg0J3QsNGG0LXQu9C10L0g0L3QsCDQv9GB0LXQstC00L7QutC70LDRgdGBIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInRkXCI+e2Bob3ZlcmB9PC9pbmxpbmVDb2RlPntgLmB9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0ciBwYXJlbnROYW1lPVwidGJvZHlcIj5cbiAgICAgICAgICAgIDx0ZCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJ0ZFwiPntgZm9jdXNgfTwvaW5saW5lQ29kZT48L3RkPlxuICAgICAgICAgICAgPHRkIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICAgIFwiYWxpZ25cIjogbnVsbFxuICAgICAgICAgICAgfX0+e2DQndCw0YbQtdC70LXQvSDQvdCwINC/0YHQtdCy0LTQvtC60LvQsNGB0YEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwidGRcIj57YGZvY3VzYH08L2lubGluZUNvZGU+e2AuYH08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyIHBhcmVudE5hbWU9XCJ0Ym9keVwiPlxuICAgICAgICAgICAgPHRkIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICAgIFwiYWxpZ25cIjogbnVsbFxuICAgICAgICAgICAgfX0+PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInRkXCI+e2Bmb2N1cy12aXNpYmxlYH08L2lubGluZUNvZGU+PC90ZD5cbiAgICAgICAgICAgIDx0ZCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICAgIH19Pntg0J3QsNGG0LXQu9C10L0g0L3QsCDQv9GB0LXQstC00L7QutC70LDRgdGBIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInRkXCI+e2Bmb2N1cy12aXNpYmxlYH08L2lubGluZUNvZGU+e2AuYH08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyIHBhcmVudE5hbWU9XCJ0Ym9keVwiPlxuICAgICAgICAgICAgPHRkIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICAgIFwiYWxpZ25cIjogbnVsbFxuICAgICAgICAgICAgfX0+PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInRkXCI+e2BhY3RpdmVgfTwvaW5saW5lQ29kZT48L3RkPlxuICAgICAgICAgICAgPHRkIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICAgIFwiYWxpZ25cIjogbnVsbFxuICAgICAgICAgICAgfX0+e2DQndCw0YbQtdC70LXQvSDQvdCwINC/0YHQtdCy0LTQvtC60LvQsNGB0YEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwidGRcIj57YGFjdGl2ZWB9PC9pbmxpbmVDb2RlPntgLmB9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0ciBwYXJlbnROYW1lPVwidGJvZHlcIj5cbiAgICAgICAgICAgIDx0ZCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJ0ZFwiPntgZGlzYWJsZWRgfTwvaW5saW5lQ29kZT48L3RkPlxuICAgICAgICAgICAgPHRkIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICAgIFwiYWxpZ25cIjogbnVsbFxuICAgICAgICAgICAgfX0+e2DQndCw0YbQtdC70LXQvSDQvdCwINC/0YHQtdCy0LTQvtC60LvQsNGB0YEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwidGRcIj57YGRpc2FibGVkYH08L2lubGluZUNvZGU+e2AuYH08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgICAgPHA+e2DQlNC70Y8g0L/QvtC70YPRh9C10L3QuNGPINC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdC+0Lkg0LjQvdGE0L7RgNC80LDRhtC40Lgg0L4g0YLQvtC8LCDQutCw0Log0YDQsNCx0L7RgtCw0Y7RgiDQstCw0YDQuNCw0L3RgtGLLCDQv9GA0L7Rh9GC0LjRgtC1INC90LDRiNGDINC00L7QutGD0LzQtdC90YLQsNGG0LjRjiDQv9C+IGB9PF9MaW5rIGhyZWY9XCIvZG9jcy9yZXNwb25zaXZlLWRlc2lnblwiIHBhc3NIcmVmPjxhPntg0LDQtNCw0L/RgtC40LLQvdGL0Lwg0LLQsNGA0LjQsNC90YLQsNC8YH08L2E+PC9fTGluaz57YCwgYH08X0xpbmsgaHJlZj1cIi9kb2NzL2RhcmstbW9kZVwiIHBhc3NIcmVmPjxhPntg0LLQsNGA0LjQsNC90YLQsNC8INGC0LXQvNC90L7Qs9C+INGA0LXQttC40LzQsGB9PC9hPjwvX0xpbms+e2Ag0LggYH08X0xpbmsgaHJlZj1cIi9kb2NzL2hvdmVyLWZvY3VzLWFuZC1vdGhlci1zdGF0ZXNcIiBwYXNzSHJlZj48YT57YGhvdmVyLCBmb2N1cyDQuCDQtNGA0YPQs9C40Lwg0LLQsNGA0LjQsNC90YLQsNC8INGB0L7RgdGC0L7Rj9C90LjRj2B9PC9hPjwvX0xpbms+e2AuYH08L3A+XG4gICAgICA8aHI+PC9ocj5cbiAgICAgIDxfSGVhZGluZyBsZXZlbD17Mn0gaWQ9XCJ2a2x5dWNoZW5pZS1kb3BvbG5pdGVsbnloLXZhcmlhbnRvdlwiIHRvYz17dHJ1ZX0+0JLQutC70Y7Rh9C10L3QuNC1INC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdGL0YUg0LLQsNGA0LjQsNC90YLQvtCyPC9fSGVhZGluZz5cbiAgICAgIDxwPntg0JXRgdC70Lgg0JLRiyDRhdC+0YLQuNGC0LUg0LLQutC70Y7Rh9C40YLRjCDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3Ri9C1INCy0LDRgNC40LDQvdGC0Ysg0LTQu9GPINC/0LvQsNCz0LjQvdCwINCyINC00L7Qv9C+0LvQvdC10L3QuNC1INC6INC90LDRgdGC0YDQvtC50LrQsNC8INC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOLCDQktGLINC80L7QttC10YLQtSDQvdCw0YHRgtGA0L7QuNGC0Ywg0YHQstC+0Lgg0LLQsNGA0LjQsNC90YLRiyDRgSDQv9C+0LzQvtGJ0YzRjiDQutC70Y7Rh9C10LLQvtCz0L4g0YHQu9C+0LLQsCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BleHRlbmRgfTwvaW5saW5lQ29kZT57YCwg0LDQvdCw0LvQvtCz0LjRh9C90L4g0YLQvtC80YMsINC60LDQuiDQktGLINC80L7QttC10YLQtSDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0YDQsNGB0YjQuNGA0LXQvdC40LUg0LLQvdGD0YLRgNC4INGA0LDQt9C00LXQu9CwIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHRoZW1lYH08L2lubGluZUNvZGU+e2A6YH08L3A+XG4gICAgICA8ZGl2IHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibXktNiByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTgwMFwiXG4gICAgICB9fT48cHJlIHBhcmVudE5hbWU9XCJkaXZcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgICB9fT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjb21tZW50XCJcbiAgICAgICAgICAgIH19PntgLy8gdGFpbHdpbmQuY29uZmlnLmpzYH08L3NwYW4+e2Bcbm1vZHVsZWB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLmB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwcm9wZXJ0eS1hY2Nlc3NcIlxuICAgICAgICAgICAgfX0+e2BleHBvcnRzYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gb3BlcmF0b3JcIlxuICAgICAgICAgICAgfX0+e2A9YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+e2BcbiAgdmFyaWFudHNgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YHtgfTwvc3Bhbj57YFxuICAgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGNvbW1lbnRcIlxuICAgICAgICAgICAgfX0+e2AvLyBcItCQ0LrRgtC40LLQvdGL0LlcIiDQstCw0YDQuNCw0L3RgiDQsdGD0LTQtdGCINGB0LPQtdC90LXRgNC40YDQvtCy0LDQvSDQsiDQtNC+0L/QvtC70L3QtdC90LjQtSDQuiDQt9C90LDRh9C10L3QuNGP0Lwg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4uYH08L3NwYW4+e2BcbiAgICBleHRlbmRgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YHtgfTwvc3Bhbj57YFxuICAgICAgYmFja2dyb3VuZENvbG9yYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gb3BlcmF0b3JcIlxuICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2BbYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHN0cmluZ1wiXG4gICAgICAgICAgICB9fT57YCdhY3RpdmUnYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgXWB9PC9zcGFuPntgXG4gICAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B9YH08L3NwYW4+e2BcbiAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B9YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YH1gfTwvc3Bhbj48L2NvZGU+PC9wcmU+PC9kaXY+XG4gICAgICA8cD57YNCf0L7RgdC60L7Qu9GM0LrRgyBgfTxfTGluayBocmVmPVwiL2RvY3MvY29uZmlndXJpbmctdmFyaWFudHMjb3JkZXJpbmctdmFyaWFudHNcIiBwYXNzSHJlZj48YT57YNC/0L7RgNGP0LTQvtC6INCy0LDRgNC40LDQvdGC0L7QsiDQstCw0LbQtdC9YH08L2E+PC9fTGluaz57YCwg0LvRjtCx0YvQtSDQstCw0YDQuNCw0L3RgtGLLCDQtNC+0LHQsNCy0LvQtdC90L3Ri9C1INC/0L7QtCDQutC70Y7Rh9C+0LwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZXh0ZW5kYH08L2lubGluZUNvZGU+e2AsINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INGD0L/QvtGA0Y/QtNC+0YfQuNCy0LDRjtGC0YHRjyDQtNC70Y8g0JLQsNGBINGBINC40YHQv9C+0LvRjNC30L7QstCw0L3QuNC10Lwg0YDQsNC30YPQvNC90L7Qs9C+INC/0L7RgNGP0LTQutCwINCy0LDRgNC40LDQvdGC0L7QsiDQv9C+INGD0LzQvtC70YfQsNC90LjRji4g0J/RgNC4INC90LXQvtCx0YXQvtC00LjQvNC+0YHRgtC4INCS0Ysg0LzQvtC20LXRgtC1INC90LDRgdGC0YDQvtC40YLRjCDRjdGC0L7RgiDQv9C+0YDRj9C00L7QuiDRgSDQv9C+0LzQvtGJ0YzRjiDQv9Cw0YDQsNC80LXRgtGA0LAgYH08X0xpbmsgaHJlZj1cIi9kb2NzL2NvbmZpZ3VyYXRpb24jdmFyaWFudC1vcmRlclwiIHBhc3NIcmVmPjxhPntgdmFyaWFudE9yZGVyYH08L2E+PC9fTGluaz57YC5gfTwvcD5cbiAgICAgIDxocj48L2hyPlxuICAgICAgPF9IZWFkaW5nIGxldmVsPXsyfSBpZD1cInBlcmVvcHJlZGVsZW5pZS12YXJpYW50b3YtcG8tdW1vbGNoYW5peXVcIiB0b2M9e3RydWV9PtCf0LXRgNC10L7Qv9GA0LXQtNC10LvQtdC90LjQtSDQstCw0YDQuNCw0L3RgtC+0LIg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y48L19IZWFkaW5nPlxuICAgICAgPHA+e2DQm9GO0LHRi9C1INCy0LDRgNC40LDQvdGC0YssINC90LDRgdGC0YDQvtC10L3QvdGL0LUg0L3QtdC/0L7RgdGA0LXQtNGB0YLQstC10L3QvdC+INC/0L7QtCDQutC70Y7Rh9C+0LwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgb3B0aW9uc2B9PC9pbmxpbmVDb2RlPntgLCBgfTxzdHJvbmcgcGFyZW50TmFtZT1cInBcIj57YNC/0LXRgNC10L7Qv9GA0LXQtNC10LvRj9GO0YJgfTwvc3Ryb25nPntgINCy0LDRgNC40LDQvdGC0Ysg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0LTQu9GPINGN0YLQvtCz0L4g0L/QvtC00LrQu9GO0YfQsNC10LzQvtCz0L4g0LzQvtC00YPQu9GPLmB9PC9wPlxuICAgICAgPGRpdiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcIm15LTYgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS04MDBcIlxuICAgICAgfX0+PHByZSBwYXJlbnROYW1lPVwiZGl2XCIgey4uLntcbiAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgICAgfX0+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY29tbWVudFwiXG4gICAgICAgICAgICB9fT57YC8vIHRhaWx3aW5kLmNvbmZpZy5qc2B9PC9zcGFuPntgXG5tb2R1bGVgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YC5gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJvcGVydHktYWNjZXNzXCJcbiAgICAgICAgICAgIH19PntgZXhwb3J0c2B9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG9wZXJhdG9yXCJcbiAgICAgICAgICAgIH19PntgPWB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19Pntge2B9PC9zcGFuPntgXG4gIHZhcmlhbnRzYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gb3BlcmF0b3JcIlxuICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+e2BcbiAgICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjb21tZW50XCJcbiAgICAgICAgICAgIH19PntgLy8g0JHRg9C00YPRgiDRgdC+0LfQtNCw0L3RiyDRgtC+0LvRjNC60L4gXCLQsNC60YLQuNCy0L3Ri9C1XCIg0LLQsNGA0LjQsNC90YLRi2B9PC9zcGFuPntgXG4gICAgYmFja2dyb3VuZENvbG9yYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gb3BlcmF0b3JcIlxuICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2BbYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHN0cmluZ1wiXG4gICAgICAgICAgICB9fT57YCdhY3RpdmUnYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgXWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YFxuICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YH1gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPjwvY29kZT48L3ByZT48L2Rpdj5cbiAgICAgIDxwPntg0J/RgNC4INC/0LXRgNC10L7Qv9GA0LXQtNC10LvQtdC90LjQuCDQstCw0YDQuNCw0L3RgtC+0LIg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0YPQsdC10LTQuNGC0LXRgdGMLCDRh9GC0L4g0JLRiyDQstGB0LXQs9C00LAg0YPQutCw0LfRi9Cy0LDQtdGC0LUgYH08ZW0gcGFyZW50TmFtZT1cInBcIj57YNCy0YHQtWB9PC9lbT57YCDQstCw0YDQuNCw0L3RgtGLLCDQutC+0YLQvtGA0YvQtSDRhdC+0YLQuNGC0LUg0LLQutC70Y7Rh9C40YLRjCwg0LAg0L3QtSDRgtC+0LvRjNC60L4g0L3QvtCy0YvQtSwg0LrQvtGC0L7RgNGL0LUg0JLRiyDRhdC+0YLQuNGC0LUg0LTQvtCx0LDQstC40YLRjC5gfTwvcD5cbiAgICAgIDxfSGVhZGluZyBsZXZlbD17M30gaWQ9XCJ2YXJpYW50eS16YWthemFcIiB0b2M9e3RydWV9PtCS0LDRgNC40LDQvdGC0Ysg0LfQsNC60LDQt9CwPC9fSGVhZGluZz5cbiAgICAgIDxwPntg0JLQsNC20L3QviDQvtGC0LzQtdGC0LjRgtGMLCDRh9GC0L4g0L/RgNC4INC/0LXRgNC10L7Qv9GA0LXQtNC10LvQtdC90LjQuCDQstCw0YDQuNCw0L3RgtC+0LIgYH08c3Ryb25nIHBhcmVudE5hbWU9XCJwXCI+e2DQstCw0YDQuNCw0L3RgtGLINGB0L7Qt9C00LDRjtGC0YHRjyDQsiDRg9C60LDQt9Cw0L3QvdC+0Lwg0JLQsNC80Lgg0L/QvtGA0Y/QtNC60LVgfTwvc3Ryb25nPntgLCDQv9C+0Y3RgtC+0LzRgyDQstCw0YDQuNCw0L3RgtGLINCyINC60L7QvdGG0LUg0YHQv9C40YHQutCwINCx0YPQtNGD0YIg0LjQvNC10YLRjCDQv9GA0LjQvtGA0LjRgtC10YIg0L3QsNC0INCy0LDRgNC40LDQvdGC0LDQvNC4INCyINC90LDRh9Cw0LvQtSDRgdC/0LjRgdC60LAuYH08L3A+XG4gICAgICA8cD57YNCd0LDQv9GA0LjQvNC10YAsINC30LTQtdGB0Ywg0LLQsNGA0LjQsNC90YLRiyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bmb2N1c2B9PC9pbmxpbmVDb2RlPntgINC40LzQtdGO0YIg0L3QsNC40LLRi9GB0YjQuNC5INC/0YDQuNC+0YDQuNGC0LXRgiDQtNC70Y8g0YPRgtC40LvQuNGCYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgIGJhY2tncm91bmRDb2xvcmB9PC9pbmxpbmVDb2RlPntgLCDQsCDQstCw0YDQuNCw0L3RgtGLIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGhvdmVyYH08L2lubGluZUNvZGU+e2Ag0LjQvNC10Y7RgiDQvdCw0LjQstGL0YHRiNC40Lkg0L/RgNC40L7RgNC40YLQtdGCINC00LvRjyDRg9GC0LjQu9C40YIgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgYm9yZGVyQ29sb3JgfTwvaW5saW5lQ29kZT57YDpgfTwvcD5cbiAgICAgIDxkaXYgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJteS02IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktODAwXCJcbiAgICAgIH19PjxwcmUgcGFyZW50TmFtZT1cImRpdlwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICAgIH19Pjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGNvbW1lbnRcIlxuICAgICAgICAgICAgfX0+e2AvLyB0YWlsd2luZC5jb25maWcuanNgfTwvc3Bhbj57YFxubW9kdWxlYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2AuYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHByb3BlcnR5LWFjY2Vzc1wiXG4gICAgICAgICAgICB9fT57YGV4cG9ydHNgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICB9fT57YD1gfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YHtgfTwvc3Bhbj57YFxuICB2YXJpYW50c2B9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG9wZXJhdG9yXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19Pntge2B9PC9zcGFuPntgXG4gICAgYmFja2dyb3VuZENvbG9yYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gb3BlcmF0b3JcIlxuICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2BbYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHN0cmluZ1wiXG4gICAgICAgICAgICB9fT57YCdob3ZlcidgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gc3RyaW5nXCJcbiAgICAgICAgICAgIH19PntgJ2ZvY3VzJ2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YF1gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2BcbiAgICBib3JkZXJDb2xvcmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG9wZXJhdG9yXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgW2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBzdHJpbmdcIlxuICAgICAgICAgICAgfX0+e2AnZm9jdXMnYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHN0cmluZ1wiXG4gICAgICAgICAgICB9fT57YCdob3ZlcidgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2BdYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgXG4gIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B9YH08L3NwYW4+PC9jb2RlPjwvcHJlPjwvZGl2PlxuICAgICAgPGRpdiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcIm15LTYgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS04MDBcIlxuICAgICAgfX0+PHByZSBwYXJlbnROYW1lPVwiZGl2XCIgey4uLntcbiAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWNzc1wiXG4gICAgICAgIH19Pjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1jc3NcIlxuICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjb21tZW50XCJcbiAgICAgICAgICAgIH19PntgLyog0KHQs9C10L3QtdGA0LjRgNC+0LLQsNC90L3Ri9C5IENTUyAqL2B9PC9zcGFuPntgXG5cbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHNlbGVjdG9yXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGNsYXNzXCJcbiAgICAgICAgICAgICAgfX0+e2AuYmctYmxhY2tgfTwvc3Bhbj48L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJvcGVydHlcIlxuICAgICAgICAgICAgfX0+e2BiYWNrZ3JvdW5kLWNvbG9yYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGhleGNvZGUgY29sb3JcIlxuICAgICAgICAgICAgfX0+e2AjMDAwYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B9YH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHNlbGVjdG9yXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGNsYXNzXCJcbiAgICAgICAgICAgICAgfX0+e2AuYmctd2hpdGVgfTwvc3Bhbj48L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJvcGVydHlcIlxuICAgICAgICAgICAgfX0+e2BiYWNrZ3JvdW5kLWNvbG9yYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGhleGNvZGUgY29sb3JcIlxuICAgICAgICAgICAgfX0+e2AjZmZmYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B9YH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGNvbW1lbnRcIlxuICAgICAgICAgICAgfX0+e2AvKiAuLi4gKi9gfTwvc3Bhbj57YFxuXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBzZWxlY3RvclwiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjbGFzc1wiXG4gICAgICAgICAgICAgIH19PntgLmhvdmVyYH08L3NwYW4+e2BcXFxcYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlblwiXG4gICAgICAgICAgICAgIH19PntgOmJnLWJsYWNrYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHNldWRvLWNsYXNzXCJcbiAgICAgICAgICAgICAgfX0+e2A6aG92ZXJgfTwvc3Bhbj48L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJvcGVydHlcIlxuICAgICAgICAgICAgfX0+e2BiYWNrZ3JvdW5kLWNvbG9yYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGhleGNvZGUgY29sb3JcIlxuICAgICAgICAgICAgfX0+e2AjMDAwYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B9YH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHNlbGVjdG9yXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGNsYXNzXCJcbiAgICAgICAgICAgICAgfX0+e2AuaG92ZXJgfTwvc3Bhbj57YFxcXFxgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuXCJcbiAgICAgICAgICAgICAgfX0+e2A6Ymctd2hpdGVgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwc2V1ZG8tY2xhc3NcIlxuICAgICAgICAgICAgICB9fT57YDpob3ZlcmB9PC9zcGFuPjwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YHtgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwcm9wZXJ0eVwiXG4gICAgICAgICAgICB9fT57YGJhY2tncm91bmQtY29sb3JgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gaGV4Y29kZSBjb2xvclwiXG4gICAgICAgICAgICB9fT57YCNmZmZgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YH1gfTwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY29tbWVudFwiXG4gICAgICAgICAgICB9fT57YC8qIC4uLiAqL2B9PC9zcGFuPntgXG5cbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHNlbGVjdG9yXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGNsYXNzXCJcbiAgICAgICAgICAgICAgfX0+e2AuZm9jdXNgfTwvc3Bhbj57YFxcXFxgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuXCJcbiAgICAgICAgICAgICAgfX0+e2A6YmctYmxhY2tgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwc2V1ZG8tY2xhc3NcIlxuICAgICAgICAgICAgICB9fT57YDpmb2N1c2B9PC9zcGFuPjwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YHtgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwcm9wZXJ0eVwiXG4gICAgICAgICAgICB9fT57YGJhY2tncm91bmQtY29sb3JgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gaGV4Y29kZSBjb2xvclwiXG4gICAgICAgICAgICB9fT57YCMwMDBgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YH1gfTwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gc2VsZWN0b3JcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY2xhc3NcIlxuICAgICAgICAgICAgICB9fT57YC5mb2N1c2B9PC9zcGFuPntgXFxcXGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW5cIlxuICAgICAgICAgICAgICB9fT57YDpiZy13aGl0ZWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHBzZXVkby1jbGFzc1wiXG4gICAgICAgICAgICAgIH19PntgOmZvY3VzYH08L3NwYW4+PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19Pntge2B9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHByb3BlcnR5XCJcbiAgICAgICAgICAgIH19PntgYmFja2dyb3VuZC1jb2xvcmB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBoZXhjb2RlIGNvbG9yXCJcbiAgICAgICAgICAgIH19PntgI2ZmZmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjb21tZW50XCJcbiAgICAgICAgICAgIH19PntgLyogLi4uICovYH08L3NwYW4+e2BcblxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gc2VsZWN0b3JcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY2xhc3NcIlxuICAgICAgICAgICAgICB9fT57YC5ib3JkZXItYmxhY2tgfTwvc3Bhbj48L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJvcGVydHlcIlxuICAgICAgICAgICAgfX0+e2Bib3JkZXItY29sb3JgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gaGV4Y29kZSBjb2xvclwiXG4gICAgICAgICAgICB9fT57YCMwMDBgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YH1gfTwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gc2VsZWN0b3JcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY2xhc3NcIlxuICAgICAgICAgICAgICB9fT57YC5ib3JkZXItd2hpdGVgfTwvc3Bhbj48L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJvcGVydHlcIlxuICAgICAgICAgICAgfX0+e2Bib3JkZXItY29sb3JgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gaGV4Y29kZSBjb2xvclwiXG4gICAgICAgICAgICB9fT57YCNmZmZgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YH1gfTwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY29tbWVudFwiXG4gICAgICAgICAgICB9fT57YC8qIC4uLiAqL2B9PC9zcGFuPntgXG5cbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHNlbGVjdG9yXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGNsYXNzXCJcbiAgICAgICAgICAgICAgfX0+e2AuZm9jdXNgfTwvc3Bhbj57YFxcXFxgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuXCJcbiAgICAgICAgICAgICAgfX0+e2A6Ym9yZGVyLWJsYWNrYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHNldWRvLWNsYXNzXCJcbiAgICAgICAgICAgICAgfX0+e2A6Zm9jdXNgfTwvc3Bhbj48L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJvcGVydHlcIlxuICAgICAgICAgICAgfX0+e2Bib3JkZXItY29sb3JgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gaGV4Y29kZSBjb2xvclwiXG4gICAgICAgICAgICB9fT57YCMwMDBgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YH1gfTwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gc2VsZWN0b3JcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY2xhc3NcIlxuICAgICAgICAgICAgICB9fT57YC5mb2N1c2B9PC9zcGFuPntgXFxcXGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW5cIlxuICAgICAgICAgICAgICB9fT57YDpib3JkZXItd2hpdGVgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwc2V1ZG8tY2xhc3NcIlxuICAgICAgICAgICAgICB9fT57YDpmb2N1c2B9PC9zcGFuPjwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YHtgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwcm9wZXJ0eVwiXG4gICAgICAgICAgICB9fT57YGJvcmRlci1jb2xvcmB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBoZXhjb2RlIGNvbG9yXCJcbiAgICAgICAgICAgIH19PntgI2ZmZmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjb21tZW50XCJcbiAgICAgICAgICAgIH19PntgLyogLi4uICovYH08L3NwYW4+e2BcblxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gc2VsZWN0b3JcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY2xhc3NcIlxuICAgICAgICAgICAgICB9fT57YC5ob3ZlcmB9PC9zcGFuPntgXFxcXGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW5cIlxuICAgICAgICAgICAgICB9fT57YDpib3JkZXItYmxhY2tgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwc2V1ZG8tY2xhc3NcIlxuICAgICAgICAgICAgICB9fT57YDpob3ZlcmB9PC9zcGFuPjwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YHtgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwcm9wZXJ0eVwiXG4gICAgICAgICAgICB9fT57YGJvcmRlci1jb2xvcmB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBoZXhjb2RlIGNvbG9yXCJcbiAgICAgICAgICAgIH19PntgIzAwMGB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBzZWxlY3RvclwiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjbGFzc1wiXG4gICAgICAgICAgICAgIH19PntgLmhvdmVyYH08L3NwYW4+e2BcXFxcYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlblwiXG4gICAgICAgICAgICAgIH19PntgOmJvcmRlci13aGl0ZWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHBzZXVkby1jbGFzc1wiXG4gICAgICAgICAgICAgIH19PntgOmhvdmVyYH08L3NwYW4+PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19Pntge2B9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHByb3BlcnR5XCJcbiAgICAgICAgICAgIH19PntgYm9yZGVyLWNvbG9yYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGhleGNvZGUgY29sb3JcIlxuICAgICAgICAgICAgfX0+e2AjZmZmYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B9YH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGNvbW1lbnRcIlxuICAgICAgICAgICAgfX0+e2AvKiAuLi4gKi9gfTwvc3Bhbj48L2NvZGU+PC9wcmU+PC9kaXY+XG4gICAgICA8cD57YNCt0YLQviDQvtC30L3QsNGH0LDQtdGCLCDRh9GC0L4g0YEg0YPRh9C10YLQvtC8INGB0LvQtdC00YPRjtGJ0LXQs9C+IEhUTUw6YH08L3A+XG4gICAgICA8ZGl2IHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibXktNiByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTgwMFwiXG4gICAgICB9fT48cHJlIHBhcmVudE5hbWU9XCJkaXZcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtaHRtbFwiXG4gICAgICAgIH19Pjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1odG1sXCJcbiAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgPGB9PC9zcGFuPntgaW5wdXRgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0dHItbmFtZVwiXG4gICAgICAgICAgICAgIH19PntgY2xhc3NgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLXZhbHVlXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A9YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPntgZm9jdXM6Ymctd2hpdGUgaG92ZXI6YmctYmxhY2sgZm9jdXM6Ym9yZGVyLXdoaXRlIGhvdmVyOmJvcmRlci1ibGFja2B9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPjwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgPmB9PC9zcGFuPjwvc3Bhbj48L2NvZGU+PC9wcmU+PC9kaXY+XG4gICAgICA8cD57YC4uLtC10YHQu9C4INCx0Ysg0LLRhdC+0LQg0LHRi9C7INC30LDQstC40YEg0Lgg0L7QtNC90L7QstGA0LXQvNC10L3QvdC+INGB0YTQvtC60YPRgdC40YDQvtCy0LDQvSwg0YTQvtC9INCx0YvQuyDQsdGLINCx0LXQu9GL0LwsINCwINCz0YDQsNC90LjRhtCwINCx0YvQu9CwINCx0Ysg0YfQtdGA0L3QvtC5LmB9PC9wPlxuICAgICAgPHA+e2DQodC+0LfQtNCw0L3QuNC1INCy0LDRgNC40LDQvdGC0L7QsiDRgtCw0LrQuNC8INC+0LHRgNCw0LfQvtC8INC00LDQtdGCINCS0LDQvCDQvNCw0LrRgdC40LzQsNC70YzQvdGD0Y4g0LPQuNCx0LrQvtGB0YLRjCDQutCw0Log0LrQvtC90LXRh9C90L7QvNGDINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjiwg0L3QviDRjdGC0L4g0YLQsNC60LbQtSDQvtGB0YLRgNGL0Lkg0LjQvdGB0YLRgNGD0LzQtdC90YIg0Lgg0LzQvtC20LXRgiDQuNC80LXRgtGMINC90LXQv9GA0LXQtNCy0LjQtNC10L3QvdGL0LUg0L/QvtGB0LvQtdC00YHRgtCy0LjRjywg0LXRgdC70Lgg0JLRiyDQvdC1INCx0YPQtNC10YLQtSDQvtGB0YLQvtGA0L7QttC90YsuINCc0Ysg0YDQtdC60L7QvNC10L3QtNGD0LXQvCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCIjZW5hYmxpbmctZXh0cmEtdmFyaWFudHNcIlxuICAgICAgICB9fT57YNCy0LrQu9GO0YfQuNGC0Ywg0LTQvtC/0L7Qu9C90LjRgtC10LvRjNC90YvQtSDQstCw0YDQuNCw0L3RgtGLYH08L2E+e2Ag0LLQvNC10YHRgtC+INGC0L7Qs9C+LCDRh9GC0L7QsdGLINC/0LXRgNC10L7Qv9GA0LXQtNC10LvRj9GC0Ywg0LfQvdCw0YfQtdC90LjRjyDQv9C+INGD0LzQvtC70YfQsNC90LjRjiwg0LrQvtCz0LTQsCDRjdGC0L4g0LLQvtC30LzQvtC20L3Qviwg0Lgg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINGN0YLRgyDRhNGD0L3QutGG0LjRjiDRgtC+0LvRjNC60L4g0LrQsNC6INCw0LLQsNGA0LjQudC90YvQuSDQstGL0YXQvtC0LmB9PC9wPlxuICAgICAgPGhyPjwvaHI+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezJ9IGlkPVwib3NvYnllLXZhcmlhbnR5XCIgdG9jPXt0cnVlfT7QntGB0L7QsdGL0LUg0LLQsNGA0LjQsNC90YLRizwvX0hlYWRpbmc+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezN9IGlkPVwib3R6eXZjaGl2eWpcIiB0b2M9e3RydWV9PtCe0YLQt9GL0LLRh9C40LLRi9C5PC9fSGVhZGluZz5cbiAgICAgIDxwPntg0JLQsNGA0LjQsNC90YIgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcmVzcG9uc2l2ZWB9PC9pbmxpbmVDb2RlPntgIC0g0Y3RgtC+INC+0YHQvtCx0YvQuSDRgdC70YPRh9Cw0Lkg0LIgVGFpbHdpbmQsINC4INC90LAg0L3QtdCz0L4gYH08ZW0gcGFyZW50TmFtZT1cInBcIj57YNC90LVgfTwvZW0+e2Ag0LLQu9C40Y/QtdGCINC/0L7RgNGP0LTQvtC6LCDQutC+0YLQvtGA0YvQuSDQktGLINGD0LrQsNC30YvQstCw0LXRgtC1INCyINC60L7QvdGE0LjQs9GD0YDQsNGG0LjQuCDQstCw0YDQuNCw0L3RgtC+0LIuYH08L3A+XG4gICAgICA8cD57YNCt0YLQviDRgdCy0Y/Qt9Cw0L3QviDRgSDRgtC10LwsINGH0YLQviDQstCw0YDQuNCw0L3RgiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2ByZXNwb25zaXZlYH08L2lubGluZUNvZGU+e2Ag0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60LggYH08ZW0gcGFyZW50TmFtZT1cInBcIj57YNGB0LrQu9Cw0LTRi9Cy0LDQtdGC0YHRj2B9PC9lbT57YCDRgSDQtNGA0YPQs9C40LzQuCDQstCw0YDQuNCw0L3RgtCw0LzQuCwg0LAg0Y3RgtC+INC+0LfQvdCw0YfQsNC10YIsINGH0YLQviDQtdGB0LvQuCDQktGLINGD0LrQsNC20LXRgtC1INC00LvRjyDRg9GC0LjQu9C40YLRiyDQuCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2ByZXNwb25zaXZlYH08L2lubGluZUNvZGU+e2AsINC4IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGhvdmVyYH08L2lubGluZUNvZGU+e2Ag0LLQsNGA0LjQsNC90YLRiyAsIFRhaWx3aW5kINGC0LDQutC20LUg0YHQs9C10L3QtdGA0LjRgNGD0LXRgiBgfTxlbSBwYXJlbnROYW1lPVwicFwiPntgcmVzcG9uc2l2ZSBob3ZlcmB9PC9lbT57YCDQstCw0YDQuNCw0L3RgtGLOmB9PC9wPlxuICAgICAgPGRpdiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcIm15LTYgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS04MDBcIlxuICAgICAgfX0+PHByZSBwYXJlbnROYW1lPVwiZGl2XCIgey4uLntcbiAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgICAgfX0+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY29tbWVudFwiXG4gICAgICAgICAgICB9fT57YC8vIHRhaWx3aW5kLmNvbmZpZy5qc2B9PC9zcGFuPntgXG5tb2R1bGVgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YC5gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJvcGVydHktYWNjZXNzXCJcbiAgICAgICAgICAgIH19PntgZXhwb3J0c2B9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG9wZXJhdG9yXCJcbiAgICAgICAgICAgIH19PntgPWB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19Pntge2B9PC9zcGFuPntgXG4gIHZhcmlhbnRzYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gb3BlcmF0b3JcIlxuICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+e2BcbiAgICBiYWNrZ3JvdW5kQ29sb3JgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YFtgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gc3RyaW5nXCJcbiAgICAgICAgICAgIH19PntgJ3Jlc3BvbnNpdmUnYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHN0cmluZ1wiXG4gICAgICAgICAgICB9fT57YCdob3ZlcidgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2BdYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgXG4gICAgYm9yZGVyQ29sb3JgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YFtgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gc3RyaW5nXCJcbiAgICAgICAgICAgIH19PntgJ3Jlc3BvbnNpdmUnYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHN0cmluZ1wiXG4gICAgICAgICAgICB9fT57YCdmb2N1cydgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2BdYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgXG4gIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B9YH08L3NwYW4+PC9jb2RlPjwvcHJlPjwvZGl2PlxuICAgICAgPHA+e2DQkNC00LDQv9GC0LjQstC90YvQtSDQstCw0YDQuNCw0L3RgtGLINGB0LPRgNGD0L/Qv9C40YDQvtCy0LDQvdGLINCy0LzQtdGB0YLQtSDQuCDQstGB0YLQsNCy0LvQtdC90Ysg0LIg0LrQvtC90LXRhiDQktCw0YjQtdC5INGC0LDQsdC70LjRhtGLINGB0YLQuNC70LXQuSDQv9C+INGD0LzQvtC70YfQsNC90LjRjiwg0YfRgtC+0LHRiyDQuNC30LHQtdC20LDRgtGMINC/0YDQvtCx0LvQtdC8INGB0L4g0YHQv9C10YbQuNGE0LjRh9C90L7RgdGC0YzRjiwg0L3QtdC30LDQstC40YHQuNC80L4g0L7RgiDRgtC+0LPQviwg0LPQtNC1INCyINCS0LDRiNC10Lwg0YHQv9C40YHQutC1IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHZhcmlhbnRzYH08L2lubGluZUNvZGU+e2Ag0L/QvtGP0LLQu9GP0LXRgtGB0Y8gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcmVzcG9uc2l2ZWB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgICAgPHA+e2DQldGB0LvQuCDQktGLINC/0L4g0LrQsNC60L7QuS3Qu9C40LHQviDQv9GA0LjRh9C40L3QtSDRhdC+0YLQuNGC0LUg0L3QsNGB0YLRgNC+0LjRgtGMINGN0YLQviDQv9C+0LLQtdC00LXQvdC40LUsINCS0Ysg0LzQvtC20LXRgtC1INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQtNC40YDQtdC60YLQuNCy0YMgYH08X0xpbmsgaHJlZj1cIi9kb2NzL2Z1bmN0aW9ucy1hbmQtZGlyZWN0aXZlcyN0YWlsd2luZFwiIHBhc3NIcmVmPjxhPntgQHRhaWx3aW5kIHNjcmVlbnNgfTwvYT48L19MaW5rPntgLCDRh9GC0L7QsdGLINGD0LrQsNC30LDRgtGMLCDQs9C00LUg0LTQvtC70LbQvdGLINCx0YvRgtGMINCy0YHRgtCw0LLQu9C10L3RiyDQsNC00LDQv9GC0LjQstC90YvQtSDQstCw0YDQuNCw0L3RgtGLLmB9PC9wPlxuICAgICAgPF9IZWFkaW5nIGxldmVsPXszfSBpZD1cInRlbW55ai1zLXphc2hoaXRvai1vdC1kdml6aGVuaXlhLWktcy11bWVuc2hlbmllbS1kdml6aGVuaXlhXCIgdG9jPXt0cnVlfT7QotC10LzQvdGL0LksINGBINC30LDRidC40YLQvtC5INC+0YIg0LTQstC40LbQtdC90LjRjyDQuCDRgSDRg9C80LXQvdGM0YjQtdC90LjQtdC8INC00LLQuNC20LXQvdC40Y88L19IZWFkaW5nPlxuICAgICAgPHA+e2BUaGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZGFya2B9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Btb3Rpb24tc2FmZWB9PC9pbmxpbmVDb2RlPntgLCBhbmQgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgbW90aW9uLXJlZHVjZWB9PC9pbmxpbmVDb2RlPntgIHZhcmlhbnRzIGFsc28gc3RhY2sgd2l0aCBvdGhlciB2YXJpYW50cywgYnV0IHVubGlrZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2ByZXNwb25zaXZlYH08L2lubGluZUNvZGU+e2AsIHRoZXkgc3RhY2sgaW4gdGhlIHNhbWUgXCJzbG90XCIsIHNvIHlvdSBjYW4gY29tYmluZSB0aGVtIHdpdGggYm90aCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2ByZXNwb25zaXZlYH08L2lubGluZUNvZGU+e2AgYW5kIHNpbXBsZSBzdGF0ZSB2YXJpYW50cywgYnV0IG5vdCB3aXRoIGVhY2ggb3RoZXIuYH08L3A+XG4gICAgICA8cD57YFRoZSBvcmRlciBvZiB0aGVzZSB2YXJpYW50cyBtYXR0ZXIgcmVsYXRpdmUgdG8gZWFjaCBvdGhlciwgYnV0IG5vdCByZWxhdGl2ZSB0byBvdGhlciB2YXJpYW50cy4gVGhlcmUgaXMganVzdCBhYm91dCBubyBzaXR1YXRpb24gaW1hZ2luYWJsZSB3aGVyZSB0aGVzZSB3b3VsZCBjb25mbGljdCB3aXRoIGVhY2ggb3RoZXIgaW4gcHJhY3RpY2UsIHNvIHRoaXMgZW5kcyB1cCBiZWluZyBhIG5vbi1pc3N1ZSBhbnl3YXlzLmB9PC9wPlxuICAgICAgPHA+e2BZb3UgY2FuIGluY2x1ZGUgdGhlc2UgdmFyaWFudHMgaW4gYW55IG9yZGVyIGluIHlvdXIgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdmFyaWFudHNgfTwvaW5saW5lQ29kZT57YCBjb25maWd1cmF0aW9uIGFuZCBuZXZlciBub3RpY2UgdGhlIGRpZmZlcmVuY2UuYH08L3A+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezN9IGlkPVwiZGVmYXVsdFwiIHRvYz17dHJ1ZX0+RGVmYXVsdDwvX0hlYWRpbmc+XG4gICAgICA8cD57YFlvdSBjYW4gdXNlIHRoZSBzcGVjaWFsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YERFRkFVTFRgfTwvaW5saW5lQ29kZT57YCB2YXJpYW50IHRvIGNvbnRyb2wgd2hlcmUgdGhlIG5vcm1hbCwgbm9uLXByZWZpeGVkIHZlcnNpb24gb2YgYSB1dGlsaXR5IGlzIGdlbmVyYXRlZCByZWxhdGl2ZSB0byB0aGUgb3RoZXIgdmFyaWFudHMuYH08L3A+XG4gICAgICA8cD57YFRoaXMgaXMgYW4gYWR2YW5jZWQgZmVhdHVyZSBhbmQgb25seSByZWFsbHkgdXNlZnVsIGlmIHlvdSBoYXZlIGEgY3VzdG9tIHZhcmlhbnQgKGxpa2UgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgY2hpbGRyZW5gfTwvaW5saW5lQ29kZT57YCBpbiB0aGUgZXhhbXBsZSBiZWxvdykgdGhhdCBzaG91bGQgaGF2ZSBhIGxvd2VyIHByZWNlZGVuY2UgdGhhbiB0aGUgbm9ybWFsIHZlcnNpb24gb2YgYSB1dGlsaXR5LmB9PC9wPlxuICAgICAgPGRpdiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcIm15LTYgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS04MDBcIlxuICAgICAgfX0+PHByZSBwYXJlbnROYW1lPVwiZGl2XCIgey4uLntcbiAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgICAgfX0+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY29tbWVudFwiXG4gICAgICAgICAgICB9fT57YC8vIHRhaWx3aW5kLmNvbmZpZy5qc2B9PC9zcGFuPntgXG5tb2R1bGVgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YC5gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJvcGVydHktYWNjZXNzXCJcbiAgICAgICAgICAgIH19PntgZXhwb3J0c2B9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG9wZXJhdG9yXCJcbiAgICAgICAgICAgIH19PntgPWB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19Pntge2B9PC9zcGFuPntgXG4gIHZhcmlhbnRzYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gb3BlcmF0b3JcIlxuICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+e2BcbiAgICBiYWNrZ3JvdW5kQ29sb3JgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YFtgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gc3RyaW5nXCJcbiAgICAgICAgICAgIH19PntgJ2NoaWxkcmVuJ2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBzdHJpbmdcIlxuICAgICAgICAgICAgfX0+e2AnREVGQVVMVCdgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gc3RyaW5nXCJcbiAgICAgICAgICAgIH19PntgJ2hvdmVyJ2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBzdHJpbmdcIlxuICAgICAgICAgICAgfX0+e2AnZm9jdXMnYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgXWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YFxuICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YH1gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPjwvY29kZT48L3ByZT48L2Rpdj5cbiAgICAgIDxkaXYgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJteS02IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktODAwXCJcbiAgICAgIH19PjxwcmUgcGFyZW50TmFtZT1cImRpdlwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1jc3NcIlxuICAgICAgICB9fT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtY3NzXCJcbiAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY29tbWVudFwiXG4gICAgICAgICAgICB9fT57YC8qIEdlbmVyYXRlZCBDU1MgKi9gfTwvc3Bhbj57YFxuXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBzZWxlY3RvclwiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjbGFzc1wiXG4gICAgICAgICAgICAgIH19PntgLmNoaWxkcmVuYH08L3NwYW4+e2BcXFxcYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlblwiXG4gICAgICAgICAgICAgIH19PntgOmJnLWJsYWNrYH08L3NwYW4+e2AgPiAqYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJvcGVydHlcIlxuICAgICAgICAgICAgfX0+e2BiYWNrZ3JvdW5kLWNvbG9yYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGhleGNvZGUgY29sb3JcIlxuICAgICAgICAgICAgfX0+e2AjMDAwYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgO2B9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBzZWxlY3RvclwiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjbGFzc1wiXG4gICAgICAgICAgICAgIH19PntgLmNoaWxkcmVuYH08L3NwYW4+e2BcXFxcYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlblwiXG4gICAgICAgICAgICAgIH19PntgOmJnLXdoaXRlYH08L3NwYW4+e2AgPiAqYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJvcGVydHlcIlxuICAgICAgICAgICAgfX0+e2BiYWNrZ3JvdW5kLWNvbG9yYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGhleGNvZGUgY29sb3JcIlxuICAgICAgICAgICAgfX0+e2AjZmZmYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgO2B9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPntgXG5cbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHNlbGVjdG9yXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGNsYXNzXCJcbiAgICAgICAgICAgICAgfX0+e2AuYmctYmxhY2tgfTwvc3Bhbj48L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJvcGVydHlcIlxuICAgICAgICAgICAgfX0+e2BiYWNrZ3JvdW5kLWNvbG9yYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGhleGNvZGUgY29sb3JcIlxuICAgICAgICAgICAgfX0+e2AjMDAwYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B9YH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHNlbGVjdG9yXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGNsYXNzXCJcbiAgICAgICAgICAgICAgfX0+e2AuYmctd2hpdGVgfTwvc3Bhbj48L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJvcGVydHlcIlxuICAgICAgICAgICAgfX0+e2BiYWNrZ3JvdW5kLWNvbG9yYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGhleGNvZGUgY29sb3JcIlxuICAgICAgICAgICAgfX0+e2AjZmZmYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B9YH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGNvbW1lbnRcIlxuICAgICAgICAgICAgfX0+e2AvKiAuLi4gKi9gfTwvc3Bhbj57YFxuXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBzZWxlY3RvclwiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjbGFzc1wiXG4gICAgICAgICAgICAgIH19PntgLmhvdmVyYH08L3NwYW4+e2BcXFxcYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlblwiXG4gICAgICAgICAgICAgIH19PntgOmJnLWJsYWNrYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHNldWRvLWNsYXNzXCJcbiAgICAgICAgICAgICAgfX0+e2A6aG92ZXJgfTwvc3Bhbj48L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJvcGVydHlcIlxuICAgICAgICAgICAgfX0+e2BiYWNrZ3JvdW5kLWNvbG9yYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGhleGNvZGUgY29sb3JcIlxuICAgICAgICAgICAgfX0+e2AjMDAwYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B9YH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHNlbGVjdG9yXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGNsYXNzXCJcbiAgICAgICAgICAgICAgfX0+e2AuaG92ZXJgfTwvc3Bhbj57YFxcXFxgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuXCJcbiAgICAgICAgICAgICAgfX0+e2A6Ymctd2hpdGVgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwc2V1ZG8tY2xhc3NcIlxuICAgICAgICAgICAgICB9fT57YDpob3ZlcmB9PC9zcGFuPjwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YHtgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwcm9wZXJ0eVwiXG4gICAgICAgICAgICB9fT57YGJhY2tncm91bmQtY29sb3JgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gaGV4Y29kZSBjb2xvclwiXG4gICAgICAgICAgICB9fT57YCNmZmZgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YH1gfTwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY29tbWVudFwiXG4gICAgICAgICAgICB9fT57YC8qIC4uLiAqL2B9PC9zcGFuPntgXG5cbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHNlbGVjdG9yXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGNsYXNzXCJcbiAgICAgICAgICAgICAgfX0+e2AuZm9jdXNgfTwvc3Bhbj57YFxcXFxgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuXCJcbiAgICAgICAgICAgICAgfX0+e2A6YmctYmxhY2tgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwc2V1ZG8tY2xhc3NcIlxuICAgICAgICAgICAgICB9fT57YDpmb2N1c2B9PC9zcGFuPjwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YHtgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwcm9wZXJ0eVwiXG4gICAgICAgICAgICB9fT57YGJhY2tncm91bmQtY29sb3JgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gaGV4Y29kZSBjb2xvclwiXG4gICAgICAgICAgICB9fT57YCMwMDBgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YH1gfTwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gc2VsZWN0b3JcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY2xhc3NcIlxuICAgICAgICAgICAgICB9fT57YC5mb2N1c2B9PC9zcGFuPntgXFxcXGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW5cIlxuICAgICAgICAgICAgICB9fT57YDpiZy13aGl0ZWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHBzZXVkby1jbGFzc1wiXG4gICAgICAgICAgICAgIH19PntgOmZvY3VzYH08L3NwYW4+PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19Pntge2B9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHByb3BlcnR5XCJcbiAgICAgICAgICAgIH19PntgYmFja2dyb3VuZC1jb2xvcmB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBoZXhjb2RlIGNvbG9yXCJcbiAgICAgICAgICAgIH19PntgI2ZmZmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjb21tZW50XCJcbiAgICAgICAgICAgIH19PntgLyogLi4uICovYH08L3NwYW4+PC9jb2RlPjwvcHJlPjwvZGl2PlxuICAgICAgPHA+e2BMZWFybiBtb3JlIGFib3V0IGNyZWF0aW5nIGN1c3RvbSB2YXJpYW50cyBpbiB0aGUgYH08X0xpbmsgaHJlZj1cIi9kb2NzL3BsdWdpbnMjYWRkaW5nLXZhcmlhbnRzXCIgcGFzc0hyZWY+PGE+e2B2YXJpYW50IHBsdWdpbiBkb2N1bWVudGF0aW9uYH08L2E+PC9fTGluaz57YC5gfTwvcD5cbiAgICAgIDxocj48L2hyPlxuICAgICAgPF9IZWFkaW5nIGxldmVsPXsyfSBpZD1cInVzaW5nLWN1c3RvbS12YXJpYW50c1wiIHRvYz17dHJ1ZX0+VXNpbmcgY3VzdG9tIHZhcmlhbnRzPC9fSGVhZGluZz5cbiAgICAgIDxwPntgSWYgeW91J3ZlIHdyaXR0ZW4gb3IgaW5zdGFsbGVkIGEgYH08X0xpbmsgaHJlZj1cIi9kb2NzL3BsdWdpbnNcIiBwYXNzSHJlZj48YT57YHBsdWdpbmB9PC9hPjwvX0xpbms+e2AgdGhhdCBhZGRzIGEgbmV3IHZhcmlhbnQsIHlvdSBjYW4gZW5hYmxlIHRoYXQgdmFyaWFudCBieSBpbmNsdWRpbmcgaXQgaW4geW91ciB2YXJpYW50cyBjb25maWd1cmF0aW9uIGp1c3QgbGlrZSBpZiBpdCB3ZXJlIGEgYnVpbHQtaW4gdmFyaWFudC5gfTwvcD5cbiAgICAgIDxwPntgRm9yIGV4YW1wbGUsIHRoZSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vYmVuZmFjZS90YWlsd2luZGNzcy1pbnRlcmFjdGlvbi12YXJpYW50c1wiXG4gICAgICAgIH19PntgdGFpbHdpbmRjc3MtaW50ZXJhY3Rpb24tdmFyaWFudHMgcGx1Z2luYH08L2E+e2AgYWRkcyBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGdyb3VwLWRpc2FibGVkYH08L2lubGluZUNvZGU+e2AgdmFyaWFudCAoYW1vbmcgb3RoZXJzKTpgfTwvcD5cbiAgICAgIDxkaXYgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJteS02IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktODAwXCJcbiAgICAgIH19PjxwcmUgcGFyZW50TmFtZT1cImRpdlwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICAgIH19Pjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGNvbW1lbnRcIlxuICAgICAgICAgICAgfX0+e2AvLyB0YWlsd2luZC5jb25maWcuanNgfTwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+e2BcbiAgdmFyaWFudHNgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YHtgfTwvc3Bhbj57YFxuICAgIGJhY2tncm91bmRDb2xvcmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG9wZXJhdG9yXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgW2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBzdHJpbmdcIlxuICAgICAgICAgICAgfX0+e2AncmVzcG9uc2l2ZSdgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gc3RyaW5nXCJcbiAgICAgICAgICAgIH19PntgJ2hvdmVyJ2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBzdHJpbmdcIlxuICAgICAgICAgICAgfX0+e2AnZm9jdXMnYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHN0cmluZ1wiXG4gICAgICAgICAgICB9fT57YCdncm91cC1kaXNhYmxlZCdgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2BdYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgXG4gIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YFxuICBwbHVnaW5zYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gb3BlcmF0b3JcIlxuICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2BbYH08L3NwYW4+e2BcbiAgICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBmdW5jdGlvblwiXG4gICAgICAgICAgICB9fT57YHJlcXVpcmVgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2AoYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHN0cmluZ1wiXG4gICAgICAgICAgICB9fT57YCd0YWlsd2luZGNzcy1pbnRlcmFjdGlvbi12YXJpYW50cydgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2ApYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgKGB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YClgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2BcbiAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2BdYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YH1gfTwvc3Bhbj48L2NvZGU+PC9wcmU+PC9kaXY+XG4gICAgICA8cD57YExlYXJuIG1vcmUgYWJvdXQgY3JlYXRpbmcgY3VzdG9tIHZhcmlhbnRzIGluIHRoZSBgfTxfTGluayBocmVmPVwiL2RvY3MvcGx1Z2lucyNhZGRpbmctdmFyaWFudHNcIiBwYXNzSHJlZj48YT57YHZhcmlhbnQgcGx1Z2luIGRvY3VtZW50YXRpb25gfTwvYT48L19MaW5rPntgLmB9PC9wPlxuICAgICAgPF9IZWFkaW5nIGxldmVsPXszfSBpZD1cIm9yZGVyaW5nLWN1c3RvbS12YXJpYW50c1wiIHRvYz17dHJ1ZX0+T3JkZXJpbmcgY3VzdG9tIHZhcmlhbnRzPC9fSGVhZGluZz5cbiAgICAgIDxwPntgSWYgeW91J2QgbGlrZSB0byBzcGVjaWZ5IGEgZGVmYXVsdCBzb3J0IHBvc2l0aW9uIGZvciBhIGN1c3RvbSB2YXJpYW50LCBvdmVycmlkZSB5b3VyIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHZhcmlhbnRPcmRlcmB9PC9pbmxpbmVDb2RlPntgIHRvIGluY2x1ZGUgdGhlIGN1c3RvbSB2YXJpYW50OmB9PC9wPlxuICAgICAgPGRpdiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcIm15LTYgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS04MDBcIlxuICAgICAgfX0+PHByZSBwYXJlbnROYW1lPVwiZGl2XCIgey4uLntcbiAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgICAgfX0+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY29tbWVudFwiXG4gICAgICAgICAgICB9fT57YC8vIHRhaWx3aW5kLmNvbmZpZy5qc2B9PC9zcGFuPntgXG5tb2R1bGVgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YC5gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJvcGVydHktYWNjZXNzXCJcbiAgICAgICAgICAgIH19PntgZXhwb3J0c2B9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG9wZXJhdG9yXCJcbiAgICAgICAgICAgIH19PntgPWB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19Pntge2B9PC9zcGFuPntgXG4gIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGNvbW1lbnRcIlxuICAgICAgICAgICAgfX0+e2AvLyAuLi5gfTwvc3Bhbj57YFxuICB2YXJpYW50T3JkZXJgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YFtgfTwvc3Bhbj57YFxuICAgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHN0cmluZ1wiXG4gICAgICAgICAgICB9fT57YCdmaXJzdCdgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2BcbiAgICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBzdHJpbmdcIlxuICAgICAgICAgICAgfX0+e2AnbGFzdCdgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2BcbiAgICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBzdHJpbmdcIlxuICAgICAgICAgICAgfX0+e2Anb2RkJ2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YFxuICAgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHN0cmluZ1wiXG4gICAgICAgICAgICB9fT57YCdldmVuJ2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YFxuICAgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHN0cmluZ1wiXG4gICAgICAgICAgICB9fT57YCd2aXNpdGVkJ2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YFxuICAgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHN0cmluZ1wiXG4gICAgICAgICAgICB9fT57YCdjaGVja2VkJ2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YFxuICAgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHN0cmluZ1wiXG4gICAgICAgICAgICB9fT57YCdncm91cC1ob3ZlcidgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2BcbiAgICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBzdHJpbmdcIlxuICAgICAgICAgICAgfX0+e2AnZ3JvdXAtZm9jdXMnYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgXG4gICAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gc3RyaW5nXCJcbiAgICAgICAgICAgIH19PntgJ2ZvY3VzLXdpdGhpbidgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2BcbiAgICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBzdHJpbmdcIlxuICAgICAgICAgICAgfX0+e2AnaG92ZXInYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgXG4gICAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gc3RyaW5nXCJcbiAgICAgICAgICAgIH19PntgJ2ZvY3VzJ2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YFxuICAgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHN0cmluZ1wiXG4gICAgICAgICAgICB9fT57YCdmb2N1cy12aXNpYmxlJ2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YFxuICAgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHN0cmluZ1wiXG4gICAgICAgICAgICB9fT57YCdhY3RpdmUnYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgXG4gICAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gc3RyaW5nXCJcbiAgICAgICAgICAgIH19PntgJ2dyb3VwLWRpc2FibGVkJ2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjb21tZW50XCJcbiAgICAgICAgICAgIH19PntgLy8gQ3VzdG9tIHZhcmlhbnRgfTwvc3Bhbj57YFxuICAgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHN0cmluZ1wiXG4gICAgICAgICAgICB9fT57YCdkaXNhYmxlZCdgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2BcbiAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2BdYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgXG4gIHZhcmlhbnRzYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gb3BlcmF0b3JcIlxuICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+e2BcbiAgICBleHRlbmRgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YHtgfTwvc3Bhbj57YFxuICAgICAgYmFja2dyb3VuZENvbG9yYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gb3BlcmF0b3JcIlxuICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2BbYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHN0cmluZ1wiXG4gICAgICAgICAgICB9fT57YCdncm91cC1kaXNhYmxlZCdgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2BdYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgXG4gICAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B9YH08L3NwYW4+e2BcbiAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B9YH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPjwvY29kZT48L3ByZT48L2Rpdj5cbiAgICAgIDxwPntgWW91J2xsIG5lZWQgdG8gc3BlY2lmeSB0aGUgZW50aXJlIGxpc3Qgd2hlbiBvdmVycmlkaW5nIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B2YXJpYW50T3JkZXJgfTwvaW5saW5lQ29kZT57YCB0byBpbmNsdWRlIGFueSBjdXN0b20gdmFyaWFudHMuYH08L3A+XG4gICAgICA8aHI+PC9ocj5cbiAgICAgIDxfSGVhZGluZyBsZXZlbD17Mn0gaWQ9XCJkZWZhdWx0LXZhcmlhbnRzLXJlZmVyZW5jZVwiIHRvYz17dHJ1ZX0+RGVmYXVsdCB2YXJpYW50cyByZWZlcmVuY2U8L19IZWFkaW5nPlxuICAgICAgPHA+e2BIZXJlIGlzIGEgY29tcGxldGUgcmVmZXJlbmNlIG9mIFRhaWx3aW5kJ3MgZGVmYXVsdCB2YXJpYW50cyBjb25maWd1cmF0aW9uLCB3aGljaCBjYW4gYmUgdXNlZnVsIHdoZW4geW91J2QgbGlrZSB0byBhZGQgYSBuZXcgdmFyaWFudCB3aGlsZSBwcmVzZXJ2aW5nIHRoZSBkZWZhdWx0cy5gfTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8RGVmYXVsdFZhcmlhbnRzQ29uZmlnIG1keFR5cGU9XCJEZWZhdWx0VmFyaWFudHNDb25maWdcIiAvPlxuXG5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlO1xuTURYQ29udGVudC5sYXlvdXRQcm9wcyA9IGxheW91dFByb3BzXG4iXSwic291cmNlUm9vdCI6IiJ9