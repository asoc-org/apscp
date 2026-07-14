class LockLayer {
  /* constructor */
  constructor(
    mapper,
    name,
    layer
  ) {
    // set class fields
    this.id = id;
    this.enabled = false;
    this.el = document.importNode(
      document
      .getElementById(manager)
      .querySelector(".lock-layer-template")
      .content,
    true);
    this.view_el = this.el.querySelector(".view-checkbox");
    this.visible_el = this.el.querySelector(".visible-checkbox");
    this.disable_el = this.el.querySelector(".disable-button");
    this.legend_el = this.el.querySelector(".legend");

    // local variables
    const that = this;
    const mapper_layer = this.el.querySelector(".mapper-layer");

    // attach id to element
    mapper_layer.setAttribute("data-id", id);
    mapper_layer.id = id;

    // initialize HTML elements
    /// name
    this.name_el.innerText = name;
    /// view (i.e. show legend?), defaults to true
    this.view_el.checked = true;
    /// legend
    create_legend(this.legend_el, legend, units);
    /// provenance
    create_provenance(
      this.el.querySelector(".provenance-container"),
      layer.provenance
    );

    // set listener to show/hide legend
    if (HTMLWidgets.shinyMode) {
      this.view_el.addEventListener("change", function () {
        const checked = this.checked;
        if (checked) {
          that.legend_el.style.display = "block";
        } else {
          that.legend_el.style.display = "none";
        }
      });
    }

    // set listener to disable layer
    if (HTMLWidgets.shinyMode) {
      this.disable_el.addEventListener("change", function () {
        mapper.disable_layer(that.id);
      });
      }
    }

  }

  /* render method */
  render() {
    return this.el;
  }

};
