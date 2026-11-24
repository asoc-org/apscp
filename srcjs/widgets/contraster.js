/** Import dependencies */
import "htmlwidgets";
import {Contraster} from "../modules/contraster/contraster-class.js";

HTMLWidgets.widget({
  name: "contraster",
  type: "output",
  factory: function(el, width, height) {
    // shared variables
    var elementId = el.id;
    var initialized = false;
    var handle = new Contraster();

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
          handle.initialize(el, opts.solutions);
        }
      },

      resize: function(width, height) {
        // widget automatically resizes
      },

      contraster: handle,

      // /* API functions to manipulate widget */
      addSolution: function(params) {
        handle.addSolution(params.solution);
      },

      reset: function(params) {
        handle.reset();
      },

    };
  }
});

// Attach message handlers if in Shiny mode (these correspond to API)
if (HTMLWidgets.shinyMode) {
  let fxns = ["addSolution", "reset"];
  let addShinyHandler = function(fxn) {
    return function() {
      Shiny.addCustomMessageHandler(
        "contraster:" + fxn, function(message) {
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
