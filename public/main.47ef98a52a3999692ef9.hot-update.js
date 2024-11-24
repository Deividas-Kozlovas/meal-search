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

/***/ "./src/pages/mealsPage.js":
/*!********************************!*\
  !*** ./src/pages/mealsPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mealsPage)\n/* harmony export */ });\n/* harmony import */ var _components_searchFIlter_searchFilterComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/searchFIlter/searchFilterComponent */ \"./src/components/searchFIlter/searchFilterComponent.js\");\n\nfunction mealsPage() {\n  var meals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var mealsHTML = meals.map(function (meal) {\n    return \"\\n        <div class=\\\"meal-item\\\">\\n          <h3>\".concat(meal.strMeal, \"</h3>\\n          <p>\").concat(meal.strInstructions, \"</p>\\n          <img src=\\\"\").concat(meal.strMealThumb, \"\\\" alt=\\\"\").concat(meal.strMeal, \"\\\" />\\n        </div>\\n      \");\n  }).join(\"\");\n  return \"\\n    \".concat((0,_components_searchFIlter_searchFilterComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), \"\\n    <h1>Explore meals tailored to your taste</h1>\\n\\n    <div class=\\\"meals-page\\\">\\n      <div id=\\\"meals-list\\\">\\n        \").concat(mealsHTML, \"\\n      </div>\\n    </div>\\n  \");\n}\n\n//# sourceURL=webpack://webpack-latest/./src/pages/mealsPage.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("453417713e0e768921e8")
/******/ })();
/******/ 
/******/ }
);