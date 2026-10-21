#' @include internal.R
NULL

#' R6 class representing a dataset
#'
#' A dataset is used to store and access information about a set spatial layers.
#'
#' @family class
#'
#' @export
Dataset <- R6::R6Class(
  "Dataset",

  public = list(
    #' @field pu_path `character` file path.
    pu_path = NULL,

    #' @field pu_db_con [DBI::dbConnect()] database connection object.
    pu_db_con = NULL,

    #' @field pu_db_table `character` object.
    pu_db_table = NULL,

    #' @field boundary_path `character ` file path.
    boundary_path = NULL,

    #' @field boundary_data [Matrix::sparseMatrix()] object.
    boundary_data = NULL,

    #' @field n_pu `integer` value.
    n_pu = NULL,

    #' @description
    #' Create a `Dataset` object.
    #' @param pu_path `character ` file path.
    #' @param boundary_path `character` file path.
    #' @return A new `Dataset` object.
    initialize = function(pu_path, boundary_path) {
      # assert that arguments are valid
      assertthat::assert_that(
        ## pu_path
        assertthat::is.string(pu_path),
        assertthat::noNA(pu_path),
        ## boundary_path
        assertthat::is.string(boundary_path),
        assertthat::noNA(boundary_path)
      )
      # set boundary field
      self$boundary_path <- boundary_path
      self$pu_path <- pu_path
      # initialize database connection
      private$open_db_con()
      on.exit(private$close_db_con(), add = TRUE, after = TRUE)
      # set database fields
      pu_table <- DBI::dbListTables(self$pu_db_con)
      pu_table <- pu_table[!startsWith(pu_table, "gpkg_")]
      pu_table <- pu_table[!startsWith(pu_table, "rtree_")]
      pu_table <- pu_table[!startsWith(pu_table, "sqlite_")]
      assertthat::assert_that(assertthat::is.string(pu_table))
      self$pu_db_table <- pu_table
      # store additional fields
      self$n_pu <- DBI::dbGetQuery(
        self$pu_db_con,
        paste0("SELECT COUNT(*) FROM \"", self$pu_db_table, "\"")
      )[[1]]
      # additional validation
      assertthat::assert_that(
        "_index" %in% DBI::dbListFields(self$pu_db_con, self$pu_db_table),
        msg = "`pu_path` must have a column called \"_index\"."
      )
    },

    #' @description
    #' Get number of planning units.
    #' @return An `integer` value.
    get_n_pu = function() {
      self$n_pu
    },

    #' @description
    #' Get boundary data.
    #' @return A [Matrix::sparseMatrix()] object.
    get_boundary_data = function() {
      # if needed, load boundary data
      if (is.null(self$boundary_data)) {
        # import data
        self$boundary_data <- read_matrix(self$boundary_path)
        # validate data
        assertthat::assert_that(
          identical(ncol(self$boundary_data), self$n_pu),
          msg =
            "`pu_path` must have the same number of rows as `boundary_path`."
        )
      }
      # return boundary data
      self$boundary_data
    },

    #' @description
    #' Get column names.
    #' @return A `character` vector.
    get_column_names = function() {
      # initialize database connection
      private$open_db_con()
      on.exit(private$close_db_con(), add = TRUE, after = TRUE)
      # list database fields
      DBI::dbListFields(self$pu_db_con, self$pu_db_table)
    },

    #' @description
    #' Get `data.frame` with data.
    #' @param column `character` vector. Defaults to `NULL` such that
    #' all columns are returned.
    #' @return A `data.frame` object.
    get_dataframe = function(column = NULL) {
      # assert arguments are valid
      if (!is.null(column)) {
        assertthat::assert_that(
          self$has_column(column),
          msg = paste0("Dataset does not have column \"", column, "\".")
        )
      }
      # if column is NULL, then override with column names
      if (is.null(column)) {
        column <- setdiff(self$get_column_names(), c("fid", "geom", "geometry"))
      }
      column <- paste(paste0("\"", column, "\""), collapse = ",")
      # initialize database connection
      private$open_db_con()
      on.exit(private$close_db_con(), add = TRUE, after = TRUE)
      # return values
      DBI::dbGetQuery(
        self$pu_db_con,
        paste0("SELECT ", column, " FROM ", self$pu_db_table)
      )
    },

    #' @description
    #' Get [sf::st_sf()] object with data.
    #' @param column `character` vector. Defaults to `NULL` such that
    #' all columns are returned.
    #' @return A [sf::st_sf()] object.
    get_sf = function(column = NULL) {
      # if column is NULL, return full dataset
      if (is.null(column)) return(sf::read_sf(self$pu_path))
      # assert arguments are valid
      assertthat::assert_that(
        is.character(column),
        assertthat::noNA(column)
      )
      # import data and return specified column(s)
      sf::read_sf(
        self$pu_path,
        query = paste0(
          "SELECT ",
          paste(paste0("\"", column, "\""), collapse = ","),
          ",\"geom\" FROM ", self$pu_db_table
        )
      )
    },

    #' @description
    #' Get column data.
    #' @param column `character` value.
    #' @return A vector.
    get_column_data = function(column) {
      # assert arguments are valid
      assertthat::assert_that(assertthat::is.string(column))
      # return vector
      self$get_dataframe(column)[[1]]
    },

    #' @description
    #' Get total (sum) of values in a column.
    #' @param column `character` or `integer` value.
    #' @return A `character` vector of layer names.
    get_column_total = function(column) {
      # assert arguments are valid
      assertthat::assert_that(self$has_column(column))
      # return sum of values
      colSums(self$get_dataframe(column), na.rm = TRUE)
    },

    #' @description
    #' Identify which planning units would be associated with a zone
    #' depending on columns used to allocate them.
    #' @param zone `character` value with name of zone.
    #' @param allocation Named `character` vector with column names
    #' indicating which planning units should be allocated to each zone.
    #' Note that the names of `allocation` indicate the zone names.
    #' Additionally, zones are allocated in order of decreasing priority. For
    #' example with
    #' `allocation = c("Biodiversity" = "aspas", "Scientific" = "camps")`,
    #' planning units are first assigned to the Scientific zone based on
    #' the values in the `"camps"` column, and then to the Biodiversity zone
    #' based on the values in the `"aspas"` column. If  any planning unit
    #' was previously assigned to the Scientific zone,  then it is overridden
    #' with the Biodiversity zone.
    #' @return A `numeric` vector with binary values indicating if each
    #' planning unit is allocated to the `zone`.
    get_pu_status = function(zone, allocation) {
      # assert arguments are valid
      assertthat::assert_that(
        assertthat::is.string(zone),
        is.character(allocation),
        assertthat::noNA(zone)
      )
      if (length(allocation) > 0L) {
        assertthat::assert_that(
          !is.null(names(allocation)),
          self$has_column(allocation)
        )
      }
      # if no planning units allocated to zone, then return 0
      if (
        identical(length(allocation), 0L) ||
        !zone %in% names(allocation)
      ) {
        return(rep(0, self$get_n_pu()))
      }
      # get data frame with allocations
      pu_data <- self$get_dataframe(unique(allocation))
      # create vector with binary values indicating if planning unit is assigned
      # the zone based on the data in the allocation columns
      out <- numeric(self$get_n_pu())
      for (i in seq(length(allocation), 1L)) {
        idx <- which(pu_data[[allocation[[i]]]] > 1e-5)
        out[idx] <- as.numeric(identical(names(allocation)[[i]], zone))
      }
      # return output
      out
    },

    #' @description
    #' Get proportion of values in a column that would be considered to by
    #' held by selected planning units.
    #' @param column `character` vector of column names.
    #' @param status `numeric` vector with binary values for each
    #' planning unit.
    #' @return A `numeric` value.
    get_column_held = function(column, status) {
      # assert arguments are valid
      assertthat::assert_that(
        length(column) > 0,
        self$has_column(column),
        is.numeric(status),
        identical(length(status), self$get_n_pu())
      )
      # run calculations
      m <- as.matrix(self$get_dataframe(column))
      total <- colSums(m, na.rm = TRUE)
      held <- colSums(
        m * matrix(status, ncol = length(column), nrow = nrow(m)),
        na.rm = TRUE
      )
      # return proportion held
      unname(held / total)
    },

    #' @description
    #' Check if the dataset has a column or columns.
    #' @param column `character vector.
    #' @return A `logical` value.
    has_column = function(column) {
      (length(column) > 0) &&
        all(column %in% self$get_column_names())
    },

    #' @description
    #' Set column data.
    #' @param column `character` value.
    #' @param values `numeric` vector.
    #' @return An invisible `TRUE` indicating success.
    set_column_data = function(column, values) {
      # assert arguments are valid
      assertthat::assert_that(
        assertthat::is.string(column),
        assertthat::noNA(column),
        identical(length(values), self$get_n_pu())
      )
      # initialize database connection
      private$open_db_con()
      on.exit(private$close_db_con(), add = TRUE, after = TRUE)
      # execute the follow commands as a single database transaction
      DBI::dbWithTransaction(self$pu_db_con, {

        # if needed, remove existing column from database
        if (column %in% DBI::dbListFields(self$pu_db_con, self$pu_db_table)) {
          DBI::dbExecute(
            self$pu_db_con,
            paste0(
              "ALTER TABLE ", self$pu_db_table, " DROP COLUMN ", column, ";"
            )
          )
        }
        # add new column to table
        if (is.double(values)) {
          column_type <- "REAL"
        } else if (is.integer(values)) {
          column_type <- "INTEGER"
        } else if (is.character(values)) {
          column_type <- "VARCHAR(255)"
        } else {
          stop("`values` must be a numeric or character vector.")
        }
        DBI::dbExecute(
          self$pu_db_con,
          paste0(
            "ALTER TABLE \"", self$pu_db_table, "\" ADD COLUMN \"",
            column, "\" ", column_type, ";"
          )
        )
        # create temporary table in database with values
        DBI::dbWriteTable(
          self$pu_db_con,
          "temp_updates",
          tibble::tibble(value = values, `_index` = seq_along(values)),
          temporary = TRUE, overwrite = TRUE
        )
        # create database index for pu table
        existing_index <- DBI::dbGetQuery(
          self$pu_db_con,
          paste0("PRAGMA index_list(\"", self$pu_db_table, "\");")
        )
        if (!"pu_idx" %in% existing_index$name) {
          DBI::dbExecute(
            self$pu_db_con,
            paste0(
             "CREATE INDEX \"pu_idx\" ON \"", self$pu_db_table,"\"(\"_index\");"
            )
          )
        }
        # create index for temporary table
        DBI::dbExecute(
          self$pu_db_con,
          paste0(
           "CREATE INDEX \"temp_idx\" ON \"temp_updates\"(\"_index\");"
          )
        )
        # update main table in database
        DBI::dbExecute(
          self$pu_db_con,
          paste0(
            "UPDATE \"", self$pu_db_table,
            "\" SET \"", column, "\" = (",
            " SELECT \"value\" FROM \"temp_updates\"",
            " WHERE \"temp_updates\".\"_index\" = \"", self$pu_db_table,
            "\".\"_index\" ) ",
            "WHERE EXISTS ( SELECT 1 FROM \"temp_updates\"",
            " WHERE \"temp_updates\".\"_index\" = \"",
            self$pu_db_table, "\".\"_index\" );"
          )
        )
        # clean up temporary table and index
        DBI::dbRemoveTable(self$pu_db_con, "temp_updates")
        DBI::dbExecute(
          self$pu_db_con,
          paste0("DROP INDEX IF EXISTS \"temp_idx\";")
        )
      })
      # return self
      invisible(self)
    }
  ),

  private = list(

    open_db_con = function() {
      # if connection is not already initialized, then initialize it
      if (is.null(self$pu_db_con)) {
        # initialize connection
        self$pu_db_con <- DBI::dbConnect(
          RSQLite::SQLite(),
          dbname = self$pu_path
        )
        # enable spatial extension for database connection
        if (identical(.Platform$OS.type, "windows")) {
          #nocov start
          assertthat::assert_that(
            nzchar(Sys.getenv("RTOOLS45_HOME")),
            msg = "System variable \"RTOOLS45_HOME\" must be defined."
          )
          ext_path <- dir(
            "mod_spatialite\\.dll$",
            path = Sys.getenv("RTOOLS45_HOME"),
            recursive = TRUE,
            full.names = TRUE
          )
          assertthat::assert_that(
            assertthat::is.string(ext_path),
            msg = "Couldn't find \"mod_spatialite.dll\" at \"RTOOLS45_HOME\"."
          )
          withr::with_dir(
            dirname(ext_path),
            DBI::dbExecute(
              self$pu_db_con,
              paste0("SELECT load_extension('", ext_path, "');")
            )
          )
          # nocov end
        } else {
          DBI::dbExecute(
            self$pu_db_con,
            "SELECT load_extension('mod_spatialite');"
          )
        }
      }
      invisible(NULL)
    },

    close_db_con = function() {
      # if connection is already initialized, then close it
      if (!is.null(self$pu_db_con)) {
        DBI::dbDisconnect(self$pu_db_con)
        self$pu_db_con <- NULL
      }
      invisible(NULL)
    },

    finalize = function() {
      private$close_db_con()
    }

  )
)

#' New dataset
#'
#' Create a new [`Dataset`] object.
#'
#' @param pu_path `character` file path.
#'
#' @param boundary_path `character` file path.
#'
#' @return A [`Dataset`] object.
#'
#' @seealso
#' See [create_dataset_from_sf()] to automatically convert a [sf::st_sf()]
#' object to a [new_dataset()] object.
#'
#' @family method
#'
#' @examples
#' # simulate spatial data
#' sim_data <- simulate_spatial_data()
#'
#' # save spatial data to temporary file
#' sim_path1 <- tempfile(fileext = ".gpkg")
#' sf::write_sf(sim_data, sim_path1)
#'
#' # manually prepare boundary data
#' sim_path2 <- tempfile(fileext = ".rds")
#' bd_data <- prioritizr::boundary_matrix(sim_data)
#' write_matrix(bd_data, sim_path2)
#'
#' # create object
#' x <- new_dataset(sim_path1, sim_path2)
#'
#' # preview object
#' print(x)
#'
#' @export
new_dataset <- function(pu_path, boundary_path) {
  # create new dataset
  Dataset$new(pu_path = pu_path, boundary_path = boundary_path)
}
