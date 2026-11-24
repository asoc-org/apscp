test_that("simple", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  p <- simulate_project()
  x <- compute_contrast(p, p$solutions[[1]]$id, p$solutions[[1]]$id)
  # calculations for tests
  v <- p$dataset$get_pu_column_data(p$solutions[[1]]$layer$column)
  comb <- expand.grid(
    v1 = seq_len(length(p$zones) * 2),
    v2 = seq_len(length(p$zones) * 2)
  )
  y <- rep(NA_real_, length(v))
  idx <- which(!is.na(v))
  for (i in seq_len(nrow(comb))) {
    idx2 <- v[idx] == comb$v1[[i]] & v[idx] == comb$v2[[i]]
    y[idx[idx2]] <- i
  }
  # run tests
  expect_type(x, "double")
  expect_equal(x, y)
})

test_that("complex", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  p <- simulate_project()
  v1 <- sample.int(length(p$zones), p$dataset$get_n_pu(), replace = TRUE)
  v2 <- sample.int(length(p$zones), p$dataset$get_n_pu(), replace = TRUE)
  p$dataset$set_pu_column_data("s1", v1)
  p$dataset$set_pu_column_data("s2", v2)
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
  x <- compute_contrast(p, "ss1", "ss2")
  # calculations for tests
  comb <- expand.grid(
    v1 = seq_len(length(p$zones) * 2),
    v2 = seq_len(length(p$zones) * 2)
  )
  y <- rep(NA_real_, length(v1))
  idx <- which(!is.na(v1))
  for (i in seq_len(nrow(comb))) {
    idx2 <- v1[idx] == comb$v1[[i]] & v2[idx] == comb$v2[[i]]
    y[idx[idx2]] <- i
  }
  # run tests
  expect_type(x, "double")
  expect_equal(x, y)
})
