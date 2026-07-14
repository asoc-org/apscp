// create legend
function create_legend(el, x) {
  let out = undefined;
  if (out.class === "ContinuousLegend") {
    continuous_legend(el, x);
  } else if (out.class === "CategoricalLegend") {
    categorical_legend(el, x);
  }
}

// create provenance icon
function create_provenance(el, x) {
  const icon_el = document.createElement("i");
  icon_el.setAttribute("data-toggle", "tooltip");
  icon_el.setAttribute("data-placement", "top");
  icon_el.setAttribute("data-container", "body");
  icon_el.setAttribute("title", x.description);
  icon_el.classList.add("fas");
  icon_el.classList.add("fa-" + x.icon);
  icon_el.style.color = x.color;
  el.appendChild(icon_el);
}
