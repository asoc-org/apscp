/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/nouislider/dist/nouislider.css"
/*!*****************************************************!*\
  !*** ./node_modules/nouislider/dist/nouislider.css ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./node_modules/tom-select/dist/css/tom-select.bootstrap5.css"
/*!********************************************************************!*\
  !*** ./node_modules/tom-select/dist/css/tom-select.bootstrap5.css ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./srcjs/modules/hoverselect/css/style.css"
/*!*************************************************!*\
  !*** ./srcjs/modules/hoverselect/css/style.css ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./srcjs/modules/solver/css/cost-setting.css"
/*!***************************************************!*\
  !*** ./srcjs/modules/solver/css/cost-setting.css ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./srcjs/modules/solver/css/feature-setting.css"
/*!******************************************************!*\
  !*** ./srcjs/modules/solver/css/feature-setting.css ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./srcjs/modules/solver/css/lock-setting.css"
/*!***************************************************!*\
  !*** ./srcjs/modules/solver/css/lock-setting.css ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./srcjs/modules/solver/css/setting.css"
/*!**********************************************!*\
  !*** ./srcjs/modules/solver/css/setting.css ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./srcjs/modules/solver/css/settings.css"
/*!***********************************************!*\
  !*** ./srcjs/modules/solver/css/settings.css ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./srcjs/modules/solver/css/style.css"
/*!********************************************!*\
  !*** ./srcjs/modules/solver/css/style.css ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./srcjs/modules/solver/css/tom-select.css"
/*!*************************************************!*\
  !*** ./srcjs/modules/solver/css/tom-select.css ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./srcjs/modules/statusbar/css/style.css"
/*!***********************************************!*\
  !*** ./srcjs/modules/statusbar/css/style.css ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./srcjs/modules/utils/css/style.css"
/*!*******************************************!*\
  !*** ./srcjs/modules/utils/css/style.css ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./node_modules/sortablejs/modular/sortable.core.esm.js"
/*!**************************************************************!*\
  !*** ./node_modules/sortablejs/modular/sortable.core.esm.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoScroll: () => (/* binding */ AutoScrollPlugin),
/* harmony export */   MultiDrag: () => (/* binding */ MultiDragPlugin),
/* harmony export */   OnSpill: () => (/* binding */ OnSpill),
/* harmony export */   Sortable: () => (/* binding */ Sortable),
/* harmony export */   Swap: () => (/* binding */ SwapPlugin),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**!
 * Sortable 1.15.7
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var version = "1.15.7";

function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !! /*@__PURE__*/navigator.userAgent.match(pattern);
  }
}
var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

var captureMode = {
  capture: false,
  passive: false
};
function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}
function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}
function matches( /**HTMLElement*/el, /**String*/selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));
  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }
  return false;
}
function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType && el.host !== el ? el.host : el.parentNode;
}
function closest( /**HTMLElement*/el, /**String*/selector, /**HTMLElement*/ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;
    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }
      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }
  return null;
}
var R_SPACE = /\s+/g;
function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}
function css(el, prop, val) {
  var style = el && el.style;
  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }
      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }
      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}
function matrix(el, selfOnly) {
  var appliedTransforms = '';
  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');
      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */
    } while (!selfOnly && (el = el.parentNode));
  }
  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */
  return matrixFn && new matrixFn(appliedTransforms);
}
function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
      i = 0,
      n = list.length;
    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }
    return list;
  }
  return [];
}
function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;
  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}

/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */
function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;
  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }
  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode;

    // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11
    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect();

          // Set relative to edges of padding box of container
          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */
      } while (container = container.parentNode);
    }
  }
  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
      scaleX = elMatrix && elMatrix.a,
      scaleY = elMatrix && elMatrix.d;
    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }
  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}

/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */
function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
    elSideVal = getRect(el)[elSide];

  /* jshint boss:true */
  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
      visible = void 0;
    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }
    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }
  return false;
}

/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */
function getChild(el, childNum, options, includeDragEl) {
  var currentChild = 0,
    i = 0,
    children = el.children;
  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }
      currentChild++;
    }
    i++;
  }
  return null;
}

/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */
function lastChild(el, selector) {
  var last = el.lastElementChild;
  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }
  return last || null;
}

/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */
function index(el, selector) {
  var index = 0;
  if (!el || !el.parentNode) {
    return -1;
  }

  /* jshint boss:true */
  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }
  return index;
}

/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */
function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
    offsetTop = 0,
    winScroller = getWindowScrollingElement();
  if (el) {
    do {
      var elMatrix = matrix(el),
        scaleX = elMatrix.a,
        scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }
  return [offsetLeft, offsetTop];
}

/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */
function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;
    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }
  return -1;
}
function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;
  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);
      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */
  } while (elem = elem.parentNode);
  return getWindowScrollingElement();
}
function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }
  return dst;
}
function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}
var _throttleTimeout;
function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
        _this = this;
      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }
      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}
function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}
function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}
function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;
  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}
function setRect(el, rect) {
  css(el, 'position', 'absolute');
  css(el, 'top', rect.top);
  css(el, 'left', rect.left);
  css(el, 'width', rect.width);
  css(el, 'height', rect.height);
}
function unsetRect(el) {
  css(el, 'position', '');
  css(el, 'top', '');
  css(el, 'left', '');
  css(el, 'width', '');
  css(el, 'height', '');
}
function getChildContainingRectFromElement(container, options, ghostEl) {
  var rect = {};
  Array.from(container.children).forEach(function (child) {
    var _rect$left, _rect$top, _rect$right, _rect$bottom;
    if (!closest(child, options.draggable, container, false) || child.animated || child === ghostEl) return;
    var childRect = getRect(child);
    rect.left = Math.min((_rect$left = rect.left) !== null && _rect$left !== void 0 ? _rect$left : Infinity, childRect.left);
    rect.top = Math.min((_rect$top = rect.top) !== null && _rect$top !== void 0 ? _rect$top : Infinity, childRect.top);
    rect.right = Math.max((_rect$right = rect.right) !== null && _rect$right !== void 0 ? _rect$right : -Infinity, childRect.right);
    rect.bottom = Math.max((_rect$bottom = rect.bottom) !== null && _rect$bottom !== void 0 ? _rect$bottom : -Infinity, childRect.bottom);
  });
  rect.width = rect.right - rect.left;
  rect.height = rect.bottom - rect.top;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
var expando = 'Sortable' + new Date().getTime();

function AnimationStateManager() {
  var animationStates = [],
    animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });
        var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect);

        // If animating: compensate for current animation
        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);
          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }
        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;
      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }
      var animating = false,
        animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
          target = state.target,
          fromRect = target.fromRect,
          toRect = getRect(target),
          prevFromRect = target.prevFromRect,
          prevToRect = target.prevToRect,
          animatingRect = state.rect,
          targetMatrix = matrix(target, true);
        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }
        target.toRect = toRect;
        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) &&
          // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        }

        // if fromRect != toRect: animate
        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;
          if (!time) {
            time = _this.options.animation;
          }
          _this.animate(target, animatingRect, toRect, time);
        }
        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);
      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }
      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
          scaleX = elMatrix && elMatrix.a,
          scaleY = elMatrix && elMatrix.d,
          translateX = (currentRect.left - toRect.left) / (scaleX || 1),
          translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        this.forRepaintDummy = repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}
function repaint(target) {
  return target.offsetWidth;
}
function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }
    plugins.forEach(function (p) {
      if (p.pluginName === plugin.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
      }
    });
    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;
    this.eventCanceled = false;
    evt.cancel = function () {
      _this.eventCanceled = true;
    };
    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return;
      // Fire global events if it exists in this sortable
      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
          sortable: sortable
        }, evt));
      }

      // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined
      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread2({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized;

      // Add default options from plugin
      _extends(defaults, initialized.defaults);
    });
    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);
      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;
      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return;

      // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin
      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
    rootEl = _ref.rootEl,
    name = _ref.name,
    targetEl = _ref.targetEl,
    cloneEl = _ref.cloneEl,
    toEl = _ref.toEl,
    fromEl = _ref.fromEl,
    oldIndex = _ref.oldIndex,
    newIndex = _ref.newIndex,
    oldDraggableIndex = _ref.oldDraggableIndex,
    newDraggableIndex = _ref.newDraggableIndex,
    originalEvent = _ref.originalEvent,
    putSortable = _ref.putSortable,
    extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
    options = sortable.options,
    onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1);
  // Support for new CustomEvent feature
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }
  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;
  var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));
  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }
  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }
  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var _excluded = ["evt"];
var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    originalEvent = _ref.evt,
    data = _objectWithoutProperties(_ref, _excluded);
  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};
function _dispatchEvent(info) {
  dispatchEvent(_objectSpread2({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}
var dragEl,
  parentEl,
  ghostEl,
  rootEl,
  nextEl,
  lastDownEl,
  cloneEl,
  cloneHidden,
  oldIndex,
  newIndex,
  oldDraggableIndex,
  newDraggableIndex,
  activeGroup,
  putSortable,
  awaitingDragStarted = false,
  ignoreNextClick = false,
  sortables = [],
  tapEvt,
  touchEvt,
  lastDx,
  lastDy,
  tapDistanceLeft,
  tapDistanceTop,
  moved,
  lastTarget,
  lastDirection,
  pastFirstInvertThresh = false,
  isCircumstantialInvert = false,
  targetMoveDistance,
  // For positioning ghost absolutely
  ghostRelativeParent,
  ghostRelativeParentInitialScroll = [],
  // (left, top)

  _silent = false,
  savedInputChecked = [];

/** @const */
var documentExists = typeof document !== 'undefined',
  PositionGhostAbsolutely = IOS,
  CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
  // This will not pass for IE9, because IE9 DnD only works on anchors
  supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
  supportCssPointerEvents = function () {
    if (!documentExists) return;
    // false when <= IE11
    if (IE11OrLess) {
      return false;
    }
    var el = document.createElement('x');
    el.style.cssText = 'pointer-events:auto';
    return el.style.pointerEvents === 'auto';
  }(),
  _detectDirection = function _detectDirection(el, options) {
    var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;
    if (elCSS.display === 'flex') {
      return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
    }
    if (elCSS.display === 'grid') {
      return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
    }
    if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
      var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
      return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
    }
    return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
  },
  _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
    var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
    return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
  },
  /**
   * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
   * @param  {Number} x      X position
   * @param  {Number} y      Y position
   * @return {HTMLElement}   Element of the first found nearest Sortable
   */
  _detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
    var ret;
    sortables.some(function (sortable) {
      var threshold = sortable[expando].options.emptyInsertThreshold;
      if (!threshold || lastChild(sortable)) return;
      var rect = getRect(sortable),
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;
      if (insideHorizontally && insideVertically) {
        return ret = sortable;
      }
    });
    return ret;
  },
  _prepareGroup = function _prepareGroup(options) {
    function toFn(value, pull) {
      return function (to, from, dragEl, evt) {
        var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;
        if (value == null && (pull || sameGroup)) {
          // Default pull value
          // Default pull and put value if same group
          return true;
        } else if (value == null || value === false) {
          return false;
        } else if (pull && value === 'clone') {
          return value;
        } else if (typeof value === 'function') {
          return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
        } else {
          var otherGroup = (pull ? to : from).options.group.name;
          return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
        }
      };
    }
    var group = {};
    var originalGroup = options.group;
    if (!originalGroup || _typeof(originalGroup) != 'object') {
      originalGroup = {
        name: originalGroup
      };
    }
    group.name = originalGroup.name;
    group.checkPull = toFn(originalGroup.pull, true);
    group.checkPut = toFn(originalGroup.put);
    group.revertClone = originalGroup.revertClone;
    options.group = group;
  },
  _hideGhostForTarget = function _hideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) {
      css(ghostEl, 'display', 'none');
    }
  },
  _unhideGhostForTarget = function _unhideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) {
      css(ghostEl, 'display', '');
    }
  };

// #1184 fix - Prevent click event on fallback if dragged but item not changed position
if (documentExists && !ChromeForAndroid) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}
var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;
    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);
    if (nearest) {
      // Create imitation event
      var event = {};
      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }
      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;
      nearest[expando]._onDragOver(event);
    }
  }
};
var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};

/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */
function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }
  this.el = el; // root element
  this.options = options = _extends({}, options);

  // Export instance
  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    // Disabled on Safari: #1571; Enabled on Safari IOS: #2244
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window && (!Safari || IOS),
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults);

  // Set default options
  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }
  _prepareGroup(options);

  // Bind all private methods
  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  }

  // Setup drag mode
  this.nativeDraggable = options.forceFallback ? false : supportDraggable;
  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  }

  // Bind events
  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }
  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }
  sortables.push(this.el);

  // Restore sorting
  options.store && options.store.get && this.sort(options.store.get(this) || []);

  // Add animation state manager
  _extends(this, AnimationStateManager());
}
Sortable.prototype = /** @lends Sortable.prototype */{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart( /** Event|TouchEvent */evt) {
    if (!evt.cancelable) return;
    var _this = this,
      el = this.el,
      options = this.options,
      preventOnFilter = options.preventOnFilter,
      type = evt.type,
      touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
      target = (touch || evt).target,
      originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
      filter = options.filter;
    _saveInputCheckedState(el);

    // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
    if (dragEl) {
      return;
    }
    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    }

    // cancel dnd if original target is content editable
    if (originalTarget.isContentEditable) {
      return;
    }

    // Safari ignores further event handling after mousedown
    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === 'SELECT') {
      return;
    }
    target = closest(target, options.draggable, el, false);
    if (target && target.animated) {
      return;
    }
    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    }

    // Get the index of the dragged element within its parent
    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable);

    // Check filter
    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });
        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);
        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });
          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });
      if (filter) {
        preventOnFilter && evt.preventDefault();
        return; // cancel dnd
      }
    }
    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    }

    // Prepare `dragstart`
    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart( /** Event */evt, /** Touch */touch, /** HTMLElement */target) {
    var _this = this,
      el = _this.el,
      options = _this.options,
      ownerDocument = el.ownerDocument,
      dragStartFn;
    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';
      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });
        if (Sortable.eventCanceled) {
          _this._onDrop();
          return;
        }
        // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove
        _this._disableDelayedDragEvents();
        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        }

        // Bind the events: dragstart/dragend
        _this._triggerDragStart(evt, touch);

        // Drag start event
        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        });

        // Chosen item
        toggleClass(dragEl, options.chosenClass, true);
      };

      // Disable "draggable"
      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      if (options.supportPointer) {
        on(ownerDocument, 'pointerup', _this._onDrop);
        // Native D&D triggers pointercancel
        !this.nativeDraggable && on(ownerDocument, 'pointercancel', _this._onDrop);
      } else {
        on(ownerDocument, 'mouseup', _this._onDrop);
        on(ownerDocument, 'touchend', _this._onDrop);
        on(ownerDocument, 'touchcancel', _this._onDrop);
      }

      // Make dragEl draggable (must be before delay for FireFox)
      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }
      pluginEvent('delayStart', this, {
        evt: evt
      });

      // Delay is impossible for native DnD in Edge or IE
      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();
          return;
        }
        // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag
        if (options.supportPointer) {
          on(ownerDocument, 'pointerup', _this._disableDelayedDrag);
          on(ownerDocument, 'pointercancel', _this._disableDelayedDrag);
        } else {
          on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
          on(ownerDocument, 'touchend', _this._disableDelayedDrag);
          on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        }
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler( /** TouchEvent|PointerEvent **/e) {
    var touch = e.touches ? e.touches[0] : e;
    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);
    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'pointerup', this._disableDelayedDrag);
    off(ownerDocument, 'pointercancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart( /** Event */evt, /** Touch */touch) {
    touch = touch || evt.pointerType == 'touch' && evt;
    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }
    try {
      if (document.selection) {
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {
    awaitingDragStarted = false;
    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });
      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }
      var options = this.options;

      // Apply effect
      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost();

      // Drag start event
      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;
      _hideGhostForTarget();
      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;
      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }
      dragEl.parentNode[expando]._isOutsideThisEl(target);
      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });
            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }
          target = parent; // store last element
        }
        /* jshint boss:true */ while (parent = getParentOrHost(parent));
      }
      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove( /**TouchEvent*/evt) {
    if (tapEvt) {
      var options = this.options,
        fallbackTolerance = options.fallbackTolerance,
        fallbackOffset = options.fallbackOffset,
        touch = evt.touches ? evt.touches[0] : evt,
        ghostMatrix = ghostEl && matrix(ghostEl, true),
        scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
        scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
        relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
        dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
        dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1);

      // only set the status to dragging, when we are actually dragging
      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }
        this._onDragStart(evt, true);
      }
      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }
        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }
      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
        rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
        options = this.options;

      // Position absolutely
      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;
        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }
        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }
        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }
      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl);

      // Set transform-origin
      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart( /**Event*/evt, /**boolean*/fallback) {
    var _this = this;
    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });
    if (Sortable.eventCanceled) {
      this._onDrop();
      return;
    }
    pluginEvent('setupClone', this);
    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.removeAttribute("id");
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';
      this._hideClone();
      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    }

    // #1143: IFrame support workaround
    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;
      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }
      _this._hideClone();
      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true);

    // Set proper drop events
    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);
      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }
      on(document, 'drop', _this);

      // #1276 fix:
      css(dragEl, 'transform', 'translateZ(0)');
    }
    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;
    window.getSelection().removeAllRanges();
    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver( /**Event*/evt) {
    var el = this.el,
      target = evt.target,
      dragRect,
      targetRect,
      revert,
      options = this.options,
      group = options.group,
      activeSortable = Sortable.active,
      isOwner = activeGroup === group,
      canSort = options.sort,
      fromSortable = putSortable || activeSortable,
      vertical,
      _this = this,
      completedFired = false;
    if (_silent) return;
    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread2({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    }

    // Capture animation state
    function capture() {
      dragOverEvent('dragOverAnimationCapture');
      _this.captureAnimationState();
      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    }

    // Return invocation when dragEl is inserted (or completed)
    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });
      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }
        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }
        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        }

        // Animation
        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }
        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });
        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      }

      // Null lastTarget if it is not inside a previously swapped element
      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      }

      // no bubbling and not fallback
      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target);

        // Do not detect for empty insert if already inserted
        !insertion && nearestEmptyInsertDetectEvent(evt);
      }
      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    }

    // Call when dragEl has been inserted
    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);
      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }
    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }
    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;
    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }
    ignoreNextClick = false;
    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;
      if (revert) {
        parentEl = rootEl; // actualization
        capture();
        this._hideClone();
        dragOverEvent('revert');
        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }
        return completed(true);
      }
      var elLastChild = lastChild(el, options.draggable);
      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // Insert to end of list

        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        }

        // if there is a last element, it is the target
        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }
        if (target) {
          targetRect = getRect(target);
        }
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          if (elLastChild && elLastChild.nextSibling) {
            // the last draggable element is not the last node
            el.insertBefore(dragEl, elLastChild.nextSibling);
          } else {
            el.appendChild(dragEl);
          }
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
        // Insert to start of list
        var firstChild = getChild(el, 0, options, true);
        if (firstChild === dragEl) {
          return completed(false);
        }
        target = firstChild;
        targetRect = getRect(target);
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
          capture();
          el.insertBefore(dragEl, firstChild);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
          targetBeforeFirstSwap,
          differentLevel = dragEl.parentNode !== el,
          differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
          side1 = vertical ? 'top' : 'left',
          scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
          scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;
        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }
        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;
        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index(dragEl);
          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        }
        // If dragEl is already beside target: Do not insert
        if (direction === 0 || sibling === target) {
          return completed(false);
        }
        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
          after = false;
        after = direction === 1;
        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);
        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }
          _silent = true;
          setTimeout(_unsilent, 30);
          capture();
          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          }

          // Undo chrome's scroll adjustment (has no effect on other browsers)
          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }
          parentEl = dragEl.parentNode; // actualization

          // must be done before animation
          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }
          changed();
          return completed(true);
        }
      }
      if (el.contains(dragEl)) {
        return completed(false);
      }
    }
    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'pointercancel', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop( /**Event*/evt) {
    var el = this.el,
      options = this.options;

    // Get the index of the dragged element within its parent
    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode;

    // Get again after plugin event
    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    if (Sortable.eventCanceled) {
      this._nulling();
      return;
    }
    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);
    _cancelNextTick(this.cloneId);
    _cancelNextTick(this._dragStartId);

    // Unbind events
    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }
    this._offMoveEvents();
    this._offUpEvents();
    if (Safari) {
      css(document.body, 'user-select', '');
    }
    css(dragEl, 'transform', '');
    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }
      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);
      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }
      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }
        _disableDraggable(dragEl);
        dragEl.style['will-change'] = '';

        // Remove classes
        // ghostClass is added in dragStarted
        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }
        toggleClass(dragEl, this.options.chosenClass, false);

        // Drag stop event
        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });
        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            // Remove event
            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            });

            // drag from one list and drop into another
            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });
            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }
          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });
              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }
        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }
          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          });

          // Save sorting
          this.save();
        }
      }
    }
    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    var el = this.el;
    savedInputChecked.forEach(function (checkEl) {
      if (el.contains(checkEl)) {
        checkEl.checked = true;
      }
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent( /**Event*/evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);
        break;
      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);
          _globalDragOver(evt);
        }
        break;
      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
      el,
      children = this.el.children,
      i = 0,
      n = children.length,
      options = this.options;
    for (; i < n; i++) {
      el = children[i];
      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }
    return order;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order, useAnimation) {
    var items = {},
      rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];
      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;
    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);
      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }
      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },
  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);
    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    }
    // Remove draggable attributes
    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });
    this._onDrop();
    this._disableDelayedDragEvents();
    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');
      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }
      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();
      return;
    }
    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return;

      // show clone at dragEl or original position
      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }
      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }
      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};
function _globalDragOver( /**Event*/evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }
  evt.cancelable && evt.preventDefault();
}
function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
    sortable = fromEl[expando],
    onMoveFn = sortable.options.onMove,
    retVal;
  // Support for new CustomEvent feature
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }
  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);
  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }
  return retVal;
}
function _disableDraggable(el) {
  el.draggable = false;
}
function _unsilent() {
  _silent = false;
}
function _ghostIsFirst(evt, vertical, sortable) {
  var firstElRect = getRect(getChild(sortable.el, 0, sortable.options, true));
  var childContainingRect = getChildContainingRectFromElement(sortable.el, sortable.options, ghostEl);
  var spacer = 10;
  return vertical ? evt.clientX < childContainingRect.left - spacer || evt.clientY < firstElRect.top && evt.clientX < firstElRect.right : evt.clientY < childContainingRect.top - spacer || evt.clientY < firstElRect.bottom && evt.clientX < firstElRect.left;
}
function _ghostIsLast(evt, vertical, sortable) {
  var lastElRect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var childContainingRect = getChildContainingRectFromElement(sortable.el, sortable.options, ghostEl);
  var spacer = 10;
  return vertical ? evt.clientX > childContainingRect.right + spacer || evt.clientY > lastElRect.bottom && evt.clientX > lastElRect.left : evt.clientY > childContainingRect.bottom + spacer || evt.clientX > lastElRect.right && evt.clientY > lastElRect.top;
}
function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
    targetLength = vertical ? targetRect.height : targetRect.width,
    targetS1 = vertical ? targetRect.top : targetRect.left,
    targetS2 = vertical ? targetRect.bottom : targetRect.right,
    invert = false;
  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }
      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }
  invert = invert || invertSwap;
  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }
  return 0;
}

/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */
function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}

/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */
function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
    i = str.length,
    sum = 0;
  while (i--) {
    sum += str.charCodeAt(i);
  }
  return sum.toString(36);
}
function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;
  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}
function _nextTick(fn) {
  return setTimeout(fn, 0);
}
function _cancelNextTick(id) {
  return clearTimeout(id);
}

// Fixed #973:
if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
}

// Export utils
Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild,
  expando: expando
};

/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */
Sortable.get = function (element) {
  return element[expando];
};

/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */
Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }
  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }
    if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
    PluginManager.mount(plugin);
  });
};

/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */
Sortable.create = function (el, options) {
  return new Sortable(el, options);
};

// Export
Sortable.version = version;

var autoScrolls = [],
  scrollEl,
  scrollRootEl,
  scrolling = false,
  lastAutoScrollX,
  lastAutoScrollY,
  touchEvt$1,
  pointerElemChangedInterval;
function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    };

    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }
  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;
      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;
      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }
      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;
      var x = (evt.touches ? evt.touches[0] : evt).clientX,
        y = (evt.touches ? evt.touches[0] : evt).clientY,
        elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt;

      // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good
      if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback);

        // Listener for pointer element change
        var ogElemScroller = getParentAutoScrollElement(elem, true);
        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval();
          // Detect for pointer elem change, emulating native DnD behaviour
          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);
            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }
            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }
        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}
function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}
function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}
var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
    y = (evt.touches ? evt.touches[0] : evt).clientY,
    sens = options.scrollSensitivity,
    speed = options.scrollSpeed,
    winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
    scrollCustomFn;

  // New scroll root, set scrollEl
  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;
    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }
  var layersOut = 0;
  var currentParent = scrollEl;
  do {
    var el = currentParent,
      rect = getRect(el),
      top = rect.top,
      bottom = rect.bottom,
      left = rect.left,
      right = rect.right,
      width = rect.width,
      height = rect.height,
      canScrollX = void 0,
      canScrollY = void 0,
      scrollWidth = el.scrollWidth,
      scrollHeight = el.scrollHeight,
      elCSS = css(el),
      scrollPosX = el.scrollLeft,
      scrollPosY = el.scrollTop;
    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }
    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);
    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }
    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);
      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */
        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely
          }
          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;
          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }
          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }
    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));
  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);

var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
    putSortable = _ref.putSortable,
    dragEl = _ref.dragEl,
    activeSortable = _ref.activeSortable,
    dispatchSortableEvent = _ref.dispatchSortableEvent,
    hideGhostForTarget = _ref.hideGhostForTarget,
    unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();
  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};
function Revert() {}
Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
      putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();
    if (putSortable) {
      putSortable.captureAnimationState();
    }
    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);
    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }
    this.sortable.animateAll();
    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};
_extends(Revert, {
  pluginName: 'revertOnSpill'
});
function Remove() {}
Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
      putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};
_extends(Remove, {
  pluginName: 'removeOnSpill'
});
var OnSpill = [Remove, Revert];

var lastSwapEl;
function SwapPlugin() {
  function Swap() {
    this.defaults = {
      swapClass: 'sortable-swap-highlight'
    };
  }
  Swap.prototype = {
    dragStart: function dragStart(_ref) {
      var dragEl = _ref.dragEl;
      lastSwapEl = dragEl;
    },
    dragOverValid: function dragOverValid(_ref2) {
      var completed = _ref2.completed,
        target = _ref2.target,
        onMove = _ref2.onMove,
        activeSortable = _ref2.activeSortable,
        changed = _ref2.changed,
        cancel = _ref2.cancel;
      if (!activeSortable.options.swap) return;
      var el = this.sortable.el,
        options = this.options;
      if (target && target !== el) {
        var prevSwapEl = lastSwapEl;
        if (onMove(target) !== false) {
          toggleClass(target, options.swapClass, true);
          lastSwapEl = target;
        } else {
          lastSwapEl = null;
        }
        if (prevSwapEl && prevSwapEl !== lastSwapEl) {
          toggleClass(prevSwapEl, options.swapClass, false);
        }
      }
      changed();
      completed(true);
      cancel();
    },
    drop: function drop(_ref3) {
      var activeSortable = _ref3.activeSortable,
        putSortable = _ref3.putSortable,
        dragEl = _ref3.dragEl;
      var toSortable = putSortable || this.sortable;
      var options = this.options;
      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);
      if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
        if (dragEl !== lastSwapEl) {
          toSortable.captureAnimationState();
          if (toSortable !== activeSortable) activeSortable.captureAnimationState();
          swapNodes(dragEl, lastSwapEl);
          toSortable.animateAll();
          if (toSortable !== activeSortable) activeSortable.animateAll();
        }
      }
    },
    nulling: function nulling() {
      lastSwapEl = null;
    }
  };
  return _extends(Swap, {
    pluginName: 'swap',
    eventProperties: function eventProperties() {
      return {
        swapItem: lastSwapEl
      };
    }
  });
}
function swapNodes(n1, n2) {
  var p1 = n1.parentNode,
    p2 = n2.parentNode,
    i1,
    i2;
  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
  i1 = index(n1);
  i2 = index(n2);
  if (p1.isEqualNode(p2) && i1 < i2) {
    i2++;
  }
  p1.insertBefore(n2, p1.children[i1]);
  p2.insertBefore(n1, p2.children[i2]);
}

var multiDragElements = [],
  multiDragClones = [],
  lastMultiDragSelect,
  // for selection with modifier key down (SHIFT)
  multiDragSortable,
  initialFolding = false,
  // Initial multi-drag fold when drag started
  folding = false,
  // Folding any other time
  dragStarted = false,
  dragEl$1,
  clonesFromRect,
  clonesHidden;
function MultiDragPlugin() {
  function MultiDrag(sortable) {
    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
    if (!sortable.options.avoidImplicitDeselect) {
      if (sortable.options.supportPointer) {
        on(document, 'pointerup', this._deselectMultiDrag);
      } else {
        on(document, 'mouseup', this._deselectMultiDrag);
        on(document, 'touchend', this._deselectMultiDrag);
      }
    }
    on(document, 'keydown', this._checkKeyDown);
    on(document, 'keyup', this._checkKeyUp);
    this.defaults = {
      selectedClass: 'sortable-selected',
      multiDragKey: null,
      avoidImplicitDeselect: false,
      setData: function setData(dataTransfer, dragEl) {
        var data = '';
        if (multiDragElements.length && multiDragSortable === sortable) {
          multiDragElements.forEach(function (multiDragElement, i) {
            data += (!i ? '' : ', ') + multiDragElement.textContent;
          });
        } else {
          data = dragEl.textContent;
        }
        dataTransfer.setData('Text', data);
      }
    };
  }
  MultiDrag.prototype = {
    multiDragKeyDown: false,
    isMultiDrag: false,
    delayStartGlobal: function delayStartGlobal(_ref) {
      var dragged = _ref.dragEl;
      dragEl$1 = dragged;
    },
    delayEnded: function delayEnded() {
      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
    },
    setupClone: function setupClone(_ref2) {
      var sortable = _ref2.sortable,
        cancel = _ref2.cancel;
      if (!this.isMultiDrag) return;
      for (var i = 0; i < multiDragElements.length; i++) {
        multiDragClones.push(clone(multiDragElements[i]));
        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
        multiDragClones[i].draggable = false;
        multiDragClones[i].style['will-change'] = '';
        toggleClass(multiDragClones[i], this.options.selectedClass, false);
        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
      }
      sortable._hideClone();
      cancel();
    },
    clone: function clone(_ref3) {
      var sortable = _ref3.sortable,
        rootEl = _ref3.rootEl,
        dispatchSortableEvent = _ref3.dispatchSortableEvent,
        cancel = _ref3.cancel;
      if (!this.isMultiDrag) return;
      if (!this.options.removeCloneOnHide) {
        if (multiDragElements.length && multiDragSortable === sortable) {
          insertMultiDragClones(true, rootEl);
          dispatchSortableEvent('clone');
          cancel();
        }
      }
    },
    showClone: function showClone(_ref4) {
      var cloneNowShown = _ref4.cloneNowShown,
        rootEl = _ref4.rootEl,
        cancel = _ref4.cancel;
      if (!this.isMultiDrag) return;
      insertMultiDragClones(false, rootEl);
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', '');
      });
      cloneNowShown();
      clonesHidden = false;
      cancel();
    },
    hideClone: function hideClone(_ref5) {
      var _this = this;
      var sortable = _ref5.sortable,
        cloneNowHidden = _ref5.cloneNowHidden,
        cancel = _ref5.cancel;
      if (!this.isMultiDrag) return;
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', 'none');
        if (_this.options.removeCloneOnHide && clone.parentNode) {
          clone.parentNode.removeChild(clone);
        }
      });
      cloneNowHidden();
      clonesHidden = true;
      cancel();
    },
    dragStartGlobal: function dragStartGlobal(_ref6) {
      var sortable = _ref6.sortable;
      if (!this.isMultiDrag && multiDragSortable) {
        multiDragSortable.multiDrag._deselectMultiDrag();
      }
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.sortableIndex = index(multiDragElement);
      });

      // Sort multi-drag elements
      multiDragElements = multiDragElements.sort(function (a, b) {
        return a.sortableIndex - b.sortableIndex;
      });
      dragStarted = true;
    },
    dragStarted: function dragStarted(_ref7) {
      var _this2 = this;
      var sortable = _ref7.sortable;
      if (!this.isMultiDrag) return;
      if (this.options.sort) {
        // Capture rects,
        // hide multi drag elements (by positioning them absolute),
        // set multi drag elements rects to dragRect,
        // show multi drag elements,
        // animate to rects,
        // unset rects & remove from DOM

        sortable.captureAnimationState();
        if (this.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            css(multiDragElement, 'position', 'absolute');
          });
          var dragRect = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRect);
          });
          folding = true;
          initialFolding = true;
        }
      }
      sortable.animateAll(function () {
        folding = false;
        initialFolding = false;
        if (_this2.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
        }

        // Remove all auxiliary multidrag items from el, if sorting enabled
        if (_this2.options.sort) {
          removeMultiDragElements();
        }
      });
    },
    dragOver: function dragOver(_ref8) {
      var target = _ref8.target,
        completed = _ref8.completed,
        cancel = _ref8.cancel;
      if (folding && ~multiDragElements.indexOf(target)) {
        completed(false);
        cancel();
      }
    },
    revert: function revert(_ref9) {
      var fromSortable = _ref9.fromSortable,
        rootEl = _ref9.rootEl,
        sortable = _ref9.sortable,
        dragRect = _ref9.dragRect;
      if (multiDragElements.length > 1) {
        // Setup unfold animation
        multiDragElements.forEach(function (multiDragElement) {
          sortable.addAnimationState({
            target: multiDragElement,
            rect: folding ? getRect(multiDragElement) : dragRect
          });
          unsetRect(multiDragElement);
          multiDragElement.fromRect = dragRect;
          fromSortable.removeAnimationState(multiDragElement);
        });
        folding = false;
        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref10) {
      var sortable = _ref10.sortable,
        isOwner = _ref10.isOwner,
        insertion = _ref10.insertion,
        activeSortable = _ref10.activeSortable,
        parentEl = _ref10.parentEl,
        putSortable = _ref10.putSortable;
      var options = this.options;
      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        }
        initialFolding = false;
        // If leaving sort:false root, or already folding - Fold to new location
        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
          // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
          var dragRectAbsolute = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRectAbsolute);

            // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable
            parentEl.appendChild(multiDragElement);
          });
          folding = true;
        }

        // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out
        if (!isOwner) {
          // Only remove if not folding (folding will remove them anyways)
          if (!folding) {
            removeMultiDragElements();
          }
          if (multiDragElements.length > 1) {
            var clonesHiddenBefore = clonesHidden;
            activeSortable._showClone(sortable);

            // Unfold animation for clones if showing from hidden
            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
              multiDragClones.forEach(function (clone) {
                activeSortable.addAnimationState({
                  target: clone,
                  rect: clonesFromRect
                });
                clone.fromRect = clonesFromRect;
                clone.thisAnimationDuration = null;
              });
            }
          } else {
            activeSortable._showClone(sortable);
          }
        }
      }
    },
    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
      var dragRect = _ref11.dragRect,
        isOwner = _ref11.isOwner,
        activeSortable = _ref11.activeSortable;
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.thisAnimationDuration = null;
      });
      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
        clonesFromRect = _extends({}, dragRect);
        var dragMatrix = matrix(dragEl$1, true);
        clonesFromRect.top -= dragMatrix.f;
        clonesFromRect.left -= dragMatrix.e;
      }
    },
    dragOverAnimationComplete: function dragOverAnimationComplete() {
      if (folding) {
        folding = false;
        removeMultiDragElements();
      }
    },
    drop: function drop(_ref12) {
      var evt = _ref12.originalEvent,
        rootEl = _ref12.rootEl,
        parentEl = _ref12.parentEl,
        sortable = _ref12.sortable,
        dispatchSortableEvent = _ref12.dispatchSortableEvent,
        oldIndex = _ref12.oldIndex,
        putSortable = _ref12.putSortable;
      var toSortable = putSortable || this.sortable;
      if (!evt) return;
      var options = this.options,
        children = parentEl.children;

      // Multi-drag selection
      if (!dragStarted) {
        if (options.multiDragKey && !this.multiDragKeyDown) {
          this._deselectMultiDrag();
        }
        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));
        if (!~multiDragElements.indexOf(dragEl$1)) {
          multiDragElements.push(dragEl$1);
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'select',
            targetEl: dragEl$1,
            originalEvent: evt
          });

          // Modifier activated, select from last to dragEl
          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
            var lastIndex = index(lastMultiDragSelect),
              currentIndex = index(dragEl$1);
            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
              (function () {
                // Must include lastMultiDragSelect (select it), in case modified selection from no selection
                // (but previous selection existed)
                var n, i;
                if (currentIndex > lastIndex) {
                  i = lastIndex;
                  n = currentIndex;
                } else {
                  i = currentIndex;
                  n = lastIndex + 1;
                }
                var filter = options.filter;
                for (; i < n; i++) {
                  if (~multiDragElements.indexOf(children[i])) continue;
                  // Check if element is draggable
                  if (!closest(children[i], options.draggable, parentEl, false)) continue;
                  // Check if element is filtered
                  var filtered = filter && (typeof filter === 'function' ? filter.call(sortable, evt, children[i], sortable) : filter.split(',').some(function (criteria) {
                    return closest(children[i], criteria.trim(), parentEl, false);
                  }));
                  if (filtered) continue;
                  toggleClass(children[i], options.selectedClass, true);
                  multiDragElements.push(children[i]);
                  dispatchEvent({
                    sortable: sortable,
                    rootEl: rootEl,
                    name: 'select',
                    targetEl: children[i],
                    originalEvent: evt
                  });
                }
              })();
            }
          } else {
            lastMultiDragSelect = dragEl$1;
          }
          multiDragSortable = toSortable;
        } else {
          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
          lastMultiDragSelect = null;
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'deselect',
            targetEl: dragEl$1,
            originalEvent: evt
          });
        }
      }

      // Multi-drag drop
      if (dragStarted && this.isMultiDrag) {
        folding = false;
        // Do not "unfold" after around dragEl if reverted
        if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
          var dragRect = getRect(dragEl$1),
            multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
          if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
          toSortable.captureAnimationState();
          if (!initialFolding) {
            if (options.animation) {
              dragEl$1.fromRect = dragRect;
              multiDragElements.forEach(function (multiDragElement) {
                multiDragElement.thisAnimationDuration = null;
                if (multiDragElement !== dragEl$1) {
                  var rect = folding ? getRect(multiDragElement) : dragRect;
                  multiDragElement.fromRect = rect;

                  // Prepare unfold animation
                  toSortable.addAnimationState({
                    target: multiDragElement,
                    rect: rect
                  });
                }
              });
            }

            // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
            // properly they must all be removed
            removeMultiDragElements();
            multiDragElements.forEach(function (multiDragElement) {
              if (children[multiDragIndex]) {
                parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
              } else {
                parentEl.appendChild(multiDragElement);
              }
              multiDragIndex++;
            });

            // If initial folding is done, the elements may have changed position because they are now
            // unfolding around dragEl, even though dragEl may not have his index changed, so update event
            // must be fired here as Sortable will not.
            if (oldIndex === index(dragEl$1)) {
              var update = false;
              multiDragElements.forEach(function (multiDragElement) {
                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                  update = true;
                  return;
                }
              });
              if (update) {
                dispatchSortableEvent('update');
                dispatchSortableEvent('sort');
              }
            }
          }

          // Must be done after capturing individual rects (scroll bar)
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
          toSortable.animateAll();
        }
        multiDragSortable = toSortable;
      }

      // Remove clones if necessary
      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        multiDragClones.forEach(function (clone) {
          clone.parentNode && clone.parentNode.removeChild(clone);
        });
      }
    },
    nullingGlobal: function nullingGlobal() {
      this.isMultiDrag = dragStarted = false;
      multiDragClones.length = 0;
    },
    destroyGlobal: function destroyGlobal() {
      this._deselectMultiDrag();
      off(document, 'pointerup', this._deselectMultiDrag);
      off(document, 'mouseup', this._deselectMultiDrag);
      off(document, 'touchend', this._deselectMultiDrag);
      off(document, 'keydown', this._checkKeyDown);
      off(document, 'keyup', this._checkKeyUp);
    },
    _deselectMultiDrag: function _deselectMultiDrag(evt) {
      if (typeof dragStarted !== "undefined" && dragStarted) return;

      // Only deselect if selection is in this sortable
      if (multiDragSortable !== this.sortable) return;

      // Only deselect if target is not item in this sortable
      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return;

      // Only deselect if left click
      if (evt && evt.button !== 0) return;
      while (multiDragElements.length) {
        var el = multiDragElements[0];
        toggleClass(el, this.options.selectedClass, false);
        multiDragElements.shift();
        dispatchEvent({
          sortable: this.sortable,
          rootEl: this.sortable.el,
          name: 'deselect',
          targetEl: el,
          originalEvent: evt
        });
      }
    },
    _checkKeyDown: function _checkKeyDown(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = true;
      }
    },
    _checkKeyUp: function _checkKeyUp(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = false;
      }
    }
  };
  return _extends(MultiDrag, {
    // Static methods & properties
    pluginName: 'multiDrag',
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function select(el) {
        var sortable = el.parentNode[expando];
        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;
        if (multiDragSortable && multiDragSortable !== sortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();
          multiDragSortable = sortable;
        }
        toggleClass(el, sortable.options.selectedClass, true);
        multiDragElements.push(el);
      },
      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function deselect(el) {
        var sortable = el.parentNode[expando],
          index = multiDragElements.indexOf(el);
        if (!sortable || !sortable.options.multiDrag || !~index) return;
        toggleClass(el, sortable.options.selectedClass, false);
        multiDragElements.splice(index, 1);
      }
    },
    eventProperties: function eventProperties() {
      var _this3 = this;
      var oldIndicies = [],
        newIndicies = [];
      multiDragElements.forEach(function (multiDragElement) {
        oldIndicies.push({
          multiDragElement: multiDragElement,
          index: multiDragElement.sortableIndex
        });

        // multiDragElements will already be sorted if folding
        var newIndex;
        if (folding && multiDragElement !== dragEl$1) {
          newIndex = -1;
        } else if (folding) {
          newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
        } else {
          newIndex = index(multiDragElement);
        }
        newIndicies.push({
          multiDragElement: multiDragElement,
          index: newIndex
        });
      });
      return {
        items: _toConsumableArray(multiDragElements),
        clones: [].concat(multiDragClones),
        oldIndicies: oldIndicies,
        newIndicies: newIndicies
      };
    },
    optionListeners: {
      multiDragKey: function multiDragKey(key) {
        key = key.toLowerCase();
        if (key === 'ctrl') {
          key = 'Control';
        } else if (key.length > 1) {
          key = key.charAt(0).toUpperCase() + key.substr(1);
        }
        return key;
      }
    }
  });
}
function insertMultiDragElements(clonesInserted, rootEl) {
  multiDragElements.forEach(function (multiDragElement, i) {
    var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];
    if (target) {
      rootEl.insertBefore(multiDragElement, target);
    } else {
      rootEl.appendChild(multiDragElement);
    }
  });
}

/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */
function insertMultiDragClones(elementsInserted, rootEl) {
  multiDragClones.forEach(function (clone, i) {
    var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];
    if (target) {
      rootEl.insertBefore(clone, target);
    } else {
      rootEl.appendChild(clone);
    }
  });
}
function removeMultiDragElements() {
  multiDragElements.forEach(function (multiDragElement) {
    if (multiDragElement === dragEl$1) return;
    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sortable);



/***/ },

/***/ "./srcjs/modules/hoverselect/hoverselect.js"
/*!**************************************************!*\
  !*** ./srcjs/modules/hoverselect/hoverselect.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HoverSelect)
/* harmony export */ });
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./srcjs/modules/hoverselect/css/style.css");
/** Import dependencies */
// styling


/** Class representing a hover select. */
class HoverSelect {

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


/***/ },

/***/ "./srcjs/modules/smartslider/smartslider.js"
/*!**************************************************!*\
  !*** ./srcjs/modules/smartslider/smartslider.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SmartSlider)
/* harmony export */ });
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.mjs");
/* harmony import */ var nouislider_dist_nouislider_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nouislider/dist/nouislider.css */ "./node_modules/nouislider/dist/nouislider.css");
/* harmony import */ var _utils_misc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/misc.js */ "./srcjs/modules/utils/misc.js");
/** Import dependencies */
// noUiSlider module


// utility functions


/** Class representing a smart slider. */
class SmartSlider {

  // public fields

  /**
   * noUiSlider object.
   * @type {object}
   */
  noUiSlider;

  // private fields

  /**
   * Initial values.
   * @type {number}
   */
  _initial;

  /**
   * Previous values.
   * @type {number}
   */
  _previous;

  /**
  * Construct a new SmartSlider object.
  * @param {HTMLElement} element - HTML element for slider.
  * @param {object} sliderOptions - Configuration settings for noUiSlider.
  * @param {object} labelOptions - Configuration settings for labels.
  * @param {NodeList<HTMLElement>} labelOptions.labels - HTML elements for
  * for labels. Note that there must be an element for each slider handle.
  * @param {function} labelOptions.format - Function for formatting labels. This
  * must have parameters for `labels` and `values`.
  * @return {void}
  */
  constructor(element, sliderOptions, labelOptions) {
    // initialize fields
    nouislider__WEBPACK_IMPORTED_MODULE_0__["default"].create(element, sliderOptions);
    this.noUiSlider = element.noUiSlider;
    this._initial = (0,_utils_misc_js__WEBPACK_IMPORTED_MODULE_2__.toArray)(this.noUiSlider.get(true));
    this._previous = this._initial.slice();
    this._labels = labelOptions.labels;
    this._formatter = labelOptions.format || ((labels, values) => {});
    // attach this object to the element
    element.smartSlider = this;
    // update labels on slider update
    this.noUiSlider.on("update", (values, handle) => {
      this._formatter(this._labels, values);
    });
  }

  /**
   * Get values.
   * @return {Array<number>}
   */
  get() {
    return (0,_utils_misc_js__WEBPACK_IMPORTED_MODULE_2__.toArray)(this.noUiSlider.get(true));
  }

  /**
   * Enable widget.
   * @return {void}
   */
  enable() {
    this.noUiSlider.set(this._previous);
    this.noUiSlider.enable();
    this._labels.forEach(x => x.removeAttribute("disabled"));
  }

  /**
   * Disable widget.
   * @return {void}
   */
  disable() {
    this._previous = (0,_utils_misc_js__WEBPACK_IMPORTED_MODULE_2__.toArray)(this.noUiSlider.get(true)).slice();
    this.noUiSlider.set(new Array(this._initial.length).fill(0));
    this.noUiSlider.disable();
    this._labels.forEach(x => x.setAttribute("disabled", ""));
  }

  /**
   * Reset widget to initial state.
   * @return {void}
   */
  reset() {
    this.noUiSlider.set(this._initial);
  }

  /**
   * Enable handle for widget.
   * @param {number} index - Index for handle.
   * @return {void}
   */
  enableHandle(index) {
    this.noUiSlider.setHandle(index, this._previous[index]);
    this.noUiSlider.enable(index);
    this._labels[index].removeAttribute("disabled");
  }

  /**
   * Disable handle for widget.
   * @param {number} index - Index for handle.
   * @return {void}
   */
  disableHandle(index) {
    this._previous[index] = (0,_utils_misc_js__WEBPACK_IMPORTED_MODULE_2__.toArray)(this.noUiSlider.get(true))[index];
    this.noUiSlider.setHandle(index, 0);
    this.noUiSlider.disable(index);
    this._labels[index].setAttribute("disabled", "");
  }

  /**
   * Reset handle for widget.
   * @param {number} index - Index for handle.
   * @return {void}
   */
  resetHandle(index) {
    this.noUiSlider.setHandle(index, this._initial[index]);
  }

}


/***/ },

/***/ "./srcjs/modules/solver/cost-setting-class.js"
/*!****************************************************!*\
  !*** ./srcjs/modules/solver/cost-setting-class.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CostSetting: () => (/* binding */ CostSetting)
/* harmony export */ });
/* harmony import */ var _smartslider_smartslider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../smartslider/smartslider.js */ "./srcjs/modules/smartslider/smartslider.js");
/* harmony import */ var _hoverselect_hoverselect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hoverselect/hoverselect.js */ "./srcjs/modules/hoverselect/hoverselect.js");
/* harmony import */ var _cost_setting_scaffold_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cost-setting-scaffold.js */ "./srcjs/modules/solver/cost-setting-scaffold.js");
/* harmony import */ var _css_setting_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/setting.css */ "./srcjs/modules/solver/css/setting.css");
/* harmony import */ var _css_cost_setting_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/cost-setting.css */ "./srcjs/modules/solver/css/cost-setting.css");
/** Import dependencies */
// classes to create components


// functions to create elements

// styling



/** Class representing the setting for a single cost. */
class CostSetting {

  // public fields

  /**
   * Cost identifier.
   * @type {string}
   */
  id;

  /**
   * Cost name.
   * @type {string}
   */
  name;

  /**
   * Cost column.
   * @type {string}
   */
  column;

  /**
   * HTML element.
   * @type {HTMLElement}
   */
  element;

  // private fields

  /**
   * Slider range.
   * @type {object}
   */
  _sliderRange;

  /**
   * Slider step.
   * @type {number}
   */
  _sliderStep;

  // private HTML fields

  /**
   * Hover select element.
   * @type {HTMLElement}
   */
  _select;

  /**
   * noUiSlider element.
   * @type {HTMLElement}
   */
  _slider;

  /**
   * Switch element.
   * @type {HTMLElement}
   */
  _switch;

  /**
  * Construct a new CostSetting object.
 * @param {Object} cost - Cost object.
 * @param {string} cost.id - Unique identifier.
 * @param {string} cost.name - Name.
 * @param {string} cost.weight - Weight value.
 * @param {string} cost.layer.column - Column with data.
 * @param {Array<string>} zones - Array of zone names.
 * @param {Array<number>} costWeightChoices - Array of numbers used to
 * define the potential values for setting cost weights.
  * @return {void}
  */
  constructor(cost, zones, costWeightChoices) {
    // initialize public fields
    this.id = cost.id;
    this.name = cost.name;
    this.column = cost.layer.column;
    this.element = (0,_cost_setting_scaffold_js__WEBPACK_IMPORTED_MODULE_2__.scaffoldCostSetting)(cost, zones, costWeightChoices);
    // initialize private fields
    this._sliderRange = {
      "min": costWeightChoices[0],
      "max": costWeightChoices[1]
    };
    this._sliderStep = costWeightChoices[2];
    // initialize private HTML fields
    this._select = this.element.querySelector(".zone-status");
    this._slider = this.element.querySelector(".weight-slider");
    this._switch = this.element.querySelector(".switch");
    // initialize select widget
    new _hoverselect_hoverselect_js__WEBPACK_IMPORTED_MODULE_1__["default"](this._select, {
      selected: cost.zone,
      options: zones.map(x => {
        return {
          value: x,
          text: x,
          color: `var(--zone-${x}-primary`
        }
      }),
      disabledOption: {value: "", text: "Off", color: "var(--disabled)"}
    });
    // initialize slider widget
    new _smartslider_smartslider_js__WEBPACK_IMPORTED_MODULE_0__["default"](
      this._slider,
      {
        range: this._sliderRange,
        step: this._sliderStep,
        behaviour: "drag",
        connect: "lower",
        start: cost.weight
      },
      {
        labels: this.element.querySelectorAll(".weight-label"),
        format: (labels, values) => {
          labels[0].innerText = `Weight: ${Math.round(values[0] * 100)}%`;
        }
      }
    );
  }

  /**
  * Append the HTML element for the class to another HTML element.
  * @param {HTMLElement} element - HTML element.
  * @return {void}
  */
  appendTo(element) {
    // set event handler for toggle
    this._switch.addEventListener("change", (event) => {
      if (event.target.checked) {
        this.enable();
      } else {
        this.disable();
      }
    });
    // append to element
    element.appendChild(this.element);
  }

  /**
   * Get zone.
   * @return {string}
   */
  get zone() {
    return this._select.hoverSelect.get();
  }

  /**
   * Get weight
   * @return {number}
   */
  get weight() {
    return this._slider.smartSlider.get()[0];
  }

  /**
   * Enable widget
   * @return {void}
   */
  enable() {
    this._slider.smartSlider.enable();
    this._select.hoverSelect.enable();
    this._switch.checked = true;
  }

  /**
   * Disable widget.
   * @return {void}
   */
  disable() {
    this._slider.smartSlider.disable();
    this._select.hoverSelect.disable();
    this._switch.checked = false;
  }

}


/***/ },

/***/ "./srcjs/modules/solver/cost-setting-scaffold.js"
/*!*******************************************************!*\
  !*** ./srcjs/modules/solver/cost-setting-scaffold.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scaffoldCostSetting: () => (/* binding */ scaffoldCostSetting)
/* harmony export */ });
/* harmony import */ var _utils_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/element.js */ "./srcjs/modules/utils/element.js");
/** Import dependencies */
// functions to create elements





/**
 * Create a cost setting.
 * @param {Object} cost - Cost object.
 * @param {string} cost.name - Feature name.
 * @param {string} cost.zone - Zone name.
 * @param {number} cost.weight - Weight value.
 * @param {Array<string>} zones - Zone names.
 * @param {Array<number>} costWeightChoices - Array of choices for cost weights.
 * @return {HTMLElement}
 */
function scaffoldCostSetting(cost, zones, costWeightChoices) {
  // create element
  let el = document.createElement("div");
  el.classList.add("cost-setting", "setting");
  // set data id attribute for feature id
  el.setAttribute("data-id", cost.id);
  // create feature setting header
  el.appendChild(costSettingHeader(cost, zones));
  // create feature setting weights
  el.appendChild(costSettingBody(cost, zones, costWeightChoices));
  // return element
  return el;
}

/**
 * Create a header component for a cost setting.
 * @param {Object} cost - Cost object.
 * @param {string} cost.name - Feature name.
 * @param {string} cost.zone - Zone name.
 * @param {number} cost.weight - Weight value.
 * @param {Array<string>} zones - Zone names.
 * @return {HTMLElement}
 */
function costSettingHeader(cost, zones) {
  // create container
  let el = document.createElement("div");
  el.classList.add("cost-header", "header");
  // create container for switch
  let switchElement = (0,_utils_element_js__WEBPACK_IMPORTED_MODULE_0__.createSwitches)(1);
  // create name element
  let nameElement = (0,_utils_element_js__WEBPACK_IMPORTED_MODULE_0__.createNameLabel)(cost);
  // create provenance element
  let provenanceElement = (0,_utils_element_js__WEBPACK_IMPORTED_MODULE_0__.createProvenance)(cost.layer.provenance);
  // append elements
  el.appendChild(switchElement);
  el.appendChild(nameElement);
  el.appendChild(provenanceElement);
  // return element
  return el;
}

/**
 * Create a body component for a cost setting.
 * @param {Object} cost - Cost object.
 * @param {string} cost.name - Feature name.
 * @param {string} cost.zone - Zone name.
 * @param {number} cost.weight - Weight value.
 * @param {Array<string>} zones - Zone names.
 * @param {Array<number>} costWeightChoices - Array of choices for cost weights.
 * @return {HTMLElement}
 */
function costSettingBody(cost, zones, choices) {
  // initialize element
  let el = document.createElement("div")
  el.classList.add("cost-body");
  // create label weight value
  let label = document.createElement("label");
  label.classList.add("weight-label");
  (0,_utils_element_js__WEBPACK_IMPORTED_MODULE_0__.addTooltip)(label, "Weight value for cost");
  // create element for hover select
  let select = document.createElement("div");
  select.classList.add("zone-status");
  (0,_utils_element_js__WEBPACK_IMPORTED_MODULE_0__.addTooltip)(
    select,
    "Specify which zone that solutions should prefer to allocate " +
    "planning units to when considering this cost."
  );
  // create slider element
  let slider = document.createElement("div");
  slider.classList.add("weight-slider");
  // return element
  el.appendChild(label);
  el.appendChild(slider);
  el.appendChild(select);
  return el;
}


/***/ },

/***/ "./srcjs/modules/solver/cost-settings-class.js"
/*!*****************************************************!*\
  !*** ./srcjs/modules/solver/cost-settings-class.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CostSettings: () => (/* binding */ CostSettings)
/* harmony export */ });
/* harmony import */ var _cost_setting_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cost-setting-class.js */ "./srcjs/modules/solver/cost-setting-class.js");
/* harmony import */ var _css_settings_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/settings.css */ "./srcjs/modules/solver/css/settings.css");
/** Import dependencies */
// classes to create components

// styling


/** Class representing the settings for multiple cost. */
class CostSettings {

  // private fields

  /**
   * Array of settings.
   * @type {Array<CostSettings>}
   */
  _settings = [];

  /**
  * Construct a new CostSettings object.
  * @param {Object} project - Object with various types of objects.
  * @param {Array<Object>} project.costs - Array of feature objects.
  * @param {Array<number>} costWeightChoices - Array of numbers used to
  * define the potential values for setting cost weights.
  * @return {void}
  */
  constructor(project, costWeightChoices) {
    // create cost setting objects
    for (let i = 0; i < project.costs.length; ++i) {
      this._settings.push(
        new _cost_setting_class_js__WEBPACK_IMPORTED_MODULE_0__.CostSetting(project.costs[i], project.zones, costWeightChoices)
      );
    }
  }

  /**
  * Append the HTML element for the class to another HTML element.
  * @param {HTMLElement} element - HTML element.
  * @return {void}
  */
  appendTo(element) {
    // create container
    let el = document.createElement("el");
    el.classList.add("cost-settings", "settings");
    // create menu element
    let menuElement = document.createElement("div");
    menuElement.classList.add("cost-menu");
    // create cost objects and add them to the menu
    for (let i = 0; i < this._settings.length; ++i) {
      this._settings[i].appendTo(menuElement);
    }
    // append elements to container
    el.appendChild(menuElement);
    element.appendChild(el);
  }

  /**
  * Get settings for generating a solution.
  * @return {Object}
  */
  getSettings() {
    return {
      id: this._settings.map(x => x.id),
      name: this._settings.map(x => x.name),
      column: this._settings.map(x => x.column),
      zone: this._settings.map(x => x.zone),
      weight: this._settings.map(x => x.weight)
    };
  }

}


/***/ },

/***/ "./srcjs/modules/solver/feature-setting-class.js"
/*!*******************************************************!*\
  !*** ./srcjs/modules/solver/feature-setting-class.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureSetting: () => (/* binding */ FeatureSetting)
/* harmony export */ });
/* harmony import */ var _smartslider_smartslider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../smartslider/smartslider.js */ "./srcjs/modules/smartslider/smartslider.js");
/* harmony import */ var _hoverselect_hoverselect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hoverselect/hoverselect.js */ "./srcjs/modules/hoverselect/hoverselect.js");
/* harmony import */ var _statusbar_statusbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../statusbar/statusbar.js */ "./srcjs/modules/statusbar/statusbar.js");
/* harmony import */ var _feature_setting_scaffold_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feature-setting-scaffold.js */ "./srcjs/modules/solver/feature-setting-scaffold.js");
/* harmony import */ var _utils_element_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/element.js */ "./srcjs/modules/utils/element.js");
/* harmony import */ var _css_setting_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/setting.css */ "./srcjs/modules/solver/css/setting.css");
/* harmony import */ var _css_feature_setting_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/feature-setting.css */ "./srcjs/modules/solver/css/feature-setting.css");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/math.js */ "./srcjs/modules/utils/math.js");
/** Import dependencies */
// classes to create components



// functions to create elements





// styling


// utility functions




/** Class representing the setting for a single feature. */
class FeatureSetting {

  // public fields

  /**
   * Feature identifier.
   * @type {string}
   */
  id;

  /**
   * Feature name.
   * @type {string}
   */
  name;

  /**
   * Feature column.
   * @type {string}
   */
  column;

  /**
  * HTML element.
  * @type {HTMLElement}
  */
  element;

  // private fields

  /**
   * Array of zone names.
   * @type {Array<string>}
   */
  _zones;

  /**
   * Slider element.
   * @type {HTMLElement}
   */
  _slider;

  /**
   * Status bar element.
   * @type {HTMLElement}
   */
  _status;

  /**
   * List of hover select elements.
   * @type {NodeList<HTMLElement>}
   */
  _selects;

  /**
   * List of switch elements.
   * @type {NodeList<HTMLElement>}
   */
  _selects;

  /**
   * Slider range.
   * @type {object}
   */
  _sliderRange;

  /**
   * Slider step.
   * @type {number}
   */
  _sliderStep;

  /**
  * Construct a new FeatureSetting object.
 * @param {Object} feature - Feature object.
 * @param {string} feature.id - Unique identifier.
 * @param {string} feature.name - Name.
 * @param {string} feature.layer.column - Column with data.
 * @param {Array<number>} feature.zone_targets - Initial target values.
 * @param {Array<number>} feature.zone_weights - Initial weights values.
 * @param {Array<string>} zones - Array of zone names.
 * @param {Array<number>} featureTargetChoices - Array of numbers used to
 * define the potential values for setting feature targets.
 * @param {Array<number>} featureWeightChoices - Array of numbers used to
 * define the potential values for setting feature weights.
  * @return {void}
  */
  constructor(
    feature, zones, featureTargetChoices, featureWeightChoices
  ) {
    // initialize public fields
    this.id = feature.id;
    this.name = feature.name;
    this.column = feature.layer.column;
    this.element = (0,_feature_setting_scaffold_js__WEBPACK_IMPORTED_MODULE_3__.scaffoldFeatureSetting)(
      feature, zones, featureTargetChoices, featureWeightChoices
    );
    // initialize private fields
    this._zones = zones;
    this._sliderRange = {
      "min": featureTargetChoices[0],
      "max": featureTargetChoices[1]
    };
    this._sliderStep = featureTargetChoices[2];
    // initialize private HTML fields
    this._slider = this.element.querySelector(".target-slider");
    this._status = this.element.querySelector(".status-bar");
    this._switches = this.element.querySelectorAll(".switch");
    this._selects = this.element.querySelectorAll(".weight-status");
    // initialize slider widget
    new _smartslider_smartslider_js__WEBPACK_IMPORTED_MODULE_0__["default"](
      this._slider,
      {
        range: this._sliderRange,
        step: this._sliderStep,
        behaviour: "unconstrained-drag",
        connect:
          new Array(zones.length + 1).fill(true).with(zones.length, false),
        start: (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_7__.convertTargetsToSliderValues)(feature.zone_targets)
      },
      {
        labels: this.element.querySelectorAll(".target-label"),
        format: (labels, values) => {
          // update target labels
          let v = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_7__.convertSliderValuesToTargets)(values);
          for (let i = 0; i < v.length; ++i) {
            labels[i].innerText = `Target: ${Math.round(v[i] * 100)}%`;
          }
        }
      }
    );
    // set update handler to recolor connect elements of the slider
    let connects = this._slider.querySelectorAll(".noUi-connect");
    this._slider.noUiSlider.on("update", (values, handle) => {
      // run calculations
      let v = values.map(Number);
      let o = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_7__.order)(v);
      // update connect elements
      for (let i = 0; i < v.length; ++i) {
        connects[i].style.background = `var(--zone-${zones[o[i]]}-primary)`;
        connects[i].style.transform = `translate(0%, 0px) scale(${v[o[i]]}, 1)`;
        connects[i].style["z-index"] = v.length - i;
      }
    });
    // color the handles
    let handles = this._slider.querySelectorAll(".noUi-handle");
    for (let i = 0; i < this._zones.length; ++i) {
      handles[i].style.background = `var(--zone-${this._zones[i]}-primary)`;
    }
    // initialize select widgets
    for (let i = 0; i < this._zones.length; ++i) {
      new _hoverselect_hoverselect_js__WEBPACK_IMPORTED_MODULE_1__["default"](this._selects[i], {
        selected: String(feature.zone_weights[i]),
        options: featureWeightChoices.map(x => {
          return {
            value: String(x),
            text: `Weight: ${x * 100}%`,
            color: `var(--zone-${zones[i]}-primary`
          }
        }),
        disabledOption: {
          value: "0", text: `Weight: 0%`, color: "var(--disabled)"
        }
      });
    }
    // initialize status bar widget
    new _statusbar_statusbar_js__WEBPACK_IMPORTED_MODULE_2__["default"](this._status, {
      values: feature.zone_helds,
      colors: this._zones.map(x => `var(--zone-${x}-secondary)`),
      labels: this.element.querySelectorAll(".held-label"),
      format: (labels, values) => {
        for (let i = 0; i < labels.length; ++i) {
          labels[i].innerText = `Lock: ${Math.round(values[i] * 100)}%`;
        }
      }
    });
    // set event handlers for switches
    for (let i = 0; i < zones.length; ++i) {
      this._switches[i].addEventListener("change", (event) => {
        if (event.target.checked) {
          this._slider.smartSlider.enableHandle(i);
          this._selects[i].hoverSelect.enable();
        } else {
          this._slider.smartSlider.disableHandle(i);
          this._selects[i].hoverSelect.disable();
        }
      });
    }
  }

  /**
  * Append the HTML element for the class to another HTML element.
  * @param {HTMLElement} element - HTML element.
  * @return {void}
  */
  appendTo(element) {
    // append to element
    element.appendChild(this.element);
  }

  /**
   * Target values for each zone.
   * @type {number}
   */
  get targets() {
    return (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_7__.convertSliderValuesToTargets)(this._slider.smartSlider.get());
  };

  /**
   * Weight values for each zone.
   * @type {number}
   */
  get weights() {
    return Array.from(this._selects, x => Number(x.hoverSelect.get()));
  };

  /**
  * Set amount held for each feature.
  * @param {Array<number>} - New held values.
  * @return {void}
  */
  setHeldStatus(values) {
    this._status.statusBar.set(values);
  }

  /**
  * Increment the target for a zone.
  * @param {string} zone - Zone name.
  * @return {void}
  */
  incrementZoneTarget(zone) {
    let i = this._zones.indexOf(zone);
    // TODO
  }

  /**
  * Decrement the target for a zone.
  * @param {string} zone - Zone name.
  * @return {void}
  */
  decrementZoneTarget(zone) {
    let i = this._zones.indexOf(zone);
    // TODO
  }

  /**
  * Increment the weight for a zone.
  * @param {string} zone - Zone name.
  * @return {void}
  */
  incrementZoneWeight(zone) {
    let i = this._zones.indexOf(zone);
    // TODO
  }

  /**
  * Decrement the weight for a zone.
  * @param {string} zone - Zone name.
  * @return {void}
  */
  decrementZoneWeight(zone) {
    let i = this._zones.indexOf(zone);
    // TODO
  }

}


/***/ },

/***/ "./srcjs/modules/solver/feature-setting-scaffold.js"
/*!**********************************************************!*\
  !*** ./srcjs/modules/solver/feature-setting-scaffold.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scaffoldFeatureSetting: () => (/* binding */ scaffoldFeatureSetting)
/* harmony export */ });
/* harmony import */ var _utils_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/element.js */ "./srcjs/modules/utils/element.js");
/** Import dependencies */
// functions to create elements





/**
 * Scaffold a feature setting element
 * @param {Object} feature - Feature object.
 * @param {string} feature.name - Feature object.
 * @param {Object} feature.layer - Layer object.
 * @param {Array<number>} feature.zone_targets - Initial target values.
 * @param {Array<number>} feature.zone_weights - Initial weights values.
 * @param {Array<Object>} feature.themes - Array of theme object.s
 * @param {string} feature.id - Unique identifier for feature.
 * @param {Array<string>} zones - Array of zone names.
 * @param {Array<number>} featureTargetChoices - Array of numbers used to
 * define the potential values for setting feature targets.
 * @param {Array<number>} featureWeightChoices - Array of numbers used to
 * define the potential values for setting feature weights.
 * @return {HTMLElement}
 */
function scaffoldFeatureSetting(
 feature, zones, featureTargetChoices, featureWeightChoices
) {
  // create element
  let el = document.createElement("div");
  el.classList.add("feature-setting", "setting", "hidden-setting");
  // set data id attribute for feature id
  el.setAttribute("data-id", feature.id);
  // create feature setting header
  el.appendChild(featureSettingHeader(feature, zones));
  // create feature setting statuses and weight buttons
  el.appendChild(featureSettingStatuses(feature, zones, featureWeightChoices));
  // create feature setting targets
  el.appendChild(featureSettingTargets(feature, zones, featureTargetChoices));
  // return element
  return el;
}

/**
 * Create a header component for a feature setting
 * @param {Object} feature - Feature object.
 * @param {string} feature.name - Feature object.
 * @param {string} feature.id - Unique identifier for feature.
 * @param {Array<string>} zones - Array of zone names.
 * @return {HTMLElement}
 */
function featureSettingHeader(feature, zones) {
  // create container
  let el = document.createElement("div");
  el.classList.add("feature-header", "header");
  // create switches for each zone
  let switchContainer = (0,_utils_element_js__WEBPACK_IMPORTED_MODULE_0__.createSwitches)(zones.length);
  for (let i = 0; i < zones.length; ++i) {
    switchContainer.children[i].style.setProperty(
      "--switch-primary",
      `var(--zone-${zones[i]}-primary)`
    );
  }
  // create name element
  let nameElement = (0,_utils_element_js__WEBPACK_IMPORTED_MODULE_0__.createNameLabel)(feature);
  // create provenance element
  let provenanceElement = (0,_utils_element_js__WEBPACK_IMPORTED_MODULE_0__.createProvenance)(feature.layer.provenance);
  // append elements
  el.appendChild(switchContainer);
  el.appendChild(nameElement);
  el.appendChild(provenanceElement);
  // return element
  return el;
}

/**
 * Create a statuses component for a feature setting
 * @param {Object} feature - Feature object.
 * @param {string} feature.name - Feature object.
 * @param {string} feature.id - Unique identifier for feature.
 * @param {Array<string>} zones - Array of zone names.
 * @param {Array<Number>} choices - Array of numbers for weight choices.
 * @return {HTMLElement}
 */
function featureSettingStatuses(feature, zones, choices) {
  // initialize element
  let el = document.createElement("div");
  el.classList.add("statuses");
  // create container to show zone statuses
  for (let i = 0; i < zones.length; ++i) {
    // create container for held status
    let heldStatus = document.createElement("div");
    heldStatus.classList.add("held-status");
    // create icon to show held status
    let heldStatusIcon = document.createElement("div");
    heldStatusIcon.classList.add("held-symbol");
    heldStatusIcon.style.backgroundColor = `var(--zone-${zones[i]}-secondary)`;
    heldStatusIcon.style.color = `var(--zone-${zones[i]}-secondary)`;
    // create label to show held status
    let heldStatusLabel = document.createElement("label");
    heldStatusLabel.setAttribute("data-zone", zones[i]);
    heldStatusLabel.classList.add("held-label");
    (0,_utils_element_js__WEBPACK_IMPORTED_MODULE_0__.addTooltip)(
      heldStatusLabel,
      `Coverage by Locks for the ${zones[i]} zone`
    );
    // create container for target status
    let targetStatus = document.createElement("div");
    targetStatus.classList.add("target-status");
    targetStatus.setAttribute("data-target", 0);
    // create icon to show held status
    let targetStatusIcon = document.createElement("div");
    targetStatusIcon.classList.add("target-symbol");
    targetStatusIcon.style.backgroundColor =
      `var(--zone-${zones[i]}-primary)`;
    targetStatusIcon.style.color =
      `var(--zone-${zones[i]}-primary)`;
    // create label to show target status
    let targetStatusLabel = document.createElement("label");
    targetStatusLabel.classList.add("target-label");
    targetStatusLabel.setAttribute("data-zone", zones[i]);
    targetStatusLabel.innerText =
      `Target: ${Math.round(feature.zone_targets[i] * 100)}%`;
    (0,_utils_element_js__WEBPACK_IMPORTED_MODULE_0__.addTooltip)(
      targetStatusLabel,
      `Target for the ${zones[i]} zone to generate solutions`
    );
    // create container for weight status
    let weightStatus = document.createElement("div");
    weightStatus.classList.add("weight-status");
    (0,_utils_element_js__WEBPACK_IMPORTED_MODULE_0__.addTooltip)(
      weightStatus,
      `Weight for the ${zones[i]} zone to generate solutions`
    );
    // assemble containers
    heldStatus.appendChild(heldStatusIcon);
    heldStatus.appendChild(heldStatusLabel);
    targetStatus.appendChild(targetStatusIcon);
    targetStatus.appendChild(targetStatusLabel);
    el.appendChild(heldStatus);
    el.appendChild(targetStatus);
    el.appendChild(weightStatus);
  }
  // return element
  return el;
}

/**
 * Create a targets component for a feature setting
 * @param {Object} feature - Feature object.
 * @param {string} feature.name - Feature object.
 * @param {string} feature.id - Unique identifier for feature.
 * @param {Array<string>} zones - Array of zone names.
 * @param {Array<Number>} choices - Array of numbers for target choices.
 * @return {HTMLElement}
 */
function featureSettingTargets(feature, zones, choices) {
  // initialize element
  let el = document.createElement("div");
  el.classList.add("targets");
  (0,_utils_element_js__WEBPACK_IMPORTED_MODULE_0__.addTooltip)(el, "Set targets to generate solutions");
  // create body container
  let targetsBody = document.createElement("div");
  targetsBody.classList.add("targets-body");
  // create status bar container
  let status = document.createElement("div");
  status.classList.add("status-bar");
  // create slider container
  let slider = document.createElement("div");
  slider.classList.add("target-slider");
  // return element
  targetsBody.appendChild(status);
  targetsBody.appendChild(slider);
  el.appendChild(targetsBody);
  return el;
}


/***/ },

/***/ "./srcjs/modules/solver/feature-settings-class.js"
/*!********************************************************!*\
  !*** ./srcjs/modules/solver/feature-settings-class.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureSettings: () => (/* binding */ FeatureSettings)
/* harmony export */ });
/* harmony import */ var _css_tom_select_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/tom-select.css */ "./srcjs/modules/solver/css/tom-select.css");
/* harmony import */ var tom_select_dist_css_tom_select_bootstrap5_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tom-select/dist/css/tom-select.bootstrap5.css */ "./node_modules/tom-select/dist/css/tom-select.bootstrap5.css");
/* harmony import */ var tom_select_dist_js_tom_select_complete_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tom-select/dist/js/tom-select.complete.min.js */ "./node_modules/tom-select/dist/js/tom-select.complete.min.js");
/* harmony import */ var tom_select_dist_js_tom_select_complete_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tom_select_dist_js_tom_select_complete_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _feature_setting_class_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feature-setting-class.js */ "./srcjs/modules/solver/feature-setting-class.js");
/* harmony import */ var _css_settings_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/settings.css */ "./srcjs/modules/solver/css/settings.css");
/** Import dependencies */
// Tom Select module



// classes to create components

// styling


/** Class representing the settings for multiple features. */
class FeatureSettings {

  // private fields

  /**
   * Array of zone names.
   * @type {Array<string>}
   */
  _zones;

  /**
   * Map of settings.
   * @type {Map<FeatureSettings>}
   */
  _settings = new Map();

  /**
   * Object used to temporarily store settings for select menu.
   * @type {Object}
   */
  _cache;

  /**
  * Construct a new FeatureSettings object.
  * @param {Object} project - Object with various types of objects.
  * @param {Array<Object>} project.features - Array of feature objects.
  * @param {Array<number>} featureTargetChoices - Array of numbers used to
  * define the potential values for setting feature targets.
  * @param {Array<number>} featureWeightChoices - Array of numbers used to
  * define the potential values for setting feature weights.
  * @return {void}
  */
  constructor(project, featureTargetChoices, featureWeightChoices) {
    // initialize fields
    this._zones = project.zones;
    // create feature setting objects
    for (let i = 0; i < project.features.length; ++i) {
      this._settings.set(
        project.features[i].id,
        new _feature_setting_class_js__WEBPACK_IMPORTED_MODULE_3__.FeatureSetting(
          project.features[i], project.zones,
          featureTargetChoices, featureWeightChoices
        )
      );
    }
    // create parameters for select menu
    let features = [];
    let themes = new Set;
    for (let i = 0; i < project.features.length; ++i) {
      features.push({
        value: project.features[i].id,
        name: project.features[i].name,
        zone: project.features[i].themes.map(x => x.zone)
      });
      for (let j = 0; j < project.features[i].themes.length; ++j) {
        themes.add(project.features[i].themes[j].zone);
      }
    }
    // cache parameters for select menu
    this._cache = {
      options: features,
      optgroups: Array.from(themes).map(x => {return {value: x}})
    };
  }

  /**
  * Append the HTML element for the class to another HTML element.
  * @param {HTMLElement} element - HTML element.
  * @return {void}
  */
  appendTo(element) {
    // create container
    let el = document.createElement("div");
    el.classList.add("feature-settings", "settings");
    // create menu element
    let menuElement = document.createElement("div");
    menuElement.classList.add("feature-menu");
    // create feature setting objects and add them to the menu
    this._settings.forEach(x => x.appendTo(menuElement));
    // create select menu
    let selectElement = document.createElement("input");
    selectElement.setAttribute("multiple", "");
    selectElement.setAttribute("placeholder", "Choose features...");
    // append elements to container
    el.appendChild(selectElement);
    el.appendChild(menuElement);
    element.appendChild(el);
    // initialize select menu
    new (tom_select_dist_js_tom_select_complete_min_js__WEBPACK_IMPORTED_MODULE_2___default())(selectElement, {
      options: this._cache.options,
      create: false,
      dropdownParent: "body",
      labelField: "name",
      searchField: ["name"],
      maxItems: null,
      sortField: "name",
      plugins: ["checkbox_options"],
      closeAfterSelect: false,
      optgroups: this._cache.optgroups,
      optgroupField: "zone",
      render: {
        optgroup_header: function(data, escape) {
          return '<div class="optgroup-header">' +
            escape(data.value + " zone") +
            '</div>';
        }
      },
      onItemAdd: (value) => {
        let x = this._settings.get(value);
        if (x) {
          x.element.style.display = "block";
        }
      },
      onItemRemove: (value) => {
        let x = this._settings.get(value);
        if (x) {
          x.element.style.display = "none";
        }
      }
    });
    // free memory
    this._cache = undefined;
  }

  /**
  * Synchronize settings. This method is used to update the
  * feature status bars to reflect changes to the lock settings.
  * @param {object} data - Data frame with new status bar values.
  * @param {object} data.id - Feature identifier.
  * @param {object} data.[*] - Value for each feature in each zone.
  * @return {void}
  */
  sync(data) {
    for (let i = 0; i < data.id.length; ++i) {
      this._settings.get(data.id[i]).setHeldStatus(
        this._zones.map(x => data[x][i])
      );
    }
  }

  /**
  * Get settings for generating a solution.
  * @return {Object}
  */
  getSettings() {
    let settings = [...this._settings.values()];
    return {
      id:
        settings
        .map(x => Array(this._zones.length).fill(x.id))
        .flat(1),
      name:
        settings
        .map(x => Array(this._zones.length).fill(x.name))
        .flat(1),
      column:
        settings
        .map(x => Array(this._zones.length).fill(x.column))
        .flat(1),
      zone:
        settings
        .map(x => this._zones)
        .flat(1),
      target:
        settings
        .map(x => x.targets)
        .flat(1),
      weight:
        settings
        .map(x => x.weights)
        .flat(1)
    };
  }

}


/***/ },

/***/ "./srcjs/modules/solver/lock-setting-class.js"
/*!****************************************************!*\
  !*** ./srcjs/modules/solver/lock-setting-class.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LockSetting: () => (/* binding */ LockSetting)
/* harmony export */ });
/* harmony import */ var _css_tom_select_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/tom-select.css */ "./srcjs/modules/solver/css/tom-select.css");
/* harmony import */ var tom_select_dist_css_tom_select_bootstrap5_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tom-select/dist/css/tom-select.bootstrap5.css */ "./node_modules/tom-select/dist/css/tom-select.bootstrap5.css");
/* harmony import */ var tom_select_dist_js_tom_select_complete_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tom-select/dist/js/tom-select.complete.min.js */ "./node_modules/tom-select/dist/js/tom-select.complete.min.js");
/* harmony import */ var tom_select_dist_js_tom_select_complete_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tom_select_dist_js_tom_select_complete_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lock_setting_scaffold_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lock-setting-scaffold.js */ "./srcjs/modules/solver/lock-setting-scaffold.js");
/* harmony import */ var _utils_element_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/element.js */ "./srcjs/modules/utils/element.js");
/* harmony import */ var _css_setting_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/setting.css */ "./srcjs/modules/solver/css/setting.css");
/* harmony import */ var _css_lock_setting_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/lock-setting.css */ "./srcjs/modules/solver/css/lock-setting.css");
/** Import dependencies */
// Tom Select module



// functions to create elements


// styling



/** Class representing the setting for a single lock. */
class LockSetting {

  // public fields

  /**
   * Zone name.
   * @type {string}
   */
  zone;

  /**
   * Priority value.
   * @type {number}
   */
  priority;

  /**
   * HTML element.
   * @type {HTMLElement}
   */
  element;

  // private fields

  /**
   * Map of lock objects.
   * @type {Map<Object>}
   */
  _locks = new Map();

  /**
   * Tom Select object
   * @type {object}
   */
  _select;

  /**
   * Array of previously selected lock identifiers.
   * @type {HTMLElement}
   */
  _previousLockIds = [];

  /**
   * Array of initial lock identifiers.
   * @type {HTMLElement}
   */
  _initialLockIds = [];

  /**
   * Object used to temporarily store settings for select menu.
   * @type {object}
   */
  _cache = {};

  /**
  * Construct a new LockSetting object.
  * @param {string} zone - Zone name.
  * @param {Array<Object>} locks - Array of lock objects.
  * @param {number} priority - Priority value.
  * @return {void}
  */
  constructor(zone, locks, priority) {
    // initialize public fields
    this.zone = zone;
    this.priority = priority;
    // initialize private fields
    this.element = (0,_lock_setting_scaffold_js__WEBPACK_IMPORTED_MODULE_3__.scaffoldLockSetting)(zone, locks, priority);
    this._cache.options = [];
    for (let i = 0; i < locks.length; ++i) {
      this._locks.set(locks[i].id, locks[i]);
      this._cache.options.push({name: locks[i].name, value: locks[i].id});
      if (locks[i].zone === zone) {
        this._initialLockIds.push(locks[i].id);
      }
    }
    this._previousLockIds = this._initialLockIds;
  }

  /**
  * Append the HTML element for the class to another HTML element.
  * @param {HTMLElement} element - HTML element.
  * @return {void}
  */
  appendTo(element) {
    // append to element
    element.appendChild(this.element);
    // initialize select menu,
    // NOTE this must be done after the element is appended to DOM
    this._select = new (tom_select_dist_js_tom_select_complete_min_js__WEBPACK_IMPORTED_MODULE_2___default())(this.element.querySelector(".lock-select"), {
      options: this._cache.options,
      items: this._initialLockIds,
      create: false,
      dropdownParent: "body",
      labelField: "name",
      searchField: ["name"],
      maxItems: null,
      sortField: "name",
      plugins: ["checkbox_options"],
      closeAfterSelect: false,
      render: {
        option: (data, escape) => {
          let el = document.createElement("div");
          el.classList.add("lock-option");
          let text = document.createElement("span");
          text.innerText = escape(data.name);
          el.appendChild(text);
          el.appendChild(
            (0,_utils_element_js__WEBPACK_IMPORTED_MODULE_4__.createProvenance)(this._locks.get(data.value).layer.provenance)
          );
          return el;
        }
      }
    });
    // set event handler for toggle
    this.element
      .querySelector(".switch")
      .addEventListener("change", (event) => {
        if (event.target.checked) {
          // update select values
          this._select.setValue(this._previousLockIds);
          // update disable property on element
          this._select.enable();
        } else {
          // update previous values
          this._previousLockIds = this.getLockIds().slice();
          // clear select
          this._select.clear();
          // update disable property on element
          this._select.disable();
        }
      });
    // free memory
    this._cache = undefined;
  }

  /**
  * Set priority value.
  * @param {number} value - New priority value.
  * @return {void}
  */
  setPriorityValue(value) {
    this.priority = value;
  }

  /**
  * Get identifiers for selected locks.
  * @return {Array<string>}
  */
  getLockIds() {
    return this._select.getValue();
  }

  /**
  * Get names for selected locks.
  * @return {Array<string>}
  */
  getLockNames() {
    return this.getLockIds().map(x => this._locks.get(x).name);
  }

  /**
  * Get columns for selected locks.
  * @return {Array<string>}
  */
  getLockColumns() {
    return this.getLockIds().map(x => this._locks.get(x).layer.column);
  }

  /**
  * Get zones for selected locks.
  * @return {Array<string>}
  */
  getLockZones() {
    return this.getLockIds().map(x => this.zone);
  }

  /**
  * Get priority values for selected locks.
  * @return {Array<number>}
  */
  getLockPriorityValues() {
    return this.getLockIds().map(x => this.priority);
  }

}


/***/ },

/***/ "./srcjs/modules/solver/lock-setting-scaffold.js"
/*!*******************************************************!*\
  !*** ./srcjs/modules/solver/lock-setting-scaffold.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scaffoldLockSetting: () => (/* binding */ scaffoldLockSetting)
/* harmony export */ });
/* harmony import */ var _utils_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/element.js */ "./srcjs/modules/utils/element.js");
/** Import dependencies */
// functions to create elements





/**
 * Scaffold a lock setting element
 * @param {string} zone - Zone name.
  * @param {Array<Object>} locks - Array of locks.
 * @return {HTMLElement}
 */
function scaffoldLockSetting(zone, locks, priority) {
  // create container
  let el = document.createElement("div");
  el.classList.add("lock-setting", "setting");
  el.style.backgroundColor = `var(--zone-${zone}-secondary)`;
  // set data zone attribute
  el.setAttribute("data-zone", zone);
  // create feature setting header
  el.appendChild(lockSettingHeader(zone, priority));
  // create feature setting weights
  el.appendChild(lockSettingSelect(zone));
  // return element
  return el;
}

/**
 * Create a header component for a lock setting.
 * @param {string} zone - Zone name.
 * @param {number} priority - Priority value.
 * @return {HTMLElement}
 */
function lockSettingHeader(zone, priority) {
  // create container
  let el = document.createElement("div");
  el.classList.add("header");
  // create switch
  let switchElement = (0,_utils_element_js__WEBPACK_IMPORTED_MODULE_0__.createSwitches)(1);
  switchElement.children[0].children[0].setAttribute("data-zone", zone);
  switchElement.children[0].children[0].style.setProperty(
    "--switch-primary",
    `var(--zone-${zone}-primary)`
  );
  // create name element
  let nameElement = (0,_utils_element_js__WEBPACK_IMPORTED_MODULE_0__.createNameLabel)({
    name: `${zone} zone`,
    details: `Select locks for the ${zone} zone`
  });
  // create handle
  let handle = (0,_utils_element_js__WEBPACK_IMPORTED_MODULE_0__.createHandle)(
    "Drag to specify priority order for locking in planning units"
  );
  // append elements
  el.appendChild(switchElement);
  el.appendChild(nameElement);
  el.appendChild(handle);
  // return element
  return el;
}

/**
 * Create a select component for a lock setting.
 * @param {string} zone - Zone name.
 * @return {HTMLElement}
 */
function lockSettingSelect(zone) {
  // initialize element
  let el = document.createElement("select");
  el.classList.add("lock-select");
  el.setAttribute("multiple", "");
  el.setAttribute("placeholder", "Choose locks...");
  return el;
}


/***/ },

/***/ "./srcjs/modules/solver/lock-settings-class.js"
/*!*****************************************************!*\
  !*** ./srcjs/modules/solver/lock-settings-class.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LockSettings: () => (/* binding */ LockSettings)
/* harmony export */ });
/* harmony import */ var sortablejs_modular_sortable_core_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs/modular/sortable.core.esm.js */ "./node_modules/sortablejs/modular/sortable.core.esm.js");
/* harmony import */ var _lock_setting_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lock-setting-class.js */ "./srcjs/modules/solver/lock-setting-class.js");
/* harmony import */ var _css_settings_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/settings.css */ "./srcjs/modules/solver/css/settings.css");
/** Import dependencies */
// Sortable module

// classes to create components

// styling


/** Class representing the settings for multiple locks. */
class LockSettings {

  // private fields

  /**
   * Array of zone names.
   * @type {Array<string>}
   */
  _zones;

  /**
   * Array of settings.
   * @type {Map<LockSettings>}
   */
  _settings = new Map();

  /**
  * Construct a new LockSettings object.
  * @param {Object} project - Object with various types of objects.
  * @param {Array<Object>} project.locks- Array of lock objects.
  * @return {void}
  */
  constructor(project) {
    // initialize fields
    this._zones = project.zones;
    // create lock setting for each zone
    for (let i = 0; i < this._zones.length; ++i) {
      this._settings.set(
        project.zones[i],
        new _lock_setting_class_js__WEBPACK_IMPORTED_MODULE_1__.LockSetting(
          project.zones[i],
          project.locks,
          this._zones.length - i
        )
      );
    }
  }

  /**
  * Append the HTML element for the class to another HTML element.
  * @param {HTMLElement} element - HTML element.
  * @param {string} id - Identifier for HTML element to register Shiny bindings.
  * @return {void}
  */
  appendTo(element, id) {
    // create container
    let el = document.createElement("el");
    el.classList.add("lock-settings", "settings");
    element.appendChild(el);
    // append elements for lock settings
    this._settings.forEach(x => x.appendTo(el));
    // initialize sortable class on lock settings
    sortablejs_modular_sortable_core_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(el, {
      handle: ".handle",
      animation: 150,
      dataIdAttr: "data-zone",
      ghostClass: "ghost",
      onUpdate: event => {
        // update priority orders
        for (let i = 0; i < this._zones.length; ++i) {
          this._settings
            .get(event.to.children[i].getAttribute("data-zone"))
            .setPriorityValue(this._zones.length - i);
        }
        // trigger synchronization
        if (HTMLWidgets.shinyMode) {
          Shiny.setInputValue(
            `${id}_sync:apscp.JsDataFrame`,
            this.getSettings(),
            {priority: "event"}
          );
        }
      }
    });
    // set event handlers for synchronization
    if (HTMLWidgets.shinyMode) {
      // set events based on each zone's select input
      this._settings.forEach(x => {
        x._select.on("change", value => {
          Shiny.setInputValue(
            `${id}_sync:apscp.JsDataFrame`,
            this.getSettings(),
            {priority: "event"}
          );
        });
      });
    }
  }

  /**
  * Get settings for generating a solution.
  * @return {Object}
  */
  getSettings() {
    return {
      id:
        Array.from(this._settings.values(), x => x.getLockIds())
        .flat(1),
      name:
        Array.from(this._settings.values(), x => x.getLockNames())
        .flat(1),
      column:
        Array.from(this._settings.values(), x => x.getLockColumns())
        .flat(1),
      zone:
        Array.from(this._settings.values(), x => x.getLockZones())
        .flat(1),
      priority:
        Array.from(this._settings.values(), x => x.getLockPriorityValues())
        .flat(1)
    }
  }

}


/***/ },

/***/ "./srcjs/modules/solver/solver-class.js"
/*!**********************************************!*\
  !*** ./srcjs/modules/solver/solver-class.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Solver: () => (/* binding */ Solver)
/* harmony export */ });
/* harmony import */ var _feature_settings_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature-settings-class.js */ "./srcjs/modules/solver/feature-settings-class.js");
/* harmony import */ var _lock_settings_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lock-settings-class.js */ "./srcjs/modules/solver/lock-settings-class.js");
/* harmony import */ var _cost_settings_class_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cost-settings-class.js */ "./srcjs/modules/solver/cost-settings-class.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/style.css */ "./srcjs/modules/solver/css/style.css");
/** Import dependencies */
// classes to create components



// styling


/** Class representing an object for generating a solution. */
class Solver {

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
    el, project,
    featureTargetChoices, featureWeightChoices, costWeightChoices,
    zoneColors
  ) {
    // initialize fields
    this._project = project;

    // assign styling to element based on zone colors
    for (let i = 0; i < project.zones.length; ++i) {
      el.style.setProperty(
        `--zone-${project.zones[i]}-primary`,
        zoneColors[i]
      );
      el.style.setProperty(
        `--zone-${project.zones[i]}-secondary`,
        `color-mix(in srgb, ${zoneColors[i]}, white 50%)`
      );
    }

    // initialize objective settings
    // this._objectiveSettings = new ObjectiveSettings(project);
    // this._objectiveSettings.appendTo(el.querySelector(".features-panel"));

    // initialize feature settings
    this._featureSettings = new _feature_settings_class_js__WEBPACK_IMPORTED_MODULE_0__.FeatureSettings(
      project, featureTargetChoices, featureWeightChoices
    );
    this._featureSettings.appendTo(el.querySelector(".features-panel"));

    // initialize lock settings
    this._lockSettings = new _lock_settings_class_js__WEBPACK_IMPORTED_MODULE_1__.LockSettings(project)
    this._lockSettings.appendTo(el.querySelector(".locks-panel"), el.id);

    // initialize cost settings
    this._costSettings = new _cost_settings_class_js__WEBPACK_IMPORTED_MODULE_2__.CostSettings(project, costWeightChoices);
    this._costSettings.appendTo(el.querySelector(".costs-panel"));

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
      if (HTMLWidgets.shinyMode) {
        Shiny.setInputValue(
          `${el.id}_settings:apscp.JsDataFrameList`,
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


/***/ },

/***/ "./srcjs/modules/statusbar/statusbar.js"
/*!**********************************************!*\
  !*** ./srcjs/modules/statusbar/statusbar.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StatusBar)
/* harmony export */ });
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/math.js */ "./srcjs/modules/utils/math.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ "./srcjs/modules/statusbar/css/style.css");
/** Import dependencies */
// utility functions



// styling


/** Class representing a status bar. */
class StatusBar {

  // public fields

  /**
   * HTML element.
   * @type {HTMLElement}
   */
  element;

  // private HTML fields

  /**
   * HTML elements that contain labels.
   * @type {NodeList<HTMLElement>}
   */
  _labels;

  /**
   * HTML elements that contain bar segments.
   * @type {NodeList<HTMLElement>}
   */
  _segments;

  /**
   * HTML element that contains the start bar cap.
   * @type {HTMLElement}
   */
  _start_cap;

  /**
   * HTML element that contains the start bar cap.
   * @type {HTMLElement}
   */
  _end_cap;

  /**
  * Construct a new StatusBar object.
  * @param {HTMLElement} element - HTML element for slider.
  * @param {object} options - options settings.
  * @param {Array<number>} options.values - Values to display.
  * @param {Array<string>} options.colors - Colors for bar values.
  * @param {NodeList<HTMLElement>} options.labels - HTML elements for
  * for labels. Note that there must be an element for each slider handle.
  * @param {function} options.format - Function for formatting labels.
  * This must have parameters for `labels` and `values`.
  * @return {void}
  */
  constructor(element, options) {
    // set public fields
    this.element = element;
    // set private fields
    this._colors = options.colors;
    this._labels = options.labels;
    this._formatter = options.format || ((labels, values) => {});
    // create end bar cap element
    this._end_cap = document.createElement("div");
    this._end_cap.classList.add("bar-end-cap");
    // create start bar cap element
    this._start_cap = document.createElement("div");
    this._start_cap.classList.add("bar-start-cap");
    // create bars element
    let bars = document.createElement("div");
    bars.classList.add("bars");
    // create segment elements
    this._segments = [];
    for (let i = 0; i < options.values.length; ++i) {
      let segment = document.createElement("div");
      segment.classList.add("bar-segment");
      this._segments.push(segment);
      bars.appendChild(segment);
    }
    // render elements
    element.classList.add("statusBars-target");
    element.appendChild(this._start_cap);
    element.appendChild(bars);
    element.appendChild(this._end_cap);
    // set values.
    this.set(options.values);
    // attach this object to the element
    element.statusBar = this;
  }

  /**
  * Set values.
  * @param {Array<number>} values - Values to display.
  * @return {void}
  */
  set(values) {
    // preliminary calculations
    let o = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.order)(values);
    let v = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.convertTargetsToSliderValues)(values);
    // update labels
    this._formatter(this._labels, values);
    // by default, make start cap the color of smallest value
    this._start_cap.style.color = this._colors[o[0]];
    this._start_cap.style.background = this._colors[o[0]];
    // by default, make end cap transparent
    this._end_cap.style.color = "transparent";
    this._end_cap.style.background = "transparent";
    // update segments and, if needed, start and end caps too
    for (let i = 0; i < values.length; ++i) {
      // update i'th segment
      this._segments[o[i]].style.width = `${Math.round(v[i] * 100)}%`;
      this._segments[o[i]].style["z-index"] = values.length - i;
      this._segments[o[i]].style.background = this._colors[i];
      // if i'th segment covers 100%, then update caps
      if (values[i] > 0.995) {
        this._end_cap.style.color = this._colors[i];
        this._end_cap.style.background = this._colors[i];
        this._start_cap.style.color = this._colors[i];
        this._start_cap.style.background = this._colors[i];
      }
    }
  }
}


/***/ },

/***/ "./srcjs/modules/utils/element.js"
/*!****************************************!*\
  !*** ./srcjs/modules/utils/element.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTooltip: () => (/* binding */ addTooltip),
/* harmony export */   createHandle: () => (/* binding */ createHandle),
/* harmony export */   createNameLabel: () => (/* binding */ createNameLabel),
/* harmony export */   createProvenance: () => (/* binding */ createProvenance),
/* harmony export */   createSwitches: () => (/* binding */ createSwitches)
/* harmony export */ });
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./srcjs/modules/utils/css/style.css");
/** Import dependencies */
// styling


/**
 * Add a tool tip.
 * @param {HTMLElement} element - HTML element that requires a tool tip.;
 * @param {string} text - Text to display in tool tip.
 * @return {void}
 */
function addTooltip(element, text) {
  element.setAttribute("data-toggle", "tooltip");
  element.setAttribute("data-placement", "top");
  element.setAttribute("data-container", "body");
  element.setAttribute("title", text);
}

/**
 * Create a provenance.
 * @param {Object} x - Object with properties for customization.
 * @param {string} x.description - Text to display in tool tip.
 * @param {string} x.icon - Name of Font Awesome icon.
 * @param {string} x.color - Color for icon.
 * @return {HTMLElement}
 */
function createProvenance(x) {
  let el = document.createElement("i");
  el.classList.add("provenance");
  if (typeof(x.description) === "string") {
    addTooltip(el, x.description);
  }
  el.classList.add("fas");
  el.classList.add("fa-" + x.icon);
  el.style.color = x.color;
  return el;
}

/**
 * Create a name label.
 * @param {Object} x - Object with properties for customization.
 * @param {string} x.description - Text to display in tool tip.
 * @param {string} x.icon - Name of Font Awesome icon.
 * @param {string} x.color - Color for icon.
 * @return {HTMLElement}
 */
function createNameLabel(x) {
  // create element
  let el = document.createElement("label");
  el.classList.add("name-label");
  // set layer name
  el.innerText = x.name;
  // initialize popup text
  let title = "";
  // if needed, add theme information to popup text
  if (typeof(x.themes) === "object") {
    title += `This ${x.class} belongs to the following themes:`;
    title += ` ${x.themes[0].name} (${x.themes[0].zone} zone)`;
    for (let i = 1; i < x.themes.length; ++i) {
      title += `, ${x.themes[i].name} (${x.themes[i].zone} zone)`;
    }
  }
  // if needed, add details to popup text
  if (typeof(x.layer) === "object" && typeof(x.layer.details) === "string") {
    if (title.length > 0) {
      title += " ";
    }
    title += x.layer.details;
  }
  // if needed, initialize popup
  if (title.length > 0) {
    addTooltip(el, title + ".");
  }
  // return element
  return el;
}

/**
 * Create a handle.
 * @param {string} description - Text to display in tool tip.
 * @return {HTMLElement}
 */
function createHandle(description) {
  // create element
  let el = document.createElement("div");
  el.classList.add("handle");
  // create icon
  let icon = document.createElement("i");
  if (typeof(description) === "string") {
    addTooltip(el, description);
  }
  icon.classList.add("fas", "fa-arrows-alt");
  icon.style.color = "--handle";
  // append icon to element
  el.appendChild(icon);
  // return element
  return el;
}

/**
 * Create a set of switches
 * @param {number} n - Number of switches to create.
 * @return {HTMLElement}
 */
function createSwitches(n = 1, checked = true) {
  // create container
  let el = document.createElement("div");
  el.classList.add("switches");
  // create switches
  for (let i = 0; i < n; ++i) {
    // create switch form
    let form = document.createElement("div");
    form.classList.add("form-check", "form-switch", "p-0", "m-0");
    // create switch input
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.classList.add("form-check-input", "switch", "ms-0");
    input.setAttribute("role", "switch");
    input.checked = checked;
    // append element
    form.appendChild(input);
    el.appendChild(form);
  }
  // return element
  return el;
}


/***/ },

/***/ "./srcjs/modules/utils/math.js"
/*!*************************************!*\
  !*** ./srcjs/modules/utils/math.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   autoRound: () => (/* binding */ autoRound),
/* harmony export */   convertSliderValuesToTargets: () => (/* binding */ convertSliderValuesToTargets),
/* harmony export */   convertTargetsToSliderValues: () => (/* binding */ convertTargetsToSliderValues),
/* harmony export */   order: () => (/* binding */ order),
/* harmony export */   replaceNaN: () => (/* binding */ replaceNaN),
/* harmony export */   roundToDigits: () => (/* binding */ roundToDigits)
/* harmony export */ });
/**
* Round number to a specified number of digits.
* @param {Number} x - Number that should be rounded.
* @param {Number} digits - Number of digits to consider for rounding.
* @return {Number}
*/
function roundToDigits(x, digits) {
  return +(Math.round(x + `e+${digits}`)  + `e-${digits}`);
}

/**
* Automatically round number for display.
* @param {Number} x - Number that should be rounded.
* @return {Number}
*/
function autoRound(x) {
  // initialize output
  let out = x;
  const y = Math.abs(x);
  // round number according to rules of thumb
  if (y >= 100) {
    // round to integer
    out = roundToDigits(x, 0);
  } else if (y >= 10) {
    // round to one decimal place
    out = roundToDigits(x, 1);
  } else if (y >= 1) {
    // round to two decimal places
    out = roundToDigits(x, 2);
  } else {
    // round to three decimal places
    out = roundToDigits(x, 3);
  }
  // return result
  return out;
}

/**
* Identify the ascending order of elements in an array.
* @param {Array<number>} x - Array of numbers
* @return {Array<Number>}
*/
function order(x) {
  return x
    .map((value, index) => ({ value, index }))
    .sort((a, b) => a.value - b.value)
    .map(item => item.index);
}

/**
* Replace NaN with another value.
* @param {number} x - Value.
* @param {number} y - New value if x is NaN.
* @return {Number}
*/
function replaceNaN(x, y) {
  return Number.isNaN(x) ? y : x;
}

/**
 * Convert targets to slider values
 * @param {Array<number>} x - Array of numbers.
 * @return {Array<number>}
 */
function convertTargetsToSliderValues(x) {
  let y = [x[0]];
  for (let i = 1; i < x.length; i++) {
    y.push(replaceNaN(x[i] + y[i - 1], 0));
  }
  return y;
}

/**
 * Convert slider values to targets
 * @param {Array<number>} x - Array of numbers.
 * @return {Array<number>}
 */
function convertSliderValuesToTargets(x) {
  let o = order(x);
  let y = new Array(x.length).fill(0);
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    y[o[i]] = replaceNaN(roundToDigits(x[o[i]] - sum, 3), 0);
    sum += y[o[i]];
  }
  return y;
}


/***/ },

/***/ "./srcjs/modules/utils/misc.js"
/*!*************************************!*\
  !*** ./srcjs/modules/utils/misc.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeAllChildNodes: () => (/* binding */ removeAllChildNodes),
/* harmony export */   stringToHtmlElement: () => (/* binding */ stringToHtmlElement),
/* harmony export */   toArray: () => (/* binding */ toArray)
/* harmony export */ });
/**
* Convert a string to a HTML element. This is done by creating a span element
* that contains a separate span element for each word.
* @param {string} x - String.
* @return {HTMLElement}
*/
function stringToHtmlElement(x) {
  let out = document.createElement("span");
  x.split(" ").forEach((x) => {
    let s = document.createElement("span");
    s.innerText = x;
    out.appendChild(s);
  })
  return out;
}

/**
* Remove all child nodes from a HTML element.
* @param {object} parent - HTML element.
* @return {void}
* @see https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
*/
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

/**
* Convert to array.
* @param {object} x - Object.
* @return {Array<object>}
*/
function toArray(object) {
  if (Array.isArray(object)) {
    return object;
  }
  return [object];
}


/***/ },

/***/ "./node_modules/tom-select/dist/js/tom-select.complete.min.js"
/*!********************************************************************!*\
  !*** ./node_modules/tom-select/dist/js/tom-select.complete.min.js ***!
  \********************************************************************/
(module) {

/**
* Tom Select v2.6.2
* Licensed under the Apache License, Version 2.0 (the "License");
*/
!function(e,t){ true?module.exports=t():0}(this,function(){"use strict"
function e(e,t){e.split(/\s+/).forEach(e=>{t(e)})}class t{constructor(){this._events={}}on(t,i){e(t,e=>{const t=this._events[e]||[]
t.push(i),this._events[e]=t})}off(t,i){var s=arguments.length
0!==s?e(t,e=>{if(1===s)return void delete this._events[e]
const t=this._events[e]
void 0!==t&&(t.splice(t.indexOf(i),1),this._events[e]=t)}):this._events={}}trigger(t,...i){var s=this
e(t,e=>{const t=s._events[e]
void 0!==t&&t.forEach(e=>{e.apply(s,i)})})}}const i=e=>(e=e.filter(Boolean)).length<2?e[0]||"":1==l(e)?"["+e.join("")+"]":"(?:"+e.join("|")+")",s=e=>{if(!o(e))return e.join("")
let t="",i=0
const s=()=>{i>1&&(t+="{"+i+"}")}
return e.forEach((n,o)=>{n!==e[o-1]?(s(),t+=n,i=1):i++}),s(),t},n=e=>{let t=Array.from(e)
return i(t)},o=e=>new Set(e).size!==e.length,r=e=>(e+"").replace(/([\$\(\)\*\+\.\?\[\]\^\{\|\}\\])/gu,"\\$1"),l=e=>e.reduce((e,t)=>Math.max(e,a(t)),0),a=e=>Array.from(e).length,c=e=>{if(1===e.length)return[[e]]
let t=[]
const i=e.substring(1)
return c(i).forEach(function(i){let s=i.slice(0)
s[0]=e.charAt(0)+s[0],t.push(s),s=i.slice(0),s.unshift(e.charAt(0)),t.push(s)}),t},d=[[0,65535]]
let u,p
const h={},g={"/":"⁄∕",0:"߀",a:"ⱥɐɑ",aa:"ꜳ",ae:"æǽǣ",ao:"ꜵ",au:"ꜷ",av:"ꜹꜻ",ay:"ꜽ",b:"ƀɓƃ",c:"ꜿƈȼↄ",d:"đɗɖᴅƌꮷԁɦ",e:"ɛǝᴇɇ",f:"ꝼƒ",g:"ǥɠꞡᵹꝿɢ",h:"ħⱨⱶɥ",i:"ɨı",j:"ɉȷ",k:"ƙⱪꝁꝃꝅꞣ",l:"łƚɫⱡꝉꝇꞁɭ",m:"ɱɯϻ",n:"ꞥƞɲꞑᴎлԉ",o:"øǿɔɵꝋꝍᴑ",oe:"œ",oi:"ƣ",oo:"ꝏ",ou:"ȣ",p:"ƥᵽꝑꝓꝕρ",q:"ꝗꝙɋ",r:"ɍɽꝛꞧꞃ",s:"ßȿꞩꞅʂ",t:"ŧƭʈⱦꞇ",th:"þ",tz:"ꜩ",u:"ʉ",v:"ʋꝟʌ",vy:"ꝡ",w:"ⱳ",y:"ƴɏỿ",z:"ƶȥɀⱬꝣ",hv:"ƕ"}
for(let e in g){let t=g[e]||""
for(let i=0;i<t.length;i++){let s=t.substring(i,i+1)
h[s]=e}}const f=new RegExp(Object.keys(h).join("|")+"|[̀-ͯ·ʾʼ]","gu"),m=(e,t="NFKD")=>e.normalize(t),v=e=>Array.from(e).reduce((e,t)=>e+O(t),""),O=e=>(e=m(e).toLowerCase().replace(f,e=>h[e]||""),m(e,"NFC"))
const b=e=>{const t={},i=(e,i)=>{const s=t[e]||new Set,o=new RegExp("^"+n(s)+"$","iu")
i.match(o)||(s.add(r(i)),t[e]=s)}
for(let t of function*(e){for(const[t,i]of e)for(let e=t;e<=i;e++){let t=String.fromCharCode(e),i=v(t)
i!=t.toLowerCase()&&(i.length>3||0!=i.length&&(yield{folded:i,composed:t,code_point:e}))}}(e))i(t.folded,t.folded),i(t.folded,t.composed)
return t},y=e=>{const t=b(e),s={}
let o=[]
for(let e in t){let i=t[e]
i&&(s[e]=n(i)),e.length>1&&o.push(r(e))}o.sort((e,t)=>t.length-e.length)
const l=i(o)
return p=new RegExp("^"+l,"u"),s},w=(e,t=1)=>(t=Math.max(t,e.length-1),i(c(e).map(e=>((e,t=1)=>{let i=0
return e=e.map(e=>(u[e]&&(i+=e.length),u[e]||e)),i>=t?s(e):""})(e,t)))),S=(e,t=!0)=>{let n=e.length>1?1:0
return i(e.map(e=>{let i=[]
const o=t?e.length():e.length()-1
for(let t=0;t<o;t++)i.push(w(e.substrs[t]||"",n))
return s(i)}))},_=(e,t)=>{for(const i of t){if(i.start!=e.start||i.end!=e.end)continue
if(i.substrs.join("")!==e.substrs.join(""))continue
let t=e.parts
const s=e=>{for(const i of t){if(i.start===e.start&&i.substr===e.substr)return!1
if(1!=e.length&&1!=i.length){if(e.start<i.start&&e.end>i.start)return!0
if(i.start<e.start&&i.end>e.start)return!0}}return!1}
if(!(i.parts.filter(s).length>0))return!0}return!1}
class C{parts
substrs
start
end
constructor(){this.parts=[],this.substrs=[],this.start=0,this.end=0}add(e){e&&(this.parts.push(e),this.substrs.push(e.substr),this.start=Math.min(e.start,this.start),this.end=Math.max(e.end,this.end))}last(){return this.parts[this.parts.length-1]}length(){return this.parts.length}clone(e,t){let i=new C,s=JSON.parse(JSON.stringify(this.parts)),n=s.pop()
for(const e of s)i.add(e)
let o=t.substr.substring(0,e-n.start),r=o.length
return i.add({start:n.start,end:n.start+r,length:r,substr:o}),i}}const x=e=>{void 0===u&&(u=y(d)),e=v(e)
let t="",i=[new C]
for(let s=0;s<e.length;s++){let n=e.substring(s).match(p)
const o=e.substring(s,s+1),r=n?n[0]:null
let l=[],a=new Set
for(const e of i){const t=e.last()
if(!t||1==t.length||t.end<=s)if(r){const t=r.length
e.add({start:s,end:s+t,length:t,substr:r}),a.add("1")}else e.add({start:s,end:s+1,length:1,substr:o}),a.add("2")
else if(r){let i=e.clone(s,t)
const n=r.length
i.add({start:s,end:s+n,length:n,substr:r}),l.push(i)}else a.add("3")}if(l.length>0){l=l.sort((e,t)=>e.length()-t.length())
for(let e of l)_(e,i)||i.push(e)}else if(s>0&&1==a.size&&!a.has("3")){t+=S(i,!1)
let e=new C
const s=i[0]
s&&e.add(s.last()),i=[e]}}return t+=S(i,!0),t},A=(e,t)=>{if(e)return e[t]},I=(e,t)=>{if(e){for(var i,s=t.split(".");(i=s.shift())&&(e=e[i]););return e}},k=(e,t,i)=>{var s,n
return e?(e+="",null==t.regex||-1===(n=e.search(t.regex))?0:(s=t.string.length/e.length,0===n&&(s+=.5),s*i)):0},F=(e,t)=>{var i=e[t]
if("function"==typeof i)return i
i&&!Array.isArray(i)&&(e[t]=[i])},L=(e,t)=>{if(Array.isArray(e))e.forEach(t)
else for(var i in e)e.hasOwnProperty(i)&&t(e[i],i)},E=(e,t)=>"number"==typeof e&&"number"==typeof t?e>t?1:e<t?-1:0:(e=v(e+"").toLowerCase())>(t=v(t+"").toLowerCase())?1:t>e?-1:0
class T{items
settings
constructor(e,t){this.items=e,this.settings=t||{diacritics:!0}}tokenize(e,t,i){if(!e||!e.length)return[]
const s=[],n=e.split(/\s+/)
var o
return i&&(o=new RegExp("^("+Object.keys(i).map(r).join("|")+"):(.*)$")),n.forEach(e=>{let i,n=null,l=null
o&&(i=e.match(o))&&(n=i[1],e=i[2]),e.length>0&&(l=this.settings.diacritics?x(e)||null:r(e),l&&t&&(l="\\b"+l)),s.push({string:e,regex:l?new RegExp(l,"iu"):null,field:n})}),s}getScoreFunction(e,t){var i=this.prepareSearch(e,t)
return this._getScoreFunction(i)}_getScoreFunction(e){const t=e.tokens,i=t.length
if(!i)return function(){return 0}
const s=e.options.fields,n=e.weights,o=s.length,r=e.getAttrFn
if(!o)return function(){return 1}
const l=1===o?function(e,t){const i=s[0].field
return k(r(t,i),e,n[i]||1)}:function(e,t){var i=0
if(e.field){const s=r(t,e.field)
!e.regex&&s?i+=1/o:i+=k(s,e,1)}else L(n,(s,n)=>{i+=k(r(t,n),e,s)})
return i/o}
return 1===i?function(e){return l(t[0],e)}:"and"===e.options.conjunction?function(e){var s,n=0
for(let i of t){if((s=l(i,e))<=0)return 0
n+=s}return n/i}:function(e){var s=0
return L(t,t=>{s+=l(t,e)}),s/i}}getSortFunction(e,t){var i=this.prepareSearch(e,t)
return this._getSortFunction(i)}_getSortFunction(e){var t,i=[]
const s=this,n=e.options,o=!e.query&&n.sort_empty?n.sort_empty:n.sort
if("function"==typeof o)return o.bind(this)
const r=function(t,i){return"$score"===t?i.score:e.getAttrFn(s.items[i.id],t)}
if(o)for(let t of o)(e.query||"$score"!==t.field)&&i.push(t)
if(e.query){t=!0
for(let e of i)if("$score"===e.field){t=!1
break}t&&i.unshift({field:"$score",direction:"desc"})}else i=i.filter(e=>"$score"!==e.field)
return i.length?function(e,t){var s,n
for(let o of i){if(n=o.field,s=("desc"===o.direction?-1:1)*E(r(n,e),r(n,t)))return s}return 0}:null}prepareSearch(e,t){const i={}
var s=Object.assign({},t)
if(F(s,"sort"),F(s,"sort_empty"),s.fields){F(s,"fields")
const e=[]
s.fields.forEach(t=>{"string"==typeof t&&(t={field:t,weight:1}),e.push(t),i[t.field]="weight"in t?t.weight:1}),s.fields=e}return{options:s,query:e.toLowerCase().trim(),tokens:this.tokenize(e,s.respect_word_boundaries,i),total:0,items:[],weights:i,getAttrFn:s.nesting?I:A}}search(e,t){var i,s,n=this
s=this.prepareSearch(e,t),t=s.options,e=s.query
const o=t.score||n._getScoreFunction(s)
e.length?L(n.items,(e,n)=>{i=o(e),(!1===t.filter||i>0)&&s.items.push({score:i,id:n})}):L(n.items,(e,t)=>{s.items.push({score:1,id:t})})
const r=n._getSortFunction(s)
return r&&s.items.sort(r),s.total=s.items.length,"number"==typeof t.limit&&(s.items=s.items.slice(0,t.limit)),s}}const P=e=>null==e?null:N(e),N=e=>"boolean"==typeof e?e?"1":"0":e+"",D=e=>(e+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),V=(e,t)=>{var i
return function(s,n){var o=this
i&&(o.loading=Math.max(o.loading-1,0),clearTimeout(i)),i=setTimeout(function(){i=null,o.loadedSearches[s]=!0,e.call(o,s,n)},t)}},j=(e,t,i)=>{var s,n=e.trigger,o={}
for(s of(e.trigger=function(){var i=arguments[0]
if(-1===t.indexOf(i))return n.apply(e,arguments)
o[i]=arguments},i.apply(e,[]),e.trigger=n,t))s in o&&n.apply(e,o[s])},$=(e,t=!1)=>{e&&(e.preventDefault(),t&&e.stopPropagation())},q=(e,t,i,s)=>{e.addEventListener(t,i,s)},R=(e,t)=>!!t&&(!!t[e]&&1===(t.altKey?1:0)+(t.ctrlKey?1:0)+(t.shiftKey?1:0)+(t.metaKey?1:0)),H=(e,t)=>{const i=e.getAttribute("id")
return i||(e.setAttribute("id",t),t)},M=e=>e.replace(/[\\"']/g,"\\$&"),z=(e,t)=>{t&&e.append(t)},B=(e,t)=>{if(Array.isArray(e))e.forEach(t)
else for(var i in e)e.hasOwnProperty(i)&&t(e[i],i)},K=e=>{if(e.jquery)return e[0]
if(e instanceof HTMLElement)return e
if(G(e)){var t=document.createElement("template")
return t.innerHTML=e.trim(),t.content.firstChild}return document.querySelector(e)},G=e=>"string"==typeof e&&e.indexOf("<")>-1,U=(e,t)=>{var i=document.createEvent("HTMLEvents")
i.initEvent(t,!0,!1),e.dispatchEvent(i)},W=(e,t)=>{Object.assign(e.style,t)},Q=(e,...t)=>{var i=X(t);(e=Y(e)).map(e=>{i.map(t=>{e.classList.add(t)})})},J=(e,...t)=>{var i=X(t);(e=Y(e)).map(e=>{i.map(t=>{e.classList.remove(t)})})},X=e=>{var t=[]
return B(e,e=>{"string"==typeof e&&(e=e.trim().split(/[\t\n\f\r\s]/)),Array.isArray(e)&&(t=t.concat(e))}),t.filter(Boolean)},Y=e=>(Array.isArray(e)||(e=[e]),e),Z=(e,t,i)=>{if(!i||i.contains(e))for(;e&&e.matches;){if(e.matches(t))return e
e=e.parentNode}},ee=(e,t=0)=>t>0?e[e.length-1]:e[0],te=(e,t)=>{if(!e)return-1
t=t||e.nodeName
for(var i=0;e=e.previousElementSibling;)e.matches(t)&&i++
return i},ie=(e,t)=>{B(t,(t,i)=>{null==t?e.removeAttribute(i):e.setAttribute(i,""+t)})},se=(e,t)=>{e.parentNode&&e.parentNode.replaceChild(t,e)},ne=(e,t)=>{if(null===t)return
if("string"==typeof t){if(!t.length)return
t=new RegExp(t,"i")}const i=e=>3===e.nodeType?(e=>{var i=e.data.match(t)
if(i&&e.data.length>0){var s=document.createElement("span")
s.className="highlight"
var n=e.splitText(i.index)
n.splitText(i[0].length)
var o=n.cloneNode(!0)
return s.appendChild(o),se(n,s),1}return 0})(e):((e=>{1!==e.nodeType||!e.childNodes||/(script|style)/i.test(e.tagName)||"highlight"===e.className&&"SPAN"===e.tagName||Array.from(e.childNodes).forEach(e=>{i(e)})})(e),0)
i(e)},oe="undefined"!=typeof navigator&&/Mac/.test(navigator.userAgent)?"metaKey":"ctrlKey"
var re={options:[],optgroups:[],plugins:[],delimiter:",",splitOn:null,persist:!0,diacritics:!0,create:null,createOnBlur:!1,createFilter:null,clearAfterSelect:!1,highlight:!0,openOnFocus:!0,shouldOpen:null,maxOptions:50,maxItems:null,hideSelected:null,duplicates:!1,addPrecedence:!1,selectOnTab:!1,preload:null,allowEmptyOption:!1,refreshThrottle:300,loadThrottle:300,loadingClass:"loading",dataAttr:null,optgroupField:"optgroup",valueField:"value",labelField:"text",disabledField:"disabled",optgroupLabelField:"label",optgroupValueField:"value",lockOptgroupOrder:!1,sortField:"$order",searchField:["text"],searchConjunction:"and",mode:null,wrapperClass:"ts-wrapper",controlClass:"ts-control",dropdownClass:"ts-dropdown",dropdownContentClass:"ts-dropdown-content",itemClass:"item",optionClass:"option",dropdownParent:null,controlInput:'<input type="text" autocomplete="off" size="1" />',copyClassesToDropdown:!1,placeholder:null,hidePlaceholder:null,shouldLoad:function(e){return e.length>0},render:{}}
function le(e,t){var i=Object.assign({},re,t),s=i.dataAttr,n=i.labelField,o=i.valueField,r=i.disabledField,l=i.optgroupField,a=i.optgroupLabelField,c=i.optgroupValueField,d=e.tagName.toLowerCase(),u=e.getAttribute("placeholder")||e.getAttribute("data-placeholder")
if(!u&&!i.allowEmptyOption){let t=e.querySelector('option[value=""]')
t&&(u=t.textContent)}var p={placeholder:u,options:[],optgroups:[],items:[],maxItems:null}
return"select"===d?(()=>{var t,d=p.options,u={},h=1
let g=0
var f=e=>{var t=Object.assign({},e.dataset),i=s&&t[s]
return"string"==typeof i&&i.length&&(t=Object.assign(t,JSON.parse(i))),t},m=(e,t)=>{var s=P(e.value)
if(null!=s&&(s||i.allowEmptyOption)){if(u.hasOwnProperty(s)){if(t){var a=u[s][l]
a?Array.isArray(a)?a.push(t):u[s][l]=[a,t]:u[s][l]=t}}else{var c=f(e)
c[n]=c[n]||e.textContent,c[o]=c[o]||s,c[r]=c[r]||e.disabled,c[l]=c[l]||t,c.$option=e,c.$order=c.$order||++g,u[s]=c,d.push(c)}e.selected&&p.items.push(s)}}
p.maxItems=e.hasAttribute("multiple")?null:1,B(e.children,e=>{var i,s,n
"optgroup"===(t=e.tagName.toLowerCase())?((n=f(i=e))[a]=n[a]||i.getAttribute("label")||"",n[c]=n[c]||h++,n[r]=n[r]||i.disabled,n.$order=n.$order||++g,p.optgroups.push(n),s=n[c],B(i.children,e=>{m(e,s)})):"option"===t&&m(e)})})():(()=>{const t=e.getAttribute(s)
if(t)p.options=JSON.parse(t),B(p.options,e=>{p.items.push(e[o])})
else{var r,l,a=null!=(r=null==e||null==(l=e.value)?void 0:l.trim())?r:""
if(!i.allowEmptyOption&&!a.length)return
const t=a.split(i.delimiter)
B(t,e=>{const t={}
t[n]=e,t[o]=e,p.options.push(t)}),p.items=t}})(),Object.assign({},re,p,t)}var ae=0
class ce extends(function(e){return e.plugins={},class extends e{constructor(...e){super(...e),this.plugins={names:[],settings:{},requested:{},loaded:{}}}static define(t,i){e.plugins[t]={name:t,fn:i}}initializePlugins(e){var t,i
const s=this,n=[]
if(Array.isArray(e))e.forEach(e=>{"string"==typeof e?n.push(e):(s.plugins.settings[e.name]=e.options,n.push(e.name))})
else if(e)for(t in e)e.hasOwnProperty(t)&&(s.plugins.settings[t]=e[t],n.push(t))
for(;i=n.shift();)s.require(i)}loadPlugin(t){var i=this,s=i.plugins,n=e.plugins[t]
if(!e.plugins.hasOwnProperty(t))throw new Error('Unable to find "'+t+'" plugin')
s.requested[t]=!0,s.loaded[t]=n.fn.apply(i,[i.plugins.settings[t]||{}]),s.names.push(t)}require(e){var t=this,i=t.plugins
if(!t.plugins.loaded.hasOwnProperty(e)){if(i.requested[e])throw new Error('Plugin has circular dependency ("'+e+'")')
t.loadPlugin(e)}return i.loaded[e]}}}(t)){constructor(e,t){var i
super(),this.order=0,this.isOpen=!1,this.isDisabled=!1,this.isReadOnly=!1,this.isInvalid=!1,this.isValid=!0,this.isLocked=!1,this.isFocused=!1,this.isInputHidden=!1,this.isSetup=!1,this.isDropdownContentStale=!0,this.ignoreFocus=!1,this.ignoreHover=!1,this.hasOptions=!1,this.lastValue="",this.caretPos=0,this.loading=0,this.loadedSearches={},this.activeOption=null,this.activeItems=[],this.optgroups={},this.options={},this.userOptions={},this.items=[],this.refreshTimeout=null,ae++
var s=K(e)
if(s.tomselect)throw new Error("Tom Select already initialized on this element")
s.tomselect=this,i=(window.getComputedStyle&&window.getComputedStyle(s,null)).getPropertyValue("direction")
const n=le(s,t)
this.settings=n,this.input=s,this.tabIndex=s.tabIndex||0,this.is_select_tag="select"===s.tagName.toLowerCase(),this.rtl=/rtl/i.test(i),this.inputId=H(s,"tomselect-"+ae),this.isRequired=s.required,this.sifter=new T(this.options,{diacritics:n.diacritics}),n.mode=n.mode||(1===n.maxItems?"single":"multi"),"boolean"!=typeof n.hideSelected&&(n.hideSelected="multi"===n.mode),"boolean"!=typeof n.hidePlaceholder&&(n.hidePlaceholder="multi"!==n.mode)
var o=n.createFilter
"function"!=typeof o&&("string"==typeof o&&(o=new RegExp(o)),o instanceof RegExp?n.createFilter=e=>o.test(e):n.createFilter=e=>this.settings.duplicates||!this.options[e]),this.initializePlugins(n.plugins),this.setupCallbacks(),this.setupTemplates()
const r=K("<div>"),l=K("<div>"),a=this._render("dropdown"),c=K('<div role="listbox" tabindex="-1">'),d=this.input.getAttribute("class")||"",u=n.mode
var p
if(Q(r,n.wrapperClass,d,u),Q(l,n.controlClass),z(r,l),Q(a,n.dropdownClass,u),n.copyClassesToDropdown&&Q(a,d),Q(c,n.dropdownContentClass),z(a,c),K(n.dropdownParent||r).appendChild(a),G(n.controlInput)){p=K(n.controlInput)
B(["autocorrect","autocapitalize","autocomplete","spellcheck","aria-label"],e=>{s.getAttribute(e)&&ie(p,{[e]:s.getAttribute(e)})}),p.tabIndex=-1,l.appendChild(p),this.focus_node=p}else n.controlInput?(p=K(n.controlInput),this.focus_node=p):(p=K("<input/>"),this.focus_node=l)
this.wrapper=r,this.dropdown=a,this.dropdown_content=c,this.control=l,this.control_input=p,this.setup()}setup(){const e=this,t=e.settings,i=e.control_input,s=e.dropdown,n=e.dropdown_content,o=e.wrapper,l=e.control,a=e.input,c=e.focus_node,d={passive:!0},u=e.inputId+"-ts-dropdown"
ie(n,{id:u}),ie(c,{role:"combobox","aria-haspopup":"listbox","aria-expanded":"false","aria-controls":u})
const p=H(c,e.inputId+"-ts-control"),h="label[for='"+(e=>e.replace(/['"\\]/g,"\\$&"))(e.inputId)+"']",g=document.querySelector(h),f=e.focus.bind(e)
if(g){q(g,"click",f),ie(g,{for:p})
const t=H(g,e.inputId+"-ts-label")
ie(c,{"aria-labelledby":t}),ie(n,{"aria-labelledby":t})}if(o.style.width=a.style.width,o.style.minWidth=a.style.minWidth,o.style.maxWidth=a.style.maxWidth,e.plugins.names.length){const t="plugin-"+e.plugins.names.join(" plugin-")
Q([o,s],t)}(null===t.maxItems||t.maxItems>1)&&e.is_select_tag&&ie(a,{multiple:"multiple"}),t.placeholder&&ie(i,{placeholder:t.placeholder}),!t.splitOn&&t.delimiter&&(t.splitOn=new RegExp("\\s*"+r(t.delimiter)+"+\\s*")),t.load&&t.loadThrottle&&(t.load=V(t.load,t.loadThrottle)),q(s,"mousemove",()=>{e.ignoreHover=!1}),q(s,"mouseenter",t=>{var i=Z(t.target,"[data-selectable]",s)
i&&e.onOptionHover(t,i)},{capture:!0}),q(s,"click",t=>{const i=Z(t.target,"[data-selectable]")
i&&(e.onOptionSelect(t,i),$(t,!0))}),q(l,"click",t=>{var s=Z(t.target,"[data-ts-item]",l)
s&&e.onItemSelect(t,s)?$(t,!0):""==i.value&&(e.onClick(),$(t,!0))}),q(c,"keydown",t=>e.onKeyDown(t)),q(i,"keypress",t=>e.onKeyPress(t)),q(i,"input",t=>e.onInput(t)),q(c,"blur",t=>e.onBlur(t)),q(c,"focus",t=>e.onFocus(t)),q(i,"paste",t=>e.onPaste(t))
const m=t=>{const n=t.composedPath()[0]
if(!o.contains(n)&&!s.contains(n))return e.isFocused&&e.blur(),void e.inputState()
n==i&&e.isOpen?t.stopPropagation():$(t,!0)},v=()=>{e.isOpen&&e.positionDropdown()},O=()=>{e.isValid&&(e.isValid=!1,e.isInvalid=!0,e.refreshState())}
q(a,"invalid",O),q(document,"mousedown",m),q(window,"scroll",v,d),q(window,"resize",v,d),this._destroy=()=>{a.removeEventListener("invalid",O),document.removeEventListener("mousedown",m),window.removeEventListener("scroll",v),window.removeEventListener("resize",v),g&&g.removeEventListener("click",f)},this.revertSettings={innerHTML:a.innerHTML,tabIndex:a.tabIndex},a.tabIndex=-1,a.insertAdjacentElement("afterend",e.wrapper),e.sync(!1),t.items=[],delete t.optgroups,delete t.options,e.refreshItems(),e.close(!1),e.inputState(),e.isSetup=!0,e.on("change",this.onChange),Q(a,"tomselected","ts-hidden-accessible"),e.trigger("initialize"),!0===t.preload&&e.preload()}setupOptions(e=[],t=[]){this.addOptions(e),B(t,e=>{this.registerOptionGroup(e)})}setupTemplates(){var e=this,t=e.settings.labelField,i=e.settings.optgroupLabelField,s={optgroup:e=>{let t=document.createElement("div")
return t.className="optgroup",t.appendChild(e.options),t},optgroup_header:(e,t)=>'<div class="optgroup-header">'+t(e[i])+"</div>",option:(e,i)=>"<div>"+i(e[t])+"</div>",item:(e,i)=>"<div>"+i(e[t])+"</div>",option_create:(e,t)=>'<div class="create">Add <strong>'+t(e.input)+"</strong>&hellip;</div>",no_results:()=>'<div class="no-results">No results found</div>',loading:()=>'<div class="spinner"></div>',not_loading:()=>{},dropdown:()=>"<div></div>"}
e.settings.render=Object.assign({},s,e.settings.render)}setupCallbacks(){var e,t,i={initialize:"onInitialize",change:"onChange",item_add:"onItemAdd",item_remove:"onItemRemove",item_select:"onItemSelect",clear:"onClear",option_add:"onOptionAdd",option_remove:"onOptionRemove",option_clear:"onOptionClear",optgroup_add:"onOptionGroupAdd",optgroup_remove:"onOptionGroupRemove",optgroup_clear:"onOptionGroupClear",dropdown_open:"onDropdownOpen",dropdown_close:"onDropdownClose",type:"onType",load:"onLoad",focus:"onFocus",blur:"onBlur"}
for(e in i)(t=this.settings[i[e]])&&this.on(e,t)}sync(e=!0){const t=this,i=e?le(t.input,{delimiter:t.settings.delimiter,allowEmptyOption:t.settings.allowEmptyOption}):t.settings
t.setupOptions(i.options,i.optgroups),t.setValue(i.items||[],!0),t.input.disabled?t.disable():t.input.readOnly?t.setReadOnly(!0):t.enable(),t.lastQuery=null}onClick(){var e=this
if(e.activeItems.length>0)return e.clearActiveItems(),void e.focus()
e.isFocused&&e.isOpen?e.blur():e.focus()}onMouseDown(){}onChange(){U(this.input,"input"),U(this.input,"change")}onPaste(e){var t=this
t.isInputHidden||t.isLocked?$(e):t.settings.splitOn&&setTimeout(()=>{var e=t.inputValue()
if(e.match(t.settings.splitOn)){var i=e.trim().split(t.settings.splitOn)
B(i,e=>{P(e)&&(this.options[e]?t.addItem(e):t.createItem(e))})}},0)}onKeyPress(e){var t=this
if(!t.isLocked){var i=String.fromCharCode(e.keyCode||e.which)
return t.settings.create&&"multi"===t.settings.mode&&i===t.settings.delimiter?(t.createItem(),void $(e)):void 0}$(e)}onKeyDown(e){var t=this
if(t.ignoreHover=!0,t.isLocked)9!==e.keyCode&&$(e)
else{switch(e.keyCode){case 65:if(R(oe,e)&&""==t.control_input.value)return $(e),void t.selectAll()
break
case 27:return t.isOpen&&($(e,!0),t.close()),void t.clearActiveItems()
case 40:if(!t.isOpen&&t.hasOptions)t.open()
else if(t.activeOption){let e=t.getAdjacent(t.activeOption,1)
e&&t.setActiveOption(e)}return void $(e)
case 38:if(t.activeOption){let e=t.getAdjacent(t.activeOption,-1)
e&&t.setActiveOption(e)}return void $(e)
case 13:return void(t.canSelect(t.activeOption)?(t.onOptionSelect(e,t.activeOption),$(e)):(t.settings.create&&t.createItem()||document.activeElement==t.control_input&&t.isOpen)&&$(e))
case 37:return void t.advanceSelection(-1,e)
case 39:return void t.advanceSelection(1,e)
case 9:return void(t.settings.selectOnTab&&(t.canSelect(t.activeOption)?(t.onOptionSelect(e,t.activeOption),$(e)):t.settings.create&&t.createItem()&&$(e)))
case 8:case 46:return void t.deleteSelection(e)}t.isInputHidden&&!R(oe,e)&&$(e)}}onInput(e){if(this.isLocked)return
const t=this.inputValue()
this.lastValue!==t&&(this.lastValue=t,""!=t?(this.refreshTimeout&&window.clearTimeout(this.refreshTimeout),this.refreshTimeout=((e,t)=>t>0?window.setTimeout(e,t):(e.call(null),null))(()=>{this.refreshTimeout=null,this._onInput()},this.settings.refreshThrottle)):this._onInput())}_onInput(){const e=this.lastValue
this.settings.shouldLoad.call(this,e)&&this.load(e),this.refreshOptions(),this.trigger("type",e)}onOptionHover(e,t){this.ignoreHover||this.setActiveOption(t,!1)}onFocus(e){var t=this,i=t.isFocused
if(t.isDisabled||t.isReadOnly)return t.blur(),void $(e)
t.ignoreFocus||(t.isFocused=!0,"focus"===t.settings.preload&&t.preload(),i||t.trigger("focus"),t.activeItems.length||(t.inputState(),t.refreshOptions(!!t.settings.openOnFocus)),t.refreshState())}onBlur(e){if(!1!==document.hasFocus()){var t=this
if(t.isFocused){t.isFocused=!1,t.ignoreFocus=!1
var i=()=>{t.close(),t.setActiveItem(),t.setCaret(t.items.length),t.trigger("blur")}
t.settings.create&&t.settings.createOnBlur?t.createItem(null,i):i()}}}onOptionSelect(e,t){var i,s=this
t.parentElement&&t.parentElement.matches("[data-disabled]")||(t.classList.contains("create")?s.createItem(null,()=>{s.settings.closeAfterSelect?s.close():s.settings.clearAfterSelect&&s.setTextboxValue()}):void 0!==(i=t.dataset.value)&&(s.isDropdownContentStale=s.settings.hideSelected,s.addItem(i),s.settings.closeAfterSelect?s.close():s.settings.clearAfterSelect&&s.setTextboxValue(),!s.settings.hideSelected&&e.type&&/click/.test(e.type)&&s.setActiveOption(t)))}canSelect(e){return!!(this.isOpen&&e&&this.dropdown_content.contains(e))}onItemSelect(e,t){var i=this
return!i.isLocked&&"multi"===i.settings.mode&&($(e),i.setActiveItem(t,e),!0)}canLoad(e){return!!this.settings.load&&!this.loadedSearches.hasOwnProperty(e)}load(e){const t=this
if(!t.canLoad(e))return
Q(t.wrapper,t.settings.loadingClass),t.loading++
const i=t.loadCallback.bind(t)
t.settings.load.call(t,e,i)}loadCallback(e,t){const i=this
i.loading=Math.max(i.loading-1,0),i.isDropdownContentStale=!0,i.clearActiveOption(),i.setupOptions(e,t),i.refreshOptions(i.isFocused&&!i.isInputHidden),i.loading||J(i.wrapper,i.settings.loadingClass),i.trigger("load",e,t)}preload(){var e=this.wrapper.classList
e.contains("preloaded")||(e.add("preloaded"),this.load(""))}setTextboxValue(e=""){var t=this.control_input
t.value!==e&&(t.value=e,U(t,"update"),this.lastValue=e)}getValue(){return this.is_select_tag&&this.input.hasAttribute("multiple")?this.items:this.items.join(this.settings.delimiter)}setValue(e,t){j(this,t?[]:["change"],()=>{this.clear(t),this.addItems(e,t)})}setMaxItems(e){0===e&&(e=null),this.settings.maxItems=e,this.refreshState()}setActiveItem(e,t){var i,s,n,o,r,l,a=this
if("single"!==a.settings.mode){if(!e)return a.clearActiveItems(),void(a.isFocused&&a.inputState())
if("click"===(i=t&&t.type.toLowerCase())&&R("shiftKey",t)&&a.activeItems.length){for(l=a.getLastActive(),(n=Array.prototype.indexOf.call(a.control.children,l))>(o=Array.prototype.indexOf.call(a.control.children,e))&&(r=n,n=o,o=r),s=n;s<=o;s++)e=a.control.children[s],-1===a.activeItems.indexOf(e)&&a.setActiveItemClass(e)
$(t)}else"click"===i&&R(oe,t)||"keydown"===i&&R("shiftKey",t)?e.classList.contains("active")?a.removeActiveItem(e):a.setActiveItemClass(e):(a.clearActiveItems(),a.setActiveItemClass(e))
a.inputState(),a.isFocused||a.focus()}}setActiveItemClass(e){const t=this,i=t.control.querySelector(".last-active")
i&&J(i,"last-active"),Q(e,"active last-active"),t.trigger("item_select",e),-1==t.activeItems.indexOf(e)&&t.activeItems.push(e)}removeActiveItem(e){var t=this.activeItems.indexOf(e)
this.activeItems.splice(t,1),J(e,"active")}clearActiveItems(){J(this.activeItems,"active"),this.activeItems=[]}setActiveOption(e,t=!0){e!==this.activeOption&&(this.clearActiveOption(),e&&(this.activeOption=e,ie(this.focus_node,{"aria-activedescendant":e.getAttribute("id")}),ie(e,{"aria-selected":"true"}),Q(e,"active"),t&&this.scrollToOption(e)))}scrollToOption(e,t){if(!e)return
const i=this.dropdown_content,s=i.clientHeight,n=i.scrollTop||0,o=e.offsetHeight,r=e.getBoundingClientRect().top-i.getBoundingClientRect().top+n
r+o>s+n?this.scroll(r-s+o,t):r<n&&this.scroll(r,t)}scroll(e,t){const i=this.dropdown_content
t&&(i.style.scrollBehavior=t),i.scrollTop=e,i.style.scrollBehavior=""}clearActiveOption(){this.activeOption&&(J(this.activeOption,"active"),ie(this.activeOption,{"aria-selected":null})),this.activeOption=null,ie(this.focus_node,{"aria-activedescendant":null})}selectAll(){const e=this
if("single"===e.settings.mode)return
const t=e.controlChildren()
t.length&&(e.inputState(),e.close(),e.activeItems=t,B(t,t=>{e.setActiveItemClass(t)}))}inputState(){var e=this
e.control.contains(e.control_input)&&(ie(e.control_input,{placeholder:e.settings.placeholder}),e.activeItems.length>0||!e.isFocused&&e.settings.hidePlaceholder&&e.items.length>0?(e.setTextboxValue(),e.isInputHidden=!0):(e.settings.hidePlaceholder&&e.items.length>0&&ie(e.control_input,{placeholder:""}),e.isInputHidden=!1),e.wrapper.classList.toggle("input-hidden",e.isInputHidden))}inputValue(){return this.control_input.value.trim()}focus(){var e=this
if(e.isDisabled||e.isReadOnly)return
e.ignoreFocus=!0
const t=this.control_input.offsetWidth?this.control_input:this.focus_node
t.focus(),setTimeout(()=>{e.ignoreFocus=!1
t.getRootNode().activeElement===t&&this.onFocus()},0)}blur(){this.focus_node.blur(),this.onBlur()}getScoreFunction(e){return this.sifter.getScoreFunction(e,this.getSearchOptions())}getSearchOptions(){var e=this.settings,t=e.sortField
return"string"==typeof e.sortField&&(t=[{field:e.sortField}]),{fields:e.searchField,conjunction:e.searchConjunction,sort:t,nesting:e.nesting}}search(e){var t,i,s=this,n=this.getSearchOptions()
if(s.settings.score&&"function"!=typeof(i=s.settings.score.call(s,e)))throw new Error('Tom Select "score" setting must be a function that returns a function')
return s.isDropdownContentStale||e!==s.lastQuery?(s.lastQuery=e,/(.)\1{15,}/.test(e)&&(e=""),t=s.sifter.search(e,Object.assign(n,{score:i})),s.currentResults=t):t=Object.assign({},s.currentResults),s.settings.hideSelected&&(t.items=t.items.filter(e=>{let t=P(e.id)
return!(null!==t&&-1!==s.items.indexOf(t))})),t}refreshOptions(e=!0){var t,i,s,n,o,r,l,a,c,d
const u={},p=[]
var h=this,g=h.inputValue()
const f=g===h.lastQuery||""==g&&null==h.lastQuery
var m=h.search(g),v=null,O=h.settings.shouldOpen||!1,b=h.dropdown_content
f&&(v=h.activeOption)&&(c=v.closest("[data-group]")),n=m.items.length,"number"==typeof h.settings.maxOptions&&(n=Math.min(n,h.settings.maxOptions)),n>0&&(O=!0)
const y=(e,t)=>{let i=u[e]
if(void 0!==i){let e=p[i]
if(void 0!==e)return[i,e.fragment]}let s=document.createDocumentFragment()
return i=p.length,p.push({fragment:s,order:t,optgroup:e}),[i,s]}
for(t=0;t<n;t++){let e=m.items[t]
if(!e)continue
let n=e.id,l=h.options[n]
if(void 0===l)continue
let a=N(n),d=h.getOption(a,!0)
for(h.settings.hideSelected||d.classList.toggle("selected",h.items.includes(a)),o=l[h.settings.optgroupField]||"",i=0,s=(r=Array.isArray(o)?o:[o])&&r.length;i<s;i++){o=r[i]
let e=l.$order,t=h.optgroups[o]
var w
if(void 0===t&&"function"==typeof h.settings.optionGroupRegister)(w=h.settings.optionGroupRegister.apply(h,[o]))&&h.registerOptionGroup(w)
t=h.optgroups[o],void 0===t?o="":e=t.$order
const[s,a]=y(o,e)
i>0&&(d=d.cloneNode(!0),ie(d,{id:l.$id+"-clone-"+i,"aria-selected":null}),d.classList.add("ts-cloned"),J(d,"active"),h.activeOption&&h.activeOption.dataset.value==n&&c&&c.dataset.group===o.toString()&&(v=d)),a.appendChild(d),""!=o&&(u[o]=s)}}var S
h.settings.lockOptgroupOrder&&p.sort((e,t)=>e.order-t.order),l=document.createDocumentFragment(),B(p,e=>{let t=e.fragment,i=e.optgroup
if(!t||!t.children.length)return
let s=h.optgroups[i]
if(void 0!==s){let e=document.createDocumentFragment(),i=h.render("optgroup_header",s)
z(e,i),z(e,t)
let n=h.render("optgroup",{group:s,options:e})
z(l,n)}else z(l,t)}),b.innerHTML="",z(b,l),h.isDropdownContentStale=!1,h.settings.highlight&&(S=b.querySelectorAll("span.highlight"),Array.prototype.forEach.call(S,function(e){var t=e.parentNode
t.replaceChild(e.firstChild,e),t.normalize()}),m.query.length&&m.tokens.length&&B(m.tokens,e=>{ne(b,e.regex)}))
var _=e=>{let t=h.render(e,{input:g})
return t&&(O=!0,b.insertBefore(t,b.firstChild)),t}
if(h.loading?_("loading"):h.settings.shouldLoad.call(h,g)?0===m.items.length&&_("no_results"):_("not_loading"),(a=h.canCreate(g))&&(d=_("option_create")),h.hasOptions=m.items.length>0||a,O){if(m.items.length>0){if(v||"single"!==h.settings.mode||null==h.items[0]||(v=h.getOption(h.items[0])),!b.contains(v)){let e=0
d&&!h.settings.addPrecedence&&(e=1),v=h.selectable()[e]}}else d&&(v=d)
e&&!h.isOpen&&(h.open(),h.scrollToOption(v,"auto")),h.setActiveOption(v)}else h.clearActiveOption(),e&&h.isOpen&&h.close(!1)}selectable(){return this.dropdown_content.querySelectorAll("[data-selectable]")}addOption(e,t=!1){const i=this
if(Array.isArray(e))return i.addOptions(e,t),!1
const s=P(e[i.settings.valueField])
return null===s||i.options.hasOwnProperty(s)?(i.updateOption(e[i.settings.valueField],e),!1):(e.$order=e.$order||++i.order,e.$id=i.inputId+"-opt-"+e.$order,i.options[s]=e,i.isDropdownContentStale=!0,t&&(i.userOptions[s]=t,i.trigger("option_add",s,e)),s)}addOptions(e,t=!1){B(e,e=>{this.addOption(e,t)})}registerOption(e){return this.addOption(e)}registerOptionGroup(e){var t=P(e[this.settings.optgroupValueField])
return null!==t&&(e.$order=e.$order||++this.order,this.optgroups[t]=e,t)}addOptionGroup(e,t){var i
t[this.settings.optgroupValueField]=e,(i=this.registerOptionGroup(t))&&this.trigger("optgroup_add",i,t)}removeOptionGroup(e){this.optgroups.hasOwnProperty(e)&&(delete this.optgroups[e],this.clearCache(),this.trigger("optgroup_remove",e))}clearOptionGroups(){this.optgroups={},this.clearCache(),this.trigger("optgroup_clear")}updateOption(e,t){const i=this
var s,n
const o=P(e),r=P(t[i.settings.valueField])
if(null===o)return
const l=i.options[o]
if(null==l)return
if("string"!=typeof r)throw new Error("Value must be set in option data")
const a=i.getOption(o),c=i.getItem(o)
if(t.$order=t.$order||l.$order,delete i.options[o],i.uncacheValue(r),i.options[r]=t,a){if(i.dropdown_content.contains(a)){const e=i._render("option",t)
se(a,e),i.activeOption===a&&i.setActiveOption(e)}a.remove()}c&&(-1!==(n=i.items.indexOf(o))&&i.items.splice(n,1,r),s=i._render("item",t),c.classList.contains("active")&&Q(s,"active"),se(c,s)),i.isDropdownContentStale=!0}removeOption(e,t){const i=this
e=N(e),i.uncacheValue(e),delete i.userOptions[e],delete i.options[e],i.isDropdownContentStale=!0,i.trigger("option_remove",e),i.removeItem(e,t)}clearOptions(e){const t=(e||this.clearFilter).bind(this)
this.loadedSearches={},this.userOptions={},this.clearCache()
const i={}
B(this.options,(e,s)=>{t(e,s)&&(i[s]=e)}),this.options=this.sifter.items=i,this.isDropdownContentStale=!0,this.trigger("option_clear")}clearFilter(e,t){return this.items.indexOf(t)>=0}getOption(e,t=!1){const i=P(e)
if(null===i)return null
const s=this.options[i]
if(null!=s){if(s.$div)return s.$div
if(t)return this._render("option",s)}return null}getAdjacent(e,t,i="option"){var s
if(!e)return null
s="item"==i?this.controlChildren():this.dropdown_content.querySelectorAll("[data-selectable]")
for(let i=0;i<s.length;i++)if(s[i]==e)return t>0?s[i+1]:s[i-1]
return null}getItem(e){if("object"==typeof e)return e
var t=P(e)
return null!==t?this.control.querySelector(`[data-value="${M(t)}"]`):null}addItems(e,t){var i=this,s=Array.isArray(e)?e:[e]
const n=(s=s.filter(e=>-1===i.items.indexOf(e)))[s.length-1]
s.forEach(e=>{i.isPending=e!==n,i.addItem(e,t)})}addItem(e,t){j(this,t?[]:["change","dropdown_close"],()=>{var i,s
const n=this,o=n.settings.mode,r=P(e)
if((!r||-1===n.items.indexOf(r)||("single"===o&&n.close(),"single"!==o&&n.settings.duplicates))&&null!==r&&n.options.hasOwnProperty(r)&&("single"===o&&n.clear(t),"multi"!==o||!n.isFull())){if(i=n._render("item",n.options[r]),n.control.contains(i)&&(i=i.cloneNode(!0)),s=n.isFull(),n.items.splice(n.caretPos,0,r),n.insertAtCaret(i),n.isSetup){if(!n.isPending&&n.settings.hideSelected){let e=n.getOption(r),t=n.getAdjacent(e,1)
t&&n.setActiveOption(t)}n.settings.clearAfterSelect&&n.setTextboxValue(),n.isPending||n.settings.closeAfterSelect||n.refreshOptions(n.isFocused&&"single"!==o),0!=n.settings.closeAfterSelect&&n.isFull()?n.close():n.isPending||n.positionDropdown(),n.trigger("item_add",r,i),n.isPending||n.updateOriginalInput({silent:t})}(!n.isPending||!s&&n.isFull())&&(n.inputState(),n.refreshState())}})}removeItem(e=null,t){const i=this
if(!(e=i.getItem(e)))return
var s,n
const o=e.dataset.value
s=te(e),e.remove(),e.classList.contains("active")&&(n=i.activeItems.indexOf(e),i.activeItems.splice(n,1),J(e,"active")),i.items.splice(s,1),i.isDropdownContentStale=!0,!i.settings.persist&&i.userOptions.hasOwnProperty(o)&&i.removeOption(o,t),s<i.caretPos&&i.setCaret(i.caretPos-1),i.updateOriginalInput({silent:t}),i.refreshState(),i.positionDropdown(),i.trigger("item_remove",o,e)}createItem(e=null,t=()=>{}){3===arguments.length&&(t=arguments[2]),"function"!=typeof t&&(t=()=>{})
var i,s=this,n=s.caretPos
if(e=e||s.inputValue(),!s.canCreate(e)){return P(e)&&this.options[e]&&s.addItem(e),t(),!1}s.lock()
var o=!1,r=e=>{if(s.unlock(),!e||"object"!=typeof e)return t()
var i=P(e[s.settings.valueField])
if("string"!=typeof i)return t()
s.setTextboxValue(),s.addOption(e,!0),s.setCaret(n),s.addItem(i),t(e),o=!0}
return i="function"==typeof s.settings.create?s.settings.create.call(this,e,r):{[s.settings.labelField]:e,[s.settings.valueField]:e},o||r(i),!0}refreshItems(){var e=this
e.isDropdownContentStale=!0,e.isSetup&&e.addItems(e.items),e.updateOriginalInput(),e.refreshState()}refreshState(){const e=this
e.refreshValidityState()
const t=e.isFull(),i=e.isLocked
e.wrapper.classList.toggle("rtl",e.rtl)
const s=e.wrapper.classList
var n
s.toggle("focus",e.isFocused),s.toggle("disabled",e.isDisabled),s.toggle("readonly",e.isReadOnly),s.toggle("required",e.isRequired),s.toggle("invalid",!e.isValid),s.toggle("locked",i),s.toggle("full",t),s.toggle("input-active",e.isFocused&&!e.isInputHidden),s.toggle("dropdown-active",e.isOpen),s.toggle("has-options",(n=e.options,0===Object.keys(n).length)),s.toggle("has-items",e.items.length>0)}refreshValidityState(){var e=this
e.input.validity&&(e.isValid=e.input.validity.valid,e.isInvalid=!e.isValid)}isFull(){return null!==this.settings.maxItems&&this.items.length>=this.settings.maxItems}updateOriginalInput(e={}){const t=this
var i,s
const n=t.input.querySelector('option[value=""]')
if(t.is_select_tag){const o=[],r=t.input.querySelectorAll("option:checked").length
function l(e,i,s){return e||(e=K('<option value="'+D(i)+'">'+D(s)+"</option>")),e!=n&&t.input.append(e),o.push(e),(e!=n||r>0||"multi"==t.settings.mode)&&(e.selected=!0),e}t.input.querySelectorAll("option:checked").forEach(e=>{e.selected=!1}),0==t.items.length&&"single"==t.settings.mode?l(n,"",""):t.items.forEach(e=>{if(i=t.options[e],s=i[t.settings.labelField]||"",o.includes(i.$option)){l(t.input.querySelector(`option[value="${M(e)}"]:not(:checked)`),e,s)}else i.$option=l(i.$option,e,s)})}else t.input.value=t.getValue()
t.isSetup&&(e.silent||t.trigger("change",t.getValue()))}open(){var e=this
e.isLocked||e.isOpen||"multi"===e.settings.mode&&e.isFull()||(e.isOpen=!0,ie(e.focus_node,{"aria-expanded":"true"}),e.refreshState(),W(e.dropdown,{visibility:"hidden",display:"block"}),e.positionDropdown(),W(e.dropdown,{visibility:"visible",display:"block"}),e.focus(),e.trigger("dropdown_open",e.dropdown))}close(e=!0){var t=this,i=t.isOpen
e&&(t.setTextboxValue(),"single"===t.settings.mode&&t.items.length&&t.inputState()),t.isOpen=!1,ie(t.focus_node,{"aria-expanded":"false"}),W(t.dropdown,{display:"none"}),t.settings.hideSelected&&t.clearActiveOption(),t.refreshState(),i&&t.trigger("dropdown_close",t.dropdown)}positionDropdown(){if("body"===this.settings.dropdownParent){var e=this.control,t=e.getBoundingClientRect(),i=e.offsetHeight+t.top+window.scrollY,s=t.left+window.scrollX
W(this.dropdown,{width:t.width+"px",top:i+"px",left:s+"px"})}}clear(e){var t=this
if(t.items.length){var i=t.controlChildren()
B(i,e=>{t.removeItem(e,!0)}),t.inputState(),e||t.updateOriginalInput(),t.trigger("clear")}}insertAtCaret(e){const t=this,i=t.caretPos,s=t.control
s.insertBefore(e,s.children[i]||null),t.setCaret(i+1)}deleteSelection(e){var t,i,s,n,o,r=this
t=e&&8===e.keyCode?-1:1,i={start:(o=r.control_input).selectionStart||0,length:(o.selectionEnd||0)-(o.selectionStart||0)}
const l=[]
if(r.activeItems.length)n=ee(r.activeItems,t),s=te(n),t>0&&s++,B(r.activeItems,e=>l.push(e))
else if((r.isFocused||"single"===r.settings.mode)&&r.items.length){const e=r.controlChildren()
let s
t<0&&0===i.start&&0===i.length?s=e[r.caretPos-1]:t>0&&i.start===r.inputValue().length&&(s=e[r.caretPos]),void 0!==s&&l.push(s)}if(!r.shouldDelete(l,e))return!1
for($(e,!0),void 0!==s&&r.setCaret(s);l.length;)r.removeItem(l.pop())
return r.inputState(),r.positionDropdown(),r.refreshOptions(!1),!0}shouldDelete(e,t){const i=e.map(e=>e.dataset.value)
return!(!i.length||"function"==typeof this.settings.onDelete&&!1===this.settings.onDelete.call(this,i,t))}advanceSelection(e,t){var i,s,n=this
n.rtl&&(e*=-1),n.inputValue().length||(R(oe,t)||R("shiftKey",t)?(s=(i=n.getLastActive(e))?i.classList.contains("active")?n.getAdjacent(i,e,"item"):i:e>0?n.control_input.nextElementSibling:n.control_input.previousElementSibling)&&(s.classList.contains("active")&&n.removeActiveItem(i),n.setActiveItemClass(s)):n.moveCaret(e))}moveCaret(e){}getLastActive(e){let t=this.control.querySelector(".last-active")
if(t)return t
var i=this.control.querySelectorAll(".active")
return i?ee(i,e):void 0}setCaret(e){this.caretPos=this.items.length}controlChildren(){return Array.from(this.control.querySelectorAll("[data-ts-item]"))}lock(){this.setLocked(!0)}unlock(){this.setLocked(!1)}setLocked(e=this.isReadOnly||this.isDisabled){this.isLocked=e,this.refreshState()}disable(){this.setDisabled(!0),this.close()}enable(){this.setDisabled(!1)}setDisabled(e){this.focus_node.tabIndex=e?-1:this.tabIndex,this.isDisabled=e,this.input.disabled=e,this.control_input.disabled=e,this.setLocked()}setReadOnly(e){this.isReadOnly=e,this.input.readOnly=e,this.control_input.readOnly=e,this.setLocked()}destroy(){var e=this,t=e.revertSettings
e.trigger("destroy"),e.off(),e.wrapper.remove(),e.dropdown.remove(),e.input.innerHTML=t.innerHTML,e.input.tabIndex=t.tabIndex,J(e.input,"tomselected","ts-hidden-accessible"),e._destroy(),delete e.input.tomselect}render(e,t){var i,s
const n=this
if("function"!=typeof this.settings.render[e])return null
if(!(s=n.settings.render[e].call(this,t,D)))return null
if(s=K(s),"option"===e||"option_create"===e?t[n.settings.disabledField]?ie(s,{"aria-disabled":"true"}):ie(s,{"data-selectable":""}):"optgroup"===e&&(i=t.group[n.settings.optgroupValueField],ie(s,{"data-group":i}),t.group[n.settings.disabledField]&&ie(s,{"data-disabled":""})),"option"===e||"item"===e){const i=N(t[n.settings.valueField])
ie(s,{"data-value":i}),"item"===e?(Q(s,n.settings.itemClass),ie(s,{"data-ts-item":""})):(Q(s,n.settings.optionClass),ie(s,{role:"option",id:t.$id}),t.$div=s,n.options[i]=t)}return s}_render(e,t){const i=this.render(e,t)
if(null==i)throw"HTMLElement expected"
return i}clearCache(){B(this.options,e=>{e.$div&&(e.$div.remove(),delete e.$div)})}uncacheValue(e){const t=this.getOption(e)
t&&t.remove()}canCreate(e){return this.settings.create&&e.length>0&&this.settings.createFilter.call(this,e)}hook(e,t,i){var s=this,n=s[t]
s[t]=function(){var t,o
return"after"===e&&(t=n.apply(s,arguments)),o=i.apply(s,arguments),"instead"===e?o:("before"===e&&(t=n.apply(s,arguments)),t)}}}return ce.define("change_listener",function(){q(this.input,"change",()=>{this.sync()})}),ce.define("checkbox_options",function(e){var t=this,i=t.onOptionSelect
t.settings.hideSelected=!1
const s=Object.assign({className:"tomselect-checkbox",checkedClassNames:void 0,uncheckedClassNames:void 0},e)
var n=function(e,t){t?(e.checked=!0,s.uncheckedClassNames&&e.classList.remove(...s.uncheckedClassNames),s.checkedClassNames&&e.classList.add(...s.checkedClassNames)):(e.checked=!1,s.checkedClassNames&&e.classList.remove(...s.checkedClassNames),s.uncheckedClassNames&&e.classList.add(...s.uncheckedClassNames))},o=function(e){setTimeout(()=>{var t=e.querySelector("input."+s.className)
t instanceof HTMLInputElement&&n(t,e.classList.contains("selected"))},1)}
t.hook("after","setupTemplates",()=>{var e=t.settings.render.option
t.settings.render.option=(i,o)=>{var r=K(e.call(t,i,o)),l=document.createElement("input")
s.className&&l.classList.add(s.className),l.addEventListener("click",function(e){$(e)}),l.type="checkbox"
const a=P(i[t.settings.valueField])
return n(l,!!(a&&t.items.indexOf(a)>-1)),r.prepend(l),r}}),t.on("item_remove",e=>{var i=t.getOption(e)
i&&(i.classList.remove("selected"),o(i))}),t.on("item_add",e=>{var i=t.getOption(e)
i&&o(i)}),t.hook("instead","onOptionSelect",(e,s)=>{if(s.classList.contains("selected"))return s.classList.remove("selected"),t.removeItem(s.dataset.value),t.refreshOptions(),void $(e,!0)
i.call(t,e,s),o(s)})}),ce.define("clear_button",function(e){const t=this,i=Object.assign({className:"clear-button",title:"Clear All",role:"button",tabindex:0,html:e=>`<div class="${e.className}" title="${e.title}" role="${e.role}" tabindex="${e.tabindex}">&times;</div>`},e)
t.on("initialize",()=>{var e=K(i.html(i))
e.addEventListener("click",e=>{t.isLocked||(t.clear(),"single"===t.settings.mode&&t.settings.allowEmptyOption&&t.addItem(""),t.refreshOptions(!1),e.preventDefault(),e.stopPropagation())}),t.control.appendChild(e)})}),ce.define("drag_drop",function(){var e=this
if("multi"!==e.settings.mode)return
var t=e.lock,i=e.unlock
let s,n=!0
e.hook("after","setupTemplates",()=>{var t=e.settings.render.item
e.settings.render.item=(i,o)=>{const r=K(t.call(e,i,o))
ie(r,{draggable:"true"})
const l=e=>{e.preventDefault(),r.classList.add("ts-drag-over"),a(r,s)},a=(e,t)=>{var i,s,n
void 0!==t&&(((e,t)=>{do{var i
if(e==(t=null==(i=t)?void 0:i.previousElementSibling))return!0}while(t&&t.previousElementSibling)
return!1})(t,r)?(s=t,null==(n=(i=e).parentNode)||n.insertBefore(s,i.nextSibling)):((e,t)=>{var i
null==(i=e.parentNode)||i.insertBefore(t,e)})(e,t))}
return q(r,"mousedown",e=>{n||$(e),e.stopPropagation()}),q(r,"dragstart",e=>{s=r,setTimeout(()=>{r.classList.add("ts-dragging")},0)}),q(r,"dragenter",l),q(r,"dragover",l),q(r,"dragleave",()=>{r.classList.remove("ts-drag-over")}),q(r,"dragend",()=>{var t
document.querySelectorAll(".ts-drag-over").forEach(e=>e.classList.remove("ts-drag-over")),null==(t=s)||t.classList.remove("ts-dragging"),s=void 0
var i=[]
e.control.querySelectorAll("[data-value]").forEach(e=>{if(e.dataset.value){let t=e.dataset.value
t&&i.push(t)}}),e.setValue(i)}),r}}),e.hook("instead","lock",()=>(n=!1,t.call(e))),e.hook("instead","unlock",()=>(n=!0,i.call(e)))}),ce.define("dropdown_header",function(e){const t=this,i=Object.assign({title:"Untitled",headerClass:"dropdown-header",titleRowClass:"dropdown-header-title",labelClass:"dropdown-header-label",closeClass:"dropdown-header-close",html:e=>'<div class="'+e.headerClass+'"><div class="'+e.titleRowClass+'"><span class="'+e.labelClass+'">'+e.title+'</span><a class="'+e.closeClass+'">&times;</a></div></div>'},e)
t.on("initialize",()=>{var e=K(i.html(i)),s=e.querySelector("."+i.closeClass)
s&&s.addEventListener("click",e=>{$(e,!0),t.close()}),t.dropdown.insertBefore(e,t.dropdown.firstChild)})}),ce.define("caret_position",function(){var e=this
e.hook("instead","setCaret",t=>{"single"!==e.settings.mode&&e.control.contains(e.control_input)?(t=Math.max(0,Math.min(e.items.length,t)))==e.caretPos||e.isPending||e.controlChildren().forEach((i,s)=>{s<t?e.control_input.insertAdjacentElement("beforebegin",i):e.control.appendChild(i)}):t=e.items.length,e.caretPos=t}),e.hook("instead","moveCaret",t=>{if(!e.isFocused)return
const i=e.getLastActive(t)
if(i){const s=te(i)
e.setCaret(t>0?s+1:s),e.setActiveItem(),J(i,"last-active")}else e.setCaret(e.caretPos+t)})}),ce.define("dropdown_input",function(){const e=this
e.settings.shouldOpen=!0,e.hook("before","setup",()=>{var t
e.focus_node=e.control,Q(e.control_input,"dropdown-input")
const i=K('<div class="dropdown-input-wrap">')
i.append(e.control_input),e.dropdown.insertBefore(i,e.dropdown.firstChild)
const s=K('<input class="items-placeholder" tabindex="-1" />')
s.placeholder=e.settings.placeholder||"",e.control.append(s)
const n=null==(t=e.input)?void 0:t.getAttribute("aria-label")
n&&s.setAttribute("aria-label",n)}),e.on("initialize",()=>{e.control_input.addEventListener("keydown",t=>{switch(t.keyCode){case 27:return e.isOpen&&($(t,!0),e.close()),void e.clearActiveItems()
case 9:e.focus_node.tabIndex=-1}return e.onKeyDown.call(e,t)}),e.on("blur",()=>{e.focus_node.tabIndex=e.isDisabled?-1:e.tabIndex}),e.on("dropdown_open",()=>{e.control_input.focus()})
const t=e.onBlur
e.hook("instead","onBlur",i=>{if(!i||i.relatedTarget!=e.control_input)return t.call(e)}),q(e.control_input,"blur",()=>e.onBlur()),e.hook("before","close",()=>{e.isOpen&&e.focus_node.focus({preventScroll:!0})})})}),ce.define("input_autogrow",function(){var e=this
e.on("initialize",()=>{var t=document.createElement("span"),i=e.control_input
t.style.cssText="position:absolute; top:-99999px; left:-99999px; width:auto; padding:0; white-space:pre; ",e.wrapper.appendChild(t)
for(const e of["letterSpacing","fontSize","fontFamily","fontWeight","textTransform"])t.style[e]=i.style[e]
var s=()=>{t.textContent=i.value,i.style.width=t.clientWidth+"px"}
s(),e.on("update item_add item_remove",s),q(i,"input",s),q(i,"keyup",s),q(i,"blur",s),q(i,"update",s)})}),ce.define("no_backspace_delete",function(){var e=this,t=e.deleteSelection
this.hook("instead","deleteSelection",i=>!!e.activeItems.length&&t.call(e,i))}),ce.define("no_active_items",function(){this.hook("instead","setActiveItem",()=>{}),this.hook("instead","selectAll",()=>{})}),ce.define("optgroup_columns",function(){var e=this,t=e.onKeyDown
e.hook("instead","onKeyDown",i=>{var s,n,o,r
if(!e.isOpen||37!==i.keyCode&&39!==i.keyCode)return t.call(e,i)
e.ignoreHover=!0,r=Z(e.activeOption,"[data-group]"),s=te(e.activeOption,"[data-selectable]"),r&&(r=37===i.keyCode?r.previousSibling:r.nextSibling)&&(n=(o=r.querySelectorAll("[data-selectable]"))[Math.min(o.length-1,s)])&&e.setActiveOption(n)})}),ce.define("remove_button",function(e){const t=this,i=Object.assign({label:"×",title:"Remove",className:"remove",tabindex:-1,role:"button",html:e=>{var t
const i=document.createElement("div")
return i.className=e.className||"",i.title=e.title||"",i.setAttribute("role",e.role||"button"),i.tabIndex=null!=(t=e.tabindex)?t:-1,i.textContent=e.label||"",i}},e)
t.hook("after","setupTemplates",()=>{var e=t.settings.render.item
t.settings.render.item=(s,n)=>{var o=K(e.call(t,s,n)),r=K(i.html(i))
return o.appendChild(r),q(r,"mousedown",e=>{$(e,!0)}),q(r,"click",e=>{t.isLocked||($(e,!0),t.isLocked||t.shouldDelete([o],e)&&(t.removeItem(o),t.refreshOptions(!1),t.inputState()))}),o}})}),ce.define("restore_on_backspace",function(e){const t=this,i=Object.assign({text:e=>e[t.settings.labelField]},e)
t.on("item_remove",function(e){if(t.isFocused&&""===t.control_input.value.trim()){var s=t.options[e]
s&&t.setTextboxValue(i.text.call(t,s))}})}),ce.define("virtual_scroll",function(){const e=this,t=e.canLoad,i=e.clearActiveOption,s=e.loadCallback
var n,o,r,l={},a=!1,c=[],d=!1,u=[],p=[]
if(e.settings.shouldLoadMore||(e.settings.shouldLoadMore=()=>{if(n.clientHeight/(n.scrollHeight-n.scrollTop)>.9)return!0
if(e.activeOption){var t=e.selectable()
if(Array.from(t).indexOf(e.activeOption)>=t.length-2)return!0}return!1}),!e.settings.firstUrl)throw"virtual_scroll plugin requires a firstUrl() method"
e.settings.sortField=[{field:"$order"},{field:"$score"}]
const h=t=>!(null!==e.settings.maxOptions&&"number"==typeof e.settings.maxOptions&&n.children.length>=e.settings.maxOptions)&&!(!(t in l)||!l[t]),g=(t,i)=>e.items.indexOf(i)>=0||c.indexOf(i)>=0
e.setNextUrl=(e,t)=>{l[e]=t},e.getUrl=t=>{if(t in l){const e=l[t]
return l[t]=!1,e}return e.clearPagination(),e.settings.firstUrl.call(e,t)},e.clearPagination=()=>{l={}},e.hook("instead","clearActiveOption",()=>{if(!a)return i.call(e)}),e.hook("instead","canLoad",i=>i in l?h(i):t.call(e,i)),e.hook("instead","loadCallback",(t,i)=>{if(a){if(o){const i=t[0]
void 0!==i&&(o.dataset.value=i[e.settings.valueField])}}else{const t=""!==e.lastValue?(t,i)=>e.items.indexOf(i)>=0||p.indexOf(i)>=0:g
e.clearOptions(t)}s.call(e,t,i),a||d||(d=!0,""===e.lastValue&&(c=Object.keys(e.options),r=l[""],u=Object.values(e.options))),a=!1}),e.hook("before","refreshOptions",()=>{e.activeOption&&"option"!==e.activeOption.getAttribute("role")&&e.setActiveOption(e.activeOption.previousElementSibling)}),e.hook("after","refreshOptions",()=>{const t=e.lastValue
var i
h(t)?(i=e.render("loading_more",{query:t}))&&(i.setAttribute("data-selectable",""),o=i):t in l&&!n.querySelector(".no-results")&&(i=e.render("no_more_results",{query:t})),i&&(Q(i,e.settings.optionClass),n.append(i))})
const f=()=>{d&&(e.addOptions(u),e.clearOptions(g),r&&(l[""]=r))}
e.on("type",t=>{""===t&&(f(),e.refreshOptions(!1))}),e.on("dropdown_close",f),e.on("initialize",()=>{p=Object.keys(e.options),c=Object.keys(e.options),n=e.dropdown_content,e.settings.render=Object.assign({},{loading_more:()=>'<div class="loading-more-results">Loading more results ... </div>',no_more_results:()=>'<div class="no-more-results">No more results</div>'},e.settings.render),n.addEventListener("scroll",()=>{e.settings.shouldLoadMore.call(e)&&h(e.lastValue)&&(a||(a=!0,e.load.call(e,e.lastValue)))})})}),ce})
var tomSelect=function(e,t){return new TomSelect(e,t)}
//# sourceMappingURL=tom-select.complete.min.js.map


/***/ },

/***/ "./node_modules/nouislider/dist/nouislider.mjs"
/*!*****************************************************!*\
  !*** ./node_modules/nouislider/dist/nouislider.mjs ***!
  \*****************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PipsMode: () => (/* binding */ PipsMode),
/* harmony export */   PipsType: () => (/* binding */ PipsType),
/* harmony export */   create: () => (/* binding */ initialize),
/* harmony export */   cssClasses: () => (/* binding */ cssClasses),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

var PipsMode;
(function (PipsMode) {
    PipsMode["Range"] = "range";
    PipsMode["Steps"] = "steps";
    PipsMode["Positions"] = "positions";
    PipsMode["Count"] = "count";
    PipsMode["Values"] = "values";
})(PipsMode || (PipsMode = {}));
var PipsType;
(function (PipsType) {
    PipsType[PipsType["None"] = -1] = "None";
    PipsType[PipsType["NoValue"] = 0] = "NoValue";
    PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
    PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
})(PipsType || (PipsType = {}));
//region Helper Methods
function isValidFormatter(entry) {
    return isValidPartialFormatter(entry) && typeof entry.from === "function";
}
function isValidPartialFormatter(entry) {
    // partial formatters only need a to function and not a from function
    return typeof entry === "object" && typeof entry.to === "function";
}
function removeElement(el) {
    el.parentElement.removeChild(el);
}
function isSet(value) {
    return value !== null && value !== undefined;
}
// Bindable version
function preventDefault(e) {
    e.preventDefault();
}
// Removes duplicates from an array.
function unique(array) {
    return array.filter(function (a) {
        return !this[a] ? (this[a] = true) : false;
    }, {});
}
// Round a value to the closest 'to'.
function closest(value, to) {
    return Math.round(value / to) * to;
}
// Current position of an element relative to the document.
function offset(elem, orientation) {
    var rect = elem.getBoundingClientRect();
    var doc = elem.ownerDocument;
    var docElem = doc.documentElement;
    var pageOffset = getPageOffset(doc);
    // getBoundingClientRect contains left scroll in Chrome on Android.
    // I haven't found a feature detection that proves this. Worst case
    // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
    if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
        pageOffset.x = 0;
    }
    return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
}
// Checks whether a value is numerical.
function isNumeric(a) {
    return typeof a === "number" && !isNaN(a) && isFinite(a);
}
// Sets a class and removes it after [duration] ms.
function addClassFor(element, className, duration) {
    if (duration > 0) {
        addClass(element, className);
        setTimeout(function () {
            removeClass(element, className);
        }, duration);
    }
}
// Limits a value to 0 - 100
function limit(a) {
    return Math.max(Math.min(a, 100), 0);
}
// Wraps a variable as an array, if it isn't one yet.
// Note that an input array is returned by reference!
function asArray(a) {
    return Array.isArray(a) ? a : [a];
}
// Counts decimals
function countDecimals(numStr) {
    numStr = String(numStr);
    var pieces = numStr.split(".");
    return pieces.length > 1 ? pieces[1].length : 0;
}
// http://youmightnotneedjquery.com/#add_class
function addClass(el, className) {
    if (el.classList && !/\s/.test(className)) {
        el.classList.add(className);
    }
    else {
        el.className += " " + className;
    }
}
// http://youmightnotneedjquery.com/#remove_class
function removeClass(el, className) {
    if (el.classList && !/\s/.test(className)) {
        el.classList.remove(className);
    }
    else {
        el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
}
// https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
}
// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
function getPageOffset(doc) {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
    var x = supportPageOffset
        ? window.pageXOffset
        : isCSS1Compat
            ? doc.documentElement.scrollLeft
            : doc.body.scrollLeft;
    var y = supportPageOffset
        ? window.pageYOffset
        : isCSS1Compat
            ? doc.documentElement.scrollTop
            : doc.body.scrollTop;
    return {
        x: x,
        y: y,
    };
}
// we provide a function to compute constants instead
// of accessing window.* as soon as the module needs it
// so that we do not compute anything if not needed
function getActions() {
    // Determine the events to bind. IE11 implements pointerEvents without
    // a prefix, which breaks compatibility with the IE10 implementation.
    return window.navigator.pointerEnabled
        ? {
            start: "pointerdown",
            move: "pointermove",
            end: "pointerup",
        }
        : window.navigator.msPointerEnabled
            ? {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp",
            }
            : {
                start: "mousedown touchstart",
                move: "mousemove touchmove",
                end: "mouseup touchend",
            };
}
// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
// Issue #785
function getSupportsPassive() {
    var supportsPassive = false;
    /* eslint-disable */
    try {
        var opts = Object.defineProperty({}, "passive", {
            get: function () {
                supportsPassive = true;
            },
        });
        // @ts-ignore
        window.addEventListener("test", null, opts);
    }
    catch (e) { }
    /* eslint-enable */
    return supportsPassive;
}
function getSupportsTouchActionNone() {
    return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
}
//endregion
//region Range Calculation
// Determine the size of a sub-range in relation to a full range.
function subRangeRatio(pa, pb) {
    return 100 / (pb - pa);
}
// (percentage) How many percent is this value of this range?
function fromPercentage(range, value, startRange) {
    return (value * 100) / (range[startRange + 1] - range[startRange]);
}
// (percentage) Where is this value on this range?
function toPercentage(range, value) {
    return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
}
// (value) How much is this percentage on this range?
function isPercentage(range, value) {
    return (value * (range[1] - range[0])) / 100 + range[0];
}
function getJ(value, arr) {
    var j = 1;
    while (value >= arr[j]) {
        j += 1;
    }
    return j;
}
// (percentage) Input a value, find where, on a scale of 0-100, it applies.
function toStepping(xVal, xPct, value) {
    if (value >= xVal.slice(-1)[0]) {
        return 100;
    }
    var j = getJ(value, xVal);
    var va = xVal[j - 1];
    var vb = xVal[j];
    var pa = xPct[j - 1];
    var pb = xPct[j];
    return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
}
// (value) Input a percentage, find where it is on the specified range.
function fromStepping(xVal, xPct, value) {
    // There is no range group that fits 100
    if (value >= 100) {
        return xVal.slice(-1)[0];
    }
    var j = getJ(value, xPct);
    var va = xVal[j - 1];
    var vb = xVal[j];
    var pa = xPct[j - 1];
    var pb = xPct[j];
    return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
}
// (percentage) Get the step that applies at a certain value.
function getStep(xPct, xSteps, snap, value) {
    if (value === 100) {
        return value;
    }
    var j = getJ(value, xPct);
    var a = xPct[j - 1];
    var b = xPct[j];
    // If 'snap' is set, steps are used as fixed points on the slider.
    if (snap) {
        // Find the closest position, a or b.
        if (value - a > (b - a) / 2) {
            return b;
        }
        return a;
    }
    if (!xSteps[j - 1]) {
        return value;
    }
    return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
}
//endregion
//region Spectrum
var Spectrum = /** @class */ (function () {
    function Spectrum(entry, snap, singleStep) {
        this.xPct = [];
        this.xVal = [];
        this.xSteps = [];
        this.xNumSteps = [];
        this.xHighestCompleteStep = [];
        this.xSteps = [singleStep || false];
        this.xNumSteps = [false];
        this.snap = snap;
        var index;
        var ordered = [];
        // Map the object keys to an array.
        Object.keys(entry).forEach(function (index) {
            ordered.push([asArray(entry[index]), index]);
        });
        // Sort all entries by value (numeric sort).
        ordered.sort(function (a, b) {
            return a[0][0] - b[0][0];
        });
        // Convert all entries to subranges.
        for (index = 0; index < ordered.length; index++) {
            this.handleEntryPoint(ordered[index][1], ordered[index][0]);
        }
        // Store the actual step values.
        // xSteps is sorted in the same order as xPct and xVal.
        this.xNumSteps = this.xSteps.slice(0);
        // Convert all numeric steps to the percentage of the subrange they represent.
        for (index = 0; index < this.xNumSteps.length; index++) {
            this.handleStepPoint(index, this.xNumSteps[index]);
        }
    }
    Spectrum.prototype.getDistance = function (value) {
        var distances = [];
        for (var index = 0; index < this.xNumSteps.length - 1; index++) {
            distances[index] = fromPercentage(this.xVal, value, index);
        }
        return distances;
    };
    // Calculate the percentual distance over the whole scale of ranges.
    // direction: 0 = backwards / 1 = forwards
    Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
        var xPct_index = 0;
        // Calculate range where to start calculation
        if (value < this.xPct[this.xPct.length - 1]) {
            while (value > this.xPct[xPct_index + 1]) {
                xPct_index++;
            }
        }
        else if (value === this.xPct[this.xPct.length - 1]) {
            xPct_index = this.xPct.length - 2;
        }
        // If looking backwards and the value is exactly at a range separator then look one range further
        if (!direction && value === this.xPct[xPct_index + 1]) {
            xPct_index++;
        }
        if (distances === null) {
            distances = [];
        }
        var start_factor;
        var rest_factor = 1;
        var rest_rel_distance = distances[xPct_index];
        var range_pct = 0;
        var rel_range_distance = 0;
        var abs_distance_counter = 0;
        var range_counter = 0;
        // Calculate what part of the start range the value is
        if (direction) {
            start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
        }
        else {
            start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
        }
        // Do until the complete distance across ranges is calculated
        while (rest_rel_distance > 0) {
            // Calculate the percentage of total range
            range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
            // Detect if the margin, padding or limit is larger then the current range and calculate
            if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                // If larger then take the percentual distance of the whole range
                rel_range_distance = range_pct * start_factor;
                // Rest factor of relative percentual distance still to be calculated
                rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                // Set start factor to 1 as for next range it does not apply.
                start_factor = 1;
            }
            else {
                // If smaller or equal then take the percentual distance of the calculate percentual part of that range
                rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor;
                // No rest left as the rest fits in current range
                rest_factor = 0;
            }
            if (direction) {
                abs_distance_counter = abs_distance_counter - rel_range_distance;
                // Limit range to first range when distance becomes outside of minimum range
                if (this.xPct.length + range_counter >= 1) {
                    range_counter--;
                }
            }
            else {
                abs_distance_counter = abs_distance_counter + rel_range_distance;
                // Limit range to last range when distance becomes outside of maximum range
                if (this.xPct.length - range_counter >= 1) {
                    range_counter++;
                }
            }
            // Rest of relative percentual distance still to be calculated
            rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
        }
        return value + abs_distance_counter;
    };
    Spectrum.prototype.toStepping = function (value) {
        value = toStepping(this.xVal, this.xPct, value);
        return value;
    };
    Spectrum.prototype.fromStepping = function (value) {
        return fromStepping(this.xVal, this.xPct, value);
    };
    Spectrum.prototype.getStep = function (value) {
        value = getStep(this.xPct, this.xSteps, this.snap, value);
        return value;
    };
    Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
        var j = getJ(value, this.xPct);
        // When at the top or stepping down, look at the previous sub-range
        if (value === 100 || (isDown && value === this.xPct[j - 1])) {
            j = Math.max(j - 1, 1);
        }
        return (this.xVal[j] - this.xVal[j - 1]) / size;
    };
    Spectrum.prototype.getNearbySteps = function (value) {
        var j = getJ(value, this.xPct);
        return {
            stepBefore: {
                startValue: this.xVal[j - 2],
                step: this.xNumSteps[j - 2],
                highestStep: this.xHighestCompleteStep[j - 2],
            },
            thisStep: {
                startValue: this.xVal[j - 1],
                step: this.xNumSteps[j - 1],
                highestStep: this.xHighestCompleteStep[j - 1],
            },
            stepAfter: {
                startValue: this.xVal[j],
                step: this.xNumSteps[j],
                highestStep: this.xHighestCompleteStep[j],
            },
        };
    };
    Spectrum.prototype.countStepDecimals = function () {
        var stepDecimals = this.xNumSteps.map(countDecimals);
        return Math.max.apply(null, stepDecimals);
    };
    Spectrum.prototype.hasNoSize = function () {
        return this.xVal[0] === this.xVal[this.xVal.length - 1];
    };
    // Outside testing
    Spectrum.prototype.convert = function (value) {
        return this.getStep(this.toStepping(value));
    };
    Spectrum.prototype.handleEntryPoint = function (index, value) {
        var percentage;
        // Covert min/max syntax to 0 and 100.
        if (index === "min") {
            percentage = 0;
        }
        else if (index === "max") {
            percentage = 100;
        }
        else {
            percentage = parseFloat(index);
        }
        // Check for correct input.
        if (!isNumeric(percentage) || !isNumeric(value[0])) {
            throw new Error("noUiSlider: 'range' value isn't numeric.");
        }
        // Store values.
        this.xPct.push(percentage);
        this.xVal.push(value[0]);
        var value1 = Number(value[1]);
        // NaN will evaluate to false too, but to keep
        // logging clear, set step explicitly. Make sure
        // not to override the 'step' setting with false.
        if (!percentage) {
            if (!isNaN(value1)) {
                this.xSteps[0] = value1;
            }
        }
        else {
            this.xSteps.push(isNaN(value1) ? false : value1);
        }
        this.xHighestCompleteStep.push(0);
    };
    Spectrum.prototype.handleStepPoint = function (i, n) {
        // Ignore 'false' stepping.
        if (!n) {
            return;
        }
        // Step over zero-length ranges (#948);
        if (this.xVal[i] === this.xVal[i + 1]) {
            this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
            return;
        }
        // Factor to range ratio
        this.xSteps[i] =
            fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
        var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
        var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
        var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
        this.xHighestCompleteStep[i] = step;
    };
    return Spectrum;
}());
//endregion
//region Options
/*	Every input option is tested and parsed. This will prevent
    endless validation in internal methods. These tests are
    structured with an item for every option available. An
    option can be marked as required by setting the 'r' flag.
    The testing function is provided with three arguments:
        - The provided value for the option;
        - A reference to the options object;
        - The name for the option;

    The testing function returns false when an error is detected,
    or true when everything is OK. It can also modify the option
    object, to make sure all values can be correctly looped elsewhere. */
//region Defaults
var defaultFormatter = {
    to: function (value) {
        return value === undefined ? "" : value.toFixed(2);
    },
    from: Number,
};
var cssClasses = {
    target: "target",
    base: "base",
    origin: "origin",
    handle: "handle",
    handleLower: "handle-lower",
    handleUpper: "handle-upper",
    touchArea: "touch-area",
    horizontal: "horizontal",
    vertical: "vertical",
    background: "background",
    connect: "connect",
    connects: "connects",
    ltr: "ltr",
    rtl: "rtl",
    textDirectionLtr: "txt-dir-ltr",
    textDirectionRtl: "txt-dir-rtl",
    draggable: "draggable",
    drag: "state-drag",
    tap: "state-tap",
    active: "active",
    tooltip: "tooltip",
    pips: "pips",
    pipsHorizontal: "pips-horizontal",
    pipsVertical: "pips-vertical",
    marker: "marker",
    markerHorizontal: "marker-horizontal",
    markerVertical: "marker-vertical",
    markerNormal: "marker-normal",
    markerLarge: "marker-large",
    markerSub: "marker-sub",
    value: "value",
    valueHorizontal: "value-horizontal",
    valueVertical: "value-vertical",
    valueNormal: "value-normal",
    valueLarge: "value-large",
    valueSub: "value-sub",
};
// Namespaces of internal event listeners
var INTERNAL_EVENT_NS = {
    tooltips: ".__tooltips",
    aria: ".__aria",
};
//endregion
function testStep(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'step' is not numeric.");
    }
    // The step option can still be used to set stepping
    // for linear sliders. Overwritten if set in 'range'.
    parsed.singleStep = entry;
}
function testKeyboardPageMultiplier(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
    }
    parsed.keyboardPageMultiplier = entry;
}
function testKeyboardMultiplier(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
    }
    parsed.keyboardMultiplier = entry;
}
function testKeyboardDefaultStep(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
    }
    parsed.keyboardDefaultStep = entry;
}
function testRange(parsed, entry) {
    // Filter incorrect input.
    if (typeof entry !== "object" || Array.isArray(entry)) {
        throw new Error("noUiSlider: 'range' is not an object.");
    }
    // Catch missing start or end.
    if (entry.min === undefined || entry.max === undefined) {
        throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
    }
    parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
}
function testStart(parsed, entry) {
    entry = asArray(entry);
    // Validate input. Values aren't tested, as the public .val method
    // will always provide a valid location.
    if (!Array.isArray(entry) || !entry.length) {
        throw new Error("noUiSlider: 'start' option is incorrect.");
    }
    // Store the number of handles.
    parsed.handles = entry.length;
    // When the slider is initialized, the .val method will
    // be called with the start options.
    parsed.start = entry;
}
function testSnap(parsed, entry) {
    if (typeof entry !== "boolean") {
        throw new Error("noUiSlider: 'snap' option must be a boolean.");
    }
    // Enforce 100% stepping within subranges.
    parsed.snap = entry;
}
function testAnimate(parsed, entry) {
    if (typeof entry !== "boolean") {
        throw new Error("noUiSlider: 'animate' option must be a boolean.");
    }
    // Enforce 100% stepping within subranges.
    parsed.animate = entry;
}
function testAnimationDuration(parsed, entry) {
    if (typeof entry !== "number") {
        throw new Error("noUiSlider: 'animationDuration' option must be a number.");
    }
    parsed.animationDuration = entry;
}
function testConnect(parsed, entry) {
    var connect = [false];
    var i;
    // Map legacy options
    if (entry === "lower") {
        entry = [true, false];
    }
    else if (entry === "upper") {
        entry = [false, true];
    }
    // Handle boolean options
    if (entry === true || entry === false) {
        for (i = 1; i < parsed.handles; i++) {
            connect.push(entry);
        }
        connect.push(false);
    }
    // Reject invalid input
    else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
        throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
    }
    else {
        connect = entry;
    }
    parsed.connect = connect;
}
function testOrientation(parsed, entry) {
    // Set orientation to an a numerical value for easy
    // array selection.
    switch (entry) {
        case "horizontal":
            parsed.ort = 0;
            break;
        case "vertical":
            parsed.ort = 1;
            break;
        default:
            throw new Error("noUiSlider: 'orientation' option is invalid.");
    }
}
function testMargin(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'margin' option must be numeric.");
    }
    // Issue #582
    if (entry === 0) {
        return;
    }
    parsed.margin = parsed.spectrum.getDistance(entry);
}
function testLimit(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'limit' option must be numeric.");
    }
    parsed.limit = parsed.spectrum.getDistance(entry);
    if (!parsed.limit || parsed.handles < 2) {
        throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
    }
}
function testPadding(parsed, entry) {
    var index;
    if (!isNumeric(entry) && !Array.isArray(entry)) {
        throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
    }
    if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
        throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
    }
    if (entry === 0) {
        return;
    }
    if (!Array.isArray(entry)) {
        entry = [entry, entry];
    }
    // 'getDistance' returns false for invalid values.
    parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
    for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
        // last "range" can't contain step size as it is purely an endpoint.
        if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
            throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
        }
    }
    var totalPadding = entry[0] + entry[1];
    var firstValue = parsed.spectrum.xVal[0];
    var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
    if (totalPadding / (lastValue - firstValue) > 1) {
        throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
    }
}
function testDirection(parsed, entry) {
    // Set direction as a numerical value for easy parsing.
    // Invert connection for RTL sliders, so that the proper
    // handles get the connect/background classes.
    switch (entry) {
        case "ltr":
            parsed.dir = 0;
            break;
        case "rtl":
            parsed.dir = 1;
            break;
        default:
            throw new Error("noUiSlider: 'direction' option was not recognized.");
    }
}
function testBehaviour(parsed, entry) {
    // Make sure the input is a string.
    if (typeof entry !== "string") {
        throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
    }
    // Check if the string contains any keywords.
    // None are required.
    var tap = entry.indexOf("tap") >= 0;
    var drag = entry.indexOf("drag") >= 0;
    var fixed = entry.indexOf("fixed") >= 0;
    var snap = entry.indexOf("snap") >= 0;
    var hover = entry.indexOf("hover") >= 0;
    var unconstrained = entry.indexOf("unconstrained") >= 0;
    var invertConnects = entry.indexOf("invert-connects") >= 0;
    var dragAll = entry.indexOf("drag-all") >= 0;
    var smoothSteps = entry.indexOf("smooth-steps") >= 0;
    if (fixed) {
        if (parsed.handles !== 2) {
            throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
        }
        // Use margin to enforce fixed state
        testMargin(parsed, parsed.start[1] - parsed.start[0]);
    }
    if (invertConnects && parsed.handles !== 2) {
        throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");
    }
    if (unconstrained && (parsed.margin || parsed.limit)) {
        throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
    }
    parsed.events = {
        tap: tap || snap,
        drag: drag,
        dragAll: dragAll,
        smoothSteps: smoothSteps,
        fixed: fixed,
        snap: snap,
        hover: hover,
        unconstrained: unconstrained,
        invertConnects: invertConnects,
    };
}
function testTooltips(parsed, entry) {
    if (entry === false) {
        return;
    }
    if (entry === true || isValidPartialFormatter(entry)) {
        parsed.tooltips = [];
        for (var i = 0; i < parsed.handles; i++) {
            parsed.tooltips.push(entry);
        }
    }
    else {
        entry = asArray(entry);
        if (entry.length !== parsed.handles) {
            throw new Error("noUiSlider: must pass a formatter for all handles.");
        }
        entry.forEach(function (formatter) {
            if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) {
                throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
            }
        });
        parsed.tooltips = entry;
    }
}
function testHandleAttributes(parsed, entry) {
    if (entry.length !== parsed.handles) {
        throw new Error("noUiSlider: must pass a attributes for all handles.");
    }
    parsed.handleAttributes = entry;
}
function testAriaFormat(parsed, entry) {
    if (!isValidPartialFormatter(entry)) {
        throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
    }
    parsed.ariaFormat = entry;
}
function testFormat(parsed, entry) {
    if (!isValidFormatter(entry)) {
        throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
    }
    parsed.format = entry;
}
function testKeyboardSupport(parsed, entry) {
    if (typeof entry !== "boolean") {
        throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
    }
    parsed.keyboardSupport = entry;
}
function testDocumentElement(parsed, entry) {
    // This is an advanced option. Passed values are used without validation.
    parsed.documentElement = entry;
}
function testCssPrefix(parsed, entry) {
    if (typeof entry !== "string" && entry !== false) {
        throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
    }
    parsed.cssPrefix = entry;
}
function testCssClasses(parsed, entry) {
    if (typeof entry !== "object") {
        throw new Error("noUiSlider: 'cssClasses' must be an object.");
    }
    if (typeof parsed.cssPrefix === "string") {
        parsed.cssClasses = {};
        Object.keys(entry).forEach(function (key) {
            parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
        });
    }
    else {
        parsed.cssClasses = entry;
    }
}
// Test all developer settings and parse to assumption-safe values.
function testOptions(options) {
    // To prove a fix for #537, freeze options here.
    // If the object is modified, an error will be thrown.
    // Object.freeze(options);
    var parsed = {
        margin: null,
        limit: null,
        padding: null,
        animate: true,
        animationDuration: 300,
        ariaFormat: defaultFormatter,
        format: defaultFormatter,
    };
    // Tests are executed in the order they are presented here.
    var tests = {
        step: { r: false, t: testStep },
        keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
        keyboardMultiplier: { r: false, t: testKeyboardMultiplier },
        keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
        start: { r: true, t: testStart },
        connect: { r: true, t: testConnect },
        direction: { r: true, t: testDirection },
        snap: { r: false, t: testSnap },
        animate: { r: false, t: testAnimate },
        animationDuration: { r: false, t: testAnimationDuration },
        range: { r: true, t: testRange },
        orientation: { r: false, t: testOrientation },
        margin: { r: false, t: testMargin },
        limit: { r: false, t: testLimit },
        padding: { r: false, t: testPadding },
        behaviour: { r: true, t: testBehaviour },
        ariaFormat: { r: false, t: testAriaFormat },
        format: { r: false, t: testFormat },
        tooltips: { r: false, t: testTooltips },
        keyboardSupport: { r: true, t: testKeyboardSupport },
        documentElement: { r: false, t: testDocumentElement },
        cssPrefix: { r: true, t: testCssPrefix },
        cssClasses: { r: true, t: testCssClasses },
        handleAttributes: { r: false, t: testHandleAttributes },
    };
    var defaults = {
        connect: false,
        direction: "ltr",
        behaviour: "tap",
        orientation: "horizontal",
        keyboardSupport: true,
        cssPrefix: "noUi-",
        cssClasses: cssClasses,
        keyboardPageMultiplier: 5,
        keyboardMultiplier: 1,
        keyboardDefaultStep: 10,
    };
    // AriaFormat defaults to regular format, if any.
    if (options.format && !options.ariaFormat) {
        options.ariaFormat = options.format;
    }
    // Run all options through a testing mechanism to ensure correct
    // input. It should be noted that options might get modified to
    // be handled properly. E.g. wrapping integers in arrays.
    Object.keys(tests).forEach(function (name) {
        // If the option isn't set, but it is required, throw an error.
        if (!isSet(options[name]) && defaults[name] === undefined) {
            if (tests[name].r) {
                throw new Error("noUiSlider: '" + name + "' is required.");
            }
            return;
        }
        tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
    });
    // Forward pips options
    parsed.pips = options.pips;
    // All recent browsers accept unprefixed transform.
    // We need -ms- for IE9 and -webkit- for older Android;
    // Assume use of -webkit- if unprefixed and -ms- are not supported.
    // https://caniuse.com/#feat=transforms2d
    var d = document.createElement("div");
    var msPrefix = d.style.msTransform !== undefined;
    var noPrefix = d.style.transform !== undefined;
    parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
    // Pips don't move, so we can place them using left/top.
    var styles = [
        ["left", "top"],
        ["right", "bottom"],
    ];
    parsed.style = styles[parsed.dir][parsed.ort];
    return parsed;
}
//endregion
function scope(target, options, originalOptions) {
    var actions = getActions();
    var supportsTouchActionNone = getSupportsTouchActionNone();
    var supportsPassive = supportsTouchActionNone && getSupportsPassive();
    // All variables local to 'scope' are prefixed with 'scope_'
    // Slider DOM Nodes
    var scope_Target = target;
    var scope_Base;
    var scope_ConnectBase;
    var scope_Handles;
    var scope_Connects;
    var scope_Pips;
    var scope_Tooltips;
    // Slider state values
    var scope_Spectrum = options.spectrum;
    var scope_Values = [];
    var scope_Locations = [];
    var scope_HandleNumbers = [];
    var scope_ActiveHandlesCount = 0;
    var scope_Events = {};
    var scope_ConnectsInverted = false;
    // Document Nodes
    var scope_Document = target.ownerDocument;
    var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
    var scope_Body = scope_Document.body;
    // For horizontal sliders in standard ltr documents,
    // make .noUi-origin overflow to the left so the document doesn't scroll.
    var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
    // Creates a node, adds it to target, returns the new node.
    function addNodeTo(addTarget, className) {
        var div = scope_Document.createElement("div");
        if (className) {
            addClass(div, className);
        }
        addTarget.appendChild(div);
        return div;
    }
    // Append a origin to the base
    function addOrigin(base, handleNumber) {
        var origin = addNodeTo(base, options.cssClasses.origin);
        var handle = addNodeTo(origin, options.cssClasses.handle);
        addNodeTo(handle, options.cssClasses.touchArea);
        handle.setAttribute("data-handle", String(handleNumber));
        if (options.keyboardSupport) {
            // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
            // 0 = focusable and reachable
            handle.setAttribute("tabindex", "0");
            handle.addEventListener("keydown", function (event) {
                return eventKeydown(event, handleNumber);
            });
        }
        if (options.handleAttributes !== undefined) {
            var attributes_1 = options.handleAttributes[handleNumber];
            Object.keys(attributes_1).forEach(function (attribute) {
                handle.setAttribute(attribute, attributes_1[attribute]);
            });
        }
        handle.setAttribute("role", "slider");
        handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
        if (handleNumber === 0) {
            addClass(handle, options.cssClasses.handleLower);
        }
        else if (handleNumber === options.handles - 1) {
            addClass(handle, options.cssClasses.handleUpper);
        }
        origin.handle = handle;
        return origin;
    }
    // Insert nodes for connect elements
    function addConnect(base, add) {
        if (!add) {
            return false;
        }
        return addNodeTo(base, options.cssClasses.connect);
    }
    // Add handles to the slider base.
    function addElements(connectOptions, base) {
        scope_ConnectBase = addNodeTo(base, options.cssClasses.connects);
        scope_Handles = [];
        scope_Connects = [];
        scope_Connects.push(addConnect(scope_ConnectBase, connectOptions[0]));
        // [::::O====O====O====]
        // connectOptions = [0, 1, 1, 1]
        for (var i = 0; i < options.handles; i++) {
            // Keep a list of all added handles.
            scope_Handles.push(addOrigin(base, i));
            scope_HandleNumbers[i] = i;
            scope_Connects.push(addConnect(scope_ConnectBase, connectOptions[i + 1]));
        }
    }
    // Initialize a single slider.
    function addSlider(addTarget) {
        // Apply classes and data to the target.
        addClass(addTarget, options.cssClasses.target);
        if (options.dir === 0) {
            addClass(addTarget, options.cssClasses.ltr);
        }
        else {
            addClass(addTarget, options.cssClasses.rtl);
        }
        if (options.ort === 0) {
            addClass(addTarget, options.cssClasses.horizontal);
        }
        else {
            addClass(addTarget, options.cssClasses.vertical);
        }
        var textDirection = getComputedStyle(addTarget).direction;
        if (textDirection === "rtl") {
            addClass(addTarget, options.cssClasses.textDirectionRtl);
        }
        else {
            addClass(addTarget, options.cssClasses.textDirectionLtr);
        }
        return addNodeTo(addTarget, options.cssClasses.base);
    }
    function addTooltip(handle, handleNumber) {
        if (!options.tooltips || !options.tooltips[handleNumber]) {
            return false;
        }
        return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
    }
    function isSliderDisabled() {
        return scope_Target.hasAttribute("disabled");
    }
    // Disable the slider dragging if any handle is disabled
    function isHandleDisabled(handleNumber) {
        var handleOrigin = scope_Handles[handleNumber];
        return handleOrigin.hasAttribute("disabled");
    }
    function disable(handleNumber) {
        if (handleNumber !== null && handleNumber !== undefined) {
            scope_Handles[handleNumber].setAttribute("disabled", "");
            scope_Handles[handleNumber].handle.removeAttribute("tabindex");
        }
        else {
            scope_Target.setAttribute("disabled", "");
            scope_Handles.forEach(function (handle) {
                handle.handle.removeAttribute("tabindex");
            });
        }
    }
    function enable(handleNumber) {
        if (handleNumber !== null && handleNumber !== undefined) {
            scope_Handles[handleNumber].removeAttribute("disabled");
            scope_Handles[handleNumber].handle.setAttribute("tabindex", "0");
        }
        else {
            scope_Target.removeAttribute("disabled");
            scope_Handles.forEach(function (handle) {
                handle.removeAttribute("disabled");
                handle.handle.setAttribute("tabindex", "0");
            });
        }
    }
    function removeTooltips() {
        if (scope_Tooltips) {
            removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
            scope_Tooltips.forEach(function (tooltip) {
                if (tooltip) {
                    removeElement(tooltip);
                }
            });
            scope_Tooltips = null;
        }
    }
    // The tooltips option is a shorthand for using the 'update' event.
    function tooltips() {
        removeTooltips();
        // Tooltips are added with options.tooltips in original order.
        scope_Tooltips = scope_Handles.map(addTooltip);
        bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function (values, handleNumber, unencoded) {
            if (!scope_Tooltips || !options.tooltips) {
                return;
            }
            if (scope_Tooltips[handleNumber] === false) {
                return;
            }
            var formattedValue = values[handleNumber];
            if (options.tooltips[handleNumber] !== true) {
                formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
            }
            scope_Tooltips[handleNumber].innerHTML = formattedValue;
        });
    }
    function aria() {
        removeEvent("update" + INTERNAL_EVENT_NS.aria);
        bindEvent("update" + INTERNAL_EVENT_NS.aria, function (values, handleNumber, unencoded, tap, positions) {
            // Update Aria Values for all handles, as a change in one changes min and max values for the next.
            scope_HandleNumbers.forEach(function (index) {
                var handle = scope_Handles[index];
                var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                var now = positions[index];
                // Formatted value for display
                var text = String(options.ariaFormat.to(unencoded[index]));
                // Map to slider range values
                min = scope_Spectrum.fromStepping(min).toFixed(1);
                max = scope_Spectrum.fromStepping(max).toFixed(1);
                now = scope_Spectrum.fromStepping(now).toFixed(1);
                handle.children[0].setAttribute("aria-valuemin", min);
                handle.children[0].setAttribute("aria-valuemax", max);
                handle.children[0].setAttribute("aria-valuenow", now);
                handle.children[0].setAttribute("aria-valuetext", text);
            });
        });
    }
    function getGroup(pips) {
        // Use the range.
        if (pips.mode === PipsMode.Range || pips.mode === PipsMode.Steps) {
            return scope_Spectrum.xVal;
        }
        if (pips.mode === PipsMode.Count) {
            if (pips.values < 2) {
                throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
            }
            // Divide 0 - 100 in 'count' parts.
            var interval = pips.values - 1;
            var spread = 100 / interval;
            var values = [];
            // List these parts and have them handled as 'positions'.
            while (interval--) {
                values[interval] = interval * spread;
            }
            values.push(100);
            return mapToRange(values, pips.stepped);
        }
        if (pips.mode === PipsMode.Positions) {
            // Map all percentages to on-range values.
            return mapToRange(pips.values, pips.stepped);
        }
        if (pips.mode === PipsMode.Values) {
            // If the value must be stepped, it needs to be converted to a percentage first.
            if (pips.stepped) {
                return pips.values.map(function (value) {
                    // Convert to percentage, apply step, return to value.
                    return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                });
            }
            // Otherwise, we can simply use the values.
            return pips.values;
        }
        return []; // pips.mode = never
    }
    function mapToRange(values, stepped) {
        return values.map(function (value) {
            return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
        });
    }
    function generateSpread(pips) {
        function safeIncrement(value, increment) {
            // Avoid floating point variance by dropping the smallest decimal places.
            return Number((value + increment).toFixed(7));
        }
        var group = getGroup(pips);
        var indexes = {};
        var firstInRange = scope_Spectrum.xVal[0];
        var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
        var ignoreFirst = false;
        var ignoreLast = false;
        var prevPct = 0;
        // Create a copy of the group, sort it and filter away all duplicates.
        group = unique(group.slice().sort(function (a, b) {
            return a - b;
        }));
        // Make sure the range starts with the first element.
        if (group[0] !== firstInRange) {
            group.unshift(firstInRange);
            ignoreFirst = true;
        }
        // Likewise for the last one.
        if (group[group.length - 1] !== lastInRange) {
            group.push(lastInRange);
            ignoreLast = true;
        }
        group.forEach(function (current, index) {
            // Get the current step and the lower + upper positions.
            var step;
            var i;
            var q;
            var low = current;
            var high = group[index + 1];
            var newPct;
            var pctDifference;
            var pctPos;
            var type;
            var steps;
            var realSteps;
            var stepSize;
            var isSteps = pips.mode === PipsMode.Steps;
            // When using 'steps' mode, use the provided steps.
            // Otherwise, we'll step on to the next subrange.
            if (isSteps) {
                step = scope_Spectrum.xNumSteps[index];
            }
            // Default to a 'full' step.
            if (!step) {
                step = high - low;
            }
            // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)
            if (high === undefined) {
                high = low;
            }
            // Make sure step isn't 0, which would cause an infinite loop (#654)
            step = Math.max(step, 0.0000001);
            // Find all steps in the subrange.
            for (i = low; i <= high; i = safeIncrement(i, step)) {
                // Get the percentage value for the current step,
                // calculate the size for the subrange.
                newPct = scope_Spectrum.toStepping(i);
                pctDifference = newPct - prevPct;
                steps = pctDifference / (pips.density || 1);
                realSteps = Math.round(steps);
                // This ratio represents the amount of percentage-space a point indicates.
                // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                // Round the percentage offset to an even number, then divide by two
                // to spread the offset on both sides of the range.
                stepSize = pctDifference / realSteps;
                // Divide all points evenly, adding the correct number to this subrange.
                // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                for (q = 1; q <= realSteps; q += 1) {
                    // The ratio between the rounded value and the actual size might be ~1% off.
                    // Correct the percentage offset by the number of points
                    // per subrange. density = 1 will result in 100 points on the
                    // full range, 2 for 50, 4 for 25, etc.
                    pctPos = prevPct + q * stepSize;
                    indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                }
                // Determine the point type.
                type = group.indexOf(i) > -1 ? PipsType.LargeValue : isSteps ? PipsType.SmallValue : PipsType.NoValue;
                // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                if (!index && ignoreFirst && i !== high) {
                    type = 0;
                }
                if (!(i === high && ignoreLast)) {
                    // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                    indexes[newPct.toFixed(5)] = [i, type];
                }
                // Update the percentage count.
                prevPct = newPct;
            }
        });
        return indexes;
    }
    function addMarking(spread, filterFunc, formatter) {
        var _a, _b;
        var element = scope_Document.createElement("div");
        var valueSizeClasses = (_a = {},
            _a[PipsType.None] = "",
            _a[PipsType.NoValue] = options.cssClasses.valueNormal,
            _a[PipsType.LargeValue] = options.cssClasses.valueLarge,
            _a[PipsType.SmallValue] = options.cssClasses.valueSub,
            _a);
        var markerSizeClasses = (_b = {},
            _b[PipsType.None] = "",
            _b[PipsType.NoValue] = options.cssClasses.markerNormal,
            _b[PipsType.LargeValue] = options.cssClasses.markerLarge,
            _b[PipsType.SmallValue] = options.cssClasses.markerSub,
            _b);
        var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
        var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
        addClass(element, options.cssClasses.pips);
        addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
        function getClasses(type, source) {
            var a = source === options.cssClasses.value;
            var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
            var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
            return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
        }
        function addSpread(offset, value, type) {
            // Apply the filter function, if it is set.
            type = filterFunc ? filterFunc(value, type) : type;
            if (type === PipsType.None) {
                return;
            }
            // Add a marker for every point
            var node = addNodeTo(element, false);
            node.className = getClasses(type, options.cssClasses.marker);
            node.style[options.style] = offset + "%";
            // Values are only appended for points marked '1' or '2'.
            if (type > PipsType.NoValue) {
                node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.value);
                node.setAttribute("data-value", String(value));
                node.style[options.style] = offset + "%";
                node.innerHTML = String(formatter.to(value));
            }
        }
        // Append all points.
        Object.keys(spread).forEach(function (offset) {
            addSpread(offset, spread[offset][0], spread[offset][1]);
        });
        return element;
    }
    function removePips() {
        if (scope_Pips) {
            removeElement(scope_Pips);
            scope_Pips = null;
        }
    }
    function pips(pips) {
        // Fix #669
        removePips();
        var spread = generateSpread(pips);
        var filter = pips.filter;
        var format = pips.format || {
            to: function (value) {
                return String(Math.round(value));
            },
        };
        scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
        return scope_Pips;
    }
    // Shorthand for base dimensions.
    function baseSize() {
        var rect = scope_Base.getBoundingClientRect();
        var alt = ("offset" + ["Width", "Height"][options.ort]);
        return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
    }
    // Handler for attaching events trough a proxy.
    function attachEvent(events, element, callback, data) {
        // This function can be used to 'filter' events to the slider.
        // element is a node, not a nodeList
        var method = function (event) {
            var e = fixEvent(event, data.pageOffset, data.target || element);
            // fixEvent returns false if this event has a different target
            // when handling (multi-) touch events;
            if (!e) {
                return false;
            }
            // doNotReject is passed by all end events to make sure released touches
            // are not rejected, leaving the slider "stuck" to the cursor;
            if (isSliderDisabled() && !data.doNotReject) {
                return false;
            }
            // Stop if an active 'tap' transition is taking place.
            if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                return false;
            }
            // Ignore right or middle clicks on start #454
            if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                return false;
            }
            // Ignore right or middle clicks on start #454
            if (data.hover && e.buttons) {
                return false;
            }
            // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
            // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
            // touch-action: manipulation, but that allows panning, which breaks
            // sliders after zooming/on non-responsive pages.
            // See: https://bugs.webkit.org/show_bug.cgi?id=133112
            if (!supportsPassive) {
                e.preventDefault();
            }
            e.calcPoint = e.points[options.ort];
            // Call the event handler with the event [ and additional data ].
            callback(e, data);
            return;
        };
        var methods = [];
        // Bind a closure on the target for every event type.
        events.split(" ").forEach(function (eventName) {
            element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
            methods.push([eventName, method]);
        });
        return methods;
    }
    // Provide a clean event with standardized offset values.
    function fixEvent(e, pageOffset, eventTarget) {
        // Filter the event to register the type, which can be
        // touch, mouse or pointer. Offset changes need to be
        // made on an event specific basis.
        var touch = e.type.indexOf("touch") === 0;
        var mouse = e.type.indexOf("mouse") === 0;
        var pointer = e.type.indexOf("pointer") === 0;
        var x = 0;
        var y = 0;
        // IE10 implemented pointer events with a prefix;
        if (e.type.indexOf("MSPointer") === 0) {
            pointer = true;
        }
        // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
        // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
        // events that have no touches or buttons associated with them. (#1057, #1079, #1095)
        if (e.type === "mousedown" && !e.buttons && !e.touches) {
            return false;
        }
        // The only thing one handle should be concerned about is the touches that originated on top of it.
        if (touch) {
            // Returns true if a touch originated on the target.
            var isTouchOnTarget = function (checkTouch) {
                var target = checkTouch.target;
                return (target === eventTarget ||
                    eventTarget.contains(target) ||
                    (e.composed && e.composedPath().shift() === eventTarget));
            };
            // In the case of touchstart events, we need to make sure there is still no more than one
            // touch on the target so we look amongst all touches.
            if (e.type === "touchstart") {
                var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                // Do not support more than one touch per handle.
                if (targetTouches.length > 1) {
                    return false;
                }
                x = targetTouches[0].pageX;
                y = targetTouches[0].pageY;
            }
            else {
                // In the other cases, find on changedTouches is enough.
                var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                // Cancel if the target touch has not moved.
                if (!targetTouch) {
                    return false;
                }
                x = targetTouch.pageX;
                y = targetTouch.pageY;
            }
        }
        pageOffset = pageOffset || getPageOffset(scope_Document);
        if (mouse || pointer) {
            x = e.clientX + pageOffset.x;
            y = e.clientY + pageOffset.y;
        }
        e.pageOffset = pageOffset;
        e.points = [x, y];
        e.cursor = mouse || pointer; // Fix #435
        return e;
    }
    // Translate a coordinate in the document to a percentage on the slider
    function calcPointToPercentage(calcPoint) {
        var location = calcPoint - offset(scope_Base, options.ort);
        var proposal = (location * 100) / baseSize();
        // Clamp proposal between 0% and 100%
        // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
        // are used (e.g. contained handles feature)
        proposal = limit(proposal);
        return options.dir ? 100 - proposal : proposal;
    }
    // Find handle closest to a certain percentage on the slider
    function getClosestHandle(clickedPosition) {
        var smallestDifference = 100;
        var handleNumber = false;
        scope_Handles.forEach(function (handle, index) {
            // Disabled handles are ignored
            if (isHandleDisabled(index)) {
                return;
            }
            var handlePosition = scope_Locations[index];
            var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
            // Initial state
            var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
            // Difference with this handle is smaller than the previously checked handle
            var isCloser = differenceWithThisHandle < smallestDifference;
            var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
            if (isCloser || isCloserAfter || clickAtEdge) {
                handleNumber = index;
                smallestDifference = differenceWithThisHandle;
            }
        });
        return handleNumber;
    }
    // Fire 'end' when a mouse or pen leaves the document.
    function documentLeave(event, data) {
        if (event.type === "mouseout" &&
            event.target.nodeName === "HTML" &&
            event.relatedTarget === null) {
            eventEnd(event, data);
        }
    }
    // Handle movement on document for handle and range drag.
    function eventMove(event, data) {
        // Fix #498
        // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
        // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
        // IE9 has .buttons and .which zero on mousemove.
        // Firefox breaks the spec MDN defines.
        if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
            return eventEnd(event, data);
        }
        // Check if we are moving up or down
        var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
        // Convert the movement into a percentage of the slider width/height
        var proposal = (movement * 100) / data.baseSize;
        moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
    }
    // Unbind move events on document, call callbacks.
    function eventEnd(event, data) {
        // The handle is no longer active, so remove the class.
        if (data.handle) {
            removeClass(data.handle, options.cssClasses.active);
            scope_ActiveHandlesCount -= 1;
        }
        // Unbind the move and end events, which are added on 'start'.
        data.listeners.forEach(function (c) {
            scope_DocumentElement.removeEventListener(c[0], c[1]);
        });
        if (scope_ActiveHandlesCount === 0) {
            // Remove dragging class.
            removeClass(scope_Target, options.cssClasses.drag);
            setZindex();
            // Remove cursor styles and text-selection events bound to the body.
            if (event.cursor) {
                scope_Body.style.cursor = "";
                scope_Body.removeEventListener("selectstart", preventDefault);
            }
        }
        if (options.events.smoothSteps) {
            data.handleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
            });
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
            });
        }
        data.handleNumbers.forEach(function (handleNumber) {
            fireEvent("change", handleNumber);
            fireEvent("set", handleNumber);
            fireEvent("end", handleNumber);
        });
    }
    // Bind move events on document.
    function eventStart(event, data) {
        // Ignore event if any handle is disabled
        if (data.handleNumbers.some(isHandleDisabled)) {
            return;
        }
        var handle;
        if (data.handleNumbers.length === 1) {
            var handleOrigin = scope_Handles[data.handleNumbers[0]];
            handle = handleOrigin.children[0];
            scope_ActiveHandlesCount += 1;
            // Mark the handle as 'active' so it can be styled.
            addClass(handle, options.cssClasses.active);
        }
        // A drag should never propagate up to the 'tap' event.
        event.stopPropagation();
        // Record the event listeners.
        var listeners = [];
        // Attach the move and end events.
        var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
            // The event target has changed so we need to propagate the original one so that we keep
            // relying on it to extract target touches.
            target: event.target,
            handle: handle,
            connect: data.connect,
            listeners: listeners,
            startCalcPoint: event.calcPoint,
            baseSize: baseSize(),
            pageOffset: event.pageOffset,
            handleNumbers: data.handleNumbers,
            buttonsProperty: event.buttons,
            locations: scope_Locations.slice(),
        });
        var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
            target: event.target,
            handle: handle,
            listeners: listeners,
            doNotReject: true,
            handleNumbers: data.handleNumbers,
        });
        var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
            target: event.target,
            handle: handle,
            listeners: listeners,
            doNotReject: true,
            handleNumbers: data.handleNumbers,
        });
        // We want to make sure we pushed the listeners in the listener list rather than creating
        // a new one as it has already been passed to the event handlers.
        listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
        // Text selection isn't an issue on touch devices,
        // so adding cursor styles can be skipped.
        if (event.cursor) {
            // Prevent the 'I' cursor and extend the range-drag cursor.
            scope_Body.style.cursor = getComputedStyle(event.target).cursor;
            // Mark the target with a dragging state.
            if (scope_Handles.length > 1) {
                addClass(scope_Target, options.cssClasses.drag);
            }
            // Prevent text selection when dragging the handles.
            // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
            // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
            // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
            // The 'cursor' flag is false.
            // See: http://caniuse.com/#search=selectstart
            scope_Body.addEventListener("selectstart", preventDefault, false);
        }
        data.handleNumbers.forEach(function (handleNumber) {
            fireEvent("start", handleNumber);
        });
    }
    // Move closest handle to tapped location.
    function eventTap(event) {
        // The tap event shouldn't propagate up
        event.stopPropagation();
        var proposal = calcPointToPercentage(event.calcPoint);
        var handleNumber = getClosestHandle(proposal);
        // Tackle the case that all handles are 'disabled'.
        if (handleNumber === false) {
            return;
        }
        // Flag the slider as it is now in a transitional state.
        // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
        if (!options.events.snap) {
            addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
        }
        setHandle(handleNumber, proposal, true, true);
        setZindex();
        fireEvent("slide", handleNumber, true);
        fireEvent("update", handleNumber, true);
        if (!options.events.snap) {
            fireEvent("change", handleNumber, true);
            fireEvent("set", handleNumber, true);
        }
        else {
            eventStart(event, { handleNumbers: [handleNumber] });
        }
    }
    // Fires a 'hover' event for a hovered mouse/pen position.
    function eventHover(event) {
        var proposal = calcPointToPercentage(event.calcPoint);
        var to = scope_Spectrum.getStep(proposal);
        var value = scope_Spectrum.fromStepping(to);
        Object.keys(scope_Events).forEach(function (targetEvent) {
            if ("hover" === targetEvent.split(".")[0]) {
                scope_Events[targetEvent].forEach(function (callback) {
                    callback.call(scope_Self, value);
                });
            }
        });
    }
    // Handles keydown on focused handles
    // Don't move the document when pressing arrow keys on focused handles
    function eventKeydown(event, handleNumber) {
        if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
            return false;
        }
        var horizontalKeys = ["Left", "Right"];
        var verticalKeys = ["Down", "Up"];
        var largeStepKeys = ["PageDown", "PageUp"];
        var edgeKeys = ["Home", "End"];
        if (options.dir && !options.ort) {
            // On an right-to-left slider, the left and right keys act inverted
            horizontalKeys.reverse();
        }
        else if (options.ort && !options.dir) {
            // On a top-to-bottom slider, the up and down keys act inverted
            verticalKeys.reverse();
            largeStepKeys.reverse();
        }
        // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
        var key = event.key.replace("Arrow", "");
        var isLargeDown = key === largeStepKeys[0];
        var isLargeUp = key === largeStepKeys[1];
        var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
        var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
        var isMin = key === edgeKeys[0];
        var isMax = key === edgeKeys[1];
        if (!isDown && !isUp && !isMin && !isMax) {
            return true;
        }
        event.preventDefault();
        var to;
        if (isUp || isDown) {
            var direction = isDown ? 0 : 1;
            var steps = getNextStepsForHandle(handleNumber);
            var step = steps[direction];
            // At the edge of a slider, do nothing
            if (step === null) {
                return false;
            }
            // No step set, use the default of 10% of the sub-range
            if (step === false) {
                step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
            }
            if (isLargeUp || isLargeDown) {
                step *= options.keyboardPageMultiplier;
            }
            else {
                step *= options.keyboardMultiplier;
            }
            // Step over zero-length ranges (#948);
            step = Math.max(step, 0.0000001);
            // Decrement for down steps
            step = (isDown ? -1 : 1) * step;
            to = scope_Values[handleNumber] + step;
        }
        else if (isMax) {
            // End key
            to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
        }
        else {
            // Home key
            to = options.spectrum.xVal[0];
        }
        setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
        fireEvent("slide", handleNumber);
        fireEvent("update", handleNumber);
        fireEvent("change", handleNumber);
        fireEvent("set", handleNumber);
        return false;
    }
    // Attach events to several slider parts.
    function bindSliderEvents(behaviour) {
        // Attach the standard drag event to the handles.
        if (!behaviour.fixed) {
            scope_Handles.forEach(function (handle, index) {
                // These events are only bound to the visual handle
                // element, not the 'real' origin element.
                attachEvent(actions.start, handle.children[0], eventStart, {
                    handleNumbers: [index],
                });
            });
        }
        // Attach the tap event to the slider base.
        if (behaviour.tap) {
            attachEvent(actions.start, scope_Base, eventTap, {});
        }
        // Fire hover events
        if (behaviour.hover) {
            attachEvent(actions.move, scope_Base, eventHover, {
                hover: true,
            });
        }
        // Make the range draggable.
        if (behaviour.drag) {
            scope_Connects.forEach(function (connect, index) {
                if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                    return;
                }
                var handleBefore = scope_Handles[index - 1];
                var handleAfter = scope_Handles[index];
                var eventHolders = [connect];
                var handlesToDrag = [handleBefore, handleAfter];
                var handleNumbersToDrag = [index - 1, index];
                addClass(connect, options.cssClasses.draggable);
                // When the range is fixed, the entire range can
                // be dragged by the handles. The handle in the first
                // origin will propagate the start event upward,
                // but it needs to be bound manually on the other.
                if (behaviour.fixed) {
                    eventHolders.push(handleBefore.children[0]);
                    eventHolders.push(handleAfter.children[0]);
                }
                if (behaviour.dragAll) {
                    handlesToDrag = scope_Handles;
                    handleNumbersToDrag = scope_HandleNumbers;
                }
                eventHolders.forEach(function (eventHolder) {
                    attachEvent(actions.start, eventHolder, eventStart, {
                        handles: handlesToDrag,
                        handleNumbers: handleNumbersToDrag,
                        connect: connect,
                    });
                });
            });
        }
    }
    // Attach an event to this slider, possibly including a namespace
    function bindEvent(namespacedEvent, callback) {
        scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
        scope_Events[namespacedEvent].push(callback);
        // If the event bound is 'update,' fire it immediately for all handles.
        if (namespacedEvent.split(".")[0] === "update") {
            scope_Handles.forEach(function (a, index) {
                fireEvent("update", index);
            });
        }
    }
    function isInternalNamespace(namespace) {
        return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
    }
    // Undo attachment of event
    function removeEvent(namespacedEvent) {
        var event = namespacedEvent && namespacedEvent.split(".")[0];
        var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
        Object.keys(scope_Events).forEach(function (bind) {
            var tEvent = bind.split(".")[0];
            var tNamespace = bind.substring(tEvent.length);
            if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                // only delete protected internal event if intentional
                if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
                    delete scope_Events[bind];
                }
            }
        });
    }
    // External event handling
    function fireEvent(eventName, handleNumber, tap) {
        Object.keys(scope_Events).forEach(function (targetEvent) {
            var eventType = targetEvent.split(".")[0];
            if (eventName === eventType) {
                scope_Events[targetEvent].forEach(function (callback) {
                    callback.call(
                    // Use the slider public API as the scope ('this')
                    scope_Self, 
                    // Return values as array, so arg_1[arg_2] is always valid.
                    scope_Values.map(options.format.to), 
                    // Handle index, 0 or 1
                    handleNumber, 
                    // Un-formatted slider values
                    scope_Values.slice(), 
                    // Event is fired by tap, true or false
                    tap || false, 
                    // Left offset of the handle, in relation to the slider
                    scope_Locations.slice(), 
                    // add the slider public API to an accessible parameter when this is unavailable
                    scope_Self);
                });
            }
        });
    }
    // Split out the handle positioning logic so the Move event can use it, too
    function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
        var distance;
        // For sliders with multiple handles, limit movement to the other handle.
        // Apply the margin option by adding it to the handle positions.
        if (scope_Handles.length > 1 && !options.events.unconstrained) {
            if (lookBackward && handleNumber > 0) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                to = Math.max(to, distance);
            }
            if (lookForward && handleNumber < scope_Handles.length - 1) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                to = Math.min(to, distance);
            }
        }
        // The limit option has the opposite effect, limiting handles to a
        // maximum distance from another. Limit must be > 0, as otherwise
        // handles would be unmovable.
        if (scope_Handles.length > 1 && options.limit) {
            if (lookBackward && handleNumber > 0) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                to = Math.min(to, distance);
            }
            if (lookForward && handleNumber < scope_Handles.length - 1) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                to = Math.max(to, distance);
            }
        }
        // The padding option keeps the handles a certain distance from the
        // edges of the slider. Padding must be > 0.
        if (options.padding) {
            if (handleNumber === 0) {
                distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                to = Math.max(to, distance);
            }
            if (handleNumber === scope_Handles.length - 1) {
                distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                to = Math.min(to, distance);
            }
        }
        if (!smoothSteps) {
            to = scope_Spectrum.getStep(to);
        }
        // Limit percentage to the 0 - 100 range
        to = limit(to);
        // Return false if handle can't move
        if (to === reference[handleNumber] && !getValue) {
            return false;
        }
        return to;
    }
    // Uses slider orientation to create CSS rules. a = base value;
    function inRuleOrder(v, a) {
        var o = options.ort;
        return (o ? a : v) + ", " + (o ? v : a);
    }
    // Moves handle(s) by a percentage
    // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
    function moveHandles(upward, proposal, locations, handleNumbers, connect) {
        var proposals = locations.slice();
        // Store first handle now, so we still have it in case handleNumbers is reversed
        var firstHandle = handleNumbers[0];
        var smoothSteps = options.events.smoothSteps;
        var b = [!upward, upward];
        var f = [upward, !upward];
        // Copy handleNumbers so we don't change the dataset
        handleNumbers = handleNumbers.slice();
        // Check to see which handle is 'leading'.
        // If that one can't move the second can't either.
        if (upward) {
            handleNumbers.reverse();
        }
        // Step 1: get the maximum percentage that any of the handles can move
        if (handleNumbers.length > 1) {
            handleNumbers.forEach(function (handleNumber, o) {
                var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);
                // Stop if one of the handles can't move.
                if (to === false) {
                    proposal = 0;
                }
                else {
                    proposal = to - proposals[handleNumber];
                    proposals[handleNumber] = to;
                }
            });
        }
        // If using one handle, check backward AND forward
        else {
            b = f = [true];
        }
        var state = false;
        // Step 2: Try to set the handles with the found percentage
        handleNumbers.forEach(function (handleNumber, o) {
            state =
                setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;
        });
        // Step 3: If a handle moved, fire events
        if (state) {
            handleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
                fireEvent("slide", handleNumber);
            });
            // If target is a connect, then fire drag event
            if (connect != undefined) {
                fireEvent("drag", firstHandle);
            }
        }
    }
    // Takes a base value and an offset. This offset is used for the connect bar size.
    // In the initial design for this feature, the origin element was 1% wide.
    // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
    // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
    function transformDirection(a, b) {
        return options.dir ? 100 - a - b : a;
    }
    // Updates scope_Locations and scope_Values, updates visual state
    function updateHandlePosition(handleNumber, to) {
        // Update locations.
        scope_Locations[handleNumber] = to;
        // Convert the value to the slider stepping/range.
        scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
        var translation = transformDirection(to, 0) - scope_DirOffset;
        var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
        scope_Handles[handleNumber].style[options.transformRule] = translateRule;
        // sanity check for at least 2 handles (e.g. during setup)
        if (options.events.invertConnects && scope_Locations.length > 1) {
            // check if handles passed each other, but don't match the ConnectsInverted state
            var handlesAreInOrder = scope_Locations.every(function (position, index, locations) {
                return index === 0 || position >= locations[index - 1];
            });
            if (scope_ConnectsInverted !== !handlesAreInOrder) {
                // invert connects when handles pass each other
                invertConnects();
                // invertConnects already updates all connect elements
                return;
            }
        }
        updateConnect(handleNumber);
        updateConnect(handleNumber + 1);
        if (scope_ConnectsInverted) {
            // When connects are inverted, we also have to update adjacent connects
            updateConnect(handleNumber - 1);
            updateConnect(handleNumber + 2);
        }
    }
    // Handles before the slider middle are stacked later = higher,
    // Handles after the middle later is lower
    // [[7] [8] .......... | .......... [5] [4]
    function setZindex() {
        scope_HandleNumbers.forEach(function (handleNumber) {
            var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
            var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
            scope_Handles[handleNumber].style.zIndex = String(zIndex);
        });
    }
    // Test suggested values and apply margin, step.
    // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)
    function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
        if (!exactInput) {
            to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
        }
        if (to === false) {
            return false;
        }
        updateHandlePosition(handleNumber, to);
        return true;
    }
    // Updates style attribute for connect nodes
    function updateConnect(index) {
        // Skip connects set to false
        if (!scope_Connects[index]) {
            return;
        }
        // Create a copy of locations, so we can sort them for the local scope logic
        var locations = scope_Locations.slice();
        if (scope_ConnectsInverted) {
            locations.sort(function (a, b) {
                return a - b;
            });
        }
        var l = 0;
        var h = 100;
        if (index !== 0) {
            l = locations[index - 1];
        }
        if (index !== scope_Connects.length - 1) {
            h = locations[index];
        }
        // We use two rules:
        // 'translate' to change the left/top offset;
        // 'scale' to change the width of the element;
        // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
        var connectWidth = h - l;
        var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
        var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
        scope_Connects[index].style[options.transformRule] =
            translateRule + " " + scaleRule;
    }
    // Parses value passed to .set method. Returns current value if not parse-able.
    function resolveToValue(to, handleNumber) {
        // Setting with null indicates an 'ignore'.
        // Inputting 'false' is invalid.
        if (to === null || to === false || to === undefined) {
            return scope_Locations[handleNumber];
        }
        // If a formatted number was passed, attempt to decode it.
        if (typeof to === "number") {
            to = String(to);
        }
        to = options.format.from(to);
        if (to !== false) {
            to = scope_Spectrum.toStepping(to);
        }
        // If parsing the number failed, use the current value.
        if (to === false || isNaN(to)) {
            return scope_Locations[handleNumber];
        }
        return to;
    }
    // Set the slider value.
    function valueSet(input, fireSetEvent, exactInput) {
        var values = asArray(input);
        var isInit = scope_Locations[0] === undefined;
        // Event fires by default
        fireSetEvent = fireSetEvent === undefined ? true : fireSetEvent;
        // Animation is optional.
        // Make sure the initial values were set before using animated placement.
        if (options.animate && !isInit) {
            addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
        }
        // First pass, without lookAhead but with lookBackward. Values are set from left to right.
        scope_HandleNumbers.forEach(function (handleNumber) {
            setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
        });
        var i = scope_HandleNumbers.length === 1 ? 0 : 1;
        // Spread handles evenly across the slider if the range has no size (min=max)
        if (isInit && scope_Spectrum.hasNoSize()) {
            exactInput = true;
            scope_Locations[0] = 0;
            if (scope_HandleNumbers.length > 1) {
                var space_1 = 100 / (scope_HandleNumbers.length - 1);
                scope_HandleNumbers.forEach(function (handleNumber) {
                    scope_Locations[handleNumber] = handleNumber * space_1;
                });
            }
        }
        // Secondary passes. Now that all base values are set, apply constraints.
        // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)
        for (; i < scope_HandleNumbers.length; ++i) {
            scope_HandleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
            });
        }
        setZindex();
        scope_HandleNumbers.forEach(function (handleNumber) {
            fireEvent("update", handleNumber);
            // Fire the event only for handles that received a new value, as per #579
            if (values[handleNumber] !== null && fireSetEvent) {
                fireEvent("set", handleNumber);
            }
        });
    }
    // Reset slider to initial values
    function valueReset(fireSetEvent) {
        valueSet(options.start, fireSetEvent);
    }
    // Set value for a single handle
    function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
        // Ensure numeric input
        handleNumber = Number(handleNumber);
        if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
            throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
        }
        // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
        // The exactInput argument can be used to ignore slider stepping (#436)
        setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
        fireEvent("update", handleNumber);
        if (fireSetEvent) {
            fireEvent("set", handleNumber);
        }
    }
    // Get the slider value.
    function valueGet(unencoded) {
        if (unencoded === void 0) { unencoded = false; }
        if (unencoded) {
            // return a copy of the raw values
            return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
        }
        var values = scope_Values.map(options.format.to);
        // If only one handle is used, return a single value.
        if (values.length === 1) {
            return values[0];
        }
        return values;
    }
    // Removes classes from the root and empties it.
    function destroy() {
        // remove protected internal listeners
        removeEvent(INTERNAL_EVENT_NS.aria);
        removeEvent(INTERNAL_EVENT_NS.tooltips);
        Object.keys(options.cssClasses).forEach(function (key) {
            removeClass(scope_Target, options.cssClasses[key]);
        });
        while (scope_Target.firstChild) {
            scope_Target.removeChild(scope_Target.firstChild);
        }
        delete scope_Target.noUiSlider;
    }
    function getNextStepsForHandle(handleNumber) {
        var location = scope_Locations[handleNumber];
        var nearbySteps = scope_Spectrum.getNearbySteps(location);
        var value = scope_Values[handleNumber];
        var increment = nearbySteps.thisStep.step;
        var decrement = null;
        // If snapped, directly use defined step value
        if (options.snap) {
            return [
                value - nearbySteps.stepBefore.startValue || null,
                nearbySteps.stepAfter.startValue - value || null,
            ];
        }
        // If the next value in this step moves into the next step,
        // the increment is the start of the next step - the current value
        if (increment !== false) {
            if (value + increment > nearbySteps.stepAfter.startValue) {
                increment = nearbySteps.stepAfter.startValue - value;
            }
        }
        // If the value is beyond the starting point
        if (value > nearbySteps.thisStep.startValue) {
            decrement = nearbySteps.thisStep.step;
        }
        else if (nearbySteps.stepBefore.step === false) {
            decrement = false;
        }
        // If a handle is at the start of a step, it always steps back into the previous step first
        else {
            decrement = value - nearbySteps.stepBefore.highestStep;
        }
        // Now, if at the slider edges, there is no in/decrement
        if (location === 100) {
            increment = null;
        }
        else if (location === 0) {
            decrement = null;
        }
        // As per #391, the comparison for the decrement step can have some rounding issues.
        var stepDecimals = scope_Spectrum.countStepDecimals();
        // Round per #391
        if (increment !== null && increment !== false) {
            increment = Number(increment.toFixed(stepDecimals));
        }
        if (decrement !== null && decrement !== false) {
            decrement = Number(decrement.toFixed(stepDecimals));
        }
        return [decrement, increment];
    }
    // Get the current step size for the slider.
    function getNextSteps() {
        return scope_HandleNumbers.map(getNextStepsForHandle);
    }
    // Updatable: margin, limit, padding, step, range, animate, snap
    function updateOptions(optionsToUpdate, fireSetEvent) {
        // Spectrum is created using the range, snap, direction and step options.
        // 'snap' and 'step' can be updated.
        // If 'snap' and 'step' are not passed, they should remain unchanged.
        var v = valueGet();
        var updateAble = [
            "margin",
            "limit",
            "padding",
            "range",
            "animate",
            "snap",
            "step",
            "format",
            "pips",
            "tooltips",
            "connect",
        ];
        // Only change options that we're actually passed to update.
        updateAble.forEach(function (name) {
            // Check for undefined. null removes the value.
            if (optionsToUpdate[name] !== undefined) {
                originalOptions[name] = optionsToUpdate[name];
            }
        });
        var newOptions = testOptions(originalOptions);
        // Load new options into the slider state
        updateAble.forEach(function (name) {
            if (optionsToUpdate[name] !== undefined) {
                options[name] = newOptions[name];
            }
        });
        scope_Spectrum = newOptions.spectrum;
        // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
        options.margin = newOptions.margin;
        options.limit = newOptions.limit;
        options.padding = newOptions.padding;
        // Update pips, removes existing.
        if (options.pips) {
            pips(options.pips);
        }
        else {
            removePips();
        }
        // Update tooltips, removes existing.
        if (options.tooltips) {
            tooltips();
        }
        else {
            removeTooltips();
        }
        // Invalidate the current positioning so valueSet forces an update.
        scope_Locations = [];
        valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
        // Update connects only if it was set
        if (optionsToUpdate.connect) {
            updateConnectOption();
        }
    }
    function updateConnectOption() {
        // IE supported way of removing children including event handlers
        while (scope_ConnectBase.firstChild) {
            scope_ConnectBase.removeChild(scope_ConnectBase.firstChild);
        }
        // Adding new connects according to the new connect options
        for (var i = 0; i <= options.handles; i++) {
            scope_Connects[i] = addConnect(scope_ConnectBase, options.connect[i]);
            updateConnect(i);
        }
        // re-adding drag events for the new connect elements
        // to ignore the other events we have to negate the 'if (!behaviour.fixed)' check
        bindSliderEvents({ drag: options.events.drag, fixed: true });
    }
    // Invert options for connect handles
    function invertConnects() {
        scope_ConnectsInverted = !scope_ConnectsInverted;
        testConnect(options, 
        // inverse the connect boolean array
        options.connect.map(function (b) { return !b; }));
        updateConnectOption();
    }
    // Initialization steps
    function setupSlider() {
        // Create the base element, initialize HTML and set classes.
        // Add handles and connect elements.
        scope_Base = addSlider(scope_Target);
        addElements(options.connect, scope_Base);
        // Attach user events.
        bindSliderEvents(options.events);
        // Use the public value method to set the start values.
        valueSet(options.start);
        if (options.pips) {
            pips(options.pips);
        }
        if (options.tooltips) {
            tooltips();
        }
        aria();
    }
    setupSlider();
    var scope_Self = {
        destroy: destroy,
        steps: getNextSteps,
        on: bindEvent,
        off: removeEvent,
        get: valueGet,
        set: valueSet,
        setHandle: valueSetHandle,
        reset: valueReset,
        disable: disable,
        enable: enable,
        // Exposed for unit testing, don't use this in your application.
        __moveHandles: function (upward, proposal, handleNumbers) {
            moveHandles(upward, proposal, scope_Locations, handleNumbers);
        },
        options: originalOptions,
        updateOptions: updateOptions,
        target: scope_Target,
        removePips: removePips,
        removeTooltips: removeTooltips,
        getPositions: function () {
            return scope_Locations.slice();
        },
        getTooltips: function () {
            return scope_Tooltips;
        },
        getOrigins: function () {
            return scope_Handles;
        },
        pips: pips, // Issue #594
    };
    return scope_Self;
}
// Run the standard initializer
function initialize(target, originalOptions) {
    if (!target || !target.nodeName) {
        throw new Error("noUiSlider: create requires a single element, got: " + target);
    }
    // Throw an error if the slider was already initialized.
    if (target.noUiSlider) {
        throw new Error("noUiSlider: Slider was already initialized.");
    }
    // Test the options and create the slider environment;
    var options = testOptions(originalOptions);
    var api = scope(target, options, originalOptions);
    target.noUiSlider = api;
    return api;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    // Exposed for unit testing, don't use this in your application.
    __spectrum: Spectrum,
    // A reference to the default classes, allows global changes.
    // Use the cssClasses option for changes to one slider.
    cssClasses: cssClasses,
    create: initialize,
});


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		let threw = true;
/******/ 		try {
/******/ 			if (!(moduleId in __webpack_modules__)) {
/******/ 				delete __webpack_module_cache__[moduleId];
/******/ 				const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 				e.code = 'MODULE_NOT_FOUND';
/******/ 				throw e;
/******/ 			}
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*********************************!*\
  !*** ./srcjs/widgets/solver.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_solver_solver_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/solver/solver-class.js */ "./srcjs/modules/solver/solver-class.js");


HTMLWidgets.widget({
  name: "solver",
  type: "output",
  factory: function(el, width, height) {
    // shared variables
    var elementId = el.id;
    var initialized = false;
    var handle = new _modules_solver_solver_class_js__WEBPACK_IMPORTED_MODULE_0__.Solver();

    return {
      renderValue: function(opts) {
        // if needed, initialize widget
        if (!initialized) {
          // set state to initialized
          initialized = true;
          // attach the widget to the DOM
          let el = document.getElementById(elementId);
          el.widget = this;
          // initialize solver
          handle.initialize(
            el, opts.project,
            opts.featureTargetChoices,
            opts.featureWeightChoices,
            opts.costWeightChoices,
            opts.zoneColors,
          );
        }
      },

      resize: function(width, height) {
        // widget automatically resizes
      },

      solver: handle,

      /* API functions to manipulate widget */
      addLock: function(params) {
        handle.addLock(params.value, params.type);
      },

      reset: function(params) {
        handle.reset();
      },

      sync: function(params) {
        handle.sync(params.value);
      },

    };
  }
});

// Attach message handlers if in Shiny mode (these correspond to API)
if (HTMLWidgets.shinyMode) {
  var fxns = ["addLock", "reset", "sync"];
  var addShinyHandler = function(fxn) {
    return function() {
      Shiny.addCustomMessageHandler(
        "solver:" + fxn, function(message) {
          var el = document.getElementById(message.id);
          if (el) {
            delete message["id"];
            el.widget[fxn](message);
          }
        }
      );
    }
  };
  for (var i = 0; i < fxns.length; ++i) {
    addShinyHandler(fxns[i])();
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtRkFBbUY7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxlQUFlO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxjQUFjO0FBQzFCLFlBQVksY0FBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFDakU7QUFDQSxnQkFBZ0I7QUFDaEIsc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLFdBQVc7QUFDekI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCLGVBQWUsY0FBYztBQUM3QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksYUFBYTtBQUN6QixZQUFZLDBCQUEwQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksYUFBYTtBQUN6QixZQUFZLDRCQUE0QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxvQ0FBb0M7QUFDaEQ7QUFDQTtBQUNBLHlFQUF5RSxhQUFhO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQSx1RUFBdUU7QUFDdkU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixXQUFXLGFBQWE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnQkFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixrQ0FBa0M7QUFDbEMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDhCQUE4QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx3QkFBd0Isd0JBQXdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwrQkFBK0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4Q0FBOEM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQkFBb0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsdUJBQXVCO0FBQ3ZDLGtDQUFrQyx5Q0FBeUM7QUFDM0UsOEJBQThCLHFDQUFxQztBQUNuRSwrQkFBK0Isc0NBQXNDO0FBQ3JFLGlCQUFpQix1QkFBdUI7QUFDeEMsbUJBQW1CLHlCQUF5QjtBQUM1QyxxQkFBcUIsMkJBQTJCO0FBQ2hELGdCQUFnQix1QkFBdUI7QUFDdkMsbUJBQW1CLDBCQUEwQjtBQUM3Qyw2QkFBNkIsb0NBQW9DO0FBQ2pFLGlCQUFpQix1QkFBdUI7QUFDeEMsdUJBQXVCLDhCQUE4QjtBQUNyRCxrQkFBa0IseUJBQXlCO0FBQzNDLGlCQUFpQix3QkFBd0I7QUFDekMsbUJBQW1CLDBCQUEwQjtBQUM3QyxxQkFBcUIsMkJBQTJCO0FBQ2hELHNCQUFzQiw2QkFBNkI7QUFDbkQsa0JBQWtCLHlCQUF5QjtBQUMzQyxvQkFBb0IsMkJBQTJCO0FBQy9DLDJCQUEyQixpQ0FBaUM7QUFDNUQsMkJBQTJCLGtDQUFrQztBQUM3RCxxQkFBcUIsMkJBQTJCO0FBQ2hELHNCQUFzQiw0QkFBNEI7QUFDbEQsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixXQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEUsZ0JBQWdCO0FBQzVGO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsK0JBQStCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0NBQWdDO0FBQy9DO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHdDQUF3QztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsWUFBWTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNnQztBQUNWO0FBQ3RCLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7O1VDenhFRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxHQUFHO1VBQ0g7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDbENBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsMkNBQTJDLDBDQUEwQztXQUNyRixNQUFNO1dBQ04sMkNBQTJDLGdDQUFnQztXQUMzRTtXQUNBLEtBQUsseUJBQXlCO1dBQzlCO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSwwQ0FBMEMsd0NBQXdDO1dBQ2xGO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7O1dDdEJBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTnlEOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtRUFBTTs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHNjcC8uL25vZGVfbW9kdWxlcy9ub3Vpc2xpZGVyL2Rpc3Qvbm91aXNsaWRlci5jc3M/N2QzZCIsIndlYnBhY2s6Ly9hcHNjcC8uL25vZGVfbW9kdWxlcy90b20tc2VsZWN0L2Rpc3QvY3NzL3RvbS1zZWxlY3QuYm9vdHN0cmFwNS5jc3M/MmM0MyIsIndlYnBhY2s6Ly9hcHNjcC8uL3NyY2pzL21vZHVsZXMvaG92ZXJzZWxlY3QvY3NzL3N0eWxlLmNzcz83ZDY0Iiwid2VicGFjazovL2Fwc2NwLy4vc3JjanMvbW9kdWxlcy9zb2x2ZXIvY3NzL2Nvc3Qtc2V0dGluZy5jc3M/NmRlZSIsIndlYnBhY2s6Ly9hcHNjcC8uL3NyY2pzL21vZHVsZXMvc29sdmVyL2Nzcy9mZWF0dXJlLXNldHRpbmcuY3NzPzc4YjYiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy9tb2R1bGVzL3NvbHZlci9jc3MvbG9jay1zZXR0aW5nLmNzcz9hNTY0Iiwid2VicGFjazovL2Fwc2NwLy4vc3JjanMvbW9kdWxlcy9zb2x2ZXIvY3NzL3NldHRpbmcuY3NzPzk1NmEiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy9tb2R1bGVzL3NvbHZlci9jc3Mvc2V0dGluZ3MuY3NzP2EwNmYiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy9tb2R1bGVzL3NvbHZlci9jc3Mvc3R5bGUuY3NzPzFkOWMiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy9tb2R1bGVzL3NvbHZlci9jc3MvdG9tLXNlbGVjdC5jc3M/YWVkMCIsIndlYnBhY2s6Ly9hcHNjcC8uL3NyY2pzL21vZHVsZXMvc3RhdHVzYmFyL2Nzcy9zdHlsZS5jc3M/MmJiYSIsIndlYnBhY2s6Ly9hcHNjcC8uL3NyY2pzL21vZHVsZXMvdXRpbHMvY3NzL3N0eWxlLmNzcz9kM2E4Iiwid2VicGFjazovL2Fwc2NwLy4vbm9kZV9tb2R1bGVzL3NvcnRhYmxlanMvbW9kdWxhci9zb3J0YWJsZS5jb3JlLmVzbS5qcyIsIndlYnBhY2s6Ly9hcHNjcC8uL3NyY2pzL21vZHVsZXMvaG92ZXJzZWxlY3QvaG92ZXJzZWxlY3QuanMiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy9tb2R1bGVzL3NtYXJ0c2xpZGVyL3NtYXJ0c2xpZGVyLmpzIiwid2VicGFjazovL2Fwc2NwLy4vc3JjanMvbW9kdWxlcy9zb2x2ZXIvY29zdC1zZXR0aW5nLWNsYXNzLmpzIiwid2VicGFjazovL2Fwc2NwLy4vc3JjanMvbW9kdWxlcy9zb2x2ZXIvY29zdC1zZXR0aW5nLXNjYWZmb2xkLmpzIiwid2VicGFjazovL2Fwc2NwLy4vc3JjanMvbW9kdWxlcy9zb2x2ZXIvY29zdC1zZXR0aW5ncy1jbGFzcy5qcyIsIndlYnBhY2s6Ly9hcHNjcC8uL3NyY2pzL21vZHVsZXMvc29sdmVyL2ZlYXR1cmUtc2V0dGluZy1jbGFzcy5qcyIsIndlYnBhY2s6Ly9hcHNjcC8uL3NyY2pzL21vZHVsZXMvc29sdmVyL2ZlYXR1cmUtc2V0dGluZy1zY2FmZm9sZC5qcyIsIndlYnBhY2s6Ly9hcHNjcC8uL3NyY2pzL21vZHVsZXMvc29sdmVyL2ZlYXR1cmUtc2V0dGluZ3MtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy9tb2R1bGVzL3NvbHZlci9sb2NrLXNldHRpbmctY2xhc3MuanMiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy9tb2R1bGVzL3NvbHZlci9sb2NrLXNldHRpbmctc2NhZmZvbGQuanMiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy9tb2R1bGVzL3NvbHZlci9sb2NrLXNldHRpbmdzLWNsYXNzLmpzIiwid2VicGFjazovL2Fwc2NwLy4vc3JjanMvbW9kdWxlcy9zb2x2ZXIvc29sdmVyLWNsYXNzLmpzIiwid2VicGFjazovL2Fwc2NwLy4vc3JjanMvbW9kdWxlcy9zdGF0dXNiYXIvc3RhdHVzYmFyLmpzIiwid2VicGFjazovL2Fwc2NwLy4vc3JjanMvbW9kdWxlcy91dGlscy9lbGVtZW50LmpzIiwid2VicGFjazovL2Fwc2NwLy4vc3JjanMvbW9kdWxlcy91dGlscy9tYXRoLmpzIiwid2VicGFjazovL2Fwc2NwLy4vc3JjanMvbW9kdWxlcy91dGlscy9taXNjLmpzIiwid2VicGFjazovL2Fwc2NwLy4vbm9kZV9tb2R1bGVzL3RvbS1zZWxlY3QvZGlzdC9qcy90b20tc2VsZWN0LmNvbXBsZXRlLm1pbi5qcyIsIndlYnBhY2s6Ly9hcHNjcC8uL25vZGVfbW9kdWxlcy9ub3Vpc2xpZGVyL2Rpc3Qvbm91aXNsaWRlci5tanMiLCJ3ZWJwYWNrOi8vYXBzY3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXBzY3Avd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYXBzY3Avd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Fwc2NwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXBzY3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hcHNjcC8uL3NyY2pzL3dpZGdldHMvc29sdmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qKiFcbiAqIFNvcnRhYmxlIDEuMTUuN1xuICogQGF1dGhvclx0UnViYVhhICAgPHRyYXNoQHJ1YmF4YS5vcmc+XG4gKiBAYXV0aG9yXHRvd2VubSAgICA8b3dlbjIzMzU1QGdtYWlsLmNvbT5cbiAqIEBsaWNlbnNlIE1JVFxuICovXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShyLCBhKSB7XG4gIChudWxsID09IGEgfHwgYSA+IHIubGVuZ3RoKSAmJiAoYSA9IHIubGVuZ3RoKTtcbiAgZm9yICh2YXIgZSA9IDAsIG4gPSBBcnJheShhKTsgZSA8IGE7IGUrKykgbltlXSA9IHJbZV07XG4gIHJldHVybiBuO1xufVxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKHIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShyKTtcbn1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShlLCByLCB0KSB7XG4gIHJldHVybiAociA9IF90b1Byb3BlcnR5S2V5KHIpKSBpbiBlID8gT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIHtcbiAgICB2YWx1ZTogdCxcbiAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICBjb25maWd1cmFibGU6ICEwLFxuICAgIHdyaXRhYmxlOiAhMFxuICB9KSA6IGVbcl0gPSB0LCBlO1xufVxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIHJldHVybiBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uIChuKSB7XG4gICAgZm9yICh2YXIgZSA9IDE7IGUgPCBhcmd1bWVudHMubGVuZ3RoOyBlKyspIHtcbiAgICAgIHZhciB0ID0gYXJndW1lbnRzW2VdO1xuICAgICAgZm9yICh2YXIgciBpbiB0KSAoe30pLmhhc093blByb3BlcnR5LmNhbGwodCwgcikgJiYgKG5bcl0gPSB0W3JdKTtcbiAgICB9XG4gICAgcmV0dXJuIG47XG4gIH0sIF9leHRlbmRzLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59XG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KHIpIHtcbiAgaWYgKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiBudWxsICE9IHJbU3ltYm9sLml0ZXJhdG9yXSB8fCBudWxsICE9IHJbXCJAQGl0ZXJhdG9yXCJdKSByZXR1cm4gQXJyYXkuZnJvbShyKTtcbn1cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5mdW5jdGlvbiBvd25LZXlzKGUsIHIpIHtcbiAgdmFyIHQgPSBPYmplY3Qua2V5cyhlKTtcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgbyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7XG4gICAgciAmJiAobyA9IG8uZmlsdGVyKGZ1bmN0aW9uIChyKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCByKS5lbnVtZXJhYmxlO1xuICAgIH0pKSwgdC5wdXNoLmFwcGx5KHQsIG8pO1xuICB9XG4gIHJldHVybiB0O1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIoZSkge1xuICBmb3IgKHZhciByID0gMTsgciA8IGFyZ3VtZW50cy5sZW5ndGg7IHIrKykge1xuICAgIHZhciB0ID0gbnVsbCAhPSBhcmd1bWVudHNbcl0gPyBhcmd1bWVudHNbcl0gOiB7fTtcbiAgICByICUgMiA/IG93bktleXMoT2JqZWN0KHQpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAocikge1xuICAgICAgX2RlZmluZVByb3BlcnR5KGUsIHIsIHRbcl0pO1xuICAgIH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh0KSkgOiBvd25LZXlzKE9iamVjdCh0KSkuZm9yRWFjaChmdW5jdGlvbiAocikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwgcikpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBlO1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKGUsIHQpIHtcbiAgaWYgKG51bGwgPT0gZSkgcmV0dXJuIHt9O1xuICB2YXIgbyxcbiAgICByLFxuICAgIGkgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShlLCB0KTtcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgbiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7XG4gICAgZm9yIChyID0gMDsgciA8IG4ubGVuZ3RoOyByKyspIG8gPSBuW3JdLCAtMSA9PT0gdC5pbmRleE9mKG8pICYmIHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoZSwgbykgJiYgKGlbb10gPSBlW29dKTtcbiAgfVxuICByZXR1cm4gaTtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHIsIGUpIHtcbiAgaWYgKG51bGwgPT0gcikgcmV0dXJuIHt9O1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBuIGluIHIpIGlmICh7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHIsIG4pKSB7XG4gICAgaWYgKC0xICE9PSBlLmluZGV4T2YobikpIGNvbnRpbnVlO1xuICAgIHRbbl0gPSByW25dO1xuICB9XG4gIHJldHVybiB0O1xufVxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KHIpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhyKSB8fCBfaXRlcmFibGVUb0FycmF5KHIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7XG4gIGlmIChcIm9iamVjdFwiICE9IHR5cGVvZiB0IHx8ICF0KSByZXR1cm4gdDtcbiAgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gIGlmICh2b2lkIDAgIT09IGUpIHtcbiAgICB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTtcbiAgICBpZiAoXCJvYmplY3RcIiAhPSB0eXBlb2YgaSkgcmV0dXJuIGk7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7XG59XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7XG4gIHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gXCJzeW1ib2xcIiA9PSB0eXBlb2YgaSA/IGkgOiBpICsgXCJcIjtcbn1cbmZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59XG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkociwgYSkge1xuICBpZiAocikge1xuICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiByKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkociwgYSk7XG4gICAgdmFyIHQgPSB7fS50b1N0cmluZy5jYWxsKHIpLnNsaWNlKDgsIC0xKTtcbiAgICByZXR1cm4gXCJPYmplY3RcIiA9PT0gdCAmJiByLmNvbnN0cnVjdG9yICYmICh0ID0gci5jb25zdHJ1Y3Rvci5uYW1lKSwgXCJNYXBcIiA9PT0gdCB8fCBcIlNldFwiID09PSB0ID8gQXJyYXkuZnJvbShyKSA6IFwiQXJndW1lbnRzXCIgPT09IHQgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QodCkgPyBfYXJyYXlMaWtlVG9BcnJheShyLCBhKSA6IHZvaWQgMDtcbiAgfVxufVxuXG52YXIgdmVyc2lvbiA9IFwiMS4xNS43XCI7XG5cbmZ1bmN0aW9uIHVzZXJBZ2VudChwYXR0ZXJuKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubmF2aWdhdG9yKSB7XG4gICAgcmV0dXJuICEhIC8qQF9fUFVSRV9fKi9uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKHBhdHRlcm4pO1xuICB9XG59XG52YXIgSUUxMU9yTGVzcyA9IHVzZXJBZ2VudCgvKD86VHJpZGVudC4qcnZbIDpdPzExXFwufG1zaWV8aWVtb2JpbGV8V2luZG93cyBQaG9uZSkvaSk7XG52YXIgRWRnZSA9IHVzZXJBZ2VudCgvRWRnZS9pKTtcbnZhciBGaXJlRm94ID0gdXNlckFnZW50KC9maXJlZm94L2kpO1xudmFyIFNhZmFyaSA9IHVzZXJBZ2VudCgvc2FmYXJpL2kpICYmICF1c2VyQWdlbnQoL2Nocm9tZS9pKSAmJiAhdXNlckFnZW50KC9hbmRyb2lkL2kpO1xudmFyIElPUyA9IHVzZXJBZ2VudCgvaVAoYWR8b2R8aG9uZSkvaSk7XG52YXIgQ2hyb21lRm9yQW5kcm9pZCA9IHVzZXJBZ2VudCgvY2hyb21lL2kpICYmIHVzZXJBZ2VudCgvYW5kcm9pZC9pKTtcblxudmFyIGNhcHR1cmVNb2RlID0ge1xuICBjYXB0dXJlOiBmYWxzZSxcbiAgcGFzc2l2ZTogZmFsc2Vcbn07XG5mdW5jdGlvbiBvbihlbCwgZXZlbnQsIGZuKSB7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZuLCAhSUUxMU9yTGVzcyAmJiBjYXB0dXJlTW9kZSk7XG59XG5mdW5jdGlvbiBvZmYoZWwsIGV2ZW50LCBmbikge1xuICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBmbiwgIUlFMTFPckxlc3MgJiYgY2FwdHVyZU1vZGUpO1xufVxuZnVuY3Rpb24gbWF0Y2hlcyggLyoqSFRNTEVsZW1lbnQqL2VsLCAvKipTdHJpbmcqL3NlbGVjdG9yKSB7XG4gIGlmICghc2VsZWN0b3IpIHJldHVybjtcbiAgc2VsZWN0b3JbMF0gPT09ICc+JyAmJiAoc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHJpbmcoMSkpO1xuICBpZiAoZWwpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKGVsLm1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIGVsLm1hdGNoZXMoc2VsZWN0b3IpO1xuICAgICAgfSBlbHNlIGlmIChlbC5tc01hdGNoZXNTZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gZWwubXNNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgfSBlbHNlIGlmIChlbC53ZWJraXRNYXRjaGVzU2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIGVsLndlYmtpdE1hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBnZXRQYXJlbnRPckhvc3QoZWwpIHtcbiAgcmV0dXJuIGVsLmhvc3QgJiYgZWwgIT09IGRvY3VtZW50ICYmIGVsLmhvc3Qubm9kZVR5cGUgJiYgZWwuaG9zdCAhPT0gZWwgPyBlbC5ob3N0IDogZWwucGFyZW50Tm9kZTtcbn1cbmZ1bmN0aW9uIGNsb3Nlc3QoIC8qKkhUTUxFbGVtZW50Ki9lbCwgLyoqU3RyaW5nKi9zZWxlY3RvciwgLyoqSFRNTEVsZW1lbnQqL2N0eCwgaW5jbHVkZUNUWCkge1xuICBpZiAoZWwpIHtcbiAgICBjdHggPSBjdHggfHwgZG9jdW1lbnQ7XG4gICAgZG8ge1xuICAgICAgaWYgKHNlbGVjdG9yICE9IG51bGwgJiYgKHNlbGVjdG9yWzBdID09PSAnPicgPyBlbC5wYXJlbnROb2RlID09PSBjdHggJiYgbWF0Y2hlcyhlbCwgc2VsZWN0b3IpIDogbWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSB8fCBpbmNsdWRlQ1RYICYmIGVsID09PSBjdHgpIHtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgfVxuICAgICAgaWYgKGVsID09PSBjdHgpIGJyZWFrO1xuICAgICAgLyoganNoaW50IGJvc3M6dHJ1ZSAqL1xuICAgIH0gd2hpbGUgKGVsID0gZ2V0UGFyZW50T3JIb3N0KGVsKSk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG52YXIgUl9TUEFDRSA9IC9cXHMrL2c7XG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhlbCwgbmFtZSwgc3RhdGUpIHtcbiAgaWYgKGVsICYmIG5hbWUpIHtcbiAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgICBlbC5jbGFzc0xpc3Rbc3RhdGUgPyAnYWRkJyA6ICdyZW1vdmUnXShuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGNsYXNzTmFtZSA9ICgnICcgKyBlbC5jbGFzc05hbWUgKyAnICcpLnJlcGxhY2UoUl9TUEFDRSwgJyAnKS5yZXBsYWNlKCcgJyArIG5hbWUgKyAnICcsICcgJyk7XG4gICAgICBlbC5jbGFzc05hbWUgPSAoY2xhc3NOYW1lICsgKHN0YXRlID8gJyAnICsgbmFtZSA6ICcnKSkucmVwbGFjZShSX1NQQUNFLCAnICcpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gY3NzKGVsLCBwcm9wLCB2YWwpIHtcbiAgdmFyIHN0eWxlID0gZWwgJiYgZWwuc3R5bGU7XG4gIGlmIChzdHlsZSkge1xuICAgIGlmICh2YWwgPT09IHZvaWQgMCkge1xuICAgICAgaWYgKGRvY3VtZW50LmRlZmF1bHRWaWV3ICYmIGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUpIHtcbiAgICAgICAgdmFsID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgJycpO1xuICAgICAgfSBlbHNlIGlmIChlbC5jdXJyZW50U3R5bGUpIHtcbiAgICAgICAgdmFsID0gZWwuY3VycmVudFN0eWxlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByb3AgPT09IHZvaWQgMCA/IHZhbCA6IHZhbFtwcm9wXTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCEocHJvcCBpbiBzdHlsZSkgJiYgcHJvcC5pbmRleE9mKCd3ZWJraXQnKSA9PT0gLTEpIHtcbiAgICAgICAgcHJvcCA9ICctd2Via2l0LScgKyBwcm9wO1xuICAgICAgfVxuICAgICAgc3R5bGVbcHJvcF0gPSB2YWwgKyAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyAnJyA6ICdweCcpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gbWF0cml4KGVsLCBzZWxmT25seSkge1xuICB2YXIgYXBwbGllZFRyYW5zZm9ybXMgPSAnJztcbiAgaWYgKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpIHtcbiAgICBhcHBsaWVkVHJhbnNmb3JtcyA9IGVsO1xuICB9IGVsc2Uge1xuICAgIGRvIHtcbiAgICAgIHZhciB0cmFuc2Zvcm0gPSBjc3MoZWwsICd0cmFuc2Zvcm0nKTtcbiAgICAgIGlmICh0cmFuc2Zvcm0gJiYgdHJhbnNmb3JtICE9PSAnbm9uZScpIHtcbiAgICAgICAgYXBwbGllZFRyYW5zZm9ybXMgPSB0cmFuc2Zvcm0gKyAnICcgKyBhcHBsaWVkVHJhbnNmb3JtcztcbiAgICAgIH1cbiAgICAgIC8qIGpzaGludCBib3NzOnRydWUgKi9cbiAgICB9IHdoaWxlICghc2VsZk9ubHkgJiYgKGVsID0gZWwucGFyZW50Tm9kZSkpO1xuICB9XG4gIHZhciBtYXRyaXhGbiA9IHdpbmRvdy5ET01NYXRyaXggfHwgd2luZG93LldlYktpdENTU01hdHJpeCB8fCB3aW5kb3cuQ1NTTWF0cml4IHx8IHdpbmRvdy5NU0NTU01hdHJpeDtcbiAgLypqc2hpbnQgLVcwNTYgKi9cbiAgcmV0dXJuIG1hdHJpeEZuICYmIG5ldyBtYXRyaXhGbihhcHBsaWVkVHJhbnNmb3Jtcyk7XG59XG5mdW5jdGlvbiBmaW5kKGN0eCwgdGFnTmFtZSwgaXRlcmF0b3IpIHtcbiAgaWYgKGN0eCkge1xuICAgIHZhciBsaXN0ID0gY3R4LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZ05hbWUpLFxuICAgICAgaSA9IDAsXG4gICAgICBuID0gbGlzdC5sZW5ndGg7XG4gICAgaWYgKGl0ZXJhdG9yKSB7XG4gICAgICBmb3IgKDsgaSA8IG47IGkrKykge1xuICAgICAgICBpdGVyYXRvcihsaXN0W2ldLCBpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cbiAgcmV0dXJuIFtdO1xufVxuZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpIHtcbiAgdmFyIHNjcm9sbGluZ0VsZW1lbnQgPSBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50O1xuICBpZiAoc2Nyb2xsaW5nRWxlbWVudCkge1xuICAgIHJldHVybiBzY3JvbGxpbmdFbGVtZW50O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cbn1cblxuLyoqXHJcbiAqIFJldHVybnMgdGhlIFwiYm91bmRpbmcgY2xpZW50IHJlY3RcIiBvZiBnaXZlbiBlbGVtZW50XHJcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbCAgICAgICAgICAgICAgICAgICAgICAgVGhlIGVsZW1lbnQgd2hvc2UgYm91bmRpbmdDbGllbnRSZWN0IGlzIHdhbnRlZFxyXG4gKiBAcGFyYW0gIHtbQm9vbGVhbl19IHJlbGF0aXZlVG9Db250YWluaW5nQmxvY2sgIFdoZXRoZXIgdGhlIHJlY3Qgc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBjb250YWluaW5nIGJsb2NrIG9mIChpbmNsdWRpbmcpIHRoZSBjb250YWluZXJcclxuICogQHBhcmFtICB7W0Jvb2xlYW5dfSByZWxhdGl2ZVRvTm9uU3RhdGljUGFyZW50ICBXaGV0aGVyIHRoZSByZWN0IHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgcmVsYXRpdmUgcGFyZW50IG9mIChpbmNsdWRpbmcpIHRoZSBjb250YWllbnJcclxuICogQHBhcmFtICB7W0Jvb2xlYW5dfSB1bmRvU2NhbGUgICAgICAgICAgICAgICAgICBXaGV0aGVyIHRoZSBjb250YWluZXIncyBzY2FsZSgpIHNob3VsZCBiZSB1bmRvbmVcclxuICogQHBhcmFtICB7W0hUTUxFbGVtZW50XX0gY29udGFpbmVyICAgICAgICAgICAgICBUaGUgcGFyZW50IHRoZSBlbGVtZW50IHdpbGwgYmUgcGxhY2VkIGluXHJcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGJvdW5kaW5nQ2xpZW50UmVjdCBvZiBlbCwgd2l0aCBzcGVjaWZpZWQgYWRqdXN0bWVudHNcclxuICovXG5mdW5jdGlvbiBnZXRSZWN0KGVsLCByZWxhdGl2ZVRvQ29udGFpbmluZ0Jsb2NrLCByZWxhdGl2ZVRvTm9uU3RhdGljUGFyZW50LCB1bmRvU2NhbGUsIGNvbnRhaW5lcikge1xuICBpZiAoIWVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAmJiBlbCAhPT0gd2luZG93KSByZXR1cm47XG4gIHZhciBlbFJlY3QsIHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCwgaGVpZ2h0LCB3aWR0aDtcbiAgaWYgKGVsICE9PSB3aW5kb3cgJiYgZWwucGFyZW50Tm9kZSAmJiBlbCAhPT0gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpKSB7XG4gICAgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdG9wID0gZWxSZWN0LnRvcDtcbiAgICBsZWZ0ID0gZWxSZWN0LmxlZnQ7XG4gICAgYm90dG9tID0gZWxSZWN0LmJvdHRvbTtcbiAgICByaWdodCA9IGVsUmVjdC5yaWdodDtcbiAgICBoZWlnaHQgPSBlbFJlY3QuaGVpZ2h0O1xuICAgIHdpZHRoID0gZWxSZWN0LndpZHRoO1xuICB9IGVsc2Uge1xuICAgIHRvcCA9IDA7XG4gICAgbGVmdCA9IDA7XG4gICAgYm90dG9tID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHJpZ2h0ID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIH1cbiAgaWYgKChyZWxhdGl2ZVRvQ29udGFpbmluZ0Jsb2NrIHx8IHJlbGF0aXZlVG9Ob25TdGF0aWNQYXJlbnQpICYmIGVsICE9PSB3aW5kb3cpIHtcbiAgICAvLyBBZGp1c3QgZm9yIHRyYW5zbGF0ZSgpXG4gICAgY29udGFpbmVyID0gY29udGFpbmVyIHx8IGVsLnBhcmVudE5vZGU7XG5cbiAgICAvLyBzb2x2ZXMgIzExMjMgKHNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM3OTUzODA2LzYwODgzMTIpXG4gICAgLy8gTm90IG5lZWRlZCBvbiA8PSBJRTExXG4gICAgaWYgKCFJRTExT3JMZXNzKSB7XG4gICAgICBkbyB7XG4gICAgICAgIGlmIChjb250YWluZXIgJiYgY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAmJiAoY3NzKGNvbnRhaW5lciwgJ3RyYW5zZm9ybScpICE9PSAnbm9uZScgfHwgcmVsYXRpdmVUb05vblN0YXRpY1BhcmVudCAmJiBjc3MoY29udGFpbmVyLCAncG9zaXRpb24nKSAhPT0gJ3N0YXRpYycpKSB7XG4gICAgICAgICAgdmFyIGNvbnRhaW5lclJlY3QgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAvLyBTZXQgcmVsYXRpdmUgdG8gZWRnZXMgb2YgcGFkZGluZyBib3ggb2YgY29udGFpbmVyXG4gICAgICAgICAgdG9wIC09IGNvbnRhaW5lclJlY3QudG9wICsgcGFyc2VJbnQoY3NzKGNvbnRhaW5lciwgJ2JvcmRlci10b3Atd2lkdGgnKSk7XG4gICAgICAgICAgbGVmdCAtPSBjb250YWluZXJSZWN0LmxlZnQgKyBwYXJzZUludChjc3MoY29udGFpbmVyLCAnYm9yZGVyLWxlZnQtd2lkdGgnKSk7XG4gICAgICAgICAgYm90dG9tID0gdG9wICsgZWxSZWN0LmhlaWdodDtcbiAgICAgICAgICByaWdodCA9IGxlZnQgKyBlbFJlY3Qud2lkdGg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLyoganNoaW50IGJvc3M6dHJ1ZSAqL1xuICAgICAgfSB3aGlsZSAoY29udGFpbmVyID0gY29udGFpbmVyLnBhcmVudE5vZGUpO1xuICAgIH1cbiAgfVxuICBpZiAodW5kb1NjYWxlICYmIGVsICE9PSB3aW5kb3cpIHtcbiAgICAvLyBBZGp1c3QgZm9yIHNjYWxlKClcbiAgICB2YXIgZWxNYXRyaXggPSBtYXRyaXgoY29udGFpbmVyIHx8IGVsKSxcbiAgICAgIHNjYWxlWCA9IGVsTWF0cml4ICYmIGVsTWF0cml4LmEsXG4gICAgICBzY2FsZVkgPSBlbE1hdHJpeCAmJiBlbE1hdHJpeC5kO1xuICAgIGlmIChlbE1hdHJpeCkge1xuICAgICAgdG9wIC89IHNjYWxlWTtcbiAgICAgIGxlZnQgLz0gc2NhbGVYO1xuICAgICAgd2lkdGggLz0gc2NhbGVYO1xuICAgICAgaGVpZ2h0IC89IHNjYWxlWTtcbiAgICAgIGJvdHRvbSA9IHRvcCArIGhlaWdodDtcbiAgICAgIHJpZ2h0ID0gbGVmdCArIHdpZHRoO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHRvcDogdG9wLFxuICAgIGxlZnQ6IGxlZnQsXG4gICAgYm90dG9tOiBib3R0b20sXG4gICAgcmlnaHQ6IHJpZ2h0LFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9O1xufVxuXG4vKipcclxuICogQ2hlY2tzIGlmIGEgc2lkZSBvZiBhbiBlbGVtZW50IGlzIHNjcm9sbGVkIHBhc3QgYSBzaWRlIG9mIGl0cyBwYXJlbnRzXHJcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSAgZWwgICAgICAgICAgIFRoZSBlbGVtZW50IHdobydzIHNpZGUgYmVpbmcgc2Nyb2xsZWQgb3V0IG9mIHZpZXcgaXMgaW4gcXVlc3Rpb25cclxuICogQHBhcmFtICB7U3RyaW5nfSAgICAgICBlbFNpZGUgICAgICAgU2lkZSBvZiB0aGUgZWxlbWVudCBpbiBxdWVzdGlvbiAoJ3RvcCcsICdsZWZ0JywgJ3JpZ2h0JywgJ2JvdHRvbScpXHJcbiAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgcGFyZW50U2lkZSAgIFNpZGUgb2YgdGhlIHBhcmVudCBpbiBxdWVzdGlvbiAoJ3RvcCcsICdsZWZ0JywgJ3JpZ2h0JywgJ2JvdHRvbScpXHJcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAgICAgICAgICAgICAgIFRoZSBwYXJlbnQgc2Nyb2xsIGVsZW1lbnQgdGhhdCB0aGUgZWwncyBzaWRlIGlzIHNjcm9sbGVkIHBhc3QsIG9yIG51bGwgaWYgdGhlcmUgaXMgbm8gc3VjaCBlbGVtZW50XHJcbiAqL1xuZnVuY3Rpb24gaXNTY3JvbGxlZFBhc3QoZWwsIGVsU2lkZSwgcGFyZW50U2lkZSkge1xuICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQoZWwsIHRydWUpLFxuICAgIGVsU2lkZVZhbCA9IGdldFJlY3QoZWwpW2VsU2lkZV07XG5cbiAgLyoganNoaW50IGJvc3M6dHJ1ZSAqL1xuICB3aGlsZSAocGFyZW50KSB7XG4gICAgdmFyIHBhcmVudFNpZGVWYWwgPSBnZXRSZWN0KHBhcmVudClbcGFyZW50U2lkZV0sXG4gICAgICB2aXNpYmxlID0gdm9pZCAwO1xuICAgIGlmIChwYXJlbnRTaWRlID09PSAndG9wJyB8fCBwYXJlbnRTaWRlID09PSAnbGVmdCcpIHtcbiAgICAgIHZpc2libGUgPSBlbFNpZGVWYWwgPj0gcGFyZW50U2lkZVZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmlzaWJsZSA9IGVsU2lkZVZhbCA8PSBwYXJlbnRTaWRlVmFsO1xuICAgIH1cbiAgICBpZiAoIXZpc2libGUpIHJldHVybiBwYXJlbnQ7XG4gICAgaWYgKHBhcmVudCA9PT0gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpKSBicmVhaztcbiAgICBwYXJlbnQgPSBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChwYXJlbnQsIGZhbHNlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxyXG4gKiBHZXRzIG50aCBjaGlsZCBvZiBlbCwgaWdub3JpbmcgaGlkZGVuIGNoaWxkcmVuLCBzb3J0YWJsZSdzIGVsZW1lbnRzIChkb2VzIG5vdCBpZ25vcmUgY2xvbmUgaWYgaXQncyB2aXNpYmxlKVxyXG4gKiBhbmQgbm9uLWRyYWdnYWJsZSBlbGVtZW50c1xyXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWwgICAgICAgVGhlIHBhcmVudCBlbGVtZW50XHJcbiAqIEBwYXJhbSAge051bWJlcn0gY2hpbGROdW0gICAgICBUaGUgaW5kZXggb2YgdGhlIGNoaWxkXHJcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9ucyAgICAgICBQYXJlbnQgU29ydGFibGUncyBvcHRpb25zXHJcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAgICAgICAgICBUaGUgY2hpbGQgYXQgaW5kZXggY2hpbGROdW0sIG9yIG51bGwgaWYgbm90IGZvdW5kXHJcbiAqL1xuZnVuY3Rpb24gZ2V0Q2hpbGQoZWwsIGNoaWxkTnVtLCBvcHRpb25zLCBpbmNsdWRlRHJhZ0VsKSB7XG4gIHZhciBjdXJyZW50Q2hpbGQgPSAwLFxuICAgIGkgPSAwLFxuICAgIGNoaWxkcmVuID0gZWwuY2hpbGRyZW47XG4gIHdoaWxlIChpIDwgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgaWYgKGNoaWxkcmVuW2ldLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJyAmJiBjaGlsZHJlbltpXSAhPT0gU29ydGFibGUuZ2hvc3QgJiYgKGluY2x1ZGVEcmFnRWwgfHwgY2hpbGRyZW5baV0gIT09IFNvcnRhYmxlLmRyYWdnZWQpICYmIGNsb3Nlc3QoY2hpbGRyZW5baV0sIG9wdGlvbnMuZHJhZ2dhYmxlLCBlbCwgZmFsc2UpKSB7XG4gICAgICBpZiAoY3VycmVudENoaWxkID09PSBjaGlsZE51bSkge1xuICAgICAgICByZXR1cm4gY2hpbGRyZW5baV07XG4gICAgICB9XG4gICAgICBjdXJyZW50Q2hpbGQrKztcbiAgICB9XG4gICAgaSsrO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcclxuICogR2V0cyB0aGUgbGFzdCBjaGlsZCBpbiB0aGUgZWwsIGlnbm9yaW5nIGdob3N0RWwgb3IgaW52aXNpYmxlIGVsZW1lbnRzIChjbG9uZXMpXHJcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbCAgICAgICBQYXJlbnQgZWxlbWVudFxyXG4gKiBAcGFyYW0gIHtzZWxlY3Rvcn0gc2VsZWN0b3IgICAgQW55IG90aGVyIGVsZW1lbnRzIHRoYXQgc2hvdWxkIGJlIGlnbm9yZWRcclxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9ICAgICAgICAgIFRoZSBsYXN0IGNoaWxkLCBpZ25vcmluZyBnaG9zdEVsXHJcbiAqL1xuZnVuY3Rpb24gbGFzdENoaWxkKGVsLCBzZWxlY3Rvcikge1xuICB2YXIgbGFzdCA9IGVsLmxhc3RFbGVtZW50Q2hpbGQ7XG4gIHdoaWxlIChsYXN0ICYmIChsYXN0ID09PSBTb3J0YWJsZS5naG9zdCB8fCBjc3MobGFzdCwgJ2Rpc3BsYXknKSA9PT0gJ25vbmUnIHx8IHNlbGVjdG9yICYmICFtYXRjaGVzKGxhc3QsIHNlbGVjdG9yKSkpIHtcbiAgICBsYXN0ID0gbGFzdC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICB9XG4gIHJldHVybiBsYXN0IHx8IG51bGw7XG59XG5cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBpbmRleCBvZiBhbiBlbGVtZW50IHdpdGhpbiBpdHMgcGFyZW50IGZvciBhIHNlbGVjdGVkIHNldCBvZlxyXG4gKiBlbGVtZW50c1xyXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWxcclxuICogQHBhcmFtICB7c2VsZWN0b3J9IHNlbGVjdG9yXHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXG5mdW5jdGlvbiBpbmRleChlbCwgc2VsZWN0b3IpIHtcbiAgdmFyIGluZGV4ID0gMDtcbiAgaWYgKCFlbCB8fCAhZWwucGFyZW50Tm9kZSkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIC8qIGpzaGludCBib3NzOnRydWUgKi9cbiAgd2hpbGUgKGVsID0gZWwucHJldmlvdXNFbGVtZW50U2libGluZykge1xuICAgIGlmIChlbC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpICE9PSAnVEVNUExBVEUnICYmIGVsICE9PSBTb3J0YWJsZS5jbG9uZSAmJiAoIXNlbGVjdG9yIHx8IG1hdGNoZXMoZWwsIHNlbGVjdG9yKSkpIHtcbiAgICAgIGluZGV4Kys7XG4gICAgfVxuICB9XG4gIHJldHVybiBpbmRleDtcbn1cblxuLyoqXHJcbiAqIFJldHVybnMgdGhlIHNjcm9sbCBvZmZzZXQgb2YgdGhlIGdpdmVuIGVsZW1lbnQsIGFkZGVkIHdpdGggYWxsIHRoZSBzY3JvbGwgb2Zmc2V0cyBvZiBwYXJlbnQgZWxlbWVudHMuXHJcbiAqIFRoZSB2YWx1ZSBpcyByZXR1cm5lZCBpbiByZWFsIHBpeGVscy5cclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsXHJcbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICAgICBPZmZzZXRzIGluIHRoZSBmb3JtYXQgb2YgW2xlZnQsIHRvcF1cclxuICovXG5mdW5jdGlvbiBnZXRSZWxhdGl2ZVNjcm9sbE9mZnNldChlbCkge1xuICB2YXIgb2Zmc2V0TGVmdCA9IDAsXG4gICAgb2Zmc2V0VG9wID0gMCxcbiAgICB3aW5TY3JvbGxlciA9IGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKTtcbiAgaWYgKGVsKSB7XG4gICAgZG8ge1xuICAgICAgdmFyIGVsTWF0cml4ID0gbWF0cml4KGVsKSxcbiAgICAgICAgc2NhbGVYID0gZWxNYXRyaXguYSxcbiAgICAgICAgc2NhbGVZID0gZWxNYXRyaXguZDtcbiAgICAgIG9mZnNldExlZnQgKz0gZWwuc2Nyb2xsTGVmdCAqIHNjYWxlWDtcbiAgICAgIG9mZnNldFRvcCArPSBlbC5zY3JvbGxUb3AgKiBzY2FsZVk7XG4gICAgfSB3aGlsZSAoZWwgIT09IHdpblNjcm9sbGVyICYmIChlbCA9IGVsLnBhcmVudE5vZGUpKTtcbiAgfVxuICByZXR1cm4gW29mZnNldExlZnQsIG9mZnNldFRvcF07XG59XG5cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgb2JqZWN0IHdpdGhpbiB0aGUgZ2l2ZW4gYXJyYXlcclxuICogQHBhcmFtICB7QXJyYXl9IGFyciAgIEFycmF5IHRoYXQgbWF5IG9yIG1heSBub3QgaG9sZCB0aGUgb2JqZWN0XHJcbiAqIEBwYXJhbSAge09iamVjdH0gb2JqICBBbiBvYmplY3QgdGhhdCBoYXMgYSBrZXktdmFsdWUgcGFpciB1bmlxdWUgdG8gYW5kIGlkZW50aWNhbCB0byBhIGtleS12YWx1ZSBwYWlyIGluIHRoZSBvYmplY3QgeW91IHdhbnQgdG8gZmluZFxyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgVGhlIGluZGV4IG9mIHRoZSBvYmplY3QgaW4gdGhlIGFycmF5LCBvciAtMVxyXG4gKi9cbmZ1bmN0aW9uIGluZGV4T2ZPYmplY3QoYXJyLCBvYmopIHtcbiAgZm9yICh2YXIgaSBpbiBhcnIpIHtcbiAgICBpZiAoIWFyci5oYXNPd25Qcm9wZXJ0eShpKSkgY29udGludWU7XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIG9ialtrZXldID09PSBhcnJbaV1ba2V5XSkgcmV0dXJuIE51bWJlcihpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuZnVuY3Rpb24gZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQoZWwsIGluY2x1ZGVTZWxmKSB7XG4gIC8vIHNraXAgdG8gd2luZG93XG4gIGlmICghZWwgfHwgIWVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkgcmV0dXJuIGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKTtcbiAgdmFyIGVsZW0gPSBlbDtcbiAgdmFyIGdvdFNlbGYgPSBmYWxzZTtcbiAgZG8ge1xuICAgIC8vIHdlIGRvbid0IG5lZWQgdG8gZ2V0IGVsZW0gY3NzIGlmIGl0IGlzbid0IGV2ZW4gb3ZlcmZsb3dpbmcgaW4gdGhlIGZpcnN0IHBsYWNlIChwZXJmb3JtYW5jZSlcbiAgICBpZiAoZWxlbS5jbGllbnRXaWR0aCA8IGVsZW0uc2Nyb2xsV2lkdGggfHwgZWxlbS5jbGllbnRIZWlnaHQgPCBlbGVtLnNjcm9sbEhlaWdodCkge1xuICAgICAgdmFyIGVsZW1DU1MgPSBjc3MoZWxlbSk7XG4gICAgICBpZiAoZWxlbS5jbGllbnRXaWR0aCA8IGVsZW0uc2Nyb2xsV2lkdGggJiYgKGVsZW1DU1Mub3ZlcmZsb3dYID09ICdhdXRvJyB8fCBlbGVtQ1NTLm92ZXJmbG93WCA9PSAnc2Nyb2xsJykgfHwgZWxlbS5jbGllbnRIZWlnaHQgPCBlbGVtLnNjcm9sbEhlaWdodCAmJiAoZWxlbUNTUy5vdmVyZmxvd1kgPT0gJ2F1dG8nIHx8IGVsZW1DU1Mub3ZlcmZsb3dZID09ICdzY3JvbGwnKSkge1xuICAgICAgICBpZiAoIWVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0IHx8IGVsZW0gPT09IGRvY3VtZW50LmJvZHkpIHJldHVybiBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCk7XG4gICAgICAgIGlmIChnb3RTZWxmIHx8IGluY2x1ZGVTZWxmKSByZXR1cm4gZWxlbTtcbiAgICAgICAgZ290U2VsZiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIC8qIGpzaGludCBib3NzOnRydWUgKi9cbiAgfSB3aGlsZSAoZWxlbSA9IGVsZW0ucGFyZW50Tm9kZSk7XG4gIHJldHVybiBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCk7XG59XG5mdW5jdGlvbiBleHRlbmQoZHN0LCBzcmMpIHtcbiAgaWYgKGRzdCAmJiBzcmMpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gc3JjKSB7XG4gICAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgZHN0W2tleV0gPSBzcmNba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRzdDtcbn1cbmZ1bmN0aW9uIGlzUmVjdEVxdWFsKHJlY3QxLCByZWN0Mikge1xuICByZXR1cm4gTWF0aC5yb3VuZChyZWN0MS50b3ApID09PSBNYXRoLnJvdW5kKHJlY3QyLnRvcCkgJiYgTWF0aC5yb3VuZChyZWN0MS5sZWZ0KSA9PT0gTWF0aC5yb3VuZChyZWN0Mi5sZWZ0KSAmJiBNYXRoLnJvdW5kKHJlY3QxLmhlaWdodCkgPT09IE1hdGgucm91bmQocmVjdDIuaGVpZ2h0KSAmJiBNYXRoLnJvdW5kKHJlY3QxLndpZHRoKSA9PT0gTWF0aC5yb3VuZChyZWN0Mi53aWR0aCk7XG59XG52YXIgX3Rocm90dGxlVGltZW91dDtcbmZ1bmN0aW9uIHRocm90dGxlKGNhbGxiYWNrLCBtcykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghX3Rocm90dGxlVGltZW91dCkge1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIF90aGlzID0gdGhpcztcbiAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBjYWxsYmFjay5jYWxsKF90aGlzLCBhcmdzWzBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrLmFwcGx5KF90aGlzLCBhcmdzKTtcbiAgICAgIH1cbiAgICAgIF90aHJvdHRsZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3Rocm90dGxlVGltZW91dCA9IHZvaWQgMDtcbiAgICAgIH0sIG1zKTtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBjYW5jZWxUaHJvdHRsZSgpIHtcbiAgY2xlYXJUaW1lb3V0KF90aHJvdHRsZVRpbWVvdXQpO1xuICBfdGhyb3R0bGVUaW1lb3V0ID0gdm9pZCAwO1xufVxuZnVuY3Rpb24gc2Nyb2xsQnkoZWwsIHgsIHkpIHtcbiAgZWwuc2Nyb2xsTGVmdCArPSB4O1xuICBlbC5zY3JvbGxUb3AgKz0geTtcbn1cbmZ1bmN0aW9uIGNsb25lKGVsKSB7XG4gIHZhciBQb2x5bWVyID0gd2luZG93LlBvbHltZXI7XG4gIHZhciAkID0gd2luZG93LmpRdWVyeSB8fCB3aW5kb3cuWmVwdG87XG4gIGlmIChQb2x5bWVyICYmIFBvbHltZXIuZG9tKSB7XG4gICAgcmV0dXJuIFBvbHltZXIuZG9tKGVsKS5jbG9uZU5vZGUodHJ1ZSk7XG4gIH0gZWxzZSBpZiAoJCkge1xuICAgIHJldHVybiAkKGVsKS5jbG9uZSh0cnVlKVswXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZWwuY2xvbmVOb2RlKHRydWUpO1xuICB9XG59XG5mdW5jdGlvbiBzZXRSZWN0KGVsLCByZWN0KSB7XG4gIGNzcyhlbCwgJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7XG4gIGNzcyhlbCwgJ3RvcCcsIHJlY3QudG9wKTtcbiAgY3NzKGVsLCAnbGVmdCcsIHJlY3QubGVmdCk7XG4gIGNzcyhlbCwgJ3dpZHRoJywgcmVjdC53aWR0aCk7XG4gIGNzcyhlbCwgJ2hlaWdodCcsIHJlY3QuaGVpZ2h0KTtcbn1cbmZ1bmN0aW9uIHVuc2V0UmVjdChlbCkge1xuICBjc3MoZWwsICdwb3NpdGlvbicsICcnKTtcbiAgY3NzKGVsLCAndG9wJywgJycpO1xuICBjc3MoZWwsICdsZWZ0JywgJycpO1xuICBjc3MoZWwsICd3aWR0aCcsICcnKTtcbiAgY3NzKGVsLCAnaGVpZ2h0JywgJycpO1xufVxuZnVuY3Rpb24gZ2V0Q2hpbGRDb250YWluaW5nUmVjdEZyb21FbGVtZW50KGNvbnRhaW5lciwgb3B0aW9ucywgZ2hvc3RFbCkge1xuICB2YXIgcmVjdCA9IHt9O1xuICBBcnJheS5mcm9tKGNvbnRhaW5lci5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICB2YXIgX3JlY3QkbGVmdCwgX3JlY3QkdG9wLCBfcmVjdCRyaWdodCwgX3JlY3QkYm90dG9tO1xuICAgIGlmICghY2xvc2VzdChjaGlsZCwgb3B0aW9ucy5kcmFnZ2FibGUsIGNvbnRhaW5lciwgZmFsc2UpIHx8IGNoaWxkLmFuaW1hdGVkIHx8IGNoaWxkID09PSBnaG9zdEVsKSByZXR1cm47XG4gICAgdmFyIGNoaWxkUmVjdCA9IGdldFJlY3QoY2hpbGQpO1xuICAgIHJlY3QubGVmdCA9IE1hdGgubWluKChfcmVjdCRsZWZ0ID0gcmVjdC5sZWZ0KSAhPT0gbnVsbCAmJiBfcmVjdCRsZWZ0ICE9PSB2b2lkIDAgPyBfcmVjdCRsZWZ0IDogSW5maW5pdHksIGNoaWxkUmVjdC5sZWZ0KTtcbiAgICByZWN0LnRvcCA9IE1hdGgubWluKChfcmVjdCR0b3AgPSByZWN0LnRvcCkgIT09IG51bGwgJiYgX3JlY3QkdG9wICE9PSB2b2lkIDAgPyBfcmVjdCR0b3AgOiBJbmZpbml0eSwgY2hpbGRSZWN0LnRvcCk7XG4gICAgcmVjdC5yaWdodCA9IE1hdGgubWF4KChfcmVjdCRyaWdodCA9IHJlY3QucmlnaHQpICE9PSBudWxsICYmIF9yZWN0JHJpZ2h0ICE9PSB2b2lkIDAgPyBfcmVjdCRyaWdodCA6IC1JbmZpbml0eSwgY2hpbGRSZWN0LnJpZ2h0KTtcbiAgICByZWN0LmJvdHRvbSA9IE1hdGgubWF4KChfcmVjdCRib3R0b20gPSByZWN0LmJvdHRvbSkgIT09IG51bGwgJiYgX3JlY3QkYm90dG9tICE9PSB2b2lkIDAgPyBfcmVjdCRib3R0b20gOiAtSW5maW5pdHksIGNoaWxkUmVjdC5ib3R0b20pO1xuICB9KTtcbiAgcmVjdC53aWR0aCA9IHJlY3QucmlnaHQgLSByZWN0LmxlZnQ7XG4gIHJlY3QuaGVpZ2h0ID0gcmVjdC5ib3R0b20gLSByZWN0LnRvcDtcbiAgcmVjdC54ID0gcmVjdC5sZWZ0O1xuICByZWN0LnkgPSByZWN0LnRvcDtcbiAgcmV0dXJuIHJlY3Q7XG59XG52YXIgZXhwYW5kbyA9ICdTb3J0YWJsZScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuZnVuY3Rpb24gQW5pbWF0aW9uU3RhdGVNYW5hZ2VyKCkge1xuICB2YXIgYW5pbWF0aW9uU3RhdGVzID0gW10sXG4gICAgYW5pbWF0aW9uQ2FsbGJhY2tJZDtcbiAgcmV0dXJuIHtcbiAgICBjYXB0dXJlQW5pbWF0aW9uU3RhdGU6IGZ1bmN0aW9uIGNhcHR1cmVBbmltYXRpb25TdGF0ZSgpIHtcbiAgICAgIGFuaW1hdGlvblN0YXRlcyA9IFtdO1xuICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuYW5pbWF0aW9uKSByZXR1cm47XG4gICAgICB2YXIgY2hpbGRyZW4gPSBbXS5zbGljZS5jYWxsKHRoaXMuZWwuY2hpbGRyZW4pO1xuICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNzcyhjaGlsZCwgJ2Rpc3BsYXknKSA9PT0gJ25vbmUnIHx8IGNoaWxkID09PSBTb3J0YWJsZS5naG9zdCkgcmV0dXJuO1xuICAgICAgICBhbmltYXRpb25TdGF0ZXMucHVzaCh7XG4gICAgICAgICAgdGFyZ2V0OiBjaGlsZCxcbiAgICAgICAgICByZWN0OiBnZXRSZWN0KGNoaWxkKVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGZyb21SZWN0ID0gX29iamVjdFNwcmVhZDIoe30sIGFuaW1hdGlvblN0YXRlc1thbmltYXRpb25TdGF0ZXMubGVuZ3RoIC0gMV0ucmVjdCk7XG5cbiAgICAgICAgLy8gSWYgYW5pbWF0aW5nOiBjb21wZW5zYXRlIGZvciBjdXJyZW50IGFuaW1hdGlvblxuICAgICAgICBpZiAoY2hpbGQudGhpc0FuaW1hdGlvbkR1cmF0aW9uKSB7XG4gICAgICAgICAgdmFyIGNoaWxkTWF0cml4ID0gbWF0cml4KGNoaWxkLCB0cnVlKTtcbiAgICAgICAgICBpZiAoY2hpbGRNYXRyaXgpIHtcbiAgICAgICAgICAgIGZyb21SZWN0LnRvcCAtPSBjaGlsZE1hdHJpeC5mO1xuICAgICAgICAgICAgZnJvbVJlY3QubGVmdCAtPSBjaGlsZE1hdHJpeC5lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjaGlsZC5mcm9tUmVjdCA9IGZyb21SZWN0O1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBhZGRBbmltYXRpb25TdGF0ZTogZnVuY3Rpb24gYWRkQW5pbWF0aW9uU3RhdGUoc3RhdGUpIHtcbiAgICAgIGFuaW1hdGlvblN0YXRlcy5wdXNoKHN0YXRlKTtcbiAgICB9LFxuICAgIHJlbW92ZUFuaW1hdGlvblN0YXRlOiBmdW5jdGlvbiByZW1vdmVBbmltYXRpb25TdGF0ZSh0YXJnZXQpIHtcbiAgICAgIGFuaW1hdGlvblN0YXRlcy5zcGxpY2UoaW5kZXhPZk9iamVjdChhbmltYXRpb25TdGF0ZXMsIHtcbiAgICAgICAgdGFyZ2V0OiB0YXJnZXRcbiAgICAgIH0pLCAxKTtcbiAgICB9LFxuICAgIGFuaW1hdGVBbGw6IGZ1bmN0aW9uIGFuaW1hdGVBbGwoY2FsbGJhY2spIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5hbmltYXRpb24pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGFuaW1hdGlvbkNhbGxiYWNrSWQpO1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjaygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgYW5pbWF0aW5nID0gZmFsc2UsXG4gICAgICAgIGFuaW1hdGlvblRpbWUgPSAwO1xuICAgICAgYW5pbWF0aW9uU3RhdGVzLmZvckVhY2goZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHZhciB0aW1lID0gMCxcbiAgICAgICAgICB0YXJnZXQgPSBzdGF0ZS50YXJnZXQsXG4gICAgICAgICAgZnJvbVJlY3QgPSB0YXJnZXQuZnJvbVJlY3QsXG4gICAgICAgICAgdG9SZWN0ID0gZ2V0UmVjdCh0YXJnZXQpLFxuICAgICAgICAgIHByZXZGcm9tUmVjdCA9IHRhcmdldC5wcmV2RnJvbVJlY3QsXG4gICAgICAgICAgcHJldlRvUmVjdCA9IHRhcmdldC5wcmV2VG9SZWN0LFxuICAgICAgICAgIGFuaW1hdGluZ1JlY3QgPSBzdGF0ZS5yZWN0LFxuICAgICAgICAgIHRhcmdldE1hdHJpeCA9IG1hdHJpeCh0YXJnZXQsIHRydWUpO1xuICAgICAgICBpZiAodGFyZ2V0TWF0cml4KSB7XG4gICAgICAgICAgLy8gQ29tcGVuc2F0ZSBmb3IgY3VycmVudCBhbmltYXRpb25cbiAgICAgICAgICB0b1JlY3QudG9wIC09IHRhcmdldE1hdHJpeC5mO1xuICAgICAgICAgIHRvUmVjdC5sZWZ0IC09IHRhcmdldE1hdHJpeC5lO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldC50b1JlY3QgPSB0b1JlY3Q7XG4gICAgICAgIGlmICh0YXJnZXQudGhpc0FuaW1hdGlvbkR1cmF0aW9uKSB7XG4gICAgICAgICAgLy8gQ291bGQgYWxzbyBjaGVjayBpZiBhbmltYXRpbmdSZWN0IGlzIGJldHdlZW4gZnJvbVJlY3QgYW5kIHRvUmVjdFxuICAgICAgICAgIGlmIChpc1JlY3RFcXVhbChwcmV2RnJvbVJlY3QsIHRvUmVjdCkgJiYgIWlzUmVjdEVxdWFsKGZyb21SZWN0LCB0b1JlY3QpICYmXG4gICAgICAgICAgLy8gTWFrZSBzdXJlIGFuaW1hdGluZ1JlY3QgaXMgb24gbGluZSBiZXR3ZWVuIHRvUmVjdCAmIGZyb21SZWN0XG4gICAgICAgICAgKGFuaW1hdGluZ1JlY3QudG9wIC0gdG9SZWN0LnRvcCkgLyAoYW5pbWF0aW5nUmVjdC5sZWZ0IC0gdG9SZWN0LmxlZnQpID09PSAoZnJvbVJlY3QudG9wIC0gdG9SZWN0LnRvcCkgLyAoZnJvbVJlY3QubGVmdCAtIHRvUmVjdC5sZWZ0KSkge1xuICAgICAgICAgICAgLy8gSWYgcmV0dXJuaW5nIHRvIHNhbWUgcGxhY2UgYXMgc3RhcnRlZCBmcm9tIGFuaW1hdGlvbiBhbmQgb24gc2FtZSBheGlzXG4gICAgICAgICAgICB0aW1lID0gY2FsY3VsYXRlUmVhbFRpbWUoYW5pbWF0aW5nUmVjdCwgcHJldkZyb21SZWN0LCBwcmV2VG9SZWN0LCBfdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBmcm9tUmVjdCAhPSB0b1JlY3Q6IGFuaW1hdGVcbiAgICAgICAgaWYgKCFpc1JlY3RFcXVhbCh0b1JlY3QsIGZyb21SZWN0KSkge1xuICAgICAgICAgIHRhcmdldC5wcmV2RnJvbVJlY3QgPSBmcm9tUmVjdDtcbiAgICAgICAgICB0YXJnZXQucHJldlRvUmVjdCA9IHRvUmVjdDtcbiAgICAgICAgICBpZiAoIXRpbWUpIHtcbiAgICAgICAgICAgIHRpbWUgPSBfdGhpcy5vcHRpb25zLmFuaW1hdGlvbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgX3RoaXMuYW5pbWF0ZSh0YXJnZXQsIGFuaW1hdGluZ1JlY3QsIHRvUmVjdCwgdGltZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpbWUpIHtcbiAgICAgICAgICBhbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAgIGFuaW1hdGlvblRpbWUgPSBNYXRoLm1heChhbmltYXRpb25UaW1lLCB0aW1lKTtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGFyZ2V0LmFuaW1hdGlvblJlc2V0VGltZXIpO1xuICAgICAgICAgIHRhcmdldC5hbmltYXRpb25SZXNldFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0YXJnZXQuYW5pbWF0aW9uVGltZSA9IDA7XG4gICAgICAgICAgICB0YXJnZXQucHJldkZyb21SZWN0ID0gbnVsbDtcbiAgICAgICAgICAgIHRhcmdldC5mcm9tUmVjdCA9IG51bGw7XG4gICAgICAgICAgICB0YXJnZXQucHJldlRvUmVjdCA9IG51bGw7XG4gICAgICAgICAgICB0YXJnZXQudGhpc0FuaW1hdGlvbkR1cmF0aW9uID0gbnVsbDtcbiAgICAgICAgICB9LCB0aW1lKTtcbiAgICAgICAgICB0YXJnZXQudGhpc0FuaW1hdGlvbkR1cmF0aW9uID0gdGltZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjbGVhclRpbWVvdXQoYW5pbWF0aW9uQ2FsbGJhY2tJZCk7XG4gICAgICBpZiAoIWFuaW1hdGluZykge1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW5pbWF0aW9uQ2FsbGJhY2tJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKCk7XG4gICAgICAgIH0sIGFuaW1hdGlvblRpbWUpO1xuICAgICAgfVxuICAgICAgYW5pbWF0aW9uU3RhdGVzID0gW107XG4gICAgfSxcbiAgICBhbmltYXRlOiBmdW5jdGlvbiBhbmltYXRlKHRhcmdldCwgY3VycmVudFJlY3QsIHRvUmVjdCwgZHVyYXRpb24pIHtcbiAgICAgIGlmIChkdXJhdGlvbikge1xuICAgICAgICBjc3ModGFyZ2V0LCAndHJhbnNpdGlvbicsICcnKTtcbiAgICAgICAgY3NzKHRhcmdldCwgJ3RyYW5zZm9ybScsICcnKTtcbiAgICAgICAgdmFyIGVsTWF0cml4ID0gbWF0cml4KHRoaXMuZWwpLFxuICAgICAgICAgIHNjYWxlWCA9IGVsTWF0cml4ICYmIGVsTWF0cml4LmEsXG4gICAgICAgICAgc2NhbGVZID0gZWxNYXRyaXggJiYgZWxNYXRyaXguZCxcbiAgICAgICAgICB0cmFuc2xhdGVYID0gKGN1cnJlbnRSZWN0LmxlZnQgLSB0b1JlY3QubGVmdCkgLyAoc2NhbGVYIHx8IDEpLFxuICAgICAgICAgIHRyYW5zbGF0ZVkgPSAoY3VycmVudFJlY3QudG9wIC0gdG9SZWN0LnRvcCkgLyAoc2NhbGVZIHx8IDEpO1xuICAgICAgICB0YXJnZXQuYW5pbWF0aW5nWCA9ICEhdHJhbnNsYXRlWDtcbiAgICAgICAgdGFyZ2V0LmFuaW1hdGluZ1kgPSAhIXRyYW5zbGF0ZVk7XG4gICAgICAgIGNzcyh0YXJnZXQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlM2QoJyArIHRyYW5zbGF0ZVggKyAncHgsJyArIHRyYW5zbGF0ZVkgKyAncHgsMCknKTtcbiAgICAgICAgdGhpcy5mb3JSZXBhaW50RHVtbXkgPSByZXBhaW50KHRhcmdldCk7IC8vIHJlcGFpbnRcblxuICAgICAgICBjc3ModGFyZ2V0LCAndHJhbnNpdGlvbicsICd0cmFuc2Zvcm0gJyArIGR1cmF0aW9uICsgJ21zJyArICh0aGlzLm9wdGlvbnMuZWFzaW5nID8gJyAnICsgdGhpcy5vcHRpb25zLmVhc2luZyA6ICcnKSk7XG4gICAgICAgIGNzcyh0YXJnZXQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlM2QoMCwwLDApJyk7XG4gICAgICAgIHR5cGVvZiB0YXJnZXQuYW5pbWF0ZWQgPT09ICdudW1iZXInICYmIGNsZWFyVGltZW91dCh0YXJnZXQuYW5pbWF0ZWQpO1xuICAgICAgICB0YXJnZXQuYW5pbWF0ZWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjc3ModGFyZ2V0LCAndHJhbnNpdGlvbicsICcnKTtcbiAgICAgICAgICBjc3ModGFyZ2V0LCAndHJhbnNmb3JtJywgJycpO1xuICAgICAgICAgIHRhcmdldC5hbmltYXRlZCA9IGZhbHNlO1xuICAgICAgICAgIHRhcmdldC5hbmltYXRpbmdYID0gZmFsc2U7XG4gICAgICAgICAgdGFyZ2V0LmFuaW1hdGluZ1kgPSBmYWxzZTtcbiAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIHJlcGFpbnQodGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXQub2Zmc2V0V2lkdGg7XG59XG5mdW5jdGlvbiBjYWxjdWxhdGVSZWFsVGltZShhbmltYXRpbmdSZWN0LCBmcm9tUmVjdCwgdG9SZWN0LCBvcHRpb25zKSB7XG4gIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coZnJvbVJlY3QudG9wIC0gYW5pbWF0aW5nUmVjdC50b3AsIDIpICsgTWF0aC5wb3coZnJvbVJlY3QubGVmdCAtIGFuaW1hdGluZ1JlY3QubGVmdCwgMikpIC8gTWF0aC5zcXJ0KE1hdGgucG93KGZyb21SZWN0LnRvcCAtIHRvUmVjdC50b3AsIDIpICsgTWF0aC5wb3coZnJvbVJlY3QubGVmdCAtIHRvUmVjdC5sZWZ0LCAyKSkgKiBvcHRpb25zLmFuaW1hdGlvbjtcbn1cblxudmFyIHBsdWdpbnMgPSBbXTtcbnZhciBkZWZhdWx0cyA9IHtcbiAgaW5pdGlhbGl6ZUJ5RGVmYXVsdDogdHJ1ZVxufTtcbnZhciBQbHVnaW5NYW5hZ2VyID0ge1xuICBtb3VudDogZnVuY3Rpb24gbW91bnQocGx1Z2luKSB7XG4gICAgLy8gU2V0IGRlZmF1bHQgc3RhdGljIHByb3BlcnRpZXNcbiAgICBmb3IgKHZhciBvcHRpb24gaW4gZGVmYXVsdHMpIHtcbiAgICAgIGlmIChkZWZhdWx0cy5oYXNPd25Qcm9wZXJ0eShvcHRpb24pICYmICEob3B0aW9uIGluIHBsdWdpbikpIHtcbiAgICAgICAgcGx1Z2luW29wdGlvbl0gPSBkZWZhdWx0c1tvcHRpb25dO1xuICAgICAgfVxuICAgIH1cbiAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHApIHtcbiAgICAgIGlmIChwLnBsdWdpbk5hbWUgPT09IHBsdWdpbi5wbHVnaW5OYW1lKSB7XG4gICAgICAgIHRocm93IFwiU29ydGFibGU6IENhbm5vdCBtb3VudCBwbHVnaW4gXCIuY29uY2F0KHBsdWdpbi5wbHVnaW5OYW1lLCBcIiBtb3JlIHRoYW4gb25jZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBwbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgfSxcbiAgcGx1Z2luRXZlbnQ6IGZ1bmN0aW9uIHBsdWdpbkV2ZW50KGV2ZW50TmFtZSwgc29ydGFibGUsIGV2dCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy5ldmVudENhbmNlbGVkID0gZmFsc2U7XG4gICAgZXZ0LmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmV2ZW50Q2FuY2VsZWQgPSB0cnVlO1xuICAgIH07XG4gICAgdmFyIGV2ZW50TmFtZUdsb2JhbCA9IGV2ZW50TmFtZSArICdHbG9iYWwnO1xuICAgIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICBpZiAoIXNvcnRhYmxlW3BsdWdpbi5wbHVnaW5OYW1lXSkgcmV0dXJuO1xuICAgICAgLy8gRmlyZSBnbG9iYWwgZXZlbnRzIGlmIGl0IGV4aXN0cyBpbiB0aGlzIHNvcnRhYmxlXG4gICAgICBpZiAoc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdW2V2ZW50TmFtZUdsb2JhbF0pIHtcbiAgICAgICAgc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdW2V2ZW50TmFtZUdsb2JhbF0oX29iamVjdFNwcmVhZDIoe1xuICAgICAgICAgIHNvcnRhYmxlOiBzb3J0YWJsZVxuICAgICAgICB9LCBldnQpKTtcbiAgICAgIH1cblxuICAgICAgLy8gT25seSBmaXJlIHBsdWdpbiBldmVudCBpZiBwbHVnaW4gaXMgZW5hYmxlZCBpbiB0aGlzIHNvcnRhYmxlLFxuICAgICAgLy8gYW5kIHBsdWdpbiBoYXMgZXZlbnQgZGVmaW5lZFxuICAgICAgaWYgKHNvcnRhYmxlLm9wdGlvbnNbcGx1Z2luLnBsdWdpbk5hbWVdICYmIHNvcnRhYmxlW3BsdWdpbi5wbHVnaW5OYW1lXVtldmVudE5hbWVdKSB7XG4gICAgICAgIHNvcnRhYmxlW3BsdWdpbi5wbHVnaW5OYW1lXVtldmVudE5hbWVdKF9vYmplY3RTcHJlYWQyKHtcbiAgICAgICAgICBzb3J0YWJsZTogc29ydGFibGVcbiAgICAgICAgfSwgZXZ0KSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIGluaXRpYWxpemVQbHVnaW5zOiBmdW5jdGlvbiBpbml0aWFsaXplUGx1Z2lucyhzb3J0YWJsZSwgZWwsIGRlZmF1bHRzLCBvcHRpb25zKSB7XG4gICAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgIHZhciBwbHVnaW5OYW1lID0gcGx1Z2luLnBsdWdpbk5hbWU7XG4gICAgICBpZiAoIXNvcnRhYmxlLm9wdGlvbnNbcGx1Z2luTmFtZV0gJiYgIXBsdWdpbi5pbml0aWFsaXplQnlEZWZhdWx0KSByZXR1cm47XG4gICAgICB2YXIgaW5pdGlhbGl6ZWQgPSBuZXcgcGx1Z2luKHNvcnRhYmxlLCBlbCwgc29ydGFibGUub3B0aW9ucyk7XG4gICAgICBpbml0aWFsaXplZC5zb3J0YWJsZSA9IHNvcnRhYmxlO1xuICAgICAgaW5pdGlhbGl6ZWQub3B0aW9ucyA9IHNvcnRhYmxlLm9wdGlvbnM7XG4gICAgICBzb3J0YWJsZVtwbHVnaW5OYW1lXSA9IGluaXRpYWxpemVkO1xuXG4gICAgICAvLyBBZGQgZGVmYXVsdCBvcHRpb25zIGZyb20gcGx1Z2luXG4gICAgICBfZXh0ZW5kcyhkZWZhdWx0cywgaW5pdGlhbGl6ZWQuZGVmYXVsdHMpO1xuICAgIH0pO1xuICAgIGZvciAodmFyIG9wdGlvbiBpbiBzb3J0YWJsZS5vcHRpb25zKSB7XG4gICAgICBpZiAoIXNvcnRhYmxlLm9wdGlvbnMuaGFzT3duUHJvcGVydHkob3B0aW9uKSkgY29udGludWU7XG4gICAgICB2YXIgbW9kaWZpZWQgPSB0aGlzLm1vZGlmeU9wdGlvbihzb3J0YWJsZSwgb3B0aW9uLCBzb3J0YWJsZS5vcHRpb25zW29wdGlvbl0pO1xuICAgICAgaWYgKHR5cGVvZiBtb2RpZmllZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc29ydGFibGUub3B0aW9uc1tvcHRpb25dID0gbW9kaWZpZWQ7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBnZXRFdmVudFByb3BlcnRpZXM6IGZ1bmN0aW9uIGdldEV2ZW50UHJvcGVydGllcyhuYW1lLCBzb3J0YWJsZSkge1xuICAgIHZhciBldmVudFByb3BlcnRpZXMgPSB7fTtcbiAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgaWYgKHR5cGVvZiBwbHVnaW4uZXZlbnRQcm9wZXJ0aWVzICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XG4gICAgICBfZXh0ZW5kcyhldmVudFByb3BlcnRpZXMsIHBsdWdpbi5ldmVudFByb3BlcnRpZXMuY2FsbChzb3J0YWJsZVtwbHVnaW4ucGx1Z2luTmFtZV0sIG5hbWUpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZXZlbnRQcm9wZXJ0aWVzO1xuICB9LFxuICBtb2RpZnlPcHRpb246IGZ1bmN0aW9uIG1vZGlmeU9wdGlvbihzb3J0YWJsZSwgbmFtZSwgdmFsdWUpIHtcbiAgICB2YXIgbW9kaWZpZWRWYWx1ZTtcbiAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgLy8gUGx1Z2luIG11c3QgZXhpc3Qgb24gdGhlIFNvcnRhYmxlXG4gICAgICBpZiAoIXNvcnRhYmxlW3BsdWdpbi5wbHVnaW5OYW1lXSkgcmV0dXJuO1xuXG4gICAgICAvLyBJZiBzdGF0aWMgb3B0aW9uIGxpc3RlbmVyIGV4aXN0cyBmb3IgdGhpcyBvcHRpb24sIGNhbGwgaW4gdGhlIGNvbnRleHQgb2YgdGhlIFNvcnRhYmxlJ3MgaW5zdGFuY2Ugb2YgdGhpcyBwbHVnaW5cbiAgICAgIGlmIChwbHVnaW4ub3B0aW9uTGlzdGVuZXJzICYmIHR5cGVvZiBwbHVnaW4ub3B0aW9uTGlzdGVuZXJzW25hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG1vZGlmaWVkVmFsdWUgPSBwbHVnaW4ub3B0aW9uTGlzdGVuZXJzW25hbWVdLmNhbGwoc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG1vZGlmaWVkVmFsdWU7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoX3JlZikge1xuICB2YXIgc29ydGFibGUgPSBfcmVmLnNvcnRhYmxlLFxuICAgIHJvb3RFbCA9IF9yZWYucm9vdEVsLFxuICAgIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgdGFyZ2V0RWwgPSBfcmVmLnRhcmdldEVsLFxuICAgIGNsb25lRWwgPSBfcmVmLmNsb25lRWwsXG4gICAgdG9FbCA9IF9yZWYudG9FbCxcbiAgICBmcm9tRWwgPSBfcmVmLmZyb21FbCxcbiAgICBvbGRJbmRleCA9IF9yZWYub2xkSW5kZXgsXG4gICAgbmV3SW5kZXggPSBfcmVmLm5ld0luZGV4LFxuICAgIG9sZERyYWdnYWJsZUluZGV4ID0gX3JlZi5vbGREcmFnZ2FibGVJbmRleCxcbiAgICBuZXdEcmFnZ2FibGVJbmRleCA9IF9yZWYubmV3RHJhZ2dhYmxlSW5kZXgsXG4gICAgb3JpZ2luYWxFdmVudCA9IF9yZWYub3JpZ2luYWxFdmVudCxcbiAgICBwdXRTb3J0YWJsZSA9IF9yZWYucHV0U29ydGFibGUsXG4gICAgZXh0cmFFdmVudFByb3BlcnRpZXMgPSBfcmVmLmV4dHJhRXZlbnRQcm9wZXJ0aWVzO1xuICBzb3J0YWJsZSA9IHNvcnRhYmxlIHx8IHJvb3RFbCAmJiByb290RWxbZXhwYW5kb107XG4gIGlmICghc29ydGFibGUpIHJldHVybjtcbiAgdmFyIGV2dCxcbiAgICBvcHRpb25zID0gc29ydGFibGUub3B0aW9ucyxcbiAgICBvbk5hbWUgPSAnb24nICsgbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc3Vic3RyKDEpO1xuICAvLyBTdXBwb3J0IGZvciBuZXcgQ3VzdG9tRXZlbnQgZmVhdHVyZVxuICBpZiAod2luZG93LkN1c3RvbUV2ZW50ICYmICFJRTExT3JMZXNzICYmICFFZGdlKSB7XG4gICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtcbiAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgZXZ0LmluaXRFdmVudChuYW1lLCB0cnVlLCB0cnVlKTtcbiAgfVxuICBldnQudG8gPSB0b0VsIHx8IHJvb3RFbDtcbiAgZXZ0LmZyb20gPSBmcm9tRWwgfHwgcm9vdEVsO1xuICBldnQuaXRlbSA9IHRhcmdldEVsIHx8IHJvb3RFbDtcbiAgZXZ0LmNsb25lID0gY2xvbmVFbDtcbiAgZXZ0Lm9sZEluZGV4ID0gb2xkSW5kZXg7XG4gIGV2dC5uZXdJbmRleCA9IG5ld0luZGV4O1xuICBldnQub2xkRHJhZ2dhYmxlSW5kZXggPSBvbGREcmFnZ2FibGVJbmRleDtcbiAgZXZ0Lm5ld0RyYWdnYWJsZUluZGV4ID0gbmV3RHJhZ2dhYmxlSW5kZXg7XG4gIGV2dC5vcmlnaW5hbEV2ZW50ID0gb3JpZ2luYWxFdmVudDtcbiAgZXZ0LnB1bGxNb2RlID0gcHV0U29ydGFibGUgPyBwdXRTb3J0YWJsZS5sYXN0UHV0TW9kZSA6IHVuZGVmaW5lZDtcbiAgdmFyIGFsbEV2ZW50UHJvcGVydGllcyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBleHRyYUV2ZW50UHJvcGVydGllcyksIFBsdWdpbk1hbmFnZXIuZ2V0RXZlbnRQcm9wZXJ0aWVzKG5hbWUsIHNvcnRhYmxlKSk7XG4gIGZvciAodmFyIG9wdGlvbiBpbiBhbGxFdmVudFByb3BlcnRpZXMpIHtcbiAgICBldnRbb3B0aW9uXSA9IGFsbEV2ZW50UHJvcGVydGllc1tvcHRpb25dO1xuICB9XG4gIGlmIChyb290RWwpIHtcbiAgICByb290RWwuZGlzcGF0Y2hFdmVudChldnQpO1xuICB9XG4gIGlmIChvcHRpb25zW29uTmFtZV0pIHtcbiAgICBvcHRpb25zW29uTmFtZV0uY2FsbChzb3J0YWJsZSwgZXZ0KTtcbiAgfVxufVxuXG52YXIgX2V4Y2x1ZGVkID0gW1wiZXZ0XCJdO1xudmFyIHBsdWdpbkV2ZW50ID0gZnVuY3Rpb24gcGx1Z2luRXZlbnQoZXZlbnROYW1lLCBzb3J0YWJsZSkge1xuICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge30sXG4gICAgb3JpZ2luYWxFdmVudCA9IF9yZWYuZXZ0LFxuICAgIGRhdGEgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgX2V4Y2x1ZGVkKTtcbiAgUGx1Z2luTWFuYWdlci5wbHVnaW5FdmVudC5iaW5kKFNvcnRhYmxlKShldmVudE5hbWUsIHNvcnRhYmxlLCBfb2JqZWN0U3ByZWFkMih7XG4gICAgZHJhZ0VsOiBkcmFnRWwsXG4gICAgcGFyZW50RWw6IHBhcmVudEVsLFxuICAgIGdob3N0RWw6IGdob3N0RWwsXG4gICAgcm9vdEVsOiByb290RWwsXG4gICAgbmV4dEVsOiBuZXh0RWwsXG4gICAgbGFzdERvd25FbDogbGFzdERvd25FbCxcbiAgICBjbG9uZUVsOiBjbG9uZUVsLFxuICAgIGNsb25lSGlkZGVuOiBjbG9uZUhpZGRlbixcbiAgICBkcmFnU3RhcnRlZDogbW92ZWQsXG4gICAgcHV0U29ydGFibGU6IHB1dFNvcnRhYmxlLFxuICAgIGFjdGl2ZVNvcnRhYmxlOiBTb3J0YWJsZS5hY3RpdmUsXG4gICAgb3JpZ2luYWxFdmVudDogb3JpZ2luYWxFdmVudCxcbiAgICBvbGRJbmRleDogb2xkSW5kZXgsXG4gICAgb2xkRHJhZ2dhYmxlSW5kZXg6IG9sZERyYWdnYWJsZUluZGV4LFxuICAgIG5ld0luZGV4OiBuZXdJbmRleCxcbiAgICBuZXdEcmFnZ2FibGVJbmRleDogbmV3RHJhZ2dhYmxlSW5kZXgsXG4gICAgaGlkZUdob3N0Rm9yVGFyZ2V0OiBfaGlkZUdob3N0Rm9yVGFyZ2V0LFxuICAgIHVuaGlkZUdob3N0Rm9yVGFyZ2V0OiBfdW5oaWRlR2hvc3RGb3JUYXJnZXQsXG4gICAgY2xvbmVOb3dIaWRkZW46IGZ1bmN0aW9uIGNsb25lTm93SGlkZGVuKCkge1xuICAgICAgY2xvbmVIaWRkZW4gPSB0cnVlO1xuICAgIH0sXG4gICAgY2xvbmVOb3dTaG93bjogZnVuY3Rpb24gY2xvbmVOb3dTaG93bigpIHtcbiAgICAgIGNsb25lSGlkZGVuID0gZmFsc2U7XG4gICAgfSxcbiAgICBkaXNwYXRjaFNvcnRhYmxlRXZlbnQ6IGZ1bmN0aW9uIGRpc3BhdGNoU29ydGFibGVFdmVudChuYW1lKSB7XG4gICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgIHNvcnRhYmxlOiBzb3J0YWJsZSxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgb3JpZ2luYWxFdmVudDogb3JpZ2luYWxFdmVudFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBkYXRhKSk7XG59O1xuZnVuY3Rpb24gX2Rpc3BhdGNoRXZlbnQoaW5mbykge1xuICBkaXNwYXRjaEV2ZW50KF9vYmplY3RTcHJlYWQyKHtcbiAgICBwdXRTb3J0YWJsZTogcHV0U29ydGFibGUsXG4gICAgY2xvbmVFbDogY2xvbmVFbCxcbiAgICB0YXJnZXRFbDogZHJhZ0VsLFxuICAgIHJvb3RFbDogcm9vdEVsLFxuICAgIG9sZEluZGV4OiBvbGRJbmRleCxcbiAgICBvbGREcmFnZ2FibGVJbmRleDogb2xkRHJhZ2dhYmxlSW5kZXgsXG4gICAgbmV3SW5kZXg6IG5ld0luZGV4LFxuICAgIG5ld0RyYWdnYWJsZUluZGV4OiBuZXdEcmFnZ2FibGVJbmRleFxuICB9LCBpbmZvKSk7XG59XG52YXIgZHJhZ0VsLFxuICBwYXJlbnRFbCxcbiAgZ2hvc3RFbCxcbiAgcm9vdEVsLFxuICBuZXh0RWwsXG4gIGxhc3REb3duRWwsXG4gIGNsb25lRWwsXG4gIGNsb25lSGlkZGVuLFxuICBvbGRJbmRleCxcbiAgbmV3SW5kZXgsXG4gIG9sZERyYWdnYWJsZUluZGV4LFxuICBuZXdEcmFnZ2FibGVJbmRleCxcbiAgYWN0aXZlR3JvdXAsXG4gIHB1dFNvcnRhYmxlLFxuICBhd2FpdGluZ0RyYWdTdGFydGVkID0gZmFsc2UsXG4gIGlnbm9yZU5leHRDbGljayA9IGZhbHNlLFxuICBzb3J0YWJsZXMgPSBbXSxcbiAgdGFwRXZ0LFxuICB0b3VjaEV2dCxcbiAgbGFzdER4LFxuICBsYXN0RHksXG4gIHRhcERpc3RhbmNlTGVmdCxcbiAgdGFwRGlzdGFuY2VUb3AsXG4gIG1vdmVkLFxuICBsYXN0VGFyZ2V0LFxuICBsYXN0RGlyZWN0aW9uLFxuICBwYXN0Rmlyc3RJbnZlcnRUaHJlc2ggPSBmYWxzZSxcbiAgaXNDaXJjdW1zdGFudGlhbEludmVydCA9IGZhbHNlLFxuICB0YXJnZXRNb3ZlRGlzdGFuY2UsXG4gIC8vIEZvciBwb3NpdGlvbmluZyBnaG9zdCBhYnNvbHV0ZWx5XG4gIGdob3N0UmVsYXRpdmVQYXJlbnQsXG4gIGdob3N0UmVsYXRpdmVQYXJlbnRJbml0aWFsU2Nyb2xsID0gW10sXG4gIC8vIChsZWZ0LCB0b3ApXG5cbiAgX3NpbGVudCA9IGZhbHNlLFxuICBzYXZlZElucHV0Q2hlY2tlZCA9IFtdO1xuXG4vKiogQGNvbnN0ICovXG52YXIgZG9jdW1lbnRFeGlzdHMgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnLFxuICBQb3NpdGlvbkdob3N0QWJzb2x1dGVseSA9IElPUyxcbiAgQ1NTRmxvYXRQcm9wZXJ0eSA9IEVkZ2UgfHwgSUUxMU9yTGVzcyA/ICdjc3NGbG9hdCcgOiAnZmxvYXQnLFxuICAvLyBUaGlzIHdpbGwgbm90IHBhc3MgZm9yIElFOSwgYmVjYXVzZSBJRTkgRG5EIG9ubHkgd29ya3Mgb24gYW5jaG9yc1xuICBzdXBwb3J0RHJhZ2dhYmxlID0gZG9jdW1lbnRFeGlzdHMgJiYgIUNocm9tZUZvckFuZHJvaWQgJiYgIUlPUyAmJiAnZHJhZ2dhYmxlJyBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgc3VwcG9ydENzc1BvaW50ZXJFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFkb2N1bWVudEV4aXN0cykgcmV0dXJuO1xuICAgIC8vIGZhbHNlIHdoZW4gPD0gSUUxMVxuICAgIGlmIChJRTExT3JMZXNzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3gnKTtcbiAgICBlbC5zdHlsZS5jc3NUZXh0ID0gJ3BvaW50ZXItZXZlbnRzOmF1dG8nO1xuICAgIHJldHVybiBlbC5zdHlsZS5wb2ludGVyRXZlbnRzID09PSAnYXV0byc7XG4gIH0oKSxcbiAgX2RldGVjdERpcmVjdGlvbiA9IGZ1bmN0aW9uIF9kZXRlY3REaXJlY3Rpb24oZWwsIG9wdGlvbnMpIHtcbiAgICB2YXIgZWxDU1MgPSBjc3MoZWwpLFxuICAgICAgZWxXaWR0aCA9IHBhcnNlSW50KGVsQ1NTLndpZHRoKSAtIHBhcnNlSW50KGVsQ1NTLnBhZGRpbmdMZWZ0KSAtIHBhcnNlSW50KGVsQ1NTLnBhZGRpbmdSaWdodCkgLSBwYXJzZUludChlbENTUy5ib3JkZXJMZWZ0V2lkdGgpIC0gcGFyc2VJbnQoZWxDU1MuYm9yZGVyUmlnaHRXaWR0aCksXG4gICAgICBjaGlsZDEgPSBnZXRDaGlsZChlbCwgMCwgb3B0aW9ucyksXG4gICAgICBjaGlsZDIgPSBnZXRDaGlsZChlbCwgMSwgb3B0aW9ucyksXG4gICAgICBmaXJzdENoaWxkQ1NTID0gY2hpbGQxICYmIGNzcyhjaGlsZDEpLFxuICAgICAgc2Vjb25kQ2hpbGRDU1MgPSBjaGlsZDIgJiYgY3NzKGNoaWxkMiksXG4gICAgICBmaXJzdENoaWxkV2lkdGggPSBmaXJzdENoaWxkQ1NTICYmIHBhcnNlSW50KGZpcnN0Q2hpbGRDU1MubWFyZ2luTGVmdCkgKyBwYXJzZUludChmaXJzdENoaWxkQ1NTLm1hcmdpblJpZ2h0KSArIGdldFJlY3QoY2hpbGQxKS53aWR0aCxcbiAgICAgIHNlY29uZENoaWxkV2lkdGggPSBzZWNvbmRDaGlsZENTUyAmJiBwYXJzZUludChzZWNvbmRDaGlsZENTUy5tYXJnaW5MZWZ0KSArIHBhcnNlSW50KHNlY29uZENoaWxkQ1NTLm1hcmdpblJpZ2h0KSArIGdldFJlY3QoY2hpbGQyKS53aWR0aDtcbiAgICBpZiAoZWxDU1MuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgICByZXR1cm4gZWxDU1MuZmxleERpcmVjdGlvbiA9PT0gJ2NvbHVtbicgfHwgZWxDU1MuZmxleERpcmVjdGlvbiA9PT0gJ2NvbHVtbi1yZXZlcnNlJyA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgfVxuICAgIGlmIChlbENTUy5kaXNwbGF5ID09PSAnZ3JpZCcpIHtcbiAgICAgIHJldHVybiBlbENTUy5ncmlkVGVtcGxhdGVDb2x1bW5zLnNwbGl0KCcgJykubGVuZ3RoIDw9IDEgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICAgIH1cbiAgICBpZiAoY2hpbGQxICYmIGZpcnN0Q2hpbGRDU1NbXCJmbG9hdFwiXSAmJiBmaXJzdENoaWxkQ1NTW1wiZmxvYXRcIl0gIT09ICdub25lJykge1xuICAgICAgdmFyIHRvdWNoaW5nU2lkZUNoaWxkMiA9IGZpcnN0Q2hpbGRDU1NbXCJmbG9hdFwiXSA9PT0gJ2xlZnQnID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgICAgIHJldHVybiBjaGlsZDIgJiYgKHNlY29uZENoaWxkQ1NTLmNsZWFyID09PSAnYm90aCcgfHwgc2Vjb25kQ2hpbGRDU1MuY2xlYXIgPT09IHRvdWNoaW5nU2lkZUNoaWxkMikgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGQxICYmIChmaXJzdENoaWxkQ1NTLmRpc3BsYXkgPT09ICdibG9jaycgfHwgZmlyc3RDaGlsZENTUy5kaXNwbGF5ID09PSAnZmxleCcgfHwgZmlyc3RDaGlsZENTUy5kaXNwbGF5ID09PSAndGFibGUnIHx8IGZpcnN0Q2hpbGRDU1MuZGlzcGxheSA9PT0gJ2dyaWQnIHx8IGZpcnN0Q2hpbGRXaWR0aCA+PSBlbFdpZHRoICYmIGVsQ1NTW0NTU0Zsb2F0UHJvcGVydHldID09PSAnbm9uZScgfHwgY2hpbGQyICYmIGVsQ1NTW0NTU0Zsb2F0UHJvcGVydHldID09PSAnbm9uZScgJiYgZmlyc3RDaGlsZFdpZHRoICsgc2Vjb25kQ2hpbGRXaWR0aCA+IGVsV2lkdGgpID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgfSxcbiAgX2RyYWdFbEluUm93Q29sdW1uID0gZnVuY3Rpb24gX2RyYWdFbEluUm93Q29sdW1uKGRyYWdSZWN0LCB0YXJnZXRSZWN0LCB2ZXJ0aWNhbCkge1xuICAgIHZhciBkcmFnRWxTMU9wcCA9IHZlcnRpY2FsID8gZHJhZ1JlY3QubGVmdCA6IGRyYWdSZWN0LnRvcCxcbiAgICAgIGRyYWdFbFMyT3BwID0gdmVydGljYWwgPyBkcmFnUmVjdC5yaWdodCA6IGRyYWdSZWN0LmJvdHRvbSxcbiAgICAgIGRyYWdFbE9wcExlbmd0aCA9IHZlcnRpY2FsID8gZHJhZ1JlY3Qud2lkdGggOiBkcmFnUmVjdC5oZWlnaHQsXG4gICAgICB0YXJnZXRTMU9wcCA9IHZlcnRpY2FsID8gdGFyZ2V0UmVjdC5sZWZ0IDogdGFyZ2V0UmVjdC50b3AsXG4gICAgICB0YXJnZXRTMk9wcCA9IHZlcnRpY2FsID8gdGFyZ2V0UmVjdC5yaWdodCA6IHRhcmdldFJlY3QuYm90dG9tLFxuICAgICAgdGFyZ2V0T3BwTGVuZ3RoID0gdmVydGljYWwgPyB0YXJnZXRSZWN0LndpZHRoIDogdGFyZ2V0UmVjdC5oZWlnaHQ7XG4gICAgcmV0dXJuIGRyYWdFbFMxT3BwID09PSB0YXJnZXRTMU9wcCB8fCBkcmFnRWxTMk9wcCA9PT0gdGFyZ2V0UzJPcHAgfHwgZHJhZ0VsUzFPcHAgKyBkcmFnRWxPcHBMZW5ndGggLyAyID09PSB0YXJnZXRTMU9wcCArIHRhcmdldE9wcExlbmd0aCAvIDI7XG4gIH0sXG4gIC8qKlxyXG4gICAqIERldGVjdHMgZmlyc3QgbmVhcmVzdCBlbXB0eSBzb3J0YWJsZSB0byBYIGFuZCBZIHBvc2l0aW9uIHVzaW5nIGVtcHR5SW5zZXJ0VGhyZXNob2xkLlxyXG4gICAqIEBwYXJhbSAge051bWJlcn0geCAgICAgIFggcG9zaXRpb25cclxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHkgICAgICBZIHBvc2l0aW9uXHJcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9ICAgRWxlbWVudCBvZiB0aGUgZmlyc3QgZm91bmQgbmVhcmVzdCBTb3J0YWJsZVxyXG4gICAqL1xuICBfZGV0ZWN0TmVhcmVzdEVtcHR5U29ydGFibGUgPSBmdW5jdGlvbiBfZGV0ZWN0TmVhcmVzdEVtcHR5U29ydGFibGUoeCwgeSkge1xuICAgIHZhciByZXQ7XG4gICAgc29ydGFibGVzLnNvbWUoZnVuY3Rpb24gKHNvcnRhYmxlKSB7XG4gICAgICB2YXIgdGhyZXNob2xkID0gc29ydGFibGVbZXhwYW5kb10ub3B0aW9ucy5lbXB0eUluc2VydFRocmVzaG9sZDtcbiAgICAgIGlmICghdGhyZXNob2xkIHx8IGxhc3RDaGlsZChzb3J0YWJsZSkpIHJldHVybjtcbiAgICAgIHZhciByZWN0ID0gZ2V0UmVjdChzb3J0YWJsZSksXG4gICAgICAgIGluc2lkZUhvcml6b250YWxseSA9IHggPj0gcmVjdC5sZWZ0IC0gdGhyZXNob2xkICYmIHggPD0gcmVjdC5yaWdodCArIHRocmVzaG9sZCxcbiAgICAgICAgaW5zaWRlVmVydGljYWxseSA9IHkgPj0gcmVjdC50b3AgLSB0aHJlc2hvbGQgJiYgeSA8PSByZWN0LmJvdHRvbSArIHRocmVzaG9sZDtcbiAgICAgIGlmIChpbnNpZGVIb3Jpem9udGFsbHkgJiYgaW5zaWRlVmVydGljYWxseSkge1xuICAgICAgICByZXR1cm4gcmV0ID0gc29ydGFibGU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfSxcbiAgX3ByZXBhcmVHcm91cCA9IGZ1bmN0aW9uIF9wcmVwYXJlR3JvdXAob3B0aW9ucykge1xuICAgIGZ1bmN0aW9uIHRvRm4odmFsdWUsIHB1bGwpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodG8sIGZyb20sIGRyYWdFbCwgZXZ0KSB7XG4gICAgICAgIHZhciBzYW1lR3JvdXAgPSB0by5vcHRpb25zLmdyb3VwLm5hbWUgJiYgZnJvbS5vcHRpb25zLmdyb3VwLm5hbWUgJiYgdG8ub3B0aW9ucy5ncm91cC5uYW1lID09PSBmcm9tLm9wdGlvbnMuZ3JvdXAubmFtZTtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwgJiYgKHB1bGwgfHwgc2FtZUdyb3VwKSkge1xuICAgICAgICAgIC8vIERlZmF1bHQgcHVsbCB2YWx1ZVxuICAgICAgICAgIC8vIERlZmF1bHQgcHVsbCBhbmQgcHV0IHZhbHVlIGlmIHNhbWUgZ3JvdXBcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChwdWxsICYmIHZhbHVlID09PSAnY2xvbmUnKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiB0b0ZuKHZhbHVlKHRvLCBmcm9tLCBkcmFnRWwsIGV2dCksIHB1bGwpKHRvLCBmcm9tLCBkcmFnRWwsIGV2dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG90aGVyR3JvdXAgPSAocHVsbCA/IHRvIDogZnJvbSkub3B0aW9ucy5ncm91cC5uYW1lO1xuICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gdHJ1ZSB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlID09PSBvdGhlckdyb3VwIHx8IHZhbHVlLmpvaW4gJiYgdmFsdWUuaW5kZXhPZihvdGhlckdyb3VwKSA+IC0xO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICB2YXIgZ3JvdXAgPSB7fTtcbiAgICB2YXIgb3JpZ2luYWxHcm91cCA9IG9wdGlvbnMuZ3JvdXA7XG4gICAgaWYgKCFvcmlnaW5hbEdyb3VwIHx8IF90eXBlb2Yob3JpZ2luYWxHcm91cCkgIT0gJ29iamVjdCcpIHtcbiAgICAgIG9yaWdpbmFsR3JvdXAgPSB7XG4gICAgICAgIG5hbWU6IG9yaWdpbmFsR3JvdXBcbiAgICAgIH07XG4gICAgfVxuICAgIGdyb3VwLm5hbWUgPSBvcmlnaW5hbEdyb3VwLm5hbWU7XG4gICAgZ3JvdXAuY2hlY2tQdWxsID0gdG9GbihvcmlnaW5hbEdyb3VwLnB1bGwsIHRydWUpO1xuICAgIGdyb3VwLmNoZWNrUHV0ID0gdG9GbihvcmlnaW5hbEdyb3VwLnB1dCk7XG4gICAgZ3JvdXAucmV2ZXJ0Q2xvbmUgPSBvcmlnaW5hbEdyb3VwLnJldmVydENsb25lO1xuICAgIG9wdGlvbnMuZ3JvdXAgPSBncm91cDtcbiAgfSxcbiAgX2hpZGVHaG9zdEZvclRhcmdldCA9IGZ1bmN0aW9uIF9oaWRlR2hvc3RGb3JUYXJnZXQoKSB7XG4gICAgaWYgKCFzdXBwb3J0Q3NzUG9pbnRlckV2ZW50cyAmJiBnaG9zdEVsKSB7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgIH1cbiAgfSxcbiAgX3VuaGlkZUdob3N0Rm9yVGFyZ2V0ID0gZnVuY3Rpb24gX3VuaGlkZUdob3N0Rm9yVGFyZ2V0KCkge1xuICAgIGlmICghc3VwcG9ydENzc1BvaW50ZXJFdmVudHMgJiYgZ2hvc3RFbCkge1xuICAgICAgY3NzKGdob3N0RWwsICdkaXNwbGF5JywgJycpO1xuICAgIH1cbiAgfTtcblxuLy8gIzExODQgZml4IC0gUHJldmVudCBjbGljayBldmVudCBvbiBmYWxsYmFjayBpZiBkcmFnZ2VkIGJ1dCBpdGVtIG5vdCBjaGFuZ2VkIHBvc2l0aW9uXG5pZiAoZG9jdW1lbnRFeGlzdHMgJiYgIUNocm9tZUZvckFuZHJvaWQpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKGlnbm9yZU5leHRDbGljaykge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldnQuc3RvcFByb3BhZ2F0aW9uICYmIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2dC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gJiYgZXZ0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgaWdub3JlTmV4dENsaWNrID0gZmFsc2U7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LCB0cnVlKTtcbn1cbnZhciBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudCA9IGZ1bmN0aW9uIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50KGV2dCkge1xuICBpZiAoZHJhZ0VsKSB7XG4gICAgZXZ0ID0gZXZ0LnRvdWNoZXMgPyBldnQudG91Y2hlc1swXSA6IGV2dDtcbiAgICB2YXIgbmVhcmVzdCA9IF9kZXRlY3ROZWFyZXN0RW1wdHlTb3J0YWJsZShldnQuY2xpZW50WCwgZXZ0LmNsaWVudFkpO1xuICAgIGlmIChuZWFyZXN0KSB7XG4gICAgICAvLyBDcmVhdGUgaW1pdGF0aW9uIGV2ZW50XG4gICAgICB2YXIgZXZlbnQgPSB7fTtcbiAgICAgIGZvciAodmFyIGkgaW4gZXZ0KSB7XG4gICAgICAgIGlmIChldnQuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICBldmVudFtpXSA9IGV2dFtpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZXZlbnQudGFyZ2V0ID0gZXZlbnQucm9vdEVsID0gbmVhcmVzdDtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0ID0gdm9pZCAwO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uID0gdm9pZCAwO1xuICAgICAgbmVhcmVzdFtleHBhbmRvXS5fb25EcmFnT3ZlcihldmVudCk7XG4gICAgfVxuICB9XG59O1xudmFyIF9jaGVja091dHNpZGVUYXJnZXRFbCA9IGZ1bmN0aW9uIF9jaGVja091dHNpZGVUYXJnZXRFbChldnQpIHtcbiAgaWYgKGRyYWdFbCkge1xuICAgIGRyYWdFbC5wYXJlbnROb2RlW2V4cGFuZG9dLl9pc091dHNpZGVUaGlzRWwoZXZ0LnRhcmdldCk7XG4gIH1cbn07XG5cbi8qKlxyXG4gKiBAY2xhc3MgIFNvcnRhYmxlXHJcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSAgZWxcclxuICogQHBhcmFtICB7T2JqZWN0fSAgICAgICBbb3B0aW9uc11cclxuICovXG5mdW5jdGlvbiBTb3J0YWJsZShlbCwgb3B0aW9ucykge1xuICBpZiAoIShlbCAmJiBlbC5ub2RlVHlwZSAmJiBlbC5ub2RlVHlwZSA9PT0gMSkpIHtcbiAgICB0aHJvdyBcIlNvcnRhYmxlOiBgZWxgIG11c3QgYmUgYW4gSFRNTEVsZW1lbnQsIG5vdCBcIi5jb25jYXQoe30udG9TdHJpbmcuY2FsbChlbCkpO1xuICB9XG4gIHRoaXMuZWwgPSBlbDsgLy8gcm9vdCBlbGVtZW50XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgb3B0aW9ucyk7XG5cbiAgLy8gRXhwb3J0IGluc3RhbmNlXG4gIGVsW2V4cGFuZG9dID0gdGhpcztcbiAgdmFyIGRlZmF1bHRzID0ge1xuICAgIGdyb3VwOiBudWxsLFxuICAgIHNvcnQ6IHRydWUsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHN0b3JlOiBudWxsLFxuICAgIGhhbmRsZTogbnVsbCxcbiAgICBkcmFnZ2FibGU6IC9eW3VvXWwkL2kudGVzdChlbC5ub2RlTmFtZSkgPyAnPmxpJyA6ICc+KicsXG4gICAgc3dhcFRocmVzaG9sZDogMSxcbiAgICAvLyBwZXJjZW50YWdlOyAwIDw9IHggPD0gMVxuICAgIGludmVydFN3YXA6IGZhbHNlLFxuICAgIC8vIGludmVydCBhbHdheXNcbiAgICBpbnZlcnRlZFN3YXBUaHJlc2hvbGQ6IG51bGwsXG4gICAgLy8gd2lsbCBiZSBzZXQgdG8gc2FtZSBhcyBzd2FwVGhyZXNob2xkIGlmIGRlZmF1bHRcbiAgICByZW1vdmVDbG9uZU9uSGlkZTogdHJ1ZSxcbiAgICBkaXJlY3Rpb246IGZ1bmN0aW9uIGRpcmVjdGlvbigpIHtcbiAgICAgIHJldHVybiBfZGV0ZWN0RGlyZWN0aW9uKGVsLCB0aGlzLm9wdGlvbnMpO1xuICAgIH0sXG4gICAgZ2hvc3RDbGFzczogJ3NvcnRhYmxlLWdob3N0JyxcbiAgICBjaG9zZW5DbGFzczogJ3NvcnRhYmxlLWNob3NlbicsXG4gICAgZHJhZ0NsYXNzOiAnc29ydGFibGUtZHJhZycsXG4gICAgaWdub3JlOiAnYSwgaW1nJyxcbiAgICBmaWx0ZXI6IG51bGwsXG4gICAgcHJldmVudE9uRmlsdGVyOiB0cnVlLFxuICAgIGFuaW1hdGlvbjogMCxcbiAgICBlYXNpbmc6IG51bGwsXG4gICAgc2V0RGF0YTogZnVuY3Rpb24gc2V0RGF0YShkYXRhVHJhbnNmZXIsIGRyYWdFbCkge1xuICAgICAgZGF0YVRyYW5zZmVyLnNldERhdGEoJ1RleHQnLCBkcmFnRWwudGV4dENvbnRlbnQpO1xuICAgIH0sXG4gICAgZHJvcEJ1YmJsZTogZmFsc2UsXG4gICAgZHJhZ292ZXJCdWJibGU6IGZhbHNlLFxuICAgIGRhdGFJZEF0dHI6ICdkYXRhLWlkJyxcbiAgICBkZWxheTogMCxcbiAgICBkZWxheU9uVG91Y2hPbmx5OiBmYWxzZSxcbiAgICB0b3VjaFN0YXJ0VGhyZXNob2xkOiAoTnVtYmVyLnBhcnNlSW50ID8gTnVtYmVyIDogd2luZG93KS5wYXJzZUludCh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbywgMTApIHx8IDEsXG4gICAgZm9yY2VGYWxsYmFjazogZmFsc2UsXG4gICAgZmFsbGJhY2tDbGFzczogJ3NvcnRhYmxlLWZhbGxiYWNrJyxcbiAgICBmYWxsYmFja09uQm9keTogZmFsc2UsXG4gICAgZmFsbGJhY2tUb2xlcmFuY2U6IDAsXG4gICAgZmFsbGJhY2tPZmZzZXQ6IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfSxcbiAgICAvLyBEaXNhYmxlZCBvbiBTYWZhcmk6ICMxNTcxOyBFbmFibGVkIG9uIFNhZmFyaSBJT1M6ICMyMjQ0XG4gICAgc3VwcG9ydFBvaW50ZXI6IFNvcnRhYmxlLnN1cHBvcnRQb2ludGVyICE9PSBmYWxzZSAmJiAnUG9pbnRlckV2ZW50JyBpbiB3aW5kb3cgJiYgKCFTYWZhcmkgfHwgSU9TKSxcbiAgICBlbXB0eUluc2VydFRocmVzaG9sZDogNVxuICB9O1xuICBQbHVnaW5NYW5hZ2VyLmluaXRpYWxpemVQbHVnaW5zKHRoaXMsIGVsLCBkZWZhdWx0cyk7XG5cbiAgLy8gU2V0IGRlZmF1bHQgb3B0aW9uc1xuICBmb3IgKHZhciBuYW1lIGluIGRlZmF1bHRzKSB7XG4gICAgIShuYW1lIGluIG9wdGlvbnMpICYmIChvcHRpb25zW25hbWVdID0gZGVmYXVsdHNbbmFtZV0pO1xuICB9XG4gIF9wcmVwYXJlR3JvdXAob3B0aW9ucyk7XG5cbiAgLy8gQmluZCBhbGwgcHJpdmF0ZSBtZXRob2RzXG4gIGZvciAodmFyIGZuIGluIHRoaXMpIHtcbiAgICBpZiAoZm4uY2hhckF0KDApID09PSAnXycgJiYgdHlwZW9mIHRoaXNbZm5dID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzW2ZuXSA9IHRoaXNbZm5dLmJpbmQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgLy8gU2V0dXAgZHJhZyBtb2RlXG4gIHRoaXMubmF0aXZlRHJhZ2dhYmxlID0gb3B0aW9ucy5mb3JjZUZhbGxiYWNrID8gZmFsc2UgOiBzdXBwb3J0RHJhZ2dhYmxlO1xuICBpZiAodGhpcy5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICAvLyBUb3VjaCBzdGFydCB0aHJlc2hvbGQgY2Fubm90IGJlIGdyZWF0ZXIgdGhhbiB0aGUgbmF0aXZlIGRyYWdzdGFydCB0aHJlc2hvbGRcbiAgICB0aGlzLm9wdGlvbnMudG91Y2hTdGFydFRocmVzaG9sZCA9IDE7XG4gIH1cblxuICAvLyBCaW5kIGV2ZW50c1xuICBpZiAob3B0aW9ucy5zdXBwb3J0UG9pbnRlcikge1xuICAgIG9uKGVsLCAncG9pbnRlcmRvd24nLCB0aGlzLl9vblRhcFN0YXJ0KTtcbiAgfSBlbHNlIHtcbiAgICBvbihlbCwgJ21vdXNlZG93bicsIHRoaXMuX29uVGFwU3RhcnQpO1xuICAgIG9uKGVsLCAndG91Y2hzdGFydCcsIHRoaXMuX29uVGFwU3RhcnQpO1xuICB9XG4gIGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgIG9uKGVsLCAnZHJhZ292ZXInLCB0aGlzKTtcbiAgICBvbihlbCwgJ2RyYWdlbnRlcicsIHRoaXMpO1xuICB9XG4gIHNvcnRhYmxlcy5wdXNoKHRoaXMuZWwpO1xuXG4gIC8vIFJlc3RvcmUgc29ydGluZ1xuICBvcHRpb25zLnN0b3JlICYmIG9wdGlvbnMuc3RvcmUuZ2V0ICYmIHRoaXMuc29ydChvcHRpb25zLnN0b3JlLmdldCh0aGlzKSB8fCBbXSk7XG5cbiAgLy8gQWRkIGFuaW1hdGlvbiBzdGF0ZSBtYW5hZ2VyXG4gIF9leHRlbmRzKHRoaXMsIEFuaW1hdGlvblN0YXRlTWFuYWdlcigpKTtcbn1cblNvcnRhYmxlLnByb3RvdHlwZSA9IC8qKiBAbGVuZHMgU29ydGFibGUucHJvdG90eXBlICove1xuICBjb25zdHJ1Y3RvcjogU29ydGFibGUsXG4gIF9pc091dHNpZGVUaGlzRWw6IGZ1bmN0aW9uIF9pc091dHNpZGVUaGlzRWwodGFyZ2V0KSB7XG4gICAgaWYgKCF0aGlzLmVsLmNvbnRhaW5zKHRhcmdldCkgJiYgdGFyZ2V0ICE9PSB0aGlzLmVsKSB7XG4gICAgICBsYXN0VGFyZ2V0ID0gbnVsbDtcbiAgICB9XG4gIH0sXG4gIF9nZXREaXJlY3Rpb246IGZ1bmN0aW9uIF9nZXREaXJlY3Rpb24oZXZ0LCB0YXJnZXQpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gPT09ICdmdW5jdGlvbicgPyB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uLmNhbGwodGhpcywgZXZ0LCB0YXJnZXQsIGRyYWdFbCkgOiB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uO1xuICB9LFxuICBfb25UYXBTdGFydDogZnVuY3Rpb24gX29uVGFwU3RhcnQoIC8qKiBFdmVudHxUb3VjaEV2ZW50ICovZXZ0KSB7XG4gICAgaWYgKCFldnQuY2FuY2VsYWJsZSkgcmV0dXJuO1xuICAgIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICBlbCA9IHRoaXMuZWwsXG4gICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgcHJldmVudE9uRmlsdGVyID0gb3B0aW9ucy5wcmV2ZW50T25GaWx0ZXIsXG4gICAgICB0eXBlID0gZXZ0LnR5cGUsXG4gICAgICB0b3VjaCA9IGV2dC50b3VjaGVzICYmIGV2dC50b3VjaGVzWzBdIHx8IGV2dC5wb2ludGVyVHlwZSAmJiBldnQucG9pbnRlclR5cGUgPT09ICd0b3VjaCcgJiYgZXZ0LFxuICAgICAgdGFyZ2V0ID0gKHRvdWNoIHx8IGV2dCkudGFyZ2V0LFxuICAgICAgb3JpZ2luYWxUYXJnZXQgPSBldnQudGFyZ2V0LnNoYWRvd1Jvb3QgJiYgKGV2dC5wYXRoICYmIGV2dC5wYXRoWzBdIHx8IGV2dC5jb21wb3NlZFBhdGggJiYgZXZ0LmNvbXBvc2VkUGF0aCgpWzBdKSB8fCB0YXJnZXQsXG4gICAgICBmaWx0ZXIgPSBvcHRpb25zLmZpbHRlcjtcbiAgICBfc2F2ZUlucHV0Q2hlY2tlZFN0YXRlKGVsKTtcblxuICAgIC8vIERvbid0IHRyaWdnZXIgc3RhcnQgZXZlbnQgd2hlbiBhbiBlbGVtZW50IGlzIGJlZW4gZHJhZ2dlZCwgb3RoZXJ3aXNlIHRoZSBldnQub2xkaW5kZXggYWx3YXlzIHdyb25nIHdoZW4gc2V0IG9wdGlvbi5ncm91cC5cbiAgICBpZiAoZHJhZ0VsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICgvbW91c2Vkb3dufHBvaW50ZXJkb3duLy50ZXN0KHR5cGUpICYmIGV2dC5idXR0b24gIT09IDAgfHwgb3B0aW9ucy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuOyAvLyBvbmx5IGxlZnQgYnV0dG9uIGFuZCBlbmFibGVkXG4gICAgfVxuXG4gICAgLy8gY2FuY2VsIGRuZCBpZiBvcmlnaW5hbCB0YXJnZXQgaXMgY29udGVudCBlZGl0YWJsZVxuICAgIGlmIChvcmlnaW5hbFRhcmdldC5pc0NvbnRlbnRFZGl0YWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFNhZmFyaSBpZ25vcmVzIGZ1cnRoZXIgZXZlbnQgaGFuZGxpbmcgYWZ0ZXIgbW91c2Vkb3duXG4gICAgaWYgKCF0aGlzLm5hdGl2ZURyYWdnYWJsZSAmJiBTYWZhcmkgJiYgdGFyZ2V0ICYmIHRhcmdldC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTRUxFQ1QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRhcmdldCA9IGNsb3Nlc3QodGFyZ2V0LCBvcHRpb25zLmRyYWdnYWJsZSwgZWwsIGZhbHNlKTtcbiAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5hbmltYXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobGFzdERvd25FbCA9PT0gdGFyZ2V0KSB7XG4gICAgICAvLyBJZ25vcmluZyBkdXBsaWNhdGUgYGRvd25gXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBpbmRleCBvZiB0aGUgZHJhZ2dlZCBlbGVtZW50IHdpdGhpbiBpdHMgcGFyZW50XG4gICAgb2xkSW5kZXggPSBpbmRleCh0YXJnZXQpO1xuICAgIG9sZERyYWdnYWJsZUluZGV4ID0gaW5kZXgodGFyZ2V0LCBvcHRpb25zLmRyYWdnYWJsZSk7XG5cbiAgICAvLyBDaGVjayBmaWx0ZXJcbiAgICBpZiAodHlwZW9mIGZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGZpbHRlci5jYWxsKHRoaXMsIGV2dCwgdGFyZ2V0LCB0aGlzKSkge1xuICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgc29ydGFibGU6IF90aGlzLFxuICAgICAgICAgIHJvb3RFbDogb3JpZ2luYWxUYXJnZXQsXG4gICAgICAgICAgbmFtZTogJ2ZpbHRlcicsXG4gICAgICAgICAgdGFyZ2V0RWw6IHRhcmdldCxcbiAgICAgICAgICB0b0VsOiBlbCxcbiAgICAgICAgICBmcm9tRWw6IGVsXG4gICAgICAgIH0pO1xuICAgICAgICBwbHVnaW5FdmVudCgnZmlsdGVyJywgX3RoaXMsIHtcbiAgICAgICAgICBldnQ6IGV2dFxuICAgICAgICB9KTtcbiAgICAgICAgcHJldmVudE9uRmlsdGVyICYmIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47IC8vIGNhbmNlbCBkbmRcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZpbHRlcikge1xuICAgICAgZmlsdGVyID0gZmlsdGVyLnNwbGl0KCcsJykuc29tZShmdW5jdGlvbiAoY3JpdGVyaWEpIHtcbiAgICAgICAgY3JpdGVyaWEgPSBjbG9zZXN0KG9yaWdpbmFsVGFyZ2V0LCBjcml0ZXJpYS50cmltKCksIGVsLCBmYWxzZSk7XG4gICAgICAgIGlmIChjcml0ZXJpYSkge1xuICAgICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgIHNvcnRhYmxlOiBfdGhpcyxcbiAgICAgICAgICAgIHJvb3RFbDogY3JpdGVyaWEsXG4gICAgICAgICAgICBuYW1lOiAnZmlsdGVyJyxcbiAgICAgICAgICAgIHRhcmdldEVsOiB0YXJnZXQsXG4gICAgICAgICAgICBmcm9tRWw6IGVsLFxuICAgICAgICAgICAgdG9FbDogZWxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBwbHVnaW5FdmVudCgnZmlsdGVyJywgX3RoaXMsIHtcbiAgICAgICAgICAgIGV2dDogZXZ0XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKGZpbHRlcikge1xuICAgICAgICBwcmV2ZW50T25GaWx0ZXIgJiYgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjsgLy8gY2FuY2VsIGRuZFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5oYW5kbGUgJiYgIWNsb3Nlc3Qob3JpZ2luYWxUYXJnZXQsIG9wdGlvbnMuaGFuZGxlLCBlbCwgZmFsc2UpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUHJlcGFyZSBgZHJhZ3N0YXJ0YFxuICAgIHRoaXMuX3ByZXBhcmVEcmFnU3RhcnQoZXZ0LCB0b3VjaCwgdGFyZ2V0KTtcbiAgfSxcbiAgX3ByZXBhcmVEcmFnU3RhcnQ6IGZ1bmN0aW9uIF9wcmVwYXJlRHJhZ1N0YXJ0KCAvKiogRXZlbnQgKi9ldnQsIC8qKiBUb3VjaCAqL3RvdWNoLCAvKiogSFRNTEVsZW1lbnQgKi90YXJnZXQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzLFxuICAgICAgZWwgPSBfdGhpcy5lbCxcbiAgICAgIG9wdGlvbnMgPSBfdGhpcy5vcHRpb25zLFxuICAgICAgb3duZXJEb2N1bWVudCA9IGVsLm93bmVyRG9jdW1lbnQsXG4gICAgICBkcmFnU3RhcnRGbjtcbiAgICBpZiAodGFyZ2V0ICYmICFkcmFnRWwgJiYgdGFyZ2V0LnBhcmVudE5vZGUgPT09IGVsKSB7XG4gICAgICB2YXIgZHJhZ1JlY3QgPSBnZXRSZWN0KHRhcmdldCk7XG4gICAgICByb290RWwgPSBlbDtcbiAgICAgIGRyYWdFbCA9IHRhcmdldDtcbiAgICAgIHBhcmVudEVsID0gZHJhZ0VsLnBhcmVudE5vZGU7XG4gICAgICBuZXh0RWwgPSBkcmFnRWwubmV4dFNpYmxpbmc7XG4gICAgICBsYXN0RG93bkVsID0gdGFyZ2V0O1xuICAgICAgYWN0aXZlR3JvdXAgPSBvcHRpb25zLmdyb3VwO1xuICAgICAgU29ydGFibGUuZHJhZ2dlZCA9IGRyYWdFbDtcbiAgICAgIHRhcEV2dCA9IHtcbiAgICAgICAgdGFyZ2V0OiBkcmFnRWwsXG4gICAgICAgIGNsaWVudFg6ICh0b3VjaCB8fCBldnQpLmNsaWVudFgsXG4gICAgICAgIGNsaWVudFk6ICh0b3VjaCB8fCBldnQpLmNsaWVudFlcbiAgICAgIH07XG4gICAgICB0YXBEaXN0YW5jZUxlZnQgPSB0YXBFdnQuY2xpZW50WCAtIGRyYWdSZWN0LmxlZnQ7XG4gICAgICB0YXBEaXN0YW5jZVRvcCA9IHRhcEV2dC5jbGllbnRZIC0gZHJhZ1JlY3QudG9wO1xuICAgICAgdGhpcy5fbGFzdFggPSAodG91Y2ggfHwgZXZ0KS5jbGllbnRYO1xuICAgICAgdGhpcy5fbGFzdFkgPSAodG91Y2ggfHwgZXZ0KS5jbGllbnRZO1xuICAgICAgZHJhZ0VsLnN0eWxlWyd3aWxsLWNoYW5nZSddID0gJ2FsbCc7XG4gICAgICBkcmFnU3RhcnRGbiA9IGZ1bmN0aW9uIGRyYWdTdGFydEZuKCkge1xuICAgICAgICBwbHVnaW5FdmVudCgnZGVsYXlFbmRlZCcsIF90aGlzLCB7XG4gICAgICAgICAgZXZ0OiBldnRcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSB7XG4gICAgICAgICAgX3RoaXMuX29uRHJvcCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBEZWxheWVkIGRyYWcgaGFzIGJlZW4gdHJpZ2dlcmVkXG4gICAgICAgIC8vIHdlIGNhbiByZS1lbmFibGUgdGhlIGV2ZW50czogdG91Y2htb3ZlL21vdXNlbW92ZVxuICAgICAgICBfdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnRXZlbnRzKCk7XG4gICAgICAgIGlmICghRmlyZUZveCAmJiBfdGhpcy5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICAgICAgICBkcmFnRWwuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJpbmQgdGhlIGV2ZW50czogZHJhZ3N0YXJ0L2RyYWdlbmRcbiAgICAgICAgX3RoaXMuX3RyaWdnZXJEcmFnU3RhcnQoZXZ0LCB0b3VjaCk7XG5cbiAgICAgICAgLy8gRHJhZyBzdGFydCBldmVudFxuICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgc29ydGFibGU6IF90aGlzLFxuICAgICAgICAgIG5hbWU6ICdjaG9vc2UnLFxuICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDaG9zZW4gaXRlbVxuICAgICAgICB0b2dnbGVDbGFzcyhkcmFnRWwsIG9wdGlvbnMuY2hvc2VuQ2xhc3MsIHRydWUpO1xuICAgICAgfTtcblxuICAgICAgLy8gRGlzYWJsZSBcImRyYWdnYWJsZVwiXG4gICAgICBvcHRpb25zLmlnbm9yZS5zcGxpdCgnLCcpLmZvckVhY2goZnVuY3Rpb24gKGNyaXRlcmlhKSB7XG4gICAgICAgIGZpbmQoZHJhZ0VsLCBjcml0ZXJpYS50cmltKCksIF9kaXNhYmxlRHJhZ2dhYmxlKTtcbiAgICAgIH0pO1xuICAgICAgb24ob3duZXJEb2N1bWVudCwgJ2RyYWdvdmVyJywgbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQpO1xuICAgICAgb24ob3duZXJEb2N1bWVudCwgJ21vdXNlbW92ZScsIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50KTtcbiAgICAgIG9uKG93bmVyRG9jdW1lbnQsICd0b3VjaG1vdmUnLCBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudCk7XG4gICAgICBpZiAob3B0aW9ucy5zdXBwb3J0UG9pbnRlcikge1xuICAgICAgICBvbihvd25lckRvY3VtZW50LCAncG9pbnRlcnVwJywgX3RoaXMuX29uRHJvcCk7XG4gICAgICAgIC8vIE5hdGl2ZSBEJkQgdHJpZ2dlcnMgcG9pbnRlcmNhbmNlbFxuICAgICAgICAhdGhpcy5uYXRpdmVEcmFnZ2FibGUgJiYgb24ob3duZXJEb2N1bWVudCwgJ3BvaW50ZXJjYW5jZWwnLCBfdGhpcy5fb25Ecm9wKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uKG93bmVyRG9jdW1lbnQsICdtb3VzZXVwJywgX3RoaXMuX29uRHJvcCk7XG4gICAgICAgIG9uKG93bmVyRG9jdW1lbnQsICd0b3VjaGVuZCcsIF90aGlzLl9vbkRyb3ApO1xuICAgICAgICBvbihvd25lckRvY3VtZW50LCAndG91Y2hjYW5jZWwnLCBfdGhpcy5fb25Ecm9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gTWFrZSBkcmFnRWwgZHJhZ2dhYmxlIChtdXN0IGJlIGJlZm9yZSBkZWxheSBmb3IgRmlyZUZveClcbiAgICAgIGlmIChGaXJlRm94ICYmIHRoaXMubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy50b3VjaFN0YXJ0VGhyZXNob2xkID0gNDtcbiAgICAgICAgZHJhZ0VsLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBwbHVnaW5FdmVudCgnZGVsYXlTdGFydCcsIHRoaXMsIHtcbiAgICAgICAgZXZ0OiBldnRcbiAgICAgIH0pO1xuXG4gICAgICAvLyBEZWxheSBpcyBpbXBvc3NpYmxlIGZvciBuYXRpdmUgRG5EIGluIEVkZ2Ugb3IgSUVcbiAgICAgIGlmIChvcHRpb25zLmRlbGF5ICYmICghb3B0aW9ucy5kZWxheU9uVG91Y2hPbmx5IHx8IHRvdWNoKSAmJiAoIXRoaXMubmF0aXZlRHJhZ2dhYmxlIHx8ICEoRWRnZSB8fCBJRTExT3JMZXNzKSkpIHtcbiAgICAgICAgaWYgKFNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHtcbiAgICAgICAgICB0aGlzLl9vbkRyb3AoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVzZXIgbW92ZXMgdGhlIHBvaW50ZXIgb3IgbGV0IGdvIHRoZSBjbGljayBvciB0b3VjaFxuICAgICAgICAvLyBiZWZvcmUgdGhlIGRlbGF5IGhhcyBiZWVuIHJlYWNoZWQ6XG4gICAgICAgIC8vIGRpc2FibGUgdGhlIGRlbGF5ZWQgZHJhZ1xuICAgICAgICBpZiAob3B0aW9ucy5zdXBwb3J0UG9pbnRlcikge1xuICAgICAgICAgIG9uKG93bmVyRG9jdW1lbnQsICdwb2ludGVydXAnLCBfdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICAgICAgICBvbihvd25lckRvY3VtZW50LCAncG9pbnRlcmNhbmNlbCcsIF90aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9uKG93bmVyRG9jdW1lbnQsICdtb3VzZXVwJywgX3RoaXMuX2Rpc2FibGVEZWxheWVkRHJhZyk7XG4gICAgICAgICAgb24ob3duZXJEb2N1bWVudCwgJ3RvdWNoZW5kJywgX3RoaXMuX2Rpc2FibGVEZWxheWVkRHJhZyk7XG4gICAgICAgICAgb24ob3duZXJEb2N1bWVudCwgJ3RvdWNoY2FuY2VsJywgX3RoaXMuX2Rpc2FibGVEZWxheWVkRHJhZyk7XG4gICAgICAgIH1cbiAgICAgICAgb24ob3duZXJEb2N1bWVudCwgJ21vdXNlbW92ZScsIF90aGlzLl9kZWxheWVkRHJhZ1RvdWNoTW92ZUhhbmRsZXIpO1xuICAgICAgICBvbihvd25lckRvY3VtZW50LCAndG91Y2htb3ZlJywgX3RoaXMuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcik7XG4gICAgICAgIG9wdGlvbnMuc3VwcG9ydFBvaW50ZXIgJiYgb24ob3duZXJEb2N1bWVudCwgJ3BvaW50ZXJtb3ZlJywgX3RoaXMuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcik7XG4gICAgICAgIF90aGlzLl9kcmFnU3RhcnRUaW1lciA9IHNldFRpbWVvdXQoZHJhZ1N0YXJ0Rm4sIG9wdGlvbnMuZGVsYXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ1N0YXJ0Rm4oKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIF9kZWxheWVkRHJhZ1RvdWNoTW92ZUhhbmRsZXI6IGZ1bmN0aW9uIF9kZWxheWVkRHJhZ1RvdWNoTW92ZUhhbmRsZXIoIC8qKiBUb3VjaEV2ZW50fFBvaW50ZXJFdmVudCAqKi9lKSB7XG4gICAgdmFyIHRvdWNoID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdIDogZTtcbiAgICBpZiAoTWF0aC5tYXgoTWF0aC5hYnModG91Y2guY2xpZW50WCAtIHRoaXMuX2xhc3RYKSwgTWF0aC5hYnModG91Y2guY2xpZW50WSAtIHRoaXMuX2xhc3RZKSkgPj0gTWF0aC5mbG9vcih0aGlzLm9wdGlvbnMudG91Y2hTdGFydFRocmVzaG9sZCAvICh0aGlzLm5hdGl2ZURyYWdnYWJsZSAmJiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSkpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVEZWxheWVkRHJhZygpO1xuICAgIH1cbiAgfSxcbiAgX2Rpc2FibGVEZWxheWVkRHJhZzogZnVuY3Rpb24gX2Rpc2FibGVEZWxheWVkRHJhZygpIHtcbiAgICBkcmFnRWwgJiYgX2Rpc2FibGVEcmFnZ2FibGUoZHJhZ0VsKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fZHJhZ1N0YXJ0VGltZXIpO1xuICAgIHRoaXMuX2Rpc2FibGVEZWxheWVkRHJhZ0V2ZW50cygpO1xuICB9LFxuICBfZGlzYWJsZURlbGF5ZWREcmFnRXZlbnRzOiBmdW5jdGlvbiBfZGlzYWJsZURlbGF5ZWREcmFnRXZlbnRzKCkge1xuICAgIHZhciBvd25lckRvY3VtZW50ID0gdGhpcy5lbC5vd25lckRvY3VtZW50O1xuICAgIG9mZihvd25lckRvY3VtZW50LCAnbW91c2V1cCcsIHRoaXMuX2Rpc2FibGVEZWxheWVkRHJhZyk7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICd0b3VjaGVuZCcsIHRoaXMuX2Rpc2FibGVEZWxheWVkRHJhZyk7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICd0b3VjaGNhbmNlbCcsIHRoaXMuX2Rpc2FibGVEZWxheWVkRHJhZyk7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICdwb2ludGVydXAnLCB0aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAncG9pbnRlcmNhbmNlbCcsIHRoaXMuX2Rpc2FibGVEZWxheWVkRHJhZyk7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICdtb3VzZW1vdmUnLCB0aGlzLl9kZWxheWVkRHJhZ1RvdWNoTW92ZUhhbmRsZXIpO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAndG91Y2htb3ZlJywgdGhpcy5fZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ3BvaW50ZXJtb3ZlJywgdGhpcy5fZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKTtcbiAgfSxcbiAgX3RyaWdnZXJEcmFnU3RhcnQ6IGZ1bmN0aW9uIF90cmlnZ2VyRHJhZ1N0YXJ0KCAvKiogRXZlbnQgKi9ldnQsIC8qKiBUb3VjaCAqL3RvdWNoKSB7XG4gICAgdG91Y2ggPSB0b3VjaCB8fCBldnQucG9pbnRlclR5cGUgPT0gJ3RvdWNoJyAmJiBldnQ7XG4gICAgaWYgKCF0aGlzLm5hdGl2ZURyYWdnYWJsZSB8fCB0b3VjaCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdXBwb3J0UG9pbnRlcikge1xuICAgICAgICBvbihkb2N1bWVudCwgJ3BvaW50ZXJtb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xuICAgICAgfSBlbHNlIGlmICh0b3VjaCkge1xuICAgICAgICBvbihkb2N1bWVudCwgJ3RvdWNobW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uKGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvbihkcmFnRWwsICdkcmFnZW5kJywgdGhpcyk7XG4gICAgICBvbihyb290RWwsICdkcmFnc3RhcnQnLCB0aGlzLl9vbkRyYWdTdGFydCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uKSB7XG4gICAgICAgIF9uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZG9jdW1lbnQuc2VsZWN0aW9uLmVtcHR5KCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge31cbiAgfSxcbiAgX2RyYWdTdGFydGVkOiBmdW5jdGlvbiBfZHJhZ1N0YXJ0ZWQoZmFsbGJhY2ssIGV2dCkge1xuICAgIGF3YWl0aW5nRHJhZ1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICBpZiAocm9vdEVsICYmIGRyYWdFbCkge1xuICAgICAgcGx1Z2luRXZlbnQoJ2RyYWdTdGFydGVkJywgdGhpcywge1xuICAgICAgICBldnQ6IGV2dFxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICAgICAgb24oZG9jdW1lbnQsICdkcmFnb3ZlcicsIF9jaGVja091dHNpZGVUYXJnZXRFbCk7XG4gICAgICB9XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgICAgLy8gQXBwbHkgZWZmZWN0XG4gICAgICAhZmFsbGJhY2sgJiYgdG9nZ2xlQ2xhc3MoZHJhZ0VsLCBvcHRpb25zLmRyYWdDbGFzcywgZmFsc2UpO1xuICAgICAgdG9nZ2xlQ2xhc3MoZHJhZ0VsLCBvcHRpb25zLmdob3N0Q2xhc3MsIHRydWUpO1xuICAgICAgU29ydGFibGUuYWN0aXZlID0gdGhpcztcbiAgICAgIGZhbGxiYWNrICYmIHRoaXMuX2FwcGVuZEdob3N0KCk7XG5cbiAgICAgIC8vIERyYWcgc3RhcnQgZXZlbnRcbiAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgc29ydGFibGU6IHRoaXMsXG4gICAgICAgIG5hbWU6ICdzdGFydCcsXG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX251bGxpbmcoKTtcbiAgICB9XG4gIH0sXG4gIF9lbXVsYXRlRHJhZ092ZXI6IGZ1bmN0aW9uIF9lbXVsYXRlRHJhZ092ZXIoKSB7XG4gICAgaWYgKHRvdWNoRXZ0KSB7XG4gICAgICB0aGlzLl9sYXN0WCA9IHRvdWNoRXZ0LmNsaWVudFg7XG4gICAgICB0aGlzLl9sYXN0WSA9IHRvdWNoRXZ0LmNsaWVudFk7XG4gICAgICBfaGlkZUdob3N0Rm9yVGFyZ2V0KCk7XG4gICAgICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh0b3VjaEV2dC5jbGllbnRYLCB0b3VjaEV2dC5jbGllbnRZKTtcbiAgICAgIHZhciBwYXJlbnQgPSB0YXJnZXQ7XG4gICAgICB3aGlsZSAodGFyZ2V0ICYmIHRhcmdldC5zaGFkb3dSb290KSB7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5zaGFkb3dSb290LmVsZW1lbnRGcm9tUG9pbnQodG91Y2hFdnQuY2xpZW50WCwgdG91Y2hFdnQuY2xpZW50WSk7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IHBhcmVudCkgYnJlYWs7XG4gICAgICAgIHBhcmVudCA9IHRhcmdldDtcbiAgICAgIH1cbiAgICAgIGRyYWdFbC5wYXJlbnROb2RlW2V4cGFuZG9dLl9pc091dHNpZGVUaGlzRWwodGFyZ2V0KTtcbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgZG8ge1xuICAgICAgICAgIGlmIChwYXJlbnRbZXhwYW5kb10pIHtcbiAgICAgICAgICAgIHZhciBpbnNlcnRlZCA9IHZvaWQgMDtcbiAgICAgICAgICAgIGluc2VydGVkID0gcGFyZW50W2V4cGFuZG9dLl9vbkRyYWdPdmVyKHtcbiAgICAgICAgICAgICAgY2xpZW50WDogdG91Y2hFdnQuY2xpZW50WCxcbiAgICAgICAgICAgICAgY2xpZW50WTogdG91Y2hFdnQuY2xpZW50WSxcbiAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgICAgICAgIHJvb3RFbDogcGFyZW50XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChpbnNlcnRlZCAmJiAhdGhpcy5vcHRpb25zLmRyYWdvdmVyQnViYmxlKSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0YXJnZXQgPSBwYXJlbnQ7IC8vIHN0b3JlIGxhc3QgZWxlbWVudFxuICAgICAgICB9XG4gICAgICAgIC8qIGpzaGludCBib3NzOnRydWUgKi8gd2hpbGUgKHBhcmVudCA9IGdldFBhcmVudE9ySG9zdChwYXJlbnQpKTtcbiAgICAgIH1cbiAgICAgIF91bmhpZGVHaG9zdEZvclRhcmdldCgpO1xuICAgIH1cbiAgfSxcbiAgX29uVG91Y2hNb3ZlOiBmdW5jdGlvbiBfb25Ub3VjaE1vdmUoIC8qKlRvdWNoRXZlbnQqL2V2dCkge1xuICAgIGlmICh0YXBFdnQpIHtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICBmYWxsYmFja1RvbGVyYW5jZSA9IG9wdGlvbnMuZmFsbGJhY2tUb2xlcmFuY2UsXG4gICAgICAgIGZhbGxiYWNrT2Zmc2V0ID0gb3B0aW9ucy5mYWxsYmFja09mZnNldCxcbiAgICAgICAgdG91Y2ggPSBldnQudG91Y2hlcyA/IGV2dC50b3VjaGVzWzBdIDogZXZ0LFxuICAgICAgICBnaG9zdE1hdHJpeCA9IGdob3N0RWwgJiYgbWF0cml4KGdob3N0RWwsIHRydWUpLFxuICAgICAgICBzY2FsZVggPSBnaG9zdEVsICYmIGdob3N0TWF0cml4ICYmIGdob3N0TWF0cml4LmEsXG4gICAgICAgIHNjYWxlWSA9IGdob3N0RWwgJiYgZ2hvc3RNYXRyaXggJiYgZ2hvc3RNYXRyaXguZCxcbiAgICAgICAgcmVsYXRpdmVTY3JvbGxPZmZzZXQgPSBQb3NpdGlvbkdob3N0QWJzb2x1dGVseSAmJiBnaG9zdFJlbGF0aXZlUGFyZW50ICYmIGdldFJlbGF0aXZlU2Nyb2xsT2Zmc2V0KGdob3N0UmVsYXRpdmVQYXJlbnQpLFxuICAgICAgICBkeCA9ICh0b3VjaC5jbGllbnRYIC0gdGFwRXZ0LmNsaWVudFggKyBmYWxsYmFja09mZnNldC54KSAvIChzY2FsZVggfHwgMSkgKyAocmVsYXRpdmVTY3JvbGxPZmZzZXQgPyByZWxhdGl2ZVNjcm9sbE9mZnNldFswXSAtIGdob3N0UmVsYXRpdmVQYXJlbnRJbml0aWFsU2Nyb2xsWzBdIDogMCkgLyAoc2NhbGVYIHx8IDEpLFxuICAgICAgICBkeSA9ICh0b3VjaC5jbGllbnRZIC0gdGFwRXZ0LmNsaWVudFkgKyBmYWxsYmFja09mZnNldC55KSAvIChzY2FsZVkgfHwgMSkgKyAocmVsYXRpdmVTY3JvbGxPZmZzZXQgPyByZWxhdGl2ZVNjcm9sbE9mZnNldFsxXSAtIGdob3N0UmVsYXRpdmVQYXJlbnRJbml0aWFsU2Nyb2xsWzFdIDogMCkgLyAoc2NhbGVZIHx8IDEpO1xuXG4gICAgICAvLyBvbmx5IHNldCB0aGUgc3RhdHVzIHRvIGRyYWdnaW5nLCB3aGVuIHdlIGFyZSBhY3R1YWxseSBkcmFnZ2luZ1xuICAgICAgaWYgKCFTb3J0YWJsZS5hY3RpdmUgJiYgIWF3YWl0aW5nRHJhZ1N0YXJ0ZWQpIHtcbiAgICAgICAgaWYgKGZhbGxiYWNrVG9sZXJhbmNlICYmIE1hdGgubWF4KE1hdGguYWJzKHRvdWNoLmNsaWVudFggLSB0aGlzLl9sYXN0WCksIE1hdGguYWJzKHRvdWNoLmNsaWVudFkgLSB0aGlzLl9sYXN0WSkpIDwgZmFsbGJhY2tUb2xlcmFuY2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fb25EcmFnU3RhcnQoZXZ0LCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChnaG9zdEVsKSB7XG4gICAgICAgIGlmIChnaG9zdE1hdHJpeCkge1xuICAgICAgICAgIGdob3N0TWF0cml4LmUgKz0gZHggLSAobGFzdER4IHx8IDApO1xuICAgICAgICAgIGdob3N0TWF0cml4LmYgKz0gZHkgLSAobGFzdER5IHx8IDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdob3N0TWF0cml4ID0ge1xuICAgICAgICAgICAgYTogMSxcbiAgICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgICBjOiAwLFxuICAgICAgICAgICAgZDogMSxcbiAgICAgICAgICAgIGU6IGR4LFxuICAgICAgICAgICAgZjogZHlcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHZhciBjc3NNYXRyaXggPSBcIm1hdHJpeChcIi5jb25jYXQoZ2hvc3RNYXRyaXguYSwgXCIsXCIpLmNvbmNhdChnaG9zdE1hdHJpeC5iLCBcIixcIikuY29uY2F0KGdob3N0TWF0cml4LmMsIFwiLFwiKS5jb25jYXQoZ2hvc3RNYXRyaXguZCwgXCIsXCIpLmNvbmNhdChnaG9zdE1hdHJpeC5lLCBcIixcIikuY29uY2F0KGdob3N0TWF0cml4LmYsIFwiKVwiKTtcbiAgICAgICAgY3NzKGdob3N0RWwsICd3ZWJraXRUcmFuc2Zvcm0nLCBjc3NNYXRyaXgpO1xuICAgICAgICBjc3MoZ2hvc3RFbCwgJ21velRyYW5zZm9ybScsIGNzc01hdHJpeCk7XG4gICAgICAgIGNzcyhnaG9zdEVsLCAnbXNUcmFuc2Zvcm0nLCBjc3NNYXRyaXgpO1xuICAgICAgICBjc3MoZ2hvc3RFbCwgJ3RyYW5zZm9ybScsIGNzc01hdHJpeCk7XG4gICAgICAgIGxhc3REeCA9IGR4O1xuICAgICAgICBsYXN0RHkgPSBkeTtcbiAgICAgICAgdG91Y2hFdnQgPSB0b3VjaDtcbiAgICAgIH1cbiAgICAgIGV2dC5jYW5jZWxhYmxlICYmIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSxcbiAgX2FwcGVuZEdob3N0OiBmdW5jdGlvbiBfYXBwZW5kR2hvc3QoKSB7XG4gICAgLy8gQnVnIGlmIHVzaW5nIHNjYWxlKCk6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI2MzcwNThcbiAgICAvLyBOb3QgYmVpbmcgYWRqdXN0ZWQgZm9yXG4gICAgaWYgKCFnaG9zdEVsKSB7XG4gICAgICB2YXIgY29udGFpbmVyID0gdGhpcy5vcHRpb25zLmZhbGxiYWNrT25Cb2R5ID8gZG9jdW1lbnQuYm9keSA6IHJvb3RFbCxcbiAgICAgICAgcmVjdCA9IGdldFJlY3QoZHJhZ0VsLCB0cnVlLCBQb3NpdGlvbkdob3N0QWJzb2x1dGVseSwgdHJ1ZSwgY29udGFpbmVyKSxcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgICAgLy8gUG9zaXRpb24gYWJzb2x1dGVseVxuICAgICAgaWYgKFBvc2l0aW9uR2hvc3RBYnNvbHV0ZWx5KSB7XG4gICAgICAgIC8vIEdldCByZWxhdGl2ZWx5IHBvc2l0aW9uZWQgcGFyZW50XG4gICAgICAgIGdob3N0UmVsYXRpdmVQYXJlbnQgPSBjb250YWluZXI7XG4gICAgICAgIHdoaWxlIChjc3MoZ2hvc3RSZWxhdGl2ZVBhcmVudCwgJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnICYmIGNzcyhnaG9zdFJlbGF0aXZlUGFyZW50LCAndHJhbnNmb3JtJykgPT09ICdub25lJyAmJiBnaG9zdFJlbGF0aXZlUGFyZW50ICE9PSBkb2N1bWVudCkge1xuICAgICAgICAgIGdob3N0UmVsYXRpdmVQYXJlbnQgPSBnaG9zdFJlbGF0aXZlUGFyZW50LnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdob3N0UmVsYXRpdmVQYXJlbnQgIT09IGRvY3VtZW50LmJvZHkgJiYgZ2hvc3RSZWxhdGl2ZVBhcmVudCAhPT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICAgaWYgKGdob3N0UmVsYXRpdmVQYXJlbnQgPT09IGRvY3VtZW50KSBnaG9zdFJlbGF0aXZlUGFyZW50ID0gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpO1xuICAgICAgICAgIHJlY3QudG9wICs9IGdob3N0UmVsYXRpdmVQYXJlbnQuc2Nyb2xsVG9wO1xuICAgICAgICAgIHJlY3QubGVmdCArPSBnaG9zdFJlbGF0aXZlUGFyZW50LnNjcm9sbExlZnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2hvc3RSZWxhdGl2ZVBhcmVudCA9IGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBnaG9zdFJlbGF0aXZlUGFyZW50SW5pdGlhbFNjcm9sbCA9IGdldFJlbGF0aXZlU2Nyb2xsT2Zmc2V0KGdob3N0UmVsYXRpdmVQYXJlbnQpO1xuICAgICAgfVxuICAgICAgZ2hvc3RFbCA9IGRyYWdFbC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICB0b2dnbGVDbGFzcyhnaG9zdEVsLCBvcHRpb25zLmdob3N0Q2xhc3MsIGZhbHNlKTtcbiAgICAgIHRvZ2dsZUNsYXNzKGdob3N0RWwsIG9wdGlvbnMuZmFsbGJhY2tDbGFzcywgdHJ1ZSk7XG4gICAgICB0b2dnbGVDbGFzcyhnaG9zdEVsLCBvcHRpb25zLmRyYWdDbGFzcywgdHJ1ZSk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ3RyYW5zaXRpb24nLCAnJyk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ3RyYW5zZm9ybScsICcnKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAnYm94LXNpemluZycsICdib3JkZXItYm94Jyk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ21hcmdpbicsIDApO1xuICAgICAgY3NzKGdob3N0RWwsICd0b3AnLCByZWN0LnRvcCk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ2xlZnQnLCByZWN0LmxlZnQpO1xuICAgICAgY3NzKGdob3N0RWwsICd3aWR0aCcsIHJlY3Qud2lkdGgpO1xuICAgICAgY3NzKGdob3N0RWwsICdoZWlnaHQnLCByZWN0LmhlaWdodCk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ29wYWNpdHknLCAnMC44Jyk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ3Bvc2l0aW9uJywgUG9zaXRpb25HaG9zdEFic29sdXRlbHkgPyAnYWJzb2x1dGUnIDogJ2ZpeGVkJyk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ3pJbmRleCcsICcxMDAwMDAnKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAncG9pbnRlckV2ZW50cycsICdub25lJyk7XG4gICAgICBTb3J0YWJsZS5naG9zdCA9IGdob3N0RWw7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2hvc3RFbCk7XG5cbiAgICAgIC8vIFNldCB0cmFuc2Zvcm0tb3JpZ2luXG4gICAgICBjc3MoZ2hvc3RFbCwgJ3RyYW5zZm9ybS1vcmlnaW4nLCB0YXBEaXN0YW5jZUxlZnQgLyBwYXJzZUludChnaG9zdEVsLnN0eWxlLndpZHRoKSAqIDEwMCArICclICcgKyB0YXBEaXN0YW5jZVRvcCAvIHBhcnNlSW50KGdob3N0RWwuc3R5bGUuaGVpZ2h0KSAqIDEwMCArICclJyk7XG4gICAgfVxuICB9LFxuICBfb25EcmFnU3RhcnQ6IGZ1bmN0aW9uIF9vbkRyYWdTdGFydCggLyoqRXZlbnQqL2V2dCwgLyoqYm9vbGVhbiovZmFsbGJhY2spIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBkYXRhVHJhbnNmZXIgPSBldnQuZGF0YVRyYW5zZmVyO1xuICAgIHZhciBvcHRpb25zID0gX3RoaXMub3B0aW9ucztcbiAgICBwbHVnaW5FdmVudCgnZHJhZ1N0YXJ0JywgdGhpcywge1xuICAgICAgZXZ0OiBldnRcbiAgICB9KTtcbiAgICBpZiAoU29ydGFibGUuZXZlbnRDYW5jZWxlZCkge1xuICAgICAgdGhpcy5fb25Ecm9wKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHBsdWdpbkV2ZW50KCdzZXR1cENsb25lJywgdGhpcyk7XG4gICAgaWYgKCFTb3J0YWJsZS5ldmVudENhbmNlbGVkKSB7XG4gICAgICBjbG9uZUVsID0gY2xvbmUoZHJhZ0VsKTtcbiAgICAgIGNsb25lRWwucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik7XG4gICAgICBjbG9uZUVsLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgY2xvbmVFbC5zdHlsZVsnd2lsbC1jaGFuZ2UnXSA9ICcnO1xuICAgICAgdGhpcy5faGlkZUNsb25lKCk7XG4gICAgICB0b2dnbGVDbGFzcyhjbG9uZUVsLCB0aGlzLm9wdGlvbnMuY2hvc2VuQ2xhc3MsIGZhbHNlKTtcbiAgICAgIFNvcnRhYmxlLmNsb25lID0gY2xvbmVFbDtcbiAgICB9XG5cbiAgICAvLyAjMTE0MzogSUZyYW1lIHN1cHBvcnQgd29ya2Fyb3VuZFxuICAgIF90aGlzLmNsb25lSWQgPSBfbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgcGx1Z2luRXZlbnQoJ2Nsb25lJywgX3RoaXMpO1xuICAgICAgaWYgKFNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHJldHVybjtcbiAgICAgIGlmICghX3RoaXMub3B0aW9ucy5yZW1vdmVDbG9uZU9uSGlkZSkge1xuICAgICAgICByb290RWwuaW5zZXJ0QmVmb3JlKGNsb25lRWwsIGRyYWdFbCk7XG4gICAgICB9XG4gICAgICBfdGhpcy5faGlkZUNsb25lKCk7XG4gICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgIHNvcnRhYmxlOiBfdGhpcyxcbiAgICAgICAgbmFtZTogJ2Nsb25lJ1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgIWZhbGxiYWNrICYmIHRvZ2dsZUNsYXNzKGRyYWdFbCwgb3B0aW9ucy5kcmFnQ2xhc3MsIHRydWUpO1xuXG4gICAgLy8gU2V0IHByb3BlciBkcm9wIGV2ZW50c1xuICAgIGlmIChmYWxsYmFjaykge1xuICAgICAgaWdub3JlTmV4dENsaWNrID0gdHJ1ZTtcbiAgICAgIF90aGlzLl9sb29wSWQgPSBzZXRJbnRlcnZhbChfdGhpcy5fZW11bGF0ZURyYWdPdmVyLCA1MCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFVuZG8gd2hhdCB3YXMgc2V0IGluIF9wcmVwYXJlRHJhZ1N0YXJ0IGJlZm9yZSBkcmFnIHN0YXJ0ZWRcbiAgICAgIG9mZihkb2N1bWVudCwgJ21vdXNldXAnLCBfdGhpcy5fb25Ecm9wKTtcbiAgICAgIG9mZihkb2N1bWVudCwgJ3RvdWNoZW5kJywgX3RoaXMuX29uRHJvcCk7XG4gICAgICBvZmYoZG9jdW1lbnQsICd0b3VjaGNhbmNlbCcsIF90aGlzLl9vbkRyb3ApO1xuICAgICAgaWYgKGRhdGFUcmFuc2Zlcikge1xuICAgICAgICBkYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJztcbiAgICAgICAgb3B0aW9ucy5zZXREYXRhICYmIG9wdGlvbnMuc2V0RGF0YS5jYWxsKF90aGlzLCBkYXRhVHJhbnNmZXIsIGRyYWdFbCk7XG4gICAgICB9XG4gICAgICBvbihkb2N1bWVudCwgJ2Ryb3AnLCBfdGhpcyk7XG5cbiAgICAgIC8vICMxMjc2IGZpeDpcbiAgICAgIGNzcyhkcmFnRWwsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWigwKScpO1xuICAgIH1cbiAgICBhd2FpdGluZ0RyYWdTdGFydGVkID0gdHJ1ZTtcbiAgICBfdGhpcy5fZHJhZ1N0YXJ0SWQgPSBfbmV4dFRpY2soX3RoaXMuX2RyYWdTdGFydGVkLmJpbmQoX3RoaXMsIGZhbGxiYWNrLCBldnQpKTtcbiAgICBvbihkb2N1bWVudCwgJ3NlbGVjdHN0YXJ0JywgX3RoaXMpO1xuICAgIG1vdmVkID0gdHJ1ZTtcbiAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgaWYgKFNhZmFyaSkge1xuICAgICAgY3NzKGRvY3VtZW50LmJvZHksICd1c2VyLXNlbGVjdCcsICdub25lJyk7XG4gICAgfVxuICB9LFxuICAvLyBSZXR1cm5zIHRydWUgLSBpZiBubyBmdXJ0aGVyIGFjdGlvbiBpcyBuZWVkZWQgKGVpdGhlciBpbnNlcnRlZCBvciBhbm90aGVyIGNvbmRpdGlvbilcbiAgX29uRHJhZ092ZXI6IGZ1bmN0aW9uIF9vbkRyYWdPdmVyKCAvKipFdmVudCovZXZ0KSB7XG4gICAgdmFyIGVsID0gdGhpcy5lbCxcbiAgICAgIHRhcmdldCA9IGV2dC50YXJnZXQsXG4gICAgICBkcmFnUmVjdCxcbiAgICAgIHRhcmdldFJlY3QsXG4gICAgICByZXZlcnQsXG4gICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgZ3JvdXAgPSBvcHRpb25zLmdyb3VwLFxuICAgICAgYWN0aXZlU29ydGFibGUgPSBTb3J0YWJsZS5hY3RpdmUsXG4gICAgICBpc093bmVyID0gYWN0aXZlR3JvdXAgPT09IGdyb3VwLFxuICAgICAgY2FuU29ydCA9IG9wdGlvbnMuc29ydCxcbiAgICAgIGZyb21Tb3J0YWJsZSA9IHB1dFNvcnRhYmxlIHx8IGFjdGl2ZVNvcnRhYmxlLFxuICAgICAgdmVydGljYWwsXG4gICAgICBfdGhpcyA9IHRoaXMsXG4gICAgICBjb21wbGV0ZWRGaXJlZCA9IGZhbHNlO1xuICAgIGlmIChfc2lsZW50KSByZXR1cm47XG4gICAgZnVuY3Rpb24gZHJhZ092ZXJFdmVudChuYW1lLCBleHRyYSkge1xuICAgICAgcGx1Z2luRXZlbnQobmFtZSwgX3RoaXMsIF9vYmplY3RTcHJlYWQyKHtcbiAgICAgICAgZXZ0OiBldnQsXG4gICAgICAgIGlzT3duZXI6IGlzT3duZXIsXG4gICAgICAgIGF4aXM6IHZlcnRpY2FsID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJyxcbiAgICAgICAgcmV2ZXJ0OiByZXZlcnQsXG4gICAgICAgIGRyYWdSZWN0OiBkcmFnUmVjdCxcbiAgICAgICAgdGFyZ2V0UmVjdDogdGFyZ2V0UmVjdCxcbiAgICAgICAgY2FuU29ydDogY2FuU29ydCxcbiAgICAgICAgZnJvbVNvcnRhYmxlOiBmcm9tU29ydGFibGUsXG4gICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICBjb21wbGV0ZWQ6IGNvbXBsZXRlZCxcbiAgICAgICAgb25Nb3ZlOiBmdW5jdGlvbiBvbk1vdmUodGFyZ2V0LCBhZnRlcikge1xuICAgICAgICAgIHJldHVybiBfb25Nb3ZlKHJvb3RFbCwgZWwsIGRyYWdFbCwgZHJhZ1JlY3QsIHRhcmdldCwgZ2V0UmVjdCh0YXJnZXQpLCBldnQsIGFmdGVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2hhbmdlZDogY2hhbmdlZFxuICAgICAgfSwgZXh0cmEpKTtcbiAgICB9XG5cbiAgICAvLyBDYXB0dXJlIGFuaW1hdGlvbiBzdGF0ZVxuICAgIGZ1bmN0aW9uIGNhcHR1cmUoKSB7XG4gICAgICBkcmFnT3ZlckV2ZW50KCdkcmFnT3ZlckFuaW1hdGlvbkNhcHR1cmUnKTtcbiAgICAgIF90aGlzLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgICAgaWYgKF90aGlzICE9PSBmcm9tU29ydGFibGUpIHtcbiAgICAgICAgZnJvbVNvcnRhYmxlLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBpbnZvY2F0aW9uIHdoZW4gZHJhZ0VsIGlzIGluc2VydGVkIChvciBjb21wbGV0ZWQpXG4gICAgZnVuY3Rpb24gY29tcGxldGVkKGluc2VydGlvbikge1xuICAgICAgZHJhZ092ZXJFdmVudCgnZHJhZ092ZXJDb21wbGV0ZWQnLCB7XG4gICAgICAgIGluc2VydGlvbjogaW5zZXJ0aW9uXG4gICAgICB9KTtcbiAgICAgIGlmIChpbnNlcnRpb24pIHtcbiAgICAgICAgLy8gQ2xvbmVzIG11c3QgYmUgaGlkZGVuIGJlZm9yZSBmb2xkaW5nIGFuaW1hdGlvbiB0byBjYXB0dXJlIGRyYWdSZWN0QWJzb2x1dGUgcHJvcGVybHlcbiAgICAgICAgaWYgKGlzT3duZXIpIHtcbiAgICAgICAgICBhY3RpdmVTb3J0YWJsZS5faGlkZUNsb25lKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWN0aXZlU29ydGFibGUuX3Nob3dDbG9uZShfdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF90aGlzICE9PSBmcm9tU29ydGFibGUpIHtcbiAgICAgICAgICAvLyBTZXQgZ2hvc3QgY2xhc3MgdG8gbmV3IHNvcnRhYmxlJ3MgZ2hvc3QgY2xhc3NcbiAgICAgICAgICB0b2dnbGVDbGFzcyhkcmFnRWwsIHB1dFNvcnRhYmxlID8gcHV0U29ydGFibGUub3B0aW9ucy5naG9zdENsYXNzIDogYWN0aXZlU29ydGFibGUub3B0aW9ucy5naG9zdENsYXNzLCBmYWxzZSk7XG4gICAgICAgICAgdG9nZ2xlQ2xhc3MoZHJhZ0VsLCBvcHRpb25zLmdob3N0Q2xhc3MsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwdXRTb3J0YWJsZSAhPT0gX3RoaXMgJiYgX3RoaXMgIT09IFNvcnRhYmxlLmFjdGl2ZSkge1xuICAgICAgICAgIHB1dFNvcnRhYmxlID0gX3RoaXM7XG4gICAgICAgIH0gZWxzZSBpZiAoX3RoaXMgPT09IFNvcnRhYmxlLmFjdGl2ZSAmJiBwdXRTb3J0YWJsZSkge1xuICAgICAgICAgIHB1dFNvcnRhYmxlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFuaW1hdGlvblxuICAgICAgICBpZiAoZnJvbVNvcnRhYmxlID09PSBfdGhpcykge1xuICAgICAgICAgIF90aGlzLl9pZ25vcmVXaGlsZUFuaW1hdGluZyA9IHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5hbmltYXRlQWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkcmFnT3ZlckV2ZW50KCdkcmFnT3ZlckFuaW1hdGlvbkNvbXBsZXRlJyk7XG4gICAgICAgICAgX3RoaXMuX2lnbm9yZVdoaWxlQW5pbWF0aW5nID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChfdGhpcyAhPT0gZnJvbVNvcnRhYmxlKSB7XG4gICAgICAgICAgZnJvbVNvcnRhYmxlLmFuaW1hdGVBbGwoKTtcbiAgICAgICAgICBmcm9tU29ydGFibGUuX2lnbm9yZVdoaWxlQW5pbWF0aW5nID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBOdWxsIGxhc3RUYXJnZXQgaWYgaXQgaXMgbm90IGluc2lkZSBhIHByZXZpb3VzbHkgc3dhcHBlZCBlbGVtZW50XG4gICAgICBpZiAodGFyZ2V0ID09PSBkcmFnRWwgJiYgIWRyYWdFbC5hbmltYXRlZCB8fCB0YXJnZXQgPT09IGVsICYmICF0YXJnZXQuYW5pbWF0ZWQpIHtcbiAgICAgICAgbGFzdFRhcmdldCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIG5vIGJ1YmJsaW5nIGFuZCBub3QgZmFsbGJhY2tcbiAgICAgIGlmICghb3B0aW9ucy5kcmFnb3ZlckJ1YmJsZSAmJiAhZXZ0LnJvb3RFbCAmJiB0YXJnZXQgIT09IGRvY3VtZW50KSB7XG4gICAgICAgIGRyYWdFbC5wYXJlbnROb2RlW2V4cGFuZG9dLl9pc091dHNpZGVUaGlzRWwoZXZ0LnRhcmdldCk7XG5cbiAgICAgICAgLy8gRG8gbm90IGRldGVjdCBmb3IgZW1wdHkgaW5zZXJ0IGlmIGFscmVhZHkgaW5zZXJ0ZWRcbiAgICAgICAgIWluc2VydGlvbiAmJiBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudChldnQpO1xuICAgICAgfVxuICAgICAgIW9wdGlvbnMuZHJhZ292ZXJCdWJibGUgJiYgZXZ0LnN0b3BQcm9wYWdhdGlvbiAmJiBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICByZXR1cm4gY29tcGxldGVkRmlyZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIENhbGwgd2hlbiBkcmFnRWwgaGFzIGJlZW4gaW5zZXJ0ZWRcbiAgICBmdW5jdGlvbiBjaGFuZ2VkKCkge1xuICAgICAgbmV3SW5kZXggPSBpbmRleChkcmFnRWwpO1xuICAgICAgbmV3RHJhZ2dhYmxlSW5kZXggPSBpbmRleChkcmFnRWwsIG9wdGlvbnMuZHJhZ2dhYmxlKTtcbiAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgc29ydGFibGU6IF90aGlzLFxuICAgICAgICBuYW1lOiAnY2hhbmdlJyxcbiAgICAgICAgdG9FbDogZWwsXG4gICAgICAgIG5ld0luZGV4OiBuZXdJbmRleCxcbiAgICAgICAgbmV3RHJhZ2dhYmxlSW5kZXg6IG5ld0RyYWdnYWJsZUluZGV4LFxuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZXZ0LnByZXZlbnREZWZhdWx0ICE9PSB2b2lkIDApIHtcbiAgICAgIGV2dC5jYW5jZWxhYmxlICYmIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICB0YXJnZXQgPSBjbG9zZXN0KHRhcmdldCwgb3B0aW9ucy5kcmFnZ2FibGUsIGVsLCB0cnVlKTtcbiAgICBkcmFnT3ZlckV2ZW50KCdkcmFnT3ZlcicpO1xuICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSByZXR1cm4gY29tcGxldGVkRmlyZWQ7XG4gICAgaWYgKGRyYWdFbC5jb250YWlucyhldnQudGFyZ2V0KSB8fCB0YXJnZXQuYW5pbWF0ZWQgJiYgdGFyZ2V0LmFuaW1hdGluZ1ggJiYgdGFyZ2V0LmFuaW1hdGluZ1kgfHwgX3RoaXMuX2lnbm9yZVdoaWxlQW5pbWF0aW5nID09PSB0YXJnZXQpIHtcbiAgICAgIHJldHVybiBjb21wbGV0ZWQoZmFsc2UpO1xuICAgIH1cbiAgICBpZ25vcmVOZXh0Q2xpY2sgPSBmYWxzZTtcbiAgICBpZiAoYWN0aXZlU29ydGFibGUgJiYgIW9wdGlvbnMuZGlzYWJsZWQgJiYgKGlzT3duZXIgPyBjYW5Tb3J0IHx8IChyZXZlcnQgPSBwYXJlbnRFbCAhPT0gcm9vdEVsKSAvLyBSZXZlcnRpbmcgaXRlbSBpbnRvIHRoZSBvcmlnaW5hbCBsaXN0XG4gICAgOiBwdXRTb3J0YWJsZSA9PT0gdGhpcyB8fCAodGhpcy5sYXN0UHV0TW9kZSA9IGFjdGl2ZUdyb3VwLmNoZWNrUHVsbCh0aGlzLCBhY3RpdmVTb3J0YWJsZSwgZHJhZ0VsLCBldnQpKSAmJiBncm91cC5jaGVja1B1dCh0aGlzLCBhY3RpdmVTb3J0YWJsZSwgZHJhZ0VsLCBldnQpKSkge1xuICAgICAgdmVydGljYWwgPSB0aGlzLl9nZXREaXJlY3Rpb24oZXZ0LCB0YXJnZXQpID09PSAndmVydGljYWwnO1xuICAgICAgZHJhZ1JlY3QgPSBnZXRSZWN0KGRyYWdFbCk7XG4gICAgICBkcmFnT3ZlckV2ZW50KCdkcmFnT3ZlclZhbGlkJyk7XG4gICAgICBpZiAoU29ydGFibGUuZXZlbnRDYW5jZWxlZCkgcmV0dXJuIGNvbXBsZXRlZEZpcmVkO1xuICAgICAgaWYgKHJldmVydCkge1xuICAgICAgICBwYXJlbnRFbCA9IHJvb3RFbDsgLy8gYWN0dWFsaXphdGlvblxuICAgICAgICBjYXB0dXJlKCk7XG4gICAgICAgIHRoaXMuX2hpZGVDbG9uZSgpO1xuICAgICAgICBkcmFnT3ZlckV2ZW50KCdyZXZlcnQnKTtcbiAgICAgICAgaWYgKCFTb3J0YWJsZS5ldmVudENhbmNlbGVkKSB7XG4gICAgICAgICAgaWYgKG5leHRFbCkge1xuICAgICAgICAgICAgcm9vdEVsLmluc2VydEJlZm9yZShkcmFnRWwsIG5leHRFbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJvb3RFbC5hcHBlbmRDaGlsZChkcmFnRWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcGxldGVkKHRydWUpO1xuICAgICAgfVxuICAgICAgdmFyIGVsTGFzdENoaWxkID0gbGFzdENoaWxkKGVsLCBvcHRpb25zLmRyYWdnYWJsZSk7XG4gICAgICBpZiAoIWVsTGFzdENoaWxkIHx8IF9naG9zdElzTGFzdChldnQsIHZlcnRpY2FsLCB0aGlzKSAmJiAhZWxMYXN0Q2hpbGQuYW5pbWF0ZWQpIHtcbiAgICAgICAgLy8gSW5zZXJ0IHRvIGVuZCBvZiBsaXN0XG5cbiAgICAgICAgLy8gSWYgYWxyZWFkeSBhdCBlbmQgb2YgbGlzdDogRG8gbm90IGluc2VydFxuICAgICAgICBpZiAoZWxMYXN0Q2hpbGQgPT09IGRyYWdFbCkge1xuICAgICAgICAgIHJldHVybiBjb21wbGV0ZWQoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBsYXN0IGVsZW1lbnQsIGl0IGlzIHRoZSB0YXJnZXRcbiAgICAgICAgaWYgKGVsTGFzdENoaWxkICYmIGVsID09PSBldnQudGFyZ2V0KSB7XG4gICAgICAgICAgdGFyZ2V0ID0gZWxMYXN0Q2hpbGQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgIHRhcmdldFJlY3QgPSBnZXRSZWN0KHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9vbk1vdmUocm9vdEVsLCBlbCwgZHJhZ0VsLCBkcmFnUmVjdCwgdGFyZ2V0LCB0YXJnZXRSZWN0LCBldnQsICEhdGFyZ2V0KSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICBjYXB0dXJlKCk7XG4gICAgICAgICAgaWYgKGVsTGFzdENoaWxkICYmIGVsTGFzdENoaWxkLm5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICAvLyB0aGUgbGFzdCBkcmFnZ2FibGUgZWxlbWVudCBpcyBub3QgdGhlIGxhc3Qgbm9kZVxuICAgICAgICAgICAgZWwuaW5zZXJ0QmVmb3JlKGRyYWdFbCwgZWxMYXN0Q2hpbGQubmV4dFNpYmxpbmcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChkcmFnRWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwYXJlbnRFbCA9IGVsOyAvLyBhY3R1YWxpemF0aW9uXG5cbiAgICAgICAgICBjaGFuZ2VkKCk7XG4gICAgICAgICAgcmV0dXJuIGNvbXBsZXRlZCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbExhc3RDaGlsZCAmJiBfZ2hvc3RJc0ZpcnN0KGV2dCwgdmVydGljYWwsIHRoaXMpKSB7XG4gICAgICAgIC8vIEluc2VydCB0byBzdGFydCBvZiBsaXN0XG4gICAgICAgIHZhciBmaXJzdENoaWxkID0gZ2V0Q2hpbGQoZWwsIDAsIG9wdGlvbnMsIHRydWUpO1xuICAgICAgICBpZiAoZmlyc3RDaGlsZCA9PT0gZHJhZ0VsKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbXBsZXRlZChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0ID0gZmlyc3RDaGlsZDtcbiAgICAgICAgdGFyZ2V0UmVjdCA9IGdldFJlY3QodGFyZ2V0KTtcbiAgICAgICAgaWYgKF9vbk1vdmUocm9vdEVsLCBlbCwgZHJhZ0VsLCBkcmFnUmVjdCwgdGFyZ2V0LCB0YXJnZXRSZWN0LCBldnQsIGZhbHNlKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICBjYXB0dXJlKCk7XG4gICAgICAgICAgZWwuaW5zZXJ0QmVmb3JlKGRyYWdFbCwgZmlyc3RDaGlsZCk7XG4gICAgICAgICAgcGFyZW50RWwgPSBlbDsgLy8gYWN0dWFsaXphdGlvblxuXG4gICAgICAgICAgY2hhbmdlZCgpO1xuICAgICAgICAgIHJldHVybiBjb21wbGV0ZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LnBhcmVudE5vZGUgPT09IGVsKSB7XG4gICAgICAgIHRhcmdldFJlY3QgPSBnZXRSZWN0KHRhcmdldCk7XG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSAwLFxuICAgICAgICAgIHRhcmdldEJlZm9yZUZpcnN0U3dhcCxcbiAgICAgICAgICBkaWZmZXJlbnRMZXZlbCA9IGRyYWdFbC5wYXJlbnROb2RlICE9PSBlbCxcbiAgICAgICAgICBkaWZmZXJlbnRSb3dDb2wgPSAhX2RyYWdFbEluUm93Q29sdW1uKGRyYWdFbC5hbmltYXRlZCAmJiBkcmFnRWwudG9SZWN0IHx8IGRyYWdSZWN0LCB0YXJnZXQuYW5pbWF0ZWQgJiYgdGFyZ2V0LnRvUmVjdCB8fCB0YXJnZXRSZWN0LCB2ZXJ0aWNhbCksXG4gICAgICAgICAgc2lkZTEgPSB2ZXJ0aWNhbCA/ICd0b3AnIDogJ2xlZnQnLFxuICAgICAgICAgIHNjcm9sbGVkUGFzdFRvcCA9IGlzU2Nyb2xsZWRQYXN0KHRhcmdldCwgJ3RvcCcsICd0b3AnKSB8fCBpc1Njcm9sbGVkUGFzdChkcmFnRWwsICd0b3AnLCAndG9wJyksXG4gICAgICAgICAgc2Nyb2xsQmVmb3JlID0gc2Nyb2xsZWRQYXN0VG9wID8gc2Nyb2xsZWRQYXN0VG9wLnNjcm9sbFRvcCA6IHZvaWQgMDtcbiAgICAgICAgaWYgKGxhc3RUYXJnZXQgIT09IHRhcmdldCkge1xuICAgICAgICAgIHRhcmdldEJlZm9yZUZpcnN0U3dhcCA9IHRhcmdldFJlY3Rbc2lkZTFdO1xuICAgICAgICAgIHBhc3RGaXJzdEludmVydFRocmVzaCA9IGZhbHNlO1xuICAgICAgICAgIGlzQ2lyY3Vtc3RhbnRpYWxJbnZlcnQgPSAhZGlmZmVyZW50Um93Q29sICYmIG9wdGlvbnMuaW52ZXJ0U3dhcCB8fCBkaWZmZXJlbnRMZXZlbDtcbiAgICAgICAgfVxuICAgICAgICBkaXJlY3Rpb24gPSBfZ2V0U3dhcERpcmVjdGlvbihldnQsIHRhcmdldCwgdGFyZ2V0UmVjdCwgdmVydGljYWwsIGRpZmZlcmVudFJvd0NvbCA/IDEgOiBvcHRpb25zLnN3YXBUaHJlc2hvbGQsIG9wdGlvbnMuaW52ZXJ0ZWRTd2FwVGhyZXNob2xkID09IG51bGwgPyBvcHRpb25zLnN3YXBUaHJlc2hvbGQgOiBvcHRpb25zLmludmVydGVkU3dhcFRocmVzaG9sZCwgaXNDaXJjdW1zdGFudGlhbEludmVydCwgbGFzdFRhcmdldCA9PT0gdGFyZ2V0KTtcbiAgICAgICAgdmFyIHNpYmxpbmc7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gIT09IDApIHtcbiAgICAgICAgICAvLyBDaGVjayBpZiB0YXJnZXQgaXMgYmVzaWRlIGRyYWdFbCBpbiByZXNwZWN0aXZlIGRpcmVjdGlvbiAoaWdub3JpbmcgaGlkZGVuIGVsZW1lbnRzKVxuICAgICAgICAgIHZhciBkcmFnSW5kZXggPSBpbmRleChkcmFnRWwpO1xuICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgIGRyYWdJbmRleCAtPSBkaXJlY3Rpb247XG4gICAgICAgICAgICBzaWJsaW5nID0gcGFyZW50RWwuY2hpbGRyZW5bZHJhZ0luZGV4XTtcbiAgICAgICAgICB9IHdoaWxlIChzaWJsaW5nICYmIChjc3Moc2libGluZywgJ2Rpc3BsYXknKSA9PT0gJ25vbmUnIHx8IHNpYmxpbmcgPT09IGdob3N0RWwpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBkcmFnRWwgaXMgYWxyZWFkeSBiZXNpZGUgdGFyZ2V0OiBEbyBub3QgaW5zZXJ0XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IDAgfHwgc2libGluZyA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuIGNvbXBsZXRlZChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdFRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgbGFzdERpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgICAgdmFyIG5leHRTaWJsaW5nID0gdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZyxcbiAgICAgICAgICBhZnRlciA9IGZhbHNlO1xuICAgICAgICBhZnRlciA9IGRpcmVjdGlvbiA9PT0gMTtcbiAgICAgICAgdmFyIG1vdmVWZWN0b3IgPSBfb25Nb3ZlKHJvb3RFbCwgZWwsIGRyYWdFbCwgZHJhZ1JlY3QsIHRhcmdldCwgdGFyZ2V0UmVjdCwgZXZ0LCBhZnRlcik7XG4gICAgICAgIGlmIChtb3ZlVmVjdG9yICE9PSBmYWxzZSkge1xuICAgICAgICAgIGlmIChtb3ZlVmVjdG9yID09PSAxIHx8IG1vdmVWZWN0b3IgPT09IC0xKSB7XG4gICAgICAgICAgICBhZnRlciA9IG1vdmVWZWN0b3IgPT09IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIF9zaWxlbnQgPSB0cnVlO1xuICAgICAgICAgIHNldFRpbWVvdXQoX3Vuc2lsZW50LCAzMCk7XG4gICAgICAgICAgY2FwdHVyZSgpO1xuICAgICAgICAgIGlmIChhZnRlciAmJiAhbmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGRyYWdFbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkcmFnRWwsIGFmdGVyID8gbmV4dFNpYmxpbmcgOiB0YXJnZXQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFVuZG8gY2hyb21lJ3Mgc2Nyb2xsIGFkanVzdG1lbnQgKGhhcyBubyBlZmZlY3Qgb24gb3RoZXIgYnJvd3NlcnMpXG4gICAgICAgICAgaWYgKHNjcm9sbGVkUGFzdFRvcCkge1xuICAgICAgICAgICAgc2Nyb2xsQnkoc2Nyb2xsZWRQYXN0VG9wLCAwLCBzY3JvbGxCZWZvcmUgLSBzY3JvbGxlZFBhc3RUb3Auc2Nyb2xsVG9wKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGFyZW50RWwgPSBkcmFnRWwucGFyZW50Tm9kZTsgLy8gYWN0dWFsaXphdGlvblxuXG4gICAgICAgICAgLy8gbXVzdCBiZSBkb25lIGJlZm9yZSBhbmltYXRpb25cbiAgICAgICAgICBpZiAodGFyZ2V0QmVmb3JlRmlyc3RTd2FwICE9PSB1bmRlZmluZWQgJiYgIWlzQ2lyY3Vtc3RhbnRpYWxJbnZlcnQpIHtcbiAgICAgICAgICAgIHRhcmdldE1vdmVEaXN0YW5jZSA9IE1hdGguYWJzKHRhcmdldEJlZm9yZUZpcnN0U3dhcCAtIGdldFJlY3QodGFyZ2V0KVtzaWRlMV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjaGFuZ2VkKCk7XG4gICAgICAgICAgcmV0dXJuIGNvbXBsZXRlZCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGVsLmNvbnRhaW5zKGRyYWdFbCkpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlZChmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcbiAgX2lnbm9yZVdoaWxlQW5pbWF0aW5nOiBudWxsLFxuICBfb2ZmTW92ZUV2ZW50czogZnVuY3Rpb24gX29mZk1vdmVFdmVudHMoKSB7XG4gICAgb2ZmKGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xuICAgIG9mZihkb2N1bWVudCwgJ3RvdWNobW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlKTtcbiAgICBvZmYoZG9jdW1lbnQsICdwb2ludGVybW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlKTtcbiAgICBvZmYoZG9jdW1lbnQsICdkcmFnb3ZlcicsIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50KTtcbiAgICBvZmYoZG9jdW1lbnQsICdtb3VzZW1vdmUnLCBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudCk7XG4gICAgb2ZmKGRvY3VtZW50LCAndG91Y2htb3ZlJywgbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQpO1xuICB9LFxuICBfb2ZmVXBFdmVudHM6IGZ1bmN0aW9uIF9vZmZVcEV2ZW50cygpIHtcbiAgICB2YXIgb3duZXJEb2N1bWVudCA9IHRoaXMuZWwub3duZXJEb2N1bWVudDtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ21vdXNldXAnLCB0aGlzLl9vbkRyb3ApO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAndG91Y2hlbmQnLCB0aGlzLl9vbkRyb3ApO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAncG9pbnRlcnVwJywgdGhpcy5fb25Ecm9wKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ3BvaW50ZXJjYW5jZWwnLCB0aGlzLl9vbkRyb3ApO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAndG91Y2hjYW5jZWwnLCB0aGlzLl9vbkRyb3ApO1xuICAgIG9mZihkb2N1bWVudCwgJ3NlbGVjdHN0YXJ0JywgdGhpcyk7XG4gIH0sXG4gIF9vbkRyb3A6IGZ1bmN0aW9uIF9vbkRyb3AoIC8qKkV2ZW50Ki9ldnQpIHtcbiAgICB2YXIgZWwgPSB0aGlzLmVsLFxuICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgIC8vIEdldCB0aGUgaW5kZXggb2YgdGhlIGRyYWdnZWQgZWxlbWVudCB3aXRoaW4gaXRzIHBhcmVudFxuICAgIG5ld0luZGV4ID0gaW5kZXgoZHJhZ0VsKTtcbiAgICBuZXdEcmFnZ2FibGVJbmRleCA9IGluZGV4KGRyYWdFbCwgb3B0aW9ucy5kcmFnZ2FibGUpO1xuICAgIHBsdWdpbkV2ZW50KCdkcm9wJywgdGhpcywge1xuICAgICAgZXZ0OiBldnRcbiAgICB9KTtcbiAgICBwYXJlbnRFbCA9IGRyYWdFbCAmJiBkcmFnRWwucGFyZW50Tm9kZTtcblxuICAgIC8vIEdldCBhZ2FpbiBhZnRlciBwbHVnaW4gZXZlbnRcbiAgICBuZXdJbmRleCA9IGluZGV4KGRyYWdFbCk7XG4gICAgbmV3RHJhZ2dhYmxlSW5kZXggPSBpbmRleChkcmFnRWwsIG9wdGlvbnMuZHJhZ2dhYmxlKTtcbiAgICBpZiAoU29ydGFibGUuZXZlbnRDYW5jZWxlZCkge1xuICAgICAgdGhpcy5fbnVsbGluZygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhd2FpdGluZ0RyYWdTdGFydGVkID0gZmFsc2U7XG4gICAgaXNDaXJjdW1zdGFudGlhbEludmVydCA9IGZhbHNlO1xuICAgIHBhc3RGaXJzdEludmVydFRocmVzaCA9IGZhbHNlO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fbG9vcElkKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fZHJhZ1N0YXJ0VGltZXIpO1xuICAgIF9jYW5jZWxOZXh0VGljayh0aGlzLmNsb25lSWQpO1xuICAgIF9jYW5jZWxOZXh0VGljayh0aGlzLl9kcmFnU3RhcnRJZCk7XG5cbiAgICAvLyBVbmJpbmQgZXZlbnRzXG4gICAgaWYgKHRoaXMubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgICBvZmYoZG9jdW1lbnQsICdkcm9wJywgdGhpcyk7XG4gICAgICBvZmYoZWwsICdkcmFnc3RhcnQnLCB0aGlzLl9vbkRyYWdTdGFydCk7XG4gICAgfVxuICAgIHRoaXMuX29mZk1vdmVFdmVudHMoKTtcbiAgICB0aGlzLl9vZmZVcEV2ZW50cygpO1xuICAgIGlmIChTYWZhcmkpIHtcbiAgICAgIGNzcyhkb2N1bWVudC5ib2R5LCAndXNlci1zZWxlY3QnLCAnJyk7XG4gICAgfVxuICAgIGNzcyhkcmFnRWwsICd0cmFuc2Zvcm0nLCAnJyk7XG4gICAgaWYgKGV2dCkge1xuICAgICAgaWYgKG1vdmVkKSB7XG4gICAgICAgIGV2dC5jYW5jZWxhYmxlICYmIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAhb3B0aW9ucy5kcm9wQnViYmxlICYmIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICAgIGdob3N0RWwgJiYgZ2hvc3RFbC5wYXJlbnROb2RlICYmIGdob3N0RWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChnaG9zdEVsKTtcbiAgICAgIGlmIChyb290RWwgPT09IHBhcmVudEVsIHx8IHB1dFNvcnRhYmxlICYmIHB1dFNvcnRhYmxlLmxhc3RQdXRNb2RlICE9PSAnY2xvbmUnKSB7XG4gICAgICAgIC8vIFJlbW92ZSBjbG9uZShzKVxuICAgICAgICBjbG9uZUVsICYmIGNsb25lRWwucGFyZW50Tm9kZSAmJiBjbG9uZUVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2xvbmVFbCk7XG4gICAgICB9XG4gICAgICBpZiAoZHJhZ0VsKSB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgICAgICAgIG9mZihkcmFnRWwsICdkcmFnZW5kJywgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgX2Rpc2FibGVEcmFnZ2FibGUoZHJhZ0VsKTtcbiAgICAgICAgZHJhZ0VsLnN0eWxlWyd3aWxsLWNoYW5nZSddID0gJyc7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGNsYXNzZXNcbiAgICAgICAgLy8gZ2hvc3RDbGFzcyBpcyBhZGRlZCBpbiBkcmFnU3RhcnRlZFxuICAgICAgICBpZiAobW92ZWQgJiYgIWF3YWl0aW5nRHJhZ1N0YXJ0ZWQpIHtcbiAgICAgICAgICB0b2dnbGVDbGFzcyhkcmFnRWwsIHB1dFNvcnRhYmxlID8gcHV0U29ydGFibGUub3B0aW9ucy5naG9zdENsYXNzIDogdGhpcy5vcHRpb25zLmdob3N0Q2xhc3MsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICB0b2dnbGVDbGFzcyhkcmFnRWwsIHRoaXMub3B0aW9ucy5jaG9zZW5DbGFzcywgZmFsc2UpO1xuXG4gICAgICAgIC8vIERyYWcgc3RvcCBldmVudFxuICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgc29ydGFibGU6IHRoaXMsXG4gICAgICAgICAgbmFtZTogJ3VuY2hvb3NlJyxcbiAgICAgICAgICB0b0VsOiBwYXJlbnRFbCxcbiAgICAgICAgICBuZXdJbmRleDogbnVsbCxcbiAgICAgICAgICBuZXdEcmFnZ2FibGVJbmRleDogbnVsbCxcbiAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyb290RWwgIT09IHBhcmVudEVsKSB7XG4gICAgICAgICAgaWYgKG5ld0luZGV4ID49IDApIHtcbiAgICAgICAgICAgIC8vIEFkZCBldmVudFxuICAgICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgICByb290RWw6IHBhcmVudEVsLFxuICAgICAgICAgICAgICBuYW1lOiAnYWRkJyxcbiAgICAgICAgICAgICAgdG9FbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgIGZyb21FbDogcm9vdEVsLFxuICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmUgZXZlbnRcbiAgICAgICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgICAgc29ydGFibGU6IHRoaXMsXG4gICAgICAgICAgICAgIG5hbWU6ICdyZW1vdmUnLFxuICAgICAgICAgICAgICB0b0VsOiBwYXJlbnRFbCxcbiAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gZHJhZyBmcm9tIG9uZSBsaXN0IGFuZCBkcm9wIGludG8gYW5vdGhlclxuICAgICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgICByb290RWw6IHBhcmVudEVsLFxuICAgICAgICAgICAgICBuYW1lOiAnc29ydCcsXG4gICAgICAgICAgICAgIHRvRWw6IHBhcmVudEVsLFxuICAgICAgICAgICAgICBmcm9tRWw6IHJvb3RFbCxcbiAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgICAgc29ydGFibGU6IHRoaXMsXG4gICAgICAgICAgICAgIG5hbWU6ICdzb3J0JyxcbiAgICAgICAgICAgICAgdG9FbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHB1dFNvcnRhYmxlICYmIHB1dFNvcnRhYmxlLnNhdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAobmV3SW5kZXggIT09IG9sZEluZGV4KSB7XG4gICAgICAgICAgICBpZiAobmV3SW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAvLyBkcmFnICYgZHJvcCB3aXRoaW4gdGhlIHNhbWUgbGlzdFxuICAgICAgICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICAgICAgc29ydGFibGU6IHRoaXMsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3VwZGF0ZScsXG4gICAgICAgICAgICAgICAgdG9FbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICAgICAgc29ydGFibGU6IHRoaXMsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3NvcnQnLFxuICAgICAgICAgICAgICAgIHRvRWw6IHBhcmVudEVsLFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFNvcnRhYmxlLmFjdGl2ZSkge1xuICAgICAgICAgIC8qIGpzaGludCBlcW51bGw6dHJ1ZSAqL1xuICAgICAgICAgIGlmIChuZXdJbmRleCA9PSBudWxsIHx8IG5ld0luZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgbmV3SW5kZXggPSBvbGRJbmRleDtcbiAgICAgICAgICAgIG5ld0RyYWdnYWJsZUluZGV4ID0gb2xkRHJhZ2dhYmxlSW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0aGlzLFxuICAgICAgICAgICAgbmFtZTogJ2VuZCcsXG4gICAgICAgICAgICB0b0VsOiBwYXJlbnRFbCxcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gU2F2ZSBzb3J0aW5nXG4gICAgICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fbnVsbGluZygpO1xuICB9LFxuICBfbnVsbGluZzogZnVuY3Rpb24gX251bGxpbmcoKSB7XG4gICAgcGx1Z2luRXZlbnQoJ251bGxpbmcnLCB0aGlzKTtcbiAgICByb290RWwgPSBkcmFnRWwgPSBwYXJlbnRFbCA9IGdob3N0RWwgPSBuZXh0RWwgPSBjbG9uZUVsID0gbGFzdERvd25FbCA9IGNsb25lSGlkZGVuID0gdGFwRXZ0ID0gdG91Y2hFdnQgPSBtb3ZlZCA9IG5ld0luZGV4ID0gbmV3RHJhZ2dhYmxlSW5kZXggPSBvbGRJbmRleCA9IG9sZERyYWdnYWJsZUluZGV4ID0gbGFzdFRhcmdldCA9IGxhc3REaXJlY3Rpb24gPSBwdXRTb3J0YWJsZSA9IGFjdGl2ZUdyb3VwID0gU29ydGFibGUuZHJhZ2dlZCA9IFNvcnRhYmxlLmdob3N0ID0gU29ydGFibGUuY2xvbmUgPSBTb3J0YWJsZS5hY3RpdmUgPSBudWxsO1xuICAgIHZhciBlbCA9IHRoaXMuZWw7XG4gICAgc2F2ZWRJbnB1dENoZWNrZWQuZm9yRWFjaChmdW5jdGlvbiAoY2hlY2tFbCkge1xuICAgICAgaWYgKGVsLmNvbnRhaW5zKGNoZWNrRWwpKSB7XG4gICAgICAgIGNoZWNrRWwuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2F2ZWRJbnB1dENoZWNrZWQubGVuZ3RoID0gbGFzdER4ID0gbGFzdER5ID0gMDtcbiAgfSxcbiAgaGFuZGxlRXZlbnQ6IGZ1bmN0aW9uIGhhbmRsZUV2ZW50KCAvKipFdmVudCovZXZ0KSB7XG4gICAgc3dpdGNoIChldnQudHlwZSkge1xuICAgICAgY2FzZSAnZHJvcCc6XG4gICAgICBjYXNlICdkcmFnZW5kJzpcbiAgICAgICAgdGhpcy5fb25Ecm9wKGV2dCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZHJhZ2VudGVyJzpcbiAgICAgIGNhc2UgJ2RyYWdvdmVyJzpcbiAgICAgICAgaWYgKGRyYWdFbCkge1xuICAgICAgICAgIHRoaXMuX29uRHJhZ092ZXIoZXZ0KTtcbiAgICAgICAgICBfZ2xvYmFsRHJhZ092ZXIoZXZ0KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NlbGVjdHN0YXJ0JzpcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSxcbiAgLyoqXHJcbiAgICogU2VyaWFsaXplcyB0aGUgaXRlbSBpbnRvIGFuIGFycmF5IG9mIHN0cmluZy5cclxuICAgKiBAcmV0dXJucyB7U3RyaW5nW119XHJcbiAgICovXG4gIHRvQXJyYXk6IGZ1bmN0aW9uIHRvQXJyYXkoKSB7XG4gICAgdmFyIG9yZGVyID0gW10sXG4gICAgICBlbCxcbiAgICAgIGNoaWxkcmVuID0gdGhpcy5lbC5jaGlsZHJlbixcbiAgICAgIGkgPSAwLFxuICAgICAgbiA9IGNoaWxkcmVuLmxlbmd0aCxcbiAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgZm9yICg7IGkgPCBuOyBpKyspIHtcbiAgICAgIGVsID0gY2hpbGRyZW5baV07XG4gICAgICBpZiAoY2xvc2VzdChlbCwgb3B0aW9ucy5kcmFnZ2FibGUsIHRoaXMuZWwsIGZhbHNlKSkge1xuICAgICAgICBvcmRlci5wdXNoKGVsLmdldEF0dHJpYnV0ZShvcHRpb25zLmRhdGFJZEF0dHIpIHx8IF9nZW5lcmF0ZUlkKGVsKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvcmRlcjtcbiAgfSxcbiAgLyoqXHJcbiAgICogU29ydHMgdGhlIGVsZW1lbnRzIGFjY29yZGluZyB0byB0aGUgYXJyYXkuXHJcbiAgICogQHBhcmFtICB7U3RyaW5nW119ICBvcmRlciAgb3JkZXIgb2YgdGhlIGl0ZW1zXHJcbiAgICovXG4gIHNvcnQ6IGZ1bmN0aW9uIHNvcnQob3JkZXIsIHVzZUFuaW1hdGlvbikge1xuICAgIHZhciBpdGVtcyA9IHt9LFxuICAgICAgcm9vdEVsID0gdGhpcy5lbDtcbiAgICB0aGlzLnRvQXJyYXkoKS5mb3JFYWNoKGZ1bmN0aW9uIChpZCwgaSkge1xuICAgICAgdmFyIGVsID0gcm9vdEVsLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGNsb3Nlc3QoZWwsIHRoaXMub3B0aW9ucy5kcmFnZ2FibGUsIHJvb3RFbCwgZmFsc2UpKSB7XG4gICAgICAgIGl0ZW1zW2lkXSA9IGVsO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICAgIHVzZUFuaW1hdGlvbiAmJiB0aGlzLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgIG9yZGVyLmZvckVhY2goZnVuY3Rpb24gKGlkKSB7XG4gICAgICBpZiAoaXRlbXNbaWRdKSB7XG4gICAgICAgIHJvb3RFbC5yZW1vdmVDaGlsZChpdGVtc1tpZF0pO1xuICAgICAgICByb290RWwuYXBwZW5kQ2hpbGQoaXRlbXNbaWRdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB1c2VBbmltYXRpb24gJiYgdGhpcy5hbmltYXRlQWxsKCk7XG4gIH0sXG4gIC8qKlxyXG4gICAqIFNhdmUgdGhlIGN1cnJlbnQgc29ydGluZ1xyXG4gICAqL1xuICBzYXZlOiBmdW5jdGlvbiBzYXZlKCkge1xuICAgIHZhciBzdG9yZSA9IHRoaXMub3B0aW9ucy5zdG9yZTtcbiAgICBzdG9yZSAmJiBzdG9yZS5zZXQgJiYgc3RvcmUuc2V0KHRoaXMpO1xuICB9LFxuICAvKipcclxuICAgKiBGb3IgZWFjaCBlbGVtZW50IGluIHRoZSBzZXQsIGdldCB0aGUgZmlyc3QgZWxlbWVudCB0aGF0IG1hdGNoZXMgdGhlIHNlbGVjdG9yIGJ5IHRlc3RpbmcgdGhlIGVsZW1lbnQgaXRzZWxmIGFuZCB0cmF2ZXJzaW5nIHVwIHRocm91Z2ggaXRzIGFuY2VzdG9ycyBpbiB0aGUgRE9NIHRyZWUuXHJcbiAgICogQHBhcmFtICAge0hUTUxFbGVtZW50fSAgZWxcclxuICAgKiBAcGFyYW0gICB7U3RyaW5nfSAgICAgICBbc2VsZWN0b3JdICBkZWZhdWx0OiBgb3B0aW9ucy5kcmFnZ2FibGVgXHJcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fG51bGx9XHJcbiAgICovXG4gIGNsb3Nlc3Q6IGZ1bmN0aW9uIGNsb3Nlc3QkMShlbCwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gY2xvc2VzdChlbCwgc2VsZWN0b3IgfHwgdGhpcy5vcHRpb25zLmRyYWdnYWJsZSwgdGhpcy5lbCwgZmFsc2UpO1xuICB9LFxuICAvKipcclxuICAgKiBTZXQvZ2V0IG9wdGlvblxyXG4gICAqIEBwYXJhbSAgIHtzdHJpbmd9IG5hbWVcclxuICAgKiBAcGFyYW0gICB7Kn0gICAgICBbdmFsdWVdXHJcbiAgICogQHJldHVybnMgeyp9XHJcbiAgICovXG4gIG9wdGlvbjogZnVuY3Rpb24gb3B0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgaWYgKHZhbHVlID09PSB2b2lkIDApIHtcbiAgICAgIHJldHVybiBvcHRpb25zW25hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbW9kaWZpZWRWYWx1ZSA9IFBsdWdpbk1hbmFnZXIubW9kaWZ5T3B0aW9uKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICAgIGlmICh0eXBlb2YgbW9kaWZpZWRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9uc1tuYW1lXSA9IG1vZGlmaWVkVmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb25zW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAobmFtZSA9PT0gJ2dyb3VwJykge1xuICAgICAgICBfcHJlcGFyZUdyb3VwKG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgLyoqXHJcbiAgICogRGVzdHJveVxyXG4gICAqL1xuICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHBsdWdpbkV2ZW50KCdkZXN0cm95JywgdGhpcyk7XG4gICAgdmFyIGVsID0gdGhpcy5lbDtcbiAgICBlbFtleHBhbmRvXSA9IG51bGw7XG4gICAgb2ZmKGVsLCAnbW91c2Vkb3duJywgdGhpcy5fb25UYXBTdGFydCk7XG4gICAgb2ZmKGVsLCAndG91Y2hzdGFydCcsIHRoaXMuX29uVGFwU3RhcnQpO1xuICAgIG9mZihlbCwgJ3BvaW50ZXJkb3duJywgdGhpcy5fb25UYXBTdGFydCk7XG4gICAgaWYgKHRoaXMubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgICBvZmYoZWwsICdkcmFnb3ZlcicsIHRoaXMpO1xuICAgICAgb2ZmKGVsLCAnZHJhZ2VudGVyJywgdGhpcyk7XG4gICAgfVxuICAgIC8vIFJlbW92ZSBkcmFnZ2FibGUgYXR0cmlidXRlc1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWwucXVlcnlTZWxlY3RvckFsbCgnW2RyYWdnYWJsZV0nKSwgZnVuY3Rpb24gKGVsKSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpO1xuICAgIH0pO1xuICAgIHRoaXMuX29uRHJvcCgpO1xuICAgIHRoaXMuX2Rpc2FibGVEZWxheWVkRHJhZ0V2ZW50cygpO1xuICAgIHNvcnRhYmxlcy5zcGxpY2Uoc29ydGFibGVzLmluZGV4T2YodGhpcy5lbCksIDEpO1xuICAgIHRoaXMuZWwgPSBlbCA9IG51bGw7XG4gIH0sXG4gIF9oaWRlQ2xvbmU6IGZ1bmN0aW9uIF9oaWRlQ2xvbmUoKSB7XG4gICAgaWYgKCFjbG9uZUhpZGRlbikge1xuICAgICAgcGx1Z2luRXZlbnQoJ2hpZGVDbG9uZScsIHRoaXMpO1xuICAgICAgaWYgKFNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHJldHVybjtcbiAgICAgIGNzcyhjbG9uZUVsLCAnZGlzcGxheScsICdub25lJyk7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92ZUNsb25lT25IaWRlICYmIGNsb25lRWwucGFyZW50Tm9kZSkge1xuICAgICAgICBjbG9uZUVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2xvbmVFbCk7XG4gICAgICB9XG4gICAgICBjbG9uZUhpZGRlbiA9IHRydWU7XG4gICAgfVxuICB9LFxuICBfc2hvd0Nsb25lOiBmdW5jdGlvbiBfc2hvd0Nsb25lKHB1dFNvcnRhYmxlKSB7XG4gICAgaWYgKHB1dFNvcnRhYmxlLmxhc3RQdXRNb2RlICE9PSAnY2xvbmUnKSB7XG4gICAgICB0aGlzLl9oaWRlQ2xvbmUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNsb25lSGlkZGVuKSB7XG4gICAgICBwbHVnaW5FdmVudCgnc2hvd0Nsb25lJywgdGhpcyk7XG4gICAgICBpZiAoU29ydGFibGUuZXZlbnRDYW5jZWxlZCkgcmV0dXJuO1xuXG4gICAgICAvLyBzaG93IGNsb25lIGF0IGRyYWdFbCBvciBvcmlnaW5hbCBwb3NpdGlvblxuICAgICAgaWYgKGRyYWdFbC5wYXJlbnROb2RlID09IHJvb3RFbCAmJiAhdGhpcy5vcHRpb25zLmdyb3VwLnJldmVydENsb25lKSB7XG4gICAgICAgIHJvb3RFbC5pbnNlcnRCZWZvcmUoY2xvbmVFbCwgZHJhZ0VsKTtcbiAgICAgIH0gZWxzZSBpZiAobmV4dEVsKSB7XG4gICAgICAgIHJvb3RFbC5pbnNlcnRCZWZvcmUoY2xvbmVFbCwgbmV4dEVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3RFbC5hcHBlbmRDaGlsZChjbG9uZUVsKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZ3JvdXAucmV2ZXJ0Q2xvbmUpIHtcbiAgICAgICAgdGhpcy5hbmltYXRlKGRyYWdFbCwgY2xvbmVFbCk7XG4gICAgICB9XG4gICAgICBjc3MoY2xvbmVFbCwgJ2Rpc3BsYXknLCAnJyk7XG4gICAgICBjbG9uZUhpZGRlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxufTtcbmZ1bmN0aW9uIF9nbG9iYWxEcmFnT3ZlciggLyoqRXZlbnQqL2V2dCkge1xuICBpZiAoZXZ0LmRhdGFUcmFuc2Zlcikge1xuICAgIGV2dC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJztcbiAgfVxuICBldnQuY2FuY2VsYWJsZSAmJiBldnQucHJldmVudERlZmF1bHQoKTtcbn1cbmZ1bmN0aW9uIF9vbk1vdmUoZnJvbUVsLCB0b0VsLCBkcmFnRWwsIGRyYWdSZWN0LCB0YXJnZXRFbCwgdGFyZ2V0UmVjdCwgb3JpZ2luYWxFdmVudCwgd2lsbEluc2VydEFmdGVyKSB7XG4gIHZhciBldnQsXG4gICAgc29ydGFibGUgPSBmcm9tRWxbZXhwYW5kb10sXG4gICAgb25Nb3ZlRm4gPSBzb3J0YWJsZS5vcHRpb25zLm9uTW92ZSxcbiAgICByZXRWYWw7XG4gIC8vIFN1cHBvcnQgZm9yIG5ldyBDdXN0b21FdmVudCBmZWF0dXJlXG4gIGlmICh3aW5kb3cuQ3VzdG9tRXZlbnQgJiYgIUlFMTFPckxlc3MgJiYgIUVkZ2UpIHtcbiAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ21vdmUnLCB7XG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgIGV2dC5pbml0RXZlbnQoJ21vdmUnLCB0cnVlLCB0cnVlKTtcbiAgfVxuICBldnQudG8gPSB0b0VsO1xuICBldnQuZnJvbSA9IGZyb21FbDtcbiAgZXZ0LmRyYWdnZWQgPSBkcmFnRWw7XG4gIGV2dC5kcmFnZ2VkUmVjdCA9IGRyYWdSZWN0O1xuICBldnQucmVsYXRlZCA9IHRhcmdldEVsIHx8IHRvRWw7XG4gIGV2dC5yZWxhdGVkUmVjdCA9IHRhcmdldFJlY3QgfHwgZ2V0UmVjdCh0b0VsKTtcbiAgZXZ0LndpbGxJbnNlcnRBZnRlciA9IHdpbGxJbnNlcnRBZnRlcjtcbiAgZXZ0Lm9yaWdpbmFsRXZlbnQgPSBvcmlnaW5hbEV2ZW50O1xuICBmcm9tRWwuZGlzcGF0Y2hFdmVudChldnQpO1xuICBpZiAob25Nb3ZlRm4pIHtcbiAgICByZXRWYWwgPSBvbk1vdmVGbi5jYWxsKHNvcnRhYmxlLCBldnQsIG9yaWdpbmFsRXZlbnQpO1xuICB9XG4gIHJldHVybiByZXRWYWw7XG59XG5mdW5jdGlvbiBfZGlzYWJsZURyYWdnYWJsZShlbCkge1xuICBlbC5kcmFnZ2FibGUgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIF91bnNpbGVudCgpIHtcbiAgX3NpbGVudCA9IGZhbHNlO1xufVxuZnVuY3Rpb24gX2dob3N0SXNGaXJzdChldnQsIHZlcnRpY2FsLCBzb3J0YWJsZSkge1xuICB2YXIgZmlyc3RFbFJlY3QgPSBnZXRSZWN0KGdldENoaWxkKHNvcnRhYmxlLmVsLCAwLCBzb3J0YWJsZS5vcHRpb25zLCB0cnVlKSk7XG4gIHZhciBjaGlsZENvbnRhaW5pbmdSZWN0ID0gZ2V0Q2hpbGRDb250YWluaW5nUmVjdEZyb21FbGVtZW50KHNvcnRhYmxlLmVsLCBzb3J0YWJsZS5vcHRpb25zLCBnaG9zdEVsKTtcbiAgdmFyIHNwYWNlciA9IDEwO1xuICByZXR1cm4gdmVydGljYWwgPyBldnQuY2xpZW50WCA8IGNoaWxkQ29udGFpbmluZ1JlY3QubGVmdCAtIHNwYWNlciB8fCBldnQuY2xpZW50WSA8IGZpcnN0RWxSZWN0LnRvcCAmJiBldnQuY2xpZW50WCA8IGZpcnN0RWxSZWN0LnJpZ2h0IDogZXZ0LmNsaWVudFkgPCBjaGlsZENvbnRhaW5pbmdSZWN0LnRvcCAtIHNwYWNlciB8fCBldnQuY2xpZW50WSA8IGZpcnN0RWxSZWN0LmJvdHRvbSAmJiBldnQuY2xpZW50WCA8IGZpcnN0RWxSZWN0LmxlZnQ7XG59XG5mdW5jdGlvbiBfZ2hvc3RJc0xhc3QoZXZ0LCB2ZXJ0aWNhbCwgc29ydGFibGUpIHtcbiAgdmFyIGxhc3RFbFJlY3QgPSBnZXRSZWN0KGxhc3RDaGlsZChzb3J0YWJsZS5lbCwgc29ydGFibGUub3B0aW9ucy5kcmFnZ2FibGUpKTtcbiAgdmFyIGNoaWxkQ29udGFpbmluZ1JlY3QgPSBnZXRDaGlsZENvbnRhaW5pbmdSZWN0RnJvbUVsZW1lbnQoc29ydGFibGUuZWwsIHNvcnRhYmxlLm9wdGlvbnMsIGdob3N0RWwpO1xuICB2YXIgc3BhY2VyID0gMTA7XG4gIHJldHVybiB2ZXJ0aWNhbCA/IGV2dC5jbGllbnRYID4gY2hpbGRDb250YWluaW5nUmVjdC5yaWdodCArIHNwYWNlciB8fCBldnQuY2xpZW50WSA+IGxhc3RFbFJlY3QuYm90dG9tICYmIGV2dC5jbGllbnRYID4gbGFzdEVsUmVjdC5sZWZ0IDogZXZ0LmNsaWVudFkgPiBjaGlsZENvbnRhaW5pbmdSZWN0LmJvdHRvbSArIHNwYWNlciB8fCBldnQuY2xpZW50WCA+IGxhc3RFbFJlY3QucmlnaHQgJiYgZXZ0LmNsaWVudFkgPiBsYXN0RWxSZWN0LnRvcDtcbn1cbmZ1bmN0aW9uIF9nZXRTd2FwRGlyZWN0aW9uKGV2dCwgdGFyZ2V0LCB0YXJnZXRSZWN0LCB2ZXJ0aWNhbCwgc3dhcFRocmVzaG9sZCwgaW52ZXJ0ZWRTd2FwVGhyZXNob2xkLCBpbnZlcnRTd2FwLCBpc0xhc3RUYXJnZXQpIHtcbiAgdmFyIG1vdXNlT25BeGlzID0gdmVydGljYWwgPyBldnQuY2xpZW50WSA6IGV2dC5jbGllbnRYLFxuICAgIHRhcmdldExlbmd0aCA9IHZlcnRpY2FsID8gdGFyZ2V0UmVjdC5oZWlnaHQgOiB0YXJnZXRSZWN0LndpZHRoLFxuICAgIHRhcmdldFMxID0gdmVydGljYWwgPyB0YXJnZXRSZWN0LnRvcCA6IHRhcmdldFJlY3QubGVmdCxcbiAgICB0YXJnZXRTMiA9IHZlcnRpY2FsID8gdGFyZ2V0UmVjdC5ib3R0b20gOiB0YXJnZXRSZWN0LnJpZ2h0LFxuICAgIGludmVydCA9IGZhbHNlO1xuICBpZiAoIWludmVydFN3YXApIHtcbiAgICAvLyBOZXZlciBpbnZlcnQgb3IgY3JlYXRlIGRyYWdFbCBzaGFkb3cgd2hlbiB0YXJnZXQgbW92ZW1lbmV0IGNhdXNlcyBtb3VzZSB0byBtb3ZlIHBhc3QgdGhlIGVuZCBvZiByZWd1bGFyIHN3YXBUaHJlc2hvbGRcbiAgICBpZiAoaXNMYXN0VGFyZ2V0ICYmIHRhcmdldE1vdmVEaXN0YW5jZSA8IHRhcmdldExlbmd0aCAqIHN3YXBUaHJlc2hvbGQpIHtcbiAgICAgIC8vIG11bHRpcGxpZWQgb25seSBieSBzd2FwVGhyZXNob2xkIGJlY2F1c2UgbW91c2Ugd2lsbCBhbHJlYWR5IGJlIGluc2lkZSB0YXJnZXQgYnkgKDEgLSB0aHJlc2hvbGQpICogdGFyZ2V0TGVuZ3RoIC8gMlxuICAgICAgLy8gY2hlY2sgaWYgcGFzdCBmaXJzdCBpbnZlcnQgdGhyZXNob2xkIG9uIHNpZGUgb3Bwb3NpdGUgb2YgbGFzdERpcmVjdGlvblxuICAgICAgaWYgKCFwYXN0Rmlyc3RJbnZlcnRUaHJlc2ggJiYgKGxhc3REaXJlY3Rpb24gPT09IDEgPyBtb3VzZU9uQXhpcyA+IHRhcmdldFMxICsgdGFyZ2V0TGVuZ3RoICogaW52ZXJ0ZWRTd2FwVGhyZXNob2xkIC8gMiA6IG1vdXNlT25BeGlzIDwgdGFyZ2V0UzIgLSB0YXJnZXRMZW5ndGggKiBpbnZlcnRlZFN3YXBUaHJlc2hvbGQgLyAyKSkge1xuICAgICAgICAvLyBwYXN0IGZpcnN0IGludmVydCB0aHJlc2hvbGQsIGRvIG5vdCByZXN0cmljdCBpbnZlcnRlZCB0aHJlc2hvbGQgdG8gZHJhZ0VsIHNoYWRvd1xuICAgICAgICBwYXN0Rmlyc3RJbnZlcnRUaHJlc2ggPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKCFwYXN0Rmlyc3RJbnZlcnRUaHJlc2gpIHtcbiAgICAgICAgLy8gZHJhZ0VsIHNoYWRvdyAodGFyZ2V0IG1vdmUgZGlzdGFuY2Ugc2hhZG93KVxuICAgICAgICBpZiAobGFzdERpcmVjdGlvbiA9PT0gMSA/IG1vdXNlT25BeGlzIDwgdGFyZ2V0UzEgKyB0YXJnZXRNb3ZlRGlzdGFuY2UgLy8gb3ZlciBkcmFnRWwgc2hhZG93XG4gICAgICAgIDogbW91c2VPbkF4aXMgPiB0YXJnZXRTMiAtIHRhcmdldE1vdmVEaXN0YW5jZSkge1xuICAgICAgICAgIHJldHVybiAtbGFzdERpcmVjdGlvbjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW52ZXJ0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVndWxhclxuICAgICAgaWYgKG1vdXNlT25BeGlzID4gdGFyZ2V0UzEgKyB0YXJnZXRMZW5ndGggKiAoMSAtIHN3YXBUaHJlc2hvbGQpIC8gMiAmJiBtb3VzZU9uQXhpcyA8IHRhcmdldFMyIC0gdGFyZ2V0TGVuZ3RoICogKDEgLSBzd2FwVGhyZXNob2xkKSAvIDIpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRJbnNlcnREaXJlY3Rpb24odGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaW52ZXJ0ID0gaW52ZXJ0IHx8IGludmVydFN3YXA7XG4gIGlmIChpbnZlcnQpIHtcbiAgICAvLyBJbnZlcnQgb2YgcmVndWxhclxuICAgIGlmIChtb3VzZU9uQXhpcyA8IHRhcmdldFMxICsgdGFyZ2V0TGVuZ3RoICogaW52ZXJ0ZWRTd2FwVGhyZXNob2xkIC8gMiB8fCBtb3VzZU9uQXhpcyA+IHRhcmdldFMyIC0gdGFyZ2V0TGVuZ3RoICogaW52ZXJ0ZWRTd2FwVGhyZXNob2xkIC8gMikge1xuICAgICAgcmV0dXJuIG1vdXNlT25BeGlzID4gdGFyZ2V0UzEgKyB0YXJnZXRMZW5ndGggLyAyID8gMSA6IC0xO1xuICAgIH1cbiAgfVxuICByZXR1cm4gMDtcbn1cblxuLyoqXHJcbiAqIEdldHMgdGhlIGRpcmVjdGlvbiBkcmFnRWwgbXVzdCBiZSBzd2FwcGVkIHJlbGF0aXZlIHRvIHRhcmdldCBpbiBvcmRlciB0byBtYWtlIGl0XHJcbiAqIHNlZW0gdGhhdCBkcmFnRWwgaGFzIGJlZW4gXCJpbnNlcnRlZFwiIGludG8gdGhhdCBlbGVtZW50J3MgcG9zaXRpb25cclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IHRhcmdldCAgICAgICBUaGUgdGFyZ2V0IHdob3NlIHBvc2l0aW9uIGRyYWdFbCBpcyBiZWluZyBpbnNlcnRlZCBhdFxyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICAgICAgICAgIERpcmVjdGlvbiBkcmFnRWwgbXVzdCBiZSBzd2FwcGVkXHJcbiAqL1xuZnVuY3Rpb24gX2dldEluc2VydERpcmVjdGlvbih0YXJnZXQpIHtcbiAgaWYgKGluZGV4KGRyYWdFbCkgPCBpbmRleCh0YXJnZXQpKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG59XG5cbi8qKlxyXG4gKiBHZW5lcmF0ZSBpZFxyXG4gKiBAcGFyYW0gICB7SFRNTEVsZW1lbnR9IGVsXHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XHJcbiAqIEBwcml2YXRlXHJcbiAqL1xuZnVuY3Rpb24gX2dlbmVyYXRlSWQoZWwpIHtcbiAgdmFyIHN0ciA9IGVsLnRhZ05hbWUgKyBlbC5jbGFzc05hbWUgKyBlbC5zcmMgKyBlbC5ocmVmICsgZWwudGV4dENvbnRlbnQsXG4gICAgaSA9IHN0ci5sZW5ndGgsXG4gICAgc3VtID0gMDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHN1bSArPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgfVxuICByZXR1cm4gc3VtLnRvU3RyaW5nKDM2KTtcbn1cbmZ1bmN0aW9uIF9zYXZlSW5wdXRDaGVja2VkU3RhdGUocm9vdCkge1xuICBzYXZlZElucHV0Q2hlY2tlZC5sZW5ndGggPSAwO1xuICB2YXIgaW5wdXRzID0gcm9vdC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKTtcbiAgdmFyIGlkeCA9IGlucHV0cy5sZW5ndGg7XG4gIHdoaWxlIChpZHgtLSkge1xuICAgIHZhciBlbCA9IGlucHV0c1tpZHhdO1xuICAgIGVsLmNoZWNrZWQgJiYgc2F2ZWRJbnB1dENoZWNrZWQucHVzaChlbCk7XG4gIH1cbn1cbmZ1bmN0aW9uIF9uZXh0VGljayhmbikge1xuICByZXR1cm4gc2V0VGltZW91dChmbiwgMCk7XG59XG5mdW5jdGlvbiBfY2FuY2VsTmV4dFRpY2soaWQpIHtcbiAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59XG5cbi8vIEZpeGVkICM5NzM6XG5pZiAoZG9jdW1lbnRFeGlzdHMpIHtcbiAgb24oZG9jdW1lbnQsICd0b3VjaG1vdmUnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKChTb3J0YWJsZS5hY3RpdmUgfHwgYXdhaXRpbmdEcmFnU3RhcnRlZCkgJiYgZXZ0LmNhbmNlbGFibGUpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIEV4cG9ydCB1dGlsc1xuU29ydGFibGUudXRpbHMgPSB7XG4gIG9uOiBvbixcbiAgb2ZmOiBvZmYsXG4gIGNzczogY3NzLFxuICBmaW5kOiBmaW5kLFxuICBpczogZnVuY3Rpb24gaXMoZWwsIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuICEhY2xvc2VzdChlbCwgc2VsZWN0b3IsIGVsLCBmYWxzZSk7XG4gIH0sXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0aHJvdHRsZTogdGhyb3R0bGUsXG4gIGNsb3Nlc3Q6IGNsb3Nlc3QsXG4gIHRvZ2dsZUNsYXNzOiB0b2dnbGVDbGFzcyxcbiAgY2xvbmU6IGNsb25lLFxuICBpbmRleDogaW5kZXgsXG4gIG5leHRUaWNrOiBfbmV4dFRpY2ssXG4gIGNhbmNlbE5leHRUaWNrOiBfY2FuY2VsTmV4dFRpY2ssXG4gIGRldGVjdERpcmVjdGlvbjogX2RldGVjdERpcmVjdGlvbixcbiAgZ2V0Q2hpbGQ6IGdldENoaWxkLFxuICBleHBhbmRvOiBleHBhbmRvXG59O1xuXG4vKipcclxuICogR2V0IHRoZSBTb3J0YWJsZSBpbnN0YW5jZSBvZiBhbiBlbGVtZW50XHJcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50XHJcbiAqIEByZXR1cm4ge1NvcnRhYmxlfHVuZGVmaW5lZH0gICAgICAgICBUaGUgaW5zdGFuY2Ugb2YgU29ydGFibGVcclxuICovXG5Tb3J0YWJsZS5nZXQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudFtleHBhbmRvXTtcbn07XG5cbi8qKlxyXG4gKiBNb3VudCBhIHBsdWdpbiB0byBTb3J0YWJsZVxyXG4gKiBAcGFyYW0gIHsuLi5Tb3J0YWJsZVBsdWdpbnxTb3J0YWJsZVBsdWdpbltdfSBwbHVnaW5zICAgICAgIFBsdWdpbnMgYmVpbmcgbW91bnRlZFxyXG4gKi9cblNvcnRhYmxlLm1vdW50ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGx1Z2lucyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBwbHVnaW5zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG4gIGlmIChwbHVnaW5zWzBdLmNvbnN0cnVjdG9yID09PSBBcnJheSkgcGx1Z2lucyA9IHBsdWdpbnNbMF07XG4gIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgaWYgKCFwbHVnaW4ucHJvdG90eXBlIHx8ICFwbHVnaW4ucHJvdG90eXBlLmNvbnN0cnVjdG9yKSB7XG4gICAgICB0aHJvdyBcIlNvcnRhYmxlOiBNb3VudGVkIHBsdWdpbiBtdXN0IGJlIGEgY29uc3RydWN0b3IgZnVuY3Rpb24sIG5vdCBcIi5jb25jYXQoe30udG9TdHJpbmcuY2FsbChwbHVnaW4pKTtcbiAgICB9XG4gICAgaWYgKHBsdWdpbi51dGlscykgU29ydGFibGUudXRpbHMgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgU29ydGFibGUudXRpbHMpLCBwbHVnaW4udXRpbHMpO1xuICAgIFBsdWdpbk1hbmFnZXIubW91bnQocGx1Z2luKTtcbiAgfSk7XG59O1xuXG4vKipcclxuICogQ3JlYXRlIHNvcnRhYmxlIGluc3RhbmNlXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9ICBlbFxyXG4gKiBAcGFyYW0ge09iamVjdH0gICAgICBbb3B0aW9uc11cclxuICovXG5Tb3J0YWJsZS5jcmVhdGUgPSBmdW5jdGlvbiAoZWwsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyBTb3J0YWJsZShlbCwgb3B0aW9ucyk7XG59O1xuXG4vLyBFeHBvcnRcblNvcnRhYmxlLnZlcnNpb24gPSB2ZXJzaW9uO1xuXG52YXIgYXV0b1Njcm9sbHMgPSBbXSxcbiAgc2Nyb2xsRWwsXG4gIHNjcm9sbFJvb3RFbCxcbiAgc2Nyb2xsaW5nID0gZmFsc2UsXG4gIGxhc3RBdXRvU2Nyb2xsWCxcbiAgbGFzdEF1dG9TY3JvbGxZLFxuICB0b3VjaEV2dCQxLFxuICBwb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbDtcbmZ1bmN0aW9uIEF1dG9TY3JvbGxQbHVnaW4oKSB7XG4gIGZ1bmN0aW9uIEF1dG9TY3JvbGwoKSB7XG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIGZvcmNlQXV0b1Njcm9sbEZhbGxiYWNrOiBmYWxzZSxcbiAgICAgIHNjcm9sbFNlbnNpdGl2aXR5OiAzMCxcbiAgICAgIHNjcm9sbFNwZWVkOiAxMCxcbiAgICAgIGJ1YmJsZVNjcm9sbDogdHJ1ZVxuICAgIH07XG5cbiAgICAvLyBCaW5kIGFsbCBwcml2YXRlIG1ldGhvZHNcbiAgICBmb3IgKHZhciBmbiBpbiB0aGlzKSB7XG4gICAgICBpZiAoZm4uY2hhckF0KDApID09PSAnXycgJiYgdHlwZW9mIHRoaXNbZm5dID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXNbZm5dID0gdGhpc1tmbl0uYmluZCh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQXV0b1Njcm9sbC5wcm90b3R5cGUgPSB7XG4gICAgZHJhZ1N0YXJ0ZWQ6IGZ1bmN0aW9uIGRyYWdTdGFydGVkKF9yZWYpIHtcbiAgICAgIHZhciBvcmlnaW5hbEV2ZW50ID0gX3JlZi5vcmlnaW5hbEV2ZW50O1xuICAgICAgaWYgKHRoaXMuc29ydGFibGUubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgICAgIG9uKGRvY3VtZW50LCAnZHJhZ292ZXInLCB0aGlzLl9oYW5kbGVBdXRvU2Nyb2xsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3VwcG9ydFBvaW50ZXIpIHtcbiAgICAgICAgICBvbihkb2N1bWVudCwgJ3BvaW50ZXJtb3ZlJywgdGhpcy5faGFuZGxlRmFsbGJhY2tBdXRvU2Nyb2xsKTtcbiAgICAgICAgfSBlbHNlIGlmIChvcmlnaW5hbEV2ZW50LnRvdWNoZXMpIHtcbiAgICAgICAgICBvbihkb2N1bWVudCwgJ3RvdWNobW92ZScsIHRoaXMuX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb24oZG9jdW1lbnQsICdtb3VzZW1vdmUnLCB0aGlzLl9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBkcmFnT3ZlckNvbXBsZXRlZDogZnVuY3Rpb24gZHJhZ092ZXJDb21wbGV0ZWQoX3JlZjIpIHtcbiAgICAgIHZhciBvcmlnaW5hbEV2ZW50ID0gX3JlZjIub3JpZ2luYWxFdmVudDtcbiAgICAgIC8vIEZvciB3aGVuIGJ1YmJsaW5nIGlzIGNhbmNlbGVkIGFuZCB1c2luZyBmYWxsYmFjayAoZmFsbGJhY2sgJ3RvdWNobW92ZScgYWx3YXlzIHJlYWNoZWQpXG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5kcmFnT3ZlckJ1YmJsZSAmJiAhb3JpZ2luYWxFdmVudC5yb290RWwpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlQXV0b1Njcm9sbChvcmlnaW5hbEV2ZW50KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRyb3A6IGZ1bmN0aW9uIGRyb3AoKSB7XG4gICAgICBpZiAodGhpcy5zb3J0YWJsZS5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICAgICAgb2ZmKGRvY3VtZW50LCAnZHJhZ292ZXInLCB0aGlzLl9oYW5kbGVBdXRvU2Nyb2xsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9mZihkb2N1bWVudCwgJ3BvaW50ZXJtb3ZlJywgdGhpcy5faGFuZGxlRmFsbGJhY2tBdXRvU2Nyb2xsKTtcbiAgICAgICAgb2ZmKGRvY3VtZW50LCAndG91Y2htb3ZlJywgdGhpcy5faGFuZGxlRmFsbGJhY2tBdXRvU2Nyb2xsKTtcbiAgICAgICAgb2ZmKGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgdGhpcy5faGFuZGxlRmFsbGJhY2tBdXRvU2Nyb2xsKTtcbiAgICAgIH1cbiAgICAgIGNsZWFyUG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwoKTtcbiAgICAgIGNsZWFyQXV0b1Njcm9sbHMoKTtcbiAgICAgIGNhbmNlbFRocm90dGxlKCk7XG4gICAgfSxcbiAgICBudWxsaW5nOiBmdW5jdGlvbiBudWxsaW5nKCkge1xuICAgICAgdG91Y2hFdnQkMSA9IHNjcm9sbFJvb3RFbCA9IHNjcm9sbEVsID0gc2Nyb2xsaW5nID0gcG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwgPSBsYXN0QXV0b1Njcm9sbFggPSBsYXN0QXV0b1Njcm9sbFkgPSBudWxsO1xuICAgICAgYXV0b1Njcm9sbHMubGVuZ3RoID0gMDtcbiAgICB9LFxuICAgIF9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGw6IGZ1bmN0aW9uIF9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGwoZXZ0KSB7XG4gICAgICB0aGlzLl9oYW5kbGVBdXRvU2Nyb2xsKGV2dCwgdHJ1ZSk7XG4gICAgfSxcbiAgICBfaGFuZGxlQXV0b1Njcm9sbDogZnVuY3Rpb24gX2hhbmRsZUF1dG9TY3JvbGwoZXZ0LCBmYWxsYmFjaykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIHZhciB4ID0gKGV2dC50b3VjaGVzID8gZXZ0LnRvdWNoZXNbMF0gOiBldnQpLmNsaWVudFgsXG4gICAgICAgIHkgPSAoZXZ0LnRvdWNoZXMgPyBldnQudG91Y2hlc1swXSA6IGV2dCkuY2xpZW50WSxcbiAgICAgICAgZWxlbSA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSk7XG4gICAgICB0b3VjaEV2dCQxID0gZXZ0O1xuXG4gICAgICAvLyBJRSBkb2VzIG5vdCBzZWVtIHRvIGhhdmUgbmF0aXZlIGF1dG9zY3JvbGwsXG4gICAgICAvLyBFZGdlJ3MgYXV0b3Njcm9sbCBzZWVtcyB0b28gY29uZGl0aW9uYWwsXG4gICAgICAvLyBNQUNPUyBTYWZhcmkgZG9lcyBub3QgaGF2ZSBhdXRvc2Nyb2xsLFxuICAgICAgLy8gRmlyZWZveCBhbmQgQ2hyb21lIGFyZSBnb29kXG4gICAgICBpZiAoZmFsbGJhY2sgfHwgdGhpcy5vcHRpb25zLmZvcmNlQXV0b1Njcm9sbEZhbGxiYWNrIHx8IEVkZ2UgfHwgSUUxMU9yTGVzcyB8fCBTYWZhcmkpIHtcbiAgICAgICAgYXV0b1Njcm9sbChldnQsIHRoaXMub3B0aW9ucywgZWxlbSwgZmFsbGJhY2spO1xuXG4gICAgICAgIC8vIExpc3RlbmVyIGZvciBwb2ludGVyIGVsZW1lbnQgY2hhbmdlXG4gICAgICAgIHZhciBvZ0VsZW1TY3JvbGxlciA9IGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KGVsZW0sIHRydWUpO1xuICAgICAgICBpZiAoc2Nyb2xsaW5nICYmICghcG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwgfHwgeCAhPT0gbGFzdEF1dG9TY3JvbGxYIHx8IHkgIT09IGxhc3RBdXRvU2Nyb2xsWSkpIHtcbiAgICAgICAgICBwb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCAmJiBjbGVhclBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsKCk7XG4gICAgICAgICAgLy8gRGV0ZWN0IGZvciBwb2ludGVyIGVsZW0gY2hhbmdlLCBlbXVsYXRpbmcgbmF0aXZlIERuRCBiZWhhdmlvdXJcbiAgICAgICAgICBwb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBuZXdFbGVtID0gZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQoZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KSwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAobmV3RWxlbSAhPT0gb2dFbGVtU2Nyb2xsZXIpIHtcbiAgICAgICAgICAgICAgb2dFbGVtU2Nyb2xsZXIgPSBuZXdFbGVtO1xuICAgICAgICAgICAgICBjbGVhckF1dG9TY3JvbGxzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhdXRvU2Nyb2xsKGV2dCwgX3RoaXMub3B0aW9ucywgbmV3RWxlbSwgZmFsbGJhY2spO1xuICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICBsYXN0QXV0b1Njcm9sbFggPSB4O1xuICAgICAgICAgIGxhc3RBdXRvU2Nyb2xsWSA9IHk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGlmIERuRCBpcyBlbmFibGVkIChhbmQgYnJvd3NlciBoYXMgZ29vZCBhdXRvc2Nyb2xsaW5nKSwgZmlyc3QgYXV0b3Njcm9sbCB3aWxsIGFscmVhZHkgc2Nyb2xsLCBzbyBnZXQgcGFyZW50IGF1dG9zY3JvbGwgb2YgZmlyc3QgYXV0b3Njcm9sbFxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5idWJibGVTY3JvbGwgfHwgZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQoZWxlbSwgdHJ1ZSkgPT09IGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKSkge1xuICAgICAgICAgIGNsZWFyQXV0b1Njcm9sbHMoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXV0b1Njcm9sbChldnQsIHRoaXMub3B0aW9ucywgZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQoZWxlbSwgZmFsc2UpLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICByZXR1cm4gX2V4dGVuZHMoQXV0b1Njcm9sbCwge1xuICAgIHBsdWdpbk5hbWU6ICdzY3JvbGwnLFxuICAgIGluaXRpYWxpemVCeURlZmF1bHQ6IHRydWVcbiAgfSk7XG59XG5mdW5jdGlvbiBjbGVhckF1dG9TY3JvbGxzKCkge1xuICBhdXRvU2Nyb2xscy5mb3JFYWNoKGZ1bmN0aW9uIChhdXRvU2Nyb2xsKSB7XG4gICAgY2xlYXJJbnRlcnZhbChhdXRvU2Nyb2xsLnBpZCk7XG4gIH0pO1xuICBhdXRvU2Nyb2xscyA9IFtdO1xufVxuZnVuY3Rpb24gY2xlYXJQb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCgpIHtcbiAgY2xlYXJJbnRlcnZhbChwb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCk7XG59XG52YXIgYXV0b1Njcm9sbCA9IHRocm90dGxlKGZ1bmN0aW9uIChldnQsIG9wdGlvbnMsIHJvb3RFbCwgaXNGYWxsYmFjaykge1xuICAvLyBCdWc6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTUwNTUyMVxuICBpZiAoIW9wdGlvbnMuc2Nyb2xsKSByZXR1cm47XG4gIHZhciB4ID0gKGV2dC50b3VjaGVzID8gZXZ0LnRvdWNoZXNbMF0gOiBldnQpLmNsaWVudFgsXG4gICAgeSA9IChldnQudG91Y2hlcyA/IGV2dC50b3VjaGVzWzBdIDogZXZ0KS5jbGllbnRZLFxuICAgIHNlbnMgPSBvcHRpb25zLnNjcm9sbFNlbnNpdGl2aXR5LFxuICAgIHNwZWVkID0gb3B0aW9ucy5zY3JvbGxTcGVlZCxcbiAgICB3aW5TY3JvbGxlciA9IGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKTtcbiAgdmFyIHNjcm9sbFRoaXNJbnN0YW5jZSA9IGZhbHNlLFxuICAgIHNjcm9sbEN1c3RvbUZuO1xuXG4gIC8vIE5ldyBzY3JvbGwgcm9vdCwgc2V0IHNjcm9sbEVsXG4gIGlmIChzY3JvbGxSb290RWwgIT09IHJvb3RFbCkge1xuICAgIHNjcm9sbFJvb3RFbCA9IHJvb3RFbDtcbiAgICBjbGVhckF1dG9TY3JvbGxzKCk7XG4gICAgc2Nyb2xsRWwgPSBvcHRpb25zLnNjcm9sbDtcbiAgICBzY3JvbGxDdXN0b21GbiA9IG9wdGlvbnMuc2Nyb2xsRm47XG4gICAgaWYgKHNjcm9sbEVsID09PSB0cnVlKSB7XG4gICAgICBzY3JvbGxFbCA9IGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KHJvb3RFbCwgdHJ1ZSk7XG4gICAgfVxuICB9XG4gIHZhciBsYXllcnNPdXQgPSAwO1xuICB2YXIgY3VycmVudFBhcmVudCA9IHNjcm9sbEVsO1xuICBkbyB7XG4gICAgdmFyIGVsID0gY3VycmVudFBhcmVudCxcbiAgICAgIHJlY3QgPSBnZXRSZWN0KGVsKSxcbiAgICAgIHRvcCA9IHJlY3QudG9wLFxuICAgICAgYm90dG9tID0gcmVjdC5ib3R0b20sXG4gICAgICBsZWZ0ID0gcmVjdC5sZWZ0LFxuICAgICAgcmlnaHQgPSByZWN0LnJpZ2h0LFxuICAgICAgd2lkdGggPSByZWN0LndpZHRoLFxuICAgICAgaGVpZ2h0ID0gcmVjdC5oZWlnaHQsXG4gICAgICBjYW5TY3JvbGxYID0gdm9pZCAwLFxuICAgICAgY2FuU2Nyb2xsWSA9IHZvaWQgMCxcbiAgICAgIHNjcm9sbFdpZHRoID0gZWwuc2Nyb2xsV2lkdGgsXG4gICAgICBzY3JvbGxIZWlnaHQgPSBlbC5zY3JvbGxIZWlnaHQsXG4gICAgICBlbENTUyA9IGNzcyhlbCksXG4gICAgICBzY3JvbGxQb3NYID0gZWwuc2Nyb2xsTGVmdCxcbiAgICAgIHNjcm9sbFBvc1kgPSBlbC5zY3JvbGxUb3A7XG4gICAgaWYgKGVsID09PSB3aW5TY3JvbGxlcikge1xuICAgICAgY2FuU2Nyb2xsWCA9IHdpZHRoIDwgc2Nyb2xsV2lkdGggJiYgKGVsQ1NTLm92ZXJmbG93WCA9PT0gJ2F1dG8nIHx8IGVsQ1NTLm92ZXJmbG93WCA9PT0gJ3Njcm9sbCcgfHwgZWxDU1Mub3ZlcmZsb3dYID09PSAndmlzaWJsZScpO1xuICAgICAgY2FuU2Nyb2xsWSA9IGhlaWdodCA8IHNjcm9sbEhlaWdodCAmJiAoZWxDU1Mub3ZlcmZsb3dZID09PSAnYXV0bycgfHwgZWxDU1Mub3ZlcmZsb3dZID09PSAnc2Nyb2xsJyB8fCBlbENTUy5vdmVyZmxvd1kgPT09ICd2aXNpYmxlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhblNjcm9sbFggPSB3aWR0aCA8IHNjcm9sbFdpZHRoICYmIChlbENTUy5vdmVyZmxvd1ggPT09ICdhdXRvJyB8fCBlbENTUy5vdmVyZmxvd1ggPT09ICdzY3JvbGwnKTtcbiAgICAgIGNhblNjcm9sbFkgPSBoZWlnaHQgPCBzY3JvbGxIZWlnaHQgJiYgKGVsQ1NTLm92ZXJmbG93WSA9PT0gJ2F1dG8nIHx8IGVsQ1NTLm92ZXJmbG93WSA9PT0gJ3Njcm9sbCcpO1xuICAgIH1cbiAgICB2YXIgdnggPSBjYW5TY3JvbGxYICYmIChNYXRoLmFicyhyaWdodCAtIHgpIDw9IHNlbnMgJiYgc2Nyb2xsUG9zWCArIHdpZHRoIDwgc2Nyb2xsV2lkdGgpIC0gKE1hdGguYWJzKGxlZnQgLSB4KSA8PSBzZW5zICYmICEhc2Nyb2xsUG9zWCk7XG4gICAgdmFyIHZ5ID0gY2FuU2Nyb2xsWSAmJiAoTWF0aC5hYnMoYm90dG9tIC0geSkgPD0gc2VucyAmJiBzY3JvbGxQb3NZICsgaGVpZ2h0IDwgc2Nyb2xsSGVpZ2h0KSAtIChNYXRoLmFicyh0b3AgLSB5KSA8PSBzZW5zICYmICEhc2Nyb2xsUG9zWSk7XG4gICAgaWYgKCFhdXRvU2Nyb2xsc1tsYXllcnNPdXRdKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBsYXllcnNPdXQ7IGkrKykge1xuICAgICAgICBpZiAoIWF1dG9TY3JvbGxzW2ldKSB7XG4gICAgICAgICAgYXV0b1Njcm9sbHNbaV0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS52eCAhPSB2eCB8fCBhdXRvU2Nyb2xsc1tsYXllcnNPdXRdLnZ5ICE9IHZ5IHx8IGF1dG9TY3JvbGxzW2xheWVyc091dF0uZWwgIT09IGVsKSB7XG4gICAgICBhdXRvU2Nyb2xsc1tsYXllcnNPdXRdLmVsID0gZWw7XG4gICAgICBhdXRvU2Nyb2xsc1tsYXllcnNPdXRdLnZ4ID0gdng7XG4gICAgICBhdXRvU2Nyb2xsc1tsYXllcnNPdXRdLnZ5ID0gdnk7XG4gICAgICBjbGVhckludGVydmFsKGF1dG9TY3JvbGxzW2xheWVyc091dF0ucGlkKTtcbiAgICAgIGlmICh2eCAhPSAwIHx8IHZ5ICE9IDApIHtcbiAgICAgICAgc2Nyb2xsVGhpc0luc3RhbmNlID0gdHJ1ZTtcbiAgICAgICAgLyoganNoaW50IGxvb3BmdW5jOnRydWUgKi9cbiAgICAgICAgYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS5waWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gZW11bGF0ZSBkcmFnIG92ZXIgZHVyaW5nIGF1dG9zY3JvbGwgKGZhbGxiYWNrKSwgZW11bGF0aW5nIG5hdGl2ZSBEbkQgYmVoYXZpb3VyXG4gICAgICAgICAgaWYgKGlzRmFsbGJhY2sgJiYgdGhpcy5sYXllciA9PT0gMCkge1xuICAgICAgICAgICAgU29ydGFibGUuYWN0aXZlLl9vblRvdWNoTW92ZSh0b3VjaEV2dCQxKTsgLy8gVG8gbW92ZSBnaG9zdCBpZiBpdCBpcyBwb3NpdGlvbmVkIGFic29sdXRlbHlcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHNjcm9sbE9mZnNldFkgPSBhdXRvU2Nyb2xsc1t0aGlzLmxheWVyXS52eSA/IGF1dG9TY3JvbGxzW3RoaXMubGF5ZXJdLnZ5ICogc3BlZWQgOiAwO1xuICAgICAgICAgIHZhciBzY3JvbGxPZmZzZXRYID0gYXV0b1Njcm9sbHNbdGhpcy5sYXllcl0udnggPyBhdXRvU2Nyb2xsc1t0aGlzLmxheWVyXS52eCAqIHNwZWVkIDogMDtcbiAgICAgICAgICBpZiAodHlwZW9mIHNjcm9sbEN1c3RvbUZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsQ3VzdG9tRm4uY2FsbChTb3J0YWJsZS5kcmFnZ2VkLnBhcmVudE5vZGVbZXhwYW5kb10sIHNjcm9sbE9mZnNldFgsIHNjcm9sbE9mZnNldFksIGV2dCwgdG91Y2hFdnQkMSwgYXV0b1Njcm9sbHNbdGhpcy5sYXllcl0uZWwpICE9PSAnY29udGludWUnKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc2Nyb2xsQnkoYXV0b1Njcm9sbHNbdGhpcy5sYXllcl0uZWwsIHNjcm9sbE9mZnNldFgsIHNjcm9sbE9mZnNldFkpO1xuICAgICAgICB9LmJpbmQoe1xuICAgICAgICAgIGxheWVyOiBsYXllcnNPdXRcbiAgICAgICAgfSksIDI0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGF5ZXJzT3V0Kys7XG4gIH0gd2hpbGUgKG9wdGlvbnMuYnViYmxlU2Nyb2xsICYmIGN1cnJlbnRQYXJlbnQgIT09IHdpblNjcm9sbGVyICYmIChjdXJyZW50UGFyZW50ID0gZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQoY3VycmVudFBhcmVudCwgZmFsc2UpKSk7XG4gIHNjcm9sbGluZyA9IHNjcm9sbFRoaXNJbnN0YW5jZTsgLy8gaW4gY2FzZSBhbm90aGVyIGZ1bmN0aW9uIGNhdGNoZXMgc2Nyb2xsaW5nIGFzIGZhbHNlIGluIGJldHdlZW4gd2hlbiBpdCBpcyBub3Rcbn0sIDMwKTtcblxudmFyIGRyb3AgPSBmdW5jdGlvbiBkcm9wKF9yZWYpIHtcbiAgdmFyIG9yaWdpbmFsRXZlbnQgPSBfcmVmLm9yaWdpbmFsRXZlbnQsXG4gICAgcHV0U29ydGFibGUgPSBfcmVmLnB1dFNvcnRhYmxlLFxuICAgIGRyYWdFbCA9IF9yZWYuZHJhZ0VsLFxuICAgIGFjdGl2ZVNvcnRhYmxlID0gX3JlZi5hY3RpdmVTb3J0YWJsZSxcbiAgICBkaXNwYXRjaFNvcnRhYmxlRXZlbnQgPSBfcmVmLmRpc3BhdGNoU29ydGFibGVFdmVudCxcbiAgICBoaWRlR2hvc3RGb3JUYXJnZXQgPSBfcmVmLmhpZGVHaG9zdEZvclRhcmdldCxcbiAgICB1bmhpZGVHaG9zdEZvclRhcmdldCA9IF9yZWYudW5oaWRlR2hvc3RGb3JUYXJnZXQ7XG4gIGlmICghb3JpZ2luYWxFdmVudCkgcmV0dXJuO1xuICB2YXIgdG9Tb3J0YWJsZSA9IHB1dFNvcnRhYmxlIHx8IGFjdGl2ZVNvcnRhYmxlO1xuICBoaWRlR2hvc3RGb3JUYXJnZXQoKTtcbiAgdmFyIHRvdWNoID0gb3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlcyAmJiBvcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA/IG9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gOiBvcmlnaW5hbEV2ZW50O1xuICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh0b3VjaC5jbGllbnRYLCB0b3VjaC5jbGllbnRZKTtcbiAgdW5oaWRlR2hvc3RGb3JUYXJnZXQoKTtcbiAgaWYgKHRvU29ydGFibGUgJiYgIXRvU29ydGFibGUuZWwuY29udGFpbnModGFyZ2V0KSkge1xuICAgIGRpc3BhdGNoU29ydGFibGVFdmVudCgnc3BpbGwnKTtcbiAgICB0aGlzLm9uU3BpbGwoe1xuICAgICAgZHJhZ0VsOiBkcmFnRWwsXG4gICAgICBwdXRTb3J0YWJsZTogcHV0U29ydGFibGVcbiAgICB9KTtcbiAgfVxufTtcbmZ1bmN0aW9uIFJldmVydCgpIHt9XG5SZXZlcnQucHJvdG90eXBlID0ge1xuICBzdGFydEluZGV4OiBudWxsLFxuICBkcmFnU3RhcnQ6IGZ1bmN0aW9uIGRyYWdTdGFydChfcmVmMikge1xuICAgIHZhciBvbGREcmFnZ2FibGVJbmRleCA9IF9yZWYyLm9sZERyYWdnYWJsZUluZGV4O1xuICAgIHRoaXMuc3RhcnRJbmRleCA9IG9sZERyYWdnYWJsZUluZGV4O1xuICB9LFxuICBvblNwaWxsOiBmdW5jdGlvbiBvblNwaWxsKF9yZWYzKSB7XG4gICAgdmFyIGRyYWdFbCA9IF9yZWYzLmRyYWdFbCxcbiAgICAgIHB1dFNvcnRhYmxlID0gX3JlZjMucHV0U29ydGFibGU7XG4gICAgdGhpcy5zb3J0YWJsZS5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcbiAgICBpZiAocHV0U29ydGFibGUpIHtcbiAgICAgIHB1dFNvcnRhYmxlLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgIH1cbiAgICB2YXIgbmV4dFNpYmxpbmcgPSBnZXRDaGlsZCh0aGlzLnNvcnRhYmxlLmVsLCB0aGlzLnN0YXJ0SW5kZXgsIHRoaXMub3B0aW9ucyk7XG4gICAgaWYgKG5leHRTaWJsaW5nKSB7XG4gICAgICB0aGlzLnNvcnRhYmxlLmVsLmluc2VydEJlZm9yZShkcmFnRWwsIG5leHRTaWJsaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zb3J0YWJsZS5lbC5hcHBlbmRDaGlsZChkcmFnRWwpO1xuICAgIH1cbiAgICB0aGlzLnNvcnRhYmxlLmFuaW1hdGVBbGwoKTtcbiAgICBpZiAocHV0U29ydGFibGUpIHtcbiAgICAgIHB1dFNvcnRhYmxlLmFuaW1hdGVBbGwoKTtcbiAgICB9XG4gIH0sXG4gIGRyb3A6IGRyb3Bcbn07XG5fZXh0ZW5kcyhSZXZlcnQsIHtcbiAgcGx1Z2luTmFtZTogJ3JldmVydE9uU3BpbGwnXG59KTtcbmZ1bmN0aW9uIFJlbW92ZSgpIHt9XG5SZW1vdmUucHJvdG90eXBlID0ge1xuICBvblNwaWxsOiBmdW5jdGlvbiBvblNwaWxsKF9yZWY0KSB7XG4gICAgdmFyIGRyYWdFbCA9IF9yZWY0LmRyYWdFbCxcbiAgICAgIHB1dFNvcnRhYmxlID0gX3JlZjQucHV0U29ydGFibGU7XG4gICAgdmFyIHBhcmVudFNvcnRhYmxlID0gcHV0U29ydGFibGUgfHwgdGhpcy5zb3J0YWJsZTtcbiAgICBwYXJlbnRTb3J0YWJsZS5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcbiAgICBkcmFnRWwucGFyZW50Tm9kZSAmJiBkcmFnRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkcmFnRWwpO1xuICAgIHBhcmVudFNvcnRhYmxlLmFuaW1hdGVBbGwoKTtcbiAgfSxcbiAgZHJvcDogZHJvcFxufTtcbl9leHRlbmRzKFJlbW92ZSwge1xuICBwbHVnaW5OYW1lOiAncmVtb3ZlT25TcGlsbCdcbn0pO1xudmFyIE9uU3BpbGwgPSBbUmVtb3ZlLCBSZXZlcnRdO1xuXG52YXIgbGFzdFN3YXBFbDtcbmZ1bmN0aW9uIFN3YXBQbHVnaW4oKSB7XG4gIGZ1bmN0aW9uIFN3YXAoKSB7XG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIHN3YXBDbGFzczogJ3NvcnRhYmxlLXN3YXAtaGlnaGxpZ2h0J1xuICAgIH07XG4gIH1cbiAgU3dhcC5wcm90b3R5cGUgPSB7XG4gICAgZHJhZ1N0YXJ0OiBmdW5jdGlvbiBkcmFnU3RhcnQoX3JlZikge1xuICAgICAgdmFyIGRyYWdFbCA9IF9yZWYuZHJhZ0VsO1xuICAgICAgbGFzdFN3YXBFbCA9IGRyYWdFbDtcbiAgICB9LFxuICAgIGRyYWdPdmVyVmFsaWQ6IGZ1bmN0aW9uIGRyYWdPdmVyVmFsaWQoX3JlZjIpIHtcbiAgICAgIHZhciBjb21wbGV0ZWQgPSBfcmVmMi5jb21wbGV0ZWQsXG4gICAgICAgIHRhcmdldCA9IF9yZWYyLnRhcmdldCxcbiAgICAgICAgb25Nb3ZlID0gX3JlZjIub25Nb3ZlLFxuICAgICAgICBhY3RpdmVTb3J0YWJsZSA9IF9yZWYyLmFjdGl2ZVNvcnRhYmxlLFxuICAgICAgICBjaGFuZ2VkID0gX3JlZjIuY2hhbmdlZCxcbiAgICAgICAgY2FuY2VsID0gX3JlZjIuY2FuY2VsO1xuICAgICAgaWYgKCFhY3RpdmVTb3J0YWJsZS5vcHRpb25zLnN3YXApIHJldHVybjtcbiAgICAgIHZhciBlbCA9IHRoaXMuc29ydGFibGUuZWwsXG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldCAhPT0gZWwpIHtcbiAgICAgICAgdmFyIHByZXZTd2FwRWwgPSBsYXN0U3dhcEVsO1xuICAgICAgICBpZiAob25Nb3ZlKHRhcmdldCkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgdG9nZ2xlQ2xhc3ModGFyZ2V0LCBvcHRpb25zLnN3YXBDbGFzcywgdHJ1ZSk7XG4gICAgICAgICAgbGFzdFN3YXBFbCA9IHRhcmdldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYXN0U3dhcEVsID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJldlN3YXBFbCAmJiBwcmV2U3dhcEVsICE9PSBsYXN0U3dhcEVsKSB7XG4gICAgICAgICAgdG9nZ2xlQ2xhc3MocHJldlN3YXBFbCwgb3B0aW9ucy5zd2FwQ2xhc3MsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2hhbmdlZCgpO1xuICAgICAgY29tcGxldGVkKHRydWUpO1xuICAgICAgY2FuY2VsKCk7XG4gICAgfSxcbiAgICBkcm9wOiBmdW5jdGlvbiBkcm9wKF9yZWYzKSB7XG4gICAgICB2YXIgYWN0aXZlU29ydGFibGUgPSBfcmVmMy5hY3RpdmVTb3J0YWJsZSxcbiAgICAgICAgcHV0U29ydGFibGUgPSBfcmVmMy5wdXRTb3J0YWJsZSxcbiAgICAgICAgZHJhZ0VsID0gX3JlZjMuZHJhZ0VsO1xuICAgICAgdmFyIHRvU29ydGFibGUgPSBwdXRTb3J0YWJsZSB8fCB0aGlzLnNvcnRhYmxlO1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICBsYXN0U3dhcEVsICYmIHRvZ2dsZUNsYXNzKGxhc3RTd2FwRWwsIG9wdGlvbnMuc3dhcENsYXNzLCBmYWxzZSk7XG4gICAgICBpZiAobGFzdFN3YXBFbCAmJiAob3B0aW9ucy5zd2FwIHx8IHB1dFNvcnRhYmxlICYmIHB1dFNvcnRhYmxlLm9wdGlvbnMuc3dhcCkpIHtcbiAgICAgICAgaWYgKGRyYWdFbCAhPT0gbGFzdFN3YXBFbCkge1xuICAgICAgICAgIHRvU29ydGFibGUuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgICAgICAgaWYgKHRvU29ydGFibGUgIT09IGFjdGl2ZVNvcnRhYmxlKSBhY3RpdmVTb3J0YWJsZS5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcbiAgICAgICAgICBzd2FwTm9kZXMoZHJhZ0VsLCBsYXN0U3dhcEVsKTtcbiAgICAgICAgICB0b1NvcnRhYmxlLmFuaW1hdGVBbGwoKTtcbiAgICAgICAgICBpZiAodG9Tb3J0YWJsZSAhPT0gYWN0aXZlU29ydGFibGUpIGFjdGl2ZVNvcnRhYmxlLmFuaW1hdGVBbGwoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbnVsbGluZzogZnVuY3Rpb24gbnVsbGluZygpIHtcbiAgICAgIGxhc3RTd2FwRWwgPSBudWxsO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzKFN3YXAsIHtcbiAgICBwbHVnaW5OYW1lOiAnc3dhcCcsXG4gICAgZXZlbnRQcm9wZXJ0aWVzOiBmdW5jdGlvbiBldmVudFByb3BlcnRpZXMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzd2FwSXRlbTogbGFzdFN3YXBFbFxuICAgICAgfTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gc3dhcE5vZGVzKG4xLCBuMikge1xuICB2YXIgcDEgPSBuMS5wYXJlbnROb2RlLFxuICAgIHAyID0gbjIucGFyZW50Tm9kZSxcbiAgICBpMSxcbiAgICBpMjtcbiAgaWYgKCFwMSB8fCAhcDIgfHwgcDEuaXNFcXVhbE5vZGUobjIpIHx8IHAyLmlzRXF1YWxOb2RlKG4xKSkgcmV0dXJuO1xuICBpMSA9IGluZGV4KG4xKTtcbiAgaTIgPSBpbmRleChuMik7XG4gIGlmIChwMS5pc0VxdWFsTm9kZShwMikgJiYgaTEgPCBpMikge1xuICAgIGkyKys7XG4gIH1cbiAgcDEuaW5zZXJ0QmVmb3JlKG4yLCBwMS5jaGlsZHJlbltpMV0pO1xuICBwMi5pbnNlcnRCZWZvcmUobjEsIHAyLmNoaWxkcmVuW2kyXSk7XG59XG5cbnZhciBtdWx0aURyYWdFbGVtZW50cyA9IFtdLFxuICBtdWx0aURyYWdDbG9uZXMgPSBbXSxcbiAgbGFzdE11bHRpRHJhZ1NlbGVjdCxcbiAgLy8gZm9yIHNlbGVjdGlvbiB3aXRoIG1vZGlmaWVyIGtleSBkb3duIChTSElGVClcbiAgbXVsdGlEcmFnU29ydGFibGUsXG4gIGluaXRpYWxGb2xkaW5nID0gZmFsc2UsXG4gIC8vIEluaXRpYWwgbXVsdGktZHJhZyBmb2xkIHdoZW4gZHJhZyBzdGFydGVkXG4gIGZvbGRpbmcgPSBmYWxzZSxcbiAgLy8gRm9sZGluZyBhbnkgb3RoZXIgdGltZVxuICBkcmFnU3RhcnRlZCA9IGZhbHNlLFxuICBkcmFnRWwkMSxcbiAgY2xvbmVzRnJvbVJlY3QsXG4gIGNsb25lc0hpZGRlbjtcbmZ1bmN0aW9uIE11bHRpRHJhZ1BsdWdpbigpIHtcbiAgZnVuY3Rpb24gTXVsdGlEcmFnKHNvcnRhYmxlKSB7XG4gICAgLy8gQmluZCBhbGwgcHJpdmF0ZSBtZXRob2RzXG4gICAgZm9yICh2YXIgZm4gaW4gdGhpcykge1xuICAgICAgaWYgKGZuLmNoYXJBdCgwKSA9PT0gJ18nICYmIHR5cGVvZiB0aGlzW2ZuXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzW2ZuXSA9IHRoaXNbZm5dLmJpbmQodGhpcyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghc29ydGFibGUub3B0aW9ucy5hdm9pZEltcGxpY2l0RGVzZWxlY3QpIHtcbiAgICAgIGlmIChzb3J0YWJsZS5vcHRpb25zLnN1cHBvcnRQb2ludGVyKSB7XG4gICAgICAgIG9uKGRvY3VtZW50LCAncG9pbnRlcnVwJywgdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb24oZG9jdW1lbnQsICdtb3VzZXVwJywgdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcpO1xuICAgICAgICBvbihkb2N1bWVudCwgJ3RvdWNoZW5kJywgdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcpO1xuICAgICAgfVxuICAgIH1cbiAgICBvbihkb2N1bWVudCwgJ2tleWRvd24nLCB0aGlzLl9jaGVja0tleURvd24pO1xuICAgIG9uKGRvY3VtZW50LCAna2V5dXAnLCB0aGlzLl9jaGVja0tleVVwKTtcbiAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgc2VsZWN0ZWRDbGFzczogJ3NvcnRhYmxlLXNlbGVjdGVkJyxcbiAgICAgIG11bHRpRHJhZ0tleTogbnVsbCxcbiAgICAgIGF2b2lkSW1wbGljaXREZXNlbGVjdDogZmFsc2UsXG4gICAgICBzZXREYXRhOiBmdW5jdGlvbiBzZXREYXRhKGRhdGFUcmFuc2ZlciwgZHJhZ0VsKSB7XG4gICAgICAgIHZhciBkYXRhID0gJyc7XG4gICAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50cy5sZW5ndGggJiYgbXVsdGlEcmFnU29ydGFibGUgPT09IHNvcnRhYmxlKSB7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCwgaSkge1xuICAgICAgICAgICAgZGF0YSArPSAoIWkgPyAnJyA6ICcsICcpICsgbXVsdGlEcmFnRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkYXRhID0gZHJhZ0VsLnRleHRDb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIGRhdGFUcmFuc2Zlci5zZXREYXRhKCdUZXh0JywgZGF0YSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBNdWx0aURyYWcucHJvdG90eXBlID0ge1xuICAgIG11bHRpRHJhZ0tleURvd246IGZhbHNlLFxuICAgIGlzTXVsdGlEcmFnOiBmYWxzZSxcbiAgICBkZWxheVN0YXJ0R2xvYmFsOiBmdW5jdGlvbiBkZWxheVN0YXJ0R2xvYmFsKF9yZWYpIHtcbiAgICAgIHZhciBkcmFnZ2VkID0gX3JlZi5kcmFnRWw7XG4gICAgICBkcmFnRWwkMSA9IGRyYWdnZWQ7XG4gICAgfSxcbiAgICBkZWxheUVuZGVkOiBmdW5jdGlvbiBkZWxheUVuZGVkKCkge1xuICAgICAgdGhpcy5pc011bHRpRHJhZyA9IH5tdWx0aURyYWdFbGVtZW50cy5pbmRleE9mKGRyYWdFbCQxKTtcbiAgICB9LFxuICAgIHNldHVwQ2xvbmU6IGZ1bmN0aW9uIHNldHVwQ2xvbmUoX3JlZjIpIHtcbiAgICAgIHZhciBzb3J0YWJsZSA9IF9yZWYyLnNvcnRhYmxlLFxuICAgICAgICBjYW5jZWwgPSBfcmVmMi5jYW5jZWw7XG4gICAgICBpZiAoIXRoaXMuaXNNdWx0aURyYWcpIHJldHVybjtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXVsdGlEcmFnRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbXVsdGlEcmFnQ2xvbmVzLnB1c2goY2xvbmUobXVsdGlEcmFnRWxlbWVudHNbaV0pKTtcbiAgICAgICAgbXVsdGlEcmFnQ2xvbmVzW2ldLnNvcnRhYmxlSW5kZXggPSBtdWx0aURyYWdFbGVtZW50c1tpXS5zb3J0YWJsZUluZGV4O1xuICAgICAgICBtdWx0aURyYWdDbG9uZXNbaV0uZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICAgIG11bHRpRHJhZ0Nsb25lc1tpXS5zdHlsZVsnd2lsbC1jaGFuZ2UnXSA9ICcnO1xuICAgICAgICB0b2dnbGVDbGFzcyhtdWx0aURyYWdDbG9uZXNbaV0sIHRoaXMub3B0aW9ucy5zZWxlY3RlZENsYXNzLCBmYWxzZSk7XG4gICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzW2ldID09PSBkcmFnRWwkMSAmJiB0b2dnbGVDbGFzcyhtdWx0aURyYWdDbG9uZXNbaV0sIHRoaXMub3B0aW9ucy5jaG9zZW5DbGFzcywgZmFsc2UpO1xuICAgICAgfVxuICAgICAgc29ydGFibGUuX2hpZGVDbG9uZSgpO1xuICAgICAgY2FuY2VsKCk7XG4gICAgfSxcbiAgICBjbG9uZTogZnVuY3Rpb24gY2xvbmUoX3JlZjMpIHtcbiAgICAgIHZhciBzb3J0YWJsZSA9IF9yZWYzLnNvcnRhYmxlLFxuICAgICAgICByb290RWwgPSBfcmVmMy5yb290RWwsXG4gICAgICAgIGRpc3BhdGNoU29ydGFibGVFdmVudCA9IF9yZWYzLmRpc3BhdGNoU29ydGFibGVFdmVudCxcbiAgICAgICAgY2FuY2VsID0gX3JlZjMuY2FuY2VsO1xuICAgICAgaWYgKCF0aGlzLmlzTXVsdGlEcmFnKSByZXR1cm47XG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5yZW1vdmVDbG9uZU9uSGlkZSkge1xuICAgICAgICBpZiAobXVsdGlEcmFnRWxlbWVudHMubGVuZ3RoICYmIG11bHRpRHJhZ1NvcnRhYmxlID09PSBzb3J0YWJsZSkge1xuICAgICAgICAgIGluc2VydE11bHRpRHJhZ0Nsb25lcyh0cnVlLCByb290RWwpO1xuICAgICAgICAgIGRpc3BhdGNoU29ydGFibGVFdmVudCgnY2xvbmUnKTtcbiAgICAgICAgICBjYW5jZWwoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgc2hvd0Nsb25lOiBmdW5jdGlvbiBzaG93Q2xvbmUoX3JlZjQpIHtcbiAgICAgIHZhciBjbG9uZU5vd1Nob3duID0gX3JlZjQuY2xvbmVOb3dTaG93bixcbiAgICAgICAgcm9vdEVsID0gX3JlZjQucm9vdEVsLFxuICAgICAgICBjYW5jZWwgPSBfcmVmNC5jYW5jZWw7XG4gICAgICBpZiAoIXRoaXMuaXNNdWx0aURyYWcpIHJldHVybjtcbiAgICAgIGluc2VydE11bHRpRHJhZ0Nsb25lcyhmYWxzZSwgcm9vdEVsKTtcbiAgICAgIG11bHRpRHJhZ0Nsb25lcy5mb3JFYWNoKGZ1bmN0aW9uIChjbG9uZSkge1xuICAgICAgICBjc3MoY2xvbmUsICdkaXNwbGF5JywgJycpO1xuICAgICAgfSk7XG4gICAgICBjbG9uZU5vd1Nob3duKCk7XG4gICAgICBjbG9uZXNIaWRkZW4gPSBmYWxzZTtcbiAgICAgIGNhbmNlbCgpO1xuICAgIH0sXG4gICAgaGlkZUNsb25lOiBmdW5jdGlvbiBoaWRlQ2xvbmUoX3JlZjUpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICB2YXIgc29ydGFibGUgPSBfcmVmNS5zb3J0YWJsZSxcbiAgICAgICAgY2xvbmVOb3dIaWRkZW4gPSBfcmVmNS5jbG9uZU5vd0hpZGRlbixcbiAgICAgICAgY2FuY2VsID0gX3JlZjUuY2FuY2VsO1xuICAgICAgaWYgKCF0aGlzLmlzTXVsdGlEcmFnKSByZXR1cm47XG4gICAgICBtdWx0aURyYWdDbG9uZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xvbmUpIHtcbiAgICAgICAgY3NzKGNsb25lLCAnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgIGlmIChfdGhpcy5vcHRpb25zLnJlbW92ZUNsb25lT25IaWRlICYmIGNsb25lLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICBjbG9uZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNsb25lKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjbG9uZU5vd0hpZGRlbigpO1xuICAgICAgY2xvbmVzSGlkZGVuID0gdHJ1ZTtcbiAgICAgIGNhbmNlbCgpO1xuICAgIH0sXG4gICAgZHJhZ1N0YXJ0R2xvYmFsOiBmdW5jdGlvbiBkcmFnU3RhcnRHbG9iYWwoX3JlZjYpIHtcbiAgICAgIHZhciBzb3J0YWJsZSA9IF9yZWY2LnNvcnRhYmxlO1xuICAgICAgaWYgKCF0aGlzLmlzTXVsdGlEcmFnICYmIG11bHRpRHJhZ1NvcnRhYmxlKSB7XG4gICAgICAgIG11bHRpRHJhZ1NvcnRhYmxlLm11bHRpRHJhZy5fZGVzZWxlY3RNdWx0aURyYWcoKTtcbiAgICAgIH1cbiAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgbXVsdGlEcmFnRWxlbWVudC5zb3J0YWJsZUluZGV4ID0gaW5kZXgobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gU29ydCBtdWx0aS1kcmFnIGVsZW1lbnRzXG4gICAgICBtdWx0aURyYWdFbGVtZW50cyA9IG11bHRpRHJhZ0VsZW1lbnRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEuc29ydGFibGVJbmRleCAtIGIuc29ydGFibGVJbmRleDtcbiAgICAgIH0pO1xuICAgICAgZHJhZ1N0YXJ0ZWQgPSB0cnVlO1xuICAgIH0sXG4gICAgZHJhZ1N0YXJ0ZWQ6IGZ1bmN0aW9uIGRyYWdTdGFydGVkKF9yZWY3KSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcbiAgICAgIHZhciBzb3J0YWJsZSA9IF9yZWY3LnNvcnRhYmxlO1xuICAgICAgaWYgKCF0aGlzLmlzTXVsdGlEcmFnKSByZXR1cm47XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnNvcnQpIHtcbiAgICAgICAgLy8gQ2FwdHVyZSByZWN0cyxcbiAgICAgICAgLy8gaGlkZSBtdWx0aSBkcmFnIGVsZW1lbnRzIChieSBwb3NpdGlvbmluZyB0aGVtIGFic29sdXRlKSxcbiAgICAgICAgLy8gc2V0IG11bHRpIGRyYWcgZWxlbWVudHMgcmVjdHMgdG8gZHJhZ1JlY3QsXG4gICAgICAgIC8vIHNob3cgbXVsdGkgZHJhZyBlbGVtZW50cyxcbiAgICAgICAgLy8gYW5pbWF0ZSB0byByZWN0cyxcbiAgICAgICAgLy8gdW5zZXQgcmVjdHMgJiByZW1vdmUgZnJvbSBET01cblxuICAgICAgICBzb3J0YWJsZS5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hbmltYXRpb24pIHtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAobXVsdGlEcmFnRWxlbWVudCA9PT0gZHJhZ0VsJDEpIHJldHVybjtcbiAgICAgICAgICAgIGNzcyhtdWx0aURyYWdFbGVtZW50LCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YXIgZHJhZ1JlY3QgPSBnZXRSZWN0KGRyYWdFbCQxLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnQgPT09IGRyYWdFbCQxKSByZXR1cm47XG4gICAgICAgICAgICBzZXRSZWN0KG11bHRpRHJhZ0VsZW1lbnQsIGRyYWdSZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBmb2xkaW5nID0gdHJ1ZTtcbiAgICAgICAgICBpbml0aWFsRm9sZGluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNvcnRhYmxlLmFuaW1hdGVBbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBmb2xkaW5nID0gZmFsc2U7XG4gICAgICAgIGluaXRpYWxGb2xkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmIChfdGhpczIub3B0aW9ucy5hbmltYXRpb24pIHtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICB1bnNldFJlY3QobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgYWxsIGF1eGlsaWFyeSBtdWx0aWRyYWcgaXRlbXMgZnJvbSBlbCwgaWYgc29ydGluZyBlbmFibGVkXG4gICAgICAgIGlmIChfdGhpczIub3B0aW9ucy5zb3J0KSB7XG4gICAgICAgICAgcmVtb3ZlTXVsdGlEcmFnRWxlbWVudHMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBkcmFnT3ZlcjogZnVuY3Rpb24gZHJhZ092ZXIoX3JlZjgpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBfcmVmOC50YXJnZXQsXG4gICAgICAgIGNvbXBsZXRlZCA9IF9yZWY4LmNvbXBsZXRlZCxcbiAgICAgICAgY2FuY2VsID0gX3JlZjguY2FuY2VsO1xuICAgICAgaWYgKGZvbGRpbmcgJiYgfm11bHRpRHJhZ0VsZW1lbnRzLmluZGV4T2YodGFyZ2V0KSkge1xuICAgICAgICBjb21wbGV0ZWQoZmFsc2UpO1xuICAgICAgICBjYW5jZWwoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJldmVydDogZnVuY3Rpb24gcmV2ZXJ0KF9yZWY5KSB7XG4gICAgICB2YXIgZnJvbVNvcnRhYmxlID0gX3JlZjkuZnJvbVNvcnRhYmxlLFxuICAgICAgICByb290RWwgPSBfcmVmOS5yb290RWwsXG4gICAgICAgIHNvcnRhYmxlID0gX3JlZjkuc29ydGFibGUsXG4gICAgICAgIGRyYWdSZWN0ID0gX3JlZjkuZHJhZ1JlY3Q7XG4gICAgICBpZiAobXVsdGlEcmFnRWxlbWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAvLyBTZXR1cCB1bmZvbGQgYW5pbWF0aW9uXG4gICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICBzb3J0YWJsZS5hZGRBbmltYXRpb25TdGF0ZSh7XG4gICAgICAgICAgICB0YXJnZXQ6IG11bHRpRHJhZ0VsZW1lbnQsXG4gICAgICAgICAgICByZWN0OiBmb2xkaW5nID8gZ2V0UmVjdChtdWx0aURyYWdFbGVtZW50KSA6IGRyYWdSZWN0XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdW5zZXRSZWN0KG11bHRpRHJhZ0VsZW1lbnQpO1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnQuZnJvbVJlY3QgPSBkcmFnUmVjdDtcbiAgICAgICAgICBmcm9tU29ydGFibGUucmVtb3ZlQW5pbWF0aW9uU3RhdGUobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICBmb2xkaW5nID0gZmFsc2U7XG4gICAgICAgIGluc2VydE11bHRpRHJhZ0VsZW1lbnRzKCF0aGlzLm9wdGlvbnMucmVtb3ZlQ2xvbmVPbkhpZGUsIHJvb3RFbCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkcmFnT3ZlckNvbXBsZXRlZDogZnVuY3Rpb24gZHJhZ092ZXJDb21wbGV0ZWQoX3JlZjEwKSB7XG4gICAgICB2YXIgc29ydGFibGUgPSBfcmVmMTAuc29ydGFibGUsXG4gICAgICAgIGlzT3duZXIgPSBfcmVmMTAuaXNPd25lcixcbiAgICAgICAgaW5zZXJ0aW9uID0gX3JlZjEwLmluc2VydGlvbixcbiAgICAgICAgYWN0aXZlU29ydGFibGUgPSBfcmVmMTAuYWN0aXZlU29ydGFibGUsXG4gICAgICAgIHBhcmVudEVsID0gX3JlZjEwLnBhcmVudEVsLFxuICAgICAgICBwdXRTb3J0YWJsZSA9IF9yZWYxMC5wdXRTb3J0YWJsZTtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgaWYgKGluc2VydGlvbikge1xuICAgICAgICAvLyBDbG9uZXMgbXVzdCBiZSBoaWRkZW4gYmVmb3JlIGZvbGRpbmcgYW5pbWF0aW9uIHRvIGNhcHR1cmUgZHJhZ1JlY3RBYnNvbHV0ZSBwcm9wZXJseVxuICAgICAgICBpZiAoaXNPd25lcikge1xuICAgICAgICAgIGFjdGl2ZVNvcnRhYmxlLl9oaWRlQ2xvbmUoKTtcbiAgICAgICAgfVxuICAgICAgICBpbml0aWFsRm9sZGluZyA9IGZhbHNlO1xuICAgICAgICAvLyBJZiBsZWF2aW5nIHNvcnQ6ZmFsc2Ugcm9vdCwgb3IgYWxyZWFkeSBmb2xkaW5nIC0gRm9sZCB0byBuZXcgbG9jYXRpb25cbiAgICAgICAgaWYgKG9wdGlvbnMuYW5pbWF0aW9uICYmIG11bHRpRHJhZ0VsZW1lbnRzLmxlbmd0aCA+IDEgJiYgKGZvbGRpbmcgfHwgIWlzT3duZXIgJiYgIWFjdGl2ZVNvcnRhYmxlLm9wdGlvbnMuc29ydCAmJiAhcHV0U29ydGFibGUpKSB7XG4gICAgICAgICAgLy8gRm9sZDogU2V0IGFsbCBtdWx0aSBkcmFnIGVsZW1lbnRzJ3MgcmVjdHMgdG8gZHJhZ0VsJ3MgcmVjdCB3aGVuIG11bHRpLWRyYWcgZWxlbWVudHMgYXJlIGludmlzaWJsZVxuICAgICAgICAgIHZhciBkcmFnUmVjdEFic29sdXRlID0gZ2V0UmVjdChkcmFnRWwkMSwgZmFsc2UsIHRydWUsIHRydWUpO1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50ID09PSBkcmFnRWwkMSkgcmV0dXJuO1xuICAgICAgICAgICAgc2V0UmVjdChtdWx0aURyYWdFbGVtZW50LCBkcmFnUmVjdEFic29sdXRlKTtcblxuICAgICAgICAgICAgLy8gTW92ZSBlbGVtZW50KHMpIHRvIGVuZCBvZiBwYXJlbnRFbCBzbyB0aGF0IGl0IGRvZXMgbm90IGludGVyZmVyZSB3aXRoIG11bHRpLWRyYWcgY2xvbmVzIGluc2VydGlvbiBpZiB0aGV5IGFyZSBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gd2hpbGUgZm9sZGluZywgYW5kIHNvIHRoYXQgd2UgY2FuIGNhcHR1cmUgdGhlbSBhZ2FpbiBiZWNhdXNlIG9sZCBzb3J0YWJsZSB3aWxsIG5vIGxvbmdlciBiZSBmcm9tU29ydGFibGVcbiAgICAgICAgICAgIHBhcmVudEVsLmFwcGVuZENoaWxkKG11bHRpRHJhZ0VsZW1lbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGZvbGRpbmcgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2xvbmVzIG11c3QgYmUgc2hvd24gKGFuZCBjaGVjayB0byByZW1vdmUgbXVsdGkgZHJhZ3MpIGFmdGVyIGZvbGRpbmcgd2hlbiBpbnRlcmZlcmluZyBtdWx0aURyYWdFbGVtZW50cyBhcmUgbW92ZWQgb3V0XG4gICAgICAgIGlmICghaXNPd25lcikge1xuICAgICAgICAgIC8vIE9ubHkgcmVtb3ZlIGlmIG5vdCBmb2xkaW5nIChmb2xkaW5nIHdpbGwgcmVtb3ZlIHRoZW0gYW55d2F5cylcbiAgICAgICAgICBpZiAoIWZvbGRpbmcpIHtcbiAgICAgICAgICAgIHJlbW92ZU11bHRpRHJhZ0VsZW1lbnRzKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB2YXIgY2xvbmVzSGlkZGVuQmVmb3JlID0gY2xvbmVzSGlkZGVuO1xuICAgICAgICAgICAgYWN0aXZlU29ydGFibGUuX3Nob3dDbG9uZShzb3J0YWJsZSk7XG5cbiAgICAgICAgICAgIC8vIFVuZm9sZCBhbmltYXRpb24gZm9yIGNsb25lcyBpZiBzaG93aW5nIGZyb20gaGlkZGVuXG4gICAgICAgICAgICBpZiAoYWN0aXZlU29ydGFibGUub3B0aW9ucy5hbmltYXRpb24gJiYgIWNsb25lc0hpZGRlbiAmJiBjbG9uZXNIaWRkZW5CZWZvcmUpIHtcbiAgICAgICAgICAgICAgbXVsdGlEcmFnQ2xvbmVzLmZvckVhY2goZnVuY3Rpb24gKGNsb25lKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlU29ydGFibGUuYWRkQW5pbWF0aW9uU3RhdGUoe1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBjbG9uZSxcbiAgICAgICAgICAgICAgICAgIHJlY3Q6IGNsb25lc0Zyb21SZWN0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY2xvbmUuZnJvbVJlY3QgPSBjbG9uZXNGcm9tUmVjdDtcbiAgICAgICAgICAgICAgICBjbG9uZS50aGlzQW5pbWF0aW9uRHVyYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZlU29ydGFibGUuX3Nob3dDbG9uZShzb3J0YWJsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBkcmFnT3ZlckFuaW1hdGlvbkNhcHR1cmU6IGZ1bmN0aW9uIGRyYWdPdmVyQW5pbWF0aW9uQ2FwdHVyZShfcmVmMTEpIHtcbiAgICAgIHZhciBkcmFnUmVjdCA9IF9yZWYxMS5kcmFnUmVjdCxcbiAgICAgICAgaXNPd25lciA9IF9yZWYxMS5pc093bmVyLFxuICAgICAgICBhY3RpdmVTb3J0YWJsZSA9IF9yZWYxMS5hY3RpdmVTb3J0YWJsZTtcbiAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgbXVsdGlEcmFnRWxlbWVudC50aGlzQW5pbWF0aW9uRHVyYXRpb24gPSBudWxsO1xuICAgICAgfSk7XG4gICAgICBpZiAoYWN0aXZlU29ydGFibGUub3B0aW9ucy5hbmltYXRpb24gJiYgIWlzT3duZXIgJiYgYWN0aXZlU29ydGFibGUubXVsdGlEcmFnLmlzTXVsdGlEcmFnKSB7XG4gICAgICAgIGNsb25lc0Zyb21SZWN0ID0gX2V4dGVuZHMoe30sIGRyYWdSZWN0KTtcbiAgICAgICAgdmFyIGRyYWdNYXRyaXggPSBtYXRyaXgoZHJhZ0VsJDEsIHRydWUpO1xuICAgICAgICBjbG9uZXNGcm9tUmVjdC50b3AgLT0gZHJhZ01hdHJpeC5mO1xuICAgICAgICBjbG9uZXNGcm9tUmVjdC5sZWZ0IC09IGRyYWdNYXRyaXguZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRyYWdPdmVyQW5pbWF0aW9uQ29tcGxldGU6IGZ1bmN0aW9uIGRyYWdPdmVyQW5pbWF0aW9uQ29tcGxldGUoKSB7XG4gICAgICBpZiAoZm9sZGluZykge1xuICAgICAgICBmb2xkaW5nID0gZmFsc2U7XG4gICAgICAgIHJlbW92ZU11bHRpRHJhZ0VsZW1lbnRzKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkcm9wOiBmdW5jdGlvbiBkcm9wKF9yZWYxMikge1xuICAgICAgdmFyIGV2dCA9IF9yZWYxMi5vcmlnaW5hbEV2ZW50LFxuICAgICAgICByb290RWwgPSBfcmVmMTIucm9vdEVsLFxuICAgICAgICBwYXJlbnRFbCA9IF9yZWYxMi5wYXJlbnRFbCxcbiAgICAgICAgc29ydGFibGUgPSBfcmVmMTIuc29ydGFibGUsXG4gICAgICAgIGRpc3BhdGNoU29ydGFibGVFdmVudCA9IF9yZWYxMi5kaXNwYXRjaFNvcnRhYmxlRXZlbnQsXG4gICAgICAgIG9sZEluZGV4ID0gX3JlZjEyLm9sZEluZGV4LFxuICAgICAgICBwdXRTb3J0YWJsZSA9IF9yZWYxMi5wdXRTb3J0YWJsZTtcbiAgICAgIHZhciB0b1NvcnRhYmxlID0gcHV0U29ydGFibGUgfHwgdGhpcy5zb3J0YWJsZTtcbiAgICAgIGlmICghZXZ0KSByZXR1cm47XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgY2hpbGRyZW4gPSBwYXJlbnRFbC5jaGlsZHJlbjtcblxuICAgICAgLy8gTXVsdGktZHJhZyBzZWxlY3Rpb25cbiAgICAgIGlmICghZHJhZ1N0YXJ0ZWQpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMubXVsdGlEcmFnS2V5ICYmICF0aGlzLm11bHRpRHJhZ0tleURvd24pIHtcbiAgICAgICAgICB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZygpO1xuICAgICAgICB9XG4gICAgICAgIHRvZ2dsZUNsYXNzKGRyYWdFbCQxLCBvcHRpb25zLnNlbGVjdGVkQ2xhc3MsICF+bXVsdGlEcmFnRWxlbWVudHMuaW5kZXhPZihkcmFnRWwkMSkpO1xuICAgICAgICBpZiAoIX5tdWx0aURyYWdFbGVtZW50cy5pbmRleE9mKGRyYWdFbCQxKSkge1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLnB1c2goZHJhZ0VsJDEpO1xuICAgICAgICAgIGRpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgc29ydGFibGU6IHNvcnRhYmxlLFxuICAgICAgICAgICAgcm9vdEVsOiByb290RWwsXG4gICAgICAgICAgICBuYW1lOiAnc2VsZWN0JyxcbiAgICAgICAgICAgIHRhcmdldEVsOiBkcmFnRWwkMSxcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gTW9kaWZpZXIgYWN0aXZhdGVkLCBzZWxlY3QgZnJvbSBsYXN0IHRvIGRyYWdFbFxuICAgICAgICAgIGlmIChldnQuc2hpZnRLZXkgJiYgbGFzdE11bHRpRHJhZ1NlbGVjdCAmJiBzb3J0YWJsZS5lbC5jb250YWlucyhsYXN0TXVsdGlEcmFnU2VsZWN0KSkge1xuICAgICAgICAgICAgdmFyIGxhc3RJbmRleCA9IGluZGV4KGxhc3RNdWx0aURyYWdTZWxlY3QpLFxuICAgICAgICAgICAgICBjdXJyZW50SW5kZXggPSBpbmRleChkcmFnRWwkMSk7XG4gICAgICAgICAgICBpZiAofmxhc3RJbmRleCAmJiB+Y3VycmVudEluZGV4ICYmIGxhc3RJbmRleCAhPT0gY3VycmVudEluZGV4KSB7XG4gICAgICAgICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gTXVzdCBpbmNsdWRlIGxhc3RNdWx0aURyYWdTZWxlY3QgKHNlbGVjdCBpdCksIGluIGNhc2UgbW9kaWZpZWQgc2VsZWN0aW9uIGZyb20gbm8gc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgLy8gKGJ1dCBwcmV2aW91cyBzZWxlY3Rpb24gZXhpc3RlZClcbiAgICAgICAgICAgICAgICB2YXIgbiwgaTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEluZGV4ID4gbGFzdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICBpID0gbGFzdEluZGV4O1xuICAgICAgICAgICAgICAgICAgbiA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgaSA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgICAgICAgICAgIG4gPSBsYXN0SW5kZXggKyAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZmlsdGVyID0gb3B0aW9ucy5maWx0ZXI7XG4gICAgICAgICAgICAgICAgZm9yICg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIGlmICh+bXVsdGlEcmFnRWxlbWVudHMuaW5kZXhPZihjaGlsZHJlbltpXSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgZWxlbWVudCBpcyBkcmFnZ2FibGVcbiAgICAgICAgICAgICAgICAgIGlmICghY2xvc2VzdChjaGlsZHJlbltpXSwgb3B0aW9ucy5kcmFnZ2FibGUsIHBhcmVudEVsLCBmYWxzZSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgZWxlbWVudCBpcyBmaWx0ZXJlZFxuICAgICAgICAgICAgICAgICAgdmFyIGZpbHRlcmVkID0gZmlsdGVyICYmICh0eXBlb2YgZmlsdGVyID09PSAnZnVuY3Rpb24nID8gZmlsdGVyLmNhbGwoc29ydGFibGUsIGV2dCwgY2hpbGRyZW5baV0sIHNvcnRhYmxlKSA6IGZpbHRlci5zcGxpdCgnLCcpLnNvbWUoZnVuY3Rpb24gKGNyaXRlcmlhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbG9zZXN0KGNoaWxkcmVuW2ldLCBjcml0ZXJpYS50cmltKCksIHBhcmVudEVsLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyZWQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3MoY2hpbGRyZW5baV0sIG9wdGlvbnMuc2VsZWN0ZWRDbGFzcywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5wdXNoKGNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogc29ydGFibGUsXG4gICAgICAgICAgICAgICAgICAgIHJvb3RFbDogcm9vdEVsLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RWw6IGNoaWxkcmVuW2ldLFxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGFzdE11bHRpRHJhZ1NlbGVjdCA9IGRyYWdFbCQxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtdWx0aURyYWdTb3J0YWJsZSA9IHRvU29ydGFibGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuc3BsaWNlKG11bHRpRHJhZ0VsZW1lbnRzLmluZGV4T2YoZHJhZ0VsJDEpLCAxKTtcbiAgICAgICAgICBsYXN0TXVsdGlEcmFnU2VsZWN0ID0gbnVsbDtcbiAgICAgICAgICBkaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgIHNvcnRhYmxlOiBzb3J0YWJsZSxcbiAgICAgICAgICAgIHJvb3RFbDogcm9vdEVsLFxuICAgICAgICAgICAgbmFtZTogJ2Rlc2VsZWN0JyxcbiAgICAgICAgICAgIHRhcmdldEVsOiBkcmFnRWwkMSxcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE11bHRpLWRyYWcgZHJvcFxuICAgICAgaWYgKGRyYWdTdGFydGVkICYmIHRoaXMuaXNNdWx0aURyYWcpIHtcbiAgICAgICAgZm9sZGluZyA9IGZhbHNlO1xuICAgICAgICAvLyBEbyBub3QgXCJ1bmZvbGRcIiBhZnRlciBhcm91bmQgZHJhZ0VsIGlmIHJldmVydGVkXG4gICAgICAgIGlmICgocGFyZW50RWxbZXhwYW5kb10ub3B0aW9ucy5zb3J0IHx8IHBhcmVudEVsICE9PSByb290RWwpICYmIG11bHRpRHJhZ0VsZW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB2YXIgZHJhZ1JlY3QgPSBnZXRSZWN0KGRyYWdFbCQxKSxcbiAgICAgICAgICAgIG11bHRpRHJhZ0luZGV4ID0gaW5kZXgoZHJhZ0VsJDEsICc6bm90KC4nICsgdGhpcy5vcHRpb25zLnNlbGVjdGVkQ2xhc3MgKyAnKScpO1xuICAgICAgICAgIGlmICghaW5pdGlhbEZvbGRpbmcgJiYgb3B0aW9ucy5hbmltYXRpb24pIGRyYWdFbCQxLnRoaXNBbmltYXRpb25EdXJhdGlvbiA9IG51bGw7XG4gICAgICAgICAgdG9Tb3J0YWJsZS5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcbiAgICAgICAgICBpZiAoIWluaXRpYWxGb2xkaW5nKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5hbmltYXRpb24pIHtcbiAgICAgICAgICAgICAgZHJhZ0VsJDEuZnJvbVJlY3QgPSBkcmFnUmVjdDtcbiAgICAgICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnQudGhpc0FuaW1hdGlvbkR1cmF0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAobXVsdGlEcmFnRWxlbWVudCAhPT0gZHJhZ0VsJDEpIHtcbiAgICAgICAgICAgICAgICAgIHZhciByZWN0ID0gZm9sZGluZyA/IGdldFJlY3QobXVsdGlEcmFnRWxlbWVudCkgOiBkcmFnUmVjdDtcbiAgICAgICAgICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnQuZnJvbVJlY3QgPSByZWN0O1xuXG4gICAgICAgICAgICAgICAgICAvLyBQcmVwYXJlIHVuZm9sZCBhbmltYXRpb25cbiAgICAgICAgICAgICAgICAgIHRvU29ydGFibGUuYWRkQW5pbWF0aW9uU3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IG11bHRpRHJhZ0VsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIHJlY3Q6IHJlY3RcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE11bHRpIGRyYWcgZWxlbWVudHMgYXJlIG5vdCBuZWNlc3NhcmlseSByZW1vdmVkIGZyb20gdGhlIERPTSBvbiBkcm9wLCBzbyB0byByZWluc2VydFxuICAgICAgICAgICAgLy8gcHJvcGVybHkgdGhleSBtdXN0IGFsbCBiZSByZW1vdmVkXG4gICAgICAgICAgICByZW1vdmVNdWx0aURyYWdFbGVtZW50cygpO1xuICAgICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICAgICAgICBpZiAoY2hpbGRyZW5bbXVsdGlEcmFnSW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50RWwuaW5zZXJ0QmVmb3JlKG11bHRpRHJhZ0VsZW1lbnQsIGNoaWxkcmVuW211bHRpRHJhZ0luZGV4XSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyZW50RWwuYXBwZW5kQ2hpbGQobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbXVsdGlEcmFnSW5kZXgrKztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBJZiBpbml0aWFsIGZvbGRpbmcgaXMgZG9uZSwgdGhlIGVsZW1lbnRzIG1heSBoYXZlIGNoYW5nZWQgcG9zaXRpb24gYmVjYXVzZSB0aGV5IGFyZSBub3dcbiAgICAgICAgICAgIC8vIHVuZm9sZGluZyBhcm91bmQgZHJhZ0VsLCBldmVuIHRob3VnaCBkcmFnRWwgbWF5IG5vdCBoYXZlIGhpcyBpbmRleCBjaGFuZ2VkLCBzbyB1cGRhdGUgZXZlbnRcbiAgICAgICAgICAgIC8vIG11c3QgYmUgZmlyZWQgaGVyZSBhcyBTb3J0YWJsZSB3aWxsIG5vdC5cbiAgICAgICAgICAgIGlmIChvbGRJbmRleCA9PT0gaW5kZXgoZHJhZ0VsJDEpKSB7XG4gICAgICAgICAgICAgIHZhciB1cGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50LnNvcnRhYmxlSW5kZXggIT09IGluZGV4KG11bHRpRHJhZ0VsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICB1cGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmICh1cGRhdGUpIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaFNvcnRhYmxlRXZlbnQoJ3VwZGF0ZScpO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoU29ydGFibGVFdmVudCgnc29ydCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gTXVzdCBiZSBkb25lIGFmdGVyIGNhcHR1cmluZyBpbmRpdmlkdWFsIHJlY3RzIChzY3JvbGwgYmFyKVxuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgIHVuc2V0UmVjdChtdWx0aURyYWdFbGVtZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0b1NvcnRhYmxlLmFuaW1hdGVBbGwoKTtcbiAgICAgICAgfVxuICAgICAgICBtdWx0aURyYWdTb3J0YWJsZSA9IHRvU29ydGFibGU7XG4gICAgICB9XG5cbiAgICAgIC8vIFJlbW92ZSBjbG9uZXMgaWYgbmVjZXNzYXJ5XG4gICAgICBpZiAocm9vdEVsID09PSBwYXJlbnRFbCB8fCBwdXRTb3J0YWJsZSAmJiBwdXRTb3J0YWJsZS5sYXN0UHV0TW9kZSAhPT0gJ2Nsb25lJykge1xuICAgICAgICBtdWx0aURyYWdDbG9uZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xvbmUpIHtcbiAgICAgICAgICBjbG9uZS5wYXJlbnROb2RlICYmIGNsb25lLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2xvbmUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG51bGxpbmdHbG9iYWw6IGZ1bmN0aW9uIG51bGxpbmdHbG9iYWwoKSB7XG4gICAgICB0aGlzLmlzTXVsdGlEcmFnID0gZHJhZ1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgIG11bHRpRHJhZ0Nsb25lcy5sZW5ndGggPSAwO1xuICAgIH0sXG4gICAgZGVzdHJveUdsb2JhbDogZnVuY3Rpb24gZGVzdHJveUdsb2JhbCgpIHtcbiAgICAgIHRoaXMuX2Rlc2VsZWN0TXVsdGlEcmFnKCk7XG4gICAgICBvZmYoZG9jdW1lbnQsICdwb2ludGVydXAnLCB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZyk7XG4gICAgICBvZmYoZG9jdW1lbnQsICdtb3VzZXVwJywgdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcpO1xuICAgICAgb2ZmKGRvY3VtZW50LCAndG91Y2hlbmQnLCB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZyk7XG4gICAgICBvZmYoZG9jdW1lbnQsICdrZXlkb3duJywgdGhpcy5fY2hlY2tLZXlEb3duKTtcbiAgICAgIG9mZihkb2N1bWVudCwgJ2tleXVwJywgdGhpcy5fY2hlY2tLZXlVcCk7XG4gICAgfSxcbiAgICBfZGVzZWxlY3RNdWx0aURyYWc6IGZ1bmN0aW9uIF9kZXNlbGVjdE11bHRpRHJhZyhldnQpIHtcbiAgICAgIGlmICh0eXBlb2YgZHJhZ1N0YXJ0ZWQgIT09IFwidW5kZWZpbmVkXCIgJiYgZHJhZ1N0YXJ0ZWQpIHJldHVybjtcblxuICAgICAgLy8gT25seSBkZXNlbGVjdCBpZiBzZWxlY3Rpb24gaXMgaW4gdGhpcyBzb3J0YWJsZVxuICAgICAgaWYgKG11bHRpRHJhZ1NvcnRhYmxlICE9PSB0aGlzLnNvcnRhYmxlKSByZXR1cm47XG5cbiAgICAgIC8vIE9ubHkgZGVzZWxlY3QgaWYgdGFyZ2V0IGlzIG5vdCBpdGVtIGluIHRoaXMgc29ydGFibGVcbiAgICAgIGlmIChldnQgJiYgY2xvc2VzdChldnQudGFyZ2V0LCB0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlLCB0aGlzLnNvcnRhYmxlLmVsLCBmYWxzZSkpIHJldHVybjtcblxuICAgICAgLy8gT25seSBkZXNlbGVjdCBpZiBsZWZ0IGNsaWNrXG4gICAgICBpZiAoZXZ0ICYmIGV2dC5idXR0b24gIT09IDApIHJldHVybjtcbiAgICAgIHdoaWxlIChtdWx0aURyYWdFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGVsID0gbXVsdGlEcmFnRWxlbWVudHNbMF07XG4gICAgICAgIHRvZ2dsZUNsYXNzKGVsLCB0aGlzLm9wdGlvbnMuc2VsZWN0ZWRDbGFzcywgZmFsc2UpO1xuICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5zaGlmdCgpO1xuICAgICAgICBkaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICBzb3J0YWJsZTogdGhpcy5zb3J0YWJsZSxcbiAgICAgICAgICByb290RWw6IHRoaXMuc29ydGFibGUuZWwsXG4gICAgICAgICAgbmFtZTogJ2Rlc2VsZWN0JyxcbiAgICAgICAgICB0YXJnZXRFbDogZWwsXG4gICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgX2NoZWNrS2V5RG93bjogZnVuY3Rpb24gX2NoZWNrS2V5RG93bihldnQpIHtcbiAgICAgIGlmIChldnQua2V5ID09PSB0aGlzLm9wdGlvbnMubXVsdGlEcmFnS2V5KSB7XG4gICAgICAgIHRoaXMubXVsdGlEcmFnS2V5RG93biA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcbiAgICBfY2hlY2tLZXlVcDogZnVuY3Rpb24gX2NoZWNrS2V5VXAoZXZ0KSB7XG4gICAgICBpZiAoZXZ0LmtleSA9PT0gdGhpcy5vcHRpb25zLm11bHRpRHJhZ0tleSkge1xuICAgICAgICB0aGlzLm11bHRpRHJhZ0tleURvd24gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcyhNdWx0aURyYWcsIHtcbiAgICAvLyBTdGF0aWMgbWV0aG9kcyAmIHByb3BlcnRpZXNcbiAgICBwbHVnaW5OYW1lOiAnbXVsdGlEcmFnJyxcbiAgICB1dGlsczoge1xuICAgICAgLyoqXHJcbiAgICAgICAqIFNlbGVjdHMgdGhlIHByb3ZpZGVkIG11bHRpLWRyYWcgaXRlbVxyXG4gICAgICAgKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWwgICAgVGhlIGVsZW1lbnQgdG8gYmUgc2VsZWN0ZWRcclxuICAgICAgICovXG4gICAgICBzZWxlY3Q6IGZ1bmN0aW9uIHNlbGVjdChlbCkge1xuICAgICAgICB2YXIgc29ydGFibGUgPSBlbC5wYXJlbnROb2RlW2V4cGFuZG9dO1xuICAgICAgICBpZiAoIXNvcnRhYmxlIHx8ICFzb3J0YWJsZS5vcHRpb25zLm11bHRpRHJhZyB8fCB+bXVsdGlEcmFnRWxlbWVudHMuaW5kZXhPZihlbCkpIHJldHVybjtcbiAgICAgICAgaWYgKG11bHRpRHJhZ1NvcnRhYmxlICYmIG11bHRpRHJhZ1NvcnRhYmxlICE9PSBzb3J0YWJsZSkge1xuICAgICAgICAgIG11bHRpRHJhZ1NvcnRhYmxlLm11bHRpRHJhZy5fZGVzZWxlY3RNdWx0aURyYWcoKTtcbiAgICAgICAgICBtdWx0aURyYWdTb3J0YWJsZSA9IHNvcnRhYmxlO1xuICAgICAgICB9XG4gICAgICAgIHRvZ2dsZUNsYXNzKGVsLCBzb3J0YWJsZS5vcHRpb25zLnNlbGVjdGVkQ2xhc3MsIHRydWUpO1xuICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5wdXNoKGVsKTtcbiAgICAgIH0sXG4gICAgICAvKipcclxuICAgICAgICogRGVzZWxlY3RzIHRoZSBwcm92aWRlZCBtdWx0aS1kcmFnIGl0ZW1cclxuICAgICAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsICAgIFRoZSBlbGVtZW50IHRvIGJlIGRlc2VsZWN0ZWRcclxuICAgICAgICovXG4gICAgICBkZXNlbGVjdDogZnVuY3Rpb24gZGVzZWxlY3QoZWwpIHtcbiAgICAgICAgdmFyIHNvcnRhYmxlID0gZWwucGFyZW50Tm9kZVtleHBhbmRvXSxcbiAgICAgICAgICBpbmRleCA9IG11bHRpRHJhZ0VsZW1lbnRzLmluZGV4T2YoZWwpO1xuICAgICAgICBpZiAoIXNvcnRhYmxlIHx8ICFzb3J0YWJsZS5vcHRpb25zLm11bHRpRHJhZyB8fCAhfmluZGV4KSByZXR1cm47XG4gICAgICAgIHRvZ2dsZUNsYXNzKGVsLCBzb3J0YWJsZS5vcHRpb25zLnNlbGVjdGVkQ2xhc3MsIGZhbHNlKTtcbiAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGV2ZW50UHJvcGVydGllczogZnVuY3Rpb24gZXZlbnRQcm9wZXJ0aWVzKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG4gICAgICB2YXIgb2xkSW5kaWNpZXMgPSBbXSxcbiAgICAgICAgbmV3SW5kaWNpZXMgPSBbXTtcbiAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgb2xkSW5kaWNpZXMucHVzaCh7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudDogbXVsdGlEcmFnRWxlbWVudCxcbiAgICAgICAgICBpbmRleDogbXVsdGlEcmFnRWxlbWVudC5zb3J0YWJsZUluZGV4XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIG11bHRpRHJhZ0VsZW1lbnRzIHdpbGwgYWxyZWFkeSBiZSBzb3J0ZWQgaWYgZm9sZGluZ1xuICAgICAgICB2YXIgbmV3SW5kZXg7XG4gICAgICAgIGlmIChmb2xkaW5nICYmIG11bHRpRHJhZ0VsZW1lbnQgIT09IGRyYWdFbCQxKSB7XG4gICAgICAgICAgbmV3SW5kZXggPSAtMTtcbiAgICAgICAgfSBlbHNlIGlmIChmb2xkaW5nKSB7XG4gICAgICAgICAgbmV3SW5kZXggPSBpbmRleChtdWx0aURyYWdFbGVtZW50LCAnOm5vdCguJyArIF90aGlzMy5vcHRpb25zLnNlbGVjdGVkQ2xhc3MgKyAnKScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0luZGV4ID0gaW5kZXgobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3SW5kaWNpZXMucHVzaCh7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudDogbXVsdGlEcmFnRWxlbWVudCxcbiAgICAgICAgICBpbmRleDogbmV3SW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGl0ZW1zOiBfdG9Db25zdW1hYmxlQXJyYXkobXVsdGlEcmFnRWxlbWVudHMpLFxuICAgICAgICBjbG9uZXM6IFtdLmNvbmNhdChtdWx0aURyYWdDbG9uZXMpLFxuICAgICAgICBvbGRJbmRpY2llczogb2xkSW5kaWNpZXMsXG4gICAgICAgIG5ld0luZGljaWVzOiBuZXdJbmRpY2llc1xuICAgICAgfTtcbiAgICB9LFxuICAgIG9wdGlvbkxpc3RlbmVyczoge1xuICAgICAgbXVsdGlEcmFnS2V5OiBmdW5jdGlvbiBtdWx0aURyYWdLZXkoa2V5KSB7XG4gICAgICAgIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoa2V5ID09PSAnY3RybCcpIHtcbiAgICAgICAgICBrZXkgPSAnQ29udHJvbCc7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBrZXkgPSBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc3Vic3RyKDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIGluc2VydE11bHRpRHJhZ0VsZW1lbnRzKGNsb25lc0luc2VydGVkLCByb290RWwpIHtcbiAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCwgaSkge1xuICAgIHZhciB0YXJnZXQgPSByb290RWwuY2hpbGRyZW5bbXVsdGlEcmFnRWxlbWVudC5zb3J0YWJsZUluZGV4ICsgKGNsb25lc0luc2VydGVkID8gTnVtYmVyKGkpIDogMCldO1xuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHJvb3RFbC5pbnNlcnRCZWZvcmUobXVsdGlEcmFnRWxlbWVudCwgdGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm9vdEVsLmFwcGVuZENoaWxkKG11bHRpRHJhZ0VsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxyXG4gKiBJbnNlcnQgbXVsdGktZHJhZyBjbG9uZXNcclxuICogQHBhcmFtICB7W0Jvb2xlYW5dfSBlbGVtZW50c0luc2VydGVkICBXaGV0aGVyIHRoZSBtdWx0aS1kcmFnIGVsZW1lbnRzIGFyZSBpbnNlcnRlZFxyXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gcm9vdEVsXHJcbiAqL1xuZnVuY3Rpb24gaW5zZXJ0TXVsdGlEcmFnQ2xvbmVzKGVsZW1lbnRzSW5zZXJ0ZWQsIHJvb3RFbCkge1xuICBtdWx0aURyYWdDbG9uZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xvbmUsIGkpIHtcbiAgICB2YXIgdGFyZ2V0ID0gcm9vdEVsLmNoaWxkcmVuW2Nsb25lLnNvcnRhYmxlSW5kZXggKyAoZWxlbWVudHNJbnNlcnRlZCA/IE51bWJlcihpKSA6IDApXTtcbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICByb290RWwuaW5zZXJ0QmVmb3JlKGNsb25lLCB0YXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByb290RWwuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiByZW1vdmVNdWx0aURyYWdFbGVtZW50cygpIHtcbiAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgIGlmIChtdWx0aURyYWdFbGVtZW50ID09PSBkcmFnRWwkMSkgcmV0dXJuO1xuICAgIG11bHRpRHJhZ0VsZW1lbnQucGFyZW50Tm9kZSAmJiBtdWx0aURyYWdFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobXVsdGlEcmFnRWxlbWVudCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTb3J0YWJsZTtcbmV4cG9ydCB7IEF1dG9TY3JvbGxQbHVnaW4gYXMgQXV0b1Njcm9sbCwgTXVsdGlEcmFnUGx1Z2luIGFzIE11bHRpRHJhZywgT25TcGlsbCwgU29ydGFibGUsIFN3YXBQbHVnaW4gYXMgU3dhcCB9O1xuIiwiLyoqIEltcG9ydCBkZXBlbmRlbmNpZXMgKi9cbi8vIHN0eWxpbmdcbmltcG9ydCBcIi4vY3NzL3N0eWxlLmNzc1wiO1xuXG4vKiogQ2xhc3MgcmVwcmVzZW50aW5nIGEgaG92ZXIgc2VsZWN0LiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG92ZXJTZWxlY3Qge1xuXG4gIC8vIHB1YmxpYyBmaWVsZHNcblxuICAvKipcbiAgKiBIVE1MIGVsZW1lbnQuXG4gICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAqL1xuICBlbGVtZW50O1xuXG4gIC8vIHByaXZhdGUgZmllbGRzXG5cbiAgLyoqXG4gICogVmFsdWUuXG4gICogQHR5cGUge3N0cmluZ31cbiAgKi9cbiAgX3ZhbHVlO1xuXG4gIC8qKlxuICAqIFByZXZpb3VzIHZhbHVlLlxuICAqIEB0eXBlIHtzdHJpbmd9XG4gICovXG4gIF9wcmV2aW91cztcblxuICAvKipcbiAgKiBJbml0aWFsIHZhbHVlLlxuICAqIEB0eXBlIHtzdHJpbmd9XG4gICovXG4gIF9pbml0aWFsO1xuXG4gIC8qKlxuICAqIE9wdGlvbnMuXG4gICogQHR5cGUge01hcDxvYmplY3Q+fVxuICAqL1xuICBfb3B0aW9ucyA9IG5ldyBNYXAoKTtcblxuICAvKipcbiAgKiBEaXNhYmxlZCBvcHRpb24uXG4gICogQHR5cGUge29iamVjdH1cbiAgKi9cbiAgX2Rpc2FibGVkT3B0aW9uO1xuXG4gIC8qKlxuICAqIEN1c3RvbSBjbGljayBldmVudCBmdW5jdGlvbi5cbiAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICovXG4gIF9vbkNsaWNrO1xuXG4gIC8qKlxuICAqIENvbnN0cnVjdCBhIG5ldyBIb3ZlclNlbGVjdCBvYmplY3QuXG4gICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIEVsZW1lbnQgdG8gY3JlYXRlIGhvdmVyIHNlbGVjdC5cbiAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIENvbmZpZ3VyYXRpb24gc2V0dGluZ3MuXG4gICogQHBhcmFtIHtBcnJheTxvYmplY3Q+fSBvcHRpb25zLm9wdGlvbnMgLSBBcnJheSBvZiBzZWxlY3Qgb3B0aW9ucy5cbiAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IG9wdGlvbnMub3B0aW9ucy52YWx1ZSAtIFZhbHVlIGZvciBvcHRpb24uXG4gICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBvcHRpb25zLm9wdGlvbnMudGV4dCAtIFRleHQgZm9yIG9wdGlvbi5cbiAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IG9wdGlvbnMub3B0aW9ucy5jb2xvciAtIENvbG9yIGZvciBvcHRpb24uXG4gICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0ZWQgLSBWYWx1ZSBmb3IgZGVmYXVsdCBzZWxlY3RlZCBvcHRpb24uXG4gICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMuZGlzYWJsZWRPcHRpb24gLSBPcHRpb24gdG8gZGlzcGxheSB3aGVuXG4gICogZGlzYWJsZWQuXG4gICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuZGlzYWJsZWRPcHRpb24udmFsdWUgLSBWYWx1ZSB3aGVuIGRpc2FibGVkLlxuICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmRpc2FibGVkT3B0aW9uLnRleHQgLSBUZXh0IHRvIGRpc3BsYXkgd2hlblxuICAqIGRpc2FibGVkLlxuICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmRpc2FibGVkT3B0aW9uLmNvbG9yIC0gQ29sb3IgdG8gZGlzcGxheSB3aGVuXG4gICogZGlzYWJsZWQuXG4gICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5vbkNsaWNrIC0gRnVuY3Rpb24gdG8gZGVmaW5lIGNsaWNrIGV2ZW50XG4gICogYmVoYXZpb3IuXG4gICogQHJldHVybiB7dm9pZH1cbiAgKi9cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIC8vIGluaXRpYWxpemUgcHVibGljIGZpZWxkXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAvLyBpbml0aWFsaXplIHByaXZhdGUgZmllbGRzXG4gICAgdGhpcy5fdmFsdWUgPSBvcHRpb25zLnNlbGVjdGVkIHx8IG9wdGlvbnMub3B0aW9uc1swXS52YWx1ZTtcbiAgICB0aGlzLl9wcmV2aW91cyA9IHRoaXMuX3ZhbHVlO1xuICAgIHRoaXMuX2luaXRpYWwgPSB0aGlzLl92YWx1ZTtcbiAgICB0aGlzLl9kaXNhYmxlZE9wdGlvbiA9XG4gICAgICBvcHRpb25zLmRpc2FibGVkT3B0aW9uIHx8XG4gICAgICB7dmFsdWU6IFwiXCIsIHRleHQ6IFwiT2ZmXCIsIGNvbG9yOiBcIiNCOEI4QjhcIn07XG4gICAgdGhpcy5fb25DbGljayA9IG9wdGlvbnMub25DbGljayB8fCAoKGV2ZW50KSA9PiB7fSk7XG4gICAgb3B0aW9ucy5vcHRpb25zLmZvckVhY2goeCA9PiB0aGlzLl9vcHRpb25zLnNldCh4LnZhbHVlLCB4KSk7XG4gICAgLy8gYXNzZXJ0IHZhbGlkIGFyZ3VtZW50c1xuICAgIGlmICh0aGlzLl9vcHRpb25zLmdldCh0aGlzLl92YWx1ZSkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgXCJuZXcgSG92ZXJTZWxlY3QoKTogYHNlbGVjdGVkYCBtdXN0IGhhdmUgYSB2YWxpZCBgb3B0aW9uc2AgdmFsdWUuXCJcbiAgICAgICk7XG4gICAgfVxuICAgIC8vIHJlbmRlciBlbGVtZW50XG4gICAgdGhpcy5fcmVuZGVyKHRoaXMuZWxlbWVudCk7XG4gICAgLy8gYXR0YWNoIGNsYXNzIHRvIGVsZW1lbnRcbiAgICB0aGlzLmVsZW1lbnQuaG92ZXJTZWxlY3QgPSB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB2YWx1ZS5cbiAgICogQHJldHVybiB7b2JqZWN0fVxuICAgKi9cbiAgZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdmFsdWUuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZSAtIFZhbHVlLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgc2V0KHZhbHVlKSB7XG4gICAgdGhpcy5fc2V0U2VsZWN0ZWRPcHRpb24odGhpcy5fZ2V0T3B0aW9uKHZhbHVlKSk7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIHdpZGdldFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuX3NldFNlbGVjdGVkT3B0aW9uKHRoaXMuX2dldE9wdGlvbih0aGlzLl9wcmV2aW91cykpO1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHdpZGdldC5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5fcHJldmlvdXMgPSB0aGlzLl92YWx1ZTtcbiAgICB0aGlzLl9zZXRTZWxlY3RlZE9wdGlvbih0aGlzLl9kaXNhYmxlZE9wdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgd2lkZ2V0IHRvIGluaXRpYWwgc3RhdGUuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLl9zZXRTZWxlY3RlZE9wdGlvbih0aGlzLl9nZXRPcHRpb24odGhpcy5faW5pdGlhbCkpO1xuICB9XG5cbiAgLy8gcHJpdmF0ZSBtZXRob2RzXG5cbiAgLyoqXG4gICAqIEdldCBvcHRpb24uXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZSAtIFZhbHVlLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgX2dldE9wdGlvbih2YWx1ZSkge1xuICAgIGxldCBvdXQgPSB0aGlzLl9vcHRpb25zLmdldCh2YWx1ZSlcbiAgICBpZiAob3V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJgdmFsdWVgIG11c3QgYmUgYSB2YWxpZCBgb3B0aW9uc2AgdmFsdWUuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBzZWxlY3RlZCBvcHRpb24uXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb24gLSBPcHRpb24uXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb24udmFsdWUgLSBWYWx1ZSBmb3Igb3B0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uLnRleHQgLSBUZXh0IHRvIGRpc3BsYXkgZm9yIG9wdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbi5jb2xvciAtIENvbG9yIGZvciBvcHRpb24uXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBfc2V0U2VsZWN0ZWRPcHRpb24ob3B0aW9uKSB7XG4gICAgdGhpcy5fdmFsdWUgPSBvcHRpb24udmFsdWU7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgdGhpcy5fdmFsdWUpO1xuICAgIHRoaXMuZWxlbWVudC5jaGlsZHJlblswXS5jaGlsZHJlblswXS5pbm5lclRleHQgPSBvcHRpb24udGV4dDtcbiAgICB0aGlzLmVsZW1lbnQuY2hpbGRyZW5bMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gb3B0aW9uLmNvbG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gSFRNTCBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgX3JlbmRlcihlbGVtZW50KSB7XG4gICAgLy8gZmluZCBpbml0aWFsIG9wdGlvblxuICAgIGxldCBpbml0aWFsT3B0aW9uID0gdGhpcy5fZ2V0T3B0aW9uKHRoaXMuX2luaXRpYWwpO1xuICAgIC8vIGZpbmQgbG9uZ2VzdCB0ZXh0XG4gICAgbGV0IGxvbmdlc3RUZXh0ID1cbiAgICAgIEFycmF5LmZyb20odGhpcy5fb3B0aW9ucy52YWx1ZXMoKSwgeCA9PiB4LnRleHQpXG4gICAgICAucmVkdWNlKChhLCBiKSA9PiBhLmxlbmd0aCA+IGIubGVuZ3RoID8gYSA6IGIpO1xuICAgIC8vIGluaXRpYWxpemUgZWxlbWVudFxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhvdmVyU2VsZWN0LXdpZGdldFwiKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgaW5pdGlhbE9wdGlvbi52YWx1ZSk7XG4gICAgLy8gY3JlYXRlIGJ1dHRvblxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0LWJ1dHRvblwiKTtcbiAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gaW5pdGlhbE9wdGlvbi5jb2xvcjtcbiAgICAvLyBjcmVhdGUgZWxlbWVudCB0byBzcGVjaWZ5IGJ1dHRvbiB0ZXh0XG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3QtYnV0dG9uLXRleHRcIik7XG4gICAgdGV4dC5pbm5lclRleHQgPSBpbml0aWFsT3B0aW9uLnRleHQ7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIC8vIGNyZWF0ZSBkdW1teSBlbGVtZW50IHRvIGVuc3VyZSBidXR0b24gd2lkdGggcmVtYWlucyBjb25zdGFudCB3aGVuXG4gICAgLy8gZGlmZmVyZW50IG9wdGlvbnMgYXJlIHNlbGVjdGVkXG4gICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3QtYnV0dG9uLXNwYWNlclwiKTtcbiAgICBzcGFuLmlubmVyVGV4dCA9IGxvbmdlc3RUZXh0O1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAvLyBjcmVhdGUgZWxlbWVudHMgZm9yIG9wdGlvbnNcbiAgICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgdWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdC1vcHRpb25zXCIpO1xuICAgIHRoaXMuX29wdGlvbnMuZm9yRWFjaChvcHQgPT4ge1xuICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgIGEuaW5uZXJUZXh0ID0gb3B0LnRleHQ7XG4gICAgICBhLnNldEF0dHJpYnV0ZShcImRhdGEtb3B0aW9uXCIsIG9wdC52YWx1ZSk7XG4gICAgICBhLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3Qtb3B0aW9uXCIpO1xuICAgICAgbGkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSlcbiAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gb3B0aW9uc1xuICAgIHVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIGxldCBlbGVtID0gZXZlbnQudGFyZ2V0O1xuICAgICAgaWYgKGVsZW0ubWF0Y2hlcyhcIi5zZWxlY3Qtb3B0aW9uXCIpKSB7XG4gICAgICAgIC8vIHNlbGVjdCBhY3RpdmUgb3B0aW9uXG4gICAgICAgIHRoaXMuc2V0KGVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1vcHRpb25cIikpO1xuICAgICAgICAvLyBjYWxsIG9uIG9uQ2xpY2sgbWV0aG9kXG4gICAgICAgIHRoaXMuX29uQ2xpY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGFzc2VtYmxlIGVsZW1lbnRcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZCh1bClcbiAgfVxufVxuIiwiLyoqIEltcG9ydCBkZXBlbmRlbmNpZXMgKi9cbi8vIG5vVWlTbGlkZXIgbW9kdWxlXG5pbXBvcnQgbm9VaVNsaWRlciBmcm9tIFwibm91aXNsaWRlclwiO1xuaW1wb3J0IFwibm91aXNsaWRlci9kaXN0L25vdWlzbGlkZXIuY3NzXCI7XG4vLyB1dGlsaXR5IGZ1bmN0aW9uc1xuaW1wb3J0IHt0b0FycmF5fSBmcm9tIFwiLi4vdXRpbHMvbWlzYy5qc1wiO1xuXG4vKiogQ2xhc3MgcmVwcmVzZW50aW5nIGEgc21hcnQgc2xpZGVyLiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU21hcnRTbGlkZXIge1xuXG4gIC8vIHB1YmxpYyBmaWVsZHNcblxuICAvKipcbiAgICogbm9VaVNsaWRlciBvYmplY3QuXG4gICAqIEB0eXBlIHtvYmplY3R9XG4gICAqL1xuICBub1VpU2xpZGVyO1xuXG4gIC8vIHByaXZhdGUgZmllbGRzXG5cbiAgLyoqXG4gICAqIEluaXRpYWwgdmFsdWVzLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgX2luaXRpYWw7XG5cbiAgLyoqXG4gICAqIFByZXZpb3VzIHZhbHVlcy5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIF9wcmV2aW91cztcblxuICAvKipcbiAgKiBDb25zdHJ1Y3QgYSBuZXcgU21hcnRTbGlkZXIgb2JqZWN0LlxuICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBIVE1MIGVsZW1lbnQgZm9yIHNsaWRlci5cbiAgKiBAcGFyYW0ge29iamVjdH0gc2xpZGVyT3B0aW9ucyAtIENvbmZpZ3VyYXRpb24gc2V0dGluZ3MgZm9yIG5vVWlTbGlkZXIuXG4gICogQHBhcmFtIHtvYmplY3R9IGxhYmVsT3B0aW9ucyAtIENvbmZpZ3VyYXRpb24gc2V0dGluZ3MgZm9yIGxhYmVscy5cbiAgKiBAcGFyYW0ge05vZGVMaXN0PEhUTUxFbGVtZW50Pn0gbGFiZWxPcHRpb25zLmxhYmVscyAtIEhUTUwgZWxlbWVudHMgZm9yXG4gICogZm9yIGxhYmVscy4gTm90ZSB0aGF0IHRoZXJlIG11c3QgYmUgYW4gZWxlbWVudCBmb3IgZWFjaCBzbGlkZXIgaGFuZGxlLlxuICAqIEBwYXJhbSB7ZnVuY3Rpb259IGxhYmVsT3B0aW9ucy5mb3JtYXQgLSBGdW5jdGlvbiBmb3IgZm9ybWF0dGluZyBsYWJlbHMuIFRoaXNcbiAgKiBtdXN0IGhhdmUgcGFyYW1ldGVycyBmb3IgYGxhYmVsc2AgYW5kIGB2YWx1ZXNgLlxuICAqIEByZXR1cm4ge3ZvaWR9XG4gICovXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHNsaWRlck9wdGlvbnMsIGxhYmVsT3B0aW9ucykge1xuICAgIC8vIGluaXRpYWxpemUgZmllbGRzXG4gICAgbm9VaVNsaWRlci5jcmVhdGUoZWxlbWVudCwgc2xpZGVyT3B0aW9ucyk7XG4gICAgdGhpcy5ub1VpU2xpZGVyID0gZWxlbWVudC5ub1VpU2xpZGVyO1xuICAgIHRoaXMuX2luaXRpYWwgPSB0b0FycmF5KHRoaXMubm9VaVNsaWRlci5nZXQodHJ1ZSkpO1xuICAgIHRoaXMuX3ByZXZpb3VzID0gdGhpcy5faW5pdGlhbC5zbGljZSgpO1xuICAgIHRoaXMuX2xhYmVscyA9IGxhYmVsT3B0aW9ucy5sYWJlbHM7XG4gICAgdGhpcy5fZm9ybWF0dGVyID0gbGFiZWxPcHRpb25zLmZvcm1hdCB8fCAoKGxhYmVscywgdmFsdWVzKSA9PiB7fSk7XG4gICAgLy8gYXR0YWNoIHRoaXMgb2JqZWN0IHRvIHRoZSBlbGVtZW50XG4gICAgZWxlbWVudC5zbWFydFNsaWRlciA9IHRoaXM7XG4gICAgLy8gdXBkYXRlIGxhYmVscyBvbiBzbGlkZXIgdXBkYXRlXG4gICAgdGhpcy5ub1VpU2xpZGVyLm9uKFwidXBkYXRlXCIsICh2YWx1ZXMsIGhhbmRsZSkgPT4ge1xuICAgICAgdGhpcy5fZm9ybWF0dGVyKHRoaXMuX2xhYmVscywgdmFsdWVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdmFsdWVzLlxuICAgKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fVxuICAgKi9cbiAgZ2V0KCkge1xuICAgIHJldHVybiB0b0FycmF5KHRoaXMubm9VaVNsaWRlci5nZXQodHJ1ZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSB3aWRnZXQuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBlbmFibGUoKSB7XG4gICAgdGhpcy5ub1VpU2xpZGVyLnNldCh0aGlzLl9wcmV2aW91cyk7XG4gICAgdGhpcy5ub1VpU2xpZGVyLmVuYWJsZSgpO1xuICAgIHRoaXMuX2xhYmVscy5mb3JFYWNoKHggPT4geC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSk7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSB3aWRnZXQuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuX3ByZXZpb3VzID0gdG9BcnJheSh0aGlzLm5vVWlTbGlkZXIuZ2V0KHRydWUpKS5zbGljZSgpO1xuICAgIHRoaXMubm9VaVNsaWRlci5zZXQobmV3IEFycmF5KHRoaXMuX2luaXRpYWwubGVuZ3RoKS5maWxsKDApKTtcbiAgICB0aGlzLm5vVWlTbGlkZXIuZGlzYWJsZSgpO1xuICAgIHRoaXMuX2xhYmVscy5mb3JFYWNoKHggPT4geC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgd2lkZ2V0IHRvIGluaXRpYWwgc3RhdGUuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLm5vVWlTbGlkZXIuc2V0KHRoaXMuX2luaXRpYWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBoYW5kbGUgZm9yIHdpZGdldC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gSW5kZXggZm9yIGhhbmRsZS5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGVuYWJsZUhhbmRsZShpbmRleCkge1xuICAgIHRoaXMubm9VaVNsaWRlci5zZXRIYW5kbGUoaW5kZXgsIHRoaXMuX3ByZXZpb3VzW2luZGV4XSk7XG4gICAgdGhpcy5ub1VpU2xpZGVyLmVuYWJsZShpbmRleCk7XG4gICAgdGhpcy5fbGFiZWxzW2luZGV4XS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIGhhbmRsZSBmb3Igd2lkZ2V0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBJbmRleCBmb3IgaGFuZGxlLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgZGlzYWJsZUhhbmRsZShpbmRleCkge1xuICAgIHRoaXMuX3ByZXZpb3VzW2luZGV4XSA9IHRvQXJyYXkodGhpcy5ub1VpU2xpZGVyLmdldCh0cnVlKSlbaW5kZXhdO1xuICAgIHRoaXMubm9VaVNsaWRlci5zZXRIYW5kbGUoaW5kZXgsIDApO1xuICAgIHRoaXMubm9VaVNsaWRlci5kaXNhYmxlKGluZGV4KTtcbiAgICB0aGlzLl9sYWJlbHNbaW5kZXhdLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IGhhbmRsZSBmb3Igd2lkZ2V0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBJbmRleCBmb3IgaGFuZGxlLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgcmVzZXRIYW5kbGUoaW5kZXgpIHtcbiAgICB0aGlzLm5vVWlTbGlkZXIuc2V0SGFuZGxlKGluZGV4LCB0aGlzLl9pbml0aWFsW2luZGV4XSk7XG4gIH1cblxufVxuIiwiLyoqIEltcG9ydCBkZXBlbmRlbmNpZXMgKi9cbi8vIGNsYXNzZXMgdG8gY3JlYXRlIGNvbXBvbmVudHNcbmltcG9ydCBTbWFydFNsaWRlciBmcm9tIFwiLi4vc21hcnRzbGlkZXIvc21hcnRzbGlkZXIuanNcIjtcbmltcG9ydCBIb3ZlclNlbGVjdCBmcm9tIFwiLi4vaG92ZXJzZWxlY3QvaG92ZXJzZWxlY3QuanNcIjtcbi8vIGZ1bmN0aW9ucyB0byBjcmVhdGUgZWxlbWVudHNcbmltcG9ydCB7c2NhZmZvbGRDb3N0U2V0dGluZ30gZnJvbSBcIi4vY29zdC1zZXR0aW5nLXNjYWZmb2xkLmpzXCI7XG4vLyBzdHlsaW5nXG5pbXBvcnQgXCIuL2Nzcy9zZXR0aW5nLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvY29zdC1zZXR0aW5nLmNzc1wiO1xuXG4vKiogQ2xhc3MgcmVwcmVzZW50aW5nIHRoZSBzZXR0aW5nIGZvciBhIHNpbmdsZSBjb3N0LiAqL1xuZXhwb3J0IGNsYXNzIENvc3RTZXR0aW5nIHtcblxuICAvLyBwdWJsaWMgZmllbGRzXG5cbiAgLyoqXG4gICAqIENvc3QgaWRlbnRpZmllci5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGlkO1xuXG4gIC8qKlxuICAgKiBDb3N0IG5hbWUuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBuYW1lO1xuXG4gIC8qKlxuICAgKiBDb3N0IGNvbHVtbi5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGNvbHVtbjtcblxuICAvKipcbiAgICogSFRNTCBlbGVtZW50LlxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBlbGVtZW50O1xuXG4gIC8vIHByaXZhdGUgZmllbGRzXG5cbiAgLyoqXG4gICAqIFNsaWRlciByYW5nZS5cbiAgICogQHR5cGUge29iamVjdH1cbiAgICovXG4gIF9zbGlkZXJSYW5nZTtcblxuICAvKipcbiAgICogU2xpZGVyIHN0ZXAuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBfc2xpZGVyU3RlcDtcblxuICAvLyBwcml2YXRlIEhUTUwgZmllbGRzXG5cbiAgLyoqXG4gICAqIEhvdmVyIHNlbGVjdCBlbGVtZW50LlxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBfc2VsZWN0O1xuXG4gIC8qKlxuICAgKiBub1VpU2xpZGVyIGVsZW1lbnQuXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIF9zbGlkZXI7XG5cbiAgLyoqXG4gICAqIFN3aXRjaCBlbGVtZW50LlxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBfc3dpdGNoO1xuXG4gIC8qKlxuICAqIENvbnN0cnVjdCBhIG5ldyBDb3N0U2V0dGluZyBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gY29zdCAtIENvc3Qgb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IGNvc3QuaWQgLSBVbmlxdWUgaWRlbnRpZmllci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb3N0Lm5hbWUgLSBOYW1lLlxuICogQHBhcmFtIHtzdHJpbmd9IGNvc3Qud2VpZ2h0IC0gV2VpZ2h0IHZhbHVlLlxuICogQHBhcmFtIHtzdHJpbmd9IGNvc3QubGF5ZXIuY29sdW1uIC0gQ29sdW1uIHdpdGggZGF0YS5cbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gem9uZXMgLSBBcnJheSBvZiB6b25lIG5hbWVzLlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBjb3N0V2VpZ2h0Q2hvaWNlcyAtIEFycmF5IG9mIG51bWJlcnMgdXNlZCB0b1xuICogZGVmaW5lIHRoZSBwb3RlbnRpYWwgdmFsdWVzIGZvciBzZXR0aW5nIGNvc3Qgd2VpZ2h0cy5cbiAgKiBAcmV0dXJuIHt2b2lkfVxuICAqL1xuICBjb25zdHJ1Y3Rvcihjb3N0LCB6b25lcywgY29zdFdlaWdodENob2ljZXMpIHtcbiAgICAvLyBpbml0aWFsaXplIHB1YmxpYyBmaWVsZHNcbiAgICB0aGlzLmlkID0gY29zdC5pZDtcbiAgICB0aGlzLm5hbWUgPSBjb3N0Lm5hbWU7XG4gICAgdGhpcy5jb2x1bW4gPSBjb3N0LmxheWVyLmNvbHVtbjtcbiAgICB0aGlzLmVsZW1lbnQgPSBzY2FmZm9sZENvc3RTZXR0aW5nKGNvc3QsIHpvbmVzLCBjb3N0V2VpZ2h0Q2hvaWNlcyk7XG4gICAgLy8gaW5pdGlhbGl6ZSBwcml2YXRlIGZpZWxkc1xuICAgIHRoaXMuX3NsaWRlclJhbmdlID0ge1xuICAgICAgXCJtaW5cIjogY29zdFdlaWdodENob2ljZXNbMF0sXG4gICAgICBcIm1heFwiOiBjb3N0V2VpZ2h0Q2hvaWNlc1sxXVxuICAgIH07XG4gICAgdGhpcy5fc2xpZGVyU3RlcCA9IGNvc3RXZWlnaHRDaG9pY2VzWzJdO1xuICAgIC8vIGluaXRpYWxpemUgcHJpdmF0ZSBIVE1MIGZpZWxkc1xuICAgIHRoaXMuX3NlbGVjdCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnpvbmUtc3RhdHVzXCIpO1xuICAgIHRoaXMuX3NsaWRlciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLndlaWdodC1zbGlkZXJcIik7XG4gICAgdGhpcy5fc3dpdGNoID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3dpdGNoXCIpO1xuICAgIC8vIGluaXRpYWxpemUgc2VsZWN0IHdpZGdldFxuICAgIG5ldyBIb3ZlclNlbGVjdCh0aGlzLl9zZWxlY3QsIHtcbiAgICAgIHNlbGVjdGVkOiBjb3N0LnpvbmUsXG4gICAgICBvcHRpb25zOiB6b25lcy5tYXAoeCA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IHgsXG4gICAgICAgICAgdGV4dDogeCxcbiAgICAgICAgICBjb2xvcjogYHZhcigtLXpvbmUtJHt4fS1wcmltYXJ5YFxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGRpc2FibGVkT3B0aW9uOiB7dmFsdWU6IFwiXCIsIHRleHQ6IFwiT2ZmXCIsIGNvbG9yOiBcInZhcigtLWRpc2FibGVkKVwifVxuICAgIH0pO1xuICAgIC8vIGluaXRpYWxpemUgc2xpZGVyIHdpZGdldFxuICAgIG5ldyBTbWFydFNsaWRlcihcbiAgICAgIHRoaXMuX3NsaWRlcixcbiAgICAgIHtcbiAgICAgICAgcmFuZ2U6IHRoaXMuX3NsaWRlclJhbmdlLFxuICAgICAgICBzdGVwOiB0aGlzLl9zbGlkZXJTdGVwLFxuICAgICAgICBiZWhhdmlvdXI6IFwiZHJhZ1wiLFxuICAgICAgICBjb25uZWN0OiBcImxvd2VyXCIsXG4gICAgICAgIHN0YXJ0OiBjb3N0LndlaWdodFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWxzOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53ZWlnaHQtbGFiZWxcIiksXG4gICAgICAgIGZvcm1hdDogKGxhYmVscywgdmFsdWVzKSA9PiB7XG4gICAgICAgICAgbGFiZWxzWzBdLmlubmVyVGV4dCA9IGBXZWlnaHQ6ICR7TWF0aC5yb3VuZCh2YWx1ZXNbMF0gKiAxMDApfSVgO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAqIEFwcGVuZCB0aGUgSFRNTCBlbGVtZW50IGZvciB0aGUgY2xhc3MgdG8gYW5vdGhlciBIVE1MIGVsZW1lbnQuXG4gICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIEhUTUwgZWxlbWVudC5cbiAgKiBAcmV0dXJuIHt2b2lkfVxuICAqL1xuICBhcHBlbmRUbyhlbGVtZW50KSB7XG4gICAgLy8gc2V0IGV2ZW50IGhhbmRsZXIgZm9yIHRvZ2dsZVxuICAgIHRoaXMuX3N3aXRjaC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBhcHBlbmQgdG8gZWxlbWVudFxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgem9uZS5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHpvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdC5ob3ZlclNlbGVjdC5nZXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgd2VpZ2h0XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldCB3ZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NsaWRlci5zbWFydFNsaWRlci5nZXQoKVswXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgd2lkZ2V0XG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBlbmFibGUoKSB7XG4gICAgdGhpcy5fc2xpZGVyLnNtYXJ0U2xpZGVyLmVuYWJsZSgpO1xuICAgIHRoaXMuX3NlbGVjdC5ob3ZlclNlbGVjdC5lbmFibGUoKTtcbiAgICB0aGlzLl9zd2l0Y2guY2hlY2tlZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSB3aWRnZXQuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuX3NsaWRlci5zbWFydFNsaWRlci5kaXNhYmxlKCk7XG4gICAgdGhpcy5fc2VsZWN0LmhvdmVyU2VsZWN0LmRpc2FibGUoKTtcbiAgICB0aGlzLl9zd2l0Y2guY2hlY2tlZCA9IGZhbHNlO1xuICB9XG5cbn1cbiIsIi8qKiBJbXBvcnQgZGVwZW5kZW5jaWVzICovXG4vLyBmdW5jdGlvbnMgdG8gY3JlYXRlIGVsZW1lbnRzXG5pbXBvcnQge2NyZWF0ZU5hbWVMYWJlbH0gZnJvbSBcIi4uL3V0aWxzL2VsZW1lbnQuanNcIjtcbmltcG9ydCB7Y3JlYXRlUHJvdmVuYW5jZX0gZnJvbSBcIi4uL3V0aWxzL2VsZW1lbnQuanNcIjtcbmltcG9ydCB7Y3JlYXRlU3dpdGNoZXN9IGZyb20gXCIuLi91dGlscy9lbGVtZW50LmpzXCI7XG5pbXBvcnQge2FkZFRvb2x0aXB9IGZyb20gXCIuLi91dGlscy9lbGVtZW50LmpzXCI7XG5cbi8qKlxuICogQ3JlYXRlIGEgY29zdCBzZXR0aW5nLlxuICogQHBhcmFtIHtPYmplY3R9IGNvc3QgLSBDb3N0IG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb3N0Lm5hbWUgLSBGZWF0dXJlIG5hbWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gY29zdC56b25lIC0gWm9uZSBuYW1lLlxuICogQHBhcmFtIHtudW1iZXJ9IGNvc3Qud2VpZ2h0IC0gV2VpZ2h0IHZhbHVlLlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB6b25lcyAtIFpvbmUgbmFtZXMuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGNvc3RXZWlnaHRDaG9pY2VzIC0gQXJyYXkgb2YgY2hvaWNlcyBmb3IgY29zdCB3ZWlnaHRzLlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FmZm9sZENvc3RTZXR0aW5nKGNvc3QsIHpvbmVzLCBjb3N0V2VpZ2h0Q2hvaWNlcykge1xuICAvLyBjcmVhdGUgZWxlbWVudFxuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbC5jbGFzc0xpc3QuYWRkKFwiY29zdC1zZXR0aW5nXCIsIFwic2V0dGluZ1wiKTtcbiAgLy8gc2V0IGRhdGEgaWQgYXR0cmlidXRlIGZvciBmZWF0dXJlIGlkXG4gIGVsLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgY29zdC5pZCk7XG4gIC8vIGNyZWF0ZSBmZWF0dXJlIHNldHRpbmcgaGVhZGVyXG4gIGVsLmFwcGVuZENoaWxkKGNvc3RTZXR0aW5nSGVhZGVyKGNvc3QsIHpvbmVzKSk7XG4gIC8vIGNyZWF0ZSBmZWF0dXJlIHNldHRpbmcgd2VpZ2h0c1xuICBlbC5hcHBlbmRDaGlsZChjb3N0U2V0dGluZ0JvZHkoY29zdCwgem9uZXMsIGNvc3RXZWlnaHRDaG9pY2VzKSk7XG4gIC8vIHJldHVybiBlbGVtZW50XG4gIHJldHVybiBlbDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBoZWFkZXIgY29tcG9uZW50IGZvciBhIGNvc3Qgc2V0dGluZy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb3N0IC0gQ29zdCBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gY29zdC5uYW1lIC0gRmVhdHVyZSBuYW1lLlxuICogQHBhcmFtIHtzdHJpbmd9IGNvc3Quem9uZSAtIFpvbmUgbmFtZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBjb3N0LndlaWdodCAtIFdlaWdodCB2YWx1ZS5cbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gem9uZXMgLSBab25lIG5hbWVzLlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGNvc3RTZXR0aW5nSGVhZGVyKGNvc3QsIHpvbmVzKSB7XG4gIC8vIGNyZWF0ZSBjb250YWluZXJcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWwuY2xhc3NMaXN0LmFkZChcImNvc3QtaGVhZGVyXCIsIFwiaGVhZGVyXCIpO1xuICAvLyBjcmVhdGUgY29udGFpbmVyIGZvciBzd2l0Y2hcbiAgbGV0IHN3aXRjaEVsZW1lbnQgPSBjcmVhdGVTd2l0Y2hlcygxKTtcbiAgLy8gY3JlYXRlIG5hbWUgZWxlbWVudFxuICBsZXQgbmFtZUVsZW1lbnQgPSBjcmVhdGVOYW1lTGFiZWwoY29zdCk7XG4gIC8vIGNyZWF0ZSBwcm92ZW5hbmNlIGVsZW1lbnRcbiAgbGV0IHByb3ZlbmFuY2VFbGVtZW50ID0gY3JlYXRlUHJvdmVuYW5jZShjb3N0LmxheWVyLnByb3ZlbmFuY2UpO1xuICAvLyBhcHBlbmQgZWxlbWVudHNcbiAgZWwuYXBwZW5kQ2hpbGQoc3dpdGNoRWxlbWVudCk7XG4gIGVsLmFwcGVuZENoaWxkKG5hbWVFbGVtZW50KTtcbiAgZWwuYXBwZW5kQ2hpbGQocHJvdmVuYW5jZUVsZW1lbnQpO1xuICAvLyByZXR1cm4gZWxlbWVudFxuICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgYm9keSBjb21wb25lbnQgZm9yIGEgY29zdCBzZXR0aW5nLlxuICogQHBhcmFtIHtPYmplY3R9IGNvc3QgLSBDb3N0IG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb3N0Lm5hbWUgLSBGZWF0dXJlIG5hbWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gY29zdC56b25lIC0gWm9uZSBuYW1lLlxuICogQHBhcmFtIHtudW1iZXJ9IGNvc3Qud2VpZ2h0IC0gV2VpZ2h0IHZhbHVlLlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB6b25lcyAtIFpvbmUgbmFtZXMuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGNvc3RXZWlnaHRDaG9pY2VzIC0gQXJyYXkgb2YgY2hvaWNlcyBmb3IgY29zdCB3ZWlnaHRzLlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGNvc3RTZXR0aW5nQm9keShjb3N0LCB6b25lcywgY2hvaWNlcykge1xuICAvLyBpbml0aWFsaXplIGVsZW1lbnRcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBlbC5jbGFzc0xpc3QuYWRkKFwiY29zdC1ib2R5XCIpO1xuICAvLyBjcmVhdGUgbGFiZWwgd2VpZ2h0IHZhbHVlXG4gIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwuY2xhc3NMaXN0LmFkZChcIndlaWdodC1sYWJlbFwiKTtcbiAgYWRkVG9vbHRpcChsYWJlbCwgXCJXZWlnaHQgdmFsdWUgZm9yIGNvc3RcIik7XG4gIC8vIGNyZWF0ZSBlbGVtZW50IGZvciBob3ZlciBzZWxlY3RcbiAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlbGVjdC5jbGFzc0xpc3QuYWRkKFwiem9uZS1zdGF0dXNcIik7XG4gIGFkZFRvb2x0aXAoXG4gICAgc2VsZWN0LFxuICAgIFwiU3BlY2lmeSB3aGljaCB6b25lIHRoYXQgc29sdXRpb25zIHNob3VsZCBwcmVmZXIgdG8gYWxsb2NhdGUgXCIgK1xuICAgIFwicGxhbm5pbmcgdW5pdHMgdG8gd2hlbiBjb25zaWRlcmluZyB0aGlzIGNvc3QuXCJcbiAgKTtcbiAgLy8gY3JlYXRlIHNsaWRlciBlbGVtZW50XG4gIGxldCBzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzbGlkZXIuY2xhc3NMaXN0LmFkZChcIndlaWdodC1zbGlkZXJcIik7XG4gIC8vIHJldHVybiBlbGVtZW50XG4gIGVsLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgZWwuYXBwZW5kQ2hpbGQoc2xpZGVyKTtcbiAgZWwuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgcmV0dXJuIGVsO1xufVxuIiwiLyoqIEltcG9ydCBkZXBlbmRlbmNpZXMgKi9cbi8vIGNsYXNzZXMgdG8gY3JlYXRlIGNvbXBvbmVudHNcbmltcG9ydCB7Q29zdFNldHRpbmd9IGZyb20gXCIuL2Nvc3Qtc2V0dGluZy1jbGFzcy5qc1wiO1xuLy8gc3R5bGluZ1xuaW1wb3J0IFwiLi9jc3Mvc2V0dGluZ3MuY3NzXCI7XG5cbi8qKiBDbGFzcyByZXByZXNlbnRpbmcgdGhlIHNldHRpbmdzIGZvciBtdWx0aXBsZSBjb3N0LiAqL1xuZXhwb3J0IGNsYXNzIENvc3RTZXR0aW5ncyB7XG5cbiAgLy8gcHJpdmF0ZSBmaWVsZHNcblxuICAvKipcbiAgICogQXJyYXkgb2Ygc2V0dGluZ3MuXG4gICAqIEB0eXBlIHtBcnJheTxDb3N0U2V0dGluZ3M+fVxuICAgKi9cbiAgX3NldHRpbmdzID0gW107XG5cbiAgLyoqXG4gICogQ29uc3RydWN0IGEgbmV3IENvc3RTZXR0aW5ncyBvYmplY3QuXG4gICogQHBhcmFtIHtPYmplY3R9IHByb2plY3QgLSBPYmplY3Qgd2l0aCB2YXJpb3VzIHR5cGVzIG9mIG9iamVjdHMuXG4gICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBwcm9qZWN0LmNvc3RzIC0gQXJyYXkgb2YgZmVhdHVyZSBvYmplY3RzLlxuICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gY29zdFdlaWdodENob2ljZXMgLSBBcnJheSBvZiBudW1iZXJzIHVzZWQgdG9cbiAgKiBkZWZpbmUgdGhlIHBvdGVudGlhbCB2YWx1ZXMgZm9yIHNldHRpbmcgY29zdCB3ZWlnaHRzLlxuICAqIEByZXR1cm4ge3ZvaWR9XG4gICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3QsIGNvc3RXZWlnaHRDaG9pY2VzKSB7XG4gICAgLy8gY3JlYXRlIGNvc3Qgc2V0dGluZyBvYmplY3RzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LmNvc3RzLmxlbmd0aDsgKytpKSB7XG4gICAgICB0aGlzLl9zZXR0aW5ncy5wdXNoKFxuICAgICAgICBuZXcgQ29zdFNldHRpbmcocHJvamVjdC5jb3N0c1tpXSwgcHJvamVjdC56b25lcywgY29zdFdlaWdodENob2ljZXMpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAqIEFwcGVuZCB0aGUgSFRNTCBlbGVtZW50IGZvciB0aGUgY2xhc3MgdG8gYW5vdGhlciBIVE1MIGVsZW1lbnQuXG4gICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIEhUTUwgZWxlbWVudC5cbiAgKiBAcmV0dXJuIHt2b2lkfVxuICAqL1xuICBhcHBlbmRUbyhlbGVtZW50KSB7XG4gICAgLy8gY3JlYXRlIGNvbnRhaW5lclxuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJlbFwiKTtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKFwiY29zdC1zZXR0aW5nc1wiLCBcInNldHRpbmdzXCIpO1xuICAgIC8vIGNyZWF0ZSBtZW51IGVsZW1lbnRcbiAgICBsZXQgbWVudUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjb3N0LW1lbnVcIik7XG4gICAgLy8gY3JlYXRlIGNvc3Qgb2JqZWN0cyBhbmQgYWRkIHRoZW0gdG8gdGhlIG1lbnVcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3NldHRpbmdzLmxlbmd0aDsgKytpKSB7XG4gICAgICB0aGlzLl9zZXR0aW5nc1tpXS5hcHBlbmRUbyhtZW51RWxlbWVudCk7XG4gICAgfVxuICAgIC8vIGFwcGVuZCBlbGVtZW50cyB0byBjb250YWluZXJcbiAgICBlbC5hcHBlbmRDaGlsZChtZW51RWxlbWVudCk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbCk7XG4gIH1cblxuICAvKipcbiAgKiBHZXQgc2V0dGluZ3MgZm9yIGdlbmVyYXRpbmcgYSBzb2x1dGlvbi5cbiAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICovXG4gIGdldFNldHRpbmdzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5fc2V0dGluZ3MubWFwKHggPT4geC5pZCksXG4gICAgICBuYW1lOiB0aGlzLl9zZXR0aW5ncy5tYXAoeCA9PiB4Lm5hbWUpLFxuICAgICAgY29sdW1uOiB0aGlzLl9zZXR0aW5ncy5tYXAoeCA9PiB4LmNvbHVtbiksXG4gICAgICB6b25lOiB0aGlzLl9zZXR0aW5ncy5tYXAoeCA9PiB4LnpvbmUpLFxuICAgICAgd2VpZ2h0OiB0aGlzLl9zZXR0aW5ncy5tYXAoeCA9PiB4LndlaWdodClcbiAgICB9O1xuICB9XG5cbn1cbiIsIi8qKiBJbXBvcnQgZGVwZW5kZW5jaWVzICovXG4vLyBjbGFzc2VzIHRvIGNyZWF0ZSBjb21wb25lbnRzXG5pbXBvcnQgU21hcnRTbGlkZXIgZnJvbSBcIi4uL3NtYXJ0c2xpZGVyL3NtYXJ0c2xpZGVyLmpzXCI7XG5pbXBvcnQgSG92ZXJTZWxlY3QgZnJvbSBcIi4uL2hvdmVyc2VsZWN0L2hvdmVyc2VsZWN0LmpzXCI7XG5pbXBvcnQgU3RhdHVzQmFyIGZyb20gXCIuLi9zdGF0dXNiYXIvc3RhdHVzYmFyLmpzXCI7XG4vLyBmdW5jdGlvbnMgdG8gY3JlYXRlIGVsZW1lbnRzXG5pbXBvcnQge3NjYWZmb2xkRmVhdHVyZVNldHRpbmd9IGZyb20gXCIuL2ZlYXR1cmUtc2V0dGluZy1zY2FmZm9sZC5qc1wiO1xuaW1wb3J0IHtjcmVhdGVOYW1lTGFiZWx9IGZyb20gXCIuLi91dGlscy9lbGVtZW50LmpzXCI7XG5pbXBvcnQge2NyZWF0ZVByb3ZlbmFuY2V9IGZyb20gXCIuLi91dGlscy9lbGVtZW50LmpzXCI7XG5pbXBvcnQge2NyZWF0ZVN3aXRjaGVzfSBmcm9tIFwiLi4vdXRpbHMvZWxlbWVudC5qc1wiO1xuaW1wb3J0IHthZGRUb29sdGlwfSBmcm9tIFwiLi4vdXRpbHMvZWxlbWVudC5qc1wiO1xuLy8gc3R5bGluZ1xuaW1wb3J0IFwiLi9jc3Mvc2V0dGluZy5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL2ZlYXR1cmUtc2V0dGluZy5jc3NcIjtcbi8vIHV0aWxpdHkgZnVuY3Rpb25zXG5pbXBvcnQge29yZGVyfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiO1xuaW1wb3J0IHtjb252ZXJ0VGFyZ2V0c1RvU2xpZGVyVmFsdWVzfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiO1xuaW1wb3J0IHtjb252ZXJ0U2xpZGVyVmFsdWVzVG9UYXJnZXRzfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiO1xuXG4vKiogQ2xhc3MgcmVwcmVzZW50aW5nIHRoZSBzZXR0aW5nIGZvciBhIHNpbmdsZSBmZWF0dXJlLiAqL1xuZXhwb3J0IGNsYXNzIEZlYXR1cmVTZXR0aW5nIHtcblxuICAvLyBwdWJsaWMgZmllbGRzXG5cbiAgLyoqXG4gICAqIEZlYXR1cmUgaWRlbnRpZmllci5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGlkO1xuXG4gIC8qKlxuICAgKiBGZWF0dXJlIG5hbWUuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBuYW1lO1xuXG4gIC8qKlxuICAgKiBGZWF0dXJlIGNvbHVtbi5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGNvbHVtbjtcblxuICAvKipcbiAgKiBIVE1MIGVsZW1lbnQuXG4gICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAqL1xuICBlbGVtZW50O1xuXG4gIC8vIHByaXZhdGUgZmllbGRzXG5cbiAgLyoqXG4gICAqIEFycmF5IG9mIHpvbmUgbmFtZXMuXG4gICAqIEB0eXBlIHtBcnJheTxzdHJpbmc+fVxuICAgKi9cbiAgX3pvbmVzO1xuXG4gIC8qKlxuICAgKiBTbGlkZXIgZWxlbWVudC5cbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgX3NsaWRlcjtcblxuICAvKipcbiAgICogU3RhdHVzIGJhciBlbGVtZW50LlxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBfc3RhdHVzO1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGhvdmVyIHNlbGVjdCBlbGVtZW50cy5cbiAgICogQHR5cGUge05vZGVMaXN0PEhUTUxFbGVtZW50Pn1cbiAgICovXG4gIF9zZWxlY3RzO1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIHN3aXRjaCBlbGVtZW50cy5cbiAgICogQHR5cGUge05vZGVMaXN0PEhUTUxFbGVtZW50Pn1cbiAgICovXG4gIF9zZWxlY3RzO1xuXG4gIC8qKlxuICAgKiBTbGlkZXIgcmFuZ2UuXG4gICAqIEB0eXBlIHtvYmplY3R9XG4gICAqL1xuICBfc2xpZGVyUmFuZ2U7XG5cbiAgLyoqXG4gICAqIFNsaWRlciBzdGVwLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgX3NsaWRlclN0ZXA7XG5cbiAgLyoqXG4gICogQ29uc3RydWN0IGEgbmV3IEZlYXR1cmVTZXR0aW5nIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBmZWF0dXJlIC0gRmVhdHVyZSBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gZmVhdHVyZS5pZCAtIFVuaXF1ZSBpZGVudGlmaWVyLlxuICogQHBhcmFtIHtzdHJpbmd9IGZlYXR1cmUubmFtZSAtIE5hbWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZmVhdHVyZS5sYXllci5jb2x1bW4gLSBDb2x1bW4gd2l0aCBkYXRhLlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmZWF0dXJlLnpvbmVfdGFyZ2V0cyAtIEluaXRpYWwgdGFyZ2V0IHZhbHVlcy5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmVhdHVyZS56b25lX3dlaWdodHMgLSBJbml0aWFsIHdlaWdodHMgdmFsdWVzLlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB6b25lcyAtIEFycmF5IG9mIHpvbmUgbmFtZXMuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZlYXR1cmVUYXJnZXRDaG9pY2VzIC0gQXJyYXkgb2YgbnVtYmVycyB1c2VkIHRvXG4gKiBkZWZpbmUgdGhlIHBvdGVudGlhbCB2YWx1ZXMgZm9yIHNldHRpbmcgZmVhdHVyZSB0YXJnZXRzLlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmZWF0dXJlV2VpZ2h0Q2hvaWNlcyAtIEFycmF5IG9mIG51bWJlcnMgdXNlZCB0b1xuICogZGVmaW5lIHRoZSBwb3RlbnRpYWwgdmFsdWVzIGZvciBzZXR0aW5nIGZlYXR1cmUgd2VpZ2h0cy5cbiAgKiBAcmV0dXJuIHt2b2lkfVxuICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBmZWF0dXJlLCB6b25lcywgZmVhdHVyZVRhcmdldENob2ljZXMsIGZlYXR1cmVXZWlnaHRDaG9pY2VzXG4gICkge1xuICAgIC8vIGluaXRpYWxpemUgcHVibGljIGZpZWxkc1xuICAgIHRoaXMuaWQgPSBmZWF0dXJlLmlkO1xuICAgIHRoaXMubmFtZSA9IGZlYXR1cmUubmFtZTtcbiAgICB0aGlzLmNvbHVtbiA9IGZlYXR1cmUubGF5ZXIuY29sdW1uO1xuICAgIHRoaXMuZWxlbWVudCA9IHNjYWZmb2xkRmVhdHVyZVNldHRpbmcoXG4gICAgICBmZWF0dXJlLCB6b25lcywgZmVhdHVyZVRhcmdldENob2ljZXMsIGZlYXR1cmVXZWlnaHRDaG9pY2VzXG4gICAgKTtcbiAgICAvLyBpbml0aWFsaXplIHByaXZhdGUgZmllbGRzXG4gICAgdGhpcy5fem9uZXMgPSB6b25lcztcbiAgICB0aGlzLl9zbGlkZXJSYW5nZSA9IHtcbiAgICAgIFwibWluXCI6IGZlYXR1cmVUYXJnZXRDaG9pY2VzWzBdLFxuICAgICAgXCJtYXhcIjogZmVhdHVyZVRhcmdldENob2ljZXNbMV1cbiAgICB9O1xuICAgIHRoaXMuX3NsaWRlclN0ZXAgPSBmZWF0dXJlVGFyZ2V0Q2hvaWNlc1syXTtcbiAgICAvLyBpbml0aWFsaXplIHByaXZhdGUgSFRNTCBmaWVsZHNcbiAgICB0aGlzLl9zbGlkZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXJnZXQtc2xpZGVyXCIpO1xuICAgIHRoaXMuX3N0YXR1cyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXR1cy1iYXJcIik7XG4gICAgdGhpcy5fc3dpdGNoZXMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zd2l0Y2hcIik7XG4gICAgdGhpcy5fc2VsZWN0cyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndlaWdodC1zdGF0dXNcIik7XG4gICAgLy8gaW5pdGlhbGl6ZSBzbGlkZXIgd2lkZ2V0XG4gICAgbmV3IFNtYXJ0U2xpZGVyKFxuICAgICAgdGhpcy5fc2xpZGVyLFxuICAgICAge1xuICAgICAgICByYW5nZTogdGhpcy5fc2xpZGVyUmFuZ2UsXG4gICAgICAgIHN0ZXA6IHRoaXMuX3NsaWRlclN0ZXAsXG4gICAgICAgIGJlaGF2aW91cjogXCJ1bmNvbnN0cmFpbmVkLWRyYWdcIixcbiAgICAgICAgY29ubmVjdDpcbiAgICAgICAgICBuZXcgQXJyYXkoem9uZXMubGVuZ3RoICsgMSkuZmlsbCh0cnVlKS53aXRoKHpvbmVzLmxlbmd0aCwgZmFsc2UpLFxuICAgICAgICBzdGFydDogY29udmVydFRhcmdldHNUb1NsaWRlclZhbHVlcyhmZWF0dXJlLnpvbmVfdGFyZ2V0cylcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsczogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFyZ2V0LWxhYmVsXCIpLFxuICAgICAgICBmb3JtYXQ6IChsYWJlbHMsIHZhbHVlcykgPT4ge1xuICAgICAgICAgIC8vIHVwZGF0ZSB0YXJnZXQgbGFiZWxzXG4gICAgICAgICAgbGV0IHYgPSBjb252ZXJ0U2xpZGVyVmFsdWVzVG9UYXJnZXRzKHZhbHVlcyk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsYWJlbHNbaV0uaW5uZXJUZXh0ID0gYFRhcmdldDogJHtNYXRoLnJvdW5kKHZbaV0gKiAxMDApfSVgO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gICAgLy8gc2V0IHVwZGF0ZSBoYW5kbGVyIHRvIHJlY29sb3IgY29ubmVjdCBlbGVtZW50cyBvZiB0aGUgc2xpZGVyXG4gICAgbGV0IGNvbm5lY3RzID0gdGhpcy5fc2xpZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubm9VaS1jb25uZWN0XCIpO1xuICAgIHRoaXMuX3NsaWRlci5ub1VpU2xpZGVyLm9uKFwidXBkYXRlXCIsICh2YWx1ZXMsIGhhbmRsZSkgPT4ge1xuICAgICAgLy8gcnVuIGNhbGN1bGF0aW9uc1xuICAgICAgbGV0IHYgPSB2YWx1ZXMubWFwKE51bWJlcik7XG4gICAgICBsZXQgbyA9IG9yZGVyKHYpO1xuICAgICAgLy8gdXBkYXRlIGNvbm5lY3QgZWxlbWVudHNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdi5sZW5ndGg7ICsraSkge1xuICAgICAgICBjb25uZWN0c1tpXS5zdHlsZS5iYWNrZ3JvdW5kID0gYHZhcigtLXpvbmUtJHt6b25lc1tvW2ldXX0tcHJpbWFyeSlgO1xuICAgICAgICBjb25uZWN0c1tpXS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKDAlLCAwcHgpIHNjYWxlKCR7dltvW2ldXX0sIDEpYDtcbiAgICAgICAgY29ubmVjdHNbaV0uc3R5bGVbXCJ6LWluZGV4XCJdID0gdi5sZW5ndGggLSBpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGNvbG9yIHRoZSBoYW5kbGVzXG4gICAgbGV0IGhhbmRsZXMgPSB0aGlzLl9zbGlkZXIucXVlcnlTZWxlY3RvckFsbChcIi5ub1VpLWhhbmRsZVwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3pvbmVzLmxlbmd0aDsgKytpKSB7XG4gICAgICBoYW5kbGVzW2ldLnN0eWxlLmJhY2tncm91bmQgPSBgdmFyKC0tem9uZS0ke3RoaXMuX3pvbmVzW2ldfS1wcmltYXJ5KWA7XG4gICAgfVxuICAgIC8vIGluaXRpYWxpemUgc2VsZWN0IHdpZGdldHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3pvbmVzLmxlbmd0aDsgKytpKSB7XG4gICAgICBuZXcgSG92ZXJTZWxlY3QodGhpcy5fc2VsZWN0c1tpXSwge1xuICAgICAgICBzZWxlY3RlZDogU3RyaW5nKGZlYXR1cmUuem9uZV93ZWlnaHRzW2ldKSxcbiAgICAgICAgb3B0aW9uczogZmVhdHVyZVdlaWdodENob2ljZXMubWFwKHggPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogU3RyaW5nKHgpLFxuICAgICAgICAgICAgdGV4dDogYFdlaWdodDogJHt4ICogMTAwfSVgLFxuICAgICAgICAgICAgY29sb3I6IGB2YXIoLS16b25lLSR7em9uZXNbaV19LXByaW1hcnlgXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZGlzYWJsZWRPcHRpb246IHtcbiAgICAgICAgICB2YWx1ZTogXCIwXCIsIHRleHQ6IGBXZWlnaHQ6IDAlYCwgY29sb3I6IFwidmFyKC0tZGlzYWJsZWQpXCJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIGluaXRpYWxpemUgc3RhdHVzIGJhciB3aWRnZXRcbiAgICBuZXcgU3RhdHVzQmFyKHRoaXMuX3N0YXR1cywge1xuICAgICAgdmFsdWVzOiBmZWF0dXJlLnpvbmVfaGVsZHMsXG4gICAgICBjb2xvcnM6IHRoaXMuX3pvbmVzLm1hcCh4ID0+IGB2YXIoLS16b25lLSR7eH0tc2Vjb25kYXJ5KWApLFxuICAgICAgbGFiZWxzOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWxkLWxhYmVsXCIpLFxuICAgICAgZm9ybWF0OiAobGFiZWxzLCB2YWx1ZXMpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYWJlbHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBsYWJlbHNbaV0uaW5uZXJUZXh0ID0gYExvY2s6ICR7TWF0aC5yb3VuZCh2YWx1ZXNbaV0gKiAxMDApfSVgO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gc2V0IGV2ZW50IGhhbmRsZXJzIGZvciBzd2l0Y2hlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgem9uZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHRoaXMuX3N3aXRjaGVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgIHRoaXMuX3NsaWRlci5zbWFydFNsaWRlci5lbmFibGVIYW5kbGUoaSk7XG4gICAgICAgICAgdGhpcy5fc2VsZWN0c1tpXS5ob3ZlclNlbGVjdC5lbmFibGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9zbGlkZXIuc21hcnRTbGlkZXIuZGlzYWJsZUhhbmRsZShpKTtcbiAgICAgICAgICB0aGlzLl9zZWxlY3RzW2ldLmhvdmVyU2VsZWN0LmRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICogQXBwZW5kIHRoZSBIVE1MIGVsZW1lbnQgZm9yIHRoZSBjbGFzcyB0byBhbm90aGVyIEhUTUwgZWxlbWVudC5cbiAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gSFRNTCBlbGVtZW50LlxuICAqIEByZXR1cm4ge3ZvaWR9XG4gICovXG4gIGFwcGVuZFRvKGVsZW1lbnQpIHtcbiAgICAvLyBhcHBlbmQgdG8gZWxlbWVudFxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUYXJnZXQgdmFsdWVzIGZvciBlYWNoIHpvbmUuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgdGFyZ2V0cygpIHtcbiAgICByZXR1cm4gY29udmVydFNsaWRlclZhbHVlc1RvVGFyZ2V0cyh0aGlzLl9zbGlkZXIuc21hcnRTbGlkZXIuZ2V0KCkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBXZWlnaHQgdmFsdWVzIGZvciBlYWNoIHpvbmUuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgd2VpZ2h0cygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLl9zZWxlY3RzLCB4ID0+IE51bWJlcih4LmhvdmVyU2VsZWN0LmdldCgpKSk7XG4gIH07XG5cbiAgLyoqXG4gICogU2V0IGFtb3VudCBoZWxkIGZvciBlYWNoIGZlYXR1cmUuXG4gICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSAtIE5ldyBoZWxkIHZhbHVlcy5cbiAgKiBAcmV0dXJuIHt2b2lkfVxuICAqL1xuICBzZXRIZWxkU3RhdHVzKHZhbHVlcykge1xuICAgIHRoaXMuX3N0YXR1cy5zdGF0dXNCYXIuc2V0KHZhbHVlcyk7XG4gIH1cblxuICAvKipcbiAgKiBJbmNyZW1lbnQgdGhlIHRhcmdldCBmb3IgYSB6b25lLlxuICAqIEBwYXJhbSB7c3RyaW5nfSB6b25lIC0gWm9uZSBuYW1lLlxuICAqIEByZXR1cm4ge3ZvaWR9XG4gICovXG4gIGluY3JlbWVudFpvbmVUYXJnZXQoem9uZSkge1xuICAgIGxldCBpID0gdGhpcy5fem9uZXMuaW5kZXhPZih6b25lKTtcbiAgICAvLyBUT0RPXG4gIH1cblxuICAvKipcbiAgKiBEZWNyZW1lbnQgdGhlIHRhcmdldCBmb3IgYSB6b25lLlxuICAqIEBwYXJhbSB7c3RyaW5nfSB6b25lIC0gWm9uZSBuYW1lLlxuICAqIEByZXR1cm4ge3ZvaWR9XG4gICovXG4gIGRlY3JlbWVudFpvbmVUYXJnZXQoem9uZSkge1xuICAgIGxldCBpID0gdGhpcy5fem9uZXMuaW5kZXhPZih6b25lKTtcbiAgICAvLyBUT0RPXG4gIH1cblxuICAvKipcbiAgKiBJbmNyZW1lbnQgdGhlIHdlaWdodCBmb3IgYSB6b25lLlxuICAqIEBwYXJhbSB7c3RyaW5nfSB6b25lIC0gWm9uZSBuYW1lLlxuICAqIEByZXR1cm4ge3ZvaWR9XG4gICovXG4gIGluY3JlbWVudFpvbmVXZWlnaHQoem9uZSkge1xuICAgIGxldCBpID0gdGhpcy5fem9uZXMuaW5kZXhPZih6b25lKTtcbiAgICAvLyBUT0RPXG4gIH1cblxuICAvKipcbiAgKiBEZWNyZW1lbnQgdGhlIHdlaWdodCBmb3IgYSB6b25lLlxuICAqIEBwYXJhbSB7c3RyaW5nfSB6b25lIC0gWm9uZSBuYW1lLlxuICAqIEByZXR1cm4ge3ZvaWR9XG4gICovXG4gIGRlY3JlbWVudFpvbmVXZWlnaHQoem9uZSkge1xuICAgIGxldCBpID0gdGhpcy5fem9uZXMuaW5kZXhPZih6b25lKTtcbiAgICAvLyBUT0RPXG4gIH1cblxufVxuIiwiLyoqIEltcG9ydCBkZXBlbmRlbmNpZXMgKi9cbi8vIGZ1bmN0aW9ucyB0byBjcmVhdGUgZWxlbWVudHNcbmltcG9ydCB7Y3JlYXRlTmFtZUxhYmVsfSBmcm9tIFwiLi4vdXRpbHMvZWxlbWVudC5qc1wiO1xuaW1wb3J0IHtjcmVhdGVQcm92ZW5hbmNlfSBmcm9tIFwiLi4vdXRpbHMvZWxlbWVudC5qc1wiO1xuaW1wb3J0IHtjcmVhdGVTd2l0Y2hlc30gZnJvbSBcIi4uL3V0aWxzL2VsZW1lbnQuanNcIjtcbmltcG9ydCB7YWRkVG9vbHRpcH0gZnJvbSBcIi4uL3V0aWxzL2VsZW1lbnQuanNcIjtcblxuLyoqXG4gKiBTY2FmZm9sZCBhIGZlYXR1cmUgc2V0dGluZyBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gZmVhdHVyZSAtIEZlYXR1cmUgb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IGZlYXR1cmUubmFtZSAtIEZlYXR1cmUgb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IGZlYXR1cmUubGF5ZXIgLSBMYXllciBvYmplY3QuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZlYXR1cmUuem9uZV90YXJnZXRzIC0gSW5pdGlhbCB0YXJnZXQgdmFsdWVzLlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmZWF0dXJlLnpvbmVfd2VpZ2h0cyAtIEluaXRpYWwgd2VpZ2h0cyB2YWx1ZXMuXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGZlYXR1cmUudGhlbWVzIC0gQXJyYXkgb2YgdGhlbWUgb2JqZWN0LnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBmZWF0dXJlLmlkIC0gVW5pcXVlIGlkZW50aWZpZXIgZm9yIGZlYXR1cmUuXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHpvbmVzIC0gQXJyYXkgb2Ygem9uZSBuYW1lcy5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmVhdHVyZVRhcmdldENob2ljZXMgLSBBcnJheSBvZiBudW1iZXJzIHVzZWQgdG9cbiAqIGRlZmluZSB0aGUgcG90ZW50aWFsIHZhbHVlcyBmb3Igc2V0dGluZyBmZWF0dXJlIHRhcmdldHMuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZlYXR1cmVXZWlnaHRDaG9pY2VzIC0gQXJyYXkgb2YgbnVtYmVycyB1c2VkIHRvXG4gKiBkZWZpbmUgdGhlIHBvdGVudGlhbCB2YWx1ZXMgZm9yIHNldHRpbmcgZmVhdHVyZSB3ZWlnaHRzLlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FmZm9sZEZlYXR1cmVTZXR0aW5nKFxuIGZlYXR1cmUsIHpvbmVzLCBmZWF0dXJlVGFyZ2V0Q2hvaWNlcywgZmVhdHVyZVdlaWdodENob2ljZXNcbikge1xuICAvLyBjcmVhdGUgZWxlbWVudFxuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbC5jbGFzc0xpc3QuYWRkKFwiZmVhdHVyZS1zZXR0aW5nXCIsIFwic2V0dGluZ1wiLCBcImhpZGRlbi1zZXR0aW5nXCIpO1xuICAvLyBzZXQgZGF0YSBpZCBhdHRyaWJ1dGUgZm9yIGZlYXR1cmUgaWRcbiAgZWwuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBmZWF0dXJlLmlkKTtcbiAgLy8gY3JlYXRlIGZlYXR1cmUgc2V0dGluZyBoZWFkZXJcbiAgZWwuYXBwZW5kQ2hpbGQoZmVhdHVyZVNldHRpbmdIZWFkZXIoZmVhdHVyZSwgem9uZXMpKTtcbiAgLy8gY3JlYXRlIGZlYXR1cmUgc2V0dGluZyBzdGF0dXNlcyBhbmQgd2VpZ2h0IGJ1dHRvbnNcbiAgZWwuYXBwZW5kQ2hpbGQoZmVhdHVyZVNldHRpbmdTdGF0dXNlcyhmZWF0dXJlLCB6b25lcywgZmVhdHVyZVdlaWdodENob2ljZXMpKTtcbiAgLy8gY3JlYXRlIGZlYXR1cmUgc2V0dGluZyB0YXJnZXRzXG4gIGVsLmFwcGVuZENoaWxkKGZlYXR1cmVTZXR0aW5nVGFyZ2V0cyhmZWF0dXJlLCB6b25lcywgZmVhdHVyZVRhcmdldENob2ljZXMpKTtcbiAgLy8gcmV0dXJuIGVsZW1lbnRcbiAgcmV0dXJuIGVsO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGhlYWRlciBjb21wb25lbnQgZm9yIGEgZmVhdHVyZSBzZXR0aW5nXG4gKiBAcGFyYW0ge09iamVjdH0gZmVhdHVyZSAtIEZlYXR1cmUgb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IGZlYXR1cmUubmFtZSAtIEZlYXR1cmUgb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IGZlYXR1cmUuaWQgLSBVbmlxdWUgaWRlbnRpZmllciBmb3IgZmVhdHVyZS5cbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gem9uZXMgLSBBcnJheSBvZiB6b25lIG5hbWVzLlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGZlYXR1cmVTZXR0aW5nSGVhZGVyKGZlYXR1cmUsIHpvbmVzKSB7XG4gIC8vIGNyZWF0ZSBjb250YWluZXJcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWwuY2xhc3NMaXN0LmFkZChcImZlYXR1cmUtaGVhZGVyXCIsIFwiaGVhZGVyXCIpO1xuICAvLyBjcmVhdGUgc3dpdGNoZXMgZm9yIGVhY2ggem9uZVxuICBsZXQgc3dpdGNoQ29udGFpbmVyID0gY3JlYXRlU3dpdGNoZXMoem9uZXMubGVuZ3RoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB6b25lcy5sZW5ndGg7ICsraSkge1xuICAgIHN3aXRjaENvbnRhaW5lci5jaGlsZHJlbltpXS5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgIFwiLS1zd2l0Y2gtcHJpbWFyeVwiLFxuICAgICAgYHZhcigtLXpvbmUtJHt6b25lc1tpXX0tcHJpbWFyeSlgXG4gICAgKTtcbiAgfVxuICAvLyBjcmVhdGUgbmFtZSBlbGVtZW50XG4gIGxldCBuYW1lRWxlbWVudCA9IGNyZWF0ZU5hbWVMYWJlbChmZWF0dXJlKTtcbiAgLy8gY3JlYXRlIHByb3ZlbmFuY2UgZWxlbWVudFxuICBsZXQgcHJvdmVuYW5jZUVsZW1lbnQgPSBjcmVhdGVQcm92ZW5hbmNlKGZlYXR1cmUubGF5ZXIucHJvdmVuYW5jZSk7XG4gIC8vIGFwcGVuZCBlbGVtZW50c1xuICBlbC5hcHBlbmRDaGlsZChzd2l0Y2hDb250YWluZXIpO1xuICBlbC5hcHBlbmRDaGlsZChuYW1lRWxlbWVudCk7XG4gIGVsLmFwcGVuZENoaWxkKHByb3ZlbmFuY2VFbGVtZW50KTtcbiAgLy8gcmV0dXJuIGVsZW1lbnRcbiAgcmV0dXJuIGVsO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIHN0YXR1c2VzIGNvbXBvbmVudCBmb3IgYSBmZWF0dXJlIHNldHRpbmdcbiAqIEBwYXJhbSB7T2JqZWN0fSBmZWF0dXJlIC0gRmVhdHVyZSBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gZmVhdHVyZS5uYW1lIC0gRmVhdHVyZSBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gZmVhdHVyZS5pZCAtIFVuaXF1ZSBpZGVudGlmaWVyIGZvciBmZWF0dXJlLlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB6b25lcyAtIEFycmF5IG9mIHpvbmUgbmFtZXMuXG4gKiBAcGFyYW0ge0FycmF5PE51bWJlcj59IGNob2ljZXMgLSBBcnJheSBvZiBudW1iZXJzIGZvciB3ZWlnaHQgY2hvaWNlcy5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBmZWF0dXJlU2V0dGluZ1N0YXR1c2VzKGZlYXR1cmUsIHpvbmVzLCBjaG9pY2VzKSB7XG4gIC8vIGluaXRpYWxpemUgZWxlbWVudFxuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbC5jbGFzc0xpc3QuYWRkKFwic3RhdHVzZXNcIik7XG4gIC8vIGNyZWF0ZSBjb250YWluZXIgdG8gc2hvdyB6b25lIHN0YXR1c2VzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgem9uZXMubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBjcmVhdGUgY29udGFpbmVyIGZvciBoZWxkIHN0YXR1c1xuICAgIGxldCBoZWxkU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWxkU3RhdHVzLmNsYXNzTGlzdC5hZGQoXCJoZWxkLXN0YXR1c1wiKTtcbiAgICAvLyBjcmVhdGUgaWNvbiB0byBzaG93IGhlbGQgc3RhdHVzXG4gICAgbGV0IGhlbGRTdGF0dXNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWxkU3RhdHVzSWNvbi5jbGFzc0xpc3QuYWRkKFwiaGVsZC1zeW1ib2xcIik7XG4gICAgaGVsZFN0YXR1c0ljb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYHZhcigtLXpvbmUtJHt6b25lc1tpXX0tc2Vjb25kYXJ5KWA7XG4gICAgaGVsZFN0YXR1c0ljb24uc3R5bGUuY29sb3IgPSBgdmFyKC0tem9uZS0ke3pvbmVzW2ldfS1zZWNvbmRhcnkpYDtcbiAgICAvLyBjcmVhdGUgbGFiZWwgdG8gc2hvdyBoZWxkIHN0YXR1c1xuICAgIGxldCBoZWxkU3RhdHVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgaGVsZFN0YXR1c0xhYmVsLnNldEF0dHJpYnV0ZShcImRhdGEtem9uZVwiLCB6b25lc1tpXSk7XG4gICAgaGVsZFN0YXR1c0xhYmVsLmNsYXNzTGlzdC5hZGQoXCJoZWxkLWxhYmVsXCIpO1xuICAgIGFkZFRvb2x0aXAoXG4gICAgICBoZWxkU3RhdHVzTGFiZWwsXG4gICAgICBgQ292ZXJhZ2UgYnkgTG9ja3MgZm9yIHRoZSAke3pvbmVzW2ldfSB6b25lYFxuICAgICk7XG4gICAgLy8gY3JlYXRlIGNvbnRhaW5lciBmb3IgdGFyZ2V0IHN0YXR1c1xuICAgIGxldCB0YXJnZXRTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhcmdldFN0YXR1cy5jbGFzc0xpc3QuYWRkKFwidGFyZ2V0LXN0YXR1c1wiKTtcbiAgICB0YXJnZXRTdGF0dXMuc2V0QXR0cmlidXRlKFwiZGF0YS10YXJnZXRcIiwgMCk7XG4gICAgLy8gY3JlYXRlIGljb24gdG8gc2hvdyBoZWxkIHN0YXR1c1xuICAgIGxldCB0YXJnZXRTdGF0dXNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXJnZXRTdGF0dXNJY29uLmNsYXNzTGlzdC5hZGQoXCJ0YXJnZXQtc3ltYm9sXCIpO1xuICAgIHRhcmdldFN0YXR1c0ljb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID1cbiAgICAgIGB2YXIoLS16b25lLSR7em9uZXNbaV19LXByaW1hcnkpYDtcbiAgICB0YXJnZXRTdGF0dXNJY29uLnN0eWxlLmNvbG9yID1cbiAgICAgIGB2YXIoLS16b25lLSR7em9uZXNbaV19LXByaW1hcnkpYDtcbiAgICAvLyBjcmVhdGUgbGFiZWwgdG8gc2hvdyB0YXJnZXQgc3RhdHVzXG4gICAgbGV0IHRhcmdldFN0YXR1c0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRhcmdldFN0YXR1c0xhYmVsLmNsYXNzTGlzdC5hZGQoXCJ0YXJnZXQtbGFiZWxcIik7XG4gICAgdGFyZ2V0U3RhdHVzTGFiZWwuc2V0QXR0cmlidXRlKFwiZGF0YS16b25lXCIsIHpvbmVzW2ldKTtcbiAgICB0YXJnZXRTdGF0dXNMYWJlbC5pbm5lclRleHQgPVxuICAgICAgYFRhcmdldDogJHtNYXRoLnJvdW5kKGZlYXR1cmUuem9uZV90YXJnZXRzW2ldICogMTAwKX0lYDtcbiAgICBhZGRUb29sdGlwKFxuICAgICAgdGFyZ2V0U3RhdHVzTGFiZWwsXG4gICAgICBgVGFyZ2V0IGZvciB0aGUgJHt6b25lc1tpXX0gem9uZSB0byBnZW5lcmF0ZSBzb2x1dGlvbnNgXG4gICAgKTtcbiAgICAvLyBjcmVhdGUgY29udGFpbmVyIGZvciB3ZWlnaHQgc3RhdHVzXG4gICAgbGV0IHdlaWdodFN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2VpZ2h0U3RhdHVzLmNsYXNzTGlzdC5hZGQoXCJ3ZWlnaHQtc3RhdHVzXCIpO1xuICAgIGFkZFRvb2x0aXAoXG4gICAgICB3ZWlnaHRTdGF0dXMsXG4gICAgICBgV2VpZ2h0IGZvciB0aGUgJHt6b25lc1tpXX0gem9uZSB0byBnZW5lcmF0ZSBzb2x1dGlvbnNgXG4gICAgKTtcbiAgICAvLyBhc3NlbWJsZSBjb250YWluZXJzXG4gICAgaGVsZFN0YXR1cy5hcHBlbmRDaGlsZChoZWxkU3RhdHVzSWNvbik7XG4gICAgaGVsZFN0YXR1cy5hcHBlbmRDaGlsZChoZWxkU3RhdHVzTGFiZWwpO1xuICAgIHRhcmdldFN0YXR1cy5hcHBlbmRDaGlsZCh0YXJnZXRTdGF0dXNJY29uKTtcbiAgICB0YXJnZXRTdGF0dXMuYXBwZW5kQ2hpbGQodGFyZ2V0U3RhdHVzTGFiZWwpO1xuICAgIGVsLmFwcGVuZENoaWxkKGhlbGRTdGF0dXMpO1xuICAgIGVsLmFwcGVuZENoaWxkKHRhcmdldFN0YXR1cyk7XG4gICAgZWwuYXBwZW5kQ2hpbGQod2VpZ2h0U3RhdHVzKTtcbiAgfVxuICAvLyByZXR1cm4gZWxlbWVudFxuICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgdGFyZ2V0cyBjb21wb25lbnQgZm9yIGEgZmVhdHVyZSBzZXR0aW5nXG4gKiBAcGFyYW0ge09iamVjdH0gZmVhdHVyZSAtIEZlYXR1cmUgb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IGZlYXR1cmUubmFtZSAtIEZlYXR1cmUgb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IGZlYXR1cmUuaWQgLSBVbmlxdWUgaWRlbnRpZmllciBmb3IgZmVhdHVyZS5cbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gem9uZXMgLSBBcnJheSBvZiB6b25lIG5hbWVzLlxuICogQHBhcmFtIHtBcnJheTxOdW1iZXI+fSBjaG9pY2VzIC0gQXJyYXkgb2YgbnVtYmVycyBmb3IgdGFyZ2V0IGNob2ljZXMuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gZmVhdHVyZVNldHRpbmdUYXJnZXRzKGZlYXR1cmUsIHpvbmVzLCBjaG9pY2VzKSB7XG4gIC8vIGluaXRpYWxpemUgZWxlbWVudFxuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbC5jbGFzc0xpc3QuYWRkKFwidGFyZ2V0c1wiKTtcbiAgYWRkVG9vbHRpcChlbCwgXCJTZXQgdGFyZ2V0cyB0byBnZW5lcmF0ZSBzb2x1dGlvbnNcIik7XG4gIC8vIGNyZWF0ZSBib2R5IGNvbnRhaW5lclxuICBsZXQgdGFyZ2V0c0JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXJnZXRzQm9keS5jbGFzc0xpc3QuYWRkKFwidGFyZ2V0cy1ib2R5XCIpO1xuICAvLyBjcmVhdGUgc3RhdHVzIGJhciBjb250YWluZXJcbiAgbGV0IHN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN0YXR1cy5jbGFzc0xpc3QuYWRkKFwic3RhdHVzLWJhclwiKTtcbiAgLy8gY3JlYXRlIHNsaWRlciBjb250YWluZXJcbiAgbGV0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNsaWRlci5jbGFzc0xpc3QuYWRkKFwidGFyZ2V0LXNsaWRlclwiKTtcbiAgLy8gcmV0dXJuIGVsZW1lbnRcbiAgdGFyZ2V0c0JvZHkuYXBwZW5kQ2hpbGQoc3RhdHVzKTtcbiAgdGFyZ2V0c0JvZHkuYXBwZW5kQ2hpbGQoc2xpZGVyKTtcbiAgZWwuYXBwZW5kQ2hpbGQodGFyZ2V0c0JvZHkpO1xuICByZXR1cm4gZWw7XG59XG4iLCIvKiogSW1wb3J0IGRlcGVuZGVuY2llcyAqL1xuLy8gVG9tIFNlbGVjdCBtb2R1bGVcbmltcG9ydCBcIi4vY3NzL3RvbS1zZWxlY3QuY3NzXCI7XG5pbXBvcnQgXCJ0b20tc2VsZWN0L2Rpc3QvY3NzL3RvbS1zZWxlY3QuYm9vdHN0cmFwNS5jc3NcIjtcbmltcG9ydCBUb21TZWxlY3QgZnJvbSAndG9tLXNlbGVjdC9kaXN0L2pzL3RvbS1zZWxlY3QuY29tcGxldGUubWluLmpzJztcbi8vIGNsYXNzZXMgdG8gY3JlYXRlIGNvbXBvbmVudHNcbmltcG9ydCB7RmVhdHVyZVNldHRpbmd9IGZyb20gXCIuL2ZlYXR1cmUtc2V0dGluZy1jbGFzcy5qc1wiO1xuLy8gc3R5bGluZ1xuaW1wb3J0IFwiLi9jc3Mvc2V0dGluZ3MuY3NzXCI7XG5cbi8qKiBDbGFzcyByZXByZXNlbnRpbmcgdGhlIHNldHRpbmdzIGZvciBtdWx0aXBsZSBmZWF0dXJlcy4gKi9cbmV4cG9ydCBjbGFzcyBGZWF0dXJlU2V0dGluZ3Mge1xuXG4gIC8vIHByaXZhdGUgZmllbGRzXG5cbiAgLyoqXG4gICAqIEFycmF5IG9mIHpvbmUgbmFtZXMuXG4gICAqIEB0eXBlIHtBcnJheTxzdHJpbmc+fVxuICAgKi9cbiAgX3pvbmVzO1xuXG4gIC8qKlxuICAgKiBNYXAgb2Ygc2V0dGluZ3MuXG4gICAqIEB0eXBlIHtNYXA8RmVhdHVyZVNldHRpbmdzPn1cbiAgICovXG4gIF9zZXR0aW5ncyA9IG5ldyBNYXAoKTtcblxuICAvKipcbiAgICogT2JqZWN0IHVzZWQgdG8gdGVtcG9yYXJpbHkgc3RvcmUgc2V0dGluZ3MgZm9yIHNlbGVjdCBtZW51LlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgX2NhY2hlO1xuXG4gIC8qKlxuICAqIENvbnN0cnVjdCBhIG5ldyBGZWF0dXJlU2V0dGluZ3Mgb2JqZWN0LlxuICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9qZWN0IC0gT2JqZWN0IHdpdGggdmFyaW91cyB0eXBlcyBvZiBvYmplY3RzLlxuICAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gcHJvamVjdC5mZWF0dXJlcyAtIEFycmF5IG9mIGZlYXR1cmUgb2JqZWN0cy5cbiAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZlYXR1cmVUYXJnZXRDaG9pY2VzIC0gQXJyYXkgb2YgbnVtYmVycyB1c2VkIHRvXG4gICogZGVmaW5lIHRoZSBwb3RlbnRpYWwgdmFsdWVzIGZvciBzZXR0aW5nIGZlYXR1cmUgdGFyZ2V0cy5cbiAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZlYXR1cmVXZWlnaHRDaG9pY2VzIC0gQXJyYXkgb2YgbnVtYmVycyB1c2VkIHRvXG4gICogZGVmaW5lIHRoZSBwb3RlbnRpYWwgdmFsdWVzIGZvciBzZXR0aW5nIGZlYXR1cmUgd2VpZ2h0cy5cbiAgKiBAcmV0dXJuIHt2b2lkfVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0LCBmZWF0dXJlVGFyZ2V0Q2hvaWNlcywgZmVhdHVyZVdlaWdodENob2ljZXMpIHtcbiAgICAvLyBpbml0aWFsaXplIGZpZWxkc1xuICAgIHRoaXMuX3pvbmVzID0gcHJvamVjdC56b25lcztcbiAgICAvLyBjcmVhdGUgZmVhdHVyZSBzZXR0aW5nIG9iamVjdHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QuZmVhdHVyZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHRoaXMuX3NldHRpbmdzLnNldChcbiAgICAgICAgcHJvamVjdC5mZWF0dXJlc1tpXS5pZCxcbiAgICAgICAgbmV3IEZlYXR1cmVTZXR0aW5nKFxuICAgICAgICAgIHByb2plY3QuZmVhdHVyZXNbaV0sIHByb2plY3Quem9uZXMsXG4gICAgICAgICAgZmVhdHVyZVRhcmdldENob2ljZXMsIGZlYXR1cmVXZWlnaHRDaG9pY2VzXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICAgIC8vIGNyZWF0ZSBwYXJhbWV0ZXJzIGZvciBzZWxlY3QgbWVudVxuICAgIGxldCBmZWF0dXJlcyA9IFtdO1xuICAgIGxldCB0aGVtZXMgPSBuZXcgU2V0O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5mZWF0dXJlcy5sZW5ndGg7ICsraSkge1xuICAgICAgZmVhdHVyZXMucHVzaCh7XG4gICAgICAgIHZhbHVlOiBwcm9qZWN0LmZlYXR1cmVzW2ldLmlkLFxuICAgICAgICBuYW1lOiBwcm9qZWN0LmZlYXR1cmVzW2ldLm5hbWUsXG4gICAgICAgIHpvbmU6IHByb2plY3QuZmVhdHVyZXNbaV0udGhlbWVzLm1hcCh4ID0+IHguem9uZSlcbiAgICAgIH0pO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwcm9qZWN0LmZlYXR1cmVzW2ldLnRoZW1lcy5sZW5ndGg7ICsraikge1xuICAgICAgICB0aGVtZXMuYWRkKHByb2plY3QuZmVhdHVyZXNbaV0udGhlbWVzW2pdLnpvbmUpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjYWNoZSBwYXJhbWV0ZXJzIGZvciBzZWxlY3QgbWVudVxuICAgIHRoaXMuX2NhY2hlID0ge1xuICAgICAgb3B0aW9uczogZmVhdHVyZXMsXG4gICAgICBvcHRncm91cHM6IEFycmF5LmZyb20odGhlbWVzKS5tYXAoeCA9PiB7cmV0dXJuIHt2YWx1ZTogeH19KVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgKiBBcHBlbmQgdGhlIEhUTUwgZWxlbWVudCBmb3IgdGhlIGNsYXNzIHRvIGFub3RoZXIgSFRNTCBlbGVtZW50LlxuICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBIVE1MIGVsZW1lbnQuXG4gICogQHJldHVybiB7dm9pZH1cbiAgKi9cbiAgYXBwZW5kVG8oZWxlbWVudCkge1xuICAgIC8vIGNyZWF0ZSBjb250YWluZXJcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJmZWF0dXJlLXNldHRpbmdzXCIsIFwic2V0dGluZ3NcIik7XG4gICAgLy8gY3JlYXRlIG1lbnUgZWxlbWVudFxuICAgIGxldCBtZW51RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZlYXR1cmUtbWVudVwiKTtcbiAgICAvLyBjcmVhdGUgZmVhdHVyZSBzZXR0aW5nIG9iamVjdHMgYW5kIGFkZCB0aGVtIHRvIHRoZSBtZW51XG4gICAgdGhpcy5fc2V0dGluZ3MuZm9yRWFjaCh4ID0+IHguYXBwZW5kVG8obWVudUVsZW1lbnQpKTtcbiAgICAvLyBjcmVhdGUgc2VsZWN0IG1lbnVcbiAgICBsZXQgc2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzZWxlY3RFbGVtZW50LnNldEF0dHJpYnV0ZShcIm11bHRpcGxlXCIsIFwiXCIpO1xuICAgIHNlbGVjdEVsZW1lbnQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJDaG9vc2UgZmVhdHVyZXMuLi5cIik7XG4gICAgLy8gYXBwZW5kIGVsZW1lbnRzIHRvIGNvbnRhaW5lclxuICAgIGVsLmFwcGVuZENoaWxkKHNlbGVjdEVsZW1lbnQpO1xuICAgIGVsLmFwcGVuZENoaWxkKG1lbnVFbGVtZW50KTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsKTtcbiAgICAvLyBpbml0aWFsaXplIHNlbGVjdCBtZW51XG4gICAgbmV3IFRvbVNlbGVjdChzZWxlY3RFbGVtZW50LCB7XG4gICAgICBvcHRpb25zOiB0aGlzLl9jYWNoZS5vcHRpb25zLFxuICAgICAgY3JlYXRlOiBmYWxzZSxcbiAgICAgIGRyb3Bkb3duUGFyZW50OiBcImJvZHlcIixcbiAgICAgIGxhYmVsRmllbGQ6IFwibmFtZVwiLFxuICAgICAgc2VhcmNoRmllbGQ6IFtcIm5hbWVcIl0sXG4gICAgICBtYXhJdGVtczogbnVsbCxcbiAgICAgIHNvcnRGaWVsZDogXCJuYW1lXCIsXG4gICAgICBwbHVnaW5zOiBbXCJjaGVja2JveF9vcHRpb25zXCJdLFxuICAgICAgY2xvc2VBZnRlclNlbGVjdDogZmFsc2UsXG4gICAgICBvcHRncm91cHM6IHRoaXMuX2NhY2hlLm9wdGdyb3VwcyxcbiAgICAgIG9wdGdyb3VwRmllbGQ6IFwiem9uZVwiLFxuICAgICAgcmVuZGVyOiB7XG4gICAgICAgIG9wdGdyb3VwX2hlYWRlcjogZnVuY3Rpb24oZGF0YSwgZXNjYXBlKSB7XG4gICAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwib3B0Z3JvdXAtaGVhZGVyXCI+JyArXG4gICAgICAgICAgICBlc2NhcGUoZGF0YS52YWx1ZSArIFwiIHpvbmVcIikgK1xuICAgICAgICAgICAgJzwvZGl2Pic7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkl0ZW1BZGQ6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgeCA9IHRoaXMuX3NldHRpbmdzLmdldCh2YWx1ZSk7XG4gICAgICAgIGlmICh4KSB7XG4gICAgICAgICAgeC5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkl0ZW1SZW1vdmU6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgeCA9IHRoaXMuX3NldHRpbmdzLmdldCh2YWx1ZSk7XG4gICAgICAgIGlmICh4KSB7XG4gICAgICAgICAgeC5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGZyZWUgbWVtb3J5XG4gICAgdGhpcy5fY2FjaGUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgKiBTeW5jaHJvbml6ZSBzZXR0aW5ncy4gVGhpcyBtZXRob2QgaXMgdXNlZCB0byB1cGRhdGUgdGhlXG4gICogZmVhdHVyZSBzdGF0dXMgYmFycyB0byByZWZsZWN0IGNoYW5nZXMgdG8gdGhlIGxvY2sgc2V0dGluZ3MuXG4gICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBEYXRhIGZyYW1lIHdpdGggbmV3IHN0YXR1cyBiYXIgdmFsdWVzLlxuICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhLmlkIC0gRmVhdHVyZSBpZGVudGlmaWVyLlxuICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhLlsqXSAtIFZhbHVlIGZvciBlYWNoIGZlYXR1cmUgaW4gZWFjaCB6b25lLlxuICAqIEByZXR1cm4ge3ZvaWR9XG4gICovXG4gIHN5bmMoZGF0YSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5pZC5sZW5ndGg7ICsraSkge1xuICAgICAgdGhpcy5fc2V0dGluZ3MuZ2V0KGRhdGEuaWRbaV0pLnNldEhlbGRTdGF0dXMoXG4gICAgICAgIHRoaXMuX3pvbmVzLm1hcCh4ID0+IGRhdGFbeF1baV0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAqIEdldCBzZXR0aW5ncyBmb3IgZ2VuZXJhdGluZyBhIHNvbHV0aW9uLlxuICAqIEByZXR1cm4ge09iamVjdH1cbiAgKi9cbiAgZ2V0U2V0dGluZ3MoKSB7XG4gICAgbGV0IHNldHRpbmdzID0gWy4uLnRoaXMuX3NldHRpbmdzLnZhbHVlcygpXTtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6XG4gICAgICAgIHNldHRpbmdzXG4gICAgICAgIC5tYXAoeCA9PiBBcnJheSh0aGlzLl96b25lcy5sZW5ndGgpLmZpbGwoeC5pZCkpXG4gICAgICAgIC5mbGF0KDEpLFxuICAgICAgbmFtZTpcbiAgICAgICAgc2V0dGluZ3NcbiAgICAgICAgLm1hcCh4ID0+IEFycmF5KHRoaXMuX3pvbmVzLmxlbmd0aCkuZmlsbCh4Lm5hbWUpKVxuICAgICAgICAuZmxhdCgxKSxcbiAgICAgIGNvbHVtbjpcbiAgICAgICAgc2V0dGluZ3NcbiAgICAgICAgLm1hcCh4ID0+IEFycmF5KHRoaXMuX3pvbmVzLmxlbmd0aCkuZmlsbCh4LmNvbHVtbikpXG4gICAgICAgIC5mbGF0KDEpLFxuICAgICAgem9uZTpcbiAgICAgICAgc2V0dGluZ3NcbiAgICAgICAgLm1hcCh4ID0+IHRoaXMuX3pvbmVzKVxuICAgICAgICAuZmxhdCgxKSxcbiAgICAgIHRhcmdldDpcbiAgICAgICAgc2V0dGluZ3NcbiAgICAgICAgLm1hcCh4ID0+IHgudGFyZ2V0cylcbiAgICAgICAgLmZsYXQoMSksXG4gICAgICB3ZWlnaHQ6XG4gICAgICAgIHNldHRpbmdzXG4gICAgICAgIC5tYXAoeCA9PiB4LndlaWdodHMpXG4gICAgICAgIC5mbGF0KDEpXG4gICAgfTtcbiAgfVxuXG59XG4iLCIvKiogSW1wb3J0IGRlcGVuZGVuY2llcyAqL1xuLy8gVG9tIFNlbGVjdCBtb2R1bGVcbmltcG9ydCBcIi4vY3NzL3RvbS1zZWxlY3QuY3NzXCI7XG5pbXBvcnQgXCJ0b20tc2VsZWN0L2Rpc3QvY3NzL3RvbS1zZWxlY3QuYm9vdHN0cmFwNS5jc3NcIjtcbmltcG9ydCBUb21TZWxlY3QgZnJvbSAndG9tLXNlbGVjdC9kaXN0L2pzL3RvbS1zZWxlY3QuY29tcGxldGUubWluLmpzJztcbi8vIGZ1bmN0aW9ucyB0byBjcmVhdGUgZWxlbWVudHNcbmltcG9ydCB7c2NhZmZvbGRMb2NrU2V0dGluZ30gZnJvbSBcIi4vbG9jay1zZXR0aW5nLXNjYWZmb2xkLmpzXCI7XG5pbXBvcnQge2NyZWF0ZVByb3ZlbmFuY2V9IGZyb20gXCIuLi91dGlscy9lbGVtZW50LmpzXCI7XG4vLyBzdHlsaW5nXG5pbXBvcnQgXCIuL2Nzcy9zZXR0aW5nLmNzc1wiXG5pbXBvcnQgXCIuL2Nzcy9sb2NrLXNldHRpbmcuY3NzXCJcblxuLyoqIENsYXNzIHJlcHJlc2VudGluZyB0aGUgc2V0dGluZyBmb3IgYSBzaW5nbGUgbG9jay4gKi9cbmV4cG9ydCBjbGFzcyBMb2NrU2V0dGluZyB7XG5cbiAgLy8gcHVibGljIGZpZWxkc1xuXG4gIC8qKlxuICAgKiBab25lIG5hbWUuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICB6b25lO1xuXG4gIC8qKlxuICAgKiBQcmlvcml0eSB2YWx1ZS5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIHByaW9yaXR5O1xuXG4gIC8qKlxuICAgKiBIVE1MIGVsZW1lbnQuXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIGVsZW1lbnQ7XG5cbiAgLy8gcHJpdmF0ZSBmaWVsZHNcblxuICAvKipcbiAgICogTWFwIG9mIGxvY2sgb2JqZWN0cy5cbiAgICogQHR5cGUge01hcDxPYmplY3Q+fVxuICAgKi9cbiAgX2xvY2tzID0gbmV3IE1hcCgpO1xuXG4gIC8qKlxuICAgKiBUb20gU2VsZWN0IG9iamVjdFxuICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgKi9cbiAgX3NlbGVjdDtcblxuICAvKipcbiAgICogQXJyYXkgb2YgcHJldmlvdXNseSBzZWxlY3RlZCBsb2NrIGlkZW50aWZpZXJzLlxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBfcHJldmlvdXNMb2NrSWRzID0gW107XG5cbiAgLyoqXG4gICAqIEFycmF5IG9mIGluaXRpYWwgbG9jayBpZGVudGlmaWVycy5cbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgX2luaXRpYWxMb2NrSWRzID0gW107XG5cbiAgLyoqXG4gICAqIE9iamVjdCB1c2VkIHRvIHRlbXBvcmFyaWx5IHN0b3JlIHNldHRpbmdzIGZvciBzZWxlY3QgbWVudS5cbiAgICogQHR5cGUge29iamVjdH1cbiAgICovXG4gIF9jYWNoZSA9IHt9O1xuXG4gIC8qKlxuICAqIENvbnN0cnVjdCBhIG5ldyBMb2NrU2V0dGluZyBvYmplY3QuXG4gICogQHBhcmFtIHtzdHJpbmd9IHpvbmUgLSBab25lIG5hbWUuXG4gICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBsb2NrcyAtIEFycmF5IG9mIGxvY2sgb2JqZWN0cy5cbiAgKiBAcGFyYW0ge251bWJlcn0gcHJpb3JpdHkgLSBQcmlvcml0eSB2YWx1ZS5cbiAgKiBAcmV0dXJuIHt2b2lkfVxuICAqL1xuICBjb25zdHJ1Y3Rvcih6b25lLCBsb2NrcywgcHJpb3JpdHkpIHtcbiAgICAvLyBpbml0aWFsaXplIHB1YmxpYyBmaWVsZHNcbiAgICB0aGlzLnpvbmUgPSB6b25lO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAvLyBpbml0aWFsaXplIHByaXZhdGUgZmllbGRzXG4gICAgdGhpcy5lbGVtZW50ID0gc2NhZmZvbGRMb2NrU2V0dGluZyh6b25lLCBsb2NrcywgcHJpb3JpdHkpO1xuICAgIHRoaXMuX2NhY2hlLm9wdGlvbnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2tzLmxlbmd0aDsgKytpKSB7XG4gICAgICB0aGlzLl9sb2Nrcy5zZXQobG9ja3NbaV0uaWQsIGxvY2tzW2ldKTtcbiAgICAgIHRoaXMuX2NhY2hlLm9wdGlvbnMucHVzaCh7bmFtZTogbG9ja3NbaV0ubmFtZSwgdmFsdWU6IGxvY2tzW2ldLmlkfSk7XG4gICAgICBpZiAobG9ja3NbaV0uem9uZSA9PT0gem9uZSkge1xuICAgICAgICB0aGlzLl9pbml0aWFsTG9ja0lkcy5wdXNoKGxvY2tzW2ldLmlkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fcHJldmlvdXNMb2NrSWRzID0gdGhpcy5faW5pdGlhbExvY2tJZHM7XG4gIH1cblxuICAvKipcbiAgKiBBcHBlbmQgdGhlIEhUTUwgZWxlbWVudCBmb3IgdGhlIGNsYXNzIHRvIGFub3RoZXIgSFRNTCBlbGVtZW50LlxuICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBIVE1MIGVsZW1lbnQuXG4gICogQHJldHVybiB7dm9pZH1cbiAgKi9cbiAgYXBwZW5kVG8oZWxlbWVudCkge1xuICAgIC8vIGFwcGVuZCB0byBlbGVtZW50XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgIC8vIGluaXRpYWxpemUgc2VsZWN0IG1lbnUsXG4gICAgLy8gTk9URSB0aGlzIG11c3QgYmUgZG9uZSBhZnRlciB0aGUgZWxlbWVudCBpcyBhcHBlbmRlZCB0byBET01cbiAgICB0aGlzLl9zZWxlY3QgPSBuZXcgVG9tU2VsZWN0KHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2stc2VsZWN0XCIpLCB7XG4gICAgICBvcHRpb25zOiB0aGlzLl9jYWNoZS5vcHRpb25zLFxuICAgICAgaXRlbXM6IHRoaXMuX2luaXRpYWxMb2NrSWRzLFxuICAgICAgY3JlYXRlOiBmYWxzZSxcbiAgICAgIGRyb3Bkb3duUGFyZW50OiBcImJvZHlcIixcbiAgICAgIGxhYmVsRmllbGQ6IFwibmFtZVwiLFxuICAgICAgc2VhcmNoRmllbGQ6IFtcIm5hbWVcIl0sXG4gICAgICBtYXhJdGVtczogbnVsbCxcbiAgICAgIHNvcnRGaWVsZDogXCJuYW1lXCIsXG4gICAgICBwbHVnaW5zOiBbXCJjaGVja2JveF9vcHRpb25zXCJdLFxuICAgICAgY2xvc2VBZnRlclNlbGVjdDogZmFsc2UsXG4gICAgICByZW5kZXI6IHtcbiAgICAgICAgb3B0aW9uOiAoZGF0YSwgZXNjYXBlKSA9PiB7XG4gICAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKFwibG9jay1vcHRpb25cIik7XG4gICAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICB0ZXh0LmlubmVyVGV4dCA9IGVzY2FwZShkYXRhLm5hbWUpO1xuICAgICAgICAgIGVsLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICAgIGVsLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgY3JlYXRlUHJvdmVuYW5jZSh0aGlzLl9sb2Nrcy5nZXQoZGF0YS52YWx1ZSkubGF5ZXIucHJvdmVuYW5jZSlcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIHNldCBldmVudCBoYW5kbGVyIGZvciB0b2dnbGVcbiAgICB0aGlzLmVsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnN3aXRjaFwiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgIC8vIHVwZGF0ZSBzZWxlY3QgdmFsdWVzXG4gICAgICAgICAgdGhpcy5fc2VsZWN0LnNldFZhbHVlKHRoaXMuX3ByZXZpb3VzTG9ja0lkcyk7XG4gICAgICAgICAgLy8gdXBkYXRlIGRpc2FibGUgcHJvcGVydHkgb24gZWxlbWVudFxuICAgICAgICAgIHRoaXMuX3NlbGVjdC5lbmFibGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyB1cGRhdGUgcHJldmlvdXMgdmFsdWVzXG4gICAgICAgICAgdGhpcy5fcHJldmlvdXNMb2NrSWRzID0gdGhpcy5nZXRMb2NrSWRzKCkuc2xpY2UoKTtcbiAgICAgICAgICAvLyBjbGVhciBzZWxlY3RcbiAgICAgICAgICB0aGlzLl9zZWxlY3QuY2xlYXIoKTtcbiAgICAgICAgICAvLyB1cGRhdGUgZGlzYWJsZSBwcm9wZXJ0eSBvbiBlbGVtZW50XG4gICAgICAgICAgdGhpcy5fc2VsZWN0LmRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgLy8gZnJlZSBtZW1vcnlcbiAgICB0aGlzLl9jYWNoZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAqIFNldCBwcmlvcml0eSB2YWx1ZS5cbiAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBOZXcgcHJpb3JpdHkgdmFsdWUuXG4gICogQHJldHVybiB7dm9pZH1cbiAgKi9cbiAgc2V0UHJpb3JpdHlWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMucHJpb3JpdHkgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAqIEdldCBpZGVudGlmaWVycyBmb3Igc2VsZWN0ZWQgbG9ja3MuXG4gICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn1cbiAgKi9cbiAgZ2V0TG9ja0lkcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0LmdldFZhbHVlKCk7XG4gIH1cblxuICAvKipcbiAgKiBHZXQgbmFtZXMgZm9yIHNlbGVjdGVkIGxvY2tzLlxuICAqIEByZXR1cm4ge0FycmF5PHN0cmluZz59XG4gICovXG4gIGdldExvY2tOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMb2NrSWRzKCkubWFwKHggPT4gdGhpcy5fbG9ja3MuZ2V0KHgpLm5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICogR2V0IGNvbHVtbnMgZm9yIHNlbGVjdGVkIGxvY2tzLlxuICAqIEByZXR1cm4ge0FycmF5PHN0cmluZz59XG4gICovXG4gIGdldExvY2tDb2x1bW5zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExvY2tJZHMoKS5tYXAoeCA9PiB0aGlzLl9sb2Nrcy5nZXQoeCkubGF5ZXIuY29sdW1uKTtcbiAgfVxuXG4gIC8qKlxuICAqIEdldCB6b25lcyBmb3Igc2VsZWN0ZWQgbG9ja3MuXG4gICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn1cbiAgKi9cbiAgZ2V0TG9ja1pvbmVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExvY2tJZHMoKS5tYXAoeCA9PiB0aGlzLnpvbmUpO1xuICB9XG5cbiAgLyoqXG4gICogR2V0IHByaW9yaXR5IHZhbHVlcyBmb3Igc2VsZWN0ZWQgbG9ja3MuXG4gICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn1cbiAgKi9cbiAgZ2V0TG9ja1ByaW9yaXR5VmFsdWVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExvY2tJZHMoKS5tYXAoeCA9PiB0aGlzLnByaW9yaXR5KTtcbiAgfVxuXG59XG4iLCIvKiogSW1wb3J0IGRlcGVuZGVuY2llcyAqL1xuLy8gZnVuY3Rpb25zIHRvIGNyZWF0ZSBlbGVtZW50c1xuaW1wb3J0IHthZGRUb29sdGlwfSBmcm9tIFwiLi4vdXRpbHMvZWxlbWVudC5qc1wiO1xuaW1wb3J0IHtjcmVhdGVOYW1lTGFiZWx9IGZyb20gXCIuLi91dGlscy9lbGVtZW50LmpzXCI7XG5pbXBvcnQge2NyZWF0ZUhhbmRsZX0gZnJvbSBcIi4uL3V0aWxzL2VsZW1lbnQuanNcIjtcbmltcG9ydCB7Y3JlYXRlU3dpdGNoZXN9IGZyb20gXCIuLi91dGlscy9lbGVtZW50LmpzXCI7XG5cbi8qKlxuICogU2NhZmZvbGQgYSBsb2NrIHNldHRpbmcgZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IHpvbmUgLSBab25lIG5hbWUuXG4gICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBsb2NrcyAtIEFycmF5IG9mIGxvY2tzLlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FmZm9sZExvY2tTZXR0aW5nKHpvbmUsIGxvY2tzLCBwcmlvcml0eSkge1xuICAvLyBjcmVhdGUgY29udGFpbmVyXG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsLmNsYXNzTGlzdC5hZGQoXCJsb2NrLXNldHRpbmdcIiwgXCJzZXR0aW5nXCIpO1xuICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgdmFyKC0tem9uZS0ke3pvbmV9LXNlY29uZGFyeSlgO1xuICAvLyBzZXQgZGF0YSB6b25lIGF0dHJpYnV0ZVxuICBlbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXpvbmVcIiwgem9uZSk7XG4gIC8vIGNyZWF0ZSBmZWF0dXJlIHNldHRpbmcgaGVhZGVyXG4gIGVsLmFwcGVuZENoaWxkKGxvY2tTZXR0aW5nSGVhZGVyKHpvbmUsIHByaW9yaXR5KSk7XG4gIC8vIGNyZWF0ZSBmZWF0dXJlIHNldHRpbmcgd2VpZ2h0c1xuICBlbC5hcHBlbmRDaGlsZChsb2NrU2V0dGluZ1NlbGVjdCh6b25lKSk7XG4gIC8vIHJldHVybiBlbGVtZW50XG4gIHJldHVybiBlbDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBoZWFkZXIgY29tcG9uZW50IGZvciBhIGxvY2sgc2V0dGluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSB6b25lIC0gWm9uZSBuYW1lLlxuICogQHBhcmFtIHtudW1iZXJ9IHByaW9yaXR5IC0gUHJpb3JpdHkgdmFsdWUuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gbG9ja1NldHRpbmdIZWFkZXIoem9uZSwgcHJpb3JpdHkpIHtcbiAgLy8gY3JlYXRlIGNvbnRhaW5lclxuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICAvLyBjcmVhdGUgc3dpdGNoXG4gIGxldCBzd2l0Y2hFbGVtZW50ID0gY3JlYXRlU3dpdGNoZXMoMSk7XG4gIHN3aXRjaEVsZW1lbnQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwiZGF0YS16b25lXCIsIHpvbmUpO1xuICBzd2l0Y2hFbGVtZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLnN0eWxlLnNldFByb3BlcnR5KFxuICAgIFwiLS1zd2l0Y2gtcHJpbWFyeVwiLFxuICAgIGB2YXIoLS16b25lLSR7em9uZX0tcHJpbWFyeSlgXG4gICk7XG4gIC8vIGNyZWF0ZSBuYW1lIGVsZW1lbnRcbiAgbGV0IG5hbWVFbGVtZW50ID0gY3JlYXRlTmFtZUxhYmVsKHtcbiAgICBuYW1lOiBgJHt6b25lfSB6b25lYCxcbiAgICBkZXRhaWxzOiBgU2VsZWN0IGxvY2tzIGZvciB0aGUgJHt6b25lfSB6b25lYFxuICB9KTtcbiAgLy8gY3JlYXRlIGhhbmRsZVxuICBsZXQgaGFuZGxlID0gY3JlYXRlSGFuZGxlKFxuICAgIFwiRHJhZyB0byBzcGVjaWZ5IHByaW9yaXR5IG9yZGVyIGZvciBsb2NraW5nIGluIHBsYW5uaW5nIHVuaXRzXCJcbiAgKTtcbiAgLy8gYXBwZW5kIGVsZW1lbnRzXG4gIGVsLmFwcGVuZENoaWxkKHN3aXRjaEVsZW1lbnQpO1xuICBlbC5hcHBlbmRDaGlsZChuYW1lRWxlbWVudCk7XG4gIGVsLmFwcGVuZENoaWxkKGhhbmRsZSk7XG4gIC8vIHJldHVybiBlbGVtZW50XG4gIHJldHVybiBlbDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBzZWxlY3QgY29tcG9uZW50IGZvciBhIGxvY2sgc2V0dGluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSB6b25lIC0gWm9uZSBuYW1lLlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGxvY2tTZXR0aW5nU2VsZWN0KHpvbmUpIHtcbiAgLy8gaW5pdGlhbGl6ZSBlbGVtZW50XG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIGVsLmNsYXNzTGlzdC5hZGQoXCJsb2NrLXNlbGVjdFwiKTtcbiAgZWwuc2V0QXR0cmlidXRlKFwibXVsdGlwbGVcIiwgXCJcIik7XG4gIGVsLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiQ2hvb3NlIGxvY2tzLi4uXCIpO1xuICByZXR1cm4gZWw7XG59XG4iLCIvKiogSW1wb3J0IGRlcGVuZGVuY2llcyAqL1xuLy8gU29ydGFibGUgbW9kdWxlXG5pbXBvcnQgU29ydGFibGUgZnJvbSBcInNvcnRhYmxlanMvbW9kdWxhci9zb3J0YWJsZS5jb3JlLmVzbS5qc1wiO1xuLy8gY2xhc3NlcyB0byBjcmVhdGUgY29tcG9uZW50c1xuaW1wb3J0IHtMb2NrU2V0dGluZ30gZnJvbSBcIi4vbG9jay1zZXR0aW5nLWNsYXNzLmpzXCI7XG4vLyBzdHlsaW5nXG5pbXBvcnQgXCIuL2Nzcy9zZXR0aW5ncy5jc3NcIjtcblxuLyoqIENsYXNzIHJlcHJlc2VudGluZyB0aGUgc2V0dGluZ3MgZm9yIG11bHRpcGxlIGxvY2tzLiAqL1xuZXhwb3J0IGNsYXNzIExvY2tTZXR0aW5ncyB7XG5cbiAgLy8gcHJpdmF0ZSBmaWVsZHNcblxuICAvKipcbiAgICogQXJyYXkgb2Ygem9uZSBuYW1lcy5cbiAgICogQHR5cGUge0FycmF5PHN0cmluZz59XG4gICAqL1xuICBfem9uZXM7XG5cbiAgLyoqXG4gICAqIEFycmF5IG9mIHNldHRpbmdzLlxuICAgKiBAdHlwZSB7TWFwPExvY2tTZXR0aW5ncz59XG4gICAqL1xuICBfc2V0dGluZ3MgPSBuZXcgTWFwKCk7XG5cbiAgLyoqXG4gICogQ29uc3RydWN0IGEgbmV3IExvY2tTZXR0aW5ncyBvYmplY3QuXG4gICogQHBhcmFtIHtPYmplY3R9IHByb2plY3QgLSBPYmplY3Qgd2l0aCB2YXJpb3VzIHR5cGVzIG9mIG9iamVjdHMuXG4gICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBwcm9qZWN0LmxvY2tzLSBBcnJheSBvZiBsb2NrIG9iamVjdHMuXG4gICogQHJldHVybiB7dm9pZH1cbiAgKi9cbiAgY29uc3RydWN0b3IocHJvamVjdCkge1xuICAgIC8vIGluaXRpYWxpemUgZmllbGRzXG4gICAgdGhpcy5fem9uZXMgPSBwcm9qZWN0LnpvbmVzO1xuICAgIC8vIGNyZWF0ZSBsb2NrIHNldHRpbmcgZm9yIGVhY2ggem9uZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fem9uZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHRoaXMuX3NldHRpbmdzLnNldChcbiAgICAgICAgcHJvamVjdC56b25lc1tpXSxcbiAgICAgICAgbmV3IExvY2tTZXR0aW5nKFxuICAgICAgICAgIHByb2plY3Quem9uZXNbaV0sXG4gICAgICAgICAgcHJvamVjdC5sb2NrcyxcbiAgICAgICAgICB0aGlzLl96b25lcy5sZW5ndGggLSBpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICogQXBwZW5kIHRoZSBIVE1MIGVsZW1lbnQgZm9yIHRoZSBjbGFzcyB0byBhbm90aGVyIEhUTUwgZWxlbWVudC5cbiAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gSFRNTCBlbGVtZW50LlxuICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIElkZW50aWZpZXIgZm9yIEhUTUwgZWxlbWVudCB0byByZWdpc3RlciBTaGlueSBiaW5kaW5ncy5cbiAgKiBAcmV0dXJuIHt2b2lkfVxuICAqL1xuICBhcHBlbmRUbyhlbGVtZW50LCBpZCkge1xuICAgIC8vIGNyZWF0ZSBjb250YWluZXJcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZWxcIik7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChcImxvY2stc2V0dGluZ3NcIiwgXCJzZXR0aW5nc1wiKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsKTtcbiAgICAvLyBhcHBlbmQgZWxlbWVudHMgZm9yIGxvY2sgc2V0dGluZ3NcbiAgICB0aGlzLl9zZXR0aW5ncy5mb3JFYWNoKHggPT4geC5hcHBlbmRUbyhlbCkpO1xuICAgIC8vIGluaXRpYWxpemUgc29ydGFibGUgY2xhc3Mgb24gbG9jayBzZXR0aW5nc1xuICAgIFNvcnRhYmxlLmNyZWF0ZShlbCwge1xuICAgICAgaGFuZGxlOiBcIi5oYW5kbGVcIixcbiAgICAgIGFuaW1hdGlvbjogMTUwLFxuICAgICAgZGF0YUlkQXR0cjogXCJkYXRhLXpvbmVcIixcbiAgICAgIGdob3N0Q2xhc3M6IFwiZ2hvc3RcIixcbiAgICAgIG9uVXBkYXRlOiBldmVudCA9PiB7XG4gICAgICAgIC8vIHVwZGF0ZSBwcmlvcml0eSBvcmRlcnNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl96b25lcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIHRoaXMuX3NldHRpbmdzXG4gICAgICAgICAgICAuZ2V0KGV2ZW50LnRvLmNoaWxkcmVuW2ldLmdldEF0dHJpYnV0ZShcImRhdGEtem9uZVwiKSlcbiAgICAgICAgICAgIC5zZXRQcmlvcml0eVZhbHVlKHRoaXMuX3pvbmVzLmxlbmd0aCAtIGkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRyaWdnZXIgc3luY2hyb25pemF0aW9uXG4gICAgICAgIGlmIChIVE1MV2lkZ2V0cy5zaGlueU1vZGUpIHtcbiAgICAgICAgICBTaGlueS5zZXRJbnB1dFZhbHVlKFxuICAgICAgICAgICAgYCR7aWR9X3N5bmM6YXBzY3AuSnNEYXRhRnJhbWVgLFxuICAgICAgICAgICAgdGhpcy5nZXRTZXR0aW5ncygpLFxuICAgICAgICAgICAge3ByaW9yaXR5OiBcImV2ZW50XCJ9XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIHNldCBldmVudCBoYW5kbGVycyBmb3Igc3luY2hyb25pemF0aW9uXG4gICAgaWYgKEhUTUxXaWRnZXRzLnNoaW55TW9kZSkge1xuICAgICAgLy8gc2V0IGV2ZW50cyBiYXNlZCBvbiBlYWNoIHpvbmUncyBzZWxlY3QgaW5wdXRcbiAgICAgIHRoaXMuX3NldHRpbmdzLmZvckVhY2goeCA9PiB7XG4gICAgICAgIHguX3NlbGVjdC5vbihcImNoYW5nZVwiLCB2YWx1ZSA9PiB7XG4gICAgICAgICAgU2hpbnkuc2V0SW5wdXRWYWx1ZShcbiAgICAgICAgICAgIGAke2lkfV9zeW5jOmFwc2NwLkpzRGF0YUZyYW1lYCxcbiAgICAgICAgICAgIHRoaXMuZ2V0U2V0dGluZ3MoKSxcbiAgICAgICAgICAgIHtwcmlvcml0eTogXCJldmVudFwifVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICogR2V0IHNldHRpbmdzIGZvciBnZW5lcmF0aW5nIGEgc29sdXRpb24uXG4gICogQHJldHVybiB7T2JqZWN0fVxuICAqL1xuICBnZXRTZXR0aW5ncygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6XG4gICAgICAgIEFycmF5LmZyb20odGhpcy5fc2V0dGluZ3MudmFsdWVzKCksIHggPT4geC5nZXRMb2NrSWRzKCkpXG4gICAgICAgIC5mbGF0KDEpLFxuICAgICAgbmFtZTpcbiAgICAgICAgQXJyYXkuZnJvbSh0aGlzLl9zZXR0aW5ncy52YWx1ZXMoKSwgeCA9PiB4LmdldExvY2tOYW1lcygpKVxuICAgICAgICAuZmxhdCgxKSxcbiAgICAgIGNvbHVtbjpcbiAgICAgICAgQXJyYXkuZnJvbSh0aGlzLl9zZXR0aW5ncy52YWx1ZXMoKSwgeCA9PiB4LmdldExvY2tDb2x1bW5zKCkpXG4gICAgICAgIC5mbGF0KDEpLFxuICAgICAgem9uZTpcbiAgICAgICAgQXJyYXkuZnJvbSh0aGlzLl9zZXR0aW5ncy52YWx1ZXMoKSwgeCA9PiB4LmdldExvY2tab25lcygpKVxuICAgICAgICAuZmxhdCgxKSxcbiAgICAgIHByaW9yaXR5OlxuICAgICAgICBBcnJheS5mcm9tKHRoaXMuX3NldHRpbmdzLnZhbHVlcygpLCB4ID0+IHguZ2V0TG9ja1ByaW9yaXR5VmFsdWVzKCkpXG4gICAgICAgIC5mbGF0KDEpXG4gICAgfVxuICB9XG5cbn1cbiIsIi8qKiBJbXBvcnQgZGVwZW5kZW5jaWVzICovXG4vLyBjbGFzc2VzIHRvIGNyZWF0ZSBjb21wb25lbnRzXG5pbXBvcnQge0ZlYXR1cmVTZXR0aW5nc30gZnJvbSBcIi4vZmVhdHVyZS1zZXR0aW5ncy1jbGFzcy5qc1wiO1xuaW1wb3J0IHtMb2NrU2V0dGluZ3N9IGZyb20gXCIuL2xvY2stc2V0dGluZ3MtY2xhc3MuanNcIjtcbmltcG9ydCB7Q29zdFNldHRpbmdzfSBmcm9tIFwiLi9jb3N0LXNldHRpbmdzLWNsYXNzLmpzXCI7XG4vLyBzdHlsaW5nXG5pbXBvcnQgXCIuL2Nzcy9zdHlsZS5jc3NcIjtcblxuLyoqIENsYXNzIHJlcHJlc2VudGluZyBhbiBvYmplY3QgZm9yIGdlbmVyYXRpbmcgYSBzb2x1dGlvbi4gKi9cbmV4cG9ydCBjbGFzcyBTb2x2ZXIge1xuXG4gIC8qKlxuICAgKiBQcm9qZWN0IGRhdGEuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBfcHJvamVjdDtcblxuICAvKipcbiAgKiBIVE1MIGVsZW1lbnQgd2l0aCB0aGUgc3RhcnQgYnV0dG9uLlxuICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgKi9cbiAgX3N0YXJ0QnV0dG9uO1xuXG4gIC8qKlxuICAqIEhUTUwgZWxlbWVudCB3aXRoIHRoZSBzdG9wIGJ1dHRvbi5cbiAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICovXG4gIF9zdG9wQnV0dG9uO1xuXG4gIC8qKlxuICAqIEhUTUwgZWxlbWVudCB3aXRoIHRoZSBuYW1lIGlucHV0LlxuICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgKi9cbiAgX25hbWVJbnB1dDtcblxuICAvKipcbiAgICogT2JqZWN0aXZlIHNldHRpbmdzIG9iamVjdC5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIF9vYmplY3RpdmVTZXR0aW5ncztcblxuICAvKipcbiAgICogRmVhdHVyZSBzZXR0aW5ncyBvYmplY3QuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBfZmVhdHVyZVNldHRpbmdzO1xuXG4gIC8qKlxuICAgKiBMb2NrIHNldHRpbmdzIG9iamVjdC5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIF9sb2NrU2V0dGluZ3M7XG5cbiAgLyoqXG4gICAqIENvc3Qgc2V0dGluZ3Mgb2JqZWN0LlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgX2Nvc3RTZXR0aW5ncztcblxuICAvKipcbiAgKiBDb25zdHJ1Y3QgYSBuZXcgU29sdmVyIG9iamVjdC5cbiAgKiBAcmV0dXJuIHt2b2lkfVxuICAqL1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgLyoqXG4gICogSW5pdGlhbGl6ZSBTb2x2ZXIgd2l0aCBIVE1MIGlkZW50aWZpZXIgYW5kIHByb2plY3QgZGF0YS5cbiAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gSFRNTCBlbGVtZW50LlxuICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9qZWN0IC0gT2JqZWN0IHdpdGggdmFyaW91cyB0eXBlcyBvZiBvYmplY3RzLlxuICAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gcHJvamVjdC5mZWF0dXJlcyAtIEFycmF5IG9mIGZlYXR1cmUgb2JqZWN0cy5cbiAgKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IHByb2plY3QuY29zdHMgLSBBcnJheSBvZiBjb3N0IG9iamVjdHMuXG4gICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBwcm9qZWN0LmxvY2sgLSBBcnJheSBvZiBsb2NrIG9iamVjdHMuXG4gICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmZWF0dXJlVGFyZ2V0Q2hvaWNlcyAtIEFycmF5IG9mIG51bWJlcnMgdXNlZCB0b1xuICAqIGRlZmluZSB0aGUgcG90ZW50aWFsIHZhbHVlcyBmb3Igc2V0dGluZyBmZWF0dXJlIHRhcmdldHMuXG4gICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmZWF0dXJlV2VpZ2h0Q2hvaWNlcyAtIEFycmF5IG9mIG51bWJlcnMgdXNlZCB0b1xuICAqIGRlZmluZSB0aGUgcG90ZW50aWFsIHZhbHVlcyBmb3Igc2V0dGluZyBmZWF0dXJlIHdlaWdodHMuXG4gICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBjb3N0V2VpZ2h0Q2hvaWNlcyAtIEFycmF5IG9mIG51bWJlcnMgdXNlZCB0b1xuICAqIGRlZmluZSB0aGUgcG90ZW50aWFsIHZhbHVlcyBmb3Igc2V0dGluZyBjb3N0IHdlaWdodHMuXG4gICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB6b25lQ29sb3JzIC0gQXJyYXkgb2YgY29sb3JzIGZvciB6b25lcy5cbiAgKiBAcmV0dXJuIHt2b2lkfVxuICAqL1xuICBpbml0aWFsaXplKFxuICAgIGVsLCBwcm9qZWN0LFxuICAgIGZlYXR1cmVUYXJnZXRDaG9pY2VzLCBmZWF0dXJlV2VpZ2h0Q2hvaWNlcywgY29zdFdlaWdodENob2ljZXMsXG4gICAgem9uZUNvbG9yc1xuICApIHtcbiAgICAvLyBpbml0aWFsaXplIGZpZWxkc1xuICAgIHRoaXMuX3Byb2plY3QgPSBwcm9qZWN0O1xuXG4gICAgLy8gYXNzaWduIHN0eWxpbmcgdG8gZWxlbWVudCBiYXNlZCBvbiB6b25lIGNvbG9yc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC56b25lcy5sZW5ndGg7ICsraSkge1xuICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgIGAtLXpvbmUtJHtwcm9qZWN0LnpvbmVzW2ldfS1wcmltYXJ5YCxcbiAgICAgICAgem9uZUNvbG9yc1tpXVxuICAgICAgKTtcbiAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICBgLS16b25lLSR7cHJvamVjdC56b25lc1tpXX0tc2Vjb25kYXJ5YCxcbiAgICAgICAgYGNvbG9yLW1peChpbiBzcmdiLCAke3pvbmVDb2xvcnNbaV19LCB3aGl0ZSA1MCUpYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBpbml0aWFsaXplIG9iamVjdGl2ZSBzZXR0aW5nc1xuICAgIC8vIHRoaXMuX29iamVjdGl2ZVNldHRpbmdzID0gbmV3IE9iamVjdGl2ZVNldHRpbmdzKHByb2plY3QpO1xuICAgIC8vIHRoaXMuX29iamVjdGl2ZVNldHRpbmdzLmFwcGVuZFRvKGVsLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZXMtcGFuZWxcIikpO1xuXG4gICAgLy8gaW5pdGlhbGl6ZSBmZWF0dXJlIHNldHRpbmdzXG4gICAgdGhpcy5fZmVhdHVyZVNldHRpbmdzID0gbmV3IEZlYXR1cmVTZXR0aW5ncyhcbiAgICAgIHByb2plY3QsIGZlYXR1cmVUYXJnZXRDaG9pY2VzLCBmZWF0dXJlV2VpZ2h0Q2hvaWNlc1xuICAgICk7XG4gICAgdGhpcy5fZmVhdHVyZVNldHRpbmdzLmFwcGVuZFRvKGVsLnF1ZXJ5U2VsZWN0b3IoXCIuZmVhdHVyZXMtcGFuZWxcIikpO1xuXG4gICAgLy8gaW5pdGlhbGl6ZSBsb2NrIHNldHRpbmdzXG4gICAgdGhpcy5fbG9ja1NldHRpbmdzID0gbmV3IExvY2tTZXR0aW5ncyhwcm9qZWN0KVxuICAgIHRoaXMuX2xvY2tTZXR0aW5ncy5hcHBlbmRUbyhlbC5xdWVyeVNlbGVjdG9yKFwiLmxvY2tzLXBhbmVsXCIpLCBlbC5pZCk7XG5cbiAgICAvLyBpbml0aWFsaXplIGNvc3Qgc2V0dGluZ3NcbiAgICB0aGlzLl9jb3N0U2V0dGluZ3MgPSBuZXcgQ29zdFNldHRpbmdzKHByb2plY3QsIGNvc3RXZWlnaHRDaG9pY2VzKTtcbiAgICB0aGlzLl9jb3N0U2V0dGluZ3MuYXBwZW5kVG8oZWwucXVlcnlTZWxlY3RvcihcIi5jb3N0cy1wYW5lbFwiKSk7XG5cbiAgICAvLyBpbml0aWFsaXplIGZvb3RlclxuICAgIHRoaXMuX3N0YXJ0QnV0dG9uID0gZWwucXVlcnlTZWxlY3RvcihgIyR7ZWwuaWR9X3N0YXJ0X2J1dHRvbmApO1xuICAgIHRoaXMuX3N0b3BCdXR0b24gPSBlbC5xdWVyeVNlbGVjdG9yKGAjJHtlbC5pZH1fc3RvcF9idXR0b25gKTtcbiAgICB0aGlzLl9uYW1lSW5wdXQgPSBlbC5xdWVyeVNlbGVjdG9yKGAjJHtlbC5pZH1fbmFtZWApO1xuXG4gICAgLy8gc2V0IGV2ZW50IGhhbmRsZXIgZm9yIG5hbWUgaW5wdXRcbiAgICB0aGlzLl9uYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuICAgICAgLy8gaWYgaW5wdXQgaXMgZW1wdHksIGVuc3VyZSB0aGF0IHN0YXJ0IGJ1dHRvbiBpcyBkaXNhYmxlZFxuICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc3RhcnRCdXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBzZXQgZXZlbnQgaGFuZGxlciBmb3Igc3RhcnQgYnV0dG9uXG4gICAgdGhpcy5fc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgLy8gc2VuZCBtZXNzYWdlIHRvIFIgc2Vzc2lvbiB3aXRoIHNldHRpbmdzXG4gICAgICBpZiAoSFRNTFdpZGdldHMuc2hpbnlNb2RlKSB7XG4gICAgICAgIFNoaW55LnNldElucHV0VmFsdWUoXG4gICAgICAgICAgYCR7ZWwuaWR9X3NldHRpbmdzOmFwc2NwLkpzRGF0YUZyYW1lTGlzdGAsXG4gICAgICAgICAgdGhpcy5nZXRTZXR0aW5ncygpLFxuICAgICAgICAgIHtwcmlvcml0eTogXCJldmVudFwifVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgLy8gZW5hYmxlIHN0b3AgYnV0dG9uXG4gICAgICB0aGlzLl9zdG9wQnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICogQWRkIGEgbG9jayB0byB0aGUgU29sdmVyIG9iamVjdC5cbiAgKiBAcGFyYW0ge09iamVjdH0gbG9jayAtIE9iamVjdCB0aGF0IGlzIGEgbG9jay5cbiAgKiBAcmV0dXJuIHt2b2lkfVxuICAqL1xuICBhZGRMb2NrKGxvY2spIHtcbiAgICAvLyBUT0RPXG4gIH1cblxuICAvKipcbiAgKiBSZXNldCBzbyB0aGF0IHNvbHZlciBjYW4gYmUgdXNlZCB0byBnZW5lcmF0ZSBhIG5ldyBzb2x1dGlvbi5cbiAgKiBAcmV0dXJuIHt2b2lkfVxuICAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLl9uYW1lSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIHRoaXMuX3N0YXJ0QnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICAgIHRoaXMuX3N0b3BCdXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgdGhpcy5fc3RhcnRCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiLCBcInJlYWR5XCIpO1xuICAgIHRoaXMuX3N0YXJ0QnV0dG9uLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImNhc2VcIiwgXCJyZWFkeVwiKTtcbiAgICB0aGlzLl9zdG9wQnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIiwgXCJyZWFkeVwiKTtcbiAgICB0aGlzLl9zdG9wQnV0dG9uLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImNhc2VcIiwgXCJyZWFkeVwiKTtcbiAgfVxuXG4gIC8qKlxuICAqIFN5bmNocm9uaXplIHNvbHZlci4gVGhpcyBtZXRob2QgaXMgdXNlZCB0byB1cGRhdGUgdGhlXG4gICogZmVhdHVyZSBzdGF0dXMgYmFycyB0byByZWZsZWN0IGNoYW5nZXMgdG8gdGhlIGxvY2sgc2V0dGluZ3MuXG4gICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBEYXRhIGZyYW1lIHdpdGggbmV3IHN0YXR1cyBiYXIgdmFsdWVzLlxuICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhLmlkIC0gRmVhdHVyZSBpZGVudGlmaWVyLlxuICAqIEByZXR1cm4ge3ZvaWR9XG4gICovXG4gIHN5bmMoZGF0YSkge1xuICAgIHRoaXMuX2ZlYXR1cmVTZXR0aW5ncy5zeW5jKGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICogR2V0IHNldHRpbmdzIGZvciBnZW5lcmF0aW5nIGEgc29sdXRpb24uXG4gICogQHJldHVybiB7T2JqZWN0fVxuICAqL1xuICBnZXRTZXR0aW5ncygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2JqZWN0aXZlczoge2lkOiAxLCB6b25lOiBcIlBMQUNFSE9MREVSXCJ9LFxuICAgICAgLy8gb2JqZWN0aXZlczogdGhpcy5fb2JqZWN0aXZlU2V0dGluZ3MuZ2V0U2V0dGluZ3MoKSxcbiAgICAgIGZlYXR1cmVzOiB0aGlzLl9mZWF0dXJlU2V0dGluZ3MuZ2V0U2V0dGluZ3MoKSxcbiAgICAgIGxvY2tzOiB0aGlzLl9sb2NrU2V0dGluZ3MuZ2V0U2V0dGluZ3MoKSxcbiAgICAgIGNvc3RzOiB0aGlzLl9jb3N0U2V0dGluZ3MuZ2V0U2V0dGluZ3MoKVxuICAgIH07XG4gIH1cblxufVxuIiwiLyoqIEltcG9ydCBkZXBlbmRlbmNpZXMgKi9cbi8vIHV0aWxpdHkgZnVuY3Rpb25zXG5pbXBvcnQge29yZGVyfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiO1xuaW1wb3J0IHtjb252ZXJ0VGFyZ2V0c1RvU2xpZGVyVmFsdWVzfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiO1xuaW1wb3J0IHtjb252ZXJ0U2xpZGVyVmFsdWVzVG9UYXJnZXRzfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiO1xuLy8gc3R5bGluZ1xuaW1wb3J0IFwiLi9jc3Mvc3R5bGUuY3NzXCI7XG5cbi8qKiBDbGFzcyByZXByZXNlbnRpbmcgYSBzdGF0dXMgYmFyLiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdHVzQmFyIHtcblxuICAvLyBwdWJsaWMgZmllbGRzXG5cbiAgLyoqXG4gICAqIEhUTUwgZWxlbWVudC5cbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgZWxlbWVudDtcblxuICAvLyBwcml2YXRlIEhUTUwgZmllbGRzXG5cbiAgLyoqXG4gICAqIEhUTUwgZWxlbWVudHMgdGhhdCBjb250YWluIGxhYmVscy5cbiAgICogQHR5cGUge05vZGVMaXN0PEhUTUxFbGVtZW50Pn1cbiAgICovXG4gIF9sYWJlbHM7XG5cbiAgLyoqXG4gICAqIEhUTUwgZWxlbWVudHMgdGhhdCBjb250YWluIGJhciBzZWdtZW50cy5cbiAgICogQHR5cGUge05vZGVMaXN0PEhUTUxFbGVtZW50Pn1cbiAgICovXG4gIF9zZWdtZW50cztcblxuICAvKipcbiAgICogSFRNTCBlbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIHN0YXJ0IGJhciBjYXAuXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIF9zdGFydF9jYXA7XG5cbiAgLyoqXG4gICAqIEhUTUwgZWxlbWVudCB0aGF0IGNvbnRhaW5zIHRoZSBzdGFydCBiYXIgY2FwLlxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBfZW5kX2NhcDtcblxuICAvKipcbiAgKiBDb25zdHJ1Y3QgYSBuZXcgU3RhdHVzQmFyIG9iamVjdC5cbiAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gSFRNTCBlbGVtZW50IGZvciBzbGlkZXIuXG4gICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIHNldHRpbmdzLlxuICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gb3B0aW9ucy52YWx1ZXMgLSBWYWx1ZXMgdG8gZGlzcGxheS5cbiAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IG9wdGlvbnMuY29sb3JzIC0gQ29sb3JzIGZvciBiYXIgdmFsdWVzLlxuICAqIEBwYXJhbSB7Tm9kZUxpc3Q8SFRNTEVsZW1lbnQ+fSBvcHRpb25zLmxhYmVscyAtIEhUTUwgZWxlbWVudHMgZm9yXG4gICogZm9yIGxhYmVscy4gTm90ZSB0aGF0IHRoZXJlIG11c3QgYmUgYW4gZWxlbWVudCBmb3IgZWFjaCBzbGlkZXIgaGFuZGxlLlxuICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuZm9ybWF0IC0gRnVuY3Rpb24gZm9yIGZvcm1hdHRpbmcgbGFiZWxzLlxuICAqIFRoaXMgbXVzdCBoYXZlIHBhcmFtZXRlcnMgZm9yIGBsYWJlbHNgIGFuZCBgdmFsdWVzYC5cbiAgKiBAcmV0dXJuIHt2b2lkfVxuICAqL1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgLy8gc2V0IHB1YmxpYyBmaWVsZHNcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIC8vIHNldCBwcml2YXRlIGZpZWxkc1xuICAgIHRoaXMuX2NvbG9ycyA9IG9wdGlvbnMuY29sb3JzO1xuICAgIHRoaXMuX2xhYmVscyA9IG9wdGlvbnMubGFiZWxzO1xuICAgIHRoaXMuX2Zvcm1hdHRlciA9IG9wdGlvbnMuZm9ybWF0IHx8ICgobGFiZWxzLCB2YWx1ZXMpID0+IHt9KTtcbiAgICAvLyBjcmVhdGUgZW5kIGJhciBjYXAgZWxlbWVudFxuICAgIHRoaXMuX2VuZF9jYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuX2VuZF9jYXAuY2xhc3NMaXN0LmFkZChcImJhci1lbmQtY2FwXCIpO1xuICAgIC8vIGNyZWF0ZSBzdGFydCBiYXIgY2FwIGVsZW1lbnRcbiAgICB0aGlzLl9zdGFydF9jYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuX3N0YXJ0X2NhcC5jbGFzc0xpc3QuYWRkKFwiYmFyLXN0YXJ0LWNhcFwiKTtcbiAgICAvLyBjcmVhdGUgYmFycyBlbGVtZW50XG4gICAgbGV0IGJhcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJhcnMuY2xhc3NMaXN0LmFkZChcImJhcnNcIik7XG4gICAgLy8gY3JlYXRlIHNlZ21lbnQgZWxlbWVudHNcbiAgICB0aGlzLl9zZWdtZW50cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy52YWx1ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGxldCBzZWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNlZ21lbnQuY2xhc3NMaXN0LmFkZChcImJhci1zZWdtZW50XCIpO1xuICAgICAgdGhpcy5fc2VnbWVudHMucHVzaChzZWdtZW50KTtcbiAgICAgIGJhcnMuYXBwZW5kQ2hpbGQoc2VnbWVudCk7XG4gICAgfVxuICAgIC8vIHJlbmRlciBlbGVtZW50c1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInN0YXR1c0JhcnMtdGFyZ2V0XCIpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5fc3RhcnRfY2FwKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJhcnMpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5fZW5kX2NhcCk7XG4gICAgLy8gc2V0IHZhbHVlcy5cbiAgICB0aGlzLnNldChvcHRpb25zLnZhbHVlcyk7XG4gICAgLy8gYXR0YWNoIHRoaXMgb2JqZWN0IHRvIHRoZSBlbGVtZW50XG4gICAgZWxlbWVudC5zdGF0dXNCYXIgPSB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICogU2V0IHZhbHVlcy5cbiAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHZhbHVlcyAtIFZhbHVlcyB0byBkaXNwbGF5LlxuICAqIEByZXR1cm4ge3ZvaWR9XG4gICovXG4gIHNldCh2YWx1ZXMpIHtcbiAgICAvLyBwcmVsaW1pbmFyeSBjYWxjdWxhdGlvbnNcbiAgICBsZXQgbyA9IG9yZGVyKHZhbHVlcyk7XG4gICAgbGV0IHYgPSBjb252ZXJ0VGFyZ2V0c1RvU2xpZGVyVmFsdWVzKHZhbHVlcyk7XG4gICAgLy8gdXBkYXRlIGxhYmVsc1xuICAgIHRoaXMuX2Zvcm1hdHRlcih0aGlzLl9sYWJlbHMsIHZhbHVlcyk7XG4gICAgLy8gYnkgZGVmYXVsdCwgbWFrZSBzdGFydCBjYXAgdGhlIGNvbG9yIG9mIHNtYWxsZXN0IHZhbHVlXG4gICAgdGhpcy5fc3RhcnRfY2FwLnN0eWxlLmNvbG9yID0gdGhpcy5fY29sb3JzW29bMF1dO1xuICAgIHRoaXMuX3N0YXJ0X2NhcC5zdHlsZS5iYWNrZ3JvdW5kID0gdGhpcy5fY29sb3JzW29bMF1dO1xuICAgIC8vIGJ5IGRlZmF1bHQsIG1ha2UgZW5kIGNhcCB0cmFuc3BhcmVudFxuICAgIHRoaXMuX2VuZF9jYXAuc3R5bGUuY29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG4gICAgdGhpcy5fZW5kX2NhcC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ0cmFuc3BhcmVudFwiO1xuICAgIC8vIHVwZGF0ZSBzZWdtZW50cyBhbmQsIGlmIG5lZWRlZCwgc3RhcnQgYW5kIGVuZCBjYXBzIHRvb1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAvLyB1cGRhdGUgaSd0aCBzZWdtZW50XG4gICAgICB0aGlzLl9zZWdtZW50c1tvW2ldXS5zdHlsZS53aWR0aCA9IGAke01hdGgucm91bmQodltpXSAqIDEwMCl9JWA7XG4gICAgICB0aGlzLl9zZWdtZW50c1tvW2ldXS5zdHlsZVtcInotaW5kZXhcIl0gPSB2YWx1ZXMubGVuZ3RoIC0gaTtcbiAgICAgIHRoaXMuX3NlZ21lbnRzW29baV1dLnN0eWxlLmJhY2tncm91bmQgPSB0aGlzLl9jb2xvcnNbaV07XG4gICAgICAvLyBpZiBpJ3RoIHNlZ21lbnQgY292ZXJzIDEwMCUsIHRoZW4gdXBkYXRlIGNhcHNcbiAgICAgIGlmICh2YWx1ZXNbaV0gPiAwLjk5NSkge1xuICAgICAgICB0aGlzLl9lbmRfY2FwLnN0eWxlLmNvbG9yID0gdGhpcy5fY29sb3JzW2ldO1xuICAgICAgICB0aGlzLl9lbmRfY2FwLnN0eWxlLmJhY2tncm91bmQgPSB0aGlzLl9jb2xvcnNbaV07XG4gICAgICAgIHRoaXMuX3N0YXJ0X2NhcC5zdHlsZS5jb2xvciA9IHRoaXMuX2NvbG9yc1tpXTtcbiAgICAgICAgdGhpcy5fc3RhcnRfY2FwLnN0eWxlLmJhY2tncm91bmQgPSB0aGlzLl9jb2xvcnNbaV07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvKiogSW1wb3J0IGRlcGVuZGVuY2llcyAqL1xuLy8gc3R5bGluZ1xuaW1wb3J0IFwiLi9jc3Mvc3R5bGUuY3NzXCI7XG5cbi8qKlxuICogQWRkIGEgdG9vbCB0aXAuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gSFRNTCBlbGVtZW50IHRoYXQgcmVxdWlyZXMgYSB0b29sIHRpcC47XG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgdG8gZGlzcGxheSBpbiB0b29sIHRpcC5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb29sdGlwKGVsZW1lbnQsIHRleHQpIHtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZ2dsZVwiLCBcInRvb2x0aXBcIik7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1wbGFjZW1lbnRcIiwgXCJ0b3BcIik7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1jb250YWluZXJcIiwgXCJib2R5XCIpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIHRleHQpO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIHByb3ZlbmFuY2UuXG4gKiBAcGFyYW0ge09iamVjdH0geCAtIE9iamVjdCB3aXRoIHByb3BlcnRpZXMgZm9yIGN1c3RvbWl6YXRpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30geC5kZXNjcmlwdGlvbiAtIFRleHQgdG8gZGlzcGxheSBpbiB0b29sIHRpcC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB4Lmljb24gLSBOYW1lIG9mIEZvbnQgQXdlc29tZSBpY29uLlxuICogQHBhcmFtIHtzdHJpbmd9IHguY29sb3IgLSBDb2xvciBmb3IgaWNvbi5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvdmVuYW5jZSh4KSB7XG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBlbC5jbGFzc0xpc3QuYWRkKFwicHJvdmVuYW5jZVwiKTtcbiAgaWYgKHR5cGVvZih4LmRlc2NyaXB0aW9uKSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGFkZFRvb2x0aXAoZWwsIHguZGVzY3JpcHRpb24pO1xuICB9XG4gIGVsLmNsYXNzTGlzdC5hZGQoXCJmYXNcIik7XG4gIGVsLmNsYXNzTGlzdC5hZGQoXCJmYS1cIiArIHguaWNvbik7XG4gIGVsLnN0eWxlLmNvbG9yID0geC5jb2xvcjtcbiAgcmV0dXJuIGVsO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIG5hbWUgbGFiZWwuXG4gKiBAcGFyYW0ge09iamVjdH0geCAtIE9iamVjdCB3aXRoIHByb3BlcnRpZXMgZm9yIGN1c3RvbWl6YXRpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30geC5kZXNjcmlwdGlvbiAtIFRleHQgdG8gZGlzcGxheSBpbiB0b29sIHRpcC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB4Lmljb24gLSBOYW1lIG9mIEZvbnQgQXdlc29tZSBpY29uLlxuICogQHBhcmFtIHtzdHJpbmd9IHguY29sb3IgLSBDb2xvciBmb3IgaWNvbi5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmFtZUxhYmVsKHgpIHtcbiAgLy8gY3JlYXRlIGVsZW1lbnRcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBlbC5jbGFzc0xpc3QuYWRkKFwibmFtZS1sYWJlbFwiKTtcbiAgLy8gc2V0IGxheWVyIG5hbWVcbiAgZWwuaW5uZXJUZXh0ID0geC5uYW1lO1xuICAvLyBpbml0aWFsaXplIHBvcHVwIHRleHRcbiAgbGV0IHRpdGxlID0gXCJcIjtcbiAgLy8gaWYgbmVlZGVkLCBhZGQgdGhlbWUgaW5mb3JtYXRpb24gdG8gcG9wdXAgdGV4dFxuICBpZiAodHlwZW9mKHgudGhlbWVzKSA9PT0gXCJvYmplY3RcIikge1xuICAgIHRpdGxlICs9IGBUaGlzICR7eC5jbGFzc30gYmVsb25ncyB0byB0aGUgZm9sbG93aW5nIHRoZW1lczpgO1xuICAgIHRpdGxlICs9IGAgJHt4LnRoZW1lc1swXS5uYW1lfSAoJHt4LnRoZW1lc1swXS56b25lfSB6b25lKWA7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCB4LnRoZW1lcy5sZW5ndGg7ICsraSkge1xuICAgICAgdGl0bGUgKz0gYCwgJHt4LnRoZW1lc1tpXS5uYW1lfSAoJHt4LnRoZW1lc1tpXS56b25lfSB6b25lKWA7XG4gICAgfVxuICB9XG4gIC8vIGlmIG5lZWRlZCwgYWRkIGRldGFpbHMgdG8gcG9wdXAgdGV4dFxuICBpZiAodHlwZW9mKHgubGF5ZXIpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZih4LmxheWVyLmRldGFpbHMpID09PSBcInN0cmluZ1wiKSB7XG4gICAgaWYgKHRpdGxlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRpdGxlICs9IFwiIFwiO1xuICAgIH1cbiAgICB0aXRsZSArPSB4LmxheWVyLmRldGFpbHM7XG4gIH1cbiAgLy8gaWYgbmVlZGVkLCBpbml0aWFsaXplIHBvcHVwXG4gIGlmICh0aXRsZS5sZW5ndGggPiAwKSB7XG4gICAgYWRkVG9vbHRpcChlbCwgdGl0bGUgKyBcIi5cIik7XG4gIH1cbiAgLy8gcmV0dXJuIGVsZW1lbnRcbiAgcmV0dXJuIGVsO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGhhbmRsZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvbiAtIFRleHQgdG8gZGlzcGxheSBpbiB0b29sIHRpcC5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSGFuZGxlKGRlc2NyaXB0aW9uKSB7XG4gIC8vIGNyZWF0ZSBlbGVtZW50XG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsLmNsYXNzTGlzdC5hZGQoXCJoYW5kbGVcIik7XG4gIC8vIGNyZWF0ZSBpY29uXG4gIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGlmICh0eXBlb2YoZGVzY3JpcHRpb24pID09PSBcInN0cmluZ1wiKSB7XG4gICAgYWRkVG9vbHRpcChlbCwgZGVzY3JpcHRpb24pO1xuICB9XG4gIGljb24uY2xhc3NMaXN0LmFkZChcImZhc1wiLCBcImZhLWFycm93cy1hbHRcIik7XG4gIGljb24uc3R5bGUuY29sb3IgPSBcIi0taGFuZGxlXCI7XG4gIC8vIGFwcGVuZCBpY29uIHRvIGVsZW1lbnRcbiAgZWwuYXBwZW5kQ2hpbGQoaWNvbik7XG4gIC8vIHJldHVybiBlbGVtZW50XG4gIHJldHVybiBlbDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBzZXQgb2Ygc3dpdGNoZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIC0gTnVtYmVyIG9mIHN3aXRjaGVzIHRvIGNyZWF0ZS5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3dpdGNoZXMobiA9IDEsIGNoZWNrZWQgPSB0cnVlKSB7XG4gIC8vIGNyZWF0ZSBjb250YWluZXJcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWwuY2xhc3NMaXN0LmFkZChcInN3aXRjaGVzXCIpO1xuICAvLyBjcmVhdGUgc3dpdGNoZXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAvLyBjcmVhdGUgc3dpdGNoIGZvcm1cbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jaGVja1wiLCBcImZvcm0tc3dpdGNoXCIsIFwicC0wXCIsIFwibS0wXCIpO1xuICAgIC8vIGNyZWF0ZSBzd2l0Y2ggaW5wdXRcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNoZWNrLWlucHV0XCIsIFwic3dpdGNoXCIsIFwibXMtMFwiKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwic3dpdGNoXCIpO1xuICAgIGlucHV0LmNoZWNrZWQgPSBjaGVja2VkO1xuICAgIC8vIGFwcGVuZCBlbGVtZW50XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgZWwuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIH1cbiAgLy8gcmV0dXJuIGVsZW1lbnRcbiAgcmV0dXJuIGVsO1xufVxuIiwiLyoqXG4qIFJvdW5kIG51bWJlciB0byBhIHNwZWNpZmllZCBudW1iZXIgb2YgZGlnaXRzLlxuKiBAcGFyYW0ge051bWJlcn0geCAtIE51bWJlciB0aGF0IHNob3VsZCBiZSByb3VuZGVkLlxuKiBAcGFyYW0ge051bWJlcn0gZGlnaXRzIC0gTnVtYmVyIG9mIGRpZ2l0cyB0byBjb25zaWRlciBmb3Igcm91bmRpbmcuXG4qIEByZXR1cm4ge051bWJlcn1cbiovXG5leHBvcnQgZnVuY3Rpb24gcm91bmRUb0RpZ2l0cyh4LCBkaWdpdHMpIHtcbiAgcmV0dXJuICsoTWF0aC5yb3VuZCh4ICsgYGUrJHtkaWdpdHN9YCkgICsgYGUtJHtkaWdpdHN9YCk7XG59XG5cbi8qKlxuKiBBdXRvbWF0aWNhbGx5IHJvdW5kIG51bWJlciBmb3IgZGlzcGxheS5cbiogQHBhcmFtIHtOdW1iZXJ9IHggLSBOdW1iZXIgdGhhdCBzaG91bGQgYmUgcm91bmRlZC5cbiogQHJldHVybiB7TnVtYmVyfVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBhdXRvUm91bmQoeCkge1xuICAvLyBpbml0aWFsaXplIG91dHB1dFxuICBsZXQgb3V0ID0geDtcbiAgY29uc3QgeSA9IE1hdGguYWJzKHgpO1xuICAvLyByb3VuZCBudW1iZXIgYWNjb3JkaW5nIHRvIHJ1bGVzIG9mIHRodW1iXG4gIGlmICh5ID49IDEwMCkge1xuICAgIC8vIHJvdW5kIHRvIGludGVnZXJcbiAgICBvdXQgPSByb3VuZFRvRGlnaXRzKHgsIDApO1xuICB9IGVsc2UgaWYgKHkgPj0gMTApIHtcbiAgICAvLyByb3VuZCB0byBvbmUgZGVjaW1hbCBwbGFjZVxuICAgIG91dCA9IHJvdW5kVG9EaWdpdHMoeCwgMSk7XG4gIH0gZWxzZSBpZiAoeSA+PSAxKSB7XG4gICAgLy8gcm91bmQgdG8gdHdvIGRlY2ltYWwgcGxhY2VzXG4gICAgb3V0ID0gcm91bmRUb0RpZ2l0cyh4LCAyKTtcbiAgfSBlbHNlIHtcbiAgICAvLyByb3VuZCB0byB0aHJlZSBkZWNpbWFsIHBsYWNlc1xuICAgIG91dCA9IHJvdW5kVG9EaWdpdHMoeCwgMyk7XG4gIH1cbiAgLy8gcmV0dXJuIHJlc3VsdFxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiogSWRlbnRpZnkgdGhlIGFzY2VuZGluZyBvcmRlciBvZiBlbGVtZW50cyBpbiBhbiBhcnJheS5cbiogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB4IC0gQXJyYXkgb2YgbnVtYmVyc1xuKiBAcmV0dXJuIHtBcnJheTxOdW1iZXI+fVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBvcmRlcih4KSB7XG4gIHJldHVybiB4XG4gICAgLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoeyB2YWx1ZSwgaW5kZXggfSkpXG4gICAgLnNvcnQoKGEsIGIpID0+IGEudmFsdWUgLSBiLnZhbHVlKVxuICAgIC5tYXAoaXRlbSA9PiBpdGVtLmluZGV4KTtcbn1cblxuLyoqXG4qIFJlcGxhY2UgTmFOIHdpdGggYW5vdGhlciB2YWx1ZS5cbiogQHBhcmFtIHtudW1iZXJ9IHggLSBWYWx1ZS5cbiogQHBhcmFtIHtudW1iZXJ9IHkgLSBOZXcgdmFsdWUgaWYgeCBpcyBOYU4uXG4qIEByZXR1cm4ge051bWJlcn1cbiovXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZU5hTih4LCB5KSB7XG4gIHJldHVybiBOdW1iZXIuaXNOYU4oeCkgPyB5IDogeDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IHRhcmdldHMgdG8gc2xpZGVyIHZhbHVlc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB4IC0gQXJyYXkgb2YgbnVtYmVycy5cbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VGFyZ2V0c1RvU2xpZGVyVmFsdWVzKHgpIHtcbiAgbGV0IHkgPSBbeFswXV07XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgeC5sZW5ndGg7IGkrKykge1xuICAgIHkucHVzaChyZXBsYWNlTmFOKHhbaV0gKyB5W2kgLSAxXSwgMCkpO1xuICB9XG4gIHJldHVybiB5O1xufVxuXG4vKipcbiAqIENvbnZlcnQgc2xpZGVyIHZhbHVlcyB0byB0YXJnZXRzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHggLSBBcnJheSBvZiBudW1iZXJzLlxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRTbGlkZXJWYWx1ZXNUb1RhcmdldHMoeCkge1xuICBsZXQgbyA9IG9yZGVyKHgpO1xuICBsZXQgeSA9IG5ldyBBcnJheSh4Lmxlbmd0aCkuZmlsbCgwKTtcbiAgbGV0IHN1bSA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xuICAgIHlbb1tpXV0gPSByZXBsYWNlTmFOKHJvdW5kVG9EaWdpdHMoeFtvW2ldXSAtIHN1bSwgMyksIDApO1xuICAgIHN1bSArPSB5W29baV1dO1xuICB9XG4gIHJldHVybiB5O1xufVxuIiwiLyoqXG4qIENvbnZlcnQgYSBzdHJpbmcgdG8gYSBIVE1MIGVsZW1lbnQuIFRoaXMgaXMgZG9uZSBieSBjcmVhdGluZyBhIHNwYW4gZWxlbWVudFxuKiB0aGF0IGNvbnRhaW5zIGEgc2VwYXJhdGUgc3BhbiBlbGVtZW50IGZvciBlYWNoIHdvcmQuXG4qIEBwYXJhbSB7c3RyaW5nfSB4IC0gU3RyaW5nLlxuKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nVG9IdG1sRWxlbWVudCh4KSB7XG4gIGxldCBvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgeC5zcGxpdChcIiBcIikuZm9yRWFjaCgoeCkgPT4ge1xuICAgIGxldCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcy5pbm5lclRleHQgPSB4O1xuICAgIG91dC5hcHBlbmRDaGlsZChzKTtcbiAgfSlcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4qIFJlbW92ZSBhbGwgY2hpbGQgbm9kZXMgZnJvbSBhIEhUTUwgZWxlbWVudC5cbiogQHBhcmFtIHtvYmplY3R9IHBhcmVudCAtIEhUTUwgZWxlbWVudC5cbiogQHJldHVybiB7dm9pZH1cbiogQHNlZSBodHRwczovL3d3dy5qYXZhc2NyaXB0dHV0b3JpYWwubmV0L2RvbS9tYW5pcHVsYXRpbmcvcmVtb3ZlLWFsbC1jaGlsZC1ub2Rlcy9cbiovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbi8qKlxuKiBDb252ZXJ0IHRvIGFycmF5LlxuKiBAcGFyYW0ge29iamVjdH0geCAtIE9iamVjdC5cbiogQHJldHVybiB7QXJyYXk8b2JqZWN0Pn1cbiovXG5leHBvcnQgZnVuY3Rpb24gdG9BcnJheShvYmplY3QpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqZWN0KSkge1xuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cbiAgcmV0dXJuIFtvYmplY3RdO1xufVxuIiwiLyoqXG4qIFRvbSBTZWxlY3QgdjIuNi4yXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qL1xuIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6KGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczplfHxzZWxmKS5Ub21TZWxlY3Q9dCgpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCJcbmZ1bmN0aW9uIGUoZSx0KXtlLnNwbGl0KC9cXHMrLykuZm9yRWFjaChlPT57dChlKX0pfWNsYXNzIHR7Y29uc3RydWN0b3IoKXt0aGlzLl9ldmVudHM9e319b24odCxpKXtlKHQsZT0+e2NvbnN0IHQ9dGhpcy5fZXZlbnRzW2VdfHxbXVxudC5wdXNoKGkpLHRoaXMuX2V2ZW50c1tlXT10fSl9b2ZmKHQsaSl7dmFyIHM9YXJndW1lbnRzLmxlbmd0aFxuMCE9PXM/ZSh0LGU9PntpZigxPT09cylyZXR1cm4gdm9pZCBkZWxldGUgdGhpcy5fZXZlbnRzW2VdXG5jb25zdCB0PXRoaXMuX2V2ZW50c1tlXVxudm9pZCAwIT09dCYmKHQuc3BsaWNlKHQuaW5kZXhPZihpKSwxKSx0aGlzLl9ldmVudHNbZV09dCl9KTp0aGlzLl9ldmVudHM9e319dHJpZ2dlcih0LC4uLmkpe3ZhciBzPXRoaXNcbmUodCxlPT57Y29uc3QgdD1zLl9ldmVudHNbZV1cbnZvaWQgMCE9PXQmJnQuZm9yRWFjaChlPT57ZS5hcHBseShzLGkpfSl9KX19Y29uc3QgaT1lPT4oZT1lLmZpbHRlcihCb29sZWFuKSkubGVuZ3RoPDI/ZVswXXx8XCJcIjoxPT1sKGUpP1wiW1wiK2Uuam9pbihcIlwiKStcIl1cIjpcIig/OlwiK2Uuam9pbihcInxcIikrXCIpXCIscz1lPT57aWYoIW8oZSkpcmV0dXJuIGUuam9pbihcIlwiKVxubGV0IHQ9XCJcIixpPTBcbmNvbnN0IHM9KCk9PntpPjEmJih0Kz1cIntcIitpK1wifVwiKX1cbnJldHVybiBlLmZvckVhY2goKG4sbyk9PntuIT09ZVtvLTFdPyhzKCksdCs9bixpPTEpOmkrK30pLHMoKSx0fSxuPWU9PntsZXQgdD1BcnJheS5mcm9tKGUpXG5yZXR1cm4gaSh0KX0sbz1lPT5uZXcgU2V0KGUpLnNpemUhPT1lLmxlbmd0aCxyPWU9PihlK1wiXCIpLnJlcGxhY2UoLyhbXFwkXFwoXFwpXFwqXFwrXFwuXFw/XFxbXFxdXFxeXFx7XFx8XFx9XFxcXF0pL2d1LFwiXFxcXCQxXCIpLGw9ZT0+ZS5yZWR1Y2UoKGUsdCk9Pk1hdGgubWF4KGUsYSh0KSksMCksYT1lPT5BcnJheS5mcm9tKGUpLmxlbmd0aCxjPWU9PntpZigxPT09ZS5sZW5ndGgpcmV0dXJuW1tlXV1cbmxldCB0PVtdXG5jb25zdCBpPWUuc3Vic3RyaW5nKDEpXG5yZXR1cm4gYyhpKS5mb3JFYWNoKGZ1bmN0aW9uKGkpe2xldCBzPWkuc2xpY2UoMClcbnNbMF09ZS5jaGFyQXQoMCkrc1swXSx0LnB1c2gocykscz1pLnNsaWNlKDApLHMudW5zaGlmdChlLmNoYXJBdCgwKSksdC5wdXNoKHMpfSksdH0sZD1bWzAsNjU1MzVdXVxubGV0IHUscFxuY29uc3QgaD17fSxnPXtcIi9cIjpcIuKBhOKIlVwiLDA6XCLfgFwiLGE6XCLisaXJkMmRXCIsYWE6XCLqnLNcIixhZTpcIsOmx73Ho1wiLGFvOlwi6py1XCIsYXU6XCLqnLdcIixhdjpcIuqcueqcu1wiLGF5Olwi6py9XCIsYjpcIsaAyZPGg1wiLGM6XCLqnL/GiMi84oaEXCIsZDpcIsSRyZfJluG0hcaM6q631IHJplwiLGU6XCLJm8ed4bSHyYdcIixmOlwi6p28xpJcIixnOlwix6XJoOqeoeG1ueqdv8miXCIsaDpcIsSn4rGo4rG2yaVcIixpOlwiyajEsVwiLGo6XCLJici3XCIsazpcIsaZ4rGq6p2B6p2D6p2F6p6jXCIsbDpcIsWCxprJq+Kxoeqdieqdh+qegcmtXCIsbTpcIsmxya/Pu1wiLG46XCLqnqXGnsmy6p6R4bSO0LvUiVwiLG86XCLDuMe/yZTJteqdi+qdjeG0kVwiLG9lOlwixZNcIixvaTpcIsajXCIsb286XCLqnY9cIixvdTpcIsijXCIscDpcIsal4bW96p2R6p2T6p2Vz4FcIixxOlwi6p2X6p2ZyYtcIixyOlwiyY3Jveqdm+qep+qeg1wiLHM6XCLDn8i/6p6p6p6FyoJcIix0OlwixafGrcqI4rGm6p6HXCIsdGg6XCLDvlwiLHR6Olwi6pypXCIsdTpcIsqJXCIsdjpcIsqL6p2fyoxcIix2eTpcIuqdoVwiLHc6XCLisbNcIix5OlwixrTJj+G7v1wiLHo6XCLGtsilyYDisazqnaNcIixodjpcIsaVXCJ9XG5mb3IobGV0IGUgaW4gZyl7bGV0IHQ9Z1tlXXx8XCJcIlxuZm9yKGxldCBpPTA7aTx0Lmxlbmd0aDtpKyspe2xldCBzPXQuc3Vic3RyaW5nKGksaSsxKVxuaFtzXT1lfX1jb25zdCBmPW5ldyBSZWdFeHAoT2JqZWN0LmtleXMoaCkuam9pbihcInxcIikrXCJ8W8yALc2vwrfKvsq8XVwiLFwiZ3VcIiksbT0oZSx0PVwiTkZLRFwiKT0+ZS5ub3JtYWxpemUodCksdj1lPT5BcnJheS5mcm9tKGUpLnJlZHVjZSgoZSx0KT0+ZStPKHQpLFwiXCIpLE89ZT0+KGU9bShlKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoZixlPT5oW2VdfHxcIlwiKSxtKGUsXCJORkNcIikpXG5jb25zdCBiPWU9Pntjb25zdCB0PXt9LGk9KGUsaSk9Pntjb25zdCBzPXRbZV18fG5ldyBTZXQsbz1uZXcgUmVnRXhwKFwiXlwiK24ocykrXCIkXCIsXCJpdVwiKVxuaS5tYXRjaChvKXx8KHMuYWRkKHIoaSkpLHRbZV09cyl9XG5mb3IobGV0IHQgb2YgZnVuY3Rpb24qKGUpe2Zvcihjb25zdFt0LGldb2YgZSlmb3IobGV0IGU9dDtlPD1pO2UrKyl7bGV0IHQ9U3RyaW5nLmZyb21DaGFyQ29kZShlKSxpPXYodClcbmkhPXQudG9Mb3dlckNhc2UoKSYmKGkubGVuZ3RoPjN8fDAhPWkubGVuZ3RoJiYoeWllbGR7Zm9sZGVkOmksY29tcG9zZWQ6dCxjb2RlX3BvaW50OmV9KSl9fShlKSlpKHQuZm9sZGVkLHQuZm9sZGVkKSxpKHQuZm9sZGVkLHQuY29tcG9zZWQpXG5yZXR1cm4gdH0seT1lPT57Y29uc3QgdD1iKGUpLHM9e31cbmxldCBvPVtdXG5mb3IobGV0IGUgaW4gdCl7bGV0IGk9dFtlXVxuaSYmKHNbZV09bihpKSksZS5sZW5ndGg+MSYmby5wdXNoKHIoZSkpfW8uc29ydCgoZSx0KT0+dC5sZW5ndGgtZS5sZW5ndGgpXG5jb25zdCBsPWkobylcbnJldHVybiBwPW5ldyBSZWdFeHAoXCJeXCIrbCxcInVcIiksc30sdz0oZSx0PTEpPT4odD1NYXRoLm1heCh0LGUubGVuZ3RoLTEpLGkoYyhlKS5tYXAoZT0+KChlLHQ9MSk9PntsZXQgaT0wXG5yZXR1cm4gZT1lLm1hcChlPT4odVtlXSYmKGkrPWUubGVuZ3RoKSx1W2VdfHxlKSksaT49dD9zKGUpOlwiXCJ9KShlLHQpKSkpLFM9KGUsdD0hMCk9PntsZXQgbj1lLmxlbmd0aD4xPzE6MFxucmV0dXJuIGkoZS5tYXAoZT0+e2xldCBpPVtdXG5jb25zdCBvPXQ/ZS5sZW5ndGgoKTplLmxlbmd0aCgpLTFcbmZvcihsZXQgdD0wO3Q8bzt0KyspaS5wdXNoKHcoZS5zdWJzdHJzW3RdfHxcIlwiLG4pKVxucmV0dXJuIHMoaSl9KSl9LF89KGUsdCk9Pntmb3IoY29uc3QgaSBvZiB0KXtpZihpLnN0YXJ0IT1lLnN0YXJ0fHxpLmVuZCE9ZS5lbmQpY29udGludWVcbmlmKGkuc3Vic3Rycy5qb2luKFwiXCIpIT09ZS5zdWJzdHJzLmpvaW4oXCJcIikpY29udGludWVcbmxldCB0PWUucGFydHNcbmNvbnN0IHM9ZT0+e2Zvcihjb25zdCBpIG9mIHQpe2lmKGkuc3RhcnQ9PT1lLnN0YXJ0JiZpLnN1YnN0cj09PWUuc3Vic3RyKXJldHVybiExXG5pZigxIT1lLmxlbmd0aCYmMSE9aS5sZW5ndGgpe2lmKGUuc3RhcnQ8aS5zdGFydCYmZS5lbmQ+aS5zdGFydClyZXR1cm4hMFxuaWYoaS5zdGFydDxlLnN0YXJ0JiZpLmVuZD5lLnN0YXJ0KXJldHVybiEwfX1yZXR1cm4hMX1cbmlmKCEoaS5wYXJ0cy5maWx0ZXIocykubGVuZ3RoPjApKXJldHVybiEwfXJldHVybiExfVxuY2xhc3MgQ3twYXJ0c1xuc3Vic3Ryc1xuc3RhcnRcbmVuZFxuY29uc3RydWN0b3IoKXt0aGlzLnBhcnRzPVtdLHRoaXMuc3Vic3Rycz1bXSx0aGlzLnN0YXJ0PTAsdGhpcy5lbmQ9MH1hZGQoZSl7ZSYmKHRoaXMucGFydHMucHVzaChlKSx0aGlzLnN1YnN0cnMucHVzaChlLnN1YnN0ciksdGhpcy5zdGFydD1NYXRoLm1pbihlLnN0YXJ0LHRoaXMuc3RhcnQpLHRoaXMuZW5kPU1hdGgubWF4KGUuZW5kLHRoaXMuZW5kKSl9bGFzdCgpe3JldHVybiB0aGlzLnBhcnRzW3RoaXMucGFydHMubGVuZ3RoLTFdfWxlbmd0aCgpe3JldHVybiB0aGlzLnBhcnRzLmxlbmd0aH1jbG9uZShlLHQpe2xldCBpPW5ldyBDLHM9SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnBhcnRzKSksbj1zLnBvcCgpXG5mb3IoY29uc3QgZSBvZiBzKWkuYWRkKGUpXG5sZXQgbz10LnN1YnN0ci5zdWJzdHJpbmcoMCxlLW4uc3RhcnQpLHI9by5sZW5ndGhcbnJldHVybiBpLmFkZCh7c3RhcnQ6bi5zdGFydCxlbmQ6bi5zdGFydCtyLGxlbmd0aDpyLHN1YnN0cjpvfSksaX19Y29uc3QgeD1lPT57dm9pZCAwPT09dSYmKHU9eShkKSksZT12KGUpXG5sZXQgdD1cIlwiLGk9W25ldyBDXVxuZm9yKGxldCBzPTA7czxlLmxlbmd0aDtzKyspe2xldCBuPWUuc3Vic3RyaW5nKHMpLm1hdGNoKHApXG5jb25zdCBvPWUuc3Vic3RyaW5nKHMscysxKSxyPW4/blswXTpudWxsXG5sZXQgbD1bXSxhPW5ldyBTZXRcbmZvcihjb25zdCBlIG9mIGkpe2NvbnN0IHQ9ZS5sYXN0KClcbmlmKCF0fHwxPT10Lmxlbmd0aHx8dC5lbmQ8PXMpaWYocil7Y29uc3QgdD1yLmxlbmd0aFxuZS5hZGQoe3N0YXJ0OnMsZW5kOnMrdCxsZW5ndGg6dCxzdWJzdHI6cn0pLGEuYWRkKFwiMVwiKX1lbHNlIGUuYWRkKHtzdGFydDpzLGVuZDpzKzEsbGVuZ3RoOjEsc3Vic3RyOm99KSxhLmFkZChcIjJcIilcbmVsc2UgaWYocil7bGV0IGk9ZS5jbG9uZShzLHQpXG5jb25zdCBuPXIubGVuZ3RoXG5pLmFkZCh7c3RhcnQ6cyxlbmQ6cytuLGxlbmd0aDpuLHN1YnN0cjpyfSksbC5wdXNoKGkpfWVsc2UgYS5hZGQoXCIzXCIpfWlmKGwubGVuZ3RoPjApe2w9bC5zb3J0KChlLHQpPT5lLmxlbmd0aCgpLXQubGVuZ3RoKCkpXG5mb3IobGV0IGUgb2YgbClfKGUsaSl8fGkucHVzaChlKX1lbHNlIGlmKHM+MCYmMT09YS5zaXplJiYhYS5oYXMoXCIzXCIpKXt0Kz1TKGksITEpXG5sZXQgZT1uZXcgQ1xuY29uc3Qgcz1pWzBdXG5zJiZlLmFkZChzLmxhc3QoKSksaT1bZV19fXJldHVybiB0Kz1TKGksITApLHR9LEE9KGUsdCk9PntpZihlKXJldHVybiBlW3RdfSxJPShlLHQpPT57aWYoZSl7Zm9yKHZhciBpLHM9dC5zcGxpdChcIi5cIik7KGk9cy5zaGlmdCgpKSYmKGU9ZVtpXSk7KTtyZXR1cm4gZX19LGs9KGUsdCxpKT0+e3ZhciBzLG5cbnJldHVybiBlPyhlKz1cIlwiLG51bGw9PXQucmVnZXh8fC0xPT09KG49ZS5zZWFyY2godC5yZWdleCkpPzA6KHM9dC5zdHJpbmcubGVuZ3RoL2UubGVuZ3RoLDA9PT1uJiYocys9LjUpLHMqaSkpOjB9LEY9KGUsdCk9Pnt2YXIgaT1lW3RdXG5pZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBpKXJldHVybiBpXG5pJiYhQXJyYXkuaXNBcnJheShpKSYmKGVbdF09W2ldKX0sTD0oZSx0KT0+e2lmKEFycmF5LmlzQXJyYXkoZSkpZS5mb3JFYWNoKHQpXG5lbHNlIGZvcih2YXIgaSBpbiBlKWUuaGFzT3duUHJvcGVydHkoaSkmJnQoZVtpXSxpKX0sRT0oZSx0KT0+XCJudW1iZXJcIj09dHlwZW9mIGUmJlwibnVtYmVyXCI9PXR5cGVvZiB0P2U+dD8xOmU8dD8tMTowOihlPXYoZStcIlwiKS50b0xvd2VyQ2FzZSgpKT4odD12KHQrXCJcIikudG9Mb3dlckNhc2UoKSk/MTp0PmU/LTE6MFxuY2xhc3MgVHtpdGVtc1xuc2V0dGluZ3NcbmNvbnN0cnVjdG9yKGUsdCl7dGhpcy5pdGVtcz1lLHRoaXMuc2V0dGluZ3M9dHx8e2RpYWNyaXRpY3M6ITB9fXRva2VuaXplKGUsdCxpKXtpZighZXx8IWUubGVuZ3RoKXJldHVybltdXG5jb25zdCBzPVtdLG49ZS5zcGxpdCgvXFxzKy8pXG52YXIgb1xucmV0dXJuIGkmJihvPW5ldyBSZWdFeHAoXCJeKFwiK09iamVjdC5rZXlzKGkpLm1hcChyKS5qb2luKFwifFwiKStcIik6KC4qKSRcIikpLG4uZm9yRWFjaChlPT57bGV0IGksbj1udWxsLGw9bnVsbFxubyYmKGk9ZS5tYXRjaChvKSkmJihuPWlbMV0sZT1pWzJdKSxlLmxlbmd0aD4wJiYobD10aGlzLnNldHRpbmdzLmRpYWNyaXRpY3M/eChlKXx8bnVsbDpyKGUpLGwmJnQmJihsPVwiXFxcXGJcIitsKSkscy5wdXNoKHtzdHJpbmc6ZSxyZWdleDpsP25ldyBSZWdFeHAobCxcIml1XCIpOm51bGwsZmllbGQ6bn0pfSksc31nZXRTY29yZUZ1bmN0aW9uKGUsdCl7dmFyIGk9dGhpcy5wcmVwYXJlU2VhcmNoKGUsdClcbnJldHVybiB0aGlzLl9nZXRTY29yZUZ1bmN0aW9uKGkpfV9nZXRTY29yZUZ1bmN0aW9uKGUpe2NvbnN0IHQ9ZS50b2tlbnMsaT10Lmxlbmd0aFxuaWYoIWkpcmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIDB9XG5jb25zdCBzPWUub3B0aW9ucy5maWVsZHMsbj1lLndlaWdodHMsbz1zLmxlbmd0aCxyPWUuZ2V0QXR0ckZuXG5pZighbylyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gMX1cbmNvbnN0IGw9MT09PW8/ZnVuY3Rpb24oZSx0KXtjb25zdCBpPXNbMF0uZmllbGRcbnJldHVybiBrKHIodCxpKSxlLG5baV18fDEpfTpmdW5jdGlvbihlLHQpe3ZhciBpPTBcbmlmKGUuZmllbGQpe2NvbnN0IHM9cih0LGUuZmllbGQpXG4hZS5yZWdleCYmcz9pKz0xL286aSs9ayhzLGUsMSl9ZWxzZSBMKG4sKHMsbik9PntpKz1rKHIodCxuKSxlLHMpfSlcbnJldHVybiBpL299XG5yZXR1cm4gMT09PWk/ZnVuY3Rpb24oZSl7cmV0dXJuIGwodFswXSxlKX06XCJhbmRcIj09PWUub3B0aW9ucy5jb25qdW5jdGlvbj9mdW5jdGlvbihlKXt2YXIgcyxuPTBcbmZvcihsZXQgaSBvZiB0KXtpZigocz1sKGksZSkpPD0wKXJldHVybiAwXG5uKz1zfXJldHVybiBuL2l9OmZ1bmN0aW9uKGUpe3ZhciBzPTBcbnJldHVybiBMKHQsdD0+e3MrPWwodCxlKX0pLHMvaX19Z2V0U29ydEZ1bmN0aW9uKGUsdCl7dmFyIGk9dGhpcy5wcmVwYXJlU2VhcmNoKGUsdClcbnJldHVybiB0aGlzLl9nZXRTb3J0RnVuY3Rpb24oaSl9X2dldFNvcnRGdW5jdGlvbihlKXt2YXIgdCxpPVtdXG5jb25zdCBzPXRoaXMsbj1lLm9wdGlvbnMsbz0hZS5xdWVyeSYmbi5zb3J0X2VtcHR5P24uc29ydF9lbXB0eTpuLnNvcnRcbmlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG8pcmV0dXJuIG8uYmluZCh0aGlzKVxuY29uc3Qgcj1mdW5jdGlvbih0LGkpe3JldHVyblwiJHNjb3JlXCI9PT10P2kuc2NvcmU6ZS5nZXRBdHRyRm4ocy5pdGVtc1tpLmlkXSx0KX1cbmlmKG8pZm9yKGxldCB0IG9mIG8pKGUucXVlcnl8fFwiJHNjb3JlXCIhPT10LmZpZWxkKSYmaS5wdXNoKHQpXG5pZihlLnF1ZXJ5KXt0PSEwXG5mb3IobGV0IGUgb2YgaSlpZihcIiRzY29yZVwiPT09ZS5maWVsZCl7dD0hMVxuYnJlYWt9dCYmaS51bnNoaWZ0KHtmaWVsZDpcIiRzY29yZVwiLGRpcmVjdGlvbjpcImRlc2NcIn0pfWVsc2UgaT1pLmZpbHRlcihlPT5cIiRzY29yZVwiIT09ZS5maWVsZClcbnJldHVybiBpLmxlbmd0aD9mdW5jdGlvbihlLHQpe3ZhciBzLG5cbmZvcihsZXQgbyBvZiBpKXtpZihuPW8uZmllbGQscz0oXCJkZXNjXCI9PT1vLmRpcmVjdGlvbj8tMToxKSpFKHIobixlKSxyKG4sdCkpKXJldHVybiBzfXJldHVybiAwfTpudWxsfXByZXBhcmVTZWFyY2goZSx0KXtjb25zdCBpPXt9XG52YXIgcz1PYmplY3QuYXNzaWduKHt9LHQpXG5pZihGKHMsXCJzb3J0XCIpLEYocyxcInNvcnRfZW1wdHlcIikscy5maWVsZHMpe0YocyxcImZpZWxkc1wiKVxuY29uc3QgZT1bXVxucy5maWVsZHMuZm9yRWFjaCh0PT57XCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PXtmaWVsZDp0LHdlaWdodDoxfSksZS5wdXNoKHQpLGlbdC5maWVsZF09XCJ3ZWlnaHRcImluIHQ/dC53ZWlnaHQ6MX0pLHMuZmllbGRzPWV9cmV0dXJue29wdGlvbnM6cyxxdWVyeTplLnRvTG93ZXJDYXNlKCkudHJpbSgpLHRva2Vuczp0aGlzLnRva2VuaXplKGUscy5yZXNwZWN0X3dvcmRfYm91bmRhcmllcyxpKSx0b3RhbDowLGl0ZW1zOltdLHdlaWdodHM6aSxnZXRBdHRyRm46cy5uZXN0aW5nP0k6QX19c2VhcmNoKGUsdCl7dmFyIGkscyxuPXRoaXNcbnM9dGhpcy5wcmVwYXJlU2VhcmNoKGUsdCksdD1zLm9wdGlvbnMsZT1zLnF1ZXJ5XG5jb25zdCBvPXQuc2NvcmV8fG4uX2dldFNjb3JlRnVuY3Rpb24ocylcbmUubGVuZ3RoP0wobi5pdGVtcywoZSxuKT0+e2k9byhlKSwoITE9PT10LmZpbHRlcnx8aT4wKSYmcy5pdGVtcy5wdXNoKHtzY29yZTppLGlkOm59KX0pOkwobi5pdGVtcywoZSx0KT0+e3MuaXRlbXMucHVzaCh7c2NvcmU6MSxpZDp0fSl9KVxuY29uc3Qgcj1uLl9nZXRTb3J0RnVuY3Rpb24ocylcbnJldHVybiByJiZzLml0ZW1zLnNvcnQocikscy50b3RhbD1zLml0ZW1zLmxlbmd0aCxcIm51bWJlclwiPT10eXBlb2YgdC5saW1pdCYmKHMuaXRlbXM9cy5pdGVtcy5zbGljZSgwLHQubGltaXQpKSxzfX1jb25zdCBQPWU9Pm51bGw9PWU/bnVsbDpOKGUpLE49ZT0+XCJib29sZWFuXCI9PXR5cGVvZiBlP2U/XCIxXCI6XCIwXCI6ZStcIlwiLEQ9ZT0+KGUrXCJcIikucmVwbGFjZSgvJi9nLFwiJmFtcDtcIikucmVwbGFjZSgvPC9nLFwiJmx0O1wiKS5yZXBsYWNlKC8+L2csXCImZ3Q7XCIpLnJlcGxhY2UoL1wiL2csXCImcXVvdDtcIiksVj0oZSx0KT0+e3ZhciBpXG5yZXR1cm4gZnVuY3Rpb24ocyxuKXt2YXIgbz10aGlzXG5pJiYoby5sb2FkaW5nPU1hdGgubWF4KG8ubG9hZGluZy0xLDApLGNsZWFyVGltZW91dChpKSksaT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aT1udWxsLG8ubG9hZGVkU2VhcmNoZXNbc109ITAsZS5jYWxsKG8scyxuKX0sdCl9fSxqPShlLHQsaSk9Pnt2YXIgcyxuPWUudHJpZ2dlcixvPXt9XG5mb3IocyBvZihlLnRyaWdnZXI9ZnVuY3Rpb24oKXt2YXIgaT1hcmd1bWVudHNbMF1cbmlmKC0xPT09dC5pbmRleE9mKGkpKXJldHVybiBuLmFwcGx5KGUsYXJndW1lbnRzKVxub1tpXT1hcmd1bWVudHN9LGkuYXBwbHkoZSxbXSksZS50cmlnZ2VyPW4sdCkpcyBpbiBvJiZuLmFwcGx5KGUsb1tzXSl9LCQ9KGUsdD0hMSk9PntlJiYoZS5wcmV2ZW50RGVmYXVsdCgpLHQmJmUuc3RvcFByb3BhZ2F0aW9uKCkpfSxxPShlLHQsaSxzKT0+e2UuYWRkRXZlbnRMaXN0ZW5lcih0LGkscyl9LFI9KGUsdCk9PiEhdCYmKCEhdFtlXSYmMT09PSh0LmFsdEtleT8xOjApKyh0LmN0cmxLZXk/MTowKSsodC5zaGlmdEtleT8xOjApKyh0Lm1ldGFLZXk/MTowKSksSD0oZSx0KT0+e2NvbnN0IGk9ZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKVxucmV0dXJuIGl8fChlLnNldEF0dHJpYnV0ZShcImlkXCIsdCksdCl9LE09ZT0+ZS5yZXBsYWNlKC9bXFxcXFwiJ10vZyxcIlxcXFwkJlwiKSx6PShlLHQpPT57dCYmZS5hcHBlbmQodCl9LEI9KGUsdCk9PntpZihBcnJheS5pc0FycmF5KGUpKWUuZm9yRWFjaCh0KVxuZWxzZSBmb3IodmFyIGkgaW4gZSllLmhhc093blByb3BlcnR5KGkpJiZ0KGVbaV0saSl9LEs9ZT0+e2lmKGUuanF1ZXJ5KXJldHVybiBlWzBdXG5pZihlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpcmV0dXJuIGVcbmlmKEcoZSkpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKVxucmV0dXJuIHQuaW5uZXJIVE1MPWUudHJpbSgpLHQuY29udGVudC5maXJzdENoaWxkfXJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUpfSxHPWU9Plwic3RyaW5nXCI9PXR5cGVvZiBlJiZlLmluZGV4T2YoXCI8XCIpPi0xLFU9KGUsdCk9Pnt2YXIgaT1kb2N1bWVudC5jcmVhdGVFdmVudChcIkhUTUxFdmVudHNcIilcbmkuaW5pdEV2ZW50KHQsITAsITEpLGUuZGlzcGF0Y2hFdmVudChpKX0sVz0oZSx0KT0+e09iamVjdC5hc3NpZ24oZS5zdHlsZSx0KX0sUT0oZSwuLi50KT0+e3ZhciBpPVgodCk7KGU9WShlKSkubWFwKGU9PntpLm1hcCh0PT57ZS5jbGFzc0xpc3QuYWRkKHQpfSl9KX0sSj0oZSwuLi50KT0+e3ZhciBpPVgodCk7KGU9WShlKSkubWFwKGU9PntpLm1hcCh0PT57ZS5jbGFzc0xpc3QucmVtb3ZlKHQpfSl9KX0sWD1lPT57dmFyIHQ9W11cbnJldHVybiBCKGUsZT0+e1wic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT1lLnRyaW0oKS5zcGxpdCgvW1xcdFxcblxcZlxcclxcc10vKSksQXJyYXkuaXNBcnJheShlKSYmKHQ9dC5jb25jYXQoZSkpfSksdC5maWx0ZXIoQm9vbGVhbil9LFk9ZT0+KEFycmF5LmlzQXJyYXkoZSl8fChlPVtlXSksZSksWj0oZSx0LGkpPT57aWYoIWl8fGkuY29udGFpbnMoZSkpZm9yKDtlJiZlLm1hdGNoZXM7KXtpZihlLm1hdGNoZXModCkpcmV0dXJuIGVcbmU9ZS5wYXJlbnROb2RlfX0sZWU9KGUsdD0wKT0+dD4wP2VbZS5sZW5ndGgtMV06ZVswXSx0ZT0oZSx0KT0+e2lmKCFlKXJldHVybi0xXG50PXR8fGUubm9kZU5hbWVcbmZvcih2YXIgaT0wO2U9ZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nOyllLm1hdGNoZXModCkmJmkrK1xucmV0dXJuIGl9LGllPShlLHQpPT57Qih0LCh0LGkpPT57bnVsbD09dD9lLnJlbW92ZUF0dHJpYnV0ZShpKTplLnNldEF0dHJpYnV0ZShpLFwiXCIrdCl9KX0sc2U9KGUsdCk9PntlLnBhcmVudE5vZGUmJmUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQodCxlKX0sbmU9KGUsdCk9PntpZihudWxsPT09dClyZXR1cm5cbmlmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXtpZighdC5sZW5ndGgpcmV0dXJuXG50PW5ldyBSZWdFeHAodCxcImlcIil9Y29uc3QgaT1lPT4zPT09ZS5ub2RlVHlwZT8oZT0+e3ZhciBpPWUuZGF0YS5tYXRjaCh0KVxuaWYoaSYmZS5kYXRhLmxlbmd0aD4wKXt2YXIgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxucy5jbGFzc05hbWU9XCJoaWdobGlnaHRcIlxudmFyIG49ZS5zcGxpdFRleHQoaS5pbmRleClcbm4uc3BsaXRUZXh0KGlbMF0ubGVuZ3RoKVxudmFyIG89bi5jbG9uZU5vZGUoITApXG5yZXR1cm4gcy5hcHBlbmRDaGlsZChvKSxzZShuLHMpLDF9cmV0dXJuIDB9KShlKTooKGU9PnsxIT09ZS5ub2RlVHlwZXx8IWUuY2hpbGROb2Rlc3x8LyhzY3JpcHR8c3R5bGUpL2kudGVzdChlLnRhZ05hbWUpfHxcImhpZ2hsaWdodFwiPT09ZS5jbGFzc05hbWUmJlwiU1BBTlwiPT09ZS50YWdOYW1lfHxBcnJheS5mcm9tKGUuY2hpbGROb2RlcykuZm9yRWFjaChlPT57aShlKX0pfSkoZSksMClcbmkoZSl9LG9lPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBuYXZpZ2F0b3ImJi9NYWMvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk/XCJtZXRhS2V5XCI6XCJjdHJsS2V5XCJcbnZhciByZT17b3B0aW9uczpbXSxvcHRncm91cHM6W10scGx1Z2luczpbXSxkZWxpbWl0ZXI6XCIsXCIsc3BsaXRPbjpudWxsLHBlcnNpc3Q6ITAsZGlhY3JpdGljczohMCxjcmVhdGU6bnVsbCxjcmVhdGVPbkJsdXI6ITEsY3JlYXRlRmlsdGVyOm51bGwsY2xlYXJBZnRlclNlbGVjdDohMSxoaWdobGlnaHQ6ITAsb3Blbk9uRm9jdXM6ITAsc2hvdWxkT3BlbjpudWxsLG1heE9wdGlvbnM6NTAsbWF4SXRlbXM6bnVsbCxoaWRlU2VsZWN0ZWQ6bnVsbCxkdXBsaWNhdGVzOiExLGFkZFByZWNlZGVuY2U6ITEsc2VsZWN0T25UYWI6ITEscHJlbG9hZDpudWxsLGFsbG93RW1wdHlPcHRpb246ITEscmVmcmVzaFRocm90dGxlOjMwMCxsb2FkVGhyb3R0bGU6MzAwLGxvYWRpbmdDbGFzczpcImxvYWRpbmdcIixkYXRhQXR0cjpudWxsLG9wdGdyb3VwRmllbGQ6XCJvcHRncm91cFwiLHZhbHVlRmllbGQ6XCJ2YWx1ZVwiLGxhYmVsRmllbGQ6XCJ0ZXh0XCIsZGlzYWJsZWRGaWVsZDpcImRpc2FibGVkXCIsb3B0Z3JvdXBMYWJlbEZpZWxkOlwibGFiZWxcIixvcHRncm91cFZhbHVlRmllbGQ6XCJ2YWx1ZVwiLGxvY2tPcHRncm91cE9yZGVyOiExLHNvcnRGaWVsZDpcIiRvcmRlclwiLHNlYXJjaEZpZWxkOltcInRleHRcIl0sc2VhcmNoQ29uanVuY3Rpb246XCJhbmRcIixtb2RlOm51bGwsd3JhcHBlckNsYXNzOlwidHMtd3JhcHBlclwiLGNvbnRyb2xDbGFzczpcInRzLWNvbnRyb2xcIixkcm9wZG93bkNsYXNzOlwidHMtZHJvcGRvd25cIixkcm9wZG93bkNvbnRlbnRDbGFzczpcInRzLWRyb3Bkb3duLWNvbnRlbnRcIixpdGVtQ2xhc3M6XCJpdGVtXCIsb3B0aW9uQ2xhc3M6XCJvcHRpb25cIixkcm9wZG93blBhcmVudDpudWxsLGNvbnRyb2xJbnB1dDonPGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgc2l6ZT1cIjFcIiAvPicsY29weUNsYXNzZXNUb0Ryb3Bkb3duOiExLHBsYWNlaG9sZGVyOm51bGwsaGlkZVBsYWNlaG9sZGVyOm51bGwsc2hvdWxkTG9hZDpmdW5jdGlvbihlKXtyZXR1cm4gZS5sZW5ndGg+MH0scmVuZGVyOnt9fVxuZnVuY3Rpb24gbGUoZSx0KXt2YXIgaT1PYmplY3QuYXNzaWduKHt9LHJlLHQpLHM9aS5kYXRhQXR0cixuPWkubGFiZWxGaWVsZCxvPWkudmFsdWVGaWVsZCxyPWkuZGlzYWJsZWRGaWVsZCxsPWkub3B0Z3JvdXBGaWVsZCxhPWkub3B0Z3JvdXBMYWJlbEZpZWxkLGM9aS5vcHRncm91cFZhbHVlRmllbGQsZD1lLnRhZ05hbWUudG9Mb3dlckNhc2UoKSx1PWUuZ2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIil8fGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1wbGFjZWhvbGRlclwiKVxuaWYoIXUmJiFpLmFsbG93RW1wdHlPcHRpb24pe2xldCB0PWUucXVlcnlTZWxlY3Rvcignb3B0aW9uW3ZhbHVlPVwiXCJdJylcbnQmJih1PXQudGV4dENvbnRlbnQpfXZhciBwPXtwbGFjZWhvbGRlcjp1LG9wdGlvbnM6W10sb3B0Z3JvdXBzOltdLGl0ZW1zOltdLG1heEl0ZW1zOm51bGx9XG5yZXR1cm5cInNlbGVjdFwiPT09ZD8oKCk9Pnt2YXIgdCxkPXAub3B0aW9ucyx1PXt9LGg9MVxubGV0IGc9MFxudmFyIGY9ZT0+e3ZhciB0PU9iamVjdC5hc3NpZ24oe30sZS5kYXRhc2V0KSxpPXMmJnRbc11cbnJldHVyblwic3RyaW5nXCI9PXR5cGVvZiBpJiZpLmxlbmd0aCYmKHQ9T2JqZWN0LmFzc2lnbih0LEpTT04ucGFyc2UoaSkpKSx0fSxtPShlLHQpPT57dmFyIHM9UChlLnZhbHVlKVxuaWYobnVsbCE9cyYmKHN8fGkuYWxsb3dFbXB0eU9wdGlvbikpe2lmKHUuaGFzT3duUHJvcGVydHkocykpe2lmKHQpe3ZhciBhPXVbc11bbF1cbmE/QXJyYXkuaXNBcnJheShhKT9hLnB1c2godCk6dVtzXVtsXT1bYSx0XTp1W3NdW2xdPXR9fWVsc2V7dmFyIGM9ZihlKVxuY1tuXT1jW25dfHxlLnRleHRDb250ZW50LGNbb109Y1tvXXx8cyxjW3JdPWNbcl18fGUuZGlzYWJsZWQsY1tsXT1jW2xdfHx0LGMuJG9wdGlvbj1lLGMuJG9yZGVyPWMuJG9yZGVyfHwrK2csdVtzXT1jLGQucHVzaChjKX1lLnNlbGVjdGVkJiZwLml0ZW1zLnB1c2gocyl9fVxucC5tYXhJdGVtcz1lLmhhc0F0dHJpYnV0ZShcIm11bHRpcGxlXCIpP251bGw6MSxCKGUuY2hpbGRyZW4sZT0+e3ZhciBpLHMsblxuXCJvcHRncm91cFwiPT09KHQ9ZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkpPygobj1mKGk9ZSkpW2FdPW5bYV18fGkuZ2V0QXR0cmlidXRlKFwibGFiZWxcIil8fFwiXCIsbltjXT1uW2NdfHxoKyssbltyXT1uW3JdfHxpLmRpc2FibGVkLG4uJG9yZGVyPW4uJG9yZGVyfHwrK2cscC5vcHRncm91cHMucHVzaChuKSxzPW5bY10sQihpLmNoaWxkcmVuLGU9PnttKGUscyl9KSk6XCJvcHRpb25cIj09PXQmJm0oZSl9KX0pKCk6KCgpPT57Y29uc3QgdD1lLmdldEF0dHJpYnV0ZShzKVxuaWYodClwLm9wdGlvbnM9SlNPTi5wYXJzZSh0KSxCKHAub3B0aW9ucyxlPT57cC5pdGVtcy5wdXNoKGVbb10pfSlcbmVsc2V7dmFyIHIsbCxhPW51bGwhPShyPW51bGw9PWV8fG51bGw9PShsPWUudmFsdWUpP3ZvaWQgMDpsLnRyaW0oKSk/cjpcIlwiXG5pZighaS5hbGxvd0VtcHR5T3B0aW9uJiYhYS5sZW5ndGgpcmV0dXJuXG5jb25zdCB0PWEuc3BsaXQoaS5kZWxpbWl0ZXIpXG5CKHQsZT0+e2NvbnN0IHQ9e31cbnRbbl09ZSx0W29dPWUscC5vcHRpb25zLnB1c2godCl9KSxwLml0ZW1zPXR9fSkoKSxPYmplY3QuYXNzaWduKHt9LHJlLHAsdCl9dmFyIGFlPTBcbmNsYXNzIGNlIGV4dGVuZHMoZnVuY3Rpb24oZSl7cmV0dXJuIGUucGx1Z2lucz17fSxjbGFzcyBleHRlbmRzIGV7Y29uc3RydWN0b3IoLi4uZSl7c3VwZXIoLi4uZSksdGhpcy5wbHVnaW5zPXtuYW1lczpbXSxzZXR0aW5nczp7fSxyZXF1ZXN0ZWQ6e30sbG9hZGVkOnt9fX1zdGF0aWMgZGVmaW5lKHQsaSl7ZS5wbHVnaW5zW3RdPXtuYW1lOnQsZm46aX19aW5pdGlhbGl6ZVBsdWdpbnMoZSl7dmFyIHQsaVxuY29uc3Qgcz10aGlzLG49W11cbmlmKEFycmF5LmlzQXJyYXkoZSkpZS5mb3JFYWNoKGU9PntcInN0cmluZ1wiPT10eXBlb2YgZT9uLnB1c2goZSk6KHMucGx1Z2lucy5zZXR0aW5nc1tlLm5hbWVdPWUub3B0aW9ucyxuLnB1c2goZS5uYW1lKSl9KVxuZWxzZSBpZihlKWZvcih0IGluIGUpZS5oYXNPd25Qcm9wZXJ0eSh0KSYmKHMucGx1Z2lucy5zZXR0aW5nc1t0XT1lW3RdLG4ucHVzaCh0KSlcbmZvcig7aT1uLnNoaWZ0KCk7KXMucmVxdWlyZShpKX1sb2FkUGx1Z2luKHQpe3ZhciBpPXRoaXMscz1pLnBsdWdpbnMsbj1lLnBsdWdpbnNbdF1cbmlmKCFlLnBsdWdpbnMuaGFzT3duUHJvcGVydHkodCkpdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gZmluZCBcIicrdCsnXCIgcGx1Z2luJylcbnMucmVxdWVzdGVkW3RdPSEwLHMubG9hZGVkW3RdPW4uZm4uYXBwbHkoaSxbaS5wbHVnaW5zLnNldHRpbmdzW3RdfHx7fV0pLHMubmFtZXMucHVzaCh0KX1yZXF1aXJlKGUpe3ZhciB0PXRoaXMsaT10LnBsdWdpbnNcbmlmKCF0LnBsdWdpbnMubG9hZGVkLmhhc093blByb3BlcnR5KGUpKXtpZihpLnJlcXVlc3RlZFtlXSl0aHJvdyBuZXcgRXJyb3IoJ1BsdWdpbiBoYXMgY2lyY3VsYXIgZGVwZW5kZW5jeSAoXCInK2UrJ1wiKScpXG50LmxvYWRQbHVnaW4oZSl9cmV0dXJuIGkubG9hZGVkW2VdfX19KHQpKXtjb25zdHJ1Y3RvcihlLHQpe3ZhciBpXG5zdXBlcigpLHRoaXMub3JkZXI9MCx0aGlzLmlzT3Blbj0hMSx0aGlzLmlzRGlzYWJsZWQ9ITEsdGhpcy5pc1JlYWRPbmx5PSExLHRoaXMuaXNJbnZhbGlkPSExLHRoaXMuaXNWYWxpZD0hMCx0aGlzLmlzTG9ja2VkPSExLHRoaXMuaXNGb2N1c2VkPSExLHRoaXMuaXNJbnB1dEhpZGRlbj0hMSx0aGlzLmlzU2V0dXA9ITEsdGhpcy5pc0Ryb3Bkb3duQ29udGVudFN0YWxlPSEwLHRoaXMuaWdub3JlRm9jdXM9ITEsdGhpcy5pZ25vcmVIb3Zlcj0hMSx0aGlzLmhhc09wdGlvbnM9ITEsdGhpcy5sYXN0VmFsdWU9XCJcIix0aGlzLmNhcmV0UG9zPTAsdGhpcy5sb2FkaW5nPTAsdGhpcy5sb2FkZWRTZWFyY2hlcz17fSx0aGlzLmFjdGl2ZU9wdGlvbj1udWxsLHRoaXMuYWN0aXZlSXRlbXM9W10sdGhpcy5vcHRncm91cHM9e30sdGhpcy5vcHRpb25zPXt9LHRoaXMudXNlck9wdGlvbnM9e30sdGhpcy5pdGVtcz1bXSx0aGlzLnJlZnJlc2hUaW1lb3V0PW51bGwsYWUrK1xudmFyIHM9SyhlKVxuaWYocy50b21zZWxlY3QpdGhyb3cgbmV3IEVycm9yKFwiVG9tIFNlbGVjdCBhbHJlYWR5IGluaXRpYWxpemVkIG9uIHRoaXMgZWxlbWVudFwiKVxucy50b21zZWxlY3Q9dGhpcyxpPSh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSYmd2luZG93LmdldENvbXB1dGVkU3R5bGUocyxudWxsKSkuZ2V0UHJvcGVydHlWYWx1ZShcImRpcmVjdGlvblwiKVxuY29uc3Qgbj1sZShzLHQpXG50aGlzLnNldHRpbmdzPW4sdGhpcy5pbnB1dD1zLHRoaXMudGFiSW5kZXg9cy50YWJJbmRleHx8MCx0aGlzLmlzX3NlbGVjdF90YWc9XCJzZWxlY3RcIj09PXMudGFnTmFtZS50b0xvd2VyQ2FzZSgpLHRoaXMucnRsPS9ydGwvaS50ZXN0KGkpLHRoaXMuaW5wdXRJZD1IKHMsXCJ0b21zZWxlY3QtXCIrYWUpLHRoaXMuaXNSZXF1aXJlZD1zLnJlcXVpcmVkLHRoaXMuc2lmdGVyPW5ldyBUKHRoaXMub3B0aW9ucyx7ZGlhY3JpdGljczpuLmRpYWNyaXRpY3N9KSxuLm1vZGU9bi5tb2RlfHwoMT09PW4ubWF4SXRlbXM/XCJzaW5nbGVcIjpcIm11bHRpXCIpLFwiYm9vbGVhblwiIT10eXBlb2Ygbi5oaWRlU2VsZWN0ZWQmJihuLmhpZGVTZWxlY3RlZD1cIm11bHRpXCI9PT1uLm1vZGUpLFwiYm9vbGVhblwiIT10eXBlb2Ygbi5oaWRlUGxhY2Vob2xkZXImJihuLmhpZGVQbGFjZWhvbGRlcj1cIm11bHRpXCIhPT1uLm1vZGUpXG52YXIgbz1uLmNyZWF0ZUZpbHRlclxuXCJmdW5jdGlvblwiIT10eXBlb2YgbyYmKFwic3RyaW5nXCI9PXR5cGVvZiBvJiYobz1uZXcgUmVnRXhwKG8pKSxvIGluc3RhbmNlb2YgUmVnRXhwP24uY3JlYXRlRmlsdGVyPWU9Pm8udGVzdChlKTpuLmNyZWF0ZUZpbHRlcj1lPT50aGlzLnNldHRpbmdzLmR1cGxpY2F0ZXN8fCF0aGlzLm9wdGlvbnNbZV0pLHRoaXMuaW5pdGlhbGl6ZVBsdWdpbnMobi5wbHVnaW5zKSx0aGlzLnNldHVwQ2FsbGJhY2tzKCksdGhpcy5zZXR1cFRlbXBsYXRlcygpXG5jb25zdCByPUsoXCI8ZGl2PlwiKSxsPUsoXCI8ZGl2PlwiKSxhPXRoaXMuX3JlbmRlcihcImRyb3Bkb3duXCIpLGM9SygnPGRpdiByb2xlPVwibGlzdGJveFwiIHRhYmluZGV4PVwiLTFcIj4nKSxkPXRoaXMuaW5wdXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIsdT1uLm1vZGVcbnZhciBwXG5pZihRKHIsbi53cmFwcGVyQ2xhc3MsZCx1KSxRKGwsbi5jb250cm9sQ2xhc3MpLHoocixsKSxRKGEsbi5kcm9wZG93bkNsYXNzLHUpLG4uY29weUNsYXNzZXNUb0Ryb3Bkb3duJiZRKGEsZCksUShjLG4uZHJvcGRvd25Db250ZW50Q2xhc3MpLHooYSxjKSxLKG4uZHJvcGRvd25QYXJlbnR8fHIpLmFwcGVuZENoaWxkKGEpLEcobi5jb250cm9sSW5wdXQpKXtwPUsobi5jb250cm9sSW5wdXQpXG5CKFtcImF1dG9jb3JyZWN0XCIsXCJhdXRvY2FwaXRhbGl6ZVwiLFwiYXV0b2NvbXBsZXRlXCIsXCJzcGVsbGNoZWNrXCIsXCJhcmlhLWxhYmVsXCJdLGU9PntzLmdldEF0dHJpYnV0ZShlKSYmaWUocCx7W2VdOnMuZ2V0QXR0cmlidXRlKGUpfSl9KSxwLnRhYkluZGV4PS0xLGwuYXBwZW5kQ2hpbGQocCksdGhpcy5mb2N1c19ub2RlPXB9ZWxzZSBuLmNvbnRyb2xJbnB1dD8ocD1LKG4uY29udHJvbElucHV0KSx0aGlzLmZvY3VzX25vZGU9cCk6KHA9SyhcIjxpbnB1dC8+XCIpLHRoaXMuZm9jdXNfbm9kZT1sKVxudGhpcy53cmFwcGVyPXIsdGhpcy5kcm9wZG93bj1hLHRoaXMuZHJvcGRvd25fY29udGVudD1jLHRoaXMuY29udHJvbD1sLHRoaXMuY29udHJvbF9pbnB1dD1wLHRoaXMuc2V0dXAoKX1zZXR1cCgpe2NvbnN0IGU9dGhpcyx0PWUuc2V0dGluZ3MsaT1lLmNvbnRyb2xfaW5wdXQscz1lLmRyb3Bkb3duLG49ZS5kcm9wZG93bl9jb250ZW50LG89ZS53cmFwcGVyLGw9ZS5jb250cm9sLGE9ZS5pbnB1dCxjPWUuZm9jdXNfbm9kZSxkPXtwYXNzaXZlOiEwfSx1PWUuaW5wdXRJZCtcIi10cy1kcm9wZG93blwiXG5pZShuLHtpZDp1fSksaWUoYyx7cm9sZTpcImNvbWJvYm94XCIsXCJhcmlhLWhhc3BvcHVwXCI6XCJsaXN0Ym94XCIsXCJhcmlhLWV4cGFuZGVkXCI6XCJmYWxzZVwiLFwiYXJpYS1jb250cm9sc1wiOnV9KVxuY29uc3QgcD1IKGMsZS5pbnB1dElkK1wiLXRzLWNvbnRyb2xcIiksaD1cImxhYmVsW2Zvcj0nXCIrKGU9PmUucmVwbGFjZSgvWydcIlxcXFxdL2csXCJcXFxcJCZcIikpKGUuaW5wdXRJZCkrXCInXVwiLGc9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihoKSxmPWUuZm9jdXMuYmluZChlKVxuaWYoZyl7cShnLFwiY2xpY2tcIixmKSxpZShnLHtmb3I6cH0pXG5jb25zdCB0PUgoZyxlLmlucHV0SWQrXCItdHMtbGFiZWxcIilcbmllKGMse1wiYXJpYS1sYWJlbGxlZGJ5XCI6dH0pLGllKG4se1wiYXJpYS1sYWJlbGxlZGJ5XCI6dH0pfWlmKG8uc3R5bGUud2lkdGg9YS5zdHlsZS53aWR0aCxvLnN0eWxlLm1pbldpZHRoPWEuc3R5bGUubWluV2lkdGgsby5zdHlsZS5tYXhXaWR0aD1hLnN0eWxlLm1heFdpZHRoLGUucGx1Z2lucy5uYW1lcy5sZW5ndGgpe2NvbnN0IHQ9XCJwbHVnaW4tXCIrZS5wbHVnaW5zLm5hbWVzLmpvaW4oXCIgcGx1Z2luLVwiKVxuUShbbyxzXSx0KX0obnVsbD09PXQubWF4SXRlbXN8fHQubWF4SXRlbXM+MSkmJmUuaXNfc2VsZWN0X3RhZyYmaWUoYSx7bXVsdGlwbGU6XCJtdWx0aXBsZVwifSksdC5wbGFjZWhvbGRlciYmaWUoaSx7cGxhY2Vob2xkZXI6dC5wbGFjZWhvbGRlcn0pLCF0LnNwbGl0T24mJnQuZGVsaW1pdGVyJiYodC5zcGxpdE9uPW5ldyBSZWdFeHAoXCJcXFxccypcIityKHQuZGVsaW1pdGVyKStcIitcXFxccypcIikpLHQubG9hZCYmdC5sb2FkVGhyb3R0bGUmJih0LmxvYWQ9Vih0LmxvYWQsdC5sb2FkVGhyb3R0bGUpKSxxKHMsXCJtb3VzZW1vdmVcIiwoKT0+e2UuaWdub3JlSG92ZXI9ITF9KSxxKHMsXCJtb3VzZWVudGVyXCIsdD0+e3ZhciBpPVoodC50YXJnZXQsXCJbZGF0YS1zZWxlY3RhYmxlXVwiLHMpXG5pJiZlLm9uT3B0aW9uSG92ZXIodCxpKX0se2NhcHR1cmU6ITB9KSxxKHMsXCJjbGlja1wiLHQ9Pntjb25zdCBpPVoodC50YXJnZXQsXCJbZGF0YS1zZWxlY3RhYmxlXVwiKVxuaSYmKGUub25PcHRpb25TZWxlY3QodCxpKSwkKHQsITApKX0pLHEobCxcImNsaWNrXCIsdD0+e3ZhciBzPVoodC50YXJnZXQsXCJbZGF0YS10cy1pdGVtXVwiLGwpXG5zJiZlLm9uSXRlbVNlbGVjdCh0LHMpPyQodCwhMCk6XCJcIj09aS52YWx1ZSYmKGUub25DbGljaygpLCQodCwhMCkpfSkscShjLFwia2V5ZG93blwiLHQ9PmUub25LZXlEb3duKHQpKSxxKGksXCJrZXlwcmVzc1wiLHQ9PmUub25LZXlQcmVzcyh0KSkscShpLFwiaW5wdXRcIix0PT5lLm9uSW5wdXQodCkpLHEoYyxcImJsdXJcIix0PT5lLm9uQmx1cih0KSkscShjLFwiZm9jdXNcIix0PT5lLm9uRm9jdXModCkpLHEoaSxcInBhc3RlXCIsdD0+ZS5vblBhc3RlKHQpKVxuY29uc3QgbT10PT57Y29uc3Qgbj10LmNvbXBvc2VkUGF0aCgpWzBdXG5pZighby5jb250YWlucyhuKSYmIXMuY29udGFpbnMobikpcmV0dXJuIGUuaXNGb2N1c2VkJiZlLmJsdXIoKSx2b2lkIGUuaW5wdXRTdGF0ZSgpXG5uPT1pJiZlLmlzT3Blbj90LnN0b3BQcm9wYWdhdGlvbigpOiQodCwhMCl9LHY9KCk9PntlLmlzT3BlbiYmZS5wb3NpdGlvbkRyb3Bkb3duKCl9LE89KCk9PntlLmlzVmFsaWQmJihlLmlzVmFsaWQ9ITEsZS5pc0ludmFsaWQ9ITAsZS5yZWZyZXNoU3RhdGUoKSl9XG5xKGEsXCJpbnZhbGlkXCIsTykscShkb2N1bWVudCxcIm1vdXNlZG93blwiLG0pLHEod2luZG93LFwic2Nyb2xsXCIsdixkKSxxKHdpbmRvdyxcInJlc2l6ZVwiLHYsZCksdGhpcy5fZGVzdHJveT0oKT0+e2EucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImludmFsaWRcIixPKSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsbSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIix2KSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHYpLGcmJmcucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZil9LHRoaXMucmV2ZXJ0U2V0dGluZ3M9e2lubmVySFRNTDphLmlubmVySFRNTCx0YWJJbmRleDphLnRhYkluZGV4fSxhLnRhYkluZGV4PS0xLGEuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIixlLndyYXBwZXIpLGUuc3luYyghMSksdC5pdGVtcz1bXSxkZWxldGUgdC5vcHRncm91cHMsZGVsZXRlIHQub3B0aW9ucyxlLnJlZnJlc2hJdGVtcygpLGUuY2xvc2UoITEpLGUuaW5wdXRTdGF0ZSgpLGUuaXNTZXR1cD0hMCxlLm9uKFwiY2hhbmdlXCIsdGhpcy5vbkNoYW5nZSksUShhLFwidG9tc2VsZWN0ZWRcIixcInRzLWhpZGRlbi1hY2Nlc3NpYmxlXCIpLGUudHJpZ2dlcihcImluaXRpYWxpemVcIiksITA9PT10LnByZWxvYWQmJmUucHJlbG9hZCgpfXNldHVwT3B0aW9ucyhlPVtdLHQ9W10pe3RoaXMuYWRkT3B0aW9ucyhlKSxCKHQsZT0+e3RoaXMucmVnaXN0ZXJPcHRpb25Hcm91cChlKX0pfXNldHVwVGVtcGxhdGVzKCl7dmFyIGU9dGhpcyx0PWUuc2V0dGluZ3MubGFiZWxGaWVsZCxpPWUuc2V0dGluZ3Mub3B0Z3JvdXBMYWJlbEZpZWxkLHM9e29wdGdyb3VwOmU9PntsZXQgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5yZXR1cm4gdC5jbGFzc05hbWU9XCJvcHRncm91cFwiLHQuYXBwZW5kQ2hpbGQoZS5vcHRpb25zKSx0fSxvcHRncm91cF9oZWFkZXI6KGUsdCk9Pic8ZGl2IGNsYXNzPVwib3B0Z3JvdXAtaGVhZGVyXCI+Jyt0KGVbaV0pK1wiPC9kaXY+XCIsb3B0aW9uOihlLGkpPT5cIjxkaXY+XCIraShlW3RdKStcIjwvZGl2PlwiLGl0ZW06KGUsaSk9PlwiPGRpdj5cIitpKGVbdF0pK1wiPC9kaXY+XCIsb3B0aW9uX2NyZWF0ZTooZSx0KT0+JzxkaXYgY2xhc3M9XCJjcmVhdGVcIj5BZGQgPHN0cm9uZz4nK3QoZS5pbnB1dCkrXCI8L3N0cm9uZz4maGVsbGlwOzwvZGl2PlwiLG5vX3Jlc3VsdHM6KCk9Pic8ZGl2IGNsYXNzPVwibm8tcmVzdWx0c1wiPk5vIHJlc3VsdHMgZm91bmQ8L2Rpdj4nLGxvYWRpbmc6KCk9Pic8ZGl2IGNsYXNzPVwic3Bpbm5lclwiPjwvZGl2Picsbm90X2xvYWRpbmc6KCk9Pnt9LGRyb3Bkb3duOigpPT5cIjxkaXY+PC9kaXY+XCJ9XG5lLnNldHRpbmdzLnJlbmRlcj1PYmplY3QuYXNzaWduKHt9LHMsZS5zZXR0aW5ncy5yZW5kZXIpfXNldHVwQ2FsbGJhY2tzKCl7dmFyIGUsdCxpPXtpbml0aWFsaXplOlwib25Jbml0aWFsaXplXCIsY2hhbmdlOlwib25DaGFuZ2VcIixpdGVtX2FkZDpcIm9uSXRlbUFkZFwiLGl0ZW1fcmVtb3ZlOlwib25JdGVtUmVtb3ZlXCIsaXRlbV9zZWxlY3Q6XCJvbkl0ZW1TZWxlY3RcIixjbGVhcjpcIm9uQ2xlYXJcIixvcHRpb25fYWRkOlwib25PcHRpb25BZGRcIixvcHRpb25fcmVtb3ZlOlwib25PcHRpb25SZW1vdmVcIixvcHRpb25fY2xlYXI6XCJvbk9wdGlvbkNsZWFyXCIsb3B0Z3JvdXBfYWRkOlwib25PcHRpb25Hcm91cEFkZFwiLG9wdGdyb3VwX3JlbW92ZTpcIm9uT3B0aW9uR3JvdXBSZW1vdmVcIixvcHRncm91cF9jbGVhcjpcIm9uT3B0aW9uR3JvdXBDbGVhclwiLGRyb3Bkb3duX29wZW46XCJvbkRyb3Bkb3duT3BlblwiLGRyb3Bkb3duX2Nsb3NlOlwib25Ecm9wZG93bkNsb3NlXCIsdHlwZTpcIm9uVHlwZVwiLGxvYWQ6XCJvbkxvYWRcIixmb2N1czpcIm9uRm9jdXNcIixibHVyOlwib25CbHVyXCJ9XG5mb3IoZSBpbiBpKSh0PXRoaXMuc2V0dGluZ3NbaVtlXV0pJiZ0aGlzLm9uKGUsdCl9c3luYyhlPSEwKXtjb25zdCB0PXRoaXMsaT1lP2xlKHQuaW5wdXQse2RlbGltaXRlcjp0LnNldHRpbmdzLmRlbGltaXRlcixhbGxvd0VtcHR5T3B0aW9uOnQuc2V0dGluZ3MuYWxsb3dFbXB0eU9wdGlvbn0pOnQuc2V0dGluZ3NcbnQuc2V0dXBPcHRpb25zKGkub3B0aW9ucyxpLm9wdGdyb3VwcyksdC5zZXRWYWx1ZShpLml0ZW1zfHxbXSwhMCksdC5pbnB1dC5kaXNhYmxlZD90LmRpc2FibGUoKTp0LmlucHV0LnJlYWRPbmx5P3Quc2V0UmVhZE9ubHkoITApOnQuZW5hYmxlKCksdC5sYXN0UXVlcnk9bnVsbH1vbkNsaWNrKCl7dmFyIGU9dGhpc1xuaWYoZS5hY3RpdmVJdGVtcy5sZW5ndGg+MClyZXR1cm4gZS5jbGVhckFjdGl2ZUl0ZW1zKCksdm9pZCBlLmZvY3VzKClcbmUuaXNGb2N1c2VkJiZlLmlzT3Blbj9lLmJsdXIoKTplLmZvY3VzKCl9b25Nb3VzZURvd24oKXt9b25DaGFuZ2UoKXtVKHRoaXMuaW5wdXQsXCJpbnB1dFwiKSxVKHRoaXMuaW5wdXQsXCJjaGFuZ2VcIil9b25QYXN0ZShlKXt2YXIgdD10aGlzXG50LmlzSW5wdXRIaWRkZW58fHQuaXNMb2NrZWQ/JChlKTp0LnNldHRpbmdzLnNwbGl0T24mJnNldFRpbWVvdXQoKCk9Pnt2YXIgZT10LmlucHV0VmFsdWUoKVxuaWYoZS5tYXRjaCh0LnNldHRpbmdzLnNwbGl0T24pKXt2YXIgaT1lLnRyaW0oKS5zcGxpdCh0LnNldHRpbmdzLnNwbGl0T24pXG5CKGksZT0+e1AoZSkmJih0aGlzLm9wdGlvbnNbZV0/dC5hZGRJdGVtKGUpOnQuY3JlYXRlSXRlbShlKSl9KX19LDApfW9uS2V5UHJlc3MoZSl7dmFyIHQ9dGhpc1xuaWYoIXQuaXNMb2NrZWQpe3ZhciBpPVN0cmluZy5mcm9tQ2hhckNvZGUoZS5rZXlDb2RlfHxlLndoaWNoKVxucmV0dXJuIHQuc2V0dGluZ3MuY3JlYXRlJiZcIm11bHRpXCI9PT10LnNldHRpbmdzLm1vZGUmJmk9PT10LnNldHRpbmdzLmRlbGltaXRlcj8odC5jcmVhdGVJdGVtKCksdm9pZCAkKGUpKTp2b2lkIDB9JChlKX1vbktleURvd24oZSl7dmFyIHQ9dGhpc1xuaWYodC5pZ25vcmVIb3Zlcj0hMCx0LmlzTG9ja2VkKTkhPT1lLmtleUNvZGUmJiQoZSlcbmVsc2V7c3dpdGNoKGUua2V5Q29kZSl7Y2FzZSA2NTppZihSKG9lLGUpJiZcIlwiPT10LmNvbnRyb2xfaW5wdXQudmFsdWUpcmV0dXJuICQoZSksdm9pZCB0LnNlbGVjdEFsbCgpXG5icmVha1xuY2FzZSAyNzpyZXR1cm4gdC5pc09wZW4mJigkKGUsITApLHQuY2xvc2UoKSksdm9pZCB0LmNsZWFyQWN0aXZlSXRlbXMoKVxuY2FzZSA0MDppZighdC5pc09wZW4mJnQuaGFzT3B0aW9ucyl0Lm9wZW4oKVxuZWxzZSBpZih0LmFjdGl2ZU9wdGlvbil7bGV0IGU9dC5nZXRBZGphY2VudCh0LmFjdGl2ZU9wdGlvbiwxKVxuZSYmdC5zZXRBY3RpdmVPcHRpb24oZSl9cmV0dXJuIHZvaWQgJChlKVxuY2FzZSAzODppZih0LmFjdGl2ZU9wdGlvbil7bGV0IGU9dC5nZXRBZGphY2VudCh0LmFjdGl2ZU9wdGlvbiwtMSlcbmUmJnQuc2V0QWN0aXZlT3B0aW9uKGUpfXJldHVybiB2b2lkICQoZSlcbmNhc2UgMTM6cmV0dXJuIHZvaWQodC5jYW5TZWxlY3QodC5hY3RpdmVPcHRpb24pPyh0Lm9uT3B0aW9uU2VsZWN0KGUsdC5hY3RpdmVPcHRpb24pLCQoZSkpOih0LnNldHRpbmdzLmNyZWF0ZSYmdC5jcmVhdGVJdGVtKCl8fGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ9PXQuY29udHJvbF9pbnB1dCYmdC5pc09wZW4pJiYkKGUpKVxuY2FzZSAzNzpyZXR1cm4gdm9pZCB0LmFkdmFuY2VTZWxlY3Rpb24oLTEsZSlcbmNhc2UgMzk6cmV0dXJuIHZvaWQgdC5hZHZhbmNlU2VsZWN0aW9uKDEsZSlcbmNhc2UgOTpyZXR1cm4gdm9pZCh0LnNldHRpbmdzLnNlbGVjdE9uVGFiJiYodC5jYW5TZWxlY3QodC5hY3RpdmVPcHRpb24pPyh0Lm9uT3B0aW9uU2VsZWN0KGUsdC5hY3RpdmVPcHRpb24pLCQoZSkpOnQuc2V0dGluZ3MuY3JlYXRlJiZ0LmNyZWF0ZUl0ZW0oKSYmJChlKSkpXG5jYXNlIDg6Y2FzZSA0NjpyZXR1cm4gdm9pZCB0LmRlbGV0ZVNlbGVjdGlvbihlKX10LmlzSW5wdXRIaWRkZW4mJiFSKG9lLGUpJiYkKGUpfX1vbklucHV0KGUpe2lmKHRoaXMuaXNMb2NrZWQpcmV0dXJuXG5jb25zdCB0PXRoaXMuaW5wdXRWYWx1ZSgpXG50aGlzLmxhc3RWYWx1ZSE9PXQmJih0aGlzLmxhc3RWYWx1ZT10LFwiXCIhPXQ/KHRoaXMucmVmcmVzaFRpbWVvdXQmJndpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5yZWZyZXNoVGltZW91dCksdGhpcy5yZWZyZXNoVGltZW91dD0oKGUsdCk9PnQ+MD93aW5kb3cuc2V0VGltZW91dChlLHQpOihlLmNhbGwobnVsbCksbnVsbCkpKCgpPT57dGhpcy5yZWZyZXNoVGltZW91dD1udWxsLHRoaXMuX29uSW5wdXQoKX0sdGhpcy5zZXR0aW5ncy5yZWZyZXNoVGhyb3R0bGUpKTp0aGlzLl9vbklucHV0KCkpfV9vbklucHV0KCl7Y29uc3QgZT10aGlzLmxhc3RWYWx1ZVxudGhpcy5zZXR0aW5ncy5zaG91bGRMb2FkLmNhbGwodGhpcyxlKSYmdGhpcy5sb2FkKGUpLHRoaXMucmVmcmVzaE9wdGlvbnMoKSx0aGlzLnRyaWdnZXIoXCJ0eXBlXCIsZSl9b25PcHRpb25Ib3ZlcihlLHQpe3RoaXMuaWdub3JlSG92ZXJ8fHRoaXMuc2V0QWN0aXZlT3B0aW9uKHQsITEpfW9uRm9jdXMoZSl7dmFyIHQ9dGhpcyxpPXQuaXNGb2N1c2VkXG5pZih0LmlzRGlzYWJsZWR8fHQuaXNSZWFkT25seSlyZXR1cm4gdC5ibHVyKCksdm9pZCAkKGUpXG50Lmlnbm9yZUZvY3VzfHwodC5pc0ZvY3VzZWQ9ITAsXCJmb2N1c1wiPT09dC5zZXR0aW5ncy5wcmVsb2FkJiZ0LnByZWxvYWQoKSxpfHx0LnRyaWdnZXIoXCJmb2N1c1wiKSx0LmFjdGl2ZUl0ZW1zLmxlbmd0aHx8KHQuaW5wdXRTdGF0ZSgpLHQucmVmcmVzaE9wdGlvbnMoISF0LnNldHRpbmdzLm9wZW5PbkZvY3VzKSksdC5yZWZyZXNoU3RhdGUoKSl9b25CbHVyKGUpe2lmKCExIT09ZG9jdW1lbnQuaGFzRm9jdXMoKSl7dmFyIHQ9dGhpc1xuaWYodC5pc0ZvY3VzZWQpe3QuaXNGb2N1c2VkPSExLHQuaWdub3JlRm9jdXM9ITFcbnZhciBpPSgpPT57dC5jbG9zZSgpLHQuc2V0QWN0aXZlSXRlbSgpLHQuc2V0Q2FyZXQodC5pdGVtcy5sZW5ndGgpLHQudHJpZ2dlcihcImJsdXJcIil9XG50LnNldHRpbmdzLmNyZWF0ZSYmdC5zZXR0aW5ncy5jcmVhdGVPbkJsdXI/dC5jcmVhdGVJdGVtKG51bGwsaSk6aSgpfX19b25PcHRpb25TZWxlY3QoZSx0KXt2YXIgaSxzPXRoaXNcbnQucGFyZW50RWxlbWVudCYmdC5wYXJlbnRFbGVtZW50Lm1hdGNoZXMoXCJbZGF0YS1kaXNhYmxlZF1cIil8fCh0LmNsYXNzTGlzdC5jb250YWlucyhcImNyZWF0ZVwiKT9zLmNyZWF0ZUl0ZW0obnVsbCwoKT0+e3Muc2V0dGluZ3MuY2xvc2VBZnRlclNlbGVjdD9zLmNsb3NlKCk6cy5zZXR0aW5ncy5jbGVhckFmdGVyU2VsZWN0JiZzLnNldFRleHRib3hWYWx1ZSgpfSk6dm9pZCAwIT09KGk9dC5kYXRhc2V0LnZhbHVlKSYmKHMuaXNEcm9wZG93bkNvbnRlbnRTdGFsZT1zLnNldHRpbmdzLmhpZGVTZWxlY3RlZCxzLmFkZEl0ZW0oaSkscy5zZXR0aW5ncy5jbG9zZUFmdGVyU2VsZWN0P3MuY2xvc2UoKTpzLnNldHRpbmdzLmNsZWFyQWZ0ZXJTZWxlY3QmJnMuc2V0VGV4dGJveFZhbHVlKCksIXMuc2V0dGluZ3MuaGlkZVNlbGVjdGVkJiZlLnR5cGUmJi9jbGljay8udGVzdChlLnR5cGUpJiZzLnNldEFjdGl2ZU9wdGlvbih0KSkpfWNhblNlbGVjdChlKXtyZXR1cm4hISh0aGlzLmlzT3BlbiYmZSYmdGhpcy5kcm9wZG93bl9jb250ZW50LmNvbnRhaW5zKGUpKX1vbkl0ZW1TZWxlY3QoZSx0KXt2YXIgaT10aGlzXG5yZXR1cm4haS5pc0xvY2tlZCYmXCJtdWx0aVwiPT09aS5zZXR0aW5ncy5tb2RlJiYoJChlKSxpLnNldEFjdGl2ZUl0ZW0odCxlKSwhMCl9Y2FuTG9hZChlKXtyZXR1cm4hIXRoaXMuc2V0dGluZ3MubG9hZCYmIXRoaXMubG9hZGVkU2VhcmNoZXMuaGFzT3duUHJvcGVydHkoZSl9bG9hZChlKXtjb25zdCB0PXRoaXNcbmlmKCF0LmNhbkxvYWQoZSkpcmV0dXJuXG5RKHQud3JhcHBlcix0LnNldHRpbmdzLmxvYWRpbmdDbGFzcyksdC5sb2FkaW5nKytcbmNvbnN0IGk9dC5sb2FkQ2FsbGJhY2suYmluZCh0KVxudC5zZXR0aW5ncy5sb2FkLmNhbGwodCxlLGkpfWxvYWRDYWxsYmFjayhlLHQpe2NvbnN0IGk9dGhpc1xuaS5sb2FkaW5nPU1hdGgubWF4KGkubG9hZGluZy0xLDApLGkuaXNEcm9wZG93bkNvbnRlbnRTdGFsZT0hMCxpLmNsZWFyQWN0aXZlT3B0aW9uKCksaS5zZXR1cE9wdGlvbnMoZSx0KSxpLnJlZnJlc2hPcHRpb25zKGkuaXNGb2N1c2VkJiYhaS5pc0lucHV0SGlkZGVuKSxpLmxvYWRpbmd8fEooaS53cmFwcGVyLGkuc2V0dGluZ3MubG9hZGluZ0NsYXNzKSxpLnRyaWdnZXIoXCJsb2FkXCIsZSx0KX1wcmVsb2FkKCl7dmFyIGU9dGhpcy53cmFwcGVyLmNsYXNzTGlzdFxuZS5jb250YWlucyhcInByZWxvYWRlZFwiKXx8KGUuYWRkKFwicHJlbG9hZGVkXCIpLHRoaXMubG9hZChcIlwiKSl9c2V0VGV4dGJveFZhbHVlKGU9XCJcIil7dmFyIHQ9dGhpcy5jb250cm9sX2lucHV0XG50LnZhbHVlIT09ZSYmKHQudmFsdWU9ZSxVKHQsXCJ1cGRhdGVcIiksdGhpcy5sYXN0VmFsdWU9ZSl9Z2V0VmFsdWUoKXtyZXR1cm4gdGhpcy5pc19zZWxlY3RfdGFnJiZ0aGlzLmlucHV0Lmhhc0F0dHJpYnV0ZShcIm11bHRpcGxlXCIpP3RoaXMuaXRlbXM6dGhpcy5pdGVtcy5qb2luKHRoaXMuc2V0dGluZ3MuZGVsaW1pdGVyKX1zZXRWYWx1ZShlLHQpe2oodGhpcyx0P1tdOltcImNoYW5nZVwiXSwoKT0+e3RoaXMuY2xlYXIodCksdGhpcy5hZGRJdGVtcyhlLHQpfSl9c2V0TWF4SXRlbXMoZSl7MD09PWUmJihlPW51bGwpLHRoaXMuc2V0dGluZ3MubWF4SXRlbXM9ZSx0aGlzLnJlZnJlc2hTdGF0ZSgpfXNldEFjdGl2ZUl0ZW0oZSx0KXt2YXIgaSxzLG4sbyxyLGwsYT10aGlzXG5pZihcInNpbmdsZVwiIT09YS5zZXR0aW5ncy5tb2RlKXtpZighZSlyZXR1cm4gYS5jbGVhckFjdGl2ZUl0ZW1zKCksdm9pZChhLmlzRm9jdXNlZCYmYS5pbnB1dFN0YXRlKCkpXG5pZihcImNsaWNrXCI9PT0oaT10JiZ0LnR5cGUudG9Mb3dlckNhc2UoKSkmJlIoXCJzaGlmdEtleVwiLHQpJiZhLmFjdGl2ZUl0ZW1zLmxlbmd0aCl7Zm9yKGw9YS5nZXRMYXN0QWN0aXZlKCksKG49QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChhLmNvbnRyb2wuY2hpbGRyZW4sbCkpPihvPUFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYS5jb250cm9sLmNoaWxkcmVuLGUpKSYmKHI9bixuPW8sbz1yKSxzPW47czw9bztzKyspZT1hLmNvbnRyb2wuY2hpbGRyZW5bc10sLTE9PT1hLmFjdGl2ZUl0ZW1zLmluZGV4T2YoZSkmJmEuc2V0QWN0aXZlSXRlbUNsYXNzKGUpXG4kKHQpfWVsc2VcImNsaWNrXCI9PT1pJiZSKG9lLHQpfHxcImtleWRvd25cIj09PWkmJlIoXCJzaGlmdEtleVwiLHQpP2UuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpP2EucmVtb3ZlQWN0aXZlSXRlbShlKTphLnNldEFjdGl2ZUl0ZW1DbGFzcyhlKTooYS5jbGVhckFjdGl2ZUl0ZW1zKCksYS5zZXRBY3RpdmVJdGVtQ2xhc3MoZSkpXG5hLmlucHV0U3RhdGUoKSxhLmlzRm9jdXNlZHx8YS5mb2N1cygpfX1zZXRBY3RpdmVJdGVtQ2xhc3MoZSl7Y29uc3QgdD10aGlzLGk9dC5jb250cm9sLnF1ZXJ5U2VsZWN0b3IoXCIubGFzdC1hY3RpdmVcIilcbmkmJkooaSxcImxhc3QtYWN0aXZlXCIpLFEoZSxcImFjdGl2ZSBsYXN0LWFjdGl2ZVwiKSx0LnRyaWdnZXIoXCJpdGVtX3NlbGVjdFwiLGUpLC0xPT10LmFjdGl2ZUl0ZW1zLmluZGV4T2YoZSkmJnQuYWN0aXZlSXRlbXMucHVzaChlKX1yZW1vdmVBY3RpdmVJdGVtKGUpe3ZhciB0PXRoaXMuYWN0aXZlSXRlbXMuaW5kZXhPZihlKVxudGhpcy5hY3RpdmVJdGVtcy5zcGxpY2UodCwxKSxKKGUsXCJhY3RpdmVcIil9Y2xlYXJBY3RpdmVJdGVtcygpe0oodGhpcy5hY3RpdmVJdGVtcyxcImFjdGl2ZVwiKSx0aGlzLmFjdGl2ZUl0ZW1zPVtdfXNldEFjdGl2ZU9wdGlvbihlLHQ9ITApe2UhPT10aGlzLmFjdGl2ZU9wdGlvbiYmKHRoaXMuY2xlYXJBY3RpdmVPcHRpb24oKSxlJiYodGhpcy5hY3RpdmVPcHRpb249ZSxpZSh0aGlzLmZvY3VzX25vZGUse1wiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCI6ZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKX0pLGllKGUse1wiYXJpYS1zZWxlY3RlZFwiOlwidHJ1ZVwifSksUShlLFwiYWN0aXZlXCIpLHQmJnRoaXMuc2Nyb2xsVG9PcHRpb24oZSkpKX1zY3JvbGxUb09wdGlvbihlLHQpe2lmKCFlKXJldHVyblxuY29uc3QgaT10aGlzLmRyb3Bkb3duX2NvbnRlbnQscz1pLmNsaWVudEhlaWdodCxuPWkuc2Nyb2xsVG9wfHwwLG89ZS5vZmZzZXRIZWlnaHQscj1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcC1pLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCtuXG5yK28+cytuP3RoaXMuc2Nyb2xsKHItcytvLHQpOnI8biYmdGhpcy5zY3JvbGwocix0KX1zY3JvbGwoZSx0KXtjb25zdCBpPXRoaXMuZHJvcGRvd25fY29udGVudFxudCYmKGkuc3R5bGUuc2Nyb2xsQmVoYXZpb3I9dCksaS5zY3JvbGxUb3A9ZSxpLnN0eWxlLnNjcm9sbEJlaGF2aW9yPVwiXCJ9Y2xlYXJBY3RpdmVPcHRpb24oKXt0aGlzLmFjdGl2ZU9wdGlvbiYmKEoodGhpcy5hY3RpdmVPcHRpb24sXCJhY3RpdmVcIiksaWUodGhpcy5hY3RpdmVPcHRpb24se1wiYXJpYS1zZWxlY3RlZFwiOm51bGx9KSksdGhpcy5hY3RpdmVPcHRpb249bnVsbCxpZSh0aGlzLmZvY3VzX25vZGUse1wiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCI6bnVsbH0pfXNlbGVjdEFsbCgpe2NvbnN0IGU9dGhpc1xuaWYoXCJzaW5nbGVcIj09PWUuc2V0dGluZ3MubW9kZSlyZXR1cm5cbmNvbnN0IHQ9ZS5jb250cm9sQ2hpbGRyZW4oKVxudC5sZW5ndGgmJihlLmlucHV0U3RhdGUoKSxlLmNsb3NlKCksZS5hY3RpdmVJdGVtcz10LEIodCx0PT57ZS5zZXRBY3RpdmVJdGVtQ2xhc3ModCl9KSl9aW5wdXRTdGF0ZSgpe3ZhciBlPXRoaXNcbmUuY29udHJvbC5jb250YWlucyhlLmNvbnRyb2xfaW5wdXQpJiYoaWUoZS5jb250cm9sX2lucHV0LHtwbGFjZWhvbGRlcjplLnNldHRpbmdzLnBsYWNlaG9sZGVyfSksZS5hY3RpdmVJdGVtcy5sZW5ndGg+MHx8IWUuaXNGb2N1c2VkJiZlLnNldHRpbmdzLmhpZGVQbGFjZWhvbGRlciYmZS5pdGVtcy5sZW5ndGg+MD8oZS5zZXRUZXh0Ym94VmFsdWUoKSxlLmlzSW5wdXRIaWRkZW49ITApOihlLnNldHRpbmdzLmhpZGVQbGFjZWhvbGRlciYmZS5pdGVtcy5sZW5ndGg+MCYmaWUoZS5jb250cm9sX2lucHV0LHtwbGFjZWhvbGRlcjpcIlwifSksZS5pc0lucHV0SGlkZGVuPSExKSxlLndyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZShcImlucHV0LWhpZGRlblwiLGUuaXNJbnB1dEhpZGRlbikpfWlucHV0VmFsdWUoKXtyZXR1cm4gdGhpcy5jb250cm9sX2lucHV0LnZhbHVlLnRyaW0oKX1mb2N1cygpe3ZhciBlPXRoaXNcbmlmKGUuaXNEaXNhYmxlZHx8ZS5pc1JlYWRPbmx5KXJldHVyblxuZS5pZ25vcmVGb2N1cz0hMFxuY29uc3QgdD10aGlzLmNvbnRyb2xfaW5wdXQub2Zmc2V0V2lkdGg/dGhpcy5jb250cm9sX2lucHV0OnRoaXMuZm9jdXNfbm9kZVxudC5mb2N1cygpLHNldFRpbWVvdXQoKCk9PntlLmlnbm9yZUZvY3VzPSExXG50LmdldFJvb3ROb2RlKCkuYWN0aXZlRWxlbWVudD09PXQmJnRoaXMub25Gb2N1cygpfSwwKX1ibHVyKCl7dGhpcy5mb2N1c19ub2RlLmJsdXIoKSx0aGlzLm9uQmx1cigpfWdldFNjb3JlRnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuc2lmdGVyLmdldFNjb3JlRnVuY3Rpb24oZSx0aGlzLmdldFNlYXJjaE9wdGlvbnMoKSl9Z2V0U2VhcmNoT3B0aW9ucygpe3ZhciBlPXRoaXMuc2V0dGluZ3MsdD1lLnNvcnRGaWVsZFxucmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUuc29ydEZpZWxkJiYodD1be2ZpZWxkOmUuc29ydEZpZWxkfV0pLHtmaWVsZHM6ZS5zZWFyY2hGaWVsZCxjb25qdW5jdGlvbjplLnNlYXJjaENvbmp1bmN0aW9uLHNvcnQ6dCxuZXN0aW5nOmUubmVzdGluZ319c2VhcmNoKGUpe3ZhciB0LGkscz10aGlzLG49dGhpcy5nZXRTZWFyY2hPcHRpb25zKClcbmlmKHMuc2V0dGluZ3Muc2NvcmUmJlwiZnVuY3Rpb25cIiE9dHlwZW9mKGk9cy5zZXR0aW5ncy5zY29yZS5jYWxsKHMsZSkpKXRocm93IG5ldyBFcnJvcignVG9tIFNlbGVjdCBcInNjb3JlXCIgc2V0dGluZyBtdXN0IGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgZnVuY3Rpb24nKVxucmV0dXJuIHMuaXNEcm9wZG93bkNvbnRlbnRTdGFsZXx8ZSE9PXMubGFzdFF1ZXJ5PyhzLmxhc3RRdWVyeT1lLC8oLilcXDF7MTUsfS8udGVzdChlKSYmKGU9XCJcIiksdD1zLnNpZnRlci5zZWFyY2goZSxPYmplY3QuYXNzaWduKG4se3Njb3JlOml9KSkscy5jdXJyZW50UmVzdWx0cz10KTp0PU9iamVjdC5hc3NpZ24oe30scy5jdXJyZW50UmVzdWx0cykscy5zZXR0aW5ncy5oaWRlU2VsZWN0ZWQmJih0Lml0ZW1zPXQuaXRlbXMuZmlsdGVyKGU9PntsZXQgdD1QKGUuaWQpXG5yZXR1cm4hKG51bGwhPT10JiYtMSE9PXMuaXRlbXMuaW5kZXhPZih0KSl9KSksdH1yZWZyZXNoT3B0aW9ucyhlPSEwKXt2YXIgdCxpLHMsbixvLHIsbCxhLGMsZFxuY29uc3QgdT17fSxwPVtdXG52YXIgaD10aGlzLGc9aC5pbnB1dFZhbHVlKClcbmNvbnN0IGY9Zz09PWgubGFzdFF1ZXJ5fHxcIlwiPT1nJiZudWxsPT1oLmxhc3RRdWVyeVxudmFyIG09aC5zZWFyY2goZyksdj1udWxsLE89aC5zZXR0aW5ncy5zaG91bGRPcGVufHwhMSxiPWguZHJvcGRvd25fY29udGVudFxuZiYmKHY9aC5hY3RpdmVPcHRpb24pJiYoYz12LmNsb3Nlc3QoXCJbZGF0YS1ncm91cF1cIikpLG49bS5pdGVtcy5sZW5ndGgsXCJudW1iZXJcIj09dHlwZW9mIGguc2V0dGluZ3MubWF4T3B0aW9ucyYmKG49TWF0aC5taW4obixoLnNldHRpbmdzLm1heE9wdGlvbnMpKSxuPjAmJihPPSEwKVxuY29uc3QgeT0oZSx0KT0+e2xldCBpPXVbZV1cbmlmKHZvaWQgMCE9PWkpe2xldCBlPXBbaV1cbmlmKHZvaWQgMCE9PWUpcmV0dXJuW2ksZS5mcmFnbWVudF19bGV0IHM9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG5yZXR1cm4gaT1wLmxlbmd0aCxwLnB1c2goe2ZyYWdtZW50OnMsb3JkZXI6dCxvcHRncm91cDplfSksW2ksc119XG5mb3IodD0wO3Q8bjt0Kyspe2xldCBlPW0uaXRlbXNbdF1cbmlmKCFlKWNvbnRpbnVlXG5sZXQgbj1lLmlkLGw9aC5vcHRpb25zW25dXG5pZih2b2lkIDA9PT1sKWNvbnRpbnVlXG5sZXQgYT1OKG4pLGQ9aC5nZXRPcHRpb24oYSwhMClcbmZvcihoLnNldHRpbmdzLmhpZGVTZWxlY3RlZHx8ZC5jbGFzc0xpc3QudG9nZ2xlKFwic2VsZWN0ZWRcIixoLml0ZW1zLmluY2x1ZGVzKGEpKSxvPWxbaC5zZXR0aW5ncy5vcHRncm91cEZpZWxkXXx8XCJcIixpPTAscz0ocj1BcnJheS5pc0FycmF5KG8pP286W29dKSYmci5sZW5ndGg7aTxzO2krKyl7bz1yW2ldXG5sZXQgZT1sLiRvcmRlcix0PWgub3B0Z3JvdXBzW29dXG52YXIgd1xuaWYodm9pZCAwPT09dCYmXCJmdW5jdGlvblwiPT10eXBlb2YgaC5zZXR0aW5ncy5vcHRpb25Hcm91cFJlZ2lzdGVyKSh3PWguc2V0dGluZ3Mub3B0aW9uR3JvdXBSZWdpc3Rlci5hcHBseShoLFtvXSkpJiZoLnJlZ2lzdGVyT3B0aW9uR3JvdXAodylcbnQ9aC5vcHRncm91cHNbb10sdm9pZCAwPT09dD9vPVwiXCI6ZT10LiRvcmRlclxuY29uc3RbcyxhXT15KG8sZSlcbmk+MCYmKGQ9ZC5jbG9uZU5vZGUoITApLGllKGQse2lkOmwuJGlkK1wiLWNsb25lLVwiK2ksXCJhcmlhLXNlbGVjdGVkXCI6bnVsbH0pLGQuY2xhc3NMaXN0LmFkZChcInRzLWNsb25lZFwiKSxKKGQsXCJhY3RpdmVcIiksaC5hY3RpdmVPcHRpb24mJmguYWN0aXZlT3B0aW9uLmRhdGFzZXQudmFsdWU9PW4mJmMmJmMuZGF0YXNldC5ncm91cD09PW8udG9TdHJpbmcoKSYmKHY9ZCkpLGEuYXBwZW5kQ2hpbGQoZCksXCJcIiE9byYmKHVbb109cyl9fXZhciBTXG5oLnNldHRpbmdzLmxvY2tPcHRncm91cE9yZGVyJiZwLnNvcnQoKGUsdCk9PmUub3JkZXItdC5vcmRlciksbD1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksQihwLGU9PntsZXQgdD1lLmZyYWdtZW50LGk9ZS5vcHRncm91cFxuaWYoIXR8fCF0LmNoaWxkcmVuLmxlbmd0aClyZXR1cm5cbmxldCBzPWgub3B0Z3JvdXBzW2ldXG5pZih2b2lkIDAhPT1zKXtsZXQgZT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksaT1oLnJlbmRlcihcIm9wdGdyb3VwX2hlYWRlclwiLHMpXG56KGUsaSkseihlLHQpXG5sZXQgbj1oLnJlbmRlcihcIm9wdGdyb3VwXCIse2dyb3VwOnMsb3B0aW9uczplfSlcbnoobCxuKX1lbHNlIHoobCx0KX0pLGIuaW5uZXJIVE1MPVwiXCIseihiLGwpLGguaXNEcm9wZG93bkNvbnRlbnRTdGFsZT0hMSxoLnNldHRpbmdzLmhpZ2hsaWdodCYmKFM9Yi5xdWVyeVNlbGVjdG9yQWxsKFwic3Bhbi5oaWdobGlnaHRcIiksQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChTLGZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZVxudC5yZXBsYWNlQ2hpbGQoZS5maXJzdENoaWxkLGUpLHQubm9ybWFsaXplKCl9KSxtLnF1ZXJ5Lmxlbmd0aCYmbS50b2tlbnMubGVuZ3RoJiZCKG0udG9rZW5zLGU9PntuZShiLGUucmVnZXgpfSkpXG52YXIgXz1lPT57bGV0IHQ9aC5yZW5kZXIoZSx7aW5wdXQ6Z30pXG5yZXR1cm4gdCYmKE89ITAsYi5pbnNlcnRCZWZvcmUodCxiLmZpcnN0Q2hpbGQpKSx0fVxuaWYoaC5sb2FkaW5nP18oXCJsb2FkaW5nXCIpOmguc2V0dGluZ3Muc2hvdWxkTG9hZC5jYWxsKGgsZyk/MD09PW0uaXRlbXMubGVuZ3RoJiZfKFwibm9fcmVzdWx0c1wiKTpfKFwibm90X2xvYWRpbmdcIiksKGE9aC5jYW5DcmVhdGUoZykpJiYoZD1fKFwib3B0aW9uX2NyZWF0ZVwiKSksaC5oYXNPcHRpb25zPW0uaXRlbXMubGVuZ3RoPjB8fGEsTyl7aWYobS5pdGVtcy5sZW5ndGg+MCl7aWYodnx8XCJzaW5nbGVcIiE9PWguc2V0dGluZ3MubW9kZXx8bnVsbD09aC5pdGVtc1swXXx8KHY9aC5nZXRPcHRpb24oaC5pdGVtc1swXSkpLCFiLmNvbnRhaW5zKHYpKXtsZXQgZT0wXG5kJiYhaC5zZXR0aW5ncy5hZGRQcmVjZWRlbmNlJiYoZT0xKSx2PWguc2VsZWN0YWJsZSgpW2VdfX1lbHNlIGQmJih2PWQpXG5lJiYhaC5pc09wZW4mJihoLm9wZW4oKSxoLnNjcm9sbFRvT3B0aW9uKHYsXCJhdXRvXCIpKSxoLnNldEFjdGl2ZU9wdGlvbih2KX1lbHNlIGguY2xlYXJBY3RpdmVPcHRpb24oKSxlJiZoLmlzT3BlbiYmaC5jbG9zZSghMSl9c2VsZWN0YWJsZSgpe3JldHVybiB0aGlzLmRyb3Bkb3duX2NvbnRlbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXNlbGVjdGFibGVdXCIpfWFkZE9wdGlvbihlLHQ9ITEpe2NvbnN0IGk9dGhpc1xuaWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gaS5hZGRPcHRpb25zKGUsdCksITFcbmNvbnN0IHM9UChlW2kuc2V0dGluZ3MudmFsdWVGaWVsZF0pXG5yZXR1cm4gbnVsbD09PXN8fGkub3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShzKT8oaS51cGRhdGVPcHRpb24oZVtpLnNldHRpbmdzLnZhbHVlRmllbGRdLGUpLCExKTooZS4kb3JkZXI9ZS4kb3JkZXJ8fCsraS5vcmRlcixlLiRpZD1pLmlucHV0SWQrXCItb3B0LVwiK2UuJG9yZGVyLGkub3B0aW9uc1tzXT1lLGkuaXNEcm9wZG93bkNvbnRlbnRTdGFsZT0hMCx0JiYoaS51c2VyT3B0aW9uc1tzXT10LGkudHJpZ2dlcihcIm9wdGlvbl9hZGRcIixzLGUpKSxzKX1hZGRPcHRpb25zKGUsdD0hMSl7QihlLGU9Pnt0aGlzLmFkZE9wdGlvbihlLHQpfSl9cmVnaXN0ZXJPcHRpb24oZSl7cmV0dXJuIHRoaXMuYWRkT3B0aW9uKGUpfXJlZ2lzdGVyT3B0aW9uR3JvdXAoZSl7dmFyIHQ9UChlW3RoaXMuc2V0dGluZ3Mub3B0Z3JvdXBWYWx1ZUZpZWxkXSlcbnJldHVybiBudWxsIT09dCYmKGUuJG9yZGVyPWUuJG9yZGVyfHwrK3RoaXMub3JkZXIsdGhpcy5vcHRncm91cHNbdF09ZSx0KX1hZGRPcHRpb25Hcm91cChlLHQpe3ZhciBpXG50W3RoaXMuc2V0dGluZ3Mub3B0Z3JvdXBWYWx1ZUZpZWxkXT1lLChpPXRoaXMucmVnaXN0ZXJPcHRpb25Hcm91cCh0KSkmJnRoaXMudHJpZ2dlcihcIm9wdGdyb3VwX2FkZFwiLGksdCl9cmVtb3ZlT3B0aW9uR3JvdXAoZSl7dGhpcy5vcHRncm91cHMuaGFzT3duUHJvcGVydHkoZSkmJihkZWxldGUgdGhpcy5vcHRncm91cHNbZV0sdGhpcy5jbGVhckNhY2hlKCksdGhpcy50cmlnZ2VyKFwib3B0Z3JvdXBfcmVtb3ZlXCIsZSkpfWNsZWFyT3B0aW9uR3JvdXBzKCl7dGhpcy5vcHRncm91cHM9e30sdGhpcy5jbGVhckNhY2hlKCksdGhpcy50cmlnZ2VyKFwib3B0Z3JvdXBfY2xlYXJcIil9dXBkYXRlT3B0aW9uKGUsdCl7Y29uc3QgaT10aGlzXG52YXIgcyxuXG5jb25zdCBvPVAoZSkscj1QKHRbaS5zZXR0aW5ncy52YWx1ZUZpZWxkXSlcbmlmKG51bGw9PT1vKXJldHVyblxuY29uc3QgbD1pLm9wdGlvbnNbb11cbmlmKG51bGw9PWwpcmV0dXJuXG5pZihcInN0cmluZ1wiIT10eXBlb2Ygcil0aHJvdyBuZXcgRXJyb3IoXCJWYWx1ZSBtdXN0IGJlIHNldCBpbiBvcHRpb24gZGF0YVwiKVxuY29uc3QgYT1pLmdldE9wdGlvbihvKSxjPWkuZ2V0SXRlbShvKVxuaWYodC4kb3JkZXI9dC4kb3JkZXJ8fGwuJG9yZGVyLGRlbGV0ZSBpLm9wdGlvbnNbb10saS51bmNhY2hlVmFsdWUociksaS5vcHRpb25zW3JdPXQsYSl7aWYoaS5kcm9wZG93bl9jb250ZW50LmNvbnRhaW5zKGEpKXtjb25zdCBlPWkuX3JlbmRlcihcIm9wdGlvblwiLHQpXG5zZShhLGUpLGkuYWN0aXZlT3B0aW9uPT09YSYmaS5zZXRBY3RpdmVPcHRpb24oZSl9YS5yZW1vdmUoKX1jJiYoLTEhPT0obj1pLml0ZW1zLmluZGV4T2YobykpJiZpLml0ZW1zLnNwbGljZShuLDEscikscz1pLl9yZW5kZXIoXCJpdGVtXCIsdCksYy5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikmJlEocyxcImFjdGl2ZVwiKSxzZShjLHMpKSxpLmlzRHJvcGRvd25Db250ZW50U3RhbGU9ITB9cmVtb3ZlT3B0aW9uKGUsdCl7Y29uc3QgaT10aGlzXG5lPU4oZSksaS51bmNhY2hlVmFsdWUoZSksZGVsZXRlIGkudXNlck9wdGlvbnNbZV0sZGVsZXRlIGkub3B0aW9uc1tlXSxpLmlzRHJvcGRvd25Db250ZW50U3RhbGU9ITAsaS50cmlnZ2VyKFwib3B0aW9uX3JlbW92ZVwiLGUpLGkucmVtb3ZlSXRlbShlLHQpfWNsZWFyT3B0aW9ucyhlKXtjb25zdCB0PShlfHx0aGlzLmNsZWFyRmlsdGVyKS5iaW5kKHRoaXMpXG50aGlzLmxvYWRlZFNlYXJjaGVzPXt9LHRoaXMudXNlck9wdGlvbnM9e30sdGhpcy5jbGVhckNhY2hlKClcbmNvbnN0IGk9e31cbkIodGhpcy5vcHRpb25zLChlLHMpPT57dChlLHMpJiYoaVtzXT1lKX0pLHRoaXMub3B0aW9ucz10aGlzLnNpZnRlci5pdGVtcz1pLHRoaXMuaXNEcm9wZG93bkNvbnRlbnRTdGFsZT0hMCx0aGlzLnRyaWdnZXIoXCJvcHRpb25fY2xlYXJcIil9Y2xlYXJGaWx0ZXIoZSx0KXtyZXR1cm4gdGhpcy5pdGVtcy5pbmRleE9mKHQpPj0wfWdldE9wdGlvbihlLHQ9ITEpe2NvbnN0IGk9UChlKVxuaWYobnVsbD09PWkpcmV0dXJuIG51bGxcbmNvbnN0IHM9dGhpcy5vcHRpb25zW2ldXG5pZihudWxsIT1zKXtpZihzLiRkaXYpcmV0dXJuIHMuJGRpdlxuaWYodClyZXR1cm4gdGhpcy5fcmVuZGVyKFwib3B0aW9uXCIscyl9cmV0dXJuIG51bGx9Z2V0QWRqYWNlbnQoZSx0LGk9XCJvcHRpb25cIil7dmFyIHNcbmlmKCFlKXJldHVybiBudWxsXG5zPVwiaXRlbVwiPT1pP3RoaXMuY29udHJvbENoaWxkcmVuKCk6dGhpcy5kcm9wZG93bl9jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1zZWxlY3RhYmxlXVwiKVxuZm9yKGxldCBpPTA7aTxzLmxlbmd0aDtpKyspaWYoc1tpXT09ZSlyZXR1cm4gdD4wP3NbaSsxXTpzW2ktMV1cbnJldHVybiBudWxsfWdldEl0ZW0oZSl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUpcmV0dXJuIGVcbnZhciB0PVAoZSlcbnJldHVybiBudWxsIT09dD90aGlzLmNvbnRyb2wucXVlcnlTZWxlY3RvcihgW2RhdGEtdmFsdWU9XCIke00odCl9XCJdYCk6bnVsbH1hZGRJdGVtcyhlLHQpe3ZhciBpPXRoaXMscz1BcnJheS5pc0FycmF5KGUpP2U6W2VdXG5jb25zdCBuPShzPXMuZmlsdGVyKGU9Pi0xPT09aS5pdGVtcy5pbmRleE9mKGUpKSlbcy5sZW5ndGgtMV1cbnMuZm9yRWFjaChlPT57aS5pc1BlbmRpbmc9ZSE9PW4saS5hZGRJdGVtKGUsdCl9KX1hZGRJdGVtKGUsdCl7aih0aGlzLHQ/W106W1wiY2hhbmdlXCIsXCJkcm9wZG93bl9jbG9zZVwiXSwoKT0+e3ZhciBpLHNcbmNvbnN0IG49dGhpcyxvPW4uc2V0dGluZ3MubW9kZSxyPVAoZSlcbmlmKCghcnx8LTE9PT1uLml0ZW1zLmluZGV4T2Yocil8fChcInNpbmdsZVwiPT09byYmbi5jbG9zZSgpLFwic2luZ2xlXCIhPT1vJiZuLnNldHRpbmdzLmR1cGxpY2F0ZXMpKSYmbnVsbCE9PXImJm4ub3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShyKSYmKFwic2luZ2xlXCI9PT1vJiZuLmNsZWFyKHQpLFwibXVsdGlcIiE9PW98fCFuLmlzRnVsbCgpKSl7aWYoaT1uLl9yZW5kZXIoXCJpdGVtXCIsbi5vcHRpb25zW3JdKSxuLmNvbnRyb2wuY29udGFpbnMoaSkmJihpPWkuY2xvbmVOb2RlKCEwKSkscz1uLmlzRnVsbCgpLG4uaXRlbXMuc3BsaWNlKG4uY2FyZXRQb3MsMCxyKSxuLmluc2VydEF0Q2FyZXQoaSksbi5pc1NldHVwKXtpZighbi5pc1BlbmRpbmcmJm4uc2V0dGluZ3MuaGlkZVNlbGVjdGVkKXtsZXQgZT1uLmdldE9wdGlvbihyKSx0PW4uZ2V0QWRqYWNlbnQoZSwxKVxudCYmbi5zZXRBY3RpdmVPcHRpb24odCl9bi5zZXR0aW5ncy5jbGVhckFmdGVyU2VsZWN0JiZuLnNldFRleHRib3hWYWx1ZSgpLG4uaXNQZW5kaW5nfHxuLnNldHRpbmdzLmNsb3NlQWZ0ZXJTZWxlY3R8fG4ucmVmcmVzaE9wdGlvbnMobi5pc0ZvY3VzZWQmJlwic2luZ2xlXCIhPT1vKSwwIT1uLnNldHRpbmdzLmNsb3NlQWZ0ZXJTZWxlY3QmJm4uaXNGdWxsKCk/bi5jbG9zZSgpOm4uaXNQZW5kaW5nfHxuLnBvc2l0aW9uRHJvcGRvd24oKSxuLnRyaWdnZXIoXCJpdGVtX2FkZFwiLHIsaSksbi5pc1BlbmRpbmd8fG4udXBkYXRlT3JpZ2luYWxJbnB1dCh7c2lsZW50OnR9KX0oIW4uaXNQZW5kaW5nfHwhcyYmbi5pc0Z1bGwoKSkmJihuLmlucHV0U3RhdGUoKSxuLnJlZnJlc2hTdGF0ZSgpKX19KX1yZW1vdmVJdGVtKGU9bnVsbCx0KXtjb25zdCBpPXRoaXNcbmlmKCEoZT1pLmdldEl0ZW0oZSkpKXJldHVyblxudmFyIHMsblxuY29uc3Qgbz1lLmRhdGFzZXQudmFsdWVcbnM9dGUoZSksZS5yZW1vdmUoKSxlLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSYmKG49aS5hY3RpdmVJdGVtcy5pbmRleE9mKGUpLGkuYWN0aXZlSXRlbXMuc3BsaWNlKG4sMSksSihlLFwiYWN0aXZlXCIpKSxpLml0ZW1zLnNwbGljZShzLDEpLGkuaXNEcm9wZG93bkNvbnRlbnRTdGFsZT0hMCwhaS5zZXR0aW5ncy5wZXJzaXN0JiZpLnVzZXJPcHRpb25zLmhhc093blByb3BlcnR5KG8pJiZpLnJlbW92ZU9wdGlvbihvLHQpLHM8aS5jYXJldFBvcyYmaS5zZXRDYXJldChpLmNhcmV0UG9zLTEpLGkudXBkYXRlT3JpZ2luYWxJbnB1dCh7c2lsZW50OnR9KSxpLnJlZnJlc2hTdGF0ZSgpLGkucG9zaXRpb25Ecm9wZG93bigpLGkudHJpZ2dlcihcIml0ZW1fcmVtb3ZlXCIsbyxlKX1jcmVhdGVJdGVtKGU9bnVsbCx0PSgpPT57fSl7Mz09PWFyZ3VtZW50cy5sZW5ndGgmJih0PWFyZ3VtZW50c1syXSksXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmKHQ9KCk9Pnt9KVxudmFyIGkscz10aGlzLG49cy5jYXJldFBvc1xuaWYoZT1lfHxzLmlucHV0VmFsdWUoKSwhcy5jYW5DcmVhdGUoZSkpe3JldHVybiBQKGUpJiZ0aGlzLm9wdGlvbnNbZV0mJnMuYWRkSXRlbShlKSx0KCksITF9cy5sb2NrKClcbnZhciBvPSExLHI9ZT0+e2lmKHMudW5sb2NrKCksIWV8fFwib2JqZWN0XCIhPXR5cGVvZiBlKXJldHVybiB0KClcbnZhciBpPVAoZVtzLnNldHRpbmdzLnZhbHVlRmllbGRdKVxuaWYoXCJzdHJpbmdcIiE9dHlwZW9mIGkpcmV0dXJuIHQoKVxucy5zZXRUZXh0Ym94VmFsdWUoKSxzLmFkZE9wdGlvbihlLCEwKSxzLnNldENhcmV0KG4pLHMuYWRkSXRlbShpKSx0KGUpLG89ITB9XG5yZXR1cm4gaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBzLnNldHRpbmdzLmNyZWF0ZT9zLnNldHRpbmdzLmNyZWF0ZS5jYWxsKHRoaXMsZSxyKTp7W3Muc2V0dGluZ3MubGFiZWxGaWVsZF06ZSxbcy5zZXR0aW5ncy52YWx1ZUZpZWxkXTplfSxvfHxyKGkpLCEwfXJlZnJlc2hJdGVtcygpe3ZhciBlPXRoaXNcbmUuaXNEcm9wZG93bkNvbnRlbnRTdGFsZT0hMCxlLmlzU2V0dXAmJmUuYWRkSXRlbXMoZS5pdGVtcyksZS51cGRhdGVPcmlnaW5hbElucHV0KCksZS5yZWZyZXNoU3RhdGUoKX1yZWZyZXNoU3RhdGUoKXtjb25zdCBlPXRoaXNcbmUucmVmcmVzaFZhbGlkaXR5U3RhdGUoKVxuY29uc3QgdD1lLmlzRnVsbCgpLGk9ZS5pc0xvY2tlZFxuZS53cmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJydGxcIixlLnJ0bClcbmNvbnN0IHM9ZS53cmFwcGVyLmNsYXNzTGlzdFxudmFyIG5cbnMudG9nZ2xlKFwiZm9jdXNcIixlLmlzRm9jdXNlZCkscy50b2dnbGUoXCJkaXNhYmxlZFwiLGUuaXNEaXNhYmxlZCkscy50b2dnbGUoXCJyZWFkb25seVwiLGUuaXNSZWFkT25seSkscy50b2dnbGUoXCJyZXF1aXJlZFwiLGUuaXNSZXF1aXJlZCkscy50b2dnbGUoXCJpbnZhbGlkXCIsIWUuaXNWYWxpZCkscy50b2dnbGUoXCJsb2NrZWRcIixpKSxzLnRvZ2dsZShcImZ1bGxcIix0KSxzLnRvZ2dsZShcImlucHV0LWFjdGl2ZVwiLGUuaXNGb2N1c2VkJiYhZS5pc0lucHV0SGlkZGVuKSxzLnRvZ2dsZShcImRyb3Bkb3duLWFjdGl2ZVwiLGUuaXNPcGVuKSxzLnRvZ2dsZShcImhhcy1vcHRpb25zXCIsKG49ZS5vcHRpb25zLDA9PT1PYmplY3Qua2V5cyhuKS5sZW5ndGgpKSxzLnRvZ2dsZShcImhhcy1pdGVtc1wiLGUuaXRlbXMubGVuZ3RoPjApfXJlZnJlc2hWYWxpZGl0eVN0YXRlKCl7dmFyIGU9dGhpc1xuZS5pbnB1dC52YWxpZGl0eSYmKGUuaXNWYWxpZD1lLmlucHV0LnZhbGlkaXR5LnZhbGlkLGUuaXNJbnZhbGlkPSFlLmlzVmFsaWQpfWlzRnVsbCgpe3JldHVybiBudWxsIT09dGhpcy5zZXR0aW5ncy5tYXhJdGVtcyYmdGhpcy5pdGVtcy5sZW5ndGg+PXRoaXMuc2V0dGluZ3MubWF4SXRlbXN9dXBkYXRlT3JpZ2luYWxJbnB1dChlPXt9KXtjb25zdCB0PXRoaXNcbnZhciBpLHNcbmNvbnN0IG49dC5pbnB1dC5xdWVyeVNlbGVjdG9yKCdvcHRpb25bdmFsdWU9XCJcIl0nKVxuaWYodC5pc19zZWxlY3RfdGFnKXtjb25zdCBvPVtdLHI9dC5pbnB1dC5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uOmNoZWNrZWRcIikubGVuZ3RoXG5mdW5jdGlvbiBsKGUsaSxzKXtyZXR1cm4gZXx8KGU9SygnPG9wdGlvbiB2YWx1ZT1cIicrRChpKSsnXCI+JytEKHMpK1wiPC9vcHRpb24+XCIpKSxlIT1uJiZ0LmlucHV0LmFwcGVuZChlKSxvLnB1c2goZSksKGUhPW58fHI+MHx8XCJtdWx0aVwiPT10LnNldHRpbmdzLm1vZGUpJiYoZS5zZWxlY3RlZD0hMCksZX10LmlucHV0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb246Y2hlY2tlZFwiKS5mb3JFYWNoKGU9PntlLnNlbGVjdGVkPSExfSksMD09dC5pdGVtcy5sZW5ndGgmJlwic2luZ2xlXCI9PXQuc2V0dGluZ3MubW9kZT9sKG4sXCJcIixcIlwiKTp0Lml0ZW1zLmZvckVhY2goZT0+e2lmKGk9dC5vcHRpb25zW2VdLHM9aVt0LnNldHRpbmdzLmxhYmVsRmllbGRdfHxcIlwiLG8uaW5jbHVkZXMoaS4kb3B0aW9uKSl7bCh0LmlucHV0LnF1ZXJ5U2VsZWN0b3IoYG9wdGlvblt2YWx1ZT1cIiR7TShlKX1cIl06bm90KDpjaGVja2VkKWApLGUscyl9ZWxzZSBpLiRvcHRpb249bChpLiRvcHRpb24sZSxzKX0pfWVsc2UgdC5pbnB1dC52YWx1ZT10LmdldFZhbHVlKClcbnQuaXNTZXR1cCYmKGUuc2lsZW50fHx0LnRyaWdnZXIoXCJjaGFuZ2VcIix0LmdldFZhbHVlKCkpKX1vcGVuKCl7dmFyIGU9dGhpc1xuZS5pc0xvY2tlZHx8ZS5pc09wZW58fFwibXVsdGlcIj09PWUuc2V0dGluZ3MubW9kZSYmZS5pc0Z1bGwoKXx8KGUuaXNPcGVuPSEwLGllKGUuZm9jdXNfbm9kZSx7XCJhcmlhLWV4cGFuZGVkXCI6XCJ0cnVlXCJ9KSxlLnJlZnJlc2hTdGF0ZSgpLFcoZS5kcm9wZG93bix7dmlzaWJpbGl0eTpcImhpZGRlblwiLGRpc3BsYXk6XCJibG9ja1wifSksZS5wb3NpdGlvbkRyb3Bkb3duKCksVyhlLmRyb3Bkb3duLHt2aXNpYmlsaXR5OlwidmlzaWJsZVwiLGRpc3BsYXk6XCJibG9ja1wifSksZS5mb2N1cygpLGUudHJpZ2dlcihcImRyb3Bkb3duX29wZW5cIixlLmRyb3Bkb3duKSl9Y2xvc2UoZT0hMCl7dmFyIHQ9dGhpcyxpPXQuaXNPcGVuXG5lJiYodC5zZXRUZXh0Ym94VmFsdWUoKSxcInNpbmdsZVwiPT09dC5zZXR0aW5ncy5tb2RlJiZ0Lml0ZW1zLmxlbmd0aCYmdC5pbnB1dFN0YXRlKCkpLHQuaXNPcGVuPSExLGllKHQuZm9jdXNfbm9kZSx7XCJhcmlhLWV4cGFuZGVkXCI6XCJmYWxzZVwifSksVyh0LmRyb3Bkb3duLHtkaXNwbGF5Olwibm9uZVwifSksdC5zZXR0aW5ncy5oaWRlU2VsZWN0ZWQmJnQuY2xlYXJBY3RpdmVPcHRpb24oKSx0LnJlZnJlc2hTdGF0ZSgpLGkmJnQudHJpZ2dlcihcImRyb3Bkb3duX2Nsb3NlXCIsdC5kcm9wZG93bil9cG9zaXRpb25Ecm9wZG93bigpe2lmKFwiYm9keVwiPT09dGhpcy5zZXR0aW5ncy5kcm9wZG93blBhcmVudCl7dmFyIGU9dGhpcy5jb250cm9sLHQ9ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxpPWUub2Zmc2V0SGVpZ2h0K3QudG9wK3dpbmRvdy5zY3JvbGxZLHM9dC5sZWZ0K3dpbmRvdy5zY3JvbGxYXG5XKHRoaXMuZHJvcGRvd24se3dpZHRoOnQud2lkdGgrXCJweFwiLHRvcDppK1wicHhcIixsZWZ0OnMrXCJweFwifSl9fWNsZWFyKGUpe3ZhciB0PXRoaXNcbmlmKHQuaXRlbXMubGVuZ3RoKXt2YXIgaT10LmNvbnRyb2xDaGlsZHJlbigpXG5CKGksZT0+e3QucmVtb3ZlSXRlbShlLCEwKX0pLHQuaW5wdXRTdGF0ZSgpLGV8fHQudXBkYXRlT3JpZ2luYWxJbnB1dCgpLHQudHJpZ2dlcihcImNsZWFyXCIpfX1pbnNlcnRBdENhcmV0KGUpe2NvbnN0IHQ9dGhpcyxpPXQuY2FyZXRQb3Mscz10LmNvbnRyb2xcbnMuaW5zZXJ0QmVmb3JlKGUscy5jaGlsZHJlbltpXXx8bnVsbCksdC5zZXRDYXJldChpKzEpfWRlbGV0ZVNlbGVjdGlvbihlKXt2YXIgdCxpLHMsbixvLHI9dGhpc1xudD1lJiY4PT09ZS5rZXlDb2RlPy0xOjEsaT17c3RhcnQ6KG89ci5jb250cm9sX2lucHV0KS5zZWxlY3Rpb25TdGFydHx8MCxsZW5ndGg6KG8uc2VsZWN0aW9uRW5kfHwwKS0oby5zZWxlY3Rpb25TdGFydHx8MCl9XG5jb25zdCBsPVtdXG5pZihyLmFjdGl2ZUl0ZW1zLmxlbmd0aCluPWVlKHIuYWN0aXZlSXRlbXMsdCkscz10ZShuKSx0PjAmJnMrKyxCKHIuYWN0aXZlSXRlbXMsZT0+bC5wdXNoKGUpKVxuZWxzZSBpZigoci5pc0ZvY3VzZWR8fFwic2luZ2xlXCI9PT1yLnNldHRpbmdzLm1vZGUpJiZyLml0ZW1zLmxlbmd0aCl7Y29uc3QgZT1yLmNvbnRyb2xDaGlsZHJlbigpXG5sZXQgc1xudDwwJiYwPT09aS5zdGFydCYmMD09PWkubGVuZ3RoP3M9ZVtyLmNhcmV0UG9zLTFdOnQ+MCYmaS5zdGFydD09PXIuaW5wdXRWYWx1ZSgpLmxlbmd0aCYmKHM9ZVtyLmNhcmV0UG9zXSksdm9pZCAwIT09cyYmbC5wdXNoKHMpfWlmKCFyLnNob3VsZERlbGV0ZShsLGUpKXJldHVybiExXG5mb3IoJChlLCEwKSx2b2lkIDAhPT1zJiZyLnNldENhcmV0KHMpO2wubGVuZ3RoOylyLnJlbW92ZUl0ZW0obC5wb3AoKSlcbnJldHVybiByLmlucHV0U3RhdGUoKSxyLnBvc2l0aW9uRHJvcGRvd24oKSxyLnJlZnJlc2hPcHRpb25zKCExKSwhMH1zaG91bGREZWxldGUoZSx0KXtjb25zdCBpPWUubWFwKGU9PmUuZGF0YXNldC52YWx1ZSlcbnJldHVybiEoIWkubGVuZ3RofHxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLnNldHRpbmdzLm9uRGVsZXRlJiYhMT09PXRoaXMuc2V0dGluZ3Mub25EZWxldGUuY2FsbCh0aGlzLGksdCkpfWFkdmFuY2VTZWxlY3Rpb24oZSx0KXt2YXIgaSxzLG49dGhpc1xubi5ydGwmJihlKj0tMSksbi5pbnB1dFZhbHVlKCkubGVuZ3RofHwoUihvZSx0KXx8UihcInNoaWZ0S2V5XCIsdCk/KHM9KGk9bi5nZXRMYXN0QWN0aXZlKGUpKT9pLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKT9uLmdldEFkamFjZW50KGksZSxcIml0ZW1cIik6aTplPjA/bi5jb250cm9sX2lucHV0Lm5leHRFbGVtZW50U2libGluZzpuLmNvbnRyb2xfaW5wdXQucHJldmlvdXNFbGVtZW50U2libGluZykmJihzLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSYmbi5yZW1vdmVBY3RpdmVJdGVtKGkpLG4uc2V0QWN0aXZlSXRlbUNsYXNzKHMpKTpuLm1vdmVDYXJldChlKSl9bW92ZUNhcmV0KGUpe31nZXRMYXN0QWN0aXZlKGUpe2xldCB0PXRoaXMuY29udHJvbC5xdWVyeVNlbGVjdG9yKFwiLmxhc3QtYWN0aXZlXCIpXG5pZih0KXJldHVybiB0XG52YXIgaT10aGlzLmNvbnRyb2wucXVlcnlTZWxlY3RvckFsbChcIi5hY3RpdmVcIilcbnJldHVybiBpP2VlKGksZSk6dm9pZCAwfXNldENhcmV0KGUpe3RoaXMuY2FyZXRQb3M9dGhpcy5pdGVtcy5sZW5ndGh9Y29udHJvbENoaWxkcmVuKCl7cmV0dXJuIEFycmF5LmZyb20odGhpcy5jb250cm9sLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10cy1pdGVtXVwiKSl9bG9jaygpe3RoaXMuc2V0TG9ja2VkKCEwKX11bmxvY2soKXt0aGlzLnNldExvY2tlZCghMSl9c2V0TG9ja2VkKGU9dGhpcy5pc1JlYWRPbmx5fHx0aGlzLmlzRGlzYWJsZWQpe3RoaXMuaXNMb2NrZWQ9ZSx0aGlzLnJlZnJlc2hTdGF0ZSgpfWRpc2FibGUoKXt0aGlzLnNldERpc2FibGVkKCEwKSx0aGlzLmNsb3NlKCl9ZW5hYmxlKCl7dGhpcy5zZXREaXNhYmxlZCghMSl9c2V0RGlzYWJsZWQoZSl7dGhpcy5mb2N1c19ub2RlLnRhYkluZGV4PWU/LTE6dGhpcy50YWJJbmRleCx0aGlzLmlzRGlzYWJsZWQ9ZSx0aGlzLmlucHV0LmRpc2FibGVkPWUsdGhpcy5jb250cm9sX2lucHV0LmRpc2FibGVkPWUsdGhpcy5zZXRMb2NrZWQoKX1zZXRSZWFkT25seShlKXt0aGlzLmlzUmVhZE9ubHk9ZSx0aGlzLmlucHV0LnJlYWRPbmx5PWUsdGhpcy5jb250cm9sX2lucHV0LnJlYWRPbmx5PWUsdGhpcy5zZXRMb2NrZWQoKX1kZXN0cm95KCl7dmFyIGU9dGhpcyx0PWUucmV2ZXJ0U2V0dGluZ3NcbmUudHJpZ2dlcihcImRlc3Ryb3lcIiksZS5vZmYoKSxlLndyYXBwZXIucmVtb3ZlKCksZS5kcm9wZG93bi5yZW1vdmUoKSxlLmlucHV0LmlubmVySFRNTD10LmlubmVySFRNTCxlLmlucHV0LnRhYkluZGV4PXQudGFiSW5kZXgsSihlLmlucHV0LFwidG9tc2VsZWN0ZWRcIixcInRzLWhpZGRlbi1hY2Nlc3NpYmxlXCIpLGUuX2Rlc3Ryb3koKSxkZWxldGUgZS5pbnB1dC50b21zZWxlY3R9cmVuZGVyKGUsdCl7dmFyIGksc1xuY29uc3Qgbj10aGlzXG5pZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0aGlzLnNldHRpbmdzLnJlbmRlcltlXSlyZXR1cm4gbnVsbFxuaWYoIShzPW4uc2V0dGluZ3MucmVuZGVyW2VdLmNhbGwodGhpcyx0LEQpKSlyZXR1cm4gbnVsbFxuaWYocz1LKHMpLFwib3B0aW9uXCI9PT1lfHxcIm9wdGlvbl9jcmVhdGVcIj09PWU/dFtuLnNldHRpbmdzLmRpc2FibGVkRmllbGRdP2llKHMse1wiYXJpYS1kaXNhYmxlZFwiOlwidHJ1ZVwifSk6aWUocyx7XCJkYXRhLXNlbGVjdGFibGVcIjpcIlwifSk6XCJvcHRncm91cFwiPT09ZSYmKGk9dC5ncm91cFtuLnNldHRpbmdzLm9wdGdyb3VwVmFsdWVGaWVsZF0saWUocyx7XCJkYXRhLWdyb3VwXCI6aX0pLHQuZ3JvdXBbbi5zZXR0aW5ncy5kaXNhYmxlZEZpZWxkXSYmaWUocyx7XCJkYXRhLWRpc2FibGVkXCI6XCJcIn0pKSxcIm9wdGlvblwiPT09ZXx8XCJpdGVtXCI9PT1lKXtjb25zdCBpPU4odFtuLnNldHRpbmdzLnZhbHVlRmllbGRdKVxuaWUocyx7XCJkYXRhLXZhbHVlXCI6aX0pLFwiaXRlbVwiPT09ZT8oUShzLG4uc2V0dGluZ3MuaXRlbUNsYXNzKSxpZShzLHtcImRhdGEtdHMtaXRlbVwiOlwiXCJ9KSk6KFEocyxuLnNldHRpbmdzLm9wdGlvbkNsYXNzKSxpZShzLHtyb2xlOlwib3B0aW9uXCIsaWQ6dC4kaWR9KSx0LiRkaXY9cyxuLm9wdGlvbnNbaV09dCl9cmV0dXJuIHN9X3JlbmRlcihlLHQpe2NvbnN0IGk9dGhpcy5yZW5kZXIoZSx0KVxuaWYobnVsbD09aSl0aHJvd1wiSFRNTEVsZW1lbnQgZXhwZWN0ZWRcIlxucmV0dXJuIGl9Y2xlYXJDYWNoZSgpe0IodGhpcy5vcHRpb25zLGU9PntlLiRkaXYmJihlLiRkaXYucmVtb3ZlKCksZGVsZXRlIGUuJGRpdil9KX11bmNhY2hlVmFsdWUoZSl7Y29uc3QgdD10aGlzLmdldE9wdGlvbihlKVxudCYmdC5yZW1vdmUoKX1jYW5DcmVhdGUoZSl7cmV0dXJuIHRoaXMuc2V0dGluZ3MuY3JlYXRlJiZlLmxlbmd0aD4wJiZ0aGlzLnNldHRpbmdzLmNyZWF0ZUZpbHRlci5jYWxsKHRoaXMsZSl9aG9vayhlLHQsaSl7dmFyIHM9dGhpcyxuPXNbdF1cbnNbdF09ZnVuY3Rpb24oKXt2YXIgdCxvXG5yZXR1cm5cImFmdGVyXCI9PT1lJiYodD1uLmFwcGx5KHMsYXJndW1lbnRzKSksbz1pLmFwcGx5KHMsYXJndW1lbnRzKSxcImluc3RlYWRcIj09PWU/bzooXCJiZWZvcmVcIj09PWUmJih0PW4uYXBwbHkocyxhcmd1bWVudHMpKSx0KX19fXJldHVybiBjZS5kZWZpbmUoXCJjaGFuZ2VfbGlzdGVuZXJcIixmdW5jdGlvbigpe3EodGhpcy5pbnB1dCxcImNoYW5nZVwiLCgpPT57dGhpcy5zeW5jKCl9KX0pLGNlLmRlZmluZShcImNoZWNrYm94X29wdGlvbnNcIixmdW5jdGlvbihlKXt2YXIgdD10aGlzLGk9dC5vbk9wdGlvblNlbGVjdFxudC5zZXR0aW5ncy5oaWRlU2VsZWN0ZWQ9ITFcbmNvbnN0IHM9T2JqZWN0LmFzc2lnbih7Y2xhc3NOYW1lOlwidG9tc2VsZWN0LWNoZWNrYm94XCIsY2hlY2tlZENsYXNzTmFtZXM6dm9pZCAwLHVuY2hlY2tlZENsYXNzTmFtZXM6dm9pZCAwfSxlKVxudmFyIG49ZnVuY3Rpb24oZSx0KXt0PyhlLmNoZWNrZWQ9ITAscy51bmNoZWNrZWRDbGFzc05hbWVzJiZlLmNsYXNzTGlzdC5yZW1vdmUoLi4ucy51bmNoZWNrZWRDbGFzc05hbWVzKSxzLmNoZWNrZWRDbGFzc05hbWVzJiZlLmNsYXNzTGlzdC5hZGQoLi4ucy5jaGVja2VkQ2xhc3NOYW1lcykpOihlLmNoZWNrZWQ9ITEscy5jaGVja2VkQ2xhc3NOYW1lcyYmZS5jbGFzc0xpc3QucmVtb3ZlKC4uLnMuY2hlY2tlZENsYXNzTmFtZXMpLHMudW5jaGVja2VkQ2xhc3NOYW1lcyYmZS5jbGFzc0xpc3QuYWRkKC4uLnMudW5jaGVja2VkQ2xhc3NOYW1lcykpfSxvPWZ1bmN0aW9uKGUpe3NldFRpbWVvdXQoKCk9Pnt2YXIgdD1lLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5cIitzLmNsYXNzTmFtZSlcbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50JiZuKHQsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSl9LDEpfVxudC5ob29rKFwiYWZ0ZXJcIixcInNldHVwVGVtcGxhdGVzXCIsKCk9Pnt2YXIgZT10LnNldHRpbmdzLnJlbmRlci5vcHRpb25cbnQuc2V0dGluZ3MucmVuZGVyLm9wdGlvbj0oaSxvKT0+e3ZhciByPUsoZS5jYWxsKHQsaSxvKSksbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbnMuY2xhc3NOYW1lJiZsLmNsYXNzTGlzdC5hZGQocy5jbGFzc05hbWUpLGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oZSl7JChlKX0pLGwudHlwZT1cImNoZWNrYm94XCJcbmNvbnN0IGE9UChpW3Quc2V0dGluZ3MudmFsdWVGaWVsZF0pXG5yZXR1cm4gbihsLCEhKGEmJnQuaXRlbXMuaW5kZXhPZihhKT4tMSkpLHIucHJlcGVuZChsKSxyfX0pLHQub24oXCJpdGVtX3JlbW92ZVwiLGU9Pnt2YXIgaT10LmdldE9wdGlvbihlKVxuaSYmKGkuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpLG8oaSkpfSksdC5vbihcIml0ZW1fYWRkXCIsZT0+e3ZhciBpPXQuZ2V0T3B0aW9uKGUpXG5pJiZvKGkpfSksdC5ob29rKFwiaW5zdGVhZFwiLFwib25PcHRpb25TZWxlY3RcIiwoZSxzKT0+e2lmKHMuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpcmV0dXJuIHMuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpLHQucmVtb3ZlSXRlbShzLmRhdGFzZXQudmFsdWUpLHQucmVmcmVzaE9wdGlvbnMoKSx2b2lkICQoZSwhMClcbmkuY2FsbCh0LGUscyksbyhzKX0pfSksY2UuZGVmaW5lKFwiY2xlYXJfYnV0dG9uXCIsZnVuY3Rpb24oZSl7Y29uc3QgdD10aGlzLGk9T2JqZWN0LmFzc2lnbih7Y2xhc3NOYW1lOlwiY2xlYXItYnV0dG9uXCIsdGl0bGU6XCJDbGVhciBBbGxcIixyb2xlOlwiYnV0dG9uXCIsdGFiaW5kZXg6MCxodG1sOmU9PmA8ZGl2IGNsYXNzPVwiJHtlLmNsYXNzTmFtZX1cIiB0aXRsZT1cIiR7ZS50aXRsZX1cIiByb2xlPVwiJHtlLnJvbGV9XCIgdGFiaW5kZXg9XCIke2UudGFiaW5kZXh9XCI+JnRpbWVzOzwvZGl2PmB9LGUpXG50Lm9uKFwiaW5pdGlhbGl6ZVwiLCgpPT57dmFyIGU9SyhpLmh0bWwoaSkpXG5lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGU9Pnt0LmlzTG9ja2VkfHwodC5jbGVhcigpLFwic2luZ2xlXCI9PT10LnNldHRpbmdzLm1vZGUmJnQuc2V0dGluZ3MuYWxsb3dFbXB0eU9wdGlvbiYmdC5hZGRJdGVtKFwiXCIpLHQucmVmcmVzaE9wdGlvbnMoITEpLGUucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpKX0pLHQuY29udHJvbC5hcHBlbmRDaGlsZChlKX0pfSksY2UuZGVmaW5lKFwiZHJhZ19kcm9wXCIsZnVuY3Rpb24oKXt2YXIgZT10aGlzXG5pZihcIm11bHRpXCIhPT1lLnNldHRpbmdzLm1vZGUpcmV0dXJuXG52YXIgdD1lLmxvY2ssaT1lLnVubG9ja1xubGV0IHMsbj0hMFxuZS5ob29rKFwiYWZ0ZXJcIixcInNldHVwVGVtcGxhdGVzXCIsKCk9Pnt2YXIgdD1lLnNldHRpbmdzLnJlbmRlci5pdGVtXG5lLnNldHRpbmdzLnJlbmRlci5pdGVtPShpLG8pPT57Y29uc3Qgcj1LKHQuY2FsbChlLGksbykpXG5pZShyLHtkcmFnZ2FibGU6XCJ0cnVlXCJ9KVxuY29uc3QgbD1lPT57ZS5wcmV2ZW50RGVmYXVsdCgpLHIuY2xhc3NMaXN0LmFkZChcInRzLWRyYWctb3ZlclwiKSxhKHIscyl9LGE9KGUsdCk9Pnt2YXIgaSxzLG5cbnZvaWQgMCE9PXQmJigoKGUsdCk9Pntkb3t2YXIgaVxuaWYoZT09KHQ9bnVsbD09KGk9dCk/dm9pZCAwOmkucHJldmlvdXNFbGVtZW50U2libGluZykpcmV0dXJuITB9d2hpbGUodCYmdC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKVxucmV0dXJuITF9KSh0LHIpPyhzPXQsbnVsbD09KG49KGk9ZSkucGFyZW50Tm9kZSl8fG4uaW5zZXJ0QmVmb3JlKHMsaS5uZXh0U2libGluZykpOigoZSx0KT0+e3ZhciBpXG5udWxsPT0oaT1lLnBhcmVudE5vZGUpfHxpLmluc2VydEJlZm9yZSh0LGUpfSkoZSx0KSl9XG5yZXR1cm4gcShyLFwibW91c2Vkb3duXCIsZT0+e258fCQoZSksZS5zdG9wUHJvcGFnYXRpb24oKX0pLHEocixcImRyYWdzdGFydFwiLGU9PntzPXIsc2V0VGltZW91dCgoKT0+e3IuY2xhc3NMaXN0LmFkZChcInRzLWRyYWdnaW5nXCIpfSwwKX0pLHEocixcImRyYWdlbnRlclwiLGwpLHEocixcImRyYWdvdmVyXCIsbCkscShyLFwiZHJhZ2xlYXZlXCIsKCk9PntyLmNsYXNzTGlzdC5yZW1vdmUoXCJ0cy1kcmFnLW92ZXJcIil9KSxxKHIsXCJkcmFnZW5kXCIsKCk9Pnt2YXIgdFxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50cy1kcmFnLW92ZXJcIikuZm9yRWFjaChlPT5lLmNsYXNzTGlzdC5yZW1vdmUoXCJ0cy1kcmFnLW92ZXJcIikpLG51bGw9PSh0PXMpfHx0LmNsYXNzTGlzdC5yZW1vdmUoXCJ0cy1kcmFnZ2luZ1wiKSxzPXZvaWQgMFxudmFyIGk9W11cbmUuY29udHJvbC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdmFsdWVdXCIpLmZvckVhY2goZT0+e2lmKGUuZGF0YXNldC52YWx1ZSl7bGV0IHQ9ZS5kYXRhc2V0LnZhbHVlXG50JiZpLnB1c2godCl9fSksZS5zZXRWYWx1ZShpKX0pLHJ9fSksZS5ob29rKFwiaW5zdGVhZFwiLFwibG9ja1wiLCgpPT4obj0hMSx0LmNhbGwoZSkpKSxlLmhvb2soXCJpbnN0ZWFkXCIsXCJ1bmxvY2tcIiwoKT0+KG49ITAsaS5jYWxsKGUpKSl9KSxjZS5kZWZpbmUoXCJkcm9wZG93bl9oZWFkZXJcIixmdW5jdGlvbihlKXtjb25zdCB0PXRoaXMsaT1PYmplY3QuYXNzaWduKHt0aXRsZTpcIlVudGl0bGVkXCIsaGVhZGVyQ2xhc3M6XCJkcm9wZG93bi1oZWFkZXJcIix0aXRsZVJvd0NsYXNzOlwiZHJvcGRvd24taGVhZGVyLXRpdGxlXCIsbGFiZWxDbGFzczpcImRyb3Bkb3duLWhlYWRlci1sYWJlbFwiLGNsb3NlQ2xhc3M6XCJkcm9wZG93bi1oZWFkZXItY2xvc2VcIixodG1sOmU9Pic8ZGl2IGNsYXNzPVwiJytlLmhlYWRlckNsYXNzKydcIj48ZGl2IGNsYXNzPVwiJytlLnRpdGxlUm93Q2xhc3MrJ1wiPjxzcGFuIGNsYXNzPVwiJytlLmxhYmVsQ2xhc3MrJ1wiPicrZS50aXRsZSsnPC9zcGFuPjxhIGNsYXNzPVwiJytlLmNsb3NlQ2xhc3MrJ1wiPiZ0aW1lczs8L2E+PC9kaXY+PC9kaXY+J30sZSlcbnQub24oXCJpbml0aWFsaXplXCIsKCk9Pnt2YXIgZT1LKGkuaHRtbChpKSkscz1lLnF1ZXJ5U2VsZWN0b3IoXCIuXCIraS5jbG9zZUNsYXNzKVxucyYmcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixlPT57JChlLCEwKSx0LmNsb3NlKCl9KSx0LmRyb3Bkb3duLmluc2VydEJlZm9yZShlLHQuZHJvcGRvd24uZmlyc3RDaGlsZCl9KX0pLGNlLmRlZmluZShcImNhcmV0X3Bvc2l0aW9uXCIsZnVuY3Rpb24oKXt2YXIgZT10aGlzXG5lLmhvb2soXCJpbnN0ZWFkXCIsXCJzZXRDYXJldFwiLHQ9PntcInNpbmdsZVwiIT09ZS5zZXR0aW5ncy5tb2RlJiZlLmNvbnRyb2wuY29udGFpbnMoZS5jb250cm9sX2lucHV0KT8odD1NYXRoLm1heCgwLE1hdGgubWluKGUuaXRlbXMubGVuZ3RoLHQpKSk9PWUuY2FyZXRQb3N8fGUuaXNQZW5kaW5nfHxlLmNvbnRyb2xDaGlsZHJlbigpLmZvckVhY2goKGkscyk9PntzPHQ/ZS5jb250cm9sX2lucHV0Lmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWJlZ2luXCIsaSk6ZS5jb250cm9sLmFwcGVuZENoaWxkKGkpfSk6dD1lLml0ZW1zLmxlbmd0aCxlLmNhcmV0UG9zPXR9KSxlLmhvb2soXCJpbnN0ZWFkXCIsXCJtb3ZlQ2FyZXRcIix0PT57aWYoIWUuaXNGb2N1c2VkKXJldHVyblxuY29uc3QgaT1lLmdldExhc3RBY3RpdmUodClcbmlmKGkpe2NvbnN0IHM9dGUoaSlcbmUuc2V0Q2FyZXQodD4wP3MrMTpzKSxlLnNldEFjdGl2ZUl0ZW0oKSxKKGksXCJsYXN0LWFjdGl2ZVwiKX1lbHNlIGUuc2V0Q2FyZXQoZS5jYXJldFBvcyt0KX0pfSksY2UuZGVmaW5lKFwiZHJvcGRvd25faW5wdXRcIixmdW5jdGlvbigpe2NvbnN0IGU9dGhpc1xuZS5zZXR0aW5ncy5zaG91bGRPcGVuPSEwLGUuaG9vayhcImJlZm9yZVwiLFwic2V0dXBcIiwoKT0+e3ZhciB0XG5lLmZvY3VzX25vZGU9ZS5jb250cm9sLFEoZS5jb250cm9sX2lucHV0LFwiZHJvcGRvd24taW5wdXRcIilcbmNvbnN0IGk9SygnPGRpdiBjbGFzcz1cImRyb3Bkb3duLWlucHV0LXdyYXBcIj4nKVxuaS5hcHBlbmQoZS5jb250cm9sX2lucHV0KSxlLmRyb3Bkb3duLmluc2VydEJlZm9yZShpLGUuZHJvcGRvd24uZmlyc3RDaGlsZClcbmNvbnN0IHM9SygnPGlucHV0IGNsYXNzPVwiaXRlbXMtcGxhY2Vob2xkZXJcIiB0YWJpbmRleD1cIi0xXCIgLz4nKVxucy5wbGFjZWhvbGRlcj1lLnNldHRpbmdzLnBsYWNlaG9sZGVyfHxcIlwiLGUuY29udHJvbC5hcHBlbmQocylcbmNvbnN0IG49bnVsbD09KHQ9ZS5pbnB1dCk/dm9pZCAwOnQuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKVxubiYmcy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsbil9KSxlLm9uKFwiaW5pdGlhbGl6ZVwiLCgpPT57ZS5jb250cm9sX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsdD0+e3N3aXRjaCh0LmtleUNvZGUpe2Nhc2UgMjc6cmV0dXJuIGUuaXNPcGVuJiYoJCh0LCEwKSxlLmNsb3NlKCkpLHZvaWQgZS5jbGVhckFjdGl2ZUl0ZW1zKClcbmNhc2UgOTplLmZvY3VzX25vZGUudGFiSW5kZXg9LTF9cmV0dXJuIGUub25LZXlEb3duLmNhbGwoZSx0KX0pLGUub24oXCJibHVyXCIsKCk9PntlLmZvY3VzX25vZGUudGFiSW5kZXg9ZS5pc0Rpc2FibGVkPy0xOmUudGFiSW5kZXh9KSxlLm9uKFwiZHJvcGRvd25fb3BlblwiLCgpPT57ZS5jb250cm9sX2lucHV0LmZvY3VzKCl9KVxuY29uc3QgdD1lLm9uQmx1clxuZS5ob29rKFwiaW5zdGVhZFwiLFwib25CbHVyXCIsaT0+e2lmKCFpfHxpLnJlbGF0ZWRUYXJnZXQhPWUuY29udHJvbF9pbnB1dClyZXR1cm4gdC5jYWxsKGUpfSkscShlLmNvbnRyb2xfaW5wdXQsXCJibHVyXCIsKCk9PmUub25CbHVyKCkpLGUuaG9vayhcImJlZm9yZVwiLFwiY2xvc2VcIiwoKT0+e2UuaXNPcGVuJiZlLmZvY3VzX25vZGUuZm9jdXMoe3ByZXZlbnRTY3JvbGw6ITB9KX0pfSl9KSxjZS5kZWZpbmUoXCJpbnB1dF9hdXRvZ3Jvd1wiLGZ1bmN0aW9uKCl7dmFyIGU9dGhpc1xuZS5vbihcImluaXRpYWxpemVcIiwoKT0+e3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpLGk9ZS5jb250cm9sX2lucHV0XG50LnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOi05OTk5OXB4OyBsZWZ0Oi05OTk5OXB4OyB3aWR0aDphdXRvOyBwYWRkaW5nOjA7IHdoaXRlLXNwYWNlOnByZTsgXCIsZS53cmFwcGVyLmFwcGVuZENoaWxkKHQpXG5mb3IoY29uc3QgZSBvZltcImxldHRlclNwYWNpbmdcIixcImZvbnRTaXplXCIsXCJmb250RmFtaWx5XCIsXCJmb250V2VpZ2h0XCIsXCJ0ZXh0VHJhbnNmb3JtXCJdKXQuc3R5bGVbZV09aS5zdHlsZVtlXVxudmFyIHM9KCk9Pnt0LnRleHRDb250ZW50PWkudmFsdWUsaS5zdHlsZS53aWR0aD10LmNsaWVudFdpZHRoK1wicHhcIn1cbnMoKSxlLm9uKFwidXBkYXRlIGl0ZW1fYWRkIGl0ZW1fcmVtb3ZlXCIscykscShpLFwiaW5wdXRcIixzKSxxKGksXCJrZXl1cFwiLHMpLHEoaSxcImJsdXJcIixzKSxxKGksXCJ1cGRhdGVcIixzKX0pfSksY2UuZGVmaW5lKFwibm9fYmFja3NwYWNlX2RlbGV0ZVwiLGZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuZGVsZXRlU2VsZWN0aW9uXG50aGlzLmhvb2soXCJpbnN0ZWFkXCIsXCJkZWxldGVTZWxlY3Rpb25cIixpPT4hIWUuYWN0aXZlSXRlbXMubGVuZ3RoJiZ0LmNhbGwoZSxpKSl9KSxjZS5kZWZpbmUoXCJub19hY3RpdmVfaXRlbXNcIixmdW5jdGlvbigpe3RoaXMuaG9vayhcImluc3RlYWRcIixcInNldEFjdGl2ZUl0ZW1cIiwoKT0+e30pLHRoaXMuaG9vayhcImluc3RlYWRcIixcInNlbGVjdEFsbFwiLCgpPT57fSl9KSxjZS5kZWZpbmUoXCJvcHRncm91cF9jb2x1bW5zXCIsZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS5vbktleURvd25cbmUuaG9vayhcImluc3RlYWRcIixcIm9uS2V5RG93blwiLGk9Pnt2YXIgcyxuLG8sclxuaWYoIWUuaXNPcGVufHwzNyE9PWkua2V5Q29kZSYmMzkhPT1pLmtleUNvZGUpcmV0dXJuIHQuY2FsbChlLGkpXG5lLmlnbm9yZUhvdmVyPSEwLHI9WihlLmFjdGl2ZU9wdGlvbixcIltkYXRhLWdyb3VwXVwiKSxzPXRlKGUuYWN0aXZlT3B0aW9uLFwiW2RhdGEtc2VsZWN0YWJsZV1cIiksciYmKHI9Mzc9PT1pLmtleUNvZGU/ci5wcmV2aW91c1NpYmxpbmc6ci5uZXh0U2libGluZykmJihuPShvPXIucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXNlbGVjdGFibGVdXCIpKVtNYXRoLm1pbihvLmxlbmd0aC0xLHMpXSkmJmUuc2V0QWN0aXZlT3B0aW9uKG4pfSl9KSxjZS5kZWZpbmUoXCJyZW1vdmVfYnV0dG9uXCIsZnVuY3Rpb24oZSl7Y29uc3QgdD10aGlzLGk9T2JqZWN0LmFzc2lnbih7bGFiZWw6XCLDl1wiLHRpdGxlOlwiUmVtb3ZlXCIsY2xhc3NOYW1lOlwicmVtb3ZlXCIsdGFiaW5kZXg6LTEscm9sZTpcImJ1dHRvblwiLGh0bWw6ZT0+e3ZhciB0XG5jb25zdCBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbnJldHVybiBpLmNsYXNzTmFtZT1lLmNsYXNzTmFtZXx8XCJcIixpLnRpdGxlPWUudGl0bGV8fFwiXCIsaS5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsZS5yb2xlfHxcImJ1dHRvblwiKSxpLnRhYkluZGV4PW51bGwhPSh0PWUudGFiaW5kZXgpP3Q6LTEsaS50ZXh0Q29udGVudD1lLmxhYmVsfHxcIlwiLGl9fSxlKVxudC5ob29rKFwiYWZ0ZXJcIixcInNldHVwVGVtcGxhdGVzXCIsKCk9Pnt2YXIgZT10LnNldHRpbmdzLnJlbmRlci5pdGVtXG50LnNldHRpbmdzLnJlbmRlci5pdGVtPShzLG4pPT57dmFyIG89SyhlLmNhbGwodCxzLG4pKSxyPUsoaS5odG1sKGkpKVxucmV0dXJuIG8uYXBwZW5kQ2hpbGQocikscShyLFwibW91c2Vkb3duXCIsZT0+eyQoZSwhMCl9KSxxKHIsXCJjbGlja1wiLGU9Pnt0LmlzTG9ja2VkfHwoJChlLCEwKSx0LmlzTG9ja2VkfHx0LnNob3VsZERlbGV0ZShbb10sZSkmJih0LnJlbW92ZUl0ZW0obyksdC5yZWZyZXNoT3B0aW9ucyghMSksdC5pbnB1dFN0YXRlKCkpKX0pLG99fSl9KSxjZS5kZWZpbmUoXCJyZXN0b3JlX29uX2JhY2tzcGFjZVwiLGZ1bmN0aW9uKGUpe2NvbnN0IHQ9dGhpcyxpPU9iamVjdC5hc3NpZ24oe3RleHQ6ZT0+ZVt0LnNldHRpbmdzLmxhYmVsRmllbGRdfSxlKVxudC5vbihcIml0ZW1fcmVtb3ZlXCIsZnVuY3Rpb24oZSl7aWYodC5pc0ZvY3VzZWQmJlwiXCI9PT10LmNvbnRyb2xfaW5wdXQudmFsdWUudHJpbSgpKXt2YXIgcz10Lm9wdGlvbnNbZV1cbnMmJnQuc2V0VGV4dGJveFZhbHVlKGkudGV4dC5jYWxsKHQscykpfX0pfSksY2UuZGVmaW5lKFwidmlydHVhbF9zY3JvbGxcIixmdW5jdGlvbigpe2NvbnN0IGU9dGhpcyx0PWUuY2FuTG9hZCxpPWUuY2xlYXJBY3RpdmVPcHRpb24scz1lLmxvYWRDYWxsYmFja1xudmFyIG4sbyxyLGw9e30sYT0hMSxjPVtdLGQ9ITEsdT1bXSxwPVtdXG5pZihlLnNldHRpbmdzLnNob3VsZExvYWRNb3JlfHwoZS5zZXR0aW5ncy5zaG91bGRMb2FkTW9yZT0oKT0+e2lmKG4uY2xpZW50SGVpZ2h0LyhuLnNjcm9sbEhlaWdodC1uLnNjcm9sbFRvcCk+LjkpcmV0dXJuITBcbmlmKGUuYWN0aXZlT3B0aW9uKXt2YXIgdD1lLnNlbGVjdGFibGUoKVxuaWYoQXJyYXkuZnJvbSh0KS5pbmRleE9mKGUuYWN0aXZlT3B0aW9uKT49dC5sZW5ndGgtMilyZXR1cm4hMH1yZXR1cm4hMX0pLCFlLnNldHRpbmdzLmZpcnN0VXJsKXRocm93XCJ2aXJ0dWFsX3Njcm9sbCBwbHVnaW4gcmVxdWlyZXMgYSBmaXJzdFVybCgpIG1ldGhvZFwiXG5lLnNldHRpbmdzLnNvcnRGaWVsZD1be2ZpZWxkOlwiJG9yZGVyXCJ9LHtmaWVsZDpcIiRzY29yZVwifV1cbmNvbnN0IGg9dD0+IShudWxsIT09ZS5zZXR0aW5ncy5tYXhPcHRpb25zJiZcIm51bWJlclwiPT10eXBlb2YgZS5zZXR0aW5ncy5tYXhPcHRpb25zJiZuLmNoaWxkcmVuLmxlbmd0aD49ZS5zZXR0aW5ncy5tYXhPcHRpb25zKSYmISghKHQgaW4gbCl8fCFsW3RdKSxnPSh0LGkpPT5lLml0ZW1zLmluZGV4T2YoaSk+PTB8fGMuaW5kZXhPZihpKT49MFxuZS5zZXROZXh0VXJsPShlLHQpPT57bFtlXT10fSxlLmdldFVybD10PT57aWYodCBpbiBsKXtjb25zdCBlPWxbdF1cbnJldHVybiBsW3RdPSExLGV9cmV0dXJuIGUuY2xlYXJQYWdpbmF0aW9uKCksZS5zZXR0aW5ncy5maXJzdFVybC5jYWxsKGUsdCl9LGUuY2xlYXJQYWdpbmF0aW9uPSgpPT57bD17fX0sZS5ob29rKFwiaW5zdGVhZFwiLFwiY2xlYXJBY3RpdmVPcHRpb25cIiwoKT0+e2lmKCFhKXJldHVybiBpLmNhbGwoZSl9KSxlLmhvb2soXCJpbnN0ZWFkXCIsXCJjYW5Mb2FkXCIsaT0+aSBpbiBsP2goaSk6dC5jYWxsKGUsaSkpLGUuaG9vayhcImluc3RlYWRcIixcImxvYWRDYWxsYmFja1wiLCh0LGkpPT57aWYoYSl7aWYobyl7Y29uc3QgaT10WzBdXG52b2lkIDAhPT1pJiYoby5kYXRhc2V0LnZhbHVlPWlbZS5zZXR0aW5ncy52YWx1ZUZpZWxkXSl9fWVsc2V7Y29uc3QgdD1cIlwiIT09ZS5sYXN0VmFsdWU/KHQsaSk9PmUuaXRlbXMuaW5kZXhPZihpKT49MHx8cC5pbmRleE9mKGkpPj0wOmdcbmUuY2xlYXJPcHRpb25zKHQpfXMuY2FsbChlLHQsaSksYXx8ZHx8KGQ9ITAsXCJcIj09PWUubGFzdFZhbHVlJiYoYz1PYmplY3Qua2V5cyhlLm9wdGlvbnMpLHI9bFtcIlwiXSx1PU9iamVjdC52YWx1ZXMoZS5vcHRpb25zKSkpLGE9ITF9KSxlLmhvb2soXCJiZWZvcmVcIixcInJlZnJlc2hPcHRpb25zXCIsKCk9PntlLmFjdGl2ZU9wdGlvbiYmXCJvcHRpb25cIiE9PWUuYWN0aXZlT3B0aW9uLmdldEF0dHJpYnV0ZShcInJvbGVcIikmJmUuc2V0QWN0aXZlT3B0aW9uKGUuYWN0aXZlT3B0aW9uLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpfSksZS5ob29rKFwiYWZ0ZXJcIixcInJlZnJlc2hPcHRpb25zXCIsKCk9Pntjb25zdCB0PWUubGFzdFZhbHVlXG52YXIgaVxuaCh0KT8oaT1lLnJlbmRlcihcImxvYWRpbmdfbW9yZVwiLHtxdWVyeTp0fSkpJiYoaS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNlbGVjdGFibGVcIixcIlwiKSxvPWkpOnQgaW4gbCYmIW4ucXVlcnlTZWxlY3RvcihcIi5uby1yZXN1bHRzXCIpJiYoaT1lLnJlbmRlcihcIm5vX21vcmVfcmVzdWx0c1wiLHtxdWVyeTp0fSkpLGkmJihRKGksZS5zZXR0aW5ncy5vcHRpb25DbGFzcyksbi5hcHBlbmQoaSkpfSlcbmNvbnN0IGY9KCk9PntkJiYoZS5hZGRPcHRpb25zKHUpLGUuY2xlYXJPcHRpb25zKGcpLHImJihsW1wiXCJdPXIpKX1cbmUub24oXCJ0eXBlXCIsdD0+e1wiXCI9PT10JiYoZigpLGUucmVmcmVzaE9wdGlvbnMoITEpKX0pLGUub24oXCJkcm9wZG93bl9jbG9zZVwiLGYpLGUub24oXCJpbml0aWFsaXplXCIsKCk9PntwPU9iamVjdC5rZXlzKGUub3B0aW9ucyksYz1PYmplY3Qua2V5cyhlLm9wdGlvbnMpLG49ZS5kcm9wZG93bl9jb250ZW50LGUuc2V0dGluZ3MucmVuZGVyPU9iamVjdC5hc3NpZ24oe30se2xvYWRpbmdfbW9yZTooKT0+JzxkaXYgY2xhc3M9XCJsb2FkaW5nLW1vcmUtcmVzdWx0c1wiPkxvYWRpbmcgbW9yZSByZXN1bHRzIC4uLiA8L2Rpdj4nLG5vX21vcmVfcmVzdWx0czooKT0+JzxkaXYgY2xhc3M9XCJuby1tb3JlLXJlc3VsdHNcIj5ObyBtb3JlIHJlc3VsdHM8L2Rpdj4nfSxlLnNldHRpbmdzLnJlbmRlciksbi5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsKCk9PntlLnNldHRpbmdzLnNob3VsZExvYWRNb3JlLmNhbGwoZSkmJmgoZS5sYXN0VmFsdWUpJiYoYXx8KGE9ITAsZS5sb2FkLmNhbGwoZSxlLmxhc3RWYWx1ZSkpKX0pfSl9KSxjZX0pXG52YXIgdG9tU2VsZWN0PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyBUb21TZWxlY3QoZSx0KX1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRvbS1zZWxlY3QuY29tcGxldGUubWluLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnQgdmFyIFBpcHNNb2RlO1xuKGZ1bmN0aW9uIChQaXBzTW9kZSkge1xuICAgIFBpcHNNb2RlW1wiUmFuZ2VcIl0gPSBcInJhbmdlXCI7XG4gICAgUGlwc01vZGVbXCJTdGVwc1wiXSA9IFwic3RlcHNcIjtcbiAgICBQaXBzTW9kZVtcIlBvc2l0aW9uc1wiXSA9IFwicG9zaXRpb25zXCI7XG4gICAgUGlwc01vZGVbXCJDb3VudFwiXSA9IFwiY291bnRcIjtcbiAgICBQaXBzTW9kZVtcIlZhbHVlc1wiXSA9IFwidmFsdWVzXCI7XG59KShQaXBzTW9kZSB8fCAoUGlwc01vZGUgPSB7fSkpO1xuZXhwb3J0IHZhciBQaXBzVHlwZTtcbihmdW5jdGlvbiAoUGlwc1R5cGUpIHtcbiAgICBQaXBzVHlwZVtQaXBzVHlwZVtcIk5vbmVcIl0gPSAtMV0gPSBcIk5vbmVcIjtcbiAgICBQaXBzVHlwZVtQaXBzVHlwZVtcIk5vVmFsdWVcIl0gPSAwXSA9IFwiTm9WYWx1ZVwiO1xuICAgIFBpcHNUeXBlW1BpcHNUeXBlW1wiTGFyZ2VWYWx1ZVwiXSA9IDFdID0gXCJMYXJnZVZhbHVlXCI7XG4gICAgUGlwc1R5cGVbUGlwc1R5cGVbXCJTbWFsbFZhbHVlXCJdID0gMl0gPSBcIlNtYWxsVmFsdWVcIjtcbn0pKFBpcHNUeXBlIHx8IChQaXBzVHlwZSA9IHt9KSk7XG4vL3JlZ2lvbiBIZWxwZXIgTWV0aG9kc1xuZnVuY3Rpb24gaXNWYWxpZEZvcm1hdHRlcihlbnRyeSkge1xuICAgIHJldHVybiBpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihlbnRyeSkgJiYgdHlwZW9mIGVudHJ5LmZyb20gPT09IFwiZnVuY3Rpb25cIjtcbn1cbmZ1bmN0aW9uIGlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGVudHJ5KSB7XG4gICAgLy8gcGFydGlhbCBmb3JtYXR0ZXJzIG9ubHkgbmVlZCBhIHRvIGZ1bmN0aW9uIGFuZCBub3QgYSBmcm9tIGZ1bmN0aW9uXG4gICAgcmV0dXJuIHR5cGVvZiBlbnRyeSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgZW50cnkudG8gPT09IFwiZnVuY3Rpb25cIjtcbn1cbmZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQoZWwpIHtcbiAgICBlbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGVsKTtcbn1cbmZ1bmN0aW9uIGlzU2V0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQ7XG59XG4vLyBCaW5kYWJsZSB2ZXJzaW9uXG5mdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuLy8gUmVtb3ZlcyBkdXBsaWNhdGVzIGZyb20gYW4gYXJyYXkuXG5mdW5jdGlvbiB1bmlxdWUoYXJyYXkpIHtcbiAgICByZXR1cm4gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiAhdGhpc1thXSA/ICh0aGlzW2FdID0gdHJ1ZSkgOiBmYWxzZTtcbiAgICB9LCB7fSk7XG59XG4vLyBSb3VuZCBhIHZhbHVlIHRvIHRoZSBjbG9zZXN0ICd0bycuXG5mdW5jdGlvbiBjbG9zZXN0KHZhbHVlLCB0bykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlIC8gdG8pICogdG87XG59XG4vLyBDdXJyZW50IHBvc2l0aW9uIG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gdGhlIGRvY3VtZW50LlxuZnVuY3Rpb24gb2Zmc2V0KGVsZW0sIG9yaWVudGF0aW9uKSB7XG4gICAgdmFyIHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBkb2MgPSBlbGVtLm93bmVyRG9jdW1lbnQ7XG4gICAgdmFyIGRvY0VsZW0gPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgIHZhciBwYWdlT2Zmc2V0ID0gZ2V0UGFnZU9mZnNldChkb2MpO1xuICAgIC8vIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBjb250YWlucyBsZWZ0IHNjcm9sbCBpbiBDaHJvbWUgb24gQW5kcm9pZC5cbiAgICAvLyBJIGhhdmVuJ3QgZm91bmQgYSBmZWF0dXJlIGRldGVjdGlvbiB0aGF0IHByb3ZlcyB0aGlzLiBXb3JzdCBjYXNlXG4gICAgLy8gc2NlbmFyaW8gb24gbWlzLW1hdGNoOiB0aGUgJ3RhcCcgZmVhdHVyZSBvbiBob3Jpem9udGFsIHNsaWRlcnMgYnJlYWtzLlxuICAgIGlmICgvd2Via2l0LipDaHJvbWUuKk1vYmlsZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgcGFnZU9mZnNldC54ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIG9yaWVudGF0aW9uID8gcmVjdC50b3AgKyBwYWdlT2Zmc2V0LnkgLSBkb2NFbGVtLmNsaWVudFRvcCA6IHJlY3QubGVmdCArIHBhZ2VPZmZzZXQueCAtIGRvY0VsZW0uY2xpZW50TGVmdDtcbn1cbi8vIENoZWNrcyB3aGV0aGVyIGEgdmFsdWUgaXMgbnVtZXJpY2FsLlxuZnVuY3Rpb24gaXNOdW1lcmljKGEpIHtcbiAgICByZXR1cm4gdHlwZW9mIGEgPT09IFwibnVtYmVyXCIgJiYgIWlzTmFOKGEpICYmIGlzRmluaXRlKGEpO1xufVxuLy8gU2V0cyBhIGNsYXNzIGFuZCByZW1vdmVzIGl0IGFmdGVyIFtkdXJhdGlvbl0gbXMuXG5mdW5jdGlvbiBhZGRDbGFzc0ZvcihlbGVtZW50LCBjbGFzc05hbWUsIGR1cmF0aW9uKSB7XG4gICAgaWYgKGR1cmF0aW9uID4gMCkge1xuICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICB9XG59XG4vLyBMaW1pdHMgYSB2YWx1ZSB0byAwIC0gMTAwXG5mdW5jdGlvbiBsaW1pdChhKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKGEsIDEwMCksIDApO1xufVxuLy8gV3JhcHMgYSB2YXJpYWJsZSBhcyBhbiBhcnJheSwgaWYgaXQgaXNuJ3Qgb25lIHlldC5cbi8vIE5vdGUgdGhhdCBhbiBpbnB1dCBhcnJheSBpcyByZXR1cm5lZCBieSByZWZlcmVuY2UhXG5mdW5jdGlvbiBhc0FycmF5KGEpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhKSA/IGEgOiBbYV07XG59XG4vLyBDb3VudHMgZGVjaW1hbHNcbmZ1bmN0aW9uIGNvdW50RGVjaW1hbHMobnVtU3RyKSB7XG4gICAgbnVtU3RyID0gU3RyaW5nKG51bVN0cik7XG4gICAgdmFyIHBpZWNlcyA9IG51bVN0ci5zcGxpdChcIi5cIik7XG4gICAgcmV0dXJuIHBpZWNlcy5sZW5ndGggPiAxID8gcGllY2VzWzFdLmxlbmd0aCA6IDA7XG59XG4vLyBodHRwOi8veW91bWlnaHRub3RuZWVkanF1ZXJ5LmNvbS8jYWRkX2NsYXNzXG5mdW5jdGlvbiBhZGRDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdCAmJiAhL1xccy8udGVzdChjbGFzc05hbWUpKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGVsLmNsYXNzTmFtZSArPSBcIiBcIiArIGNsYXNzTmFtZTtcbiAgICB9XG59XG4vLyBodHRwOi8veW91bWlnaHRub3RuZWVkanF1ZXJ5LmNvbS8jcmVtb3ZlX2NsYXNzXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdCAmJiAhL1xccy8udGVzdChjbGFzc05hbWUpKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXnxcXFxcYilcIiArIGNsYXNzTmFtZS5zcGxpdChcIiBcIikuam9pbihcInxcIikgKyBcIihcXFxcYnwkKVwiLCBcImdpXCIpLCBcIiBcIik7XG4gICAgfVxufVxuLy8gaHR0cHM6Ly9wbGFpbmpzLmNvbS9qYXZhc2NyaXB0L2F0dHJpYnV0ZXMvYWRkaW5nLXJlbW92aW5nLWFuZC10ZXN0aW5nLWZvci1jbGFzc2VzLTkvXG5mdW5jdGlvbiBoYXNDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIGVsLmNsYXNzTGlzdCA/IGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpIDogbmV3IFJlZ0V4cChcIlxcXFxiXCIgKyBjbGFzc05hbWUgKyBcIlxcXFxiXCIpLnRlc3QoZWwuY2xhc3NOYW1lKTtcbn1cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvc2Nyb2xsWSNOb3Rlc1xuZnVuY3Rpb24gZ2V0UGFnZU9mZnNldChkb2MpIHtcbiAgICB2YXIgc3VwcG9ydFBhZ2VPZmZzZXQgPSB3aW5kb3cucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaXNDU1MxQ29tcGF0ID0gKGRvYy5jb21wYXRNb2RlIHx8IFwiXCIpID09PSBcIkNTUzFDb21wYXRcIjtcbiAgICB2YXIgeCA9IHN1cHBvcnRQYWdlT2Zmc2V0XG4gICAgICAgID8gd2luZG93LnBhZ2VYT2Zmc2V0XG4gICAgICAgIDogaXNDU1MxQ29tcGF0XG4gICAgICAgICAgICA/IGRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdFxuICAgICAgICAgICAgOiBkb2MuYm9keS5zY3JvbGxMZWZ0O1xuICAgIHZhciB5ID0gc3VwcG9ydFBhZ2VPZmZzZXRcbiAgICAgICAgPyB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICAgICAgOiBpc0NTUzFDb21wYXRcbiAgICAgICAgICAgID8gZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgICAgICAgICAgIDogZG9jLmJvZHkuc2Nyb2xsVG9wO1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IHgsXG4gICAgICAgIHk6IHksXG4gICAgfTtcbn1cbi8vIHdlIHByb3ZpZGUgYSBmdW5jdGlvbiB0byBjb21wdXRlIGNvbnN0YW50cyBpbnN0ZWFkXG4vLyBvZiBhY2Nlc3Npbmcgd2luZG93LiogYXMgc29vbiBhcyB0aGUgbW9kdWxlIG5lZWRzIGl0XG4vLyBzbyB0aGF0IHdlIGRvIG5vdCBjb21wdXRlIGFueXRoaW5nIGlmIG5vdCBuZWVkZWRcbmZ1bmN0aW9uIGdldEFjdGlvbnMoKSB7XG4gICAgLy8gRGV0ZXJtaW5lIHRoZSBldmVudHMgdG8gYmluZC4gSUUxMSBpbXBsZW1lbnRzIHBvaW50ZXJFdmVudHMgd2l0aG91dFxuICAgIC8vIGEgcHJlZml4LCB3aGljaCBicmVha3MgY29tcGF0aWJpbGl0eSB3aXRoIHRoZSBJRTEwIGltcGxlbWVudGF0aW9uLlxuICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnBvaW50ZXJFbmFibGVkXG4gICAgICAgID8ge1xuICAgICAgICAgICAgc3RhcnQ6IFwicG9pbnRlcmRvd25cIixcbiAgICAgICAgICAgIG1vdmU6IFwicG9pbnRlcm1vdmVcIixcbiAgICAgICAgICAgIGVuZDogXCJwb2ludGVydXBcIixcbiAgICAgICAgfVxuICAgICAgICA6IHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZFxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwiTVNQb2ludGVyRG93blwiLFxuICAgICAgICAgICAgICAgIG1vdmU6IFwiTVNQb2ludGVyTW92ZVwiLFxuICAgICAgICAgICAgICAgIGVuZDogXCJNU1BvaW50ZXJVcFwiLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwibW91c2Vkb3duIHRvdWNoc3RhcnRcIixcbiAgICAgICAgICAgICAgICBtb3ZlOiBcIm1vdXNlbW92ZSB0b3VjaG1vdmVcIixcbiAgICAgICAgICAgICAgICBlbmQ6IFwibW91c2V1cCB0b3VjaGVuZFwiLFxuICAgICAgICAgICAgfTtcbn1cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL0V2ZW50TGlzdGVuZXJPcHRpb25zL2Jsb2IvZ2gtcGFnZXMvZXhwbGFpbmVyLm1kXG4vLyBJc3N1ZSAjNzg1XG5mdW5jdGlvbiBnZXRTdXBwb3J0c1Bhc3NpdmUoKSB7XG4gICAgdmFyIHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xuICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIFwicGFzc2l2ZVwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsIG51bGwsIG9wdHMpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkgeyB9XG4gICAgLyogZXNsaW50LWVuYWJsZSAqL1xuICAgIHJldHVybiBzdXBwb3J0c1Bhc3NpdmU7XG59XG5mdW5jdGlvbiBnZXRTdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSgpIHtcbiAgICByZXR1cm4gd2luZG93LkNTUyAmJiBDU1Muc3VwcG9ydHMgJiYgQ1NTLnN1cHBvcnRzKFwidG91Y2gtYWN0aW9uXCIsIFwibm9uZVwiKTtcbn1cbi8vZW5kcmVnaW9uXG4vL3JlZ2lvbiBSYW5nZSBDYWxjdWxhdGlvblxuLy8gRGV0ZXJtaW5lIHRoZSBzaXplIG9mIGEgc3ViLXJhbmdlIGluIHJlbGF0aW9uIHRvIGEgZnVsbCByYW5nZS5cbmZ1bmN0aW9uIHN1YlJhbmdlUmF0aW8ocGEsIHBiKSB7XG4gICAgcmV0dXJuIDEwMCAvIChwYiAtIHBhKTtcbn1cbi8vIChwZXJjZW50YWdlKSBIb3cgbWFueSBwZXJjZW50IGlzIHRoaXMgdmFsdWUgb2YgdGhpcyByYW5nZT9cbmZ1bmN0aW9uIGZyb21QZXJjZW50YWdlKHJhbmdlLCB2YWx1ZSwgc3RhcnRSYW5nZSkge1xuICAgIHJldHVybiAodmFsdWUgKiAxMDApIC8gKHJhbmdlW3N0YXJ0UmFuZ2UgKyAxXSAtIHJhbmdlW3N0YXJ0UmFuZ2VdKTtcbn1cbi8vIChwZXJjZW50YWdlKSBXaGVyZSBpcyB0aGlzIHZhbHVlIG9uIHRoaXMgcmFuZ2U/XG5mdW5jdGlvbiB0b1BlcmNlbnRhZ2UocmFuZ2UsIHZhbHVlKSB7XG4gICAgcmV0dXJuIGZyb21QZXJjZW50YWdlKHJhbmdlLCByYW5nZVswXSA8IDAgPyB2YWx1ZSArIE1hdGguYWJzKHJhbmdlWzBdKSA6IHZhbHVlIC0gcmFuZ2VbMF0sIDApO1xufVxuLy8gKHZhbHVlKSBIb3cgbXVjaCBpcyB0aGlzIHBlcmNlbnRhZ2Ugb24gdGhpcyByYW5nZT9cbmZ1bmN0aW9uIGlzUGVyY2VudGFnZShyYW5nZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlICogKHJhbmdlWzFdIC0gcmFuZ2VbMF0pKSAvIDEwMCArIHJhbmdlWzBdO1xufVxuZnVuY3Rpb24gZ2V0Sih2YWx1ZSwgYXJyKSB7XG4gICAgdmFyIGogPSAxO1xuICAgIHdoaWxlICh2YWx1ZSA+PSBhcnJbal0pIHtcbiAgICAgICAgaiArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gajtcbn1cbi8vIChwZXJjZW50YWdlKSBJbnB1dCBhIHZhbHVlLCBmaW5kIHdoZXJlLCBvbiBhIHNjYWxlIG9mIDAtMTAwLCBpdCBhcHBsaWVzLlxuZnVuY3Rpb24gdG9TdGVwcGluZyh4VmFsLCB4UGN0LCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA+PSB4VmFsLnNsaWNlKC0xKVswXSkge1xuICAgICAgICByZXR1cm4gMTAwO1xuICAgIH1cbiAgICB2YXIgaiA9IGdldEoodmFsdWUsIHhWYWwpO1xuICAgIHZhciB2YSA9IHhWYWxbaiAtIDFdO1xuICAgIHZhciB2YiA9IHhWYWxbal07XG4gICAgdmFyIHBhID0geFBjdFtqIC0gMV07XG4gICAgdmFyIHBiID0geFBjdFtqXTtcbiAgICByZXR1cm4gcGEgKyB0b1BlcmNlbnRhZ2UoW3ZhLCB2Yl0sIHZhbHVlKSAvIHN1YlJhbmdlUmF0aW8ocGEsIHBiKTtcbn1cbi8vICh2YWx1ZSkgSW5wdXQgYSBwZXJjZW50YWdlLCBmaW5kIHdoZXJlIGl0IGlzIG9uIHRoZSBzcGVjaWZpZWQgcmFuZ2UuXG5mdW5jdGlvbiBmcm9tU3RlcHBpbmcoeFZhbCwgeFBjdCwgdmFsdWUpIHtcbiAgICAvLyBUaGVyZSBpcyBubyByYW5nZSBncm91cCB0aGF0IGZpdHMgMTAwXG4gICAgaWYgKHZhbHVlID49IDEwMCkge1xuICAgICAgICByZXR1cm4geFZhbC5zbGljZSgtMSlbMF07XG4gICAgfVxuICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgeFBjdCk7XG4gICAgdmFyIHZhID0geFZhbFtqIC0gMV07XG4gICAgdmFyIHZiID0geFZhbFtqXTtcbiAgICB2YXIgcGEgPSB4UGN0W2ogLSAxXTtcbiAgICB2YXIgcGIgPSB4UGN0W2pdO1xuICAgIHJldHVybiBpc1BlcmNlbnRhZ2UoW3ZhLCB2Yl0sICh2YWx1ZSAtIHBhKSAqIHN1YlJhbmdlUmF0aW8ocGEsIHBiKSk7XG59XG4vLyAocGVyY2VudGFnZSkgR2V0IHRoZSBzdGVwIHRoYXQgYXBwbGllcyBhdCBhIGNlcnRhaW4gdmFsdWUuXG5mdW5jdGlvbiBnZXRTdGVwKHhQY3QsIHhTdGVwcywgc25hcCwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IDEwMCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgeFBjdCk7XG4gICAgdmFyIGEgPSB4UGN0W2ogLSAxXTtcbiAgICB2YXIgYiA9IHhQY3Rbal07XG4gICAgLy8gSWYgJ3NuYXAnIGlzIHNldCwgc3RlcHMgYXJlIHVzZWQgYXMgZml4ZWQgcG9pbnRzIG9uIHRoZSBzbGlkZXIuXG4gICAgaWYgKHNuYXApIHtcbiAgICAgICAgLy8gRmluZCB0aGUgY2xvc2VzdCBwb3NpdGlvbiwgYSBvciBiLlxuICAgICAgICBpZiAodmFsdWUgLSBhID4gKGIgLSBhKSAvIDIpIHtcbiAgICAgICAgICAgIHJldHVybiBiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgICBpZiAoIXhTdGVwc1tqIC0gMV0pIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4geFBjdFtqIC0gMV0gKyBjbG9zZXN0KHZhbHVlIC0geFBjdFtqIC0gMV0sIHhTdGVwc1tqIC0gMV0pO1xufVxuLy9lbmRyZWdpb25cbi8vcmVnaW9uIFNwZWN0cnVtXG52YXIgU3BlY3RydW0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3BlY3RydW0oZW50cnksIHNuYXAsIHNpbmdsZVN0ZXApIHtcbiAgICAgICAgdGhpcy54UGN0ID0gW107XG4gICAgICAgIHRoaXMueFZhbCA9IFtdO1xuICAgICAgICB0aGlzLnhTdGVwcyA9IFtdO1xuICAgICAgICB0aGlzLnhOdW1TdGVwcyA9IFtdO1xuICAgICAgICB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwID0gW107XG4gICAgICAgIHRoaXMueFN0ZXBzID0gW3NpbmdsZVN0ZXAgfHwgZmFsc2VdO1xuICAgICAgICB0aGlzLnhOdW1TdGVwcyA9IFtmYWxzZV07XG4gICAgICAgIHRoaXMuc25hcCA9IHNuYXA7XG4gICAgICAgIHZhciBpbmRleDtcbiAgICAgICAgdmFyIG9yZGVyZWQgPSBbXTtcbiAgICAgICAgLy8gTWFwIHRoZSBvYmplY3Qga2V5cyB0byBhbiBhcnJheS5cbiAgICAgICAgT2JqZWN0LmtleXMoZW50cnkpLmZvckVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICBvcmRlcmVkLnB1c2goW2FzQXJyYXkoZW50cnlbaW5kZXhdKSwgaW5kZXhdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFNvcnQgYWxsIGVudHJpZXMgYnkgdmFsdWUgKG51bWVyaWMgc29ydCkuXG4gICAgICAgIG9yZGVyZWQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGFbMF1bMF0gLSBiWzBdWzBdO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQ29udmVydCBhbGwgZW50cmllcyB0byBzdWJyYW5nZXMuXG4gICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IG9yZGVyZWQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVudHJ5UG9pbnQob3JkZXJlZFtpbmRleF1bMV0sIG9yZGVyZWRbaW5kZXhdWzBdKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTdG9yZSB0aGUgYWN0dWFsIHN0ZXAgdmFsdWVzLlxuICAgICAgICAvLyB4U3RlcHMgaXMgc29ydGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIHhQY3QgYW5kIHhWYWwuXG4gICAgICAgIHRoaXMueE51bVN0ZXBzID0gdGhpcy54U3RlcHMuc2xpY2UoMCk7XG4gICAgICAgIC8vIENvbnZlcnQgYWxsIG51bWVyaWMgc3RlcHMgdG8gdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIHN1YnJhbmdlIHRoZXkgcmVwcmVzZW50LlxuICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnhOdW1TdGVwcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU3RlcFBvaW50KGluZGV4LCB0aGlzLnhOdW1TdGVwc1tpbmRleF0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXREaXN0YW5jZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgZGlzdGFuY2VzID0gW107XG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnhOdW1TdGVwcy5sZW5ndGggLSAxOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBkaXN0YW5jZXNbaW5kZXhdID0gZnJvbVBlcmNlbnRhZ2UodGhpcy54VmFsLCB2YWx1ZSwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaXN0YW5jZXM7XG4gICAgfTtcbiAgICAvLyBDYWxjdWxhdGUgdGhlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugb3ZlciB0aGUgd2hvbGUgc2NhbGUgb2YgcmFuZ2VzLlxuICAgIC8vIGRpcmVjdGlvbjogMCA9IGJhY2t3YXJkcyAvIDEgPSBmb3J3YXJkc1xuICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXRBYnNvbHV0ZURpc3RhbmNlID0gZnVuY3Rpb24gKHZhbHVlLCBkaXN0YW5jZXMsIGRpcmVjdGlvbikge1xuICAgICAgICB2YXIgeFBjdF9pbmRleCA9IDA7XG4gICAgICAgIC8vIENhbGN1bGF0ZSByYW5nZSB3aGVyZSB0byBzdGFydCBjYWxjdWxhdGlvblxuICAgICAgICBpZiAodmFsdWUgPCB0aGlzLnhQY3RbdGhpcy54UGN0Lmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICB3aGlsZSAodmFsdWUgPiB0aGlzLnhQY3RbeFBjdF9pbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgeFBjdF9pbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlID09PSB0aGlzLnhQY3RbdGhpcy54UGN0Lmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICB4UGN0X2luZGV4ID0gdGhpcy54UGN0Lmxlbmd0aCAtIDI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgbG9va2luZyBiYWNrd2FyZHMgYW5kIHRoZSB2YWx1ZSBpcyBleGFjdGx5IGF0IGEgcmFuZ2Ugc2VwYXJhdG9yIHRoZW4gbG9vayBvbmUgcmFuZ2UgZnVydGhlclxuICAgICAgICBpZiAoIWRpcmVjdGlvbiAmJiB2YWx1ZSA9PT0gdGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgeFBjdF9pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkaXN0YW5jZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGRpc3RhbmNlcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdGFydF9mYWN0b3I7XG4gICAgICAgIHZhciByZXN0X2ZhY3RvciA9IDE7XG4gICAgICAgIHZhciByZXN0X3JlbF9kaXN0YW5jZSA9IGRpc3RhbmNlc1t4UGN0X2luZGV4XTtcbiAgICAgICAgdmFyIHJhbmdlX3BjdCA9IDA7XG4gICAgICAgIHZhciByZWxfcmFuZ2VfZGlzdGFuY2UgPSAwO1xuICAgICAgICB2YXIgYWJzX2Rpc3RhbmNlX2NvdW50ZXIgPSAwO1xuICAgICAgICB2YXIgcmFuZ2VfY291bnRlciA9IDA7XG4gICAgICAgIC8vIENhbGN1bGF0ZSB3aGF0IHBhcnQgb2YgdGhlIHN0YXJ0IHJhbmdlIHRoZSB2YWx1ZSBpc1xuICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBzdGFydF9mYWN0b3IgPSAodmFsdWUgLSB0aGlzLnhQY3RbeFBjdF9pbmRleF0pIC8gKHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMV0gLSB0aGlzLnhQY3RbeFBjdF9pbmRleF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RhcnRfZmFjdG9yID0gKHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMV0gLSB2YWx1ZSkgLyAodGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSAtIHRoaXMueFBjdFt4UGN0X2luZGV4XSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRG8gdW50aWwgdGhlIGNvbXBsZXRlIGRpc3RhbmNlIGFjcm9zcyByYW5nZXMgaXMgY2FsY3VsYXRlZFxuICAgICAgICB3aGlsZSAocmVzdF9yZWxfZGlzdGFuY2UgPiAwKSB7XG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHBlcmNlbnRhZ2Ugb2YgdG90YWwgcmFuZ2VcbiAgICAgICAgICAgIHJhbmdlX3BjdCA9IHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMSArIHJhbmdlX2NvdW50ZXJdIC0gdGhpcy54UGN0W3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXTtcbiAgICAgICAgICAgIC8vIERldGVjdCBpZiB0aGUgbWFyZ2luLCBwYWRkaW5nIG9yIGxpbWl0IGlzIGxhcmdlciB0aGVuIHRoZSBjdXJyZW50IHJhbmdlIGFuZCBjYWxjdWxhdGVcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZXNbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdICogcmVzdF9mYWN0b3IgKyAxMDAgLSBzdGFydF9mYWN0b3IgKiAxMDAgPiAxMDApIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBsYXJnZXIgdGhlbiB0YWtlIHRoZSBwZXJjZW50dWFsIGRpc3RhbmNlIG9mIHRoZSB3aG9sZSByYW5nZVxuICAgICAgICAgICAgICAgIHJlbF9yYW5nZV9kaXN0YW5jZSA9IHJhbmdlX3BjdCAqIHN0YXJ0X2ZhY3RvcjtcbiAgICAgICAgICAgICAgICAvLyBSZXN0IGZhY3RvciBvZiByZWxhdGl2ZSBwZXJjZW50dWFsIGRpc3RhbmNlIHN0aWxsIHRvIGJlIGNhbGN1bGF0ZWRcbiAgICAgICAgICAgICAgICByZXN0X2ZhY3RvciA9IChyZXN0X3JlbF9kaXN0YW5jZSAtIDEwMCAqIHN0YXJ0X2ZhY3RvcikgLyBkaXN0YW5jZXNbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdO1xuICAgICAgICAgICAgICAgIC8vIFNldCBzdGFydCBmYWN0b3IgdG8gMSBhcyBmb3IgbmV4dCByYW5nZSBpdCBkb2VzIG5vdCBhcHBseS5cbiAgICAgICAgICAgICAgICBzdGFydF9mYWN0b3IgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgc21hbGxlciBvciBlcXVhbCB0aGVuIHRha2UgdGhlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugb2YgdGhlIGNhbGN1bGF0ZSBwZXJjZW50dWFsIHBhcnQgb2YgdGhhdCByYW5nZVxuICAgICAgICAgICAgICAgIHJlbF9yYW5nZV9kaXN0YW5jZSA9ICgoZGlzdGFuY2VzW3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXSAqIHJhbmdlX3BjdCkgLyAxMDApICogcmVzdF9mYWN0b3I7XG4gICAgICAgICAgICAgICAgLy8gTm8gcmVzdCBsZWZ0IGFzIHRoZSByZXN0IGZpdHMgaW4gY3VycmVudCByYW5nZVxuICAgICAgICAgICAgICAgIHJlc3RfZmFjdG9yID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBhYnNfZGlzdGFuY2VfY291bnRlciA9IGFic19kaXN0YW5jZV9jb3VudGVyIC0gcmVsX3JhbmdlX2Rpc3RhbmNlO1xuICAgICAgICAgICAgICAgIC8vIExpbWl0IHJhbmdlIHRvIGZpcnN0IHJhbmdlIHdoZW4gZGlzdGFuY2UgYmVjb21lcyBvdXRzaWRlIG9mIG1pbmltdW0gcmFuZ2VcbiAgICAgICAgICAgICAgICBpZiAodGhpcy54UGN0Lmxlbmd0aCArIHJhbmdlX2NvdW50ZXIgPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICByYW5nZV9jb3VudGVyLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWJzX2Rpc3RhbmNlX2NvdW50ZXIgPSBhYnNfZGlzdGFuY2VfY291bnRlciArIHJlbF9yYW5nZV9kaXN0YW5jZTtcbiAgICAgICAgICAgICAgICAvLyBMaW1pdCByYW5nZSB0byBsYXN0IHJhbmdlIHdoZW4gZGlzdGFuY2UgYmVjb21lcyBvdXRzaWRlIG9mIG1heGltdW0gcmFuZ2VcbiAgICAgICAgICAgICAgICBpZiAodGhpcy54UGN0Lmxlbmd0aCAtIHJhbmdlX2NvdW50ZXIgPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICByYW5nZV9jb3VudGVyKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVzdCBvZiByZWxhdGl2ZSBwZXJjZW50dWFsIGRpc3RhbmNlIHN0aWxsIHRvIGJlIGNhbGN1bGF0ZWRcbiAgICAgICAgICAgIHJlc3RfcmVsX2Rpc3RhbmNlID0gZGlzdGFuY2VzW3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXSAqIHJlc3RfZmFjdG9yO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZSArIGFic19kaXN0YW5jZV9jb3VudGVyO1xuICAgIH07XG4gICAgU3BlY3RydW0ucHJvdG90eXBlLnRvU3RlcHBpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSB0b1N0ZXBwaW5nKHRoaXMueFZhbCwgdGhpcy54UGN0LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIFNwZWN0cnVtLnByb3RvdHlwZS5mcm9tU3RlcHBpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZyb21TdGVwcGluZyh0aGlzLnhWYWwsIHRoaXMueFBjdCwgdmFsdWUpO1xuICAgIH07XG4gICAgU3BlY3RydW0ucHJvdG90eXBlLmdldFN0ZXAgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSBnZXRTdGVwKHRoaXMueFBjdCwgdGhpcy54U3RlcHMsIHRoaXMuc25hcCwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0RGVmYXVsdFN0ZXAgPSBmdW5jdGlvbiAodmFsdWUsIGlzRG93biwgc2l6ZSkge1xuICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHRoaXMueFBjdCk7XG4gICAgICAgIC8vIFdoZW4gYXQgdGhlIHRvcCBvciBzdGVwcGluZyBkb3duLCBsb29rIGF0IHRoZSBwcmV2aW91cyBzdWItcmFuZ2VcbiAgICAgICAgaWYgKHZhbHVlID09PSAxMDAgfHwgKGlzRG93biAmJiB2YWx1ZSA9PT0gdGhpcy54UGN0W2ogLSAxXSkpIHtcbiAgICAgICAgICAgIGogPSBNYXRoLm1heChqIC0gMSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICh0aGlzLnhWYWxbal0gLSB0aGlzLnhWYWxbaiAtIDFdKSAvIHNpemU7XG4gICAgfTtcbiAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0TmVhcmJ5U3RlcHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGogPSBnZXRKKHZhbHVlLCB0aGlzLnhQY3QpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RlcEJlZm9yZToge1xuICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHRoaXMueFZhbFtqIC0gMl0sXG4gICAgICAgICAgICAgICAgc3RlcDogdGhpcy54TnVtU3RlcHNbaiAtIDJdLFxuICAgICAgICAgICAgICAgIGhpZ2hlc3RTdGVwOiB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwW2ogLSAyXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzU3RlcDoge1xuICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHRoaXMueFZhbFtqIC0gMV0sXG4gICAgICAgICAgICAgICAgc3RlcDogdGhpcy54TnVtU3RlcHNbaiAtIDFdLFxuICAgICAgICAgICAgICAgIGhpZ2hlc3RTdGVwOiB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwW2ogLSAxXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGVwQWZ0ZXI6IHtcbiAgICAgICAgICAgICAgICBzdGFydFZhbHVlOiB0aGlzLnhWYWxbal0sXG4gICAgICAgICAgICAgICAgc3RlcDogdGhpcy54TnVtU3RlcHNbal0sXG4gICAgICAgICAgICAgICAgaGlnaGVzdFN0ZXA6IHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbal0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH07XG4gICAgU3BlY3RydW0ucHJvdG90eXBlLmNvdW50U3RlcERlY2ltYWxzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3RlcERlY2ltYWxzID0gdGhpcy54TnVtU3RlcHMubWFwKGNvdW50RGVjaW1hbHMpO1xuICAgICAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgc3RlcERlY2ltYWxzKTtcbiAgICB9O1xuICAgIFNwZWN0cnVtLnByb3RvdHlwZS5oYXNOb1NpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnhWYWxbMF0gPT09IHRoaXMueFZhbFt0aGlzLnhWYWwubGVuZ3RoIC0gMV07XG4gICAgfTtcbiAgICAvLyBPdXRzaWRlIHRlc3RpbmdcbiAgICBTcGVjdHJ1bS5wcm90b3R5cGUuY29udmVydCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdGVwKHRoaXMudG9TdGVwcGluZyh2YWx1ZSkpO1xuICAgIH07XG4gICAgU3BlY3RydW0ucHJvdG90eXBlLmhhbmRsZUVudHJ5UG9pbnQgPSBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHZhciBwZXJjZW50YWdlO1xuICAgICAgICAvLyBDb3ZlcnQgbWluL21heCBzeW50YXggdG8gMCBhbmQgMTAwLlxuICAgICAgICBpZiAoaW5kZXggPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGluZGV4ID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICBwZXJjZW50YWdlID0gMTAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGVyY2VudGFnZSA9IHBhcnNlRmxvYXQoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIGZvciBjb3JyZWN0IGlucHV0LlxuICAgICAgICBpZiAoIWlzTnVtZXJpYyhwZXJjZW50YWdlKSB8fCAhaXNOdW1lcmljKHZhbHVlWzBdKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3JhbmdlJyB2YWx1ZSBpc24ndCBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTdG9yZSB2YWx1ZXMuXG4gICAgICAgIHRoaXMueFBjdC5wdXNoKHBlcmNlbnRhZ2UpO1xuICAgICAgICB0aGlzLnhWYWwucHVzaCh2YWx1ZVswXSk7XG4gICAgICAgIHZhciB2YWx1ZTEgPSBOdW1iZXIodmFsdWVbMV0pO1xuICAgICAgICAvLyBOYU4gd2lsbCBldmFsdWF0ZSB0byBmYWxzZSB0b28sIGJ1dCB0byBrZWVwXG4gICAgICAgIC8vIGxvZ2dpbmcgY2xlYXIsIHNldCBzdGVwIGV4cGxpY2l0bHkuIE1ha2Ugc3VyZVxuICAgICAgICAvLyBub3QgdG8gb3ZlcnJpZGUgdGhlICdzdGVwJyBzZXR0aW5nIHdpdGggZmFsc2UuXG4gICAgICAgIGlmICghcGVyY2VudGFnZSkge1xuICAgICAgICAgICAgaWYgKCFpc05hTih2YWx1ZTEpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54U3RlcHNbMF0gPSB2YWx1ZTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnhTdGVwcy5wdXNoKGlzTmFOKHZhbHVlMSkgPyBmYWxzZSA6IHZhbHVlMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcC5wdXNoKDApO1xuICAgIH07XG4gICAgU3BlY3RydW0ucHJvdG90eXBlLmhhbmRsZVN0ZXBQb2ludCA9IGZ1bmN0aW9uIChpLCBuKSB7XG4gICAgICAgIC8vIElnbm9yZSAnZmFsc2UnIHN0ZXBwaW5nLlxuICAgICAgICBpZiAoIW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBTdGVwIG92ZXIgemVyby1sZW5ndGggcmFuZ2VzICgjOTQ4KTtcbiAgICAgICAgaWYgKHRoaXMueFZhbFtpXSA9PT0gdGhpcy54VmFsW2kgKyAxXSkge1xuICAgICAgICAgICAgdGhpcy54U3RlcHNbaV0gPSB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwW2ldID0gdGhpcy54VmFsW2ldO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZhY3RvciB0byByYW5nZSByYXRpb1xuICAgICAgICB0aGlzLnhTdGVwc1tpXSA9XG4gICAgICAgICAgICBmcm9tUGVyY2VudGFnZShbdGhpcy54VmFsW2ldLCB0aGlzLnhWYWxbaSArIDFdXSwgbiwgMCkgLyBzdWJSYW5nZVJhdGlvKHRoaXMueFBjdFtpXSwgdGhpcy54UGN0W2kgKyAxXSk7XG4gICAgICAgIHZhciB0b3RhbFN0ZXBzID0gKHRoaXMueFZhbFtpICsgMV0gLSB0aGlzLnhWYWxbaV0pIC8gdGhpcy54TnVtU3RlcHNbaV07XG4gICAgICAgIHZhciBoaWdoZXN0U3RlcCA9IE1hdGguY2VpbChOdW1iZXIodG90YWxTdGVwcy50b0ZpeGVkKDMpKSAtIDEpO1xuICAgICAgICB2YXIgc3RlcCA9IHRoaXMueFZhbFtpXSArIHRoaXMueE51bVN0ZXBzW2ldICogaGlnaGVzdFN0ZXA7XG4gICAgICAgIHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaV0gPSBzdGVwO1xuICAgIH07XG4gICAgcmV0dXJuIFNwZWN0cnVtO1xufSgpKTtcbi8vZW5kcmVnaW9uXG4vL3JlZ2lvbiBPcHRpb25zXG4vKlx0RXZlcnkgaW5wdXQgb3B0aW9uIGlzIHRlc3RlZCBhbmQgcGFyc2VkLiBUaGlzIHdpbGwgcHJldmVudFxuICAgIGVuZGxlc3MgdmFsaWRhdGlvbiBpbiBpbnRlcm5hbCBtZXRob2RzLiBUaGVzZSB0ZXN0cyBhcmVcbiAgICBzdHJ1Y3R1cmVkIHdpdGggYW4gaXRlbSBmb3IgZXZlcnkgb3B0aW9uIGF2YWlsYWJsZS4gQW5cbiAgICBvcHRpb24gY2FuIGJlIG1hcmtlZCBhcyByZXF1aXJlZCBieSBzZXR0aW5nIHRoZSAncicgZmxhZy5cbiAgICBUaGUgdGVzdGluZyBmdW5jdGlvbiBpcyBwcm92aWRlZCB3aXRoIHRocmVlIGFyZ3VtZW50czpcbiAgICAgICAgLSBUaGUgcHJvdmlkZWQgdmFsdWUgZm9yIHRoZSBvcHRpb247XG4gICAgICAgIC0gQSByZWZlcmVuY2UgdG8gdGhlIG9wdGlvbnMgb2JqZWN0O1xuICAgICAgICAtIFRoZSBuYW1lIGZvciB0aGUgb3B0aW9uO1xuXG4gICAgVGhlIHRlc3RpbmcgZnVuY3Rpb24gcmV0dXJucyBmYWxzZSB3aGVuIGFuIGVycm9yIGlzIGRldGVjdGVkLFxuICAgIG9yIHRydWUgd2hlbiBldmVyeXRoaW5nIGlzIE9LLiBJdCBjYW4gYWxzbyBtb2RpZnkgdGhlIG9wdGlvblxuICAgIG9iamVjdCwgdG8gbWFrZSBzdXJlIGFsbCB2YWx1ZXMgY2FuIGJlIGNvcnJlY3RseSBsb29wZWQgZWxzZXdoZXJlLiAqL1xuLy9yZWdpb24gRGVmYXVsdHNcbnZhciBkZWZhdWx0Rm9ybWF0dGVyID0ge1xuICAgIHRvOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyBcIlwiIDogdmFsdWUudG9GaXhlZCgyKTtcbiAgICB9LFxuICAgIGZyb206IE51bWJlcixcbn07XG52YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICB0YXJnZXQ6IFwidGFyZ2V0XCIsXG4gICAgYmFzZTogXCJiYXNlXCIsXG4gICAgb3JpZ2luOiBcIm9yaWdpblwiLFxuICAgIGhhbmRsZTogXCJoYW5kbGVcIixcbiAgICBoYW5kbGVMb3dlcjogXCJoYW5kbGUtbG93ZXJcIixcbiAgICBoYW5kbGVVcHBlcjogXCJoYW5kbGUtdXBwZXJcIixcbiAgICB0b3VjaEFyZWE6IFwidG91Y2gtYXJlYVwiLFxuICAgIGhvcml6b250YWw6IFwiaG9yaXpvbnRhbFwiLFxuICAgIHZlcnRpY2FsOiBcInZlcnRpY2FsXCIsXG4gICAgYmFja2dyb3VuZDogXCJiYWNrZ3JvdW5kXCIsXG4gICAgY29ubmVjdDogXCJjb25uZWN0XCIsXG4gICAgY29ubmVjdHM6IFwiY29ubmVjdHNcIixcbiAgICBsdHI6IFwibHRyXCIsXG4gICAgcnRsOiBcInJ0bFwiLFxuICAgIHRleHREaXJlY3Rpb25MdHI6IFwidHh0LWRpci1sdHJcIixcbiAgICB0ZXh0RGlyZWN0aW9uUnRsOiBcInR4dC1kaXItcnRsXCIsXG4gICAgZHJhZ2dhYmxlOiBcImRyYWdnYWJsZVwiLFxuICAgIGRyYWc6IFwic3RhdGUtZHJhZ1wiLFxuICAgIHRhcDogXCJzdGF0ZS10YXBcIixcbiAgICBhY3RpdmU6IFwiYWN0aXZlXCIsXG4gICAgdG9vbHRpcDogXCJ0b29sdGlwXCIsXG4gICAgcGlwczogXCJwaXBzXCIsXG4gICAgcGlwc0hvcml6b250YWw6IFwicGlwcy1ob3Jpem9udGFsXCIsXG4gICAgcGlwc1ZlcnRpY2FsOiBcInBpcHMtdmVydGljYWxcIixcbiAgICBtYXJrZXI6IFwibWFya2VyXCIsXG4gICAgbWFya2VySG9yaXpvbnRhbDogXCJtYXJrZXItaG9yaXpvbnRhbFwiLFxuICAgIG1hcmtlclZlcnRpY2FsOiBcIm1hcmtlci12ZXJ0aWNhbFwiLFxuICAgIG1hcmtlck5vcm1hbDogXCJtYXJrZXItbm9ybWFsXCIsXG4gICAgbWFya2VyTGFyZ2U6IFwibWFya2VyLWxhcmdlXCIsXG4gICAgbWFya2VyU3ViOiBcIm1hcmtlci1zdWJcIixcbiAgICB2YWx1ZTogXCJ2YWx1ZVwiLFxuICAgIHZhbHVlSG9yaXpvbnRhbDogXCJ2YWx1ZS1ob3Jpem9udGFsXCIsXG4gICAgdmFsdWVWZXJ0aWNhbDogXCJ2YWx1ZS12ZXJ0aWNhbFwiLFxuICAgIHZhbHVlTm9ybWFsOiBcInZhbHVlLW5vcm1hbFwiLFxuICAgIHZhbHVlTGFyZ2U6IFwidmFsdWUtbGFyZ2VcIixcbiAgICB2YWx1ZVN1YjogXCJ2YWx1ZS1zdWJcIixcbn07XG4vLyBOYW1lc3BhY2VzIG9mIGludGVybmFsIGV2ZW50IGxpc3RlbmVyc1xudmFyIElOVEVSTkFMX0VWRU5UX05TID0ge1xuICAgIHRvb2x0aXBzOiBcIi5fX3Rvb2x0aXBzXCIsXG4gICAgYXJpYTogXCIuX19hcmlhXCIsXG59O1xuLy9lbmRyZWdpb25cbmZ1bmN0aW9uIHRlc3RTdGVwKHBhcnNlZCwgZW50cnkpIHtcbiAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3N0ZXAnIGlzIG5vdCBudW1lcmljLlwiKTtcbiAgICB9XG4gICAgLy8gVGhlIHN0ZXAgb3B0aW9uIGNhbiBzdGlsbCBiZSB1c2VkIHRvIHNldCBzdGVwcGluZ1xuICAgIC8vIGZvciBsaW5lYXIgc2xpZGVycy4gT3ZlcndyaXR0ZW4gaWYgc2V0IGluICdyYW5nZScuXG4gICAgcGFyc2VkLnNpbmdsZVN0ZXAgPSBlbnRyeTtcbn1cbmZ1bmN0aW9uIHRlc3RLZXlib2FyZFBhZ2VNdWx0aXBsaWVyKHBhcnNlZCwgZW50cnkpIHtcbiAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2tleWJvYXJkUGFnZU11bHRpcGxpZXInIGlzIG5vdCBudW1lcmljLlwiKTtcbiAgICB9XG4gICAgcGFyc2VkLmtleWJvYXJkUGFnZU11bHRpcGxpZXIgPSBlbnRyeTtcbn1cbmZ1bmN0aW9uIHRlc3RLZXlib2FyZE11bHRpcGxpZXIocGFyc2VkLCBlbnRyeSkge1xuICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAna2V5Ym9hcmRNdWx0aXBsaWVyJyBpcyBub3QgbnVtZXJpYy5cIik7XG4gICAgfVxuICAgIHBhcnNlZC5rZXlib2FyZE11bHRpcGxpZXIgPSBlbnRyeTtcbn1cbmZ1bmN0aW9uIHRlc3RLZXlib2FyZERlZmF1bHRTdGVwKHBhcnNlZCwgZW50cnkpIHtcbiAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2tleWJvYXJkRGVmYXVsdFN0ZXAnIGlzIG5vdCBudW1lcmljLlwiKTtcbiAgICB9XG4gICAgcGFyc2VkLmtleWJvYXJkRGVmYXVsdFN0ZXAgPSBlbnRyeTtcbn1cbmZ1bmN0aW9uIHRlc3RSYW5nZShwYXJzZWQsIGVudHJ5KSB7XG4gICAgLy8gRmlsdGVyIGluY29ycmVjdCBpbnB1dC5cbiAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcIm9iamVjdFwiIHx8IEFycmF5LmlzQXJyYXkoZW50cnkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdyYW5nZScgaXMgbm90IGFuIG9iamVjdC5cIik7XG4gICAgfVxuICAgIC8vIENhdGNoIG1pc3Npbmcgc3RhcnQgb3IgZW5kLlxuICAgIGlmIChlbnRyeS5taW4gPT09IHVuZGVmaW5lZCB8fCBlbnRyeS5tYXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBNaXNzaW5nICdtaW4nIG9yICdtYXgnIGluICdyYW5nZScuXCIpO1xuICAgIH1cbiAgICBwYXJzZWQuc3BlY3RydW0gPSBuZXcgU3BlY3RydW0oZW50cnksIHBhcnNlZC5zbmFwIHx8IGZhbHNlLCBwYXJzZWQuc2luZ2xlU3RlcCk7XG59XG5mdW5jdGlvbiB0ZXN0U3RhcnQocGFyc2VkLCBlbnRyeSkge1xuICAgIGVudHJ5ID0gYXNBcnJheShlbnRyeSk7XG4gICAgLy8gVmFsaWRhdGUgaW5wdXQuIFZhbHVlcyBhcmVuJ3QgdGVzdGVkLCBhcyB0aGUgcHVibGljIC52YWwgbWV0aG9kXG4gICAgLy8gd2lsbCBhbHdheXMgcHJvdmlkZSBhIHZhbGlkIGxvY2F0aW9uLlxuICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyeSkgfHwgIWVudHJ5Lmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnc3RhcnQnIG9wdGlvbiBpcyBpbmNvcnJlY3QuXCIpO1xuICAgIH1cbiAgICAvLyBTdG9yZSB0aGUgbnVtYmVyIG9mIGhhbmRsZXMuXG4gICAgcGFyc2VkLmhhbmRsZXMgPSBlbnRyeS5sZW5ndGg7XG4gICAgLy8gV2hlbiB0aGUgc2xpZGVyIGlzIGluaXRpYWxpemVkLCB0aGUgLnZhbCBtZXRob2Qgd2lsbFxuICAgIC8vIGJlIGNhbGxlZCB3aXRoIHRoZSBzdGFydCBvcHRpb25zLlxuICAgIHBhcnNlZC5zdGFydCA9IGVudHJ5O1xufVxuZnVuY3Rpb24gdGVzdFNuYXAocGFyc2VkLCBlbnRyeSkge1xuICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdzbmFwJyBvcHRpb24gbXVzdCBiZSBhIGJvb2xlYW4uXCIpO1xuICAgIH1cbiAgICAvLyBFbmZvcmNlIDEwMCUgc3RlcHBpbmcgd2l0aGluIHN1YnJhbmdlcy5cbiAgICBwYXJzZWQuc25hcCA9IGVudHJ5O1xufVxuZnVuY3Rpb24gdGVzdEFuaW1hdGUocGFyc2VkLCBlbnRyeSkge1xuICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdhbmltYXRlJyBvcHRpb24gbXVzdCBiZSBhIGJvb2xlYW4uXCIpO1xuICAgIH1cbiAgICAvLyBFbmZvcmNlIDEwMCUgc3RlcHBpbmcgd2l0aGluIHN1YnJhbmdlcy5cbiAgICBwYXJzZWQuYW5pbWF0ZSA9IGVudHJ5O1xufVxuZnVuY3Rpb24gdGVzdEFuaW1hdGlvbkR1cmF0aW9uKHBhcnNlZCwgZW50cnkpIHtcbiAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdhbmltYXRpb25EdXJhdGlvbicgb3B0aW9uIG11c3QgYmUgYSBudW1iZXIuXCIpO1xuICAgIH1cbiAgICBwYXJzZWQuYW5pbWF0aW9uRHVyYXRpb24gPSBlbnRyeTtcbn1cbmZ1bmN0aW9uIHRlc3RDb25uZWN0KHBhcnNlZCwgZW50cnkpIHtcbiAgICB2YXIgY29ubmVjdCA9IFtmYWxzZV07XG4gICAgdmFyIGk7XG4gICAgLy8gTWFwIGxlZ2FjeSBvcHRpb25zXG4gICAgaWYgKGVudHJ5ID09PSBcImxvd2VyXCIpIHtcbiAgICAgICAgZW50cnkgPSBbdHJ1ZSwgZmFsc2VdO1xuICAgIH1cbiAgICBlbHNlIGlmIChlbnRyeSA9PT0gXCJ1cHBlclwiKSB7XG4gICAgICAgIGVudHJ5ID0gW2ZhbHNlLCB0cnVlXTtcbiAgICB9XG4gICAgLy8gSGFuZGxlIGJvb2xlYW4gb3B0aW9uc1xuICAgIGlmIChlbnRyeSA9PT0gdHJ1ZSB8fCBlbnRyeSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IHBhcnNlZC5oYW5kbGVzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbm5lY3QucHVzaChlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgICAgY29ubmVjdC5wdXNoKGZhbHNlKTtcbiAgICB9XG4gICAgLy8gUmVqZWN0IGludmFsaWQgaW5wdXRcbiAgICBlbHNlIGlmICghQXJyYXkuaXNBcnJheShlbnRyeSkgfHwgIWVudHJ5Lmxlbmd0aCB8fCBlbnRyeS5sZW5ndGggIT09IHBhcnNlZC5oYW5kbGVzICsgMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnY29ubmVjdCcgb3B0aW9uIGRvZXNuJ3QgbWF0Y2ggaGFuZGxlIGNvdW50LlwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbm5lY3QgPSBlbnRyeTtcbiAgICB9XG4gICAgcGFyc2VkLmNvbm5lY3QgPSBjb25uZWN0O1xufVxuZnVuY3Rpb24gdGVzdE9yaWVudGF0aW9uKHBhcnNlZCwgZW50cnkpIHtcbiAgICAvLyBTZXQgb3JpZW50YXRpb24gdG8gYW4gYSBudW1lcmljYWwgdmFsdWUgZm9yIGVhc3lcbiAgICAvLyBhcnJheSBzZWxlY3Rpb24uXG4gICAgc3dpdGNoIChlbnRyeSkge1xuICAgICAgICBjYXNlIFwiaG9yaXpvbnRhbFwiOlxuICAgICAgICAgICAgcGFyc2VkLm9ydCA9IDA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInZlcnRpY2FsXCI6XG4gICAgICAgICAgICBwYXJzZWQub3J0ID0gMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ29yaWVudGF0aW9uJyBvcHRpb24gaXMgaW52YWxpZC5cIik7XG4gICAgfVxufVxuZnVuY3Rpb24gdGVzdE1hcmdpbihwYXJzZWQsIGVudHJ5KSB7XG4gICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdtYXJnaW4nIG9wdGlvbiBtdXN0IGJlIG51bWVyaWMuXCIpO1xuICAgIH1cbiAgICAvLyBJc3N1ZSAjNTgyXG4gICAgaWYgKGVudHJ5ID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcGFyc2VkLm1hcmdpbiA9IHBhcnNlZC5zcGVjdHJ1bS5nZXREaXN0YW5jZShlbnRyeSk7XG59XG5mdW5jdGlvbiB0ZXN0TGltaXQocGFyc2VkLCBlbnRyeSkge1xuICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnbGltaXQnIG9wdGlvbiBtdXN0IGJlIG51bWVyaWMuXCIpO1xuICAgIH1cbiAgICBwYXJzZWQubGltaXQgPSBwYXJzZWQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZW50cnkpO1xuICAgIGlmICghcGFyc2VkLmxpbWl0IHx8IHBhcnNlZC5oYW5kbGVzIDwgMikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnbGltaXQnIG9wdGlvbiBpcyBvbmx5IHN1cHBvcnRlZCBvbiBsaW5lYXIgc2xpZGVycyB3aXRoIDIgb3IgbW9yZSBoYW5kbGVzLlwiKTtcbiAgICB9XG59XG5mdW5jdGlvbiB0ZXN0UGFkZGluZyhwYXJzZWQsIGVudHJ5KSB7XG4gICAgdmFyIGluZGV4O1xuICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSAmJiAhQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3BhZGRpbmcnIG9wdGlvbiBtdXN0IGJlIG51bWVyaWMgb3IgYXJyYXkgb2YgZXhhY3RseSAyIG51bWJlcnMuXCIpO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShlbnRyeSkgJiYgIShlbnRyeS5sZW5ndGggPT09IDIgfHwgaXNOdW1lcmljKGVudHJ5WzBdKSB8fCBpc051bWVyaWMoZW50cnlbMV0pKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncGFkZGluZycgb3B0aW9uIG11c3QgYmUgbnVtZXJpYyBvciBhcnJheSBvZiBleGFjdGx5IDIgbnVtYmVycy5cIik7XG4gICAgfVxuICAgIGlmIChlbnRyeSA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcbiAgICAgICAgZW50cnkgPSBbZW50cnksIGVudHJ5XTtcbiAgICB9XG4gICAgLy8gJ2dldERpc3RhbmNlJyByZXR1cm5zIGZhbHNlIGZvciBpbnZhbGlkIHZhbHVlcy5cbiAgICBwYXJzZWQucGFkZGluZyA9IFtwYXJzZWQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZW50cnlbMF0pLCBwYXJzZWQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZW50cnlbMV0pXTtcbiAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBwYXJzZWQuc3BlY3RydW0ueE51bVN0ZXBzLmxlbmd0aCAtIDE7IGluZGV4KyspIHtcbiAgICAgICAgLy8gbGFzdCBcInJhbmdlXCIgY2FuJ3QgY29udGFpbiBzdGVwIHNpemUgYXMgaXQgaXMgcHVyZWx5IGFuIGVuZHBvaW50LlxuICAgICAgICBpZiAocGFyc2VkLnBhZGRpbmdbMF1baW5kZXhdIDwgMCB8fCBwYXJzZWQucGFkZGluZ1sxXVtpbmRleF0gPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncGFkZGluZycgb3B0aW9uIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXIocykuXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciB0b3RhbFBhZGRpbmcgPSBlbnRyeVswXSArIGVudHJ5WzFdO1xuICAgIHZhciBmaXJzdFZhbHVlID0gcGFyc2VkLnNwZWN0cnVtLnhWYWxbMF07XG4gICAgdmFyIGxhc3RWYWx1ZSA9IHBhcnNlZC5zcGVjdHJ1bS54VmFsW3BhcnNlZC5zcGVjdHJ1bS54VmFsLmxlbmd0aCAtIDFdO1xuICAgIGlmICh0b3RhbFBhZGRpbmcgLyAobGFzdFZhbHVlIC0gZmlyc3RWYWx1ZSkgPiAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdwYWRkaW5nJyBvcHRpb24gbXVzdCBub3QgZXhjZWVkIDEwMCUgb2YgdGhlIHJhbmdlLlwiKTtcbiAgICB9XG59XG5mdW5jdGlvbiB0ZXN0RGlyZWN0aW9uKHBhcnNlZCwgZW50cnkpIHtcbiAgICAvLyBTZXQgZGlyZWN0aW9uIGFzIGEgbnVtZXJpY2FsIHZhbHVlIGZvciBlYXN5IHBhcnNpbmcuXG4gICAgLy8gSW52ZXJ0IGNvbm5lY3Rpb24gZm9yIFJUTCBzbGlkZXJzLCBzbyB0aGF0IHRoZSBwcm9wZXJcbiAgICAvLyBoYW5kbGVzIGdldCB0aGUgY29ubmVjdC9iYWNrZ3JvdW5kIGNsYXNzZXMuXG4gICAgc3dpdGNoIChlbnRyeSkge1xuICAgICAgICBjYXNlIFwibHRyXCI6XG4gICAgICAgICAgICBwYXJzZWQuZGlyID0gMDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwicnRsXCI6XG4gICAgICAgICAgICBwYXJzZWQuZGlyID0gMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2RpcmVjdGlvbicgb3B0aW9uIHdhcyBub3QgcmVjb2duaXplZC5cIik7XG4gICAgfVxufVxuZnVuY3Rpb24gdGVzdEJlaGF2aW91cihwYXJzZWQsIGVudHJ5KSB7XG4gICAgLy8gTWFrZSBzdXJlIHRoZSBpbnB1dCBpcyBhIHN0cmluZy5cbiAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdiZWhhdmlvdXInIG11c3QgYmUgYSBzdHJpbmcgY29udGFpbmluZyBvcHRpb25zLlwiKTtcbiAgICB9XG4gICAgLy8gQ2hlY2sgaWYgdGhlIHN0cmluZyBjb250YWlucyBhbnkga2V5d29yZHMuXG4gICAgLy8gTm9uZSBhcmUgcmVxdWlyZWQuXG4gICAgdmFyIHRhcCA9IGVudHJ5LmluZGV4T2YoXCJ0YXBcIikgPj0gMDtcbiAgICB2YXIgZHJhZyA9IGVudHJ5LmluZGV4T2YoXCJkcmFnXCIpID49IDA7XG4gICAgdmFyIGZpeGVkID0gZW50cnkuaW5kZXhPZihcImZpeGVkXCIpID49IDA7XG4gICAgdmFyIHNuYXAgPSBlbnRyeS5pbmRleE9mKFwic25hcFwiKSA+PSAwO1xuICAgIHZhciBob3ZlciA9IGVudHJ5LmluZGV4T2YoXCJob3ZlclwiKSA+PSAwO1xuICAgIHZhciB1bmNvbnN0cmFpbmVkID0gZW50cnkuaW5kZXhPZihcInVuY29uc3RyYWluZWRcIikgPj0gMDtcbiAgICB2YXIgaW52ZXJ0Q29ubmVjdHMgPSBlbnRyeS5pbmRleE9mKFwiaW52ZXJ0LWNvbm5lY3RzXCIpID49IDA7XG4gICAgdmFyIGRyYWdBbGwgPSBlbnRyeS5pbmRleE9mKFwiZHJhZy1hbGxcIikgPj0gMDtcbiAgICB2YXIgc21vb3RoU3RlcHMgPSBlbnRyeS5pbmRleE9mKFwic21vb3RoLXN0ZXBzXCIpID49IDA7XG4gICAgaWYgKGZpeGVkKSB7XG4gICAgICAgIGlmIChwYXJzZWQuaGFuZGxlcyAhPT0gMikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2ZpeGVkJyBiZWhhdmlvdXIgbXVzdCBiZSB1c2VkIHdpdGggMiBoYW5kbGVzXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVzZSBtYXJnaW4gdG8gZW5mb3JjZSBmaXhlZCBzdGF0ZVxuICAgICAgICB0ZXN0TWFyZ2luKHBhcnNlZCwgcGFyc2VkLnN0YXJ0WzFdIC0gcGFyc2VkLnN0YXJ0WzBdKTtcbiAgICB9XG4gICAgaWYgKGludmVydENvbm5lY3RzICYmIHBhcnNlZC5oYW5kbGVzICE9PSAyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdpbnZlcnQtY29ubmVjdHMnIGJlaGF2aW91ciBtdXN0IGJlIHVzZWQgd2l0aCAyIGhhbmRsZXNcIik7XG4gICAgfVxuICAgIGlmICh1bmNvbnN0cmFpbmVkICYmIChwYXJzZWQubWFyZ2luIHx8IHBhcnNlZC5saW1pdCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3VuY29uc3RyYWluZWQnIGJlaGF2aW91ciBjYW5ub3QgYmUgdXNlZCB3aXRoIG1hcmdpbiBvciBsaW1pdFwiKTtcbiAgICB9XG4gICAgcGFyc2VkLmV2ZW50cyA9IHtcbiAgICAgICAgdGFwOiB0YXAgfHwgc25hcCxcbiAgICAgICAgZHJhZzogZHJhZyxcbiAgICAgICAgZHJhZ0FsbDogZHJhZ0FsbCxcbiAgICAgICAgc21vb3RoU3RlcHM6IHNtb290aFN0ZXBzLFxuICAgICAgICBmaXhlZDogZml4ZWQsXG4gICAgICAgIHNuYXA6IHNuYXAsXG4gICAgICAgIGhvdmVyOiBob3ZlcixcbiAgICAgICAgdW5jb25zdHJhaW5lZDogdW5jb25zdHJhaW5lZCxcbiAgICAgICAgaW52ZXJ0Q29ubmVjdHM6IGludmVydENvbm5lY3RzLFxuICAgIH07XG59XG5mdW5jdGlvbiB0ZXN0VG9vbHRpcHMocGFyc2VkLCBlbnRyeSkge1xuICAgIGlmIChlbnRyeSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZW50cnkgPT09IHRydWUgfHwgaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZW50cnkpKSB7XG4gICAgICAgIHBhcnNlZC50b29sdGlwcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnNlZC5oYW5kbGVzOyBpKyspIHtcbiAgICAgICAgICAgIHBhcnNlZC50b29sdGlwcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZW50cnkgPSBhc0FycmF5KGVudHJ5KTtcbiAgICAgICAgaWYgKGVudHJ5Lmxlbmd0aCAhPT0gcGFyc2VkLmhhbmRsZXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IG11c3QgcGFzcyBhIGZvcm1hdHRlciBmb3IgYWxsIGhhbmRsZXMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVudHJ5LmZvckVhY2goZnVuY3Rpb24gKGZvcm1hdHRlcikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBmb3JtYXR0ZXIgIT09IFwiYm9vbGVhblwiICYmICFpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihmb3JtYXR0ZXIpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3Rvb2x0aXBzJyBtdXN0IGJlIHBhc3NlZCBhIGZvcm1hdHRlciBvciAnZmFsc2UnLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHBhcnNlZC50b29sdGlwcyA9IGVudHJ5O1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRlc3RIYW5kbGVBdHRyaWJ1dGVzKHBhcnNlZCwgZW50cnkpIHtcbiAgICBpZiAoZW50cnkubGVuZ3RoICE9PSBwYXJzZWQuaGFuZGxlcykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBtdXN0IHBhc3MgYSBhdHRyaWJ1dGVzIGZvciBhbGwgaGFuZGxlcy5cIik7XG4gICAgfVxuICAgIHBhcnNlZC5oYW5kbGVBdHRyaWJ1dGVzID0gZW50cnk7XG59XG5mdW5jdGlvbiB0ZXN0QXJpYUZvcm1hdChwYXJzZWQsIGVudHJ5KSB7XG4gICAgaWYgKCFpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihlbnRyeSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2FyaWFGb3JtYXQnIHJlcXVpcmVzICd0bycgbWV0aG9kLlwiKTtcbiAgICB9XG4gICAgcGFyc2VkLmFyaWFGb3JtYXQgPSBlbnRyeTtcbn1cbmZ1bmN0aW9uIHRlc3RGb3JtYXQocGFyc2VkLCBlbnRyeSkge1xuICAgIGlmICghaXNWYWxpZEZvcm1hdHRlcihlbnRyeSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2Zvcm1hdCcgcmVxdWlyZXMgJ3RvJyBhbmQgJ2Zyb20nIG1ldGhvZHMuXCIpO1xuICAgIH1cbiAgICBwYXJzZWQuZm9ybWF0ID0gZW50cnk7XG59XG5mdW5jdGlvbiB0ZXN0S2V5Ym9hcmRTdXBwb3J0KHBhcnNlZCwgZW50cnkpIHtcbiAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAna2V5Ym9hcmRTdXBwb3J0JyBvcHRpb24gbXVzdCBiZSBhIGJvb2xlYW4uXCIpO1xuICAgIH1cbiAgICBwYXJzZWQua2V5Ym9hcmRTdXBwb3J0ID0gZW50cnk7XG59XG5mdW5jdGlvbiB0ZXN0RG9jdW1lbnRFbGVtZW50KHBhcnNlZCwgZW50cnkpIHtcbiAgICAvLyBUaGlzIGlzIGFuIGFkdmFuY2VkIG9wdGlvbi4gUGFzc2VkIHZhbHVlcyBhcmUgdXNlZCB3aXRob3V0IHZhbGlkYXRpb24uXG4gICAgcGFyc2VkLmRvY3VtZW50RWxlbWVudCA9IGVudHJ5O1xufVxuZnVuY3Rpb24gdGVzdENzc1ByZWZpeChwYXJzZWQsIGVudHJ5KSB7XG4gICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJzdHJpbmdcIiAmJiBlbnRyeSAhPT0gZmFsc2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2Nzc1ByZWZpeCcgbXVzdCBiZSBhIHN0cmluZyBvciBgZmFsc2VgLlwiKTtcbiAgICB9XG4gICAgcGFyc2VkLmNzc1ByZWZpeCA9IGVudHJ5O1xufVxuZnVuY3Rpb24gdGVzdENzc0NsYXNzZXMocGFyc2VkLCBlbnRyeSkge1xuICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2Nzc0NsYXNzZXMnIG11c3QgYmUgYW4gb2JqZWN0LlwiKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBwYXJzZWQuY3NzUHJlZml4ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHBhcnNlZC5jc3NDbGFzc2VzID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGVudHJ5KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHBhcnNlZC5jc3NDbGFzc2VzW2tleV0gPSBwYXJzZWQuY3NzUHJlZml4ICsgZW50cnlba2V5XTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwYXJzZWQuY3NzQ2xhc3NlcyA9IGVudHJ5O1xuICAgIH1cbn1cbi8vIFRlc3QgYWxsIGRldmVsb3BlciBzZXR0aW5ncyBhbmQgcGFyc2UgdG8gYXNzdW1wdGlvbi1zYWZlIHZhbHVlcy5cbmZ1bmN0aW9uIHRlc3RPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAvLyBUbyBwcm92ZSBhIGZpeCBmb3IgIzUzNywgZnJlZXplIG9wdGlvbnMgaGVyZS5cbiAgICAvLyBJZiB0aGUgb2JqZWN0IGlzIG1vZGlmaWVkLCBhbiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAgICAvLyBPYmplY3QuZnJlZXplKG9wdGlvbnMpO1xuICAgIHZhciBwYXJzZWQgPSB7XG4gICAgICAgIG1hcmdpbjogbnVsbCxcbiAgICAgICAgbGltaXQ6IG51bGwsXG4gICAgICAgIHBhZGRpbmc6IG51bGwsXG4gICAgICAgIGFuaW1hdGU6IHRydWUsXG4gICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAzMDAsXG4gICAgICAgIGFyaWFGb3JtYXQ6IGRlZmF1bHRGb3JtYXR0ZXIsXG4gICAgICAgIGZvcm1hdDogZGVmYXVsdEZvcm1hdHRlcixcbiAgICB9O1xuICAgIC8vIFRlc3RzIGFyZSBleGVjdXRlZCBpbiB0aGUgb3JkZXIgdGhleSBhcmUgcHJlc2VudGVkIGhlcmUuXG4gICAgdmFyIHRlc3RzID0ge1xuICAgICAgICBzdGVwOiB7IHI6IGZhbHNlLCB0OiB0ZXN0U3RlcCB9LFxuICAgICAgICBrZXlib2FyZFBhZ2VNdWx0aXBsaWVyOiB7IHI6IGZhbHNlLCB0OiB0ZXN0S2V5Ym9hcmRQYWdlTXVsdGlwbGllciB9LFxuICAgICAgICBrZXlib2FyZE11bHRpcGxpZXI6IHsgcjogZmFsc2UsIHQ6IHRlc3RLZXlib2FyZE11bHRpcGxpZXIgfSxcbiAgICAgICAga2V5Ym9hcmREZWZhdWx0U3RlcDogeyByOiBmYWxzZSwgdDogdGVzdEtleWJvYXJkRGVmYXVsdFN0ZXAgfSxcbiAgICAgICAgc3RhcnQ6IHsgcjogdHJ1ZSwgdDogdGVzdFN0YXJ0IH0sXG4gICAgICAgIGNvbm5lY3Q6IHsgcjogdHJ1ZSwgdDogdGVzdENvbm5lY3QgfSxcbiAgICAgICAgZGlyZWN0aW9uOiB7IHI6IHRydWUsIHQ6IHRlc3REaXJlY3Rpb24gfSxcbiAgICAgICAgc25hcDogeyByOiBmYWxzZSwgdDogdGVzdFNuYXAgfSxcbiAgICAgICAgYW5pbWF0ZTogeyByOiBmYWxzZSwgdDogdGVzdEFuaW1hdGUgfSxcbiAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246IHsgcjogZmFsc2UsIHQ6IHRlc3RBbmltYXRpb25EdXJhdGlvbiB9LFxuICAgICAgICByYW5nZTogeyByOiB0cnVlLCB0OiB0ZXN0UmFuZ2UgfSxcbiAgICAgICAgb3JpZW50YXRpb246IHsgcjogZmFsc2UsIHQ6IHRlc3RPcmllbnRhdGlvbiB9LFxuICAgICAgICBtYXJnaW46IHsgcjogZmFsc2UsIHQ6IHRlc3RNYXJnaW4gfSxcbiAgICAgICAgbGltaXQ6IHsgcjogZmFsc2UsIHQ6IHRlc3RMaW1pdCB9LFxuICAgICAgICBwYWRkaW5nOiB7IHI6IGZhbHNlLCB0OiB0ZXN0UGFkZGluZyB9LFxuICAgICAgICBiZWhhdmlvdXI6IHsgcjogdHJ1ZSwgdDogdGVzdEJlaGF2aW91ciB9LFxuICAgICAgICBhcmlhRm9ybWF0OiB7IHI6IGZhbHNlLCB0OiB0ZXN0QXJpYUZvcm1hdCB9LFxuICAgICAgICBmb3JtYXQ6IHsgcjogZmFsc2UsIHQ6IHRlc3RGb3JtYXQgfSxcbiAgICAgICAgdG9vbHRpcHM6IHsgcjogZmFsc2UsIHQ6IHRlc3RUb29sdGlwcyB9LFxuICAgICAgICBrZXlib2FyZFN1cHBvcnQ6IHsgcjogdHJ1ZSwgdDogdGVzdEtleWJvYXJkU3VwcG9ydCB9LFxuICAgICAgICBkb2N1bWVudEVsZW1lbnQ6IHsgcjogZmFsc2UsIHQ6IHRlc3REb2N1bWVudEVsZW1lbnQgfSxcbiAgICAgICAgY3NzUHJlZml4OiB7IHI6IHRydWUsIHQ6IHRlc3RDc3NQcmVmaXggfSxcbiAgICAgICAgY3NzQ2xhc3NlczogeyByOiB0cnVlLCB0OiB0ZXN0Q3NzQ2xhc3NlcyB9LFxuICAgICAgICBoYW5kbGVBdHRyaWJ1dGVzOiB7IHI6IGZhbHNlLCB0OiB0ZXN0SGFuZGxlQXR0cmlidXRlcyB9LFxuICAgIH07XG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICBjb25uZWN0OiBmYWxzZSxcbiAgICAgICAgZGlyZWN0aW9uOiBcImx0clwiLFxuICAgICAgICBiZWhhdmlvdXI6IFwidGFwXCIsXG4gICAgICAgIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICAgICAga2V5Ym9hcmRTdXBwb3J0OiB0cnVlLFxuICAgICAgICBjc3NQcmVmaXg6IFwibm9VaS1cIixcbiAgICAgICAgY3NzQ2xhc3NlczogY3NzQ2xhc3NlcyxcbiAgICAgICAga2V5Ym9hcmRQYWdlTXVsdGlwbGllcjogNSxcbiAgICAgICAga2V5Ym9hcmRNdWx0aXBsaWVyOiAxLFxuICAgICAgICBrZXlib2FyZERlZmF1bHRTdGVwOiAxMCxcbiAgICB9O1xuICAgIC8vIEFyaWFGb3JtYXQgZGVmYXVsdHMgdG8gcmVndWxhciBmb3JtYXQsIGlmIGFueS5cbiAgICBpZiAob3B0aW9ucy5mb3JtYXQgJiYgIW9wdGlvbnMuYXJpYUZvcm1hdCkge1xuICAgICAgICBvcHRpb25zLmFyaWFGb3JtYXQgPSBvcHRpb25zLmZvcm1hdDtcbiAgICB9XG4gICAgLy8gUnVuIGFsbCBvcHRpb25zIHRocm91Z2ggYSB0ZXN0aW5nIG1lY2hhbmlzbSB0byBlbnN1cmUgY29ycmVjdFxuICAgIC8vIGlucHV0LiBJdCBzaG91bGQgYmUgbm90ZWQgdGhhdCBvcHRpb25zIG1pZ2h0IGdldCBtb2RpZmllZCB0b1xuICAgIC8vIGJlIGhhbmRsZWQgcHJvcGVybHkuIEUuZy4gd3JhcHBpbmcgaW50ZWdlcnMgaW4gYXJyYXlzLlxuICAgIE9iamVjdC5rZXlzKHRlc3RzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIC8vIElmIHRoZSBvcHRpb24gaXNuJ3Qgc2V0LCBidXQgaXQgaXMgcmVxdWlyZWQsIHRocm93IGFuIGVycm9yLlxuICAgICAgICBpZiAoIWlzU2V0KG9wdGlvbnNbbmFtZV0pICYmIGRlZmF1bHRzW25hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICh0ZXN0c1tuYW1lXS5yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ1wiICsgbmFtZSArIFwiJyBpcyByZXF1aXJlZC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGVzdHNbbmFtZV0udChwYXJzZWQsICFpc1NldChvcHRpb25zW25hbWVdKSA/IGRlZmF1bHRzW25hbWVdIDogb3B0aW9uc1tuYW1lXSk7XG4gICAgfSk7XG4gICAgLy8gRm9yd2FyZCBwaXBzIG9wdGlvbnNcbiAgICBwYXJzZWQucGlwcyA9IG9wdGlvbnMucGlwcztcbiAgICAvLyBBbGwgcmVjZW50IGJyb3dzZXJzIGFjY2VwdCB1bnByZWZpeGVkIHRyYW5zZm9ybS5cbiAgICAvLyBXZSBuZWVkIC1tcy0gZm9yIElFOSBhbmQgLXdlYmtpdC0gZm9yIG9sZGVyIEFuZHJvaWQ7XG4gICAgLy8gQXNzdW1lIHVzZSBvZiAtd2Via2l0LSBpZiB1bnByZWZpeGVkIGFuZCAtbXMtIGFyZSBub3Qgc3VwcG9ydGVkLlxuICAgIC8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI2ZlYXQ9dHJhbnNmb3JtczJkXG4gICAgdmFyIGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHZhciBtc1ByZWZpeCA9IGQuc3R5bGUubXNUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgbm9QcmVmaXggPSBkLnN0eWxlLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkO1xuICAgIHBhcnNlZC50cmFuc2Zvcm1SdWxlID0gbm9QcmVmaXggPyBcInRyYW5zZm9ybVwiIDogbXNQcmVmaXggPyBcIm1zVHJhbnNmb3JtXCIgOiBcIndlYmtpdFRyYW5zZm9ybVwiO1xuICAgIC8vIFBpcHMgZG9uJ3QgbW92ZSwgc28gd2UgY2FuIHBsYWNlIHRoZW0gdXNpbmcgbGVmdC90b3AuXG4gICAgdmFyIHN0eWxlcyA9IFtcbiAgICAgICAgW1wibGVmdFwiLCBcInRvcFwiXSxcbiAgICAgICAgW1wicmlnaHRcIiwgXCJib3R0b21cIl0sXG4gICAgXTtcbiAgICBwYXJzZWQuc3R5bGUgPSBzdHlsZXNbcGFyc2VkLmRpcl1bcGFyc2VkLm9ydF07XG4gICAgcmV0dXJuIHBhcnNlZDtcbn1cbi8vZW5kcmVnaW9uXG5mdW5jdGlvbiBzY29wZSh0YXJnZXQsIG9wdGlvbnMsIG9yaWdpbmFsT3B0aW9ucykge1xuICAgIHZhciBhY3Rpb25zID0gZ2V0QWN0aW9ucygpO1xuICAgIHZhciBzdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSA9IGdldFN1cHBvcnRzVG91Y2hBY3Rpb25Ob25lKCk7XG4gICAgdmFyIHN1cHBvcnRzUGFzc2l2ZSA9IHN1cHBvcnRzVG91Y2hBY3Rpb25Ob25lICYmIGdldFN1cHBvcnRzUGFzc2l2ZSgpO1xuICAgIC8vIEFsbCB2YXJpYWJsZXMgbG9jYWwgdG8gJ3Njb3BlJyBhcmUgcHJlZml4ZWQgd2l0aCAnc2NvcGVfJ1xuICAgIC8vIFNsaWRlciBET00gTm9kZXNcbiAgICB2YXIgc2NvcGVfVGFyZ2V0ID0gdGFyZ2V0O1xuICAgIHZhciBzY29wZV9CYXNlO1xuICAgIHZhciBzY29wZV9Db25uZWN0QmFzZTtcbiAgICB2YXIgc2NvcGVfSGFuZGxlcztcbiAgICB2YXIgc2NvcGVfQ29ubmVjdHM7XG4gICAgdmFyIHNjb3BlX1BpcHM7XG4gICAgdmFyIHNjb3BlX1Rvb2x0aXBzO1xuICAgIC8vIFNsaWRlciBzdGF0ZSB2YWx1ZXNcbiAgICB2YXIgc2NvcGVfU3BlY3RydW0gPSBvcHRpb25zLnNwZWN0cnVtO1xuICAgIHZhciBzY29wZV9WYWx1ZXMgPSBbXTtcbiAgICB2YXIgc2NvcGVfTG9jYXRpb25zID0gW107XG4gICAgdmFyIHNjb3BlX0hhbmRsZU51bWJlcnMgPSBbXTtcbiAgICB2YXIgc2NvcGVfQWN0aXZlSGFuZGxlc0NvdW50ID0gMDtcbiAgICB2YXIgc2NvcGVfRXZlbnRzID0ge307XG4gICAgdmFyIHNjb3BlX0Nvbm5lY3RzSW52ZXJ0ZWQgPSBmYWxzZTtcbiAgICAvLyBEb2N1bWVudCBOb2Rlc1xuICAgIHZhciBzY29wZV9Eb2N1bWVudCA9IHRhcmdldC5vd25lckRvY3VtZW50O1xuICAgIHZhciBzY29wZV9Eb2N1bWVudEVsZW1lbnQgPSBvcHRpb25zLmRvY3VtZW50RWxlbWVudCB8fCBzY29wZV9Eb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgdmFyIHNjb3BlX0JvZHkgPSBzY29wZV9Eb2N1bWVudC5ib2R5O1xuICAgIC8vIEZvciBob3Jpem9udGFsIHNsaWRlcnMgaW4gc3RhbmRhcmQgbHRyIGRvY3VtZW50cyxcbiAgICAvLyBtYWtlIC5ub1VpLW9yaWdpbiBvdmVyZmxvdyB0byB0aGUgbGVmdCBzbyB0aGUgZG9jdW1lbnQgZG9lc24ndCBzY3JvbGwuXG4gICAgdmFyIHNjb3BlX0Rpck9mZnNldCA9IHNjb3BlX0RvY3VtZW50LmRpciA9PT0gXCJydGxcIiB8fCBvcHRpb25zLm9ydCA9PT0gMSA/IDAgOiAxMDA7XG4gICAgLy8gQ3JlYXRlcyBhIG5vZGUsIGFkZHMgaXQgdG8gdGFyZ2V0LCByZXR1cm5zIHRoZSBuZXcgbm9kZS5cbiAgICBmdW5jdGlvbiBhZGROb2RlVG8oYWRkVGFyZ2V0LCBjbGFzc05hbWUpIHtcbiAgICAgICAgdmFyIGRpdiA9IHNjb3BlX0RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGFkZENsYXNzKGRpdiwgY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBhZGRUYXJnZXQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG4gICAgLy8gQXBwZW5kIGEgb3JpZ2luIHRvIHRoZSBiYXNlXG4gICAgZnVuY3Rpb24gYWRkT3JpZ2luKGJhc2UsIGhhbmRsZU51bWJlcikge1xuICAgICAgICB2YXIgb3JpZ2luID0gYWRkTm9kZVRvKGJhc2UsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5vcmlnaW4pO1xuICAgICAgICB2YXIgaGFuZGxlID0gYWRkTm9kZVRvKG9yaWdpbiwgb3B0aW9ucy5jc3NDbGFzc2VzLmhhbmRsZSk7XG4gICAgICAgIGFkZE5vZGVUbyhoYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50b3VjaEFyZWEpO1xuICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKFwiZGF0YS1oYW5kbGVcIiwgU3RyaW5nKGhhbmRsZU51bWJlcikpO1xuICAgICAgICBpZiAob3B0aW9ucy5rZXlib2FyZFN1cHBvcnQpIHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvR2xvYmFsX2F0dHJpYnV0ZXMvdGFiaW5kZXhcbiAgICAgICAgICAgIC8vIDAgPSBmb2N1c2FibGUgYW5kIHJlYWNoYWJsZVxuICAgICAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgICAgICAgICAgIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRLZXlkb3duKGV2ZW50LCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuaGFuZGxlQXR0cmlidXRlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgYXR0cmlidXRlc18xID0gb3B0aW9ucy5oYW5kbGVBdHRyaWJ1dGVzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzXzEpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhdHRyaWJ1dGVzXzFbYXR0cmlidXRlXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcInNsaWRlclwiKTtcbiAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcImFyaWEtb3JpZW50YXRpb25cIiwgb3B0aW9ucy5vcnQgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIik7XG4gICAgICAgIGlmIChoYW5kbGVOdW1iZXIgPT09IDApIHtcbiAgICAgICAgICAgIGFkZENsYXNzKGhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmhhbmRsZUxvd2VyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChoYW5kbGVOdW1iZXIgPT09IG9wdGlvbnMuaGFuZGxlcyAtIDEpIHtcbiAgICAgICAgICAgIGFkZENsYXNzKGhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmhhbmRsZVVwcGVyKTtcbiAgICAgICAgfVxuICAgICAgICBvcmlnaW4uaGFuZGxlID0gaGFuZGxlO1xuICAgICAgICByZXR1cm4gb3JpZ2luO1xuICAgIH1cbiAgICAvLyBJbnNlcnQgbm9kZXMgZm9yIGNvbm5lY3QgZWxlbWVudHNcbiAgICBmdW5jdGlvbiBhZGRDb25uZWN0KGJhc2UsIGFkZCkge1xuICAgICAgICBpZiAoIWFkZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhZGROb2RlVG8oYmFzZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmNvbm5lY3QpO1xuICAgIH1cbiAgICAvLyBBZGQgaGFuZGxlcyB0byB0aGUgc2xpZGVyIGJhc2UuXG4gICAgZnVuY3Rpb24gYWRkRWxlbWVudHMoY29ubmVjdE9wdGlvbnMsIGJhc2UpIHtcbiAgICAgICAgc2NvcGVfQ29ubmVjdEJhc2UgPSBhZGROb2RlVG8oYmFzZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmNvbm5lY3RzKTtcbiAgICAgICAgc2NvcGVfSGFuZGxlcyA9IFtdO1xuICAgICAgICBzY29wZV9Db25uZWN0cyA9IFtdO1xuICAgICAgICBzY29wZV9Db25uZWN0cy5wdXNoKGFkZENvbm5lY3Qoc2NvcGVfQ29ubmVjdEJhc2UsIGNvbm5lY3RPcHRpb25zWzBdKSk7XG4gICAgICAgIC8vIFs6Ojo6Tz09PT1PPT09PU89PT09XVxuICAgICAgICAvLyBjb25uZWN0T3B0aW9ucyA9IFswLCAxLCAxLCAxXVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMuaGFuZGxlczsgaSsrKSB7XG4gICAgICAgICAgICAvLyBLZWVwIGEgbGlzdCBvZiBhbGwgYWRkZWQgaGFuZGxlcy5cbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMucHVzaChhZGRPcmlnaW4oYmFzZSwgaSkpO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVyc1tpXSA9IGk7XG4gICAgICAgICAgICBzY29wZV9Db25uZWN0cy5wdXNoKGFkZENvbm5lY3Qoc2NvcGVfQ29ubmVjdEJhc2UsIGNvbm5lY3RPcHRpb25zW2kgKyAxXSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEluaXRpYWxpemUgYSBzaW5nbGUgc2xpZGVyLlxuICAgIGZ1bmN0aW9uIGFkZFNsaWRlcihhZGRUYXJnZXQpIHtcbiAgICAgICAgLy8gQXBwbHkgY2xhc3NlcyBhbmQgZGF0YSB0byB0aGUgdGFyZ2V0LlxuICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50YXJnZXQpO1xuICAgICAgICBpZiAob3B0aW9ucy5kaXIgPT09IDApIHtcbiAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmx0cik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5ydGwpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLm9ydCA9PT0gMCkge1xuICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMuaG9yaXpvbnRhbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy52ZXJ0aWNhbCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRleHREaXJlY3Rpb24gPSBnZXRDb21wdXRlZFN0eWxlKGFkZFRhcmdldCkuZGlyZWN0aW9uO1xuICAgICAgICBpZiAodGV4dERpcmVjdGlvbiA9PT0gXCJydGxcIikge1xuICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGV4dERpcmVjdGlvblJ0bCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50ZXh0RGlyZWN0aW9uTHRyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWRkTm9kZVRvKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmJhc2UpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRUb29sdGlwKGhhbmRsZSwgaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgIGlmICghb3B0aW9ucy50b29sdGlwcyB8fCAhb3B0aW9ucy50b29sdGlwc1toYW5kbGVOdW1iZXJdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFkZE5vZGVUbyhoYW5kbGUuZmlyc3RDaGlsZCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRvb2x0aXApO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1NsaWRlckRpc2FibGVkKCkge1xuICAgICAgICByZXR1cm4gc2NvcGVfVGFyZ2V0Lmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgIH1cbiAgICAvLyBEaXNhYmxlIHRoZSBzbGlkZXIgZHJhZ2dpbmcgaWYgYW55IGhhbmRsZSBpcyBkaXNhYmxlZFxuICAgIGZ1bmN0aW9uIGlzSGFuZGxlRGlzYWJsZWQoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgIHZhciBoYW5kbGVPcmlnaW4gPSBzY29wZV9IYW5kbGVzW2hhbmRsZU51bWJlcl07XG4gICAgICAgIHJldHVybiBoYW5kbGVPcmlnaW4uaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpc2FibGUoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgIGlmIChoYW5kbGVOdW1iZXIgIT09IG51bGwgJiYgaGFuZGxlTnVtYmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZXNbaGFuZGxlTnVtYmVyXS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZXNbaGFuZGxlTnVtYmVyXS5oYW5kbGUucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzY29wZV9UYXJnZXQuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZS5oYW5kbGUucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBlbmFibGUoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgIGlmIChoYW5kbGVOdW1iZXIgIT09IG51bGwgJiYgaGFuZGxlTnVtYmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZXNbaGFuZGxlTnVtYmVyXS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZXNbaGFuZGxlTnVtYmVyXS5oYW5kbGUuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2NvcGVfVGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlcy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGUpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGUucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICAgICAgaGFuZGxlLmhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVUb29sdGlwcygpIHtcbiAgICAgICAgaWYgKHNjb3BlX1Rvb2x0aXBzKSB7XG4gICAgICAgICAgICByZW1vdmVFdmVudChcInVwZGF0ZVwiICsgSU5URVJOQUxfRVZFTlRfTlMudG9vbHRpcHMpO1xuICAgICAgICAgICAgc2NvcGVfVG9vbHRpcHMuZm9yRWFjaChmdW5jdGlvbiAodG9vbHRpcCkge1xuICAgICAgICAgICAgICAgIGlmICh0b29sdGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUVsZW1lbnQodG9vbHRpcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzY29wZV9Ub29sdGlwcyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gVGhlIHRvb2x0aXBzIG9wdGlvbiBpcyBhIHNob3J0aGFuZCBmb3IgdXNpbmcgdGhlICd1cGRhdGUnIGV2ZW50LlxuICAgIGZ1bmN0aW9uIHRvb2x0aXBzKCkge1xuICAgICAgICByZW1vdmVUb29sdGlwcygpO1xuICAgICAgICAvLyBUb29sdGlwcyBhcmUgYWRkZWQgd2l0aCBvcHRpb25zLnRvb2x0aXBzIGluIG9yaWdpbmFsIG9yZGVyLlxuICAgICAgICBzY29wZV9Ub29sdGlwcyA9IHNjb3BlX0hhbmRsZXMubWFwKGFkZFRvb2x0aXApO1xuICAgICAgICBiaW5kRXZlbnQoXCJ1cGRhdGVcIiArIElOVEVSTkFMX0VWRU5UX05TLnRvb2x0aXBzLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGVOdW1iZXIsIHVuZW5jb2RlZCkge1xuICAgICAgICAgICAgaWYgKCFzY29wZV9Ub29sdGlwcyB8fCAhb3B0aW9ucy50b29sdGlwcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzY29wZV9Ub29sdGlwc1toYW5kbGVOdW1iZXJdID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBmb3JtYXR0ZWRWYWx1ZSA9IHZhbHVlc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMudG9vbHRpcHNbaGFuZGxlTnVtYmVyXSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlID0gb3B0aW9ucy50b29sdGlwc1toYW5kbGVOdW1iZXJdLnRvKHVuZW5jb2RlZFtoYW5kbGVOdW1iZXJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNjb3BlX1Rvb2x0aXBzW2hhbmRsZU51bWJlcl0uaW5uZXJIVE1MID0gZm9ybWF0dGVkVmFsdWU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhcmlhKCkge1xuICAgICAgICByZW1vdmVFdmVudChcInVwZGF0ZVwiICsgSU5URVJOQUxfRVZFTlRfTlMuYXJpYSk7XG4gICAgICAgIGJpbmRFdmVudChcInVwZGF0ZVwiICsgSU5URVJOQUxfRVZFTlRfTlMuYXJpYSwgZnVuY3Rpb24gKHZhbHVlcywgaGFuZGxlTnVtYmVyLCB1bmVuY29kZWQsIHRhcCwgcG9zaXRpb25zKSB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgQXJpYSBWYWx1ZXMgZm9yIGFsbCBoYW5kbGVzLCBhcyBhIGNoYW5nZSBpbiBvbmUgY2hhbmdlcyBtaW4gYW5kIG1heCB2YWx1ZXMgZm9yIHRoZSBuZXh0LlxuICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBoYW5kbGUgPSBzY29wZV9IYW5kbGVzW2luZGV4XTtcbiAgICAgICAgICAgICAgICB2YXIgbWluID0gY2hlY2tIYW5kbGVQb3NpdGlvbihzY29wZV9Mb2NhdGlvbnMsIGluZGV4LCAwLCB0cnVlLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB2YXIgbWF4ID0gY2hlY2tIYW5kbGVQb3NpdGlvbihzY29wZV9Mb2NhdGlvbnMsIGluZGV4LCAxMDAsIHRydWUsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIHZhciBub3cgPSBwb3NpdGlvbnNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIC8vIEZvcm1hdHRlZCB2YWx1ZSBmb3IgZGlzcGxheVxuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gU3RyaW5nKG9wdGlvbnMuYXJpYUZvcm1hdC50byh1bmVuY29kZWRbaW5kZXhdKSk7XG4gICAgICAgICAgICAgICAgLy8gTWFwIHRvIHNsaWRlciByYW5nZSB2YWx1ZXNcbiAgICAgICAgICAgICAgICBtaW4gPSBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcobWluKS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgICAgIG1heCA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhtYXgpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgbm93ID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKG5vdykudG9GaXhlZCgxKTtcbiAgICAgICAgICAgICAgICBoYW5kbGUuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZW1pblwiLCBtaW4pO1xuICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVlbWF4XCIsIG1heCk7XG4gICAgICAgICAgICAgICAgaGFuZGxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWVub3dcIiwgbm93KTtcbiAgICAgICAgICAgICAgICBoYW5kbGUuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZXRleHRcIiwgdGV4dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEdyb3VwKHBpcHMpIHtcbiAgICAgICAgLy8gVXNlIHRoZSByYW5nZS5cbiAgICAgICAgaWYgKHBpcHMubW9kZSA9PT0gUGlwc01vZGUuUmFuZ2UgfHwgcGlwcy5tb2RlID09PSBQaXBzTW9kZS5TdGVwcykge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1NwZWN0cnVtLnhWYWw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBpcHMubW9kZSA9PT0gUGlwc01vZGUuQ291bnQpIHtcbiAgICAgICAgICAgIGlmIChwaXBzLnZhbHVlcyA8IDIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAndmFsdWVzJyAoPj0gMikgcmVxdWlyZWQgZm9yIG1vZGUgJ2NvdW50Jy5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEaXZpZGUgMCAtIDEwMCBpbiAnY291bnQnIHBhcnRzLlxuICAgICAgICAgICAgdmFyIGludGVydmFsID0gcGlwcy52YWx1ZXMgLSAxO1xuICAgICAgICAgICAgdmFyIHNwcmVhZCA9IDEwMCAvIGludGVydmFsO1xuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgLy8gTGlzdCB0aGVzZSBwYXJ0cyBhbmQgaGF2ZSB0aGVtIGhhbmRsZWQgYXMgJ3Bvc2l0aW9ucycuXG4gICAgICAgICAgICB3aGlsZSAoaW50ZXJ2YWwtLSkge1xuICAgICAgICAgICAgICAgIHZhbHVlc1tpbnRlcnZhbF0gPSBpbnRlcnZhbCAqIHNwcmVhZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKDEwMCk7XG4gICAgICAgICAgICByZXR1cm4gbWFwVG9SYW5nZSh2YWx1ZXMsIHBpcHMuc3RlcHBlZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBpcHMubW9kZSA9PT0gUGlwc01vZGUuUG9zaXRpb25zKSB7XG4gICAgICAgICAgICAvLyBNYXAgYWxsIHBlcmNlbnRhZ2VzIHRvIG9uLXJhbmdlIHZhbHVlcy5cbiAgICAgICAgICAgIHJldHVybiBtYXBUb1JhbmdlKHBpcHMudmFsdWVzLCBwaXBzLnN0ZXBwZWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwaXBzLm1vZGUgPT09IFBpcHNNb2RlLlZhbHVlcykge1xuICAgICAgICAgICAgLy8gSWYgdGhlIHZhbHVlIG11c3QgYmUgc3RlcHBlZCwgaXQgbmVlZHMgdG8gYmUgY29udmVydGVkIHRvIGEgcGVyY2VudGFnZSBmaXJzdC5cbiAgICAgICAgICAgIGlmIChwaXBzLnN0ZXBwZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGlwcy52YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IHRvIHBlcmNlbnRhZ2UsIGFwcGx5IHN0ZXAsIHJldHVybiB0byB2YWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhzY29wZV9TcGVjdHJ1bS5nZXRTdGVwKHNjb3BlX1NwZWN0cnVtLnRvU3RlcHBpbmcodmFsdWUpKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIHdlIGNhbiBzaW1wbHkgdXNlIHRoZSB2YWx1ZXMuXG4gICAgICAgICAgICByZXR1cm4gcGlwcy52YWx1ZXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdOyAvLyBwaXBzLm1vZGUgPSBuZXZlclxuICAgIH1cbiAgICBmdW5jdGlvbiBtYXBUb1JhbmdlKHZhbHVlcywgc3RlcHBlZCkge1xuICAgICAgICByZXR1cm4gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcoc3RlcHBlZCA/IHNjb3BlX1NwZWN0cnVtLmdldFN0ZXAodmFsdWUpIDogdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVTcHJlYWQocGlwcykge1xuICAgICAgICBmdW5jdGlvbiBzYWZlSW5jcmVtZW50KHZhbHVlLCBpbmNyZW1lbnQpIHtcbiAgICAgICAgICAgIC8vIEF2b2lkIGZsb2F0aW5nIHBvaW50IHZhcmlhbmNlIGJ5IGRyb3BwaW5nIHRoZSBzbWFsbGVzdCBkZWNpbWFsIHBsYWNlcy5cbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIoKHZhbHVlICsgaW5jcmVtZW50KS50b0ZpeGVkKDcpKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZ3JvdXAgPSBnZXRHcm91cChwaXBzKTtcbiAgICAgICAgdmFyIGluZGV4ZXMgPSB7fTtcbiAgICAgICAgdmFyIGZpcnN0SW5SYW5nZSA9IHNjb3BlX1NwZWN0cnVtLnhWYWxbMF07XG4gICAgICAgIHZhciBsYXN0SW5SYW5nZSA9IHNjb3BlX1NwZWN0cnVtLnhWYWxbc2NvcGVfU3BlY3RydW0ueFZhbC5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlnbm9yZUZpcnN0ID0gZmFsc2U7XG4gICAgICAgIHZhciBpZ25vcmVMYXN0ID0gZmFsc2U7XG4gICAgICAgIHZhciBwcmV2UGN0ID0gMDtcbiAgICAgICAgLy8gQ3JlYXRlIGEgY29weSBvZiB0aGUgZ3JvdXAsIHNvcnQgaXQgYW5kIGZpbHRlciBhd2F5IGFsbCBkdXBsaWNhdGVzLlxuICAgICAgICBncm91cCA9IHVuaXF1ZShncm91cC5zbGljZSgpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgICAgfSkpO1xuICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIHJhbmdlIHN0YXJ0cyB3aXRoIHRoZSBmaXJzdCBlbGVtZW50LlxuICAgICAgICBpZiAoZ3JvdXBbMF0gIT09IGZpcnN0SW5SYW5nZSkge1xuICAgICAgICAgICAgZ3JvdXAudW5zaGlmdChmaXJzdEluUmFuZ2UpO1xuICAgICAgICAgICAgaWdub3JlRmlyc3QgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIExpa2V3aXNlIGZvciB0aGUgbGFzdCBvbmUuXG4gICAgICAgIGlmIChncm91cFtncm91cC5sZW5ndGggLSAxXSAhPT0gbGFzdEluUmFuZ2UpIHtcbiAgICAgICAgICAgIGdyb3VwLnB1c2gobGFzdEluUmFuZ2UpO1xuICAgICAgICAgICAgaWdub3JlTGFzdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZ3JvdXAuZm9yRWFjaChmdW5jdGlvbiAoY3VycmVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgY3VycmVudCBzdGVwIGFuZCB0aGUgbG93ZXIgKyB1cHBlciBwb3NpdGlvbnMuXG4gICAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgdmFyIHE7XG4gICAgICAgICAgICB2YXIgbG93ID0gY3VycmVudDtcbiAgICAgICAgICAgIHZhciBoaWdoID0gZ3JvdXBbaW5kZXggKyAxXTtcbiAgICAgICAgICAgIHZhciBuZXdQY3Q7XG4gICAgICAgICAgICB2YXIgcGN0RGlmZmVyZW5jZTtcbiAgICAgICAgICAgIHZhciBwY3RQb3M7XG4gICAgICAgICAgICB2YXIgdHlwZTtcbiAgICAgICAgICAgIHZhciBzdGVwcztcbiAgICAgICAgICAgIHZhciByZWFsU3RlcHM7XG4gICAgICAgICAgICB2YXIgc3RlcFNpemU7XG4gICAgICAgICAgICB2YXIgaXNTdGVwcyA9IHBpcHMubW9kZSA9PT0gUGlwc01vZGUuU3RlcHM7XG4gICAgICAgICAgICAvLyBXaGVuIHVzaW5nICdzdGVwcycgbW9kZSwgdXNlIHRoZSBwcm92aWRlZCBzdGVwcy5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgd2UnbGwgc3RlcCBvbiB0byB0aGUgbmV4dCBzdWJyYW5nZS5cbiAgICAgICAgICAgIGlmIChpc1N0ZXBzKSB7XG4gICAgICAgICAgICAgICAgc3RlcCA9IHNjb3BlX1NwZWN0cnVtLnhOdW1TdGVwc1tpbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEZWZhdWx0IHRvIGEgJ2Z1bGwnIHN0ZXAuXG4gICAgICAgICAgICBpZiAoIXN0ZXApIHtcbiAgICAgICAgICAgICAgICBzdGVwID0gaGlnaCAtIGxvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGhpZ2ggaXMgdW5kZWZpbmVkIHdlIGFyZSBhdCB0aGUgbGFzdCBzdWJyYW5nZS4gTWFrZSBzdXJlIGl0IGl0ZXJhdGVzIG9uY2UgKCMxMDg4KVxuICAgICAgICAgICAgaWYgKGhpZ2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGhpZ2ggPSBsb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgc3RlcCBpc24ndCAwLCB3aGljaCB3b3VsZCBjYXVzZSBhbiBpbmZpbml0ZSBsb29wICgjNjU0KVxuICAgICAgICAgICAgc3RlcCA9IE1hdGgubWF4KHN0ZXAsIDAuMDAwMDAwMSk7XG4gICAgICAgICAgICAvLyBGaW5kIGFsbCBzdGVwcyBpbiB0aGUgc3VicmFuZ2UuXG4gICAgICAgICAgICBmb3IgKGkgPSBsb3c7IGkgPD0gaGlnaDsgaSA9IHNhZmVJbmNyZW1lbnQoaSwgc3RlcCkpIHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIHBlcmNlbnRhZ2UgdmFsdWUgZm9yIHRoZSBjdXJyZW50IHN0ZXAsXG4gICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBzaXplIGZvciB0aGUgc3VicmFuZ2UuXG4gICAgICAgICAgICAgICAgbmV3UGN0ID0gc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyhpKTtcbiAgICAgICAgICAgICAgICBwY3REaWZmZXJlbmNlID0gbmV3UGN0IC0gcHJldlBjdDtcbiAgICAgICAgICAgICAgICBzdGVwcyA9IHBjdERpZmZlcmVuY2UgLyAocGlwcy5kZW5zaXR5IHx8IDEpO1xuICAgICAgICAgICAgICAgIHJlYWxTdGVwcyA9IE1hdGgucm91bmQoc3RlcHMpO1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgcmF0aW8gcmVwcmVzZW50cyB0aGUgYW1vdW50IG9mIHBlcmNlbnRhZ2Utc3BhY2UgYSBwb2ludCBpbmRpY2F0ZXMuXG4gICAgICAgICAgICAgICAgLy8gRm9yIGEgZGVuc2l0eSAxIHRoZSBwb2ludHMvcGVyY2VudGFnZSA9IDEuIEZvciBkZW5zaXR5IDIsIHRoYXQgcGVyY2VudGFnZSBuZWVkcyB0byBiZSByZS1kaXZpZGVkLlxuICAgICAgICAgICAgICAgIC8vIFJvdW5kIHRoZSBwZXJjZW50YWdlIG9mZnNldCB0byBhbiBldmVuIG51bWJlciwgdGhlbiBkaXZpZGUgYnkgdHdvXG4gICAgICAgICAgICAgICAgLy8gdG8gc3ByZWFkIHRoZSBvZmZzZXQgb24gYm90aCBzaWRlcyBvZiB0aGUgcmFuZ2UuXG4gICAgICAgICAgICAgICAgc3RlcFNpemUgPSBwY3REaWZmZXJlbmNlIC8gcmVhbFN0ZXBzO1xuICAgICAgICAgICAgICAgIC8vIERpdmlkZSBhbGwgcG9pbnRzIGV2ZW5seSwgYWRkaW5nIHRoZSBjb3JyZWN0IG51bWJlciB0byB0aGlzIHN1YnJhbmdlLlxuICAgICAgICAgICAgICAgIC8vIFJ1biB1cCB0byA8PSBzbyB0aGF0IDEwMCUgZ2V0cyBhIHBvaW50LCBldmVudCBpZiBpZ25vcmVMYXN0IGlzIHNldC5cbiAgICAgICAgICAgICAgICBmb3IgKHEgPSAxOyBxIDw9IHJlYWxTdGVwczsgcSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSByYXRpbyBiZXR3ZWVuIHRoZSByb3VuZGVkIHZhbHVlIGFuZCB0aGUgYWN0dWFsIHNpemUgbWlnaHQgYmUgfjElIG9mZi5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ29ycmVjdCB0aGUgcGVyY2VudGFnZSBvZmZzZXQgYnkgdGhlIG51bWJlciBvZiBwb2ludHNcbiAgICAgICAgICAgICAgICAgICAgLy8gcGVyIHN1YnJhbmdlLiBkZW5zaXR5ID0gMSB3aWxsIHJlc3VsdCBpbiAxMDAgcG9pbnRzIG9uIHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyBmdWxsIHJhbmdlLCAyIGZvciA1MCwgNCBmb3IgMjUsIGV0Yy5cbiAgICAgICAgICAgICAgICAgICAgcGN0UG9zID0gcHJldlBjdCArIHEgKiBzdGVwU2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhlc1twY3RQb3MudG9GaXhlZCg1KV0gPSBbc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHBjdFBvcyksIDBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIHBvaW50IHR5cGUuXG4gICAgICAgICAgICAgICAgdHlwZSA9IGdyb3VwLmluZGV4T2YoaSkgPiAtMSA/IFBpcHNUeXBlLkxhcmdlVmFsdWUgOiBpc1N0ZXBzID8gUGlwc1R5cGUuU21hbGxWYWx1ZSA6IFBpcHNUeXBlLk5vVmFsdWU7XG4gICAgICAgICAgICAgICAgLy8gRW5mb3JjZSB0aGUgJ2lnbm9yZUZpcnN0JyBvcHRpb24gYnkgb3ZlcndyaXRpbmcgdGhlIHR5cGUgZm9yIDAuXG4gICAgICAgICAgICAgICAgaWYgKCFpbmRleCAmJiBpZ25vcmVGaXJzdCAmJiBpICE9PSBoaWdoKSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIShpID09PSBoaWdoICYmIGlnbm9yZUxhc3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1hcmsgdGhlICd0eXBlJyBvZiB0aGlzIHBvaW50LiAwID0gcGxhaW4sIDEgPSByZWFsIHZhbHVlLCAyID0gc3RlcCB2YWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgaW5kZXhlc1tuZXdQY3QudG9GaXhlZCg1KV0gPSBbaSwgdHlwZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgcGVyY2VudGFnZSBjb3VudC5cbiAgICAgICAgICAgICAgICBwcmV2UGN0ID0gbmV3UGN0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGluZGV4ZXM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZE1hcmtpbmcoc3ByZWFkLCBmaWx0ZXJGdW5jLCBmb3JtYXR0ZXIpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBzY29wZV9Eb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgdmFsdWVTaXplQ2xhc3NlcyA9IChfYSA9IHt9LFxuICAgICAgICAgICAgX2FbUGlwc1R5cGUuTm9uZV0gPSBcIlwiLFxuICAgICAgICAgICAgX2FbUGlwc1R5cGUuTm9WYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVOb3JtYWwsXG4gICAgICAgICAgICBfYVtQaXBzVHlwZS5MYXJnZVZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZUxhcmdlLFxuICAgICAgICAgICAgX2FbUGlwc1R5cGUuU21hbGxWYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVTdWIsXG4gICAgICAgICAgICBfYSk7XG4gICAgICAgIHZhciBtYXJrZXJTaXplQ2xhc3NlcyA9IChfYiA9IHt9LFxuICAgICAgICAgICAgX2JbUGlwc1R5cGUuTm9uZV0gPSBcIlwiLFxuICAgICAgICAgICAgX2JbUGlwc1R5cGUuTm9WYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyTm9ybWFsLFxuICAgICAgICAgICAgX2JbUGlwc1R5cGUuTGFyZ2VWYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyTGFyZ2UsXG4gICAgICAgICAgICBfYltQaXBzVHlwZS5TbWFsbFZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJTdWIsXG4gICAgICAgICAgICBfYik7XG4gICAgICAgIHZhciB2YWx1ZU9yaWVudGF0aW9uQ2xhc3NlcyA9IFtvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVIb3Jpem9udGFsLCBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVWZXJ0aWNhbF07XG4gICAgICAgIHZhciBtYXJrZXJPcmllbnRhdGlvbkNsYXNzZXMgPSBbb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlckhvcml6b250YWwsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJWZXJ0aWNhbF07XG4gICAgICAgIGFkZENsYXNzKGVsZW1lbnQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5waXBzKTtcbiAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgb3B0aW9ucy5vcnQgPT09IDAgPyBvcHRpb25zLmNzc0NsYXNzZXMucGlwc0hvcml6b250YWwgOiBvcHRpb25zLmNzc0NsYXNzZXMucGlwc1ZlcnRpY2FsKTtcbiAgICAgICAgZnVuY3Rpb24gZ2V0Q2xhc3Nlcyh0eXBlLCBzb3VyY2UpIHtcbiAgICAgICAgICAgIHZhciBhID0gc291cmNlID09PSBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWU7XG4gICAgICAgICAgICB2YXIgb3JpZW50YXRpb25DbGFzc2VzID0gYSA/IHZhbHVlT3JpZW50YXRpb25DbGFzc2VzIDogbWFya2VyT3JpZW50YXRpb25DbGFzc2VzO1xuICAgICAgICAgICAgdmFyIHNpemVDbGFzc2VzID0gYSA/IHZhbHVlU2l6ZUNsYXNzZXMgOiBtYXJrZXJTaXplQ2xhc3NlcztcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2UgKyBcIiBcIiArIG9yaWVudGF0aW9uQ2xhc3Nlc1tvcHRpb25zLm9ydF0gKyBcIiBcIiArIHNpemVDbGFzc2VzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFkZFNwcmVhZChvZmZzZXQsIHZhbHVlLCB0eXBlKSB7XG4gICAgICAgICAgICAvLyBBcHBseSB0aGUgZmlsdGVyIGZ1bmN0aW9uLCBpZiBpdCBpcyBzZXQuXG4gICAgICAgICAgICB0eXBlID0gZmlsdGVyRnVuYyA/IGZpbHRlckZ1bmModmFsdWUsIHR5cGUpIDogdHlwZTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBQaXBzVHlwZS5Ob25lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQWRkIGEgbWFya2VyIGZvciBldmVyeSBwb2ludFxuICAgICAgICAgICAgdmFyIG5vZGUgPSBhZGROb2RlVG8oZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgbm9kZS5jbGFzc05hbWUgPSBnZXRDbGFzc2VzKHR5cGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXIpO1xuICAgICAgICAgICAgbm9kZS5zdHlsZVtvcHRpb25zLnN0eWxlXSA9IG9mZnNldCArIFwiJVwiO1xuICAgICAgICAgICAgLy8gVmFsdWVzIGFyZSBvbmx5IGFwcGVuZGVkIGZvciBwb2ludHMgbWFya2VkICcxJyBvciAnMicuXG4gICAgICAgICAgICBpZiAodHlwZSA+IFBpcHNUeXBlLk5vVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gYWRkTm9kZVRvKGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTmFtZSA9IGdldENsYXNzZXModHlwZSwgb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgU3RyaW5nKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHlsZVtvcHRpb25zLnN0eWxlXSA9IG9mZnNldCArIFwiJVwiO1xuICAgICAgICAgICAgICAgIG5vZGUuaW5uZXJIVE1MID0gU3RyaW5nKGZvcm1hdHRlci50byh2YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEFwcGVuZCBhbGwgcG9pbnRzLlxuICAgICAgICBPYmplY3Qua2V5cyhzcHJlYWQpLmZvckVhY2goZnVuY3Rpb24gKG9mZnNldCkge1xuICAgICAgICAgICAgYWRkU3ByZWFkKG9mZnNldCwgc3ByZWFkW29mZnNldF1bMF0sIHNwcmVhZFtvZmZzZXRdWzFdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVQaXBzKCkge1xuICAgICAgICBpZiAoc2NvcGVfUGlwcykge1xuICAgICAgICAgICAgcmVtb3ZlRWxlbWVudChzY29wZV9QaXBzKTtcbiAgICAgICAgICAgIHNjb3BlX1BpcHMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBpcHMocGlwcykge1xuICAgICAgICAvLyBGaXggIzY2OVxuICAgICAgICByZW1vdmVQaXBzKCk7XG4gICAgICAgIHZhciBzcHJlYWQgPSBnZW5lcmF0ZVNwcmVhZChwaXBzKTtcbiAgICAgICAgdmFyIGZpbHRlciA9IHBpcHMuZmlsdGVyO1xuICAgICAgICB2YXIgZm9ybWF0ID0gcGlwcy5mb3JtYXQgfHwge1xuICAgICAgICAgICAgdG86IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcoTWF0aC5yb3VuZCh2YWx1ZSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgc2NvcGVfUGlwcyA9IHNjb3BlX1RhcmdldC5hcHBlbmRDaGlsZChhZGRNYXJraW5nKHNwcmVhZCwgZmlsdGVyLCBmb3JtYXQpKTtcbiAgICAgICAgcmV0dXJuIHNjb3BlX1BpcHM7XG4gICAgfVxuICAgIC8vIFNob3J0aGFuZCBmb3IgYmFzZSBkaW1lbnNpb25zLlxuICAgIGZ1bmN0aW9uIGJhc2VTaXplKCkge1xuICAgICAgICB2YXIgcmVjdCA9IHNjb3BlX0Jhc2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBhbHQgPSAoXCJvZmZzZXRcIiArIFtcIldpZHRoXCIsIFwiSGVpZ2h0XCJdW29wdGlvbnMub3J0XSk7XG4gICAgICAgIHJldHVybiBvcHRpb25zLm9ydCA9PT0gMCA/IHJlY3Qud2lkdGggfHwgc2NvcGVfQmFzZVthbHRdIDogcmVjdC5oZWlnaHQgfHwgc2NvcGVfQmFzZVthbHRdO1xuICAgIH1cbiAgICAvLyBIYW5kbGVyIGZvciBhdHRhY2hpbmcgZXZlbnRzIHRyb3VnaCBhIHByb3h5LlxuICAgIGZ1bmN0aW9uIGF0dGFjaEV2ZW50KGV2ZW50cywgZWxlbWVudCwgY2FsbGJhY2ssIGRhdGEpIHtcbiAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiBjYW4gYmUgdXNlZCB0byAnZmlsdGVyJyBldmVudHMgdG8gdGhlIHNsaWRlci5cbiAgICAgICAgLy8gZWxlbWVudCBpcyBhIG5vZGUsIG5vdCBhIG5vZGVMaXN0XG4gICAgICAgIHZhciBtZXRob2QgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBlID0gZml4RXZlbnQoZXZlbnQsIGRhdGEucGFnZU9mZnNldCwgZGF0YS50YXJnZXQgfHwgZWxlbWVudCk7XG4gICAgICAgICAgICAvLyBmaXhFdmVudCByZXR1cm5zIGZhbHNlIGlmIHRoaXMgZXZlbnQgaGFzIGEgZGlmZmVyZW50IHRhcmdldFxuICAgICAgICAgICAgLy8gd2hlbiBoYW5kbGluZyAobXVsdGktKSB0b3VjaCBldmVudHM7XG4gICAgICAgICAgICBpZiAoIWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkb05vdFJlamVjdCBpcyBwYXNzZWQgYnkgYWxsIGVuZCBldmVudHMgdG8gbWFrZSBzdXJlIHJlbGVhc2VkIHRvdWNoZXNcbiAgICAgICAgICAgIC8vIGFyZSBub3QgcmVqZWN0ZWQsIGxlYXZpbmcgdGhlIHNsaWRlciBcInN0dWNrXCIgdG8gdGhlIGN1cnNvcjtcbiAgICAgICAgICAgIGlmIChpc1NsaWRlckRpc2FibGVkKCkgJiYgIWRhdGEuZG9Ob3RSZWplY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdG9wIGlmIGFuIGFjdGl2ZSAndGFwJyB0cmFuc2l0aW9uIGlzIHRha2luZyBwbGFjZS5cbiAgICAgICAgICAgIGlmIChoYXNDbGFzcyhzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50YXApICYmICFkYXRhLmRvTm90UmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWdub3JlIHJpZ2h0IG9yIG1pZGRsZSBjbGlja3Mgb24gc3RhcnQgIzQ1NFxuICAgICAgICAgICAgaWYgKGV2ZW50cyA9PT0gYWN0aW9ucy5zdGFydCAmJiBlLmJ1dHRvbnMgIT09IHVuZGVmaW5lZCAmJiBlLmJ1dHRvbnMgPiAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWdub3JlIHJpZ2h0IG9yIG1pZGRsZSBjbGlja3Mgb24gc3RhcnQgIzQ1NFxuICAgICAgICAgICAgaWYgKGRhdGEuaG92ZXIgJiYgZS5idXR0b25zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gJ3N1cHBvcnRzUGFzc2l2ZScgaXMgb25seSB0cnVlIGlmIGEgYnJvd3NlciBhbHNvIHN1cHBvcnRzIHRvdWNoLWFjdGlvbjogbm9uZSBpbiBDU1MuXG4gICAgICAgICAgICAvLyBpT1Mgc2FmYXJpIGRvZXMgbm90LCBzbyBpdCBkb2Vzbid0IGdldCB0byBiZW5lZml0IGZyb20gcGFzc2l2ZSBzY3JvbGxpbmcuIGlPUyBkb2VzIHN1cHBvcnRcbiAgICAgICAgICAgIC8vIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uLCBidXQgdGhhdCBhbGxvd3MgcGFubmluZywgd2hpY2ggYnJlYWtzXG4gICAgICAgICAgICAvLyBzbGlkZXJzIGFmdGVyIHpvb21pbmcvb24gbm9uLXJlc3BvbnNpdmUgcGFnZXMuXG4gICAgICAgICAgICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzMxMTJcbiAgICAgICAgICAgIGlmICghc3VwcG9ydHNQYXNzaXZlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5jYWxjUG9pbnQgPSBlLnBvaW50c1tvcHRpb25zLm9ydF07XG4gICAgICAgICAgICAvLyBDYWxsIHRoZSBldmVudCBoYW5kbGVyIHdpdGggdGhlIGV2ZW50IFsgYW5kIGFkZGl0aW9uYWwgZGF0YSBdLlxuICAgICAgICAgICAgY2FsbGJhY2soZSwgZGF0YSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgICAgIHZhciBtZXRob2RzID0gW107XG4gICAgICAgIC8vIEJpbmQgYSBjbG9zdXJlIG9uIHRoZSB0YXJnZXQgZm9yIGV2ZXJ5IGV2ZW50IHR5cGUuXG4gICAgICAgIGV2ZW50cy5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBtZXRob2QsIHN1cHBvcnRzUGFzc2l2ZSA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2UpO1xuICAgICAgICAgICAgbWV0aG9kcy5wdXNoKFtldmVudE5hbWUsIG1ldGhvZF0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1ldGhvZHM7XG4gICAgfVxuICAgIC8vIFByb3ZpZGUgYSBjbGVhbiBldmVudCB3aXRoIHN0YW5kYXJkaXplZCBvZmZzZXQgdmFsdWVzLlxuICAgIGZ1bmN0aW9uIGZpeEV2ZW50KGUsIHBhZ2VPZmZzZXQsIGV2ZW50VGFyZ2V0KSB7XG4gICAgICAgIC8vIEZpbHRlciB0aGUgZXZlbnQgdG8gcmVnaXN0ZXIgdGhlIHR5cGUsIHdoaWNoIGNhbiBiZVxuICAgICAgICAvLyB0b3VjaCwgbW91c2Ugb3IgcG9pbnRlci4gT2Zmc2V0IGNoYW5nZXMgbmVlZCB0byBiZVxuICAgICAgICAvLyBtYWRlIG9uIGFuIGV2ZW50IHNwZWNpZmljIGJhc2lzLlxuICAgICAgICB2YXIgdG91Y2ggPSBlLnR5cGUuaW5kZXhPZihcInRvdWNoXCIpID09PSAwO1xuICAgICAgICB2YXIgbW91c2UgPSBlLnR5cGUuaW5kZXhPZihcIm1vdXNlXCIpID09PSAwO1xuICAgICAgICB2YXIgcG9pbnRlciA9IGUudHlwZS5pbmRleE9mKFwicG9pbnRlclwiKSA9PT0gMDtcbiAgICAgICAgdmFyIHggPSAwO1xuICAgICAgICB2YXIgeSA9IDA7XG4gICAgICAgIC8vIElFMTAgaW1wbGVtZW50ZWQgcG9pbnRlciBldmVudHMgd2l0aCBhIHByZWZpeDtcbiAgICAgICAgaWYgKGUudHlwZS5pbmRleE9mKFwiTVNQb2ludGVyXCIpID09PSAwKSB7XG4gICAgICAgICAgICBwb2ludGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFcnJvbmVvdXMgZXZlbnRzIHNlZW0gdG8gYmUgcGFzc2VkIGluIG9jY2FzaW9uYWxseSBvbiBpT1MvaVBhZE9TIGFmdGVyIHVzZXIgZmluaXNoZXMgaW50ZXJhY3Rpbmcgd2l0aFxuICAgICAgICAvLyB0aGUgc2xpZGVyLiBUaGV5IGFwcGVhciB0byBiZSBvZiB0eXBlIE1vdXNlRXZlbnQsIHlldCB0aGV5IGRvbid0IGhhdmUgdXN1YWwgcHJvcGVydGllcyBzZXQuIElnbm9yZVxuICAgICAgICAvLyBldmVudHMgdGhhdCBoYXZlIG5vIHRvdWNoZXMgb3IgYnV0dG9ucyBhc3NvY2lhdGVkIHdpdGggdGhlbS4gKCMxMDU3LCAjMTA3OSwgIzEwOTUpXG4gICAgICAgIGlmIChlLnR5cGUgPT09IFwibW91c2Vkb3duXCIgJiYgIWUuYnV0dG9ucyAmJiAhZS50b3VjaGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIG9ubHkgdGhpbmcgb25lIGhhbmRsZSBzaG91bGQgYmUgY29uY2VybmVkIGFib3V0IGlzIHRoZSB0b3VjaGVzIHRoYXQgb3JpZ2luYXRlZCBvbiB0b3Agb2YgaXQuXG4gICAgICAgIGlmICh0b3VjaCkge1xuICAgICAgICAgICAgLy8gUmV0dXJucyB0cnVlIGlmIGEgdG91Y2ggb3JpZ2luYXRlZCBvbiB0aGUgdGFyZ2V0LlxuICAgICAgICAgICAgdmFyIGlzVG91Y2hPblRhcmdldCA9IGZ1bmN0aW9uIChjaGVja1RvdWNoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGNoZWNrVG91Y2gudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHJldHVybiAodGFyZ2V0ID09PSBldmVudFRhcmdldCB8fFxuICAgICAgICAgICAgICAgICAgICBldmVudFRhcmdldC5jb250YWlucyh0YXJnZXQpIHx8XG4gICAgICAgICAgICAgICAgICAgIChlLmNvbXBvc2VkICYmIGUuY29tcG9zZWRQYXRoKCkuc2hpZnQoKSA9PT0gZXZlbnRUYXJnZXQpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBJbiB0aGUgY2FzZSBvZiB0b3VjaHN0YXJ0IGV2ZW50cywgd2UgbmVlZCB0byBtYWtlIHN1cmUgdGhlcmUgaXMgc3RpbGwgbm8gbW9yZSB0aGFuIG9uZVxuICAgICAgICAgICAgLy8gdG91Y2ggb24gdGhlIHRhcmdldCBzbyB3ZSBsb29rIGFtb25nc3QgYWxsIHRvdWNoZXMuXG4gICAgICAgICAgICBpZiAoZS50eXBlID09PSBcInRvdWNoc3RhcnRcIikge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXRUb3VjaGVzID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKGUudG91Y2hlcywgaXNUb3VjaE9uVGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAvLyBEbyBub3Qgc3VwcG9ydCBtb3JlIHRoYW4gb25lIHRvdWNoIHBlciBoYW5kbGUuXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHggPSB0YXJnZXRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICAgICAgICAgIHkgPSB0YXJnZXRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIG90aGVyIGNhc2VzLCBmaW5kIG9uIGNoYW5nZWRUb3VjaGVzIGlzIGVub3VnaC5cbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0VG91Y2ggPSBBcnJheS5wcm90b3R5cGUuZmluZC5jYWxsKGUuY2hhbmdlZFRvdWNoZXMsIGlzVG91Y2hPblRhcmdldCk7XG4gICAgICAgICAgICAgICAgLy8gQ2FuY2VsIGlmIHRoZSB0YXJnZXQgdG91Y2ggaGFzIG5vdCBtb3ZlZC5cbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldFRvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeCA9IHRhcmdldFRvdWNoLnBhZ2VYO1xuICAgICAgICAgICAgICAgIHkgPSB0YXJnZXRUb3VjaC5wYWdlWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwYWdlT2Zmc2V0ID0gcGFnZU9mZnNldCB8fCBnZXRQYWdlT2Zmc2V0KHNjb3BlX0RvY3VtZW50KTtcbiAgICAgICAgaWYgKG1vdXNlIHx8IHBvaW50ZXIpIHtcbiAgICAgICAgICAgIHggPSBlLmNsaWVudFggKyBwYWdlT2Zmc2V0Lng7XG4gICAgICAgICAgICB5ID0gZS5jbGllbnRZICsgcGFnZU9mZnNldC55O1xuICAgICAgICB9XG4gICAgICAgIGUucGFnZU9mZnNldCA9IHBhZ2VPZmZzZXQ7XG4gICAgICAgIGUucG9pbnRzID0gW3gsIHldO1xuICAgICAgICBlLmN1cnNvciA9IG1vdXNlIHx8IHBvaW50ZXI7IC8vIEZpeCAjNDM1XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICAvLyBUcmFuc2xhdGUgYSBjb29yZGluYXRlIGluIHRoZSBkb2N1bWVudCB0byBhIHBlcmNlbnRhZ2Ugb24gdGhlIHNsaWRlclxuICAgIGZ1bmN0aW9uIGNhbGNQb2ludFRvUGVyY2VudGFnZShjYWxjUG9pbnQpIHtcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gY2FsY1BvaW50IC0gb2Zmc2V0KHNjb3BlX0Jhc2UsIG9wdGlvbnMub3J0KTtcbiAgICAgICAgdmFyIHByb3Bvc2FsID0gKGxvY2F0aW9uICogMTAwKSAvIGJhc2VTaXplKCk7XG4gICAgICAgIC8vIENsYW1wIHByb3Bvc2FsIGJldHdlZW4gMCUgYW5kIDEwMCVcbiAgICAgICAgLy8gT3V0LW9mLWJvdW5kIGNvb3JkaW5hdGVzIG1heSBvY2N1ciB3aGVuIC5ub1VpLWJhc2UgcHNldWRvLWVsZW1lbnRzXG4gICAgICAgIC8vIGFyZSB1c2VkIChlLmcuIGNvbnRhaW5lZCBoYW5kbGVzIGZlYXR1cmUpXG4gICAgICAgIHByb3Bvc2FsID0gbGltaXQocHJvcG9zYWwpO1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5kaXIgPyAxMDAgLSBwcm9wb3NhbCA6IHByb3Bvc2FsO1xuICAgIH1cbiAgICAvLyBGaW5kIGhhbmRsZSBjbG9zZXN0IHRvIGEgY2VydGFpbiBwZXJjZW50YWdlIG9uIHRoZSBzbGlkZXJcbiAgICBmdW5jdGlvbiBnZXRDbG9zZXN0SGFuZGxlKGNsaWNrZWRQb3NpdGlvbikge1xuICAgICAgICB2YXIgc21hbGxlc3REaWZmZXJlbmNlID0gMTAwO1xuICAgICAgICB2YXIgaGFuZGxlTnVtYmVyID0gZmFsc2U7XG4gICAgICAgIHNjb3BlX0hhbmRsZXMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlLCBpbmRleCkge1xuICAgICAgICAgICAgLy8gRGlzYWJsZWQgaGFuZGxlcyBhcmUgaWdub3JlZFxuICAgICAgICAgICAgaWYgKGlzSGFuZGxlRGlzYWJsZWQoaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhhbmRsZVBvc2l0aW9uID0gc2NvcGVfTG9jYXRpb25zW2luZGV4XTtcbiAgICAgICAgICAgIHZhciBkaWZmZXJlbmNlV2l0aFRoaXNIYW5kbGUgPSBNYXRoLmFicyhoYW5kbGVQb3NpdGlvbiAtIGNsaWNrZWRQb3NpdGlvbik7XG4gICAgICAgICAgICAvLyBJbml0aWFsIHN0YXRlXG4gICAgICAgICAgICB2YXIgY2xpY2tBdEVkZ2UgPSBkaWZmZXJlbmNlV2l0aFRoaXNIYW5kbGUgPT09IDEwMCAmJiBzbWFsbGVzdERpZmZlcmVuY2UgPT09IDEwMDtcbiAgICAgICAgICAgIC8vIERpZmZlcmVuY2Ugd2l0aCB0aGlzIGhhbmRsZSBpcyBzbWFsbGVyIHRoYW4gdGhlIHByZXZpb3VzbHkgY2hlY2tlZCBoYW5kbGVcbiAgICAgICAgICAgIHZhciBpc0Nsb3NlciA9IGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZSA8IHNtYWxsZXN0RGlmZmVyZW5jZTtcbiAgICAgICAgICAgIHZhciBpc0Nsb3NlckFmdGVyID0gZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlIDw9IHNtYWxsZXN0RGlmZmVyZW5jZSAmJiBjbGlja2VkUG9zaXRpb24gPiBoYW5kbGVQb3NpdGlvbjtcbiAgICAgICAgICAgIGlmIChpc0Nsb3NlciB8fCBpc0Nsb3NlckFmdGVyIHx8IGNsaWNrQXRFZGdlKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgc21hbGxlc3REaWZmZXJlbmNlID0gZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGhhbmRsZU51bWJlcjtcbiAgICB9XG4gICAgLy8gRmlyZSAnZW5kJyB3aGVuIGEgbW91c2Ugb3IgcGVuIGxlYXZlcyB0aGUgZG9jdW1lbnQuXG4gICAgZnVuY3Rpb24gZG9jdW1lbnRMZWF2ZShldmVudCwgZGF0YSkge1xuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJtb3VzZW91dFwiICYmXG4gICAgICAgICAgICBldmVudC50YXJnZXQubm9kZU5hbWUgPT09IFwiSFRNTFwiICYmXG4gICAgICAgICAgICBldmVudC5yZWxhdGVkVGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgICAgICBldmVudEVuZChldmVudCwgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSGFuZGxlIG1vdmVtZW50IG9uIGRvY3VtZW50IGZvciBoYW5kbGUgYW5kIHJhbmdlIGRyYWcuXG4gICAgZnVuY3Rpb24gZXZlbnRNb3ZlKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIC8vIEZpeCAjNDk4XG4gICAgICAgIC8vIENoZWNrIHZhbHVlIG9mIC5idXR0b25zIGluICdzdGFydCcgdG8gd29yayBhcm91bmQgYSBidWcgaW4gSUUxMCBtb2JpbGUgKGRhdGEuYnV0dG9uc1Byb3BlcnR5KS5cbiAgICAgICAgLy8gaHR0cHM6Ly9jb25uZWN0Lm1pY3Jvc29mdC5jb20vSUUvZmVlZGJhY2svZGV0YWlscy85MjcwMDUvbW9iaWxlLWllMTAtd2luZG93cy1waG9uZS1idXR0b25zLXByb3BlcnR5LW9mLXBvaW50ZXJtb3ZlLWV2ZW50LWFsd2F5cy16ZXJvXG4gICAgICAgIC8vIElFOSBoYXMgLmJ1dHRvbnMgYW5kIC53aGljaCB6ZXJvIG9uIG1vdXNlbW92ZS5cbiAgICAgICAgLy8gRmlyZWZveCBicmVha3MgdGhlIHNwZWMgTUROIGRlZmluZXMuXG4gICAgICAgIGlmIChuYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKFwiTVNJRSA5XCIpID09PSAtMSAmJiBldmVudC5idXR0b25zID09PSAwICYmIGRhdGEuYnV0dG9uc1Byb3BlcnR5ICE9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZXZlbnRFbmQoZXZlbnQsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIGlmIHdlIGFyZSBtb3ZpbmcgdXAgb3IgZG93blxuICAgICAgICB2YXIgbW92ZW1lbnQgPSAob3B0aW9ucy5kaXIgPyAtMSA6IDEpICogKGV2ZW50LmNhbGNQb2ludCAtIGRhdGEuc3RhcnRDYWxjUG9pbnQpO1xuICAgICAgICAvLyBDb252ZXJ0IHRoZSBtb3ZlbWVudCBpbnRvIGEgcGVyY2VudGFnZSBvZiB0aGUgc2xpZGVyIHdpZHRoL2hlaWdodFxuICAgICAgICB2YXIgcHJvcG9zYWwgPSAobW92ZW1lbnQgKiAxMDApIC8gZGF0YS5iYXNlU2l6ZTtcbiAgICAgICAgbW92ZUhhbmRsZXMobW92ZW1lbnQgPiAwLCBwcm9wb3NhbCwgZGF0YS5sb2NhdGlvbnMsIGRhdGEuaGFuZGxlTnVtYmVycywgZGF0YS5jb25uZWN0KTtcbiAgICB9XG4gICAgLy8gVW5iaW5kIG1vdmUgZXZlbnRzIG9uIGRvY3VtZW50LCBjYWxsIGNhbGxiYWNrcy5cbiAgICBmdW5jdGlvbiBldmVudEVuZChldmVudCwgZGF0YSkge1xuICAgICAgICAvLyBUaGUgaGFuZGxlIGlzIG5vIGxvbmdlciBhY3RpdmUsIHNvIHJlbW92ZSB0aGUgY2xhc3MuXG4gICAgICAgIGlmIChkYXRhLmhhbmRsZSkge1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoZGF0YS5oYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICAgICAgc2NvcGVfQWN0aXZlSGFuZGxlc0NvdW50IC09IDE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVW5iaW5kIHRoZSBtb3ZlIGFuZCBlbmQgZXZlbnRzLCB3aGljaCBhcmUgYWRkZWQgb24gJ3N0YXJ0Jy5cbiAgICAgICAgZGF0YS5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgc2NvcGVfRG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoY1swXSwgY1sxXSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc2NvcGVfQWN0aXZlSGFuZGxlc0NvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgZHJhZ2dpbmcgY2xhc3MuXG4gICAgICAgICAgICByZW1vdmVDbGFzcyhzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5kcmFnKTtcbiAgICAgICAgICAgIHNldFppbmRleCgpO1xuICAgICAgICAgICAgLy8gUmVtb3ZlIGN1cnNvciBzdHlsZXMgYW5kIHRleHQtc2VsZWN0aW9uIGV2ZW50cyBib3VuZCB0byB0aGUgYm9keS5cbiAgICAgICAgICAgIGlmIChldmVudC5jdXJzb3IpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9Cb2R5LnN0eWxlLmN1cnNvciA9IFwiXCI7XG4gICAgICAgICAgICAgICAgc2NvcGVfQm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwic2VsZWN0c3RhcnRcIiwgcHJldmVudERlZmF1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmV2ZW50cy5zbW9vdGhTdGVwcykge1xuICAgICAgICAgICAgZGF0YS5oYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdLCB0cnVlLCB0cnVlLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkYXRhLmhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLmhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJjaGFuZ2VcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwiZW5kXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBCaW5kIG1vdmUgZXZlbnRzIG9uIGRvY3VtZW50LlxuICAgIGZ1bmN0aW9uIGV2ZW50U3RhcnQoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgLy8gSWdub3JlIGV2ZW50IGlmIGFueSBoYW5kbGUgaXMgZGlzYWJsZWRcbiAgICAgICAgaWYgKGRhdGEuaGFuZGxlTnVtYmVycy5zb21lKGlzSGFuZGxlRGlzYWJsZWQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhhbmRsZTtcbiAgICAgICAgaWYgKGRhdGEuaGFuZGxlTnVtYmVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGVPcmlnaW4gPSBzY29wZV9IYW5kbGVzW2RhdGEuaGFuZGxlTnVtYmVyc1swXV07XG4gICAgICAgICAgICBoYW5kbGUgPSBoYW5kbGVPcmlnaW4uY2hpbGRyZW5bMF07XG4gICAgICAgICAgICBzY29wZV9BY3RpdmVIYW5kbGVzQ291bnQgKz0gMTtcbiAgICAgICAgICAgIC8vIE1hcmsgdGhlIGhhbmRsZSBhcyAnYWN0aXZlJyBzbyBpdCBjYW4gYmUgc3R5bGVkLlxuICAgICAgICAgICAgYWRkQ2xhc3MoaGFuZGxlLCBvcHRpb25zLmNzc0NsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBIGRyYWcgc2hvdWxkIG5ldmVyIHByb3BhZ2F0ZSB1cCB0byB0aGUgJ3RhcCcgZXZlbnQuXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAvLyBSZWNvcmQgdGhlIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IFtdO1xuICAgICAgICAvLyBBdHRhY2ggdGhlIG1vdmUgYW5kIGVuZCBldmVudHMuXG4gICAgICAgIHZhciBtb3ZlRXZlbnQgPSBhdHRhY2hFdmVudChhY3Rpb25zLm1vdmUsIHNjb3BlX0RvY3VtZW50RWxlbWVudCwgZXZlbnRNb3ZlLCB7XG4gICAgICAgICAgICAvLyBUaGUgZXZlbnQgdGFyZ2V0IGhhcyBjaGFuZ2VkIHNvIHdlIG5lZWQgdG8gcHJvcGFnYXRlIHRoZSBvcmlnaW5hbCBvbmUgc28gdGhhdCB3ZSBrZWVwXG4gICAgICAgICAgICAvLyByZWx5aW5nIG9uIGl0IHRvIGV4dHJhY3QgdGFyZ2V0IHRvdWNoZXMuXG4gICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgICAgICAgY29ubmVjdDogZGF0YS5jb25uZWN0LFxuICAgICAgICAgICAgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsXG4gICAgICAgICAgICBzdGFydENhbGNQb2ludDogZXZlbnQuY2FsY1BvaW50LFxuICAgICAgICAgICAgYmFzZVNpemU6IGJhc2VTaXplKCksXG4gICAgICAgICAgICBwYWdlT2Zmc2V0OiBldmVudC5wYWdlT2Zmc2V0LFxuICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogZGF0YS5oYW5kbGVOdW1iZXJzLFxuICAgICAgICAgICAgYnV0dG9uc1Byb3BlcnR5OiBldmVudC5idXR0b25zLFxuICAgICAgICAgICAgbG9jYXRpb25zOiBzY29wZV9Mb2NhdGlvbnMuc2xpY2UoKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBlbmRFdmVudCA9IGF0dGFjaEV2ZW50KGFjdGlvbnMuZW5kLCBzY29wZV9Eb2N1bWVudEVsZW1lbnQsIGV2ZW50RW5kLCB7XG4gICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsXG4gICAgICAgICAgICBkb05vdFJlamVjdDogdHJ1ZSxcbiAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IGRhdGEuaGFuZGxlTnVtYmVycyxcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBvdXRFdmVudCA9IGF0dGFjaEV2ZW50KFwibW91c2VvdXRcIiwgc2NvcGVfRG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudExlYXZlLCB7XG4gICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsXG4gICAgICAgICAgICBkb05vdFJlamVjdDogdHJ1ZSxcbiAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IGRhdGEuaGFuZGxlTnVtYmVycyxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFdlIHdhbnQgdG8gbWFrZSBzdXJlIHdlIHB1c2hlZCB0aGUgbGlzdGVuZXJzIGluIHRoZSBsaXN0ZW5lciBsaXN0IHJhdGhlciB0aGFuIGNyZWF0aW5nXG4gICAgICAgIC8vIGEgbmV3IG9uZSBhcyBpdCBoYXMgYWxyZWFkeSBiZWVuIHBhc3NlZCB0byB0aGUgZXZlbnQgaGFuZGxlcnMuXG4gICAgICAgIGxpc3RlbmVycy5wdXNoLmFwcGx5KGxpc3RlbmVycywgbW92ZUV2ZW50LmNvbmNhdChlbmRFdmVudCwgb3V0RXZlbnQpKTtcbiAgICAgICAgLy8gVGV4dCBzZWxlY3Rpb24gaXNuJ3QgYW4gaXNzdWUgb24gdG91Y2ggZGV2aWNlcyxcbiAgICAgICAgLy8gc28gYWRkaW5nIGN1cnNvciBzdHlsZXMgY2FuIGJlIHNraXBwZWQuXG4gICAgICAgIGlmIChldmVudC5jdXJzb3IpIHtcbiAgICAgICAgICAgIC8vIFByZXZlbnQgdGhlICdJJyBjdXJzb3IgYW5kIGV4dGVuZCB0aGUgcmFuZ2UtZHJhZyBjdXJzb3IuXG4gICAgICAgICAgICBzY29wZV9Cb2R5LnN0eWxlLmN1cnNvciA9IGdldENvbXB1dGVkU3R5bGUoZXZlbnQudGFyZ2V0KS5jdXJzb3I7XG4gICAgICAgICAgICAvLyBNYXJrIHRoZSB0YXJnZXQgd2l0aCBhIGRyYWdnaW5nIHN0YXRlLlxuICAgICAgICAgICAgaWYgKHNjb3BlX0hhbmRsZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmRyYWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJldmVudCB0ZXh0IHNlbGVjdGlvbiB3aGVuIGRyYWdnaW5nIHRoZSBoYW5kbGVzLlxuICAgICAgICAgICAgLy8gSW4gbm9VaVNsaWRlciA8PSA5LjIuMCwgdGhpcyB3YXMgaGFuZGxlZCBieSBjYWxsaW5nIHByZXZlbnREZWZhdWx0IG9uIG1vdXNlL3RvdWNoIHN0YXJ0L21vdmUsXG4gICAgICAgICAgICAvLyB3aGljaCBpcyBzY3JvbGwgYmxvY2tpbmcuIFRoZSBzZWxlY3RzdGFydCBldmVudCBpcyBzdXBwb3J0ZWQgYnkgRmlyZUZveCBzdGFydGluZyBmcm9tIHZlcnNpb24gNTIsXG4gICAgICAgICAgICAvLyBtZWFuaW5nIHRoZSBvbmx5IGhvbGRvdXQgaXMgaU9TIFNhZmFyaS4gVGhpcyBkb2Vzbid0IG1hdHRlcjogdGV4dCBzZWxlY3Rpb24gaXNuJ3QgdHJpZ2dlcmVkIHRoZXJlLlxuICAgICAgICAgICAgLy8gVGhlICdjdXJzb3InIGZsYWcgaXMgZmFsc2UuXG4gICAgICAgICAgICAvLyBTZWU6IGh0dHA6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPXNlbGVjdHN0YXJ0XG4gICAgICAgICAgICBzY29wZV9Cb2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJzZWxlY3RzdGFydFwiLCBwcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEuaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInN0YXJ0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBNb3ZlIGNsb3Nlc3QgaGFuZGxlIHRvIHRhcHBlZCBsb2NhdGlvbi5cbiAgICBmdW5jdGlvbiBldmVudFRhcChldmVudCkge1xuICAgICAgICAvLyBUaGUgdGFwIGV2ZW50IHNob3VsZG4ndCBwcm9wYWdhdGUgdXBcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHZhciBwcm9wb3NhbCA9IGNhbGNQb2ludFRvUGVyY2VudGFnZShldmVudC5jYWxjUG9pbnQpO1xuICAgICAgICB2YXIgaGFuZGxlTnVtYmVyID0gZ2V0Q2xvc2VzdEhhbmRsZShwcm9wb3NhbCk7XG4gICAgICAgIC8vIFRhY2tsZSB0aGUgY2FzZSB0aGF0IGFsbCBoYW5kbGVzIGFyZSAnZGlzYWJsZWQnLlxuICAgICAgICBpZiAoaGFuZGxlTnVtYmVyID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZsYWcgdGhlIHNsaWRlciBhcyBpdCBpcyBub3cgaW4gYSB0cmFuc2l0aW9uYWwgc3RhdGUuXG4gICAgICAgIC8vIFRyYW5zaXRpb24gdGFrZXMgYSBjb25maWd1cmFibGUgYW1vdW50IG9mIG1zIChkZWZhdWx0IDMwMCkuIFJlLWVuYWJsZSB0aGUgc2xpZGVyIGFmdGVyIHRoYXQuXG4gICAgICAgIGlmICghb3B0aW9ucy5ldmVudHMuc25hcCkge1xuICAgICAgICAgICAgYWRkQ2xhc3NGb3Ioc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGFwLCBvcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCBwcm9wb3NhbCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHNldFppbmRleCgpO1xuICAgICAgICBmaXJlRXZlbnQoXCJzbGlkZVwiLCBoYW5kbGVOdW1iZXIsIHRydWUpO1xuICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgaWYgKCFvcHRpb25zLmV2ZW50cy5zbmFwKSB7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJjaGFuZ2VcIiwgaGFuZGxlTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZlbnRTdGFydChldmVudCwgeyBoYW5kbGVOdW1iZXJzOiBbaGFuZGxlTnVtYmVyXSB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBGaXJlcyBhICdob3ZlcicgZXZlbnQgZm9yIGEgaG92ZXJlZCBtb3VzZS9wZW4gcG9zaXRpb24uXG4gICAgZnVuY3Rpb24gZXZlbnRIb3ZlcihldmVudCkge1xuICAgICAgICB2YXIgcHJvcG9zYWwgPSBjYWxjUG9pbnRUb1BlcmNlbnRhZ2UoZXZlbnQuY2FsY1BvaW50KTtcbiAgICAgICAgdmFyIHRvID0gc2NvcGVfU3BlY3RydW0uZ2V0U3RlcChwcm9wb3NhbCk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyh0byk7XG4gICAgICAgIE9iamVjdC5rZXlzKHNjb3BlX0V2ZW50cykuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0RXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChcImhvdmVyXCIgPT09IHRhcmdldEV2ZW50LnNwbGl0KFwiLlwiKVswXSkge1xuICAgICAgICAgICAgICAgIHNjb3BlX0V2ZW50c1t0YXJnZXRFdmVudF0uZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChzY29wZV9TZWxmLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBIYW5kbGVzIGtleWRvd24gb24gZm9jdXNlZCBoYW5kbGVzXG4gICAgLy8gRG9uJ3QgbW92ZSB0aGUgZG9jdW1lbnQgd2hlbiBwcmVzc2luZyBhcnJvdyBrZXlzIG9uIGZvY3VzZWQgaGFuZGxlc1xuICAgIGZ1bmN0aW9uIGV2ZW50S2V5ZG93bihldmVudCwgaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgIGlmIChpc1NsaWRlckRpc2FibGVkKCkgfHwgaXNIYW5kbGVEaXNhYmxlZChoYW5kbGVOdW1iZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhvcml6b250YWxLZXlzID0gW1wiTGVmdFwiLCBcIlJpZ2h0XCJdO1xuICAgICAgICB2YXIgdmVydGljYWxLZXlzID0gW1wiRG93blwiLCBcIlVwXCJdO1xuICAgICAgICB2YXIgbGFyZ2VTdGVwS2V5cyA9IFtcIlBhZ2VEb3duXCIsIFwiUGFnZVVwXCJdO1xuICAgICAgICB2YXIgZWRnZUtleXMgPSBbXCJIb21lXCIsIFwiRW5kXCJdO1xuICAgICAgICBpZiAob3B0aW9ucy5kaXIgJiYgIW9wdGlvbnMub3J0KSB7XG4gICAgICAgICAgICAvLyBPbiBhbiByaWdodC10by1sZWZ0IHNsaWRlciwgdGhlIGxlZnQgYW5kIHJpZ2h0IGtleXMgYWN0IGludmVydGVkXG4gICAgICAgICAgICBob3Jpem9udGFsS2V5cy5yZXZlcnNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5vcnQgJiYgIW9wdGlvbnMuZGlyKSB7XG4gICAgICAgICAgICAvLyBPbiBhIHRvcC10by1ib3R0b20gc2xpZGVyLCB0aGUgdXAgYW5kIGRvd24ga2V5cyBhY3QgaW52ZXJ0ZWRcbiAgICAgICAgICAgIHZlcnRpY2FsS2V5cy5yZXZlcnNlKCk7XG4gICAgICAgICAgICBsYXJnZVN0ZXBLZXlzLnJldmVyc2UoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTdHJpcCBcIkFycm93XCIgZm9yIElFIGNvbXBhdGliaWxpdHkuIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9LZXlib2FyZEV2ZW50L2tleVxuICAgICAgICB2YXIga2V5ID0gZXZlbnQua2V5LnJlcGxhY2UoXCJBcnJvd1wiLCBcIlwiKTtcbiAgICAgICAgdmFyIGlzTGFyZ2VEb3duID0ga2V5ID09PSBsYXJnZVN0ZXBLZXlzWzBdO1xuICAgICAgICB2YXIgaXNMYXJnZVVwID0ga2V5ID09PSBsYXJnZVN0ZXBLZXlzWzFdO1xuICAgICAgICB2YXIgaXNEb3duID0ga2V5ID09PSB2ZXJ0aWNhbEtleXNbMF0gfHwga2V5ID09PSBob3Jpem9udGFsS2V5c1swXSB8fCBpc0xhcmdlRG93bjtcbiAgICAgICAgdmFyIGlzVXAgPSBrZXkgPT09IHZlcnRpY2FsS2V5c1sxXSB8fCBrZXkgPT09IGhvcml6b250YWxLZXlzWzFdIHx8IGlzTGFyZ2VVcDtcbiAgICAgICAgdmFyIGlzTWluID0ga2V5ID09PSBlZGdlS2V5c1swXTtcbiAgICAgICAgdmFyIGlzTWF4ID0ga2V5ID09PSBlZGdlS2V5c1sxXTtcbiAgICAgICAgaWYgKCFpc0Rvd24gJiYgIWlzVXAgJiYgIWlzTWluICYmICFpc01heCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIHRvO1xuICAgICAgICBpZiAoaXNVcCB8fCBpc0Rvd24pIHtcbiAgICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSBpc0Rvd24gPyAwIDogMTtcbiAgICAgICAgICAgIHZhciBzdGVwcyA9IGdldE5leHRTdGVwc0ZvckhhbmRsZShoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgdmFyIHN0ZXAgPSBzdGVwc1tkaXJlY3Rpb25dO1xuICAgICAgICAgICAgLy8gQXQgdGhlIGVkZ2Ugb2YgYSBzbGlkZXIsIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIGlmIChzdGVwID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTm8gc3RlcCBzZXQsIHVzZSB0aGUgZGVmYXVsdCBvZiAxMCUgb2YgdGhlIHN1Yi1yYW5nZVxuICAgICAgICAgICAgaWYgKHN0ZXAgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgc3RlcCA9IHNjb3BlX1NwZWN0cnVtLmdldERlZmF1bHRTdGVwKHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdLCBpc0Rvd24sIG9wdGlvbnMua2V5Ym9hcmREZWZhdWx0U3RlcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNMYXJnZVVwIHx8IGlzTGFyZ2VEb3duKSB7XG4gICAgICAgICAgICAgICAgc3RlcCAqPSBvcHRpb25zLmtleWJvYXJkUGFnZU11bHRpcGxpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGVwICo9IG9wdGlvbnMua2V5Ym9hcmRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RlcCBvdmVyIHplcm8tbGVuZ3RoIHJhbmdlcyAoIzk0OCk7XG4gICAgICAgICAgICBzdGVwID0gTWF0aC5tYXgoc3RlcCwgMC4wMDAwMDAxKTtcbiAgICAgICAgICAgIC8vIERlY3JlbWVudCBmb3IgZG93biBzdGVwc1xuICAgICAgICAgICAgc3RlcCA9IChpc0Rvd24gPyAtMSA6IDEpICogc3RlcDtcbiAgICAgICAgICAgIHRvID0gc2NvcGVfVmFsdWVzW2hhbmRsZU51bWJlcl0gKyBzdGVwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzTWF4KSB7XG4gICAgICAgICAgICAvLyBFbmQga2V5XG4gICAgICAgICAgICB0byA9IG9wdGlvbnMuc3BlY3RydW0ueFZhbFtvcHRpb25zLnNwZWN0cnVtLnhWYWwubGVuZ3RoIC0gMV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBIb21lIGtleVxuICAgICAgICAgICAgdG8gPSBvcHRpb25zLnNwZWN0cnVtLnhWYWxbMF07XG4gICAgICAgIH1cbiAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyh0byksIHRydWUsIHRydWUpO1xuICAgICAgICBmaXJlRXZlbnQoXCJzbGlkZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgZmlyZUV2ZW50KFwiY2hhbmdlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIEF0dGFjaCBldmVudHMgdG8gc2V2ZXJhbCBzbGlkZXIgcGFydHMuXG4gICAgZnVuY3Rpb24gYmluZFNsaWRlckV2ZW50cyhiZWhhdmlvdXIpIHtcbiAgICAgICAgLy8gQXR0YWNoIHRoZSBzdGFuZGFyZCBkcmFnIGV2ZW50IHRvIHRoZSBoYW5kbGVzLlxuICAgICAgICBpZiAoIWJlaGF2aW91ci5maXhlZCkge1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlcy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgZXZlbnRzIGFyZSBvbmx5IGJvdW5kIHRvIHRoZSB2aXN1YWwgaGFuZGxlXG4gICAgICAgICAgICAgICAgLy8gZWxlbWVudCwgbm90IHRoZSAncmVhbCcgb3JpZ2luIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgYXR0YWNoRXZlbnQoYWN0aW9ucy5zdGFydCwgaGFuZGxlLmNoaWxkcmVuWzBdLCBldmVudFN0YXJ0LCB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IFtpbmRleF0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBdHRhY2ggdGhlIHRhcCBldmVudCB0byB0aGUgc2xpZGVyIGJhc2UuXG4gICAgICAgIGlmIChiZWhhdmlvdXIudGFwKSB7XG4gICAgICAgICAgICBhdHRhY2hFdmVudChhY3Rpb25zLnN0YXJ0LCBzY29wZV9CYXNlLCBldmVudFRhcCwge30pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcmUgaG92ZXIgZXZlbnRzXG4gICAgICAgIGlmIChiZWhhdmlvdXIuaG92ZXIpIHtcbiAgICAgICAgICAgIGF0dGFjaEV2ZW50KGFjdGlvbnMubW92ZSwgc2NvcGVfQmFzZSwgZXZlbnRIb3Zlciwge1xuICAgICAgICAgICAgICAgIGhvdmVyOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTWFrZSB0aGUgcmFuZ2UgZHJhZ2dhYmxlLlxuICAgICAgICBpZiAoYmVoYXZpb3VyLmRyYWcpIHtcbiAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RzLmZvckVhY2goZnVuY3Rpb24gKGNvbm5lY3QsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbm5lY3QgPT09IGZhbHNlIHx8IGluZGV4ID09PSAwIHx8IGluZGV4ID09PSBzY29wZV9Db25uZWN0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGhhbmRsZUJlZm9yZSA9IHNjb3BlX0hhbmRsZXNbaW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlQWZ0ZXIgPSBzY29wZV9IYW5kbGVzW2luZGV4XTtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnRIb2xkZXJzID0gW2Nvbm5lY3RdO1xuICAgICAgICAgICAgICAgIHZhciBoYW5kbGVzVG9EcmFnID0gW2hhbmRsZUJlZm9yZSwgaGFuZGxlQWZ0ZXJdO1xuICAgICAgICAgICAgICAgIHZhciBoYW5kbGVOdW1iZXJzVG9EcmFnID0gW2luZGV4IC0gMSwgaW5kZXhdO1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGNvbm5lY3QsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5kcmFnZ2FibGUpO1xuICAgICAgICAgICAgICAgIC8vIFdoZW4gdGhlIHJhbmdlIGlzIGZpeGVkLCB0aGUgZW50aXJlIHJhbmdlIGNhblxuICAgICAgICAgICAgICAgIC8vIGJlIGRyYWdnZWQgYnkgdGhlIGhhbmRsZXMuIFRoZSBoYW5kbGUgaW4gdGhlIGZpcnN0XG4gICAgICAgICAgICAgICAgLy8gb3JpZ2luIHdpbGwgcHJvcGFnYXRlIHRoZSBzdGFydCBldmVudCB1cHdhcmQsXG4gICAgICAgICAgICAgICAgLy8gYnV0IGl0IG5lZWRzIHRvIGJlIGJvdW5kIG1hbnVhbGx5IG9uIHRoZSBvdGhlci5cbiAgICAgICAgICAgICAgICBpZiAoYmVoYXZpb3VyLmZpeGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SG9sZGVycy5wdXNoKGhhbmRsZUJlZm9yZS5jaGlsZHJlblswXSk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SG9sZGVycy5wdXNoKGhhbmRsZUFmdGVyLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGJlaGF2aW91ci5kcmFnQWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXNUb0RyYWcgPSBzY29wZV9IYW5kbGVzO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzVG9EcmFnID0gc2NvcGVfSGFuZGxlTnVtYmVycztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXZlbnRIb2xkZXJzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50SG9sZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dGFjaEV2ZW50KGFjdGlvbnMuc3RhcnQsIGV2ZW50SG9sZGVyLCBldmVudFN0YXJ0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVzOiBoYW5kbGVzVG9EcmFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogaGFuZGxlTnVtYmVyc1RvRHJhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Q6IGNvbm5lY3QsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQXR0YWNoIGFuIGV2ZW50IHRvIHRoaXMgc2xpZGVyLCBwb3NzaWJseSBpbmNsdWRpbmcgYSBuYW1lc3BhY2VcbiAgICBmdW5jdGlvbiBiaW5kRXZlbnQobmFtZXNwYWNlZEV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICBzY29wZV9FdmVudHNbbmFtZXNwYWNlZEV2ZW50XSA9IHNjb3BlX0V2ZW50c1tuYW1lc3BhY2VkRXZlbnRdIHx8IFtdO1xuICAgICAgICBzY29wZV9FdmVudHNbbmFtZXNwYWNlZEV2ZW50XS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgLy8gSWYgdGhlIGV2ZW50IGJvdW5kIGlzICd1cGRhdGUsJyBmaXJlIGl0IGltbWVkaWF0ZWx5IGZvciBhbGwgaGFuZGxlcy5cbiAgICAgICAgaWYgKG5hbWVzcGFjZWRFdmVudC5zcGxpdChcIi5cIilbMF0gPT09IFwidXBkYXRlXCIpIHtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMuZm9yRWFjaChmdW5jdGlvbiAoYSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gaXNJbnRlcm5hbE5hbWVzcGFjZShuYW1lc3BhY2UpIHtcbiAgICAgICAgcmV0dXJuIG5hbWVzcGFjZSA9PT0gSU5URVJOQUxfRVZFTlRfTlMuYXJpYSB8fCBuYW1lc3BhY2UgPT09IElOVEVSTkFMX0VWRU5UX05TLnRvb2x0aXBzO1xuICAgIH1cbiAgICAvLyBVbmRvIGF0dGFjaG1lbnQgb2YgZXZlbnRcbiAgICBmdW5jdGlvbiByZW1vdmVFdmVudChuYW1lc3BhY2VkRXZlbnQpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gbmFtZXNwYWNlZEV2ZW50ICYmIG5hbWVzcGFjZWRFdmVudC5zcGxpdChcIi5cIilbMF07XG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSBldmVudCA/IG5hbWVzcGFjZWRFdmVudC5zdWJzdHJpbmcoZXZlbnQubGVuZ3RoKSA6IG5hbWVzcGFjZWRFdmVudDtcbiAgICAgICAgT2JqZWN0LmtleXMoc2NvcGVfRXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChiaW5kKSB7XG4gICAgICAgICAgICB2YXIgdEV2ZW50ID0gYmluZC5zcGxpdChcIi5cIilbMF07XG4gICAgICAgICAgICB2YXIgdE5hbWVzcGFjZSA9IGJpbmQuc3Vic3RyaW5nKHRFdmVudC5sZW5ndGgpO1xuICAgICAgICAgICAgaWYgKCghZXZlbnQgfHwgZXZlbnQgPT09IHRFdmVudCkgJiYgKCFuYW1lc3BhY2UgfHwgbmFtZXNwYWNlID09PSB0TmFtZXNwYWNlKSkge1xuICAgICAgICAgICAgICAgIC8vIG9ubHkgZGVsZXRlIHByb3RlY3RlZCBpbnRlcm5hbCBldmVudCBpZiBpbnRlbnRpb25hbFxuICAgICAgICAgICAgICAgIGlmICghaXNJbnRlcm5hbE5hbWVzcGFjZSh0TmFtZXNwYWNlKSB8fCBuYW1lc3BhY2UgPT09IHROYW1lc3BhY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHNjb3BlX0V2ZW50c1tiaW5kXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBFeHRlcm5hbCBldmVudCBoYW5kbGluZ1xuICAgIGZ1bmN0aW9uIGZpcmVFdmVudChldmVudE5hbWUsIGhhbmRsZU51bWJlciwgdGFwKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHNjb3BlX0V2ZW50cykuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0RXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBldmVudFR5cGUgPSB0YXJnZXRFdmVudC5zcGxpdChcIi5cIilbMF07XG4gICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSBldmVudFR5cGUpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9FdmVudHNbdGFyZ2V0RXZlbnRdLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoXG4gICAgICAgICAgICAgICAgICAgIC8vIFVzZSB0aGUgc2xpZGVyIHB1YmxpYyBBUEkgYXMgdGhlIHNjb3BlICgndGhpcycpXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlX1NlbGYsIFxuICAgICAgICAgICAgICAgICAgICAvLyBSZXR1cm4gdmFsdWVzIGFzIGFycmF5LCBzbyBhcmdfMVthcmdfMl0gaXMgYWx3YXlzIHZhbGlkLlxuICAgICAgICAgICAgICAgICAgICBzY29wZV9WYWx1ZXMubWFwKG9wdGlvbnMuZm9ybWF0LnRvKSwgXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBpbmRleCwgMCBvciAxXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlciwgXG4gICAgICAgICAgICAgICAgICAgIC8vIFVuLWZvcm1hdHRlZCBzbGlkZXIgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlX1ZhbHVlcy5zbGljZSgpLCBcbiAgICAgICAgICAgICAgICAgICAgLy8gRXZlbnQgaXMgZmlyZWQgYnkgdGFwLCB0cnVlIG9yIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHRhcCB8fCBmYWxzZSwgXG4gICAgICAgICAgICAgICAgICAgIC8vIExlZnQgb2Zmc2V0IG9mIHRoZSBoYW5kbGUsIGluIHJlbGF0aW9uIHRvIHRoZSBzbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfTG9jYXRpb25zLnNsaWNlKCksIFxuICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdGhlIHNsaWRlciBwdWJsaWMgQVBJIHRvIGFuIGFjY2Vzc2libGUgcGFyYW1ldGVyIHdoZW4gdGhpcyBpcyB1bmF2YWlsYWJsZVxuICAgICAgICAgICAgICAgICAgICBzY29wZV9TZWxmKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIFNwbGl0IG91dCB0aGUgaGFuZGxlIHBvc2l0aW9uaW5nIGxvZ2ljIHNvIHRoZSBNb3ZlIGV2ZW50IGNhbiB1c2UgaXQsIHRvb1xuICAgIGZ1bmN0aW9uIGNoZWNrSGFuZGxlUG9zaXRpb24ocmVmZXJlbmNlLCBoYW5kbGVOdW1iZXIsIHRvLCBsb29rQmFja3dhcmQsIGxvb2tGb3J3YXJkLCBnZXRWYWx1ZSwgc21vb3RoU3RlcHMpIHtcbiAgICAgICAgdmFyIGRpc3RhbmNlO1xuICAgICAgICAvLyBGb3Igc2xpZGVycyB3aXRoIG11bHRpcGxlIGhhbmRsZXMsIGxpbWl0IG1vdmVtZW50IHRvIHRoZSBvdGhlciBoYW5kbGUuXG4gICAgICAgIC8vIEFwcGx5IHRoZSBtYXJnaW4gb3B0aW9uIGJ5IGFkZGluZyBpdCB0byB0aGUgaGFuZGxlIHBvc2l0aW9ucy5cbiAgICAgICAgaWYgKHNjb3BlX0hhbmRsZXMubGVuZ3RoID4gMSAmJiAhb3B0aW9ucy5ldmVudHMudW5jb25zdHJhaW5lZCkge1xuICAgICAgICAgICAgaWYgKGxvb2tCYWNrd2FyZCAmJiBoYW5kbGVOdW1iZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKHJlZmVyZW5jZVtoYW5kbGVOdW1iZXIgLSAxXSwgb3B0aW9ucy5tYXJnaW4sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0byA9IE1hdGgubWF4KHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobG9va0ZvcndhcmQgJiYgaGFuZGxlTnVtYmVyIDwgc2NvcGVfSGFuZGxlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKHJlZmVyZW5jZVtoYW5kbGVOdW1iZXIgKyAxXSwgb3B0aW9ucy5tYXJnaW4sIHRydWUpO1xuICAgICAgICAgICAgICAgIHRvID0gTWF0aC5taW4odG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgbGltaXQgb3B0aW9uIGhhcyB0aGUgb3Bwb3NpdGUgZWZmZWN0LCBsaW1pdGluZyBoYW5kbGVzIHRvIGFcbiAgICAgICAgLy8gbWF4aW11bSBkaXN0YW5jZSBmcm9tIGFub3RoZXIuIExpbWl0IG11c3QgYmUgPiAwLCBhcyBvdGhlcndpc2VcbiAgICAgICAgLy8gaGFuZGxlcyB3b3VsZCBiZSB1bm1vdmFibGUuXG4gICAgICAgIGlmIChzY29wZV9IYW5kbGVzLmxlbmd0aCA+IDEgJiYgb3B0aW9ucy5saW1pdCkge1xuICAgICAgICAgICAgaWYgKGxvb2tCYWNrd2FyZCAmJiBoYW5kbGVOdW1iZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKHJlZmVyZW5jZVtoYW5kbGVOdW1iZXIgLSAxXSwgb3B0aW9ucy5saW1pdCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRvID0gTWF0aC5taW4odG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsb29rRm9yd2FyZCAmJiBoYW5kbGVOdW1iZXIgPCBzY29wZV9IYW5kbGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UocmVmZXJlbmNlW2hhbmRsZU51bWJlciArIDFdLCBvcHRpb25zLmxpbWl0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0byA9IE1hdGgubWF4KHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIHBhZGRpbmcgb3B0aW9uIGtlZXBzIHRoZSBoYW5kbGVzIGEgY2VydGFpbiBkaXN0YW5jZSBmcm9tIHRoZVxuICAgICAgICAvLyBlZGdlcyBvZiB0aGUgc2xpZGVyLiBQYWRkaW5nIG11c3QgYmUgPiAwLlxuICAgICAgICBpZiAob3B0aW9ucy5wYWRkaW5nKSB7XG4gICAgICAgICAgICBpZiAoaGFuZGxlTnVtYmVyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKDAsIG9wdGlvbnMucGFkZGluZ1swXSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRvID0gTWF0aC5tYXgodG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoYW5kbGVOdW1iZXIgPT09IHNjb3BlX0hhbmRsZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZSgxMDAsIG9wdGlvbnMucGFkZGluZ1sxXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1pbih0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghc21vb3RoU3RlcHMpIHtcbiAgICAgICAgICAgIHRvID0gc2NvcGVfU3BlY3RydW0uZ2V0U3RlcCh0byk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTGltaXQgcGVyY2VudGFnZSB0byB0aGUgMCAtIDEwMCByYW5nZVxuICAgICAgICB0byA9IGxpbWl0KHRvKTtcbiAgICAgICAgLy8gUmV0dXJuIGZhbHNlIGlmIGhhbmRsZSBjYW4ndCBtb3ZlXG4gICAgICAgIGlmICh0byA9PT0gcmVmZXJlbmNlW2hhbmRsZU51bWJlcl0gJiYgIWdldFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvO1xuICAgIH1cbiAgICAvLyBVc2VzIHNsaWRlciBvcmllbnRhdGlvbiB0byBjcmVhdGUgQ1NTIHJ1bGVzLiBhID0gYmFzZSB2YWx1ZTtcbiAgICBmdW5jdGlvbiBpblJ1bGVPcmRlcih2LCBhKSB7XG4gICAgICAgIHZhciBvID0gb3B0aW9ucy5vcnQ7XG4gICAgICAgIHJldHVybiAobyA/IGEgOiB2KSArIFwiLCBcIiArIChvID8gdiA6IGEpO1xuICAgIH1cbiAgICAvLyBNb3ZlcyBoYW5kbGUocykgYnkgYSBwZXJjZW50YWdlXG4gICAgLy8gKGJvb2wsICUgdG8gbW92ZSwgWyUgd2hlcmUgaGFuZGxlIHN0YXJ0ZWQsIC4uLl0sIFtpbmRleCBpbiBzY29wZV9IYW5kbGVzLCAuLi5dKVxuICAgIGZ1bmN0aW9uIG1vdmVIYW5kbGVzKHVwd2FyZCwgcHJvcG9zYWwsIGxvY2F0aW9ucywgaGFuZGxlTnVtYmVycywgY29ubmVjdCkge1xuICAgICAgICB2YXIgcHJvcG9zYWxzID0gbG9jYXRpb25zLnNsaWNlKCk7XG4gICAgICAgIC8vIFN0b3JlIGZpcnN0IGhhbmRsZSBub3csIHNvIHdlIHN0aWxsIGhhdmUgaXQgaW4gY2FzZSBoYW5kbGVOdW1iZXJzIGlzIHJldmVyc2VkXG4gICAgICAgIHZhciBmaXJzdEhhbmRsZSA9IGhhbmRsZU51bWJlcnNbMF07XG4gICAgICAgIHZhciBzbW9vdGhTdGVwcyA9IG9wdGlvbnMuZXZlbnRzLnNtb290aFN0ZXBzO1xuICAgICAgICB2YXIgYiA9IFshdXB3YXJkLCB1cHdhcmRdO1xuICAgICAgICB2YXIgZiA9IFt1cHdhcmQsICF1cHdhcmRdO1xuICAgICAgICAvLyBDb3B5IGhhbmRsZU51bWJlcnMgc28gd2UgZG9uJ3QgY2hhbmdlIHRoZSBkYXRhc2V0XG4gICAgICAgIGhhbmRsZU51bWJlcnMgPSBoYW5kbGVOdW1iZXJzLnNsaWNlKCk7XG4gICAgICAgIC8vIENoZWNrIHRvIHNlZSB3aGljaCBoYW5kbGUgaXMgJ2xlYWRpbmcnLlxuICAgICAgICAvLyBJZiB0aGF0IG9uZSBjYW4ndCBtb3ZlIHRoZSBzZWNvbmQgY2FuJ3QgZWl0aGVyLlxuICAgICAgICBpZiAodXB3YXJkKSB7XG4gICAgICAgICAgICBoYW5kbGVOdW1iZXJzLnJldmVyc2UoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTdGVwIDE6IGdldCB0aGUgbWF4aW11bSBwZXJjZW50YWdlIHRoYXQgYW55IG9mIHRoZSBoYW5kbGVzIGNhbiBtb3ZlXG4gICAgICAgIGlmIChoYW5kbGVOdW1iZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyLCBvKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRvID0gY2hlY2tIYW5kbGVQb3NpdGlvbihwcm9wb3NhbHMsIGhhbmRsZU51bWJlciwgcHJvcG9zYWxzW2hhbmRsZU51bWJlcl0gKyBwcm9wb3NhbCwgYltvXSwgZltvXSwgZmFsc2UsIHNtb290aFN0ZXBzKTtcbiAgICAgICAgICAgICAgICAvLyBTdG9wIGlmIG9uZSBvZiB0aGUgaGFuZGxlcyBjYW4ndCBtb3ZlLlxuICAgICAgICAgICAgICAgIGlmICh0byA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcG9zYWwgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcG9zYWwgPSB0byAtIHByb3Bvc2Fsc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgICAgICAgICBwcm9wb3NhbHNbaGFuZGxlTnVtYmVyXSA9IHRvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHVzaW5nIG9uZSBoYW5kbGUsIGNoZWNrIGJhY2t3YXJkIEFORCBmb3J3YXJkXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYiA9IGYgPSBbdHJ1ZV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0YXRlID0gZmFsc2U7XG4gICAgICAgIC8vIFN0ZXAgMjogVHJ5IHRvIHNldCB0aGUgaGFuZGxlcyB3aXRoIHRoZSBmb3VuZCBwZXJjZW50YWdlXG4gICAgICAgIGhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyLCBvKSB7XG4gICAgICAgICAgICBzdGF0ZSA9XG4gICAgICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgbG9jYXRpb25zW2hhbmRsZU51bWJlcl0gKyBwcm9wb3NhbCwgYltvXSwgZltvXSwgZmFsc2UsIHNtb290aFN0ZXBzKSB8fCBzdGF0ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFN0ZXAgMzogSWYgYSBoYW5kbGUgbW92ZWQsIGZpcmUgZXZlbnRzXG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzbGlkZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBJZiB0YXJnZXQgaXMgYSBjb25uZWN0LCB0aGVuIGZpcmUgZHJhZyBldmVudFxuICAgICAgICAgICAgaWYgKGNvbm5lY3QgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwiZHJhZ1wiLCBmaXJzdEhhbmRsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gVGFrZXMgYSBiYXNlIHZhbHVlIGFuZCBhbiBvZmZzZXQuIFRoaXMgb2Zmc2V0IGlzIHVzZWQgZm9yIHRoZSBjb25uZWN0IGJhciBzaXplLlxuICAgIC8vIEluIHRoZSBpbml0aWFsIGRlc2lnbiBmb3IgdGhpcyBmZWF0dXJlLCB0aGUgb3JpZ2luIGVsZW1lbnQgd2FzIDElIHdpZGUuXG4gICAgLy8gVW5mb3J0dW5hdGVseSwgYSByb3VuZGluZyBidWcgaW4gQ2hyb21lIG1ha2VzIGl0IGltcG9zc2libGUgdG8gaW1wbGVtZW50IHRoaXMgZmVhdHVyZVxuICAgIC8vIGluIHRoaXMgbWFubmVyOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD03OTgyMjNcbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1EaXJlY3Rpb24oYSwgYikge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5kaXIgPyAxMDAgLSBhIC0gYiA6IGE7XG4gICAgfVxuICAgIC8vIFVwZGF0ZXMgc2NvcGVfTG9jYXRpb25zIGFuZCBzY29wZV9WYWx1ZXMsIHVwZGF0ZXMgdmlzdWFsIHN0YXRlXG4gICAgZnVuY3Rpb24gdXBkYXRlSGFuZGxlUG9zaXRpb24oaGFuZGxlTnVtYmVyLCB0bykge1xuICAgICAgICAvLyBVcGRhdGUgbG9jYXRpb25zLlxuICAgICAgICBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSA9IHRvO1xuICAgICAgICAvLyBDb252ZXJ0IHRoZSB2YWx1ZSB0byB0aGUgc2xpZGVyIHN0ZXBwaW5nL3JhbmdlLlxuICAgICAgICBzY29wZV9WYWx1ZXNbaGFuZGxlTnVtYmVyXSA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyh0byk7XG4gICAgICAgIHZhciB0cmFuc2xhdGlvbiA9IHRyYW5zZm9ybURpcmVjdGlvbih0bywgMCkgLSBzY29wZV9EaXJPZmZzZXQ7XG4gICAgICAgIHZhciB0cmFuc2xhdGVSdWxlID0gXCJ0cmFuc2xhdGUoXCIgKyBpblJ1bGVPcmRlcih0cmFuc2xhdGlvbiArIFwiJVwiLCBcIjBcIikgKyBcIilcIjtcbiAgICAgICAgc2NvcGVfSGFuZGxlc1toYW5kbGVOdW1iZXJdLnN0eWxlW29wdGlvbnMudHJhbnNmb3JtUnVsZV0gPSB0cmFuc2xhdGVSdWxlO1xuICAgICAgICAvLyBzYW5pdHkgY2hlY2sgZm9yIGF0IGxlYXN0IDIgaGFuZGxlcyAoZS5nLiBkdXJpbmcgc2V0dXApXG4gICAgICAgIGlmIChvcHRpb25zLmV2ZW50cy5pbnZlcnRDb25uZWN0cyAmJiBzY29wZV9Mb2NhdGlvbnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgLy8gY2hlY2sgaWYgaGFuZGxlcyBwYXNzZWQgZWFjaCBvdGhlciwgYnV0IGRvbid0IG1hdGNoIHRoZSBDb25uZWN0c0ludmVydGVkIHN0YXRlXG4gICAgICAgICAgICB2YXIgaGFuZGxlc0FyZUluT3JkZXIgPSBzY29wZV9Mb2NhdGlvbnMuZXZlcnkoZnVuY3Rpb24gKHBvc2l0aW9uLCBpbmRleCwgbG9jYXRpb25zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4ID09PSAwIHx8IHBvc2l0aW9uID49IGxvY2F0aW9uc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoc2NvcGVfQ29ubmVjdHNJbnZlcnRlZCAhPT0gIWhhbmRsZXNBcmVJbk9yZGVyKSB7XG4gICAgICAgICAgICAgICAgLy8gaW52ZXJ0IGNvbm5lY3RzIHdoZW4gaGFuZGxlcyBwYXNzIGVhY2ggb3RoZXJcbiAgICAgICAgICAgICAgICBpbnZlcnRDb25uZWN0cygpO1xuICAgICAgICAgICAgICAgIC8vIGludmVydENvbm5lY3RzIGFscmVhZHkgdXBkYXRlcyBhbGwgY29ubmVjdCBlbGVtZW50c1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVDb25uZWN0KGhhbmRsZU51bWJlcik7XG4gICAgICAgIHVwZGF0ZUNvbm5lY3QoaGFuZGxlTnVtYmVyICsgMSk7XG4gICAgICAgIGlmIChzY29wZV9Db25uZWN0c0ludmVydGVkKSB7XG4gICAgICAgICAgICAvLyBXaGVuIGNvbm5lY3RzIGFyZSBpbnZlcnRlZCwgd2UgYWxzbyBoYXZlIHRvIHVwZGF0ZSBhZGphY2VudCBjb25uZWN0c1xuICAgICAgICAgICAgdXBkYXRlQ29ubmVjdChoYW5kbGVOdW1iZXIgLSAxKTtcbiAgICAgICAgICAgIHVwZGF0ZUNvbm5lY3QoaGFuZGxlTnVtYmVyICsgMik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSGFuZGxlcyBiZWZvcmUgdGhlIHNsaWRlciBtaWRkbGUgYXJlIHN0YWNrZWQgbGF0ZXIgPSBoaWdoZXIsXG4gICAgLy8gSGFuZGxlcyBhZnRlciB0aGUgbWlkZGxlIGxhdGVyIGlzIGxvd2VyXG4gICAgLy8gW1s3XSBbOF0gLi4uLi4uLi4uLiB8IC4uLi4uLi4uLi4gWzVdIFs0XVxuICAgIGZ1bmN0aW9uIHNldFppbmRleCgpIHtcbiAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBkaXIgPSBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSA+IDUwID8gLTEgOiAxO1xuICAgICAgICAgICAgdmFyIHpJbmRleCA9IDMgKyAoc2NvcGVfSGFuZGxlcy5sZW5ndGggKyBkaXIgKiBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlc1toYW5kbGVOdW1iZXJdLnN0eWxlLnpJbmRleCA9IFN0cmluZyh6SW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gVGVzdCBzdWdnZXN0ZWQgdmFsdWVzIGFuZCBhcHBseSBtYXJnaW4sIHN0ZXAuXG4gICAgLy8gaWYgZXhhY3RJbnB1dCBpcyB0cnVlLCBkb24ndCBydW4gY2hlY2tIYW5kbGVQb3NpdGlvbiwgdGhlbiB0aGUgaGFuZGxlIGNhbiBiZSBwbGFjZWQgaW4gYmV0d2VlbiBzdGVwcyAoIzQzNilcbiAgICBmdW5jdGlvbiBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCB0bywgbG9va0JhY2t3YXJkLCBsb29rRm9yd2FyZCwgZXhhY3RJbnB1dCwgc21vb3RoU3RlcHMpIHtcbiAgICAgICAgaWYgKCFleGFjdElucHV0KSB7XG4gICAgICAgICAgICB0byA9IGNoZWNrSGFuZGxlUG9zaXRpb24oc2NvcGVfTG9jYXRpb25zLCBoYW5kbGVOdW1iZXIsIHRvLCBsb29rQmFja3dhcmQsIGxvb2tGb3J3YXJkLCBmYWxzZSwgc21vb3RoU3RlcHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0byA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVIYW5kbGVQb3NpdGlvbihoYW5kbGVOdW1iZXIsIHRvKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIFVwZGF0ZXMgc3R5bGUgYXR0cmlidXRlIGZvciBjb25uZWN0IG5vZGVzXG4gICAgZnVuY3Rpb24gdXBkYXRlQ29ubmVjdChpbmRleCkge1xuICAgICAgICAvLyBTa2lwIGNvbm5lY3RzIHNldCB0byBmYWxzZVxuICAgICAgICBpZiAoIXNjb3BlX0Nvbm5lY3RzW2luZGV4XSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIENyZWF0ZSBhIGNvcHkgb2YgbG9jYXRpb25zLCBzbyB3ZSBjYW4gc29ydCB0aGVtIGZvciB0aGUgbG9jYWwgc2NvcGUgbG9naWNcbiAgICAgICAgdmFyIGxvY2F0aW9ucyA9IHNjb3BlX0xvY2F0aW9ucy5zbGljZSgpO1xuICAgICAgICBpZiAoc2NvcGVfQ29ubmVjdHNJbnZlcnRlZCkge1xuICAgICAgICAgICAgbG9jYXRpb25zLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbCA9IDA7XG4gICAgICAgIHZhciBoID0gMTAwO1xuICAgICAgICBpZiAoaW5kZXggIT09IDApIHtcbiAgICAgICAgICAgIGwgPSBsb2NhdGlvbnNbaW5kZXggLSAxXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggIT09IHNjb3BlX0Nvbm5lY3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGggPSBsb2NhdGlvbnNbaW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdlIHVzZSB0d28gcnVsZXM6XG4gICAgICAgIC8vICd0cmFuc2xhdGUnIHRvIGNoYW5nZSB0aGUgbGVmdC90b3Agb2Zmc2V0O1xuICAgICAgICAvLyAnc2NhbGUnIHRvIGNoYW5nZSB0aGUgd2lkdGggb2YgdGhlIGVsZW1lbnQ7XG4gICAgICAgIC8vIEFzIHRoZSBlbGVtZW50IGhhcyBhIHdpZHRoIG9mIDEwMCUsIGEgdHJhbnNsYXRpb24gb2YgMTAwJSBpcyBlcXVhbCB0byAxMDAlIG9mIHRoZSBwYXJlbnQgKC5ub1VpLWJhc2UpXG4gICAgICAgIHZhciBjb25uZWN0V2lkdGggPSBoIC0gbDtcbiAgICAgICAgdmFyIHRyYW5zbGF0ZVJ1bGUgPSBcInRyYW5zbGF0ZShcIiArIGluUnVsZU9yZGVyKHRyYW5zZm9ybURpcmVjdGlvbihsLCBjb25uZWN0V2lkdGgpICsgXCIlXCIsIFwiMFwiKSArIFwiKVwiO1xuICAgICAgICB2YXIgc2NhbGVSdWxlID0gXCJzY2FsZShcIiArIGluUnVsZU9yZGVyKGNvbm5lY3RXaWR0aCAvIDEwMCwgXCIxXCIpICsgXCIpXCI7XG4gICAgICAgIHNjb3BlX0Nvbm5lY3RzW2luZGV4XS5zdHlsZVtvcHRpb25zLnRyYW5zZm9ybVJ1bGVdID1cbiAgICAgICAgICAgIHRyYW5zbGF0ZVJ1bGUgKyBcIiBcIiArIHNjYWxlUnVsZTtcbiAgICB9XG4gICAgLy8gUGFyc2VzIHZhbHVlIHBhc3NlZCB0byAuc2V0IG1ldGhvZC4gUmV0dXJucyBjdXJyZW50IHZhbHVlIGlmIG5vdCBwYXJzZS1hYmxlLlxuICAgIGZ1bmN0aW9uIHJlc29sdmVUb1ZhbHVlKHRvLCBoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgLy8gU2V0dGluZyB3aXRoIG51bGwgaW5kaWNhdGVzIGFuICdpZ25vcmUnLlxuICAgICAgICAvLyBJbnB1dHRpbmcgJ2ZhbHNlJyBpcyBpbnZhbGlkLlxuICAgICAgICBpZiAodG8gPT09IG51bGwgfHwgdG8gPT09IGZhbHNlIHx8IHRvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBhIGZvcm1hdHRlZCBudW1iZXIgd2FzIHBhc3NlZCwgYXR0ZW1wdCB0byBkZWNvZGUgaXQuXG4gICAgICAgIGlmICh0eXBlb2YgdG8gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRvID0gU3RyaW5nKHRvKTtcbiAgICAgICAgfVxuICAgICAgICB0byA9IG9wdGlvbnMuZm9ybWF0LmZyb20odG8pO1xuICAgICAgICBpZiAodG8gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0byA9IHNjb3BlX1NwZWN0cnVtLnRvU3RlcHBpbmcodG8pO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHBhcnNpbmcgdGhlIG51bWJlciBmYWlsZWQsIHVzZSB0aGUgY3VycmVudCB2YWx1ZS5cbiAgICAgICAgaWYgKHRvID09PSBmYWxzZSB8fCBpc05hTih0bykpIHtcbiAgICAgICAgICAgIHJldHVybiBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG87XG4gICAgfVxuICAgIC8vIFNldCB0aGUgc2xpZGVyIHZhbHVlLlxuICAgIGZ1bmN0aW9uIHZhbHVlU2V0KGlucHV0LCBmaXJlU2V0RXZlbnQsIGV4YWN0SW5wdXQpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IGFzQXJyYXkoaW5wdXQpO1xuICAgICAgICB2YXIgaXNJbml0ID0gc2NvcGVfTG9jYXRpb25zWzBdID09PSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIEV2ZW50IGZpcmVzIGJ5IGRlZmF1bHRcbiAgICAgICAgZmlyZVNldEV2ZW50ID0gZmlyZVNldEV2ZW50ID09PSB1bmRlZmluZWQgPyB0cnVlIDogZmlyZVNldEV2ZW50O1xuICAgICAgICAvLyBBbmltYXRpb24gaXMgb3B0aW9uYWwuXG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgaW5pdGlhbCB2YWx1ZXMgd2VyZSBzZXQgYmVmb3JlIHVzaW5nIGFuaW1hdGVkIHBsYWNlbWVudC5cbiAgICAgICAgaWYgKG9wdGlvbnMuYW5pbWF0ZSAmJiAhaXNJbml0KSB7XG4gICAgICAgICAgICBhZGRDbGFzc0ZvcihzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50YXAsIG9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHBhc3MsIHdpdGhvdXQgbG9va0FoZWFkIGJ1dCB3aXRoIGxvb2tCYWNrd2FyZC4gVmFsdWVzIGFyZSBzZXQgZnJvbSBsZWZ0IHRvIHJpZ2h0LlxuICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgcmVzb2x2ZVRvVmFsdWUodmFsdWVzW2hhbmRsZU51bWJlcl0sIGhhbmRsZU51bWJlciksIHRydWUsIGZhbHNlLCBleGFjdElucHV0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBpID0gc2NvcGVfSGFuZGxlTnVtYmVycy5sZW5ndGggPT09IDEgPyAwIDogMTtcbiAgICAgICAgLy8gU3ByZWFkIGhhbmRsZXMgZXZlbmx5IGFjcm9zcyB0aGUgc2xpZGVyIGlmIHRoZSByYW5nZSBoYXMgbm8gc2l6ZSAobWluPW1heClcbiAgICAgICAgaWYgKGlzSW5pdCAmJiBzY29wZV9TcGVjdHJ1bS5oYXNOb1NpemUoKSkge1xuICAgICAgICAgICAgZXhhY3RJbnB1dCA9IHRydWU7XG4gICAgICAgICAgICBzY29wZV9Mb2NhdGlvbnNbMF0gPSAwO1xuICAgICAgICAgICAgaWYgKHNjb3BlX0hhbmRsZU51bWJlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHZhciBzcGFjZV8xID0gMTAwIC8gKHNjb3BlX0hhbmRsZU51bWJlcnMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0gPSBoYW5kbGVOdW1iZXIgKiBzcGFjZV8xO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFNlY29uZGFyeSBwYXNzZXMuIE5vdyB0aGF0IGFsbCBiYXNlIHZhbHVlcyBhcmUgc2V0LCBhcHBseSBjb25zdHJhaW50cy5cbiAgICAgICAgLy8gSXRlcmF0ZSBhbGwgaGFuZGxlcyB0byBlbnN1cmUgY29uc3RyYWludHMgYXJlIGFwcGxpZWQgZm9yIHRoZSBlbnRpcmUgc2xpZGVyIChJc3N1ZSAjMTAwOSlcbiAgICAgICAgZm9yICg7IGkgPCBzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdLCB0cnVlLCB0cnVlLCBleGFjdElucHV0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHNldFppbmRleCgpO1xuICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAvLyBGaXJlIHRoZSBldmVudCBvbmx5IGZvciBoYW5kbGVzIHRoYXQgcmVjZWl2ZWQgYSBuZXcgdmFsdWUsIGFzIHBlciAjNTc5XG4gICAgICAgICAgICBpZiAodmFsdWVzW2hhbmRsZU51bWJlcl0gIT09IG51bGwgJiYgZmlyZVNldEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBSZXNldCBzbGlkZXIgdG8gaW5pdGlhbCB2YWx1ZXNcbiAgICBmdW5jdGlvbiB2YWx1ZVJlc2V0KGZpcmVTZXRFdmVudCkge1xuICAgICAgICB2YWx1ZVNldChvcHRpb25zLnN0YXJ0LCBmaXJlU2V0RXZlbnQpO1xuICAgIH1cbiAgICAvLyBTZXQgdmFsdWUgZm9yIGEgc2luZ2xlIGhhbmRsZVxuICAgIGZ1bmN0aW9uIHZhbHVlU2V0SGFuZGxlKGhhbmRsZU51bWJlciwgdmFsdWUsIGZpcmVTZXRFdmVudCwgZXhhY3RJbnB1dCkge1xuICAgICAgICAvLyBFbnN1cmUgbnVtZXJpYyBpbnB1dFxuICAgICAgICBoYW5kbGVOdW1iZXIgPSBOdW1iZXIoaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgaWYgKCEoaGFuZGxlTnVtYmVyID49IDAgJiYgaGFuZGxlTnVtYmVyIDwgc2NvcGVfSGFuZGxlTnVtYmVycy5sZW5ndGgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBpbnZhbGlkIGhhbmRsZSBudW1iZXIsIGdvdDogXCIgKyBoYW5kbGVOdW1iZXIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIExvb2sgYm90aCBiYWNrd2FyZCBhbmQgZm9yd2FyZCwgc2luY2Ugd2UgZG9uJ3Qgd2FudCB0aGlzIGhhbmRsZSB0byBcInB1c2hcIiBvdGhlciBoYW5kbGVzICgjOTYwKTtcbiAgICAgICAgLy8gVGhlIGV4YWN0SW5wdXQgYXJndW1lbnQgY2FuIGJlIHVzZWQgdG8gaWdub3JlIHNsaWRlciBzdGVwcGluZyAoIzQzNilcbiAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgcmVzb2x2ZVRvVmFsdWUodmFsdWUsIGhhbmRsZU51bWJlciksIHRydWUsIHRydWUsIGV4YWN0SW5wdXQpO1xuICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgaWYgKGZpcmVTZXRFdmVudCkge1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gR2V0IHRoZSBzbGlkZXIgdmFsdWUuXG4gICAgZnVuY3Rpb24gdmFsdWVHZXQodW5lbmNvZGVkKSB7XG4gICAgICAgIGlmICh1bmVuY29kZWQgPT09IHZvaWQgMCkgeyB1bmVuY29kZWQgPSBmYWxzZTsgfVxuICAgICAgICBpZiAodW5lbmNvZGVkKSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gYSBjb3B5IG9mIHRoZSByYXcgdmFsdWVzXG4gICAgICAgICAgICByZXR1cm4gc2NvcGVfVmFsdWVzLmxlbmd0aCA9PT0gMSA/IHNjb3BlX1ZhbHVlc1swXSA6IHNjb3BlX1ZhbHVlcy5zbGljZSgwKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWVzID0gc2NvcGVfVmFsdWVzLm1hcChvcHRpb25zLmZvcm1hdC50byk7XG4gICAgICAgIC8vIElmIG9ubHkgb25lIGhhbmRsZSBpcyB1c2VkLCByZXR1cm4gYSBzaW5nbGUgdmFsdWUuXG4gICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfVxuICAgIC8vIFJlbW92ZXMgY2xhc3NlcyBmcm9tIHRoZSByb290IGFuZCBlbXB0aWVzIGl0LlxuICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIC8vIHJlbW92ZSBwcm90ZWN0ZWQgaW50ZXJuYWwgbGlzdGVuZXJzXG4gICAgICAgIHJlbW92ZUV2ZW50KElOVEVSTkFMX0VWRU5UX05TLmFyaWEpO1xuICAgICAgICByZW1vdmVFdmVudChJTlRFUk5BTF9FVkVOVF9OUy50b29sdGlwcyk7XG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMuY3NzQ2xhc3NlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICByZW1vdmVDbGFzcyhzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlc1trZXldKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHdoaWxlIChzY29wZV9UYXJnZXQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgc2NvcGVfVGFyZ2V0LnJlbW92ZUNoaWxkKHNjb3BlX1RhcmdldC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc2NvcGVfVGFyZ2V0Lm5vVWlTbGlkZXI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldE5leHRTdGVwc0ZvckhhbmRsZShoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl07XG4gICAgICAgIHZhciBuZWFyYnlTdGVwcyA9IHNjb3BlX1NwZWN0cnVtLmdldE5lYXJieVN0ZXBzKGxvY2F0aW9uKTtcbiAgICAgICAgdmFyIHZhbHVlID0gc2NvcGVfVmFsdWVzW2hhbmRsZU51bWJlcl07XG4gICAgICAgIHZhciBpbmNyZW1lbnQgPSBuZWFyYnlTdGVwcy50aGlzU3RlcC5zdGVwO1xuICAgICAgICB2YXIgZGVjcmVtZW50ID0gbnVsbDtcbiAgICAgICAgLy8gSWYgc25hcHBlZCwgZGlyZWN0bHkgdXNlIGRlZmluZWQgc3RlcCB2YWx1ZVxuICAgICAgICBpZiAob3B0aW9ucy5zbmFwKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIHZhbHVlIC0gbmVhcmJ5U3RlcHMuc3RlcEJlZm9yZS5zdGFydFZhbHVlIHx8IG51bGwsXG4gICAgICAgICAgICAgICAgbmVhcmJ5U3RlcHMuc3RlcEFmdGVyLnN0YXJ0VmFsdWUgLSB2YWx1ZSB8fCBudWxsLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgbmV4dCB2YWx1ZSBpbiB0aGlzIHN0ZXAgbW92ZXMgaW50byB0aGUgbmV4dCBzdGVwLFxuICAgICAgICAvLyB0aGUgaW5jcmVtZW50IGlzIHRoZSBzdGFydCBvZiB0aGUgbmV4dCBzdGVwIC0gdGhlIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgaWYgKGluY3JlbWVudCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSArIGluY3JlbWVudCA+IG5lYXJieVN0ZXBzLnN0ZXBBZnRlci5zdGFydFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaW5jcmVtZW50ID0gbmVhcmJ5U3RlcHMuc3RlcEFmdGVyLnN0YXJ0VmFsdWUgLSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdmFsdWUgaXMgYmV5b25kIHRoZSBzdGFydGluZyBwb2ludFxuICAgICAgICBpZiAodmFsdWUgPiBuZWFyYnlTdGVwcy50aGlzU3RlcC5zdGFydFZhbHVlKSB7XG4gICAgICAgICAgICBkZWNyZW1lbnQgPSBuZWFyYnlTdGVwcy50aGlzU3RlcC5zdGVwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5lYXJieVN0ZXBzLnN0ZXBCZWZvcmUuc3RlcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGRlY3JlbWVudCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGEgaGFuZGxlIGlzIGF0IHRoZSBzdGFydCBvZiBhIHN0ZXAsIGl0IGFsd2F5cyBzdGVwcyBiYWNrIGludG8gdGhlIHByZXZpb3VzIHN0ZXAgZmlyc3RcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWNyZW1lbnQgPSB2YWx1ZSAtIG5lYXJieVN0ZXBzLnN0ZXBCZWZvcmUuaGlnaGVzdFN0ZXA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm93LCBpZiBhdCB0aGUgc2xpZGVyIGVkZ2VzLCB0aGVyZSBpcyBubyBpbi9kZWNyZW1lbnRcbiAgICAgICAgaWYgKGxvY2F0aW9uID09PSAxMDApIHtcbiAgICAgICAgICAgIGluY3JlbWVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobG9jYXRpb24gPT09IDApIHtcbiAgICAgICAgICAgIGRlY3JlbWVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXMgcGVyICMzOTEsIHRoZSBjb21wYXJpc29uIGZvciB0aGUgZGVjcmVtZW50IHN0ZXAgY2FuIGhhdmUgc29tZSByb3VuZGluZyBpc3N1ZXMuXG4gICAgICAgIHZhciBzdGVwRGVjaW1hbHMgPSBzY29wZV9TcGVjdHJ1bS5jb3VudFN0ZXBEZWNpbWFscygpO1xuICAgICAgICAvLyBSb3VuZCBwZXIgIzM5MVxuICAgICAgICBpZiAoaW5jcmVtZW50ICE9PSBudWxsICYmIGluY3JlbWVudCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGluY3JlbWVudCA9IE51bWJlcihpbmNyZW1lbnQudG9GaXhlZChzdGVwRGVjaW1hbHMpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVjcmVtZW50ICE9PSBudWxsICYmIGRlY3JlbWVudCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGRlY3JlbWVudCA9IE51bWJlcihkZWNyZW1lbnQudG9GaXhlZChzdGVwRGVjaW1hbHMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2RlY3JlbWVudCwgaW5jcmVtZW50XTtcbiAgICB9XG4gICAgLy8gR2V0IHRoZSBjdXJyZW50IHN0ZXAgc2l6ZSBmb3IgdGhlIHNsaWRlci5cbiAgICBmdW5jdGlvbiBnZXROZXh0U3RlcHMoKSB7XG4gICAgICAgIHJldHVybiBzY29wZV9IYW5kbGVOdW1iZXJzLm1hcChnZXROZXh0U3RlcHNGb3JIYW5kbGUpO1xuICAgIH1cbiAgICAvLyBVcGRhdGFibGU6IG1hcmdpbiwgbGltaXQsIHBhZGRpbmcsIHN0ZXAsIHJhbmdlLCBhbmltYXRlLCBzbmFwXG4gICAgZnVuY3Rpb24gdXBkYXRlT3B0aW9ucyhvcHRpb25zVG9VcGRhdGUsIGZpcmVTZXRFdmVudCkge1xuICAgICAgICAvLyBTcGVjdHJ1bSBpcyBjcmVhdGVkIHVzaW5nIHRoZSByYW5nZSwgc25hcCwgZGlyZWN0aW9uIGFuZCBzdGVwIG9wdGlvbnMuXG4gICAgICAgIC8vICdzbmFwJyBhbmQgJ3N0ZXAnIGNhbiBiZSB1cGRhdGVkLlxuICAgICAgICAvLyBJZiAnc25hcCcgYW5kICdzdGVwJyBhcmUgbm90IHBhc3NlZCwgdGhleSBzaG91bGQgcmVtYWluIHVuY2hhbmdlZC5cbiAgICAgICAgdmFyIHYgPSB2YWx1ZUdldCgpO1xuICAgICAgICB2YXIgdXBkYXRlQWJsZSA9IFtcbiAgICAgICAgICAgIFwibWFyZ2luXCIsXG4gICAgICAgICAgICBcImxpbWl0XCIsXG4gICAgICAgICAgICBcInBhZGRpbmdcIixcbiAgICAgICAgICAgIFwicmFuZ2VcIixcbiAgICAgICAgICAgIFwiYW5pbWF0ZVwiLFxuICAgICAgICAgICAgXCJzbmFwXCIsXG4gICAgICAgICAgICBcInN0ZXBcIixcbiAgICAgICAgICAgIFwiZm9ybWF0XCIsXG4gICAgICAgICAgICBcInBpcHNcIixcbiAgICAgICAgICAgIFwidG9vbHRpcHNcIixcbiAgICAgICAgICAgIFwiY29ubmVjdFwiLFxuICAgICAgICBdO1xuICAgICAgICAvLyBPbmx5IGNoYW5nZSBvcHRpb25zIHRoYXQgd2UncmUgYWN0dWFsbHkgcGFzc2VkIHRvIHVwZGF0ZS5cbiAgICAgICAgdXBkYXRlQWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgdW5kZWZpbmVkLiBudWxsIHJlbW92ZXMgdGhlIHZhbHVlLlxuICAgICAgICAgICAgaWYgKG9wdGlvbnNUb1VwZGF0ZVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxPcHRpb25zW25hbWVdID0gb3B0aW9uc1RvVXBkYXRlW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG5ld09wdGlvbnMgPSB0ZXN0T3B0aW9ucyhvcmlnaW5hbE9wdGlvbnMpO1xuICAgICAgICAvLyBMb2FkIG5ldyBvcHRpb25zIGludG8gdGhlIHNsaWRlciBzdGF0ZVxuICAgICAgICB1cGRhdGVBYmxlLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zVG9VcGRhdGVbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnNbbmFtZV0gPSBuZXdPcHRpb25zW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2NvcGVfU3BlY3RydW0gPSBuZXdPcHRpb25zLnNwZWN0cnVtO1xuICAgICAgICAvLyBMaW1pdCwgbWFyZ2luIGFuZCBwYWRkaW5nIGRlcGVuZCBvbiB0aGUgc3BlY3RydW0gYnV0IGFyZSBzdG9yZWQgb3V0c2lkZSBvZiBpdC4gKCM2NzcpXG4gICAgICAgIG9wdGlvbnMubWFyZ2luID0gbmV3T3B0aW9ucy5tYXJnaW47XG4gICAgICAgIG9wdGlvbnMubGltaXQgPSBuZXdPcHRpb25zLmxpbWl0O1xuICAgICAgICBvcHRpb25zLnBhZGRpbmcgPSBuZXdPcHRpb25zLnBhZGRpbmc7XG4gICAgICAgIC8vIFVwZGF0ZSBwaXBzLCByZW1vdmVzIGV4aXN0aW5nLlxuICAgICAgICBpZiAob3B0aW9ucy5waXBzKSB7XG4gICAgICAgICAgICBwaXBzKG9wdGlvbnMucGlwcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZW1vdmVQaXBzKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRlIHRvb2x0aXBzLCByZW1vdmVzIGV4aXN0aW5nLlxuICAgICAgICBpZiAob3B0aW9ucy50b29sdGlwcykge1xuICAgICAgICAgICAgdG9vbHRpcHMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlbW92ZVRvb2x0aXBzKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW52YWxpZGF0ZSB0aGUgY3VycmVudCBwb3NpdGlvbmluZyBzbyB2YWx1ZVNldCBmb3JjZXMgYW4gdXBkYXRlLlxuICAgICAgICBzY29wZV9Mb2NhdGlvbnMgPSBbXTtcbiAgICAgICAgdmFsdWVTZXQoaXNTZXQob3B0aW9uc1RvVXBkYXRlLnN0YXJ0KSA/IG9wdGlvbnNUb1VwZGF0ZS5zdGFydCA6IHYsIGZpcmVTZXRFdmVudCk7XG4gICAgICAgIC8vIFVwZGF0ZSBjb25uZWN0cyBvbmx5IGlmIGl0IHdhcyBzZXRcbiAgICAgICAgaWYgKG9wdGlvbnNUb1VwZGF0ZS5jb25uZWN0KSB7XG4gICAgICAgICAgICB1cGRhdGVDb25uZWN0T3B0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlQ29ubmVjdE9wdGlvbigpIHtcbiAgICAgICAgLy8gSUUgc3VwcG9ydGVkIHdheSBvZiByZW1vdmluZyBjaGlsZHJlbiBpbmNsdWRpbmcgZXZlbnQgaGFuZGxlcnNcbiAgICAgICAgd2hpbGUgKHNjb3BlX0Nvbm5lY3RCYXNlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RCYXNlLnJlbW92ZUNoaWxkKHNjb3BlX0Nvbm5lY3RCYXNlLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZGluZyBuZXcgY29ubmVjdHMgYWNjb3JkaW5nIHRvIHRoZSBuZXcgY29ubmVjdCBvcHRpb25zXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IG9wdGlvbnMuaGFuZGxlczsgaSsrKSB7XG4gICAgICAgICAgICBzY29wZV9Db25uZWN0c1tpXSA9IGFkZENvbm5lY3Qoc2NvcGVfQ29ubmVjdEJhc2UsIG9wdGlvbnMuY29ubmVjdFtpXSk7XG4gICAgICAgICAgICB1cGRhdGVDb25uZWN0KGkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlLWFkZGluZyBkcmFnIGV2ZW50cyBmb3IgdGhlIG5ldyBjb25uZWN0IGVsZW1lbnRzXG4gICAgICAgIC8vIHRvIGlnbm9yZSB0aGUgb3RoZXIgZXZlbnRzIHdlIGhhdmUgdG8gbmVnYXRlIHRoZSAnaWYgKCFiZWhhdmlvdXIuZml4ZWQpJyBjaGVja1xuICAgICAgICBiaW5kU2xpZGVyRXZlbnRzKHsgZHJhZzogb3B0aW9ucy5ldmVudHMuZHJhZywgZml4ZWQ6IHRydWUgfSk7XG4gICAgfVxuICAgIC8vIEludmVydCBvcHRpb25zIGZvciBjb25uZWN0IGhhbmRsZXNcbiAgICBmdW5jdGlvbiBpbnZlcnRDb25uZWN0cygpIHtcbiAgICAgICAgc2NvcGVfQ29ubmVjdHNJbnZlcnRlZCA9ICFzY29wZV9Db25uZWN0c0ludmVydGVkO1xuICAgICAgICB0ZXN0Q29ubmVjdChvcHRpb25zLCBcbiAgICAgICAgLy8gaW52ZXJzZSB0aGUgY29ubmVjdCBib29sZWFuIGFycmF5XG4gICAgICAgIG9wdGlvbnMuY29ubmVjdC5tYXAoZnVuY3Rpb24gKGIpIHsgcmV0dXJuICFiOyB9KSk7XG4gICAgICAgIHVwZGF0ZUNvbm5lY3RPcHRpb24oKTtcbiAgICB9XG4gICAgLy8gSW5pdGlhbGl6YXRpb24gc3RlcHNcbiAgICBmdW5jdGlvbiBzZXR1cFNsaWRlcigpIHtcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBiYXNlIGVsZW1lbnQsIGluaXRpYWxpemUgSFRNTCBhbmQgc2V0IGNsYXNzZXMuXG4gICAgICAgIC8vIEFkZCBoYW5kbGVzIGFuZCBjb25uZWN0IGVsZW1lbnRzLlxuICAgICAgICBzY29wZV9CYXNlID0gYWRkU2xpZGVyKHNjb3BlX1RhcmdldCk7XG4gICAgICAgIGFkZEVsZW1lbnRzKG9wdGlvbnMuY29ubmVjdCwgc2NvcGVfQmFzZSk7XG4gICAgICAgIC8vIEF0dGFjaCB1c2VyIGV2ZW50cy5cbiAgICAgICAgYmluZFNsaWRlckV2ZW50cyhvcHRpb25zLmV2ZW50cyk7XG4gICAgICAgIC8vIFVzZSB0aGUgcHVibGljIHZhbHVlIG1ldGhvZCB0byBzZXQgdGhlIHN0YXJ0IHZhbHVlcy5cbiAgICAgICAgdmFsdWVTZXQob3B0aW9ucy5zdGFydCk7XG4gICAgICAgIGlmIChvcHRpb25zLnBpcHMpIHtcbiAgICAgICAgICAgIHBpcHMob3B0aW9ucy5waXBzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy50b29sdGlwcykge1xuICAgICAgICAgICAgdG9vbHRpcHMoKTtcbiAgICAgICAgfVxuICAgICAgICBhcmlhKCk7XG4gICAgfVxuICAgIHNldHVwU2xpZGVyKCk7XG4gICAgdmFyIHNjb3BlX1NlbGYgPSB7XG4gICAgICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgICAgIHN0ZXBzOiBnZXROZXh0U3RlcHMsXG4gICAgICAgIG9uOiBiaW5kRXZlbnQsXG4gICAgICAgIG9mZjogcmVtb3ZlRXZlbnQsXG4gICAgICAgIGdldDogdmFsdWVHZXQsXG4gICAgICAgIHNldDogdmFsdWVTZXQsXG4gICAgICAgIHNldEhhbmRsZTogdmFsdWVTZXRIYW5kbGUsXG4gICAgICAgIHJlc2V0OiB2YWx1ZVJlc2V0LFxuICAgICAgICBkaXNhYmxlOiBkaXNhYmxlLFxuICAgICAgICBlbmFibGU6IGVuYWJsZSxcbiAgICAgICAgLy8gRXhwb3NlZCBmb3IgdW5pdCB0ZXN0aW5nLCBkb24ndCB1c2UgdGhpcyBpbiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgICAgICBfX21vdmVIYW5kbGVzOiBmdW5jdGlvbiAodXB3YXJkLCBwcm9wb3NhbCwgaGFuZGxlTnVtYmVycykge1xuICAgICAgICAgICAgbW92ZUhhbmRsZXModXB3YXJkLCBwcm9wb3NhbCwgc2NvcGVfTG9jYXRpb25zLCBoYW5kbGVOdW1iZXJzKTtcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczogb3JpZ2luYWxPcHRpb25zLFxuICAgICAgICB1cGRhdGVPcHRpb25zOiB1cGRhdGVPcHRpb25zLFxuICAgICAgICB0YXJnZXQ6IHNjb3BlX1RhcmdldCxcbiAgICAgICAgcmVtb3ZlUGlwczogcmVtb3ZlUGlwcyxcbiAgICAgICAgcmVtb3ZlVG9vbHRpcHM6IHJlbW92ZVRvb2x0aXBzLFxuICAgICAgICBnZXRQb3NpdGlvbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzY29wZV9Mb2NhdGlvbnMuc2xpY2UoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0VG9vbHRpcHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzY29wZV9Ub29sdGlwcztcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0T3JpZ2luczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlX0hhbmRsZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHBpcHM6IHBpcHMsIC8vIElzc3VlICM1OTRcbiAgICB9O1xuICAgIHJldHVybiBzY29wZV9TZWxmO1xufVxuLy8gUnVuIHRoZSBzdGFuZGFyZCBpbml0aWFsaXplclxuZnVuY3Rpb24gaW5pdGlhbGl6ZSh0YXJnZXQsIG9yaWdpbmFsT3B0aW9ucykge1xuICAgIGlmICghdGFyZ2V0IHx8ICF0YXJnZXQubm9kZU5hbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogY3JlYXRlIHJlcXVpcmVzIGEgc2luZ2xlIGVsZW1lbnQsIGdvdDogXCIgKyB0YXJnZXQpO1xuICAgIH1cbiAgICAvLyBUaHJvdyBhbiBlcnJvciBpZiB0aGUgc2xpZGVyIHdhcyBhbHJlYWR5IGluaXRpYWxpemVkLlxuICAgIGlmICh0YXJnZXQubm9VaVNsaWRlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBTbGlkZXIgd2FzIGFscmVhZHkgaW5pdGlhbGl6ZWQuXCIpO1xuICAgIH1cbiAgICAvLyBUZXN0IHRoZSBvcHRpb25zIGFuZCBjcmVhdGUgdGhlIHNsaWRlciBlbnZpcm9ubWVudDtcbiAgICB2YXIgb3B0aW9ucyA9IHRlc3RPcHRpb25zKG9yaWdpbmFsT3B0aW9ucyk7XG4gICAgdmFyIGFwaSA9IHNjb3BlKHRhcmdldCwgb3B0aW9ucywgb3JpZ2luYWxPcHRpb25zKTtcbiAgICB0YXJnZXQubm9VaVNsaWRlciA9IGFwaTtcbiAgICByZXR1cm4gYXBpO1xufVxuZXhwb3J0IHsgaW5pdGlhbGl6ZSBhcyBjcmVhdGUgfTtcbmV4cG9ydCB7IGNzc0NsYXNzZXMgfTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICAvLyBFeHBvc2VkIGZvciB1bml0IHRlc3RpbmcsIGRvbid0IHVzZSB0aGlzIGluIHlvdXIgYXBwbGljYXRpb24uXG4gICAgX19zcGVjdHJ1bTogU3BlY3RydW0sXG4gICAgLy8gQSByZWZlcmVuY2UgdG8gdGhlIGRlZmF1bHQgY2xhc3NlcywgYWxsb3dzIGdsb2JhbCBjaGFuZ2VzLlxuICAgIC8vIFVzZSB0aGUgY3NzQ2xhc3NlcyBvcHRpb24gZm9yIGNoYW5nZXMgdG8gb25lIHNsaWRlci5cbiAgICBjc3NDbGFzc2VzOiBjc3NDbGFzc2VzLFxuICAgIGNyZWF0ZTogaW5pdGlhbGl6ZSxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG5jb25zdCBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGNvbnN0IGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHRjb25zdCBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGxldCB0aHJldyA9IHRydWU7XG5cdHRyeSB7XG5cdFx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdFx0Y29uc3QgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fVxuXHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRcdHRocmV3ID0gZmFsc2U7XG5cdH0gZmluYWxseSB7XG5cdFx0aWYodGhyZXcpIGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHRjb25zdCBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlci92YWx1ZSBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0aWYoQXJyYXkuaXNBcnJheShkZWZpbml0aW9uKSkge1xuXHRcdHZhciBpID0gMDtcblx0XHR3aGlsZShpIDwgZGVmaW5pdGlvbi5sZW5ndGgpIHtcblx0XHRcdHZhciBrZXkgPSBkZWZpbml0aW9uW2krK107XG5cdFx0XHR2YXIgYmluZGluZyA9IGRlZmluaXRpb25baSsrXTtcblx0XHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0XHRpZihiaW5kaW5nID09PSAwKSB7XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogZGVmaW5pdGlvbltpKytdIH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBiaW5kaW5nIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYoYmluZGluZyA9PT0gMCkgeyBpKys7IH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZihTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1NvbHZlcn0gZnJvbSBcIi4uL21vZHVsZXMvc29sdmVyL3NvbHZlci1jbGFzcy5qc1wiO1xuXG5IVE1MV2lkZ2V0cy53aWRnZXQoe1xuICBuYW1lOiBcInNvbHZlclwiLFxuICB0eXBlOiBcIm91dHB1dFwiLFxuICBmYWN0b3J5OiBmdW5jdGlvbihlbCwgd2lkdGgsIGhlaWdodCkge1xuICAgIC8vIHNoYXJlZCB2YXJpYWJsZXNcbiAgICB2YXIgZWxlbWVudElkID0gZWwuaWQ7XG4gICAgdmFyIGluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgdmFyIGhhbmRsZSA9IG5ldyBTb2x2ZXIoKTtcblxuICAgIHJldHVybiB7XG4gICAgICByZW5kZXJWYWx1ZTogZnVuY3Rpb24ob3B0cykge1xuICAgICAgICAvLyBpZiBuZWVkZWQsIGluaXRpYWxpemUgd2lkZ2V0XG4gICAgICAgIGlmICghaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAvLyBzZXQgc3RhdGUgdG8gaW5pdGlhbGl6ZWRcbiAgICAgICAgICBpbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgLy8gYXR0YWNoIHRoZSB3aWRnZXQgdG8gdGhlIERPTVxuICAgICAgICAgIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCk7XG4gICAgICAgICAgZWwud2lkZ2V0ID0gdGhpcztcbiAgICAgICAgICAvLyBpbml0aWFsaXplIHNvbHZlclxuICAgICAgICAgIGhhbmRsZS5pbml0aWFsaXplKFxuICAgICAgICAgICAgZWwsIG9wdHMucHJvamVjdCxcbiAgICAgICAgICAgIG9wdHMuZmVhdHVyZVRhcmdldENob2ljZXMsXG4gICAgICAgICAgICBvcHRzLmZlYXR1cmVXZWlnaHRDaG9pY2VzLFxuICAgICAgICAgICAgb3B0cy5jb3N0V2VpZ2h0Q2hvaWNlcyxcbiAgICAgICAgICAgIG9wdHMuem9uZUNvbG9ycyxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICByZXNpemU6IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgLy8gd2lkZ2V0IGF1dG9tYXRpY2FsbHkgcmVzaXplc1xuICAgICAgfSxcblxuICAgICAgc29sdmVyOiBoYW5kbGUsXG5cbiAgICAgIC8qIEFQSSBmdW5jdGlvbnMgdG8gbWFuaXB1bGF0ZSB3aWRnZXQgKi9cbiAgICAgIGFkZExvY2s6IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgICBoYW5kbGUuYWRkTG9jayhwYXJhbXMudmFsdWUsIHBhcmFtcy50eXBlKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlc2V0OiBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgICAgaGFuZGxlLnJlc2V0KCk7XG4gICAgICB9LFxuXG4gICAgICBzeW5jOiBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgICAgaGFuZGxlLnN5bmMocGFyYW1zLnZhbHVlKTtcbiAgICAgIH0sXG5cbiAgICB9O1xuICB9XG59KTtcblxuLy8gQXR0YWNoIG1lc3NhZ2UgaGFuZGxlcnMgaWYgaW4gU2hpbnkgbW9kZSAodGhlc2UgY29ycmVzcG9uZCB0byBBUEkpXG5pZiAoSFRNTFdpZGdldHMuc2hpbnlNb2RlKSB7XG4gIHZhciBmeG5zID0gW1wiYWRkTG9ja1wiLCBcInJlc2V0XCIsIFwic3luY1wiXTtcbiAgdmFyIGFkZFNoaW55SGFuZGxlciA9IGZ1bmN0aW9uKGZ4bikge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIFNoaW55LmFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyKFxuICAgICAgICBcInNvbHZlcjpcIiArIGZ4biwgZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1lc3NhZ2UuaWQpO1xuICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VbXCJpZFwiXTtcbiAgICAgICAgICAgIGVsLndpZGdldFtmeG5dKG1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH07XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZnhucy5sZW5ndGg7ICsraSkge1xuICAgIGFkZFNoaW55SGFuZGxlcihmeG5zW2ldKSgpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=