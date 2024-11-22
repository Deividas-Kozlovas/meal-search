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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _modules_ui_renderComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ui/renderComponents */ \"./src/modules/ui/renderComponents.js\");\n/* harmony import */ var _components_headerComponent_headerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/headerComponent/headerComponent */ \"./src/components/headerComponent/headerComponent.js\");\n/* harmony import */ var _components_discover_discoverComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/discover/discoverComponent */ \"./src/components/discover/discoverComponent.js\");\n/* harmony import */ var _components_about_aboutComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about/aboutComponent */ \"./src/components/about/aboutComponent.js\");\n/* harmony import */ var _components_community_communityComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/community/communityComponent */ \"./src/components/community/communityComponent.js\");\n/* harmony import */ var _components_mobileApp_mobileAppComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mobileApp/mobileAppComponent */ \"./src/components/mobileApp/mobileAppComponent.js\");\n/* harmony import */ var _components_footer_footerComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footerComponent */ \"./src/components/footer/footerComponent.js\");\n/* harmony import */ var _modules_api_getSixMeals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/api/getSixMeals */ \"./src/modules/api/getSixMeals.js\");\n/* harmony import */ var _components_community_rewievData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/community/rewievData */ \"./src/components/community/rewievData.js\");\n\n\n\n\n\n\n\n\n\n\n(0,_modules_ui_renderComponents__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_components_headerComponent_headerComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), \"#header\", \"Header section was not found\");\nvar sixMeals = await (0,_modules_api_getSixMeals__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_ui_renderComponents__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_components_discover_discoverComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(sixMeals), \"#discover\", \"Discover section was not found\");\n(0,_modules_ui_renderComponents__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_components_about_aboutComponent__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), \"#about\", \"About section was not found\");\n(0,_modules_ui_renderComponents__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_components_community_communityComponent__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_components_community_rewievData__WEBPACK_IMPORTED_MODULE_9__.rewiev), \"#community\", \"Community section was not found\");\n(0,_modules_ui_renderComponents__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_components_mobileApp_mobileAppComponent__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(), \"#mobileApp\", \"Mobile section was not found\");\n(0,_modules_ui_renderComponents__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_components_footer_footerComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(), \"#footer\", \"Footer section was not found\");\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://webpack-latest/./src/app.js?");

/***/ }),

/***/ "./src/modules/ui/renderComponents.js":
/*!********************************************!*\
  !*** ./src/modules/ui/renderComponents.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderComponent)\n/* harmony export */ });\nfunction renderComponent(component, sectionId, message) {\n  var renderSection = document.querySelector(sectionId);\n  if (renderSection) {\n    renderSection.innerHTML = \"\";\n    renderSection.innerHTML = component;\n  } else {\n    console.error(message);\n  }\n}\n\n//# sourceURL=webpack://webpack-latest/./src/modules/ui/renderComponents.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("50b3bc1f6e86de1a7fc1")
/******/ })();
/******/ 
/******/ }
);