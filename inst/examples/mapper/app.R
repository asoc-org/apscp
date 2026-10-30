# load packages
library(apscp)
library(sf)
library(shiny)
library(mapgl)

# simulate project data
sim_project <- simulate_project()

# simulate settings for generating a solution
sim_settings <- simulate_prioritization_settings(sim_project)

# start tile server
tile_server_start(sim_project)
.Last <- function() {try(tile_server_stop(), silent = TRUE)}

# define user interface for Shiny application
ui <- bslib::page_fluid(
  add_external_resources(),
  tags$head(tags$style(".btn-default {display: block;}")),
  h4("Mapper Demo"),
  splitLayout(
    cellWidths = c("395px", "80%"),
    tagList(
      h3("Mapper"),
      htmltools::tags$div(
        mapperOutput("mapper", height = "100%", width = "100%")
      )
    ),
    tagList(
      actionButton("new_solution", "Add new random solution"),
      htmltools::tags$br(),
      mapboxglOutput("map" , height = "700px")
    )
  )
)

# define server behavior for Shiny application
server <- function(input, output, session) {

  # define application state
  state <- list2env(list(n = 0L))

  # on session end, stop tile server
  onStop(function() try(tile_server_stop(), silent = TRUE))

  # initialize map
  output$map <- renderMapboxgl({
    map_project(
      sim_project,
      config = list(
        basemap = list(
          showPointOfInterestLabels = FALSE,
          showPlaceLabels = FALSE,
          showRoadLabels = FALSE
        )
      )
    )
  })

  # initialize mapper object
  output$mapper <- renderMapper({
    mapper(map_id = "map", project = sim_project)
  })

  # define behavior to synchronize components
  observeEvent(input$mapper_sync, {
    req(input$mapper_sync)
    mapper_sync(
      "mapper",
      map = mapboxgl_proxy("map"),
      project = sim_project,
      data = input$mapper_sync
    )
  })

  # add new solution
  observeEvent(input$new_solution, {
    # increment solution counter
    state$n <- state$n + 1L
    # generate new solution values
    new_sol_values <- withr::with_seed(
      state$n,
      sample.int(
        3,
        sim_project$dataset$get_n_pu(),
        replace = TRUE
      )
    )
    # generate name for new solution
    new_name <- paste0("sol_", state$n)
    # add solution values to dataset
    sim_project$dataset$set_column_data(new_name, new_sol_values)
    # create new solution
    new_sol <- create_solution(
      new_name,
      project = sim_project,
      settings = sim_settings,
      column = new_name,
      provenance = simulate_provenance(),
      legend = simulate_solution_legend()
    )
    # add in solution
    sim_project$add_solution(new_sol)
    # add solution to mapper
    mapper_add_solution(
      id = "mapper",
      map = mapboxgl_proxy("map"),
      solution = new_sol,
      visible = TRUE
    )
  })
}

# launch Shiny application
shinyApp(ui, server)
