/** Import dependencies */
import {Mapper} from "../modules/mapper/mapper-class.js";

HTMLWidgets.widget({
  name: "mapper",
  type: "output",
  factory: function(el, width, height) {
    // shared variables
    let elementId = el.id;
    let initialized = false;
    let handle = new Mapper();

    return {
      renderValue: function(opts) {
        // if needed, initialize widget
        if (!initialized) {
          // set state to initialized
          initialized = true;
          // attach the widget to the DOM
          let el = document.getElementById(elementId);
          el.widget = this;
          // initialize widget
          handle.initialize(el, opts.mapId, opts.project, opts.maxLayers);
        }
      },

      resize: function(width, height) {
        // widget automatically resizes
      },

      mapper: handle,

      /* API functions to manipulate widget */
      addLayer: function(params) {
        // specify visibility
        params.value.layer.visible = params.visible;
        // add layer to widget
        handle.addLayer(params.value);
        // since R code is used to update the map, so updateMap = false
        handle.showLayerOnMenu(params.value.id, true, false);
      },

    };
  }
});

// Attach message handlers if in Shiny mode (these correspond to API)
if (HTMLWidgets.shinyMode) {
  let fxns = ["addLayer"];
  let addShinyHandler = function(fxn) {
    return function() {
      Shiny.addCustomMessageHandler(
        "mapper:" + fxn, function(message) {
          let el = document.getElementById(message.id);
          if (el) {
            delete message["id"];
            el.widget[fxn](message);
          }
        }
      );
    }
  };
  for (let i = 0; i < fxns.length; ++i) {
    addShinyHandler(fxns[i])();
  }
}
