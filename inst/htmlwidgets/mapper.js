HTMLWidgets.widget({

  name: "catalog",

  type: "output",

  factory: function(el, width, height) {

    // shared variables
    var elementId = el.id;
    var initialized = false;
    var container = document.getElementById(elementId);
    var handle = undefined;

    return {

      renderValue: function(opts) {

        // initialize widget
        if (!initialized) {
          // set state to initialized
          initialized = true;
          // attach the widget to the DOM
          container.widget = this;
          // initialize map manager
          handle = new LayerManager(
            elementId, container, opts.mapId, opts.project
          );
          // render HTML elements
          handle.render();
        }

      },

      resize: function(width, height) {
        // widget automatically resizes
      },

      widget: container,


      /* API functions to manipulate widget */
      add_layer: function(params) {
        handle.add_layer(params.value);
      },

      enable_layer: function(params) {
        handle.enable_layer(params.layer_id, params.position);
        if (params.show) {
          handle.show_layer(params.layer_id);
        }
      },

      disable_layer: function(params) {
        handle.disable_layer(params.layer_id);
      },

      hide_layer: function(params) {
        handle.hide_layer(params.layer_id);
      },

      show_layer: function(params) {
        handle.show_layer(params.layer_id);
      },

    };
  }
});

// Attach message handlers if in Shiny mode (these correspond to API)
if (HTMLWidgets.shinyMode) {
  var fxns = [
    "add_layer", "hide_layer", "show_layer", "enable_layer", "disable_layer"
  ];
  var addShinyHandler = function(fxn) {
    return function() {
      Shiny.addCustomMessageHandler(
        "catalog:" + fxn, function(message) {
          var el = document.getElementById(message.id);
          if (el) {
            delete message["id"];
            el.widget[fxn](message);
          }
        }
      );
    }
  };

  for (var i = 0; i < fxns.length; ++i) {
    addShinyHandler(fxns[i])();
  }
}
