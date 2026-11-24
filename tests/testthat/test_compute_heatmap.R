test_that("works", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  p <- simulate_project()
  v1 <- sample.int(length(p$zones) * 2L, p$dataset$get_n_pu(), replace = TRUE)
  v2 <- sample.int(length(p$zones) * 2L, p$dataset$get_n_pu(), replace = TRUE)
  v3 <- sample.int(length(p$zones) * 2L, p$dataset$get_n_pu(), replace = TRUE)
  p$dataset$set_pu_column_data("s1", v1)
  p$dataset$set_pu_column_data("s2", v2)
  p$dataset$set_pu_column_data("s3", v3)
  p$add_solution(
    create_solution(
      name = "sol1",
      project = p,
      column = "s1",
      settings = simulate_prioritization_settings(p),
      provenance = simulate_provenance(),
      legend = simulate_solution_legend(),
      id = "ss1"
    )
  )
  p$add_solution(
    create_solution(
      name = "sol2",
      project = p,
      column = "s2",
      settings = simulate_prioritization_settings(p),
      provenance = simulate_provenance(),
      legend = simulate_solution_legend(),
      id = "ss2"
    )
  )
  p$add_solution(
    create_solution(
      name = "sol3",
      project = p,
      column = "s3",
      settings = simulate_prioritization_settings(p),
      provenance = simulate_provenance(),
      legend = simulate_solution_legend(),
      id = "ss3"
    )
  )
  x <- compute_heatmap(p, "Tourism", c("ss1", "ss2", "ss3"))
  # calculations for tests
  idx <- which(rep(p$zones, 2) == "Tourism")
  y <- rowSums(matrix(c(v1, v2, v3) %in% idx, ncol = 3), na.rm = TRUE)
  # run tests
  expect_type(x, "double")
  expect_equal(x, y)
})
