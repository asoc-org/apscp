/** Import dependencies */
// styling
import "./css/style.css";

/** Class representing a hover select. */
export default class HoverSelect {

  // public fields

  /**
  * HTML element.
  * @type {HTMLElement}
  */
  element;

  // private fields

  /**
  * Value.
  * @type {string}
  */
  _value;

  /**
  * Previous value.
  * @type {string}
  */
  _previous;

  /**
  * Initial value.
  * @type {string}
  */
  _initial;

  /**
  * Options.
  * @type {Map<object>}
  */
  _options = new Map();

  /**
  * Disabled option.
  * @type {object}
  */
  _disabledOption;

  /**
  * Custom click event function.
  * @type {function}
  */
  _onClick;

  /**
  * Construct a new HoverSelect object.
  * @param {HTMLElement} element - Element to create hover select.
  * @param {object} options - Configuration settings.
  * @param {Array<object>} options.options - Array of select options.
  * @param {Array<string>} options.options.value - Value for option.
  * @param {Array<string>} options.options.text - Text for option.
  * @param {Array<string>} options.options.color - Color for option.
  * @param {string} options.selected - Value for default selected option.
  * @param {object} options.disabledOption - Option to display when
  * disabled.
  * @param {string} options.disabledOption.value - Value when disabled.
  * @param {string} options.disabledOption.text - Text to display when
  * disabled.
  * @param {string} options.disabledOption.color - Color to display when
  * disabled.
  * @param {function} options.onClick - Function to define click event
  * behavior.
  * @return {void}
  */
  constructor(element, options) {
    // initialize public field
    this.element = element;
    // initialize private fields
    this._value = options.selected || options.options[0].value;
    this._previous = this._value;
    this._initial = this._value;
    this._disabledOption =
      options.disabledOption ||
      {value: "", text: "Off", color: "#B8B8B8"};
    this._onClick = options.onClick || ((event) => {});
    options.options.forEach(x => this._options.set(x.value, x));
    // assert valid arguments
    if (this._options.get(this._value) === undefined) {
      console.error(
        "new HoverSelect(): `selected` must have a valid `options` value."
      );
    }
    // render element
    this._render(this.element);
    // attach class to element
    this.element.hoverSelect = this;
  }

  /**
   * Get value.
   * @return {object}
   */
  get() {
    return this._value;
  }

  /**
   * Set value.
   * @param {object} value - Value.
   * @return {void}
   */
  set(value) {
    this._setSelectedOption(this._getOption(value));
  }

  /**
   * Enable widget
   * @return {void}
   */
  enable() {
    this._setSelectedOption(this._getOption(this._previous));
    this.element.removeAttribute("disabled");
  }

  /**
   * Disable widget.
   * @return {void}
   */
  disable() {
    this._previous = this._value;
    this._setSelectedOption(this._disabledOption);
  }

  /**
   * Reset widget to initial state.
   * @return {void}
   */
  reset() {
    this._setSelectedOption(this._getOption(this._initial));
  }

  // private methods

  /**
   * Get option.
   * @param {object} value - Value.
   * @return {void}
   */
  _getOption(value) {
    let out = this._options.get(value)
    if (out === undefined) {
      console.error("`value` must be a valid `options` value.");
    }
    return out;
  }

  /**
   * Set selected option.
   * @param {object} option - Option.
   * @param {object} option.value - Value for option.
   * @param {string} option.text - Text to display for option.
   * @param {string} option.color - Color for option.
   * @return {void}
   */
  _setSelectedOption(option) {
    this._value = option.value;
    this.element.setAttribute("data-value", this._value);
    this.element.children[0].children[0].innerText = option.text;
    this.element.children[0].style.backgroundColor = option.color;
  }

  /**
   * Render element.
   * @param {HTMLElement} element - HTML element.
   * @return {void}
   */
  _render(element) {
    // find initial option
    let initialOption = this._getOption(this._initial);
    // find longest text
    let longestText =
      Array.from(this._options.values(), x => x.text)
      .reduce((a, b) => a.length > b.length ? a : b);
    // initialize element
    element.classList.add("hoverSelect-widget");
    element.setAttribute("data-value", initialOption.value);
    // create button
    let button = document.createElement("button");
    button.classList.add("select-button");
    button.style.backgroundColor = initialOption.color;
    // create element to specify button text
    let text = document.createElement("span");
    text.classList.add("select-button-text");
    text.innerText = initialOption.text;
    button.appendChild(text);
    // create dummy element to ensure button width remains constant when
    // different options are selected
    let span = document.createElement("span");
    span.classList.add("select-button-spacer");
    span.innerText = longestText;
    button.appendChild(span);
    // create elements for options
    let ul = document.createElement("ul");
    ul.classList.add("select-options");
    this._options.forEach(opt => {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.innerText = opt.text;
      a.setAttribute("data-option", opt.value);
      a.classList.add("select-option");
      li.appendChild(a);
      ul.appendChild(li);
    })
    // add event listener to options
    ul.addEventListener("click", (event) => {
      let elem = event.target;
      if (elem.matches(".select-option")) {
        // select active option
        this.set(elem.getAttribute("data-option"));
        // call on onClick method
        this._onClick(event);
      }
    });
    // assemble element
    element.appendChild(button);
    element.appendChild(ul)
  }
}
