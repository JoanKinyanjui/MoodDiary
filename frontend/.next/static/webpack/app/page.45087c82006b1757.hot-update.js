"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/MainPage.tsx":
/*!*************************************!*\
  !*** ./src/components/MainPage.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction MainPage(param) {\n    let { mood, onChangeMood, address, connectWallet, transactionStatus } = param;\n    const backgroundColor = mood === \"happy\" ? \"bg-yellow-400\" : mood === \"calm\" ? \"bg-[gainsboro]\" : mood === \"sad\" ? \"bg-blue-950\" : mood === \"angry\" ? \"bg-red-700\" : \"bg-red-100\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" relative w-screen h-screen  \".concat(backgroundColor, \" text-white flex items-center justify-center\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[90%] md:w-[100%] xl:w-[80%]  grid gap-5 md:gap-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[90%] md:w-[80%] mx-auto \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mx-auto font-bold text-[24px] sm:text-[32px] md:text-[42px]\",\n                            children: \"Hi , How are you feeling Today ?\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hp\\\\OneDrive\\\\Documents\\\\Personal Projects\\\\moodDiary\\\\frontend\\\\src\\\\components\\\\MainPage.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 5\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\OneDrive\\\\Documents\\\\Personal Projects\\\\moodDiary\\\\frontend\\\\src\\\\components\\\\MainPage.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-2 md:grid-cols-4 gap-2  w-[90%] md:w-[90%] xl:w-[70%] mx-auto flex-wrap  justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-gray-900 px-4 py-2 rounded-md h-[47px] flex justify-center items-center w-[60%]  text-[10px]  sm:text-[12px] md:text-[14px]\",\n                                onClick: ()=>{\n                                    onChangeMood(\"happy\");\n                                },\n                                children: \"HAPPY\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\OneDrive\\\\Documents\\\\Personal Projects\\\\moodDiary\\\\frontend\\\\src\\\\components\\\\MainPage.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 5\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-gray-900 px-4 py-2 rounded-md h-[47px] flex justify-center items-center w-[60%]  text-[10px]  sm:text-[12px] md:text-[14px]\",\n                                onClick: ()=>{\n                                    onChangeMood(\"calm\");\n                                },\n                                children: \"CALM\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\OneDrive\\\\Documents\\\\Personal Projects\\\\moodDiary\\\\frontend\\\\src\\\\components\\\\MainPage.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 5\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-gray-900 px-4 py-2 rounded-md h-[47px] flex justify-center items-center w-[60%]  text-[10px]  sm:text-[12px] md:text-[14px]\",\n                                onClick: ()=>{\n                                    onChangeMood(\"sad\");\n                                },\n                                children: \"SAD\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\OneDrive\\\\Documents\\\\Personal Projects\\\\moodDiary\\\\frontend\\\\src\\\\components\\\\MainPage.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 5\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-gray-900 px-4 py-2 rounded-md h-[47px] flex justify-center items-center w-[60%]  text-[10px]  sm:text-[12px] md:text-[14px]\",\n                                onClick: ()=>{\n                                    onChangeMood(\"angry\");\n                                },\n                                children: \"ANGRY\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\OneDrive\\\\Documents\\\\Personal Projects\\\\moodDiary\\\\frontend\\\\src\\\\components\\\\MainPage.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 5\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\OneDrive\\\\Documents\\\\Personal Projects\\\\moodDiary\\\\frontend\\\\src\\\\components\\\\MainPage.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 4\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mx-auto text-indigo-300 texxt-lg \",\n                        children: transactionStatus\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\OneDrive\\\\Documents\\\\Personal Projects\\\\moodDiary\\\\frontend\\\\src\\\\components\\\\MainPage.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 4\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hp\\\\OneDrive\\\\Documents\\\\Personal Projects\\\\moodDiary\\\\frontend\\\\src\\\\components\\\\MainPage.tsx\",\n                lineNumber: 20,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-0 right-0 w-full  h-[50px] md:h-[70px]  bg-white text-black flex items-center  \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-11/12 md:w-[70%] mx-auto  flex justify-between items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-semibold text-[18px] sm:text-[20px] md:text-[24px] text-gray-900\",\n                            children: \"Mood Diary\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hp\\\\OneDrive\\\\Documents\\\\Personal Projects\\\\moodDiary\\\\frontend\\\\src\\\\components\\\\MainPage.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 3\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"px-2 py-2 text-white bg-gray-900 flex rounded-md\",\n                            onClick: connectWallet,\n                            children: address ? address.slice(0, 6).concat(\"...\") : \"Connect Wallet\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hp\\\\OneDrive\\\\Documents\\\\Personal Projects\\\\moodDiary\\\\frontend\\\\src\\\\components\\\\MainPage.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 5\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\hp\\\\OneDrive\\\\Documents\\\\Personal Projects\\\\moodDiary\\\\frontend\\\\src\\\\components\\\\MainPage.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 3\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\OneDrive\\\\Documents\\\\Personal Projects\\\\moodDiary\\\\frontend\\\\src\\\\components\\\\MainPage.tsx\",\n                lineNumber: 33,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\hp\\\\OneDrive\\\\Documents\\\\Personal Projects\\\\moodDiary\\\\frontend\\\\src\\\\components\\\\MainPage.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_c = MainPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainPage);\nvar _c;\n$RefreshReg$(_c, \"MainPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01haW5QYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUF5QjtBQVd6QixTQUFTQyxTQUFTLEtBQTZFO1FBQTdFLEVBQUNDLElBQUksRUFBR0MsWUFBWSxFQUFFQyxPQUFPLEVBQUNDLGFBQWEsRUFBQ0MsaUJBQWlCLEVBQWdCLEdBQTdFO0lBQ2hCLE1BQU1DLGtCQUFrQkwsU0FBUyxVQUFVLGtCQUMzQ0EsU0FBUyxTQUFTLG1CQUNsQkEsU0FBUyxRQUFRLGdCQUNqQkEsU0FBUyxVQUFVLGVBQ25CO0lBQ0EscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVcsZ0NBQWdELE9BQWhCRixpQkFBZ0I7OzBCQUNsRSw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNmLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7c0NBQThEOzs7Ozs7Ozs7OztrQ0FFOUUsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDZCw4REFBQ0M7Z0NBQU9ELFdBQVk7Z0NBQWtJRSxTQUFTO29DQUFLUixhQUFhO2dDQUFROzBDQUFJOzs7Ozs7MENBQzdMLDhEQUFDTztnQ0FBT0QsV0FBWTtnQ0FBa0lFLFNBQVM7b0NBQUtSLGFBQWE7Z0NBQU87MENBQUc7Ozs7OzswQ0FDM0wsOERBQUNPO2dDQUFPRCxXQUFZO2dDQUFrSUUsU0FBUztvQ0FBS1IsYUFBYTtnQ0FBTTswQ0FBRzs7Ozs7OzBDQUMxTCw4REFBQ087Z0NBQU9ELFdBQVk7Z0NBQWtJRSxTQUFTO29DQUFLUixhQUFhO2dDQUFROzBDQUFHOzs7Ozs7Ozs7Ozs7a0NBRTdMLDhEQUFDUzt3QkFBRUgsV0FBVTtrQ0FBcUNIOzs7Ozs7Ozs7Ozs7MEJBR25ELDhEQUFDRTtnQkFBSUMsV0FBVTswQkFDZiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNmLDhEQUFDRzs0QkFBRUgsV0FBVTtzQ0FBd0U7Ozs7OztzQ0FDbkYsOERBQUNDOzRCQUFPRCxXQUFVOzRCQUFtREUsU0FBU047c0NBQWdCRCxVQUFVQSxRQUFRUyxLQUFLLENBQUMsR0FBRSxHQUFHQyxNQUFNLENBQUMsU0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNOUk7S0E5QlNiO0FBZ0NULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01haW5QYWdlLnRzeD9hODViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcblxyXG50eXBlIG1vb2REaWFyeVByb3BzID17XHJcbiAgb25DaGFuZ2VNb29kIDogKG1vb2Q6c3RyaW5nKT0+dm9pZDtcclxuICBtb29kOnN0cmluZztcclxuICBhZGRyZXNzIDpzdHJpbmc7XHJcbiAgdHJhbnNhY3Rpb25TdGF0dXM6c3RyaW5nO1xyXG4gIGNvbm5lY3RXYWxsZXQgOigpPT52b2lkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNYWluUGFnZSh7bW9vZCAsIG9uQ2hhbmdlTW9vZCwgYWRkcmVzcyxjb25uZWN0V2FsbGV0LHRyYW5zYWN0aW9uU3RhdHVzfTptb29kRGlhcnlQcm9wcykge1xyXG4gIGNvbnN0IGJhY2tncm91bmRDb2xvciA9IG1vb2QgPT09ICdoYXBweScgPyAnYmcteWVsbG93LTQwMCcgOlxyXG4gIG1vb2QgPT09ICdjYWxtJyA/ICdiZy1bZ2FpbnNib3JvXScgOiBcclxuICBtb29kID09PSAnc2FkJyA/ICdiZy1ibHVlLTk1MCcgOlxyXG4gIG1vb2QgPT09ICdhbmdyeScgPyAnYmctcmVkLTcwMCcgOiBcclxuICAnYmctcmVkLTEwMCc7IFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCByZWxhdGl2ZSB3LXNjcmVlbiBoLXNjcmVlbiAgJHtiYWNrZ3JvdW5kQ29sb3J9IHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJgfT5cclxuICA8ZGl2IGNsYXNzTmFtZT0ndy1bOTAlXSBtZDp3LVsxMDAlXSB4bDp3LVs4MCVdICBncmlkIGdhcC01IG1kOmdhcC04Jz5cclxuICA8ZGl2IGNsYXNzTmFtZT0ndy1bOTAlXSBtZDp3LVs4MCVdIG14LWF1dG8gJz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdteC1hdXRvIGZvbnQtYm9sZCB0ZXh0LVsyNHB4XSBzbTp0ZXh0LVszMnB4XSBtZDp0ZXh0LVs0MnB4XSc+SGkgLCBIb3cgYXJlIHlvdSBmZWVsaW5nIFRvZGF5ID88L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy00IGdhcC0yICB3LVs5MCVdIG1kOnctWzkwJV0geGw6dy1bNzAlXSBteC1hdXRvIGZsZXgtd3JhcCAganVzdGlmeS1iZXR3ZWVuJz5cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtgYmctZ3JheS05MDAgcHgtNCBweS0yIHJvdW5kZWQtbWQgaC1bNDdweF0gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1bNjAlXSAgdGV4dC1bMTBweF0gIHNtOnRleHQtWzEycHhdIG1kOnRleHQtWzE0cHhdYH0gIG9uQ2xpY2s9eygpPT57b25DaGFuZ2VNb29kKCdoYXBweScpfX0gPkhBUFBZPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGJnLWdyYXktOTAwIHB4LTQgcHktMiByb3VuZGVkLW1kIGgtWzQ3cHhdIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctWzYwJV0gIHRleHQtWzEwcHhdICBzbTp0ZXh0LVsxMnB4XSBtZDp0ZXh0LVsxNHB4XWB9ICBvbkNsaWNrPXsoKT0+e29uQ2hhbmdlTW9vZCgnY2FsbScpfX0+Q0FMTTwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e2BiZy1ncmF5LTkwMCBweC00IHB5LTIgcm91bmRlZC1tZCBoLVs0N3B4XSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LVs2MCVdICB0ZXh0LVsxMHB4XSAgc206dGV4dC1bMTJweF0gbWQ6dGV4dC1bMTRweF1gfSAgb25DbGljaz17KCk9PntvbkNoYW5nZU1vb2QoJ3NhZCcpfX0+U0FEPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGJnLWdyYXktOTAwIHB4LTQgcHktMiByb3VuZGVkLW1kIGgtWzQ3cHhdIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctWzYwJV0gIHRleHQtWzEwcHhdICBzbTp0ZXh0LVsxMnB4XSBtZDp0ZXh0LVsxNHB4XWB9ICBvbkNsaWNrPXsoKT0+e29uQ2hhbmdlTW9vZCgnYW5ncnknKX19PkFOR1JZPC9idXR0b24+XHJcbiAgIDwvZGl2PlxyXG4gICA8cCBjbGFzc05hbWU9J214LWF1dG8gdGV4dC1pbmRpZ28tMzAwIHRleHh0LWxnICc+e3RyYW5zYWN0aW9uU3RhdHVzfTwvcD5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC0wIHJpZ2h0LTAgdy1mdWxsICBoLVs1MHB4XSBtZDpoLVs3MHB4XSAgYmctd2hpdGUgdGV4dC1ibGFjayBmbGV4IGl0ZW1zLWNlbnRlciAgJz5cclxuICA8ZGl2IGNsYXNzTmFtZT0ndy0xMS8xMiBtZDp3LVs3MCVdIG14LWF1dG8gIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlcic+XHJcbiAgPHAgY2xhc3NOYW1lPSdmb250LXNlbWlib2xkIHRleHQtWzE4cHhdIHNtOnRleHQtWzIwcHhdIG1kOnRleHQtWzI0cHhdIHRleHQtZ3JheS05MDAnPk1vb2QgRGlhcnk8L3A+XHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncHgtMiBweS0yIHRleHQtd2hpdGUgYmctZ3JheS05MDAgZmxleCByb3VuZGVkLW1kJyBvbkNsaWNrPXtjb25uZWN0V2FsbGV0fT57YWRkcmVzcyA/IGFkZHJlc3Muc2xpY2UoMCw2KS5jb25jYXQoJy4uLicpIDonQ29ubmVjdCBXYWxsZXQnfTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpblBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk1haW5QYWdlIiwibW9vZCIsIm9uQ2hhbmdlTW9vZCIsImFkZHJlc3MiLCJjb25uZWN0V2FsbGV0IiwidHJhbnNhY3Rpb25TdGF0dXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwicCIsInNsaWNlIiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/MainPage.tsx\n"));

/***/ })

});