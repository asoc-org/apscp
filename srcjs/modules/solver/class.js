import "./css/style.css";
import TomSelect from "tom-select";
import "tom-select/dist/css/tom-select.bootstrap5.css";
import {createFeatureSettingsPanel} from "./create-feature-settings-panel.js";
import {createLockSettingsPanel} from "./create-lock-settings-panel.js";
import {createCostSettingsPanel} from "./create-cost-settings-panel.js";

/** Class representing an object for generating a solution. */
export class Solver {

  /**
   * Project data.
   * @type {Object}
   */
  _project;

  /**
  * HTML element with the start button.
  * @type {HTMLElement}
  */
  _startButton;

  /**
  * HTML element with the stop button.
  * @type {HTMLElement}
  */
  _stopButton;

  /**
  * HTML element with the name input.
  * @type {HTMLElement}
  */
  _nameInput;

  /**
   * Array of HTML elements that contain settings for features.
   * @type {Array<HTMLElement>}
   */
  _featureSettingElements;

  /**
   * Array of HTML elements that contain settings for locks.
   * @type {Array<HTMLElement>}
   */
  _lockSettingElements;

  /**
   * Array of HTML elements that contain settings for costs.
   * @type {Array<HTMLElement>}
   */
  _costSettingElements;

  /**
  * Construct a new Mapper object.
  * @return {void}
  */
  constructor() {
    // initialize fields
    this._lockSelectElementArray = [];
  }

  /**
  * Initialize Solver with HTML identifier and project data.
  * @param {HTMLElement} element - HTML element.
  * @param {Object} project - Object with various types of objects.
  * @param {Array<Object>} project.features - Array of feature objects.
  * @param {Array<Object>} project.costs - Array of cost objects.
  * @param {Array<Object>} project.lock - Array of lock objects.
  * @param {Array<number>} featureTargetChoices - Array of numbers used to
  * define the potential values for setting feature targets.
  * @param {Array<number>} featureWeightChoices - Array of numbers used to
  * define the potential values for setting feature weights.
  * @param {Array<number>} costWeightChoices - Array of numbers used to
  * define the potential values for setting cost weights.
  * @param {Array<string>} zoneColors - Array of colors for zones.
  * @return {void}
  */
  initialize(
    el, project,
    featureTargetChoices, featureWeightChoices, costWeightChoices,
    zoneColors
  ) {
    // initialize fields
    this._project = project;

    // assign styling based on zone colors
    for (let i = 0; i < project.zones.length; ++i) {
      el.style.setProperty(
        `--zone-${project.zones[i]}-primary-color`,
        zoneColors[i]
      );
      el.style.setProperty(
        `--zone-${project.zones[i]}-secondary-color`,
        `color-mix(in srgb, ${zoneColors[i]}, white 50%)`
      );
    }

    // initialize multi-objective optimization panel
    let mooPanelElement = el.querySelector(".objectives-panel");
    // TODO

    // initialize features panel
    let featurePanelElement = el.querySelector(".features-panel");
    featurePanelElement.appendChild(
      createFeatureSettingsPanel(
        project, featureTargetChoices, featureWeightChoices
      )
    );
    this._initializeFeatureSelectWidget(featurePanelElement);
    this._featureSettingElements = Array.from(
      featurePanelElement.querySelectorAll(".feature-setting")
    );

    // initialize locks panel
    let lockPanelElement = el.querySelector(".locks-panel");
    lockPanelElement.appendChild(createLockSettingsPanel(project));
    this._lockSettingElements = Array.from(
      lockPanelElement.querySelectorAll(".lock-setting")
    );

    // initialize costs panel
    let costPanelElement = el.querySelector(".costs-panel");
    costPanelElement.appendChild(
      createCostSettingsPanel(project, costWeightChoices)
    );
    this._costSettingElements = Array.from(
      costPanelElement.querySelectorAll(".cost-setting")
    );

    // initialize footer
    this._startButton = el.querySelector(`#${el.id}_start_button`);
    this._stopButton = el.querySelector(`#${el.id}_stop_button`);
    this._nameInput = el.querySelector(`#${el.id}_name`);

    // set event handler for name input
    this._nameInput.addEventListener("input", (event) => {
      // if input is empty, ensure that start button is disabled
      if (event.target.value.length > 0) {
        this._startButton.removeAttribute("disabled", "");
      } else {
        this._startButton.setAttribute("disabled", "");
      }
    });

    // set event handler for start button
    this._startButton.addEventListener("click", (event) => {
      // send message to R session with settings
      Shiny.setInputValue(`${el.id}_settings`, this.getSettings());
      // enable stop button
      this._stopButton.removeAttribute("disabled");
    });

  }

  /**
  * Add a lock to the Solver object.
  * @param {Object} lock - Object that is a lock.
  * @return {void}
  */
  addLock(lock) {
    // TODO
  }

  /**
  * Reset the Solver object.
  * @return {void}
  */
  reset() {
    this._nameInput.value = "";
    this._startButton.setAttribute("disabled", "");
    this._stopButton.setAttribute("disabled", "");
    this._startButton.setAttribute("data-state", "ready");
    this._startButton.children[0].setAttribute("case", "ready");
    this._stopButton.setAttribute("data-state", "ready");
    this._stopButton.children[0].setAttribute("case", "ready");
  }

  /**
  * Get settings from the Solver object for generating a solution.
  * @return {Object}
  */
  getSettings() {
    return {
      objectives: null,
      features: {
        id:
          this._project.features
          .map(x => Array(this._project.zones.length).fill(x.id))
          .flat(1),
        name:
          this._project.features
          .map(x => Array(this._project.zones.length).fill(x.name))
          .flat(1),
        column:
          this._project.features
          .map(x => Array(this._project.zones.length).fill(x.layer.column))
          .flat(1),
        zone:
          this._featureSettingElements
          .map(x => {return this._project.zones})
          .flat(1),
        target:
          this._featureSettingElements
          .map(x => {return x.widget.getTargets()})
          .flat(1),
        weight:
          this._featureSettingElements
          .map(x => {return x.widget.getWeights()})
          .flat(1)
      },
      locks: null,
      costs: null
    };
  }

  // Private methods

  /**
  * Initialize feature select widget
  * @param {HTMLElement} el - HTML element with feature panel.
  * @return {void}
  */
  _initializeFeatureSelectWidget(el) {
    // create parameters to store information on features and themes
    let features = [];
    let themes = new Set;
    for (let i = 0; i < this._project.features.length; ++i) {
      features.push({
        value: this._project.features[i].id,
        name: this._project.features[i].name,
        zone: this._project.features[i].themes.map(x => x.zone)
      });
      for (let j = 0; j < this._project.features[i].themes.length; ++j) {
        themes.add(this._project.features[i].themes[j].zone);
      }
    }
    // initialize elect menu for features
    el.featureSelectWidget = new TomSelect(
      el.querySelector(".feature-select"), {
      options: features,
      create: false,
      dropdownParent: "body",
      labelField: "name",
      searchField: ["name"],
      maxItems: null,
      sortField: "name",
      plugins: ["checkbox_options"],
      closeAfterSelect: false,
      optgroups: Array.from(themes).map(x => {return {value: x}}),
      optgroupField: "zone",
      render: {
        optgroup_header: function(data, escape) {
          return '<div class="optgroup-header">' +
            escape(data.value + " zone") +
            '</div>';
        }
      },
      onItemAdd: function(value) {
        let x = el.children[0].querySelector(`[data-id="${value}"]`);
        if (x) {
          x.style.display = "block";
        }
      },
      onItemRemove: function(value) {
        let x = el.children[0].querySelector(`[data-id="${value}"]`);
        if (x) {
          x.style.display = "none";
        }
      }
     });
  }

}
