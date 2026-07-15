import "./css/style.css";

/** Class representing a map sidebar. */
export class MapSidebar {

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
