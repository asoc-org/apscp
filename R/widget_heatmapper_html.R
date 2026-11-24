#' @include internal.R
NULL

#' Scaffold for a heat mapper widget
#'
#' Create a HTML scaffold for a [heatmapper()] widget.
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
#' @family heatmapper
#'
#' @noRd
heatmapper_html <- function(id, style, class, ...) {
  htmltools::tags$div(
    id = id, class = class, style = style,
    htmltools::div(
      class = "heatmapper-container",
      htmltools::div(
        htmltools::tags$label(
          class = "form-label",
          "Select zone:"
        ),
        htmltools::tags$select(
          id = paste0(id, "_zone"),
          class = c("zone-select", "form-select")
        )
      ),
      htmltools::div(
        htmltools::tags$label(
          class = "form-label",
          "Select solutions:"
        ),
        htmltools::tags$select(
          id = paste0(id, "_ids"),
          class = "solutions-select",
          multiple = NA
        )
      ),
      htmltools::div(
        htmltools::tags$label(
          class = "form-label",
          "Create a new layer:"
        ),
        htmltools::tags$div(
          class = c("heatmapper-footer", "align-items-stretch"),
          htmltools::tags$input(
            id = paste0(id, "_name"),
            class = c("name-input", "form-control"),
            placeholder = "enter name (required)"
          ),
          bslib::input_task_button(
            id = paste0(id, "_button"),
            disabled = NA,
            class = "start-button",
            label = "Create layer",
            label_busy = "",
            type = "primary",
            auto_reset = FALSE
          )
        )
      )
    )
  )
}
