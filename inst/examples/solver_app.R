# load packages
devtools::load_all()
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
  h4("Mapp Demo"),
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

  # display solver settings in text box
  observeEvent(input$solver_settings, {
    req(input$solver_settings)
    # update text box with settings
    output$text <- renderPrint(print(input$solver_settings))
    # reset solver status
    solver_reset("solver")
  })
}

# launch Shiny application
runApp(shinyApp(ui, server), launch.browser = TRUE)
