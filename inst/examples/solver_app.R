# load packages
devtools::load_all()
library(sf)
library(shiny)
library(mapgl)

# simulate project data
sim_data <- simulate_project()

sim_data$features[[1]]$zone_helds <- c(1, 0, 0)
sim_data$features[[2]]$zone_helds <- c(0, 1, 0)
sim_data$features[[3]]$zone_helds <- c(0, 0, 1)

# define user interface for Shiny application
ui <- bslib::page_fluid(
  h4("Mapp Demo"),
  splitLayout(
    cellWidths = c("380px", "80%"),
    tagList(
      h3("Solver"),
      htmltools::tags$div(
        solverOutput("solver", height = "100%", width = "100%"),
        style = "height: 800px; width:overflow-y: auto;"
      )
    ),
    tagList(
      h3("Settings"),
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

  # display solver settings in text box
  observeEvent(input$solver_settings, {
    req(input$solver_settings)
    # format settings
    d <- format_settings(input$solver_settings)
    # update text box with settings
    output$text <- renderPrint(print(d))
    # reset solver status
    solver_reset("solver")
  })
}

# launch Shiny application
runApp(shinyApp(ui, server), launch.browser = TRUE)
