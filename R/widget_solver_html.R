#' @include internal.R
NULL

#' Scaffold for a solver widget
#'
#' Create a HTML scaffold for a [solver()] widget.
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
solver_html <- function(id, style, class, ...) {
  # HTML scaffold
  x <- htmltools::tags$div(
    id = id, class = class, style = style,
    htmltools::div(
      class = "solver-container",
      # define tabset for panels
      bslib::navset_tab(
        id = paste0(id, "-settings-tabset"),
        selected = "features-panel",
        # define panel for multi-objective settings
        bslib::nav_panel(
          id = paste0(id, "-objectives-panel"),
          value = "objectives-panel",
          class = "objectives-panel",
          title = htmltools::tags$div(
            `data-toggle` = "tooltip",
            `data-placement` = "top",
            `data-container` = "body",
            `data-trigger` = "hover",
            title = "Settings for objectives",
            fontawesome::fa_i("scale-balanced")
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
            title = "Settings for Features",
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
            title = "Settings for Locks",
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
            title = "Settings for Costs",
            fontawesome::fa_i("dollar-sign")
          )
        )
      ),
      # define container for elements to generate solutions
      htmltools::tags$div(
        class = "solver-footer align-items-stretch",
        # text input to specify name for solution
        htmltools::tags$div(
          class = "name-container",
          `data-toggle` = "tooltip",
          `data-placement` = "top",
          `data-container` = "body",
          `data-trigger` = "hover",
          title = "Specify a name for the new solution",
          htmltools::tags$input(
            id = paste0(id, "_name"),
            class = c("name", "form-control"),
            placeholder = "enter name (required)"
          )
        ),
        # start button to generate a new solution
        htmltools::tags$div(
          class = "button-container",
          `data-toggle` = "tooltip",
          `data-placement` = "top",
          `data-container` = "body",
          `data-trigger` = "hover",
          title = "Generate a new solution",
          bslib::input_task_button(
            id = paste0(id, "_start_button"),
            disabled = NA,
            class = "start-button",
            label = "Solve!",
            label_busy = "",
            type = "primary",
            auto_reset = FALSE
          )
        ),
        # stop button to stop optimization process
        htmltools::tags$div(
          class = "button-container",
          `data-toggle` = "tooltip",
          `data-placement` = "top",
          `data-container` = "body",
          `data-trigger` = "hover",
          title = "Stop optimizing",
          bslib::input_task_button(
            id = paste0(id, "_stop_button"),
            disabled = NA,
            class = "stop-button",
            label = "",
            label_busy = "",
            icon = fontawesome::fa_i("ban"),
            type = "danger",
            auto_reset = FALSE
          )
        )
      )
    )
  )

  # return HTML scaffold
  x
}
