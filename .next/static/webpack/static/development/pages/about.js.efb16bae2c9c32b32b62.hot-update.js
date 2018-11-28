webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _subcomponents_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subcomponents/Footer */ "./pages/subcomponents/Footer.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _subcomponents_NavigationBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subcomponents/NavigationBar */ "./pages/subcomponents/NavigationBar.js");
var _jsxFileName = "/Users/kevinbai/Programming/websites/personal-website/pages/about.js";

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







var AboutPage =
/*#__PURE__*/
function (_Component) {
  _inherits(AboutPage, _Component);

  function AboutPage(props) {
    var _this;

    _classCallCheck(this, AboutPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AboutPage).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollListener", function () {
      Object.keys(_this.state).map(function (key) {
        if (key.includes("programmingThing")) {
          _this.animateTag(key, 0.25, "flipInX");
        } else _this.animateTag(key, 0.25, "bounceInLeft");
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "animateTag", function (tag, scrollPercentage, animation) {
      var elem = document.getElementById(tag);
      if (elem == null) return;
      var tagRect = elem.getBoundingClientRect();
      var tagOffset = tagRect.y + window.pageYOffset - window.innerHeight + window.innerHeight * scrollPercentage;

      if (window.pageYOffset >= tagOffset) {
        if (_this.state[tag] === "hidden") {
          _this.setState(_defineProperty({}, tag, "animated " + animation));
        }
      }
    });

    _this.state = {
      title: "animated jackInTheBox",
      subtitle: "animated flipInX delay-1s",
      programmingTitle: "hidden",
      programmingTitle2: "hidden",
      programmingTitle3: "hidden",
      programmingTitle4: "hidden",
      programmingThing1: "hidden",
      programmingThing2: "hidden",
      programmingThing3: "hidden",
      programmingThing4: "hidden",
      roboticsTitle1: "hidden",
      roboticsTitle2: "hidden",
      roboticsTitle3: "hidden",
      sportsDescription1: "hidden",
      sportsDescription2: "hidden",
      sportsDescription3: "hidden",
      sportsDescription4: "hidden",
      sportsDescription5: "hidden",
      sportsDescription6: "hidden",
      sportsDescription7: "hidden",
      sportsDescription8: "hidden",
      sportsDescription9: "hidden",
      sportsDescription10: "hidden"
    };
    return _this;
  }

  _createClass(AboutPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
      window.addEventListener("scroll", this.scrollListener);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.scrollListener);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "about-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, Object(_subcomponents_NavigationBar__WEBPACK_IMPORTED_MODULE_4__["default"])(3, true), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "about-main-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title " + this.state.title,
        id: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Hi, I'm Kevin Bai"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "subtitle " + this.state.subtitle,
        id: "subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "I'm a 17 year old high school student")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "about-programming-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "programming-description " + this.state.programmingTitle,
        id: "programmingTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "I love programming \uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDCBB"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "programming-description " + this.state.programmingTitle2,
        id: "programmingTitle2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Especially mobile apps and websites \uD83D\uDCF1\uD83D\uDDA5"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "programming-description " + this.state.programmingTitle3,
        id: "programmingTitle3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Check out my ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "colored-teal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/work",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "portfolio"))), " \uD83D\uDC81\uD83C\uDFFD\u200D\u2642\uFE0F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "programming-description-large " + this.state.programmingTitle4,
        id: "programmingTitle4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "but, I also program other ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "colored-coral",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        href: "https://github.com/kevinbai0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "things"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "programming-things-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "programmingThing1",
        className: this.state.programmingThing1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Robots"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "programmingThing2",
        className: this.state.programmingThing2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Arduinos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "programmingThing3",
        className: this.state.programmingThing3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Computer Vision"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "programmingThing4",
        className: this.state.programmingThing4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Machine Learning"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "about-robotics-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "robotics-description " + this.state.roboticsTitle1,
        id: "roboticsTitle1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "I know a thing or two about robotics"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "robotics-description-title " + this.state.roboticsTitle2,
        id: "roboticsTitle2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "I started a ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "colored-orange extra-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        href: "https://www.firstinspires.org/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "FIRST")), " Robotics Team at my school"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "robotics-description-huge-title " + this.state.roboticsTitle3,
        id: "roboticsTitle3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "We're called ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "colored-coral",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        href: "http://www.falcotronix.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Falcotronix")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "about-sports-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sports-description " + this.state.sportsDescription1,
        id: "sportsDescription1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "I love sports"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sports-description-bigger " + this.state.sportsDescription2,
        id: "sportsDescription2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "My favourite sport is soccer \u26BD\uFE0F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sports-description-small " + this.state.sportsDescription3,
        id: "sportsDescription3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "I play competitively for the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "colored-blue",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.thunderbaychill.com",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Thunder Bay Chill")), " Reserve Male Team"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sports-description-small " + this.state.sportsDescription4,
        id: "sportsDescription4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "I also play on my Varsity High School Team"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sports-description-huge " + this.state.sportsDescription5,
        id: "sportsDescription5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Last year, we won bronze at ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "colored-coral",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "http://www.ofsaa.on.ca/boys-aaa-soccer",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "OFSAA"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sports-description-bigger " + this.state.sportsDescription6,
        id: "sportsDescription6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "I also play volleyball and basketball"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sports-description-medium " + this.state.sportsDescription7,
        id: "sportsDescription7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "2 years of"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sports-description-small indented " + this.state.sportsDescription8,
        id: "sportsDescription8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "Junior Varsity Basketball \uD83C\uDFC0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sports-description-small indented " + this.state.sportsDescription9,
        id: "sportsDescription9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Junior Varsity Volleyball \uD83C\uDFD0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sports-description-small indented " + this.state.sportsDescription10,
        id: "sportsDescription10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Varsity Volleyball \uD83C\uDFD0")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "about-connect-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "Let's Connect!"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        width: "23px",
        height: "80px",
        viewBox: "0 0 23 80",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        xlink: "http://www.w3.org/1999/xlink",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("desc", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "Created with Sketch."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        id: "About",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        id: "Desktop",
        transform: "translate(-1265.000000, -3023.000000)",
        fill: "#FFFFFF",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        id: "arrow",
        transform: "translate(1265.000000, 3023.000000)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
        id: "Rectangle-3",
        x: "8",
        y: "0",
        width: "8",
        height: "64",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
        id: "Triangle",
        points: "11.5 80 0 64 23 64",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_subcomponents_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }));
    }
  }]);

  return AboutPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AboutPage);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/about")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=about.js.efb16bae2c9c32b32b62.hot-update.js.map