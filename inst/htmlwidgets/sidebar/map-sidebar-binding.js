function mapgl_sidebar_initialize(el, id, height, options) {
  el.map.addControl(new MapSidebar(id, height, options), options.position);
}

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
