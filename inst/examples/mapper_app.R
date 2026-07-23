# load packages
devtools::load_all()
library(sf)
library(shiny)
library(mapgl)

# simulate project data
sim_data <- simulate_project()

# start tile server
tile_server_start(sim_data)
.Last <- function() {tile_server_stop()}

# define user interface for Shiny application
ui <- fluidPage(
  tags$head(tags$style(".btn-default {display: block;}")),
  h4("Mapp Demo"),
  splitLayout(
    cellWidths = c("20%", "80%"),
    tagList(
      h3("Mapper"),
      htmltools::tags$div(
        mapperOutput("mapper", height = "100%", width = "300px"),
        style = "height: 500px; overflow-y: auto;"
      ),
      htmltools::tags$br(),
      htmltools::tags$br(),
      htmltools::tags$br(),
      actionButton("new_solution", "Add new random solution"),
    ),
    mapboxglOutput("map" , height = "700px")
  )
)

# define server behavior for Shiny application
server <- function(input, output, session) {

  # define application state
  state <- list2env(list(n = 0L))

  # initialize map
  output$map <- renderMapboxgl({
    map_project(sim_data)
  })

  # initialize mapper object
  output$mapper <- renderMapper({
    mapper(map_id = "map", project = sim_data)
  })

  # add new solution
  observeEvent(input$new_solution, {
    # increment solution counter
    state$n <- state$n + 1L
    # generate new solution values
    new_sol_values <- sample.int(3, sim_data$dataset$get_n_pu(), replace = TRUE)
    # generate name for new solution
    new_name <- paste0("sol_", state$n)
    # add solution values to dataset
    sim_data$dataset$set_column_data(new_name, new_sol_values)
    # create new solution
    new_sol <- create_solution(
      new_name,
      dataset = sim_data$dataset,
      column = new_name,
      tileset = sim_data$tileset,
      provenance = simulate_provenance(),
      legend = simulate_solution_legend()
    )
    # add in solution
    sim_data$add_solution(new_sol)
    # add solution to tile server
    tile_server_add_file(sim_data, new_sol)
    # add solution to mapper
    mapper_add_solution_to_map(
      id = "mapper",
      map = mapboxgl_proxy("map"),
      solution = new_sol,
      visible = TRUE
    )
  })
}

# launch Shiny application
runApp(shinyApp(ui, server), launch.browser = TRUE)
