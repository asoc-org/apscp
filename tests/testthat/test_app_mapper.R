test_that("app_mapper", {
  # define skips
  skip_on_cran()
  skip_if_not_installed("shinytest2")
  skip_if_chrome_not_installed()
  skip_if_missing_mapbox_token()
  # find application
  path <- system.file("examples", "mapper", package = "apscp")
  # initialize application
  shinytest2::local_app_support(path)
  app <- shinytest2::AppDriver$new(
    path, variant = shinytest2::platform_variant(),
    name = "mapper",
    seed = 500, options = list(shiny.port = 8088),
    height = 810, width = 1407
  )
  on.exit(app$stop())
  # run tests
  ## initialization
  app$wait_for_idle()
  app$expect_screenshot(name = "01-initial", delay = 3)
  ## generate new solution
  app$click("new_solution")
  app$expect_screenshot(name = "02-generate-solution", delay = 3)
  ## hide the new solution
  app$click(selector = ".solution-layer:nth-child(1) .layer-checkbox-container")
  app$wait_for_idle()
  app$expect_screenshot(name = "03-hide-layer", delay = 3)
  ## delete first feature layer
  app$click(selector = ".feature-layer:nth-child(2) .layer-button")
  app$wait_for_idle()
  app$expect_screenshot(name = "04-delete-layer", delay = 3)
  ## hide legend for second feature layer
  app$click(selector = ".feature-layer:nth-child(2) .legend-checkbox-container")
  app$wait_for_idle()
  app$expect_screenshot(name = "05-hide-legend", delay = 3)
  ## delete first solution layer and all feature layers
  app$click(selector = ".solution-layer:nth-child(1) .layer-button")
  for (i in seq_len(4)) {
    app$wait_for_idle()
    app$click(selector = ".feature-layer:nth-child(1) .layer-button")
  }
  app$wait_for_idle()
  app$expect_screenshot(name = "06-delete-layers", delay = 3)
  ## highlight continuous legend
  app$click(selector = ".cost-layer .legend-container")
  app$wait_for_idle()
  app$expect_screenshot(name = "07-highlight-continuous-legend")
  ## delete cost layer
  app$click(selector = ".cost-layer:nth-child(1) .layer-button")
  app$wait_for_idle()
  app$expect_screenshot(name = "08-delete-layer", delay = 3)
  ## highlight categorical legend
  app$click(selector = ".lock-layer .legend-container .item")
  app$wait_for_idle()
  app$expect_screenshot(name = "09-highlight-categorical-legend", delay = 3)
  ## delete cost layer
  app$click(selector = ".lock-layer:nth-child(1) .layer-button")
  app$wait_for_idle()
  app$expect_screenshot(name = "10-delete-layer", delay = 3)
  ## highlight solution layer
  app$click(selector = ".solution-layer .legend-container .item:nth-child(4)")
  app$wait_for_idle()
  app$expect_screenshot(name = "11-highlight-solution-legend", delay = 3)
})
