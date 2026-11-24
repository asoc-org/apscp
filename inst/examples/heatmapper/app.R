# load packages
library(apscp)
library(sf)
library(shiny)
library(mapgl)

# define functions
simulate_solution <- function(project) {
  # define solution index
  i <- length(project$solutions) + 1L
  # simulate solution column values
  project$dataset$set_pu_column_data(
    paste0("s", i),
    sample.int(6, project$dataset$get_n_pu(), replace = TRUE)
  )
  # simulate solution settings
  sim_settings <- simulate_prioritization_settings(project)
  # return simulated solution
  new_solution(
    name = paste("solution", i),
    id = paste0("ss", i),
    layer = new_layer(
      column = paste0("s", i),
      total = 500,
      dataset = project$dataset,
      tile = project$tiles[[1]],
      legend = simulate_solution_legend(),
      provenance = simulate_provenance(),
      details = "extra info"
    ),
    settings = sim_settings,
    metrics = eval_prioritization(
      project, sim_settings,
      project$dataset$get_pu_column_data(paste0("s", i))
    )
  )
}

# simulate project data
sim_project <- simulate_project()

# manually overwrite id for solution
sim_project$solutions[[1]]$id <- "ss0"

# add extra solutions
for (i in seq_len(3)) {
  sim_project$add_solution(simulate_solution(sim_project))
}

# define user interface for Shiny application
ui <- bslib::page_fluid(
  add_external_resources(),
  tags$head(tags$style(".btn-default {display: block;}")),
  h4("Heatmapper Demo"),
  splitLayout(
    cellWidths = c("395px", "80%"),
    tagList(
      h3("Heatmapper"),
      htmltools::tags$div(
        heatmapperOutput("heatmapper", height = NULL, width = NULL)
      ),
      h3("Additional controls"),
      htmltools::tags$div(
        shiny::actionButton(
          "new_solution_button", label = "Generate new solution"
        )
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

  # initialize heatmapper
  output$heatmapper <- renderHeatmapper({
    heatmapper(project = sim_project)
  })

  # define task to simulate processing
  task <- ExtendedTask$new(
    function(x) {
      Sys.sleep(1)
      return(x)
    }
  ) |> bslib::bind_task_button("heatmapper_button")

  # define observer for button press
  observeEvent(input$heatmapper_settings, {
    req(input$heatmapper_settings)
    task$invoke(input$heatmapper_settings)
  })

  # define observer for task result
  shiny::observe({
    result <- task$result()
    output$text <- renderPrint(print(result))
    heatmapper_reset("heatmapper")
  })

  # define observer for action button
  observeEvent(input$new_solution_button, {
    req(input$new_solution_button)
    s <- simulate_solution(sim_project)
    sim_project$add_solution(s)
    heatmapper_add_solution(id = "heatmapper", solution = s)
  })

}

# launch Shiny application
shinyApp(ui, server)
