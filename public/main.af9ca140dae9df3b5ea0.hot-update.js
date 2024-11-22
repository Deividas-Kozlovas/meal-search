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

/***/ "./src/modules/events/searchMeals.js":
/*!*******************************************!*\
  !*** ./src/modules/events/searchMeals.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ searchMeals)\n/* harmony export */ });\nfunction searchMeals() {\n  var searchInput = document.querySelector(\"#search-input\");\n  if (searchInput) {\n    searchInput.addEventListener(\"keydown\", function (event) {\n      var query = event.target.value.trim();\n      if (event.key === \"Enter\" && query) {\n        var currentUrl = window.location.pathname;\n        var newUrl = \"/meals\";\n        if (currentUrl !== newUrl) {\n          window.history.pushState({\n            query: query\n          }, \"\", newUrl);\n          window.location.pathname = newUrl;\n        }\n      }\n    });\n  }\n}\n\n//# sourceURL=webpack://webpack-latest/./src/modules/events/searchMeals.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cd29fad1a9d85e099429")
/******/ })();
/******/ 
/******/ }
);