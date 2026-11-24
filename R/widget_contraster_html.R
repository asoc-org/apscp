#' @include internal.R
NULL

#' Scaffold for a contraster widget
#'
#' Create a HTML scaffold for a [contraster()] widget.
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
#' @family contraster
#'
#' @noRd
contraster_html <- function(id, style, class, ...) {
  # HTML scaffold
  htmltools::tags$div(
    id = id, class = class, style = style,
    htmltools::div(
      class = "contraster-container",
      htmltools::div(
        htmltools::tags$label(
          class = "form-label",
          "Select solution:"
        ),
        htmltools::tags$select(
          id = paste0(id, "_id1"),
          class = c("select1", "form-select")
        )
      ),
      htmltools::div(
        htmltools::tags$label(
          class = "form-label",
          "Select solution:"
        ),
        htmltools::tags$select(
          id = paste0(id, "_id2"),
          class = c("select2", "form-select")
        )
      ),
      htmltools::div(
        htmltools::tags$label(
          class = "form-label",
          "Create a new layer:"
        ),
        htmltools::div(
          class = c("contraster-footer", "align-items-stretch"),
          htmltools::tags$input(
            id = paste0(id, "_input"),
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
