test_that("app_sidebar", {
  # define skips
  skip_on_cran()
  skip_if_not_installed("shinytest2")
  skip_if_chrome_not_installed()
  skip_if_missing_mapbox_token()
  # find application
  path <- system.file("examples", "sidebar", package = "apscp")
  # initialize application
  shinytest2::local_app_support(path)
  app <- shinytest2::AppDriver$new(
    path, variant = shinytest2::platform_variant(),
    name = "sidebar",
    seed = 500, options = list(shiny.port = 8088),
    height = 810, width = 1407
  )
  on.exit(app$stop())
  # run tests
  ## initialization
  app$wait_for_idle()
  app$expect_screenshot(name = "01-initial", delay = 3)
  ## open left sidebar
  app$click("open_left")
  app$wait_for_idle()
  app$expect_screenshot(name = "02-open-left", delay = 3)
  ## close left sidebar
  app$click("close_left")
  app$wait_for_idle()
  app$expect_screenshot(name = "03-close-left", delay = 3)
  ## disable left profile sidebar
  app$click("disable_left")
  app$wait_for_idle()
  app$expect_screenshot(name = "04-disable-left", delay = 3)
  ## enable left profile sidebar
  app$click("enable_left")
  app$wait_for_idle()
  app$expect_screenshot(name = "05-enable-left", delay = 3)
  ## open right sidebar
  app$click("open_right")
  app$wait_for_idle()
  app$expect_screenshot(name = "06-open-right", delay = 3)
  ## change color of points
  app$set_inputs(col = "#880808")
  app$wait_for_idle()
  app$expect_screenshot(name = "07-points-color", delay = 3)
  ## close right sidebar
  app$click("close_right")
  app$wait_for_idle()
  app$expect_screenshot(name = "08-close-right", delay = 3)
})
