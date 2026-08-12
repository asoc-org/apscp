import {Solver} from "../modules/solver/solver-class.js";

HTMLWidgets.widget({
  name: "solver",
  type: "output",
  factory: function(el, width, height) {
    // shared variables
    var elementId = el.id;
    var initialized = false;
    var handle = new Solver();

    return {
      renderValue: function(opts) {
        // if needed, initialize widget
        if (!initialized) {
          // set state to initialized
          initialized = true;
          // attach the widget to the DOM
          let el = document.getElementById(elementId);
          el.widget = this;
          // initialize solver
          handle.initialize(
            el, opts.project,
            opts.featureTargetChoices,
            opts.featureWeightChoices,
            opts.costWeightChoices,
            opts.zoneColors,
          );
        }
      },

      resize: function(width, height) {
        // widget automatically resizes
      },

      solver: handle,

      /* API functions to manipulate widget */
      addLock: function(params) {
        handle.addLock(params.value, params.type);
      },

      reset: function(params) {
        handle.reset();
      },

    };
  }
});

// Attach message handlers if in Shiny mode (these correspond to API)
if (HTMLWidgets.shinyMode) {
  var fxns = ["addLock", "reset"];
  var addShinyHandler = function(fxn) {
    return function() {
      Shiny.addCustomMessageHandler(
        "solver:" + fxn, function(message) {
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
