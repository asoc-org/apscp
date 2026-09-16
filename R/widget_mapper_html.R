#' @include internal.R
NULL

#' Scaffold for a mapper widget
#'
#' Create a HTML scaffold for a [mapper()] widget.
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
mapper_html <- function(id, style, class, ...) {
  # HTML scaffold
  x <- htmltools::tags$div(
    id = id, class = class, style = style,
    htmltools::div(
      class = "mapper-container",
      htmltools::tags$input(
        class = "mapper-select",
        placeholder = "Add layer to map..",
        multiple = NA
      ),
      htmltools::div(class = c("mapper-menu", "well", "well-sm"))
    )
  )

  # add HTML template scaffolds for dynamic content
  ## solution layer
  x <- htmltools::tagAppendChild(
    x,
    htmltools::tags$template(
      class = "solution-layer-template",
      htmltools::tags$div(
        class = c("mapper-menu-item", "solution-layer"),
        mapper_menu_item_header_scaffold(type = "Solution"),
        htmltools::tags$div(class = "legend-container")
      )
    )
  )

  ## lock layer
  x <- htmltools::tagAppendChild(
    x,
    htmltools::tags$template(
      class = "lock-layer-template",
      htmltools::tags$div(
        class = c("mapper-menu-item", "lock-layer"),
        mapper_menu_item_header_scaffold(type = "Lock"),
        htmltools::tags$div(class = "legend-container")
      )
    )
  )

  ## cost layer
  x <- htmltools::tagAppendChild(
    x,
    htmltools::tags$template(
      class = "cost-layer-template",
      htmltools::tags$div(
        class = c("mapper-menu-item", "cost-layer"),
        mapper_menu_item_header_scaffold(type = "Cost"),
        htmltools::tags$div(class = "legend-container")
      )
    )
  )

  ## feature layer
  x <- htmltools::tagAppendChild(
    x,
    htmltools::tags$template(
      class = "feature-layer-template",
      htmltools::tags$div(
        class = c("mapper-menu-item", "feature-layer"),
        mapper_menu_item_header_scaffold(type = "Feature"),
       htmltools::tags$div(class = "legend-container")
      )
    )
  )

  # return result
  x
}

#' Scaffold for the header component of a menu item
#'
#' Create a HTML scaffold for a header component of a menu item for
#' the [mapper()] widget.
#'
#' @param type `character` value indicating the type of layer.
#' Available options include: `"solution"`, `"cost"`, `"feature"` and `"lock"`.
#'
#' @return A `shiny.tag` object.
#'
#' @noRd
mapper_menu_item_header_scaffold <- function(type) {
  # create tooltip text for type
  if (identical(type, "Feature")) {
    icon <- shiny::icon("star", class = "fa-solid")
    icon_tooltip_text <- paste(
      "This feature layer denotes places that may be important",
      "for covering within priority areas."
    )
  } else if (identical(type, "Cost")) {
    icon <- shiny::icon("dollar-sign")
    icon_tooltip_text <- paste(
      "This cost layer indicates places that should ideally be avoided",
      "by priority areas for conservation."
    )
  } else if (identical(type, "Lock")) {
    icon <- shiny::icon("lock")
    icon_tooltip_text <- paste(
      "This lock layer indicates places that must either be selected",
      "or avoided by priority areas."
    )
  } else if (identical(type, "Solution")) {
    icon <- shiny::icon("rocket")
    icon_tooltip_text <- "This solution layer indicates priority areas."
  } else {
    stop("`type` not recognized.") # nocov
  }

  # return scaffold
  htmltools::tags$div(
    class = "header",
    htmltools::tags$div(
      class = "handle",
      `data-toggle` = "tooltip",
      `data-placement` = "top",
      `data-container` = "body",
      title = "Drag to re-order layers on the map",
      shiny::icon("arrows-alt", color = "--handle")
    ),
    htmltools::tags$label(
      class = "legend-checkbox-container",
      `data-toggle` = "tooltip",
      `data-placement` = "top",
      `data-container` = "body",
      title = "Show/hide legend",
      htmltools::tags$input(
        class = "legend-checkbox",
        type = "checkbox"
      ),
      htmltools::tags$i(class = "far fa-minus-square checked"),
      htmltools::tags$i(class = "far fa-plus-square unchecked")
    ),
    htmltools::tags$label(
      class = "layer-tristate-container",
      `data-toggle` = "tooltip",
      `data-placement` = "top",
      `data-container` = "body",
      title = "Show/hide/highlight on map",
      htmltools::tags$input(
        class = "layer-tristate",
        type = "button"
      ),
      htmltools::tags$i(class = "fa fa-eye show"),
      htmltools::tags$i(class = "fa fa-eye-slash hide"),
      htmltools::tags$i(class = "fa fa-eye highlight"),
    ),
    htmltools::tags$button(
      class = "layer-button",
      type = "button",
      `data-toggle` = "tooltip",
      `data-placement` = "top",
      `data-container` = "body",
      title = "Remove from map",
      htmltools::tags$i(class = "fa fa-trash-can fa-regular")
    ),
    htmltools::tags$div(
      class = "name-container"
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
