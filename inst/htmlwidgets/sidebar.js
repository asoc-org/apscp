/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./srcjs/exts/sidebar/css/style.css"
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./srcjs/exts/sidebar/css/style.css ***!
  \********************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.mapsidebar {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  z-index: 2000;
  transition: width 500ms;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.65);
  background-color: #fff;
}
.mapsidebar.collapsed {
  width: 40px;
}

.mapsidebar-left {
  left: 0;
}
.mapsidebar-right {
  right: 0;
}

.mapsidebar-tabs {
  top: 0;
  bottom: 0;
  height: inherit;
  background-color: #fff;
}
.mapsidebar-left .mapsidebar-tabs {
  left: 0;
}
.mapsidebar-right .mapsidebar-tabs {
  right: 0;
}
.mapsidebar-tabs,
.mapsidebar-tabs > ul {
  position: absolute;
  width: 40px;
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.mapsidebar-tabs > li,
.mapsidebar-tabs > ul > li {
  width: 100%;
  height: 40px;
  color: #333;
    font-size: 12pt;
  overflow: hidden;
  transition: all 80ms;
}
.mapsidebar-tabs > li:hover,
.mapsidebar-tabs > ul > li:hover {
  color: #000;
    background-color: #eee;
}
.mapsidebar-tabs > li.active,
.mapsidebar-tabs > ul > li.active {
  color: #fff;
    background-color: #0074d9;
}
.mapsidebar-tabs > li.disabled,
.mapsidebar-tabs > ul > li.disabled {
  color: rgba(51, 51, 51, 0.4);
}
.mapsidebar-tabs > li.disabled:hover,
.mapsidebar-tabs > ul > li.disabled:hover {
  background: transparent;
}
.mapsidebar-tabs > li.disabled > a,
.mapsidebar-tabs > ul > li.disabled > a {
  cursor: default;
}
.mapsidebar-tabs > li > a,
.mapsidebar-tabs > ul > li > a {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 40px;
  color: inherit;
  text-decoration: none;
  text-align: center;
}
.mapsidebar-tabs > ul + ul {
  bottom: 0;
}

.mapsidebar-content {
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.95);
  overflow-x: hidden;
}
.mapsidebar-left .mapsidebar-content {
  left: 40px;
  right: 0;
}
.mapsidebar-right .mapsidebar-content {
  left: 0;
  right: 40px;
}
.mapsidebar.collapsed > .mapsidebar-content {
  overflow-y: hidden;
}

.mapsidebar-pane {
  display: none;
  left: 0;
  right: 0;
  box-sizing: border-box;
  padding: 10px 1px 10px 10px;
  height: 100%;
}

.mapsidebar-pane.active {
  display: block;
}

.mapsidebar-pane-header {
  margin: -10px -20px 0;
  height: 40px;
  padding: 0 20px;
  line-height: 40px;
  font-size: 14.4pt;
  color: #fff;
  background-color: #0074d9;
}
.mapsidebar-right .mapsidebar-pane-header-icon {
  padding-left: 50px;
}

.mapsidebar-pane-content {
  padding-right: 10px;
  height: calc(100% - 20px);
  overflow-y: auto;
}

.mapsidebar-close {
  position: absolute;
  top: 0;
  width: 40px;
  height: 40px;
  text-align: center;
  cursor: pointer;
}
.mapsidebar-left .mapsidebar-close {
  right: 0;
}
.mapsidebar-right .mapsidebar-close {
  left: 0;
}

.sidebar-map .map-left {
  left: 40px !important;
}

.sidebar-map .map-right {
  right: 40px !important;
}

.mapsidebar.map-touch {
  box-shadow: none;
}

@media (min-width: 768px) and (max-width: 991px) {
  .mapsidebar {
    width: 305px;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .mapsidebar {
    width: 390px;
  }
}
@media (min-width: 1200px) {
  .mapsidebar {
    width: 460px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .mapsidebar-pane {
    min-width: 265px;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .mapsidebar-pane {
    min-width: 350px;
  }
}
@media (min-width: 1200px) {
  .mapsidebar-pane {
    min-width: 420px;
  }
}

@media (min-width: 768px) {
  .mapsidebar {
    border-radius: 4px;
  }
  .mapsidebar.map-touch {
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  .sidebar-map .mapbox-ctrl .map-left {
    transition: left 500ms;
  }
  .sidebar-map .mapbox-ctrl .map-right {
    transition: right 500ms;
  }

  .sidebar-map .map-left.extended {
    left: 460px;
  }
  .sidebar-map .map-right.extended {
    right: 460px;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .sidebar-map .map-left.extended {
    left: 305px;
  }
  .sidebar-map .map-right.extended {
    right: 305px;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .sidebar-map .map-left.extended {
    left: 390px;
  }
  .sidebar-map .map-right.extended {
    right: 390px;
  }
}
@media (min-width: 1200px) {
  .sidebar-map .map-left.extended {
    left: 460px;
  }
  .sidebar-map .map-right.extended {
    right: 460px;
  }
}
`, "",{"version":3,"sources":["webpack://./srcjs/exts/sidebar/css/style.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,yCAAyC;EACzC,sBAAsB;AACxB;AACA;EACE,WAAW;AACb;;AAEA;EACE,OAAO;AACT;AACA;EACE,QAAQ;AACV;;AAEA;EACE,MAAM;EACN,SAAS;EACT,eAAe;EACf,sBAAsB;AACxB;AACA;EACE,OAAO;AACT;AACA;EACE,QAAQ;AACV;AACA;;EAEE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,UAAU;EACV,qBAAqB;AACvB;AACA;;EAEE,WAAW;EACX,YAAY;EACZ,WAAW;IACT,eAAe;EACjB,gBAAgB;EAChB,oBAAoB;AACtB;AACA;;EAEE,WAAW;IACT,sBAAsB;AAC1B;AACA;;EAEE,WAAW;IACT,yBAAyB;AAC7B;AACA;;EAEE,4BAA4B;AAC9B;AACA;;EAEE,uBAAuB;AACzB;AACA;;EAEE,eAAe;AACjB;AACA;;EAEE,cAAc;EACd,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,cAAc;EACd,qBAAqB;EACrB,kBAAkB;AACpB;AACA;EACE,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,2CAA2C;EAC3C,kBAAkB;AACpB;AACA;EACE,UAAU;EACV,QAAQ;AACV;AACA;EACE,OAAO;EACP,WAAW;AACb;AACA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,OAAO;EACP,QAAQ;EACR,sBAAsB;EACtB,2BAA2B;EAC3B,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,iBAAiB;EACjB,WAAW;EACX,yBAAyB;AAC3B;AACA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,QAAQ;AACV;AACA;EACE,OAAO;AACT;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE;IACE,YAAY;EACd;AACF;AACA;EACE;IACE,YAAY;EACd;AACF;AACA;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,gBAAgB;EAClB;AACF;AACA;EACE;IACE,gBAAgB;EAClB;AACF;AACA;EACE;IACE,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,kBAAkB;EACpB;EACA;IACE,oCAAoC;EACtC;;EAEA;IACE,sBAAsB;EACxB;EACA;IACE,uBAAuB;EACzB;;EAEA;IACE,WAAW;EACb;EACA;IACE,YAAY;EACd;AACF;AACA;EACE;IACE,WAAW;EACb;EACA;IACE,YAAY;EACd;AACF;AACA;EACE;IACE,WAAW;EACb;EACA;IACE,YAAY;EACd;AACF;AACA;EACE;IACE,WAAW;EACb;EACA;IACE,YAAY;EACd;AACF","sourcesContent":[".mapsidebar {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  overflow: hidden;\n  z-index: 2000;\n  transition: width 500ms;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n}\n.mapsidebar.collapsed {\n  width: 40px;\n}\n\n.mapsidebar-left {\n  left: 0;\n}\n.mapsidebar-right {\n  right: 0;\n}\n\n.mapsidebar-tabs {\n  top: 0;\n  bottom: 0;\n  height: inherit;\n  background-color: #fff;\n}\n.mapsidebar-left .mapsidebar-tabs {\n  left: 0;\n}\n.mapsidebar-right .mapsidebar-tabs {\n  right: 0;\n}\n.mapsidebar-tabs,\n.mapsidebar-tabs > ul {\n  position: absolute;\n  width: 40px;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n.mapsidebar-tabs > li,\n.mapsidebar-tabs > ul > li {\n  width: 100%;\n  height: 40px;\n  color: #333;\n    font-size: 12pt;\n  overflow: hidden;\n  transition: all 80ms;\n}\n.mapsidebar-tabs > li:hover,\n.mapsidebar-tabs > ul > li:hover {\n  color: #000;\n    background-color: #eee;\n}\n.mapsidebar-tabs > li.active,\n.mapsidebar-tabs > ul > li.active {\n  color: #fff;\n    background-color: #0074d9;\n}\n.mapsidebar-tabs > li.disabled,\n.mapsidebar-tabs > ul > li.disabled {\n  color: rgba(51, 51, 51, 0.4);\n}\n.mapsidebar-tabs > li.disabled:hover,\n.mapsidebar-tabs > ul > li.disabled:hover {\n  background: transparent;\n}\n.mapsidebar-tabs > li.disabled > a,\n.mapsidebar-tabs > ul > li.disabled > a {\n  cursor: default;\n}\n.mapsidebar-tabs > li > a,\n.mapsidebar-tabs > ul > li > a {\n  display: block;\n  width: 100%;\n  height: 100%;\n  line-height: 40px;\n  color: inherit;\n  text-decoration: none;\n  text-align: center;\n}\n.mapsidebar-tabs > ul + ul {\n  bottom: 0;\n}\n\n.mapsidebar-content {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.95);\n  overflow-x: hidden;\n}\n.mapsidebar-left .mapsidebar-content {\n  left: 40px;\n  right: 0;\n}\n.mapsidebar-right .mapsidebar-content {\n  left: 0;\n  right: 40px;\n}\n.mapsidebar.collapsed > .mapsidebar-content {\n  overflow-y: hidden;\n}\n\n.mapsidebar-pane {\n  display: none;\n  left: 0;\n  right: 0;\n  box-sizing: border-box;\n  padding: 10px 1px 10px 10px;\n  height: 100%;\n}\n\n.mapsidebar-pane.active {\n  display: block;\n}\n\n.mapsidebar-pane-header {\n  margin: -10px -20px 0;\n  height: 40px;\n  padding: 0 20px;\n  line-height: 40px;\n  font-size: 14.4pt;\n  color: #fff;\n  background-color: #0074d9;\n}\n.mapsidebar-right .mapsidebar-pane-header-icon {\n  padding-left: 50px;\n}\n\n.mapsidebar-pane-content {\n  padding-right: 10px;\n  height: calc(100% - 20px);\n  overflow-y: auto;\n}\n\n.mapsidebar-close {\n  position: absolute;\n  top: 0;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  cursor: pointer;\n}\n.mapsidebar-left .mapsidebar-close {\n  right: 0;\n}\n.mapsidebar-right .mapsidebar-close {\n  left: 0;\n}\n\n.sidebar-map .map-left {\n  left: 40px !important;\n}\n\n.sidebar-map .map-right {\n  right: 40px !important;\n}\n\n.mapsidebar.map-touch {\n  box-shadow: none;\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .mapsidebar {\n    width: 305px;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .mapsidebar {\n    width: 390px;\n  }\n}\n@media (min-width: 1200px) {\n  .mapsidebar {\n    width: 460px;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .mapsidebar-pane {\n    min-width: 265px;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .mapsidebar-pane {\n    min-width: 350px;\n  }\n}\n@media (min-width: 1200px) {\n  .mapsidebar-pane {\n    min-width: 420px;\n  }\n}\n\n@media (min-width: 768px) {\n  .mapsidebar {\n    border-radius: 4px;\n  }\n  .mapsidebar.map-touch {\n    border: 1px solid rgba(0, 0, 0, 0.2);\n  }\n\n  .sidebar-map .mapbox-ctrl .map-left {\n    transition: left 500ms;\n  }\n  .sidebar-map .mapbox-ctrl .map-right {\n    transition: right 500ms;\n  }\n\n  .sidebar-map .map-left.extended {\n    left: 460px;\n  }\n  .sidebar-map .map-right.extended {\n    right: 460px;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .sidebar-map .map-left.extended {\n    left: 305px;\n  }\n  .sidebar-map .map-right.extended {\n    right: 305px;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .sidebar-map .map-left.extended {\n    left: 390px;\n  }\n  .sidebar-map .map-right.extended {\n    right: 390px;\n  }\n}\n@media (min-width: 1200px) {\n  .sidebar-map .map-left.extended {\n    left: 460px;\n  }\n  .sidebar-map .map-right.extended {\n    right: 460px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {



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

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {



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

/***/ },

/***/ "./srcjs/exts/sidebar/css/style.css"
/*!******************************************!*\
  !*** ./srcjs/exts/sidebar/css/style.css ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./srcjs/exts/sidebar/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {



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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {



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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {



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

/***/ },

/***/ "./srcjs/exts/sidebar/class.js"
/*!*************************************!*\
  !*** ./srcjs/exts/sidebar/class.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapSidebar: () => (/* binding */ MapSidebar)
/* harmony export */ });
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./srcjs/exts/sidebar/css/style.css");


/** Class representing a map sidebar. */
class MapSidebar {

  // public fields
  id;
  options;

  // private fields
  _height = undefined;
  _map = undefined;
  _sidebar = undefined;
  _paneContainer = undefined;
  _tabs = undefined;
  _panes = undefined;
  _closeButtons = undefined;

  /**
   * Initialize a new sidebar object.
   * @param {string} id - HTML element identifier.
   * @param {string} height - Height for sidebar (e.g., `"400px"`).
   * @param {Object} options - Options for customizing the sidebar.
   * @param {string} options.position - Position for sidebar. Acceptable
   * values include `"top-left"` and `"top-right"`.
   * @return {void}
   */
  constructor(id, height, options) {
    // set fields
    this.id = id;
    this.options = options;
    this._height = height;
    this._sidebar = document.getElementById(id);

    // declare temporary variables
    var i, child;

    // add height to sidebar
    this._sidebar.style.height = height;

    // add sidebar left/right class
    this._sidebar.classList.add(
      "mapsidebar-" +
      (this.options.position.includes("left") ? "left" : "right")
    );

    // add map box control class
    this._sidebar.classList.add("mapboxgl-ctrl");

    // if needed, add touch styling
    if (
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      this._sidebar.classList.add("map-touch");
    }

    // find sidebar content
    for (i = this._sidebar.children.length - 1; i >= 0; i--) {
      child = this._sidebar.children[i];
      if (
        child.tagName == "DIV" &&
        child.classList.contains("mapsidebar-content")
      ) {
        this._paneContainer = child;
      }
    }

    // find tab items
    this._tabs = this._sidebar.querySelectorAll(
      "ul.mapsidebar-tabs > li, .mapsidebar-tabs > ul > li"
    );
    for (i = this._tabs.length - 1; i >= 0; i--) {
      this._tabs[i]._sidebar = this;
    }

    // find sidebar panes and close buttons
    this._panes = [];
    this._closeButtons = [];
    for (i = this._paneContainer.children.length - 1; i >= 0; i--) {
      child = this._paneContainer.children[i];
      if (
        child.tagName == "DIV" &&
        child.classList.contains("mapsidebar-pane")
      ) {
        this._panes.push(child);
        var close_buttons = child.querySelectorAll(".mapsidebar-close");
        for (var j = 0, len = close_buttons.length; j < len; j++)
          this._closeButtons.push(close_buttons[j]);
      }
    }

    // store JS object as field so API can access it
    this._sidebar.widget = this;
  }

  /**
   * Add and display a sidebar to a Mapboxgl map.
   * @param {Object} map - Mapboxgl Map object.
   * @return {Object} Sidebar object.
   */
  onAdd(map) {
    // declare temporary variables
    var i, child;

    // set map field
    this._map = map;

    // add css class sidebar-map to map
    if (!map._container.classList.contains("sidebar-map")) {
      map._container.classList.add("sidebar-map");
    }

    // if height is a percentage, then modify control position container
    if (this._height.endsWith("%")) {
      child = map._container.querySelector(
        ".mapboxgl-ctrl-" + this.options.position
      )
      if (child) {
        child.style.height = "calc(100% - 50px)";
      }
    }

    // add click events so that clicking on icons will open and close panes
    this._tabs.forEach((tab) => {
      let sub = tab.querySelector("a");
      if (
        sub.hasAttribute("href") &&
        sub.getAttribute("href").slice(0, 1) == "#"
      ) {
        sub.addEventListener("click", () => this._onClick.call(tab));
     }
   });

    // add click events so that clicking on close buttons will close panes
    this._closeButtons.forEach((button) => {
      button.addEventListener("click", () => this._onCloseClick());
    });

    // show sidebar and content
    setTimeout(function(){
      $(".mapsidebar.collapsed .mapsidebar-tabs, .mapsidebar.collapsed .mapsidebar-content, .mapsidebar.collapsed").css("display", "block");
    }, 400);

    // return object
    return this._sidebar;
  }

  /**
   * Remove sidebar from a Mapboxgl map.
   * @return {void}
   */
  onRemove() {
    this._sidebar.parentNode.removeChild(this._sidebar);
    this._map = undefined;
  }

  /**
   * Open sidebar pane.
   * @param {string} id - HTML identifier for sidebar pane.
   * @return {void}
   */
  open(id) {
    // declare temporary variables
    var i, child;

    // hide old active contents and show new content
    for (i = this._panes.length - 1; i >= 0; i--) {
      child = this._panes[i];
      if (child.id == id) {
        child.classList.add("active");
      } else {
        child.classList.remove("active");
      }
    }

    // remove old active highlights and set new highlight
    for (i = this._tabs.length - 1; i >= 0; i--) {
       child = this._tabs[i];
      if (child.querySelector("a").hash.slice(1) === id) {
        child.classList.add("active");
      } else {
        child.classList.remove("active");
      }
    }

    // if needed, open sidebar
    if (this._sidebar.classList.contains("collapsed")) {
      var pos = this._sidebar.classList.contains("mapsidebar-left") ?
        ".map-left" : ".map-right";
      document
        .querySelectorAll(pos)
        .forEach(e => {e.classList.add("extended")});
      this._sidebar.classList.remove("collapsed");
    }
  }

  /**
   * Close any sidebar panes that are open.
   * @return {void}
   */
  close() {
    // declare temporary variables
    var i, child;

    // remove old active highlights
    for (i = this._tabs.length - 1; i >= 0; i--) {
      this._tabs[i].classList.remove("active");
    }

    // if needed, close sidebar
    if (!this._sidebar.classList.contains("collapsed")) {
      var pos = this._sidebar.classList.contains("mapsidebar-left") ?
        ".map-left" : ".map-right";
      document
        .querySelectorAll(pos)
        .forEach(e => {e.classList.remove("extended")});
      this._sidebar.classList.add("collapsed");
    }
  }

  /**
   * Enable the menu button for opening a sidebar pane.
   * @param {string} id - HTML identifier for sidebar pane.
   * @return {void}
   */
  enable(id) {
    // declare temporary variables
    var i, child;

    // enable tab
    for (i = this._tabs.length - 1; i >= 0; i--) {
      child = this._tabs[i];
      if (child.querySelector("a").hash.slice(1) === id) {
        // found the desired tab, so enable it
        child.classList.remove("disabled");
        // since only one tab is being enabled, exit early
        break;
      }
    }
  }

  /**
   * Disable the menu button for opening a sidebar pane.
   * @param {string} id - HTML identifier for sidebar pane.
   * @return {void}
   */
  disable(id) {
    // declare temporary variables
    var i, child;

    // disable tab
    for (i = this._tabs.length - 1; i >= 0; i--) {
      child = this._tabs[i];
      if (child.querySelector("a").hash.slice(1) === id) {
        // found the desired tab, so then...
        // if tab is active, then close it
        if (child.classList.contains("active")) {
          this.close(id)
        }
        // disable the tab
        child.classList.add("disabled");
        // since only one tab is being disabled, exit early
        break;
      }
    }
  }

  /**
   * Define behavior for clicking a sidebar menu button.
   * @return {void}
   * @private
   */
  _onClick() {
    if (this.classList.contains("active")) {
      this._sidebar.close();
    } else if (!this.classList.contains("disabled")) {
      this._sidebar.open(this.querySelector("a").hash.slice(1));
    }
  }

  /**
   * Define behavior for clicking a sidebar close button.
   * @return {void}
   * @private
   */
  _onCloseClick() {
    this.close();
  }

}


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		let threw = true;
/******/ 		try {
/******/ 			if (!(moduleId in __webpack_modules__)) {
/******/ 				delete __webpack_module_cache__[moduleId];
/******/ 				const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 				e.code = 'MODULE_NOT_FOUND';
/******/ 				throw e;
/******/ 			}
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
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
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
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
/******/ 			if(Symbol.toStringTag) {
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
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./srcjs/exts/sidebar/sidebar.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class.js */ "./srcjs/exts/sidebar/class.js");


/**
 * Initialize a mapgl sidebar.
 * @param {Object} el - HTML element.
 * @param {string} id - HTML element identifier for sidebar.
 * @param {string} height - Height for sidebar (e.g., `"400px"`).
 * @param {Object} options - Options for customizing the sidebar.
 * @param {string} options.position - Position for sidebar. Acceptable
 * values include `"top-left"` and `"top-right"`.
 * @return {void}
 */
Shiny.mapglSidebarInitialize = function(el, id, height, options) {
  el.map.addControl(new _class_js__WEBPACK_IMPORTED_MODULE_0__.MapSidebar(id, height, options), options.position);
}

/**
 * Shiny handler for opening a sidebar pane on a mapgl map.
 * @param {Object} message - Message from Shiny.
 * @param {string} message.id - HTML identifier for the map
 * @param {string} message.pane_id - HTML identifier for the sidebar pane.
 * @return {void}
 */
Shiny.addCustomMessageHandler("sidebar:open", function(message) {
  var el = document.getElementById(message.id);
  if (el) {
    el.widget.open(message.pane_id);
  }
})

/**
 * Shiny handler for closing any sidebar panes on a mapgl map.
 * @param {Object} message - Message from Shiny.
 * @param {string} message.id - HTML identifier for the map
 * @return {void}
 */
Shiny.addCustomMessageHandler("sidebar:close", function(message) {
  var el = document.getElementById(message.id);
  if (el) {
    el.widget.close();
  }
})

/**
 * Shiny handler for enabling a menu button for a sidebar pane on a mapgl map.
 * @param {Object} message - Message from Shiny.
 * @param {string} message.id - HTML identifier for the map
 * @param {string} message.pane_id - HTML identifier for the sidebar pane.
 * @return {void}
 */
Shiny.addCustomMessageHandler("sidebar:enable", function(message) {
  var el = document.getElementById(message.id);
  if (el) {
    el.widget.enable(message.pane_id);
  }
})

/**
 * Shiny handler for disabling a menu button for a sidebar pane on a mapgl map.
 * @param {Object} message - Message from Shiny.
 * @param {string} message.id - HTML identifier for the map
 * @param {string} message.pane_id - HTML identifier for the sidebar pane.
 * @return {void}
 */
Shiny.addCustomMessageHandler("sidebar:disable", function(message) {
  var el = document.getElementById(message.id);
  if (el) {
    el.widget.disable(message.pane_id);
  }
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNtSDtBQUNqQjtBQUNsRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG1HQUFtRyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLGFBQWEsYUFBYSxNQUFNLE1BQU0sVUFBVSxZQUFZLE1BQU0sTUFBTSxVQUFVLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFV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Q0E7V0FDQTtXQUNBLEU7Ozs7O1dDdEJBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BLG1DOzs7Ozs7Ozs7Ozs7QUNBcUM7O0FBRXJDO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSx3QkFBd0IsaURBQVU7QUFDbEM7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHNjcC8uL3NyY2pzL2V4dHMvc2lkZWJhci9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL2Fwc2NwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hcHNjcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Fwc2NwLy4vc3JjanMvZXh0cy9zaWRlYmFyL2Nzcy9zdHlsZS5jc3M/MTRlNiIsIndlYnBhY2s6Ly9hcHNjcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hcHNjcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hcHNjcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Fwc2NwLy4vc3JjanMvZXh0cy9zaWRlYmFyL2NsYXNzLmpzIiwid2VicGFjazovL2Fwc2NwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Fwc2NwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Fwc2NwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hcHNjcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Fwc2NwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXBzY3Avd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2Fwc2NwLy4vc3JjanMvZXh0cy9zaWRlYmFyL3NpZGViYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tYXBzaWRlYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDIwMDA7XG4gIHRyYW5zaXRpb246IHdpZHRoIDUwMG1zO1xuICBib3gtc2hhZG93OiAwIDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5tYXBzaWRlYmFyLmNvbGxhcHNlZCB7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG4ubWFwc2lkZWJhci1sZWZ0IHtcbiAgbGVmdDogMDtcbn1cbi5tYXBzaWRlYmFyLXJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG59XG5cbi5tYXBzaWRlYmFyLXRhYnMge1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLm1hcHNpZGViYXItbGVmdCAubWFwc2lkZWJhci10YWJzIHtcbiAgbGVmdDogMDtcbn1cbi5tYXBzaWRlYmFyLXJpZ2h0IC5tYXBzaWRlYmFyLXRhYnMge1xuICByaWdodDogMDtcbn1cbi5tYXBzaWRlYmFyLXRhYnMsXG4ubWFwc2lkZWJhci10YWJzID4gdWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA0MHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5tYXBzaWRlYmFyLXRhYnMgPiBsaSxcbi5tYXBzaWRlYmFyLXRhYnMgPiB1bCA+IGxpIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgY29sb3I6ICMzMzM7XG4gICAgZm9udC1zaXplOiAxMnB0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgODBtcztcbn1cbi5tYXBzaWRlYmFyLXRhYnMgPiBsaTpob3Zlcixcbi5tYXBzaWRlYmFyLXRhYnMgPiB1bCA+IGxpOmhvdmVyIHtcbiAgY29sb3I6ICMwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cbi5tYXBzaWRlYmFyLXRhYnMgPiBsaS5hY3RpdmUsXG4ubWFwc2lkZWJhci10YWJzID4gdWwgPiBsaS5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NGQ5O1xufVxuLm1hcHNpZGViYXItdGFicyA+IGxpLmRpc2FibGVkLFxuLm1hcHNpZGViYXItdGFicyA+IHVsID4gbGkuZGlzYWJsZWQge1xuICBjb2xvcjogcmdiYSg1MSwgNTEsIDUxLCAwLjQpO1xufVxuLm1hcHNpZGViYXItdGFicyA+IGxpLmRpc2FibGVkOmhvdmVyLFxuLm1hcHNpZGViYXItdGFicyA+IHVsID4gbGkuZGlzYWJsZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5tYXBzaWRlYmFyLXRhYnMgPiBsaS5kaXNhYmxlZCA+IGEsXG4ubWFwc2lkZWJhci10YWJzID4gdWwgPiBsaS5kaXNhYmxlZCA+IGEge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4ubWFwc2lkZWJhci10YWJzID4gbGkgPiBhLFxuLm1hcHNpZGViYXItdGFicyA+IHVsID4gbGkgPiBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFwc2lkZWJhci10YWJzID4gdWwgKyB1bCB7XG4gIGJvdHRvbTogMDtcbn1cblxuLm1hcHNpZGViYXItY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi5tYXBzaWRlYmFyLWxlZnQgLm1hcHNpZGViYXItY29udGVudCB7XG4gIGxlZnQ6IDQwcHg7XG4gIHJpZ2h0OiAwO1xufVxuLm1hcHNpZGViYXItcmlnaHQgLm1hcHNpZGViYXItY29udGVudCB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiA0MHB4O1xufVxuLm1hcHNpZGViYXIuY29sbGFwc2VkID4gLm1hcHNpZGViYXItY29udGVudCB7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLm1hcHNpZGViYXItcGFuZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxMHB4IDFweCAxMHB4IDEwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1hcHNpZGViYXItcGFuZS5hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm1hcHNpZGViYXItcGFuZS1oZWFkZXIge1xuICBtYXJnaW46IC0xMHB4IC0yMHB4IDA7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxNC40cHQ7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NGQ5O1xufVxuLm1hcHNpZGViYXItcmlnaHQgLm1hcHNpZGViYXItcGFuZS1oZWFkZXItaWNvbiB7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbn1cblxuLm1hcHNpZGViYXItcGFuZS1jb250ZW50IHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLm1hcHNpZGViYXItY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWFwc2lkZWJhci1sZWZ0IC5tYXBzaWRlYmFyLWNsb3NlIHtcbiAgcmlnaHQ6IDA7XG59XG4ubWFwc2lkZWJhci1yaWdodCAubWFwc2lkZWJhci1jbG9zZSB7XG4gIGxlZnQ6IDA7XG59XG5cbi5zaWRlYmFyLW1hcCAubWFwLWxlZnQge1xuICBsZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zaWRlYmFyLW1hcCAubWFwLXJpZ2h0IHtcbiAgcmlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxuLm1hcHNpZGViYXIubWFwLXRvdWNoIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLm1hcHNpZGViYXIge1xuICAgIHdpZHRoOiAzMDVweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gIC5tYXBzaWRlYmFyIHtcbiAgICB3aWR0aDogMzkwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLm1hcHNpZGViYXIge1xuICAgIHdpZHRoOiA0NjBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubWFwc2lkZWJhci1wYW5lIHtcbiAgICBtaW4td2lkdGg6IDI2NXB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgLm1hcHNpZGViYXItcGFuZSB7XG4gICAgbWluLXdpZHRoOiAzNTBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAubWFwc2lkZWJhci1wYW5lIHtcbiAgICBtaW4td2lkdGg6IDQyMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubWFwc2lkZWJhciB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG4gIC5tYXBzaWRlYmFyLm1hcC10b3VjaCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG5cbiAgLnNpZGViYXItbWFwIC5tYXBib3gtY3RybCAubWFwLWxlZnQge1xuICAgIHRyYW5zaXRpb246IGxlZnQgNTAwbXM7XG4gIH1cbiAgLnNpZGViYXItbWFwIC5tYXBib3gtY3RybCAubWFwLXJpZ2h0IHtcbiAgICB0cmFuc2l0aW9uOiByaWdodCA1MDBtcztcbiAgfVxuXG4gIC5zaWRlYmFyLW1hcCAubWFwLWxlZnQuZXh0ZW5kZWQge1xuICAgIGxlZnQ6IDQ2MHB4O1xuICB9XG4gIC5zaWRlYmFyLW1hcCAubWFwLXJpZ2h0LmV4dGVuZGVkIHtcbiAgICByaWdodDogNDYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5zaWRlYmFyLW1hcCAubWFwLWxlZnQuZXh0ZW5kZWQge1xuICAgIGxlZnQ6IDMwNXB4O1xuICB9XG4gIC5zaWRlYmFyLW1hcCAubWFwLXJpZ2h0LmV4dGVuZGVkIHtcbiAgICByaWdodDogMzA1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAuc2lkZWJhci1tYXAgLm1hcC1sZWZ0LmV4dGVuZGVkIHtcbiAgICBsZWZ0OiAzOTBweDtcbiAgfVxuICAuc2lkZWJhci1tYXAgLm1hcC1yaWdodC5leHRlbmRlZCB7XG4gICAgcmlnaHQ6IDM5MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5zaWRlYmFyLW1hcCAubWFwLWxlZnQuZXh0ZW5kZWQge1xuICAgIGxlZnQ6IDQ2MHB4O1xuICB9XG4gIC5zaWRlYmFyLW1hcCAubWFwLXJpZ2h0LmV4dGVuZGVkIHtcbiAgICByaWdodDogNDYwcHg7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjanMvZXh0cy9zaWRlYmFyL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIseUNBQXlDO0VBQ3pDLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsT0FBTztBQUNUO0FBQ0E7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxNQUFNO0VBQ04sU0FBUztFQUNULGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLE9BQU87QUFDVDtBQUNBO0VBQ0UsUUFBUTtBQUNWO0FBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtFQUNWLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztJQUNULGVBQWU7RUFDakIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0QjtBQUNBOztFQUVFLFdBQVc7SUFDVCxzQkFBc0I7QUFDMUI7QUFDQTs7RUFFRSxXQUFXO0lBQ1QseUJBQXlCO0FBQzdCO0FBQ0E7O0VBRUUsNEJBQTRCO0FBQzlCO0FBQ0E7O0VBRUUsdUJBQXVCO0FBQ3pCO0FBQ0E7O0VBRUUsZUFBZTtBQUNqQjtBQUNBOztFQUVFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsMkNBQTJDO0VBQzNDLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7QUFDVjtBQUNBO0VBQ0UsT0FBTztFQUNQLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLE9BQU87RUFDUCxRQUFRO0VBQ1Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsUUFBUTtBQUNWO0FBQ0E7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGO0FBQ0E7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGO0FBQ0E7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRjtBQUNBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGO0FBQ0E7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1hcHNpZGViYXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgei1pbmRleDogMjAwMDtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDUwMG1zO1xcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG4ubWFwc2lkZWJhci5jb2xsYXBzZWQge1xcbiAgd2lkdGg6IDQwcHg7XFxufVxcblxcbi5tYXBzaWRlYmFyLWxlZnQge1xcbiAgbGVmdDogMDtcXG59XFxuLm1hcHNpZGViYXItcmlnaHQge1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi5tYXBzaWRlYmFyLXRhYnMge1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuLm1hcHNpZGViYXItbGVmdCAubWFwc2lkZWJhci10YWJzIHtcXG4gIGxlZnQ6IDA7XFxufVxcbi5tYXBzaWRlYmFyLXJpZ2h0IC5tYXBzaWRlYmFyLXRhYnMge1xcbiAgcmlnaHQ6IDA7XFxufVxcbi5tYXBzaWRlYmFyLXRhYnMsXFxuLm1hcHNpZGViYXItdGFicyA+IHVsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuLm1hcHNpZGViYXItdGFicyA+IGxpLFxcbi5tYXBzaWRlYmFyLXRhYnMgPiB1bCA+IGxpIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgY29sb3I6ICMzMzM7XFxuICAgIGZvbnQtc2l6ZTogMTJwdDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiBhbGwgODBtcztcXG59XFxuLm1hcHNpZGViYXItdGFicyA+IGxpOmhvdmVyLFxcbi5tYXBzaWRlYmFyLXRhYnMgPiB1bCA+IGxpOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbn1cXG4ubWFwc2lkZWJhci10YWJzID4gbGkuYWN0aXZlLFxcbi5tYXBzaWRlYmFyLXRhYnMgPiB1bCA+IGxpLmFjdGl2ZSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzRkOTtcXG59XFxuLm1hcHNpZGViYXItdGFicyA+IGxpLmRpc2FibGVkLFxcbi5tYXBzaWRlYmFyLXRhYnMgPiB1bCA+IGxpLmRpc2FibGVkIHtcXG4gIGNvbG9yOiByZ2JhKDUxLCA1MSwgNTEsIDAuNCk7XFxufVxcbi5tYXBzaWRlYmFyLXRhYnMgPiBsaS5kaXNhYmxlZDpob3ZlcixcXG4ubWFwc2lkZWJhci10YWJzID4gdWwgPiBsaS5kaXNhYmxlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuLm1hcHNpZGViYXItdGFicyA+IGxpLmRpc2FibGVkID4gYSxcXG4ubWFwc2lkZWJhci10YWJzID4gdWwgPiBsaS5kaXNhYmxlZCA+IGEge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4ubWFwc2lkZWJhci10YWJzID4gbGkgPiBhLFxcbi5tYXBzaWRlYmFyLXRhYnMgPiB1bCA+IGxpID4gYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1hcHNpZGViYXItdGFicyA+IHVsICsgdWwge1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4ubWFwc2lkZWJhci1jb250ZW50IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcbi5tYXBzaWRlYmFyLWxlZnQgLm1hcHNpZGViYXItY29udGVudCB7XFxuICBsZWZ0OiA0MHB4O1xcbiAgcmlnaHQ6IDA7XFxufVxcbi5tYXBzaWRlYmFyLXJpZ2h0IC5tYXBzaWRlYmFyLWNvbnRlbnQge1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiA0MHB4O1xcbn1cXG4ubWFwc2lkZWJhci5jb2xsYXBzZWQgPiAubWFwc2lkZWJhci1jb250ZW50IHtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuLm1hcHNpZGViYXItcGFuZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDEwcHggMXB4IDEwcHggMTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm1hcHNpZGViYXItcGFuZS5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tYXBzaWRlYmFyLXBhbmUtaGVhZGVyIHtcXG4gIG1hcmdpbjogLTEwcHggLTIwcHggMDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgZm9udC1zaXplOiAxNC40cHQ7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc0ZDk7XFxufVxcbi5tYXBzaWRlYmFyLXJpZ2h0IC5tYXBzaWRlYmFyLXBhbmUtaGVhZGVyLWljb24ge1xcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbn1cXG5cXG4ubWFwc2lkZWJhci1wYW5lLWNvbnRlbnQge1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ubWFwc2lkZWJhci1jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1hcHNpZGViYXItbGVmdCAubWFwc2lkZWJhci1jbG9zZSB7XFxuICByaWdodDogMDtcXG59XFxuLm1hcHNpZGViYXItcmlnaHQgLm1hcHNpZGViYXItY2xvc2Uge1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLnNpZGViYXItbWFwIC5tYXAtbGVmdCB7XFxuICBsZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zaWRlYmFyLW1hcCAubWFwLXJpZ2h0IHtcXG4gIHJpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXBzaWRlYmFyLm1hcC10b3VjaCB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcbiAgLm1hcHNpZGViYXIge1xcbiAgICB3aWR0aDogMzA1cHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xcbiAgLm1hcHNpZGViYXIge1xcbiAgICB3aWR0aDogMzkwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5tYXBzaWRlYmFyIHtcXG4gICAgd2lkdGg6IDQ2MHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcbiAgLm1hcHNpZGViYXItcGFuZSB7XFxuICAgIG1pbi13aWR0aDogMjY1cHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xcbiAgLm1hcHNpZGViYXItcGFuZSB7XFxuICAgIG1pbi13aWR0aDogMzUwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5tYXBzaWRlYmFyLXBhbmUge1xcbiAgICBtaW4td2lkdGg6IDQyMHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5tYXBzaWRlYmFyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgfVxcbiAgLm1hcHNpZGViYXIubWFwLXRvdWNoIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgfVxcblxcbiAgLnNpZGViYXItbWFwIC5tYXBib3gtY3RybCAubWFwLWxlZnQge1xcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDUwMG1zO1xcbiAgfVxcbiAgLnNpZGViYXItbWFwIC5tYXBib3gtY3RybCAubWFwLXJpZ2h0IHtcXG4gICAgdHJhbnNpdGlvbjogcmlnaHQgNTAwbXM7XFxuICB9XFxuXFxuICAuc2lkZWJhci1tYXAgLm1hcC1sZWZ0LmV4dGVuZGVkIHtcXG4gICAgbGVmdDogNDYwcHg7XFxuICB9XFxuICAuc2lkZWJhci1tYXAgLm1hcC1yaWdodC5leHRlbmRlZCB7XFxuICAgIHJpZ2h0OiA0NjBweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXG4gIC5zaWRlYmFyLW1hcCAubWFwLWxlZnQuZXh0ZW5kZWQge1xcbiAgICBsZWZ0OiAzMDVweDtcXG4gIH1cXG4gIC5zaWRlYmFyLW1hcCAubWFwLXJpZ2h0LmV4dGVuZGVkIHtcXG4gICAgcmlnaHQ6IDMwNXB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcXG4gIC5zaWRlYmFyLW1hcCAubWFwLWxlZnQuZXh0ZW5kZWQge1xcbiAgICBsZWZ0OiAzOTBweDtcXG4gIH1cXG4gIC5zaWRlYmFyLW1hcCAubWFwLXJpZ2h0LmV4dGVuZGVkIHtcXG4gICAgcmlnaHQ6IDM5MHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAuc2lkZWJhci1tYXAgLm1hcC1sZWZ0LmV4dGVuZGVkIHtcXG4gICAgbGVmdDogNDYwcHg7XFxuICB9XFxuICAuc2lkZWJhci1tYXAgLm1hcC1yaWdodC5leHRlbmRlZCB7XFxuICAgIHJpZ2h0OiA0NjBweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL2Nzcy9zdHlsZS5jc3NcIjtcblxuLyoqIENsYXNzIHJlcHJlc2VudGluZyBhIG1hcCBzaWRlYmFyLiAqL1xuZXhwb3J0IGNsYXNzIE1hcFNpZGViYXIge1xuXG4gIC8vIHB1YmxpYyBmaWVsZHNcbiAgaWQ7XG4gIG9wdGlvbnM7XG5cbiAgLy8gcHJpdmF0ZSBmaWVsZHNcbiAgX2hlaWdodCA9IHVuZGVmaW5lZDtcbiAgX21hcCA9IHVuZGVmaW5lZDtcbiAgX3NpZGViYXIgPSB1bmRlZmluZWQ7XG4gIF9wYW5lQ29udGFpbmVyID0gdW5kZWZpbmVkO1xuICBfdGFicyA9IHVuZGVmaW5lZDtcbiAgX3BhbmVzID0gdW5kZWZpbmVkO1xuICBfY2xvc2VCdXR0b25zID0gdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGEgbmV3IHNpZGViYXIgb2JqZWN0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgLSBIVE1MIGVsZW1lbnQgaWRlbnRpZmllci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGhlaWdodCAtIEhlaWdodCBmb3Igc2lkZWJhciAoZS5nLiwgYFwiNDAwcHhcImApLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnMgZm9yIGN1c3RvbWl6aW5nIHRoZSBzaWRlYmFyLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5wb3NpdGlvbiAtIFBvc2l0aW9uIGZvciBzaWRlYmFyLiBBY2NlcHRhYmxlXG4gICAqIHZhbHVlcyBpbmNsdWRlIGBcInRvcC1sZWZ0XCJgIGFuZCBgXCJ0b3AtcmlnaHRcImAuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBjb25zdHJ1Y3RvcihpZCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgLy8gc2V0IGZpZWxkc1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLl9zaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG4gICAgLy8gZGVjbGFyZSB0ZW1wb3JhcnkgdmFyaWFibGVzXG4gICAgdmFyIGksIGNoaWxkO1xuXG4gICAgLy8gYWRkIGhlaWdodCB0byBzaWRlYmFyXG4gICAgdGhpcy5fc2lkZWJhci5zdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAvLyBhZGQgc2lkZWJhciBsZWZ0L3JpZ2h0IGNsYXNzXG4gICAgdGhpcy5fc2lkZWJhci5jbGFzc0xpc3QuYWRkKFxuICAgICAgXCJtYXBzaWRlYmFyLVwiICtcbiAgICAgICh0aGlzLm9wdGlvbnMucG9zaXRpb24uaW5jbHVkZXMoXCJsZWZ0XCIpID8gXCJsZWZ0XCIgOiBcInJpZ2h0XCIpXG4gICAgKTtcblxuICAgIC8vIGFkZCBtYXAgYm94IGNvbnRyb2wgY2xhc3NcbiAgICB0aGlzLl9zaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJtYXBib3hnbC1jdHJsXCIpO1xuXG4gICAgLy8gaWYgbmVlZGVkLCBhZGQgdG91Y2ggc3R5bGluZ1xuICAgIGlmIChcbiAgICAgIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDAgfHxcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKFwiKHBvaW50ZXI6IGNvYXJzZSlcIikubWF0Y2hlc1xuICAgICkge1xuICAgICAgdGhpcy5fc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwibWFwLXRvdWNoXCIpO1xuICAgIH1cblxuICAgIC8vIGZpbmQgc2lkZWJhciBjb250ZW50XG4gICAgZm9yIChpID0gdGhpcy5fc2lkZWJhci5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY2hpbGQgPSB0aGlzLl9zaWRlYmFyLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKFxuICAgICAgICBjaGlsZC50YWdOYW1lID09IFwiRElWXCIgJiZcbiAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWFwc2lkZWJhci1jb250ZW50XCIpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fcGFuZUNvbnRhaW5lciA9IGNoaWxkO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGZpbmQgdGFiIGl0ZW1zXG4gICAgdGhpcy5fdGFicyA9IHRoaXMuX3NpZGViYXIucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwidWwubWFwc2lkZWJhci10YWJzID4gbGksIC5tYXBzaWRlYmFyLXRhYnMgPiB1bCA+IGxpXCJcbiAgICApO1xuICAgIGZvciAoaSA9IHRoaXMuX3RhYnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHRoaXMuX3RhYnNbaV0uX3NpZGViYXIgPSB0aGlzO1xuICAgIH1cblxuICAgIC8vIGZpbmQgc2lkZWJhciBwYW5lcyBhbmQgY2xvc2UgYnV0dG9uc1xuICAgIHRoaXMuX3BhbmVzID0gW107XG4gICAgdGhpcy5fY2xvc2VCdXR0b25zID0gW107XG4gICAgZm9yIChpID0gdGhpcy5fcGFuZUNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY2hpbGQgPSB0aGlzLl9wYW5lQ29udGFpbmVyLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKFxuICAgICAgICBjaGlsZC50YWdOYW1lID09IFwiRElWXCIgJiZcbiAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWFwc2lkZWJhci1wYW5lXCIpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fcGFuZXMucHVzaChjaGlsZCk7XG4gICAgICAgIHZhciBjbG9zZV9idXR0b25zID0gY2hpbGQucXVlcnlTZWxlY3RvckFsbChcIi5tYXBzaWRlYmFyLWNsb3NlXCIpO1xuICAgICAgICBmb3IgKHZhciBqID0gMCwgbGVuID0gY2xvc2VfYnV0dG9ucy5sZW5ndGg7IGogPCBsZW47IGorKylcbiAgICAgICAgICB0aGlzLl9jbG9zZUJ1dHRvbnMucHVzaChjbG9zZV9idXR0b25zW2pdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzdG9yZSBKUyBvYmplY3QgYXMgZmllbGQgc28gQVBJIGNhbiBhY2Nlc3MgaXRcbiAgICB0aGlzLl9zaWRlYmFyLndpZGdldCA9IHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGFuZCBkaXNwbGF5IGEgc2lkZWJhciB0byBhIE1hcGJveGdsIG1hcC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG1hcCAtIE1hcGJveGdsIE1hcCBvYmplY3QuXG4gICAqIEByZXR1cm4ge09iamVjdH0gU2lkZWJhciBvYmplY3QuXG4gICAqL1xuICBvbkFkZChtYXApIHtcbiAgICAvLyBkZWNsYXJlIHRlbXBvcmFyeSB2YXJpYWJsZXNcbiAgICB2YXIgaSwgY2hpbGQ7XG5cbiAgICAvLyBzZXQgbWFwIGZpZWxkXG4gICAgdGhpcy5fbWFwID0gbWFwO1xuXG4gICAgLy8gYWRkIGNzcyBjbGFzcyBzaWRlYmFyLW1hcCB0byBtYXBcbiAgICBpZiAoIW1hcC5fY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcInNpZGViYXItbWFwXCIpKSB7XG4gICAgICBtYXAuX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1tYXBcIik7XG4gICAgfVxuXG4gICAgLy8gaWYgaGVpZ2h0IGlzIGEgcGVyY2VudGFnZSwgdGhlbiBtb2RpZnkgY29udHJvbCBwb3NpdGlvbiBjb250YWluZXJcbiAgICBpZiAodGhpcy5faGVpZ2h0LmVuZHNXaXRoKFwiJVwiKSkge1xuICAgICAgY2hpbGQgPSBtYXAuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi5tYXBib3hnbC1jdHJsLVwiICsgdGhpcy5vcHRpb25zLnBvc2l0aW9uXG4gICAgICApXG4gICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgY2hpbGQuc3R5bGUuaGVpZ2h0ID0gXCJjYWxjKDEwMCUgLSA1MHB4KVwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFkZCBjbGljayBldmVudHMgc28gdGhhdCBjbGlja2luZyBvbiBpY29ucyB3aWxsIG9wZW4gYW5kIGNsb3NlIHBhbmVzXG4gICAgdGhpcy5fdGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgIGxldCBzdWIgPSB0YWIucXVlcnlTZWxlY3RvcihcImFcIik7XG4gICAgICBpZiAoXG4gICAgICAgIHN1Yi5oYXNBdHRyaWJ1dGUoXCJocmVmXCIpICYmXG4gICAgICAgIHN1Yi5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNsaWNlKDAsIDEpID09IFwiI1wiXG4gICAgICApIHtcbiAgICAgICAgc3ViLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLl9vbkNsaWNrLmNhbGwodGFiKSk7XG4gICAgIH1cbiAgIH0pO1xuXG4gICAgLy8gYWRkIGNsaWNrIGV2ZW50cyBzbyB0aGF0IGNsaWNraW5nIG9uIGNsb3NlIGJ1dHRvbnMgd2lsbCBjbG9zZSBwYW5lc1xuICAgIHRoaXMuX2Nsb3NlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5fb25DbG9zZUNsaWNrKCkpO1xuICAgIH0pO1xuXG4gICAgLy8gc2hvdyBzaWRlYmFyIGFuZCBjb250ZW50XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgJChcIi5tYXBzaWRlYmFyLmNvbGxhcHNlZCAubWFwc2lkZWJhci10YWJzLCAubWFwc2lkZWJhci5jb2xsYXBzZWQgLm1hcHNpZGViYXItY29udGVudCwgLm1hcHNpZGViYXIuY29sbGFwc2VkXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgICB9LCA0MDApO1xuXG4gICAgLy8gcmV0dXJuIG9iamVjdFxuICAgIHJldHVybiB0aGlzLl9zaWRlYmFyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBzaWRlYmFyIGZyb20gYSBNYXBib3hnbCBtYXAuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBvblJlbW92ZSgpIHtcbiAgICB0aGlzLl9zaWRlYmFyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5fc2lkZWJhcik7XG4gICAgdGhpcy5fbWFwID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gc2lkZWJhciBwYW5lLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgLSBIVE1MIGlkZW50aWZpZXIgZm9yIHNpZGViYXIgcGFuZS5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIG9wZW4oaWQpIHtcbiAgICAvLyBkZWNsYXJlIHRlbXBvcmFyeSB2YXJpYWJsZXNcbiAgICB2YXIgaSwgY2hpbGQ7XG5cbiAgICAvLyBoaWRlIG9sZCBhY3RpdmUgY29udGVudHMgYW5kIHNob3cgbmV3IGNvbnRlbnRcbiAgICBmb3IgKGkgPSB0aGlzLl9wYW5lcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY2hpbGQgPSB0aGlzLl9wYW5lc1tpXTtcbiAgICAgIGlmIChjaGlsZC5pZCA9PSBpZCkge1xuICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZW1vdmUgb2xkIGFjdGl2ZSBoaWdobGlnaHRzIGFuZCBzZXQgbmV3IGhpZ2hsaWdodFxuICAgIGZvciAoaSA9IHRoaXMuX3RhYnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICBjaGlsZCA9IHRoaXMuX3RhYnNbaV07XG4gICAgICBpZiAoY2hpbGQucXVlcnlTZWxlY3RvcihcImFcIikuaGFzaC5zbGljZSgxKSA9PT0gaWQpIHtcbiAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgbmVlZGVkLCBvcGVuIHNpZGViYXJcbiAgICBpZiAodGhpcy5fc2lkZWJhci5jbGFzc0xpc3QuY29udGFpbnMoXCJjb2xsYXBzZWRcIikpIHtcbiAgICAgIHZhciBwb3MgPSB0aGlzLl9zaWRlYmFyLmNsYXNzTGlzdC5jb250YWlucyhcIm1hcHNpZGViYXItbGVmdFwiKSA/XG4gICAgICAgIFwiLm1hcC1sZWZ0XCIgOiBcIi5tYXAtcmlnaHRcIjtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKHBvcylcbiAgICAgICAgLmZvckVhY2goZSA9PiB7ZS5jbGFzc0xpc3QuYWRkKFwiZXh0ZW5kZWRcIil9KTtcbiAgICAgIHRoaXMuX3NpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcImNvbGxhcHNlZFwiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2UgYW55IHNpZGViYXIgcGFuZXMgdGhhdCBhcmUgb3Blbi5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGNsb3NlKCkge1xuICAgIC8vIGRlY2xhcmUgdGVtcG9yYXJ5IHZhcmlhYmxlc1xuICAgIHZhciBpLCBjaGlsZDtcblxuICAgIC8vIHJlbW92ZSBvbGQgYWN0aXZlIGhpZ2hsaWdodHNcbiAgICBmb3IgKGkgPSB0aGlzLl90YWJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB0aGlzLl90YWJzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuXG4gICAgLy8gaWYgbmVlZGVkLCBjbG9zZSBzaWRlYmFyXG4gICAgaWYgKCF0aGlzLl9zaWRlYmFyLmNsYXNzTGlzdC5jb250YWlucyhcImNvbGxhcHNlZFwiKSkge1xuICAgICAgdmFyIHBvcyA9IHRoaXMuX3NpZGViYXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWFwc2lkZWJhci1sZWZ0XCIpID9cbiAgICAgICAgXCIubWFwLWxlZnRcIiA6IFwiLm1hcC1yaWdodFwiO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwocG9zKVxuICAgICAgICAuZm9yRWFjaChlID0+IHtlLmNsYXNzTGlzdC5yZW1vdmUoXCJleHRlbmRlZFwiKX0pO1xuICAgICAgdGhpcy5fc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwiY29sbGFwc2VkXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgdGhlIG1lbnUgYnV0dG9uIGZvciBvcGVuaW5nIGEgc2lkZWJhciBwYW5lLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgLSBIVE1MIGlkZW50aWZpZXIgZm9yIHNpZGViYXIgcGFuZS5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGVuYWJsZShpZCkge1xuICAgIC8vIGRlY2xhcmUgdGVtcG9yYXJ5IHZhcmlhYmxlc1xuICAgIHZhciBpLCBjaGlsZDtcblxuICAgIC8vIGVuYWJsZSB0YWJcbiAgICBmb3IgKGkgPSB0aGlzLl90YWJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjaGlsZCA9IHRoaXMuX3RhYnNbaV07XG4gICAgICBpZiAoY2hpbGQucXVlcnlTZWxlY3RvcihcImFcIikuaGFzaC5zbGljZSgxKSA9PT0gaWQpIHtcbiAgICAgICAgLy8gZm91bmQgdGhlIGRlc2lyZWQgdGFiLCBzbyBlbmFibGUgaXRcbiAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xuICAgICAgICAvLyBzaW5jZSBvbmx5IG9uZSB0YWIgaXMgYmVpbmcgZW5hYmxlZCwgZXhpdCBlYXJseVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUgbWVudSBidXR0b24gZm9yIG9wZW5pbmcgYSBzaWRlYmFyIHBhbmUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIEhUTUwgaWRlbnRpZmllciBmb3Igc2lkZWJhciBwYW5lLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgZGlzYWJsZShpZCkge1xuICAgIC8vIGRlY2xhcmUgdGVtcG9yYXJ5IHZhcmlhYmxlc1xuICAgIHZhciBpLCBjaGlsZDtcblxuICAgIC8vIGRpc2FibGUgdGFiXG4gICAgZm9yIChpID0gdGhpcy5fdGFicy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY2hpbGQgPSB0aGlzLl90YWJzW2ldO1xuICAgICAgaWYgKGNoaWxkLnF1ZXJ5U2VsZWN0b3IoXCJhXCIpLmhhc2guc2xpY2UoMSkgPT09IGlkKSB7XG4gICAgICAgIC8vIGZvdW5kIHRoZSBkZXNpcmVkIHRhYiwgc28gdGhlbi4uLlxuICAgICAgICAvLyBpZiB0YWIgaXMgYWN0aXZlLCB0aGVuIGNsb3NlIGl0XG4gICAgICAgIGlmIChjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlKGlkKVxuICAgICAgICB9XG4gICAgICAgIC8vIGRpc2FibGUgdGhlIHRhYlxuICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIC8vIHNpbmNlIG9ubHkgb25lIHRhYiBpcyBiZWluZyBkaXNhYmxlZCwgZXhpdCBlYXJseVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lIGJlaGF2aW9yIGZvciBjbGlja2luZyBhIHNpZGViYXIgbWVudSBidXR0b24uXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb25DbGljaygpIHtcbiAgICBpZiAodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgIHRoaXMuX3NpZGViYXIuY2xvc2UoKTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmNsYXNzTGlzdC5jb250YWlucyhcImRpc2FibGVkXCIpKSB7XG4gICAgICB0aGlzLl9zaWRlYmFyLm9wZW4odGhpcy5xdWVyeVNlbGVjdG9yKFwiYVwiKS5oYXNoLnNsaWNlKDEpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lIGJlaGF2aW9yIGZvciBjbGlja2luZyBhIHNpZGViYXIgY2xvc2UgYnV0dG9uLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX29uQ2xvc2VDbGljaygpIHtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxuY29uc3QgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRjb25zdCBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0Y29uc3QgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRsZXQgdGhyZXcgPSB0cnVlO1xuXHR0cnkge1xuXHRcdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHRcdGNvbnN0IGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH1cblx0XHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0XHR0aHJldyA9IGZhbHNlO1xuXHR9IGZpbmFsbHkge1xuXHRcdGlmKHRocmV3KSBkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0fVxuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0Y29uc3QgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIvdmFsdWUgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGlmKEFycmF5LmlzQXJyYXkoZGVmaW5pdGlvbikpIHtcblx0XHR2YXIgaSA9IDA7XG5cdFx0d2hpbGUoaSA8IGRlZmluaXRpb24ubGVuZ3RoKSB7XG5cdFx0XHR2YXIga2V5ID0gZGVmaW5pdGlvbltpKytdO1xuXHRcdFx0dmFyIGJpbmRpbmcgPSBkZWZpbml0aW9uW2krK107XG5cdFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdFx0aWYoYmluZGluZyA9PT0gMCkge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IGRlZmluaXRpb25baSsrXSB9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogYmluZGluZyB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmKGJpbmRpbmcgPT09IDApIHsgaSsrOyB9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYoU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge01hcFNpZGViYXJ9IGZyb20gXCIuL2NsYXNzLmpzXCJcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbWFwZ2wgc2lkZWJhci5cbiAqIEBwYXJhbSB7T2JqZWN0fSBlbCAtIEhUTUwgZWxlbWVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIEhUTUwgZWxlbWVudCBpZGVudGlmaWVyIGZvciBzaWRlYmFyLlxuICogQHBhcmFtIHtzdHJpbmd9IGhlaWdodCAtIEhlaWdodCBmb3Igc2lkZWJhciAoZS5nLiwgYFwiNDAwcHhcImApLlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zIGZvciBjdXN0b21pemluZyB0aGUgc2lkZWJhci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnBvc2l0aW9uIC0gUG9zaXRpb24gZm9yIHNpZGViYXIuIEFjY2VwdGFibGVcbiAqIHZhbHVlcyBpbmNsdWRlIGBcInRvcC1sZWZ0XCJgIGFuZCBgXCJ0b3AtcmlnaHRcImAuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5TaGlueS5tYXBnbFNpZGViYXJJbml0aWFsaXplID0gZnVuY3Rpb24oZWwsIGlkLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgZWwubWFwLmFkZENvbnRyb2wobmV3IE1hcFNpZGViYXIoaWQsIGhlaWdodCwgb3B0aW9ucyksIG9wdGlvbnMucG9zaXRpb24pO1xufVxuXG4vKipcbiAqIFNoaW55IGhhbmRsZXIgZm9yIG9wZW5pbmcgYSBzaWRlYmFyIHBhbmUgb24gYSBtYXBnbCBtYXAuXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSAtIE1lc3NhZ2UgZnJvbSBTaGlueS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlLmlkIC0gSFRNTCBpZGVudGlmaWVyIGZvciB0aGUgbWFwXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZS5wYW5lX2lkIC0gSFRNTCBpZGVudGlmaWVyIGZvciB0aGUgc2lkZWJhciBwYW5lLlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoXCJzaWRlYmFyOm9wZW5cIiwgZnVuY3Rpb24obWVzc2FnZSkge1xuICB2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtZXNzYWdlLmlkKTtcbiAgaWYgKGVsKSB7XG4gICAgZWwud2lkZ2V0Lm9wZW4obWVzc2FnZS5wYW5lX2lkKTtcbiAgfVxufSlcblxuLyoqXG4gKiBTaGlueSBoYW5kbGVyIGZvciBjbG9zaW5nIGFueSBzaWRlYmFyIHBhbmVzIG9uIGEgbWFwZ2wgbWFwLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgLSBNZXNzYWdlIGZyb20gU2hpbnkuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZS5pZCAtIEhUTUwgaWRlbnRpZmllciBmb3IgdGhlIG1hcFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoXCJzaWRlYmFyOmNsb3NlXCIsIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWVzc2FnZS5pZCk7XG4gIGlmIChlbCkge1xuICAgIGVsLndpZGdldC5jbG9zZSgpO1xuICB9XG59KVxuXG4vKipcbiAqIFNoaW55IGhhbmRsZXIgZm9yIGVuYWJsaW5nIGEgbWVudSBidXR0b24gZm9yIGEgc2lkZWJhciBwYW5lIG9uIGEgbWFwZ2wgbWFwLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgLSBNZXNzYWdlIGZyb20gU2hpbnkuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZS5pZCAtIEhUTUwgaWRlbnRpZmllciBmb3IgdGhlIG1hcFxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UucGFuZV9pZCAtIEhUTUwgaWRlbnRpZmllciBmb3IgdGhlIHNpZGViYXIgcGFuZS5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cblNoaW55LmFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyKFwic2lkZWJhcjplbmFibGVcIiwgZnVuY3Rpb24obWVzc2FnZSkge1xuICB2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtZXNzYWdlLmlkKTtcbiAgaWYgKGVsKSB7XG4gICAgZWwud2lkZ2V0LmVuYWJsZShtZXNzYWdlLnBhbmVfaWQpO1xuICB9XG59KVxuXG4vKipcbiAqIFNoaW55IGhhbmRsZXIgZm9yIGRpc2FibGluZyBhIG1lbnUgYnV0dG9uIGZvciBhIHNpZGViYXIgcGFuZSBvbiBhIG1hcGdsIG1hcC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIC0gTWVzc2FnZSBmcm9tIFNoaW55LlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UuaWQgLSBIVE1MIGlkZW50aWZpZXIgZm9yIHRoZSBtYXBcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlLnBhbmVfaWQgLSBIVE1MIGlkZW50aWZpZXIgZm9yIHRoZSBzaWRlYmFyIHBhbmUuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5TaGlueS5hZGRDdXN0b21NZXNzYWdlSGFuZGxlcihcInNpZGViYXI6ZGlzYWJsZVwiLCBmdW5jdGlvbihtZXNzYWdlKSB7XG4gIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1lc3NhZ2UuaWQpO1xuICBpZiAoZWwpIHtcbiAgICBlbC53aWRnZXQuZGlzYWJsZShtZXNzYWdlLnBhbmVfaWQpO1xuICB9XG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9