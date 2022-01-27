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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Julee&family=Karla:wght@400;700&family=Solway&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root{\\r\\n    --title-font: \\\"Julee\\\";\\r\\n    --dark-color: #455954;\\r\\n    --content-font:\\\"Karla\\\";\\r\\n    --content-font2: \\\"Solway\\\";\\r\\n    --content-color: #565c5e;\\r\\n    --light-color: #dfdbd8;\\r\\n\\r\\n    --content-margin: 5rem;\\r\\n    --menu-padding: 3rem;\\r\\n    --title-fontsize: 5rem;\\r\\n    --story-fontsize: 1rem;\\r\\n    --li-fontsize: 1rem;\\r\\n    --icon-height-width: 5rem;\\r\\n}\\r\\n\\r\\n*{\\r\\n    font-family: var(--content-font);\\r\\n    color: var(--content-color);\\r\\n}\\r\\n\\r\\nhtml{\\r\\n    position: relative;\\r\\n    min-height: 100vh;\\r\\n    overflow-y: auto;\\r\\n    scrollbar-gutter: stable;\\r\\n}\\r\\n\\r\\nbody{\\r\\n    height: 100%;\\r\\n    margin: 0;\\r\\n    background-color: #dfdbd8;\\r\\n}\\r\\n\\r\\n#logo{\\r\\n    border-radius: 50%;\\r\\n    width: 8rem;\\r\\n    position: absolute;\\r\\n    top: .5rem;\\r\\n    left: 4rem;\\r\\n}\\r\\n\\r\\n#title, .page-title{\\r\\n    font-family: var(--title-font);\\r\\n    color: var(--dark-color);\\r\\n    text-align: center;\\r\\n    margin-bottom: 4rem;\\r\\n    font-size: var(--title-fontsize);\\r\\n}\\r\\n\\r\\n.home-container{\\r\\n    margin: 0 var(--content-margin) var(--content-margin) var(--content-margin);\\r\\n}\\r\\n\\r\\n.story-container{\\r\\n    text-align: center;\\r\\n    font-size: var(--story-fontsize);\\r\\n}\\r\\n\\r\\n.links-container{\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\n.mini-container{\\r\\n    margin: 2rem;\\r\\n}\\r\\n\\r\\nnav{\\r\\n    background-color: var(--dark-color);\\r\\n    padding: .25rem;\\r\\n}\\r\\n\\r\\nul{\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\n#footer{\\r\\n    text-align: center;\\r\\n    position: absolute;\\r\\n    bottom: 0;\\r\\n    width: 100%;\\r\\n    height: 2.5rem;\\r\\n}\\r\\n\\r\\n.nav-link{\\r\\n    font-size: var(--li-fontsize);\\r\\n    cursor: pointer;\\r\\n    margin-left: 2rem;\\r\\n    margin-right: 2rem;\\r\\n    list-style: none;\\r\\n    color: var(--light-color);\\r\\n}\\r\\n\\r\\n.icon{\\r\\n    height: var(--icon-height-width);\\r\\n    width: var(--icon-height-width);\\r\\n    border-radius: 50%;\\r\\n}\\r\\n\\r\\n#menu, #locations, #contact{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    padding-bottom: 2.5rem;\\r\\n}\\r\\n\\r\\n.menu-items{\\r\\n    background-color: white;\\r\\n    border-radius: 20px;\\r\\n    margin: var(--content-margin);\\r\\n    margin-top: 2rem;\\r\\n    padding: var(--menu-padding);\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    column-gap: 2rem;\\r\\n}\\r\\n\\r\\n.menu-title{\\r\\n    font-size: 1.25rem;\\r\\n    font-weight: bolder;\\r\\n}\\r\\n\\r\\n.drinks-menu, .toppings-menu{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    list-style-type: none;\\r\\n    font-size: 1rem;\\r\\n    padding-left: 1.5rem;\\r\\n}\\r\\n\\r\\n.drinks, .toppings{\\r\\n    font-weight: bold;\\r\\n    margin: .15rem;\\r\\n}\\r\\n\\r\\n#mail.icon{\\r\\n    margin: 1rem;\\r\\n}\\r\\n\\r\\n/* @media(min-width: 426px){\\r\\n    #title, .page-title{\\r\\n        font-size: 5rem;\\r\\n    }\\r\\n\\r\\n    .story-container{\\r\\n        font-size: 1rem;\\r\\n    }\\r\\n\\r\\n    li{\\r\\n        font-size: 1rem;\\r\\n    }\\r\\n\\r\\n    .icon{\\r\\n        height: 5rem;\\r\\n        width: 5rem; \\r\\n    }\\r\\n} */\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/clear.js":
/*!**********************!*\
  !*** ./src/clear.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clear)\n/* harmony export */ });\nfunction clear(parent){\r\n    while(parent.firstChild){\r\n        parent.removeChild(parent.firstChild);\r\n    }\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/clear.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ footer)\n/* harmony export */ });\nfunction footer(){\r\n    const footer = document.createElement('div');\r\n    const footerAbout = document.createElement('a');\r\n    const footerCareers = document.createElement('a');\r\n\r\n    footer.id = 'footer';\r\n    footerAbout.innerHTML = 'About Koala Tea | ';\r\n    footerAbout.href = '#';\r\n    footerCareers.innerHTML = 'Careers';\r\n    footerCareers.href = '#';\r\n\r\n    footer.appendChild(footerAbout);\r\n    footer.appendChild(footerCareers);\r\n\r\n    return footer;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _pages_home_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/home.js */ \"./src/pages/home/home.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clear */ \"./src/clear.js\");\n/* harmony import */ var _pages_menu_menu_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/menu/menu-container */ \"./src/pages/menu/menu-container.js\");\n/* harmony import */ var _pages_locations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/locations */ \"./src/pages/locations.js\");\n/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/contact */ \"./src/pages/contact.js\");\n/* harmony import */ var _img_koala_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/koala.jpg */ \"./src/img/koala.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst content = document.getElementById('content');\r\nconst navList = ['Home','Menu','Contact','Locations'];\r\nconst logo = new Image();\r\nconst nav = document.createElement('nav');\r\nconst ul = document.createElement('ul');\r\n\r\nlogo.src = _img_koala_jpg__WEBPACK_IMPORTED_MODULE_7__;\r\nlogo.id = 'logo';\r\nlogo.className = 'logo';\r\n\r\nnav.id='nav-bar';\r\n\r\nnavList.map(tab=>{\r\n    const li = document.createElement('li');\r\n    li.className='nav-link';\r\n    li.innerHTML=tab;\r\n    li.addEventListener('click',()=>{changeTab(tab)});\r\n    ul.appendChild(li);\r\n})\r\n\r\nnav.appendChild(ul);\r\n\r\nfunction changeTab(tab){\r\n    if(tab === 'Home'){\r\n        (0,_clear__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(content);\r\n        content.appendChild((0,_pages_home_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()); \r\n    }\r\n    if(tab === 'Menu'){\r\n        (0,_clear__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(content);\r\n        content.appendChild((0,_pages_menu_menu_container__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\r\n    }\r\n    if(tab === 'Locations'){\r\n        (0,_clear__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(content);\r\n        content.appendChild((0,_pages_locations__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\r\n    }\r\n    if(tab === 'Contact'){\r\n        (0,_clear__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(content);\r\n        content.appendChild((0,_pages_contact__WEBPACK_IMPORTED_MODULE_6__[\"default\"])());\r\n    }\r\n}\r\n\r\nchangeTab('Home');\r\ndocument.body.appendChild(logo);\r\ndocument.body.insertBefore(nav,document.getElementById('content'));\r\ndocument.body.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),document.getElementById('content'));\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\n/* harmony import */ var _img_mail_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/mail-icon.png */ \"./src/img/mail-icon.png\");\n\r\n\r\nfunction contact(){\r\n    const contact = document.createElement('div');\r\n    const title = document.createElement('h1');\r\n    const form = document.createElement('form');\r\n    const input = document.createElement('input');\r\n    const mail = new Image();\r\n\r\n    contact.id = 'contact';\r\n\r\n    title.innerHTML = 'Contact';\r\n    title.className = 'page-title'\r\n    title.id = 'contact-title';\r\n\r\n    mail.src = _img_mail_icon_png__WEBPACK_IMPORTED_MODULE_0__;\r\n    mail.id = 'mail';\r\n    mail.className = 'icon';\r\n\r\n    input.type = 'email';\r\n\r\n    contact.appendChild(title);\r\n    contact.appendChild(mail);\r\n    contact.appendChild(form);\r\n    contact.appendChild(input);\r\n\r\n    return contact;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/contact.js?");

/***/ }),

/***/ "./src/pages/home/header.js":
/*!**********************************!*\
  !*** ./src/pages/home/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ header)\n/* harmony export */ });\nfunction header(){\r\n    const header = document.createElement('div');\r\n    const title = document.createElement('h1');\r\n\r\n    title.id='title';\r\n    title.innerHTML=\"Koala Tea\";\r\n    header.className='header';\r\n\r\n    header.appendChild(title);\r\n    return header;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home/header.js?");

/***/ }),

/***/ "./src/pages/home/home.js":
/*!********************************!*\
  !*** ./src/pages/home/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _story__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./story */ \"./src/pages/home/story.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/pages/home/header.js\");\n\r\n\r\n// import homeContainers from \"./home_content\";\r\n\r\nfunction homePage(){\r\n    const home = document.createElement('div');\r\n    home.className = 'home-container';\r\n    home.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n    home.appendChild((0,_story__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n    // home.appendChild(homeContainers());\r\n\r\n    return home;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home/home.js?");

/***/ }),

/***/ "./src/pages/home/story.js":
/*!*********************************!*\
  !*** ./src/pages/home/story.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ story)\n/* harmony export */ });\nfunction story(){\r\n    const story = document.createElement('div');\r\n    const title = document.createElement('h2');\r\n    const description = document.createElement('p');\r\n\r\n    story.className='story-container';\r\n    title.innerHTML='Our Story';\r\n    description.innerHTML='Koala Tea started with a vision and a dream. Today, it still is.'\r\n\r\n    story.appendChild(title);\r\n    story.appendChild(description);\r\n\r\n    return story;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home/story.js?");

/***/ }),

/***/ "./src/pages/locations.js":
/*!********************************!*\
  !*** ./src/pages/locations.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ locations)\n/* harmony export */ });\n/* harmony import */ var _img_icon_location_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/icon-location.svg */ \"./src/img/icon-location.svg\");\n\r\n\r\nfunction locations(){\r\n    const locations = document.createElement('div');\r\n    const title = document.createElement('h1');\r\n    const icon = new Image();\r\n\r\n    locations.id = 'locations';\r\n\r\n    title.id = 'locations-title';\r\n    title.className = 'page-title';\r\n    title.innerHTML = 'Locations';\r\n\r\n    icon.src = _img_icon_location_svg__WEBPACK_IMPORTED_MODULE_0__;\r\n    icon.id = 'location-icon';\r\n    icon.className = 'icon';\r\n\r\n    locations.appendChild(title);\r\n    locations.appendChild(icon);\r\n\r\n    return locations;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/locations.js?");

/***/ }),

/***/ "./src/pages/menu/menu-container.js":
/*!******************************************!*\
  !*** ./src/pages/menu/menu-container.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _img_bobaicon_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/bobaicon.jpg */ \"./src/img/bobaicon.jpg\");\n\r\n\r\nfunction menu(){\r\n    const menu = document.createElement('div');\r\n    const title = document.createElement('h1');\r\n    const bobaImg = new Image();\r\n\r\n    menu.id = 'menu';\r\n\r\n    title.id = 'menu-title';\r\n    title.innerHTML = 'Menu';\r\n    title.className = 'page-title';\r\n\r\n    bobaImg.src = _img_bobaicon_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    bobaImg.id = 'bobaicon';\r\n    bobaImg.className = 'icon';\r\n\r\n    menu.appendChild(title);\r\n    menu.appendChild(bobaImg);\r\n    menu.appendChild(menuItems());\r\n\r\n    return menu;\r\n}\r\n\r\nfunction menuItems(){\r\n    let drinks = ['Black Milk Tea','Green Milk Tea', 'Earl Grey Milk Tea','Peach Green Tea','Honey Lemonade with Aloe', 'Royal Artichoke'];\r\n    let toppings = ['Tapioca', 'Lychee Jelly', 'Grass Jelly'];\r\n\r\n    //FIX: loop through all menu item options instead of coding each one individually\r\n    //use object instead of multiple arrays?\r\n    //FIX: display menu titles without coding each one\r\n\r\n    const menuItems = document.createElement('div');\r\n    const drinksTitle = document.createElement('div');\r\n    const toppingsTitle = document.createElement('div');\r\n    const drinksMenu = document.createElement('ul');\r\n    const toppingsMenu = document.createElement('ul');\r\n    menuItems.className = 'menu-items';\r\n    drinksMenu.className = 'drinks-menu';\r\n    toppingsMenu.className = 'toppings-menu';\r\n    \r\n    drinksTitle.textContent = 'Drinks';\r\n    drinksTitle.className = 'menu-title';\r\n    toppingsTitle.textContent = 'Toppings';\r\n    toppingsTitle.className = 'menu-title';\r\n\r\n    drinks.map(drink=>{\r\n        const li = document.createElement('li');\r\n        li.className = 'drinks';\r\n        li.innerHTML = drink;\r\n        drinksMenu.appendChild(li);\r\n    });\r\n\r\n    toppings.map(topping=>{\r\n        const li = document.createElement('li');\r\n        li.className = 'toppings';\r\n        li.innerHTML = topping;\r\n        toppingsMenu.appendChild(li);\r\n    })\r\n\r\n    drinksTitle.appendChild(drinksMenu);\r\n    toppingsTitle.appendChild(toppingsMenu);\r\n\r\n    menuItems.appendChild(drinksTitle);\r\n    menuItems.appendChild(toppingsTitle);\r\n    \r\n    return menuItems;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/menu/menu-container.js?");

/***/ }),

/***/ "./src/img/bobaicon.jpg":
/*!******************************!*\
  !*** ./src/img/bobaicon.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0c6b61d0f07529751184.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/bobaicon.jpg?");

/***/ }),

/***/ "./src/img/icon-location.svg":
/*!***********************************!*\
  !*** ./src/img/icon-location.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7e6459d2a9278295ae78.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/icon-location.svg?");

/***/ }),

/***/ "./src/img/koala.jpg":
/*!***************************!*\
  !*** ./src/img/koala.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"67449288f3f17c4d7d54.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/koala.jpg?");

/***/ }),

/***/ "./src/img/mail-icon.png":
/*!*******************************!*\
  !*** ./src/img/mail-icon.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"600d574e0bacd94c6973.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/mail-icon.png?");

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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