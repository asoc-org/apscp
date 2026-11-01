# load packages
library(apscp)
library(sf)
library(shiny)
library(mapgl)

# simulate project data
set.seed(500)
sim_data <- simulate_project()
sim_data$features[[1]]$zone_helds <- c(1, 0, 0)
sim_data$features[[2]]$zone_helds <- c(0, 1, 0)
sim_data$features[[3]]$zone_helds <- c(0, 0, 1)

# define user interface for Shiny application
ui <- bslib::page_fluid(
  add_external_resources(),
  h4("Solver Demo"),
  splitLayout(
    cellWidths = c("395px", "80%"),
    tagList(
      h3("Solver"),
      htmltools::tags$div(
        solverOutput("solver", height = "100%", width = "100%")
      )
    ),
    tagList(
      h3("Settings output"),
      htmltools::tags$div(
        verbatimTextOutput("text"),
        style = "height: 100%; width = 100%; overflow-y: auto;"
      )
    )
  )
)

# define server behavior for Shiny application
server <- function(input, output, session) {

  # initialize solver object
  output$solver <- renderSolver({
    solver(project = sim_data)
  })

  # define behavior to synchronize different settings
  observeEvent(input$solver_sync, {
    req(input$solver_sync)
    solver_sync("solver", project = sim_data, data = input$solver_sync)
  })

  # define task to simulate processing
  task <- ExtendedTask$new(
    function(x) {
      Sys.sleep(1)
      return(x)
    }
  ) |> bslib::bind_task_button("solver_start_button")

  # define observer for button press
  observeEvent(input$solver_settings, {
    req(input$solver_settings)
    task$invoke(input$solver_settings)
  })

  # define observer for task result
  shiny::observe({
    ## fetch task result
    result <- task$result()
    ## update text box
    output$text <- renderPrint(print(result))
    ## reset widget
    solver_reset("solver")
  })
}

# launch Shiny application
shinyApp(ui, server)
