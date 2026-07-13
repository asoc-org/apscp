# apscp: Decision Support Tool for the Antarctic Peninsula

Interactive decision support tool to navigate management options for the
Antarctic Peninsula. The tool identifies priority areas for implementing
policies for conservation, tourism, and scientific research. To achieve
this, it leverages data (Lee et al. 2025) and multi-objective
optimization techniques through the \*prioritizr\* package (Hanson et
al. 2025; \<https://prioritizr.net\>). Although default parameters are
specified based on stakeholder surveys, users can calibrate weights and
representation targets to fine tune optimization procedures according to
their own preferences. Optimization procedures can be performed with the
\*Gurobi\* (\<https://www.gurobi.com/\>) or \*CBC\* (via the \*rcbc\*
package, \<https://github.com/dirkschumacher/rcbc\>) exact algorithm
solvers.

## References

Hanson JO, Schuster R, Strimas‐Mackey M, Morrell N, Edwards BPM, Arcese
P, Bennett JR, Possingham HP (2024) Systematic conservation
prioritization with the prioritizr R package. \_Conservation Biology\_,
39: e14376.

Lee JR, Shaw JD, Ropert-Coudert Y, Terauds A, Chown SL (2024)
Conservation features of the terrestrial Antarctic Peninsula. \_Ambio\_,
53:1037–1049.

## See also

Useful links:

- <https://github.com/asoc-org/apscp>

- <https://asoc-org.github.io/apscp/>

- Report bugs at <https://asoc-org.github.io/apscp/issues>

## Author

**Maintainer**: Jeffrey O. Hanson <jeffrey.hanson@uqconnect.edu.au>

Authors:

- Jeffrey O. Hanson <jeffrey.hanson@uqconnect.edu.au>

## Examples

``` r
# \dontrun{
if (interactive()) {
run_app()
}
# }
```
