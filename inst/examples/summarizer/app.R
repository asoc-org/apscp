# load packages
library(apscp)
library(sf)
library(shiny)
library(mapgl)

# simulate project data
set.seed(500)
sim_data <- simulate_project()

# define user interface for Shiny application
ui <- bslib::page_fluid(
  add_external_resources(),
  h4("Summarizer Demo"),
  splitLayout(
    cellWidths = c("800px", "395px"),
    tagList(htmltools::tags$div()),
    tagList(
      h3("Summarizer"),
      htmltools::tags$div(
        summarizerOutput("summarizer", height = "100%", width = "100%")
      )
    )
  )
)

# define server behavior for Shiny application
server <- function(input, output, session) {

  # initialize solver object
  output$summarizer <- renderSummarizer({
    summarizer(project = sim_data)
  })

}

# launch Shiny application
shinyApp(ui, server)
