#' The application User-Interface
#'
#' @param request Internal parameter for `{shiny}`.
#'
#' @import shiny
#' @noRd
app_ui <- function(request) {
  htmltools::tagList(
    # add external resources
    add_external_resources(),

    # app content
    bslib::page_fillable(

      ## sidebars
      htmltools::tagList(
        ## left side bar
        sidebar_tabs(
          id = "left_sidebar",
          list(
            shiny::icon("layer-group"),
            shiny::icon("envelope"),
            shiny::icon("heart")
          ),
          sidebar_pane(
            title = "Table of contents",
            id = "navigator_pane",
            icon = NULL,
            tooltip = "Open sidebar with map layers.",
            mapperOutput("mapper", height = "100%", width = "100%")
          ),
          contact_sidebar_pane(id = "contact_pane", icon = NULL),
          acknowledgments_sidebar_pane(id = "acknowledgments_pane", icon = NULL)
        ),
        ## right side bar
        sidebar_tabs(
          id = "right_sidebar",
          list(shiny::icon("rocket"), shiny::icon("chart-pie")),
          sidebar_pane(
            title = "Generate solution",
            id = "settings_pane",
            icon = NULL,
            tooltip = "Open sidebar for solution settings.",
            solverOutput("solver", height = "100%", width = "100%")
          ),
          sidebar_pane(
            title = "Evaluate solution",
            id = "results_pane",
            icon = NULL,
            tooltip = "Open sidebar for solution results.",
            disabled = TRUE,
            summarizerOutput("summarizer", height = "100%", width = "100%")
          )
        )
      ),

      ## start up screen
      shinybusy::busy_start_up(
        loader = shinybusy::spin_epic("scaling-squares", color = "#FFF"),
        text = "Loading...",
        mode = "auto",
        color = "#FFF",
        background = "#001329"
      ),

      ## mapgl map
      mapgl::mapboxglOutput("map", width = "100vw", height = "100vh")
    )
  )

}

#' Add external resources to a Shiny application
#'
#' This function is used to add external resources to a Shiny application.
#'
#' @details
#' This function adds JavaScript and CSS files for the
#' [mapper()], [solver()], [summarizer()], [sidebar_pane()],
#' and [sidebar_tabs()].
#'
#' @return A `shiny.tag` object.
#'
#' @import shiny
#' @importFrom golem add_resource_path activate_js favicon bundle_resources
#' @export
add_external_resources <- function() {
  add_resource_path("www", app_sys("app/www"))
  tags$head(
    favicon(),
    htmltools::htmlDependency(
      "htmlwidgets",
      "1.0.0",
      src = system.file("www", package = "htmlwidgets"),
      script = "htmlwidgets.js"
    ),
    bundle_resources(
      path = app_sys("app/www"),
      app_title = "apscp"
    )
  )
}
