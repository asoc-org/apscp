/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/tom-select/dist/css/tom-select.bootstrap5.css"
/*!********************************************************************!*\
  !*** ./node_modules/tom-select/dist/css/tom-select.bootstrap5.css ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./srcjs/modules/mapper/css/categorical-legend.css"
/*!*********************************************************!*\
  !*** ./srcjs/modules/mapper/css/categorical-legend.css ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./srcjs/modules/mapper/css/continuous-legend.css"
/*!********************************************************!*\
  !*** ./srcjs/modules/mapper/css/continuous-legend.css ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./srcjs/modules/mapper/css/popup.css"
/*!********************************************!*\
  !*** ./srcjs/modules/mapper/css/popup.css ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./srcjs/modules/mapper/css/style.css"
/*!********************************************!*\
  !*** ./srcjs/modules/mapper/css/style.css ***!
  \********************************************/
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

/***/ "./node_modules/sortablejs/modular/sortable.esm.js"
/*!*********************************************************!*\
  !*** ./node_modules/sortablejs/modular/sortable.esm.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiDrag: () => (/* binding */ MultiDragPlugin),
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

Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sortable);



/***/ },

/***/ "./srcjs/modules/mapper/add-mouse-events.js"
/*!**************************************************!*\
  !*** ./srcjs/modules/mapper/add-mouse-events.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMouseEvents: () => (/* binding */ addMouseEvents)
/* harmony export */ });
/* harmony import */ var _utils_mapboxgl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/mapboxgl.js */ "./srcjs/modules/utils/mapboxgl.js");
// helper functions


/**
 * Add listener for mouse events to map.
 * @param {HTMLElement} map - HTML element for map.
 * @return {void}
 */
function addMouseEvents(el) {
  // define mouse move behavior
  el.map.on("mousemove", (e) => {
    // find visible layers that are underneath the mouse
    const layers = (0,_utils_mapboxgl_js__WEBPACK_IMPORTED_MODULE_0__.getVisibleLayersAtPoint)(el, e.point);
    // set cursor style based on whether any visible layers under mouse
    if (layers.length > 0) {
      el.map.getCanvas().style.cursor = "pointer";
    } else {
      el.map.getCanvas().style.cursor = "grab";
    }
  });
  // define mouse out behavior
  el.map.on("mouseout", () => {
    el.map.getCanvas().style.cursor = "grab";
  });
}


/***/ },

/***/ "./srcjs/modules/mapper/add-popup.js"
/*!*******************************************!*\
  !*** ./srcjs/modules/mapper/add-popup.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPopup: () => (/* binding */ addPopup)
/* harmony export */ });
/* harmony import */ var _css_popup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/popup.css */ "./srcjs/modules/mapper/css/popup.css");
/* harmony import */ var _utils_mapboxgl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/mapboxgl.js */ "./srcjs/modules/utils/mapboxgl.js");
/** Import dependencies */
// styling

// helper functions


/**
 * Add listener for popup to map.
 * @param {HTMLElement} map - HTML element for map.
 * @param {Map<string,string>} projectMetadata - Project metadata.
 * @param {Array<string>} zones - Zone names.
 * @return {void}
 */
function addPopup(el, projectMetadata, zones) {
  // define listener for click on map to display popup
  el.map.on("click", (e) => {
    // obtain data for visible layers that are underneath the mouse
    const data = (0,_utils_mapboxgl_js__WEBPACK_IMPORTED_MODULE_1__.getVisibleLayerDataAtPoint)(el, projectMetadata, e.point);
    // if any layer data to show, then display popup
    if (data.size > 0) {
      // add popup
      new mapboxgl.Popup({closeButton: false})
        .setLngLat(e.lngLat)
        .setDOMContent(createPopup(data, zones))
        .addTo(el.map);
    }
  });
}

/**
 * Create popup.
 * @param {Map<object>} data - Array of key pairs with popup information.
 * @param {Array<string>} zones - Zone names.
 * @return {HTMLElement}
 */
function createPopup(data, zones) {
  // create element
  const el = document.createElement("div");
  el.classList.add("map-popup");
  // add values for each layer
  data.forEach((value, key) => {
    // create label
    let label = document.createElement("label");
    label.classList.add("fw-bold");
    label.innerText = key + ":";
    // create span
    let span = document.createElement("span");
    if (value.class === "Solution") {
      span.innerText = zones[value.value - 1];
    } else {
      span.innerText = value.value;
    }
    // append elements
    el.appendChild(label);
    el.appendChild(span);
  });
  // return element
  return el;
}


/***/ },

/***/ "./srcjs/modules/mapper/create-legend.js"
/*!***********************************************!*\
  !*** ./srcjs/modules/mapper/create-legend.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCategoricalLegend: () => (/* binding */ createCategoricalLegend),
/* harmony export */   createContinuousLegend: () => (/* binding */ createContinuousLegend),
/* harmony export */   createLegend: () => (/* binding */ createLegend)
/* harmony export */ });
/* harmony import */ var _utils_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/element.js */ "./srcjs/modules/utils/element.js");
/* harmony import */ var _css_categorical_legend_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/categorical-legend.css */ "./srcjs/modules/mapper/css/categorical-legend.css");
/* harmony import */ var _css_continuous_legend_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/continuous-legend.css */ "./srcjs/modules/mapper/css/continuous-legend.css");
/** Import dependencies */
// functions to create elements

// styling



/**
 * Create a categorical legend.
 * @param {object} x - Object with items to display in legend.
 * @param {Array<number>} x.values - Set of values denoting the numeric
 * values for each legend item. Note that these values are not shown
 * in the legend.
 * @param {Array<string>} x.colors - Set of values denoting the color
 * for each legend item.
 * Note that this must have the same length as {@link x.values}.
 * @param {Array<string>} x.labels - Set of values denoting the text label
 * for each legend item.
 * Note that this must have the same length as {@link x.values}.
 * @param {string} x.units - Units for the legend items.
 * @return {HTMLElement}
 */
function createCategoricalLegend(x) {
  // initialize legend
  let el = document.createElement("div");
  el.className = "categorical-legend";
  (0,_utils_element_js__WEBPACK_IMPORTED_MODULE_0__.addTooltip)(
    el,
    "This layer has categorical data and colors indicate each category."
  );
  // if needed, force values into an array
  if (!Array.isArray(x.labels)) {
    x.labels = [x.labels]
  }
  if (!Array.isArray(x.values)) {
    x.values = [x.values]
  }
  if (!Array.isArray(x.colors)) {
    x.colors = [x.colors]
  }

  // create legend
  for (let i = 0; i < x.values.length; ++i) {
    // create item to add to legend
    let item = document.createElement("div");
    item.className = "item";
    // create text component to display the text
    let itemLabel = document.createElement("label");
    itemLabel.className = "item-label";
    itemLabel.innerText = `${x.labels[i]}`;
    // create symbol component to display the color
    let itemSymbol = document.createElement("div");
    itemSymbol.className = "item-symbol";
    itemSymbol.style.backgroundColor = x.colors[i];
    itemSymbol.style.color = x.colors[i];
    // add item to legend
    item.appendChild(itemSymbol);
    item.appendChild(itemLabel);
    el.appendChild(item);
  }

  // return legend
  return el;
}

/**
 * Create a continuous legend.
 * @param {object} x - Object with items to display in legend.
 * @param {Array<number>} x.values - Set of values that define increments
 * for the color bar.
 * @param {Array<string>} x.colors - Set of values that denote a color for each
 * increment in the color bar.
 * Note that this must have the same length as {@link x.values}.
 * @param {Array<number>} x.breaks - Set of values that denote positions for the
 * text labels to accompany the color bar.
 * @param {Array<string>} x.labels - Set of values that denote text label
 * to accompany the color bar.
 * Note that this must have the same length as {@link x.breaks}.
 * @param {string} x.units - Units for the legend items.
 * @return {HTMLElement}
 */
function createContinuousLegend(x) {
  // initialize legend
  let el = document.createElement("div");
  el.classList.add("continuous-legend");
  (0,_utils_element_js__WEBPACK_IMPORTED_MODULE_0__.addTooltip)(
    el,
    "This layer has continuous data and the " +
      "legend shows the range of colors used for display"
  );

  // compute values
  let maxValue = Math.max(...x.values);
  let minValue = Math.min(...x.values);
  let rangeValue = maxValue - minValue;

  // create color bar
  let colorbar = document.createElement("div");
  colorbar.className = "colorbar-ramp";
  let colorbarBackground = "linear-gradient(to left";
  let colorbarPosition = undefined;
  x.colors = x.colors.reverse();
  for (let i = 0; i < x.colors.length; ++i) {
    colorbarPosition = ((x.values[i] - minValue) / rangeValue) * 100;
    colorbarBackground +=
      `, ${x.colors[i]} ${colorbarPosition}%`;
  }
  colorbarBackground += ")";
  colorbar.style.backgroundColor = x.colors[0];
  colorbar.style.backgroundImage = colorbarBackground;

  // create units label
  let units = document.createElement("div")
  units.className = "colorbar-units";
  if (typeof(x.units) === "string") {
    units.innerText = `${x.units}`;
  }

  // create container for ticks and labels
  let items = document.createElement("div");
  items.className = "colorbar-items";

  // create axis ticks and labels
  for (let i = 0; i < x.breaks.length; ++i) {
    // calculate width
    let pos = Math.round(100 * ((x.breaks[i] - minValue) / rangeValue));
    // create container for i'th tick and label
    let item = document.createElement("div");
    item.style.zIndex = i;
    item.className = "colorbar-item";
    item.style.gridColumnStart = pos;
    item.style.gridColumnEnd = pos;
    item.style.gridRow = 1;
    item.style.zIndex = i + 1;
    // create tick
    let itemTick = document.createElement("div");
    itemTick.className = "colorbar-tick";
    itemTick.innerText = " ";
    // create label
    let itemLabel = document.createElement("label");
    itemLabel.className = "colorbar-label";
    itemLabel.innerText = `${x.labels[i]}`;
    // append to tick and label to item container
    item.appendChild(itemTick);
    item.appendChild(itemLabel);
    items.appendChild(item);
  }

  // construct legend
  let container = document.createElement("div");
  container.classList.add("colorbar-container");
  container.appendChild(colorbar);
  container.appendChild(items);
  el.appendChild(container);
  el.appendChild(units);

  // return legend
  return el;
}

/**
 * Create a legend.
 * @param {Object} x - Object with items to display in legend.
 * See {@link createContinuousLegend} and {@link createCategoricalLegend}
 * for additional parameter details.
 * @param {string} x.class - Value indicating the desired type of legend.
 * Acceptable values include `"ContinuousLegend"` and `"CategoricalLegend"`.
 * @return {HTMLElement}
 */
function createLegend(x) {
  if (x.class === "ContinuousLegend") {
    return createContinuousLegend(x);
  } else if (x.class === "CategoricalLegend") {
    return createCategoricalLegend(x);
  } else {
    console.error("createLegend(): `x` not a recognized value.");
  }
}


/***/ },

/***/ "./srcjs/modules/mapper/mapper-class.js"
/*!**********************************************!*\
  !*** ./srcjs/modules/mapper/mapper-class.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mapper: () => (/* binding */ Mapper)
/* harmony export */ });
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js");
/* harmony import */ var tom_select_dist_css_tom_select_bootstrap5_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tom-select/dist/css/tom-select.bootstrap5.css */ "./node_modules/tom-select/dist/css/tom-select.bootstrap5.css");
/* harmony import */ var tom_select_dist_js_tom_select_complete_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tom-select/dist/js/tom-select.complete.min.js */ "./node_modules/tom-select/dist/js/tom-select.complete.min.js");
/* harmony import */ var tom_select_dist_js_tom_select_complete_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tom_select_dist_js_tom_select_complete_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mapper_scaffold_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mapper-scaffold.js */ "./srcjs/modules/mapper/mapper-scaffold.js");
/* harmony import */ var _add_popup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-popup.js */ "./srcjs/modules/mapper/add-popup.js");
/* harmony import */ var _add_mouse_events_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-mouse-events.js */ "./srcjs/modules/mapper/add-mouse-events.js");
/* harmony import */ var _utils_projectSelectOptions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/projectSelectOptions.js */ "./srcjs/modules/utils/projectSelectOptions.js");
/* harmony import */ var _utils_projectMetadata_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/projectMetadata.js */ "./srcjs/modules/utils/projectMetadata.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./css/style.css */ "./srcjs/modules/mapper/css/style.css");
/** Import dependencies */
// node modules



// functions to create elements







// styling


/** Class representing an object for managing a map. */
class Mapper {

  // private fields

  /**
   * Project metadata for layers.
   * @type {Map<string,string>}
   */
  _metadata;

  /**
   * Map of layers that are hidden on menu. Note that these layers
   * are active and have been added to the map, but are not shown on the menu.
   * @type {Map<object>}
   */
  _hiddenLayers = new Map();

  /**
   * Set that contains identifiers for the layers that are active and have been
   * added to the map. Note that this includes hidden layers.
   * @type {Set<string>}
   */
  _activeLayerIds = new Set();

  /**
   * Maximum number of layers that can be added to the map.
   * @type {number}
   */
  _maxLayers;

  // private HTML fields

  /**
   * HTML Element that contains the Mapbox map.
   * @type {HTMLElement}
   */
  _map;

  /**
   * HTML Element that contains the navigation menu.
   * @type {HTMLElement}
   */
  _menu;

  /**
   * HTML Element that contains the select input.
   * @type {HTMLElement}
   */
  _select;

  /**
   * Initialize Mapper object with menu, map, and project data.
   * @param {string} element - HTML element for navigation menu.
   * @param {string} mapId - HTML element identifier for the mapgl map.
   * @param {Object} project - Object with various types of objects.
   * @param {Array<object>} project.features - Array of feature objects.
   * @param {Array<object>} project.costs - Array of cost objects.
   * @param {Array<object>} project.lock - Array of lock objects.
   * @param {number} maxLayers - Maximum number of active layers permitted.
   * @return {void}
   */
  initialize(element, mapId, project, maxLayers) {
    // initialize fields
    this._maxLayers = maxLayers || 15;
    this._menu = element.querySelector(".mapper-menu");
    this._select = element.querySelector(".mapper-select");
    this._map = document.getElementById(mapId);
    this._metadata = (0,_utils_projectMetadata_js__WEBPACK_IMPORTED_MODULE_7__.projectMetadata)(project);
    // define temporary variables
    let i, j, el, k;
    // add menu items
    // note that this code assumes that the this._map has been
    // initialized with layers that have the visible property set to true,
    // also note that layers must be added in the order that is the reverse
    // of that used to add layers to the map
    for (i = 0; i < project.features.length; i++) {
      el = (0,_mapper_scaffold_js__WEBPACK_IMPORTED_MODULE_3__.createMenuItem)(
        project.features[i], this, project.features[i].themes
      );
      if (project.features[i].layer.visible === true) {
        this._menu.appendChild(el);
        this._activeLayerIds.add(el.dataset.id);
      } else {
        this._hiddenLayers.set(el.dataset.id, el);
      }
    }
    for (i = 0; i < project.costs.length; i++) {
      el = (0,_mapper_scaffold_js__WEBPACK_IMPORTED_MODULE_3__.createMenuItem)(project.costs[i], this);
      if (project.costs[i].layer.visible === true) {
        this._menu.appendChild(el);
        this._activeLayerIds.add(el.dataset.id);
      } else {
        this._hiddenLayers.set(el.dataset.id, el);
      }
    }
    for (i = 0; i < project.locks.length; i++) {
      el = (0,_mapper_scaffold_js__WEBPACK_IMPORTED_MODULE_3__.createMenuItem)(project.locks[i], this);
      if (project.locks[i].layer.visible === true) {
        this._menu.appendChild(el);
        this._activeLayerIds.add(el.dataset.id);
      } else {
        this._hiddenLayers.set(el.dataset.id, el);
      }
    }
    for (i = 0; i < project.solutions.length; i++) {
      el = (0,_mapper_scaffold_js__WEBPACK_IMPORTED_MODULE_3__.createMenuItem)(project.solutions[i], this);
      if (project.solutions[i].layer.visible === true) {
        this._menu.appendChild(el);
        this._activeLayerIds.add(el.dataset.id);
      } else {
        this._hiddenLayers.set(el.dataset.id, el);
      }
    }
    // initialize sorting behavior
    new sortablejs__WEBPACK_IMPORTED_MODULE_0__.Sortable(this._menu, {
      handle: ".handle",
      animation: 150,
      dataIdAttr: "data-id",
      ghostClass: "ghost",
      onUpdate: event => {
        let beforeId = undefined;
        if (event.newIndex > 0) {
          beforeId =
            event.to.children[event.newIndex - 1].getAttribute("data-id");
        }
        this.moveLayerOnMap(event.item.getAttribute("data-id"), beforeId);
      }
    });
    // initialize select menu
    let selectOptions = (0,_utils_projectSelectOptions_js__WEBPACK_IMPORTED_MODULE_6__.projectSelectOptions)(project);
    new (tom_select_dist_js_tom_select_complete_min_js__WEBPACK_IMPORTED_MODULE_2___default())(this._select, {
      options: selectOptions.options,
      items: [...this._activeLayerIds],
      create: false,
      dropdownParent: "body",
      labelField: "name",
      searchField: ["name"],
      maxOptions: null,
      sortField: "sort",
      closeAfterSelect: false,
      optgroups: selectOptions.optgroups,
      optgroupField: "group",
      plugins: {
        checkbox_options: {}
      },
      render: {
        optgroup_header: function(data, escape) {
          // determine if all options for group are checked
          const groupOptions =
            Object.values(this.options)
            .filter(x => x.group.includes(data.value));
          const values = this.getValue().split(",");
          const allChecked =
            groupOptions.length > 0 &&
            groupOptions.every(x => values.includes(x.value));
          // return HTML for header
          return "" +
            "<div class=\"optgroup-header\" " +
            `data-group="${escape(data.value)}">` +
            "<input type=\"checkbox\" class=\"tomselect-checkbox\"" +
            `${allChecked ? "checked" : ""}>` +
            `<span>${escape(data.value)}</span></div>`;
        }
      },
      onInitialize: function() {
        // event listeners for checkboxes in option group headers
        this.dropdown.addEventListener("click", (e) => {
          if (
            e.target &&
            e.target.parentNode.classList.contains("optgroup-header")
          ) {
            // define variables
            let group = e.target.parentNode.getAttribute("data-group");
            let checkbox = e.target.parentNode.children[0];
            // if clicked on text label, then alter checkbox
            if (!e.target.classList.contains("tomselect-checkbox")) {
              checkbox.checked = !checkbox.checked;
            }
            // determine if items should be added or removed
            let isChecked = checkbox.checked;
            // add or remove items
            for (const id in this.options) {
              if (this.options[id].group.includes(group)) {
                if (isChecked) {
                  this.addItem(this.options[id].value);
                } else {
                  this.removeItem(this.options[id].value);
                }
              }
            }
            // keep the dropdown open after clicking the group checkbox
            e.stopPropagation();
          }
        });
      },
      onItemAdd: (value) => {
        if (this._activeLayerIds.has(value)) {
          this.showLayerOnMenu(value);
          this.moveLayerOnMap(value);
        } else {
          if (HTMLWidgets.shinyMode) {
            Shiny.setInputValue(
              `${element.id}_sync`,
              value,
              {priority: "event"}
            );
          }
        }
      },
      onItemRemove: (value) => {
        this.hideLayerOnMenu(value, true);
      }
    });
    // add popup to map
    (0,_add_popup_js__WEBPACK_IMPORTED_MODULE_4__.addPopup)(this._map, this._metadata, project.zones);
    // add mouse events to map
    (0,_add_mouse_events_js__WEBPACK_IMPORTED_MODULE_5__.addMouseEvents)(this._map);
  }

  /**
   * Add a layer to the Mapper object. Note that if adding this new layer
   * would exceed the maximum number of permitted active layers, then
   * the oldest active layer will be removed automatically.
   * @param {Object} layer - Object that is a lock or a solution.
   * @return {void}
   */
  addLayer(layer) {
    // add layer to metadata
    this._metadata.set("lyr-" + layer.id, (0,_utils_projectMetadata_js__WEBPACK_IMPORTED_MODULE_7__.getMetadata)(layer));
    // create menu item
    let el = (0,_mapper_scaffold_js__WEBPACK_IMPORTED_MODULE_3__.createMenuItem)(layer, this);
    // add menu item to hidden menu items
    this._hiddenLayers.set(el.dataset.id, el);
    // set layer as active
    this._activeLayerIds.add(el.dataset.id);
    // add layer to menu
    this.showLayerOnMenu(el.dataset.id, true, false);
    // add menu item to select
    this._select.tomselect.addOption((0,_utils_projectSelectOptions_js__WEBPACK_IMPORTED_MODULE_6__.selectOption)(layer));
    this._select.tomselect.addItem(layer.id, true);
    // if number of active layers exceeds limit, then remove oldest layer
    if (this._activeLayerIds.size > this._maxLayers) {
      let removeId = this._activeLayerIds.values().next().value;
      this.removeLayerFromMap(removeId);
    }
  }

  /**
   * Hide layer on menu.
   * @param {string} layerId - HTML identifier for layer.
   * @param {boolean} updateMap - Should the map also be updated to reflect
   * these changes to the menu?
   * @return {void}
   */
  hideLayerOnMenu(layerId, updateMap = true) {
    // find element for layer's menu item
    let el = this._menu.querySelector(`[data-id="${layerId}"]`);
    // update menu
    if (el) {
      // remove element from menu
      el.remove();
      // add menu item to hidden menu items
      this._hiddenLayers.set(el.dataset.id, el);
    }
    // if needed, update map
    if (updateMap === true) {
      this.hideLayerOnMap(layerId);
    }
  }

  /**
   * Show layer on menu.
   * @param {string} layerId - HTML identifier for layer.
   * @param {boolean} showLegend - Should the legend be shown on the menu?
   * @param {boolean} updateMap - Should the map also be updated to reflect
   * these changes to the menu?
   * @return {void}
   */
  showLayerOnMenu(layerId, showLegend = true, updateMap = true) {
    // find element for layer's menu item
    let el = this._hiddenLayers.get(layerId);
    // find menu item checkbox for showing map and set accordingly
    let layerTristate = el.querySelector(".layer-tristate");
    layerTristate.value = "show";
    // find menu item checkbox for showing legend and set accordingly
    let legendCheckbox = el.querySelector(".legend-checkbox");
    if (showLegend === true) {
      legendCheckbox.checked = true;
    }
    // if needed, show layer on map
    if (updateMap === true) {
      this.showLayerOnMap(layerId);
    }
    // add layer to menu
    this._menu.prepend(el);
  }

  /**
   * Show layer on map.
   * @param {string} layerId - HTML identifier for layer.
   * @return {void}
   */
  showLayerOnMap(layerId) {
    // set layer visibility on map
    this._map.map.setLayoutProperty(
      "lyr-" + layerId, "visibility", "visible"
    );
    // remove highlight
    this._map.map.setPaintProperty(
      "lyr-" + layerId, "fill-outline-color", undefined
    );
  }

  /**
  * Hide layer on map.
  * @param {string} layerId - HTML identifier for layer.;
  * @return {void}
  */
  hideLayerOnMap(layerId) {
    // set layer visibility on map
    this._map.map.setLayoutProperty(
      "lyr-" + layerId, "visibility", "none"
    );
    // remove highlight
    this._map.map.setPaintProperty(
      "lyr-" + layerId, "fill-outline-color", undefined
    );
  }

  /**
  * Highlight layer on map.
  * @param {string} layerId - HTML identifier for layer.;
  * @return {void}
  */
  highlightLayerOnMap(layerId) {
    // set layer visibility on map
    this._map.map.setLayoutProperty(
      "lyr-" + layerId, "visibility", "visible"
    );
    // add highlight
    this._map.map.setPaintProperty(
      "lyr-" + layerId, "fill-outline-color",
      [
        "case",
        ["==", ["get", this._metadata.get("lyr-" + layerId).column], null],
        "transparent",
        "#FFFF00"
      ]
    );
  }

  /**
   * Move layer on map.
   * @param {string} layerId - HTML identifier for layer to update.
   * @param {string} beforeId - HTML identifier for the layer that should be
   * `layerId` should be inserted before (in other words, `layerId` will appear
   * under `beforeId`). If `beforeId = undefined`, then the layer is moved to
   * the very top.
   * @return {void}
   */
  moveLayerOnMap(layerId, beforeId) {
    // move layer on map
    if (typeof(beforeId) === "string") {
      this._map.map.moveLayer("lyr-" + layerId, "lyr-" + beforeId);
    } else {
      this._map.map.moveLayer("lyr-" + layerId, undefined);
    }
  }

  /**
   * Remove layer on map.
   * @param {string} layerId - HTML identifier for layer.
   * @return {void}
   */
  removeLayerFromMap(layerId) {
    // remove layer from menu
    this._select.tomselect.removeItem(layerId);
    // remove layer from set of active layers
    this._activeLayerIds.delete(layerId);
    // remove layer from map
    this._map.map.removeLayer("lyr-" + layerId);
  }

  /**
   * Does the map have a particular layer active?
   * @param {string} layerId - HTML identifier for layer.
   * @return {void}
   */
  hasLayerActive(layerId) {
    this._activeLayerIds.has(layer_id);
  }

  /**
   * Show all menu layers on map.
   * @return {void}
   */
   showAllMenuLayersOnMap() {
    this._menu
      .querySelectorAll(".mapper-menu-item")
      .forEach((x) => {
        this.showLayerOnMap(x.getAttribute("data-id"));
        x.querySelector(".layer-tristate").value = "show";
      });
   }

  /**
   * Hide all menu layers on map.
   * @return {void}
   */
   hideAllMenuLayersOnMap() {
    this._menu
      .querySelectorAll(".mapper-menu-item")
      .forEach((x) => {
        this.hideLayerOnMap(x.getAttribute("data-id"));
        x.querySelector(".layer-tristate").value = "hide";
      });
   }

  /**
   * Highlight all menu layers on map.
   * @return {void}
   */
   highlightAllMenuLayersOnMap() {
    this._menu
      .querySelectorAll(".mapper-menu-item")
      .forEach((x) => {
        this.highlightLayerOnMap(x.getAttribute("data-id"));
        x.querySelector(".layer-tristate").value = "highlight";
      });
   }

  /**
   * Remove all layers from the menu and the map.
   * @return {void}
   */
   removeAllLayersFromMenuAndMap() {
    this._menu
      .querySelectorAll(".mapper-menu-item")
      .forEach((x) => {
        this.removeLayerFromMap(x.getAttribute("data-id"));
      })
   }

}


/***/ },

/***/ "./srcjs/modules/mapper/mapper-scaffold.js"
/*!*************************************************!*\
  !*** ./srcjs/modules/mapper/mapper-scaffold.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenuItem: () => (/* binding */ createMenuItem)
/* harmony export */ });
/* harmony import */ var _create_legend_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-legend.js */ "./srcjs/modules/mapper/create-legend.js");
/* harmony import */ var _utils_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/element.js */ "./srcjs/modules/utils/element.js");
/** Import dependencies */
// functions to create elements




/**
 * Create a new menu item.
 * @param {object} x - Object with menu item information.
 * @param {string} x.id - HTML element identifier for the menu item.
 * @param {string} x.name - Name for the menu item.
 * @param {object} x.layer - {@link Layer} object.
 * @param {String} x.class - Class for layer. Available options include
 * `"Feature"`, `"Cost"`, `"Lock"`, and `"Solution"`.
 * @param {object} mapper - {@link Mapper} object.
 * @param {Array<object>} themes - Themes to which the menu item belongs.
 * Note that this is the names of the themes for feature layers.
 * @return
 */
function createMenuItem(x, mapper, themes = undefined) {
  // initialize container element
  let el = document.importNode(
    document
      .querySelector("." + x.class.toLowerCase() + "-layer-template")
      .content,
    true).children[0];

  // find components of container element
  let showLegendCheckbox = el.querySelector(".legend-checkbox");
  let showLayerTristate = el.querySelector(".layer-tristate");
  let removeLayerFromMapButton = el.querySelector(".layer-button");
  let legendElement = el.querySelector(".legend-container");
  let nameElement = el.querySelector(".name-container");
  let provenanceElement = el.querySelector(".provenance-container");
  let handleElement = el.querySelector(".handle");

  // set layer id
  el.setAttribute("data-id", x.id);

  // create name label
  nameElement.appendChild((0,_utils_element_js__WEBPACK_IMPORTED_MODULE_1__.createNameLabel)(x));

  // set layer checkbox status
  showLayerTristate.value = "show";

  // set legend checkbox
  showLegendCheckbox.checked = true;

  // add legend
  legendElement.appendChild((0,_create_legend_js__WEBPACK_IMPORTED_MODULE_0__.createLegend)(x.layer.legend));

  // add provenance
  provenanceElement.appendChild((0,_utils_element_js__WEBPACK_IMPORTED_MODULE_1__.createProvenance)(x.layer.provenance));

  // set listener for checkbox to show/hide legend
  showLegendCheckbox.addEventListener("change", function () {
    if (this.checked) {
      legendElement.style.display = "block";
    } else {
      legendElement.style.display = "none";
    }
  });

  // set listener for button to hide layer
  showLayerTristate.addEventListener("click", function () {
    switch (this.value) {
      case "show":
        this.value = "hide";
        mapper.hideLayerOnMap(x.id);
        break;
      case "hide":
        this.value = "highlight";
        mapper.highlightLayerOnMap(x.id);
        break;
      case "highlight":
        this.value = "show";
        mapper.showLayerOnMap(x.id);
        break;
      default:
        this.value = "show";
        mapper.showLayerOnMap(x.id);
    }
  });

  // set listener for button to drop layer
  removeLayerFromMapButton.addEventListener("click", function () {
    mapper._select.tomselect.removeItem(x.id);
  });

  // return element
  return el;
};


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
/* harmony export */   createButtonGroups: () => (/* binding */ createButtonGroups),
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
 * @param {object} x - Object with properties for customization.
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
 * @param {object} x - Object with properties for customization.
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

/**
 * Create button group
 * @param {Array<string>} groupLabels - Label for each button group.
 * @param {Array<string>} buttonLabels - Label for each of the buttons.
 * @param {Array<string>} groupColors - Colors for group labels.
 * @param {Array<Array<string>>} tooltipLabels - Labels for tooltips.
 * @return {HTMLElement}
 */
function createButtonGroups(
  groupLabels, buttonLabels, groupColors, tooltipLabels
) {
  // create container
  let el = document.createElement("div");
  el.classList.add("button-groups", "border", "rounded");
  // add each group
  for (let i = 0; i < groupLabels.length; ++i) {
    // create button group
    let group = document.createElement("div");
    group.classList.add("btn-group");
    // add buttons to container
    for (let j = 0; j < buttonLabels.length; ++j) {
      // create button text
      let span = document.createElement("span");
      span.innerText = buttonLabels[j];
      // create button
      let btn = document.createElement("button");
      btn.classList.add("btn", "btn-sm");
      btn.setAttribute("data-group-index", i);
      btn.setAttribute("data-group-label", groupLabels[i]);
      btn.setAttribute("data-label", buttonLabels[j]);
      btn.style.backgroundColor = groupColors[i];
      addTooltip(btn, tooltipLabels[i][j]);
      // append elements
      btn.appendChild(span);
      group.appendChild(btn);
    }
    // add to group to container
    el.appendChild(group);
  }
  // return element;
  return el;
}


/***/ },

/***/ "./srcjs/modules/utils/mapboxgl.js"
/*!*****************************************!*\
  !*** ./srcjs/modules/utils/mapboxgl.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getVisibleLayerDataAtPoint: () => (/* binding */ getVisibleLayerDataAtPoint),
/* harmony export */   getVisibleLayersAtPoint: () => (/* binding */ getVisibleLayersAtPoint)
/* harmony export */ });
/**
 * Get data for visible layers at a point.
 * @param {HTMLElement} map - HTML element for map.
 * @param {Map<string,string>} metadata - Project metadata.
 * @param {Point} point - Mapboxgl point object.
 * @return {void}
 */
function getVisibleLayerDataAtPoint(el, metadata, point) {
  // find layers that are underneath the mouse and are visible
  const layers = getVisibleLayersAtPoint(el, point);
  // prepare layer data
  const data = new Map();
  layers.forEach((x) => {
    const layer = metadata.get(x.layer.id);
    const value = x.properties[layer.column];
    if (value !== undefined) {
      data.set(
        layer.name,
        {value: value, class: layer.class}
      );
    }
  });
  // return data
  return data;
}

/**
 * Get visible layers at a point.
 * @param {HTMLElement} map - HTML element for map.
 * @param {Point} point - Mapboxgl point object.
 * @return {void}
 */
function getVisibleLayersAtPoint(el, point) {
  // find layers that are underneath the mouse and are visible
  const layers =
    el.map
    .queryRenderedFeatures(point)
    .filter((x) => {
      return (x.layer.layout.visibility === "visible") &&
        (x.layer.id !== "bbox");
    });
  // return layers
  return layers;
}


/***/ },

/***/ "./srcjs/modules/utils/projectMetadata.js"
/*!************************************************!*\
  !*** ./srcjs/modules/utils/projectMetadata.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMetadata: () => (/* binding */ getMetadata),
/* harmony export */   projectMetadata: () => (/* binding */ projectMetadata)
/* harmony export */ });
/**
 * Create metadata for layer in a project.
 * @param {object} project - Project object.
 * @param {Array<object>} project.features - Array of Feature objects.
 * @param {Array<object>} project.locks - Array of Lock objects.
 * @param {Array<object>} project.costs - Array of Cost objects.
 * @param {Array<object>} project.solutions - Array of Solution objects.
 * @return {Map<string, string>}
 */
function projectMetadata(project) {
  // create map with layer identifiers and names
  const out = new Map();
  // add metadata for features
  for (let i = 0; i < project.features.length; ++i) {
    out.set(
      "lyr-" + project.features[i].id,
      getMetadata(project.features[i])
    );
  }
  // add metadata for locks
  for (let i = 0; i < project.locks.length; ++i) {
    out.set(
      "lyr-" + project.locks[i].id,
      getMetadata(project.locks[i])
    );
  }
  // add metadata for costs
  for (let i = 0; i < project.costs.length; ++i) {
    out.set(
      "lyr-" + project.costs[i].id,
      getMetadata(project.costs[i])
    );
  }
  // add metadata for solutions
  for (let i = 0; i < project.solutions.length; ++i) {
    out.set(
      "lyr-" + project.solutions[i].id,
      getMetadata(project.solutions[i])
    );
  }
  // return result
  return out;
}

/**
 * Create metadata for layer in a project.
 * @param {object} layer - Layer object.
 * @param {string} layer.id - Identifier.
 * @param {string} layer.class - Class name.
 * @param {Object} layer.layer - Layer object.
 * @param {string} layer.layer.column - Column name.
 * @return {Object}
 */
function getMetadata(layer) {
  return {name: layer.name, column: layer.layer.column, class: layer.class};
}


/***/ },

/***/ "./srcjs/modules/utils/projectSelectOptions.js"
/*!*****************************************************!*\
  !*** ./srcjs/modules/utils/projectSelectOptions.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectSelectOptions: () => (/* binding */ projectSelectOptions),
/* harmony export */   selectOption: () => (/* binding */ selectOption)
/* harmony export */ });
/**
 * Generate parameters for a Tom Select widget based on a project.
 * @param {object} project - Project object.
 * @param {Array<object>} project.features - Array of Feature objects.
 * @param {Array<object>} project.locks - Array of Lock objects.
 * @param {Array<object>} project.costs - Array of Cost objects.
 * @param {Array<object>} project.solutions - Array of Solution objects.
 * @param {boolean} includeFeatures - Should features be included in the
 * output?
 * @param {boolean} includeCosts - Should costs be included in the
 * output?
 * @param {boolean} includeLocks - Should locks be included in the
 * output?
 * @param {boolean} includeSolutions - Should solutions be included in the
 * output?
 * @return {object}
 */
function projectSelectOptions(
  project,
  includeFeatures = true,
  includeCosts = true,
  includeLocks = true,
  includeSolutions = true
) {
  // initialize variables
  let options = Array(
    (project.features.length * includeFeatures) +
    (project.costs.length * includeCosts) +
    (project.locks.length * includeLocks) +
    (project.solutions.length * includeSolutions)
  );
  let groups = new Set();
  let includeClass =
    (includeFeatures + includeCosts + includeLocks + includeSolutions) > 1;
  // define counters
  let i, j, k;
  k = 0;
  // if needed, add features
  if (includeFeatures) {
    for (i = 0; i < project.features.length; ++i) {
      options[k] = selectOption(project.features[i], includeClass);
      for (j = 0; j < options[i].group.length; ++j) {
        groups.add(options[i].group[j]);
      }
      ++k;
    };
  }
  // if needed, add locks
  if (includeLocks) {
    for (i = 0; i < project.locks.length; ++i) {
      options[k] = selectOption(project.locks[i], includeClass);
      ++k;
    };
    groups.add("Locks");
  }
  // if needed, add costs
  if (includeCosts) {
    for (i = 0; i < project.costs.length; ++i) {
      options[k] = selectOption(project.costs[i], includeClass);
      ++k;
    };
    groups.add("Costs");
  }
  // if needed, add solutions
  if (includeSolutions) {
    for (i = 0; i < project.solutions.length; ++i) {
      options[k] = selectOption(project.solutions[i], includeClass);
      ++k;
    };
    groups.add("Solutions");
  }
  // return object
  return {
    options: options,
    optgroups: Array.from(groups).map(x => {return {value: x}})
  };
}

/**
 * Create a Tom Select option for a project element.
 * @param {object} x - Object.
 * @param {string} x.id - Unique identifier.
 * @param {string} x.name - Name.
 * @param {string} x.class - Type of object.
 * @param {Array<object>} x.theme - Optional array of theme objects.
 * @param {string} x.themes.name - Name of theme.
 * @param {string} x.themes.zone - Zone associated with theme.
 * @return {object}
 */
function selectOption(x, includeClass = true) {
  // initialize object
  let out = {value: x.id, name: x.name};
  // process group
  let group = x.class.charAt(0).toUpperCase() + x.class.slice(1) + "s";
  if (x.themes !== undefined) {
    // if object has themes, then add groups based on them
    if (includeClass) {
      out.group = x.themes.map(y => `${group} (${themeGroupName(y)})`).sort();
    } else {
      out.group = x.themes.map(y => themeGroupName(y)).sort();
    }
  } else {
    // otherwise, then add group based on class name
    out.group = group;
  }
  // process sort key
  let ord = ["Features", "Locks", "Costs", "Solutions"];
  let i = ord.indexOf(group) + 1;
  if (i < 0) {
    i = 999; // if class not recognized, then put it last
  }
  out.sort = `${i}-${x.name}`;
  // return object
  return out
}

/**
 * Create a group name for a theme.
 * @param {object} object - Theme object.
 * @param {string} object.name - Name of theme.
 * @param {string} object.zone - Zone associated with the theme.
 * @return {string}
 */
function themeGroupName(object) {
  if (typeof(object.zone) === "string") {
    return `${object.zone}: ${object.name}`;
  } else {
    return object.name;
  }
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
  !*** ./srcjs/widgets/mapper.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_mapper_mapper_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/mapper/mapper-class.js */ "./srcjs/modules/mapper/mapper-class.js");
/** Import dependencies */


HTMLWidgets.widget({
  name: "mapper",
  type: "output",
  factory: function(el, width, height) {
    // shared variables
    var elementId = el.id;
    var initialized = false;
    var handle = new _modules_mapper_mapper_class_js__WEBPACK_IMPORTED_MODULE_0__.Mapper();

    return {
      renderValue: function(opts) {
        // if needed, initialize widget
        if (!initialized) {
          // set state to initialized
          initialized = true;
          // attach the widget to the DOM
          let el = document.getElementById(elementId);
          el.widget = this;
          // initialize widget
          handle.initialize(el, opts.mapId, opts.project, opts.maxLayers);
        }
      },

      resize: function(width, height) {
        // widget automatically resizes
      },

      mapper: handle,

      /* API functions to manipulate widget */
      addLayer: function(params) {
        // specify visibility
        params.value.layer.visible = params.visible;
        // add layer to widget
        handle.addLayer(params.value);
        // since R code is used to update the map, so updateMap = false
        handle.showLayerOnMenu(params.value.id, true, false);
      },

    };
  }
});

// Attach message handlers if in Shiny mode (these correspond to API)
if (HTMLWidgets.shinyMode) {
  var fxns = ["addLayer"];
  var addShinyHandler = function(fxn) {
    return function() {
      Shiny.addCustomMessageHandler(
        "mapper:" + fxn, function(message) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUZBQW1GO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ04sR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osa0NBQWtDO0FBQ2xDLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsOEJBQThCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0EsMkNBQTJDLDBDQUEwQztXQUNyRixNQUFNO1dBQ04sMkNBQTJDLGdDQUFnQztXQUMzRTtXQUNBLEtBQUsseUJBQXlCO1dBQzlCO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSwwQ0FBMEMsd0NBQXdDO1dBQ2xGO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7O1dDdEJBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDeUQ7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1FQUFNOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHNjcC8uL25vZGVfbW9kdWxlcy90b20tc2VsZWN0L2Rpc3QvY3NzL3RvbS1zZWxlY3QuYm9vdHN0cmFwNS5jc3M/MmM0MyIsIndlYnBhY2s6Ly9hcHNjcC8uL3NyY2pzL21vZHVsZXMvbWFwcGVyL2Nzcy9jYXRlZ29yaWNhbC1sZWdlbmQuY3NzPzRkZGIiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy9tb2R1bGVzL21hcHBlci9jc3MvY29udGludW91cy1sZWdlbmQuY3NzPzJhODIiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy9tb2R1bGVzL21hcHBlci9jc3MvcG9wdXAuY3NzPzMwZTUiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy9tb2R1bGVzL21hcHBlci9jc3Mvc3R5bGUuY3NzPzhiY2IiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy9tb2R1bGVzL3V0aWxzL2Nzcy9zdHlsZS5jc3M/ZDNhOCIsIndlYnBhY2s6Ly9hcHNjcC8uL25vZGVfbW9kdWxlcy9zb3J0YWJsZWpzL21vZHVsYXIvc29ydGFibGUuZXNtLmpzIiwid2VicGFjazovL2Fwc2NwLy4vc3JjanMvbW9kdWxlcy9tYXBwZXIvYWRkLW1vdXNlLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly9hcHNjcC8uL3NyY2pzL21vZHVsZXMvbWFwcGVyL2FkZC1wb3B1cC5qcyIsIndlYnBhY2s6Ly9hcHNjcC8uL3NyY2pzL21vZHVsZXMvbWFwcGVyL2NyZWF0ZS1sZWdlbmQuanMiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy9tb2R1bGVzL21hcHBlci9tYXBwZXItY2xhc3MuanMiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy9tb2R1bGVzL21hcHBlci9tYXBwZXItc2NhZmZvbGQuanMiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy9tb2R1bGVzL3V0aWxzL2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy9tb2R1bGVzL3V0aWxzL21hcGJveGdsLmpzIiwid2VicGFjazovL2Fwc2NwLy4vc3JjanMvbW9kdWxlcy91dGlscy9wcm9qZWN0TWV0YWRhdGEuanMiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy9tb2R1bGVzL3V0aWxzL3Byb2plY3RTZWxlY3RPcHRpb25zLmpzIiwid2VicGFjazovL2Fwc2NwLy4vbm9kZV9tb2R1bGVzL3RvbS1zZWxlY3QvZGlzdC9qcy90b20tc2VsZWN0LmNvbXBsZXRlLm1pbi5qcyIsIndlYnBhY2s6Ly9hcHNjcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hcHNjcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hcHNjcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXBzY3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hcHNjcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Fwc2NwLy4vc3JjanMvd2lkZ2V0cy9tYXBwZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyoqIVxuICogU29ydGFibGUgMS4xNS43XG4gKiBAYXV0aG9yXHRSdWJhWGEgICA8dHJhc2hAcnViYXhhLm9yZz5cbiAqIEBhdXRob3JcdG93ZW5tICAgIDxvd2VuMjMzNTVAZ21haWwuY29tPlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KHIsIGEpIHtcbiAgKG51bGwgPT0gYSB8fCBhID4gci5sZW5ndGgpICYmIChhID0gci5sZW5ndGgpO1xuICBmb3IgKHZhciBlID0gMCwgbiA9IEFycmF5KGEpOyBlIDwgYTsgZSsrKSBuW2VdID0gcltlXTtcbiAgcmV0dXJuIG47XG59XG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMocikge1xuICBpZiAoQXJyYXkuaXNBcnJheShyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KHIpO1xufVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KGUsIHIsIHQpIHtcbiAgcmV0dXJuIChyID0gX3RvUHJvcGVydHlLZXkocikpIGluIGUgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwge1xuICAgIHZhbHVlOiB0LFxuICAgIGVudW1lcmFibGU6ICEwLFxuICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgd3JpdGFibGU6ICEwXG4gIH0pIDogZVtyXSA9IHQsIGU7XG59XG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgcmV0dXJuIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKG4pIHtcbiAgICBmb3IgKHZhciBlID0gMTsgZSA8IGFyZ3VtZW50cy5sZW5ndGg7IGUrKykge1xuICAgICAgdmFyIHQgPSBhcmd1bWVudHNbZV07XG4gICAgICBmb3IgKHZhciByIGluIHQpICh7fSkuaGFzT3duUHJvcGVydHkuY2FsbCh0LCByKSAmJiAobltyXSA9IHRbcl0pO1xuICAgIH1cbiAgICByZXR1cm4gbjtcbiAgfSwgX2V4dGVuZHMuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkocikge1xuICBpZiAoXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIG51bGwgIT0gcltTeW1ib2wuaXRlcmF0b3JdIHx8IG51bGwgIT0gcltcIkBAaXRlcmF0b3JcIl0pIHJldHVybiBBcnJheS5mcm9tKHIpO1xufVxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbmZ1bmN0aW9uIG93bktleXMoZSwgcikge1xuICB2YXIgdCA9IE9iamVjdC5rZXlzKGUpO1xuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBvID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtcbiAgICByICYmIChvID0gby5maWx0ZXIoZnVuY3Rpb24gKHIpIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIHIpLmVudW1lcmFibGU7XG4gICAgfSkpLCB0LnB1c2guYXBwbHkodCwgbyk7XG4gIH1cbiAgcmV0dXJuIHQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMihlKSB7XG4gIGZvciAodmFyIHIgPSAxOyByIDwgYXJndW1lbnRzLmxlbmd0aDsgcisrKSB7XG4gICAgdmFyIHQgPSBudWxsICE9IGFyZ3VtZW50c1tyXSA/IGFyZ3VtZW50c1tyXSA6IHt9O1xuICAgIHIgJSAyID8gb3duS2V5cyhPYmplY3QodCksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XG4gICAgICBfZGVmaW5lUHJvcGVydHkoZSwgciwgdFtyXSk7XG4gICAgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHQpKSA6IG93bktleXMoT2JqZWN0KHQpKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LCByKSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGU7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoZSwgdCkge1xuICBpZiAobnVsbCA9PSBlKSByZXR1cm4ge307XG4gIHZhciBvLFxuICAgIHIsXG4gICAgaSA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKGUsIHQpO1xuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBuID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtcbiAgICBmb3IgKHIgPSAwOyByIDwgbi5sZW5ndGg7IHIrKykgbyA9IG5bcl0sIC0xID09PSB0LmluZGV4T2YobykgJiYge30ucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLCBvKSAmJiAoaVtvXSA9IGVbb10pO1xuICB9XG4gIHJldHVybiBpO1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UociwgZSkge1xuICBpZiAobnVsbCA9PSByKSByZXR1cm4ge307XG4gIHZhciB0ID0ge307XG4gIGZvciAodmFyIG4gaW4gcikgaWYgKHt9Lmhhc093blByb3BlcnR5LmNhbGwociwgbikpIHtcbiAgICBpZiAoLTEgIT09IGUuaW5kZXhPZihuKSkgY29udGludWU7XG4gICAgdFtuXSA9IHJbbl07XG4gIH1cbiAgcmV0dXJuIHQ7XG59XG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkocikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKHIpIHx8IF9pdGVyYWJsZVRvQXJyYXkocikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KHIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHtcbiAgaWYgKFwib2JqZWN0XCIgIT0gdHlwZW9mIHQgfHwgIXQpIHJldHVybiB0O1xuICB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgIHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChcIm9iamVjdFwiICE9IHR5cGVvZiBpKSByZXR1cm4gaTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTtcbn1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHtcbiAgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7XG4gIHJldHVybiBcInN5bWJvbFwiID09IHR5cGVvZiBpID8gaSA6IGkgKyBcIlwiO1xufVxuZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgX3R5cGVvZihvKTtcbn1cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShyLCBhKSB7XG4gIGlmIChyKSB7XG4gICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShyLCBhKTtcbiAgICB2YXIgdCA9IHt9LnRvU3RyaW5nLmNhbGwocikuc2xpY2UoOCwgLTEpO1xuICAgIHJldHVybiBcIk9iamVjdFwiID09PSB0ICYmIHIuY29uc3RydWN0b3IgJiYgKHQgPSByLmNvbnN0cnVjdG9yLm5hbWUpLCBcIk1hcFwiID09PSB0IHx8IFwiU2V0XCIgPT09IHQgPyBBcnJheS5mcm9tKHIpIDogXCJBcmd1bWVudHNcIiA9PT0gdCB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdCh0KSA/IF9hcnJheUxpa2VUb0FycmF5KHIsIGEpIDogdm9pZCAwO1xuICB9XG59XG5cbnZhciB2ZXJzaW9uID0gXCIxLjE1LjdcIjtcblxuZnVuY3Rpb24gdXNlckFnZW50KHBhdHRlcm4pIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5uYXZpZ2F0b3IpIHtcbiAgICByZXR1cm4gISEgLypAX19QVVJFX18qL25hdmlnYXRvci51c2VyQWdlbnQubWF0Y2gocGF0dGVybik7XG4gIH1cbn1cbnZhciBJRTExT3JMZXNzID0gdXNlckFnZW50KC8oPzpUcmlkZW50LipydlsgOl0/MTFcXC58bXNpZXxpZW1vYmlsZXxXaW5kb3dzIFBob25lKS9pKTtcbnZhciBFZGdlID0gdXNlckFnZW50KC9FZGdlL2kpO1xudmFyIEZpcmVGb3ggPSB1c2VyQWdlbnQoL2ZpcmVmb3gvaSk7XG52YXIgU2FmYXJpID0gdXNlckFnZW50KC9zYWZhcmkvaSkgJiYgIXVzZXJBZ2VudCgvY2hyb21lL2kpICYmICF1c2VyQWdlbnQoL2FuZHJvaWQvaSk7XG52YXIgSU9TID0gdXNlckFnZW50KC9pUChhZHxvZHxob25lKS9pKTtcbnZhciBDaHJvbWVGb3JBbmRyb2lkID0gdXNlckFnZW50KC9jaHJvbWUvaSkgJiYgdXNlckFnZW50KC9hbmRyb2lkL2kpO1xuXG52YXIgY2FwdHVyZU1vZGUgPSB7XG4gIGNhcHR1cmU6IGZhbHNlLFxuICBwYXNzaXZlOiBmYWxzZVxufTtcbmZ1bmN0aW9uIG9uKGVsLCBldmVudCwgZm4pIHtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZm4sICFJRTExT3JMZXNzICYmIGNhcHR1cmVNb2RlKTtcbn1cbmZ1bmN0aW9uIG9mZihlbCwgZXZlbnQsIGZuKSB7XG4gIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGZuLCAhSUUxMU9yTGVzcyAmJiBjYXB0dXJlTW9kZSk7XG59XG5mdW5jdGlvbiBtYXRjaGVzKCAvKipIVE1MRWxlbWVudCovZWwsIC8qKlN0cmluZyovc2VsZWN0b3IpIHtcbiAgaWYgKCFzZWxlY3RvcikgcmV0dXJuO1xuICBzZWxlY3RvclswXSA9PT0gJz4nICYmIChzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cmluZygxKSk7XG4gIGlmIChlbCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoZWwubWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gZWwubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgICB9IGVsc2UgaWYgKGVsLm1zTWF0Y2hlc1NlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBlbC5tc01hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICB9IGVsc2UgaWYgKGVsLndlYmtpdE1hdGNoZXNTZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGdldFBhcmVudE9ySG9zdChlbCkge1xuICByZXR1cm4gZWwuaG9zdCAmJiBlbCAhPT0gZG9jdW1lbnQgJiYgZWwuaG9zdC5ub2RlVHlwZSAmJiBlbC5ob3N0ICE9PSBlbCA/IGVsLmhvc3QgOiBlbC5wYXJlbnROb2RlO1xufVxuZnVuY3Rpb24gY2xvc2VzdCggLyoqSFRNTEVsZW1lbnQqL2VsLCAvKipTdHJpbmcqL3NlbGVjdG9yLCAvKipIVE1MRWxlbWVudCovY3R4LCBpbmNsdWRlQ1RYKSB7XG4gIGlmIChlbCkge1xuICAgIGN0eCA9IGN0eCB8fCBkb2N1bWVudDtcbiAgICBkbyB7XG4gICAgICBpZiAoc2VsZWN0b3IgIT0gbnVsbCAmJiAoc2VsZWN0b3JbMF0gPT09ICc+JyA/IGVsLnBhcmVudE5vZGUgPT09IGN0eCAmJiBtYXRjaGVzKGVsLCBzZWxlY3RvcikgOiBtYXRjaGVzKGVsLCBzZWxlY3RvcikpIHx8IGluY2x1ZGVDVFggJiYgZWwgPT09IGN0eCkge1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgICBpZiAoZWwgPT09IGN0eCkgYnJlYWs7XG4gICAgICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG4gICAgfSB3aGlsZSAoZWwgPSBnZXRQYXJlbnRPckhvc3QoZWwpKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbnZhciBSX1NQQUNFID0gL1xccysvZztcbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsLCBuYW1lLCBzdGF0ZSkge1xuICBpZiAoZWwgJiYgbmFtZSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgIGVsLmNsYXNzTGlzdFtzdGF0ZSA/ICdhZGQnIDogJ3JlbW92ZSddKG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gKCcgJyArIGVsLmNsYXNzTmFtZSArICcgJykucmVwbGFjZShSX1NQQUNFLCAnICcpLnJlcGxhY2UoJyAnICsgbmFtZSArICcgJywgJyAnKTtcbiAgICAgIGVsLmNsYXNzTmFtZSA9IChjbGFzc05hbWUgKyAoc3RhdGUgPyAnICcgKyBuYW1lIDogJycpKS5yZXBsYWNlKFJfU1BBQ0UsICcgJyk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBjc3MoZWwsIHByb3AsIHZhbCkge1xuICB2YXIgc3R5bGUgPSBlbCAmJiBlbC5zdHlsZTtcbiAgaWYgKHN0eWxlKSB7XG4gICAgaWYgKHZhbCA9PT0gdm9pZCAwKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuZGVmYXVsdFZpZXcgJiYgZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuICAgICAgICB2YWwgPSBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGVsLCAnJyk7XG4gICAgICB9IGVsc2UgaWYgKGVsLmN1cnJlbnRTdHlsZSkge1xuICAgICAgICB2YWwgPSBlbC5jdXJyZW50U3R5bGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvcCA9PT0gdm9pZCAwID8gdmFsIDogdmFsW3Byb3BdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIShwcm9wIGluIHN0eWxlKSAmJiBwcm9wLmluZGV4T2YoJ3dlYmtpdCcpID09PSAtMSkge1xuICAgICAgICBwcm9wID0gJy13ZWJraXQtJyArIHByb3A7XG4gICAgICB9XG4gICAgICBzdHlsZVtwcm9wXSA9IHZhbCArICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/ICcnIDogJ3B4Jyk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBtYXRyaXgoZWwsIHNlbGZPbmx5KSB7XG4gIHZhciBhcHBsaWVkVHJhbnNmb3JtcyA9ICcnO1xuICBpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJykge1xuICAgIGFwcGxpZWRUcmFuc2Zvcm1zID0gZWw7XG4gIH0gZWxzZSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRyYW5zZm9ybSA9IGNzcyhlbCwgJ3RyYW5zZm9ybScpO1xuICAgICAgaWYgKHRyYW5zZm9ybSAmJiB0cmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgICAgICBhcHBsaWVkVHJhbnNmb3JtcyA9IHRyYW5zZm9ybSArICcgJyArIGFwcGxpZWRUcmFuc2Zvcm1zO1xuICAgICAgfVxuICAgICAgLyoganNoaW50IGJvc3M6dHJ1ZSAqL1xuICAgIH0gd2hpbGUgKCFzZWxmT25seSAmJiAoZWwgPSBlbC5wYXJlbnROb2RlKSk7XG4gIH1cbiAgdmFyIG1hdHJpeEZuID0gd2luZG93LkRPTU1hdHJpeCB8fCB3aW5kb3cuV2ViS2l0Q1NTTWF0cml4IHx8IHdpbmRvdy5DU1NNYXRyaXggfHwgd2luZG93Lk1TQ1NTTWF0cml4O1xuICAvKmpzaGludCAtVzA1NiAqL1xuICByZXR1cm4gbWF0cml4Rm4gJiYgbmV3IG1hdHJpeEZuKGFwcGxpZWRUcmFuc2Zvcm1zKTtcbn1cbmZ1bmN0aW9uIGZpbmQoY3R4LCB0YWdOYW1lLCBpdGVyYXRvcikge1xuICBpZiAoY3R4KSB7XG4gICAgdmFyIGxpc3QgPSBjdHguZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnTmFtZSksXG4gICAgICBpID0gMCxcbiAgICAgIG4gPSBsaXN0Lmxlbmd0aDtcbiAgICBpZiAoaXRlcmF0b3IpIHtcbiAgICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIGl0ZXJhdG9yKGxpc3RbaV0sIGkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGlzdDtcbiAgfVxuICByZXR1cm4gW107XG59XG5mdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCkge1xuICB2YXIgc2Nyb2xsaW5nRWxlbWVudCA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQ7XG4gIGlmIChzY3JvbGxpbmdFbGVtZW50KSB7XG4gICAgcmV0dXJuIHNjcm9sbGluZ0VsZW1lbnQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxufVxuXG4vKipcclxuICogUmV0dXJucyB0aGUgXCJib3VuZGluZyBjbGllbnQgcmVjdFwiIG9mIGdpdmVuIGVsZW1lbnRcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsICAgICAgICAgICAgICAgICAgICAgICBUaGUgZWxlbWVudCB3aG9zZSBib3VuZGluZ0NsaWVudFJlY3QgaXMgd2FudGVkXHJcbiAqIEBwYXJhbSAge1tCb29sZWFuXX0gcmVsYXRpdmVUb0NvbnRhaW5pbmdCbG9jayAgV2hldGhlciB0aGUgcmVjdCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGNvbnRhaW5pbmcgYmxvY2sgb2YgKGluY2x1ZGluZykgdGhlIGNvbnRhaW5lclxyXG4gKiBAcGFyYW0gIHtbQm9vbGVhbl19IHJlbGF0aXZlVG9Ob25TdGF0aWNQYXJlbnQgIFdoZXRoZXIgdGhlIHJlY3Qgc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSByZWxhdGl2ZSBwYXJlbnQgb2YgKGluY2x1ZGluZykgdGhlIGNvbnRhaWVuclxyXG4gKiBAcGFyYW0gIHtbQm9vbGVhbl19IHVuZG9TY2FsZSAgICAgICAgICAgICAgICAgIFdoZXRoZXIgdGhlIGNvbnRhaW5lcidzIHNjYWxlKCkgc2hvdWxkIGJlIHVuZG9uZVxyXG4gKiBAcGFyYW0gIHtbSFRNTEVsZW1lbnRdfSBjb250YWluZXIgICAgICAgICAgICAgIFRoZSBwYXJlbnQgdGhlIGVsZW1lbnQgd2lsbCBiZSBwbGFjZWQgaW5cclxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgYm91bmRpbmdDbGllbnRSZWN0IG9mIGVsLCB3aXRoIHNwZWNpZmllZCBhZGp1c3RtZW50c1xyXG4gKi9cbmZ1bmN0aW9uIGdldFJlY3QoZWwsIHJlbGF0aXZlVG9Db250YWluaW5nQmxvY2ssIHJlbGF0aXZlVG9Ob25TdGF0aWNQYXJlbnQsIHVuZG9TY2FsZSwgY29udGFpbmVyKSB7XG4gIGlmICghZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICYmIGVsICE9PSB3aW5kb3cpIHJldHVybjtcbiAgdmFyIGVsUmVjdCwgdG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0LCBoZWlnaHQsIHdpZHRoO1xuICBpZiAoZWwgIT09IHdpbmRvdyAmJiBlbC5wYXJlbnROb2RlICYmIGVsICE9PSBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCkpIHtcbiAgICBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0b3AgPSBlbFJlY3QudG9wO1xuICAgIGxlZnQgPSBlbFJlY3QubGVmdDtcbiAgICBib3R0b20gPSBlbFJlY3QuYm90dG9tO1xuICAgIHJpZ2h0ID0gZWxSZWN0LnJpZ2h0O1xuICAgIGhlaWdodCA9IGVsUmVjdC5oZWlnaHQ7XG4gICAgd2lkdGggPSBlbFJlY3Qud2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgdG9wID0gMDtcbiAgICBsZWZ0ID0gMDtcbiAgICBib3R0b20gPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgcmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgfVxuICBpZiAoKHJlbGF0aXZlVG9Db250YWluaW5nQmxvY2sgfHwgcmVsYXRpdmVUb05vblN0YXRpY1BhcmVudCkgJiYgZWwgIT09IHdpbmRvdykge1xuICAgIC8vIEFkanVzdCBmb3IgdHJhbnNsYXRlKClcbiAgICBjb250YWluZXIgPSBjb250YWluZXIgfHwgZWwucGFyZW50Tm9kZTtcblxuICAgIC8vIHNvbHZlcyAjMTEyMyAoc2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzc5NTM4MDYvNjA4ODMxMilcbiAgICAvLyBOb3QgbmVlZGVkIG9uIDw9IElFMTFcbiAgICBpZiAoIUlFMTFPckxlc3MpIHtcbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKGNvbnRhaW5lciAmJiBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICYmIChjc3MoY29udGFpbmVyLCAndHJhbnNmb3JtJykgIT09ICdub25lJyB8fCByZWxhdGl2ZVRvTm9uU3RhdGljUGFyZW50ICYmIGNzcyhjb250YWluZXIsICdwb3NpdGlvbicpICE9PSAnc3RhdGljJykpIHtcbiAgICAgICAgICB2YXIgY29udGFpbmVyUmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgIC8vIFNldCByZWxhdGl2ZSB0byBlZGdlcyBvZiBwYWRkaW5nIGJveCBvZiBjb250YWluZXJcbiAgICAgICAgICB0b3AgLT0gY29udGFpbmVyUmVjdC50b3AgKyBwYXJzZUludChjc3MoY29udGFpbmVyLCAnYm9yZGVyLXRvcC13aWR0aCcpKTtcbiAgICAgICAgICBsZWZ0IC09IGNvbnRhaW5lclJlY3QubGVmdCArIHBhcnNlSW50KGNzcyhjb250YWluZXIsICdib3JkZXItbGVmdC13aWR0aCcpKTtcbiAgICAgICAgICBib3R0b20gPSB0b3AgKyBlbFJlY3QuaGVpZ2h0O1xuICAgICAgICAgIHJpZ2h0ID0gbGVmdCArIGVsUmVjdC53aWR0aDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG4gICAgICB9IHdoaWxlIChjb250YWluZXIgPSBjb250YWluZXIucGFyZW50Tm9kZSk7XG4gICAgfVxuICB9XG4gIGlmICh1bmRvU2NhbGUgJiYgZWwgIT09IHdpbmRvdykge1xuICAgIC8vIEFkanVzdCBmb3Igc2NhbGUoKVxuICAgIHZhciBlbE1hdHJpeCA9IG1hdHJpeChjb250YWluZXIgfHwgZWwpLFxuICAgICAgc2NhbGVYID0gZWxNYXRyaXggJiYgZWxNYXRyaXguYSxcbiAgICAgIHNjYWxlWSA9IGVsTWF0cml4ICYmIGVsTWF0cml4LmQ7XG4gICAgaWYgKGVsTWF0cml4KSB7XG4gICAgICB0b3AgLz0gc2NhbGVZO1xuICAgICAgbGVmdCAvPSBzY2FsZVg7XG4gICAgICB3aWR0aCAvPSBzY2FsZVg7XG4gICAgICBoZWlnaHQgLz0gc2NhbGVZO1xuICAgICAgYm90dG9tID0gdG9wICsgaGVpZ2h0O1xuICAgICAgcmlnaHQgPSBsZWZ0ICsgd2lkdGg7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgdG9wOiB0b3AsXG4gICAgbGVmdDogbGVmdCxcbiAgICBib3R0b206IGJvdHRvbSxcbiAgICByaWdodDogcmlnaHQsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0XG4gIH07XG59XG5cbi8qKlxyXG4gKiBDaGVja3MgaWYgYSBzaWRlIG9mIGFuIGVsZW1lbnQgaXMgc2Nyb2xsZWQgcGFzdCBhIHNpZGUgb2YgaXRzIHBhcmVudHNcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9ICBlbCAgICAgICAgICAgVGhlIGVsZW1lbnQgd2hvJ3Mgc2lkZSBiZWluZyBzY3JvbGxlZCBvdXQgb2YgdmlldyBpcyBpbiBxdWVzdGlvblxyXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgIGVsU2lkZSAgICAgICBTaWRlIG9mIHRoZSBlbGVtZW50IGluIHF1ZXN0aW9uICgndG9wJywgJ2xlZnQnLCAncmlnaHQnLCAnYm90dG9tJylcclxuICogQHBhcmFtICB7U3RyaW5nfSAgICAgICBwYXJlbnRTaWRlICAgU2lkZSBvZiB0aGUgcGFyZW50IGluIHF1ZXN0aW9uICgndG9wJywgJ2xlZnQnLCAncmlnaHQnLCAnYm90dG9tJylcclxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9ICAgICAgICAgICAgICAgVGhlIHBhcmVudCBzY3JvbGwgZWxlbWVudCB0aGF0IHRoZSBlbCdzIHNpZGUgaXMgc2Nyb2xsZWQgcGFzdCwgb3IgbnVsbCBpZiB0aGVyZSBpcyBubyBzdWNoIGVsZW1lbnRcclxuICovXG5mdW5jdGlvbiBpc1Njcm9sbGVkUGFzdChlbCwgZWxTaWRlLCBwYXJlbnRTaWRlKSB7XG4gIHZhciBwYXJlbnQgPSBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChlbCwgdHJ1ZSksXG4gICAgZWxTaWRlVmFsID0gZ2V0UmVjdChlbClbZWxTaWRlXTtcblxuICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG4gIHdoaWxlIChwYXJlbnQpIHtcbiAgICB2YXIgcGFyZW50U2lkZVZhbCA9IGdldFJlY3QocGFyZW50KVtwYXJlbnRTaWRlXSxcbiAgICAgIHZpc2libGUgPSB2b2lkIDA7XG4gICAgaWYgKHBhcmVudFNpZGUgPT09ICd0b3AnIHx8IHBhcmVudFNpZGUgPT09ICdsZWZ0Jykge1xuICAgICAgdmlzaWJsZSA9IGVsU2lkZVZhbCA+PSBwYXJlbnRTaWRlVmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aXNpYmxlID0gZWxTaWRlVmFsIDw9IHBhcmVudFNpZGVWYWw7XG4gICAgfVxuICAgIGlmICghdmlzaWJsZSkgcmV0dXJuIHBhcmVudDtcbiAgICBpZiAocGFyZW50ID09PSBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCkpIGJyZWFrO1xuICAgIHBhcmVudCA9IGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KHBhcmVudCwgZmFsc2UpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXHJcbiAqIEdldHMgbnRoIGNoaWxkIG9mIGVsLCBpZ25vcmluZyBoaWRkZW4gY2hpbGRyZW4sIHNvcnRhYmxlJ3MgZWxlbWVudHMgKGRvZXMgbm90IGlnbm9yZSBjbG9uZSBpZiBpdCdzIHZpc2libGUpXHJcbiAqIGFuZCBub24tZHJhZ2dhYmxlIGVsZW1lbnRzXHJcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbCAgICAgICBUaGUgcGFyZW50IGVsZW1lbnRcclxuICogQHBhcmFtICB7TnVtYmVyfSBjaGlsZE51bSAgICAgIFRoZSBpbmRleCBvZiB0aGUgY2hpbGRcclxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zICAgICAgIFBhcmVudCBTb3J0YWJsZSdzIG9wdGlvbnNcclxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9ICAgICAgICAgIFRoZSBjaGlsZCBhdCBpbmRleCBjaGlsZE51bSwgb3IgbnVsbCBpZiBub3QgZm91bmRcclxuICovXG5mdW5jdGlvbiBnZXRDaGlsZChlbCwgY2hpbGROdW0sIG9wdGlvbnMsIGluY2x1ZGVEcmFnRWwpIHtcbiAgdmFyIGN1cnJlbnRDaGlsZCA9IDAsXG4gICAgaSA9IDAsXG4gICAgY2hpbGRyZW4gPSBlbC5jaGlsZHJlbjtcbiAgd2hpbGUgKGkgPCBjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICBpZiAoY2hpbGRyZW5baV0uc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnICYmIGNoaWxkcmVuW2ldICE9PSBTb3J0YWJsZS5naG9zdCAmJiAoaW5jbHVkZURyYWdFbCB8fCBjaGlsZHJlbltpXSAhPT0gU29ydGFibGUuZHJhZ2dlZCkgJiYgY2xvc2VzdChjaGlsZHJlbltpXSwgb3B0aW9ucy5kcmFnZ2FibGUsIGVsLCBmYWxzZSkpIHtcbiAgICAgIGlmIChjdXJyZW50Q2hpbGQgPT09IGNoaWxkTnVtKSB7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbltpXTtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnRDaGlsZCsrO1xuICAgIH1cbiAgICBpKys7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxyXG4gKiBHZXRzIHRoZSBsYXN0IGNoaWxkIGluIHRoZSBlbCwgaWdub3JpbmcgZ2hvc3RFbCBvciBpbnZpc2libGUgZWxlbWVudHMgKGNsb25lcylcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsICAgICAgIFBhcmVudCBlbGVtZW50XHJcbiAqIEBwYXJhbSAge3NlbGVjdG9yfSBzZWxlY3RvciAgICBBbnkgb3RoZXIgZWxlbWVudHMgdGhhdCBzaG91bGQgYmUgaWdub3JlZFxyXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gICAgICAgICAgVGhlIGxhc3QgY2hpbGQsIGlnbm9yaW5nIGdob3N0RWxcclxuICovXG5mdW5jdGlvbiBsYXN0Q2hpbGQoZWwsIHNlbGVjdG9yKSB7XG4gIHZhciBsYXN0ID0gZWwubGFzdEVsZW1lbnRDaGlsZDtcbiAgd2hpbGUgKGxhc3QgJiYgKGxhc3QgPT09IFNvcnRhYmxlLmdob3N0IHx8IGNzcyhsYXN0LCAnZGlzcGxheScpID09PSAnbm9uZScgfHwgc2VsZWN0b3IgJiYgIW1hdGNoZXMobGFzdCwgc2VsZWN0b3IpKSkge1xuICAgIGxhc3QgPSBsYXN0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gIH1cbiAgcmV0dXJuIGxhc3QgfHwgbnVsbDtcbn1cblxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGluZGV4IG9mIGFuIGVsZW1lbnQgd2l0aGluIGl0cyBwYXJlbnQgZm9yIGEgc2VsZWN0ZWQgc2V0IG9mXHJcbiAqIGVsZW1lbnRzXHJcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbFxyXG4gKiBAcGFyYW0gIHtzZWxlY3Rvcn0gc2VsZWN0b3JcclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cbmZ1bmN0aW9uIGluZGV4KGVsLCBzZWxlY3Rvcikge1xuICB2YXIgaW5kZXggPSAwO1xuICBpZiAoIWVsIHx8ICFlbC5wYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgLyoganNoaW50IGJvc3M6dHJ1ZSAqL1xuICB3aGlsZSAoZWwgPSBlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XG4gICAgaWYgKGVsLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgIT09ICdURU1QTEFURScgJiYgZWwgIT09IFNvcnRhYmxlLmNsb25lICYmICghc2VsZWN0b3IgfHwgbWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSkge1xuICAgICAgaW5kZXgrKztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGluZGV4O1xufVxuXG4vKipcclxuICogUmV0dXJucyB0aGUgc2Nyb2xsIG9mZnNldCBvZiB0aGUgZ2l2ZW4gZWxlbWVudCwgYWRkZWQgd2l0aCBhbGwgdGhlIHNjcm9sbCBvZmZzZXRzIG9mIHBhcmVudCBlbGVtZW50cy5cclxuICogVGhlIHZhbHVlIGlzIHJldHVybmVkIGluIHJlYWwgcGl4ZWxzLlxyXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWxcclxuICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgICAgIE9mZnNldHMgaW4gdGhlIGZvcm1hdCBvZiBbbGVmdCwgdG9wXVxyXG4gKi9cbmZ1bmN0aW9uIGdldFJlbGF0aXZlU2Nyb2xsT2Zmc2V0KGVsKSB7XG4gIHZhciBvZmZzZXRMZWZ0ID0gMCxcbiAgICBvZmZzZXRUb3AgPSAwLFxuICAgIHdpblNjcm9sbGVyID0gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpO1xuICBpZiAoZWwpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgZWxNYXRyaXggPSBtYXRyaXgoZWwpLFxuICAgICAgICBzY2FsZVggPSBlbE1hdHJpeC5hLFxuICAgICAgICBzY2FsZVkgPSBlbE1hdHJpeC5kO1xuICAgICAgb2Zmc2V0TGVmdCArPSBlbC5zY3JvbGxMZWZ0ICogc2NhbGVYO1xuICAgICAgb2Zmc2V0VG9wICs9IGVsLnNjcm9sbFRvcCAqIHNjYWxlWTtcbiAgICB9IHdoaWxlIChlbCAhPT0gd2luU2Nyb2xsZXIgJiYgKGVsID0gZWwucGFyZW50Tm9kZSkpO1xuICB9XG4gIHJldHVybiBbb2Zmc2V0TGVmdCwgb2Zmc2V0VG9wXTtcbn1cblxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBvYmplY3Qgd2l0aGluIHRoZSBnaXZlbiBhcnJheVxyXG4gKiBAcGFyYW0gIHtBcnJheX0gYXJyICAgQXJyYXkgdGhhdCBtYXkgb3IgbWF5IG5vdCBob2xkIHRoZSBvYmplY3RcclxuICogQHBhcmFtICB7T2JqZWN0fSBvYmogIEFuIG9iamVjdCB0aGF0IGhhcyBhIGtleS12YWx1ZSBwYWlyIHVuaXF1ZSB0byBhbmQgaWRlbnRpY2FsIHRvIGEga2V5LXZhbHVlIHBhaXIgaW4gdGhlIG9iamVjdCB5b3Ugd2FudCB0byBmaW5kXHJcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICBUaGUgaW5kZXggb2YgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXksIG9yIC0xXHJcbiAqL1xuZnVuY3Rpb24gaW5kZXhPZk9iamVjdChhcnIsIG9iaikge1xuICBmb3IgKHZhciBpIGluIGFycikge1xuICAgIGlmICghYXJyLmhhc093blByb3BlcnR5KGkpKSBjb250aW51ZTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkgJiYgb2JqW2tleV0gPT09IGFycltpXVtrZXldKSByZXR1cm4gTnVtYmVyKGkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5mdW5jdGlvbiBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChlbCwgaW5jbHVkZVNlbGYpIHtcbiAgLy8gc2tpcCB0byB3aW5kb3dcbiAgaWYgKCFlbCB8fCAhZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSByZXR1cm4gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpO1xuICB2YXIgZWxlbSA9IGVsO1xuICB2YXIgZ290U2VsZiA9IGZhbHNlO1xuICBkbyB7XG4gICAgLy8gd2UgZG9uJ3QgbmVlZCB0byBnZXQgZWxlbSBjc3MgaWYgaXQgaXNuJ3QgZXZlbiBvdmVyZmxvd2luZyBpbiB0aGUgZmlyc3QgcGxhY2UgKHBlcmZvcm1hbmNlKVxuICAgIGlmIChlbGVtLmNsaWVudFdpZHRoIDwgZWxlbS5zY3JvbGxXaWR0aCB8fCBlbGVtLmNsaWVudEhlaWdodCA8IGVsZW0uc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICB2YXIgZWxlbUNTUyA9IGNzcyhlbGVtKTtcbiAgICAgIGlmIChlbGVtLmNsaWVudFdpZHRoIDwgZWxlbS5zY3JvbGxXaWR0aCAmJiAoZWxlbUNTUy5vdmVyZmxvd1ggPT0gJ2F1dG8nIHx8IGVsZW1DU1Mub3ZlcmZsb3dYID09ICdzY3JvbGwnKSB8fCBlbGVtLmNsaWVudEhlaWdodCA8IGVsZW0uc2Nyb2xsSGVpZ2h0ICYmIChlbGVtQ1NTLm92ZXJmbG93WSA9PSAnYXV0bycgfHwgZWxlbUNTUy5vdmVyZmxvd1kgPT0gJ3Njcm9sbCcpKSB7XG4gICAgICAgIGlmICghZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgfHwgZWxlbSA9PT0gZG9jdW1lbnQuYm9keSkgcmV0dXJuIGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKTtcbiAgICAgICAgaWYgKGdvdFNlbGYgfHwgaW5jbHVkZVNlbGYpIHJldHVybiBlbGVtO1xuICAgICAgICBnb3RTZWxmID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoganNoaW50IGJvc3M6dHJ1ZSAqL1xuICB9IHdoaWxlIChlbGVtID0gZWxlbS5wYXJlbnROb2RlKTtcbiAgcmV0dXJuIGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKTtcbn1cbmZ1bmN0aW9uIGV4dGVuZChkc3QsIHNyYykge1xuICBpZiAoZHN0ICYmIHNyYykge1xuICAgIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBkc3Rba2V5XSA9IHNyY1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZHN0O1xufVxuZnVuY3Rpb24gaXNSZWN0RXF1YWwocmVjdDEsIHJlY3QyKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKHJlY3QxLnRvcCkgPT09IE1hdGgucm91bmQocmVjdDIudG9wKSAmJiBNYXRoLnJvdW5kKHJlY3QxLmxlZnQpID09PSBNYXRoLnJvdW5kKHJlY3QyLmxlZnQpICYmIE1hdGgucm91bmQocmVjdDEuaGVpZ2h0KSA9PT0gTWF0aC5yb3VuZChyZWN0Mi5oZWlnaHQpICYmIE1hdGgucm91bmQocmVjdDEud2lkdGgpID09PSBNYXRoLnJvdW5kKHJlY3QyLndpZHRoKTtcbn1cbnZhciBfdGhyb3R0bGVUaW1lb3V0O1xuZnVuY3Rpb24gdGhyb3R0bGUoY2FsbGJhY2ssIG1zKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFfdGhyb3R0bGVUaW1lb3V0KSB7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgX3RoaXMgPSB0aGlzO1xuICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwoX3RoaXMsIGFyZ3NbMF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2suYXBwbHkoX3RoaXMsIGFyZ3MpO1xuICAgICAgfVxuICAgICAgX3Rocm90dGxlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhyb3R0bGVUaW1lb3V0ID0gdm9pZCAwO1xuICAgICAgfSwgbXMpO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGNhbmNlbFRocm90dGxlKCkge1xuICBjbGVhclRpbWVvdXQoX3Rocm90dGxlVGltZW91dCk7XG4gIF90aHJvdHRsZVRpbWVvdXQgPSB2b2lkIDA7XG59XG5mdW5jdGlvbiBzY3JvbGxCeShlbCwgeCwgeSkge1xuICBlbC5zY3JvbGxMZWZ0ICs9IHg7XG4gIGVsLnNjcm9sbFRvcCArPSB5O1xufVxuZnVuY3Rpb24gY2xvbmUoZWwpIHtcbiAgdmFyIFBvbHltZXIgPSB3aW5kb3cuUG9seW1lcjtcbiAgdmFyICQgPSB3aW5kb3cualF1ZXJ5IHx8IHdpbmRvdy5aZXB0bztcbiAgaWYgKFBvbHltZXIgJiYgUG9seW1lci5kb20pIHtcbiAgICByZXR1cm4gUG9seW1lci5kb20oZWwpLmNsb25lTm9kZSh0cnVlKTtcbiAgfSBlbHNlIGlmICgkKSB7XG4gICAgcmV0dXJuICQoZWwpLmNsb25lKHRydWUpWzBdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlbC5jbG9uZU5vZGUodHJ1ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHNldFJlY3QoZWwsIHJlY3QpIHtcbiAgY3NzKGVsLCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgY3NzKGVsLCAndG9wJywgcmVjdC50b3ApO1xuICBjc3MoZWwsICdsZWZ0JywgcmVjdC5sZWZ0KTtcbiAgY3NzKGVsLCAnd2lkdGgnLCByZWN0LndpZHRoKTtcbiAgY3NzKGVsLCAnaGVpZ2h0JywgcmVjdC5oZWlnaHQpO1xufVxuZnVuY3Rpb24gdW5zZXRSZWN0KGVsKSB7XG4gIGNzcyhlbCwgJ3Bvc2l0aW9uJywgJycpO1xuICBjc3MoZWwsICd0b3AnLCAnJyk7XG4gIGNzcyhlbCwgJ2xlZnQnLCAnJyk7XG4gIGNzcyhlbCwgJ3dpZHRoJywgJycpO1xuICBjc3MoZWwsICdoZWlnaHQnLCAnJyk7XG59XG5mdW5jdGlvbiBnZXRDaGlsZENvbnRhaW5pbmdSZWN0RnJvbUVsZW1lbnQoY29udGFpbmVyLCBvcHRpb25zLCBnaG9zdEVsKSB7XG4gIHZhciByZWN0ID0ge307XG4gIEFycmF5LmZyb20oY29udGFpbmVyLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHZhciBfcmVjdCRsZWZ0LCBfcmVjdCR0b3AsIF9yZWN0JHJpZ2h0LCBfcmVjdCRib3R0b207XG4gICAgaWYgKCFjbG9zZXN0KGNoaWxkLCBvcHRpb25zLmRyYWdnYWJsZSwgY29udGFpbmVyLCBmYWxzZSkgfHwgY2hpbGQuYW5pbWF0ZWQgfHwgY2hpbGQgPT09IGdob3N0RWwpIHJldHVybjtcbiAgICB2YXIgY2hpbGRSZWN0ID0gZ2V0UmVjdChjaGlsZCk7XG4gICAgcmVjdC5sZWZ0ID0gTWF0aC5taW4oKF9yZWN0JGxlZnQgPSByZWN0LmxlZnQpICE9PSBudWxsICYmIF9yZWN0JGxlZnQgIT09IHZvaWQgMCA/IF9yZWN0JGxlZnQgOiBJbmZpbml0eSwgY2hpbGRSZWN0LmxlZnQpO1xuICAgIHJlY3QudG9wID0gTWF0aC5taW4oKF9yZWN0JHRvcCA9IHJlY3QudG9wKSAhPT0gbnVsbCAmJiBfcmVjdCR0b3AgIT09IHZvaWQgMCA/IF9yZWN0JHRvcCA6IEluZmluaXR5LCBjaGlsZFJlY3QudG9wKTtcbiAgICByZWN0LnJpZ2h0ID0gTWF0aC5tYXgoKF9yZWN0JHJpZ2h0ID0gcmVjdC5yaWdodCkgIT09IG51bGwgJiYgX3JlY3QkcmlnaHQgIT09IHZvaWQgMCA/IF9yZWN0JHJpZ2h0IDogLUluZmluaXR5LCBjaGlsZFJlY3QucmlnaHQpO1xuICAgIHJlY3QuYm90dG9tID0gTWF0aC5tYXgoKF9yZWN0JGJvdHRvbSA9IHJlY3QuYm90dG9tKSAhPT0gbnVsbCAmJiBfcmVjdCRib3R0b20gIT09IHZvaWQgMCA/IF9yZWN0JGJvdHRvbSA6IC1JbmZpbml0eSwgY2hpbGRSZWN0LmJvdHRvbSk7XG4gIH0pO1xuICByZWN0LndpZHRoID0gcmVjdC5yaWdodCAtIHJlY3QubGVmdDtcbiAgcmVjdC5oZWlnaHQgPSByZWN0LmJvdHRvbSAtIHJlY3QudG9wO1xuICByZWN0LnggPSByZWN0LmxlZnQ7XG4gIHJlY3QueSA9IHJlY3QudG9wO1xuICByZXR1cm4gcmVjdDtcbn1cbnZhciBleHBhbmRvID0gJ1NvcnRhYmxlJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG5mdW5jdGlvbiBBbmltYXRpb25TdGF0ZU1hbmFnZXIoKSB7XG4gIHZhciBhbmltYXRpb25TdGF0ZXMgPSBbXSxcbiAgICBhbmltYXRpb25DYWxsYmFja0lkO1xuICByZXR1cm4ge1xuICAgIGNhcHR1cmVBbmltYXRpb25TdGF0ZTogZnVuY3Rpb24gY2FwdHVyZUFuaW1hdGlvblN0YXRlKCkge1xuICAgICAgYW5pbWF0aW9uU3RhdGVzID0gW107XG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5hbmltYXRpb24pIHJldHVybjtcbiAgICAgIHZhciBjaGlsZHJlbiA9IFtdLnNsaWNlLmNhbGwodGhpcy5lbC5jaGlsZHJlbik7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoY3NzKGNoaWxkLCAnZGlzcGxheScpID09PSAnbm9uZScgfHwgY2hpbGQgPT09IFNvcnRhYmxlLmdob3N0KSByZXR1cm47XG4gICAgICAgIGFuaW1hdGlvblN0YXRlcy5wdXNoKHtcbiAgICAgICAgICB0YXJnZXQ6IGNoaWxkLFxuICAgICAgICAgIHJlY3Q6IGdldFJlY3QoY2hpbGQpXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgZnJvbVJlY3QgPSBfb2JqZWN0U3ByZWFkMih7fSwgYW5pbWF0aW9uU3RhdGVzW2FuaW1hdGlvblN0YXRlcy5sZW5ndGggLSAxXS5yZWN0KTtcblxuICAgICAgICAvLyBJZiBhbmltYXRpbmc6IGNvbXBlbnNhdGUgZm9yIGN1cnJlbnQgYW5pbWF0aW9uXG4gICAgICAgIGlmIChjaGlsZC50aGlzQW5pbWF0aW9uRHVyYXRpb24pIHtcbiAgICAgICAgICB2YXIgY2hpbGRNYXRyaXggPSBtYXRyaXgoY2hpbGQsIHRydWUpO1xuICAgICAgICAgIGlmIChjaGlsZE1hdHJpeCkge1xuICAgICAgICAgICAgZnJvbVJlY3QudG9wIC09IGNoaWxkTWF0cml4LmY7XG4gICAgICAgICAgICBmcm9tUmVjdC5sZWZ0IC09IGNoaWxkTWF0cml4LmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNoaWxkLmZyb21SZWN0ID0gZnJvbVJlY3Q7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGFkZEFuaW1hdGlvblN0YXRlOiBmdW5jdGlvbiBhZGRBbmltYXRpb25TdGF0ZShzdGF0ZSkge1xuICAgICAgYW5pbWF0aW9uU3RhdGVzLnB1c2goc3RhdGUpO1xuICAgIH0sXG4gICAgcmVtb3ZlQW5pbWF0aW9uU3RhdGU6IGZ1bmN0aW9uIHJlbW92ZUFuaW1hdGlvblN0YXRlKHRhcmdldCkge1xuICAgICAgYW5pbWF0aW9uU3RhdGVzLnNwbGljZShpbmRleE9mT2JqZWN0KGFuaW1hdGlvblN0YXRlcywge1xuICAgICAgICB0YXJnZXQ6IHRhcmdldFxuICAgICAgfSksIDEpO1xuICAgIH0sXG4gICAgYW5pbWF0ZUFsbDogZnVuY3Rpb24gYW5pbWF0ZUFsbChjYWxsYmFjaykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIGlmICghdGhpcy5vcHRpb25zLmFuaW1hdGlvbikge1xuICAgICAgICBjbGVhclRpbWVvdXQoYW5pbWF0aW9uQ2FsbGJhY2tJZCk7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBhbmltYXRpbmcgPSBmYWxzZSxcbiAgICAgICAgYW5pbWF0aW9uVGltZSA9IDA7XG4gICAgICBhbmltYXRpb25TdGF0ZXMuZm9yRWFjaChmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIHRpbWUgPSAwLFxuICAgICAgICAgIHRhcmdldCA9IHN0YXRlLnRhcmdldCxcbiAgICAgICAgICBmcm9tUmVjdCA9IHRhcmdldC5mcm9tUmVjdCxcbiAgICAgICAgICB0b1JlY3QgPSBnZXRSZWN0KHRhcmdldCksXG4gICAgICAgICAgcHJldkZyb21SZWN0ID0gdGFyZ2V0LnByZXZGcm9tUmVjdCxcbiAgICAgICAgICBwcmV2VG9SZWN0ID0gdGFyZ2V0LnByZXZUb1JlY3QsXG4gICAgICAgICAgYW5pbWF0aW5nUmVjdCA9IHN0YXRlLnJlY3QsXG4gICAgICAgICAgdGFyZ2V0TWF0cml4ID0gbWF0cml4KHRhcmdldCwgdHJ1ZSk7XG4gICAgICAgIGlmICh0YXJnZXRNYXRyaXgpIHtcbiAgICAgICAgICAvLyBDb21wZW5zYXRlIGZvciBjdXJyZW50IGFuaW1hdGlvblxuICAgICAgICAgIHRvUmVjdC50b3AgLT0gdGFyZ2V0TWF0cml4LmY7XG4gICAgICAgICAgdG9SZWN0LmxlZnQgLT0gdGFyZ2V0TWF0cml4LmU7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0LnRvUmVjdCA9IHRvUmVjdDtcbiAgICAgICAgaWYgKHRhcmdldC50aGlzQW5pbWF0aW9uRHVyYXRpb24pIHtcbiAgICAgICAgICAvLyBDb3VsZCBhbHNvIGNoZWNrIGlmIGFuaW1hdGluZ1JlY3QgaXMgYmV0d2VlbiBmcm9tUmVjdCBhbmQgdG9SZWN0XG4gICAgICAgICAgaWYgKGlzUmVjdEVxdWFsKHByZXZGcm9tUmVjdCwgdG9SZWN0KSAmJiAhaXNSZWN0RXF1YWwoZnJvbVJlY3QsIHRvUmVjdCkgJiZcbiAgICAgICAgICAvLyBNYWtlIHN1cmUgYW5pbWF0aW5nUmVjdCBpcyBvbiBsaW5lIGJldHdlZW4gdG9SZWN0ICYgZnJvbVJlY3RcbiAgICAgICAgICAoYW5pbWF0aW5nUmVjdC50b3AgLSB0b1JlY3QudG9wKSAvIChhbmltYXRpbmdSZWN0LmxlZnQgLSB0b1JlY3QubGVmdCkgPT09IChmcm9tUmVjdC50b3AgLSB0b1JlY3QudG9wKSAvIChmcm9tUmVjdC5sZWZ0IC0gdG9SZWN0LmxlZnQpKSB7XG4gICAgICAgICAgICAvLyBJZiByZXR1cm5pbmcgdG8gc2FtZSBwbGFjZSBhcyBzdGFydGVkIGZyb20gYW5pbWF0aW9uIGFuZCBvbiBzYW1lIGF4aXNcbiAgICAgICAgICAgIHRpbWUgPSBjYWxjdWxhdGVSZWFsVGltZShhbmltYXRpbmdSZWN0LCBwcmV2RnJvbVJlY3QsIHByZXZUb1JlY3QsIF90aGlzLm9wdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGZyb21SZWN0ICE9IHRvUmVjdDogYW5pbWF0ZVxuICAgICAgICBpZiAoIWlzUmVjdEVxdWFsKHRvUmVjdCwgZnJvbVJlY3QpKSB7XG4gICAgICAgICAgdGFyZ2V0LnByZXZGcm9tUmVjdCA9IGZyb21SZWN0O1xuICAgICAgICAgIHRhcmdldC5wcmV2VG9SZWN0ID0gdG9SZWN0O1xuICAgICAgICAgIGlmICghdGltZSkge1xuICAgICAgICAgICAgdGltZSA9IF90aGlzLm9wdGlvbnMuYW5pbWF0aW9uO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfdGhpcy5hbmltYXRlKHRhcmdldCwgYW5pbWF0aW5nUmVjdCwgdG9SZWN0LCB0aW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGltZSkge1xuICAgICAgICAgIGFuaW1hdGluZyA9IHRydWU7XG4gICAgICAgICAgYW5pbWF0aW9uVGltZSA9IE1hdGgubWF4KGFuaW1hdGlvblRpbWUsIHRpbWUpO1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0YXJnZXQuYW5pbWF0aW9uUmVzZXRUaW1lcik7XG4gICAgICAgICAgdGFyZ2V0LmFuaW1hdGlvblJlc2V0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRhcmdldC5hbmltYXRpb25UaW1lID0gMDtcbiAgICAgICAgICAgIHRhcmdldC5wcmV2RnJvbVJlY3QgPSBudWxsO1xuICAgICAgICAgICAgdGFyZ2V0LmZyb21SZWN0ID0gbnVsbDtcbiAgICAgICAgICAgIHRhcmdldC5wcmV2VG9SZWN0ID0gbnVsbDtcbiAgICAgICAgICAgIHRhcmdldC50aGlzQW5pbWF0aW9uRHVyYXRpb24gPSBudWxsO1xuICAgICAgICAgIH0sIHRpbWUpO1xuICAgICAgICAgIHRhcmdldC50aGlzQW5pbWF0aW9uRHVyYXRpb24gPSB0aW1lO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNsZWFyVGltZW91dChhbmltYXRpb25DYWxsYmFja0lkKTtcbiAgICAgIGlmICghYW5pbWF0aW5nKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbmltYXRpb25DYWxsYmFja0lkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soKTtcbiAgICAgICAgfSwgYW5pbWF0aW9uVGltZSk7XG4gICAgICB9XG4gICAgICBhbmltYXRpb25TdGF0ZXMgPSBbXTtcbiAgICB9LFxuICAgIGFuaW1hdGU6IGZ1bmN0aW9uIGFuaW1hdGUodGFyZ2V0LCBjdXJyZW50UmVjdCwgdG9SZWN0LCBkdXJhdGlvbikge1xuICAgICAgaWYgKGR1cmF0aW9uKSB7XG4gICAgICAgIGNzcyh0YXJnZXQsICd0cmFuc2l0aW9uJywgJycpO1xuICAgICAgICBjc3ModGFyZ2V0LCAndHJhbnNmb3JtJywgJycpO1xuICAgICAgICB2YXIgZWxNYXRyaXggPSBtYXRyaXgodGhpcy5lbCksXG4gICAgICAgICAgc2NhbGVYID0gZWxNYXRyaXggJiYgZWxNYXRyaXguYSxcbiAgICAgICAgICBzY2FsZVkgPSBlbE1hdHJpeCAmJiBlbE1hdHJpeC5kLFxuICAgICAgICAgIHRyYW5zbGF0ZVggPSAoY3VycmVudFJlY3QubGVmdCAtIHRvUmVjdC5sZWZ0KSAvIChzY2FsZVggfHwgMSksXG4gICAgICAgICAgdHJhbnNsYXRlWSA9IChjdXJyZW50UmVjdC50b3AgLSB0b1JlY3QudG9wKSAvIChzY2FsZVkgfHwgMSk7XG4gICAgICAgIHRhcmdldC5hbmltYXRpbmdYID0gISF0cmFuc2xhdGVYO1xuICAgICAgICB0YXJnZXQuYW5pbWF0aW5nWSA9ICEhdHJhbnNsYXRlWTtcbiAgICAgICAgY3NzKHRhcmdldCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgnICsgdHJhbnNsYXRlWCArICdweCwnICsgdHJhbnNsYXRlWSArICdweCwwKScpO1xuICAgICAgICB0aGlzLmZvclJlcGFpbnREdW1teSA9IHJlcGFpbnQodGFyZ2V0KTsgLy8gcmVwYWludFxuXG4gICAgICAgIGNzcyh0YXJnZXQsICd0cmFuc2l0aW9uJywgJ3RyYW5zZm9ybSAnICsgZHVyYXRpb24gKyAnbXMnICsgKHRoaXMub3B0aW9ucy5lYXNpbmcgPyAnICcgKyB0aGlzLm9wdGlvbnMuZWFzaW5nIDogJycpKTtcbiAgICAgICAgY3NzKHRhcmdldCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgwLDAsMCknKTtcbiAgICAgICAgdHlwZW9mIHRhcmdldC5hbmltYXRlZCA9PT0gJ251bWJlcicgJiYgY2xlYXJUaW1lb3V0KHRhcmdldC5hbmltYXRlZCk7XG4gICAgICAgIHRhcmdldC5hbmltYXRlZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNzcyh0YXJnZXQsICd0cmFuc2l0aW9uJywgJycpO1xuICAgICAgICAgIGNzcyh0YXJnZXQsICd0cmFuc2Zvcm0nLCAnJyk7XG4gICAgICAgICAgdGFyZ2V0LmFuaW1hdGVkID0gZmFsc2U7XG4gICAgICAgICAgdGFyZ2V0LmFuaW1hdGluZ1ggPSBmYWxzZTtcbiAgICAgICAgICB0YXJnZXQuYW5pbWF0aW5nWSA9IGZhbHNlO1xuICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gcmVwYWludCh0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldC5vZmZzZXRXaWR0aDtcbn1cbmZ1bmN0aW9uIGNhbGN1bGF0ZVJlYWxUaW1lKGFuaW1hdGluZ1JlY3QsIGZyb21SZWN0LCB0b1JlY3QsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhmcm9tUmVjdC50b3AgLSBhbmltYXRpbmdSZWN0LnRvcCwgMikgKyBNYXRoLnBvdyhmcm9tUmVjdC5sZWZ0IC0gYW5pbWF0aW5nUmVjdC5sZWZ0LCAyKSkgLyBNYXRoLnNxcnQoTWF0aC5wb3coZnJvbVJlY3QudG9wIC0gdG9SZWN0LnRvcCwgMikgKyBNYXRoLnBvdyhmcm9tUmVjdC5sZWZ0IC0gdG9SZWN0LmxlZnQsIDIpKSAqIG9wdGlvbnMuYW5pbWF0aW9uO1xufVxuXG52YXIgcGx1Z2lucyA9IFtdO1xudmFyIGRlZmF1bHRzID0ge1xuICBpbml0aWFsaXplQnlEZWZhdWx0OiB0cnVlXG59O1xudmFyIFBsdWdpbk1hbmFnZXIgPSB7XG4gIG1vdW50OiBmdW5jdGlvbiBtb3VudChwbHVnaW4pIHtcbiAgICAvLyBTZXQgZGVmYXVsdCBzdGF0aWMgcHJvcGVydGllc1xuICAgIGZvciAodmFyIG9wdGlvbiBpbiBkZWZhdWx0cykge1xuICAgICAgaWYgKGRlZmF1bHRzLmhhc093blByb3BlcnR5KG9wdGlvbikgJiYgIShvcHRpb24gaW4gcGx1Z2luKSkge1xuICAgICAgICBwbHVnaW5bb3B0aW9uXSA9IGRlZmF1bHRzW29wdGlvbl07XG4gICAgICB9XG4gICAgfVxuICAgIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgaWYgKHAucGx1Z2luTmFtZSA9PT0gcGx1Z2luLnBsdWdpbk5hbWUpIHtcbiAgICAgICAgdGhyb3cgXCJTb3J0YWJsZTogQ2Fubm90IG1vdW50IHBsdWdpbiBcIi5jb25jYXQocGx1Z2luLnBsdWdpbk5hbWUsIFwiIG1vcmUgdGhhbiBvbmNlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHBsdWdpbnMucHVzaChwbHVnaW4pO1xuICB9LFxuICBwbHVnaW5FdmVudDogZnVuY3Rpb24gcGx1Z2luRXZlbnQoZXZlbnROYW1lLCBzb3J0YWJsZSwgZXZ0KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB0aGlzLmV2ZW50Q2FuY2VsZWQgPSBmYWxzZTtcbiAgICBldnQuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuZXZlbnRDYW5jZWxlZCA9IHRydWU7XG4gICAgfTtcbiAgICB2YXIgZXZlbnROYW1lR2xvYmFsID0gZXZlbnROYW1lICsgJ0dsb2JhbCc7XG4gICAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgIGlmICghc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdKSByZXR1cm47XG4gICAgICAvLyBGaXJlIGdsb2JhbCBldmVudHMgaWYgaXQgZXhpc3RzIGluIHRoaXMgc29ydGFibGVcbiAgICAgIGlmIChzb3J0YWJsZVtwbHVnaW4ucGx1Z2luTmFtZV1bZXZlbnROYW1lR2xvYmFsXSkge1xuICAgICAgICBzb3J0YWJsZVtwbHVnaW4ucGx1Z2luTmFtZV1bZXZlbnROYW1lR2xvYmFsXShfb2JqZWN0U3ByZWFkMih7XG4gICAgICAgICAgc29ydGFibGU6IHNvcnRhYmxlXG4gICAgICAgIH0sIGV2dCkpO1xuICAgICAgfVxuXG4gICAgICAvLyBPbmx5IGZpcmUgcGx1Z2luIGV2ZW50IGlmIHBsdWdpbiBpcyBlbmFibGVkIGluIHRoaXMgc29ydGFibGUsXG4gICAgICAvLyBhbmQgcGx1Z2luIGhhcyBldmVudCBkZWZpbmVkXG4gICAgICBpZiAoc29ydGFibGUub3B0aW9uc1twbHVnaW4ucGx1Z2luTmFtZV0gJiYgc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdW2V2ZW50TmFtZV0oX29iamVjdFNwcmVhZDIoe1xuICAgICAgICAgIHNvcnRhYmxlOiBzb3J0YWJsZVxuICAgICAgICB9LCBldnQpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgaW5pdGlhbGl6ZVBsdWdpbnM6IGZ1bmN0aW9uIGluaXRpYWxpemVQbHVnaW5zKHNvcnRhYmxlLCBlbCwgZGVmYXVsdHMsIG9wdGlvbnMpIHtcbiAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgdmFyIHBsdWdpbk5hbWUgPSBwbHVnaW4ucGx1Z2luTmFtZTtcbiAgICAgIGlmICghc29ydGFibGUub3B0aW9uc1twbHVnaW5OYW1lXSAmJiAhcGx1Z2luLmluaXRpYWxpemVCeURlZmF1bHQpIHJldHVybjtcbiAgICAgIHZhciBpbml0aWFsaXplZCA9IG5ldyBwbHVnaW4oc29ydGFibGUsIGVsLCBzb3J0YWJsZS5vcHRpb25zKTtcbiAgICAgIGluaXRpYWxpemVkLnNvcnRhYmxlID0gc29ydGFibGU7XG4gICAgICBpbml0aWFsaXplZC5vcHRpb25zID0gc29ydGFibGUub3B0aW9ucztcbiAgICAgIHNvcnRhYmxlW3BsdWdpbk5hbWVdID0gaW5pdGlhbGl6ZWQ7XG5cbiAgICAgIC8vIEFkZCBkZWZhdWx0IG9wdGlvbnMgZnJvbSBwbHVnaW5cbiAgICAgIF9leHRlbmRzKGRlZmF1bHRzLCBpbml0aWFsaXplZC5kZWZhdWx0cyk7XG4gICAgfSk7XG4gICAgZm9yICh2YXIgb3B0aW9uIGluIHNvcnRhYmxlLm9wdGlvbnMpIHtcbiAgICAgIGlmICghc29ydGFibGUub3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShvcHRpb24pKSBjb250aW51ZTtcbiAgICAgIHZhciBtb2RpZmllZCA9IHRoaXMubW9kaWZ5T3B0aW9uKHNvcnRhYmxlLCBvcHRpb24sIHNvcnRhYmxlLm9wdGlvbnNbb3B0aW9uXSk7XG4gICAgICBpZiAodHlwZW9mIG1vZGlmaWVkICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzb3J0YWJsZS5vcHRpb25zW29wdGlvbl0gPSBtb2RpZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGdldEV2ZW50UHJvcGVydGllczogZnVuY3Rpb24gZ2V0RXZlbnRQcm9wZXJ0aWVzKG5hbWUsIHNvcnRhYmxlKSB7XG4gICAgdmFyIGV2ZW50UHJvcGVydGllcyA9IHt9O1xuICAgIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICBpZiAodHlwZW9mIHBsdWdpbi5ldmVudFByb3BlcnRpZXMgIT09ICdmdW5jdGlvbicpIHJldHVybjtcbiAgICAgIF9leHRlbmRzKGV2ZW50UHJvcGVydGllcywgcGx1Z2luLmV2ZW50UHJvcGVydGllcy5jYWxsKHNvcnRhYmxlW3BsdWdpbi5wbHVnaW5OYW1lXSwgbmFtZSkpO1xuICAgIH0pO1xuICAgIHJldHVybiBldmVudFByb3BlcnRpZXM7XG4gIH0sXG4gIG1vZGlmeU9wdGlvbjogZnVuY3Rpb24gbW9kaWZ5T3B0aW9uKHNvcnRhYmxlLCBuYW1lLCB2YWx1ZSkge1xuICAgIHZhciBtb2RpZmllZFZhbHVlO1xuICAgIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICAvLyBQbHVnaW4gbXVzdCBleGlzdCBvbiB0aGUgU29ydGFibGVcbiAgICAgIGlmICghc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdKSByZXR1cm47XG5cbiAgICAgIC8vIElmIHN0YXRpYyBvcHRpb24gbGlzdGVuZXIgZXhpc3RzIGZvciB0aGlzIG9wdGlvbiwgY2FsbCBpbiB0aGUgY29udGV4dCBvZiB0aGUgU29ydGFibGUncyBpbnN0YW5jZSBvZiB0aGlzIHBsdWdpblxuICAgICAgaWYgKHBsdWdpbi5vcHRpb25MaXN0ZW5lcnMgJiYgdHlwZW9mIHBsdWdpbi5vcHRpb25MaXN0ZW5lcnNbbmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbW9kaWZpZWRWYWx1ZSA9IHBsdWdpbi5vcHRpb25MaXN0ZW5lcnNbbmFtZV0uY2FsbChzb3J0YWJsZVtwbHVnaW4ucGx1Z2luTmFtZV0sIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbW9kaWZpZWRWYWx1ZTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChfcmVmKSB7XG4gIHZhciBzb3J0YWJsZSA9IF9yZWYuc29ydGFibGUsXG4gICAgcm9vdEVsID0gX3JlZi5yb290RWwsXG4gICAgbmFtZSA9IF9yZWYubmFtZSxcbiAgICB0YXJnZXRFbCA9IF9yZWYudGFyZ2V0RWwsXG4gICAgY2xvbmVFbCA9IF9yZWYuY2xvbmVFbCxcbiAgICB0b0VsID0gX3JlZi50b0VsLFxuICAgIGZyb21FbCA9IF9yZWYuZnJvbUVsLFxuICAgIG9sZEluZGV4ID0gX3JlZi5vbGRJbmRleCxcbiAgICBuZXdJbmRleCA9IF9yZWYubmV3SW5kZXgsXG4gICAgb2xkRHJhZ2dhYmxlSW5kZXggPSBfcmVmLm9sZERyYWdnYWJsZUluZGV4LFxuICAgIG5ld0RyYWdnYWJsZUluZGV4ID0gX3JlZi5uZXdEcmFnZ2FibGVJbmRleCxcbiAgICBvcmlnaW5hbEV2ZW50ID0gX3JlZi5vcmlnaW5hbEV2ZW50LFxuICAgIHB1dFNvcnRhYmxlID0gX3JlZi5wdXRTb3J0YWJsZSxcbiAgICBleHRyYUV2ZW50UHJvcGVydGllcyA9IF9yZWYuZXh0cmFFdmVudFByb3BlcnRpZXM7XG4gIHNvcnRhYmxlID0gc29ydGFibGUgfHwgcm9vdEVsICYmIHJvb3RFbFtleHBhbmRvXTtcbiAgaWYgKCFzb3J0YWJsZSkgcmV0dXJuO1xuICB2YXIgZXZ0LFxuICAgIG9wdGlvbnMgPSBzb3J0YWJsZS5vcHRpb25zLFxuICAgIG9uTmFtZSA9ICdvbicgKyBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zdWJzdHIoMSk7XG4gIC8vIFN1cHBvcnQgZm9yIG5ldyBDdXN0b21FdmVudCBmZWF0dXJlXG4gIGlmICh3aW5kb3cuQ3VzdG9tRXZlbnQgJiYgIUlFMTFPckxlc3MgJiYgIUVkZ2UpIHtcbiAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBldnQuaW5pdEV2ZW50KG5hbWUsIHRydWUsIHRydWUpO1xuICB9XG4gIGV2dC50byA9IHRvRWwgfHwgcm9vdEVsO1xuICBldnQuZnJvbSA9IGZyb21FbCB8fCByb290RWw7XG4gIGV2dC5pdGVtID0gdGFyZ2V0RWwgfHwgcm9vdEVsO1xuICBldnQuY2xvbmUgPSBjbG9uZUVsO1xuICBldnQub2xkSW5kZXggPSBvbGRJbmRleDtcbiAgZXZ0Lm5ld0luZGV4ID0gbmV3SW5kZXg7XG4gIGV2dC5vbGREcmFnZ2FibGVJbmRleCA9IG9sZERyYWdnYWJsZUluZGV4O1xuICBldnQubmV3RHJhZ2dhYmxlSW5kZXggPSBuZXdEcmFnZ2FibGVJbmRleDtcbiAgZXZ0Lm9yaWdpbmFsRXZlbnQgPSBvcmlnaW5hbEV2ZW50O1xuICBldnQucHVsbE1vZGUgPSBwdXRTb3J0YWJsZSA/IHB1dFNvcnRhYmxlLmxhc3RQdXRNb2RlIDogdW5kZWZpbmVkO1xuICB2YXIgYWxsRXZlbnRQcm9wZXJ0aWVzID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGV4dHJhRXZlbnRQcm9wZXJ0aWVzKSwgUGx1Z2luTWFuYWdlci5nZXRFdmVudFByb3BlcnRpZXMobmFtZSwgc29ydGFibGUpKTtcbiAgZm9yICh2YXIgb3B0aW9uIGluIGFsbEV2ZW50UHJvcGVydGllcykge1xuICAgIGV2dFtvcHRpb25dID0gYWxsRXZlbnRQcm9wZXJ0aWVzW29wdGlvbl07XG4gIH1cbiAgaWYgKHJvb3RFbCkge1xuICAgIHJvb3RFbC5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gIH1cbiAgaWYgKG9wdGlvbnNbb25OYW1lXSkge1xuICAgIG9wdGlvbnNbb25OYW1lXS5jYWxsKHNvcnRhYmxlLCBldnQpO1xuICB9XG59XG5cbnZhciBfZXhjbHVkZWQgPSBbXCJldnRcIl07XG52YXIgcGx1Z2luRXZlbnQgPSBmdW5jdGlvbiBwbHVnaW5FdmVudChldmVudE5hbWUsIHNvcnRhYmxlKSB7XG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fSxcbiAgICBvcmlnaW5hbEV2ZW50ID0gX3JlZi5ldnQsXG4gICAgZGF0YSA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBfZXhjbHVkZWQpO1xuICBQbHVnaW5NYW5hZ2VyLnBsdWdpbkV2ZW50LmJpbmQoU29ydGFibGUpKGV2ZW50TmFtZSwgc29ydGFibGUsIF9vYmplY3RTcHJlYWQyKHtcbiAgICBkcmFnRWw6IGRyYWdFbCxcbiAgICBwYXJlbnRFbDogcGFyZW50RWwsXG4gICAgZ2hvc3RFbDogZ2hvc3RFbCxcbiAgICByb290RWw6IHJvb3RFbCxcbiAgICBuZXh0RWw6IG5leHRFbCxcbiAgICBsYXN0RG93bkVsOiBsYXN0RG93bkVsLFxuICAgIGNsb25lRWw6IGNsb25lRWwsXG4gICAgY2xvbmVIaWRkZW46IGNsb25lSGlkZGVuLFxuICAgIGRyYWdTdGFydGVkOiBtb3ZlZCxcbiAgICBwdXRTb3J0YWJsZTogcHV0U29ydGFibGUsXG4gICAgYWN0aXZlU29ydGFibGU6IFNvcnRhYmxlLmFjdGl2ZSxcbiAgICBvcmlnaW5hbEV2ZW50OiBvcmlnaW5hbEV2ZW50LFxuICAgIG9sZEluZGV4OiBvbGRJbmRleCxcbiAgICBvbGREcmFnZ2FibGVJbmRleDogb2xkRHJhZ2dhYmxlSW5kZXgsXG4gICAgbmV3SW5kZXg6IG5ld0luZGV4LFxuICAgIG5ld0RyYWdnYWJsZUluZGV4OiBuZXdEcmFnZ2FibGVJbmRleCxcbiAgICBoaWRlR2hvc3RGb3JUYXJnZXQ6IF9oaWRlR2hvc3RGb3JUYXJnZXQsXG4gICAgdW5oaWRlR2hvc3RGb3JUYXJnZXQ6IF91bmhpZGVHaG9zdEZvclRhcmdldCxcbiAgICBjbG9uZU5vd0hpZGRlbjogZnVuY3Rpb24gY2xvbmVOb3dIaWRkZW4oKSB7XG4gICAgICBjbG9uZUhpZGRlbiA9IHRydWU7XG4gICAgfSxcbiAgICBjbG9uZU5vd1Nob3duOiBmdW5jdGlvbiBjbG9uZU5vd1Nob3duKCkge1xuICAgICAgY2xvbmVIaWRkZW4gPSBmYWxzZTtcbiAgICB9LFxuICAgIGRpc3BhdGNoU29ydGFibGVFdmVudDogZnVuY3Rpb24gZGlzcGF0Y2hTb3J0YWJsZUV2ZW50KG5hbWUpIHtcbiAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgc29ydGFibGU6IHNvcnRhYmxlLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBvcmlnaW5hbEV2ZW50OiBvcmlnaW5hbEV2ZW50XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIGRhdGEpKTtcbn07XG5mdW5jdGlvbiBfZGlzcGF0Y2hFdmVudChpbmZvKSB7XG4gIGRpc3BhdGNoRXZlbnQoX29iamVjdFNwcmVhZDIoe1xuICAgIHB1dFNvcnRhYmxlOiBwdXRTb3J0YWJsZSxcbiAgICBjbG9uZUVsOiBjbG9uZUVsLFxuICAgIHRhcmdldEVsOiBkcmFnRWwsXG4gICAgcm9vdEVsOiByb290RWwsXG4gICAgb2xkSW5kZXg6IG9sZEluZGV4LFxuICAgIG9sZERyYWdnYWJsZUluZGV4OiBvbGREcmFnZ2FibGVJbmRleCxcbiAgICBuZXdJbmRleDogbmV3SW5kZXgsXG4gICAgbmV3RHJhZ2dhYmxlSW5kZXg6IG5ld0RyYWdnYWJsZUluZGV4XG4gIH0sIGluZm8pKTtcbn1cbnZhciBkcmFnRWwsXG4gIHBhcmVudEVsLFxuICBnaG9zdEVsLFxuICByb290RWwsXG4gIG5leHRFbCxcbiAgbGFzdERvd25FbCxcbiAgY2xvbmVFbCxcbiAgY2xvbmVIaWRkZW4sXG4gIG9sZEluZGV4LFxuICBuZXdJbmRleCxcbiAgb2xkRHJhZ2dhYmxlSW5kZXgsXG4gIG5ld0RyYWdnYWJsZUluZGV4LFxuICBhY3RpdmVHcm91cCxcbiAgcHV0U29ydGFibGUsXG4gIGF3YWl0aW5nRHJhZ1N0YXJ0ZWQgPSBmYWxzZSxcbiAgaWdub3JlTmV4dENsaWNrID0gZmFsc2UsXG4gIHNvcnRhYmxlcyA9IFtdLFxuICB0YXBFdnQsXG4gIHRvdWNoRXZ0LFxuICBsYXN0RHgsXG4gIGxhc3REeSxcbiAgdGFwRGlzdGFuY2VMZWZ0LFxuICB0YXBEaXN0YW5jZVRvcCxcbiAgbW92ZWQsXG4gIGxhc3RUYXJnZXQsXG4gIGxhc3REaXJlY3Rpb24sXG4gIHBhc3RGaXJzdEludmVydFRocmVzaCA9IGZhbHNlLFxuICBpc0NpcmN1bXN0YW50aWFsSW52ZXJ0ID0gZmFsc2UsXG4gIHRhcmdldE1vdmVEaXN0YW5jZSxcbiAgLy8gRm9yIHBvc2l0aW9uaW5nIGdob3N0IGFic29sdXRlbHlcbiAgZ2hvc3RSZWxhdGl2ZVBhcmVudCxcbiAgZ2hvc3RSZWxhdGl2ZVBhcmVudEluaXRpYWxTY3JvbGwgPSBbXSxcbiAgLy8gKGxlZnQsIHRvcClcblxuICBfc2lsZW50ID0gZmFsc2UsXG4gIHNhdmVkSW5wdXRDaGVja2VkID0gW107XG5cbi8qKiBAY29uc3QgKi9cbnZhciBkb2N1bWVudEV4aXN0cyA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcsXG4gIFBvc2l0aW9uR2hvc3RBYnNvbHV0ZWx5ID0gSU9TLFxuICBDU1NGbG9hdFByb3BlcnR5ID0gRWRnZSB8fCBJRTExT3JMZXNzID8gJ2Nzc0Zsb2F0JyA6ICdmbG9hdCcsXG4gIC8vIFRoaXMgd2lsbCBub3QgcGFzcyBmb3IgSUU5LCBiZWNhdXNlIElFOSBEbkQgb25seSB3b3JrcyBvbiBhbmNob3JzXG4gIHN1cHBvcnREcmFnZ2FibGUgPSBkb2N1bWVudEV4aXN0cyAmJiAhQ2hyb21lRm9yQW5kcm9pZCAmJiAhSU9TICYmICdkcmFnZ2FibGUnIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICBzdXBwb3J0Q3NzUG9pbnRlckV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWRvY3VtZW50RXhpc3RzKSByZXR1cm47XG4gICAgLy8gZmFsc2Ugd2hlbiA8PSBJRTExXG4gICAgaWYgKElFMTFPckxlc3MpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgneCcpO1xuICAgIGVsLnN0eWxlLmNzc1RleHQgPSAncG9pbnRlci1ldmVudHM6YXV0byc7XG4gICAgcmV0dXJuIGVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPT09ICdhdXRvJztcbiAgfSgpLFxuICBfZGV0ZWN0RGlyZWN0aW9uID0gZnVuY3Rpb24gX2RldGVjdERpcmVjdGlvbihlbCwgb3B0aW9ucykge1xuICAgIHZhciBlbENTUyA9IGNzcyhlbCksXG4gICAgICBlbFdpZHRoID0gcGFyc2VJbnQoZWxDU1Mud2lkdGgpIC0gcGFyc2VJbnQoZWxDU1MucGFkZGluZ0xlZnQpIC0gcGFyc2VJbnQoZWxDU1MucGFkZGluZ1JpZ2h0KSAtIHBhcnNlSW50KGVsQ1NTLmJvcmRlckxlZnRXaWR0aCkgLSBwYXJzZUludChlbENTUy5ib3JkZXJSaWdodFdpZHRoKSxcbiAgICAgIGNoaWxkMSA9IGdldENoaWxkKGVsLCAwLCBvcHRpb25zKSxcbiAgICAgIGNoaWxkMiA9IGdldENoaWxkKGVsLCAxLCBvcHRpb25zKSxcbiAgICAgIGZpcnN0Q2hpbGRDU1MgPSBjaGlsZDEgJiYgY3NzKGNoaWxkMSksXG4gICAgICBzZWNvbmRDaGlsZENTUyA9IGNoaWxkMiAmJiBjc3MoY2hpbGQyKSxcbiAgICAgIGZpcnN0Q2hpbGRXaWR0aCA9IGZpcnN0Q2hpbGRDU1MgJiYgcGFyc2VJbnQoZmlyc3RDaGlsZENTUy5tYXJnaW5MZWZ0KSArIHBhcnNlSW50KGZpcnN0Q2hpbGRDU1MubWFyZ2luUmlnaHQpICsgZ2V0UmVjdChjaGlsZDEpLndpZHRoLFxuICAgICAgc2Vjb25kQ2hpbGRXaWR0aCA9IHNlY29uZENoaWxkQ1NTICYmIHBhcnNlSW50KHNlY29uZENoaWxkQ1NTLm1hcmdpbkxlZnQpICsgcGFyc2VJbnQoc2Vjb25kQ2hpbGRDU1MubWFyZ2luUmlnaHQpICsgZ2V0UmVjdChjaGlsZDIpLndpZHRoO1xuICAgIGlmIChlbENTUy5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgIHJldHVybiBlbENTUy5mbGV4RGlyZWN0aW9uID09PSAnY29sdW1uJyB8fCBlbENTUy5mbGV4RGlyZWN0aW9uID09PSAnY29sdW1uLXJldmVyc2UnID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICB9XG4gICAgaWYgKGVsQ1NTLmRpc3BsYXkgPT09ICdncmlkJykge1xuICAgICAgcmV0dXJuIGVsQ1NTLmdyaWRUZW1wbGF0ZUNvbHVtbnMuc3BsaXQoJyAnKS5sZW5ndGggPD0gMSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgfVxuICAgIGlmIChjaGlsZDEgJiYgZmlyc3RDaGlsZENTU1tcImZsb2F0XCJdICYmIGZpcnN0Q2hpbGRDU1NbXCJmbG9hdFwiXSAhPT0gJ25vbmUnKSB7XG4gICAgICB2YXIgdG91Y2hpbmdTaWRlQ2hpbGQyID0gZmlyc3RDaGlsZENTU1tcImZsb2F0XCJdID09PSAnbGVmdCcgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgICAgcmV0dXJuIGNoaWxkMiAmJiAoc2Vjb25kQ2hpbGRDU1MuY2xlYXIgPT09ICdib3RoJyB8fCBzZWNvbmRDaGlsZENTUy5jbGVhciA9PT0gdG91Y2hpbmdTaWRlQ2hpbGQyKSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZDEgJiYgKGZpcnN0Q2hpbGRDU1MuZGlzcGxheSA9PT0gJ2Jsb2NrJyB8fCBmaXJzdENoaWxkQ1NTLmRpc3BsYXkgPT09ICdmbGV4JyB8fCBmaXJzdENoaWxkQ1NTLmRpc3BsYXkgPT09ICd0YWJsZScgfHwgZmlyc3RDaGlsZENTUy5kaXNwbGF5ID09PSAnZ3JpZCcgfHwgZmlyc3RDaGlsZFdpZHRoID49IGVsV2lkdGggJiYgZWxDU1NbQ1NTRmxvYXRQcm9wZXJ0eV0gPT09ICdub25lJyB8fCBjaGlsZDIgJiYgZWxDU1NbQ1NTRmxvYXRQcm9wZXJ0eV0gPT09ICdub25lJyAmJiBmaXJzdENoaWxkV2lkdGggKyBzZWNvbmRDaGlsZFdpZHRoID4gZWxXaWR0aCkgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICB9LFxuICBfZHJhZ0VsSW5Sb3dDb2x1bW4gPSBmdW5jdGlvbiBfZHJhZ0VsSW5Sb3dDb2x1bW4oZHJhZ1JlY3QsIHRhcmdldFJlY3QsIHZlcnRpY2FsKSB7XG4gICAgdmFyIGRyYWdFbFMxT3BwID0gdmVydGljYWwgPyBkcmFnUmVjdC5sZWZ0IDogZHJhZ1JlY3QudG9wLFxuICAgICAgZHJhZ0VsUzJPcHAgPSB2ZXJ0aWNhbCA/IGRyYWdSZWN0LnJpZ2h0IDogZHJhZ1JlY3QuYm90dG9tLFxuICAgICAgZHJhZ0VsT3BwTGVuZ3RoID0gdmVydGljYWwgPyBkcmFnUmVjdC53aWR0aCA6IGRyYWdSZWN0LmhlaWdodCxcbiAgICAgIHRhcmdldFMxT3BwID0gdmVydGljYWwgPyB0YXJnZXRSZWN0LmxlZnQgOiB0YXJnZXRSZWN0LnRvcCxcbiAgICAgIHRhcmdldFMyT3BwID0gdmVydGljYWwgPyB0YXJnZXRSZWN0LnJpZ2h0IDogdGFyZ2V0UmVjdC5ib3R0b20sXG4gICAgICB0YXJnZXRPcHBMZW5ndGggPSB2ZXJ0aWNhbCA/IHRhcmdldFJlY3Qud2lkdGggOiB0YXJnZXRSZWN0LmhlaWdodDtcbiAgICByZXR1cm4gZHJhZ0VsUzFPcHAgPT09IHRhcmdldFMxT3BwIHx8IGRyYWdFbFMyT3BwID09PSB0YXJnZXRTMk9wcCB8fCBkcmFnRWxTMU9wcCArIGRyYWdFbE9wcExlbmd0aCAvIDIgPT09IHRhcmdldFMxT3BwICsgdGFyZ2V0T3BwTGVuZ3RoIC8gMjtcbiAgfSxcbiAgLyoqXHJcbiAgICogRGV0ZWN0cyBmaXJzdCBuZWFyZXN0IGVtcHR5IHNvcnRhYmxlIHRvIFggYW5kIFkgcG9zaXRpb24gdXNpbmcgZW1wdHlJbnNlcnRUaHJlc2hvbGQuXHJcbiAgICogQHBhcmFtICB7TnVtYmVyfSB4ICAgICAgWCBwb3NpdGlvblxyXG4gICAqIEBwYXJhbSAge051bWJlcn0geSAgICAgIFkgcG9zaXRpb25cclxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gICBFbGVtZW50IG9mIHRoZSBmaXJzdCBmb3VuZCBuZWFyZXN0IFNvcnRhYmxlXHJcbiAgICovXG4gIF9kZXRlY3ROZWFyZXN0RW1wdHlTb3J0YWJsZSA9IGZ1bmN0aW9uIF9kZXRlY3ROZWFyZXN0RW1wdHlTb3J0YWJsZSh4LCB5KSB7XG4gICAgdmFyIHJldDtcbiAgICBzb3J0YWJsZXMuc29tZShmdW5jdGlvbiAoc29ydGFibGUpIHtcbiAgICAgIHZhciB0aHJlc2hvbGQgPSBzb3J0YWJsZVtleHBhbmRvXS5vcHRpb25zLmVtcHR5SW5zZXJ0VGhyZXNob2xkO1xuICAgICAgaWYgKCF0aHJlc2hvbGQgfHwgbGFzdENoaWxkKHNvcnRhYmxlKSkgcmV0dXJuO1xuICAgICAgdmFyIHJlY3QgPSBnZXRSZWN0KHNvcnRhYmxlKSxcbiAgICAgICAgaW5zaWRlSG9yaXpvbnRhbGx5ID0geCA+PSByZWN0LmxlZnQgLSB0aHJlc2hvbGQgJiYgeCA8PSByZWN0LnJpZ2h0ICsgdGhyZXNob2xkLFxuICAgICAgICBpbnNpZGVWZXJ0aWNhbGx5ID0geSA+PSByZWN0LnRvcCAtIHRocmVzaG9sZCAmJiB5IDw9IHJlY3QuYm90dG9tICsgdGhyZXNob2xkO1xuICAgICAgaWYgKGluc2lkZUhvcml6b250YWxseSAmJiBpbnNpZGVWZXJ0aWNhbGx5KSB7XG4gICAgICAgIHJldHVybiByZXQgPSBzb3J0YWJsZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9LFxuICBfcHJlcGFyZUdyb3VwID0gZnVuY3Rpb24gX3ByZXBhcmVHcm91cChvcHRpb25zKSB7XG4gICAgZnVuY3Rpb24gdG9Gbih2YWx1ZSwgcHVsbCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0bywgZnJvbSwgZHJhZ0VsLCBldnQpIHtcbiAgICAgICAgdmFyIHNhbWVHcm91cCA9IHRvLm9wdGlvbnMuZ3JvdXAubmFtZSAmJiBmcm9tLm9wdGlvbnMuZ3JvdXAubmFtZSAmJiB0by5vcHRpb25zLmdyb3VwLm5hbWUgPT09IGZyb20ub3B0aW9ucy5ncm91cC5uYW1lO1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCAmJiAocHVsbCB8fCBzYW1lR3JvdXApKSB7XG4gICAgICAgICAgLy8gRGVmYXVsdCBwdWxsIHZhbHVlXG4gICAgICAgICAgLy8gRGVmYXVsdCBwdWxsIGFuZCBwdXQgdmFsdWUgaWYgc2FtZSBncm91cFxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHB1bGwgJiYgdmFsdWUgPT09ICdjbG9uZScpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIHRvRm4odmFsdWUodG8sIGZyb20sIGRyYWdFbCwgZXZ0KSwgcHVsbCkodG8sIGZyb20sIGRyYWdFbCwgZXZ0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgb3RoZXJHcm91cCA9IChwdWxsID8gdG8gOiBmcm9tKS5vcHRpb25zLmdyb3VwLm5hbWU7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlID09PSB0cnVlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUgPT09IG90aGVyR3JvdXAgfHwgdmFsdWUuam9pbiAmJiB2YWx1ZS5pbmRleE9mKG90aGVyR3JvdXApID4gLTE7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIHZhciBncm91cCA9IHt9O1xuICAgIHZhciBvcmlnaW5hbEdyb3VwID0gb3B0aW9ucy5ncm91cDtcbiAgICBpZiAoIW9yaWdpbmFsR3JvdXAgfHwgX3R5cGVvZihvcmlnaW5hbEdyb3VwKSAhPSAnb2JqZWN0Jykge1xuICAgICAgb3JpZ2luYWxHcm91cCA9IHtcbiAgICAgICAgbmFtZTogb3JpZ2luYWxHcm91cFxuICAgICAgfTtcbiAgICB9XG4gICAgZ3JvdXAubmFtZSA9IG9yaWdpbmFsR3JvdXAubmFtZTtcbiAgICBncm91cC5jaGVja1B1bGwgPSB0b0ZuKG9yaWdpbmFsR3JvdXAucHVsbCwgdHJ1ZSk7XG4gICAgZ3JvdXAuY2hlY2tQdXQgPSB0b0ZuKG9yaWdpbmFsR3JvdXAucHV0KTtcbiAgICBncm91cC5yZXZlcnRDbG9uZSA9IG9yaWdpbmFsR3JvdXAucmV2ZXJ0Q2xvbmU7XG4gICAgb3B0aW9ucy5ncm91cCA9IGdyb3VwO1xuICB9LFxuICBfaGlkZUdob3N0Rm9yVGFyZ2V0ID0gZnVuY3Rpb24gX2hpZGVHaG9zdEZvclRhcmdldCgpIHtcbiAgICBpZiAoIXN1cHBvcnRDc3NQb2ludGVyRXZlbnRzICYmIGdob3N0RWwpIHtcbiAgICAgIGNzcyhnaG9zdEVsLCAnZGlzcGxheScsICdub25lJyk7XG4gICAgfVxuICB9LFxuICBfdW5oaWRlR2hvc3RGb3JUYXJnZXQgPSBmdW5jdGlvbiBfdW5oaWRlR2hvc3RGb3JUYXJnZXQoKSB7XG4gICAgaWYgKCFzdXBwb3J0Q3NzUG9pbnRlckV2ZW50cyAmJiBnaG9zdEVsKSB7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ2Rpc3BsYXknLCAnJyk7XG4gICAgfVxuICB9O1xuXG4vLyAjMTE4NCBmaXggLSBQcmV2ZW50IGNsaWNrIGV2ZW50IG9uIGZhbGxiYWNrIGlmIGRyYWdnZWQgYnV0IGl0ZW0gbm90IGNoYW5nZWQgcG9zaXRpb25cbmlmIChkb2N1bWVudEV4aXN0cyAmJiAhQ2hyb21lRm9yQW5kcm9pZCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAoaWdub3JlTmV4dENsaWNrKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24gJiYgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZ0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiAmJiBldnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICBpZ25vcmVOZXh0Q2xpY2sgPSBmYWxzZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHRydWUpO1xufVxudmFyIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50ID0gZnVuY3Rpb24gbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQoZXZ0KSB7XG4gIGlmIChkcmFnRWwpIHtcbiAgICBldnQgPSBldnQudG91Y2hlcyA/IGV2dC50b3VjaGVzWzBdIDogZXZ0O1xuICAgIHZhciBuZWFyZXN0ID0gX2RldGVjdE5lYXJlc3RFbXB0eVNvcnRhYmxlKGV2dC5jbGllbnRYLCBldnQuY2xpZW50WSk7XG4gICAgaWYgKG5lYXJlc3QpIHtcbiAgICAgIC8vIENyZWF0ZSBpbWl0YXRpb24gZXZlbnRcbiAgICAgIHZhciBldmVudCA9IHt9O1xuICAgICAgZm9yICh2YXIgaSBpbiBldnQpIHtcbiAgICAgICAgaWYgKGV2dC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIGV2ZW50W2ldID0gZXZ0W2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBldmVudC50YXJnZXQgPSBldmVudC5yb290RWwgPSBuZWFyZXN0O1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQgPSB2b2lkIDA7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24gPSB2b2lkIDA7XG4gICAgICBuZWFyZXN0W2V4cGFuZG9dLl9vbkRyYWdPdmVyKGV2ZW50KTtcbiAgICB9XG4gIH1cbn07XG52YXIgX2NoZWNrT3V0c2lkZVRhcmdldEVsID0gZnVuY3Rpb24gX2NoZWNrT3V0c2lkZVRhcmdldEVsKGV2dCkge1xuICBpZiAoZHJhZ0VsKSB7XG4gICAgZHJhZ0VsLnBhcmVudE5vZGVbZXhwYW5kb10uX2lzT3V0c2lkZVRoaXNFbChldnQudGFyZ2V0KTtcbiAgfVxufTtcblxuLyoqXHJcbiAqIEBjbGFzcyAgU29ydGFibGVcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9ICBlbFxyXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgICAgIFtvcHRpb25zXVxyXG4gKi9cbmZ1bmN0aW9uIFNvcnRhYmxlKGVsLCBvcHRpb25zKSB7XG4gIGlmICghKGVsICYmIGVsLm5vZGVUeXBlICYmIGVsLm5vZGVUeXBlID09PSAxKSkge1xuICAgIHRocm93IFwiU29ydGFibGU6IGBlbGAgbXVzdCBiZSBhbiBIVE1MRWxlbWVudCwgbm90IFwiLmNvbmNhdCh7fS50b1N0cmluZy5jYWxsKGVsKSk7XG4gIH1cbiAgdGhpcy5lbCA9IGVsOyAvLyByb290IGVsZW1lbnRcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyA9IF9leHRlbmRzKHt9LCBvcHRpb25zKTtcblxuICAvLyBFeHBvcnQgaW5zdGFuY2VcbiAgZWxbZXhwYW5kb10gPSB0aGlzO1xuICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgZ3JvdXA6IG51bGwsXG4gICAgc29ydDogdHJ1ZSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgc3RvcmU6IG51bGwsXG4gICAgaGFuZGxlOiBudWxsLFxuICAgIGRyYWdnYWJsZTogL15bdW9dbCQvaS50ZXN0KGVsLm5vZGVOYW1lKSA/ICc+bGknIDogJz4qJyxcbiAgICBzd2FwVGhyZXNob2xkOiAxLFxuICAgIC8vIHBlcmNlbnRhZ2U7IDAgPD0geCA8PSAxXG4gICAgaW52ZXJ0U3dhcDogZmFsc2UsXG4gICAgLy8gaW52ZXJ0IGFsd2F5c1xuICAgIGludmVydGVkU3dhcFRocmVzaG9sZDogbnVsbCxcbiAgICAvLyB3aWxsIGJlIHNldCB0byBzYW1lIGFzIHN3YXBUaHJlc2hvbGQgaWYgZGVmYXVsdFxuICAgIHJlbW92ZUNsb25lT25IaWRlOiB0cnVlLFxuICAgIGRpcmVjdGlvbjogZnVuY3Rpb24gZGlyZWN0aW9uKCkge1xuICAgICAgcmV0dXJuIF9kZXRlY3REaXJlY3Rpb24oZWwsIHRoaXMub3B0aW9ucyk7XG4gICAgfSxcbiAgICBnaG9zdENsYXNzOiAnc29ydGFibGUtZ2hvc3QnLFxuICAgIGNob3NlbkNsYXNzOiAnc29ydGFibGUtY2hvc2VuJyxcbiAgICBkcmFnQ2xhc3M6ICdzb3J0YWJsZS1kcmFnJyxcbiAgICBpZ25vcmU6ICdhLCBpbWcnLFxuICAgIGZpbHRlcjogbnVsbCxcbiAgICBwcmV2ZW50T25GaWx0ZXI6IHRydWUsXG4gICAgYW5pbWF0aW9uOiAwLFxuICAgIGVhc2luZzogbnVsbCxcbiAgICBzZXREYXRhOiBmdW5jdGlvbiBzZXREYXRhKGRhdGFUcmFuc2ZlciwgZHJhZ0VsKSB7XG4gICAgICBkYXRhVHJhbnNmZXIuc2V0RGF0YSgnVGV4dCcsIGRyYWdFbC50ZXh0Q29udGVudCk7XG4gICAgfSxcbiAgICBkcm9wQnViYmxlOiBmYWxzZSxcbiAgICBkcmFnb3ZlckJ1YmJsZTogZmFsc2UsXG4gICAgZGF0YUlkQXR0cjogJ2RhdGEtaWQnLFxuICAgIGRlbGF5OiAwLFxuICAgIGRlbGF5T25Ub3VjaE9ubHk6IGZhbHNlLFxuICAgIHRvdWNoU3RhcnRUaHJlc2hvbGQ6IChOdW1iZXIucGFyc2VJbnQgPyBOdW1iZXIgOiB3aW5kb3cpLnBhcnNlSW50KHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLCAxMCkgfHwgMSxcbiAgICBmb3JjZUZhbGxiYWNrOiBmYWxzZSxcbiAgICBmYWxsYmFja0NsYXNzOiAnc29ydGFibGUtZmFsbGJhY2snLFxuICAgIGZhbGxiYWNrT25Cb2R5OiBmYWxzZSxcbiAgICBmYWxsYmFja1RvbGVyYW5jZTogMCxcbiAgICBmYWxsYmFja09mZnNldDoge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9LFxuICAgIC8vIERpc2FibGVkIG9uIFNhZmFyaTogIzE1NzE7IEVuYWJsZWQgb24gU2FmYXJpIElPUzogIzIyNDRcbiAgICBzdXBwb3J0UG9pbnRlcjogU29ydGFibGUuc3VwcG9ydFBvaW50ZXIgIT09IGZhbHNlICYmICdQb2ludGVyRXZlbnQnIGluIHdpbmRvdyAmJiAoIVNhZmFyaSB8fCBJT1MpLFxuICAgIGVtcHR5SW5zZXJ0VGhyZXNob2xkOiA1XG4gIH07XG4gIFBsdWdpbk1hbmFnZXIuaW5pdGlhbGl6ZVBsdWdpbnModGhpcywgZWwsIGRlZmF1bHRzKTtcblxuICAvLyBTZXQgZGVmYXVsdCBvcHRpb25zXG4gIGZvciAodmFyIG5hbWUgaW4gZGVmYXVsdHMpIHtcbiAgICAhKG5hbWUgaW4gb3B0aW9ucykgJiYgKG9wdGlvbnNbbmFtZV0gPSBkZWZhdWx0c1tuYW1lXSk7XG4gIH1cbiAgX3ByZXBhcmVHcm91cChvcHRpb25zKTtcblxuICAvLyBCaW5kIGFsbCBwcml2YXRlIG1ldGhvZHNcbiAgZm9yICh2YXIgZm4gaW4gdGhpcykge1xuICAgIGlmIChmbi5jaGFyQXQoMCkgPT09ICdfJyAmJiB0eXBlb2YgdGhpc1tmbl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXNbZm5dID0gdGhpc1tmbl0uYmluZCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICAvLyBTZXR1cCBkcmFnIG1vZGVcbiAgdGhpcy5uYXRpdmVEcmFnZ2FibGUgPSBvcHRpb25zLmZvcmNlRmFsbGJhY2sgPyBmYWxzZSA6IHN1cHBvcnREcmFnZ2FibGU7XG4gIGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgIC8vIFRvdWNoIHN0YXJ0IHRocmVzaG9sZCBjYW5ub3QgYmUgZ3JlYXRlciB0aGFuIHRoZSBuYXRpdmUgZHJhZ3N0YXJ0IHRocmVzaG9sZFxuICAgIHRoaXMub3B0aW9ucy50b3VjaFN0YXJ0VGhyZXNob2xkID0gMTtcbiAgfVxuXG4gIC8vIEJpbmQgZXZlbnRzXG4gIGlmIChvcHRpb25zLnN1cHBvcnRQb2ludGVyKSB7XG4gICAgb24oZWwsICdwb2ludGVyZG93bicsIHRoaXMuX29uVGFwU3RhcnQpO1xuICB9IGVsc2Uge1xuICAgIG9uKGVsLCAnbW91c2Vkb3duJywgdGhpcy5fb25UYXBTdGFydCk7XG4gICAgb24oZWwsICd0b3VjaHN0YXJ0JywgdGhpcy5fb25UYXBTdGFydCk7XG4gIH1cbiAgaWYgKHRoaXMubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgb24oZWwsICdkcmFnb3ZlcicsIHRoaXMpO1xuICAgIG9uKGVsLCAnZHJhZ2VudGVyJywgdGhpcyk7XG4gIH1cbiAgc29ydGFibGVzLnB1c2godGhpcy5lbCk7XG5cbiAgLy8gUmVzdG9yZSBzb3J0aW5nXG4gIG9wdGlvbnMuc3RvcmUgJiYgb3B0aW9ucy5zdG9yZS5nZXQgJiYgdGhpcy5zb3J0KG9wdGlvbnMuc3RvcmUuZ2V0KHRoaXMpIHx8IFtdKTtcblxuICAvLyBBZGQgYW5pbWF0aW9uIHN0YXRlIG1hbmFnZXJcbiAgX2V4dGVuZHModGhpcywgQW5pbWF0aW9uU3RhdGVNYW5hZ2VyKCkpO1xufVxuU29ydGFibGUucHJvdG90eXBlID0gLyoqIEBsZW5kcyBTb3J0YWJsZS5wcm90b3R5cGUgKi97XG4gIGNvbnN0cnVjdG9yOiBTb3J0YWJsZSxcbiAgX2lzT3V0c2lkZVRoaXNFbDogZnVuY3Rpb24gX2lzT3V0c2lkZVRoaXNFbCh0YXJnZXQpIHtcbiAgICBpZiAoIXRoaXMuZWwuY29udGFpbnModGFyZ2V0KSAmJiB0YXJnZXQgIT09IHRoaXMuZWwpIHtcbiAgICAgIGxhc3RUYXJnZXQgPSBudWxsO1xuICAgIH1cbiAgfSxcbiAgX2dldERpcmVjdGlvbjogZnVuY3Rpb24gX2dldERpcmVjdGlvbihldnQsIHRhcmdldCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5vcHRpb25zLmRpcmVjdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMub3B0aW9ucy5kaXJlY3Rpb24uY2FsbCh0aGlzLCBldnQsIHRhcmdldCwgZHJhZ0VsKSA6IHRoaXMub3B0aW9ucy5kaXJlY3Rpb247XG4gIH0sXG4gIF9vblRhcFN0YXJ0OiBmdW5jdGlvbiBfb25UYXBTdGFydCggLyoqIEV2ZW50fFRvdWNoRXZlbnQgKi9ldnQpIHtcbiAgICBpZiAoIWV2dC5jYW5jZWxhYmxlKSByZXR1cm47XG4gICAgdmFyIF90aGlzID0gdGhpcyxcbiAgICAgIGVsID0gdGhpcy5lbCxcbiAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICBwcmV2ZW50T25GaWx0ZXIgPSBvcHRpb25zLnByZXZlbnRPbkZpbHRlcixcbiAgICAgIHR5cGUgPSBldnQudHlwZSxcbiAgICAgIHRvdWNoID0gZXZ0LnRvdWNoZXMgJiYgZXZ0LnRvdWNoZXNbMF0gfHwgZXZ0LnBvaW50ZXJUeXBlICYmIGV2dC5wb2ludGVyVHlwZSA9PT0gJ3RvdWNoJyAmJiBldnQsXG4gICAgICB0YXJnZXQgPSAodG91Y2ggfHwgZXZ0KS50YXJnZXQsXG4gICAgICBvcmlnaW5hbFRhcmdldCA9IGV2dC50YXJnZXQuc2hhZG93Um9vdCAmJiAoZXZ0LnBhdGggJiYgZXZ0LnBhdGhbMF0gfHwgZXZ0LmNvbXBvc2VkUGF0aCAmJiBldnQuY29tcG9zZWRQYXRoKClbMF0pIHx8IHRhcmdldCxcbiAgICAgIGZpbHRlciA9IG9wdGlvbnMuZmlsdGVyO1xuICAgIF9zYXZlSW5wdXRDaGVja2VkU3RhdGUoZWwpO1xuXG4gICAgLy8gRG9uJ3QgdHJpZ2dlciBzdGFydCBldmVudCB3aGVuIGFuIGVsZW1lbnQgaXMgYmVlbiBkcmFnZ2VkLCBvdGhlcndpc2UgdGhlIGV2dC5vbGRpbmRleCBhbHdheXMgd3Jvbmcgd2hlbiBzZXQgb3B0aW9uLmdyb3VwLlxuICAgIGlmIChkcmFnRWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKC9tb3VzZWRvd258cG9pbnRlcmRvd24vLnRlc3QodHlwZSkgJiYgZXZ0LmJ1dHRvbiAhPT0gMCB8fCBvcHRpb25zLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47IC8vIG9ubHkgbGVmdCBidXR0b24gYW5kIGVuYWJsZWRcbiAgICB9XG5cbiAgICAvLyBjYW5jZWwgZG5kIGlmIG9yaWdpbmFsIHRhcmdldCBpcyBjb250ZW50IGVkaXRhYmxlXG4gICAgaWYgKG9yaWdpbmFsVGFyZ2V0LmlzQ29udGVudEVkaXRhYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU2FmYXJpIGlnbm9yZXMgZnVydGhlciBldmVudCBoYW5kbGluZyBhZnRlciBtb3VzZWRvd25cbiAgICBpZiAoIXRoaXMubmF0aXZlRHJhZ2dhYmxlICYmIFNhZmFyaSAmJiB0YXJnZXQgJiYgdGFyZ2V0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGFyZ2V0ID0gY2xvc2VzdCh0YXJnZXQsIG9wdGlvbnMuZHJhZ2dhYmxlLCBlbCwgZmFsc2UpO1xuICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmFuaW1hdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChsYXN0RG93bkVsID09PSB0YXJnZXQpIHtcbiAgICAgIC8vIElnbm9yaW5nIGR1cGxpY2F0ZSBgZG93bmBcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBHZXQgdGhlIGluZGV4IG9mIHRoZSBkcmFnZ2VkIGVsZW1lbnQgd2l0aGluIGl0cyBwYXJlbnRcbiAgICBvbGRJbmRleCA9IGluZGV4KHRhcmdldCk7XG4gICAgb2xkRHJhZ2dhYmxlSW5kZXggPSBpbmRleCh0YXJnZXQsIG9wdGlvbnMuZHJhZ2dhYmxlKTtcblxuICAgIC8vIENoZWNrIGZpbHRlclxuICAgIGlmICh0eXBlb2YgZmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoZmlsdGVyLmNhbGwodGhpcywgZXZ0LCB0YXJnZXQsIHRoaXMpKSB7XG4gICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICBzb3J0YWJsZTogX3RoaXMsXG4gICAgICAgICAgcm9vdEVsOiBvcmlnaW5hbFRhcmdldCxcbiAgICAgICAgICBuYW1lOiAnZmlsdGVyJyxcbiAgICAgICAgICB0YXJnZXRFbDogdGFyZ2V0LFxuICAgICAgICAgIHRvRWw6IGVsLFxuICAgICAgICAgIGZyb21FbDogZWxcbiAgICAgICAgfSk7XG4gICAgICAgIHBsdWdpbkV2ZW50KCdmaWx0ZXInLCBfdGhpcywge1xuICAgICAgICAgIGV2dDogZXZ0XG4gICAgICAgIH0pO1xuICAgICAgICBwcmV2ZW50T25GaWx0ZXIgJiYgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjsgLy8gY2FuY2VsIGRuZFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZmlsdGVyKSB7XG4gICAgICBmaWx0ZXIgPSBmaWx0ZXIuc3BsaXQoJywnKS5zb21lKGZ1bmN0aW9uIChjcml0ZXJpYSkge1xuICAgICAgICBjcml0ZXJpYSA9IGNsb3Nlc3Qob3JpZ2luYWxUYXJnZXQsIGNyaXRlcmlhLnRyaW0oKSwgZWwsIGZhbHNlKTtcbiAgICAgICAgaWYgKGNyaXRlcmlhKSB7XG4gICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgc29ydGFibGU6IF90aGlzLFxuICAgICAgICAgICAgcm9vdEVsOiBjcml0ZXJpYSxcbiAgICAgICAgICAgIG5hbWU6ICdmaWx0ZXInLFxuICAgICAgICAgICAgdGFyZ2V0RWw6IHRhcmdldCxcbiAgICAgICAgICAgIGZyb21FbDogZWwsXG4gICAgICAgICAgICB0b0VsOiBlbFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHBsdWdpbkV2ZW50KCdmaWx0ZXInLCBfdGhpcywge1xuICAgICAgICAgICAgZXZ0OiBldnRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgIHByZXZlbnRPbkZpbHRlciAmJiBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuOyAvLyBjYW5jZWwgZG5kXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmhhbmRsZSAmJiAhY2xvc2VzdChvcmlnaW5hbFRhcmdldCwgb3B0aW9ucy5oYW5kbGUsIGVsLCBmYWxzZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBQcmVwYXJlIGBkcmFnc3RhcnRgXG4gICAgdGhpcy5fcHJlcGFyZURyYWdTdGFydChldnQsIHRvdWNoLCB0YXJnZXQpO1xuICB9LFxuICBfcHJlcGFyZURyYWdTdGFydDogZnVuY3Rpb24gX3ByZXBhcmVEcmFnU3RhcnQoIC8qKiBFdmVudCAqL2V2dCwgLyoqIFRvdWNoICovdG91Y2gsIC8qKiBIVE1MRWxlbWVudCAqL3RhcmdldCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICBlbCA9IF90aGlzLmVsLFxuICAgICAgb3B0aW9ucyA9IF90aGlzLm9wdGlvbnMsXG4gICAgICBvd25lckRvY3VtZW50ID0gZWwub3duZXJEb2N1bWVudCxcbiAgICAgIGRyYWdTdGFydEZuO1xuICAgIGlmICh0YXJnZXQgJiYgIWRyYWdFbCAmJiB0YXJnZXQucGFyZW50Tm9kZSA9PT0gZWwpIHtcbiAgICAgIHZhciBkcmFnUmVjdCA9IGdldFJlY3QodGFyZ2V0KTtcbiAgICAgIHJvb3RFbCA9IGVsO1xuICAgICAgZHJhZ0VsID0gdGFyZ2V0O1xuICAgICAgcGFyZW50RWwgPSBkcmFnRWwucGFyZW50Tm9kZTtcbiAgICAgIG5leHRFbCA9IGRyYWdFbC5uZXh0U2libGluZztcbiAgICAgIGxhc3REb3duRWwgPSB0YXJnZXQ7XG4gICAgICBhY3RpdmVHcm91cCA9IG9wdGlvbnMuZ3JvdXA7XG4gICAgICBTb3J0YWJsZS5kcmFnZ2VkID0gZHJhZ0VsO1xuICAgICAgdGFwRXZ0ID0ge1xuICAgICAgICB0YXJnZXQ6IGRyYWdFbCxcbiAgICAgICAgY2xpZW50WDogKHRvdWNoIHx8IGV2dCkuY2xpZW50WCxcbiAgICAgICAgY2xpZW50WTogKHRvdWNoIHx8IGV2dCkuY2xpZW50WVxuICAgICAgfTtcbiAgICAgIHRhcERpc3RhbmNlTGVmdCA9IHRhcEV2dC5jbGllbnRYIC0gZHJhZ1JlY3QubGVmdDtcbiAgICAgIHRhcERpc3RhbmNlVG9wID0gdGFwRXZ0LmNsaWVudFkgLSBkcmFnUmVjdC50b3A7XG4gICAgICB0aGlzLl9sYXN0WCA9ICh0b3VjaCB8fCBldnQpLmNsaWVudFg7XG4gICAgICB0aGlzLl9sYXN0WSA9ICh0b3VjaCB8fCBldnQpLmNsaWVudFk7XG4gICAgICBkcmFnRWwuc3R5bGVbJ3dpbGwtY2hhbmdlJ10gPSAnYWxsJztcbiAgICAgIGRyYWdTdGFydEZuID0gZnVuY3Rpb24gZHJhZ1N0YXJ0Rm4oKSB7XG4gICAgICAgIHBsdWdpbkV2ZW50KCdkZWxheUVuZGVkJywgX3RoaXMsIHtcbiAgICAgICAgICBldnQ6IGV2dFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKFNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHtcbiAgICAgICAgICBfdGhpcy5fb25Ecm9wKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIERlbGF5ZWQgZHJhZyBoYXMgYmVlbiB0cmlnZ2VyZWRcbiAgICAgICAgLy8gd2UgY2FuIHJlLWVuYWJsZSB0aGUgZXZlbnRzOiB0b3VjaG1vdmUvbW91c2Vtb3ZlXG4gICAgICAgIF90aGlzLl9kaXNhYmxlRGVsYXllZERyYWdFdmVudHMoKTtcbiAgICAgICAgaWYgKCFGaXJlRm94ICYmIF90aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgICAgICAgIGRyYWdFbC5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmluZCB0aGUgZXZlbnRzOiBkcmFnc3RhcnQvZHJhZ2VuZFxuICAgICAgICBfdGhpcy5fdHJpZ2dlckRyYWdTdGFydChldnQsIHRvdWNoKTtcblxuICAgICAgICAvLyBEcmFnIHN0YXJ0IGV2ZW50XG4gICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICBzb3J0YWJsZTogX3RoaXMsXG4gICAgICAgICAgbmFtZTogJ2Nob29zZScsXG4gICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENob3NlbiBpdGVtXG4gICAgICAgIHRvZ2dsZUNsYXNzKGRyYWdFbCwgb3B0aW9ucy5jaG9zZW5DbGFzcywgdHJ1ZSk7XG4gICAgICB9O1xuXG4gICAgICAvLyBEaXNhYmxlIFwiZHJhZ2dhYmxlXCJcbiAgICAgIG9wdGlvbnMuaWdub3JlLnNwbGl0KCcsJykuZm9yRWFjaChmdW5jdGlvbiAoY3JpdGVyaWEpIHtcbiAgICAgICAgZmluZChkcmFnRWwsIGNyaXRlcmlhLnRyaW0oKSwgX2Rpc2FibGVEcmFnZ2FibGUpO1xuICAgICAgfSk7XG4gICAgICBvbihvd25lckRvY3VtZW50LCAnZHJhZ292ZXInLCBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudCk7XG4gICAgICBvbihvd25lckRvY3VtZW50LCAnbW91c2Vtb3ZlJywgbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQpO1xuICAgICAgb24ob3duZXJEb2N1bWVudCwgJ3RvdWNobW92ZScsIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50KTtcbiAgICAgIGlmIChvcHRpb25zLnN1cHBvcnRQb2ludGVyKSB7XG4gICAgICAgIG9uKG93bmVyRG9jdW1lbnQsICdwb2ludGVydXAnLCBfdGhpcy5fb25Ecm9wKTtcbiAgICAgICAgLy8gTmF0aXZlIEQmRCB0cmlnZ2VycyBwb2ludGVyY2FuY2VsXG4gICAgICAgICF0aGlzLm5hdGl2ZURyYWdnYWJsZSAmJiBvbihvd25lckRvY3VtZW50LCAncG9pbnRlcmNhbmNlbCcsIF90aGlzLl9vbkRyb3ApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb24ob3duZXJEb2N1bWVudCwgJ21vdXNldXAnLCBfdGhpcy5fb25Ecm9wKTtcbiAgICAgICAgb24ob3duZXJEb2N1bWVudCwgJ3RvdWNoZW5kJywgX3RoaXMuX29uRHJvcCk7XG4gICAgICAgIG9uKG93bmVyRG9jdW1lbnQsICd0b3VjaGNhbmNlbCcsIF90aGlzLl9vbkRyb3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBNYWtlIGRyYWdFbCBkcmFnZ2FibGUgKG11c3QgYmUgYmVmb3JlIGRlbGF5IGZvciBGaXJlRm94KVxuICAgICAgaWYgKEZpcmVGb3ggJiYgdGhpcy5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnRvdWNoU3RhcnRUaHJlc2hvbGQgPSA0O1xuICAgICAgICBkcmFnRWwuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHBsdWdpbkV2ZW50KCdkZWxheVN0YXJ0JywgdGhpcywge1xuICAgICAgICBldnQ6IGV2dFxuICAgICAgfSk7XG5cbiAgICAgIC8vIERlbGF5IGlzIGltcG9zc2libGUgZm9yIG5hdGl2ZSBEbkQgaW4gRWRnZSBvciBJRVxuICAgICAgaWYgKG9wdGlvbnMuZGVsYXkgJiYgKCFvcHRpb25zLmRlbGF5T25Ub3VjaE9ubHkgfHwgdG91Y2gpICYmICghdGhpcy5uYXRpdmVEcmFnZ2FibGUgfHwgIShFZGdlIHx8IElFMTFPckxlc3MpKSkge1xuICAgICAgICBpZiAoU29ydGFibGUuZXZlbnRDYW5jZWxlZCkge1xuICAgICAgICAgIHRoaXMuX29uRHJvcCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXNlciBtb3ZlcyB0aGUgcG9pbnRlciBvciBsZXQgZ28gdGhlIGNsaWNrIG9yIHRvdWNoXG4gICAgICAgIC8vIGJlZm9yZSB0aGUgZGVsYXkgaGFzIGJlZW4gcmVhY2hlZDpcbiAgICAgICAgLy8gZGlzYWJsZSB0aGUgZGVsYXllZCBkcmFnXG4gICAgICAgIGlmIChvcHRpb25zLnN1cHBvcnRQb2ludGVyKSB7XG4gICAgICAgICAgb24ob3duZXJEb2N1bWVudCwgJ3BvaW50ZXJ1cCcsIF90aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xuICAgICAgICAgIG9uKG93bmVyRG9jdW1lbnQsICdwb2ludGVyY2FuY2VsJywgX3RoaXMuX2Rpc2FibGVEZWxheWVkRHJhZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb24ob3duZXJEb2N1bWVudCwgJ21vdXNldXAnLCBfdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICAgICAgICBvbihvd25lckRvY3VtZW50LCAndG91Y2hlbmQnLCBfdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICAgICAgICBvbihvd25lckRvY3VtZW50LCAndG91Y2hjYW5jZWwnLCBfdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICAgICAgfVxuICAgICAgICBvbihvd25lckRvY3VtZW50LCAnbW91c2Vtb3ZlJywgX3RoaXMuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcik7XG4gICAgICAgIG9uKG93bmVyRG9jdW1lbnQsICd0b3VjaG1vdmUnLCBfdGhpcy5fZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKTtcbiAgICAgICAgb3B0aW9ucy5zdXBwb3J0UG9pbnRlciAmJiBvbihvd25lckRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCBfdGhpcy5fZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKTtcbiAgICAgICAgX3RoaXMuX2RyYWdTdGFydFRpbWVyID0gc2V0VGltZW91dChkcmFnU3RhcnRGbiwgb3B0aW9ucy5kZWxheSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnU3RhcnRGbigpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcjogZnVuY3Rpb24gX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlciggLyoqIFRvdWNoRXZlbnR8UG9pbnRlckV2ZW50ICoqL2UpIHtcbiAgICB2YXIgdG91Y2ggPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0gOiBlO1xuICAgIGlmIChNYXRoLm1heChNYXRoLmFicyh0b3VjaC5jbGllbnRYIC0gdGhpcy5fbGFzdFgpLCBNYXRoLmFicyh0b3VjaC5jbGllbnRZIC0gdGhpcy5fbGFzdFkpKSA+PSBNYXRoLmZsb29yKHRoaXMub3B0aW9ucy50b3VjaFN0YXJ0VGhyZXNob2xkIC8gKHRoaXMubmF0aXZlRHJhZ2dhYmxlICYmIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpKSkge1xuICAgICAgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKCk7XG4gICAgfVxuICB9LFxuICBfZGlzYWJsZURlbGF5ZWREcmFnOiBmdW5jdGlvbiBfZGlzYWJsZURlbGF5ZWREcmFnKCkge1xuICAgIGRyYWdFbCAmJiBfZGlzYWJsZURyYWdnYWJsZShkcmFnRWwpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl9kcmFnU3RhcnRUaW1lcik7XG4gICAgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnRXZlbnRzKCk7XG4gIH0sXG4gIF9kaXNhYmxlRGVsYXllZERyYWdFdmVudHM6IGZ1bmN0aW9uIF9kaXNhYmxlRGVsYXllZERyYWdFdmVudHMoKSB7XG4gICAgdmFyIG93bmVyRG9jdW1lbnQgPSB0aGlzLmVsLm93bmVyRG9jdW1lbnQ7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICdtb3VzZXVwJywgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ3RvdWNoZW5kJywgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ3RvdWNoY2FuY2VsJywgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ3BvaW50ZXJ1cCcsIHRoaXMuX2Rpc2FibGVEZWxheWVkRHJhZyk7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICdwb2ludGVyY2FuY2VsJywgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ21vdXNlbW92ZScsIHRoaXMuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcik7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICd0b3VjaG1vdmUnLCB0aGlzLl9kZWxheWVkRHJhZ1RvdWNoTW92ZUhhbmRsZXIpO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCB0aGlzLl9kZWxheWVkRHJhZ1RvdWNoTW92ZUhhbmRsZXIpO1xuICB9LFxuICBfdHJpZ2dlckRyYWdTdGFydDogZnVuY3Rpb24gX3RyaWdnZXJEcmFnU3RhcnQoIC8qKiBFdmVudCAqL2V2dCwgLyoqIFRvdWNoICovdG91Y2gpIHtcbiAgICB0b3VjaCA9IHRvdWNoIHx8IGV2dC5wb2ludGVyVHlwZSA9PSAndG91Y2gnICYmIGV2dDtcbiAgICBpZiAoIXRoaXMubmF0aXZlRHJhZ2dhYmxlIHx8IHRvdWNoKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnN1cHBvcnRQb2ludGVyKSB7XG4gICAgICAgIG9uKGRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgICB9IGVsc2UgaWYgKHRvdWNoKSB7XG4gICAgICAgIG9uKGRvY3VtZW50LCAndG91Y2htb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb24oZG9jdW1lbnQsICdtb3VzZW1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uKGRyYWdFbCwgJ2RyYWdlbmQnLCB0aGlzKTtcbiAgICAgIG9uKHJvb3RFbCwgJ2RyYWdzdGFydCcsIHRoaXMuX29uRHJhZ1N0YXJ0KTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGlmIChkb2N1bWVudC5zZWxlY3Rpb24pIHtcbiAgICAgICAgX25leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkb2N1bWVudC5zZWxlY3Rpb24uZW1wdHkoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7fVxuICB9LFxuICBfZHJhZ1N0YXJ0ZWQ6IGZ1bmN0aW9uIF9kcmFnU3RhcnRlZChmYWxsYmFjaywgZXZ0KSB7XG4gICAgYXdhaXRpbmdEcmFnU3RhcnRlZCA9IGZhbHNlO1xuICAgIGlmIChyb290RWwgJiYgZHJhZ0VsKSB7XG4gICAgICBwbHVnaW5FdmVudCgnZHJhZ1N0YXJ0ZWQnLCB0aGlzLCB7XG4gICAgICAgIGV2dDogZXZ0XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgICAgICBvbihkb2N1bWVudCwgJ2RyYWdvdmVyJywgX2NoZWNrT3V0c2lkZVRhcmdldEVsKTtcbiAgICAgIH1cbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICAvLyBBcHBseSBlZmZlY3RcbiAgICAgICFmYWxsYmFjayAmJiB0b2dnbGVDbGFzcyhkcmFnRWwsIG9wdGlvbnMuZHJhZ0NsYXNzLCBmYWxzZSk7XG4gICAgICB0b2dnbGVDbGFzcyhkcmFnRWwsIG9wdGlvbnMuZ2hvc3RDbGFzcywgdHJ1ZSk7XG4gICAgICBTb3J0YWJsZS5hY3RpdmUgPSB0aGlzO1xuICAgICAgZmFsbGJhY2sgJiYgdGhpcy5fYXBwZW5kR2hvc3QoKTtcblxuICAgICAgLy8gRHJhZyBzdGFydCBldmVudFxuICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgbmFtZTogJ3N0YXJ0JyxcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbnVsbGluZygpO1xuICAgIH1cbiAgfSxcbiAgX2VtdWxhdGVEcmFnT3ZlcjogZnVuY3Rpb24gX2VtdWxhdGVEcmFnT3ZlcigpIHtcbiAgICBpZiAodG91Y2hFdnQpIHtcbiAgICAgIHRoaXMuX2xhc3RYID0gdG91Y2hFdnQuY2xpZW50WDtcbiAgICAgIHRoaXMuX2xhc3RZID0gdG91Y2hFdnQuY2xpZW50WTtcbiAgICAgIF9oaWRlR2hvc3RGb3JUYXJnZXQoKTtcbiAgICAgIHZhciB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHRvdWNoRXZ0LmNsaWVudFgsIHRvdWNoRXZ0LmNsaWVudFkpO1xuICAgICAgdmFyIHBhcmVudCA9IHRhcmdldDtcbiAgICAgIHdoaWxlICh0YXJnZXQgJiYgdGFyZ2V0LnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnNoYWRvd1Jvb3QuZWxlbWVudEZyb21Qb2ludCh0b3VjaEV2dC5jbGllbnRYLCB0b3VjaEV2dC5jbGllbnRZKTtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gcGFyZW50KSBicmVhaztcbiAgICAgICAgcGFyZW50ID0gdGFyZ2V0O1xuICAgICAgfVxuICAgICAgZHJhZ0VsLnBhcmVudE5vZGVbZXhwYW5kb10uX2lzT3V0c2lkZVRoaXNFbCh0YXJnZXQpO1xuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICBkbyB7XG4gICAgICAgICAgaWYgKHBhcmVudFtleHBhbmRvXSkge1xuICAgICAgICAgICAgdmFyIGluc2VydGVkID0gdm9pZCAwO1xuICAgICAgICAgICAgaW5zZXJ0ZWQgPSBwYXJlbnRbZXhwYW5kb10uX29uRHJhZ092ZXIoe1xuICAgICAgICAgICAgICBjbGllbnRYOiB0b3VjaEV2dC5jbGllbnRYLFxuICAgICAgICAgICAgICBjbGllbnRZOiB0b3VjaEV2dC5jbGllbnRZLFxuICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgcm9vdEVsOiBwYXJlbnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGluc2VydGVkICYmICF0aGlzLm9wdGlvbnMuZHJhZ292ZXJCdWJibGUpIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRhcmdldCA9IHBhcmVudDsgLy8gc3RvcmUgbGFzdCBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgLyoganNoaW50IGJvc3M6dHJ1ZSAqLyB3aGlsZSAocGFyZW50ID0gZ2V0UGFyZW50T3JIb3N0KHBhcmVudCkpO1xuICAgICAgfVxuICAgICAgX3VuaGlkZUdob3N0Rm9yVGFyZ2V0KCk7XG4gICAgfVxuICB9LFxuICBfb25Ub3VjaE1vdmU6IGZ1bmN0aW9uIF9vblRvdWNoTW92ZSggLyoqVG91Y2hFdmVudCovZXZ0KSB7XG4gICAgaWYgKHRhcEV2dCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIGZhbGxiYWNrVG9sZXJhbmNlID0gb3B0aW9ucy5mYWxsYmFja1RvbGVyYW5jZSxcbiAgICAgICAgZmFsbGJhY2tPZmZzZXQgPSBvcHRpb25zLmZhbGxiYWNrT2Zmc2V0LFxuICAgICAgICB0b3VjaCA9IGV2dC50b3VjaGVzID8gZXZ0LnRvdWNoZXNbMF0gOiBldnQsXG4gICAgICAgIGdob3N0TWF0cml4ID0gZ2hvc3RFbCAmJiBtYXRyaXgoZ2hvc3RFbCwgdHJ1ZSksXG4gICAgICAgIHNjYWxlWCA9IGdob3N0RWwgJiYgZ2hvc3RNYXRyaXggJiYgZ2hvc3RNYXRyaXguYSxcbiAgICAgICAgc2NhbGVZID0gZ2hvc3RFbCAmJiBnaG9zdE1hdHJpeCAmJiBnaG9zdE1hdHJpeC5kLFxuICAgICAgICByZWxhdGl2ZVNjcm9sbE9mZnNldCA9IFBvc2l0aW9uR2hvc3RBYnNvbHV0ZWx5ICYmIGdob3N0UmVsYXRpdmVQYXJlbnQgJiYgZ2V0UmVsYXRpdmVTY3JvbGxPZmZzZXQoZ2hvc3RSZWxhdGl2ZVBhcmVudCksXG4gICAgICAgIGR4ID0gKHRvdWNoLmNsaWVudFggLSB0YXBFdnQuY2xpZW50WCArIGZhbGxiYWNrT2Zmc2V0LngpIC8gKHNjYWxlWCB8fCAxKSArIChyZWxhdGl2ZVNjcm9sbE9mZnNldCA/IHJlbGF0aXZlU2Nyb2xsT2Zmc2V0WzBdIC0gZ2hvc3RSZWxhdGl2ZVBhcmVudEluaXRpYWxTY3JvbGxbMF0gOiAwKSAvIChzY2FsZVggfHwgMSksXG4gICAgICAgIGR5ID0gKHRvdWNoLmNsaWVudFkgLSB0YXBFdnQuY2xpZW50WSArIGZhbGxiYWNrT2Zmc2V0LnkpIC8gKHNjYWxlWSB8fCAxKSArIChyZWxhdGl2ZVNjcm9sbE9mZnNldCA/IHJlbGF0aXZlU2Nyb2xsT2Zmc2V0WzFdIC0gZ2hvc3RSZWxhdGl2ZVBhcmVudEluaXRpYWxTY3JvbGxbMV0gOiAwKSAvIChzY2FsZVkgfHwgMSk7XG5cbiAgICAgIC8vIG9ubHkgc2V0IHRoZSBzdGF0dXMgdG8gZHJhZ2dpbmcsIHdoZW4gd2UgYXJlIGFjdHVhbGx5IGRyYWdnaW5nXG4gICAgICBpZiAoIVNvcnRhYmxlLmFjdGl2ZSAmJiAhYXdhaXRpbmdEcmFnU3RhcnRlZCkge1xuICAgICAgICBpZiAoZmFsbGJhY2tUb2xlcmFuY2UgJiYgTWF0aC5tYXgoTWF0aC5hYnModG91Y2guY2xpZW50WCAtIHRoaXMuX2xhc3RYKSwgTWF0aC5hYnModG91Y2guY2xpZW50WSAtIHRoaXMuX2xhc3RZKSkgPCBmYWxsYmFja1RvbGVyYW5jZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vbkRyYWdTdGFydChldnQsIHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKGdob3N0RWwpIHtcbiAgICAgICAgaWYgKGdob3N0TWF0cml4KSB7XG4gICAgICAgICAgZ2hvc3RNYXRyaXguZSArPSBkeCAtIChsYXN0RHggfHwgMCk7XG4gICAgICAgICAgZ2hvc3RNYXRyaXguZiArPSBkeSAtIChsYXN0RHkgfHwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2hvc3RNYXRyaXggPSB7XG4gICAgICAgICAgICBhOiAxLFxuICAgICAgICAgICAgYjogMCxcbiAgICAgICAgICAgIGM6IDAsXG4gICAgICAgICAgICBkOiAxLFxuICAgICAgICAgICAgZTogZHgsXG4gICAgICAgICAgICBmOiBkeVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNzc01hdHJpeCA9IFwibWF0cml4KFwiLmNvbmNhdChnaG9zdE1hdHJpeC5hLCBcIixcIikuY29uY2F0KGdob3N0TWF0cml4LmIsIFwiLFwiKS5jb25jYXQoZ2hvc3RNYXRyaXguYywgXCIsXCIpLmNvbmNhdChnaG9zdE1hdHJpeC5kLCBcIixcIikuY29uY2F0KGdob3N0TWF0cml4LmUsIFwiLFwiKS5jb25jYXQoZ2hvc3RNYXRyaXguZiwgXCIpXCIpO1xuICAgICAgICBjc3MoZ2hvc3RFbCwgJ3dlYmtpdFRyYW5zZm9ybScsIGNzc01hdHJpeCk7XG4gICAgICAgIGNzcyhnaG9zdEVsLCAnbW96VHJhbnNmb3JtJywgY3NzTWF0cml4KTtcbiAgICAgICAgY3NzKGdob3N0RWwsICdtc1RyYW5zZm9ybScsIGNzc01hdHJpeCk7XG4gICAgICAgIGNzcyhnaG9zdEVsLCAndHJhbnNmb3JtJywgY3NzTWF0cml4KTtcbiAgICAgICAgbGFzdER4ID0gZHg7XG4gICAgICAgIGxhc3REeSA9IGR5O1xuICAgICAgICB0b3VjaEV2dCA9IHRvdWNoO1xuICAgICAgfVxuICAgICAgZXZ0LmNhbmNlbGFibGUgJiYgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9LFxuICBfYXBwZW5kR2hvc3Q6IGZ1bmN0aW9uIF9hcHBlbmRHaG9zdCgpIHtcbiAgICAvLyBCdWcgaWYgdXNpbmcgc2NhbGUoKTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjYzNzA1OFxuICAgIC8vIE5vdCBiZWluZyBhZGp1c3RlZCBmb3JcbiAgICBpZiAoIWdob3N0RWwpIHtcbiAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLm9wdGlvbnMuZmFsbGJhY2tPbkJvZHkgPyBkb2N1bWVudC5ib2R5IDogcm9vdEVsLFxuICAgICAgICByZWN0ID0gZ2V0UmVjdChkcmFnRWwsIHRydWUsIFBvc2l0aW9uR2hvc3RBYnNvbHV0ZWx5LCB0cnVlLCBjb250YWluZXIpLFxuICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICAvLyBQb3NpdGlvbiBhYnNvbHV0ZWx5XG4gICAgICBpZiAoUG9zaXRpb25HaG9zdEFic29sdXRlbHkpIHtcbiAgICAgICAgLy8gR2V0IHJlbGF0aXZlbHkgcG9zaXRpb25lZCBwYXJlbnRcbiAgICAgICAgZ2hvc3RSZWxhdGl2ZVBhcmVudCA9IGNvbnRhaW5lcjtcbiAgICAgICAgd2hpbGUgKGNzcyhnaG9zdFJlbGF0aXZlUGFyZW50LCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycgJiYgY3NzKGdob3N0UmVsYXRpdmVQYXJlbnQsICd0cmFuc2Zvcm0nKSA9PT0gJ25vbmUnICYmIGdob3N0UmVsYXRpdmVQYXJlbnQgIT09IGRvY3VtZW50KSB7XG4gICAgICAgICAgZ2hvc3RSZWxhdGl2ZVBhcmVudCA9IGdob3N0UmVsYXRpdmVQYXJlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2hvc3RSZWxhdGl2ZVBhcmVudCAhPT0gZG9jdW1lbnQuYm9keSAmJiBnaG9zdFJlbGF0aXZlUGFyZW50ICE9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgICBpZiAoZ2hvc3RSZWxhdGl2ZVBhcmVudCA9PT0gZG9jdW1lbnQpIGdob3N0UmVsYXRpdmVQYXJlbnQgPSBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCk7XG4gICAgICAgICAgcmVjdC50b3AgKz0gZ2hvc3RSZWxhdGl2ZVBhcmVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgcmVjdC5sZWZ0ICs9IGdob3N0UmVsYXRpdmVQYXJlbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnaG9zdFJlbGF0aXZlUGFyZW50ID0gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGdob3N0UmVsYXRpdmVQYXJlbnRJbml0aWFsU2Nyb2xsID0gZ2V0UmVsYXRpdmVTY3JvbGxPZmZzZXQoZ2hvc3RSZWxhdGl2ZVBhcmVudCk7XG4gICAgICB9XG4gICAgICBnaG9zdEVsID0gZHJhZ0VsLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIHRvZ2dsZUNsYXNzKGdob3N0RWwsIG9wdGlvbnMuZ2hvc3RDbGFzcywgZmFsc2UpO1xuICAgICAgdG9nZ2xlQ2xhc3MoZ2hvc3RFbCwgb3B0aW9ucy5mYWxsYmFja0NsYXNzLCB0cnVlKTtcbiAgICAgIHRvZ2dsZUNsYXNzKGdob3N0RWwsIG9wdGlvbnMuZHJhZ0NsYXNzLCB0cnVlKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAndHJhbnNpdGlvbicsICcnKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAndHJhbnNmb3JtJywgJycpO1xuICAgICAgY3NzKGdob3N0RWwsICdib3gtc2l6aW5nJywgJ2JvcmRlci1ib3gnKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAnbWFyZ2luJywgMCk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ3RvcCcsIHJlY3QudG9wKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAnbGVmdCcsIHJlY3QubGVmdCk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ3dpZHRoJywgcmVjdC53aWR0aCk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ2hlaWdodCcsIHJlY3QuaGVpZ2h0KTtcbiAgICAgIGNzcyhnaG9zdEVsLCAnb3BhY2l0eScsICcwLjgnKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAncG9zaXRpb24nLCBQb3NpdGlvbkdob3N0QWJzb2x1dGVseSA/ICdhYnNvbHV0ZScgOiAnZml4ZWQnKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAnekluZGV4JywgJzEwMDAwMCcpO1xuICAgICAgY3NzKGdob3N0RWwsICdwb2ludGVyRXZlbnRzJywgJ25vbmUnKTtcbiAgICAgIFNvcnRhYmxlLmdob3N0ID0gZ2hvc3RFbDtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnaG9zdEVsKTtcblxuICAgICAgLy8gU2V0IHRyYW5zZm9ybS1vcmlnaW5cbiAgICAgIGNzcyhnaG9zdEVsLCAndHJhbnNmb3JtLW9yaWdpbicsIHRhcERpc3RhbmNlTGVmdCAvIHBhcnNlSW50KGdob3N0RWwuc3R5bGUud2lkdGgpICogMTAwICsgJyUgJyArIHRhcERpc3RhbmNlVG9wIC8gcGFyc2VJbnQoZ2hvc3RFbC5zdHlsZS5oZWlnaHQpICogMTAwICsgJyUnKTtcbiAgICB9XG4gIH0sXG4gIF9vbkRyYWdTdGFydDogZnVuY3Rpb24gX29uRHJhZ1N0YXJ0KCAvKipFdmVudCovZXZ0LCAvKipib29sZWFuKi9mYWxsYmFjaykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGRhdGFUcmFuc2ZlciA9IGV2dC5kYXRhVHJhbnNmZXI7XG4gICAgdmFyIG9wdGlvbnMgPSBfdGhpcy5vcHRpb25zO1xuICAgIHBsdWdpbkV2ZW50KCdkcmFnU3RhcnQnLCB0aGlzLCB7XG4gICAgICBldnQ6IGV2dFxuICAgIH0pO1xuICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSB7XG4gICAgICB0aGlzLl9vbkRyb3AoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcGx1Z2luRXZlbnQoJ3NldHVwQ2xvbmUnLCB0aGlzKTtcbiAgICBpZiAoIVNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHtcbiAgICAgIGNsb25lRWwgPSBjbG9uZShkcmFnRWwpO1xuICAgICAgY2xvbmVFbC5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICAgIGNsb25lRWwuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICBjbG9uZUVsLnN0eWxlWyd3aWxsLWNoYW5nZSddID0gJyc7XG4gICAgICB0aGlzLl9oaWRlQ2xvbmUoKTtcbiAgICAgIHRvZ2dsZUNsYXNzKGNsb25lRWwsIHRoaXMub3B0aW9ucy5jaG9zZW5DbGFzcywgZmFsc2UpO1xuICAgICAgU29ydGFibGUuY2xvbmUgPSBjbG9uZUVsO1xuICAgIH1cblxuICAgIC8vICMxMTQzOiBJRnJhbWUgc3VwcG9ydCB3b3JrYXJvdW5kXG4gICAgX3RoaXMuY2xvbmVJZCA9IF9uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBwbHVnaW5FdmVudCgnY2xvbmUnLCBfdGhpcyk7XG4gICAgICBpZiAoU29ydGFibGUuZXZlbnRDYW5jZWxlZCkgcmV0dXJuO1xuICAgICAgaWYgKCFfdGhpcy5vcHRpb25zLnJlbW92ZUNsb25lT25IaWRlKSB7XG4gICAgICAgIHJvb3RFbC5pbnNlcnRCZWZvcmUoY2xvbmVFbCwgZHJhZ0VsKTtcbiAgICAgIH1cbiAgICAgIF90aGlzLl9oaWRlQ2xvbmUoKTtcbiAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgc29ydGFibGU6IF90aGlzLFxuICAgICAgICBuYW1lOiAnY2xvbmUnXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAhZmFsbGJhY2sgJiYgdG9nZ2xlQ2xhc3MoZHJhZ0VsLCBvcHRpb25zLmRyYWdDbGFzcywgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgcHJvcGVyIGRyb3AgZXZlbnRzXG4gICAgaWYgKGZhbGxiYWNrKSB7XG4gICAgICBpZ25vcmVOZXh0Q2xpY2sgPSB0cnVlO1xuICAgICAgX3RoaXMuX2xvb3BJZCA9IHNldEludGVydmFsKF90aGlzLl9lbXVsYXRlRHJhZ092ZXIsIDUwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVW5kbyB3aGF0IHdhcyBzZXQgaW4gX3ByZXBhcmVEcmFnU3RhcnQgYmVmb3JlIGRyYWcgc3RhcnRlZFxuICAgICAgb2ZmKGRvY3VtZW50LCAnbW91c2V1cCcsIF90aGlzLl9vbkRyb3ApO1xuICAgICAgb2ZmKGRvY3VtZW50LCAndG91Y2hlbmQnLCBfdGhpcy5fb25Ecm9wKTtcbiAgICAgIG9mZihkb2N1bWVudCwgJ3RvdWNoY2FuY2VsJywgX3RoaXMuX29uRHJvcCk7XG4gICAgICBpZiAoZGF0YVRyYW5zZmVyKSB7XG4gICAgICAgIGRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnO1xuICAgICAgICBvcHRpb25zLnNldERhdGEgJiYgb3B0aW9ucy5zZXREYXRhLmNhbGwoX3RoaXMsIGRhdGFUcmFuc2ZlciwgZHJhZ0VsKTtcbiAgICAgIH1cbiAgICAgIG9uKGRvY3VtZW50LCAnZHJvcCcsIF90aGlzKTtcblxuICAgICAgLy8gIzEyNzYgZml4OlxuICAgICAgY3NzKGRyYWdFbCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVaKDApJyk7XG4gICAgfVxuICAgIGF3YWl0aW5nRHJhZ1N0YXJ0ZWQgPSB0cnVlO1xuICAgIF90aGlzLl9kcmFnU3RhcnRJZCA9IF9uZXh0VGljayhfdGhpcy5fZHJhZ1N0YXJ0ZWQuYmluZChfdGhpcywgZmFsbGJhY2ssIGV2dCkpO1xuICAgIG9uKGRvY3VtZW50LCAnc2VsZWN0c3RhcnQnLCBfdGhpcyk7XG4gICAgbW92ZWQgPSB0cnVlO1xuICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBpZiAoU2FmYXJpKSB7XG4gICAgICBjc3MoZG9jdW1lbnQuYm9keSwgJ3VzZXItc2VsZWN0JywgJ25vbmUnKTtcbiAgICB9XG4gIH0sXG4gIC8vIFJldHVybnMgdHJ1ZSAtIGlmIG5vIGZ1cnRoZXIgYWN0aW9uIGlzIG5lZWRlZCAoZWl0aGVyIGluc2VydGVkIG9yIGFub3RoZXIgY29uZGl0aW9uKVxuICBfb25EcmFnT3ZlcjogZnVuY3Rpb24gX29uRHJhZ092ZXIoIC8qKkV2ZW50Ki9ldnQpIHtcbiAgICB2YXIgZWwgPSB0aGlzLmVsLFxuICAgICAgdGFyZ2V0ID0gZXZ0LnRhcmdldCxcbiAgICAgIGRyYWdSZWN0LFxuICAgICAgdGFyZ2V0UmVjdCxcbiAgICAgIHJldmVydCxcbiAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICBncm91cCA9IG9wdGlvbnMuZ3JvdXAsXG4gICAgICBhY3RpdmVTb3J0YWJsZSA9IFNvcnRhYmxlLmFjdGl2ZSxcbiAgICAgIGlzT3duZXIgPSBhY3RpdmVHcm91cCA9PT0gZ3JvdXAsXG4gICAgICBjYW5Tb3J0ID0gb3B0aW9ucy5zb3J0LFxuICAgICAgZnJvbVNvcnRhYmxlID0gcHV0U29ydGFibGUgfHwgYWN0aXZlU29ydGFibGUsXG4gICAgICB2ZXJ0aWNhbCxcbiAgICAgIF90aGlzID0gdGhpcyxcbiAgICAgIGNvbXBsZXRlZEZpcmVkID0gZmFsc2U7XG4gICAgaWYgKF9zaWxlbnQpIHJldHVybjtcbiAgICBmdW5jdGlvbiBkcmFnT3ZlckV2ZW50KG5hbWUsIGV4dHJhKSB7XG4gICAgICBwbHVnaW5FdmVudChuYW1lLCBfdGhpcywgX29iamVjdFNwcmVhZDIoe1xuICAgICAgICBldnQ6IGV2dCxcbiAgICAgICAgaXNPd25lcjogaXNPd25lcixcbiAgICAgICAgYXhpczogdmVydGljYWwgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnLFxuICAgICAgICByZXZlcnQ6IHJldmVydCxcbiAgICAgICAgZHJhZ1JlY3Q6IGRyYWdSZWN0LFxuICAgICAgICB0YXJnZXRSZWN0OiB0YXJnZXRSZWN0LFxuICAgICAgICBjYW5Tb3J0OiBjYW5Tb3J0LFxuICAgICAgICBmcm9tU29ydGFibGU6IGZyb21Tb3J0YWJsZSxcbiAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgIGNvbXBsZXRlZDogY29tcGxldGVkLFxuICAgICAgICBvbk1vdmU6IGZ1bmN0aW9uIG9uTW92ZSh0YXJnZXQsIGFmdGVyKSB7XG4gICAgICAgICAgcmV0dXJuIF9vbk1vdmUocm9vdEVsLCBlbCwgZHJhZ0VsLCBkcmFnUmVjdCwgdGFyZ2V0LCBnZXRSZWN0KHRhcmdldCksIGV2dCwgYWZ0ZXIpO1xuICAgICAgICB9LFxuICAgICAgICBjaGFuZ2VkOiBjaGFuZ2VkXG4gICAgICB9LCBleHRyYSkpO1xuICAgIH1cblxuICAgIC8vIENhcHR1cmUgYW5pbWF0aW9uIHN0YXRlXG4gICAgZnVuY3Rpb24gY2FwdHVyZSgpIHtcbiAgICAgIGRyYWdPdmVyRXZlbnQoJ2RyYWdPdmVyQW5pbWF0aW9uQ2FwdHVyZScpO1xuICAgICAgX3RoaXMuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgICBpZiAoX3RoaXMgIT09IGZyb21Tb3J0YWJsZSkge1xuICAgICAgICBmcm9tU29ydGFibGUuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGludm9jYXRpb24gd2hlbiBkcmFnRWwgaXMgaW5zZXJ0ZWQgKG9yIGNvbXBsZXRlZClcbiAgICBmdW5jdGlvbiBjb21wbGV0ZWQoaW5zZXJ0aW9uKSB7XG4gICAgICBkcmFnT3ZlckV2ZW50KCdkcmFnT3ZlckNvbXBsZXRlZCcsIHtcbiAgICAgICAgaW5zZXJ0aW9uOiBpbnNlcnRpb25cbiAgICAgIH0pO1xuICAgICAgaWYgKGluc2VydGlvbikge1xuICAgICAgICAvLyBDbG9uZXMgbXVzdCBiZSBoaWRkZW4gYmVmb3JlIGZvbGRpbmcgYW5pbWF0aW9uIHRvIGNhcHR1cmUgZHJhZ1JlY3RBYnNvbHV0ZSBwcm9wZXJseVxuICAgICAgICBpZiAoaXNPd25lcikge1xuICAgICAgICAgIGFjdGl2ZVNvcnRhYmxlLl9oaWRlQ2xvbmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhY3RpdmVTb3J0YWJsZS5fc2hvd0Nsb25lKF90aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX3RoaXMgIT09IGZyb21Tb3J0YWJsZSkge1xuICAgICAgICAgIC8vIFNldCBnaG9zdCBjbGFzcyB0byBuZXcgc29ydGFibGUncyBnaG9zdCBjbGFzc1xuICAgICAgICAgIHRvZ2dsZUNsYXNzKGRyYWdFbCwgcHV0U29ydGFibGUgPyBwdXRTb3J0YWJsZS5vcHRpb25zLmdob3N0Q2xhc3MgOiBhY3RpdmVTb3J0YWJsZS5vcHRpb25zLmdob3N0Q2xhc3MsIGZhbHNlKTtcbiAgICAgICAgICB0b2dnbGVDbGFzcyhkcmFnRWwsIG9wdGlvbnMuZ2hvc3RDbGFzcywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHB1dFNvcnRhYmxlICE9PSBfdGhpcyAmJiBfdGhpcyAhPT0gU29ydGFibGUuYWN0aXZlKSB7XG4gICAgICAgICAgcHV0U29ydGFibGUgPSBfdGhpcztcbiAgICAgICAgfSBlbHNlIGlmIChfdGhpcyA9PT0gU29ydGFibGUuYWN0aXZlICYmIHB1dFNvcnRhYmxlKSB7XG4gICAgICAgICAgcHV0U29ydGFibGUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQW5pbWF0aW9uXG4gICAgICAgIGlmIChmcm9tU29ydGFibGUgPT09IF90aGlzKSB7XG4gICAgICAgICAgX3RoaXMuX2lnbm9yZVdoaWxlQW5pbWF0aW5nID0gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLmFuaW1hdGVBbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGRyYWdPdmVyRXZlbnQoJ2RyYWdPdmVyQW5pbWF0aW9uQ29tcGxldGUnKTtcbiAgICAgICAgICBfdGhpcy5faWdub3JlV2hpbGVBbmltYXRpbmcgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKF90aGlzICE9PSBmcm9tU29ydGFibGUpIHtcbiAgICAgICAgICBmcm9tU29ydGFibGUuYW5pbWF0ZUFsbCgpO1xuICAgICAgICAgIGZyb21Tb3J0YWJsZS5faWdub3JlV2hpbGVBbmltYXRpbmcgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE51bGwgbGFzdFRhcmdldCBpZiBpdCBpcyBub3QgaW5zaWRlIGEgcHJldmlvdXNseSBzd2FwcGVkIGVsZW1lbnRcbiAgICAgIGlmICh0YXJnZXQgPT09IGRyYWdFbCAmJiAhZHJhZ0VsLmFuaW1hdGVkIHx8IHRhcmdldCA9PT0gZWwgJiYgIXRhcmdldC5hbmltYXRlZCkge1xuICAgICAgICBsYXN0VGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gbm8gYnViYmxpbmcgYW5kIG5vdCBmYWxsYmFja1xuICAgICAgaWYgKCFvcHRpb25zLmRyYWdvdmVyQnViYmxlICYmICFldnQucm9vdEVsICYmIHRhcmdldCAhPT0gZG9jdW1lbnQpIHtcbiAgICAgICAgZHJhZ0VsLnBhcmVudE5vZGVbZXhwYW5kb10uX2lzT3V0c2lkZVRoaXNFbChldnQudGFyZ2V0KTtcblxuICAgICAgICAvLyBEbyBub3QgZGV0ZWN0IGZvciBlbXB0eSBpbnNlcnQgaWYgYWxyZWFkeSBpbnNlcnRlZFxuICAgICAgICAhaW5zZXJ0aW9uICYmIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50KGV2dCk7XG4gICAgICB9XG4gICAgICAhb3B0aW9ucy5kcmFnb3ZlckJ1YmJsZSAmJiBldnQuc3RvcFByb3BhZ2F0aW9uICYmIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHJldHVybiBjb21wbGV0ZWRGaXJlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQ2FsbCB3aGVuIGRyYWdFbCBoYXMgYmVlbiBpbnNlcnRlZFxuICAgIGZ1bmN0aW9uIGNoYW5nZWQoKSB7XG4gICAgICBuZXdJbmRleCA9IGluZGV4KGRyYWdFbCk7XG4gICAgICBuZXdEcmFnZ2FibGVJbmRleCA9IGluZGV4KGRyYWdFbCwgb3B0aW9ucy5kcmFnZ2FibGUpO1xuICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICBzb3J0YWJsZTogX3RoaXMsXG4gICAgICAgIG5hbWU6ICdjaGFuZ2UnLFxuICAgICAgICB0b0VsOiBlbCxcbiAgICAgICAgbmV3SW5kZXg6IG5ld0luZGV4LFxuICAgICAgICBuZXdEcmFnZ2FibGVJbmRleDogbmV3RHJhZ2dhYmxlSW5kZXgsXG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChldnQucHJldmVudERlZmF1bHQgIT09IHZvaWQgMCkge1xuICAgICAgZXZ0LmNhbmNlbGFibGUgJiYgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIHRhcmdldCA9IGNsb3Nlc3QodGFyZ2V0LCBvcHRpb25zLmRyYWdnYWJsZSwgZWwsIHRydWUpO1xuICAgIGRyYWdPdmVyRXZlbnQoJ2RyYWdPdmVyJyk7XG4gICAgaWYgKFNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHJldHVybiBjb21wbGV0ZWRGaXJlZDtcbiAgICBpZiAoZHJhZ0VsLmNvbnRhaW5zKGV2dC50YXJnZXQpIHx8IHRhcmdldC5hbmltYXRlZCAmJiB0YXJnZXQuYW5pbWF0aW5nWCAmJiB0YXJnZXQuYW5pbWF0aW5nWSB8fCBfdGhpcy5faWdub3JlV2hpbGVBbmltYXRpbmcgPT09IHRhcmdldCkge1xuICAgICAgcmV0dXJuIGNvbXBsZXRlZChmYWxzZSk7XG4gICAgfVxuICAgIGlnbm9yZU5leHRDbGljayA9IGZhbHNlO1xuICAgIGlmIChhY3RpdmVTb3J0YWJsZSAmJiAhb3B0aW9ucy5kaXNhYmxlZCAmJiAoaXNPd25lciA/IGNhblNvcnQgfHwgKHJldmVydCA9IHBhcmVudEVsICE9PSByb290RWwpIC8vIFJldmVydGluZyBpdGVtIGludG8gdGhlIG9yaWdpbmFsIGxpc3RcbiAgICA6IHB1dFNvcnRhYmxlID09PSB0aGlzIHx8ICh0aGlzLmxhc3RQdXRNb2RlID0gYWN0aXZlR3JvdXAuY2hlY2tQdWxsKHRoaXMsIGFjdGl2ZVNvcnRhYmxlLCBkcmFnRWwsIGV2dCkpICYmIGdyb3VwLmNoZWNrUHV0KHRoaXMsIGFjdGl2ZVNvcnRhYmxlLCBkcmFnRWwsIGV2dCkpKSB7XG4gICAgICB2ZXJ0aWNhbCA9IHRoaXMuX2dldERpcmVjdGlvbihldnQsIHRhcmdldCkgPT09ICd2ZXJ0aWNhbCc7XG4gICAgICBkcmFnUmVjdCA9IGdldFJlY3QoZHJhZ0VsKTtcbiAgICAgIGRyYWdPdmVyRXZlbnQoJ2RyYWdPdmVyVmFsaWQnKTtcbiAgICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSByZXR1cm4gY29tcGxldGVkRmlyZWQ7XG4gICAgICBpZiAocmV2ZXJ0KSB7XG4gICAgICAgIHBhcmVudEVsID0gcm9vdEVsOyAvLyBhY3R1YWxpemF0aW9uXG4gICAgICAgIGNhcHR1cmUoKTtcbiAgICAgICAgdGhpcy5faGlkZUNsb25lKCk7XG4gICAgICAgIGRyYWdPdmVyRXZlbnQoJ3JldmVydCcpO1xuICAgICAgICBpZiAoIVNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHtcbiAgICAgICAgICBpZiAobmV4dEVsKSB7XG4gICAgICAgICAgICByb290RWwuaW5zZXJ0QmVmb3JlKGRyYWdFbCwgbmV4dEVsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcm9vdEVsLmFwcGVuZENoaWxkKGRyYWdFbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wbGV0ZWQodHJ1ZSk7XG4gICAgICB9XG4gICAgICB2YXIgZWxMYXN0Q2hpbGQgPSBsYXN0Q2hpbGQoZWwsIG9wdGlvbnMuZHJhZ2dhYmxlKTtcbiAgICAgIGlmICghZWxMYXN0Q2hpbGQgfHwgX2dob3N0SXNMYXN0KGV2dCwgdmVydGljYWwsIHRoaXMpICYmICFlbExhc3RDaGlsZC5hbmltYXRlZCkge1xuICAgICAgICAvLyBJbnNlcnQgdG8gZW5kIG9mIGxpc3RcblxuICAgICAgICAvLyBJZiBhbHJlYWR5IGF0IGVuZCBvZiBsaXN0OiBEbyBub3QgaW5zZXJ0XG4gICAgICAgIGlmIChlbExhc3RDaGlsZCA9PT0gZHJhZ0VsKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbXBsZXRlZChmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIGxhc3QgZWxlbWVudCwgaXQgaXMgdGhlIHRhcmdldFxuICAgICAgICBpZiAoZWxMYXN0Q2hpbGQgJiYgZWwgPT09IGV2dC50YXJnZXQpIHtcbiAgICAgICAgICB0YXJnZXQgPSBlbExhc3RDaGlsZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgdGFyZ2V0UmVjdCA9IGdldFJlY3QodGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX29uTW92ZShyb290RWwsIGVsLCBkcmFnRWwsIGRyYWdSZWN0LCB0YXJnZXQsIHRhcmdldFJlY3QsIGV2dCwgISF0YXJnZXQpICE9PSBmYWxzZSkge1xuICAgICAgICAgIGNhcHR1cmUoKTtcbiAgICAgICAgICBpZiAoZWxMYXN0Q2hpbGQgJiYgZWxMYXN0Q2hpbGQubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgIC8vIHRoZSBsYXN0IGRyYWdnYWJsZSBlbGVtZW50IGlzIG5vdCB0aGUgbGFzdCBub2RlXG4gICAgICAgICAgICBlbC5pbnNlcnRCZWZvcmUoZHJhZ0VsLCBlbExhc3RDaGlsZC5uZXh0U2libGluZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGRyYWdFbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcmVudEVsID0gZWw7IC8vIGFjdHVhbGl6YXRpb25cblxuICAgICAgICAgIGNoYW5nZWQoKTtcbiAgICAgICAgICByZXR1cm4gY29tcGxldGVkKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVsTGFzdENoaWxkICYmIF9naG9zdElzRmlyc3QoZXZ0LCB2ZXJ0aWNhbCwgdGhpcykpIHtcbiAgICAgICAgLy8gSW5zZXJ0IHRvIHN0YXJ0IG9mIGxpc3RcbiAgICAgICAgdmFyIGZpcnN0Q2hpbGQgPSBnZXRDaGlsZChlbCwgMCwgb3B0aW9ucywgdHJ1ZSk7XG4gICAgICAgIGlmIChmaXJzdENoaWxkID09PSBkcmFnRWwpIHtcbiAgICAgICAgICByZXR1cm4gY29tcGxldGVkKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQgPSBmaXJzdENoaWxkO1xuICAgICAgICB0YXJnZXRSZWN0ID0gZ2V0UmVjdCh0YXJnZXQpO1xuICAgICAgICBpZiAoX29uTW92ZShyb290RWwsIGVsLCBkcmFnRWwsIGRyYWdSZWN0LCB0YXJnZXQsIHRhcmdldFJlY3QsIGV2dCwgZmFsc2UpICE9PSBmYWxzZSkge1xuICAgICAgICAgIGNhcHR1cmUoKTtcbiAgICAgICAgICBlbC5pbnNlcnRCZWZvcmUoZHJhZ0VsLCBmaXJzdENoaWxkKTtcbiAgICAgICAgICBwYXJlbnRFbCA9IGVsOyAvLyBhY3R1YWxpemF0aW9uXG5cbiAgICAgICAgICBjaGFuZ2VkKCk7XG4gICAgICAgICAgcmV0dXJuIGNvbXBsZXRlZCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0YXJnZXQucGFyZW50Tm9kZSA9PT0gZWwpIHtcbiAgICAgICAgdGFyZ2V0UmVjdCA9IGdldFJlY3QodGFyZ2V0KTtcbiAgICAgICAgdmFyIGRpcmVjdGlvbiA9IDAsXG4gICAgICAgICAgdGFyZ2V0QmVmb3JlRmlyc3RTd2FwLFxuICAgICAgICAgIGRpZmZlcmVudExldmVsID0gZHJhZ0VsLnBhcmVudE5vZGUgIT09IGVsLFxuICAgICAgICAgIGRpZmZlcmVudFJvd0NvbCA9ICFfZHJhZ0VsSW5Sb3dDb2x1bW4oZHJhZ0VsLmFuaW1hdGVkICYmIGRyYWdFbC50b1JlY3QgfHwgZHJhZ1JlY3QsIHRhcmdldC5hbmltYXRlZCAmJiB0YXJnZXQudG9SZWN0IHx8IHRhcmdldFJlY3QsIHZlcnRpY2FsKSxcbiAgICAgICAgICBzaWRlMSA9IHZlcnRpY2FsID8gJ3RvcCcgOiAnbGVmdCcsXG4gICAgICAgICAgc2Nyb2xsZWRQYXN0VG9wID0gaXNTY3JvbGxlZFBhc3QodGFyZ2V0LCAndG9wJywgJ3RvcCcpIHx8IGlzU2Nyb2xsZWRQYXN0KGRyYWdFbCwgJ3RvcCcsICd0b3AnKSxcbiAgICAgICAgICBzY3JvbGxCZWZvcmUgPSBzY3JvbGxlZFBhc3RUb3AgPyBzY3JvbGxlZFBhc3RUb3Auc2Nyb2xsVG9wIDogdm9pZCAwO1xuICAgICAgICBpZiAobGFzdFRhcmdldCAhPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgdGFyZ2V0QmVmb3JlRmlyc3RTd2FwID0gdGFyZ2V0UmVjdFtzaWRlMV07XG4gICAgICAgICAgcGFzdEZpcnN0SW52ZXJ0VGhyZXNoID0gZmFsc2U7XG4gICAgICAgICAgaXNDaXJjdW1zdGFudGlhbEludmVydCA9ICFkaWZmZXJlbnRSb3dDb2wgJiYgb3B0aW9ucy5pbnZlcnRTd2FwIHx8IGRpZmZlcmVudExldmVsO1xuICAgICAgICB9XG4gICAgICAgIGRpcmVjdGlvbiA9IF9nZXRTd2FwRGlyZWN0aW9uKGV2dCwgdGFyZ2V0LCB0YXJnZXRSZWN0LCB2ZXJ0aWNhbCwgZGlmZmVyZW50Um93Q29sID8gMSA6IG9wdGlvbnMuc3dhcFRocmVzaG9sZCwgb3B0aW9ucy5pbnZlcnRlZFN3YXBUaHJlc2hvbGQgPT0gbnVsbCA/IG9wdGlvbnMuc3dhcFRocmVzaG9sZCA6IG9wdGlvbnMuaW52ZXJ0ZWRTd2FwVGhyZXNob2xkLCBpc0NpcmN1bXN0YW50aWFsSW52ZXJ0LCBsYXN0VGFyZ2V0ID09PSB0YXJnZXQpO1xuICAgICAgICB2YXIgc2libGluZztcbiAgICAgICAgaWYgKGRpcmVjdGlvbiAhPT0gMCkge1xuICAgICAgICAgIC8vIENoZWNrIGlmIHRhcmdldCBpcyBiZXNpZGUgZHJhZ0VsIGluIHJlc3BlY3RpdmUgZGlyZWN0aW9uIChpZ25vcmluZyBoaWRkZW4gZWxlbWVudHMpXG4gICAgICAgICAgdmFyIGRyYWdJbmRleCA9IGluZGV4KGRyYWdFbCk7XG4gICAgICAgICAgZG8ge1xuICAgICAgICAgICAgZHJhZ0luZGV4IC09IGRpcmVjdGlvbjtcbiAgICAgICAgICAgIHNpYmxpbmcgPSBwYXJlbnRFbC5jaGlsZHJlbltkcmFnSW5kZXhdO1xuICAgICAgICAgIH0gd2hpbGUgKHNpYmxpbmcgJiYgKGNzcyhzaWJsaW5nLCAnZGlzcGxheScpID09PSAnbm9uZScgfHwgc2libGluZyA9PT0gZ2hvc3RFbCkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGRyYWdFbCBpcyBhbHJlYWR5IGJlc2lkZSB0YXJnZXQ6IERvIG5vdCBpbnNlcnRcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gMCB8fCBzaWJsaW5nID09PSB0YXJnZXQpIHtcbiAgICAgICAgICByZXR1cm4gY29tcGxldGVkKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0VGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICBsYXN0RGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICB2YXIgbmV4dFNpYmxpbmcgPSB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLFxuICAgICAgICAgIGFmdGVyID0gZmFsc2U7XG4gICAgICAgIGFmdGVyID0gZGlyZWN0aW9uID09PSAxO1xuICAgICAgICB2YXIgbW92ZVZlY3RvciA9IF9vbk1vdmUocm9vdEVsLCBlbCwgZHJhZ0VsLCBkcmFnUmVjdCwgdGFyZ2V0LCB0YXJnZXRSZWN0LCBldnQsIGFmdGVyKTtcbiAgICAgICAgaWYgKG1vdmVWZWN0b3IgIT09IGZhbHNlKSB7XG4gICAgICAgICAgaWYgKG1vdmVWZWN0b3IgPT09IDEgfHwgbW92ZVZlY3RvciA9PT0gLTEpIHtcbiAgICAgICAgICAgIGFmdGVyID0gbW92ZVZlY3RvciA9PT0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgX3NpbGVudCA9IHRydWU7XG4gICAgICAgICAgc2V0VGltZW91dChfdW5zaWxlbnQsIDMwKTtcbiAgICAgICAgICBjYXB0dXJlKCk7XG4gICAgICAgICAgaWYgKGFmdGVyICYmICFuZXh0U2libGluZykge1xuICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZHJhZ0VsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRyYWdFbCwgYWZ0ZXIgPyBuZXh0U2libGluZyA6IHRhcmdldCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gVW5kbyBjaHJvbWUncyBzY3JvbGwgYWRqdXN0bWVudCAoaGFzIG5vIGVmZmVjdCBvbiBvdGhlciBicm93c2VycylcbiAgICAgICAgICBpZiAoc2Nyb2xsZWRQYXN0VG9wKSB7XG4gICAgICAgICAgICBzY3JvbGxCeShzY3JvbGxlZFBhc3RUb3AsIDAsIHNjcm9sbEJlZm9yZSAtIHNjcm9sbGVkUGFzdFRvcC5zY3JvbGxUb3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwYXJlbnRFbCA9IGRyYWdFbC5wYXJlbnROb2RlOyAvLyBhY3R1YWxpemF0aW9uXG5cbiAgICAgICAgICAvLyBtdXN0IGJlIGRvbmUgYmVmb3JlIGFuaW1hdGlvblxuICAgICAgICAgIGlmICh0YXJnZXRCZWZvcmVGaXJzdFN3YXAgIT09IHVuZGVmaW5lZCAmJiAhaXNDaXJjdW1zdGFudGlhbEludmVydCkge1xuICAgICAgICAgICAgdGFyZ2V0TW92ZURpc3RhbmNlID0gTWF0aC5hYnModGFyZ2V0QmVmb3JlRmlyc3RTd2FwIC0gZ2V0UmVjdCh0YXJnZXQpW3NpZGUxXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNoYW5nZWQoKTtcbiAgICAgICAgICByZXR1cm4gY29tcGxldGVkKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZWwuY29udGFpbnMoZHJhZ0VsKSkge1xuICAgICAgICByZXR1cm4gY29tcGxldGVkKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuICBfaWdub3JlV2hpbGVBbmltYXRpbmc6IG51bGwsXG4gIF9vZmZNb3ZlRXZlbnRzOiBmdW5jdGlvbiBfb2ZmTW92ZUV2ZW50cygpIHtcbiAgICBvZmYoZG9jdW1lbnQsICdtb3VzZW1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgb2ZmKGRvY3VtZW50LCAndG91Y2htb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xuICAgIG9mZihkb2N1bWVudCwgJ3BvaW50ZXJtb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xuICAgIG9mZihkb2N1bWVudCwgJ2RyYWdvdmVyJywgbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQpO1xuICAgIG9mZihkb2N1bWVudCwgJ21vdXNlbW92ZScsIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50KTtcbiAgICBvZmYoZG9jdW1lbnQsICd0b3VjaG1vdmUnLCBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudCk7XG4gIH0sXG4gIF9vZmZVcEV2ZW50czogZnVuY3Rpb24gX29mZlVwRXZlbnRzKCkge1xuICAgIHZhciBvd25lckRvY3VtZW50ID0gdGhpcy5lbC5vd25lckRvY3VtZW50O1xuICAgIG9mZihvd25lckRvY3VtZW50LCAnbW91c2V1cCcsIHRoaXMuX29uRHJvcCk7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICd0b3VjaGVuZCcsIHRoaXMuX29uRHJvcCk7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICdwb2ludGVydXAnLCB0aGlzLl9vbkRyb3ApO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAncG9pbnRlcmNhbmNlbCcsIHRoaXMuX29uRHJvcCk7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICd0b3VjaGNhbmNlbCcsIHRoaXMuX29uRHJvcCk7XG4gICAgb2ZmKGRvY3VtZW50LCAnc2VsZWN0c3RhcnQnLCB0aGlzKTtcbiAgfSxcbiAgX29uRHJvcDogZnVuY3Rpb24gX29uRHJvcCggLyoqRXZlbnQqL2V2dCkge1xuICAgIHZhciBlbCA9IHRoaXMuZWwsXG4gICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgLy8gR2V0IHRoZSBpbmRleCBvZiB0aGUgZHJhZ2dlZCBlbGVtZW50IHdpdGhpbiBpdHMgcGFyZW50XG4gICAgbmV3SW5kZXggPSBpbmRleChkcmFnRWwpO1xuICAgIG5ld0RyYWdnYWJsZUluZGV4ID0gaW5kZXgoZHJhZ0VsLCBvcHRpb25zLmRyYWdnYWJsZSk7XG4gICAgcGx1Z2luRXZlbnQoJ2Ryb3AnLCB0aGlzLCB7XG4gICAgICBldnQ6IGV2dFxuICAgIH0pO1xuICAgIHBhcmVudEVsID0gZHJhZ0VsICYmIGRyYWdFbC5wYXJlbnROb2RlO1xuXG4gICAgLy8gR2V0IGFnYWluIGFmdGVyIHBsdWdpbiBldmVudFxuICAgIG5ld0luZGV4ID0gaW5kZXgoZHJhZ0VsKTtcbiAgICBuZXdEcmFnZ2FibGVJbmRleCA9IGluZGV4KGRyYWdFbCwgb3B0aW9ucy5kcmFnZ2FibGUpO1xuICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSB7XG4gICAgICB0aGlzLl9udWxsaW5nKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0aW5nRHJhZ1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICBpc0NpcmN1bXN0YW50aWFsSW52ZXJ0ID0gZmFsc2U7XG4gICAgcGFzdEZpcnN0SW52ZXJ0VGhyZXNoID0gZmFsc2U7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9sb29wSWQpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl9kcmFnU3RhcnRUaW1lcik7XG4gICAgX2NhbmNlbE5leHRUaWNrKHRoaXMuY2xvbmVJZCk7XG4gICAgX2NhbmNlbE5leHRUaWNrKHRoaXMuX2RyYWdTdGFydElkKTtcblxuICAgIC8vIFVuYmluZCBldmVudHNcbiAgICBpZiAodGhpcy5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICAgIG9mZihkb2N1bWVudCwgJ2Ryb3AnLCB0aGlzKTtcbiAgICAgIG9mZihlbCwgJ2RyYWdzdGFydCcsIHRoaXMuX29uRHJhZ1N0YXJ0KTtcbiAgICB9XG4gICAgdGhpcy5fb2ZmTW92ZUV2ZW50cygpO1xuICAgIHRoaXMuX29mZlVwRXZlbnRzKCk7XG4gICAgaWYgKFNhZmFyaSkge1xuICAgICAgY3NzKGRvY3VtZW50LmJvZHksICd1c2VyLXNlbGVjdCcsICcnKTtcbiAgICB9XG4gICAgY3NzKGRyYWdFbCwgJ3RyYW5zZm9ybScsICcnKTtcbiAgICBpZiAoZXZ0KSB7XG4gICAgICBpZiAobW92ZWQpIHtcbiAgICAgICAgZXZ0LmNhbmNlbGFibGUgJiYgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICFvcHRpb25zLmRyb3BCdWJibGUgJiYgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgICAgZ2hvc3RFbCAmJiBnaG9zdEVsLnBhcmVudE5vZGUgJiYgZ2hvc3RFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGdob3N0RWwpO1xuICAgICAgaWYgKHJvb3RFbCA9PT0gcGFyZW50RWwgfHwgcHV0U29ydGFibGUgJiYgcHV0U29ydGFibGUubGFzdFB1dE1vZGUgIT09ICdjbG9uZScpIHtcbiAgICAgICAgLy8gUmVtb3ZlIGNsb25lKHMpXG4gICAgICAgIGNsb25lRWwgJiYgY2xvbmVFbC5wYXJlbnROb2RlICYmIGNsb25lRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjbG9uZUVsKTtcbiAgICAgIH1cbiAgICAgIGlmIChkcmFnRWwpIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgICAgICAgb2ZmKGRyYWdFbCwgJ2RyYWdlbmQnLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBfZGlzYWJsZURyYWdnYWJsZShkcmFnRWwpO1xuICAgICAgICBkcmFnRWwuc3R5bGVbJ3dpbGwtY2hhbmdlJ10gPSAnJztcblxuICAgICAgICAvLyBSZW1vdmUgY2xhc3Nlc1xuICAgICAgICAvLyBnaG9zdENsYXNzIGlzIGFkZGVkIGluIGRyYWdTdGFydGVkXG4gICAgICAgIGlmIChtb3ZlZCAmJiAhYXdhaXRpbmdEcmFnU3RhcnRlZCkge1xuICAgICAgICAgIHRvZ2dsZUNsYXNzKGRyYWdFbCwgcHV0U29ydGFibGUgPyBwdXRTb3J0YWJsZS5vcHRpb25zLmdob3N0Q2xhc3MgOiB0aGlzLm9wdGlvbnMuZ2hvc3RDbGFzcywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHRvZ2dsZUNsYXNzKGRyYWdFbCwgdGhpcy5vcHRpb25zLmNob3NlbkNsYXNzLCBmYWxzZSk7XG5cbiAgICAgICAgLy8gRHJhZyBzdG9wIGV2ZW50XG4gICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICBuYW1lOiAndW5jaG9vc2UnLFxuICAgICAgICAgIHRvRWw6IHBhcmVudEVsLFxuICAgICAgICAgIG5ld0luZGV4OiBudWxsLFxuICAgICAgICAgIG5ld0RyYWdnYWJsZUluZGV4OiBudWxsLFxuICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJvb3RFbCAhPT0gcGFyZW50RWwpIHtcbiAgICAgICAgICBpZiAobmV3SW5kZXggPj0gMCkge1xuICAgICAgICAgICAgLy8gQWRkIGV2ZW50XG4gICAgICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICAgIHJvb3RFbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgIG5hbWU6ICdhZGQnLFxuICAgICAgICAgICAgICB0b0VsOiBwYXJlbnRFbCxcbiAgICAgICAgICAgICAgZnJvbUVsOiByb290RWwsXG4gICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSBldmVudFxuICAgICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICAgICAgbmFtZTogJ3JlbW92ZScsXG4gICAgICAgICAgICAgIHRvRWw6IHBhcmVudEVsLFxuICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBkcmFnIGZyb20gb25lIGxpc3QgYW5kIGRyb3AgaW50byBhbm90aGVyXG4gICAgICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICAgIHJvb3RFbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgIG5hbWU6ICdzb3J0JyxcbiAgICAgICAgICAgICAgdG9FbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgIGZyb21FbDogcm9vdEVsLFxuICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICAgICAgbmFtZTogJ3NvcnQnLFxuICAgICAgICAgICAgICB0b0VsOiBwYXJlbnRFbCxcbiAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHV0U29ydGFibGUgJiYgcHV0U29ydGFibGUuc2F2ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChuZXdJbmRleCAhPT0gb2xkSW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChuZXdJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgIC8vIGRyYWcgJiBkcm9wIHdpdGhpbiB0aGUgc2FtZSBsaXN0XG4gICAgICAgICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICAgICAgICBuYW1lOiAndXBkYXRlJyxcbiAgICAgICAgICAgICAgICB0b0VsOiBwYXJlbnRFbCxcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnc29ydCcsXG4gICAgICAgICAgICAgICAgdG9FbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoU29ydGFibGUuYWN0aXZlKSB7XG4gICAgICAgICAgLyoganNoaW50IGVxbnVsbDp0cnVlICovXG4gICAgICAgICAgaWYgKG5ld0luZGV4ID09IG51bGwgfHwgbmV3SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBuZXdJbmRleCA9IG9sZEluZGV4O1xuICAgICAgICAgICAgbmV3RHJhZ2dhYmxlSW5kZXggPSBvbGREcmFnZ2FibGVJbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgc29ydGFibGU6IHRoaXMsXG4gICAgICAgICAgICBuYW1lOiAnZW5kJyxcbiAgICAgICAgICAgIHRvRWw6IHBhcmVudEVsLFxuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBTYXZlIHNvcnRpbmdcbiAgICAgICAgICB0aGlzLnNhdmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9udWxsaW5nKCk7XG4gIH0sXG4gIF9udWxsaW5nOiBmdW5jdGlvbiBfbnVsbGluZygpIHtcbiAgICBwbHVnaW5FdmVudCgnbnVsbGluZycsIHRoaXMpO1xuICAgIHJvb3RFbCA9IGRyYWdFbCA9IHBhcmVudEVsID0gZ2hvc3RFbCA9IG5leHRFbCA9IGNsb25lRWwgPSBsYXN0RG93bkVsID0gY2xvbmVIaWRkZW4gPSB0YXBFdnQgPSB0b3VjaEV2dCA9IG1vdmVkID0gbmV3SW5kZXggPSBuZXdEcmFnZ2FibGVJbmRleCA9IG9sZEluZGV4ID0gb2xkRHJhZ2dhYmxlSW5kZXggPSBsYXN0VGFyZ2V0ID0gbGFzdERpcmVjdGlvbiA9IHB1dFNvcnRhYmxlID0gYWN0aXZlR3JvdXAgPSBTb3J0YWJsZS5kcmFnZ2VkID0gU29ydGFibGUuZ2hvc3QgPSBTb3J0YWJsZS5jbG9uZSA9IFNvcnRhYmxlLmFjdGl2ZSA9IG51bGw7XG4gICAgdmFyIGVsID0gdGhpcy5lbDtcbiAgICBzYXZlZElucHV0Q2hlY2tlZC5mb3JFYWNoKGZ1bmN0aW9uIChjaGVja0VsKSB7XG4gICAgICBpZiAoZWwuY29udGFpbnMoY2hlY2tFbCkpIHtcbiAgICAgICAgY2hlY2tFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzYXZlZElucHV0Q2hlY2tlZC5sZW5ndGggPSBsYXN0RHggPSBsYXN0RHkgPSAwO1xuICB9LFxuICBoYW5kbGVFdmVudDogZnVuY3Rpb24gaGFuZGxlRXZlbnQoIC8qKkV2ZW50Ki9ldnQpIHtcbiAgICBzd2l0Y2ggKGV2dC50eXBlKSB7XG4gICAgICBjYXNlICdkcm9wJzpcbiAgICAgIGNhc2UgJ2RyYWdlbmQnOlxuICAgICAgICB0aGlzLl9vbkRyb3AoZXZ0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkcmFnZW50ZXInOlxuICAgICAgY2FzZSAnZHJhZ292ZXInOlxuICAgICAgICBpZiAoZHJhZ0VsKSB7XG4gICAgICAgICAgdGhpcy5fb25EcmFnT3ZlcihldnQpO1xuICAgICAgICAgIF9nbG9iYWxEcmFnT3ZlcihldnQpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2VsZWN0c3RhcnQnOlxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9LFxuICAvKipcclxuICAgKiBTZXJpYWxpemVzIHRoZSBpdGVtIGludG8gYW4gYXJyYXkgb2Ygc3RyaW5nLlxyXG4gICAqIEByZXR1cm5zIHtTdHJpbmdbXX1cclxuICAgKi9cbiAgdG9BcnJheTogZnVuY3Rpb24gdG9BcnJheSgpIHtcbiAgICB2YXIgb3JkZXIgPSBbXSxcbiAgICAgIGVsLFxuICAgICAgY2hpbGRyZW4gPSB0aGlzLmVsLmNoaWxkcmVuLFxuICAgICAgaSA9IDAsXG4gICAgICBuID0gY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBmb3IgKDsgaSA8IG47IGkrKykge1xuICAgICAgZWwgPSBjaGlsZHJlbltpXTtcbiAgICAgIGlmIChjbG9zZXN0KGVsLCBvcHRpb25zLmRyYWdnYWJsZSwgdGhpcy5lbCwgZmFsc2UpKSB7XG4gICAgICAgIG9yZGVyLnB1c2goZWwuZ2V0QXR0cmlidXRlKG9wdGlvbnMuZGF0YUlkQXR0cikgfHwgX2dlbmVyYXRlSWQoZWwpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9yZGVyO1xuICB9LFxuICAvKipcclxuICAgKiBTb3J0cyB0aGUgZWxlbWVudHMgYWNjb3JkaW5nIHRvIHRoZSBhcnJheS5cclxuICAgKiBAcGFyYW0gIHtTdHJpbmdbXX0gIG9yZGVyICBvcmRlciBvZiB0aGUgaXRlbXNcclxuICAgKi9cbiAgc29ydDogZnVuY3Rpb24gc29ydChvcmRlciwgdXNlQW5pbWF0aW9uKSB7XG4gICAgdmFyIGl0ZW1zID0ge30sXG4gICAgICByb290RWwgPSB0aGlzLmVsO1xuICAgIHRoaXMudG9BcnJheSgpLmZvckVhY2goZnVuY3Rpb24gKGlkLCBpKSB7XG4gICAgICB2YXIgZWwgPSByb290RWwuY2hpbGRyZW5baV07XG4gICAgICBpZiAoY2xvc2VzdChlbCwgdGhpcy5vcHRpb25zLmRyYWdnYWJsZSwgcm9vdEVsLCBmYWxzZSkpIHtcbiAgICAgICAgaXRlbXNbaWRdID0gZWw7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gICAgdXNlQW5pbWF0aW9uICYmIHRoaXMuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgb3JkZXIuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGlmIChpdGVtc1tpZF0pIHtcbiAgICAgICAgcm9vdEVsLnJlbW92ZUNoaWxkKGl0ZW1zW2lkXSk7XG4gICAgICAgIHJvb3RFbC5hcHBlbmRDaGlsZChpdGVtc1tpZF0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHVzZUFuaW1hdGlvbiAmJiB0aGlzLmFuaW1hdGVBbGwoKTtcbiAgfSxcbiAgLyoqXHJcbiAgICogU2F2ZSB0aGUgY3VycmVudCBzb3J0aW5nXHJcbiAgICovXG4gIHNhdmU6IGZ1bmN0aW9uIHNhdmUoKSB7XG4gICAgdmFyIHN0b3JlID0gdGhpcy5vcHRpb25zLnN0b3JlO1xuICAgIHN0b3JlICYmIHN0b3JlLnNldCAmJiBzdG9yZS5zZXQodGhpcyk7XG4gIH0sXG4gIC8qKlxyXG4gICAqIEZvciBlYWNoIGVsZW1lbnQgaW4gdGhlIHNldCwgZ2V0IHRoZSBmaXJzdCBlbGVtZW50IHRoYXQgbWF0Y2hlcyB0aGUgc2VsZWN0b3IgYnkgdGVzdGluZyB0aGUgZWxlbWVudCBpdHNlbGYgYW5kIHRyYXZlcnNpbmcgdXAgdGhyb3VnaCBpdHMgYW5jZXN0b3JzIGluIHRoZSBET00gdHJlZS5cclxuICAgKiBAcGFyYW0gICB7SFRNTEVsZW1lbnR9ICBlbFxyXG4gICAqIEBwYXJhbSAgIHtTdHJpbmd9ICAgICAgIFtzZWxlY3Rvcl0gIGRlZmF1bHQ6IGBvcHRpb25zLmRyYWdnYWJsZWBcclxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR8bnVsbH1cclxuICAgKi9cbiAgY2xvc2VzdDogZnVuY3Rpb24gY2xvc2VzdCQxKGVsLCBzZWxlY3Rvcikge1xuICAgIHJldHVybiBjbG9zZXN0KGVsLCBzZWxlY3RvciB8fCB0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlLCB0aGlzLmVsLCBmYWxzZSk7XG4gIH0sXG4gIC8qKlxyXG4gICAqIFNldC9nZXQgb3B0aW9uXHJcbiAgICogQHBhcmFtICAge3N0cmluZ30gbmFtZVxyXG4gICAqIEBwYXJhbSAgIHsqfSAgICAgIFt2YWx1ZV1cclxuICAgKiBAcmV0dXJucyB7Kn1cclxuICAgKi9cbiAgb3B0aW9uOiBmdW5jdGlvbiBvcHRpb24obmFtZSwgdmFsdWUpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIG9wdGlvbnNbbmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBtb2RpZmllZFZhbHVlID0gUGx1Z2luTWFuYWdlci5tb2RpZnlPcHRpb24odGhpcywgbmFtZSwgdmFsdWUpO1xuICAgICAgaWYgKHR5cGVvZiBtb2RpZmllZFZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zW25hbWVdID0gbW9kaWZpZWRWYWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbnNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChuYW1lID09PSAnZ3JvdXAnKSB7XG4gICAgICAgIF9wcmVwYXJlR3JvdXAob3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICAvKipcclxuICAgKiBEZXN0cm95XHJcbiAgICovXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgcGx1Z2luRXZlbnQoJ2Rlc3Ryb3knLCB0aGlzKTtcbiAgICB2YXIgZWwgPSB0aGlzLmVsO1xuICAgIGVsW2V4cGFuZG9dID0gbnVsbDtcbiAgICBvZmYoZWwsICdtb3VzZWRvd24nLCB0aGlzLl9vblRhcFN0YXJ0KTtcbiAgICBvZmYoZWwsICd0b3VjaHN0YXJ0JywgdGhpcy5fb25UYXBTdGFydCk7XG4gICAgb2ZmKGVsLCAncG9pbnRlcmRvd24nLCB0aGlzLl9vblRhcFN0YXJ0KTtcbiAgICBpZiAodGhpcy5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICAgIG9mZihlbCwgJ2RyYWdvdmVyJywgdGhpcyk7XG4gICAgICBvZmYoZWwsICdkcmFnZW50ZXInLCB0aGlzKTtcbiAgICB9XG4gICAgLy8gUmVtb3ZlIGRyYWdnYWJsZSBhdHRyaWJ1dGVzXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlbC5xdWVyeVNlbGVjdG9yQWxsKCdbZHJhZ2dhYmxlXScpLCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZHJhZ2dhYmxlJyk7XG4gICAgfSk7XG4gICAgdGhpcy5fb25Ecm9wKCk7XG4gICAgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnRXZlbnRzKCk7XG4gICAgc29ydGFibGVzLnNwbGljZShzb3J0YWJsZXMuaW5kZXhPZih0aGlzLmVsKSwgMSk7XG4gICAgdGhpcy5lbCA9IGVsID0gbnVsbDtcbiAgfSxcbiAgX2hpZGVDbG9uZTogZnVuY3Rpb24gX2hpZGVDbG9uZSgpIHtcbiAgICBpZiAoIWNsb25lSGlkZGVuKSB7XG4gICAgICBwbHVnaW5FdmVudCgnaGlkZUNsb25lJywgdGhpcyk7XG4gICAgICBpZiAoU29ydGFibGUuZXZlbnRDYW5jZWxlZCkgcmV0dXJuO1xuICAgICAgY3NzKGNsb25lRWwsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZlQ2xvbmVPbkhpZGUgJiYgY2xvbmVFbC5wYXJlbnROb2RlKSB7XG4gICAgICAgIGNsb25lRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjbG9uZUVsKTtcbiAgICAgIH1cbiAgICAgIGNsb25lSGlkZGVuID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG4gIF9zaG93Q2xvbmU6IGZ1bmN0aW9uIF9zaG93Q2xvbmUocHV0U29ydGFibGUpIHtcbiAgICBpZiAocHV0U29ydGFibGUubGFzdFB1dE1vZGUgIT09ICdjbG9uZScpIHtcbiAgICAgIHRoaXMuX2hpZGVDbG9uZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2xvbmVIaWRkZW4pIHtcbiAgICAgIHBsdWdpbkV2ZW50KCdzaG93Q2xvbmUnLCB0aGlzKTtcbiAgICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSByZXR1cm47XG5cbiAgICAgIC8vIHNob3cgY2xvbmUgYXQgZHJhZ0VsIG9yIG9yaWdpbmFsIHBvc2l0aW9uXG4gICAgICBpZiAoZHJhZ0VsLnBhcmVudE5vZGUgPT0gcm9vdEVsICYmICF0aGlzLm9wdGlvbnMuZ3JvdXAucmV2ZXJ0Q2xvbmUpIHtcbiAgICAgICAgcm9vdEVsLmluc2VydEJlZm9yZShjbG9uZUVsLCBkcmFnRWwpO1xuICAgICAgfSBlbHNlIGlmIChuZXh0RWwpIHtcbiAgICAgICAgcm9vdEVsLmluc2VydEJlZm9yZShjbG9uZUVsLCBuZXh0RWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdEVsLmFwcGVuZENoaWxkKGNsb25lRWwpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5ncm91cC5yZXZlcnRDbG9uZSkge1xuICAgICAgICB0aGlzLmFuaW1hdGUoZHJhZ0VsLCBjbG9uZUVsKTtcbiAgICAgIH1cbiAgICAgIGNzcyhjbG9uZUVsLCAnZGlzcGxheScsICcnKTtcbiAgICAgIGNsb25lSGlkZGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG59O1xuZnVuY3Rpb24gX2dsb2JhbERyYWdPdmVyKCAvKipFdmVudCovZXZ0KSB7XG4gIGlmIChldnQuZGF0YVRyYW5zZmVyKSB7XG4gICAgZXZ0LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnO1xuICB9XG4gIGV2dC5jYW5jZWxhYmxlICYmIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuZnVuY3Rpb24gX29uTW92ZShmcm9tRWwsIHRvRWwsIGRyYWdFbCwgZHJhZ1JlY3QsIHRhcmdldEVsLCB0YXJnZXRSZWN0LCBvcmlnaW5hbEV2ZW50LCB3aWxsSW5zZXJ0QWZ0ZXIpIHtcbiAgdmFyIGV2dCxcbiAgICBzb3J0YWJsZSA9IGZyb21FbFtleHBhbmRvXSxcbiAgICBvbk1vdmVGbiA9IHNvcnRhYmxlLm9wdGlvbnMub25Nb3ZlLFxuICAgIHJldFZhbDtcbiAgLy8gU3VwcG9ydCBmb3IgbmV3IEN1c3RvbUV2ZW50IGZlYXR1cmVcbiAgaWYgKHdpbmRvdy5DdXN0b21FdmVudCAmJiAhSUUxMU9yTGVzcyAmJiAhRWRnZSkge1xuICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudCgnbW92ZScsIHtcbiAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgZXZ0LmluaXRFdmVudCgnbW92ZScsIHRydWUsIHRydWUpO1xuICB9XG4gIGV2dC50byA9IHRvRWw7XG4gIGV2dC5mcm9tID0gZnJvbUVsO1xuICBldnQuZHJhZ2dlZCA9IGRyYWdFbDtcbiAgZXZ0LmRyYWdnZWRSZWN0ID0gZHJhZ1JlY3Q7XG4gIGV2dC5yZWxhdGVkID0gdGFyZ2V0RWwgfHwgdG9FbDtcbiAgZXZ0LnJlbGF0ZWRSZWN0ID0gdGFyZ2V0UmVjdCB8fCBnZXRSZWN0KHRvRWwpO1xuICBldnQud2lsbEluc2VydEFmdGVyID0gd2lsbEluc2VydEFmdGVyO1xuICBldnQub3JpZ2luYWxFdmVudCA9IG9yaWdpbmFsRXZlbnQ7XG4gIGZyb21FbC5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gIGlmIChvbk1vdmVGbikge1xuICAgIHJldFZhbCA9IG9uTW92ZUZuLmNhbGwoc29ydGFibGUsIGV2dCwgb3JpZ2luYWxFdmVudCk7XG4gIH1cbiAgcmV0dXJuIHJldFZhbDtcbn1cbmZ1bmN0aW9uIF9kaXNhYmxlRHJhZ2dhYmxlKGVsKSB7XG4gIGVsLmRyYWdnYWJsZSA9IGZhbHNlO1xufVxuZnVuY3Rpb24gX3Vuc2lsZW50KCkge1xuICBfc2lsZW50ID0gZmFsc2U7XG59XG5mdW5jdGlvbiBfZ2hvc3RJc0ZpcnN0KGV2dCwgdmVydGljYWwsIHNvcnRhYmxlKSB7XG4gIHZhciBmaXJzdEVsUmVjdCA9IGdldFJlY3QoZ2V0Q2hpbGQoc29ydGFibGUuZWwsIDAsIHNvcnRhYmxlLm9wdGlvbnMsIHRydWUpKTtcbiAgdmFyIGNoaWxkQ29udGFpbmluZ1JlY3QgPSBnZXRDaGlsZENvbnRhaW5pbmdSZWN0RnJvbUVsZW1lbnQoc29ydGFibGUuZWwsIHNvcnRhYmxlLm9wdGlvbnMsIGdob3N0RWwpO1xuICB2YXIgc3BhY2VyID0gMTA7XG4gIHJldHVybiB2ZXJ0aWNhbCA/IGV2dC5jbGllbnRYIDwgY2hpbGRDb250YWluaW5nUmVjdC5sZWZ0IC0gc3BhY2VyIHx8IGV2dC5jbGllbnRZIDwgZmlyc3RFbFJlY3QudG9wICYmIGV2dC5jbGllbnRYIDwgZmlyc3RFbFJlY3QucmlnaHQgOiBldnQuY2xpZW50WSA8IGNoaWxkQ29udGFpbmluZ1JlY3QudG9wIC0gc3BhY2VyIHx8IGV2dC5jbGllbnRZIDwgZmlyc3RFbFJlY3QuYm90dG9tICYmIGV2dC5jbGllbnRYIDwgZmlyc3RFbFJlY3QubGVmdDtcbn1cbmZ1bmN0aW9uIF9naG9zdElzTGFzdChldnQsIHZlcnRpY2FsLCBzb3J0YWJsZSkge1xuICB2YXIgbGFzdEVsUmVjdCA9IGdldFJlY3QobGFzdENoaWxkKHNvcnRhYmxlLmVsLCBzb3J0YWJsZS5vcHRpb25zLmRyYWdnYWJsZSkpO1xuICB2YXIgY2hpbGRDb250YWluaW5nUmVjdCA9IGdldENoaWxkQ29udGFpbmluZ1JlY3RGcm9tRWxlbWVudChzb3J0YWJsZS5lbCwgc29ydGFibGUub3B0aW9ucywgZ2hvc3RFbCk7XG4gIHZhciBzcGFjZXIgPSAxMDtcbiAgcmV0dXJuIHZlcnRpY2FsID8gZXZ0LmNsaWVudFggPiBjaGlsZENvbnRhaW5pbmdSZWN0LnJpZ2h0ICsgc3BhY2VyIHx8IGV2dC5jbGllbnRZID4gbGFzdEVsUmVjdC5ib3R0b20gJiYgZXZ0LmNsaWVudFggPiBsYXN0RWxSZWN0LmxlZnQgOiBldnQuY2xpZW50WSA+IGNoaWxkQ29udGFpbmluZ1JlY3QuYm90dG9tICsgc3BhY2VyIHx8IGV2dC5jbGllbnRYID4gbGFzdEVsUmVjdC5yaWdodCAmJiBldnQuY2xpZW50WSA+IGxhc3RFbFJlY3QudG9wO1xufVxuZnVuY3Rpb24gX2dldFN3YXBEaXJlY3Rpb24oZXZ0LCB0YXJnZXQsIHRhcmdldFJlY3QsIHZlcnRpY2FsLCBzd2FwVGhyZXNob2xkLCBpbnZlcnRlZFN3YXBUaHJlc2hvbGQsIGludmVydFN3YXAsIGlzTGFzdFRhcmdldCkge1xuICB2YXIgbW91c2VPbkF4aXMgPSB2ZXJ0aWNhbCA/IGV2dC5jbGllbnRZIDogZXZ0LmNsaWVudFgsXG4gICAgdGFyZ2V0TGVuZ3RoID0gdmVydGljYWwgPyB0YXJnZXRSZWN0LmhlaWdodCA6IHRhcmdldFJlY3Qud2lkdGgsXG4gICAgdGFyZ2V0UzEgPSB2ZXJ0aWNhbCA/IHRhcmdldFJlY3QudG9wIDogdGFyZ2V0UmVjdC5sZWZ0LFxuICAgIHRhcmdldFMyID0gdmVydGljYWwgPyB0YXJnZXRSZWN0LmJvdHRvbSA6IHRhcmdldFJlY3QucmlnaHQsXG4gICAgaW52ZXJ0ID0gZmFsc2U7XG4gIGlmICghaW52ZXJ0U3dhcCkge1xuICAgIC8vIE5ldmVyIGludmVydCBvciBjcmVhdGUgZHJhZ0VsIHNoYWRvdyB3aGVuIHRhcmdldCBtb3ZlbWVuZXQgY2F1c2VzIG1vdXNlIHRvIG1vdmUgcGFzdCB0aGUgZW5kIG9mIHJlZ3VsYXIgc3dhcFRocmVzaG9sZFxuICAgIGlmIChpc0xhc3RUYXJnZXQgJiYgdGFyZ2V0TW92ZURpc3RhbmNlIDwgdGFyZ2V0TGVuZ3RoICogc3dhcFRocmVzaG9sZCkge1xuICAgICAgLy8gbXVsdGlwbGllZCBvbmx5IGJ5IHN3YXBUaHJlc2hvbGQgYmVjYXVzZSBtb3VzZSB3aWxsIGFscmVhZHkgYmUgaW5zaWRlIHRhcmdldCBieSAoMSAtIHRocmVzaG9sZCkgKiB0YXJnZXRMZW5ndGggLyAyXG4gICAgICAvLyBjaGVjayBpZiBwYXN0IGZpcnN0IGludmVydCB0aHJlc2hvbGQgb24gc2lkZSBvcHBvc2l0ZSBvZiBsYXN0RGlyZWN0aW9uXG4gICAgICBpZiAoIXBhc3RGaXJzdEludmVydFRocmVzaCAmJiAobGFzdERpcmVjdGlvbiA9PT0gMSA/IG1vdXNlT25BeGlzID4gdGFyZ2V0UzEgKyB0YXJnZXRMZW5ndGggKiBpbnZlcnRlZFN3YXBUaHJlc2hvbGQgLyAyIDogbW91c2VPbkF4aXMgPCB0YXJnZXRTMiAtIHRhcmdldExlbmd0aCAqIGludmVydGVkU3dhcFRocmVzaG9sZCAvIDIpKSB7XG4gICAgICAgIC8vIHBhc3QgZmlyc3QgaW52ZXJ0IHRocmVzaG9sZCwgZG8gbm90IHJlc3RyaWN0IGludmVydGVkIHRocmVzaG9sZCB0byBkcmFnRWwgc2hhZG93XG4gICAgICAgIHBhc3RGaXJzdEludmVydFRocmVzaCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoIXBhc3RGaXJzdEludmVydFRocmVzaCkge1xuICAgICAgICAvLyBkcmFnRWwgc2hhZG93ICh0YXJnZXQgbW92ZSBkaXN0YW5jZSBzaGFkb3cpXG4gICAgICAgIGlmIChsYXN0RGlyZWN0aW9uID09PSAxID8gbW91c2VPbkF4aXMgPCB0YXJnZXRTMSArIHRhcmdldE1vdmVEaXN0YW5jZSAvLyBvdmVyIGRyYWdFbCBzaGFkb3dcbiAgICAgICAgOiBtb3VzZU9uQXhpcyA+IHRhcmdldFMyIC0gdGFyZ2V0TW92ZURpc3RhbmNlKSB7XG4gICAgICAgICAgcmV0dXJuIC1sYXN0RGlyZWN0aW9uO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnZlcnQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZWd1bGFyXG4gICAgICBpZiAobW91c2VPbkF4aXMgPiB0YXJnZXRTMSArIHRhcmdldExlbmd0aCAqICgxIC0gc3dhcFRocmVzaG9sZCkgLyAyICYmIG1vdXNlT25BeGlzIDwgdGFyZ2V0UzIgLSB0YXJnZXRMZW5ndGggKiAoMSAtIHN3YXBUaHJlc2hvbGQpIC8gMikge1xuICAgICAgICByZXR1cm4gX2dldEluc2VydERpcmVjdGlvbih0YXJnZXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpbnZlcnQgPSBpbnZlcnQgfHwgaW52ZXJ0U3dhcDtcbiAgaWYgKGludmVydCkge1xuICAgIC8vIEludmVydCBvZiByZWd1bGFyXG4gICAgaWYgKG1vdXNlT25BeGlzIDwgdGFyZ2V0UzEgKyB0YXJnZXRMZW5ndGggKiBpbnZlcnRlZFN3YXBUaHJlc2hvbGQgLyAyIHx8IG1vdXNlT25BeGlzID4gdGFyZ2V0UzIgLSB0YXJnZXRMZW5ndGggKiBpbnZlcnRlZFN3YXBUaHJlc2hvbGQgLyAyKSB7XG4gICAgICByZXR1cm4gbW91c2VPbkF4aXMgPiB0YXJnZXRTMSArIHRhcmdldExlbmd0aCAvIDIgPyAxIDogLTE7XG4gICAgfVxuICB9XG4gIHJldHVybiAwO1xufVxuXG4vKipcclxuICogR2V0cyB0aGUgZGlyZWN0aW9uIGRyYWdFbCBtdXN0IGJlIHN3YXBwZWQgcmVsYXRpdmUgdG8gdGFyZ2V0IGluIG9yZGVyIHRvIG1ha2UgaXRcclxuICogc2VlbSB0aGF0IGRyYWdFbCBoYXMgYmVlbiBcImluc2VydGVkXCIgaW50byB0aGF0IGVsZW1lbnQncyBwb3NpdGlvblxyXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gdGFyZ2V0ICAgICAgIFRoZSB0YXJnZXQgd2hvc2UgcG9zaXRpb24gZHJhZ0VsIGlzIGJlaW5nIGluc2VydGVkIGF0XHJcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgRGlyZWN0aW9uIGRyYWdFbCBtdXN0IGJlIHN3YXBwZWRcclxuICovXG5mdW5jdGlvbiBfZ2V0SW5zZXJ0RGlyZWN0aW9uKHRhcmdldCkge1xuICBpZiAoaW5kZXgoZHJhZ0VsKSA8IGluZGV4KHRhcmdldCkpIHtcbiAgICByZXR1cm4gMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbn1cblxuLyoqXHJcbiAqIEdlbmVyYXRlIGlkXHJcbiAqIEBwYXJhbSAgIHtIVE1MRWxlbWVudH0gZWxcclxuICogQHJldHVybnMge1N0cmluZ31cclxuICogQHByaXZhdGVcclxuICovXG5mdW5jdGlvbiBfZ2VuZXJhdGVJZChlbCkge1xuICB2YXIgc3RyID0gZWwudGFnTmFtZSArIGVsLmNsYXNzTmFtZSArIGVsLnNyYyArIGVsLmhyZWYgKyBlbC50ZXh0Q29udGVudCxcbiAgICBpID0gc3RyLmxlbmd0aCxcbiAgICBzdW0gPSAwO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgc3VtICs9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICB9XG4gIHJldHVybiBzdW0udG9TdHJpbmcoMzYpO1xufVxuZnVuY3Rpb24gX3NhdmVJbnB1dENoZWNrZWRTdGF0ZShyb290KSB7XG4gIHNhdmVkSW5wdXRDaGVja2VkLmxlbmd0aCA9IDA7XG4gIHZhciBpbnB1dHMgPSByb290LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpO1xuICB2YXIgaWR4ID0gaW5wdXRzLmxlbmd0aDtcbiAgd2hpbGUgKGlkeC0tKSB7XG4gICAgdmFyIGVsID0gaW5wdXRzW2lkeF07XG4gICAgZWwuY2hlY2tlZCAmJiBzYXZlZElucHV0Q2hlY2tlZC5wdXNoKGVsKTtcbiAgfVxufVxuZnVuY3Rpb24gX25leHRUaWNrKGZuKSB7XG4gIHJldHVybiBzZXRUaW1lb3V0KGZuLCAwKTtcbn1cbmZ1bmN0aW9uIF9jYW5jZWxOZXh0VGljayhpZCkge1xuICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn1cblxuLy8gRml4ZWQgIzk3MzpcbmlmIChkb2N1bWVudEV4aXN0cykge1xuICBvbihkb2N1bWVudCwgJ3RvdWNobW92ZScsIGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAoKFNvcnRhYmxlLmFjdGl2ZSB8fCBhd2FpdGluZ0RyYWdTdGFydGVkKSAmJiBldnQuY2FuY2VsYWJsZSkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gRXhwb3J0IHV0aWxzXG5Tb3J0YWJsZS51dGlscyA9IHtcbiAgb246IG9uLFxuICBvZmY6IG9mZixcbiAgY3NzOiBjc3MsXG4gIGZpbmQ6IGZpbmQsXG4gIGlzOiBmdW5jdGlvbiBpcyhlbCwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gISFjbG9zZXN0KGVsLCBzZWxlY3RvciwgZWwsIGZhbHNlKTtcbiAgfSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRocm90dGxlOiB0aHJvdHRsZSxcbiAgY2xvc2VzdDogY2xvc2VzdCxcbiAgdG9nZ2xlQ2xhc3M6IHRvZ2dsZUNsYXNzLFxuICBjbG9uZTogY2xvbmUsXG4gIGluZGV4OiBpbmRleCxcbiAgbmV4dFRpY2s6IF9uZXh0VGljayxcbiAgY2FuY2VsTmV4dFRpY2s6IF9jYW5jZWxOZXh0VGljayxcbiAgZGV0ZWN0RGlyZWN0aW9uOiBfZGV0ZWN0RGlyZWN0aW9uLFxuICBnZXRDaGlsZDogZ2V0Q2hpbGQsXG4gIGV4cGFuZG86IGV4cGFuZG9cbn07XG5cbi8qKlxyXG4gKiBHZXQgdGhlIFNvcnRhYmxlIGluc3RhbmNlIG9mIGFuIGVsZW1lbnRcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnRcclxuICogQHJldHVybiB7U29ydGFibGV8dW5kZWZpbmVkfSAgICAgICAgIFRoZSBpbnN0YW5jZSBvZiBTb3J0YWJsZVxyXG4gKi9cblNvcnRhYmxlLmdldCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50W2V4cGFuZG9dO1xufTtcblxuLyoqXHJcbiAqIE1vdW50IGEgcGx1Z2luIHRvIFNvcnRhYmxlXHJcbiAqIEBwYXJhbSAgey4uLlNvcnRhYmxlUGx1Z2lufFNvcnRhYmxlUGx1Z2luW119IHBsdWdpbnMgICAgICAgUGx1Z2lucyBiZWluZyBtb3VudGVkXHJcbiAqL1xuU29ydGFibGUubW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwbHVnaW5zID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHBsdWdpbnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cbiAgaWYgKHBsdWdpbnNbMF0uY29uc3RydWN0b3IgPT09IEFycmF5KSBwbHVnaW5zID0gcGx1Z2luc1swXTtcbiAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICBpZiAoIXBsdWdpbi5wcm90b3R5cGUgfHwgIXBsdWdpbi5wcm90b3R5cGUuY29uc3RydWN0b3IpIHtcbiAgICAgIHRocm93IFwiU29ydGFibGU6IE1vdW50ZWQgcGx1Z2luIG11c3QgYmUgYSBjb25zdHJ1Y3RvciBmdW5jdGlvbiwgbm90IFwiLmNvbmNhdCh7fS50b1N0cmluZy5jYWxsKHBsdWdpbikpO1xuICAgIH1cbiAgICBpZiAocGx1Z2luLnV0aWxzKSBTb3J0YWJsZS51dGlscyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBTb3J0YWJsZS51dGlscyksIHBsdWdpbi51dGlscyk7XG4gICAgUGx1Z2luTWFuYWdlci5tb3VudChwbHVnaW4pO1xuICB9KTtcbn07XG5cbi8qKlxyXG4gKiBDcmVhdGUgc29ydGFibGUgaW5zdGFuY2VcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gIGVsXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSAgICAgIFtvcHRpb25zXVxyXG4gKi9cblNvcnRhYmxlLmNyZWF0ZSA9IGZ1bmN0aW9uIChlbCwgb3B0aW9ucykge1xuICByZXR1cm4gbmV3IFNvcnRhYmxlKGVsLCBvcHRpb25zKTtcbn07XG5cbi8vIEV4cG9ydFxuU29ydGFibGUudmVyc2lvbiA9IHZlcnNpb247XG5cbnZhciBhdXRvU2Nyb2xscyA9IFtdLFxuICBzY3JvbGxFbCxcbiAgc2Nyb2xsUm9vdEVsLFxuICBzY3JvbGxpbmcgPSBmYWxzZSxcbiAgbGFzdEF1dG9TY3JvbGxYLFxuICBsYXN0QXV0b1Njcm9sbFksXG4gIHRvdWNoRXZ0JDEsXG4gIHBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsO1xuZnVuY3Rpb24gQXV0b1Njcm9sbFBsdWdpbigpIHtcbiAgZnVuY3Rpb24gQXV0b1Njcm9sbCgpIHtcbiAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgZm9yY2VBdXRvU2Nyb2xsRmFsbGJhY2s6IGZhbHNlLFxuICAgICAgc2Nyb2xsU2Vuc2l0aXZpdHk6IDMwLFxuICAgICAgc2Nyb2xsU3BlZWQ6IDEwLFxuICAgICAgYnViYmxlU2Nyb2xsOiB0cnVlXG4gICAgfTtcblxuICAgIC8vIEJpbmQgYWxsIHByaXZhdGUgbWV0aG9kc1xuICAgIGZvciAodmFyIGZuIGluIHRoaXMpIHtcbiAgICAgIGlmIChmbi5jaGFyQXQoMCkgPT09ICdfJyAmJiB0eXBlb2YgdGhpc1tmbl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpc1tmbl0gPSB0aGlzW2ZuXS5iaW5kKHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBBdXRvU2Nyb2xsLnByb3RvdHlwZSA9IHtcbiAgICBkcmFnU3RhcnRlZDogZnVuY3Rpb24gZHJhZ1N0YXJ0ZWQoX3JlZikge1xuICAgICAgdmFyIG9yaWdpbmFsRXZlbnQgPSBfcmVmLm9yaWdpbmFsRXZlbnQ7XG4gICAgICBpZiAodGhpcy5zb3J0YWJsZS5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICAgICAgb24oZG9jdW1lbnQsICdkcmFnb3ZlcicsIHRoaXMuX2hhbmRsZUF1dG9TY3JvbGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdXBwb3J0UG9pbnRlcikge1xuICAgICAgICAgIG9uKGRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCB0aGlzLl9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGwpO1xuICAgICAgICB9IGVsc2UgaWYgKG9yaWdpbmFsRXZlbnQudG91Y2hlcykge1xuICAgICAgICAgIG9uKGRvY3VtZW50LCAndG91Y2htb3ZlJywgdGhpcy5faGFuZGxlRmFsbGJhY2tBdXRvU2Nyb2xsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvbihkb2N1bWVudCwgJ21vdXNlbW92ZScsIHRoaXMuX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGRyYWdPdmVyQ29tcGxldGVkOiBmdW5jdGlvbiBkcmFnT3ZlckNvbXBsZXRlZChfcmVmMikge1xuICAgICAgdmFyIG9yaWdpbmFsRXZlbnQgPSBfcmVmMi5vcmlnaW5hbEV2ZW50O1xuICAgICAgLy8gRm9yIHdoZW4gYnViYmxpbmcgaXMgY2FuY2VsZWQgYW5kIHVzaW5nIGZhbGxiYWNrIChmYWxsYmFjayAndG91Y2htb3ZlJyBhbHdheXMgcmVhY2hlZClcbiAgICAgIGlmICghdGhpcy5vcHRpb25zLmRyYWdPdmVyQnViYmxlICYmICFvcmlnaW5hbEV2ZW50LnJvb3RFbCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVBdXRvU2Nyb2xsKG9yaWdpbmFsRXZlbnQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZHJvcDogZnVuY3Rpb24gZHJvcCgpIHtcbiAgICAgIGlmICh0aGlzLnNvcnRhYmxlLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgICAgICBvZmYoZG9jdW1lbnQsICdkcmFnb3ZlcicsIHRoaXMuX2hhbmRsZUF1dG9TY3JvbGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2ZmKGRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCB0aGlzLl9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGwpO1xuICAgICAgICBvZmYoZG9jdW1lbnQsICd0b3VjaG1vdmUnLCB0aGlzLl9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGwpO1xuICAgICAgICBvZmYoZG9jdW1lbnQsICdtb3VzZW1vdmUnLCB0aGlzLl9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGwpO1xuICAgICAgfVxuICAgICAgY2xlYXJQb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCgpO1xuICAgICAgY2xlYXJBdXRvU2Nyb2xscygpO1xuICAgICAgY2FuY2VsVGhyb3R0bGUoKTtcbiAgICB9LFxuICAgIG51bGxpbmc6IGZ1bmN0aW9uIG51bGxpbmcoKSB7XG4gICAgICB0b3VjaEV2dCQxID0gc2Nyb2xsUm9vdEVsID0gc2Nyb2xsRWwgPSBzY3JvbGxpbmcgPSBwb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCA9IGxhc3RBdXRvU2Nyb2xsWCA9IGxhc3RBdXRvU2Nyb2xsWSA9IG51bGw7XG4gICAgICBhdXRvU2Nyb2xscy5sZW5ndGggPSAwO1xuICAgIH0sXG4gICAgX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbDogZnVuY3Rpb24gX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbChldnQpIHtcbiAgICAgIHRoaXMuX2hhbmRsZUF1dG9TY3JvbGwoZXZ0LCB0cnVlKTtcbiAgICB9LFxuICAgIF9oYW5kbGVBdXRvU2Nyb2xsOiBmdW5jdGlvbiBfaGFuZGxlQXV0b1Njcm9sbChldnQsIGZhbGxiYWNrKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgdmFyIHggPSAoZXZ0LnRvdWNoZXMgPyBldnQudG91Y2hlc1swXSA6IGV2dCkuY2xpZW50WCxcbiAgICAgICAgeSA9IChldnQudG91Y2hlcyA/IGV2dC50b3VjaGVzWzBdIDogZXZ0KS5jbGllbnRZLFxuICAgICAgICBlbGVtID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KTtcbiAgICAgIHRvdWNoRXZ0JDEgPSBldnQ7XG5cbiAgICAgIC8vIElFIGRvZXMgbm90IHNlZW0gdG8gaGF2ZSBuYXRpdmUgYXV0b3Njcm9sbCxcbiAgICAgIC8vIEVkZ2UncyBhdXRvc2Nyb2xsIHNlZW1zIHRvbyBjb25kaXRpb25hbCxcbiAgICAgIC8vIE1BQ09TIFNhZmFyaSBkb2VzIG5vdCBoYXZlIGF1dG9zY3JvbGwsXG4gICAgICAvLyBGaXJlZm94IGFuZCBDaHJvbWUgYXJlIGdvb2RcbiAgICAgIGlmIChmYWxsYmFjayB8fCB0aGlzLm9wdGlvbnMuZm9yY2VBdXRvU2Nyb2xsRmFsbGJhY2sgfHwgRWRnZSB8fCBJRTExT3JMZXNzIHx8IFNhZmFyaSkge1xuICAgICAgICBhdXRvU2Nyb2xsKGV2dCwgdGhpcy5vcHRpb25zLCBlbGVtLCBmYWxsYmFjayk7XG5cbiAgICAgICAgLy8gTGlzdGVuZXIgZm9yIHBvaW50ZXIgZWxlbWVudCBjaGFuZ2VcbiAgICAgICAgdmFyIG9nRWxlbVNjcm9sbGVyID0gZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQoZWxlbSwgdHJ1ZSk7XG4gICAgICAgIGlmIChzY3JvbGxpbmcgJiYgKCFwb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCB8fCB4ICE9PSBsYXN0QXV0b1Njcm9sbFggfHwgeSAhPT0gbGFzdEF1dG9TY3JvbGxZKSkge1xuICAgICAgICAgIHBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsICYmIGNsZWFyUG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwoKTtcbiAgICAgICAgICAvLyBEZXRlY3QgZm9yIHBvaW50ZXIgZWxlbSBjaGFuZ2UsIGVtdWxhdGluZyBuYXRpdmUgRG5EIGJlaGF2aW91clxuICAgICAgICAgIHBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG5ld0VsZW0gPSBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHgsIHkpLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChuZXdFbGVtICE9PSBvZ0VsZW1TY3JvbGxlcikge1xuICAgICAgICAgICAgICBvZ0VsZW1TY3JvbGxlciA9IG5ld0VsZW07XG4gICAgICAgICAgICAgIGNsZWFyQXV0b1Njcm9sbHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF1dG9TY3JvbGwoZXZ0LCBfdGhpcy5vcHRpb25zLCBuZXdFbGVtLCBmYWxsYmFjayk7XG4gICAgICAgICAgfSwgMTApO1xuICAgICAgICAgIGxhc3RBdXRvU2Nyb2xsWCA9IHg7XG4gICAgICAgICAgbGFzdEF1dG9TY3JvbGxZID0geTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgRG5EIGlzIGVuYWJsZWQgKGFuZCBicm93c2VyIGhhcyBnb29kIGF1dG9zY3JvbGxpbmcpLCBmaXJzdCBhdXRvc2Nyb2xsIHdpbGwgYWxyZWFkeSBzY3JvbGwsIHNvIGdldCBwYXJlbnQgYXV0b3Njcm9sbCBvZiBmaXJzdCBhdXRvc2Nyb2xsXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmJ1YmJsZVNjcm9sbCB8fCBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChlbGVtLCB0cnVlKSA9PT0gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpKSB7XG4gICAgICAgICAgY2xlYXJBdXRvU2Nyb2xscygpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhdXRvU2Nyb2xsKGV2dCwgdGhpcy5vcHRpb25zLCBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChlbGVtLCBmYWxzZSksIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcyhBdXRvU2Nyb2xsLCB7XG4gICAgcGx1Z2luTmFtZTogJ3Njcm9sbCcsXG4gICAgaW5pdGlhbGl6ZUJ5RGVmYXVsdDogdHJ1ZVxuICB9KTtcbn1cbmZ1bmN0aW9uIGNsZWFyQXV0b1Njcm9sbHMoKSB7XG4gIGF1dG9TY3JvbGxzLmZvckVhY2goZnVuY3Rpb24gKGF1dG9TY3JvbGwpIHtcbiAgICBjbGVhckludGVydmFsKGF1dG9TY3JvbGwucGlkKTtcbiAgfSk7XG4gIGF1dG9TY3JvbGxzID0gW107XG59XG5mdW5jdGlvbiBjbGVhclBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsKCkge1xuICBjbGVhckludGVydmFsKHBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsKTtcbn1cbnZhciBhdXRvU2Nyb2xsID0gdGhyb3R0bGUoZnVuY3Rpb24gKGV2dCwgb3B0aW9ucywgcm9vdEVsLCBpc0ZhbGxiYWNrKSB7XG4gIC8vIEJ1ZzogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTA1NTIxXG4gIGlmICghb3B0aW9ucy5zY3JvbGwpIHJldHVybjtcbiAgdmFyIHggPSAoZXZ0LnRvdWNoZXMgPyBldnQudG91Y2hlc1swXSA6IGV2dCkuY2xpZW50WCxcbiAgICB5ID0gKGV2dC50b3VjaGVzID8gZXZ0LnRvdWNoZXNbMF0gOiBldnQpLmNsaWVudFksXG4gICAgc2VucyA9IG9wdGlvbnMuc2Nyb2xsU2Vuc2l0aXZpdHksXG4gICAgc3BlZWQgPSBvcHRpb25zLnNjcm9sbFNwZWVkLFxuICAgIHdpblNjcm9sbGVyID0gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpO1xuICB2YXIgc2Nyb2xsVGhpc0luc3RhbmNlID0gZmFsc2UsXG4gICAgc2Nyb2xsQ3VzdG9tRm47XG5cbiAgLy8gTmV3IHNjcm9sbCByb290LCBzZXQgc2Nyb2xsRWxcbiAgaWYgKHNjcm9sbFJvb3RFbCAhPT0gcm9vdEVsKSB7XG4gICAgc2Nyb2xsUm9vdEVsID0gcm9vdEVsO1xuICAgIGNsZWFyQXV0b1Njcm9sbHMoKTtcbiAgICBzY3JvbGxFbCA9IG9wdGlvbnMuc2Nyb2xsO1xuICAgIHNjcm9sbEN1c3RvbUZuID0gb3B0aW9ucy5zY3JvbGxGbjtcbiAgICBpZiAoc2Nyb2xsRWwgPT09IHRydWUpIHtcbiAgICAgIHNjcm9sbEVsID0gZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQocm9vdEVsLCB0cnVlKTtcbiAgICB9XG4gIH1cbiAgdmFyIGxheWVyc091dCA9IDA7XG4gIHZhciBjdXJyZW50UGFyZW50ID0gc2Nyb2xsRWw7XG4gIGRvIHtcbiAgICB2YXIgZWwgPSBjdXJyZW50UGFyZW50LFxuICAgICAgcmVjdCA9IGdldFJlY3QoZWwpLFxuICAgICAgdG9wID0gcmVjdC50b3AsXG4gICAgICBib3R0b20gPSByZWN0LmJvdHRvbSxcbiAgICAgIGxlZnQgPSByZWN0LmxlZnQsXG4gICAgICByaWdodCA9IHJlY3QucmlnaHQsXG4gICAgICB3aWR0aCA9IHJlY3Qud2lkdGgsXG4gICAgICBoZWlnaHQgPSByZWN0LmhlaWdodCxcbiAgICAgIGNhblNjcm9sbFggPSB2b2lkIDAsXG4gICAgICBjYW5TY3JvbGxZID0gdm9pZCAwLFxuICAgICAgc2Nyb2xsV2lkdGggPSBlbC5zY3JvbGxXaWR0aCxcbiAgICAgIHNjcm9sbEhlaWdodCA9IGVsLnNjcm9sbEhlaWdodCxcbiAgICAgIGVsQ1NTID0gY3NzKGVsKSxcbiAgICAgIHNjcm9sbFBvc1ggPSBlbC5zY3JvbGxMZWZ0LFxuICAgICAgc2Nyb2xsUG9zWSA9IGVsLnNjcm9sbFRvcDtcbiAgICBpZiAoZWwgPT09IHdpblNjcm9sbGVyKSB7XG4gICAgICBjYW5TY3JvbGxYID0gd2lkdGggPCBzY3JvbGxXaWR0aCAmJiAoZWxDU1Mub3ZlcmZsb3dYID09PSAnYXV0bycgfHwgZWxDU1Mub3ZlcmZsb3dYID09PSAnc2Nyb2xsJyB8fCBlbENTUy5vdmVyZmxvd1ggPT09ICd2aXNpYmxlJyk7XG4gICAgICBjYW5TY3JvbGxZID0gaGVpZ2h0IDwgc2Nyb2xsSGVpZ2h0ICYmIChlbENTUy5vdmVyZmxvd1kgPT09ICdhdXRvJyB8fCBlbENTUy5vdmVyZmxvd1kgPT09ICdzY3JvbGwnIHx8IGVsQ1NTLm92ZXJmbG93WSA9PT0gJ3Zpc2libGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FuU2Nyb2xsWCA9IHdpZHRoIDwgc2Nyb2xsV2lkdGggJiYgKGVsQ1NTLm92ZXJmbG93WCA9PT0gJ2F1dG8nIHx8IGVsQ1NTLm92ZXJmbG93WCA9PT0gJ3Njcm9sbCcpO1xuICAgICAgY2FuU2Nyb2xsWSA9IGhlaWdodCA8IHNjcm9sbEhlaWdodCAmJiAoZWxDU1Mub3ZlcmZsb3dZID09PSAnYXV0bycgfHwgZWxDU1Mub3ZlcmZsb3dZID09PSAnc2Nyb2xsJyk7XG4gICAgfVxuICAgIHZhciB2eCA9IGNhblNjcm9sbFggJiYgKE1hdGguYWJzKHJpZ2h0IC0geCkgPD0gc2VucyAmJiBzY3JvbGxQb3NYICsgd2lkdGggPCBzY3JvbGxXaWR0aCkgLSAoTWF0aC5hYnMobGVmdCAtIHgpIDw9IHNlbnMgJiYgISFzY3JvbGxQb3NYKTtcbiAgICB2YXIgdnkgPSBjYW5TY3JvbGxZICYmIChNYXRoLmFicyhib3R0b20gLSB5KSA8PSBzZW5zICYmIHNjcm9sbFBvc1kgKyBoZWlnaHQgPCBzY3JvbGxIZWlnaHQpIC0gKE1hdGguYWJzKHRvcCAtIHkpIDw9IHNlbnMgJiYgISFzY3JvbGxQb3NZKTtcbiAgICBpZiAoIWF1dG9TY3JvbGxzW2xheWVyc091dF0pIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IGxheWVyc091dDsgaSsrKSB7XG4gICAgICAgIGlmICghYXV0b1Njcm9sbHNbaV0pIHtcbiAgICAgICAgICBhdXRvU2Nyb2xsc1tpXSA9IHt9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhdXRvU2Nyb2xsc1tsYXllcnNPdXRdLnZ4ICE9IHZ4IHx8IGF1dG9TY3JvbGxzW2xheWVyc091dF0udnkgIT0gdnkgfHwgYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS5lbCAhPT0gZWwpIHtcbiAgICAgIGF1dG9TY3JvbGxzW2xheWVyc091dF0uZWwgPSBlbDtcbiAgICAgIGF1dG9TY3JvbGxzW2xheWVyc091dF0udnggPSB2eDtcbiAgICAgIGF1dG9TY3JvbGxzW2xheWVyc091dF0udnkgPSB2eTtcbiAgICAgIGNsZWFySW50ZXJ2YWwoYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS5waWQpO1xuICAgICAgaWYgKHZ4ICE9IDAgfHwgdnkgIT0gMCkge1xuICAgICAgICBzY3JvbGxUaGlzSW5zdGFuY2UgPSB0cnVlO1xuICAgICAgICAvKiBqc2hpbnQgbG9vcGZ1bmM6dHJ1ZSAqL1xuICAgICAgICBhdXRvU2Nyb2xsc1tsYXllcnNPdXRdLnBpZCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBlbXVsYXRlIGRyYWcgb3ZlciBkdXJpbmcgYXV0b3Njcm9sbCAoZmFsbGJhY2spLCBlbXVsYXRpbmcgbmF0aXZlIERuRCBiZWhhdmlvdXJcbiAgICAgICAgICBpZiAoaXNGYWxsYmFjayAmJiB0aGlzLmxheWVyID09PSAwKSB7XG4gICAgICAgICAgICBTb3J0YWJsZS5hY3RpdmUuX29uVG91Y2hNb3ZlKHRvdWNoRXZ0JDEpOyAvLyBUbyBtb3ZlIGdob3N0IGlmIGl0IGlzIHBvc2l0aW9uZWQgYWJzb2x1dGVseVxuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgc2Nyb2xsT2Zmc2V0WSA9IGF1dG9TY3JvbGxzW3RoaXMubGF5ZXJdLnZ5ID8gYXV0b1Njcm9sbHNbdGhpcy5sYXllcl0udnkgKiBzcGVlZCA6IDA7XG4gICAgICAgICAgdmFyIHNjcm9sbE9mZnNldFggPSBhdXRvU2Nyb2xsc1t0aGlzLmxheWVyXS52eCA/IGF1dG9TY3JvbGxzW3RoaXMubGF5ZXJdLnZ4ICogc3BlZWQgOiAwO1xuICAgICAgICAgIGlmICh0eXBlb2Ygc2Nyb2xsQ3VzdG9tRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxDdXN0b21Gbi5jYWxsKFNvcnRhYmxlLmRyYWdnZWQucGFyZW50Tm9kZVtleHBhbmRvXSwgc2Nyb2xsT2Zmc2V0WCwgc2Nyb2xsT2Zmc2V0WSwgZXZ0LCB0b3VjaEV2dCQxLCBhdXRvU2Nyb2xsc1t0aGlzLmxheWVyXS5lbCkgIT09ICdjb250aW51ZScpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzY3JvbGxCeShhdXRvU2Nyb2xsc1t0aGlzLmxheWVyXS5lbCwgc2Nyb2xsT2Zmc2V0WCwgc2Nyb2xsT2Zmc2V0WSk7XG4gICAgICAgIH0uYmluZCh7XG4gICAgICAgICAgbGF5ZXI6IGxheWVyc091dFxuICAgICAgICB9KSwgMjQpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXllcnNPdXQrKztcbiAgfSB3aGlsZSAob3B0aW9ucy5idWJibGVTY3JvbGwgJiYgY3VycmVudFBhcmVudCAhPT0gd2luU2Nyb2xsZXIgJiYgKGN1cnJlbnRQYXJlbnQgPSBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChjdXJyZW50UGFyZW50LCBmYWxzZSkpKTtcbiAgc2Nyb2xsaW5nID0gc2Nyb2xsVGhpc0luc3RhbmNlOyAvLyBpbiBjYXNlIGFub3RoZXIgZnVuY3Rpb24gY2F0Y2hlcyBzY3JvbGxpbmcgYXMgZmFsc2UgaW4gYmV0d2VlbiB3aGVuIGl0IGlzIG5vdFxufSwgMzApO1xuXG52YXIgZHJvcCA9IGZ1bmN0aW9uIGRyb3AoX3JlZikge1xuICB2YXIgb3JpZ2luYWxFdmVudCA9IF9yZWYub3JpZ2luYWxFdmVudCxcbiAgICBwdXRTb3J0YWJsZSA9IF9yZWYucHV0U29ydGFibGUsXG4gICAgZHJhZ0VsID0gX3JlZi5kcmFnRWwsXG4gICAgYWN0aXZlU29ydGFibGUgPSBfcmVmLmFjdGl2ZVNvcnRhYmxlLFxuICAgIGRpc3BhdGNoU29ydGFibGVFdmVudCA9IF9yZWYuZGlzcGF0Y2hTb3J0YWJsZUV2ZW50LFxuICAgIGhpZGVHaG9zdEZvclRhcmdldCA9IF9yZWYuaGlkZUdob3N0Rm9yVGFyZ2V0LFxuICAgIHVuaGlkZUdob3N0Rm9yVGFyZ2V0ID0gX3JlZi51bmhpZGVHaG9zdEZvclRhcmdldDtcbiAgaWYgKCFvcmlnaW5hbEV2ZW50KSByZXR1cm47XG4gIHZhciB0b1NvcnRhYmxlID0gcHV0U29ydGFibGUgfHwgYWN0aXZlU29ydGFibGU7XG4gIGhpZGVHaG9zdEZvclRhcmdldCgpO1xuICB2YXIgdG91Y2ggPSBvcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzICYmIG9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoID8gb3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlc1swXSA6IG9yaWdpbmFsRXZlbnQ7XG4gIHZhciB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHRvdWNoLmNsaWVudFgsIHRvdWNoLmNsaWVudFkpO1xuICB1bmhpZGVHaG9zdEZvclRhcmdldCgpO1xuICBpZiAodG9Tb3J0YWJsZSAmJiAhdG9Tb3J0YWJsZS5lbC5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50KCdzcGlsbCcpO1xuICAgIHRoaXMub25TcGlsbCh7XG4gICAgICBkcmFnRWw6IGRyYWdFbCxcbiAgICAgIHB1dFNvcnRhYmxlOiBwdXRTb3J0YWJsZVxuICAgIH0pO1xuICB9XG59O1xuZnVuY3Rpb24gUmV2ZXJ0KCkge31cblJldmVydC5wcm90b3R5cGUgPSB7XG4gIHN0YXJ0SW5kZXg6IG51bGwsXG4gIGRyYWdTdGFydDogZnVuY3Rpb24gZHJhZ1N0YXJ0KF9yZWYyKSB7XG4gICAgdmFyIG9sZERyYWdnYWJsZUluZGV4ID0gX3JlZjIub2xkRHJhZ2dhYmxlSW5kZXg7XG4gICAgdGhpcy5zdGFydEluZGV4ID0gb2xkRHJhZ2dhYmxlSW5kZXg7XG4gIH0sXG4gIG9uU3BpbGw6IGZ1bmN0aW9uIG9uU3BpbGwoX3JlZjMpIHtcbiAgICB2YXIgZHJhZ0VsID0gX3JlZjMuZHJhZ0VsLFxuICAgICAgcHV0U29ydGFibGUgPSBfcmVmMy5wdXRTb3J0YWJsZTtcbiAgICB0aGlzLnNvcnRhYmxlLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgIGlmIChwdXRTb3J0YWJsZSkge1xuICAgICAgcHV0U29ydGFibGUuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgfVxuICAgIHZhciBuZXh0U2libGluZyA9IGdldENoaWxkKHRoaXMuc29ydGFibGUuZWwsIHRoaXMuc3RhcnRJbmRleCwgdGhpcy5vcHRpb25zKTtcbiAgICBpZiAobmV4dFNpYmxpbmcpIHtcbiAgICAgIHRoaXMuc29ydGFibGUuZWwuaW5zZXJ0QmVmb3JlKGRyYWdFbCwgbmV4dFNpYmxpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNvcnRhYmxlLmVsLmFwcGVuZENoaWxkKGRyYWdFbCk7XG4gICAgfVxuICAgIHRoaXMuc29ydGFibGUuYW5pbWF0ZUFsbCgpO1xuICAgIGlmIChwdXRTb3J0YWJsZSkge1xuICAgICAgcHV0U29ydGFibGUuYW5pbWF0ZUFsbCgpO1xuICAgIH1cbiAgfSxcbiAgZHJvcDogZHJvcFxufTtcbl9leHRlbmRzKFJldmVydCwge1xuICBwbHVnaW5OYW1lOiAncmV2ZXJ0T25TcGlsbCdcbn0pO1xuZnVuY3Rpb24gUmVtb3ZlKCkge31cblJlbW92ZS5wcm90b3R5cGUgPSB7XG4gIG9uU3BpbGw6IGZ1bmN0aW9uIG9uU3BpbGwoX3JlZjQpIHtcbiAgICB2YXIgZHJhZ0VsID0gX3JlZjQuZHJhZ0VsLFxuICAgICAgcHV0U29ydGFibGUgPSBfcmVmNC5wdXRTb3J0YWJsZTtcbiAgICB2YXIgcGFyZW50U29ydGFibGUgPSBwdXRTb3J0YWJsZSB8fCB0aGlzLnNvcnRhYmxlO1xuICAgIHBhcmVudFNvcnRhYmxlLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgIGRyYWdFbC5wYXJlbnROb2RlICYmIGRyYWdFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRyYWdFbCk7XG4gICAgcGFyZW50U29ydGFibGUuYW5pbWF0ZUFsbCgpO1xuICB9LFxuICBkcm9wOiBkcm9wXG59O1xuX2V4dGVuZHMoUmVtb3ZlLCB7XG4gIHBsdWdpbk5hbWU6ICdyZW1vdmVPblNwaWxsJ1xufSk7XG5cbnZhciBsYXN0U3dhcEVsO1xuZnVuY3Rpb24gU3dhcFBsdWdpbigpIHtcbiAgZnVuY3Rpb24gU3dhcCgpIHtcbiAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgc3dhcENsYXNzOiAnc29ydGFibGUtc3dhcC1oaWdobGlnaHQnXG4gICAgfTtcbiAgfVxuICBTd2FwLnByb3RvdHlwZSA9IHtcbiAgICBkcmFnU3RhcnQ6IGZ1bmN0aW9uIGRyYWdTdGFydChfcmVmKSB7XG4gICAgICB2YXIgZHJhZ0VsID0gX3JlZi5kcmFnRWw7XG4gICAgICBsYXN0U3dhcEVsID0gZHJhZ0VsO1xuICAgIH0sXG4gICAgZHJhZ092ZXJWYWxpZDogZnVuY3Rpb24gZHJhZ092ZXJWYWxpZChfcmVmMikge1xuICAgICAgdmFyIGNvbXBsZXRlZCA9IF9yZWYyLmNvbXBsZXRlZCxcbiAgICAgICAgdGFyZ2V0ID0gX3JlZjIudGFyZ2V0LFxuICAgICAgICBvbk1vdmUgPSBfcmVmMi5vbk1vdmUsXG4gICAgICAgIGFjdGl2ZVNvcnRhYmxlID0gX3JlZjIuYWN0aXZlU29ydGFibGUsXG4gICAgICAgIGNoYW5nZWQgPSBfcmVmMi5jaGFuZ2VkLFxuICAgICAgICBjYW5jZWwgPSBfcmVmMi5jYW5jZWw7XG4gICAgICBpZiAoIWFjdGl2ZVNvcnRhYmxlLm9wdGlvbnMuc3dhcCkgcmV0dXJuO1xuICAgICAgdmFyIGVsID0gdGhpcy5zb3J0YWJsZS5lbCxcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSBlbCkge1xuICAgICAgICB2YXIgcHJldlN3YXBFbCA9IGxhc3RTd2FwRWw7XG4gICAgICAgIGlmIChvbk1vdmUodGFyZ2V0KSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICB0b2dnbGVDbGFzcyh0YXJnZXQsIG9wdGlvbnMuc3dhcENsYXNzLCB0cnVlKTtcbiAgICAgICAgICBsYXN0U3dhcEVsID0gdGFyZ2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhc3RTd2FwRWwgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmV2U3dhcEVsICYmIHByZXZTd2FwRWwgIT09IGxhc3RTd2FwRWwpIHtcbiAgICAgICAgICB0b2dnbGVDbGFzcyhwcmV2U3dhcEVsLCBvcHRpb25zLnN3YXBDbGFzcywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjaGFuZ2VkKCk7XG4gICAgICBjb21wbGV0ZWQodHJ1ZSk7XG4gICAgICBjYW5jZWwoKTtcbiAgICB9LFxuICAgIGRyb3A6IGZ1bmN0aW9uIGRyb3AoX3JlZjMpIHtcbiAgICAgIHZhciBhY3RpdmVTb3J0YWJsZSA9IF9yZWYzLmFjdGl2ZVNvcnRhYmxlLFxuICAgICAgICBwdXRTb3J0YWJsZSA9IF9yZWYzLnB1dFNvcnRhYmxlLFxuICAgICAgICBkcmFnRWwgPSBfcmVmMy5kcmFnRWw7XG4gICAgICB2YXIgdG9Tb3J0YWJsZSA9IHB1dFNvcnRhYmxlIHx8IHRoaXMuc29ydGFibGU7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgIGxhc3RTd2FwRWwgJiYgdG9nZ2xlQ2xhc3MobGFzdFN3YXBFbCwgb3B0aW9ucy5zd2FwQ2xhc3MsIGZhbHNlKTtcbiAgICAgIGlmIChsYXN0U3dhcEVsICYmIChvcHRpb25zLnN3YXAgfHwgcHV0U29ydGFibGUgJiYgcHV0U29ydGFibGUub3B0aW9ucy5zd2FwKSkge1xuICAgICAgICBpZiAoZHJhZ0VsICE9PSBsYXN0U3dhcEVsKSB7XG4gICAgICAgICAgdG9Tb3J0YWJsZS5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcbiAgICAgICAgICBpZiAodG9Tb3J0YWJsZSAhPT0gYWN0aXZlU29ydGFibGUpIGFjdGl2ZVNvcnRhYmxlLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgICAgICAgIHN3YXBOb2RlcyhkcmFnRWwsIGxhc3RTd2FwRWwpO1xuICAgICAgICAgIHRvU29ydGFibGUuYW5pbWF0ZUFsbCgpO1xuICAgICAgICAgIGlmICh0b1NvcnRhYmxlICE9PSBhY3RpdmVTb3J0YWJsZSkgYWN0aXZlU29ydGFibGUuYW5pbWF0ZUFsbCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBudWxsaW5nOiBmdW5jdGlvbiBudWxsaW5nKCkge1xuICAgICAgbGFzdFN3YXBFbCA9IG51bGw7XG4gICAgfVxuICB9O1xuICByZXR1cm4gX2V4dGVuZHMoU3dhcCwge1xuICAgIHBsdWdpbk5hbWU6ICdzd2FwJyxcbiAgICBldmVudFByb3BlcnRpZXM6IGZ1bmN0aW9uIGV2ZW50UHJvcGVydGllcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN3YXBJdGVtOiBsYXN0U3dhcEVsXG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBzd2FwTm9kZXMobjEsIG4yKSB7XG4gIHZhciBwMSA9IG4xLnBhcmVudE5vZGUsXG4gICAgcDIgPSBuMi5wYXJlbnROb2RlLFxuICAgIGkxLFxuICAgIGkyO1xuICBpZiAoIXAxIHx8ICFwMiB8fCBwMS5pc0VxdWFsTm9kZShuMikgfHwgcDIuaXNFcXVhbE5vZGUobjEpKSByZXR1cm47XG4gIGkxID0gaW5kZXgobjEpO1xuICBpMiA9IGluZGV4KG4yKTtcbiAgaWYgKHAxLmlzRXF1YWxOb2RlKHAyKSAmJiBpMSA8IGkyKSB7XG4gICAgaTIrKztcbiAgfVxuICBwMS5pbnNlcnRCZWZvcmUobjIsIHAxLmNoaWxkcmVuW2kxXSk7XG4gIHAyLmluc2VydEJlZm9yZShuMSwgcDIuY2hpbGRyZW5baTJdKTtcbn1cblxudmFyIG11bHRpRHJhZ0VsZW1lbnRzID0gW10sXG4gIG11bHRpRHJhZ0Nsb25lcyA9IFtdLFxuICBsYXN0TXVsdGlEcmFnU2VsZWN0LFxuICAvLyBmb3Igc2VsZWN0aW9uIHdpdGggbW9kaWZpZXIga2V5IGRvd24gKFNISUZUKVxuICBtdWx0aURyYWdTb3J0YWJsZSxcbiAgaW5pdGlhbEZvbGRpbmcgPSBmYWxzZSxcbiAgLy8gSW5pdGlhbCBtdWx0aS1kcmFnIGZvbGQgd2hlbiBkcmFnIHN0YXJ0ZWRcbiAgZm9sZGluZyA9IGZhbHNlLFxuICAvLyBGb2xkaW5nIGFueSBvdGhlciB0aW1lXG4gIGRyYWdTdGFydGVkID0gZmFsc2UsXG4gIGRyYWdFbCQxLFxuICBjbG9uZXNGcm9tUmVjdCxcbiAgY2xvbmVzSGlkZGVuO1xuZnVuY3Rpb24gTXVsdGlEcmFnUGx1Z2luKCkge1xuICBmdW5jdGlvbiBNdWx0aURyYWcoc29ydGFibGUpIHtcbiAgICAvLyBCaW5kIGFsbCBwcml2YXRlIG1ldGhvZHNcbiAgICBmb3IgKHZhciBmbiBpbiB0aGlzKSB7XG4gICAgICBpZiAoZm4uY2hhckF0KDApID09PSAnXycgJiYgdHlwZW9mIHRoaXNbZm5dID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXNbZm5dID0gdGhpc1tmbl0uYmluZCh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFzb3J0YWJsZS5vcHRpb25zLmF2b2lkSW1wbGljaXREZXNlbGVjdCkge1xuICAgICAgaWYgKHNvcnRhYmxlLm9wdGlvbnMuc3VwcG9ydFBvaW50ZXIpIHtcbiAgICAgICAgb24oZG9jdW1lbnQsICdwb2ludGVydXAnLCB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbihkb2N1bWVudCwgJ21vdXNldXAnLCB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZyk7XG4gICAgICAgIG9uKGRvY3VtZW50LCAndG91Y2hlbmQnLCB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZyk7XG4gICAgICB9XG4gICAgfVxuICAgIG9uKGRvY3VtZW50LCAna2V5ZG93bicsIHRoaXMuX2NoZWNrS2V5RG93bik7XG4gICAgb24oZG9jdW1lbnQsICdrZXl1cCcsIHRoaXMuX2NoZWNrS2V5VXApO1xuICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICBzZWxlY3RlZENsYXNzOiAnc29ydGFibGUtc2VsZWN0ZWQnLFxuICAgICAgbXVsdGlEcmFnS2V5OiBudWxsLFxuICAgICAgYXZvaWRJbXBsaWNpdERlc2VsZWN0OiBmYWxzZSxcbiAgICAgIHNldERhdGE6IGZ1bmN0aW9uIHNldERhdGEoZGF0YVRyYW5zZmVyLCBkcmFnRWwpIHtcbiAgICAgICAgdmFyIGRhdGEgPSAnJztcbiAgICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnRzLmxlbmd0aCAmJiBtdWx0aURyYWdTb3J0YWJsZSA9PT0gc29ydGFibGUpIHtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50LCBpKSB7XG4gICAgICAgICAgICBkYXRhICs9ICghaSA/ICcnIDogJywgJykgKyBtdWx0aURyYWdFbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRhdGEgPSBkcmFnRWwudGV4dENvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YVRyYW5zZmVyLnNldERhdGEoJ1RleHQnLCBkYXRhKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIE11bHRpRHJhZy5wcm90b3R5cGUgPSB7XG4gICAgbXVsdGlEcmFnS2V5RG93bjogZmFsc2UsXG4gICAgaXNNdWx0aURyYWc6IGZhbHNlLFxuICAgIGRlbGF5U3RhcnRHbG9iYWw6IGZ1bmN0aW9uIGRlbGF5U3RhcnRHbG9iYWwoX3JlZikge1xuICAgICAgdmFyIGRyYWdnZWQgPSBfcmVmLmRyYWdFbDtcbiAgICAgIGRyYWdFbCQxID0gZHJhZ2dlZDtcbiAgICB9LFxuICAgIGRlbGF5RW5kZWQ6IGZ1bmN0aW9uIGRlbGF5RW5kZWQoKSB7XG4gICAgICB0aGlzLmlzTXVsdGlEcmFnID0gfm11bHRpRHJhZ0VsZW1lbnRzLmluZGV4T2YoZHJhZ0VsJDEpO1xuICAgIH0sXG4gICAgc2V0dXBDbG9uZTogZnVuY3Rpb24gc2V0dXBDbG9uZShfcmVmMikge1xuICAgICAgdmFyIHNvcnRhYmxlID0gX3JlZjIuc29ydGFibGUsXG4gICAgICAgIGNhbmNlbCA9IF9yZWYyLmNhbmNlbDtcbiAgICAgIGlmICghdGhpcy5pc011bHRpRHJhZykgcmV0dXJuO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtdWx0aURyYWdFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBtdWx0aURyYWdDbG9uZXMucHVzaChjbG9uZShtdWx0aURyYWdFbGVtZW50c1tpXSkpO1xuICAgICAgICBtdWx0aURyYWdDbG9uZXNbaV0uc29ydGFibGVJbmRleCA9IG11bHRpRHJhZ0VsZW1lbnRzW2ldLnNvcnRhYmxlSW5kZXg7XG4gICAgICAgIG11bHRpRHJhZ0Nsb25lc1tpXS5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgICAgbXVsdGlEcmFnQ2xvbmVzW2ldLnN0eWxlWyd3aWxsLWNoYW5nZSddID0gJyc7XG4gICAgICAgIHRvZ2dsZUNsYXNzKG11bHRpRHJhZ0Nsb25lc1tpXSwgdGhpcy5vcHRpb25zLnNlbGVjdGVkQ2xhc3MsIGZhbHNlKTtcbiAgICAgICAgbXVsdGlEcmFnRWxlbWVudHNbaV0gPT09IGRyYWdFbCQxICYmIHRvZ2dsZUNsYXNzKG11bHRpRHJhZ0Nsb25lc1tpXSwgdGhpcy5vcHRpb25zLmNob3NlbkNsYXNzLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICBzb3J0YWJsZS5faGlkZUNsb25lKCk7XG4gICAgICBjYW5jZWwoKTtcbiAgICB9LFxuICAgIGNsb25lOiBmdW5jdGlvbiBjbG9uZShfcmVmMykge1xuICAgICAgdmFyIHNvcnRhYmxlID0gX3JlZjMuc29ydGFibGUsXG4gICAgICAgIHJvb3RFbCA9IF9yZWYzLnJvb3RFbCxcbiAgICAgICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50ID0gX3JlZjMuZGlzcGF0Y2hTb3J0YWJsZUV2ZW50LFxuICAgICAgICBjYW5jZWwgPSBfcmVmMy5jYW5jZWw7XG4gICAgICBpZiAoIXRoaXMuaXNNdWx0aURyYWcpIHJldHVybjtcbiAgICAgIGlmICghdGhpcy5vcHRpb25zLnJlbW92ZUNsb25lT25IaWRlKSB7XG4gICAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50cy5sZW5ndGggJiYgbXVsdGlEcmFnU29ydGFibGUgPT09IHNvcnRhYmxlKSB7XG4gICAgICAgICAgaW5zZXJ0TXVsdGlEcmFnQ2xvbmVzKHRydWUsIHJvb3RFbCk7XG4gICAgICAgICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50KCdjbG9uZScpO1xuICAgICAgICAgIGNhbmNlbCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBzaG93Q2xvbmU6IGZ1bmN0aW9uIHNob3dDbG9uZShfcmVmNCkge1xuICAgICAgdmFyIGNsb25lTm93U2hvd24gPSBfcmVmNC5jbG9uZU5vd1Nob3duLFxuICAgICAgICByb290RWwgPSBfcmVmNC5yb290RWwsXG4gICAgICAgIGNhbmNlbCA9IF9yZWY0LmNhbmNlbDtcbiAgICAgIGlmICghdGhpcy5pc011bHRpRHJhZykgcmV0dXJuO1xuICAgICAgaW5zZXJ0TXVsdGlEcmFnQ2xvbmVzKGZhbHNlLCByb290RWwpO1xuICAgICAgbXVsdGlEcmFnQ2xvbmVzLmZvckVhY2goZnVuY3Rpb24gKGNsb25lKSB7XG4gICAgICAgIGNzcyhjbG9uZSwgJ2Rpc3BsYXknLCAnJyk7XG4gICAgICB9KTtcbiAgICAgIGNsb25lTm93U2hvd24oKTtcbiAgICAgIGNsb25lc0hpZGRlbiA9IGZhbHNlO1xuICAgICAgY2FuY2VsKCk7XG4gICAgfSxcbiAgICBoaWRlQ2xvbmU6IGZ1bmN0aW9uIGhpZGVDbG9uZShfcmVmNSkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIHZhciBzb3J0YWJsZSA9IF9yZWY1LnNvcnRhYmxlLFxuICAgICAgICBjbG9uZU5vd0hpZGRlbiA9IF9yZWY1LmNsb25lTm93SGlkZGVuLFxuICAgICAgICBjYW5jZWwgPSBfcmVmNS5jYW5jZWw7XG4gICAgICBpZiAoIXRoaXMuaXNNdWx0aURyYWcpIHJldHVybjtcbiAgICAgIG11bHRpRHJhZ0Nsb25lcy5mb3JFYWNoKGZ1bmN0aW9uIChjbG9uZSkge1xuICAgICAgICBjc3MoY2xvbmUsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMucmVtb3ZlQ2xvbmVPbkhpZGUgJiYgY2xvbmUucGFyZW50Tm9kZSkge1xuICAgICAgICAgIGNsb25lLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2xvbmUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNsb25lTm93SGlkZGVuKCk7XG4gICAgICBjbG9uZXNIaWRkZW4gPSB0cnVlO1xuICAgICAgY2FuY2VsKCk7XG4gICAgfSxcbiAgICBkcmFnU3RhcnRHbG9iYWw6IGZ1bmN0aW9uIGRyYWdTdGFydEdsb2JhbChfcmVmNikge1xuICAgICAgdmFyIHNvcnRhYmxlID0gX3JlZjYuc29ydGFibGU7XG4gICAgICBpZiAoIXRoaXMuaXNNdWx0aURyYWcgJiYgbXVsdGlEcmFnU29ydGFibGUpIHtcbiAgICAgICAgbXVsdGlEcmFnU29ydGFibGUubXVsdGlEcmFnLl9kZXNlbGVjdE11bHRpRHJhZygpO1xuICAgICAgfVxuICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICBtdWx0aURyYWdFbGVtZW50LnNvcnRhYmxlSW5kZXggPSBpbmRleChtdWx0aURyYWdFbGVtZW50KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBTb3J0IG11bHRpLWRyYWcgZWxlbWVudHNcbiAgICAgIG11bHRpRHJhZ0VsZW1lbnRzID0gbXVsdGlEcmFnRWxlbWVudHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYS5zb3J0YWJsZUluZGV4IC0gYi5zb3J0YWJsZUluZGV4O1xuICAgICAgfSk7XG4gICAgICBkcmFnU3RhcnRlZCA9IHRydWU7XG4gICAgfSxcbiAgICBkcmFnU3RhcnRlZDogZnVuY3Rpb24gZHJhZ1N0YXJ0ZWQoX3JlZjcpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuICAgICAgdmFyIHNvcnRhYmxlID0gX3JlZjcuc29ydGFibGU7XG4gICAgICBpZiAoIXRoaXMuaXNNdWx0aURyYWcpIHJldHVybjtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc29ydCkge1xuICAgICAgICAvLyBDYXB0dXJlIHJlY3RzLFxuICAgICAgICAvLyBoaWRlIG11bHRpIGRyYWcgZWxlbWVudHMgKGJ5IHBvc2l0aW9uaW5nIHRoZW0gYWJzb2x1dGUpLFxuICAgICAgICAvLyBzZXQgbXVsdGkgZHJhZyBlbGVtZW50cyByZWN0cyB0byBkcmFnUmVjdCxcbiAgICAgICAgLy8gc2hvdyBtdWx0aSBkcmFnIGVsZW1lbnRzLFxuICAgICAgICAvLyBhbmltYXRlIHRvIHJlY3RzLFxuICAgICAgICAvLyB1bnNldCByZWN0cyAmIHJlbW92ZSBmcm9tIERPTVxuXG4gICAgICAgIHNvcnRhYmxlLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFuaW1hdGlvbikge1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50ID09PSBkcmFnRWwkMSkgcmV0dXJuO1xuICAgICAgICAgICAgY3NzKG11bHRpRHJhZ0VsZW1lbnQsICdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhciBkcmFnUmVjdCA9IGdldFJlY3QoZHJhZ0VsJDEsIGZhbHNlLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAobXVsdGlEcmFnRWxlbWVudCA9PT0gZHJhZ0VsJDEpIHJldHVybjtcbiAgICAgICAgICAgIHNldFJlY3QobXVsdGlEcmFnRWxlbWVudCwgZHJhZ1JlY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGZvbGRpbmcgPSB0cnVlO1xuICAgICAgICAgIGluaXRpYWxGb2xkaW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc29ydGFibGUuYW5pbWF0ZUFsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvbGRpbmcgPSBmYWxzZTtcbiAgICAgICAgaW5pdGlhbEZvbGRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKF90aGlzMi5vcHRpb25zLmFuaW1hdGlvbikge1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgIHVuc2V0UmVjdChtdWx0aURyYWdFbGVtZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBhbGwgYXV4aWxpYXJ5IG11bHRpZHJhZyBpdGVtcyBmcm9tIGVsLCBpZiBzb3J0aW5nIGVuYWJsZWRcbiAgICAgICAgaWYgKF90aGlzMi5vcHRpb25zLnNvcnQpIHtcbiAgICAgICAgICByZW1vdmVNdWx0aURyYWdFbGVtZW50cygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGRyYWdPdmVyOiBmdW5jdGlvbiBkcmFnT3ZlcihfcmVmOCkge1xuICAgICAgdmFyIHRhcmdldCA9IF9yZWY4LnRhcmdldCxcbiAgICAgICAgY29tcGxldGVkID0gX3JlZjguY29tcGxldGVkLFxuICAgICAgICBjYW5jZWwgPSBfcmVmOC5jYW5jZWw7XG4gICAgICBpZiAoZm9sZGluZyAmJiB+bXVsdGlEcmFnRWxlbWVudHMuaW5kZXhPZih0YXJnZXQpKSB7XG4gICAgICAgIGNvbXBsZXRlZChmYWxzZSk7XG4gICAgICAgIGNhbmNlbCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmV2ZXJ0OiBmdW5jdGlvbiByZXZlcnQoX3JlZjkpIHtcbiAgICAgIHZhciBmcm9tU29ydGFibGUgPSBfcmVmOS5mcm9tU29ydGFibGUsXG4gICAgICAgIHJvb3RFbCA9IF9yZWY5LnJvb3RFbCxcbiAgICAgICAgc29ydGFibGUgPSBfcmVmOS5zb3J0YWJsZSxcbiAgICAgICAgZHJhZ1JlY3QgPSBfcmVmOS5kcmFnUmVjdDtcbiAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIFNldHVwIHVuZm9sZCBhbmltYXRpb25cbiAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICAgIHNvcnRhYmxlLmFkZEFuaW1hdGlvblN0YXRlKHtcbiAgICAgICAgICAgIHRhcmdldDogbXVsdGlEcmFnRWxlbWVudCxcbiAgICAgICAgICAgIHJlY3Q6IGZvbGRpbmcgPyBnZXRSZWN0KG11bHRpRHJhZ0VsZW1lbnQpIDogZHJhZ1JlY3RcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB1bnNldFJlY3QobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudC5mcm9tUmVjdCA9IGRyYWdSZWN0O1xuICAgICAgICAgIGZyb21Tb3J0YWJsZS5yZW1vdmVBbmltYXRpb25TdGF0ZShtdWx0aURyYWdFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvbGRpbmcgPSBmYWxzZTtcbiAgICAgICAgaW5zZXJ0TXVsdGlEcmFnRWxlbWVudHMoIXRoaXMub3B0aW9ucy5yZW1vdmVDbG9uZU9uSGlkZSwgcm9vdEVsKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRyYWdPdmVyQ29tcGxldGVkOiBmdW5jdGlvbiBkcmFnT3ZlckNvbXBsZXRlZChfcmVmMTApIHtcbiAgICAgIHZhciBzb3J0YWJsZSA9IF9yZWYxMC5zb3J0YWJsZSxcbiAgICAgICAgaXNPd25lciA9IF9yZWYxMC5pc093bmVyLFxuICAgICAgICBpbnNlcnRpb24gPSBfcmVmMTAuaW5zZXJ0aW9uLFxuICAgICAgICBhY3RpdmVTb3J0YWJsZSA9IF9yZWYxMC5hY3RpdmVTb3J0YWJsZSxcbiAgICAgICAgcGFyZW50RWwgPSBfcmVmMTAucGFyZW50RWwsXG4gICAgICAgIHB1dFNvcnRhYmxlID0gX3JlZjEwLnB1dFNvcnRhYmxlO1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICBpZiAoaW5zZXJ0aW9uKSB7XG4gICAgICAgIC8vIENsb25lcyBtdXN0IGJlIGhpZGRlbiBiZWZvcmUgZm9sZGluZyBhbmltYXRpb24gdG8gY2FwdHVyZSBkcmFnUmVjdEFic29sdXRlIHByb3Blcmx5XG4gICAgICAgIGlmIChpc093bmVyKSB7XG4gICAgICAgICAgYWN0aXZlU29ydGFibGUuX2hpZGVDbG9uZSgpO1xuICAgICAgICB9XG4gICAgICAgIGluaXRpYWxGb2xkaW5nID0gZmFsc2U7XG4gICAgICAgIC8vIElmIGxlYXZpbmcgc29ydDpmYWxzZSByb290LCBvciBhbHJlYWR5IGZvbGRpbmcgLSBGb2xkIHRvIG5ldyBsb2NhdGlvblxuICAgICAgICBpZiAob3B0aW9ucy5hbmltYXRpb24gJiYgbXVsdGlEcmFnRWxlbWVudHMubGVuZ3RoID4gMSAmJiAoZm9sZGluZyB8fCAhaXNPd25lciAmJiAhYWN0aXZlU29ydGFibGUub3B0aW9ucy5zb3J0ICYmICFwdXRTb3J0YWJsZSkpIHtcbiAgICAgICAgICAvLyBGb2xkOiBTZXQgYWxsIG11bHRpIGRyYWcgZWxlbWVudHMncyByZWN0cyB0byBkcmFnRWwncyByZWN0IHdoZW4gbXVsdGktZHJhZyBlbGVtZW50cyBhcmUgaW52aXNpYmxlXG4gICAgICAgICAgdmFyIGRyYWdSZWN0QWJzb2x1dGUgPSBnZXRSZWN0KGRyYWdFbCQxLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnQgPT09IGRyYWdFbCQxKSByZXR1cm47XG4gICAgICAgICAgICBzZXRSZWN0KG11bHRpRHJhZ0VsZW1lbnQsIGRyYWdSZWN0QWJzb2x1dGUpO1xuXG4gICAgICAgICAgICAvLyBNb3ZlIGVsZW1lbnQocykgdG8gZW5kIG9mIHBhcmVudEVsIHNvIHRoYXQgaXQgZG9lcyBub3QgaW50ZXJmZXJlIHdpdGggbXVsdGktZHJhZyBjbG9uZXMgaW5zZXJ0aW9uIGlmIHRoZXkgYXJlIGluc2VydGVkXG4gICAgICAgICAgICAvLyB3aGlsZSBmb2xkaW5nLCBhbmQgc28gdGhhdCB3ZSBjYW4gY2FwdHVyZSB0aGVtIGFnYWluIGJlY2F1c2Ugb2xkIHNvcnRhYmxlIHdpbGwgbm8gbG9uZ2VyIGJlIGZyb21Tb3J0YWJsZVxuICAgICAgICAgICAgcGFyZW50RWwuYXBwZW5kQ2hpbGQobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZm9sZGluZyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDbG9uZXMgbXVzdCBiZSBzaG93biAoYW5kIGNoZWNrIHRvIHJlbW92ZSBtdWx0aSBkcmFncykgYWZ0ZXIgZm9sZGluZyB3aGVuIGludGVyZmVyaW5nIG11bHRpRHJhZ0VsZW1lbnRzIGFyZSBtb3ZlZCBvdXRcbiAgICAgICAgaWYgKCFpc093bmVyKSB7XG4gICAgICAgICAgLy8gT25seSByZW1vdmUgaWYgbm90IGZvbGRpbmcgKGZvbGRpbmcgd2lsbCByZW1vdmUgdGhlbSBhbnl3YXlzKVxuICAgICAgICAgIGlmICghZm9sZGluZykge1xuICAgICAgICAgICAgcmVtb3ZlTXVsdGlEcmFnRWxlbWVudHMoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHZhciBjbG9uZXNIaWRkZW5CZWZvcmUgPSBjbG9uZXNIaWRkZW47XG4gICAgICAgICAgICBhY3RpdmVTb3J0YWJsZS5fc2hvd0Nsb25lKHNvcnRhYmxlKTtcblxuICAgICAgICAgICAgLy8gVW5mb2xkIGFuaW1hdGlvbiBmb3IgY2xvbmVzIGlmIHNob3dpbmcgZnJvbSBoaWRkZW5cbiAgICAgICAgICAgIGlmIChhY3RpdmVTb3J0YWJsZS5vcHRpb25zLmFuaW1hdGlvbiAmJiAhY2xvbmVzSGlkZGVuICYmIGNsb25lc0hpZGRlbkJlZm9yZSkge1xuICAgICAgICAgICAgICBtdWx0aURyYWdDbG9uZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xvbmUpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVTb3J0YWJsZS5hZGRBbmltYXRpb25TdGF0ZSh7XG4gICAgICAgICAgICAgICAgICB0YXJnZXQ6IGNsb25lLFxuICAgICAgICAgICAgICAgICAgcmVjdDogY2xvbmVzRnJvbVJlY3RcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjbG9uZS5mcm9tUmVjdCA9IGNsb25lc0Zyb21SZWN0O1xuICAgICAgICAgICAgICAgIGNsb25lLnRoaXNBbmltYXRpb25EdXJhdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3RpdmVTb3J0YWJsZS5fc2hvd0Nsb25lKHNvcnRhYmxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGRyYWdPdmVyQW5pbWF0aW9uQ2FwdHVyZTogZnVuY3Rpb24gZHJhZ092ZXJBbmltYXRpb25DYXB0dXJlKF9yZWYxMSkge1xuICAgICAgdmFyIGRyYWdSZWN0ID0gX3JlZjExLmRyYWdSZWN0LFxuICAgICAgICBpc093bmVyID0gX3JlZjExLmlzT3duZXIsXG4gICAgICAgIGFjdGl2ZVNvcnRhYmxlID0gX3JlZjExLmFjdGl2ZVNvcnRhYmxlO1xuICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICBtdWx0aURyYWdFbGVtZW50LnRoaXNBbmltYXRpb25EdXJhdGlvbiA9IG51bGw7XG4gICAgICB9KTtcbiAgICAgIGlmIChhY3RpdmVTb3J0YWJsZS5vcHRpb25zLmFuaW1hdGlvbiAmJiAhaXNPd25lciAmJiBhY3RpdmVTb3J0YWJsZS5tdWx0aURyYWcuaXNNdWx0aURyYWcpIHtcbiAgICAgICAgY2xvbmVzRnJvbVJlY3QgPSBfZXh0ZW5kcyh7fSwgZHJhZ1JlY3QpO1xuICAgICAgICB2YXIgZHJhZ01hdHJpeCA9IG1hdHJpeChkcmFnRWwkMSwgdHJ1ZSk7XG4gICAgICAgIGNsb25lc0Zyb21SZWN0LnRvcCAtPSBkcmFnTWF0cml4LmY7XG4gICAgICAgIGNsb25lc0Zyb21SZWN0LmxlZnQgLT0gZHJhZ01hdHJpeC5lO1xuICAgICAgfVxuICAgIH0sXG4gICAgZHJhZ092ZXJBbmltYXRpb25Db21wbGV0ZTogZnVuY3Rpb24gZHJhZ092ZXJBbmltYXRpb25Db21wbGV0ZSgpIHtcbiAgICAgIGlmIChmb2xkaW5nKSB7XG4gICAgICAgIGZvbGRpbmcgPSBmYWxzZTtcbiAgICAgICAgcmVtb3ZlTXVsdGlEcmFnRWxlbWVudHMoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRyb3A6IGZ1bmN0aW9uIGRyb3AoX3JlZjEyKSB7XG4gICAgICB2YXIgZXZ0ID0gX3JlZjEyLm9yaWdpbmFsRXZlbnQsXG4gICAgICAgIHJvb3RFbCA9IF9yZWYxMi5yb290RWwsXG4gICAgICAgIHBhcmVudEVsID0gX3JlZjEyLnBhcmVudEVsLFxuICAgICAgICBzb3J0YWJsZSA9IF9yZWYxMi5zb3J0YWJsZSxcbiAgICAgICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50ID0gX3JlZjEyLmRpc3BhdGNoU29ydGFibGVFdmVudCxcbiAgICAgICAgb2xkSW5kZXggPSBfcmVmMTIub2xkSW5kZXgsXG4gICAgICAgIHB1dFNvcnRhYmxlID0gX3JlZjEyLnB1dFNvcnRhYmxlO1xuICAgICAgdmFyIHRvU29ydGFibGUgPSBwdXRTb3J0YWJsZSB8fCB0aGlzLnNvcnRhYmxlO1xuICAgICAgaWYgKCFldnQpIHJldHVybjtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICBjaGlsZHJlbiA9IHBhcmVudEVsLmNoaWxkcmVuO1xuXG4gICAgICAvLyBNdWx0aS1kcmFnIHNlbGVjdGlvblxuICAgICAgaWYgKCFkcmFnU3RhcnRlZCkge1xuICAgICAgICBpZiAob3B0aW9ucy5tdWx0aURyYWdLZXkgJiYgIXRoaXMubXVsdGlEcmFnS2V5RG93bikge1xuICAgICAgICAgIHRoaXMuX2Rlc2VsZWN0TXVsdGlEcmFnKCk7XG4gICAgICAgIH1cbiAgICAgICAgdG9nZ2xlQ2xhc3MoZHJhZ0VsJDEsIG9wdGlvbnMuc2VsZWN0ZWRDbGFzcywgIX5tdWx0aURyYWdFbGVtZW50cy5pbmRleE9mKGRyYWdFbCQxKSk7XG4gICAgICAgIGlmICghfm11bHRpRHJhZ0VsZW1lbnRzLmluZGV4T2YoZHJhZ0VsJDEpKSB7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMucHVzaChkcmFnRWwkMSk7XG4gICAgICAgICAgZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICBzb3J0YWJsZTogc29ydGFibGUsXG4gICAgICAgICAgICByb290RWw6IHJvb3RFbCxcbiAgICAgICAgICAgIG5hbWU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgdGFyZ2V0RWw6IGRyYWdFbCQxLFxuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBNb2RpZmllciBhY3RpdmF0ZWQsIHNlbGVjdCBmcm9tIGxhc3QgdG8gZHJhZ0VsXG4gICAgICAgICAgaWYgKGV2dC5zaGlmdEtleSAmJiBsYXN0TXVsdGlEcmFnU2VsZWN0ICYmIHNvcnRhYmxlLmVsLmNvbnRhaW5zKGxhc3RNdWx0aURyYWdTZWxlY3QpKSB7XG4gICAgICAgICAgICB2YXIgbGFzdEluZGV4ID0gaW5kZXgobGFzdE11bHRpRHJhZ1NlbGVjdCksXG4gICAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IGluZGV4KGRyYWdFbCQxKTtcbiAgICAgICAgICAgIGlmICh+bGFzdEluZGV4ICYmIH5jdXJyZW50SW5kZXggJiYgbGFzdEluZGV4ICE9PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBNdXN0IGluY2x1ZGUgbGFzdE11bHRpRHJhZ1NlbGVjdCAoc2VsZWN0IGl0KSwgaW4gY2FzZSBtb2RpZmllZCBzZWxlY3Rpb24gZnJvbSBubyBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAvLyAoYnV0IHByZXZpb3VzIHNlbGVjdGlvbiBleGlzdGVkKVxuICAgICAgICAgICAgICAgIHZhciBuLCBpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggPiBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIGkgPSBsYXN0SW5kZXg7XG4gICAgICAgICAgICAgICAgICBuID0gY3VycmVudEluZGV4O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBpID0gY3VycmVudEluZGV4O1xuICAgICAgICAgICAgICAgICAgbiA9IGxhc3RJbmRleCArIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBmaWx0ZXIgPSBvcHRpb25zLmZpbHRlcjtcbiAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgaWYgKH5tdWx0aURyYWdFbGVtZW50cy5pbmRleE9mKGNoaWxkcmVuW2ldKSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBlbGVtZW50IGlzIGRyYWdnYWJsZVxuICAgICAgICAgICAgICAgICAgaWYgKCFjbG9zZXN0KGNoaWxkcmVuW2ldLCBvcHRpb25zLmRyYWdnYWJsZSwgcGFyZW50RWwsIGZhbHNlKSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBlbGVtZW50IGlzIGZpbHRlcmVkXG4gICAgICAgICAgICAgICAgICB2YXIgZmlsdGVyZWQgPSBmaWx0ZXIgJiYgKHR5cGVvZiBmaWx0ZXIgPT09ICdmdW5jdGlvbicgPyBmaWx0ZXIuY2FsbChzb3J0YWJsZSwgZXZ0LCBjaGlsZHJlbltpXSwgc29ydGFibGUpIDogZmlsdGVyLnNwbGl0KCcsJykuc29tZShmdW5jdGlvbiAoY3JpdGVyaWEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsb3Nlc3QoY2hpbGRyZW5baV0sIGNyaXRlcmlhLnRyaW0oKSwgcGFyZW50RWwsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXJlZCkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzcyhjaGlsZHJlbltpXSwgb3B0aW9ucy5zZWxlY3RlZENsYXNzLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLnB1c2goY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBzb3J0YWJsZSxcbiAgICAgICAgICAgICAgICAgICAgcm9vdEVsOiByb290RWwsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbDogY2hpbGRyZW5baV0sXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYXN0TXVsdGlEcmFnU2VsZWN0ID0gZHJhZ0VsJDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIG11bHRpRHJhZ1NvcnRhYmxlID0gdG9Tb3J0YWJsZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5zcGxpY2UobXVsdGlEcmFnRWxlbWVudHMuaW5kZXhPZihkcmFnRWwkMSksIDEpO1xuICAgICAgICAgIGxhc3RNdWx0aURyYWdTZWxlY3QgPSBudWxsO1xuICAgICAgICAgIGRpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgc29ydGFibGU6IHNvcnRhYmxlLFxuICAgICAgICAgICAgcm9vdEVsOiByb290RWwsXG4gICAgICAgICAgICBuYW1lOiAnZGVzZWxlY3QnLFxuICAgICAgICAgICAgdGFyZ2V0RWw6IGRyYWdFbCQxLFxuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gTXVsdGktZHJhZyBkcm9wXG4gICAgICBpZiAoZHJhZ1N0YXJ0ZWQgJiYgdGhpcy5pc011bHRpRHJhZykge1xuICAgICAgICBmb2xkaW5nID0gZmFsc2U7XG4gICAgICAgIC8vIERvIG5vdCBcInVuZm9sZFwiIGFmdGVyIGFyb3VuZCBkcmFnRWwgaWYgcmV2ZXJ0ZWRcbiAgICAgICAgaWYgKChwYXJlbnRFbFtleHBhbmRvXS5vcHRpb25zLnNvcnQgfHwgcGFyZW50RWwgIT09IHJvb3RFbCkgJiYgbXVsdGlEcmFnRWxlbWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHZhciBkcmFnUmVjdCA9IGdldFJlY3QoZHJhZ0VsJDEpLFxuICAgICAgICAgICAgbXVsdGlEcmFnSW5kZXggPSBpbmRleChkcmFnRWwkMSwgJzpub3QoLicgKyB0aGlzLm9wdGlvbnMuc2VsZWN0ZWRDbGFzcyArICcpJyk7XG4gICAgICAgICAgaWYgKCFpbml0aWFsRm9sZGluZyAmJiBvcHRpb25zLmFuaW1hdGlvbikgZHJhZ0VsJDEudGhpc0FuaW1hdGlvbkR1cmF0aW9uID0gbnVsbDtcbiAgICAgICAgICB0b1NvcnRhYmxlLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgICAgICAgIGlmICghaW5pdGlhbEZvbGRpbmcpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgICBkcmFnRWwkMS5mcm9tUmVjdCA9IGRyYWdSZWN0O1xuICAgICAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgbXVsdGlEcmFnRWxlbWVudC50aGlzQW5pbWF0aW9uRHVyYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50ICE9PSBkcmFnRWwkMSkge1xuICAgICAgICAgICAgICAgICAgdmFyIHJlY3QgPSBmb2xkaW5nID8gZ2V0UmVjdChtdWx0aURyYWdFbGVtZW50KSA6IGRyYWdSZWN0O1xuICAgICAgICAgICAgICAgICAgbXVsdGlEcmFnRWxlbWVudC5mcm9tUmVjdCA9IHJlY3Q7XG5cbiAgICAgICAgICAgICAgICAgIC8vIFByZXBhcmUgdW5mb2xkIGFuaW1hdGlvblxuICAgICAgICAgICAgICAgICAgdG9Tb3J0YWJsZS5hZGRBbmltYXRpb25TdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogbXVsdGlEcmFnRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgcmVjdDogcmVjdFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTXVsdGkgZHJhZyBlbGVtZW50cyBhcmUgbm90IG5lY2Vzc2FyaWx5IHJlbW92ZWQgZnJvbSB0aGUgRE9NIG9uIGRyb3AsIHNvIHRvIHJlaW5zZXJ0XG4gICAgICAgICAgICAvLyBwcm9wZXJseSB0aGV5IG11c3QgYWxsIGJlIHJlbW92ZWRcbiAgICAgICAgICAgIHJlbW92ZU11bHRpRHJhZ0VsZW1lbnRzKCk7XG4gICAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICAgIGlmIChjaGlsZHJlblttdWx0aURyYWdJbmRleF0pIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRFbC5pbnNlcnRCZWZvcmUobXVsdGlEcmFnRWxlbWVudCwgY2hpbGRyZW5bbXVsdGlEcmFnSW5kZXhdKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRFbC5hcHBlbmRDaGlsZChtdWx0aURyYWdFbGVtZW50KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBtdWx0aURyYWdJbmRleCsrO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIElmIGluaXRpYWwgZm9sZGluZyBpcyBkb25lLCB0aGUgZWxlbWVudHMgbWF5IGhhdmUgY2hhbmdlZCBwb3NpdGlvbiBiZWNhdXNlIHRoZXkgYXJlIG5vd1xuICAgICAgICAgICAgLy8gdW5mb2xkaW5nIGFyb3VuZCBkcmFnRWwsIGV2ZW4gdGhvdWdoIGRyYWdFbCBtYXkgbm90IGhhdmUgaGlzIGluZGV4IGNoYW5nZWQsIHNvIHVwZGF0ZSBldmVudFxuICAgICAgICAgICAgLy8gbXVzdCBiZSBmaXJlZCBoZXJlIGFzIFNvcnRhYmxlIHdpbGwgbm90LlxuICAgICAgICAgICAgaWYgKG9sZEluZGV4ID09PSBpbmRleChkcmFnRWwkMSkpIHtcbiAgICAgICAgICAgICAgdmFyIHVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnQuc29ydGFibGVJbmRleCAhPT0gaW5kZXgobXVsdGlEcmFnRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgaWYgKHVwZGF0ZSkge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoU29ydGFibGVFdmVudCgndXBkYXRlJyk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50KCdzb3J0Jyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBNdXN0IGJlIGRvbmUgYWZ0ZXIgY2FwdHVyaW5nIGluZGl2aWR1YWwgcmVjdHMgKHNjcm9sbCBiYXIpXG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICAgICAgdW5zZXRSZWN0KG11bHRpRHJhZ0VsZW1lbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRvU29ydGFibGUuYW5pbWF0ZUFsbCgpO1xuICAgICAgICB9XG4gICAgICAgIG11bHRpRHJhZ1NvcnRhYmxlID0gdG9Tb3J0YWJsZTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVtb3ZlIGNsb25lcyBpZiBuZWNlc3NhcnlcbiAgICAgIGlmIChyb290RWwgPT09IHBhcmVudEVsIHx8IHB1dFNvcnRhYmxlICYmIHB1dFNvcnRhYmxlLmxhc3RQdXRNb2RlICE9PSAnY2xvbmUnKSB7XG4gICAgICAgIG11bHRpRHJhZ0Nsb25lcy5mb3JFYWNoKGZ1bmN0aW9uIChjbG9uZSkge1xuICAgICAgICAgIGNsb25lLnBhcmVudE5vZGUgJiYgY2xvbmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjbG9uZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgbnVsbGluZ0dsb2JhbDogZnVuY3Rpb24gbnVsbGluZ0dsb2JhbCgpIHtcbiAgICAgIHRoaXMuaXNNdWx0aURyYWcgPSBkcmFnU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgbXVsdGlEcmFnQ2xvbmVzLmxlbmd0aCA9IDA7XG4gICAgfSxcbiAgICBkZXN0cm95R2xvYmFsOiBmdW5jdGlvbiBkZXN0cm95R2xvYmFsKCkge1xuICAgICAgdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcoKTtcbiAgICAgIG9mZihkb2N1bWVudCwgJ3BvaW50ZXJ1cCcsIHRoaXMuX2Rlc2VsZWN0TXVsdGlEcmFnKTtcbiAgICAgIG9mZihkb2N1bWVudCwgJ21vdXNldXAnLCB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZyk7XG4gICAgICBvZmYoZG9jdW1lbnQsICd0b3VjaGVuZCcsIHRoaXMuX2Rlc2VsZWN0TXVsdGlEcmFnKTtcbiAgICAgIG9mZihkb2N1bWVudCwgJ2tleWRvd24nLCB0aGlzLl9jaGVja0tleURvd24pO1xuICAgICAgb2ZmKGRvY3VtZW50LCAna2V5dXAnLCB0aGlzLl9jaGVja0tleVVwKTtcbiAgICB9LFxuICAgIF9kZXNlbGVjdE11bHRpRHJhZzogZnVuY3Rpb24gX2Rlc2VsZWN0TXVsdGlEcmFnKGV2dCkge1xuICAgICAgaWYgKHR5cGVvZiBkcmFnU3RhcnRlZCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkcmFnU3RhcnRlZCkgcmV0dXJuO1xuXG4gICAgICAvLyBPbmx5IGRlc2VsZWN0IGlmIHNlbGVjdGlvbiBpcyBpbiB0aGlzIHNvcnRhYmxlXG4gICAgICBpZiAobXVsdGlEcmFnU29ydGFibGUgIT09IHRoaXMuc29ydGFibGUpIHJldHVybjtcblxuICAgICAgLy8gT25seSBkZXNlbGVjdCBpZiB0YXJnZXQgaXMgbm90IGl0ZW0gaW4gdGhpcyBzb3J0YWJsZVxuICAgICAgaWYgKGV2dCAmJiBjbG9zZXN0KGV2dC50YXJnZXQsIHRoaXMub3B0aW9ucy5kcmFnZ2FibGUsIHRoaXMuc29ydGFibGUuZWwsIGZhbHNlKSkgcmV0dXJuO1xuXG4gICAgICAvLyBPbmx5IGRlc2VsZWN0IGlmIGxlZnQgY2xpY2tcbiAgICAgIGlmIChldnQgJiYgZXZ0LmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xuICAgICAgd2hpbGUgKG11bHRpRHJhZ0VsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICB2YXIgZWwgPSBtdWx0aURyYWdFbGVtZW50c1swXTtcbiAgICAgICAgdG9nZ2xlQ2xhc3MoZWwsIHRoaXMub3B0aW9ucy5zZWxlY3RlZENsYXNzLCBmYWxzZSk7XG4gICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLnNoaWZ0KCk7XG4gICAgICAgIGRpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgIHNvcnRhYmxlOiB0aGlzLnNvcnRhYmxlLFxuICAgICAgICAgIHJvb3RFbDogdGhpcy5zb3J0YWJsZS5lbCxcbiAgICAgICAgICBuYW1lOiAnZGVzZWxlY3QnLFxuICAgICAgICAgIHRhcmdldEVsOiBlbCxcbiAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBfY2hlY2tLZXlEb3duOiBmdW5jdGlvbiBfY2hlY2tLZXlEb3duKGV2dCkge1xuICAgICAgaWYgKGV2dC5rZXkgPT09IHRoaXMub3B0aW9ucy5tdWx0aURyYWdLZXkpIHtcbiAgICAgICAgdGhpcy5tdWx0aURyYWdLZXlEb3duID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIF9jaGVja0tleVVwOiBmdW5jdGlvbiBfY2hlY2tLZXlVcChldnQpIHtcbiAgICAgIGlmIChldnQua2V5ID09PSB0aGlzLm9wdGlvbnMubXVsdGlEcmFnS2V5KSB7XG4gICAgICAgIHRoaXMubXVsdGlEcmFnS2V5RG93biA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzKE11bHRpRHJhZywge1xuICAgIC8vIFN0YXRpYyBtZXRob2RzICYgcHJvcGVydGllc1xuICAgIHBsdWdpbk5hbWU6ICdtdWx0aURyYWcnLFxuICAgIHV0aWxzOiB7XG4gICAgICAvKipcclxuICAgICAgICogU2VsZWN0cyB0aGUgcHJvdmlkZWQgbXVsdGktZHJhZyBpdGVtXHJcbiAgICAgICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbCAgICBUaGUgZWxlbWVudCB0byBiZSBzZWxlY3RlZFxyXG4gICAgICAgKi9cbiAgICAgIHNlbGVjdDogZnVuY3Rpb24gc2VsZWN0KGVsKSB7XG4gICAgICAgIHZhciBzb3J0YWJsZSA9IGVsLnBhcmVudE5vZGVbZXhwYW5kb107XG4gICAgICAgIGlmICghc29ydGFibGUgfHwgIXNvcnRhYmxlLm9wdGlvbnMubXVsdGlEcmFnIHx8IH5tdWx0aURyYWdFbGVtZW50cy5pbmRleE9mKGVsKSkgcmV0dXJuO1xuICAgICAgICBpZiAobXVsdGlEcmFnU29ydGFibGUgJiYgbXVsdGlEcmFnU29ydGFibGUgIT09IHNvcnRhYmxlKSB7XG4gICAgICAgICAgbXVsdGlEcmFnU29ydGFibGUubXVsdGlEcmFnLl9kZXNlbGVjdE11bHRpRHJhZygpO1xuICAgICAgICAgIG11bHRpRHJhZ1NvcnRhYmxlID0gc29ydGFibGU7XG4gICAgICAgIH1cbiAgICAgICAgdG9nZ2xlQ2xhc3MoZWwsIHNvcnRhYmxlLm9wdGlvbnMuc2VsZWN0ZWRDbGFzcywgdHJ1ZSk7XG4gICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLnB1c2goZWwpO1xuICAgICAgfSxcbiAgICAgIC8qKlxyXG4gICAgICAgKiBEZXNlbGVjdHMgdGhlIHByb3ZpZGVkIG11bHRpLWRyYWcgaXRlbVxyXG4gICAgICAgKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWwgICAgVGhlIGVsZW1lbnQgdG8gYmUgZGVzZWxlY3RlZFxyXG4gICAgICAgKi9cbiAgICAgIGRlc2VsZWN0OiBmdW5jdGlvbiBkZXNlbGVjdChlbCkge1xuICAgICAgICB2YXIgc29ydGFibGUgPSBlbC5wYXJlbnROb2RlW2V4cGFuZG9dLFxuICAgICAgICAgIGluZGV4ID0gbXVsdGlEcmFnRWxlbWVudHMuaW5kZXhPZihlbCk7XG4gICAgICAgIGlmICghc29ydGFibGUgfHwgIXNvcnRhYmxlLm9wdGlvbnMubXVsdGlEcmFnIHx8ICF+aW5kZXgpIHJldHVybjtcbiAgICAgICAgdG9nZ2xlQ2xhc3MoZWwsIHNvcnRhYmxlLm9wdGlvbnMuc2VsZWN0ZWRDbGFzcywgZmFsc2UpO1xuICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZXZlbnRQcm9wZXJ0aWVzOiBmdW5jdGlvbiBldmVudFByb3BlcnRpZXMoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcbiAgICAgIHZhciBvbGRJbmRpY2llcyA9IFtdLFxuICAgICAgICBuZXdJbmRpY2llcyA9IFtdO1xuICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICBvbGRJbmRpY2llcy5wdXNoKHtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50OiBtdWx0aURyYWdFbGVtZW50LFxuICAgICAgICAgIGluZGV4OiBtdWx0aURyYWdFbGVtZW50LnNvcnRhYmxlSW5kZXhcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gbXVsdGlEcmFnRWxlbWVudHMgd2lsbCBhbHJlYWR5IGJlIHNvcnRlZCBpZiBmb2xkaW5nXG4gICAgICAgIHZhciBuZXdJbmRleDtcbiAgICAgICAgaWYgKGZvbGRpbmcgJiYgbXVsdGlEcmFnRWxlbWVudCAhPT0gZHJhZ0VsJDEpIHtcbiAgICAgICAgICBuZXdJbmRleCA9IC0xO1xuICAgICAgICB9IGVsc2UgaWYgKGZvbGRpbmcpIHtcbiAgICAgICAgICBuZXdJbmRleCA9IGluZGV4KG11bHRpRHJhZ0VsZW1lbnQsICc6bm90KC4nICsgX3RoaXMzLm9wdGlvbnMuc2VsZWN0ZWRDbGFzcyArICcpJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3SW5kZXggPSBpbmRleChtdWx0aURyYWdFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBuZXdJbmRpY2llcy5wdXNoKHtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50OiBtdWx0aURyYWdFbGVtZW50LFxuICAgICAgICAgIGluZGV4OiBuZXdJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXRlbXM6IF90b0NvbnN1bWFibGVBcnJheShtdWx0aURyYWdFbGVtZW50cyksXG4gICAgICAgIGNsb25lczogW10uY29uY2F0KG11bHRpRHJhZ0Nsb25lcyksXG4gICAgICAgIG9sZEluZGljaWVzOiBvbGRJbmRpY2llcyxcbiAgICAgICAgbmV3SW5kaWNpZXM6IG5ld0luZGljaWVzXG4gICAgICB9O1xuICAgIH0sXG4gICAgb3B0aW9uTGlzdGVuZXJzOiB7XG4gICAgICBtdWx0aURyYWdLZXk6IGZ1bmN0aW9uIG11bHRpRHJhZ0tleShrZXkpIHtcbiAgICAgICAga2V5ID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChrZXkgPT09ICdjdHJsJykge1xuICAgICAgICAgIGtleSA9ICdDb250cm9sJztcbiAgICAgICAgfSBlbHNlIGlmIChrZXkubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGtleSA9IGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zdWJzdHIoMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gaW5zZXJ0TXVsdGlEcmFnRWxlbWVudHMoY2xvbmVzSW5zZXJ0ZWQsIHJvb3RFbCkge1xuICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50LCBpKSB7XG4gICAgdmFyIHRhcmdldCA9IHJvb3RFbC5jaGlsZHJlblttdWx0aURyYWdFbGVtZW50LnNvcnRhYmxlSW5kZXggKyAoY2xvbmVzSW5zZXJ0ZWQgPyBOdW1iZXIoaSkgOiAwKV07XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgcm9vdEVsLmluc2VydEJlZm9yZShtdWx0aURyYWdFbGVtZW50LCB0YXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByb290RWwuYXBwZW5kQ2hpbGQobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXHJcbiAqIEluc2VydCBtdWx0aS1kcmFnIGNsb25lc1xyXG4gKiBAcGFyYW0gIHtbQm9vbGVhbl19IGVsZW1lbnRzSW5zZXJ0ZWQgIFdoZXRoZXIgdGhlIG11bHRpLWRyYWcgZWxlbWVudHMgYXJlIGluc2VydGVkXHJcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSByb290RWxcclxuICovXG5mdW5jdGlvbiBpbnNlcnRNdWx0aURyYWdDbG9uZXMoZWxlbWVudHNJbnNlcnRlZCwgcm9vdEVsKSB7XG4gIG11bHRpRHJhZ0Nsb25lcy5mb3JFYWNoKGZ1bmN0aW9uIChjbG9uZSwgaSkge1xuICAgIHZhciB0YXJnZXQgPSByb290RWwuY2hpbGRyZW5bY2xvbmUuc29ydGFibGVJbmRleCArIChlbGVtZW50c0luc2VydGVkID8gTnVtYmVyKGkpIDogMCldO1xuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHJvb3RFbC5pbnNlcnRCZWZvcmUoY2xvbmUsIHRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvb3RFbC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHJlbW92ZU11bHRpRHJhZ0VsZW1lbnRzKCkge1xuICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgaWYgKG11bHRpRHJhZ0VsZW1lbnQgPT09IGRyYWdFbCQxKSByZXR1cm47XG4gICAgbXVsdGlEcmFnRWxlbWVudC5wYXJlbnROb2RlICYmIG11bHRpRHJhZ0VsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtdWx0aURyYWdFbGVtZW50KTtcbiAgfSk7XG59XG5cblNvcnRhYmxlLm1vdW50KG5ldyBBdXRvU2Nyb2xsUGx1Z2luKCkpO1xuU29ydGFibGUubW91bnQoUmVtb3ZlLCBSZXZlcnQpO1xuXG5leHBvcnQgZGVmYXVsdCBTb3J0YWJsZTtcbmV4cG9ydCB7IE11bHRpRHJhZ1BsdWdpbiBhcyBNdWx0aURyYWcsIFNvcnRhYmxlLCBTd2FwUGx1Z2luIGFzIFN3YXAgfTtcbiIsIi8vIGhlbHBlciBmdW5jdGlvbnNcbmltcG9ydCB7Z2V0VmlzaWJsZUxheWVyc0F0UG9pbnR9IGZyb20gXCIuLi91dGlscy9tYXBib3hnbC5qc1wiO1xuXG4vKipcbiAqIEFkZCBsaXN0ZW5lciBmb3IgbW91c2UgZXZlbnRzIHRvIG1hcC5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG1hcCAtIEhUTUwgZWxlbWVudCBmb3IgbWFwLlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE1vdXNlRXZlbnRzKGVsKSB7XG4gIC8vIGRlZmluZSBtb3VzZSBtb3ZlIGJlaGF2aW9yXG4gIGVsLm1hcC5vbihcIm1vdXNlbW92ZVwiLCAoZSkgPT4ge1xuICAgIC8vIGZpbmQgdmlzaWJsZSBsYXllcnMgdGhhdCBhcmUgdW5kZXJuZWF0aCB0aGUgbW91c2VcbiAgICBjb25zdCBsYXllcnMgPSBnZXRWaXNpYmxlTGF5ZXJzQXRQb2ludChlbCwgZS5wb2ludCk7XG4gICAgLy8gc2V0IGN1cnNvciBzdHlsZSBiYXNlZCBvbiB3aGV0aGVyIGFueSB2aXNpYmxlIGxheWVycyB1bmRlciBtb3VzZVxuICAgIGlmIChsYXllcnMubGVuZ3RoID4gMCkge1xuICAgICAgZWwubWFwLmdldENhbnZhcygpLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5tYXAuZ2V0Q2FudmFzKCkuc3R5bGUuY3Vyc29yID0gXCJncmFiXCI7XG4gICAgfVxuICB9KTtcbiAgLy8gZGVmaW5lIG1vdXNlIG91dCBiZWhhdmlvclxuICBlbC5tYXAub24oXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgZWwubWFwLmdldENhbnZhcygpLnN0eWxlLmN1cnNvciA9IFwiZ3JhYlwiO1xuICB9KTtcbn1cbiIsIi8qKiBJbXBvcnQgZGVwZW5kZW5jaWVzICovXG4vLyBzdHlsaW5nXG5pbXBvcnQgXCIuL2Nzcy9wb3B1cC5jc3NcIlxuLy8gaGVscGVyIGZ1bmN0aW9uc1xuaW1wb3J0IHtnZXRWaXNpYmxlTGF5ZXJEYXRhQXRQb2ludH0gZnJvbSBcIi4uL3V0aWxzL21hcGJveGdsLmpzXCI7XG5cbi8qKlxuICogQWRkIGxpc3RlbmVyIGZvciBwb3B1cCB0byBtYXAuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBtYXAgLSBIVE1MIGVsZW1lbnQgZm9yIG1hcC5cbiAqIEBwYXJhbSB7TWFwPHN0cmluZyxzdHJpbmc+fSBwcm9qZWN0TWV0YWRhdGEgLSBQcm9qZWN0IG1ldGFkYXRhLlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB6b25lcyAtIFpvbmUgbmFtZXMuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkUG9wdXAoZWwsIHByb2plY3RNZXRhZGF0YSwgem9uZXMpIHtcbiAgLy8gZGVmaW5lIGxpc3RlbmVyIGZvciBjbGljayBvbiBtYXAgdG8gZGlzcGxheSBwb3B1cFxuICBlbC5tYXAub24oXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIC8vIG9idGFpbiBkYXRhIGZvciB2aXNpYmxlIGxheWVycyB0aGF0IGFyZSB1bmRlcm5lYXRoIHRoZSBtb3VzZVxuICAgIGNvbnN0IGRhdGEgPSBnZXRWaXNpYmxlTGF5ZXJEYXRhQXRQb2ludChlbCwgcHJvamVjdE1ldGFkYXRhLCBlLnBvaW50KTtcbiAgICAvLyBpZiBhbnkgbGF5ZXIgZGF0YSB0byBzaG93LCB0aGVuIGRpc3BsYXkgcG9wdXBcbiAgICBpZiAoZGF0YS5zaXplID4gMCkge1xuICAgICAgLy8gYWRkIHBvcHVwXG4gICAgICBuZXcgbWFwYm94Z2wuUG9wdXAoe2Nsb3NlQnV0dG9uOiBmYWxzZX0pXG4gICAgICAgIC5zZXRMbmdMYXQoZS5sbmdMYXQpXG4gICAgICAgIC5zZXRET01Db250ZW50KGNyZWF0ZVBvcHVwKGRhdGEsIHpvbmVzKSlcbiAgICAgICAgLmFkZFRvKGVsLm1hcCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgcG9wdXAuXG4gKiBAcGFyYW0ge01hcDxvYmplY3Q+fSBkYXRhIC0gQXJyYXkgb2Yga2V5IHBhaXJzIHdpdGggcG9wdXAgaW5mb3JtYXRpb24uXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHpvbmVzIC0gWm9uZSBuYW1lcy5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBjcmVhdGVQb3B1cChkYXRhLCB6b25lcykge1xuICAvLyBjcmVhdGUgZWxlbWVudFxuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsLmNsYXNzTGlzdC5hZGQoXCJtYXAtcG9wdXBcIik7XG4gIC8vIGFkZCB2YWx1ZXMgZm9yIGVhY2ggbGF5ZXJcbiAgZGF0YS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgLy8gY3JlYXRlIGxhYmVsXG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJmdy1ib2xkXCIpO1xuICAgIGxhYmVsLmlubmVyVGV4dCA9IGtleSArIFwiOlwiO1xuICAgIC8vIGNyZWF0ZSBzcGFuXG4gICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBpZiAodmFsdWUuY2xhc3MgPT09IFwiU29sdXRpb25cIikge1xuICAgICAgc3Bhbi5pbm5lclRleHQgPSB6b25lc1t2YWx1ZS52YWx1ZSAtIDFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBzcGFuLmlubmVyVGV4dCA9IHZhbHVlLnZhbHVlO1xuICAgIH1cbiAgICAvLyBhcHBlbmQgZWxlbWVudHNcbiAgICBlbC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgZWwuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIH0pO1xuICAvLyByZXR1cm4gZWxlbWVudFxuICByZXR1cm4gZWw7XG59XG4iLCIvKiogSW1wb3J0IGRlcGVuZGVuY2llcyAqL1xuLy8gZnVuY3Rpb25zIHRvIGNyZWF0ZSBlbGVtZW50c1xuaW1wb3J0IHthZGRUb29sdGlwfSBmcm9tICBcIi4uL3V0aWxzL2VsZW1lbnQuanNcIjtcbi8vIHN0eWxpbmdcbmltcG9ydCBcIi4vY3NzL2NhdGVnb3JpY2FsLWxlZ2VuZC5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL2NvbnRpbnVvdXMtbGVnZW5kLmNzc1wiO1xuXG4vKipcbiAqIENyZWF0ZSBhIGNhdGVnb3JpY2FsIGxlZ2VuZC5cbiAqIEBwYXJhbSB7b2JqZWN0fSB4IC0gT2JqZWN0IHdpdGggaXRlbXMgdG8gZGlzcGxheSBpbiBsZWdlbmQuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHgudmFsdWVzIC0gU2V0IG9mIHZhbHVlcyBkZW5vdGluZyB0aGUgbnVtZXJpY1xuICogdmFsdWVzIGZvciBlYWNoIGxlZ2VuZCBpdGVtLiBOb3RlIHRoYXQgdGhlc2UgdmFsdWVzIGFyZSBub3Qgc2hvd25cbiAqIGluIHRoZSBsZWdlbmQuXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHguY29sb3JzIC0gU2V0IG9mIHZhbHVlcyBkZW5vdGluZyB0aGUgY29sb3JcbiAqIGZvciBlYWNoIGxlZ2VuZCBpdGVtLlxuICogTm90ZSB0aGF0IHRoaXMgbXVzdCBoYXZlIHRoZSBzYW1lIGxlbmd0aCBhcyB7QGxpbmsgeC52YWx1ZXN9LlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB4LmxhYmVscyAtIFNldCBvZiB2YWx1ZXMgZGVub3RpbmcgdGhlIHRleHQgbGFiZWxcbiAqIGZvciBlYWNoIGxlZ2VuZCBpdGVtLlxuICogTm90ZSB0aGF0IHRoaXMgbXVzdCBoYXZlIHRoZSBzYW1lIGxlbmd0aCBhcyB7QGxpbmsgeC52YWx1ZXN9LlxuICogQHBhcmFtIHtzdHJpbmd9IHgudW5pdHMgLSBVbml0cyBmb3IgdGhlIGxlZ2VuZCBpdGVtcy5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2F0ZWdvcmljYWxMZWdlbmQoeCkge1xuICAvLyBpbml0aWFsaXplIGxlZ2VuZFxuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbC5jbGFzc05hbWUgPSBcImNhdGVnb3JpY2FsLWxlZ2VuZFwiO1xuICBhZGRUb29sdGlwKFxuICAgIGVsLFxuICAgIFwiVGhpcyBsYXllciBoYXMgY2F0ZWdvcmljYWwgZGF0YSBhbmQgY29sb3JzIGluZGljYXRlIGVhY2ggY2F0ZWdvcnkuXCJcbiAgKTtcbiAgLy8gaWYgbmVlZGVkLCBmb3JjZSB2YWx1ZXMgaW50byBhbiBhcnJheVxuICBpZiAoIUFycmF5LmlzQXJyYXkoeC5sYWJlbHMpKSB7XG4gICAgeC5sYWJlbHMgPSBbeC5sYWJlbHNdXG4gIH1cbiAgaWYgKCFBcnJheS5pc0FycmF5KHgudmFsdWVzKSkge1xuICAgIHgudmFsdWVzID0gW3gudmFsdWVzXVxuICB9XG4gIGlmICghQXJyYXkuaXNBcnJheSh4LmNvbG9ycykpIHtcbiAgICB4LmNvbG9ycyA9IFt4LmNvbG9yc11cbiAgfVxuXG4gIC8vIGNyZWF0ZSBsZWdlbmRcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB4LnZhbHVlcy5sZW5ndGg7ICsraSkge1xuICAgIC8vIGNyZWF0ZSBpdGVtIHRvIGFkZCB0byBsZWdlbmRcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbS5jbGFzc05hbWUgPSBcIml0ZW1cIjtcbiAgICAvLyBjcmVhdGUgdGV4dCBjb21wb25lbnQgdG8gZGlzcGxheSB0aGUgdGV4dFxuICAgIGxldCBpdGVtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgaXRlbUxhYmVsLmNsYXNzTmFtZSA9IFwiaXRlbS1sYWJlbFwiO1xuICAgIGl0ZW1MYWJlbC5pbm5lclRleHQgPSBgJHt4LmxhYmVsc1tpXX1gO1xuICAgIC8vIGNyZWF0ZSBzeW1ib2wgY29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGNvbG9yXG4gICAgbGV0IGl0ZW1TeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW1TeW1ib2wuY2xhc3NOYW1lID0gXCJpdGVtLXN5bWJvbFwiO1xuICAgIGl0ZW1TeW1ib2wuc3R5bGUuYmFja2dyb3VuZENvbG9yID0geC5jb2xvcnNbaV07XG4gICAgaXRlbVN5bWJvbC5zdHlsZS5jb2xvciA9IHguY29sb3JzW2ldO1xuICAgIC8vIGFkZCBpdGVtIHRvIGxlZ2VuZFxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVN5bWJvbCk7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtTGFiZWwpO1xuICAgIGVsLmFwcGVuZENoaWxkKGl0ZW0pO1xuICB9XG5cbiAgLy8gcmV0dXJuIGxlZ2VuZFxuICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgY29udGludW91cyBsZWdlbmQuXG4gKiBAcGFyYW0ge29iamVjdH0geCAtIE9iamVjdCB3aXRoIGl0ZW1zIHRvIGRpc3BsYXkgaW4gbGVnZW5kLlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB4LnZhbHVlcyAtIFNldCBvZiB2YWx1ZXMgdGhhdCBkZWZpbmUgaW5jcmVtZW50c1xuICogZm9yIHRoZSBjb2xvciBiYXIuXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHguY29sb3JzIC0gU2V0IG9mIHZhbHVlcyB0aGF0IGRlbm90ZSBhIGNvbG9yIGZvciBlYWNoXG4gKiBpbmNyZW1lbnQgaW4gdGhlIGNvbG9yIGJhci5cbiAqIE5vdGUgdGhhdCB0aGlzIG11c3QgaGF2ZSB0aGUgc2FtZSBsZW5ndGggYXMge0BsaW5rIHgudmFsdWVzfS5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0geC5icmVha3MgLSBTZXQgb2YgdmFsdWVzIHRoYXQgZGVub3RlIHBvc2l0aW9ucyBmb3IgdGhlXG4gKiB0ZXh0IGxhYmVscyB0byBhY2NvbXBhbnkgdGhlIGNvbG9yIGJhci5cbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0geC5sYWJlbHMgLSBTZXQgb2YgdmFsdWVzIHRoYXQgZGVub3RlIHRleHQgbGFiZWxcbiAqIHRvIGFjY29tcGFueSB0aGUgY29sb3IgYmFyLlxuICogTm90ZSB0aGF0IHRoaXMgbXVzdCBoYXZlIHRoZSBzYW1lIGxlbmd0aCBhcyB7QGxpbmsgeC5icmVha3N9LlxuICogQHBhcmFtIHtzdHJpbmd9IHgudW5pdHMgLSBVbml0cyBmb3IgdGhlIGxlZ2VuZCBpdGVtcy5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGludW91c0xlZ2VuZCh4KSB7XG4gIC8vIGluaXRpYWxpemUgbGVnZW5kXG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsLmNsYXNzTGlzdC5hZGQoXCJjb250aW51b3VzLWxlZ2VuZFwiKTtcbiAgYWRkVG9vbHRpcChcbiAgICBlbCxcbiAgICBcIlRoaXMgbGF5ZXIgaGFzIGNvbnRpbnVvdXMgZGF0YSBhbmQgdGhlIFwiICtcbiAgICAgIFwibGVnZW5kIHNob3dzIHRoZSByYW5nZSBvZiBjb2xvcnMgdXNlZCBmb3IgZGlzcGxheVwiXG4gICk7XG5cbiAgLy8gY29tcHV0ZSB2YWx1ZXNcbiAgbGV0IG1heFZhbHVlID0gTWF0aC5tYXgoLi4ueC52YWx1ZXMpO1xuICBsZXQgbWluVmFsdWUgPSBNYXRoLm1pbiguLi54LnZhbHVlcyk7XG4gIGxldCByYW5nZVZhbHVlID0gbWF4VmFsdWUgLSBtaW5WYWx1ZTtcblxuICAvLyBjcmVhdGUgY29sb3IgYmFyXG4gIGxldCBjb2xvcmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbG9yYmFyLmNsYXNzTmFtZSA9IFwiY29sb3JiYXItcmFtcFwiO1xuICBsZXQgY29sb3JiYXJCYWNrZ3JvdW5kID0gXCJsaW5lYXItZ3JhZGllbnQodG8gbGVmdFwiO1xuICBsZXQgY29sb3JiYXJQb3NpdGlvbiA9IHVuZGVmaW5lZDtcbiAgeC5jb2xvcnMgPSB4LmNvbG9ycy5yZXZlcnNlKCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgeC5jb2xvcnMubGVuZ3RoOyArK2kpIHtcbiAgICBjb2xvcmJhclBvc2l0aW9uID0gKCh4LnZhbHVlc1tpXSAtIG1pblZhbHVlKSAvIHJhbmdlVmFsdWUpICogMTAwO1xuICAgIGNvbG9yYmFyQmFja2dyb3VuZCArPVxuICAgICAgYCwgJHt4LmNvbG9yc1tpXX0gJHtjb2xvcmJhclBvc2l0aW9ufSVgO1xuICB9XG4gIGNvbG9yYmFyQmFja2dyb3VuZCArPSBcIilcIjtcbiAgY29sb3JiYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0geC5jb2xvcnNbMF07XG4gIGNvbG9yYmFyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGNvbG9yYmFyQmFja2dyb3VuZDtcblxuICAvLyBjcmVhdGUgdW5pdHMgbGFiZWxcbiAgbGV0IHVuaXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICB1bml0cy5jbGFzc05hbWUgPSBcImNvbG9yYmFyLXVuaXRzXCI7XG4gIGlmICh0eXBlb2YoeC51bml0cykgPT09IFwic3RyaW5nXCIpIHtcbiAgICB1bml0cy5pbm5lclRleHQgPSBgJHt4LnVuaXRzfWA7XG4gIH1cblxuICAvLyBjcmVhdGUgY29udGFpbmVyIGZvciB0aWNrcyBhbmQgbGFiZWxzXG4gIGxldCBpdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGl0ZW1zLmNsYXNzTmFtZSA9IFwiY29sb3JiYXItaXRlbXNcIjtcblxuICAvLyBjcmVhdGUgYXhpcyB0aWNrcyBhbmQgbGFiZWxzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgeC5icmVha3MubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBjYWxjdWxhdGUgd2lkdGhcbiAgICBsZXQgcG9zID0gTWF0aC5yb3VuZCgxMDAgKiAoKHguYnJlYWtzW2ldIC0gbWluVmFsdWUpIC8gcmFuZ2VWYWx1ZSkpO1xuICAgIC8vIGNyZWF0ZSBjb250YWluZXIgZm9yIGkndGggdGljayBhbmQgbGFiZWxcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbS5zdHlsZS56SW5kZXggPSBpO1xuICAgIGl0ZW0uY2xhc3NOYW1lID0gXCJjb2xvcmJhci1pdGVtXCI7XG4gICAgaXRlbS5zdHlsZS5ncmlkQ29sdW1uU3RhcnQgPSBwb3M7XG4gICAgaXRlbS5zdHlsZS5ncmlkQ29sdW1uRW5kID0gcG9zO1xuICAgIGl0ZW0uc3R5bGUuZ3JpZFJvdyA9IDE7XG4gICAgaXRlbS5zdHlsZS56SW5kZXggPSBpICsgMTtcbiAgICAvLyBjcmVhdGUgdGlja1xuICAgIGxldCBpdGVtVGljayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbVRpY2suY2xhc3NOYW1lID0gXCJjb2xvcmJhci10aWNrXCI7XG4gICAgaXRlbVRpY2suaW5uZXJUZXh0ID0gXCIgXCI7XG4gICAgLy8gY3JlYXRlIGxhYmVsXG4gICAgbGV0IGl0ZW1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBpdGVtTGFiZWwuY2xhc3NOYW1lID0gXCJjb2xvcmJhci1sYWJlbFwiO1xuICAgIGl0ZW1MYWJlbC5pbm5lclRleHQgPSBgJHt4LmxhYmVsc1tpXX1gO1xuICAgIC8vIGFwcGVuZCB0byB0aWNrIGFuZCBsYWJlbCB0byBpdGVtIGNvbnRhaW5lclxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVRpY2spO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUxhYmVsKTtcbiAgICBpdGVtcy5hcHBlbmRDaGlsZChpdGVtKTtcbiAgfVxuXG4gIC8vIGNvbnN0cnVjdCBsZWdlbmRcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29sb3JiYXItY29udGFpbmVyXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29sb3JiYXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbXMpO1xuICBlbC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICBlbC5hcHBlbmRDaGlsZCh1bml0cyk7XG5cbiAgLy8gcmV0dXJuIGxlZ2VuZFxuICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgbGVnZW5kLlxuICogQHBhcmFtIHtPYmplY3R9IHggLSBPYmplY3Qgd2l0aCBpdGVtcyB0byBkaXNwbGF5IGluIGxlZ2VuZC5cbiAqIFNlZSB7QGxpbmsgY3JlYXRlQ29udGludW91c0xlZ2VuZH0gYW5kIHtAbGluayBjcmVhdGVDYXRlZ29yaWNhbExlZ2VuZH1cbiAqIGZvciBhZGRpdGlvbmFsIHBhcmFtZXRlciBkZXRhaWxzLlxuICogQHBhcmFtIHtzdHJpbmd9IHguY2xhc3MgLSBWYWx1ZSBpbmRpY2F0aW5nIHRoZSBkZXNpcmVkIHR5cGUgb2YgbGVnZW5kLlxuICogQWNjZXB0YWJsZSB2YWx1ZXMgaW5jbHVkZSBgXCJDb250aW51b3VzTGVnZW5kXCJgIGFuZCBgXCJDYXRlZ29yaWNhbExlZ2VuZFwiYC5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGVnZW5kKHgpIHtcbiAgaWYgKHguY2xhc3MgPT09IFwiQ29udGludW91c0xlZ2VuZFwiKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNvbnRpbnVvdXNMZWdlbmQoeCk7XG4gIH0gZWxzZSBpZiAoeC5jbGFzcyA9PT0gXCJDYXRlZ29yaWNhbExlZ2VuZFwiKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNhdGVnb3JpY2FsTGVnZW5kKHgpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJjcmVhdGVMZWdlbmQoKTogYHhgIG5vdCBhIHJlY29nbml6ZWQgdmFsdWUuXCIpO1xuICB9XG59XG4iLCIvKiogSW1wb3J0IGRlcGVuZGVuY2llcyAqL1xuLy8gbm9kZSBtb2R1bGVzXG5pbXBvcnQge1NvcnRhYmxlfSBmcm9tIFwic29ydGFibGVqc1wiO1xuaW1wb3J0IFwidG9tLXNlbGVjdC9kaXN0L2Nzcy90b20tc2VsZWN0LmJvb3RzdHJhcDUuY3NzXCI7XG5pbXBvcnQgVG9tU2VsZWN0IGZyb20gJ3RvbS1zZWxlY3QvZGlzdC9qcy90b20tc2VsZWN0LmNvbXBsZXRlLm1pbi5qcyc7XG4vLyBmdW5jdGlvbnMgdG8gY3JlYXRlIGVsZW1lbnRzXG5pbXBvcnQge2NyZWF0ZU1lbnVJdGVtfSBmcm9tIFwiLi9tYXBwZXItc2NhZmZvbGQuanNcIjtcbmltcG9ydCB7YWRkUG9wdXB9IGZyb20gXCIuL2FkZC1wb3B1cC5qc1wiO1xuaW1wb3J0IHthZGRNb3VzZUV2ZW50c30gZnJvbSBcIi4vYWRkLW1vdXNlLWV2ZW50cy5qc1wiO1xuaW1wb3J0IHtwcm9qZWN0U2VsZWN0T3B0aW9uc30gZnJvbSBcIi4uL3V0aWxzL3Byb2plY3RTZWxlY3RPcHRpb25zLmpzXCI7XG5pbXBvcnQge3NlbGVjdE9wdGlvbn0gZnJvbSBcIi4uL3V0aWxzL3Byb2plY3RTZWxlY3RPcHRpb25zLmpzXCI7XG5pbXBvcnQge3Byb2plY3RNZXRhZGF0YX0gZnJvbSBcIi4uL3V0aWxzL3Byb2plY3RNZXRhZGF0YS5qc1wiO1xuaW1wb3J0IHtnZXRNZXRhZGF0YX0gZnJvbSBcIi4uL3V0aWxzL3Byb2plY3RNZXRhZGF0YS5qc1wiO1xuLy8gc3R5bGluZ1xuaW1wb3J0IFwiLi9jc3Mvc3R5bGUuY3NzXCI7XG5cbi8qKiBDbGFzcyByZXByZXNlbnRpbmcgYW4gb2JqZWN0IGZvciBtYW5hZ2luZyBhIG1hcC4gKi9cbmV4cG9ydCBjbGFzcyBNYXBwZXIge1xuXG4gIC8vIHByaXZhdGUgZmllbGRzXG5cbiAgLyoqXG4gICAqIFByb2plY3QgbWV0YWRhdGEgZm9yIGxheWVycy5cbiAgICogQHR5cGUge01hcDxzdHJpbmcsc3RyaW5nPn1cbiAgICovXG4gIF9tZXRhZGF0YTtcblxuICAvKipcbiAgICogTWFwIG9mIGxheWVycyB0aGF0IGFyZSBoaWRkZW4gb24gbWVudS4gTm90ZSB0aGF0IHRoZXNlIGxheWVyc1xuICAgKiBhcmUgYWN0aXZlIGFuZCBoYXZlIGJlZW4gYWRkZWQgdG8gdGhlIG1hcCwgYnV0IGFyZSBub3Qgc2hvd24gb24gdGhlIG1lbnUuXG4gICAqIEB0eXBlIHtNYXA8b2JqZWN0Pn1cbiAgICovXG4gIF9oaWRkZW5MYXllcnMgPSBuZXcgTWFwKCk7XG5cbiAgLyoqXG4gICAqIFNldCB0aGF0IGNvbnRhaW5zIGlkZW50aWZpZXJzIGZvciB0aGUgbGF5ZXJzIHRoYXQgYXJlIGFjdGl2ZSBhbmQgaGF2ZSBiZWVuXG4gICAqIGFkZGVkIHRvIHRoZSBtYXAuIE5vdGUgdGhhdCB0aGlzIGluY2x1ZGVzIGhpZGRlbiBsYXllcnMuXG4gICAqIEB0eXBlIHtTZXQ8c3RyaW5nPn1cbiAgICovXG4gIF9hY3RpdmVMYXllcklkcyA9IG5ldyBTZXQoKTtcblxuICAvKipcbiAgICogTWF4aW11bSBudW1iZXIgb2YgbGF5ZXJzIHRoYXQgY2FuIGJlIGFkZGVkIHRvIHRoZSBtYXAuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBfbWF4TGF5ZXJzO1xuXG4gIC8vIHByaXZhdGUgSFRNTCBmaWVsZHNcblxuICAvKipcbiAgICogSFRNTCBFbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIE1hcGJveCBtYXAuXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIF9tYXA7XG5cbiAgLyoqXG4gICAqIEhUTUwgRWxlbWVudCB0aGF0IGNvbnRhaW5zIHRoZSBuYXZpZ2F0aW9uIG1lbnUuXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIF9tZW51O1xuXG4gIC8qKlxuICAgKiBIVE1MIEVsZW1lbnQgdGhhdCBjb250YWlucyB0aGUgc2VsZWN0IGlucHV0LlxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBfc2VsZWN0O1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIE1hcHBlciBvYmplY3Qgd2l0aCBtZW51LCBtYXAsIGFuZCBwcm9qZWN0IGRhdGEuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbGVtZW50IC0gSFRNTCBlbGVtZW50IGZvciBuYXZpZ2F0aW9uIG1lbnUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYXBJZCAtIEhUTUwgZWxlbWVudCBpZGVudGlmaWVyIGZvciB0aGUgbWFwZ2wgbWFwLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvamVjdCAtIE9iamVjdCB3aXRoIHZhcmlvdXMgdHlwZXMgb2Ygb2JqZWN0cy5cbiAgICogQHBhcmFtIHtBcnJheTxvYmplY3Q+fSBwcm9qZWN0LmZlYXR1cmVzIC0gQXJyYXkgb2YgZmVhdHVyZSBvYmplY3RzLlxuICAgKiBAcGFyYW0ge0FycmF5PG9iamVjdD59IHByb2plY3QuY29zdHMgLSBBcnJheSBvZiBjb3N0IG9iamVjdHMuXG4gICAqIEBwYXJhbSB7QXJyYXk8b2JqZWN0Pn0gcHJvamVjdC5sb2NrIC0gQXJyYXkgb2YgbG9jayBvYmplY3RzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbWF4TGF5ZXJzIC0gTWF4aW11bSBudW1iZXIgb2YgYWN0aXZlIGxheWVycyBwZXJtaXR0ZWQuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBpbml0aWFsaXplKGVsZW1lbnQsIG1hcElkLCBwcm9qZWN0LCBtYXhMYXllcnMpIHtcbiAgICAvLyBpbml0aWFsaXplIGZpZWxkc1xuICAgIHRoaXMuX21heExheWVycyA9IG1heExheWVycyB8fCAxNTtcbiAgICB0aGlzLl9tZW51ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1hcHBlci1tZW51XCIpO1xuICAgIHRoaXMuX3NlbGVjdCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYXBwZXItc2VsZWN0XCIpO1xuICAgIHRoaXMuX21hcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1hcElkKTtcbiAgICB0aGlzLl9tZXRhZGF0YSA9IHByb2plY3RNZXRhZGF0YShwcm9qZWN0KTtcbiAgICAvLyBkZWZpbmUgdGVtcG9yYXJ5IHZhcmlhYmxlc1xuICAgIGxldCBpLCBqLCBlbCwgaztcbiAgICAvLyBhZGQgbWVudSBpdGVtc1xuICAgIC8vIG5vdGUgdGhhdCB0aGlzIGNvZGUgYXNzdW1lcyB0aGF0IHRoZSB0aGlzLl9tYXAgaGFzIGJlZW5cbiAgICAvLyBpbml0aWFsaXplZCB3aXRoIGxheWVycyB0aGF0IGhhdmUgdGhlIHZpc2libGUgcHJvcGVydHkgc2V0IHRvIHRydWUsXG4gICAgLy8gYWxzbyBub3RlIHRoYXQgbGF5ZXJzIG11c3QgYmUgYWRkZWQgaW4gdGhlIG9yZGVyIHRoYXQgaXMgdGhlIHJldmVyc2VcbiAgICAvLyBvZiB0aGF0IHVzZWQgdG8gYWRkIGxheWVycyB0byB0aGUgbWFwXG4gICAgZm9yIChpID0gMDsgaSA8IHByb2plY3QuZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGVsID0gY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgIHByb2plY3QuZmVhdHVyZXNbaV0sIHRoaXMsIHByb2plY3QuZmVhdHVyZXNbaV0udGhlbWVzXG4gICAgICApO1xuICAgICAgaWYgKHByb2plY3QuZmVhdHVyZXNbaV0ubGF5ZXIudmlzaWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLl9tZW51LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgdGhpcy5fYWN0aXZlTGF5ZXJJZHMuYWRkKGVsLmRhdGFzZXQuaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faGlkZGVuTGF5ZXJzLnNldChlbC5kYXRhc2V0LmlkLCBlbCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCBwcm9qZWN0LmNvc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBlbCA9IGNyZWF0ZU1lbnVJdGVtKHByb2plY3QuY29zdHNbaV0sIHRoaXMpO1xuICAgICAgaWYgKHByb2plY3QuY29zdHNbaV0ubGF5ZXIudmlzaWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLl9tZW51LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgdGhpcy5fYWN0aXZlTGF5ZXJJZHMuYWRkKGVsLmRhdGFzZXQuaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faGlkZGVuTGF5ZXJzLnNldChlbC5kYXRhc2V0LmlkLCBlbCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCBwcm9qZWN0LmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBlbCA9IGNyZWF0ZU1lbnVJdGVtKHByb2plY3QubG9ja3NbaV0sIHRoaXMpO1xuICAgICAgaWYgKHByb2plY3QubG9ja3NbaV0ubGF5ZXIudmlzaWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLl9tZW51LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgdGhpcy5fYWN0aXZlTGF5ZXJJZHMuYWRkKGVsLmRhdGFzZXQuaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faGlkZGVuTGF5ZXJzLnNldChlbC5kYXRhc2V0LmlkLCBlbCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCBwcm9qZWN0LnNvbHV0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgZWwgPSBjcmVhdGVNZW51SXRlbShwcm9qZWN0LnNvbHV0aW9uc1tpXSwgdGhpcyk7XG4gICAgICBpZiAocHJvamVjdC5zb2x1dGlvbnNbaV0ubGF5ZXIudmlzaWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLl9tZW51LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgdGhpcy5fYWN0aXZlTGF5ZXJJZHMuYWRkKGVsLmRhdGFzZXQuaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faGlkZGVuTGF5ZXJzLnNldChlbC5kYXRhc2V0LmlkLCBlbCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGluaXRpYWxpemUgc29ydGluZyBiZWhhdmlvclxuICAgIG5ldyBTb3J0YWJsZSh0aGlzLl9tZW51LCB7XG4gICAgICBoYW5kbGU6IFwiLmhhbmRsZVwiLFxuICAgICAgYW5pbWF0aW9uOiAxNTAsXG4gICAgICBkYXRhSWRBdHRyOiBcImRhdGEtaWRcIixcbiAgICAgIGdob3N0Q2xhc3M6IFwiZ2hvc3RcIixcbiAgICAgIG9uVXBkYXRlOiBldmVudCA9PiB7XG4gICAgICAgIGxldCBiZWZvcmVJZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGV2ZW50Lm5ld0luZGV4ID4gMCkge1xuICAgICAgICAgIGJlZm9yZUlkID1cbiAgICAgICAgICAgIGV2ZW50LnRvLmNoaWxkcmVuW2V2ZW50Lm5ld0luZGV4IC0gMV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdmVMYXllck9uTWFwKGV2ZW50Lml0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSwgYmVmb3JlSWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGluaXRpYWxpemUgc2VsZWN0IG1lbnVcbiAgICBsZXQgc2VsZWN0T3B0aW9ucyA9IHByb2plY3RTZWxlY3RPcHRpb25zKHByb2plY3QpO1xuICAgIG5ldyBUb21TZWxlY3QodGhpcy5fc2VsZWN0LCB7XG4gICAgICBvcHRpb25zOiBzZWxlY3RPcHRpb25zLm9wdGlvbnMsXG4gICAgICBpdGVtczogWy4uLnRoaXMuX2FjdGl2ZUxheWVySWRzXSxcbiAgICAgIGNyZWF0ZTogZmFsc2UsXG4gICAgICBkcm9wZG93blBhcmVudDogXCJib2R5XCIsXG4gICAgICBsYWJlbEZpZWxkOiBcIm5hbWVcIixcbiAgICAgIHNlYXJjaEZpZWxkOiBbXCJuYW1lXCJdLFxuICAgICAgbWF4T3B0aW9uczogbnVsbCxcbiAgICAgIHNvcnRGaWVsZDogXCJzb3J0XCIsXG4gICAgICBjbG9zZUFmdGVyU2VsZWN0OiBmYWxzZSxcbiAgICAgIG9wdGdyb3Vwczogc2VsZWN0T3B0aW9ucy5vcHRncm91cHMsXG4gICAgICBvcHRncm91cEZpZWxkOiBcImdyb3VwXCIsXG4gICAgICBwbHVnaW5zOiB7XG4gICAgICAgIGNoZWNrYm94X29wdGlvbnM6IHt9XG4gICAgICB9LFxuICAgICAgcmVuZGVyOiB7XG4gICAgICAgIG9wdGdyb3VwX2hlYWRlcjogZnVuY3Rpb24oZGF0YSwgZXNjYXBlKSB7XG4gICAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIGFsbCBvcHRpb25zIGZvciBncm91cCBhcmUgY2hlY2tlZFxuICAgICAgICAgIGNvbnN0IGdyb3VwT3B0aW9ucyA9XG4gICAgICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMub3B0aW9ucylcbiAgICAgICAgICAgIC5maWx0ZXIoeCA9PiB4Lmdyb3VwLmluY2x1ZGVzKGRhdGEudmFsdWUpKTtcbiAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldFZhbHVlKCkuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgIGNvbnN0IGFsbENoZWNrZWQgPVxuICAgICAgICAgICAgZ3JvdXBPcHRpb25zLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIGdyb3VwT3B0aW9ucy5ldmVyeSh4ID0+IHZhbHVlcy5pbmNsdWRlcyh4LnZhbHVlKSk7XG4gICAgICAgICAgLy8gcmV0dXJuIEhUTUwgZm9yIGhlYWRlclxuICAgICAgICAgIHJldHVybiBcIlwiICtcbiAgICAgICAgICAgIFwiPGRpdiBjbGFzcz1cXFwib3B0Z3JvdXAtaGVhZGVyXFxcIiBcIiArXG4gICAgICAgICAgICBgZGF0YS1ncm91cD1cIiR7ZXNjYXBlKGRhdGEudmFsdWUpfVwiPmAgK1xuICAgICAgICAgICAgXCI8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNsYXNzPVxcXCJ0b21zZWxlY3QtY2hlY2tib3hcXFwiXCIgK1xuICAgICAgICAgICAgYCR7YWxsQ2hlY2tlZCA/IFwiY2hlY2tlZFwiIDogXCJcIn0+YCArXG4gICAgICAgICAgICBgPHNwYW4+JHtlc2NhcGUoZGF0YS52YWx1ZSl9PC9zcGFuPjwvZGl2PmA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkluaXRpYWxpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBldmVudCBsaXN0ZW5lcnMgZm9yIGNoZWNrYm94ZXMgaW4gb3B0aW9uIGdyb3VwIGhlYWRlcnNcbiAgICAgICAgdGhpcy5kcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBlLnRhcmdldCAmJlxuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJvcHRncm91cC1oZWFkZXJcIilcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIGRlZmluZSB2YXJpYWJsZXNcbiAgICAgICAgICAgIGxldCBncm91cCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1ncm91cFwiKTtcbiAgICAgICAgICAgIGxldCBjaGVja2JveCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW5bMF07XG4gICAgICAgICAgICAvLyBpZiBjbGlja2VkIG9uIHRleHQgbGFiZWwsIHRoZW4gYWx0ZXIgY2hlY2tib3hcbiAgICAgICAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9tc2VsZWN0LWNoZWNrYm94XCIpKSB7XG4gICAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSAhY2hlY2tib3guY2hlY2tlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGRldGVybWluZSBpZiBpdGVtcyBzaG91bGQgYmUgYWRkZWQgb3IgcmVtb3ZlZFxuICAgICAgICAgICAgbGV0IGlzQ2hlY2tlZCA9IGNoZWNrYm94LmNoZWNrZWQ7XG4gICAgICAgICAgICAvLyBhZGQgb3IgcmVtb3ZlIGl0ZW1zXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlkIGluIHRoaXMub3B0aW9ucykge1xuICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zW2lkXS5ncm91cC5pbmNsdWRlcyhncm91cCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmFkZEl0ZW0odGhpcy5vcHRpb25zW2lkXS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbSh0aGlzLm9wdGlvbnNbaWRdLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGtlZXAgdGhlIGRyb3Bkb3duIG9wZW4gYWZ0ZXIgY2xpY2tpbmcgdGhlIGdyb3VwIGNoZWNrYm94XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgb25JdGVtQWRkOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZUxheWVySWRzLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgICB0aGlzLnNob3dMYXllck9uTWVudSh2YWx1ZSk7XG4gICAgICAgICAgdGhpcy5tb3ZlTGF5ZXJPbk1hcCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKEhUTUxXaWRnZXRzLnNoaW55TW9kZSkge1xuICAgICAgICAgICAgU2hpbnkuc2V0SW5wdXRWYWx1ZShcbiAgICAgICAgICAgICAgYCR7ZWxlbWVudC5pZH1fc3luY2AsXG4gICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICB7cHJpb3JpdHk6IFwiZXZlbnRcIn1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25JdGVtUmVtb3ZlOiAodmFsdWUpID0+IHtcbiAgICAgICAgdGhpcy5oaWRlTGF5ZXJPbk1lbnUodmFsdWUsIHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGFkZCBwb3B1cCB0byBtYXBcbiAgICBhZGRQb3B1cCh0aGlzLl9tYXAsIHRoaXMuX21ldGFkYXRhLCBwcm9qZWN0LnpvbmVzKTtcbiAgICAvLyBhZGQgbW91c2UgZXZlbnRzIHRvIG1hcFxuICAgIGFkZE1vdXNlRXZlbnRzKHRoaXMuX21hcCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbGF5ZXIgdG8gdGhlIE1hcHBlciBvYmplY3QuIE5vdGUgdGhhdCBpZiBhZGRpbmcgdGhpcyBuZXcgbGF5ZXJcbiAgICogd291bGQgZXhjZWVkIHRoZSBtYXhpbXVtIG51bWJlciBvZiBwZXJtaXR0ZWQgYWN0aXZlIGxheWVycywgdGhlblxuICAgKiB0aGUgb2xkZXN0IGFjdGl2ZSBsYXllciB3aWxsIGJlIHJlbW92ZWQgYXV0b21hdGljYWxseS5cbiAgICogQHBhcmFtIHtPYmplY3R9IGxheWVyIC0gT2JqZWN0IHRoYXQgaXMgYSBsb2NrIG9yIGEgc29sdXRpb24uXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBhZGRMYXllcihsYXllcikge1xuICAgIC8vIGFkZCBsYXllciB0byBtZXRhZGF0YVxuICAgIHRoaXMuX21ldGFkYXRhLnNldChcImx5ci1cIiArIGxheWVyLmlkLCBnZXRNZXRhZGF0YShsYXllcikpO1xuICAgIC8vIGNyZWF0ZSBtZW51IGl0ZW1cbiAgICBsZXQgZWwgPSBjcmVhdGVNZW51SXRlbShsYXllciwgdGhpcyk7XG4gICAgLy8gYWRkIG1lbnUgaXRlbSB0byBoaWRkZW4gbWVudSBpdGVtc1xuICAgIHRoaXMuX2hpZGRlbkxheWVycy5zZXQoZWwuZGF0YXNldC5pZCwgZWwpO1xuICAgIC8vIHNldCBsYXllciBhcyBhY3RpdmVcbiAgICB0aGlzLl9hY3RpdmVMYXllcklkcy5hZGQoZWwuZGF0YXNldC5pZCk7XG4gICAgLy8gYWRkIGxheWVyIHRvIG1lbnVcbiAgICB0aGlzLnNob3dMYXllck9uTWVudShlbC5kYXRhc2V0LmlkLCB0cnVlLCBmYWxzZSk7XG4gICAgLy8gYWRkIG1lbnUgaXRlbSB0byBzZWxlY3RcbiAgICB0aGlzLl9zZWxlY3QudG9tc2VsZWN0LmFkZE9wdGlvbihzZWxlY3RPcHRpb24obGF5ZXIpKTtcbiAgICB0aGlzLl9zZWxlY3QudG9tc2VsZWN0LmFkZEl0ZW0obGF5ZXIuaWQsIHRydWUpO1xuICAgIC8vIGlmIG51bWJlciBvZiBhY3RpdmUgbGF5ZXJzIGV4Y2VlZHMgbGltaXQsIHRoZW4gcmVtb3ZlIG9sZGVzdCBsYXllclxuICAgIGlmICh0aGlzLl9hY3RpdmVMYXllcklkcy5zaXplID4gdGhpcy5fbWF4TGF5ZXJzKSB7XG4gICAgICBsZXQgcmVtb3ZlSWQgPSB0aGlzLl9hY3RpdmVMYXllcklkcy52YWx1ZXMoKS5uZXh0KCkudmFsdWU7XG4gICAgICB0aGlzLnJlbW92ZUxheWVyRnJvbU1hcChyZW1vdmVJZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgbGF5ZXIgb24gbWVudS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGxheWVySWQgLSBIVE1MIGlkZW50aWZpZXIgZm9yIGxheWVyLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVwZGF0ZU1hcCAtIFNob3VsZCB0aGUgbWFwIGFsc28gYmUgdXBkYXRlZCB0byByZWZsZWN0XG4gICAqIHRoZXNlIGNoYW5nZXMgdG8gdGhlIG1lbnU/XG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBoaWRlTGF5ZXJPbk1lbnUobGF5ZXJJZCwgdXBkYXRlTWFwID0gdHJ1ZSkge1xuICAgIC8vIGZpbmQgZWxlbWVudCBmb3IgbGF5ZXIncyBtZW51IGl0ZW1cbiAgICBsZXQgZWwgPSB0aGlzLl9tZW51LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtsYXllcklkfVwiXWApO1xuICAgIC8vIHVwZGF0ZSBtZW51XG4gICAgaWYgKGVsKSB7XG4gICAgICAvLyByZW1vdmUgZWxlbWVudCBmcm9tIG1lbnVcbiAgICAgIGVsLnJlbW92ZSgpO1xuICAgICAgLy8gYWRkIG1lbnUgaXRlbSB0byBoaWRkZW4gbWVudSBpdGVtc1xuICAgICAgdGhpcy5faGlkZGVuTGF5ZXJzLnNldChlbC5kYXRhc2V0LmlkLCBlbCk7XG4gICAgfVxuICAgIC8vIGlmIG5lZWRlZCwgdXBkYXRlIG1hcFxuICAgIGlmICh1cGRhdGVNYXAgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuaGlkZUxheWVyT25NYXAobGF5ZXJJZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgbGF5ZXIgb24gbWVudS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGxheWVySWQgLSBIVE1MIGlkZW50aWZpZXIgZm9yIGxheWVyLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNob3dMZWdlbmQgLSBTaG91bGQgdGhlIGxlZ2VuZCBiZSBzaG93biBvbiB0aGUgbWVudT9cbiAgICogQHBhcmFtIHtib29sZWFufSB1cGRhdGVNYXAgLSBTaG91bGQgdGhlIG1hcCBhbHNvIGJlIHVwZGF0ZWQgdG8gcmVmbGVjdFxuICAgKiB0aGVzZSBjaGFuZ2VzIHRvIHRoZSBtZW51P1xuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgc2hvd0xheWVyT25NZW51KGxheWVySWQsIHNob3dMZWdlbmQgPSB0cnVlLCB1cGRhdGVNYXAgPSB0cnVlKSB7XG4gICAgLy8gZmluZCBlbGVtZW50IGZvciBsYXllcidzIG1lbnUgaXRlbVxuICAgIGxldCBlbCA9IHRoaXMuX2hpZGRlbkxheWVycy5nZXQobGF5ZXJJZCk7XG4gICAgLy8gZmluZCBtZW51IGl0ZW0gY2hlY2tib3ggZm9yIHNob3dpbmcgbWFwIGFuZCBzZXQgYWNjb3JkaW5nbHlcbiAgICBsZXQgbGF5ZXJUcmlzdGF0ZSA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIubGF5ZXItdHJpc3RhdGVcIik7XG4gICAgbGF5ZXJUcmlzdGF0ZS52YWx1ZSA9IFwic2hvd1wiO1xuICAgIC8vIGZpbmQgbWVudSBpdGVtIGNoZWNrYm94IGZvciBzaG93aW5nIGxlZ2VuZCBhbmQgc2V0IGFjY29yZGluZ2x5XG4gICAgbGV0IGxlZ2VuZENoZWNrYm94ID0gZWwucXVlcnlTZWxlY3RvcihcIi5sZWdlbmQtY2hlY2tib3hcIik7XG4gICAgaWYgKHNob3dMZWdlbmQgPT09IHRydWUpIHtcbiAgICAgIGxlZ2VuZENoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBpZiBuZWVkZWQsIHNob3cgbGF5ZXIgb24gbWFwXG4gICAgaWYgKHVwZGF0ZU1hcCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5zaG93TGF5ZXJPbk1hcChsYXllcklkKTtcbiAgICB9XG4gICAgLy8gYWRkIGxheWVyIHRvIG1lbnVcbiAgICB0aGlzLl9tZW51LnByZXBlbmQoZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgbGF5ZXIgb24gbWFwLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGF5ZXJJZCAtIEhUTUwgaWRlbnRpZmllciBmb3IgbGF5ZXIuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBzaG93TGF5ZXJPbk1hcChsYXllcklkKSB7XG4gICAgLy8gc2V0IGxheWVyIHZpc2liaWxpdHkgb24gbWFwXG4gICAgdGhpcy5fbWFwLm1hcC5zZXRMYXlvdXRQcm9wZXJ0eShcbiAgICAgIFwibHlyLVwiICsgbGF5ZXJJZCwgXCJ2aXNpYmlsaXR5XCIsIFwidmlzaWJsZVwiXG4gICAgKTtcbiAgICAvLyByZW1vdmUgaGlnaGxpZ2h0XG4gICAgdGhpcy5fbWFwLm1hcC5zZXRQYWludFByb3BlcnR5KFxuICAgICAgXCJseXItXCIgKyBsYXllcklkLCBcImZpbGwtb3V0bGluZS1jb2xvclwiLCB1bmRlZmluZWRcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICogSGlkZSBsYXllciBvbiBtYXAuXG4gICogQHBhcmFtIHtzdHJpbmd9IGxheWVySWQgLSBIVE1MIGlkZW50aWZpZXIgZm9yIGxheWVyLjtcbiAgKiBAcmV0dXJuIHt2b2lkfVxuICAqL1xuICBoaWRlTGF5ZXJPbk1hcChsYXllcklkKSB7XG4gICAgLy8gc2V0IGxheWVyIHZpc2liaWxpdHkgb24gbWFwXG4gICAgdGhpcy5fbWFwLm1hcC5zZXRMYXlvdXRQcm9wZXJ0eShcbiAgICAgIFwibHlyLVwiICsgbGF5ZXJJZCwgXCJ2aXNpYmlsaXR5XCIsIFwibm9uZVwiXG4gICAgKTtcbiAgICAvLyByZW1vdmUgaGlnaGxpZ2h0XG4gICAgdGhpcy5fbWFwLm1hcC5zZXRQYWludFByb3BlcnR5KFxuICAgICAgXCJseXItXCIgKyBsYXllcklkLCBcImZpbGwtb3V0bGluZS1jb2xvclwiLCB1bmRlZmluZWRcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICogSGlnaGxpZ2h0IGxheWVyIG9uIG1hcC5cbiAgKiBAcGFyYW0ge3N0cmluZ30gbGF5ZXJJZCAtIEhUTUwgaWRlbnRpZmllciBmb3IgbGF5ZXIuO1xuICAqIEByZXR1cm4ge3ZvaWR9XG4gICovXG4gIGhpZ2hsaWdodExheWVyT25NYXAobGF5ZXJJZCkge1xuICAgIC8vIHNldCBsYXllciB2aXNpYmlsaXR5IG9uIG1hcFxuICAgIHRoaXMuX21hcC5tYXAuc2V0TGF5b3V0UHJvcGVydHkoXG4gICAgICBcImx5ci1cIiArIGxheWVySWQsIFwidmlzaWJpbGl0eVwiLCBcInZpc2libGVcIlxuICAgICk7XG4gICAgLy8gYWRkIGhpZ2hsaWdodFxuICAgIHRoaXMuX21hcC5tYXAuc2V0UGFpbnRQcm9wZXJ0eShcbiAgICAgIFwibHlyLVwiICsgbGF5ZXJJZCwgXCJmaWxsLW91dGxpbmUtY29sb3JcIixcbiAgICAgIFtcbiAgICAgICAgXCJjYXNlXCIsXG4gICAgICAgIFtcIj09XCIsIFtcImdldFwiLCB0aGlzLl9tZXRhZGF0YS5nZXQoXCJseXItXCIgKyBsYXllcklkKS5jb2x1bW5dLCBudWxsXSxcbiAgICAgICAgXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICBcIiNGRkZGMDBcIlxuICAgICAgXVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZSBsYXllciBvbiBtYXAuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYXllcklkIC0gSFRNTCBpZGVudGlmaWVyIGZvciBsYXllciB0byB1cGRhdGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBiZWZvcmVJZCAtIEhUTUwgaWRlbnRpZmllciBmb3IgdGhlIGxheWVyIHRoYXQgc2hvdWxkIGJlXG4gICAqIGBsYXllcklkYCBzaG91bGQgYmUgaW5zZXJ0ZWQgYmVmb3JlIChpbiBvdGhlciB3b3JkcywgYGxheWVySWRgIHdpbGwgYXBwZWFyXG4gICAqIHVuZGVyIGBiZWZvcmVJZGApLiBJZiBgYmVmb3JlSWQgPSB1bmRlZmluZWRgLCB0aGVuIHRoZSBsYXllciBpcyBtb3ZlZCB0b1xuICAgKiB0aGUgdmVyeSB0b3AuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBtb3ZlTGF5ZXJPbk1hcChsYXllcklkLCBiZWZvcmVJZCkge1xuICAgIC8vIG1vdmUgbGF5ZXIgb24gbWFwXG4gICAgaWYgKHR5cGVvZihiZWZvcmVJZCkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRoaXMuX21hcC5tYXAubW92ZUxheWVyKFwibHlyLVwiICsgbGF5ZXJJZCwgXCJseXItXCIgKyBiZWZvcmVJZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX21hcC5tYXAubW92ZUxheWVyKFwibHlyLVwiICsgbGF5ZXJJZCwgdW5kZWZpbmVkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGxheWVyIG9uIG1hcC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGxheWVySWQgLSBIVE1MIGlkZW50aWZpZXIgZm9yIGxheWVyLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgcmVtb3ZlTGF5ZXJGcm9tTWFwKGxheWVySWQpIHtcbiAgICAvLyByZW1vdmUgbGF5ZXIgZnJvbSBtZW51XG4gICAgdGhpcy5fc2VsZWN0LnRvbXNlbGVjdC5yZW1vdmVJdGVtKGxheWVySWQpO1xuICAgIC8vIHJlbW92ZSBsYXllciBmcm9tIHNldCBvZiBhY3RpdmUgbGF5ZXJzXG4gICAgdGhpcy5fYWN0aXZlTGF5ZXJJZHMuZGVsZXRlKGxheWVySWQpO1xuICAgIC8vIHJlbW92ZSBsYXllciBmcm9tIG1hcFxuICAgIHRoaXMuX21hcC5tYXAucmVtb3ZlTGF5ZXIoXCJseXItXCIgKyBsYXllcklkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEb2VzIHRoZSBtYXAgaGF2ZSBhIHBhcnRpY3VsYXIgbGF5ZXIgYWN0aXZlP1xuICAgKiBAcGFyYW0ge3N0cmluZ30gbGF5ZXJJZCAtIEhUTUwgaWRlbnRpZmllciBmb3IgbGF5ZXIuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBoYXNMYXllckFjdGl2ZShsYXllcklkKSB7XG4gICAgdGhpcy5fYWN0aXZlTGF5ZXJJZHMuaGFzKGxheWVyX2lkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IGFsbCBtZW51IGxheWVycyBvbiBtYXAuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICAgc2hvd0FsbE1lbnVMYXllcnNPbk1hcCgpIHtcbiAgICB0aGlzLl9tZW51XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5tYXBwZXItbWVudS1pdGVtXCIpXG4gICAgICAuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICB0aGlzLnNob3dMYXllck9uTWFwKHguZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSk7XG4gICAgICAgIHgucXVlcnlTZWxlY3RvcihcIi5sYXllci10cmlzdGF0ZVwiKS52YWx1ZSA9IFwic2hvd1wiO1xuICAgICAgfSk7XG4gICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgYWxsIG1lbnUgbGF5ZXJzIG9uIG1hcC5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gICBoaWRlQWxsTWVudUxheWVyc09uTWFwKCkge1xuICAgIHRoaXMuX21lbnVcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1hcHBlci1tZW51LWl0ZW1cIilcbiAgICAgIC5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICAgIHRoaXMuaGlkZUxheWVyT25NYXAoeC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpKTtcbiAgICAgICAgeC5xdWVyeVNlbGVjdG9yKFwiLmxheWVyLXRyaXN0YXRlXCIpLnZhbHVlID0gXCJoaWRlXCI7XG4gICAgICB9KTtcbiAgIH1cblxuICAvKipcbiAgICogSGlnaGxpZ2h0IGFsbCBtZW51IGxheWVycyBvbiBtYXAuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICAgaGlnaGxpZ2h0QWxsTWVudUxheWVyc09uTWFwKCkge1xuICAgIHRoaXMuX21lbnVcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1hcHBlci1tZW51LWl0ZW1cIilcbiAgICAgIC5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0TGF5ZXJPbk1hcCh4LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikpO1xuICAgICAgICB4LnF1ZXJ5U2VsZWN0b3IoXCIubGF5ZXItdHJpc3RhdGVcIikudmFsdWUgPSBcImhpZ2hsaWdodFwiO1xuICAgICAgfSk7XG4gICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgbGF5ZXJzIGZyb20gdGhlIG1lbnUgYW5kIHRoZSBtYXAuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICAgcmVtb3ZlQWxsTGF5ZXJzRnJvbU1lbnVBbmRNYXAoKSB7XG4gICAgdGhpcy5fbWVudVxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFwcGVyLW1lbnUtaXRlbVwiKVxuICAgICAgLmZvckVhY2goKHgpID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVMYXllckZyb21NYXAoeC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpKTtcbiAgICAgIH0pXG4gICB9XG5cbn1cbiIsIi8qKiBJbXBvcnQgZGVwZW5kZW5jaWVzICovXG4vLyBmdW5jdGlvbnMgdG8gY3JlYXRlIGVsZW1lbnRzXG5pbXBvcnQge2NyZWF0ZUxlZ2VuZH0gZnJvbSBcIi4vY3JlYXRlLWxlZ2VuZC5qc1wiO1xuaW1wb3J0IHtjcmVhdGVQcm92ZW5hbmNlfSBmcm9tIFwiLi4vdXRpbHMvZWxlbWVudC5qc1wiO1xuaW1wb3J0IHtjcmVhdGVOYW1lTGFiZWx9IGZyb20gXCIuLi91dGlscy9lbGVtZW50LmpzXCI7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IG1lbnUgaXRlbS5cbiAqIEBwYXJhbSB7b2JqZWN0fSB4IC0gT2JqZWN0IHdpdGggbWVudSBpdGVtIGluZm9ybWF0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IHguaWQgLSBIVE1MIGVsZW1lbnQgaWRlbnRpZmllciBmb3IgdGhlIG1lbnUgaXRlbS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB4Lm5hbWUgLSBOYW1lIGZvciB0aGUgbWVudSBpdGVtLlxuICogQHBhcmFtIHtvYmplY3R9IHgubGF5ZXIgLSB7QGxpbmsgTGF5ZXJ9IG9iamVjdC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB4LmNsYXNzIC0gQ2xhc3MgZm9yIGxheWVyLiBBdmFpbGFibGUgb3B0aW9ucyBpbmNsdWRlXG4gKiBgXCJGZWF0dXJlXCJgLCBgXCJDb3N0XCJgLCBgXCJMb2NrXCJgLCBhbmQgYFwiU29sdXRpb25cImAuXG4gKiBAcGFyYW0ge29iamVjdH0gbWFwcGVyIC0ge0BsaW5rIE1hcHBlcn0gb2JqZWN0LlxuICogQHBhcmFtIHtBcnJheTxvYmplY3Q+fSB0aGVtZXMgLSBUaGVtZXMgdG8gd2hpY2ggdGhlIG1lbnUgaXRlbSBiZWxvbmdzLlxuICogTm90ZSB0aGF0IHRoaXMgaXMgdGhlIG5hbWVzIG9mIHRoZSB0aGVtZXMgZm9yIGZlYXR1cmUgbGF5ZXJzLlxuICogQHJldHVyblxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0oeCwgbWFwcGVyLCB0aGVtZXMgPSB1bmRlZmluZWQpIHtcbiAgLy8gaW5pdGlhbGl6ZSBjb250YWluZXIgZWxlbWVudFxuICBsZXQgZWwgPSBkb2N1bWVudC5pbXBvcnROb2RlKFxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5cIiArIHguY2xhc3MudG9Mb3dlckNhc2UoKSArIFwiLWxheWVyLXRlbXBsYXRlXCIpXG4gICAgICAuY29udGVudCxcbiAgICB0cnVlKS5jaGlsZHJlblswXTtcblxuICAvLyBmaW5kIGNvbXBvbmVudHMgb2YgY29udGFpbmVyIGVsZW1lbnRcbiAgbGV0IHNob3dMZWdlbmRDaGVja2JveCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIubGVnZW5kLWNoZWNrYm94XCIpO1xuICBsZXQgc2hvd0xheWVyVHJpc3RhdGUgPSBlbC5xdWVyeVNlbGVjdG9yKFwiLmxheWVyLXRyaXN0YXRlXCIpO1xuICBsZXQgcmVtb3ZlTGF5ZXJGcm9tTWFwQnV0dG9uID0gZWwucXVlcnlTZWxlY3RvcihcIi5sYXllci1idXR0b25cIik7XG4gIGxldCBsZWdlbmRFbGVtZW50ID0gZWwucXVlcnlTZWxlY3RvcihcIi5sZWdlbmQtY29udGFpbmVyXCIpO1xuICBsZXQgbmFtZUVsZW1lbnQgPSBlbC5xdWVyeVNlbGVjdG9yKFwiLm5hbWUtY29udGFpbmVyXCIpO1xuICBsZXQgcHJvdmVuYW5jZUVsZW1lbnQgPSBlbC5xdWVyeVNlbGVjdG9yKFwiLnByb3ZlbmFuY2UtY29udGFpbmVyXCIpO1xuICBsZXQgaGFuZGxlRWxlbWVudCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIuaGFuZGxlXCIpO1xuXG4gIC8vIHNldCBsYXllciBpZFxuICBlbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIHguaWQpO1xuXG4gIC8vIGNyZWF0ZSBuYW1lIGxhYmVsXG4gIG5hbWVFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hbWVMYWJlbCh4KSk7XG5cbiAgLy8gc2V0IGxheWVyIGNoZWNrYm94IHN0YXR1c1xuICBzaG93TGF5ZXJUcmlzdGF0ZS52YWx1ZSA9IFwic2hvd1wiO1xuXG4gIC8vIHNldCBsZWdlbmQgY2hlY2tib3hcbiAgc2hvd0xlZ2VuZENoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuXG4gIC8vIGFkZCBsZWdlbmRcbiAgbGVnZW5kRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVMZWdlbmQoeC5sYXllci5sZWdlbmQpKTtcblxuICAvLyBhZGQgcHJvdmVuYW5jZVxuICBwcm92ZW5hbmNlRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVQcm92ZW5hbmNlKHgubGF5ZXIucHJvdmVuYW5jZSkpO1xuXG4gIC8vIHNldCBsaXN0ZW5lciBmb3IgY2hlY2tib3ggdG8gc2hvdy9oaWRlIGxlZ2VuZFxuICBzaG93TGVnZW5kQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgbGVnZW5kRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZWdlbmRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIHNldCBsaXN0ZW5lciBmb3IgYnV0dG9uIHRvIGhpZGUgbGF5ZXJcbiAgc2hvd0xheWVyVHJpc3RhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBzd2l0Y2ggKHRoaXMudmFsdWUpIHtcbiAgICAgIGNhc2UgXCJzaG93XCI6XG4gICAgICAgIHRoaXMudmFsdWUgPSBcImhpZGVcIjtcbiAgICAgICAgbWFwcGVyLmhpZGVMYXllck9uTWFwKHguaWQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJoaWRlXCI6XG4gICAgICAgIHRoaXMudmFsdWUgPSBcImhpZ2hsaWdodFwiO1xuICAgICAgICBtYXBwZXIuaGlnaGxpZ2h0TGF5ZXJPbk1hcCh4LmlkKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiaGlnaGxpZ2h0XCI6XG4gICAgICAgIHRoaXMudmFsdWUgPSBcInNob3dcIjtcbiAgICAgICAgbWFwcGVyLnNob3dMYXllck9uTWFwKHguaWQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMudmFsdWUgPSBcInNob3dcIjtcbiAgICAgICAgbWFwcGVyLnNob3dMYXllck9uTWFwKHguaWQpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gc2V0IGxpc3RlbmVyIGZvciBidXR0b24gdG8gZHJvcCBsYXllclxuICByZW1vdmVMYXllckZyb21NYXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBtYXBwZXIuX3NlbGVjdC50b21zZWxlY3QucmVtb3ZlSXRlbSh4LmlkKTtcbiAgfSk7XG5cbiAgLy8gcmV0dXJuIGVsZW1lbnRcbiAgcmV0dXJuIGVsO1xufTtcbiIsIi8qKiBJbXBvcnQgZGVwZW5kZW5jaWVzICovXG4vLyBzdHlsaW5nXG5pbXBvcnQgXCIuL2Nzcy9zdHlsZS5jc3NcIjtcblxuLyoqXG4gKiBBZGQgYSB0b29sIHRpcC5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBIVE1MIGVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIHRvb2wgdGlwLjtcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCB0byBkaXNwbGF5IGluIHRvb2wgdGlwLlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvb2x0aXAoZWxlbWVudCwgdGV4dCkge1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdG9nZ2xlXCIsIFwidG9vbHRpcFwiKTtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBsYWNlbWVudFwiLCBcInRvcFwiKTtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbnRhaW5lclwiLCBcImJvZHlcIik7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgdGV4dCk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcHJvdmVuYW5jZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSB4IC0gT2JqZWN0IHdpdGggcHJvcGVydGllcyBmb3IgY3VzdG9taXphdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSB4LmRlc2NyaXB0aW9uIC0gVGV4dCB0byBkaXNwbGF5IGluIHRvb2wgdGlwLlxuICogQHBhcmFtIHtzdHJpbmd9IHguaWNvbiAtIE5hbWUgb2YgRm9udCBBd2Vzb21lIGljb24uXG4gKiBAcGFyYW0ge3N0cmluZ30geC5jb2xvciAtIENvbG9yIGZvciBpY29uLlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm92ZW5hbmNlKHgpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGVsLmNsYXNzTGlzdC5hZGQoXCJwcm92ZW5hbmNlXCIpO1xuICBpZiAodHlwZW9mKHguZGVzY3JpcHRpb24pID09PSBcInN0cmluZ1wiKSB7XG4gICAgYWRkVG9vbHRpcChlbCwgeC5kZXNjcmlwdGlvbik7XG4gIH1cbiAgZWwuY2xhc3NMaXN0LmFkZChcImZhc1wiKTtcbiAgZWwuY2xhc3NMaXN0LmFkZChcImZhLVwiICsgeC5pY29uKTtcbiAgZWwuc3R5bGUuY29sb3IgPSB4LmNvbG9yO1xuICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgbmFtZSBsYWJlbC5cbiAqIEBwYXJhbSB7b2JqZWN0fSB4IC0gT2JqZWN0IHdpdGggcHJvcGVydGllcyBmb3IgY3VzdG9taXphdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSB4LmRlc2NyaXB0aW9uIC0gVGV4dCB0byBkaXNwbGF5IGluIHRvb2wgdGlwLlxuICogQHBhcmFtIHtzdHJpbmd9IHguaWNvbiAtIE5hbWUgb2YgRm9udCBBd2Vzb21lIGljb24uXG4gKiBAcGFyYW0ge3N0cmluZ30geC5jb2xvciAtIENvbG9yIGZvciBpY29uLlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOYW1lTGFiZWwoeCkge1xuICAvLyBjcmVhdGUgZWxlbWVudFxuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGVsLmNsYXNzTGlzdC5hZGQoXCJuYW1lLWxhYmVsXCIpO1xuICAvLyBzZXQgbGF5ZXIgbmFtZVxuICBlbC5pbm5lclRleHQgPSB4Lm5hbWU7XG4gIC8vIGluaXRpYWxpemUgcG9wdXAgdGV4dFxuICBsZXQgdGl0bGUgPSBcIlwiO1xuICAvLyBpZiBuZWVkZWQsIGFkZCB0aGVtZSBpbmZvcm1hdGlvbiB0byBwb3B1cCB0ZXh0XG4gIGlmICh0eXBlb2YoeC50aGVtZXMpID09PSBcIm9iamVjdFwiKSB7XG4gICAgdGl0bGUgKz0gYFRoaXMgJHt4LmNsYXNzfSBiZWxvbmdzIHRvIHRoZSBmb2xsb3dpbmcgdGhlbWVzOmA7XG4gICAgdGl0bGUgKz0gYCAke3gudGhlbWVzWzBdLm5hbWV9ICgke3gudGhlbWVzWzBdLnpvbmV9IHpvbmUpYDtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHgudGhlbWVzLmxlbmd0aDsgKytpKSB7XG4gICAgICB0aXRsZSArPSBgLCAke3gudGhlbWVzW2ldLm5hbWV9ICgke3gudGhlbWVzW2ldLnpvbmV9IHpvbmUpYDtcbiAgICB9XG4gIH1cbiAgLy8gaWYgbmVlZGVkLCBhZGQgZGV0YWlscyB0byBwb3B1cCB0ZXh0XG4gIGlmICh0eXBlb2YoeC5sYXllcikgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mKHgubGF5ZXIuZGV0YWlscykgPT09IFwic3RyaW5nXCIpIHtcbiAgICBpZiAodGl0bGUubGVuZ3RoID4gMCkge1xuICAgICAgdGl0bGUgKz0gXCIgXCI7XG4gICAgfVxuICAgIHRpdGxlICs9IHgubGF5ZXIuZGV0YWlscztcbiAgfVxuICAvLyBpZiBuZWVkZWQsIGluaXRpYWxpemUgcG9wdXBcbiAgaWYgKHRpdGxlLmxlbmd0aCA+IDApIHtcbiAgICBhZGRUb29sdGlwKGVsLCB0aXRsZSArIFwiLlwiKTtcbiAgfVxuICAvLyByZXR1cm4gZWxlbWVudFxuICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgaGFuZGxlLlxuICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uIC0gVGV4dCB0byBkaXNwbGF5IGluIHRvb2wgdGlwLlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIYW5kbGUoZGVzY3JpcHRpb24pIHtcbiAgLy8gY3JlYXRlIGVsZW1lbnRcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWwuY2xhc3NMaXN0LmFkZChcImhhbmRsZVwiKTtcbiAgLy8gY3JlYXRlIGljb25cbiAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgaWYgKHR5cGVvZihkZXNjcmlwdGlvbikgPT09IFwic3RyaW5nXCIpIHtcbiAgICBhZGRUb29sdGlwKGVsLCBkZXNjcmlwdGlvbik7XG4gIH1cbiAgaWNvbi5jbGFzc0xpc3QuYWRkKFwiZmFzXCIsIFwiZmEtYXJyb3dzLWFsdFwiKTtcbiAgaWNvbi5zdHlsZS5jb2xvciA9IFwiLS1oYW5kbGVcIjtcbiAgLy8gYXBwZW5kIGljb24gdG8gZWxlbWVudFxuICBlbC5hcHBlbmRDaGlsZChpY29uKTtcbiAgLy8gcmV0dXJuIGVsZW1lbnRcbiAgcmV0dXJuIGVsO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIHNldCBvZiBzd2l0Y2hlc1xuICogQHBhcmFtIHtudW1iZXJ9IG4gLSBOdW1iZXIgb2Ygc3dpdGNoZXMgdG8gY3JlYXRlLlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTd2l0Y2hlcyhuID0gMSwgY2hlY2tlZCA9IHRydWUpIHtcbiAgLy8gY3JlYXRlIGNvbnRhaW5lclxuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbC5jbGFzc0xpc3QuYWRkKFwic3dpdGNoZXNcIik7XG4gIC8vIGNyZWF0ZSBzd2l0Y2hlc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgIC8vIGNyZWF0ZSBzd2l0Y2ggZm9ybVxuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNoZWNrXCIsIFwiZm9ybS1zd2l0Y2hcIiwgXCJwLTBcIiwgXCJtLTBcIik7XG4gICAgLy8gY3JlYXRlIHN3aXRjaCBpbnB1dFxuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImZvcm0tY2hlY2staW5wdXRcIiwgXCJzd2l0Y2hcIiwgXCJtcy0wXCIpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJzd2l0Y2hcIik7XG4gICAgaW5wdXQuY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgLy8gYXBwZW5kIGVsZW1lbnRcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBlbC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgfVxuICAvLyByZXR1cm4gZWxlbWVudFxuICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogQ3JlYXRlIGJ1dHRvbiBncm91cFxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBncm91cExhYmVscyAtIExhYmVsIGZvciBlYWNoIGJ1dHRvbiBncm91cC5cbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gYnV0dG9uTGFiZWxzIC0gTGFiZWwgZm9yIGVhY2ggb2YgdGhlIGJ1dHRvbnMuXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGdyb3VwQ29sb3JzIC0gQ29sb3JzIGZvciBncm91cCBsYWJlbHMuXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PHN0cmluZz4+fSB0b29sdGlwTGFiZWxzIC0gTGFiZWxzIGZvciB0b29sdGlwcy5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQnV0dG9uR3JvdXBzKFxuICBncm91cExhYmVscywgYnV0dG9uTGFiZWxzLCBncm91cENvbG9ycywgdG9vbHRpcExhYmVsc1xuKSB7XG4gIC8vIGNyZWF0ZSBjb250YWluZXJcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWwuY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1ncm91cHNcIiwgXCJib3JkZXJcIiwgXCJyb3VuZGVkXCIpO1xuICAvLyBhZGQgZWFjaCBncm91cFxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdyb3VwTGFiZWxzLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gY3JlYXRlIGJ1dHRvbiBncm91cFxuICAgIGxldCBncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3JvdXAuY2xhc3NMaXN0LmFkZChcImJ0bi1ncm91cFwiKTtcbiAgICAvLyBhZGQgYnV0dG9ucyB0byBjb250YWluZXJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJ1dHRvbkxhYmVscy5sZW5ndGg7ICsraikge1xuICAgICAgLy8gY3JlYXRlIGJ1dHRvbiB0ZXh0XG4gICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgc3Bhbi5pbm5lclRleHQgPSBidXR0b25MYWJlbHNbal07XG4gICAgICAvLyBjcmVhdGUgYnV0dG9uXG4gICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwiYnRuLXNtXCIpO1xuICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImRhdGEtZ3JvdXAtaW5kZXhcIiwgaSk7XG4gICAgICBidG4uc2V0QXR0cmlidXRlKFwiZGF0YS1ncm91cC1sYWJlbFwiLCBncm91cExhYmVsc1tpXSk7XG4gICAgICBidG4uc2V0QXR0cmlidXRlKFwiZGF0YS1sYWJlbFwiLCBidXR0b25MYWJlbHNbal0pO1xuICAgICAgYnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGdyb3VwQ29sb3JzW2ldO1xuICAgICAgYWRkVG9vbHRpcChidG4sIHRvb2x0aXBMYWJlbHNbaV1bal0pO1xuICAgICAgLy8gYXBwZW5kIGVsZW1lbnRzXG4gICAgICBidG4uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICBncm91cC5hcHBlbmRDaGlsZChidG4pO1xuICAgIH1cbiAgICAvLyBhZGQgdG8gZ3JvdXAgdG8gY29udGFpbmVyXG4gICAgZWwuYXBwZW5kQ2hpbGQoZ3JvdXApO1xuICB9XG4gIC8vIHJldHVybiBlbGVtZW50O1xuICByZXR1cm4gZWw7XG59XG4iLCIvKipcbiAqIEdldCBkYXRhIGZvciB2aXNpYmxlIGxheWVycyBhdCBhIHBvaW50LlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbWFwIC0gSFRNTCBlbGVtZW50IGZvciBtYXAuXG4gKiBAcGFyYW0ge01hcDxzdHJpbmcsc3RyaW5nPn0gbWV0YWRhdGEgLSBQcm9qZWN0IG1ldGFkYXRhLlxuICogQHBhcmFtIHtQb2ludH0gcG9pbnQgLSBNYXBib3hnbCBwb2ludCBvYmplY3QuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmlzaWJsZUxheWVyRGF0YUF0UG9pbnQoZWwsIG1ldGFkYXRhLCBwb2ludCkge1xuICAvLyBmaW5kIGxheWVycyB0aGF0IGFyZSB1bmRlcm5lYXRoIHRoZSBtb3VzZSBhbmQgYXJlIHZpc2libGVcbiAgY29uc3QgbGF5ZXJzID0gZ2V0VmlzaWJsZUxheWVyc0F0UG9pbnQoZWwsIHBvaW50KTtcbiAgLy8gcHJlcGFyZSBsYXllciBkYXRhXG4gIGNvbnN0IGRhdGEgPSBuZXcgTWFwKCk7XG4gIGxheWVycy5mb3JFYWNoKCh4KSA9PiB7XG4gICAgY29uc3QgbGF5ZXIgPSBtZXRhZGF0YS5nZXQoeC5sYXllci5pZCk7XG4gICAgY29uc3QgdmFsdWUgPSB4LnByb3BlcnRpZXNbbGF5ZXIuY29sdW1uXTtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZGF0YS5zZXQoXG4gICAgICAgIGxheWVyLm5hbWUsXG4gICAgICAgIHt2YWx1ZTogdmFsdWUsIGNsYXNzOiBsYXllci5jbGFzc31cbiAgICAgICk7XG4gICAgfVxuICB9KTtcbiAgLy8gcmV0dXJuIGRhdGFcbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogR2V0IHZpc2libGUgbGF5ZXJzIGF0IGEgcG9pbnQuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBtYXAgLSBIVE1MIGVsZW1lbnQgZm9yIG1hcC5cbiAqIEBwYXJhbSB7UG9pbnR9IHBvaW50IC0gTWFwYm94Z2wgcG9pbnQgb2JqZWN0LlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFZpc2libGVMYXllcnNBdFBvaW50KGVsLCBwb2ludCkge1xuICAvLyBmaW5kIGxheWVycyB0aGF0IGFyZSB1bmRlcm5lYXRoIHRoZSBtb3VzZSBhbmQgYXJlIHZpc2libGVcbiAgY29uc3QgbGF5ZXJzID1cbiAgICBlbC5tYXBcbiAgICAucXVlcnlSZW5kZXJlZEZlYXR1cmVzKHBvaW50KVxuICAgIC5maWx0ZXIoKHgpID0+IHtcbiAgICAgIHJldHVybiAoeC5sYXllci5sYXlvdXQudmlzaWJpbGl0eSA9PT0gXCJ2aXNpYmxlXCIpICYmXG4gICAgICAgICh4LmxheWVyLmlkICE9PSBcImJib3hcIik7XG4gICAgfSk7XG4gIC8vIHJldHVybiBsYXllcnNcbiAgcmV0dXJuIGxheWVycztcbn1cbiIsIi8qKlxuICogQ3JlYXRlIG1ldGFkYXRhIGZvciBsYXllciBpbiBhIHByb2plY3QuXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvamVjdCAtIFByb2plY3Qgb2JqZWN0LlxuICogQHBhcmFtIHtBcnJheTxvYmplY3Q+fSBwcm9qZWN0LmZlYXR1cmVzIC0gQXJyYXkgb2YgRmVhdHVyZSBvYmplY3RzLlxuICogQHBhcmFtIHtBcnJheTxvYmplY3Q+fSBwcm9qZWN0LmxvY2tzIC0gQXJyYXkgb2YgTG9jayBvYmplY3RzLlxuICogQHBhcmFtIHtBcnJheTxvYmplY3Q+fSBwcm9qZWN0LmNvc3RzIC0gQXJyYXkgb2YgQ29zdCBvYmplY3RzLlxuICogQHBhcmFtIHtBcnJheTxvYmplY3Q+fSBwcm9qZWN0LnNvbHV0aW9ucyAtIEFycmF5IG9mIFNvbHV0aW9uIG9iamVjdHMuXG4gKiBAcmV0dXJuIHtNYXA8c3RyaW5nLCBzdHJpbmc+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdE1ldGFkYXRhKHByb2plY3QpIHtcbiAgLy8gY3JlYXRlIG1hcCB3aXRoIGxheWVyIGlkZW50aWZpZXJzIGFuZCBuYW1lc1xuICBjb25zdCBvdXQgPSBuZXcgTWFwKCk7XG4gIC8vIGFkZCBtZXRhZGF0YSBmb3IgZmVhdHVyZXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LmZlYXR1cmVzLmxlbmd0aDsgKytpKSB7XG4gICAgb3V0LnNldChcbiAgICAgIFwibHlyLVwiICsgcHJvamVjdC5mZWF0dXJlc1tpXS5pZCxcbiAgICAgIGdldE1ldGFkYXRhKHByb2plY3QuZmVhdHVyZXNbaV0pXG4gICAgKTtcbiAgfVxuICAvLyBhZGQgbWV0YWRhdGEgZm9yIGxvY2tzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5sb2Nrcy5sZW5ndGg7ICsraSkge1xuICAgIG91dC5zZXQoXG4gICAgICBcImx5ci1cIiArIHByb2plY3QubG9ja3NbaV0uaWQsXG4gICAgICBnZXRNZXRhZGF0YShwcm9qZWN0LmxvY2tzW2ldKVxuICAgICk7XG4gIH1cbiAgLy8gYWRkIG1ldGFkYXRhIGZvciBjb3N0c1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QuY29zdHMubGVuZ3RoOyArK2kpIHtcbiAgICBvdXQuc2V0KFxuICAgICAgXCJseXItXCIgKyBwcm9qZWN0LmNvc3RzW2ldLmlkLFxuICAgICAgZ2V0TWV0YWRhdGEocHJvamVjdC5jb3N0c1tpXSlcbiAgICApO1xuICB9XG4gIC8vIGFkZCBtZXRhZGF0YSBmb3Igc29sdXRpb25zXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5zb2x1dGlvbnMubGVuZ3RoOyArK2kpIHtcbiAgICBvdXQuc2V0KFxuICAgICAgXCJseXItXCIgKyBwcm9qZWN0LnNvbHV0aW9uc1tpXS5pZCxcbiAgICAgIGdldE1ldGFkYXRhKHByb2plY3Quc29sdXRpb25zW2ldKVxuICAgICk7XG4gIH1cbiAgLy8gcmV0dXJuIHJlc3VsdFxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZSBtZXRhZGF0YSBmb3IgbGF5ZXIgaW4gYSBwcm9qZWN0LlxuICogQHBhcmFtIHtvYmplY3R9IGxheWVyIC0gTGF5ZXIgb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IGxheWVyLmlkIC0gSWRlbnRpZmllci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBsYXllci5jbGFzcyAtIENsYXNzIG5hbWUuXG4gKiBAcGFyYW0ge09iamVjdH0gbGF5ZXIubGF5ZXIgLSBMYXllciBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gbGF5ZXIubGF5ZXIuY29sdW1uIC0gQ29sdW1uIG5hbWUuXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZXRhZGF0YShsYXllcikge1xuICByZXR1cm4ge25hbWU6IGxheWVyLm5hbWUsIGNvbHVtbjogbGF5ZXIubGF5ZXIuY29sdW1uLCBjbGFzczogbGF5ZXIuY2xhc3N9O1xufVxuIiwiLyoqXG4gKiBHZW5lcmF0ZSBwYXJhbWV0ZXJzIGZvciBhIFRvbSBTZWxlY3Qgd2lkZ2V0IGJhc2VkIG9uIGEgcHJvamVjdC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9qZWN0IC0gUHJvamVjdCBvYmplY3QuXG4gKiBAcGFyYW0ge0FycmF5PG9iamVjdD59IHByb2plY3QuZmVhdHVyZXMgLSBBcnJheSBvZiBGZWF0dXJlIG9iamVjdHMuXG4gKiBAcGFyYW0ge0FycmF5PG9iamVjdD59IHByb2plY3QubG9ja3MgLSBBcnJheSBvZiBMb2NrIG9iamVjdHMuXG4gKiBAcGFyYW0ge0FycmF5PG9iamVjdD59IHByb2plY3QuY29zdHMgLSBBcnJheSBvZiBDb3N0IG9iamVjdHMuXG4gKiBAcGFyYW0ge0FycmF5PG9iamVjdD59IHByb2plY3Quc29sdXRpb25zIC0gQXJyYXkgb2YgU29sdXRpb24gb2JqZWN0cy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZUZlYXR1cmVzIC0gU2hvdWxkIGZlYXR1cmVzIGJlIGluY2x1ZGVkIGluIHRoZVxuICogb3V0cHV0P1xuICogQHBhcmFtIHtib29sZWFufSBpbmNsdWRlQ29zdHMgLSBTaG91bGQgY29zdHMgYmUgaW5jbHVkZWQgaW4gdGhlXG4gKiBvdXRwdXQ/XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVMb2NrcyAtIFNob3VsZCBsb2NrcyBiZSBpbmNsdWRlZCBpbiB0aGVcbiAqIG91dHB1dD9cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZVNvbHV0aW9ucyAtIFNob3VsZCBzb2x1dGlvbnMgYmUgaW5jbHVkZWQgaW4gdGhlXG4gKiBvdXRwdXQ/XG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0U2VsZWN0T3B0aW9ucyhcbiAgcHJvamVjdCxcbiAgaW5jbHVkZUZlYXR1cmVzID0gdHJ1ZSxcbiAgaW5jbHVkZUNvc3RzID0gdHJ1ZSxcbiAgaW5jbHVkZUxvY2tzID0gdHJ1ZSxcbiAgaW5jbHVkZVNvbHV0aW9ucyA9IHRydWVcbikge1xuICAvLyBpbml0aWFsaXplIHZhcmlhYmxlc1xuICBsZXQgb3B0aW9ucyA9IEFycmF5KFxuICAgIChwcm9qZWN0LmZlYXR1cmVzLmxlbmd0aCAqIGluY2x1ZGVGZWF0dXJlcykgK1xuICAgIChwcm9qZWN0LmNvc3RzLmxlbmd0aCAqIGluY2x1ZGVDb3N0cykgK1xuICAgIChwcm9qZWN0LmxvY2tzLmxlbmd0aCAqIGluY2x1ZGVMb2NrcykgK1xuICAgIChwcm9qZWN0LnNvbHV0aW9ucy5sZW5ndGggKiBpbmNsdWRlU29sdXRpb25zKVxuICApO1xuICBsZXQgZ3JvdXBzID0gbmV3IFNldCgpO1xuICBsZXQgaW5jbHVkZUNsYXNzID1cbiAgICAoaW5jbHVkZUZlYXR1cmVzICsgaW5jbHVkZUNvc3RzICsgaW5jbHVkZUxvY2tzICsgaW5jbHVkZVNvbHV0aW9ucykgPiAxO1xuICAvLyBkZWZpbmUgY291bnRlcnNcbiAgbGV0IGksIGosIGs7XG4gIGsgPSAwO1xuICAvLyBpZiBuZWVkZWQsIGFkZCBmZWF0dXJlc1xuICBpZiAoaW5jbHVkZUZlYXR1cmVzKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IHByb2plY3QuZmVhdHVyZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIG9wdGlvbnNba10gPSBzZWxlY3RPcHRpb24ocHJvamVjdC5mZWF0dXJlc1tpXSwgaW5jbHVkZUNsYXNzKTtcbiAgICAgIGZvciAoaiA9IDA7IGogPCBvcHRpb25zW2ldLmdyb3VwLmxlbmd0aDsgKytqKSB7XG4gICAgICAgIGdyb3Vwcy5hZGQob3B0aW9uc1tpXS5ncm91cFtqXSk7XG4gICAgICB9XG4gICAgICArK2s7XG4gICAgfTtcbiAgfVxuICAvLyBpZiBuZWVkZWQsIGFkZCBsb2Nrc1xuICBpZiAoaW5jbHVkZUxvY2tzKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IHByb2plY3QubG9ja3MubGVuZ3RoOyArK2kpIHtcbiAgICAgIG9wdGlvbnNba10gPSBzZWxlY3RPcHRpb24ocHJvamVjdC5sb2Nrc1tpXSwgaW5jbHVkZUNsYXNzKTtcbiAgICAgICsraztcbiAgICB9O1xuICAgIGdyb3Vwcy5hZGQoXCJMb2Nrc1wiKTtcbiAgfVxuICAvLyBpZiBuZWVkZWQsIGFkZCBjb3N0c1xuICBpZiAoaW5jbHVkZUNvc3RzKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IHByb2plY3QuY29zdHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIG9wdGlvbnNba10gPSBzZWxlY3RPcHRpb24ocHJvamVjdC5jb3N0c1tpXSwgaW5jbHVkZUNsYXNzKTtcbiAgICAgICsraztcbiAgICB9O1xuICAgIGdyb3Vwcy5hZGQoXCJDb3N0c1wiKTtcbiAgfVxuICAvLyBpZiBuZWVkZWQsIGFkZCBzb2x1dGlvbnNcbiAgaWYgKGluY2x1ZGVTb2x1dGlvbnMpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgcHJvamVjdC5zb2x1dGlvbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgIG9wdGlvbnNba10gPSBzZWxlY3RPcHRpb24ocHJvamVjdC5zb2x1dGlvbnNbaV0sIGluY2x1ZGVDbGFzcyk7XG4gICAgICArK2s7XG4gICAgfTtcbiAgICBncm91cHMuYWRkKFwiU29sdXRpb25zXCIpO1xuICB9XG4gIC8vIHJldHVybiBvYmplY3RcbiAgcmV0dXJuIHtcbiAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgIG9wdGdyb3VwczogQXJyYXkuZnJvbShncm91cHMpLm1hcCh4ID0+IHtyZXR1cm4ge3ZhbHVlOiB4fX0pXG4gIH07XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgVG9tIFNlbGVjdCBvcHRpb24gZm9yIGEgcHJvamVjdCBlbGVtZW50LlxuICogQHBhcmFtIHtvYmplY3R9IHggLSBPYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30geC5pZCAtIFVuaXF1ZSBpZGVudGlmaWVyLlxuICogQHBhcmFtIHtzdHJpbmd9IHgubmFtZSAtIE5hbWUuXG4gKiBAcGFyYW0ge3N0cmluZ30geC5jbGFzcyAtIFR5cGUgb2Ygb2JqZWN0LlxuICogQHBhcmFtIHtBcnJheTxvYmplY3Q+fSB4LnRoZW1lIC0gT3B0aW9uYWwgYXJyYXkgb2YgdGhlbWUgb2JqZWN0cy5cbiAqIEBwYXJhbSB7c3RyaW5nfSB4LnRoZW1lcy5uYW1lIC0gTmFtZSBvZiB0aGVtZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB4LnRoZW1lcy56b25lIC0gWm9uZSBhc3NvY2lhdGVkIHdpdGggdGhlbWUuXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RPcHRpb24oeCwgaW5jbHVkZUNsYXNzID0gdHJ1ZSkge1xuICAvLyBpbml0aWFsaXplIG9iamVjdFxuICBsZXQgb3V0ID0ge3ZhbHVlOiB4LmlkLCBuYW1lOiB4Lm5hbWV9O1xuICAvLyBwcm9jZXNzIGdyb3VwXG4gIGxldCBncm91cCA9IHguY2xhc3MuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB4LmNsYXNzLnNsaWNlKDEpICsgXCJzXCI7XG4gIGlmICh4LnRoZW1lcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gaWYgb2JqZWN0IGhhcyB0aGVtZXMsIHRoZW4gYWRkIGdyb3VwcyBiYXNlZCBvbiB0aGVtXG4gICAgaWYgKGluY2x1ZGVDbGFzcykge1xuICAgICAgb3V0Lmdyb3VwID0geC50aGVtZXMubWFwKHkgPT4gYCR7Z3JvdXB9ICgke3RoZW1lR3JvdXBOYW1lKHkpfSlgKS5zb3J0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dC5ncm91cCA9IHgudGhlbWVzLm1hcCh5ID0+IHRoZW1lR3JvdXBOYW1lKHkpKS5zb3J0KCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIG90aGVyd2lzZSwgdGhlbiBhZGQgZ3JvdXAgYmFzZWQgb24gY2xhc3MgbmFtZVxuICAgIG91dC5ncm91cCA9IGdyb3VwO1xuICB9XG4gIC8vIHByb2Nlc3Mgc29ydCBrZXlcbiAgbGV0IG9yZCA9IFtcIkZlYXR1cmVzXCIsIFwiTG9ja3NcIiwgXCJDb3N0c1wiLCBcIlNvbHV0aW9uc1wiXTtcbiAgbGV0IGkgPSBvcmQuaW5kZXhPZihncm91cCkgKyAxO1xuICBpZiAoaSA8IDApIHtcbiAgICBpID0gOTk5OyAvLyBpZiBjbGFzcyBub3QgcmVjb2duaXplZCwgdGhlbiBwdXQgaXQgbGFzdFxuICB9XG4gIG91dC5zb3J0ID0gYCR7aX0tJHt4Lm5hbWV9YDtcbiAgLy8gcmV0dXJuIG9iamVjdFxuICByZXR1cm4gb3V0XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZ3JvdXAgbmFtZSBmb3IgYSB0aGVtZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3QgLSBUaGVtZSBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gb2JqZWN0Lm5hbWUgLSBOYW1lIG9mIHRoZW1lLlxuICogQHBhcmFtIHtzdHJpbmd9IG9iamVjdC56b25lIC0gWm9uZSBhc3NvY2lhdGVkIHdpdGggdGhlIHRoZW1lLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiB0aGVtZUdyb3VwTmFtZShvYmplY3QpIHtcbiAgaWYgKHR5cGVvZihvYmplY3Quem9uZSkgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gYCR7b2JqZWN0LnpvbmV9OiAke29iamVjdC5uYW1lfWA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG9iamVjdC5uYW1lO1xuICB9XG59XG4iLCIvKipcbiogVG9tIFNlbGVjdCB2Mi42LjJcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiovXG4hZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTooZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOmV8fHNlbGYpLlRvbVNlbGVjdD10KCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIlxuZnVuY3Rpb24gZShlLHQpe2Uuc3BsaXQoL1xccysvKS5mb3JFYWNoKGU9Pnt0KGUpfSl9Y2xhc3MgdHtjb25zdHJ1Y3Rvcigpe3RoaXMuX2V2ZW50cz17fX1vbih0LGkpe2UodCxlPT57Y29uc3QgdD10aGlzLl9ldmVudHNbZV18fFtdXG50LnB1c2goaSksdGhpcy5fZXZlbnRzW2VdPXR9KX1vZmYodCxpKXt2YXIgcz1hcmd1bWVudHMubGVuZ3RoXG4wIT09cz9lKHQsZT0+e2lmKDE9PT1zKXJldHVybiB2b2lkIGRlbGV0ZSB0aGlzLl9ldmVudHNbZV1cbmNvbnN0IHQ9dGhpcy5fZXZlbnRzW2VdXG52b2lkIDAhPT10JiYodC5zcGxpY2UodC5pbmRleE9mKGkpLDEpLHRoaXMuX2V2ZW50c1tlXT10KX0pOnRoaXMuX2V2ZW50cz17fX10cmlnZ2VyKHQsLi4uaSl7dmFyIHM9dGhpc1xuZSh0LGU9Pntjb25zdCB0PXMuX2V2ZW50c1tlXVxudm9pZCAwIT09dCYmdC5mb3JFYWNoKGU9PntlLmFwcGx5KHMsaSl9KX0pfX1jb25zdCBpPWU9PihlPWUuZmlsdGVyKEJvb2xlYW4pKS5sZW5ndGg8Mj9lWzBdfHxcIlwiOjE9PWwoZSk/XCJbXCIrZS5qb2luKFwiXCIpK1wiXVwiOlwiKD86XCIrZS5qb2luKFwifFwiKStcIilcIixzPWU9PntpZighbyhlKSlyZXR1cm4gZS5qb2luKFwiXCIpXG5sZXQgdD1cIlwiLGk9MFxuY29uc3Qgcz0oKT0+e2k+MSYmKHQrPVwie1wiK2krXCJ9XCIpfVxucmV0dXJuIGUuZm9yRWFjaCgobixvKT0+e24hPT1lW28tMV0/KHMoKSx0Kz1uLGk9MSk6aSsrfSkscygpLHR9LG49ZT0+e2xldCB0PUFycmF5LmZyb20oZSlcbnJldHVybiBpKHQpfSxvPWU9Pm5ldyBTZXQoZSkuc2l6ZSE9PWUubGVuZ3RoLHI9ZT0+KGUrXCJcIikucmVwbGFjZSgvKFtcXCRcXChcXClcXCpcXCtcXC5cXD9cXFtcXF1cXF5cXHtcXHxcXH1cXFxcXSkvZ3UsXCJcXFxcJDFcIiksbD1lPT5lLnJlZHVjZSgoZSx0KT0+TWF0aC5tYXgoZSxhKHQpKSwwKSxhPWU9PkFycmF5LmZyb20oZSkubGVuZ3RoLGM9ZT0+e2lmKDE9PT1lLmxlbmd0aClyZXR1cm5bW2VdXVxubGV0IHQ9W11cbmNvbnN0IGk9ZS5zdWJzdHJpbmcoMSlcbnJldHVybiBjKGkpLmZvckVhY2goZnVuY3Rpb24oaSl7bGV0IHM9aS5zbGljZSgwKVxuc1swXT1lLmNoYXJBdCgwKStzWzBdLHQucHVzaChzKSxzPWkuc2xpY2UoMCkscy51bnNoaWZ0KGUuY2hhckF0KDApKSx0LnB1c2gocyl9KSx0fSxkPVtbMCw2NTUzNV1dXG5sZXQgdSxwXG5jb25zdCBoPXt9LGc9e1wiL1wiOlwi4oGE4oiVXCIsMDpcIt+AXCIsYTpcIuKxpcmQyZFcIixhYTpcIuqcs1wiLGFlOlwiw6bHvcejXCIsYW86XCLqnLVcIixhdTpcIuqct1wiLGF2Olwi6py56py7XCIsYXk6XCLqnL1cIixiOlwixoDJk8aDXCIsYzpcIuqcv8aIyLzihoRcIixkOlwixJHJl8mW4bSFxozqrrfUgcmmXCIsZTpcIsmbx53htIfJh1wiLGY6XCLqnbzGklwiLGc6XCLHpcmg6p6h4bW56p2/yaJcIixoOlwixKfisajisbbJpVwiLGk6XCLJqMSxXCIsajpcIsmJyLdcIixrOlwixpnisarqnYHqnYPqnYXqnqNcIixsOlwixYLGmsmr4rGh6p2J6p2H6p6Bya1cIixtOlwiybHJr8+7XCIsbjpcIuqepcaeybLqnpHhtI7Qu9SJXCIsbzpcIsO4x7/JlMm16p2L6p2N4bSRXCIsb2U6XCLFk1wiLG9pOlwixqNcIixvbzpcIuqdj1wiLG91OlwiyKNcIixwOlwixqXhtb3qnZHqnZPqnZXPgVwiLHE6XCLqnZfqnZnJi1wiLHI6XCLJjcm96p2b6p6n6p6DXCIsczpcIsOfyL/qnqnqnoXKglwiLHQ6XCLFp8atyojisabqnodcIix0aDpcIsO+XCIsdHo6XCLqnKlcIix1OlwiyolcIix2OlwiyovqnZ/KjFwiLHZ5Olwi6p2hXCIsdzpcIuKxs1wiLHk6XCLGtMmP4bu/XCIsejpcIsa2yKXJgOKxrOqdo1wiLGh2OlwixpVcIn1cbmZvcihsZXQgZSBpbiBnKXtsZXQgdD1nW2VdfHxcIlwiXG5mb3IobGV0IGk9MDtpPHQubGVuZ3RoO2krKyl7bGV0IHM9dC5zdWJzdHJpbmcoaSxpKzEpXG5oW3NdPWV9fWNvbnN0IGY9bmV3IFJlZ0V4cChPYmplY3Qua2V5cyhoKS5qb2luKFwifFwiKStcInxbzIAtza/Ct8q+yrxdXCIsXCJndVwiKSxtPShlLHQ9XCJORktEXCIpPT5lLm5vcm1hbGl6ZSh0KSx2PWU9PkFycmF5LmZyb20oZSkucmVkdWNlKChlLHQpPT5lK08odCksXCJcIiksTz1lPT4oZT1tKGUpLnRvTG93ZXJDYXNlKCkucmVwbGFjZShmLGU9PmhbZV18fFwiXCIpLG0oZSxcIk5GQ1wiKSlcbmNvbnN0IGI9ZT0+e2NvbnN0IHQ9e30saT0oZSxpKT0+e2NvbnN0IHM9dFtlXXx8bmV3IFNldCxvPW5ldyBSZWdFeHAoXCJeXCIrbihzKStcIiRcIixcIml1XCIpXG5pLm1hdGNoKG8pfHwocy5hZGQocihpKSksdFtlXT1zKX1cbmZvcihsZXQgdCBvZiBmdW5jdGlvbiooZSl7Zm9yKGNvbnN0W3QsaV1vZiBlKWZvcihsZXQgZT10O2U8PWk7ZSsrKXtsZXQgdD1TdHJpbmcuZnJvbUNoYXJDb2RlKGUpLGk9dih0KVxuaSE9dC50b0xvd2VyQ2FzZSgpJiYoaS5sZW5ndGg+M3x8MCE9aS5sZW5ndGgmJih5aWVsZHtmb2xkZWQ6aSxjb21wb3NlZDp0LGNvZGVfcG9pbnQ6ZX0pKX19KGUpKWkodC5mb2xkZWQsdC5mb2xkZWQpLGkodC5mb2xkZWQsdC5jb21wb3NlZClcbnJldHVybiB0fSx5PWU9Pntjb25zdCB0PWIoZSkscz17fVxubGV0IG89W11cbmZvcihsZXQgZSBpbiB0KXtsZXQgaT10W2VdXG5pJiYoc1tlXT1uKGkpKSxlLmxlbmd0aD4xJiZvLnB1c2gocihlKSl9by5zb3J0KChlLHQpPT50Lmxlbmd0aC1lLmxlbmd0aClcbmNvbnN0IGw9aShvKVxucmV0dXJuIHA9bmV3IFJlZ0V4cChcIl5cIitsLFwidVwiKSxzfSx3PShlLHQ9MSk9Pih0PU1hdGgubWF4KHQsZS5sZW5ndGgtMSksaShjKGUpLm1hcChlPT4oKGUsdD0xKT0+e2xldCBpPTBcbnJldHVybiBlPWUubWFwKGU9Pih1W2VdJiYoaSs9ZS5sZW5ndGgpLHVbZV18fGUpKSxpPj10P3MoZSk6XCJcIn0pKGUsdCkpKSksUz0oZSx0PSEwKT0+e2xldCBuPWUubGVuZ3RoPjE/MTowXG5yZXR1cm4gaShlLm1hcChlPT57bGV0IGk9W11cbmNvbnN0IG89dD9lLmxlbmd0aCgpOmUubGVuZ3RoKCktMVxuZm9yKGxldCB0PTA7dDxvO3QrKylpLnB1c2godyhlLnN1YnN0cnNbdF18fFwiXCIsbikpXG5yZXR1cm4gcyhpKX0pKX0sXz0oZSx0KT0+e2Zvcihjb25zdCBpIG9mIHQpe2lmKGkuc3RhcnQhPWUuc3RhcnR8fGkuZW5kIT1lLmVuZCljb250aW51ZVxuaWYoaS5zdWJzdHJzLmpvaW4oXCJcIikhPT1lLnN1YnN0cnMuam9pbihcIlwiKSljb250aW51ZVxubGV0IHQ9ZS5wYXJ0c1xuY29uc3Qgcz1lPT57Zm9yKGNvbnN0IGkgb2YgdCl7aWYoaS5zdGFydD09PWUuc3RhcnQmJmkuc3Vic3RyPT09ZS5zdWJzdHIpcmV0dXJuITFcbmlmKDEhPWUubGVuZ3RoJiYxIT1pLmxlbmd0aCl7aWYoZS5zdGFydDxpLnN0YXJ0JiZlLmVuZD5pLnN0YXJ0KXJldHVybiEwXG5pZihpLnN0YXJ0PGUuc3RhcnQmJmkuZW5kPmUuc3RhcnQpcmV0dXJuITB9fXJldHVybiExfVxuaWYoIShpLnBhcnRzLmZpbHRlcihzKS5sZW5ndGg+MCkpcmV0dXJuITB9cmV0dXJuITF9XG5jbGFzcyBDe3BhcnRzXG5zdWJzdHJzXG5zdGFydFxuZW5kXG5jb25zdHJ1Y3Rvcigpe3RoaXMucGFydHM9W10sdGhpcy5zdWJzdHJzPVtdLHRoaXMuc3RhcnQ9MCx0aGlzLmVuZD0wfWFkZChlKXtlJiYodGhpcy5wYXJ0cy5wdXNoKGUpLHRoaXMuc3Vic3Rycy5wdXNoKGUuc3Vic3RyKSx0aGlzLnN0YXJ0PU1hdGgubWluKGUuc3RhcnQsdGhpcy5zdGFydCksdGhpcy5lbmQ9TWF0aC5tYXgoZS5lbmQsdGhpcy5lbmQpKX1sYXN0KCl7cmV0dXJuIHRoaXMucGFydHNbdGhpcy5wYXJ0cy5sZW5ndGgtMV19bGVuZ3RoKCl7cmV0dXJuIHRoaXMucGFydHMubGVuZ3RofWNsb25lKGUsdCl7bGV0IGk9bmV3IEMscz1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucGFydHMpKSxuPXMucG9wKClcbmZvcihjb25zdCBlIG9mIHMpaS5hZGQoZSlcbmxldCBvPXQuc3Vic3RyLnN1YnN0cmluZygwLGUtbi5zdGFydCkscj1vLmxlbmd0aFxucmV0dXJuIGkuYWRkKHtzdGFydDpuLnN0YXJ0LGVuZDpuLnN0YXJ0K3IsbGVuZ3RoOnIsc3Vic3RyOm99KSxpfX1jb25zdCB4PWU9Pnt2b2lkIDA9PT11JiYodT15KGQpKSxlPXYoZSlcbmxldCB0PVwiXCIsaT1bbmV3IENdXG5mb3IobGV0IHM9MDtzPGUubGVuZ3RoO3MrKyl7bGV0IG49ZS5zdWJzdHJpbmcocykubWF0Y2gocClcbmNvbnN0IG89ZS5zdWJzdHJpbmcocyxzKzEpLHI9bj9uWzBdOm51bGxcbmxldCBsPVtdLGE9bmV3IFNldFxuZm9yKGNvbnN0IGUgb2YgaSl7Y29uc3QgdD1lLmxhc3QoKVxuaWYoIXR8fDE9PXQubGVuZ3RofHx0LmVuZDw9cylpZihyKXtjb25zdCB0PXIubGVuZ3RoXG5lLmFkZCh7c3RhcnQ6cyxlbmQ6cyt0LGxlbmd0aDp0LHN1YnN0cjpyfSksYS5hZGQoXCIxXCIpfWVsc2UgZS5hZGQoe3N0YXJ0OnMsZW5kOnMrMSxsZW5ndGg6MSxzdWJzdHI6b30pLGEuYWRkKFwiMlwiKVxuZWxzZSBpZihyKXtsZXQgaT1lLmNsb25lKHMsdClcbmNvbnN0IG49ci5sZW5ndGhcbmkuYWRkKHtzdGFydDpzLGVuZDpzK24sbGVuZ3RoOm4sc3Vic3RyOnJ9KSxsLnB1c2goaSl9ZWxzZSBhLmFkZChcIjNcIil9aWYobC5sZW5ndGg+MCl7bD1sLnNvcnQoKGUsdCk9PmUubGVuZ3RoKCktdC5sZW5ndGgoKSlcbmZvcihsZXQgZSBvZiBsKV8oZSxpKXx8aS5wdXNoKGUpfWVsc2UgaWYocz4wJiYxPT1hLnNpemUmJiFhLmhhcyhcIjNcIikpe3QrPVMoaSwhMSlcbmxldCBlPW5ldyBDXG5jb25zdCBzPWlbMF1cbnMmJmUuYWRkKHMubGFzdCgpKSxpPVtlXX19cmV0dXJuIHQrPVMoaSwhMCksdH0sQT0oZSx0KT0+e2lmKGUpcmV0dXJuIGVbdF19LEk9KGUsdCk9PntpZihlKXtmb3IodmFyIGkscz10LnNwbGl0KFwiLlwiKTsoaT1zLnNoaWZ0KCkpJiYoZT1lW2ldKTspO3JldHVybiBlfX0saz0oZSx0LGkpPT57dmFyIHMsblxucmV0dXJuIGU/KGUrPVwiXCIsbnVsbD09dC5yZWdleHx8LTE9PT0obj1lLnNlYXJjaCh0LnJlZ2V4KSk/MDoocz10LnN0cmluZy5sZW5ndGgvZS5sZW5ndGgsMD09PW4mJihzKz0uNSkscyppKSk6MH0sRj0oZSx0KT0+e3ZhciBpPWVbdF1cbmlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGkpcmV0dXJuIGlcbmkmJiFBcnJheS5pc0FycmF5KGkpJiYoZVt0XT1baV0pfSxMPShlLHQpPT57aWYoQXJyYXkuaXNBcnJheShlKSllLmZvckVhY2godClcbmVsc2UgZm9yKHZhciBpIGluIGUpZS5oYXNPd25Qcm9wZXJ0eShpKSYmdChlW2ldLGkpfSxFPShlLHQpPT5cIm51bWJlclwiPT10eXBlb2YgZSYmXCJudW1iZXJcIj09dHlwZW9mIHQ/ZT50PzE6ZTx0Py0xOjA6KGU9dihlK1wiXCIpLnRvTG93ZXJDYXNlKCkpPih0PXYodCtcIlwiKS50b0xvd2VyQ2FzZSgpKT8xOnQ+ZT8tMTowXG5jbGFzcyBUe2l0ZW1zXG5zZXR0aW5nc1xuY29uc3RydWN0b3IoZSx0KXt0aGlzLml0ZW1zPWUsdGhpcy5zZXR0aW5ncz10fHx7ZGlhY3JpdGljczohMH19dG9rZW5pemUoZSx0LGkpe2lmKCFlfHwhZS5sZW5ndGgpcmV0dXJuW11cbmNvbnN0IHM9W10sbj1lLnNwbGl0KC9cXHMrLylcbnZhciBvXG5yZXR1cm4gaSYmKG89bmV3IFJlZ0V4cChcIl4oXCIrT2JqZWN0LmtleXMoaSkubWFwKHIpLmpvaW4oXCJ8XCIpK1wiKTooLiopJFwiKSksbi5mb3JFYWNoKGU9PntsZXQgaSxuPW51bGwsbD1udWxsXG5vJiYoaT1lLm1hdGNoKG8pKSYmKG49aVsxXSxlPWlbMl0pLGUubGVuZ3RoPjAmJihsPXRoaXMuc2V0dGluZ3MuZGlhY3JpdGljcz94KGUpfHxudWxsOnIoZSksbCYmdCYmKGw9XCJcXFxcYlwiK2wpKSxzLnB1c2goe3N0cmluZzplLHJlZ2V4Omw/bmV3IFJlZ0V4cChsLFwiaXVcIik6bnVsbCxmaWVsZDpufSl9KSxzfWdldFNjb3JlRnVuY3Rpb24oZSx0KXt2YXIgaT10aGlzLnByZXBhcmVTZWFyY2goZSx0KVxucmV0dXJuIHRoaXMuX2dldFNjb3JlRnVuY3Rpb24oaSl9X2dldFNjb3JlRnVuY3Rpb24oZSl7Y29uc3QgdD1lLnRva2VucyxpPXQubGVuZ3RoXG5pZighaSlyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gMH1cbmNvbnN0IHM9ZS5vcHRpb25zLmZpZWxkcyxuPWUud2VpZ2h0cyxvPXMubGVuZ3RoLHI9ZS5nZXRBdHRyRm5cbmlmKCFvKXJldHVybiBmdW5jdGlvbigpe3JldHVybiAxfVxuY29uc3QgbD0xPT09bz9mdW5jdGlvbihlLHQpe2NvbnN0IGk9c1swXS5maWVsZFxucmV0dXJuIGsocih0LGkpLGUsbltpXXx8MSl9OmZ1bmN0aW9uKGUsdCl7dmFyIGk9MFxuaWYoZS5maWVsZCl7Y29uc3Qgcz1yKHQsZS5maWVsZClcbiFlLnJlZ2V4JiZzP2krPTEvbzppKz1rKHMsZSwxKX1lbHNlIEwobiwocyxuKT0+e2krPWsocih0LG4pLGUscyl9KVxucmV0dXJuIGkvb31cbnJldHVybiAxPT09aT9mdW5jdGlvbihlKXtyZXR1cm4gbCh0WzBdLGUpfTpcImFuZFwiPT09ZS5vcHRpb25zLmNvbmp1bmN0aW9uP2Z1bmN0aW9uKGUpe3ZhciBzLG49MFxuZm9yKGxldCBpIG9mIHQpe2lmKChzPWwoaSxlKSk8PTApcmV0dXJuIDBcbm4rPXN9cmV0dXJuIG4vaX06ZnVuY3Rpb24oZSl7dmFyIHM9MFxucmV0dXJuIEwodCx0PT57cys9bCh0LGUpfSkscy9pfX1nZXRTb3J0RnVuY3Rpb24oZSx0KXt2YXIgaT10aGlzLnByZXBhcmVTZWFyY2goZSx0KVxucmV0dXJuIHRoaXMuX2dldFNvcnRGdW5jdGlvbihpKX1fZ2V0U29ydEZ1bmN0aW9uKGUpe3ZhciB0LGk9W11cbmNvbnN0IHM9dGhpcyxuPWUub3B0aW9ucyxvPSFlLnF1ZXJ5JiZuLnNvcnRfZW1wdHk/bi5zb3J0X2VtcHR5Om4uc29ydFxuaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgbylyZXR1cm4gby5iaW5kKHRoaXMpXG5jb25zdCByPWZ1bmN0aW9uKHQsaSl7cmV0dXJuXCIkc2NvcmVcIj09PXQ/aS5zY29yZTplLmdldEF0dHJGbihzLml0ZW1zW2kuaWRdLHQpfVxuaWYobylmb3IobGV0IHQgb2YgbykoZS5xdWVyeXx8XCIkc2NvcmVcIiE9PXQuZmllbGQpJiZpLnB1c2godClcbmlmKGUucXVlcnkpe3Q9ITBcbmZvcihsZXQgZSBvZiBpKWlmKFwiJHNjb3JlXCI9PT1lLmZpZWxkKXt0PSExXG5icmVha310JiZpLnVuc2hpZnQoe2ZpZWxkOlwiJHNjb3JlXCIsZGlyZWN0aW9uOlwiZGVzY1wifSl9ZWxzZSBpPWkuZmlsdGVyKGU9PlwiJHNjb3JlXCIhPT1lLmZpZWxkKVxucmV0dXJuIGkubGVuZ3RoP2Z1bmN0aW9uKGUsdCl7dmFyIHMsblxuZm9yKGxldCBvIG9mIGkpe2lmKG49by5maWVsZCxzPShcImRlc2NcIj09PW8uZGlyZWN0aW9uPy0xOjEpKkUocihuLGUpLHIobix0KSkpcmV0dXJuIHN9cmV0dXJuIDB9Om51bGx9cHJlcGFyZVNlYXJjaChlLHQpe2NvbnN0IGk9e31cbnZhciBzPU9iamVjdC5hc3NpZ24oe30sdClcbmlmKEYocyxcInNvcnRcIiksRihzLFwic29ydF9lbXB0eVwiKSxzLmZpZWxkcyl7RihzLFwiZmllbGRzXCIpXG5jb25zdCBlPVtdXG5zLmZpZWxkcy5mb3JFYWNoKHQ9PntcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9e2ZpZWxkOnQsd2VpZ2h0OjF9KSxlLnB1c2godCksaVt0LmZpZWxkXT1cIndlaWdodFwiaW4gdD90LndlaWdodDoxfSkscy5maWVsZHM9ZX1yZXR1cm57b3B0aW9uczpzLHF1ZXJ5OmUudG9Mb3dlckNhc2UoKS50cmltKCksdG9rZW5zOnRoaXMudG9rZW5pemUoZSxzLnJlc3BlY3Rfd29yZF9ib3VuZGFyaWVzLGkpLHRvdGFsOjAsaXRlbXM6W10sd2VpZ2h0czppLGdldEF0dHJGbjpzLm5lc3Rpbmc/STpBfX1zZWFyY2goZSx0KXt2YXIgaSxzLG49dGhpc1xucz10aGlzLnByZXBhcmVTZWFyY2goZSx0KSx0PXMub3B0aW9ucyxlPXMucXVlcnlcbmNvbnN0IG89dC5zY29yZXx8bi5fZ2V0U2NvcmVGdW5jdGlvbihzKVxuZS5sZW5ndGg/TChuLml0ZW1zLChlLG4pPT57aT1vKGUpLCghMT09PXQuZmlsdGVyfHxpPjApJiZzLml0ZW1zLnB1c2goe3Njb3JlOmksaWQ6bn0pfSk6TChuLml0ZW1zLChlLHQpPT57cy5pdGVtcy5wdXNoKHtzY29yZToxLGlkOnR9KX0pXG5jb25zdCByPW4uX2dldFNvcnRGdW5jdGlvbihzKVxucmV0dXJuIHImJnMuaXRlbXMuc29ydChyKSxzLnRvdGFsPXMuaXRlbXMubGVuZ3RoLFwibnVtYmVyXCI9PXR5cGVvZiB0LmxpbWl0JiYocy5pdGVtcz1zLml0ZW1zLnNsaWNlKDAsdC5saW1pdCkpLHN9fWNvbnN0IFA9ZT0+bnVsbD09ZT9udWxsOk4oZSksTj1lPT5cImJvb2xlYW5cIj09dHlwZW9mIGU/ZT9cIjFcIjpcIjBcIjplK1wiXCIsRD1lPT4oZStcIlwiKS5yZXBsYWNlKC8mL2csXCImYW1wO1wiKS5yZXBsYWNlKC88L2csXCImbHQ7XCIpLnJlcGxhY2UoLz4vZyxcIiZndDtcIikucmVwbGFjZSgvXCIvZyxcIiZxdW90O1wiKSxWPShlLHQpPT57dmFyIGlcbnJldHVybiBmdW5jdGlvbihzLG4pe3ZhciBvPXRoaXNcbmkmJihvLmxvYWRpbmc9TWF0aC5tYXgoby5sb2FkaW5nLTEsMCksY2xlYXJUaW1lb3V0KGkpKSxpPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtpPW51bGwsby5sb2FkZWRTZWFyY2hlc1tzXT0hMCxlLmNhbGwobyxzLG4pfSx0KX19LGo9KGUsdCxpKT0+e3ZhciBzLG49ZS50cmlnZ2VyLG89e31cbmZvcihzIG9mKGUudHJpZ2dlcj1mdW5jdGlvbigpe3ZhciBpPWFyZ3VtZW50c1swXVxuaWYoLTE9PT10LmluZGV4T2YoaSkpcmV0dXJuIG4uYXBwbHkoZSxhcmd1bWVudHMpXG5vW2ldPWFyZ3VtZW50c30saS5hcHBseShlLFtdKSxlLnRyaWdnZXI9bix0KSlzIGluIG8mJm4uYXBwbHkoZSxvW3NdKX0sJD0oZSx0PSExKT0+e2UmJihlLnByZXZlbnREZWZhdWx0KCksdCYmZS5zdG9wUHJvcGFnYXRpb24oKSl9LHE9KGUsdCxpLHMpPT57ZS5hZGRFdmVudExpc3RlbmVyKHQsaSxzKX0sUj0oZSx0KT0+ISF0JiYoISF0W2VdJiYxPT09KHQuYWx0S2V5PzE6MCkrKHQuY3RybEtleT8xOjApKyh0LnNoaWZ0S2V5PzE6MCkrKHQubWV0YUtleT8xOjApKSxIPShlLHQpPT57Y29uc3QgaT1lLmdldEF0dHJpYnV0ZShcImlkXCIpXG5yZXR1cm4gaXx8KGUuc2V0QXR0cmlidXRlKFwiaWRcIix0KSx0KX0sTT1lPT5lLnJlcGxhY2UoL1tcXFxcXCInXS9nLFwiXFxcXCQmXCIpLHo9KGUsdCk9Pnt0JiZlLmFwcGVuZCh0KX0sQj0oZSx0KT0+e2lmKEFycmF5LmlzQXJyYXkoZSkpZS5mb3JFYWNoKHQpXG5lbHNlIGZvcih2YXIgaSBpbiBlKWUuaGFzT3duUHJvcGVydHkoaSkmJnQoZVtpXSxpKX0sSz1lPT57aWYoZS5qcXVlcnkpcmV0dXJuIGVbMF1cbmlmKGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudClyZXR1cm4gZVxuaWYoRyhlKSl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpXG5yZXR1cm4gdC5pbm5lckhUTUw9ZS50cmltKCksdC5jb250ZW50LmZpcnN0Q2hpbGR9cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZSl9LEc9ZT0+XCJzdHJpbmdcIj09dHlwZW9mIGUmJmUuaW5kZXhPZihcIjxcIik+LTEsVT0oZSx0KT0+e3ZhciBpPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiSFRNTEV2ZW50c1wiKVxuaS5pbml0RXZlbnQodCwhMCwhMSksZS5kaXNwYXRjaEV2ZW50KGkpfSxXPShlLHQpPT57T2JqZWN0LmFzc2lnbihlLnN0eWxlLHQpfSxRPShlLC4uLnQpPT57dmFyIGk9WCh0KTsoZT1ZKGUpKS5tYXAoZT0+e2kubWFwKHQ9PntlLmNsYXNzTGlzdC5hZGQodCl9KX0pfSxKPShlLC4uLnQpPT57dmFyIGk9WCh0KTsoZT1ZKGUpKS5tYXAoZT0+e2kubWFwKHQ9PntlLmNsYXNzTGlzdC5yZW1vdmUodCl9KX0pfSxYPWU9Pnt2YXIgdD1bXVxucmV0dXJuIEIoZSxlPT57XCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPWUudHJpbSgpLnNwbGl0KC9bXFx0XFxuXFxmXFxyXFxzXS8pKSxBcnJheS5pc0FycmF5KGUpJiYodD10LmNvbmNhdChlKSl9KSx0LmZpbHRlcihCb29sZWFuKX0sWT1lPT4oQXJyYXkuaXNBcnJheShlKXx8KGU9W2VdKSxlKSxaPShlLHQsaSk9PntpZighaXx8aS5jb250YWlucyhlKSlmb3IoO2UmJmUubWF0Y2hlczspe2lmKGUubWF0Y2hlcyh0KSlyZXR1cm4gZVxuZT1lLnBhcmVudE5vZGV9fSxlZT0oZSx0PTApPT50PjA/ZVtlLmxlbmd0aC0xXTplWzBdLHRlPShlLHQpPT57aWYoIWUpcmV0dXJuLTFcbnQ9dHx8ZS5ub2RlTmFtZVxuZm9yKHZhciBpPTA7ZT1lLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7KWUubWF0Y2hlcyh0KSYmaSsrXG5yZXR1cm4gaX0saWU9KGUsdCk9PntCKHQsKHQsaSk9PntudWxsPT10P2UucmVtb3ZlQXR0cmlidXRlKGkpOmUuc2V0QXR0cmlidXRlKGksXCJcIit0KX0pfSxzZT0oZSx0KT0+e2UucGFyZW50Tm9kZSYmZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCh0LGUpfSxuZT0oZSx0KT0+e2lmKG51bGw9PT10KXJldHVyblxuaWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe2lmKCF0Lmxlbmd0aClyZXR1cm5cbnQ9bmV3IFJlZ0V4cCh0LFwiaVwiKX1jb25zdCBpPWU9PjM9PT1lLm5vZGVUeXBlPyhlPT57dmFyIGk9ZS5kYXRhLm1hdGNoKHQpXG5pZihpJiZlLmRhdGEubGVuZ3RoPjApe3ZhciBzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG5zLmNsYXNzTmFtZT1cImhpZ2hsaWdodFwiXG52YXIgbj1lLnNwbGl0VGV4dChpLmluZGV4KVxubi5zcGxpdFRleHQoaVswXS5sZW5ndGgpXG52YXIgbz1uLmNsb25lTm9kZSghMClcbnJldHVybiBzLmFwcGVuZENoaWxkKG8pLHNlKG4scyksMX1yZXR1cm4gMH0pKGUpOigoZT0+ezEhPT1lLm5vZGVUeXBlfHwhZS5jaGlsZE5vZGVzfHwvKHNjcmlwdHxzdHlsZSkvaS50ZXN0KGUudGFnTmFtZSl8fFwiaGlnaGxpZ2h0XCI9PT1lLmNsYXNzTmFtZSYmXCJTUEFOXCI9PT1lLnRhZ05hbWV8fEFycmF5LmZyb20oZS5jaGlsZE5vZGVzKS5mb3JFYWNoKGU9PntpKGUpfSl9KShlKSwwKVxuaShlKX0sb2U9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG5hdmlnYXRvciYmL01hYy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KT9cIm1ldGFLZXlcIjpcImN0cmxLZXlcIlxudmFyIHJlPXtvcHRpb25zOltdLG9wdGdyb3VwczpbXSxwbHVnaW5zOltdLGRlbGltaXRlcjpcIixcIixzcGxpdE9uOm51bGwscGVyc2lzdDohMCxkaWFjcml0aWNzOiEwLGNyZWF0ZTpudWxsLGNyZWF0ZU9uQmx1cjohMSxjcmVhdGVGaWx0ZXI6bnVsbCxjbGVhckFmdGVyU2VsZWN0OiExLGhpZ2hsaWdodDohMCxvcGVuT25Gb2N1czohMCxzaG91bGRPcGVuOm51bGwsbWF4T3B0aW9uczo1MCxtYXhJdGVtczpudWxsLGhpZGVTZWxlY3RlZDpudWxsLGR1cGxpY2F0ZXM6ITEsYWRkUHJlY2VkZW5jZTohMSxzZWxlY3RPblRhYjohMSxwcmVsb2FkOm51bGwsYWxsb3dFbXB0eU9wdGlvbjohMSxyZWZyZXNoVGhyb3R0bGU6MzAwLGxvYWRUaHJvdHRsZTozMDAsbG9hZGluZ0NsYXNzOlwibG9hZGluZ1wiLGRhdGFBdHRyOm51bGwsb3B0Z3JvdXBGaWVsZDpcIm9wdGdyb3VwXCIsdmFsdWVGaWVsZDpcInZhbHVlXCIsbGFiZWxGaWVsZDpcInRleHRcIixkaXNhYmxlZEZpZWxkOlwiZGlzYWJsZWRcIixvcHRncm91cExhYmVsRmllbGQ6XCJsYWJlbFwiLG9wdGdyb3VwVmFsdWVGaWVsZDpcInZhbHVlXCIsbG9ja09wdGdyb3VwT3JkZXI6ITEsc29ydEZpZWxkOlwiJG9yZGVyXCIsc2VhcmNoRmllbGQ6W1widGV4dFwiXSxzZWFyY2hDb25qdW5jdGlvbjpcImFuZFwiLG1vZGU6bnVsbCx3cmFwcGVyQ2xhc3M6XCJ0cy13cmFwcGVyXCIsY29udHJvbENsYXNzOlwidHMtY29udHJvbFwiLGRyb3Bkb3duQ2xhc3M6XCJ0cy1kcm9wZG93blwiLGRyb3Bkb3duQ29udGVudENsYXNzOlwidHMtZHJvcGRvd24tY29udGVudFwiLGl0ZW1DbGFzczpcIml0ZW1cIixvcHRpb25DbGFzczpcIm9wdGlvblwiLGRyb3Bkb3duUGFyZW50Om51bGwsY29udHJvbElucHV0Oic8aW5wdXQgdHlwZT1cInRleHRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBzaXplPVwiMVwiIC8+Jyxjb3B5Q2xhc3Nlc1RvRHJvcGRvd246ITEscGxhY2Vob2xkZXI6bnVsbCxoaWRlUGxhY2Vob2xkZXI6bnVsbCxzaG91bGRMb2FkOmZ1bmN0aW9uKGUpe3JldHVybiBlLmxlbmd0aD4wfSxyZW5kZXI6e319XG5mdW5jdGlvbiBsZShlLHQpe3ZhciBpPU9iamVjdC5hc3NpZ24oe30scmUsdCkscz1pLmRhdGFBdHRyLG49aS5sYWJlbEZpZWxkLG89aS52YWx1ZUZpZWxkLHI9aS5kaXNhYmxlZEZpZWxkLGw9aS5vcHRncm91cEZpZWxkLGE9aS5vcHRncm91cExhYmVsRmllbGQsYz1pLm9wdGdyb3VwVmFsdWVGaWVsZCxkPWUudGFnTmFtZS50b0xvd2VyQ2FzZSgpLHU9ZS5nZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiKXx8ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBsYWNlaG9sZGVyXCIpXG5pZighdSYmIWkuYWxsb3dFbXB0eU9wdGlvbil7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKCdvcHRpb25bdmFsdWU9XCJcIl0nKVxudCYmKHU9dC50ZXh0Q29udGVudCl9dmFyIHA9e3BsYWNlaG9sZGVyOnUsb3B0aW9uczpbXSxvcHRncm91cHM6W10saXRlbXM6W10sbWF4SXRlbXM6bnVsbH1cbnJldHVyblwic2VsZWN0XCI9PT1kPygoKT0+e3ZhciB0LGQ9cC5vcHRpb25zLHU9e30saD0xXG5sZXQgZz0wXG52YXIgZj1lPT57dmFyIHQ9T2JqZWN0LmFzc2lnbih7fSxlLmRhdGFzZXQpLGk9cyYmdFtzXVxucmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGkmJmkubGVuZ3RoJiYodD1PYmplY3QuYXNzaWduKHQsSlNPTi5wYXJzZShpKSkpLHR9LG09KGUsdCk9Pnt2YXIgcz1QKGUudmFsdWUpXG5pZihudWxsIT1zJiYoc3x8aS5hbGxvd0VtcHR5T3B0aW9uKSl7aWYodS5oYXNPd25Qcm9wZXJ0eShzKSl7aWYodCl7dmFyIGE9dVtzXVtsXVxuYT9BcnJheS5pc0FycmF5KGEpP2EucHVzaCh0KTp1W3NdW2xdPVthLHRdOnVbc11bbF09dH19ZWxzZXt2YXIgYz1mKGUpXG5jW25dPWNbbl18fGUudGV4dENvbnRlbnQsY1tvXT1jW29dfHxzLGNbcl09Y1tyXXx8ZS5kaXNhYmxlZCxjW2xdPWNbbF18fHQsYy4kb3B0aW9uPWUsYy4kb3JkZXI9Yy4kb3JkZXJ8fCsrZyx1W3NdPWMsZC5wdXNoKGMpfWUuc2VsZWN0ZWQmJnAuaXRlbXMucHVzaChzKX19XG5wLm1heEl0ZW1zPWUuaGFzQXR0cmlidXRlKFwibXVsdGlwbGVcIik/bnVsbDoxLEIoZS5jaGlsZHJlbixlPT57dmFyIGkscyxuXG5cIm9wdGdyb3VwXCI9PT0odD1lLnRhZ05hbWUudG9Mb3dlckNhc2UoKSk/KChuPWYoaT1lKSlbYV09blthXXx8aS5nZXRBdHRyaWJ1dGUoXCJsYWJlbFwiKXx8XCJcIixuW2NdPW5bY118fGgrKyxuW3JdPW5bcl18fGkuZGlzYWJsZWQsbi4kb3JkZXI9bi4kb3JkZXJ8fCsrZyxwLm9wdGdyb3Vwcy5wdXNoKG4pLHM9bltjXSxCKGkuY2hpbGRyZW4sZT0+e20oZSxzKX0pKTpcIm9wdGlvblwiPT09dCYmbShlKX0pfSkoKTooKCk9Pntjb25zdCB0PWUuZ2V0QXR0cmlidXRlKHMpXG5pZih0KXAub3B0aW9ucz1KU09OLnBhcnNlKHQpLEIocC5vcHRpb25zLGU9PntwLml0ZW1zLnB1c2goZVtvXSl9KVxuZWxzZXt2YXIgcixsLGE9bnVsbCE9KHI9bnVsbD09ZXx8bnVsbD09KGw9ZS52YWx1ZSk/dm9pZCAwOmwudHJpbSgpKT9yOlwiXCJcbmlmKCFpLmFsbG93RW1wdHlPcHRpb24mJiFhLmxlbmd0aClyZXR1cm5cbmNvbnN0IHQ9YS5zcGxpdChpLmRlbGltaXRlcilcbkIodCxlPT57Y29uc3QgdD17fVxudFtuXT1lLHRbb109ZSxwLm9wdGlvbnMucHVzaCh0KX0pLHAuaXRlbXM9dH19KSgpLE9iamVjdC5hc3NpZ24oe30scmUscCx0KX12YXIgYWU9MFxuY2xhc3MgY2UgZXh0ZW5kcyhmdW5jdGlvbihlKXtyZXR1cm4gZS5wbHVnaW5zPXt9LGNsYXNzIGV4dGVuZHMgZXtjb25zdHJ1Y3RvciguLi5lKXtzdXBlciguLi5lKSx0aGlzLnBsdWdpbnM9e25hbWVzOltdLHNldHRpbmdzOnt9LHJlcXVlc3RlZDp7fSxsb2FkZWQ6e319fXN0YXRpYyBkZWZpbmUodCxpKXtlLnBsdWdpbnNbdF09e25hbWU6dCxmbjppfX1pbml0aWFsaXplUGx1Z2lucyhlKXt2YXIgdCxpXG5jb25zdCBzPXRoaXMsbj1bXVxuaWYoQXJyYXkuaXNBcnJheShlKSllLmZvckVhY2goZT0+e1wic3RyaW5nXCI9PXR5cGVvZiBlP24ucHVzaChlKToocy5wbHVnaW5zLnNldHRpbmdzW2UubmFtZV09ZS5vcHRpb25zLG4ucHVzaChlLm5hbWUpKX0pXG5lbHNlIGlmKGUpZm9yKHQgaW4gZSllLmhhc093blByb3BlcnR5KHQpJiYocy5wbHVnaW5zLnNldHRpbmdzW3RdPWVbdF0sbi5wdXNoKHQpKVxuZm9yKDtpPW4uc2hpZnQoKTspcy5yZXF1aXJlKGkpfWxvYWRQbHVnaW4odCl7dmFyIGk9dGhpcyxzPWkucGx1Z2lucyxuPWUucGx1Z2luc1t0XVxuaWYoIWUucGx1Z2lucy5oYXNPd25Qcm9wZXJ0eSh0KSl0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBmaW5kIFwiJyt0KydcIiBwbHVnaW4nKVxucy5yZXF1ZXN0ZWRbdF09ITAscy5sb2FkZWRbdF09bi5mbi5hcHBseShpLFtpLnBsdWdpbnMuc2V0dGluZ3NbdF18fHt9XSkscy5uYW1lcy5wdXNoKHQpfXJlcXVpcmUoZSl7dmFyIHQ9dGhpcyxpPXQucGx1Z2luc1xuaWYoIXQucGx1Z2lucy5sb2FkZWQuaGFzT3duUHJvcGVydHkoZSkpe2lmKGkucmVxdWVzdGVkW2VdKXRocm93IG5ldyBFcnJvcignUGx1Z2luIGhhcyBjaXJjdWxhciBkZXBlbmRlbmN5IChcIicrZSsnXCIpJylcbnQubG9hZFBsdWdpbihlKX1yZXR1cm4gaS5sb2FkZWRbZV19fX0odCkpe2NvbnN0cnVjdG9yKGUsdCl7dmFyIGlcbnN1cGVyKCksdGhpcy5vcmRlcj0wLHRoaXMuaXNPcGVuPSExLHRoaXMuaXNEaXNhYmxlZD0hMSx0aGlzLmlzUmVhZE9ubHk9ITEsdGhpcy5pc0ludmFsaWQ9ITEsdGhpcy5pc1ZhbGlkPSEwLHRoaXMuaXNMb2NrZWQ9ITEsdGhpcy5pc0ZvY3VzZWQ9ITEsdGhpcy5pc0lucHV0SGlkZGVuPSExLHRoaXMuaXNTZXR1cD0hMSx0aGlzLmlzRHJvcGRvd25Db250ZW50U3RhbGU9ITAsdGhpcy5pZ25vcmVGb2N1cz0hMSx0aGlzLmlnbm9yZUhvdmVyPSExLHRoaXMuaGFzT3B0aW9ucz0hMSx0aGlzLmxhc3RWYWx1ZT1cIlwiLHRoaXMuY2FyZXRQb3M9MCx0aGlzLmxvYWRpbmc9MCx0aGlzLmxvYWRlZFNlYXJjaGVzPXt9LHRoaXMuYWN0aXZlT3B0aW9uPW51bGwsdGhpcy5hY3RpdmVJdGVtcz1bXSx0aGlzLm9wdGdyb3Vwcz17fSx0aGlzLm9wdGlvbnM9e30sdGhpcy51c2VyT3B0aW9ucz17fSx0aGlzLml0ZW1zPVtdLHRoaXMucmVmcmVzaFRpbWVvdXQ9bnVsbCxhZSsrXG52YXIgcz1LKGUpXG5pZihzLnRvbXNlbGVjdCl0aHJvdyBuZXcgRXJyb3IoXCJUb20gU2VsZWN0IGFscmVhZHkgaW5pdGlhbGl6ZWQgb24gdGhpcyBlbGVtZW50XCIpXG5zLnRvbXNlbGVjdD10aGlzLGk9KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlJiZ3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzLG51bGwpKS5nZXRQcm9wZXJ0eVZhbHVlKFwiZGlyZWN0aW9uXCIpXG5jb25zdCBuPWxlKHMsdClcbnRoaXMuc2V0dGluZ3M9bix0aGlzLmlucHV0PXMsdGhpcy50YWJJbmRleD1zLnRhYkluZGV4fHwwLHRoaXMuaXNfc2VsZWN0X3RhZz1cInNlbGVjdFwiPT09cy50YWdOYW1lLnRvTG93ZXJDYXNlKCksdGhpcy5ydGw9L3J0bC9pLnRlc3QoaSksdGhpcy5pbnB1dElkPUgocyxcInRvbXNlbGVjdC1cIithZSksdGhpcy5pc1JlcXVpcmVkPXMucmVxdWlyZWQsdGhpcy5zaWZ0ZXI9bmV3IFQodGhpcy5vcHRpb25zLHtkaWFjcml0aWNzOm4uZGlhY3JpdGljc30pLG4ubW9kZT1uLm1vZGV8fCgxPT09bi5tYXhJdGVtcz9cInNpbmdsZVwiOlwibXVsdGlcIiksXCJib29sZWFuXCIhPXR5cGVvZiBuLmhpZGVTZWxlY3RlZCYmKG4uaGlkZVNlbGVjdGVkPVwibXVsdGlcIj09PW4ubW9kZSksXCJib29sZWFuXCIhPXR5cGVvZiBuLmhpZGVQbGFjZWhvbGRlciYmKG4uaGlkZVBsYWNlaG9sZGVyPVwibXVsdGlcIiE9PW4ubW9kZSlcbnZhciBvPW4uY3JlYXRlRmlsdGVyXG5cImZ1bmN0aW9uXCIhPXR5cGVvZiBvJiYoXCJzdHJpbmdcIj09dHlwZW9mIG8mJihvPW5ldyBSZWdFeHAobykpLG8gaW5zdGFuY2VvZiBSZWdFeHA/bi5jcmVhdGVGaWx0ZXI9ZT0+by50ZXN0KGUpOm4uY3JlYXRlRmlsdGVyPWU9PnRoaXMuc2V0dGluZ3MuZHVwbGljYXRlc3x8IXRoaXMub3B0aW9uc1tlXSksdGhpcy5pbml0aWFsaXplUGx1Z2lucyhuLnBsdWdpbnMpLHRoaXMuc2V0dXBDYWxsYmFja3MoKSx0aGlzLnNldHVwVGVtcGxhdGVzKClcbmNvbnN0IHI9SyhcIjxkaXY+XCIpLGw9SyhcIjxkaXY+XCIpLGE9dGhpcy5fcmVuZGVyKFwiZHJvcGRvd25cIiksYz1LKCc8ZGl2IHJvbGU9XCJsaXN0Ym94XCIgdGFiaW5kZXg9XCItMVwiPicpLGQ9dGhpcy5pbnB1dC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIix1PW4ubW9kZVxudmFyIHBcbmlmKFEocixuLndyYXBwZXJDbGFzcyxkLHUpLFEobCxuLmNvbnRyb2xDbGFzcykseihyLGwpLFEoYSxuLmRyb3Bkb3duQ2xhc3MsdSksbi5jb3B5Q2xhc3Nlc1RvRHJvcGRvd24mJlEoYSxkKSxRKGMsbi5kcm9wZG93bkNvbnRlbnRDbGFzcykseihhLGMpLEsobi5kcm9wZG93blBhcmVudHx8cikuYXBwZW5kQ2hpbGQoYSksRyhuLmNvbnRyb2xJbnB1dCkpe3A9SyhuLmNvbnRyb2xJbnB1dClcbkIoW1wiYXV0b2NvcnJlY3RcIixcImF1dG9jYXBpdGFsaXplXCIsXCJhdXRvY29tcGxldGVcIixcInNwZWxsY2hlY2tcIixcImFyaWEtbGFiZWxcIl0sZT0+e3MuZ2V0QXR0cmlidXRlKGUpJiZpZShwLHtbZV06cy5nZXRBdHRyaWJ1dGUoZSl9KX0pLHAudGFiSW5kZXg9LTEsbC5hcHBlbmRDaGlsZChwKSx0aGlzLmZvY3VzX25vZGU9cH1lbHNlIG4uY29udHJvbElucHV0PyhwPUsobi5jb250cm9sSW5wdXQpLHRoaXMuZm9jdXNfbm9kZT1wKToocD1LKFwiPGlucHV0Lz5cIiksdGhpcy5mb2N1c19ub2RlPWwpXG50aGlzLndyYXBwZXI9cix0aGlzLmRyb3Bkb3duPWEsdGhpcy5kcm9wZG93bl9jb250ZW50PWMsdGhpcy5jb250cm9sPWwsdGhpcy5jb250cm9sX2lucHV0PXAsdGhpcy5zZXR1cCgpfXNldHVwKCl7Y29uc3QgZT10aGlzLHQ9ZS5zZXR0aW5ncyxpPWUuY29udHJvbF9pbnB1dCxzPWUuZHJvcGRvd24sbj1lLmRyb3Bkb3duX2NvbnRlbnQsbz1lLndyYXBwZXIsbD1lLmNvbnRyb2wsYT1lLmlucHV0LGM9ZS5mb2N1c19ub2RlLGQ9e3Bhc3NpdmU6ITB9LHU9ZS5pbnB1dElkK1wiLXRzLWRyb3Bkb3duXCJcbmllKG4se2lkOnV9KSxpZShjLHtyb2xlOlwiY29tYm9ib3hcIixcImFyaWEtaGFzcG9wdXBcIjpcImxpc3Rib3hcIixcImFyaWEtZXhwYW5kZWRcIjpcImZhbHNlXCIsXCJhcmlhLWNvbnRyb2xzXCI6dX0pXG5jb25zdCBwPUgoYyxlLmlucHV0SWQrXCItdHMtY29udHJvbFwiKSxoPVwibGFiZWxbZm9yPSdcIisoZT0+ZS5yZXBsYWNlKC9bJ1wiXFxcXF0vZyxcIlxcXFwkJlwiKSkoZS5pbnB1dElkKStcIiddXCIsZz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGgpLGY9ZS5mb2N1cy5iaW5kKGUpXG5pZihnKXtxKGcsXCJjbGlja1wiLGYpLGllKGcse2ZvcjpwfSlcbmNvbnN0IHQ9SChnLGUuaW5wdXRJZCtcIi10cy1sYWJlbFwiKVxuaWUoYyx7XCJhcmlhLWxhYmVsbGVkYnlcIjp0fSksaWUobix7XCJhcmlhLWxhYmVsbGVkYnlcIjp0fSl9aWYoby5zdHlsZS53aWR0aD1hLnN0eWxlLndpZHRoLG8uc3R5bGUubWluV2lkdGg9YS5zdHlsZS5taW5XaWR0aCxvLnN0eWxlLm1heFdpZHRoPWEuc3R5bGUubWF4V2lkdGgsZS5wbHVnaW5zLm5hbWVzLmxlbmd0aCl7Y29uc3QgdD1cInBsdWdpbi1cIitlLnBsdWdpbnMubmFtZXMuam9pbihcIiBwbHVnaW4tXCIpXG5RKFtvLHNdLHQpfShudWxsPT09dC5tYXhJdGVtc3x8dC5tYXhJdGVtcz4xKSYmZS5pc19zZWxlY3RfdGFnJiZpZShhLHttdWx0aXBsZTpcIm11bHRpcGxlXCJ9KSx0LnBsYWNlaG9sZGVyJiZpZShpLHtwbGFjZWhvbGRlcjp0LnBsYWNlaG9sZGVyfSksIXQuc3BsaXRPbiYmdC5kZWxpbWl0ZXImJih0LnNwbGl0T249bmV3IFJlZ0V4cChcIlxcXFxzKlwiK3IodC5kZWxpbWl0ZXIpK1wiK1xcXFxzKlwiKSksdC5sb2FkJiZ0LmxvYWRUaHJvdHRsZSYmKHQubG9hZD1WKHQubG9hZCx0LmxvYWRUaHJvdHRsZSkpLHEocyxcIm1vdXNlbW92ZVwiLCgpPT57ZS5pZ25vcmVIb3Zlcj0hMX0pLHEocyxcIm1vdXNlZW50ZXJcIix0PT57dmFyIGk9Wih0LnRhcmdldCxcIltkYXRhLXNlbGVjdGFibGVdXCIscylcbmkmJmUub25PcHRpb25Ib3Zlcih0LGkpfSx7Y2FwdHVyZTohMH0pLHEocyxcImNsaWNrXCIsdD0+e2NvbnN0IGk9Wih0LnRhcmdldCxcIltkYXRhLXNlbGVjdGFibGVdXCIpXG5pJiYoZS5vbk9wdGlvblNlbGVjdCh0LGkpLCQodCwhMCkpfSkscShsLFwiY2xpY2tcIix0PT57dmFyIHM9Wih0LnRhcmdldCxcIltkYXRhLXRzLWl0ZW1dXCIsbClcbnMmJmUub25JdGVtU2VsZWN0KHQscyk/JCh0LCEwKTpcIlwiPT1pLnZhbHVlJiYoZS5vbkNsaWNrKCksJCh0LCEwKSl9KSxxKGMsXCJrZXlkb3duXCIsdD0+ZS5vbktleURvd24odCkpLHEoaSxcImtleXByZXNzXCIsdD0+ZS5vbktleVByZXNzKHQpKSxxKGksXCJpbnB1dFwiLHQ9PmUub25JbnB1dCh0KSkscShjLFwiYmx1clwiLHQ9PmUub25CbHVyKHQpKSxxKGMsXCJmb2N1c1wiLHQ9PmUub25Gb2N1cyh0KSkscShpLFwicGFzdGVcIix0PT5lLm9uUGFzdGUodCkpXG5jb25zdCBtPXQ9Pntjb25zdCBuPXQuY29tcG9zZWRQYXRoKClbMF1cbmlmKCFvLmNvbnRhaW5zKG4pJiYhcy5jb250YWlucyhuKSlyZXR1cm4gZS5pc0ZvY3VzZWQmJmUuYmx1cigpLHZvaWQgZS5pbnB1dFN0YXRlKClcbm49PWkmJmUuaXNPcGVuP3Quc3RvcFByb3BhZ2F0aW9uKCk6JCh0LCEwKX0sdj0oKT0+e2UuaXNPcGVuJiZlLnBvc2l0aW9uRHJvcGRvd24oKX0sTz0oKT0+e2UuaXNWYWxpZCYmKGUuaXNWYWxpZD0hMSxlLmlzSW52YWxpZD0hMCxlLnJlZnJlc2hTdGF0ZSgpKX1cbnEoYSxcImludmFsaWRcIixPKSxxKGRvY3VtZW50LFwibW91c2Vkb3duXCIsbSkscSh3aW5kb3csXCJzY3JvbGxcIix2LGQpLHEod2luZG93LFwicmVzaXplXCIsdixkKSx0aGlzLl9kZXN0cm95PSgpPT57YS5yZW1vdmVFdmVudExpc3RlbmVyKFwiaW52YWxpZFwiLE8pLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIixtKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLHYpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdiksZyYmZy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmKX0sdGhpcy5yZXZlcnRTZXR0aW5ncz17aW5uZXJIVE1MOmEuaW5uZXJIVE1MLHRhYkluZGV4OmEudGFiSW5kZXh9LGEudGFiSW5kZXg9LTEsYS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLGUud3JhcHBlciksZS5zeW5jKCExKSx0Lml0ZW1zPVtdLGRlbGV0ZSB0Lm9wdGdyb3VwcyxkZWxldGUgdC5vcHRpb25zLGUucmVmcmVzaEl0ZW1zKCksZS5jbG9zZSghMSksZS5pbnB1dFN0YXRlKCksZS5pc1NldHVwPSEwLGUub24oXCJjaGFuZ2VcIix0aGlzLm9uQ2hhbmdlKSxRKGEsXCJ0b21zZWxlY3RlZFwiLFwidHMtaGlkZGVuLWFjY2Vzc2libGVcIiksZS50cmlnZ2VyKFwiaW5pdGlhbGl6ZVwiKSwhMD09PXQucHJlbG9hZCYmZS5wcmVsb2FkKCl9c2V0dXBPcHRpb25zKGU9W10sdD1bXSl7dGhpcy5hZGRPcHRpb25zKGUpLEIodCxlPT57dGhpcy5yZWdpc3Rlck9wdGlvbkdyb3VwKGUpfSl9c2V0dXBUZW1wbGF0ZXMoKXt2YXIgZT10aGlzLHQ9ZS5zZXR0aW5ncy5sYWJlbEZpZWxkLGk9ZS5zZXR0aW5ncy5vcHRncm91cExhYmVsRmllbGQscz17b3B0Z3JvdXA6ZT0+e2xldCB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbnJldHVybiB0LmNsYXNzTmFtZT1cIm9wdGdyb3VwXCIsdC5hcHBlbmRDaGlsZChlLm9wdGlvbnMpLHR9LG9wdGdyb3VwX2hlYWRlcjooZSx0KT0+JzxkaXYgY2xhc3M9XCJvcHRncm91cC1oZWFkZXJcIj4nK3QoZVtpXSkrXCI8L2Rpdj5cIixvcHRpb246KGUsaSk9PlwiPGRpdj5cIitpKGVbdF0pK1wiPC9kaXY+XCIsaXRlbTooZSxpKT0+XCI8ZGl2PlwiK2koZVt0XSkrXCI8L2Rpdj5cIixvcHRpb25fY3JlYXRlOihlLHQpPT4nPGRpdiBjbGFzcz1cImNyZWF0ZVwiPkFkZCA8c3Ryb25nPicrdChlLmlucHV0KStcIjwvc3Ryb25nPiZoZWxsaXA7PC9kaXY+XCIsbm9fcmVzdWx0czooKT0+JzxkaXYgY2xhc3M9XCJuby1yZXN1bHRzXCI+Tm8gcmVzdWx0cyBmb3VuZDwvZGl2PicsbG9hZGluZzooKT0+JzxkaXYgY2xhc3M9XCJzcGlubmVyXCI+PC9kaXY+Jyxub3RfbG9hZGluZzooKT0+e30sZHJvcGRvd246KCk9PlwiPGRpdj48L2Rpdj5cIn1cbmUuc2V0dGluZ3MucmVuZGVyPU9iamVjdC5hc3NpZ24oe30scyxlLnNldHRpbmdzLnJlbmRlcil9c2V0dXBDYWxsYmFja3MoKXt2YXIgZSx0LGk9e2luaXRpYWxpemU6XCJvbkluaXRpYWxpemVcIixjaGFuZ2U6XCJvbkNoYW5nZVwiLGl0ZW1fYWRkOlwib25JdGVtQWRkXCIsaXRlbV9yZW1vdmU6XCJvbkl0ZW1SZW1vdmVcIixpdGVtX3NlbGVjdDpcIm9uSXRlbVNlbGVjdFwiLGNsZWFyOlwib25DbGVhclwiLG9wdGlvbl9hZGQ6XCJvbk9wdGlvbkFkZFwiLG9wdGlvbl9yZW1vdmU6XCJvbk9wdGlvblJlbW92ZVwiLG9wdGlvbl9jbGVhcjpcIm9uT3B0aW9uQ2xlYXJcIixvcHRncm91cF9hZGQ6XCJvbk9wdGlvbkdyb3VwQWRkXCIsb3B0Z3JvdXBfcmVtb3ZlOlwib25PcHRpb25Hcm91cFJlbW92ZVwiLG9wdGdyb3VwX2NsZWFyOlwib25PcHRpb25Hcm91cENsZWFyXCIsZHJvcGRvd25fb3BlbjpcIm9uRHJvcGRvd25PcGVuXCIsZHJvcGRvd25fY2xvc2U6XCJvbkRyb3Bkb3duQ2xvc2VcIix0eXBlOlwib25UeXBlXCIsbG9hZDpcIm9uTG9hZFwiLGZvY3VzOlwib25Gb2N1c1wiLGJsdXI6XCJvbkJsdXJcIn1cbmZvcihlIGluIGkpKHQ9dGhpcy5zZXR0aW5nc1tpW2VdXSkmJnRoaXMub24oZSx0KX1zeW5jKGU9ITApe2NvbnN0IHQ9dGhpcyxpPWU/bGUodC5pbnB1dCx7ZGVsaW1pdGVyOnQuc2V0dGluZ3MuZGVsaW1pdGVyLGFsbG93RW1wdHlPcHRpb246dC5zZXR0aW5ncy5hbGxvd0VtcHR5T3B0aW9ufSk6dC5zZXR0aW5nc1xudC5zZXR1cE9wdGlvbnMoaS5vcHRpb25zLGkub3B0Z3JvdXBzKSx0LnNldFZhbHVlKGkuaXRlbXN8fFtdLCEwKSx0LmlucHV0LmRpc2FibGVkP3QuZGlzYWJsZSgpOnQuaW5wdXQucmVhZE9ubHk/dC5zZXRSZWFkT25seSghMCk6dC5lbmFibGUoKSx0Lmxhc3RRdWVyeT1udWxsfW9uQ2xpY2soKXt2YXIgZT10aGlzXG5pZihlLmFjdGl2ZUl0ZW1zLmxlbmd0aD4wKXJldHVybiBlLmNsZWFyQWN0aXZlSXRlbXMoKSx2b2lkIGUuZm9jdXMoKVxuZS5pc0ZvY3VzZWQmJmUuaXNPcGVuP2UuYmx1cigpOmUuZm9jdXMoKX1vbk1vdXNlRG93bigpe31vbkNoYW5nZSgpe1UodGhpcy5pbnB1dCxcImlucHV0XCIpLFUodGhpcy5pbnB1dCxcImNoYW5nZVwiKX1vblBhc3RlKGUpe3ZhciB0PXRoaXNcbnQuaXNJbnB1dEhpZGRlbnx8dC5pc0xvY2tlZD8kKGUpOnQuc2V0dGluZ3Muc3BsaXRPbiYmc2V0VGltZW91dCgoKT0+e3ZhciBlPXQuaW5wdXRWYWx1ZSgpXG5pZihlLm1hdGNoKHQuc2V0dGluZ3Muc3BsaXRPbikpe3ZhciBpPWUudHJpbSgpLnNwbGl0KHQuc2V0dGluZ3Muc3BsaXRPbilcbkIoaSxlPT57UChlKSYmKHRoaXMub3B0aW9uc1tlXT90LmFkZEl0ZW0oZSk6dC5jcmVhdGVJdGVtKGUpKX0pfX0sMCl9b25LZXlQcmVzcyhlKXt2YXIgdD10aGlzXG5pZighdC5pc0xvY2tlZCl7dmFyIGk9U3RyaW5nLmZyb21DaGFyQ29kZShlLmtleUNvZGV8fGUud2hpY2gpXG5yZXR1cm4gdC5zZXR0aW5ncy5jcmVhdGUmJlwibXVsdGlcIj09PXQuc2V0dGluZ3MubW9kZSYmaT09PXQuc2V0dGluZ3MuZGVsaW1pdGVyPyh0LmNyZWF0ZUl0ZW0oKSx2b2lkICQoZSkpOnZvaWQgMH0kKGUpfW9uS2V5RG93bihlKXt2YXIgdD10aGlzXG5pZih0Lmlnbm9yZUhvdmVyPSEwLHQuaXNMb2NrZWQpOSE9PWUua2V5Q29kZSYmJChlKVxuZWxzZXtzd2l0Y2goZS5rZXlDb2RlKXtjYXNlIDY1OmlmKFIob2UsZSkmJlwiXCI9PXQuY29udHJvbF9pbnB1dC52YWx1ZSlyZXR1cm4gJChlKSx2b2lkIHQuc2VsZWN0QWxsKClcbmJyZWFrXG5jYXNlIDI3OnJldHVybiB0LmlzT3BlbiYmKCQoZSwhMCksdC5jbG9zZSgpKSx2b2lkIHQuY2xlYXJBY3RpdmVJdGVtcygpXG5jYXNlIDQwOmlmKCF0LmlzT3BlbiYmdC5oYXNPcHRpb25zKXQub3BlbigpXG5lbHNlIGlmKHQuYWN0aXZlT3B0aW9uKXtsZXQgZT10LmdldEFkamFjZW50KHQuYWN0aXZlT3B0aW9uLDEpXG5lJiZ0LnNldEFjdGl2ZU9wdGlvbihlKX1yZXR1cm4gdm9pZCAkKGUpXG5jYXNlIDM4OmlmKHQuYWN0aXZlT3B0aW9uKXtsZXQgZT10LmdldEFkamFjZW50KHQuYWN0aXZlT3B0aW9uLC0xKVxuZSYmdC5zZXRBY3RpdmVPcHRpb24oZSl9cmV0dXJuIHZvaWQgJChlKVxuY2FzZSAxMzpyZXR1cm4gdm9pZCh0LmNhblNlbGVjdCh0LmFjdGl2ZU9wdGlvbik/KHQub25PcHRpb25TZWxlY3QoZSx0LmFjdGl2ZU9wdGlvbiksJChlKSk6KHQuc2V0dGluZ3MuY3JlYXRlJiZ0LmNyZWF0ZUl0ZW0oKXx8ZG9jdW1lbnQuYWN0aXZlRWxlbWVudD09dC5jb250cm9sX2lucHV0JiZ0LmlzT3BlbikmJiQoZSkpXG5jYXNlIDM3OnJldHVybiB2b2lkIHQuYWR2YW5jZVNlbGVjdGlvbigtMSxlKVxuY2FzZSAzOTpyZXR1cm4gdm9pZCB0LmFkdmFuY2VTZWxlY3Rpb24oMSxlKVxuY2FzZSA5OnJldHVybiB2b2lkKHQuc2V0dGluZ3Muc2VsZWN0T25UYWImJih0LmNhblNlbGVjdCh0LmFjdGl2ZU9wdGlvbik/KHQub25PcHRpb25TZWxlY3QoZSx0LmFjdGl2ZU9wdGlvbiksJChlKSk6dC5zZXR0aW5ncy5jcmVhdGUmJnQuY3JlYXRlSXRlbSgpJiYkKGUpKSlcbmNhc2UgODpjYXNlIDQ2OnJldHVybiB2b2lkIHQuZGVsZXRlU2VsZWN0aW9uKGUpfXQuaXNJbnB1dEhpZGRlbiYmIVIob2UsZSkmJiQoZSl9fW9uSW5wdXQoZSl7aWYodGhpcy5pc0xvY2tlZClyZXR1cm5cbmNvbnN0IHQ9dGhpcy5pbnB1dFZhbHVlKClcbnRoaXMubGFzdFZhbHVlIT09dCYmKHRoaXMubGFzdFZhbHVlPXQsXCJcIiE9dD8odGhpcy5yZWZyZXNoVGltZW91dCYmd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnJlZnJlc2hUaW1lb3V0KSx0aGlzLnJlZnJlc2hUaW1lb3V0PSgoZSx0KT0+dD4wP3dpbmRvdy5zZXRUaW1lb3V0KGUsdCk6KGUuY2FsbChudWxsKSxudWxsKSkoKCk9Pnt0aGlzLnJlZnJlc2hUaW1lb3V0PW51bGwsdGhpcy5fb25JbnB1dCgpfSx0aGlzLnNldHRpbmdzLnJlZnJlc2hUaHJvdHRsZSkpOnRoaXMuX29uSW5wdXQoKSl9X29uSW5wdXQoKXtjb25zdCBlPXRoaXMubGFzdFZhbHVlXG50aGlzLnNldHRpbmdzLnNob3VsZExvYWQuY2FsbCh0aGlzLGUpJiZ0aGlzLmxvYWQoZSksdGhpcy5yZWZyZXNoT3B0aW9ucygpLHRoaXMudHJpZ2dlcihcInR5cGVcIixlKX1vbk9wdGlvbkhvdmVyKGUsdCl7dGhpcy5pZ25vcmVIb3Zlcnx8dGhpcy5zZXRBY3RpdmVPcHRpb24odCwhMSl9b25Gb2N1cyhlKXt2YXIgdD10aGlzLGk9dC5pc0ZvY3VzZWRcbmlmKHQuaXNEaXNhYmxlZHx8dC5pc1JlYWRPbmx5KXJldHVybiB0LmJsdXIoKSx2b2lkICQoZSlcbnQuaWdub3JlRm9jdXN8fCh0LmlzRm9jdXNlZD0hMCxcImZvY3VzXCI9PT10LnNldHRpbmdzLnByZWxvYWQmJnQucHJlbG9hZCgpLGl8fHQudHJpZ2dlcihcImZvY3VzXCIpLHQuYWN0aXZlSXRlbXMubGVuZ3RofHwodC5pbnB1dFN0YXRlKCksdC5yZWZyZXNoT3B0aW9ucyghIXQuc2V0dGluZ3Mub3Blbk9uRm9jdXMpKSx0LnJlZnJlc2hTdGF0ZSgpKX1vbkJsdXIoZSl7aWYoITEhPT1kb2N1bWVudC5oYXNGb2N1cygpKXt2YXIgdD10aGlzXG5pZih0LmlzRm9jdXNlZCl7dC5pc0ZvY3VzZWQ9ITEsdC5pZ25vcmVGb2N1cz0hMVxudmFyIGk9KCk9Pnt0LmNsb3NlKCksdC5zZXRBY3RpdmVJdGVtKCksdC5zZXRDYXJldCh0Lml0ZW1zLmxlbmd0aCksdC50cmlnZ2VyKFwiYmx1clwiKX1cbnQuc2V0dGluZ3MuY3JlYXRlJiZ0LnNldHRpbmdzLmNyZWF0ZU9uQmx1cj90LmNyZWF0ZUl0ZW0obnVsbCxpKTppKCl9fX1vbk9wdGlvblNlbGVjdChlLHQpe3ZhciBpLHM9dGhpc1xudC5wYXJlbnRFbGVtZW50JiZ0LnBhcmVudEVsZW1lbnQubWF0Y2hlcyhcIltkYXRhLWRpc2FibGVkXVwiKXx8KHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY3JlYXRlXCIpP3MuY3JlYXRlSXRlbShudWxsLCgpPT57cy5zZXR0aW5ncy5jbG9zZUFmdGVyU2VsZWN0P3MuY2xvc2UoKTpzLnNldHRpbmdzLmNsZWFyQWZ0ZXJTZWxlY3QmJnMuc2V0VGV4dGJveFZhbHVlKCl9KTp2b2lkIDAhPT0oaT10LmRhdGFzZXQudmFsdWUpJiYocy5pc0Ryb3Bkb3duQ29udGVudFN0YWxlPXMuc2V0dGluZ3MuaGlkZVNlbGVjdGVkLHMuYWRkSXRlbShpKSxzLnNldHRpbmdzLmNsb3NlQWZ0ZXJTZWxlY3Q/cy5jbG9zZSgpOnMuc2V0dGluZ3MuY2xlYXJBZnRlclNlbGVjdCYmcy5zZXRUZXh0Ym94VmFsdWUoKSwhcy5zZXR0aW5ncy5oaWRlU2VsZWN0ZWQmJmUudHlwZSYmL2NsaWNrLy50ZXN0KGUudHlwZSkmJnMuc2V0QWN0aXZlT3B0aW9uKHQpKSl9Y2FuU2VsZWN0KGUpe3JldHVybiEhKHRoaXMuaXNPcGVuJiZlJiZ0aGlzLmRyb3Bkb3duX2NvbnRlbnQuY29udGFpbnMoZSkpfW9uSXRlbVNlbGVjdChlLHQpe3ZhciBpPXRoaXNcbnJldHVybiFpLmlzTG9ja2VkJiZcIm11bHRpXCI9PT1pLnNldHRpbmdzLm1vZGUmJigkKGUpLGkuc2V0QWN0aXZlSXRlbSh0LGUpLCEwKX1jYW5Mb2FkKGUpe3JldHVybiEhdGhpcy5zZXR0aW5ncy5sb2FkJiYhdGhpcy5sb2FkZWRTZWFyY2hlcy5oYXNPd25Qcm9wZXJ0eShlKX1sb2FkKGUpe2NvbnN0IHQ9dGhpc1xuaWYoIXQuY2FuTG9hZChlKSlyZXR1cm5cblEodC53cmFwcGVyLHQuc2V0dGluZ3MubG9hZGluZ0NsYXNzKSx0LmxvYWRpbmcrK1xuY29uc3QgaT10LmxvYWRDYWxsYmFjay5iaW5kKHQpXG50LnNldHRpbmdzLmxvYWQuY2FsbCh0LGUsaSl9bG9hZENhbGxiYWNrKGUsdCl7Y29uc3QgaT10aGlzXG5pLmxvYWRpbmc9TWF0aC5tYXgoaS5sb2FkaW5nLTEsMCksaS5pc0Ryb3Bkb3duQ29udGVudFN0YWxlPSEwLGkuY2xlYXJBY3RpdmVPcHRpb24oKSxpLnNldHVwT3B0aW9ucyhlLHQpLGkucmVmcmVzaE9wdGlvbnMoaS5pc0ZvY3VzZWQmJiFpLmlzSW5wdXRIaWRkZW4pLGkubG9hZGluZ3x8SihpLndyYXBwZXIsaS5zZXR0aW5ncy5sb2FkaW5nQ2xhc3MpLGkudHJpZ2dlcihcImxvYWRcIixlLHQpfXByZWxvYWQoKXt2YXIgZT10aGlzLndyYXBwZXIuY2xhc3NMaXN0XG5lLmNvbnRhaW5zKFwicHJlbG9hZGVkXCIpfHwoZS5hZGQoXCJwcmVsb2FkZWRcIiksdGhpcy5sb2FkKFwiXCIpKX1zZXRUZXh0Ym94VmFsdWUoZT1cIlwiKXt2YXIgdD10aGlzLmNvbnRyb2xfaW5wdXRcbnQudmFsdWUhPT1lJiYodC52YWx1ZT1lLFUodCxcInVwZGF0ZVwiKSx0aGlzLmxhc3RWYWx1ZT1lKX1nZXRWYWx1ZSgpe3JldHVybiB0aGlzLmlzX3NlbGVjdF90YWcmJnRoaXMuaW5wdXQuaGFzQXR0cmlidXRlKFwibXVsdGlwbGVcIik/dGhpcy5pdGVtczp0aGlzLml0ZW1zLmpvaW4odGhpcy5zZXR0aW5ncy5kZWxpbWl0ZXIpfXNldFZhbHVlKGUsdCl7aih0aGlzLHQ/W106W1wiY2hhbmdlXCJdLCgpPT57dGhpcy5jbGVhcih0KSx0aGlzLmFkZEl0ZW1zKGUsdCl9KX1zZXRNYXhJdGVtcyhlKXswPT09ZSYmKGU9bnVsbCksdGhpcy5zZXR0aW5ncy5tYXhJdGVtcz1lLHRoaXMucmVmcmVzaFN0YXRlKCl9c2V0QWN0aXZlSXRlbShlLHQpe3ZhciBpLHMsbixvLHIsbCxhPXRoaXNcbmlmKFwic2luZ2xlXCIhPT1hLnNldHRpbmdzLm1vZGUpe2lmKCFlKXJldHVybiBhLmNsZWFyQWN0aXZlSXRlbXMoKSx2b2lkKGEuaXNGb2N1c2VkJiZhLmlucHV0U3RhdGUoKSlcbmlmKFwiY2xpY2tcIj09PShpPXQmJnQudHlwZS50b0xvd2VyQ2FzZSgpKSYmUihcInNoaWZ0S2V5XCIsdCkmJmEuYWN0aXZlSXRlbXMubGVuZ3RoKXtmb3IobD1hLmdldExhc3RBY3RpdmUoKSwobj1BcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGEuY29udHJvbC5jaGlsZHJlbixsKSk+KG89QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChhLmNvbnRyb2wuY2hpbGRyZW4sZSkpJiYocj1uLG49byxvPXIpLHM9bjtzPD1vO3MrKyllPWEuY29udHJvbC5jaGlsZHJlbltzXSwtMT09PWEuYWN0aXZlSXRlbXMuaW5kZXhPZihlKSYmYS5zZXRBY3RpdmVJdGVtQ2xhc3MoZSlcbiQodCl9ZWxzZVwiY2xpY2tcIj09PWkmJlIob2UsdCl8fFwia2V5ZG93blwiPT09aSYmUihcInNoaWZ0S2V5XCIsdCk/ZS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIik/YS5yZW1vdmVBY3RpdmVJdGVtKGUpOmEuc2V0QWN0aXZlSXRlbUNsYXNzKGUpOihhLmNsZWFyQWN0aXZlSXRlbXMoKSxhLnNldEFjdGl2ZUl0ZW1DbGFzcyhlKSlcbmEuaW5wdXRTdGF0ZSgpLGEuaXNGb2N1c2VkfHxhLmZvY3VzKCl9fXNldEFjdGl2ZUl0ZW1DbGFzcyhlKXtjb25zdCB0PXRoaXMsaT10LmNvbnRyb2wucXVlcnlTZWxlY3RvcihcIi5sYXN0LWFjdGl2ZVwiKVxuaSYmSihpLFwibGFzdC1hY3RpdmVcIiksUShlLFwiYWN0aXZlIGxhc3QtYWN0aXZlXCIpLHQudHJpZ2dlcihcIml0ZW1fc2VsZWN0XCIsZSksLTE9PXQuYWN0aXZlSXRlbXMuaW5kZXhPZihlKSYmdC5hY3RpdmVJdGVtcy5wdXNoKGUpfXJlbW92ZUFjdGl2ZUl0ZW0oZSl7dmFyIHQ9dGhpcy5hY3RpdmVJdGVtcy5pbmRleE9mKGUpXG50aGlzLmFjdGl2ZUl0ZW1zLnNwbGljZSh0LDEpLEooZSxcImFjdGl2ZVwiKX1jbGVhckFjdGl2ZUl0ZW1zKCl7Sih0aGlzLmFjdGl2ZUl0ZW1zLFwiYWN0aXZlXCIpLHRoaXMuYWN0aXZlSXRlbXM9W119c2V0QWN0aXZlT3B0aW9uKGUsdD0hMCl7ZSE9PXRoaXMuYWN0aXZlT3B0aW9uJiYodGhpcy5jbGVhckFjdGl2ZU9wdGlvbigpLGUmJih0aGlzLmFjdGl2ZU9wdGlvbj1lLGllKHRoaXMuZm9jdXNfbm9kZSx7XCJhcmlhLWFjdGl2ZWRlc2NlbmRhbnRcIjplLmdldEF0dHJpYnV0ZShcImlkXCIpfSksaWUoZSx7XCJhcmlhLXNlbGVjdGVkXCI6XCJ0cnVlXCJ9KSxRKGUsXCJhY3RpdmVcIiksdCYmdGhpcy5zY3JvbGxUb09wdGlvbihlKSkpfXNjcm9sbFRvT3B0aW9uKGUsdCl7aWYoIWUpcmV0dXJuXG5jb25zdCBpPXRoaXMuZHJvcGRvd25fY29udGVudCxzPWkuY2xpZW50SGVpZ2h0LG49aS5zY3JvbGxUb3B8fDAsbz1lLm9mZnNldEhlaWdodCxyPWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLWkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wK25cbnIrbz5zK24/dGhpcy5zY3JvbGwoci1zK28sdCk6cjxuJiZ0aGlzLnNjcm9sbChyLHQpfXNjcm9sbChlLHQpe2NvbnN0IGk9dGhpcy5kcm9wZG93bl9jb250ZW50XG50JiYoaS5zdHlsZS5zY3JvbGxCZWhhdmlvcj10KSxpLnNjcm9sbFRvcD1lLGkuc3R5bGUuc2Nyb2xsQmVoYXZpb3I9XCJcIn1jbGVhckFjdGl2ZU9wdGlvbigpe3RoaXMuYWN0aXZlT3B0aW9uJiYoSih0aGlzLmFjdGl2ZU9wdGlvbixcImFjdGl2ZVwiKSxpZSh0aGlzLmFjdGl2ZU9wdGlvbix7XCJhcmlhLXNlbGVjdGVkXCI6bnVsbH0pKSx0aGlzLmFjdGl2ZU9wdGlvbj1udWxsLGllKHRoaXMuZm9jdXNfbm9kZSx7XCJhcmlhLWFjdGl2ZWRlc2NlbmRhbnRcIjpudWxsfSl9c2VsZWN0QWxsKCl7Y29uc3QgZT10aGlzXG5pZihcInNpbmdsZVwiPT09ZS5zZXR0aW5ncy5tb2RlKXJldHVyblxuY29uc3QgdD1lLmNvbnRyb2xDaGlsZHJlbigpXG50Lmxlbmd0aCYmKGUuaW5wdXRTdGF0ZSgpLGUuY2xvc2UoKSxlLmFjdGl2ZUl0ZW1zPXQsQih0LHQ9PntlLnNldEFjdGl2ZUl0ZW1DbGFzcyh0KX0pKX1pbnB1dFN0YXRlKCl7dmFyIGU9dGhpc1xuZS5jb250cm9sLmNvbnRhaW5zKGUuY29udHJvbF9pbnB1dCkmJihpZShlLmNvbnRyb2xfaW5wdXQse3BsYWNlaG9sZGVyOmUuc2V0dGluZ3MucGxhY2Vob2xkZXJ9KSxlLmFjdGl2ZUl0ZW1zLmxlbmd0aD4wfHwhZS5pc0ZvY3VzZWQmJmUuc2V0dGluZ3MuaGlkZVBsYWNlaG9sZGVyJiZlLml0ZW1zLmxlbmd0aD4wPyhlLnNldFRleHRib3hWYWx1ZSgpLGUuaXNJbnB1dEhpZGRlbj0hMCk6KGUuc2V0dGluZ3MuaGlkZVBsYWNlaG9sZGVyJiZlLml0ZW1zLmxlbmd0aD4wJiZpZShlLmNvbnRyb2xfaW5wdXQse3BsYWNlaG9sZGVyOlwiXCJ9KSxlLmlzSW5wdXRIaWRkZW49ITEpLGUud3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKFwiaW5wdXQtaGlkZGVuXCIsZS5pc0lucHV0SGlkZGVuKSl9aW5wdXRWYWx1ZSgpe3JldHVybiB0aGlzLmNvbnRyb2xfaW5wdXQudmFsdWUudHJpbSgpfWZvY3VzKCl7dmFyIGU9dGhpc1xuaWYoZS5pc0Rpc2FibGVkfHxlLmlzUmVhZE9ubHkpcmV0dXJuXG5lLmlnbm9yZUZvY3VzPSEwXG5jb25zdCB0PXRoaXMuY29udHJvbF9pbnB1dC5vZmZzZXRXaWR0aD90aGlzLmNvbnRyb2xfaW5wdXQ6dGhpcy5mb2N1c19ub2RlXG50LmZvY3VzKCksc2V0VGltZW91dCgoKT0+e2UuaWdub3JlRm9jdXM9ITFcbnQuZ2V0Um9vdE5vZGUoKS5hY3RpdmVFbGVtZW50PT09dCYmdGhpcy5vbkZvY3VzKCl9LDApfWJsdXIoKXt0aGlzLmZvY3VzX25vZGUuYmx1cigpLHRoaXMub25CbHVyKCl9Z2V0U2NvcmVGdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5zaWZ0ZXIuZ2V0U2NvcmVGdW5jdGlvbihlLHRoaXMuZ2V0U2VhcmNoT3B0aW9ucygpKX1nZXRTZWFyY2hPcHRpb25zKCl7dmFyIGU9dGhpcy5zZXR0aW5ncyx0PWUuc29ydEZpZWxkXG5yZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZS5zb3J0RmllbGQmJih0PVt7ZmllbGQ6ZS5zb3J0RmllbGR9XSkse2ZpZWxkczplLnNlYXJjaEZpZWxkLGNvbmp1bmN0aW9uOmUuc2VhcmNoQ29uanVuY3Rpb24sc29ydDp0LG5lc3Rpbmc6ZS5uZXN0aW5nfX1zZWFyY2goZSl7dmFyIHQsaSxzPXRoaXMsbj10aGlzLmdldFNlYXJjaE9wdGlvbnMoKVxuaWYocy5zZXR0aW5ncy5zY29yZSYmXCJmdW5jdGlvblwiIT10eXBlb2YoaT1zLnNldHRpbmdzLnNjb3JlLmNhbGwocyxlKSkpdGhyb3cgbmV3IEVycm9yKCdUb20gU2VsZWN0IFwic2NvcmVcIiBzZXR0aW5nIG11c3QgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBmdW5jdGlvbicpXG5yZXR1cm4gcy5pc0Ryb3Bkb3duQ29udGVudFN0YWxlfHxlIT09cy5sYXN0UXVlcnk/KHMubGFzdFF1ZXJ5PWUsLyguKVxcMXsxNSx9Ly50ZXN0KGUpJiYoZT1cIlwiKSx0PXMuc2lmdGVyLnNlYXJjaChlLE9iamVjdC5hc3NpZ24obix7c2NvcmU6aX0pKSxzLmN1cnJlbnRSZXN1bHRzPXQpOnQ9T2JqZWN0LmFzc2lnbih7fSxzLmN1cnJlbnRSZXN1bHRzKSxzLnNldHRpbmdzLmhpZGVTZWxlY3RlZCYmKHQuaXRlbXM9dC5pdGVtcy5maWx0ZXIoZT0+e2xldCB0PVAoZS5pZClcbnJldHVybiEobnVsbCE9PXQmJi0xIT09cy5pdGVtcy5pbmRleE9mKHQpKX0pKSx0fXJlZnJlc2hPcHRpb25zKGU9ITApe3ZhciB0LGkscyxuLG8scixsLGEsYyxkXG5jb25zdCB1PXt9LHA9W11cbnZhciBoPXRoaXMsZz1oLmlucHV0VmFsdWUoKVxuY29uc3QgZj1nPT09aC5sYXN0UXVlcnl8fFwiXCI9PWcmJm51bGw9PWgubGFzdFF1ZXJ5XG52YXIgbT1oLnNlYXJjaChnKSx2PW51bGwsTz1oLnNldHRpbmdzLnNob3VsZE9wZW58fCExLGI9aC5kcm9wZG93bl9jb250ZW50XG5mJiYodj1oLmFjdGl2ZU9wdGlvbikmJihjPXYuY2xvc2VzdChcIltkYXRhLWdyb3VwXVwiKSksbj1tLml0ZW1zLmxlbmd0aCxcIm51bWJlclwiPT10eXBlb2YgaC5zZXR0aW5ncy5tYXhPcHRpb25zJiYobj1NYXRoLm1pbihuLGguc2V0dGluZ3MubWF4T3B0aW9ucykpLG4+MCYmKE89ITApXG5jb25zdCB5PShlLHQpPT57bGV0IGk9dVtlXVxuaWYodm9pZCAwIT09aSl7bGV0IGU9cFtpXVxuaWYodm9pZCAwIT09ZSlyZXR1cm5baSxlLmZyYWdtZW50XX1sZXQgcz1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcbnJldHVybiBpPXAubGVuZ3RoLHAucHVzaCh7ZnJhZ21lbnQ6cyxvcmRlcjp0LG9wdGdyb3VwOmV9KSxbaSxzXX1cbmZvcih0PTA7dDxuO3QrKyl7bGV0IGU9bS5pdGVtc1t0XVxuaWYoIWUpY29udGludWVcbmxldCBuPWUuaWQsbD1oLm9wdGlvbnNbbl1cbmlmKHZvaWQgMD09PWwpY29udGludWVcbmxldCBhPU4obiksZD1oLmdldE9wdGlvbihhLCEwKVxuZm9yKGguc2V0dGluZ3MuaGlkZVNlbGVjdGVkfHxkLmNsYXNzTGlzdC50b2dnbGUoXCJzZWxlY3RlZFwiLGguaXRlbXMuaW5jbHVkZXMoYSkpLG89bFtoLnNldHRpbmdzLm9wdGdyb3VwRmllbGRdfHxcIlwiLGk9MCxzPShyPUFycmF5LmlzQXJyYXkobyk/bzpbb10pJiZyLmxlbmd0aDtpPHM7aSsrKXtvPXJbaV1cbmxldCBlPWwuJG9yZGVyLHQ9aC5vcHRncm91cHNbb11cbnZhciB3XG5pZih2b2lkIDA9PT10JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBoLnNldHRpbmdzLm9wdGlvbkdyb3VwUmVnaXN0ZXIpKHc9aC5zZXR0aW5ncy5vcHRpb25Hcm91cFJlZ2lzdGVyLmFwcGx5KGgsW29dKSkmJmgucmVnaXN0ZXJPcHRpb25Hcm91cCh3KVxudD1oLm9wdGdyb3Vwc1tvXSx2b2lkIDA9PT10P289XCJcIjplPXQuJG9yZGVyXG5jb25zdFtzLGFdPXkobyxlKVxuaT4wJiYoZD1kLmNsb25lTm9kZSghMCksaWUoZCx7aWQ6bC4kaWQrXCItY2xvbmUtXCIraSxcImFyaWEtc2VsZWN0ZWRcIjpudWxsfSksZC5jbGFzc0xpc3QuYWRkKFwidHMtY2xvbmVkXCIpLEooZCxcImFjdGl2ZVwiKSxoLmFjdGl2ZU9wdGlvbiYmaC5hY3RpdmVPcHRpb24uZGF0YXNldC52YWx1ZT09biYmYyYmYy5kYXRhc2V0Lmdyb3VwPT09by50b1N0cmluZygpJiYodj1kKSksYS5hcHBlbmRDaGlsZChkKSxcIlwiIT1vJiYodVtvXT1zKX19dmFyIFNcbmguc2V0dGluZ3MubG9ja09wdGdyb3VwT3JkZXImJnAuc29ydCgoZSx0KT0+ZS5vcmRlci10Lm9yZGVyKSxsPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxCKHAsZT0+e2xldCB0PWUuZnJhZ21lbnQsaT1lLm9wdGdyb3VwXG5pZighdHx8IXQuY2hpbGRyZW4ubGVuZ3RoKXJldHVyblxubGV0IHM9aC5vcHRncm91cHNbaV1cbmlmKHZvaWQgMCE9PXMpe2xldCBlPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxpPWgucmVuZGVyKFwib3B0Z3JvdXBfaGVhZGVyXCIscylcbnooZSxpKSx6KGUsdClcbmxldCBuPWgucmVuZGVyKFwib3B0Z3JvdXBcIix7Z3JvdXA6cyxvcHRpb25zOmV9KVxueihsLG4pfWVsc2UgeihsLHQpfSksYi5pbm5lckhUTUw9XCJcIix6KGIsbCksaC5pc0Ryb3Bkb3duQ29udGVudFN0YWxlPSExLGguc2V0dGluZ3MuaGlnaGxpZ2h0JiYoUz1iLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuLmhpZ2hsaWdodFwiKSxBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKFMsZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnROb2RlXG50LnJlcGxhY2VDaGlsZChlLmZpcnN0Q2hpbGQsZSksdC5ub3JtYWxpemUoKX0pLG0ucXVlcnkubGVuZ3RoJiZtLnRva2Vucy5sZW5ndGgmJkIobS50b2tlbnMsZT0+e25lKGIsZS5yZWdleCl9KSlcbnZhciBfPWU9PntsZXQgdD1oLnJlbmRlcihlLHtpbnB1dDpnfSlcbnJldHVybiB0JiYoTz0hMCxiLmluc2VydEJlZm9yZSh0LGIuZmlyc3RDaGlsZCkpLHR9XG5pZihoLmxvYWRpbmc/XyhcImxvYWRpbmdcIik6aC5zZXR0aW5ncy5zaG91bGRMb2FkLmNhbGwoaCxnKT8wPT09bS5pdGVtcy5sZW5ndGgmJl8oXCJub19yZXN1bHRzXCIpOl8oXCJub3RfbG9hZGluZ1wiKSwoYT1oLmNhbkNyZWF0ZShnKSkmJihkPV8oXCJvcHRpb25fY3JlYXRlXCIpKSxoLmhhc09wdGlvbnM9bS5pdGVtcy5sZW5ndGg+MHx8YSxPKXtpZihtLml0ZW1zLmxlbmd0aD4wKXtpZih2fHxcInNpbmdsZVwiIT09aC5zZXR0aW5ncy5tb2RlfHxudWxsPT1oLml0ZW1zWzBdfHwodj1oLmdldE9wdGlvbihoLml0ZW1zWzBdKSksIWIuY29udGFpbnModikpe2xldCBlPTBcbmQmJiFoLnNldHRpbmdzLmFkZFByZWNlZGVuY2UmJihlPTEpLHY9aC5zZWxlY3RhYmxlKClbZV19fWVsc2UgZCYmKHY9ZClcbmUmJiFoLmlzT3BlbiYmKGgub3BlbigpLGguc2Nyb2xsVG9PcHRpb24odixcImF1dG9cIikpLGguc2V0QWN0aXZlT3B0aW9uKHYpfWVsc2UgaC5jbGVhckFjdGl2ZU9wdGlvbigpLGUmJmguaXNPcGVuJiZoLmNsb3NlKCExKX1zZWxlY3RhYmxlKCl7cmV0dXJuIHRoaXMuZHJvcGRvd25fY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc2VsZWN0YWJsZV1cIil9YWRkT3B0aW9uKGUsdD0hMSl7Y29uc3QgaT10aGlzXG5pZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBpLmFkZE9wdGlvbnMoZSx0KSwhMVxuY29uc3Qgcz1QKGVbaS5zZXR0aW5ncy52YWx1ZUZpZWxkXSlcbnJldHVybiBudWxsPT09c3x8aS5vcHRpb25zLmhhc093blByb3BlcnR5KHMpPyhpLnVwZGF0ZU9wdGlvbihlW2kuc2V0dGluZ3MudmFsdWVGaWVsZF0sZSksITEpOihlLiRvcmRlcj1lLiRvcmRlcnx8KytpLm9yZGVyLGUuJGlkPWkuaW5wdXRJZCtcIi1vcHQtXCIrZS4kb3JkZXIsaS5vcHRpb25zW3NdPWUsaS5pc0Ryb3Bkb3duQ29udGVudFN0YWxlPSEwLHQmJihpLnVzZXJPcHRpb25zW3NdPXQsaS50cmlnZ2VyKFwib3B0aW9uX2FkZFwiLHMsZSkpLHMpfWFkZE9wdGlvbnMoZSx0PSExKXtCKGUsZT0+e3RoaXMuYWRkT3B0aW9uKGUsdCl9KX1yZWdpc3Rlck9wdGlvbihlKXtyZXR1cm4gdGhpcy5hZGRPcHRpb24oZSl9cmVnaXN0ZXJPcHRpb25Hcm91cChlKXt2YXIgdD1QKGVbdGhpcy5zZXR0aW5ncy5vcHRncm91cFZhbHVlRmllbGRdKVxucmV0dXJuIG51bGwhPT10JiYoZS4kb3JkZXI9ZS4kb3JkZXJ8fCsrdGhpcy5vcmRlcix0aGlzLm9wdGdyb3Vwc1t0XT1lLHQpfWFkZE9wdGlvbkdyb3VwKGUsdCl7dmFyIGlcbnRbdGhpcy5zZXR0aW5ncy5vcHRncm91cFZhbHVlRmllbGRdPWUsKGk9dGhpcy5yZWdpc3Rlck9wdGlvbkdyb3VwKHQpKSYmdGhpcy50cmlnZ2VyKFwib3B0Z3JvdXBfYWRkXCIsaSx0KX1yZW1vdmVPcHRpb25Hcm91cChlKXt0aGlzLm9wdGdyb3Vwcy5oYXNPd25Qcm9wZXJ0eShlKSYmKGRlbGV0ZSB0aGlzLm9wdGdyb3Vwc1tlXSx0aGlzLmNsZWFyQ2FjaGUoKSx0aGlzLnRyaWdnZXIoXCJvcHRncm91cF9yZW1vdmVcIixlKSl9Y2xlYXJPcHRpb25Hcm91cHMoKXt0aGlzLm9wdGdyb3Vwcz17fSx0aGlzLmNsZWFyQ2FjaGUoKSx0aGlzLnRyaWdnZXIoXCJvcHRncm91cF9jbGVhclwiKX11cGRhdGVPcHRpb24oZSx0KXtjb25zdCBpPXRoaXNcbnZhciBzLG5cbmNvbnN0IG89UChlKSxyPVAodFtpLnNldHRpbmdzLnZhbHVlRmllbGRdKVxuaWYobnVsbD09PW8pcmV0dXJuXG5jb25zdCBsPWkub3B0aW9uc1tvXVxuaWYobnVsbD09bClyZXR1cm5cbmlmKFwic3RyaW5nXCIhPXR5cGVvZiByKXRocm93IG5ldyBFcnJvcihcIlZhbHVlIG11c3QgYmUgc2V0IGluIG9wdGlvbiBkYXRhXCIpXG5jb25zdCBhPWkuZ2V0T3B0aW9uKG8pLGM9aS5nZXRJdGVtKG8pXG5pZih0LiRvcmRlcj10LiRvcmRlcnx8bC4kb3JkZXIsZGVsZXRlIGkub3B0aW9uc1tvXSxpLnVuY2FjaGVWYWx1ZShyKSxpLm9wdGlvbnNbcl09dCxhKXtpZihpLmRyb3Bkb3duX2NvbnRlbnQuY29udGFpbnMoYSkpe2NvbnN0IGU9aS5fcmVuZGVyKFwib3B0aW9uXCIsdClcbnNlKGEsZSksaS5hY3RpdmVPcHRpb249PT1hJiZpLnNldEFjdGl2ZU9wdGlvbihlKX1hLnJlbW92ZSgpfWMmJigtMSE9PShuPWkuaXRlbXMuaW5kZXhPZihvKSkmJmkuaXRlbXMuc3BsaWNlKG4sMSxyKSxzPWkuX3JlbmRlcihcIml0ZW1cIix0KSxjLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSYmUShzLFwiYWN0aXZlXCIpLHNlKGMscykpLGkuaXNEcm9wZG93bkNvbnRlbnRTdGFsZT0hMH1yZW1vdmVPcHRpb24oZSx0KXtjb25zdCBpPXRoaXNcbmU9TihlKSxpLnVuY2FjaGVWYWx1ZShlKSxkZWxldGUgaS51c2VyT3B0aW9uc1tlXSxkZWxldGUgaS5vcHRpb25zW2VdLGkuaXNEcm9wZG93bkNvbnRlbnRTdGFsZT0hMCxpLnRyaWdnZXIoXCJvcHRpb25fcmVtb3ZlXCIsZSksaS5yZW1vdmVJdGVtKGUsdCl9Y2xlYXJPcHRpb25zKGUpe2NvbnN0IHQ9KGV8fHRoaXMuY2xlYXJGaWx0ZXIpLmJpbmQodGhpcylcbnRoaXMubG9hZGVkU2VhcmNoZXM9e30sdGhpcy51c2VyT3B0aW9ucz17fSx0aGlzLmNsZWFyQ2FjaGUoKVxuY29uc3QgaT17fVxuQih0aGlzLm9wdGlvbnMsKGUscyk9Pnt0KGUscykmJihpW3NdPWUpfSksdGhpcy5vcHRpb25zPXRoaXMuc2lmdGVyLml0ZW1zPWksdGhpcy5pc0Ryb3Bkb3duQ29udGVudFN0YWxlPSEwLHRoaXMudHJpZ2dlcihcIm9wdGlvbl9jbGVhclwiKX1jbGVhckZpbHRlcihlLHQpe3JldHVybiB0aGlzLml0ZW1zLmluZGV4T2YodCk+PTB9Z2V0T3B0aW9uKGUsdD0hMSl7Y29uc3QgaT1QKGUpXG5pZihudWxsPT09aSlyZXR1cm4gbnVsbFxuY29uc3Qgcz10aGlzLm9wdGlvbnNbaV1cbmlmKG51bGwhPXMpe2lmKHMuJGRpdilyZXR1cm4gcy4kZGl2XG5pZih0KXJldHVybiB0aGlzLl9yZW5kZXIoXCJvcHRpb25cIixzKX1yZXR1cm4gbnVsbH1nZXRBZGphY2VudChlLHQsaT1cIm9wdGlvblwiKXt2YXIgc1xuaWYoIWUpcmV0dXJuIG51bGxcbnM9XCJpdGVtXCI9PWk/dGhpcy5jb250cm9sQ2hpbGRyZW4oKTp0aGlzLmRyb3Bkb3duX2NvbnRlbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXNlbGVjdGFibGVdXCIpXG5mb3IobGV0IGk9MDtpPHMubGVuZ3RoO2krKylpZihzW2ldPT1lKXJldHVybiB0PjA/c1tpKzFdOnNbaS0xXVxucmV0dXJuIG51bGx9Z2V0SXRlbShlKXtpZihcIm9iamVjdFwiPT10eXBlb2YgZSlyZXR1cm4gZVxudmFyIHQ9UChlKVxucmV0dXJuIG51bGwhPT10P3RoaXMuY29udHJvbC5xdWVyeVNlbGVjdG9yKGBbZGF0YS12YWx1ZT1cIiR7TSh0KX1cIl1gKTpudWxsfWFkZEl0ZW1zKGUsdCl7dmFyIGk9dGhpcyxzPUFycmF5LmlzQXJyYXkoZSk/ZTpbZV1cbmNvbnN0IG49KHM9cy5maWx0ZXIoZT0+LTE9PT1pLml0ZW1zLmluZGV4T2YoZSkpKVtzLmxlbmd0aC0xXVxucy5mb3JFYWNoKGU9PntpLmlzUGVuZGluZz1lIT09bixpLmFkZEl0ZW0oZSx0KX0pfWFkZEl0ZW0oZSx0KXtqKHRoaXMsdD9bXTpbXCJjaGFuZ2VcIixcImRyb3Bkb3duX2Nsb3NlXCJdLCgpPT57dmFyIGksc1xuY29uc3Qgbj10aGlzLG89bi5zZXR0aW5ncy5tb2RlLHI9UChlKVxuaWYoKCFyfHwtMT09PW4uaXRlbXMuaW5kZXhPZihyKXx8KFwic2luZ2xlXCI9PT1vJiZuLmNsb3NlKCksXCJzaW5nbGVcIiE9PW8mJm4uc2V0dGluZ3MuZHVwbGljYXRlcykpJiZudWxsIT09ciYmbi5vcHRpb25zLmhhc093blByb3BlcnR5KHIpJiYoXCJzaW5nbGVcIj09PW8mJm4uY2xlYXIodCksXCJtdWx0aVwiIT09b3x8IW4uaXNGdWxsKCkpKXtpZihpPW4uX3JlbmRlcihcIml0ZW1cIixuLm9wdGlvbnNbcl0pLG4uY29udHJvbC5jb250YWlucyhpKSYmKGk9aS5jbG9uZU5vZGUoITApKSxzPW4uaXNGdWxsKCksbi5pdGVtcy5zcGxpY2Uobi5jYXJldFBvcywwLHIpLG4uaW5zZXJ0QXRDYXJldChpKSxuLmlzU2V0dXApe2lmKCFuLmlzUGVuZGluZyYmbi5zZXR0aW5ncy5oaWRlU2VsZWN0ZWQpe2xldCBlPW4uZ2V0T3B0aW9uKHIpLHQ9bi5nZXRBZGphY2VudChlLDEpXG50JiZuLnNldEFjdGl2ZU9wdGlvbih0KX1uLnNldHRpbmdzLmNsZWFyQWZ0ZXJTZWxlY3QmJm4uc2V0VGV4dGJveFZhbHVlKCksbi5pc1BlbmRpbmd8fG4uc2V0dGluZ3MuY2xvc2VBZnRlclNlbGVjdHx8bi5yZWZyZXNoT3B0aW9ucyhuLmlzRm9jdXNlZCYmXCJzaW5nbGVcIiE9PW8pLDAhPW4uc2V0dGluZ3MuY2xvc2VBZnRlclNlbGVjdCYmbi5pc0Z1bGwoKT9uLmNsb3NlKCk6bi5pc1BlbmRpbmd8fG4ucG9zaXRpb25Ecm9wZG93bigpLG4udHJpZ2dlcihcIml0ZW1fYWRkXCIscixpKSxuLmlzUGVuZGluZ3x8bi51cGRhdGVPcmlnaW5hbElucHV0KHtzaWxlbnQ6dH0pfSghbi5pc1BlbmRpbmd8fCFzJiZuLmlzRnVsbCgpKSYmKG4uaW5wdXRTdGF0ZSgpLG4ucmVmcmVzaFN0YXRlKCkpfX0pfXJlbW92ZUl0ZW0oZT1udWxsLHQpe2NvbnN0IGk9dGhpc1xuaWYoIShlPWkuZ2V0SXRlbShlKSkpcmV0dXJuXG52YXIgcyxuXG5jb25zdCBvPWUuZGF0YXNldC52YWx1ZVxucz10ZShlKSxlLnJlbW92ZSgpLGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpJiYobj1pLmFjdGl2ZUl0ZW1zLmluZGV4T2YoZSksaS5hY3RpdmVJdGVtcy5zcGxpY2UobiwxKSxKKGUsXCJhY3RpdmVcIikpLGkuaXRlbXMuc3BsaWNlKHMsMSksaS5pc0Ryb3Bkb3duQ29udGVudFN0YWxlPSEwLCFpLnNldHRpbmdzLnBlcnNpc3QmJmkudXNlck9wdGlvbnMuaGFzT3duUHJvcGVydHkobykmJmkucmVtb3ZlT3B0aW9uKG8sdCksczxpLmNhcmV0UG9zJiZpLnNldENhcmV0KGkuY2FyZXRQb3MtMSksaS51cGRhdGVPcmlnaW5hbElucHV0KHtzaWxlbnQ6dH0pLGkucmVmcmVzaFN0YXRlKCksaS5wb3NpdGlvbkRyb3Bkb3duKCksaS50cmlnZ2VyKFwiaXRlbV9yZW1vdmVcIixvLGUpfWNyZWF0ZUl0ZW0oZT1udWxsLHQ9KCk9Pnt9KXszPT09YXJndW1lbnRzLmxlbmd0aCYmKHQ9YXJndW1lbnRzWzJdKSxcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiYodD0oKT0+e30pXG52YXIgaSxzPXRoaXMsbj1zLmNhcmV0UG9zXG5pZihlPWV8fHMuaW5wdXRWYWx1ZSgpLCFzLmNhbkNyZWF0ZShlKSl7cmV0dXJuIFAoZSkmJnRoaXMub3B0aW9uc1tlXSYmcy5hZGRJdGVtKGUpLHQoKSwhMX1zLmxvY2soKVxudmFyIG89ITEscj1lPT57aWYocy51bmxvY2soKSwhZXx8XCJvYmplY3RcIiE9dHlwZW9mIGUpcmV0dXJuIHQoKVxudmFyIGk9UChlW3Muc2V0dGluZ3MudmFsdWVGaWVsZF0pXG5pZihcInN0cmluZ1wiIT10eXBlb2YgaSlyZXR1cm4gdCgpXG5zLnNldFRleHRib3hWYWx1ZSgpLHMuYWRkT3B0aW9uKGUsITApLHMuc2V0Q2FyZXQobikscy5hZGRJdGVtKGkpLHQoZSksbz0hMH1cbnJldHVybiBpPVwiZnVuY3Rpb25cIj09dHlwZW9mIHMuc2V0dGluZ3MuY3JlYXRlP3Muc2V0dGluZ3MuY3JlYXRlLmNhbGwodGhpcyxlLHIpOntbcy5zZXR0aW5ncy5sYWJlbEZpZWxkXTplLFtzLnNldHRpbmdzLnZhbHVlRmllbGRdOmV9LG98fHIoaSksITB9cmVmcmVzaEl0ZW1zKCl7dmFyIGU9dGhpc1xuZS5pc0Ryb3Bkb3duQ29udGVudFN0YWxlPSEwLGUuaXNTZXR1cCYmZS5hZGRJdGVtcyhlLml0ZW1zKSxlLnVwZGF0ZU9yaWdpbmFsSW5wdXQoKSxlLnJlZnJlc2hTdGF0ZSgpfXJlZnJlc2hTdGF0ZSgpe2NvbnN0IGU9dGhpc1xuZS5yZWZyZXNoVmFsaWRpdHlTdGF0ZSgpXG5jb25zdCB0PWUuaXNGdWxsKCksaT1lLmlzTG9ja2VkXG5lLndyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZShcInJ0bFwiLGUucnRsKVxuY29uc3Qgcz1lLndyYXBwZXIuY2xhc3NMaXN0XG52YXIgblxucy50b2dnbGUoXCJmb2N1c1wiLGUuaXNGb2N1c2VkKSxzLnRvZ2dsZShcImRpc2FibGVkXCIsZS5pc0Rpc2FibGVkKSxzLnRvZ2dsZShcInJlYWRvbmx5XCIsZS5pc1JlYWRPbmx5KSxzLnRvZ2dsZShcInJlcXVpcmVkXCIsZS5pc1JlcXVpcmVkKSxzLnRvZ2dsZShcImludmFsaWRcIiwhZS5pc1ZhbGlkKSxzLnRvZ2dsZShcImxvY2tlZFwiLGkpLHMudG9nZ2xlKFwiZnVsbFwiLHQpLHMudG9nZ2xlKFwiaW5wdXQtYWN0aXZlXCIsZS5pc0ZvY3VzZWQmJiFlLmlzSW5wdXRIaWRkZW4pLHMudG9nZ2xlKFwiZHJvcGRvd24tYWN0aXZlXCIsZS5pc09wZW4pLHMudG9nZ2xlKFwiaGFzLW9wdGlvbnNcIiwobj1lLm9wdGlvbnMsMD09PU9iamVjdC5rZXlzKG4pLmxlbmd0aCkpLHMudG9nZ2xlKFwiaGFzLWl0ZW1zXCIsZS5pdGVtcy5sZW5ndGg+MCl9cmVmcmVzaFZhbGlkaXR5U3RhdGUoKXt2YXIgZT10aGlzXG5lLmlucHV0LnZhbGlkaXR5JiYoZS5pc1ZhbGlkPWUuaW5wdXQudmFsaWRpdHkudmFsaWQsZS5pc0ludmFsaWQ9IWUuaXNWYWxpZCl9aXNGdWxsKCl7cmV0dXJuIG51bGwhPT10aGlzLnNldHRpbmdzLm1heEl0ZW1zJiZ0aGlzLml0ZW1zLmxlbmd0aD49dGhpcy5zZXR0aW5ncy5tYXhJdGVtc311cGRhdGVPcmlnaW5hbElucHV0KGU9e30pe2NvbnN0IHQ9dGhpc1xudmFyIGksc1xuY29uc3Qgbj10LmlucHV0LnF1ZXJ5U2VsZWN0b3IoJ29wdGlvblt2YWx1ZT1cIlwiXScpXG5pZih0LmlzX3NlbGVjdF90YWcpe2NvbnN0IG89W10scj10LmlucHV0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb246Y2hlY2tlZFwiKS5sZW5ndGhcbmZ1bmN0aW9uIGwoZSxpLHMpe3JldHVybiBlfHwoZT1LKCc8b3B0aW9uIHZhbHVlPVwiJytEKGkpKydcIj4nK0QocykrXCI8L29wdGlvbj5cIikpLGUhPW4mJnQuaW5wdXQuYXBwZW5kKGUpLG8ucHVzaChlKSwoZSE9bnx8cj4wfHxcIm11bHRpXCI9PXQuc2V0dGluZ3MubW9kZSkmJihlLnNlbGVjdGVkPSEwKSxlfXQuaW5wdXQucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvbjpjaGVja2VkXCIpLmZvckVhY2goZT0+e2Uuc2VsZWN0ZWQ9ITF9KSwwPT10Lml0ZW1zLmxlbmd0aCYmXCJzaW5nbGVcIj09dC5zZXR0aW5ncy5tb2RlP2wobixcIlwiLFwiXCIpOnQuaXRlbXMuZm9yRWFjaChlPT57aWYoaT10Lm9wdGlvbnNbZV0scz1pW3Quc2V0dGluZ3MubGFiZWxGaWVsZF18fFwiXCIsby5pbmNsdWRlcyhpLiRvcHRpb24pKXtsKHQuaW5wdXQucXVlcnlTZWxlY3Rvcihgb3B0aW9uW3ZhbHVlPVwiJHtNKGUpfVwiXTpub3QoOmNoZWNrZWQpYCksZSxzKX1lbHNlIGkuJG9wdGlvbj1sKGkuJG9wdGlvbixlLHMpfSl9ZWxzZSB0LmlucHV0LnZhbHVlPXQuZ2V0VmFsdWUoKVxudC5pc1NldHVwJiYoZS5zaWxlbnR8fHQudHJpZ2dlcihcImNoYW5nZVwiLHQuZ2V0VmFsdWUoKSkpfW9wZW4oKXt2YXIgZT10aGlzXG5lLmlzTG9ja2VkfHxlLmlzT3Blbnx8XCJtdWx0aVwiPT09ZS5zZXR0aW5ncy5tb2RlJiZlLmlzRnVsbCgpfHwoZS5pc09wZW49ITAsaWUoZS5mb2N1c19ub2RlLHtcImFyaWEtZXhwYW5kZWRcIjpcInRydWVcIn0pLGUucmVmcmVzaFN0YXRlKCksVyhlLmRyb3Bkb3duLHt2aXNpYmlsaXR5OlwiaGlkZGVuXCIsZGlzcGxheTpcImJsb2NrXCJ9KSxlLnBvc2l0aW9uRHJvcGRvd24oKSxXKGUuZHJvcGRvd24se3Zpc2liaWxpdHk6XCJ2aXNpYmxlXCIsZGlzcGxheTpcImJsb2NrXCJ9KSxlLmZvY3VzKCksZS50cmlnZ2VyKFwiZHJvcGRvd25fb3BlblwiLGUuZHJvcGRvd24pKX1jbG9zZShlPSEwKXt2YXIgdD10aGlzLGk9dC5pc09wZW5cbmUmJih0LnNldFRleHRib3hWYWx1ZSgpLFwic2luZ2xlXCI9PT10LnNldHRpbmdzLm1vZGUmJnQuaXRlbXMubGVuZ3RoJiZ0LmlucHV0U3RhdGUoKSksdC5pc09wZW49ITEsaWUodC5mb2N1c19ub2RlLHtcImFyaWEtZXhwYW5kZWRcIjpcImZhbHNlXCJ9KSxXKHQuZHJvcGRvd24se2Rpc3BsYXk6XCJub25lXCJ9KSx0LnNldHRpbmdzLmhpZGVTZWxlY3RlZCYmdC5jbGVhckFjdGl2ZU9wdGlvbigpLHQucmVmcmVzaFN0YXRlKCksaSYmdC50cmlnZ2VyKFwiZHJvcGRvd25fY2xvc2VcIix0LmRyb3Bkb3duKX1wb3NpdGlvbkRyb3Bkb3duKCl7aWYoXCJib2R5XCI9PT10aGlzLnNldHRpbmdzLmRyb3Bkb3duUGFyZW50KXt2YXIgZT10aGlzLmNvbnRyb2wsdD1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGk9ZS5vZmZzZXRIZWlnaHQrdC50b3Ard2luZG93LnNjcm9sbFkscz10LmxlZnQrd2luZG93LnNjcm9sbFhcblcodGhpcy5kcm9wZG93bix7d2lkdGg6dC53aWR0aCtcInB4XCIsdG9wOmkrXCJweFwiLGxlZnQ6cytcInB4XCJ9KX19Y2xlYXIoZSl7dmFyIHQ9dGhpc1xuaWYodC5pdGVtcy5sZW5ndGgpe3ZhciBpPXQuY29udHJvbENoaWxkcmVuKClcbkIoaSxlPT57dC5yZW1vdmVJdGVtKGUsITApfSksdC5pbnB1dFN0YXRlKCksZXx8dC51cGRhdGVPcmlnaW5hbElucHV0KCksdC50cmlnZ2VyKFwiY2xlYXJcIil9fWluc2VydEF0Q2FyZXQoZSl7Y29uc3QgdD10aGlzLGk9dC5jYXJldFBvcyxzPXQuY29udHJvbFxucy5pbnNlcnRCZWZvcmUoZSxzLmNoaWxkcmVuW2ldfHxudWxsKSx0LnNldENhcmV0KGkrMSl9ZGVsZXRlU2VsZWN0aW9uKGUpe3ZhciB0LGkscyxuLG8scj10aGlzXG50PWUmJjg9PT1lLmtleUNvZGU/LTE6MSxpPXtzdGFydDoobz1yLmNvbnRyb2xfaW5wdXQpLnNlbGVjdGlvblN0YXJ0fHwwLGxlbmd0aDooby5zZWxlY3Rpb25FbmR8fDApLShvLnNlbGVjdGlvblN0YXJ0fHwwKX1cbmNvbnN0IGw9W11cbmlmKHIuYWN0aXZlSXRlbXMubGVuZ3RoKW49ZWUoci5hY3RpdmVJdGVtcyx0KSxzPXRlKG4pLHQ+MCYmcysrLEIoci5hY3RpdmVJdGVtcyxlPT5sLnB1c2goZSkpXG5lbHNlIGlmKChyLmlzRm9jdXNlZHx8XCJzaW5nbGVcIj09PXIuc2V0dGluZ3MubW9kZSkmJnIuaXRlbXMubGVuZ3RoKXtjb25zdCBlPXIuY29udHJvbENoaWxkcmVuKClcbmxldCBzXG50PDAmJjA9PT1pLnN0YXJ0JiYwPT09aS5sZW5ndGg/cz1lW3IuY2FyZXRQb3MtMV06dD4wJiZpLnN0YXJ0PT09ci5pbnB1dFZhbHVlKCkubGVuZ3RoJiYocz1lW3IuY2FyZXRQb3NdKSx2b2lkIDAhPT1zJiZsLnB1c2gocyl9aWYoIXIuc2hvdWxkRGVsZXRlKGwsZSkpcmV0dXJuITFcbmZvcigkKGUsITApLHZvaWQgMCE9PXMmJnIuc2V0Q2FyZXQocyk7bC5sZW5ndGg7KXIucmVtb3ZlSXRlbShsLnBvcCgpKVxucmV0dXJuIHIuaW5wdXRTdGF0ZSgpLHIucG9zaXRpb25Ecm9wZG93bigpLHIucmVmcmVzaE9wdGlvbnMoITEpLCEwfXNob3VsZERlbGV0ZShlLHQpe2NvbnN0IGk9ZS5tYXAoZT0+ZS5kYXRhc2V0LnZhbHVlKVxucmV0dXJuISghaS5sZW5ndGh8fFwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMuc2V0dGluZ3Mub25EZWxldGUmJiExPT09dGhpcy5zZXR0aW5ncy5vbkRlbGV0ZS5jYWxsKHRoaXMsaSx0KSl9YWR2YW5jZVNlbGVjdGlvbihlLHQpe3ZhciBpLHMsbj10aGlzXG5uLnJ0bCYmKGUqPS0xKSxuLmlucHV0VmFsdWUoKS5sZW5ndGh8fChSKG9lLHQpfHxSKFwic2hpZnRLZXlcIix0KT8ocz0oaT1uLmdldExhc3RBY3RpdmUoZSkpP2kuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpP24uZ2V0QWRqYWNlbnQoaSxlLFwiaXRlbVwiKTppOmU+MD9uLmNvbnRyb2xfaW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nOm4uY29udHJvbF9pbnB1dC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSYmKHMuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpJiZuLnJlbW92ZUFjdGl2ZUl0ZW0oaSksbi5zZXRBY3RpdmVJdGVtQ2xhc3MocykpOm4ubW92ZUNhcmV0KGUpKX1tb3ZlQ2FyZXQoZSl7fWdldExhc3RBY3RpdmUoZSl7bGV0IHQ9dGhpcy5jb250cm9sLnF1ZXJ5U2VsZWN0b3IoXCIubGFzdC1hY3RpdmVcIilcbmlmKHQpcmV0dXJuIHRcbnZhciBpPXRoaXMuY29udHJvbC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjdGl2ZVwiKVxucmV0dXJuIGk/ZWUoaSxlKTp2b2lkIDB9c2V0Q2FyZXQoZSl7dGhpcy5jYXJldFBvcz10aGlzLml0ZW1zLmxlbmd0aH1jb250cm9sQ2hpbGRyZW4oKXtyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmNvbnRyb2wucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXRzLWl0ZW1dXCIpKX1sb2NrKCl7dGhpcy5zZXRMb2NrZWQoITApfXVubG9jaygpe3RoaXMuc2V0TG9ja2VkKCExKX1zZXRMb2NrZWQoZT10aGlzLmlzUmVhZE9ubHl8fHRoaXMuaXNEaXNhYmxlZCl7dGhpcy5pc0xvY2tlZD1lLHRoaXMucmVmcmVzaFN0YXRlKCl9ZGlzYWJsZSgpe3RoaXMuc2V0RGlzYWJsZWQoITApLHRoaXMuY2xvc2UoKX1lbmFibGUoKXt0aGlzLnNldERpc2FibGVkKCExKX1zZXREaXNhYmxlZChlKXt0aGlzLmZvY3VzX25vZGUudGFiSW5kZXg9ZT8tMTp0aGlzLnRhYkluZGV4LHRoaXMuaXNEaXNhYmxlZD1lLHRoaXMuaW5wdXQuZGlzYWJsZWQ9ZSx0aGlzLmNvbnRyb2xfaW5wdXQuZGlzYWJsZWQ9ZSx0aGlzLnNldExvY2tlZCgpfXNldFJlYWRPbmx5KGUpe3RoaXMuaXNSZWFkT25seT1lLHRoaXMuaW5wdXQucmVhZE9ubHk9ZSx0aGlzLmNvbnRyb2xfaW5wdXQucmVhZE9ubHk9ZSx0aGlzLnNldExvY2tlZCgpfWRlc3Ryb3koKXt2YXIgZT10aGlzLHQ9ZS5yZXZlcnRTZXR0aW5nc1xuZS50cmlnZ2VyKFwiZGVzdHJveVwiKSxlLm9mZigpLGUud3JhcHBlci5yZW1vdmUoKSxlLmRyb3Bkb3duLnJlbW92ZSgpLGUuaW5wdXQuaW5uZXJIVE1MPXQuaW5uZXJIVE1MLGUuaW5wdXQudGFiSW5kZXg9dC50YWJJbmRleCxKKGUuaW5wdXQsXCJ0b21zZWxlY3RlZFwiLFwidHMtaGlkZGVuLWFjY2Vzc2libGVcIiksZS5fZGVzdHJveSgpLGRlbGV0ZSBlLmlucHV0LnRvbXNlbGVjdH1yZW5kZXIoZSx0KXt2YXIgaSxzXG5jb25zdCBuPXRoaXNcbmlmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHRoaXMuc2V0dGluZ3MucmVuZGVyW2VdKXJldHVybiBudWxsXG5pZighKHM9bi5zZXR0aW5ncy5yZW5kZXJbZV0uY2FsbCh0aGlzLHQsRCkpKXJldHVybiBudWxsXG5pZihzPUsocyksXCJvcHRpb25cIj09PWV8fFwib3B0aW9uX2NyZWF0ZVwiPT09ZT90W24uc2V0dGluZ3MuZGlzYWJsZWRGaWVsZF0/aWUocyx7XCJhcmlhLWRpc2FibGVkXCI6XCJ0cnVlXCJ9KTppZShzLHtcImRhdGEtc2VsZWN0YWJsZVwiOlwiXCJ9KTpcIm9wdGdyb3VwXCI9PT1lJiYoaT10Lmdyb3VwW24uc2V0dGluZ3Mub3B0Z3JvdXBWYWx1ZUZpZWxkXSxpZShzLHtcImRhdGEtZ3JvdXBcIjppfSksdC5ncm91cFtuLnNldHRpbmdzLmRpc2FibGVkRmllbGRdJiZpZShzLHtcImRhdGEtZGlzYWJsZWRcIjpcIlwifSkpLFwib3B0aW9uXCI9PT1lfHxcIml0ZW1cIj09PWUpe2NvbnN0IGk9Tih0W24uc2V0dGluZ3MudmFsdWVGaWVsZF0pXG5pZShzLHtcImRhdGEtdmFsdWVcIjppfSksXCJpdGVtXCI9PT1lPyhRKHMsbi5zZXR0aW5ncy5pdGVtQ2xhc3MpLGllKHMse1wiZGF0YS10cy1pdGVtXCI6XCJcIn0pKTooUShzLG4uc2V0dGluZ3Mub3B0aW9uQ2xhc3MpLGllKHMse3JvbGU6XCJvcHRpb25cIixpZDp0LiRpZH0pLHQuJGRpdj1zLG4ub3B0aW9uc1tpXT10KX1yZXR1cm4gc31fcmVuZGVyKGUsdCl7Y29uc3QgaT10aGlzLnJlbmRlcihlLHQpXG5pZihudWxsPT1pKXRocm93XCJIVE1MRWxlbWVudCBleHBlY3RlZFwiXG5yZXR1cm4gaX1jbGVhckNhY2hlKCl7Qih0aGlzLm9wdGlvbnMsZT0+e2UuJGRpdiYmKGUuJGRpdi5yZW1vdmUoKSxkZWxldGUgZS4kZGl2KX0pfXVuY2FjaGVWYWx1ZShlKXtjb25zdCB0PXRoaXMuZ2V0T3B0aW9uKGUpXG50JiZ0LnJlbW92ZSgpfWNhbkNyZWF0ZShlKXtyZXR1cm4gdGhpcy5zZXR0aW5ncy5jcmVhdGUmJmUubGVuZ3RoPjAmJnRoaXMuc2V0dGluZ3MuY3JlYXRlRmlsdGVyLmNhbGwodGhpcyxlKX1ob29rKGUsdCxpKXt2YXIgcz10aGlzLG49c1t0XVxuc1t0XT1mdW5jdGlvbigpe3ZhciB0LG9cbnJldHVyblwiYWZ0ZXJcIj09PWUmJih0PW4uYXBwbHkocyxhcmd1bWVudHMpKSxvPWkuYXBwbHkocyxhcmd1bWVudHMpLFwiaW5zdGVhZFwiPT09ZT9vOihcImJlZm9yZVwiPT09ZSYmKHQ9bi5hcHBseShzLGFyZ3VtZW50cykpLHQpfX19cmV0dXJuIGNlLmRlZmluZShcImNoYW5nZV9saXN0ZW5lclwiLGZ1bmN0aW9uKCl7cSh0aGlzLmlucHV0LFwiY2hhbmdlXCIsKCk9Pnt0aGlzLnN5bmMoKX0pfSksY2UuZGVmaW5lKFwiY2hlY2tib3hfb3B0aW9uc1wiLGZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsaT10Lm9uT3B0aW9uU2VsZWN0XG50LnNldHRpbmdzLmhpZGVTZWxlY3RlZD0hMVxuY29uc3Qgcz1PYmplY3QuYXNzaWduKHtjbGFzc05hbWU6XCJ0b21zZWxlY3QtY2hlY2tib3hcIixjaGVja2VkQ2xhc3NOYW1lczp2b2lkIDAsdW5jaGVja2VkQ2xhc3NOYW1lczp2b2lkIDB9LGUpXG52YXIgbj1mdW5jdGlvbihlLHQpe3Q/KGUuY2hlY2tlZD0hMCxzLnVuY2hlY2tlZENsYXNzTmFtZXMmJmUuY2xhc3NMaXN0LnJlbW92ZSguLi5zLnVuY2hlY2tlZENsYXNzTmFtZXMpLHMuY2hlY2tlZENsYXNzTmFtZXMmJmUuY2xhc3NMaXN0LmFkZCguLi5zLmNoZWNrZWRDbGFzc05hbWVzKSk6KGUuY2hlY2tlZD0hMSxzLmNoZWNrZWRDbGFzc05hbWVzJiZlLmNsYXNzTGlzdC5yZW1vdmUoLi4ucy5jaGVja2VkQ2xhc3NOYW1lcykscy51bmNoZWNrZWRDbGFzc05hbWVzJiZlLmNsYXNzTGlzdC5hZGQoLi4ucy51bmNoZWNrZWRDbGFzc05hbWVzKSl9LG89ZnVuY3Rpb24oZSl7c2V0VGltZW91dCgoKT0+e3ZhciB0PWUucXVlcnlTZWxlY3RvcihcImlucHV0LlwiK3MuY2xhc3NOYW1lKVxudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQmJm4odCxlLmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKX0sMSl9XG50Lmhvb2soXCJhZnRlclwiLFwic2V0dXBUZW1wbGF0ZXNcIiwoKT0+e3ZhciBlPXQuc2V0dGluZ3MucmVuZGVyLm9wdGlvblxudC5zZXR0aW5ncy5yZW5kZXIub3B0aW9uPShpLG8pPT57dmFyIHI9SyhlLmNhbGwodCxpLG8pKSxsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxucy5jbGFzc05hbWUmJmwuY2xhc3NMaXN0LmFkZChzLmNsYXNzTmFtZSksbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbihlKXskKGUpfSksbC50eXBlPVwiY2hlY2tib3hcIlxuY29uc3QgYT1QKGlbdC5zZXR0aW5ncy52YWx1ZUZpZWxkXSlcbnJldHVybiBuKGwsISEoYSYmdC5pdGVtcy5pbmRleE9mKGEpPi0xKSksci5wcmVwZW5kKGwpLHJ9fSksdC5vbihcIml0ZW1fcmVtb3ZlXCIsZT0+e3ZhciBpPXQuZ2V0T3B0aW9uKGUpXG5pJiYoaS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIiksbyhpKSl9KSx0Lm9uKFwiaXRlbV9hZGRcIixlPT57dmFyIGk9dC5nZXRPcHRpb24oZSlcbmkmJm8oaSl9KSx0Lmhvb2soXCJpbnN0ZWFkXCIsXCJvbk9wdGlvblNlbGVjdFwiLChlLHMpPT57aWYocy5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSlyZXR1cm4gcy5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIiksdC5yZW1vdmVJdGVtKHMuZGF0YXNldC52YWx1ZSksdC5yZWZyZXNoT3B0aW9ucygpLHZvaWQgJChlLCEwKVxuaS5jYWxsKHQsZSxzKSxvKHMpfSl9KSxjZS5kZWZpbmUoXCJjbGVhcl9idXR0b25cIixmdW5jdGlvbihlKXtjb25zdCB0PXRoaXMsaT1PYmplY3QuYXNzaWduKHtjbGFzc05hbWU6XCJjbGVhci1idXR0b25cIix0aXRsZTpcIkNsZWFyIEFsbFwiLHJvbGU6XCJidXR0b25cIix0YWJpbmRleDowLGh0bWw6ZT0+YDxkaXYgY2xhc3M9XCIke2UuY2xhc3NOYW1lfVwiIHRpdGxlPVwiJHtlLnRpdGxlfVwiIHJvbGU9XCIke2Uucm9sZX1cIiB0YWJpbmRleD1cIiR7ZS50YWJpbmRleH1cIj4mdGltZXM7PC9kaXY+YH0sZSlcbnQub24oXCJpbml0aWFsaXplXCIsKCk9Pnt2YXIgZT1LKGkuaHRtbChpKSlcbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZT0+e3QuaXNMb2NrZWR8fCh0LmNsZWFyKCksXCJzaW5nbGVcIj09PXQuc2V0dGluZ3MubW9kZSYmdC5zZXR0aW5ncy5hbGxvd0VtcHR5T3B0aW9uJiZ0LmFkZEl0ZW0oXCJcIiksdC5yZWZyZXNoT3B0aW9ucyghMSksZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCkpfSksdC5jb250cm9sLmFwcGVuZENoaWxkKGUpfSl9KSxjZS5kZWZpbmUoXCJkcmFnX2Ryb3BcIixmdW5jdGlvbigpe3ZhciBlPXRoaXNcbmlmKFwibXVsdGlcIiE9PWUuc2V0dGluZ3MubW9kZSlyZXR1cm5cbnZhciB0PWUubG9jayxpPWUudW5sb2NrXG5sZXQgcyxuPSEwXG5lLmhvb2soXCJhZnRlclwiLFwic2V0dXBUZW1wbGF0ZXNcIiwoKT0+e3ZhciB0PWUuc2V0dGluZ3MucmVuZGVyLml0ZW1cbmUuc2V0dGluZ3MucmVuZGVyLml0ZW09KGksbyk9Pntjb25zdCByPUsodC5jYWxsKGUsaSxvKSlcbmllKHIse2RyYWdnYWJsZTpcInRydWVcIn0pXG5jb25zdCBsPWU9PntlLnByZXZlbnREZWZhdWx0KCksci5jbGFzc0xpc3QuYWRkKFwidHMtZHJhZy1vdmVyXCIpLGEocixzKX0sYT0oZSx0KT0+e3ZhciBpLHMsblxudm9pZCAwIT09dCYmKCgoZSx0KT0+e2Rve3ZhciBpXG5pZihlPT0odD1udWxsPT0oaT10KT92b2lkIDA6aS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSlyZXR1cm4hMH13aGlsZSh0JiZ0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcpXG5yZXR1cm4hMX0pKHQscik/KHM9dCxudWxsPT0obj0oaT1lKS5wYXJlbnROb2RlKXx8bi5pbnNlcnRCZWZvcmUocyxpLm5leHRTaWJsaW5nKSk6KChlLHQpPT57dmFyIGlcbm51bGw9PShpPWUucGFyZW50Tm9kZSl8fGkuaW5zZXJ0QmVmb3JlKHQsZSl9KShlLHQpKX1cbnJldHVybiBxKHIsXCJtb3VzZWRvd25cIixlPT57bnx8JChlKSxlLnN0b3BQcm9wYWdhdGlvbigpfSkscShyLFwiZHJhZ3N0YXJ0XCIsZT0+e3M9cixzZXRUaW1lb3V0KCgpPT57ci5jbGFzc0xpc3QuYWRkKFwidHMtZHJhZ2dpbmdcIil9LDApfSkscShyLFwiZHJhZ2VudGVyXCIsbCkscShyLFwiZHJhZ292ZXJcIixsKSxxKHIsXCJkcmFnbGVhdmVcIiwoKT0+e3IuY2xhc3NMaXN0LnJlbW92ZShcInRzLWRyYWctb3ZlclwiKX0pLHEocixcImRyYWdlbmRcIiwoKT0+e3ZhciB0XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRzLWRyYWctb3ZlclwiKS5mb3JFYWNoKGU9PmUuY2xhc3NMaXN0LnJlbW92ZShcInRzLWRyYWctb3ZlclwiKSksbnVsbD09KHQ9cyl8fHQuY2xhc3NMaXN0LnJlbW92ZShcInRzLWRyYWdnaW5nXCIpLHM9dm9pZCAwXG52YXIgaT1bXVxuZS5jb250cm9sLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS12YWx1ZV1cIikuZm9yRWFjaChlPT57aWYoZS5kYXRhc2V0LnZhbHVlKXtsZXQgdD1lLmRhdGFzZXQudmFsdWVcbnQmJmkucHVzaCh0KX19KSxlLnNldFZhbHVlKGkpfSkscn19KSxlLmhvb2soXCJpbnN0ZWFkXCIsXCJsb2NrXCIsKCk9PihuPSExLHQuY2FsbChlKSkpLGUuaG9vayhcImluc3RlYWRcIixcInVubG9ja1wiLCgpPT4obj0hMCxpLmNhbGwoZSkpKX0pLGNlLmRlZmluZShcImRyb3Bkb3duX2hlYWRlclwiLGZ1bmN0aW9uKGUpe2NvbnN0IHQ9dGhpcyxpPU9iamVjdC5hc3NpZ24oe3RpdGxlOlwiVW50aXRsZWRcIixoZWFkZXJDbGFzczpcImRyb3Bkb3duLWhlYWRlclwiLHRpdGxlUm93Q2xhc3M6XCJkcm9wZG93bi1oZWFkZXItdGl0bGVcIixsYWJlbENsYXNzOlwiZHJvcGRvd24taGVhZGVyLWxhYmVsXCIsY2xvc2VDbGFzczpcImRyb3Bkb3duLWhlYWRlci1jbG9zZVwiLGh0bWw6ZT0+JzxkaXYgY2xhc3M9XCInK2UuaGVhZGVyQ2xhc3MrJ1wiPjxkaXYgY2xhc3M9XCInK2UudGl0bGVSb3dDbGFzcysnXCI+PHNwYW4gY2xhc3M9XCInK2UubGFiZWxDbGFzcysnXCI+JytlLnRpdGxlKyc8L3NwYW4+PGEgY2xhc3M9XCInK2UuY2xvc2VDbGFzcysnXCI+JnRpbWVzOzwvYT48L2Rpdj48L2Rpdj4nfSxlKVxudC5vbihcImluaXRpYWxpemVcIiwoKT0+e3ZhciBlPUsoaS5odG1sKGkpKSxzPWUucXVlcnlTZWxlY3RvcihcIi5cIitpLmNsb3NlQ2xhc3MpXG5zJiZzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGU9PnskKGUsITApLHQuY2xvc2UoKX0pLHQuZHJvcGRvd24uaW5zZXJ0QmVmb3JlKGUsdC5kcm9wZG93bi5maXJzdENoaWxkKX0pfSksY2UuZGVmaW5lKFwiY2FyZXRfcG9zaXRpb25cIixmdW5jdGlvbigpe3ZhciBlPXRoaXNcbmUuaG9vayhcImluc3RlYWRcIixcInNldENhcmV0XCIsdD0+e1wic2luZ2xlXCIhPT1lLnNldHRpbmdzLm1vZGUmJmUuY29udHJvbC5jb250YWlucyhlLmNvbnRyb2xfaW5wdXQpPyh0PU1hdGgubWF4KDAsTWF0aC5taW4oZS5pdGVtcy5sZW5ndGgsdCkpKT09ZS5jYXJldFBvc3x8ZS5pc1BlbmRpbmd8fGUuY29udHJvbENoaWxkcmVuKCkuZm9yRWFjaCgoaSxzKT0+e3M8dD9lLmNvbnRyb2xfaW5wdXQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlYmVnaW5cIixpKTplLmNvbnRyb2wuYXBwZW5kQ2hpbGQoaSl9KTp0PWUuaXRlbXMubGVuZ3RoLGUuY2FyZXRQb3M9dH0pLGUuaG9vayhcImluc3RlYWRcIixcIm1vdmVDYXJldFwiLHQ9PntpZighZS5pc0ZvY3VzZWQpcmV0dXJuXG5jb25zdCBpPWUuZ2V0TGFzdEFjdGl2ZSh0KVxuaWYoaSl7Y29uc3Qgcz10ZShpKVxuZS5zZXRDYXJldCh0PjA/cysxOnMpLGUuc2V0QWN0aXZlSXRlbSgpLEooaSxcImxhc3QtYWN0aXZlXCIpfWVsc2UgZS5zZXRDYXJldChlLmNhcmV0UG9zK3QpfSl9KSxjZS5kZWZpbmUoXCJkcm9wZG93bl9pbnB1dFwiLGZ1bmN0aW9uKCl7Y29uc3QgZT10aGlzXG5lLnNldHRpbmdzLnNob3VsZE9wZW49ITAsZS5ob29rKFwiYmVmb3JlXCIsXCJzZXR1cFwiLCgpPT57dmFyIHRcbmUuZm9jdXNfbm9kZT1lLmNvbnRyb2wsUShlLmNvbnRyb2xfaW5wdXQsXCJkcm9wZG93bi1pbnB1dFwiKVxuY29uc3QgaT1LKCc8ZGl2IGNsYXNzPVwiZHJvcGRvd24taW5wdXQtd3JhcFwiPicpXG5pLmFwcGVuZChlLmNvbnRyb2xfaW5wdXQpLGUuZHJvcGRvd24uaW5zZXJ0QmVmb3JlKGksZS5kcm9wZG93bi5maXJzdENoaWxkKVxuY29uc3Qgcz1LKCc8aW5wdXQgY2xhc3M9XCJpdGVtcy1wbGFjZWhvbGRlclwiIHRhYmluZGV4PVwiLTFcIiAvPicpXG5zLnBsYWNlaG9sZGVyPWUuc2V0dGluZ3MucGxhY2Vob2xkZXJ8fFwiXCIsZS5jb250cm9sLmFwcGVuZChzKVxuY29uc3Qgbj1udWxsPT0odD1lLmlucHV0KT92b2lkIDA6dC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpXG5uJiZzLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIixuKX0pLGUub24oXCJpbml0aWFsaXplXCIsKCk9PntlLmNvbnRyb2xfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIix0PT57c3dpdGNoKHQua2V5Q29kZSl7Y2FzZSAyNzpyZXR1cm4gZS5pc09wZW4mJigkKHQsITApLGUuY2xvc2UoKSksdm9pZCBlLmNsZWFyQWN0aXZlSXRlbXMoKVxuY2FzZSA5OmUuZm9jdXNfbm9kZS50YWJJbmRleD0tMX1yZXR1cm4gZS5vbktleURvd24uY2FsbChlLHQpfSksZS5vbihcImJsdXJcIiwoKT0+e2UuZm9jdXNfbm9kZS50YWJJbmRleD1lLmlzRGlzYWJsZWQ/LTE6ZS50YWJJbmRleH0pLGUub24oXCJkcm9wZG93bl9vcGVuXCIsKCk9PntlLmNvbnRyb2xfaW5wdXQuZm9jdXMoKX0pXG5jb25zdCB0PWUub25CbHVyXG5lLmhvb2soXCJpbnN0ZWFkXCIsXCJvbkJsdXJcIixpPT57aWYoIWl8fGkucmVsYXRlZFRhcmdldCE9ZS5jb250cm9sX2lucHV0KXJldHVybiB0LmNhbGwoZSl9KSxxKGUuY29udHJvbF9pbnB1dCxcImJsdXJcIiwoKT0+ZS5vbkJsdXIoKSksZS5ob29rKFwiYmVmb3JlXCIsXCJjbG9zZVwiLCgpPT57ZS5pc09wZW4mJmUuZm9jdXNfbm9kZS5mb2N1cyh7cHJldmVudFNjcm9sbDohMH0pfSl9KX0pLGNlLmRlZmluZShcImlucHV0X2F1dG9ncm93XCIsZnVuY3Rpb24oKXt2YXIgZT10aGlzXG5lLm9uKFwiaW5pdGlhbGl6ZVwiLCgpPT57dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIiksaT1lLmNvbnRyb2xfaW5wdXRcbnQuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOmFic29sdXRlOyB0b3A6LTk5OTk5cHg7IGxlZnQ6LTk5OTk5cHg7IHdpZHRoOmF1dG87IHBhZGRpbmc6MDsgd2hpdGUtc3BhY2U6cHJlOyBcIixlLndyYXBwZXIuYXBwZW5kQ2hpbGQodClcbmZvcihjb25zdCBlIG9mW1wibGV0dGVyU3BhY2luZ1wiLFwiZm9udFNpemVcIixcImZvbnRGYW1pbHlcIixcImZvbnRXZWlnaHRcIixcInRleHRUcmFuc2Zvcm1cIl0pdC5zdHlsZVtlXT1pLnN0eWxlW2VdXG52YXIgcz0oKT0+e3QudGV4dENvbnRlbnQ9aS52YWx1ZSxpLnN0eWxlLndpZHRoPXQuY2xpZW50V2lkdGgrXCJweFwifVxucygpLGUub24oXCJ1cGRhdGUgaXRlbV9hZGQgaXRlbV9yZW1vdmVcIixzKSxxKGksXCJpbnB1dFwiLHMpLHEoaSxcImtleXVwXCIscykscShpLFwiYmx1clwiLHMpLHEoaSxcInVwZGF0ZVwiLHMpfSl9KSxjZS5kZWZpbmUoXCJub19iYWNrc3BhY2VfZGVsZXRlXCIsZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS5kZWxldGVTZWxlY3Rpb25cbnRoaXMuaG9vayhcImluc3RlYWRcIixcImRlbGV0ZVNlbGVjdGlvblwiLGk9PiEhZS5hY3RpdmVJdGVtcy5sZW5ndGgmJnQuY2FsbChlLGkpKX0pLGNlLmRlZmluZShcIm5vX2FjdGl2ZV9pdGVtc1wiLGZ1bmN0aW9uKCl7dGhpcy5ob29rKFwiaW5zdGVhZFwiLFwic2V0QWN0aXZlSXRlbVwiLCgpPT57fSksdGhpcy5ob29rKFwiaW5zdGVhZFwiLFwic2VsZWN0QWxsXCIsKCk9Pnt9KX0pLGNlLmRlZmluZShcIm9wdGdyb3VwX2NvbHVtbnNcIixmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLm9uS2V5RG93blxuZS5ob29rKFwiaW5zdGVhZFwiLFwib25LZXlEb3duXCIsaT0+e3ZhciBzLG4sbyxyXG5pZighZS5pc09wZW58fDM3IT09aS5rZXlDb2RlJiYzOSE9PWkua2V5Q29kZSlyZXR1cm4gdC5jYWxsKGUsaSlcbmUuaWdub3JlSG92ZXI9ITAscj1aKGUuYWN0aXZlT3B0aW9uLFwiW2RhdGEtZ3JvdXBdXCIpLHM9dGUoZS5hY3RpdmVPcHRpb24sXCJbZGF0YS1zZWxlY3RhYmxlXVwiKSxyJiYocj0zNz09PWkua2V5Q29kZT9yLnByZXZpb3VzU2libGluZzpyLm5leHRTaWJsaW5nKSYmKG49KG89ci5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc2VsZWN0YWJsZV1cIikpW01hdGgubWluKG8ubGVuZ3RoLTEscyldKSYmZS5zZXRBY3RpdmVPcHRpb24obil9KX0pLGNlLmRlZmluZShcInJlbW92ZV9idXR0b25cIixmdW5jdGlvbihlKXtjb25zdCB0PXRoaXMsaT1PYmplY3QuYXNzaWduKHtsYWJlbDpcIsOXXCIsdGl0bGU6XCJSZW1vdmVcIixjbGFzc05hbWU6XCJyZW1vdmVcIix0YWJpbmRleDotMSxyb2xlOlwiYnV0dG9uXCIsaHRtbDplPT57dmFyIHRcbmNvbnN0IGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxucmV0dXJuIGkuY2xhc3NOYW1lPWUuY2xhc3NOYW1lfHxcIlwiLGkudGl0bGU9ZS50aXRsZXx8XCJcIixpLnNldEF0dHJpYnV0ZShcInJvbGVcIixlLnJvbGV8fFwiYnV0dG9uXCIpLGkudGFiSW5kZXg9bnVsbCE9KHQ9ZS50YWJpbmRleCk/dDotMSxpLnRleHRDb250ZW50PWUubGFiZWx8fFwiXCIsaX19LGUpXG50Lmhvb2soXCJhZnRlclwiLFwic2V0dXBUZW1wbGF0ZXNcIiwoKT0+e3ZhciBlPXQuc2V0dGluZ3MucmVuZGVyLml0ZW1cbnQuc2V0dGluZ3MucmVuZGVyLml0ZW09KHMsbik9Pnt2YXIgbz1LKGUuY2FsbCh0LHMsbikpLHI9SyhpLmh0bWwoaSkpXG5yZXR1cm4gby5hcHBlbmRDaGlsZChyKSxxKHIsXCJtb3VzZWRvd25cIixlPT57JChlLCEwKX0pLHEocixcImNsaWNrXCIsZT0+e3QuaXNMb2NrZWR8fCgkKGUsITApLHQuaXNMb2NrZWR8fHQuc2hvdWxkRGVsZXRlKFtvXSxlKSYmKHQucmVtb3ZlSXRlbShvKSx0LnJlZnJlc2hPcHRpb25zKCExKSx0LmlucHV0U3RhdGUoKSkpfSksb319KX0pLGNlLmRlZmluZShcInJlc3RvcmVfb25fYmFja3NwYWNlXCIsZnVuY3Rpb24oZSl7Y29uc3QgdD10aGlzLGk9T2JqZWN0LmFzc2lnbih7dGV4dDplPT5lW3Quc2V0dGluZ3MubGFiZWxGaWVsZF19LGUpXG50Lm9uKFwiaXRlbV9yZW1vdmVcIixmdW5jdGlvbihlKXtpZih0LmlzRm9jdXNlZCYmXCJcIj09PXQuY29udHJvbF9pbnB1dC52YWx1ZS50cmltKCkpe3ZhciBzPXQub3B0aW9uc1tlXVxucyYmdC5zZXRUZXh0Ym94VmFsdWUoaS50ZXh0LmNhbGwodCxzKSl9fSl9KSxjZS5kZWZpbmUoXCJ2aXJ0dWFsX3Njcm9sbFwiLGZ1bmN0aW9uKCl7Y29uc3QgZT10aGlzLHQ9ZS5jYW5Mb2FkLGk9ZS5jbGVhckFjdGl2ZU9wdGlvbixzPWUubG9hZENhbGxiYWNrXG52YXIgbixvLHIsbD17fSxhPSExLGM9W10sZD0hMSx1PVtdLHA9W11cbmlmKGUuc2V0dGluZ3Muc2hvdWxkTG9hZE1vcmV8fChlLnNldHRpbmdzLnNob3VsZExvYWRNb3JlPSgpPT57aWYobi5jbGllbnRIZWlnaHQvKG4uc2Nyb2xsSGVpZ2h0LW4uc2Nyb2xsVG9wKT4uOSlyZXR1cm4hMFxuaWYoZS5hY3RpdmVPcHRpb24pe3ZhciB0PWUuc2VsZWN0YWJsZSgpXG5pZihBcnJheS5mcm9tKHQpLmluZGV4T2YoZS5hY3RpdmVPcHRpb24pPj10Lmxlbmd0aC0yKXJldHVybiEwfXJldHVybiExfSksIWUuc2V0dGluZ3MuZmlyc3RVcmwpdGhyb3dcInZpcnR1YWxfc2Nyb2xsIHBsdWdpbiByZXF1aXJlcyBhIGZpcnN0VXJsKCkgbWV0aG9kXCJcbmUuc2V0dGluZ3Muc29ydEZpZWxkPVt7ZmllbGQ6XCIkb3JkZXJcIn0se2ZpZWxkOlwiJHNjb3JlXCJ9XVxuY29uc3QgaD10PT4hKG51bGwhPT1lLnNldHRpbmdzLm1heE9wdGlvbnMmJlwibnVtYmVyXCI9PXR5cGVvZiBlLnNldHRpbmdzLm1heE9wdGlvbnMmJm4uY2hpbGRyZW4ubGVuZ3RoPj1lLnNldHRpbmdzLm1heE9wdGlvbnMpJiYhKCEodCBpbiBsKXx8IWxbdF0pLGc9KHQsaSk9PmUuaXRlbXMuaW5kZXhPZihpKT49MHx8Yy5pbmRleE9mKGkpPj0wXG5lLnNldE5leHRVcmw9KGUsdCk9PntsW2VdPXR9LGUuZ2V0VXJsPXQ9PntpZih0IGluIGwpe2NvbnN0IGU9bFt0XVxucmV0dXJuIGxbdF09ITEsZX1yZXR1cm4gZS5jbGVhclBhZ2luYXRpb24oKSxlLnNldHRpbmdzLmZpcnN0VXJsLmNhbGwoZSx0KX0sZS5jbGVhclBhZ2luYXRpb249KCk9PntsPXt9fSxlLmhvb2soXCJpbnN0ZWFkXCIsXCJjbGVhckFjdGl2ZU9wdGlvblwiLCgpPT57aWYoIWEpcmV0dXJuIGkuY2FsbChlKX0pLGUuaG9vayhcImluc3RlYWRcIixcImNhbkxvYWRcIixpPT5pIGluIGw/aChpKTp0LmNhbGwoZSxpKSksZS5ob29rKFwiaW5zdGVhZFwiLFwibG9hZENhbGxiYWNrXCIsKHQsaSk9PntpZihhKXtpZihvKXtjb25zdCBpPXRbMF1cbnZvaWQgMCE9PWkmJihvLmRhdGFzZXQudmFsdWU9aVtlLnNldHRpbmdzLnZhbHVlRmllbGRdKX19ZWxzZXtjb25zdCB0PVwiXCIhPT1lLmxhc3RWYWx1ZT8odCxpKT0+ZS5pdGVtcy5pbmRleE9mKGkpPj0wfHxwLmluZGV4T2YoaSk+PTA6Z1xuZS5jbGVhck9wdGlvbnModCl9cy5jYWxsKGUsdCxpKSxhfHxkfHwoZD0hMCxcIlwiPT09ZS5sYXN0VmFsdWUmJihjPU9iamVjdC5rZXlzKGUub3B0aW9ucykscj1sW1wiXCJdLHU9T2JqZWN0LnZhbHVlcyhlLm9wdGlvbnMpKSksYT0hMX0pLGUuaG9vayhcImJlZm9yZVwiLFwicmVmcmVzaE9wdGlvbnNcIiwoKT0+e2UuYWN0aXZlT3B0aW9uJiZcIm9wdGlvblwiIT09ZS5hY3RpdmVPcHRpb24uZ2V0QXR0cmlidXRlKFwicm9sZVwiKSYmZS5zZXRBY3RpdmVPcHRpb24oZS5hY3RpdmVPcHRpb24ucHJldmlvdXNFbGVtZW50U2libGluZyl9KSxlLmhvb2soXCJhZnRlclwiLFwicmVmcmVzaE9wdGlvbnNcIiwoKT0+e2NvbnN0IHQ9ZS5sYXN0VmFsdWVcbnZhciBpXG5oKHQpPyhpPWUucmVuZGVyKFwibG9hZGluZ19tb3JlXCIse3F1ZXJ5OnR9KSkmJihpLnNldEF0dHJpYnV0ZShcImRhdGEtc2VsZWN0YWJsZVwiLFwiXCIpLG89aSk6dCBpbiBsJiYhbi5xdWVyeVNlbGVjdG9yKFwiLm5vLXJlc3VsdHNcIikmJihpPWUucmVuZGVyKFwibm9fbW9yZV9yZXN1bHRzXCIse3F1ZXJ5OnR9KSksaSYmKFEoaSxlLnNldHRpbmdzLm9wdGlvbkNsYXNzKSxuLmFwcGVuZChpKSl9KVxuY29uc3QgZj0oKT0+e2QmJihlLmFkZE9wdGlvbnModSksZS5jbGVhck9wdGlvbnMoZyksciYmKGxbXCJcIl09cikpfVxuZS5vbihcInR5cGVcIix0PT57XCJcIj09PXQmJihmKCksZS5yZWZyZXNoT3B0aW9ucyghMSkpfSksZS5vbihcImRyb3Bkb3duX2Nsb3NlXCIsZiksZS5vbihcImluaXRpYWxpemVcIiwoKT0+e3A9T2JqZWN0LmtleXMoZS5vcHRpb25zKSxjPU9iamVjdC5rZXlzKGUub3B0aW9ucyksbj1lLmRyb3Bkb3duX2NvbnRlbnQsZS5zZXR0aW5ncy5yZW5kZXI9T2JqZWN0LmFzc2lnbih7fSx7bG9hZGluZ19tb3JlOigpPT4nPGRpdiBjbGFzcz1cImxvYWRpbmctbW9yZS1yZXN1bHRzXCI+TG9hZGluZyBtb3JlIHJlc3VsdHMgLi4uIDwvZGl2Picsbm9fbW9yZV9yZXN1bHRzOigpPT4nPGRpdiBjbGFzcz1cIm5vLW1vcmUtcmVzdWx0c1wiPk5vIG1vcmUgcmVzdWx0czwvZGl2Pid9LGUuc2V0dGluZ3MucmVuZGVyKSxuLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwoKT0+e2Uuc2V0dGluZ3Muc2hvdWxkTG9hZE1vcmUuY2FsbChlKSYmaChlLmxhc3RWYWx1ZSkmJihhfHwoYT0hMCxlLmxvYWQuY2FsbChlLGUubGFzdFZhbHVlKSkpfSl9KX0pLGNlfSlcbnZhciB0b21TZWxlY3Q9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbmV3IFRvbVNlbGVjdChlLHQpfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dG9tLXNlbGVjdC5jb21wbGV0ZS5taW4uanMubWFwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG5jb25zdCBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGNvbnN0IGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHRjb25zdCBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGxldCB0aHJldyA9IHRydWU7XG5cdHRyeSB7XG5cdFx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdFx0Y29uc3QgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fVxuXHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRcdHRocmV3ID0gZmFsc2U7XG5cdH0gZmluYWxseSB7XG5cdFx0aWYodGhyZXcpIGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHRjb25zdCBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlci92YWx1ZSBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0aWYoQXJyYXkuaXNBcnJheShkZWZpbml0aW9uKSkge1xuXHRcdHZhciBpID0gMDtcblx0XHR3aGlsZShpIDwgZGVmaW5pdGlvbi5sZW5ndGgpIHtcblx0XHRcdHZhciBrZXkgPSBkZWZpbml0aW9uW2krK107XG5cdFx0XHR2YXIgYmluZGluZyA9IGRlZmluaXRpb25baSsrXTtcblx0XHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0XHRpZihiaW5kaW5nID09PSAwKSB7XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogZGVmaW5pdGlvbltpKytdIH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBiaW5kaW5nIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYoYmluZGluZyA9PT0gMCkgeyBpKys7IH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZihTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiogSW1wb3J0IGRlcGVuZGVuY2llcyAqL1xuaW1wb3J0IHtNYXBwZXJ9IGZyb20gXCIuLi9tb2R1bGVzL21hcHBlci9tYXBwZXItY2xhc3MuanNcIjtcblxuSFRNTFdpZGdldHMud2lkZ2V0KHtcbiAgbmFtZTogXCJtYXBwZXJcIixcbiAgdHlwZTogXCJvdXRwdXRcIixcbiAgZmFjdG9yeTogZnVuY3Rpb24oZWwsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAvLyBzaGFyZWQgdmFyaWFibGVzXG4gICAgdmFyIGVsZW1lbnRJZCA9IGVsLmlkO1xuICAgIHZhciBpbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIHZhciBoYW5kbGUgPSBuZXcgTWFwcGVyKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVuZGVyVmFsdWU6IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgICAgLy8gaWYgbmVlZGVkLCBpbml0aWFsaXplIHdpZGdldFxuICAgICAgICBpZiAoIWluaXRpYWxpemVkKSB7XG4gICAgICAgICAgLy8gc2V0IHN0YXRlIHRvIGluaXRpYWxpemVkXG4gICAgICAgICAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgIC8vIGF0dGFjaCB0aGUgd2lkZ2V0IHRvIHRoZSBET01cbiAgICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpO1xuICAgICAgICAgIGVsLndpZGdldCA9IHRoaXM7XG4gICAgICAgICAgLy8gaW5pdGlhbGl6ZSB3aWRnZXRcbiAgICAgICAgICBoYW5kbGUuaW5pdGlhbGl6ZShlbCwgb3B0cy5tYXBJZCwgb3B0cy5wcm9qZWN0LCBvcHRzLm1heExheWVycyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIHJlc2l6ZTogZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xuICAgICAgICAvLyB3aWRnZXQgYXV0b21hdGljYWxseSByZXNpemVzXG4gICAgICB9LFxuXG4gICAgICBtYXBwZXI6IGhhbmRsZSxcblxuICAgICAgLyogQVBJIGZ1bmN0aW9ucyB0byBtYW5pcHVsYXRlIHdpZGdldCAqL1xuICAgICAgYWRkTGF5ZXI6IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgICAvLyBzcGVjaWZ5IHZpc2liaWxpdHlcbiAgICAgICAgcGFyYW1zLnZhbHVlLmxheWVyLnZpc2libGUgPSBwYXJhbXMudmlzaWJsZTtcbiAgICAgICAgLy8gYWRkIGxheWVyIHRvIHdpZGdldFxuICAgICAgICBoYW5kbGUuYWRkTGF5ZXIocGFyYW1zLnZhbHVlKTtcbiAgICAgICAgLy8gc2luY2UgUiBjb2RlIGlzIHVzZWQgdG8gdXBkYXRlIHRoZSBtYXAsIHNvIHVwZGF0ZU1hcCA9IGZhbHNlXG4gICAgICAgIGhhbmRsZS5zaG93TGF5ZXJPbk1lbnUocGFyYW1zLnZhbHVlLmlkLCB0cnVlLCBmYWxzZSk7XG4gICAgICB9LFxuXG4gICAgfTtcbiAgfVxufSk7XG5cbi8vIEF0dGFjaCBtZXNzYWdlIGhhbmRsZXJzIGlmIGluIFNoaW55IG1vZGUgKHRoZXNlIGNvcnJlc3BvbmQgdG8gQVBJKVxuaWYgKEhUTUxXaWRnZXRzLnNoaW55TW9kZSkge1xuICB2YXIgZnhucyA9IFtcImFkZExheWVyXCJdO1xuICB2YXIgYWRkU2hpbnlIYW5kbGVyID0gZnVuY3Rpb24oZnhuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoXG4gICAgICAgIFwibWFwcGVyOlwiICsgZnhuLCBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWVzc2FnZS5pZCk7XG4gICAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICBkZWxldGUgbWVzc2FnZVtcImlkXCJdO1xuICAgICAgICAgICAgZWwud2lkZ2V0W2Z4bl0obWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBmeG5zLmxlbmd0aDsgKytpKSB7XG4gICAgYWRkU2hpbnlIYW5kbGVyKGZ4bnNbaV0pKCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==