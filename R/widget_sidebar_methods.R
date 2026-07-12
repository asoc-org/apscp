#' Initialize sidebar
#'
#' Initialize a sidebar.
#'
#' @param id `character` value with identifier for sidebar.
#'
#' @param opts `list` with options for customizing sidebar.
#' Defaults to an empty list.
#'
#' @param session The `session` object passed to function given to
#' `shinyServer` Default is [shiny::getDefaultReactiveDomain()].
#'
#' @family sidebar
#'
#' @export
initialize_sidebar <- function(
  id,
  session = shiny::getDefaultReactiveDomain()
) {
  session$sendCustomMessage(
    "sidebar:initialize",
    list(id = id)
  )
}

#' Open sidebar
#'
#' Open a sidebar.
#'
#' @inheritParams initialize_sidebar
#'
#' @param pane_id `character` value with identifier for sidebar pane.
#'
#' @family sidebar
#'
#' @export
open_sidebar <- function(
  id, pane_id,
  session = shiny::getDefaultReactiveDomain()
) {
  session$sendCustomMessage(
    "sidebar:open",
    list(id = id, pane_id = pane_id)
  )
}

#' Close sidebar
#'
#' Close a sidebar.
#'
#' @inheritParams open_sidebar
#'
#' @family sidebar
#'
#' @export
close_sidebar <- function(id, session = shiny::getDefaultReactiveDomain()) {
  session$sendCustomMessage(
    "sidebar:close",
    list(id = id)
  )
}

#' Enable sidebar
#'
#' Enable a sidebar.
#'
#' @inheritParams open_sidebar
#'
#' @family sidebar
#'
#' @export
enable_sidebar <- function(
  id, pane_id,
  session = shiny::getDefaultReactiveDomain()
) {
  session$sendCustomMessage(
    "sidebar:enable",
    list(id = id, pane_id = pane_id)
  )
}

#' Disable sidebar
#'
#' Disable a sidebar.
#'
#' @inheritParams open_sidebar
#'
#' @family sidebar
#'
#' @export
disable_sidebar <- function(
  id, pane_id,
  session = shiny::getDefaultReactiveDomain()
) {
  session$sendCustomMessage(
    "sidebar:disable",
    list(id = id, pane_id = pane_id)
  )
}
