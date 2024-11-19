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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ui_renderDiscover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ui/renderDiscover */ \"./src/modules/ui/renderDiscover.js\");\n/* harmony import */ var _modules_ui_renderHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ui/renderHeader */ \"./src/modules/ui/renderHeader.js\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n\n\n\n(0,_modules_ui_renderHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_ui_renderDiscover__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://webpack-latest/./src/app.js?");

/***/ }),

/***/ "./src/modules/ui/renderDiscover.js":
/*!******************************************!*\
  !*** ./src/modules/ui/renderDiscover.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderDiscover)\n/* harmony export */ });\n/* harmony import */ var _components_discover_discoverComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/discover/discoverComponent */ \"./src/components/discover/discoverComponent.js\");\n\nfunction renderDiscover() {\n  var discover = document.querySelector(\"#discover\");\n  if (discover) {\n    discover.innerHTML = \"\";\n    discover.innerHTML = (0,_components_discover_discoverComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  } else {\n    console.error(\"discover element was not found\");\n  }\n}\n\n//# sourceURL=webpack://webpack-latest/./src/modules/ui/renderDiscover.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a7456259460da91b0b01")
/******/ })();
/******/ 
/******/ }
);