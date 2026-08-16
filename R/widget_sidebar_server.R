#' Open sidebar
#'
#' Open a sidebar.
#'
#' @param id `character` value with identifier for sidebar.
#'
#' @param session The `session` object passed to function given to
#' `shinyServer` Default is [shiny::getDefaultReactiveDomain()].
#'
#' @param pane_id `character` value with identifier for sidebar pane.
#'
#' @family sidebar
#'
#' @export
sidebar_open <- function(
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
#' @inheritParams sidebar_open
#'
#' @family sidebar
#'
#' @export
sidebar_close <- function(id, session = shiny::getDefaultReactiveDomain()) {
  session$sendCustomMessage(
    "sidebar:close",
    list(id = id)
  )
}

#' Enable sidebar
#'
#' Enable a sidebar.
#'
#' @inheritParams sidebar_open
#'
#' @family sidebar
#'
#' @export
sidebar_enable <- function(
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
#' @inheritParams sidebar_open
#'
#' @family sidebar
#'
#' @export
sidebar_disable <- function(
  id, pane_id,
  session = shiny::getDefaultReactiveDomain()
) {
  session$sendCustomMessage(
    "sidebar:disable",
    list(id = id, pane_id = pane_id)
  )
}
