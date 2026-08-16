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
  id;
  options;

  // private fields
  _height;
  _map;
  _sidebar;
  _paneContainer;
  _tabs;
  _panes;
  _closeButtons;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNuQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Fwc2NwLy4vc3JjanMvZXh0cy9zaWRlYmFyL2Nzcy9zdHlsZS5jc3M/ZDM2NiIsIndlYnBhY2s6Ly9hcHNjcC8uL3NyY2pzL2V4dHMvc2lkZWJhci9jbGFzcy5qcyIsIndlYnBhY2s6Ly9hcHNjcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hcHNjcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXBzY3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hcHNjcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Fwc2NwLy4vc3JjanMvZXh0cy9zaWRlYmFyL3NpZGViYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyoqIEltcG9ydCBkZXBlbmRlbmNpZXMgKi9cbi8vIHN0eWxpbmdcbmltcG9ydCBcIi4vY3NzL3N0eWxlLmNzc1wiO1xuXG4vKiogQ2xhc3MgcmVwcmVzZW50aW5nIGEgbWFwIHNpZGViYXIuICovXG5leHBvcnQgY2xhc3MgTWFwU2lkZWJhciB7XG5cbiAgLy8gcHVibGljIGZpZWxkc1xuICBpZDtcbiAgb3B0aW9ucztcblxuICAvLyBwcml2YXRlIGZpZWxkc1xuICBfaGVpZ2h0O1xuICBfbWFwO1xuICBfc2lkZWJhcjtcbiAgX3BhbmVDb250YWluZXI7XG4gIF90YWJzO1xuICBfcGFuZXM7XG4gIF9jbG9zZUJ1dHRvbnM7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgYSBuZXcgc2lkZWJhciBvYmplY3QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIEhUTUwgZWxlbWVudCBpZGVudGlmaWVyLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGVpZ2h0IC0gSGVpZ2h0IGZvciBzaWRlYmFyIChlLmcuLCBgXCI0MDBweFwiYCkuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gT3B0aW9ucyBmb3IgY3VzdG9taXppbmcgdGhlIHNpZGViYXIuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnBvc2l0aW9uIC0gUG9zaXRpb24gZm9yIHNpZGViYXIuIEFjY2VwdGFibGVcbiAgICogdmFsdWVzIGluY2x1ZGUgYFwidG9wLWxlZnRcImAgYW5kIGBcInRvcC1yaWdodFwiYC5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGNvbnN0cnVjdG9yKGlkLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICAvLyBzZXQgZmllbGRzXG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuX3NpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cbiAgICAvLyBkZWNsYXJlIHRlbXBvcmFyeSB2YXJpYWJsZXNcbiAgICB2YXIgaSwgY2hpbGQ7XG5cbiAgICAvLyBhZGQgaGVpZ2h0IHRvIHNpZGViYXJcbiAgICB0aGlzLl9zaWRlYmFyLnN0eWxlLmhlaWdodCA9IGhlaWdodDtcblxuICAgIC8vIGFkZCBzaWRlYmFyIGxlZnQvcmlnaHQgY2xhc3NcbiAgICB0aGlzLl9zaWRlYmFyLmNsYXNzTGlzdC5hZGQoXG4gICAgICBcIm1hcHNpZGViYXItXCIgK1xuICAgICAgKHRoaXMub3B0aW9ucy5wb3NpdGlvbi5pbmNsdWRlcyhcImxlZnRcIikgPyBcImxlZnRcIiA6IFwicmlnaHRcIilcbiAgICApO1xuXG4gICAgLy8gYWRkIG1hcCBib3ggY29udHJvbCBjbGFzc1xuICAgIHRoaXMuX3NpZGViYXIuY2xhc3NMaXN0LmFkZChcIm1hcGJveGdsLWN0cmxcIik7XG5cbiAgICAvLyBpZiBuZWVkZWQsIGFkZCB0b3VjaCBzdHlsaW5nXG4gICAgaWYgKFxuICAgICAgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMCB8fFxuICAgICAgd2luZG93Lm1hdGNoTWVkaWEoXCIocG9pbnRlcjogY29hcnNlKVwiKS5tYXRjaGVzXG4gICAgKSB7XG4gICAgICB0aGlzLl9zaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJtYXAtdG91Y2hcIik7XG4gICAgfVxuXG4gICAgLy8gZmluZCBzaWRlYmFyIGNvbnRlbnRcbiAgICBmb3IgKGkgPSB0aGlzLl9zaWRlYmFyLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjaGlsZCA9IHRoaXMuX3NpZGViYXIuY2hpbGRyZW5baV07XG4gICAgICBpZiAoXG4gICAgICAgIGNoaWxkLnRhZ05hbWUgPT0gXCJESVZcIiAmJlxuICAgICAgICBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJtYXBzaWRlYmFyLWNvbnRlbnRcIilcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9wYW5lQ29udGFpbmVyID0gY2hpbGQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZmluZCB0YWIgaXRlbXNcbiAgICB0aGlzLl90YWJzID0gdGhpcy5fc2lkZWJhci5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCJ1bC5tYXBzaWRlYmFyLXRhYnMgPiBsaSwgLm1hcHNpZGViYXItdGFicyA+IHVsID4gbGlcIlxuICAgICk7XG4gICAgZm9yIChpID0gdGhpcy5fdGFicy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdGhpcy5fdGFic1tpXS5fc2lkZWJhciA9IHRoaXM7XG4gICAgfVxuXG4gICAgLy8gZmluZCBzaWRlYmFyIHBhbmVzIGFuZCBjbG9zZSBidXR0b25zXG4gICAgdGhpcy5fcGFuZXMgPSBbXTtcbiAgICB0aGlzLl9jbG9zZUJ1dHRvbnMgPSBbXTtcbiAgICBmb3IgKGkgPSB0aGlzLl9wYW5lQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjaGlsZCA9IHRoaXMuX3BhbmVDb250YWluZXIuY2hpbGRyZW5baV07XG4gICAgICBpZiAoXG4gICAgICAgIGNoaWxkLnRhZ05hbWUgPT0gXCJESVZcIiAmJlxuICAgICAgICBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJtYXBzaWRlYmFyLXBhbmVcIilcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9wYW5lcy5wdXNoKGNoaWxkKTtcbiAgICAgICAgdmFyIGNsb3NlX2J1dHRvbnMgPSBjaGlsZC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1hcHNpZGViYXItY2xvc2VcIik7XG4gICAgICAgIGZvciAodmFyIGogPSAwLCBsZW4gPSBjbG9zZV9idXR0b25zLmxlbmd0aDsgaiA8IGxlbjsgaisrKVxuICAgICAgICAgIHRoaXMuX2Nsb3NlQnV0dG9ucy5wdXNoKGNsb3NlX2J1dHRvbnNbal0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHN0b3JlIEpTIG9iamVjdCBhcyBmaWVsZCBzbyBBUEkgY2FuIGFjY2VzcyBpdFxuICAgIHRoaXMuX3NpZGViYXIud2lkZ2V0ID0gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYW5kIGRpc3BsYXkgYSBzaWRlYmFyIHRvIGEgTWFwYm94Z2wgbWFwLlxuICAgKiBAcGFyYW0ge09iamVjdH0gbWFwIC0gTWFwYm94Z2wgTWFwIG9iamVjdC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBTaWRlYmFyIG9iamVjdC5cbiAgICovXG4gIG9uQWRkKG1hcCkge1xuICAgIC8vIGRlY2xhcmUgdGVtcG9yYXJ5IHZhcmlhYmxlc1xuICAgIHZhciBpLCBjaGlsZDtcblxuICAgIC8vIHNldCBtYXAgZmllbGRcbiAgICB0aGlzLl9tYXAgPSBtYXA7XG5cbiAgICAvLyBhZGQgY3NzIGNsYXNzIHNpZGViYXItbWFwIHRvIG1hcFxuICAgIGlmICghbWFwLl9jb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2lkZWJhci1tYXBcIikpIHtcbiAgICAgIG1hcC5fY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLW1hcFwiKTtcbiAgICB9XG5cbiAgICAvLyBpZiBoZWlnaHQgaXMgYSBwZXJjZW50YWdlLCB0aGVuIG1vZGlmeSBjb250cm9sIHBvc2l0aW9uIGNvbnRhaW5lclxuICAgIGlmICh0aGlzLl9oZWlnaHQuZW5kc1dpdGgoXCIlXCIpKSB7XG4gICAgICBjaGlsZCA9IG1hcC5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLm1hcGJveGdsLWN0cmwtXCIgKyB0aGlzLm9wdGlvbnMucG9zaXRpb25cbiAgICAgIClcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICBjaGlsZC5zdHlsZS5oZWlnaHQgPSBcImNhbGMoMTAwJSAtIDUwcHgpXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWRkIGNsaWNrIGV2ZW50cyBzbyB0aGF0IGNsaWNraW5nIG9uIGljb25zIHdpbGwgb3BlbiBhbmQgY2xvc2UgcGFuZXNcbiAgICB0aGlzLl90YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgbGV0IHN1YiA9IHRhYi5xdWVyeVNlbGVjdG9yKFwiYVwiKTtcbiAgICAgIGlmIChcbiAgICAgICAgc3ViLmhhc0F0dHJpYnV0ZShcImhyZWZcIikgJiZcbiAgICAgICAgc3ViLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc2xpY2UoMCwgMSkgPT0gXCIjXCJcbiAgICAgICkge1xuICAgICAgICBzdWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuX29uQ2xpY2suY2FsbCh0YWIpKTtcbiAgICAgfVxuICAgfSk7XG5cbiAgICAvLyBhZGQgY2xpY2sgZXZlbnRzIHNvIHRoYXQgY2xpY2tpbmcgb24gY2xvc2UgYnV0dG9ucyB3aWxsIGNsb3NlIHBhbmVzXG4gICAgdGhpcy5fY2xvc2VCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLl9vbkNsb3NlQ2xpY2soKSk7XG4gICAgfSk7XG5cbiAgICAvLyBzaG93IHNpZGViYXIgYW5kIGNvbnRlbnRcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAkKFwiLm1hcHNpZGViYXIuY29sbGFwc2VkIC5tYXBzaWRlYmFyLXRhYnMsIC5tYXBzaWRlYmFyLmNvbGxhcHNlZCAubWFwc2lkZWJhci1jb250ZW50LCAubWFwc2lkZWJhci5jb2xsYXBzZWRcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgIH0sIDQwMCk7XG5cbiAgICAvLyByZXR1cm4gb2JqZWN0XG4gICAgcmV0dXJuIHRoaXMuX3NpZGViYXI7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHNpZGViYXIgZnJvbSBhIE1hcGJveGdsIG1hcC5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIG9uUmVtb3ZlKCkge1xuICAgIHRoaXMuX3NpZGViYXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLl9zaWRlYmFyKTtcbiAgICB0aGlzLl9tYXAgPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogT3BlbiBzaWRlYmFyIHBhbmUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIEhUTUwgaWRlbnRpZmllciBmb3Igc2lkZWJhciBwYW5lLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgb3BlbihpZCkge1xuICAgIC8vIGRlY2xhcmUgdGVtcG9yYXJ5IHZhcmlhYmxlc1xuICAgIHZhciBpLCBjaGlsZDtcblxuICAgIC8vIGhpZGUgb2xkIGFjdGl2ZSBjb250ZW50cyBhbmQgc2hvdyBuZXcgY29udGVudFxuICAgIGZvciAoaSA9IHRoaXMuX3BhbmVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjaGlsZCA9IHRoaXMuX3BhbmVzW2ldO1xuICAgICAgaWYgKGNoaWxkLmlkID09IGlkKSB7XG4gICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlbW92ZSBvbGQgYWN0aXZlIGhpZ2hsaWdodHMgYW5kIHNldCBuZXcgaGlnaGxpZ2h0XG4gICAgZm9yIChpID0gdGhpcy5fdGFicy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgIGNoaWxkID0gdGhpcy5fdGFic1tpXTtcbiAgICAgIGlmIChjaGlsZC5xdWVyeVNlbGVjdG9yKFwiYVwiKS5oYXNoLnNsaWNlKDEpID09PSBpZCkge1xuICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiBuZWVkZWQsIG9wZW4gc2lkZWJhclxuICAgIGlmICh0aGlzLl9zaWRlYmFyLmNsYXNzTGlzdC5jb250YWlucyhcImNvbGxhcHNlZFwiKSkge1xuICAgICAgdmFyIHBvcyA9IHRoaXMuX3NpZGViYXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWFwc2lkZWJhci1sZWZ0XCIpID9cbiAgICAgICAgXCIubWFwLWxlZnRcIiA6IFwiLm1hcC1yaWdodFwiO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwocG9zKVxuICAgICAgICAuZm9yRWFjaChlID0+IHtlLmNsYXNzTGlzdC5hZGQoXCJleHRlbmRlZFwiKX0pO1xuICAgICAgdGhpcy5fc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKFwiY29sbGFwc2VkXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZSBhbnkgc2lkZWJhciBwYW5lcyB0aGF0IGFyZSBvcGVuLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgY2xvc2UoKSB7XG4gICAgLy8gZGVjbGFyZSB0ZW1wb3JhcnkgdmFyaWFibGVzXG4gICAgdmFyIGksIGNoaWxkO1xuXG4gICAgLy8gcmVtb3ZlIG9sZCBhY3RpdmUgaGlnaGxpZ2h0c1xuICAgIGZvciAoaSA9IHRoaXMuX3RhYnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHRoaXMuX3RhYnNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICAvLyBpZiBuZWVkZWQsIGNsb3NlIHNpZGViYXJcbiAgICBpZiAoIXRoaXMuX3NpZGViYXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29sbGFwc2VkXCIpKSB7XG4gICAgICB2YXIgcG9zID0gdGhpcy5fc2lkZWJhci5jbGFzc0xpc3QuY29udGFpbnMoXCJtYXBzaWRlYmFyLWxlZnRcIikgP1xuICAgICAgICBcIi5tYXAtbGVmdFwiIDogXCIubWFwLXJpZ2h0XCI7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbChwb3MpXG4gICAgICAgIC5mb3JFYWNoKGUgPT4ge2UuY2xhc3NMaXN0LnJlbW92ZShcImV4dGVuZGVkXCIpfSk7XG4gICAgICB0aGlzLl9zaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJjb2xsYXBzZWRcIik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSB0aGUgbWVudSBidXR0b24gZm9yIG9wZW5pbmcgYSBzaWRlYmFyIHBhbmUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIEhUTUwgaWRlbnRpZmllciBmb3Igc2lkZWJhciBwYW5lLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgZW5hYmxlKGlkKSB7XG4gICAgLy8gZGVjbGFyZSB0ZW1wb3JhcnkgdmFyaWFibGVzXG4gICAgdmFyIGksIGNoaWxkO1xuXG4gICAgLy8gZW5hYmxlIHRhYlxuICAgIGZvciAoaSA9IHRoaXMuX3RhYnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNoaWxkID0gdGhpcy5fdGFic1tpXTtcbiAgICAgIGlmIChjaGlsZC5xdWVyeVNlbGVjdG9yKFwiYVwiKS5oYXNoLnNsaWNlKDEpID09PSBpZCkge1xuICAgICAgICAvLyBmb3VuZCB0aGUgZGVzaXJlZCB0YWIsIHNvIGVuYWJsZSBpdFxuICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIC8vIHNpbmNlIG9ubHkgb25lIHRhYiBpcyBiZWluZyBlbmFibGVkLCBleGl0IGVhcmx5XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHRoZSBtZW51IGJ1dHRvbiBmb3Igb3BlbmluZyBhIHNpZGViYXIgcGFuZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGlkIC0gSFRNTCBpZGVudGlmaWVyIGZvciBzaWRlYmFyIHBhbmUuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBkaXNhYmxlKGlkKSB7XG4gICAgLy8gZGVjbGFyZSB0ZW1wb3JhcnkgdmFyaWFibGVzXG4gICAgdmFyIGksIGNoaWxkO1xuXG4gICAgLy8gZGlzYWJsZSB0YWJcbiAgICBmb3IgKGkgPSB0aGlzLl90YWJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjaGlsZCA9IHRoaXMuX3RhYnNbaV07XG4gICAgICBpZiAoY2hpbGQucXVlcnlTZWxlY3RvcihcImFcIikuaGFzaC5zbGljZSgxKSA9PT0gaWQpIHtcbiAgICAgICAgLy8gZm91bmQgdGhlIGRlc2lyZWQgdGFiLCBzbyB0aGVuLi4uXG4gICAgICAgIC8vIGlmIHRhYiBpcyBhY3RpdmUsIHRoZW4gY2xvc2UgaXRcbiAgICAgICAgaWYgKGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICAgIHRoaXMuY2xvc2UoaWQpXG4gICAgICAgIH1cbiAgICAgICAgLy8gZGlzYWJsZSB0aGUgdGFiXG4gICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgLy8gc2luY2Ugb25seSBvbmUgdGFiIGlzIGJlaW5nIGRpc2FibGVkLCBleGl0IGVhcmx5XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmUgYmVoYXZpb3IgZm9yIGNsaWNraW5nIGEgc2lkZWJhciBtZW51IGJ1dHRvbi5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9vbkNsaWNrKCkge1xuICAgIGlmICh0aGlzLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgdGhpcy5fc2lkZWJhci5jbG9zZSgpO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZWRcIikpIHtcbiAgICAgIHRoaXMuX3NpZGViYXIub3Blbih0aGlzLnF1ZXJ5U2VsZWN0b3IoXCJhXCIpLmhhc2guc2xpY2UoMSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmUgYmVoYXZpb3IgZm9yIGNsaWNraW5nIGEgc2lkZWJhciBjbG9zZSBidXR0b24uXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb25DbG9zZUNsaWNrKCkge1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG5jb25zdCBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGNvbnN0IGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHRjb25zdCBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGxldCB0aHJldyA9IHRydWU7XG5cdHRyeSB7XG5cdFx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdFx0Y29uc3QgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fVxuXHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRcdHRocmV3ID0gZmFsc2U7XG5cdH0gZmluYWxseSB7XG5cdFx0aWYodGhyZXcpIGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyL3ZhbHVlIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRpZihBcnJheS5pc0FycmF5KGRlZmluaXRpb24pKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHdoaWxlKGkgPCBkZWZpbml0aW9uLmxlbmd0aCkge1xuXHRcdFx0dmFyIGtleSA9IGRlZmluaXRpb25baSsrXTtcblx0XHRcdHZhciBiaW5kaW5nID0gZGVmaW5pdGlvbltpKytdO1xuXHRcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRcdGlmKGJpbmRpbmcgPT09IDApIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiBkZWZpbml0aW9uW2krK10gfSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGJpbmRpbmcgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZihiaW5kaW5nID09PSAwKSB7IGkrKzsgfVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKiBJbXBvcnQgZGVwZW5kZW5jaWVzICovXG4vLyBjbGFzc2VzIHRvIGNyZWF0ZSBjb21wb25lbnRzXG5pbXBvcnQge01hcFNpZGViYXJ9IGZyb20gXCIuL2NsYXNzLmpzXCJcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbWFwZ2wgc2lkZWJhci5cbiAqIEBwYXJhbSB7T2JqZWN0fSBlbCAtIEhUTUwgZWxlbWVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIEhUTUwgZWxlbWVudCBpZGVudGlmaWVyIGZvciBzaWRlYmFyLlxuICogQHBhcmFtIHtzdHJpbmd9IGhlaWdodCAtIEhlaWdodCBmb3Igc2lkZWJhciAoZS5nLiwgYFwiNDAwcHhcImApLlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zIGZvciBjdXN0b21pemluZyB0aGUgc2lkZWJhci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnBvc2l0aW9uIC0gUG9zaXRpb24gZm9yIHNpZGViYXIuIEFjY2VwdGFibGVcbiAqIHZhbHVlcyBpbmNsdWRlIGBcInRvcC1sZWZ0XCJgIGFuZCBgXCJ0b3AtcmlnaHRcImAuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5TaGlueS5tYXBnbFNpZGViYXJJbml0aWFsaXplID0gZnVuY3Rpb24oZWwsIGlkLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgZWwubWFwLmFkZENvbnRyb2wobmV3IE1hcFNpZGViYXIoaWQsIGhlaWdodCwgb3B0aW9ucyksIG9wdGlvbnMucG9zaXRpb24pO1xufVxuXG4vKipcbiAqIFNoaW55IGhhbmRsZXIgZm9yIG9wZW5pbmcgYSBzaWRlYmFyIHBhbmUgb24gYSBtYXBnbCBtYXAuXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSAtIE1lc3NhZ2UgZnJvbSBTaGlueS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlLmlkIC0gSFRNTCBpZGVudGlmaWVyIGZvciB0aGUgbWFwXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZS5wYW5lX2lkIC0gSFRNTCBpZGVudGlmaWVyIGZvciB0aGUgc2lkZWJhciBwYW5lLlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoXCJzaWRlYmFyOm9wZW5cIiwgZnVuY3Rpb24obWVzc2FnZSkge1xuICB2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtZXNzYWdlLmlkKTtcbiAgaWYgKGVsKSB7XG4gICAgZWwud2lkZ2V0Lm9wZW4obWVzc2FnZS5wYW5lX2lkKTtcbiAgfVxufSlcblxuLyoqXG4gKiBTaGlueSBoYW5kbGVyIGZvciBjbG9zaW5nIGFueSBzaWRlYmFyIHBhbmVzIG9uIGEgbWFwZ2wgbWFwLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgLSBNZXNzYWdlIGZyb20gU2hpbnkuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZS5pZCAtIEhUTUwgaWRlbnRpZmllciBmb3IgdGhlIG1hcFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoXCJzaWRlYmFyOmNsb3NlXCIsIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWVzc2FnZS5pZCk7XG4gIGlmIChlbCkge1xuICAgIGVsLndpZGdldC5jbG9zZSgpO1xuICB9XG59KVxuXG4vKipcbiAqIFNoaW55IGhhbmRsZXIgZm9yIGVuYWJsaW5nIGEgbWVudSBidXR0b24gZm9yIGEgc2lkZWJhciBwYW5lIG9uIGEgbWFwZ2wgbWFwLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgLSBNZXNzYWdlIGZyb20gU2hpbnkuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZS5pZCAtIEhUTUwgaWRlbnRpZmllciBmb3IgdGhlIG1hcFxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UucGFuZV9pZCAtIEhUTUwgaWRlbnRpZmllciBmb3IgdGhlIHNpZGViYXIgcGFuZS5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cblNoaW55LmFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyKFwic2lkZWJhcjplbmFibGVcIiwgZnVuY3Rpb24obWVzc2FnZSkge1xuICB2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtZXNzYWdlLmlkKTtcbiAgaWYgKGVsKSB7XG4gICAgZWwud2lkZ2V0LmVuYWJsZShtZXNzYWdlLnBhbmVfaWQpO1xuICB9XG59KVxuXG4vKipcbiAqIFNoaW55IGhhbmRsZXIgZm9yIGRpc2FibGluZyBhIG1lbnUgYnV0dG9uIGZvciBhIHNpZGViYXIgcGFuZSBvbiBhIG1hcGdsIG1hcC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIC0gTWVzc2FnZSBmcm9tIFNoaW55LlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UuaWQgLSBIVE1MIGlkZW50aWZpZXIgZm9yIHRoZSBtYXBcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlLnBhbmVfaWQgLSBIVE1MIGlkZW50aWZpZXIgZm9yIHRoZSBzaWRlYmFyIHBhbmUuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5TaGlueS5hZGRDdXN0b21NZXNzYWdlSGFuZGxlcihcInNpZGViYXI6ZGlzYWJsZVwiLCBmdW5jdGlvbihtZXNzYWdlKSB7XG4gIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1lc3NhZ2UuaWQpO1xuICBpZiAoZWwpIHtcbiAgICBlbC53aWRnZXQuZGlzYWJsZShtZXNzYWdlLnBhbmVfaWQpO1xuICB9XG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9