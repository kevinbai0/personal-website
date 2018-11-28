webpackHotUpdate("static/development/pages/work.js",{

/***/ "./pages/subcomponents/AnimateScrollDiv.js":
false,

/***/ "./pages/subcomponents/FeaturedWorkComponent.js":
false,

/***/ "./pages/subcomponents/Footer.js":
false,

/***/ "./pages/subcomponents/NavigationBar.js":
false,

/***/ "./pages/work.js":
/*!***********************!*\
  !*** ./pages/work.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _subcomponents_FeaturedWorkComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../subcomponents/FeaturedWorkComponent */ "./subcomponents/FeaturedWorkComponent.js");
/* harmony import */ var _subcomponents_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../subcomponents/Footer */ "./subcomponents/Footer.js");
/* harmony import */ var _subcomponents_AnimateScrollDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../subcomponents/AnimateScrollDiv */ "./subcomponents/AnimateScrollDiv.js");
/* harmony import */ var _client_src_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client/src/main.css */ "./client/src/main.css");
/* harmony import */ var _client_src_main_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_client_src_main_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _subcomponents_NavigationBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../subcomponents/NavigationBar */ "./subcomponents/NavigationBar.js");
var _jsxFileName = "/Users/kevinbai/Programming/websites/personal-website/pages/work.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var WorkPage =
/*#__PURE__*/
function (_Component) {
  _inherits(WorkPage, _Component);

  function WorkPage(props) {
    var _style, _style2;

    var _this;

    _classCallCheck(this, WorkPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WorkPage).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "featuredWorkItems", []);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollListener", function () {
      _this.setState({
        scrollOffset: window ? window.pageYOffset : 0
      });
    });

    _this.state = {
      scrollOffset: 0,
      featuredWork: [{
        title: "Molar Mass Calculator",
        src: "/static/assets/portfolio/molarmass.png",
        style: (_style = {
          background: "#aaffa9"
        }, _defineProperty(_style, "background", "-webkit-linear-gradient(to right, #aaffa9, #11ffbd)"), _defineProperty(_style, "background", "linear-gradient(to right, #aaffa9, #11ffbd)"), _style),
        description: "A molar mass calculator published on the app store with a clean UI and functional UX."
      }, {
        title: "Falcotronix Website",
        src: "/static/assets/portfolio/falcotronix.png",
        style: (_style2 = {
          background: "#7F7FD5"
        }, _defineProperty(_style2, "background", "-webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)"), _defineProperty(_style2, "background", "linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)"), _style2),
        description: "Website for FIRST Robotics Team"
      }]
    };
    return _this;
  }

  _createClass(WorkPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window && window.scrollTo(0, 0);
      window && window.addEventListener("scroll", this.scrollListener);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window && window.removeEventListener("scroll", this.scrollListener);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "work-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, Object(_subcomponents_NavigationBar__WEBPACK_IMPORTED_MODULE_5__["default"])(1, false), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "underlined-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Projects"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "underlined",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "featured-work-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, this.state.featuredWork.map(function (workItem, i) {
        var scrollPercentage = 0.25;
        /*if (window && window.innerWidth < 800) {
        	if (i == 0) scrollPercentage = -1;
        }
        else {*/

        if (i == 0 || i == 1) scrollPercentage = -1; //}

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_subcomponents_AnimateScrollDiv__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: i,
          id: "featured-work-item" + i,
          className: "",
          animation: i % 2 == 0 ? "zoomInLeft" : "zoomInRight",
          scrollPercentage: scrollPercentage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_subcomponents_FeaturedWorkComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
          title: workItem.title,
          src: workItem.src,
          style: workItem.style,
          description: workItem.description,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }));
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_subcomponents_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }));
    }
  }]);

  return WorkPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (WorkPage);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/work")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=work.js.86e1df3075dc658b0855.hot-update.js.map