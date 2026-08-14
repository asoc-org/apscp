.onLoad <- function(...) {
  shiny::registerInputHandler(
    "apscp.JsDataFrame",
    function(data, ...) as.data.frame.JsDataFrame(data),
    force = TRUE
  )
  shiny::registerInputHandler(
    "apscp.JsDataFrameList",
    function(data, ...) as.list.JsDataFrameList(data),
    force = TRUE
  )
}
