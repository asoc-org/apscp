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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHNjcC8uL3NyY2pzL2V4dHMvc2lkZWJhci9jc3Mvc3R5bGUuY3NzP2QzNjYiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy9leHRzL3NpZGViYXIvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vYXBzY3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXBzY3Avd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Fwc2NwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXBzY3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hcHNjcC8uL3NyY2pzL2V4dHMvc2lkZWJhci9zaWRlYmFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qKiBJbXBvcnQgZGVwZW5kZW5jaWVzICovXG4vLyBzdHlsaW5nXG5pbXBvcnQgXCIuL2Nzcy9zdHlsZS5jc3NcIjtcblxuLyoqIENsYXNzIHJlcHJlc2VudGluZyBhIG1hcCBzaWRlYmFyLiAqL1xuZXhwb3J0IGNsYXNzIE1hcFNpZGViYXIge1xuXG4gIC8vIHB1YmxpYyBmaWVsZHNcbiAgb3B0aW9ucztcbiAgZWxlbWVudDtcblxuICAvLyBwcml2YXRlIGZpZWxkc1xuICBfaGVpZ2h0O1xuICBfbWFwO1xuICBfcGFuZUNvbnRhaW5lcjtcbiAgX3RhYnM7XG4gIF9wYW5lcztcbiAgX2Nsb3NlQnV0dG9ucztcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBhIG5ldyBzaWRlYmFyIG9iamVjdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGVsZW1lbnQgLSBIVE1MIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoZWlnaHQgLSBIZWlnaHQgZm9yIHNpZGViYXIgKGUuZy4sIGBcIjQwMHB4XCJgKS5cbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zIGZvciBjdXN0b21pemluZyB0aGUgc2lkZWJhci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMucG9zaXRpb24gLSBQb3NpdGlvbiBmb3Igc2lkZWJhci4gQWNjZXB0YWJsZVxuICAgKiB2YWx1ZXMgaW5jbHVkZSBgXCJ0b3AtbGVmdFwiYCBhbmQgYFwidG9wLXJpZ2h0XCJgLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgLy8gc2V0IGZpZWxkc1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XG4gICAgLy8gZGVjbGFyZSB0ZW1wb3JhcnkgdmFyaWFibGVzXG4gICAgdmFyIGksIGNoaWxkO1xuICAgIC8vIGFkZCBoZWlnaHQgdG8gc2lkZWJhclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgLy8gYWRkIHNpZGViYXIgbGVmdC9yaWdodCBjbGFzc1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFxuICAgICAgXCJtYXBzaWRlYmFyLVwiICtcbiAgICAgICh0aGlzLm9wdGlvbnMucG9zaXRpb24uaW5jbHVkZXMoXCJsZWZ0XCIpID8gXCJsZWZ0XCIgOiBcInJpZ2h0XCIpXG4gICAgKTtcbiAgICAvLyBhZGQgbWFwIGJveCBjb250cm9sIGNsYXNzXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtYXBib3hnbC1jdHJsXCIpO1xuICAgIC8vIGlmIG5lZWRlZCwgYWRkIHRvdWNoIHN0eWxpbmdcbiAgICBpZiAoXG4gICAgICBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwIHx8XG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYShcIihwb2ludGVyOiBjb2Fyc2UpXCIpLm1hdGNoZXNcbiAgICApIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWFwLXRvdWNoXCIpO1xuICAgIH1cbiAgICAvLyBmaW5kIHNpZGViYXIgY29udGVudFxuICAgIGZvciAoaSA9IHRoaXMuZWxlbWVudC5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY2hpbGQgPSB0aGlzLmVsZW1lbnQuY2hpbGRyZW5baV07XG4gICAgICBpZiAoXG4gICAgICAgIGNoaWxkLnRhZ05hbWUgPT0gXCJESVZcIiAmJlxuICAgICAgICBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJtYXBzaWRlYmFyLWNvbnRlbnRcIilcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9wYW5lQ29udGFpbmVyID0gY2hpbGQ7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGZpbmQgdGFiIGl0ZW1zXG4gICAgdGhpcy5fdGFicyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCJ1bC5tYXBzaWRlYmFyLXRhYnMgPiBsaSwgLm1hcHNpZGViYXItdGFicyA+IHVsID4gbGlcIlxuICAgICk7XG4gICAgZm9yIChpID0gdGhpcy5fdGFicy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdGhpcy5fdGFic1tpXS5zaWRlYmFyID0gdGhpcztcbiAgICB9XG4gICAgLy8gZmluZCBzaWRlYmFyIHBhbmVzIGFuZCBjbG9zZSBidXR0b25zXG4gICAgdGhpcy5fcGFuZXMgPSBbXTtcbiAgICB0aGlzLl9jbG9zZUJ1dHRvbnMgPSBbXTtcbiAgICBmb3IgKGkgPSB0aGlzLl9wYW5lQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjaGlsZCA9IHRoaXMuX3BhbmVDb250YWluZXIuY2hpbGRyZW5baV07XG4gICAgICBpZiAoXG4gICAgICAgIGNoaWxkLnRhZ05hbWUgPT0gXCJESVZcIiAmJlxuICAgICAgICBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJtYXBzaWRlYmFyLXBhbmVcIilcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9wYW5lcy5wdXNoKGNoaWxkKTtcbiAgICAgICAgdmFyIGNsb3NlX2J1dHRvbnMgPSBjaGlsZC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1hcHNpZGViYXItY2xvc2VcIik7XG4gICAgICAgIGZvciAodmFyIGogPSAwLCBsZW4gPSBjbG9zZV9idXR0b25zLmxlbmd0aDsgaiA8IGxlbjsgaisrKVxuICAgICAgICAgIHRoaXMuX2Nsb3NlQnV0dG9ucy5wdXNoKGNsb3NlX2J1dHRvbnNbal0pO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBzdG9yZSBKUyBvYmplY3QgYXMgZmllbGQgc28gQVBJIGNhbiBhY2Nlc3MgaXRcbiAgICB0aGlzLmVsZW1lbnQud2lkZ2V0ID0gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYW5kIGRpc3BsYXkgYSBzaWRlYmFyIHRvIGEgTWFwYm94Z2wgbWFwLlxuICAgKiBAcGFyYW0ge29iamVjdH0gbWFwIC0gTWFwYm94Z2wgTWFwIG9iamVjdC5cbiAgICogQHJldHVybiB7b2JqZWN0fSBTaWRlYmFyIG9iamVjdC5cbiAgICovXG4gIG9uQWRkKG1hcCkge1xuICAgIC8vIGRlY2xhcmUgdGVtcG9yYXJ5IHZhcmlhYmxlc1xuICAgIHZhciBpLCBjaGlsZDtcbiAgICAvLyBzZXQgbWFwIGZpZWxkXG4gICAgdGhpcy5fbWFwID0gbWFwO1xuICAgIC8vIGFkZCBjc3MgY2xhc3Mgc2lkZWJhci1tYXAgdG8gbWFwXG4gICAgaWYgKCFtYXAuX2NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJzaWRlYmFyLW1hcFwiKSkge1xuICAgICAgbWFwLl9jb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXItbWFwXCIpO1xuICAgIH1cbiAgICAvLyBpZiBoZWlnaHQgaXMgYSBwZXJjZW50YWdlLCB0aGVuIG1vZGlmeSBjb250cm9sIHBvc2l0aW9uIGNvbnRhaW5lclxuICAgIGlmICh0aGlzLl9oZWlnaHQuZW5kc1dpdGgoXCIlXCIpKSB7XG4gICAgICBjaGlsZCA9IG1hcC5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLm1hcGJveGdsLWN0cmwtXCIgKyB0aGlzLm9wdGlvbnMucG9zaXRpb25cbiAgICAgIClcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICBjaGlsZC5zdHlsZS5oZWlnaHQgPSBcImNhbGMoMTAwJSAtIDUwcHgpXCI7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGFkZCBjbGljayBldmVudHMgc28gdGhhdCBjbGlja2luZyBvbiBpY29ucyB3aWxsIG9wZW4gYW5kIGNsb3NlIHBhbmVzXG4gICAgdGhpcy5fdGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgIGxldCBzdWIgPSB0YWIucXVlcnlTZWxlY3RvcihcImFcIik7XG4gICAgICBpZiAoXG4gICAgICAgIHN1Yi5oYXNBdHRyaWJ1dGUoXCJocmVmXCIpICYmXG4gICAgICAgIHN1Yi5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNsaWNlKDAsIDEpID09IFwiI1wiXG4gICAgICApIHtcbiAgICAgICAgc3ViLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRhYi5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlZFwiKSkge1xuICAgICAgICAgICAgICB0aGlzLm9wZW4odGFiLnF1ZXJ5U2VsZWN0b3IoXCJhXCIpLmhhc2guc2xpY2UoMSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBhZGQgY2xpY2sgZXZlbnRzIHNvIHRoYXQgY2xpY2tpbmcgb24gY2xvc2UgYnV0dG9ucyB3aWxsIGNsb3NlIHBhbmVzXG4gICAgdGhpcy5fY2xvc2VCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmNsb3NlKCkpO1xuICAgIH0pO1xuICAgIC8vIHNob3cgc2lkZWJhciBhbmQgY29udGVudFxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICQoXCIubWFwc2lkZWJhci5jb2xsYXBzZWQgLm1hcHNpZGViYXItdGFicywgLm1hcHNpZGViYXIuY29sbGFwc2VkIC5tYXBzaWRlYmFyLWNvbnRlbnQsIC5tYXBzaWRlYmFyLmNvbGxhcHNlZFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgfSwgNDAwKTtcbiAgICAvLyByZXR1cm4gb2JqZWN0XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgc2lkZWJhciBmcm9tIGEgTWFwYm94Z2wgbWFwLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgb25SZW1vdmUoKSB7XG4gICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB0aGlzLl9tYXAgPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogT3BlbiBzaWRlYmFyIHBhbmUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYW5lX2lkIC0gSFRNTCBpZGVudGlmaWVyIGZvciBzaWRlYmFyIHBhbmUuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBvcGVuKHBhbmVfaWQpIHtcbiAgICAvLyBkZWNsYXJlIHRlbXBvcmFyeSB2YXJpYWJsZXNcbiAgICB2YXIgaSwgY2hpbGQ7XG4gICAgLy8gaGlkZSBvbGQgYWN0aXZlIGNvbnRlbnRzIGFuZCBzaG93IG5ldyBjb250ZW50XG4gICAgZm9yIChpID0gdGhpcy5fcGFuZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNoaWxkID0gdGhpcy5fcGFuZXNbaV07XG4gICAgICBpZiAoY2hpbGQuaWQgPT0gcGFuZV9pZCkge1xuICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gcmVtb3ZlIG9sZCBhY3RpdmUgaGlnaGxpZ2h0cyBhbmQgc2V0IG5ldyBoaWdobGlnaHRcbiAgICBmb3IgKGkgPSB0aGlzLl90YWJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgY2hpbGQgPSB0aGlzLl90YWJzW2ldO1xuICAgICAgaWYgKGNoaWxkLnF1ZXJ5U2VsZWN0b3IoXCJhXCIpLmhhc2guc2xpY2UoMSkgPT09IHBhbmVfaWQpIHtcbiAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGlmIG5lZWRlZCwgb3BlbiBzaWRlYmFyXG4gICAgaWYgKHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjb2xsYXBzZWRcIikpIHtcbiAgICAgIHZhciBwb3MgPSB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWFwc2lkZWJhci1sZWZ0XCIpID9cbiAgICAgICAgXCIubWFwLWxlZnRcIiA6IFwiLm1hcC1yaWdodFwiO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwocG9zKVxuICAgICAgICAuZm9yRWFjaChlID0+IHtlLmNsYXNzTGlzdC5hZGQoXCJleHRlbmRlZFwiKX0pO1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJjb2xsYXBzZWRcIik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlIGFueSBzaWRlYmFyIHBhbmVzIHRoYXQgYXJlIG9wZW4uXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBjbG9zZSgpIHtcbiAgICAvLyBkZWNsYXJlIHRlbXBvcmFyeSB2YXJpYWJsZXNcbiAgICB2YXIgaSwgY2hpbGQ7XG4gICAgLy8gcmVtb3ZlIG9sZCBhY3RpdmUgaGlnaGxpZ2h0c1xuICAgIGZvciAoaSA9IHRoaXMuX3RhYnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHRoaXMuX3RhYnNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gICAgLy8gaWYgbmVlZGVkLCBjbG9zZSBzaWRlYmFyXG4gICAgaWYgKCF0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29sbGFwc2VkXCIpKSB7XG4gICAgICB2YXIgcG9zID0gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIm1hcHNpZGViYXItbGVmdFwiKSA/XG4gICAgICAgIFwiLm1hcC1sZWZ0XCIgOiBcIi5tYXAtcmlnaHRcIjtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKHBvcylcbiAgICAgICAgLmZvckVhY2goZSA9PiB7ZS5jbGFzc0xpc3QucmVtb3ZlKFwiZXh0ZW5kZWRcIil9KTtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY29sbGFwc2VkXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgdGhlIG1lbnUgYnV0dG9uIGZvciBvcGVuaW5nIGEgc2lkZWJhciBwYW5lLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFuZV9pZCAtIEhUTUwgaWRlbnRpZmllciBmb3Igc2lkZWJhciBwYW5lLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgZW5hYmxlKHBhbmVfaWQpIHtcbiAgICAvLyBkZWNsYXJlIHRlbXBvcmFyeSB2YXJpYWJsZXNcbiAgICB2YXIgaSwgY2hpbGQ7XG4gICAgLy8gZW5hYmxlIHRhYlxuICAgIGZvciAoaSA9IHRoaXMuX3RhYnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNoaWxkID0gdGhpcy5fdGFic1tpXTtcbiAgICAgIGlmIChjaGlsZC5xdWVyeVNlbGVjdG9yKFwiYVwiKS5oYXNoLnNsaWNlKDEpID09PSBwYW5lX2lkKSB7XG4gICAgICAgIC8vIGZvdW5kIHRoZSBkZXNpcmVkIHRhYiwgc28gZW5hYmxlIGl0XG4gICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgLy8gc2luY2Ugb25seSBvbmUgdGFiIGlzIGJlaW5nIGVuYWJsZWQsIGV4aXQgZWFybHlcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIG1lbnUgYnV0dG9uIGZvciBvcGVuaW5nIGEgc2lkZWJhciBwYW5lLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFuZV9pZCAtIEhUTUwgaWRlbnRpZmllciBmb3Igc2lkZWJhciBwYW5lLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgZGlzYWJsZShwYW5lX2lkKSB7XG4gICAgLy8gZGVjbGFyZSB0ZW1wb3JhcnkgdmFyaWFibGVzXG4gICAgdmFyIGksIGNoaWxkO1xuICAgIC8vIGRpc2FibGUgdGFiXG4gICAgZm9yIChpID0gdGhpcy5fdGFicy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY2hpbGQgPSB0aGlzLl90YWJzW2ldO1xuICAgICAgaWYgKGNoaWxkLnF1ZXJ5U2VsZWN0b3IoXCJhXCIpLmhhc2guc2xpY2UoMSkgPT09IHBhbmVfaWQpIHtcbiAgICAgICAgLy8gZm91bmQgdGhlIGRlc2lyZWQgdGFiLCBzbyB0aGVuLi4uXG4gICAgICAgIC8vIGlmIHRhYiBpcyBhY3RpdmUsIHRoZW4gY2xvc2UgaXRcbiAgICAgICAgaWYgKGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICAgIHRoaXMuY2xvc2UocGFuZV9pZClcbiAgICAgICAgfVxuICAgICAgICAvLyBkaXNhYmxlIHRoZSB0YWJcbiAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgICAgICAvLyBzaW5jZSBvbmx5IG9uZSB0YWIgaXMgYmVpbmcgZGlzYWJsZWQsIGV4aXQgZWFybHlcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG5jb25zdCBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGNvbnN0IGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHRjb25zdCBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGxldCB0aHJldyA9IHRydWU7XG5cdHRyeSB7XG5cdFx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdFx0Y29uc3QgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fVxuXHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRcdHRocmV3ID0gZmFsc2U7XG5cdH0gZmluYWxseSB7XG5cdFx0aWYodGhyZXcpIGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyL3ZhbHVlIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRpZihBcnJheS5pc0FycmF5KGRlZmluaXRpb24pKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHdoaWxlKGkgPCBkZWZpbml0aW9uLmxlbmd0aCkge1xuXHRcdFx0dmFyIGtleSA9IGRlZmluaXRpb25baSsrXTtcblx0XHRcdHZhciBiaW5kaW5nID0gZGVmaW5pdGlvbltpKytdO1xuXHRcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRcdGlmKGJpbmRpbmcgPT09IDApIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiBkZWZpbml0aW9uW2krK10gfSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGJpbmRpbmcgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZihiaW5kaW5nID09PSAwKSB7IGkrKzsgfVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKiBJbXBvcnQgZGVwZW5kZW5jaWVzICovXG4vLyBjbGFzc2VzIHRvIGNyZWF0ZSBjb21wb25lbnRzXG5pbXBvcnQge01hcFNpZGViYXJ9IGZyb20gXCIuL2NsYXNzLmpzXCJcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbWFwZ2wgc2lkZWJhci5cbiAqIEBwYXJhbSB7b2JqZWN0fSBlbCAtIEhUTUwgZWxlbWVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIEhUTUwgZWxlbWVudCBpZGVudGlmaWVyIGZvciBzaWRlYmFyLlxuICogQHBhcmFtIHtzdHJpbmd9IGhlaWdodCAtIEhlaWdodCBmb3Igc2lkZWJhciAoZS5nLiwgYFwiNDAwcHhcImApLlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zIGZvciBjdXN0b21pemluZyB0aGUgc2lkZWJhci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnBvc2l0aW9uIC0gUG9zaXRpb24gZm9yIHNpZGViYXIuIEFjY2VwdGFibGVcbiAqIHZhbHVlcyBpbmNsdWRlIGBcInRvcC1sZWZ0XCJgIGFuZCBgXCJ0b3AtcmlnaHRcImAuXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RlZCAtIEhUTUwgaWRlbnRpZmllciBmb3IgdGhlIHNpZGViYXIgcGFuZVxuICogdG8gaGF2ZSBvcGVuIGJ5IGRlZmF1bHQuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5TaGlueS5tYXBnbFNpZGViYXJJbml0aWFsaXplID0gZnVuY3Rpb24oZWwsIGlkLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgbGV0IHcgPSBuZXcgTWFwU2lkZWJhcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCksIGhlaWdodCwgb3B0aW9ucyk7XG4gIGVsLm1hcC5hZGRDb250cm9sKHcsIG9wdGlvbnMucG9zaXRpb24pO1xuICBpZiAodHlwZW9mKG9wdGlvbnMuc2VsZWN0ZWQpID09PSBcInN0cmluZ1wiKSB7XG4gICAgU2hpbnkuaW5pdGlhbGl6ZWRQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7dy5vcGVuKG9wdGlvbnMuc2VsZWN0ZWQpfSwgMTAwMCk7XG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBTaGlueSBoYW5kbGVyIGZvciBvcGVuaW5nIGEgc2lkZWJhciBwYW5lIG9uIGEgbWFwZ2wgbWFwLlxuICogQHBhcmFtIHtvYmplY3R9IG1lc3NhZ2UgLSBNZXNzYWdlIGZyb20gU2hpbnkuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZS5pZCAtIEhUTUwgaWRlbnRpZmllciBmb3IgdGhlIG1hcFxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UucGFuZV9pZCAtIEhUTUwgaWRlbnRpZmllciBmb3IgdGhlIHNpZGViYXIgcGFuZS5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cblNoaW55LmFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyKFwic2lkZWJhcjpvcGVuXCIsIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWVzc2FnZS5pZCk7XG4gIGlmIChlbCkge1xuICAgIGVsLndpZGdldC5vcGVuKG1lc3NhZ2UucGFuZV9pZCk7XG4gIH1cbn0pXG5cbi8qKlxuICogU2hpbnkgaGFuZGxlciBmb3IgY2xvc2luZyBhbnkgc2lkZWJhciBwYW5lcyBvbiBhIG1hcGdsIG1hcC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBtZXNzYWdlIC0gTWVzc2FnZSBmcm9tIFNoaW55LlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UuaWQgLSBIVE1MIGlkZW50aWZpZXIgZm9yIHRoZSBtYXBcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cblNoaW55LmFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyKFwic2lkZWJhcjpjbG9zZVwiLCBmdW5jdGlvbihtZXNzYWdlKSB7XG4gIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1lc3NhZ2UuaWQpO1xuICBpZiAoZWwpIHtcbiAgICBlbC53aWRnZXQuY2xvc2UoKTtcbiAgfVxufSlcblxuLyoqXG4gKiBTaGlueSBoYW5kbGVyIGZvciBlbmFibGluZyBhIG1lbnUgYnV0dG9uIGZvciBhIHNpZGViYXIgcGFuZSBvbiBhIG1hcGdsIG1hcC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBtZXNzYWdlIC0gTWVzc2FnZSBmcm9tIFNoaW55LlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UuaWQgLSBIVE1MIGlkZW50aWZpZXIgZm9yIHRoZSBtYXBcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlLnBhbmVfaWQgLSBIVE1MIGlkZW50aWZpZXIgZm9yIHRoZSBzaWRlYmFyIHBhbmUuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5TaGlueS5hZGRDdXN0b21NZXNzYWdlSGFuZGxlcihcInNpZGViYXI6ZW5hYmxlXCIsIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWVzc2FnZS5pZCk7XG4gIGlmIChlbCkge1xuICAgIGVsLndpZGdldC5lbmFibGUobWVzc2FnZS5wYW5lX2lkKTtcbiAgfVxufSlcblxuLyoqXG4gKiBTaGlueSBoYW5kbGVyIGZvciBkaXNhYmxpbmcgYSBtZW51IGJ1dHRvbiBmb3IgYSBzaWRlYmFyIHBhbmUgb24gYSBtYXBnbCBtYXAuXG4gKiBAcGFyYW0ge29iamVjdH0gbWVzc2FnZSAtIE1lc3NhZ2UgZnJvbSBTaGlueS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlLmlkIC0gSFRNTCBpZGVudGlmaWVyIGZvciB0aGUgbWFwXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZS5wYW5lX2lkIC0gSFRNTCBpZGVudGlmaWVyIGZvciB0aGUgc2lkZWJhciBwYW5lLlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoXCJzaWRlYmFyOmRpc2FibGVcIiwgZnVuY3Rpb24obWVzc2FnZSkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtZXNzYWdlLmlkKTtcbiAgaWYgKGVsKSB7XG4gICAgZWwud2lkZ2V0LmRpc2FibGUobWVzc2FnZS5wYW5lX2lkKTtcbiAgfVxufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==