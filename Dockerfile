# base image
FROM rocker/shiny:4.6.0 AS base

## install system libraries
ENV RUSTUP_HOME=/usr/local/rustup
ENV CARGO_HOME=/usr/local/cargo
ENV PATH=/usr/local/cargo/bin:$PATH
RUN apt-get update \
  && apt-get install -y \
    software-properties-common \
  && add-apt-repository ppa:ubuntugis/ubuntugis-unstable \
  && apt-get update \
  && apt-get install -y \
    cmake \
    curl \
    gdal-bin \
    htop \
    pip \
    libuv1-dev \
    libglpk-dev \
    libabsl-dev \
    libsqlite3-mod-spatialite \
    libcurl4-gnutls-dev \
    libssl-dev \
    libudunits2-dev \
    libudunits2-dev \
    libgdal-dev \
    libgeos-dev \
    libproj-dev \
    coinor-libcbc-dev \
    coinor-libclp-dev \
    coinor-libsymphony-dev \
    coinor-libcgl-dev \
    libharfbuzz-dev \
    libfribidi-dev \
    libfontconfig1-dev \
  && rm -rf /var/lib/apt/lists/* \
  && curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y \
  && rustup update \
  && rm -rf /srv/shiny-server

## install gurobi
ENV GRB_VERSION 13.0.3
ENV GRB_SHORT_VERSION 13.0
ENV GUROBI_HOME /opt/gurobi/linux64
ENV LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:${GUROBI_HOME}/lib"
RUN wget -v https://packages.gurobi.com/${GRB_SHORT_VERSION}/gurobi${GRB_VERSION}_linux64.tar.gz \
  && tar -xvf gurobi${GRB_VERSION}_linux64.tar.gz  \
  && rm -f gurobi${GRB_VERSION}_linux64.tar.gz \
  && mv -f gurobi* /opt/gurobi \
  && rm -rf gurobi/linux64/docs

## install python packages
RUN pip install --break-system-packages --no-cache-dir freestiler

## install R packages
RUN mkdir /renv
COPY renv.lock /renv/renv.lock
COPY renv /renv/renv
RUN cd /renv \
  && Rscript -e 'install.packages(c("renv", "remotes"))' \
  && Rscript -e 'options(renv.config.pak.enabled=TRUE);renv::restore()' \
  && Rscript -e 'install.packages("slam", repos = "https://cloud.r-project.org")' \
  && Rscript -e 'install.packages(dir(paste0(Sys.getenv("GUROBI_HOME"), "/R"), "^.*\\.tar\\.gz", full.names = TRUE), repos = NULL)'

## install app
RUN mkdir /app
COPY inst /app/inst
COPY man /app/man
COPY R /app/R
COPY .Rbuildignore /app
COPY DESCRIPTION /app
COPY NAMESPACE /app
RUN cd /app \
  && Rscript -e 'remotes::install_local(upgrade = "never")' \
  && rm -rf /app

# set command
CMD ["/bin/bash"]

# shiny image
FROM base AS shiny

## set user
USER shiny

## select port
EXPOSE 3838

## configure shiny
## store environmental variables
ENV R_SHINY_PORT=3838
ENV R_SHINY_HOST=0.0.0.0
RUN env | grep R_SHINY_PORT > /home/shiny/.Renviron && \
    env | grep R_SHINY_HOST >> /home/shiny/.Renviron && \
    echo "R_DEFAULT_PACKAGES='utils,stats,methods'" >> /home/shiny/.Renviron

## setup shiny application
RUN mkdir /home/shiny/app
COPY inst/scripts/app.R /home/shiny/app/app.R
WORKDIR /home/shiny/app

## run app
CMD ["/usr/local/bin/Rscript", "/home/shiny/app/app.R"]
