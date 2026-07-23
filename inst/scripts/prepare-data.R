# Initialization
## load package
devtools::load_all()

## set parameters
### parameters for loading in data
metadata_path <- "data-raw/metadata.csv"
target_path <- "Targets/Unadjusted/Tar_BG_tves_baseline_unadjust.csv"
data_path <- "data-raw/29092346.zip"
### parameters for project metadata
project_name = "Antarctic Peninsula"
project_author_name = "Jasmine Lee"
project_author_email = "jasmine.lee@monash.edu"
### parameters for tiling
max_zoom <- 8

## define helper functions
convert_na_to_null <- function(x) {
  if (is.na(x)[[1]]) return(NULL)
  x
}

# Preliminary processing
## archive to temporary directory
td <- tempfile()
dir.create(td, showWarnings = FALSE, recursive = TRUE)
unzip(data_path, exdir = td)

## load data
metadata <- vroom::vroom(metadata_path)
target_data <- vroom::vroom(paste0(td, "/", target_path))

## prepare metadata
### validation
assertthat::assert_that(
  no_duplicates(metadata$name),
  msg = "Metadata must not have duplicate values in the `name` column."
)

### set missing values
metadata$provenance_icon[is.na(metadata$provenance_icon)] <- "question"
metadata$name[is.na(metadata$name)] <-
  tools::file_path_sans_ext(metadata$file[is.na(metadata$name)])
metadata$theme[is.na(metadata$theme)] <- "Other"
metadata$units[is.na(metadata$units)] <- "unknown"
metadata$palette[is.na(metadata$palette)] <- "rocket"
metadata$provenance_source[is.na(metadata$provenance_source)] <- "missing"

### set legend type
metadata$type <- "continuous"
metadata$type[metadata$units == "presence/absence"] <- "presence/absence"
metadata$type[metadata$units == "presence"] <- "presence"

### set provenance description text
metadata$provenance_description <- paste0(
  "Obtained from <a href=\"", metadata$provenance_url, "\">",
  metadata$provenance_source, "</a>"
)
metadata$provenance_description[is.na(metadata$provenance_url)] <-
  metadata$provenance_source[is.na(metadata$provenance_url)]

## prepare targets data
### assign targets
match_name <- tools::file_path_sans_ext(metadata$file)
match_name <- gsub("_1km", "", match_name, fixed = TRUE)
idx <- match(target_data$NAME, match_name)
metadata$conservation_target <- NA_real_
metadata$scientific_target <- NA_real_
metadata$tourism_target <- NA_real_
metadata$conservation_target[idx] <- target_data$Bio_Tar
metadata$scientific_target[idx] <- target_data$Sci_Tar
metadata$tourism_target[idx] <- target_data$Tour_Tar
### set targets to NA for non-feature data
idx <- metadata$class != "feature"
metadata$conservation_target[idx] <- NA_real_
metadata$scientific_target[idx] <- NA_real_
metadata$tourism_target[idx] <- NA_real_
## assert that all features have targets
idx <- metadata$class == "feature"
assertthat::assert_that(
  assertthat::noNA(metadata$conservation_target[idx]),
  assertthat::noNA(metadata$scientific_target[idx]),
  assertthat::noNA(metadata$tourism_target[idx]),
  msg = "targets must not have missing values"
)

## prepare raster data
### import data
raster_paths <- dir(td, "^.*\\.tif$", full.names = TRUE, recursive = TRUE)
raster_paths <- raster_paths[match(metadata$file, basename(raster_paths))]
assertthat::assert_that(
  assertthat::noNA(raster_paths),
  msg =
    "Metadata must have values in the `file` column that exist in the archive."
)
raster_data <- terra::rast(raster_paths)
names(raster_data) <- metadata$name

### standardize layers according to planning units
assertthat::assert_that(
  sum(metadata$class == "pu") == 1,
  msg = paste(
    "Metadata must have only a single row with 'pu' value in the",
    "`class` column."
  )
)
pu_data <- raster_data[[metadata$name[metadata$class == "pu"]]]
raster_data <- terra::mask(raster_data, mask = pu_data)

### set 0s to NA values for layers with presence units
for (l in metadata$name[metadata$units == "presence"]) {
  raster_data[[l]] <- terra::ifel(raster_data[[l]] == 1, 1, NA_real_)
}

### convert raster data to planning units
idx <- terra::cells(is.na(pu_data), 0)[[1]]
vector_data <- sf::st_as_sf(
  terra::as.polygons(
    pu_data, values = TRUE, na.rm = TRUE, na.all = TRUE, dissolve = FALSE
  )
)
vector_data[["_index"]] <- seq_len(nrow(vector_data))
vector_data <- vector_data[,
  c("_index", setdiff(names(vector_data), "_index")),
  drop = FALSE
]
for (i in names(raster_data)) {
  vector_data[[i]] <- raster_data[[i]][idx][[1]]
}

## create boundary_data
boundary_data <- prioritizr::boundary_matrix(pu_data)
boundary_data <- boundary_data[idx, idx]

# Main processing
## create dataset
dataset <- new_dataset(vector_data, boundary_data)

## create tiles
td <- tempdir()
tile <- create_tile(
  vector_data[, setdiff(names(vector_data), "_index"), drop = FALSE],
  path = file.path(td, "antarctic-peninsula.pmtiles"),
  max_zoom = max_zoom
)
tileset <- new_tileset(list(tile), dir = td, max_zoom = max_zoom)

## create locks
locks <-
  {metadata[metadata$class == "lock", , drop = FALSE]} |>
  split(~ name) |>
  lapply(function(x) {
    new_lock(
      name = x$name,
      layer = new_layer(
        dataset = dataset,
        column = x$name,
        total = dataset$get_column_total(x$name),
        details = convert_na_to_null(x$details),
        visible = x$visible,
        tile = tile,
        provenance = new_provenance(
          name = x$provenance_source,
          icon = x$provenance_icon,
          color = "#000000",
          description = x$provenance_description
        ),
        legend = create_legend(
          x = vector_data,
          column = x$name,
          palette = x$palette,
          type = x$type,
          units = x$units
        )
      )
    )
  }) %>%
  unname()

## create costs
costs <-
  {metadata[metadata$class == "cost", , drop = FALSE]} |>
  split(~ name) |>
  lapply(function(x) {
    new_cost(
      name = x$name,
      layer = new_layer(
        dataset = dataset,
        column = x$name,
        total = dataset$get_column_total(x$name),
        details = convert_na_to_null(x$details),
        visible = x$visible,
        tile = tile,
        provenance = new_provenance(
          name = x$provenance_source,
          icon = x$provenance_icon,
          color = "#000000",
          description = x$provenance_description
        ),
        legend = create_legend(
          x = vector_data,
          column = x$name,
          palette = x$palette,
          type = x$type,
          units = x$units
        )
      )
    )
  }) %>%
  unname()

## create features
features <-
  {metadata[metadata$class == "feature", , drop = FALSE]} |>
  split(~ name) |>
  lapply(function(x) {
    new_feature(
      name = x$name,
      targets = c(x$conservation_target, x$scientific_target, x$tourism_target),
      layer = new_layer(
        dataset = dataset,
        column = x$name,
        total = dataset$get_column_total(x$name),
        details = convert_na_to_null(x$details),
        visible = x$visible,
        tile = tile,
        provenance = new_provenance(
          name = x$provenance_source,
          icon = x$provenance_icon,
          color = "#000000",
          description = x$provenance_description
        ),
        legend = create_legend(
          x = vector_data,
          column = x$name,
          palette = x$palette,
          type = x$type,
          units = x$units
        )
      )
    )
  }) %>%
  unname()

## create themes
themes <-
  {metadata[metadata$class == "feature", , drop = FALSE]} |>
  split(~ theme) |>
  lapply(function(x) {
    new_theme(
      name = x$theme[[1]],
      features = features[
        vapply(features, function(x) x$name, character(1)) %in% x$name
      ]
    )
  }) %>%
  unname()

## create project
project <- new_project(
  zones = c("Conservation area", "Scientific area", "Tourism area"),
  dataset = dataset,
  tileset = tileset,
  themes = themes,
  costs = costs,
  locks = locks,
  name = project_name,
  author_name = project_author_name,
  author_email = project_author_email
)

# Exports
## write project
write_project(project, "inst/extdata/antarctic-peninsula.yml")
