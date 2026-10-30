test_that("app_solver", {
  # define skips
  skip_on_cran()
  skip_if_not_installed("shinytest2")
  skip_if_chrome_not_installed()
  # find application
  path <- system.file("examples", "solver", package = "apscp")
  # initialize application
  shinytest2::local_app_support(path)
  app <- shinytest2::AppDriver$new(
    path, variant = shinytest2::platform_variant(),
    name = "solver",
    seed = 500, options = list(shiny.port = 8088),
    height = 810, width = 1407
  )
  on.exit(app$stop())
  # run tests
  ## initialization
  app$wait_for_idle()
  app$expect_screenshot(name = "01-initial", delay = 3)
  ## add a feature
  app$wait_for_idle()
  app$click(selector = ".feature-control .ts-control")
  app$wait_for_idle()
  app$click(selector = "#tomselect-1-opt-2")
  app$wait_for_idle()
  app$click(selector = "a[data-value='locks-panel']")
  app$wait_for_idle()
  app$click(selector = "a[data-value='features-panel']")
  app$wait_for_idle()
  app$expect_screenshot(name = "02-features-display-single", delay = 3)
  ## add multiple features
  app$wait_for_idle()
  app$click(selector = ".feature-control .ts-control")
  app$wait_for_idle()
  app$click(
    selector = paste0(
      "div[data-group='Scientific: Medicinal species']",
      ".optgroup-header input[type='checkbox']"
    )
  )
  app$wait_for_idle()
  app$click(selector = "a[data-value='locks-panel']")
  app$wait_for_idle()
  app$click(selector = "a[data-value='features-panel']")
  app$wait_for_idle()
  app$expect_screenshot(name = "03-features-display-multiple", delay = 3)
  ## toggle off all layers for second zone
  app$click(selector = ".btn-group:nth-child(2) button[data-label='Off']")
  app$wait_for_idle()
  app$run_js("$('#solver_name').val('sol').change();")
  app$run_js("$('#solver_start_button').prop('disabled', false)")
  app$wait_for_idle()
  app$click(selector = "#solver_start_button")
  app$wait_for_idle()
  app$expect_screenshot(name = "04-features-zones-all-off", delay = 3)
  ## toggle on all layers for second zone
  app$click(selector = ".btn-group:nth-child(2) button[data-label='On']")
  app$wait_for_idle()
  app$run_js("$('#solver_name').val('sol2').change();")
  app$run_js("$('#solver_start_button').prop('disabled', false)")
  app$wait_for_idle()
  app$click(selector = "#solver_start_button")
  app$wait_for_idle()
  app$expect_screenshot(name = "05-features-zones-all-on", delay = 3)
  ## toggle off second zone for second feature
  app$click(
    selector = ".feature-setting:nth-child(2) .switches div:nth-child(2) input"
  )
  app$wait_for_idle()
  app$run_js("$('#solver_name').val('sol3').change();")
  app$run_js("$('#solver_start_button').prop('disabled', false)")
  app$wait_for_idle()
  app$click(selector = "#solver_start_button")
  app$wait_for_idle()
  app$expect_screenshot(name = "06-features-zone-switch-off", delay = 3)
  ## change weight for first zone for second feature
  app$run_js(
    paste0(
      "$('",
      ".feature-setting:nth-child(1) .statuses .weight-status:nth-child(3)",
      "')[0].hoverSelect.set('0')"
    )
  )
  app$wait_for_idle()
  app$run_js("$('#solver_name').val('sol3').change();")
  app$run_js("$('#solver_start_button').prop('disabled', false)")
  app$wait_for_idle()
  app$click(selector = "#solver_start_button")
  app$wait_for_idle()
  app$expect_screenshot(name = "07-features-weight", delay = 3)
  ## change targets for second feature
  app$run_js(
    paste0(
      "$('.feature-setting:nth-child(1) .target-slider')[0]",
      ".noUiSlider.set([1, 1, 1])"
    )
  )
  app$wait_for_idle()
  app$run_js("$('#solver_name').val('sol4').change();")
  app$run_js("$('#solver_start_button').prop('disabled', false)")
  app$wait_for_idle()
  app$click(selector = "#solver_start_button")
  app$wait_for_idle()
  app$expect_screenshot(name = "08-feature-target", delay = 3)
  ## set lock panel active
  app$click(selector = "a[data-value='locks-panel']")
  app$wait_for_idle()
  app$expect_screenshot(name = "09-locks-panel", delay = 3)
  ## change tourism zone lock
  app$click(selector = ".lock-setting:nth-child(2) .ts-control")
  app$wait_for_idle()
  app$click(selector = "#tomselect-3-opt-2")
  app$click(selector = "a[data-value='features-panel']")
  app$wait_for_idle()
  app$click(selector = "a[data-value='locks-panel']")
  app$wait_for_idle()
  app$run_js("$('#solver_name').val('sol4').change();")
  app$run_js("$('#solver_start_button').prop('disabled', false)")
  app$wait_for_idle()
  app$click(selector = "#solver_start_button")
  app$wait_for_idle()
  app$expect_screenshot(name = "10-locks-change", delay = 3)
  ## set costs panel active
  app$click(selector = "a[data-value='costs-panel']")
  app$wait_for_idle()
  app$expect_screenshot(name = "11-costs-panel", delay = 3)
  ## change zone for cost
  app$run_js(
    paste0(
      "$('",
      ".cost-setting .zone-status",
      "')[0].hoverSelect.set('Biodiversity')"
    )
  )
  app$wait_for_idle()
  app$run_js("$('#solver_name').val('sol4').change();")
  app$run_js("$('#solver_start_button').prop('disabled', false)")
  app$wait_for_idle()
  app$click(selector = "#solver_start_button")
  app$wait_for_idle()
  app$expect_screenshot(name = "12-costs-zone", delay = 3)
  ## change cost slider
  app$run_js("$('.weight-slider')[0].noUiSlider.set(1)")
  app$wait_for_idle()
  app$run_js("$('#solver_name').val('sol4').change();")
  app$run_js("$('#solver_start_button').prop('disabled', false)")
  app$wait_for_idle()
  app$click(selector = "#solver_start_button")
  app$wait_for_idle()
  app$expect_screenshot(name = "13-costs-weight", delay = 3)
  ## toggle off cost
  app$click(selector = ".cost-setting .switches input")
  app$wait_for_idle()
  app$run_js("$('#solver_name').val('sol5').change();")
  app$run_js("$('#solver_start_button').prop('disabled', false)")
  app$wait_for_idle()
  app$click(selector = "#solver_start_button")
  app$wait_for_idle()
  app$expect_screenshot(name = "14-costs-off", delay = 3)
})
