"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/grantadmin/page",{

/***/ "(app-client)/./app/(dashboard)/grantadmin/page.jsx":
/*!*********************************************!*\
  !*** ./app/(dashboard)/grantadmin/page.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst page = ()=>{\n    _s();\n    const [userEmail, setUserEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleInputChange = (e)=>{\n        const { value } = e.target;\n        setUserEmail(value);\n    };\n    const handleGrantAdminAccess = async (e)=>{\n        e.preventDefault();\n        if (!userEmail === \"\") {\n        // await axios\n        //   .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/invite-admin`,{userEmail:userEmail} , {\n        //     headers: {\n        //       \"Content-Type\": \"application/json\",\n        //     },\n        //   })\n        //   .then((response) => {\n        //     console.log(response);\n        //   })\n        //   .catch((error) => {\n        //     console.log(error);\n        //   });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-max space-y-10 p-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-between gap-4 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    class: \"flex-grow  text-3xl font-extrabold leading-none tracking-tight text-gray-900   dark:text-white\",\n                    children: \"Manage Admins\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Supersapiens Devlab\\\\Desktop\\\\Supersapiens Projects\\\\mintAdmin\\\\app\\\\(dashboard)\\\\grantadmin\\\\page.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Supersapiens Devlab\\\\Desktop\\\\Supersapiens Projects\\\\mintAdmin\\\\app\\\\(dashboard)\\\\grantadmin\\\\page.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex items-end space-x-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex w-2/3 flex-col space-y-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                className: \"font-bold\",\n                                children: \"Enter New Mintcad Email ID\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Supersapiens Devlab\\\\Desktop\\\\Supersapiens Projects\\\\mintAdmin\\\\app\\\\(dashboard)\\\\grantadmin\\\\page.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"email\",\n                                name: \"email\",\n                                type: \"email\",\n                                onChange: handleInputChange,\n                                className: \"w-full h-10 p-2 rounded-lg text-sm\",\n                                placeholder: \"Enter New Email ID\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Supersapiens Devlab\\\\Desktop\\\\Supersapiens Projects\\\\mintAdmin\\\\app\\\\(dashboard)\\\\grantadmin\\\\page.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Supersapiens Devlab\\\\Desktop\\\\Supersapiens Projects\\\\mintAdmin\\\\app\\\\(dashboard)\\\\grantadmin\\\\page.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        className: \"px-5 py-3 text-sm font-medium text-white bg-green-500 rounded-lg w-fit focus:outline-none hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800\",\n                        children: \"Grant access\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Supersapiens Devlab\\\\Desktop\\\\Supersapiens Projects\\\\mintAdmin\\\\app\\\\(dashboard)\\\\grantadmin\\\\page.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Supersapiens Devlab\\\\Desktop\\\\Supersapiens Projects\\\\mintAdmin\\\\app\\\\(dashboard)\\\\grantadmin\\\\page.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Supersapiens Devlab\\\\Desktop\\\\Supersapiens Projects\\\\mintAdmin\\\\app\\\\(dashboard)\\\\grantadmin\\\\page.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"aJ6gjnHBeMnWAwv8hNYpgnM6ayg=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwLyhkYXNoYm9hcmQpL2dyYW50YWRtaW4vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3dDO0FBRXhDLE1BQU1FLE9BQU87O0lBQ1gsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdILCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1JLG9CQUFvQixDQUFDQztRQUN6QixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHRCxFQUFFRSxNQUFNO1FBQzFCSixhQUFhRztJQUNmO0lBRUEsTUFBTUUseUJBQXlCLE9BQU9IO1FBQ3BDQSxFQUFFSSxjQUFjO1FBQ2hCLElBQUksQ0FBQ1AsY0FBYyxJQUFJO1FBQ3JCLGNBQWM7UUFDZCwyRkFBMkY7UUFDM0YsaUJBQWlCO1FBQ2pCLDRDQUE0QztRQUM1QyxTQUFTO1FBQ1QsT0FBTztRQUNQLDBCQUEwQjtRQUMxQiw2QkFBNkI7UUFDN0IsT0FBTztRQUNQLHdCQUF3QjtRQUN4QiwwQkFBMEI7UUFDMUIsUUFBUTtRQUNWO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1E7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDQztvQkFBR0MsT0FBTTs4QkFBaUc7Ozs7Ozs7Ozs7OzBCQUk3Ryw4REFBQ0g7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNHO2dDQUFNQyxTQUFRO2dDQUFRSixXQUFVOzBDQUFZOzs7Ozs7MENBRzdDLDhEQUFDSztnQ0FDQ0MsSUFBRztnQ0FDSEMsTUFBSztnQ0FDTEMsTUFBSztnQ0FDTEMsVUFBVWhCO2dDQUNWTyxXQUFVO2dDQUNWVSxhQUFZOzs7Ozs7Ozs7Ozs7a0NBR2hCLDhEQUFDQzt3QkFDQ0gsTUFBSzt3QkFDTFIsV0FBVTtrQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0F4RE1WO0FBMEROLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8oZGFzaGJvYXJkKS9ncmFudGFkbWluL3BhZ2UuanN4P2U5ODMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgcGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbdXNlckVtYWlsLCBzZXRVc2VyRW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgc2V0VXNlckVtYWlsKHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVHcmFudEFkbWluQWNjZXNzID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICghdXNlckVtYWlsID09PSBcIlwiKSB7XHJcbiAgICAgIC8vIGF3YWl0IGF4aW9zXHJcbiAgICAgIC8vICAgLnBvc3QoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vYXV0aC9pbnZpdGUtYWRtaW5gLHt1c2VyRW1haWw6dXNlckVtYWlsfSAsIHtcclxuICAgICAgLy8gICAgIGhlYWRlcnM6IHtcclxuICAgICAgLy8gICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIC8vICAgICB9LFxyXG4gICAgICAvLyAgIH0pXHJcbiAgICAgIC8vICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIC8vICAgfSlcclxuICAgICAgLy8gICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIC8vICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgaC1tYXggc3BhY2UteS0xMCBwLTEwJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGdhcC00ICc+XHJcbiAgICAgICAgPGgxIGNsYXNzPSdmbGV4LWdyb3cgIHRleHQtM3hsIGZvbnQtZXh0cmFib2xkIGxlYWRpbmctbm9uZSB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwICAgZGFyazp0ZXh0LXdoaXRlJz5cclxuICAgICAgICAgIE1hbmFnZSBBZG1pbnNcclxuICAgICAgICA8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBmbGV4IGl0ZW1zLWVuZCBzcGFjZS14LTIwJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCB3LTIvMyBmbGV4LWNvbCBzcGFjZS15LTEnPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2VtYWlsJyBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+XHJcbiAgICAgICAgICAgIEVudGVyIE5ldyBNaW50Y2FkIEVtYWlsIElEXHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPSdlbWFpbCdcclxuICAgICAgICAgICAgbmFtZT0nZW1haWwnXHJcbiAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1mdWxsIGgtMTAgcC0yIHJvdW5kZWQtbGcgdGV4dC1zbSdcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIE5ldyBFbWFpbCBJRCdcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPSdweC01IHB5LTMgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGJnLWdyZWVuLTUwMCByb3VuZGVkLWxnIHctZml0IGZvY3VzOm91dGxpbmUtbm9uZSBob3ZlcjpiZy1ncmVlbi03MDAgZm9jdXM6cmluZy00IGZvY3VzOnJpbmctZ3JlZW4tMzAwIGRhcms6YmctZ3JlZW4tNjAwIGRhcms6aG92ZXI6YmctZ3JlZW4tNzAwIGRhcms6Zm9jdXM6cmluZy1ncmVlbi04MDAnXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgR3JhbnQgYWNjZXNzXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwicGFnZSIsInVzZXJFbWFpbCIsInNldFVzZXJFbWFpbCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlR3JhbnRBZG1pbkFjY2VzcyIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJjbGFzcyIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiaWQiLCJuYW1lIiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/(dashboard)/grantadmin/page.jsx\n"));

/***/ })

});