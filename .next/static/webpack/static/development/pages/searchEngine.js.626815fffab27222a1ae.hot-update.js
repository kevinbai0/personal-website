webpackHotUpdate("static/development/pages/searchEngine.js",{

/***/ "./pages/searchEngine.js":
/*!*******************************!*\
  !*** ./pages/searchEngine.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _methods_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../methods/search */ "./methods/search.js");
/* harmony import */ var _client_src_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/src/main.css */ "./client/src/main.css");
/* harmony import */ var _client_src_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_client_src_main_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/kevinbai/Programming/websites/personal-website/pages/searchEngine.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var SearchEngine =
/*#__PURE__*/
function (_Component) {
  _inherits(SearchEngine, _Component);

  function SearchEngine(props) {
    var _this;

    _classCallCheck(this, SearchEngine);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchEngine).call(this, props));
    _this.state = {
      imageURL: "",
      currentInput: "",
      autocompleteOptions: [],
      isLink: false
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SearchEngine, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.getImage().then(function (json) {
        console.log(json.imageURL);

        _this2.setState({
          imageURL: json.imageURL
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "search-engine",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.state.imageURL,
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "app-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "welcome-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Kevin Bai"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        autoComplete: "off",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "search-bar",
        id: "mainSearchBar",
        placeholder: "Search",
        onChange: function onChange(e) {
          return _this3.handleInputChange(e);
        },
        autoFocus: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "submit",
        value: "submit",
        className: "hidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, this.state.autocompleteOptions.map(function (option, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: i,
          className: "auto-complete-option",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, option.name);
      }))));
    }
  }, {
    key: "getImage",
    value: function getImage() {
      return fetch("/api/photoOfTheDay").then(function (res) {
        return res.json();
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();

      if (this.state.isLink) {
        var hasPrefix = this.state.currentInput.indexOf("http") == 0;
        console.log(this.state.currentInput);
        window.location = hasPrefix ? this.state.currentInput : "http://" + this.state.currentInput;
      } else {
        window.location = "https://www.google.com/search?source=hp&ei=kMbjW4bEIYnRjwSJtKPIDQ&q=" + this.state.currentInput;
      }
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(e) {
      var results = _methods_search__WEBPACK_IMPORTED_MODULE_1__["default"].autocompleteSearch(e.target.value.toLowerCase());

      if (results.length == 2 && results[1] == true) {
        this.setState({
          isLink: true,
          currentInput: e.target.value
        });
      } else {
        this.setState({
          currentInput: e.target.value,
          autocompleteOptions: results,
          isLink: false
        });
      }
    }
  }]);

  return SearchEngine;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchEngine);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/searchEngine")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=searchEngine.js.626815fffab27222a1ae.hot-update.js.map