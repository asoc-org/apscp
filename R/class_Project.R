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
          all_elements_inherit(solutions, "Solution")
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
#' @param zones `character` vector of zone names.
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
#'
#' @examples
#' # create dataset
#' dataset <- simulate_dataset()
#'
#' # create cost
#' cost <- new_cost(
#'   name = "cost",
#'   layer = new_layer(
#'     dataset = dataset,
#'     index = "feat_1",
#'     legend = new_continuous_legend(
#'       c(0, 1), c("#000000", "#DDDDDD"),
#'       c(0.2, 0.5, 0.8), c("Low", "Medium", "High")
#'     ),
#'     units = "USD",
#'     provenance = new_provenance(
#'      name = "Global", icon = "globe", color = "#123456",
#'      description = "Data is global."
#'     ),
#'     total = 500,
#'     details = "extra info"
#'   )
#' )
#'
#' # create lock
#' lock <- new_lock(
#'   name = "lock",
#'   layer = new_layer(
#'     dataset = dataset,
#'     index = "locked_in",
#'     legend = new_categorical_legend(
#'       c(0, 1), c("#000000", "#DDDDDD"),
#'       c("Other", "Protected area")
#'     ),
#'     units = "presence/absence",
#'     provenance = new_provenance(
#'       name = "Global", icon = "globe", color = "#123456",
#'       description = "Data is global."
#'     ),
#'     total = 500,
#'     details = "extra info"
#' )
#'
#' # create theme
#' theme <- new_theme(
#'   "species",
#'   list(
#'     new_feature(
#'       name = "f1",
#'       targets = c(0.1, 0.5),
#'       layer = new_layer(
#'         dataset = dataset,
#'         index = "feat_1",
#'         legend = new_continuous_legend(
#'           c(0, 1), c("#000000", "#DDDDDD"),
#'           c(0.2, 0.5, 0.8), c("Low", "Medium", "High")
#'         ),
#'         units = "suitability",
#'         provenance = new_provenance(
#'          name = "Global", icon = "globe", color = "#123456",
#'          description = "Data is global."
#'         ),
#'         total = 500,
#'         details = "extra info"
#'       )
#'     ),
#'     new_feature(
#'       name = "f2",
#'       targets = c(0.2, 0.9),
#'       layer = new_layer(
#'         dataset = dataset,
#'         index = "feat_2",
#'         legend = new_continuous_legend(
#'           c(0, 1), c("#000000", "#AAAAAA"),
#'           c(0.2, 0.5, 0.8), c("20%", "50%", "80%")
#'         ),
#'         units = "abundance",
#'         provenance = new_provenance(
#'          name = "Global", icon = "globe", color = "#123456",
#'          description = "Data is global."
#'         ),
#'         total = 600,
#'         details = "extra info 2"
#'       )
#'     )
#'   )
#' )
#'
#' # create project
#' x <- new_project(
#'   dataset = dataset,
#'   zones = c("Conservation", "Tourism", "Science"),
#'   costs = list(cost),
#'   locks = list(locks),
#'   themes = list(theme)
#' )
#'
#' # preview object
#' print(x)
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
    solutions = solutions,
    name = name,
    author_name = author_name,
    author_email = author_email
  )
}
