webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ActiveLink */ "./components/ActiveLink.js");
var _jsxFileName = "/Users/noahmaizels/Desktop/portfolio/components/Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Layout = function Layout(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('none'),
      menu = _useState[0],
      setMenu = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.onclick = function (event) {
      if (event.target.id === 'burger') {
        if (menu === 'none') {
          setMenu('');
        } else {
          setMenu('none');
        }
      } else {
        setMenu('none');
      }
    };

    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("nav").style.top = "0";
        document.getElementById("nav").style.position = 'fixed';
      } else {
        document.getElementById("nav").style.position = 'relative';
      }
    };
  });
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376921815", [menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376921815", [menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Portfolio"), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376921815", [menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("meta", {
    charSet: "utf-8",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376921815", [menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Nunito:400,400i,700,700i&display=swap",
    rel: "stylesheet",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376921815", [menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), __jsx("nav", {
    id: "nav",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376921815", [menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376921815", [menu]]]) + " " + 'logo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("img", {
    src: "/headshot.jpg",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376921815", [menu]]]) + " " + 'headshot',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376921815", [menu]]]) + " " + 'personal-info-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376921815", [menu]]]) + " " + 'personal-info name',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376921815", [menu]]]) + " " + 'name',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Noah Maizels"))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376921815", [menu]]]) + " " + 'personal-info job-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Web Developer"))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376921815", [menu]]]) + " " + 'nav-menu',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376921815", [menu]]]) + " " + 'links',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376921815", [menu]]]) + " " + 'link-wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Home")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376921815", [menu]]]) + " " + 'link-wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Contact"))), __jsx("img", {
    id: "burger",
    src: "burger-bar.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376921815", [menu]]]) + " " + 'burger',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1376921815", [menu]]]) + " " + "Content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1376921815",
    dynamic: [menu],
    __self: this
  }, "nav.__jsx-style-dynamic-selector{position:fixed;padding-left:50px;padding-right:50px;height:100px;-webkit-box-shadow:0px 6px 6px 0px rgba(173,173,173,0.67);-moz-box-shadow:0px 6px 6px 0px rgba(173,173,173,0.67);box-shadow:0px 6px 6px 0px rgba(173,173,173,0.67);}.nav-menu.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-width:50px;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}nav.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:30px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:white;width:100%;}.logo.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;min-width:200px;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}.headshot.__jsx-style-dynamic-selector{width:50px;border-radius:100%;-webkit-transition:all 200ms linear;transition:all 200ms linear;}.personal-info-container.__jsx-style-dynamic-selector{display:inline-block;margin-left:15px;}.personal-info.__jsx-style-dynamic-selector{line-height:1rem;}.name.__jsx-style-dynamic-selector{font-size:1rem;}.job-title.__jsx-style-dynamic-selector{margin-top:5px;color:#CCCCCC;font-size:1rem;-webkit-transition:all 200ms linear;transition:all 200ms linear;}.burger.__jsx-style-dynamic-selector{width:30px;height:30px;}@media(max-width:1000px){.links.__jsx-style-dynamic-selector{display:".concat(menu, ";position:absolute;-webkit-transform:translate(0px,120px);-ms-transform:translate(0px,120px);transform:translate(0px,120px);border:2px solid #984B48;width:160px;background-color:white;border-radius:5px;height:200px;}}@media(min-width:1000px){.link-wrapper.__jsx-style-dynamic-selector{margin-left:30px;}.links.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate(0px,0px);-ms-transform:translate(0px,0px);transform:translate(0px,0px);border:none;width:300px;background-color:none;border-radius:0px;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.burger.__jsx-style-dynamic-selector{display:none;}}@media(max-width:650px){.logo.__jsx-style-dynamic-selector{min-width:100px;}.personal-info.__jsx-style-dynamic-selector{line-height:.8rem;}.job-title.__jsx-style-dynamic-selector{margin-top:5px;color:#CCCCCC;font-size:.8rem;}.name.__jsx-style-dynamic-selector{font-size:.8rem;}.headshot.__jsx-style-dynamic-selector{width:35px;border-radius:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRWdCLEFBR3dCLEFBU0YsQUFPQSxBQVFBLEFBTUYsQUFLVSxBQUlKLEFBR0YsQUFHQSxBQU1KLEFBSzRCLEFBWXBCLEFBR0osQUFTQSxBQUtHLEFBR0UsQUFHSCxBQUtDLEFBR0wsV0FwRU0sQUFxQlAsQUFnRFMsRUFuQnJCLEVBaEZrQixBQTBDcEIsQUFHZ0IsQUE4Q0UsQ0FOaEIsQUFXQSxDQXpERixBQTZCRSxDQW9CQSxHQXJEaUIsRUFpQm5CLE1BTmlCLEFBOENHLENBN0RVLEFBcUU1QixHQW5HbUIsSUF1REMsQ0FwQnRCLE1BVzhCLENBOEM1QixPQTNGYSxHQXVEcUIsVUF0RHdCLFNBTTNDLEFBT2UsQUFRVCxBQStDVyxlQTdEUCxLQXNCM0IsY0FnQkEsZUE1Q3lELHFDQXNENUIsYUFjYixFQS9DRSxHQXBCa0MsT0FzRHBDLEFBY0EsQ0E5REssR0FNQSxFQVNGLE1Ba0NRLEFBY0QsV0F4REwsV0F5REMsQ0FkQSxRQXZEdEIsU0FzRTZCLENBZFosYUFDZixHQXBDRixDQWZxQiw4Q0FPSSx1QkFDWixVQXlEWCxDQXhERixhQVJBIiwiZmlsZSI6Ii9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBBY3RpdmVMaW5rIGZyb20gJy4vQWN0aXZlTGluaydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW21lbnUsIHNldE1lbnVdID0gdXNlU3RhdGUoJ25vbmUnKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSAnYnVyZ2VyJyl7XG4gICAgICAgIGlmIChtZW51ID09PSAnbm9uZScpe1xuICAgICAgICAgIHNldE1lbnUoJycpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc2V0TWVudSgnbm9uZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzZXRNZW51KCdub25lJylcbiAgICAgIH1cbiAgICB9XG4gICAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xuICAgICAgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID4gMjAgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IDIwKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpLnN0eWxlLnRvcCA9IFwiMFwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCdcbiAgICAgIH0gXG4gICAgICBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIikuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnXG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlBvcnRmb2xpbzwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw0MDBpLDcwMCw3MDBpJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG5hdiBpZD0nbmF2Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ28nPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdoZWFkc2hvdCcgc3JjPScvaGVhZHNob3QuanBnJyAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwZXJzb25hbC1pbmZvLWNvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGVyc29uYWwtaW5mbyBuYW1lJz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J25hbWUnPlxuICAgICAgICAgICAgICAgIE5vYWggTWFpemVsc1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwZXJzb25hbC1pbmZvIGpvYi10aXRsZSc+XG4gICAgICAgICAgICAgIFdlYiBEZXZlbG9wZXJcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdi1tZW51Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlua3MnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmstd3JhcHBlcic+XG4gICAgICAgICAgICAgIDxBY3RpdmVMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICA8L0FjdGl2ZUxpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5rLXdyYXBwZXInPlxuICAgICAgICAgICAgICA8QWN0aXZlTGluayBocmVmPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICAgIDwvQWN0aXZlTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbWcgaWQ9J2J1cmdlcicgY2xhc3NOYW1lPSdidXJnZXInIHNyYz0nYnVyZ2VyLWJhci5wbmcnLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udGVudFwiPntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBuYXYge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNnB4IDZweCAwcHggcmdiYSgxNzMsMTczLDE3MywwLjY3KTtcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggNnB4IDZweCAwcHggcmdiYSgxNzMsMTczLDE3MywwLjY3KTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDZweCA2cHggMHB4IHJnYmEoMTczLDE3MywxNzMsMC42Nyk7XG4gICAgICB9XG4gICAgICAubmF2LW1lbnUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtaW4td2lkdGg6IDUwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBuYXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5sb2dvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgIH1cbiAgICAgIC5oZWFkc2hvdCB7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgbGluZWFyO1xuICAgICAgfVxuICAgICAgLnBlcnNvbmFsLWluZm8tY29udGFpbmVye1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgfVxuICAgICAgLnBlcnNvbmFsLWluZm8ge1xuICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICAgIH1cbiAgICAgIC5uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgfVxuICAgICAgLmpvYi10aXRsZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgY29sb3I6ICNDQ0NDQ0M7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGxpbmVhcjtcbiAgICAgIH1cbiAgICAgIC5idXJnZXIge1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgfVxuICAgICAgQG1lZGlhKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgICAgIC5saW5rcyB7XG4gICAgICAgICAgZGlzcGxheTogJHttZW51fTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAxMjBweCk7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzk4NEI0ODtcbiAgICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYShtaW4td2lkdGg6IDEwMDBweCkge1xuICAgICAgICAubGluay13cmFwcGVyIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgfVxuICAgICAgICAubGlua3Mge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgfVxuICAgICAgICAuYnVyZ2VyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEobWF4LXdpZHRoOiA2NTBweCkge1xuICAgICAgICAubG9nbyB7XG4gICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgfVxuICAgICAgICAucGVyc29uYWwtaW5mbyB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IC44cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5qb2ItdGl0bGUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICBjb2xvcjogI0NDQ0NDQztcbiAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkc2hvdCB7XG4gICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiXX0= */\n/*@ sourceURL=/Users/noahmaizels/Desktop/portfolio/components/Layout.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.b26001cf2f9877243eec.hot-update.js.map