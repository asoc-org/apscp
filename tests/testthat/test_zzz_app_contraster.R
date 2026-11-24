test_that("app_contraster", {
  # define skips
  skip_on_cran()
  skip_if_not_installed("shinytest2")
  skip_on_os("windows")
  skip_on_os("mac")
  # find application
  path <- system.file("examples", "contraster", package = "apscp")
  # initialize application
  shinytest2::local_app_support(path)
  app <- shinytest2::AppDriver$new(
    path, variant = shinytest2::platform_variant(),
    name = "contraster",
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
  app$click(selector = ".select1 .ts-control")
  app$wait_for_idle()
  app$click(selector = "#contraster_id1-ts-dropdown div[data-value=\"ss2\"]")
  app$wait_for_idle()
  app$click(selector = ".select2 .ts-control")
  app$wait_for_idle()
  app$click(selector = "#contraster_id2-ts-dropdown div[data-value=\"ss3\"]")
  app$wait_for_idle()
  app$click(selector = "#contraster_id2-ts-dropdown div[data-value=\"ss3\"]")
  app$wait_for_idle()
  app$run_js("$('#contraster_input').val('sol1').change();")
  app$run_js("$('#contraster_button').prop('disabled', false)")
  app$wait_for_idle()
  app$click(selector = "#contraster_button")
  app$wait_for_idle()
  app$expect_screenshot(name = "02-existing-solutions", delay = 3)
  ## generate settings with a new solutions
  app$wait_for_idle()
  app$click(selector = "#new_solution_button")
  app$wait_for_idle()
  app$click(selector = ".select1 .ts-control")
  app$wait_for_idle()
  app$click(selector = "#contraster_id1-ts-dropdown div[data-value=\"ss4\"]")
  app$wait_for_idle()
  app$click(selector = ".select2 .ts-control")
  app$wait_for_idle()
  app$click(selector = "#contraster_id2-ts-dropdown div[data-value=\"ss5\"]")
  app$wait_for_idle()
  app$run_js("$('#contraster_input').val('sol2').change();")
  app$run_js("$('#contraster_button').prop('disabled', false)")
  app$wait_for_idle()
  app$click(selector = "#contraster_button")
  app$wait_for_idle()
  app$expect_screenshot(name = "03-new-solutions", delay = 3)
})
