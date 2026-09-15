/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./srcjs/exts/sidebar/css/style.css"
/*!******************************************!*\
  !*** ./srcjs/exts/sidebar/css/style.css ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./srcjs/modules/utils/css/style.css"
/*!*******************************************!*\
  !*** ./srcjs/modules/utils/css/style.css ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/* harmony import */ var _modules_utils_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/utils/element.js */ "./srcjs/modules/utils/element.js");
/** Import dependencies */
// styling



/** Class representing a map sidebar. */
class MapSidebar {

  // public fields
  options;
  element;

  // private fields
  _height;
  _map;
  _paneContainer;
  _tabs;
  _panes;
  _closeButtons;

  /**
   * Initialize a new sidebar object.
   * @param {string} element - HTML element.
   * @param {string} height - Height for sidebar (e.g., `"400px"`).
   * @param {object} options - Options for customizing the sidebar.
   * @param {string} options.position - Position for sidebar. Acceptable
   * values include `"top-left"` and `"top-right"`.
   * @return {void}
   */
  constructor(element, height, options) {
    // set fields
    this.element = element;
    this.options = options;
    this._height = height;
    // declare temporary variables
    var i, child;
    // add height to sidebar
    this.element.style.height = height;
    // add sidebar left/right class
    this.element.classList.add(
      "mapsidebar-" +
      (this.options.position.includes("left") ? "left" : "right")
    );
    // add map box control class
    this.element.classList.add("mapboxgl-ctrl");
    // if needed, add touch styling
    if (
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      this.element.classList.add("map-touch");
    }
    // find sidebar content
    for (i = this.element.children.length - 1; i >= 0; i--) {
      child = this.element.children[i];
      if (
        child.tagName == "DIV" &&
        child.classList.contains("mapsidebar-content")
      ) {
        this._paneContainer = child;
      }
    }
    // find tab items
    this._tabs = this.element.querySelectorAll(
      "ul.mapsidebar-tabs > li, .mapsidebar-tabs > ul > li"
    );
    for (i = this._tabs.length - 1; i >= 0; i--) {
      this._tabs[i].sidebar = this;
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
    this.element.widget = this;
  }

  /**
   * Add and display a sidebar to a Mapboxgl map.
   * @param {object} map - Mapboxgl Map object.
   * @return {object} Sidebar object.
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
    // if needed, add tooltips for each pane
    for (let i = 0; i < this._tabs.length; ++i) {
      let sub = this._tabs[i].querySelector("a");
      let tooltip = this._panes[i].getAttribute("data-tooltip");
      if (typeof(tooltip) === "string") {
        (0,_modules_utils_element_js__WEBPACK_IMPORTED_MODULE_1__.addTooltip)(sub, tooltip)
      }
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
        sub.addEventListener(
          "click",
          () => {
            if (tab.classList.contains("active")) {
              this.close();
            } else if (!tab.classList.contains("disabled")) {
              this.open(tab.querySelector("a").hash.slice(1));
            }
          }
        );
      }
    });
    // add click events so that clicking on close buttons will close panes
    this._closeButtons.forEach((button) => {
      button.addEventListener("click", () => this.close());
    });
    // show sidebar and content
    setTimeout(function(){
      $(".mapsidebar.collapsed .mapsidebar-tabs, .mapsidebar.collapsed .mapsidebar-content, .mapsidebar.collapsed").css("display", "block");
    }, 400);
    // return object
    return this.element;
  }

  /**
   * Remove sidebar from a Mapboxgl map.
   * @return {void}
   */
  onRemove() {
    this.element.parentNode.removeChild(this.element);
    this._map = undefined;
  }

  /**
   * Open sidebar pane.
   * @param {string} pane_id - HTML identifier for sidebar pane.
   * @return {void}
   */
  open(pane_id) {
    // declare temporary variables
    var i, child;
    // hide old active contents and show new content
    for (i = this._panes.length - 1; i >= 0; i--) {
      child = this._panes[i];
      if (child.id == pane_id) {
        child.classList.add("active");
      } else {
        child.classList.remove("active");
      }
    }
    // remove old active highlights and set new highlight
    for (i = this._tabs.length - 1; i >= 0; i--) {
       child = this._tabs[i];
      if (child.querySelector("a").hash.slice(1) === pane_id) {
        child.classList.add("active");
      } else {
        child.classList.remove("active");
      }
    }
    // if needed, open sidebar
    if (this.element.classList.contains("collapsed")) {
      var pos = this.element.classList.contains("mapsidebar-left") ?
        ".map-left" : ".map-right";
      document
        .querySelectorAll(pos)
        .forEach(e => {e.classList.add("extended")});
      this.element.classList.remove("collapsed");
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
    if (!this.element.classList.contains("collapsed")) {
      var pos = this.element.classList.contains("mapsidebar-left") ?
        ".map-left" : ".map-right";
      document
        .querySelectorAll(pos)
        .forEach(e => {e.classList.remove("extended")});
      this.element.classList.add("collapsed");
    }
  }

  /**
   * Enable the menu button for opening a sidebar pane.
   * @param {string} pane_id - HTML identifier for sidebar pane.
   * @return {void}
   */
  enable(pane_id) {
    // declare temporary variables
    var i, child;
    // enable tab
    for (i = this._tabs.length - 1; i >= 0; i--) {
      child = this._tabs[i];
      if (child.querySelector("a").hash.slice(1) === pane_id) {
        // found the desired tab, so enable it
        child.classList.remove("disabled");
        // since only one tab is being enabled, exit early
        break;
      }
    }
  }

  /**
   * Disable the menu button for opening a sidebar pane.
   * @param {string} pane_id - HTML identifier for sidebar pane.
   * @return {void}
   */
  disable(pane_id) {
    // declare temporary variables
    var i, child;
    // disable tab
    for (i = this._tabs.length - 1; i >= 0; i--) {
      child = this._tabs[i];
      if (child.querySelector("a").hash.slice(1) === pane_id) {
        // found the desired tab, so then...
        // if tab is active, then close it
        if (child.classList.contains("active")) {
          this.close(pane_id)
        }
        // disable the tab
        child.classList.add("disabled");
        // since only one tab is being disabled, exit early
        break;
      }
    }
  }
}


/***/ },

/***/ "./srcjs/modules/utils/element.js"
/*!****************************************!*\
  !*** ./srcjs/modules/utils/element.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTooltip: () => (/* binding */ addTooltip),
/* harmony export */   createButtonGroups: () => (/* binding */ createButtonGroups),
/* harmony export */   createHandle: () => (/* binding */ createHandle),
/* harmony export */   createNameLabel: () => (/* binding */ createNameLabel),
/* harmony export */   createProvenance: () => (/* binding */ createProvenance),
/* harmony export */   createSwitches: () => (/* binding */ createSwitches)
/* harmony export */ });
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./srcjs/modules/utils/css/style.css");
/** Import dependencies */
// styling


/**
 * Add a tool tip.
 * @param {HTMLElement} element - HTML element that requires a tool tip.;
 * @param {string} text - Text to display in tool tip.
 * @return {void}
 */
function addTooltip(element, text) {
  element.setAttribute("data-toggle", "tooltip");
  element.setAttribute("data-placement", "top");
  element.setAttribute("data-container", "body");
  element.setAttribute("title", text);
}

/**
 * Create a provenance.
 * @param {object} x - Object with properties for customization.
 * @param {string} x.description - Text to display in tool tip.
 * @param {string} x.icon - Name of Font Awesome icon.
 * @param {string} x.color - Color for icon.
 * @return {HTMLElement}
 */
function createProvenance(x) {
  let el = document.createElement("i");
  el.classList.add("provenance");
  if (typeof(x.description) === "string") {
    addTooltip(el, x.description);
  }
  el.classList.add("fas");
  el.classList.add("fa-" + x.icon);
  el.style.color = x.color;
  return el;
}

/**
 * Create a name label.
 * @param {object} x - Object with properties for customization.
 * @param {string} x.description - Text to display in tool tip.
 * @param {string} x.icon - Name of Font Awesome icon.
 * @param {string} x.color - Color for icon.
 * @return {HTMLElement}
 */
function createNameLabel(x) {
  // create element
  let el = document.createElement("label");
  el.classList.add("name-label");
  // set layer name
  el.innerText = x.name;
  // initialize popup text
  let title = "";
  // if needed, add theme information to popup text
  if (typeof(x.themes) === "object") {
    title += `This ${x.class} belongs to the following themes:`;
    title += ` ${x.themes[0].name} (${x.themes[0].zone} zone)`;
    for (let i = 1; i < x.themes.length; ++i) {
      title += `, ${x.themes[i].name} (${x.themes[i].zone} zone)`;
    }
  }
  // if needed, add details to popup text
  if (typeof(x.layer) === "object" && typeof(x.layer.details) === "string") {
    if (title.length > 0) {
      title += " ";
    }
    title += x.layer.details;
  }
  // if needed, initialize popup
  if (title.length > 0) {
    addTooltip(el, title + ".");
  }
  // return element
  return el;
}

/**
 * Create a handle.
 * @param {string} description - Text to display in tool tip.
 * @return {HTMLElement}
 */
function createHandle(description) {
  // create element
  let el = document.createElement("div");
  el.classList.add("handle");
  // create icon
  let icon = document.createElement("i");
  if (typeof(description) === "string") {
    addTooltip(el, description);
  }
  icon.classList.add("fas", "fa-arrows-alt");
  icon.style.color = "--handle";
  // append icon to element
  el.appendChild(icon);
  // return element
  return el;
}

/**
 * Create a set of switches
 * @param {number} n - Number of switches to create.
 * @return {HTMLElement}
 */
function createSwitches(n = 1, checked = true) {
  // create container
  let el = document.createElement("div");
  el.classList.add("switches");
  // create switches
  for (let i = 0; i < n; ++i) {
    // create switch form
    let form = document.createElement("div");
    form.classList.add("form-check", "form-switch", "p-0", "m-0");
    // create switch input
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.classList.add("form-check-input", "switch", "ms-0");
    input.setAttribute("role", "switch");
    input.checked = checked;
    // append element
    form.appendChild(input);
    el.appendChild(form);
  }
  // return element
  return el;
}

/**
 * Create button group
 * @param {Array<string>} groupLabels - Label for each button group.
 * @param {Array<string>} buttonLabels - Label for each of the buttons.
 * @param {Array<string>} groupColors - Colors for group labels.
 * @param {Array<Array<string>>} tooltipLabels - Labels for tooltips.
 * @return {HTMLElement}
 */
function createButtonGroups(
  groupLabels, buttonLabels, groupColors, tooltipLabels
) {
  // create container
  let el = document.createElement("div");
  el.classList.add("button-groups", "border", "rounded");
  // add each group
  for (let i = 0; i < groupLabels.length; ++i) {
    // create button group
    let group = document.createElement("div");
    group.classList.add("btn-group");
    // add buttons to container
    for (let j = 0; j < buttonLabels.length; ++j) {
      // create button text
      let span = document.createElement("span");
      span.innerText = buttonLabels[j];
      // create button
      let btn = document.createElement("button");
      btn.classList.add("btn", "btn-sm");
      btn.setAttribute("data-group-index", i);
      btn.setAttribute("data-group-label", groupLabels[i]);
      btn.setAttribute("data-label", buttonLabels[j]);
      btn.style.backgroundColor = groupColors[i];
      addTooltip(btn, tooltipLabels[i][j]);
      // append elements
      btn.appendChild(span);
      group.appendChild(btn);
    }
    // add to group to container
    el.appendChild(group);
  }
  // return element;
  return el;
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
/******/ 			// no module.id needed
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
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./srcjs/exts/sidebar/sidebar.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class.js */ "./srcjs/exts/sidebar/class.js");
/** Import dependencies */
// classes to create components


/**
 * Initialize a mapgl sidebar.
 * @param {object} el - HTML element.
 * @param {string} id - HTML element identifier for sidebar.
 * @param {string} height - Height for sidebar (e.g., `"400px"`).
 * @param {object} options - Options for customizing the sidebar.
 * @param {string} options.position - Position for sidebar. Acceptable
 * values include `"top-left"` and `"top-right"`.
 * @param {string} options.selected - HTML identifier for the sidebar pane
 * to have open by default.
 * @return {void}
 */
Shiny.mapglSidebarInitialize = function(el, id, height, options) {
  // initialize widget
  let w = new _class_js__WEBPACK_IMPORTED_MODULE_0__.MapSidebar(document.getElementById(id), height, options);
  // add to map
  el.map.addControl(w, options.position);
  // open selected sidebar
  if (typeof(options.selected) === "string") {
    Shiny.initializedPromise.then(() => {
      setTimeout(() => {w.open(options.selected)}, 1000);
    });
  }
}

/**
 * Shiny handler for opening a sidebar pane on a mapgl map.
 * @param {object} message - Message from Shiny.
 * @param {string} message.id - HTML identifier for the map
 * @param {string} message.pane_id - HTML identifier for the sidebar pane.
 * @return {void}
 */
Shiny.addCustomMessageHandler("sidebar:open", function(message) {
  let el = document.getElementById(message.id);
  if (el) {
    el.widget.open(message.pane_id);
  }
})

/**
 * Shiny handler for closing any sidebar panes on a mapgl map.
 * @param {object} message - Message from Shiny.
 * @param {string} message.id - HTML identifier for the map
 * @return {void}
 */
Shiny.addCustomMessageHandler("sidebar:close", function(message) {
  let el = document.getElementById(message.id);
  if (el) {
    el.widget.close();
  }
})

/**
 * Shiny handler for enabling a menu button for a sidebar pane on a mapgl map.
 * @param {object} message - Message from Shiny.
 * @param {string} message.id - HTML identifier for the map
 * @param {string} message.pane_id - HTML identifier for the sidebar pane.
 * @return {void}
 */
Shiny.addCustomMessageHandler("sidebar:enable", function(message) {
  let el = document.getElementById(message.id);
  if (el) {
    el.widget.enable(message.pane_id);
  }
})

/**
 * Shiny handler for disabling a menu button for a sidebar pane on a mapgl map.
 * @param {object} message - Message from Shiny.
 * @param {string} message.id - HTML identifier for the map
 * @param {string} message.pane_id - HTML identifier for the sidebar pane.
 * @return {void}
 */
Shiny.addCustomMessageHandler("sidebar:disable", function(message) {
  let el = document.getElementById(message.id);
  if (el) {
    el.widget.disable(message.pane_id);
  }
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Fwc2NwLy4vc3JjanMvZXh0cy9zaWRlYmFyL2Nzcy9zdHlsZS5jc3M/ZDM2NiIsIndlYnBhY2s6Ly9hcHNjcC8uL3NyY2pzL21vZHVsZXMvdXRpbHMvY3NzL3N0eWxlLmNzcz9kM2E4Iiwid2VicGFjazovL2Fwc2NwLy4vc3JjanMvZXh0cy9zaWRlYmFyL2NsYXNzLmpzIiwid2VicGFjazovL2Fwc2NwLy4vc3JjanMvbW9kdWxlcy91dGlscy9lbGVtZW50LmpzIiwid2VicGFjazovL2Fwc2NwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Fwc2NwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hcHNjcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Fwc2NwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy9leHRzL3NpZGViYXIvc2lkZWJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKiogSW1wb3J0IGRlcGVuZGVuY2llcyAqL1xuLy8gc3R5bGluZ1xuaW1wb3J0IFwiLi9jc3Mvc3R5bGUuY3NzXCI7XG5pbXBvcnQge2FkZFRvb2x0aXB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3V0aWxzL2VsZW1lbnQuanNcIjtcblxuLyoqIENsYXNzIHJlcHJlc2VudGluZyBhIG1hcCBzaWRlYmFyLiAqL1xuZXhwb3J0IGNsYXNzIE1hcFNpZGViYXIge1xuXG4gIC8vIHB1YmxpYyBmaWVsZHNcbiAgb3B0aW9ucztcbiAgZWxlbWVudDtcblxuICAvLyBwcml2YXRlIGZpZWxkc1xuICBfaGVpZ2h0O1xuICBfbWFwO1xuICBfcGFuZUNvbnRhaW5lcjtcbiAgX3RhYnM7XG4gIF9wYW5lcztcbiAgX2Nsb3NlQnV0dG9ucztcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBhIG5ldyBzaWRlYmFyIG9iamVjdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGVsZW1lbnQgLSBIVE1MIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoZWlnaHQgLSBIZWlnaHQgZm9yIHNpZGViYXIgKGUuZy4sIGBcIjQwMHB4XCJgKS5cbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zIGZvciBjdXN0b21pemluZyB0aGUgc2lkZWJhci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMucG9zaXRpb24gLSBQb3NpdGlvbiBmb3Igc2lkZWJhci4gQWNjZXB0YWJsZVxuICAgKiB2YWx1ZXMgaW5jbHVkZSBgXCJ0b3AtbGVmdFwiYCBhbmQgYFwidG9wLXJpZ2h0XCJgLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgLy8gc2V0IGZpZWxkc1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XG4gICAgLy8gZGVjbGFyZSB0ZW1wb3JhcnkgdmFyaWFibGVzXG4gICAgdmFyIGksIGNoaWxkO1xuICAgIC8vIGFkZCBoZWlnaHQgdG8gc2lkZWJhclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgLy8gYWRkIHNpZGViYXIgbGVmdC9yaWdodCBjbGFzc1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFxuICAgICAgXCJtYXBzaWRlYmFyLVwiICtcbiAgICAgICh0aGlzLm9wdGlvbnMucG9zaXRpb24uaW5jbHVkZXMoXCJsZWZ0XCIpID8gXCJsZWZ0XCIgOiBcInJpZ2h0XCIpXG4gICAgKTtcbiAgICAvLyBhZGQgbWFwIGJveCBjb250cm9sIGNsYXNzXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtYXBib3hnbC1jdHJsXCIpO1xuICAgIC8vIGlmIG5lZWRlZCwgYWRkIHRvdWNoIHN0eWxpbmdcbiAgICBpZiAoXG4gICAgICBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwIHx8XG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYShcIihwb2ludGVyOiBjb2Fyc2UpXCIpLm1hdGNoZXNcbiAgICApIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWFwLXRvdWNoXCIpO1xuICAgIH1cbiAgICAvLyBmaW5kIHNpZGViYXIgY29udGVudFxuICAgIGZvciAoaSA9IHRoaXMuZWxlbWVudC5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY2hpbGQgPSB0aGlzLmVsZW1lbnQuY2hpbGRyZW5baV07XG4gICAgICBpZiAoXG4gICAgICAgIGNoaWxkLnRhZ05hbWUgPT0gXCJESVZcIiAmJlxuICAgICAgICBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJtYXBzaWRlYmFyLWNvbnRlbnRcIilcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9wYW5lQ29udGFpbmVyID0gY2hpbGQ7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGZpbmQgdGFiIGl0ZW1zXG4gICAgdGhpcy5fdGFicyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCJ1bC5tYXBzaWRlYmFyLXRhYnMgPiBsaSwgLm1hcHNpZGViYXItdGFicyA+IHVsID4gbGlcIlxuICAgICk7XG4gICAgZm9yIChpID0gdGhpcy5fdGFicy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdGhpcy5fdGFic1tpXS5zaWRlYmFyID0gdGhpcztcbiAgICB9XG4gICAgLy8gZmluZCBzaWRlYmFyIHBhbmVzIGFuZCBjbG9zZSBidXR0b25zXG4gICAgdGhpcy5fcGFuZXMgPSBbXTtcbiAgICB0aGlzLl9jbG9zZUJ1dHRvbnMgPSBbXTtcbiAgICBmb3IgKGkgPSB0aGlzLl9wYW5lQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjaGlsZCA9IHRoaXMuX3BhbmVDb250YWluZXIuY2hpbGRyZW5baV07XG4gICAgICBpZiAoXG4gICAgICAgIGNoaWxkLnRhZ05hbWUgPT0gXCJESVZcIiAmJlxuICAgICAgICBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJtYXBzaWRlYmFyLXBhbmVcIilcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9wYW5lcy5wdXNoKGNoaWxkKTtcbiAgICAgICAgdmFyIGNsb3NlX2J1dHRvbnMgPSBjaGlsZC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1hcHNpZGViYXItY2xvc2VcIik7XG4gICAgICAgIGZvciAodmFyIGogPSAwLCBsZW4gPSBjbG9zZV9idXR0b25zLmxlbmd0aDsgaiA8IGxlbjsgaisrKVxuICAgICAgICAgIHRoaXMuX2Nsb3NlQnV0dG9ucy5wdXNoKGNsb3NlX2J1dHRvbnNbal0pO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBzdG9yZSBKUyBvYmplY3QgYXMgZmllbGQgc28gQVBJIGNhbiBhY2Nlc3MgaXRcbiAgICB0aGlzLmVsZW1lbnQud2lkZ2V0ID0gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYW5kIGRpc3BsYXkgYSBzaWRlYmFyIHRvIGEgTWFwYm94Z2wgbWFwLlxuICAgKiBAcGFyYW0ge29iamVjdH0gbWFwIC0gTWFwYm94Z2wgTWFwIG9iamVjdC5cbiAgICogQHJldHVybiB7b2JqZWN0fSBTaWRlYmFyIG9iamVjdC5cbiAgICovXG4gIG9uQWRkKG1hcCkge1xuICAgIC8vIGRlY2xhcmUgdGVtcG9yYXJ5IHZhcmlhYmxlc1xuICAgIHZhciBpLCBjaGlsZDtcbiAgICAvLyBzZXQgbWFwIGZpZWxkXG4gICAgdGhpcy5fbWFwID0gbWFwO1xuICAgIC8vIGFkZCBjc3MgY2xhc3Mgc2lkZWJhci1tYXAgdG8gbWFwXG4gICAgaWYgKCFtYXAuX2NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJzaWRlYmFyLW1hcFwiKSkge1xuICAgICAgbWFwLl9jb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXItbWFwXCIpO1xuICAgIH1cbiAgICAvLyBpZiBuZWVkZWQsIGFkZCB0b29sdGlwcyBmb3IgZWFjaCBwYW5lXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90YWJzLmxlbmd0aDsgKytpKSB7XG4gICAgICBsZXQgc3ViID0gdGhpcy5fdGFic1tpXS5xdWVyeVNlbGVjdG9yKFwiYVwiKTtcbiAgICAgIGxldCB0b29sdGlwID0gdGhpcy5fcGFuZXNbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS10b29sdGlwXCIpO1xuICAgICAgaWYgKHR5cGVvZih0b29sdGlwKSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBhZGRUb29sdGlwKHN1YiwgdG9vbHRpcClcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gaWYgaGVpZ2h0IGlzIGEgcGVyY2VudGFnZSwgdGhlbiBtb2RpZnkgY29udHJvbCBwb3NpdGlvbiBjb250YWluZXJcbiAgICBpZiAodGhpcy5faGVpZ2h0LmVuZHNXaXRoKFwiJVwiKSkge1xuICAgICAgY2hpbGQgPSBtYXAuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi5tYXBib3hnbC1jdHJsLVwiICsgdGhpcy5vcHRpb25zLnBvc2l0aW9uXG4gICAgICApXG4gICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgY2hpbGQuc3R5bGUuaGVpZ2h0ID0gXCJjYWxjKDEwMCUgLSA1MHB4KVwiO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBhZGQgY2xpY2sgZXZlbnRzIHNvIHRoYXQgY2xpY2tpbmcgb24gaWNvbnMgd2lsbCBvcGVuIGFuZCBjbG9zZSBwYW5lc1xuICAgIHRoaXMuX3RhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICBsZXQgc3ViID0gdGFiLnF1ZXJ5U2VsZWN0b3IoXCJhXCIpO1xuICAgICAgaWYgKFxuICAgICAgICBzdWIuaGFzQXR0cmlidXRlKFwiaHJlZlwiKSAmJlxuICAgICAgICBzdWIuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zbGljZSgwLCAxKSA9PSBcIiNcIlxuICAgICAgKSB7XG4gICAgICAgIHN1Yi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGFiLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZWRcIikpIHtcbiAgICAgICAgICAgICAgdGhpcy5vcGVuKHRhYi5xdWVyeVNlbGVjdG9yKFwiYVwiKS5oYXNoLnNsaWNlKDEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gYWRkIGNsaWNrIGV2ZW50cyBzbyB0aGF0IGNsaWNraW5nIG9uIGNsb3NlIGJ1dHRvbnMgd2lsbCBjbG9zZSBwYW5lc1xuICAgIHRoaXMuX2Nsb3NlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5jbG9zZSgpKTtcbiAgICB9KTtcbiAgICAvLyBzaG93IHNpZGViYXIgYW5kIGNvbnRlbnRcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAkKFwiLm1hcHNpZGViYXIuY29sbGFwc2VkIC5tYXBzaWRlYmFyLXRhYnMsIC5tYXBzaWRlYmFyLmNvbGxhcHNlZCAubWFwc2lkZWJhci1jb250ZW50LCAubWFwc2lkZWJhci5jb2xsYXBzZWRcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgIH0sIDQwMCk7XG4gICAgLy8gcmV0dXJuIG9iamVjdFxuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHNpZGViYXIgZnJvbSBhIE1hcGJveGdsIG1hcC5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIG9uUmVtb3ZlKCkge1xuICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgdGhpcy5fbWFwID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gc2lkZWJhciBwYW5lLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFuZV9pZCAtIEhUTUwgaWRlbnRpZmllciBmb3Igc2lkZWJhciBwYW5lLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgb3BlbihwYW5lX2lkKSB7XG4gICAgLy8gZGVjbGFyZSB0ZW1wb3JhcnkgdmFyaWFibGVzXG4gICAgdmFyIGksIGNoaWxkO1xuICAgIC8vIGhpZGUgb2xkIGFjdGl2ZSBjb250ZW50cyBhbmQgc2hvdyBuZXcgY29udGVudFxuICAgIGZvciAoaSA9IHRoaXMuX3BhbmVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjaGlsZCA9IHRoaXMuX3BhbmVzW2ldO1xuICAgICAgaWYgKGNoaWxkLmlkID09IHBhbmVfaWQpIHtcbiAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHJlbW92ZSBvbGQgYWN0aXZlIGhpZ2hsaWdodHMgYW5kIHNldCBuZXcgaGlnaGxpZ2h0XG4gICAgZm9yIChpID0gdGhpcy5fdGFicy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgIGNoaWxkID0gdGhpcy5fdGFic1tpXTtcbiAgICAgIGlmIChjaGlsZC5xdWVyeVNlbGVjdG9yKFwiYVwiKS5oYXNoLnNsaWNlKDEpID09PSBwYW5lX2lkKSB7XG4gICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBpZiBuZWVkZWQsIG9wZW4gc2lkZWJhclxuICAgIGlmICh0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29sbGFwc2VkXCIpKSB7XG4gICAgICB2YXIgcG9zID0gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIm1hcHNpZGViYXItbGVmdFwiKSA/XG4gICAgICAgIFwiLm1hcC1sZWZ0XCIgOiBcIi5tYXAtcmlnaHRcIjtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKHBvcylcbiAgICAgICAgLmZvckVhY2goZSA9PiB7ZS5jbGFzc0xpc3QuYWRkKFwiZXh0ZW5kZWRcIil9KTtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY29sbGFwc2VkXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZSBhbnkgc2lkZWJhciBwYW5lcyB0aGF0IGFyZSBvcGVuLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgY2xvc2UoKSB7XG4gICAgLy8gZGVjbGFyZSB0ZW1wb3JhcnkgdmFyaWFibGVzXG4gICAgdmFyIGksIGNoaWxkO1xuICAgIC8vIHJlbW92ZSBvbGQgYWN0aXZlIGhpZ2hsaWdodHNcbiAgICBmb3IgKGkgPSB0aGlzLl90YWJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB0aGlzLl90YWJzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICAgIC8vIGlmIG5lZWRlZCwgY2xvc2Ugc2lkZWJhclxuICAgIGlmICghdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImNvbGxhcHNlZFwiKSkge1xuICAgICAgdmFyIHBvcyA9IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJtYXBzaWRlYmFyLWxlZnRcIikgP1xuICAgICAgICBcIi5tYXAtbGVmdFwiIDogXCIubWFwLXJpZ2h0XCI7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbChwb3MpXG4gICAgICAgIC5mb3JFYWNoKGUgPT4ge2UuY2xhc3NMaXN0LnJlbW92ZShcImV4dGVuZGVkXCIpfSk7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNvbGxhcHNlZFwiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIHRoZSBtZW51IGJ1dHRvbiBmb3Igb3BlbmluZyBhIHNpZGViYXIgcGFuZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhbmVfaWQgLSBIVE1MIGlkZW50aWZpZXIgZm9yIHNpZGViYXIgcGFuZS5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGVuYWJsZShwYW5lX2lkKSB7XG4gICAgLy8gZGVjbGFyZSB0ZW1wb3JhcnkgdmFyaWFibGVzXG4gICAgdmFyIGksIGNoaWxkO1xuICAgIC8vIGVuYWJsZSB0YWJcbiAgICBmb3IgKGkgPSB0aGlzLl90YWJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjaGlsZCA9IHRoaXMuX3RhYnNbaV07XG4gICAgICBpZiAoY2hpbGQucXVlcnlTZWxlY3RvcihcImFcIikuaGFzaC5zbGljZSgxKSA9PT0gcGFuZV9pZCkge1xuICAgICAgICAvLyBmb3VuZCB0aGUgZGVzaXJlZCB0YWIsIHNvIGVuYWJsZSBpdFxuICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIC8vIHNpbmNlIG9ubHkgb25lIHRhYiBpcyBiZWluZyBlbmFibGVkLCBleGl0IGVhcmx5XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHRoZSBtZW51IGJ1dHRvbiBmb3Igb3BlbmluZyBhIHNpZGViYXIgcGFuZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhbmVfaWQgLSBIVE1MIGlkZW50aWZpZXIgZm9yIHNpZGViYXIgcGFuZS5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGRpc2FibGUocGFuZV9pZCkge1xuICAgIC8vIGRlY2xhcmUgdGVtcG9yYXJ5IHZhcmlhYmxlc1xuICAgIHZhciBpLCBjaGlsZDtcbiAgICAvLyBkaXNhYmxlIHRhYlxuICAgIGZvciAoaSA9IHRoaXMuX3RhYnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNoaWxkID0gdGhpcy5fdGFic1tpXTtcbiAgICAgIGlmIChjaGlsZC5xdWVyeVNlbGVjdG9yKFwiYVwiKS5oYXNoLnNsaWNlKDEpID09PSBwYW5lX2lkKSB7XG4gICAgICAgIC8vIGZvdW5kIHRoZSBkZXNpcmVkIHRhYiwgc28gdGhlbi4uLlxuICAgICAgICAvLyBpZiB0YWIgaXMgYWN0aXZlLCB0aGVuIGNsb3NlIGl0XG4gICAgICAgIGlmIChjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlKHBhbmVfaWQpXG4gICAgICAgIH1cbiAgICAgICAgLy8gZGlzYWJsZSB0aGUgdGFiXG4gICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgLy8gc2luY2Ugb25seSBvbmUgdGFiIGlzIGJlaW5nIGRpc2FibGVkLCBleGl0IGVhcmx5XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLyoqIEltcG9ydCBkZXBlbmRlbmNpZXMgKi9cbi8vIHN0eWxpbmdcbmltcG9ydCBcIi4vY3NzL3N0eWxlLmNzc1wiO1xuXG4vKipcbiAqIEFkZCBhIHRvb2wgdGlwLlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIEhUTUwgZWxlbWVudCB0aGF0IHJlcXVpcmVzIGEgdG9vbCB0aXAuO1xuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IHRvIGRpc3BsYXkgaW4gdG9vbCB0aXAuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9vbHRpcChlbGVtZW50LCB0ZXh0KSB7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10b2dnbGVcIiwgXCJ0b29sdGlwXCIpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtcGxhY2VtZW50XCIsIFwidG9wXCIpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtY29udGFpbmVyXCIsIFwiYm9keVwiKTtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCB0ZXh0KTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBwcm92ZW5hbmNlLlxuICogQHBhcmFtIHtvYmplY3R9IHggLSBPYmplY3Qgd2l0aCBwcm9wZXJ0aWVzIGZvciBjdXN0b21pemF0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IHguZGVzY3JpcHRpb24gLSBUZXh0IHRvIGRpc3BsYXkgaW4gdG9vbCB0aXAuXG4gKiBAcGFyYW0ge3N0cmluZ30geC5pY29uIC0gTmFtZSBvZiBGb250IEF3ZXNvbWUgaWNvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSB4LmNvbG9yIC0gQ29sb3IgZm9yIGljb24uXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb3ZlbmFuY2UoeCkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgZWwuY2xhc3NMaXN0LmFkZChcInByb3ZlbmFuY2VcIik7XG4gIGlmICh0eXBlb2YoeC5kZXNjcmlwdGlvbikgPT09IFwic3RyaW5nXCIpIHtcbiAgICBhZGRUb29sdGlwKGVsLCB4LmRlc2NyaXB0aW9uKTtcbiAgfVxuICBlbC5jbGFzc0xpc3QuYWRkKFwiZmFzXCIpO1xuICBlbC5jbGFzc0xpc3QuYWRkKFwiZmEtXCIgKyB4Lmljb24pO1xuICBlbC5zdHlsZS5jb2xvciA9IHguY29sb3I7XG4gIHJldHVybiBlbDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuYW1lIGxhYmVsLlxuICogQHBhcmFtIHtvYmplY3R9IHggLSBPYmplY3Qgd2l0aCBwcm9wZXJ0aWVzIGZvciBjdXN0b21pemF0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IHguZGVzY3JpcHRpb24gLSBUZXh0IHRvIGRpc3BsYXkgaW4gdG9vbCB0aXAuXG4gKiBAcGFyYW0ge3N0cmluZ30geC5pY29uIC0gTmFtZSBvZiBGb250IEF3ZXNvbWUgaWNvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSB4LmNvbG9yIC0gQ29sb3IgZm9yIGljb24uXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5hbWVMYWJlbCh4KSB7XG4gIC8vIGNyZWF0ZSBlbGVtZW50XG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZWwuY2xhc3NMaXN0LmFkZChcIm5hbWUtbGFiZWxcIik7XG4gIC8vIHNldCBsYXllciBuYW1lXG4gIGVsLmlubmVyVGV4dCA9IHgubmFtZTtcbiAgLy8gaW5pdGlhbGl6ZSBwb3B1cCB0ZXh0XG4gIGxldCB0aXRsZSA9IFwiXCI7XG4gIC8vIGlmIG5lZWRlZCwgYWRkIHRoZW1lIGluZm9ybWF0aW9uIHRvIHBvcHVwIHRleHRcbiAgaWYgKHR5cGVvZih4LnRoZW1lcykgPT09IFwib2JqZWN0XCIpIHtcbiAgICB0aXRsZSArPSBgVGhpcyAke3guY2xhc3N9IGJlbG9uZ3MgdG8gdGhlIGZvbGxvd2luZyB0aGVtZXM6YDtcbiAgICB0aXRsZSArPSBgICR7eC50aGVtZXNbMF0ubmFtZX0gKCR7eC50aGVtZXNbMF0uem9uZX0gem9uZSlgO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgeC50aGVtZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHRpdGxlICs9IGAsICR7eC50aGVtZXNbaV0ubmFtZX0gKCR7eC50aGVtZXNbaV0uem9uZX0gem9uZSlgO1xuICAgIH1cbiAgfVxuICAvLyBpZiBuZWVkZWQsIGFkZCBkZXRhaWxzIHRvIHBvcHVwIHRleHRcbiAgaWYgKHR5cGVvZih4LmxheWVyKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YoeC5sYXllci5kZXRhaWxzKSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGlmICh0aXRsZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aXRsZSArPSBcIiBcIjtcbiAgICB9XG4gICAgdGl0bGUgKz0geC5sYXllci5kZXRhaWxzO1xuICB9XG4gIC8vIGlmIG5lZWRlZCwgaW5pdGlhbGl6ZSBwb3B1cFxuICBpZiAodGl0bGUubGVuZ3RoID4gMCkge1xuICAgIGFkZFRvb2x0aXAoZWwsIHRpdGxlICsgXCIuXCIpO1xuICB9XG4gIC8vIHJldHVybiBlbGVtZW50XG4gIHJldHVybiBlbDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBoYW5kbGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb24gLSBUZXh0IHRvIGRpc3BsYXkgaW4gdG9vbCB0aXAuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhhbmRsZShkZXNjcmlwdGlvbikge1xuICAvLyBjcmVhdGUgZWxlbWVudFxuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbC5jbGFzc0xpc3QuYWRkKFwiaGFuZGxlXCIpO1xuICAvLyBjcmVhdGUgaWNvblxuICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBpZiAodHlwZW9mKGRlc2NyaXB0aW9uKSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGFkZFRvb2x0aXAoZWwsIGRlc2NyaXB0aW9uKTtcbiAgfVxuICBpY29uLmNsYXNzTGlzdC5hZGQoXCJmYXNcIiwgXCJmYS1hcnJvd3MtYWx0XCIpO1xuICBpY29uLnN0eWxlLmNvbG9yID0gXCItLWhhbmRsZVwiO1xuICAvLyBhcHBlbmQgaWNvbiB0byBlbGVtZW50XG4gIGVsLmFwcGVuZENoaWxkKGljb24pO1xuICAvLyByZXR1cm4gZWxlbWVudFxuICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgc2V0IG9mIHN3aXRjaGVzXG4gKiBAcGFyYW0ge251bWJlcn0gbiAtIE51bWJlciBvZiBzd2l0Y2hlcyB0byBjcmVhdGUuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN3aXRjaGVzKG4gPSAxLCBjaGVja2VkID0gdHJ1ZSkge1xuICAvLyBjcmVhdGUgY29udGFpbmVyXG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsLmNsYXNzTGlzdC5hZGQoXCJzd2l0Y2hlc1wiKTtcbiAgLy8gY3JlYXRlIHN3aXRjaGVzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgLy8gY3JlYXRlIHN3aXRjaCBmb3JtXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImZvcm0tY2hlY2tcIiwgXCJmb3JtLXN3aXRjaFwiLCBcInAtMFwiLCBcIm0tMFwiKTtcbiAgICAvLyBjcmVhdGUgc3dpdGNoIGlucHV0XG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jaGVjay1pbnB1dFwiLCBcInN3aXRjaFwiLCBcIm1zLTBcIik7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcInN3aXRjaFwiKTtcbiAgICBpbnB1dC5jaGVja2VkID0gY2hlY2tlZDtcbiAgICAvLyBhcHBlbmQgZWxlbWVudFxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGVsLmFwcGVuZENoaWxkKGZvcm0pO1xuICB9XG4gIC8vIHJldHVybiBlbGVtZW50XG4gIHJldHVybiBlbDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYnV0dG9uIGdyb3VwXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGdyb3VwTGFiZWxzIC0gTGFiZWwgZm9yIGVhY2ggYnV0dG9uIGdyb3VwLlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBidXR0b25MYWJlbHMgLSBMYWJlbCBmb3IgZWFjaCBvZiB0aGUgYnV0dG9ucy5cbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gZ3JvdXBDb2xvcnMgLSBDb2xvcnMgZm9yIGdyb3VwIGxhYmVscy5cbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8c3RyaW5nPj59IHRvb2x0aXBMYWJlbHMgLSBMYWJlbHMgZm9yIHRvb2x0aXBzLlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCdXR0b25Hcm91cHMoXG4gIGdyb3VwTGFiZWxzLCBidXR0b25MYWJlbHMsIGdyb3VwQ29sb3JzLCB0b29sdGlwTGFiZWxzXG4pIHtcbiAgLy8gY3JlYXRlIGNvbnRhaW5lclxuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbC5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLWdyb3Vwc1wiLCBcImJvcmRlclwiLCBcInJvdW5kZWRcIik7XG4gIC8vIGFkZCBlYWNoIGdyb3VwXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JvdXBMYWJlbHMubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBjcmVhdGUgYnV0dG9uIGdyb3VwXG4gICAgbGV0IGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBncm91cC5jbGFzc0xpc3QuYWRkKFwiYnRuLWdyb3VwXCIpO1xuICAgIC8vIGFkZCBidXR0b25zIHRvIGNvbnRhaW5lclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYnV0dG9uTGFiZWxzLmxlbmd0aDsgKytqKSB7XG4gICAgICAvLyBjcmVhdGUgYnV0dG9uIHRleHRcbiAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBzcGFuLmlubmVyVGV4dCA9IGJ1dHRvbkxhYmVsc1tqXTtcbiAgICAgIC8vIGNyZWF0ZSBidXR0b25cbiAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIiwgXCJidG4tc21cIik7XG4gICAgICBidG4uc2V0QXR0cmlidXRlKFwiZGF0YS1ncm91cC1pbmRleFwiLCBpKTtcbiAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWdyb3VwLWxhYmVsXCIsIGdyb3VwTGFiZWxzW2ldKTtcbiAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWxhYmVsXCIsIGJ1dHRvbkxhYmVsc1tqXSk7XG4gICAgICBidG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZ3JvdXBDb2xvcnNbaV07XG4gICAgICBhZGRUb29sdGlwKGJ0biwgdG9vbHRpcExhYmVsc1tpXVtqXSk7XG4gICAgICAvLyBhcHBlbmQgZWxlbWVudHNcbiAgICAgIGJ0bi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgIGdyb3VwLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgfVxuICAgIC8vIGFkZCB0byBncm91cCB0byBjb250YWluZXJcbiAgICBlbC5hcHBlbmRDaGlsZChncm91cCk7XG4gIH1cbiAgLy8gcmV0dXJuIGVsZW1lbnQ7XG4gIHJldHVybiBlbDtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbmNvbnN0IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0Y29uc3QgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdGNvbnN0IG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0bGV0IHRocmV3ID0gdHJ1ZTtcblx0dHJ5IHtcblx0XHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0XHRjb25zdCBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9XG5cdFx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdFx0dGhyZXcgPSBmYWxzZTtcblx0fSBmaW5hbGx5IHtcblx0XHRpZih0aHJldykgZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIvdmFsdWUgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGlmKEFycmF5LmlzQXJyYXkoZGVmaW5pdGlvbikpIHtcblx0XHR2YXIgaSA9IDA7XG5cdFx0d2hpbGUoaSA8IGRlZmluaXRpb24ubGVuZ3RoKSB7XG5cdFx0XHR2YXIga2V5ID0gZGVmaW5pdGlvbltpKytdO1xuXHRcdFx0dmFyIGJpbmRpbmcgPSBkZWZpbml0aW9uW2krK107XG5cdFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdFx0aWYoYmluZGluZyA9PT0gMCkge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IGRlZmluaXRpb25baSsrXSB9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogYmluZGluZyB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmKGJpbmRpbmcgPT09IDApIHsgaSsrOyB9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYoU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqIEltcG9ydCBkZXBlbmRlbmNpZXMgKi9cbi8vIGNsYXNzZXMgdG8gY3JlYXRlIGNvbXBvbmVudHNcbmltcG9ydCB7TWFwU2lkZWJhcn0gZnJvbSBcIi4vY2xhc3MuanNcIlxuXG4vKipcbiAqIEluaXRpYWxpemUgYSBtYXBnbCBzaWRlYmFyLlxuICogQHBhcmFtIHtvYmplY3R9IGVsIC0gSFRNTCBlbGVtZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IGlkIC0gSFRNTCBlbGVtZW50IGlkZW50aWZpZXIgZm9yIHNpZGViYXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gaGVpZ2h0IC0gSGVpZ2h0IGZvciBzaWRlYmFyIChlLmcuLCBgXCI0MDBweFwiYCkuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnMgZm9yIGN1c3RvbWl6aW5nIHRoZSBzaWRlYmFyLlxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMucG9zaXRpb24gLSBQb3NpdGlvbiBmb3Igc2lkZWJhci4gQWNjZXB0YWJsZVxuICogdmFsdWVzIGluY2x1ZGUgYFwidG9wLWxlZnRcImAgYW5kIGBcInRvcC1yaWdodFwiYC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdGVkIC0gSFRNTCBpZGVudGlmaWVyIGZvciB0aGUgc2lkZWJhciBwYW5lXG4gKiB0byBoYXZlIG9wZW4gYnkgZGVmYXVsdC5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cblNoaW55Lm1hcGdsU2lkZWJhckluaXRpYWxpemUgPSBmdW5jdGlvbihlbCwgaWQsIGhlaWdodCwgb3B0aW9ucykge1xuICAvLyBpbml0aWFsaXplIHdpZGdldFxuICBsZXQgdyA9IG5ldyBNYXBTaWRlYmFyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSwgaGVpZ2h0LCBvcHRpb25zKTtcbiAgLy8gYWRkIHRvIG1hcFxuICBlbC5tYXAuYWRkQ29udHJvbCh3LCBvcHRpb25zLnBvc2l0aW9uKTtcbiAgLy8gb3BlbiBzZWxlY3RlZCBzaWRlYmFyXG4gIGlmICh0eXBlb2Yob3B0aW9ucy5zZWxlY3RlZCkgPT09IFwic3RyaW5nXCIpIHtcbiAgICBTaGlueS5pbml0aWFsaXplZFByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHt3Lm9wZW4ob3B0aW9ucy5zZWxlY3RlZCl9LCAxMDAwKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIFNoaW55IGhhbmRsZXIgZm9yIG9wZW5pbmcgYSBzaWRlYmFyIHBhbmUgb24gYSBtYXBnbCBtYXAuXG4gKiBAcGFyYW0ge29iamVjdH0gbWVzc2FnZSAtIE1lc3NhZ2UgZnJvbSBTaGlueS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlLmlkIC0gSFRNTCBpZGVudGlmaWVyIGZvciB0aGUgbWFwXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZS5wYW5lX2lkIC0gSFRNTCBpZGVudGlmaWVyIGZvciB0aGUgc2lkZWJhciBwYW5lLlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoXCJzaWRlYmFyOm9wZW5cIiwgZnVuY3Rpb24obWVzc2FnZSkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtZXNzYWdlLmlkKTtcbiAgaWYgKGVsKSB7XG4gICAgZWwud2lkZ2V0Lm9wZW4obWVzc2FnZS5wYW5lX2lkKTtcbiAgfVxufSlcblxuLyoqXG4gKiBTaGlueSBoYW5kbGVyIGZvciBjbG9zaW5nIGFueSBzaWRlYmFyIHBhbmVzIG9uIGEgbWFwZ2wgbWFwLlxuICogQHBhcmFtIHtvYmplY3R9IG1lc3NhZ2UgLSBNZXNzYWdlIGZyb20gU2hpbnkuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZS5pZCAtIEhUTUwgaWRlbnRpZmllciBmb3IgdGhlIG1hcFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoXCJzaWRlYmFyOmNsb3NlXCIsIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWVzc2FnZS5pZCk7XG4gIGlmIChlbCkge1xuICAgIGVsLndpZGdldC5jbG9zZSgpO1xuICB9XG59KVxuXG4vKipcbiAqIFNoaW55IGhhbmRsZXIgZm9yIGVuYWJsaW5nIGEgbWVudSBidXR0b24gZm9yIGEgc2lkZWJhciBwYW5lIG9uIGEgbWFwZ2wgbWFwLlxuICogQHBhcmFtIHtvYmplY3R9IG1lc3NhZ2UgLSBNZXNzYWdlIGZyb20gU2hpbnkuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZS5pZCAtIEhUTUwgaWRlbnRpZmllciBmb3IgdGhlIG1hcFxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UucGFuZV9pZCAtIEhUTUwgaWRlbnRpZmllciBmb3IgdGhlIHNpZGViYXIgcGFuZS5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cblNoaW55LmFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyKFwic2lkZWJhcjplbmFibGVcIiwgZnVuY3Rpb24obWVzc2FnZSkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtZXNzYWdlLmlkKTtcbiAgaWYgKGVsKSB7XG4gICAgZWwud2lkZ2V0LmVuYWJsZShtZXNzYWdlLnBhbmVfaWQpO1xuICB9XG59KVxuXG4vKipcbiAqIFNoaW55IGhhbmRsZXIgZm9yIGRpc2FibGluZyBhIG1lbnUgYnV0dG9uIGZvciBhIHNpZGViYXIgcGFuZSBvbiBhIG1hcGdsIG1hcC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBtZXNzYWdlIC0gTWVzc2FnZSBmcm9tIFNoaW55LlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UuaWQgLSBIVE1MIGlkZW50aWZpZXIgZm9yIHRoZSBtYXBcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlLnBhbmVfaWQgLSBIVE1MIGlkZW50aWZpZXIgZm9yIHRoZSBzaWRlYmFyIHBhbmUuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5TaGlueS5hZGRDdXN0b21NZXNzYWdlSGFuZGxlcihcInNpZGViYXI6ZGlzYWJsZVwiLCBmdW5jdGlvbihtZXNzYWdlKSB7XG4gIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1lc3NhZ2UuaWQpO1xuICBpZiAoZWwpIHtcbiAgICBlbC53aWRnZXQuZGlzYWJsZShtZXNzYWdlLnBhbmVfaWQpO1xuICB9XG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9