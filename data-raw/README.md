# Systematic conservation planning for the Antarctic Peninsula Online Material

## Overview

These files constitute the SCAR-IAATO Systematic Conservation Planning tool (code and data). Background information on the project and an introduction to features of value are available online (https://doi.org/10.26180/24023637).

The tourism visitor data used in the project, used to derive the max_tvis and max_tves rasters, were obtained from IAATO in early 2022. Increased capabilities in technology have allowed large data sets to be analysed more effectively and quickly than previously possible. This has brought to IAATO’s attention certain anomalies in the historical data and IAATO recommends that users utilise the most recent data for future analyses, which can be requested from IAATO (https://iaato.org/news-room/data-statistics).

## Contents

* "Peninsula_SCP_Code_May2025.R": This R script provides the code to run the conservation planning scenarios using the provided data. Instructions are provided in the script for installing necessary packages etc.

* "PUID_1km.tif": This raster layer is a grid of the 1km2 planning units used in the analysis.

* "cost_1km_tvis_scaled_S.tif" and "cost_1km_tves_S.tif": These two raster layers contain the cost data for both visitor (tvis) and vessel (tves) scenarios.

* "ASPA_1km.tif": This raster layer identifies which planning units contain ASPAs

* "max_tvis_1km.tif" and "max_tves_1km.tif": These two raster layers contain maximum visitor or vessel numbers respectively per planning unit (calculated using data from the seasons 2015-2020 seasons).

* Primary_data Folder: This folder contains the rasters of the 54 conservation features of value used in the primary systematic conservation planning analysis.

* Target folder: This folder contains the adjusted and unadjusted targets as derived by experts for use in the systematic conservation planning scenarios.

## Source

Data obtained from <https://doi.org/10.26180/29092346> (22 June 2026)

## Citation

Lee J and Chown S (2025) _Systematic conservation planning for the Antarctic Peninsula Online Material_. FigShare archive. Available at <https://doi.org/10.26180/29092346>.

## Disclaimer

Whilst anyone with basic coding experience can use the tool, including the incorporation of new data and generating alternative scenarios, it is recommended that users understand clearly what their objectives are and what scenarios they wish to test, so as to understand what inputs and outputs represent. Advice from those experienced in conservation planning will facilitate understanding of how changing input data, targets, costs or constraints, can influence the scenarios and outputs.
