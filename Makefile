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
	export PROILE="dev" && $(R) CMD BATCH --no-restore --no-save inst/scripts/init.R
	rm -rf init.Rout

init:
	$(R) CMD BATCH --no-restore --no-save inst/scripts/init.R
	rm -rf init.Rout

## build data
data:
	$(R) CMD BATCH --no-restore --no-save inst/scripts/prepare-data.R
	rm -rf prepare-data.Rout

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
	$(R) --slave -e "devtools::run_examples(test = TRUE, run = TRUE);warnings()"  >> examples.log
	rm -f Rplots.pdf

## run checks
check:
	echo "\n===== R CMD CHECK =====\n" > check.log 2>&1
	R --slave -e "devtools::check(build_args = '--no-build-vignettes', args = '--no-build-vignettes', run_dont_test = TRUE, vignettes = FALSE)" >> check.log 2>&1

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
debug_renv:
	$(R) -e "options(golem.app.prod = FALSE); golem::run_dev()"

debug:
	$(R) -e "options(golem.app.prod = FALSE, quick = TRUE); golem::run_dev()"

## launch local version inside Docker container
demo:
	docker-compose up --build -d

demo-kill:
	docker-compose down

## launch released version inside Docker container
launch:
	docker run -dp 3838:3838 --name apscp -it asoc-org/apscp

launch-kill:
	docker rm --force apscp

# Docker commands
## create local image and push to docker
image:
	docker build -t asoc-org/apscp:latest .
	docker push asoc-org/apscp:latest

## delete all local containers and images
reset:
	docker rm $(docker ps -aq) || \
	docker rmi -f $(docker images -aq)

# renv commands
## snapshot R package dependencies
snapshot:
	R -e "renv::snapshot(dev = TRUE)"

# usethis commands
## update standalone files
update-standalone:
	R --slave -e "usethis::use_standalone('prioritizr/prioritizr', file = 'standalone-assertions_class.R')"
	R --slave -e "usethis::use_standalone('prioritizr/prioritizr', file = 'standalone-assertions_vector.R')"
	R --slave -e "usethis::use_standalone('prioritizr/prioritizr', file = 'standalone-as_Matrix.R')"

.PHONY: clean data readme test check install man spellcheck examples site quicksite snapshot deploy demo demo-kill image debug snapshot vigns R init init_dev
