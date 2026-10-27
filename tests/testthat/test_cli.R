test_that("cli_list", {
  expect_message(
    cli_list(
      list(
        "A" = "aaa",
        "B1" = 1.23,
        "B2" = c(5L, 10L),
        "CC" = rep("ccc", 100),
        "DDD" = c(strrep("d", 1000) , "d1"),
        "EEEE" = list(),
        "GGGGG" = function(x) print(x),
        "FFFFFF" = data.frame(a = 1, b = 2),
        "HHHHHHH" = tibble::tibble(a = 1, b = 2),
        "IIIIIIII" = matrix(1, ncol = 3, nrow = 5)
      ),
      max_width = 30L
    )
  )
})
