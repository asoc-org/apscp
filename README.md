
<!--- README.md is generated from README.Rmd. Please edit that file -->

# apscp: Decision Support Tool for the Antarctic Peninsula

[![lifecycle](https://img.shields.io/badge/Lifecycle-experimental-orange.svg)](https://lifecycle.r-lib.org/articles/stages.html)
[![check-ubuntu](https://img.shields.io/github/actions/workflow/status/asoc-org/apscp/check-ubuntu.yaml?branch=master&label=Ubuntu)](https://github.com/asoc-org/apscp/actions)
[![check-windows](https://img.shields.io/github/actions/workflow/status/asoc-org/apscp/check-windows.yaml?branch=master&label=Windows)](https://github.com/asoc-org/apscp/actions)
[![check-mac](https://img.shields.io/github/actions/workflow/status/asoc-org/apscp/check-mac.yaml?branch=master&label=macOS)](https://github.com/asoc-org/apscp/actions)
[![Coverage
Status](https://codecov.io/github/asoc-org/apscp/coverage.svg?branch=master)](https://codecov.io/github/asoc-org/apscp?branch=master)

Interactive decision support tool to navigate management options for the
Antarctic Peninsula. The tool identifies priority areas for implementing
policies for conservation, tourism, and scientific research. To achieve
this, it leverages previously published data ([Lee et
al. 2024](https://doi.org/10.1007/s13280-024-02009-4)) and
multi-objective optimization techniques through the [*prioritizr*
package](https://prioritizr.net) ([Hanson et
al. 2025](https://doi.org/10.1111/cobi.14376)). Although default
parameters are specified based on stakeholder surveys, users can
calibrate weights and representation targets to fine tune optimization
procedures according to their own preferences. Optimization procedures
can be performed with the [*Gurobi*](https://www.gurobi.com/) or
[*CBC*](https://github.com/coin-or/cbc) (via the
[*rcbc*](https://github.com/dirkschumacher/rcbc) package) exact
algorithm solvers.

## Usage

The application is available online. Please note that you must use
[Google Chrome](https://www.google.com/chrome/) for it to work.

<table style="border:none;border-spacing:0;">

<tr style="border:none;border-spacing:0;">

<td style="border:none;border-spacing:0;">

<img class="screenshot" src="man/figures/screenshot.png" align="center" width="100%"/>
</td>

</tr>

</table>

## Installation

The application is available as an online service provided by the
[Antarctic and Southern Ocean Coalition](https://www.asoc.org/). If you
need to run the application on your own computer, then you can run it
using the [R statistical computing
environment](https://www.r-project.org/),
[Docker](https://www.docker.com/), or [Docker
Compose](https://docs.docker.com/compose/).

### Using R

To use this method, you will need to install the [R statistical
computing environment](https://www.r-project.org/). After completing the
installation, you can install the application using the following R
code:

``` r
if (!require(remotes)) install.packages("remotes")
remotes::install_github("asoc-org/asoc")
```

You can then use the following R code to start the application and open
it in your web browser:

``` r
asoc::run_app()
```

### Using Docker

To use this method, you will need to install [Docker
Engine](https://www.docker.com/) ([see here for
instructions](https://docs.docker.com/get-docker/)). After completing
this step, you can install the application from the [DockerHub
repository](https://hub.docker.com/repository/docker/jhansocasoc/apscp).
Specifically, please use the following system command:

``` bash
docker run -dp 3838:3838 --name apscp -it jhansonasoc/apscp:latest
```

You can then view the application by opening the following link in
[Google Chrome](https://www.google.com/chrome/):
`http://localhost:3838`. After you have finished using the application,
you can terminate it using the following system command. **Note that if
you don’t terminate the application once you are finished using it, then
it will continue running in the background.**

``` bash
docker rm -f apscp
```

### Using Docker Compose

To use this method, you will need to install [Docker
Engine](https://www.docker.com/) ([see here for
instructions](https://docs.docker.com/get-docker/)) and Docker Compose
([see here for instructions](https://docs.docker.com/compose/install/)).
After installing both programs, you can install the application by
[cloning this
repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)
and then using the following system commands:

``` bash
docker-compose pull
docker-compose up -d
```

You can then view the application by opening the following link in
[Google Chrome](https://www.google.com/chrome/):
`http://localhost:3838`. After you have finished using the application,
you can terminate it using the following system command. **Note that if
you don’t terminate the application once you are finished using it, then
it will continue running in the background.**

``` bash
docker-compose down
```

## Contributing

The application is a [*Shiny* web
application](https://mastering-shiny.org/) developed with the [R
statistical computing environment](https://www.r-project.org/).
Specifically, it follows the [*golem*
framework](https://thinkr-open.github.io/golem/) for application
development, [*packer* framework](https://github.com/johncoene/packer)
for JavaScript code and dependency management, [*htmlwidgets*
package](https://www.htmlwidgets.org/) for interfacing with JavaScript
widgets, and [*renv* package](https://rstudio.github.io/renv/index.html)
for R package dependency management. This means that the application is
effectively an [R package](https://r-pkgs.org/) that contains code for
defining and launching the application ([see here for more
details](https://engineering-shiny.org/)). The R code files (located in
the `./R` directory) are organized according to the following naming
conventions:

- `app_`: Defines the web application:
  - `app_config.R`: Imports configuration settings.
  - `app_startup.R`: Initializes the application. It performs a similar
    to the `global.R` file in typical Shiny applications.
  - `app_ui.R`: Defines the user interface for the application. It
    performs a similar role to the `ui.R` file in typical Shiny
    applications.
  - `app_server.R`: Defines the (back-end) server-side logic for the
    application. It performs a similar role to the `server.R` file in
    typical Shiny applications.
  - `app_server_*.R`: Defines components used to assemble the
    server-side logic for the application.
- `class_`: Defines S3 and R6 object classes for managing data.
- `method_`: Defines S3 methods for managing data.
- `fct_`: Defines functions for analysis and data manipulation.
- `widget_`: Defines custom [*htmlwidgets*
  widgets](https://www.htmlwidgets.org/).
- `utils_`: Defines utility functions.

## Getting help

Thank you for checking out this application. If you encounter any
software defects (e.g. application crashes, unexpected behavior, or
spelling mistakes), please feel free to post them on the [issue
tracker](https://github.com/asoc-org/apscp/issues).

## Acknowledgments

This project is supported and led by the [Antarctic and Southern Ocean
Coalition (ASOC)](https://www.asoc.org/). The
[data](https://doi.org/10.26180/29092346) and foundations underlying the
project were produced during the [SCAR-IAATO Systematic Conservation
Planning Project](https://scar.org/scar-news/scar-iaato-scp), which was
supported by the [International Association of Antarctica Tour Operators
(IAATO)](https://iaato.org/), the [Scientific Committee on Antarctic
Research (SCAR) and Monash University](https://scar.org/). This work was
supported by [Gurobi Optimization](https://www.gurobi.com/) through
their [Gurobi Gives Back
program](https://www.gurobi.com/company/gurobi-gives-back), which
provides free access to optimization software for qualifying
non-profits.

<table style="border:none;border-spacing:0;">

<tr style="border:none;border-spacing:0;">

<td style="border:none;border-spacing:0;vertical-align:middle;">

<img src="man/figures/asoc.jpg" align="center" style="height:150px;"/>
</td>

<td style="border:none;border-spacing:0;vertical-align:middle;">

<img src="man/figures/gurobi.svg" align="center" style="height:150px;"/>
</td>

</tr>

</table>
