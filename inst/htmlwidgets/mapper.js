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
    console.log("createLegend(): `x` not a recognized value.");
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
/* harmony import */ var _utils_projectSelectOptions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/projectSelectOptions.js */ "./srcjs/modules/utils/projectSelectOptions.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/style.css */ "./srcjs/modules/mapper/css/style.css");
/** Import dependencies */
// node modules



// functions to create elements



// styling


/** Class representing an object for managing a map. */
class Mapper {

  // private fields

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
    let selectOptions = (0,_utils_projectSelectOptions_js__WEBPACK_IMPORTED_MODULE_4__.projectSelectOptions)(project);
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
          return `<div class="optgroup-header">${escape(data.value)}</div>`;
        }
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
  }

  /**
   * Add a layer to the Mapper object. Note that if adding this new layer
   * would exceed the maximum number of permitted active layers, then
   * the oldest active layer will be removed automatically.
   * @param {Object} layer - Object that is a lock or a solution.
   * @return {void}
   */
  addLayer(layer) {
    // create menu item
    let el = (0,_mapper_scaffold_js__WEBPACK_IMPORTED_MODULE_3__.createMenuItem)(layer, this);
    // add menu item to hidden menu items
    this._hiddenLayers.set(el.dataset.id, el);
    // set layer as active
    this._activeLayerIds.add(el.dataset.id);
    // add layer to menu
    this.showLayerOnMenu(el.dataset.id, true, false);
    // add menu item to select
    this._select.tomselect.addOption((0,_utils_projectSelectOptions_js__WEBPACK_IMPORTED_MODULE_4__.selectOption)(layer));
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
    let layerCheckbox = el.querySelector(".layer-checkbox");
    layerCheckbox.checked = true;
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
  }

  /**
  * Hide layer on map.
  * @param {string} layerId - HTML identifier for layer.;
  * @param {boolean} updateCheckbox - Should the checkbox on the menu
  * be updated to show the layer is hidden on map?
  * @return {void}
  */
  hideLayerOnMap(layerId, updateCheckbox = true) {
    // set layer visibility on map
    this._map.map.setLayoutProperty(
      "lyr-" + layerId, "visibility", "none"
    );
    // set checkbox to be unchecked
    if (updateCheckbox === true) {
      let el = this._menu.querySelector(
        `[data-id="${layerId}"] .layer-checkbox`
      );
      if (el) {
        el.checked = false
      }
    }
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
        x.querySelector(".layer-checkbox").checked = true;
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
        x.querySelector(".layer-checkbox").checked = false;
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
  let showLayerCheckbox = el.querySelector(".layer-checkbox");
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
  showLayerCheckbox.checked = x.layer.visible;

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
  showLayerCheckbox.addEventListener("change", function () {
    if (this.checked) {
      mapper.showLayerOnMap(x.id);
    } else {
      mapper.hideLayerOnMap(x.id, false);
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
 * @param {string} groupLabel - Label for each button group.
 * @param {string} buttonLabels - Label for each of the buttons.
 * @param {string} groupColors - Colors for group labels.
 * @return {HTMLElement}
 */
function createButtonGroups(groupLabels, buttonLabels, groupColors) {
  // create container
  let el = document.createElement("div");
  el.classList.add("button-groups", "border", "rounded");
  // add each group
  for (let i = 0; i < groupLabels.length; ++i) {
    // create row container
    let row = document.createElement("div");
    row.classList.add("form-group", "row");
    // create label
    let label = document.createElement("label");
    label.innerText = groupLabels[i] + ":";
    label.classList.add(
      "col-sm", "col-form-label", "col-form-label-sm", "fw-bold"
    );
    label.style.color = groupColors[i];
    // create button group
    let group = document.createElement("div");
    group.classList.add("col-sm", "btn-group", "btn-group-sm");
    // add buttons to container
    for (let j = 0; j < buttonLabels.length; ++j) {
      let btn = document.createElement("button");
      btn.classList.add("btn", "btn-sm", "btn-light");
      btn.setAttribute("data-group-index", i);
      btn.setAttribute("data-group-label", groupLabels[i]);
      btn.setAttribute("data-label", buttonLabels[j]);
      btn.innerText = buttonLabels[j];
      group.appendChild(btn);
    }
    // add to row cont
    row.appendChild(label);
    row.appendChild(group);
    el.appendChild(row);
  }
  // return element;
  return el;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHdDQUF3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1GQUFtRjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLGVBQWU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLGNBQWM7QUFDMUIsWUFBWSxjQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRTtBQUNBLGdCQUFnQjtBQUNoQixzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsV0FBVztBQUN6QjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0IsZUFBZSxjQUFjO0FBQzdCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCLFlBQVksMEJBQTBCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCLFlBQVksNEJBQTRCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLG9DQUFvQztBQUNoRDtBQUNBO0FBQ0EseUVBQXlFLGFBQWE7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBLHVFQUF1RTtBQUN2RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsYUFBYTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdCQUFnQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLGtDQUFrQztBQUNsQyxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDhCQUE4QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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eUQ7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1FQUFNOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHNjcC8uL25vZGVfbW9kdWxlcy90b20tc2VsZWN0L2Rpc3QvY3NzL3RvbS1zZWxlY3QuYm9vdHN0cmFwNS5jc3M/MmM0MyIsIndlYnBhY2s6Ly9hcHNjcC8uL3NyY2pzL21vZHVsZXMvbWFwcGVyL2Nzcy9jYXRlZ29yaWNhbC1sZWdlbmQuY3NzPzRkZGIiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy9tb2R1bGVzL21hcHBlci9jc3MvY29udGludW91cy1sZWdlbmQuY3NzPzJhODIiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy9tb2R1bGVzL21hcHBlci9jc3Mvc3R5bGUuY3NzPzhiY2IiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy9tb2R1bGVzL3V0aWxzL2Nzcy9zdHlsZS5jc3M/ZDNhOCIsIndlYnBhY2s6Ly9hcHNjcC8uL25vZGVfbW9kdWxlcy9zb3J0YWJsZWpzL21vZHVsYXIvc29ydGFibGUuZXNtLmpzIiwid2VicGFjazovL2Fwc2NwLy4vc3JjanMvbW9kdWxlcy9tYXBwZXIvY3JlYXRlLWxlZ2VuZC5qcyIsIndlYnBhY2s6Ly9hcHNjcC8uL3NyY2pzL21vZHVsZXMvbWFwcGVyL21hcHBlci1jbGFzcy5qcyIsIndlYnBhY2s6Ly9hcHNjcC8uL3NyY2pzL21vZHVsZXMvbWFwcGVyL21hcHBlci1zY2FmZm9sZC5qcyIsIndlYnBhY2s6Ly9hcHNjcC8uL3NyY2pzL21vZHVsZXMvdXRpbHMvZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9hcHNjcC8uL3NyY2pzL21vZHVsZXMvdXRpbHMvcHJvamVjdFNlbGVjdE9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9ub2RlX21vZHVsZXMvdG9tLXNlbGVjdC9kaXN0L2pzL3RvbS1zZWxlY3QuY29tcGxldGUubWluLmpzIiwid2VicGFjazovL2Fwc2NwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Fwc2NwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Fwc2NwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hcHNjcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Fwc2NwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy93aWRnZXRzL21hcHBlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKiohXG4gKiBTb3J0YWJsZSAxLjE1LjdcbiAqIEBhdXRob3JcdFJ1YmFYYSAgIDx0cmFzaEBydWJheGEub3JnPlxuICogQGF1dGhvclx0b3dlbm0gICAgPG93ZW4yMzM1NUBnbWFpbC5jb20+XG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkociwgYSkge1xuICAobnVsbCA9PSBhIHx8IGEgPiByLmxlbmd0aCkgJiYgKGEgPSByLmxlbmd0aCk7XG4gIGZvciAodmFyIGUgPSAwLCBuID0gQXJyYXkoYSk7IGUgPCBhOyBlKyspIG5bZV0gPSByW2VdO1xuICByZXR1cm4gbjtcbn1cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkocik7XG59XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkoZSwgciwgdCkge1xuICByZXR1cm4gKHIgPSBfdG9Qcm9wZXJ0eUtleShyKSkgaW4gZSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCB7XG4gICAgdmFsdWU6IHQsXG4gICAgZW51bWVyYWJsZTogITAsXG4gICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICB3cml0YWJsZTogITBcbiAgfSkgOiBlW3JdID0gdCwgZTtcbn1cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICByZXR1cm4gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAobikge1xuICAgIGZvciAodmFyIGUgPSAxOyBlIDwgYXJndW1lbnRzLmxlbmd0aDsgZSsrKSB7XG4gICAgICB2YXIgdCA9IGFyZ3VtZW50c1tlXTtcbiAgICAgIGZvciAodmFyIHIgaW4gdCkgKHt9KS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsIHIpICYmIChuW3JdID0gdFtyXSk7XG4gICAgfVxuICAgIHJldHVybiBuO1xuICB9LCBfZXh0ZW5kcy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShyKSB7XG4gIGlmIChcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgbnVsbCAhPSByW1N5bWJvbC5pdGVyYXRvcl0gfHwgbnVsbCAhPSByW1wiQEBpdGVyYXRvclwiXSkgcmV0dXJuIEFycmF5LmZyb20ocik7XG59XG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuZnVuY3Rpb24gb3duS2V5cyhlLCByKSB7XG4gIHZhciB0ID0gT2JqZWN0LmtleXMoZSk7XG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIG8gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO1xuICAgIHIgJiYgKG8gPSBvLmZpbHRlcihmdW5jdGlvbiAocikge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgcikuZW51bWVyYWJsZTtcbiAgICB9KSksIHQucHVzaC5hcHBseSh0LCBvKTtcbiAgfVxuICByZXR1cm4gdDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKGUpIHtcbiAgZm9yICh2YXIgciA9IDE7IHIgPCBhcmd1bWVudHMubGVuZ3RoOyByKyspIHtcbiAgICB2YXIgdCA9IG51bGwgIT0gYXJndW1lbnRzW3JdID8gYXJndW1lbnRzW3JdIDoge307XG4gICAgciAlIDIgPyBvd25LZXlzKE9iamVjdCh0KSwgITApLmZvckVhY2goZnVuY3Rpb24gKHIpIHtcbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShlLCByLCB0W3JdKTtcbiAgICB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnModCkpIDogb3duS2V5cyhPYmplY3QodCkpLmZvckVhY2goZnVuY3Rpb24gKHIpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsIHIpKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZTtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhlLCB0KSB7XG4gIGlmIChudWxsID09IGUpIHJldHVybiB7fTtcbiAgdmFyIG8sXG4gICAgcixcbiAgICBpID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoZSwgdCk7XG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIG4gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO1xuICAgIGZvciAociA9IDA7IHIgPCBuLmxlbmd0aDsgcisrKSBvID0gbltyXSwgLTEgPT09IHQuaW5kZXhPZihvKSAmJiB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKGUsIG8pICYmIChpW29dID0gZVtvXSk7XG4gIH1cbiAgcmV0dXJuIGk7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShyLCBlKSB7XG4gIGlmIChudWxsID09IHIpIHJldHVybiB7fTtcbiAgdmFyIHQgPSB7fTtcbiAgZm9yICh2YXIgbiBpbiByKSBpZiAoe30uaGFzT3duUHJvcGVydHkuY2FsbChyLCBuKSkge1xuICAgIGlmICgtMSAhPT0gZS5pbmRleE9mKG4pKSBjb250aW51ZTtcbiAgICB0W25dID0gcltuXTtcbiAgfVxuICByZXR1cm4gdDtcbn1cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShyKSB7XG4gIHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMocikgfHwgX2l0ZXJhYmxlVG9BcnJheShyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkocikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikge1xuICBpZiAoXCJvYmplY3RcIiAhPSB0eXBlb2YgdCB8fCAhdCkgcmV0dXJuIHQ7XG4gIHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAodm9pZCAwICE9PSBlKSB7XG4gICAgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKFwib2JqZWN0XCIgIT0gdHlwZW9mIGkpIHJldHVybiBpO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpO1xufVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkge1xuICB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIFwic3ltYm9sXCIgPT0gdHlwZW9mIGkgPyBpIDogaSArIFwiXCI7XG59XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBfdHlwZW9mKG8pO1xufVxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KHIsIGEpIHtcbiAgaWYgKHIpIHtcbiAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgcikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KHIsIGEpO1xuICAgIHZhciB0ID0ge30udG9TdHJpbmcuY2FsbChyKS5zbGljZSg4LCAtMSk7XG4gICAgcmV0dXJuIFwiT2JqZWN0XCIgPT09IHQgJiYgci5jb25zdHJ1Y3RvciAmJiAodCA9IHIuY29uc3RydWN0b3IubmFtZSksIFwiTWFwXCIgPT09IHQgfHwgXCJTZXRcIiA9PT0gdCA/IEFycmF5LmZyb20ocikgOiBcIkFyZ3VtZW50c1wiID09PSB0IHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KHQpID8gX2FycmF5TGlrZVRvQXJyYXkociwgYSkgOiB2b2lkIDA7XG4gIH1cbn1cblxudmFyIHZlcnNpb24gPSBcIjEuMTUuN1wiO1xuXG5mdW5jdGlvbiB1c2VyQWdlbnQocGF0dGVybikge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lm5hdmlnYXRvcikge1xuICAgIHJldHVybiAhISAvKkBfX1BVUkVfXyovbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaChwYXR0ZXJuKTtcbiAgfVxufVxudmFyIElFMTFPckxlc3MgPSB1c2VyQWdlbnQoLyg/OlRyaWRlbnQuKnJ2WyA6XT8xMVxcLnxtc2llfGllbW9iaWxlfFdpbmRvd3MgUGhvbmUpL2kpO1xudmFyIEVkZ2UgPSB1c2VyQWdlbnQoL0VkZ2UvaSk7XG52YXIgRmlyZUZveCA9IHVzZXJBZ2VudCgvZmlyZWZveC9pKTtcbnZhciBTYWZhcmkgPSB1c2VyQWdlbnQoL3NhZmFyaS9pKSAmJiAhdXNlckFnZW50KC9jaHJvbWUvaSkgJiYgIXVzZXJBZ2VudCgvYW5kcm9pZC9pKTtcbnZhciBJT1MgPSB1c2VyQWdlbnQoL2lQKGFkfG9kfGhvbmUpL2kpO1xudmFyIENocm9tZUZvckFuZHJvaWQgPSB1c2VyQWdlbnQoL2Nocm9tZS9pKSAmJiB1c2VyQWdlbnQoL2FuZHJvaWQvaSk7XG5cbnZhciBjYXB0dXJlTW9kZSA9IHtcbiAgY2FwdHVyZTogZmFsc2UsXG4gIHBhc3NpdmU6IGZhbHNlXG59O1xuZnVuY3Rpb24gb24oZWwsIGV2ZW50LCBmbikge1xuICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmbiwgIUlFMTFPckxlc3MgJiYgY2FwdHVyZU1vZGUpO1xufVxuZnVuY3Rpb24gb2ZmKGVsLCBldmVudCwgZm4pIHtcbiAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgZm4sICFJRTExT3JMZXNzICYmIGNhcHR1cmVNb2RlKTtcbn1cbmZ1bmN0aW9uIG1hdGNoZXMoIC8qKkhUTUxFbGVtZW50Ki9lbCwgLyoqU3RyaW5nKi9zZWxlY3Rvcikge1xuICBpZiAoIXNlbGVjdG9yKSByZXR1cm47XG4gIHNlbGVjdG9yWzBdID09PSAnPicgJiYgKHNlbGVjdG9yID0gc2VsZWN0b3Iuc3Vic3RyaW5nKDEpKTtcbiAgaWYgKGVsKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChlbC5tYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiBlbC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICAgIH0gZWxzZSBpZiAoZWwubXNNYXRjaGVzU2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIGVsLm1zTWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgIH0gZWxzZSBpZiAoZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBlbC53ZWJraXRNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gZ2V0UGFyZW50T3JIb3N0KGVsKSB7XG4gIHJldHVybiBlbC5ob3N0ICYmIGVsICE9PSBkb2N1bWVudCAmJiBlbC5ob3N0Lm5vZGVUeXBlICYmIGVsLmhvc3QgIT09IGVsID8gZWwuaG9zdCA6IGVsLnBhcmVudE5vZGU7XG59XG5mdW5jdGlvbiBjbG9zZXN0KCAvKipIVE1MRWxlbWVudCovZWwsIC8qKlN0cmluZyovc2VsZWN0b3IsIC8qKkhUTUxFbGVtZW50Ki9jdHgsIGluY2x1ZGVDVFgpIHtcbiAgaWYgKGVsKSB7XG4gICAgY3R4ID0gY3R4IHx8IGRvY3VtZW50O1xuICAgIGRvIHtcbiAgICAgIGlmIChzZWxlY3RvciAhPSBudWxsICYmIChzZWxlY3RvclswXSA9PT0gJz4nID8gZWwucGFyZW50Tm9kZSA9PT0gY3R4ICYmIG1hdGNoZXMoZWwsIHNlbGVjdG9yKSA6IG1hdGNoZXMoZWwsIHNlbGVjdG9yKSkgfHwgaW5jbHVkZUNUWCAmJiBlbCA9PT0gY3R4KSB7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICAgIGlmIChlbCA9PT0gY3R4KSBicmVhaztcbiAgICAgIC8qIGpzaGludCBib3NzOnRydWUgKi9cbiAgICB9IHdoaWxlIChlbCA9IGdldFBhcmVudE9ySG9zdChlbCkpO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxudmFyIFJfU1BBQ0UgPSAvXFxzKy9nO1xuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWwsIG5hbWUsIHN0YXRlKSB7XG4gIGlmIChlbCAmJiBuYW1lKSB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgICAgZWwuY2xhc3NMaXN0W3N0YXRlID8gJ2FkZCcgOiAncmVtb3ZlJ10obmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjbGFzc05hbWUgPSAoJyAnICsgZWwuY2xhc3NOYW1lICsgJyAnKS5yZXBsYWNlKFJfU1BBQ0UsICcgJykucmVwbGFjZSgnICcgKyBuYW1lICsgJyAnLCAnICcpO1xuICAgICAgZWwuY2xhc3NOYW1lID0gKGNsYXNzTmFtZSArIChzdGF0ZSA/ICcgJyArIG5hbWUgOiAnJykpLnJlcGxhY2UoUl9TUEFDRSwgJyAnKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGNzcyhlbCwgcHJvcCwgdmFsKSB7XG4gIHZhciBzdHlsZSA9IGVsICYmIGVsLnN0eWxlO1xuICBpZiAoc3R5bGUpIHtcbiAgICBpZiAodmFsID09PSB2b2lkIDApIHtcbiAgICAgIGlmIChkb2N1bWVudC5kZWZhdWx0VmlldyAmJiBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKSB7XG4gICAgICAgIHZhbCA9IGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoZWwsICcnKTtcbiAgICAgIH0gZWxzZSBpZiAoZWwuY3VycmVudFN0eWxlKSB7XG4gICAgICAgIHZhbCA9IGVsLmN1cnJlbnRTdHlsZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9wID09PSB2b2lkIDAgPyB2YWwgOiB2YWxbcHJvcF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghKHByb3AgaW4gc3R5bGUpICYmIHByb3AuaW5kZXhPZignd2Via2l0JykgPT09IC0xKSB7XG4gICAgICAgIHByb3AgPSAnLXdlYmtpdC0nICsgcHJvcDtcbiAgICAgIH1cbiAgICAgIHN0eWxlW3Byb3BdID0gdmFsICsgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gJycgOiAncHgnKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIG1hdHJpeChlbCwgc2VsZk9ubHkpIHtcbiAgdmFyIGFwcGxpZWRUcmFuc2Zvcm1zID0gJyc7XG4gIGlmICh0eXBlb2YgZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgYXBwbGllZFRyYW5zZm9ybXMgPSBlbDtcbiAgfSBlbHNlIHtcbiAgICBkbyB7XG4gICAgICB2YXIgdHJhbnNmb3JtID0gY3NzKGVsLCAndHJhbnNmb3JtJyk7XG4gICAgICBpZiAodHJhbnNmb3JtICYmIHRyYW5zZm9ybSAhPT0gJ25vbmUnKSB7XG4gICAgICAgIGFwcGxpZWRUcmFuc2Zvcm1zID0gdHJhbnNmb3JtICsgJyAnICsgYXBwbGllZFRyYW5zZm9ybXM7XG4gICAgICB9XG4gICAgICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG4gICAgfSB3aGlsZSAoIXNlbGZPbmx5ICYmIChlbCA9IGVsLnBhcmVudE5vZGUpKTtcbiAgfVxuICB2YXIgbWF0cml4Rm4gPSB3aW5kb3cuRE9NTWF0cml4IHx8IHdpbmRvdy5XZWJLaXRDU1NNYXRyaXggfHwgd2luZG93LkNTU01hdHJpeCB8fCB3aW5kb3cuTVNDU1NNYXRyaXg7XG4gIC8qanNoaW50IC1XMDU2ICovXG4gIHJldHVybiBtYXRyaXhGbiAmJiBuZXcgbWF0cml4Rm4oYXBwbGllZFRyYW5zZm9ybXMpO1xufVxuZnVuY3Rpb24gZmluZChjdHgsIHRhZ05hbWUsIGl0ZXJhdG9yKSB7XG4gIGlmIChjdHgpIHtcbiAgICB2YXIgbGlzdCA9IGN0eC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lKSxcbiAgICAgIGkgPSAwLFxuICAgICAgbiA9IGxpc3QubGVuZ3RoO1xuICAgIGlmIChpdGVyYXRvcikge1xuICAgICAgZm9yICg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgaXRlcmF0b3IobGlzdFtpXSwgaSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsaXN0O1xuICB9XG4gIHJldHVybiBbXTtcbn1cbmZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKSB7XG4gIHZhciBzY3JvbGxpbmdFbGVtZW50ID0gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudDtcbiAgaWYgKHNjcm9sbGluZ0VsZW1lbnQpIHtcbiAgICByZXR1cm4gc2Nyb2xsaW5nRWxlbWVudDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG59XG5cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBcImJvdW5kaW5nIGNsaWVudCByZWN0XCIgb2YgZ2l2ZW4gZWxlbWVudFxyXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWwgICAgICAgICAgICAgICAgICAgICAgIFRoZSBlbGVtZW50IHdob3NlIGJvdW5kaW5nQ2xpZW50UmVjdCBpcyB3YW50ZWRcclxuICogQHBhcmFtICB7W0Jvb2xlYW5dfSByZWxhdGl2ZVRvQ29udGFpbmluZ0Jsb2NrICBXaGV0aGVyIHRoZSByZWN0IHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgY29udGFpbmluZyBibG9jayBvZiAoaW5jbHVkaW5nKSB0aGUgY29udGFpbmVyXHJcbiAqIEBwYXJhbSAge1tCb29sZWFuXX0gcmVsYXRpdmVUb05vblN0YXRpY1BhcmVudCAgV2hldGhlciB0aGUgcmVjdCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIHJlbGF0aXZlIHBhcmVudCBvZiAoaW5jbHVkaW5nKSB0aGUgY29udGFpZW5yXHJcbiAqIEBwYXJhbSAge1tCb29sZWFuXX0gdW5kb1NjYWxlICAgICAgICAgICAgICAgICAgV2hldGhlciB0aGUgY29udGFpbmVyJ3Mgc2NhbGUoKSBzaG91bGQgYmUgdW5kb25lXHJcbiAqIEBwYXJhbSAge1tIVE1MRWxlbWVudF19IGNvbnRhaW5lciAgICAgICAgICAgICAgVGhlIHBhcmVudCB0aGUgZWxlbWVudCB3aWxsIGJlIHBsYWNlZCBpblxyXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBib3VuZGluZ0NsaWVudFJlY3Qgb2YgZWwsIHdpdGggc3BlY2lmaWVkIGFkanVzdG1lbnRzXHJcbiAqL1xuZnVuY3Rpb24gZ2V0UmVjdChlbCwgcmVsYXRpdmVUb0NvbnRhaW5pbmdCbG9jaywgcmVsYXRpdmVUb05vblN0YXRpY1BhcmVudCwgdW5kb1NjYWxlLCBjb250YWluZXIpIHtcbiAgaWYgKCFlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgJiYgZWwgIT09IHdpbmRvdykgcmV0dXJuO1xuICB2YXIgZWxSZWN0LCB0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQsIGhlaWdodCwgd2lkdGg7XG4gIGlmIChlbCAhPT0gd2luZG93ICYmIGVsLnBhcmVudE5vZGUgJiYgZWwgIT09IGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKSkge1xuICAgIGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRvcCA9IGVsUmVjdC50b3A7XG4gICAgbGVmdCA9IGVsUmVjdC5sZWZ0O1xuICAgIGJvdHRvbSA9IGVsUmVjdC5ib3R0b207XG4gICAgcmlnaHQgPSBlbFJlY3QucmlnaHQ7XG4gICAgaGVpZ2h0ID0gZWxSZWN0LmhlaWdodDtcbiAgICB3aWR0aCA9IGVsUmVjdC53aWR0aDtcbiAgfSBlbHNlIHtcbiAgICB0b3AgPSAwO1xuICAgIGxlZnQgPSAwO1xuICAgIGJvdHRvbSA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICByaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICB9XG4gIGlmICgocmVsYXRpdmVUb0NvbnRhaW5pbmdCbG9jayB8fCByZWxhdGl2ZVRvTm9uU3RhdGljUGFyZW50KSAmJiBlbCAhPT0gd2luZG93KSB7XG4gICAgLy8gQWRqdXN0IGZvciB0cmFuc2xhdGUoKVxuICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lciB8fCBlbC5wYXJlbnROb2RlO1xuXG4gICAgLy8gc29sdmVzICMxMTIzIChzZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zNzk1MzgwNi82MDg4MzEyKVxuICAgIC8vIE5vdCBuZWVkZWQgb24gPD0gSUUxMVxuICAgIGlmICghSUUxMU9yTGVzcykge1xuICAgICAgZG8ge1xuICAgICAgICBpZiAoY29udGFpbmVyICYmIGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QgJiYgKGNzcyhjb250YWluZXIsICd0cmFuc2Zvcm0nKSAhPT0gJ25vbmUnIHx8IHJlbGF0aXZlVG9Ob25TdGF0aWNQYXJlbnQgJiYgY3NzKGNvbnRhaW5lciwgJ3Bvc2l0aW9uJykgIT09ICdzdGF0aWMnKSkge1xuICAgICAgICAgIHZhciBjb250YWluZXJSZWN0ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgLy8gU2V0IHJlbGF0aXZlIHRvIGVkZ2VzIG9mIHBhZGRpbmcgYm94IG9mIGNvbnRhaW5lclxuICAgICAgICAgIHRvcCAtPSBjb250YWluZXJSZWN0LnRvcCArIHBhcnNlSW50KGNzcyhjb250YWluZXIsICdib3JkZXItdG9wLXdpZHRoJykpO1xuICAgICAgICAgIGxlZnQgLT0gY29udGFpbmVyUmVjdC5sZWZ0ICsgcGFyc2VJbnQoY3NzKGNvbnRhaW5lciwgJ2JvcmRlci1sZWZ0LXdpZHRoJykpO1xuICAgICAgICAgIGJvdHRvbSA9IHRvcCArIGVsUmVjdC5oZWlnaHQ7XG4gICAgICAgICAgcmlnaHQgPSBsZWZ0ICsgZWxSZWN0LndpZHRoO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8qIGpzaGludCBib3NzOnRydWUgKi9cbiAgICAgIH0gd2hpbGUgKGNvbnRhaW5lciA9IGNvbnRhaW5lci5wYXJlbnROb2RlKTtcbiAgICB9XG4gIH1cbiAgaWYgKHVuZG9TY2FsZSAmJiBlbCAhPT0gd2luZG93KSB7XG4gICAgLy8gQWRqdXN0IGZvciBzY2FsZSgpXG4gICAgdmFyIGVsTWF0cml4ID0gbWF0cml4KGNvbnRhaW5lciB8fCBlbCksXG4gICAgICBzY2FsZVggPSBlbE1hdHJpeCAmJiBlbE1hdHJpeC5hLFxuICAgICAgc2NhbGVZID0gZWxNYXRyaXggJiYgZWxNYXRyaXguZDtcbiAgICBpZiAoZWxNYXRyaXgpIHtcbiAgICAgIHRvcCAvPSBzY2FsZVk7XG4gICAgICBsZWZ0IC89IHNjYWxlWDtcbiAgICAgIHdpZHRoIC89IHNjYWxlWDtcbiAgICAgIGhlaWdodCAvPSBzY2FsZVk7XG4gICAgICBib3R0b20gPSB0b3AgKyBoZWlnaHQ7XG4gICAgICByaWdodCA9IGxlZnQgKyB3aWR0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB0b3A6IHRvcCxcbiAgICBsZWZ0OiBsZWZ0LFxuICAgIGJvdHRvbTogYm90dG9tLFxuICAgIHJpZ2h0OiByaWdodCxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHRcbiAgfTtcbn1cblxuLyoqXHJcbiAqIENoZWNrcyBpZiBhIHNpZGUgb2YgYW4gZWxlbWVudCBpcyBzY3JvbGxlZCBwYXN0IGEgc2lkZSBvZiBpdHMgcGFyZW50c1xyXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gIGVsICAgICAgICAgICBUaGUgZWxlbWVudCB3aG8ncyBzaWRlIGJlaW5nIHNjcm9sbGVkIG91dCBvZiB2aWV3IGlzIGluIHF1ZXN0aW9uXHJcbiAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgZWxTaWRlICAgICAgIFNpZGUgb2YgdGhlIGVsZW1lbnQgaW4gcXVlc3Rpb24gKCd0b3AnLCAnbGVmdCcsICdyaWdodCcsICdib3R0b20nKVxyXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgIHBhcmVudFNpZGUgICBTaWRlIG9mIHRoZSBwYXJlbnQgaW4gcXVlc3Rpb24gKCd0b3AnLCAnbGVmdCcsICdyaWdodCcsICdib3R0b20nKVxyXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gICAgICAgICAgICAgICBUaGUgcGFyZW50IHNjcm9sbCBlbGVtZW50IHRoYXQgdGhlIGVsJ3Mgc2lkZSBpcyBzY3JvbGxlZCBwYXN0LCBvciBudWxsIGlmIHRoZXJlIGlzIG5vIHN1Y2ggZWxlbWVudFxyXG4gKi9cbmZ1bmN0aW9uIGlzU2Nyb2xsZWRQYXN0KGVsLCBlbFNpZGUsIHBhcmVudFNpZGUpIHtcbiAgdmFyIHBhcmVudCA9IGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KGVsLCB0cnVlKSxcbiAgICBlbFNpZGVWYWwgPSBnZXRSZWN0KGVsKVtlbFNpZGVdO1xuXG4gIC8qIGpzaGludCBib3NzOnRydWUgKi9cbiAgd2hpbGUgKHBhcmVudCkge1xuICAgIHZhciBwYXJlbnRTaWRlVmFsID0gZ2V0UmVjdChwYXJlbnQpW3BhcmVudFNpZGVdLFxuICAgICAgdmlzaWJsZSA9IHZvaWQgMDtcbiAgICBpZiAocGFyZW50U2lkZSA9PT0gJ3RvcCcgfHwgcGFyZW50U2lkZSA9PT0gJ2xlZnQnKSB7XG4gICAgICB2aXNpYmxlID0gZWxTaWRlVmFsID49IHBhcmVudFNpZGVWYWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpc2libGUgPSBlbFNpZGVWYWwgPD0gcGFyZW50U2lkZVZhbDtcbiAgICB9XG4gICAgaWYgKCF2aXNpYmxlKSByZXR1cm4gcGFyZW50O1xuICAgIGlmIChwYXJlbnQgPT09IGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKSkgYnJlYWs7XG4gICAgcGFyZW50ID0gZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQocGFyZW50LCBmYWxzZSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcclxuICogR2V0cyBudGggY2hpbGQgb2YgZWwsIGlnbm9yaW5nIGhpZGRlbiBjaGlsZHJlbiwgc29ydGFibGUncyBlbGVtZW50cyAoZG9lcyBub3QgaWdub3JlIGNsb25lIGlmIGl0J3MgdmlzaWJsZSlcclxuICogYW5kIG5vbi1kcmFnZ2FibGUgZWxlbWVudHNcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsICAgICAgIFRoZSBwYXJlbnQgZWxlbWVudFxyXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGNoaWxkTnVtICAgICAgVGhlIGluZGV4IG9mIHRoZSBjaGlsZFxyXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnMgICAgICAgUGFyZW50IFNvcnRhYmxlJ3Mgb3B0aW9uc1xyXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gICAgICAgICAgVGhlIGNoaWxkIGF0IGluZGV4IGNoaWxkTnVtLCBvciBudWxsIGlmIG5vdCBmb3VuZFxyXG4gKi9cbmZ1bmN0aW9uIGdldENoaWxkKGVsLCBjaGlsZE51bSwgb3B0aW9ucywgaW5jbHVkZURyYWdFbCkge1xuICB2YXIgY3VycmVudENoaWxkID0gMCxcbiAgICBpID0gMCxcbiAgICBjaGlsZHJlbiA9IGVsLmNoaWxkcmVuO1xuICB3aGlsZSAoaSA8IGNoaWxkcmVuLmxlbmd0aCkge1xuICAgIGlmIChjaGlsZHJlbltpXS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScgJiYgY2hpbGRyZW5baV0gIT09IFNvcnRhYmxlLmdob3N0ICYmIChpbmNsdWRlRHJhZ0VsIHx8IGNoaWxkcmVuW2ldICE9PSBTb3J0YWJsZS5kcmFnZ2VkKSAmJiBjbG9zZXN0KGNoaWxkcmVuW2ldLCBvcHRpb25zLmRyYWdnYWJsZSwgZWwsIGZhbHNlKSkge1xuICAgICAgaWYgKGN1cnJlbnRDaGlsZCA9PT0gY2hpbGROdW0pIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuW2ldO1xuICAgICAgfVxuICAgICAgY3VycmVudENoaWxkKys7XG4gICAgfVxuICAgIGkrKztcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXHJcbiAqIEdldHMgdGhlIGxhc3QgY2hpbGQgaW4gdGhlIGVsLCBpZ25vcmluZyBnaG9zdEVsIG9yIGludmlzaWJsZSBlbGVtZW50cyAoY2xvbmVzKVxyXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWwgICAgICAgUGFyZW50IGVsZW1lbnRcclxuICogQHBhcmFtICB7c2VsZWN0b3J9IHNlbGVjdG9yICAgIEFueSBvdGhlciBlbGVtZW50cyB0aGF0IHNob3VsZCBiZSBpZ25vcmVkXHJcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAgICAgICAgICBUaGUgbGFzdCBjaGlsZCwgaWdub3JpbmcgZ2hvc3RFbFxyXG4gKi9cbmZ1bmN0aW9uIGxhc3RDaGlsZChlbCwgc2VsZWN0b3IpIHtcbiAgdmFyIGxhc3QgPSBlbC5sYXN0RWxlbWVudENoaWxkO1xuICB3aGlsZSAobGFzdCAmJiAobGFzdCA9PT0gU29ydGFibGUuZ2hvc3QgfHwgY3NzKGxhc3QsICdkaXNwbGF5JykgPT09ICdub25lJyB8fCBzZWxlY3RvciAmJiAhbWF0Y2hlcyhsYXN0LCBzZWxlY3RvcikpKSB7XG4gICAgbGFzdCA9IGxhc3QucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgfVxuICByZXR1cm4gbGFzdCB8fCBudWxsO1xufVxuXG4vKipcclxuICogUmV0dXJucyB0aGUgaW5kZXggb2YgYW4gZWxlbWVudCB3aXRoaW4gaXRzIHBhcmVudCBmb3IgYSBzZWxlY3RlZCBzZXQgb2ZcclxuICogZWxlbWVudHNcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsXHJcbiAqIEBwYXJhbSAge3NlbGVjdG9yfSBzZWxlY3RvclxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xuZnVuY3Rpb24gaW5kZXgoZWwsIHNlbGVjdG9yKSB7XG4gIHZhciBpbmRleCA9IDA7XG4gIGlmICghZWwgfHwgIWVsLnBhcmVudE5vZGUpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG4gIHdoaWxlIChlbCA9IGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHtcbiAgICBpZiAoZWwubm9kZU5hbWUudG9VcHBlckNhc2UoKSAhPT0gJ1RFTVBMQVRFJyAmJiBlbCAhPT0gU29ydGFibGUuY2xvbmUgJiYgKCFzZWxlY3RvciB8fCBtYXRjaGVzKGVsLCBzZWxlY3RvcikpKSB7XG4gICAgICBpbmRleCsrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaW5kZXg7XG59XG5cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBzY3JvbGwgb2Zmc2V0IG9mIHRoZSBnaXZlbiBlbGVtZW50LCBhZGRlZCB3aXRoIGFsbCB0aGUgc2Nyb2xsIG9mZnNldHMgb2YgcGFyZW50IGVsZW1lbnRzLlxyXG4gKiBUaGUgdmFsdWUgaXMgcmV0dXJuZWQgaW4gcmVhbCBwaXhlbHMuXHJcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbFxyXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgICAgT2Zmc2V0cyBpbiB0aGUgZm9ybWF0IG9mIFtsZWZ0LCB0b3BdXHJcbiAqL1xuZnVuY3Rpb24gZ2V0UmVsYXRpdmVTY3JvbGxPZmZzZXQoZWwpIHtcbiAgdmFyIG9mZnNldExlZnQgPSAwLFxuICAgIG9mZnNldFRvcCA9IDAsXG4gICAgd2luU2Nyb2xsZXIgPSBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCk7XG4gIGlmIChlbCkge1xuICAgIGRvIHtcbiAgICAgIHZhciBlbE1hdHJpeCA9IG1hdHJpeChlbCksXG4gICAgICAgIHNjYWxlWCA9IGVsTWF0cml4LmEsXG4gICAgICAgIHNjYWxlWSA9IGVsTWF0cml4LmQ7XG4gICAgICBvZmZzZXRMZWZ0ICs9IGVsLnNjcm9sbExlZnQgKiBzY2FsZVg7XG4gICAgICBvZmZzZXRUb3AgKz0gZWwuc2Nyb2xsVG9wICogc2NhbGVZO1xuICAgIH0gd2hpbGUgKGVsICE9PSB3aW5TY3JvbGxlciAmJiAoZWwgPSBlbC5wYXJlbnROb2RlKSk7XG4gIH1cbiAgcmV0dXJuIFtvZmZzZXRMZWZ0LCBvZmZzZXRUb3BdO1xufVxuXG4vKipcclxuICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG9iamVjdCB3aXRoaW4gdGhlIGdpdmVuIGFycmF5XHJcbiAqIEBwYXJhbSAge0FycmF5fSBhcnIgICBBcnJheSB0aGF0IG1heSBvciBtYXkgbm90IGhvbGQgdGhlIG9iamVjdFxyXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9iaiAgQW4gb2JqZWN0IHRoYXQgaGFzIGEga2V5LXZhbHVlIHBhaXIgdW5pcXVlIHRvIGFuZCBpZGVudGljYWwgdG8gYSBrZXktdmFsdWUgcGFpciBpbiB0aGUgb2JqZWN0IHlvdSB3YW50IHRvIGZpbmRcclxuICogQHJldHVybiB7TnVtYmVyfSAgICAgIFRoZSBpbmRleCBvZiB0aGUgb2JqZWN0IGluIHRoZSBhcnJheSwgb3IgLTFcclxuICovXG5mdW5jdGlvbiBpbmRleE9mT2JqZWN0KGFyciwgb2JqKSB7XG4gIGZvciAodmFyIGkgaW4gYXJyKSB7XG4gICAgaWYgKCFhcnIuaGFzT3duUHJvcGVydHkoaSkpIGNvbnRpbnVlO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSAmJiBvYmpba2V5XSA9PT0gYXJyW2ldW2tleV0pIHJldHVybiBOdW1iZXIoaSk7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cbmZ1bmN0aW9uIGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KGVsLCBpbmNsdWRlU2VsZikge1xuICAvLyBza2lwIHRvIHdpbmRvd1xuICBpZiAoIWVsIHx8ICFlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHJldHVybiBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCk7XG4gIHZhciBlbGVtID0gZWw7XG4gIHZhciBnb3RTZWxmID0gZmFsc2U7XG4gIGRvIHtcbiAgICAvLyB3ZSBkb24ndCBuZWVkIHRvIGdldCBlbGVtIGNzcyBpZiBpdCBpc24ndCBldmVuIG92ZXJmbG93aW5nIGluIHRoZSBmaXJzdCBwbGFjZSAocGVyZm9ybWFuY2UpXG4gICAgaWYgKGVsZW0uY2xpZW50V2lkdGggPCBlbGVtLnNjcm9sbFdpZHRoIHx8IGVsZW0uY2xpZW50SGVpZ2h0IDwgZWxlbS5zY3JvbGxIZWlnaHQpIHtcbiAgICAgIHZhciBlbGVtQ1NTID0gY3NzKGVsZW0pO1xuICAgICAgaWYgKGVsZW0uY2xpZW50V2lkdGggPCBlbGVtLnNjcm9sbFdpZHRoICYmIChlbGVtQ1NTLm92ZXJmbG93WCA9PSAnYXV0bycgfHwgZWxlbUNTUy5vdmVyZmxvd1ggPT0gJ3Njcm9sbCcpIHx8IGVsZW0uY2xpZW50SGVpZ2h0IDwgZWxlbS5zY3JvbGxIZWlnaHQgJiYgKGVsZW1DU1Mub3ZlcmZsb3dZID09ICdhdXRvJyB8fCBlbGVtQ1NTLm92ZXJmbG93WSA9PSAnc2Nyb2xsJykpIHtcbiAgICAgICAgaWYgKCFlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCB8fCBlbGVtID09PSBkb2N1bWVudC5ib2R5KSByZXR1cm4gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpO1xuICAgICAgICBpZiAoZ290U2VsZiB8fCBpbmNsdWRlU2VsZikgcmV0dXJuIGVsZW07XG4gICAgICAgIGdvdFNlbGYgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG4gIH0gd2hpbGUgKGVsZW0gPSBlbGVtLnBhcmVudE5vZGUpO1xuICByZXR1cm4gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpO1xufVxuZnVuY3Rpb24gZXh0ZW5kKGRzdCwgc3JjKSB7XG4gIGlmIChkc3QgJiYgc3JjKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgICAgaWYgKHNyYy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGRzdFtrZXldID0gc3JjW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBkc3Q7XG59XG5mdW5jdGlvbiBpc1JlY3RFcXVhbChyZWN0MSwgcmVjdDIpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQocmVjdDEudG9wKSA9PT0gTWF0aC5yb3VuZChyZWN0Mi50b3ApICYmIE1hdGgucm91bmQocmVjdDEubGVmdCkgPT09IE1hdGgucm91bmQocmVjdDIubGVmdCkgJiYgTWF0aC5yb3VuZChyZWN0MS5oZWlnaHQpID09PSBNYXRoLnJvdW5kKHJlY3QyLmhlaWdodCkgJiYgTWF0aC5yb3VuZChyZWN0MS53aWR0aCkgPT09IE1hdGgucm91bmQocmVjdDIud2lkdGgpO1xufVxudmFyIF90aHJvdHRsZVRpbWVvdXQ7XG5mdW5jdGlvbiB0aHJvdHRsZShjYWxsYmFjaywgbXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIV90aHJvdHRsZVRpbWVvdXQpIHtcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBfdGhpcyA9IHRoaXM7XG4gICAgICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbChfdGhpcywgYXJnc1swXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjay5hcHBseShfdGhpcywgYXJncyk7XG4gICAgICB9XG4gICAgICBfdGhyb3R0bGVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aHJvdHRsZVRpbWVvdXQgPSB2b2lkIDA7XG4gICAgICB9LCBtcyk7XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gY2FuY2VsVGhyb3R0bGUoKSB7XG4gIGNsZWFyVGltZW91dChfdGhyb3R0bGVUaW1lb3V0KTtcbiAgX3Rocm90dGxlVGltZW91dCA9IHZvaWQgMDtcbn1cbmZ1bmN0aW9uIHNjcm9sbEJ5KGVsLCB4LCB5KSB7XG4gIGVsLnNjcm9sbExlZnQgKz0geDtcbiAgZWwuc2Nyb2xsVG9wICs9IHk7XG59XG5mdW5jdGlvbiBjbG9uZShlbCkge1xuICB2YXIgUG9seW1lciA9IHdpbmRvdy5Qb2x5bWVyO1xuICB2YXIgJCA9IHdpbmRvdy5qUXVlcnkgfHwgd2luZG93LlplcHRvO1xuICBpZiAoUG9seW1lciAmJiBQb2x5bWVyLmRvbSkge1xuICAgIHJldHVybiBQb2x5bWVyLmRvbShlbCkuY2xvbmVOb2RlKHRydWUpO1xuICB9IGVsc2UgaWYgKCQpIHtcbiAgICByZXR1cm4gJChlbCkuY2xvbmUodHJ1ZSlbMF07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVsLmNsb25lTm9kZSh0cnVlKTtcbiAgfVxufVxuZnVuY3Rpb24gc2V0UmVjdChlbCwgcmVjdCkge1xuICBjc3MoZWwsICdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICBjc3MoZWwsICd0b3AnLCByZWN0LnRvcCk7XG4gIGNzcyhlbCwgJ2xlZnQnLCByZWN0LmxlZnQpO1xuICBjc3MoZWwsICd3aWR0aCcsIHJlY3Qud2lkdGgpO1xuICBjc3MoZWwsICdoZWlnaHQnLCByZWN0LmhlaWdodCk7XG59XG5mdW5jdGlvbiB1bnNldFJlY3QoZWwpIHtcbiAgY3NzKGVsLCAncG9zaXRpb24nLCAnJyk7XG4gIGNzcyhlbCwgJ3RvcCcsICcnKTtcbiAgY3NzKGVsLCAnbGVmdCcsICcnKTtcbiAgY3NzKGVsLCAnd2lkdGgnLCAnJyk7XG4gIGNzcyhlbCwgJ2hlaWdodCcsICcnKTtcbn1cbmZ1bmN0aW9uIGdldENoaWxkQ29udGFpbmluZ1JlY3RGcm9tRWxlbWVudChjb250YWluZXIsIG9wdGlvbnMsIGdob3N0RWwpIHtcbiAgdmFyIHJlY3QgPSB7fTtcbiAgQXJyYXkuZnJvbShjb250YWluZXIuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgdmFyIF9yZWN0JGxlZnQsIF9yZWN0JHRvcCwgX3JlY3QkcmlnaHQsIF9yZWN0JGJvdHRvbTtcbiAgICBpZiAoIWNsb3Nlc3QoY2hpbGQsIG9wdGlvbnMuZHJhZ2dhYmxlLCBjb250YWluZXIsIGZhbHNlKSB8fCBjaGlsZC5hbmltYXRlZCB8fCBjaGlsZCA9PT0gZ2hvc3RFbCkgcmV0dXJuO1xuICAgIHZhciBjaGlsZFJlY3QgPSBnZXRSZWN0KGNoaWxkKTtcbiAgICByZWN0LmxlZnQgPSBNYXRoLm1pbigoX3JlY3QkbGVmdCA9IHJlY3QubGVmdCkgIT09IG51bGwgJiYgX3JlY3QkbGVmdCAhPT0gdm9pZCAwID8gX3JlY3QkbGVmdCA6IEluZmluaXR5LCBjaGlsZFJlY3QubGVmdCk7XG4gICAgcmVjdC50b3AgPSBNYXRoLm1pbigoX3JlY3QkdG9wID0gcmVjdC50b3ApICE9PSBudWxsICYmIF9yZWN0JHRvcCAhPT0gdm9pZCAwID8gX3JlY3QkdG9wIDogSW5maW5pdHksIGNoaWxkUmVjdC50b3ApO1xuICAgIHJlY3QucmlnaHQgPSBNYXRoLm1heCgoX3JlY3QkcmlnaHQgPSByZWN0LnJpZ2h0KSAhPT0gbnVsbCAmJiBfcmVjdCRyaWdodCAhPT0gdm9pZCAwID8gX3JlY3QkcmlnaHQgOiAtSW5maW5pdHksIGNoaWxkUmVjdC5yaWdodCk7XG4gICAgcmVjdC5ib3R0b20gPSBNYXRoLm1heCgoX3JlY3QkYm90dG9tID0gcmVjdC5ib3R0b20pICE9PSBudWxsICYmIF9yZWN0JGJvdHRvbSAhPT0gdm9pZCAwID8gX3JlY3QkYm90dG9tIDogLUluZmluaXR5LCBjaGlsZFJlY3QuYm90dG9tKTtcbiAgfSk7XG4gIHJlY3Qud2lkdGggPSByZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0O1xuICByZWN0LmhlaWdodCA9IHJlY3QuYm90dG9tIC0gcmVjdC50b3A7XG4gIHJlY3QueCA9IHJlY3QubGVmdDtcbiAgcmVjdC55ID0gcmVjdC50b3A7XG4gIHJldHVybiByZWN0O1xufVxudmFyIGV4cGFuZG8gPSAnU29ydGFibGUnICsgbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbmZ1bmN0aW9uIEFuaW1hdGlvblN0YXRlTWFuYWdlcigpIHtcbiAgdmFyIGFuaW1hdGlvblN0YXRlcyA9IFtdLFxuICAgIGFuaW1hdGlvbkNhbGxiYWNrSWQ7XG4gIHJldHVybiB7XG4gICAgY2FwdHVyZUFuaW1hdGlvblN0YXRlOiBmdW5jdGlvbiBjYXB0dXJlQW5pbWF0aW9uU3RhdGUoKSB7XG4gICAgICBhbmltYXRpb25TdGF0ZXMgPSBbXTtcbiAgICAgIGlmICghdGhpcy5vcHRpb25zLmFuaW1hdGlvbikgcmV0dXJuO1xuICAgICAgdmFyIGNoaWxkcmVuID0gW10uc2xpY2UuY2FsbCh0aGlzLmVsLmNoaWxkcmVuKTtcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmIChjc3MoY2hpbGQsICdkaXNwbGF5JykgPT09ICdub25lJyB8fCBjaGlsZCA9PT0gU29ydGFibGUuZ2hvc3QpIHJldHVybjtcbiAgICAgICAgYW5pbWF0aW9uU3RhdGVzLnB1c2goe1xuICAgICAgICAgIHRhcmdldDogY2hpbGQsXG4gICAgICAgICAgcmVjdDogZ2V0UmVjdChjaGlsZClcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBmcm9tUmVjdCA9IF9vYmplY3RTcHJlYWQyKHt9LCBhbmltYXRpb25TdGF0ZXNbYW5pbWF0aW9uU3RhdGVzLmxlbmd0aCAtIDFdLnJlY3QpO1xuXG4gICAgICAgIC8vIElmIGFuaW1hdGluZzogY29tcGVuc2F0ZSBmb3IgY3VycmVudCBhbmltYXRpb25cbiAgICAgICAgaWYgKGNoaWxkLnRoaXNBbmltYXRpb25EdXJhdGlvbikge1xuICAgICAgICAgIHZhciBjaGlsZE1hdHJpeCA9IG1hdHJpeChjaGlsZCwgdHJ1ZSk7XG4gICAgICAgICAgaWYgKGNoaWxkTWF0cml4KSB7XG4gICAgICAgICAgICBmcm9tUmVjdC50b3AgLT0gY2hpbGRNYXRyaXguZjtcbiAgICAgICAgICAgIGZyb21SZWN0LmxlZnQgLT0gY2hpbGRNYXRyaXguZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGQuZnJvbVJlY3QgPSBmcm9tUmVjdDtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYWRkQW5pbWF0aW9uU3RhdGU6IGZ1bmN0aW9uIGFkZEFuaW1hdGlvblN0YXRlKHN0YXRlKSB7XG4gICAgICBhbmltYXRpb25TdGF0ZXMucHVzaChzdGF0ZSk7XG4gICAgfSxcbiAgICByZW1vdmVBbmltYXRpb25TdGF0ZTogZnVuY3Rpb24gcmVtb3ZlQW5pbWF0aW9uU3RhdGUodGFyZ2V0KSB7XG4gICAgICBhbmltYXRpb25TdGF0ZXMuc3BsaWNlKGluZGV4T2ZPYmplY3QoYW5pbWF0aW9uU3RhdGVzLCB7XG4gICAgICAgIHRhcmdldDogdGFyZ2V0XG4gICAgICB9KSwgMSk7XG4gICAgfSxcbiAgICBhbmltYXRlQWxsOiBmdW5jdGlvbiBhbmltYXRlQWxsKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuYW5pbWF0aW9uKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChhbmltYXRpb25DYWxsYmFja0lkKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGFuaW1hdGluZyA9IGZhbHNlLFxuICAgICAgICBhbmltYXRpb25UaW1lID0gMDtcbiAgICAgIGFuaW1hdGlvblN0YXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgdGltZSA9IDAsXG4gICAgICAgICAgdGFyZ2V0ID0gc3RhdGUudGFyZ2V0LFxuICAgICAgICAgIGZyb21SZWN0ID0gdGFyZ2V0LmZyb21SZWN0LFxuICAgICAgICAgIHRvUmVjdCA9IGdldFJlY3QodGFyZ2V0KSxcbiAgICAgICAgICBwcmV2RnJvbVJlY3QgPSB0YXJnZXQucHJldkZyb21SZWN0LFxuICAgICAgICAgIHByZXZUb1JlY3QgPSB0YXJnZXQucHJldlRvUmVjdCxcbiAgICAgICAgICBhbmltYXRpbmdSZWN0ID0gc3RhdGUucmVjdCxcbiAgICAgICAgICB0YXJnZXRNYXRyaXggPSBtYXRyaXgodGFyZ2V0LCB0cnVlKTtcbiAgICAgICAgaWYgKHRhcmdldE1hdHJpeCkge1xuICAgICAgICAgIC8vIENvbXBlbnNhdGUgZm9yIGN1cnJlbnQgYW5pbWF0aW9uXG4gICAgICAgICAgdG9SZWN0LnRvcCAtPSB0YXJnZXRNYXRyaXguZjtcbiAgICAgICAgICB0b1JlY3QubGVmdCAtPSB0YXJnZXRNYXRyaXguZTtcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQudG9SZWN0ID0gdG9SZWN0O1xuICAgICAgICBpZiAodGFyZ2V0LnRoaXNBbmltYXRpb25EdXJhdGlvbikge1xuICAgICAgICAgIC8vIENvdWxkIGFsc28gY2hlY2sgaWYgYW5pbWF0aW5nUmVjdCBpcyBiZXR3ZWVuIGZyb21SZWN0IGFuZCB0b1JlY3RcbiAgICAgICAgICBpZiAoaXNSZWN0RXF1YWwocHJldkZyb21SZWN0LCB0b1JlY3QpICYmICFpc1JlY3RFcXVhbChmcm9tUmVjdCwgdG9SZWN0KSAmJlxuICAgICAgICAgIC8vIE1ha2Ugc3VyZSBhbmltYXRpbmdSZWN0IGlzIG9uIGxpbmUgYmV0d2VlbiB0b1JlY3QgJiBmcm9tUmVjdFxuICAgICAgICAgIChhbmltYXRpbmdSZWN0LnRvcCAtIHRvUmVjdC50b3ApIC8gKGFuaW1hdGluZ1JlY3QubGVmdCAtIHRvUmVjdC5sZWZ0KSA9PT0gKGZyb21SZWN0LnRvcCAtIHRvUmVjdC50b3ApIC8gKGZyb21SZWN0LmxlZnQgLSB0b1JlY3QubGVmdCkpIHtcbiAgICAgICAgICAgIC8vIElmIHJldHVybmluZyB0byBzYW1lIHBsYWNlIGFzIHN0YXJ0ZWQgZnJvbSBhbmltYXRpb24gYW5kIG9uIHNhbWUgYXhpc1xuICAgICAgICAgICAgdGltZSA9IGNhbGN1bGF0ZVJlYWxUaW1lKGFuaW1hdGluZ1JlY3QsIHByZXZGcm9tUmVjdCwgcHJldlRvUmVjdCwgX3RoaXMub3B0aW9ucyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgZnJvbVJlY3QgIT0gdG9SZWN0OiBhbmltYXRlXG4gICAgICAgIGlmICghaXNSZWN0RXF1YWwodG9SZWN0LCBmcm9tUmVjdCkpIHtcbiAgICAgICAgICB0YXJnZXQucHJldkZyb21SZWN0ID0gZnJvbVJlY3Q7XG4gICAgICAgICAgdGFyZ2V0LnByZXZUb1JlY3QgPSB0b1JlY3Q7XG4gICAgICAgICAgaWYgKCF0aW1lKSB7XG4gICAgICAgICAgICB0aW1lID0gX3RoaXMub3B0aW9ucy5hbmltYXRpb247XG4gICAgICAgICAgfVxuICAgICAgICAgIF90aGlzLmFuaW1hdGUodGFyZ2V0LCBhbmltYXRpbmdSZWN0LCB0b1JlY3QsIHRpbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aW1lKSB7XG4gICAgICAgICAgYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICBhbmltYXRpb25UaW1lID0gTWF0aC5tYXgoYW5pbWF0aW9uVGltZSwgdGltZSk7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRhcmdldC5hbmltYXRpb25SZXNldFRpbWVyKTtcbiAgICAgICAgICB0YXJnZXQuYW5pbWF0aW9uUmVzZXRUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGFyZ2V0LmFuaW1hdGlvblRpbWUgPSAwO1xuICAgICAgICAgICAgdGFyZ2V0LnByZXZGcm9tUmVjdCA9IG51bGw7XG4gICAgICAgICAgICB0YXJnZXQuZnJvbVJlY3QgPSBudWxsO1xuICAgICAgICAgICAgdGFyZ2V0LnByZXZUb1JlY3QgPSBudWxsO1xuICAgICAgICAgICAgdGFyZ2V0LnRoaXNBbmltYXRpb25EdXJhdGlvbiA9IG51bGw7XG4gICAgICAgICAgfSwgdGltZSk7XG4gICAgICAgICAgdGFyZ2V0LnRoaXNBbmltYXRpb25EdXJhdGlvbiA9IHRpbWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY2xlYXJUaW1lb3V0KGFuaW1hdGlvbkNhbGxiYWNrSWQpO1xuICAgICAgaWYgKCFhbmltYXRpbmcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFuaW1hdGlvbkNhbGxiYWNrSWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjaygpO1xuICAgICAgICB9LCBhbmltYXRpb25UaW1lKTtcbiAgICAgIH1cbiAgICAgIGFuaW1hdGlvblN0YXRlcyA9IFtdO1xuICAgIH0sXG4gICAgYW5pbWF0ZTogZnVuY3Rpb24gYW5pbWF0ZSh0YXJnZXQsIGN1cnJlbnRSZWN0LCB0b1JlY3QsIGR1cmF0aW9uKSB7XG4gICAgICBpZiAoZHVyYXRpb24pIHtcbiAgICAgICAgY3NzKHRhcmdldCwgJ3RyYW5zaXRpb24nLCAnJyk7XG4gICAgICAgIGNzcyh0YXJnZXQsICd0cmFuc2Zvcm0nLCAnJyk7XG4gICAgICAgIHZhciBlbE1hdHJpeCA9IG1hdHJpeCh0aGlzLmVsKSxcbiAgICAgICAgICBzY2FsZVggPSBlbE1hdHJpeCAmJiBlbE1hdHJpeC5hLFxuICAgICAgICAgIHNjYWxlWSA9IGVsTWF0cml4ICYmIGVsTWF0cml4LmQsXG4gICAgICAgICAgdHJhbnNsYXRlWCA9IChjdXJyZW50UmVjdC5sZWZ0IC0gdG9SZWN0LmxlZnQpIC8gKHNjYWxlWCB8fCAxKSxcbiAgICAgICAgICB0cmFuc2xhdGVZID0gKGN1cnJlbnRSZWN0LnRvcCAtIHRvUmVjdC50b3ApIC8gKHNjYWxlWSB8fCAxKTtcbiAgICAgICAgdGFyZ2V0LmFuaW1hdGluZ1ggPSAhIXRyYW5zbGF0ZVg7XG4gICAgICAgIHRhcmdldC5hbmltYXRpbmdZID0gISF0cmFuc2xhdGVZO1xuICAgICAgICBjc3ModGFyZ2V0LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZTNkKCcgKyB0cmFuc2xhdGVYICsgJ3B4LCcgKyB0cmFuc2xhdGVZICsgJ3B4LDApJyk7XG4gICAgICAgIHRoaXMuZm9yUmVwYWludER1bW15ID0gcmVwYWludCh0YXJnZXQpOyAvLyByZXBhaW50XG5cbiAgICAgICAgY3NzKHRhcmdldCwgJ3RyYW5zaXRpb24nLCAndHJhbnNmb3JtICcgKyBkdXJhdGlvbiArICdtcycgKyAodGhpcy5vcHRpb25zLmVhc2luZyA/ICcgJyArIHRoaXMub3B0aW9ucy5lYXNpbmcgOiAnJykpO1xuICAgICAgICBjc3ModGFyZ2V0LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZTNkKDAsMCwwKScpO1xuICAgICAgICB0eXBlb2YgdGFyZ2V0LmFuaW1hdGVkID09PSAnbnVtYmVyJyAmJiBjbGVhclRpbWVvdXQodGFyZ2V0LmFuaW1hdGVkKTtcbiAgICAgICAgdGFyZ2V0LmFuaW1hdGVkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY3NzKHRhcmdldCwgJ3RyYW5zaXRpb24nLCAnJyk7XG4gICAgICAgICAgY3NzKHRhcmdldCwgJ3RyYW5zZm9ybScsICcnKTtcbiAgICAgICAgICB0YXJnZXQuYW5pbWF0ZWQgPSBmYWxzZTtcbiAgICAgICAgICB0YXJnZXQuYW5pbWF0aW5nWCA9IGZhbHNlO1xuICAgICAgICAgIHRhcmdldC5hbmltYXRpbmdZID0gZmFsc2U7XG4gICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiByZXBhaW50KHRhcmdldCkge1xuICByZXR1cm4gdGFyZ2V0Lm9mZnNldFdpZHRoO1xufVxuZnVuY3Rpb24gY2FsY3VsYXRlUmVhbFRpbWUoYW5pbWF0aW5nUmVjdCwgZnJvbVJlY3QsIHRvUmVjdCwgb3B0aW9ucykge1xuICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KGZyb21SZWN0LnRvcCAtIGFuaW1hdGluZ1JlY3QudG9wLCAyKSArIE1hdGgucG93KGZyb21SZWN0LmxlZnQgLSBhbmltYXRpbmdSZWN0LmxlZnQsIDIpKSAvIE1hdGguc3FydChNYXRoLnBvdyhmcm9tUmVjdC50b3AgLSB0b1JlY3QudG9wLCAyKSArIE1hdGgucG93KGZyb21SZWN0LmxlZnQgLSB0b1JlY3QubGVmdCwgMikpICogb3B0aW9ucy5hbmltYXRpb247XG59XG5cbnZhciBwbHVnaW5zID0gW107XG52YXIgZGVmYXVsdHMgPSB7XG4gIGluaXRpYWxpemVCeURlZmF1bHQ6IHRydWVcbn07XG52YXIgUGx1Z2luTWFuYWdlciA9IHtcbiAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KHBsdWdpbikge1xuICAgIC8vIFNldCBkZWZhdWx0IHN0YXRpYyBwcm9wZXJ0aWVzXG4gICAgZm9yICh2YXIgb3B0aW9uIGluIGRlZmF1bHRzKSB7XG4gICAgICBpZiAoZGVmYXVsdHMuaGFzT3duUHJvcGVydHkob3B0aW9uKSAmJiAhKG9wdGlvbiBpbiBwbHVnaW4pKSB7XG4gICAgICAgIHBsdWdpbltvcHRpb25dID0gZGVmYXVsdHNbb3B0aW9uXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7XG4gICAgICBpZiAocC5wbHVnaW5OYW1lID09PSBwbHVnaW4ucGx1Z2luTmFtZSkge1xuICAgICAgICB0aHJvdyBcIlNvcnRhYmxlOiBDYW5ub3QgbW91bnQgcGx1Z2luIFwiLmNvbmNhdChwbHVnaW4ucGx1Z2luTmFtZSwgXCIgbW9yZSB0aGFuIG9uY2VcIik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gIH0sXG4gIHBsdWdpbkV2ZW50OiBmdW5jdGlvbiBwbHVnaW5FdmVudChldmVudE5hbWUsIHNvcnRhYmxlLCBldnQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHRoaXMuZXZlbnRDYW5jZWxlZCA9IGZhbHNlO1xuICAgIGV2dC5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5ldmVudENhbmNlbGVkID0gdHJ1ZTtcbiAgICB9O1xuICAgIHZhciBldmVudE5hbWVHbG9iYWwgPSBldmVudE5hbWUgKyAnR2xvYmFsJztcbiAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgaWYgKCFzb3J0YWJsZVtwbHVnaW4ucGx1Z2luTmFtZV0pIHJldHVybjtcbiAgICAgIC8vIEZpcmUgZ2xvYmFsIGV2ZW50cyBpZiBpdCBleGlzdHMgaW4gdGhpcyBzb3J0YWJsZVxuICAgICAgaWYgKHNvcnRhYmxlW3BsdWdpbi5wbHVnaW5OYW1lXVtldmVudE5hbWVHbG9iYWxdKSB7XG4gICAgICAgIHNvcnRhYmxlW3BsdWdpbi5wbHVnaW5OYW1lXVtldmVudE5hbWVHbG9iYWxdKF9vYmplY3RTcHJlYWQyKHtcbiAgICAgICAgICBzb3J0YWJsZTogc29ydGFibGVcbiAgICAgICAgfSwgZXZ0KSk7XG4gICAgICB9XG5cbiAgICAgIC8vIE9ubHkgZmlyZSBwbHVnaW4gZXZlbnQgaWYgcGx1Z2luIGlzIGVuYWJsZWQgaW4gdGhpcyBzb3J0YWJsZSxcbiAgICAgIC8vIGFuZCBwbHVnaW4gaGFzIGV2ZW50IGRlZmluZWRcbiAgICAgIGlmIChzb3J0YWJsZS5vcHRpb25zW3BsdWdpbi5wbHVnaW5OYW1lXSAmJiBzb3J0YWJsZVtwbHVnaW4ucGx1Z2luTmFtZV1bZXZlbnROYW1lXSkge1xuICAgICAgICBzb3J0YWJsZVtwbHVnaW4ucGx1Z2luTmFtZV1bZXZlbnROYW1lXShfb2JqZWN0U3ByZWFkMih7XG4gICAgICAgICAgc29ydGFibGU6IHNvcnRhYmxlXG4gICAgICAgIH0sIGV2dCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBpbml0aWFsaXplUGx1Z2luczogZnVuY3Rpb24gaW5pdGlhbGl6ZVBsdWdpbnMoc29ydGFibGUsIGVsLCBkZWZhdWx0cywgb3B0aW9ucykge1xuICAgIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICB2YXIgcGx1Z2luTmFtZSA9IHBsdWdpbi5wbHVnaW5OYW1lO1xuICAgICAgaWYgKCFzb3J0YWJsZS5vcHRpb25zW3BsdWdpbk5hbWVdICYmICFwbHVnaW4uaW5pdGlhbGl6ZUJ5RGVmYXVsdCkgcmV0dXJuO1xuICAgICAgdmFyIGluaXRpYWxpemVkID0gbmV3IHBsdWdpbihzb3J0YWJsZSwgZWwsIHNvcnRhYmxlLm9wdGlvbnMpO1xuICAgICAgaW5pdGlhbGl6ZWQuc29ydGFibGUgPSBzb3J0YWJsZTtcbiAgICAgIGluaXRpYWxpemVkLm9wdGlvbnMgPSBzb3J0YWJsZS5vcHRpb25zO1xuICAgICAgc29ydGFibGVbcGx1Z2luTmFtZV0gPSBpbml0aWFsaXplZDtcblxuICAgICAgLy8gQWRkIGRlZmF1bHQgb3B0aW9ucyBmcm9tIHBsdWdpblxuICAgICAgX2V4dGVuZHMoZGVmYXVsdHMsIGluaXRpYWxpemVkLmRlZmF1bHRzKTtcbiAgICB9KTtcbiAgICBmb3IgKHZhciBvcHRpb24gaW4gc29ydGFibGUub3B0aW9ucykge1xuICAgICAgaWYgKCFzb3J0YWJsZS5vcHRpb25zLmhhc093blByb3BlcnR5KG9wdGlvbikpIGNvbnRpbnVlO1xuICAgICAgdmFyIG1vZGlmaWVkID0gdGhpcy5tb2RpZnlPcHRpb24oc29ydGFibGUsIG9wdGlvbiwgc29ydGFibGUub3B0aW9uc1tvcHRpb25dKTtcbiAgICAgIGlmICh0eXBlb2YgbW9kaWZpZWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNvcnRhYmxlLm9wdGlvbnNbb3B0aW9uXSA9IG1vZGlmaWVkO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZ2V0RXZlbnRQcm9wZXJ0aWVzOiBmdW5jdGlvbiBnZXRFdmVudFByb3BlcnRpZXMobmFtZSwgc29ydGFibGUpIHtcbiAgICB2YXIgZXZlbnRQcm9wZXJ0aWVzID0ge307XG4gICAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgIGlmICh0eXBlb2YgcGx1Z2luLmV2ZW50UHJvcGVydGllcyAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuICAgICAgX2V4dGVuZHMoZXZlbnRQcm9wZXJ0aWVzLCBwbHVnaW4uZXZlbnRQcm9wZXJ0aWVzLmNhbGwoc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdLCBuYW1lKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGV2ZW50UHJvcGVydGllcztcbiAgfSxcbiAgbW9kaWZ5T3B0aW9uOiBmdW5jdGlvbiBtb2RpZnlPcHRpb24oc29ydGFibGUsIG5hbWUsIHZhbHVlKSB7XG4gICAgdmFyIG1vZGlmaWVkVmFsdWU7XG4gICAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgIC8vIFBsdWdpbiBtdXN0IGV4aXN0IG9uIHRoZSBTb3J0YWJsZVxuICAgICAgaWYgKCFzb3J0YWJsZVtwbHVnaW4ucGx1Z2luTmFtZV0pIHJldHVybjtcblxuICAgICAgLy8gSWYgc3RhdGljIG9wdGlvbiBsaXN0ZW5lciBleGlzdHMgZm9yIHRoaXMgb3B0aW9uLCBjYWxsIGluIHRoZSBjb250ZXh0IG9mIHRoZSBTb3J0YWJsZSdzIGluc3RhbmNlIG9mIHRoaXMgcGx1Z2luXG4gICAgICBpZiAocGx1Z2luLm9wdGlvbkxpc3RlbmVycyAmJiB0eXBlb2YgcGx1Z2luLm9wdGlvbkxpc3RlbmVyc1tuYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBtb2RpZmllZFZhbHVlID0gcGx1Z2luLm9wdGlvbkxpc3RlbmVyc1tuYW1lXS5jYWxsKHNvcnRhYmxlW3BsdWdpbi5wbHVnaW5OYW1lXSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBtb2RpZmllZFZhbHVlO1xuICB9XG59O1xuXG5mdW5jdGlvbiBkaXNwYXRjaEV2ZW50KF9yZWYpIHtcbiAgdmFyIHNvcnRhYmxlID0gX3JlZi5zb3J0YWJsZSxcbiAgICByb290RWwgPSBfcmVmLnJvb3RFbCxcbiAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgIHRhcmdldEVsID0gX3JlZi50YXJnZXRFbCxcbiAgICBjbG9uZUVsID0gX3JlZi5jbG9uZUVsLFxuICAgIHRvRWwgPSBfcmVmLnRvRWwsXG4gICAgZnJvbUVsID0gX3JlZi5mcm9tRWwsXG4gICAgb2xkSW5kZXggPSBfcmVmLm9sZEluZGV4LFxuICAgIG5ld0luZGV4ID0gX3JlZi5uZXdJbmRleCxcbiAgICBvbGREcmFnZ2FibGVJbmRleCA9IF9yZWYub2xkRHJhZ2dhYmxlSW5kZXgsXG4gICAgbmV3RHJhZ2dhYmxlSW5kZXggPSBfcmVmLm5ld0RyYWdnYWJsZUluZGV4LFxuICAgIG9yaWdpbmFsRXZlbnQgPSBfcmVmLm9yaWdpbmFsRXZlbnQsXG4gICAgcHV0U29ydGFibGUgPSBfcmVmLnB1dFNvcnRhYmxlLFxuICAgIGV4dHJhRXZlbnRQcm9wZXJ0aWVzID0gX3JlZi5leHRyYUV2ZW50UHJvcGVydGllcztcbiAgc29ydGFibGUgPSBzb3J0YWJsZSB8fCByb290RWwgJiYgcm9vdEVsW2V4cGFuZG9dO1xuICBpZiAoIXNvcnRhYmxlKSByZXR1cm47XG4gIHZhciBldnQsXG4gICAgb3B0aW9ucyA9IHNvcnRhYmxlLm9wdGlvbnMsXG4gICAgb25OYW1lID0gJ29uJyArIG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnN1YnN0cigxKTtcbiAgLy8gU3VwcG9ydCBmb3IgbmV3IEN1c3RvbUV2ZW50IGZlYXR1cmVcbiAgaWYgKHdpbmRvdy5DdXN0b21FdmVudCAmJiAhSUUxMU9yTGVzcyAmJiAhRWRnZSkge1xuICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChuYW1lLCB7XG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgIGV2dC5pbml0RXZlbnQobmFtZSwgdHJ1ZSwgdHJ1ZSk7XG4gIH1cbiAgZXZ0LnRvID0gdG9FbCB8fCByb290RWw7XG4gIGV2dC5mcm9tID0gZnJvbUVsIHx8IHJvb3RFbDtcbiAgZXZ0Lml0ZW0gPSB0YXJnZXRFbCB8fCByb290RWw7XG4gIGV2dC5jbG9uZSA9IGNsb25lRWw7XG4gIGV2dC5vbGRJbmRleCA9IG9sZEluZGV4O1xuICBldnQubmV3SW5kZXggPSBuZXdJbmRleDtcbiAgZXZ0Lm9sZERyYWdnYWJsZUluZGV4ID0gb2xkRHJhZ2dhYmxlSW5kZXg7XG4gIGV2dC5uZXdEcmFnZ2FibGVJbmRleCA9IG5ld0RyYWdnYWJsZUluZGV4O1xuICBldnQub3JpZ2luYWxFdmVudCA9IG9yaWdpbmFsRXZlbnQ7XG4gIGV2dC5wdWxsTW9kZSA9IHB1dFNvcnRhYmxlID8gcHV0U29ydGFibGUubGFzdFB1dE1vZGUgOiB1bmRlZmluZWQ7XG4gIHZhciBhbGxFdmVudFByb3BlcnRpZXMgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgZXh0cmFFdmVudFByb3BlcnRpZXMpLCBQbHVnaW5NYW5hZ2VyLmdldEV2ZW50UHJvcGVydGllcyhuYW1lLCBzb3J0YWJsZSkpO1xuICBmb3IgKHZhciBvcHRpb24gaW4gYWxsRXZlbnRQcm9wZXJ0aWVzKSB7XG4gICAgZXZ0W29wdGlvbl0gPSBhbGxFdmVudFByb3BlcnRpZXNbb3B0aW9uXTtcbiAgfVxuICBpZiAocm9vdEVsKSB7XG4gICAgcm9vdEVsLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgfVxuICBpZiAob3B0aW9uc1tvbk5hbWVdKSB7XG4gICAgb3B0aW9uc1tvbk5hbWVdLmNhbGwoc29ydGFibGUsIGV2dCk7XG4gIH1cbn1cblxudmFyIF9leGNsdWRlZCA9IFtcImV2dFwiXTtcbnZhciBwbHVnaW5FdmVudCA9IGZ1bmN0aW9uIHBsdWdpbkV2ZW50KGV2ZW50TmFtZSwgc29ydGFibGUpIHtcbiAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9LFxuICAgIG9yaWdpbmFsRXZlbnQgPSBfcmVmLmV2dCxcbiAgICBkYXRhID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIF9leGNsdWRlZCk7XG4gIFBsdWdpbk1hbmFnZXIucGx1Z2luRXZlbnQuYmluZChTb3J0YWJsZSkoZXZlbnROYW1lLCBzb3J0YWJsZSwgX29iamVjdFNwcmVhZDIoe1xuICAgIGRyYWdFbDogZHJhZ0VsLFxuICAgIHBhcmVudEVsOiBwYXJlbnRFbCxcbiAgICBnaG9zdEVsOiBnaG9zdEVsLFxuICAgIHJvb3RFbDogcm9vdEVsLFxuICAgIG5leHRFbDogbmV4dEVsLFxuICAgIGxhc3REb3duRWw6IGxhc3REb3duRWwsXG4gICAgY2xvbmVFbDogY2xvbmVFbCxcbiAgICBjbG9uZUhpZGRlbjogY2xvbmVIaWRkZW4sXG4gICAgZHJhZ1N0YXJ0ZWQ6IG1vdmVkLFxuICAgIHB1dFNvcnRhYmxlOiBwdXRTb3J0YWJsZSxcbiAgICBhY3RpdmVTb3J0YWJsZTogU29ydGFibGUuYWN0aXZlLFxuICAgIG9yaWdpbmFsRXZlbnQ6IG9yaWdpbmFsRXZlbnQsXG4gICAgb2xkSW5kZXg6IG9sZEluZGV4LFxuICAgIG9sZERyYWdnYWJsZUluZGV4OiBvbGREcmFnZ2FibGVJbmRleCxcbiAgICBuZXdJbmRleDogbmV3SW5kZXgsXG4gICAgbmV3RHJhZ2dhYmxlSW5kZXg6IG5ld0RyYWdnYWJsZUluZGV4LFxuICAgIGhpZGVHaG9zdEZvclRhcmdldDogX2hpZGVHaG9zdEZvclRhcmdldCxcbiAgICB1bmhpZGVHaG9zdEZvclRhcmdldDogX3VuaGlkZUdob3N0Rm9yVGFyZ2V0LFxuICAgIGNsb25lTm93SGlkZGVuOiBmdW5jdGlvbiBjbG9uZU5vd0hpZGRlbigpIHtcbiAgICAgIGNsb25lSGlkZGVuID0gdHJ1ZTtcbiAgICB9LFxuICAgIGNsb25lTm93U2hvd246IGZ1bmN0aW9uIGNsb25lTm93U2hvd24oKSB7XG4gICAgICBjbG9uZUhpZGRlbiA9IGZhbHNlO1xuICAgIH0sXG4gICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50OiBmdW5jdGlvbiBkaXNwYXRjaFNvcnRhYmxlRXZlbnQobmFtZSkge1xuICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICBzb3J0YWJsZTogc29ydGFibGUsXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IG9yaWdpbmFsRXZlbnRcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgZGF0YSkpO1xufTtcbmZ1bmN0aW9uIF9kaXNwYXRjaEV2ZW50KGluZm8pIHtcbiAgZGlzcGF0Y2hFdmVudChfb2JqZWN0U3ByZWFkMih7XG4gICAgcHV0U29ydGFibGU6IHB1dFNvcnRhYmxlLFxuICAgIGNsb25lRWw6IGNsb25lRWwsXG4gICAgdGFyZ2V0RWw6IGRyYWdFbCxcbiAgICByb290RWw6IHJvb3RFbCxcbiAgICBvbGRJbmRleDogb2xkSW5kZXgsXG4gICAgb2xkRHJhZ2dhYmxlSW5kZXg6IG9sZERyYWdnYWJsZUluZGV4LFxuICAgIG5ld0luZGV4OiBuZXdJbmRleCxcbiAgICBuZXdEcmFnZ2FibGVJbmRleDogbmV3RHJhZ2dhYmxlSW5kZXhcbiAgfSwgaW5mbykpO1xufVxudmFyIGRyYWdFbCxcbiAgcGFyZW50RWwsXG4gIGdob3N0RWwsXG4gIHJvb3RFbCxcbiAgbmV4dEVsLFxuICBsYXN0RG93bkVsLFxuICBjbG9uZUVsLFxuICBjbG9uZUhpZGRlbixcbiAgb2xkSW5kZXgsXG4gIG5ld0luZGV4LFxuICBvbGREcmFnZ2FibGVJbmRleCxcbiAgbmV3RHJhZ2dhYmxlSW5kZXgsXG4gIGFjdGl2ZUdyb3VwLFxuICBwdXRTb3J0YWJsZSxcbiAgYXdhaXRpbmdEcmFnU3RhcnRlZCA9IGZhbHNlLFxuICBpZ25vcmVOZXh0Q2xpY2sgPSBmYWxzZSxcbiAgc29ydGFibGVzID0gW10sXG4gIHRhcEV2dCxcbiAgdG91Y2hFdnQsXG4gIGxhc3REeCxcbiAgbGFzdER5LFxuICB0YXBEaXN0YW5jZUxlZnQsXG4gIHRhcERpc3RhbmNlVG9wLFxuICBtb3ZlZCxcbiAgbGFzdFRhcmdldCxcbiAgbGFzdERpcmVjdGlvbixcbiAgcGFzdEZpcnN0SW52ZXJ0VGhyZXNoID0gZmFsc2UsXG4gIGlzQ2lyY3Vtc3RhbnRpYWxJbnZlcnQgPSBmYWxzZSxcbiAgdGFyZ2V0TW92ZURpc3RhbmNlLFxuICAvLyBGb3IgcG9zaXRpb25pbmcgZ2hvc3QgYWJzb2x1dGVseVxuICBnaG9zdFJlbGF0aXZlUGFyZW50LFxuICBnaG9zdFJlbGF0aXZlUGFyZW50SW5pdGlhbFNjcm9sbCA9IFtdLFxuICAvLyAobGVmdCwgdG9wKVxuXG4gIF9zaWxlbnQgPSBmYWxzZSxcbiAgc2F2ZWRJbnB1dENoZWNrZWQgPSBbXTtcblxuLyoqIEBjb25zdCAqL1xudmFyIGRvY3VtZW50RXhpc3RzID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyxcbiAgUG9zaXRpb25HaG9zdEFic29sdXRlbHkgPSBJT1MsXG4gIENTU0Zsb2F0UHJvcGVydHkgPSBFZGdlIHx8IElFMTFPckxlc3MgPyAnY3NzRmxvYXQnIDogJ2Zsb2F0JyxcbiAgLy8gVGhpcyB3aWxsIG5vdCBwYXNzIGZvciBJRTksIGJlY2F1c2UgSUU5IERuRCBvbmx5IHdvcmtzIG9uIGFuY2hvcnNcbiAgc3VwcG9ydERyYWdnYWJsZSA9IGRvY3VtZW50RXhpc3RzICYmICFDaHJvbWVGb3JBbmRyb2lkICYmICFJT1MgJiYgJ2RyYWdnYWJsZScgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gIHN1cHBvcnRDc3NQb2ludGVyRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghZG9jdW1lbnRFeGlzdHMpIHJldHVybjtcbiAgICAvLyBmYWxzZSB3aGVuIDw9IElFMTFcbiAgICBpZiAoSUUxMU9yTGVzcykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd4Jyk7XG4gICAgZWwuc3R5bGUuY3NzVGV4dCA9ICdwb2ludGVyLWV2ZW50czphdXRvJztcbiAgICByZXR1cm4gZWwuc3R5bGUucG9pbnRlckV2ZW50cyA9PT0gJ2F1dG8nO1xuICB9KCksXG4gIF9kZXRlY3REaXJlY3Rpb24gPSBmdW5jdGlvbiBfZGV0ZWN0RGlyZWN0aW9uKGVsLCBvcHRpb25zKSB7XG4gICAgdmFyIGVsQ1NTID0gY3NzKGVsKSxcbiAgICAgIGVsV2lkdGggPSBwYXJzZUludChlbENTUy53aWR0aCkgLSBwYXJzZUludChlbENTUy5wYWRkaW5nTGVmdCkgLSBwYXJzZUludChlbENTUy5wYWRkaW5nUmlnaHQpIC0gcGFyc2VJbnQoZWxDU1MuYm9yZGVyTGVmdFdpZHRoKSAtIHBhcnNlSW50KGVsQ1NTLmJvcmRlclJpZ2h0V2lkdGgpLFxuICAgICAgY2hpbGQxID0gZ2V0Q2hpbGQoZWwsIDAsIG9wdGlvbnMpLFxuICAgICAgY2hpbGQyID0gZ2V0Q2hpbGQoZWwsIDEsIG9wdGlvbnMpLFxuICAgICAgZmlyc3RDaGlsZENTUyA9IGNoaWxkMSAmJiBjc3MoY2hpbGQxKSxcbiAgICAgIHNlY29uZENoaWxkQ1NTID0gY2hpbGQyICYmIGNzcyhjaGlsZDIpLFxuICAgICAgZmlyc3RDaGlsZFdpZHRoID0gZmlyc3RDaGlsZENTUyAmJiBwYXJzZUludChmaXJzdENoaWxkQ1NTLm1hcmdpbkxlZnQpICsgcGFyc2VJbnQoZmlyc3RDaGlsZENTUy5tYXJnaW5SaWdodCkgKyBnZXRSZWN0KGNoaWxkMSkud2lkdGgsXG4gICAgICBzZWNvbmRDaGlsZFdpZHRoID0gc2Vjb25kQ2hpbGRDU1MgJiYgcGFyc2VJbnQoc2Vjb25kQ2hpbGRDU1MubWFyZ2luTGVmdCkgKyBwYXJzZUludChzZWNvbmRDaGlsZENTUy5tYXJnaW5SaWdodCkgKyBnZXRSZWN0KGNoaWxkMikud2lkdGg7XG4gICAgaWYgKGVsQ1NTLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgcmV0dXJuIGVsQ1NTLmZsZXhEaXJlY3Rpb24gPT09ICdjb2x1bW4nIHx8IGVsQ1NTLmZsZXhEaXJlY3Rpb24gPT09ICdjb2x1bW4tcmV2ZXJzZScgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICAgIH1cbiAgICBpZiAoZWxDU1MuZGlzcGxheSA9PT0gJ2dyaWQnKSB7XG4gICAgICByZXR1cm4gZWxDU1MuZ3JpZFRlbXBsYXRlQ29sdW1ucy5zcGxpdCgnICcpLmxlbmd0aCA8PSAxID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICB9XG4gICAgaWYgKGNoaWxkMSAmJiBmaXJzdENoaWxkQ1NTW1wiZmxvYXRcIl0gJiYgZmlyc3RDaGlsZENTU1tcImZsb2F0XCJdICE9PSAnbm9uZScpIHtcbiAgICAgIHZhciB0b3VjaGluZ1NpZGVDaGlsZDIgPSBmaXJzdENoaWxkQ1NTW1wiZmxvYXRcIl0gPT09ICdsZWZ0JyA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gICAgICByZXR1cm4gY2hpbGQyICYmIChzZWNvbmRDaGlsZENTUy5jbGVhciA9PT0gJ2JvdGgnIHx8IHNlY29uZENoaWxkQ1NTLmNsZWFyID09PSB0b3VjaGluZ1NpZGVDaGlsZDIpID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkMSAmJiAoZmlyc3RDaGlsZENTUy5kaXNwbGF5ID09PSAnYmxvY2snIHx8IGZpcnN0Q2hpbGRDU1MuZGlzcGxheSA9PT0gJ2ZsZXgnIHx8IGZpcnN0Q2hpbGRDU1MuZGlzcGxheSA9PT0gJ3RhYmxlJyB8fCBmaXJzdENoaWxkQ1NTLmRpc3BsYXkgPT09ICdncmlkJyB8fCBmaXJzdENoaWxkV2lkdGggPj0gZWxXaWR0aCAmJiBlbENTU1tDU1NGbG9hdFByb3BlcnR5XSA9PT0gJ25vbmUnIHx8IGNoaWxkMiAmJiBlbENTU1tDU1NGbG9hdFByb3BlcnR5XSA9PT0gJ25vbmUnICYmIGZpcnN0Q2hpbGRXaWR0aCArIHNlY29uZENoaWxkV2lkdGggPiBlbFdpZHRoKSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gIH0sXG4gIF9kcmFnRWxJblJvd0NvbHVtbiA9IGZ1bmN0aW9uIF9kcmFnRWxJblJvd0NvbHVtbihkcmFnUmVjdCwgdGFyZ2V0UmVjdCwgdmVydGljYWwpIHtcbiAgICB2YXIgZHJhZ0VsUzFPcHAgPSB2ZXJ0aWNhbCA/IGRyYWdSZWN0LmxlZnQgOiBkcmFnUmVjdC50b3AsXG4gICAgICBkcmFnRWxTMk9wcCA9IHZlcnRpY2FsID8gZHJhZ1JlY3QucmlnaHQgOiBkcmFnUmVjdC5ib3R0b20sXG4gICAgICBkcmFnRWxPcHBMZW5ndGggPSB2ZXJ0aWNhbCA/IGRyYWdSZWN0LndpZHRoIDogZHJhZ1JlY3QuaGVpZ2h0LFxuICAgICAgdGFyZ2V0UzFPcHAgPSB2ZXJ0aWNhbCA/IHRhcmdldFJlY3QubGVmdCA6IHRhcmdldFJlY3QudG9wLFxuICAgICAgdGFyZ2V0UzJPcHAgPSB2ZXJ0aWNhbCA/IHRhcmdldFJlY3QucmlnaHQgOiB0YXJnZXRSZWN0LmJvdHRvbSxcbiAgICAgIHRhcmdldE9wcExlbmd0aCA9IHZlcnRpY2FsID8gdGFyZ2V0UmVjdC53aWR0aCA6IHRhcmdldFJlY3QuaGVpZ2h0O1xuICAgIHJldHVybiBkcmFnRWxTMU9wcCA9PT0gdGFyZ2V0UzFPcHAgfHwgZHJhZ0VsUzJPcHAgPT09IHRhcmdldFMyT3BwIHx8IGRyYWdFbFMxT3BwICsgZHJhZ0VsT3BwTGVuZ3RoIC8gMiA9PT0gdGFyZ2V0UzFPcHAgKyB0YXJnZXRPcHBMZW5ndGggLyAyO1xuICB9LFxuICAvKipcclxuICAgKiBEZXRlY3RzIGZpcnN0IG5lYXJlc3QgZW1wdHkgc29ydGFibGUgdG8gWCBhbmQgWSBwb3NpdGlvbiB1c2luZyBlbXB0eUluc2VydFRocmVzaG9sZC5cclxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHggICAgICBYIHBvc2l0aW9uXHJcbiAgICogQHBhcmFtICB7TnVtYmVyfSB5ICAgICAgWSBwb3NpdGlvblxyXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAgIEVsZW1lbnQgb2YgdGhlIGZpcnN0IGZvdW5kIG5lYXJlc3QgU29ydGFibGVcclxuICAgKi9cbiAgX2RldGVjdE5lYXJlc3RFbXB0eVNvcnRhYmxlID0gZnVuY3Rpb24gX2RldGVjdE5lYXJlc3RFbXB0eVNvcnRhYmxlKHgsIHkpIHtcbiAgICB2YXIgcmV0O1xuICAgIHNvcnRhYmxlcy5zb21lKGZ1bmN0aW9uIChzb3J0YWJsZSkge1xuICAgICAgdmFyIHRocmVzaG9sZCA9IHNvcnRhYmxlW2V4cGFuZG9dLm9wdGlvbnMuZW1wdHlJbnNlcnRUaHJlc2hvbGQ7XG4gICAgICBpZiAoIXRocmVzaG9sZCB8fCBsYXN0Q2hpbGQoc29ydGFibGUpKSByZXR1cm47XG4gICAgICB2YXIgcmVjdCA9IGdldFJlY3Qoc29ydGFibGUpLFxuICAgICAgICBpbnNpZGVIb3Jpem9udGFsbHkgPSB4ID49IHJlY3QubGVmdCAtIHRocmVzaG9sZCAmJiB4IDw9IHJlY3QucmlnaHQgKyB0aHJlc2hvbGQsXG4gICAgICAgIGluc2lkZVZlcnRpY2FsbHkgPSB5ID49IHJlY3QudG9wIC0gdGhyZXNob2xkICYmIHkgPD0gcmVjdC5ib3R0b20gKyB0aHJlc2hvbGQ7XG4gICAgICBpZiAoaW5zaWRlSG9yaXpvbnRhbGx5ICYmIGluc2lkZVZlcnRpY2FsbHkpIHtcbiAgICAgICAgcmV0dXJuIHJldCA9IHNvcnRhYmxlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH0sXG4gIF9wcmVwYXJlR3JvdXAgPSBmdW5jdGlvbiBfcHJlcGFyZUdyb3VwKG9wdGlvbnMpIHtcbiAgICBmdW5jdGlvbiB0b0ZuKHZhbHVlLCBwdWxsKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHRvLCBmcm9tLCBkcmFnRWwsIGV2dCkge1xuICAgICAgICB2YXIgc2FtZUdyb3VwID0gdG8ub3B0aW9ucy5ncm91cC5uYW1lICYmIGZyb20ub3B0aW9ucy5ncm91cC5uYW1lICYmIHRvLm9wdGlvbnMuZ3JvdXAubmFtZSA9PT0gZnJvbS5vcHRpb25zLmdyb3VwLm5hbWU7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsICYmIChwdWxsIHx8IHNhbWVHcm91cCkpIHtcbiAgICAgICAgICAvLyBEZWZhdWx0IHB1bGwgdmFsdWVcbiAgICAgICAgICAvLyBEZWZhdWx0IHB1bGwgYW5kIHB1dCB2YWx1ZSBpZiBzYW1lIGdyb3VwXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAocHVsbCAmJiB2YWx1ZSA9PT0gJ2Nsb25lJykge1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gdG9Gbih2YWx1ZSh0bywgZnJvbSwgZHJhZ0VsLCBldnQpLCBwdWxsKSh0bywgZnJvbSwgZHJhZ0VsLCBldnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBvdGhlckdyb3VwID0gKHB1bGwgPyB0byA6IGZyb20pLm9wdGlvbnMuZ3JvdXAubmFtZTtcbiAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IHRydWUgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZSA9PT0gb3RoZXJHcm91cCB8fCB2YWx1ZS5qb2luICYmIHZhbHVlLmluZGV4T2Yob3RoZXJHcm91cCkgPiAtMTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgdmFyIGdyb3VwID0ge307XG4gICAgdmFyIG9yaWdpbmFsR3JvdXAgPSBvcHRpb25zLmdyb3VwO1xuICAgIGlmICghb3JpZ2luYWxHcm91cCB8fCBfdHlwZW9mKG9yaWdpbmFsR3JvdXApICE9ICdvYmplY3QnKSB7XG4gICAgICBvcmlnaW5hbEdyb3VwID0ge1xuICAgICAgICBuYW1lOiBvcmlnaW5hbEdyb3VwXG4gICAgICB9O1xuICAgIH1cbiAgICBncm91cC5uYW1lID0gb3JpZ2luYWxHcm91cC5uYW1lO1xuICAgIGdyb3VwLmNoZWNrUHVsbCA9IHRvRm4ob3JpZ2luYWxHcm91cC5wdWxsLCB0cnVlKTtcbiAgICBncm91cC5jaGVja1B1dCA9IHRvRm4ob3JpZ2luYWxHcm91cC5wdXQpO1xuICAgIGdyb3VwLnJldmVydENsb25lID0gb3JpZ2luYWxHcm91cC5yZXZlcnRDbG9uZTtcbiAgICBvcHRpb25zLmdyb3VwID0gZ3JvdXA7XG4gIH0sXG4gIF9oaWRlR2hvc3RGb3JUYXJnZXQgPSBmdW5jdGlvbiBfaGlkZUdob3N0Rm9yVGFyZ2V0KCkge1xuICAgIGlmICghc3VwcG9ydENzc1BvaW50ZXJFdmVudHMgJiYgZ2hvc3RFbCkge1xuICAgICAgY3NzKGdob3N0RWwsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICB9XG4gIH0sXG4gIF91bmhpZGVHaG9zdEZvclRhcmdldCA9IGZ1bmN0aW9uIF91bmhpZGVHaG9zdEZvclRhcmdldCgpIHtcbiAgICBpZiAoIXN1cHBvcnRDc3NQb2ludGVyRXZlbnRzICYmIGdob3N0RWwpIHtcbiAgICAgIGNzcyhnaG9zdEVsLCAnZGlzcGxheScsICcnKTtcbiAgICB9XG4gIH07XG5cbi8vICMxMTg0IGZpeCAtIFByZXZlbnQgY2xpY2sgZXZlbnQgb24gZmFsbGJhY2sgaWYgZHJhZ2dlZCBidXQgaXRlbSBub3QgY2hhbmdlZCBwb3NpdGlvblxuaWYgKGRvY3VtZW50RXhpc3RzICYmICFDaHJvbWVGb3JBbmRyb2lkKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xuICAgIGlmIChpZ25vcmVOZXh0Q2xpY2spIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbiAmJiBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uICYmIGV2dC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgIGlnbm9yZU5leHRDbGljayA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwgdHJ1ZSk7XG59XG52YXIgbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQgPSBmdW5jdGlvbiBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudChldnQpIHtcbiAgaWYgKGRyYWdFbCkge1xuICAgIGV2dCA9IGV2dC50b3VjaGVzID8gZXZ0LnRvdWNoZXNbMF0gOiBldnQ7XG4gICAgdmFyIG5lYXJlc3QgPSBfZGV0ZWN0TmVhcmVzdEVtcHR5U29ydGFibGUoZXZ0LmNsaWVudFgsIGV2dC5jbGllbnRZKTtcbiAgICBpZiAobmVhcmVzdCkge1xuICAgICAgLy8gQ3JlYXRlIGltaXRhdGlvbiBldmVudFxuICAgICAgdmFyIGV2ZW50ID0ge307XG4gICAgICBmb3IgKHZhciBpIGluIGV2dCkge1xuICAgICAgICBpZiAoZXZ0Lmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgZXZlbnRbaV0gPSBldnRbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGV2ZW50LnRhcmdldCA9IGV2ZW50LnJvb3RFbCA9IG5lYXJlc3Q7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCA9IHZvaWQgMDtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbiA9IHZvaWQgMDtcbiAgICAgIG5lYXJlc3RbZXhwYW5kb10uX29uRHJhZ092ZXIoZXZlbnQpO1xuICAgIH1cbiAgfVxufTtcbnZhciBfY2hlY2tPdXRzaWRlVGFyZ2V0RWwgPSBmdW5jdGlvbiBfY2hlY2tPdXRzaWRlVGFyZ2V0RWwoZXZ0KSB7XG4gIGlmIChkcmFnRWwpIHtcbiAgICBkcmFnRWwucGFyZW50Tm9kZVtleHBhbmRvXS5faXNPdXRzaWRlVGhpc0VsKGV2dC50YXJnZXQpO1xuICB9XG59O1xuXG4vKipcclxuICogQGNsYXNzICBTb3J0YWJsZVxyXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gIGVsXHJcbiAqIEBwYXJhbSAge09iamVjdH0gICAgICAgW29wdGlvbnNdXHJcbiAqL1xuZnVuY3Rpb24gU29ydGFibGUoZWwsIG9wdGlvbnMpIHtcbiAgaWYgKCEoZWwgJiYgZWwubm9kZVR5cGUgJiYgZWwubm9kZVR5cGUgPT09IDEpKSB7XG4gICAgdGhyb3cgXCJTb3J0YWJsZTogYGVsYCBtdXN0IGJlIGFuIEhUTUxFbGVtZW50LCBub3QgXCIuY29uY2F0KHt9LnRvU3RyaW5nLmNhbGwoZWwpKTtcbiAgfVxuICB0aGlzLmVsID0gZWw7IC8vIHJvb3QgZWxlbWVudFxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zID0gX2V4dGVuZHMoe30sIG9wdGlvbnMpO1xuXG4gIC8vIEV4cG9ydCBpbnN0YW5jZVxuICBlbFtleHBhbmRvXSA9IHRoaXM7XG4gIHZhciBkZWZhdWx0cyA9IHtcbiAgICBncm91cDogbnVsbCxcbiAgICBzb3J0OiB0cnVlLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBzdG9yZTogbnVsbCxcbiAgICBoYW5kbGU6IG51bGwsXG4gICAgZHJhZ2dhYmxlOiAvXlt1b11sJC9pLnRlc3QoZWwubm9kZU5hbWUpID8gJz5saScgOiAnPionLFxuICAgIHN3YXBUaHJlc2hvbGQ6IDEsXG4gICAgLy8gcGVyY2VudGFnZTsgMCA8PSB4IDw9IDFcbiAgICBpbnZlcnRTd2FwOiBmYWxzZSxcbiAgICAvLyBpbnZlcnQgYWx3YXlzXG4gICAgaW52ZXJ0ZWRTd2FwVGhyZXNob2xkOiBudWxsLFxuICAgIC8vIHdpbGwgYmUgc2V0IHRvIHNhbWUgYXMgc3dhcFRocmVzaG9sZCBpZiBkZWZhdWx0XG4gICAgcmVtb3ZlQ2xvbmVPbkhpZGU6IHRydWUsXG4gICAgZGlyZWN0aW9uOiBmdW5jdGlvbiBkaXJlY3Rpb24oKSB7XG4gICAgICByZXR1cm4gX2RldGVjdERpcmVjdGlvbihlbCwgdGhpcy5vcHRpb25zKTtcbiAgICB9LFxuICAgIGdob3N0Q2xhc3M6ICdzb3J0YWJsZS1naG9zdCcsXG4gICAgY2hvc2VuQ2xhc3M6ICdzb3J0YWJsZS1jaG9zZW4nLFxuICAgIGRyYWdDbGFzczogJ3NvcnRhYmxlLWRyYWcnLFxuICAgIGlnbm9yZTogJ2EsIGltZycsXG4gICAgZmlsdGVyOiBudWxsLFxuICAgIHByZXZlbnRPbkZpbHRlcjogdHJ1ZSxcbiAgICBhbmltYXRpb246IDAsXG4gICAgZWFzaW5nOiBudWxsLFxuICAgIHNldERhdGE6IGZ1bmN0aW9uIHNldERhdGEoZGF0YVRyYW5zZmVyLCBkcmFnRWwpIHtcbiAgICAgIGRhdGFUcmFuc2Zlci5zZXREYXRhKCdUZXh0JywgZHJhZ0VsLnRleHRDb250ZW50KTtcbiAgICB9LFxuICAgIGRyb3BCdWJibGU6IGZhbHNlLFxuICAgIGRyYWdvdmVyQnViYmxlOiBmYWxzZSxcbiAgICBkYXRhSWRBdHRyOiAnZGF0YS1pZCcsXG4gICAgZGVsYXk6IDAsXG4gICAgZGVsYXlPblRvdWNoT25seTogZmFsc2UsXG4gICAgdG91Y2hTdGFydFRocmVzaG9sZDogKE51bWJlci5wYXJzZUludCA/IE51bWJlciA6IHdpbmRvdykucGFyc2VJbnQod2luZG93LmRldmljZVBpeGVsUmF0aW8sIDEwKSB8fCAxLFxuICAgIGZvcmNlRmFsbGJhY2s6IGZhbHNlLFxuICAgIGZhbGxiYWNrQ2xhc3M6ICdzb3J0YWJsZS1mYWxsYmFjaycsXG4gICAgZmFsbGJhY2tPbkJvZHk6IGZhbHNlLFxuICAgIGZhbGxiYWNrVG9sZXJhbmNlOiAwLFxuICAgIGZhbGxiYWNrT2Zmc2V0OiB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH0sXG4gICAgLy8gRGlzYWJsZWQgb24gU2FmYXJpOiAjMTU3MTsgRW5hYmxlZCBvbiBTYWZhcmkgSU9TOiAjMjI0NFxuICAgIHN1cHBvcnRQb2ludGVyOiBTb3J0YWJsZS5zdXBwb3J0UG9pbnRlciAhPT0gZmFsc2UgJiYgJ1BvaW50ZXJFdmVudCcgaW4gd2luZG93ICYmICghU2FmYXJpIHx8IElPUyksXG4gICAgZW1wdHlJbnNlcnRUaHJlc2hvbGQ6IDVcbiAgfTtcbiAgUGx1Z2luTWFuYWdlci5pbml0aWFsaXplUGx1Z2lucyh0aGlzLCBlbCwgZGVmYXVsdHMpO1xuXG4gIC8vIFNldCBkZWZhdWx0IG9wdGlvbnNcbiAgZm9yICh2YXIgbmFtZSBpbiBkZWZhdWx0cykge1xuICAgICEobmFtZSBpbiBvcHRpb25zKSAmJiAob3B0aW9uc1tuYW1lXSA9IGRlZmF1bHRzW25hbWVdKTtcbiAgfVxuICBfcHJlcGFyZUdyb3VwKG9wdGlvbnMpO1xuXG4gIC8vIEJpbmQgYWxsIHByaXZhdGUgbWV0aG9kc1xuICBmb3IgKHZhciBmbiBpbiB0aGlzKSB7XG4gICAgaWYgKGZuLmNoYXJBdCgwKSA9PT0gJ18nICYmIHR5cGVvZiB0aGlzW2ZuXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpc1tmbl0gPSB0aGlzW2ZuXS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNldHVwIGRyYWcgbW9kZVxuICB0aGlzLm5hdGl2ZURyYWdnYWJsZSA9IG9wdGlvbnMuZm9yY2VGYWxsYmFjayA/IGZhbHNlIDogc3VwcG9ydERyYWdnYWJsZTtcbiAgaWYgKHRoaXMubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgLy8gVG91Y2ggc3RhcnQgdGhyZXNob2xkIGNhbm5vdCBiZSBncmVhdGVyIHRoYW4gdGhlIG5hdGl2ZSBkcmFnc3RhcnQgdGhyZXNob2xkXG4gICAgdGhpcy5vcHRpb25zLnRvdWNoU3RhcnRUaHJlc2hvbGQgPSAxO1xuICB9XG5cbiAgLy8gQmluZCBldmVudHNcbiAgaWYgKG9wdGlvbnMuc3VwcG9ydFBvaW50ZXIpIHtcbiAgICBvbihlbCwgJ3BvaW50ZXJkb3duJywgdGhpcy5fb25UYXBTdGFydCk7XG4gIH0gZWxzZSB7XG4gICAgb24oZWwsICdtb3VzZWRvd24nLCB0aGlzLl9vblRhcFN0YXJ0KTtcbiAgICBvbihlbCwgJ3RvdWNoc3RhcnQnLCB0aGlzLl9vblRhcFN0YXJ0KTtcbiAgfVxuICBpZiAodGhpcy5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICBvbihlbCwgJ2RyYWdvdmVyJywgdGhpcyk7XG4gICAgb24oZWwsICdkcmFnZW50ZXInLCB0aGlzKTtcbiAgfVxuICBzb3J0YWJsZXMucHVzaCh0aGlzLmVsKTtcblxuICAvLyBSZXN0b3JlIHNvcnRpbmdcbiAgb3B0aW9ucy5zdG9yZSAmJiBvcHRpb25zLnN0b3JlLmdldCAmJiB0aGlzLnNvcnQob3B0aW9ucy5zdG9yZS5nZXQodGhpcykgfHwgW10pO1xuXG4gIC8vIEFkZCBhbmltYXRpb24gc3RhdGUgbWFuYWdlclxuICBfZXh0ZW5kcyh0aGlzLCBBbmltYXRpb25TdGF0ZU1hbmFnZXIoKSk7XG59XG5Tb3J0YWJsZS5wcm90b3R5cGUgPSAvKiogQGxlbmRzIFNvcnRhYmxlLnByb3RvdHlwZSAqL3tcbiAgY29uc3RydWN0b3I6IFNvcnRhYmxlLFxuICBfaXNPdXRzaWRlVGhpc0VsOiBmdW5jdGlvbiBfaXNPdXRzaWRlVGhpc0VsKHRhcmdldCkge1xuICAgIGlmICghdGhpcy5lbC5jb250YWlucyh0YXJnZXQpICYmIHRhcmdldCAhPT0gdGhpcy5lbCkge1xuICAgICAgbGFzdFRhcmdldCA9IG51bGw7XG4gICAgfVxuICB9LFxuICBfZ2V0RGlyZWN0aW9uOiBmdW5jdGlvbiBfZ2V0RGlyZWN0aW9uKGV2dCwgdGFyZ2V0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uID09PSAnZnVuY3Rpb24nID8gdGhpcy5vcHRpb25zLmRpcmVjdGlvbi5jYWxsKHRoaXMsIGV2dCwgdGFyZ2V0LCBkcmFnRWwpIDogdGhpcy5vcHRpb25zLmRpcmVjdGlvbjtcbiAgfSxcbiAgX29uVGFwU3RhcnQ6IGZ1bmN0aW9uIF9vblRhcFN0YXJ0KCAvKiogRXZlbnR8VG91Y2hFdmVudCAqL2V2dCkge1xuICAgIGlmICghZXZ0LmNhbmNlbGFibGUpIHJldHVybjtcbiAgICB2YXIgX3RoaXMgPSB0aGlzLFxuICAgICAgZWwgPSB0aGlzLmVsLFxuICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgIHByZXZlbnRPbkZpbHRlciA9IG9wdGlvbnMucHJldmVudE9uRmlsdGVyLFxuICAgICAgdHlwZSA9IGV2dC50eXBlLFxuICAgICAgdG91Y2ggPSBldnQudG91Y2hlcyAmJiBldnQudG91Y2hlc1swXSB8fCBldnQucG9pbnRlclR5cGUgJiYgZXZ0LnBvaW50ZXJUeXBlID09PSAndG91Y2gnICYmIGV2dCxcbiAgICAgIHRhcmdldCA9ICh0b3VjaCB8fCBldnQpLnRhcmdldCxcbiAgICAgIG9yaWdpbmFsVGFyZ2V0ID0gZXZ0LnRhcmdldC5zaGFkb3dSb290ICYmIChldnQucGF0aCAmJiBldnQucGF0aFswXSB8fCBldnQuY29tcG9zZWRQYXRoICYmIGV2dC5jb21wb3NlZFBhdGgoKVswXSkgfHwgdGFyZ2V0LFxuICAgICAgZmlsdGVyID0gb3B0aW9ucy5maWx0ZXI7XG4gICAgX3NhdmVJbnB1dENoZWNrZWRTdGF0ZShlbCk7XG5cbiAgICAvLyBEb24ndCB0cmlnZ2VyIHN0YXJ0IGV2ZW50IHdoZW4gYW4gZWxlbWVudCBpcyBiZWVuIGRyYWdnZWQsIG90aGVyd2lzZSB0aGUgZXZ0Lm9sZGluZGV4IGFsd2F5cyB3cm9uZyB3aGVuIHNldCBvcHRpb24uZ3JvdXAuXG4gICAgaWYgKGRyYWdFbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoL21vdXNlZG93bnxwb2ludGVyZG93bi8udGVzdCh0eXBlKSAmJiBldnQuYnV0dG9uICE9PSAwIHx8IG9wdGlvbnMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjsgLy8gb25seSBsZWZ0IGJ1dHRvbiBhbmQgZW5hYmxlZFxuICAgIH1cblxuICAgIC8vIGNhbmNlbCBkbmQgaWYgb3JpZ2luYWwgdGFyZ2V0IGlzIGNvbnRlbnQgZWRpdGFibGVcbiAgICBpZiAob3JpZ2luYWxUYXJnZXQuaXNDb250ZW50RWRpdGFibGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTYWZhcmkgaWdub3JlcyBmdXJ0aGVyIGV2ZW50IGhhbmRsaW5nIGFmdGVyIG1vdXNlZG93blxuICAgIGlmICghdGhpcy5uYXRpdmVEcmFnZ2FibGUgJiYgU2FmYXJpICYmIHRhcmdldCAmJiB0YXJnZXQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0VMRUNUJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0YXJnZXQgPSBjbG9zZXN0KHRhcmdldCwgb3B0aW9ucy5kcmFnZ2FibGUsIGVsLCBmYWxzZSk7XG4gICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuYW5pbWF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGxhc3REb3duRWwgPT09IHRhcmdldCkge1xuICAgICAgLy8gSWdub3JpbmcgZHVwbGljYXRlIGBkb3duYFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgaW5kZXggb2YgdGhlIGRyYWdnZWQgZWxlbWVudCB3aXRoaW4gaXRzIHBhcmVudFxuICAgIG9sZEluZGV4ID0gaW5kZXgodGFyZ2V0KTtcbiAgICBvbGREcmFnZ2FibGVJbmRleCA9IGluZGV4KHRhcmdldCwgb3B0aW9ucy5kcmFnZ2FibGUpO1xuXG4gICAgLy8gQ2hlY2sgZmlsdGVyXG4gICAgaWYgKHR5cGVvZiBmaWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChmaWx0ZXIuY2FsbCh0aGlzLCBldnQsIHRhcmdldCwgdGhpcykpIHtcbiAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgIHNvcnRhYmxlOiBfdGhpcyxcbiAgICAgICAgICByb290RWw6IG9yaWdpbmFsVGFyZ2V0LFxuICAgICAgICAgIG5hbWU6ICdmaWx0ZXInLFxuICAgICAgICAgIHRhcmdldEVsOiB0YXJnZXQsXG4gICAgICAgICAgdG9FbDogZWwsXG4gICAgICAgICAgZnJvbUVsOiBlbFxuICAgICAgICB9KTtcbiAgICAgICAgcGx1Z2luRXZlbnQoJ2ZpbHRlcicsIF90aGlzLCB7XG4gICAgICAgICAgZXZ0OiBldnRcbiAgICAgICAgfSk7XG4gICAgICAgIHByZXZlbnRPbkZpbHRlciAmJiBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuOyAvLyBjYW5jZWwgZG5kXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChmaWx0ZXIpIHtcbiAgICAgIGZpbHRlciA9IGZpbHRlci5zcGxpdCgnLCcpLnNvbWUoZnVuY3Rpb24gKGNyaXRlcmlhKSB7XG4gICAgICAgIGNyaXRlcmlhID0gY2xvc2VzdChvcmlnaW5hbFRhcmdldCwgY3JpdGVyaWEudHJpbSgpLCBlbCwgZmFsc2UpO1xuICAgICAgICBpZiAoY3JpdGVyaWEpIHtcbiAgICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICBzb3J0YWJsZTogX3RoaXMsXG4gICAgICAgICAgICByb290RWw6IGNyaXRlcmlhLFxuICAgICAgICAgICAgbmFtZTogJ2ZpbHRlcicsXG4gICAgICAgICAgICB0YXJnZXRFbDogdGFyZ2V0LFxuICAgICAgICAgICAgZnJvbUVsOiBlbCxcbiAgICAgICAgICAgIHRvRWw6IGVsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcGx1Z2luRXZlbnQoJ2ZpbHRlcicsIF90aGlzLCB7XG4gICAgICAgICAgICBldnQ6IGV2dFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgcHJldmVudE9uRmlsdGVyICYmIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47IC8vIGNhbmNlbCBkbmRcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuaGFuZGxlICYmICFjbG9zZXN0KG9yaWdpbmFsVGFyZ2V0LCBvcHRpb25zLmhhbmRsZSwgZWwsIGZhbHNlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFByZXBhcmUgYGRyYWdzdGFydGBcbiAgICB0aGlzLl9wcmVwYXJlRHJhZ1N0YXJ0KGV2dCwgdG91Y2gsIHRhcmdldCk7XG4gIH0sXG4gIF9wcmVwYXJlRHJhZ1N0YXJ0OiBmdW5jdGlvbiBfcHJlcGFyZURyYWdTdGFydCggLyoqIEV2ZW50ICovZXZ0LCAvKiogVG91Y2ggKi90b3VjaCwgLyoqIEhUTUxFbGVtZW50ICovdGFyZ2V0KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcyxcbiAgICAgIGVsID0gX3RoaXMuZWwsXG4gICAgICBvcHRpb25zID0gX3RoaXMub3B0aW9ucyxcbiAgICAgIG93bmVyRG9jdW1lbnQgPSBlbC5vd25lckRvY3VtZW50LFxuICAgICAgZHJhZ1N0YXJ0Rm47XG4gICAgaWYgKHRhcmdldCAmJiAhZHJhZ0VsICYmIHRhcmdldC5wYXJlbnROb2RlID09PSBlbCkge1xuICAgICAgdmFyIGRyYWdSZWN0ID0gZ2V0UmVjdCh0YXJnZXQpO1xuICAgICAgcm9vdEVsID0gZWw7XG4gICAgICBkcmFnRWwgPSB0YXJnZXQ7XG4gICAgICBwYXJlbnRFbCA9IGRyYWdFbC5wYXJlbnROb2RlO1xuICAgICAgbmV4dEVsID0gZHJhZ0VsLm5leHRTaWJsaW5nO1xuICAgICAgbGFzdERvd25FbCA9IHRhcmdldDtcbiAgICAgIGFjdGl2ZUdyb3VwID0gb3B0aW9ucy5ncm91cDtcbiAgICAgIFNvcnRhYmxlLmRyYWdnZWQgPSBkcmFnRWw7XG4gICAgICB0YXBFdnQgPSB7XG4gICAgICAgIHRhcmdldDogZHJhZ0VsLFxuICAgICAgICBjbGllbnRYOiAodG91Y2ggfHwgZXZ0KS5jbGllbnRYLFxuICAgICAgICBjbGllbnRZOiAodG91Y2ggfHwgZXZ0KS5jbGllbnRZXG4gICAgICB9O1xuICAgICAgdGFwRGlzdGFuY2VMZWZ0ID0gdGFwRXZ0LmNsaWVudFggLSBkcmFnUmVjdC5sZWZ0O1xuICAgICAgdGFwRGlzdGFuY2VUb3AgPSB0YXBFdnQuY2xpZW50WSAtIGRyYWdSZWN0LnRvcDtcbiAgICAgIHRoaXMuX2xhc3RYID0gKHRvdWNoIHx8IGV2dCkuY2xpZW50WDtcbiAgICAgIHRoaXMuX2xhc3RZID0gKHRvdWNoIHx8IGV2dCkuY2xpZW50WTtcbiAgICAgIGRyYWdFbC5zdHlsZVsnd2lsbC1jaGFuZ2UnXSA9ICdhbGwnO1xuICAgICAgZHJhZ1N0YXJ0Rm4gPSBmdW5jdGlvbiBkcmFnU3RhcnRGbigpIHtcbiAgICAgICAgcGx1Z2luRXZlbnQoJ2RlbGF5RW5kZWQnLCBfdGhpcywge1xuICAgICAgICAgIGV2dDogZXZ0XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoU29ydGFibGUuZXZlbnRDYW5jZWxlZCkge1xuICAgICAgICAgIF90aGlzLl9vbkRyb3AoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRGVsYXllZCBkcmFnIGhhcyBiZWVuIHRyaWdnZXJlZFxuICAgICAgICAvLyB3ZSBjYW4gcmUtZW5hYmxlIHRoZSBldmVudHM6IHRvdWNobW92ZS9tb3VzZW1vdmVcbiAgICAgICAgX3RoaXMuX2Rpc2FibGVEZWxheWVkRHJhZ0V2ZW50cygpO1xuICAgICAgICBpZiAoIUZpcmVGb3ggJiYgX3RoaXMubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgICAgICAgZHJhZ0VsLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCaW5kIHRoZSBldmVudHM6IGRyYWdzdGFydC9kcmFnZW5kXG4gICAgICAgIF90aGlzLl90cmlnZ2VyRHJhZ1N0YXJ0KGV2dCwgdG91Y2gpO1xuXG4gICAgICAgIC8vIERyYWcgc3RhcnQgZXZlbnRcbiAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgIHNvcnRhYmxlOiBfdGhpcyxcbiAgICAgICAgICBuYW1lOiAnY2hvb3NlJyxcbiAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ2hvc2VuIGl0ZW1cbiAgICAgICAgdG9nZ2xlQ2xhc3MoZHJhZ0VsLCBvcHRpb25zLmNob3NlbkNsYXNzLCB0cnVlKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIERpc2FibGUgXCJkcmFnZ2FibGVcIlxuICAgICAgb3B0aW9ucy5pZ25vcmUuc3BsaXQoJywnKS5mb3JFYWNoKGZ1bmN0aW9uIChjcml0ZXJpYSkge1xuICAgICAgICBmaW5kKGRyYWdFbCwgY3JpdGVyaWEudHJpbSgpLCBfZGlzYWJsZURyYWdnYWJsZSk7XG4gICAgICB9KTtcbiAgICAgIG9uKG93bmVyRG9jdW1lbnQsICdkcmFnb3ZlcicsIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50KTtcbiAgICAgIG9uKG93bmVyRG9jdW1lbnQsICdtb3VzZW1vdmUnLCBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudCk7XG4gICAgICBvbihvd25lckRvY3VtZW50LCAndG91Y2htb3ZlJywgbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQpO1xuICAgICAgaWYgKG9wdGlvbnMuc3VwcG9ydFBvaW50ZXIpIHtcbiAgICAgICAgb24ob3duZXJEb2N1bWVudCwgJ3BvaW50ZXJ1cCcsIF90aGlzLl9vbkRyb3ApO1xuICAgICAgICAvLyBOYXRpdmUgRCZEIHRyaWdnZXJzIHBvaW50ZXJjYW5jZWxcbiAgICAgICAgIXRoaXMubmF0aXZlRHJhZ2dhYmxlICYmIG9uKG93bmVyRG9jdW1lbnQsICdwb2ludGVyY2FuY2VsJywgX3RoaXMuX29uRHJvcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbihvd25lckRvY3VtZW50LCAnbW91c2V1cCcsIF90aGlzLl9vbkRyb3ApO1xuICAgICAgICBvbihvd25lckRvY3VtZW50LCAndG91Y2hlbmQnLCBfdGhpcy5fb25Ecm9wKTtcbiAgICAgICAgb24ob3duZXJEb2N1bWVudCwgJ3RvdWNoY2FuY2VsJywgX3RoaXMuX29uRHJvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIE1ha2UgZHJhZ0VsIGRyYWdnYWJsZSAobXVzdCBiZSBiZWZvcmUgZGVsYXkgZm9yIEZpcmVGb3gpXG4gICAgICBpZiAoRmlyZUZveCAmJiB0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMudG91Y2hTdGFydFRocmVzaG9sZCA9IDQ7XG4gICAgICAgIGRyYWdFbC5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcGx1Z2luRXZlbnQoJ2RlbGF5U3RhcnQnLCB0aGlzLCB7XG4gICAgICAgIGV2dDogZXZ0XG4gICAgICB9KTtcblxuICAgICAgLy8gRGVsYXkgaXMgaW1wb3NzaWJsZSBmb3IgbmF0aXZlIERuRCBpbiBFZGdlIG9yIElFXG4gICAgICBpZiAob3B0aW9ucy5kZWxheSAmJiAoIW9wdGlvbnMuZGVsYXlPblRvdWNoT25seSB8fCB0b3VjaCkgJiYgKCF0aGlzLm5hdGl2ZURyYWdnYWJsZSB8fCAhKEVkZ2UgfHwgSUUxMU9yTGVzcykpKSB7XG4gICAgICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSB7XG4gICAgICAgICAgdGhpcy5fb25Ecm9wKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1c2VyIG1vdmVzIHRoZSBwb2ludGVyIG9yIGxldCBnbyB0aGUgY2xpY2sgb3IgdG91Y2hcbiAgICAgICAgLy8gYmVmb3JlIHRoZSBkZWxheSBoYXMgYmVlbiByZWFjaGVkOlxuICAgICAgICAvLyBkaXNhYmxlIHRoZSBkZWxheWVkIGRyYWdcbiAgICAgICAgaWYgKG9wdGlvbnMuc3VwcG9ydFBvaW50ZXIpIHtcbiAgICAgICAgICBvbihvd25lckRvY3VtZW50LCAncG9pbnRlcnVwJywgX3RoaXMuX2Rpc2FibGVEZWxheWVkRHJhZyk7XG4gICAgICAgICAgb24ob3duZXJEb2N1bWVudCwgJ3BvaW50ZXJjYW5jZWwnLCBfdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvbihvd25lckRvY3VtZW50LCAnbW91c2V1cCcsIF90aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xuICAgICAgICAgIG9uKG93bmVyRG9jdW1lbnQsICd0b3VjaGVuZCcsIF90aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xuICAgICAgICAgIG9uKG93bmVyRG9jdW1lbnQsICd0b3VjaGNhbmNlbCcsIF90aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xuICAgICAgICB9XG4gICAgICAgIG9uKG93bmVyRG9jdW1lbnQsICdtb3VzZW1vdmUnLCBfdGhpcy5fZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKTtcbiAgICAgICAgb24ob3duZXJEb2N1bWVudCwgJ3RvdWNobW92ZScsIF90aGlzLl9kZWxheWVkRHJhZ1RvdWNoTW92ZUhhbmRsZXIpO1xuICAgICAgICBvcHRpb25zLnN1cHBvcnRQb2ludGVyICYmIG9uKG93bmVyRG9jdW1lbnQsICdwb2ludGVybW92ZScsIF90aGlzLl9kZWxheWVkRHJhZ1RvdWNoTW92ZUhhbmRsZXIpO1xuICAgICAgICBfdGhpcy5fZHJhZ1N0YXJ0VGltZXIgPSBzZXRUaW1lb3V0KGRyYWdTdGFydEZuLCBvcHRpb25zLmRlbGF5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdTdGFydEZuKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBfZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyOiBmdW5jdGlvbiBfZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKCAvKiogVG91Y2hFdmVudHxQb2ludGVyRXZlbnQgKiovZSkge1xuICAgIHZhciB0b3VjaCA9IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXSA6IGU7XG4gICAgaWYgKE1hdGgubWF4KE1hdGguYWJzKHRvdWNoLmNsaWVudFggLSB0aGlzLl9sYXN0WCksIE1hdGguYWJzKHRvdWNoLmNsaWVudFkgLSB0aGlzLl9sYXN0WSkpID49IE1hdGguZmxvb3IodGhpcy5vcHRpb25zLnRvdWNoU3RhcnRUaHJlc2hvbGQgLyAodGhpcy5uYXRpdmVEcmFnZ2FibGUgJiYgd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSkpKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlRGVsYXllZERyYWcoKTtcbiAgICB9XG4gIH0sXG4gIF9kaXNhYmxlRGVsYXllZERyYWc6IGZ1bmN0aW9uIF9kaXNhYmxlRGVsYXllZERyYWcoKSB7XG4gICAgZHJhZ0VsICYmIF9kaXNhYmxlRHJhZ2dhYmxlKGRyYWdFbCk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX2RyYWdTdGFydFRpbWVyKTtcbiAgICB0aGlzLl9kaXNhYmxlRGVsYXllZERyYWdFdmVudHMoKTtcbiAgfSxcbiAgX2Rpc2FibGVEZWxheWVkRHJhZ0V2ZW50czogZnVuY3Rpb24gX2Rpc2FibGVEZWxheWVkRHJhZ0V2ZW50cygpIHtcbiAgICB2YXIgb3duZXJEb2N1bWVudCA9IHRoaXMuZWwub3duZXJEb2N1bWVudDtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ21vdXNldXAnLCB0aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAndG91Y2hlbmQnLCB0aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAndG91Y2hjYW5jZWwnLCB0aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAncG9pbnRlcnVwJywgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ3BvaW50ZXJjYW5jZWwnLCB0aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAnbW91c2Vtb3ZlJywgdGhpcy5fZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ3RvdWNobW92ZScsIHRoaXMuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcik7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICdwb2ludGVybW92ZScsIHRoaXMuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcik7XG4gIH0sXG4gIF90cmlnZ2VyRHJhZ1N0YXJ0OiBmdW5jdGlvbiBfdHJpZ2dlckRyYWdTdGFydCggLyoqIEV2ZW50ICovZXZ0LCAvKiogVG91Y2ggKi90b3VjaCkge1xuICAgIHRvdWNoID0gdG91Y2ggfHwgZXZ0LnBvaW50ZXJUeXBlID09ICd0b3VjaCcgJiYgZXZ0O1xuICAgIGlmICghdGhpcy5uYXRpdmVEcmFnZ2FibGUgfHwgdG91Y2gpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3VwcG9ydFBvaW50ZXIpIHtcbiAgICAgICAgb24oZG9jdW1lbnQsICdwb2ludGVybW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlKTtcbiAgICAgIH0gZWxzZSBpZiAodG91Y2gpIHtcbiAgICAgICAgb24oZG9jdW1lbnQsICd0b3VjaG1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbihkb2N1bWVudCwgJ21vdXNlbW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgb24oZHJhZ0VsLCAnZHJhZ2VuZCcsIHRoaXMpO1xuICAgICAgb24ocm9vdEVsLCAnZHJhZ3N0YXJ0JywgdGhpcy5fb25EcmFnU3RhcnQpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgaWYgKGRvY3VtZW50LnNlbGVjdGlvbikge1xuICAgICAgICBfbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGRvY3VtZW50LnNlbGVjdGlvbi5lbXB0eSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHt9XG4gIH0sXG4gIF9kcmFnU3RhcnRlZDogZnVuY3Rpb24gX2RyYWdTdGFydGVkKGZhbGxiYWNrLCBldnQpIHtcbiAgICBhd2FpdGluZ0RyYWdTdGFydGVkID0gZmFsc2U7XG4gICAgaWYgKHJvb3RFbCAmJiBkcmFnRWwpIHtcbiAgICAgIHBsdWdpbkV2ZW50KCdkcmFnU3RhcnRlZCcsIHRoaXMsIHtcbiAgICAgICAgZXZ0OiBldnRcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgICAgIG9uKGRvY3VtZW50LCAnZHJhZ292ZXInLCBfY2hlY2tPdXRzaWRlVGFyZ2V0RWwpO1xuICAgICAgfVxuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgIC8vIEFwcGx5IGVmZmVjdFxuICAgICAgIWZhbGxiYWNrICYmIHRvZ2dsZUNsYXNzKGRyYWdFbCwgb3B0aW9ucy5kcmFnQ2xhc3MsIGZhbHNlKTtcbiAgICAgIHRvZ2dsZUNsYXNzKGRyYWdFbCwgb3B0aW9ucy5naG9zdENsYXNzLCB0cnVlKTtcbiAgICAgIFNvcnRhYmxlLmFjdGl2ZSA9IHRoaXM7XG4gICAgICBmYWxsYmFjayAmJiB0aGlzLl9hcHBlbmRHaG9zdCgpO1xuXG4gICAgICAvLyBEcmFnIHN0YXJ0IGV2ZW50XG4gICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgIHNvcnRhYmxlOiB0aGlzLFxuICAgICAgICBuYW1lOiAnc3RhcnQnLFxuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9udWxsaW5nKCk7XG4gICAgfVxuICB9LFxuICBfZW11bGF0ZURyYWdPdmVyOiBmdW5jdGlvbiBfZW11bGF0ZURyYWdPdmVyKCkge1xuICAgIGlmICh0b3VjaEV2dCkge1xuICAgICAgdGhpcy5fbGFzdFggPSB0b3VjaEV2dC5jbGllbnRYO1xuICAgICAgdGhpcy5fbGFzdFkgPSB0b3VjaEV2dC5jbGllbnRZO1xuICAgICAgX2hpZGVHaG9zdEZvclRhcmdldCgpO1xuICAgICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQodG91Y2hFdnQuY2xpZW50WCwgdG91Y2hFdnQuY2xpZW50WSk7XG4gICAgICB2YXIgcGFyZW50ID0gdGFyZ2V0O1xuICAgICAgd2hpbGUgKHRhcmdldCAmJiB0YXJnZXQuc2hhZG93Um9vdCkge1xuICAgICAgICB0YXJnZXQgPSB0YXJnZXQuc2hhZG93Um9vdC5lbGVtZW50RnJvbVBvaW50KHRvdWNoRXZ0LmNsaWVudFgsIHRvdWNoRXZ0LmNsaWVudFkpO1xuICAgICAgICBpZiAodGFyZ2V0ID09PSBwYXJlbnQpIGJyZWFrO1xuICAgICAgICBwYXJlbnQgPSB0YXJnZXQ7XG4gICAgICB9XG4gICAgICBkcmFnRWwucGFyZW50Tm9kZVtleHBhbmRvXS5faXNPdXRzaWRlVGhpc0VsKHRhcmdldCk7XG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICBpZiAocGFyZW50W2V4cGFuZG9dKSB7XG4gICAgICAgICAgICB2YXIgaW5zZXJ0ZWQgPSB2b2lkIDA7XG4gICAgICAgICAgICBpbnNlcnRlZCA9IHBhcmVudFtleHBhbmRvXS5fb25EcmFnT3Zlcih7XG4gICAgICAgICAgICAgIGNsaWVudFg6IHRvdWNoRXZ0LmNsaWVudFgsXG4gICAgICAgICAgICAgIGNsaWVudFk6IHRvdWNoRXZ0LmNsaWVudFksXG4gICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgICAgICByb290RWw6IHBhcmVudFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoaW5zZXJ0ZWQgJiYgIXRoaXMub3B0aW9ucy5kcmFnb3ZlckJ1YmJsZSkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGFyZ2V0ID0gcGFyZW50OyAvLyBzdG9yZSBsYXN0IGVsZW1lbnRcbiAgICAgICAgfVxuICAgICAgICAvKiBqc2hpbnQgYm9zczp0cnVlICovIHdoaWxlIChwYXJlbnQgPSBnZXRQYXJlbnRPckhvc3QocGFyZW50KSk7XG4gICAgICB9XG4gICAgICBfdW5oaWRlR2hvc3RGb3JUYXJnZXQoKTtcbiAgICB9XG4gIH0sXG4gIF9vblRvdWNoTW92ZTogZnVuY3Rpb24gX29uVG91Y2hNb3ZlKCAvKipUb3VjaEV2ZW50Ki9ldnQpIHtcbiAgICBpZiAodGFwRXZ0KSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgZmFsbGJhY2tUb2xlcmFuY2UgPSBvcHRpb25zLmZhbGxiYWNrVG9sZXJhbmNlLFxuICAgICAgICBmYWxsYmFja09mZnNldCA9IG9wdGlvbnMuZmFsbGJhY2tPZmZzZXQsXG4gICAgICAgIHRvdWNoID0gZXZ0LnRvdWNoZXMgPyBldnQudG91Y2hlc1swXSA6IGV2dCxcbiAgICAgICAgZ2hvc3RNYXRyaXggPSBnaG9zdEVsICYmIG1hdHJpeChnaG9zdEVsLCB0cnVlKSxcbiAgICAgICAgc2NhbGVYID0gZ2hvc3RFbCAmJiBnaG9zdE1hdHJpeCAmJiBnaG9zdE1hdHJpeC5hLFxuICAgICAgICBzY2FsZVkgPSBnaG9zdEVsICYmIGdob3N0TWF0cml4ICYmIGdob3N0TWF0cml4LmQsXG4gICAgICAgIHJlbGF0aXZlU2Nyb2xsT2Zmc2V0ID0gUG9zaXRpb25HaG9zdEFic29sdXRlbHkgJiYgZ2hvc3RSZWxhdGl2ZVBhcmVudCAmJiBnZXRSZWxhdGl2ZVNjcm9sbE9mZnNldChnaG9zdFJlbGF0aXZlUGFyZW50KSxcbiAgICAgICAgZHggPSAodG91Y2guY2xpZW50WCAtIHRhcEV2dC5jbGllbnRYICsgZmFsbGJhY2tPZmZzZXQueCkgLyAoc2NhbGVYIHx8IDEpICsgKHJlbGF0aXZlU2Nyb2xsT2Zmc2V0ID8gcmVsYXRpdmVTY3JvbGxPZmZzZXRbMF0gLSBnaG9zdFJlbGF0aXZlUGFyZW50SW5pdGlhbFNjcm9sbFswXSA6IDApIC8gKHNjYWxlWCB8fCAxKSxcbiAgICAgICAgZHkgPSAodG91Y2guY2xpZW50WSAtIHRhcEV2dC5jbGllbnRZICsgZmFsbGJhY2tPZmZzZXQueSkgLyAoc2NhbGVZIHx8IDEpICsgKHJlbGF0aXZlU2Nyb2xsT2Zmc2V0ID8gcmVsYXRpdmVTY3JvbGxPZmZzZXRbMV0gLSBnaG9zdFJlbGF0aXZlUGFyZW50SW5pdGlhbFNjcm9sbFsxXSA6IDApIC8gKHNjYWxlWSB8fCAxKTtcblxuICAgICAgLy8gb25seSBzZXQgdGhlIHN0YXR1cyB0byBkcmFnZ2luZywgd2hlbiB3ZSBhcmUgYWN0dWFsbHkgZHJhZ2dpbmdcbiAgICAgIGlmICghU29ydGFibGUuYWN0aXZlICYmICFhd2FpdGluZ0RyYWdTdGFydGVkKSB7XG4gICAgICAgIGlmIChmYWxsYmFja1RvbGVyYW5jZSAmJiBNYXRoLm1heChNYXRoLmFicyh0b3VjaC5jbGllbnRYIC0gdGhpcy5fbGFzdFgpLCBNYXRoLmFicyh0b3VjaC5jbGllbnRZIC0gdGhpcy5fbGFzdFkpKSA8IGZhbGxiYWNrVG9sZXJhbmNlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29uRHJhZ1N0YXJ0KGV2dCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoZ2hvc3RFbCkge1xuICAgICAgICBpZiAoZ2hvc3RNYXRyaXgpIHtcbiAgICAgICAgICBnaG9zdE1hdHJpeC5lICs9IGR4IC0gKGxhc3REeCB8fCAwKTtcbiAgICAgICAgICBnaG9zdE1hdHJpeC5mICs9IGR5IC0gKGxhc3REeSB8fCAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnaG9zdE1hdHJpeCA9IHtcbiAgICAgICAgICAgIGE6IDEsXG4gICAgICAgICAgICBiOiAwLFxuICAgICAgICAgICAgYzogMCxcbiAgICAgICAgICAgIGQ6IDEsXG4gICAgICAgICAgICBlOiBkeCxcbiAgICAgICAgICAgIGY6IGR5XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY3NzTWF0cml4ID0gXCJtYXRyaXgoXCIuY29uY2F0KGdob3N0TWF0cml4LmEsIFwiLFwiKS5jb25jYXQoZ2hvc3RNYXRyaXguYiwgXCIsXCIpLmNvbmNhdChnaG9zdE1hdHJpeC5jLCBcIixcIikuY29uY2F0KGdob3N0TWF0cml4LmQsIFwiLFwiKS5jb25jYXQoZ2hvc3RNYXRyaXguZSwgXCIsXCIpLmNvbmNhdChnaG9zdE1hdHJpeC5mLCBcIilcIik7XG4gICAgICAgIGNzcyhnaG9zdEVsLCAnd2Via2l0VHJhbnNmb3JtJywgY3NzTWF0cml4KTtcbiAgICAgICAgY3NzKGdob3N0RWwsICdtb3pUcmFuc2Zvcm0nLCBjc3NNYXRyaXgpO1xuICAgICAgICBjc3MoZ2hvc3RFbCwgJ21zVHJhbnNmb3JtJywgY3NzTWF0cml4KTtcbiAgICAgICAgY3NzKGdob3N0RWwsICd0cmFuc2Zvcm0nLCBjc3NNYXRyaXgpO1xuICAgICAgICBsYXN0RHggPSBkeDtcbiAgICAgICAgbGFzdER5ID0gZHk7XG4gICAgICAgIHRvdWNoRXZ0ID0gdG91Y2g7XG4gICAgICB9XG4gICAgICBldnQuY2FuY2VsYWJsZSAmJiBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0sXG4gIF9hcHBlbmRHaG9zdDogZnVuY3Rpb24gX2FwcGVuZEdob3N0KCkge1xuICAgIC8vIEJ1ZyBpZiB1c2luZyBzY2FsZSgpOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNjM3MDU4XG4gICAgLy8gTm90IGJlaW5nIGFkanVzdGVkIGZvclxuICAgIGlmICghZ2hvc3RFbCkge1xuICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMub3B0aW9ucy5mYWxsYmFja09uQm9keSA/IGRvY3VtZW50LmJvZHkgOiByb290RWwsXG4gICAgICAgIHJlY3QgPSBnZXRSZWN0KGRyYWdFbCwgdHJ1ZSwgUG9zaXRpb25HaG9zdEFic29sdXRlbHksIHRydWUsIGNvbnRhaW5lciksXG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgIC8vIFBvc2l0aW9uIGFic29sdXRlbHlcbiAgICAgIGlmIChQb3NpdGlvbkdob3N0QWJzb2x1dGVseSkge1xuICAgICAgICAvLyBHZXQgcmVsYXRpdmVseSBwb3NpdGlvbmVkIHBhcmVudFxuICAgICAgICBnaG9zdFJlbGF0aXZlUGFyZW50ID0gY29udGFpbmVyO1xuICAgICAgICB3aGlsZSAoY3NzKGdob3N0UmVsYXRpdmVQYXJlbnQsICdwb3NpdGlvbicpID09PSAnc3RhdGljJyAmJiBjc3MoZ2hvc3RSZWxhdGl2ZVBhcmVudCwgJ3RyYW5zZm9ybScpID09PSAnbm9uZScgJiYgZ2hvc3RSZWxhdGl2ZVBhcmVudCAhPT0gZG9jdW1lbnQpIHtcbiAgICAgICAgICBnaG9zdFJlbGF0aXZlUGFyZW50ID0gZ2hvc3RSZWxhdGl2ZVBhcmVudC5wYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnaG9zdFJlbGF0aXZlUGFyZW50ICE9PSBkb2N1bWVudC5ib2R5ICYmIGdob3N0UmVsYXRpdmVQYXJlbnQgIT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAgIGlmIChnaG9zdFJlbGF0aXZlUGFyZW50ID09PSBkb2N1bWVudCkgZ2hvc3RSZWxhdGl2ZVBhcmVudCA9IGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKTtcbiAgICAgICAgICByZWN0LnRvcCArPSBnaG9zdFJlbGF0aXZlUGFyZW50LnNjcm9sbFRvcDtcbiAgICAgICAgICByZWN0LmxlZnQgKz0gZ2hvc3RSZWxhdGl2ZVBhcmVudC5zY3JvbGxMZWZ0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdob3N0UmVsYXRpdmVQYXJlbnQgPSBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgZ2hvc3RSZWxhdGl2ZVBhcmVudEluaXRpYWxTY3JvbGwgPSBnZXRSZWxhdGl2ZVNjcm9sbE9mZnNldChnaG9zdFJlbGF0aXZlUGFyZW50KTtcbiAgICAgIH1cbiAgICAgIGdob3N0RWwgPSBkcmFnRWwuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgdG9nZ2xlQ2xhc3MoZ2hvc3RFbCwgb3B0aW9ucy5naG9zdENsYXNzLCBmYWxzZSk7XG4gICAgICB0b2dnbGVDbGFzcyhnaG9zdEVsLCBvcHRpb25zLmZhbGxiYWNrQ2xhc3MsIHRydWUpO1xuICAgICAgdG9nZ2xlQ2xhc3MoZ2hvc3RFbCwgb3B0aW9ucy5kcmFnQ2xhc3MsIHRydWUpO1xuICAgICAgY3NzKGdob3N0RWwsICd0cmFuc2l0aW9uJywgJycpO1xuICAgICAgY3NzKGdob3N0RWwsICd0cmFuc2Zvcm0nLCAnJyk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ2JveC1zaXppbmcnLCAnYm9yZGVyLWJveCcpO1xuICAgICAgY3NzKGdob3N0RWwsICdtYXJnaW4nLCAwKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAndG9wJywgcmVjdC50b3ApO1xuICAgICAgY3NzKGdob3N0RWwsICdsZWZ0JywgcmVjdC5sZWZ0KTtcbiAgICAgIGNzcyhnaG9zdEVsLCAnd2lkdGgnLCByZWN0LndpZHRoKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAnaGVpZ2h0JywgcmVjdC5oZWlnaHQpO1xuICAgICAgY3NzKGdob3N0RWwsICdvcGFjaXR5JywgJzAuOCcpO1xuICAgICAgY3NzKGdob3N0RWwsICdwb3NpdGlvbicsIFBvc2l0aW9uR2hvc3RBYnNvbHV0ZWx5ID8gJ2Fic29sdXRlJyA6ICdmaXhlZCcpO1xuICAgICAgY3NzKGdob3N0RWwsICd6SW5kZXgnLCAnMTAwMDAwJyk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ3BvaW50ZXJFdmVudHMnLCAnbm9uZScpO1xuICAgICAgU29ydGFibGUuZ2hvc3QgPSBnaG9zdEVsO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdob3N0RWwpO1xuXG4gICAgICAvLyBTZXQgdHJhbnNmb3JtLW9yaWdpblxuICAgICAgY3NzKGdob3N0RWwsICd0cmFuc2Zvcm0tb3JpZ2luJywgdGFwRGlzdGFuY2VMZWZ0IC8gcGFyc2VJbnQoZ2hvc3RFbC5zdHlsZS53aWR0aCkgKiAxMDAgKyAnJSAnICsgdGFwRGlzdGFuY2VUb3AgLyBwYXJzZUludChnaG9zdEVsLnN0eWxlLmhlaWdodCkgKiAxMDAgKyAnJScpO1xuICAgIH1cbiAgfSxcbiAgX29uRHJhZ1N0YXJ0OiBmdW5jdGlvbiBfb25EcmFnU3RhcnQoIC8qKkV2ZW50Ki9ldnQsIC8qKmJvb2xlYW4qL2ZhbGxiYWNrKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgZGF0YVRyYW5zZmVyID0gZXZ0LmRhdGFUcmFuc2ZlcjtcbiAgICB2YXIgb3B0aW9ucyA9IF90aGlzLm9wdGlvbnM7XG4gICAgcGx1Z2luRXZlbnQoJ2RyYWdTdGFydCcsIHRoaXMsIHtcbiAgICAgIGV2dDogZXZ0XG4gICAgfSk7XG4gICAgaWYgKFNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHtcbiAgICAgIHRoaXMuX29uRHJvcCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwbHVnaW5FdmVudCgnc2V0dXBDbG9uZScsIHRoaXMpO1xuICAgIGlmICghU29ydGFibGUuZXZlbnRDYW5jZWxlZCkge1xuICAgICAgY2xvbmVFbCA9IGNsb25lKGRyYWdFbCk7XG4gICAgICBjbG9uZUVsLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpO1xuICAgICAgY2xvbmVFbC5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgIGNsb25lRWwuc3R5bGVbJ3dpbGwtY2hhbmdlJ10gPSAnJztcbiAgICAgIHRoaXMuX2hpZGVDbG9uZSgpO1xuICAgICAgdG9nZ2xlQ2xhc3MoY2xvbmVFbCwgdGhpcy5vcHRpb25zLmNob3NlbkNsYXNzLCBmYWxzZSk7XG4gICAgICBTb3J0YWJsZS5jbG9uZSA9IGNsb25lRWw7XG4gICAgfVxuXG4gICAgLy8gIzExNDM6IElGcmFtZSBzdXBwb3J0IHdvcmthcm91bmRcbiAgICBfdGhpcy5jbG9uZUlkID0gX25leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHBsdWdpbkV2ZW50KCdjbG9uZScsIF90aGlzKTtcbiAgICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSByZXR1cm47XG4gICAgICBpZiAoIV90aGlzLm9wdGlvbnMucmVtb3ZlQ2xvbmVPbkhpZGUpIHtcbiAgICAgICAgcm9vdEVsLmluc2VydEJlZm9yZShjbG9uZUVsLCBkcmFnRWwpO1xuICAgICAgfVxuICAgICAgX3RoaXMuX2hpZGVDbG9uZSgpO1xuICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICBzb3J0YWJsZTogX3RoaXMsXG4gICAgICAgIG5hbWU6ICdjbG9uZSdcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgICFmYWxsYmFjayAmJiB0b2dnbGVDbGFzcyhkcmFnRWwsIG9wdGlvbnMuZHJhZ0NsYXNzLCB0cnVlKTtcblxuICAgIC8vIFNldCBwcm9wZXIgZHJvcCBldmVudHNcbiAgICBpZiAoZmFsbGJhY2spIHtcbiAgICAgIGlnbm9yZU5leHRDbGljayA9IHRydWU7XG4gICAgICBfdGhpcy5fbG9vcElkID0gc2V0SW50ZXJ2YWwoX3RoaXMuX2VtdWxhdGVEcmFnT3ZlciwgNTApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVbmRvIHdoYXQgd2FzIHNldCBpbiBfcHJlcGFyZURyYWdTdGFydCBiZWZvcmUgZHJhZyBzdGFydGVkXG4gICAgICBvZmYoZG9jdW1lbnQsICdtb3VzZXVwJywgX3RoaXMuX29uRHJvcCk7XG4gICAgICBvZmYoZG9jdW1lbnQsICd0b3VjaGVuZCcsIF90aGlzLl9vbkRyb3ApO1xuICAgICAgb2ZmKGRvY3VtZW50LCAndG91Y2hjYW5jZWwnLCBfdGhpcy5fb25Ecm9wKTtcbiAgICAgIGlmIChkYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSc7XG4gICAgICAgIG9wdGlvbnMuc2V0RGF0YSAmJiBvcHRpb25zLnNldERhdGEuY2FsbChfdGhpcywgZGF0YVRyYW5zZmVyLCBkcmFnRWwpO1xuICAgICAgfVxuICAgICAgb24oZG9jdW1lbnQsICdkcm9wJywgX3RoaXMpO1xuXG4gICAgICAvLyAjMTI3NiBmaXg6XG4gICAgICBjc3MoZHJhZ0VsLCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVooMCknKTtcbiAgICB9XG4gICAgYXdhaXRpbmdEcmFnU3RhcnRlZCA9IHRydWU7XG4gICAgX3RoaXMuX2RyYWdTdGFydElkID0gX25leHRUaWNrKF90aGlzLl9kcmFnU3RhcnRlZC5iaW5kKF90aGlzLCBmYWxsYmFjaywgZXZ0KSk7XG4gICAgb24oZG9jdW1lbnQsICdzZWxlY3RzdGFydCcsIF90aGlzKTtcbiAgICBtb3ZlZCA9IHRydWU7XG4gICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgIGlmIChTYWZhcmkpIHtcbiAgICAgIGNzcyhkb2N1bWVudC5ib2R5LCAndXNlci1zZWxlY3QnLCAnbm9uZScpO1xuICAgIH1cbiAgfSxcbiAgLy8gUmV0dXJucyB0cnVlIC0gaWYgbm8gZnVydGhlciBhY3Rpb24gaXMgbmVlZGVkIChlaXRoZXIgaW5zZXJ0ZWQgb3IgYW5vdGhlciBjb25kaXRpb24pXG4gIF9vbkRyYWdPdmVyOiBmdW5jdGlvbiBfb25EcmFnT3ZlciggLyoqRXZlbnQqL2V2dCkge1xuICAgIHZhciBlbCA9IHRoaXMuZWwsXG4gICAgICB0YXJnZXQgPSBldnQudGFyZ2V0LFxuICAgICAgZHJhZ1JlY3QsXG4gICAgICB0YXJnZXRSZWN0LFxuICAgICAgcmV2ZXJ0LFxuICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgIGdyb3VwID0gb3B0aW9ucy5ncm91cCxcbiAgICAgIGFjdGl2ZVNvcnRhYmxlID0gU29ydGFibGUuYWN0aXZlLFxuICAgICAgaXNPd25lciA9IGFjdGl2ZUdyb3VwID09PSBncm91cCxcbiAgICAgIGNhblNvcnQgPSBvcHRpb25zLnNvcnQsXG4gICAgICBmcm9tU29ydGFibGUgPSBwdXRTb3J0YWJsZSB8fCBhY3RpdmVTb3J0YWJsZSxcbiAgICAgIHZlcnRpY2FsLFxuICAgICAgX3RoaXMgPSB0aGlzLFxuICAgICAgY29tcGxldGVkRmlyZWQgPSBmYWxzZTtcbiAgICBpZiAoX3NpbGVudCkgcmV0dXJuO1xuICAgIGZ1bmN0aW9uIGRyYWdPdmVyRXZlbnQobmFtZSwgZXh0cmEpIHtcbiAgICAgIHBsdWdpbkV2ZW50KG5hbWUsIF90aGlzLCBfb2JqZWN0U3ByZWFkMih7XG4gICAgICAgIGV2dDogZXZ0LFxuICAgICAgICBpc093bmVyOiBpc093bmVyLFxuICAgICAgICBheGlzOiB2ZXJ0aWNhbCA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgIHJldmVydDogcmV2ZXJ0LFxuICAgICAgICBkcmFnUmVjdDogZHJhZ1JlY3QsXG4gICAgICAgIHRhcmdldFJlY3Q6IHRhcmdldFJlY3QsXG4gICAgICAgIGNhblNvcnQ6IGNhblNvcnQsXG4gICAgICAgIGZyb21Tb3J0YWJsZTogZnJvbVNvcnRhYmxlLFxuICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgY29tcGxldGVkOiBjb21wbGV0ZWQsXG4gICAgICAgIG9uTW92ZTogZnVuY3Rpb24gb25Nb3ZlKHRhcmdldCwgYWZ0ZXIpIHtcbiAgICAgICAgICByZXR1cm4gX29uTW92ZShyb290RWwsIGVsLCBkcmFnRWwsIGRyYWdSZWN0LCB0YXJnZXQsIGdldFJlY3QodGFyZ2V0KSwgZXZ0LCBhZnRlcik7XG4gICAgICAgIH0sXG4gICAgICAgIGNoYW5nZWQ6IGNoYW5nZWRcbiAgICAgIH0sIGV4dHJhKSk7XG4gICAgfVxuXG4gICAgLy8gQ2FwdHVyZSBhbmltYXRpb24gc3RhdGVcbiAgICBmdW5jdGlvbiBjYXB0dXJlKCkge1xuICAgICAgZHJhZ092ZXJFdmVudCgnZHJhZ092ZXJBbmltYXRpb25DYXB0dXJlJyk7XG4gICAgICBfdGhpcy5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcbiAgICAgIGlmIChfdGhpcyAhPT0gZnJvbVNvcnRhYmxlKSB7XG4gICAgICAgIGZyb21Tb3J0YWJsZS5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gaW52b2NhdGlvbiB3aGVuIGRyYWdFbCBpcyBpbnNlcnRlZCAob3IgY29tcGxldGVkKVxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlZChpbnNlcnRpb24pIHtcbiAgICAgIGRyYWdPdmVyRXZlbnQoJ2RyYWdPdmVyQ29tcGxldGVkJywge1xuICAgICAgICBpbnNlcnRpb246IGluc2VydGlvblxuICAgICAgfSk7XG4gICAgICBpZiAoaW5zZXJ0aW9uKSB7XG4gICAgICAgIC8vIENsb25lcyBtdXN0IGJlIGhpZGRlbiBiZWZvcmUgZm9sZGluZyBhbmltYXRpb24gdG8gY2FwdHVyZSBkcmFnUmVjdEFic29sdXRlIHByb3Blcmx5XG4gICAgICAgIGlmIChpc093bmVyKSB7XG4gICAgICAgICAgYWN0aXZlU29ydGFibGUuX2hpZGVDbG9uZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFjdGl2ZVNvcnRhYmxlLl9zaG93Q2xvbmUoX3RoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfdGhpcyAhPT0gZnJvbVNvcnRhYmxlKSB7XG4gICAgICAgICAgLy8gU2V0IGdob3N0IGNsYXNzIHRvIG5ldyBzb3J0YWJsZSdzIGdob3N0IGNsYXNzXG4gICAgICAgICAgdG9nZ2xlQ2xhc3MoZHJhZ0VsLCBwdXRTb3J0YWJsZSA/IHB1dFNvcnRhYmxlLm9wdGlvbnMuZ2hvc3RDbGFzcyA6IGFjdGl2ZVNvcnRhYmxlLm9wdGlvbnMuZ2hvc3RDbGFzcywgZmFsc2UpO1xuICAgICAgICAgIHRvZ2dsZUNsYXNzKGRyYWdFbCwgb3B0aW9ucy5naG9zdENsYXNzLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHV0U29ydGFibGUgIT09IF90aGlzICYmIF90aGlzICE9PSBTb3J0YWJsZS5hY3RpdmUpIHtcbiAgICAgICAgICBwdXRTb3J0YWJsZSA9IF90aGlzO1xuICAgICAgICB9IGVsc2UgaWYgKF90aGlzID09PSBTb3J0YWJsZS5hY3RpdmUgJiYgcHV0U29ydGFibGUpIHtcbiAgICAgICAgICBwdXRTb3J0YWJsZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbmltYXRpb25cbiAgICAgICAgaWYgKGZyb21Tb3J0YWJsZSA9PT0gX3RoaXMpIHtcbiAgICAgICAgICBfdGhpcy5faWdub3JlV2hpbGVBbmltYXRpbmcgPSB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuYW5pbWF0ZUFsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZHJhZ092ZXJFdmVudCgnZHJhZ092ZXJBbmltYXRpb25Db21wbGV0ZScpO1xuICAgICAgICAgIF90aGlzLl9pZ25vcmVXaGlsZUFuaW1hdGluZyA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoX3RoaXMgIT09IGZyb21Tb3J0YWJsZSkge1xuICAgICAgICAgIGZyb21Tb3J0YWJsZS5hbmltYXRlQWxsKCk7XG4gICAgICAgICAgZnJvbVNvcnRhYmxlLl9pZ25vcmVXaGlsZUFuaW1hdGluZyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gTnVsbCBsYXN0VGFyZ2V0IGlmIGl0IGlzIG5vdCBpbnNpZGUgYSBwcmV2aW91c2x5IHN3YXBwZWQgZWxlbWVudFxuICAgICAgaWYgKHRhcmdldCA9PT0gZHJhZ0VsICYmICFkcmFnRWwuYW5pbWF0ZWQgfHwgdGFyZ2V0ID09PSBlbCAmJiAhdGFyZ2V0LmFuaW1hdGVkKSB7XG4gICAgICAgIGxhc3RUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBubyBidWJibGluZyBhbmQgbm90IGZhbGxiYWNrXG4gICAgICBpZiAoIW9wdGlvbnMuZHJhZ292ZXJCdWJibGUgJiYgIWV2dC5yb290RWwgJiYgdGFyZ2V0ICE9PSBkb2N1bWVudCkge1xuICAgICAgICBkcmFnRWwucGFyZW50Tm9kZVtleHBhbmRvXS5faXNPdXRzaWRlVGhpc0VsKGV2dC50YXJnZXQpO1xuXG4gICAgICAgIC8vIERvIG5vdCBkZXRlY3QgZm9yIGVtcHR5IGluc2VydCBpZiBhbHJlYWR5IGluc2VydGVkXG4gICAgICAgICFpbnNlcnRpb24gJiYgbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQoZXZ0KTtcbiAgICAgIH1cbiAgICAgICFvcHRpb25zLmRyYWdvdmVyQnViYmxlICYmIGV2dC5zdG9wUHJvcGFnYXRpb24gJiYgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmV0dXJuIGNvbXBsZXRlZEZpcmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBDYWxsIHdoZW4gZHJhZ0VsIGhhcyBiZWVuIGluc2VydGVkXG4gICAgZnVuY3Rpb24gY2hhbmdlZCgpIHtcbiAgICAgIG5ld0luZGV4ID0gaW5kZXgoZHJhZ0VsKTtcbiAgICAgIG5ld0RyYWdnYWJsZUluZGV4ID0gaW5kZXgoZHJhZ0VsLCBvcHRpb25zLmRyYWdnYWJsZSk7XG4gICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgIHNvcnRhYmxlOiBfdGhpcyxcbiAgICAgICAgbmFtZTogJ2NoYW5nZScsXG4gICAgICAgIHRvRWw6IGVsLFxuICAgICAgICBuZXdJbmRleDogbmV3SW5kZXgsXG4gICAgICAgIG5ld0RyYWdnYWJsZUluZGV4OiBuZXdEcmFnZ2FibGVJbmRleCxcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGV2dC5wcmV2ZW50RGVmYXVsdCAhPT0gdm9pZCAwKSB7XG4gICAgICBldnQuY2FuY2VsYWJsZSAmJiBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgdGFyZ2V0ID0gY2xvc2VzdCh0YXJnZXQsIG9wdGlvbnMuZHJhZ2dhYmxlLCBlbCwgdHJ1ZSk7XG4gICAgZHJhZ092ZXJFdmVudCgnZHJhZ092ZXInKTtcbiAgICBpZiAoU29ydGFibGUuZXZlbnRDYW5jZWxlZCkgcmV0dXJuIGNvbXBsZXRlZEZpcmVkO1xuICAgIGlmIChkcmFnRWwuY29udGFpbnMoZXZ0LnRhcmdldCkgfHwgdGFyZ2V0LmFuaW1hdGVkICYmIHRhcmdldC5hbmltYXRpbmdYICYmIHRhcmdldC5hbmltYXRpbmdZIHx8IF90aGlzLl9pZ25vcmVXaGlsZUFuaW1hdGluZyA9PT0gdGFyZ2V0KSB7XG4gICAgICByZXR1cm4gY29tcGxldGVkKGZhbHNlKTtcbiAgICB9XG4gICAgaWdub3JlTmV4dENsaWNrID0gZmFsc2U7XG4gICAgaWYgKGFjdGl2ZVNvcnRhYmxlICYmICFvcHRpb25zLmRpc2FibGVkICYmIChpc093bmVyID8gY2FuU29ydCB8fCAocmV2ZXJ0ID0gcGFyZW50RWwgIT09IHJvb3RFbCkgLy8gUmV2ZXJ0aW5nIGl0ZW0gaW50byB0aGUgb3JpZ2luYWwgbGlzdFxuICAgIDogcHV0U29ydGFibGUgPT09IHRoaXMgfHwgKHRoaXMubGFzdFB1dE1vZGUgPSBhY3RpdmVHcm91cC5jaGVja1B1bGwodGhpcywgYWN0aXZlU29ydGFibGUsIGRyYWdFbCwgZXZ0KSkgJiYgZ3JvdXAuY2hlY2tQdXQodGhpcywgYWN0aXZlU29ydGFibGUsIGRyYWdFbCwgZXZ0KSkpIHtcbiAgICAgIHZlcnRpY2FsID0gdGhpcy5fZ2V0RGlyZWN0aW9uKGV2dCwgdGFyZ2V0KSA9PT0gJ3ZlcnRpY2FsJztcbiAgICAgIGRyYWdSZWN0ID0gZ2V0UmVjdChkcmFnRWwpO1xuICAgICAgZHJhZ092ZXJFdmVudCgnZHJhZ092ZXJWYWxpZCcpO1xuICAgICAgaWYgKFNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHJldHVybiBjb21wbGV0ZWRGaXJlZDtcbiAgICAgIGlmIChyZXZlcnQpIHtcbiAgICAgICAgcGFyZW50RWwgPSByb290RWw7IC8vIGFjdHVhbGl6YXRpb25cbiAgICAgICAgY2FwdHVyZSgpO1xuICAgICAgICB0aGlzLl9oaWRlQ2xvbmUoKTtcbiAgICAgICAgZHJhZ092ZXJFdmVudCgncmV2ZXJ0Jyk7XG4gICAgICAgIGlmICghU29ydGFibGUuZXZlbnRDYW5jZWxlZCkge1xuICAgICAgICAgIGlmIChuZXh0RWwpIHtcbiAgICAgICAgICAgIHJvb3RFbC5pbnNlcnRCZWZvcmUoZHJhZ0VsLCBuZXh0RWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb290RWwuYXBwZW5kQ2hpbGQoZHJhZ0VsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlZCh0cnVlKTtcbiAgICAgIH1cbiAgICAgIHZhciBlbExhc3RDaGlsZCA9IGxhc3RDaGlsZChlbCwgb3B0aW9ucy5kcmFnZ2FibGUpO1xuICAgICAgaWYgKCFlbExhc3RDaGlsZCB8fCBfZ2hvc3RJc0xhc3QoZXZ0LCB2ZXJ0aWNhbCwgdGhpcykgJiYgIWVsTGFzdENoaWxkLmFuaW1hdGVkKSB7XG4gICAgICAgIC8vIEluc2VydCB0byBlbmQgb2YgbGlzdFxuXG4gICAgICAgIC8vIElmIGFscmVhZHkgYXQgZW5kIG9mIGxpc3Q6IERvIG5vdCBpbnNlcnRcbiAgICAgICAgaWYgKGVsTGFzdENoaWxkID09PSBkcmFnRWwpIHtcbiAgICAgICAgICByZXR1cm4gY29tcGxldGVkKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgbGFzdCBlbGVtZW50LCBpdCBpcyB0aGUgdGFyZ2V0XG4gICAgICAgIGlmIChlbExhc3RDaGlsZCAmJiBlbCA9PT0gZXZ0LnRhcmdldCkge1xuICAgICAgICAgIHRhcmdldCA9IGVsTGFzdENoaWxkO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICB0YXJnZXRSZWN0ID0gZ2V0UmVjdCh0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfb25Nb3ZlKHJvb3RFbCwgZWwsIGRyYWdFbCwgZHJhZ1JlY3QsIHRhcmdldCwgdGFyZ2V0UmVjdCwgZXZ0LCAhIXRhcmdldCkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgY2FwdHVyZSgpO1xuICAgICAgICAgIGlmIChlbExhc3RDaGlsZCAmJiBlbExhc3RDaGlsZC5uZXh0U2libGluZykge1xuICAgICAgICAgICAgLy8gdGhlIGxhc3QgZHJhZ2dhYmxlIGVsZW1lbnQgaXMgbm90IHRoZSBsYXN0IG5vZGVcbiAgICAgICAgICAgIGVsLmluc2VydEJlZm9yZShkcmFnRWwsIGVsTGFzdENoaWxkLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZHJhZ0VsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGFyZW50RWwgPSBlbDsgLy8gYWN0dWFsaXphdGlvblxuXG4gICAgICAgICAgY2hhbmdlZCgpO1xuICAgICAgICAgIHJldHVybiBjb21wbGV0ZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZWxMYXN0Q2hpbGQgJiYgX2dob3N0SXNGaXJzdChldnQsIHZlcnRpY2FsLCB0aGlzKSkge1xuICAgICAgICAvLyBJbnNlcnQgdG8gc3RhcnQgb2YgbGlzdFxuICAgICAgICB2YXIgZmlyc3RDaGlsZCA9IGdldENoaWxkKGVsLCAwLCBvcHRpb25zLCB0cnVlKTtcbiAgICAgICAgaWYgKGZpcnN0Q2hpbGQgPT09IGRyYWdFbCkge1xuICAgICAgICAgIHJldHVybiBjb21wbGV0ZWQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldCA9IGZpcnN0Q2hpbGQ7XG4gICAgICAgIHRhcmdldFJlY3QgPSBnZXRSZWN0KHRhcmdldCk7XG4gICAgICAgIGlmIChfb25Nb3ZlKHJvb3RFbCwgZWwsIGRyYWdFbCwgZHJhZ1JlY3QsIHRhcmdldCwgdGFyZ2V0UmVjdCwgZXZ0LCBmYWxzZSkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgY2FwdHVyZSgpO1xuICAgICAgICAgIGVsLmluc2VydEJlZm9yZShkcmFnRWwsIGZpcnN0Q2hpbGQpO1xuICAgICAgICAgIHBhcmVudEVsID0gZWw7IC8vIGFjdHVhbGl6YXRpb25cblxuICAgICAgICAgIGNoYW5nZWQoKTtcbiAgICAgICAgICByZXR1cm4gY29tcGxldGVkKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldC5wYXJlbnROb2RlID09PSBlbCkge1xuICAgICAgICB0YXJnZXRSZWN0ID0gZ2V0UmVjdCh0YXJnZXQpO1xuICAgICAgICB2YXIgZGlyZWN0aW9uID0gMCxcbiAgICAgICAgICB0YXJnZXRCZWZvcmVGaXJzdFN3YXAsXG4gICAgICAgICAgZGlmZmVyZW50TGV2ZWwgPSBkcmFnRWwucGFyZW50Tm9kZSAhPT0gZWwsXG4gICAgICAgICAgZGlmZmVyZW50Um93Q29sID0gIV9kcmFnRWxJblJvd0NvbHVtbihkcmFnRWwuYW5pbWF0ZWQgJiYgZHJhZ0VsLnRvUmVjdCB8fCBkcmFnUmVjdCwgdGFyZ2V0LmFuaW1hdGVkICYmIHRhcmdldC50b1JlY3QgfHwgdGFyZ2V0UmVjdCwgdmVydGljYWwpLFxuICAgICAgICAgIHNpZGUxID0gdmVydGljYWwgPyAndG9wJyA6ICdsZWZ0JyxcbiAgICAgICAgICBzY3JvbGxlZFBhc3RUb3AgPSBpc1Njcm9sbGVkUGFzdCh0YXJnZXQsICd0b3AnLCAndG9wJykgfHwgaXNTY3JvbGxlZFBhc3QoZHJhZ0VsLCAndG9wJywgJ3RvcCcpLFxuICAgICAgICAgIHNjcm9sbEJlZm9yZSA9IHNjcm9sbGVkUGFzdFRvcCA/IHNjcm9sbGVkUGFzdFRvcC5zY3JvbGxUb3AgOiB2b2lkIDA7XG4gICAgICAgIGlmIChsYXN0VGFyZ2V0ICE9PSB0YXJnZXQpIHtcbiAgICAgICAgICB0YXJnZXRCZWZvcmVGaXJzdFN3YXAgPSB0YXJnZXRSZWN0W3NpZGUxXTtcbiAgICAgICAgICBwYXN0Rmlyc3RJbnZlcnRUaHJlc2ggPSBmYWxzZTtcbiAgICAgICAgICBpc0NpcmN1bXN0YW50aWFsSW52ZXJ0ID0gIWRpZmZlcmVudFJvd0NvbCAmJiBvcHRpb25zLmludmVydFN3YXAgfHwgZGlmZmVyZW50TGV2ZWw7XG4gICAgICAgIH1cbiAgICAgICAgZGlyZWN0aW9uID0gX2dldFN3YXBEaXJlY3Rpb24oZXZ0LCB0YXJnZXQsIHRhcmdldFJlY3QsIHZlcnRpY2FsLCBkaWZmZXJlbnRSb3dDb2wgPyAxIDogb3B0aW9ucy5zd2FwVGhyZXNob2xkLCBvcHRpb25zLmludmVydGVkU3dhcFRocmVzaG9sZCA9PSBudWxsID8gb3B0aW9ucy5zd2FwVGhyZXNob2xkIDogb3B0aW9ucy5pbnZlcnRlZFN3YXBUaHJlc2hvbGQsIGlzQ2lyY3Vtc3RhbnRpYWxJbnZlcnQsIGxhc3RUYXJnZXQgPT09IHRhcmdldCk7XG4gICAgICAgIHZhciBzaWJsaW5nO1xuICAgICAgICBpZiAoZGlyZWN0aW9uICE9PSAwKSB7XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdGFyZ2V0IGlzIGJlc2lkZSBkcmFnRWwgaW4gcmVzcGVjdGl2ZSBkaXJlY3Rpb24gKGlnbm9yaW5nIGhpZGRlbiBlbGVtZW50cylcbiAgICAgICAgICB2YXIgZHJhZ0luZGV4ID0gaW5kZXgoZHJhZ0VsKTtcbiAgICAgICAgICBkbyB7XG4gICAgICAgICAgICBkcmFnSW5kZXggLT0gZGlyZWN0aW9uO1xuICAgICAgICAgICAgc2libGluZyA9IHBhcmVudEVsLmNoaWxkcmVuW2RyYWdJbmRleF07XG4gICAgICAgICAgfSB3aGlsZSAoc2libGluZyAmJiAoY3NzKHNpYmxpbmcsICdkaXNwbGF5JykgPT09ICdub25lJyB8fCBzaWJsaW5nID09PSBnaG9zdEVsKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgZHJhZ0VsIGlzIGFscmVhZHkgYmVzaWRlIHRhcmdldDogRG8gbm90IGluc2VydFxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAwIHx8IHNpYmxpbmcgPT09IHRhcmdldCkge1xuICAgICAgICAgIHJldHVybiBjb21wbGV0ZWQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGxhc3RUYXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIGxhc3REaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIHZhciBuZXh0U2libGluZyA9IHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcsXG4gICAgICAgICAgYWZ0ZXIgPSBmYWxzZTtcbiAgICAgICAgYWZ0ZXIgPSBkaXJlY3Rpb24gPT09IDE7XG4gICAgICAgIHZhciBtb3ZlVmVjdG9yID0gX29uTW92ZShyb290RWwsIGVsLCBkcmFnRWwsIGRyYWdSZWN0LCB0YXJnZXQsIHRhcmdldFJlY3QsIGV2dCwgYWZ0ZXIpO1xuICAgICAgICBpZiAobW92ZVZlY3RvciAhPT0gZmFsc2UpIHtcbiAgICAgICAgICBpZiAobW92ZVZlY3RvciA9PT0gMSB8fCBtb3ZlVmVjdG9yID09PSAtMSkge1xuICAgICAgICAgICAgYWZ0ZXIgPSBtb3ZlVmVjdG9yID09PSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfc2lsZW50ID0gdHJ1ZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KF91bnNpbGVudCwgMzApO1xuICAgICAgICAgIGNhcHR1cmUoKTtcbiAgICAgICAgICBpZiAoYWZ0ZXIgJiYgIW5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChkcmFnRWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZHJhZ0VsLCBhZnRlciA/IG5leHRTaWJsaW5nIDogdGFyZ2V0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBVbmRvIGNocm9tZSdzIHNjcm9sbCBhZGp1c3RtZW50IChoYXMgbm8gZWZmZWN0IG9uIG90aGVyIGJyb3dzZXJzKVxuICAgICAgICAgIGlmIChzY3JvbGxlZFBhc3RUb3ApIHtcbiAgICAgICAgICAgIHNjcm9sbEJ5KHNjcm9sbGVkUGFzdFRvcCwgMCwgc2Nyb2xsQmVmb3JlIC0gc2Nyb2xsZWRQYXN0VG9wLnNjcm9sbFRvcCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcmVudEVsID0gZHJhZ0VsLnBhcmVudE5vZGU7IC8vIGFjdHVhbGl6YXRpb25cblxuICAgICAgICAgIC8vIG11c3QgYmUgZG9uZSBiZWZvcmUgYW5pbWF0aW9uXG4gICAgICAgICAgaWYgKHRhcmdldEJlZm9yZUZpcnN0U3dhcCAhPT0gdW5kZWZpbmVkICYmICFpc0NpcmN1bXN0YW50aWFsSW52ZXJ0KSB7XG4gICAgICAgICAgICB0YXJnZXRNb3ZlRGlzdGFuY2UgPSBNYXRoLmFicyh0YXJnZXRCZWZvcmVGaXJzdFN3YXAgLSBnZXRSZWN0KHRhcmdldClbc2lkZTFdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2hhbmdlZCgpO1xuICAgICAgICAgIHJldHVybiBjb21wbGV0ZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChlbC5jb250YWlucyhkcmFnRWwpKSB7XG4gICAgICAgIHJldHVybiBjb21wbGV0ZWQoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG4gIF9pZ25vcmVXaGlsZUFuaW1hdGluZzogbnVsbCxcbiAgX29mZk1vdmVFdmVudHM6IGZ1bmN0aW9uIF9vZmZNb3ZlRXZlbnRzKCkge1xuICAgIG9mZihkb2N1bWVudCwgJ21vdXNlbW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlKTtcbiAgICBvZmYoZG9jdW1lbnQsICd0b3VjaG1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgb2ZmKGRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgb2ZmKGRvY3VtZW50LCAnZHJhZ292ZXInLCBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudCk7XG4gICAgb2ZmKGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQpO1xuICAgIG9mZihkb2N1bWVudCwgJ3RvdWNobW92ZScsIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50KTtcbiAgfSxcbiAgX29mZlVwRXZlbnRzOiBmdW5jdGlvbiBfb2ZmVXBFdmVudHMoKSB7XG4gICAgdmFyIG93bmVyRG9jdW1lbnQgPSB0aGlzLmVsLm93bmVyRG9jdW1lbnQ7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICdtb3VzZXVwJywgdGhpcy5fb25Ecm9wKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ3RvdWNoZW5kJywgdGhpcy5fb25Ecm9wKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ3BvaW50ZXJ1cCcsIHRoaXMuX29uRHJvcCk7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICdwb2ludGVyY2FuY2VsJywgdGhpcy5fb25Ecm9wKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ3RvdWNoY2FuY2VsJywgdGhpcy5fb25Ecm9wKTtcbiAgICBvZmYoZG9jdW1lbnQsICdzZWxlY3RzdGFydCcsIHRoaXMpO1xuICB9LFxuICBfb25Ecm9wOiBmdW5jdGlvbiBfb25Ecm9wKCAvKipFdmVudCovZXZ0KSB7XG4gICAgdmFyIGVsID0gdGhpcy5lbCxcbiAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAvLyBHZXQgdGhlIGluZGV4IG9mIHRoZSBkcmFnZ2VkIGVsZW1lbnQgd2l0aGluIGl0cyBwYXJlbnRcbiAgICBuZXdJbmRleCA9IGluZGV4KGRyYWdFbCk7XG4gICAgbmV3RHJhZ2dhYmxlSW5kZXggPSBpbmRleChkcmFnRWwsIG9wdGlvbnMuZHJhZ2dhYmxlKTtcbiAgICBwbHVnaW5FdmVudCgnZHJvcCcsIHRoaXMsIHtcbiAgICAgIGV2dDogZXZ0XG4gICAgfSk7XG4gICAgcGFyZW50RWwgPSBkcmFnRWwgJiYgZHJhZ0VsLnBhcmVudE5vZGU7XG5cbiAgICAvLyBHZXQgYWdhaW4gYWZ0ZXIgcGx1Z2luIGV2ZW50XG4gICAgbmV3SW5kZXggPSBpbmRleChkcmFnRWwpO1xuICAgIG5ld0RyYWdnYWJsZUluZGV4ID0gaW5kZXgoZHJhZ0VsLCBvcHRpb25zLmRyYWdnYWJsZSk7XG4gICAgaWYgKFNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHtcbiAgICAgIHRoaXMuX251bGxpbmcoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXRpbmdEcmFnU3RhcnRlZCA9IGZhbHNlO1xuICAgIGlzQ2lyY3Vtc3RhbnRpYWxJbnZlcnQgPSBmYWxzZTtcbiAgICBwYXN0Rmlyc3RJbnZlcnRUaHJlc2ggPSBmYWxzZTtcbiAgICBjbGVhckludGVydmFsKHRoaXMuX2xvb3BJZCk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX2RyYWdTdGFydFRpbWVyKTtcbiAgICBfY2FuY2VsTmV4dFRpY2sodGhpcy5jbG9uZUlkKTtcbiAgICBfY2FuY2VsTmV4dFRpY2sodGhpcy5fZHJhZ1N0YXJ0SWQpO1xuXG4gICAgLy8gVW5iaW5kIGV2ZW50c1xuICAgIGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgICAgb2ZmKGRvY3VtZW50LCAnZHJvcCcsIHRoaXMpO1xuICAgICAgb2ZmKGVsLCAnZHJhZ3N0YXJ0JywgdGhpcy5fb25EcmFnU3RhcnQpO1xuICAgIH1cbiAgICB0aGlzLl9vZmZNb3ZlRXZlbnRzKCk7XG4gICAgdGhpcy5fb2ZmVXBFdmVudHMoKTtcbiAgICBpZiAoU2FmYXJpKSB7XG4gICAgICBjc3MoZG9jdW1lbnQuYm9keSwgJ3VzZXItc2VsZWN0JywgJycpO1xuICAgIH1cbiAgICBjc3MoZHJhZ0VsLCAndHJhbnNmb3JtJywgJycpO1xuICAgIGlmIChldnQpIHtcbiAgICAgIGlmIChtb3ZlZCkge1xuICAgICAgICBldnQuY2FuY2VsYWJsZSAmJiBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgIW9wdGlvbnMuZHJvcEJ1YmJsZSAmJiBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgICBnaG9zdEVsICYmIGdob3N0RWwucGFyZW50Tm9kZSAmJiBnaG9zdEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZ2hvc3RFbCk7XG4gICAgICBpZiAocm9vdEVsID09PSBwYXJlbnRFbCB8fCBwdXRTb3J0YWJsZSAmJiBwdXRTb3J0YWJsZS5sYXN0UHV0TW9kZSAhPT0gJ2Nsb25lJykge1xuICAgICAgICAvLyBSZW1vdmUgY2xvbmUocylcbiAgICAgICAgY2xvbmVFbCAmJiBjbG9uZUVsLnBhcmVudE5vZGUgJiYgY2xvbmVFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNsb25lRWwpO1xuICAgICAgfVxuICAgICAgaWYgKGRyYWdFbCkge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICAgICAgICBvZmYoZHJhZ0VsLCAnZHJhZ2VuZCcsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIF9kaXNhYmxlRHJhZ2dhYmxlKGRyYWdFbCk7XG4gICAgICAgIGRyYWdFbC5zdHlsZVsnd2lsbC1jaGFuZ2UnXSA9ICcnO1xuXG4gICAgICAgIC8vIFJlbW92ZSBjbGFzc2VzXG4gICAgICAgIC8vIGdob3N0Q2xhc3MgaXMgYWRkZWQgaW4gZHJhZ1N0YXJ0ZWRcbiAgICAgICAgaWYgKG1vdmVkICYmICFhd2FpdGluZ0RyYWdTdGFydGVkKSB7XG4gICAgICAgICAgdG9nZ2xlQ2xhc3MoZHJhZ0VsLCBwdXRTb3J0YWJsZSA/IHB1dFNvcnRhYmxlLm9wdGlvbnMuZ2hvc3RDbGFzcyA6IHRoaXMub3B0aW9ucy5naG9zdENsYXNzLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgdG9nZ2xlQ2xhc3MoZHJhZ0VsLCB0aGlzLm9wdGlvbnMuY2hvc2VuQ2xhc3MsIGZhbHNlKTtcblxuICAgICAgICAvLyBEcmFnIHN0b3AgZXZlbnRcbiAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgIHNvcnRhYmxlOiB0aGlzLFxuICAgICAgICAgIG5hbWU6ICd1bmNob29zZScsXG4gICAgICAgICAgdG9FbDogcGFyZW50RWwsXG4gICAgICAgICAgbmV3SW5kZXg6IG51bGwsXG4gICAgICAgICAgbmV3RHJhZ2dhYmxlSW5kZXg6IG51bGwsXG4gICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocm9vdEVsICE9PSBwYXJlbnRFbCkge1xuICAgICAgICAgIGlmIChuZXdJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAvLyBBZGQgZXZlbnRcbiAgICAgICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgICAgcm9vdEVsOiBwYXJlbnRFbCxcbiAgICAgICAgICAgICAgbmFtZTogJ2FkZCcsXG4gICAgICAgICAgICAgIHRvRWw6IHBhcmVudEVsLFxuICAgICAgICAgICAgICBmcm9tRWw6IHJvb3RFbCxcbiAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIGV2ZW50XG4gICAgICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICAgIHNvcnRhYmxlOiB0aGlzLFxuICAgICAgICAgICAgICBuYW1lOiAncmVtb3ZlJyxcbiAgICAgICAgICAgICAgdG9FbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGRyYWcgZnJvbSBvbmUgbGlzdCBhbmQgZHJvcCBpbnRvIGFub3RoZXJcbiAgICAgICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgICAgcm9vdEVsOiBwYXJlbnRFbCxcbiAgICAgICAgICAgICAgbmFtZTogJ3NvcnQnLFxuICAgICAgICAgICAgICB0b0VsOiBwYXJlbnRFbCxcbiAgICAgICAgICAgICAgZnJvbUVsOiByb290RWwsXG4gICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICAgIHNvcnRhYmxlOiB0aGlzLFxuICAgICAgICAgICAgICBuYW1lOiAnc29ydCcsXG4gICAgICAgICAgICAgIHRvRWw6IHBhcmVudEVsLFxuICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwdXRTb3J0YWJsZSAmJiBwdXRTb3J0YWJsZS5zYXZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKG5ld0luZGV4ICE9PSBvbGRJbmRleCkge1xuICAgICAgICAgICAgaWYgKG5ld0luZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgLy8gZHJhZyAmIGRyb3Agd2l0aGluIHRoZSBzYW1lIGxpc3RcbiAgICAgICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiB0aGlzLFxuICAgICAgICAgICAgICAgIG5hbWU6ICd1cGRhdGUnLFxuICAgICAgICAgICAgICAgIHRvRWw6IHBhcmVudEVsLFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiB0aGlzLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdzb3J0JyxcbiAgICAgICAgICAgICAgICB0b0VsOiBwYXJlbnRFbCxcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChTb3J0YWJsZS5hY3RpdmUpIHtcbiAgICAgICAgICAvKiBqc2hpbnQgZXFudWxsOnRydWUgKi9cbiAgICAgICAgICBpZiAobmV3SW5kZXggPT0gbnVsbCB8fCBuZXdJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIG5ld0luZGV4ID0gb2xkSW5kZXg7XG4gICAgICAgICAgICBuZXdEcmFnZ2FibGVJbmRleCA9IG9sZERyYWdnYWJsZUluZGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICAgIG5hbWU6ICdlbmQnLFxuICAgICAgICAgICAgdG9FbDogcGFyZW50RWwsXG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIFNhdmUgc29ydGluZ1xuICAgICAgICAgIHRoaXMuc2F2ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX251bGxpbmcoKTtcbiAgfSxcbiAgX251bGxpbmc6IGZ1bmN0aW9uIF9udWxsaW5nKCkge1xuICAgIHBsdWdpbkV2ZW50KCdudWxsaW5nJywgdGhpcyk7XG4gICAgcm9vdEVsID0gZHJhZ0VsID0gcGFyZW50RWwgPSBnaG9zdEVsID0gbmV4dEVsID0gY2xvbmVFbCA9IGxhc3REb3duRWwgPSBjbG9uZUhpZGRlbiA9IHRhcEV2dCA9IHRvdWNoRXZ0ID0gbW92ZWQgPSBuZXdJbmRleCA9IG5ld0RyYWdnYWJsZUluZGV4ID0gb2xkSW5kZXggPSBvbGREcmFnZ2FibGVJbmRleCA9IGxhc3RUYXJnZXQgPSBsYXN0RGlyZWN0aW9uID0gcHV0U29ydGFibGUgPSBhY3RpdmVHcm91cCA9IFNvcnRhYmxlLmRyYWdnZWQgPSBTb3J0YWJsZS5naG9zdCA9IFNvcnRhYmxlLmNsb25lID0gU29ydGFibGUuYWN0aXZlID0gbnVsbDtcbiAgICB2YXIgZWwgPSB0aGlzLmVsO1xuICAgIHNhdmVkSW5wdXRDaGVja2VkLmZvckVhY2goZnVuY3Rpb24gKGNoZWNrRWwpIHtcbiAgICAgIGlmIChlbC5jb250YWlucyhjaGVja0VsKSkge1xuICAgICAgICBjaGVja0VsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNhdmVkSW5wdXRDaGVja2VkLmxlbmd0aCA9IGxhc3REeCA9IGxhc3REeSA9IDA7XG4gIH0sXG4gIGhhbmRsZUV2ZW50OiBmdW5jdGlvbiBoYW5kbGVFdmVudCggLyoqRXZlbnQqL2V2dCkge1xuICAgIHN3aXRjaCAoZXZ0LnR5cGUpIHtcbiAgICAgIGNhc2UgJ2Ryb3AnOlxuICAgICAgY2FzZSAnZHJhZ2VuZCc6XG4gICAgICAgIHRoaXMuX29uRHJvcChldnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RyYWdlbnRlcic6XG4gICAgICBjYXNlICdkcmFnb3Zlcic6XG4gICAgICAgIGlmIChkcmFnRWwpIHtcbiAgICAgICAgICB0aGlzLl9vbkRyYWdPdmVyKGV2dCk7XG4gICAgICAgICAgX2dsb2JhbERyYWdPdmVyKGV2dCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZWxlY3RzdGFydCc6XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0sXG4gIC8qKlxyXG4gICAqIFNlcmlhbGl6ZXMgdGhlIGl0ZW0gaW50byBhbiBhcnJheSBvZiBzdHJpbmcuXHJcbiAgICogQHJldHVybnMge1N0cmluZ1tdfVxyXG4gICAqL1xuICB0b0FycmF5OiBmdW5jdGlvbiB0b0FycmF5KCkge1xuICAgIHZhciBvcmRlciA9IFtdLFxuICAgICAgZWwsXG4gICAgICBjaGlsZHJlbiA9IHRoaXMuZWwuY2hpbGRyZW4sXG4gICAgICBpID0gMCxcbiAgICAgIG4gPSBjaGlsZHJlbi5sZW5ndGgsXG4gICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XG4gICAgICBlbCA9IGNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGNsb3Nlc3QoZWwsIG9wdGlvbnMuZHJhZ2dhYmxlLCB0aGlzLmVsLCBmYWxzZSkpIHtcbiAgICAgICAgb3JkZXIucHVzaChlbC5nZXRBdHRyaWJ1dGUob3B0aW9ucy5kYXRhSWRBdHRyKSB8fCBfZ2VuZXJhdGVJZChlbCkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3JkZXI7XG4gIH0sXG4gIC8qKlxyXG4gICAqIFNvcnRzIHRoZSBlbGVtZW50cyBhY2NvcmRpbmcgdG8gdGhlIGFycmF5LlxyXG4gICAqIEBwYXJhbSAge1N0cmluZ1tdfSAgb3JkZXIgIG9yZGVyIG9mIHRoZSBpdGVtc1xyXG4gICAqL1xuICBzb3J0OiBmdW5jdGlvbiBzb3J0KG9yZGVyLCB1c2VBbmltYXRpb24pIHtcbiAgICB2YXIgaXRlbXMgPSB7fSxcbiAgICAgIHJvb3RFbCA9IHRoaXMuZWw7XG4gICAgdGhpcy50b0FycmF5KCkuZm9yRWFjaChmdW5jdGlvbiAoaWQsIGkpIHtcbiAgICAgIHZhciBlbCA9IHJvb3RFbC5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChjbG9zZXN0KGVsLCB0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlLCByb290RWwsIGZhbHNlKSkge1xuICAgICAgICBpdGVtc1tpZF0gPSBlbDtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgICB1c2VBbmltYXRpb24gJiYgdGhpcy5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcbiAgICBvcmRlci5mb3JFYWNoKGZ1bmN0aW9uIChpZCkge1xuICAgICAgaWYgKGl0ZW1zW2lkXSkge1xuICAgICAgICByb290RWwucmVtb3ZlQ2hpbGQoaXRlbXNbaWRdKTtcbiAgICAgICAgcm9vdEVsLmFwcGVuZENoaWxkKGl0ZW1zW2lkXSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdXNlQW5pbWF0aW9uICYmIHRoaXMuYW5pbWF0ZUFsbCgpO1xuICB9LFxuICAvKipcclxuICAgKiBTYXZlIHRoZSBjdXJyZW50IHNvcnRpbmdcclxuICAgKi9cbiAgc2F2ZTogZnVuY3Rpb24gc2F2ZSgpIHtcbiAgICB2YXIgc3RvcmUgPSB0aGlzLm9wdGlvbnMuc3RvcmU7XG4gICAgc3RvcmUgJiYgc3RvcmUuc2V0ICYmIHN0b3JlLnNldCh0aGlzKTtcbiAgfSxcbiAgLyoqXHJcbiAgICogRm9yIGVhY2ggZWxlbWVudCBpbiB0aGUgc2V0LCBnZXQgdGhlIGZpcnN0IGVsZW1lbnQgdGhhdCBtYXRjaGVzIHRoZSBzZWxlY3RvciBieSB0ZXN0aW5nIHRoZSBlbGVtZW50IGl0c2VsZiBhbmQgdHJhdmVyc2luZyB1cCB0aHJvdWdoIGl0cyBhbmNlc3RvcnMgaW4gdGhlIERPTSB0cmVlLlxyXG4gICAqIEBwYXJhbSAgIHtIVE1MRWxlbWVudH0gIGVsXHJcbiAgICogQHBhcmFtICAge1N0cmluZ30gICAgICAgW3NlbGVjdG9yXSAgZGVmYXVsdDogYG9wdGlvbnMuZHJhZ2dhYmxlYFxyXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudHxudWxsfVxyXG4gICAqL1xuICBjbG9zZXN0OiBmdW5jdGlvbiBjbG9zZXN0JDEoZWwsIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGNsb3Nlc3QoZWwsIHNlbGVjdG9yIHx8IHRoaXMub3B0aW9ucy5kcmFnZ2FibGUsIHRoaXMuZWwsIGZhbHNlKTtcbiAgfSxcbiAgLyoqXHJcbiAgICogU2V0L2dldCBvcHRpb25cclxuICAgKiBAcGFyYW0gICB7c3RyaW5nfSBuYW1lXHJcbiAgICogQHBhcmFtICAgeyp9ICAgICAgW3ZhbHVlXVxyXG4gICAqIEByZXR1cm5zIHsqfVxyXG4gICAqL1xuICBvcHRpb246IGZ1bmN0aW9uIG9wdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm4gb3B0aW9uc1tuYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG1vZGlmaWVkVmFsdWUgPSBQbHVnaW5NYW5hZ2VyLm1vZGlmeU9wdGlvbih0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgICBpZiAodHlwZW9mIG1vZGlmaWVkVmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnNbbmFtZV0gPSBtb2RpZmllZFZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9uc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgaWYgKG5hbWUgPT09ICdncm91cCcpIHtcbiAgICAgICAgX3ByZXBhcmVHcm91cChvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIC8qKlxyXG4gICAqIERlc3Ryb3lcclxuICAgKi9cbiAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBwbHVnaW5FdmVudCgnZGVzdHJveScsIHRoaXMpO1xuICAgIHZhciBlbCA9IHRoaXMuZWw7XG4gICAgZWxbZXhwYW5kb10gPSBudWxsO1xuICAgIG9mZihlbCwgJ21vdXNlZG93bicsIHRoaXMuX29uVGFwU3RhcnQpO1xuICAgIG9mZihlbCwgJ3RvdWNoc3RhcnQnLCB0aGlzLl9vblRhcFN0YXJ0KTtcbiAgICBvZmYoZWwsICdwb2ludGVyZG93bicsIHRoaXMuX29uVGFwU3RhcnQpO1xuICAgIGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgICAgb2ZmKGVsLCAnZHJhZ292ZXInLCB0aGlzKTtcbiAgICAgIG9mZihlbCwgJ2RyYWdlbnRlcicsIHRoaXMpO1xuICAgIH1cbiAgICAvLyBSZW1vdmUgZHJhZ2dhYmxlIGF0dHJpYnV0ZXNcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkcmFnZ2FibGVdJyksIGZ1bmN0aW9uIChlbCkge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKTtcbiAgICB9KTtcbiAgICB0aGlzLl9vbkRyb3AoKTtcbiAgICB0aGlzLl9kaXNhYmxlRGVsYXllZERyYWdFdmVudHMoKTtcbiAgICBzb3J0YWJsZXMuc3BsaWNlKHNvcnRhYmxlcy5pbmRleE9mKHRoaXMuZWwpLCAxKTtcbiAgICB0aGlzLmVsID0gZWwgPSBudWxsO1xuICB9LFxuICBfaGlkZUNsb25lOiBmdW5jdGlvbiBfaGlkZUNsb25lKCkge1xuICAgIGlmICghY2xvbmVIaWRkZW4pIHtcbiAgICAgIHBsdWdpbkV2ZW50KCdoaWRlQ2xvbmUnLCB0aGlzKTtcbiAgICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSByZXR1cm47XG4gICAgICBjc3MoY2xvbmVFbCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmVDbG9uZU9uSGlkZSAmJiBjbG9uZUVsLnBhcmVudE5vZGUpIHtcbiAgICAgICAgY2xvbmVFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNsb25lRWwpO1xuICAgICAgfVxuICAgICAgY2xvbmVIaWRkZW4gPSB0cnVlO1xuICAgIH1cbiAgfSxcbiAgX3Nob3dDbG9uZTogZnVuY3Rpb24gX3Nob3dDbG9uZShwdXRTb3J0YWJsZSkge1xuICAgIGlmIChwdXRTb3J0YWJsZS5sYXN0UHV0TW9kZSAhPT0gJ2Nsb25lJykge1xuICAgICAgdGhpcy5faGlkZUNsb25lKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjbG9uZUhpZGRlbikge1xuICAgICAgcGx1Z2luRXZlbnQoJ3Nob3dDbG9uZScsIHRoaXMpO1xuICAgICAgaWYgKFNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHJldHVybjtcblxuICAgICAgLy8gc2hvdyBjbG9uZSBhdCBkcmFnRWwgb3Igb3JpZ2luYWwgcG9zaXRpb25cbiAgICAgIGlmIChkcmFnRWwucGFyZW50Tm9kZSA9PSByb290RWwgJiYgIXRoaXMub3B0aW9ucy5ncm91cC5yZXZlcnRDbG9uZSkge1xuICAgICAgICByb290RWwuaW5zZXJ0QmVmb3JlKGNsb25lRWwsIGRyYWdFbCk7XG4gICAgICB9IGVsc2UgaWYgKG5leHRFbCkge1xuICAgICAgICByb290RWwuaW5zZXJ0QmVmb3JlKGNsb25lRWwsIG5leHRFbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb290RWwuYXBwZW5kQ2hpbGQoY2xvbmVFbCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmdyb3VwLnJldmVydENsb25lKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0ZShkcmFnRWwsIGNsb25lRWwpO1xuICAgICAgfVxuICAgICAgY3NzKGNsb25lRWwsICdkaXNwbGF5JywgJycpO1xuICAgICAgY2xvbmVIaWRkZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cbn07XG5mdW5jdGlvbiBfZ2xvYmFsRHJhZ092ZXIoIC8qKkV2ZW50Ki9ldnQpIHtcbiAgaWYgKGV2dC5kYXRhVHJhbnNmZXIpIHtcbiAgICBldnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7XG4gIH1cbiAgZXZ0LmNhbmNlbGFibGUgJiYgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG59XG5mdW5jdGlvbiBfb25Nb3ZlKGZyb21FbCwgdG9FbCwgZHJhZ0VsLCBkcmFnUmVjdCwgdGFyZ2V0RWwsIHRhcmdldFJlY3QsIG9yaWdpbmFsRXZlbnQsIHdpbGxJbnNlcnRBZnRlcikge1xuICB2YXIgZXZ0LFxuICAgIHNvcnRhYmxlID0gZnJvbUVsW2V4cGFuZG9dLFxuICAgIG9uTW92ZUZuID0gc29ydGFibGUub3B0aW9ucy5vbk1vdmUsXG4gICAgcmV0VmFsO1xuICAvLyBTdXBwb3J0IGZvciBuZXcgQ3VzdG9tRXZlbnQgZmVhdHVyZVxuICBpZiAod2luZG93LkN1c3RvbUV2ZW50ICYmICFJRTExT3JMZXNzICYmICFFZGdlKSB7XG4gICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KCdtb3ZlJywge1xuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBldnQuaW5pdEV2ZW50KCdtb3ZlJywgdHJ1ZSwgdHJ1ZSk7XG4gIH1cbiAgZXZ0LnRvID0gdG9FbDtcbiAgZXZ0LmZyb20gPSBmcm9tRWw7XG4gIGV2dC5kcmFnZ2VkID0gZHJhZ0VsO1xuICBldnQuZHJhZ2dlZFJlY3QgPSBkcmFnUmVjdDtcbiAgZXZ0LnJlbGF0ZWQgPSB0YXJnZXRFbCB8fCB0b0VsO1xuICBldnQucmVsYXRlZFJlY3QgPSB0YXJnZXRSZWN0IHx8IGdldFJlY3QodG9FbCk7XG4gIGV2dC53aWxsSW5zZXJ0QWZ0ZXIgPSB3aWxsSW5zZXJ0QWZ0ZXI7XG4gIGV2dC5vcmlnaW5hbEV2ZW50ID0gb3JpZ2luYWxFdmVudDtcbiAgZnJvbUVsLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgaWYgKG9uTW92ZUZuKSB7XG4gICAgcmV0VmFsID0gb25Nb3ZlRm4uY2FsbChzb3J0YWJsZSwgZXZ0LCBvcmlnaW5hbEV2ZW50KTtcbiAgfVxuICByZXR1cm4gcmV0VmFsO1xufVxuZnVuY3Rpb24gX2Rpc2FibGVEcmFnZ2FibGUoZWwpIHtcbiAgZWwuZHJhZ2dhYmxlID0gZmFsc2U7XG59XG5mdW5jdGlvbiBfdW5zaWxlbnQoKSB7XG4gIF9zaWxlbnQgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIF9naG9zdElzRmlyc3QoZXZ0LCB2ZXJ0aWNhbCwgc29ydGFibGUpIHtcbiAgdmFyIGZpcnN0RWxSZWN0ID0gZ2V0UmVjdChnZXRDaGlsZChzb3J0YWJsZS5lbCwgMCwgc29ydGFibGUub3B0aW9ucywgdHJ1ZSkpO1xuICB2YXIgY2hpbGRDb250YWluaW5nUmVjdCA9IGdldENoaWxkQ29udGFpbmluZ1JlY3RGcm9tRWxlbWVudChzb3J0YWJsZS5lbCwgc29ydGFibGUub3B0aW9ucywgZ2hvc3RFbCk7XG4gIHZhciBzcGFjZXIgPSAxMDtcbiAgcmV0dXJuIHZlcnRpY2FsID8gZXZ0LmNsaWVudFggPCBjaGlsZENvbnRhaW5pbmdSZWN0LmxlZnQgLSBzcGFjZXIgfHwgZXZ0LmNsaWVudFkgPCBmaXJzdEVsUmVjdC50b3AgJiYgZXZ0LmNsaWVudFggPCBmaXJzdEVsUmVjdC5yaWdodCA6IGV2dC5jbGllbnRZIDwgY2hpbGRDb250YWluaW5nUmVjdC50b3AgLSBzcGFjZXIgfHwgZXZ0LmNsaWVudFkgPCBmaXJzdEVsUmVjdC5ib3R0b20gJiYgZXZ0LmNsaWVudFggPCBmaXJzdEVsUmVjdC5sZWZ0O1xufVxuZnVuY3Rpb24gX2dob3N0SXNMYXN0KGV2dCwgdmVydGljYWwsIHNvcnRhYmxlKSB7XG4gIHZhciBsYXN0RWxSZWN0ID0gZ2V0UmVjdChsYXN0Q2hpbGQoc29ydGFibGUuZWwsIHNvcnRhYmxlLm9wdGlvbnMuZHJhZ2dhYmxlKSk7XG4gIHZhciBjaGlsZENvbnRhaW5pbmdSZWN0ID0gZ2V0Q2hpbGRDb250YWluaW5nUmVjdEZyb21FbGVtZW50KHNvcnRhYmxlLmVsLCBzb3J0YWJsZS5vcHRpb25zLCBnaG9zdEVsKTtcbiAgdmFyIHNwYWNlciA9IDEwO1xuICByZXR1cm4gdmVydGljYWwgPyBldnQuY2xpZW50WCA+IGNoaWxkQ29udGFpbmluZ1JlY3QucmlnaHQgKyBzcGFjZXIgfHwgZXZ0LmNsaWVudFkgPiBsYXN0RWxSZWN0LmJvdHRvbSAmJiBldnQuY2xpZW50WCA+IGxhc3RFbFJlY3QubGVmdCA6IGV2dC5jbGllbnRZID4gY2hpbGRDb250YWluaW5nUmVjdC5ib3R0b20gKyBzcGFjZXIgfHwgZXZ0LmNsaWVudFggPiBsYXN0RWxSZWN0LnJpZ2h0ICYmIGV2dC5jbGllbnRZID4gbGFzdEVsUmVjdC50b3A7XG59XG5mdW5jdGlvbiBfZ2V0U3dhcERpcmVjdGlvbihldnQsIHRhcmdldCwgdGFyZ2V0UmVjdCwgdmVydGljYWwsIHN3YXBUaHJlc2hvbGQsIGludmVydGVkU3dhcFRocmVzaG9sZCwgaW52ZXJ0U3dhcCwgaXNMYXN0VGFyZ2V0KSB7XG4gIHZhciBtb3VzZU9uQXhpcyA9IHZlcnRpY2FsID8gZXZ0LmNsaWVudFkgOiBldnQuY2xpZW50WCxcbiAgICB0YXJnZXRMZW5ndGggPSB2ZXJ0aWNhbCA/IHRhcmdldFJlY3QuaGVpZ2h0IDogdGFyZ2V0UmVjdC53aWR0aCxcbiAgICB0YXJnZXRTMSA9IHZlcnRpY2FsID8gdGFyZ2V0UmVjdC50b3AgOiB0YXJnZXRSZWN0LmxlZnQsXG4gICAgdGFyZ2V0UzIgPSB2ZXJ0aWNhbCA/IHRhcmdldFJlY3QuYm90dG9tIDogdGFyZ2V0UmVjdC5yaWdodCxcbiAgICBpbnZlcnQgPSBmYWxzZTtcbiAgaWYgKCFpbnZlcnRTd2FwKSB7XG4gICAgLy8gTmV2ZXIgaW52ZXJ0IG9yIGNyZWF0ZSBkcmFnRWwgc2hhZG93IHdoZW4gdGFyZ2V0IG1vdmVtZW5ldCBjYXVzZXMgbW91c2UgdG8gbW92ZSBwYXN0IHRoZSBlbmQgb2YgcmVndWxhciBzd2FwVGhyZXNob2xkXG4gICAgaWYgKGlzTGFzdFRhcmdldCAmJiB0YXJnZXRNb3ZlRGlzdGFuY2UgPCB0YXJnZXRMZW5ndGggKiBzd2FwVGhyZXNob2xkKSB7XG4gICAgICAvLyBtdWx0aXBsaWVkIG9ubHkgYnkgc3dhcFRocmVzaG9sZCBiZWNhdXNlIG1vdXNlIHdpbGwgYWxyZWFkeSBiZSBpbnNpZGUgdGFyZ2V0IGJ5ICgxIC0gdGhyZXNob2xkKSAqIHRhcmdldExlbmd0aCAvIDJcbiAgICAgIC8vIGNoZWNrIGlmIHBhc3QgZmlyc3QgaW52ZXJ0IHRocmVzaG9sZCBvbiBzaWRlIG9wcG9zaXRlIG9mIGxhc3REaXJlY3Rpb25cbiAgICAgIGlmICghcGFzdEZpcnN0SW52ZXJ0VGhyZXNoICYmIChsYXN0RGlyZWN0aW9uID09PSAxID8gbW91c2VPbkF4aXMgPiB0YXJnZXRTMSArIHRhcmdldExlbmd0aCAqIGludmVydGVkU3dhcFRocmVzaG9sZCAvIDIgOiBtb3VzZU9uQXhpcyA8IHRhcmdldFMyIC0gdGFyZ2V0TGVuZ3RoICogaW52ZXJ0ZWRTd2FwVGhyZXNob2xkIC8gMikpIHtcbiAgICAgICAgLy8gcGFzdCBmaXJzdCBpbnZlcnQgdGhyZXNob2xkLCBkbyBub3QgcmVzdHJpY3QgaW52ZXJ0ZWQgdGhyZXNob2xkIHRvIGRyYWdFbCBzaGFkb3dcbiAgICAgICAgcGFzdEZpcnN0SW52ZXJ0VGhyZXNoID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICghcGFzdEZpcnN0SW52ZXJ0VGhyZXNoKSB7XG4gICAgICAgIC8vIGRyYWdFbCBzaGFkb3cgKHRhcmdldCBtb3ZlIGRpc3RhbmNlIHNoYWRvdylcbiAgICAgICAgaWYgKGxhc3REaXJlY3Rpb24gPT09IDEgPyBtb3VzZU9uQXhpcyA8IHRhcmdldFMxICsgdGFyZ2V0TW92ZURpc3RhbmNlIC8vIG92ZXIgZHJhZ0VsIHNoYWRvd1xuICAgICAgICA6IG1vdXNlT25BeGlzID4gdGFyZ2V0UzIgLSB0YXJnZXRNb3ZlRGlzdGFuY2UpIHtcbiAgICAgICAgICByZXR1cm4gLWxhc3REaXJlY3Rpb247XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGludmVydCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlZ3VsYXJcbiAgICAgIGlmIChtb3VzZU9uQXhpcyA+IHRhcmdldFMxICsgdGFyZ2V0TGVuZ3RoICogKDEgLSBzd2FwVGhyZXNob2xkKSAvIDIgJiYgbW91c2VPbkF4aXMgPCB0YXJnZXRTMiAtIHRhcmdldExlbmd0aCAqICgxIC0gc3dhcFRocmVzaG9sZCkgLyAyKSB7XG4gICAgICAgIHJldHVybiBfZ2V0SW5zZXJ0RGlyZWN0aW9uKHRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGludmVydCA9IGludmVydCB8fCBpbnZlcnRTd2FwO1xuICBpZiAoaW52ZXJ0KSB7XG4gICAgLy8gSW52ZXJ0IG9mIHJlZ3VsYXJcbiAgICBpZiAobW91c2VPbkF4aXMgPCB0YXJnZXRTMSArIHRhcmdldExlbmd0aCAqIGludmVydGVkU3dhcFRocmVzaG9sZCAvIDIgfHwgbW91c2VPbkF4aXMgPiB0YXJnZXRTMiAtIHRhcmdldExlbmd0aCAqIGludmVydGVkU3dhcFRocmVzaG9sZCAvIDIpIHtcbiAgICAgIHJldHVybiBtb3VzZU9uQXhpcyA+IHRhcmdldFMxICsgdGFyZ2V0TGVuZ3RoIC8gMiA/IDEgOiAtMTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbi8qKlxyXG4gKiBHZXRzIHRoZSBkaXJlY3Rpb24gZHJhZ0VsIG11c3QgYmUgc3dhcHBlZCByZWxhdGl2ZSB0byB0YXJnZXQgaW4gb3JkZXIgdG8gbWFrZSBpdFxyXG4gKiBzZWVtIHRoYXQgZHJhZ0VsIGhhcyBiZWVuIFwiaW5zZXJ0ZWRcIiBpbnRvIHRoYXQgZWxlbWVudCdzIHBvc2l0aW9uXHJcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSB0YXJnZXQgICAgICAgVGhlIHRhcmdldCB3aG9zZSBwb3NpdGlvbiBkcmFnRWwgaXMgYmVpbmcgaW5zZXJ0ZWQgYXRcclxuICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgICAgICAgICAgICBEaXJlY3Rpb24gZHJhZ0VsIG11c3QgYmUgc3dhcHBlZFxyXG4gKi9cbmZ1bmN0aW9uIF9nZXRJbnNlcnREaXJlY3Rpb24odGFyZ2V0KSB7XG4gIGlmIChpbmRleChkcmFnRWwpIDwgaW5kZXgodGFyZ2V0KSkge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAtMTtcbiAgfVxufVxuXG4vKipcclxuICogR2VuZXJhdGUgaWRcclxuICogQHBhcmFtICAge0hUTUxFbGVtZW50fSBlbFxyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cbmZ1bmN0aW9uIF9nZW5lcmF0ZUlkKGVsKSB7XG4gIHZhciBzdHIgPSBlbC50YWdOYW1lICsgZWwuY2xhc3NOYW1lICsgZWwuc3JjICsgZWwuaHJlZiArIGVsLnRleHRDb250ZW50LFxuICAgIGkgPSBzdHIubGVuZ3RoLFxuICAgIHN1bSA9IDA7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBzdW0gKz0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gIH1cbiAgcmV0dXJuIHN1bS50b1N0cmluZygzNik7XG59XG5mdW5jdGlvbiBfc2F2ZUlucHV0Q2hlY2tlZFN0YXRlKHJvb3QpIHtcbiAgc2F2ZWRJbnB1dENoZWNrZWQubGVuZ3RoID0gMDtcbiAgdmFyIGlucHV0cyA9IHJvb3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XG4gIHZhciBpZHggPSBpbnB1dHMubGVuZ3RoO1xuICB3aGlsZSAoaWR4LS0pIHtcbiAgICB2YXIgZWwgPSBpbnB1dHNbaWR4XTtcbiAgICBlbC5jaGVja2VkICYmIHNhdmVkSW5wdXRDaGVja2VkLnB1c2goZWwpO1xuICB9XG59XG5mdW5jdGlvbiBfbmV4dFRpY2soZm4pIHtcbiAgcmV0dXJuIHNldFRpbWVvdXQoZm4sIDApO1xufVxuZnVuY3Rpb24gX2NhbmNlbE5leHRUaWNrKGlkKSB7XG4gIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufVxuXG4vLyBGaXhlZCAjOTczOlxuaWYgKGRvY3VtZW50RXhpc3RzKSB7XG4gIG9uKGRvY3VtZW50LCAndG91Y2htb3ZlJywgZnVuY3Rpb24gKGV2dCkge1xuICAgIGlmICgoU29ydGFibGUuYWN0aXZlIHx8IGF3YWl0aW5nRHJhZ1N0YXJ0ZWQpICYmIGV2dC5jYW5jZWxhYmxlKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBFeHBvcnQgdXRpbHNcblNvcnRhYmxlLnV0aWxzID0ge1xuICBvbjogb24sXG4gIG9mZjogb2ZmLFxuICBjc3M6IGNzcyxcbiAgZmluZDogZmluZCxcbiAgaXM6IGZ1bmN0aW9uIGlzKGVsLCBzZWxlY3Rvcikge1xuICAgIHJldHVybiAhIWNsb3Nlc3QoZWwsIHNlbGVjdG9yLCBlbCwgZmFsc2UpO1xuICB9LFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdGhyb3R0bGU6IHRocm90dGxlLFxuICBjbG9zZXN0OiBjbG9zZXN0LFxuICB0b2dnbGVDbGFzczogdG9nZ2xlQ2xhc3MsXG4gIGNsb25lOiBjbG9uZSxcbiAgaW5kZXg6IGluZGV4LFxuICBuZXh0VGljazogX25leHRUaWNrLFxuICBjYW5jZWxOZXh0VGljazogX2NhbmNlbE5leHRUaWNrLFxuICBkZXRlY3REaXJlY3Rpb246IF9kZXRlY3REaXJlY3Rpb24sXG4gIGdldENoaWxkOiBnZXRDaGlsZCxcbiAgZXhwYW5kbzogZXhwYW5kb1xufTtcblxuLyoqXHJcbiAqIEdldCB0aGUgU29ydGFibGUgaW5zdGFuY2Ugb2YgYW4gZWxlbWVudFxyXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudFxyXG4gKiBAcmV0dXJuIHtTb3J0YWJsZXx1bmRlZmluZWR9ICAgICAgICAgVGhlIGluc3RhbmNlIG9mIFNvcnRhYmxlXHJcbiAqL1xuU29ydGFibGUuZ2V0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnRbZXhwYW5kb107XG59O1xuXG4vKipcclxuICogTW91bnQgYSBwbHVnaW4gdG8gU29ydGFibGVcclxuICogQHBhcmFtICB7Li4uU29ydGFibGVQbHVnaW58U29ydGFibGVQbHVnaW5bXX0gcGx1Z2lucyAgICAgICBQbHVnaW5zIGJlaW5nIG1vdW50ZWRcclxuICovXG5Tb3J0YWJsZS5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBsdWdpbnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcGx1Z2luc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuICBpZiAocGx1Z2luc1swXS5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHBsdWdpbnMgPSBwbHVnaW5zWzBdO1xuICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgIGlmICghcGx1Z2luLnByb3RvdHlwZSB8fCAhcGx1Z2luLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcikge1xuICAgICAgdGhyb3cgXCJTb3J0YWJsZTogTW91bnRlZCBwbHVnaW4gbXVzdCBiZSBhIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLCBub3QgXCIuY29uY2F0KHt9LnRvU3RyaW5nLmNhbGwocGx1Z2luKSk7XG4gICAgfVxuICAgIGlmIChwbHVnaW4udXRpbHMpIFNvcnRhYmxlLnV0aWxzID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIFNvcnRhYmxlLnV0aWxzKSwgcGx1Z2luLnV0aWxzKTtcbiAgICBQbHVnaW5NYW5hZ2VyLm1vdW50KHBsdWdpbik7XG4gIH0pO1xufTtcblxuLyoqXHJcbiAqIENyZWF0ZSBzb3J0YWJsZSBpbnN0YW5jZVxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSAgZWxcclxuICogQHBhcmFtIHtPYmplY3R9ICAgICAgW29wdGlvbnNdXHJcbiAqL1xuU29ydGFibGUuY3JlYXRlID0gZnVuY3Rpb24gKGVsLCBvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgU29ydGFibGUoZWwsIG9wdGlvbnMpO1xufTtcblxuLy8gRXhwb3J0XG5Tb3J0YWJsZS52ZXJzaW9uID0gdmVyc2lvbjtcblxudmFyIGF1dG9TY3JvbGxzID0gW10sXG4gIHNjcm9sbEVsLFxuICBzY3JvbGxSb290RWwsXG4gIHNjcm9sbGluZyA9IGZhbHNlLFxuICBsYXN0QXV0b1Njcm9sbFgsXG4gIGxhc3RBdXRvU2Nyb2xsWSxcbiAgdG91Y2hFdnQkMSxcbiAgcG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWw7XG5mdW5jdGlvbiBBdXRvU2Nyb2xsUGx1Z2luKCkge1xuICBmdW5jdGlvbiBBdXRvU2Nyb2xsKCkge1xuICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBmb3JjZUF1dG9TY3JvbGxGYWxsYmFjazogZmFsc2UsXG4gICAgICBzY3JvbGxTZW5zaXRpdml0eTogMzAsXG4gICAgICBzY3JvbGxTcGVlZDogMTAsXG4gICAgICBidWJibGVTY3JvbGw6IHRydWVcbiAgICB9O1xuXG4gICAgLy8gQmluZCBhbGwgcHJpdmF0ZSBtZXRob2RzXG4gICAgZm9yICh2YXIgZm4gaW4gdGhpcykge1xuICAgICAgaWYgKGZuLmNoYXJBdCgwKSA9PT0gJ18nICYmIHR5cGVvZiB0aGlzW2ZuXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzW2ZuXSA9IHRoaXNbZm5dLmJpbmQodGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEF1dG9TY3JvbGwucHJvdG90eXBlID0ge1xuICAgIGRyYWdTdGFydGVkOiBmdW5jdGlvbiBkcmFnU3RhcnRlZChfcmVmKSB7XG4gICAgICB2YXIgb3JpZ2luYWxFdmVudCA9IF9yZWYub3JpZ2luYWxFdmVudDtcbiAgICAgIGlmICh0aGlzLnNvcnRhYmxlLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgICAgICBvbihkb2N1bWVudCwgJ2RyYWdvdmVyJywgdGhpcy5faGFuZGxlQXV0b1Njcm9sbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN1cHBvcnRQb2ludGVyKSB7XG4gICAgICAgICAgb24oZG9jdW1lbnQsICdwb2ludGVybW92ZScsIHRoaXMuX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbCk7XG4gICAgICAgIH0gZWxzZSBpZiAob3JpZ2luYWxFdmVudC50b3VjaGVzKSB7XG4gICAgICAgICAgb24oZG9jdW1lbnQsICd0b3VjaG1vdmUnLCB0aGlzLl9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9uKGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgdGhpcy5faGFuZGxlRmFsbGJhY2tBdXRvU2Nyb2xsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZHJhZ092ZXJDb21wbGV0ZWQ6IGZ1bmN0aW9uIGRyYWdPdmVyQ29tcGxldGVkKF9yZWYyKSB7XG4gICAgICB2YXIgb3JpZ2luYWxFdmVudCA9IF9yZWYyLm9yaWdpbmFsRXZlbnQ7XG4gICAgICAvLyBGb3Igd2hlbiBidWJibGluZyBpcyBjYW5jZWxlZCBhbmQgdXNpbmcgZmFsbGJhY2sgKGZhbGxiYWNrICd0b3VjaG1vdmUnIGFsd2F5cyByZWFjaGVkKVxuICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuZHJhZ092ZXJCdWJibGUgJiYgIW9yaWdpbmFsRXZlbnQucm9vdEVsKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUF1dG9TY3JvbGwob3JpZ2luYWxFdmVudCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkcm9wOiBmdW5jdGlvbiBkcm9wKCkge1xuICAgICAgaWYgKHRoaXMuc29ydGFibGUubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgICAgIG9mZihkb2N1bWVudCwgJ2RyYWdvdmVyJywgdGhpcy5faGFuZGxlQXV0b1Njcm9sbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvZmYoZG9jdW1lbnQsICdwb2ludGVybW92ZScsIHRoaXMuX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbCk7XG4gICAgICAgIG9mZihkb2N1bWVudCwgJ3RvdWNobW92ZScsIHRoaXMuX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbCk7XG4gICAgICAgIG9mZihkb2N1bWVudCwgJ21vdXNlbW92ZScsIHRoaXMuX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbCk7XG4gICAgICB9XG4gICAgICBjbGVhclBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsKCk7XG4gICAgICBjbGVhckF1dG9TY3JvbGxzKCk7XG4gICAgICBjYW5jZWxUaHJvdHRsZSgpO1xuICAgIH0sXG4gICAgbnVsbGluZzogZnVuY3Rpb24gbnVsbGluZygpIHtcbiAgICAgIHRvdWNoRXZ0JDEgPSBzY3JvbGxSb290RWwgPSBzY3JvbGxFbCA9IHNjcm9sbGluZyA9IHBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsID0gbGFzdEF1dG9TY3JvbGxYID0gbGFzdEF1dG9TY3JvbGxZID0gbnVsbDtcbiAgICAgIGF1dG9TY3JvbGxzLmxlbmd0aCA9IDA7XG4gICAgfSxcbiAgICBfaGFuZGxlRmFsbGJhY2tBdXRvU2Nyb2xsOiBmdW5jdGlvbiBfaGFuZGxlRmFsbGJhY2tBdXRvU2Nyb2xsKGV2dCkge1xuICAgICAgdGhpcy5faGFuZGxlQXV0b1Njcm9sbChldnQsIHRydWUpO1xuICAgIH0sXG4gICAgX2hhbmRsZUF1dG9TY3JvbGw6IGZ1bmN0aW9uIF9oYW5kbGVBdXRvU2Nyb2xsKGV2dCwgZmFsbGJhY2spIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICB2YXIgeCA9IChldnQudG91Y2hlcyA/IGV2dC50b3VjaGVzWzBdIDogZXZ0KS5jbGllbnRYLFxuICAgICAgICB5ID0gKGV2dC50b3VjaGVzID8gZXZ0LnRvdWNoZXNbMF0gOiBldnQpLmNsaWVudFksXG4gICAgICAgIGVsZW0gPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHgsIHkpO1xuICAgICAgdG91Y2hFdnQkMSA9IGV2dDtcblxuICAgICAgLy8gSUUgZG9lcyBub3Qgc2VlbSB0byBoYXZlIG5hdGl2ZSBhdXRvc2Nyb2xsLFxuICAgICAgLy8gRWRnZSdzIGF1dG9zY3JvbGwgc2VlbXMgdG9vIGNvbmRpdGlvbmFsLFxuICAgICAgLy8gTUFDT1MgU2FmYXJpIGRvZXMgbm90IGhhdmUgYXV0b3Njcm9sbCxcbiAgICAgIC8vIEZpcmVmb3ggYW5kIENocm9tZSBhcmUgZ29vZFxuICAgICAgaWYgKGZhbGxiYWNrIHx8IHRoaXMub3B0aW9ucy5mb3JjZUF1dG9TY3JvbGxGYWxsYmFjayB8fCBFZGdlIHx8IElFMTFPckxlc3MgfHwgU2FmYXJpKSB7XG4gICAgICAgIGF1dG9TY3JvbGwoZXZ0LCB0aGlzLm9wdGlvbnMsIGVsZW0sIGZhbGxiYWNrKTtcblxuICAgICAgICAvLyBMaXN0ZW5lciBmb3IgcG9pbnRlciBlbGVtZW50IGNoYW5nZVxuICAgICAgICB2YXIgb2dFbGVtU2Nyb2xsZXIgPSBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChlbGVtLCB0cnVlKTtcbiAgICAgICAgaWYgKHNjcm9sbGluZyAmJiAoIXBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsIHx8IHggIT09IGxhc3RBdXRvU2Nyb2xsWCB8fCB5ICE9PSBsYXN0QXV0b1Njcm9sbFkpKSB7XG4gICAgICAgICAgcG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwgJiYgY2xlYXJQb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCgpO1xuICAgICAgICAgIC8vIERldGVjdCBmb3IgcG9pbnRlciBlbGVtIGNoYW5nZSwgZW11bGF0aW5nIG5hdGl2ZSBEbkQgYmVoYXZpb3VyXG4gICAgICAgICAgcG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbmV3RWxlbSA9IGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSksIHRydWUpO1xuICAgICAgICAgICAgaWYgKG5ld0VsZW0gIT09IG9nRWxlbVNjcm9sbGVyKSB7XG4gICAgICAgICAgICAgIG9nRWxlbVNjcm9sbGVyID0gbmV3RWxlbTtcbiAgICAgICAgICAgICAgY2xlYXJBdXRvU2Nyb2xscygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXV0b1Njcm9sbChldnQsIF90aGlzLm9wdGlvbnMsIG5ld0VsZW0sIGZhbGxiYWNrKTtcbiAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgbGFzdEF1dG9TY3JvbGxYID0geDtcbiAgICAgICAgICBsYXN0QXV0b1Njcm9sbFkgPSB5O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpZiBEbkQgaXMgZW5hYmxlZCAoYW5kIGJyb3dzZXIgaGFzIGdvb2QgYXV0b3Njcm9sbGluZyksIGZpcnN0IGF1dG9zY3JvbGwgd2lsbCBhbHJlYWR5IHNjcm9sbCwgc28gZ2V0IHBhcmVudCBhdXRvc2Nyb2xsIG9mIGZpcnN0IGF1dG9zY3JvbGxcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuYnViYmxlU2Nyb2xsIHx8IGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KGVsZW0sIHRydWUpID09PSBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCkpIHtcbiAgICAgICAgICBjbGVhckF1dG9TY3JvbGxzKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF1dG9TY3JvbGwoZXZ0LCB0aGlzLm9wdGlvbnMsIGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KGVsZW0sIGZhbHNlKSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzKEF1dG9TY3JvbGwsIHtcbiAgICBwbHVnaW5OYW1lOiAnc2Nyb2xsJyxcbiAgICBpbml0aWFsaXplQnlEZWZhdWx0OiB0cnVlXG4gIH0pO1xufVxuZnVuY3Rpb24gY2xlYXJBdXRvU2Nyb2xscygpIHtcbiAgYXV0b1Njcm9sbHMuZm9yRWFjaChmdW5jdGlvbiAoYXV0b1Njcm9sbCkge1xuICAgIGNsZWFySW50ZXJ2YWwoYXV0b1Njcm9sbC5waWQpO1xuICB9KTtcbiAgYXV0b1Njcm9sbHMgPSBbXTtcbn1cbmZ1bmN0aW9uIGNsZWFyUG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwoKSB7XG4gIGNsZWFySW50ZXJ2YWwocG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwpO1xufVxudmFyIGF1dG9TY3JvbGwgPSB0aHJvdHRsZShmdW5jdGlvbiAoZXZ0LCBvcHRpb25zLCByb290RWwsIGlzRmFsbGJhY2spIHtcbiAgLy8gQnVnOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01MDU1MjFcbiAgaWYgKCFvcHRpb25zLnNjcm9sbCkgcmV0dXJuO1xuICB2YXIgeCA9IChldnQudG91Y2hlcyA/IGV2dC50b3VjaGVzWzBdIDogZXZ0KS5jbGllbnRYLFxuICAgIHkgPSAoZXZ0LnRvdWNoZXMgPyBldnQudG91Y2hlc1swXSA6IGV2dCkuY2xpZW50WSxcbiAgICBzZW5zID0gb3B0aW9ucy5zY3JvbGxTZW5zaXRpdml0eSxcbiAgICBzcGVlZCA9IG9wdGlvbnMuc2Nyb2xsU3BlZWQsXG4gICAgd2luU2Nyb2xsZXIgPSBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCk7XG4gIHZhciBzY3JvbGxUaGlzSW5zdGFuY2UgPSBmYWxzZSxcbiAgICBzY3JvbGxDdXN0b21GbjtcblxuICAvLyBOZXcgc2Nyb2xsIHJvb3QsIHNldCBzY3JvbGxFbFxuICBpZiAoc2Nyb2xsUm9vdEVsICE9PSByb290RWwpIHtcbiAgICBzY3JvbGxSb290RWwgPSByb290RWw7XG4gICAgY2xlYXJBdXRvU2Nyb2xscygpO1xuICAgIHNjcm9sbEVsID0gb3B0aW9ucy5zY3JvbGw7XG4gICAgc2Nyb2xsQ3VzdG9tRm4gPSBvcHRpb25zLnNjcm9sbEZuO1xuICAgIGlmIChzY3JvbGxFbCA9PT0gdHJ1ZSkge1xuICAgICAgc2Nyb2xsRWwgPSBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChyb290RWwsIHRydWUpO1xuICAgIH1cbiAgfVxuICB2YXIgbGF5ZXJzT3V0ID0gMDtcbiAgdmFyIGN1cnJlbnRQYXJlbnQgPSBzY3JvbGxFbDtcbiAgZG8ge1xuICAgIHZhciBlbCA9IGN1cnJlbnRQYXJlbnQsXG4gICAgICByZWN0ID0gZ2V0UmVjdChlbCksXG4gICAgICB0b3AgPSByZWN0LnRvcCxcbiAgICAgIGJvdHRvbSA9IHJlY3QuYm90dG9tLFxuICAgICAgbGVmdCA9IHJlY3QubGVmdCxcbiAgICAgIHJpZ2h0ID0gcmVjdC5yaWdodCxcbiAgICAgIHdpZHRoID0gcmVjdC53aWR0aCxcbiAgICAgIGhlaWdodCA9IHJlY3QuaGVpZ2h0LFxuICAgICAgY2FuU2Nyb2xsWCA9IHZvaWQgMCxcbiAgICAgIGNhblNjcm9sbFkgPSB2b2lkIDAsXG4gICAgICBzY3JvbGxXaWR0aCA9IGVsLnNjcm9sbFdpZHRoLFxuICAgICAgc2Nyb2xsSGVpZ2h0ID0gZWwuc2Nyb2xsSGVpZ2h0LFxuICAgICAgZWxDU1MgPSBjc3MoZWwpLFxuICAgICAgc2Nyb2xsUG9zWCA9IGVsLnNjcm9sbExlZnQsXG4gICAgICBzY3JvbGxQb3NZID0gZWwuc2Nyb2xsVG9wO1xuICAgIGlmIChlbCA9PT0gd2luU2Nyb2xsZXIpIHtcbiAgICAgIGNhblNjcm9sbFggPSB3aWR0aCA8IHNjcm9sbFdpZHRoICYmIChlbENTUy5vdmVyZmxvd1ggPT09ICdhdXRvJyB8fCBlbENTUy5vdmVyZmxvd1ggPT09ICdzY3JvbGwnIHx8IGVsQ1NTLm92ZXJmbG93WCA9PT0gJ3Zpc2libGUnKTtcbiAgICAgIGNhblNjcm9sbFkgPSBoZWlnaHQgPCBzY3JvbGxIZWlnaHQgJiYgKGVsQ1NTLm92ZXJmbG93WSA9PT0gJ2F1dG8nIHx8IGVsQ1NTLm92ZXJmbG93WSA9PT0gJ3Njcm9sbCcgfHwgZWxDU1Mub3ZlcmZsb3dZID09PSAndmlzaWJsZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYW5TY3JvbGxYID0gd2lkdGggPCBzY3JvbGxXaWR0aCAmJiAoZWxDU1Mub3ZlcmZsb3dYID09PSAnYXV0bycgfHwgZWxDU1Mub3ZlcmZsb3dYID09PSAnc2Nyb2xsJyk7XG4gICAgICBjYW5TY3JvbGxZID0gaGVpZ2h0IDwgc2Nyb2xsSGVpZ2h0ICYmIChlbENTUy5vdmVyZmxvd1kgPT09ICdhdXRvJyB8fCBlbENTUy5vdmVyZmxvd1kgPT09ICdzY3JvbGwnKTtcbiAgICB9XG4gICAgdmFyIHZ4ID0gY2FuU2Nyb2xsWCAmJiAoTWF0aC5hYnMocmlnaHQgLSB4KSA8PSBzZW5zICYmIHNjcm9sbFBvc1ggKyB3aWR0aCA8IHNjcm9sbFdpZHRoKSAtIChNYXRoLmFicyhsZWZ0IC0geCkgPD0gc2VucyAmJiAhIXNjcm9sbFBvc1gpO1xuICAgIHZhciB2eSA9IGNhblNjcm9sbFkgJiYgKE1hdGguYWJzKGJvdHRvbSAtIHkpIDw9IHNlbnMgJiYgc2Nyb2xsUG9zWSArIGhlaWdodCA8IHNjcm9sbEhlaWdodCkgLSAoTWF0aC5hYnModG9wIC0geSkgPD0gc2VucyAmJiAhIXNjcm9sbFBvc1kpO1xuICAgIGlmICghYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gbGF5ZXJzT3V0OyBpKyspIHtcbiAgICAgICAgaWYgKCFhdXRvU2Nyb2xsc1tpXSkge1xuICAgICAgICAgIGF1dG9TY3JvbGxzW2ldID0ge307XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGF1dG9TY3JvbGxzW2xheWVyc091dF0udnggIT0gdnggfHwgYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS52eSAhPSB2eSB8fCBhdXRvU2Nyb2xsc1tsYXllcnNPdXRdLmVsICE9PSBlbCkge1xuICAgICAgYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS5lbCA9IGVsO1xuICAgICAgYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS52eCA9IHZ4O1xuICAgICAgYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS52eSA9IHZ5O1xuICAgICAgY2xlYXJJbnRlcnZhbChhdXRvU2Nyb2xsc1tsYXllcnNPdXRdLnBpZCk7XG4gICAgICBpZiAodnggIT0gMCB8fCB2eSAhPSAwKSB7XG4gICAgICAgIHNjcm9sbFRoaXNJbnN0YW5jZSA9IHRydWU7XG4gICAgICAgIC8qIGpzaGludCBsb29wZnVuYzp0cnVlICovXG4gICAgICAgIGF1dG9TY3JvbGxzW2xheWVyc091dF0ucGlkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIGVtdWxhdGUgZHJhZyBvdmVyIGR1cmluZyBhdXRvc2Nyb2xsIChmYWxsYmFjayksIGVtdWxhdGluZyBuYXRpdmUgRG5EIGJlaGF2aW91clxuICAgICAgICAgIGlmIChpc0ZhbGxiYWNrICYmIHRoaXMubGF5ZXIgPT09IDApIHtcbiAgICAgICAgICAgIFNvcnRhYmxlLmFjdGl2ZS5fb25Ub3VjaE1vdmUodG91Y2hFdnQkMSk7IC8vIFRvIG1vdmUgZ2hvc3QgaWYgaXQgaXMgcG9zaXRpb25lZCBhYnNvbHV0ZWx5XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBzY3JvbGxPZmZzZXRZID0gYXV0b1Njcm9sbHNbdGhpcy5sYXllcl0udnkgPyBhdXRvU2Nyb2xsc1t0aGlzLmxheWVyXS52eSAqIHNwZWVkIDogMDtcbiAgICAgICAgICB2YXIgc2Nyb2xsT2Zmc2V0WCA9IGF1dG9TY3JvbGxzW3RoaXMubGF5ZXJdLnZ4ID8gYXV0b1Njcm9sbHNbdGhpcy5sYXllcl0udnggKiBzcGVlZCA6IDA7XG4gICAgICAgICAgaWYgKHR5cGVvZiBzY3JvbGxDdXN0b21GbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHNjcm9sbEN1c3RvbUZuLmNhbGwoU29ydGFibGUuZHJhZ2dlZC5wYXJlbnROb2RlW2V4cGFuZG9dLCBzY3JvbGxPZmZzZXRYLCBzY3JvbGxPZmZzZXRZLCBldnQsIHRvdWNoRXZ0JDEsIGF1dG9TY3JvbGxzW3RoaXMubGF5ZXJdLmVsKSAhPT0gJ2NvbnRpbnVlJykge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHNjcm9sbEJ5KGF1dG9TY3JvbGxzW3RoaXMubGF5ZXJdLmVsLCBzY3JvbGxPZmZzZXRYLCBzY3JvbGxPZmZzZXRZKTtcbiAgICAgICAgfS5iaW5kKHtcbiAgICAgICAgICBsYXllcjogbGF5ZXJzT3V0XG4gICAgICAgIH0pLCAyNCk7XG4gICAgICB9XG4gICAgfVxuICAgIGxheWVyc091dCsrO1xuICB9IHdoaWxlIChvcHRpb25zLmJ1YmJsZVNjcm9sbCAmJiBjdXJyZW50UGFyZW50ICE9PSB3aW5TY3JvbGxlciAmJiAoY3VycmVudFBhcmVudCA9IGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KGN1cnJlbnRQYXJlbnQsIGZhbHNlKSkpO1xuICBzY3JvbGxpbmcgPSBzY3JvbGxUaGlzSW5zdGFuY2U7IC8vIGluIGNhc2UgYW5vdGhlciBmdW5jdGlvbiBjYXRjaGVzIHNjcm9sbGluZyBhcyBmYWxzZSBpbiBiZXR3ZWVuIHdoZW4gaXQgaXMgbm90XG59LCAzMCk7XG5cbnZhciBkcm9wID0gZnVuY3Rpb24gZHJvcChfcmVmKSB7XG4gIHZhciBvcmlnaW5hbEV2ZW50ID0gX3JlZi5vcmlnaW5hbEV2ZW50LFxuICAgIHB1dFNvcnRhYmxlID0gX3JlZi5wdXRTb3J0YWJsZSxcbiAgICBkcmFnRWwgPSBfcmVmLmRyYWdFbCxcbiAgICBhY3RpdmVTb3J0YWJsZSA9IF9yZWYuYWN0aXZlU29ydGFibGUsXG4gICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50ID0gX3JlZi5kaXNwYXRjaFNvcnRhYmxlRXZlbnQsXG4gICAgaGlkZUdob3N0Rm9yVGFyZ2V0ID0gX3JlZi5oaWRlR2hvc3RGb3JUYXJnZXQsXG4gICAgdW5oaWRlR2hvc3RGb3JUYXJnZXQgPSBfcmVmLnVuaGlkZUdob3N0Rm9yVGFyZ2V0O1xuICBpZiAoIW9yaWdpbmFsRXZlbnQpIHJldHVybjtcbiAgdmFyIHRvU29ydGFibGUgPSBwdXRTb3J0YWJsZSB8fCBhY3RpdmVTb3J0YWJsZTtcbiAgaGlkZUdob3N0Rm9yVGFyZ2V0KCk7XG4gIHZhciB0b3VjaCA9IG9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXMgJiYgb3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPyBvcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdIDogb3JpZ2luYWxFdmVudDtcbiAgdmFyIHRhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQodG91Y2guY2xpZW50WCwgdG91Y2guY2xpZW50WSk7XG4gIHVuaGlkZUdob3N0Rm9yVGFyZ2V0KCk7XG4gIGlmICh0b1NvcnRhYmxlICYmICF0b1NvcnRhYmxlLmVsLmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICBkaXNwYXRjaFNvcnRhYmxlRXZlbnQoJ3NwaWxsJyk7XG4gICAgdGhpcy5vblNwaWxsKHtcbiAgICAgIGRyYWdFbDogZHJhZ0VsLFxuICAgICAgcHV0U29ydGFibGU6IHB1dFNvcnRhYmxlXG4gICAgfSk7XG4gIH1cbn07XG5mdW5jdGlvbiBSZXZlcnQoKSB7fVxuUmV2ZXJ0LnByb3RvdHlwZSA9IHtcbiAgc3RhcnRJbmRleDogbnVsbCxcbiAgZHJhZ1N0YXJ0OiBmdW5jdGlvbiBkcmFnU3RhcnQoX3JlZjIpIHtcbiAgICB2YXIgb2xkRHJhZ2dhYmxlSW5kZXggPSBfcmVmMi5vbGREcmFnZ2FibGVJbmRleDtcbiAgICB0aGlzLnN0YXJ0SW5kZXggPSBvbGREcmFnZ2FibGVJbmRleDtcbiAgfSxcbiAgb25TcGlsbDogZnVuY3Rpb24gb25TcGlsbChfcmVmMykge1xuICAgIHZhciBkcmFnRWwgPSBfcmVmMy5kcmFnRWwsXG4gICAgICBwdXRTb3J0YWJsZSA9IF9yZWYzLnB1dFNvcnRhYmxlO1xuICAgIHRoaXMuc29ydGFibGUuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgaWYgKHB1dFNvcnRhYmxlKSB7XG4gICAgICBwdXRTb3J0YWJsZS5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcbiAgICB9XG4gICAgdmFyIG5leHRTaWJsaW5nID0gZ2V0Q2hpbGQodGhpcy5zb3J0YWJsZS5lbCwgdGhpcy5zdGFydEluZGV4LCB0aGlzLm9wdGlvbnMpO1xuICAgIGlmIChuZXh0U2libGluZykge1xuICAgICAgdGhpcy5zb3J0YWJsZS5lbC5pbnNlcnRCZWZvcmUoZHJhZ0VsLCBuZXh0U2libGluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc29ydGFibGUuZWwuYXBwZW5kQ2hpbGQoZHJhZ0VsKTtcbiAgICB9XG4gICAgdGhpcy5zb3J0YWJsZS5hbmltYXRlQWxsKCk7XG4gICAgaWYgKHB1dFNvcnRhYmxlKSB7XG4gICAgICBwdXRTb3J0YWJsZS5hbmltYXRlQWxsKCk7XG4gICAgfVxuICB9LFxuICBkcm9wOiBkcm9wXG59O1xuX2V4dGVuZHMoUmV2ZXJ0LCB7XG4gIHBsdWdpbk5hbWU6ICdyZXZlcnRPblNwaWxsJ1xufSk7XG5mdW5jdGlvbiBSZW1vdmUoKSB7fVxuUmVtb3ZlLnByb3RvdHlwZSA9IHtcbiAgb25TcGlsbDogZnVuY3Rpb24gb25TcGlsbChfcmVmNCkge1xuICAgIHZhciBkcmFnRWwgPSBfcmVmNC5kcmFnRWwsXG4gICAgICBwdXRTb3J0YWJsZSA9IF9yZWY0LnB1dFNvcnRhYmxlO1xuICAgIHZhciBwYXJlbnRTb3J0YWJsZSA9IHB1dFNvcnRhYmxlIHx8IHRoaXMuc29ydGFibGU7XG4gICAgcGFyZW50U29ydGFibGUuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgZHJhZ0VsLnBhcmVudE5vZGUgJiYgZHJhZ0VsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZHJhZ0VsKTtcbiAgICBwYXJlbnRTb3J0YWJsZS5hbmltYXRlQWxsKCk7XG4gIH0sXG4gIGRyb3A6IGRyb3Bcbn07XG5fZXh0ZW5kcyhSZW1vdmUsIHtcbiAgcGx1Z2luTmFtZTogJ3JlbW92ZU9uU3BpbGwnXG59KTtcblxudmFyIGxhc3RTd2FwRWw7XG5mdW5jdGlvbiBTd2FwUGx1Z2luKCkge1xuICBmdW5jdGlvbiBTd2FwKCkge1xuICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICBzd2FwQ2xhc3M6ICdzb3J0YWJsZS1zd2FwLWhpZ2hsaWdodCdcbiAgICB9O1xuICB9XG4gIFN3YXAucHJvdG90eXBlID0ge1xuICAgIGRyYWdTdGFydDogZnVuY3Rpb24gZHJhZ1N0YXJ0KF9yZWYpIHtcbiAgICAgIHZhciBkcmFnRWwgPSBfcmVmLmRyYWdFbDtcbiAgICAgIGxhc3RTd2FwRWwgPSBkcmFnRWw7XG4gICAgfSxcbiAgICBkcmFnT3ZlclZhbGlkOiBmdW5jdGlvbiBkcmFnT3ZlclZhbGlkKF9yZWYyKSB7XG4gICAgICB2YXIgY29tcGxldGVkID0gX3JlZjIuY29tcGxldGVkLFxuICAgICAgICB0YXJnZXQgPSBfcmVmMi50YXJnZXQsXG4gICAgICAgIG9uTW92ZSA9IF9yZWYyLm9uTW92ZSxcbiAgICAgICAgYWN0aXZlU29ydGFibGUgPSBfcmVmMi5hY3RpdmVTb3J0YWJsZSxcbiAgICAgICAgY2hhbmdlZCA9IF9yZWYyLmNoYW5nZWQsXG4gICAgICAgIGNhbmNlbCA9IF9yZWYyLmNhbmNlbDtcbiAgICAgIGlmICghYWN0aXZlU29ydGFibGUub3B0aW9ucy5zd2FwKSByZXR1cm47XG4gICAgICB2YXIgZWwgPSB0aGlzLnNvcnRhYmxlLmVsLFxuICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQgIT09IGVsKSB7XG4gICAgICAgIHZhciBwcmV2U3dhcEVsID0gbGFzdFN3YXBFbDtcbiAgICAgICAgaWYgKG9uTW92ZSh0YXJnZXQpICE9PSBmYWxzZSkge1xuICAgICAgICAgIHRvZ2dsZUNsYXNzKHRhcmdldCwgb3B0aW9ucy5zd2FwQ2xhc3MsIHRydWUpO1xuICAgICAgICAgIGxhc3RTd2FwRWwgPSB0YXJnZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFzdFN3YXBFbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZXZTd2FwRWwgJiYgcHJldlN3YXBFbCAhPT0gbGFzdFN3YXBFbCkge1xuICAgICAgICAgIHRvZ2dsZUNsYXNzKHByZXZTd2FwRWwsIG9wdGlvbnMuc3dhcENsYXNzLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNoYW5nZWQoKTtcbiAgICAgIGNvbXBsZXRlZCh0cnVlKTtcbiAgICAgIGNhbmNlbCgpO1xuICAgIH0sXG4gICAgZHJvcDogZnVuY3Rpb24gZHJvcChfcmVmMykge1xuICAgICAgdmFyIGFjdGl2ZVNvcnRhYmxlID0gX3JlZjMuYWN0aXZlU29ydGFibGUsXG4gICAgICAgIHB1dFNvcnRhYmxlID0gX3JlZjMucHV0U29ydGFibGUsXG4gICAgICAgIGRyYWdFbCA9IF9yZWYzLmRyYWdFbDtcbiAgICAgIHZhciB0b1NvcnRhYmxlID0gcHV0U29ydGFibGUgfHwgdGhpcy5zb3J0YWJsZTtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgbGFzdFN3YXBFbCAmJiB0b2dnbGVDbGFzcyhsYXN0U3dhcEVsLCBvcHRpb25zLnN3YXBDbGFzcywgZmFsc2UpO1xuICAgICAgaWYgKGxhc3RTd2FwRWwgJiYgKG9wdGlvbnMuc3dhcCB8fCBwdXRTb3J0YWJsZSAmJiBwdXRTb3J0YWJsZS5vcHRpb25zLnN3YXApKSB7XG4gICAgICAgIGlmIChkcmFnRWwgIT09IGxhc3RTd2FwRWwpIHtcbiAgICAgICAgICB0b1NvcnRhYmxlLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgICAgICAgIGlmICh0b1NvcnRhYmxlICE9PSBhY3RpdmVTb3J0YWJsZSkgYWN0aXZlU29ydGFibGUuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgICAgICAgc3dhcE5vZGVzKGRyYWdFbCwgbGFzdFN3YXBFbCk7XG4gICAgICAgICAgdG9Tb3J0YWJsZS5hbmltYXRlQWxsKCk7XG4gICAgICAgICAgaWYgKHRvU29ydGFibGUgIT09IGFjdGl2ZVNvcnRhYmxlKSBhY3RpdmVTb3J0YWJsZS5hbmltYXRlQWxsKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG51bGxpbmc6IGZ1bmN0aW9uIG51bGxpbmcoKSB7XG4gICAgICBsYXN0U3dhcEVsID0gbnVsbDtcbiAgICB9XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcyhTd2FwLCB7XG4gICAgcGx1Z2luTmFtZTogJ3N3YXAnLFxuICAgIGV2ZW50UHJvcGVydGllczogZnVuY3Rpb24gZXZlbnRQcm9wZXJ0aWVzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3dhcEl0ZW06IGxhc3RTd2FwRWxcbiAgICAgIH07XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHN3YXBOb2RlcyhuMSwgbjIpIHtcbiAgdmFyIHAxID0gbjEucGFyZW50Tm9kZSxcbiAgICBwMiA9IG4yLnBhcmVudE5vZGUsXG4gICAgaTEsXG4gICAgaTI7XG4gIGlmICghcDEgfHwgIXAyIHx8IHAxLmlzRXF1YWxOb2RlKG4yKSB8fCBwMi5pc0VxdWFsTm9kZShuMSkpIHJldHVybjtcbiAgaTEgPSBpbmRleChuMSk7XG4gIGkyID0gaW5kZXgobjIpO1xuICBpZiAocDEuaXNFcXVhbE5vZGUocDIpICYmIGkxIDwgaTIpIHtcbiAgICBpMisrO1xuICB9XG4gIHAxLmluc2VydEJlZm9yZShuMiwgcDEuY2hpbGRyZW5baTFdKTtcbiAgcDIuaW5zZXJ0QmVmb3JlKG4xLCBwMi5jaGlsZHJlbltpMl0pO1xufVxuXG52YXIgbXVsdGlEcmFnRWxlbWVudHMgPSBbXSxcbiAgbXVsdGlEcmFnQ2xvbmVzID0gW10sXG4gIGxhc3RNdWx0aURyYWdTZWxlY3QsXG4gIC8vIGZvciBzZWxlY3Rpb24gd2l0aCBtb2RpZmllciBrZXkgZG93biAoU0hJRlQpXG4gIG11bHRpRHJhZ1NvcnRhYmxlLFxuICBpbml0aWFsRm9sZGluZyA9IGZhbHNlLFxuICAvLyBJbml0aWFsIG11bHRpLWRyYWcgZm9sZCB3aGVuIGRyYWcgc3RhcnRlZFxuICBmb2xkaW5nID0gZmFsc2UsXG4gIC8vIEZvbGRpbmcgYW55IG90aGVyIHRpbWVcbiAgZHJhZ1N0YXJ0ZWQgPSBmYWxzZSxcbiAgZHJhZ0VsJDEsXG4gIGNsb25lc0Zyb21SZWN0LFxuICBjbG9uZXNIaWRkZW47XG5mdW5jdGlvbiBNdWx0aURyYWdQbHVnaW4oKSB7XG4gIGZ1bmN0aW9uIE11bHRpRHJhZyhzb3J0YWJsZSkge1xuICAgIC8vIEJpbmQgYWxsIHByaXZhdGUgbWV0aG9kc1xuICAgIGZvciAodmFyIGZuIGluIHRoaXMpIHtcbiAgICAgIGlmIChmbi5jaGFyQXQoMCkgPT09ICdfJyAmJiB0eXBlb2YgdGhpc1tmbl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpc1tmbl0gPSB0aGlzW2ZuXS5iaW5kKHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXNvcnRhYmxlLm9wdGlvbnMuYXZvaWRJbXBsaWNpdERlc2VsZWN0KSB7XG4gICAgICBpZiAoc29ydGFibGUub3B0aW9ucy5zdXBwb3J0UG9pbnRlcikge1xuICAgICAgICBvbihkb2N1bWVudCwgJ3BvaW50ZXJ1cCcsIHRoaXMuX2Rlc2VsZWN0TXVsdGlEcmFnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uKGRvY3VtZW50LCAnbW91c2V1cCcsIHRoaXMuX2Rlc2VsZWN0TXVsdGlEcmFnKTtcbiAgICAgICAgb24oZG9jdW1lbnQsICd0b3VjaGVuZCcsIHRoaXMuX2Rlc2VsZWN0TXVsdGlEcmFnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgb24oZG9jdW1lbnQsICdrZXlkb3duJywgdGhpcy5fY2hlY2tLZXlEb3duKTtcbiAgICBvbihkb2N1bWVudCwgJ2tleXVwJywgdGhpcy5fY2hlY2tLZXlVcCk7XG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIHNlbGVjdGVkQ2xhc3M6ICdzb3J0YWJsZS1zZWxlY3RlZCcsXG4gICAgICBtdWx0aURyYWdLZXk6IG51bGwsXG4gICAgICBhdm9pZEltcGxpY2l0RGVzZWxlY3Q6IGZhbHNlLFxuICAgICAgc2V0RGF0YTogZnVuY3Rpb24gc2V0RGF0YShkYXRhVHJhbnNmZXIsIGRyYWdFbCkge1xuICAgICAgICB2YXIgZGF0YSA9ICcnO1xuICAgICAgICBpZiAobXVsdGlEcmFnRWxlbWVudHMubGVuZ3RoICYmIG11bHRpRHJhZ1NvcnRhYmxlID09PSBzb3J0YWJsZSkge1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQsIGkpIHtcbiAgICAgICAgICAgIGRhdGEgKz0gKCFpID8gJycgOiAnLCAnKSArIG11bHRpRHJhZ0VsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGF0YSA9IGRyYWdFbC50ZXh0Q29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBkYXRhVHJhbnNmZXIuc2V0RGF0YSgnVGV4dCcsIGRhdGEpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgTXVsdGlEcmFnLnByb3RvdHlwZSA9IHtcbiAgICBtdWx0aURyYWdLZXlEb3duOiBmYWxzZSxcbiAgICBpc011bHRpRHJhZzogZmFsc2UsXG4gICAgZGVsYXlTdGFydEdsb2JhbDogZnVuY3Rpb24gZGVsYXlTdGFydEdsb2JhbChfcmVmKSB7XG4gICAgICB2YXIgZHJhZ2dlZCA9IF9yZWYuZHJhZ0VsO1xuICAgICAgZHJhZ0VsJDEgPSBkcmFnZ2VkO1xuICAgIH0sXG4gICAgZGVsYXlFbmRlZDogZnVuY3Rpb24gZGVsYXlFbmRlZCgpIHtcbiAgICAgIHRoaXMuaXNNdWx0aURyYWcgPSB+bXVsdGlEcmFnRWxlbWVudHMuaW5kZXhPZihkcmFnRWwkMSk7XG4gICAgfSxcbiAgICBzZXR1cENsb25lOiBmdW5jdGlvbiBzZXR1cENsb25lKF9yZWYyKSB7XG4gICAgICB2YXIgc29ydGFibGUgPSBfcmVmMi5zb3J0YWJsZSxcbiAgICAgICAgY2FuY2VsID0gX3JlZjIuY2FuY2VsO1xuICAgICAgaWYgKCF0aGlzLmlzTXVsdGlEcmFnKSByZXR1cm47XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG11bHRpRHJhZ0VsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG11bHRpRHJhZ0Nsb25lcy5wdXNoKGNsb25lKG11bHRpRHJhZ0VsZW1lbnRzW2ldKSk7XG4gICAgICAgIG11bHRpRHJhZ0Nsb25lc1tpXS5zb3J0YWJsZUluZGV4ID0gbXVsdGlEcmFnRWxlbWVudHNbaV0uc29ydGFibGVJbmRleDtcbiAgICAgICAgbXVsdGlEcmFnQ2xvbmVzW2ldLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICBtdWx0aURyYWdDbG9uZXNbaV0uc3R5bGVbJ3dpbGwtY2hhbmdlJ10gPSAnJztcbiAgICAgICAgdG9nZ2xlQ2xhc3MobXVsdGlEcmFnQ2xvbmVzW2ldLCB0aGlzLm9wdGlvbnMuc2VsZWN0ZWRDbGFzcywgZmFsc2UpO1xuICAgICAgICBtdWx0aURyYWdFbGVtZW50c1tpXSA9PT0gZHJhZ0VsJDEgJiYgdG9nZ2xlQ2xhc3MobXVsdGlEcmFnQ2xvbmVzW2ldLCB0aGlzLm9wdGlvbnMuY2hvc2VuQ2xhc3MsIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHNvcnRhYmxlLl9oaWRlQ2xvbmUoKTtcbiAgICAgIGNhbmNlbCgpO1xuICAgIH0sXG4gICAgY2xvbmU6IGZ1bmN0aW9uIGNsb25lKF9yZWYzKSB7XG4gICAgICB2YXIgc29ydGFibGUgPSBfcmVmMy5zb3J0YWJsZSxcbiAgICAgICAgcm9vdEVsID0gX3JlZjMucm9vdEVsLFxuICAgICAgICBkaXNwYXRjaFNvcnRhYmxlRXZlbnQgPSBfcmVmMy5kaXNwYXRjaFNvcnRhYmxlRXZlbnQsXG4gICAgICAgIGNhbmNlbCA9IF9yZWYzLmNhbmNlbDtcbiAgICAgIGlmICghdGhpcy5pc011bHRpRHJhZykgcmV0dXJuO1xuICAgICAgaWYgKCF0aGlzLm9wdGlvbnMucmVtb3ZlQ2xvbmVPbkhpZGUpIHtcbiAgICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnRzLmxlbmd0aCAmJiBtdWx0aURyYWdTb3J0YWJsZSA9PT0gc29ydGFibGUpIHtcbiAgICAgICAgICBpbnNlcnRNdWx0aURyYWdDbG9uZXModHJ1ZSwgcm9vdEVsKTtcbiAgICAgICAgICBkaXNwYXRjaFNvcnRhYmxlRXZlbnQoJ2Nsb25lJyk7XG4gICAgICAgICAgY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHNob3dDbG9uZTogZnVuY3Rpb24gc2hvd0Nsb25lKF9yZWY0KSB7XG4gICAgICB2YXIgY2xvbmVOb3dTaG93biA9IF9yZWY0LmNsb25lTm93U2hvd24sXG4gICAgICAgIHJvb3RFbCA9IF9yZWY0LnJvb3RFbCxcbiAgICAgICAgY2FuY2VsID0gX3JlZjQuY2FuY2VsO1xuICAgICAgaWYgKCF0aGlzLmlzTXVsdGlEcmFnKSByZXR1cm47XG4gICAgICBpbnNlcnRNdWx0aURyYWdDbG9uZXMoZmFsc2UsIHJvb3RFbCk7XG4gICAgICBtdWx0aURyYWdDbG9uZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xvbmUpIHtcbiAgICAgICAgY3NzKGNsb25lLCAnZGlzcGxheScsICcnKTtcbiAgICAgIH0pO1xuICAgICAgY2xvbmVOb3dTaG93bigpO1xuICAgICAgY2xvbmVzSGlkZGVuID0gZmFsc2U7XG4gICAgICBjYW5jZWwoKTtcbiAgICB9LFxuICAgIGhpZGVDbG9uZTogZnVuY3Rpb24gaGlkZUNsb25lKF9yZWY1KSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgdmFyIHNvcnRhYmxlID0gX3JlZjUuc29ydGFibGUsXG4gICAgICAgIGNsb25lTm93SGlkZGVuID0gX3JlZjUuY2xvbmVOb3dIaWRkZW4sXG4gICAgICAgIGNhbmNlbCA9IF9yZWY1LmNhbmNlbDtcbiAgICAgIGlmICghdGhpcy5pc011bHRpRHJhZykgcmV0dXJuO1xuICAgICAgbXVsdGlEcmFnQ2xvbmVzLmZvckVhY2goZnVuY3Rpb24gKGNsb25lKSB7XG4gICAgICAgIGNzcyhjbG9uZSwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5yZW1vdmVDbG9uZU9uSGlkZSAmJiBjbG9uZS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgY2xvbmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjbG9uZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY2xvbmVOb3dIaWRkZW4oKTtcbiAgICAgIGNsb25lc0hpZGRlbiA9IHRydWU7XG4gICAgICBjYW5jZWwoKTtcbiAgICB9LFxuICAgIGRyYWdTdGFydEdsb2JhbDogZnVuY3Rpb24gZHJhZ1N0YXJ0R2xvYmFsKF9yZWY2KSB7XG4gICAgICB2YXIgc29ydGFibGUgPSBfcmVmNi5zb3J0YWJsZTtcbiAgICAgIGlmICghdGhpcy5pc011bHRpRHJhZyAmJiBtdWx0aURyYWdTb3J0YWJsZSkge1xuICAgICAgICBtdWx0aURyYWdTb3J0YWJsZS5tdWx0aURyYWcuX2Rlc2VsZWN0TXVsdGlEcmFnKCk7XG4gICAgICB9XG4gICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgIG11bHRpRHJhZ0VsZW1lbnQuc29ydGFibGVJbmRleCA9IGluZGV4KG11bHRpRHJhZ0VsZW1lbnQpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFNvcnQgbXVsdGktZHJhZyBlbGVtZW50c1xuICAgICAgbXVsdGlEcmFnRWxlbWVudHMgPSBtdWx0aURyYWdFbGVtZW50cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhLnNvcnRhYmxlSW5kZXggLSBiLnNvcnRhYmxlSW5kZXg7XG4gICAgICB9KTtcbiAgICAgIGRyYWdTdGFydGVkID0gdHJ1ZTtcbiAgICB9LFxuICAgIGRyYWdTdGFydGVkOiBmdW5jdGlvbiBkcmFnU3RhcnRlZChfcmVmNykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG4gICAgICB2YXIgc29ydGFibGUgPSBfcmVmNy5zb3J0YWJsZTtcbiAgICAgIGlmICghdGhpcy5pc011bHRpRHJhZykgcmV0dXJuO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zb3J0KSB7XG4gICAgICAgIC8vIENhcHR1cmUgcmVjdHMsXG4gICAgICAgIC8vIGhpZGUgbXVsdGkgZHJhZyBlbGVtZW50cyAoYnkgcG9zaXRpb25pbmcgdGhlbSBhYnNvbHV0ZSksXG4gICAgICAgIC8vIHNldCBtdWx0aSBkcmFnIGVsZW1lbnRzIHJlY3RzIHRvIGRyYWdSZWN0LFxuICAgICAgICAvLyBzaG93IG11bHRpIGRyYWcgZWxlbWVudHMsXG4gICAgICAgIC8vIGFuaW1hdGUgdG8gcmVjdHMsXG4gICAgICAgIC8vIHVuc2V0IHJlY3RzICYgcmVtb3ZlIGZyb20gRE9NXG5cbiAgICAgICAgc29ydGFibGUuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnQgPT09IGRyYWdFbCQxKSByZXR1cm47XG4gICAgICAgICAgICBjc3MobXVsdGlEcmFnRWxlbWVudCwgJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdmFyIGRyYWdSZWN0ID0gZ2V0UmVjdChkcmFnRWwkMSwgZmFsc2UsIHRydWUsIHRydWUpO1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50ID09PSBkcmFnRWwkMSkgcmV0dXJuO1xuICAgICAgICAgICAgc2V0UmVjdChtdWx0aURyYWdFbGVtZW50LCBkcmFnUmVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZm9sZGluZyA9IHRydWU7XG4gICAgICAgICAgaW5pdGlhbEZvbGRpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzb3J0YWJsZS5hbmltYXRlQWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9sZGluZyA9IGZhbHNlO1xuICAgICAgICBpbml0aWFsRm9sZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAoX3RoaXMyLm9wdGlvbnMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICAgICAgdW5zZXRSZWN0KG11bHRpRHJhZ0VsZW1lbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIGFsbCBhdXhpbGlhcnkgbXVsdGlkcmFnIGl0ZW1zIGZyb20gZWwsIGlmIHNvcnRpbmcgZW5hYmxlZFxuICAgICAgICBpZiAoX3RoaXMyLm9wdGlvbnMuc29ydCkge1xuICAgICAgICAgIHJlbW92ZU11bHRpRHJhZ0VsZW1lbnRzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZHJhZ092ZXI6IGZ1bmN0aW9uIGRyYWdPdmVyKF9yZWY4KSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gX3JlZjgudGFyZ2V0LFxuICAgICAgICBjb21wbGV0ZWQgPSBfcmVmOC5jb21wbGV0ZWQsXG4gICAgICAgIGNhbmNlbCA9IF9yZWY4LmNhbmNlbDtcbiAgICAgIGlmIChmb2xkaW5nICYmIH5tdWx0aURyYWdFbGVtZW50cy5pbmRleE9mKHRhcmdldCkpIHtcbiAgICAgICAgY29tcGxldGVkKGZhbHNlKTtcbiAgICAgICAgY2FuY2VsKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICByZXZlcnQ6IGZ1bmN0aW9uIHJldmVydChfcmVmOSkge1xuICAgICAgdmFyIGZyb21Tb3J0YWJsZSA9IF9yZWY5LmZyb21Tb3J0YWJsZSxcbiAgICAgICAgcm9vdEVsID0gX3JlZjkucm9vdEVsLFxuICAgICAgICBzb3J0YWJsZSA9IF9yZWY5LnNvcnRhYmxlLFxuICAgICAgICBkcmFnUmVjdCA9IF9yZWY5LmRyYWdSZWN0O1xuICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8gU2V0dXAgdW5mb2xkIGFuaW1hdGlvblxuICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgc29ydGFibGUuYWRkQW5pbWF0aW9uU3RhdGUoe1xuICAgICAgICAgICAgdGFyZ2V0OiBtdWx0aURyYWdFbGVtZW50LFxuICAgICAgICAgICAgcmVjdDogZm9sZGluZyA/IGdldFJlY3QobXVsdGlEcmFnRWxlbWVudCkgOiBkcmFnUmVjdFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHVuc2V0UmVjdChtdWx0aURyYWdFbGVtZW50KTtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50LmZyb21SZWN0ID0gZHJhZ1JlY3Q7XG4gICAgICAgICAgZnJvbVNvcnRhYmxlLnJlbW92ZUFuaW1hdGlvblN0YXRlKG11bHRpRHJhZ0VsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9sZGluZyA9IGZhbHNlO1xuICAgICAgICBpbnNlcnRNdWx0aURyYWdFbGVtZW50cyghdGhpcy5vcHRpb25zLnJlbW92ZUNsb25lT25IaWRlLCByb290RWwpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZHJhZ092ZXJDb21wbGV0ZWQ6IGZ1bmN0aW9uIGRyYWdPdmVyQ29tcGxldGVkKF9yZWYxMCkge1xuICAgICAgdmFyIHNvcnRhYmxlID0gX3JlZjEwLnNvcnRhYmxlLFxuICAgICAgICBpc093bmVyID0gX3JlZjEwLmlzT3duZXIsXG4gICAgICAgIGluc2VydGlvbiA9IF9yZWYxMC5pbnNlcnRpb24sXG4gICAgICAgIGFjdGl2ZVNvcnRhYmxlID0gX3JlZjEwLmFjdGl2ZVNvcnRhYmxlLFxuICAgICAgICBwYXJlbnRFbCA9IF9yZWYxMC5wYXJlbnRFbCxcbiAgICAgICAgcHV0U29ydGFibGUgPSBfcmVmMTAucHV0U29ydGFibGU7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgIGlmIChpbnNlcnRpb24pIHtcbiAgICAgICAgLy8gQ2xvbmVzIG11c3QgYmUgaGlkZGVuIGJlZm9yZSBmb2xkaW5nIGFuaW1hdGlvbiB0byBjYXB0dXJlIGRyYWdSZWN0QWJzb2x1dGUgcHJvcGVybHlcbiAgICAgICAgaWYgKGlzT3duZXIpIHtcbiAgICAgICAgICBhY3RpdmVTb3J0YWJsZS5faGlkZUNsb25lKCk7XG4gICAgICAgIH1cbiAgICAgICAgaW5pdGlhbEZvbGRpbmcgPSBmYWxzZTtcbiAgICAgICAgLy8gSWYgbGVhdmluZyBzb3J0OmZhbHNlIHJvb3QsIG9yIGFscmVhZHkgZm9sZGluZyAtIEZvbGQgdG8gbmV3IGxvY2F0aW9uXG4gICAgICAgIGlmIChvcHRpb25zLmFuaW1hdGlvbiAmJiBtdWx0aURyYWdFbGVtZW50cy5sZW5ndGggPiAxICYmIChmb2xkaW5nIHx8ICFpc093bmVyICYmICFhY3RpdmVTb3J0YWJsZS5vcHRpb25zLnNvcnQgJiYgIXB1dFNvcnRhYmxlKSkge1xuICAgICAgICAgIC8vIEZvbGQ6IFNldCBhbGwgbXVsdGkgZHJhZyBlbGVtZW50cydzIHJlY3RzIHRvIGRyYWdFbCdzIHJlY3Qgd2hlbiBtdWx0aS1kcmFnIGVsZW1lbnRzIGFyZSBpbnZpc2libGVcbiAgICAgICAgICB2YXIgZHJhZ1JlY3RBYnNvbHV0ZSA9IGdldFJlY3QoZHJhZ0VsJDEsIGZhbHNlLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAobXVsdGlEcmFnRWxlbWVudCA9PT0gZHJhZ0VsJDEpIHJldHVybjtcbiAgICAgICAgICAgIHNldFJlY3QobXVsdGlEcmFnRWxlbWVudCwgZHJhZ1JlY3RBYnNvbHV0ZSk7XG5cbiAgICAgICAgICAgIC8vIE1vdmUgZWxlbWVudChzKSB0byBlbmQgb2YgcGFyZW50RWwgc28gdGhhdCBpdCBkb2VzIG5vdCBpbnRlcmZlcmUgd2l0aCBtdWx0aS1kcmFnIGNsb25lcyBpbnNlcnRpb24gaWYgdGhleSBhcmUgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIHdoaWxlIGZvbGRpbmcsIGFuZCBzbyB0aGF0IHdlIGNhbiBjYXB0dXJlIHRoZW0gYWdhaW4gYmVjYXVzZSBvbGQgc29ydGFibGUgd2lsbCBubyBsb25nZXIgYmUgZnJvbVNvcnRhYmxlXG4gICAgICAgICAgICBwYXJlbnRFbC5hcHBlbmRDaGlsZChtdWx0aURyYWdFbGVtZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBmb2xkaW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENsb25lcyBtdXN0IGJlIHNob3duIChhbmQgY2hlY2sgdG8gcmVtb3ZlIG11bHRpIGRyYWdzKSBhZnRlciBmb2xkaW5nIHdoZW4gaW50ZXJmZXJpbmcgbXVsdGlEcmFnRWxlbWVudHMgYXJlIG1vdmVkIG91dFxuICAgICAgICBpZiAoIWlzT3duZXIpIHtcbiAgICAgICAgICAvLyBPbmx5IHJlbW92ZSBpZiBub3QgZm9sZGluZyAoZm9sZGluZyB3aWxsIHJlbW92ZSB0aGVtIGFueXdheXMpXG4gICAgICAgICAgaWYgKCFmb2xkaW5nKSB7XG4gICAgICAgICAgICByZW1vdmVNdWx0aURyYWdFbGVtZW50cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobXVsdGlEcmFnRWxlbWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdmFyIGNsb25lc0hpZGRlbkJlZm9yZSA9IGNsb25lc0hpZGRlbjtcbiAgICAgICAgICAgIGFjdGl2ZVNvcnRhYmxlLl9zaG93Q2xvbmUoc29ydGFibGUpO1xuXG4gICAgICAgICAgICAvLyBVbmZvbGQgYW5pbWF0aW9uIGZvciBjbG9uZXMgaWYgc2hvd2luZyBmcm9tIGhpZGRlblxuICAgICAgICAgICAgaWYgKGFjdGl2ZVNvcnRhYmxlLm9wdGlvbnMuYW5pbWF0aW9uICYmICFjbG9uZXNIaWRkZW4gJiYgY2xvbmVzSGlkZGVuQmVmb3JlKSB7XG4gICAgICAgICAgICAgIG11bHRpRHJhZ0Nsb25lcy5mb3JFYWNoKGZ1bmN0aW9uIChjbG9uZSkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVNvcnRhYmxlLmFkZEFuaW1hdGlvblN0YXRlKHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldDogY2xvbmUsXG4gICAgICAgICAgICAgICAgICByZWN0OiBjbG9uZXNGcm9tUmVjdFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNsb25lLmZyb21SZWN0ID0gY2xvbmVzRnJvbVJlY3Q7XG4gICAgICAgICAgICAgICAgY2xvbmUudGhpc0FuaW1hdGlvbkR1cmF0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdGl2ZVNvcnRhYmxlLl9zaG93Q2xvbmUoc29ydGFibGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZHJhZ092ZXJBbmltYXRpb25DYXB0dXJlOiBmdW5jdGlvbiBkcmFnT3ZlckFuaW1hdGlvbkNhcHR1cmUoX3JlZjExKSB7XG4gICAgICB2YXIgZHJhZ1JlY3QgPSBfcmVmMTEuZHJhZ1JlY3QsXG4gICAgICAgIGlzT3duZXIgPSBfcmVmMTEuaXNPd25lcixcbiAgICAgICAgYWN0aXZlU29ydGFibGUgPSBfcmVmMTEuYWN0aXZlU29ydGFibGU7XG4gICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgIG11bHRpRHJhZ0VsZW1lbnQudGhpc0FuaW1hdGlvbkR1cmF0aW9uID0gbnVsbDtcbiAgICAgIH0pO1xuICAgICAgaWYgKGFjdGl2ZVNvcnRhYmxlLm9wdGlvbnMuYW5pbWF0aW9uICYmICFpc093bmVyICYmIGFjdGl2ZVNvcnRhYmxlLm11bHRpRHJhZy5pc011bHRpRHJhZykge1xuICAgICAgICBjbG9uZXNGcm9tUmVjdCA9IF9leHRlbmRzKHt9LCBkcmFnUmVjdCk7XG4gICAgICAgIHZhciBkcmFnTWF0cml4ID0gbWF0cml4KGRyYWdFbCQxLCB0cnVlKTtcbiAgICAgICAgY2xvbmVzRnJvbVJlY3QudG9wIC09IGRyYWdNYXRyaXguZjtcbiAgICAgICAgY2xvbmVzRnJvbVJlY3QubGVmdCAtPSBkcmFnTWF0cml4LmU7XG4gICAgICB9XG4gICAgfSxcbiAgICBkcmFnT3ZlckFuaW1hdGlvbkNvbXBsZXRlOiBmdW5jdGlvbiBkcmFnT3ZlckFuaW1hdGlvbkNvbXBsZXRlKCkge1xuICAgICAgaWYgKGZvbGRpbmcpIHtcbiAgICAgICAgZm9sZGluZyA9IGZhbHNlO1xuICAgICAgICByZW1vdmVNdWx0aURyYWdFbGVtZW50cygpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZHJvcDogZnVuY3Rpb24gZHJvcChfcmVmMTIpIHtcbiAgICAgIHZhciBldnQgPSBfcmVmMTIub3JpZ2luYWxFdmVudCxcbiAgICAgICAgcm9vdEVsID0gX3JlZjEyLnJvb3RFbCxcbiAgICAgICAgcGFyZW50RWwgPSBfcmVmMTIucGFyZW50RWwsXG4gICAgICAgIHNvcnRhYmxlID0gX3JlZjEyLnNvcnRhYmxlLFxuICAgICAgICBkaXNwYXRjaFNvcnRhYmxlRXZlbnQgPSBfcmVmMTIuZGlzcGF0Y2hTb3J0YWJsZUV2ZW50LFxuICAgICAgICBvbGRJbmRleCA9IF9yZWYxMi5vbGRJbmRleCxcbiAgICAgICAgcHV0U29ydGFibGUgPSBfcmVmMTIucHV0U29ydGFibGU7XG4gICAgICB2YXIgdG9Tb3J0YWJsZSA9IHB1dFNvcnRhYmxlIHx8IHRoaXMuc29ydGFibGU7XG4gICAgICBpZiAoIWV2dCkgcmV0dXJuO1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIGNoaWxkcmVuID0gcGFyZW50RWwuY2hpbGRyZW47XG5cbiAgICAgIC8vIE11bHRpLWRyYWcgc2VsZWN0aW9uXG4gICAgICBpZiAoIWRyYWdTdGFydGVkKSB7XG4gICAgICAgIGlmIChvcHRpb25zLm11bHRpRHJhZ0tleSAmJiAhdGhpcy5tdWx0aURyYWdLZXlEb3duKSB7XG4gICAgICAgICAgdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcoKTtcbiAgICAgICAgfVxuICAgICAgICB0b2dnbGVDbGFzcyhkcmFnRWwkMSwgb3B0aW9ucy5zZWxlY3RlZENsYXNzLCAhfm11bHRpRHJhZ0VsZW1lbnRzLmluZGV4T2YoZHJhZ0VsJDEpKTtcbiAgICAgICAgaWYgKCF+bXVsdGlEcmFnRWxlbWVudHMuaW5kZXhPZihkcmFnRWwkMSkpIHtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5wdXNoKGRyYWdFbCQxKTtcbiAgICAgICAgICBkaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgIHNvcnRhYmxlOiBzb3J0YWJsZSxcbiAgICAgICAgICAgIHJvb3RFbDogcm9vdEVsLFxuICAgICAgICAgICAgbmFtZTogJ3NlbGVjdCcsXG4gICAgICAgICAgICB0YXJnZXRFbDogZHJhZ0VsJDEsXG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIE1vZGlmaWVyIGFjdGl2YXRlZCwgc2VsZWN0IGZyb20gbGFzdCB0byBkcmFnRWxcbiAgICAgICAgICBpZiAoZXZ0LnNoaWZ0S2V5ICYmIGxhc3RNdWx0aURyYWdTZWxlY3QgJiYgc29ydGFibGUuZWwuY29udGFpbnMobGFzdE11bHRpRHJhZ1NlbGVjdCkpIHtcbiAgICAgICAgICAgIHZhciBsYXN0SW5kZXggPSBpbmRleChsYXN0TXVsdGlEcmFnU2VsZWN0KSxcbiAgICAgICAgICAgICAgY3VycmVudEluZGV4ID0gaW5kZXgoZHJhZ0VsJDEpO1xuICAgICAgICAgICAgaWYgKH5sYXN0SW5kZXggJiYgfmN1cnJlbnRJbmRleCAmJiBsYXN0SW5kZXggIT09IGN1cnJlbnRJbmRleCkge1xuICAgICAgICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIE11c3QgaW5jbHVkZSBsYXN0TXVsdGlEcmFnU2VsZWN0IChzZWxlY3QgaXQpLCBpbiBjYXNlIG1vZGlmaWVkIHNlbGVjdGlvbiBmcm9tIG5vIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgIC8vIChidXQgcHJldmlvdXMgc2VsZWN0aW9uIGV4aXN0ZWQpXG4gICAgICAgICAgICAgICAgdmFyIG4sIGk7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA+IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAgICAgaSA9IGxhc3RJbmRleDtcbiAgICAgICAgICAgICAgICAgIG4gPSBjdXJyZW50SW5kZXg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGkgPSBjdXJyZW50SW5kZXg7XG4gICAgICAgICAgICAgICAgICBuID0gbGFzdEluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGZpbHRlciA9IG9wdGlvbnMuZmlsdGVyO1xuICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICBpZiAofm11bHRpRHJhZ0VsZW1lbnRzLmluZGV4T2YoY2hpbGRyZW5baV0pKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGVsZW1lbnQgaXMgZHJhZ2dhYmxlXG4gICAgICAgICAgICAgICAgICBpZiAoIWNsb3Nlc3QoY2hpbGRyZW5baV0sIG9wdGlvbnMuZHJhZ2dhYmxlLCBwYXJlbnRFbCwgZmFsc2UpKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGVsZW1lbnQgaXMgZmlsdGVyZWRcbiAgICAgICAgICAgICAgICAgIHZhciBmaWx0ZXJlZCA9IGZpbHRlciAmJiAodHlwZW9mIGZpbHRlciA9PT0gJ2Z1bmN0aW9uJyA/IGZpbHRlci5jYWxsKHNvcnRhYmxlLCBldnQsIGNoaWxkcmVuW2ldLCBzb3J0YWJsZSkgOiBmaWx0ZXIuc3BsaXQoJywnKS5zb21lKGZ1bmN0aW9uIChjcml0ZXJpYSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2xvc2VzdChjaGlsZHJlbltpXSwgY3JpdGVyaWEudHJpbSgpLCBwYXJlbnRFbCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlcmVkKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzKGNoaWxkcmVuW2ldLCBvcHRpb25zLnNlbGVjdGVkQ2xhc3MsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMucHVzaChjaGlsZHJlbltpXSk7XG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IHNvcnRhYmxlLFxuICAgICAgICAgICAgICAgICAgICByb290RWw6IHJvb3RFbCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldEVsOiBjaGlsZHJlbltpXSxcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhc3RNdWx0aURyYWdTZWxlY3QgPSBkcmFnRWwkMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbXVsdGlEcmFnU29ydGFibGUgPSB0b1NvcnRhYmxlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLnNwbGljZShtdWx0aURyYWdFbGVtZW50cy5pbmRleE9mKGRyYWdFbCQxKSwgMSk7XG4gICAgICAgICAgbGFzdE11bHRpRHJhZ1NlbGVjdCA9IG51bGw7XG4gICAgICAgICAgZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICBzb3J0YWJsZTogc29ydGFibGUsXG4gICAgICAgICAgICByb290RWw6IHJvb3RFbCxcbiAgICAgICAgICAgIG5hbWU6ICdkZXNlbGVjdCcsXG4gICAgICAgICAgICB0YXJnZXRFbDogZHJhZ0VsJDEsXG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBNdWx0aS1kcmFnIGRyb3BcbiAgICAgIGlmIChkcmFnU3RhcnRlZCAmJiB0aGlzLmlzTXVsdGlEcmFnKSB7XG4gICAgICAgIGZvbGRpbmcgPSBmYWxzZTtcbiAgICAgICAgLy8gRG8gbm90IFwidW5mb2xkXCIgYWZ0ZXIgYXJvdW5kIGRyYWdFbCBpZiByZXZlcnRlZFxuICAgICAgICBpZiAoKHBhcmVudEVsW2V4cGFuZG9dLm9wdGlvbnMuc29ydCB8fCBwYXJlbnRFbCAhPT0gcm9vdEVsKSAmJiBtdWx0aURyYWdFbGVtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdmFyIGRyYWdSZWN0ID0gZ2V0UmVjdChkcmFnRWwkMSksXG4gICAgICAgICAgICBtdWx0aURyYWdJbmRleCA9IGluZGV4KGRyYWdFbCQxLCAnOm5vdCguJyArIHRoaXMub3B0aW9ucy5zZWxlY3RlZENsYXNzICsgJyknKTtcbiAgICAgICAgICBpZiAoIWluaXRpYWxGb2xkaW5nICYmIG9wdGlvbnMuYW5pbWF0aW9uKSBkcmFnRWwkMS50aGlzQW5pbWF0aW9uRHVyYXRpb24gPSBudWxsO1xuICAgICAgICAgIHRvU29ydGFibGUuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgICAgICAgaWYgKCFpbml0aWFsRm9sZGluZykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICAgIGRyYWdFbCQxLmZyb21SZWN0ID0gZHJhZ1JlY3Q7XG4gICAgICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBtdWx0aURyYWdFbGVtZW50LnRoaXNBbmltYXRpb25EdXJhdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnQgIT09IGRyYWdFbCQxKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgcmVjdCA9IGZvbGRpbmcgPyBnZXRSZWN0KG11bHRpRHJhZ0VsZW1lbnQpIDogZHJhZ1JlY3Q7XG4gICAgICAgICAgICAgICAgICBtdWx0aURyYWdFbGVtZW50LmZyb21SZWN0ID0gcmVjdDtcblxuICAgICAgICAgICAgICAgICAgLy8gUHJlcGFyZSB1bmZvbGQgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgICB0b1NvcnRhYmxlLmFkZEFuaW1hdGlvblN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBtdWx0aURyYWdFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICByZWN0OiByZWN0XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBNdWx0aSBkcmFnIGVsZW1lbnRzIGFyZSBub3QgbmVjZXNzYXJpbHkgcmVtb3ZlZCBmcm9tIHRoZSBET00gb24gZHJvcCwgc28gdG8gcmVpbnNlcnRcbiAgICAgICAgICAgIC8vIHByb3Blcmx5IHRoZXkgbXVzdCBhbGwgYmUgcmVtb3ZlZFxuICAgICAgICAgICAgcmVtb3ZlTXVsdGlEcmFnRWxlbWVudHMoKTtcbiAgICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuW211bHRpRHJhZ0luZGV4XSkge1xuICAgICAgICAgICAgICAgIHBhcmVudEVsLmluc2VydEJlZm9yZShtdWx0aURyYWdFbGVtZW50LCBjaGlsZHJlblttdWx0aURyYWdJbmRleF0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmVudEVsLmFwcGVuZENoaWxkKG11bHRpRHJhZ0VsZW1lbnQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG11bHRpRHJhZ0luZGV4Kys7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gSWYgaW5pdGlhbCBmb2xkaW5nIGlzIGRvbmUsIHRoZSBlbGVtZW50cyBtYXkgaGF2ZSBjaGFuZ2VkIHBvc2l0aW9uIGJlY2F1c2UgdGhleSBhcmUgbm93XG4gICAgICAgICAgICAvLyB1bmZvbGRpbmcgYXJvdW5kIGRyYWdFbCwgZXZlbiB0aG91Z2ggZHJhZ0VsIG1heSBub3QgaGF2ZSBoaXMgaW5kZXggY2hhbmdlZCwgc28gdXBkYXRlIGV2ZW50XG4gICAgICAgICAgICAvLyBtdXN0IGJlIGZpcmVkIGhlcmUgYXMgU29ydGFibGUgd2lsbCBub3QuXG4gICAgICAgICAgICBpZiAob2xkSW5kZXggPT09IGluZGV4KGRyYWdFbCQxKSkge1xuICAgICAgICAgICAgICB2YXIgdXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAobXVsdGlEcmFnRWxlbWVudC5zb3J0YWJsZUluZGV4ICE9PSBpbmRleChtdWx0aURyYWdFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgdXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBpZiAodXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50KCd1cGRhdGUnKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaFNvcnRhYmxlRXZlbnQoJ3NvcnQnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIE11c3QgYmUgZG9uZSBhZnRlciBjYXB0dXJpbmcgaW5kaXZpZHVhbCByZWN0cyAoc2Nyb2xsIGJhcilcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICB1bnNldFJlY3QobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdG9Tb3J0YWJsZS5hbmltYXRlQWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgbXVsdGlEcmFnU29ydGFibGUgPSB0b1NvcnRhYmxlO1xuICAgICAgfVxuXG4gICAgICAvLyBSZW1vdmUgY2xvbmVzIGlmIG5lY2Vzc2FyeVxuICAgICAgaWYgKHJvb3RFbCA9PT0gcGFyZW50RWwgfHwgcHV0U29ydGFibGUgJiYgcHV0U29ydGFibGUubGFzdFB1dE1vZGUgIT09ICdjbG9uZScpIHtcbiAgICAgICAgbXVsdGlEcmFnQ2xvbmVzLmZvckVhY2goZnVuY3Rpb24gKGNsb25lKSB7XG4gICAgICAgICAgY2xvbmUucGFyZW50Tm9kZSAmJiBjbG9uZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNsb25lKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBudWxsaW5nR2xvYmFsOiBmdW5jdGlvbiBudWxsaW5nR2xvYmFsKCkge1xuICAgICAgdGhpcy5pc011bHRpRHJhZyA9IGRyYWdTdGFydGVkID0gZmFsc2U7XG4gICAgICBtdWx0aURyYWdDbG9uZXMubGVuZ3RoID0gMDtcbiAgICB9LFxuICAgIGRlc3Ryb3lHbG9iYWw6IGZ1bmN0aW9uIGRlc3Ryb3lHbG9iYWwoKSB7XG4gICAgICB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZygpO1xuICAgICAgb2ZmKGRvY3VtZW50LCAncG9pbnRlcnVwJywgdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcpO1xuICAgICAgb2ZmKGRvY3VtZW50LCAnbW91c2V1cCcsIHRoaXMuX2Rlc2VsZWN0TXVsdGlEcmFnKTtcbiAgICAgIG9mZihkb2N1bWVudCwgJ3RvdWNoZW5kJywgdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcpO1xuICAgICAgb2ZmKGRvY3VtZW50LCAna2V5ZG93bicsIHRoaXMuX2NoZWNrS2V5RG93bik7XG4gICAgICBvZmYoZG9jdW1lbnQsICdrZXl1cCcsIHRoaXMuX2NoZWNrS2V5VXApO1xuICAgIH0sXG4gICAgX2Rlc2VsZWN0TXVsdGlEcmFnOiBmdW5jdGlvbiBfZGVzZWxlY3RNdWx0aURyYWcoZXZ0KSB7XG4gICAgICBpZiAodHlwZW9mIGRyYWdTdGFydGVkICE9PSBcInVuZGVmaW5lZFwiICYmIGRyYWdTdGFydGVkKSByZXR1cm47XG5cbiAgICAgIC8vIE9ubHkgZGVzZWxlY3QgaWYgc2VsZWN0aW9uIGlzIGluIHRoaXMgc29ydGFibGVcbiAgICAgIGlmIChtdWx0aURyYWdTb3J0YWJsZSAhPT0gdGhpcy5zb3J0YWJsZSkgcmV0dXJuO1xuXG4gICAgICAvLyBPbmx5IGRlc2VsZWN0IGlmIHRhcmdldCBpcyBub3QgaXRlbSBpbiB0aGlzIHNvcnRhYmxlXG4gICAgICBpZiAoZXZ0ICYmIGNsb3Nlc3QoZXZ0LnRhcmdldCwgdGhpcy5vcHRpb25zLmRyYWdnYWJsZSwgdGhpcy5zb3J0YWJsZS5lbCwgZmFsc2UpKSByZXR1cm47XG5cbiAgICAgIC8vIE9ubHkgZGVzZWxlY3QgaWYgbGVmdCBjbGlja1xuICAgICAgaWYgKGV2dCAmJiBldnQuYnV0dG9uICE9PSAwKSByZXR1cm47XG4gICAgICB3aGlsZSAobXVsdGlEcmFnRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBlbCA9IG11bHRpRHJhZ0VsZW1lbnRzWzBdO1xuICAgICAgICB0b2dnbGVDbGFzcyhlbCwgdGhpcy5vcHRpb25zLnNlbGVjdGVkQ2xhc3MsIGZhbHNlKTtcbiAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuc2hpZnQoKTtcbiAgICAgICAgZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgc29ydGFibGU6IHRoaXMuc29ydGFibGUsXG4gICAgICAgICAgcm9vdEVsOiB0aGlzLnNvcnRhYmxlLmVsLFxuICAgICAgICAgIG5hbWU6ICdkZXNlbGVjdCcsXG4gICAgICAgICAgdGFyZ2V0RWw6IGVsLFxuICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIF9jaGVja0tleURvd246IGZ1bmN0aW9uIF9jaGVja0tleURvd24oZXZ0KSB7XG4gICAgICBpZiAoZXZ0LmtleSA9PT0gdGhpcy5vcHRpb25zLm11bHRpRHJhZ0tleSkge1xuICAgICAgICB0aGlzLm11bHRpRHJhZ0tleURvd24gPSB0cnVlO1xuICAgICAgfVxuICAgIH0sXG4gICAgX2NoZWNrS2V5VXA6IGZ1bmN0aW9uIF9jaGVja0tleVVwKGV2dCkge1xuICAgICAgaWYgKGV2dC5rZXkgPT09IHRoaXMub3B0aW9ucy5tdWx0aURyYWdLZXkpIHtcbiAgICAgICAgdGhpcy5tdWx0aURyYWdLZXlEb3duID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICByZXR1cm4gX2V4dGVuZHMoTXVsdGlEcmFnLCB7XG4gICAgLy8gU3RhdGljIG1ldGhvZHMgJiBwcm9wZXJ0aWVzXG4gICAgcGx1Z2luTmFtZTogJ211bHRpRHJhZycsXG4gICAgdXRpbHM6IHtcbiAgICAgIC8qKlxyXG4gICAgICAgKiBTZWxlY3RzIHRoZSBwcm92aWRlZCBtdWx0aS1kcmFnIGl0ZW1cclxuICAgICAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsICAgIFRoZSBlbGVtZW50IHRvIGJlIHNlbGVjdGVkXHJcbiAgICAgICAqL1xuICAgICAgc2VsZWN0OiBmdW5jdGlvbiBzZWxlY3QoZWwpIHtcbiAgICAgICAgdmFyIHNvcnRhYmxlID0gZWwucGFyZW50Tm9kZVtleHBhbmRvXTtcbiAgICAgICAgaWYgKCFzb3J0YWJsZSB8fCAhc29ydGFibGUub3B0aW9ucy5tdWx0aURyYWcgfHwgfm11bHRpRHJhZ0VsZW1lbnRzLmluZGV4T2YoZWwpKSByZXR1cm47XG4gICAgICAgIGlmIChtdWx0aURyYWdTb3J0YWJsZSAmJiBtdWx0aURyYWdTb3J0YWJsZSAhPT0gc29ydGFibGUpIHtcbiAgICAgICAgICBtdWx0aURyYWdTb3J0YWJsZS5tdWx0aURyYWcuX2Rlc2VsZWN0TXVsdGlEcmFnKCk7XG4gICAgICAgICAgbXVsdGlEcmFnU29ydGFibGUgPSBzb3J0YWJsZTtcbiAgICAgICAgfVxuICAgICAgICB0b2dnbGVDbGFzcyhlbCwgc29ydGFibGUub3B0aW9ucy5zZWxlY3RlZENsYXNzLCB0cnVlKTtcbiAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMucHVzaChlbCk7XG4gICAgICB9LFxuICAgICAgLyoqXHJcbiAgICAgICAqIERlc2VsZWN0cyB0aGUgcHJvdmlkZWQgbXVsdGktZHJhZyBpdGVtXHJcbiAgICAgICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbCAgICBUaGUgZWxlbWVudCB0byBiZSBkZXNlbGVjdGVkXHJcbiAgICAgICAqL1xuICAgICAgZGVzZWxlY3Q6IGZ1bmN0aW9uIGRlc2VsZWN0KGVsKSB7XG4gICAgICAgIHZhciBzb3J0YWJsZSA9IGVsLnBhcmVudE5vZGVbZXhwYW5kb10sXG4gICAgICAgICAgaW5kZXggPSBtdWx0aURyYWdFbGVtZW50cy5pbmRleE9mKGVsKTtcbiAgICAgICAgaWYgKCFzb3J0YWJsZSB8fCAhc29ydGFibGUub3B0aW9ucy5tdWx0aURyYWcgfHwgIX5pbmRleCkgcmV0dXJuO1xuICAgICAgICB0b2dnbGVDbGFzcyhlbCwgc29ydGFibGUub3B0aW9ucy5zZWxlY3RlZENsYXNzLCBmYWxzZSk7XG4gICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBldmVudFByb3BlcnRpZXM6IGZ1bmN0aW9uIGV2ZW50UHJvcGVydGllcygpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuICAgICAgdmFyIG9sZEluZGljaWVzID0gW10sXG4gICAgICAgIG5ld0luZGljaWVzID0gW107XG4gICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgIG9sZEluZGljaWVzLnB1c2goe1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnQ6IG11bHRpRHJhZ0VsZW1lbnQsXG4gICAgICAgICAgaW5kZXg6IG11bHRpRHJhZ0VsZW1lbnQuc29ydGFibGVJbmRleFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBtdWx0aURyYWdFbGVtZW50cyB3aWxsIGFscmVhZHkgYmUgc29ydGVkIGlmIGZvbGRpbmdcbiAgICAgICAgdmFyIG5ld0luZGV4O1xuICAgICAgICBpZiAoZm9sZGluZyAmJiBtdWx0aURyYWdFbGVtZW50ICE9PSBkcmFnRWwkMSkge1xuICAgICAgICAgIG5ld0luZGV4ID0gLTE7XG4gICAgICAgIH0gZWxzZSBpZiAoZm9sZGluZykge1xuICAgICAgICAgIG5ld0luZGV4ID0gaW5kZXgobXVsdGlEcmFnRWxlbWVudCwgJzpub3QoLicgKyBfdGhpczMub3B0aW9ucy5zZWxlY3RlZENsYXNzICsgJyknKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdJbmRleCA9IGluZGV4KG11bHRpRHJhZ0VsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIG5ld0luZGljaWVzLnB1c2goe1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnQ6IG11bHRpRHJhZ0VsZW1lbnQsXG4gICAgICAgICAgaW5kZXg6IG5ld0luZGV4XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpdGVtczogX3RvQ29uc3VtYWJsZUFycmF5KG11bHRpRHJhZ0VsZW1lbnRzKSxcbiAgICAgICAgY2xvbmVzOiBbXS5jb25jYXQobXVsdGlEcmFnQ2xvbmVzKSxcbiAgICAgICAgb2xkSW5kaWNpZXM6IG9sZEluZGljaWVzLFxuICAgICAgICBuZXdJbmRpY2llczogbmV3SW5kaWNpZXNcbiAgICAgIH07XG4gICAgfSxcbiAgICBvcHRpb25MaXN0ZW5lcnM6IHtcbiAgICAgIG11bHRpRHJhZ0tleTogZnVuY3Rpb24gbXVsdGlEcmFnS2V5KGtleSkge1xuICAgICAgICBrZXkgPSBrZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGtleSA9PT0gJ2N0cmwnKSB7XG4gICAgICAgICAga2V5ID0gJ0NvbnRyb2wnO1xuICAgICAgICB9IGVsc2UgaWYgKGtleS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAga2V5ID0ga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnN1YnN0cigxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBpbnNlcnRNdWx0aURyYWdFbGVtZW50cyhjbG9uZXNJbnNlcnRlZCwgcm9vdEVsKSB7XG4gIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQsIGkpIHtcbiAgICB2YXIgdGFyZ2V0ID0gcm9vdEVsLmNoaWxkcmVuW211bHRpRHJhZ0VsZW1lbnQuc29ydGFibGVJbmRleCArIChjbG9uZXNJbnNlcnRlZCA/IE51bWJlcihpKSA6IDApXTtcbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICByb290RWwuaW5zZXJ0QmVmb3JlKG11bHRpRHJhZ0VsZW1lbnQsIHRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvb3RFbC5hcHBlbmRDaGlsZChtdWx0aURyYWdFbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcclxuICogSW5zZXJ0IG11bHRpLWRyYWcgY2xvbmVzXHJcbiAqIEBwYXJhbSAge1tCb29sZWFuXX0gZWxlbWVudHNJbnNlcnRlZCAgV2hldGhlciB0aGUgbXVsdGktZHJhZyBlbGVtZW50cyBhcmUgaW5zZXJ0ZWRcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IHJvb3RFbFxyXG4gKi9cbmZ1bmN0aW9uIGluc2VydE11bHRpRHJhZ0Nsb25lcyhlbGVtZW50c0luc2VydGVkLCByb290RWwpIHtcbiAgbXVsdGlEcmFnQ2xvbmVzLmZvckVhY2goZnVuY3Rpb24gKGNsb25lLCBpKSB7XG4gICAgdmFyIHRhcmdldCA9IHJvb3RFbC5jaGlsZHJlbltjbG9uZS5zb3J0YWJsZUluZGV4ICsgKGVsZW1lbnRzSW5zZXJ0ZWQgPyBOdW1iZXIoaSkgOiAwKV07XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgcm9vdEVsLmluc2VydEJlZm9yZShjbG9uZSwgdGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm9vdEVsLmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gcmVtb3ZlTXVsdGlEcmFnRWxlbWVudHMoKSB7XG4gIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICBpZiAobXVsdGlEcmFnRWxlbWVudCA9PT0gZHJhZ0VsJDEpIHJldHVybjtcbiAgICBtdWx0aURyYWdFbGVtZW50LnBhcmVudE5vZGUgJiYgbXVsdGlEcmFnRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG11bHRpRHJhZ0VsZW1lbnQpO1xuICB9KTtcbn1cblxuU29ydGFibGUubW91bnQobmV3IEF1dG9TY3JvbGxQbHVnaW4oKSk7XG5Tb3J0YWJsZS5tb3VudChSZW1vdmUsIFJldmVydCk7XG5cbmV4cG9ydCBkZWZhdWx0IFNvcnRhYmxlO1xuZXhwb3J0IHsgTXVsdGlEcmFnUGx1Z2luIGFzIE11bHRpRHJhZywgU29ydGFibGUsIFN3YXBQbHVnaW4gYXMgU3dhcCB9O1xuIiwiLyoqIEltcG9ydCBkZXBlbmRlbmNpZXMgKi9cbi8vIGZ1bmN0aW9ucyB0byBjcmVhdGUgZWxlbWVudHNcbmltcG9ydCB7YWRkVG9vbHRpcH0gZnJvbSAgXCIuLi91dGlscy9lbGVtZW50LmpzXCI7XG4vLyBzdHlsaW5nXG5pbXBvcnQgXCIuL2Nzcy9jYXRlZ29yaWNhbC1sZWdlbmQuY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9jb250aW51b3VzLWxlZ2VuZC5jc3NcIjtcblxuLyoqXG4gKiBDcmVhdGUgYSBjYXRlZ29yaWNhbCBsZWdlbmQuXG4gKiBAcGFyYW0ge29iamVjdH0geCAtIE9iamVjdCB3aXRoIGl0ZW1zIHRvIGRpc3BsYXkgaW4gbGVnZW5kLlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB4LnZhbHVlcyAtIFNldCBvZiB2YWx1ZXMgZGVub3RpbmcgdGhlIG51bWVyaWNcbiAqIHZhbHVlcyBmb3IgZWFjaCBsZWdlbmQgaXRlbS4gTm90ZSB0aGF0IHRoZXNlIHZhbHVlcyBhcmUgbm90IHNob3duXG4gKiBpbiB0aGUgbGVnZW5kLlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB4LmNvbG9ycyAtIFNldCBvZiB2YWx1ZXMgZGVub3RpbmcgdGhlIGNvbG9yXG4gKiBmb3IgZWFjaCBsZWdlbmQgaXRlbS5cbiAqIE5vdGUgdGhhdCB0aGlzIG11c3QgaGF2ZSB0aGUgc2FtZSBsZW5ndGggYXMge0BsaW5rIHgudmFsdWVzfS5cbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0geC5sYWJlbHMgLSBTZXQgb2YgdmFsdWVzIGRlbm90aW5nIHRoZSB0ZXh0IGxhYmVsXG4gKiBmb3IgZWFjaCBsZWdlbmQgaXRlbS5cbiAqIE5vdGUgdGhhdCB0aGlzIG11c3QgaGF2ZSB0aGUgc2FtZSBsZW5ndGggYXMge0BsaW5rIHgudmFsdWVzfS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB4LnVuaXRzIC0gVW5pdHMgZm9yIHRoZSBsZWdlbmQgaXRlbXMuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3JpY2FsTGVnZW5kKHgpIHtcbiAgLy8gaW5pdGlhbGl6ZSBsZWdlbmRcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWwuY2xhc3NOYW1lID0gXCJjYXRlZ29yaWNhbC1sZWdlbmRcIjtcbiAgYWRkVG9vbHRpcChcbiAgICBlbCxcbiAgICBcIlRoaXMgbGF5ZXIgaGFzIGNhdGVnb3JpY2FsIGRhdGEgYW5kIGNvbG9ycyBpbmRpY2F0ZSBlYWNoIGNhdGVnb3J5LlwiXG4gICk7XG4gIC8vIGlmIG5lZWRlZCwgZm9yY2UgdmFsdWVzIGludG8gYW4gYXJyYXlcbiAgaWYgKCFBcnJheS5pc0FycmF5KHgubGFiZWxzKSkge1xuICAgIHgubGFiZWxzID0gW3gubGFiZWxzXVxuICB9XG4gIGlmICghQXJyYXkuaXNBcnJheSh4LnZhbHVlcykpIHtcbiAgICB4LnZhbHVlcyA9IFt4LnZhbHVlc11cbiAgfVxuICBpZiAoIUFycmF5LmlzQXJyYXkoeC5jb2xvcnMpKSB7XG4gICAgeC5jb2xvcnMgPSBbeC5jb2xvcnNdXG4gIH1cblxuICAvLyBjcmVhdGUgbGVnZW5kXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgeC52YWx1ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBjcmVhdGUgaXRlbSB0byBhZGQgdG8gbGVnZW5kXG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW0uY2xhc3NOYW1lID0gXCJpdGVtXCI7XG4gICAgLy8gY3JlYXRlIHRleHQgY29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIHRleHRcbiAgICBsZXQgaXRlbUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGl0ZW1MYWJlbC5jbGFzc05hbWUgPSBcIml0ZW0tbGFiZWxcIjtcbiAgICBpdGVtTGFiZWwuaW5uZXJUZXh0ID0gYCR7eC5sYWJlbHNbaV19YDtcbiAgICAvLyBjcmVhdGUgc3ltYm9sIGNvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBjb2xvclxuICAgIGxldCBpdGVtU3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtU3ltYm9sLmNsYXNzTmFtZSA9IFwiaXRlbS1zeW1ib2xcIjtcbiAgICBpdGVtU3ltYm9sLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHguY29sb3JzW2ldO1xuICAgIGl0ZW1TeW1ib2wuc3R5bGUuY29sb3IgPSB4LmNvbG9yc1tpXTtcbiAgICAvLyBhZGQgaXRlbSB0byBsZWdlbmRcbiAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1TeW1ib2wpO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUxhYmVsKTtcbiAgICBlbC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgfVxuXG4gIC8vIHJldHVybiBsZWdlbmRcbiAgcmV0dXJuIGVsO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGNvbnRpbnVvdXMgbGVnZW5kLlxuICogQHBhcmFtIHtvYmplY3R9IHggLSBPYmplY3Qgd2l0aCBpdGVtcyB0byBkaXNwbGF5IGluIGxlZ2VuZC5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0geC52YWx1ZXMgLSBTZXQgb2YgdmFsdWVzIHRoYXQgZGVmaW5lIGluY3JlbWVudHNcbiAqIGZvciB0aGUgY29sb3IgYmFyLlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB4LmNvbG9ycyAtIFNldCBvZiB2YWx1ZXMgdGhhdCBkZW5vdGUgYSBjb2xvciBmb3IgZWFjaFxuICogaW5jcmVtZW50IGluIHRoZSBjb2xvciBiYXIuXG4gKiBOb3RlIHRoYXQgdGhpcyBtdXN0IGhhdmUgdGhlIHNhbWUgbGVuZ3RoIGFzIHtAbGluayB4LnZhbHVlc30uXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHguYnJlYWtzIC0gU2V0IG9mIHZhbHVlcyB0aGF0IGRlbm90ZSBwb3NpdGlvbnMgZm9yIHRoZVxuICogdGV4dCBsYWJlbHMgdG8gYWNjb21wYW55IHRoZSBjb2xvciBiYXIuXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHgubGFiZWxzIC0gU2V0IG9mIHZhbHVlcyB0aGF0IGRlbm90ZSB0ZXh0IGxhYmVsXG4gKiB0byBhY2NvbXBhbnkgdGhlIGNvbG9yIGJhci5cbiAqIE5vdGUgdGhhdCB0aGlzIG11c3QgaGF2ZSB0aGUgc2FtZSBsZW5ndGggYXMge0BsaW5rIHguYnJlYWtzfS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB4LnVuaXRzIC0gVW5pdHMgZm9yIHRoZSBsZWdlbmQgaXRlbXMuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRpbnVvdXNMZWdlbmQoeCkge1xuICAvLyBpbml0aWFsaXplIGxlZ2VuZFxuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbC5jbGFzc0xpc3QuYWRkKFwiY29udGludW91cy1sZWdlbmRcIik7XG4gIGFkZFRvb2x0aXAoXG4gICAgZWwsXG4gICAgXCJUaGlzIGxheWVyIGhhcyBjb250aW51b3VzIGRhdGEgYW5kIHRoZSBcIiArXG4gICAgICBcImxlZ2VuZCBzaG93cyB0aGUgcmFuZ2Ugb2YgY29sb3JzIHVzZWQgZm9yIGRpc3BsYXlcIlxuICApO1xuXG4gIC8vIGNvbXB1dGUgdmFsdWVzXG4gIGxldCBtYXhWYWx1ZSA9IE1hdGgubWF4KC4uLngudmFsdWVzKTtcbiAgbGV0IG1pblZhbHVlID0gTWF0aC5taW4oLi4ueC52YWx1ZXMpO1xuICBsZXQgcmFuZ2VWYWx1ZSA9IG1heFZhbHVlIC0gbWluVmFsdWU7XG5cbiAgLy8gY3JlYXRlIGNvbG9yIGJhclxuICBsZXQgY29sb3JiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb2xvcmJhci5jbGFzc05hbWUgPSBcImNvbG9yYmFyLXJhbXBcIjtcbiAgbGV0IGNvbG9yYmFyQmFja2dyb3VuZCA9IFwibGluZWFyLWdyYWRpZW50KHRvIGxlZnRcIjtcbiAgbGV0IGNvbG9yYmFyUG9zaXRpb24gPSB1bmRlZmluZWQ7XG4gIHguY29sb3JzID0geC5jb2xvcnMucmV2ZXJzZSgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHguY29sb3JzLmxlbmd0aDsgKytpKSB7XG4gICAgY29sb3JiYXJQb3NpdGlvbiA9ICgoeC52YWx1ZXNbaV0gLSBtaW5WYWx1ZSkgLyByYW5nZVZhbHVlKSAqIDEwMDtcbiAgICBjb2xvcmJhckJhY2tncm91bmQgKz1cbiAgICAgIGAsICR7eC5jb2xvcnNbaV19ICR7Y29sb3JiYXJQb3NpdGlvbn0lYDtcbiAgfVxuICBjb2xvcmJhckJhY2tncm91bmQgKz0gXCIpXCI7XG4gIGNvbG9yYmFyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHguY29sb3JzWzBdO1xuICBjb2xvcmJhci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBjb2xvcmJhckJhY2tncm91bmQ7XG5cbiAgLy8gY3JlYXRlIHVuaXRzIGxhYmVsXG4gIGxldCB1bml0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgdW5pdHMuY2xhc3NOYW1lID0gXCJjb2xvcmJhci11bml0c1wiO1xuICBpZiAodHlwZW9mKHgudW5pdHMpID09PSBcInN0cmluZ1wiKSB7XG4gICAgdW5pdHMuaW5uZXJUZXh0ID0gYCR7eC51bml0c31gO1xuICB9XG5cbiAgLy8gY3JlYXRlIGNvbnRhaW5lciBmb3IgdGlja3MgYW5kIGxhYmVsc1xuICBsZXQgaXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpdGVtcy5jbGFzc05hbWUgPSBcImNvbG9yYmFyLWl0ZW1zXCI7XG5cbiAgLy8gY3JlYXRlIGF4aXMgdGlja3MgYW5kIGxhYmVsc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHguYnJlYWtzLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gY2FsY3VsYXRlIHdpZHRoXG4gICAgbGV0IHBvcyA9IE1hdGgucm91bmQoMTAwICogKCh4LmJyZWFrc1tpXSAtIG1pblZhbHVlKSAvIHJhbmdlVmFsdWUpKTtcbiAgICAvLyBjcmVhdGUgY29udGFpbmVyIGZvciBpJ3RoIHRpY2sgYW5kIGxhYmVsXG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW0uc3R5bGUuekluZGV4ID0gaTtcbiAgICBpdGVtLmNsYXNzTmFtZSA9IFwiY29sb3JiYXItaXRlbVwiO1xuICAgIGl0ZW0uc3R5bGUuZ3JpZENvbHVtblN0YXJ0ID0gcG9zO1xuICAgIGl0ZW0uc3R5bGUuZ3JpZENvbHVtbkVuZCA9IHBvcztcbiAgICBpdGVtLnN0eWxlLmdyaWRSb3cgPSAxO1xuICAgIGl0ZW0uc3R5bGUuekluZGV4ID0gaSArIDE7XG4gICAgLy8gY3JlYXRlIHRpY2tcbiAgICBsZXQgaXRlbVRpY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW1UaWNrLmNsYXNzTmFtZSA9IFwiY29sb3JiYXItdGlja1wiO1xuICAgIGl0ZW1UaWNrLmlubmVyVGV4dCA9IFwiIFwiO1xuICAgIC8vIGNyZWF0ZSBsYWJlbFxuICAgIGxldCBpdGVtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgaXRlbUxhYmVsLmNsYXNzTmFtZSA9IFwiY29sb3JiYXItbGFiZWxcIjtcbiAgICBpdGVtTGFiZWwuaW5uZXJUZXh0ID0gYCR7eC5sYWJlbHNbaV19YDtcbiAgICAvLyBhcHBlbmQgdG8gdGljayBhbmQgbGFiZWwgdG8gaXRlbSBjb250YWluZXJcbiAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1UaWNrKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1MYWJlbCk7XG4gICAgaXRlbXMuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gIH1cblxuICAvLyBjb25zdHJ1Y3QgbGVnZW5kXG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbG9yYmFyLWNvbnRhaW5lclwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbG9yYmFyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1zKTtcbiAgZWwuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgZWwuYXBwZW5kQ2hpbGQodW5pdHMpO1xuXG4gIC8vIHJldHVybiBsZWdlbmRcbiAgcmV0dXJuIGVsO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGxlZ2VuZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSB4IC0gT2JqZWN0IHdpdGggaXRlbXMgdG8gZGlzcGxheSBpbiBsZWdlbmQuXG4gKiBTZWUge0BsaW5rIGNyZWF0ZUNvbnRpbnVvdXNMZWdlbmR9IGFuZCB7QGxpbmsgY3JlYXRlQ2F0ZWdvcmljYWxMZWdlbmR9XG4gKiBmb3IgYWRkaXRpb25hbCBwYXJhbWV0ZXIgZGV0YWlscy5cbiAqIEBwYXJhbSB7c3RyaW5nfSB4LmNsYXNzIC0gVmFsdWUgaW5kaWNhdGluZyB0aGUgZGVzaXJlZCB0eXBlIG9mIGxlZ2VuZC5cbiAqIEFjY2VwdGFibGUgdmFsdWVzIGluY2x1ZGUgYFwiQ29udGludW91c0xlZ2VuZFwiYCBhbmQgYFwiQ2F0ZWdvcmljYWxMZWdlbmRcImAuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxlZ2VuZCh4KSB7XG4gIGlmICh4LmNsYXNzID09PSBcIkNvbnRpbnVvdXNMZWdlbmRcIikge1xuICAgIHJldHVybiBjcmVhdGVDb250aW51b3VzTGVnZW5kKHgpO1xuICB9IGVsc2UgaWYgKHguY2xhc3MgPT09IFwiQ2F0ZWdvcmljYWxMZWdlbmRcIikge1xuICAgIHJldHVybiBjcmVhdGVDYXRlZ29yaWNhbExlZ2VuZCh4KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcImNyZWF0ZUxlZ2VuZCgpOiBgeGAgbm90IGEgcmVjb2duaXplZCB2YWx1ZS5cIik7XG4gIH1cbn1cbiIsIi8qKiBJbXBvcnQgZGVwZW5kZW5jaWVzICovXG4vLyBub2RlIG1vZHVsZXNcbmltcG9ydCB7U29ydGFibGV9IGZyb20gXCJzb3J0YWJsZWpzXCI7XG5pbXBvcnQgXCJ0b20tc2VsZWN0L2Rpc3QvY3NzL3RvbS1zZWxlY3QuYm9vdHN0cmFwNS5jc3NcIjtcbmltcG9ydCBUb21TZWxlY3QgZnJvbSAndG9tLXNlbGVjdC9kaXN0L2pzL3RvbS1zZWxlY3QuY29tcGxldGUubWluLmpzJztcbi8vIGZ1bmN0aW9ucyB0byBjcmVhdGUgZWxlbWVudHNcbmltcG9ydCB7Y3JlYXRlTWVudUl0ZW19IGZyb20gXCIuL21hcHBlci1zY2FmZm9sZC5qc1wiO1xuaW1wb3J0IHtwcm9qZWN0U2VsZWN0T3B0aW9uc30gZnJvbSBcIi4uL3V0aWxzL3Byb2plY3RTZWxlY3RPcHRpb25zLmpzXCI7XG5pbXBvcnQge3NlbGVjdE9wdGlvbn0gZnJvbSBcIi4uL3V0aWxzL3Byb2plY3RTZWxlY3RPcHRpb25zLmpzXCI7XG4vLyBzdHlsaW5nXG5pbXBvcnQgXCIuL2Nzcy9zdHlsZS5jc3NcIjtcblxuLyoqIENsYXNzIHJlcHJlc2VudGluZyBhbiBvYmplY3QgZm9yIG1hbmFnaW5nIGEgbWFwLiAqL1xuZXhwb3J0IGNsYXNzIE1hcHBlciB7XG5cbiAgLy8gcHJpdmF0ZSBmaWVsZHNcblxuICAvKipcbiAgICogTWFwIG9mIGxheWVycyB0aGF0IGFyZSBoaWRkZW4gb24gbWVudS4gTm90ZSB0aGF0IHRoZXNlIGxheWVyc1xuICAgKiBhcmUgYWN0aXZlIGFuZCBoYXZlIGJlZW4gYWRkZWQgdG8gdGhlIG1hcCwgYnV0IGFyZSBub3Qgc2hvd24gb24gdGhlIG1lbnUuXG4gICAqIEB0eXBlIHtNYXA8b2JqZWN0Pn1cbiAgICovXG4gIF9oaWRkZW5MYXllcnMgPSBuZXcgTWFwKCk7XG5cbiAgLyoqXG4gICAqIFNldCB0aGF0IGNvbnRhaW5zIGlkZW50aWZpZXJzIGZvciB0aGUgbGF5ZXJzIHRoYXQgYXJlIGFjdGl2ZSBhbmQgaGF2ZSBiZWVuXG4gICAqIGFkZGVkIHRvIHRoZSBtYXAuIE5vdGUgdGhhdCB0aGlzIGluY2x1ZGVzIGhpZGRlbiBsYXllcnMuXG4gICAqIEB0eXBlIHtTZXQ8c3RyaW5nPn1cbiAgICovXG4gIF9hY3RpdmVMYXllcklkcyA9IG5ldyBTZXQoKTtcblxuICAvKipcbiAgICogTWF4aW11bSBudW1iZXIgb2YgbGF5ZXJzIHRoYXQgY2FuIGJlIGFkZGVkIHRvIHRoZSBtYXAuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBfbWF4TGF5ZXJzO1xuXG4gIC8vIHByaXZhdGUgSFRNTCBmaWVsZHNcblxuICAvKipcbiAgICogSFRNTCBFbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIE1hcGJveCBtYXAuXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIF9tYXA7XG5cbiAgLyoqXG4gICAqIEhUTUwgRWxlbWVudCB0aGF0IGNvbnRhaW5zIHRoZSBuYXZpZ2F0aW9uIG1lbnUuXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIF9tZW51O1xuXG4gIC8qKlxuICAgKiBIVE1MIEVsZW1lbnQgdGhhdCBjb250YWlucyB0aGUgc2VsZWN0IGlucHV0LlxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBfc2VsZWN0O1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIE1hcHBlciBvYmplY3Qgd2l0aCBtZW51LCBtYXAsIGFuZCBwcm9qZWN0IGRhdGEuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbGVtZW50IC0gSFRNTCBlbGVtZW50IGZvciBuYXZpZ2F0aW9uIG1lbnUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYXBJZCAtIEhUTUwgZWxlbWVudCBpZGVudGlmaWVyIGZvciB0aGUgbWFwZ2wgbWFwLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvamVjdCAtIE9iamVjdCB3aXRoIHZhcmlvdXMgdHlwZXMgb2Ygb2JqZWN0cy5cbiAgICogQHBhcmFtIHtBcnJheTxvYmplY3Q+fSBwcm9qZWN0LmZlYXR1cmVzIC0gQXJyYXkgb2YgZmVhdHVyZSBvYmplY3RzLlxuICAgKiBAcGFyYW0ge0FycmF5PG9iamVjdD59IHByb2plY3QuY29zdHMgLSBBcnJheSBvZiBjb3N0IG9iamVjdHMuXG4gICAqIEBwYXJhbSB7QXJyYXk8b2JqZWN0Pn0gcHJvamVjdC5sb2NrIC0gQXJyYXkgb2YgbG9jayBvYmplY3RzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbWF4TGF5ZXJzIC0gTWF4aW11bSBudW1iZXIgb2YgYWN0aXZlIGxheWVycyBwZXJtaXR0ZWQuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBpbml0aWFsaXplKGVsZW1lbnQsIG1hcElkLCBwcm9qZWN0LCBtYXhMYXllcnMpIHtcbiAgICAvLyBpbml0aWFsaXplIGZpZWxkc1xuICAgIHRoaXMuX21heExheWVycyA9IG1heExheWVycyB8fCAxNTtcbiAgICB0aGlzLl9tZW51ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1hcHBlci1tZW51XCIpO1xuICAgIHRoaXMuX3NlbGVjdCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYXBwZXItc2VsZWN0XCIpO1xuICAgIHRoaXMuX21hcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1hcElkKTtcbiAgICAvLyBkZWZpbmUgdGVtcG9yYXJ5IHZhcmlhYmxlc1xuICAgIGxldCBpLCBqLCBlbCwgaztcbiAgICAvLyBhZGQgbWVudSBpdGVtc1xuICAgIC8vIG5vdGUgdGhhdCB0aGlzIGNvZGUgYXNzdW1lcyB0aGF0IHRoZSB0aGlzLl9tYXAgaGFzIGJlZW5cbiAgICAvLyBpbml0aWFsaXplZCB3aXRoIGxheWVycyB0aGF0IGhhdmUgdGhlIHZpc2libGUgcHJvcGVydHkgc2V0IHRvIHRydWUsXG4gICAgLy8gYWxzbyBub3RlIHRoYXQgbGF5ZXJzIG11c3QgYmUgYWRkZWQgaW4gdGhlIG9yZGVyIHRoYXQgaXMgdGhlIHJldmVyc2VcbiAgICAvLyBvZiB0aGF0IHVzZWQgdG8gYWRkIGxheWVycyB0byB0aGUgbWFwXG4gICAgZm9yIChpID0gMDsgaSA8IHByb2plY3QuZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGVsID0gY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgIHByb2plY3QuZmVhdHVyZXNbaV0sIHRoaXMsIHByb2plY3QuZmVhdHVyZXNbaV0udGhlbWVzXG4gICAgICApO1xuICAgICAgaWYgKHByb2plY3QuZmVhdHVyZXNbaV0ubGF5ZXIudmlzaWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLl9tZW51LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgdGhpcy5fYWN0aXZlTGF5ZXJJZHMuYWRkKGVsLmRhdGFzZXQuaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faGlkZGVuTGF5ZXJzLnNldChlbC5kYXRhc2V0LmlkLCBlbCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCBwcm9qZWN0LmNvc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBlbCA9IGNyZWF0ZU1lbnVJdGVtKHByb2plY3QuY29zdHNbaV0sIHRoaXMpO1xuICAgICAgaWYgKHByb2plY3QuY29zdHNbaV0ubGF5ZXIudmlzaWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLl9tZW51LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgdGhpcy5fYWN0aXZlTGF5ZXJJZHMuYWRkKGVsLmRhdGFzZXQuaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faGlkZGVuTGF5ZXJzLnNldChlbC5kYXRhc2V0LmlkLCBlbCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCBwcm9qZWN0LmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBlbCA9IGNyZWF0ZU1lbnVJdGVtKHByb2plY3QubG9ja3NbaV0sIHRoaXMpO1xuICAgICAgaWYgKHByb2plY3QubG9ja3NbaV0ubGF5ZXIudmlzaWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLl9tZW51LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgdGhpcy5fYWN0aXZlTGF5ZXJJZHMuYWRkKGVsLmRhdGFzZXQuaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faGlkZGVuTGF5ZXJzLnNldChlbC5kYXRhc2V0LmlkLCBlbCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCBwcm9qZWN0LnNvbHV0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgZWwgPSBjcmVhdGVNZW51SXRlbShwcm9qZWN0LnNvbHV0aW9uc1tpXSwgdGhpcyk7XG4gICAgICBpZiAocHJvamVjdC5zb2x1dGlvbnNbaV0ubGF5ZXIudmlzaWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLl9tZW51LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgdGhpcy5fYWN0aXZlTGF5ZXJJZHMuYWRkKGVsLmRhdGFzZXQuaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faGlkZGVuTGF5ZXJzLnNldChlbC5kYXRhc2V0LmlkLCBlbCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGluaXRpYWxpemUgc29ydGluZyBiZWhhdmlvclxuICAgIG5ldyBTb3J0YWJsZSh0aGlzLl9tZW51LCB7XG4gICAgICBoYW5kbGU6IFwiLmhhbmRsZVwiLFxuICAgICAgYW5pbWF0aW9uOiAxNTAsXG4gICAgICBkYXRhSWRBdHRyOiBcImRhdGEtaWRcIixcbiAgICAgIGdob3N0Q2xhc3M6IFwiZ2hvc3RcIixcbiAgICAgIG9uVXBkYXRlOiBldmVudCA9PiB7XG4gICAgICAgIGxldCBiZWZvcmVJZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGV2ZW50Lm5ld0luZGV4ID4gMCkge1xuICAgICAgICAgIGJlZm9yZUlkID1cbiAgICAgICAgICAgIGV2ZW50LnRvLmNoaWxkcmVuW2V2ZW50Lm5ld0luZGV4IC0gMV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdmVMYXllck9uTWFwKGV2ZW50Lml0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSwgYmVmb3JlSWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGluaXRpYWxpemUgc2VsZWN0IG1lbnVcbiAgICBsZXQgc2VsZWN0T3B0aW9ucyA9IHByb2plY3RTZWxlY3RPcHRpb25zKHByb2plY3QpO1xuICAgIG5ldyBUb21TZWxlY3QodGhpcy5fc2VsZWN0LCB7XG4gICAgICBvcHRpb25zOiBzZWxlY3RPcHRpb25zLm9wdGlvbnMsXG4gICAgICBpdGVtczogWy4uLnRoaXMuX2FjdGl2ZUxheWVySWRzXSxcbiAgICAgIGNyZWF0ZTogZmFsc2UsXG4gICAgICBkcm9wZG93blBhcmVudDogXCJib2R5XCIsXG4gICAgICBsYWJlbEZpZWxkOiBcIm5hbWVcIixcbiAgICAgIHNlYXJjaEZpZWxkOiBbXCJuYW1lXCJdLFxuICAgICAgbWF4T3B0aW9uczogbnVsbCxcbiAgICAgIHNvcnRGaWVsZDogXCJzb3J0XCIsXG4gICAgICBjbG9zZUFmdGVyU2VsZWN0OiBmYWxzZSxcbiAgICAgIG9wdGdyb3Vwczogc2VsZWN0T3B0aW9ucy5vcHRncm91cHMsXG4gICAgICBvcHRncm91cEZpZWxkOiBcImdyb3VwXCIsXG4gICAgICBwbHVnaW5zOiB7XG4gICAgICAgIGNoZWNrYm94X29wdGlvbnM6IHt9XG4gICAgICB9LFxuICAgICAgcmVuZGVyOiB7XG4gICAgICAgIG9wdGdyb3VwX2hlYWRlcjogZnVuY3Rpb24oZGF0YSwgZXNjYXBlKSB7XG4gICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwib3B0Z3JvdXAtaGVhZGVyXCI+JHtlc2NhcGUoZGF0YS52YWx1ZSl9PC9kaXY+YDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uSXRlbUFkZDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmVMYXllcklkcy5oYXModmFsdWUpKSB7XG4gICAgICAgICAgdGhpcy5zaG93TGF5ZXJPbk1lbnUodmFsdWUpO1xuICAgICAgICAgIHRoaXMubW92ZUxheWVyT25NYXAodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChIVE1MV2lkZ2V0cy5zaGlueU1vZGUpIHtcbiAgICAgICAgICAgIFNoaW55LnNldElucHV0VmFsdWUoXG4gICAgICAgICAgICAgIGAke2VsZW1lbnQuaWR9X3N5bmNgLFxuICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAge3ByaW9yaXR5OiBcImV2ZW50XCJ9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uSXRlbVJlbW92ZTogKHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMuaGlkZUxheWVyT25NZW51KHZhbHVlLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBsYXllciB0byB0aGUgTWFwcGVyIG9iamVjdC4gTm90ZSB0aGF0IGlmIGFkZGluZyB0aGlzIG5ldyBsYXllclxuICAgKiB3b3VsZCBleGNlZWQgdGhlIG1heGltdW0gbnVtYmVyIG9mIHBlcm1pdHRlZCBhY3RpdmUgbGF5ZXJzLCB0aGVuXG4gICAqIHRoZSBvbGRlc3QgYWN0aXZlIGxheWVyIHdpbGwgYmUgcmVtb3ZlZCBhdXRvbWF0aWNhbGx5LlxuICAgKiBAcGFyYW0ge09iamVjdH0gbGF5ZXIgLSBPYmplY3QgdGhhdCBpcyBhIGxvY2sgb3IgYSBzb2x1dGlvbi5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGFkZExheWVyKGxheWVyKSB7XG4gICAgLy8gY3JlYXRlIG1lbnUgaXRlbVxuICAgIGxldCBlbCA9IGNyZWF0ZU1lbnVJdGVtKGxheWVyLCB0aGlzKTtcbiAgICAvLyBhZGQgbWVudSBpdGVtIHRvIGhpZGRlbiBtZW51IGl0ZW1zXG4gICAgdGhpcy5faGlkZGVuTGF5ZXJzLnNldChlbC5kYXRhc2V0LmlkLCBlbCk7XG4gICAgLy8gc2V0IGxheWVyIGFzIGFjdGl2ZVxuICAgIHRoaXMuX2FjdGl2ZUxheWVySWRzLmFkZChlbC5kYXRhc2V0LmlkKTtcbiAgICAvLyBhZGQgbGF5ZXIgdG8gbWVudVxuICAgIHRoaXMuc2hvd0xheWVyT25NZW51KGVsLmRhdGFzZXQuaWQsIHRydWUsIGZhbHNlKTtcbiAgICAvLyBhZGQgbWVudSBpdGVtIHRvIHNlbGVjdFxuICAgIHRoaXMuX3NlbGVjdC50b21zZWxlY3QuYWRkT3B0aW9uKHNlbGVjdE9wdGlvbihsYXllcikpO1xuICAgIHRoaXMuX3NlbGVjdC50b21zZWxlY3QuYWRkSXRlbShsYXllci5pZCwgdHJ1ZSk7XG4gICAgLy8gaWYgbnVtYmVyIG9mIGFjdGl2ZSBsYXllcnMgZXhjZWVkcyBsaW1pdCwgdGhlbiByZW1vdmUgb2xkZXN0IGxheWVyXG4gICAgaWYgKHRoaXMuX2FjdGl2ZUxheWVySWRzLnNpemUgPiB0aGlzLl9tYXhMYXllcnMpIHtcbiAgICAgIGxldCByZW1vdmVJZCA9IHRoaXMuX2FjdGl2ZUxheWVySWRzLnZhbHVlcygpLm5leHQoKS52YWx1ZTtcbiAgICAgIHRoaXMucmVtb3ZlTGF5ZXJGcm9tTWFwKHJlbW92ZUlkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGlkZSBsYXllciBvbiBtZW51LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGF5ZXJJZCAtIEhUTUwgaWRlbnRpZmllciBmb3IgbGF5ZXIuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXBkYXRlTWFwIC0gU2hvdWxkIHRoZSBtYXAgYWxzbyBiZSB1cGRhdGVkIHRvIHJlZmxlY3RcbiAgICogdGhlc2UgY2hhbmdlcyB0byB0aGUgbWVudT9cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGhpZGVMYXllck9uTWVudShsYXllcklkLCB1cGRhdGVNYXAgPSB0cnVlKSB7XG4gICAgLy8gZmluZCBlbGVtZW50IGZvciBsYXllcidzIG1lbnUgaXRlbVxuICAgIGxldCBlbCA9IHRoaXMuX21lbnUucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2xheWVySWR9XCJdYCk7XG4gICAgLy8gdXBkYXRlIG1lbnVcbiAgICBpZiAoZWwpIHtcbiAgICAgIC8vIHJlbW92ZSBlbGVtZW50IGZyb20gbWVudVxuICAgICAgZWwucmVtb3ZlKCk7XG4gICAgICAvLyBhZGQgbWVudSBpdGVtIHRvIGhpZGRlbiBtZW51IGl0ZW1zXG4gICAgICB0aGlzLl9oaWRkZW5MYXllcnMuc2V0KGVsLmRhdGFzZXQuaWQsIGVsKTtcbiAgICB9XG4gICAgLy8gaWYgbmVlZGVkLCB1cGRhdGUgbWFwXG4gICAgaWYgKHVwZGF0ZU1hcCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5oaWRlTGF5ZXJPbk1hcChsYXllcklkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBsYXllciBvbiBtZW51LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGF5ZXJJZCAtIEhUTUwgaWRlbnRpZmllciBmb3IgbGF5ZXIuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvd0xlZ2VuZCAtIFNob3VsZCB0aGUgbGVnZW5kIGJlIHNob3duIG9uIHRoZSBtZW51P1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVwZGF0ZU1hcCAtIFNob3VsZCB0aGUgbWFwIGFsc28gYmUgdXBkYXRlZCB0byByZWZsZWN0XG4gICAqIHRoZXNlIGNoYW5nZXMgdG8gdGhlIG1lbnU/XG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBzaG93TGF5ZXJPbk1lbnUobGF5ZXJJZCwgc2hvd0xlZ2VuZCA9IHRydWUsIHVwZGF0ZU1hcCA9IHRydWUpIHtcbiAgICAvLyBmaW5kIGVsZW1lbnQgZm9yIGxheWVyJ3MgbWVudSBpdGVtXG4gICAgbGV0IGVsID0gdGhpcy5faGlkZGVuTGF5ZXJzLmdldChsYXllcklkKTtcbiAgICAvLyBmaW5kIG1lbnUgaXRlbSBjaGVja2JveCBmb3Igc2hvd2luZyBtYXAgYW5kIHNldCBhY2NvcmRpbmdseVxuICAgIGxldCBsYXllckNoZWNrYm94ID0gZWwucXVlcnlTZWxlY3RvcihcIi5sYXllci1jaGVja2JveFwiKTtcbiAgICBsYXllckNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgIC8vIGZpbmQgbWVudSBpdGVtIGNoZWNrYm94IGZvciBzaG93aW5nIGxlZ2VuZCBhbmQgc2V0IGFjY29yZGluZ2x5XG4gICAgbGV0IGxlZ2VuZENoZWNrYm94ID0gZWwucXVlcnlTZWxlY3RvcihcIi5sZWdlbmQtY2hlY2tib3hcIik7XG4gICAgaWYgKHNob3dMZWdlbmQgPT09IHRydWUpIHtcbiAgICAgIGxlZ2VuZENoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBpZiBuZWVkZWQsIHNob3cgbGF5ZXIgb24gbWFwXG4gICAgaWYgKHVwZGF0ZU1hcCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5zaG93TGF5ZXJPbk1hcChsYXllcklkKTtcbiAgICB9XG4gICAgLy8gYWRkIGxheWVyIHRvIG1lbnVcbiAgICB0aGlzLl9tZW51LnByZXBlbmQoZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgbGF5ZXIgb24gbWFwLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGF5ZXJJZCAtIEhUTUwgaWRlbnRpZmllciBmb3IgbGF5ZXIuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBzaG93TGF5ZXJPbk1hcChsYXllcklkKSB7XG4gICAgLy8gc2V0IGxheWVyIHZpc2liaWxpdHkgb24gbWFwXG4gICAgdGhpcy5fbWFwLm1hcC5zZXRMYXlvdXRQcm9wZXJ0eShcbiAgICAgIFwibHlyLVwiICsgbGF5ZXJJZCwgXCJ2aXNpYmlsaXR5XCIsIFwidmlzaWJsZVwiXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAqIEhpZGUgbGF5ZXIgb24gbWFwLlxuICAqIEBwYXJhbSB7c3RyaW5nfSBsYXllcklkIC0gSFRNTCBpZGVudGlmaWVyIGZvciBsYXllci47XG4gICogQHBhcmFtIHtib29sZWFufSB1cGRhdGVDaGVja2JveCAtIFNob3VsZCB0aGUgY2hlY2tib3ggb24gdGhlIG1lbnVcbiAgKiBiZSB1cGRhdGVkIHRvIHNob3cgdGhlIGxheWVyIGlzIGhpZGRlbiBvbiBtYXA/XG4gICogQHJldHVybiB7dm9pZH1cbiAgKi9cbiAgaGlkZUxheWVyT25NYXAobGF5ZXJJZCwgdXBkYXRlQ2hlY2tib3ggPSB0cnVlKSB7XG4gICAgLy8gc2V0IGxheWVyIHZpc2liaWxpdHkgb24gbWFwXG4gICAgdGhpcy5fbWFwLm1hcC5zZXRMYXlvdXRQcm9wZXJ0eShcbiAgICAgIFwibHlyLVwiICsgbGF5ZXJJZCwgXCJ2aXNpYmlsaXR5XCIsIFwibm9uZVwiXG4gICAgKTtcbiAgICAvLyBzZXQgY2hlY2tib3ggdG8gYmUgdW5jaGVja2VkXG4gICAgaWYgKHVwZGF0ZUNoZWNrYm94ID09PSB0cnVlKSB7XG4gICAgICBsZXQgZWwgPSB0aGlzLl9tZW51LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbZGF0YS1pZD1cIiR7bGF5ZXJJZH1cIl0gLmxheWVyLWNoZWNrYm94YFxuICAgICAgKTtcbiAgICAgIGlmIChlbCkge1xuICAgICAgICBlbC5jaGVja2VkID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTW92ZSBsYXllciBvbiBtYXAuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYXllcklkIC0gSFRNTCBpZGVudGlmaWVyIGZvciBsYXllciB0byB1cGRhdGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBiZWZvcmVJZCAtIEhUTUwgaWRlbnRpZmllciBmb3IgdGhlIGxheWVyIHRoYXQgc2hvdWxkIGJlXG4gICAqIGBsYXllcklkYCBzaG91bGQgYmUgaW5zZXJ0ZWQgYmVmb3JlIChpbiBvdGhlciB3b3JkcywgYGxheWVySWRgIHdpbGwgYXBwZWFyXG4gICAqIHVuZGVyIGBiZWZvcmVJZGApLiBJZiBgYmVmb3JlSWQgPSB1bmRlZmluZWRgLCB0aGVuIHRoZSBsYXllciBpcyBtb3ZlZCB0b1xuICAgKiB0aGUgdmVyeSB0b3AuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBtb3ZlTGF5ZXJPbk1hcChsYXllcklkLCBiZWZvcmVJZCkge1xuICAgIC8vIG1vdmUgbGF5ZXIgb24gbWFwXG4gICAgaWYgKHR5cGVvZihiZWZvcmVJZCkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRoaXMuX21hcC5tYXAubW92ZUxheWVyKFwibHlyLVwiICsgbGF5ZXJJZCwgXCJseXItXCIgKyBiZWZvcmVJZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX21hcC5tYXAubW92ZUxheWVyKFwibHlyLVwiICsgbGF5ZXJJZCwgdW5kZWZpbmVkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGxheWVyIG9uIG1hcC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGxheWVySWQgLSBIVE1MIGlkZW50aWZpZXIgZm9yIGxheWVyLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgcmVtb3ZlTGF5ZXJGcm9tTWFwKGxheWVySWQpIHtcbiAgICAvLyByZW1vdmUgbGF5ZXIgZnJvbSBtZW51XG4gICAgdGhpcy5fc2VsZWN0LnRvbXNlbGVjdC5yZW1vdmVJdGVtKGxheWVySWQpO1xuICAgIC8vIHJlbW92ZSBsYXllciBmcm9tIHNldCBvZiBhY3RpdmUgbGF5ZXJzXG4gICAgdGhpcy5fYWN0aXZlTGF5ZXJJZHMuZGVsZXRlKGxheWVySWQpO1xuICAgIC8vIHJlbW92ZSBsYXllciBmcm9tIG1hcFxuICAgIHRoaXMuX21hcC5tYXAucmVtb3ZlTGF5ZXIoXCJseXItXCIgKyBsYXllcklkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEb2VzIHRoZSBtYXAgaGF2ZSBhIHBhcnRpY3VsYXIgbGF5ZXIgYWN0aXZlP1xuICAgKiBAcGFyYW0ge3N0cmluZ30gbGF5ZXJJZCAtIEhUTUwgaWRlbnRpZmllciBmb3IgbGF5ZXIuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBoYXNMYXllckFjdGl2ZShsYXllcklkKSB7XG4gICAgdGhpcy5fYWN0aXZlTGF5ZXJJZHMuaGFzKGxheWVyX2lkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IGFsbCBtZW51IGxheWVycyBvbiBtYXAuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICAgc2hvd0FsbE1lbnVMYXllcnNPbk1hcCgpIHtcbiAgICB0aGlzLl9tZW51XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5tYXBwZXItbWVudS1pdGVtXCIpXG4gICAgICAuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICB0aGlzLnNob3dMYXllck9uTWFwKHguZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSk7XG4gICAgICAgIHgucXVlcnlTZWxlY3RvcihcIi5sYXllci1jaGVja2JveFwiKS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIGFsbCBtZW51IGxheWVycyBvbiBtYXAuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICAgaGlkZUFsbE1lbnVMYXllcnNPbk1hcCgpIHtcbiAgICB0aGlzLl9tZW51XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5tYXBwZXItbWVudS1pdGVtXCIpXG4gICAgICAuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICB0aGlzLmhpZGVMYXllck9uTWFwKHguZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSk7XG4gICAgICAgIHgucXVlcnlTZWxlY3RvcihcIi5sYXllci1jaGVja2JveFwiKS5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9KTtcbiAgIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBsYXllcnMgZnJvbSB0aGUgbWVudSBhbmQgdGhlIG1hcC5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gICByZW1vdmVBbGxMYXllcnNGcm9tTWVudUFuZE1hcCgpIHtcbiAgICB0aGlzLl9tZW51XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5tYXBwZXItbWVudS1pdGVtXCIpXG4gICAgICAuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZUxheWVyRnJvbU1hcCh4LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikpO1xuICAgICAgfSlcbiAgIH1cblxufVxuIiwiLyoqIEltcG9ydCBkZXBlbmRlbmNpZXMgKi9cbi8vIGZ1bmN0aW9ucyB0byBjcmVhdGUgZWxlbWVudHNcbmltcG9ydCB7Y3JlYXRlTGVnZW5kfSBmcm9tIFwiLi9jcmVhdGUtbGVnZW5kLmpzXCI7XG5pbXBvcnQge2NyZWF0ZVByb3ZlbmFuY2V9IGZyb20gXCIuLi91dGlscy9lbGVtZW50LmpzXCI7XG5pbXBvcnQge2NyZWF0ZU5hbWVMYWJlbH0gZnJvbSBcIi4uL3V0aWxzL2VsZW1lbnQuanNcIjtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgbWVudSBpdGVtLlxuICogQHBhcmFtIHtvYmplY3R9IHggLSBPYmplY3Qgd2l0aCBtZW51IGl0ZW0gaW5mb3JtYXRpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30geC5pZCAtIEhUTUwgZWxlbWVudCBpZGVudGlmaWVyIGZvciB0aGUgbWVudSBpdGVtLlxuICogQHBhcmFtIHtzdHJpbmd9IHgubmFtZSAtIE5hbWUgZm9yIHRoZSBtZW51IGl0ZW0uXG4gKiBAcGFyYW0ge29iamVjdH0geC5sYXllciAtIHtAbGluayBMYXllcn0gb2JqZWN0LlxuICogQHBhcmFtIHtTdHJpbmd9IHguY2xhc3MgLSBDbGFzcyBmb3IgbGF5ZXIuIEF2YWlsYWJsZSBvcHRpb25zIGluY2x1ZGVcbiAqIGBcIkZlYXR1cmVcImAsIGBcIkNvc3RcImAsIGBcIkxvY2tcImAsIGFuZCBgXCJTb2x1dGlvblwiYC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBtYXBwZXIgLSB7QGxpbmsgTWFwcGVyfSBvYmplY3QuXG4gKiBAcGFyYW0ge0FycmF5PG9iamVjdD59IHRoZW1lcyAtIFRoZW1lcyB0byB3aGljaCB0aGUgbWVudSBpdGVtIGJlbG9uZ3MuXG4gKiBOb3RlIHRoYXQgdGhpcyBpcyB0aGUgbmFtZXMgb2YgdGhlIHRoZW1lcyBmb3IgZmVhdHVyZSBsYXllcnMuXG4gKiBAcmV0dXJuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZW51SXRlbSh4LCBtYXBwZXIsIHRoZW1lcyA9IHVuZGVmaW5lZCkge1xuICAvLyBpbml0aWFsaXplIGNvbnRhaW5lciBlbGVtZW50XG4gIGxldCBlbCA9IGRvY3VtZW50LmltcG9ydE5vZGUoXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgeC5jbGFzcy50b0xvd2VyQ2FzZSgpICsgXCItbGF5ZXItdGVtcGxhdGVcIilcbiAgICAgIC5jb250ZW50LFxuICAgIHRydWUpLmNoaWxkcmVuWzBdO1xuXG4gIC8vIGZpbmQgY29tcG9uZW50cyBvZiBjb250YWluZXIgZWxlbWVudFxuICBsZXQgc2hvd0xlZ2VuZENoZWNrYm94ID0gZWwucXVlcnlTZWxlY3RvcihcIi5sZWdlbmQtY2hlY2tib3hcIik7XG4gIGxldCBzaG93TGF5ZXJDaGVja2JveCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIubGF5ZXItY2hlY2tib3hcIik7XG4gIGxldCByZW1vdmVMYXllckZyb21NYXBCdXR0b24gPSBlbC5xdWVyeVNlbGVjdG9yKFwiLmxheWVyLWJ1dHRvblwiKTtcbiAgbGV0IGxlZ2VuZEVsZW1lbnQgPSBlbC5xdWVyeVNlbGVjdG9yKFwiLmxlZ2VuZC1jb250YWluZXJcIik7XG4gIGxldCBuYW1lRWxlbWVudCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIubmFtZS1jb250YWluZXJcIik7XG4gIGxldCBwcm92ZW5hbmNlRWxlbWVudCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIucHJvdmVuYW5jZS1jb250YWluZXJcIik7XG4gIGxldCBoYW5kbGVFbGVtZW50ID0gZWwucXVlcnlTZWxlY3RvcihcIi5oYW5kbGVcIik7XG5cbiAgLy8gc2V0IGxheWVyIGlkXG4gIGVsLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgeC5pZCk7XG5cbiAgLy8gY3JlYXRlIG5hbWUgbGFiZWxcbiAgbmFtZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTmFtZUxhYmVsKHgpKTtcblxuICAvLyBzZXQgbGF5ZXIgY2hlY2tib3ggc3RhdHVzXG4gIHNob3dMYXllckNoZWNrYm94LmNoZWNrZWQgPSB4LmxheWVyLnZpc2libGU7XG5cbiAgLy8gc2V0IGxlZ2VuZCBjaGVja2JveFxuICBzaG93TGVnZW5kQ2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG5cbiAgLy8gYWRkIGxlZ2VuZFxuICBsZWdlbmRFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUxlZ2VuZCh4LmxheWVyLmxlZ2VuZCkpO1xuXG4gIC8vIGFkZCBwcm92ZW5hbmNlXG4gIHByb3ZlbmFuY2VFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZVByb3ZlbmFuY2UoeC5sYXllci5wcm92ZW5hbmNlKSk7XG5cbiAgLy8gc2V0IGxpc3RlbmVyIGZvciBjaGVja2JveCB0byBzaG93L2hpZGUgbGVnZW5kXG4gIHNob3dMZWdlbmRDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICBsZWdlbmRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlZ2VuZEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gc2V0IGxpc3RlbmVyIGZvciBidXR0b24gdG8gaGlkZSBsYXllclxuICBzaG93TGF5ZXJDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICBtYXBwZXIuc2hvd0xheWVyT25NYXAoeC5pZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hcHBlci5oaWRlTGF5ZXJPbk1hcCh4LmlkLCBmYWxzZSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBzZXQgbGlzdGVuZXIgZm9yIGJ1dHRvbiB0byBkcm9wIGxheWVyXG4gIHJlbW92ZUxheWVyRnJvbU1hcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIG1hcHBlci5fc2VsZWN0LnRvbXNlbGVjdC5yZW1vdmVJdGVtKHguaWQpO1xuICB9KTtcblxuICAvLyByZXR1cm4gZWxlbWVudFxuICByZXR1cm4gZWw7XG59O1xuIiwiLyoqIEltcG9ydCBkZXBlbmRlbmNpZXMgKi9cbi8vIHN0eWxpbmdcbmltcG9ydCBcIi4vY3NzL3N0eWxlLmNzc1wiO1xuXG4vKipcbiAqIEFkZCBhIHRvb2wgdGlwLlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIEhUTUwgZWxlbWVudCB0aGF0IHJlcXVpcmVzIGEgdG9vbCB0aXAuO1xuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IHRvIGRpc3BsYXkgaW4gdG9vbCB0aXAuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9vbHRpcChlbGVtZW50LCB0ZXh0KSB7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10b2dnbGVcIiwgXCJ0b29sdGlwXCIpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtcGxhY2VtZW50XCIsIFwidG9wXCIpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtY29udGFpbmVyXCIsIFwiYm9keVwiKTtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCB0ZXh0KTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBwcm92ZW5hbmNlLlxuICogQHBhcmFtIHtvYmplY3R9IHggLSBPYmplY3Qgd2l0aCBwcm9wZXJ0aWVzIGZvciBjdXN0b21pemF0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IHguZGVzY3JpcHRpb24gLSBUZXh0IHRvIGRpc3BsYXkgaW4gdG9vbCB0aXAuXG4gKiBAcGFyYW0ge3N0cmluZ30geC5pY29uIC0gTmFtZSBvZiBGb250IEF3ZXNvbWUgaWNvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSB4LmNvbG9yIC0gQ29sb3IgZm9yIGljb24uXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb3ZlbmFuY2UoeCkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgZWwuY2xhc3NMaXN0LmFkZChcInByb3ZlbmFuY2VcIik7XG4gIGlmICh0eXBlb2YoeC5kZXNjcmlwdGlvbikgPT09IFwic3RyaW5nXCIpIHtcbiAgICBhZGRUb29sdGlwKGVsLCB4LmRlc2NyaXB0aW9uKTtcbiAgfVxuICBlbC5jbGFzc0xpc3QuYWRkKFwiZmFzXCIpO1xuICBlbC5jbGFzc0xpc3QuYWRkKFwiZmEtXCIgKyB4Lmljb24pO1xuICBlbC5zdHlsZS5jb2xvciA9IHguY29sb3I7XG4gIHJldHVybiBlbDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuYW1lIGxhYmVsLlxuICogQHBhcmFtIHtvYmplY3R9IHggLSBPYmplY3Qgd2l0aCBwcm9wZXJ0aWVzIGZvciBjdXN0b21pemF0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IHguZGVzY3JpcHRpb24gLSBUZXh0IHRvIGRpc3BsYXkgaW4gdG9vbCB0aXAuXG4gKiBAcGFyYW0ge3N0cmluZ30geC5pY29uIC0gTmFtZSBvZiBGb250IEF3ZXNvbWUgaWNvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSB4LmNvbG9yIC0gQ29sb3IgZm9yIGljb24uXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5hbWVMYWJlbCh4KSB7XG4gIC8vIGNyZWF0ZSBlbGVtZW50XG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZWwuY2xhc3NMaXN0LmFkZChcIm5hbWUtbGFiZWxcIik7XG4gIC8vIHNldCBsYXllciBuYW1lXG4gIGVsLmlubmVyVGV4dCA9IHgubmFtZTtcbiAgLy8gaW5pdGlhbGl6ZSBwb3B1cCB0ZXh0XG4gIGxldCB0aXRsZSA9IFwiXCI7XG4gIC8vIGlmIG5lZWRlZCwgYWRkIHRoZW1lIGluZm9ybWF0aW9uIHRvIHBvcHVwIHRleHRcbiAgaWYgKHR5cGVvZih4LnRoZW1lcykgPT09IFwib2JqZWN0XCIpIHtcbiAgICB0aXRsZSArPSBgVGhpcyAke3guY2xhc3N9IGJlbG9uZ3MgdG8gdGhlIGZvbGxvd2luZyB0aGVtZXM6YDtcbiAgICB0aXRsZSArPSBgICR7eC50aGVtZXNbMF0ubmFtZX0gKCR7eC50aGVtZXNbMF0uem9uZX0gem9uZSlgO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgeC50aGVtZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHRpdGxlICs9IGAsICR7eC50aGVtZXNbaV0ubmFtZX0gKCR7eC50aGVtZXNbaV0uem9uZX0gem9uZSlgO1xuICAgIH1cbiAgfVxuICAvLyBpZiBuZWVkZWQsIGFkZCBkZXRhaWxzIHRvIHBvcHVwIHRleHRcbiAgaWYgKHR5cGVvZih4LmxheWVyKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YoeC5sYXllci5kZXRhaWxzKSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGlmICh0aXRsZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aXRsZSArPSBcIiBcIjtcbiAgICB9XG4gICAgdGl0bGUgKz0geC5sYXllci5kZXRhaWxzO1xuICB9XG4gIC8vIGlmIG5lZWRlZCwgaW5pdGlhbGl6ZSBwb3B1cFxuICBpZiAodGl0bGUubGVuZ3RoID4gMCkge1xuICAgIGFkZFRvb2x0aXAoZWwsIHRpdGxlICsgXCIuXCIpO1xuICB9XG4gIC8vIHJldHVybiBlbGVtZW50XG4gIHJldHVybiBlbDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBoYW5kbGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb24gLSBUZXh0IHRvIGRpc3BsYXkgaW4gdG9vbCB0aXAuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhhbmRsZShkZXNjcmlwdGlvbikge1xuICAvLyBjcmVhdGUgZWxlbWVudFxuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbC5jbGFzc0xpc3QuYWRkKFwiaGFuZGxlXCIpO1xuICAvLyBjcmVhdGUgaWNvblxuICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBpZiAodHlwZW9mKGRlc2NyaXB0aW9uKSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGFkZFRvb2x0aXAoZWwsIGRlc2NyaXB0aW9uKTtcbiAgfVxuICBpY29uLmNsYXNzTGlzdC5hZGQoXCJmYXNcIiwgXCJmYS1hcnJvd3MtYWx0XCIpO1xuICBpY29uLnN0eWxlLmNvbG9yID0gXCItLWhhbmRsZVwiO1xuICAvLyBhcHBlbmQgaWNvbiB0byBlbGVtZW50XG4gIGVsLmFwcGVuZENoaWxkKGljb24pO1xuICAvLyByZXR1cm4gZWxlbWVudFxuICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgc2V0IG9mIHN3aXRjaGVzXG4gKiBAcGFyYW0ge251bWJlcn0gbiAtIE51bWJlciBvZiBzd2l0Y2hlcyB0byBjcmVhdGUuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN3aXRjaGVzKG4gPSAxLCBjaGVja2VkID0gdHJ1ZSkge1xuICAvLyBjcmVhdGUgY29udGFpbmVyXG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsLmNsYXNzTGlzdC5hZGQoXCJzd2l0Y2hlc1wiKTtcbiAgLy8gY3JlYXRlIHN3aXRjaGVzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgLy8gY3JlYXRlIHN3aXRjaCBmb3JtXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImZvcm0tY2hlY2tcIiwgXCJmb3JtLXN3aXRjaFwiLCBcInAtMFwiLCBcIm0tMFwiKTtcbiAgICAvLyBjcmVhdGUgc3dpdGNoIGlucHV0XG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jaGVjay1pbnB1dFwiLCBcInN3aXRjaFwiLCBcIm1zLTBcIik7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcInN3aXRjaFwiKTtcbiAgICBpbnB1dC5jaGVja2VkID0gY2hlY2tlZDtcbiAgICAvLyBhcHBlbmQgZWxlbWVudFxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGVsLmFwcGVuZENoaWxkKGZvcm0pO1xuICB9XG4gIC8vIHJldHVybiBlbGVtZW50XG4gIHJldHVybiBlbDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYnV0dG9uIGdyb3VwXG4gKiBAcGFyYW0ge3N0cmluZ30gZ3JvdXBMYWJlbCAtIExhYmVsIGZvciBlYWNoIGJ1dHRvbiBncm91cC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBidXR0b25MYWJlbHMgLSBMYWJlbCBmb3IgZWFjaCBvZiB0aGUgYnV0dG9ucy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBncm91cENvbG9ycyAtIENvbG9ycyBmb3IgZ3JvdXAgbGFiZWxzLlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCdXR0b25Hcm91cHMoZ3JvdXBMYWJlbHMsIGJ1dHRvbkxhYmVscywgZ3JvdXBDb2xvcnMpIHtcbiAgLy8gY3JlYXRlIGNvbnRhaW5lclxuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbC5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLWdyb3Vwc1wiLCBcImJvcmRlclwiLCBcInJvdW5kZWRcIik7XG4gIC8vIGFkZCBlYWNoIGdyb3VwXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JvdXBMYWJlbHMubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBjcmVhdGUgcm93IGNvbnRhaW5lclxuICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwiZm9ybS1ncm91cFwiLCBcInJvd1wiKTtcbiAgICAvLyBjcmVhdGUgbGFiZWxcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWwuaW5uZXJUZXh0ID0gZ3JvdXBMYWJlbHNbaV0gKyBcIjpcIjtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgXCJjb2wtc21cIiwgXCJjb2wtZm9ybS1sYWJlbFwiLCBcImNvbC1mb3JtLWxhYmVsLXNtXCIsIFwiZnctYm9sZFwiXG4gICAgKTtcbiAgICBsYWJlbC5zdHlsZS5jb2xvciA9IGdyb3VwQ29sb3JzW2ldO1xuICAgIC8vIGNyZWF0ZSBidXR0b24gZ3JvdXBcbiAgICBsZXQgZ3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdyb3VwLmNsYXNzTGlzdC5hZGQoXCJjb2wtc21cIiwgXCJidG4tZ3JvdXBcIiwgXCJidG4tZ3JvdXAtc21cIik7XG4gICAgLy8gYWRkIGJ1dHRvbnMgdG8gY29udGFpbmVyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBidXR0b25MYWJlbHMubGVuZ3RoOyArK2opIHtcbiAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIiwgXCJidG4tc21cIiwgXCJidG4tbGlnaHRcIik7XG4gICAgICBidG4uc2V0QXR0cmlidXRlKFwiZGF0YS1ncm91cC1pbmRleFwiLCBpKTtcbiAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWdyb3VwLWxhYmVsXCIsIGdyb3VwTGFiZWxzW2ldKTtcbiAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWxhYmVsXCIsIGJ1dHRvbkxhYmVsc1tqXSk7XG4gICAgICBidG4uaW5uZXJUZXh0ID0gYnV0dG9uTGFiZWxzW2pdO1xuICAgICAgZ3JvdXAuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICB9XG4gICAgLy8gYWRkIHRvIHJvdyBjb250XG4gICAgcm93LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICByb3cuYXBwZW5kQ2hpbGQoZ3JvdXApO1xuICAgIGVsLmFwcGVuZENoaWxkKHJvdyk7XG4gIH1cbiAgLy8gcmV0dXJuIGVsZW1lbnQ7XG4gIHJldHVybiBlbDtcbn1cbiIsIi8qKlxuICogR2VuZXJhdGUgcGFyYW1ldGVycyBmb3IgYSBUb20gU2VsZWN0IHdpZGdldCBiYXNlZCBvbiBhIHByb2plY3QuXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvamVjdCAtIFByb2plY3Qgb2JqZWN0LlxuICogQHBhcmFtIHtBcnJheTxvYmplY3Q+fSBwcm9qZWN0LmZlYXR1cmVzIC0gQXJyYXkgb2YgRmVhdHVyZSBvYmplY3RzLlxuICogQHBhcmFtIHtBcnJheTxvYmplY3Q+fSBwcm9qZWN0LmxvY2tzIC0gQXJyYXkgb2YgTG9jayBvYmplY3RzLlxuICogQHBhcmFtIHtBcnJheTxvYmplY3Q+fSBwcm9qZWN0LmNvc3RzIC0gQXJyYXkgb2YgQ29zdCBvYmplY3RzLlxuICogQHBhcmFtIHtBcnJheTxvYmplY3Q+fSBwcm9qZWN0LnNvbHV0aW9ucyAtIEFycmF5IG9mIFNvbHV0aW9uIG9iamVjdHMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVGZWF0dXJlcyAtIFNob3VsZCBmZWF0dXJlcyBiZSBpbmNsdWRlZCBpbiB0aGVcbiAqIG91dHB1dD9cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZUNvc3RzIC0gU2hvdWxkIGNvc3RzIGJlIGluY2x1ZGVkIGluIHRoZVxuICogb3V0cHV0P1xuICogQHBhcmFtIHtib29sZWFufSBpbmNsdWRlTG9ja3MgLSBTaG91bGQgbG9ja3MgYmUgaW5jbHVkZWQgaW4gdGhlXG4gKiBvdXRwdXQ/XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVTb2x1dGlvbnMgLSBTaG91bGQgc29sdXRpb25zIGJlIGluY2x1ZGVkIGluIHRoZVxuICogb3V0cHV0P1xuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdFNlbGVjdE9wdGlvbnMoXG4gIHByb2plY3QsXG4gIGluY2x1ZGVGZWF0dXJlcyA9IHRydWUsXG4gIGluY2x1ZGVDb3N0cyA9IHRydWUsXG4gIGluY2x1ZGVMb2NrcyA9IHRydWUsXG4gIGluY2x1ZGVTb2x1dGlvbnMgPSB0cnVlXG4pIHtcbiAgLy8gaW5pdGlhbGl6ZSB2YXJpYWJsZXNcbiAgbGV0IG9wdGlvbnMgPSBBcnJheShcbiAgICAocHJvamVjdC5mZWF0dXJlcy5sZW5ndGggKiBpbmNsdWRlRmVhdHVyZXMpICtcbiAgICAocHJvamVjdC5jb3N0cy5sZW5ndGggKiBpbmNsdWRlQ29zdHMpICtcbiAgICAocHJvamVjdC5sb2Nrcy5sZW5ndGggKiBpbmNsdWRlTG9ja3MpICtcbiAgICAocHJvamVjdC5zb2x1dGlvbnMubGVuZ3RoICogaW5jbHVkZVNvbHV0aW9ucylcbiAgKTtcbiAgbGV0IGdyb3VwcyA9IG5ldyBTZXQoKTtcbiAgbGV0IGluY2x1ZGVDbGFzcyA9XG4gICAgKGluY2x1ZGVGZWF0dXJlcyArIGluY2x1ZGVDb3N0cyArIGluY2x1ZGVMb2NrcyArIGluY2x1ZGVTb2x1dGlvbnMpID4gMTtcbiAgLy8gZGVmaW5lIGNvdW50ZXJzXG4gIGxldCBpLCBqLCBrO1xuICBrID0gMDtcbiAgLy8gaWYgbmVlZGVkLCBhZGQgZmVhdHVyZXNcbiAgaWYgKGluY2x1ZGVGZWF0dXJlcykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBwcm9qZWN0LmZlYXR1cmVzLmxlbmd0aDsgKytpKSB7XG4gICAgICBvcHRpb25zW2tdID0gc2VsZWN0T3B0aW9uKHByb2plY3QuZmVhdHVyZXNbaV0sIGluY2x1ZGVDbGFzcyk7XG4gICAgICBmb3IgKGogPSAwOyBqIDwgb3B0aW9uc1tpXS5ncm91cC5sZW5ndGg7ICsraikge1xuICAgICAgICBncm91cHMuYWRkKG9wdGlvbnNbaV0uZ3JvdXBbal0pO1xuICAgICAgfVxuICAgICAgKytrO1xuICAgIH07XG4gIH1cbiAgLy8gaWYgbmVlZGVkLCBhZGQgbG9ja3NcbiAgaWYgKGluY2x1ZGVMb2Nrcykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBwcm9qZWN0LmxvY2tzLmxlbmd0aDsgKytpKSB7XG4gICAgICBvcHRpb25zW2tdID0gc2VsZWN0T3B0aW9uKHByb2plY3QubG9ja3NbaV0sIGluY2x1ZGVDbGFzcyk7XG4gICAgICArK2s7XG4gICAgfTtcbiAgICBncm91cHMuYWRkKFwiTG9ja3NcIik7XG4gIH1cbiAgLy8gaWYgbmVlZGVkLCBhZGQgY29zdHNcbiAgaWYgKGluY2x1ZGVDb3N0cykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBwcm9qZWN0LmNvc3RzLmxlbmd0aDsgKytpKSB7XG4gICAgICBvcHRpb25zW2tdID0gc2VsZWN0T3B0aW9uKHByb2plY3QuY29zdHNbaV0sIGluY2x1ZGVDbGFzcyk7XG4gICAgICArK2s7XG4gICAgfTtcbiAgICBncm91cHMuYWRkKFwiQ29zdHNcIik7XG4gIH1cbiAgLy8gaWYgbmVlZGVkLCBhZGQgc29sdXRpb25zXG4gIGlmIChpbmNsdWRlU29sdXRpb25zKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IHByb2plY3Quc29sdXRpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICBvcHRpb25zW2tdID0gc2VsZWN0T3B0aW9uKHByb2plY3Quc29sdXRpb25zW2ldLCBpbmNsdWRlQ2xhc3MpO1xuICAgICAgKytrO1xuICAgIH07XG4gICAgZ3JvdXBzLmFkZChcIlNvbHV0aW9uc1wiKTtcbiAgfVxuICAvLyByZXR1cm4gb2JqZWN0XG4gIHJldHVybiB7XG4gICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICBvcHRncm91cHM6IEFycmF5LmZyb20oZ3JvdXBzKS5tYXAoeCA9PiB7cmV0dXJuIHt2YWx1ZTogeH19KVxuICB9O1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIFRvbSBTZWxlY3Qgb3B0aW9uIGZvciBhIHByb2plY3QgZWxlbWVudC5cbiAqIEBwYXJhbSB7b2JqZWN0fSB4IC0gT2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IHguaWQgLSBVbmlxdWUgaWRlbnRpZmllci5cbiAqIEBwYXJhbSB7c3RyaW5nfSB4Lm5hbWUgLSBOYW1lLlxuICogQHBhcmFtIHtzdHJpbmd9IHguY2xhc3MgLSBUeXBlIG9mIG9iamVjdC5cbiAqIEBwYXJhbSB7QXJyYXk8b2JqZWN0Pn0geC50aGVtZSAtIE9wdGlvbmFsIGFycmF5IG9mIHRoZW1lIG9iamVjdHMuXG4gKiBAcGFyYW0ge3N0cmluZ30geC50aGVtZXMubmFtZSAtIE5hbWUgb2YgdGhlbWUuXG4gKiBAcGFyYW0ge3N0cmluZ30geC50aGVtZXMuem9uZSAtIFpvbmUgYXNzb2NpYXRlZCB3aXRoIHRoZW1lLlxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0T3B0aW9uKHgsIGluY2x1ZGVDbGFzcyA9IHRydWUpIHtcbiAgLy8gaW5pdGlhbGl6ZSBvYmplY3RcbiAgbGV0IG91dCA9IHt2YWx1ZTogeC5pZCwgbmFtZTogeC5uYW1lfTtcbiAgLy8gcHJvY2VzcyBncm91cFxuICBsZXQgZ3JvdXAgPSB4LmNsYXNzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgeC5jbGFzcy5zbGljZSgxKSArIFwic1wiO1xuICBpZiAoeC50aGVtZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIGlmIG9iamVjdCBoYXMgdGhlbWVzLCB0aGVuIGFkZCBncm91cHMgYmFzZWQgb24gdGhlbVxuICAgIGlmIChpbmNsdWRlQ2xhc3MpIHtcbiAgICAgIG91dC5ncm91cCA9IHgudGhlbWVzLm1hcCh5ID0+IGAke2dyb3VwfSAoJHt0aGVtZUdyb3VwTmFtZSh5KX0pYCkuc29ydCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXQuZ3JvdXAgPSB4LnRoZW1lcy5tYXAoeSA9PiB0aGVtZUdyb3VwTmFtZSh5KSkuc29ydCgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBvdGhlcndpc2UsIHRoZW4gYWRkIGdyb3VwIGJhc2VkIG9uIGNsYXNzIG5hbWVcbiAgICBvdXQuZ3JvdXAgPSBncm91cDtcbiAgfVxuICAvLyBwcm9jZXNzIHNvcnQga2V5XG4gIGxldCBvcmQgPSBbXCJGZWF0dXJlc1wiLCBcIkxvY2tzXCIsIFwiQ29zdHNcIiwgXCJTb2x1dGlvbnNcIl07XG4gIGxldCBpID0gb3JkLmluZGV4T2YoZ3JvdXApICsgMTtcbiAgaWYgKGkgPCAwKSB7XG4gICAgaSA9IDk5OTsgLy8gaWYgY2xhc3Mgbm90IHJlY29nbml6ZWQsIHRoZW4gcHV0IGl0IGxhc3RcbiAgfVxuICBvdXQuc29ydCA9IGAke2l9LSR7eC5uYW1lfWA7XG4gIC8vIHJldHVybiBvYmplY3RcbiAgcmV0dXJuIG91dFxufVxuXG4vKipcbiAqIENyZWF0ZSBhIGdyb3VwIG5hbWUgZm9yIGEgdGhlbWUuXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0IC0gVGhlbWUgb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IG9iamVjdC5uYW1lIC0gTmFtZSBvZiB0aGVtZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBvYmplY3Quem9uZSAtIFpvbmUgYXNzb2NpYXRlZCB3aXRoIHRoZSB0aGVtZS5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gdGhlbWVHcm91cE5hbWUob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Yob2JqZWN0LnpvbmUpID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIGAke29iamVjdC56b25lfTogJHtvYmplY3QubmFtZX1gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBvYmplY3QubmFtZTtcbiAgfVxufVxuIiwiLyoqXG4qIFRvbSBTZWxlY3QgdjIuNi4yXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qL1xuIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6KGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczplfHxzZWxmKS5Ub21TZWxlY3Q9dCgpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCJcbmZ1bmN0aW9uIGUoZSx0KXtlLnNwbGl0KC9cXHMrLykuZm9yRWFjaChlPT57dChlKX0pfWNsYXNzIHR7Y29uc3RydWN0b3IoKXt0aGlzLl9ldmVudHM9e319b24odCxpKXtlKHQsZT0+e2NvbnN0IHQ9dGhpcy5fZXZlbnRzW2VdfHxbXVxudC5wdXNoKGkpLHRoaXMuX2V2ZW50c1tlXT10fSl9b2ZmKHQsaSl7dmFyIHM9YXJndW1lbnRzLmxlbmd0aFxuMCE9PXM/ZSh0LGU9PntpZigxPT09cylyZXR1cm4gdm9pZCBkZWxldGUgdGhpcy5fZXZlbnRzW2VdXG5jb25zdCB0PXRoaXMuX2V2ZW50c1tlXVxudm9pZCAwIT09dCYmKHQuc3BsaWNlKHQuaW5kZXhPZihpKSwxKSx0aGlzLl9ldmVudHNbZV09dCl9KTp0aGlzLl9ldmVudHM9e319dHJpZ2dlcih0LC4uLmkpe3ZhciBzPXRoaXNcbmUodCxlPT57Y29uc3QgdD1zLl9ldmVudHNbZV1cbnZvaWQgMCE9PXQmJnQuZm9yRWFjaChlPT57ZS5hcHBseShzLGkpfSl9KX19Y29uc3QgaT1lPT4oZT1lLmZpbHRlcihCb29sZWFuKSkubGVuZ3RoPDI/ZVswXXx8XCJcIjoxPT1sKGUpP1wiW1wiK2Uuam9pbihcIlwiKStcIl1cIjpcIig/OlwiK2Uuam9pbihcInxcIikrXCIpXCIscz1lPT57aWYoIW8oZSkpcmV0dXJuIGUuam9pbihcIlwiKVxubGV0IHQ9XCJcIixpPTBcbmNvbnN0IHM9KCk9PntpPjEmJih0Kz1cIntcIitpK1wifVwiKX1cbnJldHVybiBlLmZvckVhY2goKG4sbyk9PntuIT09ZVtvLTFdPyhzKCksdCs9bixpPTEpOmkrK30pLHMoKSx0fSxuPWU9PntsZXQgdD1BcnJheS5mcm9tKGUpXG5yZXR1cm4gaSh0KX0sbz1lPT5uZXcgU2V0KGUpLnNpemUhPT1lLmxlbmd0aCxyPWU9PihlK1wiXCIpLnJlcGxhY2UoLyhbXFwkXFwoXFwpXFwqXFwrXFwuXFw/XFxbXFxdXFxeXFx7XFx8XFx9XFxcXF0pL2d1LFwiXFxcXCQxXCIpLGw9ZT0+ZS5yZWR1Y2UoKGUsdCk9Pk1hdGgubWF4KGUsYSh0KSksMCksYT1lPT5BcnJheS5mcm9tKGUpLmxlbmd0aCxjPWU9PntpZigxPT09ZS5sZW5ndGgpcmV0dXJuW1tlXV1cbmxldCB0PVtdXG5jb25zdCBpPWUuc3Vic3RyaW5nKDEpXG5yZXR1cm4gYyhpKS5mb3JFYWNoKGZ1bmN0aW9uKGkpe2xldCBzPWkuc2xpY2UoMClcbnNbMF09ZS5jaGFyQXQoMCkrc1swXSx0LnB1c2gocykscz1pLnNsaWNlKDApLHMudW5zaGlmdChlLmNoYXJBdCgwKSksdC5wdXNoKHMpfSksdH0sZD1bWzAsNjU1MzVdXVxubGV0IHUscFxuY29uc3QgaD17fSxnPXtcIi9cIjpcIuKBhOKIlVwiLDA6XCLfgFwiLGE6XCLisaXJkMmRXCIsYWE6XCLqnLNcIixhZTpcIsOmx73Ho1wiLGFvOlwi6py1XCIsYXU6XCLqnLdcIixhdjpcIuqcueqcu1wiLGF5Olwi6py9XCIsYjpcIsaAyZPGg1wiLGM6XCLqnL/GiMi84oaEXCIsZDpcIsSRyZfJluG0hcaM6q631IHJplwiLGU6XCLJm8ed4bSHyYdcIixmOlwi6p28xpJcIixnOlwix6XJoOqeoeG1ueqdv8miXCIsaDpcIsSn4rGo4rG2yaVcIixpOlwiyajEsVwiLGo6XCLJici3XCIsazpcIsaZ4rGq6p2B6p2D6p2F6p6jXCIsbDpcIsWCxprJq+Kxoeqdieqdh+qegcmtXCIsbTpcIsmxya/Pu1wiLG46XCLqnqXGnsmy6p6R4bSO0LvUiVwiLG86XCLDuMe/yZTJteqdi+qdjeG0kVwiLG9lOlwixZNcIixvaTpcIsajXCIsb286XCLqnY9cIixvdTpcIsijXCIscDpcIsal4bW96p2R6p2T6p2Vz4FcIixxOlwi6p2X6p2ZyYtcIixyOlwiyY3Jveqdm+qep+qeg1wiLHM6XCLDn8i/6p6p6p6FyoJcIix0OlwixafGrcqI4rGm6p6HXCIsdGg6XCLDvlwiLHR6Olwi6pypXCIsdTpcIsqJXCIsdjpcIsqL6p2fyoxcIix2eTpcIuqdoVwiLHc6XCLisbNcIix5OlwixrTJj+G7v1wiLHo6XCLGtsilyYDisazqnaNcIixodjpcIsaVXCJ9XG5mb3IobGV0IGUgaW4gZyl7bGV0IHQ9Z1tlXXx8XCJcIlxuZm9yKGxldCBpPTA7aTx0Lmxlbmd0aDtpKyspe2xldCBzPXQuc3Vic3RyaW5nKGksaSsxKVxuaFtzXT1lfX1jb25zdCBmPW5ldyBSZWdFeHAoT2JqZWN0LmtleXMoaCkuam9pbihcInxcIikrXCJ8W8yALc2vwrfKvsq8XVwiLFwiZ3VcIiksbT0oZSx0PVwiTkZLRFwiKT0+ZS5ub3JtYWxpemUodCksdj1lPT5BcnJheS5mcm9tKGUpLnJlZHVjZSgoZSx0KT0+ZStPKHQpLFwiXCIpLE89ZT0+KGU9bShlKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoZixlPT5oW2VdfHxcIlwiKSxtKGUsXCJORkNcIikpXG5jb25zdCBiPWU9Pntjb25zdCB0PXt9LGk9KGUsaSk9Pntjb25zdCBzPXRbZV18fG5ldyBTZXQsbz1uZXcgUmVnRXhwKFwiXlwiK24ocykrXCIkXCIsXCJpdVwiKVxuaS5tYXRjaChvKXx8KHMuYWRkKHIoaSkpLHRbZV09cyl9XG5mb3IobGV0IHQgb2YgZnVuY3Rpb24qKGUpe2Zvcihjb25zdFt0LGldb2YgZSlmb3IobGV0IGU9dDtlPD1pO2UrKyl7bGV0IHQ9U3RyaW5nLmZyb21DaGFyQ29kZShlKSxpPXYodClcbmkhPXQudG9Mb3dlckNhc2UoKSYmKGkubGVuZ3RoPjN8fDAhPWkubGVuZ3RoJiYoeWllbGR7Zm9sZGVkOmksY29tcG9zZWQ6dCxjb2RlX3BvaW50OmV9KSl9fShlKSlpKHQuZm9sZGVkLHQuZm9sZGVkKSxpKHQuZm9sZGVkLHQuY29tcG9zZWQpXG5yZXR1cm4gdH0seT1lPT57Y29uc3QgdD1iKGUpLHM9e31cbmxldCBvPVtdXG5mb3IobGV0IGUgaW4gdCl7bGV0IGk9dFtlXVxuaSYmKHNbZV09bihpKSksZS5sZW5ndGg+MSYmby5wdXNoKHIoZSkpfW8uc29ydCgoZSx0KT0+dC5sZW5ndGgtZS5sZW5ndGgpXG5jb25zdCBsPWkobylcbnJldHVybiBwPW5ldyBSZWdFeHAoXCJeXCIrbCxcInVcIiksc30sdz0oZSx0PTEpPT4odD1NYXRoLm1heCh0LGUubGVuZ3RoLTEpLGkoYyhlKS5tYXAoZT0+KChlLHQ9MSk9PntsZXQgaT0wXG5yZXR1cm4gZT1lLm1hcChlPT4odVtlXSYmKGkrPWUubGVuZ3RoKSx1W2VdfHxlKSksaT49dD9zKGUpOlwiXCJ9KShlLHQpKSkpLFM9KGUsdD0hMCk9PntsZXQgbj1lLmxlbmd0aD4xPzE6MFxucmV0dXJuIGkoZS5tYXAoZT0+e2xldCBpPVtdXG5jb25zdCBvPXQ/ZS5sZW5ndGgoKTplLmxlbmd0aCgpLTFcbmZvcihsZXQgdD0wO3Q8bzt0KyspaS5wdXNoKHcoZS5zdWJzdHJzW3RdfHxcIlwiLG4pKVxucmV0dXJuIHMoaSl9KSl9LF89KGUsdCk9Pntmb3IoY29uc3QgaSBvZiB0KXtpZihpLnN0YXJ0IT1lLnN0YXJ0fHxpLmVuZCE9ZS5lbmQpY29udGludWVcbmlmKGkuc3Vic3Rycy5qb2luKFwiXCIpIT09ZS5zdWJzdHJzLmpvaW4oXCJcIikpY29udGludWVcbmxldCB0PWUucGFydHNcbmNvbnN0IHM9ZT0+e2Zvcihjb25zdCBpIG9mIHQpe2lmKGkuc3RhcnQ9PT1lLnN0YXJ0JiZpLnN1YnN0cj09PWUuc3Vic3RyKXJldHVybiExXG5pZigxIT1lLmxlbmd0aCYmMSE9aS5sZW5ndGgpe2lmKGUuc3RhcnQ8aS5zdGFydCYmZS5lbmQ+aS5zdGFydClyZXR1cm4hMFxuaWYoaS5zdGFydDxlLnN0YXJ0JiZpLmVuZD5lLnN0YXJ0KXJldHVybiEwfX1yZXR1cm4hMX1cbmlmKCEoaS5wYXJ0cy5maWx0ZXIocykubGVuZ3RoPjApKXJldHVybiEwfXJldHVybiExfVxuY2xhc3MgQ3twYXJ0c1xuc3Vic3Ryc1xuc3RhcnRcbmVuZFxuY29uc3RydWN0b3IoKXt0aGlzLnBhcnRzPVtdLHRoaXMuc3Vic3Rycz1bXSx0aGlzLnN0YXJ0PTAsdGhpcy5lbmQ9MH1hZGQoZSl7ZSYmKHRoaXMucGFydHMucHVzaChlKSx0aGlzLnN1YnN0cnMucHVzaChlLnN1YnN0ciksdGhpcy5zdGFydD1NYXRoLm1pbihlLnN0YXJ0LHRoaXMuc3RhcnQpLHRoaXMuZW5kPU1hdGgubWF4KGUuZW5kLHRoaXMuZW5kKSl9bGFzdCgpe3JldHVybiB0aGlzLnBhcnRzW3RoaXMucGFydHMubGVuZ3RoLTFdfWxlbmd0aCgpe3JldHVybiB0aGlzLnBhcnRzLmxlbmd0aH1jbG9uZShlLHQpe2xldCBpPW5ldyBDLHM9SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnBhcnRzKSksbj1zLnBvcCgpXG5mb3IoY29uc3QgZSBvZiBzKWkuYWRkKGUpXG5sZXQgbz10LnN1YnN0ci5zdWJzdHJpbmcoMCxlLW4uc3RhcnQpLHI9by5sZW5ndGhcbnJldHVybiBpLmFkZCh7c3RhcnQ6bi5zdGFydCxlbmQ6bi5zdGFydCtyLGxlbmd0aDpyLHN1YnN0cjpvfSksaX19Y29uc3QgeD1lPT57dm9pZCAwPT09dSYmKHU9eShkKSksZT12KGUpXG5sZXQgdD1cIlwiLGk9W25ldyBDXVxuZm9yKGxldCBzPTA7czxlLmxlbmd0aDtzKyspe2xldCBuPWUuc3Vic3RyaW5nKHMpLm1hdGNoKHApXG5jb25zdCBvPWUuc3Vic3RyaW5nKHMscysxKSxyPW4/blswXTpudWxsXG5sZXQgbD1bXSxhPW5ldyBTZXRcbmZvcihjb25zdCBlIG9mIGkpe2NvbnN0IHQ9ZS5sYXN0KClcbmlmKCF0fHwxPT10Lmxlbmd0aHx8dC5lbmQ8PXMpaWYocil7Y29uc3QgdD1yLmxlbmd0aFxuZS5hZGQoe3N0YXJ0OnMsZW5kOnMrdCxsZW5ndGg6dCxzdWJzdHI6cn0pLGEuYWRkKFwiMVwiKX1lbHNlIGUuYWRkKHtzdGFydDpzLGVuZDpzKzEsbGVuZ3RoOjEsc3Vic3RyOm99KSxhLmFkZChcIjJcIilcbmVsc2UgaWYocil7bGV0IGk9ZS5jbG9uZShzLHQpXG5jb25zdCBuPXIubGVuZ3RoXG5pLmFkZCh7c3RhcnQ6cyxlbmQ6cytuLGxlbmd0aDpuLHN1YnN0cjpyfSksbC5wdXNoKGkpfWVsc2UgYS5hZGQoXCIzXCIpfWlmKGwubGVuZ3RoPjApe2w9bC5zb3J0KChlLHQpPT5lLmxlbmd0aCgpLXQubGVuZ3RoKCkpXG5mb3IobGV0IGUgb2YgbClfKGUsaSl8fGkucHVzaChlKX1lbHNlIGlmKHM+MCYmMT09YS5zaXplJiYhYS5oYXMoXCIzXCIpKXt0Kz1TKGksITEpXG5sZXQgZT1uZXcgQ1xuY29uc3Qgcz1pWzBdXG5zJiZlLmFkZChzLmxhc3QoKSksaT1bZV19fXJldHVybiB0Kz1TKGksITApLHR9LEE9KGUsdCk9PntpZihlKXJldHVybiBlW3RdfSxJPShlLHQpPT57aWYoZSl7Zm9yKHZhciBpLHM9dC5zcGxpdChcIi5cIik7KGk9cy5zaGlmdCgpKSYmKGU9ZVtpXSk7KTtyZXR1cm4gZX19LGs9KGUsdCxpKT0+e3ZhciBzLG5cbnJldHVybiBlPyhlKz1cIlwiLG51bGw9PXQucmVnZXh8fC0xPT09KG49ZS5zZWFyY2godC5yZWdleCkpPzA6KHM9dC5zdHJpbmcubGVuZ3RoL2UubGVuZ3RoLDA9PT1uJiYocys9LjUpLHMqaSkpOjB9LEY9KGUsdCk9Pnt2YXIgaT1lW3RdXG5pZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBpKXJldHVybiBpXG5pJiYhQXJyYXkuaXNBcnJheShpKSYmKGVbdF09W2ldKX0sTD0oZSx0KT0+e2lmKEFycmF5LmlzQXJyYXkoZSkpZS5mb3JFYWNoKHQpXG5lbHNlIGZvcih2YXIgaSBpbiBlKWUuaGFzT3duUHJvcGVydHkoaSkmJnQoZVtpXSxpKX0sRT0oZSx0KT0+XCJudW1iZXJcIj09dHlwZW9mIGUmJlwibnVtYmVyXCI9PXR5cGVvZiB0P2U+dD8xOmU8dD8tMTowOihlPXYoZStcIlwiKS50b0xvd2VyQ2FzZSgpKT4odD12KHQrXCJcIikudG9Mb3dlckNhc2UoKSk/MTp0PmU/LTE6MFxuY2xhc3MgVHtpdGVtc1xuc2V0dGluZ3NcbmNvbnN0cnVjdG9yKGUsdCl7dGhpcy5pdGVtcz1lLHRoaXMuc2V0dGluZ3M9dHx8e2RpYWNyaXRpY3M6ITB9fXRva2VuaXplKGUsdCxpKXtpZighZXx8IWUubGVuZ3RoKXJldHVybltdXG5jb25zdCBzPVtdLG49ZS5zcGxpdCgvXFxzKy8pXG52YXIgb1xucmV0dXJuIGkmJihvPW5ldyBSZWdFeHAoXCJeKFwiK09iamVjdC5rZXlzKGkpLm1hcChyKS5qb2luKFwifFwiKStcIik6KC4qKSRcIikpLG4uZm9yRWFjaChlPT57bGV0IGksbj1udWxsLGw9bnVsbFxubyYmKGk9ZS5tYXRjaChvKSkmJihuPWlbMV0sZT1pWzJdKSxlLmxlbmd0aD4wJiYobD10aGlzLnNldHRpbmdzLmRpYWNyaXRpY3M/eChlKXx8bnVsbDpyKGUpLGwmJnQmJihsPVwiXFxcXGJcIitsKSkscy5wdXNoKHtzdHJpbmc6ZSxyZWdleDpsP25ldyBSZWdFeHAobCxcIml1XCIpOm51bGwsZmllbGQ6bn0pfSksc31nZXRTY29yZUZ1bmN0aW9uKGUsdCl7dmFyIGk9dGhpcy5wcmVwYXJlU2VhcmNoKGUsdClcbnJldHVybiB0aGlzLl9nZXRTY29yZUZ1bmN0aW9uKGkpfV9nZXRTY29yZUZ1bmN0aW9uKGUpe2NvbnN0IHQ9ZS50b2tlbnMsaT10Lmxlbmd0aFxuaWYoIWkpcmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIDB9XG5jb25zdCBzPWUub3B0aW9ucy5maWVsZHMsbj1lLndlaWdodHMsbz1zLmxlbmd0aCxyPWUuZ2V0QXR0ckZuXG5pZighbylyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gMX1cbmNvbnN0IGw9MT09PW8/ZnVuY3Rpb24oZSx0KXtjb25zdCBpPXNbMF0uZmllbGRcbnJldHVybiBrKHIodCxpKSxlLG5baV18fDEpfTpmdW5jdGlvbihlLHQpe3ZhciBpPTBcbmlmKGUuZmllbGQpe2NvbnN0IHM9cih0LGUuZmllbGQpXG4hZS5yZWdleCYmcz9pKz0xL286aSs9ayhzLGUsMSl9ZWxzZSBMKG4sKHMsbik9PntpKz1rKHIodCxuKSxlLHMpfSlcbnJldHVybiBpL299XG5yZXR1cm4gMT09PWk/ZnVuY3Rpb24oZSl7cmV0dXJuIGwodFswXSxlKX06XCJhbmRcIj09PWUub3B0aW9ucy5jb25qdW5jdGlvbj9mdW5jdGlvbihlKXt2YXIgcyxuPTBcbmZvcihsZXQgaSBvZiB0KXtpZigocz1sKGksZSkpPD0wKXJldHVybiAwXG5uKz1zfXJldHVybiBuL2l9OmZ1bmN0aW9uKGUpe3ZhciBzPTBcbnJldHVybiBMKHQsdD0+e3MrPWwodCxlKX0pLHMvaX19Z2V0U29ydEZ1bmN0aW9uKGUsdCl7dmFyIGk9dGhpcy5wcmVwYXJlU2VhcmNoKGUsdClcbnJldHVybiB0aGlzLl9nZXRTb3J0RnVuY3Rpb24oaSl9X2dldFNvcnRGdW5jdGlvbihlKXt2YXIgdCxpPVtdXG5jb25zdCBzPXRoaXMsbj1lLm9wdGlvbnMsbz0hZS5xdWVyeSYmbi5zb3J0X2VtcHR5P24uc29ydF9lbXB0eTpuLnNvcnRcbmlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG8pcmV0dXJuIG8uYmluZCh0aGlzKVxuY29uc3Qgcj1mdW5jdGlvbih0LGkpe3JldHVyblwiJHNjb3JlXCI9PT10P2kuc2NvcmU6ZS5nZXRBdHRyRm4ocy5pdGVtc1tpLmlkXSx0KX1cbmlmKG8pZm9yKGxldCB0IG9mIG8pKGUucXVlcnl8fFwiJHNjb3JlXCIhPT10LmZpZWxkKSYmaS5wdXNoKHQpXG5pZihlLnF1ZXJ5KXt0PSEwXG5mb3IobGV0IGUgb2YgaSlpZihcIiRzY29yZVwiPT09ZS5maWVsZCl7dD0hMVxuYnJlYWt9dCYmaS51bnNoaWZ0KHtmaWVsZDpcIiRzY29yZVwiLGRpcmVjdGlvbjpcImRlc2NcIn0pfWVsc2UgaT1pLmZpbHRlcihlPT5cIiRzY29yZVwiIT09ZS5maWVsZClcbnJldHVybiBpLmxlbmd0aD9mdW5jdGlvbihlLHQpe3ZhciBzLG5cbmZvcihsZXQgbyBvZiBpKXtpZihuPW8uZmllbGQscz0oXCJkZXNjXCI9PT1vLmRpcmVjdGlvbj8tMToxKSpFKHIobixlKSxyKG4sdCkpKXJldHVybiBzfXJldHVybiAwfTpudWxsfXByZXBhcmVTZWFyY2goZSx0KXtjb25zdCBpPXt9XG52YXIgcz1PYmplY3QuYXNzaWduKHt9LHQpXG5pZihGKHMsXCJzb3J0XCIpLEYocyxcInNvcnRfZW1wdHlcIikscy5maWVsZHMpe0YocyxcImZpZWxkc1wiKVxuY29uc3QgZT1bXVxucy5maWVsZHMuZm9yRWFjaCh0PT57XCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PXtmaWVsZDp0LHdlaWdodDoxfSksZS5wdXNoKHQpLGlbdC5maWVsZF09XCJ3ZWlnaHRcImluIHQ/dC53ZWlnaHQ6MX0pLHMuZmllbGRzPWV9cmV0dXJue29wdGlvbnM6cyxxdWVyeTplLnRvTG93ZXJDYXNlKCkudHJpbSgpLHRva2Vuczp0aGlzLnRva2VuaXplKGUscy5yZXNwZWN0X3dvcmRfYm91bmRhcmllcyxpKSx0b3RhbDowLGl0ZW1zOltdLHdlaWdodHM6aSxnZXRBdHRyRm46cy5uZXN0aW5nP0k6QX19c2VhcmNoKGUsdCl7dmFyIGkscyxuPXRoaXNcbnM9dGhpcy5wcmVwYXJlU2VhcmNoKGUsdCksdD1zLm9wdGlvbnMsZT1zLnF1ZXJ5XG5jb25zdCBvPXQuc2NvcmV8fG4uX2dldFNjb3JlRnVuY3Rpb24ocylcbmUubGVuZ3RoP0wobi5pdGVtcywoZSxuKT0+e2k9byhlKSwoITE9PT10LmZpbHRlcnx8aT4wKSYmcy5pdGVtcy5wdXNoKHtzY29yZTppLGlkOm59KX0pOkwobi5pdGVtcywoZSx0KT0+e3MuaXRlbXMucHVzaCh7c2NvcmU6MSxpZDp0fSl9KVxuY29uc3Qgcj1uLl9nZXRTb3J0RnVuY3Rpb24ocylcbnJldHVybiByJiZzLml0ZW1zLnNvcnQocikscy50b3RhbD1zLml0ZW1zLmxlbmd0aCxcIm51bWJlclwiPT10eXBlb2YgdC5saW1pdCYmKHMuaXRlbXM9cy5pdGVtcy5zbGljZSgwLHQubGltaXQpKSxzfX1jb25zdCBQPWU9Pm51bGw9PWU/bnVsbDpOKGUpLE49ZT0+XCJib29sZWFuXCI9PXR5cGVvZiBlP2U/XCIxXCI6XCIwXCI6ZStcIlwiLEQ9ZT0+KGUrXCJcIikucmVwbGFjZSgvJi9nLFwiJmFtcDtcIikucmVwbGFjZSgvPC9nLFwiJmx0O1wiKS5yZXBsYWNlKC8+L2csXCImZ3Q7XCIpLnJlcGxhY2UoL1wiL2csXCImcXVvdDtcIiksVj0oZSx0KT0+e3ZhciBpXG5yZXR1cm4gZnVuY3Rpb24ocyxuKXt2YXIgbz10aGlzXG5pJiYoby5sb2FkaW5nPU1hdGgubWF4KG8ubG9hZGluZy0xLDApLGNsZWFyVGltZW91dChpKSksaT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aT1udWxsLG8ubG9hZGVkU2VhcmNoZXNbc109ITAsZS5jYWxsKG8scyxuKX0sdCl9fSxqPShlLHQsaSk9Pnt2YXIgcyxuPWUudHJpZ2dlcixvPXt9XG5mb3IocyBvZihlLnRyaWdnZXI9ZnVuY3Rpb24oKXt2YXIgaT1hcmd1bWVudHNbMF1cbmlmKC0xPT09dC5pbmRleE9mKGkpKXJldHVybiBuLmFwcGx5KGUsYXJndW1lbnRzKVxub1tpXT1hcmd1bWVudHN9LGkuYXBwbHkoZSxbXSksZS50cmlnZ2VyPW4sdCkpcyBpbiBvJiZuLmFwcGx5KGUsb1tzXSl9LCQ9KGUsdD0hMSk9PntlJiYoZS5wcmV2ZW50RGVmYXVsdCgpLHQmJmUuc3RvcFByb3BhZ2F0aW9uKCkpfSxxPShlLHQsaSxzKT0+e2UuYWRkRXZlbnRMaXN0ZW5lcih0LGkscyl9LFI9KGUsdCk9PiEhdCYmKCEhdFtlXSYmMT09PSh0LmFsdEtleT8xOjApKyh0LmN0cmxLZXk/MTowKSsodC5zaGlmdEtleT8xOjApKyh0Lm1ldGFLZXk/MTowKSksSD0oZSx0KT0+e2NvbnN0IGk9ZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKVxucmV0dXJuIGl8fChlLnNldEF0dHJpYnV0ZShcImlkXCIsdCksdCl9LE09ZT0+ZS5yZXBsYWNlKC9bXFxcXFwiJ10vZyxcIlxcXFwkJlwiKSx6PShlLHQpPT57dCYmZS5hcHBlbmQodCl9LEI9KGUsdCk9PntpZihBcnJheS5pc0FycmF5KGUpKWUuZm9yRWFjaCh0KVxuZWxzZSBmb3IodmFyIGkgaW4gZSllLmhhc093blByb3BlcnR5KGkpJiZ0KGVbaV0saSl9LEs9ZT0+e2lmKGUuanF1ZXJ5KXJldHVybiBlWzBdXG5pZihlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpcmV0dXJuIGVcbmlmKEcoZSkpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKVxucmV0dXJuIHQuaW5uZXJIVE1MPWUudHJpbSgpLHQuY29udGVudC5maXJzdENoaWxkfXJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUpfSxHPWU9Plwic3RyaW5nXCI9PXR5cGVvZiBlJiZlLmluZGV4T2YoXCI8XCIpPi0xLFU9KGUsdCk9Pnt2YXIgaT1kb2N1bWVudC5jcmVhdGVFdmVudChcIkhUTUxFdmVudHNcIilcbmkuaW5pdEV2ZW50KHQsITAsITEpLGUuZGlzcGF0Y2hFdmVudChpKX0sVz0oZSx0KT0+e09iamVjdC5hc3NpZ24oZS5zdHlsZSx0KX0sUT0oZSwuLi50KT0+e3ZhciBpPVgodCk7KGU9WShlKSkubWFwKGU9PntpLm1hcCh0PT57ZS5jbGFzc0xpc3QuYWRkKHQpfSl9KX0sSj0oZSwuLi50KT0+e3ZhciBpPVgodCk7KGU9WShlKSkubWFwKGU9PntpLm1hcCh0PT57ZS5jbGFzc0xpc3QucmVtb3ZlKHQpfSl9KX0sWD1lPT57dmFyIHQ9W11cbnJldHVybiBCKGUsZT0+e1wic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT1lLnRyaW0oKS5zcGxpdCgvW1xcdFxcblxcZlxcclxcc10vKSksQXJyYXkuaXNBcnJheShlKSYmKHQ9dC5jb25jYXQoZSkpfSksdC5maWx0ZXIoQm9vbGVhbil9LFk9ZT0+KEFycmF5LmlzQXJyYXkoZSl8fChlPVtlXSksZSksWj0oZSx0LGkpPT57aWYoIWl8fGkuY29udGFpbnMoZSkpZm9yKDtlJiZlLm1hdGNoZXM7KXtpZihlLm1hdGNoZXModCkpcmV0dXJuIGVcbmU9ZS5wYXJlbnROb2RlfX0sZWU9KGUsdD0wKT0+dD4wP2VbZS5sZW5ndGgtMV06ZVswXSx0ZT0oZSx0KT0+e2lmKCFlKXJldHVybi0xXG50PXR8fGUubm9kZU5hbWVcbmZvcih2YXIgaT0wO2U9ZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nOyllLm1hdGNoZXModCkmJmkrK1xucmV0dXJuIGl9LGllPShlLHQpPT57Qih0LCh0LGkpPT57bnVsbD09dD9lLnJlbW92ZUF0dHJpYnV0ZShpKTplLnNldEF0dHJpYnV0ZShpLFwiXCIrdCl9KX0sc2U9KGUsdCk9PntlLnBhcmVudE5vZGUmJmUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQodCxlKX0sbmU9KGUsdCk9PntpZihudWxsPT09dClyZXR1cm5cbmlmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXtpZighdC5sZW5ndGgpcmV0dXJuXG50PW5ldyBSZWdFeHAodCxcImlcIil9Y29uc3QgaT1lPT4zPT09ZS5ub2RlVHlwZT8oZT0+e3ZhciBpPWUuZGF0YS5tYXRjaCh0KVxuaWYoaSYmZS5kYXRhLmxlbmd0aD4wKXt2YXIgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxucy5jbGFzc05hbWU9XCJoaWdobGlnaHRcIlxudmFyIG49ZS5zcGxpdFRleHQoaS5pbmRleClcbm4uc3BsaXRUZXh0KGlbMF0ubGVuZ3RoKVxudmFyIG89bi5jbG9uZU5vZGUoITApXG5yZXR1cm4gcy5hcHBlbmRDaGlsZChvKSxzZShuLHMpLDF9cmV0dXJuIDB9KShlKTooKGU9PnsxIT09ZS5ub2RlVHlwZXx8IWUuY2hpbGROb2Rlc3x8LyhzY3JpcHR8c3R5bGUpL2kudGVzdChlLnRhZ05hbWUpfHxcImhpZ2hsaWdodFwiPT09ZS5jbGFzc05hbWUmJlwiU1BBTlwiPT09ZS50YWdOYW1lfHxBcnJheS5mcm9tKGUuY2hpbGROb2RlcykuZm9yRWFjaChlPT57aShlKX0pfSkoZSksMClcbmkoZSl9LG9lPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBuYXZpZ2F0b3ImJi9NYWMvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk/XCJtZXRhS2V5XCI6XCJjdHJsS2V5XCJcbnZhciByZT17b3B0aW9uczpbXSxvcHRncm91cHM6W10scGx1Z2luczpbXSxkZWxpbWl0ZXI6XCIsXCIsc3BsaXRPbjpudWxsLHBlcnNpc3Q6ITAsZGlhY3JpdGljczohMCxjcmVhdGU6bnVsbCxjcmVhdGVPbkJsdXI6ITEsY3JlYXRlRmlsdGVyOm51bGwsY2xlYXJBZnRlclNlbGVjdDohMSxoaWdobGlnaHQ6ITAsb3Blbk9uRm9jdXM6ITAsc2hvdWxkT3BlbjpudWxsLG1heE9wdGlvbnM6NTAsbWF4SXRlbXM6bnVsbCxoaWRlU2VsZWN0ZWQ6bnVsbCxkdXBsaWNhdGVzOiExLGFkZFByZWNlZGVuY2U6ITEsc2VsZWN0T25UYWI6ITEscHJlbG9hZDpudWxsLGFsbG93RW1wdHlPcHRpb246ITEscmVmcmVzaFRocm90dGxlOjMwMCxsb2FkVGhyb3R0bGU6MzAwLGxvYWRpbmdDbGFzczpcImxvYWRpbmdcIixkYXRhQXR0cjpudWxsLG9wdGdyb3VwRmllbGQ6XCJvcHRncm91cFwiLHZhbHVlRmllbGQ6XCJ2YWx1ZVwiLGxhYmVsRmllbGQ6XCJ0ZXh0XCIsZGlzYWJsZWRGaWVsZDpcImRpc2FibGVkXCIsb3B0Z3JvdXBMYWJlbEZpZWxkOlwibGFiZWxcIixvcHRncm91cFZhbHVlRmllbGQ6XCJ2YWx1ZVwiLGxvY2tPcHRncm91cE9yZGVyOiExLHNvcnRGaWVsZDpcIiRvcmRlclwiLHNlYXJjaEZpZWxkOltcInRleHRcIl0sc2VhcmNoQ29uanVuY3Rpb246XCJhbmRcIixtb2RlOm51bGwsd3JhcHBlckNsYXNzOlwidHMtd3JhcHBlclwiLGNvbnRyb2xDbGFzczpcInRzLWNvbnRyb2xcIixkcm9wZG93bkNsYXNzOlwidHMtZHJvcGRvd25cIixkcm9wZG93bkNvbnRlbnRDbGFzczpcInRzLWRyb3Bkb3duLWNvbnRlbnRcIixpdGVtQ2xhc3M6XCJpdGVtXCIsb3B0aW9uQ2xhc3M6XCJvcHRpb25cIixkcm9wZG93blBhcmVudDpudWxsLGNvbnRyb2xJbnB1dDonPGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgc2l6ZT1cIjFcIiAvPicsY29weUNsYXNzZXNUb0Ryb3Bkb3duOiExLHBsYWNlaG9sZGVyOm51bGwsaGlkZVBsYWNlaG9sZGVyOm51bGwsc2hvdWxkTG9hZDpmdW5jdGlvbihlKXtyZXR1cm4gZS5sZW5ndGg+MH0scmVuZGVyOnt9fVxuZnVuY3Rpb24gbGUoZSx0KXt2YXIgaT1PYmplY3QuYXNzaWduKHt9LHJlLHQpLHM9aS5kYXRhQXR0cixuPWkubGFiZWxGaWVsZCxvPWkudmFsdWVGaWVsZCxyPWkuZGlzYWJsZWRGaWVsZCxsPWkub3B0Z3JvdXBGaWVsZCxhPWkub3B0Z3JvdXBMYWJlbEZpZWxkLGM9aS5vcHRncm91cFZhbHVlRmllbGQsZD1lLnRhZ05hbWUudG9Mb3dlckNhc2UoKSx1PWUuZ2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIil8fGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1wbGFjZWhvbGRlclwiKVxuaWYoIXUmJiFpLmFsbG93RW1wdHlPcHRpb24pe2xldCB0PWUucXVlcnlTZWxlY3Rvcignb3B0aW9uW3ZhbHVlPVwiXCJdJylcbnQmJih1PXQudGV4dENvbnRlbnQpfXZhciBwPXtwbGFjZWhvbGRlcjp1LG9wdGlvbnM6W10sb3B0Z3JvdXBzOltdLGl0ZW1zOltdLG1heEl0ZW1zOm51bGx9XG5yZXR1cm5cInNlbGVjdFwiPT09ZD8oKCk9Pnt2YXIgdCxkPXAub3B0aW9ucyx1PXt9LGg9MVxubGV0IGc9MFxudmFyIGY9ZT0+e3ZhciB0PU9iamVjdC5hc3NpZ24oe30sZS5kYXRhc2V0KSxpPXMmJnRbc11cbnJldHVyblwic3RyaW5nXCI9PXR5cGVvZiBpJiZpLmxlbmd0aCYmKHQ9T2JqZWN0LmFzc2lnbih0LEpTT04ucGFyc2UoaSkpKSx0fSxtPShlLHQpPT57dmFyIHM9UChlLnZhbHVlKVxuaWYobnVsbCE9cyYmKHN8fGkuYWxsb3dFbXB0eU9wdGlvbikpe2lmKHUuaGFzT3duUHJvcGVydHkocykpe2lmKHQpe3ZhciBhPXVbc11bbF1cbmE/QXJyYXkuaXNBcnJheShhKT9hLnB1c2godCk6dVtzXVtsXT1bYSx0XTp1W3NdW2xdPXR9fWVsc2V7dmFyIGM9ZihlKVxuY1tuXT1jW25dfHxlLnRleHRDb250ZW50LGNbb109Y1tvXXx8cyxjW3JdPWNbcl18fGUuZGlzYWJsZWQsY1tsXT1jW2xdfHx0LGMuJG9wdGlvbj1lLGMuJG9yZGVyPWMuJG9yZGVyfHwrK2csdVtzXT1jLGQucHVzaChjKX1lLnNlbGVjdGVkJiZwLml0ZW1zLnB1c2gocyl9fVxucC5tYXhJdGVtcz1lLmhhc0F0dHJpYnV0ZShcIm11bHRpcGxlXCIpP251bGw6MSxCKGUuY2hpbGRyZW4sZT0+e3ZhciBpLHMsblxuXCJvcHRncm91cFwiPT09KHQ9ZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkpPygobj1mKGk9ZSkpW2FdPW5bYV18fGkuZ2V0QXR0cmlidXRlKFwibGFiZWxcIil8fFwiXCIsbltjXT1uW2NdfHxoKyssbltyXT1uW3JdfHxpLmRpc2FibGVkLG4uJG9yZGVyPW4uJG9yZGVyfHwrK2cscC5vcHRncm91cHMucHVzaChuKSxzPW5bY10sQihpLmNoaWxkcmVuLGU9PnttKGUscyl9KSk6XCJvcHRpb25cIj09PXQmJm0oZSl9KX0pKCk6KCgpPT57Y29uc3QgdD1lLmdldEF0dHJpYnV0ZShzKVxuaWYodClwLm9wdGlvbnM9SlNPTi5wYXJzZSh0KSxCKHAub3B0aW9ucyxlPT57cC5pdGVtcy5wdXNoKGVbb10pfSlcbmVsc2V7dmFyIHIsbCxhPW51bGwhPShyPW51bGw9PWV8fG51bGw9PShsPWUudmFsdWUpP3ZvaWQgMDpsLnRyaW0oKSk/cjpcIlwiXG5pZighaS5hbGxvd0VtcHR5T3B0aW9uJiYhYS5sZW5ndGgpcmV0dXJuXG5jb25zdCB0PWEuc3BsaXQoaS5kZWxpbWl0ZXIpXG5CKHQsZT0+e2NvbnN0IHQ9e31cbnRbbl09ZSx0W29dPWUscC5vcHRpb25zLnB1c2godCl9KSxwLml0ZW1zPXR9fSkoKSxPYmplY3QuYXNzaWduKHt9LHJlLHAsdCl9dmFyIGFlPTBcbmNsYXNzIGNlIGV4dGVuZHMoZnVuY3Rpb24oZSl7cmV0dXJuIGUucGx1Z2lucz17fSxjbGFzcyBleHRlbmRzIGV7Y29uc3RydWN0b3IoLi4uZSl7c3VwZXIoLi4uZSksdGhpcy5wbHVnaW5zPXtuYW1lczpbXSxzZXR0aW5nczp7fSxyZXF1ZXN0ZWQ6e30sbG9hZGVkOnt9fX1zdGF0aWMgZGVmaW5lKHQsaSl7ZS5wbHVnaW5zW3RdPXtuYW1lOnQsZm46aX19aW5pdGlhbGl6ZVBsdWdpbnMoZSl7dmFyIHQsaVxuY29uc3Qgcz10aGlzLG49W11cbmlmKEFycmF5LmlzQXJyYXkoZSkpZS5mb3JFYWNoKGU9PntcInN0cmluZ1wiPT10eXBlb2YgZT9uLnB1c2goZSk6KHMucGx1Z2lucy5zZXR0aW5nc1tlLm5hbWVdPWUub3B0aW9ucyxuLnB1c2goZS5uYW1lKSl9KVxuZWxzZSBpZihlKWZvcih0IGluIGUpZS5oYXNPd25Qcm9wZXJ0eSh0KSYmKHMucGx1Z2lucy5zZXR0aW5nc1t0XT1lW3RdLG4ucHVzaCh0KSlcbmZvcig7aT1uLnNoaWZ0KCk7KXMucmVxdWlyZShpKX1sb2FkUGx1Z2luKHQpe3ZhciBpPXRoaXMscz1pLnBsdWdpbnMsbj1lLnBsdWdpbnNbdF1cbmlmKCFlLnBsdWdpbnMuaGFzT3duUHJvcGVydHkodCkpdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gZmluZCBcIicrdCsnXCIgcGx1Z2luJylcbnMucmVxdWVzdGVkW3RdPSEwLHMubG9hZGVkW3RdPW4uZm4uYXBwbHkoaSxbaS5wbHVnaW5zLnNldHRpbmdzW3RdfHx7fV0pLHMubmFtZXMucHVzaCh0KX1yZXF1aXJlKGUpe3ZhciB0PXRoaXMsaT10LnBsdWdpbnNcbmlmKCF0LnBsdWdpbnMubG9hZGVkLmhhc093blByb3BlcnR5KGUpKXtpZihpLnJlcXVlc3RlZFtlXSl0aHJvdyBuZXcgRXJyb3IoJ1BsdWdpbiBoYXMgY2lyY3VsYXIgZGVwZW5kZW5jeSAoXCInK2UrJ1wiKScpXG50LmxvYWRQbHVnaW4oZSl9cmV0dXJuIGkubG9hZGVkW2VdfX19KHQpKXtjb25zdHJ1Y3RvcihlLHQpe3ZhciBpXG5zdXBlcigpLHRoaXMub3JkZXI9MCx0aGlzLmlzT3Blbj0hMSx0aGlzLmlzRGlzYWJsZWQ9ITEsdGhpcy5pc1JlYWRPbmx5PSExLHRoaXMuaXNJbnZhbGlkPSExLHRoaXMuaXNWYWxpZD0hMCx0aGlzLmlzTG9ja2VkPSExLHRoaXMuaXNGb2N1c2VkPSExLHRoaXMuaXNJbnB1dEhpZGRlbj0hMSx0aGlzLmlzU2V0dXA9ITEsdGhpcy5pc0Ryb3Bkb3duQ29udGVudFN0YWxlPSEwLHRoaXMuaWdub3JlRm9jdXM9ITEsdGhpcy5pZ25vcmVIb3Zlcj0hMSx0aGlzLmhhc09wdGlvbnM9ITEsdGhpcy5sYXN0VmFsdWU9XCJcIix0aGlzLmNhcmV0UG9zPTAsdGhpcy5sb2FkaW5nPTAsdGhpcy5sb2FkZWRTZWFyY2hlcz17fSx0aGlzLmFjdGl2ZU9wdGlvbj1udWxsLHRoaXMuYWN0aXZlSXRlbXM9W10sdGhpcy5vcHRncm91cHM9e30sdGhpcy5vcHRpb25zPXt9LHRoaXMudXNlck9wdGlvbnM9e30sdGhpcy5pdGVtcz1bXSx0aGlzLnJlZnJlc2hUaW1lb3V0PW51bGwsYWUrK1xudmFyIHM9SyhlKVxuaWYocy50b21zZWxlY3QpdGhyb3cgbmV3IEVycm9yKFwiVG9tIFNlbGVjdCBhbHJlYWR5IGluaXRpYWxpemVkIG9uIHRoaXMgZWxlbWVudFwiKVxucy50b21zZWxlY3Q9dGhpcyxpPSh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSYmd2luZG93LmdldENvbXB1dGVkU3R5bGUocyxudWxsKSkuZ2V0UHJvcGVydHlWYWx1ZShcImRpcmVjdGlvblwiKVxuY29uc3Qgbj1sZShzLHQpXG50aGlzLnNldHRpbmdzPW4sdGhpcy5pbnB1dD1zLHRoaXMudGFiSW5kZXg9cy50YWJJbmRleHx8MCx0aGlzLmlzX3NlbGVjdF90YWc9XCJzZWxlY3RcIj09PXMudGFnTmFtZS50b0xvd2VyQ2FzZSgpLHRoaXMucnRsPS9ydGwvaS50ZXN0KGkpLHRoaXMuaW5wdXRJZD1IKHMsXCJ0b21zZWxlY3QtXCIrYWUpLHRoaXMuaXNSZXF1aXJlZD1zLnJlcXVpcmVkLHRoaXMuc2lmdGVyPW5ldyBUKHRoaXMub3B0aW9ucyx7ZGlhY3JpdGljczpuLmRpYWNyaXRpY3N9KSxuLm1vZGU9bi5tb2RlfHwoMT09PW4ubWF4SXRlbXM/XCJzaW5nbGVcIjpcIm11bHRpXCIpLFwiYm9vbGVhblwiIT10eXBlb2Ygbi5oaWRlU2VsZWN0ZWQmJihuLmhpZGVTZWxlY3RlZD1cIm11bHRpXCI9PT1uLm1vZGUpLFwiYm9vbGVhblwiIT10eXBlb2Ygbi5oaWRlUGxhY2Vob2xkZXImJihuLmhpZGVQbGFjZWhvbGRlcj1cIm11bHRpXCIhPT1uLm1vZGUpXG52YXIgbz1uLmNyZWF0ZUZpbHRlclxuXCJmdW5jdGlvblwiIT10eXBlb2YgbyYmKFwic3RyaW5nXCI9PXR5cGVvZiBvJiYobz1uZXcgUmVnRXhwKG8pKSxvIGluc3RhbmNlb2YgUmVnRXhwP24uY3JlYXRlRmlsdGVyPWU9Pm8udGVzdChlKTpuLmNyZWF0ZUZpbHRlcj1lPT50aGlzLnNldHRpbmdzLmR1cGxpY2F0ZXN8fCF0aGlzLm9wdGlvbnNbZV0pLHRoaXMuaW5pdGlhbGl6ZVBsdWdpbnMobi5wbHVnaW5zKSx0aGlzLnNldHVwQ2FsbGJhY2tzKCksdGhpcy5zZXR1cFRlbXBsYXRlcygpXG5jb25zdCByPUsoXCI8ZGl2PlwiKSxsPUsoXCI8ZGl2PlwiKSxhPXRoaXMuX3JlbmRlcihcImRyb3Bkb3duXCIpLGM9SygnPGRpdiByb2xlPVwibGlzdGJveFwiIHRhYmluZGV4PVwiLTFcIj4nKSxkPXRoaXMuaW5wdXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIsdT1uLm1vZGVcbnZhciBwXG5pZihRKHIsbi53cmFwcGVyQ2xhc3MsZCx1KSxRKGwsbi5jb250cm9sQ2xhc3MpLHoocixsKSxRKGEsbi5kcm9wZG93bkNsYXNzLHUpLG4uY29weUNsYXNzZXNUb0Ryb3Bkb3duJiZRKGEsZCksUShjLG4uZHJvcGRvd25Db250ZW50Q2xhc3MpLHooYSxjKSxLKG4uZHJvcGRvd25QYXJlbnR8fHIpLmFwcGVuZENoaWxkKGEpLEcobi5jb250cm9sSW5wdXQpKXtwPUsobi5jb250cm9sSW5wdXQpXG5CKFtcImF1dG9jb3JyZWN0XCIsXCJhdXRvY2FwaXRhbGl6ZVwiLFwiYXV0b2NvbXBsZXRlXCIsXCJzcGVsbGNoZWNrXCIsXCJhcmlhLWxhYmVsXCJdLGU9PntzLmdldEF0dHJpYnV0ZShlKSYmaWUocCx7W2VdOnMuZ2V0QXR0cmlidXRlKGUpfSl9KSxwLnRhYkluZGV4PS0xLGwuYXBwZW5kQ2hpbGQocCksdGhpcy5mb2N1c19ub2RlPXB9ZWxzZSBuLmNvbnRyb2xJbnB1dD8ocD1LKG4uY29udHJvbElucHV0KSx0aGlzLmZvY3VzX25vZGU9cCk6KHA9SyhcIjxpbnB1dC8+XCIpLHRoaXMuZm9jdXNfbm9kZT1sKVxudGhpcy53cmFwcGVyPXIsdGhpcy5kcm9wZG93bj1hLHRoaXMuZHJvcGRvd25fY29udGVudD1jLHRoaXMuY29udHJvbD1sLHRoaXMuY29udHJvbF9pbnB1dD1wLHRoaXMuc2V0dXAoKX1zZXR1cCgpe2NvbnN0IGU9dGhpcyx0PWUuc2V0dGluZ3MsaT1lLmNvbnRyb2xfaW5wdXQscz1lLmRyb3Bkb3duLG49ZS5kcm9wZG93bl9jb250ZW50LG89ZS53cmFwcGVyLGw9ZS5jb250cm9sLGE9ZS5pbnB1dCxjPWUuZm9jdXNfbm9kZSxkPXtwYXNzaXZlOiEwfSx1PWUuaW5wdXRJZCtcIi10cy1kcm9wZG93blwiXG5pZShuLHtpZDp1fSksaWUoYyx7cm9sZTpcImNvbWJvYm94XCIsXCJhcmlhLWhhc3BvcHVwXCI6XCJsaXN0Ym94XCIsXCJhcmlhLWV4cGFuZGVkXCI6XCJmYWxzZVwiLFwiYXJpYS1jb250cm9sc1wiOnV9KVxuY29uc3QgcD1IKGMsZS5pbnB1dElkK1wiLXRzLWNvbnRyb2xcIiksaD1cImxhYmVsW2Zvcj0nXCIrKGU9PmUucmVwbGFjZSgvWydcIlxcXFxdL2csXCJcXFxcJCZcIikpKGUuaW5wdXRJZCkrXCInXVwiLGc9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihoKSxmPWUuZm9jdXMuYmluZChlKVxuaWYoZyl7cShnLFwiY2xpY2tcIixmKSxpZShnLHtmb3I6cH0pXG5jb25zdCB0PUgoZyxlLmlucHV0SWQrXCItdHMtbGFiZWxcIilcbmllKGMse1wiYXJpYS1sYWJlbGxlZGJ5XCI6dH0pLGllKG4se1wiYXJpYS1sYWJlbGxlZGJ5XCI6dH0pfWlmKG8uc3R5bGUud2lkdGg9YS5zdHlsZS53aWR0aCxvLnN0eWxlLm1pbldpZHRoPWEuc3R5bGUubWluV2lkdGgsby5zdHlsZS5tYXhXaWR0aD1hLnN0eWxlLm1heFdpZHRoLGUucGx1Z2lucy5uYW1lcy5sZW5ndGgpe2NvbnN0IHQ9XCJwbHVnaW4tXCIrZS5wbHVnaW5zLm5hbWVzLmpvaW4oXCIgcGx1Z2luLVwiKVxuUShbbyxzXSx0KX0obnVsbD09PXQubWF4SXRlbXN8fHQubWF4SXRlbXM+MSkmJmUuaXNfc2VsZWN0X3RhZyYmaWUoYSx7bXVsdGlwbGU6XCJtdWx0aXBsZVwifSksdC5wbGFjZWhvbGRlciYmaWUoaSx7cGxhY2Vob2xkZXI6dC5wbGFjZWhvbGRlcn0pLCF0LnNwbGl0T24mJnQuZGVsaW1pdGVyJiYodC5zcGxpdE9uPW5ldyBSZWdFeHAoXCJcXFxccypcIityKHQuZGVsaW1pdGVyKStcIitcXFxccypcIikpLHQubG9hZCYmdC5sb2FkVGhyb3R0bGUmJih0LmxvYWQ9Vih0LmxvYWQsdC5sb2FkVGhyb3R0bGUpKSxxKHMsXCJtb3VzZW1vdmVcIiwoKT0+e2UuaWdub3JlSG92ZXI9ITF9KSxxKHMsXCJtb3VzZWVudGVyXCIsdD0+e3ZhciBpPVoodC50YXJnZXQsXCJbZGF0YS1zZWxlY3RhYmxlXVwiLHMpXG5pJiZlLm9uT3B0aW9uSG92ZXIodCxpKX0se2NhcHR1cmU6ITB9KSxxKHMsXCJjbGlja1wiLHQ9Pntjb25zdCBpPVoodC50YXJnZXQsXCJbZGF0YS1zZWxlY3RhYmxlXVwiKVxuaSYmKGUub25PcHRpb25TZWxlY3QodCxpKSwkKHQsITApKX0pLHEobCxcImNsaWNrXCIsdD0+e3ZhciBzPVoodC50YXJnZXQsXCJbZGF0YS10cy1pdGVtXVwiLGwpXG5zJiZlLm9uSXRlbVNlbGVjdCh0LHMpPyQodCwhMCk6XCJcIj09aS52YWx1ZSYmKGUub25DbGljaygpLCQodCwhMCkpfSkscShjLFwia2V5ZG93blwiLHQ9PmUub25LZXlEb3duKHQpKSxxKGksXCJrZXlwcmVzc1wiLHQ9PmUub25LZXlQcmVzcyh0KSkscShpLFwiaW5wdXRcIix0PT5lLm9uSW5wdXQodCkpLHEoYyxcImJsdXJcIix0PT5lLm9uQmx1cih0KSkscShjLFwiZm9jdXNcIix0PT5lLm9uRm9jdXModCkpLHEoaSxcInBhc3RlXCIsdD0+ZS5vblBhc3RlKHQpKVxuY29uc3QgbT10PT57Y29uc3Qgbj10LmNvbXBvc2VkUGF0aCgpWzBdXG5pZighby5jb250YWlucyhuKSYmIXMuY29udGFpbnMobikpcmV0dXJuIGUuaXNGb2N1c2VkJiZlLmJsdXIoKSx2b2lkIGUuaW5wdXRTdGF0ZSgpXG5uPT1pJiZlLmlzT3Blbj90LnN0b3BQcm9wYWdhdGlvbigpOiQodCwhMCl9LHY9KCk9PntlLmlzT3BlbiYmZS5wb3NpdGlvbkRyb3Bkb3duKCl9LE89KCk9PntlLmlzVmFsaWQmJihlLmlzVmFsaWQ9ITEsZS5pc0ludmFsaWQ9ITAsZS5yZWZyZXNoU3RhdGUoKSl9XG5xKGEsXCJpbnZhbGlkXCIsTykscShkb2N1bWVudCxcIm1vdXNlZG93blwiLG0pLHEod2luZG93LFwic2Nyb2xsXCIsdixkKSxxKHdpbmRvdyxcInJlc2l6ZVwiLHYsZCksdGhpcy5fZGVzdHJveT0oKT0+e2EucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImludmFsaWRcIixPKSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsbSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIix2KSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHYpLGcmJmcucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZil9LHRoaXMucmV2ZXJ0U2V0dGluZ3M9e2lubmVySFRNTDphLmlubmVySFRNTCx0YWJJbmRleDphLnRhYkluZGV4fSxhLnRhYkluZGV4PS0xLGEuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIixlLndyYXBwZXIpLGUuc3luYyghMSksdC5pdGVtcz1bXSxkZWxldGUgdC5vcHRncm91cHMsZGVsZXRlIHQub3B0aW9ucyxlLnJlZnJlc2hJdGVtcygpLGUuY2xvc2UoITEpLGUuaW5wdXRTdGF0ZSgpLGUuaXNTZXR1cD0hMCxlLm9uKFwiY2hhbmdlXCIsdGhpcy5vbkNoYW5nZSksUShhLFwidG9tc2VsZWN0ZWRcIixcInRzLWhpZGRlbi1hY2Nlc3NpYmxlXCIpLGUudHJpZ2dlcihcImluaXRpYWxpemVcIiksITA9PT10LnByZWxvYWQmJmUucHJlbG9hZCgpfXNldHVwT3B0aW9ucyhlPVtdLHQ9W10pe3RoaXMuYWRkT3B0aW9ucyhlKSxCKHQsZT0+e3RoaXMucmVnaXN0ZXJPcHRpb25Hcm91cChlKX0pfXNldHVwVGVtcGxhdGVzKCl7dmFyIGU9dGhpcyx0PWUuc2V0dGluZ3MubGFiZWxGaWVsZCxpPWUuc2V0dGluZ3Mub3B0Z3JvdXBMYWJlbEZpZWxkLHM9e29wdGdyb3VwOmU9PntsZXQgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5yZXR1cm4gdC5jbGFzc05hbWU9XCJvcHRncm91cFwiLHQuYXBwZW5kQ2hpbGQoZS5vcHRpb25zKSx0fSxvcHRncm91cF9oZWFkZXI6KGUsdCk9Pic8ZGl2IGNsYXNzPVwib3B0Z3JvdXAtaGVhZGVyXCI+Jyt0KGVbaV0pK1wiPC9kaXY+XCIsb3B0aW9uOihlLGkpPT5cIjxkaXY+XCIraShlW3RdKStcIjwvZGl2PlwiLGl0ZW06KGUsaSk9PlwiPGRpdj5cIitpKGVbdF0pK1wiPC9kaXY+XCIsb3B0aW9uX2NyZWF0ZTooZSx0KT0+JzxkaXYgY2xhc3M9XCJjcmVhdGVcIj5BZGQgPHN0cm9uZz4nK3QoZS5pbnB1dCkrXCI8L3N0cm9uZz4maGVsbGlwOzwvZGl2PlwiLG5vX3Jlc3VsdHM6KCk9Pic8ZGl2IGNsYXNzPVwibm8tcmVzdWx0c1wiPk5vIHJlc3VsdHMgZm91bmQ8L2Rpdj4nLGxvYWRpbmc6KCk9Pic8ZGl2IGNsYXNzPVwic3Bpbm5lclwiPjwvZGl2Picsbm90X2xvYWRpbmc6KCk9Pnt9LGRyb3Bkb3duOigpPT5cIjxkaXY+PC9kaXY+XCJ9XG5lLnNldHRpbmdzLnJlbmRlcj1PYmplY3QuYXNzaWduKHt9LHMsZS5zZXR0aW5ncy5yZW5kZXIpfXNldHVwQ2FsbGJhY2tzKCl7dmFyIGUsdCxpPXtpbml0aWFsaXplOlwib25Jbml0aWFsaXplXCIsY2hhbmdlOlwib25DaGFuZ2VcIixpdGVtX2FkZDpcIm9uSXRlbUFkZFwiLGl0ZW1fcmVtb3ZlOlwib25JdGVtUmVtb3ZlXCIsaXRlbV9zZWxlY3Q6XCJvbkl0ZW1TZWxlY3RcIixjbGVhcjpcIm9uQ2xlYXJcIixvcHRpb25fYWRkOlwib25PcHRpb25BZGRcIixvcHRpb25fcmVtb3ZlOlwib25PcHRpb25SZW1vdmVcIixvcHRpb25fY2xlYXI6XCJvbk9wdGlvbkNsZWFyXCIsb3B0Z3JvdXBfYWRkOlwib25PcHRpb25Hcm91cEFkZFwiLG9wdGdyb3VwX3JlbW92ZTpcIm9uT3B0aW9uR3JvdXBSZW1vdmVcIixvcHRncm91cF9jbGVhcjpcIm9uT3B0aW9uR3JvdXBDbGVhclwiLGRyb3Bkb3duX29wZW46XCJvbkRyb3Bkb3duT3BlblwiLGRyb3Bkb3duX2Nsb3NlOlwib25Ecm9wZG93bkNsb3NlXCIsdHlwZTpcIm9uVHlwZVwiLGxvYWQ6XCJvbkxvYWRcIixmb2N1czpcIm9uRm9jdXNcIixibHVyOlwib25CbHVyXCJ9XG5mb3IoZSBpbiBpKSh0PXRoaXMuc2V0dGluZ3NbaVtlXV0pJiZ0aGlzLm9uKGUsdCl9c3luYyhlPSEwKXtjb25zdCB0PXRoaXMsaT1lP2xlKHQuaW5wdXQse2RlbGltaXRlcjp0LnNldHRpbmdzLmRlbGltaXRlcixhbGxvd0VtcHR5T3B0aW9uOnQuc2V0dGluZ3MuYWxsb3dFbXB0eU9wdGlvbn0pOnQuc2V0dGluZ3NcbnQuc2V0dXBPcHRpb25zKGkub3B0aW9ucyxpLm9wdGdyb3VwcyksdC5zZXRWYWx1ZShpLml0ZW1zfHxbXSwhMCksdC5pbnB1dC5kaXNhYmxlZD90LmRpc2FibGUoKTp0LmlucHV0LnJlYWRPbmx5P3Quc2V0UmVhZE9ubHkoITApOnQuZW5hYmxlKCksdC5sYXN0UXVlcnk9bnVsbH1vbkNsaWNrKCl7dmFyIGU9dGhpc1xuaWYoZS5hY3RpdmVJdGVtcy5sZW5ndGg+MClyZXR1cm4gZS5jbGVhckFjdGl2ZUl0ZW1zKCksdm9pZCBlLmZvY3VzKClcbmUuaXNGb2N1c2VkJiZlLmlzT3Blbj9lLmJsdXIoKTplLmZvY3VzKCl9b25Nb3VzZURvd24oKXt9b25DaGFuZ2UoKXtVKHRoaXMuaW5wdXQsXCJpbnB1dFwiKSxVKHRoaXMuaW5wdXQsXCJjaGFuZ2VcIil9b25QYXN0ZShlKXt2YXIgdD10aGlzXG50LmlzSW5wdXRIaWRkZW58fHQuaXNMb2NrZWQ/JChlKTp0LnNldHRpbmdzLnNwbGl0T24mJnNldFRpbWVvdXQoKCk9Pnt2YXIgZT10LmlucHV0VmFsdWUoKVxuaWYoZS5tYXRjaCh0LnNldHRpbmdzLnNwbGl0T24pKXt2YXIgaT1lLnRyaW0oKS5zcGxpdCh0LnNldHRpbmdzLnNwbGl0T24pXG5CKGksZT0+e1AoZSkmJih0aGlzLm9wdGlvbnNbZV0/dC5hZGRJdGVtKGUpOnQuY3JlYXRlSXRlbShlKSl9KX19LDApfW9uS2V5UHJlc3MoZSl7dmFyIHQ9dGhpc1xuaWYoIXQuaXNMb2NrZWQpe3ZhciBpPVN0cmluZy5mcm9tQ2hhckNvZGUoZS5rZXlDb2RlfHxlLndoaWNoKVxucmV0dXJuIHQuc2V0dGluZ3MuY3JlYXRlJiZcIm11bHRpXCI9PT10LnNldHRpbmdzLm1vZGUmJmk9PT10LnNldHRpbmdzLmRlbGltaXRlcj8odC5jcmVhdGVJdGVtKCksdm9pZCAkKGUpKTp2b2lkIDB9JChlKX1vbktleURvd24oZSl7dmFyIHQ9dGhpc1xuaWYodC5pZ25vcmVIb3Zlcj0hMCx0LmlzTG9ja2VkKTkhPT1lLmtleUNvZGUmJiQoZSlcbmVsc2V7c3dpdGNoKGUua2V5Q29kZSl7Y2FzZSA2NTppZihSKG9lLGUpJiZcIlwiPT10LmNvbnRyb2xfaW5wdXQudmFsdWUpcmV0dXJuICQoZSksdm9pZCB0LnNlbGVjdEFsbCgpXG5icmVha1xuY2FzZSAyNzpyZXR1cm4gdC5pc09wZW4mJigkKGUsITApLHQuY2xvc2UoKSksdm9pZCB0LmNsZWFyQWN0aXZlSXRlbXMoKVxuY2FzZSA0MDppZighdC5pc09wZW4mJnQuaGFzT3B0aW9ucyl0Lm9wZW4oKVxuZWxzZSBpZih0LmFjdGl2ZU9wdGlvbil7bGV0IGU9dC5nZXRBZGphY2VudCh0LmFjdGl2ZU9wdGlvbiwxKVxuZSYmdC5zZXRBY3RpdmVPcHRpb24oZSl9cmV0dXJuIHZvaWQgJChlKVxuY2FzZSAzODppZih0LmFjdGl2ZU9wdGlvbil7bGV0IGU9dC5nZXRBZGphY2VudCh0LmFjdGl2ZU9wdGlvbiwtMSlcbmUmJnQuc2V0QWN0aXZlT3B0aW9uKGUpfXJldHVybiB2b2lkICQoZSlcbmNhc2UgMTM6cmV0dXJuIHZvaWQodC5jYW5TZWxlY3QodC5hY3RpdmVPcHRpb24pPyh0Lm9uT3B0aW9uU2VsZWN0KGUsdC5hY3RpdmVPcHRpb24pLCQoZSkpOih0LnNldHRpbmdzLmNyZWF0ZSYmdC5jcmVhdGVJdGVtKCl8fGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ9PXQuY29udHJvbF9pbnB1dCYmdC5pc09wZW4pJiYkKGUpKVxuY2FzZSAzNzpyZXR1cm4gdm9pZCB0LmFkdmFuY2VTZWxlY3Rpb24oLTEsZSlcbmNhc2UgMzk6cmV0dXJuIHZvaWQgdC5hZHZhbmNlU2VsZWN0aW9uKDEsZSlcbmNhc2UgOTpyZXR1cm4gdm9pZCh0LnNldHRpbmdzLnNlbGVjdE9uVGFiJiYodC5jYW5TZWxlY3QodC5hY3RpdmVPcHRpb24pPyh0Lm9uT3B0aW9uU2VsZWN0KGUsdC5hY3RpdmVPcHRpb24pLCQoZSkpOnQuc2V0dGluZ3MuY3JlYXRlJiZ0LmNyZWF0ZUl0ZW0oKSYmJChlKSkpXG5jYXNlIDg6Y2FzZSA0NjpyZXR1cm4gdm9pZCB0LmRlbGV0ZVNlbGVjdGlvbihlKX10LmlzSW5wdXRIaWRkZW4mJiFSKG9lLGUpJiYkKGUpfX1vbklucHV0KGUpe2lmKHRoaXMuaXNMb2NrZWQpcmV0dXJuXG5jb25zdCB0PXRoaXMuaW5wdXRWYWx1ZSgpXG50aGlzLmxhc3RWYWx1ZSE9PXQmJih0aGlzLmxhc3RWYWx1ZT10LFwiXCIhPXQ/KHRoaXMucmVmcmVzaFRpbWVvdXQmJndpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5yZWZyZXNoVGltZW91dCksdGhpcy5yZWZyZXNoVGltZW91dD0oKGUsdCk9PnQ+MD93aW5kb3cuc2V0VGltZW91dChlLHQpOihlLmNhbGwobnVsbCksbnVsbCkpKCgpPT57dGhpcy5yZWZyZXNoVGltZW91dD1udWxsLHRoaXMuX29uSW5wdXQoKX0sdGhpcy5zZXR0aW5ncy5yZWZyZXNoVGhyb3R0bGUpKTp0aGlzLl9vbklucHV0KCkpfV9vbklucHV0KCl7Y29uc3QgZT10aGlzLmxhc3RWYWx1ZVxudGhpcy5zZXR0aW5ncy5zaG91bGRMb2FkLmNhbGwodGhpcyxlKSYmdGhpcy5sb2FkKGUpLHRoaXMucmVmcmVzaE9wdGlvbnMoKSx0aGlzLnRyaWdnZXIoXCJ0eXBlXCIsZSl9b25PcHRpb25Ib3ZlcihlLHQpe3RoaXMuaWdub3JlSG92ZXJ8fHRoaXMuc2V0QWN0aXZlT3B0aW9uKHQsITEpfW9uRm9jdXMoZSl7dmFyIHQ9dGhpcyxpPXQuaXNGb2N1c2VkXG5pZih0LmlzRGlzYWJsZWR8fHQuaXNSZWFkT25seSlyZXR1cm4gdC5ibHVyKCksdm9pZCAkKGUpXG50Lmlnbm9yZUZvY3VzfHwodC5pc0ZvY3VzZWQ9ITAsXCJmb2N1c1wiPT09dC5zZXR0aW5ncy5wcmVsb2FkJiZ0LnByZWxvYWQoKSxpfHx0LnRyaWdnZXIoXCJmb2N1c1wiKSx0LmFjdGl2ZUl0ZW1zLmxlbmd0aHx8KHQuaW5wdXRTdGF0ZSgpLHQucmVmcmVzaE9wdGlvbnMoISF0LnNldHRpbmdzLm9wZW5PbkZvY3VzKSksdC5yZWZyZXNoU3RhdGUoKSl9b25CbHVyKGUpe2lmKCExIT09ZG9jdW1lbnQuaGFzRm9jdXMoKSl7dmFyIHQ9dGhpc1xuaWYodC5pc0ZvY3VzZWQpe3QuaXNGb2N1c2VkPSExLHQuaWdub3JlRm9jdXM9ITFcbnZhciBpPSgpPT57dC5jbG9zZSgpLHQuc2V0QWN0aXZlSXRlbSgpLHQuc2V0Q2FyZXQodC5pdGVtcy5sZW5ndGgpLHQudHJpZ2dlcihcImJsdXJcIil9XG50LnNldHRpbmdzLmNyZWF0ZSYmdC5zZXR0aW5ncy5jcmVhdGVPbkJsdXI/dC5jcmVhdGVJdGVtKG51bGwsaSk6aSgpfX19b25PcHRpb25TZWxlY3QoZSx0KXt2YXIgaSxzPXRoaXNcbnQucGFyZW50RWxlbWVudCYmdC5wYXJlbnRFbGVtZW50Lm1hdGNoZXMoXCJbZGF0YS1kaXNhYmxlZF1cIil8fCh0LmNsYXNzTGlzdC5jb250YWlucyhcImNyZWF0ZVwiKT9zLmNyZWF0ZUl0ZW0obnVsbCwoKT0+e3Muc2V0dGluZ3MuY2xvc2VBZnRlclNlbGVjdD9zLmNsb3NlKCk6cy5zZXR0aW5ncy5jbGVhckFmdGVyU2VsZWN0JiZzLnNldFRleHRib3hWYWx1ZSgpfSk6dm9pZCAwIT09KGk9dC5kYXRhc2V0LnZhbHVlKSYmKHMuaXNEcm9wZG93bkNvbnRlbnRTdGFsZT1zLnNldHRpbmdzLmhpZGVTZWxlY3RlZCxzLmFkZEl0ZW0oaSkscy5zZXR0aW5ncy5jbG9zZUFmdGVyU2VsZWN0P3MuY2xvc2UoKTpzLnNldHRpbmdzLmNsZWFyQWZ0ZXJTZWxlY3QmJnMuc2V0VGV4dGJveFZhbHVlKCksIXMuc2V0dGluZ3MuaGlkZVNlbGVjdGVkJiZlLnR5cGUmJi9jbGljay8udGVzdChlLnR5cGUpJiZzLnNldEFjdGl2ZU9wdGlvbih0KSkpfWNhblNlbGVjdChlKXtyZXR1cm4hISh0aGlzLmlzT3BlbiYmZSYmdGhpcy5kcm9wZG93bl9jb250ZW50LmNvbnRhaW5zKGUpKX1vbkl0ZW1TZWxlY3QoZSx0KXt2YXIgaT10aGlzXG5yZXR1cm4haS5pc0xvY2tlZCYmXCJtdWx0aVwiPT09aS5zZXR0aW5ncy5tb2RlJiYoJChlKSxpLnNldEFjdGl2ZUl0ZW0odCxlKSwhMCl9Y2FuTG9hZChlKXtyZXR1cm4hIXRoaXMuc2V0dGluZ3MubG9hZCYmIXRoaXMubG9hZGVkU2VhcmNoZXMuaGFzT3duUHJvcGVydHkoZSl9bG9hZChlKXtjb25zdCB0PXRoaXNcbmlmKCF0LmNhbkxvYWQoZSkpcmV0dXJuXG5RKHQud3JhcHBlcix0LnNldHRpbmdzLmxvYWRpbmdDbGFzcyksdC5sb2FkaW5nKytcbmNvbnN0IGk9dC5sb2FkQ2FsbGJhY2suYmluZCh0KVxudC5zZXR0aW5ncy5sb2FkLmNhbGwodCxlLGkpfWxvYWRDYWxsYmFjayhlLHQpe2NvbnN0IGk9dGhpc1xuaS5sb2FkaW5nPU1hdGgubWF4KGkubG9hZGluZy0xLDApLGkuaXNEcm9wZG93bkNvbnRlbnRTdGFsZT0hMCxpLmNsZWFyQWN0aXZlT3B0aW9uKCksaS5zZXR1cE9wdGlvbnMoZSx0KSxpLnJlZnJlc2hPcHRpb25zKGkuaXNGb2N1c2VkJiYhaS5pc0lucHV0SGlkZGVuKSxpLmxvYWRpbmd8fEooaS53cmFwcGVyLGkuc2V0dGluZ3MubG9hZGluZ0NsYXNzKSxpLnRyaWdnZXIoXCJsb2FkXCIsZSx0KX1wcmVsb2FkKCl7dmFyIGU9dGhpcy53cmFwcGVyLmNsYXNzTGlzdFxuZS5jb250YWlucyhcInByZWxvYWRlZFwiKXx8KGUuYWRkKFwicHJlbG9hZGVkXCIpLHRoaXMubG9hZChcIlwiKSl9c2V0VGV4dGJveFZhbHVlKGU9XCJcIil7dmFyIHQ9dGhpcy5jb250cm9sX2lucHV0XG50LnZhbHVlIT09ZSYmKHQudmFsdWU9ZSxVKHQsXCJ1cGRhdGVcIiksdGhpcy5sYXN0VmFsdWU9ZSl9Z2V0VmFsdWUoKXtyZXR1cm4gdGhpcy5pc19zZWxlY3RfdGFnJiZ0aGlzLmlucHV0Lmhhc0F0dHJpYnV0ZShcIm11bHRpcGxlXCIpP3RoaXMuaXRlbXM6dGhpcy5pdGVtcy5qb2luKHRoaXMuc2V0dGluZ3MuZGVsaW1pdGVyKX1zZXRWYWx1ZShlLHQpe2oodGhpcyx0P1tdOltcImNoYW5nZVwiXSwoKT0+e3RoaXMuY2xlYXIodCksdGhpcy5hZGRJdGVtcyhlLHQpfSl9c2V0TWF4SXRlbXMoZSl7MD09PWUmJihlPW51bGwpLHRoaXMuc2V0dGluZ3MubWF4SXRlbXM9ZSx0aGlzLnJlZnJlc2hTdGF0ZSgpfXNldEFjdGl2ZUl0ZW0oZSx0KXt2YXIgaSxzLG4sbyxyLGwsYT10aGlzXG5pZihcInNpbmdsZVwiIT09YS5zZXR0aW5ncy5tb2RlKXtpZighZSlyZXR1cm4gYS5jbGVhckFjdGl2ZUl0ZW1zKCksdm9pZChhLmlzRm9jdXNlZCYmYS5pbnB1dFN0YXRlKCkpXG5pZihcImNsaWNrXCI9PT0oaT10JiZ0LnR5cGUudG9Mb3dlckNhc2UoKSkmJlIoXCJzaGlmdEtleVwiLHQpJiZhLmFjdGl2ZUl0ZW1zLmxlbmd0aCl7Zm9yKGw9YS5nZXRMYXN0QWN0aXZlKCksKG49QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChhLmNvbnRyb2wuY2hpbGRyZW4sbCkpPihvPUFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYS5jb250cm9sLmNoaWxkcmVuLGUpKSYmKHI9bixuPW8sbz1yKSxzPW47czw9bztzKyspZT1hLmNvbnRyb2wuY2hpbGRyZW5bc10sLTE9PT1hLmFjdGl2ZUl0ZW1zLmluZGV4T2YoZSkmJmEuc2V0QWN0aXZlSXRlbUNsYXNzKGUpXG4kKHQpfWVsc2VcImNsaWNrXCI9PT1pJiZSKG9lLHQpfHxcImtleWRvd25cIj09PWkmJlIoXCJzaGlmdEtleVwiLHQpP2UuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpP2EucmVtb3ZlQWN0aXZlSXRlbShlKTphLnNldEFjdGl2ZUl0ZW1DbGFzcyhlKTooYS5jbGVhckFjdGl2ZUl0ZW1zKCksYS5zZXRBY3RpdmVJdGVtQ2xhc3MoZSkpXG5hLmlucHV0U3RhdGUoKSxhLmlzRm9jdXNlZHx8YS5mb2N1cygpfX1zZXRBY3RpdmVJdGVtQ2xhc3MoZSl7Y29uc3QgdD10aGlzLGk9dC5jb250cm9sLnF1ZXJ5U2VsZWN0b3IoXCIubGFzdC1hY3RpdmVcIilcbmkmJkooaSxcImxhc3QtYWN0aXZlXCIpLFEoZSxcImFjdGl2ZSBsYXN0LWFjdGl2ZVwiKSx0LnRyaWdnZXIoXCJpdGVtX3NlbGVjdFwiLGUpLC0xPT10LmFjdGl2ZUl0ZW1zLmluZGV4T2YoZSkmJnQuYWN0aXZlSXRlbXMucHVzaChlKX1yZW1vdmVBY3RpdmVJdGVtKGUpe3ZhciB0PXRoaXMuYWN0aXZlSXRlbXMuaW5kZXhPZihlKVxudGhpcy5hY3RpdmVJdGVtcy5zcGxpY2UodCwxKSxKKGUsXCJhY3RpdmVcIil9Y2xlYXJBY3RpdmVJdGVtcygpe0oodGhpcy5hY3RpdmVJdGVtcyxcImFjdGl2ZVwiKSx0aGlzLmFjdGl2ZUl0ZW1zPVtdfXNldEFjdGl2ZU9wdGlvbihlLHQ9ITApe2UhPT10aGlzLmFjdGl2ZU9wdGlvbiYmKHRoaXMuY2xlYXJBY3RpdmVPcHRpb24oKSxlJiYodGhpcy5hY3RpdmVPcHRpb249ZSxpZSh0aGlzLmZvY3VzX25vZGUse1wiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCI6ZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKX0pLGllKGUse1wiYXJpYS1zZWxlY3RlZFwiOlwidHJ1ZVwifSksUShlLFwiYWN0aXZlXCIpLHQmJnRoaXMuc2Nyb2xsVG9PcHRpb24oZSkpKX1zY3JvbGxUb09wdGlvbihlLHQpe2lmKCFlKXJldHVyblxuY29uc3QgaT10aGlzLmRyb3Bkb3duX2NvbnRlbnQscz1pLmNsaWVudEhlaWdodCxuPWkuc2Nyb2xsVG9wfHwwLG89ZS5vZmZzZXRIZWlnaHQscj1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcC1pLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCtuXG5yK28+cytuP3RoaXMuc2Nyb2xsKHItcytvLHQpOnI8biYmdGhpcy5zY3JvbGwocix0KX1zY3JvbGwoZSx0KXtjb25zdCBpPXRoaXMuZHJvcGRvd25fY29udGVudFxudCYmKGkuc3R5bGUuc2Nyb2xsQmVoYXZpb3I9dCksaS5zY3JvbGxUb3A9ZSxpLnN0eWxlLnNjcm9sbEJlaGF2aW9yPVwiXCJ9Y2xlYXJBY3RpdmVPcHRpb24oKXt0aGlzLmFjdGl2ZU9wdGlvbiYmKEoodGhpcy5hY3RpdmVPcHRpb24sXCJhY3RpdmVcIiksaWUodGhpcy5hY3RpdmVPcHRpb24se1wiYXJpYS1zZWxlY3RlZFwiOm51bGx9KSksdGhpcy5hY3RpdmVPcHRpb249bnVsbCxpZSh0aGlzLmZvY3VzX25vZGUse1wiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCI6bnVsbH0pfXNlbGVjdEFsbCgpe2NvbnN0IGU9dGhpc1xuaWYoXCJzaW5nbGVcIj09PWUuc2V0dGluZ3MubW9kZSlyZXR1cm5cbmNvbnN0IHQ9ZS5jb250cm9sQ2hpbGRyZW4oKVxudC5sZW5ndGgmJihlLmlucHV0U3RhdGUoKSxlLmNsb3NlKCksZS5hY3RpdmVJdGVtcz10LEIodCx0PT57ZS5zZXRBY3RpdmVJdGVtQ2xhc3ModCl9KSl9aW5wdXRTdGF0ZSgpe3ZhciBlPXRoaXNcbmUuY29udHJvbC5jb250YWlucyhlLmNvbnRyb2xfaW5wdXQpJiYoaWUoZS5jb250cm9sX2lucHV0LHtwbGFjZWhvbGRlcjplLnNldHRpbmdzLnBsYWNlaG9sZGVyfSksZS5hY3RpdmVJdGVtcy5sZW5ndGg+MHx8IWUuaXNGb2N1c2VkJiZlLnNldHRpbmdzLmhpZGVQbGFjZWhvbGRlciYmZS5pdGVtcy5sZW5ndGg+MD8oZS5zZXRUZXh0Ym94VmFsdWUoKSxlLmlzSW5wdXRIaWRkZW49ITApOihlLnNldHRpbmdzLmhpZGVQbGFjZWhvbGRlciYmZS5pdGVtcy5sZW5ndGg+MCYmaWUoZS5jb250cm9sX2lucHV0LHtwbGFjZWhvbGRlcjpcIlwifSksZS5pc0lucHV0SGlkZGVuPSExKSxlLndyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZShcImlucHV0LWhpZGRlblwiLGUuaXNJbnB1dEhpZGRlbikpfWlucHV0VmFsdWUoKXtyZXR1cm4gdGhpcy5jb250cm9sX2lucHV0LnZhbHVlLnRyaW0oKX1mb2N1cygpe3ZhciBlPXRoaXNcbmlmKGUuaXNEaXNhYmxlZHx8ZS5pc1JlYWRPbmx5KXJldHVyblxuZS5pZ25vcmVGb2N1cz0hMFxuY29uc3QgdD10aGlzLmNvbnRyb2xfaW5wdXQub2Zmc2V0V2lkdGg/dGhpcy5jb250cm9sX2lucHV0OnRoaXMuZm9jdXNfbm9kZVxudC5mb2N1cygpLHNldFRpbWVvdXQoKCk9PntlLmlnbm9yZUZvY3VzPSExXG50LmdldFJvb3ROb2RlKCkuYWN0aXZlRWxlbWVudD09PXQmJnRoaXMub25Gb2N1cygpfSwwKX1ibHVyKCl7dGhpcy5mb2N1c19ub2RlLmJsdXIoKSx0aGlzLm9uQmx1cigpfWdldFNjb3JlRnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuc2lmdGVyLmdldFNjb3JlRnVuY3Rpb24oZSx0aGlzLmdldFNlYXJjaE9wdGlvbnMoKSl9Z2V0U2VhcmNoT3B0aW9ucygpe3ZhciBlPXRoaXMuc2V0dGluZ3MsdD1lLnNvcnRGaWVsZFxucmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUuc29ydEZpZWxkJiYodD1be2ZpZWxkOmUuc29ydEZpZWxkfV0pLHtmaWVsZHM6ZS5zZWFyY2hGaWVsZCxjb25qdW5jdGlvbjplLnNlYXJjaENvbmp1bmN0aW9uLHNvcnQ6dCxuZXN0aW5nOmUubmVzdGluZ319c2VhcmNoKGUpe3ZhciB0LGkscz10aGlzLG49dGhpcy5nZXRTZWFyY2hPcHRpb25zKClcbmlmKHMuc2V0dGluZ3Muc2NvcmUmJlwiZnVuY3Rpb25cIiE9dHlwZW9mKGk9cy5zZXR0aW5ncy5zY29yZS5jYWxsKHMsZSkpKXRocm93IG5ldyBFcnJvcignVG9tIFNlbGVjdCBcInNjb3JlXCIgc2V0dGluZyBtdXN0IGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgZnVuY3Rpb24nKVxucmV0dXJuIHMuaXNEcm9wZG93bkNvbnRlbnRTdGFsZXx8ZSE9PXMubGFzdFF1ZXJ5PyhzLmxhc3RRdWVyeT1lLC8oLilcXDF7MTUsfS8udGVzdChlKSYmKGU9XCJcIiksdD1zLnNpZnRlci5zZWFyY2goZSxPYmplY3QuYXNzaWduKG4se3Njb3JlOml9KSkscy5jdXJyZW50UmVzdWx0cz10KTp0PU9iamVjdC5hc3NpZ24oe30scy5jdXJyZW50UmVzdWx0cykscy5zZXR0aW5ncy5oaWRlU2VsZWN0ZWQmJih0Lml0ZW1zPXQuaXRlbXMuZmlsdGVyKGU9PntsZXQgdD1QKGUuaWQpXG5yZXR1cm4hKG51bGwhPT10JiYtMSE9PXMuaXRlbXMuaW5kZXhPZih0KSl9KSksdH1yZWZyZXNoT3B0aW9ucyhlPSEwKXt2YXIgdCxpLHMsbixvLHIsbCxhLGMsZFxuY29uc3QgdT17fSxwPVtdXG52YXIgaD10aGlzLGc9aC5pbnB1dFZhbHVlKClcbmNvbnN0IGY9Zz09PWgubGFzdFF1ZXJ5fHxcIlwiPT1nJiZudWxsPT1oLmxhc3RRdWVyeVxudmFyIG09aC5zZWFyY2goZyksdj1udWxsLE89aC5zZXR0aW5ncy5zaG91bGRPcGVufHwhMSxiPWguZHJvcGRvd25fY29udGVudFxuZiYmKHY9aC5hY3RpdmVPcHRpb24pJiYoYz12LmNsb3Nlc3QoXCJbZGF0YS1ncm91cF1cIikpLG49bS5pdGVtcy5sZW5ndGgsXCJudW1iZXJcIj09dHlwZW9mIGguc2V0dGluZ3MubWF4T3B0aW9ucyYmKG49TWF0aC5taW4obixoLnNldHRpbmdzLm1heE9wdGlvbnMpKSxuPjAmJihPPSEwKVxuY29uc3QgeT0oZSx0KT0+e2xldCBpPXVbZV1cbmlmKHZvaWQgMCE9PWkpe2xldCBlPXBbaV1cbmlmKHZvaWQgMCE9PWUpcmV0dXJuW2ksZS5mcmFnbWVudF19bGV0IHM9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG5yZXR1cm4gaT1wLmxlbmd0aCxwLnB1c2goe2ZyYWdtZW50OnMsb3JkZXI6dCxvcHRncm91cDplfSksW2ksc119XG5mb3IodD0wO3Q8bjt0Kyspe2xldCBlPW0uaXRlbXNbdF1cbmlmKCFlKWNvbnRpbnVlXG5sZXQgbj1lLmlkLGw9aC5vcHRpb25zW25dXG5pZih2b2lkIDA9PT1sKWNvbnRpbnVlXG5sZXQgYT1OKG4pLGQ9aC5nZXRPcHRpb24oYSwhMClcbmZvcihoLnNldHRpbmdzLmhpZGVTZWxlY3RlZHx8ZC5jbGFzc0xpc3QudG9nZ2xlKFwic2VsZWN0ZWRcIixoLml0ZW1zLmluY2x1ZGVzKGEpKSxvPWxbaC5zZXR0aW5ncy5vcHRncm91cEZpZWxkXXx8XCJcIixpPTAscz0ocj1BcnJheS5pc0FycmF5KG8pP286W29dKSYmci5sZW5ndGg7aTxzO2krKyl7bz1yW2ldXG5sZXQgZT1sLiRvcmRlcix0PWgub3B0Z3JvdXBzW29dXG52YXIgd1xuaWYodm9pZCAwPT09dCYmXCJmdW5jdGlvblwiPT10eXBlb2YgaC5zZXR0aW5ncy5vcHRpb25Hcm91cFJlZ2lzdGVyKSh3PWguc2V0dGluZ3Mub3B0aW9uR3JvdXBSZWdpc3Rlci5hcHBseShoLFtvXSkpJiZoLnJlZ2lzdGVyT3B0aW9uR3JvdXAodylcbnQ9aC5vcHRncm91cHNbb10sdm9pZCAwPT09dD9vPVwiXCI6ZT10LiRvcmRlclxuY29uc3RbcyxhXT15KG8sZSlcbmk+MCYmKGQ9ZC5jbG9uZU5vZGUoITApLGllKGQse2lkOmwuJGlkK1wiLWNsb25lLVwiK2ksXCJhcmlhLXNlbGVjdGVkXCI6bnVsbH0pLGQuY2xhc3NMaXN0LmFkZChcInRzLWNsb25lZFwiKSxKKGQsXCJhY3RpdmVcIiksaC5hY3RpdmVPcHRpb24mJmguYWN0aXZlT3B0aW9uLmRhdGFzZXQudmFsdWU9PW4mJmMmJmMuZGF0YXNldC5ncm91cD09PW8udG9TdHJpbmcoKSYmKHY9ZCkpLGEuYXBwZW5kQ2hpbGQoZCksXCJcIiE9byYmKHVbb109cyl9fXZhciBTXG5oLnNldHRpbmdzLmxvY2tPcHRncm91cE9yZGVyJiZwLnNvcnQoKGUsdCk9PmUub3JkZXItdC5vcmRlciksbD1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksQihwLGU9PntsZXQgdD1lLmZyYWdtZW50LGk9ZS5vcHRncm91cFxuaWYoIXR8fCF0LmNoaWxkcmVuLmxlbmd0aClyZXR1cm5cbmxldCBzPWgub3B0Z3JvdXBzW2ldXG5pZih2b2lkIDAhPT1zKXtsZXQgZT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksaT1oLnJlbmRlcihcIm9wdGdyb3VwX2hlYWRlclwiLHMpXG56KGUsaSkseihlLHQpXG5sZXQgbj1oLnJlbmRlcihcIm9wdGdyb3VwXCIse2dyb3VwOnMsb3B0aW9uczplfSlcbnoobCxuKX1lbHNlIHoobCx0KX0pLGIuaW5uZXJIVE1MPVwiXCIseihiLGwpLGguaXNEcm9wZG93bkNvbnRlbnRTdGFsZT0hMSxoLnNldHRpbmdzLmhpZ2hsaWdodCYmKFM9Yi5xdWVyeVNlbGVjdG9yQWxsKFwic3Bhbi5oaWdobGlnaHRcIiksQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChTLGZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZVxudC5yZXBsYWNlQ2hpbGQoZS5maXJzdENoaWxkLGUpLHQubm9ybWFsaXplKCl9KSxtLnF1ZXJ5Lmxlbmd0aCYmbS50b2tlbnMubGVuZ3RoJiZCKG0udG9rZW5zLGU9PntuZShiLGUucmVnZXgpfSkpXG52YXIgXz1lPT57bGV0IHQ9aC5yZW5kZXIoZSx7aW5wdXQ6Z30pXG5yZXR1cm4gdCYmKE89ITAsYi5pbnNlcnRCZWZvcmUodCxiLmZpcnN0Q2hpbGQpKSx0fVxuaWYoaC5sb2FkaW5nP18oXCJsb2FkaW5nXCIpOmguc2V0dGluZ3Muc2hvdWxkTG9hZC5jYWxsKGgsZyk/MD09PW0uaXRlbXMubGVuZ3RoJiZfKFwibm9fcmVzdWx0c1wiKTpfKFwibm90X2xvYWRpbmdcIiksKGE9aC5jYW5DcmVhdGUoZykpJiYoZD1fKFwib3B0aW9uX2NyZWF0ZVwiKSksaC5oYXNPcHRpb25zPW0uaXRlbXMubGVuZ3RoPjB8fGEsTyl7aWYobS5pdGVtcy5sZW5ndGg+MCl7aWYodnx8XCJzaW5nbGVcIiE9PWguc2V0dGluZ3MubW9kZXx8bnVsbD09aC5pdGVtc1swXXx8KHY9aC5nZXRPcHRpb24oaC5pdGVtc1swXSkpLCFiLmNvbnRhaW5zKHYpKXtsZXQgZT0wXG5kJiYhaC5zZXR0aW5ncy5hZGRQcmVjZWRlbmNlJiYoZT0xKSx2PWguc2VsZWN0YWJsZSgpW2VdfX1lbHNlIGQmJih2PWQpXG5lJiYhaC5pc09wZW4mJihoLm9wZW4oKSxoLnNjcm9sbFRvT3B0aW9uKHYsXCJhdXRvXCIpKSxoLnNldEFjdGl2ZU9wdGlvbih2KX1lbHNlIGguY2xlYXJBY3RpdmVPcHRpb24oKSxlJiZoLmlzT3BlbiYmaC5jbG9zZSghMSl9c2VsZWN0YWJsZSgpe3JldHVybiB0aGlzLmRyb3Bkb3duX2NvbnRlbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXNlbGVjdGFibGVdXCIpfWFkZE9wdGlvbihlLHQ9ITEpe2NvbnN0IGk9dGhpc1xuaWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gaS5hZGRPcHRpb25zKGUsdCksITFcbmNvbnN0IHM9UChlW2kuc2V0dGluZ3MudmFsdWVGaWVsZF0pXG5yZXR1cm4gbnVsbD09PXN8fGkub3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShzKT8oaS51cGRhdGVPcHRpb24oZVtpLnNldHRpbmdzLnZhbHVlRmllbGRdLGUpLCExKTooZS4kb3JkZXI9ZS4kb3JkZXJ8fCsraS5vcmRlcixlLiRpZD1pLmlucHV0SWQrXCItb3B0LVwiK2UuJG9yZGVyLGkub3B0aW9uc1tzXT1lLGkuaXNEcm9wZG93bkNvbnRlbnRTdGFsZT0hMCx0JiYoaS51c2VyT3B0aW9uc1tzXT10LGkudHJpZ2dlcihcIm9wdGlvbl9hZGRcIixzLGUpKSxzKX1hZGRPcHRpb25zKGUsdD0hMSl7QihlLGU9Pnt0aGlzLmFkZE9wdGlvbihlLHQpfSl9cmVnaXN0ZXJPcHRpb24oZSl7cmV0dXJuIHRoaXMuYWRkT3B0aW9uKGUpfXJlZ2lzdGVyT3B0aW9uR3JvdXAoZSl7dmFyIHQ9UChlW3RoaXMuc2V0dGluZ3Mub3B0Z3JvdXBWYWx1ZUZpZWxkXSlcbnJldHVybiBudWxsIT09dCYmKGUuJG9yZGVyPWUuJG9yZGVyfHwrK3RoaXMub3JkZXIsdGhpcy5vcHRncm91cHNbdF09ZSx0KX1hZGRPcHRpb25Hcm91cChlLHQpe3ZhciBpXG50W3RoaXMuc2V0dGluZ3Mub3B0Z3JvdXBWYWx1ZUZpZWxkXT1lLChpPXRoaXMucmVnaXN0ZXJPcHRpb25Hcm91cCh0KSkmJnRoaXMudHJpZ2dlcihcIm9wdGdyb3VwX2FkZFwiLGksdCl9cmVtb3ZlT3B0aW9uR3JvdXAoZSl7dGhpcy5vcHRncm91cHMuaGFzT3duUHJvcGVydHkoZSkmJihkZWxldGUgdGhpcy5vcHRncm91cHNbZV0sdGhpcy5jbGVhckNhY2hlKCksdGhpcy50cmlnZ2VyKFwib3B0Z3JvdXBfcmVtb3ZlXCIsZSkpfWNsZWFyT3B0aW9uR3JvdXBzKCl7dGhpcy5vcHRncm91cHM9e30sdGhpcy5jbGVhckNhY2hlKCksdGhpcy50cmlnZ2VyKFwib3B0Z3JvdXBfY2xlYXJcIil9dXBkYXRlT3B0aW9uKGUsdCl7Y29uc3QgaT10aGlzXG52YXIgcyxuXG5jb25zdCBvPVAoZSkscj1QKHRbaS5zZXR0aW5ncy52YWx1ZUZpZWxkXSlcbmlmKG51bGw9PT1vKXJldHVyblxuY29uc3QgbD1pLm9wdGlvbnNbb11cbmlmKG51bGw9PWwpcmV0dXJuXG5pZihcInN0cmluZ1wiIT10eXBlb2Ygcil0aHJvdyBuZXcgRXJyb3IoXCJWYWx1ZSBtdXN0IGJlIHNldCBpbiBvcHRpb24gZGF0YVwiKVxuY29uc3QgYT1pLmdldE9wdGlvbihvKSxjPWkuZ2V0SXRlbShvKVxuaWYodC4kb3JkZXI9dC4kb3JkZXJ8fGwuJG9yZGVyLGRlbGV0ZSBpLm9wdGlvbnNbb10saS51bmNhY2hlVmFsdWUociksaS5vcHRpb25zW3JdPXQsYSl7aWYoaS5kcm9wZG93bl9jb250ZW50LmNvbnRhaW5zKGEpKXtjb25zdCBlPWkuX3JlbmRlcihcIm9wdGlvblwiLHQpXG5zZShhLGUpLGkuYWN0aXZlT3B0aW9uPT09YSYmaS5zZXRBY3RpdmVPcHRpb24oZSl9YS5yZW1vdmUoKX1jJiYoLTEhPT0obj1pLml0ZW1zLmluZGV4T2YobykpJiZpLml0ZW1zLnNwbGljZShuLDEscikscz1pLl9yZW5kZXIoXCJpdGVtXCIsdCksYy5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikmJlEocyxcImFjdGl2ZVwiKSxzZShjLHMpKSxpLmlzRHJvcGRvd25Db250ZW50U3RhbGU9ITB9cmVtb3ZlT3B0aW9uKGUsdCl7Y29uc3QgaT10aGlzXG5lPU4oZSksaS51bmNhY2hlVmFsdWUoZSksZGVsZXRlIGkudXNlck9wdGlvbnNbZV0sZGVsZXRlIGkub3B0aW9uc1tlXSxpLmlzRHJvcGRvd25Db250ZW50U3RhbGU9ITAsaS50cmlnZ2VyKFwib3B0aW9uX3JlbW92ZVwiLGUpLGkucmVtb3ZlSXRlbShlLHQpfWNsZWFyT3B0aW9ucyhlKXtjb25zdCB0PShlfHx0aGlzLmNsZWFyRmlsdGVyKS5iaW5kKHRoaXMpXG50aGlzLmxvYWRlZFNlYXJjaGVzPXt9LHRoaXMudXNlck9wdGlvbnM9e30sdGhpcy5jbGVhckNhY2hlKClcbmNvbnN0IGk9e31cbkIodGhpcy5vcHRpb25zLChlLHMpPT57dChlLHMpJiYoaVtzXT1lKX0pLHRoaXMub3B0aW9ucz10aGlzLnNpZnRlci5pdGVtcz1pLHRoaXMuaXNEcm9wZG93bkNvbnRlbnRTdGFsZT0hMCx0aGlzLnRyaWdnZXIoXCJvcHRpb25fY2xlYXJcIil9Y2xlYXJGaWx0ZXIoZSx0KXtyZXR1cm4gdGhpcy5pdGVtcy5pbmRleE9mKHQpPj0wfWdldE9wdGlvbihlLHQ9ITEpe2NvbnN0IGk9UChlKVxuaWYobnVsbD09PWkpcmV0dXJuIG51bGxcbmNvbnN0IHM9dGhpcy5vcHRpb25zW2ldXG5pZihudWxsIT1zKXtpZihzLiRkaXYpcmV0dXJuIHMuJGRpdlxuaWYodClyZXR1cm4gdGhpcy5fcmVuZGVyKFwib3B0aW9uXCIscyl9cmV0dXJuIG51bGx9Z2V0QWRqYWNlbnQoZSx0LGk9XCJvcHRpb25cIil7dmFyIHNcbmlmKCFlKXJldHVybiBudWxsXG5zPVwiaXRlbVwiPT1pP3RoaXMuY29udHJvbENoaWxkcmVuKCk6dGhpcy5kcm9wZG93bl9jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1zZWxlY3RhYmxlXVwiKVxuZm9yKGxldCBpPTA7aTxzLmxlbmd0aDtpKyspaWYoc1tpXT09ZSlyZXR1cm4gdD4wP3NbaSsxXTpzW2ktMV1cbnJldHVybiBudWxsfWdldEl0ZW0oZSl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUpcmV0dXJuIGVcbnZhciB0PVAoZSlcbnJldHVybiBudWxsIT09dD90aGlzLmNvbnRyb2wucXVlcnlTZWxlY3RvcihgW2RhdGEtdmFsdWU9XCIke00odCl9XCJdYCk6bnVsbH1hZGRJdGVtcyhlLHQpe3ZhciBpPXRoaXMscz1BcnJheS5pc0FycmF5KGUpP2U6W2VdXG5jb25zdCBuPShzPXMuZmlsdGVyKGU9Pi0xPT09aS5pdGVtcy5pbmRleE9mKGUpKSlbcy5sZW5ndGgtMV1cbnMuZm9yRWFjaChlPT57aS5pc1BlbmRpbmc9ZSE9PW4saS5hZGRJdGVtKGUsdCl9KX1hZGRJdGVtKGUsdCl7aih0aGlzLHQ/W106W1wiY2hhbmdlXCIsXCJkcm9wZG93bl9jbG9zZVwiXSwoKT0+e3ZhciBpLHNcbmNvbnN0IG49dGhpcyxvPW4uc2V0dGluZ3MubW9kZSxyPVAoZSlcbmlmKCghcnx8LTE9PT1uLml0ZW1zLmluZGV4T2Yocil8fChcInNpbmdsZVwiPT09byYmbi5jbG9zZSgpLFwic2luZ2xlXCIhPT1vJiZuLnNldHRpbmdzLmR1cGxpY2F0ZXMpKSYmbnVsbCE9PXImJm4ub3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShyKSYmKFwic2luZ2xlXCI9PT1vJiZuLmNsZWFyKHQpLFwibXVsdGlcIiE9PW98fCFuLmlzRnVsbCgpKSl7aWYoaT1uLl9yZW5kZXIoXCJpdGVtXCIsbi5vcHRpb25zW3JdKSxuLmNvbnRyb2wuY29udGFpbnMoaSkmJihpPWkuY2xvbmVOb2RlKCEwKSkscz1uLmlzRnVsbCgpLG4uaXRlbXMuc3BsaWNlKG4uY2FyZXRQb3MsMCxyKSxuLmluc2VydEF0Q2FyZXQoaSksbi5pc1NldHVwKXtpZighbi5pc1BlbmRpbmcmJm4uc2V0dGluZ3MuaGlkZVNlbGVjdGVkKXtsZXQgZT1uLmdldE9wdGlvbihyKSx0PW4uZ2V0QWRqYWNlbnQoZSwxKVxudCYmbi5zZXRBY3RpdmVPcHRpb24odCl9bi5zZXR0aW5ncy5jbGVhckFmdGVyU2VsZWN0JiZuLnNldFRleHRib3hWYWx1ZSgpLG4uaXNQZW5kaW5nfHxuLnNldHRpbmdzLmNsb3NlQWZ0ZXJTZWxlY3R8fG4ucmVmcmVzaE9wdGlvbnMobi5pc0ZvY3VzZWQmJlwic2luZ2xlXCIhPT1vKSwwIT1uLnNldHRpbmdzLmNsb3NlQWZ0ZXJTZWxlY3QmJm4uaXNGdWxsKCk/bi5jbG9zZSgpOm4uaXNQZW5kaW5nfHxuLnBvc2l0aW9uRHJvcGRvd24oKSxuLnRyaWdnZXIoXCJpdGVtX2FkZFwiLHIsaSksbi5pc1BlbmRpbmd8fG4udXBkYXRlT3JpZ2luYWxJbnB1dCh7c2lsZW50OnR9KX0oIW4uaXNQZW5kaW5nfHwhcyYmbi5pc0Z1bGwoKSkmJihuLmlucHV0U3RhdGUoKSxuLnJlZnJlc2hTdGF0ZSgpKX19KX1yZW1vdmVJdGVtKGU9bnVsbCx0KXtjb25zdCBpPXRoaXNcbmlmKCEoZT1pLmdldEl0ZW0oZSkpKXJldHVyblxudmFyIHMsblxuY29uc3Qgbz1lLmRhdGFzZXQudmFsdWVcbnM9dGUoZSksZS5yZW1vdmUoKSxlLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSYmKG49aS5hY3RpdmVJdGVtcy5pbmRleE9mKGUpLGkuYWN0aXZlSXRlbXMuc3BsaWNlKG4sMSksSihlLFwiYWN0aXZlXCIpKSxpLml0ZW1zLnNwbGljZShzLDEpLGkuaXNEcm9wZG93bkNvbnRlbnRTdGFsZT0hMCwhaS5zZXR0aW5ncy5wZXJzaXN0JiZpLnVzZXJPcHRpb25zLmhhc093blByb3BlcnR5KG8pJiZpLnJlbW92ZU9wdGlvbihvLHQpLHM8aS5jYXJldFBvcyYmaS5zZXRDYXJldChpLmNhcmV0UG9zLTEpLGkudXBkYXRlT3JpZ2luYWxJbnB1dCh7c2lsZW50OnR9KSxpLnJlZnJlc2hTdGF0ZSgpLGkucG9zaXRpb25Ecm9wZG93bigpLGkudHJpZ2dlcihcIml0ZW1fcmVtb3ZlXCIsbyxlKX1jcmVhdGVJdGVtKGU9bnVsbCx0PSgpPT57fSl7Mz09PWFyZ3VtZW50cy5sZW5ndGgmJih0PWFyZ3VtZW50c1syXSksXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmKHQ9KCk9Pnt9KVxudmFyIGkscz10aGlzLG49cy5jYXJldFBvc1xuaWYoZT1lfHxzLmlucHV0VmFsdWUoKSwhcy5jYW5DcmVhdGUoZSkpe3JldHVybiBQKGUpJiZ0aGlzLm9wdGlvbnNbZV0mJnMuYWRkSXRlbShlKSx0KCksITF9cy5sb2NrKClcbnZhciBvPSExLHI9ZT0+e2lmKHMudW5sb2NrKCksIWV8fFwib2JqZWN0XCIhPXR5cGVvZiBlKXJldHVybiB0KClcbnZhciBpPVAoZVtzLnNldHRpbmdzLnZhbHVlRmllbGRdKVxuaWYoXCJzdHJpbmdcIiE9dHlwZW9mIGkpcmV0dXJuIHQoKVxucy5zZXRUZXh0Ym94VmFsdWUoKSxzLmFkZE9wdGlvbihlLCEwKSxzLnNldENhcmV0KG4pLHMuYWRkSXRlbShpKSx0KGUpLG89ITB9XG5yZXR1cm4gaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBzLnNldHRpbmdzLmNyZWF0ZT9zLnNldHRpbmdzLmNyZWF0ZS5jYWxsKHRoaXMsZSxyKTp7W3Muc2V0dGluZ3MubGFiZWxGaWVsZF06ZSxbcy5zZXR0aW5ncy52YWx1ZUZpZWxkXTplfSxvfHxyKGkpLCEwfXJlZnJlc2hJdGVtcygpe3ZhciBlPXRoaXNcbmUuaXNEcm9wZG93bkNvbnRlbnRTdGFsZT0hMCxlLmlzU2V0dXAmJmUuYWRkSXRlbXMoZS5pdGVtcyksZS51cGRhdGVPcmlnaW5hbElucHV0KCksZS5yZWZyZXNoU3RhdGUoKX1yZWZyZXNoU3RhdGUoKXtjb25zdCBlPXRoaXNcbmUucmVmcmVzaFZhbGlkaXR5U3RhdGUoKVxuY29uc3QgdD1lLmlzRnVsbCgpLGk9ZS5pc0xvY2tlZFxuZS53cmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJydGxcIixlLnJ0bClcbmNvbnN0IHM9ZS53cmFwcGVyLmNsYXNzTGlzdFxudmFyIG5cbnMudG9nZ2xlKFwiZm9jdXNcIixlLmlzRm9jdXNlZCkscy50b2dnbGUoXCJkaXNhYmxlZFwiLGUuaXNEaXNhYmxlZCkscy50b2dnbGUoXCJyZWFkb25seVwiLGUuaXNSZWFkT25seSkscy50b2dnbGUoXCJyZXF1aXJlZFwiLGUuaXNSZXF1aXJlZCkscy50b2dnbGUoXCJpbnZhbGlkXCIsIWUuaXNWYWxpZCkscy50b2dnbGUoXCJsb2NrZWRcIixpKSxzLnRvZ2dsZShcImZ1bGxcIix0KSxzLnRvZ2dsZShcImlucHV0LWFjdGl2ZVwiLGUuaXNGb2N1c2VkJiYhZS5pc0lucHV0SGlkZGVuKSxzLnRvZ2dsZShcImRyb3Bkb3duLWFjdGl2ZVwiLGUuaXNPcGVuKSxzLnRvZ2dsZShcImhhcy1vcHRpb25zXCIsKG49ZS5vcHRpb25zLDA9PT1PYmplY3Qua2V5cyhuKS5sZW5ndGgpKSxzLnRvZ2dsZShcImhhcy1pdGVtc1wiLGUuaXRlbXMubGVuZ3RoPjApfXJlZnJlc2hWYWxpZGl0eVN0YXRlKCl7dmFyIGU9dGhpc1xuZS5pbnB1dC52YWxpZGl0eSYmKGUuaXNWYWxpZD1lLmlucHV0LnZhbGlkaXR5LnZhbGlkLGUuaXNJbnZhbGlkPSFlLmlzVmFsaWQpfWlzRnVsbCgpe3JldHVybiBudWxsIT09dGhpcy5zZXR0aW5ncy5tYXhJdGVtcyYmdGhpcy5pdGVtcy5sZW5ndGg+PXRoaXMuc2V0dGluZ3MubWF4SXRlbXN9dXBkYXRlT3JpZ2luYWxJbnB1dChlPXt9KXtjb25zdCB0PXRoaXNcbnZhciBpLHNcbmNvbnN0IG49dC5pbnB1dC5xdWVyeVNlbGVjdG9yKCdvcHRpb25bdmFsdWU9XCJcIl0nKVxuaWYodC5pc19zZWxlY3RfdGFnKXtjb25zdCBvPVtdLHI9dC5pbnB1dC5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uOmNoZWNrZWRcIikubGVuZ3RoXG5mdW5jdGlvbiBsKGUsaSxzKXtyZXR1cm4gZXx8KGU9SygnPG9wdGlvbiB2YWx1ZT1cIicrRChpKSsnXCI+JytEKHMpK1wiPC9vcHRpb24+XCIpKSxlIT1uJiZ0LmlucHV0LmFwcGVuZChlKSxvLnB1c2goZSksKGUhPW58fHI+MHx8XCJtdWx0aVwiPT10LnNldHRpbmdzLm1vZGUpJiYoZS5zZWxlY3RlZD0hMCksZX10LmlucHV0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb246Y2hlY2tlZFwiKS5mb3JFYWNoKGU9PntlLnNlbGVjdGVkPSExfSksMD09dC5pdGVtcy5sZW5ndGgmJlwic2luZ2xlXCI9PXQuc2V0dGluZ3MubW9kZT9sKG4sXCJcIixcIlwiKTp0Lml0ZW1zLmZvckVhY2goZT0+e2lmKGk9dC5vcHRpb25zW2VdLHM9aVt0LnNldHRpbmdzLmxhYmVsRmllbGRdfHxcIlwiLG8uaW5jbHVkZXMoaS4kb3B0aW9uKSl7bCh0LmlucHV0LnF1ZXJ5U2VsZWN0b3IoYG9wdGlvblt2YWx1ZT1cIiR7TShlKX1cIl06bm90KDpjaGVja2VkKWApLGUscyl9ZWxzZSBpLiRvcHRpb249bChpLiRvcHRpb24sZSxzKX0pfWVsc2UgdC5pbnB1dC52YWx1ZT10LmdldFZhbHVlKClcbnQuaXNTZXR1cCYmKGUuc2lsZW50fHx0LnRyaWdnZXIoXCJjaGFuZ2VcIix0LmdldFZhbHVlKCkpKX1vcGVuKCl7dmFyIGU9dGhpc1xuZS5pc0xvY2tlZHx8ZS5pc09wZW58fFwibXVsdGlcIj09PWUuc2V0dGluZ3MubW9kZSYmZS5pc0Z1bGwoKXx8KGUuaXNPcGVuPSEwLGllKGUuZm9jdXNfbm9kZSx7XCJhcmlhLWV4cGFuZGVkXCI6XCJ0cnVlXCJ9KSxlLnJlZnJlc2hTdGF0ZSgpLFcoZS5kcm9wZG93bix7dmlzaWJpbGl0eTpcImhpZGRlblwiLGRpc3BsYXk6XCJibG9ja1wifSksZS5wb3NpdGlvbkRyb3Bkb3duKCksVyhlLmRyb3Bkb3duLHt2aXNpYmlsaXR5OlwidmlzaWJsZVwiLGRpc3BsYXk6XCJibG9ja1wifSksZS5mb2N1cygpLGUudHJpZ2dlcihcImRyb3Bkb3duX29wZW5cIixlLmRyb3Bkb3duKSl9Y2xvc2UoZT0hMCl7dmFyIHQ9dGhpcyxpPXQuaXNPcGVuXG5lJiYodC5zZXRUZXh0Ym94VmFsdWUoKSxcInNpbmdsZVwiPT09dC5zZXR0aW5ncy5tb2RlJiZ0Lml0ZW1zLmxlbmd0aCYmdC5pbnB1dFN0YXRlKCkpLHQuaXNPcGVuPSExLGllKHQuZm9jdXNfbm9kZSx7XCJhcmlhLWV4cGFuZGVkXCI6XCJmYWxzZVwifSksVyh0LmRyb3Bkb3duLHtkaXNwbGF5Olwibm9uZVwifSksdC5zZXR0aW5ncy5oaWRlU2VsZWN0ZWQmJnQuY2xlYXJBY3RpdmVPcHRpb24oKSx0LnJlZnJlc2hTdGF0ZSgpLGkmJnQudHJpZ2dlcihcImRyb3Bkb3duX2Nsb3NlXCIsdC5kcm9wZG93bil9cG9zaXRpb25Ecm9wZG93bigpe2lmKFwiYm9keVwiPT09dGhpcy5zZXR0aW5ncy5kcm9wZG93blBhcmVudCl7dmFyIGU9dGhpcy5jb250cm9sLHQ9ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxpPWUub2Zmc2V0SGVpZ2h0K3QudG9wK3dpbmRvdy5zY3JvbGxZLHM9dC5sZWZ0K3dpbmRvdy5zY3JvbGxYXG5XKHRoaXMuZHJvcGRvd24se3dpZHRoOnQud2lkdGgrXCJweFwiLHRvcDppK1wicHhcIixsZWZ0OnMrXCJweFwifSl9fWNsZWFyKGUpe3ZhciB0PXRoaXNcbmlmKHQuaXRlbXMubGVuZ3RoKXt2YXIgaT10LmNvbnRyb2xDaGlsZHJlbigpXG5CKGksZT0+e3QucmVtb3ZlSXRlbShlLCEwKX0pLHQuaW5wdXRTdGF0ZSgpLGV8fHQudXBkYXRlT3JpZ2luYWxJbnB1dCgpLHQudHJpZ2dlcihcImNsZWFyXCIpfX1pbnNlcnRBdENhcmV0KGUpe2NvbnN0IHQ9dGhpcyxpPXQuY2FyZXRQb3Mscz10LmNvbnRyb2xcbnMuaW5zZXJ0QmVmb3JlKGUscy5jaGlsZHJlbltpXXx8bnVsbCksdC5zZXRDYXJldChpKzEpfWRlbGV0ZVNlbGVjdGlvbihlKXt2YXIgdCxpLHMsbixvLHI9dGhpc1xudD1lJiY4PT09ZS5rZXlDb2RlPy0xOjEsaT17c3RhcnQ6KG89ci5jb250cm9sX2lucHV0KS5zZWxlY3Rpb25TdGFydHx8MCxsZW5ndGg6KG8uc2VsZWN0aW9uRW5kfHwwKS0oby5zZWxlY3Rpb25TdGFydHx8MCl9XG5jb25zdCBsPVtdXG5pZihyLmFjdGl2ZUl0ZW1zLmxlbmd0aCluPWVlKHIuYWN0aXZlSXRlbXMsdCkscz10ZShuKSx0PjAmJnMrKyxCKHIuYWN0aXZlSXRlbXMsZT0+bC5wdXNoKGUpKVxuZWxzZSBpZigoci5pc0ZvY3VzZWR8fFwic2luZ2xlXCI9PT1yLnNldHRpbmdzLm1vZGUpJiZyLml0ZW1zLmxlbmd0aCl7Y29uc3QgZT1yLmNvbnRyb2xDaGlsZHJlbigpXG5sZXQgc1xudDwwJiYwPT09aS5zdGFydCYmMD09PWkubGVuZ3RoP3M9ZVtyLmNhcmV0UG9zLTFdOnQ+MCYmaS5zdGFydD09PXIuaW5wdXRWYWx1ZSgpLmxlbmd0aCYmKHM9ZVtyLmNhcmV0UG9zXSksdm9pZCAwIT09cyYmbC5wdXNoKHMpfWlmKCFyLnNob3VsZERlbGV0ZShsLGUpKXJldHVybiExXG5mb3IoJChlLCEwKSx2b2lkIDAhPT1zJiZyLnNldENhcmV0KHMpO2wubGVuZ3RoOylyLnJlbW92ZUl0ZW0obC5wb3AoKSlcbnJldHVybiByLmlucHV0U3RhdGUoKSxyLnBvc2l0aW9uRHJvcGRvd24oKSxyLnJlZnJlc2hPcHRpb25zKCExKSwhMH1zaG91bGREZWxldGUoZSx0KXtjb25zdCBpPWUubWFwKGU9PmUuZGF0YXNldC52YWx1ZSlcbnJldHVybiEoIWkubGVuZ3RofHxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLnNldHRpbmdzLm9uRGVsZXRlJiYhMT09PXRoaXMuc2V0dGluZ3Mub25EZWxldGUuY2FsbCh0aGlzLGksdCkpfWFkdmFuY2VTZWxlY3Rpb24oZSx0KXt2YXIgaSxzLG49dGhpc1xubi5ydGwmJihlKj0tMSksbi5pbnB1dFZhbHVlKCkubGVuZ3RofHwoUihvZSx0KXx8UihcInNoaWZ0S2V5XCIsdCk/KHM9KGk9bi5nZXRMYXN0QWN0aXZlKGUpKT9pLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKT9uLmdldEFkamFjZW50KGksZSxcIml0ZW1cIik6aTplPjA/bi5jb250cm9sX2lucHV0Lm5leHRFbGVtZW50U2libGluZzpuLmNvbnRyb2xfaW5wdXQucHJldmlvdXNFbGVtZW50U2libGluZykmJihzLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSYmbi5yZW1vdmVBY3RpdmVJdGVtKGkpLG4uc2V0QWN0aXZlSXRlbUNsYXNzKHMpKTpuLm1vdmVDYXJldChlKSl9bW92ZUNhcmV0KGUpe31nZXRMYXN0QWN0aXZlKGUpe2xldCB0PXRoaXMuY29udHJvbC5xdWVyeVNlbGVjdG9yKFwiLmxhc3QtYWN0aXZlXCIpXG5pZih0KXJldHVybiB0XG52YXIgaT10aGlzLmNvbnRyb2wucXVlcnlTZWxlY3RvckFsbChcIi5hY3RpdmVcIilcbnJldHVybiBpP2VlKGksZSk6dm9pZCAwfXNldENhcmV0KGUpe3RoaXMuY2FyZXRQb3M9dGhpcy5pdGVtcy5sZW5ndGh9Y29udHJvbENoaWxkcmVuKCl7cmV0dXJuIEFycmF5LmZyb20odGhpcy5jb250cm9sLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10cy1pdGVtXVwiKSl9bG9jaygpe3RoaXMuc2V0TG9ja2VkKCEwKX11bmxvY2soKXt0aGlzLnNldExvY2tlZCghMSl9c2V0TG9ja2VkKGU9dGhpcy5pc1JlYWRPbmx5fHx0aGlzLmlzRGlzYWJsZWQpe3RoaXMuaXNMb2NrZWQ9ZSx0aGlzLnJlZnJlc2hTdGF0ZSgpfWRpc2FibGUoKXt0aGlzLnNldERpc2FibGVkKCEwKSx0aGlzLmNsb3NlKCl9ZW5hYmxlKCl7dGhpcy5zZXREaXNhYmxlZCghMSl9c2V0RGlzYWJsZWQoZSl7dGhpcy5mb2N1c19ub2RlLnRhYkluZGV4PWU/LTE6dGhpcy50YWJJbmRleCx0aGlzLmlzRGlzYWJsZWQ9ZSx0aGlzLmlucHV0LmRpc2FibGVkPWUsdGhpcy5jb250cm9sX2lucHV0LmRpc2FibGVkPWUsdGhpcy5zZXRMb2NrZWQoKX1zZXRSZWFkT25seShlKXt0aGlzLmlzUmVhZE9ubHk9ZSx0aGlzLmlucHV0LnJlYWRPbmx5PWUsdGhpcy5jb250cm9sX2lucHV0LnJlYWRPbmx5PWUsdGhpcy5zZXRMb2NrZWQoKX1kZXN0cm95KCl7dmFyIGU9dGhpcyx0PWUucmV2ZXJ0U2V0dGluZ3NcbmUudHJpZ2dlcihcImRlc3Ryb3lcIiksZS5vZmYoKSxlLndyYXBwZXIucmVtb3ZlKCksZS5kcm9wZG93bi5yZW1vdmUoKSxlLmlucHV0LmlubmVySFRNTD10LmlubmVySFRNTCxlLmlucHV0LnRhYkluZGV4PXQudGFiSW5kZXgsSihlLmlucHV0LFwidG9tc2VsZWN0ZWRcIixcInRzLWhpZGRlbi1hY2Nlc3NpYmxlXCIpLGUuX2Rlc3Ryb3koKSxkZWxldGUgZS5pbnB1dC50b21zZWxlY3R9cmVuZGVyKGUsdCl7dmFyIGksc1xuY29uc3Qgbj10aGlzXG5pZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0aGlzLnNldHRpbmdzLnJlbmRlcltlXSlyZXR1cm4gbnVsbFxuaWYoIShzPW4uc2V0dGluZ3MucmVuZGVyW2VdLmNhbGwodGhpcyx0LEQpKSlyZXR1cm4gbnVsbFxuaWYocz1LKHMpLFwib3B0aW9uXCI9PT1lfHxcIm9wdGlvbl9jcmVhdGVcIj09PWU/dFtuLnNldHRpbmdzLmRpc2FibGVkRmllbGRdP2llKHMse1wiYXJpYS1kaXNhYmxlZFwiOlwidHJ1ZVwifSk6aWUocyx7XCJkYXRhLXNlbGVjdGFibGVcIjpcIlwifSk6XCJvcHRncm91cFwiPT09ZSYmKGk9dC5ncm91cFtuLnNldHRpbmdzLm9wdGdyb3VwVmFsdWVGaWVsZF0saWUocyx7XCJkYXRhLWdyb3VwXCI6aX0pLHQuZ3JvdXBbbi5zZXR0aW5ncy5kaXNhYmxlZEZpZWxkXSYmaWUocyx7XCJkYXRhLWRpc2FibGVkXCI6XCJcIn0pKSxcIm9wdGlvblwiPT09ZXx8XCJpdGVtXCI9PT1lKXtjb25zdCBpPU4odFtuLnNldHRpbmdzLnZhbHVlRmllbGRdKVxuaWUocyx7XCJkYXRhLXZhbHVlXCI6aX0pLFwiaXRlbVwiPT09ZT8oUShzLG4uc2V0dGluZ3MuaXRlbUNsYXNzKSxpZShzLHtcImRhdGEtdHMtaXRlbVwiOlwiXCJ9KSk6KFEocyxuLnNldHRpbmdzLm9wdGlvbkNsYXNzKSxpZShzLHtyb2xlOlwib3B0aW9uXCIsaWQ6dC4kaWR9KSx0LiRkaXY9cyxuLm9wdGlvbnNbaV09dCl9cmV0dXJuIHN9X3JlbmRlcihlLHQpe2NvbnN0IGk9dGhpcy5yZW5kZXIoZSx0KVxuaWYobnVsbD09aSl0aHJvd1wiSFRNTEVsZW1lbnQgZXhwZWN0ZWRcIlxucmV0dXJuIGl9Y2xlYXJDYWNoZSgpe0IodGhpcy5vcHRpb25zLGU9PntlLiRkaXYmJihlLiRkaXYucmVtb3ZlKCksZGVsZXRlIGUuJGRpdil9KX11bmNhY2hlVmFsdWUoZSl7Y29uc3QgdD10aGlzLmdldE9wdGlvbihlKVxudCYmdC5yZW1vdmUoKX1jYW5DcmVhdGUoZSl7cmV0dXJuIHRoaXMuc2V0dGluZ3MuY3JlYXRlJiZlLmxlbmd0aD4wJiZ0aGlzLnNldHRpbmdzLmNyZWF0ZUZpbHRlci5jYWxsKHRoaXMsZSl9aG9vayhlLHQsaSl7dmFyIHM9dGhpcyxuPXNbdF1cbnNbdF09ZnVuY3Rpb24oKXt2YXIgdCxvXG5yZXR1cm5cImFmdGVyXCI9PT1lJiYodD1uLmFwcGx5KHMsYXJndW1lbnRzKSksbz1pLmFwcGx5KHMsYXJndW1lbnRzKSxcImluc3RlYWRcIj09PWU/bzooXCJiZWZvcmVcIj09PWUmJih0PW4uYXBwbHkocyxhcmd1bWVudHMpKSx0KX19fXJldHVybiBjZS5kZWZpbmUoXCJjaGFuZ2VfbGlzdGVuZXJcIixmdW5jdGlvbigpe3EodGhpcy5pbnB1dCxcImNoYW5nZVwiLCgpPT57dGhpcy5zeW5jKCl9KX0pLGNlLmRlZmluZShcImNoZWNrYm94X29wdGlvbnNcIixmdW5jdGlvbihlKXt2YXIgdD10aGlzLGk9dC5vbk9wdGlvblNlbGVjdFxudC5zZXR0aW5ncy5oaWRlU2VsZWN0ZWQ9ITFcbmNvbnN0IHM9T2JqZWN0LmFzc2lnbih7Y2xhc3NOYW1lOlwidG9tc2VsZWN0LWNoZWNrYm94XCIsY2hlY2tlZENsYXNzTmFtZXM6dm9pZCAwLHVuY2hlY2tlZENsYXNzTmFtZXM6dm9pZCAwfSxlKVxudmFyIG49ZnVuY3Rpb24oZSx0KXt0PyhlLmNoZWNrZWQ9ITAscy51bmNoZWNrZWRDbGFzc05hbWVzJiZlLmNsYXNzTGlzdC5yZW1vdmUoLi4ucy51bmNoZWNrZWRDbGFzc05hbWVzKSxzLmNoZWNrZWRDbGFzc05hbWVzJiZlLmNsYXNzTGlzdC5hZGQoLi4ucy5jaGVja2VkQ2xhc3NOYW1lcykpOihlLmNoZWNrZWQ9ITEscy5jaGVja2VkQ2xhc3NOYW1lcyYmZS5jbGFzc0xpc3QucmVtb3ZlKC4uLnMuY2hlY2tlZENsYXNzTmFtZXMpLHMudW5jaGVja2VkQ2xhc3NOYW1lcyYmZS5jbGFzc0xpc3QuYWRkKC4uLnMudW5jaGVja2VkQ2xhc3NOYW1lcykpfSxvPWZ1bmN0aW9uKGUpe3NldFRpbWVvdXQoKCk9Pnt2YXIgdD1lLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5cIitzLmNsYXNzTmFtZSlcbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50JiZuKHQsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSl9LDEpfVxudC5ob29rKFwiYWZ0ZXJcIixcInNldHVwVGVtcGxhdGVzXCIsKCk9Pnt2YXIgZT10LnNldHRpbmdzLnJlbmRlci5vcHRpb25cbnQuc2V0dGluZ3MucmVuZGVyLm9wdGlvbj0oaSxvKT0+e3ZhciByPUsoZS5jYWxsKHQsaSxvKSksbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbnMuY2xhc3NOYW1lJiZsLmNsYXNzTGlzdC5hZGQocy5jbGFzc05hbWUpLGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oZSl7JChlKX0pLGwudHlwZT1cImNoZWNrYm94XCJcbmNvbnN0IGE9UChpW3Quc2V0dGluZ3MudmFsdWVGaWVsZF0pXG5yZXR1cm4gbihsLCEhKGEmJnQuaXRlbXMuaW5kZXhPZihhKT4tMSkpLHIucHJlcGVuZChsKSxyfX0pLHQub24oXCJpdGVtX3JlbW92ZVwiLGU9Pnt2YXIgaT10LmdldE9wdGlvbihlKVxuaSYmKGkuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpLG8oaSkpfSksdC5vbihcIml0ZW1fYWRkXCIsZT0+e3ZhciBpPXQuZ2V0T3B0aW9uKGUpXG5pJiZvKGkpfSksdC5ob29rKFwiaW5zdGVhZFwiLFwib25PcHRpb25TZWxlY3RcIiwoZSxzKT0+e2lmKHMuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpcmV0dXJuIHMuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpLHQucmVtb3ZlSXRlbShzLmRhdGFzZXQudmFsdWUpLHQucmVmcmVzaE9wdGlvbnMoKSx2b2lkICQoZSwhMClcbmkuY2FsbCh0LGUscyksbyhzKX0pfSksY2UuZGVmaW5lKFwiY2xlYXJfYnV0dG9uXCIsZnVuY3Rpb24oZSl7Y29uc3QgdD10aGlzLGk9T2JqZWN0LmFzc2lnbih7Y2xhc3NOYW1lOlwiY2xlYXItYnV0dG9uXCIsdGl0bGU6XCJDbGVhciBBbGxcIixyb2xlOlwiYnV0dG9uXCIsdGFiaW5kZXg6MCxodG1sOmU9PmA8ZGl2IGNsYXNzPVwiJHtlLmNsYXNzTmFtZX1cIiB0aXRsZT1cIiR7ZS50aXRsZX1cIiByb2xlPVwiJHtlLnJvbGV9XCIgdGFiaW5kZXg9XCIke2UudGFiaW5kZXh9XCI+JnRpbWVzOzwvZGl2PmB9LGUpXG50Lm9uKFwiaW5pdGlhbGl6ZVwiLCgpPT57dmFyIGU9SyhpLmh0bWwoaSkpXG5lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGU9Pnt0LmlzTG9ja2VkfHwodC5jbGVhcigpLFwic2luZ2xlXCI9PT10LnNldHRpbmdzLm1vZGUmJnQuc2V0dGluZ3MuYWxsb3dFbXB0eU9wdGlvbiYmdC5hZGRJdGVtKFwiXCIpLHQucmVmcmVzaE9wdGlvbnMoITEpLGUucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpKX0pLHQuY29udHJvbC5hcHBlbmRDaGlsZChlKX0pfSksY2UuZGVmaW5lKFwiZHJhZ19kcm9wXCIsZnVuY3Rpb24oKXt2YXIgZT10aGlzXG5pZihcIm11bHRpXCIhPT1lLnNldHRpbmdzLm1vZGUpcmV0dXJuXG52YXIgdD1lLmxvY2ssaT1lLnVubG9ja1xubGV0IHMsbj0hMFxuZS5ob29rKFwiYWZ0ZXJcIixcInNldHVwVGVtcGxhdGVzXCIsKCk9Pnt2YXIgdD1lLnNldHRpbmdzLnJlbmRlci5pdGVtXG5lLnNldHRpbmdzLnJlbmRlci5pdGVtPShpLG8pPT57Y29uc3Qgcj1LKHQuY2FsbChlLGksbykpXG5pZShyLHtkcmFnZ2FibGU6XCJ0cnVlXCJ9KVxuY29uc3QgbD1lPT57ZS5wcmV2ZW50RGVmYXVsdCgpLHIuY2xhc3NMaXN0LmFkZChcInRzLWRyYWctb3ZlclwiKSxhKHIscyl9LGE9KGUsdCk9Pnt2YXIgaSxzLG5cbnZvaWQgMCE9PXQmJigoKGUsdCk9Pntkb3t2YXIgaVxuaWYoZT09KHQ9bnVsbD09KGk9dCk/dm9pZCAwOmkucHJldmlvdXNFbGVtZW50U2libGluZykpcmV0dXJuITB9d2hpbGUodCYmdC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKVxucmV0dXJuITF9KSh0LHIpPyhzPXQsbnVsbD09KG49KGk9ZSkucGFyZW50Tm9kZSl8fG4uaW5zZXJ0QmVmb3JlKHMsaS5uZXh0U2libGluZykpOigoZSx0KT0+e3ZhciBpXG5udWxsPT0oaT1lLnBhcmVudE5vZGUpfHxpLmluc2VydEJlZm9yZSh0LGUpfSkoZSx0KSl9XG5yZXR1cm4gcShyLFwibW91c2Vkb3duXCIsZT0+e258fCQoZSksZS5zdG9wUHJvcGFnYXRpb24oKX0pLHEocixcImRyYWdzdGFydFwiLGU9PntzPXIsc2V0VGltZW91dCgoKT0+e3IuY2xhc3NMaXN0LmFkZChcInRzLWRyYWdnaW5nXCIpfSwwKX0pLHEocixcImRyYWdlbnRlclwiLGwpLHEocixcImRyYWdvdmVyXCIsbCkscShyLFwiZHJhZ2xlYXZlXCIsKCk9PntyLmNsYXNzTGlzdC5yZW1vdmUoXCJ0cy1kcmFnLW92ZXJcIil9KSxxKHIsXCJkcmFnZW5kXCIsKCk9Pnt2YXIgdFxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50cy1kcmFnLW92ZXJcIikuZm9yRWFjaChlPT5lLmNsYXNzTGlzdC5yZW1vdmUoXCJ0cy1kcmFnLW92ZXJcIikpLG51bGw9PSh0PXMpfHx0LmNsYXNzTGlzdC5yZW1vdmUoXCJ0cy1kcmFnZ2luZ1wiKSxzPXZvaWQgMFxudmFyIGk9W11cbmUuY29udHJvbC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdmFsdWVdXCIpLmZvckVhY2goZT0+e2lmKGUuZGF0YXNldC52YWx1ZSl7bGV0IHQ9ZS5kYXRhc2V0LnZhbHVlXG50JiZpLnB1c2godCl9fSksZS5zZXRWYWx1ZShpKX0pLHJ9fSksZS5ob29rKFwiaW5zdGVhZFwiLFwibG9ja1wiLCgpPT4obj0hMSx0LmNhbGwoZSkpKSxlLmhvb2soXCJpbnN0ZWFkXCIsXCJ1bmxvY2tcIiwoKT0+KG49ITAsaS5jYWxsKGUpKSl9KSxjZS5kZWZpbmUoXCJkcm9wZG93bl9oZWFkZXJcIixmdW5jdGlvbihlKXtjb25zdCB0PXRoaXMsaT1PYmplY3QuYXNzaWduKHt0aXRsZTpcIlVudGl0bGVkXCIsaGVhZGVyQ2xhc3M6XCJkcm9wZG93bi1oZWFkZXJcIix0aXRsZVJvd0NsYXNzOlwiZHJvcGRvd24taGVhZGVyLXRpdGxlXCIsbGFiZWxDbGFzczpcImRyb3Bkb3duLWhlYWRlci1sYWJlbFwiLGNsb3NlQ2xhc3M6XCJkcm9wZG93bi1oZWFkZXItY2xvc2VcIixodG1sOmU9Pic8ZGl2IGNsYXNzPVwiJytlLmhlYWRlckNsYXNzKydcIj48ZGl2IGNsYXNzPVwiJytlLnRpdGxlUm93Q2xhc3MrJ1wiPjxzcGFuIGNsYXNzPVwiJytlLmxhYmVsQ2xhc3MrJ1wiPicrZS50aXRsZSsnPC9zcGFuPjxhIGNsYXNzPVwiJytlLmNsb3NlQ2xhc3MrJ1wiPiZ0aW1lczs8L2E+PC9kaXY+PC9kaXY+J30sZSlcbnQub24oXCJpbml0aWFsaXplXCIsKCk9Pnt2YXIgZT1LKGkuaHRtbChpKSkscz1lLnF1ZXJ5U2VsZWN0b3IoXCIuXCIraS5jbG9zZUNsYXNzKVxucyYmcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixlPT57JChlLCEwKSx0LmNsb3NlKCl9KSx0LmRyb3Bkb3duLmluc2VydEJlZm9yZShlLHQuZHJvcGRvd24uZmlyc3RDaGlsZCl9KX0pLGNlLmRlZmluZShcImNhcmV0X3Bvc2l0aW9uXCIsZnVuY3Rpb24oKXt2YXIgZT10aGlzXG5lLmhvb2soXCJpbnN0ZWFkXCIsXCJzZXRDYXJldFwiLHQ9PntcInNpbmdsZVwiIT09ZS5zZXR0aW5ncy5tb2RlJiZlLmNvbnRyb2wuY29udGFpbnMoZS5jb250cm9sX2lucHV0KT8odD1NYXRoLm1heCgwLE1hdGgubWluKGUuaXRlbXMubGVuZ3RoLHQpKSk9PWUuY2FyZXRQb3N8fGUuaXNQZW5kaW5nfHxlLmNvbnRyb2xDaGlsZHJlbigpLmZvckVhY2goKGkscyk9PntzPHQ/ZS5jb250cm9sX2lucHV0Lmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWJlZ2luXCIsaSk6ZS5jb250cm9sLmFwcGVuZENoaWxkKGkpfSk6dD1lLml0ZW1zLmxlbmd0aCxlLmNhcmV0UG9zPXR9KSxlLmhvb2soXCJpbnN0ZWFkXCIsXCJtb3ZlQ2FyZXRcIix0PT57aWYoIWUuaXNGb2N1c2VkKXJldHVyblxuY29uc3QgaT1lLmdldExhc3RBY3RpdmUodClcbmlmKGkpe2NvbnN0IHM9dGUoaSlcbmUuc2V0Q2FyZXQodD4wP3MrMTpzKSxlLnNldEFjdGl2ZUl0ZW0oKSxKKGksXCJsYXN0LWFjdGl2ZVwiKX1lbHNlIGUuc2V0Q2FyZXQoZS5jYXJldFBvcyt0KX0pfSksY2UuZGVmaW5lKFwiZHJvcGRvd25faW5wdXRcIixmdW5jdGlvbigpe2NvbnN0IGU9dGhpc1xuZS5zZXR0aW5ncy5zaG91bGRPcGVuPSEwLGUuaG9vayhcImJlZm9yZVwiLFwic2V0dXBcIiwoKT0+e3ZhciB0XG5lLmZvY3VzX25vZGU9ZS5jb250cm9sLFEoZS5jb250cm9sX2lucHV0LFwiZHJvcGRvd24taW5wdXRcIilcbmNvbnN0IGk9SygnPGRpdiBjbGFzcz1cImRyb3Bkb3duLWlucHV0LXdyYXBcIj4nKVxuaS5hcHBlbmQoZS5jb250cm9sX2lucHV0KSxlLmRyb3Bkb3duLmluc2VydEJlZm9yZShpLGUuZHJvcGRvd24uZmlyc3RDaGlsZClcbmNvbnN0IHM9SygnPGlucHV0IGNsYXNzPVwiaXRlbXMtcGxhY2Vob2xkZXJcIiB0YWJpbmRleD1cIi0xXCIgLz4nKVxucy5wbGFjZWhvbGRlcj1lLnNldHRpbmdzLnBsYWNlaG9sZGVyfHxcIlwiLGUuY29udHJvbC5hcHBlbmQocylcbmNvbnN0IG49bnVsbD09KHQ9ZS5pbnB1dCk/dm9pZCAwOnQuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKVxubiYmcy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsbil9KSxlLm9uKFwiaW5pdGlhbGl6ZVwiLCgpPT57ZS5jb250cm9sX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsdD0+e3N3aXRjaCh0LmtleUNvZGUpe2Nhc2UgMjc6cmV0dXJuIGUuaXNPcGVuJiYoJCh0LCEwKSxlLmNsb3NlKCkpLHZvaWQgZS5jbGVhckFjdGl2ZUl0ZW1zKClcbmNhc2UgOTplLmZvY3VzX25vZGUudGFiSW5kZXg9LTF9cmV0dXJuIGUub25LZXlEb3duLmNhbGwoZSx0KX0pLGUub24oXCJibHVyXCIsKCk9PntlLmZvY3VzX25vZGUudGFiSW5kZXg9ZS5pc0Rpc2FibGVkPy0xOmUudGFiSW5kZXh9KSxlLm9uKFwiZHJvcGRvd25fb3BlblwiLCgpPT57ZS5jb250cm9sX2lucHV0LmZvY3VzKCl9KVxuY29uc3QgdD1lLm9uQmx1clxuZS5ob29rKFwiaW5zdGVhZFwiLFwib25CbHVyXCIsaT0+e2lmKCFpfHxpLnJlbGF0ZWRUYXJnZXQhPWUuY29udHJvbF9pbnB1dClyZXR1cm4gdC5jYWxsKGUpfSkscShlLmNvbnRyb2xfaW5wdXQsXCJibHVyXCIsKCk9PmUub25CbHVyKCkpLGUuaG9vayhcImJlZm9yZVwiLFwiY2xvc2VcIiwoKT0+e2UuaXNPcGVuJiZlLmZvY3VzX25vZGUuZm9jdXMoe3ByZXZlbnRTY3JvbGw6ITB9KX0pfSl9KSxjZS5kZWZpbmUoXCJpbnB1dF9hdXRvZ3Jvd1wiLGZ1bmN0aW9uKCl7dmFyIGU9dGhpc1xuZS5vbihcImluaXRpYWxpemVcIiwoKT0+e3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpLGk9ZS5jb250cm9sX2lucHV0XG50LnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOi05OTk5OXB4OyBsZWZ0Oi05OTk5OXB4OyB3aWR0aDphdXRvOyBwYWRkaW5nOjA7IHdoaXRlLXNwYWNlOnByZTsgXCIsZS53cmFwcGVyLmFwcGVuZENoaWxkKHQpXG5mb3IoY29uc3QgZSBvZltcImxldHRlclNwYWNpbmdcIixcImZvbnRTaXplXCIsXCJmb250RmFtaWx5XCIsXCJmb250V2VpZ2h0XCIsXCJ0ZXh0VHJhbnNmb3JtXCJdKXQuc3R5bGVbZV09aS5zdHlsZVtlXVxudmFyIHM9KCk9Pnt0LnRleHRDb250ZW50PWkudmFsdWUsaS5zdHlsZS53aWR0aD10LmNsaWVudFdpZHRoK1wicHhcIn1cbnMoKSxlLm9uKFwidXBkYXRlIGl0ZW1fYWRkIGl0ZW1fcmVtb3ZlXCIscykscShpLFwiaW5wdXRcIixzKSxxKGksXCJrZXl1cFwiLHMpLHEoaSxcImJsdXJcIixzKSxxKGksXCJ1cGRhdGVcIixzKX0pfSksY2UuZGVmaW5lKFwibm9fYmFja3NwYWNlX2RlbGV0ZVwiLGZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuZGVsZXRlU2VsZWN0aW9uXG50aGlzLmhvb2soXCJpbnN0ZWFkXCIsXCJkZWxldGVTZWxlY3Rpb25cIixpPT4hIWUuYWN0aXZlSXRlbXMubGVuZ3RoJiZ0LmNhbGwoZSxpKSl9KSxjZS5kZWZpbmUoXCJub19hY3RpdmVfaXRlbXNcIixmdW5jdGlvbigpe3RoaXMuaG9vayhcImluc3RlYWRcIixcInNldEFjdGl2ZUl0ZW1cIiwoKT0+e30pLHRoaXMuaG9vayhcImluc3RlYWRcIixcInNlbGVjdEFsbFwiLCgpPT57fSl9KSxjZS5kZWZpbmUoXCJvcHRncm91cF9jb2x1bW5zXCIsZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS5vbktleURvd25cbmUuaG9vayhcImluc3RlYWRcIixcIm9uS2V5RG93blwiLGk9Pnt2YXIgcyxuLG8sclxuaWYoIWUuaXNPcGVufHwzNyE9PWkua2V5Q29kZSYmMzkhPT1pLmtleUNvZGUpcmV0dXJuIHQuY2FsbChlLGkpXG5lLmlnbm9yZUhvdmVyPSEwLHI9WihlLmFjdGl2ZU9wdGlvbixcIltkYXRhLWdyb3VwXVwiKSxzPXRlKGUuYWN0aXZlT3B0aW9uLFwiW2RhdGEtc2VsZWN0YWJsZV1cIiksciYmKHI9Mzc9PT1pLmtleUNvZGU/ci5wcmV2aW91c1NpYmxpbmc6ci5uZXh0U2libGluZykmJihuPShvPXIucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXNlbGVjdGFibGVdXCIpKVtNYXRoLm1pbihvLmxlbmd0aC0xLHMpXSkmJmUuc2V0QWN0aXZlT3B0aW9uKG4pfSl9KSxjZS5kZWZpbmUoXCJyZW1vdmVfYnV0dG9uXCIsZnVuY3Rpb24oZSl7Y29uc3QgdD10aGlzLGk9T2JqZWN0LmFzc2lnbih7bGFiZWw6XCLDl1wiLHRpdGxlOlwiUmVtb3ZlXCIsY2xhc3NOYW1lOlwicmVtb3ZlXCIsdGFiaW5kZXg6LTEscm9sZTpcImJ1dHRvblwiLGh0bWw6ZT0+e3ZhciB0XG5jb25zdCBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbnJldHVybiBpLmNsYXNzTmFtZT1lLmNsYXNzTmFtZXx8XCJcIixpLnRpdGxlPWUudGl0bGV8fFwiXCIsaS5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsZS5yb2xlfHxcImJ1dHRvblwiKSxpLnRhYkluZGV4PW51bGwhPSh0PWUudGFiaW5kZXgpP3Q6LTEsaS50ZXh0Q29udGVudD1lLmxhYmVsfHxcIlwiLGl9fSxlKVxudC5ob29rKFwiYWZ0ZXJcIixcInNldHVwVGVtcGxhdGVzXCIsKCk9Pnt2YXIgZT10LnNldHRpbmdzLnJlbmRlci5pdGVtXG50LnNldHRpbmdzLnJlbmRlci5pdGVtPShzLG4pPT57dmFyIG89SyhlLmNhbGwodCxzLG4pKSxyPUsoaS5odG1sKGkpKVxucmV0dXJuIG8uYXBwZW5kQ2hpbGQocikscShyLFwibW91c2Vkb3duXCIsZT0+eyQoZSwhMCl9KSxxKHIsXCJjbGlja1wiLGU9Pnt0LmlzTG9ja2VkfHwoJChlLCEwKSx0LmlzTG9ja2VkfHx0LnNob3VsZERlbGV0ZShbb10sZSkmJih0LnJlbW92ZUl0ZW0obyksdC5yZWZyZXNoT3B0aW9ucyghMSksdC5pbnB1dFN0YXRlKCkpKX0pLG99fSl9KSxjZS5kZWZpbmUoXCJyZXN0b3JlX29uX2JhY2tzcGFjZVwiLGZ1bmN0aW9uKGUpe2NvbnN0IHQ9dGhpcyxpPU9iamVjdC5hc3NpZ24oe3RleHQ6ZT0+ZVt0LnNldHRpbmdzLmxhYmVsRmllbGRdfSxlKVxudC5vbihcIml0ZW1fcmVtb3ZlXCIsZnVuY3Rpb24oZSl7aWYodC5pc0ZvY3VzZWQmJlwiXCI9PT10LmNvbnRyb2xfaW5wdXQudmFsdWUudHJpbSgpKXt2YXIgcz10Lm9wdGlvbnNbZV1cbnMmJnQuc2V0VGV4dGJveFZhbHVlKGkudGV4dC5jYWxsKHQscykpfX0pfSksY2UuZGVmaW5lKFwidmlydHVhbF9zY3JvbGxcIixmdW5jdGlvbigpe2NvbnN0IGU9dGhpcyx0PWUuY2FuTG9hZCxpPWUuY2xlYXJBY3RpdmVPcHRpb24scz1lLmxvYWRDYWxsYmFja1xudmFyIG4sbyxyLGw9e30sYT0hMSxjPVtdLGQ9ITEsdT1bXSxwPVtdXG5pZihlLnNldHRpbmdzLnNob3VsZExvYWRNb3JlfHwoZS5zZXR0aW5ncy5zaG91bGRMb2FkTW9yZT0oKT0+e2lmKG4uY2xpZW50SGVpZ2h0LyhuLnNjcm9sbEhlaWdodC1uLnNjcm9sbFRvcCk+LjkpcmV0dXJuITBcbmlmKGUuYWN0aXZlT3B0aW9uKXt2YXIgdD1lLnNlbGVjdGFibGUoKVxuaWYoQXJyYXkuZnJvbSh0KS5pbmRleE9mKGUuYWN0aXZlT3B0aW9uKT49dC5sZW5ndGgtMilyZXR1cm4hMH1yZXR1cm4hMX0pLCFlLnNldHRpbmdzLmZpcnN0VXJsKXRocm93XCJ2aXJ0dWFsX3Njcm9sbCBwbHVnaW4gcmVxdWlyZXMgYSBmaXJzdFVybCgpIG1ldGhvZFwiXG5lLnNldHRpbmdzLnNvcnRGaWVsZD1be2ZpZWxkOlwiJG9yZGVyXCJ9LHtmaWVsZDpcIiRzY29yZVwifV1cbmNvbnN0IGg9dD0+IShudWxsIT09ZS5zZXR0aW5ncy5tYXhPcHRpb25zJiZcIm51bWJlclwiPT10eXBlb2YgZS5zZXR0aW5ncy5tYXhPcHRpb25zJiZuLmNoaWxkcmVuLmxlbmd0aD49ZS5zZXR0aW5ncy5tYXhPcHRpb25zKSYmISghKHQgaW4gbCl8fCFsW3RdKSxnPSh0LGkpPT5lLml0ZW1zLmluZGV4T2YoaSk+PTB8fGMuaW5kZXhPZihpKT49MFxuZS5zZXROZXh0VXJsPShlLHQpPT57bFtlXT10fSxlLmdldFVybD10PT57aWYodCBpbiBsKXtjb25zdCBlPWxbdF1cbnJldHVybiBsW3RdPSExLGV9cmV0dXJuIGUuY2xlYXJQYWdpbmF0aW9uKCksZS5zZXR0aW5ncy5maXJzdFVybC5jYWxsKGUsdCl9LGUuY2xlYXJQYWdpbmF0aW9uPSgpPT57bD17fX0sZS5ob29rKFwiaW5zdGVhZFwiLFwiY2xlYXJBY3RpdmVPcHRpb25cIiwoKT0+e2lmKCFhKXJldHVybiBpLmNhbGwoZSl9KSxlLmhvb2soXCJpbnN0ZWFkXCIsXCJjYW5Mb2FkXCIsaT0+aSBpbiBsP2goaSk6dC5jYWxsKGUsaSkpLGUuaG9vayhcImluc3RlYWRcIixcImxvYWRDYWxsYmFja1wiLCh0LGkpPT57aWYoYSl7aWYobyl7Y29uc3QgaT10WzBdXG52b2lkIDAhPT1pJiYoby5kYXRhc2V0LnZhbHVlPWlbZS5zZXR0aW5ncy52YWx1ZUZpZWxkXSl9fWVsc2V7Y29uc3QgdD1cIlwiIT09ZS5sYXN0VmFsdWU/KHQsaSk9PmUuaXRlbXMuaW5kZXhPZihpKT49MHx8cC5pbmRleE9mKGkpPj0wOmdcbmUuY2xlYXJPcHRpb25zKHQpfXMuY2FsbChlLHQsaSksYXx8ZHx8KGQ9ITAsXCJcIj09PWUubGFzdFZhbHVlJiYoYz1PYmplY3Qua2V5cyhlLm9wdGlvbnMpLHI9bFtcIlwiXSx1PU9iamVjdC52YWx1ZXMoZS5vcHRpb25zKSkpLGE9ITF9KSxlLmhvb2soXCJiZWZvcmVcIixcInJlZnJlc2hPcHRpb25zXCIsKCk9PntlLmFjdGl2ZU9wdGlvbiYmXCJvcHRpb25cIiE9PWUuYWN0aXZlT3B0aW9uLmdldEF0dHJpYnV0ZShcInJvbGVcIikmJmUuc2V0QWN0aXZlT3B0aW9uKGUuYWN0aXZlT3B0aW9uLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpfSksZS5ob29rKFwiYWZ0ZXJcIixcInJlZnJlc2hPcHRpb25zXCIsKCk9Pntjb25zdCB0PWUubGFzdFZhbHVlXG52YXIgaVxuaCh0KT8oaT1lLnJlbmRlcihcImxvYWRpbmdfbW9yZVwiLHtxdWVyeTp0fSkpJiYoaS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNlbGVjdGFibGVcIixcIlwiKSxvPWkpOnQgaW4gbCYmIW4ucXVlcnlTZWxlY3RvcihcIi5uby1yZXN1bHRzXCIpJiYoaT1lLnJlbmRlcihcIm5vX21vcmVfcmVzdWx0c1wiLHtxdWVyeTp0fSkpLGkmJihRKGksZS5zZXR0aW5ncy5vcHRpb25DbGFzcyksbi5hcHBlbmQoaSkpfSlcbmNvbnN0IGY9KCk9PntkJiYoZS5hZGRPcHRpb25zKHUpLGUuY2xlYXJPcHRpb25zKGcpLHImJihsW1wiXCJdPXIpKX1cbmUub24oXCJ0eXBlXCIsdD0+e1wiXCI9PT10JiYoZigpLGUucmVmcmVzaE9wdGlvbnMoITEpKX0pLGUub24oXCJkcm9wZG93bl9jbG9zZVwiLGYpLGUub24oXCJpbml0aWFsaXplXCIsKCk9PntwPU9iamVjdC5rZXlzKGUub3B0aW9ucyksYz1PYmplY3Qua2V5cyhlLm9wdGlvbnMpLG49ZS5kcm9wZG93bl9jb250ZW50LGUuc2V0dGluZ3MucmVuZGVyPU9iamVjdC5hc3NpZ24oe30se2xvYWRpbmdfbW9yZTooKT0+JzxkaXYgY2xhc3M9XCJsb2FkaW5nLW1vcmUtcmVzdWx0c1wiPkxvYWRpbmcgbW9yZSByZXN1bHRzIC4uLiA8L2Rpdj4nLG5vX21vcmVfcmVzdWx0czooKT0+JzxkaXYgY2xhc3M9XCJuby1tb3JlLXJlc3VsdHNcIj5ObyBtb3JlIHJlc3VsdHM8L2Rpdj4nfSxlLnNldHRpbmdzLnJlbmRlciksbi5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsKCk9PntlLnNldHRpbmdzLnNob3VsZExvYWRNb3JlLmNhbGwoZSkmJmgoZS5sYXN0VmFsdWUpJiYoYXx8KGE9ITAsZS5sb2FkLmNhbGwoZSxlLmxhc3RWYWx1ZSkpKX0pfSl9KSxjZX0pXG52YXIgdG9tU2VsZWN0PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyBUb21TZWxlY3QoZSx0KX1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRvbS1zZWxlY3QuY29tcGxldGUubWluLmpzLm1hcFxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxuY29uc3QgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRjb25zdCBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0Y29uc3QgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRsZXQgdGhyZXcgPSB0cnVlO1xuXHR0cnkge1xuXHRcdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHRcdGNvbnN0IGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH1cblx0XHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0XHR0aHJldyA9IGZhbHNlO1xuXHR9IGZpbmFsbHkge1xuXHRcdGlmKHRocmV3KSBkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0fVxuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0Y29uc3QgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIvdmFsdWUgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGlmKEFycmF5LmlzQXJyYXkoZGVmaW5pdGlvbikpIHtcblx0XHR2YXIgaSA9IDA7XG5cdFx0d2hpbGUoaSA8IGRlZmluaXRpb24ubGVuZ3RoKSB7XG5cdFx0XHR2YXIga2V5ID0gZGVmaW5pdGlvbltpKytdO1xuXHRcdFx0dmFyIGJpbmRpbmcgPSBkZWZpbml0aW9uW2krK107XG5cdFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdFx0aWYoYmluZGluZyA9PT0gMCkge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IGRlZmluaXRpb25baSsrXSB9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogYmluZGluZyB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmKGJpbmRpbmcgPT09IDApIHsgaSsrOyB9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYoU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqIEltcG9ydCBkZXBlbmRlbmNpZXMgKi9cbmltcG9ydCB7TWFwcGVyfSBmcm9tIFwiLi4vbW9kdWxlcy9tYXBwZXIvbWFwcGVyLWNsYXNzLmpzXCI7XG5cbkhUTUxXaWRnZXRzLndpZGdldCh7XG4gIG5hbWU6IFwibWFwcGVyXCIsXG4gIHR5cGU6IFwib3V0cHV0XCIsXG4gIGZhY3Rvcnk6IGZ1bmN0aW9uKGVsLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgLy8gc2hhcmVkIHZhcmlhYmxlc1xuICAgIHZhciBlbGVtZW50SWQgPSBlbC5pZDtcbiAgICB2YXIgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB2YXIgaGFuZGxlID0gbmV3IE1hcHBlcigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlbmRlclZhbHVlOiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICAgIC8vIGlmIG5lZWRlZCwgaW5pdGlhbGl6ZSB3aWRnZXRcbiAgICAgICAgaWYgKCFpbml0aWFsaXplZCkge1xuICAgICAgICAgIC8vIHNldCBzdGF0ZSB0byBpbml0aWFsaXplZFxuICAgICAgICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAvLyBhdHRhY2ggdGhlIHdpZGdldCB0byB0aGUgRE9NXG4gICAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcbiAgICAgICAgICBlbC53aWRnZXQgPSB0aGlzO1xuICAgICAgICAgIC8vIGluaXRpYWxpemUgd2lkZ2V0XG4gICAgICAgICAgaGFuZGxlLmluaXRpYWxpemUoZWwsIG9wdHMubWFwSWQsIG9wdHMucHJvamVjdCwgb3B0cy5tYXhMYXllcnMpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICByZXNpemU6IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgLy8gd2lkZ2V0IGF1dG9tYXRpY2FsbHkgcmVzaXplc1xuICAgICAgfSxcblxuICAgICAgbWFwcGVyOiBoYW5kbGUsXG5cbiAgICAgIC8qIEFQSSBmdW5jdGlvbnMgdG8gbWFuaXB1bGF0ZSB3aWRnZXQgKi9cbiAgICAgIGFkZExheWVyOiBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgICAgLy8gc3BlY2lmeSB2aXNpYmlsaXR5XG4gICAgICAgIHBhcmFtcy52YWx1ZS5sYXllci52aXNpYmxlID0gcGFyYW1zLnZpc2libGU7XG4gICAgICAgIC8vIGFkZCBsYXllciB0byB3aWRnZXRcbiAgICAgICAgaGFuZGxlLmFkZExheWVyKHBhcmFtcy52YWx1ZSk7XG4gICAgICAgIC8vIHNpbmNlIFIgY29kZSBpcyB1c2VkIHRvIHVwZGF0ZSB0aGUgbWFwLCBzbyB1cGRhdGVNYXAgPSBmYWxzZVxuICAgICAgICBoYW5kbGUuc2hvd0xheWVyT25NZW51KHBhcmFtcy52YWx1ZS5pZCwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgfSxcblxuICAgIH07XG4gIH1cbn0pO1xuXG4vLyBBdHRhY2ggbWVzc2FnZSBoYW5kbGVycyBpZiBpbiBTaGlueSBtb2RlICh0aGVzZSBjb3JyZXNwb25kIHRvIEFQSSlcbmlmIChIVE1MV2lkZ2V0cy5zaGlueU1vZGUpIHtcbiAgdmFyIGZ4bnMgPSBbXCJhZGRMYXllclwiXTtcbiAgdmFyIGFkZFNoaW55SGFuZGxlciA9IGZ1bmN0aW9uKGZ4bikge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIFNoaW55LmFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyKFxuICAgICAgICBcIm1hcHBlcjpcIiArIGZ4biwgZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1lc3NhZ2UuaWQpO1xuICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VbXCJpZFwiXTtcbiAgICAgICAgICAgIGVsLndpZGdldFtmeG5dKG1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH07XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZnhucy5sZW5ndGg7ICsraSkge1xuICAgIGFkZFNoaW55SGFuZGxlcihmeG5zW2ldKSgpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=