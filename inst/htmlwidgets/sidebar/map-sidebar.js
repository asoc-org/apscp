class MapSidebar {

  id = undefined;
  _map = undefined;
  _sidebar = undefined;
  _container = undefined;
  _tab_items = undefined;
  _panes = undefined;
  _close_buttons = undefined;
  options = {position: "left"};

  constructor(id, options) {
    // set fields
    this.id = id;
    this.options.position = this.options.position;
    this._sidebar = document.getElementById(id);

    // logging
    console.log("initializing sidebar");

    // declare temporary variables
    var i, child;

    // add sidebar left/right class
    this._sidebar.classList.add("mapsidebar-" + this.options.position);

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
        this._container = child;
      }
    }

    // find tab items
    this._tab_items = this._sidebar.querySelectorAll(
      "ul.mapsidebar-tabs > li, .mapsidebar-tabs > ul > li"
    );
    for (i = this._tab_items.length - 1; i >= 0; i--) {
      this._tab_items[i]._sidebar = this;
    }

    // find sidebar panes and close buttons
    this._panes = [];
    this._close_buttons = [];
    for (i = this._container.children.length - 1; i >= 0; i--) {
      child = this._container.children[i];
      if (
        child.tagName == "DIV" &&
        child.classList.contains("mapsidebar-pane")
      ) {
        this._panes.push(child);
        var close_buttons = child.querySelectorAll(".mapsidebar-close");
        for (var j = 0, len = close_buttons.length; j < len; j++)
          this._close_buttons.push(close_buttons[j]);
      }
    }


    console.log("this._map");
    console.log(this._map);
    console.log("this._sidebar");
    console.log(this._sidebar);
    console.log("this._container");
    console.log(this._container);
    console.log("this._tab_items");
    console.log(this._tab_items);
    console.log("this._panes");
    console.log(this._panes);
    console.log("this._close_buttons");
    console.log(this._close_buttons);

  }

  add_to(map) {
    // declare temporary variables
    var i, child;

    // set map field
    this._map = map;

    // add css class sidebar-map to map
    if (!map.classList.contains("sidebar-map")) {
      map.classList.add("sidebar-map");
    }

    // show sidebar and content
    setTimeout(function(){
      $(".mapsidebar.collapsed .mapsidebar-tabs, .mapsidebar.collapsed .mapsidebar-content").css("display","block");
    }, 400);

    // add click events so that clicking on icons will open and close panes
    this._tab_items.forEach((tab) => {
      var sub = tab.querySelector("a");
      if (
        sub.hasAttribute("href") &&
        sub.getAttribute("href").slice(0, 1) == "#"
      ) {
        sub.addEventListener("click", () => this._on_click.call(tab));
     }
   });

    // add click events so that clicking on close buttons will close panes
    this._close_buttons.forEach((button) => {
      button.addEventListener("click", () => this._on_close_click());
    });
  }

  open(id) {
    // logging
    console.log("opening pane: " + id);

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
    for (i = this._tab_items.length - 1; i >= 0; i--) {
      child = this._tab_items[i];
      if (child.querySelector("a").hash == "#" + id) {
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

    // return object
    return this;
  }

  close() {
    // logging
    console.log("closing pane");

    // declare temporary variables
    var i, child;

    // remove old active highlights
    for (i = this._tab_items.length - 1; i >= 0; i--) {
        child = this._tab_items[i];
        child.classList.remove("active");
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

    // return object
    return this;
  }

  enable(id) {
    // TODO
    return this;
  }

  disable(id) {
    // TODO
    return this;
  }

  /**
   * @private
   */
  _on_click() {
    if (this.classList.contains("active")) {
      this._sidebar.close();
    } else if (!this.classList.contains("disabled")) {
      this._sidebar.open(this.querySelector("a").hash.slice(1));
    }
  }

  /**
   * @private
   */
  _on_close_click() {
    this.close();
  }

}
