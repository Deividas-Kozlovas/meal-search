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

/***/ "./src/components/headerComponent/headerComponent.js":
/*!***********************************************************!*\
  !*** ./src/components/headerComponent/headerComponent.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ headerComponent)\n/* harmony export */ });\n/* harmony import */ var _headerComponent_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headerComponent.scss */ \"./src/components/headerComponent/headerComponent.scss\");\n\nvar logoPath = __webpack_require__(/*! ../../images/logo.png */ \"./src/images/logo.png\");\nvar searchIconPath = __webpack_require__(/*! ../../images/search.png */ \"./src/images/search.png\");\nvar userIconPath = __webpack_require__(/*! ../../images/user.png */ \"./src/images/user.png\");\nvar heroImagePath = __webpack_require__(/*! ../../images/hero-image.png */ \"./src/images/hero-image.png\");\nvar tomatoImagePath = __webpack_require__(/*! ../../images/tomato.png */ \"./src/images/tomato.png\");\nfunction headerComponent() {\n  return \"\\n    <header class=\\\"header\\\">\\n      <nav class=\\\"nav\\\">\\n        <div class=\\\"nav__logo\\\">\\n          <a href=\\\"#\\\" class=\\\"nav__logo-link\\\">\\n            <img src=\\\"\".concat(logoPath, \"\\\" alt=\\\"Recipedio Logo\\\" />\\n            <p>Recipedio</p>\\n          </a>\\n        </div>\\n        <ul class=\\\"nav__links\\\">\\n          <li class=\\\"nav__item\\\">\\n            <a href=\\\"#home\\\" class=\\\"nav__link\\\">Home</a>\\n          </li>\\n          <li class=\\\"nav__item\\\">\\n            <a href=\\\"#recipe\\\" class=\\\"nav__link\\\">Recipe</a>\\n          </li>\\n          <li class=\\\"nav__item\\\">\\n            <a href=\\\"#community\\\" class=\\\"nav__link\\\">Community</a>\\n          </li>\\n          <li class=\\\"nav__item\\\">\\n            <a href=\\\"#about\\\" class=\\\"nav__link\\\">About Us</a>\\n          </li>\\n        </ul>\\n        <div class=\\\"nav__auth\\\">\\n          <input type=\\\"text\\\" placeholder=\\\"Search...\\\" class=\\\"nav__search-box\\\" />\\n          <img class=\\\"nav__search-image\\\" src=\\\"\").concat(searchIconPath, \"\\\" alt=\\\"Search Icon\\\" />\\n          <button class=\\\"nav__login-btn\\\">\\n            <img src=\\\"\").concat(userIconPath, \"\\\" alt=\\\"User Icon\\\" />\\n          </button>\\n        </div>\\n      </nav>\\n      <div class=\\\"hero\\\">\\n        <div class=\\\"hero__content\\\">\\n          <h1>Cooking Made Fun and Easy: Unleash Your Inner Chef</h1>\\n          <p>Discover more than <span>10,000 recipes</span> at your fingertips. Find the easiest way to cook with the best recipes!</p>\\n          <a href=\\\"#explore-recipes\\\" class=\\\"hero__btn\\\">Explore Recipes</a>\\n        </div>\\n        <div class=\\\"hero__images\\\">\\n          <img src=\\\"\").concat(heroImagePath, \"\\\" alt=\\\"Hero Image\\\" class=\\\"hero__image\\\" />\\n          <img src=\\\"\").concat(tomatoImagePath, \"\\\" alt=\\\"Tomato Image\\\" class=\\\"hero__image-tomato\\\" />\\n        </div>\\n      </div>\\n    </header>\\n  \");\n}\n\n//# sourceURL=webpack://webpack-latest/./src/components/headerComponent/headerComponent.js?");

/***/ }),

/***/ "./src/components/headerComponent/headerComponent.scss":
/*!*************************************************************!*\
  !*** ./src/components/headerComponent/headerComponent.scss ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      (function() {\n        var localsJsonString = undefined;\n        // 1732034711351\n        var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {});\n        // only invalidate when locals change\n        if (\n          module.hot.data &&\n          module.hot.data.value &&\n          module.hot.data.value !== localsJsonString\n        ) {\n          module.hot.invalidate();\n        } else {\n          module.hot.accept();\n        }\n        module.hot.dispose(function(data) {\n          data.value = localsJsonString;\n          cssReload();\n        });\n      })();\n    }\n  \n\n//# sourceURL=webpack://webpack-latest/./src/components/headerComponent/headerComponent.scss?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("401ab0dc238f3e81341b")
/******/ })();
/******/ 
/******/ }
);