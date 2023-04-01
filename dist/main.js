/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  list-style-type: none;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n.headerContainer {\n  height: 15vh;\n  font-size: 1.8rem;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  background-color: rgba(204, 204, 255, 1);\n  color: white;\n  padding-left: 3vw;\n  text-decoration: underline;\n}\n\n.main {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  height: 70vh;\n  background-color: rgba(204, 204, 255, 1);\n}\n\n.tasksContainer {\n  background-color: lavenderblush;\n}\n\n.footerContainer {\n  height: 14vh;\n  background-color: lightgray;\n}\n\n.taskAdderForm {\n  display: grid;\n}\n\n.buttonsWrapper {\n  display: flex;\n  justify-content: center;\n  gap: 5px;\n}\n.taskListContainer {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-auto-rows: min-content;\n  grid-gap: 10px;\n  align-items: center;\n  justify-items: center;\n  min-width: 50vw;\n  padding-top: 5vh;\n}\n\n.taskListContainer button {\n  width: 50vw;\n  height: 7vh;\n  background-color: lavenderblush;\n  display: flex;\n}\n\n.taskAdderForm button {\n  display: flex;\n}\n\n.taskAdderForm {\n  gap: 5px;\n  padding: 1rem;\n}\n\n.confirmInputBtn,\n.cancelInputBtn {\n  color: white;\n  width: 3vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n}\n\n.confirmInputBtn:hover,\n.cancelInputBtn:hover {\n  cursor: pointer;\n  opacity: 0.8;\n}\n\n.confirmInputBtn {\n  background-color: lightgreen;\n}\n\n.cancelInputBtn {\n  background-color: red;\n}\n\n.taskContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n  border-radius: 5px;\n  padding: 5px 10px;\n  width: 80%;\n}\n\n.taskItem {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.tasksContainer {\n  overflow-y: auto;\n}\n\n.tasksContainer::-webkit-scrollbar {\n  width: 15px;\n}\n\n.tasksContainer::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n.tasksContainer::-webkit-scrollbar-thumb {\n  background-color: cornflowerblue;\n  border-radius: 10px;\n  border: 2px solid #f1f1f1;\n}\n\n.taskAndButtonWrapper {\n  display: grid;\n  justify-content: center;\n  gap: 5vh;\n}\n\n.projectNameContainer {\n  display: flex;\n  justify-content: center;\n}\n\n.projectsContainer {\n  display: grid;\n  height: fit-content;\n  gap: 1vh;\n  margin-left: 2vw;\n  margin-right: 2vw;\n  padding-top: 5vh;\n}\n\n.projectButton {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 1vw;\n  background-color: rgba(244, 204, 255, 1);\n  border-radius: 5px;\n  color: black;\n  font-style: italic;\n  border: none;\n}\n\n.projectButton button {\n  background-color: lavenderblush;\n  border-radius: 6px;\n  border-color: lightblue;\n  color: black;\n}\n\n.addProjectButton {\n  background-color: lavenderblush;\n  color: black;\n  border-radius: 10px;\n  border: 1px solid lavender;\n}\n\n.projectButton button:hover,\n.projectButton:hover,\n.addProjectButton:hover {\n  cursor: pointer;\n}\n\n.taskAdderBtn {\n  background-color: white;\n  color: black;\n}\n\n.taskCompleter {\n  height: 15px !important;\n  width: 15px !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  grid-column-start: 1;\n  grid-row: 1/3;\n}\n\n.task-due-date {\n  grid-column-start: 3;\n}\n\n.taskDeleteBtn {\n  grid-row-start: 1;\n  grid-column-start: 6;\n}\n\n.editTaskBtn {\n  grid-row-start: 1;\n  grid-column-start: 5;\n}\n\n.taskDescriptionBtn {\n  grid-column: 5/7;\n}\n\n.changePriorityButon {\n  grid-row-start: 1;\n  grid-column-start: 4;\n}\n\n.completed {\n  background-color: lightgreen !important;\n  color: white;\n  border: 2px solid green;\n}\n\n.task {\n  display: grid !important;\n  grid-template-columns: 2vw 5fr 1fr 0.5fr 0.5fr 0.2fr;\n  gap: 10px;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\np {\n  margin: 0;\n}\n\n.completedTask {\n  text-decoration: line-through;\n}\n\n.high {\n  border-left: solid red 0.5vw !important;\n}\n\n.medium {\n  border-left: solid orange 0.5vw !important;\n}\n\n.task {\n  border-left: solid lightblue 0.5vw;\n}\n\n.changePriorityButon,\n.editTaskBtn,\n.taskDescriptionBtn,\n.taskDeleteBtn {\n  height: fit-content !important;\n  width: fit-content !important;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;AACvB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,wCAAwC;EACxC,YAAY;EACZ,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY;EACZ,wCAAwC;AAC1C;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,QAAQ;AACV;AACA;EACE,aAAa;EACb,0BAA0B;EAC1B,2BAA2B;EAC3B,cAAc;EACd,mBAAmB;EACnB,qBAAqB;EACrB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,+BAA+B;EAC/B,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,QAAQ;EACR,aAAa;AACf;;AAEA;;EAEE,YAAY;EACZ,UAAU;EACV,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;AAEA;;EAEE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gCAAgC;EAChC,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,iBAAiB;EACjB,wCAAwC;EACxC,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,+BAA+B;EAC/B,kBAAkB;EAClB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,+BAA+B;EAC/B,YAAY;EACZ,mBAAmB;EACnB,0BAA0B;AAC5B;;AAEA;;;EAGE,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,oBAAoB;EACpB,aAAa;AACf;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,uCAAuC;EACvC,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,wBAAwB;EACxB,oDAAoD;EACpD,SAAS;EACT,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,kCAAkC;AACpC;;AAEA;;;;EAIE,8BAA8B;EAC9B,6BAA6B;AAC/B","sourcesContent":["* {\n  list-style-type: none;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n.headerContainer {\n  height: 15vh;\n  font-size: 1.8rem;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  background-color: rgba(204, 204, 255, 1);\n  color: white;\n  padding-left: 3vw;\n  text-decoration: underline;\n}\n\n.main {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  height: 70vh;\n  background-color: rgba(204, 204, 255, 1);\n}\n\n.tasksContainer {\n  background-color: lavenderblush;\n}\n\n.footerContainer {\n  height: 14vh;\n  background-color: lightgray;\n}\n\n.taskAdderForm {\n  display: grid;\n}\n\n.buttonsWrapper {\n  display: flex;\n  justify-content: center;\n  gap: 5px;\n}\n.taskListContainer {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-auto-rows: min-content;\n  grid-gap: 10px;\n  align-items: center;\n  justify-items: center;\n  min-width: 50vw;\n  padding-top: 5vh;\n}\n\n.taskListContainer button {\n  width: 50vw;\n  height: 7vh;\n  background-color: lavenderblush;\n  display: flex;\n}\n\n.taskAdderForm button {\n  display: flex;\n}\n\n.taskAdderForm {\n  gap: 5px;\n  padding: 1rem;\n}\n\n.confirmInputBtn,\n.cancelInputBtn {\n  color: white;\n  width: 3vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n}\n\n.confirmInputBtn:hover,\n.cancelInputBtn:hover {\n  cursor: pointer;\n  opacity: 0.8;\n}\n\n.confirmInputBtn {\n  background-color: lightgreen;\n}\n\n.cancelInputBtn {\n  background-color: red;\n}\n\n.taskContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n  border-radius: 5px;\n  padding: 5px 10px;\n  width: 80%;\n}\n\n.taskItem {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.tasksContainer {\n  overflow-y: auto;\n}\n\n.tasksContainer::-webkit-scrollbar {\n  width: 15px;\n}\n\n.tasksContainer::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n.tasksContainer::-webkit-scrollbar-thumb {\n  background-color: cornflowerblue;\n  border-radius: 10px;\n  border: 2px solid #f1f1f1;\n}\n\n.taskAndButtonWrapper {\n  display: grid;\n  justify-content: center;\n  gap: 5vh;\n}\n\n.projectNameContainer {\n  display: flex;\n  justify-content: center;\n}\n\n.projectsContainer {\n  display: grid;\n  height: fit-content;\n  gap: 1vh;\n  margin-left: 2vw;\n  margin-right: 2vw;\n  padding-top: 5vh;\n}\n\n.projectButton {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 1vw;\n  background-color: rgba(244, 204, 255, 1);\n  border-radius: 5px;\n  color: black;\n  font-style: italic;\n  border: none;\n}\n\n.projectButton button {\n  background-color: lavenderblush;\n  border-radius: 6px;\n  border-color: lightblue;\n  color: black;\n}\n\n.addProjectButton {\n  background-color: lavenderblush;\n  color: black;\n  border-radius: 10px;\n  border: 1px solid lavender;\n}\n\n.projectButton button:hover,\n.projectButton:hover,\n.addProjectButton:hover {\n  cursor: pointer;\n}\n\n.taskAdderBtn {\n  background-color: white;\n  color: black;\n}\n\n.taskCompleter {\n  height: 15px !important;\n  width: 15px !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  grid-column-start: 1;\n  grid-row: 1/3;\n}\n\n.task-due-date {\n  grid-column-start: 3;\n}\n\n.taskDeleteBtn {\n  grid-row-start: 1;\n  grid-column-start: 6;\n}\n\n.editTaskBtn {\n  grid-row-start: 1;\n  grid-column-start: 5;\n}\n\n.taskDescriptionBtn {\n  grid-column: 5/7;\n}\n\n.changePriorityButon {\n  grid-row-start: 1;\n  grid-column-start: 4;\n}\n\n.completed {\n  background-color: lightgreen !important;\n  color: white;\n  border: 2px solid green;\n}\n\n.task {\n  display: grid !important;\n  grid-template-columns: 2vw 5fr 1fr 0.5fr 0.5fr 0.2fr;\n  gap: 10px;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\np {\n  margin: 0;\n}\n\n.completedTask {\n  text-decoration: line-through;\n}\n\n.high {\n  border-left: solid red 0.5vw !important;\n}\n\n.medium {\n  border-left: solid orange 0.5vw !important;\n}\n\n.task {\n  border-left: solid lightblue 0.5vw;\n}\n\n.changePriorityButon,\n.editTaskBtn,\n.taskDescriptionBtn,\n.taskDeleteBtn {\n  height: fit-content !important;\n  width: fit-content !important;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addProjectButton.js":
/*!*********************************!*\
  !*** ./src/addProjectButton.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProjectAdder)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _projectButtonCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectButtonCreator */ "./src/projectButtonCreator.js");



const addProjectButton = document.createElement('button');

function validateProjectName(projectNames, projectName) {
  for (let i = 0; i < projectNames.length; i += 1) {
    if (projectNames[i] === projectName) {
      alert('A project with that name already exists');
      return false;
    }
    if (projectName.length <= 0) {
      alert('Project name cannot be empty');
      return false;
    }
  }
  return true;
}

function initialiseListeners(
  { confirmButton, cancelButton, inputField },
  { projectListElement, taskListElement }
) {
  confirmButton.addEventListener('click', () => {
    const projectNames = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.map(proj => proj.name);
    const projectName = inputField.value;

    if (validateProjectName(projectNames, projectName)) {
      const newProject = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.createProject)(projectName);
      inputField.remove();
      confirmButton.remove();
      cancelButton.remove();
      (0,_projectButtonCreator__WEBPACK_IMPORTED_MODULE_1__["default"])([newProject], projectListElement, taskListElement);
      addProjectButton.disabled = false; // Enable the button
    }
  });

  cancelButton.addEventListener('click', () => {
    inputField.remove();
    confirmButton.remove();
    cancelButton.remove();
    addProjectButton.disabled = false; // Enable the button
  });
}

function createProjectAdder(
  projectListElement,
  taskListElement
) {
  addProjectButton.textContent = '+ Add a project';
  addProjectButton.classList.add('addProjectButton');
  projectListElement.appendChild(addProjectButton);

  addProjectButton.addEventListener('click', () => {
    addProjectButton.disabled = true; // Disable the button
    const inputField = document.createElement('input');
    projectListElement.appendChild(inputField);

    const confirmButton = document.createElement('button');
    confirmButton.textContent = 'Confirm';
    projectListElement.appendChild(confirmButton);

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    projectListElement.appendChild(cancelButton);

    initialiseListeners(
      { confirmButton, cancelButton, inputField },
      { projectListElement, taskListElement }
    );
  });
}


/***/ }),

/***/ "./src/createAddTaskButton.js":
/*!************************************!*\
  !*** ./src/createAddTaskButton.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createAddTaskButton),
/* harmony export */   "renderTask": () => (/* binding */ renderTask)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");




function createAddTaskButton(project, tasksContainer) {
  let editingTaskElement = null;
  const taskAndButtonWrapper = document.createElement('div');
  taskAndButtonWrapper.classList.add('taskAndButtonWrapper');
  tasksContainer.appendChild(taskAndButtonWrapper);

  const taskListContainer = document.createElement('div');
  taskListContainer.classList.add('taskListContainer');
  taskAndButtonWrapper.appendChild(taskListContainer);

  const createAddTaskForm = () => {
    const addTaskForm = document.createElement('form');
    addTaskForm.classList.add('taskAdderForm');

    const addTaskButton = document.createElement('button');
    addTaskButton.textContent = '+ Add a task';
    addTaskButton.type = 'button';
    addTaskButton.classList.add('taskAdderBtn');
    addTaskForm.appendChild(addTaskButton);

    addTaskButton.addEventListener('click', () => {
      createTaskInputControls(addTaskForm);
      addTaskButton.disabled = true;
    });

    addTaskForm.addEventListener('submit', event => {
      event.preventDefault();
      const taskNameInput = addTaskForm.querySelector('.taskNameInput');
      const taskDescriptionInput = addTaskForm.querySelector(
        '.taskDescriptionInput'
      );
      const taskDateInput = addTaskForm.querySelector('.taskDateInput');
      const taskPriorityInput = addTaskForm.querySelector(
        '.taskPrioritySelector'
      );
      const taskName = taskNameInput.value;
      const taskDescription = taskDescriptionInput.value;
      const taskDueDate = taskDateInput.value;
      const taskPriority = taskPriorityInput.value;

      if (!addTaskForm.editing) {
        const projectTasks = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.find(
          proj => proj.name === project.name
        ).tasks;
        const isTaskNameAlreadyExists = projectTasks.some(
          task => task.title === taskName
        );

        if (isTaskNameAlreadyExists) {
          alert('A task with the same name already exists in this project.');
          return;
        }

        const newTask = new _tasks__WEBPACK_IMPORTED_MODULE_1__["default"](
          taskName,
          taskDescription,
          taskDueDate,
          taskPriority
        );
        (0,_projects__WEBPACK_IMPORTED_MODULE_0__.addTaskToProject)(project.name, newTask);
        renderTask(newTask, tasksContainer, project.name);

        resetTaskForm(addTaskForm);
      } else {
        const projectObj = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.find(proj => proj.name === project.name);
        const taskIndex = projectObj.tasks.findIndex(
          task =>
            task.title ===
            addTaskForm.editingTaskElement.querySelector('.task-name')
              .textContent
        );
        const taskObj = projectObj.tasks[taskIndex];
        const projectTasks = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.find(
          proj => proj.name === project.name
        ).tasks;
        const isTaskNameAlreadyExists = projectTasks.some(
          task => task.title === taskName
        );
        if (isTaskNameAlreadyExists) {
          alert('There is already a task with that name');
          return;
        }
        taskObj.title = taskName;
        taskObj.description = taskDescription;
        taskObj.dueDate = taskDueDate;
        taskObj.priority = taskPriority;
        addTaskForm.editingTaskElement.querySelector('.task-name').textContent =
          taskName;
        addTaskForm.editingTaskElement.querySelector(
          '.task-due-date'
        ).textContent = taskDueDate
          ? `Due date: ${taskDueDate}`
          : 'No due date';
        addTaskForm.editingTaskElement.querySelector(
          '.changePriorityButon'
        ).value = taskPriority;
        addTaskForm.editingTaskElement.classList.remove(
          'high',
          'medium',
          'low'
        );
        addTaskForm.editingTaskElement.classList.add(taskPriority);

        resetTaskForm(addTaskForm);
        addTaskForm.editing = false;
        editingTaskElement = null;
      }
    });

    return addTaskForm;
  };
  const addTaskForm = createAddTaskForm();
  taskAndButtonWrapper.appendChild(addTaskForm);
}

function createTaskInputControls(addTaskForm) {
  const taskNameInput = document.createElement('input');
  taskNameInput.placeholder = 'Add a task';
  taskNameInput.required = true;
  taskNameInput.classList.add('taskNameInput');
  addTaskForm.appendChild(taskNameInput);

  const taskDescriptionInput = document.createElement('input');
  taskDescriptionInput.placeholder = 'Add a description';
  taskDescriptionInput.classList.add('taskDescriptionInput');
  addTaskForm.appendChild(taskDescriptionInput);

  const taskDateInput = document.createElement('input');
  taskDateInput.type = 'date';
  taskDateInput.classList.add('taskDateInput');
  addTaskForm.appendChild(taskDateInput);

  const taskPrioritySelect = document.createElement('select');
  taskPrioritySelect.innerHTML = `
    <option value="" disabled selected hidden>Priority:</option>
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
  `;

  taskPrioritySelect.classList.add('taskPrioritySelector');
  addTaskForm.appendChild(taskPrioritySelect);

  const buttonsWrapper = document.createElement('div');
  buttonsWrapper.classList.add('buttonsWrapper');
  addTaskForm.appendChild(buttonsWrapper);

  const confirmInput = document.createElement('button');
  confirmInput.textContent = '✓';
  confirmInput.classList.add('confirmInputBtn');
  confirmInput.type = 'submit';
  buttonsWrapper.appendChild(confirmInput);

  const cancelInput = document.createElement('button');
  cancelInput.textContent = 'X';
  cancelInput.classList.add('cancelInputBtn');
  cancelInput.type = 'button';
  buttonsWrapper.appendChild(cancelInput);

  cancelInput.addEventListener('click', () => {
    taskNameInput.value = '';
    taskDescriptionInput.value = '';
    resetTaskForm(addTaskForm);
  });
}

function resetTaskForm(addTaskForm) {
  const addTaskButton = addTaskForm.querySelector('.taskAdderBtn');
  addTaskButton.disabled = false;

  const buttonsWrapper = addTaskForm.querySelector('.buttonsWrapper');
  if (buttonsWrapper) {
    addTaskForm.removeChild(buttonsWrapper);
  }

  addTaskForm.querySelectorAll('input').forEach(element => {
    addTaskForm.removeChild(element);
  });

  const taskPriority = document.querySelector('.taskPrioritySelector');
  addTaskForm.removeChild(taskPriority);
}

function renderTask(task, container, taskDueDateValue, projectName) {
  const taskElement = document.createElement('button');
  taskElement.classList.add('task');
  const taskName = document.createElement('span');
  taskName.classList.add('task-name');
  taskName.textContent = task.title;
  taskElement.appendChild(taskName);
  const toDoList = document.createElement('div');
  container.querySelector('.taskListContainer').appendChild(toDoList);
  toDoList.appendChild(taskElement);

  const taskDueDate = document.createElement('p');
  taskDueDate.classList.add('task-due-date');
  if (taskDueDateValue) {
    taskDueDate.textContent = `Due date: ${task.dueDate}`;
    console.log(taskDueDateValue);
  } else {
    taskDueDate.textContent = 'No due date';
  }
  taskElement.appendChild(taskDueDate);
  taskElement.appendChild(taskDueDate);

  const taskCompleter = document.createElement('button');
  taskCompleter.classList.add('taskCompleter');
  taskCompleter.addEventListener('click', () => {
    if (task.completed) {
      task.uncompleteTask();
      taskCompleter.textContent = '';
      taskCompleter.classList.remove('completed');
      taskCompleter.classList.add('uncompleted');
      taskElement.classList.remove('completedTask');
    } else {
      task.completeTask();
      taskCompleter.textContent = '✓';
      taskCompleter.classList.remove('uncompleted');
      taskCompleter.classList.add('completed');
      taskElement.classList.add('completedTask');
    }
  });
  if (task.completed) {
    taskCompleter.textContent = '✓';
    taskCompleter.classList.add('completed');
    taskElement.classList.add('completedTask');
  } else {
    console.log(`Task: ${task.title}, Completed: ${task.completed}`);
    taskCompleter.classList.add('uncompleted');
  }

  const changePriority = document.createElement('select');
  changePriority.classList.add('changePriorityButon');
  changePriority.innerHTML = ` 
  <option value="" disabled selected hidden>Priority:</option>
  <option value="high">High</option>
  <option value="medium">Medium</option>
  <option value="low">Low</option>';`;
  changePriority.addEventListener('change', () => {
    const oldP = task.priority;
    task.changePriority(changePriority.value);
    taskElement.classList.remove(oldP);
    const newP = task.priority;
    taskElement.classList.add(newP);
  });

  taskElement.appendChild(changePriority);

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.classList.add('editTaskBtn');
  taskElement.appendChild(editButton);

  editButton.addEventListener('click', () => {
    if (document.querySelector('.taskNameInput')) {
      return; // prevent multiple edits and editing while a task is being added
    }
    const addTaskForm = document.querySelector('.taskAdderForm');
    createTaskInputControls(addTaskForm);
    populateForm(addTaskForm, task);
    addTaskForm.editing = true;
    addTaskForm.editingTaskElement = taskElement;
  });

  taskElement.appendChild(taskCompleter);
  if (task.priority) {
    const taskP = task.priority;
    taskElement.classList.add(taskP);
  }

  const taskDescriptionButton = document.createElement('button');
  taskDescriptionButton.textContent = '- Expand task';
  taskDescriptionButton.classList.add('taskDescriptionBtn');
  taskElement.appendChild(taskDescriptionButton);

  let descriptionAdded = false;

  const taskExpander = () => {
    taskDescriptionButton.addEventListener('click', () => {
      if (!descriptionAdded) {
        const taskDescription = document.createElement('p');
        taskDescription.innerText = task.description;
        taskDescription.classList.add('desc');
        taskElement.appendChild(taskDescription);
        descriptionAdded = true;
      } else {
        const taskDescription = taskElement.querySelector('.desc');
        taskElement.removeChild(taskDescription);
        descriptionAdded = false;
      }
    });
  };

  taskExpander();
  const deleteTask = () => {
    const taskDeleteBtn = document.createElement('button');
    taskDeleteBtn.innerText = 'X';
    taskDeleteBtn.classList.add('taskDeleteBtn');
    taskDeleteBtn.addEventListener('click', () => {
      (0,_projects__WEBPACK_IMPORTED_MODULE_0__.removeTaskFromProject)(projectName, task);
      taskElement.parentElement.removeChild(taskElement);
    });
    taskElement.appendChild(taskDeleteBtn);
  };

  deleteTask();

  function populateForm(form, task) {
    form.querySelector('.taskNameInput').value = task.title;
    form.querySelector('.taskDescriptionInput').value = task.description;
    form.querySelector('.taskDateInput').value = task.dueDate;
    form.querySelector('.taskPrioritySelector').value = task.priority;
  }
}


/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ saveToLocalStorage),
/* harmony export */   "removeFromLocalStorage": () => (/* binding */ removeFromLocalStorage)
/* harmony export */ });
function saveToLocalStorage(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

function removeFromLocalStorage(key) {
  localStorage.removeItem(key);
}


/***/ }),

/***/ "./src/domHandler.js":
/*!***************************!*\
  !*** ./src/domHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createPageDOM)
/* harmony export */ });
/* harmony import */ var _pageLayoutDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLayoutDOM */ "./src/pageLayoutDOM.js");


function createPageDOM() {
  (0,_pageLayoutDOM__WEBPACK_IMPORTED_MODULE_0__["default"])();
}


/***/ }),

/***/ "./src/pageLayoutDOM.js":
/*!******************************!*\
  !*** ./src/pageLayoutDOM.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createPageLayout)
/* harmony export */ });
/* harmony import */ var _projectButtonCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectButtonCreator */ "./src/projectButtonCreator.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _addProjectButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addProjectButton */ "./src/addProjectButton.js");
/* harmony import */ var _createAddTaskButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createAddTaskButton */ "./src/createAddTaskButton.js");





function createHeader() {
  const headerContainer = document.createElement('div');
  headerContainer.classList.add('headerContainer');
  document.body.appendChild(headerContainer);

  const header = document.createElement('h2');
  header.classList.add('header');
  header.innerText = 'Todo List';
  headerContainer.appendChild(header);
}

function createMain() {
  const main = document.createElement('div');
  main.classList.add('main');
  document.body.appendChild(main);

  const projectContainer = document.createElement('div');
  projectContainer.classList.add('projectsContainer');
  main.appendChild(projectContainer);

  const tasksContainer = document.createElement('div');
  tasksContainer.classList.add('tasksContainer');
  main.appendChild(tasksContainer);

  (0,_addProjectButton__WEBPACK_IMPORTED_MODULE_2__["default"])(projectContainer, tasksContainer);

  (0,_projectButtonCreator__WEBPACK_IMPORTED_MODULE_0__["default"])(
    _projects__WEBPACK_IMPORTED_MODULE_1__.projects,
    projectContainer,
    tasksContainer,
    _createAddTaskButton__WEBPACK_IMPORTED_MODULE_3__["default"]
  );
}

function createFooter() {
  const footerContainer = document.createElement('div');
  footerContainer.classList.add('footerContainer');
  document.body.appendChild(footerContainer);

  const footer = document.createElement('footer');
  footer.classList.add('footer');
  footerContainer.appendChild(footer);
}

function createPageLayout() {
  createHeader();
  createMain();
  createFooter();
}


/***/ }),

/***/ "./src/projectButtonCreator.js":
/*!*************************************!*\
  !*** ./src/projectButtonCreator.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectButton": () => (/* binding */ createProjectButton),
/* harmony export */   "default": () => (/* binding */ projectButtonCreator)
/* harmony export */ });
/* harmony import */ var _createAddTaskButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createAddTaskButton */ "./src/createAddTaskButton.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");



function createProjectButton(project) {
  const projectButton = document.createElement('button');
  projectButton.textContent = project.name;
  projectButton.classList.add('projectButton');

  return projectButton;
}

function clearTasksContainer(tasksContainer) {
  tasksContainer.innerHTML = '';
}

function renderProjectTasks(project, tasksContainer) {
  const taskListContainer = tasksContainer.querySelector('.taskListContainer');
  project.tasks.forEach(task => {
    (0,_createAddTaskButton__WEBPACK_IMPORTED_MODULE_0__.renderTask)(task, tasksContainer, task.dueDate, project.name);
  });
}

const appendAProjectName = (project, tasksContainer) => {
  const projectNameContainer = document.createElement('div');
  projectNameContainer.classList.add('projectNameContainer');

  const projectName = document.createElement('h2');
  projectName.textContent = project.name;
  projectNameContainer.appendChild(projectName);

  tasksContainer.insertBefore(projectNameContainer, tasksContainer.firstChild);
};

function setupProjectButtonEventListener(
  projectButton,
  project,
  tasksContainer
) {
  projectButton.addEventListener('click', () => {
    clearTasksContainer(tasksContainer);
    (0,_createAddTaskButton__WEBPACK_IMPORTED_MODULE_0__["default"])(project, tasksContainer);
    appendAProjectName(project, tasksContainer);
    renderProjectTasks(project, tasksContainer);
  });
}

function projectButtonCreator(
  projects,
  projectContainer,
  tasksContainer
) {
  projects.forEach(project => {
    const projectButton = createProjectButton(project);
    projectContainer.appendChild(projectButton);

    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.innerText = 'X';
    deleteProjectButton.addEventListener('click', () => {
      if (project.name !== 'All tasks') {
        (0,_projects__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(project.name);
        projectContainer.removeChild(projectButton);
      } else {
        alert('Cannot delete this project!');
      }
    });
    projectButton.appendChild(deleteProjectButton);

    setupProjectButtonEventListener(projectButton, project, tasksContainer);
  });
}


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskToProject": () => (/* binding */ addTaskToProject),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "removeTaskFromProject": () => (/* binding */ removeTaskFromProject)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");


const defaultProjects = [
  { name: 'Home', tasks: [] },
  { name: 'Important', tasks: [] },
  { name: 'All tasks', tasks: [] },
];

const storedProjects = localStorage.getItem('projects');

const projects =
  storedProjects && storedProjects !== 'undefined'
    ? JSON.parse(storedProjects)
    : defaultProjects;

function saveProjects() {
  localStorage.setItem('projects', JSON.stringify(projects));
}

function createProject(name) {
  const newProject = { name, tasks: [] };
  projects.push(newProject);
  saveProjects();

  return newProject;
}

function deleteProject(projectNameToDelete) {
  const projectIndex = projects.findIndex(p => p.name === projectNameToDelete);
  if (projectIndex !== -1 && projectNameToDelete !== 'All tasks') {
    const deletedProject = projects.splice(projectIndex, 1)[0];

    // Remove the tasks from the deleted project in the 'All Tasks' project
    const allTasksProject = projects.find(p => p.name === 'All tasks');
    deletedProject.tasks.forEach(task => {
      const taskIndex = allTasksProject.tasks.findIndex(t => t.id === task.id);
      if (taskIndex !== -1) {
        allTasksProject.tasks.splice(taskIndex, 1);
      }
      (0,_data__WEBPACK_IMPORTED_MODULE_0__.removeFromLocalStorage)(task.id); // Remove the task from local storage
    });

    saveProjects();
  }
}

function addTaskToProject(projectName, task) {
  const project = projects.find(p => p.name === projectName);
  const allTasksProject = projects.find(p => p.name === 'All tasks');

  if (project && project.name !== 'All tasks') {
    project.tasks.push(task);
    if (!allTasksProject.tasks.includes(task)) {
      allTasksProject.tasks.push(task);
    }
  } else if (project && project.name === 'All tasks') {
    if (!allTasksProject.tasks.includes(task)) {
      allTasksProject.tasks.push(task);
    }
  } else {
    projects[0].tasks.push(task);
  }
  saveProjects();
}
function removeTaskFromProject(projectName, task) {
  console.log('Removing task from project:', projectName);
  console.log('Task to remove:', task);

  const project = projects.find(p => p.name === projectName);
  console.log('Found project:', project);

  if (project) {
    const taskIndex = project.tasks.findIndex(t => t.id === task.id);
    console.log('Task index:', taskIndex);

    if (taskIndex !== -1) {
      project.tasks.splice(taskIndex, 1);
      console.log('Task removed from project', project);
      saveProjects();
    }

    // Remove the task from the 'All Tasks' project as well
    if (projectName !== 'All tasks') {
      const allTasksProject = projects.find(p => p.name === 'All tasks');
      const allTasksIndex = allTasksProject.tasks.findIndex(
        t => t.id === task.id
      );
      if (allTasksIndex !== -1) {
        allTasksProject.tasks.splice(allTasksIndex, 1);
        saveProjects();
      }
    }
  }
}


/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TaskCreator)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/data.js");



function TaskCreator(
  title,
  description,
  dueDate,
  priority,
  projectName,
  id,
  completed
) {
  const task = {
    title,
    description,
    dueDate,
    priority: priority || 'low',
    completed: completed || false,
    id: id || new Date().getTime().toString(),

    completeTask() {
      this.completed = true;
    },

    uncompleteTask() {
      this.completed = false;
    },

    changePriority(newPriority) {
      this.priority = newPriority;
    },

    updateTask(newTitle, newDescription, newDueDate, newPriority) {
      this.title = newTitle;
      this.description = newDescription;
      this.dueDate = newDueDate;
      this.priority = newPriority;
    },
  };

  (0,_projects__WEBPACK_IMPORTED_MODULE_0__.addTaskToProject)(projectName || 'All tasks', task);
  return task;
}


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _domHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domHandler */ "./src/domHandler.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");








(0,_domHandler__WEBPACK_IMPORTED_MODULE_1__["default"])();

window.createProject = _projects__WEBPACK_IMPORTED_MODULE_0__.createProject;
window.projects = _projects__WEBPACK_IMPORTED_MODULE_0__.projects;
window.TaskCreator = _tasks__WEBPACK_IMPORTED_MODULE_2__["default"];
window.addTaskToProject = _projects__WEBPACK_IMPORTED_MODULE_0__.addTaskToProject;
window.deleteProject = _projects__WEBPACK_IMPORTED_MODULE_0__.deleteProject;
window.removeTaskFromProject = _projects__WEBPACK_IMPORTED_MODULE_0__.removeTaskFromProject;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsWUFBWTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGFBQWE7QUFDeEQ7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSix5QkFBeUIsV0FBVyxlQUFlLGVBQWU7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FB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O1VDMUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNNb0I7O0FBRXdCOztBQUVWOztBQUViOztBQUVyQix1REFBZ0I7O0FBRWhCLHVCQUF1QixvREFBYTtBQUNwQyxrQkFBa0IsK0NBQVE7QUFDMUIscUJBQXFCLDhDQUFXO0FBQ2hDLDBCQUEwQix1REFBZ0I7QUFDMUMsdUJBQXVCLG9EQUFhO0FBQ3BDLCtCQUErQiw0REFBcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hZGRQcm9qZWN0QnV0dG9uLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZUFkZFRhc2tCdXR0b24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kb21IYW5kbGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3BhZ2VMYXlvdXRET00uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdEJ1dHRvbkNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uaGVhZGVyQ29udGFpbmVyIHtcXG4gIGhlaWdodDogMTV2aDtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNCwgMjA0LCAyNTUsIDEpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZy1sZWZ0OiAzdnc7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gIGhlaWdodDogNzB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA0LCAyMDQsIDI1NSwgMSk7XFxufVxcblxcbi50YXNrc0NvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcmJsdXNoO1xcbn1cXG5cXG4uZm9vdGVyQ29udGFpbmVyIHtcXG4gIGhlaWdodDogMTR2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLnRhc2tBZGRlckZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmJ1dHRvbnNXcmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG4udGFza0xpc3RDb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbi1jb250ZW50O1xcbiAgZ3JpZC1nYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgbWluLXdpZHRoOiA1MHZ3O1xcbiAgcGFkZGluZy10b3A6IDV2aDtcXG59XFxuXFxuLnRhc2tMaXN0Q29udGFpbmVyIGJ1dHRvbiB7XFxuICB3aWR0aDogNTB2dztcXG4gIGhlaWdodDogN3ZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXJibHVzaDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50YXNrQWRkZXJGb3JtIGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGFza0FkZGVyRm9ybSB7XFxuICBnYXA6IDVweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5jb25maXJtSW5wdXRCdG4sXFxuLmNhbmNlbElucHV0QnRuIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAzdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uY29uZmlybUlucHV0QnRuOmhvdmVyLFxcbi5jYW5jZWxJbnB1dEJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5jb25maXJtSW5wdXRCdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuLmNhbmNlbElucHV0QnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnRhc2tDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4udGFza0l0ZW0ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrc0NvbnRhaW5lciB7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4udGFza3NDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxNXB4O1xcbn1cXG5cXG4udGFza3NDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxufVxcblxcbi50YXNrc0NvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2YxZjFmMTtcXG59XFxuXFxuLnRhc2tBbmRCdXR0b25XcmFwcGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNXZoO1xcbn1cXG5cXG4ucHJvamVjdE5hbWVDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdHNDb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBnYXA6IDF2aDtcXG4gIG1hcmdpbi1sZWZ0OiAydnc7XFxuICBtYXJnaW4tcmlnaHQ6IDJ2dztcXG4gIHBhZGRpbmctdG9wOiA1dmg7XFxufVxcblxcbi5wcm9qZWN0QnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nLWxlZnQ6IDF2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCAyMDQsIDI1NSwgMSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0QnV0dG9uIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcmJsdXNoO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyLWNvbG9yOiBsaWdodGJsdWU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5hZGRQcm9qZWN0QnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxhdmVuZGVyYmx1c2g7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGF2ZW5kZXI7XFxufVxcblxcbi5wcm9qZWN0QnV0dG9uIGJ1dHRvbjpob3ZlcixcXG4ucHJvamVjdEJ1dHRvbjpob3ZlcixcXG4uYWRkUHJvamVjdEJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrQWRkZXJCdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi50YXNrQ29tcGxldGVyIHtcXG4gIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xcbiAgd2lkdGg6IDE1cHggIWltcG9ydGFudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGdyaWQtcm93OiAxLzM7XFxufVxcblxcbi50YXNrLWR1ZS1kYXRlIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xcbn1cXG5cXG4udGFza0RlbGV0ZUJ0biB7XFxuICBncmlkLXJvdy1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiA2O1xcbn1cXG5cXG4uZWRpdFRhc2tCdG4ge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbi1zdGFydDogNTtcXG59XFxuXFxuLnRhc2tEZXNjcmlwdGlvbkJ0biB7XFxuICBncmlkLWNvbHVtbjogNS83O1xcbn1cXG5cXG4uY2hhbmdlUHJpb3JpdHlCdXRvbiB7XFxuICBncmlkLXJvdy1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiA0O1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW4gIWltcG9ydGFudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4udGFzayB7XFxuICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJ2dyA1ZnIgMWZyIDAuNWZyIDAuNWZyIDAuMmZyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmNvbXBsZXRlZFRhc2sge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5oaWdoIHtcXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCByZWQgMC41dncgIWltcG9ydGFudDtcXG59XFxuXFxuLm1lZGl1bSB7XFxuICBib3JkZXItbGVmdDogc29saWQgb3JhbmdlIDAuNXZ3ICFpbXBvcnRhbnQ7XFxufVxcblxcbi50YXNrIHtcXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCBsaWdodGJsdWUgMC41dnc7XFxufVxcblxcbi5jaGFuZ2VQcmlvcml0eUJ1dG9uLFxcbi5lZGl0VGFza0J0bixcXG4udGFza0Rlc2NyaXB0aW9uQnRuLFxcbi50YXNrRGVsZXRlQnRuIHtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsd0NBQXdDO0VBQ3hDLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsUUFBUTtBQUNWO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCwrQkFBK0I7RUFDL0IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsUUFBUTtFQUNSLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwwQkFBMEI7QUFDNUI7O0FBRUE7OztFQUdFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLG9EQUFvRDtFQUNwRCxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTs7OztFQUlFLDhCQUE4QjtFQUM5Qiw2QkFBNkI7QUFDL0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmhlYWRlckNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDE1dmg7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDQsIDIwNCwgMjU1LCAxKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmctbGVmdDogM3Z3O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICBoZWlnaHQ6IDcwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNCwgMjA0LCAyNTUsIDEpO1xcbn1cXG5cXG4udGFza3NDb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXJibHVzaDtcXG59XFxuXFxuLmZvb3RlckNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDE0dmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi50YXNrQWRkZXJGb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5idXR0b25zV3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG59XFxuLnRhc2tMaXN0Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtYXV0by1yb3dzOiBtaW4tY29udGVudDtcXG4gIGdyaWQtZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogNTB2dztcXG4gIHBhZGRpbmctdG9wOiA1dmg7XFxufVxcblxcbi50YXNrTGlzdENvbnRhaW5lciBidXR0b24ge1xcbiAgd2lkdGg6IDUwdnc7XFxuICBoZWlnaHQ6IDd2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxhdmVuZGVyYmx1c2g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGFza0FkZGVyRm9ybSBidXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhc2tBZGRlckZvcm0ge1xcbiAgZ2FwOiA1cHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uY29uZmlybUlucHV0QnRuLFxcbi5jYW5jZWxJbnB1dEJ0biB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3aWR0aDogM3Z3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmNvbmZpcm1JbnB1dEJ0bjpob3ZlcixcXG4uY2FuY2VsSW5wdXRCdG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4uY29uZmlybUlucHV0QnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcblxcbi5jYW5jZWxJbnB1dEJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi50YXNrQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLnRhc2tJdGVtIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFza3NDb250YWluZXIge1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnRhc2tzQ29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTVweDtcXG59XFxuXFxuLnRhc2tzQ29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcbn1cXG5cXG4udGFza3NDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmMWYxZjE7XFxufVxcblxcbi50YXNrQW5kQnV0dG9uV3JhcHBlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDV2aDtcXG59XFxuXFxuLnByb2plY3ROYW1lQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RzQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgZ2FwOiAxdmg7XFxuICBtYXJnaW4tbGVmdDogMnZ3O1xcbiAgbWFyZ2luLXJpZ2h0OiAydnc7XFxuICBwYWRkaW5nLXRvcDogNXZoO1xcbn1cXG5cXG4ucHJvamVjdEJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZy1sZWZ0OiAxdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NCwgMjA0LCAyNTUsIDEpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdEJ1dHRvbiBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXJibHVzaDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJvcmRlci1jb2xvcjogbGlnaHRibHVlO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uYWRkUHJvamVjdEJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcmJsdXNoO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxhdmVuZGVyO1xcbn1cXG5cXG4ucHJvamVjdEJ1dHRvbiBidXR0b246aG92ZXIsXFxuLnByb2plY3RCdXR0b246aG92ZXIsXFxuLmFkZFByb2plY3RCdXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFza0FkZGVyQnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udGFza0NvbXBsZXRlciB7XFxuICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcXG4gIHdpZHRoOiAxNXB4ICFpbXBvcnRhbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBncmlkLXJvdzogMS8zO1xcbn1cXG5cXG4udGFzay1kdWUtZGF0ZSB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMztcXG59XFxuXFxuLnRhc2tEZWxldGVCdG4ge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbi1zdGFydDogNjtcXG59XFxuXFxuLmVkaXRUYXNrQnRuIHtcXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDU7XFxufVxcblxcbi50YXNrRGVzY3JpcHRpb25CdG4ge1xcbiAgZ3JpZC1jb2x1bW46IDUvNztcXG59XFxuXFxuLmNoYW5nZVByaW9yaXR5QnV0b24ge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbi1zdGFydDogNDtcXG59XFxuXFxuLmNvbXBsZXRlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLnRhc2sge1xcbiAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAydncgNWZyIDFmciAwLjVmciAwLjVmciAwLjJmcjtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxucCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5jb21wbGV0ZWRUYXNrIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uaGlnaCB7XFxuICBib3JkZXItbGVmdDogc29saWQgcmVkIDAuNXZ3ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tZWRpdW0ge1xcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIG9yYW5nZSAwLjV2dyAhaW1wb3J0YW50O1xcbn1cXG5cXG4udGFzayB7XFxuICBib3JkZXItbGVmdDogc29saWQgbGlnaHRibHVlIDAuNXZ3O1xcbn1cXG5cXG4uY2hhbmdlUHJpb3JpdHlCdXRvbixcXG4uZWRpdFRhc2tCdG4sXFxuLnRhc2tEZXNjcmlwdGlvbkJ0bixcXG4udGFza0RlbGV0ZUJ0biB7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgcHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3RzJztcbmltcG9ydCBwcm9qZWN0QnV0dG9uQ3JlYXRvciBmcm9tICcuL3Byb2plY3RCdXR0b25DcmVhdG9yJztcblxuY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb2plY3ROYW1lKHByb2plY3ROYW1lcywgcHJvamVjdE5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TmFtZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAocHJvamVjdE5hbWVzW2ldID09PSBwcm9qZWN0TmFtZSkge1xuICAgICAgYWxlcnQoJ0EgcHJvamVjdCB3aXRoIHRoYXQgbmFtZSBhbHJlYWR5IGV4aXN0cycpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAocHJvamVjdE5hbWUubGVuZ3RoIDw9IDApIHtcbiAgICAgIGFsZXJ0KCdQcm9qZWN0IG5hbWUgY2Fubm90IGJlIGVtcHR5Jyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXNlTGlzdGVuZXJzKFxuICB7IGNvbmZpcm1CdXR0b24sIGNhbmNlbEJ1dHRvbiwgaW5wdXRGaWVsZCB9LFxuICB7IHByb2plY3RMaXN0RWxlbWVudCwgdGFza0xpc3RFbGVtZW50IH1cbikge1xuICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lcyA9IHByb2plY3RzLm1hcChwcm9qID0+IHByb2oubmFtZSk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBpbnB1dEZpZWxkLnZhbHVlO1xuXG4gICAgaWYgKHZhbGlkYXRlUHJvamVjdE5hbWUocHJvamVjdE5hbWVzLCBwcm9qZWN0TmFtZSkpIHtcbiAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgIGlucHV0RmllbGQucmVtb3ZlKCk7XG4gICAgICBjb25maXJtQnV0dG9uLnJlbW92ZSgpO1xuICAgICAgY2FuY2VsQnV0dG9uLnJlbW92ZSgpO1xuICAgICAgcHJvamVjdEJ1dHRvbkNyZWF0b3IoW25ld1Byb2plY3RdLCBwcm9qZWN0TGlzdEVsZW1lbnQsIHRhc2tMaXN0RWxlbWVudCk7XG4gICAgICBhZGRQcm9qZWN0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7IC8vIEVuYWJsZSB0aGUgYnV0dG9uXG4gICAgfVxuICB9KTtcblxuICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaW5wdXRGaWVsZC5yZW1vdmUoKTtcbiAgICBjb25maXJtQnV0dG9uLnJlbW92ZSgpO1xuICAgIGNhbmNlbEJ1dHRvbi5yZW1vdmUoKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7IC8vIEVuYWJsZSB0aGUgYnV0dG9uXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0QWRkZXIoXG4gIHByb2plY3RMaXN0RWxlbWVudCxcbiAgdGFza0xpc3RFbGVtZW50XG4pIHtcbiAgYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICcrIEFkZCBhIHByb2plY3QnO1xuICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFByb2plY3RCdXR0b24nKTtcbiAgcHJvamVjdExpc3RFbGVtZW50LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xuXG4gIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7IC8vIERpc2FibGUgdGhlIGJ1dHRvblxuICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3RMaXN0RWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dEZpZWxkKTtcblxuICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25maXJtQnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbmZpcm0nO1xuICAgIHByb2plY3RMaXN0RWxlbWVudC5hcHBlbmRDaGlsZChjb25maXJtQnV0dG9uKTtcblxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIHByb2plY3RMaXN0RWxlbWVudC5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgaW5pdGlhbGlzZUxpc3RlbmVycyhcbiAgICAgIHsgY29uZmlybUJ1dHRvbiwgY2FuY2VsQnV0dG9uLCBpbnB1dEZpZWxkIH0sXG4gICAgICB7IHByb2plY3RMaXN0RWxlbWVudCwgdGFza0xpc3RFbGVtZW50IH1cbiAgICApO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IGFkZFRhc2tUb1Byb2plY3QsIHByb2plY3RzLCByZW1vdmVUYXNrRnJvbVByb2plY3QgfSBmcm9tICcuL3Byb2plY3RzJztcblxuaW1wb3J0IFRhc2tDcmVhdG9yIGZyb20gJy4vdGFza3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBZGRUYXNrQnV0dG9uKHByb2plY3QsIHRhc2tzQ29udGFpbmVyKSB7XG4gIGxldCBlZGl0aW5nVGFza0VsZW1lbnQgPSBudWxsO1xuICBjb25zdCB0YXNrQW5kQnV0dG9uV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrQW5kQnV0dG9uV3JhcHBlci5jbGFzc0xpc3QuYWRkKCd0YXNrQW5kQnV0dG9uV3JhcHBlcicpO1xuICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQW5kQnV0dG9uV3JhcHBlcik7XG5cbiAgY29uc3QgdGFza0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza0xpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFza0xpc3RDb250YWluZXInKTtcbiAgdGFza0FuZEJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0xpc3RDb250YWluZXIpO1xuXG4gIGNvbnN0IGNyZWF0ZUFkZFRhc2tGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGFkZFRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ3Rhc2tBZGRlckZvcm0nKTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJysgQWRkIGEgdGFzayc7XG4gICAgYWRkVGFza0J1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrQWRkZXJCdG4nKTtcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcblxuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjcmVhdGVUYXNrSW5wdXRDb250cm9scyhhZGRUYXNrRm9ybSk7XG4gICAgICBhZGRUYXNrQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIGFkZFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gYWRkVGFza0Zvcm0ucXVlcnlTZWxlY3RvcignLnRhc2tOYW1lSW5wdXQnKTtcbiAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gYWRkVGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgJy50YXNrRGVzY3JpcHRpb25JbnB1dCdcbiAgICAgICk7XG4gICAgICBjb25zdCB0YXNrRGF0ZUlucHV0ID0gYWRkVGFza0Zvcm0ucXVlcnlTZWxlY3RvcignLnRhc2tEYXRlSW5wdXQnKTtcbiAgICAgIGNvbnN0IHRhc2tQcmlvcml0eUlucHV0ID0gYWRkVGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgJy50YXNrUHJpb3JpdHlTZWxlY3RvcidcbiAgICAgICk7XG4gICAgICBjb25zdCB0YXNrTmFtZSA9IHRhc2tOYW1lSW5wdXQudmFsdWU7XG4gICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gdGFza0RhdGVJbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IHRhc2tQcmlvcml0eUlucHV0LnZhbHVlO1xuXG4gICAgICBpZiAoIWFkZFRhc2tGb3JtLmVkaXRpbmcpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRhc2tzID0gcHJvamVjdHMuZmluZChcbiAgICAgICAgICBwcm9qID0+IHByb2oubmFtZSA9PT0gcHJvamVjdC5uYW1lXG4gICAgICAgICkudGFza3M7XG4gICAgICAgIGNvbnN0IGlzVGFza05hbWVBbHJlYWR5RXhpc3RzID0gcHJvamVjdFRhc2tzLnNvbWUoXG4gICAgICAgICAgdGFzayA9PiB0YXNrLnRpdGxlID09PSB0YXNrTmFtZVxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChpc1Rhc2tOYW1lQWxyZWFkeUV4aXN0cykge1xuICAgICAgICAgIGFsZXJ0KCdBIHRhc2sgd2l0aCB0aGUgc2FtZSBuYW1lIGFscmVhZHkgZXhpc3RzIGluIHRoaXMgcHJvamVjdC4nKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2tDcmVhdG9yKFxuICAgICAgICAgIHRhc2tOYW1lLFxuICAgICAgICAgIHRhc2tEZXNjcmlwdGlvbixcbiAgICAgICAgICB0YXNrRHVlRGF0ZSxcbiAgICAgICAgICB0YXNrUHJpb3JpdHlcbiAgICAgICAgKTtcbiAgICAgICAgYWRkVGFza1RvUHJvamVjdChwcm9qZWN0Lm5hbWUsIG5ld1Rhc2spO1xuICAgICAgICByZW5kZXJUYXNrKG5ld1Rhc2ssIHRhc2tzQ29udGFpbmVyLCBwcm9qZWN0Lm5hbWUpO1xuXG4gICAgICAgIHJlc2V0VGFza0Zvcm0oYWRkVGFza0Zvcm0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcHJvamVjdE9iaiA9IHByb2plY3RzLmZpbmQocHJvaiA9PiBwcm9qLm5hbWUgPT09IHByb2plY3QubmFtZSk7XG4gICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IHByb2plY3RPYmoudGFza3MuZmluZEluZGV4KFxuICAgICAgICAgIHRhc2sgPT5cbiAgICAgICAgICAgIHRhc2sudGl0bGUgPT09XG4gICAgICAgICAgICBhZGRUYXNrRm9ybS5lZGl0aW5nVGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbmFtZScpXG4gICAgICAgICAgICAgIC50ZXh0Q29udGVudFxuICAgICAgICApO1xuICAgICAgICBjb25zdCB0YXNrT2JqID0gcHJvamVjdE9iai50YXNrc1t0YXNrSW5kZXhdO1xuICAgICAgICBjb25zdCBwcm9qZWN0VGFza3MgPSBwcm9qZWN0cy5maW5kKFxuICAgICAgICAgIHByb2ogPT4gcHJvai5uYW1lID09PSBwcm9qZWN0Lm5hbWVcbiAgICAgICAgKS50YXNrcztcbiAgICAgICAgY29uc3QgaXNUYXNrTmFtZUFscmVhZHlFeGlzdHMgPSBwcm9qZWN0VGFza3Muc29tZShcbiAgICAgICAgICB0YXNrID0+IHRhc2sudGl0bGUgPT09IHRhc2tOYW1lXG4gICAgICAgICk7XG4gICAgICAgIGlmIChpc1Rhc2tOYW1lQWxyZWFkeUV4aXN0cykge1xuICAgICAgICAgIGFsZXJ0KCdUaGVyZSBpcyBhbHJlYWR5IGEgdGFzayB3aXRoIHRoYXQgbmFtZScpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0YXNrT2JqLnRpdGxlID0gdGFza05hbWU7XG4gICAgICAgIHRhc2tPYmouZGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb247XG4gICAgICAgIHRhc2tPYmouZHVlRGF0ZSA9IHRhc2tEdWVEYXRlO1xuICAgICAgICB0YXNrT2JqLnByaW9yaXR5ID0gdGFza1ByaW9yaXR5O1xuICAgICAgICBhZGRUYXNrRm9ybS5lZGl0aW5nVGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbmFtZScpLnRleHRDb250ZW50ID1cbiAgICAgICAgICB0YXNrTmFtZTtcbiAgICAgICAgYWRkVGFza0Zvcm0uZWRpdGluZ1Rhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgJy50YXNrLWR1ZS1kYXRlJ1xuICAgICAgICApLnRleHRDb250ZW50ID0gdGFza0R1ZURhdGVcbiAgICAgICAgICA/IGBEdWUgZGF0ZTogJHt0YXNrRHVlRGF0ZX1gXG4gICAgICAgICAgOiAnTm8gZHVlIGRhdGUnO1xuICAgICAgICBhZGRUYXNrRm9ybS5lZGl0aW5nVGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAnLmNoYW5nZVByaW9yaXR5QnV0b24nXG4gICAgICAgICkudmFsdWUgPSB0YXNrUHJpb3JpdHk7XG4gICAgICAgIGFkZFRhc2tGb3JtLmVkaXRpbmdUYXNrRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFxuICAgICAgICAgICdoaWdoJyxcbiAgICAgICAgICAnbWVkaXVtJyxcbiAgICAgICAgICAnbG93J1xuICAgICAgICApO1xuICAgICAgICBhZGRUYXNrRm9ybS5lZGl0aW5nVGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZCh0YXNrUHJpb3JpdHkpO1xuXG4gICAgICAgIHJlc2V0VGFza0Zvcm0oYWRkVGFza0Zvcm0pO1xuICAgICAgICBhZGRUYXNrRm9ybS5lZGl0aW5nID0gZmFsc2U7XG4gICAgICAgIGVkaXRpbmdUYXNrRWxlbWVudCA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYWRkVGFza0Zvcm07XG4gIH07XG4gIGNvbnN0IGFkZFRhc2tGb3JtID0gY3JlYXRlQWRkVGFza0Zvcm0oKTtcbiAgdGFza0FuZEJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0Zvcm0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrSW5wdXRDb250cm9scyhhZGRUYXNrRm9ybSkge1xuICBjb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGFza05hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICdBZGQgYSB0YXNrJztcbiAgdGFza05hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIHRhc2tOYW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFza05hbWVJbnB1dCcpO1xuICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrTmFtZUlucHV0KTtcblxuICBjb25zdCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRhc2tEZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gJ0FkZCBhIGRlc2NyaXB0aW9uJztcbiAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFza0Rlc2NyaXB0aW9uSW5wdXQnKTtcbiAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uSW5wdXQpO1xuXG4gIGNvbnN0IHRhc2tEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0YXNrRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gIHRhc2tEYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFza0RhdGVJbnB1dCcpO1xuICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGF0ZUlucHV0KTtcblxuICBjb25zdCB0YXNrUHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgdGFza1ByaW9yaXR5U2VsZWN0LmlubmVySFRNTCA9IGBcbiAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQgaGlkZGVuPlByaW9yaXR5Ojwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+SGlnaDwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwibG93XCI+TG93PC9vcHRpb24+XG4gIGA7XG5cbiAgdGFza1ByaW9yaXR5U2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3Rhc2tQcmlvcml0eVNlbGVjdG9yJyk7XG4gIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eVNlbGVjdCk7XG5cbiAgY29uc3QgYnV0dG9uc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnV0dG9uc1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uc1dyYXBwZXInKTtcbiAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uc1dyYXBwZXIpO1xuXG4gIGNvbnN0IGNvbmZpcm1JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25maXJtSW5wdXQudGV4dENvbnRlbnQgPSAn4pyTJztcbiAgY29uZmlybUlucHV0LmNsYXNzTGlzdC5hZGQoJ2NvbmZpcm1JbnB1dEJ0bicpO1xuICBjb25maXJtSW5wdXQudHlwZSA9ICdzdWJtaXQnO1xuICBidXR0b25zV3JhcHBlci5hcHBlbmRDaGlsZChjb25maXJtSW5wdXQpO1xuXG4gIGNvbnN0IGNhbmNlbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNhbmNlbElucHV0LnRleHRDb250ZW50ID0gJ1gnO1xuICBjYW5jZWxJbnB1dC5jbGFzc0xpc3QuYWRkKCdjYW5jZWxJbnB1dEJ0bicpO1xuICBjYW5jZWxJbnB1dC50eXBlID0gJ2J1dHRvbic7XG4gIGJ1dHRvbnNXcmFwcGVyLmFwcGVuZENoaWxkKGNhbmNlbElucHV0KTtcblxuICBjYW5jZWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0YXNrTmFtZUlucHV0LnZhbHVlID0gJyc7XG4gICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSAnJztcbiAgICByZXNldFRhc2tGb3JtKGFkZFRhc2tGb3JtKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0VGFza0Zvcm0oYWRkVGFza0Zvcm0pIHtcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGFkZFRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoJy50YXNrQWRkZXJCdG4nKTtcbiAgYWRkVGFza0J1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGJ1dHRvbnNXcmFwcGVyID0gYWRkVGFza0Zvcm0ucXVlcnlTZWxlY3RvcignLmJ1dHRvbnNXcmFwcGVyJyk7XG4gIGlmIChidXR0b25zV3JhcHBlcikge1xuICAgIGFkZFRhc2tGb3JtLnJlbW92ZUNoaWxkKGJ1dHRvbnNXcmFwcGVyKTtcbiAgfVxuXG4gIGFkZFRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBhZGRUYXNrRm9ybS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgfSk7XG5cbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tQcmlvcml0eVNlbGVjdG9yJyk7XG4gIGFkZFRhc2tGb3JtLnJlbW92ZUNoaWxkKHRhc2tQcmlvcml0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUYXNrKHRhc2ssIGNvbnRhaW5lciwgdGFza0R1ZURhdGVWYWx1ZSwgcHJvamVjdE5hbWUpIHtcbiAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgdGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgdGFza05hbWUuY2xhc3NMaXN0LmFkZCgndGFzay1uYW1lJyk7XG4gIHRhc2tOYW1lLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuICBjb25zdCB0b0RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnRhc2tMaXN0Q29udGFpbmVyJykuYXBwZW5kQ2hpbGQodG9Eb0xpc3QpO1xuICB0b0RvTGlzdC5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XG5cbiAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRhc2tEdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZHVlLWRhdGUnKTtcbiAgaWYgKHRhc2tEdWVEYXRlVmFsdWUpIHtcbiAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgZGF0ZTogJHt0YXNrLmR1ZURhdGV9YDtcbiAgICBjb25zb2xlLmxvZyh0YXNrRHVlRGF0ZVZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9ICdObyBkdWUgZGF0ZSc7XG4gIH1cbiAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG5cbiAgY29uc3QgdGFza0NvbXBsZXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICB0YXNrQ29tcGxldGVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2tDb21wbGV0ZXInKTtcbiAgdGFza0NvbXBsZXRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAodGFzay5jb21wbGV0ZWQpIHtcbiAgICAgIHRhc2sudW5jb21wbGV0ZVRhc2soKTtcbiAgICAgIHRhc2tDb21wbGV0ZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICAgIHRhc2tDb21wbGV0ZXIuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJyk7XG4gICAgICB0YXNrQ29tcGxldGVyLmNsYXNzTGlzdC5hZGQoJ3VuY29tcGxldGVkJyk7XG4gICAgICB0YXNrRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWRUYXNrJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhc2suY29tcGxldGVUYXNrKCk7XG4gICAgICB0YXNrQ29tcGxldGVyLnRleHRDb250ZW50ID0gJ+Kckyc7XG4gICAgICB0YXNrQ29tcGxldGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3VuY29tcGxldGVkJyk7XG4gICAgICB0YXNrQ29tcGxldGVyLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuICAgICAgdGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkVGFzaycpO1xuICAgIH1cbiAgfSk7XG4gIGlmICh0YXNrLmNvbXBsZXRlZCkge1xuICAgIHRhc2tDb21wbGV0ZXIudGV4dENvbnRlbnQgPSAn4pyTJztcbiAgICB0YXNrQ29tcGxldGVyLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuICAgIHRhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZFRhc2snKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhgVGFzazogJHt0YXNrLnRpdGxlfSwgQ29tcGxldGVkOiAke3Rhc2suY29tcGxldGVkfWApO1xuICAgIHRhc2tDb21wbGV0ZXIuY2xhc3NMaXN0LmFkZCgndW5jb21wbGV0ZWQnKTtcbiAgfVxuXG4gIGNvbnN0IGNoYW5nZVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGNoYW5nZVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2NoYW5nZVByaW9yaXR5QnV0b24nKTtcbiAgY2hhbmdlUHJpb3JpdHkuaW5uZXJIVE1MID0gYCBcbiAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkIGhpZGRlbj5Qcmlvcml0eTo8L29wdGlvbj5cbiAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9vcHRpb24+XG4gIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cbiAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPic7YDtcbiAgY2hhbmdlUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGNvbnN0IG9sZFAgPSB0YXNrLnByaW9yaXR5O1xuICAgIHRhc2suY2hhbmdlUHJpb3JpdHkoY2hhbmdlUHJpb3JpdHkudmFsdWUpO1xuICAgIHRhc2tFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUob2xkUCk7XG4gICAgY29uc3QgbmV3UCA9IHRhc2sucHJpb3JpdHk7XG4gICAgdGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZChuZXdQKTtcbiAgfSk7XG5cbiAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2hhbmdlUHJpb3JpdHkpO1xuXG4gIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0VGFza0J0bicpO1xuICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza05hbWVJbnB1dCcpKSB7XG4gICAgICByZXR1cm47IC8vIHByZXZlbnQgbXVsdGlwbGUgZWRpdHMgYW5kIGVkaXRpbmcgd2hpbGUgYSB0YXNrIGlzIGJlaW5nIGFkZGVkXG4gICAgfVxuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tBZGRlckZvcm0nKTtcbiAgICBjcmVhdGVUYXNrSW5wdXRDb250cm9scyhhZGRUYXNrRm9ybSk7XG4gICAgcG9wdWxhdGVGb3JtKGFkZFRhc2tGb3JtLCB0YXNrKTtcbiAgICBhZGRUYXNrRm9ybS5lZGl0aW5nID0gdHJ1ZTtcbiAgICBhZGRUYXNrRm9ybS5lZGl0aW5nVGFza0VsZW1lbnQgPSB0YXNrRWxlbWVudDtcbiAgfSk7XG5cbiAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza0NvbXBsZXRlcik7XG4gIGlmICh0YXNrLnByaW9yaXR5KSB7XG4gICAgY29uc3QgdGFza1AgPSB0YXNrLnByaW9yaXR5O1xuICAgIHRhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQodGFza1ApO1xuICB9XG5cbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHRhc2tEZXNjcmlwdGlvbkJ1dHRvbi50ZXh0Q29udGVudCA9ICctIEV4cGFuZCB0YXNrJztcbiAgdGFza0Rlc2NyaXB0aW9uQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2tEZXNjcmlwdGlvbkJ0bicpO1xuICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25CdXR0b24pO1xuXG4gIGxldCBkZXNjcmlwdGlvbkFkZGVkID0gZmFsc2U7XG5cbiAgY29uc3QgdGFza0V4cGFuZGVyID0gKCkgPT4ge1xuICAgIHRhc2tEZXNjcmlwdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICghZGVzY3JpcHRpb25BZGRlZCkge1xuICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi5pbm5lclRleHQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgICAgICB0YXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzYycpO1xuICAgICAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuICAgICAgICBkZXNjcmlwdGlvbkFkZGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjJyk7XG4gICAgICAgIHRhc2tFbGVtZW50LnJlbW92ZUNoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG4gICAgICAgIGRlc2NyaXB0aW9uQWRkZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB0YXNrRXhwYW5kZXIoKTtcbiAgY29uc3QgZGVsZXRlVGFzayA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrRGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFza0RlbGV0ZUJ0bi5pbm5lclRleHQgPSAnWCc7XG4gICAgdGFza0RlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCd0YXNrRGVsZXRlQnRuJyk7XG4gICAgdGFza0RlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHJlbW92ZVRhc2tGcm9tUHJvamVjdChwcm9qZWN0TmFtZSwgdGFzayk7XG4gICAgICB0YXNrRWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRhc2tFbGVtZW50KTtcbiAgICB9KTtcbiAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlQnRuKTtcbiAgfTtcblxuICBkZWxldGVUYXNrKCk7XG5cbiAgZnVuY3Rpb24gcG9wdWxhdGVGb3JtKGZvcm0sIHRhc2spIHtcbiAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy50YXNrTmFtZUlucHV0JykudmFsdWUgPSB0YXNrLnRpdGxlO1xuICAgIGZvcm0ucXVlcnlTZWxlY3RvcignLnRhc2tEZXNjcmlwdGlvbklucHV0JykudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIGZvcm0ucXVlcnlTZWxlY3RvcignLnRhc2tEYXRlSW5wdXQnKS52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcbiAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy50YXNrUHJpb3JpdHlTZWxlY3RvcicpLnZhbHVlID0gdGFzay5wcmlvcml0eTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2F2ZVRvTG9jYWxTdG9yYWdlKGtleSwgaXRlbSkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGl0ZW0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KSB7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG59XG4iLCJpbXBvcnQgY3JlYXRlUGFnZUxheW91dCBmcm9tICcuL3BhZ2VMYXlvdXRET00nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQYWdlRE9NKCkge1xuICBjcmVhdGVQYWdlTGF5b3V0KCk7XG59XG4iLCJpbXBvcnQgcHJvamVjdEJ1dHRvbkNyZWF0b3IgZnJvbSAnLi9wcm9qZWN0QnV0dG9uQ3JlYXRvcic7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdHMnO1xuaW1wb3J0IGNyZWF0ZVByb2plY3RBZGRlciBmcm9tICcuL2FkZFByb2plY3RCdXR0b24nO1xuaW1wb3J0IGNyZWF0ZUFkZFRhc2tCdXR0b24gZnJvbSAnLi9jcmVhdGVBZGRUYXNrQnV0dG9uJztcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlckNvbnRhaW5lcicpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcik7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICBoZWFkZXIuaW5uZXJUZXh0ID0gJ1RvZG8gTGlzdCc7XG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuXG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c0NvbnRhaW5lcicpO1xuICBtYWluLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuXG4gIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2tzQ29udGFpbmVyJyk7XG4gIG1haW4uYXBwZW5kQ2hpbGQodGFza3NDb250YWluZXIpO1xuXG4gIGNyZWF0ZVByb2plY3RBZGRlcihwcm9qZWN0Q29udGFpbmVyLCB0YXNrc0NvbnRhaW5lcik7XG5cbiAgcHJvamVjdEJ1dHRvbkNyZWF0b3IoXG4gICAgcHJvamVjdHMsXG4gICAgcHJvamVjdENvbnRhaW5lcixcbiAgICB0YXNrc0NvbnRhaW5lcixcbiAgICBjcmVhdGVBZGRUYXNrQnV0dG9uXG4gICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3RlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb290ZXJDb250YWluZXInKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXJDb250YWluZXIpO1xuXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQYWdlTGF5b3V0KCkge1xuICBjcmVhdGVIZWFkZXIoKTtcbiAgY3JlYXRlTWFpbigpO1xuICBjcmVhdGVGb290ZXIoKTtcbn1cbiIsImltcG9ydCBjcmVhdGVBZGRUYXNrQnV0dG9uLCB7IHJlbmRlclRhc2sgfSBmcm9tICcuL2NyZWF0ZUFkZFRhc2tCdXR0b24nO1xuaW1wb3J0IHsgZGVsZXRlUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdEJ1dHRvbihwcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0QnV0dG9uJyk7XG5cbiAgcmV0dXJuIHByb2plY3RCdXR0b247XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza3NDb250YWluZXIodGFza3NDb250YWluZXIpIHtcbiAgdGFza3NDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RUYXNrcyhwcm9qZWN0LCB0YXNrc0NvbnRhaW5lcikge1xuICBjb25zdCB0YXNrTGlzdENvbnRhaW5lciA9IHRhc2tzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50YXNrTGlzdENvbnRhaW5lcicpO1xuICBwcm9qZWN0LnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgcmVuZGVyVGFzayh0YXNrLCB0YXNrc0NvbnRhaW5lciwgdGFzay5kdWVEYXRlLCBwcm9qZWN0Lm5hbWUpO1xuICB9KTtcbn1cblxuY29uc3QgYXBwZW5kQVByb2plY3ROYW1lID0gKHByb2plY3QsIHRhc2tzQ29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IHByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3ROYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3ROYW1lQ29udGFpbmVyJyk7XG5cbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgcHJvamVjdE5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuXG4gIHRhc2tzQ29udGFpbmVyLmluc2VydEJlZm9yZShwcm9qZWN0TmFtZUNvbnRhaW5lciwgdGFza3NDb250YWluZXIuZmlyc3RDaGlsZCk7XG59O1xuXG5mdW5jdGlvbiBzZXR1cFByb2plY3RCdXR0b25FdmVudExpc3RlbmVyKFxuICBwcm9qZWN0QnV0dG9uLFxuICBwcm9qZWN0LFxuICB0YXNrc0NvbnRhaW5lclxuKSB7XG4gIHByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJUYXNrc0NvbnRhaW5lcih0YXNrc0NvbnRhaW5lcik7XG4gICAgY3JlYXRlQWRkVGFza0J1dHRvbihwcm9qZWN0LCB0YXNrc0NvbnRhaW5lcik7XG4gICAgYXBwZW5kQVByb2plY3ROYW1lKHByb2plY3QsIHRhc2tzQ29udGFpbmVyKTtcbiAgICByZW5kZXJQcm9qZWN0VGFza3MocHJvamVjdCwgdGFza3NDb250YWluZXIpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdEJ1dHRvbkNyZWF0b3IoXG4gIHByb2plY3RzLFxuICBwcm9qZWN0Q29udGFpbmVyLFxuICB0YXNrc0NvbnRhaW5lclxuKSB7XG4gIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgY29uc3QgcHJvamVjdEJ1dHRvbiA9IGNyZWF0ZVByb2plY3RCdXR0b24ocHJvamVjdCk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9uKTtcblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmlubmVyVGV4dCA9ICdYJztcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHByb2plY3QubmFtZSAhPT0gJ0FsbCB0YXNrcycpIHtcbiAgICAgICAgZGVsZXRlUHJvamVjdChwcm9qZWN0Lm5hbWUpO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3RCdXR0b24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoJ0Nhbm5vdCBkZWxldGUgdGhpcyBwcm9qZWN0IScpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHByb2plY3RCdXR0b24uYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ1dHRvbik7XG5cbiAgICBzZXR1cFByb2plY3RCdXR0b25FdmVudExpc3RlbmVyKHByb2plY3RCdXR0b24sIHByb2plY3QsIHRhc2tzQ29udGFpbmVyKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyByZW1vdmVGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9kYXRhJztcblxuY29uc3QgZGVmYXVsdFByb2plY3RzID0gW1xuICB7IG5hbWU6ICdIb21lJywgdGFza3M6IFtdIH0sXG4gIHsgbmFtZTogJ0ltcG9ydGFudCcsIHRhc2tzOiBbXSB9LFxuICB7IG5hbWU6ICdBbGwgdGFza3MnLCB0YXNrczogW10gfSxcbl07XG5cbmNvbnN0IHN0b3JlZFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJyk7XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9XG4gIHN0b3JlZFByb2plY3RzICYmIHN0b3JlZFByb2plY3RzICE9PSAndW5kZWZpbmVkJ1xuICAgID8gSlNPTi5wYXJzZShzdG9yZWRQcm9qZWN0cylcbiAgICA6IGRlZmF1bHRQcm9qZWN0cztcblxuZnVuY3Rpb24gc2F2ZVByb2plY3RzKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSB7IG5hbWUsIHRhc2tzOiBbXSB9O1xuICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICBzYXZlUHJvamVjdHMoKTtcblxuICByZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWVUb0RlbGV0ZSkge1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgocCA9PiBwLm5hbWUgPT09IHByb2plY3ROYW1lVG9EZWxldGUpO1xuICBpZiAocHJvamVjdEluZGV4ICE9PSAtMSAmJiBwcm9qZWN0TmFtZVRvRGVsZXRlICE9PSAnQWxsIHRhc2tzJykge1xuICAgIGNvbnN0IGRlbGV0ZWRQcm9qZWN0ID0gcHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSlbMF07XG5cbiAgICAvLyBSZW1vdmUgdGhlIHRhc2tzIGZyb20gdGhlIGRlbGV0ZWQgcHJvamVjdCBpbiB0aGUgJ0FsbCBUYXNrcycgcHJvamVjdFxuICAgIGNvbnN0IGFsbFRhc2tzUHJvamVjdCA9IHByb2plY3RzLmZpbmQocCA9PiBwLm5hbWUgPT09ICdBbGwgdGFza3MnKTtcbiAgICBkZWxldGVkUHJvamVjdC50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgY29uc3QgdGFza0luZGV4ID0gYWxsVGFza3NQcm9qZWN0LnRhc2tzLmZpbmRJbmRleCh0ID0+IHQuaWQgPT09IHRhc2suaWQpO1xuICAgICAgaWYgKHRhc2tJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgYWxsVGFza3NQcm9qZWN0LnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgICAgfVxuICAgICAgcmVtb3ZlRnJvbUxvY2FsU3RvcmFnZSh0YXNrLmlkKTsgLy8gUmVtb3ZlIHRoZSB0YXNrIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgIH0pO1xuXG4gICAgc2F2ZVByb2plY3RzKCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2tUb1Byb2plY3QocHJvamVjdE5hbWUsIHRhc2spIHtcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQocCA9PiBwLm5hbWUgPT09IHByb2plY3ROYW1lKTtcbiAgY29uc3QgYWxsVGFza3NQcm9qZWN0ID0gcHJvamVjdHMuZmluZChwID0+IHAubmFtZSA9PT0gJ0FsbCB0YXNrcycpO1xuXG4gIGlmIChwcm9qZWN0ICYmIHByb2plY3QubmFtZSAhPT0gJ0FsbCB0YXNrcycpIHtcbiAgICBwcm9qZWN0LnRhc2tzLnB1c2godGFzayk7XG4gICAgaWYgKCFhbGxUYXNrc1Byb2plY3QudGFza3MuaW5jbHVkZXModGFzaykpIHtcbiAgICAgIGFsbFRhc2tzUHJvamVjdC50YXNrcy5wdXNoKHRhc2spO1xuICAgIH1cbiAgfSBlbHNlIGlmIChwcm9qZWN0ICYmIHByb2plY3QubmFtZSA9PT0gJ0FsbCB0YXNrcycpIHtcbiAgICBpZiAoIWFsbFRhc2tzUHJvamVjdC50YXNrcy5pbmNsdWRlcyh0YXNrKSkge1xuICAgICAgYWxsVGFza3NQcm9qZWN0LnRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHByb2plY3RzWzBdLnRhc2tzLnB1c2godGFzayk7XG4gIH1cbiAgc2F2ZVByb2plY3RzKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGFza0Zyb21Qcm9qZWN0KHByb2plY3ROYW1lLCB0YXNrKSB7XG4gIGNvbnNvbGUubG9nKCdSZW1vdmluZyB0YXNrIGZyb20gcHJvamVjdDonLCBwcm9qZWN0TmFtZSk7XG4gIGNvbnNvbGUubG9nKCdUYXNrIHRvIHJlbW92ZTonLCB0YXNrKTtcblxuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZChwID0+IHAubmFtZSA9PT0gcHJvamVjdE5hbWUpO1xuICBjb25zb2xlLmxvZygnRm91bmQgcHJvamVjdDonLCBwcm9qZWN0KTtcblxuICBpZiAocHJvamVjdCkge1xuICAgIGNvbnN0IHRhc2tJbmRleCA9IHByb2plY3QudGFza3MuZmluZEluZGV4KHQgPT4gdC5pZCA9PT0gdGFzay5pZCk7XG4gICAgY29uc29sZS5sb2coJ1Rhc2sgaW5kZXg6JywgdGFza0luZGV4KTtcblxuICAgIGlmICh0YXNrSW5kZXggIT09IC0xKSB7XG4gICAgICBwcm9qZWN0LnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgICAgY29uc29sZS5sb2coJ1Rhc2sgcmVtb3ZlZCBmcm9tIHByb2plY3QnLCBwcm9qZWN0KTtcbiAgICAgIHNhdmVQcm9qZWN0cygpO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSB0aGUgdGFzayBmcm9tIHRoZSAnQWxsIFRhc2tzJyBwcm9qZWN0IGFzIHdlbGxcbiAgICBpZiAocHJvamVjdE5hbWUgIT09ICdBbGwgdGFza3MnKSB7XG4gICAgICBjb25zdCBhbGxUYXNrc1Byb2plY3QgPSBwcm9qZWN0cy5maW5kKHAgPT4gcC5uYW1lID09PSAnQWxsIHRhc2tzJyk7XG4gICAgICBjb25zdCBhbGxUYXNrc0luZGV4ID0gYWxsVGFza3NQcm9qZWN0LnRhc2tzLmZpbmRJbmRleChcbiAgICAgICAgdCA9PiB0LmlkID09PSB0YXNrLmlkXG4gICAgICApO1xuICAgICAgaWYgKGFsbFRhc2tzSW5kZXggIT09IC0xKSB7XG4gICAgICAgIGFsbFRhc2tzUHJvamVjdC50YXNrcy5zcGxpY2UoYWxsVGFza3NJbmRleCwgMSk7XG4gICAgICAgIHNhdmVQcm9qZWN0cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgYWRkVGFza1RvUHJvamVjdCwgcHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3RzJztcbmltcG9ydCBzYXZlVG9Mb2NhbFN0b3JhZ2UgZnJvbSAnLi9kYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFza0NyZWF0b3IoXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZHVlRGF0ZSxcbiAgcHJpb3JpdHksXG4gIHByb2plY3ROYW1lLFxuICBpZCxcbiAgY29tcGxldGVkXG4pIHtcbiAgY29uc3QgdGFzayA9IHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5OiBwcmlvcml0eSB8fCAnbG93JyxcbiAgICBjb21wbGV0ZWQ6IGNvbXBsZXRlZCB8fCBmYWxzZSxcbiAgICBpZDogaWQgfHwgbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKSxcblxuICAgIGNvbXBsZXRlVGFzaygpIHtcbiAgICAgIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgdW5jb21wbGV0ZVRhc2soKSB7XG4gICAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBjaGFuZ2VQcmlvcml0eShuZXdQcmlvcml0eSkge1xuICAgICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIH0sXG5cbiAgICB1cGRhdGVUYXNrKG5ld1RpdGxlLCBuZXdEZXNjcmlwdGlvbiwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHkpIHtcbiAgICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICAgIHRoaXMuZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gICAgICB0aGlzLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgfSxcbiAgfTtcblxuICBhZGRUYXNrVG9Qcm9qZWN0KHByb2plY3ROYW1lIHx8ICdBbGwgdGFza3MnLCB0YXNrKTtcbiAgcmV0dXJuIHRhc2s7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge1xuICBjcmVhdGVQcm9qZWN0LFxuICBwcm9qZWN0cyxcbiAgYWRkVGFza1RvUHJvamVjdCxcbiAgZGVsZXRlUHJvamVjdCxcbiAgcmVtb3ZlVGFza0Zyb21Qcm9qZWN0LFxufSBmcm9tICcuL3Byb2plY3RzJztcblxuaW1wb3J0IGNyZWF0ZVBhZ2VMYXlvdXQgZnJvbSAnLi9kb21IYW5kbGVyJztcblxuaW1wb3J0IFRhc2tDcmVhdG9yIGZyb20gJy4vdGFza3MnO1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY3JlYXRlUGFnZUxheW91dCgpO1xuXG53aW5kb3cuY3JlYXRlUHJvamVjdCA9IGNyZWF0ZVByb2plY3Q7XG53aW5kb3cucHJvamVjdHMgPSBwcm9qZWN0cztcbndpbmRvdy5UYXNrQ3JlYXRvciA9IFRhc2tDcmVhdG9yO1xud2luZG93LmFkZFRhc2tUb1Byb2plY3QgPSBhZGRUYXNrVG9Qcm9qZWN0O1xud2luZG93LmRlbGV0ZVByb2plY3QgPSBkZWxldGVQcm9qZWN0O1xud2luZG93LnJlbW92ZVRhc2tGcm9tUHJvamVjdCA9IHJlbW92ZVRhc2tGcm9tUHJvamVjdDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==