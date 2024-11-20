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

/***/ "./src/components/community/communityComponent.js":
/*!********************************************************!*\
  !*** ./src/components/community/communityComponent.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ communityComponent)\n/* harmony export */ });\nvar star = __webpack_require__(/*! ../../images/icons/star.png */ \"./src/images/icons/star.png\");\nfunction communityComponent(reviews) {\n  return \"\\n    <div class=\\\"community-section\\\">\\n      <h4 class=\\\"community-section__title\\\">From Our Community</h4>\\n      <div class=\\\"community-section__cards\\\">\\n        \".concat(reviews.map(function (review) {\n    return \"\\n            <div class=\\\"community-card\\\">\\n              <div class=\\\"community-card__user\\\">\\n                <div class=\\\"community-card__user-image\\\">\\n                  <img \\n                    src=\\\"\".concat(review.authoImage || \"default-author.png\", \"\\\" \\n                    alt=\\\"\").concat(review.author || \"Anonymous\", \"'s Profile Picture\\\" \\n                    class=\\\"community-card__author-image\\\"\\n                  />\\n                </div>\\n                <div class=\\\"community-card__user-info\\\">\\n                  <h3 class=\\\"community-card__title\\\">\").concat(review.title || \"Untitled\", \"</h3>\\n                  <p class=\\\"community-card__author\\\">By \").concat(review.author || \"Anonymous\", \"</p>\\n                </div>\\n              </div>\\n              <div class=\\\"community-card__content\\\">\\n                <div class=\\\"community-card__rating\\\">\\n                  <img \\n                    src=\\\"\").concat(star, \"\\\" \\n                    alt=\\\"Review star\\\" \\n                    class=\\\"community-card__star\\\"\\n                  />\\n                </div>\\n                <p class=\\\"community-card__description\\\">\").concat(review.description || \"No description provided.\", \"</p>\\n              </div>\\n              <div class=\\\"community-card__meal\\\">\\n                <img \\n                  src=\\\"\").concat(review.mealImage || \"default-meal.png\", \"\\\" \\n                  alt=\\\"\").concat(review.title || \"Untitled\", \"\\\" \\n                  class=\\\"community-card__meal-image\\\"\\n                />\\n              </div>\\n              <div class=\\\"community-card__actions\\\">\\n                <span class=\\\"community-card__likes\\\">\\u2764\\uFE0F \").concat(review.likes || 0, \"</span>\\n                <span class=\\\"community-card__share\\\">\\uD83D\\uDD17 Share</span>\\n              </div>\\n            </div>\\n          \");\n  }).join(\"\"), \"\\n      </div>\\n    </div>\\n  \");\n}\n\n//# sourceURL=webpack://webpack-latest/./src/components/community/communityComponent.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ef13fe1a36d68a968f2f")
/******/ })();
/******/ 
/******/ }
);