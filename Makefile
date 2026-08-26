# variables
R=/opt/R/R-4.6.0/bin/R # path to R 4.6.0 installation

# main commands
## command to open R in interactive session
R:
	$(R) --quiet --no-save

## command to remove automatically generated files
clean:
	rm -rf man/*.rd
	rm -rf docs/*
	rm -rf inst/doc/*

# R package development commands
## build docs and run tests
all: install-dev man readme test check spellcheck

## initialize dependencies
init_dev:
	export PROFILE="dev" && $(R) CMD BATCH --no-restore --no-save inst/scripts/init.R
	rm -rf init.Rout

init:
	$(R) CMD BATCH --no-restore --no-save inst/scripts/init.R
	rm -rf init.Rout

## bundle javascript and css
bundle:
	$(R) --slave -e "packer::bundle_prod()"

bundle_dev:
	$(R) --slave -e "packer::bundle_dev()"

## build data
data:
	$(R) CMD BATCH --no-restore --no-save inst/scripts/prepare-data.R
	rm -f prepare-data.Rout

## build docs
man:
	$(R) --slave -e "devtools::document()"

vigns:
	$(R) --slave -e "devtools::build_vignettes()"

## reubild readme
readme:
	$(R) --slave -e "rmarkdown::render('README.Rmd')"

## run tests
test:
	$(R) --slave -e "devtools::test()" > test.log 2>&1
	rm -f tests/testthat/Rplots.pdf

## test examples
examples:
	$(R) --slave -e "devtools::run_examples();warnings()"  >> examples.log
	rm -f Rplots.pdf

example_sidebar: bundle_dev
	$(R) --slave -e "source('inst/examples/sidebar_app.R')"

example_mapper: bundle_dev
	$(R) --slave -e "source('inst/examples/mapper_app.R')"

example_solver: bundle_dev
	$(R) --slave -e "source('inst/examples/solver_app.R')"

## run checks
check:
	echo "\n===== R CMD CHECK =====\n" > check.log 2>&1
	R --slave -e "devtools::check(build_args = '--no-build-vignettes', args = '--no-build-vignettes', vignettes = FALSE)" >> check.log 2>&1

## check docs for spelling mistakes
spellcheck:
	echo "\n===== SPELL CHECK =====\n" > spell.log 2>&1
	R --slave -e "devtools::spell_check()" >> spell.log 2>&1

## install package
install:
	R --slave -e "devtools::install_local(getwd(), force = TRUE, upgrade = 'never')"

## build entire site
site:
	$(R) --slave -e "pkgdown::clean_site()"
	$(R) --slave -e "pkgdown::build_site(run_dont_run = TRUE, lazy = FALSE)"

## rebuild update files for site
quicksite:
	$(R) --slave -e "pkgdown::build_site(run_dont_run = TRUE, lazy = TRUE)"

# commands to launch app
## launch local version using system libraries
debug_renv: bundle_dev
	export GOLEM_CONFIG_ACTIVE="dev" && $(R) -e "options(golem.app.prod = FALSE); golem::run_dev()"

debug: bundle_dev
	export GOLEM_CONFIG_ACTIVE="dev" && $(R) -e "options(golem.app.prod = FALSE, quick = TRUE); golem::run_dev()"

## launch local version inside Docker container
demo:
	chmod -R 777 inst/tiles
	nohup npx -y http-server ./inst/tiles --cors -c-1 -p8085 > /dev/null 2>&1 &
	docker-compose -f docker-compose.yml --env-file .env up --build

demo-kill:
	-pkill -f http-server || true
	docker-compose down

demo-enter:
	 docker exec -it $$(docker ps -q --filter ancestor=jhansonasoc/apscp | head -n 1) /bin/bash

## launch released version inside Docker container
launch:
	docker run -dp 3838:3838 --name apscp -it asoc-org/apscp

launch-kill:
	docker rm --force apscp

# Docker commands
## create local image and push to docker
image: bundle
	docker build -t jhansonasoc/apscp:latest .
	docker push jhansonasoc/apscp:latest

## delete all local containers and images
reset:
	docker rm $(docker ps -aq) || \
	docker rmi -f $(docker images -aq)

# renv commands
## activate profiles
renv_dev:
	$(R) --slave -e "renv::activate(profile = 'dev')"
renv_default:
	$(R) --slave -e "renv::activate(profile = 'default')"

## snapshot R package dependencies
renv_snapshot:
	$(R) -e "renv::snapshot(type = 'explicit')"

# usethis commands
## update standalone files
update-standalone:
	$(R) --slave -e "usethis::use_standalone('prioritizr/prioritizr', file = 'standalone-assertions_class.R')"
	$(R) --slave -e "usethis::use_standalone('prioritizr/prioritizr', file = 'standalone-assertions_vector.R')"
	$(R) --slave -e "usethis::use_standalone('prioritizr/prioritizr', file = 'standalone-as_Matrix.R')"

.PHONY: clean data readme test check install man spellcheck examples site quicksite snapshot deploy_posit demo demo-kill image debug snapshot vigns R init init_dev bundle example_sidebar example_mapper
