#' @include internal.R
NULL

# Add custom HTML for the widget (automatically used by htmlwidgets)
mapper_html <- function(id, style, class, ...) {
  # HTML scaffold
  x <- htmltools::tags$div(
    id = id, class = class, style = style,
    htmltools::div(
      class = "mapper-container",
      htmltools::div(
        class = "mapper-panel",
        htmltools::tags$div(
          class = "layers"
        )
      )
    )
  )

  # add HTML template scaffolds for dynamic content
  ## solution layer
  x <- htmltools::tagAppendChild(
    x,
    htmltools::tags$template(
      class = "solution-layer-template",
      htmltools::tags$div(
        class = c("mapper-layer", "solution-layer"),
        mapper_layer_header_scaffold(type = "Solution"),
        htmltools::tags$div(
          class = "layer-legend-container",
          mapper_legend_scaffold()
        )
      )
    )
  )

  ## lock layer
  x <- htmltools::tagAppendChild(
    x,
    htmltools::tags$template(
      class = "lock-layer-template",
      htmltools::tags$div(
        class = c("mapper-layer", "lock-layer"),
        mapper_layer_header_scaffold(type = "Lock"),
        htmltools::tags$div(
          class = "layer-legend-container",
          mapper_legend_scaffold()
        )
      )
    )
  )

  ## cost layer
  x <- htmltools::tagAppendChild(
    x,
    htmltools::tags$template(
      class = "cost-layer-template",
      htmltools::tags$div(
        class = c("mapper-layer", "cost-layer"),
        mapper_layer_header_scaffold(type = "Cost"),
        htmltools::tags$div(
          class = "layer-legend-container",
          mapper_legend_scaffold()
        )
      )
    )
  )


  ## feature layer
  x <- htmltools::tagAppendChild(
    x,
    htmltools::tags$template(
      class = "feature-layer-template",
      htmltools::tags$div(
        class = c("mapper-layer", "feature-layer"),
        mapper_layer_header_scaffold(type = "Feature"),
        htmltools::tags$div(
          class = "layer-legend-container",
          mapper_legend_scaffold()
        )
      )
    )
  )

  # return result
  x
}

#' Scaffold for the legend component of a layer in the mapper widget
#'
#' Create a HTML scaffold for a legend component of the [mapper()] widget.
#'
#' @return A `shiny.tag` object.
#'
#' @noRd
mapper_legend_scaffold <- function() {
  htmltools::tags$div(class = "legend")
}

#' Scaffold for the header component of a layer in the mapper widget
#'
#' Create a HTML scaffold for a header component of
#' the [mapper()] widget.
#'
#' @param type `character` value indicating the type of layer.
#' Available options include: `"solution"`, `"cost"`, `"feature"` and `"lock"`.
#'
#' @return A `shiny.tag` object.
#'
#' @noRd
mapper_header_scaffold <- function(type) {
  # create tooltip text for type
  if (identical(type, "Feature")) {
    icon <- shiny::icon("star", class = "fa-solid")
    icon_tooltip_text <- paste0(
      "This feature layer denotes places that may be important",
      "for covering within priority areas."
    )
  } else if (identical(type, "Cost")) {
    icon <- shiny::icon("weight-hanging")
    icon_tooltip_text <- paste0(
      "This cost layer indicates places that should ideally be avoided",
      "by priority areas for conservation."
    )
  } else if (identical(type, "Lock")) {
    icon <- shiny::icon("lock")
    icon_tooltip_text <- paste0(
      "This lock layer indicates places that should ideally be avoided",
      "by priority areas."
    )
  } else if (identical(type, "Solution")) {
    icon <- shiny::icon("rocket")
    icon_tooltip_text <- "This solution layer indicates priority areas."
  } else {
    stop("`type` not recognized.") # nocov
  }

  # create name element
  if (identical(type, "Feature")) {
    name <- htmltools::tags$div(
      class = "pair-label",
      htmltools::tags$label(
        class = "theme-label"
      ),
      htmltools::tags$label(
        class = "name-label"
      )
    )
  } else {
    name <- htmltools::tags$div(
      class = "single-label",
      htmltools::tags$label(
        class = "name-label"
      )
    )
  }

  # return scaffold
  htmltools::tags$div(
    class = "header",
    htmltools::tags$label(
      class = "view-container",
      `data-toggle` = "tooltip",
      `data-placement` = "top",
      `data-container` = "body",
      title = "Show/hide legend",
      htmltools::tags$input(
        class = "view-checkbox",
        type = "checkbox"
      ),
      htmltools::tags$i(class = "far fa-minus-square checked"),
      htmltools::tags$i(class = "far fa-plus-square unchecked")
    ),
    htmltools::tags$label(
      class = "visible-container",
      `data-toggle` = "tooltip",
      `data-placement` = "top",
      `data-container` = "body",
      title = "Show/hide on map",
      htmltools::tags$input(
        class = "visible-checkbox",
        type = "checkbox"
      ),
      htmltools::tags$i(class = "fa fa-eye checked"),
      htmltools::tags$i(class = "fa fa-eye-slash unchecked")
    ),
    htmltools::tags$div(
      class = "details-container",
      name
    ),
    htmltools::tags$button(
      class = "disable-button",
      type = "button",
      `data-toggle` = "tooltip",
      `data-placement` = "top",
      `data-container` = "body",
      title = "Remove from menu and map",
      htmltools::tags$i(class = "fa fa-trash-alt")
    ),
    htmltools::tags$div(
      class = "provenance-container"
    ),
    htmltools::tags$div(
      class = "icon-container",
      `data-toggle` = "tooltip",
      `data-placement` = "top",
      `data-container` = "body",
      title = icon_tooltip_text,
      icon
    )
  )
}
