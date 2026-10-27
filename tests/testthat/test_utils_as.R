test_that("as.data.frame.JsDataFrame", {
  # create object
  x <- list(a = list("b", "c"), b = list(1, 100))
  # create correct result
  y <- data.frame(a = c("b", "c"), b = c(1, 100))
  # run tests
  expect_equal(as.data.frame.JsDataFrame(x), y)
})

test_that("as.list.JsDataFrameList", {
  # create object
  x <- list(
    list(a = list("b", "c"), b = list(1, 100)),
    list(c = list(1, 12, 12, 45))
  )
  # create correct result
  y <- list(
    data.frame(a = c("b", "c"), b = c(1, 100)),
    data.frame(c = c(1, 12, 12, 45))
  )
  # run tests
  expect_equal(as.list.JsDataFrameList(x), y)
})
