#' @include internal.R
NULL

#' Scaffold for a summarizer widget
#'
#' Create a HTML scaffold for a [summarizer()] widget.
#'
#' @param id `character` value with HTML identifier for the widget.
#'
#' @param style Object passed to `htmltools::tags$div()`.
#'
#' @param class Object passed to `htmltools::tags$div()`.
#'
#' @param ... Additional arguments passed to a `htmltools::tags$div()`.
#'
#' @return A `shiny.tag` object.
#'
#' @noRd
summarizer_html <- function(id, style, class, ...) {
  # HTML scaffold
  x <- htmltools::tags$div(
    id = id, class = class, style = style,
    htmltools::div(
      class = "summarizer-container",
      # select input
      htmltools::tags$select(
        class = "summarizer-select",
        placeholder = "No solutions available..",
        id = paste0(id, "-select")
      ),
      # define tabset for panels
      bslib::navset_tab(
        id = paste0(id, "-tabset"),
        selected = "locks-panel",
        # define panel for summary information
        bslib::nav_panel(
          id = paste0(id, "-summary-panel"),
          value = "summary-panel",
          class = "summary-panel",
          title = htmltools::tags$div(
            `data-toggle` = "tooltip",
            `data-placement` = "top",
            `data-container` = "body",
            `data-trigger` = "hover",
            title = "Summary information for solution.",
            fontawesome::fa_i("clipboard-list")
          )
        ),
        # define panel for features settings
        bslib::nav_panel(
          id = paste0(id, "-features-panel"),
          value = "features-panel",
          class = "features-panel",
          title = htmltools::tags$div(
            `data-toggle` = "tooltip",
            `data-placement` = "top",
            `data-container` = "body",
            `data-trigger` = "hover",
            title = "Information on Features for solution.",
            fontawesome::fa_i("star")
          )
        ),
        # define panel for setting locks settings
        bslib::nav_panel(
          id = paste0(id, "-locks-panel"),
          value = "locks-panel",
          class = "locks-panel",
          title = htmltools::tags$div(
            `data-toggle` = "tooltip",
            `data-placement` = "top",
            `data-container` = "body",
            `data-trigger` = "hover",
            title = "Information on Locks for solution.",
            fontawesome::fa_i("lock")
          )
        ),
        # define panel for setting costs settings
        bslib::nav_panel(
          id = paste0(id, "-costs-panel"),
          value = "costs-panel",
          class = "costs-panel",
          title = htmltools::tags$div(
            `data-toggle` = "tooltip",
            `data-placement` = "top",
            `data-container` = "body",
            `data-trigger` = "hover",
            title = "Information on costs for solution.",
            fontawesome::fa_i("dollar-sign")
          )
        )
      )
    )
  )

  # return HTML scaffold
  x
}
