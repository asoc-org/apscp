# set load timeout for Shiny application tests
options(shinytest2.load_timeout = 25000)


#' Expect screenshot on application hover
#'
#' Function to test application hover states.
#'
#' @param app [shinytest2::AppDriver] object.
#'
#' @param selector `character` value with CSS selector for element to hover.
#'
#' @param index `integer` index for extracting element if multiple
#' elements match `selector`. Defaults to 1.
#'
#' @param ... Passed to `app$expect_screenshot()`.
#'
#' @return Invisible `TRUE`.
#'
#' @export
expect_app_hover_screenshot <- function(app, selector, index = 1, ...) {
  query <- paste0("$('", selector, "')[", index - 1, "]")
  app$run_js(
    paste0(
      query,
      ".dispatchEvent(new MouseEvent('mouseover', ",
      "{clientX: 0, clientY: 0, bubbles: true}))"
    )
  )
  app$wait_for_idle()
  app$expect_screenshot(...)
  app$wait_for_idle()
  app$run_js(
    paste0(
      query,
      ".dispatchEvent(new MouseEvent('mouseout', {bubbles: true}))"
    )
  )
  invisible(TRUE)
}
