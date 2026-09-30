# load packages
library(apscp)
library(sf)
library(shiny)
library(mapgl)

# simulate project data
set.seed(500)
sim_data <- simulate_project()

print("sim_data$solutions[[1]]$metrics$costs")
print(sim_data$solutions[[1]]$metrics$costs)


# define user interface for Shiny application
ui <- bslib::page_fluid(
  h4("Summarizer Demo"),
  splitLayout(
    cellWidths = c("80%", "395px"),
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
