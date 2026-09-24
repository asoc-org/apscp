# Optimization

## Overview

The tool leverages systematic conservation planning techniques to
identify priority areas for conservation, tourism, and scientific
management (Giakoumi et al., 2025). Here we provide a description of
mathematical optimization problem that underpins the tool. Broadly
speaking, the optimization problem is formulated as a multi-objective
mixed integer programming problem (Rodrigues et al., 2000). This means
that it can be readily be solved using commercial or open source exact
algorithm solvers, such as *Gurobi* or *HiGHS* (Gurobi Optimization LLC,
2026; Huangfu & Hall, 2017).

## Problem formulation

To begin with, we will define the following terminology. Let Z (indexed
by z) denote the set of management zones. In particular, the management
zones represent the range of potential management options that are
available. For convenience, here we let z=c denote the conservation
zone, z=s the scientific zone, and z=t the tourism zone. Also let I
(indexed by i) denote the set of features considered for management.
Although features often pertain to biodiversity elements (e.g., species,
ecosystems), here we consider additional features that may also be
relevant to scientific and tourism areas (e.g., geological sites, points
of interest for tourism, existing scientific infrastructure).
Additionally, let J (indexed by j) denote the set of planning units
(e.g., areas available for management). Broadly speaking, the tool aims
to help inform which planning units j \in J should be allocated to zones
z \in Z.

We define terminology to describe the spatial distribution of the
features and stakeholder preferences for their representation. In
particular, let A\_{ij} indicate the amount of each feature i \in I
(e.g., abundance of penguins, hectares of lichen, presence/absence of
geological sites) that is present within each planning unit j \in J.
Representation targets are used to specify the minimum amount of each
feature that should ideally be held (covered) by planning units
allocated to a particular zone (e.g., total abundance of penguins
required in conservation areas, total abundance of penguins required in
tourism areas, total hectares of lichen present in conservation areas,
total number of geological sites for scientific areas). To quantify such
targets, let R\_{iz} denote the representation target for feature i \in
I by management zone z \in Z. Additionally, to quantify the relative
importance for meeting a particular representation target, let W\_{iz}
denote a positive weight value for each feature i \in I and management
zone z \in Z.

We define terminology to describe the location of existing management
zones that cannot be altered. For example, it would be impractical to
decommission infrastructure in existing scientific areas, or de-gazette
existing protected areas (i.e., Antarctic Specially Protected Areas). To
describe this, let L\_{jz} indicate if planning unit j \in J is
currently allocated to zone z \in Z and must remain allocated to this
zone during optimization. In other words, these L\_{jz} variables will
subsequently be used to “lock” planning units to a particular zone.

We define terminology to describe the negative impacts associated with
implementing management zones. To describe the foregone economic
opportunity associated with establishing conservation and scientific
areas, let n_j denote the opportunity cost for planning j. Since
detailed site-level revenue data are not readily available across the
entire Antarctic Peninsula, we parameterized n_j based on the average
number of tourists that have visited planning unit j over a predefined
period of time as a proxy. Additionally, let q_j denote the level of
impact that tourism operations have on local biodiversity present in
planning unit j. Because the population viability analyses required to
parameterize species-specific responses to tourism operations are not
readily available for all species in the Antarctic Peninsula, we
parameterized q_j based on the irreplaceability of the conservation
features present in planning unit j (eqn 1) (i.e,. measured according to
rarity-weighted richness; Williams et al., 1996). Thus we assume that
planning units containing a greater number of species with localized
distributions would be more negatively impacted by tourism impacts.

q_j = \sum\_{j \in J} \begin{cases} \tag{eqn 1} \frac{\big(
\frac{A\_{ij}}{max\_{i \in I} A\_{ij}} \big)}{\sum\_{i \in I} A\_{ij}},
\text{if \$R\_{j,z=c} \> 0\$} \\\\ 0, \text{otherwise} \end{cases}

We define the binary X\_{iz} decision variables (eqn 2). Briefly, these
variables represent the primary uncertainty in the decision making
process. For a given solution, the X\_{iz} variables indicate which
planning units are allocated to each zone.

X\_{iz} = \begin{cases} \tag{eqn 2} 1, \text{if planning unit \$i\$
selected for zone \$z\$} \\\\ 0, \text{otherwise} \end{cases}

We define the continuous S\_{iz} auxiliary variables (eqn 3). Briefly,
these variables represent calculations based on the decision variables.
For a given solution, the S\_{iz} variables describes the percentage of
the target for feature i \in I and zone z \in Z that remains unfulfilled
by the solution (in other words, relative target shortfall). In other
words, these variables describe how poorly the solution meets a given
target.

S\_{iz} = \text{relative target shortfall for feature \$i\$ by zone
\$z\$} \tag{eqn 3}

We define the continuous \alpha_c, \alpha_s, \alpha_t, \beta, \gamma
objective variables (eqn 4a–4e). Briefly, these variables represent the
performance metrics that are maximized or minimized during optimization.
For a given solution, the \alpha_c, \alpha_s, and \alpha_t variables
measure the weighted sum of the relative target shortfalls for the
conservation, scientific, and tourism zones (respectively).
Additionally, the \beta variable measures the total opportunity costs
associated with the planning units allocated to the conservation and
scientific zones. Furthermore, the \gamma variable measures the total
impacts of tourism areas on biodiversity.

\begin{align\*} \alpha\_{c} &= \text{overall representation target
shortfalls for conservation areas (\$z=c\$)} \tag{eqn 4a} \\ \alpha\_{s}
&= \text{overall representation target shortfalls for scientific areas
(\$z=s\$)} \tag{eqn 4b} \\ \alpha\_{t} &= \text{overall representation
target shortfalls for tourism areas (\$z=t\$)} \tag{eqn 4c} \\ \beta &=
\text{total opportunity cost of conservation and scientific areas}
\tag{eqn 4d} \\ \gamma &= \text{total impacts of tourism areas on
biodiversity} \tag{eqn 4e} \end{align\*}

Based on the previous defined terminology, the optimization problem is
formulated as the following multi-objective mixed integer programming
problem (eqns 5a–5k).

\begin{align\*} \text{Minimize } & \alpha_c, \alpha_s, \alpha_t, \beta,
\gamma & \tag{eqn 5a} \\ \text{Subject to } & \alpha_c = \sum\_{i \in I}
W\_{i,z=c} \times \frac{S\_{i,z=c}}{R\_{i,z=c}} & \tag{eqn 5b} \\ &
\alpha_s = \sum\_{i \in I} W\_{i,z=s} \times
\frac{S\_{i,z=s}}{R\_{i,z=s}} & \tag{eqn 5c} \\ & \alpha_t = \sum\_{i
\in I} W\_{i,z=t} \times \frac{S\_{i,z=t}}{R\_{i,z=t}} & \tag{eqn 5d} \\
& \beta = \big( \sum\_{j \in J} n_j \times X\_{j,z=t} \big) + \big(
\sum\_{j \in J} n_j \times X\_{j,z=t} \big) & \tag{eqn 5e} \\ & \gamma =
\sum\_{j \in J} q_j \times X\_{j,z=t} & \tag{eqn 5f} \\ & \big( \sum\_{j
\in J} A\_{ij} \big) + \big( R\_{iz} \times S\_{iz} \big) \geq R\_{iz} &
\forall i \in i, z \in Z \tag{eqn 5g} \\ & X\_{jz} \geq L\_{jz} &
\forall j \in J, z \in Z \tag{eqn 5h} \\ & \sum\_{z \in Z} X\_{jz} \leq
1 & \forall j \in J \tag{eqn 5i} \\ & X\_{jz} \in \\0, 1\\ & \forall j
\in J, z \in Z \tag{eqn 5j} \\ & S\_{iz} \in \[0, 1\] & \forall i \in i,
z \in Z \tag{eqn 5k} \\ \end{align\*}

Here (eqn 5a) objectives are defined to minimize overall representation
target shortfalls for (i) conservation areas, (ii) scientific areas, and
(iii) tourism areas, as well as minimize (iv) total opportunity cost
associated with conservation and scientific areas and (v) total impact
of tourism areas on biodiversity (refer to the following section for
details on how these objectives are optimized). Constraints (eqn 5b–5d)
specify that the total representation target shortfall variables (i.e.,
\alpha\_{c}, \alpha\_{s}, \alpha\_{t}) are calculated as the weighted
sum of the relative target shortfall variables (per S\_{iz}) associated
with each zone. Constraint (eqn 5e) ensures that the total opportunity
cost associated with conservation and scientific areas variable (i.e.,
\beta) is calculated based on the opportunity costs associated with
planning units allocated to the conservation and scientific zones. In a
similar manner, constraint (eqn 5f) ensures that the total impact of
tourism areas variable (i.e., \gamma) is calculated based on the level
of impact that tourism would have on planning units allocated to the
tourism zone. Constraints (eqn 5g) express the relative target shortfall
variables (i.e., S\_{iz}) is calculated as the proportion of each target
that remains remains unfulfilled (similar to Jung et al., 2021).
Constraints (eqn 5h) ensure that the existing management areas (per
L\_{jz}) are locked (in other words, cannot be altered) during
optimization. Constraints (eqn 5i) ensure that each planning unit can
only be allocated to, at most, a single zone. Finally, constraints
specify that the (eqn 5j) decision variables are binary and (eqn 5k)
auxiliary variable are continuous and bounded between zero and one.

## Multi-objective optimization approach

The tool employs the reference point approach to accommodate multiple
objectives (López Jaimes et al., 2011; Wierzbicki, 1980). Briefly, this
approach uses parameters to specify aspirational levels of performance
for each objective (hereafter, reference points) and as well as
parameters to specify the relative importance for achieving the
reference point for each objective (hereafter, weight parameters).
Additionally, this approach can be augmented with scaling factors to
ensure that differences in scale among the objectives do not bias the
optimization process (following Deléglise et al., 2024). In particular,
these scaling factors are calculated based on the performance of the
best possible solution (hereafter, utopian points) and worst possible
solution (hereafter, dystopian points) for each objective (separately).
Indeed, the scaling factors are critical for ensuring that the weight
parameters accurately reflect user preferences during optimization (Das
& Dennis, 1997).

Here we define additional terminology to describe the multi-objective
optimization approach. Let O (indexed by o) denote the set of objectives
and v_o denote the previously defined objective variables (i.e., v = \\
\alpha_c, \alpha_s, \alpha_t, \beta, \gamma \\. Also let r_o denote the
reference point parameter, w_o the weight parameter for each objective o
\in O, and s_o denote the scaling factor each objective o \in O. To
calculate the scaling factors (eqn 6a), let u_o and d_o denote the
utopian and dystopian points for each objective o \in O. These utopian
and dystopian points, in turn, are precomputed by solving the
optimization problems for each objective (separately) (eqns 6b and 6c).

\begin{align\*} s_o &= \frac{1}{\\ u_o - d_o \\} & \tag{eqn 6a} \\ u_o
&= \min(V_o), & \text{subject to (eqns 5b--5k)} \tag{eqn 6b} \\ d_o &=
\max(V_o), & \text{subject to (eqns 5b--5k)} \tag{eqn 6c} \\
\end{align\*}

We define the continuous \lambda\_{o} auxiliary variables (eqn 7). Same
as before, these variables represent calculations based on the decision
variables. For a given solution, the \lambda\_{o} variables describe the
(weighted and normalized) shortfall in performance for how well the
solution achieves each objective o \in O. For example, a larger value
means that the solution has poorer performance and a smaller value means
better performance according to a particular objective (relative to the
weight parameter and scaling factor for that objective, per w_o and
s_o).

\lambda\_{o} = \text{performance shortfall for objective \$o\$} \tag{eqn
7}

Given the previously defined terminology, the tool uses the following
multi-objective optimization approach to accommodate multiple objectives
(eqn 8).

\begin{align\*} \text{Lexicographic minimize } & \max\_{o \in O}
\lambda_o, \sum\_{o \in O} \lambda_o & \tag{eqn 8a} \\ \text{Subject to
} & \lambda_o = w_o \times s_o \times (v_o - r_o) & \forall o \in O
\tag{eqn 8b} \\ & \text{(eqns 5b--5k)} & \\ \end{align\*}

Here (eqn 8a) the multi-objective optimization approach involves
minimizing the largest performance shortfall variables among all
objectives and, subsequently, minimizing the sum of the performance
shortfall variables. This is an important component of the reference
point method because it will help ensure that solutions achieve, at
least, a moderate level of performance across each and every multiple
objective—rather than severely sacrificing some objectives to achieve an
especially high level of performance for other objectives. Although this
component is typically expressed using a weighted sum, the tool
leverages lexicographic optimization techniques instead to avoid
numerical instability issues associated with tiny values that can
degrade solver performance (Klotz & Newman, 2013; López Jaimes et al.,
2011). Constraint (eqn 8b) specifies that the performance shortfall
variable for a given objective (i.e., \lambda_o) is calculated based on
the weight parameter (per w_o), scaling factor (s_o), and difference
between the reference point parameter (per r_o) and the objective value
(per v_o) for that objective. Constraints (5b–5k) ensure that the
objective values (i.e., v_o) are calculated correctly.

## Tool parameters

The tool aims to provide a flexible and user-friendly interface for
identifying priority areas and navigating trade-offs. Although the
problem formulation and multi-objective optimization approach involve a
large number of terms, many of these terms are parameterized based on
underlying data (e.g., A\_{ij} and L\_{jz} are based on data from Lee et
al., 2024) or can be precomputed automatically based on preliminary
analyses (e.g., u_o and d_o). To provide a positive user experience that
will facilitate trade-off exploration, the tool has parameters for
specifying terms that reflect stakeholder preferences. In particular,
the tool has parameters for the (R\_{iz}) percentage of each feature i
\in I that should be represented by areas allocated to zone z, (W\_{iz})
relative importance for representing each feature i \in I by areas
allocated to zone z, and (w_o) relative importance for achieving each
objective o \in O. Note that the reference points (r_o) will be set
based on the precomputed utopian points (u_o) to reduce tool complexity.
Additionally, since there are too many features and zones for users to
set parameters for each feature and zone individually, the features are
grouped together based on common themes (e.g., penguins, seabirds,
habitat types, invertebrates, plants and mosses) and parameters can be
used to alter representation target and weight values for entire groups
of features. Note that these feature groups will be identified in
consultation with experts and stakeholders. Because previous work has
already elicited representation target values from stakeholders, the
tool will provide options for systematically increasing or decreasing
these target values (e.g., increase or decrease targets by 15%, 25%, or
50%).

## References

Das, I., & Dennis, J. E. (1997). A closer look at drawbacks of
minimizing weighted sums of objectives for Pareto set generation in
multicriteria optimization problems. *Structural Optimization*, *14*(1),
63–69. <https://doi.org/10.1007/bf01197559>

Deléglise, H., Justeau-Allaire, D., Mulligan, M., Espinoza, J.-C.,
Isasi-Catalá, E., Alvarez, C., Condom, T., & Palomo, I. (2024).
Integrating multi-objective optimization and ecological connectivity to
strengthen peru’s protected area system towards the 30\*2030 target.
*Biological Conservation*, *299*, 110799.
<https://doi.org/10.1016/j.biocon.2024.110799>

Giakoumi, S., Richardson, A. J., Doxa, A., Moro, S., Andrello, M.,
Hanson, J. O., Hermoso, V., Mazor, T., McGowan, J., Kujala, H., Law, E.,
Álvarez-Romero, J. G., Magris, R. A., Gissi, E., Arafeh-Dalmau, N.,
Metaxas, A., Virtanen, E. A., Ban, N. C., Runya, R. M., … Katsanevakis,
S. (2025). Advances in systematic conservation planning to meet global
biodiversity goals. *Trends in Ecology and Evolution*, *40*(4), 395–410.
<https://doi.org/10.1016/j.tree.2024.12.002>

Gurobi Optimization LLC. (2026). *Gurobi Optimizer Reference Manual*.
<https://www.gurobi.com>

Huangfu, Q., & Hall, J. A. J. (2017). Parallelizing the dual revised
simplex method. *Mathematical Programming Computation*, *10*(1),
119–142. <https://doi.org/10.1007/s12532-017-0130-5>

Jung, M., Arnell, A., Lamo, X. de, García-Rangel, S., Lewis, M., Mark,
J., Merow, C., Miles, L., Ondo, I., Pironon, S., Ravilious, C., Rivers,
M., Schepaschenko, D., Tallowin, O., Soesbergen, A. van, Govaerts, R.,
Boyle, B. L., Enquist, B. J., Feng, X., … Visconti, P. (2021). Areas of
global importance for conserving terrestrial biodiversity, carbon and
water. *Nature Ecology and Evolution*, *5*(11), 1499–1509.
<https://doi.org/10.1038/s41559-021-01528-7>

Klotz, E., & Newman, A. M. (2013). Practical guidelines for solving
difficult linear programs. *Surveys in Operations Research and
Management Science*, *18*(1-2), 1–17.
<https://doi.org/10.1016/j.sorms.2012.11.001>

Lee, J. R., Shaw, J. D., Ropert-Coudert, Y., Terauds, A., & Chown, S. L.
(2024). Conservation features of the terrestrial antarctic peninsula.
*Ambio*, *53*(7), 1037–1049.
<https://doi.org/10.1007/s13280-024-02009-4>

López Jaimes, A., Zapotecas-Martínez, S., & Coello, C. (2011). An
introduction to multiobjective optimization techniques. In *Optimization
in polymer processing* (pp. 29–57). Nova Science Publishers Inc.

Rodrigues, A. S., Orestes Cerdeira, J., & Gaston, K. J. (2000).
Flexibility, efficiency, and accountability: Adapting reserve selection
algorithms to more complex conservation problems. *Ecography*, *23*(5),
565–574. <https://doi.org/10.1111/j.1600-0587.2000.tb00175.x>

Wierzbicki, A. P. (1980). The use of reference objectives in
multiobjective optimization. In G. Fandel & T. Gal (Eds.), *Multiple
criteria decision making theory and application. Lecture notes in
economics and mathematical systems* (Vol. 177, pp. 468–486). Springer
Berlin Heidelberg.

Williams, P., Gibbons, D., Margules, C., Rebelo, A., Humphries, C., &
Pressey, R. (1996). A comparison of richness hotspots, rarity hotspots,
and complementary areas for conserving diversity of british birds.
*Conservation Biology*, *10*(1), 155–174.
<https://doi.org/10.1046/j.1523-1739.1996.10010155.x>
