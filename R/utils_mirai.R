#' Setup asynchronous processing with mirai
#'
#' Start daemons for asynchronous processing with the \pkg{mirai} package.
#'
#' @param n `integer` value denoting the number of workers.
#' Defaults to 2.
#'
#' @param verbose `logical` value indicating if messages should be displayed?
#' Defaults to `TRUE`.
#'
#' @family mirai
#'
#' @return An invisible `TRUE` indicating success.
#'
#' @examplesIf interactive()
#' # start asynchronous processing
#' mirai_async_start()
#'
#' # run calculation with asynchronous processing
#' result <- mirai::mirai({1 + 2})[]
#'
#' # stop asynchronous processing
#' mirai_async_stop()
#'
#' @export
mirai_async_start <- function(n = 2, verbose = TRUE) {
  # assert valid arguments
  assertthat::assert_that(
    assertthat::is.count(n),
    assertthat::noNA(n),
    assertthat::is.flag(verbose),
    assertthat::noNA(verbose)
  )
  # define function names
  function_names <- c(
    "is_installed",
    "convert_lock_settings_to_allocation",
    "solve_prioritization",
    "eval_prioritization",
    "calc_repr_metrics"
  )
  # create list with desired functions,
  ## note that we manually override the environment for each function
  ## to ensure that only necessary dependencies are imported on workers
  worker_funs <- stats::setNames(
    lapply(
      function_names,
      function(x) {
        x <- utils::getFromNamespace(x, ns = "apscp")
        environment(x) <- baseenv()
        x
      }
    ),
    nm = function_names
  )
  worker_funs$function_names <- function_names
  # initialize workers
  if (isTRUE(verbose)) {
    mirai::daemons(n, output = TRUE)
  } else {
    mirai::daemons(n)
  }
  # load dependencies on workers
  do.call(
    mirai::everywhere,
    append(
      list(
        quote({
          ## load dependency package
          requireNamespace("prioritizr")
          ## set function environments so functions can find each other
          for (n in function_names) {
            x <- get(n)
            environment(x) <- .GlobalEnv
            assign(n, x, .GlobalEnv)
          }
        })
      ),
      worker_funs
    )
  )
  # return success
  invisible(TRUE)
}

#' Stop asynchronous processing
#'
#' Stop daemons for asynchronous processing with the \pkg{mirai} package.
#'
#' @return An invisible `TRUE` indicating success.
#'
#' @family mirai
#'
#' @inherit mirai_async_start examples
#'
#' @export
mirai_async_stop <- function() {
  mirai::daemons(0)
}
