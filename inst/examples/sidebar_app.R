devtools::load_all()
library(sf)
library(shiny)
library(mapgl)

data(meuse, package = "sp")

pts_data <-
  meuse |>
  st_as_sf(coords = c("x", "y"), crs = 28992, agr = "constant") |>
  st_transform(4326)

sample_pts_data <- function(data, n_obs) {
  ii <- sample.int(nrow(data), n_obs, replace = TRUE)
  data[ii, , drop = FALSE]
}

ui <- fluidPage(
  tags$head(tags$style(".btn-default {display: block;}")),
  sidebar_deps(),
  h4("Leaflet Sidebar Plugin"),
  splitLayout(
    cellWidths = c("20%", "80%"),
    tagList(
      actionButton("open", "Open Sidebar"),
      actionButton("close", "Close Sidebar"),
      verbatimTextOutput("whichtab")
    ),
    tagList(
      mapboxglOutput("map", height = "700px")
    )
  )
)

server <- function(input, output, session) {
  output$map <- renderMapboxgl({
    input$initialize
    mapboxgl() |>
    add_circle_layer(id = "pts", source = pts_data) |>
    add_sidebar_control(
      id = "mysidebar",
      position = "top-left",
      sidebar_tabs = sidebar_tabs(
        list(icon("car"), icon("user"), icon("envelope")),
        sidebar_pane(
          title = "home", id = "home_id", icon = icon("home"),
          tagList(
            sliderInput(
              "obs", "Number of observations:",
              min = 1, max = 32, value = 10
            ),
            sliderInput(
              "opa", "Point Opacity:",
              min = 0, max = 1, value = 0.5
            ),
            sliderInput(
              "fillopa", "Fill Opacity:",
              min = 0, max = 1, value = 0.2
            ),
            dateRangeInput(
              "daterange4", "Date range:",
              start = Sys.Date() - 10, end = Sys.Date() + 10
            ),
            verbatimTextOutput("tab1")
          )
        ),
        sidebar_pane(
          title = "profile", id = "profile_id", icon = icon("wrench"),
          tagList(
            textInput("caption", "Caption", "Data Summary"),
            selectInput(
              "label", "selectInput", selectize = FALSE,
              choices = LETTERS[1:26]
            ),
            selectInput(
              "label1", "selectInput with selectize", selectize = TRUE,
              choices = LETTERS[1:26]
            ),
            passwordInput("password", "Password:"),
            actionButton("go", "Go"),
            verbatimTextOutput("value")
          )
        ),
        sidebar_pane(
          title = "messages", id = "messages_id",
          icon = icon("person", verify_fa = FALSE),
          tagList(
            checkboxGroupInput(
              "variable", "Variables to show:",
              c("Cylinders" = "cyl", "Transmission" = "am", "Gears" = "gear")
            ),
            tableOutput("data")
          )
        )
      )
    )
  })

  observe({
    req(input$obs)
    df <- sample_pts_data(pts_data, n_obs = input$obs)
    bbox <- suppressWarnings(st_bbox(df))
    mapboxgl_proxy("map", session) |>
      set_source(layer_id = "pts", source = df) |>
      fit_bounds(bbox)
  })

  output$tab1 <- renderText({
    input$obs
  })

  output$value <- renderText({
    req(input$go)
    isolate(input$password)
  })

  output$data <- renderTable(rownames = FALSE, {
    mtcars[, c("mpg", input$variable), drop = FALSE]
  })

  observeEvent(input$open, {
    print("here3")
    open_sidebar(
      "mysidebar",
      sample(c("home_id", "profile_id", "messages_id"), 1)
    )
  })

  observeEvent(input$close, {
    print("here2")
    close_sidebar("mysidebar")
  })

  observeEvent(input$map_bbox, once = TRUE, {
    print("here1")
    initialize_sidebar("mysidebar")
  })

}

runApp(shinyApp(ui, server), launch.browser = TRUE)
