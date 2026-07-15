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
  h4("Sidebar Demo"),
  splitLayout(
    cellWidths = c("20%", "80%"),
    tagList(
      h3("Left sidebar"),
      actionButton("open_left", "Open Random Sidebar"),
      actionButton("close_left", "Close Sidebar"),
      actionButton("enable_left", "Enable Profile Sidebar"),
      actionButton("disable_left", "Disable Profile Sidebar"),
      h3("Right sidebar"),
      actionButton("open_right", "Open Sidebar"),
      actionButton("close_right", "Close Sidebar"),
    ),
    tagList(
      sidebar_tabs(
        id = "rightsidebar",
        list(icon("hat-wizard"), icon("table")),
        sidebar_pane(
          title = "Style", id = "style_id", icon = NULL,
          tagList(
            selectInput(
              "col", "Color of points:",
              choices = c(
                "blue" = "#0000FF",
                "red" = "#880808",
                "green" = "#00FF00",
                "yellow" = "#FFFF00",
                "black" = "#000000"
              ),
              selected = "blue"
            ),
            verbatimTextOutput("tab2")
          )
        ),
        sidebar_pane(
          title = "Table", id = "table_id",
          icon = icon("table", verify_fa = FALSE),
          tagList(
            tableOutput("data2")
          )
        )
      ),
      sidebar_tabs(
        id = "leftsidebar",
        list(icon("car"), icon("user"), icon("envelope")),
        sidebar_pane(
          title = "Home", id = "home_id", icon = icon("home"),
          tagList(
            sliderInput(
              "obs", "Number of observations:",
              min = 1, max = nrow(pts_data), value = nrow(pts_data)
            ),
            verbatimTextOutput("tab1")
          )
        ),
        sidebar_pane(
          title = "Profile", id = "profile_id", icon = icon("wrench"),
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
          title = "Messages", id = "messages_id",
          icon = NULL,
          tagList(
            checkboxGroupInput(
              "variable", "Variables to show:",
              c("Cylinders" = "cyl", "Transmission" = "am", "Gears" = "gear")
            ),
            tableOutput("data")
          )
        )
      ),
      mapboxglOutput("map", height = "700px")
    )
  )
)

server <- function(input, output, session) {
  # map
  output$map <- renderMapboxgl({
    mapboxgl() |>
      add_sidebar_control(id = "leftsidebar", position = "top-left") |>
      add_sidebar_control(id = "rightsidebar", position = "top-right") |>
      fit_bounds(pts_data) |>
      add_circle_layer(id = "pts", source = pts_data, circle_color = "blue")
  })

  observeEvent(c(input$obs, input$col), {
    df <- sample_pts_data(pts_data, n_obs = input$obs)
    mapboxgl_proxy("map", session = session) |>
      clear_layer("pts") |>
      add_circle_layer(
        id = "pts", source = df, circle_color = input$col
      ) |>
      fit_bounds(df)
  })

  # buttons for left side bar
  observeEvent(input$open_left, {
    open_sidebar(
      "leftsidebar",
      sample(c("home_id", "profile_id", "messages_id"), 1)
    )
  })

  observeEvent(input$close_left, {
    close_sidebar("leftsidebar")
  })

  observeEvent(input$enable_left, {
    enable_sidebar("leftsidebar", "profile_id")
  })

  observeEvent(input$disable_left, {
    disable_sidebar("leftsidebar", "profile_id")
  })

  # buttons for right side bar
  observeEvent(input$open_right, {
    open_sidebar("rightsidebar", "style_id")
  })

  observeEvent(input$close_right, {
    close_sidebar("rightsidebar")
  })

  # left sidebar content
  output$tab1 <- renderText({input$obs})

  output$value <- renderText({
    req(input$go)
    isolate(input$password)
  })

  output$data <- renderTable(rownames = FALSE, {
    mtcars[, c("mpg", input$variable), drop = FALSE]
  })

  # right sidebar content
  output$tab2 <- renderText({input$col})

  output$data2 <- renderTable(rownames = FALSE, {
    mtcars[, c("mpg", input$variable), drop = FALSE]
  })

}

runApp(shinyApp(ui, server), launch.browser = TRUE)
