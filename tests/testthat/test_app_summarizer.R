test_that("app_summarizer", {
  # define skips
  skip_on_cran()
  skip_if_not_installed("shinytest2")
  skip_if_missing_mapbox_token()
  skip_if_chrome_not_installed()
  # find application
  path <- system.file("examples", "summarizer", package = "apscp")
  # initialize application
  shinytest2::local_app_support(path)
  app <- shinytest2::AppDriver$new(
    path, variant = shinytest2::platform_variant(),
    name = "summarizer",
    seed = 500, options = list(shiny.port = 8088),
    height = 810, width = 1407
  )
  on.exit(app$stop())
  # run tests
  ## spatial coverage panel
  ### initialization
  app$wait_for_idle()
  app$expect_screenshot(name = "01-summary-panel", delay = 3)
  ### hover on leftover
  expect_app_hover_screenshot(
    app,
    selector = ".summary-results .pie-chart g:nth-child(1) > path",
    name = "02-summary-coverage-leftover",
    delay = 3
  )
  ### hover on zone locked
  expect_app_hover_screenshot(
    app,
    selector = ".summary-results .pie-chart g:nth-child(3) > path",
    name = "03-summary-coverage-zone-locked",
    delay = 3
  )
  ### hover on zone held
  expect_app_hover_screenshot(
    app,
    selector = ".summary-results .pie-chart g:nth-child(2) > path",
    name = "04-summary-coverage-zone-held",
    delay = 3
  )
  ## performance
  ### hover on leftover
  expect_app_hover_screenshot(
    app,
    selector = paste(
      ".summary-results .radial-bar-chart",
      "g:nth-child(1) > path:nth-child(2)"
    ),
    name = "05-summary-performance-leftover",
    delay = 3
  )
  ### hover on locked
  expect_app_hover_screenshot(
    app,
    selector = paste(
      ".summary-results .radial-bar-chart",
      "g:nth-child(3) > path:nth-child(2)"
    ),
    name = "06-summary-performance-locked",
    delay = 3
  )
  ### hover on held
  expect_app_hover_screenshot(
    app,
    selector = paste(
      ".summary-results .radial-bar-chart",
      "g:nth-child(2) > path:nth-child(2)"
    ),
    name = "07-summary-performance-held",
    delay = 3
  )
  ## features panel
  ### initialization
  app$click(selector = "a[data-value='features-panel']")
  app$wait_for_idle()
  app$expect_screenshot(name = "08-features-panel", delay = 3)
  ### hover on leftover
  expect_app_hover_screenshot(
    app,
    selector = paste(
      ".features-results .radial-bar-chart:nth-child(2)",
      "g:nth-child(1) > path:nth-child(2)"
    ),
    name = "09-features-leftover",
    delay = 3
  )
  ### hover on locked
  expect_app_hover_screenshot(
    app,
    selector = paste(
      ".features-results .radial-bar-chart:nth-child(2)",
      "g:nth-child(3) > path:nth-child(2)"
    ),
    name = "10-features-locked",
    delay = 3
  )
  ### hover on held
  expect_app_hover_screenshot(
    app,
    selector = paste(
      ".features-results .radial-bar-chart:nth-child(2)",
      "g:nth-child(2) > path:nth-child(2)"
    ),
    name = "11-features-held",
    delay = 3
  )
  ## locks panel
  ### initialization
  app$click(selector = "a[data-value='locks-panel']")
  app$wait_for_idle()
  app$expect_screenshot(name = "12-locks-panel", delay = 3)
  ### hover on leftover
  expect_app_hover_screenshot(
    app,
    selector = paste(
      ".locks-results .pie-chart:nth-child(1)",
      "g:nth-child(1) > path"
    ),
    name = "13-locks-leftover",
    delay = 3
  )
  ### hover on locked
  expect_app_hover_screenshot(
    app,
    selector = paste(
      ".locks-results .pie-chart:nth-child(1)",
      "g:nth-child(5) > path"
    ),
    name = "14-locks-locked",
    delay = 3
  )
  ### hover on held
  expect_app_hover_screenshot(
    app,
    selector = paste(
      ".locks-results .pie-chart:nth-child(1)",
      "g:nth-child(4) > path"
    ),
    name = "15-locks-held",
    delay = 3
  )
  ## costs panel
  ### initialization
  app$click(selector = "a[data-value='costs-panel']")
  app$wait_for_idle()
  app$expect_screenshot(name = "16-costs-panel", delay = 3)
  ### hover on leftover
  expect_app_hover_screenshot(
    app,
    selector = paste(
      ".costs-results .pie-chart:nth-child(1)",
      "g:nth-child(1) > path"
    ),
    name = "17-costs-leftover",
    delay = 3
  )
  ### hover on locked
  expect_app_hover_screenshot(
    app,
    selector = paste(
      ".costs-results .pie-chart:nth-child(1)",
      "g:nth-child(5) > path"
    ),
    name = "18-costs-locked",
    delay = 3
  )
  ### hover on held
  expect_app_hover_screenshot(
    app,
    selector = paste(
      ".costs-results .pie-chart:nth-child(1)",
      "g:nth-child(4) > path"
    ),
    name = "19-costs-held",
    delay = 3
  )
})
