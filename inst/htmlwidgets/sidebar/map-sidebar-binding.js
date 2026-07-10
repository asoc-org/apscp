Shiny.addCustomMessageHandler("sidebar:initialize", function(message) {
  // extract variables
  var elementId = message.id;
  var sidebar = document.getElementById(elementId);
  var map = document.querySelector(".mapboxgl-map:has(#" + elementId +")");
  // display HTML elements
  console.log(elementId);
  console.log(sidebar);
  console.log(map);
  // initialize sidebar
  sidebar.widget = new MapSidebar(elementId, {position: "left"}).add_to(map);
})

Shiny.addCustomMessageHandler("sidebar:open", function(message) {
  var el = document.getElementById(message.id);
  if (el) {
    el.widget.open(message.pane_id);
  }
})

Shiny.addCustomMessageHandler("sidebar:close", function(message) {
  var el = document.getElementById(message.id);
  if (el) {
    el.widget.close();
  }
})

Shiny.addCustomMessageHandler("sidebar:enable", function(message) {
  var el = document.getElementById(message.id);
  if (el) {
    el.widget.enable(message.pane_id);
  }
})

Shiny.addCustomMessageHandler("sidebar:disable", function(message) {
  var el = document.getElementById(message.id);
  if (el) {
    el.widget.disable(message.pane_id);
  }
})
