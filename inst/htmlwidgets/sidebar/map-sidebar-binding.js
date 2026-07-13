function mapgl_sidebar_initialize(el, id, options) {
  el.map.addControl(new MapSidebar(id, options), options.position);
}

// Shiny.addCustomMessageHandler("sidebar:initialize", function(message) {
//   // extract variables
//   var elementId = message.id;
//   var sidebar = document.getElementById(elementId);
//   var container = document.getElementById(elementId + "-ctrl");
//   var map = document.querySelector(".mapboxgl-map:has(#" + elementId +"-ctrl)");
//   // display HTML elements
//   console.log(elementId);
//   console.log(container)
//   console.log(map);
//   // initialize sidebar
//   sidebar.widget = new MapSidebar(elementId, {position: "left"}).add_to(map);
//   // move sidebar into container
//   container.appendChild(sidebar);
// })

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
