/** Import dependencies */
// classes to create components
import "shiny";
import {MapSidebar} from "./class.js"

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
  let w = new MapSidebar(document.getElementById(id), height, options);
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
