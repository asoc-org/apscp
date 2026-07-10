Shiny.addCustomMessageHandler("sidebar:initialize", function(message) {
  // extract variables
  var elementId = message.id;
  var sidebar = document.getElementById(elementId);
  var map = document.getElementById("map");

  console.log(elementId);
  console.log(sidebar);

  // initialize sidebar
  //delete message["id"];
  //message.opts.position = sidebar[["sidebar-position"]];
  sidebar.widget = L.control.sidebar(elementId).addTo(map);
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
