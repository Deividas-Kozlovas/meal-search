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

/***/ "./src/modules/ui/renderCommunity.js":
/*!*******************************************!*\
  !*** ./src/modules/ui/renderCommunity.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderCommunity)\n/* harmony export */ });\n/* harmony import */ var _components_comunity_communityComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/comunity/communityComponent */ \"./src/components/comunity/communityComponent.js\");\n/* harmony import */ var _components_comunity_rewievData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/comunity/rewievData */ \"./src/components/comunity/rewievData.js\");\n\n\nfunction renderCommunity() {\n  var community = document.querySelector(\"#community\");\n  if (community) {\n    community.innerHTML = \"\";\n    community.innerHTML = (0,_components_comunity_communityComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_components_comunity_rewievData__WEBPACK_IMPORTED_MODULE_1__.rewiev);\n  } else {\n    console.error(\"Community section was not found\");\n  }\n}\n\n//# sourceURL=webpack://webpack-latest/./src/modules/ui/renderCommunity.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("13c74974bcd82a9b22ee")
/******/ })();
/******/ 
/******/ }
);