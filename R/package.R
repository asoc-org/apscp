#' apscp: Decision Support Tool for the Antarctic Peninsula
#'
#' Interactive decision support tool to navigate management options for the
#' Antarctic Peninsula. The tool identifies priority areas for implementing
#' policies for conservation, tourism, and scientific research. To achieve
#' this, it leverages data (Lee et al. 2025) and
#' multi-objective optimization techniques through the
#' *prioritizr* package
#' (Hanson et al. 2025; <https://prioritizr.net>).
#' Although default parameters are specified based on stakeholder surveys,
#' users can calibrate weights and representation targets to fine tune
#' optimization procedures according to their own preferences. Optimization
#' procedures can be performed with the *Gurobi* (<https://www.gurobi.com/>) or
#' *CBC* (via the *rcbc* package, <https://github.com/dirkschumacher/rcbc>)
#' exact algorithm solvers.
#'
#' @references
#' Hanson JO, Schuster R, Strimas‐Mackey M, Morrell N, Edwards BPM, Arcese P,
#' Bennett JR, Possingham HP (2024) Systematic conservation prioritization with
#' the prioritizr R package. _Conservation Biology_, 39: e14376.
#'
#' Lee JR, Shaw JD, Ropert-Coudert Y, Terauds A, Chown SL (2024) Conservation
#' features of the terrestrial Antarctic Peninsula. _Ambio_, 53:1037--1049.
#'
#' @name apscp
#'
#' @docType package
#' @aliases apscp-package
#'
#' @examplesIf interactive()
#  # launch application
#' run_app()
"_PACKAGE"

# define global variables to pass package checks
## these variables are used in lazy evaluation or the shiny application
utils::globalVariables(
  c(
    "session",
    "app_data",
    "."
  )
)

# ensure package checks pass
#' @importFrom rcbc cbc_solve
#' @importFrom withr with_dir
#' @importFrom R6 R6Class
#' @importFrom tibble as_tibble
#' @importFrom DBI dbConnect
#' @importFrom RSQLite SQLite
#' @importFrom shinyalert shinyalert
#' @importFrom markdown markdownToHTML
#' @export
NULL
