"use strict";
self["webpackHotUpdatemeal_search"]("main",{

/***/ "./src/modules/events/navigation.js":
/*!******************************************!*\
  !*** ./src/modules/events/navigation.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ navigation)
/* harmony export */ });
/* harmony import */ var _ui_renderDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/renderDom */ "./src/modules/ui/renderDom.js");
/* harmony import */ var _pages_homePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/homePage */ "./src/pages/homePage.js");
/* harmony import */ var _listMealsByFirstLetter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listMealsByFirstLetter */ "./src/modules/events/listMealsByFirstLetter.js");
/* harmony import */ var _searchMeals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchMeals */ "./src/modules/events/searchMeals.js");
/* harmony import */ var _pages_mealsPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/mealsPage */ "./src/pages/mealsPage.js");
/* harmony import */ var _api_getSixMeals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/getSixMeals */ "./src/modules/api/getSixMeals.js");
/* harmony import */ var _pages_aboutPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/aboutPage */ "./src/pages/aboutPage.js");
/* harmony import */ var _pages_communityPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/communityPage */ "./src/pages/communityPage.js");
/* harmony import */ var _ui_renderMeals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/renderMeals */ "./src/modules/ui/renderMeals.js");
/* harmony import */ var _events_getRandomMeal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../events/getRandomMeal */ "./src/modules/events/getRandomMeal.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }










function navigation() {
  return _navigation.apply(this, arguments);
}
function _navigation() {
  _navigation = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var renderPage, _renderPage;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _renderPage = function _renderPage3() {
            _renderPage = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(pageName) {
              var homepageContent, mealData;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.t0 = pageName;
                    _context2.next = _context2.t0 === "home" ? 3 : _context2.t0 === "recipe" ? 10 : _context2.t0 === "about" ? 21 : _context2.t0 === "community" ? 23 : 25;
                    break;
                  case 3:
                    _context2.next = 5;
                    return (0,_pages_homePage__WEBPACK_IMPORTED_MODULE_1__["default"])();
                  case 5:
                    homepageContent = _context2.sent;
                    (0,_ui_renderDom__WEBPACK_IMPORTED_MODULE_0__["default"])(homepageContent, "#app", "Home page was not found");
                    (0,_listMealsByFirstLetter__WEBPACK_IMPORTED_MODULE_2__["default"])();

                    // Call searchMeals with a proper function reference
                    // You need to pass data (mealData) and query when calling renderMeals
                    (0,_searchMeals__WEBPACK_IMPORTED_MODULE_3__["default"])(_ui_renderMeals__WEBPACK_IMPORTED_MODULE_8__["default"], "Home page search", _events_getRandomMeal__WEBPACK_IMPORTED_MODULE_9__["default"]);
                    return _context2.abrupt("break", 26);
                  case 10:
                    _context2.prev = 10;
                    _context2.next = 13;
                    return (0,_api_getSixMeals__WEBPACK_IMPORTED_MODULE_5__["default"])();
                  case 13:
                    mealData = _context2.sent;
                    (0,_ui_renderDom__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_pages_mealsPage__WEBPACK_IMPORTED_MODULE_4__["default"])(mealData, _ui_renderMeals__WEBPACK_IMPORTED_MODULE_8__["default"], _events_getRandomMeal__WEBPACK_IMPORTED_MODULE_9__["default"]), "#app", "Meals page was not found", _events_getRandomMeal__WEBPACK_IMPORTED_MODULE_9__["default"]);
                    _context2.next = 20;
                    break;
                  case 17:
                    _context2.prev = 17;
                    _context2.t1 = _context2["catch"](10);
                    console.error("Error fetching recipe meals:", _context2.t1);
                  case 20:
                    return _context2.abrupt("break", 26);
                  case 21:
                    (0,_ui_renderDom__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_pages_aboutPage__WEBPACK_IMPORTED_MODULE_6__["default"])(), "#app", "About page was not found");
                    return _context2.abrupt("break", 26);
                  case 23:
                    (0,_ui_renderDom__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_pages_communityPage__WEBPACK_IMPORTED_MODULE_7__["default"])(), "#app", "Community page was not found");
                    return _context2.abrupt("break", 26);
                  case 25:
                    console.log("Page not found");
                  case 26:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, null, [[10, 17]]);
            }));
            return _renderPage.apply(this, arguments);
          };
          renderPage = function _renderPage2(_x2) {
            return _renderPage.apply(this, arguments);
          };
          document.body.addEventListener("click", /*#__PURE__*/function () {
            var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
              var clickedElement, pageName;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    clickedElement = event.target;
                    if (!(clickedElement.tagName === "A" && clickedElement.classList.contains("nav-link"))) {
                      _context.next = 6;
                      break;
                    }
                    pageName = clickedElement.getAttribute("href").substring(1);
                    event.preventDefault();
                    _context.next = 6;
                    return renderPage(pageName);
                  case 6:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
        case 3:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _navigation.apply(this, arguments);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("55b68ff22add75ddfa36")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.77bd504b9a5296bf1b7c.hot-update.js.map