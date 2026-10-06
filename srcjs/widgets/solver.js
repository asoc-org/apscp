/** Import dependencies */
import {Solver} from "../modules/solver/solver-class.js";

HTMLWidgets.widget({
  name: "solver",
  type: "output",
  factory: function(el, width, height) {
    // shared variables
    let elementId = el.id;
    let initialized = false;
    let handle = new Solver();

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
          handle.initialize(
            el, opts.project,
            opts.featureTargetChoices,
            opts.featureWeightChoices,
            opts.costWeightChoices,
            opts.zoneColors,
            opts.zoneLockedColors
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

      sync: function(params) {
        handle.sync(params.value);
      },

    };
  }
});

// Attach message handlers if in Shiny mode (these correspond to API)
if (HTMLWidgets.shinyMode) {
  let fxns = ["addLock", "reset", "sync"];
  let addShinyHandler = function(fxn) {
    return function() {
      Shiny.addCustomMessageHandler(
        "solver:" + fxn, function(message) {
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
