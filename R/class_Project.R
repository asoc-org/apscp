#' @include internal.R
NULL

#' Project class
#'
#' Definition for the Project class.
#'
#' @family class
#'
#' @seealso See [new_project()] to create a `Project` object.
Project <- R6::R6Class(
  "Project",
  public = list(
    #' @field dataset [new_dataset()] object.
    dataset = NULL,

    #' @field tileset `[new_tile_set()] objects.
    tileset = NULL,

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

    #' @field bbox [sf::st_bbox()] object.
    bbox = NULL,

    #' @field name `character` name of the project.
    name = "Project",

    #' @field author_name `character` name of the project author.
    author_name = "Unknown",

    #' @field author_email `character` email of the project author.
    author_email = "Unknown",

    #' @description
    #' Create a `Project` object.
    #' @param dataset [new_dataset()] object.
    #' @param tileset `[new_tile_set()] object.
    #' @param zones `character` vector of zone names.
    #' @param themes `list` of [new_theme()] objects.
    #' @param locks `list` of [new_lock()] objects.
    #' @param costs `list` of [new_cost()] objects.
    #' @param solutions `list` of [new_solution()] objects.
    #' Defaults to an empty list.
    #' @param bbox [sf::st_bbox()] object.
    #' @param name `character` name of the project.
    #' Defaults to `"Project"`.
    #' @param author_name `character` name of the project author.
    #' Defaults to `"Unknown"`.
    #' @param author_email `character` email of the project author.
    #' Defaults to `"Unknown"`.
    #' @return A new `Project` object.
    initialize = function(
      zones, bbox, dataset, tileset,
      themes, locks, costs, solutions = list(),
      name = "Project", author_name = "Unknown", author_email = "Unknown"
    ) {
      # assert arguments are valid
      assertthat::assert_that(
        ## dataset
        inherits(dataset, "Dataset"),
        ## tileset
        inherits(tileset, "Tileset"),
        ## zones
        is.character(zones),
        assertthat::noNA(zones),
        no_duplicates(zones),
        ## name
        assertthat::is.string(name),
        assertthat::noNA(name),
        ## bbox
        inherits(bbox, "bbox"),
        !is.na(sf::st_crs(bbox)),
        !is.na(sf::st_crs(bbox)$epsg),
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
      self$tileset <- tileset
      self$zones <- zones
      self$themes <- themes
      self$locks <- locks
      self$costs <- costs
      self$solutions <- solutions
      self$name <- name
      self$bbox <- bbox
      self$author_name <- author_name
      self$author_email <- author_email
    },

    #' @description
    #' Get centroid.
    #' @return A `numeric` vector with two values.
    get_centroid = function() {
      bb <- self$get_bbox()
      c((bb[[1]] + bb[[3]]) * 0.5, (bb[[2]] + bb[[4]]) * 0.5)
    },

    #' @description
    #' Get the bounding box.
    #' @param native `logical` value indicating if the bounding box should
    #' be in (`TRUE`) the native coordinate reference system or (`FALSE`)
    #' re-projected to longitude/latitude?
    #' @param expand `numeric` value denoting the proportion to expand the
    #' bounding box. For example, `expand = 0.1` would expand the bounding
    #' box by 10 percent. Defaults to 0.
    #' @return A [sf::st_bbox()] object.
    get_bbox = function(native = TRUE, expand = 0) {
      # assert arguments are valid
      assertthat::assert_that(
        assertthat::is.flag(native),
        assertthat::noNA(native),
        assertthat::is.number(expand),
        assertthat::noNA(expand)
      )
      # expand bounding box
      x_buffer <- expand * (self$bbox$xmax - self$bbox$xmin)
      y_buffer <- expand * (self$bbox$ymax - self$bbox$ymin)
      b <- c(
        xmin = unname(self$bbox$xmin - x_buffer),
        ymin = unname(self$bbox$ymin - y_buffer),
        xmax = unname(self$bbox$xmax + x_buffer),
        ymax = unname(self$bbox$ymax + y_buffer)
      )
      # if not native, then convert to WGS1984
      if (!isTRUE(native)) {
        # reproject coordinates
        b <- sf::st_bbox(b, crs = sf::st_crs(self$bbox))
        b <- sf::st_bbox(sf::st_transform(sf::st_as_sfc(b), 4326))
        # ensure valid coordinates
        b <- c(
          xmin = max(b$xmin, -180, na.rm = TRUE),
          ymin = max(b$ymin, -90, na.rm = TRUE),
          xmax = min(b$xmax, 180, na.rm = TRUE),
          ymax = min(b$ymax, 90, na.rm = TRUE)
        )
        crs <- sf::st_crs(4326)
      } else {
        crs <- sf::st_crs(self$bbox)
      }
      # return result
      sf::st_bbox(b, crs = crs)
    },

    #' @description
    #' Add a solution to the project.
    #' @param x [new_solution()] object.
    #' @return An invisible `TRUE` indicating success.
    add_solution = function(x) {
      # assert arguments are valid
      assertthat::assert_that(inherits(x, "Solution"))
      # add solution
      self$solutions[[length(self$solutions)]] <- x
      # add tile for solution
      self$tileset$tiles[[length(self$tiletset$tiles) + 1L]] <- x$layer$tile
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
      # add tile for solution
      self$tileset$tiles[[length(self$tiletset$tiles) + 1L]] <- x$layer$tile
      # return TRUE
      invisible(TRUE)
    }

  )
)

#' New project
#'
#' Create a new project object.
#'
#' @param zones `character` vector of zone names.
#'
#' @param dataset [new_dataset()] object.
#'
#' @param tileset [new_tileset()] objects.
#'
#' @param costs `list` of [new_cost()] objects.
#'
#' @param themes `list` of [new_themes()] objects.
#'
#' @param locks `list` of [new_locks()] objects.
#'
#' @param bbox [sf::st_bbox()] object.
#'
#' @param solutions `list` of [new_solution()] objects.
#' Defaults to an empty list().
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
#' @family class
#'
#' @examples
#' # simulate spatial data
#' sim_data <- simulate_spatial_data()
#'
#' # prepare data
#' dataset <- create_dataset(sim_data)
#' tileset <- create_tileset(sim_data)
#' tile <- tileset$tiles[[1]]
#'
#' # create cost
#' cost <- new_cost(
#'   name = "cost",
#'   layer = new_layer(
#'     column = "feat_1",
#'     total = 500,
#'     dataset = dataset,
#'     tile = tile,
#'     legend = simulate_continuous_legend(),
#'     provenance = simulate_provenance()
#'   )
#' )
#'
#' # create lock
#' lock <- new_lock(
#'   name = "lock",
#'   layer = new_layer(
#'     column = "locked_in",
#'     total = 30,
#'     dataset = dataset,
#'     tile = tile,
#'     legend = simulate_continuous_legend(),
#'     provenance = simulate_provenance()
#'   )
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
#'         column = "feat_1",
#'         total = 500,
#'         dataset = dataset,
#'         tile = tile,
#'         legend = simulate_continuous_legend(),
#'         provenance = simulate_provenance()
#'       )
#'     ),
#'     new_feature(
#'       name = "f2",
#'       targets = c(0.2, 0.9),
#'       layer = new_layer(
#'         column = "feat_2",
#'         total = 200,
#'         dataset = dataset,
#'         tile = tile,
#'         legend = simulate_continuous_legend(),
#'         provenance = simulate_provenance()
#'       )
#'     )
#'   )
#' )
#'
#' # create project
#' x <- new_project(
#'   zones = c("Conservation", "Tourism", "Science"),
#'   dataset = dataset,
#'   tileset = tileset,
#'   costs = list(cost),
#'   locks = list(lock),
#'   themes = list(theme),
#'   bbox = sf::st_bbox(c(0, 1, 0, 1), crs = sf::st_crs(4326))
#' )
#'
#' # preview object
#' print(x)
#'
#' @export
new_project <- function(
  zones,
  dataset,
  tileset,
  costs,
  themes,
  locks,
  bbox,
  solutions = list(),
  name = "Project",
  author_name = "Unknown",
  author_email = "Unknown"
) {
  # create new dataset
  Project$new(
    zones = zones,
    dataset = dataset,
    tileset = tileset,
    costs = costs,
    themes = themes,
    locks = locks,
    solutions = solutions,
    bbox,
    name = name,
    author_name = author_name,
    author_email = author_email
  )
}
