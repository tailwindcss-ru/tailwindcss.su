webpackHotUpdate_N_E("pages/docs/box-sizing",{

/***/ "./src/components/Variants.js":
/*!************************************!*\
  !*** ./src/components/Variants.js ***!
  \************************************/
/*! exports provided: Variants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Variants", function() { return Variants; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_defaultConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/defaultConfig */ "./src/utils/defaultConfig.js");
/* harmony import */ var _utils_defaultConfig__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_defaultConfig__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_joinWithAnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/joinWithAnd */ "./src/utils/joinWithAnd.js");
/* harmony import */ var _components_ConfigSample__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ConfigSample */ "./src/components/ConfigSample.js");

var _jsxFileName = "C:\\OSPanel\\projects\\tailwindcss.su\\src\\components\\Variants.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Variants(_ref) {
  var plugin = _ref.plugin,
      name = _ref.name;
  var variants = _utils_defaultConfig__WEBPACK_IMPORTED_MODULE_2__["defaultConfig"].variants[plugin] || ['responsive'];
  name = name || plugin.replace(/([a-z])([A-Z])/g, function (m, p1, p2) {
    return "".concat(p1, " ").concat(p2.toLowerCase());
  });
  var extraVariants = ['responsive', 'hover', 'focus', 'active', 'group-hover'].filter(function (x) {
    return !variants.includes(x);
  }).slice(0, 2);
  var opening = "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E, ".concat(variants.length ? "only ".concat(Object(_utils_joinWithAnd__WEBPACK_IMPORTED_MODULE_3__["joinWithAnd"])(variants).replace('dark', 'dark mode <em>(if enabled)</em>')) : 'no', " variants are generated for ").concat(name, " utilities.");
  return __jsx("div", {
    className: "prose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("p", {
    dangerouslySetInnerHTML: {
      __html: opening
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C, \u043A\u0430\u043A\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u0441\u043E\u0437\u0434\u0430\u044E\u0442\u0441\u044F \u0434\u043B\u044F \u0443\u0442\u0438\u043B\u0438\u0442 ", name, " \u0434\u043B\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430", ' ', __jsx("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, plugin), " \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 ", __jsx("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 41
    }
  }, "variants"), " \u0412\u0430\u0448\u0435\u0433\u043E \u0444\u0430\u0439\u043B\u0430 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438", ' ', __jsx("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "tailwind.config.js"), "."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u044D\u0442\u0430 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F ", variants.length > 0 ? 'также ' : '', "generate", ' ', Object(_utils_joinWithAnd__WEBPACK_IMPORTED_MODULE_3__["joinWithAnd"])(extraVariants), " variants:"), __jsx(_components_ConfigSample__WEBPACK_IMPORTED_MODULE_4__["ConfigSample"], {
    path: "variants.extend",
    before: "...",
    add: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, plugin, extraVariants),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }));
}
_c = Variants;

var _c;

$RefreshReg$(_c, "Variants");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmFyaWFudHMuanMiXSwibmFtZXMiOlsiVmFyaWFudHMiLCJwbHVnaW4iLCJuYW1lIiwidmFyaWFudHMiLCJkZWZhdWx0Q29uZmlnIiwicmVwbGFjZSIsIm0iLCJwMSIsInAyIiwidG9Mb3dlckNhc2UiLCJleHRyYVZhcmlhbnRzIiwiZmlsdGVyIiwieCIsImluY2x1ZGVzIiwic2xpY2UiLCJvcGVuaW5nIiwibGVuZ3RoIiwiam9pbldpdGhBbmQiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sU0FBU0EsUUFBVCxPQUFvQztBQUFBLE1BQWhCQyxNQUFnQixRQUFoQkEsTUFBZ0I7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDekMsTUFBTUMsUUFBUSxHQUFHQyxrRUFBYSxDQUFDRCxRQUFkLENBQXVCRixNQUF2QixLQUFrQyxDQUFDLFlBQUQsQ0FBbkQ7QUFDQUMsTUFBSSxHQUFHQSxJQUFJLElBQUlELE1BQU0sQ0FBQ0ksT0FBUCxDQUFlLGlCQUFmLEVBQWtDLFVBQUNDLENBQUQsRUFBSUMsRUFBSixFQUFRQyxFQUFSO0FBQUEscUJBQWtCRCxFQUFsQixjQUF3QkMsRUFBRSxDQUFDQyxXQUFILEVBQXhCO0FBQUEsR0FBbEMsQ0FBZjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxDQUFDLFlBQUQsRUFBZSxPQUFmLEVBQXdCLE9BQXhCLEVBQWlDLFFBQWpDLEVBQTJDLGFBQTNDLEVBQ25CQyxNQURtQixDQUNaLFVBQUNDLENBQUQ7QUFBQSxXQUFPLENBQUNULFFBQVEsQ0FBQ1UsUUFBVCxDQUFrQkQsQ0FBbEIsQ0FBUjtBQUFBLEdBRFksRUFFbkJFLEtBRm1CLENBRWIsQ0FGYSxFQUVWLENBRlUsQ0FBdEI7QUFJQSxNQUFNQyxPQUFPLGtGQUNYWixRQUFRLENBQUNhLE1BQVQsa0JBQ1lDLHNFQUFXLENBQUNkLFFBQUQsQ0FBWCxDQUFzQkUsT0FBdEIsQ0FBOEIsTUFBOUIsRUFBc0MsaUNBQXRDLENBRFosSUFFSSxJQUhPLHlDQUlrQkgsSUFKbEIsZ0JBQWI7QUFNQSxTQUNFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsMkJBQXVCLEVBQUU7QUFBRWdCLFlBQU0sRUFBRUg7QUFBVixLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdWQUMrRGIsSUFEL0QsaUlBQzRGLEdBRDVGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPRCxNQUFQLENBRkYseURBRWtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRmxDLG1KQUVrRixHQUZsRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSEYsTUFGRixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUpBQzRCRSxRQUFRLENBQUNhLE1BQVQsR0FBa0IsQ0FBbEIsR0FBc0IsUUFBdEIsR0FBaUMsRUFEN0QsY0FDeUUsR0FEekUsRUFFR0Msc0VBQVcsQ0FBQ1AsYUFBRCxDQUZkLGVBUEYsRUFXRSxNQUFDLHFFQUFEO0FBQWMsUUFBSSxFQUFDLGlCQUFuQjtBQUFxQyxVQUFNLEVBQUMsS0FBNUM7QUFBa0QsT0FBRyxnR0FBS1QsTUFBTCxFQUFjUyxhQUFkLENBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixDQURGO0FBZUQ7S0E1QmVWLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9ib3gtc2l6aW5nLjI5NzE3NTM1YmMxOWRlNWYzNjExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZhdWx0Q29uZmlnIH0gZnJvbSAnQC91dGlscy9kZWZhdWx0Q29uZmlnJ1xyXG5pbXBvcnQgeyBqb2luV2l0aEFuZCB9IGZyb20gJ0AvdXRpbHMvam9pbldpdGhBbmQnXHJcbmltcG9ydCB7IENvbmZpZ1NhbXBsZSB9IGZyb20gJ0AvY29tcG9uZW50cy9Db25maWdTYW1wbGUnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFyaWFudHMoeyBwbHVnaW4sIG5hbWUgfSkge1xyXG4gIGNvbnN0IHZhcmlhbnRzID0gZGVmYXVsdENvbmZpZy52YXJpYW50c1twbHVnaW5dIHx8IFsncmVzcG9uc2l2ZSddXHJcbiAgbmFtZSA9IG5hbWUgfHwgcGx1Z2luLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csIChtLCBwMSwgcDIpID0+IGAke3AxfSAke3AyLnRvTG93ZXJDYXNlKCl9YClcclxuICBjb25zdCBleHRyYVZhcmlhbnRzID0gWydyZXNwb25zaXZlJywgJ2hvdmVyJywgJ2ZvY3VzJywgJ2FjdGl2ZScsICdncm91cC1ob3ZlciddXHJcbiAgICAuZmlsdGVyKCh4KSA9PiAhdmFyaWFudHMuaW5jbHVkZXMoeCkpXHJcbiAgICAuc2xpY2UoMCwgMilcclxuXHJcbiAgY29uc3Qgb3BlbmluZyA9IGDQn9C+INGD0LzQvtC70YfQsNC90LjRjiwgJHtcclxuICAgIHZhcmlhbnRzLmxlbmd0aFxyXG4gICAgICA/IGBvbmx5ICR7am9pbldpdGhBbmQodmFyaWFudHMpLnJlcGxhY2UoJ2RhcmsnLCAnZGFyayBtb2RlIDxlbT4oaWYgZW5hYmxlZCk8L2VtPicpfWBcclxuICAgICAgOiAnbm8nXHJcbiAgfSB2YXJpYW50cyBhcmUgZ2VuZXJhdGVkIGZvciAke25hbWV9IHV0aWxpdGllcy5gXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3NlXCI+XHJcbiAgICAgIDxwIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogb3BlbmluZyB9fSAvPlxyXG4gICAgICA8cD5cclxuICAgICAg0JLRiyDQvNC+0LbQtdGC0LUg0LrQvtC90YLRgNC+0LvQuNGA0L7QstCw0YLRjCwg0LrQsNC60LjQtSDQstCw0YDQuNCw0L3RgtGLINGB0L7Qt9C00LDRjtGC0YHRjyDQtNC70Y8g0YPRgtC40LvQuNGCIHtuYW1lfSDQtNC70Y8g0LjQt9C80LXQvdC10L3QuNGPINGB0LLQvtC50YHRgtCy0LB7JyAnfVxyXG4gICAgICAgIDxjb2RlPntwbHVnaW59PC9jb2RlPiDQsiDRgNCw0LfQtNC10LvQtSA8Y29kZT52YXJpYW50czwvY29kZT4g0JLQsNGI0LXQs9C+INGE0LDQudC70LAg0LrQvtC90YTQuNCz0YPRgNCw0YbQuNC4eycgJ31cclxuICAgICAgICA8Y29kZT50YWlsd2luZC5jb25maWcuanM8L2NvZGU+LlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwPlxyXG4gICAgICDQndCw0L/RgNC40LzQtdGALCDRjdGC0LAg0LrQvtC90YTQuNCz0YPRgNCw0YbQuNGPIHt2YXJpYW50cy5sZW5ndGggPiAwID8gJ9GC0LDQutC20LUgJyA6ICcnfWdlbmVyYXRleycgJ31cclxuICAgICAgICB7am9pbldpdGhBbmQoZXh0cmFWYXJpYW50cyl9IHZhcmlhbnRzOlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxDb25maWdTYW1wbGUgcGF0aD1cInZhcmlhbnRzLmV4dGVuZFwiIGJlZm9yZT1cIi4uLlwiIGFkZD17eyBbcGx1Z2luXTogZXh0cmFWYXJpYW50cyB9fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=