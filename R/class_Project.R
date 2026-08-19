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

    #' @field tiles `list` of [new_tile()] objects.
    tiles = NULL,

    #' @field zones `character` vector of zone names.
    zones = NULL,

    #' @field features `list` of [new_feature()] objects.
    features = NULL,

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

    #' @field version `character` value with package version used
    #' to create the project.
    version = "Unknown",

    #' @description
    #' Create a `Project` object.
    #' @param dataset [new_dataset()] object.
    #' @param tiles `list` of [new_tile()] objects.
    #' @param zones `character` vector of zone names.
    #' @param features `list` of [new_feature()] objects.
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
    #' @param version `character` value with package version used
    #' to create the project.
    #' Defaults to `"Unknown"`.
    #' @return A new `Project` object.
    initialize = function(
      zones, dataset, tiles,
      features, locks, costs, solutions = list(),
      name = "Project", author_name = "Unknown", author_email = "Unknown",
      version = "Unknown"
    ) {
      # assert arguments are valid
      assertthat::assert_that(
        ## dataset
        inherits(dataset, "Dataset"),
        ## tiles
        is.list(tiles),
        all_elements_inherit(tiles, "Tile"),
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
        ## version
        assertthat::is.string(version),
        assertthat::noNA(version),
        ## features
        is.list(features),
        all_elements_inherit(features, "Feature"),
        ## locks
        is.list(locks),
        all_elements_inherit(locks, "Lock"),
        ## costs
        is.list(costs),
        all_elements_inherit(costs, "Cost"),
        ## solutions
        is.list(solutions)
      )
      assertthat::assert_that(
        all(
          vapply(features, function(y) length(y$zone_targets), integer(1)) ==
          length(zones)
        ),
        msg = paste(
          "All `features` must have `zone_targets` that specify a value",
          "for each zone in `zones`."
        )
      )
      assertthat::assert_that(
        all(vapply(locks, `[[`, character(1), "zone") %in% zones),
        msg = "`locks` must contain only zones that are present in `zones`."
      )
      assertthat::assert_that(
        all(vapply(costs, `[[`, character(1), "zone") %in% zones),
        msg = "`costs` must contain only zones that are present in `zones`."
      )
      if (length(solutions) > 0) {
        assertthat::assert_that(
          all_elements_inherit(solutions, "Solution")
        )
      }

      # assign fields
      self$dataset <- dataset
      self$tiles <- tiles
      self$zones <- zones
      self$features <- features
      self$locks <- locks
      self$costs <- costs
      self$solutions <- solutions
      self$name <- name
      self$author_name <- author_name
      self$author_email <- author_email
      self$version <- version
    },

    #' @description
    #' Get centroid.
    #' @param native `logical` value indicating if the bounding box should
    #' be in (`TRUE`) the native coordinate reference system or (`FALSE`)
    #' re-projected to longitude/latitude?
    #' @return A `numeric` vector with two values.
    get_centroid = function(native = TRUE) {
      bb <- self$get_bbox(native = native)
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
      bb <- self$dataset$get_bbox()
      x_buffer <- expand * (bb$xmax - bb$xmin)
      y_buffer <- expand * (bb$ymax - bb$ymin)
      b <- c(
        xmin = unname(bb$xmin - x_buffer),
        ymin = unname(bb$ymin - y_buffer),
        xmax = unname(bb$xmax + x_buffer),
        ymax = unname(bb$ymax + y_buffer)
      )
      # if not native, then convert to WGS1984
      if (!isTRUE(native)) {
        # reproject coordinates
        b <- sf::st_bbox(b, crs = sf::st_crs(bb))
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
        crs <- sf::st_crs(bb)
      }
      # return result
      sf::st_bbox(b, crs = crs)
    },


    #' @description
    #' Get solution from the project.
    #' @param id `character` value.
    #' @return A [new_solution()] object.
    get_solution = function(id) {
      # assert arguments are valid
      assertthat::assert_that(assertthat::is.string(id))
      # find identifiers
      i <- which(vapply(self$solutions, `[[`, character(1), "id") == id)
      assertthat::assert_that(
        identical(length(i), 1L),
        msg = "Couldn't find solution with matching `id`."
      )
      # return solution
      self$solutions[[i]]
    },

    #' @description
    #' Get lock from the project.
    #' @param id `character` value.
    #' @return A [new_solution()] object.
    get_lock = function(id) {
      # assert arguments are valid
      assertthat::assert_that(assertthat::is.string(id))
      # find identifiers
      i <- which(vapply(self$locks, `[[`, character(1), "id") == id)
      assertthat::assert_that(
        identical(length(i), 1L),
        msg = "Couldn't find lock with matching `id`."
      )
      # return locks
      self$locks[[i]]
    },

    #' @description
    #' Add a new solution to the project.
    #' @param x [new_solution()] object.
    #' @return An invisible `TRUE` indicating success.
    add_solution = function(x) {
      # assert arguments are valid
      assertthat::assert_that(inherits(x, "Solution"))
      # add solution to project
      self$solutions[[length(self$solutions) + 1]] <- x
      # add tile
      self$add_tile(x$layer$tile)
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
      self$locks[[length(self$locks)]] <- x
      # add tile
      self$add_tile(x$layer$tile)
      # return TRUE
      invisible(TRUE)
    },

    #' @description
    #' Add a tile to the project.
    #' @param x [new_tile()] object.
    #' @return An invisible `TRUE` indicating success.
    add_tile = function(x) {
      # assert arguments are valid
      assertthat::assert_that(inherits(x, "Tile"))
      # if needed, add tile
      if (!x$path %in% vapply(self$tiles, `[[`, character(1), "path")) {
        self$tiles[[length(self$tiles) + 1L]] <- x
      }
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
#' @param tiles `list` of [new_tile()] objects.
#'
#' @param costs `list` of [new_cost()] objects.
#'
#' @param features `list` of [new_features()] objects.
#'
#' @param locks `list` of [new_locks()] objects.
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
#' @param version `character` version of package used to create the project.
#' Defaults to `NULL`, such that the current package version is used.
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
#' tile <- create_tile(sim_data)
#'
#' # create cost
#' cost <- new_cost(
#'   name = "cost",
#'   zone = "Science",
#'   weight = 0.1,
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
#'   zone = "Biodiversity",
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
#' # create features
#' features <- list(
#'   new_feature(
#'     name = "f1",
#'     zone_targets = c(0.1, 0.2, 0.5),
#'     zone_weights = c(0.2, 0.1, 0.3),
#'     zone_helds = c(0, 0.1, 0),
#'     themes = list(new_theme(zone = "Biodiversity", name = "Penguins")),
#'     layer = new_layer(
#'       column = "feat_1",
#'       total = 500,
#'       dataset = dataset,
#'       tile = tile,
#'       legend = simulate_continuous_legend(),
#'       provenance = simulate_provenance()
#'     )
#'   ),
#'   new_feature(
#'     name = "f2",
#'     zone_targets = c(0.01, 0.04, 0.9),
#'     zone_weights = c(0.8, 0.1, 0.05),
#'     zone_helds = c(0.2, 0, 0),
#'     themes = list(
#'       new_theme(zone = "Biodiversity", name = "Penguins"),
#'       new_theme(zone = "Tourism", name = "Charismatic species")
#'     ),
#'     layer = new_layer(
#'       column = "feat_2",
#'       total = 200,
#'       dataset = dataset,
#'       tile = tile,
#'       legend = simulate_continuous_legend(),
#'       provenance = simulate_provenance()
#'     )
#'   )
#' )
#'
#' # create project
#' x <- new_project(
#'   zones = c("Biodiversity", "Tourism", "Science"),
#'   dataset = dataset,
#'   tiles = list(tile),
#'   costs = list(cost),
#'   locks = list(lock),
#'   features = features
#' )
#'
#' # preview object
#' print(x)
#'
#' @export
new_project <- function(
  zones,
  dataset,
  tiles,
  costs,
  features,
  locks,
  solutions = list(),
  name = "Project",
  author_name = "Unknown",
  author_email = "Unknown",
  version = NULL
) {
  # if needed, set version based on current version
  if (is.null(version)) {
    version <-  as.character(utils::packageVersion("apscp"))
  }
  # create new dataset
  Project$new(
    zones = zones,
    dataset = dataset,
    tiles = tiles,
    costs = costs,
    features = features,
    locks = locks,
    solutions = solutions,
    name = name,
    author_name = author_name,
    author_email = author_email,
    version = version
  )
}
