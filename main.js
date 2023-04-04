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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../fonts/Sublima-Light.otf */ "../../fonts/Sublima-Light.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../Fonts/Roboto-Italic.ttf */ "../../Fonts/Roboto-Italic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Sublima';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n  font-family: 'Sublima-bold';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n* {\n  list-style-type: none;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: rgba(204, 204, 255, 1);\n}\n\n.headerContainer {\n  height: 15vh;\n  font-size: 1.8rem;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  background-color: rgba(204, 204, 255, 1);\n  color: white;\n  padding-left: 3vw;\n  text-decoration: underline;\n}\n\n.headerContainer,\n.addProjectButton {\n  font-family: 'Sublima-bold' !important;\n}\n\n.main {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  height: 78vh;\n  background-color: rgba(204, 204, 255, 1);\n  font-family: 'Sublima';\n}\n\n.tasksContainer {\n  background-color: lavenderblush;\n}\n\n.footerContainer {\n  height: 6vh;\n  background-color: lightgray;\n}\n\n.taskAdderForm {\n  display: grid;\n}\n\n.buttonsWrapper {\n  display: flex;\n  justify-content: center;\n  gap: 5px;\n}\n.taskListContainer {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-auto-rows: min-content;\n  grid-gap: 10px;\n  align-items: center;\n  justify-items: center;\n  min-width: 50vw;\n  padding-top: 5vh;\n}\n\n.taskListContainer button {\n  width: 50vw;\n  height: 7vh;\n  background-color: lavenderblush;\n  display: flex;\n}\n\n.taskAdderForm button {\n  display: flex;\n}\n\n.taskAdderForm > * {\n  font-size: 1rem;\n}\n\n.taskAdderForm {\n  gap: 5px;\n  padding: 1rem;\n}\n\n.task-name {\n  font-weight: bold;\n  font-style: italic;\n}\n\n.confirmInputBtn,\n.cancelInputBtn {\n  color: white;\n  width: 3vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n}\n\n.confirmInputBtn:hover,\n.cancelInputBtn:hover {\n  cursor: pointer;\n  opacity: 0.8;\n}\n\n.confirmInputBtn {\n  background-color: lightgreen;\n}\n\n.cancelInputBtn {\n  background-color: red;\n}\n\n.taskContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n  border-radius: 5px;\n  padding: 5px 10px;\n  width: 80%;\n}\n\n.taskItem {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.tasksContainer {\n  overflow-y: auto;\n}\n\n.tasksContainer::-webkit-scrollbar {\n  width: 15px;\n}\n\n.tasksContainer::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n.tasksContainer::-webkit-scrollbar-thumb {\n  background-color: cornflowerblue;\n  border-radius: 10px;\n  border: 2px solid #f1f1f1;\n}\n\n.taskAndButtonWrapper {\n  display: grid;\n  justify-content: center;\n  gap: 5vh;\n}\n\n.projectNameContainer {\n  display: flex;\n  justify-content: center;\n}\n\n.projectsContainer {\n  display: grid;\n  height: fit-content;\n  gap: 1vh;\n  margin-left: 2vw;\n  margin-right: 2vw;\n  padding-top: 5vh;\n}\n\n.projectName {\n  font-style: italic;\n  font-size: 2rem;\n}\n\n.projectButton {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 1vw;\n  background-color: rgba(244, 204, 255, 1);\n  border-radius: 5px;\n  color: black;\n  font-style: italic;\n  border: none;\n}\n\n.projectButton button {\n  background-color: lavenderblush;\n  border-radius: 6px;\n  border-color: lightblue;\n  color: black;\n}\n.projectButton button,\n.projectButton,\n.addProjectButton {\n  font-size: 1rem;\n}\n\n.projectButton:hover,\n.addProjectButton:hover {\n  background-color: white;\n}\n\n.addProjectButton {\n  background-color: lavenderblush;\n  color: black;\n  border-radius: 10px;\n  border: 1px solid lavender;\n}\n\n.projectButton button:hover,\n.projectButton:hover,\n.addProjectButton:hover {\n  cursor: pointer;\n}\n\n.taskAdderBtn {\n  background-color: white;\n  color: black;\n}\n\n.taskCompleter {\n  height: 18px !important;\n  width: 18px !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  grid-column-start: 1;\n  grid-row: 1/3;\n}\n\n.task-due-date {\n  grid-column-start: 3;\n}\n\n.taskDeleteBtn {\n  grid-row-start: 1;\n  grid-column-start: 6;\n}\n\n.editTaskBtn {\n  grid-row-start: 1;\n  grid-column-start: 5;\n}\n\n.taskDescriptionBtn {\n  grid-column: 5/7;\n}\n\n.changePriorityButon {\n  grid-row-start: 1;\n  grid-column-start: 4;\n}\n\n.completed {\n  background-color: lightgreen !important;\n  color: white;\n  border: 2px solid green;\n}\n\n.task {\n  display: grid !important;\n  height: fit-content !important;\n  grid-template-columns: 3.5vw 1.5fr 1.7fr 0.5fr 0.2fr;\n  grid-template-rows: 1fr 1fr;\n  justify-items: start;\n  gap: 10px;\n  align-items: center;\n  padding: 8px;\n  font-size: 0.9rem;\n}\n\n.task-name {\n  max-width: 300px;\n}\n.task button {\n  background-color: white;\n}\n\n.taskDeleteBtn {\n  background-color: red !important;\n  color: white;\n}\n\n.task:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.task button:hover,\nselect:hover,\n.taskAdderBtn:hover {\n  cursor: pointer;\n}\n\np {\n  margin: 0;\n}\n\n.completedTask {\n  text-decoration: line-through;\n}\n\n.high {\n  border-left: solid red 0.5vw !important;\n}\n\n.medium {\n  border-left: solid orange 0.5vw !important;\n}\n\n.task {\n  border-left: solid lightblue 0.5vw;\n}\n\n.changePriorityButon,\n.editTaskBtn,\n.taskDescriptionBtn,\n.taskDeleteBtn {\n  height: fit-content !important;\n  width: fit-content !important;\n}\n\n.desc {\n  max-height: 100%;\n  grid-row-start: 2;\n  max-width: 380px;\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 767px) {\n  /* styles for screens 767px or smaller (most smartphones in landscape mode) */\n  .headerContainer {\n    font-size: 1.2rem;\n    height: 4vh;\n    border-bottom: none;\n  }\n\n  .main {\n    gap: 15px;\n  }\n  .projectsContainer {\n    height: 16.5vh;\n    overflow-y: scroll;\n  }\n\n  .tasksContainer {\n    height: 65vh;\n  }\n  .main {\n    grid-template-columns: 1fr;\n    height: auto;\n  }\n  .taskListContainer {\n    min-width: 80vw;\n    grid-template-columns: 1fr;\n  }\n  .taskListContainer button {\n    width: 80vw;\n  }\n  .projectName {\n    font-size: 1.5rem;\n  }\n  .projectButton {\n    font-size: 1rem;\n  }\n\n  .confirmInputBtn,\n  .cancelInputBtn {\n    padding: 1vmin 3.5vmin;\n    font-size: 1rem;\n    margin-top: 10px;\n  }\n  .task {\n    font-size: 0.8rem !important;\n    grid-template-columns: 3.5vw 2fr 1fr 0.5fr 0.5fr;\n    grid-template-rows: 1fr 1fr;\n  }\n\n  .task-name {\n    grid-row-start: 1;\n    grid-column: 2/5;\n    max-width: 120px;\n    word-wrap: break-word;\n    padding-right: 5px;\n  }\n\n  .task-due-date {\n    grid-row-start: 2;\n    grid-column: 2/5;\n  }\n\n  .footerContainer {\n    height: 7vh;\n  }\n\n  .high {\n    border-left: solid red 2vw !important;\n  }\n\n  .medium {\n    border-left: solid orange 2vw !important;\n  }\n\n  .task {\n    border-left: solid lightblue 2vw;\n    word-wrap: break-word;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'Sublima';\n  src: url(/home/callumac/fonts/Sublima-Light.otf);\n}\n\n@font-face {\n  font-family: 'Sublima-bold';\n  src: url(/home/callumac/Fonts/Roboto-Italic.ttf);\n}\n\n* {\n  list-style-type: none;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: rgba(204, 204, 255, 1);\n}\n\n.headerContainer {\n  height: 15vh;\n  font-size: 1.8rem;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  background-color: rgba(204, 204, 255, 1);\n  color: white;\n  padding-left: 3vw;\n  text-decoration: underline;\n}\n\n.headerContainer,\n.addProjectButton {\n  font-family: 'Sublima-bold' !important;\n}\n\n.main {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  height: 78vh;\n  background-color: rgba(204, 204, 255, 1);\n  font-family: 'Sublima';\n}\n\n.tasksContainer {\n  background-color: lavenderblush;\n}\n\n.footerContainer {\n  height: 6vh;\n  background-color: lightgray;\n}\n\n.taskAdderForm {\n  display: grid;\n}\n\n.buttonsWrapper {\n  display: flex;\n  justify-content: center;\n  gap: 5px;\n}\n.taskListContainer {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-auto-rows: min-content;\n  grid-gap: 10px;\n  align-items: center;\n  justify-items: center;\n  min-width: 50vw;\n  padding-top: 5vh;\n}\n\n.taskListContainer button {\n  width: 50vw;\n  height: 7vh;\n  background-color: lavenderblush;\n  display: flex;\n}\n\n.taskAdderForm button {\n  display: flex;\n}\n\n.taskAdderForm > * {\n  font-size: 1rem;\n}\n\n.taskAdderForm {\n  gap: 5px;\n  padding: 1rem;\n}\n\n.task-name {\n  font-weight: bold;\n  font-style: italic;\n}\n\n.confirmInputBtn,\n.cancelInputBtn {\n  color: white;\n  width: 3vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n}\n\n.confirmInputBtn:hover,\n.cancelInputBtn:hover {\n  cursor: pointer;\n  opacity: 0.8;\n}\n\n.confirmInputBtn {\n  background-color: lightgreen;\n}\n\n.cancelInputBtn {\n  background-color: red;\n}\n\n.taskContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n  border-radius: 5px;\n  padding: 5px 10px;\n  width: 80%;\n}\n\n.taskItem {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.tasksContainer {\n  overflow-y: auto;\n}\n\n.tasksContainer::-webkit-scrollbar {\n  width: 15px;\n}\n\n.tasksContainer::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n.tasksContainer::-webkit-scrollbar-thumb {\n  background-color: cornflowerblue;\n  border-radius: 10px;\n  border: 2px solid #f1f1f1;\n}\n\n.taskAndButtonWrapper {\n  display: grid;\n  justify-content: center;\n  gap: 5vh;\n}\n\n.projectNameContainer {\n  display: flex;\n  justify-content: center;\n}\n\n.projectsContainer {\n  display: grid;\n  height: fit-content;\n  gap: 1vh;\n  margin-left: 2vw;\n  margin-right: 2vw;\n  padding-top: 5vh;\n}\n\n.projectName {\n  font-style: italic;\n  font-size: 2rem;\n}\n\n.projectButton {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 1vw;\n  background-color: rgba(244, 204, 255, 1);\n  border-radius: 5px;\n  color: black;\n  font-style: italic;\n  border: none;\n}\n\n.projectButton button {\n  background-color: lavenderblush;\n  border-radius: 6px;\n  border-color: lightblue;\n  color: black;\n}\n.projectButton button,\n.projectButton,\n.addProjectButton {\n  font-size: 1rem;\n}\n\n.projectButton:hover,\n.addProjectButton:hover {\n  background-color: white;\n}\n\n.addProjectButton {\n  background-color: lavenderblush;\n  color: black;\n  border-radius: 10px;\n  border: 1px solid lavender;\n}\n\n.projectButton button:hover,\n.projectButton:hover,\n.addProjectButton:hover {\n  cursor: pointer;\n}\n\n.taskAdderBtn {\n  background-color: white;\n  color: black;\n}\n\n.taskCompleter {\n  height: 18px !important;\n  width: 18px !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  grid-column-start: 1;\n  grid-row: 1/3;\n}\n\n.task-due-date {\n  grid-column-start: 3;\n}\n\n.taskDeleteBtn {\n  grid-row-start: 1;\n  grid-column-start: 6;\n}\n\n.editTaskBtn {\n  grid-row-start: 1;\n  grid-column-start: 5;\n}\n\n.taskDescriptionBtn {\n  grid-column: 5/7;\n}\n\n.changePriorityButon {\n  grid-row-start: 1;\n  grid-column-start: 4;\n}\n\n.completed {\n  background-color: lightgreen !important;\n  color: white;\n  border: 2px solid green;\n}\n\n.task {\n  display: grid !important;\n  height: fit-content !important;\n  grid-template-columns: 3.5vw 1.5fr 1.7fr 0.5fr 0.2fr;\n  grid-template-rows: 1fr 1fr;\n  justify-items: start;\n  gap: 10px;\n  align-items: center;\n  padding: 8px;\n  font-size: 0.9rem;\n}\n\n.task-name {\n  max-width: 300px;\n}\n.task button {\n  background-color: white;\n}\n\n.taskDeleteBtn {\n  background-color: red !important;\n  color: white;\n}\n\n.task:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.task button:hover,\nselect:hover,\n.taskAdderBtn:hover {\n  cursor: pointer;\n}\n\np {\n  margin: 0;\n}\n\n.completedTask {\n  text-decoration: line-through;\n}\n\n.high {\n  border-left: solid red 0.5vw !important;\n}\n\n.medium {\n  border-left: solid orange 0.5vw !important;\n}\n\n.task {\n  border-left: solid lightblue 0.5vw;\n}\n\n.changePriorityButon,\n.editTaskBtn,\n.taskDescriptionBtn,\n.taskDeleteBtn {\n  height: fit-content !important;\n  width: fit-content !important;\n}\n\n.desc {\n  max-height: 100%;\n  grid-row-start: 2;\n  max-width: 380px;\n  word-wrap: break-word;\n}\n\n@media screen and (max-width: 767px) {\n  /* styles for screens 767px or smaller (most smartphones in landscape mode) */\n  .headerContainer {\n    font-size: 1.2rem;\n    height: 4vh;\n    border-bottom: none;\n  }\n\n  .main {\n    gap: 15px;\n  }\n  .projectsContainer {\n    height: 16.5vh;\n    overflow-y: scroll;\n  }\n\n  .tasksContainer {\n    height: 65vh;\n  }\n  .main {\n    grid-template-columns: 1fr;\n    height: auto;\n  }\n  .taskListContainer {\n    min-width: 80vw;\n    grid-template-columns: 1fr;\n  }\n  .taskListContainer button {\n    width: 80vw;\n  }\n  .projectName {\n    font-size: 1.5rem;\n  }\n  .projectButton {\n    font-size: 1rem;\n  }\n\n  .confirmInputBtn,\n  .cancelInputBtn {\n    padding: 1vmin 3.5vmin;\n    font-size: 1rem;\n    margin-top: 10px;\n  }\n  .task {\n    font-size: 0.8rem !important;\n    grid-template-columns: 3.5vw 2fr 1fr 0.5fr 0.5fr;\n    grid-template-rows: 1fr 1fr;\n  }\n\n  .task-name {\n    grid-row-start: 1;\n    grid-column: 2/5;\n    max-width: 120px;\n    word-wrap: break-word;\n    padding-right: 5px;\n  }\n\n  .task-due-date {\n    grid-row-start: 2;\n    grid-column: 2/5;\n  }\n\n  .footerContainer {\n    height: 7vh;\n  }\n\n  .high {\n    border-left: solid red 2vw !important;\n  }\n\n  .medium {\n    border-left: solid orange 2vw !important;\n  }\n\n  .task {\n    border-left: solid lightblue 2vw;\n    word-wrap: break-word;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
/* harmony import */ var _logicHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logicHandler */ "./src/logicHandler.js");
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
    const projectNames = _logicHandler__WEBPACK_IMPORTED_MODULE_0__.projects.map(proj => proj.name);
    const projectName = inputField.value;

    if (validateProjectName(projectNames, projectName)) {
      const newProject = (0,_logicHandler__WEBPACK_IMPORTED_MODULE_0__.createProject)(projectName);
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
/* harmony import */ var _logicHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logicHandler */ "./src/logicHandler.js");


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
        const projectTasks = _logicHandler__WEBPACK_IMPORTED_MODULE_0__.projects.find(
          proj => proj.name === project.name
        ).tasks;
        const isTaskNameAlreadyExists = projectTasks.some(
          task => task.title === taskName
        );

        if (isTaskNameAlreadyExists) {
          alert('A task with the same name already exists in this project.');
          return;
        }

        const newTask = new _logicHandler__WEBPACK_IMPORTED_MODULE_0__.TaskCreator(
          taskName,
          taskDescription,
          taskDueDate,
          taskPriority
        );
        (0,_logicHandler__WEBPACK_IMPORTED_MODULE_0__.addTaskToProject)(project.name, newTask);
        renderTask(newTask, tasksContainer, project.name);

        resetTaskForm(addTaskForm);
      } else {
        const projectObj = _logicHandler__WEBPACK_IMPORTED_MODULE_0__.projects.find(proj => proj.name === project.name);
        const taskIndex = projectObj.tasks.findIndex(
          task =>
            task.title ===
            addTaskForm.editingTaskElement.querySelector('.task-name')
              .textContent
        );
        const taskObj = projectObj.tasks[taskIndex];
        const projectTasks = _logicHandler__WEBPACK_IMPORTED_MODULE_0__.projects.find(
          proj => proj.name === project.name
        ).tasks;
        const isTaskNameAlreadyExists = projectTasks.some(
          task => task.title === taskName
        );
        if (addTaskForm.editing !== true && isTaskNameAlreadyExists) {
          alert('There is already a task with that name');
          return;
        }
        taskObj.title = taskName;
        taskObj.description = taskDescription;
        taskObj.dueDate = taskDueDate;
        taskObj.priority = taskPriority;
        (0,_logicHandler__WEBPACK_IMPORTED_MODULE_0__.updateTaskInAllTasks)(taskObj);
        (0,_logicHandler__WEBPACK_IMPORTED_MODULE_0__.saveProjects)();

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
      (0,_logicHandler__WEBPACK_IMPORTED_MODULE_0__.removeTaskFromProject)(projectName, task);
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

/***/ "./src/logicHandler.js":
/*!*****************************!*\
  !*** ./src/logicHandler.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskCreator": () => (/* binding */ TaskCreator),
/* harmony export */   "addTaskToProject": () => (/* binding */ addTaskToProject),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "removeTaskFromProject": () => (/* binding */ removeTaskFromProject),
/* harmony export */   "saveProjects": () => (/* binding */ saveProjects),
/* harmony export */   "updateTaskInAllTasks": () => (/* binding */ updateTaskInAllTasks)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");


function updateTaskInAllTasks(updatedTask) {
  const allTasksProject = projects.find(p => p.name === 'All tasks');
  const taskIndex = allTasksProject.tasks.findIndex(
    t => t.id === updatedTask.id
  );

  if (taskIndex !== -1) {
    allTasksProject.tasks[taskIndex] = updatedTask;
  }
}

function TaskCreator(
  title,
  description,
  dueDate,
  priority,
  projectName,
  id,
  completed,
  skipAdding = false
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
      updateTaskInAllTasks(this);
      saveProjects();
    },

    uncompleteTask() {
      this.completed = false;
      updateTaskInAllTasks(this);
      saveProjects();
    },

    changePriority(newPriority) {
      this.priority = newPriority;
      updateTaskInAllTasks(this);
      saveProjects();
    },

    updateTask(newTitle, newDescription, newDueDate, newPriority) {
      this.title = newTitle;
      this.description = newDescription;
      this.dueDate = newDueDate;
      this.priority = newPriority;
      updateTaskInAllTasks(this);
      saveProjects();
    },
  };

  if (!skipAdding) {
    addTaskToProject(projectName || 'All tasks', task);
  }
  return task;
}

const defaultProjects = [
  { name: 'Home', tasks: [] },
  { name: 'Important', tasks: [] },
  { name: 'All tasks', tasks: [] },
];

const storedProjects = localStorage.getItem('projects');

function recreateTasks() {
  projects.forEach(project => {
    project.tasks = project.tasks.map(task =>
      TaskCreator(
        task.title, // Pass the updated title
        task.description,
        task.dueDate,
        task.priority,
        project.name,
        task.id,
        task.completed,
        true
      )
    );
  });
}

const projects =
  storedProjects && storedProjects !== 'undefined'
    ? JSON.parse(storedProjects)
    : defaultProjects;

if (storedProjects && storedProjects !== 'undefined') {
  recreateTasks();
}

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
/* harmony import */ var _logicHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logicHandler */ "./src/logicHandler.js");
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
    _logicHandler__WEBPACK_IMPORTED_MODULE_1__.projects,
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
/* harmony import */ var _logicHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logicHandler */ "./src/logicHandler.js");



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
  projectName.classList.add('projectName');
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
        (0,_logicHandler__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(project.name);
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

/***/ "../../Fonts/Roboto-Italic.ttf":
/*!*************************************!*\
  !*** ../../Fonts/Roboto-Italic.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "87f3afe16a8c3c370634.ttf";

/***/ }),

/***/ "../../fonts/Sublima-Light.otf":
/*!*************************************!*\
  !*** ../../fonts/Sublima-Light.otf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e1c550b330cf7b40c5e.otf";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _logicHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logicHandler */ "./src/logicHandler.js");
/* harmony import */ var _domHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domHandler */ "./src/domHandler.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






(0,_domHandler__WEBPACK_IMPORTED_MODULE_1__["default"])();

window.createProject = _logicHandler__WEBPACK_IMPORTED_MODULE_0__.createProject;
window.projects = _logicHandler__WEBPACK_IMPORTED_MODULE_0__.projects;
window.TaskCreator = _logicHandler__WEBPACK_IMPORTED_MODULE_0__.TaskCreator;
window.addTaskToProject = _logicHandler__WEBPACK_IMPORTED_MODULE_0__.addTaskToProject;
window.deleteProject = _logicHandler__WEBPACK_IMPORTED_MODULE_0__.deleteProject;
window.removeTaskFromProject = _logicHandler__WEBPACK_IMPORTED_MODULE_0__.removeTaskFromProject;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxPQUFPLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFFBQVEsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLHFDQUFxQywyQkFBMkIscURBQXFELEdBQUcsZ0JBQWdCLGdDQUFnQyxxREFBcUQsR0FBRyxPQUFPLDBCQUEwQixHQUFHLFVBQVUsY0FBYyxlQUFlLDZDQUE2QyxHQUFHLHNCQUFzQixpQkFBaUIsc0JBQXNCLGlCQUFpQixrQkFBa0Isd0JBQXdCLDZDQUE2QyxpQkFBaUIsc0JBQXNCLCtCQUErQixHQUFHLDBDQUEwQywyQ0FBMkMsR0FBRyxXQUFXLGtCQUFrQixtQ0FBbUMsaUJBQWlCLDZDQUE2QywyQkFBMkIsR0FBRyxxQkFBcUIsb0NBQW9DLEdBQUcsc0JBQXNCLGdCQUFnQixnQ0FBZ0MsR0FBRyxvQkFBb0Isa0JBQWtCLEdBQUcscUJBQXFCLGtCQUFrQiw0QkFBNEIsYUFBYSxHQUFHLHNCQUFzQixrQkFBa0IsK0JBQStCLGdDQUFnQyxtQkFBbUIsd0JBQXdCLDBCQUEwQixvQkFBb0IscUJBQXFCLEdBQUcsK0JBQStCLGdCQUFnQixnQkFBZ0Isb0NBQW9DLGtCQUFrQixHQUFHLDJCQUEyQixrQkFBa0IsR0FBRyx3QkFBd0Isb0JBQW9CLEdBQUcsb0JBQW9CLGFBQWEsa0JBQWtCLEdBQUcsZ0JBQWdCLHNCQUFzQix1QkFBdUIsR0FBRyx3Q0FBd0MsaUJBQWlCLGVBQWUsa0JBQWtCLDRCQUE0Qix3QkFBd0IsaUJBQWlCLEdBQUcsb0RBQW9ELG9CQUFvQixpQkFBaUIsR0FBRyxzQkFBc0IsaUNBQWlDLEdBQUcscUJBQXFCLDBCQUEwQixHQUFHLG9CQUFvQixrQkFBa0IsNEJBQTRCLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLHNCQUFzQixlQUFlLEdBQUcsZUFBZSxpQkFBaUIsa0NBQWtDLG9CQUFvQixHQUFHLHFCQUFxQixxQkFBcUIsR0FBRyx3Q0FBd0MsZ0JBQWdCLEdBQUcsOENBQThDLHdCQUF3QixHQUFHLDhDQUE4QyxxQ0FBcUMsd0JBQXdCLDhCQUE4QixHQUFHLDJCQUEyQixrQkFBa0IsNEJBQTRCLGFBQWEsR0FBRywyQkFBMkIsa0JBQWtCLDRCQUE0QixHQUFHLHdCQUF3QixrQkFBa0Isd0JBQXdCLGFBQWEscUJBQXFCLHNCQUFzQixxQkFBcUIsR0FBRyxrQkFBa0IsdUJBQXVCLG9CQUFvQixHQUFHLG9CQUFvQixrQkFBa0IsbUNBQW1DLHNCQUFzQiw2Q0FBNkMsdUJBQXVCLGlCQUFpQix1QkFBdUIsaUJBQWlCLEdBQUcsMkJBQTJCLG9DQUFvQyx1QkFBdUIsNEJBQTRCLGlCQUFpQixHQUFHLDhEQUE4RCxvQkFBb0IsR0FBRyxvREFBb0QsNEJBQTRCLEdBQUcsdUJBQXVCLG9DQUFvQyxpQkFBaUIsd0JBQXdCLCtCQUErQixHQUFHLGtGQUFrRixvQkFBb0IsR0FBRyxtQkFBbUIsNEJBQTRCLGlCQUFpQixHQUFHLG9CQUFvQiw0QkFBNEIsMkJBQTJCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHVCQUF1Qix5QkFBeUIsa0JBQWtCLEdBQUcsb0JBQW9CLHlCQUF5QixHQUFHLG9CQUFvQixzQkFBc0IseUJBQXlCLEdBQUcsa0JBQWtCLHNCQUFzQix5QkFBeUIsR0FBRyx5QkFBeUIscUJBQXFCLEdBQUcsMEJBQTBCLHNCQUFzQix5QkFBeUIsR0FBRyxnQkFBZ0IsNENBQTRDLGlCQUFpQiw0QkFBNEIsR0FBRyxXQUFXLDZCQUE2QixtQ0FBbUMseURBQXlELGdDQUFnQyx5QkFBeUIsY0FBYyx3QkFBd0IsaUJBQWlCLHNCQUFzQixHQUFHLGdCQUFnQixxQkFBcUIsR0FBRyxnQkFBZ0IsNEJBQTRCLEdBQUcsb0JBQW9CLHFDQUFxQyxpQkFBaUIsR0FBRyxpQkFBaUIsNENBQTRDLEdBQUcsNkRBQTZELG9CQUFvQixHQUFHLE9BQU8sY0FBYyxHQUFHLG9CQUFvQixrQ0FBa0MsR0FBRyxXQUFXLDRDQUE0QyxHQUFHLGFBQWEsK0NBQStDLEdBQUcsV0FBVyx1Q0FBdUMsR0FBRyxnRkFBZ0YsbUNBQW1DLGtDQUFrQyxHQUFHLFdBQVcscUJBQXFCLHNCQUFzQixxQkFBcUIsMEJBQTBCLEdBQUcsMENBQTBDLHdHQUF3Ryx3QkFBd0Isa0JBQWtCLDBCQUEwQixLQUFLLGFBQWEsZ0JBQWdCLEtBQUssd0JBQXdCLHFCQUFxQix5QkFBeUIsS0FBSyx1QkFBdUIsbUJBQW1CLEtBQUssV0FBVyxpQ0FBaUMsbUJBQW1CLEtBQUssd0JBQXdCLHNCQUFzQixpQ0FBaUMsS0FBSywrQkFBK0Isa0JBQWtCLEtBQUssa0JBQWtCLHdCQUF3QixLQUFLLG9CQUFvQixzQkFBc0IsS0FBSyw0Q0FBNEMsNkJBQTZCLHNCQUFzQix1QkFBdUIsS0FBSyxXQUFXLG1DQUFtQyx1REFBdUQsa0NBQWtDLEtBQUssa0JBQWtCLHdCQUF3Qix1QkFBdUIsdUJBQXVCLDRCQUE0Qix5QkFBeUIsS0FBSyxzQkFBc0Isd0JBQXdCLHVCQUF1QixLQUFLLHdCQUF3QixrQkFBa0IsS0FBSyxhQUFhLDRDQUE0QyxLQUFLLGVBQWUsK0NBQStDLEtBQUssYUFBYSx1Q0FBdUMsNEJBQTRCLEtBQUssR0FBRyxxQkFBcUI7QUFDM3FoQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1oxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2Z5RDtBQUNDOztBQUUxRDs7QUFFQTtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUkseUNBQXlDO0FBQzdDLElBQUk7QUFDSjtBQUNBO0FBQ0EseUJBQXlCLHVEQUFZO0FBQ3JDOztBQUVBO0FBQ0EseUJBQXlCLDREQUFhO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLE1BQU0saUVBQW9CO0FBQzFCLHlDQUF5QztBQUN6QztBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsR0FBRztBQUNIOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEseUNBQXlDO0FBQ2pELFFBQVE7QUFDUjtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRXdCOztBQUVUO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2Qix3REFBYTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixzREFBVztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrREFBZ0I7QUFDeEI7O0FBRUE7QUFDQSxRQUFRO0FBQ1IsMkJBQTJCLHdEQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHdEQUFhO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtRUFBb0I7QUFDNUIsUUFBUSwyREFBWTs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixZQUFZO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsYUFBYTtBQUN4RDtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG9FQUFxQjtBQUMzQjtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcFVlO0FBQ2Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOK0M7O0FBRWhDO0FBQ2YsRUFBRSwwREFBZ0I7QUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSmdEOztBQUV6QztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUkseUJBQXlCO0FBQzdCLElBQUksOEJBQThCO0FBQ2xDLElBQUksOEJBQThCO0FBQ2xDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQLHVCQUF1QjtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDZEQUFzQixXQUFXO0FBQ3ZDLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakwwRDtBQUNoQjtBQUNVO0FBQ0k7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLDZEQUFrQjs7QUFFcEIsRUFBRSxpRUFBb0I7QUFDdEIsSUFBSSxtREFBUTtBQUNaO0FBQ0E7QUFDQSxJQUFJLDREQUFtQjtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEd0U7QUFDekI7O0FBRXhDO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0VBQVU7QUFDZCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdFQUFtQjtBQUN2QjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUFhO0FBQ3JCO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3RFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDT3dCOztBQUVvQjs7QUFFdkI7O0FBRXJCLHVEQUFnQjs7QUFFaEIsdUJBQXVCLHdEQUFhO0FBQ3BDLGtCQUFrQixtREFBUTtBQUMxQixxQkFBcUIsc0RBQVc7QUFDaEMsMEJBQTBCLDJEQUFnQjtBQUMxQyx1QkFBdUIsd0RBQWE7QUFDcEMsK0JBQStCLGdFQUFxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hZGRQcm9qZWN0QnV0dG9uLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZUFkZFRhc2tCdXR0b24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kb21IYW5kbGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2xvZ2ljSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wYWdlTGF5b3V0RE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3RCdXR0b25DcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9ob21lL2NhbGx1bWFjL2ZvbnRzL1N1YmxpbWEtTGlnaHQub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL2hvbWUvY2FsbHVtYWMvRm9udHMvUm9ib3RvLUl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1N1YmxpbWEnO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnU3VibGltYS1ib2xkJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuKiB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA0LCAyMDQsIDI1NSwgMSk7XFxufVxcblxcbi5oZWFkZXJDb250YWluZXIge1xcbiAgaGVpZ2h0OiAxNXZoO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBwYWRkaW5nOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA0LCAyMDQsIDI1NSwgMSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nLWxlZnQ6IDN2dztcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uaGVhZGVyQ29udGFpbmVyLFxcbi5hZGRQcm9qZWN0QnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiAnU3VibGltYS1ib2xkJyAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgaGVpZ2h0OiA3OHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDQsIDIwNCwgMjU1LCAxKTtcXG4gIGZvbnQtZmFtaWx5OiAnU3VibGltYSc7XFxufVxcblxcbi50YXNrc0NvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcmJsdXNoO1xcbn1cXG5cXG4uZm9vdGVyQ29udGFpbmVyIHtcXG4gIGhlaWdodDogNnZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4udGFza0FkZGVyRm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uYnV0dG9uc1dyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxufVxcbi50YXNrTGlzdENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XFxuICBncmlkLWdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IDUwdnc7XFxuICBwYWRkaW5nLXRvcDogNXZoO1xcbn1cXG5cXG4udGFza0xpc3RDb250YWluZXIgYnV0dG9uIHtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgaGVpZ2h0OiA3dmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcmJsdXNoO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhc2tBZGRlckZvcm0gYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50YXNrQWRkZXJGb3JtID4gKiB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrQWRkZXJGb3JtIHtcXG4gIGdhcDogNXB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnRhc2stbmFtZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmNvbmZpcm1JbnB1dEJ0bixcXG4uY2FuY2VsSW5wdXRCdG4ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDN2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5jb25maXJtSW5wdXRCdG46aG92ZXIsXFxuLmNhbmNlbElucHV0QnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmNvbmZpcm1JbnB1dEJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4uY2FuY2VsSW5wdXRCdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4udGFza0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi50YXNrSXRlbSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2tzQ29udGFpbmVyIHtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi50YXNrc0NvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDE1cHg7XFxufVxcblxcbi50YXNrc0NvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcXG59XFxuXFxuLnRhc2tzQ29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZjFmMWYxO1xcbn1cXG5cXG4udGFza0FuZEJ1dHRvbldyYXBwZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1dmg7XFxufVxcblxcbi5wcm9qZWN0TmFtZUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0c0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGdhcDogMXZoO1xcbiAgbWFyZ2luLWxlZnQ6IDJ2dztcXG4gIG1hcmdpbi1yaWdodDogMnZ3O1xcbiAgcGFkZGluZy10b3A6IDV2aDtcXG59XFxuXFxuLnByb2plY3ROYW1lIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLnByb2plY3RCdXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmctbGVmdDogMXZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDIwNCwgMjU1LCAxKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnByb2plY3RCdXR0b24gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxhdmVuZGVyYmx1c2g7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3JkZXItY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLnByb2plY3RCdXR0b24gYnV0dG9uLFxcbi5wcm9qZWN0QnV0dG9uLFxcbi5hZGRQcm9qZWN0QnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnByb2plY3RCdXR0b246aG92ZXIsXFxuLmFkZFByb2plY3RCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5hZGRQcm9qZWN0QnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxhdmVuZGVyYmx1c2g7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGF2ZW5kZXI7XFxufVxcblxcbi5wcm9qZWN0QnV0dG9uIGJ1dHRvbjpob3ZlcixcXG4ucHJvamVjdEJ1dHRvbjpob3ZlcixcXG4uYWRkUHJvamVjdEJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrQWRkZXJCdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi50YXNrQ29tcGxldGVyIHtcXG4gIGhlaWdodDogMThweCAhaW1wb3J0YW50O1xcbiAgd2lkdGg6IDE4cHggIWltcG9ydGFudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGdyaWQtcm93OiAxLzM7XFxufVxcblxcbi50YXNrLWR1ZS1kYXRlIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xcbn1cXG5cXG4udGFza0RlbGV0ZUJ0biB7XFxuICBncmlkLXJvdy1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiA2O1xcbn1cXG5cXG4uZWRpdFRhc2tCdG4ge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbi1zdGFydDogNTtcXG59XFxuXFxuLnRhc2tEZXNjcmlwdGlvbkJ0biB7XFxuICBncmlkLWNvbHVtbjogNS83O1xcbn1cXG5cXG4uY2hhbmdlUHJpb3JpdHlCdXRvbiB7XFxuICBncmlkLXJvdy1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiA0O1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW4gIWltcG9ydGFudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4udGFzayB7XFxuICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMuNXZ3IDEuNWZyIDEuN2ZyIDAuNWZyIDAuMmZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi50YXNrLW5hbWUge1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG59XFxuLnRhc2sgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFza0RlbGV0ZUJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4udGFzayBidXR0b246aG92ZXIsXFxuc2VsZWN0OmhvdmVyLFxcbi50YXNrQWRkZXJCdG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmNvbXBsZXRlZFRhc2sge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5oaWdoIHtcXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCByZWQgMC41dncgIWltcG9ydGFudDtcXG59XFxuXFxuLm1lZGl1bSB7XFxuICBib3JkZXItbGVmdDogc29saWQgb3JhbmdlIDAuNXZ3ICFpbXBvcnRhbnQ7XFxufVxcblxcbi50YXNrIHtcXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCBsaWdodGJsdWUgMC41dnc7XFxufVxcblxcbi5jaGFuZ2VQcmlvcml0eUJ1dG9uLFxcbi5lZGl0VGFza0J0bixcXG4udGFza0Rlc2NyaXB0aW9uQnRuLFxcbi50YXNrRGVsZXRlQnRuIHtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZGVzYyB7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICBtYXgtd2lkdGg6IDM4MHB4O1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLyogc3R5bGVzIGZvciBzY3JlZW5zIDc2N3B4IG9yIHNtYWxsZXIgKG1vc3Qgc21hcnRwaG9uZXMgaW4gbGFuZHNjYXBlIG1vZGUpICovXFxuICAuaGVhZGVyQ29udGFpbmVyIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGhlaWdodDogNHZoO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgfVxcblxcbiAgLm1haW4ge1xcbiAgICBnYXA6IDE1cHg7XFxuICB9XFxuICAucHJvamVjdHNDb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDE2LjV2aDtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgfVxcblxcbiAgLnRhc2tzQ29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA2NXZoO1xcbiAgfVxcbiAgLm1haW4ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbiAgLnRhc2tMaXN0Q29udGFpbmVyIHtcXG4gICAgbWluLXdpZHRoOiA4MHZ3O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG4gIC50YXNrTGlzdENvbnRhaW5lciBidXR0b24ge1xcbiAgICB3aWR0aDogODB2dztcXG4gIH1cXG4gIC5wcm9qZWN0TmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbiAgLnByb2plY3RCdXR0b24ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuXFxuICAuY29uZmlybUlucHV0QnRuLFxcbiAgLmNhbmNlbElucHV0QnRuIHtcXG4gICAgcGFkZGluZzogMXZtaW4gMy41dm1pbjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgfVxcbiAgLnRhc2sge1xcbiAgICBmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMuNXZ3IDJmciAxZnIgMC41ZnIgMC41ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIH1cXG5cXG4gIC50YXNrLW5hbWUge1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDIvNTtcXG4gICAgbWF4LXdpZHRoOiAxMjBweDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICB9XFxuXFxuICAudGFzay1kdWUtZGF0ZSB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbjogMi81O1xcbiAgfVxcblxcbiAgLmZvb3RlckNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogN3ZoO1xcbiAgfVxcblxcbiAgLmhpZ2gge1xcbiAgICBib3JkZXItbGVmdDogc29saWQgcmVkIDJ2dyAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLm1lZGl1bSB7XFxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCBvcmFuZ2UgMnZ3ICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAudGFzayB7XFxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCBsaWdodGJsdWUgMnZ3O1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsNENBQWdEO0FBQ2xEOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDRDQUFnRDtBQUNsRDs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtF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Q3JCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxxQ0FBcUM7RUFDdkM7O0VBRUE7SUFDRSx3Q0FBd0M7RUFDMUM7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMscUJBQXFCO0VBQ3ZCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1N1YmxpbWEnO1xcbiAgc3JjOiB1cmwoL2hvbWUvY2FsbHVtYWMvZm9udHMvU3VibGltYS1MaWdodC5vdGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnU3VibGltYS1ib2xkJztcXG4gIHNyYzogdXJsKC9ob21lL2NhbGx1bWFjL0ZvbnRzL1JvYm90by1JdGFsaWMudHRmKTtcXG59XFxuXFxuKiB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA0LCAyMDQsIDI1NSwgMSk7XFxufVxcblxcbi5oZWFkZXJDb250YWluZXIge1xcbiAgaGVpZ2h0OiAxNXZoO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBwYWRkaW5nOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA0LCAyMDQsIDI1NSwgMSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nLWxlZnQ6IDN2dztcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uaGVhZGVyQ29udGFpbmVyLFxcbi5hZGRQcm9qZWN0QnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiAnU3VibGltYS1ib2xkJyAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgaGVpZ2h0OiA3OHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDQsIDIwNCwgMjU1LCAxKTtcXG4gIGZvbnQtZmFtaWx5OiAnU3VibGltYSc7XFxufVxcblxcbi50YXNrc0NvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcmJsdXNoO1xcbn1cXG5cXG4uZm9vdGVyQ29udGFpbmVyIHtcXG4gIGhlaWdodDogNnZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4udGFza0FkZGVyRm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uYnV0dG9uc1dyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxufVxcbi50YXNrTGlzdENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XFxuICBncmlkLWdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IDUwdnc7XFxuICBwYWRkaW5nLXRvcDogNXZoO1xcbn1cXG5cXG4udGFza0xpc3RDb250YWluZXIgYnV0dG9uIHtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgaGVpZ2h0OiA3dmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcmJsdXNoO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhc2tBZGRlckZvcm0gYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50YXNrQWRkZXJGb3JtID4gKiB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrQWRkZXJGb3JtIHtcXG4gIGdhcDogNXB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnRhc2stbmFtZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmNvbmZpcm1JbnB1dEJ0bixcXG4uY2FuY2VsSW5wdXRCdG4ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDN2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5jb25maXJtSW5wdXRCdG46aG92ZXIsXFxuLmNhbmNlbElucHV0QnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmNvbmZpcm1JbnB1dEJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4uY2FuY2VsSW5wdXRCdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4udGFza0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi50YXNrSXRlbSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2tzQ29udGFpbmVyIHtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi50YXNrc0NvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDE1cHg7XFxufVxcblxcbi50YXNrc0NvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcXG59XFxuXFxuLnRhc2tzQ29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZjFmMWYxO1xcbn1cXG5cXG4udGFza0FuZEJ1dHRvbldyYXBwZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1dmg7XFxufVxcblxcbi5wcm9qZWN0TmFtZUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0c0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGdhcDogMXZoO1xcbiAgbWFyZ2luLWxlZnQ6IDJ2dztcXG4gIG1hcmdpbi1yaWdodDogMnZ3O1xcbiAgcGFkZGluZy10b3A6IDV2aDtcXG59XFxuXFxuLnByb2plY3ROYW1lIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLnByb2plY3RCdXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmctbGVmdDogMXZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDIwNCwgMjU1LCAxKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnByb2plY3RCdXR0b24gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxhdmVuZGVyYmx1c2g7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3JkZXItY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLnByb2plY3RCdXR0b24gYnV0dG9uLFxcbi5wcm9qZWN0QnV0dG9uLFxcbi5hZGRQcm9qZWN0QnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnByb2plY3RCdXR0b246aG92ZXIsXFxuLmFkZFByb2plY3RCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5hZGRQcm9qZWN0QnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxhdmVuZGVyYmx1c2g7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGF2ZW5kZXI7XFxufVxcblxcbi5wcm9qZWN0QnV0dG9uIGJ1dHRvbjpob3ZlcixcXG4ucHJvamVjdEJ1dHRvbjpob3ZlcixcXG4uYWRkUHJvamVjdEJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrQWRkZXJCdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi50YXNrQ29tcGxldGVyIHtcXG4gIGhlaWdodDogMThweCAhaW1wb3J0YW50O1xcbiAgd2lkdGg6IDE4cHggIWltcG9ydGFudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGdyaWQtcm93OiAxLzM7XFxufVxcblxcbi50YXNrLWR1ZS1kYXRlIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xcbn1cXG5cXG4udGFza0RlbGV0ZUJ0biB7XFxuICBncmlkLXJvdy1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiA2O1xcbn1cXG5cXG4uZWRpdFRhc2tCdG4ge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbi1zdGFydDogNTtcXG59XFxuXFxuLnRhc2tEZXNjcmlwdGlvbkJ0biB7XFxuICBncmlkLWNvbHVtbjogNS83O1xcbn1cXG5cXG4uY2hhbmdlUHJpb3JpdHlCdXRvbiB7XFxuICBncmlkLXJvdy1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiA0O1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW4gIWltcG9ydGFudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4udGFzayB7XFxuICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMuNXZ3IDEuNWZyIDEuN2ZyIDAuNWZyIDAuMmZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi50YXNrLW5hbWUge1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG59XFxuLnRhc2sgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFza0RlbGV0ZUJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4udGFzayBidXR0b246aG92ZXIsXFxuc2VsZWN0OmhvdmVyLFxcbi50YXNrQWRkZXJCdG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmNvbXBsZXRlZFRhc2sge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5oaWdoIHtcXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCByZWQgMC41dncgIWltcG9ydGFudDtcXG59XFxuXFxuLm1lZGl1bSB7XFxuICBib3JkZXItbGVmdDogc29saWQgb3JhbmdlIDAuNXZ3ICFpbXBvcnRhbnQ7XFxufVxcblxcbi50YXNrIHtcXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCBsaWdodGJsdWUgMC41dnc7XFxufVxcblxcbi5jaGFuZ2VQcmlvcml0eUJ1dG9uLFxcbi5lZGl0VGFza0J0bixcXG4udGFza0Rlc2NyaXB0aW9uQnRuLFxcbi50YXNrRGVsZXRlQnRuIHtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZGVzYyB7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICBtYXgtd2lkdGg6IDM4MHB4O1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLyogc3R5bGVzIGZvciBzY3JlZW5zIDc2N3B4IG9yIHNtYWxsZXIgKG1vc3Qgc21hcnRwaG9uZXMgaW4gbGFuZHNjYXBlIG1vZGUpICovXFxuICAuaGVhZGVyQ29udGFpbmVyIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGhlaWdodDogNHZoO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgfVxcblxcbiAgLm1haW4ge1xcbiAgICBnYXA6IDE1cHg7XFxuICB9XFxuICAucHJvamVjdHNDb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDE2LjV2aDtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgfVxcblxcbiAgLnRhc2tzQ29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA2NXZoO1xcbiAgfVxcbiAgLm1haW4ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbiAgLnRhc2tMaXN0Q29udGFpbmVyIHtcXG4gICAgbWluLXdpZHRoOiA4MHZ3O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG4gIC50YXNrTGlzdENvbnRhaW5lciBidXR0b24ge1xcbiAgICB3aWR0aDogODB2dztcXG4gIH1cXG4gIC5wcm9qZWN0TmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbiAgLnByb2plY3RCdXR0b24ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuXFxuICAuY29uZmlybUlucHV0QnRuLFxcbiAgLmNhbmNlbElucHV0QnRuIHtcXG4gICAgcGFkZGluZzogMXZtaW4gMy41dm1pbjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgfVxcbiAgLnRhc2sge1xcbiAgICBmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMuNXZ3IDJmciAxZnIgMC41ZnIgMC41ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIH1cXG5cXG4gIC50YXNrLW5hbWUge1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDIvNTtcXG4gICAgbWF4LXdpZHRoOiAxMjBweDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICB9XFxuXFxuICAudGFzay1kdWUtZGF0ZSB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbjogMi81O1xcbiAgfVxcblxcbiAgLmZvb3RlckNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogN3ZoO1xcbiAgfVxcblxcbiAgLmhpZ2gge1xcbiAgICBib3JkZXItbGVmdDogc29saWQgcmVkIDJ2dyAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLm1lZGl1bSB7XFxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCBvcmFuZ2UgMnZ3ICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAudGFzayB7XFxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCBsaWdodGJsdWUgMnZ3O1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBwcm9qZWN0cyB9IGZyb20gJy4vbG9naWNIYW5kbGVyJztcbmltcG9ydCBwcm9qZWN0QnV0dG9uQ3JlYXRvciBmcm9tICcuL3Byb2plY3RCdXR0b25DcmVhdG9yJztcblxuY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb2plY3ROYW1lKHByb2plY3ROYW1lcywgcHJvamVjdE5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TmFtZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAocHJvamVjdE5hbWVzW2ldID09PSBwcm9qZWN0TmFtZSkge1xuICAgICAgYWxlcnQoJ0EgcHJvamVjdCB3aXRoIHRoYXQgbmFtZSBhbHJlYWR5IGV4aXN0cycpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAocHJvamVjdE5hbWUubGVuZ3RoIDw9IDApIHtcbiAgICAgIGFsZXJ0KCdQcm9qZWN0IG5hbWUgY2Fubm90IGJlIGVtcHR5Jyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXNlTGlzdGVuZXJzKFxuICB7IGNvbmZpcm1CdXR0b24sIGNhbmNlbEJ1dHRvbiwgaW5wdXRGaWVsZCB9LFxuICB7IHByb2plY3RMaXN0RWxlbWVudCwgdGFza0xpc3RFbGVtZW50IH1cbikge1xuICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lcyA9IHByb2plY3RzLm1hcChwcm9qID0+IHByb2oubmFtZSk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBpbnB1dEZpZWxkLnZhbHVlO1xuXG4gICAgaWYgKHZhbGlkYXRlUHJvamVjdE5hbWUocHJvamVjdE5hbWVzLCBwcm9qZWN0TmFtZSkpIHtcbiAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgIGlucHV0RmllbGQucmVtb3ZlKCk7XG4gICAgICBjb25maXJtQnV0dG9uLnJlbW92ZSgpO1xuICAgICAgY2FuY2VsQnV0dG9uLnJlbW92ZSgpO1xuICAgICAgcHJvamVjdEJ1dHRvbkNyZWF0b3IoW25ld1Byb2plY3RdLCBwcm9qZWN0TGlzdEVsZW1lbnQsIHRhc2tMaXN0RWxlbWVudCk7XG4gICAgICBhZGRQcm9qZWN0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7IC8vIEVuYWJsZSB0aGUgYnV0dG9uXG4gICAgfVxuICB9KTtcblxuICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaW5wdXRGaWVsZC5yZW1vdmUoKTtcbiAgICBjb25maXJtQnV0dG9uLnJlbW92ZSgpO1xuICAgIGNhbmNlbEJ1dHRvbi5yZW1vdmUoKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7IC8vIEVuYWJsZSB0aGUgYnV0dG9uXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0QWRkZXIoXG4gIHByb2plY3RMaXN0RWxlbWVudCxcbiAgdGFza0xpc3RFbGVtZW50XG4pIHtcbiAgYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICcrIEFkZCBhIHByb2plY3QnO1xuICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFByb2plY3RCdXR0b24nKTtcbiAgcHJvamVjdExpc3RFbGVtZW50LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xuXG4gIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7IC8vIERpc2FibGUgdGhlIGJ1dHRvblxuICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3RMaXN0RWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dEZpZWxkKTtcblxuICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25maXJtQnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbmZpcm0nO1xuICAgIHByb2plY3RMaXN0RWxlbWVudC5hcHBlbmRDaGlsZChjb25maXJtQnV0dG9uKTtcblxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIHByb2plY3RMaXN0RWxlbWVudC5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgaW5pdGlhbGlzZUxpc3RlbmVycyhcbiAgICAgIHsgY29uZmlybUJ1dHRvbiwgY2FuY2VsQnV0dG9uLCBpbnB1dEZpZWxkIH0sXG4gICAgICB7IHByb2plY3RMaXN0RWxlbWVudCwgdGFza0xpc3RFbGVtZW50IH1cbiAgICApO1xuICB9KTtcbn1cbiIsImltcG9ydCB7XG4gIGFkZFRhc2tUb1Byb2plY3QsXG4gIHByb2plY3RzLFxuICByZW1vdmVUYXNrRnJvbVByb2plY3QsXG4gIHNhdmVQcm9qZWN0cyxcbiAgVGFza0NyZWF0b3IsXG4gIHVwZGF0ZVRhc2tJbkFsbFRhc2tzLFxufSBmcm9tICcuL2xvZ2ljSGFuZGxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFkZFRhc2tCdXR0b24ocHJvamVjdCwgdGFza3NDb250YWluZXIpIHtcbiAgbGV0IGVkaXRpbmdUYXNrRWxlbWVudCA9IG51bGw7XG4gIGNvbnN0IHRhc2tBbmRCdXR0b25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tBbmRCdXR0b25XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2tBbmRCdXR0b25XcmFwcGVyJyk7XG4gIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tBbmRCdXR0b25XcmFwcGVyKTtcblxuICBjb25zdCB0YXNrTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrTGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrTGlzdENvbnRhaW5lcicpO1xuICB0YXNrQW5kQnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrTGlzdENvbnRhaW5lcik7XG5cbiAgY29uc3QgY3JlYXRlQWRkVGFza0Zvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgYWRkVGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgndGFza0FkZGVyRm9ybScpO1xuXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnKyBBZGQgYSB0YXNrJztcbiAgICBhZGRUYXNrQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2tBZGRlckJ0bicpO1xuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuXG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNyZWF0ZVRhc2tJbnB1dENvbnRyb2xzKGFkZFRhc2tGb3JtKTtcbiAgICAgIGFkZFRhc2tCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgYWRkVGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBhZGRUYXNrRm9ybS5xdWVyeVNlbGVjdG9yKCcudGFza05hbWVJbnB1dCcpO1xuICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uSW5wdXQgPSBhZGRUYXNrRm9ybS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnLnRhc2tEZXNjcmlwdGlvbklucHV0J1xuICAgICAgKTtcbiAgICAgIGNvbnN0IHRhc2tEYXRlSW5wdXQgPSBhZGRUYXNrRm9ybS5xdWVyeVNlbGVjdG9yKCcudGFza0RhdGVJbnB1dCcpO1xuICAgICAgY29uc3QgdGFza1ByaW9yaXR5SW5wdXQgPSBhZGRUYXNrRm9ybS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnLnRhc2tQcmlvcml0eVNlbGVjdG9yJ1xuICAgICAgKTtcbiAgICAgIGNvbnN0IHRhc2tOYW1lID0gdGFza05hbWVJbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlO1xuICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSB0YXNrRGF0ZUlucHV0LnZhbHVlO1xuICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gdGFza1ByaW9yaXR5SW5wdXQudmFsdWU7XG5cbiAgICAgIGlmICghYWRkVGFza0Zvcm0uZWRpdGluZykge1xuICAgICAgICBjb25zdCBwcm9qZWN0VGFza3MgPSBwcm9qZWN0cy5maW5kKFxuICAgICAgICAgIHByb2ogPT4gcHJvai5uYW1lID09PSBwcm9qZWN0Lm5hbWVcbiAgICAgICAgKS50YXNrcztcbiAgICAgICAgY29uc3QgaXNUYXNrTmFtZUFscmVhZHlFeGlzdHMgPSBwcm9qZWN0VGFza3Muc29tZShcbiAgICAgICAgICB0YXNrID0+IHRhc2sudGl0bGUgPT09IHRhc2tOYW1lXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGlzVGFza05hbWVBbHJlYWR5RXhpc3RzKSB7XG4gICAgICAgICAgYWxlcnQoJ0EgdGFzayB3aXRoIHRoZSBzYW1lIG5hbWUgYWxyZWFkeSBleGlzdHMgaW4gdGhpcyBwcm9qZWN0LicpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFza0NyZWF0b3IoXG4gICAgICAgICAgdGFza05hbWUsXG4gICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLFxuICAgICAgICAgIHRhc2tEdWVEYXRlLFxuICAgICAgICAgIHRhc2tQcmlvcml0eVxuICAgICAgICApO1xuICAgICAgICBhZGRUYXNrVG9Qcm9qZWN0KHByb2plY3QubmFtZSwgbmV3VGFzayk7XG4gICAgICAgIHJlbmRlclRhc2sobmV3VGFzaywgdGFza3NDb250YWluZXIsIHByb2plY3QubmFtZSk7XG5cbiAgICAgICAgcmVzZXRUYXNrRm9ybShhZGRUYXNrRm9ybSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwcm9qZWN0T2JqID0gcHJvamVjdHMuZmluZChwcm9qID0+IHByb2oubmFtZSA9PT0gcHJvamVjdC5uYW1lKTtcbiAgICAgICAgY29uc3QgdGFza0luZGV4ID0gcHJvamVjdE9iai50YXNrcy5maW5kSW5kZXgoXG4gICAgICAgICAgdGFzayA9PlxuICAgICAgICAgICAgdGFzay50aXRsZSA9PT1cbiAgICAgICAgICAgIGFkZFRhc2tGb3JtLmVkaXRpbmdUYXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1uYW1lJylcbiAgICAgICAgICAgICAgLnRleHRDb250ZW50XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHRhc2tPYmogPSBwcm9qZWN0T2JqLnRhc2tzW3Rhc2tJbmRleF07XG4gICAgICAgIGNvbnN0IHByb2plY3RUYXNrcyA9IHByb2plY3RzLmZpbmQoXG4gICAgICAgICAgcHJvaiA9PiBwcm9qLm5hbWUgPT09IHByb2plY3QubmFtZVxuICAgICAgICApLnRhc2tzO1xuICAgICAgICBjb25zdCBpc1Rhc2tOYW1lQWxyZWFkeUV4aXN0cyA9IHByb2plY3RUYXNrcy5zb21lKFxuICAgICAgICAgIHRhc2sgPT4gdGFzay50aXRsZSA9PT0gdGFza05hbWVcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGFkZFRhc2tGb3JtLmVkaXRpbmcgIT09IHRydWUgJiYgaXNUYXNrTmFtZUFscmVhZHlFeGlzdHMpIHtcbiAgICAgICAgICBhbGVydCgnVGhlcmUgaXMgYWxyZWFkeSBhIHRhc2sgd2l0aCB0aGF0IG5hbWUnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGFza09iai50aXRsZSA9IHRhc2tOYW1lO1xuICAgICAgICB0YXNrT2JqLmRlc2NyaXB0aW9uID0gdGFza0Rlc2NyaXB0aW9uO1xuICAgICAgICB0YXNrT2JqLmR1ZURhdGUgPSB0YXNrRHVlRGF0ZTtcbiAgICAgICAgdGFza09iai5wcmlvcml0eSA9IHRhc2tQcmlvcml0eTtcbiAgICAgICAgdXBkYXRlVGFza0luQWxsVGFza3ModGFza09iaik7XG4gICAgICAgIHNhdmVQcm9qZWN0cygpO1xuXG4gICAgICAgIGFkZFRhc2tGb3JtLmVkaXRpbmdUYXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1uYW1lJykudGV4dENvbnRlbnQgPVxuICAgICAgICAgIHRhc2tOYW1lO1xuICAgICAgICBhZGRUYXNrRm9ybS5lZGl0aW5nVGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAnLnRhc2stZHVlLWRhdGUnXG4gICAgICAgICkudGV4dENvbnRlbnQgPSB0YXNrRHVlRGF0ZVxuICAgICAgICAgID8gYER1ZSBkYXRlOiAke3Rhc2tEdWVEYXRlfWBcbiAgICAgICAgICA6ICdObyBkdWUgZGF0ZSc7XG4gICAgICAgIGFkZFRhc2tGb3JtLmVkaXRpbmdUYXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICcuY2hhbmdlUHJpb3JpdHlCdXRvbidcbiAgICAgICAgKS52YWx1ZSA9IHRhc2tQcmlvcml0eTtcbiAgICAgICAgYWRkVGFza0Zvcm0uZWRpdGluZ1Rhc2tFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgICAgICAgJ2hpZ2gnLFxuICAgICAgICAgICdtZWRpdW0nLFxuICAgICAgICAgICdsb3cnXG4gICAgICAgICk7XG4gICAgICAgIGFkZFRhc2tGb3JtLmVkaXRpbmdUYXNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRhc2tQcmlvcml0eSk7XG5cbiAgICAgICAgcmVzZXRUYXNrRm9ybShhZGRUYXNrRm9ybSk7XG4gICAgICAgIGFkZFRhc2tGb3JtLmVkaXRpbmcgPSBmYWxzZTtcbiAgICAgICAgZWRpdGluZ1Rhc2tFbGVtZW50ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBhZGRUYXNrRm9ybTtcbiAgfTtcbiAgY29uc3QgYWRkVGFza0Zvcm0gPSBjcmVhdGVBZGRUYXNrRm9ybSgpO1xuICB0YXNrQW5kQnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChhZGRUYXNrRm9ybSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tJbnB1dENvbnRyb2xzKGFkZFRhc2tGb3JtKSB7XG4gIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0YXNrTmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ0FkZCBhIHRhc2snO1xuICB0YXNrTmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgdGFza05hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0YXNrTmFtZUlucHV0Jyk7XG4gIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lSW5wdXQpO1xuXG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGFza0Rlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSAnQWRkIGEgZGVzY3JpcHRpb24nO1xuICB0YXNrRGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCd0YXNrRGVzY3JpcHRpb25JbnB1dCcpO1xuICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgY29uc3QgdGFza0RhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRhc2tEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgdGFza0RhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0YXNrRGF0ZUlucHV0Jyk7XG4gIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tEYXRlSW5wdXQpO1xuXG4gIGNvbnN0IHRhc2tQcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICB0YXNrUHJpb3JpdHlTZWxlY3QuaW5uZXJIVE1MID0gYFxuICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZCBoaWRkZW4+UHJpb3JpdHk6PC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIj5Mb3c8L29wdGlvbj5cbiAgYDtcblxuICB0YXNrUHJpb3JpdHlTZWxlY3QuY2xhc3NMaXN0LmFkZCgndGFza1ByaW9yaXR5U2VsZWN0b3InKTtcbiAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5U2VsZWN0KTtcblxuICBjb25zdCBidXR0b25zV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBidXR0b25zV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdidXR0b25zV3JhcHBlcicpO1xuICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChidXR0b25zV3JhcHBlcik7XG5cbiAgY29uc3QgY29uZmlybUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbmZpcm1JbnB1dC50ZXh0Q29udGVudCA9ICfinJMnO1xuICBjb25maXJtSW5wdXQuY2xhc3NMaXN0LmFkZCgnY29uZmlybUlucHV0QnRuJyk7XG4gIGNvbmZpcm1JbnB1dC50eXBlID0gJ3N1Ym1pdCc7XG4gIGJ1dHRvbnNXcmFwcGVyLmFwcGVuZENoaWxkKGNvbmZpcm1JbnB1dCk7XG5cbiAgY29uc3QgY2FuY2VsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2FuY2VsSW5wdXQudGV4dENvbnRlbnQgPSAnWCc7XG4gIGNhbmNlbElucHV0LmNsYXNzTGlzdC5hZGQoJ2NhbmNlbElucHV0QnRuJyk7XG4gIGNhbmNlbElucHV0LnR5cGUgPSAnYnV0dG9uJztcbiAgYnV0dG9uc1dyYXBwZXIuYXBwZW5kQ2hpbGQoY2FuY2VsSW5wdXQpO1xuXG4gIGNhbmNlbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRhc2tOYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9ICcnO1xuICAgIHJlc2V0VGFza0Zvcm0oYWRkVGFza0Zvcm0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzZXRUYXNrRm9ybShhZGRUYXNrRm9ybSkge1xuICBjb25zdCBhZGRUYXNrQnV0dG9uID0gYWRkVGFza0Zvcm0ucXVlcnlTZWxlY3RvcignLnRhc2tBZGRlckJ0bicpO1xuICBhZGRUYXNrQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgY29uc3QgYnV0dG9uc1dyYXBwZXIgPSBhZGRUYXNrRm9ybS5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uc1dyYXBwZXInKTtcbiAgaWYgKGJ1dHRvbnNXcmFwcGVyKSB7XG4gICAgYWRkVGFza0Zvcm0ucmVtb3ZlQ2hpbGQoYnV0dG9uc1dyYXBwZXIpO1xuICB9XG5cbiAgYWRkVGFza0Zvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGFkZFRhc2tGb3JtLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICB9KTtcblxuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1ByaW9yaXR5U2VsZWN0b3InKTtcbiAgYWRkVGFza0Zvcm0ucmVtb3ZlQ2hpbGQodGFza1ByaW9yaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRhc2sodGFzaywgY29udGFpbmVyLCB0YXNrRHVlRGF0ZVZhbHVlLCBwcm9qZWN0TmFtZSkge1xuICBjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICB0YXNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKCd0YXNrLW5hbWUnKTtcbiAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gIGNvbnN0IHRvRG9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudGFza0xpc3RDb250YWluZXInKS5hcHBlbmRDaGlsZCh0b0RvTGlzdCk7XG4gIHRvRG9MaXN0LmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcblxuICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdGFza0R1ZURhdGUuY2xhc3NMaXN0LmFkZCgndGFzay1kdWUtZGF0ZScpO1xuICBpZiAodGFza0R1ZURhdGVWYWx1ZSkge1xuICAgIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gYER1ZSBkYXRlOiAke3Rhc2suZHVlRGF0ZX1gO1xuICAgIGNvbnNvbGUubG9nKHRhc2tEdWVEYXRlVmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gJ05vIGR1ZSBkYXRlJztcbiAgfVxuICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG4gIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcblxuICBjb25zdCB0YXNrQ29tcGxldGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHRhc2tDb21wbGV0ZXIuY2xhc3NMaXN0LmFkZCgndGFza0NvbXBsZXRlcicpO1xuICB0YXNrQ29tcGxldGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICh0YXNrLmNvbXBsZXRlZCkge1xuICAgICAgdGFzay51bmNvbXBsZXRlVGFzaygpO1xuICAgICAgdGFza0NvbXBsZXRlci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgdGFza0NvbXBsZXRlci5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTtcbiAgICAgIHRhc2tDb21wbGV0ZXIuY2xhc3NMaXN0LmFkZCgndW5jb21wbGV0ZWQnKTtcbiAgICAgIHRhc2tFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZFRhc2snKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFzay5jb21wbGV0ZVRhc2soKTtcbiAgICAgIHRhc2tDb21wbGV0ZXIudGV4dENvbnRlbnQgPSAn4pyTJztcbiAgICAgIHRhc2tDb21wbGV0ZXIuY2xhc3NMaXN0LnJlbW92ZSgndW5jb21wbGV0ZWQnKTtcbiAgICAgIHRhc2tDb21wbGV0ZXIuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG4gICAgICB0YXNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWRUYXNrJyk7XG4gICAgfVxuICB9KTtcbiAgaWYgKHRhc2suY29tcGxldGVkKSB7XG4gICAgdGFza0NvbXBsZXRlci50ZXh0Q29udGVudCA9ICfinJMnO1xuICAgIHRhc2tDb21wbGV0ZXIuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG4gICAgdGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkVGFzaycpO1xuICB9IGVsc2Uge1xuICAgIHRhc2tDb21wbGV0ZXIuY2xhc3NMaXN0LmFkZCgndW5jb21wbGV0ZWQnKTtcbiAgfVxuXG4gIGNvbnN0IGNoYW5nZVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGNoYW5nZVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2NoYW5nZVByaW9yaXR5QnV0b24nKTtcbiAgY2hhbmdlUHJpb3JpdHkuaW5uZXJIVE1MID0gYCBcbiAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkIGhpZGRlbj5Qcmlvcml0eTo8L29wdGlvbj5cbiAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9vcHRpb24+XG4gIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cbiAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPic7YDtcbiAgY2hhbmdlUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGNvbnN0IG9sZFAgPSB0YXNrLnByaW9yaXR5O1xuICAgIHRhc2suY2hhbmdlUHJpb3JpdHkoY2hhbmdlUHJpb3JpdHkudmFsdWUpO1xuICAgIHRhc2tFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUob2xkUCk7XG4gICAgY29uc3QgbmV3UCA9IHRhc2sucHJpb3JpdHk7XG4gICAgdGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZChuZXdQKTtcbiAgfSk7XG5cbiAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2hhbmdlUHJpb3JpdHkpO1xuXG4gIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0VGFza0J0bicpO1xuICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza05hbWVJbnB1dCcpKSB7XG4gICAgICByZXR1cm47IC8vIHByZXZlbnQgbXVsdGlwbGUgZWRpdHMgYW5kIGVkaXRpbmcgd2hpbGUgYSB0YXNrIGlzIGJlaW5nIGFkZGVkXG4gICAgfVxuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tBZGRlckZvcm0nKTtcbiAgICBjcmVhdGVUYXNrSW5wdXRDb250cm9scyhhZGRUYXNrRm9ybSk7XG4gICAgcG9wdWxhdGVGb3JtKGFkZFRhc2tGb3JtLCB0YXNrKTtcbiAgICBhZGRUYXNrRm9ybS5lZGl0aW5nID0gdHJ1ZTtcbiAgICBhZGRUYXNrRm9ybS5lZGl0aW5nVGFza0VsZW1lbnQgPSB0YXNrRWxlbWVudDtcbiAgfSk7XG5cbiAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza0NvbXBsZXRlcik7XG4gIGlmICh0YXNrLnByaW9yaXR5KSB7XG4gICAgY29uc3QgdGFza1AgPSB0YXNrLnByaW9yaXR5O1xuICAgIHRhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQodGFza1ApO1xuICB9XG5cbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHRhc2tEZXNjcmlwdGlvbkJ1dHRvbi50ZXh0Q29udGVudCA9ICctIEV4cGFuZCB0YXNrJztcbiAgdGFza0Rlc2NyaXB0aW9uQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2tEZXNjcmlwdGlvbkJ0bicpO1xuICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25CdXR0b24pO1xuXG4gIGxldCBkZXNjcmlwdGlvbkFkZGVkID0gZmFsc2U7XG5cbiAgY29uc3QgdGFza0V4cGFuZGVyID0gKCkgPT4ge1xuICAgIHRhc2tEZXNjcmlwdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICghZGVzY3JpcHRpb25BZGRlZCkge1xuICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi5pbm5lclRleHQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgICAgICB0YXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzYycpO1xuICAgICAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuICAgICAgICBkZXNjcmlwdGlvbkFkZGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjJyk7XG4gICAgICAgIHRhc2tFbGVtZW50LnJlbW92ZUNoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG4gICAgICAgIGRlc2NyaXB0aW9uQWRkZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB0YXNrRXhwYW5kZXIoKTtcbiAgY29uc3QgZGVsZXRlVGFzayA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrRGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFza0RlbGV0ZUJ0bi5pbm5lclRleHQgPSAnWCc7XG4gICAgdGFza0RlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCd0YXNrRGVsZXRlQnRuJyk7XG4gICAgdGFza0RlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHJlbW92ZVRhc2tGcm9tUHJvamVjdChwcm9qZWN0TmFtZSwgdGFzayk7XG4gICAgICB0YXNrRWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRhc2tFbGVtZW50KTtcbiAgICB9KTtcbiAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlQnRuKTtcbiAgfTtcblxuICBkZWxldGVUYXNrKCk7XG5cbiAgZnVuY3Rpb24gcG9wdWxhdGVGb3JtKGZvcm0sIHRhc2spIHtcbiAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy50YXNrTmFtZUlucHV0JykudmFsdWUgPSB0YXNrLnRpdGxlO1xuICAgIGZvcm0ucXVlcnlTZWxlY3RvcignLnRhc2tEZXNjcmlwdGlvbklucHV0JykudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIGZvcm0ucXVlcnlTZWxlY3RvcignLnRhc2tEYXRlSW5wdXQnKS52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcbiAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy50YXNrUHJpb3JpdHlTZWxlY3RvcicpLnZhbHVlID0gdGFzay5wcmlvcml0eTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2F2ZVRvTG9jYWxTdG9yYWdlKGtleSwgaXRlbSkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGl0ZW0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KSB7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG59XG4iLCJpbXBvcnQgY3JlYXRlUGFnZUxheW91dCBmcm9tICcuL3BhZ2VMYXlvdXRET00nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQYWdlRE9NKCkge1xuICBjcmVhdGVQYWdlTGF5b3V0KCk7XG59XG4iLCJpbXBvcnQgeyByZW1vdmVGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9kYXRhJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRhc2tJbkFsbFRhc2tzKHVwZGF0ZWRUYXNrKSB7XG4gIGNvbnN0IGFsbFRhc2tzUHJvamVjdCA9IHByb2plY3RzLmZpbmQocCA9PiBwLm5hbWUgPT09ICdBbGwgdGFza3MnKTtcbiAgY29uc3QgdGFza0luZGV4ID0gYWxsVGFza3NQcm9qZWN0LnRhc2tzLmZpbmRJbmRleChcbiAgICB0ID0+IHQuaWQgPT09IHVwZGF0ZWRUYXNrLmlkXG4gICk7XG5cbiAgaWYgKHRhc2tJbmRleCAhPT0gLTEpIHtcbiAgICBhbGxUYXNrc1Byb2plY3QudGFza3NbdGFza0luZGV4XSA9IHVwZGF0ZWRUYXNrO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUYXNrQ3JlYXRvcihcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBkdWVEYXRlLFxuICBwcmlvcml0eSxcbiAgcHJvamVjdE5hbWUsXG4gIGlkLFxuICBjb21wbGV0ZWQsXG4gIHNraXBBZGRpbmcgPSBmYWxzZVxuKSB7XG4gIGNvbnN0IHRhc2sgPSB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eTogcHJpb3JpdHkgfHwgJ2xvdycsXG4gICAgY29tcGxldGVkOiBjb21wbGV0ZWQgfHwgZmFsc2UsXG4gICAgaWQ6IGlkIHx8IG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKCksXG5cbiAgICBjb21wbGV0ZVRhc2soKSB7XG4gICAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICB1cGRhdGVUYXNrSW5BbGxUYXNrcyh0aGlzKTtcbiAgICAgIHNhdmVQcm9qZWN0cygpO1xuICAgIH0sXG5cbiAgICB1bmNvbXBsZXRlVGFzaygpIHtcbiAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgICB1cGRhdGVUYXNrSW5BbGxUYXNrcyh0aGlzKTtcbiAgICAgIHNhdmVQcm9qZWN0cygpO1xuICAgIH0sXG5cbiAgICBjaGFuZ2VQcmlvcml0eShuZXdQcmlvcml0eSkge1xuICAgICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgICAgdXBkYXRlVGFza0luQWxsVGFza3ModGhpcyk7XG4gICAgICBzYXZlUHJvamVjdHMoKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlVGFzayhuZXdUaXRsZSwgbmV3RGVzY3JpcHRpb24sIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5KSB7XG4gICAgICB0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgICB0aGlzLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgICAgdXBkYXRlVGFza0luQWxsVGFza3ModGhpcyk7XG4gICAgICBzYXZlUHJvamVjdHMoKTtcbiAgICB9LFxuICB9O1xuXG4gIGlmICghc2tpcEFkZGluZykge1xuICAgIGFkZFRhc2tUb1Byb2plY3QocHJvamVjdE5hbWUgfHwgJ0FsbCB0YXNrcycsIHRhc2spO1xuICB9XG4gIHJldHVybiB0YXNrO1xufVxuXG5jb25zdCBkZWZhdWx0UHJvamVjdHMgPSBbXG4gIHsgbmFtZTogJ0hvbWUnLCB0YXNrczogW10gfSxcbiAgeyBuYW1lOiAnSW1wb3J0YW50JywgdGFza3M6IFtdIH0sXG4gIHsgbmFtZTogJ0FsbCB0YXNrcycsIHRhc2tzOiBbXSB9LFxuXTtcblxuY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKTtcblxuZnVuY3Rpb24gcmVjcmVhdGVUYXNrcygpIHtcbiAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICBwcm9qZWN0LnRhc2tzID0gcHJvamVjdC50YXNrcy5tYXAodGFzayA9PlxuICAgICAgVGFza0NyZWF0b3IoXG4gICAgICAgIHRhc2sudGl0bGUsIC8vIFBhc3MgdGhlIHVwZGF0ZWQgdGl0bGVcbiAgICAgICAgdGFzay5kZXNjcmlwdGlvbixcbiAgICAgICAgdGFzay5kdWVEYXRlLFxuICAgICAgICB0YXNrLnByaW9yaXR5LFxuICAgICAgICBwcm9qZWN0Lm5hbWUsXG4gICAgICAgIHRhc2suaWQsXG4gICAgICAgIHRhc2suY29tcGxldGVkLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9XG4gIHN0b3JlZFByb2plY3RzICYmIHN0b3JlZFByb2plY3RzICE9PSAndW5kZWZpbmVkJ1xuICAgID8gSlNPTi5wYXJzZShzdG9yZWRQcm9qZWN0cylcbiAgICA6IGRlZmF1bHRQcm9qZWN0cztcblxuaWYgKHN0b3JlZFByb2plY3RzICYmIHN0b3JlZFByb2plY3RzICE9PSAndW5kZWZpbmVkJykge1xuICByZWNyZWF0ZVRhc2tzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlUHJvamVjdHMoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IHsgbmFtZSwgdGFza3M6IFtdIH07XG4gIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gIHNhdmVQcm9qZWN0cygpO1xuXG4gIHJldHVybiBuZXdQcm9qZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZVRvRGVsZXRlKSB7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChwID0+IHAubmFtZSA9PT0gcHJvamVjdE5hbWVUb0RlbGV0ZSk7XG4gIGlmIChwcm9qZWN0SW5kZXggIT09IC0xICYmIHByb2plY3ROYW1lVG9EZWxldGUgIT09ICdBbGwgdGFza3MnKSB7XG4gICAgY29uc3QgZGVsZXRlZFByb2plY3QgPSBwcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKVswXTtcblxuICAgIC8vIFJlbW92ZSB0aGUgdGFza3MgZnJvbSB0aGUgZGVsZXRlZCBwcm9qZWN0IGluIHRoZSAnQWxsIFRhc2tzJyBwcm9qZWN0XG4gICAgY29uc3QgYWxsVGFza3NQcm9qZWN0ID0gcHJvamVjdHMuZmluZChwID0+IHAubmFtZSA9PT0gJ0FsbCB0YXNrcycpO1xuICAgIGRlbGV0ZWRQcm9qZWN0LnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICBjb25zdCB0YXNrSW5kZXggPSBhbGxUYXNrc1Byb2plY3QudGFza3MuZmluZEluZGV4KHQgPT4gdC5pZCA9PT0gdGFzay5pZCk7XG4gICAgICBpZiAodGFza0luZGV4ICE9PSAtMSkge1xuICAgICAgICBhbGxUYXNrc1Byb2plY3QudGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgICB9XG4gICAgICByZW1vdmVGcm9tTG9jYWxTdG9yYWdlKHRhc2suaWQpOyAvLyBSZW1vdmUgdGhlIHRhc2sgZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgfSk7XG5cbiAgICBzYXZlUHJvamVjdHMoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGFza1RvUHJvamVjdChwcm9qZWN0TmFtZSwgdGFzaykge1xuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZChwID0+IHAubmFtZSA9PT0gcHJvamVjdE5hbWUpO1xuICBjb25zdCBhbGxUYXNrc1Byb2plY3QgPSBwcm9qZWN0cy5maW5kKHAgPT4gcC5uYW1lID09PSAnQWxsIHRhc2tzJyk7XG5cbiAgaWYgKHByb2plY3QgJiYgcHJvamVjdC5uYW1lICE9PSAnQWxsIHRhc2tzJykge1xuICAgIHByb2plY3QudGFza3MucHVzaCh0YXNrKTtcbiAgICBpZiAoIWFsbFRhc2tzUHJvamVjdC50YXNrcy5pbmNsdWRlcyh0YXNrKSkge1xuICAgICAgYWxsVGFza3NQcm9qZWN0LnRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHByb2plY3QgJiYgcHJvamVjdC5uYW1lID09PSAnQWxsIHRhc2tzJykge1xuICAgIGlmICghYWxsVGFza3NQcm9qZWN0LnRhc2tzLmluY2x1ZGVzKHRhc2spKSB7XG4gICAgICBhbGxUYXNrc1Byb2plY3QudGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdHNbMF0udGFza3MucHVzaCh0YXNrKTtcbiAgfVxuICBzYXZlUHJvamVjdHMoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUYXNrRnJvbVByb2plY3QocHJvamVjdE5hbWUsIHRhc2spIHtcbiAgY29uc29sZS5sb2coJ1JlbW92aW5nIHRhc2sgZnJvbSBwcm9qZWN0OicsIHByb2plY3ROYW1lKTtcbiAgY29uc29sZS5sb2coJ1Rhc2sgdG8gcmVtb3ZlOicsIHRhc2spO1xuXG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKHAgPT4gcC5uYW1lID09PSBwcm9qZWN0TmFtZSk7XG4gIGNvbnNvbGUubG9nKCdGb3VuZCBwcm9qZWN0OicsIHByb2plY3QpO1xuXG4gIGlmIChwcm9qZWN0KSB7XG4gICAgY29uc3QgdGFza0luZGV4ID0gcHJvamVjdC50YXNrcy5maW5kSW5kZXgodCA9PiB0LmlkID09PSB0YXNrLmlkKTtcbiAgICBjb25zb2xlLmxvZygnVGFzayBpbmRleDonLCB0YXNrSW5kZXgpO1xuXG4gICAgaWYgKHRhc2tJbmRleCAhPT0gLTEpIHtcbiAgICAgIHByb2plY3QudGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgICBjb25zb2xlLmxvZygnVGFzayByZW1vdmVkIGZyb20gcHJvamVjdCcsIHByb2plY3QpO1xuICAgICAgc2F2ZVByb2plY3RzKCk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIHRoZSB0YXNrIGZyb20gdGhlICdBbGwgVGFza3MnIHByb2plY3QgYXMgd2VsbFxuICAgIGlmIChwcm9qZWN0TmFtZSAhPT0gJ0FsbCB0YXNrcycpIHtcbiAgICAgIGNvbnN0IGFsbFRhc2tzUHJvamVjdCA9IHByb2plY3RzLmZpbmQocCA9PiBwLm5hbWUgPT09ICdBbGwgdGFza3MnKTtcbiAgICAgIGNvbnN0IGFsbFRhc2tzSW5kZXggPSBhbGxUYXNrc1Byb2plY3QudGFza3MuZmluZEluZGV4KFxuICAgICAgICB0ID0+IHQuaWQgPT09IHRhc2suaWRcbiAgICAgICk7XG4gICAgICBpZiAoYWxsVGFza3NJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgYWxsVGFza3NQcm9qZWN0LnRhc2tzLnNwbGljZShhbGxUYXNrc0luZGV4LCAxKTtcbiAgICAgICAgc2F2ZVByb2plY3RzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgcHJvamVjdEJ1dHRvbkNyZWF0b3IgZnJvbSAnLi9wcm9qZWN0QnV0dG9uQ3JlYXRvcic7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4vbG9naWNIYW5kbGVyJztcbmltcG9ydCBjcmVhdGVQcm9qZWN0QWRkZXIgZnJvbSAnLi9hZGRQcm9qZWN0QnV0dG9uJztcbmltcG9ydCBjcmVhdGVBZGRUYXNrQnV0dG9uIGZyb20gJy4vY3JlYXRlQWRkVGFza0J1dHRvbic7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWFkZXJDb250YWluZXInKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXJDb250YWluZXIpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgaGVhZGVyLmlubmVyVGV4dCA9ICdUb2RvIExpc3QnO1xuICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcblxuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNDb250YWluZXInKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcblxuICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrc0NvbnRhaW5lcicpO1xuICBtYWluLmFwcGVuZENoaWxkKHRhc2tzQ29udGFpbmVyKTtcblxuICBjcmVhdGVQcm9qZWN0QWRkZXIocHJvamVjdENvbnRhaW5lciwgdGFza3NDb250YWluZXIpO1xuXG4gIHByb2plY3RCdXR0b25DcmVhdG9yKFxuICAgIHByb2plY3RzLFxuICAgIHByb2plY3RDb250YWluZXIsXG4gICAgdGFza3NDb250YWluZXIsXG4gICAgY3JlYXRlQWRkVGFza0J1dHRvblxuICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyQ29udGFpbmVyJyk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGFpbmVyKTtcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUGFnZUxheW91dCgpIHtcbiAgY3JlYXRlSGVhZGVyKCk7XG4gIGNyZWF0ZU1haW4oKTtcbiAgY3JlYXRlRm9vdGVyKCk7XG59XG4iLCJpbXBvcnQgY3JlYXRlQWRkVGFza0J1dHRvbiwgeyByZW5kZXJUYXNrIH0gZnJvbSAnLi9jcmVhdGVBZGRUYXNrQnV0dG9uJztcbmltcG9ydCB7IGRlbGV0ZVByb2plY3QgfSBmcm9tICcuL2xvZ2ljSGFuZGxlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0QnV0dG9uKHByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RCdXR0b24nKTtcblxuICByZXR1cm4gcHJvamVjdEJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrc0NvbnRhaW5lcih0YXNrc0NvbnRhaW5lcikge1xuICB0YXNrc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFRhc2tzKHByb2plY3QsIHRhc2tzQ29udGFpbmVyKSB7XG4gIGNvbnN0IHRhc2tMaXN0Q29udGFpbmVyID0gdGFza3NDb250YWluZXIucXVlcnlTZWxlY3RvcignLnRhc2tMaXN0Q29udGFpbmVyJyk7XG4gIHByb2plY3QudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICByZW5kZXJUYXNrKHRhc2ssIHRhc2tzQ29udGFpbmVyLCB0YXNrLmR1ZURhdGUsIHByb2plY3QubmFtZSk7XG4gIH0pO1xufVxuXG5jb25zdCBhcHBlbmRBUHJvamVjdE5hbWUgPSAocHJvamVjdCwgdGFza3NDb250YWluZXIpID0+IHtcbiAgY29uc3QgcHJvamVjdE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdE5hbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdE5hbWVDb250YWluZXInKTtcblxuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3ROYW1lJyk7XG4gIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG5cbiAgdGFza3NDb250YWluZXIuaW5zZXJ0QmVmb3JlKHByb2plY3ROYW1lQ29udGFpbmVyLCB0YXNrc0NvbnRhaW5lci5maXJzdENoaWxkKTtcbn07XG5cbmZ1bmN0aW9uIHNldHVwUHJvamVjdEJ1dHRvbkV2ZW50TGlzdGVuZXIoXG4gIHByb2plY3RCdXR0b24sXG4gIHByb2plY3QsXG4gIHRhc2tzQ29udGFpbmVyXG4pIHtcbiAgcHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhclRhc2tzQ29udGFpbmVyKHRhc2tzQ29udGFpbmVyKTtcbiAgICBjcmVhdGVBZGRUYXNrQnV0dG9uKHByb2plY3QsIHRhc2tzQ29udGFpbmVyKTtcbiAgICBhcHBlbmRBUHJvamVjdE5hbWUocHJvamVjdCwgdGFza3NDb250YWluZXIpO1xuICAgIHJlbmRlclByb2plY3RUYXNrcyhwcm9qZWN0LCB0YXNrc0NvbnRhaW5lcik7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0QnV0dG9uQ3JlYXRvcihcbiAgcHJvamVjdHMsXG4gIHByb2plY3RDb250YWluZXIsXG4gIHRhc2tzQ29udGFpbmVyXG4pIHtcbiAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICBjb25zdCBwcm9qZWN0QnV0dG9uID0gY3JlYXRlUHJvamVjdEJ1dHRvbihwcm9qZWN0KTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RCdXR0b24pO1xuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24uaW5uZXJUZXh0ID0gJ1gnO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAocHJvamVjdC5uYW1lICE9PSAnQWxsIHRhc2tzJykge1xuICAgICAgICBkZWxldGVQcm9qZWN0KHByb2plY3QubmFtZSk7XG4gICAgICAgIHByb2plY3RDb250YWluZXIucmVtb3ZlQ2hpbGQocHJvamVjdEJ1dHRvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydCgnQ2Fubm90IGRlbGV0ZSB0aGlzIHByb2plY3QhJyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcHJvamVjdEJ1dHRvbi5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnV0dG9uKTtcblxuICAgIHNldHVwUHJvamVjdEJ1dHRvbkV2ZW50TGlzdGVuZXIocHJvamVjdEJ1dHRvbiwgcHJvamVjdCwgdGFza3NDb250YWluZXIpO1xuICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge1xuICBjcmVhdGVQcm9qZWN0LFxuICBwcm9qZWN0cyxcbiAgYWRkVGFza1RvUHJvamVjdCxcbiAgZGVsZXRlUHJvamVjdCxcbiAgcmVtb3ZlVGFza0Zyb21Qcm9qZWN0LFxuICBUYXNrQ3JlYXRvcixcbn0gZnJvbSAnLi9sb2dpY0hhbmRsZXInO1xuXG5pbXBvcnQgY3JlYXRlUGFnZUxheW91dCBmcm9tICcuL2RvbUhhbmRsZXInO1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY3JlYXRlUGFnZUxheW91dCgpO1xuXG53aW5kb3cuY3JlYXRlUHJvamVjdCA9IGNyZWF0ZVByb2plY3Q7XG53aW5kb3cucHJvamVjdHMgPSBwcm9qZWN0cztcbndpbmRvdy5UYXNrQ3JlYXRvciA9IFRhc2tDcmVhdG9yO1xud2luZG93LmFkZFRhc2tUb1Byb2plY3QgPSBhZGRUYXNrVG9Qcm9qZWN0O1xud2luZG93LmRlbGV0ZVByb2plY3QgPSBkZWxldGVQcm9qZWN0O1xud2luZG93LnJlbW92ZVRhc2tGcm9tUHJvamVjdCA9IHJlbW92ZVRhc2tGcm9tUHJvamVjdDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==