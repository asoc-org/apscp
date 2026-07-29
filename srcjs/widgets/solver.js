import {Solver} from "../modules/solver/class.js";

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

        // alias this
        let that = this;
        let element = document.getElementById(elementId);

        // if needed, initialize widget
        if (!initialized) {
          // set state to initialized
          initialized = true;
          // attach the widget to the DOM
          element.widget = that;
          // initialize solver
          handle.initialize(elementId, opts.project);
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

      getSettings: function(params) {
        handle.getSettings();
      },
      
    };
  }
});

// Attach message handlers if in Shiny mode (these correspond to API)
if (HTMLWidgets.shinyMode) {
  var fxns = ["addLock"];
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
