/** Import dependencies */
// classes to create components
import {FeatureSettings} from "./feature-settings-class.js";
import {LockSettings} from "./lock-settings-class.js";
import {CostSettings} from "./cost-settings-class.js";
// styling
import "./css/style.css";

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
   * Objective settings object.
   * @type {Object}
   */
  _objectiveSettings;

  /**
   * Feature settings object.
   * @type {Object}
   */
  _featureSettings;

  /**
   * Lock settings object.
   * @type {Object}
   */
  _lockSettings;

  /**
   * Cost settings object.
   * @type {Object}
   */
  _costSettings;

  /**
  * Construct a new Solver object.
  * @return {void}
  */
  constructor() {}

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
    element, project,
    featureTargetChoices, featureWeightChoices, costWeightChoices,
    zoneColors
  ) {
    // initialize fields
    this._project = project;

    // assign styling to element based on zone colors
    for (let i = 0; i < project.zones.length; ++i) {
      element.style.setProperty(
        `--zone-${project.zones[i]}-primary`,
        zoneColors[i]
      );
      element.style.setProperty(
        `--zone-${project.zones[i]}-secondary`,
        `color-mix(in srgb, ${zoneColors[i]}, white 50%)`
      );
    }

    // initialize objective settings
    // this._objectiveSettings = new ObjectiveSettings(project);
    // this._objectiveSettings.appendTo(element.querySelector(".features-panel"));

    // initialize feature settings
    this._featureSettings = new FeatureSettings(
      project, featureTargetChoices, featureWeightChoices
    );
    this._featureSettings.appendTo(element.querySelector(".features-panel"));

    // initialize lock settings
    this._lockSettings = new LockSettings(project)
    this._lockSettings.appendTo(
      element.querySelector(".locks-panel"),
      element.id
    );

    // initialize cost settings
    this._costSettings = new CostSettings(project, costWeightChoices);
    this._costSettings.appendTo(element.querySelector(".costs-panel"));

    // initialize footer
    this._startButton = element.querySelector(`#${element.id}_start_button`);
    this._stopButton = element.querySelector(`#${element.id}_stop_button`);
    this._nameInput = element.querySelector(`#${element.id}_name`);

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
      if (HTMLWidgets.shinyMode) {
        Shiny.setInputValue(
          `${element.id}_settings:apscp.JsDataFrameList`,
          this.getSettings(),
          {priority: "event"}
        );
      }
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
  * Reset so that solver can be used to generate a new solution.
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
  * Synchronize solver. This method is used to update the
  * feature status bars to reflect changes to the lock settings.
  * @param {object} data - Data frame with new status bar values.
  * @param {object} data.id - Feature identifier.
  * @return {void}
  */
  sync(data) {
    this._featureSettings.sync(data);
  }

  /**
  * Get settings for generating a solution.
  * @return {Object}
  */
  getSettings() {
    return {
      objectives: {id: 1, zone: "PLACEHOLDER"},
      // objectives: this._objectiveSettings.getSettings(),
      features: this._featureSettings.getSettings(),
      locks: this._lockSettings.getSettings(),
      costs: this._costSettings.getSettings()
    };
  }

}
