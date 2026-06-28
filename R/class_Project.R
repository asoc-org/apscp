#' @include internal.R
NULL

#' Project class
#'
#' Definition for the Project class.
#'
#' @seealso See [new_project()] to create a `Project` object.
Project <- R6::R6Class(
  "Project",
  public = list(
    #' @field dataset [new_datset] object.
    dataset = NULL,

    #' @field zones `character` vector of zone names.
    zones = NULL,

    #' @field themes `list` of [new_theme()] objects.
    themes = NULL,

    #' @field locks `list` of [new_lock()] objects.
    locks = NULL,

    #' @field costs `list` of [new_cost()] objects.
    costs = NULL,

    #' @field solutions `list` of [new_solution()] objects.
    solutions = NULL,

    #' @field name `character` name of the project.
    name = "Project",

    #' @field author_name `character` name of the project author.
    author_name = "Unknown",

    #' @field author_email `character` email of the project author.
    author_email = "Unknown",


    #' @description
    #' Create a `Project` object.
    #' @param dataset [Dataset] object.
    #' @param zones `character` vector of zone names.
    #' @param themes `list` of [new_theme()] objects.
    #' @param locks `list` of [new_lock()] objects.
    #' @param costs `list` of [new_cost()] objects.
    #' @param solutions `list` of [new_solution()] objects.
    #' Defaults to an empty list.
    #' @param name `character` name of the project.
    #' Defaults to `"Project"`.
    #' @param author_name `character` name of the project author.
    #' Defaults to `"Unknown"`.
    #' @param author_email `character` email of the project author.
    #' Defaults to `"Unknown"`.
    #' @return A new `Project` object.
    initialize = function(
      dataset, zones, themes, locks, costs, solutions = list(),
      name = "Project", author_name = "Unknown", author_email = "Unknown"
    ) {
      # assert agruments are valid
      assertthat::assert_that(
        ## dataset
        inherits(dataset, "Dataset"),
        ## zones
        is.character(zones),
        assertthat::noNA(zones),
        no_duplicates(zones),
        ## name
        assertthat::is.string(name),
        assertthat::noNA(name),
        ## author_name
        assertthat::is.string(author_name),
        assertthat::noNA(author_name),
        ## author_email
        assertthat::is.string(author_email),
        assertthat::noNA(author_email),
        ## themes
        is.list(themes),
        all_elements_inherit(themes, "Theme"),
        ## locks
        is.list(locks),
        all_elements_inherit(locks, "Lock"),
        ## costs
        is.list(costs),
        all_elements_inherit(costs, "Cost"),
        ## solutions
        is.list(solutions)
      )
      if (length(solutions) > 0) {
        assertthat::assert_that(
          all_elements_inherit(solution, "Solution")
        )
      }

      # assign fields
      self$dataset <- dataset
      self$zones <- zones
      self$themes <- themes
      self$locks <- locks
      self$costs <- costs
      self$solutions <- solutions
      self$name <- name
      self$author_name <- author_name
      self$author_email <- author_email
    },

    #' @description
    #' Add a solution to the project.
    #' @param x [new_solution()] object.
    #' @return An invisible `TRUE` indicating success.
    add_solution = function(x) {
      # assert arguments are valid
      assertthat::assert_that(inherits(x, "Solution"))
      # add object
      self$solutions[[length(self$solutions)]] <- x
      # return TRUE
      invisible(TRUE)
    },

    #' @description
    #' Add a lock to the project.
    #' @param x [new_lock()] object.
    #' @return An invisible `TRUE` indicating success.
    add_lock = function(x) {
      # assert arguments are valid
      assertthat::assert_that(inherits(x, "Lock"))
      # add object
      self$lock[[length(self$lock)]] <- x
      # return TRUE
      invisible(TRUE)
    }

  )
)

#' New project
#'
#' Create a new project object.
#'
#' @param dataset [new_dataset()] object.
#'
#' @param costs `list` of [new_cost()] objects.
#'
#' @param themes `list` of [new_themes()] objects.
#'
#' @param locks `list` of [new_locks()] objects.
#'
#' @param solutions `list` of [new_solution()] objects.
#' Defaults to an empty list.
#'
#' @param name `character` name of the project.
#' Defaults to `"Project"`.
#'
#' @param author_name `character` name of the project author.
#' Defaults to `"Unknown"`.
#'
#' @param author_email `character` email of the project author.
#' Defaults to `"Unknown"`.
#'
#' @return A new `Project` object.
#'
#' @export
new_project <- function(
  dataset,
  zones,
  costs,
  themes,
  locks,
  solutions = list(),
  name = "Project",
  author_name = "Unknown",
  author_email = "Unknown"
) {
  # create new dataset
  Project$new(
    dataset = dataset,
    zones = zones,
    costs = costs,
    themes = themes,
    locks = locks,
    name = name,
    author_name = author_name,
    author_email = author_email
  )
}
