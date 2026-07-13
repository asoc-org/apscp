test_that("add_sidebar_control", {
  skip_if_missing_mapbox_token()
  # create object
  m <- add_sidebar_control(mapgl::mapboxgl(), "sidebar")
  # run tests
  expect_s3_class(m, "mapboxgl")
})

test_that("sidebar_pane (with icon)", {
  # create object
  x <- sidebar_pane(
    title = "home", id = "home_id", icon = shiny::icon("home"),
    shiny::tagList(shiny::h3("content"))
  )
  # run tests
  ## pane container
  expect_s3_class(x, "shiny.tag")
  expect_equal(x$name, "div")
  expect_equal(htmltools::tagGetAttribute(x, "id"), "home_id")
  expect_equal(htmltools::tagGetAttribute(x, "class"), "mapsidebar-pane")
  expect_length(x$children, 2L)
  ## header
  expect_s3_class(x$children[[1]], "shiny.tag")
  expect_equal(x$children[[1]]$name, "h3")
  expect_equal(
    htmltools::tagGetAttribute(x$children[[1]], "class"),
    "mapsidebar-pane-header mapsidebar-pane-header-icon"
  )
  ## content
  expect_s3_class(x$children[[2]], "shiny.tag")
  expect_equal(x$children[[2]]$name, "div")
  expect_equal(
    htmltools::tagGetAttribute(x$children[[2]], "class"),
    "mapsidebar-pane-content"
  )
  expect_equal(
    as.character(x$children[[2]]$children[[1]]),
    as.character(shiny::h3("content"))
  )
})

test_that("sidebar_pane (without icon)", {
  # create object
  x <- sidebar_pane(
    title = "home", id = "home_id", icon = NULL,
    shiny::tagList(shiny::h3("content"))
  )
  # run tests
  ## pane container
  expect_s3_class(x, "shiny.tag")
  expect_equal(x$name, "div")
  expect_equal(htmltools::tagGetAttribute(x, "id"), "home_id")
  expect_equal(htmltools::tagGetAttribute(x, "class"), "mapsidebar-pane")
  expect_length(x$children, 2L)
  ## header
  expect_s3_class(x$children[[1]], "shiny.tag")
  expect_equal(x$children[[1]]$name, "h3")
  expect_equal(
    htmltools::tagGetAttribute(x$children[[1]], "class"),
    "mapsidebar-pane-header"
  )
  ## content
  expect_s3_class(x$children[[2]], "shiny.tag")
  expect_equal(x$children[[2]]$name, "div")
  expect_equal(
    htmltools::tagGetAttribute(x$children[[2]], "class"),
    "mapsidebar-pane-content"
  )
  expect_equal(
    as.character(x$children[[2]]$children[[1]]),
    as.character(shiny::h3("content"))
  )
})

test_that("sidebar_tabs", {
  # create object
  s1 <- sidebar_pane(
    title = "home", id = "home_id", icon = shiny::icon("home"),
    shiny::tagList(shiny::h3("content"))
  )
  s2 <- sidebar_pane(
    title = "Profile", id = "profile_id", icon = icon("wrench"),
    shiny::tagList(shiny::h5("about"))
  )
  x <- sidebar_tabs(id = "sidebar", list(icon("car"), icon("user")), s1, s2)
  # run tests
  ## sidebar
  expect_s3_class(x, "shiny.tag")
  expect_equal(x$name, "div")
  expect_equal(htmltools::tagGetAttribute(x, "id"), "sidebar")
  expect_equal(htmltools::tagGetAttribute(x, "class"), "mapsidebar collapsed")
  expect_type(htmltools::htmlDependencies(x), "list")
  expect_equal(htmltools::htmlDependencies(x)[[1]]$name, "sidebar")
  expect_length(x$children, 2L)
  ## sidebar tabs
  expect_s3_class(x$children[[1]], "shiny.tag")
  expect_equal(x$children[[1]]$name, "div")
  expect_equal(
    htmltools::tagGetAttribute(x$children[[1]], "class"),
    "mapsidebar-tabs"
  )
  xtabs <- htmltools::tagQuery(x$children[[1]])$find("li")$selectedTags()
  expect_equal(
    htmltools::tagGetAttribute(xtabs[[1]]$children[[1]], "href"),
    "#home_id"
  )
  expect_equal(
    htmltools::tagGetAttribute(xtabs[[2]]$children[[1]], "href"),
    "#profile_id"
  )
  ## sidebar panes
  expect_s3_class(x$children[[2]], "shiny.tag")
  expect_equal(x$children[[2]]$name, "div")
  expect_equal(
    htmltools::tagGetAttribute(x$children[[2]], "class"),
    "mapsidebar-content"
  )
  xpanes <-
    htmltools::tagQuery(x$children[[2]])$find(".mapsidebar-pane")$selectedTags()
  expect_equal(as.character(xpanes[[1]]), as.character(s1))
  expect_equal(as.character(xpanes[[2]]), as.character(s2))
})
