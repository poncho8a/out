webpackHotUpdate_N_E("pages/index",{

/***/ "./src/assets/key-feature/Yo.jpg":
false,

/***/ "./src/assets/key-feature/Yo.png":
/*!***************************************!*\
  !*** ./src/assets/key-feature/Yo.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Yo-db6b5af7bd84866412c61a48618ae648.png";

/***/ }),

/***/ "./src/sections/key-feature.js":
/*!*************************************!*\
  !*** ./src/sections/key-feature.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_feature_card_column_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/feature-card-column.js */ "./src/components/feature-card-column.js");
/* harmony import */ var assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/key-feature/performance.svg */ "./src/assets/key-feature/performance.svg");
/* harmony import */ var assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/key-feature/partnership.svg */ "./src/assets/key-feature/partnership.svg");
/* harmony import */ var assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/key-feature/subscription.svg */ "./src/assets/key-feature/subscription.svg");
/* harmony import */ var assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/key-feature/support.svg */ "./src/assets/key-feature/support.svg");
/* harmony import */ var assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_key_feature_Yo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/key-feature/Yo.png */ "./src/assets/key-feature/Yo.png");
/* harmony import */ var assets_key_feature_Yo_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_Yo_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_key_feature_Cold_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/key-feature/Cold.jpeg */ "./src/assets/key-feature/Cold.jpeg");
/* harmony import */ var assets_key_feature_Cold_jpeg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_Cold_jpeg__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\Poncho\\Desktop\\nextjs_landing_page\\src\\sections\\key-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */










var data = [{
  id: 1,
  imgSrc: assets_key_feature_Cold_jpeg__WEBPACK_IMPORTED_MODULE_9___default.a,
  altText: 'Alan',
  title: 'Alan PuerCold',
  text: 'Zombie, genio, mago, filántropo. Experto en construcciones de fortnite, es un diseñador gráfico 3D con gustos furros y rap mexa.'
}, {
  id: 2,
  imgSrc: assets_key_feature_Yo_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  altText: 'Poncho',
  title: 'Alfonso Ochoa',
  text: 'Elegancia hecha Ingeniero. Mecatrónico indestructible amigo de Goku, listo para patear traseros en warzone.'
}];
function KeyFeature() {
  var _this = this;

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: 'section.keyFeature'
    },
    id: "home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 6
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "\xBFQui\xE9nes somos?",
    title: "Who we are?",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 8
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 8
    }
  }, data.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_feature_card_column_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item.id,
      src: item.imgSrc,
      alt: item.altText,
      title: item.title,
      text: item.text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 12
      }
    });
  }))));
}
_c = KeyFeature;
var styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: ['35px 0', null, '40px 40px', '50px 60px', '30px', '50px 40px', '55px 90px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, {//'repeat(4,1fr)',
      //aqui es donde se quitaron las columnas extra
    }]
  }
};

var _c;

$RefreshReg$(_c, "KeyFeature");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Fzc2V0cy9rZXktZmVhdHVyZS9Zby5wbmciLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZWN0aW9ucy9rZXktZmVhdHVyZS5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiaWQiLCJpbWdTcmMiLCJDb2xkIiwiYWx0VGV4dCIsInRpdGxlIiwidGV4dCIsInlvTWVybyIsIktleUZlYXR1cmUiLCJ2YXJpYW50Iiwic3R5bGVzIiwiZ3JpZCIsIm1hcCIsIml0ZW0iLCJ3aWR0aCIsIm14IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLGdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUcsQ0FDWDtBQUNFQyxJQUFFLEVBQUUsQ0FETjtBQUVFQyxRQUFNLEVBQUVDLG1FQUZWO0FBR0VDLFNBQU8sRUFBRSxNQUhYO0FBSUVDLE9BQUssRUFBRSxlQUpUO0FBS0VDLE1BQUksRUFDRjtBQU5KLENBRFcsRUFTWDtBQUNFTCxJQUFFLEVBQUUsQ0FETjtBQUVFQyxRQUFNLEVBQUVLLGdFQUZWO0FBR0VILFNBQU8sRUFBRSxRQUhYO0FBSUVDLE9BQUssRUFBRSxlQUpUO0FBS0VDLE1BQUksRUFDRjtBQU5KLENBVFcsQ0FBYjtBQW9CZSxTQUFTRSxVQUFULEdBQXNCO0FBQUE7O0FBQ25DLFNBQ0M7QUFBUyxNQUFFLEVBQUU7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBYjtBQUErQyxNQUFFLEVBQUMsTUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxrRUFBRDtBQUNDLFVBQU0sRUFBQyx1QkFEUjtBQUVDLFNBQUssRUFBQyxhQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtFLHFEQUFDLDZDQUFEO0FBQU0sTUFBRSxFQUFFQyxNQUFNLENBQUNDLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1gsSUFBSSxDQUFDWSxHQUFMLENBQVMsVUFBQ0MsSUFBRDtBQUFBLFdBQ1IscURBQUMseUVBQUQ7QUFDQSxTQUFHLEVBQUVBLElBQUksQ0FBQ1osRUFEVjtBQUVBLFNBQUcsRUFBRVksSUFBSSxDQUFDWCxNQUZWO0FBR0EsU0FBRyxFQUFFVyxJQUFJLENBQUNULE9BSFY7QUFJQSxXQUFLLEVBQUVTLElBQUksQ0FBQ1IsS0FKWjtBQUtBLFVBQUksRUFBRVEsSUFBSSxDQUFDUCxJQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEUTtBQUFBLEdBQVQsQ0FESCxDQUxGLENBREYsQ0FERDtBQXNCRDtLQXZCdUJFLFU7QUF5QnhCLElBQU1FLE1BQU0sR0FBRztBQUNiQyxNQUFJLEVBQUU7QUFDSkcsU0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsTUFBaEIsQ0FESDtBQUVKQyxNQUFFLEVBQUUsTUFGQTtBQUdKQyxXQUFPLEVBQUUsQ0FDUCxRQURPLEVBRVAsSUFGTyxFQUdQLFdBSE8sRUFJUCxXQUpPLEVBS1AsTUFMTyxFQU1QLFdBTk8sRUFPUCxXQVBPLENBSEw7QUFZSkMsdUJBQW1CLEVBQUUsQ0FDbkIsZUFEbUIsRUFFbkIsSUFGbUIsRUFHbkIsZUFIbUIsRUFJbkIsSUFKbUIsRUFLbkIsQ0FBQztBQUNDO0FBREYsS0FMbUI7QUFaakI7QUFETyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ2MDU1M2NhY2ZmOTA5MDQyOTVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvWW8tZGI2YjVhZjdiZDg0ODY2NDEyYzYxYTQ4NjE4YWU2NDgucG5nXCI7IiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcbmltcG9ydCBGZWF0dXJlQ2FyZENvbHVtbiBmcm9tICdjb21wb25lbnRzL2ZlYXR1cmUtY2FyZC1jb2x1bW4uanMnO1xuaW1wb3J0IFBlcmZvcm1hbmNlIGZyb20gJ2Fzc2V0cy9rZXktZmVhdHVyZS9wZXJmb3JtYW5jZS5zdmcnO1xuaW1wb3J0IFBhcnRuZXJzaGlwIGZyb20gJ2Fzc2V0cy9rZXktZmVhdHVyZS9wYXJ0bmVyc2hpcC5zdmcnO1xuaW1wb3J0IFN1YnNjcmlwdGlvbiBmcm9tICdhc3NldHMva2V5LWZlYXR1cmUvc3Vic2NyaXB0aW9uLnN2Zyc7XG5pbXBvcnQgU3VwcG9ydCBmcm9tICdhc3NldHMva2V5LWZlYXR1cmUvc3VwcG9ydC5zdmcnO1xuaW1wb3J0IHlvTWVybyBmcm9tICdhc3NldHMva2V5LWZlYXR1cmUvWW8ucG5nJztcbmltcG9ydCBDb2xkIGZyb20gJ2Fzc2V0cy9rZXktZmVhdHVyZS9Db2xkLmpwZWcnO1xuXG5jb25zdCBkYXRhID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgaW1nU3JjOiBDb2xkLFxuICAgIGFsdFRleHQ6ICdBbGFuJyxcbiAgICB0aXRsZTogJ0FsYW4gUHVlckNvbGQnLFxuICAgIHRleHQ6XG4gICAgICAnWm9tYmllLCBnZW5pbywgbWFnbywgZmlsw6FudHJvcG8uIEV4cGVydG8gZW4gY29uc3RydWNjaW9uZXMgZGUgZm9ydG5pdGUsIGVzIHVuIGRpc2XDsWFkb3IgZ3LDoWZpY28gM0QgY29uIGd1c3RvcyBmdXJyb3MgeSByYXAgbWV4YS4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgaW1nU3JjOiB5b01lcm8sXG4gICAgYWx0VGV4dDogJ1BvbmNobycsXG4gICAgdGl0bGU6ICdBbGZvbnNvIE9jaG9hJyxcbiAgICB0ZXh0OlxuICAgICAgJ0VsZWdhbmNpYSBoZWNoYSBJbmdlbmllcm8uIE1lY2F0csOzbmljbyBpbmRlc3RydWN0aWJsZSBhbWlnbyBkZSBHb2t1LCBsaXN0byBwYXJhIHBhdGVhciB0cmFzZXJvcyBlbiB3YXJ6b25lLicsXG4gIH0sXG5cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEtleUZlYXR1cmUoKSB7XG4gIHJldHVybiAoXG4gICA8c2VjdGlvbiBzeD17eyB2YXJpYW50OiAnc2VjdGlvbi5rZXlGZWF0dXJlJ319IGlkPVwiaG9tZVwiPlxuICAgICA8Q29udGFpbmVyPlxuICAgICAgIDxTZWN0aW9uSGVhZGVyIFxuICAgICAgICBzbG9nYW49XCLCv1F1acOpbmVzIHNvbW9zP1wiXG4gICAgICAgIHRpdGxlPVwiV2hvIHdlIGFyZT9cIlxuICAgICAgIC8+XG4gICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICA8RmVhdHVyZUNhcmRDb2x1bW5cbiAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICBzcmM9e2l0ZW0uaW1nU3JjfVxuICAgICAgICAgICBhbHQ9e2l0ZW0uYWx0VGV4dH1cbiAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgIHRleHQ9e2l0ZW0udGV4dH0gXG4gICAgICAgICAgIC8+XG4gICAgICAgICApKX1cblxuICAgICAgIDwvR3JpZD5cbiAgICAgPC9Db250YWluZXI+XG4gICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZ3JpZDoge1xuICAgIHdpZHRoOiBbJzEwMCUnLCAnODAlJywgJzEwMCUnXSxcbiAgICBteDogJ2F1dG8nLFxuICAgIGdyaWRHYXA6IFtcbiAgICAgICczNXB4IDAnLFxuICAgICAgbnVsbCxcbiAgICAgICc0MHB4IDQwcHgnLFxuICAgICAgJzUwcHggNjBweCcsXG4gICAgICAnMzBweCcsXG4gICAgICAnNTBweCA0MHB4JyxcbiAgICAgICc1NXB4IDkwcHgnLFxuICAgIF0sXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xuICAgICAgJ3JlcGVhdCgxLDFmciknLFxuICAgICAgbnVsbCxcbiAgICAgICdyZXBlYXQoMiwxZnIpJyxcbiAgICAgIG51bGwsXG4gICAgICB7Ly8ncmVwZWF0KDQsMWZyKScsXG4gICAgICAgIC8vYXF1aSBlcyBkb25kZSBzZSBxdWl0YXJvbiBsYXMgY29sdW1uYXMgZXh0cmFcbiAgICAgIH1cbiAgICBdLFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=