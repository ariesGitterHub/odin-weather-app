/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --light: #eaf1ec;\n  --dark: #000000;\n  --title: #ebcc84;\n  /* --bkgd: #bdb792; */\n   /* --bkgd: #fff9c49d; */\n      --bkgd: #969a99;\n  /* --btn-color: #4a90e2; */\n  /* --btn-color: #007bff; */\n  /* --btn-color: #E3F2FD; */\n    --btn-color: #9fc2dc;\n  --gradient-dk: #0c5baf;\n  --gradient-lt: #a9c3e1;\n\n  --font-hand: \"Caveat\", cursive;\n  --font-sans: \"Josefin Sans\", sans-serif;\n  /* --font-sans: 'Noto Sans', Arial, sans-serif; */\n  }\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--bkgd);\n  display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nheader {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n}\n\n#title-content {\n  /* width: 100vw; */\n  background-color: var(--bkgd);\n\n  display: flex;\n    justify-content: center;\n    align-items: baseline;\n  padding: 1rem 1rem 0 1rem;\n}\n\n#title-text {\n  /* color: var(--title); */\n  color: var(--dark);\n  font-family: var(--font-hand);\n  font-size: 2.75rem;\n  font-weight: 900;\n}\n\n#title-img1 {\n  height: 2rem;\n  width: auto;\n  \n}\n\n@keyframes shake {\n    /* 0% { transform: translateX(0) rotate(0deg); }\n    25% { transform: translateX(-5px) rotate(-5deg); }\n    50% { transform: translateX(5px) rotate(5deg); }\n    75% { transform: translateX(-5px) rotate(-5deg); }\n    100% { transform: translateX(0) rotate(0deg); } */\n\n      0% { transform: rotateX(0deg); }\n    100% { transform: rotateX(360deg); } \n}\n\n.shake {\n    animation: shake 0.5s ease;\n}\n\n#title-img2 {\n  height: 2rem;\n  width: auto;\n}\n\n@keyframes spin {\n    0% { transform: rotateY(0deg); }\n    100% { transform: rotateY(-360deg); }\n}\n\n.spin {\n    animation: spin 0.5s linear; /* Adjust duration for speed */\n}\n\n\n/* #title-content img {\n  height: 3rem;\n  width: auto;\n} */\n\n#search-content {\n  /* width: 100vw; */\n  background-color: var(--bkgd);\n  display: flex;\n    justify-content: center;\n    align-items: center;\n    /* gap: .25rem; */\n  padding: 0 1rem 1rem 1rem;\n}\n\n#search-input, #search-btn {\nheight: 2rem;\n\n/* display: flex;\n  justify-content: center;\n  align-items: center; */\nfont-family: var(--font-sans);\nfont-size: 1rem;\npadding: .5rem;\n}\n\n/* #search-input {\nwidth: 25ch;\nborder-top-left-radius: 1rem;\nborder-bottom-left-radius: 1rem;\n}\n\n#search-btn {\nwidth: 10ch;\nborder-top-right-radius: 1rem;\nborder-bottom-right-radius: 1rem;\n} */\n\n#search-input {\n    max-width: 21ch;\n    background-color: var(--light);\n    border-top-left-radius: 1rem;\n    border-bottom-left-radius: 1rem;\n    /* padding: 0.25rem 1rem; */\n    border: 2px solid var(--btn-color);\n    /* box-shadow: 0 4px 8px #0000001a; */\n      box-shadow: 0 4px 8px #000000;\n    font-size: 1rem;\n    outline: none;\n    transition: border-color 0.3s, box-shadow 0.3s;\n}\n\n#search-btn {\n    width: 8ch;\n    border-top-right-radius: 1rem;\n    border-bottom-right-radius: 1rem;\n    /* padding: 0.5rem; */\n        /* box-shadow: 0 4px 8px #0000001a; */\n      box-shadow: 0 4px 8px #000000;\n    background-color: var(--btn-color);\n    color: var(--dark);\n    border: none;\n    cursor: pointer;\n    transition: background-color 0.3s, transform 0.2s;\n}\n\n#search-btn:hover {\n    /* background-color: #007bff; */\n          background-image: linear-gradient(to bottom right, var(--gradient-dk), var(--gradient-lt));\n    transform: translateX(2.5px);\n}\n\n#search-btn:active {\n    transform: translateX(0);\n}\n\n#btn-content {\n  /* width: 100vw; */\nmargin: auto;\n  /* width: 33.25ch; */\n      width: 300px;\n  background-color: var(--bkgd);\n  display: flex;\n    justify-content: space-around;\n    align-items: center;\n    gap: .25rem;\n  padding: 0 1rem 1rem 1rem;\n}\n\n#world-btn, #temp-scale-btn, #usa-btn {\n  height: 3rem;\n    width: 3rem;\n    border-radius: 50%;\n /* box-shadow: 0 4px 8px #0000001a; */\n  box-shadow: 0 4px 8px #000000;\n    /* padding: 0.5rem; */\n    background-color: var(--btn-color);\n    color: var(--light);\n    border: none;\n    cursor: pointer;\n    outline: 1px solid var(--light);\n    transition: background-color 0.3s, transform 0.2s;\n}\n\n#temp-scale-btn, #usa-btn {\n  border: .125rem solid var(--dark);\n  padding: .15rem;\n}\n\n#usa-btn {\n  padding: .15rem;\n}\n\n\n#world-btn:hover, #temp-scale-btn:hover, #usa-btn:hover {\n    /* background-color: #007bff; */\n      background-image: linear-gradient(to bottom right, var(--gradient-dk), var(--gradient-lt));\n    transform: scale(1.1);\n}\n\n#world-btn:active, #temp-scale-btn:active,#usa-btn:active {\n    transform: scale(.9);\n}\n\n#temp-scale-img {\n  height: 1.75rem;\n  width: auto;\n}\n\n\n\n/* label {\n  display: flex;\n  cursor: pointer;\n} */\n\n/* Hide the checkbox */\n/* input[type=\"checkbox\"] {\n  display: none; \n} */\n\n/* #toggle-slider {\n  height: 3rem;\n  width: 6rem;\n  display: flex;\n    justify-content: center;\n    align-items: center;\n  background-color: var(--light);\n  border-radius: 3rem;\n  color: var(--dark);\n  position: relative;\n  transition: background-color 0.3s;\n  font-size: 2rem;\n} */\n\n/* input:checked + #toggle-slider {\n  background-color: var(--light);\n} */\n\n/* #toggle-slider::before {\n  content: '';\n  position: absolute;\n  height: 2.75rem;\n  width: 2.75rem;\n\n  left: 2px;\n  bottom: 2px;\n  background-color: var(--btn-color);\n  border-radius: 50%;\n  transition: transform 0.3s;\n} */\n\n/* input:checked + #toggle-slider::before {\n  transform: translateX(3rem);\n} */\n\n#data-content {\n  /* width: 33.25ch; */\n  width: fit-content;\n    /* width: 320px; */\n  display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  line-height: 1.5;\n}\n\n#location-content {\n      width: 320px;\n  /* width: 100vw; */\n/* margin: auto; */\n  /* width: 33.25ch; */\n  background-color: var(--btn-color);\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n          box-shadow: 0 4px 8px #000000;\n  color: var(--dark);\n  display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    /* gap: .25rem; */\n  font-family: var(--font-sans);\n\n  /* padding: 0 1rem 1rem 1rem; */\n  /* margin: 0 .25rem 0 .25rem; */\n\n   margin: .25rem;\n  padding: .5rem;\n  /* text-align: center; */\n}\n\n#location-name {\n  font-size: 2rem;\n  margin: 0;\n  text-align: center;\n}\n\n#resolved-address, #latitude-longitude {\n  font-size: 1rem;\n  text-align: center;\n}\n\n#weather-content {\n      width: 320px;\n  /* width: 100vw; */\n  /* height: fit-content; */\n/* margin: auto; */\n  /* width: 33.25ch; */\n  background-color: var(--light);\n  border: .25rem solid var(--light);\n  border-bottom-left-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n        box-shadow: 0 4px 8px #000000;\n  color: var(--dark);\n  display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: .25rem;\n  font-family: var(--font-sans);\n  padding: .5rem;\n}\n\n\n\n#current-conditions {\n  font-size: 1.25rem;\n  /* text-align: left; */\n}\n\n/* #priority-numbers {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n} */\n\n#weather-icon {\n  height: 15rem;\n  width: auto;\n\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-weather-app/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/c.svg":
/*!**************************!*\
  !*** ./src/assets/c.svg ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/5e1629e4e375a575a57d7d0b083f06a2.svg\");\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/c.svg?");

/***/ }),

/***/ "./src/assets/clear-day.svg":
/*!**********************************!*\
  !*** ./src/assets/clear-day.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/68793c443730f86c18716487a66c6015.svg\");\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/clear-day.svg?");

/***/ }),

/***/ "./src/assets/clear-night.svg":
/*!************************************!*\
  !*** ./src/assets/clear-night.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/05fec815fef89aa568ca8e84b0879d3a.svg\");\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/clear-night.svg?");

/***/ }),

/***/ "./src/assets/cloudy.svg":
/*!*******************************!*\
  !*** ./src/assets/cloudy.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/38b1fe28586af1841173563f46772c28.svg\");\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/cloudy.svg?");

/***/ }),

/***/ "./src/assets/earth1.svg":
/*!*******************************!*\
  !*** ./src/assets/earth1.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/9c81b3e3676e4a63a8dec3b76fe36371.svg\");\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/earth1.svg?");

/***/ }),

/***/ "./src/assets/f.svg":
/*!**************************!*\
  !*** ./src/assets/f.svg ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/074306aaacbbc19d494313246e453aac.svg\");\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/f.svg?");

/***/ }),

/***/ "./src/assets/fog.svg":
/*!****************************!*\
  !*** ./src/assets/fog.svg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/81915ac7837f321f151589989e6185dd.svg\");\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/fog.svg?");

/***/ }),

/***/ "./src/assets/hail.svg":
/*!*****************************!*\
  !*** ./src/assets/hail.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/7333ffc8363075b869b6acda47c84495.svg\");\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/hail.svg?");

/***/ }),

/***/ "./src/assets/partly-cloudy-day.svg":
/*!******************************************!*\
  !*** ./src/assets/partly-cloudy-day.svg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/566eba17dabfacb60877532e3f88b4e0.svg\");\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/partly-cloudy-day.svg?");

/***/ }),

/***/ "./src/assets/partly-cloudy-night.svg":
/*!********************************************!*\
  !*** ./src/assets/partly-cloudy-night.svg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/77ef03360a209711010c08a8992a1e6c.svg\");\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/partly-cloudy-night.svg?");

/***/ }),

/***/ "./src/assets/rain-snow-showers-day.svg":
/*!**********************************************!*\
  !*** ./src/assets/rain-snow-showers-day.svg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/145bb21a85fb6ea89c4bc1a16540c93a.svg\");\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/rain-snow-showers-day.svg?");

/***/ }),

/***/ "./src/assets/rain-snow-showers-night.svg":
/*!************************************************!*\
  !*** ./src/assets/rain-snow-showers-night.svg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/f2c23aaad231a3dc0a8def9afba1a128.svg\");\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/rain-snow-showers-night.svg?");

/***/ }),

/***/ "./src/assets/rain-snow.svg":
/*!**********************************!*\
  !*** ./src/assets/rain-snow.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/d14220a7b117b0128632b65ac104c39e.svg\");\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/rain-snow.svg?");

/***/ }),

/***/ "./src/assets/rain.svg":
/*!*****************************!*\
  !*** ./src/assets/rain.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/e819c327ffda381bd17153a0fbf79ba2.svg\");\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/rain.svg?");

/***/ }),

/***/ "./src/assets/showers-day.svg":
/*!************************************!*\
  !*** ./src/assets/showers-day.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/54b6f3386d3bc095091667e3d8996a06.svg\");\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/showers-day.svg?");

/***/ }),

/***/ "./src/assets/showers-night.svg":
/*!**************************************!*\
  !*** ./src/assets/showers-night.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/3966145d20126d1cd169a1eff237557b.svg\");\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/showers-night.svg?");

/***/ }),

/***/ "./src/assets/sleet.svg":
/*!******************************!*\
  !*** ./src/assets/sleet.svg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/550edb5bd3a90ae6758dc29c3c3e1395.svg\");\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/sleet.svg?");

/***/ }),

/***/ "./src/assets/snow-showers-day.svg":
/*!*****************************************!*\
  !*** ./src/assets/snow-showers-day.svg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/4c273b972f936211da4de2f1be2e558c.svg\");\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/snow-showers-day.svg?");

/***/ }),

/***/ "./src/assets/snow-showers-night.svg":
/*!*******************************************!*\
  !*** ./src/assets/snow-showers-night.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/7be492c9decca465989fb36e2d4181e2.svg\");\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/snow-showers-night.svg?");

/***/ }),

/***/ "./src/assets/snow.svg":
/*!*****************************!*\
  !*** ./src/assets/snow.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/c0b9706e8bfd598648a6fda7161ac5b9.svg\");\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/snow.svg?");

/***/ }),

/***/ "./src/assets/thunder-rain.svg":
/*!*************************************!*\
  !*** ./src/assets/thunder-rain.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/057051635b154c43c6f5d8723ecf93e4.svg\");\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/thunder-rain.svg?");

/***/ }),

/***/ "./src/assets/thunder-showers-day.svg":
/*!********************************************!*\
  !*** ./src/assets/thunder-showers-day.svg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/5fbe0e06aa1883d0e85374d8681308d5.svg\");\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/thunder-showers-day.svg?");

/***/ }),

/***/ "./src/assets/thunder-showers-night.svg":
/*!**********************************************!*\
  !*** ./src/assets/thunder-showers-night.svg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/c611210724e1dc07f92efa3fced42576.svg\");\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/thunder-showers-night.svg?");

/***/ }),

/***/ "./src/assets/thunder.svg":
/*!********************************!*\
  !*** ./src/assets/thunder.svg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/1656dbcbaf23ce83e9f4cb656d1a1396.svg\");\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/thunder.svg?");

/***/ }),

/***/ "./src/assets/titleWeathervane.svg":
/*!*****************************************!*\
  !*** ./src/assets/titleWeathervane.svg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/e7ea29b758901c1c4a4540f09ff945af.svg\");\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/titleWeathervane.svg?");

/***/ }),

/***/ "./src/assets/titleWindAndLeaves.svg":
/*!*******************************************!*\
  !*** ./src/assets/titleWindAndLeaves.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/52a455e40f94849ae88982833663a626.svg\");\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/titleWindAndLeaves.svg?");

/***/ }),

/***/ "./src/assets/usa.svg":
/*!****************************!*\
  !*** ./src/assets/usa.svg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/5ea05c0db7b70dfa19e984a5defa56e3.svg\");\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/usa.svg?");

/***/ }),

/***/ "./src/assets/wind.svg":
/*!*****************************!*\
  !*** ./src/assets/wind.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/5f860efb9bc2738d69750e2c754c2b05.svg\");\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/wind.svg?");

/***/ }),

/***/ "./src/assets/sound-click.mp3":
/*!************************************!*\
  !*** ./src/assets/sound-click.mp3 ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"assets/sound-click.mp3\");\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/sound-click.mp3?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-weather-app/./src/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/data/stateCapitals.js":
/*!***********************************!*\
  !*** ./src/data/stateCapitals.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   stateCapitals: () => (/* binding */ stateCapitals)\n/* harmony export */ });\nconst stateCapitals = [\n  {\n    abbr: \"AL\",\n    name: \"Alabama\",\n    capital: \"Montgomery\",\n  },\n  {\n    abbr: \"AK\",\n    name: \"Alaska\",\n    capital: \"Juneau\",\n  },\n  {\n    abbr: \"AZ\",\n    name: \"Arizona\",\n    capital: \"Phoenix\",\n  },\n  {\n    abbr: \"AR\",\n    name: \"Arkansas\",\n    capital: \"Little Rock\",\n  },\n  {\n    abbr: \"CA\",\n    name: \"California\",\n    capital: \"Sacramento\",\n  },\n  {\n    abbr: \"CO\",\n    name: \"Colorado\",\n    capital: \"Denver\",\n  },\n  {\n    abbr: \"CT\",\n    name: \"Connecticut\",\n    capital: \"Hartford\",\n  },\n  {\n    abbr: \"DE\",\n    name: \"Delaware\",\n    capital: \"Dover\",\n  },\n  {\n    abbr: \"FL\",\n    name: \"Florida\",\n    capital: \"Tallahassee\",\n  },\n  {\n    abbr: \"GA\",\n    name: \"Georgia\",\n    capital: \"Atlanta\",\n  },\n  {\n    abbr: \"HI\",\n    name: \"Hawaii\",\n    capital: \"Honolulu\",\n  },\n  {\n    abbr: \"ID\",\n    name: \"Idaho\",\n    capital: \"Boise\",\n  },\n  {\n    abbr: \"IL\",\n    name: \"Illinois\",\n    capital: \"Springfield\",\n  },\n  {\n    abbr: \"IN\",\n    name: \"Indiana\",\n    capital: \"Indianapolis\",\n  },\n  {\n    abbr: \"IA\",\n    name: \"Iowa\",\n    capital: \"Des Moines\",\n  },\n  {\n    abbr: \"KS\",\n    name: \"Kansas\",\n    capital: \"Topeka\",\n  },\n  {\n    abbr: \"KY\",\n    name: \"Kentucky\",\n    capital: \"Frankfort\",\n  },\n  {\n    abbr: \"LA\",\n    name: \"Louisiana\",\n    capital: \"Baton Rouge\",\n  },\n  {\n    abbr: \"ME\",\n    name: \"Maine\",\n    capital: \"Augusta\",\n  },\n  {\n    abbr: \"MD\",\n    name: \"Maryland\",\n    capital: \"Annapolis\",\n  },\n  {\n    abbr: \"MA\",\n    name: \"Massachusetts\",\n    capital: \"Boston\",\n  },\n  {\n    abbr: \"MI\",\n    name: \"Michigan\",\n    capital: \"Lansing\",\n  },\n  {\n    abbr: \"MN\",\n    name: \"Minnesota\",\n    capital: \"Saint Paul\",\n  },\n  {\n    abbr: \"MS\",\n    name: \"Mississippi\",\n    capital: \"Jackson\",\n  },\n  {\n    abbr: \"MO\",\n    name: \"Missouri\",\n    capital: \"Jefferson City\",\n  },\n  {\n    abbr: \"MT\",\n    name: \"Montana\",\n    capital: \"Helena\",\n  },\n  {\n    abbr: \"NE\",\n    name: \"Nebraska\",\n    capital: \"Lincoln\",\n  },\n  {\n    abbr: \"NV\",\n    name: \"Nevada\",\n    capital: \"Carson City\",\n  },\n  {\n    abbr: \"NH\",\n    name: \"New Hampshire\",\n    capital: \"Concord\",\n  },\n  {\n    abbr: \"NJ\",\n    name: \"New Jersey\",\n    capital: \"Trenton\",\n  },\n  {\n    abbr: \"NM\",\n    name: \"New Mexico\",\n    capital: \"Santa Fe\",\n  },\n  {\n    abbr: \"NY\",\n    name: \"New York\",\n    capital: \"Albany\",\n  },\n  {\n    abbr: \"NC\",\n    name: \"North Carolina\",\n    capital: \"Raleigh\",\n  },\n  {\n    abbr: \"ND\",\n    name: \"North Dakota\",\n    capital: \"Bismarck\",\n  },\n  {\n    abbr: \"OH\",\n    name: \"Ohio\",\n    capital: \"Columbus\",\n  },\n  {\n    abbr: \"OK\",\n    name: \"Oklahoma\",\n    capital: \"Oklahoma City\",\n  },\n  {\n    abbr: \"OR\",\n    name: \"Oregon\",\n    capital: \"Salem\",\n  },\n  {\n    abbr: \"PA\",\n    name: \"Pennsylvania\",\n    capital: \"Harrisburg\",\n  },\n  {\n    abbr: \"RI\",\n    name: \"Rhode Island\",\n    capital: \"Providence\",\n  },\n  {\n    abbr: \"SC\",\n    name: \"South Carolina\",\n    capital: \"Columbia\",\n  },\n  {\n    abbr: \"SD\",\n    name: \"South Dakota\",\n    capital: \"Pierre\",\n  },\n  {\n    abbr: \"TN\",\n    name: \"Tennessee\",\n    capital: \"Nashville\",\n  },\n  {\n    abbr: \"TX\",\n    name: \"Texas\",\n    capital: \"Austin\",\n  },\n  {\n    abbr: \"UT\",\n    name: \"Utah\",\n    capital: \"Salt Lake City\",\n  },\n  {\n    abbr: \"VT\",\n    name: \"Vermont\",\n    capital: \"Montpelier\",\n  },\n  {\n    abbr: \"VA\",\n    name: \"Virginia\",\n    capital: \"Richmond\",\n  },\n  {\n    abbr: \"WA\",\n    name: \"Washington\",\n    capital: \"Olympia\",\n  },\n  {\n    abbr: \"WV\",\n    name: \"West Virginia\",\n    capital: \"Charleston\",\n  },\n  {\n    abbr: \"WI\",\n    name: \"Wisconsin\",\n    capital: \"Madison\",\n  },\n  {\n    abbr: \"WY\",\n    name: \"Wyoming\",\n    capital: \"Cheyenne\",\n  },\n];\n\n\n//# sourceURL=webpack://odin-weather-app/./src/data/stateCapitals.js?");

/***/ }),

/***/ "./src/data/worldCapitals.js":
/*!***********************************!*\
  !*** ./src/data/worldCapitals.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   worldCapitals: () => (/* binding */ worldCapitals)\n/* harmony export */ });\nconst worldCapitals = [\n  {\n    country: \"Afghanistan\",\n    city: \"Kabul\",\n  },\n  {\n    country: \"Albania\",\n    city: \"Tirana\",\n  },\n  {\n    country: \"Algeria\",\n    city: \"Alger\",\n  },\n  {\n    country: \"American Samoa\",\n    city: \"Fagatogo\",\n  },\n  {\n    country: \"Andorra\",\n    city: \"Andorra la Vella\",\n  },\n  {\n    country: \"Angola\",\n    city: \"Luanda\",\n  },\n  {\n    country: \"Anguilla\",\n    city: \"The Valley\",\n  },\n  {\n    country: \"Antigua and Barbuda\",\n    city: \"Saint John's\",\n  },\n  {\n    country: \"Argentina\",\n    city: \"Buenos Aires\",\n  },\n  {\n    country: \"Armenia\",\n    city: \"Yerevan\",\n  },\n  {\n    country: \"Aruba\",\n    city: \"Oranjestad\",\n  },\n  {\n    country: \"Australia\",\n    city: \"Canberra\",\n  },\n  {\n    country: \"Austria\",\n    city: \"Vienna\",\n  },\n  {\n    country: \"Azerbaijan\",\n    city: \"Baku\",\n  },\n  {\n    country: \"Bahamas\",\n    city: \"Nassau\",\n  },\n  {\n    country: \"Bahrain\",\n    city: \"Manama\",\n  },\n  {\n    country: \"Bangladesh\",\n    city: \"Dhaka\",\n  },\n  {\n    country: \"Barbados\",\n    city: \"Bridgetown\",\n  },\n  {\n    country: \"Belarus\",\n    city: \"Minsk\",\n  },\n  {\n    country: \"Belgium\",\n    city: \"Brussels\",\n  },\n  {\n    country: \"Belize\",\n    city: \"Belmopan\",\n  },\n  {\n    country: \"Benin\",\n    city: \"Porto-Novo\",\n  },\n  {\n    country: \"Bermuda\",\n    city: \"Hamilton\",\n  },\n  {\n    country: \"Bhutan\",\n    city: \"Thimphu\",\n  },\n  {\n    country: \"Bolivia\",\n    city: \"La Paz\",\n  },\n  {\n    country: \"Bosnia and Herzegovina\",\n    city: \"Sarajevo\",\n  },\n  {\n    country: \"Botswana\",\n    city: \"Gaborone\",\n  },\n  {\n    country: \"Brazil\",\n    city: \"Brasília\",\n  },\n  {\n    country: \"Brunei\",\n    city: \"Bandar Seri Begawan\",\n  },\n  {\n    country: \"Bulgaria\",\n    city: \"Sofia\",\n  },\n  {\n    country: \"Burkina Faso\",\n    city: \"Ouagadougou\",\n  },\n  {\n    country: \"Burundi\",\n    city: \"Bujumbura\",\n  },\n  {\n    country: \"Cambodia\",\n    city: \"Phnom Penh\",\n  },\n  {\n    country: \"Cameroon\",\n    city: \"Yaounde\",\n  },\n  {\n    country: \"Canada\",\n    city: \"Ottawa\",\n  },\n  {\n    country: \"Cape Verde\",\n    city: \"Praia\",\n  },\n  {\n    country: \"Cayman Islands\",\n    city: \"George Town\",\n  },\n  {\n    country: \"Central African Republic\",\n    city: \"Bangui\",\n  },\n  {\n    country: \"Chad\",\n    city: \"N'Djamena\",\n  },\n  {\n    country: \"Chile\",\n    city: \"Santiago de Chile\",\n  },\n  {\n    country: \"China\",\n    city: \"Peking\",\n  },\n  {\n    country: \"Cocos (Keeling) Islands\",\n    city: \"West Island\",\n  },\n  {\n    country: \"Colombia\",\n    city: \"Bogota\",\n  },\n  {\n    country: \"Comoros\",\n    city: \"Moroni\",\n  },\n  {\n    country: \"Congo\",\n    city: \"Brazzaville\",\n  },\n  {\n    country: \"Cook Islands\",\n    city: \"Avarua\",\n  },\n  {\n    country: \"Costa Rica\",\n    city: \"San José\",\n  },\n  {\n    country: \"Croatia\",\n    city: \"Zagreb\",\n  },\n  {\n    country: \"Cuba\",\n    city: \"Havana\",\n  },\n  {\n    country: \"Cyprus\",\n    city: \"Nicosia\",\n  },\n  {\n    country: \"Czech Republic\",\n    city: \"Prague\",\n  },\n  {\n    country: \"Denmark\",\n    city: \"Copenhagen\",\n  },\n  {\n    country: \"Djibouti\",\n    city: \"Djibouti\",\n  },\n  {\n    country: \"Dominica\",\n    city: \"Roseau\",\n  },\n  {\n    country: \"Dominican Republic\",\n    city: \"Santo Domingo\",\n  },\n  {\n    country: \"East Timor\",\n    city: \"Dili\",\n  },\n  {\n    country: \"Ecuador\",\n    city: \"Quito\",\n  },\n  {\n    country: \"Egypt\",\n    city: \"Cairo\",\n  },\n  {\n    country: \"El Salvador\",\n    city: \"San Salvador\",\n  },\n  {\n    country: \"Equatorial Guinea\",\n    city: \"Malabo\",\n  },\n  {\n    country: \"Eritrea\",\n    city: \"Asmara\",\n  },\n  {\n    country: \"Estonia\",\n    city: \"Tallinn\",\n  },\n  {\n    country: \"Eswatini\",\n    city: \"Mbabane\",\n  },\n  {\n    country: \"Ethiopia\",\n    city: \"Addis Ababa \",\n  },\n  {\n    country: \"Falkland Islands\",\n    city: \"Stanley\",\n  },\n  {\n    country: \"Faroe Islands\",\n    city: \"Tórshavn\",\n  },\n  {\n    country: \"Fiji Islands\",\n    city: \"Suva\",\n  },\n  {\n    country: \"Finland\",\n    city: \"Helsinki\",\n  },\n  {\n    country: \"France\",\n    city: \"Paris\",\n  },\n  {\n    country: \"French Guiana\",\n    city: \"Cayenne\",\n  },\n  {\n    country: \"French Polynesia\",\n    city: \"Papeete\",\n  },\n  {\n    country: \"Gabon\",\n    city: \"Libreville\",\n  },\n  {\n    country: \"Gambia\",\n    city: \"Banjul\",\n  },\n  {\n    country: \"Georgia\",\n    city: \"Tbilisi\",\n  },\n  {\n    country: \"Germany\",\n    city: \"Berlin\",\n  },\n  {\n    country: \"Ghana\",\n    city: \"Accra\",\n  },\n  {\n    country: \"Gibraltar\",\n    city: \"Gibraltar\",\n  },\n  {\n    country: \"Greece\",\n    city: \"Athens\",\n  },\n  {\n    country: \"Greenland\",\n    city: \"Nuuk\",\n  },\n  {\n    country: \"Grenada\",\n    city: \"Saint George's\",\n  },\n  {\n    country: \"Guam\",\n    city: \"Hagåtña\",\n  },\n  {\n    country: \"Guatemala\",\n    city: \"Guatemala City\",\n  },\n  {\n    country: \"Guinea\",\n    city: \"Conakry\",\n  },\n  {\n    country: \"Guinea-Bissau\",\n    city: \"Bissau\",\n  },\n  {\n    country: \"Guyana\",\n    city: \"Georgetown\",\n  },\n  {\n    country: \"Haiti\",\n    city: \"Port-au-Prince\",\n  },\n  {\n    country: \"Honduras\",\n    city: \"Tegucigalpa\",\n  },\n  {\n    country: \"Hong Kong\",\n    city: \"Victoria\",\n  },\n  {\n    country: \"Hungary\",\n    city: \"Budapest\",\n  },\n  {\n    country: \"Iceland\",\n    city: \"Reykjavík\",\n  },\n  {\n    country: \"India\",\n    city: \"New Delhi\",\n  },\n  {\n    country: \"Indonesia\",\n    city: \"Jakarta\",\n  },\n  {\n    country: \"Iran\",\n    city: \"Tehran\",\n  },\n  {\n    country: \"Iraq\",\n    city: \"Baghdad\",\n  },\n  {\n    country: \"Ireland\",\n    city: \"Dublin\",\n  },\n  {\n    country: \"Israel\",\n    city: \"Jerusalem\",\n  },\n  {\n    country: \"Italy\",\n    city: \"Rome\",\n  },\n  {\n    country: \"Ivory Coast\",\n    city: \"Yamoussoukro\",\n  },\n  {\n    country: \"Jamaica\",\n    city: \"Kingston\",\n  },\n  {\n    country: \"Japan\",\n    city: \"Tokyo\",\n  },\n  {\n    country: \"Jordan\",\n    city: \"Amman\",\n  },\n  {\n    country: \"Kazakhstan\",\n    city: \"Astana\",\n  },\n  {\n    country: \"Kenya\",\n    city: \"Nairobi\",\n  },\n  {\n    country: \"Kiribati\",\n    city: \"Tarawa\",\n  },\n  {\n    country: \"Kuwait\",\n    city: \"Kuwait\",\n  },\n  {\n    country: \"Kyrgyzstan\",\n    city: \"Bishkek\",\n  },\n  {\n    country: \"Laos\",\n    city: \"Vientiane\",\n  },\n  {\n    country: \"Latvia\",\n    city: \"Riga\",\n  },\n  {\n    country: \"Lebanon\",\n    city: \"Beirut\",\n  },\n  {\n    country: \"Lesotho\",\n    city: \"Maseru\",\n  },\n  {\n    country: \"Liberia\",\n    city: \"Monrovia\",\n  },\n  {\n    country: \"Libya\",\n    city: \"Tripoli\",\n  },\n  {\n    country: \"Liechtenstein\",\n    city: \"Vaduz\",\n  },\n  {\n    country: \"Lithuania\",\n    city: \"Vilnius\",\n  },\n  {\n    country: \"Luxembourg\",\n    city: \"Luxembourg\",\n  },\n  {\n    country: \"Macao\",\n    city: \"Macao\",\n  },\n  {\n    country: \"North Macedonia\",\n    city: \"Skopje\",\n  },\n  {\n    country: \"Madagascar\",\n    city: \"Antananarivo\",\n  },\n  {\n    country: \"Malawi\",\n    city: \"Lilongwe\",\n  },\n  {\n    country: \"Malaysia\",\n    city: \"Kuala Lumpur\",\n  },\n  {\n    country: \"Maldives\",\n    city: \"Male\",\n  },\n  {\n    country: \"Mali\",\n    city: \"Bamako\",\n  },\n  {\n    country: \"Malta\",\n    city: \"Valletta\",\n  },\n  {\n    country: \"Marshall Islands\",\n    city: \"Majuro\",\n  },\n  {\n    country: \"Martinique\",\n    city: \"Fort-de-France\",\n  },\n  {\n    country: \"Mauritania\",\n    city: \"Nouakchott\",\n  },\n  {\n    country: \"Mauritius\",\n    city: \"Port-Louis\",\n  },\n  {\n    country: \"Mayotte\",\n    city: \"Mamoudzou\",\n  },\n  {\n    country: \"Mexico\",\n    city: \"Mexico City\",\n  },\n  {\n    country: \"Federated States of Micronesia\",\n    city: \"Palikir\",\n  },\n  {\n    country: \"Moldova\",\n    city: \"Chisinau\",\n  },\n  {\n    country: \"Monaco\",\n    city: \"Monaco-Ville\",\n  },\n  {\n    country: \"Mongolia\",\n    city: \"Ulan Bator\",\n  },\n  {\n    country: \"Montenegro\",\n    city: \"Podgorica\",\n  },\n  {\n    country: \"Montserrat\",\n    city: \"Plymouth\",\n  },\n  {\n    country: \"Morocco\",\n    city: \"Rabat\",\n  },\n  {\n    country: \"Mozambique\",\n    city: \"Maputo\",\n  },\n  {\n    country: \"Myanmar\",\n    city: \"Yangon\",\n  },\n  {\n    country: \"Namibia\",\n    city: \"Windhoek\",\n  },\n  {\n    country: \"Nauru\",\n    city: \"Yaren\",\n  },\n  {\n    country: \"Nepal\",\n    city: \"Kathmandu\",\n  },\n  {\n    country: \"Netherlands\",\n    city: \"Amsterdam\",\n  },\n  {\n    country: \"Curaçao\",\n    city: \"Willemstad\",\n  },\n  {\n    country: \"New Zealand\",\n    city: \"Wellington\",\n  },\n  {\n    country: \"Nicaragua\",\n    city: \"Managua\",\n  },\n  {\n    country: \"Niger\",\n    city: \"Niamey\",\n  },\n  {\n    country: \"Nigeria\",\n    city: \"Abuja\",\n  },\n  {\n    country: \"Niue\",\n    city: \"Alofi\",\n  },\n  {\n    country: \"Norfolk Island\",\n    city: \"Kingston\",\n  },\n  {\n    country: \"North Korea\",\n    city: \"Pyongyang\",\n  },\n  {\n    country: \"Northern Ireland\",\n    city: \"Belfast\",\n  },\n  {\n    country: \"Northern Mariana Islands\",\n    city: \"Saipan\",\n  },\n  {\n    country: \"Norway\",\n    city: \"Oslo\",\n  },\n  {\n    country: \"Oman\",\n    city: \"Muscat\",\n  },\n  {\n    country: \"Pakistan\",\n    city: \"Islamabad\",\n  },\n  {\n    country: \"Palau\",\n    city: \"Koror\",\n  },\n  {\n    country: \"Panama\",\n    city: \"Panama City\",\n  },\n  {\n    country: \"Papua New Guinea\",\n    city: \"Port Moresby\",\n  },\n  {\n    country: \"Paraguay\",\n    city: \"Asunción\",\n  },\n  {\n    country: \"Peru\",\n    city: \"Lima\",\n  },\n  {\n    country: \"Philippines\",\n    city: \"Manila\",\n  },\n  {\n    country: \"Pitcairn\",\n    city: \"Adamstown\",\n  },\n  {\n    country: \"Poland\",\n    city: \"Warsaw\",\n  },\n  {\n    country: \"Portugal\",\n    city: \"Lisbon\",\n  },\n  {\n    country: \"Puerto Rico\",\n    city: \"San Juan\",\n  },\n  {\n    country: \"Qatar\",\n    city: \"Doha\",\n  },\n  {\n    country: \"Reunion\",\n    city: \"Saint-Denis\",\n  },\n  {\n    country: \"Romania\",\n    city: \"Bucharest\",\n  },\n  {\n    country: \"Russia\",\n    city: \"Moscow\",\n  },\n  {\n    country: \"Rwanda\",\n    city: \"Kigali\",\n  },\n  {\n    country: \"Saint Helena\",\n    city: \"Jamestown\",\n  },\n  {\n    country: \"Saint Kitts and Nevis\",\n    city: \"Basseterre\",\n  },\n  {\n    country: \"Saint Lucia\",\n    city: \"Castries\",\n  },\n  {\n    country: \"Saint Pierre and Miquelon\",\n    city: \"Saint-Pierre\",\n  },\n  {\n    country: \"Saint Vincent and the Grenadines\",\n    city: \"Kingstown\",\n  },\n  {\n    country: \"Samoa\",\n    city: \"Apia\",\n  },\n  {\n    country: \"San Marino\",\n    city: \"San Marino\",\n  },\n  {\n    country: \"Sao Tome and Principe\",\n    city: \"São Tomé\",\n  },\n  {\n    country: \"Saudi Arabia\",\n    city: \"Riyadh\",\n  },\n  {\n    country: \"Scotland\",\n    city: \"Edinburgh\",\n  },\n  {\n    country: \"Senegal\",\n    city: \"Dakar\",\n  },\n  {\n    country: \"Serbia\",\n    city: \"Belgrade\",\n  },\n  {\n    country: \"Seychelles\",\n    city: \"Victoria\",\n  },\n  {\n    country: \"Sierra Leone\",\n    city: \"Freetown\",\n  },\n  {\n    country: \"Singapore\",\n    city: \"Singapore\",\n  },\n  {\n    country: \"Slovakia\",\n    city: \"Bratislava\",\n  },\n  {\n    country: \"Slovenia\",\n    city: \"Ljubljana\",\n  },\n  {\n    country: \"Solomon Islands\",\n    city: \"Honiara\",\n  },\n  {\n    country: \"Somalia\",\n    city: \"Mogadishu\",\n  },\n  {\n    country: \"South Africa\",\n    city: \"Pretoria\",\n  },\n  {\n    country: \"South Korea\",\n    city: \"Seoul\",\n  },\n  {\n    country: \"South Sudan\",\n    city: \"Juba\",\n  },\n  {\n    country: \"Spain\",\n    city: \"Madrid\",\n  },\n  {\n    country: \"Sri Lanka\",\n    city: \"Colombo\",\n  },\n  {\n    country: \"Sudan\",\n    city: \"Khartoum\",\n  },\n  {\n    country: \"Suriname\",\n    city: \"Paramaribo\",\n  },\n  {\n    country: \"Svalbard and Jan Mayen\",\n    city: \"Longyearbyen\",\n  },\n  {\n    country: \"Sweden\",\n    city: \"Stockholm\",\n  },\n  {\n    country: \"Switzerland\",\n    city: \"Bern\",\n  },\n  {\n    country: \"Syria\",\n    city: \"Damascus\",\n  },\n  {\n    country: \"Tajikistan\",\n    city: \"Dushanbe\",\n  },\n  {\n    country: \"Tanzania\",\n    city: \"Dodoma\",\n  },\n  {\n    country: \"Thailand\",\n    city: \"Bangkok\",\n  },\n  {\n    country: \"The Democratic Republic of Congo\",\n    city: \"Kinshasa\",\n  },\n  {\n    country: \"Togo\",\n    city: \"Lomé\",\n  },\n  {\n    country: \"Tonga\",\n    city: \"Nuku'alofa\",\n  },\n  {\n    country: \"Trinidad and Tobago\",\n    city: \"Port-of-Spain\",\n  },\n  {\n    country: \"Tunisia\",\n    city: \"Tunis\",\n  },\n  {\n    country: \"Turkey\",\n    city: \"Ankara\",\n  },\n  {\n    country: \"Turkmenistan\",\n    city: \"Ashgabat\",\n  },\n  {\n    country: \"Turks and Caicos Islands\",\n    city: \"Cockburn Town\",\n  },\n  {\n    country: \"Tuvalu\",\n    city: \"Funafuti\",\n  },\n  {\n    country: \"Uganda\",\n    city: \"Kampala\",\n  },\n  {\n    country: \"Ukraine\",\n    city: \"Kyiv\",\n  },\n  {\n    country: \"United Arab Emirates\",\n    city: \"Abu Dhabi\",\n  },\n  {\n    country: \"United Kingdom\",\n    city: \"London\",\n  },\n  {\n    country: \"United States\",\n    city: \"Washington, DC\",\n  },\n  {\n    country: \"Uruguay\",\n    city: \"Montevideo\",\n  },\n  {\n    country: \"Uzbekistan\",\n    city: \"Tashkent\",\n  },\n  {\n    country: \"Vanuatu\",\n    city: \"Port Vila\",\n  },\n  {\n    country: \"Venezuela\",\n    city: \"Caracas\",\n  },\n  {\n    country: \"Vatican City\",\n    city: \"Vatican City\",\n  },\n  {\n    country: \"Vietnam\",\n    city: \"Hanoi\",\n  },\n  {\n    country: \"Virgin Islands, British\",\n    city: \"Road Town\",\n  },\n  {\n    country: \"Virgin Islands, U.S.\",\n    city: \"Charlotte Amalie\",\n  },\n  {\n    country: \"Wales\",\n    city: \"Cardiff\",\n  },\n  {\n    country: \"Wallis and Futuna\",\n    city: \"Mata Utu\",\n  },\n  {\n    country: \"Yemen\",\n    city: \"Sanaa\",\n  },\n  {\n    country: \"Zambia\",\n    city: \"Lusaka\",\n  },\n  {\n    country: \"Zimbabwe\",\n    city: \"Harare\",\n  },\n];\n\n\n//# sourceURL=webpack://odin-weather-app/./src/data/worldCapitals.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _assets_c_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/c.svg */ \"./src/assets/c.svg\");\n/* harmony import */ var _assets_f_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/f.svg */ \"./src/assets/f.svg\");\n/* harmony import */ var _javascript_basicFunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./javascript/basicFunctions.js */ \"./src/javascript/basicFunctions.js\");\n/* harmony import */ var _javascript_title_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./javascript/title.js */ \"./src/javascript/title.js\");\n/* harmony import */ var _javascript_search_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./javascript/search.js */ \"./src/javascript/search.js\");\n/* harmony import */ var _javascript_btns_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./javascript/btns.js */ \"./src/javascript/btns.js\");\n/* harmony import */ var _javascript_fetch_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./javascript/fetch.js */ \"./src/javascript/fetch.js\");\n/* harmony import */ var _javascript_weatherView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./javascript/weatherView.js */ \"./src/javascript/weatherView.js\");\n/* harmony import */ var _javascript_sound_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./javascript/sound.js */ \"./src/javascript/sound.js\");\n/* harmony import */ var _data_worldCapitals_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data/worldCapitals.js */ \"./src/data/worldCapitals.js\");\n/* harmony import */ var _data_stateCapitals_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data/stateCapitals.js */ \"./src/data/stateCapitals.js\");\n\n\n\n\n\n\n\n\n\n\n \n\n \n \n\n let weatherData = null;\n let weatherDataWorld = null;\n let weatherDataUSA = null;\n\n function clickEffects() {\n    const titleImg1 = document.querySelector(\"#title-img1\");\n    const titleImg2 = document.querySelector(\"#title-img2\");\n\n    titleImg1.classList.add(\"shake\");\n    setTimeout(() => titleImg1.classList.remove(\"shake\"), 500);\n    titleImg2.classList.add(\"spin\");\n    setTimeout(() => titleImg2.classList.remove(\"spin\"), 500);\n }\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  (0,_javascript_title_js__WEBPACK_IMPORTED_MODULE_4__.createTitle)();\n  (0,_javascript_search_js__WEBPACK_IMPORTED_MODULE_5__.createSearch)();\n  (0,_javascript_btns_js__WEBPACK_IMPORTED_MODULE_6__.createBtns)();\n  // toggleEarthImg();\n  // displayFC();\n\n  const btnSound = document.querySelectorAll(\"button\");\n  btnSound.forEach((button) => {\n    button.addEventListener(\"click\", (event) => {\n      (0,_javascript_sound_js__WEBPACK_IMPORTED_MODULE_9__.playClickSound)(event);\n    });\n  });\n\n\n  const tempScaleBtn = document.querySelector(\"#temp-scale-btn\");\n  tempScaleBtn.value = \"F\";\n  const tempScaleImg = document.querySelector(\"#temp-scale-img\");\n  tempScaleImg.src = _assets_f_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n\n  tempScaleBtn.addEventListener(\"click\", () => {\n    if (tempScaleImg.src === _assets_f_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"] && tempScaleBtn.value === \"F\") {\n      tempScaleBtn.value = \"C\";\n      tempScaleImg.src = _assets_c_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n      console.log(\"Temperature scale set to Celsius.\");\n\n      if (weatherData || weatherDataUSA || weatherDataWorld) {\n        (0,_javascript_weatherView_js__WEBPACK_IMPORTED_MODULE_8__.updateDataFC)(weatherData || weatherDataUSA || weatherDataWorld);\n      }\n\n    } else {\n      tempScaleBtn.value = \"F\";\n      tempScaleImg.src = _assets_f_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n      console.log(\"Temperature scale set to Fahrenheit.\");\n\n      if (weatherData || weatherDataUSA || weatherDataWorld) {\n        (0,_javascript_weatherView_js__WEBPACK_IMPORTED_MODULE_8__.updateDataFC)(weatherData || weatherDataUSA || weatherDataWorld);\n      }\n    }\n  });\n\n  const searchInput = document.querySelector(\"#search-input\");\n  // let query = \"\";\n  const k = \"5BZ3MHEVJJ7AWTKSA5VSR3473\";\n\n  const searchBtn = document.querySelector(\"#search-btn\");\n\n  searchBtn.addEventListener(\"click\", () => {\n    weatherDataUSA = null;\n    weatherDataWorld = null;\n    clickEffects();\n    // checkScale();\n      // clearData();\n    const query = searchInput.value;\n    console.log(`Searching for: ${query}`);\n\n    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?unitGroup=us&key=${k}&contentType=json`;\n\n    async function init() {\n      (0,_javascript_basicFunctions_js__WEBPACK_IMPORTED_MODULE_3__.clearDivText)(\"location-content\", \"weather-content\");\n      \n      // const weatherData = await fetchWithHandling(url);\n      weatherData = await (0,_javascript_fetch_js__WEBPACK_IMPORTED_MODULE_7__.fetchWithHandling)(url);\n      const locationQuery = query;\n\n      console.log(weatherData);\n      console.log(weatherData.resolvedAddress);\n\n      (0,_javascript_weatherView_js__WEBPACK_IMPORTED_MODULE_8__.populateWeatherData)(locationQuery, weatherData);\n    }\n\n    init();\n  });\n\n// function getRandomCapital() {\n//   const randomIndex = Math.floor(Math.random() * worldCapitals.length);\n//   return worldCapitals[randomIndex];\n// }\n\n// const randomCapital = getRandomCapital();\n// console.log(`${randomCapital.city}, ${randomCapital.country}`);\n\n// function clearData() {\n//   const locationContent = document.querySelector(\"#location-content\");\n//   locationContent.innerHtml = \"\"; \n//   const weatherContent = document.querySelector(\"#weather-content\");\n//   weatherContent.innerHtml = \"\"; \n  \n//   query = null;\n// }\n\n\n\nconst worldBtn = document.querySelector(\"#world-btn\");\n\nworldBtn.addEventListener(\"click\", () => {\n  let queryWorld;\n  clickEffects();\n  // checkScale();\n  (0,_javascript_basicFunctions_js__WEBPACK_IMPORTED_MODULE_3__.clearQuery)(queryWorld);\n  console.log(`TEST1 for: ${queryWorld}`);\n\n  function getRandomCapital() {\n    const randomIndex = Math.floor(Math.random() * _data_worldCapitals_js__WEBPACK_IMPORTED_MODULE_10__.worldCapitals.length);\n    return _data_worldCapitals_js__WEBPACK_IMPORTED_MODULE_10__.worldCapitals[randomIndex];\n  }\n\n  const randomCapital = getRandomCapital();\n  console.log(`${randomCapital.city}, ${randomCapital.country}`);\n\n  queryWorld = `${randomCapital.city}, ${randomCapital.country}`;\n  console.log(`Searching for: ${queryWorld}`);\n\n  const urlWorld = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${queryWorld}?unitGroup=us&key=${k}&contentType=json`;\n\n  async function initWorld() {\n    weatherData = null;\n    weatherDataUSA = null;\n    (0,_javascript_basicFunctions_js__WEBPACK_IMPORTED_MODULE_3__.clearDivText)(\"location-content\", \"weather-content\");\n    // clearQuery(queryWorld);\n    console.log(`TEST2 for: ${queryWorld}`);\n    // const weatherDataWorld = await fetchWithHandling(urlWorld);\n    weatherDataWorld = await (0,_javascript_fetch_js__WEBPACK_IMPORTED_MODULE_7__.fetchWithHandling)(urlWorld);\n    const locationQueryWorld = randomCapital.city;\n    console.log(weatherDataWorld);\n    console.log(`Resolved address: ${weatherDataWorld.resolvedAddress}`);\n    (0,_javascript_weatherView_js__WEBPACK_IMPORTED_MODULE_8__.populateWeatherData)(locationQueryWorld, weatherDataWorld);\n    console.log(`TEST3 for: ${queryWorld}`);\n  }\n  initWorld();\n \n});\n\n// worldBtn.addEventListener(\"click\", () => {\n//   clickEffects();\n\n//   const queryWorld = `${randomCapital.city}, ${randomCapital.country}`;\n//   console.log(`Searching for: ${queryWorld}`);\n\n//   const urlWorld = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${queryWorld}?unitGroup=us&key=${k}&contentType=json`;\n\n//   async function initWorld() {\n//     clearDivText(\"location-content\", \"weather-content\");\n//     try {\n//       const weatherDataWorld = await fetchWithHandling(urlWorld);\n//       const locationQueryWorld = randomCapital.city;\n\n//       console.log(weatherDataWorld);\n//       console.log(`Resolved address: ${weatherDataWorld.resolvedAddress}`);\n//       populateWeatherData(locationQueryWorld, weatherDataWorld);\n//       console.log(`TEST1 for: ${queryWorld}`);\n//     } catch (error) {\n//       console.error(\"Error fetching weather data:\", error);\n//     }\n//   }\n//   initWorld();\n// });\n\n\n\n// createWeatherView(weatherData);\nconst usaBtn = document.querySelector(\"#usa-btn\");\n\nusaBtn.addEventListener(\"click\", () => {\n  let queryUSA;\n  clickEffects();\n  // checkScale();\n  (0,_javascript_basicFunctions_js__WEBPACK_IMPORTED_MODULE_3__.clearQuery)(queryUSA);\n  console.log(`TEST1 for: ${queryUSA}`);\n\n  function getRandomCapital() {\n    const randomIndex = Math.floor(Math.random() * _data_stateCapitals_js__WEBPACK_IMPORTED_MODULE_11__.stateCapitals.length);\n    return _data_stateCapitals_js__WEBPACK_IMPORTED_MODULE_11__.stateCapitals[randomIndex];\n  }\n\n  const randomCapital = getRandomCapital();\n  console.log(`${randomCapital.capital}, ${randomCapital.abbr}`);\n\n  queryUSA = `${randomCapital.capital}, ${randomCapital.abbr}`;\n  console.log(`Searching for: ${queryUSA}`);\n\n  const urlUSA = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${queryUSA}?unitGroup=us&key=${k}&contentType=json`;\n\n  async function initUSA() {\n    weatherData = null;\n    weatherDataWorld = null;\n    (0,_javascript_basicFunctions_js__WEBPACK_IMPORTED_MODULE_3__.clearDivText)(\"location-content\", \"weather-content\");\n    // clearQuery(queryWorld);\n    console.log(`TEST2 for: ${queryUSA}`);\n    // const weatherDataUSA = await fetchWithHandling(urlUSA);\n    weatherDataUSA = await (0,_javascript_fetch_js__WEBPACK_IMPORTED_MODULE_7__.fetchWithHandling)(urlUSA);\n    const locationQueryUSA = randomCapital.capital;\n    console.log(weatherDataUSA);\n    console.log(`Resolved address: ${weatherDataUSA.resolvedAddress}`);\n    (0,_javascript_weatherView_js__WEBPACK_IMPORTED_MODULE_8__.populateWeatherData)(locationQueryUSA, weatherDataUSA);\n    console.log(`TEST3 for: ${queryUSA}`);\n    // updateDataFC(weatherDataUSA);\n    // displayFC(weatherDataUSA);\n\n  }\n  initUSA();\n});\n\n\n\n});\n\n// import { fetchWithHandling, getWeatherData } from \"./fetch.js\";\n\n// async function init() {\n//   const url = \"your_weather_api_url\";\n//   const data = await fetchWithHandling(url);\n//   console.log(data); // Should log the fetched data\n//   const storedData = getWeatherData(); // Access the stored data\n//   console.log(storedData);\n// }\n\n// init();\n\n\n\n//# sourceURL=webpack://odin-weather-app/./src/index.js?");

/***/ }),

/***/ "./src/javascript/basicFunctions.js":
/*!******************************************!*\
  !*** ./src/javascript/basicFunctions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearDivText: () => (/* binding */ clearDivText),\n/* harmony export */   clearQuery: () => (/* binding */ clearQuery),\n/* harmony export */   convertToCelsius: () => (/* binding */ convertToCelsius),\n/* harmony export */   convertToFahrenheit: () => (/* binding */ convertToFahrenheit),\n/* harmony export */   createBtnElement: () => (/* binding */ createBtnElement),\n/* harmony export */   createDivElement: () => (/* binding */ createDivElement),\n/* harmony export */   createFormElement: () => (/* binding */ createFormElement),\n/* harmony export */   createImgElement: () => (/* binding */ createImgElement),\n/* harmony export */   createSpanElement: () => (/* binding */ createSpanElement),\n/* harmony export */   createTextElement: () => (/* binding */ createTextElement),\n/* harmony export */   createToggleSwitch: () => (/* binding */ createToggleSwitch)\n/* harmony export */ });\nfunction createDivElement(id) {\n  const element = document.createElement(\"div\");\n  element.id = id;\n  return element;\n}\n\nfunction createSpanElement(className, text) {\n  const element = document.createElement(\"span\");\n  element.classList.add(className);\n  element.textContent = text;\n  return element;\n}\n\nfunction createBtnElement(id, text) {\n  const button = document.createElement(\"button\");\n  button.id = id;\n  button.textContent = text;\n  return button;\n}\n\nfunction createImgElement(id, src, alt = \"\") {\n  const img = document.createElement(\"img\");\n  img.id = id;\n  img.src = src;\n  img.alt = alt;\n  return img;\n}\n\nfunction createFormElement(tag, type, id, placeHolder) {\n  const element = document.createElement(tag);\n  element.id = id;\n  element.placeholder = placeHolder;\n  return element;\n}\n\nfunction createTextElement(tag, id, textContent) {\n  const element = document.createElement(tag);\n  element.id = id;\n  element.textContent = textContent;\n  return element;\n}\n\n// export function handleTextElement(id, textContent) {\n//   const element = document.getElementById(id);\n//   element.textContent = textContent;\n//   return element;\n// };\n\nfunction createToggleSwitch(id, isChecked) {\n  const label = document.createElement(\"label\");\n  label.htmlFor = id;\n\n  const input = document.createElement(\"input\");\n  input.type = \"checkbox\";\n  input.id = id;\n  input.checked = isChecked;\n\n  const span = document.createElement(\"span\");\n  span.id = \"toggle-slider\";\n\n  label.appendChild(input);\n  label.appendChild(span);\n\n  return label;\n}\n\n// export function clearTextNodes(divId) {\n//   const div = document.getElementById(divId);\n//   if (div) {\n//     Array.from(div.childNodes).forEach((node) => {\n//       if (node.nodeType === Node.TEXT_NODE) {\n//         node.textContent = \"\"; // Clear text nodes\n//       }\n//     });\n//   }\n// }\n\n// export function clearDivText(divId) {\n//   const div = document.getElementById(divId);\n//   if (div) {\n//     div.innerHTML = \"\"; // Clears all text and child elements\n//   }\n// }\n\nfunction clearDivText(divId1, divId2) {\n  const div1 = document.getElementById(divId1);\n  if (div1) {\n    div1.remove();\n  }\n\n  const div2 = document.getElementById(divId2);\n  if (div2) {\n    div2.remove();\n  }\n}\n\nfunction clearQuery(query) {\n  if (query !== \"\") {\n    query = \"\";\n  }\n\n}\n\nfunction convertToCelsius(temp) {\n  const celsius = Math.round((((temp - 32) * 5) / 9) * 10) / 10;\n  return celsius;\n}\n\nfunction convertToFahrenheit(temp) {\n  const celsius = Math.round(((temp * 9) / 5 + 32) * 10) / 10;\n  return celsius;\n}\n\n\n//# sourceURL=webpack://odin-weather-app/./src/javascript/basicFunctions.js?");

/***/ }),

/***/ "./src/javascript/btns.js":
/*!********************************!*\
  !*** ./src/javascript/btns.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createBtns: () => (/* binding */ createBtns)\n/* harmony export */ });\n/* harmony import */ var _assets_earth1_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/earth1.svg */ \"./src/assets/earth1.svg\");\n/* harmony import */ var _assets_usa_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/usa.svg */ \"./src/assets/usa.svg\");\n/* harmony import */ var _assets_f_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/f.svg */ \"./src/assets/f.svg\");\n/* harmony import */ var _basicFunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basicFunctions.js */ \"./src/javascript/basicFunctions.js\");\n\n// import svgEarth2 from \"../assets/earth2.svg\";\n\n// import svgC from \"../assets/c.svg\";\n\n\n// import { updateDataFC } from \"./weatherView.js\"\n\n// import { convertToCelsius } from \"./basicFunctions.js\";\n// import { convertToFahrenheit } from \"./basicFunctions.js\";\n\n// export function toggleEarthImg() {\n//   const worldImg = document.querySelector(\"#world-img\");\n\n//   if (!worldImg) {\n//     console.error(\"Element with ID 'world-img' not found\");\n//     return; // Exit the function if the element doesn't exist\n//   }\n\n//   const myTimeout = setInterval(() => {\n//     if (worldImg.src.includes(svgEarth1)) {\n//       worldImg.src = svgEarth2;\n//     } else {\n//       worldImg.src = svgEarth1;\n//     }\n//   }, 10000);\n// }\n\n// function refreshTemp() {\n//   const temperatures = document.querySelector(\"#temperatures\");\n//   temperatures.style.fontSize = \"2rem\";\n// }\n\n// export function displayFC(data) {\n//   const tempScaleBtn = document.querySelector(\"#temp-scale-btn\");\n//   tempScaleBtn.value = \"F\"\n//   const tempScaleImg = document.querySelector(\"#temp-scale-img\");\n//   tempScaleImg.src = svgF;\n\n//   const temperatures = document.querySelector(\"#temperatures\");\n\n//   tempScaleBtn.addEventListener(\"click\", () => {\n//       if (tempScaleImg.src === svgF && tempScaleBtn.value === \"F\") {\n//         tempScaleBtn.value = \"C\"\n//         tempScaleImg.src = svgC;\n//         console.log(\"Temperature scale set to Celsius.\");  \n\n//         temperatures.textContent = `Currently: ${convertToCelsius(\n//           data.currentConditions.temp\n//         )}°${tempScaleBtn.value} (Feels Like: ${convertToCelsius(\n//           data.currentConditions.feelslike\n//         )}°${tempScaleBtn.value})`;\n\n//     } else \n//     // if (tempScaleImg.src === svgC && tempScaleBtn.value === \"C\") \n//       {\n//         tempScaleBtn.value = \"F\";\n//         tempScaleImg.src = svgF;\n//         console.log(\"Temperature scale set to Fahrenheit.\");\n\n//         temperatures.textContent = `Currently: ${data.currentConditions.temp}°${tempScaleBtn.value} (Feels Like: ${data.currentConditions.feelslike}°${tempScaleBtn.value})`;\n//         console.log(\"Temperature scale set to Fahrenheit.\");\n\n//         // temperatures.textContent = `Currently: ${convertToFahrenheit(\n//         //   data.currentConditions.temp\n//         // )}°${tempScaleBtn.value} (Feels Like: ${convertToFahrenheit(\n//         //   data.currentConditions.feelslike\n//         // )}°${tempScaleBtn.value})`;\n//     }\n\n//   });\n// }\n\nfunction createBtns() {\n  const btnContent = document.querySelector(\"#btn-content\");\n\n  const worldBtn = (0,_basicFunctions_js__WEBPACK_IMPORTED_MODULE_3__.createBtnElement)(\"world-btn\");\n  const worldImg = (0,_basicFunctions_js__WEBPACK_IMPORTED_MODULE_3__.createImgElement)(\"world-img\", _assets_earth1_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"], \"Earth Icon\");\n\n  // const toggleC2F = createToggleSwitch(\"toggle-c2f\", true);\n  // const tempScaleImg = createImgElement(\"temp-scale-img\", \"\");\n\n  const tempScaleBtn = (0,_basicFunctions_js__WEBPACK_IMPORTED_MODULE_3__.createBtnElement)(\"temp-scale-btn\");\n  tempScaleBtn.value = \"F\";\n  const tempScaleImg = (0,_basicFunctions_js__WEBPACK_IMPORTED_MODULE_3__.createImgElement)(\"temp-scale-img\", _assets_f_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], \"\")  \n  const usaBtn = (0,_basicFunctions_js__WEBPACK_IMPORTED_MODULE_3__.createBtnElement)(\"usa-btn\");\n  const usaImg = (0,_basicFunctions_js__WEBPACK_IMPORTED_MODULE_3__.createImgElement)(\"usa-img\", _assets_usa_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"United States Icon\");\n\n  btnContent.append(worldBtn, tempScaleBtn,\n    //  toggleC2F,\n      usaBtn);\n  worldBtn.append(worldImg);\n  tempScaleBtn.append(tempScaleImg);\n  // toggleC2F.append(tempScaleImg);\n  usaBtn.append(usaImg); \n}\n\n\n//# sourceURL=webpack://odin-weather-app/./src/javascript/btns.js?");

/***/ }),

/***/ "./src/javascript/fetch.js":
/*!*********************************!*\
  !*** ./src/javascript/fetch.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchWithHandling: () => (/* binding */ fetchWithHandling)\n/* harmony export */ });\n\nlet data = null;\n\n// function clearData() {\n//   const locationContent = document.querySelector(\"#location-content\");\n//   locationContent.innerHtml = \"\";\n//   const weatherContent = document.querySelector(\"#weather-content\");\n//   weatherContent.innerHtml = \"\";\n\n\n// }\n\nasync function fetchWithHandling(url) {\n\n  try {\n    // clearData();\n\n    const response = await fetch(url);\n    // Check for HTTP errors\n    if (!response.ok) {\n      throw new Error(`HTTP error! Status: ${response.status}`);\n    }\n    // Handle different types of responses\n    const contentType = response.headers.get(\"Content-Type\");\n\n    if (contentType && contentType.includes(\"application/json\")) {\n      data = await response.json();\n      // console.log(data);\n      // console.log(data.resolvedAddress);\n      \n        return data;\n    } else {\n      return null; // Return null for no data\n    }\n  } catch (error) {\n    console.error(\"Fetch error: \", error.message);\n    return null; // Optionally return null or throw further up\n  }\n}\n\n// export function getWeatherData() {\n//   return weatherData; // Can be null if fetch hasn't been called yet\n// }\n\n\n  \n\n\n//# sourceURL=webpack://odin-weather-app/./src/javascript/fetch.js?");

/***/ }),

/***/ "./src/javascript/search.js":
/*!**********************************!*\
  !*** ./src/javascript/search.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createSearch: () => (/* binding */ createSearch)\n/* harmony export */ });\n/* harmony import */ var _basicFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicFunctions.js */ \"./src/javascript/basicFunctions.js\");\n\n\nfunction createSearch() {\n  const searchContent = document.querySelector(\"#search-content\");\n  const placeHolderText = \"Enter a location...\";\n  const searchInput = (0,_basicFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createFormElement)(\n    \"input\",\n    \"text\",\n    \"search-input\",\n    placeHolderText\n  );\n  searchInput.required = true;\n\n  const searchBtn = (0,_basicFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createBtnElement)(\"search-btn\", \"Search\");\n\n  searchContent.append(searchInput, searchBtn);\n\n  // searchBtn.addEventListener(\"click\", () => {\n  //   if (!searchInput.value.trim()) {\n  //     alert(\"Please enter a search term.\"); // Custom validation message\n  //   } else {\n  //     // Proceed with your search logic here\n  //     console.log(`Searching for: ${searchInput.value}`);\n  //   }\n  // });\n}\n\n\n//# sourceURL=webpack://odin-weather-app/./src/javascript/search.js?");

/***/ }),

/***/ "./src/javascript/sound.js":
/*!*********************************!*\
  !*** ./src/javascript/sound.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   playClickSound: () => (/* binding */ playClickSound)\n/* harmony export */ });\n/* harmony import */ var _assets_sound_click_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/sound-click.mp3 */ \"./src/assets/sound-click.mp3\");\n\n\nconst btnAudio = new Audio(_assets_sound_click_mp3__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nbtnAudio.preload = \"auto\";\n\nfunction playClickSound() {\n  btnAudio.currentTime = 0; // Reset the audio to the beginning\n  btnAudio.play();\n}\n\n\n//# sourceURL=webpack://odin-weather-app/./src/javascript/sound.js?");

/***/ }),

/***/ "./src/javascript/title.js":
/*!*********************************!*\
  !*** ./src/javascript/title.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTitle: () => (/* binding */ createTitle)\n/* harmony export */ });\n/* harmony import */ var _assets_titleWindAndLeaves_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/titleWindAndLeaves.svg */ \"./src/assets/titleWindAndLeaves.svg\");\n/* harmony import */ var _assets_titleWeathervane_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/titleWeathervane.svg */ \"./src/assets/titleWeathervane.svg\");\n/* harmony import */ var _basicFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basicFunctions.js */ \"./src/javascript/basicFunctions.js\");\n\n\n\n\nfunction createTitle() {\n  const titleContent = document.querySelector(\"#title-content\");\n\n  const titleImg1 = (0,_basicFunctions_js__WEBPACK_IMPORTED_MODULE_2__.createImgElement)(\n    \"title-img1\",\n    _assets_titleWindAndLeaves_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    \"Wind And Leaves Icon\"\n  );\n\n  const titleText = (0,_basicFunctions_js__WEBPACK_IMPORTED_MODULE_2__.createTextElement)(\"h1\", \"title-text\", \"Weathervane\");\n\n  const titleImg2 = (0,_basicFunctions_js__WEBPACK_IMPORTED_MODULE_2__.createImgElement)(\"title-img2\", _assets_titleWeathervane_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"Weathervane Icon\");\n\n  titleContent.append(titleImg1, titleText, titleImg2);\n}\n\n//# sourceURL=webpack://odin-weather-app/./src/javascript/title.js?");

/***/ }),

/***/ "./src/javascript/weatherView.js":
/*!***************************************!*\
  !*** ./src/javascript/weatherView.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   populateWeatherData: () => (/* binding */ populateWeatherData),\n/* harmony export */   updateDataFC: () => (/* binding */ updateDataFC)\n/* harmony export */ });\n/* harmony import */ var _basicFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicFunctions.js */ \"./src/javascript/basicFunctions.js\");\n/* harmony import */ var _assets_clear_day_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/clear-day.svg */ \"./src/assets/clear-day.svg\");\n/* harmony import */ var _assets_clear_night_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/clear-night.svg */ \"./src/assets/clear-night.svg\");\n/* harmony import */ var _assets_cloudy_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/cloudy.svg */ \"./src/assets/cloudy.svg\");\n/* harmony import */ var _assets_fog_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/fog.svg */ \"./src/assets/fog.svg\");\n/* harmony import */ var _assets_hail_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/hail.svg */ \"./src/assets/hail.svg\");\n/* harmony import */ var _assets_partly_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/partly-cloudy-day.svg */ \"./src/assets/partly-cloudy-day.svg\");\n/* harmony import */ var _assets_partly_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/partly-cloudy-night.svg */ \"./src/assets/partly-cloudy-night.svg\");\n/* harmony import */ var _assets_rain_snow_showers_day_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/rain-snow-showers-day.svg */ \"./src/assets/rain-snow-showers-day.svg\");\n/* harmony import */ var _assets_rain_snow_showers_night_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/rain-snow-showers-night.svg */ \"./src/assets/rain-snow-showers-night.svg\");\n/* harmony import */ var _assets_rain_snow_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/rain-snow.svg */ \"./src/assets/rain-snow.svg\");\n/* harmony import */ var _assets_rain_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/rain.svg */ \"./src/assets/rain.svg\");\n/* harmony import */ var _assets_showers_day_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/showers-day.svg */ \"./src/assets/showers-day.svg\");\n/* harmony import */ var _assets_showers_night_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/showers-night.svg */ \"./src/assets/showers-night.svg\");\n/* harmony import */ var _assets_sleet_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/sleet.svg */ \"./src/assets/sleet.svg\");\n/* harmony import */ var _assets_snow_showers_day_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/snow-showers-day.svg */ \"./src/assets/snow-showers-day.svg\");\n/* harmony import */ var _assets_snow_showers_night_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/snow-showers-night.svg */ \"./src/assets/snow-showers-night.svg\");\n/* harmony import */ var _assets_snow_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/snow.svg */ \"./src/assets/snow.svg\");\n/* harmony import */ var _assets_thunder_rain_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/thunder-rain.svg */ \"./src/assets/thunder-rain.svg\");\n/* harmony import */ var _assets_thunder_showers_day_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/thunder-showers-day.svg */ \"./src/assets/thunder-showers-day.svg\");\n/* harmony import */ var _assets_thunder_showers_night_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/thunder-showers-night.svg */ \"./src/assets/thunder-showers-night.svg\");\n/* harmony import */ var _assets_thunder_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/thunder.svg */ \"./src/assets/thunder.svg\");\n/* harmony import */ var _assets_wind_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../assets/wind.svg */ \"./src/assets/wind.svg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// import { format, getDay } from \"date-fns\";\n\n\n\n// function reformatDate(date) {\n//   const weekdayNames = [\"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\"];\n//   const formattedDate = format(date, \"yyyy MMM dd\");\n//   // Gets the day of the week index (0 = Sunday, 1 = Monday, etc.)\n//   const dayOfWeekIndex = getDay(date);\n//   // Gets the day of the week name from the array\n//   const dayOfWeek = weekdayNames[dayOfWeekIndex];\n//   // Combines everything together...\n//   return `${formattedDate} (${dayOfWeek})`;\n// }\n\n// export function checkScale() {\n//     const tempScaleBtn = document.querySelector(\"#temp-scale-btn\");\n//       if (tempScaleBtn.value === \"C\") {\n//         tempScaleBtn.value = \"C\";\n//       } else {\n//         tempScaleBtn.value = \"F\";\n//       }\n// }\n\n// function convertCF(data) {\n//   let currentTemp = `${data.currentConditions.temp}°F`;\n//   console.log(currentTemp)\n//   let feelsTemp = `${data.currentConditions.feelslike}°F`;\n// }\n\n// export function dataFC(data) {\n//   let tempScaleBtn = document.querySelector(\"#temp-scale-btn\");\n//   let currentTemp = data.currentConditions.temp;\n//   let feelsTemp = data.currentConditions.feelslike;\n//   let currentHumidity = data.currentConditions.humidity;\n//   let dewTemp = data.currentConditions.dew;\n//   let currentTempScale = \"F\";\n//   tempScaleBtn.addEventListener(\"click\", (data) => {\n//     if (tempScaleBtn.value === \"C\") {\n//         currentTemp = convertToCelsius(data.currentConditions.temp);\n//         feelsTemp = convertToCelsius(data.currentConditions.feelslike);\n//         currentHumidity = convertToCelsius(data.currentConditions.humidity);\n//         dewTemp = convertToCelsius(data.currentConditions.dew);\n//         currentTempScale = \"C\";\n//     } else if (tempScaleBtn.value === \"F\") {\n//         currentTemp = data.currentConditions.temp;\n//         feelsTemp = data.currentConditions.feelslike;\n//         currentHumidity = data.currentConditions.humidity;\n//         dewTemp = data.currentConditions.dew;\n//         currentTempScale = \"F\";\n//       }\n//       return currentTemp, feelsTemp, currentHumidity, dewTemp, currentTempScale;\n//   })\n\n// }\n\n// function dataFC(data) {\n//   let tempScaleBtn = document.querySelector(\"#temp-scale-btn\");\n\n//   // Initialize temperatures\n//   let currentTemp = data.currentConditions.temp;\n//   let feelsTemp = data.currentConditions.feelslike;\n//   let currentHumidity = data.currentConditions.humidity;\n//   let dewTemp = data.currentConditions.dew;\n//   let currentTempScale = \"F\";\n\n//   // Update temperatures on button click\n//   tempScaleBtn.addEventListener(\"click\", () => {\n//     if (tempScaleBtn.value === \"C\") {\n//       currentTemp = convertToCelsius(data.currentConditions.temp);\n//       feelsTemp = convertToCelsius(data.currentConditions.feelslike);\n//       currentHumidity = data.currentConditions.humidity; // Humidity stays the same\n//       dewTemp = convertToCelsius(data.currentConditions.dew);\n//       currentTempScale = \"C\";\n//     } else {\n//       currentTemp = data.currentConditions.temp;\n//       feelsTemp = data.currentConditions.feelslike;\n//       currentHumidity = data.currentConditions.humidity;\n//       dewTemp = data.currentConditions.dew;\n//       currentTempScale = \"F\";\n//     }\n\n//     // Update displayed data after conversion\n//     populateWeatherData(data.query, {\n//       ...data,\n//       currentTemp,\n//       feelsTemp,\n//       currentHumidity,\n//       dewTemp,\n//       currentTempScale,\n//     });\n//   });\n\n//   return {\n//     currentTemp,\n//     feelsTemp,\n//     currentHumidity,\n//     dewTemp,\n//     currentTempScale,\n//   };\n// }\n\nfunction populateWeatherData(query, data) {\n  // dataFC(data)\n  const tempScaleBtn = document.querySelector(\"#temp-scale-btn\");\n  const noWeatherDataAvailable = \"No weather data available.\";\n  const dataContent = document.querySelector(\"#data-content\");\n  if (!data) {\n    console.error(noWeatherDataAvailable);\n    return;\n  }\n\n  const locationContent = (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createDivElement)(\"location-content\");\n\n  const locationName = (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)(\n    \"h1\",\n    \"location-name\",\n    query.toUpperCase()\n  );\n\n  const resolvedAddress = (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)(\n    \"p\",\n    \"resolved-address\",\n    data.resolvedAddress\n  );\n\n  const locationLatLon = (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)(\n    \"p\",\n    \"latitude-longitude\",\n    `(Latitude: ${data.latitude}, Longitude: ${data.longitude})`\n  );\n\n  const sunriseSunset = (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)(\n    \"p\",\n    \"sunrise-sunset\",\n    `Sunrise: ${data.currentConditions.sunrise}, Sunset ${data.currentConditions.sunset}`\n  );\n\n  const weatherContent = (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createDivElement)(\"weather-content\");\n\n  // const today = new Date();\n\n  // const todayDate = document.querySelector(\"#today-date\");\n  // todayDate.textContent = reformatDate(today);\n\n  const currentConditions = (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)(\n    \"h2\",\n    \"current-conditions\",\n    data.currentConditions.conditions.toUpperCase()\n  );\n\n  const weatherIconSRC = (() => {\n    switch (data.currentConditions.icon) {\n      case \"clear-day\":\n        return _assets_clear_day_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n      case \"clear-night\":\n        return _assets_clear_night_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n      case \"cloudy\":\n        return _assets_cloudy_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n      case \"fog\":\n        return _assets_fog_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n      case \"hail\":\n        return _assets_hail_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n      case \"partly-cloudy-day\":\n        return _assets_partly_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\n      case \"partly-cloudy-night\":\n        return _assets_partly_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"];\n      case \"rain-snow-showers-day\":\n        return _assets_rain_snow_showers_day_svg__WEBPACK_IMPORTED_MODULE_8__[\"default\"];\n      case \"rain-snow-showers-night\":\n        return _assets_rain_snow_showers_night_svg__WEBPACK_IMPORTED_MODULE_9__[\"default\"];\n      case \"rain-snow\":\n        return _assets_rain_snow_svg__WEBPACK_IMPORTED_MODULE_10__[\"default\"];\n      case \"rain\":\n        return _assets_rain_svg__WEBPACK_IMPORTED_MODULE_11__[\"default\"];\n      case \"showers-day\":\n        return _assets_showers_day_svg__WEBPACK_IMPORTED_MODULE_12__[\"default\"];\n      case \"showers-night\":\n        return _assets_showers_night_svg__WEBPACK_IMPORTED_MODULE_13__[\"default\"];\n      case \"sleet\":\n        return _assets_sleet_svg__WEBPACK_IMPORTED_MODULE_14__[\"default\"];\n      case \"snow-showers-day\":\n        return _assets_snow_showers_day_svg__WEBPACK_IMPORTED_MODULE_15__[\"default\"];\n      case \"snow-showers-nigh\":\n        return _assets_snow_showers_night_svg__WEBPACK_IMPORTED_MODULE_16__[\"default\"];\n      case \"snow\":\n        return _assets_snow_svg__WEBPACK_IMPORTED_MODULE_17__[\"default\"];\n      case \"thunder-rain\":\n        return _assets_thunder_rain_svg__WEBPACK_IMPORTED_MODULE_18__[\"default\"];\n      case \"thunder-showers-day\":\n        return _assets_thunder_showers_day_svg__WEBPACK_IMPORTED_MODULE_19__[\"default\"];\n      case \"thunder-showers-night\":\n        return _assets_thunder_showers_night_svg__WEBPACK_IMPORTED_MODULE_20__[\"default\"];\n      case \"thunder\":\n        return _assets_thunder_svg__WEBPACK_IMPORTED_MODULE_21__[\"default\"];\n      case \"wind\":\n        return _assets_wind_svg__WEBPACK_IMPORTED_MODULE_22__[\"default\"];\n      default:\n        return null;\n    }\n  })();\n\n  const weatherIcon = (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createImgElement)(\n    \"weather-icon\",\n    weatherIconSRC,\n    \"Weather icon based on current conditions.\"\n  );\n\n  const currentTemp = data.currentConditions.temp;\n  const feelsTemp = data.currentConditions.feelslike;\n  const currentHumidity = data.currentConditions.humidity;\n  const dewTemp = data.currentConditions.dew;\n  // const currentTempScale = \"F\";\n\n  //use classes\n  // const currentTempSpan = createSpanElement(\"current-temp\", currentTemp);\n  // const feelsTempSpan = createSpanElement(\"feels-temp\", feelsTemp);\n  // const currentHumiditySpan = createSpanElement(\"current-humidity\", currentHumidity)\n  // const dewTempSpan = createSpanElement(\"dew-temp\", dewTemp)\n  // const currentTempScaleSpan = createSpanElement(\"current-temp-scale\", currentTempScale)\n\n  const temperatures = (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)(\n    \"p\",\n    \"temperatures\",\n    \"\"\n  );\n  const moisture = (0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)(\n    \"p\",\n    \"moisture\",\n    \"\"\n  );\n\n  // const tempScaleBtn = document.querySelector(\"#temp-scale-btn\");\n\n  if (tempScaleBtn.value === \"C\") {\n    temperatures.textContent = \n    `Currently: ${(0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.convertToCelsius)(currentTemp)}°C (Feels Like: ${(0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.convertToCelsius)(feelsTemp)}°C)`\n\n    moisture.textContent = \n    `Humidity: ${currentHumidity}% (Dew Point: ${(0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.convertToCelsius)(dewTemp)}°C)`\n  } else {\n    temperatures.textContent = \n    `Currently: ${currentTemp}°F (Feels Like: ${feelsTemp}°F)`\n    moisture.textContent = \n    `Humidity: ${currentHumidity}% (Dew Point: ${dewTemp}°F)`\n  }\n\n  dataContent.append(locationContent, weatherContent);\n\n  locationContent.append(\n    locationName,\n    resolvedAddress,\n    locationLatLon,\n    sunriseSunset\n  );\n\n  weatherContent.append(currentConditions, temperatures, moisture, weatherIcon);\n}\n\n// function convertToCelsius(temp) {\n//   const celsius = Math.round((((temp - 32) * 5) / 9) * 10) / 10;\n//   return celsius;\n// }\n\n// function convertToFahrenheit(temp) {\n//   const celsius = Math.round(((temp * 9) / 5 + 32) * 10) / 10;\n//   return celsius;\n// }\n\n// export function updateDataFC(data) {\n//   const tempScaleBtn = document.querySelector(\"#temp-scale-btn\");\n//   const temperatures = document.querySelector(\"#temperatures\");\n//   // tempScaleBtn.addEventListener(\"click\", () => {\n//     if (tempScaleBtn.value === \"C\") {\n//       temperatures.textContent = `Currently: ${convertToCelsius(\n//         data.currentConditions.temp\n//       )}°${tempScaleBtn.value} (Feels Like: ${convertToCelsius(\n//         data.currentConditions.feelslike\n//       )}°${tempScaleBtn.value})`;\n//     } else {\n//       temperatures.textContent = `Currently: ${data.currentConditions.temp}°${tempScaleBtn.value} (Feels Like: ${data.currentConditions.feelslike}°${tempScaleBtn.value})`;\n//     }\n//   // });\n// }\n\nfunction updateDataFC(data) {\n  const currentTemp = data.currentConditions.temp;\n  const feelsTemp = data.currentConditions.feelslike;\n  const currentHumidity = data.currentConditions.humidity;\n  const dewTemp = data.currentConditions.dew;\n\n  const temperatures = document.querySelector(\"#temperatures\");\n  const moisture = document.querySelector(\"#moisture\");\n\n  const tempScaleBtn = document.querySelector(\"#temp-scale-btn\");\n    if (tempScaleBtn.value === \"C\") {\n      temperatures.textContent = `Currently: ${(0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.convertToCelsius)(\n        currentTemp\n      )}°C (Feels Like: ${(0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.convertToCelsius)(feelsTemp)}°C)`;\n\n      moisture.textContent = `Humidity: ${currentHumidity}% (Dew Point: ${(0,_basicFunctions__WEBPACK_IMPORTED_MODULE_0__.convertToCelsius)(\n        dewTemp\n      )}°C)`;\n    } else {\n      temperatures.textContent = `Currently: ${currentTemp}°F (Feels Like: ${feelsTemp}°F)`;\n      moisture.textContent = `Humidity: ${currentHumidity}% (Dew Point: ${dewTemp}°F)`;\n    }\n}\n\n\n//# sourceURL=webpack://odin-weather-app/./src/javascript/weatherView.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;