test_that("app_heatmapper", {
  # define skips
  skip_on_cran()
  skip_if_not_installed("shinytest2")
  skip_on_os("windows")
  skip_on_os("mac")
  # find application
  path <- system.file("examples", "heatmapper", package = "apscp")
  # initialize application
  shinytest2::local_app_support(path)
  app <- shinytest2::AppDriver$new(
    path, variant = shinytest2::platform_variant(),
    name = "heatmapper",
    seed = 500, options = list(shiny.port = 8088),
    height = 810, width = 1407
  )
  on.exit(app$stop())
  # run tests
  ## initialization
  app$wait_for_idle()
  app$expect_screenshot(name = "01-initial", delay = 3)
  ## generate settings with existing solutions
  app$wait_for_idle()
  app$click(selector = ".zone-select .ts-control")
  app$wait_for_idle()
  app$click(
    selector = "#heatmapper_zone-ts-dropdown div[data-value=\"Scientific\"]"
  )
  app$wait_for_idle()
  app$click(selector = ".solutions-select .ts-control")
  app$wait_for_idle()
  app$click(
    selector = "#heatmapper_ids-ts-dropdown div[data-value=\"ss2\"]"
  )
  app$wait_for_idle()
  app$click(
    selector = "#heatmapper_ids-ts-dropdown div[data-value=\"ss3\"]"
  )
  app$wait_for_idle()
  app$click(
    selector = "#heatmapper_ids-ts-dropdown div[data-value=\"ss4\"]"
  )
  app$wait_for_idle()
  app$run_js("$('#heatmapper_name').val('heat1').change();")
  app$run_js("$('#heatmapper_button').prop('disabled', false)")
  app$wait_for_idle()
  app$click(selector = "#heatmapper_button")
  app$wait_for_idle()
  app$expect_screenshot(name = "02-existing-solutions", delay = 3)
  ## generate settings with a new solution
  app$wait_for_idle()
  app$click(selector = "#new_solution_button")
  app$wait_for_idle()
  app$click(selector = ".zone-select .ts-control")
  app$wait_for_idle()
  app$click(
    selector = "#heatmapper_zone-ts-dropdown div[data-value=\"Tourism\"]"
  )
  app$wait_for_idle()
  app$click(selector = ".solutions-select .ts-control")
  app$wait_for_idle()
  app$click(
    selector = "#heatmapper_ids-ts-dropdown div[data-value=\"ss5\"]"
  )
  app$wait_for_idle()
  app$run_js("$('#heatmapper_name').val('heat2').change();")
  app$run_js("$('#heatmapper_button').prop('disabled', false)")
  app$wait_for_idle()
  app$click(selector = "#heatmapper_button")
  app$wait_for_idle()
  app$expect_screenshot(name = "03-new-solutions", delay = 3)
})
