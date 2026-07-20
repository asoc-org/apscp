# load packages
devtools::load_all()
library(sf)
library(shiny)
library(mapgl)

# simulate project data
sim_data <- simulate_project()

# start tile server
start_tile_server(sim_data)
.Last <- function() {stop_tile_server()}

# define user interface for Shiny application
ui <- fluidPage(
  tags$head(tags$style(".btn-default {display: block;}")),
  h4("Mapp Demo"),
  splitLayout(
    cellWidths = c("20%", "80%"),
    tagList(
      h3("Mapper"),
      mapperOutput("mapper", height = "700px", width = "300px")
    ),
    mapboxglOutput("map" , height = "700px")
  )
)

# define server behavior for Shiny application
server <- function(input, output, session) {

  # initialize map
  output$map <- renderMapboxgl({
    map_project(sim_data)
  })

  # initialize mapper object
  output$mapper <- renderMapper({
    mapper(map_id = "map", project = sim_data)
  })

}

# launch Shiny application
runApp(shinyApp(ui, server), launch.browser = TRUE)
