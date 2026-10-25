Contributing
================

First of all, thanks for thinking about contributing to this project! This is an open source project, and contributions are extremely welcome.

## How you can contribute

There are several ways you can contribute to this project. If you want to know more about why and how to contribute to open source projects like this one, see this [Open Source Guide](https://opensource.guide/how-to-contribute/).

### Ask a question

Using the package and got stuck? Browse the [documentation](https://asoc-org.github.io/apscp/) to see if you can find a solution. Still stuck? Post your question as an [issue on GitHub](https://github.com/asoc-org/apscp/issues/new). While we cannot offer user support, we'll try to do our best to address it, as questions often lead to better documentation or the discovery of bugs.

Want to ask a question in private? Please feel free to email the package developers [Jeffrey Hanson](mailto:jeffrey.hanson@uqconnect.edu.au).

### Propose an idea

Have an idea for a new feature? Take a look at the [documentation](https://asoc-org.github.io/apscp/) and [issue tracker](https://github.com/asoc-org/apscp/issues) to see if it isn't included or suggested yet. If not, suggest your idea as an [issue on GitHub](https://github.com/asoc-org/apscp/issues/new). While we can't promise to implement your idea, it helps to:

* Explain in detail how it would work.
* Keep the scope as narrow as possible.

See below if you want to contribute code for your idea as well.

### Report a bug

Using the package and discovered a bug? That's annoying! Don't let others have the same experience and report it as an [issue on GitHub](https://github.com/asoc-org/apscp/issues/new) so we can fix it. A good bug report makes it easier for us to do so, so please include:

* Your operating system name and version (e.g., Mac OS 10.13.6).
* Details about your local setup that might be helpful in troubleshooting, such as your session information (via `sessionInfo()`).
* Detailed steps to reproduce the bug.

### Improve the documentation

Noticed a typo on the website? Think a function could use a better example? Good documentation makes all the difference, so your help to improve it is very welcome!

#### The website

[This website](https://asoc-org.github.io/apscp/) is generated using the [_pkgdown R_ package](http://pkgdown.r-lib.org/) package. That means we don't have to write any html: content is pulled together from documentation in the code, vignettes, [Markdown](https://guides.github.com/features/mastering-markdown/) files, the package `DESCRIPTION` and `_pkgdown.yml` settings. If you know your way around `pkgdown`, you can [propose a file change](https://help.github.com/articles/editing-files-in-another-user-s-repository/) to improve documentation. If not, [report an issue](https://github.com/asoc-org/apscp/issues/new) and we can point you in the right direction.

#### Function documentation

Functions are described as comments near their code and translated to documentation using the [_roxygen2 R_ package](https://github.com/r-lib/roxygen2) package. If you want to improve a function description:

1.  Go to `R/` directory in the [code repository](https://github.com/asoc-org/apscp).
2.  Look for the file with the name of the function.
3.  [Propose a file change](https://help.github.com/articles/editing-files-in-another-user-s-repository/) to update the function documentation in the roxygen comments (starting with `#'`).

### Contribute code

Care to fix bugs or implement new functionality? That's brilliant! Have a look at the [issue list](https://github.com/asoc-org/apscp/issues) and leave a comment on the things you want to work on. See also the development guidelines below. Please note that we use American spelling for the package, and follow the [tidyverse style guide](https://style.tidyverse.org/).

The application is a [_Shiny_ web application](https://mastering-shiny.org/) developed with the [R statistical computing environment](https://www.r project.org/). Specifically, it follows the [_golem_ framework](https://thinkr open.github.io/golem/) for application development, [_packer_ framework](https: /github.com/johncoene/packer) for JavaScript code and dependency management, [_htmlwidgets R_ package](https://www.htmlwidgets.org/) for interfacing with _JavaScript_ widgets, and [_renv R_ package](https://rstudio.github.io/renv/index.html) for _R_ package dependency management. This means that the application is effectively an [_R_ package](https://r-pkgs.org/) that contains code for defining and launching the application ([see here for more details](https://engineering-shiny.org/)). The _R_ code files (located in the `R` directory) are organized with the following naming conventions:

* `app_*.R`: Defines the web application.
    * `app_config.R`: Imports configuration settings.
    * `app_startup.R`: Initializes the application. It performs a similar to the `global.R` file in typical Shiny applications.
    * `app_ui.R`: Defines the user interface for the application. It performs a similar role to the `ui.R` file in typical Shiny applications.
    * `app_server.R`: Defines the (back-end) server-side logic for the application. It performs a similar role to the `server.R` file in typical Shiny applications.
    * `app_server_*.R`: Defines components used to assemble the server-side logic for the application.
* `class_*.R`: Defines S3 and R6 object classes for managing data.
* `fct_*.R`:  Defines functions for analysis and data manipulation.
* `import-*.R`: Files imported from other packages with `usethis::use_standalone()`.
* `internal.R` Miscellaneous internal functions.
* `method_`: Defines S3 methods for managing data.
* `package.R`: Package-level documentation.
* `run_*.R`: Functions for running Shiny applications.
    * `run_app.R`: Run the main Shiny application.
    * `run_example_app.R`: Run the example Shiny applications for demonstrating individual widgets.
* `widget_*.R`:  Defines custom widgets.
    * `widget_*_ui.R`: Defines functions for widgets to be used in the user-interface component of a Shiny application (i.e., `app_ui.R`).
    * `widget_*_html.R`: Defines HTML scaffold for widget.
    * `widget_*_server.R`: Defines functions for widgets to be used in the user-interface component of a Shiny application (e.g., `app_server_*.R`).
* `utils_*.R`: Defines utility functions.

## Development guidelines

We try to follow the [GitHub flow](https://guides.github.com/introduction/flow/) for development.

1.  Fork [this repo](https://github.com/asoc-org/apscp) and clone it to your computer. To learn more about this process, see [this guide](https://guides.github.com/activities/forking/).
2.  If you have forked and cloned the project before and it has been a while since you worked on it, [pull changes from the original repo](https://help.github.com/articles/merging-an-upstream-repository-into-your-fork/) to your clone by using `git pull upstream main`.
3.  Open the RStudio project file (`.Rproj`).
4.  Make your changes:
    * Write your code.
    * Test your code (bonus points for adding unit tests).
    * Document your code (see function documentation above).
    * Check your code with `devtools::check()` and aim for 0 errors and warnings.
5.  Commit and push your changes.
6.  Submit a [pull request](https://guides.github.com/activities/forking/#making-a-pull-request).

## Learning resources

If you're new to _R_ package development, we recommend reading the [_R packages_](https://r-pkgs.org/) book. Additionally, if you're new to _R_ programming in general, the [_R for Data Science_](https://r4ds.hadley.nz/) and [_Advanced R_](http://adv-r.had.co.nz/) books are extremely useful too.
