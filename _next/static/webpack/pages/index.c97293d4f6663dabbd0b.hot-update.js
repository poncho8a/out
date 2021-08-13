webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/testimonial.js":
/*!*************************************!*\
  !*** ./src/sections/testimonial.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TestimonialCard; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/rating */ "./src/components/rating.js");
/* harmony import */ var components_button_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/button-group */ "./src/components/button-group.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/testimonial/avatar1.png */ "./src/assets/testimonial/avatar1.png");
/* harmony import */ var assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/testimonial/avatar2.png */ "./src/assets/testimonial/avatar2.png");
/* harmony import */ var assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/testimonial/avatar3.png */ "./src/assets/testimonial/avatar3.png");
/* harmony import */ var assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/testimonial/avatar4.png */ "./src/assets/testimonial/avatar4.png");
/* harmony import */ var assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_scroll_modules_mixins_animate_scroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-scroll/modules/mixins/animate-scroll */ "./node_modules/react-scroll/modules/mixins/animate-scroll.js");
/* harmony import */ var react_scroll_modules_mixins_animate_scroll__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_scroll_modules_mixins_animate_scroll__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "C:\\Users\\Poncho\\Desktop\\nextjs_landing_page\\src\\sections\\testimonial.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */










var data = [{
  id: 1,
  title: 'Modern look & trending design',
  description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  avatar: assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  name: 'Denny Hilguston',
  designation: '@denny.hil',
  review: 4
}, {
  id: 2,
  title: 'Design Quality & performance',
  description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  avatar: assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  name: 'Denny Hilguston',
  designation: '@denny.hil',
  review: 5
}, {
  id: 3,
  title: 'Layout and organized layers',
  description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  avatar: assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  name: 'Denny Hilguston',
  designation: '@denny.hil',
  review: 5
}, {
  id: 4,
  title: 'Modern look & trending design',
  description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  avatar: assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_10___default.a,
  name: 'Denny Hilguston',
  designation: '@denny.hil',
  review: 4
}];
var responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1619
    },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.

  },
  laptop: {
    breakpoint: {
      max: 1619,
      min: 1024
    },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.

  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 640
    },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.

  },
  mobile: {
    breakpoint: {
      max: 639,
      min: 0
    },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.

  }
};
var carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_button_group__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }),
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1
};
function TestimonialCard() {
  var _this = this;

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("section", {
    sx: {
      variant: 'section.testimonial'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 4
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    css: {
      textAlign: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 6
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    slogan: "Testimonios",
    title: "Conozcan la satisfacci\xF3n de nuestros clientes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 8
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.carouselWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 6
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, carouselParams, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 8
    }
  }), data.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.reviewCard,
      key: item.sliderClass,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 12
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_rating__WEBPACK_IMPORTED_MODULE_4__["default"], {
      rating: item.review,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 14
      }
    }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
      as: "h3",
      sx: styles.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 14
      }
    }, item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      sx: styles.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 14
      }
    }, item.description), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      className: "card-footer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 14
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      className: "image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 16
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: item.avatar,
      alt: "Client Image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 18
      }
    })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      className: "reviewer-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 16
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
      as: "h4",
      sx: styles.heading,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 18
      }
    }, item.name), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      sx: styles.designation,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 18
      }
    }, item.designation))));
  }))));
}
_c = TestimonialCard;
var styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: ['100%', null, null, '750px', '1000px', '1180px', null, 'calc(50% + 865px)'],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s'
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1
        }
      }
    }
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: ['30px 20px 35px', '30px 25px 35px', '30px 20px 35px', '35px 30px 40px 40px', '30px 30px 35px', '35px 30px 40px 40px'],
    bg: 'white',
    textAlign: 'left',
    m: ['28px 5px 30px 5px', '28px 20px 30px 20px', '28px 15px 30px 15px', '28px 15px 30px 15px', '30px 20px 40px'],
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)'
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex'
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0
        }
      },
      '.star': {
        color: 'primary',
        mr: '1px'
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px'
      }
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover'
        }
      }
    }
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2]
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3
  },
  designation: {
    color: 'primary',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4
  }
};

var _c;

$RefreshReg$(_c, "TestimonialCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3Rlc3RpbW9uaWFsLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhdmF0YXIiLCJBdmF0YXIxIiwibmFtZSIsImRlc2lnbmF0aW9uIiwicmV2aWV3IiwiQXZhdGFyMiIsIkF2YXRhcjMiLCJBdmF0YXI0IiwicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJzbGlkZXNUb1NsaWRlIiwibGFwdG9wIiwidGFibGV0IiwibW9iaWxlIiwiY2Fyb3VzZWxQYXJhbXMiLCJhZGRpdGlvbmFsVHJhbnNmcm9tIiwiYXJyb3dzIiwiYXV0b1BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjbGFzc05hbWUiLCJjb250YWluZXJDbGFzcyIsImN1c3RvbUJ1dHRvbkdyb3VwIiwiZG90TGlzdENsYXNzIiwiZHJhZ2dhYmxlIiwiZm9jdXNPblNlbGVjdCIsImluZmluaXRlIiwiaXRlbUNsYXNzIiwia2V5Qm9hcmRDb250cm9sIiwibWluaW11bVRvdWNoRHJhZyIsInJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZSIsInJlbmRlckRvdHNPdXRzaWRlIiwic2hvd0RvdHMiLCJzbGlkZXJDbGFzcyIsIlRlc3RpbW9uaWFsQ2FyZCIsInZhcmlhbnQiLCJ0ZXh0QWxpZ24iLCJzdHlsZXMiLCJjYXJvdXNlbFdyYXBwZXIiLCJtYXAiLCJpdGVtIiwicmV2aWV3Q2FyZCIsImhlYWRpbmciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm10IiwicHgiLCJ3aWR0aCIsIm1heFdpZHRoIiwibXIiLCJtbCIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwicCIsImJnIiwibSIsIm1iIiwidWwiLCJwbCIsImxpc3RTdHlsZSIsInN2ZyIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJtYXJnaW5Ub3AiLCJmbGV4U2hyaW5rIiwiaW1nIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNYO0FBQ0VDLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSwrQkFGVDtBQUdFQyxhQUFXLEVBQ1QseUpBSko7QUFLRUMsUUFBTSxFQUFFQyxxRUFMVjtBQU1FQyxNQUFJLEVBQUUsaUJBTlI7QUFPRUMsYUFBVyxFQUFFLFlBUGY7QUFRRUMsUUFBTSxFQUFFO0FBUlYsQ0FEVyxFQVdYO0FBQ0VQLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSw4QkFGVDtBQUdFQyxhQUFXLEVBQ1QseUpBSko7QUFLRUMsUUFBTSxFQUFFSyxxRUFMVjtBQU1FSCxNQUFJLEVBQUUsaUJBTlI7QUFPRUMsYUFBVyxFQUFFLFlBUGY7QUFRRUMsUUFBTSxFQUFFO0FBUlYsQ0FYVyxFQXFCWDtBQUNFUCxJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLEVBQUUsNkJBRlQ7QUFHRUMsYUFBVyxFQUNULHlKQUpKO0FBS0VDLFFBQU0sRUFBRU0scUVBTFY7QUFNRUosTUFBSSxFQUFFLGlCQU5SO0FBT0VDLGFBQVcsRUFBRSxZQVBmO0FBUUVDLFFBQU0sRUFBRTtBQVJWLENBckJXLEVBK0JYO0FBQ0VQLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSwrQkFGVDtBQUdFQyxhQUFXLEVBQ1QseUpBSko7QUFLRUMsUUFBTSxFQUFFTyxzRUFMVjtBQU1FTCxNQUFJLEVBQUUsaUJBTlI7QUFPRUMsYUFBVyxFQUFFLFlBUGY7QUFRRUMsUUFBTSxFQUFFO0FBUlYsQ0EvQlcsQ0FBYjtBQTJDQSxJQUFNSSxVQUFVLEdBQUc7QUFDakJDLFNBQU8sRUFBRTtBQUNQQyxjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsU0FBRyxFQUFFO0FBQWxCLEtBREw7QUFFUEMsU0FBSyxFQUFFLENBRkE7QUFHUEMsaUJBQWEsRUFBRSxDQUhSLENBR1c7O0FBSFgsR0FEUTtBQU1qQkMsUUFBTSxFQUFFO0FBQ05MLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsSUFBUDtBQUFhQyxTQUFHLEVBQUU7QUFBbEIsS0FETjtBQUVOQyxTQUFLLEVBQUUsQ0FGRDtBQUdOQyxpQkFBYSxFQUFFLENBSFQsQ0FHWTs7QUFIWixHQU5TO0FBV2pCRSxRQUFNLEVBQUU7QUFDTk4sY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxJQUFQO0FBQWFDLFNBQUcsRUFBRTtBQUFsQixLQUROO0FBRU5DLFNBQUssRUFBRSxDQUZEO0FBR05DLGlCQUFhLEVBQUUsQ0FIVCxDQUdZOztBQUhaLEdBWFM7QUFnQmpCRyxRQUFNLEVBQUU7QUFDTlAsY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxHQUFQO0FBQVlDLFNBQUcsRUFBRTtBQUFqQixLQUROO0FBRU5DLFNBQUssRUFBRSxDQUZEO0FBR05DLGlCQUFhLEVBQUUsQ0FIVCxDQUdZOztBQUhaO0FBaEJTLENBQW5CO0FBdUJBLElBQU1JLGNBQWMsR0FBRztBQUNyQkMscUJBQW1CLEVBQUMsQ0FEQztBQUVyQkMsUUFBTSxFQUFDLEtBRmM7QUFHckJDLGVBQWEsRUFBQyxJQUhPO0FBSXJCQyxZQUFVLEVBQUMsS0FKVTtBQUtyQkMsV0FBUyxFQUFDLEVBTFc7QUFNckJDLGdCQUFjLEVBQUMsb0JBTk07QUFPckJDLG1CQUFpQixFQUFDLHFEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRztBQVFyQkMsY0FBWSxFQUFDLEVBUlE7QUFTckJDLFdBQVMsRUFBRSxJQVRVO0FBVXJCQyxlQUFhLEVBQUMsS0FWTztBQVdyQkMsVUFBUSxFQUFDLElBWFk7QUFZckJDLFdBQVMsRUFBQyxFQVpXO0FBYXJCQyxpQkFBZSxFQUFFLElBYkk7QUFjckJDLGtCQUFnQixFQUFDLEVBZEk7QUFlckJDLDBCQUF3QixFQUFFLElBZkw7QUFnQnJCQyxtQkFBaUIsRUFBQyxLQWhCRztBQWlCckIxQixZQUFVLEVBQUNBLFVBakJVO0FBa0JyQjJCLFVBQVEsRUFBQyxLQWxCWTtBQW1CckJDLGFBQVcsRUFBQyxFQW5CUztBQW9CckJ0QixlQUFhLEVBQUM7QUFwQk8sQ0FBdkI7QUF1QmUsU0FBU3VCLGVBQVQsR0FBMkI7QUFBQTs7QUFDeEMsU0FDQztBQUFTLE1BQUUsRUFBRTtBQUFDQyxhQUFPLEVBQUU7QUFBVixLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxrREFBRDtBQUFXLE9BQUcsRUFBRTtBQUFDQyxlQUFTLEVBQUU7QUFBWixLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsaUVBQUQ7QUFDQSxVQUFNLEVBQUMsYUFEUDtBQUVBLFNBQUssRUFBQyxrREFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQU9FLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFQyxNQUFNLENBQUNDLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQywyREFBRCx5RkFBZ0J2QixjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0d0QixJQUFJLENBQUM4QyxHQUFMLENBQVMsVUFBQ0MsSUFBRDtBQUFBLFdBQ1IscURBQUMsNENBQUQ7QUFBSyxRQUFFLEVBQUVILE1BQU0sQ0FBQ0ksVUFBaEI7QUFBNEIsU0FBRyxFQUFFRCxJQUFJLENBQUNQLFdBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxxREFBQyx5REFBRDtBQUFRLFlBQU0sRUFBRU8sSUFBSSxDQUFDdkMsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUUscURBQUMsZ0RBQUQ7QUFBUyxRQUFFLEVBQUMsSUFBWjtBQUFpQixRQUFFLEVBQUVvQyxNQUFNLENBQUMxQyxLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0c2QyxJQUFJLENBQUM3QyxLQURSLENBRkYsRUFLRSxxREFBQyw2Q0FBRDtBQUFNLFFBQUUsRUFBRTBDLE1BQU0sQ0FBQ3pDLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBK0I0QyxJQUFJLENBQUM1QyxXQUFwQyxDQUxGLEVBTUU7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UscURBQUMsOENBQUQ7QUFBTyxTQUFHLEVBQUU0QyxJQUFJLENBQUMzQyxNQUFqQjtBQUF5QixTQUFHLEVBQUMsY0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREYsRUFJRTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxxREFBQyxnREFBRDtBQUFTLFFBQUUsRUFBQyxJQUFaO0FBQWlCLFFBQUUsRUFBRXdDLE1BQU0sQ0FBQ0ssT0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRixJQUFJLENBQUN6QyxJQURSLENBREYsRUFJRSxxREFBQyw2Q0FBRDtBQUFNLFFBQUUsRUFBRXNDLE1BQU0sQ0FBQ3JDLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBK0J3QyxJQUFJLENBQUN4QyxXQUFwQyxDQUpGLENBSkYsQ0FORixDQURRO0FBQUEsR0FBVCxDQURILENBREYsQ0FQRixDQUREO0FBa0NEO0tBbkN1QmtDLGU7QUFxQ3hCLElBQU1HLE1BQU0sR0FBRztBQUNiQyxpQkFBZSxFQUFFO0FBQ2ZLLFdBQU8sRUFBRSxNQURNO0FBRWZDLGtCQUFjLEVBQUUsVUFGRDtBQUdmQyxpQkFBYSxFQUFFLFFBSEE7QUFJZkMsY0FBVSxFQUFFLFVBSkc7QUFLZkMsTUFBRSxFQUFFLE9BTFc7QUFNZkMsTUFBRSxFQUFFLE1BTlc7QUFPZiwyQkFBdUI7QUFDckJDLFdBQUssRUFBRSxNQURjO0FBRXJCQyxjQUFRLEVBQUUsQ0FDUixNQURRLEVBRVIsSUFGUSxFQUdSLElBSFEsRUFJUixPQUpRLEVBS1IsUUFMUSxFQU1SLFFBTlEsRUFPUixJQVBRLEVBUVIsbUJBUlEsQ0FGVztBQVlyQkMsUUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCLElBQTNCLEVBQWlDLElBQWpDLEVBQXVDLElBQXZDLEVBQTZDLFFBQTdDLENBWmlCO0FBYXJCQyxRQUFFLEVBQUUsTUFiaUI7QUFjckIsb0NBQThCO0FBQzVCQyxrQkFBVSxFQUFFO0FBRGdCLE9BZFQ7QUFpQnJCLDREQUFzRDtBQUNwREMsZUFBTyxFQUFFLEtBRDJDO0FBRXBELGlEQUF5QztBQUN2Q0EsaUJBQU8sRUFBRTtBQUQ4QjtBQUZXO0FBakJqQztBQVBSLEdBREo7QUFpQ2JiLFlBQVUsRUFBRTtBQUNWYyxhQUFTLEVBQUUscUNBREQ7QUFFVkYsY0FBVSxFQUFFLFVBRkY7QUFHVkcsZ0JBQVksRUFBRSxLQUhKO0FBSVZDLEtBQUMsRUFBRSxDQUNELGdCQURDLEVBRUQsZ0JBRkMsRUFHRCxnQkFIQyxFQUlELHFCQUpDLEVBS0QsZ0JBTEMsRUFNRCxxQkFOQyxDQUpPO0FBWVZDLE1BQUUsRUFBRSxPQVpNO0FBYVZ0QixhQUFTLEVBQUUsTUFiRDtBQWNWdUIsS0FBQyxFQUFFLENBQ0QsbUJBREMsRUFFRCxxQkFGQyxFQUdELHFCQUhDLEVBSUQscUJBSkMsRUFLRCxnQkFMQyxDQWRPO0FBcUJWLGVBQVc7QUFDVEosZUFBUyxFQUFFO0FBREYsS0FyQkQ7QUF3QlYsZUFBVztBQUNUSyxRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsQ0FBaEIsQ0FESztBQUVUQyxRQUFFLEVBQUU7QUFDRkMsVUFBRSxFQUFFLENBREY7QUFFRkMsaUJBQVMsRUFBRSxNQUZUO0FBR0ZILFVBQUUsRUFBRSxDQUhGO0FBSUZqQixlQUFPLEVBQUU7QUFKUCxPQUZLO0FBUVRxQixTQUFHLEVBQUU7QUFDSEMsbUJBQVcsRUFBRSxLQURWO0FBRUgsMEJBQWtCO0FBQ2hCQSxxQkFBVyxFQUFFO0FBREc7QUFGZixPQVJJO0FBY1QsZUFBUztBQUNQQyxhQUFLLEVBQUUsU0FEQTtBQUVQZixVQUFFLEVBQUU7QUFGRyxPQWRBO0FBa0JULGlCQUFXO0FBQ1RlLGFBQUssRUFBRSxNQURFO0FBRVRmLFVBQUUsRUFBRTtBQUZLO0FBbEJGLEtBeEJEO0FBK0NWLG9CQUFnQjtBQUNkUixhQUFPLEVBQUUsTUFESztBQUVkRyxnQkFBVSxFQUFFLFFBRkU7QUFHZHFCLGVBQVMsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixNQUFoQixDQUhHO0FBSWQsZ0JBQVU7QUFDUkMsa0JBQVUsRUFBRSxDQURKO0FBRVJqQixVQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsQ0FBaEIsQ0FGSTtBQUdSUixlQUFPLEVBQUUsTUFIRDtBQUlSMEIsV0FBRyxFQUFFO0FBQ0hwQixlQUFLLEVBQUUsTUFESjtBQUVIcUIsZ0JBQU0sRUFBRSxNQUZMO0FBR0hkLHNCQUFZLEVBQUUsS0FIWDtBQUlIZSxtQkFBUyxFQUFFO0FBSlI7QUFKRztBQUpJO0FBL0NOLEdBakNDO0FBaUdiNUUsT0FBSyxFQUFFO0FBQ0w2RSxZQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQURMO0FBRUxDLGNBQVUsRUFBRSxHQUZQO0FBR0xiLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixNQUFoQixDQUhDO0FBSUxNLFNBQUssRUFBRSxNQUpGO0FBS0xRLGNBQVUsRUFBRTtBQUxQLEdBakdNO0FBd0diOUUsYUFBVyxFQUFFO0FBQ1g0RSxZQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsQ0FBaEIsQ0FEQztBQUVYQyxjQUFVLEVBQUUsUUFGRDtBQUdYUCxTQUFLLEVBQUUsTUFISTtBQUlYUSxjQUFVLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLENBQWI7QUFKRCxHQXhHQTtBQThHYmhDLFNBQU8sRUFBRTtBQUNQOEIsWUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLENBQWhCLENBREg7QUFFUEMsY0FBVSxFQUFFLEdBRkw7QUFHUGIsTUFBRSxFQUFFLEtBSEc7QUFJUE0sU0FBSyxFQUFFLE1BSkE7QUFLUFEsY0FBVSxFQUFFO0FBTEwsR0E5R0k7QUFxSGIxRSxhQUFXLEVBQUU7QUFDWGtFLFNBQUssRUFBRSxTQURJO0FBRVhPLGNBQVUsRUFBRSxLQUZEO0FBR1hELFlBQVEsRUFBRSxDQUhDO0FBSVhFLGNBQVUsRUFBRTtBQUpEO0FBckhBLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzk3MjkzZDRmNjY2M2RhYmJkMGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEhlYWRpbmcsIFRleHQsIEJveCwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcbmltcG9ydCBSYXRpbmcgZnJvbSAnY29tcG9uZW50cy9yYXRpbmcnO1xuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ2NvbXBvbmVudHMvYnV0dG9uLWdyb3VwJztcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1tdWx0aS1jYXJvdXNlbCc7XG5cbmltcG9ydCBBdmF0YXIxIGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIxLnBuZyc7XG5pbXBvcnQgQXZhdGFyMiBmcm9tICdhc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMi5wbmcnO1xuaW1wb3J0IEF2YXRhcjMgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjMucG5nJztcbmltcG9ydCBBdmF0YXI0IGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXI0LnBuZyc7XG5pbXBvcnQgeyBnZXRBbmltYXRpb25UeXBlIH0gZnJvbSAncmVhY3Qtc2Nyb2xsL21vZHVsZXMvbWl4aW5zL2FuaW1hdGUtc2Nyb2xsJztcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiAnTW9kZXJuIGxvb2sgJiB0cmVuZGluZyBkZXNpZ24nLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0dldCB3b3JraW5nIGV4cGVyaWVuY2UgdG8gd29yayB3aXRoIHRoaXMgYW1hemluZyB0ZWFtICYgaW4gZnV0dXJlIHdhbnQgdG8gd29yayB0b2dldGhlciBmb3IgYnJpZ2h0IGZ1dHVyZSBwcm9qZWN0cyBhbmQgYWxzbyBtYWtlIGRlcG9zaXQgdG8gZnJlZWxhbmNlci4nLFxuICAgIGF2YXRhcjogQXZhdGFyMSxcbiAgICBuYW1lOiAnRGVubnkgSGlsZ3VzdG9uJyxcbiAgICBkZXNpZ25hdGlvbjogJ0BkZW5ueS5oaWwnLFxuICAgIHJldmlldzogNCxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRpdGxlOiAnRGVzaWduIFF1YWxpdHkgJiBwZXJmb3JtYW5jZScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnR2V0IHdvcmtpbmcgZXhwZXJpZW5jZSB0byB3b3JrIHdpdGggdGhpcyBhbWF6aW5nIHRlYW0gJiBpbiBmdXR1cmUgd2FudCB0byB3b3JrIHRvZ2V0aGVyIGZvciBicmlnaHQgZnV0dXJlIHByb2plY3RzIGFuZCBhbHNvIG1ha2UgZGVwb3NpdCB0byBmcmVlbGFuY2VyLicsXG4gICAgYXZhdGFyOiBBdmF0YXIyLFxuICAgIG5hbWU6ICdEZW5ueSBIaWxndXN0b24nLFxuICAgIGRlc2lnbmF0aW9uOiAnQGRlbm55LmhpbCcsXG4gICAgcmV2aWV3OiA1LFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgdGl0bGU6ICdMYXlvdXQgYW5kIG9yZ2FuaXplZCBsYXllcnMnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0dldCB3b3JraW5nIGV4cGVyaWVuY2UgdG8gd29yayB3aXRoIHRoaXMgYW1hemluZyB0ZWFtICYgaW4gZnV0dXJlIHdhbnQgdG8gd29yayB0b2dldGhlciBmb3IgYnJpZ2h0IGZ1dHVyZSBwcm9qZWN0cyBhbmQgYWxzbyBtYWtlIGRlcG9zaXQgdG8gZnJlZWxhbmNlci4nLFxuICAgIGF2YXRhcjogQXZhdGFyMyxcbiAgICBuYW1lOiAnRGVubnkgSGlsZ3VzdG9uJyxcbiAgICBkZXNpZ25hdGlvbjogJ0BkZW5ueS5oaWwnLFxuICAgIHJldmlldzogNSxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIHRpdGxlOiAnTW9kZXJuIGxvb2sgJiB0cmVuZGluZyBkZXNpZ24nLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0dldCB3b3JraW5nIGV4cGVyaWVuY2UgdG8gd29yayB3aXRoIHRoaXMgYW1hemluZyB0ZWFtICYgaW4gZnV0dXJlIHdhbnQgdG8gd29yayB0b2dldGhlciBmb3IgYnJpZ2h0IGZ1dHVyZSBwcm9qZWN0cyBhbmQgYWxzbyBtYWtlIGRlcG9zaXQgdG8gZnJlZWxhbmNlci4nLFxuICAgIGF2YXRhcjogQXZhdGFyNCxcbiAgICBuYW1lOiAnRGVubnkgSGlsZ3VzdG9uJyxcbiAgICBkZXNpZ25hdGlvbjogJ0BkZW5ueS5oaWwnLFxuICAgIHJldmlldzogNCxcbiAgfSxcbl07XG5cbmNvbnN0IHJlc3BvbnNpdmUgPSB7XG4gIGRlc2t0b3A6IHtcbiAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxNjE5IH0sXG4gICAgaXRlbXM6IDQsXG4gICAgc2xpZGVzVG9TbGlkZTogNCwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cbiAgfSxcbiAgbGFwdG9wOiB7XG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDE2MTksIG1pbjogMTAyNCB9LFxuICAgIGl0ZW1zOiAzLFxuICAgIHNsaWRlc1RvU2xpZGU6IDMsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gIH0sXG4gIHRhYmxldDoge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDY0MCB9LFxuICAgIGl0ZW1zOiAyLFxuICAgIHNsaWRlc1RvU2xpZGU6IDIsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gIH0sXG4gIG1vYmlsZToge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA2MzksIG1pbjogMCB9LFxuICAgIGl0ZW1zOiAxLFxuICAgIHNsaWRlc1RvU2xpZGU6IDEsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gIH0sXG59O1xuXG5jb25zdCBjYXJvdXNlbFBhcmFtcyA9IHtcbiAgYWRkaXRpb25hbFRyYW5zZnJvbTowLFxuICBhcnJvd3M6ZmFsc2UsXG4gIGF1dG9QbGF5U3BlZWQ6MzAwMCxcbiAgY2VudGVyTW9kZTpmYWxzZSxcbiAgY2xhc3NOYW1lOlwiXCIsXG4gIGNvbnRhaW5lckNsYXNzOlwiY2Fyb3VzZWwtY29udGFpbmVyXCIsXG4gIGN1c3RvbUJ1dHRvbkdyb3VwOjxCdXR0b25Hcm91cCAvPixcbiAgZG90TGlzdENsYXNzOlwiXCIsXG4gIGRyYWdnYWJsZTogdHJ1ZSxcbiAgZm9jdXNPblNlbGVjdDpmYWxzZSxcbiAgaW5maW5pdGU6dHJ1ZSxcbiAgaXRlbUNsYXNzOlwiXCIsXG4gIGtleUJvYXJkQ29udHJvbDogdHJ1ZSxcbiAgbWluaW11bVRvdWNoRHJhZzo4MCxcbiAgcmVuZGVyQnV0dG9uR3JvdXBPdXRzaWRlOiB0cnVlLFxuICByZW5kZXJEb3RzT3V0c2lkZTpmYWxzZSxcbiAgcmVzcG9uc2l2ZTpyZXNwb25zaXZlLFxuICBzaG93RG90czpmYWxzZSxcbiAgc2xpZGVyQ2xhc3M6XCJcIixcbiAgc2xpZGVzVG9TbGlkZToxLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0aW1vbmlhbENhcmQoKSB7XG4gIHJldHVybiAoXG4gICA8c2VjdGlvbiBzeD17e3ZhcmlhbnQ6ICdzZWN0aW9uLnRlc3RpbW9uaWFsJ319PlxuICAgICA8Q29udGFpbmVyIGNzcz17e3RleHRBbGlnbjogJ2NlbnRlcid9fT5cbiAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgIHNsb2dhbj1cIlRlc3RpbW9uaW9zXCJcbiAgICAgICB0aXRsZT1cIkNvbm96Y2FuIGxhIHNhdGlzZmFjY2nDs24gZGUgbnVlc3Ryb3MgY2xpZW50ZXNcIiBcbiAgICAgICAvPlxuICAgICA8L0NvbnRhaW5lcj5cbiAgICAgPEJveCBzeD17c3R5bGVzLmNhcm91c2VsV3JhcHBlcn0+XG4gICAgICAgPENhcm91c2VsIHsgLi4uIGNhcm91c2VsUGFyYW1zfT5cbiAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMucmV2aWV3Q2FyZH0ga2V5PXtpdGVtLnNsaWRlckNsYXNzfT5cbiAgICAgICAgICAgICA8UmF0aW5nIHJhdGluZz17aXRlbS5yZXZpZXd9IC8+XG4gICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiIHN4PXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMuZGVzY3JpcHRpb259PntpdGVtLmRlc2NyaXB0aW9ufTwvVGV4dD5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XG4gICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0uYXZhdGFyfSBhbHQ9XCJDbGllbnQgSW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlld2VyLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoNFwiIHN4PXtzdHlsZXMuaGVhZGluZ30+XG4gICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLmRlc2lnbmF0aW9ufT57aXRlbS5kZXNpZ25hdGlvbn08L1RleHQ+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICApKX1cbiAgICAgICA8L0Nhcm91c2VsPlxuICAgICA8L0JveD5cbiAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBjYXJvdXNlbFdyYXBwZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJyxcbiAgICBtdDogJy0zMHB4JyxcbiAgICBweDogJzE1cHgnLFxuICAgICcuY2Fyb3VzZWwtY29udGFpbmVyJzoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG1heFdpZHRoOiBbXG4gICAgICAgICcxMDAlJyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgJzc1MHB4JyxcbiAgICAgICAgJzEwMDBweCcsXG4gICAgICAgICcxMTgwcHgnLFxuICAgICAgICBudWxsLFxuICAgICAgICAnY2FsYyg1MCUgKyA4NjVweCknLFxuICAgICAgXSxcbiAgICAgIG1yOiBbJ2F1dG8nLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnLTIyMHB4J10sXG4gICAgICBtbDogJ2F1dG8nLFxuICAgICAgJy5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtJzoge1xuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcbiAgICAgIH0sXG4gICAgICAnLnJlYWN0LW11bHRpLWNhcm91c2VsLWl0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSg0biknOiB7XG4gICAgICAgIG9wYWNpdHk6ICcwLjUnLFxuICAgICAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYyMHB4KSc6IHtcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICByZXZpZXdDYXJkOiB7XG4gICAgYm94U2hhZG93OiAnMHB4IDBweCAxcHggcmdiYSgzOCwgNzgsIDExOCwgMC4zNSknLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcycsXG4gICAgYm9yZGVyUmFkaXVzOiAnNnB4JyxcbiAgICBwOiBbXG4gICAgICAnMzBweCAyMHB4IDM1cHgnLFxuICAgICAgJzMwcHggMjVweCAzNXB4JyxcbiAgICAgICczMHB4IDIwcHggMzVweCcsXG4gICAgICAnMzVweCAzMHB4IDQwcHggNDBweCcsXG4gICAgICAnMzBweCAzMHB4IDM1cHgnLFxuICAgICAgJzM1cHggMzBweCA0MHB4IDQwcHgnLFxuICAgIF0sXG4gICAgYmc6ICd3aGl0ZScsXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgbTogW1xuICAgICAgJzI4cHggNXB4IDMwcHggNXB4JyxcbiAgICAgICcyOHB4IDIwcHggMzBweCAyMHB4JyxcbiAgICAgICcyOHB4IDE1cHggMzBweCAxNXB4JyxcbiAgICAgICcyOHB4IDE1cHggMzBweCAxNXB4JyxcbiAgICAgICczMHB4IDIwcHggNDBweCcsXG4gICAgXSxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJveFNoYWRvdzogJzBweCA2cHggMzBweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjEpJyxcbiAgICB9LFxuICAgICcucmF0aW5nJzoge1xuICAgICAgbWI6IFsxLCBudWxsLCBudWxsLCAyXSxcbiAgICAgIHVsOiB7XG4gICAgICAgIHBsOiAwLFxuICAgICAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICAgICAgbWI6IDAsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIH0sXG4gICAgICBzdmc6IHtcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcycHgnLFxuICAgICAgICAnJjpsYXN0LW9mLXR5cGUnOiB7XG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IDAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgJy5zdGFyJzoge1xuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgICBtcjogJzFweCcsXG4gICAgICB9LFxuICAgICAgJy5zdGFyLW8nOiB7XG4gICAgICAgIGNvbG9yOiAnI2RkZCcsXG4gICAgICAgIG1yOiAnMXB4JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnLmNhcmQtZm9vdGVyJzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBtYXJnaW5Ub3A6IFs1LCBudWxsLCBudWxsLCAnMzNweCddLFxuICAgICAgJy5pbWFnZSc6IHtcbiAgICAgICAgZmxleFNocmluazogMCxcbiAgICAgICAgbXI6IFszLCBudWxsLCBudWxsLCA0XSxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBpbWc6IHtcbiAgICAgICAgICB3aWR0aDogJzU1cHgnLFxuICAgICAgICAgIGhlaWdodDogJzU1cHgnLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRTaXplOiBbMSwgMl0sXG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIG1iOiBbMywgbnVsbCwgbnVsbCwgJzIycHgnXSxcbiAgICBjb2xvcjogJ3RleHQnLFxuICAgIGxpbmVIZWlnaHQ6IDEuNixcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIGNvbG9yOiAndGV4dCcsXG4gICAgbGluZUhlaWdodDogWzEuODUsIG51bGwsIDJdLFxuICB9LFxuICBoZWFkaW5nOiB7XG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgbWI6ICczcHgnLFxuICAgIGNvbG9yOiAndGV4dCcsXG4gICAgbGluZUhlaWdodDogMS4zLFxuICB9LFxuICBkZXNpZ25hdGlvbjoge1xuICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgZm9udFdlaWdodDogJzUwMCcsXG4gICAgZm9udFNpemU6IDEsXG4gICAgbGluZUhlaWdodDogMS40LFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=