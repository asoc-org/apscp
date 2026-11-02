test_that("is_relative_path", {
  # run tests
  expect_true(is_relative_path("asdf.docx"))
  expect_false(is_relative_path("/asdf.docx"))
  expect_false(is_relative_path("C:/asdf.docx"))
  expect_false(is_relative_path("D:\\asdf.docx"))
})

test_that("file_symlink (single file)", {
  # create a file
  path <- tempfile()
  writeLines("test", path)
  # create symlink
  new_path <- tempfile()
  file_symlink(path, new_path)
  # run tests
  expect_true(file.exists(new_path))
  expect_equal(readLines(new_path), "test")
})

test_that("file_symlink (multiple files)", {
  # create a file
  paths <- c(tempfile(), tempfile(), tempfile())
  vapply(paths, function(x) {writeLines(x, x); TRUE}, logical(1))
  # create symlink
  new_paths <- c(tempfile(), tempfile(), tempfile())
  file_symlink(paths, new_paths)
  # run tests
  expect_true(all(file.exists(new_paths)))
  expect_equal(
    unname(vapply(paths, readLines, character(1))),
    unname(vapply(new_paths, readLines, character(1)))
  )
})

test_that("file_symlink (directory)", {
  # create a file
  path <- tempfile()
  writeLines("test", path)
  # create symlink
  dir_path <- tempfile()
  dir.create(dir_path, showWarnings = FALSE, recursive = TRUE)
  file_symlink(path, dir_path)
  # run tests
  new_path <- file.path(dir_path, basename(path))
  expect_true(file.exists(new_path))
  expect_equal(readLines(new_path), "test")
})
