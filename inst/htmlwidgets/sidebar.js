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
   * @param {Object} options - Options for customizing the sidebar.
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
 * @param {Object} el - HTML element.
 * @param {string} id - HTML element identifier for sidebar.
 * @param {string} height - Height for sidebar (e.g., `"400px"`).
 * @param {Object} options - Options for customizing the sidebar.
 * @param {string} options.position - Position for sidebar. Acceptable
 * values include `"top-left"` and `"top-right"`.
 * @param {string} options.selected - HTML identifier for the sidebar pane
 * to have open by default.
 * @return {void}
 */
Shiny.mapglSidebarInitialize = function(el, id, height, options) {
  let w = new _class_js__WEBPACK_IMPORTED_MODULE_0__.MapSidebar(document.getElementById(id), height, options);
  el.map.addControl(w, options.position);
  if (typeof(options.selected) === "string") {
    Shiny.initializedPromise.then(() => {
      setTimeout(() => {w.open(options.selected)}, 1000);
    });
  }
}

/**
 * Shiny handler for opening a sidebar pane on a mapgl map.
 * @param {Object} message - Message from Shiny.
 * @param {string} message.id - HTML identifier for the map
 * @param {string} message.pane_id - HTML identifier for the sidebar pane.
 * @return {void}
 */
Shiny.addCustomMessageHandler("sidebar:open", function(message) {
  let el = document.getElementById(message.id);
  if (el) {
    console.log("message.pane_id");
    console.log(message.pane_id);
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
  let el = document.getElementById(message.id);
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
  let el = document.getElementById(message.id);
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
  let el = document.getElementById(message.id);
  if (el) {
    el.widget.disable(message.pane_id);
  }
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy9leHRzL3NpZGViYXIvY3NzL3N0eWxlLmNzcz9kMzY2Iiwid2VicGFjazovL2Fwc2NwLy4vc3JjanMvZXh0cy9zaWRlYmFyL2NsYXNzLmpzIiwid2VicGFjazovL2Fwc2NwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Fwc2NwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hcHNjcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Fwc2NwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy9leHRzL3NpZGViYXIvc2lkZWJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKiogSW1wb3J0IGRlcGVuZGVuY2llcyAqL1xuLy8gc3R5bGluZ1xuaW1wb3J0IFwiLi9jc3Mvc3R5bGUuY3NzXCI7XG5cbi8qKiBDbGFzcyByZXByZXNlbnRpbmcgYSBtYXAgc2lkZWJhci4gKi9cbmV4cG9ydCBjbGFzcyBNYXBTaWRlYmFyIHtcblxuICAvLyBwdWJsaWMgZmllbGRzXG4gIG9wdGlvbnM7XG4gIGVsZW1lbnQ7XG5cbiAgLy8gcHJpdmF0ZSBmaWVsZHNcbiAgX2hlaWdodDtcbiAgX21hcDtcbiAgX3BhbmVDb250YWluZXI7XG4gIF90YWJzO1xuICBfcGFuZXM7XG4gIF9jbG9zZUJ1dHRvbnM7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgYSBuZXcgc2lkZWJhciBvYmplY3QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbGVtZW50IC0gSFRNTCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGVpZ2h0IC0gSGVpZ2h0IGZvciBzaWRlYmFyIChlLmcuLCBgXCI0MDBweFwiYCkuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gT3B0aW9ucyBmb3IgY3VzdG9taXppbmcgdGhlIHNpZGViYXIuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnBvc2l0aW9uIC0gUG9zaXRpb24gZm9yIHNpZGViYXIuIEFjY2VwdGFibGVcbiAgICogdmFsdWVzIGluY2x1ZGUgYFwidG9wLWxlZnRcImAgYW5kIGBcInRvcC1yaWdodFwiYC5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGhlaWdodCwgb3B0aW9ucykge1xuICAgIC8vIHNldCBmaWVsZHNcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xuICAgIC8vIGRlY2xhcmUgdGVtcG9yYXJ5IHZhcmlhYmxlc1xuICAgIHZhciBpLCBjaGlsZDtcbiAgICAvLyBhZGQgaGVpZ2h0IHRvIHNpZGViYXJcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIC8vIGFkZCBzaWRlYmFyIGxlZnQvcmlnaHQgY2xhc3NcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcbiAgICAgIFwibWFwc2lkZWJhci1cIiArXG4gICAgICAodGhpcy5vcHRpb25zLnBvc2l0aW9uLmluY2x1ZGVzKFwibGVmdFwiKSA/IFwibGVmdFwiIDogXCJyaWdodFwiKVxuICAgICk7XG4gICAgLy8gYWRkIG1hcCBib3ggY29udHJvbCBjbGFzc1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWFwYm94Z2wtY3RybFwiKTtcbiAgICAvLyBpZiBuZWVkZWQsIGFkZCB0b3VjaCBzdHlsaW5nXG4gICAgaWYgKFxuICAgICAgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMCB8fFxuICAgICAgd2luZG93Lm1hdGNoTWVkaWEoXCIocG9pbnRlcjogY29hcnNlKVwiKS5tYXRjaGVzXG4gICAgKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1hcC10b3VjaFwiKTtcbiAgICB9XG4gICAgLy8gZmluZCBzaWRlYmFyIGNvbnRlbnRcbiAgICBmb3IgKGkgPSB0aGlzLmVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNoaWxkID0gdGhpcy5lbGVtZW50LmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKFxuICAgICAgICBjaGlsZC50YWdOYW1lID09IFwiRElWXCIgJiZcbiAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWFwc2lkZWJhci1jb250ZW50XCIpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fcGFuZUNvbnRhaW5lciA9IGNoaWxkO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBmaW5kIHRhYiBpdGVtc1xuICAgIHRoaXMuX3RhYnMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwidWwubWFwc2lkZWJhci10YWJzID4gbGksIC5tYXBzaWRlYmFyLXRhYnMgPiB1bCA+IGxpXCJcbiAgICApO1xuICAgIGZvciAoaSA9IHRoaXMuX3RhYnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHRoaXMuX3RhYnNbaV0uc2lkZWJhciA9IHRoaXM7XG4gICAgfVxuICAgIC8vIGZpbmQgc2lkZWJhciBwYW5lcyBhbmQgY2xvc2UgYnV0dG9uc1xuICAgIHRoaXMuX3BhbmVzID0gW107XG4gICAgdGhpcy5fY2xvc2VCdXR0b25zID0gW107XG4gICAgZm9yIChpID0gdGhpcy5fcGFuZUNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY2hpbGQgPSB0aGlzLl9wYW5lQ29udGFpbmVyLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKFxuICAgICAgICBjaGlsZC50YWdOYW1lID09IFwiRElWXCIgJiZcbiAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWFwc2lkZWJhci1wYW5lXCIpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fcGFuZXMucHVzaChjaGlsZCk7XG4gICAgICAgIHZhciBjbG9zZV9idXR0b25zID0gY2hpbGQucXVlcnlTZWxlY3RvckFsbChcIi5tYXBzaWRlYmFyLWNsb3NlXCIpO1xuICAgICAgICBmb3IgKHZhciBqID0gMCwgbGVuID0gY2xvc2VfYnV0dG9ucy5sZW5ndGg7IGogPCBsZW47IGorKylcbiAgICAgICAgICB0aGlzLl9jbG9zZUJ1dHRvbnMucHVzaChjbG9zZV9idXR0b25zW2pdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gc3RvcmUgSlMgb2JqZWN0IGFzIGZpZWxkIHNvIEFQSSBjYW4gYWNjZXNzIGl0XG4gICAgdGhpcy5lbGVtZW50LndpZGdldCA9IHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGFuZCBkaXNwbGF5IGEgc2lkZWJhciB0byBhIE1hcGJveGdsIG1hcC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG1hcCAtIE1hcGJveGdsIE1hcCBvYmplY3QuXG4gICAqIEByZXR1cm4ge09iamVjdH0gU2lkZWJhciBvYmplY3QuXG4gICAqL1xuICBvbkFkZChtYXApIHtcbiAgICAvLyBkZWNsYXJlIHRlbXBvcmFyeSB2YXJpYWJsZXNcbiAgICB2YXIgaSwgY2hpbGQ7XG4gICAgLy8gc2V0IG1hcCBmaWVsZFxuICAgIHRoaXMuX21hcCA9IG1hcDtcbiAgICAvLyBhZGQgY3NzIGNsYXNzIHNpZGViYXItbWFwIHRvIG1hcFxuICAgIGlmICghbWFwLl9jb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2lkZWJhci1tYXBcIikpIHtcbiAgICAgIG1hcC5fY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLW1hcFwiKTtcbiAgICB9XG4gICAgLy8gaWYgaGVpZ2h0IGlzIGEgcGVyY2VudGFnZSwgdGhlbiBtb2RpZnkgY29udHJvbCBwb3NpdGlvbiBjb250YWluZXJcbiAgICBpZiAodGhpcy5faGVpZ2h0LmVuZHNXaXRoKFwiJVwiKSkge1xuICAgICAgY2hpbGQgPSBtYXAuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi5tYXBib3hnbC1jdHJsLVwiICsgdGhpcy5vcHRpb25zLnBvc2l0aW9uXG4gICAgICApXG4gICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgY2hpbGQuc3R5bGUuaGVpZ2h0ID0gXCJjYWxjKDEwMCUgLSA1MHB4KVwiO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBhZGQgY2xpY2sgZXZlbnRzIHNvIHRoYXQgY2xpY2tpbmcgb24gaWNvbnMgd2lsbCBvcGVuIGFuZCBjbG9zZSBwYW5lc1xuICAgIHRoaXMuX3RhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICBsZXQgc3ViID0gdGFiLnF1ZXJ5U2VsZWN0b3IoXCJhXCIpO1xuICAgICAgaWYgKFxuICAgICAgICBzdWIuaGFzQXR0cmlidXRlKFwiaHJlZlwiKSAmJlxuICAgICAgICBzdWIuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zbGljZSgwLCAxKSA9PSBcIiNcIlxuICAgICAgKSB7XG4gICAgICAgIHN1Yi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGFiLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZWRcIikpIHtcbiAgICAgICAgICAgICAgdGhpcy5vcGVuKHRhYi5xdWVyeVNlbGVjdG9yKFwiYVwiKS5oYXNoLnNsaWNlKDEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gYWRkIGNsaWNrIGV2ZW50cyBzbyB0aGF0IGNsaWNraW5nIG9uIGNsb3NlIGJ1dHRvbnMgd2lsbCBjbG9zZSBwYW5lc1xuICAgIHRoaXMuX2Nsb3NlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5jbG9zZSgpKTtcbiAgICB9KTtcbiAgICAvLyBzaG93IHNpZGViYXIgYW5kIGNvbnRlbnRcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAkKFwiLm1hcHNpZGViYXIuY29sbGFwc2VkIC5tYXBzaWRlYmFyLXRhYnMsIC5tYXBzaWRlYmFyLmNvbGxhcHNlZCAubWFwc2lkZWJhci1jb250ZW50LCAubWFwc2lkZWJhci5jb2xsYXBzZWRcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgIH0sIDQwMCk7XG4gICAgLy8gcmV0dXJuIG9iamVjdFxuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHNpZGViYXIgZnJvbSBhIE1hcGJveGdsIG1hcC5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIG9uUmVtb3ZlKCkge1xuICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgdGhpcy5fbWFwID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gc2lkZWJhciBwYW5lLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFuZV9pZCAtIEhUTUwgaWRlbnRpZmllciBmb3Igc2lkZWJhciBwYW5lLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgb3BlbihwYW5lX2lkKSB7XG4gICAgLy8gZGVjbGFyZSB0ZW1wb3JhcnkgdmFyaWFibGVzXG4gICAgdmFyIGksIGNoaWxkO1xuICAgIC8vIGhpZGUgb2xkIGFjdGl2ZSBjb250ZW50cyBhbmQgc2hvdyBuZXcgY29udGVudFxuICAgIGZvciAoaSA9IHRoaXMuX3BhbmVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjaGlsZCA9IHRoaXMuX3BhbmVzW2ldO1xuICAgICAgaWYgKGNoaWxkLmlkID09IHBhbmVfaWQpIHtcbiAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHJlbW92ZSBvbGQgYWN0aXZlIGhpZ2hsaWdodHMgYW5kIHNldCBuZXcgaGlnaGxpZ2h0XG4gICAgZm9yIChpID0gdGhpcy5fdGFicy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgIGNoaWxkID0gdGhpcy5fdGFic1tpXTtcbiAgICAgIGlmIChjaGlsZC5xdWVyeVNlbGVjdG9yKFwiYVwiKS5oYXNoLnNsaWNlKDEpID09PSBwYW5lX2lkKSB7XG4gICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBpZiBuZWVkZWQsIG9wZW4gc2lkZWJhclxuICAgIGlmICh0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29sbGFwc2VkXCIpKSB7XG4gICAgICB2YXIgcG9zID0gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIm1hcHNpZGViYXItbGVmdFwiKSA/XG4gICAgICAgIFwiLm1hcC1sZWZ0XCIgOiBcIi5tYXAtcmlnaHRcIjtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKHBvcylcbiAgICAgICAgLmZvckVhY2goZSA9PiB7ZS5jbGFzc0xpc3QuYWRkKFwiZXh0ZW5kZWRcIil9KTtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY29sbGFwc2VkXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZSBhbnkgc2lkZWJhciBwYW5lcyB0aGF0IGFyZSBvcGVuLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgY2xvc2UoKSB7XG4gICAgLy8gZGVjbGFyZSB0ZW1wb3JhcnkgdmFyaWFibGVzXG4gICAgdmFyIGksIGNoaWxkO1xuICAgIC8vIHJlbW92ZSBvbGQgYWN0aXZlIGhpZ2hsaWdodHNcbiAgICBmb3IgKGkgPSB0aGlzLl90YWJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB0aGlzLl90YWJzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICAgIC8vIGlmIG5lZWRlZCwgY2xvc2Ugc2lkZWJhclxuICAgIGlmICghdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImNvbGxhcHNlZFwiKSkge1xuICAgICAgdmFyIHBvcyA9IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJtYXBzaWRlYmFyLWxlZnRcIikgP1xuICAgICAgICBcIi5tYXAtbGVmdFwiIDogXCIubWFwLXJpZ2h0XCI7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbChwb3MpXG4gICAgICAgIC5mb3JFYWNoKGUgPT4ge2UuY2xhc3NMaXN0LnJlbW92ZShcImV4dGVuZGVkXCIpfSk7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNvbGxhcHNlZFwiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIHRoZSBtZW51IGJ1dHRvbiBmb3Igb3BlbmluZyBhIHNpZGViYXIgcGFuZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhbmVfaWQgLSBIVE1MIGlkZW50aWZpZXIgZm9yIHNpZGViYXIgcGFuZS5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGVuYWJsZShwYW5lX2lkKSB7XG4gICAgLy8gZGVjbGFyZSB0ZW1wb3JhcnkgdmFyaWFibGVzXG4gICAgdmFyIGksIGNoaWxkO1xuICAgIC8vIGVuYWJsZSB0YWJcbiAgICBmb3IgKGkgPSB0aGlzLl90YWJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjaGlsZCA9IHRoaXMuX3RhYnNbaV07XG4gICAgICBpZiAoY2hpbGQucXVlcnlTZWxlY3RvcihcImFcIikuaGFzaC5zbGljZSgxKSA9PT0gcGFuZV9pZCkge1xuICAgICAgICAvLyBmb3VuZCB0aGUgZGVzaXJlZCB0YWIsIHNvIGVuYWJsZSBpdFxuICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIC8vIHNpbmNlIG9ubHkgb25lIHRhYiBpcyBiZWluZyBlbmFibGVkLCBleGl0IGVhcmx5XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHRoZSBtZW51IGJ1dHRvbiBmb3Igb3BlbmluZyBhIHNpZGViYXIgcGFuZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhbmVfaWQgLSBIVE1MIGlkZW50aWZpZXIgZm9yIHNpZGViYXIgcGFuZS5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGRpc2FibGUocGFuZV9pZCkge1xuICAgIC8vIGRlY2xhcmUgdGVtcG9yYXJ5IHZhcmlhYmxlc1xuICAgIHZhciBpLCBjaGlsZDtcbiAgICAvLyBkaXNhYmxlIHRhYlxuICAgIGZvciAoaSA9IHRoaXMuX3RhYnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNoaWxkID0gdGhpcy5fdGFic1tpXTtcbiAgICAgIGlmIChjaGlsZC5xdWVyeVNlbGVjdG9yKFwiYVwiKS5oYXNoLnNsaWNlKDEpID09PSBwYW5lX2lkKSB7XG4gICAgICAgIC8vIGZvdW5kIHRoZSBkZXNpcmVkIHRhYiwgc28gdGhlbi4uLlxuICAgICAgICAvLyBpZiB0YWIgaXMgYWN0aXZlLCB0aGVuIGNsb3NlIGl0XG4gICAgICAgIGlmIChjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlKHBhbmVfaWQpXG4gICAgICAgIH1cbiAgICAgICAgLy8gZGlzYWJsZSB0aGUgdGFiXG4gICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgLy8gc2luY2Ugb25seSBvbmUgdGFiIGlzIGJlaW5nIGRpc2FibGVkLCBleGl0IGVhcmx5XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxuY29uc3QgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRjb25zdCBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0Y29uc3QgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRsZXQgdGhyZXcgPSB0cnVlO1xuXHR0cnkge1xuXHRcdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHRcdGNvbnN0IGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH1cblx0XHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0XHR0aHJldyA9IGZhbHNlO1xuXHR9IGZpbmFsbHkge1xuXHRcdGlmKHRocmV3KSBkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0fVxuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlci92YWx1ZSBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0aWYoQXJyYXkuaXNBcnJheShkZWZpbml0aW9uKSkge1xuXHRcdHZhciBpID0gMDtcblx0XHR3aGlsZShpIDwgZGVmaW5pdGlvbi5sZW5ndGgpIHtcblx0XHRcdHZhciBrZXkgPSBkZWZpbml0aW9uW2krK107XG5cdFx0XHR2YXIgYmluZGluZyA9IGRlZmluaXRpb25baSsrXTtcblx0XHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0XHRpZihiaW5kaW5nID09PSAwKSB7XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogZGVmaW5pdGlvbltpKytdIH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBiaW5kaW5nIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYoYmluZGluZyA9PT0gMCkgeyBpKys7IH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZihTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiogSW1wb3J0IGRlcGVuZGVuY2llcyAqL1xuLy8gY2xhc3NlcyB0byBjcmVhdGUgY29tcG9uZW50c1xuaW1wb3J0IHtNYXBTaWRlYmFyfSBmcm9tIFwiLi9jbGFzcy5qc1wiXG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG1hcGdsIHNpZGViYXIuXG4gKiBAcGFyYW0ge09iamVjdH0gZWwgLSBIVE1MIGVsZW1lbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgLSBIVE1MIGVsZW1lbnQgaWRlbnRpZmllciBmb3Igc2lkZWJhci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBoZWlnaHQgLSBIZWlnaHQgZm9yIHNpZGViYXIgKGUuZy4sIGBcIjQwMHB4XCJgKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gT3B0aW9ucyBmb3IgY3VzdG9taXppbmcgdGhlIHNpZGViYXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5wb3NpdGlvbiAtIFBvc2l0aW9uIGZvciBzaWRlYmFyLiBBY2NlcHRhYmxlXG4gKiB2YWx1ZXMgaW5jbHVkZSBgXCJ0b3AtbGVmdFwiYCBhbmQgYFwidG9wLXJpZ2h0XCJgLlxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0ZWQgLSBIVE1MIGlkZW50aWZpZXIgZm9yIHRoZSBzaWRlYmFyIHBhbmVcbiAqIHRvIGhhdmUgb3BlbiBieSBkZWZhdWx0LlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuU2hpbnkubWFwZ2xTaWRlYmFySW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKGVsLCBpZCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gIGxldCB3ID0gbmV3IE1hcFNpZGViYXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLCBoZWlnaHQsIG9wdGlvbnMpO1xuICBlbC5tYXAuYWRkQ29udHJvbCh3LCBvcHRpb25zLnBvc2l0aW9uKTtcbiAgaWYgKHR5cGVvZihvcHRpb25zLnNlbGVjdGVkKSA9PT0gXCJzdHJpbmdcIikge1xuICAgIFNoaW55LmluaXRpYWxpemVkUHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge3cub3BlbihvcHRpb25zLnNlbGVjdGVkKX0sIDEwMDApO1xuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogU2hpbnkgaGFuZGxlciBmb3Igb3BlbmluZyBhIHNpZGViYXIgcGFuZSBvbiBhIG1hcGdsIG1hcC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIC0gTWVzc2FnZSBmcm9tIFNoaW55LlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UuaWQgLSBIVE1MIGlkZW50aWZpZXIgZm9yIHRoZSBtYXBcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlLnBhbmVfaWQgLSBIVE1MIGlkZW50aWZpZXIgZm9yIHRoZSBzaWRlYmFyIHBhbmUuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5TaGlueS5hZGRDdXN0b21NZXNzYWdlSGFuZGxlcihcInNpZGViYXI6b3BlblwiLCBmdW5jdGlvbihtZXNzYWdlKSB7XG4gIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1lc3NhZ2UuaWQpO1xuICBpZiAoZWwpIHtcbiAgICBjb25zb2xlLmxvZyhcIm1lc3NhZ2UucGFuZV9pZFwiKTtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlLnBhbmVfaWQpO1xuICAgIGVsLndpZGdldC5vcGVuKG1lc3NhZ2UucGFuZV9pZCk7XG4gIH1cbn0pXG5cbi8qKlxuICogU2hpbnkgaGFuZGxlciBmb3IgY2xvc2luZyBhbnkgc2lkZWJhciBwYW5lcyBvbiBhIG1hcGdsIG1hcC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIC0gTWVzc2FnZSBmcm9tIFNoaW55LlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UuaWQgLSBIVE1MIGlkZW50aWZpZXIgZm9yIHRoZSBtYXBcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cblNoaW55LmFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyKFwic2lkZWJhcjpjbG9zZVwiLCBmdW5jdGlvbihtZXNzYWdlKSB7XG4gIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1lc3NhZ2UuaWQpO1xuICBpZiAoZWwpIHtcbiAgICBlbC53aWRnZXQuY2xvc2UoKTtcbiAgfVxufSlcblxuLyoqXG4gKiBTaGlueSBoYW5kbGVyIGZvciBlbmFibGluZyBhIG1lbnUgYnV0dG9uIGZvciBhIHNpZGViYXIgcGFuZSBvbiBhIG1hcGdsIG1hcC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIC0gTWVzc2FnZSBmcm9tIFNoaW55LlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UuaWQgLSBIVE1MIGlkZW50aWZpZXIgZm9yIHRoZSBtYXBcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlLnBhbmVfaWQgLSBIVE1MIGlkZW50aWZpZXIgZm9yIHRoZSBzaWRlYmFyIHBhbmUuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5TaGlueS5hZGRDdXN0b21NZXNzYWdlSGFuZGxlcihcInNpZGViYXI6ZW5hYmxlXCIsIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWVzc2FnZS5pZCk7XG4gIGlmIChlbCkge1xuICAgIGVsLndpZGdldC5lbmFibGUobWVzc2FnZS5wYW5lX2lkKTtcbiAgfVxufSlcblxuLyoqXG4gKiBTaGlueSBoYW5kbGVyIGZvciBkaXNhYmxpbmcgYSBtZW51IGJ1dHRvbiBmb3IgYSBzaWRlYmFyIHBhbmUgb24gYSBtYXBnbCBtYXAuXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSAtIE1lc3NhZ2UgZnJvbSBTaGlueS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlLmlkIC0gSFRNTCBpZGVudGlmaWVyIGZvciB0aGUgbWFwXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZS5wYW5lX2lkIC0gSFRNTCBpZGVudGlmaWVyIGZvciB0aGUgc2lkZWJhciBwYW5lLlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoXCJzaWRlYmFyOmRpc2FibGVcIiwgZnVuY3Rpb24obWVzc2FnZSkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtZXNzYWdlLmlkKTtcbiAgaWYgKGVsKSB7XG4gICAgZWwud2lkZ2V0LmRpc2FibGUobWVzc2FnZS5wYW5lX2lkKTtcbiAgfVxufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==