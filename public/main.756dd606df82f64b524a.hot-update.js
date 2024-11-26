"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatewebpack_latest"]("main",{

/***/ "./src/modules/ui/renderDom.js":
/*!*************************************!*\
  !*** ./src/modules/ui/renderDom.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderDom)\n/* harmony export */ });\nfunction renderDom(content, selector, errorMessage) {\n  var container = document.querySelector(selector);\n  if (container) {\n    container.innerHTML = content;\n  } else {\n    console.error(errorMessage);\n  }\n}\n\n//# sourceURL=webpack://webpack-latest/./src/modules/ui/renderDom.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("170d381c334cc9dfb753")
/******/ })();
/******/ 
/******/ }
);