webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _subcomponents_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subcomponents/Footer */ "./pages/subcomponents/Footer.js");
/* harmony import */ var _subcomponents_FeaturedWorkComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subcomponents/FeaturedWorkComponent */ "./pages/subcomponents/FeaturedWorkComponent.js");
/* harmony import */ var _subcomponents_EmailComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subcomponents/EmailComponent */ "./pages/subcomponents/EmailComponent.js");
/* harmony import */ var _subcomponents_AnimateScrollDiv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subcomponents/AnimateScrollDiv */ "./pages/subcomponents/AnimateScrollDiv.js");
/* harmony import */ var _subcomponents_NavigationBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subcomponents/NavigationBar */ "./pages/subcomponents/NavigationBar.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _client_src_main_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../client/src/main.css */ "./client/src/main.css");
/* harmony import */ var _client_src_main_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_client_src_main_css__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/Users/kevinbai/Programming/websites/personal-website/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var FullstackItem = function FullstackItem(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: props.id,
    className: "fullstack-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "bullet-number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.order, "."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "writing-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, props.content)));
};

var TestimonialItem = function TestimonialItem(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "testimonial-item " + props.classAddon,
    id: props.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: props.src,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "quote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, props.quote), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "speaker",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "- ", props.speaker));
};

var getNavBar = function getNavBar(i, light) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_subcomponents_NavigationBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    navItems: [{
      name: "Home",
      link: "/"
    }, {
      name: "Work",
      link: "/work"
    }, {
      name: "Contact",
      link: "/contact"
    }, {
      name: "About Me",
      link: "/about"
    }],
    selected: i,
    lightBar: light,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  });
};

var LandingPage =
/*#__PURE__*/
function (_Component) {
  _inherits(LandingPage, _Component);

  _createClass(LandingPage, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, navigationBar;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                navigationBar = getNavBar(0, true);
                return _context.abrupt("return", {
                  navigationBar: navigationBar
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function LandingPage(props) {
    var _style, _style2;

    var _this;

    _classCallCheck(this, LandingPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LandingPage).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollListener", function () {
      _this.setState({
        pageYOffset: window.pageYOffset
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeSelectedTestimonial", function (newNumber) {
      // animation out
      var item = document.getElementById("testimonialItem");
      item.className = "testimonial-item";
      item.className = "testimonial-item animated zoomOut";
      setTimeout(function () {
        _this.setState({
          currentTestimonialNumber: newNumber
        }, function () {
          item.className = "testimonial-item";
          item.className = "testimonial-item animated zoomIn";
        });
      }, 500);
    });

    _this.state = {
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
      }],
      fullstackItems: [{
        order: 1,
        title: "UX Design",
        content: "User experience and solving your customer need."
      }, {
        order: 2,
        title: "UI Design",
        content: "Creating aesthetically pleasing user interfaces."
      }, {
        order: 3,
        title: "Front-End Development",
        content: "Turning your design into reality that feels good to use."
      }, {
        order: 4,
        title: "Back-End Development",
        content: "Creating your server-side programs that connect to databases."
      }],
      testimonials: [{
        src: "/static/assets/meCropped.jpg",
        quote: "\"1. Written testimonials from customers. Cool stuff, I know get some good stuff written about me to put on here and that would be great!\"",
        speaker: "Kevin Bai"
      }, {
        src: "/static/assets/meCropped.jpg",
        quote: "\"2. Written testimonials from customers. Cool stuff, I know get some good stuff written about me to put on here and that would be great!\"",
        speaker: "Kevin Bai"
      }, {
        src: "/static/assets/meCropped.jpg",
        quote: "\"3. Written testimonials from customers. Cool stuff, I know get some good stuff written about me to put on here and that would be great!\"",
        speaker: "Kevin Bai"
      }, {
        src: "/static/assets/meCropped.jpg",
        quote: "\"4. Written testimonials from customers. Cool stuff, I know get some good stuff written about me to put on here and that would be great!\"",
        speaker: "Kevin Bai"
      }, {
        src: "/static/assets/meCropped.jpg",
        quote: "\"5. Written testimonials from customers. Cool stuff, I know get some good stuff written about me to put on here and that would be great!\"",
        speaker: "Kevin Bai"
      }],
      currentTestimonialNumber: 0,
      offsetY: 0,
      modalComponent: ""
    };
    _this.toggleModal = _this.toggleModal.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(LandingPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
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
      console.log(this.props);
      var testimonialItem = null;

      if (this.state.currentTestimonialNumber < this.state.testimonials.length) {
        testimonialItem = this.state.testimonials[this.state.currentTestimonialNumber];
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "landing-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, this.state.modalComponent, this.props.navigationBar, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "main-landing-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "title bounceIn animated",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Kevin Bai"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "subtitle bounceIn animated",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Mobile and web developer")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_subcomponents_AnimateScrollDiv__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "tagline",
        className: "hovering-tagline-landing-section",
        animation: "bounceInLeft",
        scrollPercentage: 0.25,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "I help you bring your project to life from the ground up.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "about-landing-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_subcomponents_AnimateScrollDiv__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "tagline2",
        animation: "bounceInLeft",
        scrollPercentage: 0.25,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "From ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "design"), " to ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "development"), ", you\u2019re completely covered."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_subcomponents_AnimateScrollDiv__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "tagline3",
        animation: "bounceInLeft",
        scrollPercentage: 0.25,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, " I specialize in ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "mobile apps"), " and ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "websites"), ".")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "featured-landing-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Featured Work"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "featured-work-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, this.state.featuredWork.map(function (workItem, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_subcomponents_AnimateScrollDiv__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: i,
          id: "featuredWorkComponent" + i,
          animation: i % 2 == 0 ? "zoomInLeft" : "zoomInRight",
          scrollPercentage: 0.25,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_subcomponents_FeaturedWorkComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
          title: workItem.title,
          src: workItem.src,
          style: workItem.style,
          description: workItem.description,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }));
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "see-all-work-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/work",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "See all work"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "fullstack-landing-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Fullstack"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "fullstack-items-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, this.state.fullstackItems.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_subcomponents_AnimateScrollDiv__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: i,
          id: "fullstackItem" + i,
          scrollPercentage: 0.25,
          animation: i % 2 == 0 ? "rotateInUpLeft" : "rotateInUpRight",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FullstackItem, {
          order: item.order,
          title: item.title,
          content: item.content,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }));
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "contact-landing-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "Get in touch"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_subcomponents_AnimateScrollDiv__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "email-animate-container",
        scrollPercentage: 0.25,
        animation: "flipInX",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_subcomponents_EmailComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
        toggleModal: this.toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "my-email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "mailto:kevin.c.bai0@gmail.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, "kevin.c.bai0@gmail.com")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "my-number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, "+1 (807) 633-4358"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "my-location",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, "Located in Thunder Bay, Ontario, Canada")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_subcomponents_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }));
    }
  }, {
    key: "toggleModal",
    value: function toggleModal(component) {
      var completion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      this.setState({
        modalComponent: component
      }, completion());
    }
  }]);

  return LandingPage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LandingPage);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.b5a32081917b04e5e35b.hot-update.js.map