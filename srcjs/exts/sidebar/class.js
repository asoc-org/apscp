/** Import dependencies */
// styling
import "./css/style.css";

/** Class representing a map sidebar. */
export class MapSidebar {

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
