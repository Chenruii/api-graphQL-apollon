webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: ALL_PRODUCTS_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_PRODUCTS_QUERY", function() { return ALL_PRODUCTS_QUERY; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/App */ "./components/App.js");
/* harmony import */ var _components_InfoBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/InfoBox */ "./components/InfoBox.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Submit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Submit */ "./components/Submit.js");
/* harmony import */ var _components_PostList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PostList */ "./components/PostList.js");
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/apollo */ "./lib/apollo.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");

var _jsxFileName = "C:\\Users\\ruich\\Documents\\ASID202\\API\\NextJs\\with-apollo-app\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query product {\n    products {\n      id\n      name\n      description\n      category\n      price\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var ALL_PRODUCTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_9___default()(_templateObject());

var IndexPage = function IndexPage(props) {
  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10__["useQuery"])(ALL_PRODUCTS_QUERY),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error;

  if (loading) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Loading...");
  return __jsx(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(_components_InfoBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "\u2139\uFE0F This example shows how to fetch all initial apollo queries on the server. If you ", __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "reload"), " this page you won't see a loader since Apollo fetched all needed data on the server. This prevents", " ", __jsx("a", {
    href: "https://nextjs.org/blog/next-9#automatic-static-optimization",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "automatic static optimization"), " ", "in favour of full Server-Side-Rendering."), data.products.map(function (product) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
      m: 3,
      p: 1,
      bgcolor: "#eee",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
      variant: "h6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, product.name), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
      variant: "body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, product.description), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
      variant: "caption",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, product.category));
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
    mt: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    variant: "contained",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "material-ui works")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_apollo__WEBPACK_IMPORTED_MODULE_7__["withApollo"])(IndexPage));

/***/ })

})
//# sourceMappingURL=index.js.d3daa4b38407ea9c8d85.hot-update.js.map