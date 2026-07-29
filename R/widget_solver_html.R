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
        id = paste0(id, "-settings-tabset")
        # define panel for multi-objective settings
        bslib::nav_panel(id = paste0(id, "-moo-panel")),
        # define panel for theme settings
        bslib::nav_panel(
          id = paste0(id, "-theme-panel"),
          bslib::navset_pill(id = paste0(id, "-zone-tabset"))
        ),
        # define panel for setting locks
        bslib::nav_panel(
          id = paste0(id, "-lock-panel"),
          htmltools::tags$div("lock-settings")
        ),
        # define panel for setting costs
        bslib::nav_panel(
          id = paste0(id, "-costs-panel")
          htmltools::tags$div("cost-settings")
        )
      ),
      # define container for elements to generate solutions
      htmltools::tags$div(
        class = "solver-footer",
        # text input to specify name for solution
        htmltools::tags$div(
          class = "solver-name-container",
          `data-toggle` = "tooltip",
          `data-placement` = "top",
          `data-container` = "body",
          `data-trigger` = "hover",
          title = "Specify a name for the new solution",
          htmltools::tags$input(
            id = paste0(id, "-name"),
            placeholder = "enter name (required)"
          ),
          # start button to generate a new solution
          htmltools::tags$div(
            class = "solution-footer-start-button",
            `data-toggle` = "tooltip",
            `data-placement` = "top",
            `data-container` = "body",
            `data-trigger` = "hover",
            title = "Generate a new solution"
          ),
          # stop button to stop optimization process
          htmltools::tags$div(
            class = "solver-footer-stop-button",
            `data-toggle` = "tooltip",
            `data-placement` = "top",
            `data-container` = "body",
            `data-trigger` = "hover",
            title = "Stop optimizing",
            shinyBS::bsButton(
              inputId = paste0(id, "_stop_button"),
              label = "",
              icon = shiny::icon("ban"),
              style = "danger"
            )
          )
        )
      )
    )
  )

  # add HTML template scaffolds for dynamic content
  ## zone panels under the theme panel
  x <- htmltools::tagAppendChild(
    x,
    htmltools::tags$template(
      class = "zone-settings-template",
        bslib::nav_panel(
          class = "zone-settings",
          title = "placeholder-title",
          id = "placeholder-id"
          htmltools::tags$div(
            htmltools::tags$label(
              class = "zone-theme-label",
              "placeholder text"
            ),
            htmltools::tags$select(
              class = "zone-theme-select form-select",
              id = "placeholder-id"
            ),
            htmltools::tags$div(
              class = "zone-theme-container",
              id = "placeholder-id"
            )
          )
        )
      )
    )
  )

  ## feature settings inside the zone panels
  x <- htmltools::tagAppendChild(
    x,
    htmltools::tags$template(
      class = "feature-settings-template",
      htmltools::tags$div(
        class = c("solver-menu-item", "feature-settings"),
        htmltools::tags$div(class = paste0(type, "-feature-header-container")),
        htmltools::tags$div(class = paste0(type, "-theme-target-container")),
        htmltools::tags$div(class = paste0(type, "-theme-weight-container"))
      )
    )
  )

  ## cost settings
  x <- htmltools::tagAppendChild(
    x,
    htmltools::tags$template(
      class = "cost-settings-template",
      htmltools::tags$div(
        class = c("solver-menu-item", "cost-settings"),
        htmltools::tags$div(class = paste0(type, "-cost-header-container")),
        htmltools::tags$div(class = paste0(type, "-cost-weight-container"))
      )
    )
  )

  # return HTML scaffold
  x
}
