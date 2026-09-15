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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHdDQUF3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1GQUFtRjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLGVBQWU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLGNBQWM7QUFDMUIsWUFBWSxjQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRTtBQUNBLGdCQUFnQjtBQUNoQixzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsV0FBVztBQUN6QjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0IsZUFBZSxjQUFjO0FBQzdCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCLFlBQVksMEJBQTBCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCLFlBQVksNEJBQTRCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLG9DQUFvQztBQUNoRDtBQUNBO0FBQ0EseUVBQXlFLGFBQWE7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBLHVFQUF1RTtBQUN2RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsYUFBYTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdCQUFnQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLGtDQUFrQztBQUNsQyxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDhCQUE4QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLDJDQUEyQywwQ0FBMEM7V0FDckYsTUFBTTtXQUNOLDJDQUEyQyxnQ0FBZ0M7V0FDM0U7V0FDQSxLQUFLLHlCQUF5QjtXQUM5QjtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsMENBQTBDLHdDQUF3QztXQUNsRjtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ3RCQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ3lEOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtRUFBTTs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBzY3AvLi9ub2RlX21vZHVsZXMvdG9tLXNlbGVjdC9kaXN0L2Nzcy90b20tc2VsZWN0LmJvb3RzdHJhcDUuY3NzPzJjNDMiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy9tb2R1bGVzL21hcHBlci9jc3MvY2F0ZWdvcmljYWwtbGVnZW5kLmNzcz80ZGRiIiwid2VicGFjazovL2Fwc2NwLy4vc3JjanMvbW9kdWxlcy9tYXBwZXIvY3NzL2NvbnRpbnVvdXMtbGVnZW5kLmNzcz8yYTgyIiwid2VicGFjazovL2Fwc2NwLy4vc3JjanMvbW9kdWxlcy9tYXBwZXIvY3NzL3N0eWxlLmNzcz84YmNiIiwid2VicGFjazovL2Fwc2NwLy4vc3JjanMvbW9kdWxlcy91dGlscy9jc3Mvc3R5bGUuY3NzP2QzYTgiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9ub2RlX21vZHVsZXMvc29ydGFibGVqcy9tb2R1bGFyL3NvcnRhYmxlLmVzbS5qcyIsIndlYnBhY2s6Ly9hcHNjcC8uL3NyY2pzL21vZHVsZXMvbWFwcGVyL2NyZWF0ZS1sZWdlbmQuanMiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy9tb2R1bGVzL21hcHBlci9tYXBwZXItY2xhc3MuanMiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy9tb2R1bGVzL21hcHBlci9tYXBwZXItc2NhZmZvbGQuanMiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy9tb2R1bGVzL3V0aWxzL2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy9tb2R1bGVzL3V0aWxzL3Byb2plY3RTZWxlY3RPcHRpb25zLmpzIiwid2VicGFjazovL2Fwc2NwLy4vbm9kZV9tb2R1bGVzL3RvbS1zZWxlY3QvZGlzdC9qcy90b20tc2VsZWN0LmNvbXBsZXRlLm1pbi5qcyIsIndlYnBhY2s6Ly9hcHNjcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hcHNjcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hcHNjcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXBzY3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hcHNjcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Fwc2NwLy4vc3JjanMvd2lkZ2V0cy9tYXBwZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyoqIVxuICogU29ydGFibGUgMS4xNS43XG4gKiBAYXV0aG9yXHRSdWJhWGEgICA8dHJhc2hAcnViYXhhLm9yZz5cbiAqIEBhdXRob3JcdG93ZW5tICAgIDxvd2VuMjMzNTVAZ21haWwuY29tPlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KHIsIGEpIHtcbiAgKG51bGwgPT0gYSB8fCBhID4gci5sZW5ndGgpICYmIChhID0gci5sZW5ndGgpO1xuICBmb3IgKHZhciBlID0gMCwgbiA9IEFycmF5KGEpOyBlIDwgYTsgZSsrKSBuW2VdID0gcltlXTtcbiAgcmV0dXJuIG47XG59XG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMocikge1xuICBpZiAoQXJyYXkuaXNBcnJheShyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KHIpO1xufVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KGUsIHIsIHQpIHtcbiAgcmV0dXJuIChyID0gX3RvUHJvcGVydHlLZXkocikpIGluIGUgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwge1xuICAgIHZhbHVlOiB0LFxuICAgIGVudW1lcmFibGU6ICEwLFxuICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgd3JpdGFibGU6ICEwXG4gIH0pIDogZVtyXSA9IHQsIGU7XG59XG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgcmV0dXJuIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKG4pIHtcbiAgICBmb3IgKHZhciBlID0gMTsgZSA8IGFyZ3VtZW50cy5sZW5ndGg7IGUrKykge1xuICAgICAgdmFyIHQgPSBhcmd1bWVudHNbZV07XG4gICAgICBmb3IgKHZhciByIGluIHQpICh7fSkuaGFzT3duUHJvcGVydHkuY2FsbCh0LCByKSAmJiAobltyXSA9IHRbcl0pO1xuICAgIH1cbiAgICByZXR1cm4gbjtcbiAgfSwgX2V4dGVuZHMuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkocikge1xuICBpZiAoXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIG51bGwgIT0gcltTeW1ib2wuaXRlcmF0b3JdIHx8IG51bGwgIT0gcltcIkBAaXRlcmF0b3JcIl0pIHJldHVybiBBcnJheS5mcm9tKHIpO1xufVxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbmZ1bmN0aW9uIG93bktleXMoZSwgcikge1xuICB2YXIgdCA9IE9iamVjdC5rZXlzKGUpO1xuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBvID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtcbiAgICByICYmIChvID0gby5maWx0ZXIoZnVuY3Rpb24gKHIpIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIHIpLmVudW1lcmFibGU7XG4gICAgfSkpLCB0LnB1c2guYXBwbHkodCwgbyk7XG4gIH1cbiAgcmV0dXJuIHQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMihlKSB7XG4gIGZvciAodmFyIHIgPSAxOyByIDwgYXJndW1lbnRzLmxlbmd0aDsgcisrKSB7XG4gICAgdmFyIHQgPSBudWxsICE9IGFyZ3VtZW50c1tyXSA/IGFyZ3VtZW50c1tyXSA6IHt9O1xuICAgIHIgJSAyID8gb3duS2V5cyhPYmplY3QodCksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XG4gICAgICBfZGVmaW5lUHJvcGVydHkoZSwgciwgdFtyXSk7XG4gICAgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHQpKSA6IG93bktleXMoT2JqZWN0KHQpKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LCByKSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGU7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoZSwgdCkge1xuICBpZiAobnVsbCA9PSBlKSByZXR1cm4ge307XG4gIHZhciBvLFxuICAgIHIsXG4gICAgaSA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKGUsIHQpO1xuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBuID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtcbiAgICBmb3IgKHIgPSAwOyByIDwgbi5sZW5ndGg7IHIrKykgbyA9IG5bcl0sIC0xID09PSB0LmluZGV4T2YobykgJiYge30ucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLCBvKSAmJiAoaVtvXSA9IGVbb10pO1xuICB9XG4gIHJldHVybiBpO1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UociwgZSkge1xuICBpZiAobnVsbCA9PSByKSByZXR1cm4ge307XG4gIHZhciB0ID0ge307XG4gIGZvciAodmFyIG4gaW4gcikgaWYgKHt9Lmhhc093blByb3BlcnR5LmNhbGwociwgbikpIHtcbiAgICBpZiAoLTEgIT09IGUuaW5kZXhPZihuKSkgY29udGludWU7XG4gICAgdFtuXSA9IHJbbl07XG4gIH1cbiAgcmV0dXJuIHQ7XG59XG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkocikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKHIpIHx8IF9pdGVyYWJsZVRvQXJyYXkocikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KHIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHtcbiAgaWYgKFwib2JqZWN0XCIgIT0gdHlwZW9mIHQgfHwgIXQpIHJldHVybiB0O1xuICB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgIHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChcIm9iamVjdFwiICE9IHR5cGVvZiBpKSByZXR1cm4gaTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTtcbn1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHtcbiAgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7XG4gIHJldHVybiBcInN5bWJvbFwiID09IHR5cGVvZiBpID8gaSA6IGkgKyBcIlwiO1xufVxuZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgX3R5cGVvZihvKTtcbn1cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShyLCBhKSB7XG4gIGlmIChyKSB7XG4gICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShyLCBhKTtcbiAgICB2YXIgdCA9IHt9LnRvU3RyaW5nLmNhbGwocikuc2xpY2UoOCwgLTEpO1xuICAgIHJldHVybiBcIk9iamVjdFwiID09PSB0ICYmIHIuY29uc3RydWN0b3IgJiYgKHQgPSByLmNvbnN0cnVjdG9yLm5hbWUpLCBcIk1hcFwiID09PSB0IHx8IFwiU2V0XCIgPT09IHQgPyBBcnJheS5mcm9tKHIpIDogXCJBcmd1bWVudHNcIiA9PT0gdCB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdCh0KSA/IF9hcnJheUxpa2VUb0FycmF5KHIsIGEpIDogdm9pZCAwO1xuICB9XG59XG5cbnZhciB2ZXJzaW9uID0gXCIxLjE1LjdcIjtcblxuZnVuY3Rpb24gdXNlckFnZW50KHBhdHRlcm4pIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5uYXZpZ2F0b3IpIHtcbiAgICByZXR1cm4gISEgLypAX19QVVJFX18qL25hdmlnYXRvci51c2VyQWdlbnQubWF0Y2gocGF0dGVybik7XG4gIH1cbn1cbnZhciBJRTExT3JMZXNzID0gdXNlckFnZW50KC8oPzpUcmlkZW50LipydlsgOl0/MTFcXC58bXNpZXxpZW1vYmlsZXxXaW5kb3dzIFBob25lKS9pKTtcbnZhciBFZGdlID0gdXNlckFnZW50KC9FZGdlL2kpO1xudmFyIEZpcmVGb3ggPSB1c2VyQWdlbnQoL2ZpcmVmb3gvaSk7XG52YXIgU2FmYXJpID0gdXNlckFnZW50KC9zYWZhcmkvaSkgJiYgIXVzZXJBZ2VudCgvY2hyb21lL2kpICYmICF1c2VyQWdlbnQoL2FuZHJvaWQvaSk7XG52YXIgSU9TID0gdXNlckFnZW50KC9pUChhZHxvZHxob25lKS9pKTtcbnZhciBDaHJvbWVGb3JBbmRyb2lkID0gdXNlckFnZW50KC9jaHJvbWUvaSkgJiYgdXNlckFnZW50KC9hbmRyb2lkL2kpO1xuXG52YXIgY2FwdHVyZU1vZGUgPSB7XG4gIGNhcHR1cmU6IGZhbHNlLFxuICBwYXNzaXZlOiBmYWxzZVxufTtcbmZ1bmN0aW9uIG9uKGVsLCBldmVudCwgZm4pIHtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZm4sICFJRTExT3JMZXNzICYmIGNhcHR1cmVNb2RlKTtcbn1cbmZ1bmN0aW9uIG9mZihlbCwgZXZlbnQsIGZuKSB7XG4gIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGZuLCAhSUUxMU9yTGVzcyAmJiBjYXB0dXJlTW9kZSk7XG59XG5mdW5jdGlvbiBtYXRjaGVzKCAvKipIVE1MRWxlbWVudCovZWwsIC8qKlN0cmluZyovc2VsZWN0b3IpIHtcbiAgaWYgKCFzZWxlY3RvcikgcmV0dXJuO1xuICBzZWxlY3RvclswXSA9PT0gJz4nICYmIChzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cmluZygxKSk7XG4gIGlmIChlbCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoZWwubWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gZWwubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgICB9IGVsc2UgaWYgKGVsLm1zTWF0Y2hlc1NlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBlbC5tc01hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICB9IGVsc2UgaWYgKGVsLndlYmtpdE1hdGNoZXNTZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGdldFBhcmVudE9ySG9zdChlbCkge1xuICByZXR1cm4gZWwuaG9zdCAmJiBlbCAhPT0gZG9jdW1lbnQgJiYgZWwuaG9zdC5ub2RlVHlwZSAmJiBlbC5ob3N0ICE9PSBlbCA/IGVsLmhvc3QgOiBlbC5wYXJlbnROb2RlO1xufVxuZnVuY3Rpb24gY2xvc2VzdCggLyoqSFRNTEVsZW1lbnQqL2VsLCAvKipTdHJpbmcqL3NlbGVjdG9yLCAvKipIVE1MRWxlbWVudCovY3R4LCBpbmNsdWRlQ1RYKSB7XG4gIGlmIChlbCkge1xuICAgIGN0eCA9IGN0eCB8fCBkb2N1bWVudDtcbiAgICBkbyB7XG4gICAgICBpZiAoc2VsZWN0b3IgIT0gbnVsbCAmJiAoc2VsZWN0b3JbMF0gPT09ICc+JyA/IGVsLnBhcmVudE5vZGUgPT09IGN0eCAmJiBtYXRjaGVzKGVsLCBzZWxlY3RvcikgOiBtYXRjaGVzKGVsLCBzZWxlY3RvcikpIHx8IGluY2x1ZGVDVFggJiYgZWwgPT09IGN0eCkge1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgICBpZiAoZWwgPT09IGN0eCkgYnJlYWs7XG4gICAgICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG4gICAgfSB3aGlsZSAoZWwgPSBnZXRQYXJlbnRPckhvc3QoZWwpKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbnZhciBSX1NQQUNFID0gL1xccysvZztcbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsLCBuYW1lLCBzdGF0ZSkge1xuICBpZiAoZWwgJiYgbmFtZSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgIGVsLmNsYXNzTGlzdFtzdGF0ZSA/ICdhZGQnIDogJ3JlbW92ZSddKG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gKCcgJyArIGVsLmNsYXNzTmFtZSArICcgJykucmVwbGFjZShSX1NQQUNFLCAnICcpLnJlcGxhY2UoJyAnICsgbmFtZSArICcgJywgJyAnKTtcbiAgICAgIGVsLmNsYXNzTmFtZSA9IChjbGFzc05hbWUgKyAoc3RhdGUgPyAnICcgKyBuYW1lIDogJycpKS5yZXBsYWNlKFJfU1BBQ0UsICcgJyk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBjc3MoZWwsIHByb3AsIHZhbCkge1xuICB2YXIgc3R5bGUgPSBlbCAmJiBlbC5zdHlsZTtcbiAgaWYgKHN0eWxlKSB7XG4gICAgaWYgKHZhbCA9PT0gdm9pZCAwKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuZGVmYXVsdFZpZXcgJiYgZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuICAgICAgICB2YWwgPSBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGVsLCAnJyk7XG4gICAgICB9IGVsc2UgaWYgKGVsLmN1cnJlbnRTdHlsZSkge1xuICAgICAgICB2YWwgPSBlbC5jdXJyZW50U3R5bGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvcCA9PT0gdm9pZCAwID8gdmFsIDogdmFsW3Byb3BdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIShwcm9wIGluIHN0eWxlKSAmJiBwcm9wLmluZGV4T2YoJ3dlYmtpdCcpID09PSAtMSkge1xuICAgICAgICBwcm9wID0gJy13ZWJraXQtJyArIHByb3A7XG4gICAgICB9XG4gICAgICBzdHlsZVtwcm9wXSA9IHZhbCArICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/ICcnIDogJ3B4Jyk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBtYXRyaXgoZWwsIHNlbGZPbmx5KSB7XG4gIHZhciBhcHBsaWVkVHJhbnNmb3JtcyA9ICcnO1xuICBpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJykge1xuICAgIGFwcGxpZWRUcmFuc2Zvcm1zID0gZWw7XG4gIH0gZWxzZSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRyYW5zZm9ybSA9IGNzcyhlbCwgJ3RyYW5zZm9ybScpO1xuICAgICAgaWYgKHRyYW5zZm9ybSAmJiB0cmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgICAgICBhcHBsaWVkVHJhbnNmb3JtcyA9IHRyYW5zZm9ybSArICcgJyArIGFwcGxpZWRUcmFuc2Zvcm1zO1xuICAgICAgfVxuICAgICAgLyoganNoaW50IGJvc3M6dHJ1ZSAqL1xuICAgIH0gd2hpbGUgKCFzZWxmT25seSAmJiAoZWwgPSBlbC5wYXJlbnROb2RlKSk7XG4gIH1cbiAgdmFyIG1hdHJpeEZuID0gd2luZG93LkRPTU1hdHJpeCB8fCB3aW5kb3cuV2ViS2l0Q1NTTWF0cml4IHx8IHdpbmRvdy5DU1NNYXRyaXggfHwgd2luZG93Lk1TQ1NTTWF0cml4O1xuICAvKmpzaGludCAtVzA1NiAqL1xuICByZXR1cm4gbWF0cml4Rm4gJiYgbmV3IG1hdHJpeEZuKGFwcGxpZWRUcmFuc2Zvcm1zKTtcbn1cbmZ1bmN0aW9uIGZpbmQoY3R4LCB0YWdOYW1lLCBpdGVyYXRvcikge1xuICBpZiAoY3R4KSB7XG4gICAgdmFyIGxpc3QgPSBjdHguZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnTmFtZSksXG4gICAgICBpID0gMCxcbiAgICAgIG4gPSBsaXN0Lmxlbmd0aDtcbiAgICBpZiAoaXRlcmF0b3IpIHtcbiAgICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIGl0ZXJhdG9yKGxpc3RbaV0sIGkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGlzdDtcbiAgfVxuICByZXR1cm4gW107XG59XG5mdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCkge1xuICB2YXIgc2Nyb2xsaW5nRWxlbWVudCA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQ7XG4gIGlmIChzY3JvbGxpbmdFbGVtZW50KSB7XG4gICAgcmV0dXJuIHNjcm9sbGluZ0VsZW1lbnQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxufVxuXG4vKipcclxuICogUmV0dXJucyB0aGUgXCJib3VuZGluZyBjbGllbnQgcmVjdFwiIG9mIGdpdmVuIGVsZW1lbnRcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsICAgICAgICAgICAgICAgICAgICAgICBUaGUgZWxlbWVudCB3aG9zZSBib3VuZGluZ0NsaWVudFJlY3QgaXMgd2FudGVkXHJcbiAqIEBwYXJhbSAge1tCb29sZWFuXX0gcmVsYXRpdmVUb0NvbnRhaW5pbmdCbG9jayAgV2hldGhlciB0aGUgcmVjdCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGNvbnRhaW5pbmcgYmxvY2sgb2YgKGluY2x1ZGluZykgdGhlIGNvbnRhaW5lclxyXG4gKiBAcGFyYW0gIHtbQm9vbGVhbl19IHJlbGF0aXZlVG9Ob25TdGF0aWNQYXJlbnQgIFdoZXRoZXIgdGhlIHJlY3Qgc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSByZWxhdGl2ZSBwYXJlbnQgb2YgKGluY2x1ZGluZykgdGhlIGNvbnRhaWVuclxyXG4gKiBAcGFyYW0gIHtbQm9vbGVhbl19IHVuZG9TY2FsZSAgICAgICAgICAgICAgICAgIFdoZXRoZXIgdGhlIGNvbnRhaW5lcidzIHNjYWxlKCkgc2hvdWxkIGJlIHVuZG9uZVxyXG4gKiBAcGFyYW0gIHtbSFRNTEVsZW1lbnRdfSBjb250YWluZXIgICAgICAgICAgICAgIFRoZSBwYXJlbnQgdGhlIGVsZW1lbnQgd2lsbCBiZSBwbGFjZWQgaW5cclxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgYm91bmRpbmdDbGllbnRSZWN0IG9mIGVsLCB3aXRoIHNwZWNpZmllZCBhZGp1c3RtZW50c1xyXG4gKi9cbmZ1bmN0aW9uIGdldFJlY3QoZWwsIHJlbGF0aXZlVG9Db250YWluaW5nQmxvY2ssIHJlbGF0aXZlVG9Ob25TdGF0aWNQYXJlbnQsIHVuZG9TY2FsZSwgY29udGFpbmVyKSB7XG4gIGlmICghZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICYmIGVsICE9PSB3aW5kb3cpIHJldHVybjtcbiAgdmFyIGVsUmVjdCwgdG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0LCBoZWlnaHQsIHdpZHRoO1xuICBpZiAoZWwgIT09IHdpbmRvdyAmJiBlbC5wYXJlbnROb2RlICYmIGVsICE9PSBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCkpIHtcbiAgICBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0b3AgPSBlbFJlY3QudG9wO1xuICAgIGxlZnQgPSBlbFJlY3QubGVmdDtcbiAgICBib3R0b20gPSBlbFJlY3QuYm90dG9tO1xuICAgIHJpZ2h0ID0gZWxSZWN0LnJpZ2h0O1xuICAgIGhlaWdodCA9IGVsUmVjdC5oZWlnaHQ7XG4gICAgd2lkdGggPSBlbFJlY3Qud2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgdG9wID0gMDtcbiAgICBsZWZ0ID0gMDtcbiAgICBib3R0b20gPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgcmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgfVxuICBpZiAoKHJlbGF0aXZlVG9Db250YWluaW5nQmxvY2sgfHwgcmVsYXRpdmVUb05vblN0YXRpY1BhcmVudCkgJiYgZWwgIT09IHdpbmRvdykge1xuICAgIC8vIEFkanVzdCBmb3IgdHJhbnNsYXRlKClcbiAgICBjb250YWluZXIgPSBjb250YWluZXIgfHwgZWwucGFyZW50Tm9kZTtcblxuICAgIC8vIHNvbHZlcyAjMTEyMyAoc2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzc5NTM4MDYvNjA4ODMxMilcbiAgICAvLyBOb3QgbmVlZGVkIG9uIDw9IElFMTFcbiAgICBpZiAoIUlFMTFPckxlc3MpIHtcbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKGNvbnRhaW5lciAmJiBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICYmIChjc3MoY29udGFpbmVyLCAndHJhbnNmb3JtJykgIT09ICdub25lJyB8fCByZWxhdGl2ZVRvTm9uU3RhdGljUGFyZW50ICYmIGNzcyhjb250YWluZXIsICdwb3NpdGlvbicpICE9PSAnc3RhdGljJykpIHtcbiAgICAgICAgICB2YXIgY29udGFpbmVyUmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgIC8vIFNldCByZWxhdGl2ZSB0byBlZGdlcyBvZiBwYWRkaW5nIGJveCBvZiBjb250YWluZXJcbiAgICAgICAgICB0b3AgLT0gY29udGFpbmVyUmVjdC50b3AgKyBwYXJzZUludChjc3MoY29udGFpbmVyLCAnYm9yZGVyLXRvcC13aWR0aCcpKTtcbiAgICAgICAgICBsZWZ0IC09IGNvbnRhaW5lclJlY3QubGVmdCArIHBhcnNlSW50KGNzcyhjb250YWluZXIsICdib3JkZXItbGVmdC13aWR0aCcpKTtcbiAgICAgICAgICBib3R0b20gPSB0b3AgKyBlbFJlY3QuaGVpZ2h0O1xuICAgICAgICAgIHJpZ2h0ID0gbGVmdCArIGVsUmVjdC53aWR0aDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG4gICAgICB9IHdoaWxlIChjb250YWluZXIgPSBjb250YWluZXIucGFyZW50Tm9kZSk7XG4gICAgfVxuICB9XG4gIGlmICh1bmRvU2NhbGUgJiYgZWwgIT09IHdpbmRvdykge1xuICAgIC8vIEFkanVzdCBmb3Igc2NhbGUoKVxuICAgIHZhciBlbE1hdHJpeCA9IG1hdHJpeChjb250YWluZXIgfHwgZWwpLFxuICAgICAgc2NhbGVYID0gZWxNYXRyaXggJiYgZWxNYXRyaXguYSxcbiAgICAgIHNjYWxlWSA9IGVsTWF0cml4ICYmIGVsTWF0cml4LmQ7XG4gICAgaWYgKGVsTWF0cml4KSB7XG4gICAgICB0b3AgLz0gc2NhbGVZO1xuICAgICAgbGVmdCAvPSBzY2FsZVg7XG4gICAgICB3aWR0aCAvPSBzY2FsZVg7XG4gICAgICBoZWlnaHQgLz0gc2NhbGVZO1xuICAgICAgYm90dG9tID0gdG9wICsgaGVpZ2h0O1xuICAgICAgcmlnaHQgPSBsZWZ0ICsgd2lkdGg7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgdG9wOiB0b3AsXG4gICAgbGVmdDogbGVmdCxcbiAgICBib3R0b206IGJvdHRvbSxcbiAgICByaWdodDogcmlnaHQsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0XG4gIH07XG59XG5cbi8qKlxyXG4gKiBDaGVja3MgaWYgYSBzaWRlIG9mIGFuIGVsZW1lbnQgaXMgc2Nyb2xsZWQgcGFzdCBhIHNpZGUgb2YgaXRzIHBhcmVudHNcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9ICBlbCAgICAgICAgICAgVGhlIGVsZW1lbnQgd2hvJ3Mgc2lkZSBiZWluZyBzY3JvbGxlZCBvdXQgb2YgdmlldyBpcyBpbiBxdWVzdGlvblxyXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgIGVsU2lkZSAgICAgICBTaWRlIG9mIHRoZSBlbGVtZW50IGluIHF1ZXN0aW9uICgndG9wJywgJ2xlZnQnLCAncmlnaHQnLCAnYm90dG9tJylcclxuICogQHBhcmFtICB7U3RyaW5nfSAgICAgICBwYXJlbnRTaWRlICAgU2lkZSBvZiB0aGUgcGFyZW50IGluIHF1ZXN0aW9uICgndG9wJywgJ2xlZnQnLCAncmlnaHQnLCAnYm90dG9tJylcclxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9ICAgICAgICAgICAgICAgVGhlIHBhcmVudCBzY3JvbGwgZWxlbWVudCB0aGF0IHRoZSBlbCdzIHNpZGUgaXMgc2Nyb2xsZWQgcGFzdCwgb3IgbnVsbCBpZiB0aGVyZSBpcyBubyBzdWNoIGVsZW1lbnRcclxuICovXG5mdW5jdGlvbiBpc1Njcm9sbGVkUGFzdChlbCwgZWxTaWRlLCBwYXJlbnRTaWRlKSB7XG4gIHZhciBwYXJlbnQgPSBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChlbCwgdHJ1ZSksXG4gICAgZWxTaWRlVmFsID0gZ2V0UmVjdChlbClbZWxTaWRlXTtcblxuICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG4gIHdoaWxlIChwYXJlbnQpIHtcbiAgICB2YXIgcGFyZW50U2lkZVZhbCA9IGdldFJlY3QocGFyZW50KVtwYXJlbnRTaWRlXSxcbiAgICAgIHZpc2libGUgPSB2b2lkIDA7XG4gICAgaWYgKHBhcmVudFNpZGUgPT09ICd0b3AnIHx8IHBhcmVudFNpZGUgPT09ICdsZWZ0Jykge1xuICAgICAgdmlzaWJsZSA9IGVsU2lkZVZhbCA+PSBwYXJlbnRTaWRlVmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aXNpYmxlID0gZWxTaWRlVmFsIDw9IHBhcmVudFNpZGVWYWw7XG4gICAgfVxuICAgIGlmICghdmlzaWJsZSkgcmV0dXJuIHBhcmVudDtcbiAgICBpZiAocGFyZW50ID09PSBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCkpIGJyZWFrO1xuICAgIHBhcmVudCA9IGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KHBhcmVudCwgZmFsc2UpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXHJcbiAqIEdldHMgbnRoIGNoaWxkIG9mIGVsLCBpZ25vcmluZyBoaWRkZW4gY2hpbGRyZW4sIHNvcnRhYmxlJ3MgZWxlbWVudHMgKGRvZXMgbm90IGlnbm9yZSBjbG9uZSBpZiBpdCdzIHZpc2libGUpXHJcbiAqIGFuZCBub24tZHJhZ2dhYmxlIGVsZW1lbnRzXHJcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbCAgICAgICBUaGUgcGFyZW50IGVsZW1lbnRcclxuICogQHBhcmFtICB7TnVtYmVyfSBjaGlsZE51bSAgICAgIFRoZSBpbmRleCBvZiB0aGUgY2hpbGRcclxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zICAgICAgIFBhcmVudCBTb3J0YWJsZSdzIG9wdGlvbnNcclxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9ICAgICAgICAgIFRoZSBjaGlsZCBhdCBpbmRleCBjaGlsZE51bSwgb3IgbnVsbCBpZiBub3QgZm91bmRcclxuICovXG5mdW5jdGlvbiBnZXRDaGlsZChlbCwgY2hpbGROdW0sIG9wdGlvbnMsIGluY2x1ZGVEcmFnRWwpIHtcbiAgdmFyIGN1cnJlbnRDaGlsZCA9IDAsXG4gICAgaSA9IDAsXG4gICAgY2hpbGRyZW4gPSBlbC5jaGlsZHJlbjtcbiAgd2hpbGUgKGkgPCBjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICBpZiAoY2hpbGRyZW5baV0uc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnICYmIGNoaWxkcmVuW2ldICE9PSBTb3J0YWJsZS5naG9zdCAmJiAoaW5jbHVkZURyYWdFbCB8fCBjaGlsZHJlbltpXSAhPT0gU29ydGFibGUuZHJhZ2dlZCkgJiYgY2xvc2VzdChjaGlsZHJlbltpXSwgb3B0aW9ucy5kcmFnZ2FibGUsIGVsLCBmYWxzZSkpIHtcbiAgICAgIGlmIChjdXJyZW50Q2hpbGQgPT09IGNoaWxkTnVtKSB7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbltpXTtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnRDaGlsZCsrO1xuICAgIH1cbiAgICBpKys7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxyXG4gKiBHZXRzIHRoZSBsYXN0IGNoaWxkIGluIHRoZSBlbCwgaWdub3JpbmcgZ2hvc3RFbCBvciBpbnZpc2libGUgZWxlbWVudHMgKGNsb25lcylcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsICAgICAgIFBhcmVudCBlbGVtZW50XHJcbiAqIEBwYXJhbSAge3NlbGVjdG9yfSBzZWxlY3RvciAgICBBbnkgb3RoZXIgZWxlbWVudHMgdGhhdCBzaG91bGQgYmUgaWdub3JlZFxyXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gICAgICAgICAgVGhlIGxhc3QgY2hpbGQsIGlnbm9yaW5nIGdob3N0RWxcclxuICovXG5mdW5jdGlvbiBsYXN0Q2hpbGQoZWwsIHNlbGVjdG9yKSB7XG4gIHZhciBsYXN0ID0gZWwubGFzdEVsZW1lbnRDaGlsZDtcbiAgd2hpbGUgKGxhc3QgJiYgKGxhc3QgPT09IFNvcnRhYmxlLmdob3N0IHx8IGNzcyhsYXN0LCAnZGlzcGxheScpID09PSAnbm9uZScgfHwgc2VsZWN0b3IgJiYgIW1hdGNoZXMobGFzdCwgc2VsZWN0b3IpKSkge1xuICAgIGxhc3QgPSBsYXN0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gIH1cbiAgcmV0dXJuIGxhc3QgfHwgbnVsbDtcbn1cblxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGluZGV4IG9mIGFuIGVsZW1lbnQgd2l0aGluIGl0cyBwYXJlbnQgZm9yIGEgc2VsZWN0ZWQgc2V0IG9mXHJcbiAqIGVsZW1lbnRzXHJcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbFxyXG4gKiBAcGFyYW0gIHtzZWxlY3Rvcn0gc2VsZWN0b3JcclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cbmZ1bmN0aW9uIGluZGV4KGVsLCBzZWxlY3Rvcikge1xuICB2YXIgaW5kZXggPSAwO1xuICBpZiAoIWVsIHx8ICFlbC5wYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgLyoganNoaW50IGJvc3M6dHJ1ZSAqL1xuICB3aGlsZSAoZWwgPSBlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XG4gICAgaWYgKGVsLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgIT09ICdURU1QTEFURScgJiYgZWwgIT09IFNvcnRhYmxlLmNsb25lICYmICghc2VsZWN0b3IgfHwgbWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSkge1xuICAgICAgaW5kZXgrKztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGluZGV4O1xufVxuXG4vKipcclxuICogUmV0dXJucyB0aGUgc2Nyb2xsIG9mZnNldCBvZiB0aGUgZ2l2ZW4gZWxlbWVudCwgYWRkZWQgd2l0aCBhbGwgdGhlIHNjcm9sbCBvZmZzZXRzIG9mIHBhcmVudCBlbGVtZW50cy5cclxuICogVGhlIHZhbHVlIGlzIHJldHVybmVkIGluIHJlYWwgcGl4ZWxzLlxyXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWxcclxuICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgICAgIE9mZnNldHMgaW4gdGhlIGZvcm1hdCBvZiBbbGVmdCwgdG9wXVxyXG4gKi9cbmZ1bmN0aW9uIGdldFJlbGF0aXZlU2Nyb2xsT2Zmc2V0KGVsKSB7XG4gIHZhciBvZmZzZXRMZWZ0ID0gMCxcbiAgICBvZmZzZXRUb3AgPSAwLFxuICAgIHdpblNjcm9sbGVyID0gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpO1xuICBpZiAoZWwpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgZWxNYXRyaXggPSBtYXRyaXgoZWwpLFxuICAgICAgICBzY2FsZVggPSBlbE1hdHJpeC5hLFxuICAgICAgICBzY2FsZVkgPSBlbE1hdHJpeC5kO1xuICAgICAgb2Zmc2V0TGVmdCArPSBlbC5zY3JvbGxMZWZ0ICogc2NhbGVYO1xuICAgICAgb2Zmc2V0VG9wICs9IGVsLnNjcm9sbFRvcCAqIHNjYWxlWTtcbiAgICB9IHdoaWxlIChlbCAhPT0gd2luU2Nyb2xsZXIgJiYgKGVsID0gZWwucGFyZW50Tm9kZSkpO1xuICB9XG4gIHJldHVybiBbb2Zmc2V0TGVmdCwgb2Zmc2V0VG9wXTtcbn1cblxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBvYmplY3Qgd2l0aGluIHRoZSBnaXZlbiBhcnJheVxyXG4gKiBAcGFyYW0gIHtBcnJheX0gYXJyICAgQXJyYXkgdGhhdCBtYXkgb3IgbWF5IG5vdCBob2xkIHRoZSBvYmplY3RcclxuICogQHBhcmFtICB7T2JqZWN0fSBvYmogIEFuIG9iamVjdCB0aGF0IGhhcyBhIGtleS12YWx1ZSBwYWlyIHVuaXF1ZSB0byBhbmQgaWRlbnRpY2FsIHRvIGEga2V5LXZhbHVlIHBhaXIgaW4gdGhlIG9iamVjdCB5b3Ugd2FudCB0byBmaW5kXHJcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICBUaGUgaW5kZXggb2YgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXksIG9yIC0xXHJcbiAqL1xuZnVuY3Rpb24gaW5kZXhPZk9iamVjdChhcnIsIG9iaikge1xuICBmb3IgKHZhciBpIGluIGFycikge1xuICAgIGlmICghYXJyLmhhc093blByb3BlcnR5KGkpKSBjb250aW51ZTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkgJiYgb2JqW2tleV0gPT09IGFycltpXVtrZXldKSByZXR1cm4gTnVtYmVyKGkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5mdW5jdGlvbiBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChlbCwgaW5jbHVkZVNlbGYpIHtcbiAgLy8gc2tpcCB0byB3aW5kb3dcbiAgaWYgKCFlbCB8fCAhZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSByZXR1cm4gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpO1xuICB2YXIgZWxlbSA9IGVsO1xuICB2YXIgZ290U2VsZiA9IGZhbHNlO1xuICBkbyB7XG4gICAgLy8gd2UgZG9uJ3QgbmVlZCB0byBnZXQgZWxlbSBjc3MgaWYgaXQgaXNuJ3QgZXZlbiBvdmVyZmxvd2luZyBpbiB0aGUgZmlyc3QgcGxhY2UgKHBlcmZvcm1hbmNlKVxuICAgIGlmIChlbGVtLmNsaWVudFdpZHRoIDwgZWxlbS5zY3JvbGxXaWR0aCB8fCBlbGVtLmNsaWVudEhlaWdodCA8IGVsZW0uc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICB2YXIgZWxlbUNTUyA9IGNzcyhlbGVtKTtcbiAgICAgIGlmIChlbGVtLmNsaWVudFdpZHRoIDwgZWxlbS5zY3JvbGxXaWR0aCAmJiAoZWxlbUNTUy5vdmVyZmxvd1ggPT0gJ2F1dG8nIHx8IGVsZW1DU1Mub3ZlcmZsb3dYID09ICdzY3JvbGwnKSB8fCBlbGVtLmNsaWVudEhlaWdodCA8IGVsZW0uc2Nyb2xsSGVpZ2h0ICYmIChlbGVtQ1NTLm92ZXJmbG93WSA9PSAnYXV0bycgfHwgZWxlbUNTUy5vdmVyZmxvd1kgPT0gJ3Njcm9sbCcpKSB7XG4gICAgICAgIGlmICghZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgfHwgZWxlbSA9PT0gZG9jdW1lbnQuYm9keSkgcmV0dXJuIGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKTtcbiAgICAgICAgaWYgKGdvdFNlbGYgfHwgaW5jbHVkZVNlbGYpIHJldHVybiBlbGVtO1xuICAgICAgICBnb3RTZWxmID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoganNoaW50IGJvc3M6dHJ1ZSAqL1xuICB9IHdoaWxlIChlbGVtID0gZWxlbS5wYXJlbnROb2RlKTtcbiAgcmV0dXJuIGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKTtcbn1cbmZ1bmN0aW9uIGV4dGVuZChkc3QsIHNyYykge1xuICBpZiAoZHN0ICYmIHNyYykge1xuICAgIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBkc3Rba2V5XSA9IHNyY1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZHN0O1xufVxuZnVuY3Rpb24gaXNSZWN0RXF1YWwocmVjdDEsIHJlY3QyKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKHJlY3QxLnRvcCkgPT09IE1hdGgucm91bmQocmVjdDIudG9wKSAmJiBNYXRoLnJvdW5kKHJlY3QxLmxlZnQpID09PSBNYXRoLnJvdW5kKHJlY3QyLmxlZnQpICYmIE1hdGgucm91bmQocmVjdDEuaGVpZ2h0KSA9PT0gTWF0aC5yb3VuZChyZWN0Mi5oZWlnaHQpICYmIE1hdGgucm91bmQocmVjdDEud2lkdGgpID09PSBNYXRoLnJvdW5kKHJlY3QyLndpZHRoKTtcbn1cbnZhciBfdGhyb3R0bGVUaW1lb3V0O1xuZnVuY3Rpb24gdGhyb3R0bGUoY2FsbGJhY2ssIG1zKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFfdGhyb3R0bGVUaW1lb3V0KSB7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgX3RoaXMgPSB0aGlzO1xuICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwoX3RoaXMsIGFyZ3NbMF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2suYXBwbHkoX3RoaXMsIGFyZ3MpO1xuICAgICAgfVxuICAgICAgX3Rocm90dGxlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhyb3R0bGVUaW1lb3V0ID0gdm9pZCAwO1xuICAgICAgfSwgbXMpO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGNhbmNlbFRocm90dGxlKCkge1xuICBjbGVhclRpbWVvdXQoX3Rocm90dGxlVGltZW91dCk7XG4gIF90aHJvdHRsZVRpbWVvdXQgPSB2b2lkIDA7XG59XG5mdW5jdGlvbiBzY3JvbGxCeShlbCwgeCwgeSkge1xuICBlbC5zY3JvbGxMZWZ0ICs9IHg7XG4gIGVsLnNjcm9sbFRvcCArPSB5O1xufVxuZnVuY3Rpb24gY2xvbmUoZWwpIHtcbiAgdmFyIFBvbHltZXIgPSB3aW5kb3cuUG9seW1lcjtcbiAgdmFyICQgPSB3aW5kb3cualF1ZXJ5IHx8IHdpbmRvdy5aZXB0bztcbiAgaWYgKFBvbHltZXIgJiYgUG9seW1lci5kb20pIHtcbiAgICByZXR1cm4gUG9seW1lci5kb20oZWwpLmNsb25lTm9kZSh0cnVlKTtcbiAgfSBlbHNlIGlmICgkKSB7XG4gICAgcmV0dXJuICQoZWwpLmNsb25lKHRydWUpWzBdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlbC5jbG9uZU5vZGUodHJ1ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHNldFJlY3QoZWwsIHJlY3QpIHtcbiAgY3NzKGVsLCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgY3NzKGVsLCAndG9wJywgcmVjdC50b3ApO1xuICBjc3MoZWwsICdsZWZ0JywgcmVjdC5sZWZ0KTtcbiAgY3NzKGVsLCAnd2lkdGgnLCByZWN0LndpZHRoKTtcbiAgY3NzKGVsLCAnaGVpZ2h0JywgcmVjdC5oZWlnaHQpO1xufVxuZnVuY3Rpb24gdW5zZXRSZWN0KGVsKSB7XG4gIGNzcyhlbCwgJ3Bvc2l0aW9uJywgJycpO1xuICBjc3MoZWwsICd0b3AnLCAnJyk7XG4gIGNzcyhlbCwgJ2xlZnQnLCAnJyk7XG4gIGNzcyhlbCwgJ3dpZHRoJywgJycpO1xuICBjc3MoZWwsICdoZWlnaHQnLCAnJyk7XG59XG5mdW5jdGlvbiBnZXRDaGlsZENvbnRhaW5pbmdSZWN0RnJvbUVsZW1lbnQoY29udGFpbmVyLCBvcHRpb25zLCBnaG9zdEVsKSB7XG4gIHZhciByZWN0ID0ge307XG4gIEFycmF5LmZyb20oY29udGFpbmVyLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHZhciBfcmVjdCRsZWZ0LCBfcmVjdCR0b3AsIF9yZWN0JHJpZ2h0LCBfcmVjdCRib3R0b207XG4gICAgaWYgKCFjbG9zZXN0KGNoaWxkLCBvcHRpb25zLmRyYWdnYWJsZSwgY29udGFpbmVyLCBmYWxzZSkgfHwgY2hpbGQuYW5pbWF0ZWQgfHwgY2hpbGQgPT09IGdob3N0RWwpIHJldHVybjtcbiAgICB2YXIgY2hpbGRSZWN0ID0gZ2V0UmVjdChjaGlsZCk7XG4gICAgcmVjdC5sZWZ0ID0gTWF0aC5taW4oKF9yZWN0JGxlZnQgPSByZWN0LmxlZnQpICE9PSBudWxsICYmIF9yZWN0JGxlZnQgIT09IHZvaWQgMCA/IF9yZWN0JGxlZnQgOiBJbmZpbml0eSwgY2hpbGRSZWN0LmxlZnQpO1xuICAgIHJlY3QudG9wID0gTWF0aC5taW4oKF9yZWN0JHRvcCA9IHJlY3QudG9wKSAhPT0gbnVsbCAmJiBfcmVjdCR0b3AgIT09IHZvaWQgMCA/IF9yZWN0JHRvcCA6IEluZmluaXR5LCBjaGlsZFJlY3QudG9wKTtcbiAgICByZWN0LnJpZ2h0ID0gTWF0aC5tYXgoKF9yZWN0JHJpZ2h0ID0gcmVjdC5yaWdodCkgIT09IG51bGwgJiYgX3JlY3QkcmlnaHQgIT09IHZvaWQgMCA/IF9yZWN0JHJpZ2h0IDogLUluZmluaXR5LCBjaGlsZFJlY3QucmlnaHQpO1xuICAgIHJlY3QuYm90dG9tID0gTWF0aC5tYXgoKF9yZWN0JGJvdHRvbSA9IHJlY3QuYm90dG9tKSAhPT0gbnVsbCAmJiBfcmVjdCRib3R0b20gIT09IHZvaWQgMCA/IF9yZWN0JGJvdHRvbSA6IC1JbmZpbml0eSwgY2hpbGRSZWN0LmJvdHRvbSk7XG4gIH0pO1xuICByZWN0LndpZHRoID0gcmVjdC5yaWdodCAtIHJlY3QubGVmdDtcbiAgcmVjdC5oZWlnaHQgPSByZWN0LmJvdHRvbSAtIHJlY3QudG9wO1xuICByZWN0LnggPSByZWN0LmxlZnQ7XG4gIHJlY3QueSA9IHJlY3QudG9wO1xuICByZXR1cm4gcmVjdDtcbn1cbnZhciBleHBhbmRvID0gJ1NvcnRhYmxlJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG5mdW5jdGlvbiBBbmltYXRpb25TdGF0ZU1hbmFnZXIoKSB7XG4gIHZhciBhbmltYXRpb25TdGF0ZXMgPSBbXSxcbiAgICBhbmltYXRpb25DYWxsYmFja0lkO1xuICByZXR1cm4ge1xuICAgIGNhcHR1cmVBbmltYXRpb25TdGF0ZTogZnVuY3Rpb24gY2FwdHVyZUFuaW1hdGlvblN0YXRlKCkge1xuICAgICAgYW5pbWF0aW9uU3RhdGVzID0gW107XG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5hbmltYXRpb24pIHJldHVybjtcbiAgICAgIHZhciBjaGlsZHJlbiA9IFtdLnNsaWNlLmNhbGwodGhpcy5lbC5jaGlsZHJlbik7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoY3NzKGNoaWxkLCAnZGlzcGxheScpID09PSAnbm9uZScgfHwgY2hpbGQgPT09IFNvcnRhYmxlLmdob3N0KSByZXR1cm47XG4gICAgICAgIGFuaW1hdGlvblN0YXRlcy5wdXNoKHtcbiAgICAgICAgICB0YXJnZXQ6IGNoaWxkLFxuICAgICAgICAgIHJlY3Q6IGdldFJlY3QoY2hpbGQpXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgZnJvbVJlY3QgPSBfb2JqZWN0U3ByZWFkMih7fSwgYW5pbWF0aW9uU3RhdGVzW2FuaW1hdGlvblN0YXRlcy5sZW5ndGggLSAxXS5yZWN0KTtcblxuICAgICAgICAvLyBJZiBhbmltYXRpbmc6IGNvbXBlbnNhdGUgZm9yIGN1cnJlbnQgYW5pbWF0aW9uXG4gICAgICAgIGlmIChjaGlsZC50aGlzQW5pbWF0aW9uRHVyYXRpb24pIHtcbiAgICAgICAgICB2YXIgY2hpbGRNYXRyaXggPSBtYXRyaXgoY2hpbGQsIHRydWUpO1xuICAgICAgICAgIGlmIChjaGlsZE1hdHJpeCkge1xuICAgICAgICAgICAgZnJvbVJlY3QudG9wIC09IGNoaWxkTWF0cml4LmY7XG4gICAgICAgICAgICBmcm9tUmVjdC5sZWZ0IC09IGNoaWxkTWF0cml4LmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNoaWxkLmZyb21SZWN0ID0gZnJvbVJlY3Q7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGFkZEFuaW1hdGlvblN0YXRlOiBmdW5jdGlvbiBhZGRBbmltYXRpb25TdGF0ZShzdGF0ZSkge1xuICAgICAgYW5pbWF0aW9uU3RhdGVzLnB1c2goc3RhdGUpO1xuICAgIH0sXG4gICAgcmVtb3ZlQW5pbWF0aW9uU3RhdGU6IGZ1bmN0aW9uIHJlbW92ZUFuaW1hdGlvblN0YXRlKHRhcmdldCkge1xuICAgICAgYW5pbWF0aW9uU3RhdGVzLnNwbGljZShpbmRleE9mT2JqZWN0KGFuaW1hdGlvblN0YXRlcywge1xuICAgICAgICB0YXJnZXQ6IHRhcmdldFxuICAgICAgfSksIDEpO1xuICAgIH0sXG4gICAgYW5pbWF0ZUFsbDogZnVuY3Rpb24gYW5pbWF0ZUFsbChjYWxsYmFjaykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIGlmICghdGhpcy5vcHRpb25zLmFuaW1hdGlvbikge1xuICAgICAgICBjbGVhclRpbWVvdXQoYW5pbWF0aW9uQ2FsbGJhY2tJZCk7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBhbmltYXRpbmcgPSBmYWxzZSxcbiAgICAgICAgYW5pbWF0aW9uVGltZSA9IDA7XG4gICAgICBhbmltYXRpb25TdGF0ZXMuZm9yRWFjaChmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIHRpbWUgPSAwLFxuICAgICAgICAgIHRhcmdldCA9IHN0YXRlLnRhcmdldCxcbiAgICAgICAgICBmcm9tUmVjdCA9IHRhcmdldC5mcm9tUmVjdCxcbiAgICAgICAgICB0b1JlY3QgPSBnZXRSZWN0KHRhcmdldCksXG4gICAgICAgICAgcHJldkZyb21SZWN0ID0gdGFyZ2V0LnByZXZGcm9tUmVjdCxcbiAgICAgICAgICBwcmV2VG9SZWN0ID0gdGFyZ2V0LnByZXZUb1JlY3QsXG4gICAgICAgICAgYW5pbWF0aW5nUmVjdCA9IHN0YXRlLnJlY3QsXG4gICAgICAgICAgdGFyZ2V0TWF0cml4ID0gbWF0cml4KHRhcmdldCwgdHJ1ZSk7XG4gICAgICAgIGlmICh0YXJnZXRNYXRyaXgpIHtcbiAgICAgICAgICAvLyBDb21wZW5zYXRlIGZvciBjdXJyZW50IGFuaW1hdGlvblxuICAgICAgICAgIHRvUmVjdC50b3AgLT0gdGFyZ2V0TWF0cml4LmY7XG4gICAgICAgICAgdG9SZWN0LmxlZnQgLT0gdGFyZ2V0TWF0cml4LmU7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0LnRvUmVjdCA9IHRvUmVjdDtcbiAgICAgICAgaWYgKHRhcmdldC50aGlzQW5pbWF0aW9uRHVyYXRpb24pIHtcbiAgICAgICAgICAvLyBDb3VsZCBhbHNvIGNoZWNrIGlmIGFuaW1hdGluZ1JlY3QgaXMgYmV0d2VlbiBmcm9tUmVjdCBhbmQgdG9SZWN0XG4gICAgICAgICAgaWYgKGlzUmVjdEVxdWFsKHByZXZGcm9tUmVjdCwgdG9SZWN0KSAmJiAhaXNSZWN0RXF1YWwoZnJvbVJlY3QsIHRvUmVjdCkgJiZcbiAgICAgICAgICAvLyBNYWtlIHN1cmUgYW5pbWF0aW5nUmVjdCBpcyBvbiBsaW5lIGJldHdlZW4gdG9SZWN0ICYgZnJvbVJlY3RcbiAgICAgICAgICAoYW5pbWF0aW5nUmVjdC50b3AgLSB0b1JlY3QudG9wKSAvIChhbmltYXRpbmdSZWN0LmxlZnQgLSB0b1JlY3QubGVmdCkgPT09IChmcm9tUmVjdC50b3AgLSB0b1JlY3QudG9wKSAvIChmcm9tUmVjdC5sZWZ0IC0gdG9SZWN0LmxlZnQpKSB7XG4gICAgICAgICAgICAvLyBJZiByZXR1cm5pbmcgdG8gc2FtZSBwbGFjZSBhcyBzdGFydGVkIGZyb20gYW5pbWF0aW9uIGFuZCBvbiBzYW1lIGF4aXNcbiAgICAgICAgICAgIHRpbWUgPSBjYWxjdWxhdGVSZWFsVGltZShhbmltYXRpbmdSZWN0LCBwcmV2RnJvbVJlY3QsIHByZXZUb1JlY3QsIF90aGlzLm9wdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGZyb21SZWN0ICE9IHRvUmVjdDogYW5pbWF0ZVxuICAgICAgICBpZiAoIWlzUmVjdEVxdWFsKHRvUmVjdCwgZnJvbVJlY3QpKSB7XG4gICAgICAgICAgdGFyZ2V0LnByZXZGcm9tUmVjdCA9IGZyb21SZWN0O1xuICAgICAgICAgIHRhcmdldC5wcmV2VG9SZWN0ID0gdG9SZWN0O1xuICAgICAgICAgIGlmICghdGltZSkge1xuICAgICAgICAgICAgdGltZSA9IF90aGlzLm9wdGlvbnMuYW5pbWF0aW9uO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfdGhpcy5hbmltYXRlKHRhcmdldCwgYW5pbWF0aW5nUmVjdCwgdG9SZWN0LCB0aW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGltZSkge1xuICAgICAgICAgIGFuaW1hdGluZyA9IHRydWU7XG4gICAgICAgICAgYW5pbWF0aW9uVGltZSA9IE1hdGgubWF4KGFuaW1hdGlvblRpbWUsIHRpbWUpO1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0YXJnZXQuYW5pbWF0aW9uUmVzZXRUaW1lcik7XG4gICAgICAgICAgdGFyZ2V0LmFuaW1hdGlvblJlc2V0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRhcmdldC5hbmltYXRpb25UaW1lID0gMDtcbiAgICAgICAgICAgIHRhcmdldC5wcmV2RnJvbVJlY3QgPSBudWxsO1xuICAgICAgICAgICAgdGFyZ2V0LmZyb21SZWN0ID0gbnVsbDtcbiAgICAgICAgICAgIHRhcmdldC5wcmV2VG9SZWN0ID0gbnVsbDtcbiAgICAgICAgICAgIHRhcmdldC50aGlzQW5pbWF0aW9uRHVyYXRpb24gPSBudWxsO1xuICAgICAgICAgIH0sIHRpbWUpO1xuICAgICAgICAgIHRhcmdldC50aGlzQW5pbWF0aW9uRHVyYXRpb24gPSB0aW1lO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNsZWFyVGltZW91dChhbmltYXRpb25DYWxsYmFja0lkKTtcbiAgICAgIGlmICghYW5pbWF0aW5nKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbmltYXRpb25DYWxsYmFja0lkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soKTtcbiAgICAgICAgfSwgYW5pbWF0aW9uVGltZSk7XG4gICAgICB9XG4gICAgICBhbmltYXRpb25TdGF0ZXMgPSBbXTtcbiAgICB9LFxuICAgIGFuaW1hdGU6IGZ1bmN0aW9uIGFuaW1hdGUodGFyZ2V0LCBjdXJyZW50UmVjdCwgdG9SZWN0LCBkdXJhdGlvbikge1xuICAgICAgaWYgKGR1cmF0aW9uKSB7XG4gICAgICAgIGNzcyh0YXJnZXQsICd0cmFuc2l0aW9uJywgJycpO1xuICAgICAgICBjc3ModGFyZ2V0LCAndHJhbnNmb3JtJywgJycpO1xuICAgICAgICB2YXIgZWxNYXRyaXggPSBtYXRyaXgodGhpcy5lbCksXG4gICAgICAgICAgc2NhbGVYID0gZWxNYXRyaXggJiYgZWxNYXRyaXguYSxcbiAgICAgICAgICBzY2FsZVkgPSBlbE1hdHJpeCAmJiBlbE1hdHJpeC5kLFxuICAgICAgICAgIHRyYW5zbGF0ZVggPSAoY3VycmVudFJlY3QubGVmdCAtIHRvUmVjdC5sZWZ0KSAvIChzY2FsZVggfHwgMSksXG4gICAgICAgICAgdHJhbnNsYXRlWSA9IChjdXJyZW50UmVjdC50b3AgLSB0b1JlY3QudG9wKSAvIChzY2FsZVkgfHwgMSk7XG4gICAgICAgIHRhcmdldC5hbmltYXRpbmdYID0gISF0cmFuc2xhdGVYO1xuICAgICAgICB0YXJnZXQuYW5pbWF0aW5nWSA9ICEhdHJhbnNsYXRlWTtcbiAgICAgICAgY3NzKHRhcmdldCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgnICsgdHJhbnNsYXRlWCArICdweCwnICsgdHJhbnNsYXRlWSArICdweCwwKScpO1xuICAgICAgICB0aGlzLmZvclJlcGFpbnREdW1teSA9IHJlcGFpbnQodGFyZ2V0KTsgLy8gcmVwYWludFxuXG4gICAgICAgIGNzcyh0YXJnZXQsICd0cmFuc2l0aW9uJywgJ3RyYW5zZm9ybSAnICsgZHVyYXRpb24gKyAnbXMnICsgKHRoaXMub3B0aW9ucy5lYXNpbmcgPyAnICcgKyB0aGlzLm9wdGlvbnMuZWFzaW5nIDogJycpKTtcbiAgICAgICAgY3NzKHRhcmdldCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgwLDAsMCknKTtcbiAgICAgICAgdHlwZW9mIHRhcmdldC5hbmltYXRlZCA9PT0gJ251bWJlcicgJiYgY2xlYXJUaW1lb3V0KHRhcmdldC5hbmltYXRlZCk7XG4gICAgICAgIHRhcmdldC5hbmltYXRlZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNzcyh0YXJnZXQsICd0cmFuc2l0aW9uJywgJycpO1xuICAgICAgICAgIGNzcyh0YXJnZXQsICd0cmFuc2Zvcm0nLCAnJyk7XG4gICAgICAgICAgdGFyZ2V0LmFuaW1hdGVkID0gZmFsc2U7XG4gICAgICAgICAgdGFyZ2V0LmFuaW1hdGluZ1ggPSBmYWxzZTtcbiAgICAgICAgICB0YXJnZXQuYW5pbWF0aW5nWSA9IGZhbHNlO1xuICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gcmVwYWludCh0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldC5vZmZzZXRXaWR0aDtcbn1cbmZ1bmN0aW9uIGNhbGN1bGF0ZVJlYWxUaW1lKGFuaW1hdGluZ1JlY3QsIGZyb21SZWN0LCB0b1JlY3QsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhmcm9tUmVjdC50b3AgLSBhbmltYXRpbmdSZWN0LnRvcCwgMikgKyBNYXRoLnBvdyhmcm9tUmVjdC5sZWZ0IC0gYW5pbWF0aW5nUmVjdC5sZWZ0LCAyKSkgLyBNYXRoLnNxcnQoTWF0aC5wb3coZnJvbVJlY3QudG9wIC0gdG9SZWN0LnRvcCwgMikgKyBNYXRoLnBvdyhmcm9tUmVjdC5sZWZ0IC0gdG9SZWN0LmxlZnQsIDIpKSAqIG9wdGlvbnMuYW5pbWF0aW9uO1xufVxuXG52YXIgcGx1Z2lucyA9IFtdO1xudmFyIGRlZmF1bHRzID0ge1xuICBpbml0aWFsaXplQnlEZWZhdWx0OiB0cnVlXG59O1xudmFyIFBsdWdpbk1hbmFnZXIgPSB7XG4gIG1vdW50OiBmdW5jdGlvbiBtb3VudChwbHVnaW4pIHtcbiAgICAvLyBTZXQgZGVmYXVsdCBzdGF0aWMgcHJvcGVydGllc1xuICAgIGZvciAodmFyIG9wdGlvbiBpbiBkZWZhdWx0cykge1xuICAgICAgaWYgKGRlZmF1bHRzLmhhc093blByb3BlcnR5KG9wdGlvbikgJiYgIShvcHRpb24gaW4gcGx1Z2luKSkge1xuICAgICAgICBwbHVnaW5bb3B0aW9uXSA9IGRlZmF1bHRzW29wdGlvbl07XG4gICAgICB9XG4gICAgfVxuICAgIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgaWYgKHAucGx1Z2luTmFtZSA9PT0gcGx1Z2luLnBsdWdpbk5hbWUpIHtcbiAgICAgICAgdGhyb3cgXCJTb3J0YWJsZTogQ2Fubm90IG1vdW50IHBsdWdpbiBcIi5jb25jYXQocGx1Z2luLnBsdWdpbk5hbWUsIFwiIG1vcmUgdGhhbiBvbmNlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHBsdWdpbnMucHVzaChwbHVnaW4pO1xuICB9LFxuICBwbHVnaW5FdmVudDogZnVuY3Rpb24gcGx1Z2luRXZlbnQoZXZlbnROYW1lLCBzb3J0YWJsZSwgZXZ0KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB0aGlzLmV2ZW50Q2FuY2VsZWQgPSBmYWxzZTtcbiAgICBldnQuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuZXZlbnRDYW5jZWxlZCA9IHRydWU7XG4gICAgfTtcbiAgICB2YXIgZXZlbnROYW1lR2xvYmFsID0gZXZlbnROYW1lICsgJ0dsb2JhbCc7XG4gICAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgIGlmICghc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdKSByZXR1cm47XG4gICAgICAvLyBGaXJlIGdsb2JhbCBldmVudHMgaWYgaXQgZXhpc3RzIGluIHRoaXMgc29ydGFibGVcbiAgICAgIGlmIChzb3J0YWJsZVtwbHVnaW4ucGx1Z2luTmFtZV1bZXZlbnROYW1lR2xvYmFsXSkge1xuICAgICAgICBzb3J0YWJsZVtwbHVnaW4ucGx1Z2luTmFtZV1bZXZlbnROYW1lR2xvYmFsXShfb2JqZWN0U3ByZWFkMih7XG4gICAgICAgICAgc29ydGFibGU6IHNvcnRhYmxlXG4gICAgICAgIH0sIGV2dCkpO1xuICAgICAgfVxuXG4gICAgICAvLyBPbmx5IGZpcmUgcGx1Z2luIGV2ZW50IGlmIHBsdWdpbiBpcyBlbmFibGVkIGluIHRoaXMgc29ydGFibGUsXG4gICAgICAvLyBhbmQgcGx1Z2luIGhhcyBldmVudCBkZWZpbmVkXG4gICAgICBpZiAoc29ydGFibGUub3B0aW9uc1twbHVnaW4ucGx1Z2luTmFtZV0gJiYgc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdW2V2ZW50TmFtZV0oX29iamVjdFNwcmVhZDIoe1xuICAgICAgICAgIHNvcnRhYmxlOiBzb3J0YWJsZVxuICAgICAgICB9LCBldnQpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgaW5pdGlhbGl6ZVBsdWdpbnM6IGZ1bmN0aW9uIGluaXRpYWxpemVQbHVnaW5zKHNvcnRhYmxlLCBlbCwgZGVmYXVsdHMsIG9wdGlvbnMpIHtcbiAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgdmFyIHBsdWdpbk5hbWUgPSBwbHVnaW4ucGx1Z2luTmFtZTtcbiAgICAgIGlmICghc29ydGFibGUub3B0aW9uc1twbHVnaW5OYW1lXSAmJiAhcGx1Z2luLmluaXRpYWxpemVCeURlZmF1bHQpIHJldHVybjtcbiAgICAgIHZhciBpbml0aWFsaXplZCA9IG5ldyBwbHVnaW4oc29ydGFibGUsIGVsLCBzb3J0YWJsZS5vcHRpb25zKTtcbiAgICAgIGluaXRpYWxpemVkLnNvcnRhYmxlID0gc29ydGFibGU7XG4gICAgICBpbml0aWFsaXplZC5vcHRpb25zID0gc29ydGFibGUub3B0aW9ucztcbiAgICAgIHNvcnRhYmxlW3BsdWdpbk5hbWVdID0gaW5pdGlhbGl6ZWQ7XG5cbiAgICAgIC8vIEFkZCBkZWZhdWx0IG9wdGlvbnMgZnJvbSBwbHVnaW5cbiAgICAgIF9leHRlbmRzKGRlZmF1bHRzLCBpbml0aWFsaXplZC5kZWZhdWx0cyk7XG4gICAgfSk7XG4gICAgZm9yICh2YXIgb3B0aW9uIGluIHNvcnRhYmxlLm9wdGlvbnMpIHtcbiAgICAgIGlmICghc29ydGFibGUub3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShvcHRpb24pKSBjb250aW51ZTtcbiAgICAgIHZhciBtb2RpZmllZCA9IHRoaXMubW9kaWZ5T3B0aW9uKHNvcnRhYmxlLCBvcHRpb24sIHNvcnRhYmxlLm9wdGlvbnNbb3B0aW9uXSk7XG4gICAgICBpZiAodHlwZW9mIG1vZGlmaWVkICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzb3J0YWJsZS5vcHRpb25zW29wdGlvbl0gPSBtb2RpZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGdldEV2ZW50UHJvcGVydGllczogZnVuY3Rpb24gZ2V0RXZlbnRQcm9wZXJ0aWVzKG5hbWUsIHNvcnRhYmxlKSB7XG4gICAgdmFyIGV2ZW50UHJvcGVydGllcyA9IHt9O1xuICAgIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICBpZiAodHlwZW9mIHBsdWdpbi5ldmVudFByb3BlcnRpZXMgIT09ICdmdW5jdGlvbicpIHJldHVybjtcbiAgICAgIF9leHRlbmRzKGV2ZW50UHJvcGVydGllcywgcGx1Z2luLmV2ZW50UHJvcGVydGllcy5jYWxsKHNvcnRhYmxlW3BsdWdpbi5wbHVnaW5OYW1lXSwgbmFtZSkpO1xuICAgIH0pO1xuICAgIHJldHVybiBldmVudFByb3BlcnRpZXM7XG4gIH0sXG4gIG1vZGlmeU9wdGlvbjogZnVuY3Rpb24gbW9kaWZ5T3B0aW9uKHNvcnRhYmxlLCBuYW1lLCB2YWx1ZSkge1xuICAgIHZhciBtb2RpZmllZFZhbHVlO1xuICAgIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICAvLyBQbHVnaW4gbXVzdCBleGlzdCBvbiB0aGUgU29ydGFibGVcbiAgICAgIGlmICghc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdKSByZXR1cm47XG5cbiAgICAgIC8vIElmIHN0YXRpYyBvcHRpb24gbGlzdGVuZXIgZXhpc3RzIGZvciB0aGlzIG9wdGlvbiwgY2FsbCBpbiB0aGUgY29udGV4dCBvZiB0aGUgU29ydGFibGUncyBpbnN0YW5jZSBvZiB0aGlzIHBsdWdpblxuICAgICAgaWYgKHBsdWdpbi5vcHRpb25MaXN0ZW5lcnMgJiYgdHlwZW9mIHBsdWdpbi5vcHRpb25MaXN0ZW5lcnNbbmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbW9kaWZpZWRWYWx1ZSA9IHBsdWdpbi5vcHRpb25MaXN0ZW5lcnNbbmFtZV0uY2FsbChzb3J0YWJsZVtwbHVnaW4ucGx1Z2luTmFtZV0sIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbW9kaWZpZWRWYWx1ZTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChfcmVmKSB7XG4gIHZhciBzb3J0YWJsZSA9IF9yZWYuc29ydGFibGUsXG4gICAgcm9vdEVsID0gX3JlZi5yb290RWwsXG4gICAgbmFtZSA9IF9yZWYubmFtZSxcbiAgICB0YXJnZXRFbCA9IF9yZWYudGFyZ2V0RWwsXG4gICAgY2xvbmVFbCA9IF9yZWYuY2xvbmVFbCxcbiAgICB0b0VsID0gX3JlZi50b0VsLFxuICAgIGZyb21FbCA9IF9yZWYuZnJvbUVsLFxuICAgIG9sZEluZGV4ID0gX3JlZi5vbGRJbmRleCxcbiAgICBuZXdJbmRleCA9IF9yZWYubmV3SW5kZXgsXG4gICAgb2xkRHJhZ2dhYmxlSW5kZXggPSBfcmVmLm9sZERyYWdnYWJsZUluZGV4LFxuICAgIG5ld0RyYWdnYWJsZUluZGV4ID0gX3JlZi5uZXdEcmFnZ2FibGVJbmRleCxcbiAgICBvcmlnaW5hbEV2ZW50ID0gX3JlZi5vcmlnaW5hbEV2ZW50LFxuICAgIHB1dFNvcnRhYmxlID0gX3JlZi5wdXRTb3J0YWJsZSxcbiAgICBleHRyYUV2ZW50UHJvcGVydGllcyA9IF9yZWYuZXh0cmFFdmVudFByb3BlcnRpZXM7XG4gIHNvcnRhYmxlID0gc29ydGFibGUgfHwgcm9vdEVsICYmIHJvb3RFbFtleHBhbmRvXTtcbiAgaWYgKCFzb3J0YWJsZSkgcmV0dXJuO1xuICB2YXIgZXZ0LFxuICAgIG9wdGlvbnMgPSBzb3J0YWJsZS5vcHRpb25zLFxuICAgIG9uTmFtZSA9ICdvbicgKyBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zdWJzdHIoMSk7XG4gIC8vIFN1cHBvcnQgZm9yIG5ldyBDdXN0b21FdmVudCBmZWF0dXJlXG4gIGlmICh3aW5kb3cuQ3VzdG9tRXZlbnQgJiYgIUlFMTFPckxlc3MgJiYgIUVkZ2UpIHtcbiAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBldnQuaW5pdEV2ZW50KG5hbWUsIHRydWUsIHRydWUpO1xuICB9XG4gIGV2dC50byA9IHRvRWwgfHwgcm9vdEVsO1xuICBldnQuZnJvbSA9IGZyb21FbCB8fCByb290RWw7XG4gIGV2dC5pdGVtID0gdGFyZ2V0RWwgfHwgcm9vdEVsO1xuICBldnQuY2xvbmUgPSBjbG9uZUVsO1xuICBldnQub2xkSW5kZXggPSBvbGRJbmRleDtcbiAgZXZ0Lm5ld0luZGV4ID0gbmV3SW5kZXg7XG4gIGV2dC5vbGREcmFnZ2FibGVJbmRleCA9IG9sZERyYWdnYWJsZUluZGV4O1xuICBldnQubmV3RHJhZ2dhYmxlSW5kZXggPSBuZXdEcmFnZ2FibGVJbmRleDtcbiAgZXZ0Lm9yaWdpbmFsRXZlbnQgPSBvcmlnaW5hbEV2ZW50O1xuICBldnQucHVsbE1vZGUgPSBwdXRTb3J0YWJsZSA/IHB1dFNvcnRhYmxlLmxhc3RQdXRNb2RlIDogdW5kZWZpbmVkO1xuICB2YXIgYWxsRXZlbnRQcm9wZXJ0aWVzID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGV4dHJhRXZlbnRQcm9wZXJ0aWVzKSwgUGx1Z2luTWFuYWdlci5nZXRFdmVudFByb3BlcnRpZXMobmFtZSwgc29ydGFibGUpKTtcbiAgZm9yICh2YXIgb3B0aW9uIGluIGFsbEV2ZW50UHJvcGVydGllcykge1xuICAgIGV2dFtvcHRpb25dID0gYWxsRXZlbnRQcm9wZXJ0aWVzW29wdGlvbl07XG4gIH1cbiAgaWYgKHJvb3RFbCkge1xuICAgIHJvb3RFbC5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gIH1cbiAgaWYgKG9wdGlvbnNbb25OYW1lXSkge1xuICAgIG9wdGlvbnNbb25OYW1lXS5jYWxsKHNvcnRhYmxlLCBldnQpO1xuICB9XG59XG5cbnZhciBfZXhjbHVkZWQgPSBbXCJldnRcIl07XG52YXIgcGx1Z2luRXZlbnQgPSBmdW5jdGlvbiBwbHVnaW5FdmVudChldmVudE5hbWUsIHNvcnRhYmxlKSB7XG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fSxcbiAgICBvcmlnaW5hbEV2ZW50ID0gX3JlZi5ldnQsXG4gICAgZGF0YSA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBfZXhjbHVkZWQpO1xuICBQbHVnaW5NYW5hZ2VyLnBsdWdpbkV2ZW50LmJpbmQoU29ydGFibGUpKGV2ZW50TmFtZSwgc29ydGFibGUsIF9vYmplY3RTcHJlYWQyKHtcbiAgICBkcmFnRWw6IGRyYWdFbCxcbiAgICBwYXJlbnRFbDogcGFyZW50RWwsXG4gICAgZ2hvc3RFbDogZ2hvc3RFbCxcbiAgICByb290RWw6IHJvb3RFbCxcbiAgICBuZXh0RWw6IG5leHRFbCxcbiAgICBsYXN0RG93bkVsOiBsYXN0RG93bkVsLFxuICAgIGNsb25lRWw6IGNsb25lRWwsXG4gICAgY2xvbmVIaWRkZW46IGNsb25lSGlkZGVuLFxuICAgIGRyYWdTdGFydGVkOiBtb3ZlZCxcbiAgICBwdXRTb3J0YWJsZTogcHV0U29ydGFibGUsXG4gICAgYWN0aXZlU29ydGFibGU6IFNvcnRhYmxlLmFjdGl2ZSxcbiAgICBvcmlnaW5hbEV2ZW50OiBvcmlnaW5hbEV2ZW50LFxuICAgIG9sZEluZGV4OiBvbGRJbmRleCxcbiAgICBvbGREcmFnZ2FibGVJbmRleDogb2xkRHJhZ2dhYmxlSW5kZXgsXG4gICAgbmV3SW5kZXg6IG5ld0luZGV4LFxuICAgIG5ld0RyYWdnYWJsZUluZGV4OiBuZXdEcmFnZ2FibGVJbmRleCxcbiAgICBoaWRlR2hvc3RGb3JUYXJnZXQ6IF9oaWRlR2hvc3RGb3JUYXJnZXQsXG4gICAgdW5oaWRlR2hvc3RGb3JUYXJnZXQ6IF91bmhpZGVHaG9zdEZvclRhcmdldCxcbiAgICBjbG9uZU5vd0hpZGRlbjogZnVuY3Rpb24gY2xvbmVOb3dIaWRkZW4oKSB7XG4gICAgICBjbG9uZUhpZGRlbiA9IHRydWU7XG4gICAgfSxcbiAgICBjbG9uZU5vd1Nob3duOiBmdW5jdGlvbiBjbG9uZU5vd1Nob3duKCkge1xuICAgICAgY2xvbmVIaWRkZW4gPSBmYWxzZTtcbiAgICB9LFxuICAgIGRpc3BhdGNoU29ydGFibGVFdmVudDogZnVuY3Rpb24gZGlzcGF0Y2hTb3J0YWJsZUV2ZW50KG5hbWUpIHtcbiAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgc29ydGFibGU6IHNvcnRhYmxlLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBvcmlnaW5hbEV2ZW50OiBvcmlnaW5hbEV2ZW50XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIGRhdGEpKTtcbn07XG5mdW5jdGlvbiBfZGlzcGF0Y2hFdmVudChpbmZvKSB7XG4gIGRpc3BhdGNoRXZlbnQoX29iamVjdFNwcmVhZDIoe1xuICAgIHB1dFNvcnRhYmxlOiBwdXRTb3J0YWJsZSxcbiAgICBjbG9uZUVsOiBjbG9uZUVsLFxuICAgIHRhcmdldEVsOiBkcmFnRWwsXG4gICAgcm9vdEVsOiByb290RWwsXG4gICAgb2xkSW5kZXg6IG9sZEluZGV4LFxuICAgIG9sZERyYWdnYWJsZUluZGV4OiBvbGREcmFnZ2FibGVJbmRleCxcbiAgICBuZXdJbmRleDogbmV3SW5kZXgsXG4gICAgbmV3RHJhZ2dhYmxlSW5kZXg6IG5ld0RyYWdnYWJsZUluZGV4XG4gIH0sIGluZm8pKTtcbn1cbnZhciBkcmFnRWwsXG4gIHBhcmVudEVsLFxuICBnaG9zdEVsLFxuICByb290RWwsXG4gIG5leHRFbCxcbiAgbGFzdERvd25FbCxcbiAgY2xvbmVFbCxcbiAgY2xvbmVIaWRkZW4sXG4gIG9sZEluZGV4LFxuICBuZXdJbmRleCxcbiAgb2xkRHJhZ2dhYmxlSW5kZXgsXG4gIG5ld0RyYWdnYWJsZUluZGV4LFxuICBhY3RpdmVHcm91cCxcbiAgcHV0U29ydGFibGUsXG4gIGF3YWl0aW5nRHJhZ1N0YXJ0ZWQgPSBmYWxzZSxcbiAgaWdub3JlTmV4dENsaWNrID0gZmFsc2UsXG4gIHNvcnRhYmxlcyA9IFtdLFxuICB0YXBFdnQsXG4gIHRvdWNoRXZ0LFxuICBsYXN0RHgsXG4gIGxhc3REeSxcbiAgdGFwRGlzdGFuY2VMZWZ0LFxuICB0YXBEaXN0YW5jZVRvcCxcbiAgbW92ZWQsXG4gIGxhc3RUYXJnZXQsXG4gIGxhc3REaXJlY3Rpb24sXG4gIHBhc3RGaXJzdEludmVydFRocmVzaCA9IGZhbHNlLFxuICBpc0NpcmN1bXN0YW50aWFsSW52ZXJ0ID0gZmFsc2UsXG4gIHRhcmdldE1vdmVEaXN0YW5jZSxcbiAgLy8gRm9yIHBvc2l0aW9uaW5nIGdob3N0IGFic29sdXRlbHlcbiAgZ2hvc3RSZWxhdGl2ZVBhcmVudCxcbiAgZ2hvc3RSZWxhdGl2ZVBhcmVudEluaXRpYWxTY3JvbGwgPSBbXSxcbiAgLy8gKGxlZnQsIHRvcClcblxuICBfc2lsZW50ID0gZmFsc2UsXG4gIHNhdmVkSW5wdXRDaGVja2VkID0gW107XG5cbi8qKiBAY29uc3QgKi9cbnZhciBkb2N1bWVudEV4aXN0cyA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcsXG4gIFBvc2l0aW9uR2hvc3RBYnNvbHV0ZWx5ID0gSU9TLFxuICBDU1NGbG9hdFByb3BlcnR5ID0gRWRnZSB8fCBJRTExT3JMZXNzID8gJ2Nzc0Zsb2F0JyA6ICdmbG9hdCcsXG4gIC8vIFRoaXMgd2lsbCBub3QgcGFzcyBmb3IgSUU5LCBiZWNhdXNlIElFOSBEbkQgb25seSB3b3JrcyBvbiBhbmNob3JzXG4gIHN1cHBvcnREcmFnZ2FibGUgPSBkb2N1bWVudEV4aXN0cyAmJiAhQ2hyb21lRm9yQW5kcm9pZCAmJiAhSU9TICYmICdkcmFnZ2FibGUnIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICBzdXBwb3J0Q3NzUG9pbnRlckV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWRvY3VtZW50RXhpc3RzKSByZXR1cm47XG4gICAgLy8gZmFsc2Ugd2hlbiA8PSBJRTExXG4gICAgaWYgKElFMTFPckxlc3MpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgneCcpO1xuICAgIGVsLnN0eWxlLmNzc1RleHQgPSAncG9pbnRlci1ldmVudHM6YXV0byc7XG4gICAgcmV0dXJuIGVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPT09ICdhdXRvJztcbiAgfSgpLFxuICBfZGV0ZWN0RGlyZWN0aW9uID0gZnVuY3Rpb24gX2RldGVjdERpcmVjdGlvbihlbCwgb3B0aW9ucykge1xuICAgIHZhciBlbENTUyA9IGNzcyhlbCksXG4gICAgICBlbFdpZHRoID0gcGFyc2VJbnQoZWxDU1Mud2lkdGgpIC0gcGFyc2VJbnQoZWxDU1MucGFkZGluZ0xlZnQpIC0gcGFyc2VJbnQoZWxDU1MucGFkZGluZ1JpZ2h0KSAtIHBhcnNlSW50KGVsQ1NTLmJvcmRlckxlZnRXaWR0aCkgLSBwYXJzZUludChlbENTUy5ib3JkZXJSaWdodFdpZHRoKSxcbiAgICAgIGNoaWxkMSA9IGdldENoaWxkKGVsLCAwLCBvcHRpb25zKSxcbiAgICAgIGNoaWxkMiA9IGdldENoaWxkKGVsLCAxLCBvcHRpb25zKSxcbiAgICAgIGZpcnN0Q2hpbGRDU1MgPSBjaGlsZDEgJiYgY3NzKGNoaWxkMSksXG4gICAgICBzZWNvbmRDaGlsZENTUyA9IGNoaWxkMiAmJiBjc3MoY2hpbGQyKSxcbiAgICAgIGZpcnN0Q2hpbGRXaWR0aCA9IGZpcnN0Q2hpbGRDU1MgJiYgcGFyc2VJbnQoZmlyc3RDaGlsZENTUy5tYXJnaW5MZWZ0KSArIHBhcnNlSW50KGZpcnN0Q2hpbGRDU1MubWFyZ2luUmlnaHQpICsgZ2V0UmVjdChjaGlsZDEpLndpZHRoLFxuICAgICAgc2Vjb25kQ2hpbGRXaWR0aCA9IHNlY29uZENoaWxkQ1NTICYmIHBhcnNlSW50KHNlY29uZENoaWxkQ1NTLm1hcmdpbkxlZnQpICsgcGFyc2VJbnQoc2Vjb25kQ2hpbGRDU1MubWFyZ2luUmlnaHQpICsgZ2V0UmVjdChjaGlsZDIpLndpZHRoO1xuICAgIGlmIChlbENTUy5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgIHJldHVybiBlbENTUy5mbGV4RGlyZWN0aW9uID09PSAnY29sdW1uJyB8fCBlbENTUy5mbGV4RGlyZWN0aW9uID09PSAnY29sdW1uLXJldmVyc2UnID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICB9XG4gICAgaWYgKGVsQ1NTLmRpc3BsYXkgPT09ICdncmlkJykge1xuICAgICAgcmV0dXJuIGVsQ1NTLmdyaWRUZW1wbGF0ZUNvbHVtbnMuc3BsaXQoJyAnKS5sZW5ndGggPD0gMSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgfVxuICAgIGlmIChjaGlsZDEgJiYgZmlyc3RDaGlsZENTU1tcImZsb2F0XCJdICYmIGZpcnN0Q2hpbGRDU1NbXCJmbG9hdFwiXSAhPT0gJ25vbmUnKSB7XG4gICAgICB2YXIgdG91Y2hpbmdTaWRlQ2hpbGQyID0gZmlyc3RDaGlsZENTU1tcImZsb2F0XCJdID09PSAnbGVmdCcgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgICAgcmV0dXJuIGNoaWxkMiAmJiAoc2Vjb25kQ2hpbGRDU1MuY2xlYXIgPT09ICdib3RoJyB8fCBzZWNvbmRDaGlsZENTUy5jbGVhciA9PT0gdG91Y2hpbmdTaWRlQ2hpbGQyKSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZDEgJiYgKGZpcnN0Q2hpbGRDU1MuZGlzcGxheSA9PT0gJ2Jsb2NrJyB8fCBmaXJzdENoaWxkQ1NTLmRpc3BsYXkgPT09ICdmbGV4JyB8fCBmaXJzdENoaWxkQ1NTLmRpc3BsYXkgPT09ICd0YWJsZScgfHwgZmlyc3RDaGlsZENTUy5kaXNwbGF5ID09PSAnZ3JpZCcgfHwgZmlyc3RDaGlsZFdpZHRoID49IGVsV2lkdGggJiYgZWxDU1NbQ1NTRmxvYXRQcm9wZXJ0eV0gPT09ICdub25lJyB8fCBjaGlsZDIgJiYgZWxDU1NbQ1NTRmxvYXRQcm9wZXJ0eV0gPT09ICdub25lJyAmJiBmaXJzdENoaWxkV2lkdGggKyBzZWNvbmRDaGlsZFdpZHRoID4gZWxXaWR0aCkgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICB9LFxuICBfZHJhZ0VsSW5Sb3dDb2x1bW4gPSBmdW5jdGlvbiBfZHJhZ0VsSW5Sb3dDb2x1bW4oZHJhZ1JlY3QsIHRhcmdldFJlY3QsIHZlcnRpY2FsKSB7XG4gICAgdmFyIGRyYWdFbFMxT3BwID0gdmVydGljYWwgPyBkcmFnUmVjdC5sZWZ0IDogZHJhZ1JlY3QudG9wLFxuICAgICAgZHJhZ0VsUzJPcHAgPSB2ZXJ0aWNhbCA/IGRyYWdSZWN0LnJpZ2h0IDogZHJhZ1JlY3QuYm90dG9tLFxuICAgICAgZHJhZ0VsT3BwTGVuZ3RoID0gdmVydGljYWwgPyBkcmFnUmVjdC53aWR0aCA6IGRyYWdSZWN0LmhlaWdodCxcbiAgICAgIHRhcmdldFMxT3BwID0gdmVydGljYWwgPyB0YXJnZXRSZWN0LmxlZnQgOiB0YXJnZXRSZWN0LnRvcCxcbiAgICAgIHRhcmdldFMyT3BwID0gdmVydGljYWwgPyB0YXJnZXRSZWN0LnJpZ2h0IDogdGFyZ2V0UmVjdC5ib3R0b20sXG4gICAgICB0YXJnZXRPcHBMZW5ndGggPSB2ZXJ0aWNhbCA/IHRhcmdldFJlY3Qud2lkdGggOiB0YXJnZXRSZWN0LmhlaWdodDtcbiAgICByZXR1cm4gZHJhZ0VsUzFPcHAgPT09IHRhcmdldFMxT3BwIHx8IGRyYWdFbFMyT3BwID09PSB0YXJnZXRTMk9wcCB8fCBkcmFnRWxTMU9wcCArIGRyYWdFbE9wcExlbmd0aCAvIDIgPT09IHRhcmdldFMxT3BwICsgdGFyZ2V0T3BwTGVuZ3RoIC8gMjtcbiAgfSxcbiAgLyoqXHJcbiAgICogRGV0ZWN0cyBmaXJzdCBuZWFyZXN0IGVtcHR5IHNvcnRhYmxlIHRvIFggYW5kIFkgcG9zaXRpb24gdXNpbmcgZW1wdHlJbnNlcnRUaHJlc2hvbGQuXHJcbiAgICogQHBhcmFtICB7TnVtYmVyfSB4ICAgICAgWCBwb3NpdGlvblxyXG4gICAqIEBwYXJhbSAge051bWJlcn0geSAgICAgIFkgcG9zaXRpb25cclxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gICBFbGVtZW50IG9mIHRoZSBmaXJzdCBmb3VuZCBuZWFyZXN0IFNvcnRhYmxlXHJcbiAgICovXG4gIF9kZXRlY3ROZWFyZXN0RW1wdHlTb3J0YWJsZSA9IGZ1bmN0aW9uIF9kZXRlY3ROZWFyZXN0RW1wdHlTb3J0YWJsZSh4LCB5KSB7XG4gICAgdmFyIHJldDtcbiAgICBzb3J0YWJsZXMuc29tZShmdW5jdGlvbiAoc29ydGFibGUpIHtcbiAgICAgIHZhciB0aHJlc2hvbGQgPSBzb3J0YWJsZVtleHBhbmRvXS5vcHRpb25zLmVtcHR5SW5zZXJ0VGhyZXNob2xkO1xuICAgICAgaWYgKCF0aHJlc2hvbGQgfHwgbGFzdENoaWxkKHNvcnRhYmxlKSkgcmV0dXJuO1xuICAgICAgdmFyIHJlY3QgPSBnZXRSZWN0KHNvcnRhYmxlKSxcbiAgICAgICAgaW5zaWRlSG9yaXpvbnRhbGx5ID0geCA+PSByZWN0LmxlZnQgLSB0aHJlc2hvbGQgJiYgeCA8PSByZWN0LnJpZ2h0ICsgdGhyZXNob2xkLFxuICAgICAgICBpbnNpZGVWZXJ0aWNhbGx5ID0geSA+PSByZWN0LnRvcCAtIHRocmVzaG9sZCAmJiB5IDw9IHJlY3QuYm90dG9tICsgdGhyZXNob2xkO1xuICAgICAgaWYgKGluc2lkZUhvcml6b250YWxseSAmJiBpbnNpZGVWZXJ0aWNhbGx5KSB7XG4gICAgICAgIHJldHVybiByZXQgPSBzb3J0YWJsZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9LFxuICBfcHJlcGFyZUdyb3VwID0gZnVuY3Rpb24gX3ByZXBhcmVHcm91cChvcHRpb25zKSB7XG4gICAgZnVuY3Rpb24gdG9Gbih2YWx1ZSwgcHVsbCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0bywgZnJvbSwgZHJhZ0VsLCBldnQpIHtcbiAgICAgICAgdmFyIHNhbWVHcm91cCA9IHRvLm9wdGlvbnMuZ3JvdXAubmFtZSAmJiBmcm9tLm9wdGlvbnMuZ3JvdXAubmFtZSAmJiB0by5vcHRpb25zLmdyb3VwLm5hbWUgPT09IGZyb20ub3B0aW9ucy5ncm91cC5uYW1lO1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCAmJiAocHVsbCB8fCBzYW1lR3JvdXApKSB7XG4gICAgICAgICAgLy8gRGVmYXVsdCBwdWxsIHZhbHVlXG4gICAgICAgICAgLy8gRGVmYXVsdCBwdWxsIGFuZCBwdXQgdmFsdWUgaWYgc2FtZSBncm91cFxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHB1bGwgJiYgdmFsdWUgPT09ICdjbG9uZScpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIHRvRm4odmFsdWUodG8sIGZyb20sIGRyYWdFbCwgZXZ0KSwgcHVsbCkodG8sIGZyb20sIGRyYWdFbCwgZXZ0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgb3RoZXJHcm91cCA9IChwdWxsID8gdG8gOiBmcm9tKS5vcHRpb25zLmdyb3VwLm5hbWU7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlID09PSB0cnVlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUgPT09IG90aGVyR3JvdXAgfHwgdmFsdWUuam9pbiAmJiB2YWx1ZS5pbmRleE9mKG90aGVyR3JvdXApID4gLTE7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIHZhciBncm91cCA9IHt9O1xuICAgIHZhciBvcmlnaW5hbEdyb3VwID0gb3B0aW9ucy5ncm91cDtcbiAgICBpZiAoIW9yaWdpbmFsR3JvdXAgfHwgX3R5cGVvZihvcmlnaW5hbEdyb3VwKSAhPSAnb2JqZWN0Jykge1xuICAgICAgb3JpZ2luYWxHcm91cCA9IHtcbiAgICAgICAgbmFtZTogb3JpZ2luYWxHcm91cFxuICAgICAgfTtcbiAgICB9XG4gICAgZ3JvdXAubmFtZSA9IG9yaWdpbmFsR3JvdXAubmFtZTtcbiAgICBncm91cC5jaGVja1B1bGwgPSB0b0ZuKG9yaWdpbmFsR3JvdXAucHVsbCwgdHJ1ZSk7XG4gICAgZ3JvdXAuY2hlY2tQdXQgPSB0b0ZuKG9yaWdpbmFsR3JvdXAucHV0KTtcbiAgICBncm91cC5yZXZlcnRDbG9uZSA9IG9yaWdpbmFsR3JvdXAucmV2ZXJ0Q2xvbmU7XG4gICAgb3B0aW9ucy5ncm91cCA9IGdyb3VwO1xuICB9LFxuICBfaGlkZUdob3N0Rm9yVGFyZ2V0ID0gZnVuY3Rpb24gX2hpZGVHaG9zdEZvclRhcmdldCgpIHtcbiAgICBpZiAoIXN1cHBvcnRDc3NQb2ludGVyRXZlbnRzICYmIGdob3N0RWwpIHtcbiAgICAgIGNzcyhnaG9zdEVsLCAnZGlzcGxheScsICdub25lJyk7XG4gICAgfVxuICB9LFxuICBfdW5oaWRlR2hvc3RGb3JUYXJnZXQgPSBmdW5jdGlvbiBfdW5oaWRlR2hvc3RGb3JUYXJnZXQoKSB7XG4gICAgaWYgKCFzdXBwb3J0Q3NzUG9pbnRlckV2ZW50cyAmJiBnaG9zdEVsKSB7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ2Rpc3BsYXknLCAnJyk7XG4gICAgfVxuICB9O1xuXG4vLyAjMTE4NCBmaXggLSBQcmV2ZW50IGNsaWNrIGV2ZW50IG9uIGZhbGxiYWNrIGlmIGRyYWdnZWQgYnV0IGl0ZW0gbm90IGNoYW5nZWQgcG9zaXRpb25cbmlmIChkb2N1bWVudEV4aXN0cyAmJiAhQ2hyb21lRm9yQW5kcm9pZCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAoaWdub3JlTmV4dENsaWNrKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24gJiYgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZ0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiAmJiBldnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICBpZ25vcmVOZXh0Q2xpY2sgPSBmYWxzZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHRydWUpO1xufVxudmFyIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50ID0gZnVuY3Rpb24gbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQoZXZ0KSB7XG4gIGlmIChkcmFnRWwpIHtcbiAgICBldnQgPSBldnQudG91Y2hlcyA/IGV2dC50b3VjaGVzWzBdIDogZXZ0O1xuICAgIHZhciBuZWFyZXN0ID0gX2RldGVjdE5lYXJlc3RFbXB0eVNvcnRhYmxlKGV2dC5jbGllbnRYLCBldnQuY2xpZW50WSk7XG4gICAgaWYgKG5lYXJlc3QpIHtcbiAgICAgIC8vIENyZWF0ZSBpbWl0YXRpb24gZXZlbnRcbiAgICAgIHZhciBldmVudCA9IHt9O1xuICAgICAgZm9yICh2YXIgaSBpbiBldnQpIHtcbiAgICAgICAgaWYgKGV2dC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIGV2ZW50W2ldID0gZXZ0W2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBldmVudC50YXJnZXQgPSBldmVudC5yb290RWwgPSBuZWFyZXN0O1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQgPSB2b2lkIDA7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24gPSB2b2lkIDA7XG4gICAgICBuZWFyZXN0W2V4cGFuZG9dLl9vbkRyYWdPdmVyKGV2ZW50KTtcbiAgICB9XG4gIH1cbn07XG52YXIgX2NoZWNrT3V0c2lkZVRhcmdldEVsID0gZnVuY3Rpb24gX2NoZWNrT3V0c2lkZVRhcmdldEVsKGV2dCkge1xuICBpZiAoZHJhZ0VsKSB7XG4gICAgZHJhZ0VsLnBhcmVudE5vZGVbZXhwYW5kb10uX2lzT3V0c2lkZVRoaXNFbChldnQudGFyZ2V0KTtcbiAgfVxufTtcblxuLyoqXHJcbiAqIEBjbGFzcyAgU29ydGFibGVcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9ICBlbFxyXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgICAgIFtvcHRpb25zXVxyXG4gKi9cbmZ1bmN0aW9uIFNvcnRhYmxlKGVsLCBvcHRpb25zKSB7XG4gIGlmICghKGVsICYmIGVsLm5vZGVUeXBlICYmIGVsLm5vZGVUeXBlID09PSAxKSkge1xuICAgIHRocm93IFwiU29ydGFibGU6IGBlbGAgbXVzdCBiZSBhbiBIVE1MRWxlbWVudCwgbm90IFwiLmNvbmNhdCh7fS50b1N0cmluZy5jYWxsKGVsKSk7XG4gIH1cbiAgdGhpcy5lbCA9IGVsOyAvLyByb290IGVsZW1lbnRcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyA9IF9leHRlbmRzKHt9LCBvcHRpb25zKTtcblxuICAvLyBFeHBvcnQgaW5zdGFuY2VcbiAgZWxbZXhwYW5kb10gPSB0aGlzO1xuICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgZ3JvdXA6IG51bGwsXG4gICAgc29ydDogdHJ1ZSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgc3RvcmU6IG51bGwsXG4gICAgaGFuZGxlOiBudWxsLFxuICAgIGRyYWdnYWJsZTogL15bdW9dbCQvaS50ZXN0KGVsLm5vZGVOYW1lKSA/ICc+bGknIDogJz4qJyxcbiAgICBzd2FwVGhyZXNob2xkOiAxLFxuICAgIC8vIHBlcmNlbnRhZ2U7IDAgPD0geCA8PSAxXG4gICAgaW52ZXJ0U3dhcDogZmFsc2UsXG4gICAgLy8gaW52ZXJ0IGFsd2F5c1xuICAgIGludmVydGVkU3dhcFRocmVzaG9sZDogbnVsbCxcbiAgICAvLyB3aWxsIGJlIHNldCB0byBzYW1lIGFzIHN3YXBUaHJlc2hvbGQgaWYgZGVmYXVsdFxuICAgIHJlbW92ZUNsb25lT25IaWRlOiB0cnVlLFxuICAgIGRpcmVjdGlvbjogZnVuY3Rpb24gZGlyZWN0aW9uKCkge1xuICAgICAgcmV0dXJuIF9kZXRlY3REaXJlY3Rpb24oZWwsIHRoaXMub3B0aW9ucyk7XG4gICAgfSxcbiAgICBnaG9zdENsYXNzOiAnc29ydGFibGUtZ2hvc3QnLFxuICAgIGNob3NlbkNsYXNzOiAnc29ydGFibGUtY2hvc2VuJyxcbiAgICBkcmFnQ2xhc3M6ICdzb3J0YWJsZS1kcmFnJyxcbiAgICBpZ25vcmU6ICdhLCBpbWcnLFxuICAgIGZpbHRlcjogbnVsbCxcbiAgICBwcmV2ZW50T25GaWx0ZXI6IHRydWUsXG4gICAgYW5pbWF0aW9uOiAwLFxuICAgIGVhc2luZzogbnVsbCxcbiAgICBzZXREYXRhOiBmdW5jdGlvbiBzZXREYXRhKGRhdGFUcmFuc2ZlciwgZHJhZ0VsKSB7XG4gICAgICBkYXRhVHJhbnNmZXIuc2V0RGF0YSgnVGV4dCcsIGRyYWdFbC50ZXh0Q29udGVudCk7XG4gICAgfSxcbiAgICBkcm9wQnViYmxlOiBmYWxzZSxcbiAgICBkcmFnb3ZlckJ1YmJsZTogZmFsc2UsXG4gICAgZGF0YUlkQXR0cjogJ2RhdGEtaWQnLFxuICAgIGRlbGF5OiAwLFxuICAgIGRlbGF5T25Ub3VjaE9ubHk6IGZhbHNlLFxuICAgIHRvdWNoU3RhcnRUaHJlc2hvbGQ6IChOdW1iZXIucGFyc2VJbnQgPyBOdW1iZXIgOiB3aW5kb3cpLnBhcnNlSW50KHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLCAxMCkgfHwgMSxcbiAgICBmb3JjZUZhbGxiYWNrOiBmYWxzZSxcbiAgICBmYWxsYmFja0NsYXNzOiAnc29ydGFibGUtZmFsbGJhY2snLFxuICAgIGZhbGxiYWNrT25Cb2R5OiBmYWxzZSxcbiAgICBmYWxsYmFja1RvbGVyYW5jZTogMCxcbiAgICBmYWxsYmFja09mZnNldDoge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9LFxuICAgIC8vIERpc2FibGVkIG9uIFNhZmFyaTogIzE1NzE7IEVuYWJsZWQgb24gU2FmYXJpIElPUzogIzIyNDRcbiAgICBzdXBwb3J0UG9pbnRlcjogU29ydGFibGUuc3VwcG9ydFBvaW50ZXIgIT09IGZhbHNlICYmICdQb2ludGVyRXZlbnQnIGluIHdpbmRvdyAmJiAoIVNhZmFyaSB8fCBJT1MpLFxuICAgIGVtcHR5SW5zZXJ0VGhyZXNob2xkOiA1XG4gIH07XG4gIFBsdWdpbk1hbmFnZXIuaW5pdGlhbGl6ZVBsdWdpbnModGhpcywgZWwsIGRlZmF1bHRzKTtcblxuICAvLyBTZXQgZGVmYXVsdCBvcHRpb25zXG4gIGZvciAodmFyIG5hbWUgaW4gZGVmYXVsdHMpIHtcbiAgICAhKG5hbWUgaW4gb3B0aW9ucykgJiYgKG9wdGlvbnNbbmFtZV0gPSBkZWZhdWx0c1tuYW1lXSk7XG4gIH1cbiAgX3ByZXBhcmVHcm91cChvcHRpb25zKTtcblxuICAvLyBCaW5kIGFsbCBwcml2YXRlIG1ldGhvZHNcbiAgZm9yICh2YXIgZm4gaW4gdGhpcykge1xuICAgIGlmIChmbi5jaGFyQXQoMCkgPT09ICdfJyAmJiB0eXBlb2YgdGhpc1tmbl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXNbZm5dID0gdGhpc1tmbl0uYmluZCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICAvLyBTZXR1cCBkcmFnIG1vZGVcbiAgdGhpcy5uYXRpdmVEcmFnZ2FibGUgPSBvcHRpb25zLmZvcmNlRmFsbGJhY2sgPyBmYWxzZSA6IHN1cHBvcnREcmFnZ2FibGU7XG4gIGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgIC8vIFRvdWNoIHN0YXJ0IHRocmVzaG9sZCBjYW5ub3QgYmUgZ3JlYXRlciB0aGFuIHRoZSBuYXRpdmUgZHJhZ3N0YXJ0IHRocmVzaG9sZFxuICAgIHRoaXMub3B0aW9ucy50b3VjaFN0YXJ0VGhyZXNob2xkID0gMTtcbiAgfVxuXG4gIC8vIEJpbmQgZXZlbnRzXG4gIGlmIChvcHRpb25zLnN1cHBvcnRQb2ludGVyKSB7XG4gICAgb24oZWwsICdwb2ludGVyZG93bicsIHRoaXMuX29uVGFwU3RhcnQpO1xuICB9IGVsc2Uge1xuICAgIG9uKGVsLCAnbW91c2Vkb3duJywgdGhpcy5fb25UYXBTdGFydCk7XG4gICAgb24oZWwsICd0b3VjaHN0YXJ0JywgdGhpcy5fb25UYXBTdGFydCk7XG4gIH1cbiAgaWYgKHRoaXMubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgb24oZWwsICdkcmFnb3ZlcicsIHRoaXMpO1xuICAgIG9uKGVsLCAnZHJhZ2VudGVyJywgdGhpcyk7XG4gIH1cbiAgc29ydGFibGVzLnB1c2godGhpcy5lbCk7XG5cbiAgLy8gUmVzdG9yZSBzb3J0aW5nXG4gIG9wdGlvbnMuc3RvcmUgJiYgb3B0aW9ucy5zdG9yZS5nZXQgJiYgdGhpcy5zb3J0KG9wdGlvbnMuc3RvcmUuZ2V0KHRoaXMpIHx8IFtdKTtcblxuICAvLyBBZGQgYW5pbWF0aW9uIHN0YXRlIG1hbmFnZXJcbiAgX2V4dGVuZHModGhpcywgQW5pbWF0aW9uU3RhdGVNYW5hZ2VyKCkpO1xufVxuU29ydGFibGUucHJvdG90eXBlID0gLyoqIEBsZW5kcyBTb3J0YWJsZS5wcm90b3R5cGUgKi97XG4gIGNvbnN0cnVjdG9yOiBTb3J0YWJsZSxcbiAgX2lzT3V0c2lkZVRoaXNFbDogZnVuY3Rpb24gX2lzT3V0c2lkZVRoaXNFbCh0YXJnZXQpIHtcbiAgICBpZiAoIXRoaXMuZWwuY29udGFpbnModGFyZ2V0KSAmJiB0YXJnZXQgIT09IHRoaXMuZWwpIHtcbiAgICAgIGxhc3RUYXJnZXQgPSBudWxsO1xuICAgIH1cbiAgfSxcbiAgX2dldERpcmVjdGlvbjogZnVuY3Rpb24gX2dldERpcmVjdGlvbihldnQsIHRhcmdldCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5vcHRpb25zLmRpcmVjdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMub3B0aW9ucy5kaXJlY3Rpb24uY2FsbCh0aGlzLCBldnQsIHRhcmdldCwgZHJhZ0VsKSA6IHRoaXMub3B0aW9ucy5kaXJlY3Rpb247XG4gIH0sXG4gIF9vblRhcFN0YXJ0OiBmdW5jdGlvbiBfb25UYXBTdGFydCggLyoqIEV2ZW50fFRvdWNoRXZlbnQgKi9ldnQpIHtcbiAgICBpZiAoIWV2dC5jYW5jZWxhYmxlKSByZXR1cm47XG4gICAgdmFyIF90aGlzID0gdGhpcyxcbiAgICAgIGVsID0gdGhpcy5lbCxcbiAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICBwcmV2ZW50T25GaWx0ZXIgPSBvcHRpb25zLnByZXZlbnRPbkZpbHRlcixcbiAgICAgIHR5cGUgPSBldnQudHlwZSxcbiAgICAgIHRvdWNoID0gZXZ0LnRvdWNoZXMgJiYgZXZ0LnRvdWNoZXNbMF0gfHwgZXZ0LnBvaW50ZXJUeXBlICYmIGV2dC5wb2ludGVyVHlwZSA9PT0gJ3RvdWNoJyAmJiBldnQsXG4gICAgICB0YXJnZXQgPSAodG91Y2ggfHwgZXZ0KS50YXJnZXQsXG4gICAgICBvcmlnaW5hbFRhcmdldCA9IGV2dC50YXJnZXQuc2hhZG93Um9vdCAmJiAoZXZ0LnBhdGggJiYgZXZ0LnBhdGhbMF0gfHwgZXZ0LmNvbXBvc2VkUGF0aCAmJiBldnQuY29tcG9zZWRQYXRoKClbMF0pIHx8IHRhcmdldCxcbiAgICAgIGZpbHRlciA9IG9wdGlvbnMuZmlsdGVyO1xuICAgIF9zYXZlSW5wdXRDaGVja2VkU3RhdGUoZWwpO1xuXG4gICAgLy8gRG9uJ3QgdHJpZ2dlciBzdGFydCBldmVudCB3aGVuIGFuIGVsZW1lbnQgaXMgYmVlbiBkcmFnZ2VkLCBvdGhlcndpc2UgdGhlIGV2dC5vbGRpbmRleCBhbHdheXMgd3Jvbmcgd2hlbiBzZXQgb3B0aW9uLmdyb3VwLlxuICAgIGlmIChkcmFnRWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKC9tb3VzZWRvd258cG9pbnRlcmRvd24vLnRlc3QodHlwZSkgJiYgZXZ0LmJ1dHRvbiAhPT0gMCB8fCBvcHRpb25zLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47IC8vIG9ubHkgbGVmdCBidXR0b24gYW5kIGVuYWJsZWRcbiAgICB9XG5cbiAgICAvLyBjYW5jZWwgZG5kIGlmIG9yaWdpbmFsIHRhcmdldCBpcyBjb250ZW50IGVkaXRhYmxlXG4gICAgaWYgKG9yaWdpbmFsVGFyZ2V0LmlzQ29udGVudEVkaXRhYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU2FmYXJpIGlnbm9yZXMgZnVydGhlciBldmVudCBoYW5kbGluZyBhZnRlciBtb3VzZWRvd25cbiAgICBpZiAoIXRoaXMubmF0aXZlRHJhZ2dhYmxlICYmIFNhZmFyaSAmJiB0YXJnZXQgJiYgdGFyZ2V0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGFyZ2V0ID0gY2xvc2VzdCh0YXJnZXQsIG9wdGlvbnMuZHJhZ2dhYmxlLCBlbCwgZmFsc2UpO1xuICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmFuaW1hdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChsYXN0RG93bkVsID09PSB0YXJnZXQpIHtcbiAgICAgIC8vIElnbm9yaW5nIGR1cGxpY2F0ZSBgZG93bmBcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBHZXQgdGhlIGluZGV4IG9mIHRoZSBkcmFnZ2VkIGVsZW1lbnQgd2l0aGluIGl0cyBwYXJlbnRcbiAgICBvbGRJbmRleCA9IGluZGV4KHRhcmdldCk7XG4gICAgb2xkRHJhZ2dhYmxlSW5kZXggPSBpbmRleCh0YXJnZXQsIG9wdGlvbnMuZHJhZ2dhYmxlKTtcblxuICAgIC8vIENoZWNrIGZpbHRlclxuICAgIGlmICh0eXBlb2YgZmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoZmlsdGVyLmNhbGwodGhpcywgZXZ0LCB0YXJnZXQsIHRoaXMpKSB7XG4gICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICBzb3J0YWJsZTogX3RoaXMsXG4gICAgICAgICAgcm9vdEVsOiBvcmlnaW5hbFRhcmdldCxcbiAgICAgICAgICBuYW1lOiAnZmlsdGVyJyxcbiAgICAgICAgICB0YXJnZXRFbDogdGFyZ2V0LFxuICAgICAgICAgIHRvRWw6IGVsLFxuICAgICAgICAgIGZyb21FbDogZWxcbiAgICAgICAgfSk7XG4gICAgICAgIHBsdWdpbkV2ZW50KCdmaWx0ZXInLCBfdGhpcywge1xuICAgICAgICAgIGV2dDogZXZ0XG4gICAgICAgIH0pO1xuICAgICAgICBwcmV2ZW50T25GaWx0ZXIgJiYgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjsgLy8gY2FuY2VsIGRuZFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZmlsdGVyKSB7XG4gICAgICBmaWx0ZXIgPSBmaWx0ZXIuc3BsaXQoJywnKS5zb21lKGZ1bmN0aW9uIChjcml0ZXJpYSkge1xuICAgICAgICBjcml0ZXJpYSA9IGNsb3Nlc3Qob3JpZ2luYWxUYXJnZXQsIGNyaXRlcmlhLnRyaW0oKSwgZWwsIGZhbHNlKTtcbiAgICAgICAgaWYgKGNyaXRlcmlhKSB7XG4gICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgc29ydGFibGU6IF90aGlzLFxuICAgICAgICAgICAgcm9vdEVsOiBjcml0ZXJpYSxcbiAgICAgICAgICAgIG5hbWU6ICdmaWx0ZXInLFxuICAgICAgICAgICAgdGFyZ2V0RWw6IHRhcmdldCxcbiAgICAgICAgICAgIGZyb21FbDogZWwsXG4gICAgICAgICAgICB0b0VsOiBlbFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHBsdWdpbkV2ZW50KCdmaWx0ZXInLCBfdGhpcywge1xuICAgICAgICAgICAgZXZ0OiBldnRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgIHByZXZlbnRPbkZpbHRlciAmJiBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuOyAvLyBjYW5jZWwgZG5kXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmhhbmRsZSAmJiAhY2xvc2VzdChvcmlnaW5hbFRhcmdldCwgb3B0aW9ucy5oYW5kbGUsIGVsLCBmYWxzZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBQcmVwYXJlIGBkcmFnc3RhcnRgXG4gICAgdGhpcy5fcHJlcGFyZURyYWdTdGFydChldnQsIHRvdWNoLCB0YXJnZXQpO1xuICB9LFxuICBfcHJlcGFyZURyYWdTdGFydDogZnVuY3Rpb24gX3ByZXBhcmVEcmFnU3RhcnQoIC8qKiBFdmVudCAqL2V2dCwgLyoqIFRvdWNoICovdG91Y2gsIC8qKiBIVE1MRWxlbWVudCAqL3RhcmdldCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICBlbCA9IF90aGlzLmVsLFxuICAgICAgb3B0aW9ucyA9IF90aGlzLm9wdGlvbnMsXG4gICAgICBvd25lckRvY3VtZW50ID0gZWwub3duZXJEb2N1bWVudCxcbiAgICAgIGRyYWdTdGFydEZuO1xuICAgIGlmICh0YXJnZXQgJiYgIWRyYWdFbCAmJiB0YXJnZXQucGFyZW50Tm9kZSA9PT0gZWwpIHtcbiAgICAgIHZhciBkcmFnUmVjdCA9IGdldFJlY3QodGFyZ2V0KTtcbiAgICAgIHJvb3RFbCA9IGVsO1xuICAgICAgZHJhZ0VsID0gdGFyZ2V0O1xuICAgICAgcGFyZW50RWwgPSBkcmFnRWwucGFyZW50Tm9kZTtcbiAgICAgIG5leHRFbCA9IGRyYWdFbC5uZXh0U2libGluZztcbiAgICAgIGxhc3REb3duRWwgPSB0YXJnZXQ7XG4gICAgICBhY3RpdmVHcm91cCA9IG9wdGlvbnMuZ3JvdXA7XG4gICAgICBTb3J0YWJsZS5kcmFnZ2VkID0gZHJhZ0VsO1xuICAgICAgdGFwRXZ0ID0ge1xuICAgICAgICB0YXJnZXQ6IGRyYWdFbCxcbiAgICAgICAgY2xpZW50WDogKHRvdWNoIHx8IGV2dCkuY2xpZW50WCxcbiAgICAgICAgY2xpZW50WTogKHRvdWNoIHx8IGV2dCkuY2xpZW50WVxuICAgICAgfTtcbiAgICAgIHRhcERpc3RhbmNlTGVmdCA9IHRhcEV2dC5jbGllbnRYIC0gZHJhZ1JlY3QubGVmdDtcbiAgICAgIHRhcERpc3RhbmNlVG9wID0gdGFwRXZ0LmNsaWVudFkgLSBkcmFnUmVjdC50b3A7XG4gICAgICB0aGlzLl9sYXN0WCA9ICh0b3VjaCB8fCBldnQpLmNsaWVudFg7XG4gICAgICB0aGlzLl9sYXN0WSA9ICh0b3VjaCB8fCBldnQpLmNsaWVudFk7XG4gICAgICBkcmFnRWwuc3R5bGVbJ3dpbGwtY2hhbmdlJ10gPSAnYWxsJztcbiAgICAgIGRyYWdTdGFydEZuID0gZnVuY3Rpb24gZHJhZ1N0YXJ0Rm4oKSB7XG4gICAgICAgIHBsdWdpbkV2ZW50KCdkZWxheUVuZGVkJywgX3RoaXMsIHtcbiAgICAgICAgICBldnQ6IGV2dFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKFNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHtcbiAgICAgICAgICBfdGhpcy5fb25Ecm9wKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIERlbGF5ZWQgZHJhZyBoYXMgYmVlbiB0cmlnZ2VyZWRcbiAgICAgICAgLy8gd2UgY2FuIHJlLWVuYWJsZSB0aGUgZXZlbnRzOiB0b3VjaG1vdmUvbW91c2Vtb3ZlXG4gICAgICAgIF90aGlzLl9kaXNhYmxlRGVsYXllZERyYWdFdmVudHMoKTtcbiAgICAgICAgaWYgKCFGaXJlRm94ICYmIF90aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgICAgICAgIGRyYWdFbC5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmluZCB0aGUgZXZlbnRzOiBkcmFnc3RhcnQvZHJhZ2VuZFxuICAgICAgICBfdGhpcy5fdHJpZ2dlckRyYWdTdGFydChldnQsIHRvdWNoKTtcblxuICAgICAgICAvLyBEcmFnIHN0YXJ0IGV2ZW50XG4gICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICBzb3J0YWJsZTogX3RoaXMsXG4gICAgICAgICAgbmFtZTogJ2Nob29zZScsXG4gICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENob3NlbiBpdGVtXG4gICAgICAgIHRvZ2dsZUNsYXNzKGRyYWdFbCwgb3B0aW9ucy5jaG9zZW5DbGFzcywgdHJ1ZSk7XG4gICAgICB9O1xuXG4gICAgICAvLyBEaXNhYmxlIFwiZHJhZ2dhYmxlXCJcbiAgICAgIG9wdGlvbnMuaWdub3JlLnNwbGl0KCcsJykuZm9yRWFjaChmdW5jdGlvbiAoY3JpdGVyaWEpIHtcbiAgICAgICAgZmluZChkcmFnRWwsIGNyaXRlcmlhLnRyaW0oKSwgX2Rpc2FibGVEcmFnZ2FibGUpO1xuICAgICAgfSk7XG4gICAgICBvbihvd25lckRvY3VtZW50LCAnZHJhZ292ZXInLCBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudCk7XG4gICAgICBvbihvd25lckRvY3VtZW50LCAnbW91c2Vtb3ZlJywgbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQpO1xuICAgICAgb24ob3duZXJEb2N1bWVudCwgJ3RvdWNobW92ZScsIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50KTtcbiAgICAgIGlmIChvcHRpb25zLnN1cHBvcnRQb2ludGVyKSB7XG4gICAgICAgIG9uKG93bmVyRG9jdW1lbnQsICdwb2ludGVydXAnLCBfdGhpcy5fb25Ecm9wKTtcbiAgICAgICAgLy8gTmF0aXZlIEQmRCB0cmlnZ2VycyBwb2ludGVyY2FuY2VsXG4gICAgICAgICF0aGlzLm5hdGl2ZURyYWdnYWJsZSAmJiBvbihvd25lckRvY3VtZW50LCAncG9pbnRlcmNhbmNlbCcsIF90aGlzLl9vbkRyb3ApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb24ob3duZXJEb2N1bWVudCwgJ21vdXNldXAnLCBfdGhpcy5fb25Ecm9wKTtcbiAgICAgICAgb24ob3duZXJEb2N1bWVudCwgJ3RvdWNoZW5kJywgX3RoaXMuX29uRHJvcCk7XG4gICAgICAgIG9uKG93bmVyRG9jdW1lbnQsICd0b3VjaGNhbmNlbCcsIF90aGlzLl9vbkRyb3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBNYWtlIGRyYWdFbCBkcmFnZ2FibGUgKG11c3QgYmUgYmVmb3JlIGRlbGF5IGZvciBGaXJlRm94KVxuICAgICAgaWYgKEZpcmVGb3ggJiYgdGhpcy5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnRvdWNoU3RhcnRUaHJlc2hvbGQgPSA0O1xuICAgICAgICBkcmFnRWwuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHBsdWdpbkV2ZW50KCdkZWxheVN0YXJ0JywgdGhpcywge1xuICAgICAgICBldnQ6IGV2dFxuICAgICAgfSk7XG5cbiAgICAgIC8vIERlbGF5IGlzIGltcG9zc2libGUgZm9yIG5hdGl2ZSBEbkQgaW4gRWRnZSBvciBJRVxuICAgICAgaWYgKG9wdGlvbnMuZGVsYXkgJiYgKCFvcHRpb25zLmRlbGF5T25Ub3VjaE9ubHkgfHwgdG91Y2gpICYmICghdGhpcy5uYXRpdmVEcmFnZ2FibGUgfHwgIShFZGdlIHx8IElFMTFPckxlc3MpKSkge1xuICAgICAgICBpZiAoU29ydGFibGUuZXZlbnRDYW5jZWxlZCkge1xuICAgICAgICAgIHRoaXMuX29uRHJvcCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXNlciBtb3ZlcyB0aGUgcG9pbnRlciBvciBsZXQgZ28gdGhlIGNsaWNrIG9yIHRvdWNoXG4gICAgICAgIC8vIGJlZm9yZSB0aGUgZGVsYXkgaGFzIGJlZW4gcmVhY2hlZDpcbiAgICAgICAgLy8gZGlzYWJsZSB0aGUgZGVsYXllZCBkcmFnXG4gICAgICAgIGlmIChvcHRpb25zLnN1cHBvcnRQb2ludGVyKSB7XG4gICAgICAgICAgb24ob3duZXJEb2N1bWVudCwgJ3BvaW50ZXJ1cCcsIF90aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xuICAgICAgICAgIG9uKG93bmVyRG9jdW1lbnQsICdwb2ludGVyY2FuY2VsJywgX3RoaXMuX2Rpc2FibGVEZWxheWVkRHJhZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb24ob3duZXJEb2N1bWVudCwgJ21vdXNldXAnLCBfdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICAgICAgICBvbihvd25lckRvY3VtZW50LCAndG91Y2hlbmQnLCBfdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICAgICAgICBvbihvd25lckRvY3VtZW50LCAndG91Y2hjYW5jZWwnLCBfdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICAgICAgfVxuICAgICAgICBvbihvd25lckRvY3VtZW50LCAnbW91c2Vtb3ZlJywgX3RoaXMuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcik7XG4gICAgICAgIG9uKG93bmVyRG9jdW1lbnQsICd0b3VjaG1vdmUnLCBfdGhpcy5fZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKTtcbiAgICAgICAgb3B0aW9ucy5zdXBwb3J0UG9pbnRlciAmJiBvbihvd25lckRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCBfdGhpcy5fZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKTtcbiAgICAgICAgX3RoaXMuX2RyYWdTdGFydFRpbWVyID0gc2V0VGltZW91dChkcmFnU3RhcnRGbiwgb3B0aW9ucy5kZWxheSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnU3RhcnRGbigpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcjogZnVuY3Rpb24gX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlciggLyoqIFRvdWNoRXZlbnR8UG9pbnRlckV2ZW50ICoqL2UpIHtcbiAgICB2YXIgdG91Y2ggPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0gOiBlO1xuICAgIGlmIChNYXRoLm1heChNYXRoLmFicyh0b3VjaC5jbGllbnRYIC0gdGhpcy5fbGFzdFgpLCBNYXRoLmFicyh0b3VjaC5jbGllbnRZIC0gdGhpcy5fbGFzdFkpKSA+PSBNYXRoLmZsb29yKHRoaXMub3B0aW9ucy50b3VjaFN0YXJ0VGhyZXNob2xkIC8gKHRoaXMubmF0aXZlRHJhZ2dhYmxlICYmIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpKSkge1xuICAgICAgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKCk7XG4gICAgfVxuICB9LFxuICBfZGlzYWJsZURlbGF5ZWREcmFnOiBmdW5jdGlvbiBfZGlzYWJsZURlbGF5ZWREcmFnKCkge1xuICAgIGRyYWdFbCAmJiBfZGlzYWJsZURyYWdnYWJsZShkcmFnRWwpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl9kcmFnU3RhcnRUaW1lcik7XG4gICAgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnRXZlbnRzKCk7XG4gIH0sXG4gIF9kaXNhYmxlRGVsYXllZERyYWdFdmVudHM6IGZ1bmN0aW9uIF9kaXNhYmxlRGVsYXllZERyYWdFdmVudHMoKSB7XG4gICAgdmFyIG93bmVyRG9jdW1lbnQgPSB0aGlzLmVsLm93bmVyRG9jdW1lbnQ7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICdtb3VzZXVwJywgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ3RvdWNoZW5kJywgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ3RvdWNoY2FuY2VsJywgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ3BvaW50ZXJ1cCcsIHRoaXMuX2Rpc2FibGVEZWxheWVkRHJhZyk7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICdwb2ludGVyY2FuY2VsJywgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ21vdXNlbW92ZScsIHRoaXMuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcik7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICd0b3VjaG1vdmUnLCB0aGlzLl9kZWxheWVkRHJhZ1RvdWNoTW92ZUhhbmRsZXIpO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCB0aGlzLl9kZWxheWVkRHJhZ1RvdWNoTW92ZUhhbmRsZXIpO1xuICB9LFxuICBfdHJpZ2dlckRyYWdTdGFydDogZnVuY3Rpb24gX3RyaWdnZXJEcmFnU3RhcnQoIC8qKiBFdmVudCAqL2V2dCwgLyoqIFRvdWNoICovdG91Y2gpIHtcbiAgICB0b3VjaCA9IHRvdWNoIHx8IGV2dC5wb2ludGVyVHlwZSA9PSAndG91Y2gnICYmIGV2dDtcbiAgICBpZiAoIXRoaXMubmF0aXZlRHJhZ2dhYmxlIHx8IHRvdWNoKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnN1cHBvcnRQb2ludGVyKSB7XG4gICAgICAgIG9uKGRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgICB9IGVsc2UgaWYgKHRvdWNoKSB7XG4gICAgICAgIG9uKGRvY3VtZW50LCAndG91Y2htb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb24oZG9jdW1lbnQsICdtb3VzZW1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uKGRyYWdFbCwgJ2RyYWdlbmQnLCB0aGlzKTtcbiAgICAgIG9uKHJvb3RFbCwgJ2RyYWdzdGFydCcsIHRoaXMuX29uRHJhZ1N0YXJ0KTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGlmIChkb2N1bWVudC5zZWxlY3Rpb24pIHtcbiAgICAgICAgX25leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkb2N1bWVudC5zZWxlY3Rpb24uZW1wdHkoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7fVxuICB9LFxuICBfZHJhZ1N0YXJ0ZWQ6IGZ1bmN0aW9uIF9kcmFnU3RhcnRlZChmYWxsYmFjaywgZXZ0KSB7XG4gICAgYXdhaXRpbmdEcmFnU3RhcnRlZCA9IGZhbHNlO1xuICAgIGlmIChyb290RWwgJiYgZHJhZ0VsKSB7XG4gICAgICBwbHVnaW5FdmVudCgnZHJhZ1N0YXJ0ZWQnLCB0aGlzLCB7XG4gICAgICAgIGV2dDogZXZ0XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgICAgICBvbihkb2N1bWVudCwgJ2RyYWdvdmVyJywgX2NoZWNrT3V0c2lkZVRhcmdldEVsKTtcbiAgICAgIH1cbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICAvLyBBcHBseSBlZmZlY3RcbiAgICAgICFmYWxsYmFjayAmJiB0b2dnbGVDbGFzcyhkcmFnRWwsIG9wdGlvbnMuZHJhZ0NsYXNzLCBmYWxzZSk7XG4gICAgICB0b2dnbGVDbGFzcyhkcmFnRWwsIG9wdGlvbnMuZ2hvc3RDbGFzcywgdHJ1ZSk7XG4gICAgICBTb3J0YWJsZS5hY3RpdmUgPSB0aGlzO1xuICAgICAgZmFsbGJhY2sgJiYgdGhpcy5fYXBwZW5kR2hvc3QoKTtcblxuICAgICAgLy8gRHJhZyBzdGFydCBldmVudFxuICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgbmFtZTogJ3N0YXJ0JyxcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbnVsbGluZygpO1xuICAgIH1cbiAgfSxcbiAgX2VtdWxhdGVEcmFnT3ZlcjogZnVuY3Rpb24gX2VtdWxhdGVEcmFnT3ZlcigpIHtcbiAgICBpZiAodG91Y2hFdnQpIHtcbiAgICAgIHRoaXMuX2xhc3RYID0gdG91Y2hFdnQuY2xpZW50WDtcbiAgICAgIHRoaXMuX2xhc3RZID0gdG91Y2hFdnQuY2xpZW50WTtcbiAgICAgIF9oaWRlR2hvc3RGb3JUYXJnZXQoKTtcbiAgICAgIHZhciB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHRvdWNoRXZ0LmNsaWVudFgsIHRvdWNoRXZ0LmNsaWVudFkpO1xuICAgICAgdmFyIHBhcmVudCA9IHRhcmdldDtcbiAgICAgIHdoaWxlICh0YXJnZXQgJiYgdGFyZ2V0LnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnNoYWRvd1Jvb3QuZWxlbWVudEZyb21Qb2ludCh0b3VjaEV2dC5jbGllbnRYLCB0b3VjaEV2dC5jbGllbnRZKTtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gcGFyZW50KSBicmVhaztcbiAgICAgICAgcGFyZW50ID0gdGFyZ2V0O1xuICAgICAgfVxuICAgICAgZHJhZ0VsLnBhcmVudE5vZGVbZXhwYW5kb10uX2lzT3V0c2lkZVRoaXNFbCh0YXJnZXQpO1xuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICBkbyB7XG4gICAgICAgICAgaWYgKHBhcmVudFtleHBhbmRvXSkge1xuICAgICAgICAgICAgdmFyIGluc2VydGVkID0gdm9pZCAwO1xuICAgICAgICAgICAgaW5zZXJ0ZWQgPSBwYXJlbnRbZXhwYW5kb10uX29uRHJhZ092ZXIoe1xuICAgICAgICAgICAgICBjbGllbnRYOiB0b3VjaEV2dC5jbGllbnRYLFxuICAgICAgICAgICAgICBjbGllbnRZOiB0b3VjaEV2dC5jbGllbnRZLFxuICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgcm9vdEVsOiBwYXJlbnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGluc2VydGVkICYmICF0aGlzLm9wdGlvbnMuZHJhZ292ZXJCdWJibGUpIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRhcmdldCA9IHBhcmVudDsgLy8gc3RvcmUgbGFzdCBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgLyoganNoaW50IGJvc3M6dHJ1ZSAqLyB3aGlsZSAocGFyZW50ID0gZ2V0UGFyZW50T3JIb3N0KHBhcmVudCkpO1xuICAgICAgfVxuICAgICAgX3VuaGlkZUdob3N0Rm9yVGFyZ2V0KCk7XG4gICAgfVxuICB9LFxuICBfb25Ub3VjaE1vdmU6IGZ1bmN0aW9uIF9vblRvdWNoTW92ZSggLyoqVG91Y2hFdmVudCovZXZ0KSB7XG4gICAgaWYgKHRhcEV2dCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIGZhbGxiYWNrVG9sZXJhbmNlID0gb3B0aW9ucy5mYWxsYmFja1RvbGVyYW5jZSxcbiAgICAgICAgZmFsbGJhY2tPZmZzZXQgPSBvcHRpb25zLmZhbGxiYWNrT2Zmc2V0LFxuICAgICAgICB0b3VjaCA9IGV2dC50b3VjaGVzID8gZXZ0LnRvdWNoZXNbMF0gOiBldnQsXG4gICAgICAgIGdob3N0TWF0cml4ID0gZ2hvc3RFbCAmJiBtYXRyaXgoZ2hvc3RFbCwgdHJ1ZSksXG4gICAgICAgIHNjYWxlWCA9IGdob3N0RWwgJiYgZ2hvc3RNYXRyaXggJiYgZ2hvc3RNYXRyaXguYSxcbiAgICAgICAgc2NhbGVZID0gZ2hvc3RFbCAmJiBnaG9zdE1hdHJpeCAmJiBnaG9zdE1hdHJpeC5kLFxuICAgICAgICByZWxhdGl2ZVNjcm9sbE9mZnNldCA9IFBvc2l0aW9uR2hvc3RBYnNvbHV0ZWx5ICYmIGdob3N0UmVsYXRpdmVQYXJlbnQgJiYgZ2V0UmVsYXRpdmVTY3JvbGxPZmZzZXQoZ2hvc3RSZWxhdGl2ZVBhcmVudCksXG4gICAgICAgIGR4ID0gKHRvdWNoLmNsaWVudFggLSB0YXBFdnQuY2xpZW50WCArIGZhbGxiYWNrT2Zmc2V0LngpIC8gKHNjYWxlWCB8fCAxKSArIChyZWxhdGl2ZVNjcm9sbE9mZnNldCA/IHJlbGF0aXZlU2Nyb2xsT2Zmc2V0WzBdIC0gZ2hvc3RSZWxhdGl2ZVBhcmVudEluaXRpYWxTY3JvbGxbMF0gOiAwKSAvIChzY2FsZVggfHwgMSksXG4gICAgICAgIGR5ID0gKHRvdWNoLmNsaWVudFkgLSB0YXBFdnQuY2xpZW50WSArIGZhbGxiYWNrT2Zmc2V0LnkpIC8gKHNjYWxlWSB8fCAxKSArIChyZWxhdGl2ZVNjcm9sbE9mZnNldCA/IHJlbGF0aXZlU2Nyb2xsT2Zmc2V0WzFdIC0gZ2hvc3RSZWxhdGl2ZVBhcmVudEluaXRpYWxTY3JvbGxbMV0gOiAwKSAvIChzY2FsZVkgfHwgMSk7XG5cbiAgICAgIC8vIG9ubHkgc2V0IHRoZSBzdGF0dXMgdG8gZHJhZ2dpbmcsIHdoZW4gd2UgYXJlIGFjdHVhbGx5IGRyYWdnaW5nXG4gICAgICBpZiAoIVNvcnRhYmxlLmFjdGl2ZSAmJiAhYXdhaXRpbmdEcmFnU3RhcnRlZCkge1xuICAgICAgICBpZiAoZmFsbGJhY2tUb2xlcmFuY2UgJiYgTWF0aC5tYXgoTWF0aC5hYnModG91Y2guY2xpZW50WCAtIHRoaXMuX2xhc3RYKSwgTWF0aC5hYnModG91Y2guY2xpZW50WSAtIHRoaXMuX2xhc3RZKSkgPCBmYWxsYmFja1RvbGVyYW5jZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vbkRyYWdTdGFydChldnQsIHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKGdob3N0RWwpIHtcbiAgICAgICAgaWYgKGdob3N0TWF0cml4KSB7XG4gICAgICAgICAgZ2hvc3RNYXRyaXguZSArPSBkeCAtIChsYXN0RHggfHwgMCk7XG4gICAgICAgICAgZ2hvc3RNYXRyaXguZiArPSBkeSAtIChsYXN0RHkgfHwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2hvc3RNYXRyaXggPSB7XG4gICAgICAgICAgICBhOiAxLFxuICAgICAgICAgICAgYjogMCxcbiAgICAgICAgICAgIGM6IDAsXG4gICAgICAgICAgICBkOiAxLFxuICAgICAgICAgICAgZTogZHgsXG4gICAgICAgICAgICBmOiBkeVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNzc01hdHJpeCA9IFwibWF0cml4KFwiLmNvbmNhdChnaG9zdE1hdHJpeC5hLCBcIixcIikuY29uY2F0KGdob3N0TWF0cml4LmIsIFwiLFwiKS5jb25jYXQoZ2hvc3RNYXRyaXguYywgXCIsXCIpLmNvbmNhdChnaG9zdE1hdHJpeC5kLCBcIixcIikuY29uY2F0KGdob3N0TWF0cml4LmUsIFwiLFwiKS5jb25jYXQoZ2hvc3RNYXRyaXguZiwgXCIpXCIpO1xuICAgICAgICBjc3MoZ2hvc3RFbCwgJ3dlYmtpdFRyYW5zZm9ybScsIGNzc01hdHJpeCk7XG4gICAgICAgIGNzcyhnaG9zdEVsLCAnbW96VHJhbnNmb3JtJywgY3NzTWF0cml4KTtcbiAgICAgICAgY3NzKGdob3N0RWwsICdtc1RyYW5zZm9ybScsIGNzc01hdHJpeCk7XG4gICAgICAgIGNzcyhnaG9zdEVsLCAndHJhbnNmb3JtJywgY3NzTWF0cml4KTtcbiAgICAgICAgbGFzdER4ID0gZHg7XG4gICAgICAgIGxhc3REeSA9IGR5O1xuICAgICAgICB0b3VjaEV2dCA9IHRvdWNoO1xuICAgICAgfVxuICAgICAgZXZ0LmNhbmNlbGFibGUgJiYgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9LFxuICBfYXBwZW5kR2hvc3Q6IGZ1bmN0aW9uIF9hcHBlbmRHaG9zdCgpIHtcbiAgICAvLyBCdWcgaWYgdXNpbmcgc2NhbGUoKTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjYzNzA1OFxuICAgIC8vIE5vdCBiZWluZyBhZGp1c3RlZCBmb3JcbiAgICBpZiAoIWdob3N0RWwpIHtcbiAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLm9wdGlvbnMuZmFsbGJhY2tPbkJvZHkgPyBkb2N1bWVudC5ib2R5IDogcm9vdEVsLFxuICAgICAgICByZWN0ID0gZ2V0UmVjdChkcmFnRWwsIHRydWUsIFBvc2l0aW9uR2hvc3RBYnNvbHV0ZWx5LCB0cnVlLCBjb250YWluZXIpLFxuICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICAvLyBQb3NpdGlvbiBhYnNvbHV0ZWx5XG4gICAgICBpZiAoUG9zaXRpb25HaG9zdEFic29sdXRlbHkpIHtcbiAgICAgICAgLy8gR2V0IHJlbGF0aXZlbHkgcG9zaXRpb25lZCBwYXJlbnRcbiAgICAgICAgZ2hvc3RSZWxhdGl2ZVBhcmVudCA9IGNvbnRhaW5lcjtcbiAgICAgICAgd2hpbGUgKGNzcyhnaG9zdFJlbGF0aXZlUGFyZW50LCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycgJiYgY3NzKGdob3N0UmVsYXRpdmVQYXJlbnQsICd0cmFuc2Zvcm0nKSA9PT0gJ25vbmUnICYmIGdob3N0UmVsYXRpdmVQYXJlbnQgIT09IGRvY3VtZW50KSB7XG4gICAgICAgICAgZ2hvc3RSZWxhdGl2ZVBhcmVudCA9IGdob3N0UmVsYXRpdmVQYXJlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2hvc3RSZWxhdGl2ZVBhcmVudCAhPT0gZG9jdW1lbnQuYm9keSAmJiBnaG9zdFJlbGF0aXZlUGFyZW50ICE9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgICBpZiAoZ2hvc3RSZWxhdGl2ZVBhcmVudCA9PT0gZG9jdW1lbnQpIGdob3N0UmVsYXRpdmVQYXJlbnQgPSBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCk7XG4gICAgICAgICAgcmVjdC50b3AgKz0gZ2hvc3RSZWxhdGl2ZVBhcmVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgcmVjdC5sZWZ0ICs9IGdob3N0UmVsYXRpdmVQYXJlbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnaG9zdFJlbGF0aXZlUGFyZW50ID0gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGdob3N0UmVsYXRpdmVQYXJlbnRJbml0aWFsU2Nyb2xsID0gZ2V0UmVsYXRpdmVTY3JvbGxPZmZzZXQoZ2hvc3RSZWxhdGl2ZVBhcmVudCk7XG4gICAgICB9XG4gICAgICBnaG9zdEVsID0gZHJhZ0VsLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIHRvZ2dsZUNsYXNzKGdob3N0RWwsIG9wdGlvbnMuZ2hvc3RDbGFzcywgZmFsc2UpO1xuICAgICAgdG9nZ2xlQ2xhc3MoZ2hvc3RFbCwgb3B0aW9ucy5mYWxsYmFja0NsYXNzLCB0cnVlKTtcbiAgICAgIHRvZ2dsZUNsYXNzKGdob3N0RWwsIG9wdGlvbnMuZHJhZ0NsYXNzLCB0cnVlKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAndHJhbnNpdGlvbicsICcnKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAndHJhbnNmb3JtJywgJycpO1xuICAgICAgY3NzKGdob3N0RWwsICdib3gtc2l6aW5nJywgJ2JvcmRlci1ib3gnKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAnbWFyZ2luJywgMCk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ3RvcCcsIHJlY3QudG9wKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAnbGVmdCcsIHJlY3QubGVmdCk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ3dpZHRoJywgcmVjdC53aWR0aCk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ2hlaWdodCcsIHJlY3QuaGVpZ2h0KTtcbiAgICAgIGNzcyhnaG9zdEVsLCAnb3BhY2l0eScsICcwLjgnKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAncG9zaXRpb24nLCBQb3NpdGlvbkdob3N0QWJzb2x1dGVseSA/ICdhYnNvbHV0ZScgOiAnZml4ZWQnKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAnekluZGV4JywgJzEwMDAwMCcpO1xuICAgICAgY3NzKGdob3N0RWwsICdwb2ludGVyRXZlbnRzJywgJ25vbmUnKTtcbiAgICAgIFNvcnRhYmxlLmdob3N0ID0gZ2hvc3RFbDtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnaG9zdEVsKTtcblxuICAgICAgLy8gU2V0IHRyYW5zZm9ybS1vcmlnaW5cbiAgICAgIGNzcyhnaG9zdEVsLCAndHJhbnNmb3JtLW9yaWdpbicsIHRhcERpc3RhbmNlTGVmdCAvIHBhcnNlSW50KGdob3N0RWwuc3R5bGUud2lkdGgpICogMTAwICsgJyUgJyArIHRhcERpc3RhbmNlVG9wIC8gcGFyc2VJbnQoZ2hvc3RFbC5zdHlsZS5oZWlnaHQpICogMTAwICsgJyUnKTtcbiAgICB9XG4gIH0sXG4gIF9vbkRyYWdTdGFydDogZnVuY3Rpb24gX29uRHJhZ1N0YXJ0KCAvKipFdmVudCovZXZ0LCAvKipib29sZWFuKi9mYWxsYmFjaykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGRhdGFUcmFuc2ZlciA9IGV2dC5kYXRhVHJhbnNmZXI7XG4gICAgdmFyIG9wdGlvbnMgPSBfdGhpcy5vcHRpb25zO1xuICAgIHBsdWdpbkV2ZW50KCdkcmFnU3RhcnQnLCB0aGlzLCB7XG4gICAgICBldnQ6IGV2dFxuICAgIH0pO1xuICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSB7XG4gICAgICB0aGlzLl9vbkRyb3AoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcGx1Z2luRXZlbnQoJ3NldHVwQ2xvbmUnLCB0aGlzKTtcbiAgICBpZiAoIVNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHtcbiAgICAgIGNsb25lRWwgPSBjbG9uZShkcmFnRWwpO1xuICAgICAgY2xvbmVFbC5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICAgIGNsb25lRWwuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICBjbG9uZUVsLnN0eWxlWyd3aWxsLWNoYW5nZSddID0gJyc7XG4gICAgICB0aGlzLl9oaWRlQ2xvbmUoKTtcbiAgICAgIHRvZ2dsZUNsYXNzKGNsb25lRWwsIHRoaXMub3B0aW9ucy5jaG9zZW5DbGFzcywgZmFsc2UpO1xuICAgICAgU29ydGFibGUuY2xvbmUgPSBjbG9uZUVsO1xuICAgIH1cblxuICAgIC8vICMxMTQzOiBJRnJhbWUgc3VwcG9ydCB3b3JrYXJvdW5kXG4gICAgX3RoaXMuY2xvbmVJZCA9IF9uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBwbHVnaW5FdmVudCgnY2xvbmUnLCBfdGhpcyk7XG4gICAgICBpZiAoU29ydGFibGUuZXZlbnRDYW5jZWxlZCkgcmV0dXJuO1xuICAgICAgaWYgKCFfdGhpcy5vcHRpb25zLnJlbW92ZUNsb25lT25IaWRlKSB7XG4gICAgICAgIHJvb3RFbC5pbnNlcnRCZWZvcmUoY2xvbmVFbCwgZHJhZ0VsKTtcbiAgICAgIH1cbiAgICAgIF90aGlzLl9oaWRlQ2xvbmUoKTtcbiAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgc29ydGFibGU6IF90aGlzLFxuICAgICAgICBuYW1lOiAnY2xvbmUnXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAhZmFsbGJhY2sgJiYgdG9nZ2xlQ2xhc3MoZHJhZ0VsLCBvcHRpb25zLmRyYWdDbGFzcywgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgcHJvcGVyIGRyb3AgZXZlbnRzXG4gICAgaWYgKGZhbGxiYWNrKSB7XG4gICAgICBpZ25vcmVOZXh0Q2xpY2sgPSB0cnVlO1xuICAgICAgX3RoaXMuX2xvb3BJZCA9IHNldEludGVydmFsKF90aGlzLl9lbXVsYXRlRHJhZ092ZXIsIDUwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVW5kbyB3aGF0IHdhcyBzZXQgaW4gX3ByZXBhcmVEcmFnU3RhcnQgYmVmb3JlIGRyYWcgc3RhcnRlZFxuICAgICAgb2ZmKGRvY3VtZW50LCAnbW91c2V1cCcsIF90aGlzLl9vbkRyb3ApO1xuICAgICAgb2ZmKGRvY3VtZW50LCAndG91Y2hlbmQnLCBfdGhpcy5fb25Ecm9wKTtcbiAgICAgIG9mZihkb2N1bWVudCwgJ3RvdWNoY2FuY2VsJywgX3RoaXMuX29uRHJvcCk7XG4gICAgICBpZiAoZGF0YVRyYW5zZmVyKSB7XG4gICAgICAgIGRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnO1xuICAgICAgICBvcHRpb25zLnNldERhdGEgJiYgb3B0aW9ucy5zZXREYXRhLmNhbGwoX3RoaXMsIGRhdGFUcmFuc2ZlciwgZHJhZ0VsKTtcbiAgICAgIH1cbiAgICAgIG9uKGRvY3VtZW50LCAnZHJvcCcsIF90aGlzKTtcblxuICAgICAgLy8gIzEyNzYgZml4OlxuICAgICAgY3NzKGRyYWdFbCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVaKDApJyk7XG4gICAgfVxuICAgIGF3YWl0aW5nRHJhZ1N0YXJ0ZWQgPSB0cnVlO1xuICAgIF90aGlzLl9kcmFnU3RhcnRJZCA9IF9uZXh0VGljayhfdGhpcy5fZHJhZ1N0YXJ0ZWQuYmluZChfdGhpcywgZmFsbGJhY2ssIGV2dCkpO1xuICAgIG9uKGRvY3VtZW50LCAnc2VsZWN0c3RhcnQnLCBfdGhpcyk7XG4gICAgbW92ZWQgPSB0cnVlO1xuICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBpZiAoU2FmYXJpKSB7XG4gICAgICBjc3MoZG9jdW1lbnQuYm9keSwgJ3VzZXItc2VsZWN0JywgJ25vbmUnKTtcbiAgICB9XG4gIH0sXG4gIC8vIFJldHVybnMgdHJ1ZSAtIGlmIG5vIGZ1cnRoZXIgYWN0aW9uIGlzIG5lZWRlZCAoZWl0aGVyIGluc2VydGVkIG9yIGFub3RoZXIgY29uZGl0aW9uKVxuICBfb25EcmFnT3ZlcjogZnVuY3Rpb24gX29uRHJhZ092ZXIoIC8qKkV2ZW50Ki9ldnQpIHtcbiAgICB2YXIgZWwgPSB0aGlzLmVsLFxuICAgICAgdGFyZ2V0ID0gZXZ0LnRhcmdldCxcbiAgICAgIGRyYWdSZWN0LFxuICAgICAgdGFyZ2V0UmVjdCxcbiAgICAgIHJldmVydCxcbiAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICBncm91cCA9IG9wdGlvbnMuZ3JvdXAsXG4gICAgICBhY3RpdmVTb3J0YWJsZSA9IFNvcnRhYmxlLmFjdGl2ZSxcbiAgICAgIGlzT3duZXIgPSBhY3RpdmVHcm91cCA9PT0gZ3JvdXAsXG4gICAgICBjYW5Tb3J0ID0gb3B0aW9ucy5zb3J0LFxuICAgICAgZnJvbVNvcnRhYmxlID0gcHV0U29ydGFibGUgfHwgYWN0aXZlU29ydGFibGUsXG4gICAgICB2ZXJ0aWNhbCxcbiAgICAgIF90aGlzID0gdGhpcyxcbiAgICAgIGNvbXBsZXRlZEZpcmVkID0gZmFsc2U7XG4gICAgaWYgKF9zaWxlbnQpIHJldHVybjtcbiAgICBmdW5jdGlvbiBkcmFnT3ZlckV2ZW50KG5hbWUsIGV4dHJhKSB7XG4gICAgICBwbHVnaW5FdmVudChuYW1lLCBfdGhpcywgX29iamVjdFNwcmVhZDIoe1xuICAgICAgICBldnQ6IGV2dCxcbiAgICAgICAgaXNPd25lcjogaXNPd25lcixcbiAgICAgICAgYXhpczogdmVydGljYWwgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnLFxuICAgICAgICByZXZlcnQ6IHJldmVydCxcbiAgICAgICAgZHJhZ1JlY3Q6IGRyYWdSZWN0LFxuICAgICAgICB0YXJnZXRSZWN0OiB0YXJnZXRSZWN0LFxuICAgICAgICBjYW5Tb3J0OiBjYW5Tb3J0LFxuICAgICAgICBmcm9tU29ydGFibGU6IGZyb21Tb3J0YWJsZSxcbiAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgIGNvbXBsZXRlZDogY29tcGxldGVkLFxuICAgICAgICBvbk1vdmU6IGZ1bmN0aW9uIG9uTW92ZSh0YXJnZXQsIGFmdGVyKSB7XG4gICAgICAgICAgcmV0dXJuIF9vbk1vdmUocm9vdEVsLCBlbCwgZHJhZ0VsLCBkcmFnUmVjdCwgdGFyZ2V0LCBnZXRSZWN0KHRhcmdldCksIGV2dCwgYWZ0ZXIpO1xuICAgICAgICB9LFxuICAgICAgICBjaGFuZ2VkOiBjaGFuZ2VkXG4gICAgICB9LCBleHRyYSkpO1xuICAgIH1cblxuICAgIC8vIENhcHR1cmUgYW5pbWF0aW9uIHN0YXRlXG4gICAgZnVuY3Rpb24gY2FwdHVyZSgpIHtcbiAgICAgIGRyYWdPdmVyRXZlbnQoJ2RyYWdPdmVyQW5pbWF0aW9uQ2FwdHVyZScpO1xuICAgICAgX3RoaXMuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgICBpZiAoX3RoaXMgIT09IGZyb21Tb3J0YWJsZSkge1xuICAgICAgICBmcm9tU29ydGFibGUuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGludm9jYXRpb24gd2hlbiBkcmFnRWwgaXMgaW5zZXJ0ZWQgKG9yIGNvbXBsZXRlZClcbiAgICBmdW5jdGlvbiBjb21wbGV0ZWQoaW5zZXJ0aW9uKSB7XG4gICAgICBkcmFnT3ZlckV2ZW50KCdkcmFnT3ZlckNvbXBsZXRlZCcsIHtcbiAgICAgICAgaW5zZXJ0aW9uOiBpbnNlcnRpb25cbiAgICAgIH0pO1xuICAgICAgaWYgKGluc2VydGlvbikge1xuICAgICAgICAvLyBDbG9uZXMgbXVzdCBiZSBoaWRkZW4gYmVmb3JlIGZvbGRpbmcgYW5pbWF0aW9uIHRvIGNhcHR1cmUgZHJhZ1JlY3RBYnNvbHV0ZSBwcm9wZXJseVxuICAgICAgICBpZiAoaXNPd25lcikge1xuICAgICAgICAgIGFjdGl2ZVNvcnRhYmxlLl9oaWRlQ2xvbmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhY3RpdmVTb3J0YWJsZS5fc2hvd0Nsb25lKF90aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX3RoaXMgIT09IGZyb21Tb3J0YWJsZSkge1xuICAgICAgICAgIC8vIFNldCBnaG9zdCBjbGFzcyB0byBuZXcgc29ydGFibGUncyBnaG9zdCBjbGFzc1xuICAgICAgICAgIHRvZ2dsZUNsYXNzKGRyYWdFbCwgcHV0U29ydGFibGUgPyBwdXRTb3J0YWJsZS5vcHRpb25zLmdob3N0Q2xhc3MgOiBhY3RpdmVTb3J0YWJsZS5vcHRpb25zLmdob3N0Q2xhc3MsIGZhbHNlKTtcbiAgICAgICAgICB0b2dnbGVDbGFzcyhkcmFnRWwsIG9wdGlvbnMuZ2hvc3RDbGFzcywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHB1dFNvcnRhYmxlICE9PSBfdGhpcyAmJiBfdGhpcyAhPT0gU29ydGFibGUuYWN0aXZlKSB7XG4gICAgICAgICAgcHV0U29ydGFibGUgPSBfdGhpcztcbiAgICAgICAgfSBlbHNlIGlmIChfdGhpcyA9PT0gU29ydGFibGUuYWN0aXZlICYmIHB1dFNvcnRhYmxlKSB7XG4gICAgICAgICAgcHV0U29ydGFibGUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQW5pbWF0aW9uXG4gICAgICAgIGlmIChmcm9tU29ydGFibGUgPT09IF90aGlzKSB7XG4gICAgICAgICAgX3RoaXMuX2lnbm9yZVdoaWxlQW5pbWF0aW5nID0gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLmFuaW1hdGVBbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGRyYWdPdmVyRXZlbnQoJ2RyYWdPdmVyQW5pbWF0aW9uQ29tcGxldGUnKTtcbiAgICAgICAgICBfdGhpcy5faWdub3JlV2hpbGVBbmltYXRpbmcgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKF90aGlzICE9PSBmcm9tU29ydGFibGUpIHtcbiAgICAgICAgICBmcm9tU29ydGFibGUuYW5pbWF0ZUFsbCgpO1xuICAgICAgICAgIGZyb21Tb3J0YWJsZS5faWdub3JlV2hpbGVBbmltYXRpbmcgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE51bGwgbGFzdFRhcmdldCBpZiBpdCBpcyBub3QgaW5zaWRlIGEgcHJldmlvdXNseSBzd2FwcGVkIGVsZW1lbnRcbiAgICAgIGlmICh0YXJnZXQgPT09IGRyYWdFbCAmJiAhZHJhZ0VsLmFuaW1hdGVkIHx8IHRhcmdldCA9PT0gZWwgJiYgIXRhcmdldC5hbmltYXRlZCkge1xuICAgICAgICBsYXN0VGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gbm8gYnViYmxpbmcgYW5kIG5vdCBmYWxsYmFja1xuICAgICAgaWYgKCFvcHRpb25zLmRyYWdvdmVyQnViYmxlICYmICFldnQucm9vdEVsICYmIHRhcmdldCAhPT0gZG9jdW1lbnQpIHtcbiAgICAgICAgZHJhZ0VsLnBhcmVudE5vZGVbZXhwYW5kb10uX2lzT3V0c2lkZVRoaXNFbChldnQudGFyZ2V0KTtcblxuICAgICAgICAvLyBEbyBub3QgZGV0ZWN0IGZvciBlbXB0eSBpbnNlcnQgaWYgYWxyZWFkeSBpbnNlcnRlZFxuICAgICAgICAhaW5zZXJ0aW9uICYmIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50KGV2dCk7XG4gICAgICB9XG4gICAgICAhb3B0aW9ucy5kcmFnb3ZlckJ1YmJsZSAmJiBldnQuc3RvcFByb3BhZ2F0aW9uICYmIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHJldHVybiBjb21wbGV0ZWRGaXJlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQ2FsbCB3aGVuIGRyYWdFbCBoYXMgYmVlbiBpbnNlcnRlZFxuICAgIGZ1bmN0aW9uIGNoYW5nZWQoKSB7XG4gICAgICBuZXdJbmRleCA9IGluZGV4KGRyYWdFbCk7XG4gICAgICBuZXdEcmFnZ2FibGVJbmRleCA9IGluZGV4KGRyYWdFbCwgb3B0aW9ucy5kcmFnZ2FibGUpO1xuICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICBzb3J0YWJsZTogX3RoaXMsXG4gICAgICAgIG5hbWU6ICdjaGFuZ2UnLFxuICAgICAgICB0b0VsOiBlbCxcbiAgICAgICAgbmV3SW5kZXg6IG5ld0luZGV4LFxuICAgICAgICBuZXdEcmFnZ2FibGVJbmRleDogbmV3RHJhZ2dhYmxlSW5kZXgsXG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChldnQucHJldmVudERlZmF1bHQgIT09IHZvaWQgMCkge1xuICAgICAgZXZ0LmNhbmNlbGFibGUgJiYgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIHRhcmdldCA9IGNsb3Nlc3QodGFyZ2V0LCBvcHRpb25zLmRyYWdnYWJsZSwgZWwsIHRydWUpO1xuICAgIGRyYWdPdmVyRXZlbnQoJ2RyYWdPdmVyJyk7XG4gICAgaWYgKFNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHJldHVybiBjb21wbGV0ZWRGaXJlZDtcbiAgICBpZiAoZHJhZ0VsLmNvbnRhaW5zKGV2dC50YXJnZXQpIHx8IHRhcmdldC5hbmltYXRlZCAmJiB0YXJnZXQuYW5pbWF0aW5nWCAmJiB0YXJnZXQuYW5pbWF0aW5nWSB8fCBfdGhpcy5faWdub3JlV2hpbGVBbmltYXRpbmcgPT09IHRhcmdldCkge1xuICAgICAgcmV0dXJuIGNvbXBsZXRlZChmYWxzZSk7XG4gICAgfVxuICAgIGlnbm9yZU5leHRDbGljayA9IGZhbHNlO1xuICAgIGlmIChhY3RpdmVTb3J0YWJsZSAmJiAhb3B0aW9ucy5kaXNhYmxlZCAmJiAoaXNPd25lciA/IGNhblNvcnQgfHwgKHJldmVydCA9IHBhcmVudEVsICE9PSByb290RWwpIC8vIFJldmVydGluZyBpdGVtIGludG8gdGhlIG9yaWdpbmFsIGxpc3RcbiAgICA6IHB1dFNvcnRhYmxlID09PSB0aGlzIHx8ICh0aGlzLmxhc3RQdXRNb2RlID0gYWN0aXZlR3JvdXAuY2hlY2tQdWxsKHRoaXMsIGFjdGl2ZVNvcnRhYmxlLCBkcmFnRWwsIGV2dCkpICYmIGdyb3VwLmNoZWNrUHV0KHRoaXMsIGFjdGl2ZVNvcnRhYmxlLCBkcmFnRWwsIGV2dCkpKSB7XG4gICAgICB2ZXJ0aWNhbCA9IHRoaXMuX2dldERpcmVjdGlvbihldnQsIHRhcmdldCkgPT09ICd2ZXJ0aWNhbCc7XG4gICAgICBkcmFnUmVjdCA9IGdldFJlY3QoZHJhZ0VsKTtcbiAgICAgIGRyYWdPdmVyRXZlbnQoJ2RyYWdPdmVyVmFsaWQnKTtcbiAgICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSByZXR1cm4gY29tcGxldGVkRmlyZWQ7XG4gICAgICBpZiAocmV2ZXJ0KSB7XG4gICAgICAgIHBhcmVudEVsID0gcm9vdEVsOyAvLyBhY3R1YWxpemF0aW9uXG4gICAgICAgIGNhcHR1cmUoKTtcbiAgICAgICAgdGhpcy5faGlkZUNsb25lKCk7XG4gICAgICAgIGRyYWdPdmVyRXZlbnQoJ3JldmVydCcpO1xuICAgICAgICBpZiAoIVNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHtcbiAgICAgICAgICBpZiAobmV4dEVsKSB7XG4gICAgICAgICAgICByb290RWwuaW5zZXJ0QmVmb3JlKGRyYWdFbCwgbmV4dEVsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcm9vdEVsLmFwcGVuZENoaWxkKGRyYWdFbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wbGV0ZWQodHJ1ZSk7XG4gICAgICB9XG4gICAgICB2YXIgZWxMYXN0Q2hpbGQgPSBsYXN0Q2hpbGQoZWwsIG9wdGlvbnMuZHJhZ2dhYmxlKTtcbiAgICAgIGlmICghZWxMYXN0Q2hpbGQgfHwgX2dob3N0SXNMYXN0KGV2dCwgdmVydGljYWwsIHRoaXMpICYmICFlbExhc3RDaGlsZC5hbmltYXRlZCkge1xuICAgICAgICAvLyBJbnNlcnQgdG8gZW5kIG9mIGxpc3RcblxuICAgICAgICAvLyBJZiBhbHJlYWR5IGF0IGVuZCBvZiBsaXN0OiBEbyBub3QgaW5zZXJ0XG4gICAgICAgIGlmIChlbExhc3RDaGlsZCA9PT0gZHJhZ0VsKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbXBsZXRlZChmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIGxhc3QgZWxlbWVudCwgaXQgaXMgdGhlIHRhcmdldFxuICAgICAgICBpZiAoZWxMYXN0Q2hpbGQgJiYgZWwgPT09IGV2dC50YXJnZXQpIHtcbiAgICAgICAgICB0YXJnZXQgPSBlbExhc3RDaGlsZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgdGFyZ2V0UmVjdCA9IGdldFJlY3QodGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX29uTW92ZShyb290RWwsIGVsLCBkcmFnRWwsIGRyYWdSZWN0LCB0YXJnZXQsIHRhcmdldFJlY3QsIGV2dCwgISF0YXJnZXQpICE9PSBmYWxzZSkge1xuICAgICAgICAgIGNhcHR1cmUoKTtcbiAgICAgICAgICBpZiAoZWxMYXN0Q2hpbGQgJiYgZWxMYXN0Q2hpbGQubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgIC8vIHRoZSBsYXN0IGRyYWdnYWJsZSBlbGVtZW50IGlzIG5vdCB0aGUgbGFzdCBub2RlXG4gICAgICAgICAgICBlbC5pbnNlcnRCZWZvcmUoZHJhZ0VsLCBlbExhc3RDaGlsZC5uZXh0U2libGluZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGRyYWdFbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcmVudEVsID0gZWw7IC8vIGFjdHVhbGl6YXRpb25cblxuICAgICAgICAgIGNoYW5nZWQoKTtcbiAgICAgICAgICByZXR1cm4gY29tcGxldGVkKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVsTGFzdENoaWxkICYmIF9naG9zdElzRmlyc3QoZXZ0LCB2ZXJ0aWNhbCwgdGhpcykpIHtcbiAgICAgICAgLy8gSW5zZXJ0IHRvIHN0YXJ0IG9mIGxpc3RcbiAgICAgICAgdmFyIGZpcnN0Q2hpbGQgPSBnZXRDaGlsZChlbCwgMCwgb3B0aW9ucywgdHJ1ZSk7XG4gICAgICAgIGlmIChmaXJzdENoaWxkID09PSBkcmFnRWwpIHtcbiAgICAgICAgICByZXR1cm4gY29tcGxldGVkKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQgPSBmaXJzdENoaWxkO1xuICAgICAgICB0YXJnZXRSZWN0ID0gZ2V0UmVjdCh0YXJnZXQpO1xuICAgICAgICBpZiAoX29uTW92ZShyb290RWwsIGVsLCBkcmFnRWwsIGRyYWdSZWN0LCB0YXJnZXQsIHRhcmdldFJlY3QsIGV2dCwgZmFsc2UpICE9PSBmYWxzZSkge1xuICAgICAgICAgIGNhcHR1cmUoKTtcbiAgICAgICAgICBlbC5pbnNlcnRCZWZvcmUoZHJhZ0VsLCBmaXJzdENoaWxkKTtcbiAgICAgICAgICBwYXJlbnRFbCA9IGVsOyAvLyBhY3R1YWxpemF0aW9uXG5cbiAgICAgICAgICBjaGFuZ2VkKCk7XG4gICAgICAgICAgcmV0dXJuIGNvbXBsZXRlZCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0YXJnZXQucGFyZW50Tm9kZSA9PT0gZWwpIHtcbiAgICAgICAgdGFyZ2V0UmVjdCA9IGdldFJlY3QodGFyZ2V0KTtcbiAgICAgICAgdmFyIGRpcmVjdGlvbiA9IDAsXG4gICAgICAgICAgdGFyZ2V0QmVmb3JlRmlyc3RTd2FwLFxuICAgICAgICAgIGRpZmZlcmVudExldmVsID0gZHJhZ0VsLnBhcmVudE5vZGUgIT09IGVsLFxuICAgICAgICAgIGRpZmZlcmVudFJvd0NvbCA9ICFfZHJhZ0VsSW5Sb3dDb2x1bW4oZHJhZ0VsLmFuaW1hdGVkICYmIGRyYWdFbC50b1JlY3QgfHwgZHJhZ1JlY3QsIHRhcmdldC5hbmltYXRlZCAmJiB0YXJnZXQudG9SZWN0IHx8IHRhcmdldFJlY3QsIHZlcnRpY2FsKSxcbiAgICAgICAgICBzaWRlMSA9IHZlcnRpY2FsID8gJ3RvcCcgOiAnbGVmdCcsXG4gICAgICAgICAgc2Nyb2xsZWRQYXN0VG9wID0gaXNTY3JvbGxlZFBhc3QodGFyZ2V0LCAndG9wJywgJ3RvcCcpIHx8IGlzU2Nyb2xsZWRQYXN0KGRyYWdFbCwgJ3RvcCcsICd0b3AnKSxcbiAgICAgICAgICBzY3JvbGxCZWZvcmUgPSBzY3JvbGxlZFBhc3RUb3AgPyBzY3JvbGxlZFBhc3RUb3Auc2Nyb2xsVG9wIDogdm9pZCAwO1xuICAgICAgICBpZiAobGFzdFRhcmdldCAhPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgdGFyZ2V0QmVmb3JlRmlyc3RTd2FwID0gdGFyZ2V0UmVjdFtzaWRlMV07XG4gICAgICAgICAgcGFzdEZpcnN0SW52ZXJ0VGhyZXNoID0gZmFsc2U7XG4gICAgICAgICAgaXNDaXJjdW1zdGFudGlhbEludmVydCA9ICFkaWZmZXJlbnRSb3dDb2wgJiYgb3B0aW9ucy5pbnZlcnRTd2FwIHx8IGRpZmZlcmVudExldmVsO1xuICAgICAgICB9XG4gICAgICAgIGRpcmVjdGlvbiA9IF9nZXRTd2FwRGlyZWN0aW9uKGV2dCwgdGFyZ2V0LCB0YXJnZXRSZWN0LCB2ZXJ0aWNhbCwgZGlmZmVyZW50Um93Q29sID8gMSA6IG9wdGlvbnMuc3dhcFRocmVzaG9sZCwgb3B0aW9ucy5pbnZlcnRlZFN3YXBUaHJlc2hvbGQgPT0gbnVsbCA/IG9wdGlvbnMuc3dhcFRocmVzaG9sZCA6IG9wdGlvbnMuaW52ZXJ0ZWRTd2FwVGhyZXNob2xkLCBpc0NpcmN1bXN0YW50aWFsSW52ZXJ0LCBsYXN0VGFyZ2V0ID09PSB0YXJnZXQpO1xuICAgICAgICB2YXIgc2libGluZztcbiAgICAgICAgaWYgKGRpcmVjdGlvbiAhPT0gMCkge1xuICAgICAgICAgIC8vIENoZWNrIGlmIHRhcmdldCBpcyBiZXNpZGUgZHJhZ0VsIGluIHJlc3BlY3RpdmUgZGlyZWN0aW9uIChpZ25vcmluZyBoaWRkZW4gZWxlbWVudHMpXG4gICAgICAgICAgdmFyIGRyYWdJbmRleCA9IGluZGV4KGRyYWdFbCk7XG4gICAgICAgICAgZG8ge1xuICAgICAgICAgICAgZHJhZ0luZGV4IC09IGRpcmVjdGlvbjtcbiAgICAgICAgICAgIHNpYmxpbmcgPSBwYXJlbnRFbC5jaGlsZHJlbltkcmFnSW5kZXhdO1xuICAgICAgICAgIH0gd2hpbGUgKHNpYmxpbmcgJiYgKGNzcyhzaWJsaW5nLCAnZGlzcGxheScpID09PSAnbm9uZScgfHwgc2libGluZyA9PT0gZ2hvc3RFbCkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGRyYWdFbCBpcyBhbHJlYWR5IGJlc2lkZSB0YXJnZXQ6IERvIG5vdCBpbnNlcnRcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gMCB8fCBzaWJsaW5nID09PSB0YXJnZXQpIHtcbiAgICAgICAgICByZXR1cm4gY29tcGxldGVkKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0VGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICBsYXN0RGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICB2YXIgbmV4dFNpYmxpbmcgPSB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLFxuICAgICAgICAgIGFmdGVyID0gZmFsc2U7XG4gICAgICAgIGFmdGVyID0gZGlyZWN0aW9uID09PSAxO1xuICAgICAgICB2YXIgbW92ZVZlY3RvciA9IF9vbk1vdmUocm9vdEVsLCBlbCwgZHJhZ0VsLCBkcmFnUmVjdCwgdGFyZ2V0LCB0YXJnZXRSZWN0LCBldnQsIGFmdGVyKTtcbiAgICAgICAgaWYgKG1vdmVWZWN0b3IgIT09IGZhbHNlKSB7XG4gICAgICAgICAgaWYgKG1vdmVWZWN0b3IgPT09IDEgfHwgbW92ZVZlY3RvciA9PT0gLTEpIHtcbiAgICAgICAgICAgIGFmdGVyID0gbW92ZVZlY3RvciA9PT0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgX3NpbGVudCA9IHRydWU7XG4gICAgICAgICAgc2V0VGltZW91dChfdW5zaWxlbnQsIDMwKTtcbiAgICAgICAgICBjYXB0dXJlKCk7XG4gICAgICAgICAgaWYgKGFmdGVyICYmICFuZXh0U2libGluZykge1xuICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZHJhZ0VsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRyYWdFbCwgYWZ0ZXIgPyBuZXh0U2libGluZyA6IHRhcmdldCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gVW5kbyBjaHJvbWUncyBzY3JvbGwgYWRqdXN0bWVudCAoaGFzIG5vIGVmZmVjdCBvbiBvdGhlciBicm93c2VycylcbiAgICAgICAgICBpZiAoc2Nyb2xsZWRQYXN0VG9wKSB7XG4gICAgICAgICAgICBzY3JvbGxCeShzY3JvbGxlZFBhc3RUb3AsIDAsIHNjcm9sbEJlZm9yZSAtIHNjcm9sbGVkUGFzdFRvcC5zY3JvbGxUb3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwYXJlbnRFbCA9IGRyYWdFbC5wYXJlbnROb2RlOyAvLyBhY3R1YWxpemF0aW9uXG5cbiAgICAgICAgICAvLyBtdXN0IGJlIGRvbmUgYmVmb3JlIGFuaW1hdGlvblxuICAgICAgICAgIGlmICh0YXJnZXRCZWZvcmVGaXJzdFN3YXAgIT09IHVuZGVmaW5lZCAmJiAhaXNDaXJjdW1zdGFudGlhbEludmVydCkge1xuICAgICAgICAgICAgdGFyZ2V0TW92ZURpc3RhbmNlID0gTWF0aC5hYnModGFyZ2V0QmVmb3JlRmlyc3RTd2FwIC0gZ2V0UmVjdCh0YXJnZXQpW3NpZGUxXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNoYW5nZWQoKTtcbiAgICAgICAgICByZXR1cm4gY29tcGxldGVkKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZWwuY29udGFpbnMoZHJhZ0VsKSkge1xuICAgICAgICByZXR1cm4gY29tcGxldGVkKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuICBfaWdub3JlV2hpbGVBbmltYXRpbmc6IG51bGwsXG4gIF9vZmZNb3ZlRXZlbnRzOiBmdW5jdGlvbiBfb2ZmTW92ZUV2ZW50cygpIHtcbiAgICBvZmYoZG9jdW1lbnQsICdtb3VzZW1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgb2ZmKGRvY3VtZW50LCAndG91Y2htb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xuICAgIG9mZihkb2N1bWVudCwgJ3BvaW50ZXJtb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xuICAgIG9mZihkb2N1bWVudCwgJ2RyYWdvdmVyJywgbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQpO1xuICAgIG9mZihkb2N1bWVudCwgJ21vdXNlbW92ZScsIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50KTtcbiAgICBvZmYoZG9jdW1lbnQsICd0b3VjaG1vdmUnLCBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudCk7XG4gIH0sXG4gIF9vZmZVcEV2ZW50czogZnVuY3Rpb24gX29mZlVwRXZlbnRzKCkge1xuICAgIHZhciBvd25lckRvY3VtZW50ID0gdGhpcy5lbC5vd25lckRvY3VtZW50O1xuICAgIG9mZihvd25lckRvY3VtZW50LCAnbW91c2V1cCcsIHRoaXMuX29uRHJvcCk7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICd0b3VjaGVuZCcsIHRoaXMuX29uRHJvcCk7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICdwb2ludGVydXAnLCB0aGlzLl9vbkRyb3ApO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAncG9pbnRlcmNhbmNlbCcsIHRoaXMuX29uRHJvcCk7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICd0b3VjaGNhbmNlbCcsIHRoaXMuX29uRHJvcCk7XG4gICAgb2ZmKGRvY3VtZW50LCAnc2VsZWN0c3RhcnQnLCB0aGlzKTtcbiAgfSxcbiAgX29uRHJvcDogZnVuY3Rpb24gX29uRHJvcCggLyoqRXZlbnQqL2V2dCkge1xuICAgIHZhciBlbCA9IHRoaXMuZWwsXG4gICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgLy8gR2V0IHRoZSBpbmRleCBvZiB0aGUgZHJhZ2dlZCBlbGVtZW50IHdpdGhpbiBpdHMgcGFyZW50XG4gICAgbmV3SW5kZXggPSBpbmRleChkcmFnRWwpO1xuICAgIG5ld0RyYWdnYWJsZUluZGV4ID0gaW5kZXgoZHJhZ0VsLCBvcHRpb25zLmRyYWdnYWJsZSk7XG4gICAgcGx1Z2luRXZlbnQoJ2Ryb3AnLCB0aGlzLCB7XG4gICAgICBldnQ6IGV2dFxuICAgIH0pO1xuICAgIHBhcmVudEVsID0gZHJhZ0VsICYmIGRyYWdFbC5wYXJlbnROb2RlO1xuXG4gICAgLy8gR2V0IGFnYWluIGFmdGVyIHBsdWdpbiBldmVudFxuICAgIG5ld0luZGV4ID0gaW5kZXgoZHJhZ0VsKTtcbiAgICBuZXdEcmFnZ2FibGVJbmRleCA9IGluZGV4KGRyYWdFbCwgb3B0aW9ucy5kcmFnZ2FibGUpO1xuICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSB7XG4gICAgICB0aGlzLl9udWxsaW5nKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0aW5nRHJhZ1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICBpc0NpcmN1bXN0YW50aWFsSW52ZXJ0ID0gZmFsc2U7XG4gICAgcGFzdEZpcnN0SW52ZXJ0VGhyZXNoID0gZmFsc2U7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9sb29wSWQpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl9kcmFnU3RhcnRUaW1lcik7XG4gICAgX2NhbmNlbE5leHRUaWNrKHRoaXMuY2xvbmVJZCk7XG4gICAgX2NhbmNlbE5leHRUaWNrKHRoaXMuX2RyYWdTdGFydElkKTtcblxuICAgIC8vIFVuYmluZCBldmVudHNcbiAgICBpZiAodGhpcy5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICAgIG9mZihkb2N1bWVudCwgJ2Ryb3AnLCB0aGlzKTtcbiAgICAgIG9mZihlbCwgJ2RyYWdzdGFydCcsIHRoaXMuX29uRHJhZ1N0YXJ0KTtcbiAgICB9XG4gICAgdGhpcy5fb2ZmTW92ZUV2ZW50cygpO1xuICAgIHRoaXMuX29mZlVwRXZlbnRzKCk7XG4gICAgaWYgKFNhZmFyaSkge1xuICAgICAgY3NzKGRvY3VtZW50LmJvZHksICd1c2VyLXNlbGVjdCcsICcnKTtcbiAgICB9XG4gICAgY3NzKGRyYWdFbCwgJ3RyYW5zZm9ybScsICcnKTtcbiAgICBpZiAoZXZ0KSB7XG4gICAgICBpZiAobW92ZWQpIHtcbiAgICAgICAgZXZ0LmNhbmNlbGFibGUgJiYgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICFvcHRpb25zLmRyb3BCdWJibGUgJiYgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgICAgZ2hvc3RFbCAmJiBnaG9zdEVsLnBhcmVudE5vZGUgJiYgZ2hvc3RFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGdob3N0RWwpO1xuICAgICAgaWYgKHJvb3RFbCA9PT0gcGFyZW50RWwgfHwgcHV0U29ydGFibGUgJiYgcHV0U29ydGFibGUubGFzdFB1dE1vZGUgIT09ICdjbG9uZScpIHtcbiAgICAgICAgLy8gUmVtb3ZlIGNsb25lKHMpXG4gICAgICAgIGNsb25lRWwgJiYgY2xvbmVFbC5wYXJlbnROb2RlICYmIGNsb25lRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjbG9uZUVsKTtcbiAgICAgIH1cbiAgICAgIGlmIChkcmFnRWwpIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgICAgICAgb2ZmKGRyYWdFbCwgJ2RyYWdlbmQnLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBfZGlzYWJsZURyYWdnYWJsZShkcmFnRWwpO1xuICAgICAgICBkcmFnRWwuc3R5bGVbJ3dpbGwtY2hhbmdlJ10gPSAnJztcblxuICAgICAgICAvLyBSZW1vdmUgY2xhc3Nlc1xuICAgICAgICAvLyBnaG9zdENsYXNzIGlzIGFkZGVkIGluIGRyYWdTdGFydGVkXG4gICAgICAgIGlmIChtb3ZlZCAmJiAhYXdhaXRpbmdEcmFnU3RhcnRlZCkge1xuICAgICAgICAgIHRvZ2dsZUNsYXNzKGRyYWdFbCwgcHV0U29ydGFibGUgPyBwdXRTb3J0YWJsZS5vcHRpb25zLmdob3N0Q2xhc3MgOiB0aGlzLm9wdGlvbnMuZ2hvc3RDbGFzcywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHRvZ2dsZUNsYXNzKGRyYWdFbCwgdGhpcy5vcHRpb25zLmNob3NlbkNsYXNzLCBmYWxzZSk7XG5cbiAgICAgICAgLy8gRHJhZyBzdG9wIGV2ZW50XG4gICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICBuYW1lOiAndW5jaG9vc2UnLFxuICAgICAgICAgIHRvRWw6IHBhcmVudEVsLFxuICAgICAgICAgIG5ld0luZGV4OiBudWxsLFxuICAgICAgICAgIG5ld0RyYWdnYWJsZUluZGV4OiBudWxsLFxuICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJvb3RFbCAhPT0gcGFyZW50RWwpIHtcbiAgICAgICAgICBpZiAobmV3SW5kZXggPj0gMCkge1xuICAgICAgICAgICAgLy8gQWRkIGV2ZW50XG4gICAgICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICAgIHJvb3RFbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgIG5hbWU6ICdhZGQnLFxuICAgICAgICAgICAgICB0b0VsOiBwYXJlbnRFbCxcbiAgICAgICAgICAgICAgZnJvbUVsOiByb290RWwsXG4gICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSBldmVudFxuICAgICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICAgICAgbmFtZTogJ3JlbW92ZScsXG4gICAgICAgICAgICAgIHRvRWw6IHBhcmVudEVsLFxuICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBkcmFnIGZyb20gb25lIGxpc3QgYW5kIGRyb3AgaW50byBhbm90aGVyXG4gICAgICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICAgIHJvb3RFbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgIG5hbWU6ICdzb3J0JyxcbiAgICAgICAgICAgICAgdG9FbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgIGZyb21FbDogcm9vdEVsLFxuICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICAgICAgbmFtZTogJ3NvcnQnLFxuICAgICAgICAgICAgICB0b0VsOiBwYXJlbnRFbCxcbiAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHV0U29ydGFibGUgJiYgcHV0U29ydGFibGUuc2F2ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChuZXdJbmRleCAhPT0gb2xkSW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChuZXdJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgIC8vIGRyYWcgJiBkcm9wIHdpdGhpbiB0aGUgc2FtZSBsaXN0XG4gICAgICAgICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICAgICAgICBuYW1lOiAndXBkYXRlJyxcbiAgICAgICAgICAgICAgICB0b0VsOiBwYXJlbnRFbCxcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnc29ydCcsXG4gICAgICAgICAgICAgICAgdG9FbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoU29ydGFibGUuYWN0aXZlKSB7XG4gICAgICAgICAgLyoganNoaW50IGVxbnVsbDp0cnVlICovXG4gICAgICAgICAgaWYgKG5ld0luZGV4ID09IG51bGwgfHwgbmV3SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBuZXdJbmRleCA9IG9sZEluZGV4O1xuICAgICAgICAgICAgbmV3RHJhZ2dhYmxlSW5kZXggPSBvbGREcmFnZ2FibGVJbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgc29ydGFibGU6IHRoaXMsXG4gICAgICAgICAgICBuYW1lOiAnZW5kJyxcbiAgICAgICAgICAgIHRvRWw6IHBhcmVudEVsLFxuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBTYXZlIHNvcnRpbmdcbiAgICAgICAgICB0aGlzLnNhdmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9udWxsaW5nKCk7XG4gIH0sXG4gIF9udWxsaW5nOiBmdW5jdGlvbiBfbnVsbGluZygpIHtcbiAgICBwbHVnaW5FdmVudCgnbnVsbGluZycsIHRoaXMpO1xuICAgIHJvb3RFbCA9IGRyYWdFbCA9IHBhcmVudEVsID0gZ2hvc3RFbCA9IG5leHRFbCA9IGNsb25lRWwgPSBsYXN0RG93bkVsID0gY2xvbmVIaWRkZW4gPSB0YXBFdnQgPSB0b3VjaEV2dCA9IG1vdmVkID0gbmV3SW5kZXggPSBuZXdEcmFnZ2FibGVJbmRleCA9IG9sZEluZGV4ID0gb2xkRHJhZ2dhYmxlSW5kZXggPSBsYXN0VGFyZ2V0ID0gbGFzdERpcmVjdGlvbiA9IHB1dFNvcnRhYmxlID0gYWN0aXZlR3JvdXAgPSBTb3J0YWJsZS5kcmFnZ2VkID0gU29ydGFibGUuZ2hvc3QgPSBTb3J0YWJsZS5jbG9uZSA9IFNvcnRhYmxlLmFjdGl2ZSA9IG51bGw7XG4gICAgdmFyIGVsID0gdGhpcy5lbDtcbiAgICBzYXZlZElucHV0Q2hlY2tlZC5mb3JFYWNoKGZ1bmN0aW9uIChjaGVja0VsKSB7XG4gICAgICBpZiAoZWwuY29udGFpbnMoY2hlY2tFbCkpIHtcbiAgICAgICAgY2hlY2tFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzYXZlZElucHV0Q2hlY2tlZC5sZW5ndGggPSBsYXN0RHggPSBsYXN0RHkgPSAwO1xuICB9LFxuICBoYW5kbGVFdmVudDogZnVuY3Rpb24gaGFuZGxlRXZlbnQoIC8qKkV2ZW50Ki9ldnQpIHtcbiAgICBzd2l0Y2ggKGV2dC50eXBlKSB7XG4gICAgICBjYXNlICdkcm9wJzpcbiAgICAgIGNhc2UgJ2RyYWdlbmQnOlxuICAgICAgICB0aGlzLl9vbkRyb3AoZXZ0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkcmFnZW50ZXInOlxuICAgICAgY2FzZSAnZHJhZ292ZXInOlxuICAgICAgICBpZiAoZHJhZ0VsKSB7XG4gICAgICAgICAgdGhpcy5fb25EcmFnT3ZlcihldnQpO1xuICAgICAgICAgIF9nbG9iYWxEcmFnT3ZlcihldnQpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2VsZWN0c3RhcnQnOlxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9LFxuICAvKipcclxuICAgKiBTZXJpYWxpemVzIHRoZSBpdGVtIGludG8gYW4gYXJyYXkgb2Ygc3RyaW5nLlxyXG4gICAqIEByZXR1cm5zIHtTdHJpbmdbXX1cclxuICAgKi9cbiAgdG9BcnJheTogZnVuY3Rpb24gdG9BcnJheSgpIHtcbiAgICB2YXIgb3JkZXIgPSBbXSxcbiAgICAgIGVsLFxuICAgICAgY2hpbGRyZW4gPSB0aGlzLmVsLmNoaWxkcmVuLFxuICAgICAgaSA9IDAsXG4gICAgICBuID0gY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBmb3IgKDsgaSA8IG47IGkrKykge1xuICAgICAgZWwgPSBjaGlsZHJlbltpXTtcbiAgICAgIGlmIChjbG9zZXN0KGVsLCBvcHRpb25zLmRyYWdnYWJsZSwgdGhpcy5lbCwgZmFsc2UpKSB7XG4gICAgICAgIG9yZGVyLnB1c2goZWwuZ2V0QXR0cmlidXRlKG9wdGlvbnMuZGF0YUlkQXR0cikgfHwgX2dlbmVyYXRlSWQoZWwpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9yZGVyO1xuICB9LFxuICAvKipcclxuICAgKiBTb3J0cyB0aGUgZWxlbWVudHMgYWNjb3JkaW5nIHRvIHRoZSBhcnJheS5cclxuICAgKiBAcGFyYW0gIHtTdHJpbmdbXX0gIG9yZGVyICBvcmRlciBvZiB0aGUgaXRlbXNcclxuICAgKi9cbiAgc29ydDogZnVuY3Rpb24gc29ydChvcmRlciwgdXNlQW5pbWF0aW9uKSB7XG4gICAgdmFyIGl0ZW1zID0ge30sXG4gICAgICByb290RWwgPSB0aGlzLmVsO1xuICAgIHRoaXMudG9BcnJheSgpLmZvckVhY2goZnVuY3Rpb24gKGlkLCBpKSB7XG4gICAgICB2YXIgZWwgPSByb290RWwuY2hpbGRyZW5baV07XG4gICAgICBpZiAoY2xvc2VzdChlbCwgdGhpcy5vcHRpb25zLmRyYWdnYWJsZSwgcm9vdEVsLCBmYWxzZSkpIHtcbiAgICAgICAgaXRlbXNbaWRdID0gZWw7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gICAgdXNlQW5pbWF0aW9uICYmIHRoaXMuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgb3JkZXIuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGlmIChpdGVtc1tpZF0pIHtcbiAgICAgICAgcm9vdEVsLnJlbW92ZUNoaWxkKGl0ZW1zW2lkXSk7XG4gICAgICAgIHJvb3RFbC5hcHBlbmRDaGlsZChpdGVtc1tpZF0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHVzZUFuaW1hdGlvbiAmJiB0aGlzLmFuaW1hdGVBbGwoKTtcbiAgfSxcbiAgLyoqXHJcbiAgICogU2F2ZSB0aGUgY3VycmVudCBzb3J0aW5nXHJcbiAgICovXG4gIHNhdmU6IGZ1bmN0aW9uIHNhdmUoKSB7XG4gICAgdmFyIHN0b3JlID0gdGhpcy5vcHRpb25zLnN0b3JlO1xuICAgIHN0b3JlICYmIHN0b3JlLnNldCAmJiBzdG9yZS5zZXQodGhpcyk7XG4gIH0sXG4gIC8qKlxyXG4gICAqIEZvciBlYWNoIGVsZW1lbnQgaW4gdGhlIHNldCwgZ2V0IHRoZSBmaXJzdCBlbGVtZW50IHRoYXQgbWF0Y2hlcyB0aGUgc2VsZWN0b3IgYnkgdGVzdGluZyB0aGUgZWxlbWVudCBpdHNlbGYgYW5kIHRyYXZlcnNpbmcgdXAgdGhyb3VnaCBpdHMgYW5jZXN0b3JzIGluIHRoZSBET00gdHJlZS5cclxuICAgKiBAcGFyYW0gICB7SFRNTEVsZW1lbnR9ICBlbFxyXG4gICAqIEBwYXJhbSAgIHtTdHJpbmd9ICAgICAgIFtzZWxlY3Rvcl0gIGRlZmF1bHQ6IGBvcHRpb25zLmRyYWdnYWJsZWBcclxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR8bnVsbH1cclxuICAgKi9cbiAgY2xvc2VzdDogZnVuY3Rpb24gY2xvc2VzdCQxKGVsLCBzZWxlY3Rvcikge1xuICAgIHJldHVybiBjbG9zZXN0KGVsLCBzZWxlY3RvciB8fCB0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlLCB0aGlzLmVsLCBmYWxzZSk7XG4gIH0sXG4gIC8qKlxyXG4gICAqIFNldC9nZXQgb3B0aW9uXHJcbiAgICogQHBhcmFtICAge3N0cmluZ30gbmFtZVxyXG4gICAqIEBwYXJhbSAgIHsqfSAgICAgIFt2YWx1ZV1cclxuICAgKiBAcmV0dXJucyB7Kn1cclxuICAgKi9cbiAgb3B0aW9uOiBmdW5jdGlvbiBvcHRpb24obmFtZSwgdmFsdWUpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIG9wdGlvbnNbbmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBtb2RpZmllZFZhbHVlID0gUGx1Z2luTWFuYWdlci5tb2RpZnlPcHRpb24odGhpcywgbmFtZSwgdmFsdWUpO1xuICAgICAgaWYgKHR5cGVvZiBtb2RpZmllZFZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zW25hbWVdID0gbW9kaWZpZWRWYWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbnNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChuYW1lID09PSAnZ3JvdXAnKSB7XG4gICAgICAgIF9wcmVwYXJlR3JvdXAob3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICAvKipcclxuICAgKiBEZXN0cm95XHJcbiAgICovXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgcGx1Z2luRXZlbnQoJ2Rlc3Ryb3knLCB0aGlzKTtcbiAgICB2YXIgZWwgPSB0aGlzLmVsO1xuICAgIGVsW2V4cGFuZG9dID0gbnVsbDtcbiAgICBvZmYoZWwsICdtb3VzZWRvd24nLCB0aGlzLl9vblRhcFN0YXJ0KTtcbiAgICBvZmYoZWwsICd0b3VjaHN0YXJ0JywgdGhpcy5fb25UYXBTdGFydCk7XG4gICAgb2ZmKGVsLCAncG9pbnRlcmRvd24nLCB0aGlzLl9vblRhcFN0YXJ0KTtcbiAgICBpZiAodGhpcy5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICAgIG9mZihlbCwgJ2RyYWdvdmVyJywgdGhpcyk7XG4gICAgICBvZmYoZWwsICdkcmFnZW50ZXInLCB0aGlzKTtcbiAgICB9XG4gICAgLy8gUmVtb3ZlIGRyYWdnYWJsZSBhdHRyaWJ1dGVzXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlbC5xdWVyeVNlbGVjdG9yQWxsKCdbZHJhZ2dhYmxlXScpLCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZHJhZ2dhYmxlJyk7XG4gICAgfSk7XG4gICAgdGhpcy5fb25Ecm9wKCk7XG4gICAgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnRXZlbnRzKCk7XG4gICAgc29ydGFibGVzLnNwbGljZShzb3J0YWJsZXMuaW5kZXhPZih0aGlzLmVsKSwgMSk7XG4gICAgdGhpcy5lbCA9IGVsID0gbnVsbDtcbiAgfSxcbiAgX2hpZGVDbG9uZTogZnVuY3Rpb24gX2hpZGVDbG9uZSgpIHtcbiAgICBpZiAoIWNsb25lSGlkZGVuKSB7XG4gICAgICBwbHVnaW5FdmVudCgnaGlkZUNsb25lJywgdGhpcyk7XG4gICAgICBpZiAoU29ydGFibGUuZXZlbnRDYW5jZWxlZCkgcmV0dXJuO1xuICAgICAgY3NzKGNsb25lRWwsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZlQ2xvbmVPbkhpZGUgJiYgY2xvbmVFbC5wYXJlbnROb2RlKSB7XG4gICAgICAgIGNsb25lRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjbG9uZUVsKTtcbiAgICAgIH1cbiAgICAgIGNsb25lSGlkZGVuID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG4gIF9zaG93Q2xvbmU6IGZ1bmN0aW9uIF9zaG93Q2xvbmUocHV0U29ydGFibGUpIHtcbiAgICBpZiAocHV0U29ydGFibGUubGFzdFB1dE1vZGUgIT09ICdjbG9uZScpIHtcbiAgICAgIHRoaXMuX2hpZGVDbG9uZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2xvbmVIaWRkZW4pIHtcbiAgICAgIHBsdWdpbkV2ZW50KCdzaG93Q2xvbmUnLCB0aGlzKTtcbiAgICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSByZXR1cm47XG5cbiAgICAgIC8vIHNob3cgY2xvbmUgYXQgZHJhZ0VsIG9yIG9yaWdpbmFsIHBvc2l0aW9uXG4gICAgICBpZiAoZHJhZ0VsLnBhcmVudE5vZGUgPT0gcm9vdEVsICYmICF0aGlzLm9wdGlvbnMuZ3JvdXAucmV2ZXJ0Q2xvbmUpIHtcbiAgICAgICAgcm9vdEVsLmluc2VydEJlZm9yZShjbG9uZUVsLCBkcmFnRWwpO1xuICAgICAgfSBlbHNlIGlmIChuZXh0RWwpIHtcbiAgICAgICAgcm9vdEVsLmluc2VydEJlZm9yZShjbG9uZUVsLCBuZXh0RWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdEVsLmFwcGVuZENoaWxkKGNsb25lRWwpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5ncm91cC5yZXZlcnRDbG9uZSkge1xuICAgICAgICB0aGlzLmFuaW1hdGUoZHJhZ0VsLCBjbG9uZUVsKTtcbiAgICAgIH1cbiAgICAgIGNzcyhjbG9uZUVsLCAnZGlzcGxheScsICcnKTtcbiAgICAgIGNsb25lSGlkZGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG59O1xuZnVuY3Rpb24gX2dsb2JhbERyYWdPdmVyKCAvKipFdmVudCovZXZ0KSB7XG4gIGlmIChldnQuZGF0YVRyYW5zZmVyKSB7XG4gICAgZXZ0LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnO1xuICB9XG4gIGV2dC5jYW5jZWxhYmxlICYmIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuZnVuY3Rpb24gX29uTW92ZShmcm9tRWwsIHRvRWwsIGRyYWdFbCwgZHJhZ1JlY3QsIHRhcmdldEVsLCB0YXJnZXRSZWN0LCBvcmlnaW5hbEV2ZW50LCB3aWxsSW5zZXJ0QWZ0ZXIpIHtcbiAgdmFyIGV2dCxcbiAgICBzb3J0YWJsZSA9IGZyb21FbFtleHBhbmRvXSxcbiAgICBvbk1vdmVGbiA9IHNvcnRhYmxlLm9wdGlvbnMub25Nb3ZlLFxuICAgIHJldFZhbDtcbiAgLy8gU3VwcG9ydCBmb3IgbmV3IEN1c3RvbUV2ZW50IGZlYXR1cmVcbiAgaWYgKHdpbmRvdy5DdXN0b21FdmVudCAmJiAhSUUxMU9yTGVzcyAmJiAhRWRnZSkge1xuICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudCgnbW92ZScsIHtcbiAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgZXZ0LmluaXRFdmVudCgnbW92ZScsIHRydWUsIHRydWUpO1xuICB9XG4gIGV2dC50byA9IHRvRWw7XG4gIGV2dC5mcm9tID0gZnJvbUVsO1xuICBldnQuZHJhZ2dlZCA9IGRyYWdFbDtcbiAgZXZ0LmRyYWdnZWRSZWN0ID0gZHJhZ1JlY3Q7XG4gIGV2dC5yZWxhdGVkID0gdGFyZ2V0RWwgfHwgdG9FbDtcbiAgZXZ0LnJlbGF0ZWRSZWN0ID0gdGFyZ2V0UmVjdCB8fCBnZXRSZWN0KHRvRWwpO1xuICBldnQud2lsbEluc2VydEFmdGVyID0gd2lsbEluc2VydEFmdGVyO1xuICBldnQub3JpZ2luYWxFdmVudCA9IG9yaWdpbmFsRXZlbnQ7XG4gIGZyb21FbC5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gIGlmIChvbk1vdmVGbikge1xuICAgIHJldFZhbCA9IG9uTW92ZUZuLmNhbGwoc29ydGFibGUsIGV2dCwgb3JpZ2luYWxFdmVudCk7XG4gIH1cbiAgcmV0dXJuIHJldFZhbDtcbn1cbmZ1bmN0aW9uIF9kaXNhYmxlRHJhZ2dhYmxlKGVsKSB7XG4gIGVsLmRyYWdnYWJsZSA9IGZhbHNlO1xufVxuZnVuY3Rpb24gX3Vuc2lsZW50KCkge1xuICBfc2lsZW50ID0gZmFsc2U7XG59XG5mdW5jdGlvbiBfZ2hvc3RJc0ZpcnN0KGV2dCwgdmVydGljYWwsIHNvcnRhYmxlKSB7XG4gIHZhciBmaXJzdEVsUmVjdCA9IGdldFJlY3QoZ2V0Q2hpbGQoc29ydGFibGUuZWwsIDAsIHNvcnRhYmxlLm9wdGlvbnMsIHRydWUpKTtcbiAgdmFyIGNoaWxkQ29udGFpbmluZ1JlY3QgPSBnZXRDaGlsZENvbnRhaW5pbmdSZWN0RnJvbUVsZW1lbnQoc29ydGFibGUuZWwsIHNvcnRhYmxlLm9wdGlvbnMsIGdob3N0RWwpO1xuICB2YXIgc3BhY2VyID0gMTA7XG4gIHJldHVybiB2ZXJ0aWNhbCA/IGV2dC5jbGllbnRYIDwgY2hpbGRDb250YWluaW5nUmVjdC5sZWZ0IC0gc3BhY2VyIHx8IGV2dC5jbGllbnRZIDwgZmlyc3RFbFJlY3QudG9wICYmIGV2dC5jbGllbnRYIDwgZmlyc3RFbFJlY3QucmlnaHQgOiBldnQuY2xpZW50WSA8IGNoaWxkQ29udGFpbmluZ1JlY3QudG9wIC0gc3BhY2VyIHx8IGV2dC5jbGllbnRZIDwgZmlyc3RFbFJlY3QuYm90dG9tICYmIGV2dC5jbGllbnRYIDwgZmlyc3RFbFJlY3QubGVmdDtcbn1cbmZ1bmN0aW9uIF9naG9zdElzTGFzdChldnQsIHZlcnRpY2FsLCBzb3J0YWJsZSkge1xuICB2YXIgbGFzdEVsUmVjdCA9IGdldFJlY3QobGFzdENoaWxkKHNvcnRhYmxlLmVsLCBzb3J0YWJsZS5vcHRpb25zLmRyYWdnYWJsZSkpO1xuICB2YXIgY2hpbGRDb250YWluaW5nUmVjdCA9IGdldENoaWxkQ29udGFpbmluZ1JlY3RGcm9tRWxlbWVudChzb3J0YWJsZS5lbCwgc29ydGFibGUub3B0aW9ucywgZ2hvc3RFbCk7XG4gIHZhciBzcGFjZXIgPSAxMDtcbiAgcmV0dXJuIHZlcnRpY2FsID8gZXZ0LmNsaWVudFggPiBjaGlsZENvbnRhaW5pbmdSZWN0LnJpZ2h0ICsgc3BhY2VyIHx8IGV2dC5jbGllbnRZID4gbGFzdEVsUmVjdC5ib3R0b20gJiYgZXZ0LmNsaWVudFggPiBsYXN0RWxSZWN0LmxlZnQgOiBldnQuY2xpZW50WSA+IGNoaWxkQ29udGFpbmluZ1JlY3QuYm90dG9tICsgc3BhY2VyIHx8IGV2dC5jbGllbnRYID4gbGFzdEVsUmVjdC5yaWdodCAmJiBldnQuY2xpZW50WSA+IGxhc3RFbFJlY3QudG9wO1xufVxuZnVuY3Rpb24gX2dldFN3YXBEaXJlY3Rpb24oZXZ0LCB0YXJnZXQsIHRhcmdldFJlY3QsIHZlcnRpY2FsLCBzd2FwVGhyZXNob2xkLCBpbnZlcnRlZFN3YXBUaHJlc2hvbGQsIGludmVydFN3YXAsIGlzTGFzdFRhcmdldCkge1xuICB2YXIgbW91c2VPbkF4aXMgPSB2ZXJ0aWNhbCA/IGV2dC5jbGllbnRZIDogZXZ0LmNsaWVudFgsXG4gICAgdGFyZ2V0TGVuZ3RoID0gdmVydGljYWwgPyB0YXJnZXRSZWN0LmhlaWdodCA6IHRhcmdldFJlY3Qud2lkdGgsXG4gICAgdGFyZ2V0UzEgPSB2ZXJ0aWNhbCA/IHRhcmdldFJlY3QudG9wIDogdGFyZ2V0UmVjdC5sZWZ0LFxuICAgIHRhcmdldFMyID0gdmVydGljYWwgPyB0YXJnZXRSZWN0LmJvdHRvbSA6IHRhcmdldFJlY3QucmlnaHQsXG4gICAgaW52ZXJ0ID0gZmFsc2U7XG4gIGlmICghaW52ZXJ0U3dhcCkge1xuICAgIC8vIE5ldmVyIGludmVydCBvciBjcmVhdGUgZHJhZ0VsIHNoYWRvdyB3aGVuIHRhcmdldCBtb3ZlbWVuZXQgY2F1c2VzIG1vdXNlIHRvIG1vdmUgcGFzdCB0aGUgZW5kIG9mIHJlZ3VsYXIgc3dhcFRocmVzaG9sZFxuICAgIGlmIChpc0xhc3RUYXJnZXQgJiYgdGFyZ2V0TW92ZURpc3RhbmNlIDwgdGFyZ2V0TGVuZ3RoICogc3dhcFRocmVzaG9sZCkge1xuICAgICAgLy8gbXVsdGlwbGllZCBvbmx5IGJ5IHN3YXBUaHJlc2hvbGQgYmVjYXVzZSBtb3VzZSB3aWxsIGFscmVhZHkgYmUgaW5zaWRlIHRhcmdldCBieSAoMSAtIHRocmVzaG9sZCkgKiB0YXJnZXRMZW5ndGggLyAyXG4gICAgICAvLyBjaGVjayBpZiBwYXN0IGZpcnN0IGludmVydCB0aHJlc2hvbGQgb24gc2lkZSBvcHBvc2l0ZSBvZiBsYXN0RGlyZWN0aW9uXG4gICAgICBpZiAoIXBhc3RGaXJzdEludmVydFRocmVzaCAmJiAobGFzdERpcmVjdGlvbiA9PT0gMSA/IG1vdXNlT25BeGlzID4gdGFyZ2V0UzEgKyB0YXJnZXRMZW5ndGggKiBpbnZlcnRlZFN3YXBUaHJlc2hvbGQgLyAyIDogbW91c2VPbkF4aXMgPCB0YXJnZXRTMiAtIHRhcmdldExlbmd0aCAqIGludmVydGVkU3dhcFRocmVzaG9sZCAvIDIpKSB7XG4gICAgICAgIC8vIHBhc3QgZmlyc3QgaW52ZXJ0IHRocmVzaG9sZCwgZG8gbm90IHJlc3RyaWN0IGludmVydGVkIHRocmVzaG9sZCB0byBkcmFnRWwgc2hhZG93XG4gICAgICAgIHBhc3RGaXJzdEludmVydFRocmVzaCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoIXBhc3RGaXJzdEludmVydFRocmVzaCkge1xuICAgICAgICAvLyBkcmFnRWwgc2hhZG93ICh0YXJnZXQgbW92ZSBkaXN0YW5jZSBzaGFkb3cpXG4gICAgICAgIGlmIChsYXN0RGlyZWN0aW9uID09PSAxID8gbW91c2VPbkF4aXMgPCB0YXJnZXRTMSArIHRhcmdldE1vdmVEaXN0YW5jZSAvLyBvdmVyIGRyYWdFbCBzaGFkb3dcbiAgICAgICAgOiBtb3VzZU9uQXhpcyA+IHRhcmdldFMyIC0gdGFyZ2V0TW92ZURpc3RhbmNlKSB7XG4gICAgICAgICAgcmV0dXJuIC1sYXN0RGlyZWN0aW9uO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnZlcnQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZWd1bGFyXG4gICAgICBpZiAobW91c2VPbkF4aXMgPiB0YXJnZXRTMSArIHRhcmdldExlbmd0aCAqICgxIC0gc3dhcFRocmVzaG9sZCkgLyAyICYmIG1vdXNlT25BeGlzIDwgdGFyZ2V0UzIgLSB0YXJnZXRMZW5ndGggKiAoMSAtIHN3YXBUaHJlc2hvbGQpIC8gMikge1xuICAgICAgICByZXR1cm4gX2dldEluc2VydERpcmVjdGlvbih0YXJnZXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpbnZlcnQgPSBpbnZlcnQgfHwgaW52ZXJ0U3dhcDtcbiAgaWYgKGludmVydCkge1xuICAgIC8vIEludmVydCBvZiByZWd1bGFyXG4gICAgaWYgKG1vdXNlT25BeGlzIDwgdGFyZ2V0UzEgKyB0YXJnZXRMZW5ndGggKiBpbnZlcnRlZFN3YXBUaHJlc2hvbGQgLyAyIHx8IG1vdXNlT25BeGlzID4gdGFyZ2V0UzIgLSB0YXJnZXRMZW5ndGggKiBpbnZlcnRlZFN3YXBUaHJlc2hvbGQgLyAyKSB7XG4gICAgICByZXR1cm4gbW91c2VPbkF4aXMgPiB0YXJnZXRTMSArIHRhcmdldExlbmd0aCAvIDIgPyAxIDogLTE7XG4gICAgfVxuICB9XG4gIHJldHVybiAwO1xufVxuXG4vKipcclxuICogR2V0cyB0aGUgZGlyZWN0aW9uIGRyYWdFbCBtdXN0IGJlIHN3YXBwZWQgcmVsYXRpdmUgdG8gdGFyZ2V0IGluIG9yZGVyIHRvIG1ha2UgaXRcclxuICogc2VlbSB0aGF0IGRyYWdFbCBoYXMgYmVlbiBcImluc2VydGVkXCIgaW50byB0aGF0IGVsZW1lbnQncyBwb3NpdGlvblxyXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gdGFyZ2V0ICAgICAgIFRoZSB0YXJnZXQgd2hvc2UgcG9zaXRpb24gZHJhZ0VsIGlzIGJlaW5nIGluc2VydGVkIGF0XHJcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgRGlyZWN0aW9uIGRyYWdFbCBtdXN0IGJlIHN3YXBwZWRcclxuICovXG5mdW5jdGlvbiBfZ2V0SW5zZXJ0RGlyZWN0aW9uKHRhcmdldCkge1xuICBpZiAoaW5kZXgoZHJhZ0VsKSA8IGluZGV4KHRhcmdldCkpIHtcbiAgICByZXR1cm4gMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbn1cblxuLyoqXHJcbiAqIEdlbmVyYXRlIGlkXHJcbiAqIEBwYXJhbSAgIHtIVE1MRWxlbWVudH0gZWxcclxuICogQHJldHVybnMge1N0cmluZ31cclxuICogQHByaXZhdGVcclxuICovXG5mdW5jdGlvbiBfZ2VuZXJhdGVJZChlbCkge1xuICB2YXIgc3RyID0gZWwudGFnTmFtZSArIGVsLmNsYXNzTmFtZSArIGVsLnNyYyArIGVsLmhyZWYgKyBlbC50ZXh0Q29udGVudCxcbiAgICBpID0gc3RyLmxlbmd0aCxcbiAgICBzdW0gPSAwO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgc3VtICs9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICB9XG4gIHJldHVybiBzdW0udG9TdHJpbmcoMzYpO1xufVxuZnVuY3Rpb24gX3NhdmVJbnB1dENoZWNrZWRTdGF0ZShyb290KSB7XG4gIHNhdmVkSW5wdXRDaGVja2VkLmxlbmd0aCA9IDA7XG4gIHZhciBpbnB1dHMgPSByb290LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpO1xuICB2YXIgaWR4ID0gaW5wdXRzLmxlbmd0aDtcbiAgd2hpbGUgKGlkeC0tKSB7XG4gICAgdmFyIGVsID0gaW5wdXRzW2lkeF07XG4gICAgZWwuY2hlY2tlZCAmJiBzYXZlZElucHV0Q2hlY2tlZC5wdXNoKGVsKTtcbiAgfVxufVxuZnVuY3Rpb24gX25leHRUaWNrKGZuKSB7XG4gIHJldHVybiBzZXRUaW1lb3V0KGZuLCAwKTtcbn1cbmZ1bmN0aW9uIF9jYW5jZWxOZXh0VGljayhpZCkge1xuICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn1cblxuLy8gRml4ZWQgIzk3MzpcbmlmIChkb2N1bWVudEV4aXN0cykge1xuICBvbihkb2N1bWVudCwgJ3RvdWNobW92ZScsIGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAoKFNvcnRhYmxlLmFjdGl2ZSB8fCBhd2FpdGluZ0RyYWdTdGFydGVkKSAmJiBldnQuY2FuY2VsYWJsZSkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gRXhwb3J0IHV0aWxzXG5Tb3J0YWJsZS51dGlscyA9IHtcbiAgb246IG9uLFxuICBvZmY6IG9mZixcbiAgY3NzOiBjc3MsXG4gIGZpbmQ6IGZpbmQsXG4gIGlzOiBmdW5jdGlvbiBpcyhlbCwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gISFjbG9zZXN0KGVsLCBzZWxlY3RvciwgZWwsIGZhbHNlKTtcbiAgfSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRocm90dGxlOiB0aHJvdHRsZSxcbiAgY2xvc2VzdDogY2xvc2VzdCxcbiAgdG9nZ2xlQ2xhc3M6IHRvZ2dsZUNsYXNzLFxuICBjbG9uZTogY2xvbmUsXG4gIGluZGV4OiBpbmRleCxcbiAgbmV4dFRpY2s6IF9uZXh0VGljayxcbiAgY2FuY2VsTmV4dFRpY2s6IF9jYW5jZWxOZXh0VGljayxcbiAgZGV0ZWN0RGlyZWN0aW9uOiBfZGV0ZWN0RGlyZWN0aW9uLFxuICBnZXRDaGlsZDogZ2V0Q2hpbGQsXG4gIGV4cGFuZG86IGV4cGFuZG9cbn07XG5cbi8qKlxyXG4gKiBHZXQgdGhlIFNvcnRhYmxlIGluc3RhbmNlIG9mIGFuIGVsZW1lbnRcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnRcclxuICogQHJldHVybiB7U29ydGFibGV8dW5kZWZpbmVkfSAgICAgICAgIFRoZSBpbnN0YW5jZSBvZiBTb3J0YWJsZVxyXG4gKi9cblNvcnRhYmxlLmdldCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50W2V4cGFuZG9dO1xufTtcblxuLyoqXHJcbiAqIE1vdW50IGEgcGx1Z2luIHRvIFNvcnRhYmxlXHJcbiAqIEBwYXJhbSAgey4uLlNvcnRhYmxlUGx1Z2lufFNvcnRhYmxlUGx1Z2luW119IHBsdWdpbnMgICAgICAgUGx1Z2lucyBiZWluZyBtb3VudGVkXHJcbiAqL1xuU29ydGFibGUubW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwbHVnaW5zID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHBsdWdpbnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cbiAgaWYgKHBsdWdpbnNbMF0uY29uc3RydWN0b3IgPT09IEFycmF5KSBwbHVnaW5zID0gcGx1Z2luc1swXTtcbiAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICBpZiAoIXBsdWdpbi5wcm90b3R5cGUgfHwgIXBsdWdpbi5wcm90b3R5cGUuY29uc3RydWN0b3IpIHtcbiAgICAgIHRocm93IFwiU29ydGFibGU6IE1vdW50ZWQgcGx1Z2luIG11c3QgYmUgYSBjb25zdHJ1Y3RvciBmdW5jdGlvbiwgbm90IFwiLmNvbmNhdCh7fS50b1N0cmluZy5jYWxsKHBsdWdpbikpO1xuICAgIH1cbiAgICBpZiAocGx1Z2luLnV0aWxzKSBTb3J0YWJsZS51dGlscyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBTb3J0YWJsZS51dGlscyksIHBsdWdpbi51dGlscyk7XG4gICAgUGx1Z2luTWFuYWdlci5tb3VudChwbHVnaW4pO1xuICB9KTtcbn07XG5cbi8qKlxyXG4gKiBDcmVhdGUgc29ydGFibGUgaW5zdGFuY2VcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gIGVsXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSAgICAgIFtvcHRpb25zXVxyXG4gKi9cblNvcnRhYmxlLmNyZWF0ZSA9IGZ1bmN0aW9uIChlbCwgb3B0aW9ucykge1xuICByZXR1cm4gbmV3IFNvcnRhYmxlKGVsLCBvcHRpb25zKTtcbn07XG5cbi8vIEV4cG9ydFxuU29ydGFibGUudmVyc2lvbiA9IHZlcnNpb247XG5cbnZhciBhdXRvU2Nyb2xscyA9IFtdLFxuICBzY3JvbGxFbCxcbiAgc2Nyb2xsUm9vdEVsLFxuICBzY3JvbGxpbmcgPSBmYWxzZSxcbiAgbGFzdEF1dG9TY3JvbGxYLFxuICBsYXN0QXV0b1Njcm9sbFksXG4gIHRvdWNoRXZ0JDEsXG4gIHBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsO1xuZnVuY3Rpb24gQXV0b1Njcm9sbFBsdWdpbigpIHtcbiAgZnVuY3Rpb24gQXV0b1Njcm9sbCgpIHtcbiAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgZm9yY2VBdXRvU2Nyb2xsRmFsbGJhY2s6IGZhbHNlLFxuICAgICAgc2Nyb2xsU2Vuc2l0aXZpdHk6IDMwLFxuICAgICAgc2Nyb2xsU3BlZWQ6IDEwLFxuICAgICAgYnViYmxlU2Nyb2xsOiB0cnVlXG4gICAgfTtcblxuICAgIC8vIEJpbmQgYWxsIHByaXZhdGUgbWV0aG9kc1xuICAgIGZvciAodmFyIGZuIGluIHRoaXMpIHtcbiAgICAgIGlmIChmbi5jaGFyQXQoMCkgPT09ICdfJyAmJiB0eXBlb2YgdGhpc1tmbl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpc1tmbl0gPSB0aGlzW2ZuXS5iaW5kKHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBBdXRvU2Nyb2xsLnByb3RvdHlwZSA9IHtcbiAgICBkcmFnU3RhcnRlZDogZnVuY3Rpb24gZHJhZ1N0YXJ0ZWQoX3JlZikge1xuICAgICAgdmFyIG9yaWdpbmFsRXZlbnQgPSBfcmVmLm9yaWdpbmFsRXZlbnQ7XG4gICAgICBpZiAodGhpcy5zb3J0YWJsZS5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICAgICAgb24oZG9jdW1lbnQsICdkcmFnb3ZlcicsIHRoaXMuX2hhbmRsZUF1dG9TY3JvbGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdXBwb3J0UG9pbnRlcikge1xuICAgICAgICAgIG9uKGRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCB0aGlzLl9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGwpO1xuICAgICAgICB9IGVsc2UgaWYgKG9yaWdpbmFsRXZlbnQudG91Y2hlcykge1xuICAgICAgICAgIG9uKGRvY3VtZW50LCAndG91Y2htb3ZlJywgdGhpcy5faGFuZGxlRmFsbGJhY2tBdXRvU2Nyb2xsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvbihkb2N1bWVudCwgJ21vdXNlbW92ZScsIHRoaXMuX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGRyYWdPdmVyQ29tcGxldGVkOiBmdW5jdGlvbiBkcmFnT3ZlckNvbXBsZXRlZChfcmVmMikge1xuICAgICAgdmFyIG9yaWdpbmFsRXZlbnQgPSBfcmVmMi5vcmlnaW5hbEV2ZW50O1xuICAgICAgLy8gRm9yIHdoZW4gYnViYmxpbmcgaXMgY2FuY2VsZWQgYW5kIHVzaW5nIGZhbGxiYWNrIChmYWxsYmFjayAndG91Y2htb3ZlJyBhbHdheXMgcmVhY2hlZClcbiAgICAgIGlmICghdGhpcy5vcHRpb25zLmRyYWdPdmVyQnViYmxlICYmICFvcmlnaW5hbEV2ZW50LnJvb3RFbCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVBdXRvU2Nyb2xsKG9yaWdpbmFsRXZlbnQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZHJvcDogZnVuY3Rpb24gZHJvcCgpIHtcbiAgICAgIGlmICh0aGlzLnNvcnRhYmxlLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgICAgICBvZmYoZG9jdW1lbnQsICdkcmFnb3ZlcicsIHRoaXMuX2hhbmRsZUF1dG9TY3JvbGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2ZmKGRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCB0aGlzLl9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGwpO1xuICAgICAgICBvZmYoZG9jdW1lbnQsICd0b3VjaG1vdmUnLCB0aGlzLl9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGwpO1xuICAgICAgICBvZmYoZG9jdW1lbnQsICdtb3VzZW1vdmUnLCB0aGlzLl9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGwpO1xuICAgICAgfVxuICAgICAgY2xlYXJQb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCgpO1xuICAgICAgY2xlYXJBdXRvU2Nyb2xscygpO1xuICAgICAgY2FuY2VsVGhyb3R0bGUoKTtcbiAgICB9LFxuICAgIG51bGxpbmc6IGZ1bmN0aW9uIG51bGxpbmcoKSB7XG4gICAgICB0b3VjaEV2dCQxID0gc2Nyb2xsUm9vdEVsID0gc2Nyb2xsRWwgPSBzY3JvbGxpbmcgPSBwb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCA9IGxhc3RBdXRvU2Nyb2xsWCA9IGxhc3RBdXRvU2Nyb2xsWSA9IG51bGw7XG4gICAgICBhdXRvU2Nyb2xscy5sZW5ndGggPSAwO1xuICAgIH0sXG4gICAgX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbDogZnVuY3Rpb24gX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbChldnQpIHtcbiAgICAgIHRoaXMuX2hhbmRsZUF1dG9TY3JvbGwoZXZ0LCB0cnVlKTtcbiAgICB9LFxuICAgIF9oYW5kbGVBdXRvU2Nyb2xsOiBmdW5jdGlvbiBfaGFuZGxlQXV0b1Njcm9sbChldnQsIGZhbGxiYWNrKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgdmFyIHggPSAoZXZ0LnRvdWNoZXMgPyBldnQudG91Y2hlc1swXSA6IGV2dCkuY2xpZW50WCxcbiAgICAgICAgeSA9IChldnQudG91Y2hlcyA/IGV2dC50b3VjaGVzWzBdIDogZXZ0KS5jbGllbnRZLFxuICAgICAgICBlbGVtID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KTtcbiAgICAgIHRvdWNoRXZ0JDEgPSBldnQ7XG5cbiAgICAgIC8vIElFIGRvZXMgbm90IHNlZW0gdG8gaGF2ZSBuYXRpdmUgYXV0b3Njcm9sbCxcbiAgICAgIC8vIEVkZ2UncyBhdXRvc2Nyb2xsIHNlZW1zIHRvbyBjb25kaXRpb25hbCxcbiAgICAgIC8vIE1BQ09TIFNhZmFyaSBkb2VzIG5vdCBoYXZlIGF1dG9zY3JvbGwsXG4gICAgICAvLyBGaXJlZm94IGFuZCBDaHJvbWUgYXJlIGdvb2RcbiAgICAgIGlmIChmYWxsYmFjayB8fCB0aGlzLm9wdGlvbnMuZm9yY2VBdXRvU2Nyb2xsRmFsbGJhY2sgfHwgRWRnZSB8fCBJRTExT3JMZXNzIHx8IFNhZmFyaSkge1xuICAgICAgICBhdXRvU2Nyb2xsKGV2dCwgdGhpcy5vcHRpb25zLCBlbGVtLCBmYWxsYmFjayk7XG5cbiAgICAgICAgLy8gTGlzdGVuZXIgZm9yIHBvaW50ZXIgZWxlbWVudCBjaGFuZ2VcbiAgICAgICAgdmFyIG9nRWxlbVNjcm9sbGVyID0gZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQoZWxlbSwgdHJ1ZSk7XG4gICAgICAgIGlmIChzY3JvbGxpbmcgJiYgKCFwb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCB8fCB4ICE9PSBsYXN0QXV0b1Njcm9sbFggfHwgeSAhPT0gbGFzdEF1dG9TY3JvbGxZKSkge1xuICAgICAgICAgIHBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsICYmIGNsZWFyUG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwoKTtcbiAgICAgICAgICAvLyBEZXRlY3QgZm9yIHBvaW50ZXIgZWxlbSBjaGFuZ2UsIGVtdWxhdGluZyBuYXRpdmUgRG5EIGJlaGF2aW91clxuICAgICAgICAgIHBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG5ld0VsZW0gPSBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHgsIHkpLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChuZXdFbGVtICE9PSBvZ0VsZW1TY3JvbGxlcikge1xuICAgICAgICAgICAgICBvZ0VsZW1TY3JvbGxlciA9IG5ld0VsZW07XG4gICAgICAgICAgICAgIGNsZWFyQXV0b1Njcm9sbHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF1dG9TY3JvbGwoZXZ0LCBfdGhpcy5vcHRpb25zLCBuZXdFbGVtLCBmYWxsYmFjayk7XG4gICAgICAgICAgfSwgMTApO1xuICAgICAgICAgIGxhc3RBdXRvU2Nyb2xsWCA9IHg7XG4gICAgICAgICAgbGFzdEF1dG9TY3JvbGxZID0geTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgRG5EIGlzIGVuYWJsZWQgKGFuZCBicm93c2VyIGhhcyBnb29kIGF1dG9zY3JvbGxpbmcpLCBmaXJzdCBhdXRvc2Nyb2xsIHdpbGwgYWxyZWFkeSBzY3JvbGwsIHNvIGdldCBwYXJlbnQgYXV0b3Njcm9sbCBvZiBmaXJzdCBhdXRvc2Nyb2xsXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmJ1YmJsZVNjcm9sbCB8fCBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChlbGVtLCB0cnVlKSA9PT0gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpKSB7XG4gICAgICAgICAgY2xlYXJBdXRvU2Nyb2xscygpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhdXRvU2Nyb2xsKGV2dCwgdGhpcy5vcHRpb25zLCBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChlbGVtLCBmYWxzZSksIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcyhBdXRvU2Nyb2xsLCB7XG4gICAgcGx1Z2luTmFtZTogJ3Njcm9sbCcsXG4gICAgaW5pdGlhbGl6ZUJ5RGVmYXVsdDogdHJ1ZVxuICB9KTtcbn1cbmZ1bmN0aW9uIGNsZWFyQXV0b1Njcm9sbHMoKSB7XG4gIGF1dG9TY3JvbGxzLmZvckVhY2goZnVuY3Rpb24gKGF1dG9TY3JvbGwpIHtcbiAgICBjbGVhckludGVydmFsKGF1dG9TY3JvbGwucGlkKTtcbiAgfSk7XG4gIGF1dG9TY3JvbGxzID0gW107XG59XG5mdW5jdGlvbiBjbGVhclBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsKCkge1xuICBjbGVhckludGVydmFsKHBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsKTtcbn1cbnZhciBhdXRvU2Nyb2xsID0gdGhyb3R0bGUoZnVuY3Rpb24gKGV2dCwgb3B0aW9ucywgcm9vdEVsLCBpc0ZhbGxiYWNrKSB7XG4gIC8vIEJ1ZzogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTA1NTIxXG4gIGlmICghb3B0aW9ucy5zY3JvbGwpIHJldHVybjtcbiAgdmFyIHggPSAoZXZ0LnRvdWNoZXMgPyBldnQudG91Y2hlc1swXSA6IGV2dCkuY2xpZW50WCxcbiAgICB5ID0gKGV2dC50b3VjaGVzID8gZXZ0LnRvdWNoZXNbMF0gOiBldnQpLmNsaWVudFksXG4gICAgc2VucyA9IG9wdGlvbnMuc2Nyb2xsU2Vuc2l0aXZpdHksXG4gICAgc3BlZWQgPSBvcHRpb25zLnNjcm9sbFNwZWVkLFxuICAgIHdpblNjcm9sbGVyID0gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpO1xuICB2YXIgc2Nyb2xsVGhpc0luc3RhbmNlID0gZmFsc2UsXG4gICAgc2Nyb2xsQ3VzdG9tRm47XG5cbiAgLy8gTmV3IHNjcm9sbCByb290LCBzZXQgc2Nyb2xsRWxcbiAgaWYgKHNjcm9sbFJvb3RFbCAhPT0gcm9vdEVsKSB7XG4gICAgc2Nyb2xsUm9vdEVsID0gcm9vdEVsO1xuICAgIGNsZWFyQXV0b1Njcm9sbHMoKTtcbiAgICBzY3JvbGxFbCA9IG9wdGlvbnMuc2Nyb2xsO1xuICAgIHNjcm9sbEN1c3RvbUZuID0gb3B0aW9ucy5zY3JvbGxGbjtcbiAgICBpZiAoc2Nyb2xsRWwgPT09IHRydWUpIHtcbiAgICAgIHNjcm9sbEVsID0gZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQocm9vdEVsLCB0cnVlKTtcbiAgICB9XG4gIH1cbiAgdmFyIGxheWVyc091dCA9IDA7XG4gIHZhciBjdXJyZW50UGFyZW50ID0gc2Nyb2xsRWw7XG4gIGRvIHtcbiAgICB2YXIgZWwgPSBjdXJyZW50UGFyZW50LFxuICAgICAgcmVjdCA9IGdldFJlY3QoZWwpLFxuICAgICAgdG9wID0gcmVjdC50b3AsXG4gICAgICBib3R0b20gPSByZWN0LmJvdHRvbSxcbiAgICAgIGxlZnQgPSByZWN0LmxlZnQsXG4gICAgICByaWdodCA9IHJlY3QucmlnaHQsXG4gICAgICB3aWR0aCA9IHJlY3Qud2lkdGgsXG4gICAgICBoZWlnaHQgPSByZWN0LmhlaWdodCxcbiAgICAgIGNhblNjcm9sbFggPSB2b2lkIDAsXG4gICAgICBjYW5TY3JvbGxZID0gdm9pZCAwLFxuICAgICAgc2Nyb2xsV2lkdGggPSBlbC5zY3JvbGxXaWR0aCxcbiAgICAgIHNjcm9sbEhlaWdodCA9IGVsLnNjcm9sbEhlaWdodCxcbiAgICAgIGVsQ1NTID0gY3NzKGVsKSxcbiAgICAgIHNjcm9sbFBvc1ggPSBlbC5zY3JvbGxMZWZ0LFxuICAgICAgc2Nyb2xsUG9zWSA9IGVsLnNjcm9sbFRvcDtcbiAgICBpZiAoZWwgPT09IHdpblNjcm9sbGVyKSB7XG4gICAgICBjYW5TY3JvbGxYID0gd2lkdGggPCBzY3JvbGxXaWR0aCAmJiAoZWxDU1Mub3ZlcmZsb3dYID09PSAnYXV0bycgfHwgZWxDU1Mub3ZlcmZsb3dYID09PSAnc2Nyb2xsJyB8fCBlbENTUy5vdmVyZmxvd1ggPT09ICd2aXNpYmxlJyk7XG4gICAgICBjYW5TY3JvbGxZID0gaGVpZ2h0IDwgc2Nyb2xsSGVpZ2h0ICYmIChlbENTUy5vdmVyZmxvd1kgPT09ICdhdXRvJyB8fCBlbENTUy5vdmVyZmxvd1kgPT09ICdzY3JvbGwnIHx8IGVsQ1NTLm92ZXJmbG93WSA9PT0gJ3Zpc2libGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FuU2Nyb2xsWCA9IHdpZHRoIDwgc2Nyb2xsV2lkdGggJiYgKGVsQ1NTLm92ZXJmbG93WCA9PT0gJ2F1dG8nIHx8IGVsQ1NTLm92ZXJmbG93WCA9PT0gJ3Njcm9sbCcpO1xuICAgICAgY2FuU2Nyb2xsWSA9IGhlaWdodCA8IHNjcm9sbEhlaWdodCAmJiAoZWxDU1Mub3ZlcmZsb3dZID09PSAnYXV0bycgfHwgZWxDU1Mub3ZlcmZsb3dZID09PSAnc2Nyb2xsJyk7XG4gICAgfVxuICAgIHZhciB2eCA9IGNhblNjcm9sbFggJiYgKE1hdGguYWJzKHJpZ2h0IC0geCkgPD0gc2VucyAmJiBzY3JvbGxQb3NYICsgd2lkdGggPCBzY3JvbGxXaWR0aCkgLSAoTWF0aC5hYnMobGVmdCAtIHgpIDw9IHNlbnMgJiYgISFzY3JvbGxQb3NYKTtcbiAgICB2YXIgdnkgPSBjYW5TY3JvbGxZICYmIChNYXRoLmFicyhib3R0b20gLSB5KSA8PSBzZW5zICYmIHNjcm9sbFBvc1kgKyBoZWlnaHQgPCBzY3JvbGxIZWlnaHQpIC0gKE1hdGguYWJzKHRvcCAtIHkpIDw9IHNlbnMgJiYgISFzY3JvbGxQb3NZKTtcbiAgICBpZiAoIWF1dG9TY3JvbGxzW2xheWVyc091dF0pIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IGxheWVyc091dDsgaSsrKSB7XG4gICAgICAgIGlmICghYXV0b1Njcm9sbHNbaV0pIHtcbiAgICAgICAgICBhdXRvU2Nyb2xsc1tpXSA9IHt9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhdXRvU2Nyb2xsc1tsYXllcnNPdXRdLnZ4ICE9IHZ4IHx8IGF1dG9TY3JvbGxzW2xheWVyc091dF0udnkgIT0gdnkgfHwgYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS5lbCAhPT0gZWwpIHtcbiAgICAgIGF1dG9TY3JvbGxzW2xheWVyc091dF0uZWwgPSBlbDtcbiAgICAgIGF1dG9TY3JvbGxzW2xheWVyc091dF0udnggPSB2eDtcbiAgICAgIGF1dG9TY3JvbGxzW2xheWVyc091dF0udnkgPSB2eTtcbiAgICAgIGNsZWFySW50ZXJ2YWwoYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS5waWQpO1xuICAgICAgaWYgKHZ4ICE9IDAgfHwgdnkgIT0gMCkge1xuICAgICAgICBzY3JvbGxUaGlzSW5zdGFuY2UgPSB0cnVlO1xuICAgICAgICAvKiBqc2hpbnQgbG9vcGZ1bmM6dHJ1ZSAqL1xuICAgICAgICBhdXRvU2Nyb2xsc1tsYXllcnNPdXRdLnBpZCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBlbXVsYXRlIGRyYWcgb3ZlciBkdXJpbmcgYXV0b3Njcm9sbCAoZmFsbGJhY2spLCBlbXVsYXRpbmcgbmF0aXZlIERuRCBiZWhhdmlvdXJcbiAgICAgICAgICBpZiAoaXNGYWxsYmFjayAmJiB0aGlzLmxheWVyID09PSAwKSB7XG4gICAgICAgICAgICBTb3J0YWJsZS5hY3RpdmUuX29uVG91Y2hNb3ZlKHRvdWNoRXZ0JDEpOyAvLyBUbyBtb3ZlIGdob3N0IGlmIGl0IGlzIHBvc2l0aW9uZWQgYWJzb2x1dGVseVxuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgc2Nyb2xsT2Zmc2V0WSA9IGF1dG9TY3JvbGxzW3RoaXMubGF5ZXJdLnZ5ID8gYXV0b1Njcm9sbHNbdGhpcy5sYXllcl0udnkgKiBzcGVlZCA6IDA7XG4gICAgICAgICAgdmFyIHNjcm9sbE9mZnNldFggPSBhdXRvU2Nyb2xsc1t0aGlzLmxheWVyXS52eCA/IGF1dG9TY3JvbGxzW3RoaXMubGF5ZXJdLnZ4ICogc3BlZWQgOiAwO1xuICAgICAgICAgIGlmICh0eXBlb2Ygc2Nyb2xsQ3VzdG9tRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxDdXN0b21Gbi5jYWxsKFNvcnRhYmxlLmRyYWdnZWQucGFyZW50Tm9kZVtleHBhbmRvXSwgc2Nyb2xsT2Zmc2V0WCwgc2Nyb2xsT2Zmc2V0WSwgZXZ0LCB0b3VjaEV2dCQxLCBhdXRvU2Nyb2xsc1t0aGlzLmxheWVyXS5lbCkgIT09ICdjb250aW51ZScpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzY3JvbGxCeShhdXRvU2Nyb2xsc1t0aGlzLmxheWVyXS5lbCwgc2Nyb2xsT2Zmc2V0WCwgc2Nyb2xsT2Zmc2V0WSk7XG4gICAgICAgIH0uYmluZCh7XG4gICAgICAgICAgbGF5ZXI6IGxheWVyc091dFxuICAgICAgICB9KSwgMjQpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXllcnNPdXQrKztcbiAgfSB3aGlsZSAob3B0aW9ucy5idWJibGVTY3JvbGwgJiYgY3VycmVudFBhcmVudCAhPT0gd2luU2Nyb2xsZXIgJiYgKGN1cnJlbnRQYXJlbnQgPSBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChjdXJyZW50UGFyZW50LCBmYWxzZSkpKTtcbiAgc2Nyb2xsaW5nID0gc2Nyb2xsVGhpc0luc3RhbmNlOyAvLyBpbiBjYXNlIGFub3RoZXIgZnVuY3Rpb24gY2F0Y2hlcyBzY3JvbGxpbmcgYXMgZmFsc2UgaW4gYmV0d2VlbiB3aGVuIGl0IGlzIG5vdFxufSwgMzApO1xuXG52YXIgZHJvcCA9IGZ1bmN0aW9uIGRyb3AoX3JlZikge1xuICB2YXIgb3JpZ2luYWxFdmVudCA9IF9yZWYub3JpZ2luYWxFdmVudCxcbiAgICBwdXRTb3J0YWJsZSA9IF9yZWYucHV0U29ydGFibGUsXG4gICAgZHJhZ0VsID0gX3JlZi5kcmFnRWwsXG4gICAgYWN0aXZlU29ydGFibGUgPSBfcmVmLmFjdGl2ZVNvcnRhYmxlLFxuICAgIGRpc3BhdGNoU29ydGFibGVFdmVudCA9IF9yZWYuZGlzcGF0Y2hTb3J0YWJsZUV2ZW50LFxuICAgIGhpZGVHaG9zdEZvclRhcmdldCA9IF9yZWYuaGlkZUdob3N0Rm9yVGFyZ2V0LFxuICAgIHVuaGlkZUdob3N0Rm9yVGFyZ2V0ID0gX3JlZi51bmhpZGVHaG9zdEZvclRhcmdldDtcbiAgaWYgKCFvcmlnaW5hbEV2ZW50KSByZXR1cm47XG4gIHZhciB0b1NvcnRhYmxlID0gcHV0U29ydGFibGUgfHwgYWN0aXZlU29ydGFibGU7XG4gIGhpZGVHaG9zdEZvclRhcmdldCgpO1xuICB2YXIgdG91Y2ggPSBvcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzICYmIG9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoID8gb3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlc1swXSA6IG9yaWdpbmFsRXZlbnQ7XG4gIHZhciB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHRvdWNoLmNsaWVudFgsIHRvdWNoLmNsaWVudFkpO1xuICB1bmhpZGVHaG9zdEZvclRhcmdldCgpO1xuICBpZiAodG9Tb3J0YWJsZSAmJiAhdG9Tb3J0YWJsZS5lbC5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50KCdzcGlsbCcpO1xuICAgIHRoaXMub25TcGlsbCh7XG4gICAgICBkcmFnRWw6IGRyYWdFbCxcbiAgICAgIHB1dFNvcnRhYmxlOiBwdXRTb3J0YWJsZVxuICAgIH0pO1xuICB9XG59O1xuZnVuY3Rpb24gUmV2ZXJ0KCkge31cblJldmVydC5wcm90b3R5cGUgPSB7XG4gIHN0YXJ0SW5kZXg6IG51bGwsXG4gIGRyYWdTdGFydDogZnVuY3Rpb24gZHJhZ1N0YXJ0KF9yZWYyKSB7XG4gICAgdmFyIG9sZERyYWdnYWJsZUluZGV4ID0gX3JlZjIub2xkRHJhZ2dhYmxlSW5kZXg7XG4gICAgdGhpcy5zdGFydEluZGV4ID0gb2xkRHJhZ2dhYmxlSW5kZXg7XG4gIH0sXG4gIG9uU3BpbGw6IGZ1bmN0aW9uIG9uU3BpbGwoX3JlZjMpIHtcbiAgICB2YXIgZHJhZ0VsID0gX3JlZjMuZHJhZ0VsLFxuICAgICAgcHV0U29ydGFibGUgPSBfcmVmMy5wdXRTb3J0YWJsZTtcbiAgICB0aGlzLnNvcnRhYmxlLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgIGlmIChwdXRTb3J0YWJsZSkge1xuICAgICAgcHV0U29ydGFibGUuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgfVxuICAgIHZhciBuZXh0U2libGluZyA9IGdldENoaWxkKHRoaXMuc29ydGFibGUuZWwsIHRoaXMuc3RhcnRJbmRleCwgdGhpcy5vcHRpb25zKTtcbiAgICBpZiAobmV4dFNpYmxpbmcpIHtcbiAgICAgIHRoaXMuc29ydGFibGUuZWwuaW5zZXJ0QmVmb3JlKGRyYWdFbCwgbmV4dFNpYmxpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNvcnRhYmxlLmVsLmFwcGVuZENoaWxkKGRyYWdFbCk7XG4gICAgfVxuICAgIHRoaXMuc29ydGFibGUuYW5pbWF0ZUFsbCgpO1xuICAgIGlmIChwdXRTb3J0YWJsZSkge1xuICAgICAgcHV0U29ydGFibGUuYW5pbWF0ZUFsbCgpO1xuICAgIH1cbiAgfSxcbiAgZHJvcDogZHJvcFxufTtcbl9leHRlbmRzKFJldmVydCwge1xuICBwbHVnaW5OYW1lOiAncmV2ZXJ0T25TcGlsbCdcbn0pO1xuZnVuY3Rpb24gUmVtb3ZlKCkge31cblJlbW92ZS5wcm90b3R5cGUgPSB7XG4gIG9uU3BpbGw6IGZ1bmN0aW9uIG9uU3BpbGwoX3JlZjQpIHtcbiAgICB2YXIgZHJhZ0VsID0gX3JlZjQuZHJhZ0VsLFxuICAgICAgcHV0U29ydGFibGUgPSBfcmVmNC5wdXRTb3J0YWJsZTtcbiAgICB2YXIgcGFyZW50U29ydGFibGUgPSBwdXRTb3J0YWJsZSB8fCB0aGlzLnNvcnRhYmxlO1xuICAgIHBhcmVudFNvcnRhYmxlLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgIGRyYWdFbC5wYXJlbnROb2RlICYmIGRyYWdFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRyYWdFbCk7XG4gICAgcGFyZW50U29ydGFibGUuYW5pbWF0ZUFsbCgpO1xuICB9LFxuICBkcm9wOiBkcm9wXG59O1xuX2V4dGVuZHMoUmVtb3ZlLCB7XG4gIHBsdWdpbk5hbWU6ICdyZW1vdmVPblNwaWxsJ1xufSk7XG5cbnZhciBsYXN0U3dhcEVsO1xuZnVuY3Rpb24gU3dhcFBsdWdpbigpIHtcbiAgZnVuY3Rpb24gU3dhcCgpIHtcbiAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgc3dhcENsYXNzOiAnc29ydGFibGUtc3dhcC1oaWdobGlnaHQnXG4gICAgfTtcbiAgfVxuICBTd2FwLnByb3RvdHlwZSA9IHtcbiAgICBkcmFnU3RhcnQ6IGZ1bmN0aW9uIGRyYWdTdGFydChfcmVmKSB7XG4gICAgICB2YXIgZHJhZ0VsID0gX3JlZi5kcmFnRWw7XG4gICAgICBsYXN0U3dhcEVsID0gZHJhZ0VsO1xuICAgIH0sXG4gICAgZHJhZ092ZXJWYWxpZDogZnVuY3Rpb24gZHJhZ092ZXJWYWxpZChfcmVmMikge1xuICAgICAgdmFyIGNvbXBsZXRlZCA9IF9yZWYyLmNvbXBsZXRlZCxcbiAgICAgICAgdGFyZ2V0ID0gX3JlZjIudGFyZ2V0LFxuICAgICAgICBvbk1vdmUgPSBfcmVmMi5vbk1vdmUsXG4gICAgICAgIGFjdGl2ZVNvcnRhYmxlID0gX3JlZjIuYWN0aXZlU29ydGFibGUsXG4gICAgICAgIGNoYW5nZWQgPSBfcmVmMi5jaGFuZ2VkLFxuICAgICAgICBjYW5jZWwgPSBfcmVmMi5jYW5jZWw7XG4gICAgICBpZiAoIWFjdGl2ZVNvcnRhYmxlLm9wdGlvbnMuc3dhcCkgcmV0dXJuO1xuICAgICAgdmFyIGVsID0gdGhpcy5zb3J0YWJsZS5lbCxcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSBlbCkge1xuICAgICAgICB2YXIgcHJldlN3YXBFbCA9IGxhc3RTd2FwRWw7XG4gICAgICAgIGlmIChvbk1vdmUodGFyZ2V0KSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICB0b2dnbGVDbGFzcyh0YXJnZXQsIG9wdGlvbnMuc3dhcENsYXNzLCB0cnVlKTtcbiAgICAgICAgICBsYXN0U3dhcEVsID0gdGFyZ2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhc3RTd2FwRWwgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmV2U3dhcEVsICYmIHByZXZTd2FwRWwgIT09IGxhc3RTd2FwRWwpIHtcbiAgICAgICAgICB0b2dnbGVDbGFzcyhwcmV2U3dhcEVsLCBvcHRpb25zLnN3YXBDbGFzcywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjaGFuZ2VkKCk7XG4gICAgICBjb21wbGV0ZWQodHJ1ZSk7XG4gICAgICBjYW5jZWwoKTtcbiAgICB9LFxuICAgIGRyb3A6IGZ1bmN0aW9uIGRyb3AoX3JlZjMpIHtcbiAgICAgIHZhciBhY3RpdmVTb3J0YWJsZSA9IF9yZWYzLmFjdGl2ZVNvcnRhYmxlLFxuICAgICAgICBwdXRTb3J0YWJsZSA9IF9yZWYzLnB1dFNvcnRhYmxlLFxuICAgICAgICBkcmFnRWwgPSBfcmVmMy5kcmFnRWw7XG4gICAgICB2YXIgdG9Tb3J0YWJsZSA9IHB1dFNvcnRhYmxlIHx8IHRoaXMuc29ydGFibGU7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgIGxhc3RTd2FwRWwgJiYgdG9nZ2xlQ2xhc3MobGFzdFN3YXBFbCwgb3B0aW9ucy5zd2FwQ2xhc3MsIGZhbHNlKTtcbiAgICAgIGlmIChsYXN0U3dhcEVsICYmIChvcHRpb25zLnN3YXAgfHwgcHV0U29ydGFibGUgJiYgcHV0U29ydGFibGUub3B0aW9ucy5zd2FwKSkge1xuICAgICAgICBpZiAoZHJhZ0VsICE9PSBsYXN0U3dhcEVsKSB7XG4gICAgICAgICAgdG9Tb3J0YWJsZS5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcbiAgICAgICAgICBpZiAodG9Tb3J0YWJsZSAhPT0gYWN0aXZlU29ydGFibGUpIGFjdGl2ZVNvcnRhYmxlLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgICAgICAgIHN3YXBOb2RlcyhkcmFnRWwsIGxhc3RTd2FwRWwpO1xuICAgICAgICAgIHRvU29ydGFibGUuYW5pbWF0ZUFsbCgpO1xuICAgICAgICAgIGlmICh0b1NvcnRhYmxlICE9PSBhY3RpdmVTb3J0YWJsZSkgYWN0aXZlU29ydGFibGUuYW5pbWF0ZUFsbCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBudWxsaW5nOiBmdW5jdGlvbiBudWxsaW5nKCkge1xuICAgICAgbGFzdFN3YXBFbCA9IG51bGw7XG4gICAgfVxuICB9O1xuICByZXR1cm4gX2V4dGVuZHMoU3dhcCwge1xuICAgIHBsdWdpbk5hbWU6ICdzd2FwJyxcbiAgICBldmVudFByb3BlcnRpZXM6IGZ1bmN0aW9uIGV2ZW50UHJvcGVydGllcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN3YXBJdGVtOiBsYXN0U3dhcEVsXG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBzd2FwTm9kZXMobjEsIG4yKSB7XG4gIHZhciBwMSA9IG4xLnBhcmVudE5vZGUsXG4gICAgcDIgPSBuMi5wYXJlbnROb2RlLFxuICAgIGkxLFxuICAgIGkyO1xuICBpZiAoIXAxIHx8ICFwMiB8fCBwMS5pc0VxdWFsTm9kZShuMikgfHwgcDIuaXNFcXVhbE5vZGUobjEpKSByZXR1cm47XG4gIGkxID0gaW5kZXgobjEpO1xuICBpMiA9IGluZGV4KG4yKTtcbiAgaWYgKHAxLmlzRXF1YWxOb2RlKHAyKSAmJiBpMSA8IGkyKSB7XG4gICAgaTIrKztcbiAgfVxuICBwMS5pbnNlcnRCZWZvcmUobjIsIHAxLmNoaWxkcmVuW2kxXSk7XG4gIHAyLmluc2VydEJlZm9yZShuMSwgcDIuY2hpbGRyZW5baTJdKTtcbn1cblxudmFyIG11bHRpRHJhZ0VsZW1lbnRzID0gW10sXG4gIG11bHRpRHJhZ0Nsb25lcyA9IFtdLFxuICBsYXN0TXVsdGlEcmFnU2VsZWN0LFxuICAvLyBmb3Igc2VsZWN0aW9uIHdpdGggbW9kaWZpZXIga2V5IGRvd24gKFNISUZUKVxuICBtdWx0aURyYWdTb3J0YWJsZSxcbiAgaW5pdGlhbEZvbGRpbmcgPSBmYWxzZSxcbiAgLy8gSW5pdGlhbCBtdWx0aS1kcmFnIGZvbGQgd2hlbiBkcmFnIHN0YXJ0ZWRcbiAgZm9sZGluZyA9IGZhbHNlLFxuICAvLyBGb2xkaW5nIGFueSBvdGhlciB0aW1lXG4gIGRyYWdTdGFydGVkID0gZmFsc2UsXG4gIGRyYWdFbCQxLFxuICBjbG9uZXNGcm9tUmVjdCxcbiAgY2xvbmVzSGlkZGVuO1xuZnVuY3Rpb24gTXVsdGlEcmFnUGx1Z2luKCkge1xuICBmdW5jdGlvbiBNdWx0aURyYWcoc29ydGFibGUpIHtcbiAgICAvLyBCaW5kIGFsbCBwcml2YXRlIG1ldGhvZHNcbiAgICBmb3IgKHZhciBmbiBpbiB0aGlzKSB7XG4gICAgICBpZiAoZm4uY2hhckF0KDApID09PSAnXycgJiYgdHlwZW9mIHRoaXNbZm5dID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXNbZm5dID0gdGhpc1tmbl0uYmluZCh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFzb3J0YWJsZS5vcHRpb25zLmF2b2lkSW1wbGljaXREZXNlbGVjdCkge1xuICAgICAgaWYgKHNvcnRhYmxlLm9wdGlvbnMuc3VwcG9ydFBvaW50ZXIpIHtcbiAgICAgICAgb24oZG9jdW1lbnQsICdwb2ludGVydXAnLCB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbihkb2N1bWVudCwgJ21vdXNldXAnLCB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZyk7XG4gICAgICAgIG9uKGRvY3VtZW50LCAndG91Y2hlbmQnLCB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZyk7XG4gICAgICB9XG4gICAgfVxuICAgIG9uKGRvY3VtZW50LCAna2V5ZG93bicsIHRoaXMuX2NoZWNrS2V5RG93bik7XG4gICAgb24oZG9jdW1lbnQsICdrZXl1cCcsIHRoaXMuX2NoZWNrS2V5VXApO1xuICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICBzZWxlY3RlZENsYXNzOiAnc29ydGFibGUtc2VsZWN0ZWQnLFxuICAgICAgbXVsdGlEcmFnS2V5OiBudWxsLFxuICAgICAgYXZvaWRJbXBsaWNpdERlc2VsZWN0OiBmYWxzZSxcbiAgICAgIHNldERhdGE6IGZ1bmN0aW9uIHNldERhdGEoZGF0YVRyYW5zZmVyLCBkcmFnRWwpIHtcbiAgICAgICAgdmFyIGRhdGEgPSAnJztcbiAgICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnRzLmxlbmd0aCAmJiBtdWx0aURyYWdTb3J0YWJsZSA9PT0gc29ydGFibGUpIHtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50LCBpKSB7XG4gICAgICAgICAgICBkYXRhICs9ICghaSA/ICcnIDogJywgJykgKyBtdWx0aURyYWdFbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRhdGEgPSBkcmFnRWwudGV4dENvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YVRyYW5zZmVyLnNldERhdGEoJ1RleHQnLCBkYXRhKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIE11bHRpRHJhZy5wcm90b3R5cGUgPSB7XG4gICAgbXVsdGlEcmFnS2V5RG93bjogZmFsc2UsXG4gICAgaXNNdWx0aURyYWc6IGZhbHNlLFxuICAgIGRlbGF5U3RhcnRHbG9iYWw6IGZ1bmN0aW9uIGRlbGF5U3RhcnRHbG9iYWwoX3JlZikge1xuICAgICAgdmFyIGRyYWdnZWQgPSBfcmVmLmRyYWdFbDtcbiAgICAgIGRyYWdFbCQxID0gZHJhZ2dlZDtcbiAgICB9LFxuICAgIGRlbGF5RW5kZWQ6IGZ1bmN0aW9uIGRlbGF5RW5kZWQoKSB7XG4gICAgICB0aGlzLmlzTXVsdGlEcmFnID0gfm11bHRpRHJhZ0VsZW1lbnRzLmluZGV4T2YoZHJhZ0VsJDEpO1xuICAgIH0sXG4gICAgc2V0dXBDbG9uZTogZnVuY3Rpb24gc2V0dXBDbG9uZShfcmVmMikge1xuICAgICAgdmFyIHNvcnRhYmxlID0gX3JlZjIuc29ydGFibGUsXG4gICAgICAgIGNhbmNlbCA9IF9yZWYyLmNhbmNlbDtcbiAgICAgIGlmICghdGhpcy5pc011bHRpRHJhZykgcmV0dXJuO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtdWx0aURyYWdFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBtdWx0aURyYWdDbG9uZXMucHVzaChjbG9uZShtdWx0aURyYWdFbGVtZW50c1tpXSkpO1xuICAgICAgICBtdWx0aURyYWdDbG9uZXNbaV0uc29ydGFibGVJbmRleCA9IG11bHRpRHJhZ0VsZW1lbnRzW2ldLnNvcnRhYmxlSW5kZXg7XG4gICAgICAgIG11bHRpRHJhZ0Nsb25lc1tpXS5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgICAgbXVsdGlEcmFnQ2xvbmVzW2ldLnN0eWxlWyd3aWxsLWNoYW5nZSddID0gJyc7XG4gICAgICAgIHRvZ2dsZUNsYXNzKG11bHRpRHJhZ0Nsb25lc1tpXSwgdGhpcy5vcHRpb25zLnNlbGVjdGVkQ2xhc3MsIGZhbHNlKTtcbiAgICAgICAgbXVsdGlEcmFnRWxlbWVudHNbaV0gPT09IGRyYWdFbCQxICYmIHRvZ2dsZUNsYXNzKG11bHRpRHJhZ0Nsb25lc1tpXSwgdGhpcy5vcHRpb25zLmNob3NlbkNsYXNzLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICBzb3J0YWJsZS5faGlkZUNsb25lKCk7XG4gICAgICBjYW5jZWwoKTtcbiAgICB9LFxuICAgIGNsb25lOiBmdW5jdGlvbiBjbG9uZShfcmVmMykge1xuICAgICAgdmFyIHNvcnRhYmxlID0gX3JlZjMuc29ydGFibGUsXG4gICAgICAgIHJvb3RFbCA9IF9yZWYzLnJvb3RFbCxcbiAgICAgICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50ID0gX3JlZjMuZGlzcGF0Y2hTb3J0YWJsZUV2ZW50LFxuICAgICAgICBjYW5jZWwgPSBfcmVmMy5jYW5jZWw7XG4gICAgICBpZiAoIXRoaXMuaXNNdWx0aURyYWcpIHJldHVybjtcbiAgICAgIGlmICghdGhpcy5vcHRpb25zLnJlbW92ZUNsb25lT25IaWRlKSB7XG4gICAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50cy5sZW5ndGggJiYgbXVsdGlEcmFnU29ydGFibGUgPT09IHNvcnRhYmxlKSB7XG4gICAgICAgICAgaW5zZXJ0TXVsdGlEcmFnQ2xvbmVzKHRydWUsIHJvb3RFbCk7XG4gICAgICAgICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50KCdjbG9uZScpO1xuICAgICAgICAgIGNhbmNlbCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBzaG93Q2xvbmU6IGZ1bmN0aW9uIHNob3dDbG9uZShfcmVmNCkge1xuICAgICAgdmFyIGNsb25lTm93U2hvd24gPSBfcmVmNC5jbG9uZU5vd1Nob3duLFxuICAgICAgICByb290RWwgPSBfcmVmNC5yb290RWwsXG4gICAgICAgIGNhbmNlbCA9IF9yZWY0LmNhbmNlbDtcbiAgICAgIGlmICghdGhpcy5pc011bHRpRHJhZykgcmV0dXJuO1xuICAgICAgaW5zZXJ0TXVsdGlEcmFnQ2xvbmVzKGZhbHNlLCByb290RWwpO1xuICAgICAgbXVsdGlEcmFnQ2xvbmVzLmZvckVhY2goZnVuY3Rpb24gKGNsb25lKSB7XG4gICAgICAgIGNzcyhjbG9uZSwgJ2Rpc3BsYXknLCAnJyk7XG4gICAgICB9KTtcbiAgICAgIGNsb25lTm93U2hvd24oKTtcbiAgICAgIGNsb25lc0hpZGRlbiA9IGZhbHNlO1xuICAgICAgY2FuY2VsKCk7XG4gICAgfSxcbiAgICBoaWRlQ2xvbmU6IGZ1bmN0aW9uIGhpZGVDbG9uZShfcmVmNSkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIHZhciBzb3J0YWJsZSA9IF9yZWY1LnNvcnRhYmxlLFxuICAgICAgICBjbG9uZU5vd0hpZGRlbiA9IF9yZWY1LmNsb25lTm93SGlkZGVuLFxuICAgICAgICBjYW5jZWwgPSBfcmVmNS5jYW5jZWw7XG4gICAgICBpZiAoIXRoaXMuaXNNdWx0aURyYWcpIHJldHVybjtcbiAgICAgIG11bHRpRHJhZ0Nsb25lcy5mb3JFYWNoKGZ1bmN0aW9uIChjbG9uZSkge1xuICAgICAgICBjc3MoY2xvbmUsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMucmVtb3ZlQ2xvbmVPbkhpZGUgJiYgY2xvbmUucGFyZW50Tm9kZSkge1xuICAgICAgICAgIGNsb25lLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2xvbmUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNsb25lTm93SGlkZGVuKCk7XG4gICAgICBjbG9uZXNIaWRkZW4gPSB0cnVlO1xuICAgICAgY2FuY2VsKCk7XG4gICAgfSxcbiAgICBkcmFnU3RhcnRHbG9iYWw6IGZ1bmN0aW9uIGRyYWdTdGFydEdsb2JhbChfcmVmNikge1xuICAgICAgdmFyIHNvcnRhYmxlID0gX3JlZjYuc29ydGFibGU7XG4gICAgICBpZiAoIXRoaXMuaXNNdWx0aURyYWcgJiYgbXVsdGlEcmFnU29ydGFibGUpIHtcbiAgICAgICAgbXVsdGlEcmFnU29ydGFibGUubXVsdGlEcmFnLl9kZXNlbGVjdE11bHRpRHJhZygpO1xuICAgICAgfVxuICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICBtdWx0aURyYWdFbGVtZW50LnNvcnRhYmxlSW5kZXggPSBpbmRleChtdWx0aURyYWdFbGVtZW50KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBTb3J0IG11bHRpLWRyYWcgZWxlbWVudHNcbiAgICAgIG11bHRpRHJhZ0VsZW1lbnRzID0gbXVsdGlEcmFnRWxlbWVudHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYS5zb3J0YWJsZUluZGV4IC0gYi5zb3J0YWJsZUluZGV4O1xuICAgICAgfSk7XG4gICAgICBkcmFnU3RhcnRlZCA9IHRydWU7XG4gICAgfSxcbiAgICBkcmFnU3RhcnRlZDogZnVuY3Rpb24gZHJhZ1N0YXJ0ZWQoX3JlZjcpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuICAgICAgdmFyIHNvcnRhYmxlID0gX3JlZjcuc29ydGFibGU7XG4gICAgICBpZiAoIXRoaXMuaXNNdWx0aURyYWcpIHJldHVybjtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc29ydCkge1xuICAgICAgICAvLyBDYXB0dXJlIHJlY3RzLFxuICAgICAgICAvLyBoaWRlIG11bHRpIGRyYWcgZWxlbWVudHMgKGJ5IHBvc2l0aW9uaW5nIHRoZW0gYWJzb2x1dGUpLFxuICAgICAgICAvLyBzZXQgbXVsdGkgZHJhZyBlbGVtZW50cyByZWN0cyB0byBkcmFnUmVjdCxcbiAgICAgICAgLy8gc2hvdyBtdWx0aSBkcmFnIGVsZW1lbnRzLFxuICAgICAgICAvLyBhbmltYXRlIHRvIHJlY3RzLFxuICAgICAgICAvLyB1bnNldCByZWN0cyAmIHJlbW92ZSBmcm9tIERPTVxuXG4gICAgICAgIHNvcnRhYmxlLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFuaW1hdGlvbikge1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50ID09PSBkcmFnRWwkMSkgcmV0dXJuO1xuICAgICAgICAgICAgY3NzKG11bHRpRHJhZ0VsZW1lbnQsICdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhciBkcmFnUmVjdCA9IGdldFJlY3QoZHJhZ0VsJDEsIGZhbHNlLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAobXVsdGlEcmFnRWxlbWVudCA9PT0gZHJhZ0VsJDEpIHJldHVybjtcbiAgICAgICAgICAgIHNldFJlY3QobXVsdGlEcmFnRWxlbWVudCwgZHJhZ1JlY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGZvbGRpbmcgPSB0cnVlO1xuICAgICAgICAgIGluaXRpYWxGb2xkaW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc29ydGFibGUuYW5pbWF0ZUFsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvbGRpbmcgPSBmYWxzZTtcbiAgICAgICAgaW5pdGlhbEZvbGRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKF90aGlzMi5vcHRpb25zLmFuaW1hdGlvbikge1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgIHVuc2V0UmVjdChtdWx0aURyYWdFbGVtZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBhbGwgYXV4aWxpYXJ5IG11bHRpZHJhZyBpdGVtcyBmcm9tIGVsLCBpZiBzb3J0aW5nIGVuYWJsZWRcbiAgICAgICAgaWYgKF90aGlzMi5vcHRpb25zLnNvcnQpIHtcbiAgICAgICAgICByZW1vdmVNdWx0aURyYWdFbGVtZW50cygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGRyYWdPdmVyOiBmdW5jdGlvbiBkcmFnT3ZlcihfcmVmOCkge1xuICAgICAgdmFyIHRhcmdldCA9IF9yZWY4LnRhcmdldCxcbiAgICAgICAgY29tcGxldGVkID0gX3JlZjguY29tcGxldGVkLFxuICAgICAgICBjYW5jZWwgPSBfcmVmOC5jYW5jZWw7XG4gICAgICBpZiAoZm9sZGluZyAmJiB+bXVsdGlEcmFnRWxlbWVudHMuaW5kZXhPZih0YXJnZXQpKSB7XG4gICAgICAgIGNvbXBsZXRlZChmYWxzZSk7XG4gICAgICAgIGNhbmNlbCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmV2ZXJ0OiBmdW5jdGlvbiByZXZlcnQoX3JlZjkpIHtcbiAgICAgIHZhciBmcm9tU29ydGFibGUgPSBfcmVmOS5mcm9tU29ydGFibGUsXG4gICAgICAgIHJvb3RFbCA9IF9yZWY5LnJvb3RFbCxcbiAgICAgICAgc29ydGFibGUgPSBfcmVmOS5zb3J0YWJsZSxcbiAgICAgICAgZHJhZ1JlY3QgPSBfcmVmOS5kcmFnUmVjdDtcbiAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIFNldHVwIHVuZm9sZCBhbmltYXRpb25cbiAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICAgIHNvcnRhYmxlLmFkZEFuaW1hdGlvblN0YXRlKHtcbiAgICAgICAgICAgIHRhcmdldDogbXVsdGlEcmFnRWxlbWVudCxcbiAgICAgICAgICAgIHJlY3Q6IGZvbGRpbmcgPyBnZXRSZWN0KG11bHRpRHJhZ0VsZW1lbnQpIDogZHJhZ1JlY3RcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB1bnNldFJlY3QobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudC5mcm9tUmVjdCA9IGRyYWdSZWN0O1xuICAgICAgICAgIGZyb21Tb3J0YWJsZS5yZW1vdmVBbmltYXRpb25TdGF0ZShtdWx0aURyYWdFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvbGRpbmcgPSBmYWxzZTtcbiAgICAgICAgaW5zZXJ0TXVsdGlEcmFnRWxlbWVudHMoIXRoaXMub3B0aW9ucy5yZW1vdmVDbG9uZU9uSGlkZSwgcm9vdEVsKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRyYWdPdmVyQ29tcGxldGVkOiBmdW5jdGlvbiBkcmFnT3ZlckNvbXBsZXRlZChfcmVmMTApIHtcbiAgICAgIHZhciBzb3J0YWJsZSA9IF9yZWYxMC5zb3J0YWJsZSxcbiAgICAgICAgaXNPd25lciA9IF9yZWYxMC5pc093bmVyLFxuICAgICAgICBpbnNlcnRpb24gPSBfcmVmMTAuaW5zZXJ0aW9uLFxuICAgICAgICBhY3RpdmVTb3J0YWJsZSA9IF9yZWYxMC5hY3RpdmVTb3J0YWJsZSxcbiAgICAgICAgcGFyZW50RWwgPSBfcmVmMTAucGFyZW50RWwsXG4gICAgICAgIHB1dFNvcnRhYmxlID0gX3JlZjEwLnB1dFNvcnRhYmxlO1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICBpZiAoaW5zZXJ0aW9uKSB7XG4gICAgICAgIC8vIENsb25lcyBtdXN0IGJlIGhpZGRlbiBiZWZvcmUgZm9sZGluZyBhbmltYXRpb24gdG8gY2FwdHVyZSBkcmFnUmVjdEFic29sdXRlIHByb3Blcmx5XG4gICAgICAgIGlmIChpc093bmVyKSB7XG4gICAgICAgICAgYWN0aXZlU29ydGFibGUuX2hpZGVDbG9uZSgpO1xuICAgICAgICB9XG4gICAgICAgIGluaXRpYWxGb2xkaW5nID0gZmFsc2U7XG4gICAgICAgIC8vIElmIGxlYXZpbmcgc29ydDpmYWxzZSByb290LCBvciBhbHJlYWR5IGZvbGRpbmcgLSBGb2xkIHRvIG5ldyBsb2NhdGlvblxuICAgICAgICBpZiAob3B0aW9ucy5hbmltYXRpb24gJiYgbXVsdGlEcmFnRWxlbWVudHMubGVuZ3RoID4gMSAmJiAoZm9sZGluZyB8fCAhaXNPd25lciAmJiAhYWN0aXZlU29ydGFibGUub3B0aW9ucy5zb3J0ICYmICFwdXRTb3J0YWJsZSkpIHtcbiAgICAgICAgICAvLyBGb2xkOiBTZXQgYWxsIG11bHRpIGRyYWcgZWxlbWVudHMncyByZWN0cyB0byBkcmFnRWwncyByZWN0IHdoZW4gbXVsdGktZHJhZyBlbGVtZW50cyBhcmUgaW52aXNpYmxlXG4gICAgICAgICAgdmFyIGRyYWdSZWN0QWJzb2x1dGUgPSBnZXRSZWN0KGRyYWdFbCQxLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnQgPT09IGRyYWdFbCQxKSByZXR1cm47XG4gICAgICAgICAgICBzZXRSZWN0KG11bHRpRHJhZ0VsZW1lbnQsIGRyYWdSZWN0QWJzb2x1dGUpO1xuXG4gICAgICAgICAgICAvLyBNb3ZlIGVsZW1lbnQocykgdG8gZW5kIG9mIHBhcmVudEVsIHNvIHRoYXQgaXQgZG9lcyBub3QgaW50ZXJmZXJlIHdpdGggbXVsdGktZHJhZyBjbG9uZXMgaW5zZXJ0aW9uIGlmIHRoZXkgYXJlIGluc2VydGVkXG4gICAgICAgICAgICAvLyB3aGlsZSBmb2xkaW5nLCBhbmQgc28gdGhhdCB3ZSBjYW4gY2FwdHVyZSB0aGVtIGFnYWluIGJlY2F1c2Ugb2xkIHNvcnRhYmxlIHdpbGwgbm8gbG9uZ2VyIGJlIGZyb21Tb3J0YWJsZVxuICAgICAgICAgICAgcGFyZW50RWwuYXBwZW5kQ2hpbGQobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZm9sZGluZyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDbG9uZXMgbXVzdCBiZSBzaG93biAoYW5kIGNoZWNrIHRvIHJlbW92ZSBtdWx0aSBkcmFncykgYWZ0ZXIgZm9sZGluZyB3aGVuIGludGVyZmVyaW5nIG11bHRpRHJhZ0VsZW1lbnRzIGFyZSBtb3ZlZCBvdXRcbiAgICAgICAgaWYgKCFpc093bmVyKSB7XG4gICAgICAgICAgLy8gT25seSByZW1vdmUgaWYgbm90IGZvbGRpbmcgKGZvbGRpbmcgd2lsbCByZW1vdmUgdGhlbSBhbnl3YXlzKVxuICAgICAgICAgIGlmICghZm9sZGluZykge1xuICAgICAgICAgICAgcmVtb3ZlTXVsdGlEcmFnRWxlbWVudHMoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHZhciBjbG9uZXNIaWRkZW5CZWZvcmUgPSBjbG9uZXNIaWRkZW47XG4gICAgICAgICAgICBhY3RpdmVTb3J0YWJsZS5fc2hvd0Nsb25lKHNvcnRhYmxlKTtcblxuICAgICAgICAgICAgLy8gVW5mb2xkIGFuaW1hdGlvbiBmb3IgY2xvbmVzIGlmIHNob3dpbmcgZnJvbSBoaWRkZW5cbiAgICAgICAgICAgIGlmIChhY3RpdmVTb3J0YWJsZS5vcHRpb25zLmFuaW1hdGlvbiAmJiAhY2xvbmVzSGlkZGVuICYmIGNsb25lc0hpZGRlbkJlZm9yZSkge1xuICAgICAgICAgICAgICBtdWx0aURyYWdDbG9uZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xvbmUpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVTb3J0YWJsZS5hZGRBbmltYXRpb25TdGF0ZSh7XG4gICAgICAgICAgICAgICAgICB0YXJnZXQ6IGNsb25lLFxuICAgICAgICAgICAgICAgICAgcmVjdDogY2xvbmVzRnJvbVJlY3RcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjbG9uZS5mcm9tUmVjdCA9IGNsb25lc0Zyb21SZWN0O1xuICAgICAgICAgICAgICAgIGNsb25lLnRoaXNBbmltYXRpb25EdXJhdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3RpdmVTb3J0YWJsZS5fc2hvd0Nsb25lKHNvcnRhYmxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGRyYWdPdmVyQW5pbWF0aW9uQ2FwdHVyZTogZnVuY3Rpb24gZHJhZ092ZXJBbmltYXRpb25DYXB0dXJlKF9yZWYxMSkge1xuICAgICAgdmFyIGRyYWdSZWN0ID0gX3JlZjExLmRyYWdSZWN0LFxuICAgICAgICBpc093bmVyID0gX3JlZjExLmlzT3duZXIsXG4gICAgICAgIGFjdGl2ZVNvcnRhYmxlID0gX3JlZjExLmFjdGl2ZVNvcnRhYmxlO1xuICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICBtdWx0aURyYWdFbGVtZW50LnRoaXNBbmltYXRpb25EdXJhdGlvbiA9IG51bGw7XG4gICAgICB9KTtcbiAgICAgIGlmIChhY3RpdmVTb3J0YWJsZS5vcHRpb25zLmFuaW1hdGlvbiAmJiAhaXNPd25lciAmJiBhY3RpdmVTb3J0YWJsZS5tdWx0aURyYWcuaXNNdWx0aURyYWcpIHtcbiAgICAgICAgY2xvbmVzRnJvbVJlY3QgPSBfZXh0ZW5kcyh7fSwgZHJhZ1JlY3QpO1xuICAgICAgICB2YXIgZHJhZ01hdHJpeCA9IG1hdHJpeChkcmFnRWwkMSwgdHJ1ZSk7XG4gICAgICAgIGNsb25lc0Zyb21SZWN0LnRvcCAtPSBkcmFnTWF0cml4LmY7XG4gICAgICAgIGNsb25lc0Zyb21SZWN0LmxlZnQgLT0gZHJhZ01hdHJpeC5lO1xuICAgICAgfVxuICAgIH0sXG4gICAgZHJhZ092ZXJBbmltYXRpb25Db21wbGV0ZTogZnVuY3Rpb24gZHJhZ092ZXJBbmltYXRpb25Db21wbGV0ZSgpIHtcbiAgICAgIGlmIChmb2xkaW5nKSB7XG4gICAgICAgIGZvbGRpbmcgPSBmYWxzZTtcbiAgICAgICAgcmVtb3ZlTXVsdGlEcmFnRWxlbWVudHMoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRyb3A6IGZ1bmN0aW9uIGRyb3AoX3JlZjEyKSB7XG4gICAgICB2YXIgZXZ0ID0gX3JlZjEyLm9yaWdpbmFsRXZlbnQsXG4gICAgICAgIHJvb3RFbCA9IF9yZWYxMi5yb290RWwsXG4gICAgICAgIHBhcmVudEVsID0gX3JlZjEyLnBhcmVudEVsLFxuICAgICAgICBzb3J0YWJsZSA9IF9yZWYxMi5zb3J0YWJsZSxcbiAgICAgICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50ID0gX3JlZjEyLmRpc3BhdGNoU29ydGFibGVFdmVudCxcbiAgICAgICAgb2xkSW5kZXggPSBfcmVmMTIub2xkSW5kZXgsXG4gICAgICAgIHB1dFNvcnRhYmxlID0gX3JlZjEyLnB1dFNvcnRhYmxlO1xuICAgICAgdmFyIHRvU29ydGFibGUgPSBwdXRTb3J0YWJsZSB8fCB0aGlzLnNvcnRhYmxlO1xuICAgICAgaWYgKCFldnQpIHJldHVybjtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICBjaGlsZHJlbiA9IHBhcmVudEVsLmNoaWxkcmVuO1xuXG4gICAgICAvLyBNdWx0aS1kcmFnIHNlbGVjdGlvblxuICAgICAgaWYgKCFkcmFnU3RhcnRlZCkge1xuICAgICAgICBpZiAob3B0aW9ucy5tdWx0aURyYWdLZXkgJiYgIXRoaXMubXVsdGlEcmFnS2V5RG93bikge1xuICAgICAgICAgIHRoaXMuX2Rlc2VsZWN0TXVsdGlEcmFnKCk7XG4gICAgICAgIH1cbiAgICAgICAgdG9nZ2xlQ2xhc3MoZHJhZ0VsJDEsIG9wdGlvbnMuc2VsZWN0ZWRDbGFzcywgIX5tdWx0aURyYWdFbGVtZW50cy5pbmRleE9mKGRyYWdFbCQxKSk7XG4gICAgICAgIGlmICghfm11bHRpRHJhZ0VsZW1lbnRzLmluZGV4T2YoZHJhZ0VsJDEpKSB7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMucHVzaChkcmFnRWwkMSk7XG4gICAgICAgICAgZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICBzb3J0YWJsZTogc29ydGFibGUsXG4gICAgICAgICAgICByb290RWw6IHJvb3RFbCxcbiAgICAgICAgICAgIG5hbWU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgdGFyZ2V0RWw6IGRyYWdFbCQxLFxuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBNb2RpZmllciBhY3RpdmF0ZWQsIHNlbGVjdCBmcm9tIGxhc3QgdG8gZHJhZ0VsXG4gICAgICAgICAgaWYgKGV2dC5zaGlmdEtleSAmJiBsYXN0TXVsdGlEcmFnU2VsZWN0ICYmIHNvcnRhYmxlLmVsLmNvbnRhaW5zKGxhc3RNdWx0aURyYWdTZWxlY3QpKSB7XG4gICAgICAgICAgICB2YXIgbGFzdEluZGV4ID0gaW5kZXgobGFzdE11bHRpRHJhZ1NlbGVjdCksXG4gICAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IGluZGV4KGRyYWdFbCQxKTtcbiAgICAgICAgICAgIGlmICh+bGFzdEluZGV4ICYmIH5jdXJyZW50SW5kZXggJiYgbGFzdEluZGV4ICE9PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBNdXN0IGluY2x1ZGUgbGFzdE11bHRpRHJhZ1NlbGVjdCAoc2VsZWN0IGl0KSwgaW4gY2FzZSBtb2RpZmllZCBzZWxlY3Rpb24gZnJvbSBubyBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAvLyAoYnV0IHByZXZpb3VzIHNlbGVjdGlvbiBleGlzdGVkKVxuICAgICAgICAgICAgICAgIHZhciBuLCBpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggPiBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIGkgPSBsYXN0SW5kZXg7XG4gICAgICAgICAgICAgICAgICBuID0gY3VycmVudEluZGV4O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBpID0gY3VycmVudEluZGV4O1xuICAgICAgICAgICAgICAgICAgbiA9IGxhc3RJbmRleCArIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBmaWx0ZXIgPSBvcHRpb25zLmZpbHRlcjtcbiAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgaWYgKH5tdWx0aURyYWdFbGVtZW50cy5pbmRleE9mKGNoaWxkcmVuW2ldKSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBlbGVtZW50IGlzIGRyYWdnYWJsZVxuICAgICAgICAgICAgICAgICAgaWYgKCFjbG9zZXN0KGNoaWxkcmVuW2ldLCBvcHRpb25zLmRyYWdnYWJsZSwgcGFyZW50RWwsIGZhbHNlKSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBlbGVtZW50IGlzIGZpbHRlcmVkXG4gICAgICAgICAgICAgICAgICB2YXIgZmlsdGVyZWQgPSBmaWx0ZXIgJiYgKHR5cGVvZiBmaWx0ZXIgPT09ICdmdW5jdGlvbicgPyBmaWx0ZXIuY2FsbChzb3J0YWJsZSwgZXZ0LCBjaGlsZHJlbltpXSwgc29ydGFibGUpIDogZmlsdGVyLnNwbGl0KCcsJykuc29tZShmdW5jdGlvbiAoY3JpdGVyaWEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsb3Nlc3QoY2hpbGRyZW5baV0sIGNyaXRlcmlhLnRyaW0oKSwgcGFyZW50RWwsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXJlZCkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzcyhjaGlsZHJlbltpXSwgb3B0aW9ucy5zZWxlY3RlZENsYXNzLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLnB1c2goY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBzb3J0YWJsZSxcbiAgICAgICAgICAgICAgICAgICAgcm9vdEVsOiByb290RWwsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbDogY2hpbGRyZW5baV0sXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYXN0TXVsdGlEcmFnU2VsZWN0ID0gZHJhZ0VsJDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIG11bHRpRHJhZ1NvcnRhYmxlID0gdG9Tb3J0YWJsZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5zcGxpY2UobXVsdGlEcmFnRWxlbWVudHMuaW5kZXhPZihkcmFnRWwkMSksIDEpO1xuICAgICAgICAgIGxhc3RNdWx0aURyYWdTZWxlY3QgPSBudWxsO1xuICAgICAgICAgIGRpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgc29ydGFibGU6IHNvcnRhYmxlLFxuICAgICAgICAgICAgcm9vdEVsOiByb290RWwsXG4gICAgICAgICAgICBuYW1lOiAnZGVzZWxlY3QnLFxuICAgICAgICAgICAgdGFyZ2V0RWw6IGRyYWdFbCQxLFxuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gTXVsdGktZHJhZyBkcm9wXG4gICAgICBpZiAoZHJhZ1N0YXJ0ZWQgJiYgdGhpcy5pc011bHRpRHJhZykge1xuICAgICAgICBmb2xkaW5nID0gZmFsc2U7XG4gICAgICAgIC8vIERvIG5vdCBcInVuZm9sZFwiIGFmdGVyIGFyb3VuZCBkcmFnRWwgaWYgcmV2ZXJ0ZWRcbiAgICAgICAgaWYgKChwYXJlbnRFbFtleHBhbmRvXS5vcHRpb25zLnNvcnQgfHwgcGFyZW50RWwgIT09IHJvb3RFbCkgJiYgbXVsdGlEcmFnRWxlbWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHZhciBkcmFnUmVjdCA9IGdldFJlY3QoZHJhZ0VsJDEpLFxuICAgICAgICAgICAgbXVsdGlEcmFnSW5kZXggPSBpbmRleChkcmFnRWwkMSwgJzpub3QoLicgKyB0aGlzLm9wdGlvbnMuc2VsZWN0ZWRDbGFzcyArICcpJyk7XG4gICAgICAgICAgaWYgKCFpbml0aWFsRm9sZGluZyAmJiBvcHRpb25zLmFuaW1hdGlvbikgZHJhZ0VsJDEudGhpc0FuaW1hdGlvbkR1cmF0aW9uID0gbnVsbDtcbiAgICAgICAgICB0b1NvcnRhYmxlLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgICAgICAgIGlmICghaW5pdGlhbEZvbGRpbmcpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgICBkcmFnRWwkMS5mcm9tUmVjdCA9IGRyYWdSZWN0O1xuICAgICAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgbXVsdGlEcmFnRWxlbWVudC50aGlzQW5pbWF0aW9uRHVyYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50ICE9PSBkcmFnRWwkMSkge1xuICAgICAgICAgICAgICAgICAgdmFyIHJlY3QgPSBmb2xkaW5nID8gZ2V0UmVjdChtdWx0aURyYWdFbGVtZW50KSA6IGRyYWdSZWN0O1xuICAgICAgICAgICAgICAgICAgbXVsdGlEcmFnRWxlbWVudC5mcm9tUmVjdCA9IHJlY3Q7XG5cbiAgICAgICAgICAgICAgICAgIC8vIFByZXBhcmUgdW5mb2xkIGFuaW1hdGlvblxuICAgICAgICAgICAgICAgICAgdG9Tb3J0YWJsZS5hZGRBbmltYXRpb25TdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogbXVsdGlEcmFnRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgcmVjdDogcmVjdFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTXVsdGkgZHJhZyBlbGVtZW50cyBhcmUgbm90IG5lY2Vzc2FyaWx5IHJlbW92ZWQgZnJvbSB0aGUgRE9NIG9uIGRyb3AsIHNvIHRvIHJlaW5zZXJ0XG4gICAgICAgICAgICAvLyBwcm9wZXJseSB0aGV5IG11c3QgYWxsIGJlIHJlbW92ZWRcbiAgICAgICAgICAgIHJlbW92ZU11bHRpRHJhZ0VsZW1lbnRzKCk7XG4gICAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICAgIGlmIChjaGlsZHJlblttdWx0aURyYWdJbmRleF0pIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRFbC5pbnNlcnRCZWZvcmUobXVsdGlEcmFnRWxlbWVudCwgY2hpbGRyZW5bbXVsdGlEcmFnSW5kZXhdKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRFbC5hcHBlbmRDaGlsZChtdWx0aURyYWdFbGVtZW50KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBtdWx0aURyYWdJbmRleCsrO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIElmIGluaXRpYWwgZm9sZGluZyBpcyBkb25lLCB0aGUgZWxlbWVudHMgbWF5IGhhdmUgY2hhbmdlZCBwb3NpdGlvbiBiZWNhdXNlIHRoZXkgYXJlIG5vd1xuICAgICAgICAgICAgLy8gdW5mb2xkaW5nIGFyb3VuZCBkcmFnRWwsIGV2ZW4gdGhvdWdoIGRyYWdFbCBtYXkgbm90IGhhdmUgaGlzIGluZGV4IGNoYW5nZWQsIHNvIHVwZGF0ZSBldmVudFxuICAgICAgICAgICAgLy8gbXVzdCBiZSBmaXJlZCBoZXJlIGFzIFNvcnRhYmxlIHdpbGwgbm90LlxuICAgICAgICAgICAgaWYgKG9sZEluZGV4ID09PSBpbmRleChkcmFnRWwkMSkpIHtcbiAgICAgICAgICAgICAgdmFyIHVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnQuc29ydGFibGVJbmRleCAhPT0gaW5kZXgobXVsdGlEcmFnRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgaWYgKHVwZGF0ZSkge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoU29ydGFibGVFdmVudCgndXBkYXRlJyk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50KCdzb3J0Jyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBNdXN0IGJlIGRvbmUgYWZ0ZXIgY2FwdHVyaW5nIGluZGl2aWR1YWwgcmVjdHMgKHNjcm9sbCBiYXIpXG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICAgICAgdW5zZXRSZWN0KG11bHRpRHJhZ0VsZW1lbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRvU29ydGFibGUuYW5pbWF0ZUFsbCgpO1xuICAgICAgICB9XG4gICAgICAgIG11bHRpRHJhZ1NvcnRhYmxlID0gdG9Tb3J0YWJsZTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVtb3ZlIGNsb25lcyBpZiBuZWNlc3NhcnlcbiAgICAgIGlmIChyb290RWwgPT09IHBhcmVudEVsIHx8IHB1dFNvcnRhYmxlICYmIHB1dFNvcnRhYmxlLmxhc3RQdXRNb2RlICE9PSAnY2xvbmUnKSB7XG4gICAgICAgIG11bHRpRHJhZ0Nsb25lcy5mb3JFYWNoKGZ1bmN0aW9uIChjbG9uZSkge1xuICAgICAgICAgIGNsb25lLnBhcmVudE5vZGUgJiYgY2xvbmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjbG9uZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgbnVsbGluZ0dsb2JhbDogZnVuY3Rpb24gbnVsbGluZ0dsb2JhbCgpIHtcbiAgICAgIHRoaXMuaXNNdWx0aURyYWcgPSBkcmFnU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgbXVsdGlEcmFnQ2xvbmVzLmxlbmd0aCA9IDA7XG4gICAgfSxcbiAgICBkZXN0cm95R2xvYmFsOiBmdW5jdGlvbiBkZXN0cm95R2xvYmFsKCkge1xuICAgICAgdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcoKTtcbiAgICAgIG9mZihkb2N1bWVudCwgJ3BvaW50ZXJ1cCcsIHRoaXMuX2Rlc2VsZWN0TXVsdGlEcmFnKTtcbiAgICAgIG9mZihkb2N1bWVudCwgJ21vdXNldXAnLCB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZyk7XG4gICAgICBvZmYoZG9jdW1lbnQsICd0b3VjaGVuZCcsIHRoaXMuX2Rlc2VsZWN0TXVsdGlEcmFnKTtcbiAgICAgIG9mZihkb2N1bWVudCwgJ2tleWRvd24nLCB0aGlzLl9jaGVja0tleURvd24pO1xuICAgICAgb2ZmKGRvY3VtZW50LCAna2V5dXAnLCB0aGlzLl9jaGVja0tleVVwKTtcbiAgICB9LFxuICAgIF9kZXNlbGVjdE11bHRpRHJhZzogZnVuY3Rpb24gX2Rlc2VsZWN0TXVsdGlEcmFnKGV2dCkge1xuICAgICAgaWYgKHR5cGVvZiBkcmFnU3RhcnRlZCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkcmFnU3RhcnRlZCkgcmV0dXJuO1xuXG4gICAgICAvLyBPbmx5IGRlc2VsZWN0IGlmIHNlbGVjdGlvbiBpcyBpbiB0aGlzIHNvcnRhYmxlXG4gICAgICBpZiAobXVsdGlEcmFnU29ydGFibGUgIT09IHRoaXMuc29ydGFibGUpIHJldHVybjtcblxuICAgICAgLy8gT25seSBkZXNlbGVjdCBpZiB0YXJnZXQgaXMgbm90IGl0ZW0gaW4gdGhpcyBzb3J0YWJsZVxuICAgICAgaWYgKGV2dCAmJiBjbG9zZXN0KGV2dC50YXJnZXQsIHRoaXMub3B0aW9ucy5kcmFnZ2FibGUsIHRoaXMuc29ydGFibGUuZWwsIGZhbHNlKSkgcmV0dXJuO1xuXG4gICAgICAvLyBPbmx5IGRlc2VsZWN0IGlmIGxlZnQgY2xpY2tcbiAgICAgIGlmIChldnQgJiYgZXZ0LmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xuICAgICAgd2hpbGUgKG11bHRpRHJhZ0VsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICB2YXIgZWwgPSBtdWx0aURyYWdFbGVtZW50c1swXTtcbiAgICAgICAgdG9nZ2xlQ2xhc3MoZWwsIHRoaXMub3B0aW9ucy5zZWxlY3RlZENsYXNzLCBmYWxzZSk7XG4gICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLnNoaWZ0KCk7XG4gICAgICAgIGRpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgIHNvcnRhYmxlOiB0aGlzLnNvcnRhYmxlLFxuICAgICAgICAgIHJvb3RFbDogdGhpcy5zb3J0YWJsZS5lbCxcbiAgICAgICAgICBuYW1lOiAnZGVzZWxlY3QnLFxuICAgICAgICAgIHRhcmdldEVsOiBlbCxcbiAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBfY2hlY2tLZXlEb3duOiBmdW5jdGlvbiBfY2hlY2tLZXlEb3duKGV2dCkge1xuICAgICAgaWYgKGV2dC5rZXkgPT09IHRoaXMub3B0aW9ucy5tdWx0aURyYWdLZXkpIHtcbiAgICAgICAgdGhpcy5tdWx0aURyYWdLZXlEb3duID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIF9jaGVja0tleVVwOiBmdW5jdGlvbiBfY2hlY2tLZXlVcChldnQpIHtcbiAgICAgIGlmIChldnQua2V5ID09PSB0aGlzLm9wdGlvbnMubXVsdGlEcmFnS2V5KSB7XG4gICAgICAgIHRoaXMubXVsdGlEcmFnS2V5RG93biA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzKE11bHRpRHJhZywge1xuICAgIC8vIFN0YXRpYyBtZXRob2RzICYgcHJvcGVydGllc1xuICAgIHBsdWdpbk5hbWU6ICdtdWx0aURyYWcnLFxuICAgIHV0aWxzOiB7XG4gICAgICAvKipcclxuICAgICAgICogU2VsZWN0cyB0aGUgcHJvdmlkZWQgbXVsdGktZHJhZyBpdGVtXHJcbiAgICAgICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbCAgICBUaGUgZWxlbWVudCB0byBiZSBzZWxlY3RlZFxyXG4gICAgICAgKi9cbiAgICAgIHNlbGVjdDogZnVuY3Rpb24gc2VsZWN0KGVsKSB7XG4gICAgICAgIHZhciBzb3J0YWJsZSA9IGVsLnBhcmVudE5vZGVbZXhwYW5kb107XG4gICAgICAgIGlmICghc29ydGFibGUgfHwgIXNvcnRhYmxlLm9wdGlvbnMubXVsdGlEcmFnIHx8IH5tdWx0aURyYWdFbGVtZW50cy5pbmRleE9mKGVsKSkgcmV0dXJuO1xuICAgICAgICBpZiAobXVsdGlEcmFnU29ydGFibGUgJiYgbXVsdGlEcmFnU29ydGFibGUgIT09IHNvcnRhYmxlKSB7XG4gICAgICAgICAgbXVsdGlEcmFnU29ydGFibGUubXVsdGlEcmFnLl9kZXNlbGVjdE11bHRpRHJhZygpO1xuICAgICAgICAgIG11bHRpRHJhZ1NvcnRhYmxlID0gc29ydGFibGU7XG4gICAgICAgIH1cbiAgICAgICAgdG9nZ2xlQ2xhc3MoZWwsIHNvcnRhYmxlLm9wdGlvbnMuc2VsZWN0ZWRDbGFzcywgdHJ1ZSk7XG4gICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLnB1c2goZWwpO1xuICAgICAgfSxcbiAgICAgIC8qKlxyXG4gICAgICAgKiBEZXNlbGVjdHMgdGhlIHByb3ZpZGVkIG11bHRpLWRyYWcgaXRlbVxyXG4gICAgICAgKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWwgICAgVGhlIGVsZW1lbnQgdG8gYmUgZGVzZWxlY3RlZFxyXG4gICAgICAgKi9cbiAgICAgIGRlc2VsZWN0OiBmdW5jdGlvbiBkZXNlbGVjdChlbCkge1xuICAgICAgICB2YXIgc29ydGFibGUgPSBlbC5wYXJlbnROb2RlW2V4cGFuZG9dLFxuICAgICAgICAgIGluZGV4ID0gbXVsdGlEcmFnRWxlbWVudHMuaW5kZXhPZihlbCk7XG4gICAgICAgIGlmICghc29ydGFibGUgfHwgIXNvcnRhYmxlLm9wdGlvbnMubXVsdGlEcmFnIHx8ICF+aW5kZXgpIHJldHVybjtcbiAgICAgICAgdG9nZ2xlQ2xhc3MoZWwsIHNvcnRhYmxlLm9wdGlvbnMuc2VsZWN0ZWRDbGFzcywgZmFsc2UpO1xuICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZXZlbnRQcm9wZXJ0aWVzOiBmdW5jdGlvbiBldmVudFByb3BlcnRpZXMoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcbiAgICAgIHZhciBvbGRJbmRpY2llcyA9IFtdLFxuICAgICAgICBuZXdJbmRpY2llcyA9IFtdO1xuICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICBvbGRJbmRpY2llcy5wdXNoKHtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50OiBtdWx0aURyYWdFbGVtZW50LFxuICAgICAgICAgIGluZGV4OiBtdWx0aURyYWdFbGVtZW50LnNvcnRhYmxlSW5kZXhcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gbXVsdGlEcmFnRWxlbWVudHMgd2lsbCBhbHJlYWR5IGJlIHNvcnRlZCBpZiBmb2xkaW5nXG4gICAgICAgIHZhciBuZXdJbmRleDtcbiAgICAgICAgaWYgKGZvbGRpbmcgJiYgbXVsdGlEcmFnRWxlbWVudCAhPT0gZHJhZ0VsJDEpIHtcbiAgICAgICAgICBuZXdJbmRleCA9IC0xO1xuICAgICAgICB9IGVsc2UgaWYgKGZvbGRpbmcpIHtcbiAgICAgICAgICBuZXdJbmRleCA9IGluZGV4KG11bHRpRHJhZ0VsZW1lbnQsICc6bm90KC4nICsgX3RoaXMzLm9wdGlvbnMuc2VsZWN0ZWRDbGFzcyArICcpJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3SW5kZXggPSBpbmRleChtdWx0aURyYWdFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBuZXdJbmRpY2llcy5wdXNoKHtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50OiBtdWx0aURyYWdFbGVtZW50LFxuICAgICAgICAgIGluZGV4OiBuZXdJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXRlbXM6IF90b0NvbnN1bWFibGVBcnJheShtdWx0aURyYWdFbGVtZW50cyksXG4gICAgICAgIGNsb25lczogW10uY29uY2F0KG11bHRpRHJhZ0Nsb25lcyksXG4gICAgICAgIG9sZEluZGljaWVzOiBvbGRJbmRpY2llcyxcbiAgICAgICAgbmV3SW5kaWNpZXM6IG5ld0luZGljaWVzXG4gICAgICB9O1xuICAgIH0sXG4gICAgb3B0aW9uTGlzdGVuZXJzOiB7XG4gICAgICBtdWx0aURyYWdLZXk6IGZ1bmN0aW9uIG11bHRpRHJhZ0tleShrZXkpIHtcbiAgICAgICAga2V5ID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChrZXkgPT09ICdjdHJsJykge1xuICAgICAgICAgIGtleSA9ICdDb250cm9sJztcbiAgICAgICAgfSBlbHNlIGlmIChrZXkubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGtleSA9IGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zdWJzdHIoMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gaW5zZXJ0TXVsdGlEcmFnRWxlbWVudHMoY2xvbmVzSW5zZXJ0ZWQsIHJvb3RFbCkge1xuICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50LCBpKSB7XG4gICAgdmFyIHRhcmdldCA9IHJvb3RFbC5jaGlsZHJlblttdWx0aURyYWdFbGVtZW50LnNvcnRhYmxlSW5kZXggKyAoY2xvbmVzSW5zZXJ0ZWQgPyBOdW1iZXIoaSkgOiAwKV07XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgcm9vdEVsLmluc2VydEJlZm9yZShtdWx0aURyYWdFbGVtZW50LCB0YXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByb290RWwuYXBwZW5kQ2hpbGQobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXHJcbiAqIEluc2VydCBtdWx0aS1kcmFnIGNsb25lc1xyXG4gKiBAcGFyYW0gIHtbQm9vbGVhbl19IGVsZW1lbnRzSW5zZXJ0ZWQgIFdoZXRoZXIgdGhlIG11bHRpLWRyYWcgZWxlbWVudHMgYXJlIGluc2VydGVkXHJcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSByb290RWxcclxuICovXG5mdW5jdGlvbiBpbnNlcnRNdWx0aURyYWdDbG9uZXMoZWxlbWVudHNJbnNlcnRlZCwgcm9vdEVsKSB7XG4gIG11bHRpRHJhZ0Nsb25lcy5mb3JFYWNoKGZ1bmN0aW9uIChjbG9uZSwgaSkge1xuICAgIHZhciB0YXJnZXQgPSByb290RWwuY2hpbGRyZW5bY2xvbmUuc29ydGFibGVJbmRleCArIChlbGVtZW50c0luc2VydGVkID8gTnVtYmVyKGkpIDogMCldO1xuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHJvb3RFbC5pbnNlcnRCZWZvcmUoY2xvbmUsIHRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvb3RFbC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHJlbW92ZU11bHRpRHJhZ0VsZW1lbnRzKCkge1xuICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgaWYgKG11bHRpRHJhZ0VsZW1lbnQgPT09IGRyYWdFbCQxKSByZXR1cm47XG4gICAgbXVsdGlEcmFnRWxlbWVudC5wYXJlbnROb2RlICYmIG11bHRpRHJhZ0VsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtdWx0aURyYWdFbGVtZW50KTtcbiAgfSk7XG59XG5cblNvcnRhYmxlLm1vdW50KG5ldyBBdXRvU2Nyb2xsUGx1Z2luKCkpO1xuU29ydGFibGUubW91bnQoUmVtb3ZlLCBSZXZlcnQpO1xuXG5leHBvcnQgZGVmYXVsdCBTb3J0YWJsZTtcbmV4cG9ydCB7IE11bHRpRHJhZ1BsdWdpbiBhcyBNdWx0aURyYWcsIFNvcnRhYmxlLCBTd2FwUGx1Z2luIGFzIFN3YXAgfTtcbiIsIi8qKiBJbXBvcnQgZGVwZW5kZW5jaWVzICovXG4vLyBmdW5jdGlvbnMgdG8gY3JlYXRlIGVsZW1lbnRzXG5pbXBvcnQge2FkZFRvb2x0aXB9IGZyb20gIFwiLi4vdXRpbHMvZWxlbWVudC5qc1wiO1xuLy8gc3R5bGluZ1xuaW1wb3J0IFwiLi9jc3MvY2F0ZWdvcmljYWwtbGVnZW5kLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvY29udGludW91cy1sZWdlbmQuY3NzXCI7XG5cbi8qKlxuICogQ3JlYXRlIGEgY2F0ZWdvcmljYWwgbGVnZW5kLlxuICogQHBhcmFtIHtvYmplY3R9IHggLSBPYmplY3Qgd2l0aCBpdGVtcyB0byBkaXNwbGF5IGluIGxlZ2VuZC5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0geC52YWx1ZXMgLSBTZXQgb2YgdmFsdWVzIGRlbm90aW5nIHRoZSBudW1lcmljXG4gKiB2YWx1ZXMgZm9yIGVhY2ggbGVnZW5kIGl0ZW0uIE5vdGUgdGhhdCB0aGVzZSB2YWx1ZXMgYXJlIG5vdCBzaG93blxuICogaW4gdGhlIGxlZ2VuZC5cbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0geC5jb2xvcnMgLSBTZXQgb2YgdmFsdWVzIGRlbm90aW5nIHRoZSBjb2xvclxuICogZm9yIGVhY2ggbGVnZW5kIGl0ZW0uXG4gKiBOb3RlIHRoYXQgdGhpcyBtdXN0IGhhdmUgdGhlIHNhbWUgbGVuZ3RoIGFzIHtAbGluayB4LnZhbHVlc30uXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHgubGFiZWxzIC0gU2V0IG9mIHZhbHVlcyBkZW5vdGluZyB0aGUgdGV4dCBsYWJlbFxuICogZm9yIGVhY2ggbGVnZW5kIGl0ZW0uXG4gKiBOb3RlIHRoYXQgdGhpcyBtdXN0IGhhdmUgdGhlIHNhbWUgbGVuZ3RoIGFzIHtAbGluayB4LnZhbHVlc30uXG4gKiBAcGFyYW0ge3N0cmluZ30geC51bml0cyAtIFVuaXRzIGZvciB0aGUgbGVnZW5kIGl0ZW1zLlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYXRlZ29yaWNhbExlZ2VuZCh4KSB7XG4gIC8vIGluaXRpYWxpemUgbGVnZW5kXG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsLmNsYXNzTmFtZSA9IFwiY2F0ZWdvcmljYWwtbGVnZW5kXCI7XG4gIGFkZFRvb2x0aXAoXG4gICAgZWwsXG4gICAgXCJUaGlzIGxheWVyIGhhcyBjYXRlZ29yaWNhbCBkYXRhIGFuZCBjb2xvcnMgaW5kaWNhdGUgZWFjaCBjYXRlZ29yeS5cIlxuICApO1xuICAvLyBpZiBuZWVkZWQsIGZvcmNlIHZhbHVlcyBpbnRvIGFuIGFycmF5XG4gIGlmICghQXJyYXkuaXNBcnJheSh4LmxhYmVscykpIHtcbiAgICB4LmxhYmVscyA9IFt4LmxhYmVsc11cbiAgfVxuICBpZiAoIUFycmF5LmlzQXJyYXkoeC52YWx1ZXMpKSB7XG4gICAgeC52YWx1ZXMgPSBbeC52YWx1ZXNdXG4gIH1cbiAgaWYgKCFBcnJheS5pc0FycmF5KHguY29sb3JzKSkge1xuICAgIHguY29sb3JzID0gW3guY29sb3JzXVxuICB9XG5cbiAgLy8gY3JlYXRlIGxlZ2VuZFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHgudmFsdWVzLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gY3JlYXRlIGl0ZW0gdG8gYWRkIHRvIGxlZ2VuZFxuICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtLmNsYXNzTmFtZSA9IFwiaXRlbVwiO1xuICAgIC8vIGNyZWF0ZSB0ZXh0IGNvbXBvbmVudCB0byBkaXNwbGF5IHRoZSB0ZXh0XG4gICAgbGV0IGl0ZW1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBpdGVtTGFiZWwuY2xhc3NOYW1lID0gXCJpdGVtLWxhYmVsXCI7XG4gICAgaXRlbUxhYmVsLmlubmVyVGV4dCA9IGAke3gubGFiZWxzW2ldfWA7XG4gICAgLy8gY3JlYXRlIHN5bWJvbCBjb21wb25lbnQgdG8gZGlzcGxheSB0aGUgY29sb3JcbiAgICBsZXQgaXRlbVN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbVN5bWJvbC5jbGFzc05hbWUgPSBcIml0ZW0tc3ltYm9sXCI7XG4gICAgaXRlbVN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB4LmNvbG9yc1tpXTtcbiAgICBpdGVtU3ltYm9sLnN0eWxlLmNvbG9yID0geC5jb2xvcnNbaV07XG4gICAgLy8gYWRkIGl0ZW0gdG8gbGVnZW5kXG4gICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtU3ltYm9sKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1MYWJlbCk7XG4gICAgZWwuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gIH1cblxuICAvLyByZXR1cm4gbGVnZW5kXG4gIHJldHVybiBlbDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBjb250aW51b3VzIGxlZ2VuZC5cbiAqIEBwYXJhbSB7b2JqZWN0fSB4IC0gT2JqZWN0IHdpdGggaXRlbXMgdG8gZGlzcGxheSBpbiBsZWdlbmQuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHgudmFsdWVzIC0gU2V0IG9mIHZhbHVlcyB0aGF0IGRlZmluZSBpbmNyZW1lbnRzXG4gKiBmb3IgdGhlIGNvbG9yIGJhci5cbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0geC5jb2xvcnMgLSBTZXQgb2YgdmFsdWVzIHRoYXQgZGVub3RlIGEgY29sb3IgZm9yIGVhY2hcbiAqIGluY3JlbWVudCBpbiB0aGUgY29sb3IgYmFyLlxuICogTm90ZSB0aGF0IHRoaXMgbXVzdCBoYXZlIHRoZSBzYW1lIGxlbmd0aCBhcyB7QGxpbmsgeC52YWx1ZXN9LlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB4LmJyZWFrcyAtIFNldCBvZiB2YWx1ZXMgdGhhdCBkZW5vdGUgcG9zaXRpb25zIGZvciB0aGVcbiAqIHRleHQgbGFiZWxzIHRvIGFjY29tcGFueSB0aGUgY29sb3IgYmFyLlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB4LmxhYmVscyAtIFNldCBvZiB2YWx1ZXMgdGhhdCBkZW5vdGUgdGV4dCBsYWJlbFxuICogdG8gYWNjb21wYW55IHRoZSBjb2xvciBiYXIuXG4gKiBOb3RlIHRoYXQgdGhpcyBtdXN0IGhhdmUgdGhlIHNhbWUgbGVuZ3RoIGFzIHtAbGluayB4LmJyZWFrc30uXG4gKiBAcGFyYW0ge3N0cmluZ30geC51bml0cyAtIFVuaXRzIGZvciB0aGUgbGVnZW5kIGl0ZW1zLlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250aW51b3VzTGVnZW5kKHgpIHtcbiAgLy8gaW5pdGlhbGl6ZSBsZWdlbmRcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWwuY2xhc3NMaXN0LmFkZChcImNvbnRpbnVvdXMtbGVnZW5kXCIpO1xuICBhZGRUb29sdGlwKFxuICAgIGVsLFxuICAgIFwiVGhpcyBsYXllciBoYXMgY29udGludW91cyBkYXRhIGFuZCB0aGUgXCIgK1xuICAgICAgXCJsZWdlbmQgc2hvd3MgdGhlIHJhbmdlIG9mIGNvbG9ycyB1c2VkIGZvciBkaXNwbGF5XCJcbiAgKTtcblxuICAvLyBjb21wdXRlIHZhbHVlc1xuICBsZXQgbWF4VmFsdWUgPSBNYXRoLm1heCguLi54LnZhbHVlcyk7XG4gIGxldCBtaW5WYWx1ZSA9IE1hdGgubWluKC4uLngudmFsdWVzKTtcbiAgbGV0IHJhbmdlVmFsdWUgPSBtYXhWYWx1ZSAtIG1pblZhbHVlO1xuXG4gIC8vIGNyZWF0ZSBjb2xvciBiYXJcbiAgbGV0IGNvbG9yYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29sb3JiYXIuY2xhc3NOYW1lID0gXCJjb2xvcmJhci1yYW1wXCI7XG4gIGxldCBjb2xvcmJhckJhY2tncm91bmQgPSBcImxpbmVhci1ncmFkaWVudCh0byBsZWZ0XCI7XG4gIGxldCBjb2xvcmJhclBvc2l0aW9uID0gdW5kZWZpbmVkO1xuICB4LmNvbG9ycyA9IHguY29sb3JzLnJldmVyc2UoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB4LmNvbG9ycy5sZW5ndGg7ICsraSkge1xuICAgIGNvbG9yYmFyUG9zaXRpb24gPSAoKHgudmFsdWVzW2ldIC0gbWluVmFsdWUpIC8gcmFuZ2VWYWx1ZSkgKiAxMDA7XG4gICAgY29sb3JiYXJCYWNrZ3JvdW5kICs9XG4gICAgICBgLCAke3guY29sb3JzW2ldfSAke2NvbG9yYmFyUG9zaXRpb259JWA7XG4gIH1cbiAgY29sb3JiYXJCYWNrZ3JvdW5kICs9IFwiKVwiO1xuICBjb2xvcmJhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB4LmNvbG9yc1swXTtcbiAgY29sb3JiYXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gY29sb3JiYXJCYWNrZ3JvdW5kO1xuXG4gIC8vIGNyZWF0ZSB1bml0cyBsYWJlbFxuICBsZXQgdW5pdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIHVuaXRzLmNsYXNzTmFtZSA9IFwiY29sb3JiYXItdW5pdHNcIjtcbiAgaWYgKHR5cGVvZih4LnVuaXRzKSA9PT0gXCJzdHJpbmdcIikge1xuICAgIHVuaXRzLmlubmVyVGV4dCA9IGAke3gudW5pdHN9YDtcbiAgfVxuXG4gIC8vIGNyZWF0ZSBjb250YWluZXIgZm9yIHRpY2tzIGFuZCBsYWJlbHNcbiAgbGV0IGl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaXRlbXMuY2xhc3NOYW1lID0gXCJjb2xvcmJhci1pdGVtc1wiO1xuXG4gIC8vIGNyZWF0ZSBheGlzIHRpY2tzIGFuZCBsYWJlbHNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB4LmJyZWFrcy5sZW5ndGg7ICsraSkge1xuICAgIC8vIGNhbGN1bGF0ZSB3aWR0aFxuICAgIGxldCBwb3MgPSBNYXRoLnJvdW5kKDEwMCAqICgoeC5icmVha3NbaV0gLSBtaW5WYWx1ZSkgLyByYW5nZVZhbHVlKSk7XG4gICAgLy8gY3JlYXRlIGNvbnRhaW5lciBmb3IgaSd0aCB0aWNrIGFuZCBsYWJlbFxuICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtLnN0eWxlLnpJbmRleCA9IGk7XG4gICAgaXRlbS5jbGFzc05hbWUgPSBcImNvbG9yYmFyLWl0ZW1cIjtcbiAgICBpdGVtLnN0eWxlLmdyaWRDb2x1bW5TdGFydCA9IHBvcztcbiAgICBpdGVtLnN0eWxlLmdyaWRDb2x1bW5FbmQgPSBwb3M7XG4gICAgaXRlbS5zdHlsZS5ncmlkUm93ID0gMTtcbiAgICBpdGVtLnN0eWxlLnpJbmRleCA9IGkgKyAxO1xuICAgIC8vIGNyZWF0ZSB0aWNrXG4gICAgbGV0IGl0ZW1UaWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtVGljay5jbGFzc05hbWUgPSBcImNvbG9yYmFyLXRpY2tcIjtcbiAgICBpdGVtVGljay5pbm5lclRleHQgPSBcIiBcIjtcbiAgICAvLyBjcmVhdGUgbGFiZWxcbiAgICBsZXQgaXRlbUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGl0ZW1MYWJlbC5jbGFzc05hbWUgPSBcImNvbG9yYmFyLWxhYmVsXCI7XG4gICAgaXRlbUxhYmVsLmlubmVyVGV4dCA9IGAke3gubGFiZWxzW2ldfWA7XG4gICAgLy8gYXBwZW5kIHRvIHRpY2sgYW5kIGxhYmVsIHRvIGl0ZW0gY29udGFpbmVyXG4gICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtVGljayk7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtTGFiZWwpO1xuICAgIGl0ZW1zLmFwcGVuZENoaWxkKGl0ZW0pO1xuICB9XG5cbiAgLy8gY29uc3RydWN0IGxlZ2VuZFxuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb2xvcmJhci1jb250YWluZXJcIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xvcmJhcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtcyk7XG4gIGVsLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIGVsLmFwcGVuZENoaWxkKHVuaXRzKTtcblxuICAvLyByZXR1cm4gbGVnZW5kXG4gIHJldHVybiBlbDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBsZWdlbmQuXG4gKiBAcGFyYW0ge09iamVjdH0geCAtIE9iamVjdCB3aXRoIGl0ZW1zIHRvIGRpc3BsYXkgaW4gbGVnZW5kLlxuICogU2VlIHtAbGluayBjcmVhdGVDb250aW51b3VzTGVnZW5kfSBhbmQge0BsaW5rIGNyZWF0ZUNhdGVnb3JpY2FsTGVnZW5kfVxuICogZm9yIGFkZGl0aW9uYWwgcGFyYW1ldGVyIGRldGFpbHMuXG4gKiBAcGFyYW0ge3N0cmluZ30geC5jbGFzcyAtIFZhbHVlIGluZGljYXRpbmcgdGhlIGRlc2lyZWQgdHlwZSBvZiBsZWdlbmQuXG4gKiBBY2NlcHRhYmxlIHZhbHVlcyBpbmNsdWRlIGBcIkNvbnRpbnVvdXNMZWdlbmRcImAgYW5kIGBcIkNhdGVnb3JpY2FsTGVnZW5kXCJgLlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMZWdlbmQoeCkge1xuICBpZiAoeC5jbGFzcyA9PT0gXCJDb250aW51b3VzTGVnZW5kXCIpIHtcbiAgICByZXR1cm4gY3JlYXRlQ29udGludW91c0xlZ2VuZCh4KTtcbiAgfSBlbHNlIGlmICh4LmNsYXNzID09PSBcIkNhdGVnb3JpY2FsTGVnZW5kXCIpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2F0ZWdvcmljYWxMZWdlbmQoeCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJjcmVhdGVMZWdlbmQoKTogYHhgIG5vdCBhIHJlY29nbml6ZWQgdmFsdWUuXCIpO1xuICB9XG59XG4iLCIvKiogSW1wb3J0IGRlcGVuZGVuY2llcyAqL1xuLy8gbm9kZSBtb2R1bGVzXG5pbXBvcnQge1NvcnRhYmxlfSBmcm9tIFwic29ydGFibGVqc1wiO1xuaW1wb3J0IFwidG9tLXNlbGVjdC9kaXN0L2Nzcy90b20tc2VsZWN0LmJvb3RzdHJhcDUuY3NzXCI7XG5pbXBvcnQgVG9tU2VsZWN0IGZyb20gJ3RvbS1zZWxlY3QvZGlzdC9qcy90b20tc2VsZWN0LmNvbXBsZXRlLm1pbi5qcyc7XG4vLyBmdW5jdGlvbnMgdG8gY3JlYXRlIGVsZW1lbnRzXG5pbXBvcnQge2NyZWF0ZU1lbnVJdGVtfSBmcm9tIFwiLi9tYXBwZXItc2NhZmZvbGQuanNcIjtcbmltcG9ydCB7cHJvamVjdFNlbGVjdE9wdGlvbnN9IGZyb20gXCIuLi91dGlscy9wcm9qZWN0U2VsZWN0T3B0aW9ucy5qc1wiO1xuaW1wb3J0IHtzZWxlY3RPcHRpb259IGZyb20gXCIuLi91dGlscy9wcm9qZWN0U2VsZWN0T3B0aW9ucy5qc1wiO1xuLy8gc3R5bGluZ1xuaW1wb3J0IFwiLi9jc3Mvc3R5bGUuY3NzXCI7XG5cbi8qKiBDbGFzcyByZXByZXNlbnRpbmcgYW4gb2JqZWN0IGZvciBtYW5hZ2luZyBhIG1hcC4gKi9cbmV4cG9ydCBjbGFzcyBNYXBwZXIge1xuXG4gIC8vIHByaXZhdGUgZmllbGRzXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBsYXllcnMgdGhhdCBhcmUgaGlkZGVuIG9uIG1lbnUuIE5vdGUgdGhhdCB0aGVzZSBsYXllcnNcbiAgICogYXJlIGFjdGl2ZSBhbmQgaGF2ZSBiZWVuIGFkZGVkIHRvIHRoZSBtYXAsIGJ1dCBhcmUgbm90IHNob3duIG9uIHRoZSBtZW51LlxuICAgKiBAdHlwZSB7TWFwPG9iamVjdD59XG4gICAqL1xuICBfaGlkZGVuTGF5ZXJzID0gbmV3IE1hcCgpO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhhdCBjb250YWlucyBpZGVudGlmaWVycyBmb3IgdGhlIGxheWVycyB0aGF0IGFyZSBhY3RpdmUgYW5kIGhhdmUgYmVlblxuICAgKiBhZGRlZCB0byB0aGUgbWFwLiBOb3RlIHRoYXQgdGhpcyBpbmNsdWRlcyBoaWRkZW4gbGF5ZXJzLlxuICAgKiBAdHlwZSB7U2V0PHN0cmluZz59XG4gICAqL1xuICBfYWN0aXZlTGF5ZXJJZHMgPSBuZXcgU2V0KCk7XG5cbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIGxheWVycyB0aGF0IGNhbiBiZSBhZGRlZCB0byB0aGUgbWFwLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgX21heExheWVycztcblxuICAvLyBwcml2YXRlIEhUTUwgZmllbGRzXG5cbiAgLyoqXG4gICAqIEhUTUwgRWxlbWVudCB0aGF0IGNvbnRhaW5zIHRoZSBNYXBib3ggbWFwLlxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBfbWFwO1xuXG4gIC8qKlxuICAgKiBIVE1MIEVsZW1lbnQgdGhhdCBjb250YWlucyB0aGUgbmF2aWdhdGlvbiBtZW51LlxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBfbWVudTtcblxuICAvKipcbiAgICogSFRNTCBFbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIHNlbGVjdCBpbnB1dC5cbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgX3NlbGVjdDtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBNYXBwZXIgb2JqZWN0IHdpdGggbWVudSwgbWFwLCBhbmQgcHJvamVjdCBkYXRhLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudCAtIEhUTUwgZWxlbWVudCBmb3IgbmF2aWdhdGlvbiBtZW51LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWFwSWQgLSBIVE1MIGVsZW1lbnQgaWRlbnRpZmllciBmb3IgdGhlIG1hcGdsIG1hcC5cbiAgICogQHBhcmFtIHtPYmplY3R9IHByb2plY3QgLSBPYmplY3Qgd2l0aCB2YXJpb3VzIHR5cGVzIG9mIG9iamVjdHMuXG4gICAqIEBwYXJhbSB7QXJyYXk8b2JqZWN0Pn0gcHJvamVjdC5mZWF0dXJlcyAtIEFycmF5IG9mIGZlYXR1cmUgb2JqZWN0cy5cbiAgICogQHBhcmFtIHtBcnJheTxvYmplY3Q+fSBwcm9qZWN0LmNvc3RzIC0gQXJyYXkgb2YgY29zdCBvYmplY3RzLlxuICAgKiBAcGFyYW0ge0FycmF5PG9iamVjdD59IHByb2plY3QubG9jayAtIEFycmF5IG9mIGxvY2sgb2JqZWN0cy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG1heExheWVycyAtIE1heGltdW0gbnVtYmVyIG9mIGFjdGl2ZSBsYXllcnMgcGVybWl0dGVkLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgaW5pdGlhbGl6ZShlbGVtZW50LCBtYXBJZCwgcHJvamVjdCwgbWF4TGF5ZXJzKSB7XG4gICAgLy8gaW5pdGlhbGl6ZSBmaWVsZHNcbiAgICB0aGlzLl9tYXhMYXllcnMgPSBtYXhMYXllcnMgfHwgMTU7XG4gICAgdGhpcy5fbWVudSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYXBwZXItbWVudVwiKTtcbiAgICB0aGlzLl9zZWxlY3QgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFwcGVyLXNlbGVjdFwiKTtcbiAgICB0aGlzLl9tYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtYXBJZCk7XG4gICAgLy8gZGVmaW5lIHRlbXBvcmFyeSB2YXJpYWJsZXNcbiAgICBsZXQgaSwgaiwgZWwsIGs7XG4gICAgLy8gYWRkIG1lbnUgaXRlbXNcbiAgICAvLyBub3RlIHRoYXQgdGhpcyBjb2RlIGFzc3VtZXMgdGhhdCB0aGUgdGhpcy5fbWFwIGhhcyBiZWVuXG4gICAgLy8gaW5pdGlhbGl6ZWQgd2l0aCBsYXllcnMgdGhhdCBoYXZlIHRoZSB2aXNpYmxlIHByb3BlcnR5IHNldCB0byB0cnVlLFxuICAgIC8vIGFsc28gbm90ZSB0aGF0IGxheWVycyBtdXN0IGJlIGFkZGVkIGluIHRoZSBvcmRlciB0aGF0IGlzIHRoZSByZXZlcnNlXG4gICAgLy8gb2YgdGhhdCB1c2VkIHRvIGFkZCBsYXllcnMgdG8gdGhlIG1hcFxuICAgIGZvciAoaSA9IDA7IGkgPCBwcm9qZWN0LmZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBlbCA9IGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICBwcm9qZWN0LmZlYXR1cmVzW2ldLCB0aGlzLCBwcm9qZWN0LmZlYXR1cmVzW2ldLnRoZW1lc1xuICAgICAgKTtcbiAgICAgIGlmIChwcm9qZWN0LmZlYXR1cmVzW2ldLmxheWVyLnZpc2libGUgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5fbWVudS5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIHRoaXMuX2FjdGl2ZUxheWVySWRzLmFkZChlbC5kYXRhc2V0LmlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hpZGRlbkxheWVycy5zZXQoZWwuZGF0YXNldC5pZCwgZWwpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDwgcHJvamVjdC5jb3N0cy5sZW5ndGg7IGkrKykge1xuICAgICAgZWwgPSBjcmVhdGVNZW51SXRlbShwcm9qZWN0LmNvc3RzW2ldLCB0aGlzKTtcbiAgICAgIGlmIChwcm9qZWN0LmNvc3RzW2ldLmxheWVyLnZpc2libGUgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5fbWVudS5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIHRoaXMuX2FjdGl2ZUxheWVySWRzLmFkZChlbC5kYXRhc2V0LmlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hpZGRlbkxheWVycy5zZXQoZWwuZGF0YXNldC5pZCwgZWwpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDwgcHJvamVjdC5sb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgZWwgPSBjcmVhdGVNZW51SXRlbShwcm9qZWN0LmxvY2tzW2ldLCB0aGlzKTtcbiAgICAgIGlmIChwcm9qZWN0LmxvY2tzW2ldLmxheWVyLnZpc2libGUgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5fbWVudS5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIHRoaXMuX2FjdGl2ZUxheWVySWRzLmFkZChlbC5kYXRhc2V0LmlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hpZGRlbkxheWVycy5zZXQoZWwuZGF0YXNldC5pZCwgZWwpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDwgcHJvamVjdC5zb2x1dGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGVsID0gY3JlYXRlTWVudUl0ZW0ocHJvamVjdC5zb2x1dGlvbnNbaV0sIHRoaXMpO1xuICAgICAgaWYgKHByb2plY3Quc29sdXRpb25zW2ldLmxheWVyLnZpc2libGUgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5fbWVudS5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIHRoaXMuX2FjdGl2ZUxheWVySWRzLmFkZChlbC5kYXRhc2V0LmlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hpZGRlbkxheWVycy5zZXQoZWwuZGF0YXNldC5pZCwgZWwpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBpbml0aWFsaXplIHNvcnRpbmcgYmVoYXZpb3JcbiAgICBuZXcgU29ydGFibGUodGhpcy5fbWVudSwge1xuICAgICAgaGFuZGxlOiBcIi5oYW5kbGVcIixcbiAgICAgIGFuaW1hdGlvbjogMTUwLFxuICAgICAgZGF0YUlkQXR0cjogXCJkYXRhLWlkXCIsXG4gICAgICBnaG9zdENsYXNzOiBcImdob3N0XCIsXG4gICAgICBvblVwZGF0ZTogZXZlbnQgPT4ge1xuICAgICAgICBsZXQgYmVmb3JlSWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChldmVudC5uZXdJbmRleCA+IDApIHtcbiAgICAgICAgICBiZWZvcmVJZCA9XG4gICAgICAgICAgICBldmVudC50by5jaGlsZHJlbltldmVudC5uZXdJbmRleCAtIDFdLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3ZlTGF5ZXJPbk1hcChldmVudC5pdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIiksIGJlZm9yZUlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBpbml0aWFsaXplIHNlbGVjdCBtZW51XG4gICAgbGV0IHNlbGVjdE9wdGlvbnMgPSBwcm9qZWN0U2VsZWN0T3B0aW9ucyhwcm9qZWN0KTtcbiAgICBuZXcgVG9tU2VsZWN0KHRoaXMuX3NlbGVjdCwge1xuICAgICAgb3B0aW9uczogc2VsZWN0T3B0aW9ucy5vcHRpb25zLFxuICAgICAgaXRlbXM6IFsuLi50aGlzLl9hY3RpdmVMYXllcklkc10sXG4gICAgICBjcmVhdGU6IGZhbHNlLFxuICAgICAgZHJvcGRvd25QYXJlbnQ6IFwiYm9keVwiLFxuICAgICAgbGFiZWxGaWVsZDogXCJuYW1lXCIsXG4gICAgICBzZWFyY2hGaWVsZDogW1wibmFtZVwiXSxcbiAgICAgIG1heE9wdGlvbnM6IG51bGwsXG4gICAgICBzb3J0RmllbGQ6IFwic29ydFwiLFxuICAgICAgY2xvc2VBZnRlclNlbGVjdDogZmFsc2UsXG4gICAgICBvcHRncm91cHM6IHNlbGVjdE9wdGlvbnMub3B0Z3JvdXBzLFxuICAgICAgb3B0Z3JvdXBGaWVsZDogXCJncm91cFwiLFxuICAgICAgcGx1Z2luczoge1xuICAgICAgICBjaGVja2JveF9vcHRpb25zOiB7fVxuICAgICAgfSxcbiAgICAgIHJlbmRlcjoge1xuICAgICAgICBvcHRncm91cF9oZWFkZXI6IGZ1bmN0aW9uKGRhdGEsIGVzY2FwZSkge1xuICAgICAgICAgIC8vIGRldGVybWluZSBpZiBhbGwgb3B0aW9ucyBmb3IgZ3JvdXAgYXJlIGNoZWNrZWRcbiAgICAgICAgICBjb25zdCBncm91cE9wdGlvbnMgPVxuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLm9wdGlvbnMpXG4gICAgICAgICAgICAuZmlsdGVyKHggPT4geC5ncm91cC5pbmNsdWRlcyhkYXRhLnZhbHVlKSk7XG4gICAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXRWYWx1ZSgpLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICBjb25zdCBhbGxDaGVja2VkID1cbiAgICAgICAgICAgIGdyb3VwT3B0aW9ucy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICBncm91cE9wdGlvbnMuZXZlcnkoeCA9PiB2YWx1ZXMuaW5jbHVkZXMoeC52YWx1ZSkpO1xuICAgICAgICAgIC8vIHJldHVybiBIVE1MIGZvciBoZWFkZXJcbiAgICAgICAgICByZXR1cm4gXCJcIiArXG4gICAgICAgICAgICBcIjxkaXYgY2xhc3M9XFxcIm9wdGdyb3VwLWhlYWRlclxcXCIgXCIgK1xuICAgICAgICAgICAgYGRhdGEtZ3JvdXA9XCIke2VzY2FwZShkYXRhLnZhbHVlKX1cIj5gICtcbiAgICAgICAgICAgIFwiPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBjbGFzcz1cXFwidG9tc2VsZWN0LWNoZWNrYm94XFxcIlwiICtcbiAgICAgICAgICAgIGAke2FsbENoZWNrZWQgPyBcImNoZWNrZWRcIiA6IFwiXCJ9PmAgK1xuICAgICAgICAgICAgYDxzcGFuPiR7ZXNjYXBlKGRhdGEudmFsdWUpfTwvc3Bhbj48L2Rpdj5gO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Jbml0aWFsaXplOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gZXZlbnQgbGlzdGVuZXJzIGZvciBjaGVja2JveGVzIGluIG9wdGlvbiBncm91cCBoZWFkZXJzXG4gICAgICAgIHRoaXMuZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgZS50YXJnZXQgJiZcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3B0Z3JvdXAtaGVhZGVyXCIpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyBkZWZpbmUgdmFyaWFibGVzXG4gICAgICAgICAgICBsZXQgZ3JvdXAgPSBlLnRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtZ3JvdXBcIik7XG4gICAgICAgICAgICBsZXQgY2hlY2tib3ggPSBlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgLy8gaWYgY2xpY2tlZCBvbiB0ZXh0IGxhYmVsLCB0aGVuIGFsdGVyIGNoZWNrYm94XG4gICAgICAgICAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRvbXNlbGVjdC1jaGVja2JveFwiKSkge1xuICAgICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gIWNoZWNrYm94LmNoZWNrZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgaWYgaXRlbXMgc2hvdWxkIGJlIGFkZGVkIG9yIHJlbW92ZWRcbiAgICAgICAgICAgIGxldCBpc0NoZWNrZWQgPSBjaGVja2JveC5jaGVja2VkO1xuICAgICAgICAgICAgLy8gYWRkIG9yIHJlbW92ZSBpdGVtc1xuICAgICAgICAgICAgZm9yIChjb25zdCBpZCBpbiB0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9uc1tpZF0uZ3JvdXAuaW5jbHVkZXMoZ3JvdXApKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5hZGRJdGVtKHRoaXMub3B0aW9uc1tpZF0udmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW0odGhpcy5vcHRpb25zW2lkXS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBrZWVwIHRoZSBkcm9wZG93biBvcGVuIGFmdGVyIGNsaWNraW5nIHRoZSBncm91cCBjaGVja2JveFxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIG9uSXRlbUFkZDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmVMYXllcklkcy5oYXModmFsdWUpKSB7XG4gICAgICAgICAgdGhpcy5zaG93TGF5ZXJPbk1lbnUodmFsdWUpO1xuICAgICAgICAgIHRoaXMubW92ZUxheWVyT25NYXAodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChIVE1MV2lkZ2V0cy5zaGlueU1vZGUpIHtcbiAgICAgICAgICAgIFNoaW55LnNldElucHV0VmFsdWUoXG4gICAgICAgICAgICAgIGAke2VsZW1lbnQuaWR9X3N5bmNgLFxuICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAge3ByaW9yaXR5OiBcImV2ZW50XCJ9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uSXRlbVJlbW92ZTogKHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMuaGlkZUxheWVyT25NZW51KHZhbHVlLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBsYXllciB0byB0aGUgTWFwcGVyIG9iamVjdC4gTm90ZSB0aGF0IGlmIGFkZGluZyB0aGlzIG5ldyBsYXllclxuICAgKiB3b3VsZCBleGNlZWQgdGhlIG1heGltdW0gbnVtYmVyIG9mIHBlcm1pdHRlZCBhY3RpdmUgbGF5ZXJzLCB0aGVuXG4gICAqIHRoZSBvbGRlc3QgYWN0aXZlIGxheWVyIHdpbGwgYmUgcmVtb3ZlZCBhdXRvbWF0aWNhbGx5LlxuICAgKiBAcGFyYW0ge09iamVjdH0gbGF5ZXIgLSBPYmplY3QgdGhhdCBpcyBhIGxvY2sgb3IgYSBzb2x1dGlvbi5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGFkZExheWVyKGxheWVyKSB7XG4gICAgLy8gY3JlYXRlIG1lbnUgaXRlbVxuICAgIGxldCBlbCA9IGNyZWF0ZU1lbnVJdGVtKGxheWVyLCB0aGlzKTtcbiAgICAvLyBhZGQgbWVudSBpdGVtIHRvIGhpZGRlbiBtZW51IGl0ZW1zXG4gICAgdGhpcy5faGlkZGVuTGF5ZXJzLnNldChlbC5kYXRhc2V0LmlkLCBlbCk7XG4gICAgLy8gc2V0IGxheWVyIGFzIGFjdGl2ZVxuICAgIHRoaXMuX2FjdGl2ZUxheWVySWRzLmFkZChlbC5kYXRhc2V0LmlkKTtcbiAgICAvLyBhZGQgbGF5ZXIgdG8gbWVudVxuICAgIHRoaXMuc2hvd0xheWVyT25NZW51KGVsLmRhdGFzZXQuaWQsIHRydWUsIGZhbHNlKTtcbiAgICAvLyBhZGQgbWVudSBpdGVtIHRvIHNlbGVjdFxuICAgIHRoaXMuX3NlbGVjdC50b21zZWxlY3QuYWRkT3B0aW9uKHNlbGVjdE9wdGlvbihsYXllcikpO1xuICAgIHRoaXMuX3NlbGVjdC50b21zZWxlY3QuYWRkSXRlbShsYXllci5pZCwgdHJ1ZSk7XG4gICAgLy8gaWYgbnVtYmVyIG9mIGFjdGl2ZSBsYXllcnMgZXhjZWVkcyBsaW1pdCwgdGhlbiByZW1vdmUgb2xkZXN0IGxheWVyXG4gICAgaWYgKHRoaXMuX2FjdGl2ZUxheWVySWRzLnNpemUgPiB0aGlzLl9tYXhMYXllcnMpIHtcbiAgICAgIGxldCByZW1vdmVJZCA9IHRoaXMuX2FjdGl2ZUxheWVySWRzLnZhbHVlcygpLm5leHQoKS52YWx1ZTtcbiAgICAgIHRoaXMucmVtb3ZlTGF5ZXJGcm9tTWFwKHJlbW92ZUlkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGlkZSBsYXllciBvbiBtZW51LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGF5ZXJJZCAtIEhUTUwgaWRlbnRpZmllciBmb3IgbGF5ZXIuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXBkYXRlTWFwIC0gU2hvdWxkIHRoZSBtYXAgYWxzbyBiZSB1cGRhdGVkIHRvIHJlZmxlY3RcbiAgICogdGhlc2UgY2hhbmdlcyB0byB0aGUgbWVudT9cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGhpZGVMYXllck9uTWVudShsYXllcklkLCB1cGRhdGVNYXAgPSB0cnVlKSB7XG4gICAgLy8gZmluZCBlbGVtZW50IGZvciBsYXllcidzIG1lbnUgaXRlbVxuICAgIGxldCBlbCA9IHRoaXMuX21lbnUucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2xheWVySWR9XCJdYCk7XG4gICAgLy8gdXBkYXRlIG1lbnVcbiAgICBpZiAoZWwpIHtcbiAgICAgIC8vIHJlbW92ZSBlbGVtZW50IGZyb20gbWVudVxuICAgICAgZWwucmVtb3ZlKCk7XG4gICAgICAvLyBhZGQgbWVudSBpdGVtIHRvIGhpZGRlbiBtZW51IGl0ZW1zXG4gICAgICB0aGlzLl9oaWRkZW5MYXllcnMuc2V0KGVsLmRhdGFzZXQuaWQsIGVsKTtcbiAgICB9XG4gICAgLy8gaWYgbmVlZGVkLCB1cGRhdGUgbWFwXG4gICAgaWYgKHVwZGF0ZU1hcCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5oaWRlTGF5ZXJPbk1hcChsYXllcklkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBsYXllciBvbiBtZW51LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGF5ZXJJZCAtIEhUTUwgaWRlbnRpZmllciBmb3IgbGF5ZXIuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvd0xlZ2VuZCAtIFNob3VsZCB0aGUgbGVnZW5kIGJlIHNob3duIG9uIHRoZSBtZW51P1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVwZGF0ZU1hcCAtIFNob3VsZCB0aGUgbWFwIGFsc28gYmUgdXBkYXRlZCB0byByZWZsZWN0XG4gICAqIHRoZXNlIGNoYW5nZXMgdG8gdGhlIG1lbnU/XG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBzaG93TGF5ZXJPbk1lbnUobGF5ZXJJZCwgc2hvd0xlZ2VuZCA9IHRydWUsIHVwZGF0ZU1hcCA9IHRydWUpIHtcbiAgICAvLyBmaW5kIGVsZW1lbnQgZm9yIGxheWVyJ3MgbWVudSBpdGVtXG4gICAgbGV0IGVsID0gdGhpcy5faGlkZGVuTGF5ZXJzLmdldChsYXllcklkKTtcbiAgICAvLyBmaW5kIG1lbnUgaXRlbSBjaGVja2JveCBmb3Igc2hvd2luZyBtYXAgYW5kIHNldCBhY2NvcmRpbmdseVxuICAgIGxldCBsYXllckNoZWNrYm94ID0gZWwucXVlcnlTZWxlY3RvcihcIi5sYXllci1jaGVja2JveFwiKTtcbiAgICBsYXllckNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgIC8vIGZpbmQgbWVudSBpdGVtIGNoZWNrYm94IGZvciBzaG93aW5nIGxlZ2VuZCBhbmQgc2V0IGFjY29yZGluZ2x5XG4gICAgbGV0IGxlZ2VuZENoZWNrYm94ID0gZWwucXVlcnlTZWxlY3RvcihcIi5sZWdlbmQtY2hlY2tib3hcIik7XG4gICAgaWYgKHNob3dMZWdlbmQgPT09IHRydWUpIHtcbiAgICAgIGxlZ2VuZENoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBpZiBuZWVkZWQsIHNob3cgbGF5ZXIgb24gbWFwXG4gICAgaWYgKHVwZGF0ZU1hcCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5zaG93TGF5ZXJPbk1hcChsYXllcklkKTtcbiAgICB9XG4gICAgLy8gYWRkIGxheWVyIHRvIG1lbnVcbiAgICB0aGlzLl9tZW51LnByZXBlbmQoZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgbGF5ZXIgb24gbWFwLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGF5ZXJJZCAtIEhUTUwgaWRlbnRpZmllciBmb3IgbGF5ZXIuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBzaG93TGF5ZXJPbk1hcChsYXllcklkKSB7XG4gICAgLy8gc2V0IGxheWVyIHZpc2liaWxpdHkgb24gbWFwXG4gICAgdGhpcy5fbWFwLm1hcC5zZXRMYXlvdXRQcm9wZXJ0eShcbiAgICAgIFwibHlyLVwiICsgbGF5ZXJJZCwgXCJ2aXNpYmlsaXR5XCIsIFwidmlzaWJsZVwiXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAqIEhpZGUgbGF5ZXIgb24gbWFwLlxuICAqIEBwYXJhbSB7c3RyaW5nfSBsYXllcklkIC0gSFRNTCBpZGVudGlmaWVyIGZvciBsYXllci47XG4gICogQHBhcmFtIHtib29sZWFufSB1cGRhdGVDaGVja2JveCAtIFNob3VsZCB0aGUgY2hlY2tib3ggb24gdGhlIG1lbnVcbiAgKiBiZSB1cGRhdGVkIHRvIHNob3cgdGhlIGxheWVyIGlzIGhpZGRlbiBvbiBtYXA/XG4gICogQHJldHVybiB7dm9pZH1cbiAgKi9cbiAgaGlkZUxheWVyT25NYXAobGF5ZXJJZCwgdXBkYXRlQ2hlY2tib3ggPSB0cnVlKSB7XG4gICAgLy8gc2V0IGxheWVyIHZpc2liaWxpdHkgb24gbWFwXG4gICAgdGhpcy5fbWFwLm1hcC5zZXRMYXlvdXRQcm9wZXJ0eShcbiAgICAgIFwibHlyLVwiICsgbGF5ZXJJZCwgXCJ2aXNpYmlsaXR5XCIsIFwibm9uZVwiXG4gICAgKTtcbiAgICAvLyBzZXQgY2hlY2tib3ggdG8gYmUgdW5jaGVja2VkXG4gICAgaWYgKHVwZGF0ZUNoZWNrYm94ID09PSB0cnVlKSB7XG4gICAgICBsZXQgZWwgPSB0aGlzLl9tZW51LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbZGF0YS1pZD1cIiR7bGF5ZXJJZH1cIl0gLmxheWVyLWNoZWNrYm94YFxuICAgICAgKTtcbiAgICAgIGlmIChlbCkge1xuICAgICAgICBlbC5jaGVja2VkID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTW92ZSBsYXllciBvbiBtYXAuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYXllcklkIC0gSFRNTCBpZGVudGlmaWVyIGZvciBsYXllciB0byB1cGRhdGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBiZWZvcmVJZCAtIEhUTUwgaWRlbnRpZmllciBmb3IgdGhlIGxheWVyIHRoYXQgc2hvdWxkIGJlXG4gICAqIGBsYXllcklkYCBzaG91bGQgYmUgaW5zZXJ0ZWQgYmVmb3JlIChpbiBvdGhlciB3b3JkcywgYGxheWVySWRgIHdpbGwgYXBwZWFyXG4gICAqIHVuZGVyIGBiZWZvcmVJZGApLiBJZiBgYmVmb3JlSWQgPSB1bmRlZmluZWRgLCB0aGVuIHRoZSBsYXllciBpcyBtb3ZlZCB0b1xuICAgKiB0aGUgdmVyeSB0b3AuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBtb3ZlTGF5ZXJPbk1hcChsYXllcklkLCBiZWZvcmVJZCkge1xuICAgIC8vIG1vdmUgbGF5ZXIgb24gbWFwXG4gICAgaWYgKHR5cGVvZihiZWZvcmVJZCkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRoaXMuX21hcC5tYXAubW92ZUxheWVyKFwibHlyLVwiICsgbGF5ZXJJZCwgXCJseXItXCIgKyBiZWZvcmVJZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX21hcC5tYXAubW92ZUxheWVyKFwibHlyLVwiICsgbGF5ZXJJZCwgdW5kZWZpbmVkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGxheWVyIG9uIG1hcC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGxheWVySWQgLSBIVE1MIGlkZW50aWZpZXIgZm9yIGxheWVyLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgcmVtb3ZlTGF5ZXJGcm9tTWFwKGxheWVySWQpIHtcbiAgICAvLyByZW1vdmUgbGF5ZXIgZnJvbSBtZW51XG4gICAgdGhpcy5fc2VsZWN0LnRvbXNlbGVjdC5yZW1vdmVJdGVtKGxheWVySWQpO1xuICAgIC8vIHJlbW92ZSBsYXllciBmcm9tIHNldCBvZiBhY3RpdmUgbGF5ZXJzXG4gICAgdGhpcy5fYWN0aXZlTGF5ZXJJZHMuZGVsZXRlKGxheWVySWQpO1xuICAgIC8vIHJlbW92ZSBsYXllciBmcm9tIG1hcFxuICAgIHRoaXMuX21hcC5tYXAucmVtb3ZlTGF5ZXIoXCJseXItXCIgKyBsYXllcklkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEb2VzIHRoZSBtYXAgaGF2ZSBhIHBhcnRpY3VsYXIgbGF5ZXIgYWN0aXZlP1xuICAgKiBAcGFyYW0ge3N0cmluZ30gbGF5ZXJJZCAtIEhUTUwgaWRlbnRpZmllciBmb3IgbGF5ZXIuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBoYXNMYXllckFjdGl2ZShsYXllcklkKSB7XG4gICAgdGhpcy5fYWN0aXZlTGF5ZXJJZHMuaGFzKGxheWVyX2lkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IGFsbCBtZW51IGxheWVycyBvbiBtYXAuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICAgc2hvd0FsbE1lbnVMYXllcnNPbk1hcCgpIHtcbiAgICB0aGlzLl9tZW51XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5tYXBwZXItbWVudS1pdGVtXCIpXG4gICAgICAuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICB0aGlzLnNob3dMYXllck9uTWFwKHguZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSk7XG4gICAgICAgIHgucXVlcnlTZWxlY3RvcihcIi5sYXllci1jaGVja2JveFwiKS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIGFsbCBtZW51IGxheWVycyBvbiBtYXAuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICAgaGlkZUFsbE1lbnVMYXllcnNPbk1hcCgpIHtcbiAgICB0aGlzLl9tZW51XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5tYXBwZXItbWVudS1pdGVtXCIpXG4gICAgICAuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICB0aGlzLmhpZGVMYXllck9uTWFwKHguZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSk7XG4gICAgICAgIHgucXVlcnlTZWxlY3RvcihcIi5sYXllci1jaGVja2JveFwiKS5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9KTtcbiAgIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBsYXllcnMgZnJvbSB0aGUgbWVudSBhbmQgdGhlIG1hcC5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gICByZW1vdmVBbGxMYXllcnNGcm9tTWVudUFuZE1hcCgpIHtcbiAgICB0aGlzLl9tZW51XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5tYXBwZXItbWVudS1pdGVtXCIpXG4gICAgICAuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZUxheWVyRnJvbU1hcCh4LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikpO1xuICAgICAgfSlcbiAgIH1cblxufVxuIiwiLyoqIEltcG9ydCBkZXBlbmRlbmNpZXMgKi9cbi8vIGZ1bmN0aW9ucyB0byBjcmVhdGUgZWxlbWVudHNcbmltcG9ydCB7Y3JlYXRlTGVnZW5kfSBmcm9tIFwiLi9jcmVhdGUtbGVnZW5kLmpzXCI7XG5pbXBvcnQge2NyZWF0ZVByb3ZlbmFuY2V9IGZyb20gXCIuLi91dGlscy9lbGVtZW50LmpzXCI7XG5pbXBvcnQge2NyZWF0ZU5hbWVMYWJlbH0gZnJvbSBcIi4uL3V0aWxzL2VsZW1lbnQuanNcIjtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgbWVudSBpdGVtLlxuICogQHBhcmFtIHtvYmplY3R9IHggLSBPYmplY3Qgd2l0aCBtZW51IGl0ZW0gaW5mb3JtYXRpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30geC5pZCAtIEhUTUwgZWxlbWVudCBpZGVudGlmaWVyIGZvciB0aGUgbWVudSBpdGVtLlxuICogQHBhcmFtIHtzdHJpbmd9IHgubmFtZSAtIE5hbWUgZm9yIHRoZSBtZW51IGl0ZW0uXG4gKiBAcGFyYW0ge29iamVjdH0geC5sYXllciAtIHtAbGluayBMYXllcn0gb2JqZWN0LlxuICogQHBhcmFtIHtTdHJpbmd9IHguY2xhc3MgLSBDbGFzcyBmb3IgbGF5ZXIuIEF2YWlsYWJsZSBvcHRpb25zIGluY2x1ZGVcbiAqIGBcIkZlYXR1cmVcImAsIGBcIkNvc3RcImAsIGBcIkxvY2tcImAsIGFuZCBgXCJTb2x1dGlvblwiYC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBtYXBwZXIgLSB7QGxpbmsgTWFwcGVyfSBvYmplY3QuXG4gKiBAcGFyYW0ge0FycmF5PG9iamVjdD59IHRoZW1lcyAtIFRoZW1lcyB0byB3aGljaCB0aGUgbWVudSBpdGVtIGJlbG9uZ3MuXG4gKiBOb3RlIHRoYXQgdGhpcyBpcyB0aGUgbmFtZXMgb2YgdGhlIHRoZW1lcyBmb3IgZmVhdHVyZSBsYXllcnMuXG4gKiBAcmV0dXJuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZW51SXRlbSh4LCBtYXBwZXIsIHRoZW1lcyA9IHVuZGVmaW5lZCkge1xuICAvLyBpbml0aWFsaXplIGNvbnRhaW5lciBlbGVtZW50XG4gIGxldCBlbCA9IGRvY3VtZW50LmltcG9ydE5vZGUoXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgeC5jbGFzcy50b0xvd2VyQ2FzZSgpICsgXCItbGF5ZXItdGVtcGxhdGVcIilcbiAgICAgIC5jb250ZW50LFxuICAgIHRydWUpLmNoaWxkcmVuWzBdO1xuXG4gIC8vIGZpbmQgY29tcG9uZW50cyBvZiBjb250YWluZXIgZWxlbWVudFxuICBsZXQgc2hvd0xlZ2VuZENoZWNrYm94ID0gZWwucXVlcnlTZWxlY3RvcihcIi5sZWdlbmQtY2hlY2tib3hcIik7XG4gIGxldCBzaG93TGF5ZXJDaGVja2JveCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIubGF5ZXItY2hlY2tib3hcIik7XG4gIGxldCByZW1vdmVMYXllckZyb21NYXBCdXR0b24gPSBlbC5xdWVyeVNlbGVjdG9yKFwiLmxheWVyLWJ1dHRvblwiKTtcbiAgbGV0IGxlZ2VuZEVsZW1lbnQgPSBlbC5xdWVyeVNlbGVjdG9yKFwiLmxlZ2VuZC1jb250YWluZXJcIik7XG4gIGxldCBuYW1lRWxlbWVudCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIubmFtZS1jb250YWluZXJcIik7XG4gIGxldCBwcm92ZW5hbmNlRWxlbWVudCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIucHJvdmVuYW5jZS1jb250YWluZXJcIik7XG4gIGxldCBoYW5kbGVFbGVtZW50ID0gZWwucXVlcnlTZWxlY3RvcihcIi5oYW5kbGVcIik7XG5cbiAgLy8gc2V0IGxheWVyIGlkXG4gIGVsLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgeC5pZCk7XG5cbiAgLy8gY3JlYXRlIG5hbWUgbGFiZWxcbiAgbmFtZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTmFtZUxhYmVsKHgpKTtcblxuICAvLyBzZXQgbGF5ZXIgY2hlY2tib3ggc3RhdHVzXG4gIHNob3dMYXllckNoZWNrYm94LmNoZWNrZWQgPSB4LmxheWVyLnZpc2libGU7XG5cbiAgLy8gc2V0IGxlZ2VuZCBjaGVja2JveFxuICBzaG93TGVnZW5kQ2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG5cbiAgLy8gYWRkIGxlZ2VuZFxuICBsZWdlbmRFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUxlZ2VuZCh4LmxheWVyLmxlZ2VuZCkpO1xuXG4gIC8vIGFkZCBwcm92ZW5hbmNlXG4gIHByb3ZlbmFuY2VFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZVByb3ZlbmFuY2UoeC5sYXllci5wcm92ZW5hbmNlKSk7XG5cbiAgLy8gc2V0IGxpc3RlbmVyIGZvciBjaGVja2JveCB0byBzaG93L2hpZGUgbGVnZW5kXG4gIHNob3dMZWdlbmRDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICBsZWdlbmRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlZ2VuZEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gc2V0IGxpc3RlbmVyIGZvciBidXR0b24gdG8gaGlkZSBsYXllclxuICBzaG93TGF5ZXJDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICBtYXBwZXIuc2hvd0xheWVyT25NYXAoeC5pZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hcHBlci5oaWRlTGF5ZXJPbk1hcCh4LmlkLCBmYWxzZSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBzZXQgbGlzdGVuZXIgZm9yIGJ1dHRvbiB0byBkcm9wIGxheWVyXG4gIHJlbW92ZUxheWVyRnJvbU1hcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIG1hcHBlci5fc2VsZWN0LnRvbXNlbGVjdC5yZW1vdmVJdGVtKHguaWQpO1xuICB9KTtcblxuICAvLyByZXR1cm4gZWxlbWVudFxuICByZXR1cm4gZWw7XG59O1xuIiwiLyoqIEltcG9ydCBkZXBlbmRlbmNpZXMgKi9cbi8vIHN0eWxpbmdcbmltcG9ydCBcIi4vY3NzL3N0eWxlLmNzc1wiO1xuXG4vKipcbiAqIEFkZCBhIHRvb2wgdGlwLlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIEhUTUwgZWxlbWVudCB0aGF0IHJlcXVpcmVzIGEgdG9vbCB0aXAuO1xuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IHRvIGRpc3BsYXkgaW4gdG9vbCB0aXAuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9vbHRpcChlbGVtZW50LCB0ZXh0KSB7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10b2dnbGVcIiwgXCJ0b29sdGlwXCIpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtcGxhY2VtZW50XCIsIFwidG9wXCIpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtY29udGFpbmVyXCIsIFwiYm9keVwiKTtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCB0ZXh0KTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBwcm92ZW5hbmNlLlxuICogQHBhcmFtIHtvYmplY3R9IHggLSBPYmplY3Qgd2l0aCBwcm9wZXJ0aWVzIGZvciBjdXN0b21pemF0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IHguZGVzY3JpcHRpb24gLSBUZXh0IHRvIGRpc3BsYXkgaW4gdG9vbCB0aXAuXG4gKiBAcGFyYW0ge3N0cmluZ30geC5pY29uIC0gTmFtZSBvZiBGb250IEF3ZXNvbWUgaWNvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSB4LmNvbG9yIC0gQ29sb3IgZm9yIGljb24uXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb3ZlbmFuY2UoeCkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgZWwuY2xhc3NMaXN0LmFkZChcInByb3ZlbmFuY2VcIik7XG4gIGlmICh0eXBlb2YoeC5kZXNjcmlwdGlvbikgPT09IFwic3RyaW5nXCIpIHtcbiAgICBhZGRUb29sdGlwKGVsLCB4LmRlc2NyaXB0aW9uKTtcbiAgfVxuICBlbC5jbGFzc0xpc3QuYWRkKFwiZmFzXCIpO1xuICBlbC5jbGFzc0xpc3QuYWRkKFwiZmEtXCIgKyB4Lmljb24pO1xuICBlbC5zdHlsZS5jb2xvciA9IHguY29sb3I7XG4gIHJldHVybiBlbDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuYW1lIGxhYmVsLlxuICogQHBhcmFtIHtvYmplY3R9IHggLSBPYmplY3Qgd2l0aCBwcm9wZXJ0aWVzIGZvciBjdXN0b21pemF0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IHguZGVzY3JpcHRpb24gLSBUZXh0IHRvIGRpc3BsYXkgaW4gdG9vbCB0aXAuXG4gKiBAcGFyYW0ge3N0cmluZ30geC5pY29uIC0gTmFtZSBvZiBGb250IEF3ZXNvbWUgaWNvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSB4LmNvbG9yIC0gQ29sb3IgZm9yIGljb24uXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5hbWVMYWJlbCh4KSB7XG4gIC8vIGNyZWF0ZSBlbGVtZW50XG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZWwuY2xhc3NMaXN0LmFkZChcIm5hbWUtbGFiZWxcIik7XG4gIC8vIHNldCBsYXllciBuYW1lXG4gIGVsLmlubmVyVGV4dCA9IHgubmFtZTtcbiAgLy8gaW5pdGlhbGl6ZSBwb3B1cCB0ZXh0XG4gIGxldCB0aXRsZSA9IFwiXCI7XG4gIC8vIGlmIG5lZWRlZCwgYWRkIHRoZW1lIGluZm9ybWF0aW9uIHRvIHBvcHVwIHRleHRcbiAgaWYgKHR5cGVvZih4LnRoZW1lcykgPT09IFwib2JqZWN0XCIpIHtcbiAgICB0aXRsZSArPSBgVGhpcyAke3guY2xhc3N9IGJlbG9uZ3MgdG8gdGhlIGZvbGxvd2luZyB0aGVtZXM6YDtcbiAgICB0aXRsZSArPSBgICR7eC50aGVtZXNbMF0ubmFtZX0gKCR7eC50aGVtZXNbMF0uem9uZX0gem9uZSlgO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgeC50aGVtZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHRpdGxlICs9IGAsICR7eC50aGVtZXNbaV0ubmFtZX0gKCR7eC50aGVtZXNbaV0uem9uZX0gem9uZSlgO1xuICAgIH1cbiAgfVxuICAvLyBpZiBuZWVkZWQsIGFkZCBkZXRhaWxzIHRvIHBvcHVwIHRleHRcbiAgaWYgKHR5cGVvZih4LmxheWVyKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YoeC5sYXllci5kZXRhaWxzKSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGlmICh0aXRsZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aXRsZSArPSBcIiBcIjtcbiAgICB9XG4gICAgdGl0bGUgKz0geC5sYXllci5kZXRhaWxzO1xuICB9XG4gIC8vIGlmIG5lZWRlZCwgaW5pdGlhbGl6ZSBwb3B1cFxuICBpZiAodGl0bGUubGVuZ3RoID4gMCkge1xuICAgIGFkZFRvb2x0aXAoZWwsIHRpdGxlICsgXCIuXCIpO1xuICB9XG4gIC8vIHJldHVybiBlbGVtZW50XG4gIHJldHVybiBlbDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBoYW5kbGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb24gLSBUZXh0IHRvIGRpc3BsYXkgaW4gdG9vbCB0aXAuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhhbmRsZShkZXNjcmlwdGlvbikge1xuICAvLyBjcmVhdGUgZWxlbWVudFxuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbC5jbGFzc0xpc3QuYWRkKFwiaGFuZGxlXCIpO1xuICAvLyBjcmVhdGUgaWNvblxuICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBpZiAodHlwZW9mKGRlc2NyaXB0aW9uKSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGFkZFRvb2x0aXAoZWwsIGRlc2NyaXB0aW9uKTtcbiAgfVxuICBpY29uLmNsYXNzTGlzdC5hZGQoXCJmYXNcIiwgXCJmYS1hcnJvd3MtYWx0XCIpO1xuICBpY29uLnN0eWxlLmNvbG9yID0gXCItLWhhbmRsZVwiO1xuICAvLyBhcHBlbmQgaWNvbiB0byBlbGVtZW50XG4gIGVsLmFwcGVuZENoaWxkKGljb24pO1xuICAvLyByZXR1cm4gZWxlbWVudFxuICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgc2V0IG9mIHN3aXRjaGVzXG4gKiBAcGFyYW0ge251bWJlcn0gbiAtIE51bWJlciBvZiBzd2l0Y2hlcyB0byBjcmVhdGUuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN3aXRjaGVzKG4gPSAxLCBjaGVja2VkID0gdHJ1ZSkge1xuICAvLyBjcmVhdGUgY29udGFpbmVyXG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsLmNsYXNzTGlzdC5hZGQoXCJzd2l0Y2hlc1wiKTtcbiAgLy8gY3JlYXRlIHN3aXRjaGVzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgLy8gY3JlYXRlIHN3aXRjaCBmb3JtXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImZvcm0tY2hlY2tcIiwgXCJmb3JtLXN3aXRjaFwiLCBcInAtMFwiLCBcIm0tMFwiKTtcbiAgICAvLyBjcmVhdGUgc3dpdGNoIGlucHV0XG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jaGVjay1pbnB1dFwiLCBcInN3aXRjaFwiLCBcIm1zLTBcIik7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcInN3aXRjaFwiKTtcbiAgICBpbnB1dC5jaGVja2VkID0gY2hlY2tlZDtcbiAgICAvLyBhcHBlbmQgZWxlbWVudFxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGVsLmFwcGVuZENoaWxkKGZvcm0pO1xuICB9XG4gIC8vIHJldHVybiBlbGVtZW50XG4gIHJldHVybiBlbDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYnV0dG9uIGdyb3VwXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGdyb3VwTGFiZWxzIC0gTGFiZWwgZm9yIGVhY2ggYnV0dG9uIGdyb3VwLlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBidXR0b25MYWJlbHMgLSBMYWJlbCBmb3IgZWFjaCBvZiB0aGUgYnV0dG9ucy5cbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gZ3JvdXBDb2xvcnMgLSBDb2xvcnMgZm9yIGdyb3VwIGxhYmVscy5cbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8c3RyaW5nPj59IHRvb2x0aXBMYWJlbHMgLSBMYWJlbHMgZm9yIHRvb2x0aXBzLlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCdXR0b25Hcm91cHMoXG4gIGdyb3VwTGFiZWxzLCBidXR0b25MYWJlbHMsIGdyb3VwQ29sb3JzLCB0b29sdGlwTGFiZWxzXG4pIHtcbiAgLy8gY3JlYXRlIGNvbnRhaW5lclxuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbC5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLWdyb3Vwc1wiLCBcImJvcmRlclwiLCBcInJvdW5kZWRcIik7XG4gIC8vIGFkZCBlYWNoIGdyb3VwXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JvdXBMYWJlbHMubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBjcmVhdGUgYnV0dG9uIGdyb3VwXG4gICAgbGV0IGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBncm91cC5jbGFzc0xpc3QuYWRkKFwiYnRuLWdyb3VwXCIpO1xuICAgIC8vIGFkZCBidXR0b25zIHRvIGNvbnRhaW5lclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYnV0dG9uTGFiZWxzLmxlbmd0aDsgKytqKSB7XG4gICAgICAvLyBjcmVhdGUgYnV0dG9uIHRleHRcbiAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBzcGFuLmlubmVyVGV4dCA9IGJ1dHRvbkxhYmVsc1tqXTtcbiAgICAgIC8vIGNyZWF0ZSBidXR0b25cbiAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIiwgXCJidG4tc21cIik7XG4gICAgICBidG4uc2V0QXR0cmlidXRlKFwiZGF0YS1ncm91cC1pbmRleFwiLCBpKTtcbiAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWdyb3VwLWxhYmVsXCIsIGdyb3VwTGFiZWxzW2ldKTtcbiAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWxhYmVsXCIsIGJ1dHRvbkxhYmVsc1tqXSk7XG4gICAgICBidG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZ3JvdXBDb2xvcnNbaV07XG4gICAgICBhZGRUb29sdGlwKGJ0biwgdG9vbHRpcExhYmVsc1tpXVtqXSk7XG4gICAgICAvLyBhcHBlbmQgZWxlbWVudHNcbiAgICAgIGJ0bi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgIGdyb3VwLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgfVxuICAgIC8vIGFkZCB0byBncm91cCB0byBjb250YWluZXJcbiAgICBlbC5hcHBlbmRDaGlsZChncm91cCk7XG4gIH1cbiAgLy8gcmV0dXJuIGVsZW1lbnQ7XG4gIHJldHVybiBlbDtcbn1cbiIsIi8qKlxuICogR2VuZXJhdGUgcGFyYW1ldGVycyBmb3IgYSBUb20gU2VsZWN0IHdpZGdldCBiYXNlZCBvbiBhIHByb2plY3QuXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvamVjdCAtIFByb2plY3Qgb2JqZWN0LlxuICogQHBhcmFtIHtBcnJheTxvYmplY3Q+fSBwcm9qZWN0LmZlYXR1cmVzIC0gQXJyYXkgb2YgRmVhdHVyZSBvYmplY3RzLlxuICogQHBhcmFtIHtBcnJheTxvYmplY3Q+fSBwcm9qZWN0LmxvY2tzIC0gQXJyYXkgb2YgTG9jayBvYmplY3RzLlxuICogQHBhcmFtIHtBcnJheTxvYmplY3Q+fSBwcm9qZWN0LmNvc3RzIC0gQXJyYXkgb2YgQ29zdCBvYmplY3RzLlxuICogQHBhcmFtIHtBcnJheTxvYmplY3Q+fSBwcm9qZWN0LnNvbHV0aW9ucyAtIEFycmF5IG9mIFNvbHV0aW9uIG9iamVjdHMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVGZWF0dXJlcyAtIFNob3VsZCBmZWF0dXJlcyBiZSBpbmNsdWRlZCBpbiB0aGVcbiAqIG91dHB1dD9cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZUNvc3RzIC0gU2hvdWxkIGNvc3RzIGJlIGluY2x1ZGVkIGluIHRoZVxuICogb3V0cHV0P1xuICogQHBhcmFtIHtib29sZWFufSBpbmNsdWRlTG9ja3MgLSBTaG91bGQgbG9ja3MgYmUgaW5jbHVkZWQgaW4gdGhlXG4gKiBvdXRwdXQ/XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVTb2x1dGlvbnMgLSBTaG91bGQgc29sdXRpb25zIGJlIGluY2x1ZGVkIGluIHRoZVxuICogb3V0cHV0P1xuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdFNlbGVjdE9wdGlvbnMoXG4gIHByb2plY3QsXG4gIGluY2x1ZGVGZWF0dXJlcyA9IHRydWUsXG4gIGluY2x1ZGVDb3N0cyA9IHRydWUsXG4gIGluY2x1ZGVMb2NrcyA9IHRydWUsXG4gIGluY2x1ZGVTb2x1dGlvbnMgPSB0cnVlXG4pIHtcbiAgLy8gaW5pdGlhbGl6ZSB2YXJpYWJsZXNcbiAgbGV0IG9wdGlvbnMgPSBBcnJheShcbiAgICAocHJvamVjdC5mZWF0dXJlcy5sZW5ndGggKiBpbmNsdWRlRmVhdHVyZXMpICtcbiAgICAocHJvamVjdC5jb3N0cy5sZW5ndGggKiBpbmNsdWRlQ29zdHMpICtcbiAgICAocHJvamVjdC5sb2Nrcy5sZW5ndGggKiBpbmNsdWRlTG9ja3MpICtcbiAgICAocHJvamVjdC5zb2x1dGlvbnMubGVuZ3RoICogaW5jbHVkZVNvbHV0aW9ucylcbiAgKTtcbiAgbGV0IGdyb3VwcyA9IG5ldyBTZXQoKTtcbiAgbGV0IGluY2x1ZGVDbGFzcyA9XG4gICAgKGluY2x1ZGVGZWF0dXJlcyArIGluY2x1ZGVDb3N0cyArIGluY2x1ZGVMb2NrcyArIGluY2x1ZGVTb2x1dGlvbnMpID4gMTtcbiAgLy8gZGVmaW5lIGNvdW50ZXJzXG4gIGxldCBpLCBqLCBrO1xuICBrID0gMDtcbiAgLy8gaWYgbmVlZGVkLCBhZGQgZmVhdHVyZXNcbiAgaWYgKGluY2x1ZGVGZWF0dXJlcykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBwcm9qZWN0LmZlYXR1cmVzLmxlbmd0aDsgKytpKSB7XG4gICAgICBvcHRpb25zW2tdID0gc2VsZWN0T3B0aW9uKHByb2plY3QuZmVhdHVyZXNbaV0sIGluY2x1ZGVDbGFzcyk7XG4gICAgICBmb3IgKGogPSAwOyBqIDwgb3B0aW9uc1tpXS5ncm91cC5sZW5ndGg7ICsraikge1xuICAgICAgICBncm91cHMuYWRkKG9wdGlvbnNbaV0uZ3JvdXBbal0pO1xuICAgICAgfVxuICAgICAgKytrO1xuICAgIH07XG4gIH1cbiAgLy8gaWYgbmVlZGVkLCBhZGQgbG9ja3NcbiAgaWYgKGluY2x1ZGVMb2Nrcykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBwcm9qZWN0LmxvY2tzLmxlbmd0aDsgKytpKSB7XG4gICAgICBvcHRpb25zW2tdID0gc2VsZWN0T3B0aW9uKHByb2plY3QubG9ja3NbaV0sIGluY2x1ZGVDbGFzcyk7XG4gICAgICArK2s7XG4gICAgfTtcbiAgICBncm91cHMuYWRkKFwiTG9ja3NcIik7XG4gIH1cbiAgLy8gaWYgbmVlZGVkLCBhZGQgY29zdHNcbiAgaWYgKGluY2x1ZGVDb3N0cykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBwcm9qZWN0LmNvc3RzLmxlbmd0aDsgKytpKSB7XG4gICAgICBvcHRpb25zW2tdID0gc2VsZWN0T3B0aW9uKHByb2plY3QuY29zdHNbaV0sIGluY2x1ZGVDbGFzcyk7XG4gICAgICArK2s7XG4gICAgfTtcbiAgICBncm91cHMuYWRkKFwiQ29zdHNcIik7XG4gIH1cbiAgLy8gaWYgbmVlZGVkLCBhZGQgc29sdXRpb25zXG4gIGlmIChpbmNsdWRlU29sdXRpb25zKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IHByb2plY3Quc29sdXRpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICBvcHRpb25zW2tdID0gc2VsZWN0T3B0aW9uKHByb2plY3Quc29sdXRpb25zW2ldLCBpbmNsdWRlQ2xhc3MpO1xuICAgICAgKytrO1xuICAgIH07XG4gICAgZ3JvdXBzLmFkZChcIlNvbHV0aW9uc1wiKTtcbiAgfVxuICAvLyByZXR1cm4gb2JqZWN0XG4gIHJldHVybiB7XG4gICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICBvcHRncm91cHM6IEFycmF5LmZyb20oZ3JvdXBzKS5tYXAoeCA9PiB7cmV0dXJuIHt2YWx1ZTogeH19KVxuICB9O1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIFRvbSBTZWxlY3Qgb3B0aW9uIGZvciBhIHByb2plY3QgZWxlbWVudC5cbiAqIEBwYXJhbSB7b2JqZWN0fSB4IC0gT2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IHguaWQgLSBVbmlxdWUgaWRlbnRpZmllci5cbiAqIEBwYXJhbSB7c3RyaW5nfSB4Lm5hbWUgLSBOYW1lLlxuICogQHBhcmFtIHtzdHJpbmd9IHguY2xhc3MgLSBUeXBlIG9mIG9iamVjdC5cbiAqIEBwYXJhbSB7QXJyYXk8b2JqZWN0Pn0geC50aGVtZSAtIE9wdGlvbmFsIGFycmF5IG9mIHRoZW1lIG9iamVjdHMuXG4gKiBAcGFyYW0ge3N0cmluZ30geC50aGVtZXMubmFtZSAtIE5hbWUgb2YgdGhlbWUuXG4gKiBAcGFyYW0ge3N0cmluZ30geC50aGVtZXMuem9uZSAtIFpvbmUgYXNzb2NpYXRlZCB3aXRoIHRoZW1lLlxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0T3B0aW9uKHgsIGluY2x1ZGVDbGFzcyA9IHRydWUpIHtcbiAgLy8gaW5pdGlhbGl6ZSBvYmplY3RcbiAgbGV0IG91dCA9IHt2YWx1ZTogeC5pZCwgbmFtZTogeC5uYW1lfTtcbiAgLy8gcHJvY2VzcyBncm91cFxuICBsZXQgZ3JvdXAgPSB4LmNsYXNzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgeC5jbGFzcy5zbGljZSgxKSArIFwic1wiO1xuICBpZiAoeC50aGVtZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIGlmIG9iamVjdCBoYXMgdGhlbWVzLCB0aGVuIGFkZCBncm91cHMgYmFzZWQgb24gdGhlbVxuICAgIGlmIChpbmNsdWRlQ2xhc3MpIHtcbiAgICAgIG91dC5ncm91cCA9IHgudGhlbWVzLm1hcCh5ID0+IGAke2dyb3VwfSAoJHt0aGVtZUdyb3VwTmFtZSh5KX0pYCkuc29ydCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXQuZ3JvdXAgPSB4LnRoZW1lcy5tYXAoeSA9PiB0aGVtZUdyb3VwTmFtZSh5KSkuc29ydCgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBvdGhlcndpc2UsIHRoZW4gYWRkIGdyb3VwIGJhc2VkIG9uIGNsYXNzIG5hbWVcbiAgICBvdXQuZ3JvdXAgPSBncm91cDtcbiAgfVxuICAvLyBwcm9jZXNzIHNvcnQga2V5XG4gIGxldCBvcmQgPSBbXCJGZWF0dXJlc1wiLCBcIkxvY2tzXCIsIFwiQ29zdHNcIiwgXCJTb2x1dGlvbnNcIl07XG4gIGxldCBpID0gb3JkLmluZGV4T2YoZ3JvdXApICsgMTtcbiAgaWYgKGkgPCAwKSB7XG4gICAgaSA9IDk5OTsgLy8gaWYgY2xhc3Mgbm90IHJlY29nbml6ZWQsIHRoZW4gcHV0IGl0IGxhc3RcbiAgfVxuICBvdXQuc29ydCA9IGAke2l9LSR7eC5uYW1lfWA7XG4gIC8vIHJldHVybiBvYmplY3RcbiAgcmV0dXJuIG91dFxufVxuXG4vKipcbiAqIENyZWF0ZSBhIGdyb3VwIG5hbWUgZm9yIGEgdGhlbWUuXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0IC0gVGhlbWUgb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IG9iamVjdC5uYW1lIC0gTmFtZSBvZiB0aGVtZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBvYmplY3Quem9uZSAtIFpvbmUgYXNzb2NpYXRlZCB3aXRoIHRoZSB0aGVtZS5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gdGhlbWVHcm91cE5hbWUob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Yob2JqZWN0LnpvbmUpID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIGAke29iamVjdC56b25lfTogJHtvYmplY3QubmFtZX1gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBvYmplY3QubmFtZTtcbiAgfVxufVxuIiwiLyoqXG4qIFRvbSBTZWxlY3QgdjIuNi4yXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qL1xuIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6KGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczplfHxzZWxmKS5Ub21TZWxlY3Q9dCgpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCJcbmZ1bmN0aW9uIGUoZSx0KXtlLnNwbGl0KC9cXHMrLykuZm9yRWFjaChlPT57dChlKX0pfWNsYXNzIHR7Y29uc3RydWN0b3IoKXt0aGlzLl9ldmVudHM9e319b24odCxpKXtlKHQsZT0+e2NvbnN0IHQ9dGhpcy5fZXZlbnRzW2VdfHxbXVxudC5wdXNoKGkpLHRoaXMuX2V2ZW50c1tlXT10fSl9b2ZmKHQsaSl7dmFyIHM9YXJndW1lbnRzLmxlbmd0aFxuMCE9PXM/ZSh0LGU9PntpZigxPT09cylyZXR1cm4gdm9pZCBkZWxldGUgdGhpcy5fZXZlbnRzW2VdXG5jb25zdCB0PXRoaXMuX2V2ZW50c1tlXVxudm9pZCAwIT09dCYmKHQuc3BsaWNlKHQuaW5kZXhPZihpKSwxKSx0aGlzLl9ldmVudHNbZV09dCl9KTp0aGlzLl9ldmVudHM9e319dHJpZ2dlcih0LC4uLmkpe3ZhciBzPXRoaXNcbmUodCxlPT57Y29uc3QgdD1zLl9ldmVudHNbZV1cbnZvaWQgMCE9PXQmJnQuZm9yRWFjaChlPT57ZS5hcHBseShzLGkpfSl9KX19Y29uc3QgaT1lPT4oZT1lLmZpbHRlcihCb29sZWFuKSkubGVuZ3RoPDI/ZVswXXx8XCJcIjoxPT1sKGUpP1wiW1wiK2Uuam9pbihcIlwiKStcIl1cIjpcIig/OlwiK2Uuam9pbihcInxcIikrXCIpXCIscz1lPT57aWYoIW8oZSkpcmV0dXJuIGUuam9pbihcIlwiKVxubGV0IHQ9XCJcIixpPTBcbmNvbnN0IHM9KCk9PntpPjEmJih0Kz1cIntcIitpK1wifVwiKX1cbnJldHVybiBlLmZvckVhY2goKG4sbyk9PntuIT09ZVtvLTFdPyhzKCksdCs9bixpPTEpOmkrK30pLHMoKSx0fSxuPWU9PntsZXQgdD1BcnJheS5mcm9tKGUpXG5yZXR1cm4gaSh0KX0sbz1lPT5uZXcgU2V0KGUpLnNpemUhPT1lLmxlbmd0aCxyPWU9PihlK1wiXCIpLnJlcGxhY2UoLyhbXFwkXFwoXFwpXFwqXFwrXFwuXFw/XFxbXFxdXFxeXFx7XFx8XFx9XFxcXF0pL2d1LFwiXFxcXCQxXCIpLGw9ZT0+ZS5yZWR1Y2UoKGUsdCk9Pk1hdGgubWF4KGUsYSh0KSksMCksYT1lPT5BcnJheS5mcm9tKGUpLmxlbmd0aCxjPWU9PntpZigxPT09ZS5sZW5ndGgpcmV0dXJuW1tlXV1cbmxldCB0PVtdXG5jb25zdCBpPWUuc3Vic3RyaW5nKDEpXG5yZXR1cm4gYyhpKS5mb3JFYWNoKGZ1bmN0aW9uKGkpe2xldCBzPWkuc2xpY2UoMClcbnNbMF09ZS5jaGFyQXQoMCkrc1swXSx0LnB1c2gocykscz1pLnNsaWNlKDApLHMudW5zaGlmdChlLmNoYXJBdCgwKSksdC5wdXNoKHMpfSksdH0sZD1bWzAsNjU1MzVdXVxubGV0IHUscFxuY29uc3QgaD17fSxnPXtcIi9cIjpcIuKBhOKIlVwiLDA6XCLfgFwiLGE6XCLisaXJkMmRXCIsYWE6XCLqnLNcIixhZTpcIsOmx73Ho1wiLGFvOlwi6py1XCIsYXU6XCLqnLdcIixhdjpcIuqcueqcu1wiLGF5Olwi6py9XCIsYjpcIsaAyZPGg1wiLGM6XCLqnL/GiMi84oaEXCIsZDpcIsSRyZfJluG0hcaM6q631IHJplwiLGU6XCLJm8ed4bSHyYdcIixmOlwi6p28xpJcIixnOlwix6XJoOqeoeG1ueqdv8miXCIsaDpcIsSn4rGo4rG2yaVcIixpOlwiyajEsVwiLGo6XCLJici3XCIsazpcIsaZ4rGq6p2B6p2D6p2F6p6jXCIsbDpcIsWCxprJq+Kxoeqdieqdh+qegcmtXCIsbTpcIsmxya/Pu1wiLG46XCLqnqXGnsmy6p6R4bSO0LvUiVwiLG86XCLDuMe/yZTJteqdi+qdjeG0kVwiLG9lOlwixZNcIixvaTpcIsajXCIsb286XCLqnY9cIixvdTpcIsijXCIscDpcIsal4bW96p2R6p2T6p2Vz4FcIixxOlwi6p2X6p2ZyYtcIixyOlwiyY3Jveqdm+qep+qeg1wiLHM6XCLDn8i/6p6p6p6FyoJcIix0OlwixafGrcqI4rGm6p6HXCIsdGg6XCLDvlwiLHR6Olwi6pypXCIsdTpcIsqJXCIsdjpcIsqL6p2fyoxcIix2eTpcIuqdoVwiLHc6XCLisbNcIix5OlwixrTJj+G7v1wiLHo6XCLGtsilyYDisazqnaNcIixodjpcIsaVXCJ9XG5mb3IobGV0IGUgaW4gZyl7bGV0IHQ9Z1tlXXx8XCJcIlxuZm9yKGxldCBpPTA7aTx0Lmxlbmd0aDtpKyspe2xldCBzPXQuc3Vic3RyaW5nKGksaSsxKVxuaFtzXT1lfX1jb25zdCBmPW5ldyBSZWdFeHAoT2JqZWN0LmtleXMoaCkuam9pbihcInxcIikrXCJ8W8yALc2vwrfKvsq8XVwiLFwiZ3VcIiksbT0oZSx0PVwiTkZLRFwiKT0+ZS5ub3JtYWxpemUodCksdj1lPT5BcnJheS5mcm9tKGUpLnJlZHVjZSgoZSx0KT0+ZStPKHQpLFwiXCIpLE89ZT0+KGU9bShlKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoZixlPT5oW2VdfHxcIlwiKSxtKGUsXCJORkNcIikpXG5jb25zdCBiPWU9Pntjb25zdCB0PXt9LGk9KGUsaSk9Pntjb25zdCBzPXRbZV18fG5ldyBTZXQsbz1uZXcgUmVnRXhwKFwiXlwiK24ocykrXCIkXCIsXCJpdVwiKVxuaS5tYXRjaChvKXx8KHMuYWRkKHIoaSkpLHRbZV09cyl9XG5mb3IobGV0IHQgb2YgZnVuY3Rpb24qKGUpe2Zvcihjb25zdFt0LGldb2YgZSlmb3IobGV0IGU9dDtlPD1pO2UrKyl7bGV0IHQ9U3RyaW5nLmZyb21DaGFyQ29kZShlKSxpPXYodClcbmkhPXQudG9Mb3dlckNhc2UoKSYmKGkubGVuZ3RoPjN8fDAhPWkubGVuZ3RoJiYoeWllbGR7Zm9sZGVkOmksY29tcG9zZWQ6dCxjb2RlX3BvaW50OmV9KSl9fShlKSlpKHQuZm9sZGVkLHQuZm9sZGVkKSxpKHQuZm9sZGVkLHQuY29tcG9zZWQpXG5yZXR1cm4gdH0seT1lPT57Y29uc3QgdD1iKGUpLHM9e31cbmxldCBvPVtdXG5mb3IobGV0IGUgaW4gdCl7bGV0IGk9dFtlXVxuaSYmKHNbZV09bihpKSksZS5sZW5ndGg+MSYmby5wdXNoKHIoZSkpfW8uc29ydCgoZSx0KT0+dC5sZW5ndGgtZS5sZW5ndGgpXG5jb25zdCBsPWkobylcbnJldHVybiBwPW5ldyBSZWdFeHAoXCJeXCIrbCxcInVcIiksc30sdz0oZSx0PTEpPT4odD1NYXRoLm1heCh0LGUubGVuZ3RoLTEpLGkoYyhlKS5tYXAoZT0+KChlLHQ9MSk9PntsZXQgaT0wXG5yZXR1cm4gZT1lLm1hcChlPT4odVtlXSYmKGkrPWUubGVuZ3RoKSx1W2VdfHxlKSksaT49dD9zKGUpOlwiXCJ9KShlLHQpKSkpLFM9KGUsdD0hMCk9PntsZXQgbj1lLmxlbmd0aD4xPzE6MFxucmV0dXJuIGkoZS5tYXAoZT0+e2xldCBpPVtdXG5jb25zdCBvPXQ/ZS5sZW5ndGgoKTplLmxlbmd0aCgpLTFcbmZvcihsZXQgdD0wO3Q8bzt0KyspaS5wdXNoKHcoZS5zdWJzdHJzW3RdfHxcIlwiLG4pKVxucmV0dXJuIHMoaSl9KSl9LF89KGUsdCk9Pntmb3IoY29uc3QgaSBvZiB0KXtpZihpLnN0YXJ0IT1lLnN0YXJ0fHxpLmVuZCE9ZS5lbmQpY29udGludWVcbmlmKGkuc3Vic3Rycy5qb2luKFwiXCIpIT09ZS5zdWJzdHJzLmpvaW4oXCJcIikpY29udGludWVcbmxldCB0PWUucGFydHNcbmNvbnN0IHM9ZT0+e2Zvcihjb25zdCBpIG9mIHQpe2lmKGkuc3RhcnQ9PT1lLnN0YXJ0JiZpLnN1YnN0cj09PWUuc3Vic3RyKXJldHVybiExXG5pZigxIT1lLmxlbmd0aCYmMSE9aS5sZW5ndGgpe2lmKGUuc3RhcnQ8aS5zdGFydCYmZS5lbmQ+aS5zdGFydClyZXR1cm4hMFxuaWYoaS5zdGFydDxlLnN0YXJ0JiZpLmVuZD5lLnN0YXJ0KXJldHVybiEwfX1yZXR1cm4hMX1cbmlmKCEoaS5wYXJ0cy5maWx0ZXIocykubGVuZ3RoPjApKXJldHVybiEwfXJldHVybiExfVxuY2xhc3MgQ3twYXJ0c1xuc3Vic3Ryc1xuc3RhcnRcbmVuZFxuY29uc3RydWN0b3IoKXt0aGlzLnBhcnRzPVtdLHRoaXMuc3Vic3Rycz1bXSx0aGlzLnN0YXJ0PTAsdGhpcy5lbmQ9MH1hZGQoZSl7ZSYmKHRoaXMucGFydHMucHVzaChlKSx0aGlzLnN1YnN0cnMucHVzaChlLnN1YnN0ciksdGhpcy5zdGFydD1NYXRoLm1pbihlLnN0YXJ0LHRoaXMuc3RhcnQpLHRoaXMuZW5kPU1hdGgubWF4KGUuZW5kLHRoaXMuZW5kKSl9bGFzdCgpe3JldHVybiB0aGlzLnBhcnRzW3RoaXMucGFydHMubGVuZ3RoLTFdfWxlbmd0aCgpe3JldHVybiB0aGlzLnBhcnRzLmxlbmd0aH1jbG9uZShlLHQpe2xldCBpPW5ldyBDLHM9SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnBhcnRzKSksbj1zLnBvcCgpXG5mb3IoY29uc3QgZSBvZiBzKWkuYWRkKGUpXG5sZXQgbz10LnN1YnN0ci5zdWJzdHJpbmcoMCxlLW4uc3RhcnQpLHI9by5sZW5ndGhcbnJldHVybiBpLmFkZCh7c3RhcnQ6bi5zdGFydCxlbmQ6bi5zdGFydCtyLGxlbmd0aDpyLHN1YnN0cjpvfSksaX19Y29uc3QgeD1lPT57dm9pZCAwPT09dSYmKHU9eShkKSksZT12KGUpXG5sZXQgdD1cIlwiLGk9W25ldyBDXVxuZm9yKGxldCBzPTA7czxlLmxlbmd0aDtzKyspe2xldCBuPWUuc3Vic3RyaW5nKHMpLm1hdGNoKHApXG5jb25zdCBvPWUuc3Vic3RyaW5nKHMscysxKSxyPW4/blswXTpudWxsXG5sZXQgbD1bXSxhPW5ldyBTZXRcbmZvcihjb25zdCBlIG9mIGkpe2NvbnN0IHQ9ZS5sYXN0KClcbmlmKCF0fHwxPT10Lmxlbmd0aHx8dC5lbmQ8PXMpaWYocil7Y29uc3QgdD1yLmxlbmd0aFxuZS5hZGQoe3N0YXJ0OnMsZW5kOnMrdCxsZW5ndGg6dCxzdWJzdHI6cn0pLGEuYWRkKFwiMVwiKX1lbHNlIGUuYWRkKHtzdGFydDpzLGVuZDpzKzEsbGVuZ3RoOjEsc3Vic3RyOm99KSxhLmFkZChcIjJcIilcbmVsc2UgaWYocil7bGV0IGk9ZS5jbG9uZShzLHQpXG5jb25zdCBuPXIubGVuZ3RoXG5pLmFkZCh7c3RhcnQ6cyxlbmQ6cytuLGxlbmd0aDpuLHN1YnN0cjpyfSksbC5wdXNoKGkpfWVsc2UgYS5hZGQoXCIzXCIpfWlmKGwubGVuZ3RoPjApe2w9bC5zb3J0KChlLHQpPT5lLmxlbmd0aCgpLXQubGVuZ3RoKCkpXG5mb3IobGV0IGUgb2YgbClfKGUsaSl8fGkucHVzaChlKX1lbHNlIGlmKHM+MCYmMT09YS5zaXplJiYhYS5oYXMoXCIzXCIpKXt0Kz1TKGksITEpXG5sZXQgZT1uZXcgQ1xuY29uc3Qgcz1pWzBdXG5zJiZlLmFkZChzLmxhc3QoKSksaT1bZV19fXJldHVybiB0Kz1TKGksITApLHR9LEE9KGUsdCk9PntpZihlKXJldHVybiBlW3RdfSxJPShlLHQpPT57aWYoZSl7Zm9yKHZhciBpLHM9dC5zcGxpdChcIi5cIik7KGk9cy5zaGlmdCgpKSYmKGU9ZVtpXSk7KTtyZXR1cm4gZX19LGs9KGUsdCxpKT0+e3ZhciBzLG5cbnJldHVybiBlPyhlKz1cIlwiLG51bGw9PXQucmVnZXh8fC0xPT09KG49ZS5zZWFyY2godC5yZWdleCkpPzA6KHM9dC5zdHJpbmcubGVuZ3RoL2UubGVuZ3RoLDA9PT1uJiYocys9LjUpLHMqaSkpOjB9LEY9KGUsdCk9Pnt2YXIgaT1lW3RdXG5pZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBpKXJldHVybiBpXG5pJiYhQXJyYXkuaXNBcnJheShpKSYmKGVbdF09W2ldKX0sTD0oZSx0KT0+e2lmKEFycmF5LmlzQXJyYXkoZSkpZS5mb3JFYWNoKHQpXG5lbHNlIGZvcih2YXIgaSBpbiBlKWUuaGFzT3duUHJvcGVydHkoaSkmJnQoZVtpXSxpKX0sRT0oZSx0KT0+XCJudW1iZXJcIj09dHlwZW9mIGUmJlwibnVtYmVyXCI9PXR5cGVvZiB0P2U+dD8xOmU8dD8tMTowOihlPXYoZStcIlwiKS50b0xvd2VyQ2FzZSgpKT4odD12KHQrXCJcIikudG9Mb3dlckNhc2UoKSk/MTp0PmU/LTE6MFxuY2xhc3MgVHtpdGVtc1xuc2V0dGluZ3NcbmNvbnN0cnVjdG9yKGUsdCl7dGhpcy5pdGVtcz1lLHRoaXMuc2V0dGluZ3M9dHx8e2RpYWNyaXRpY3M6ITB9fXRva2VuaXplKGUsdCxpKXtpZighZXx8IWUubGVuZ3RoKXJldHVybltdXG5jb25zdCBzPVtdLG49ZS5zcGxpdCgvXFxzKy8pXG52YXIgb1xucmV0dXJuIGkmJihvPW5ldyBSZWdFeHAoXCJeKFwiK09iamVjdC5rZXlzKGkpLm1hcChyKS5qb2luKFwifFwiKStcIik6KC4qKSRcIikpLG4uZm9yRWFjaChlPT57bGV0IGksbj1udWxsLGw9bnVsbFxubyYmKGk9ZS5tYXRjaChvKSkmJihuPWlbMV0sZT1pWzJdKSxlLmxlbmd0aD4wJiYobD10aGlzLnNldHRpbmdzLmRpYWNyaXRpY3M/eChlKXx8bnVsbDpyKGUpLGwmJnQmJihsPVwiXFxcXGJcIitsKSkscy5wdXNoKHtzdHJpbmc6ZSxyZWdleDpsP25ldyBSZWdFeHAobCxcIml1XCIpOm51bGwsZmllbGQ6bn0pfSksc31nZXRTY29yZUZ1bmN0aW9uKGUsdCl7dmFyIGk9dGhpcy5wcmVwYXJlU2VhcmNoKGUsdClcbnJldHVybiB0aGlzLl9nZXRTY29yZUZ1bmN0aW9uKGkpfV9nZXRTY29yZUZ1bmN0aW9uKGUpe2NvbnN0IHQ9ZS50b2tlbnMsaT10Lmxlbmd0aFxuaWYoIWkpcmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIDB9XG5jb25zdCBzPWUub3B0aW9ucy5maWVsZHMsbj1lLndlaWdodHMsbz1zLmxlbmd0aCxyPWUuZ2V0QXR0ckZuXG5pZighbylyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gMX1cbmNvbnN0IGw9MT09PW8/ZnVuY3Rpb24oZSx0KXtjb25zdCBpPXNbMF0uZmllbGRcbnJldHVybiBrKHIodCxpKSxlLG5baV18fDEpfTpmdW5jdGlvbihlLHQpe3ZhciBpPTBcbmlmKGUuZmllbGQpe2NvbnN0IHM9cih0LGUuZmllbGQpXG4hZS5yZWdleCYmcz9pKz0xL286aSs9ayhzLGUsMSl9ZWxzZSBMKG4sKHMsbik9PntpKz1rKHIodCxuKSxlLHMpfSlcbnJldHVybiBpL299XG5yZXR1cm4gMT09PWk/ZnVuY3Rpb24oZSl7cmV0dXJuIGwodFswXSxlKX06XCJhbmRcIj09PWUub3B0aW9ucy5jb25qdW5jdGlvbj9mdW5jdGlvbihlKXt2YXIgcyxuPTBcbmZvcihsZXQgaSBvZiB0KXtpZigocz1sKGksZSkpPD0wKXJldHVybiAwXG5uKz1zfXJldHVybiBuL2l9OmZ1bmN0aW9uKGUpe3ZhciBzPTBcbnJldHVybiBMKHQsdD0+e3MrPWwodCxlKX0pLHMvaX19Z2V0U29ydEZ1bmN0aW9uKGUsdCl7dmFyIGk9dGhpcy5wcmVwYXJlU2VhcmNoKGUsdClcbnJldHVybiB0aGlzLl9nZXRTb3J0RnVuY3Rpb24oaSl9X2dldFNvcnRGdW5jdGlvbihlKXt2YXIgdCxpPVtdXG5jb25zdCBzPXRoaXMsbj1lLm9wdGlvbnMsbz0hZS5xdWVyeSYmbi5zb3J0X2VtcHR5P24uc29ydF9lbXB0eTpuLnNvcnRcbmlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG8pcmV0dXJuIG8uYmluZCh0aGlzKVxuY29uc3Qgcj1mdW5jdGlvbih0LGkpe3JldHVyblwiJHNjb3JlXCI9PT10P2kuc2NvcmU6ZS5nZXRBdHRyRm4ocy5pdGVtc1tpLmlkXSx0KX1cbmlmKG8pZm9yKGxldCB0IG9mIG8pKGUucXVlcnl8fFwiJHNjb3JlXCIhPT10LmZpZWxkKSYmaS5wdXNoKHQpXG5pZihlLnF1ZXJ5KXt0PSEwXG5mb3IobGV0IGUgb2YgaSlpZihcIiRzY29yZVwiPT09ZS5maWVsZCl7dD0hMVxuYnJlYWt9dCYmaS51bnNoaWZ0KHtmaWVsZDpcIiRzY29yZVwiLGRpcmVjdGlvbjpcImRlc2NcIn0pfWVsc2UgaT1pLmZpbHRlcihlPT5cIiRzY29yZVwiIT09ZS5maWVsZClcbnJldHVybiBpLmxlbmd0aD9mdW5jdGlvbihlLHQpe3ZhciBzLG5cbmZvcihsZXQgbyBvZiBpKXtpZihuPW8uZmllbGQscz0oXCJkZXNjXCI9PT1vLmRpcmVjdGlvbj8tMToxKSpFKHIobixlKSxyKG4sdCkpKXJldHVybiBzfXJldHVybiAwfTpudWxsfXByZXBhcmVTZWFyY2goZSx0KXtjb25zdCBpPXt9XG52YXIgcz1PYmplY3QuYXNzaWduKHt9LHQpXG5pZihGKHMsXCJzb3J0XCIpLEYocyxcInNvcnRfZW1wdHlcIikscy5maWVsZHMpe0YocyxcImZpZWxkc1wiKVxuY29uc3QgZT1bXVxucy5maWVsZHMuZm9yRWFjaCh0PT57XCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PXtmaWVsZDp0LHdlaWdodDoxfSksZS5wdXNoKHQpLGlbdC5maWVsZF09XCJ3ZWlnaHRcImluIHQ/dC53ZWlnaHQ6MX0pLHMuZmllbGRzPWV9cmV0dXJue29wdGlvbnM6cyxxdWVyeTplLnRvTG93ZXJDYXNlKCkudHJpbSgpLHRva2Vuczp0aGlzLnRva2VuaXplKGUscy5yZXNwZWN0X3dvcmRfYm91bmRhcmllcyxpKSx0b3RhbDowLGl0ZW1zOltdLHdlaWdodHM6aSxnZXRBdHRyRm46cy5uZXN0aW5nP0k6QX19c2VhcmNoKGUsdCl7dmFyIGkscyxuPXRoaXNcbnM9dGhpcy5wcmVwYXJlU2VhcmNoKGUsdCksdD1zLm9wdGlvbnMsZT1zLnF1ZXJ5XG5jb25zdCBvPXQuc2NvcmV8fG4uX2dldFNjb3JlRnVuY3Rpb24ocylcbmUubGVuZ3RoP0wobi5pdGVtcywoZSxuKT0+e2k9byhlKSwoITE9PT10LmZpbHRlcnx8aT4wKSYmcy5pdGVtcy5wdXNoKHtzY29yZTppLGlkOm59KX0pOkwobi5pdGVtcywoZSx0KT0+e3MuaXRlbXMucHVzaCh7c2NvcmU6MSxpZDp0fSl9KVxuY29uc3Qgcj1uLl9nZXRTb3J0RnVuY3Rpb24ocylcbnJldHVybiByJiZzLml0ZW1zLnNvcnQocikscy50b3RhbD1zLml0ZW1zLmxlbmd0aCxcIm51bWJlclwiPT10eXBlb2YgdC5saW1pdCYmKHMuaXRlbXM9cy5pdGVtcy5zbGljZSgwLHQubGltaXQpKSxzfX1jb25zdCBQPWU9Pm51bGw9PWU/bnVsbDpOKGUpLE49ZT0+XCJib29sZWFuXCI9PXR5cGVvZiBlP2U/XCIxXCI6XCIwXCI6ZStcIlwiLEQ9ZT0+KGUrXCJcIikucmVwbGFjZSgvJi9nLFwiJmFtcDtcIikucmVwbGFjZSgvPC9nLFwiJmx0O1wiKS5yZXBsYWNlKC8+L2csXCImZ3Q7XCIpLnJlcGxhY2UoL1wiL2csXCImcXVvdDtcIiksVj0oZSx0KT0+e3ZhciBpXG5yZXR1cm4gZnVuY3Rpb24ocyxuKXt2YXIgbz10aGlzXG5pJiYoby5sb2FkaW5nPU1hdGgubWF4KG8ubG9hZGluZy0xLDApLGNsZWFyVGltZW91dChpKSksaT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aT1udWxsLG8ubG9hZGVkU2VhcmNoZXNbc109ITAsZS5jYWxsKG8scyxuKX0sdCl9fSxqPShlLHQsaSk9Pnt2YXIgcyxuPWUudHJpZ2dlcixvPXt9XG5mb3IocyBvZihlLnRyaWdnZXI9ZnVuY3Rpb24oKXt2YXIgaT1hcmd1bWVudHNbMF1cbmlmKC0xPT09dC5pbmRleE9mKGkpKXJldHVybiBuLmFwcGx5KGUsYXJndW1lbnRzKVxub1tpXT1hcmd1bWVudHN9LGkuYXBwbHkoZSxbXSksZS50cmlnZ2VyPW4sdCkpcyBpbiBvJiZuLmFwcGx5KGUsb1tzXSl9LCQ9KGUsdD0hMSk9PntlJiYoZS5wcmV2ZW50RGVmYXVsdCgpLHQmJmUuc3RvcFByb3BhZ2F0aW9uKCkpfSxxPShlLHQsaSxzKT0+e2UuYWRkRXZlbnRMaXN0ZW5lcih0LGkscyl9LFI9KGUsdCk9PiEhdCYmKCEhdFtlXSYmMT09PSh0LmFsdEtleT8xOjApKyh0LmN0cmxLZXk/MTowKSsodC5zaGlmdEtleT8xOjApKyh0Lm1ldGFLZXk/MTowKSksSD0oZSx0KT0+e2NvbnN0IGk9ZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKVxucmV0dXJuIGl8fChlLnNldEF0dHJpYnV0ZShcImlkXCIsdCksdCl9LE09ZT0+ZS5yZXBsYWNlKC9bXFxcXFwiJ10vZyxcIlxcXFwkJlwiKSx6PShlLHQpPT57dCYmZS5hcHBlbmQodCl9LEI9KGUsdCk9PntpZihBcnJheS5pc0FycmF5KGUpKWUuZm9yRWFjaCh0KVxuZWxzZSBmb3IodmFyIGkgaW4gZSllLmhhc093blByb3BlcnR5KGkpJiZ0KGVbaV0saSl9LEs9ZT0+e2lmKGUuanF1ZXJ5KXJldHVybiBlWzBdXG5pZihlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpcmV0dXJuIGVcbmlmKEcoZSkpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKVxucmV0dXJuIHQuaW5uZXJIVE1MPWUudHJpbSgpLHQuY29udGVudC5maXJzdENoaWxkfXJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUpfSxHPWU9Plwic3RyaW5nXCI9PXR5cGVvZiBlJiZlLmluZGV4T2YoXCI8XCIpPi0xLFU9KGUsdCk9Pnt2YXIgaT1kb2N1bWVudC5jcmVhdGVFdmVudChcIkhUTUxFdmVudHNcIilcbmkuaW5pdEV2ZW50KHQsITAsITEpLGUuZGlzcGF0Y2hFdmVudChpKX0sVz0oZSx0KT0+e09iamVjdC5hc3NpZ24oZS5zdHlsZSx0KX0sUT0oZSwuLi50KT0+e3ZhciBpPVgodCk7KGU9WShlKSkubWFwKGU9PntpLm1hcCh0PT57ZS5jbGFzc0xpc3QuYWRkKHQpfSl9KX0sSj0oZSwuLi50KT0+e3ZhciBpPVgodCk7KGU9WShlKSkubWFwKGU9PntpLm1hcCh0PT57ZS5jbGFzc0xpc3QucmVtb3ZlKHQpfSl9KX0sWD1lPT57dmFyIHQ9W11cbnJldHVybiBCKGUsZT0+e1wic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT1lLnRyaW0oKS5zcGxpdCgvW1xcdFxcblxcZlxcclxcc10vKSksQXJyYXkuaXNBcnJheShlKSYmKHQ9dC5jb25jYXQoZSkpfSksdC5maWx0ZXIoQm9vbGVhbil9LFk9ZT0+KEFycmF5LmlzQXJyYXkoZSl8fChlPVtlXSksZSksWj0oZSx0LGkpPT57aWYoIWl8fGkuY29udGFpbnMoZSkpZm9yKDtlJiZlLm1hdGNoZXM7KXtpZihlLm1hdGNoZXModCkpcmV0dXJuIGVcbmU9ZS5wYXJlbnROb2RlfX0sZWU9KGUsdD0wKT0+dD4wP2VbZS5sZW5ndGgtMV06ZVswXSx0ZT0oZSx0KT0+e2lmKCFlKXJldHVybi0xXG50PXR8fGUubm9kZU5hbWVcbmZvcih2YXIgaT0wO2U9ZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nOyllLm1hdGNoZXModCkmJmkrK1xucmV0dXJuIGl9LGllPShlLHQpPT57Qih0LCh0LGkpPT57bnVsbD09dD9lLnJlbW92ZUF0dHJpYnV0ZShpKTplLnNldEF0dHJpYnV0ZShpLFwiXCIrdCl9KX0sc2U9KGUsdCk9PntlLnBhcmVudE5vZGUmJmUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQodCxlKX0sbmU9KGUsdCk9PntpZihudWxsPT09dClyZXR1cm5cbmlmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXtpZighdC5sZW5ndGgpcmV0dXJuXG50PW5ldyBSZWdFeHAodCxcImlcIil9Y29uc3QgaT1lPT4zPT09ZS5ub2RlVHlwZT8oZT0+e3ZhciBpPWUuZGF0YS5tYXRjaCh0KVxuaWYoaSYmZS5kYXRhLmxlbmd0aD4wKXt2YXIgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxucy5jbGFzc05hbWU9XCJoaWdobGlnaHRcIlxudmFyIG49ZS5zcGxpdFRleHQoaS5pbmRleClcbm4uc3BsaXRUZXh0KGlbMF0ubGVuZ3RoKVxudmFyIG89bi5jbG9uZU5vZGUoITApXG5yZXR1cm4gcy5hcHBlbmRDaGlsZChvKSxzZShuLHMpLDF9cmV0dXJuIDB9KShlKTooKGU9PnsxIT09ZS5ub2RlVHlwZXx8IWUuY2hpbGROb2Rlc3x8LyhzY3JpcHR8c3R5bGUpL2kudGVzdChlLnRhZ05hbWUpfHxcImhpZ2hsaWdodFwiPT09ZS5jbGFzc05hbWUmJlwiU1BBTlwiPT09ZS50YWdOYW1lfHxBcnJheS5mcm9tKGUuY2hpbGROb2RlcykuZm9yRWFjaChlPT57aShlKX0pfSkoZSksMClcbmkoZSl9LG9lPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBuYXZpZ2F0b3ImJi9NYWMvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk/XCJtZXRhS2V5XCI6XCJjdHJsS2V5XCJcbnZhciByZT17b3B0aW9uczpbXSxvcHRncm91cHM6W10scGx1Z2luczpbXSxkZWxpbWl0ZXI6XCIsXCIsc3BsaXRPbjpudWxsLHBlcnNpc3Q6ITAsZGlhY3JpdGljczohMCxjcmVhdGU6bnVsbCxjcmVhdGVPbkJsdXI6ITEsY3JlYXRlRmlsdGVyOm51bGwsY2xlYXJBZnRlclNlbGVjdDohMSxoaWdobGlnaHQ6ITAsb3Blbk9uRm9jdXM6ITAsc2hvdWxkT3BlbjpudWxsLG1heE9wdGlvbnM6NTAsbWF4SXRlbXM6bnVsbCxoaWRlU2VsZWN0ZWQ6bnVsbCxkdXBsaWNhdGVzOiExLGFkZFByZWNlZGVuY2U6ITEsc2VsZWN0T25UYWI6ITEscHJlbG9hZDpudWxsLGFsbG93RW1wdHlPcHRpb246ITEscmVmcmVzaFRocm90dGxlOjMwMCxsb2FkVGhyb3R0bGU6MzAwLGxvYWRpbmdDbGFzczpcImxvYWRpbmdcIixkYXRhQXR0cjpudWxsLG9wdGdyb3VwRmllbGQ6XCJvcHRncm91cFwiLHZhbHVlRmllbGQ6XCJ2YWx1ZVwiLGxhYmVsRmllbGQ6XCJ0ZXh0XCIsZGlzYWJsZWRGaWVsZDpcImRpc2FibGVkXCIsb3B0Z3JvdXBMYWJlbEZpZWxkOlwibGFiZWxcIixvcHRncm91cFZhbHVlRmllbGQ6XCJ2YWx1ZVwiLGxvY2tPcHRncm91cE9yZGVyOiExLHNvcnRGaWVsZDpcIiRvcmRlclwiLHNlYXJjaEZpZWxkOltcInRleHRcIl0sc2VhcmNoQ29uanVuY3Rpb246XCJhbmRcIixtb2RlOm51bGwsd3JhcHBlckNsYXNzOlwidHMtd3JhcHBlclwiLGNvbnRyb2xDbGFzczpcInRzLWNvbnRyb2xcIixkcm9wZG93bkNsYXNzOlwidHMtZHJvcGRvd25cIixkcm9wZG93bkNvbnRlbnRDbGFzczpcInRzLWRyb3Bkb3duLWNvbnRlbnRcIixpdGVtQ2xhc3M6XCJpdGVtXCIsb3B0aW9uQ2xhc3M6XCJvcHRpb25cIixkcm9wZG93blBhcmVudDpudWxsLGNvbnRyb2xJbnB1dDonPGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgc2l6ZT1cIjFcIiAvPicsY29weUNsYXNzZXNUb0Ryb3Bkb3duOiExLHBsYWNlaG9sZGVyOm51bGwsaGlkZVBsYWNlaG9sZGVyOm51bGwsc2hvdWxkTG9hZDpmdW5jdGlvbihlKXtyZXR1cm4gZS5sZW5ndGg+MH0scmVuZGVyOnt9fVxuZnVuY3Rpb24gbGUoZSx0KXt2YXIgaT1PYmplY3QuYXNzaWduKHt9LHJlLHQpLHM9aS5kYXRhQXR0cixuPWkubGFiZWxGaWVsZCxvPWkudmFsdWVGaWVsZCxyPWkuZGlzYWJsZWRGaWVsZCxsPWkub3B0Z3JvdXBGaWVsZCxhPWkub3B0Z3JvdXBMYWJlbEZpZWxkLGM9aS5vcHRncm91cFZhbHVlRmllbGQsZD1lLnRhZ05hbWUudG9Mb3dlckNhc2UoKSx1PWUuZ2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIil8fGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1wbGFjZWhvbGRlclwiKVxuaWYoIXUmJiFpLmFsbG93RW1wdHlPcHRpb24pe2xldCB0PWUucXVlcnlTZWxlY3Rvcignb3B0aW9uW3ZhbHVlPVwiXCJdJylcbnQmJih1PXQudGV4dENvbnRlbnQpfXZhciBwPXtwbGFjZWhvbGRlcjp1LG9wdGlvbnM6W10sb3B0Z3JvdXBzOltdLGl0ZW1zOltdLG1heEl0ZW1zOm51bGx9XG5yZXR1cm5cInNlbGVjdFwiPT09ZD8oKCk9Pnt2YXIgdCxkPXAub3B0aW9ucyx1PXt9LGg9MVxubGV0IGc9MFxudmFyIGY9ZT0+e3ZhciB0PU9iamVjdC5hc3NpZ24oe30sZS5kYXRhc2V0KSxpPXMmJnRbc11cbnJldHVyblwic3RyaW5nXCI9PXR5cGVvZiBpJiZpLmxlbmd0aCYmKHQ9T2JqZWN0LmFzc2lnbih0LEpTT04ucGFyc2UoaSkpKSx0fSxtPShlLHQpPT57dmFyIHM9UChlLnZhbHVlKVxuaWYobnVsbCE9cyYmKHN8fGkuYWxsb3dFbXB0eU9wdGlvbikpe2lmKHUuaGFzT3duUHJvcGVydHkocykpe2lmKHQpe3ZhciBhPXVbc11bbF1cbmE/QXJyYXkuaXNBcnJheShhKT9hLnB1c2godCk6dVtzXVtsXT1bYSx0XTp1W3NdW2xdPXR9fWVsc2V7dmFyIGM9ZihlKVxuY1tuXT1jW25dfHxlLnRleHRDb250ZW50LGNbb109Y1tvXXx8cyxjW3JdPWNbcl18fGUuZGlzYWJsZWQsY1tsXT1jW2xdfHx0LGMuJG9wdGlvbj1lLGMuJG9yZGVyPWMuJG9yZGVyfHwrK2csdVtzXT1jLGQucHVzaChjKX1lLnNlbGVjdGVkJiZwLml0ZW1zLnB1c2gocyl9fVxucC5tYXhJdGVtcz1lLmhhc0F0dHJpYnV0ZShcIm11bHRpcGxlXCIpP251bGw6MSxCKGUuY2hpbGRyZW4sZT0+e3ZhciBpLHMsblxuXCJvcHRncm91cFwiPT09KHQ9ZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkpPygobj1mKGk9ZSkpW2FdPW5bYV18fGkuZ2V0QXR0cmlidXRlKFwibGFiZWxcIil8fFwiXCIsbltjXT1uW2NdfHxoKyssbltyXT1uW3JdfHxpLmRpc2FibGVkLG4uJG9yZGVyPW4uJG9yZGVyfHwrK2cscC5vcHRncm91cHMucHVzaChuKSxzPW5bY10sQihpLmNoaWxkcmVuLGU9PnttKGUscyl9KSk6XCJvcHRpb25cIj09PXQmJm0oZSl9KX0pKCk6KCgpPT57Y29uc3QgdD1lLmdldEF0dHJpYnV0ZShzKVxuaWYodClwLm9wdGlvbnM9SlNPTi5wYXJzZSh0KSxCKHAub3B0aW9ucyxlPT57cC5pdGVtcy5wdXNoKGVbb10pfSlcbmVsc2V7dmFyIHIsbCxhPW51bGwhPShyPW51bGw9PWV8fG51bGw9PShsPWUudmFsdWUpP3ZvaWQgMDpsLnRyaW0oKSk/cjpcIlwiXG5pZighaS5hbGxvd0VtcHR5T3B0aW9uJiYhYS5sZW5ndGgpcmV0dXJuXG5jb25zdCB0PWEuc3BsaXQoaS5kZWxpbWl0ZXIpXG5CKHQsZT0+e2NvbnN0IHQ9e31cbnRbbl09ZSx0W29dPWUscC5vcHRpb25zLnB1c2godCl9KSxwLml0ZW1zPXR9fSkoKSxPYmplY3QuYXNzaWduKHt9LHJlLHAsdCl9dmFyIGFlPTBcbmNsYXNzIGNlIGV4dGVuZHMoZnVuY3Rpb24oZSl7cmV0dXJuIGUucGx1Z2lucz17fSxjbGFzcyBleHRlbmRzIGV7Y29uc3RydWN0b3IoLi4uZSl7c3VwZXIoLi4uZSksdGhpcy5wbHVnaW5zPXtuYW1lczpbXSxzZXR0aW5nczp7fSxyZXF1ZXN0ZWQ6e30sbG9hZGVkOnt9fX1zdGF0aWMgZGVmaW5lKHQsaSl7ZS5wbHVnaW5zW3RdPXtuYW1lOnQsZm46aX19aW5pdGlhbGl6ZVBsdWdpbnMoZSl7dmFyIHQsaVxuY29uc3Qgcz10aGlzLG49W11cbmlmKEFycmF5LmlzQXJyYXkoZSkpZS5mb3JFYWNoKGU9PntcInN0cmluZ1wiPT10eXBlb2YgZT9uLnB1c2goZSk6KHMucGx1Z2lucy5zZXR0aW5nc1tlLm5hbWVdPWUub3B0aW9ucyxuLnB1c2goZS5uYW1lKSl9KVxuZWxzZSBpZihlKWZvcih0IGluIGUpZS5oYXNPd25Qcm9wZXJ0eSh0KSYmKHMucGx1Z2lucy5zZXR0aW5nc1t0XT1lW3RdLG4ucHVzaCh0KSlcbmZvcig7aT1uLnNoaWZ0KCk7KXMucmVxdWlyZShpKX1sb2FkUGx1Z2luKHQpe3ZhciBpPXRoaXMscz1pLnBsdWdpbnMsbj1lLnBsdWdpbnNbdF1cbmlmKCFlLnBsdWdpbnMuaGFzT3duUHJvcGVydHkodCkpdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gZmluZCBcIicrdCsnXCIgcGx1Z2luJylcbnMucmVxdWVzdGVkW3RdPSEwLHMubG9hZGVkW3RdPW4uZm4uYXBwbHkoaSxbaS5wbHVnaW5zLnNldHRpbmdzW3RdfHx7fV0pLHMubmFtZXMucHVzaCh0KX1yZXF1aXJlKGUpe3ZhciB0PXRoaXMsaT10LnBsdWdpbnNcbmlmKCF0LnBsdWdpbnMubG9hZGVkLmhhc093blByb3BlcnR5KGUpKXtpZihpLnJlcXVlc3RlZFtlXSl0aHJvdyBuZXcgRXJyb3IoJ1BsdWdpbiBoYXMgY2lyY3VsYXIgZGVwZW5kZW5jeSAoXCInK2UrJ1wiKScpXG50LmxvYWRQbHVnaW4oZSl9cmV0dXJuIGkubG9hZGVkW2VdfX19KHQpKXtjb25zdHJ1Y3RvcihlLHQpe3ZhciBpXG5zdXBlcigpLHRoaXMub3JkZXI9MCx0aGlzLmlzT3Blbj0hMSx0aGlzLmlzRGlzYWJsZWQ9ITEsdGhpcy5pc1JlYWRPbmx5PSExLHRoaXMuaXNJbnZhbGlkPSExLHRoaXMuaXNWYWxpZD0hMCx0aGlzLmlzTG9ja2VkPSExLHRoaXMuaXNGb2N1c2VkPSExLHRoaXMuaXNJbnB1dEhpZGRlbj0hMSx0aGlzLmlzU2V0dXA9ITEsdGhpcy5pc0Ryb3Bkb3duQ29udGVudFN0YWxlPSEwLHRoaXMuaWdub3JlRm9jdXM9ITEsdGhpcy5pZ25vcmVIb3Zlcj0hMSx0aGlzLmhhc09wdGlvbnM9ITEsdGhpcy5sYXN0VmFsdWU9XCJcIix0aGlzLmNhcmV0UG9zPTAsdGhpcy5sb2FkaW5nPTAsdGhpcy5sb2FkZWRTZWFyY2hlcz17fSx0aGlzLmFjdGl2ZU9wdGlvbj1udWxsLHRoaXMuYWN0aXZlSXRlbXM9W10sdGhpcy5vcHRncm91cHM9e30sdGhpcy5vcHRpb25zPXt9LHRoaXMudXNlck9wdGlvbnM9e30sdGhpcy5pdGVtcz1bXSx0aGlzLnJlZnJlc2hUaW1lb3V0PW51bGwsYWUrK1xudmFyIHM9SyhlKVxuaWYocy50b21zZWxlY3QpdGhyb3cgbmV3IEVycm9yKFwiVG9tIFNlbGVjdCBhbHJlYWR5IGluaXRpYWxpemVkIG9uIHRoaXMgZWxlbWVudFwiKVxucy50b21zZWxlY3Q9dGhpcyxpPSh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSYmd2luZG93LmdldENvbXB1dGVkU3R5bGUocyxudWxsKSkuZ2V0UHJvcGVydHlWYWx1ZShcImRpcmVjdGlvblwiKVxuY29uc3Qgbj1sZShzLHQpXG50aGlzLnNldHRpbmdzPW4sdGhpcy5pbnB1dD1zLHRoaXMudGFiSW5kZXg9cy50YWJJbmRleHx8MCx0aGlzLmlzX3NlbGVjdF90YWc9XCJzZWxlY3RcIj09PXMudGFnTmFtZS50b0xvd2VyQ2FzZSgpLHRoaXMucnRsPS9ydGwvaS50ZXN0KGkpLHRoaXMuaW5wdXRJZD1IKHMsXCJ0b21zZWxlY3QtXCIrYWUpLHRoaXMuaXNSZXF1aXJlZD1zLnJlcXVpcmVkLHRoaXMuc2lmdGVyPW5ldyBUKHRoaXMub3B0aW9ucyx7ZGlhY3JpdGljczpuLmRpYWNyaXRpY3N9KSxuLm1vZGU9bi5tb2RlfHwoMT09PW4ubWF4SXRlbXM/XCJzaW5nbGVcIjpcIm11bHRpXCIpLFwiYm9vbGVhblwiIT10eXBlb2Ygbi5oaWRlU2VsZWN0ZWQmJihuLmhpZGVTZWxlY3RlZD1cIm11bHRpXCI9PT1uLm1vZGUpLFwiYm9vbGVhblwiIT10eXBlb2Ygbi5oaWRlUGxhY2Vob2xkZXImJihuLmhpZGVQbGFjZWhvbGRlcj1cIm11bHRpXCIhPT1uLm1vZGUpXG52YXIgbz1uLmNyZWF0ZUZpbHRlclxuXCJmdW5jdGlvblwiIT10eXBlb2YgbyYmKFwic3RyaW5nXCI9PXR5cGVvZiBvJiYobz1uZXcgUmVnRXhwKG8pKSxvIGluc3RhbmNlb2YgUmVnRXhwP24uY3JlYXRlRmlsdGVyPWU9Pm8udGVzdChlKTpuLmNyZWF0ZUZpbHRlcj1lPT50aGlzLnNldHRpbmdzLmR1cGxpY2F0ZXN8fCF0aGlzLm9wdGlvbnNbZV0pLHRoaXMuaW5pdGlhbGl6ZVBsdWdpbnMobi5wbHVnaW5zKSx0aGlzLnNldHVwQ2FsbGJhY2tzKCksdGhpcy5zZXR1cFRlbXBsYXRlcygpXG5jb25zdCByPUsoXCI8ZGl2PlwiKSxsPUsoXCI8ZGl2PlwiKSxhPXRoaXMuX3JlbmRlcihcImRyb3Bkb3duXCIpLGM9SygnPGRpdiByb2xlPVwibGlzdGJveFwiIHRhYmluZGV4PVwiLTFcIj4nKSxkPXRoaXMuaW5wdXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIsdT1uLm1vZGVcbnZhciBwXG5pZihRKHIsbi53cmFwcGVyQ2xhc3MsZCx1KSxRKGwsbi5jb250cm9sQ2xhc3MpLHoocixsKSxRKGEsbi5kcm9wZG93bkNsYXNzLHUpLG4uY29weUNsYXNzZXNUb0Ryb3Bkb3duJiZRKGEsZCksUShjLG4uZHJvcGRvd25Db250ZW50Q2xhc3MpLHooYSxjKSxLKG4uZHJvcGRvd25QYXJlbnR8fHIpLmFwcGVuZENoaWxkKGEpLEcobi5jb250cm9sSW5wdXQpKXtwPUsobi5jb250cm9sSW5wdXQpXG5CKFtcImF1dG9jb3JyZWN0XCIsXCJhdXRvY2FwaXRhbGl6ZVwiLFwiYXV0b2NvbXBsZXRlXCIsXCJzcGVsbGNoZWNrXCIsXCJhcmlhLWxhYmVsXCJdLGU9PntzLmdldEF0dHJpYnV0ZShlKSYmaWUocCx7W2VdOnMuZ2V0QXR0cmlidXRlKGUpfSl9KSxwLnRhYkluZGV4PS0xLGwuYXBwZW5kQ2hpbGQocCksdGhpcy5mb2N1c19ub2RlPXB9ZWxzZSBuLmNvbnRyb2xJbnB1dD8ocD1LKG4uY29udHJvbElucHV0KSx0aGlzLmZvY3VzX25vZGU9cCk6KHA9SyhcIjxpbnB1dC8+XCIpLHRoaXMuZm9jdXNfbm9kZT1sKVxudGhpcy53cmFwcGVyPXIsdGhpcy5kcm9wZG93bj1hLHRoaXMuZHJvcGRvd25fY29udGVudD1jLHRoaXMuY29udHJvbD1sLHRoaXMuY29udHJvbF9pbnB1dD1wLHRoaXMuc2V0dXAoKX1zZXR1cCgpe2NvbnN0IGU9dGhpcyx0PWUuc2V0dGluZ3MsaT1lLmNvbnRyb2xfaW5wdXQscz1lLmRyb3Bkb3duLG49ZS5kcm9wZG93bl9jb250ZW50LG89ZS53cmFwcGVyLGw9ZS5jb250cm9sLGE9ZS5pbnB1dCxjPWUuZm9jdXNfbm9kZSxkPXtwYXNzaXZlOiEwfSx1PWUuaW5wdXRJZCtcIi10cy1kcm9wZG93blwiXG5pZShuLHtpZDp1fSksaWUoYyx7cm9sZTpcImNvbWJvYm94XCIsXCJhcmlhLWhhc3BvcHVwXCI6XCJsaXN0Ym94XCIsXCJhcmlhLWV4cGFuZGVkXCI6XCJmYWxzZVwiLFwiYXJpYS1jb250cm9sc1wiOnV9KVxuY29uc3QgcD1IKGMsZS5pbnB1dElkK1wiLXRzLWNvbnRyb2xcIiksaD1cImxhYmVsW2Zvcj0nXCIrKGU9PmUucmVwbGFjZSgvWydcIlxcXFxdL2csXCJcXFxcJCZcIikpKGUuaW5wdXRJZCkrXCInXVwiLGc9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihoKSxmPWUuZm9jdXMuYmluZChlKVxuaWYoZyl7cShnLFwiY2xpY2tcIixmKSxpZShnLHtmb3I6cH0pXG5jb25zdCB0PUgoZyxlLmlucHV0SWQrXCItdHMtbGFiZWxcIilcbmllKGMse1wiYXJpYS1sYWJlbGxlZGJ5XCI6dH0pLGllKG4se1wiYXJpYS1sYWJlbGxlZGJ5XCI6dH0pfWlmKG8uc3R5bGUud2lkdGg9YS5zdHlsZS53aWR0aCxvLnN0eWxlLm1pbldpZHRoPWEuc3R5bGUubWluV2lkdGgsby5zdHlsZS5tYXhXaWR0aD1hLnN0eWxlLm1heFdpZHRoLGUucGx1Z2lucy5uYW1lcy5sZW5ndGgpe2NvbnN0IHQ9XCJwbHVnaW4tXCIrZS5wbHVnaW5zLm5hbWVzLmpvaW4oXCIgcGx1Z2luLVwiKVxuUShbbyxzXSx0KX0obnVsbD09PXQubWF4SXRlbXN8fHQubWF4SXRlbXM+MSkmJmUuaXNfc2VsZWN0X3RhZyYmaWUoYSx7bXVsdGlwbGU6XCJtdWx0aXBsZVwifSksdC5wbGFjZWhvbGRlciYmaWUoaSx7cGxhY2Vob2xkZXI6dC5wbGFjZWhvbGRlcn0pLCF0LnNwbGl0T24mJnQuZGVsaW1pdGVyJiYodC5zcGxpdE9uPW5ldyBSZWdFeHAoXCJcXFxccypcIityKHQuZGVsaW1pdGVyKStcIitcXFxccypcIikpLHQubG9hZCYmdC5sb2FkVGhyb3R0bGUmJih0LmxvYWQ9Vih0LmxvYWQsdC5sb2FkVGhyb3R0bGUpKSxxKHMsXCJtb3VzZW1vdmVcIiwoKT0+e2UuaWdub3JlSG92ZXI9ITF9KSxxKHMsXCJtb3VzZWVudGVyXCIsdD0+e3ZhciBpPVoodC50YXJnZXQsXCJbZGF0YS1zZWxlY3RhYmxlXVwiLHMpXG5pJiZlLm9uT3B0aW9uSG92ZXIodCxpKX0se2NhcHR1cmU6ITB9KSxxKHMsXCJjbGlja1wiLHQ9Pntjb25zdCBpPVoodC50YXJnZXQsXCJbZGF0YS1zZWxlY3RhYmxlXVwiKVxuaSYmKGUub25PcHRpb25TZWxlY3QodCxpKSwkKHQsITApKX0pLHEobCxcImNsaWNrXCIsdD0+e3ZhciBzPVoodC50YXJnZXQsXCJbZGF0YS10cy1pdGVtXVwiLGwpXG5zJiZlLm9uSXRlbVNlbGVjdCh0LHMpPyQodCwhMCk6XCJcIj09aS52YWx1ZSYmKGUub25DbGljaygpLCQodCwhMCkpfSkscShjLFwia2V5ZG93blwiLHQ9PmUub25LZXlEb3duKHQpKSxxKGksXCJrZXlwcmVzc1wiLHQ9PmUub25LZXlQcmVzcyh0KSkscShpLFwiaW5wdXRcIix0PT5lLm9uSW5wdXQodCkpLHEoYyxcImJsdXJcIix0PT5lLm9uQmx1cih0KSkscShjLFwiZm9jdXNcIix0PT5lLm9uRm9jdXModCkpLHEoaSxcInBhc3RlXCIsdD0+ZS5vblBhc3RlKHQpKVxuY29uc3QgbT10PT57Y29uc3Qgbj10LmNvbXBvc2VkUGF0aCgpWzBdXG5pZighby5jb250YWlucyhuKSYmIXMuY29udGFpbnMobikpcmV0dXJuIGUuaXNGb2N1c2VkJiZlLmJsdXIoKSx2b2lkIGUuaW5wdXRTdGF0ZSgpXG5uPT1pJiZlLmlzT3Blbj90LnN0b3BQcm9wYWdhdGlvbigpOiQodCwhMCl9LHY9KCk9PntlLmlzT3BlbiYmZS5wb3NpdGlvbkRyb3Bkb3duKCl9LE89KCk9PntlLmlzVmFsaWQmJihlLmlzVmFsaWQ9ITEsZS5pc0ludmFsaWQ9ITAsZS5yZWZyZXNoU3RhdGUoKSl9XG5xKGEsXCJpbnZhbGlkXCIsTykscShkb2N1bWVudCxcIm1vdXNlZG93blwiLG0pLHEod2luZG93LFwic2Nyb2xsXCIsdixkKSxxKHdpbmRvdyxcInJlc2l6ZVwiLHYsZCksdGhpcy5fZGVzdHJveT0oKT0+e2EucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImludmFsaWRcIixPKSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsbSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIix2KSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHYpLGcmJmcucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZil9LHRoaXMucmV2ZXJ0U2V0dGluZ3M9e2lubmVySFRNTDphLmlubmVySFRNTCx0YWJJbmRleDphLnRhYkluZGV4fSxhLnRhYkluZGV4PS0xLGEuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIixlLndyYXBwZXIpLGUuc3luYyghMSksdC5pdGVtcz1bXSxkZWxldGUgdC5vcHRncm91cHMsZGVsZXRlIHQub3B0aW9ucyxlLnJlZnJlc2hJdGVtcygpLGUuY2xvc2UoITEpLGUuaW5wdXRTdGF0ZSgpLGUuaXNTZXR1cD0hMCxlLm9uKFwiY2hhbmdlXCIsdGhpcy5vbkNoYW5nZSksUShhLFwidG9tc2VsZWN0ZWRcIixcInRzLWhpZGRlbi1hY2Nlc3NpYmxlXCIpLGUudHJpZ2dlcihcImluaXRpYWxpemVcIiksITA9PT10LnByZWxvYWQmJmUucHJlbG9hZCgpfXNldHVwT3B0aW9ucyhlPVtdLHQ9W10pe3RoaXMuYWRkT3B0aW9ucyhlKSxCKHQsZT0+e3RoaXMucmVnaXN0ZXJPcHRpb25Hcm91cChlKX0pfXNldHVwVGVtcGxhdGVzKCl7dmFyIGU9dGhpcyx0PWUuc2V0dGluZ3MubGFiZWxGaWVsZCxpPWUuc2V0dGluZ3Mub3B0Z3JvdXBMYWJlbEZpZWxkLHM9e29wdGdyb3VwOmU9PntsZXQgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5yZXR1cm4gdC5jbGFzc05hbWU9XCJvcHRncm91cFwiLHQuYXBwZW5kQ2hpbGQoZS5vcHRpb25zKSx0fSxvcHRncm91cF9oZWFkZXI6KGUsdCk9Pic8ZGl2IGNsYXNzPVwib3B0Z3JvdXAtaGVhZGVyXCI+Jyt0KGVbaV0pK1wiPC9kaXY+XCIsb3B0aW9uOihlLGkpPT5cIjxkaXY+XCIraShlW3RdKStcIjwvZGl2PlwiLGl0ZW06KGUsaSk9PlwiPGRpdj5cIitpKGVbdF0pK1wiPC9kaXY+XCIsb3B0aW9uX2NyZWF0ZTooZSx0KT0+JzxkaXYgY2xhc3M9XCJjcmVhdGVcIj5BZGQgPHN0cm9uZz4nK3QoZS5pbnB1dCkrXCI8L3N0cm9uZz4maGVsbGlwOzwvZGl2PlwiLG5vX3Jlc3VsdHM6KCk9Pic8ZGl2IGNsYXNzPVwibm8tcmVzdWx0c1wiPk5vIHJlc3VsdHMgZm91bmQ8L2Rpdj4nLGxvYWRpbmc6KCk9Pic8ZGl2IGNsYXNzPVwic3Bpbm5lclwiPjwvZGl2Picsbm90X2xvYWRpbmc6KCk9Pnt9LGRyb3Bkb3duOigpPT5cIjxkaXY+PC9kaXY+XCJ9XG5lLnNldHRpbmdzLnJlbmRlcj1PYmplY3QuYXNzaWduKHt9LHMsZS5zZXR0aW5ncy5yZW5kZXIpfXNldHVwQ2FsbGJhY2tzKCl7dmFyIGUsdCxpPXtpbml0aWFsaXplOlwib25Jbml0aWFsaXplXCIsY2hhbmdlOlwib25DaGFuZ2VcIixpdGVtX2FkZDpcIm9uSXRlbUFkZFwiLGl0ZW1fcmVtb3ZlOlwib25JdGVtUmVtb3ZlXCIsaXRlbV9zZWxlY3Q6XCJvbkl0ZW1TZWxlY3RcIixjbGVhcjpcIm9uQ2xlYXJcIixvcHRpb25fYWRkOlwib25PcHRpb25BZGRcIixvcHRpb25fcmVtb3ZlOlwib25PcHRpb25SZW1vdmVcIixvcHRpb25fY2xlYXI6XCJvbk9wdGlvbkNsZWFyXCIsb3B0Z3JvdXBfYWRkOlwib25PcHRpb25Hcm91cEFkZFwiLG9wdGdyb3VwX3JlbW92ZTpcIm9uT3B0aW9uR3JvdXBSZW1vdmVcIixvcHRncm91cF9jbGVhcjpcIm9uT3B0aW9uR3JvdXBDbGVhclwiLGRyb3Bkb3duX29wZW46XCJvbkRyb3Bkb3duT3BlblwiLGRyb3Bkb3duX2Nsb3NlOlwib25Ecm9wZG93bkNsb3NlXCIsdHlwZTpcIm9uVHlwZVwiLGxvYWQ6XCJvbkxvYWRcIixmb2N1czpcIm9uRm9jdXNcIixibHVyOlwib25CbHVyXCJ9XG5mb3IoZSBpbiBpKSh0PXRoaXMuc2V0dGluZ3NbaVtlXV0pJiZ0aGlzLm9uKGUsdCl9c3luYyhlPSEwKXtjb25zdCB0PXRoaXMsaT1lP2xlKHQuaW5wdXQse2RlbGltaXRlcjp0LnNldHRpbmdzLmRlbGltaXRlcixhbGxvd0VtcHR5T3B0aW9uOnQuc2V0dGluZ3MuYWxsb3dFbXB0eU9wdGlvbn0pOnQuc2V0dGluZ3NcbnQuc2V0dXBPcHRpb25zKGkub3B0aW9ucyxpLm9wdGdyb3VwcyksdC5zZXRWYWx1ZShpLml0ZW1zfHxbXSwhMCksdC5pbnB1dC5kaXNhYmxlZD90LmRpc2FibGUoKTp0LmlucHV0LnJlYWRPbmx5P3Quc2V0UmVhZE9ubHkoITApOnQuZW5hYmxlKCksdC5sYXN0UXVlcnk9bnVsbH1vbkNsaWNrKCl7dmFyIGU9dGhpc1xuaWYoZS5hY3RpdmVJdGVtcy5sZW5ndGg+MClyZXR1cm4gZS5jbGVhckFjdGl2ZUl0ZW1zKCksdm9pZCBlLmZvY3VzKClcbmUuaXNGb2N1c2VkJiZlLmlzT3Blbj9lLmJsdXIoKTplLmZvY3VzKCl9b25Nb3VzZURvd24oKXt9b25DaGFuZ2UoKXtVKHRoaXMuaW5wdXQsXCJpbnB1dFwiKSxVKHRoaXMuaW5wdXQsXCJjaGFuZ2VcIil9b25QYXN0ZShlKXt2YXIgdD10aGlzXG50LmlzSW5wdXRIaWRkZW58fHQuaXNMb2NrZWQ/JChlKTp0LnNldHRpbmdzLnNwbGl0T24mJnNldFRpbWVvdXQoKCk9Pnt2YXIgZT10LmlucHV0VmFsdWUoKVxuaWYoZS5tYXRjaCh0LnNldHRpbmdzLnNwbGl0T24pKXt2YXIgaT1lLnRyaW0oKS5zcGxpdCh0LnNldHRpbmdzLnNwbGl0T24pXG5CKGksZT0+e1AoZSkmJih0aGlzLm9wdGlvbnNbZV0/dC5hZGRJdGVtKGUpOnQuY3JlYXRlSXRlbShlKSl9KX19LDApfW9uS2V5UHJlc3MoZSl7dmFyIHQ9dGhpc1xuaWYoIXQuaXNMb2NrZWQpe3ZhciBpPVN0cmluZy5mcm9tQ2hhckNvZGUoZS5rZXlDb2RlfHxlLndoaWNoKVxucmV0dXJuIHQuc2V0dGluZ3MuY3JlYXRlJiZcIm11bHRpXCI9PT10LnNldHRpbmdzLm1vZGUmJmk9PT10LnNldHRpbmdzLmRlbGltaXRlcj8odC5jcmVhdGVJdGVtKCksdm9pZCAkKGUpKTp2b2lkIDB9JChlKX1vbktleURvd24oZSl7dmFyIHQ9dGhpc1xuaWYodC5pZ25vcmVIb3Zlcj0hMCx0LmlzTG9ja2VkKTkhPT1lLmtleUNvZGUmJiQoZSlcbmVsc2V7c3dpdGNoKGUua2V5Q29kZSl7Y2FzZSA2NTppZihSKG9lLGUpJiZcIlwiPT10LmNvbnRyb2xfaW5wdXQudmFsdWUpcmV0dXJuICQoZSksdm9pZCB0LnNlbGVjdEFsbCgpXG5icmVha1xuY2FzZSAyNzpyZXR1cm4gdC5pc09wZW4mJigkKGUsITApLHQuY2xvc2UoKSksdm9pZCB0LmNsZWFyQWN0aXZlSXRlbXMoKVxuY2FzZSA0MDppZighdC5pc09wZW4mJnQuaGFzT3B0aW9ucyl0Lm9wZW4oKVxuZWxzZSBpZih0LmFjdGl2ZU9wdGlvbil7bGV0IGU9dC5nZXRBZGphY2VudCh0LmFjdGl2ZU9wdGlvbiwxKVxuZSYmdC5zZXRBY3RpdmVPcHRpb24oZSl9cmV0dXJuIHZvaWQgJChlKVxuY2FzZSAzODppZih0LmFjdGl2ZU9wdGlvbil7bGV0IGU9dC5nZXRBZGphY2VudCh0LmFjdGl2ZU9wdGlvbiwtMSlcbmUmJnQuc2V0QWN0aXZlT3B0aW9uKGUpfXJldHVybiB2b2lkICQoZSlcbmNhc2UgMTM6cmV0dXJuIHZvaWQodC5jYW5TZWxlY3QodC5hY3RpdmVPcHRpb24pPyh0Lm9uT3B0aW9uU2VsZWN0KGUsdC5hY3RpdmVPcHRpb24pLCQoZSkpOih0LnNldHRpbmdzLmNyZWF0ZSYmdC5jcmVhdGVJdGVtKCl8fGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ9PXQuY29udHJvbF9pbnB1dCYmdC5pc09wZW4pJiYkKGUpKVxuY2FzZSAzNzpyZXR1cm4gdm9pZCB0LmFkdmFuY2VTZWxlY3Rpb24oLTEsZSlcbmNhc2UgMzk6cmV0dXJuIHZvaWQgdC5hZHZhbmNlU2VsZWN0aW9uKDEsZSlcbmNhc2UgOTpyZXR1cm4gdm9pZCh0LnNldHRpbmdzLnNlbGVjdE9uVGFiJiYodC5jYW5TZWxlY3QodC5hY3RpdmVPcHRpb24pPyh0Lm9uT3B0aW9uU2VsZWN0KGUsdC5hY3RpdmVPcHRpb24pLCQoZSkpOnQuc2V0dGluZ3MuY3JlYXRlJiZ0LmNyZWF0ZUl0ZW0oKSYmJChlKSkpXG5jYXNlIDg6Y2FzZSA0NjpyZXR1cm4gdm9pZCB0LmRlbGV0ZVNlbGVjdGlvbihlKX10LmlzSW5wdXRIaWRkZW4mJiFSKG9lLGUpJiYkKGUpfX1vbklucHV0KGUpe2lmKHRoaXMuaXNMb2NrZWQpcmV0dXJuXG5jb25zdCB0PXRoaXMuaW5wdXRWYWx1ZSgpXG50aGlzLmxhc3RWYWx1ZSE9PXQmJih0aGlzLmxhc3RWYWx1ZT10LFwiXCIhPXQ/KHRoaXMucmVmcmVzaFRpbWVvdXQmJndpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5yZWZyZXNoVGltZW91dCksdGhpcy5yZWZyZXNoVGltZW91dD0oKGUsdCk9PnQ+MD93aW5kb3cuc2V0VGltZW91dChlLHQpOihlLmNhbGwobnVsbCksbnVsbCkpKCgpPT57dGhpcy5yZWZyZXNoVGltZW91dD1udWxsLHRoaXMuX29uSW5wdXQoKX0sdGhpcy5zZXR0aW5ncy5yZWZyZXNoVGhyb3R0bGUpKTp0aGlzLl9vbklucHV0KCkpfV9vbklucHV0KCl7Y29uc3QgZT10aGlzLmxhc3RWYWx1ZVxudGhpcy5zZXR0aW5ncy5zaG91bGRMb2FkLmNhbGwodGhpcyxlKSYmdGhpcy5sb2FkKGUpLHRoaXMucmVmcmVzaE9wdGlvbnMoKSx0aGlzLnRyaWdnZXIoXCJ0eXBlXCIsZSl9b25PcHRpb25Ib3ZlcihlLHQpe3RoaXMuaWdub3JlSG92ZXJ8fHRoaXMuc2V0QWN0aXZlT3B0aW9uKHQsITEpfW9uRm9jdXMoZSl7dmFyIHQ9dGhpcyxpPXQuaXNGb2N1c2VkXG5pZih0LmlzRGlzYWJsZWR8fHQuaXNSZWFkT25seSlyZXR1cm4gdC5ibHVyKCksdm9pZCAkKGUpXG50Lmlnbm9yZUZvY3VzfHwodC5pc0ZvY3VzZWQ9ITAsXCJmb2N1c1wiPT09dC5zZXR0aW5ncy5wcmVsb2FkJiZ0LnByZWxvYWQoKSxpfHx0LnRyaWdnZXIoXCJmb2N1c1wiKSx0LmFjdGl2ZUl0ZW1zLmxlbmd0aHx8KHQuaW5wdXRTdGF0ZSgpLHQucmVmcmVzaE9wdGlvbnMoISF0LnNldHRpbmdzLm9wZW5PbkZvY3VzKSksdC5yZWZyZXNoU3RhdGUoKSl9b25CbHVyKGUpe2lmKCExIT09ZG9jdW1lbnQuaGFzRm9jdXMoKSl7dmFyIHQ9dGhpc1xuaWYodC5pc0ZvY3VzZWQpe3QuaXNGb2N1c2VkPSExLHQuaWdub3JlRm9jdXM9ITFcbnZhciBpPSgpPT57dC5jbG9zZSgpLHQuc2V0QWN0aXZlSXRlbSgpLHQuc2V0Q2FyZXQodC5pdGVtcy5sZW5ndGgpLHQudHJpZ2dlcihcImJsdXJcIil9XG50LnNldHRpbmdzLmNyZWF0ZSYmdC5zZXR0aW5ncy5jcmVhdGVPbkJsdXI/dC5jcmVhdGVJdGVtKG51bGwsaSk6aSgpfX19b25PcHRpb25TZWxlY3QoZSx0KXt2YXIgaSxzPXRoaXNcbnQucGFyZW50RWxlbWVudCYmdC5wYXJlbnRFbGVtZW50Lm1hdGNoZXMoXCJbZGF0YS1kaXNhYmxlZF1cIil8fCh0LmNsYXNzTGlzdC5jb250YWlucyhcImNyZWF0ZVwiKT9zLmNyZWF0ZUl0ZW0obnVsbCwoKT0+e3Muc2V0dGluZ3MuY2xvc2VBZnRlclNlbGVjdD9zLmNsb3NlKCk6cy5zZXR0aW5ncy5jbGVhckFmdGVyU2VsZWN0JiZzLnNldFRleHRib3hWYWx1ZSgpfSk6dm9pZCAwIT09KGk9dC5kYXRhc2V0LnZhbHVlKSYmKHMuaXNEcm9wZG93bkNvbnRlbnRTdGFsZT1zLnNldHRpbmdzLmhpZGVTZWxlY3RlZCxzLmFkZEl0ZW0oaSkscy5zZXR0aW5ncy5jbG9zZUFmdGVyU2VsZWN0P3MuY2xvc2UoKTpzLnNldHRpbmdzLmNsZWFyQWZ0ZXJTZWxlY3QmJnMuc2V0VGV4dGJveFZhbHVlKCksIXMuc2V0dGluZ3MuaGlkZVNlbGVjdGVkJiZlLnR5cGUmJi9jbGljay8udGVzdChlLnR5cGUpJiZzLnNldEFjdGl2ZU9wdGlvbih0KSkpfWNhblNlbGVjdChlKXtyZXR1cm4hISh0aGlzLmlzT3BlbiYmZSYmdGhpcy5kcm9wZG93bl9jb250ZW50LmNvbnRhaW5zKGUpKX1vbkl0ZW1TZWxlY3QoZSx0KXt2YXIgaT10aGlzXG5yZXR1cm4haS5pc0xvY2tlZCYmXCJtdWx0aVwiPT09aS5zZXR0aW5ncy5tb2RlJiYoJChlKSxpLnNldEFjdGl2ZUl0ZW0odCxlKSwhMCl9Y2FuTG9hZChlKXtyZXR1cm4hIXRoaXMuc2V0dGluZ3MubG9hZCYmIXRoaXMubG9hZGVkU2VhcmNoZXMuaGFzT3duUHJvcGVydHkoZSl9bG9hZChlKXtjb25zdCB0PXRoaXNcbmlmKCF0LmNhbkxvYWQoZSkpcmV0dXJuXG5RKHQud3JhcHBlcix0LnNldHRpbmdzLmxvYWRpbmdDbGFzcyksdC5sb2FkaW5nKytcbmNvbnN0IGk9dC5sb2FkQ2FsbGJhY2suYmluZCh0KVxudC5zZXR0aW5ncy5sb2FkLmNhbGwodCxlLGkpfWxvYWRDYWxsYmFjayhlLHQpe2NvbnN0IGk9dGhpc1xuaS5sb2FkaW5nPU1hdGgubWF4KGkubG9hZGluZy0xLDApLGkuaXNEcm9wZG93bkNvbnRlbnRTdGFsZT0hMCxpLmNsZWFyQWN0aXZlT3B0aW9uKCksaS5zZXR1cE9wdGlvbnMoZSx0KSxpLnJlZnJlc2hPcHRpb25zKGkuaXNGb2N1c2VkJiYhaS5pc0lucHV0SGlkZGVuKSxpLmxvYWRpbmd8fEooaS53cmFwcGVyLGkuc2V0dGluZ3MubG9hZGluZ0NsYXNzKSxpLnRyaWdnZXIoXCJsb2FkXCIsZSx0KX1wcmVsb2FkKCl7dmFyIGU9dGhpcy53cmFwcGVyLmNsYXNzTGlzdFxuZS5jb250YWlucyhcInByZWxvYWRlZFwiKXx8KGUuYWRkKFwicHJlbG9hZGVkXCIpLHRoaXMubG9hZChcIlwiKSl9c2V0VGV4dGJveFZhbHVlKGU9XCJcIil7dmFyIHQ9dGhpcy5jb250cm9sX2lucHV0XG50LnZhbHVlIT09ZSYmKHQudmFsdWU9ZSxVKHQsXCJ1cGRhdGVcIiksdGhpcy5sYXN0VmFsdWU9ZSl9Z2V0VmFsdWUoKXtyZXR1cm4gdGhpcy5pc19zZWxlY3RfdGFnJiZ0aGlzLmlucHV0Lmhhc0F0dHJpYnV0ZShcIm11bHRpcGxlXCIpP3RoaXMuaXRlbXM6dGhpcy5pdGVtcy5qb2luKHRoaXMuc2V0dGluZ3MuZGVsaW1pdGVyKX1zZXRWYWx1ZShlLHQpe2oodGhpcyx0P1tdOltcImNoYW5nZVwiXSwoKT0+e3RoaXMuY2xlYXIodCksdGhpcy5hZGRJdGVtcyhlLHQpfSl9c2V0TWF4SXRlbXMoZSl7MD09PWUmJihlPW51bGwpLHRoaXMuc2V0dGluZ3MubWF4SXRlbXM9ZSx0aGlzLnJlZnJlc2hTdGF0ZSgpfXNldEFjdGl2ZUl0ZW0oZSx0KXt2YXIgaSxzLG4sbyxyLGwsYT10aGlzXG5pZihcInNpbmdsZVwiIT09YS5zZXR0aW5ncy5tb2RlKXtpZighZSlyZXR1cm4gYS5jbGVhckFjdGl2ZUl0ZW1zKCksdm9pZChhLmlzRm9jdXNlZCYmYS5pbnB1dFN0YXRlKCkpXG5pZihcImNsaWNrXCI9PT0oaT10JiZ0LnR5cGUudG9Mb3dlckNhc2UoKSkmJlIoXCJzaGlmdEtleVwiLHQpJiZhLmFjdGl2ZUl0ZW1zLmxlbmd0aCl7Zm9yKGw9YS5nZXRMYXN0QWN0aXZlKCksKG49QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChhLmNvbnRyb2wuY2hpbGRyZW4sbCkpPihvPUFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYS5jb250cm9sLmNoaWxkcmVuLGUpKSYmKHI9bixuPW8sbz1yKSxzPW47czw9bztzKyspZT1hLmNvbnRyb2wuY2hpbGRyZW5bc10sLTE9PT1hLmFjdGl2ZUl0ZW1zLmluZGV4T2YoZSkmJmEuc2V0QWN0aXZlSXRlbUNsYXNzKGUpXG4kKHQpfWVsc2VcImNsaWNrXCI9PT1pJiZSKG9lLHQpfHxcImtleWRvd25cIj09PWkmJlIoXCJzaGlmdEtleVwiLHQpP2UuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpP2EucmVtb3ZlQWN0aXZlSXRlbShlKTphLnNldEFjdGl2ZUl0ZW1DbGFzcyhlKTooYS5jbGVhckFjdGl2ZUl0ZW1zKCksYS5zZXRBY3RpdmVJdGVtQ2xhc3MoZSkpXG5hLmlucHV0U3RhdGUoKSxhLmlzRm9jdXNlZHx8YS5mb2N1cygpfX1zZXRBY3RpdmVJdGVtQ2xhc3MoZSl7Y29uc3QgdD10aGlzLGk9dC5jb250cm9sLnF1ZXJ5U2VsZWN0b3IoXCIubGFzdC1hY3RpdmVcIilcbmkmJkooaSxcImxhc3QtYWN0aXZlXCIpLFEoZSxcImFjdGl2ZSBsYXN0LWFjdGl2ZVwiKSx0LnRyaWdnZXIoXCJpdGVtX3NlbGVjdFwiLGUpLC0xPT10LmFjdGl2ZUl0ZW1zLmluZGV4T2YoZSkmJnQuYWN0aXZlSXRlbXMucHVzaChlKX1yZW1vdmVBY3RpdmVJdGVtKGUpe3ZhciB0PXRoaXMuYWN0aXZlSXRlbXMuaW5kZXhPZihlKVxudGhpcy5hY3RpdmVJdGVtcy5zcGxpY2UodCwxKSxKKGUsXCJhY3RpdmVcIil9Y2xlYXJBY3RpdmVJdGVtcygpe0oodGhpcy5hY3RpdmVJdGVtcyxcImFjdGl2ZVwiKSx0aGlzLmFjdGl2ZUl0ZW1zPVtdfXNldEFjdGl2ZU9wdGlvbihlLHQ9ITApe2UhPT10aGlzLmFjdGl2ZU9wdGlvbiYmKHRoaXMuY2xlYXJBY3RpdmVPcHRpb24oKSxlJiYodGhpcy5hY3RpdmVPcHRpb249ZSxpZSh0aGlzLmZvY3VzX25vZGUse1wiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCI6ZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKX0pLGllKGUse1wiYXJpYS1zZWxlY3RlZFwiOlwidHJ1ZVwifSksUShlLFwiYWN0aXZlXCIpLHQmJnRoaXMuc2Nyb2xsVG9PcHRpb24oZSkpKX1zY3JvbGxUb09wdGlvbihlLHQpe2lmKCFlKXJldHVyblxuY29uc3QgaT10aGlzLmRyb3Bkb3duX2NvbnRlbnQscz1pLmNsaWVudEhlaWdodCxuPWkuc2Nyb2xsVG9wfHwwLG89ZS5vZmZzZXRIZWlnaHQscj1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcC1pLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCtuXG5yK28+cytuP3RoaXMuc2Nyb2xsKHItcytvLHQpOnI8biYmdGhpcy5zY3JvbGwocix0KX1zY3JvbGwoZSx0KXtjb25zdCBpPXRoaXMuZHJvcGRvd25fY29udGVudFxudCYmKGkuc3R5bGUuc2Nyb2xsQmVoYXZpb3I9dCksaS5zY3JvbGxUb3A9ZSxpLnN0eWxlLnNjcm9sbEJlaGF2aW9yPVwiXCJ9Y2xlYXJBY3RpdmVPcHRpb24oKXt0aGlzLmFjdGl2ZU9wdGlvbiYmKEoodGhpcy5hY3RpdmVPcHRpb24sXCJhY3RpdmVcIiksaWUodGhpcy5hY3RpdmVPcHRpb24se1wiYXJpYS1zZWxlY3RlZFwiOm51bGx9KSksdGhpcy5hY3RpdmVPcHRpb249bnVsbCxpZSh0aGlzLmZvY3VzX25vZGUse1wiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCI6bnVsbH0pfXNlbGVjdEFsbCgpe2NvbnN0IGU9dGhpc1xuaWYoXCJzaW5nbGVcIj09PWUuc2V0dGluZ3MubW9kZSlyZXR1cm5cbmNvbnN0IHQ9ZS5jb250cm9sQ2hpbGRyZW4oKVxudC5sZW5ndGgmJihlLmlucHV0U3RhdGUoKSxlLmNsb3NlKCksZS5hY3RpdmVJdGVtcz10LEIodCx0PT57ZS5zZXRBY3RpdmVJdGVtQ2xhc3ModCl9KSl9aW5wdXRTdGF0ZSgpe3ZhciBlPXRoaXNcbmUuY29udHJvbC5jb250YWlucyhlLmNvbnRyb2xfaW5wdXQpJiYoaWUoZS5jb250cm9sX2lucHV0LHtwbGFjZWhvbGRlcjplLnNldHRpbmdzLnBsYWNlaG9sZGVyfSksZS5hY3RpdmVJdGVtcy5sZW5ndGg+MHx8IWUuaXNGb2N1c2VkJiZlLnNldHRpbmdzLmhpZGVQbGFjZWhvbGRlciYmZS5pdGVtcy5sZW5ndGg+MD8oZS5zZXRUZXh0Ym94VmFsdWUoKSxlLmlzSW5wdXRIaWRkZW49ITApOihlLnNldHRpbmdzLmhpZGVQbGFjZWhvbGRlciYmZS5pdGVtcy5sZW5ndGg+MCYmaWUoZS5jb250cm9sX2lucHV0LHtwbGFjZWhvbGRlcjpcIlwifSksZS5pc0lucHV0SGlkZGVuPSExKSxlLndyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZShcImlucHV0LWhpZGRlblwiLGUuaXNJbnB1dEhpZGRlbikpfWlucHV0VmFsdWUoKXtyZXR1cm4gdGhpcy5jb250cm9sX2lucHV0LnZhbHVlLnRyaW0oKX1mb2N1cygpe3ZhciBlPXRoaXNcbmlmKGUuaXNEaXNhYmxlZHx8ZS5pc1JlYWRPbmx5KXJldHVyblxuZS5pZ25vcmVGb2N1cz0hMFxuY29uc3QgdD10aGlzLmNvbnRyb2xfaW5wdXQub2Zmc2V0V2lkdGg/dGhpcy5jb250cm9sX2lucHV0OnRoaXMuZm9jdXNfbm9kZVxudC5mb2N1cygpLHNldFRpbWVvdXQoKCk9PntlLmlnbm9yZUZvY3VzPSExXG50LmdldFJvb3ROb2RlKCkuYWN0aXZlRWxlbWVudD09PXQmJnRoaXMub25Gb2N1cygpfSwwKX1ibHVyKCl7dGhpcy5mb2N1c19ub2RlLmJsdXIoKSx0aGlzLm9uQmx1cigpfWdldFNjb3JlRnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuc2lmdGVyLmdldFNjb3JlRnVuY3Rpb24oZSx0aGlzLmdldFNlYXJjaE9wdGlvbnMoKSl9Z2V0U2VhcmNoT3B0aW9ucygpe3ZhciBlPXRoaXMuc2V0dGluZ3MsdD1lLnNvcnRGaWVsZFxucmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUuc29ydEZpZWxkJiYodD1be2ZpZWxkOmUuc29ydEZpZWxkfV0pLHtmaWVsZHM6ZS5zZWFyY2hGaWVsZCxjb25qdW5jdGlvbjplLnNlYXJjaENvbmp1bmN0aW9uLHNvcnQ6dCxuZXN0aW5nOmUubmVzdGluZ319c2VhcmNoKGUpe3ZhciB0LGkscz10aGlzLG49dGhpcy5nZXRTZWFyY2hPcHRpb25zKClcbmlmKHMuc2V0dGluZ3Muc2NvcmUmJlwiZnVuY3Rpb25cIiE9dHlwZW9mKGk9cy5zZXR0aW5ncy5zY29yZS5jYWxsKHMsZSkpKXRocm93IG5ldyBFcnJvcignVG9tIFNlbGVjdCBcInNjb3JlXCIgc2V0dGluZyBtdXN0IGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgZnVuY3Rpb24nKVxucmV0dXJuIHMuaXNEcm9wZG93bkNvbnRlbnRTdGFsZXx8ZSE9PXMubGFzdFF1ZXJ5PyhzLmxhc3RRdWVyeT1lLC8oLilcXDF7MTUsfS8udGVzdChlKSYmKGU9XCJcIiksdD1zLnNpZnRlci5zZWFyY2goZSxPYmplY3QuYXNzaWduKG4se3Njb3JlOml9KSkscy5jdXJyZW50UmVzdWx0cz10KTp0PU9iamVjdC5hc3NpZ24oe30scy5jdXJyZW50UmVzdWx0cykscy5zZXR0aW5ncy5oaWRlU2VsZWN0ZWQmJih0Lml0ZW1zPXQuaXRlbXMuZmlsdGVyKGU9PntsZXQgdD1QKGUuaWQpXG5yZXR1cm4hKG51bGwhPT10JiYtMSE9PXMuaXRlbXMuaW5kZXhPZih0KSl9KSksdH1yZWZyZXNoT3B0aW9ucyhlPSEwKXt2YXIgdCxpLHMsbixvLHIsbCxhLGMsZFxuY29uc3QgdT17fSxwPVtdXG52YXIgaD10aGlzLGc9aC5pbnB1dFZhbHVlKClcbmNvbnN0IGY9Zz09PWgubGFzdFF1ZXJ5fHxcIlwiPT1nJiZudWxsPT1oLmxhc3RRdWVyeVxudmFyIG09aC5zZWFyY2goZyksdj1udWxsLE89aC5zZXR0aW5ncy5zaG91bGRPcGVufHwhMSxiPWguZHJvcGRvd25fY29udGVudFxuZiYmKHY9aC5hY3RpdmVPcHRpb24pJiYoYz12LmNsb3Nlc3QoXCJbZGF0YS1ncm91cF1cIikpLG49bS5pdGVtcy5sZW5ndGgsXCJudW1iZXJcIj09dHlwZW9mIGguc2V0dGluZ3MubWF4T3B0aW9ucyYmKG49TWF0aC5taW4obixoLnNldHRpbmdzLm1heE9wdGlvbnMpKSxuPjAmJihPPSEwKVxuY29uc3QgeT0oZSx0KT0+e2xldCBpPXVbZV1cbmlmKHZvaWQgMCE9PWkpe2xldCBlPXBbaV1cbmlmKHZvaWQgMCE9PWUpcmV0dXJuW2ksZS5mcmFnbWVudF19bGV0IHM9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG5yZXR1cm4gaT1wLmxlbmd0aCxwLnB1c2goe2ZyYWdtZW50OnMsb3JkZXI6dCxvcHRncm91cDplfSksW2ksc119XG5mb3IodD0wO3Q8bjt0Kyspe2xldCBlPW0uaXRlbXNbdF1cbmlmKCFlKWNvbnRpbnVlXG5sZXQgbj1lLmlkLGw9aC5vcHRpb25zW25dXG5pZih2b2lkIDA9PT1sKWNvbnRpbnVlXG5sZXQgYT1OKG4pLGQ9aC5nZXRPcHRpb24oYSwhMClcbmZvcihoLnNldHRpbmdzLmhpZGVTZWxlY3RlZHx8ZC5jbGFzc0xpc3QudG9nZ2xlKFwic2VsZWN0ZWRcIixoLml0ZW1zLmluY2x1ZGVzKGEpKSxvPWxbaC5zZXR0aW5ncy5vcHRncm91cEZpZWxkXXx8XCJcIixpPTAscz0ocj1BcnJheS5pc0FycmF5KG8pP286W29dKSYmci5sZW5ndGg7aTxzO2krKyl7bz1yW2ldXG5sZXQgZT1sLiRvcmRlcix0PWgub3B0Z3JvdXBzW29dXG52YXIgd1xuaWYodm9pZCAwPT09dCYmXCJmdW5jdGlvblwiPT10eXBlb2YgaC5zZXR0aW5ncy5vcHRpb25Hcm91cFJlZ2lzdGVyKSh3PWguc2V0dGluZ3Mub3B0aW9uR3JvdXBSZWdpc3Rlci5hcHBseShoLFtvXSkpJiZoLnJlZ2lzdGVyT3B0aW9uR3JvdXAodylcbnQ9aC5vcHRncm91cHNbb10sdm9pZCAwPT09dD9vPVwiXCI6ZT10LiRvcmRlclxuY29uc3RbcyxhXT15KG8sZSlcbmk+MCYmKGQ9ZC5jbG9uZU5vZGUoITApLGllKGQse2lkOmwuJGlkK1wiLWNsb25lLVwiK2ksXCJhcmlhLXNlbGVjdGVkXCI6bnVsbH0pLGQuY2xhc3NMaXN0LmFkZChcInRzLWNsb25lZFwiKSxKKGQsXCJhY3RpdmVcIiksaC5hY3RpdmVPcHRpb24mJmguYWN0aXZlT3B0aW9uLmRhdGFzZXQudmFsdWU9PW4mJmMmJmMuZGF0YXNldC5ncm91cD09PW8udG9TdHJpbmcoKSYmKHY9ZCkpLGEuYXBwZW5kQ2hpbGQoZCksXCJcIiE9byYmKHVbb109cyl9fXZhciBTXG5oLnNldHRpbmdzLmxvY2tPcHRncm91cE9yZGVyJiZwLnNvcnQoKGUsdCk9PmUub3JkZXItdC5vcmRlciksbD1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksQihwLGU9PntsZXQgdD1lLmZyYWdtZW50LGk9ZS5vcHRncm91cFxuaWYoIXR8fCF0LmNoaWxkcmVuLmxlbmd0aClyZXR1cm5cbmxldCBzPWgub3B0Z3JvdXBzW2ldXG5pZih2b2lkIDAhPT1zKXtsZXQgZT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksaT1oLnJlbmRlcihcIm9wdGdyb3VwX2hlYWRlclwiLHMpXG56KGUsaSkseihlLHQpXG5sZXQgbj1oLnJlbmRlcihcIm9wdGdyb3VwXCIse2dyb3VwOnMsb3B0aW9uczplfSlcbnoobCxuKX1lbHNlIHoobCx0KX0pLGIuaW5uZXJIVE1MPVwiXCIseihiLGwpLGguaXNEcm9wZG93bkNvbnRlbnRTdGFsZT0hMSxoLnNldHRpbmdzLmhpZ2hsaWdodCYmKFM9Yi5xdWVyeVNlbGVjdG9yQWxsKFwic3Bhbi5oaWdobGlnaHRcIiksQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChTLGZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZVxudC5yZXBsYWNlQ2hpbGQoZS5maXJzdENoaWxkLGUpLHQubm9ybWFsaXplKCl9KSxtLnF1ZXJ5Lmxlbmd0aCYmbS50b2tlbnMubGVuZ3RoJiZCKG0udG9rZW5zLGU9PntuZShiLGUucmVnZXgpfSkpXG52YXIgXz1lPT57bGV0IHQ9aC5yZW5kZXIoZSx7aW5wdXQ6Z30pXG5yZXR1cm4gdCYmKE89ITAsYi5pbnNlcnRCZWZvcmUodCxiLmZpcnN0Q2hpbGQpKSx0fVxuaWYoaC5sb2FkaW5nP18oXCJsb2FkaW5nXCIpOmguc2V0dGluZ3Muc2hvdWxkTG9hZC5jYWxsKGgsZyk/MD09PW0uaXRlbXMubGVuZ3RoJiZfKFwibm9fcmVzdWx0c1wiKTpfKFwibm90X2xvYWRpbmdcIiksKGE9aC5jYW5DcmVhdGUoZykpJiYoZD1fKFwib3B0aW9uX2NyZWF0ZVwiKSksaC5oYXNPcHRpb25zPW0uaXRlbXMubGVuZ3RoPjB8fGEsTyl7aWYobS5pdGVtcy5sZW5ndGg+MCl7aWYodnx8XCJzaW5nbGVcIiE9PWguc2V0dGluZ3MubW9kZXx8bnVsbD09aC5pdGVtc1swXXx8KHY9aC5nZXRPcHRpb24oaC5pdGVtc1swXSkpLCFiLmNvbnRhaW5zKHYpKXtsZXQgZT0wXG5kJiYhaC5zZXR0aW5ncy5hZGRQcmVjZWRlbmNlJiYoZT0xKSx2PWguc2VsZWN0YWJsZSgpW2VdfX1lbHNlIGQmJih2PWQpXG5lJiYhaC5pc09wZW4mJihoLm9wZW4oKSxoLnNjcm9sbFRvT3B0aW9uKHYsXCJhdXRvXCIpKSxoLnNldEFjdGl2ZU9wdGlvbih2KX1lbHNlIGguY2xlYXJBY3RpdmVPcHRpb24oKSxlJiZoLmlzT3BlbiYmaC5jbG9zZSghMSl9c2VsZWN0YWJsZSgpe3JldHVybiB0aGlzLmRyb3Bkb3duX2NvbnRlbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXNlbGVjdGFibGVdXCIpfWFkZE9wdGlvbihlLHQ9ITEpe2NvbnN0IGk9dGhpc1xuaWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gaS5hZGRPcHRpb25zKGUsdCksITFcbmNvbnN0IHM9UChlW2kuc2V0dGluZ3MudmFsdWVGaWVsZF0pXG5yZXR1cm4gbnVsbD09PXN8fGkub3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShzKT8oaS51cGRhdGVPcHRpb24oZVtpLnNldHRpbmdzLnZhbHVlRmllbGRdLGUpLCExKTooZS4kb3JkZXI9ZS4kb3JkZXJ8fCsraS5vcmRlcixlLiRpZD1pLmlucHV0SWQrXCItb3B0LVwiK2UuJG9yZGVyLGkub3B0aW9uc1tzXT1lLGkuaXNEcm9wZG93bkNvbnRlbnRTdGFsZT0hMCx0JiYoaS51c2VyT3B0aW9uc1tzXT10LGkudHJpZ2dlcihcIm9wdGlvbl9hZGRcIixzLGUpKSxzKX1hZGRPcHRpb25zKGUsdD0hMSl7QihlLGU9Pnt0aGlzLmFkZE9wdGlvbihlLHQpfSl9cmVnaXN0ZXJPcHRpb24oZSl7cmV0dXJuIHRoaXMuYWRkT3B0aW9uKGUpfXJlZ2lzdGVyT3B0aW9uR3JvdXAoZSl7dmFyIHQ9UChlW3RoaXMuc2V0dGluZ3Mub3B0Z3JvdXBWYWx1ZUZpZWxkXSlcbnJldHVybiBudWxsIT09dCYmKGUuJG9yZGVyPWUuJG9yZGVyfHwrK3RoaXMub3JkZXIsdGhpcy5vcHRncm91cHNbdF09ZSx0KX1hZGRPcHRpb25Hcm91cChlLHQpe3ZhciBpXG50W3RoaXMuc2V0dGluZ3Mub3B0Z3JvdXBWYWx1ZUZpZWxkXT1lLChpPXRoaXMucmVnaXN0ZXJPcHRpb25Hcm91cCh0KSkmJnRoaXMudHJpZ2dlcihcIm9wdGdyb3VwX2FkZFwiLGksdCl9cmVtb3ZlT3B0aW9uR3JvdXAoZSl7dGhpcy5vcHRncm91cHMuaGFzT3duUHJvcGVydHkoZSkmJihkZWxldGUgdGhpcy5vcHRncm91cHNbZV0sdGhpcy5jbGVhckNhY2hlKCksdGhpcy50cmlnZ2VyKFwib3B0Z3JvdXBfcmVtb3ZlXCIsZSkpfWNsZWFyT3B0aW9uR3JvdXBzKCl7dGhpcy5vcHRncm91cHM9e30sdGhpcy5jbGVhckNhY2hlKCksdGhpcy50cmlnZ2VyKFwib3B0Z3JvdXBfY2xlYXJcIil9dXBkYXRlT3B0aW9uKGUsdCl7Y29uc3QgaT10aGlzXG52YXIgcyxuXG5jb25zdCBvPVAoZSkscj1QKHRbaS5zZXR0aW5ncy52YWx1ZUZpZWxkXSlcbmlmKG51bGw9PT1vKXJldHVyblxuY29uc3QgbD1pLm9wdGlvbnNbb11cbmlmKG51bGw9PWwpcmV0dXJuXG5pZihcInN0cmluZ1wiIT10eXBlb2Ygcil0aHJvdyBuZXcgRXJyb3IoXCJWYWx1ZSBtdXN0IGJlIHNldCBpbiBvcHRpb24gZGF0YVwiKVxuY29uc3QgYT1pLmdldE9wdGlvbihvKSxjPWkuZ2V0SXRlbShvKVxuaWYodC4kb3JkZXI9dC4kb3JkZXJ8fGwuJG9yZGVyLGRlbGV0ZSBpLm9wdGlvbnNbb10saS51bmNhY2hlVmFsdWUociksaS5vcHRpb25zW3JdPXQsYSl7aWYoaS5kcm9wZG93bl9jb250ZW50LmNvbnRhaW5zKGEpKXtjb25zdCBlPWkuX3JlbmRlcihcIm9wdGlvblwiLHQpXG5zZShhLGUpLGkuYWN0aXZlT3B0aW9uPT09YSYmaS5zZXRBY3RpdmVPcHRpb24oZSl9YS5yZW1vdmUoKX1jJiYoLTEhPT0obj1pLml0ZW1zLmluZGV4T2YobykpJiZpLml0ZW1zLnNwbGljZShuLDEscikscz1pLl9yZW5kZXIoXCJpdGVtXCIsdCksYy5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikmJlEocyxcImFjdGl2ZVwiKSxzZShjLHMpKSxpLmlzRHJvcGRvd25Db250ZW50U3RhbGU9ITB9cmVtb3ZlT3B0aW9uKGUsdCl7Y29uc3QgaT10aGlzXG5lPU4oZSksaS51bmNhY2hlVmFsdWUoZSksZGVsZXRlIGkudXNlck9wdGlvbnNbZV0sZGVsZXRlIGkub3B0aW9uc1tlXSxpLmlzRHJvcGRvd25Db250ZW50U3RhbGU9ITAsaS50cmlnZ2VyKFwib3B0aW9uX3JlbW92ZVwiLGUpLGkucmVtb3ZlSXRlbShlLHQpfWNsZWFyT3B0aW9ucyhlKXtjb25zdCB0PShlfHx0aGlzLmNsZWFyRmlsdGVyKS5iaW5kKHRoaXMpXG50aGlzLmxvYWRlZFNlYXJjaGVzPXt9LHRoaXMudXNlck9wdGlvbnM9e30sdGhpcy5jbGVhckNhY2hlKClcbmNvbnN0IGk9e31cbkIodGhpcy5vcHRpb25zLChlLHMpPT57dChlLHMpJiYoaVtzXT1lKX0pLHRoaXMub3B0aW9ucz10aGlzLnNpZnRlci5pdGVtcz1pLHRoaXMuaXNEcm9wZG93bkNvbnRlbnRTdGFsZT0hMCx0aGlzLnRyaWdnZXIoXCJvcHRpb25fY2xlYXJcIil9Y2xlYXJGaWx0ZXIoZSx0KXtyZXR1cm4gdGhpcy5pdGVtcy5pbmRleE9mKHQpPj0wfWdldE9wdGlvbihlLHQ9ITEpe2NvbnN0IGk9UChlKVxuaWYobnVsbD09PWkpcmV0dXJuIG51bGxcbmNvbnN0IHM9dGhpcy5vcHRpb25zW2ldXG5pZihudWxsIT1zKXtpZihzLiRkaXYpcmV0dXJuIHMuJGRpdlxuaWYodClyZXR1cm4gdGhpcy5fcmVuZGVyKFwib3B0aW9uXCIscyl9cmV0dXJuIG51bGx9Z2V0QWRqYWNlbnQoZSx0LGk9XCJvcHRpb25cIil7dmFyIHNcbmlmKCFlKXJldHVybiBudWxsXG5zPVwiaXRlbVwiPT1pP3RoaXMuY29udHJvbENoaWxkcmVuKCk6dGhpcy5kcm9wZG93bl9jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1zZWxlY3RhYmxlXVwiKVxuZm9yKGxldCBpPTA7aTxzLmxlbmd0aDtpKyspaWYoc1tpXT09ZSlyZXR1cm4gdD4wP3NbaSsxXTpzW2ktMV1cbnJldHVybiBudWxsfWdldEl0ZW0oZSl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUpcmV0dXJuIGVcbnZhciB0PVAoZSlcbnJldHVybiBudWxsIT09dD90aGlzLmNvbnRyb2wucXVlcnlTZWxlY3RvcihgW2RhdGEtdmFsdWU9XCIke00odCl9XCJdYCk6bnVsbH1hZGRJdGVtcyhlLHQpe3ZhciBpPXRoaXMscz1BcnJheS5pc0FycmF5KGUpP2U6W2VdXG5jb25zdCBuPShzPXMuZmlsdGVyKGU9Pi0xPT09aS5pdGVtcy5pbmRleE9mKGUpKSlbcy5sZW5ndGgtMV1cbnMuZm9yRWFjaChlPT57aS5pc1BlbmRpbmc9ZSE9PW4saS5hZGRJdGVtKGUsdCl9KX1hZGRJdGVtKGUsdCl7aih0aGlzLHQ/W106W1wiY2hhbmdlXCIsXCJkcm9wZG93bl9jbG9zZVwiXSwoKT0+e3ZhciBpLHNcbmNvbnN0IG49dGhpcyxvPW4uc2V0dGluZ3MubW9kZSxyPVAoZSlcbmlmKCghcnx8LTE9PT1uLml0ZW1zLmluZGV4T2Yocil8fChcInNpbmdsZVwiPT09byYmbi5jbG9zZSgpLFwic2luZ2xlXCIhPT1vJiZuLnNldHRpbmdzLmR1cGxpY2F0ZXMpKSYmbnVsbCE9PXImJm4ub3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShyKSYmKFwic2luZ2xlXCI9PT1vJiZuLmNsZWFyKHQpLFwibXVsdGlcIiE9PW98fCFuLmlzRnVsbCgpKSl7aWYoaT1uLl9yZW5kZXIoXCJpdGVtXCIsbi5vcHRpb25zW3JdKSxuLmNvbnRyb2wuY29udGFpbnMoaSkmJihpPWkuY2xvbmVOb2RlKCEwKSkscz1uLmlzRnVsbCgpLG4uaXRlbXMuc3BsaWNlKG4uY2FyZXRQb3MsMCxyKSxuLmluc2VydEF0Q2FyZXQoaSksbi5pc1NldHVwKXtpZighbi5pc1BlbmRpbmcmJm4uc2V0dGluZ3MuaGlkZVNlbGVjdGVkKXtsZXQgZT1uLmdldE9wdGlvbihyKSx0PW4uZ2V0QWRqYWNlbnQoZSwxKVxudCYmbi5zZXRBY3RpdmVPcHRpb24odCl9bi5zZXR0aW5ncy5jbGVhckFmdGVyU2VsZWN0JiZuLnNldFRleHRib3hWYWx1ZSgpLG4uaXNQZW5kaW5nfHxuLnNldHRpbmdzLmNsb3NlQWZ0ZXJTZWxlY3R8fG4ucmVmcmVzaE9wdGlvbnMobi5pc0ZvY3VzZWQmJlwic2luZ2xlXCIhPT1vKSwwIT1uLnNldHRpbmdzLmNsb3NlQWZ0ZXJTZWxlY3QmJm4uaXNGdWxsKCk/bi5jbG9zZSgpOm4uaXNQZW5kaW5nfHxuLnBvc2l0aW9uRHJvcGRvd24oKSxuLnRyaWdnZXIoXCJpdGVtX2FkZFwiLHIsaSksbi5pc1BlbmRpbmd8fG4udXBkYXRlT3JpZ2luYWxJbnB1dCh7c2lsZW50OnR9KX0oIW4uaXNQZW5kaW5nfHwhcyYmbi5pc0Z1bGwoKSkmJihuLmlucHV0U3RhdGUoKSxuLnJlZnJlc2hTdGF0ZSgpKX19KX1yZW1vdmVJdGVtKGU9bnVsbCx0KXtjb25zdCBpPXRoaXNcbmlmKCEoZT1pLmdldEl0ZW0oZSkpKXJldHVyblxudmFyIHMsblxuY29uc3Qgbz1lLmRhdGFzZXQudmFsdWVcbnM9dGUoZSksZS5yZW1vdmUoKSxlLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSYmKG49aS5hY3RpdmVJdGVtcy5pbmRleE9mKGUpLGkuYWN0aXZlSXRlbXMuc3BsaWNlKG4sMSksSihlLFwiYWN0aXZlXCIpKSxpLml0ZW1zLnNwbGljZShzLDEpLGkuaXNEcm9wZG93bkNvbnRlbnRTdGFsZT0hMCwhaS5zZXR0aW5ncy5wZXJzaXN0JiZpLnVzZXJPcHRpb25zLmhhc093blByb3BlcnR5KG8pJiZpLnJlbW92ZU9wdGlvbihvLHQpLHM8aS5jYXJldFBvcyYmaS5zZXRDYXJldChpLmNhcmV0UG9zLTEpLGkudXBkYXRlT3JpZ2luYWxJbnB1dCh7c2lsZW50OnR9KSxpLnJlZnJlc2hTdGF0ZSgpLGkucG9zaXRpb25Ecm9wZG93bigpLGkudHJpZ2dlcihcIml0ZW1fcmVtb3ZlXCIsbyxlKX1jcmVhdGVJdGVtKGU9bnVsbCx0PSgpPT57fSl7Mz09PWFyZ3VtZW50cy5sZW5ndGgmJih0PWFyZ3VtZW50c1syXSksXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmKHQ9KCk9Pnt9KVxudmFyIGkscz10aGlzLG49cy5jYXJldFBvc1xuaWYoZT1lfHxzLmlucHV0VmFsdWUoKSwhcy5jYW5DcmVhdGUoZSkpe3JldHVybiBQKGUpJiZ0aGlzLm9wdGlvbnNbZV0mJnMuYWRkSXRlbShlKSx0KCksITF9cy5sb2NrKClcbnZhciBvPSExLHI9ZT0+e2lmKHMudW5sb2NrKCksIWV8fFwib2JqZWN0XCIhPXR5cGVvZiBlKXJldHVybiB0KClcbnZhciBpPVAoZVtzLnNldHRpbmdzLnZhbHVlRmllbGRdKVxuaWYoXCJzdHJpbmdcIiE9dHlwZW9mIGkpcmV0dXJuIHQoKVxucy5zZXRUZXh0Ym94VmFsdWUoKSxzLmFkZE9wdGlvbihlLCEwKSxzLnNldENhcmV0KG4pLHMuYWRkSXRlbShpKSx0KGUpLG89ITB9XG5yZXR1cm4gaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBzLnNldHRpbmdzLmNyZWF0ZT9zLnNldHRpbmdzLmNyZWF0ZS5jYWxsKHRoaXMsZSxyKTp7W3Muc2V0dGluZ3MubGFiZWxGaWVsZF06ZSxbcy5zZXR0aW5ncy52YWx1ZUZpZWxkXTplfSxvfHxyKGkpLCEwfXJlZnJlc2hJdGVtcygpe3ZhciBlPXRoaXNcbmUuaXNEcm9wZG93bkNvbnRlbnRTdGFsZT0hMCxlLmlzU2V0dXAmJmUuYWRkSXRlbXMoZS5pdGVtcyksZS51cGRhdGVPcmlnaW5hbElucHV0KCksZS5yZWZyZXNoU3RhdGUoKX1yZWZyZXNoU3RhdGUoKXtjb25zdCBlPXRoaXNcbmUucmVmcmVzaFZhbGlkaXR5U3RhdGUoKVxuY29uc3QgdD1lLmlzRnVsbCgpLGk9ZS5pc0xvY2tlZFxuZS53cmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJydGxcIixlLnJ0bClcbmNvbnN0IHM9ZS53cmFwcGVyLmNsYXNzTGlzdFxudmFyIG5cbnMudG9nZ2xlKFwiZm9jdXNcIixlLmlzRm9jdXNlZCkscy50b2dnbGUoXCJkaXNhYmxlZFwiLGUuaXNEaXNhYmxlZCkscy50b2dnbGUoXCJyZWFkb25seVwiLGUuaXNSZWFkT25seSkscy50b2dnbGUoXCJyZXF1aXJlZFwiLGUuaXNSZXF1aXJlZCkscy50b2dnbGUoXCJpbnZhbGlkXCIsIWUuaXNWYWxpZCkscy50b2dnbGUoXCJsb2NrZWRcIixpKSxzLnRvZ2dsZShcImZ1bGxcIix0KSxzLnRvZ2dsZShcImlucHV0LWFjdGl2ZVwiLGUuaXNGb2N1c2VkJiYhZS5pc0lucHV0SGlkZGVuKSxzLnRvZ2dsZShcImRyb3Bkb3duLWFjdGl2ZVwiLGUuaXNPcGVuKSxzLnRvZ2dsZShcImhhcy1vcHRpb25zXCIsKG49ZS5vcHRpb25zLDA9PT1PYmplY3Qua2V5cyhuKS5sZW5ndGgpKSxzLnRvZ2dsZShcImhhcy1pdGVtc1wiLGUuaXRlbXMubGVuZ3RoPjApfXJlZnJlc2hWYWxpZGl0eVN0YXRlKCl7dmFyIGU9dGhpc1xuZS5pbnB1dC52YWxpZGl0eSYmKGUuaXNWYWxpZD1lLmlucHV0LnZhbGlkaXR5LnZhbGlkLGUuaXNJbnZhbGlkPSFlLmlzVmFsaWQpfWlzRnVsbCgpe3JldHVybiBudWxsIT09dGhpcy5zZXR0aW5ncy5tYXhJdGVtcyYmdGhpcy5pdGVtcy5sZW5ndGg+PXRoaXMuc2V0dGluZ3MubWF4SXRlbXN9dXBkYXRlT3JpZ2luYWxJbnB1dChlPXt9KXtjb25zdCB0PXRoaXNcbnZhciBpLHNcbmNvbnN0IG49dC5pbnB1dC5xdWVyeVNlbGVjdG9yKCdvcHRpb25bdmFsdWU9XCJcIl0nKVxuaWYodC5pc19zZWxlY3RfdGFnKXtjb25zdCBvPVtdLHI9dC5pbnB1dC5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uOmNoZWNrZWRcIikubGVuZ3RoXG5mdW5jdGlvbiBsKGUsaSxzKXtyZXR1cm4gZXx8KGU9SygnPG9wdGlvbiB2YWx1ZT1cIicrRChpKSsnXCI+JytEKHMpK1wiPC9vcHRpb24+XCIpKSxlIT1uJiZ0LmlucHV0LmFwcGVuZChlKSxvLnB1c2goZSksKGUhPW58fHI+MHx8XCJtdWx0aVwiPT10LnNldHRpbmdzLm1vZGUpJiYoZS5zZWxlY3RlZD0hMCksZX10LmlucHV0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb246Y2hlY2tlZFwiKS5mb3JFYWNoKGU9PntlLnNlbGVjdGVkPSExfSksMD09dC5pdGVtcy5sZW5ndGgmJlwic2luZ2xlXCI9PXQuc2V0dGluZ3MubW9kZT9sKG4sXCJcIixcIlwiKTp0Lml0ZW1zLmZvckVhY2goZT0+e2lmKGk9dC5vcHRpb25zW2VdLHM9aVt0LnNldHRpbmdzLmxhYmVsRmllbGRdfHxcIlwiLG8uaW5jbHVkZXMoaS4kb3B0aW9uKSl7bCh0LmlucHV0LnF1ZXJ5U2VsZWN0b3IoYG9wdGlvblt2YWx1ZT1cIiR7TShlKX1cIl06bm90KDpjaGVja2VkKWApLGUscyl9ZWxzZSBpLiRvcHRpb249bChpLiRvcHRpb24sZSxzKX0pfWVsc2UgdC5pbnB1dC52YWx1ZT10LmdldFZhbHVlKClcbnQuaXNTZXR1cCYmKGUuc2lsZW50fHx0LnRyaWdnZXIoXCJjaGFuZ2VcIix0LmdldFZhbHVlKCkpKX1vcGVuKCl7dmFyIGU9dGhpc1xuZS5pc0xvY2tlZHx8ZS5pc09wZW58fFwibXVsdGlcIj09PWUuc2V0dGluZ3MubW9kZSYmZS5pc0Z1bGwoKXx8KGUuaXNPcGVuPSEwLGllKGUuZm9jdXNfbm9kZSx7XCJhcmlhLWV4cGFuZGVkXCI6XCJ0cnVlXCJ9KSxlLnJlZnJlc2hTdGF0ZSgpLFcoZS5kcm9wZG93bix7dmlzaWJpbGl0eTpcImhpZGRlblwiLGRpc3BsYXk6XCJibG9ja1wifSksZS5wb3NpdGlvbkRyb3Bkb3duKCksVyhlLmRyb3Bkb3duLHt2aXNpYmlsaXR5OlwidmlzaWJsZVwiLGRpc3BsYXk6XCJibG9ja1wifSksZS5mb2N1cygpLGUudHJpZ2dlcihcImRyb3Bkb3duX29wZW5cIixlLmRyb3Bkb3duKSl9Y2xvc2UoZT0hMCl7dmFyIHQ9dGhpcyxpPXQuaXNPcGVuXG5lJiYodC5zZXRUZXh0Ym94VmFsdWUoKSxcInNpbmdsZVwiPT09dC5zZXR0aW5ncy5tb2RlJiZ0Lml0ZW1zLmxlbmd0aCYmdC5pbnB1dFN0YXRlKCkpLHQuaXNPcGVuPSExLGllKHQuZm9jdXNfbm9kZSx7XCJhcmlhLWV4cGFuZGVkXCI6XCJmYWxzZVwifSksVyh0LmRyb3Bkb3duLHtkaXNwbGF5Olwibm9uZVwifSksdC5zZXR0aW5ncy5oaWRlU2VsZWN0ZWQmJnQuY2xlYXJBY3RpdmVPcHRpb24oKSx0LnJlZnJlc2hTdGF0ZSgpLGkmJnQudHJpZ2dlcihcImRyb3Bkb3duX2Nsb3NlXCIsdC5kcm9wZG93bil9cG9zaXRpb25Ecm9wZG93bigpe2lmKFwiYm9keVwiPT09dGhpcy5zZXR0aW5ncy5kcm9wZG93blBhcmVudCl7dmFyIGU9dGhpcy5jb250cm9sLHQ9ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxpPWUub2Zmc2V0SGVpZ2h0K3QudG9wK3dpbmRvdy5zY3JvbGxZLHM9dC5sZWZ0K3dpbmRvdy5zY3JvbGxYXG5XKHRoaXMuZHJvcGRvd24se3dpZHRoOnQud2lkdGgrXCJweFwiLHRvcDppK1wicHhcIixsZWZ0OnMrXCJweFwifSl9fWNsZWFyKGUpe3ZhciB0PXRoaXNcbmlmKHQuaXRlbXMubGVuZ3RoKXt2YXIgaT10LmNvbnRyb2xDaGlsZHJlbigpXG5CKGksZT0+e3QucmVtb3ZlSXRlbShlLCEwKX0pLHQuaW5wdXRTdGF0ZSgpLGV8fHQudXBkYXRlT3JpZ2luYWxJbnB1dCgpLHQudHJpZ2dlcihcImNsZWFyXCIpfX1pbnNlcnRBdENhcmV0KGUpe2NvbnN0IHQ9dGhpcyxpPXQuY2FyZXRQb3Mscz10LmNvbnRyb2xcbnMuaW5zZXJ0QmVmb3JlKGUscy5jaGlsZHJlbltpXXx8bnVsbCksdC5zZXRDYXJldChpKzEpfWRlbGV0ZVNlbGVjdGlvbihlKXt2YXIgdCxpLHMsbixvLHI9dGhpc1xudD1lJiY4PT09ZS5rZXlDb2RlPy0xOjEsaT17c3RhcnQ6KG89ci5jb250cm9sX2lucHV0KS5zZWxlY3Rpb25TdGFydHx8MCxsZW5ndGg6KG8uc2VsZWN0aW9uRW5kfHwwKS0oby5zZWxlY3Rpb25TdGFydHx8MCl9XG5jb25zdCBsPVtdXG5pZihyLmFjdGl2ZUl0ZW1zLmxlbmd0aCluPWVlKHIuYWN0aXZlSXRlbXMsdCkscz10ZShuKSx0PjAmJnMrKyxCKHIuYWN0aXZlSXRlbXMsZT0+bC5wdXNoKGUpKVxuZWxzZSBpZigoci5pc0ZvY3VzZWR8fFwic2luZ2xlXCI9PT1yLnNldHRpbmdzLm1vZGUpJiZyLml0ZW1zLmxlbmd0aCl7Y29uc3QgZT1yLmNvbnRyb2xDaGlsZHJlbigpXG5sZXQgc1xudDwwJiYwPT09aS5zdGFydCYmMD09PWkubGVuZ3RoP3M9ZVtyLmNhcmV0UG9zLTFdOnQ+MCYmaS5zdGFydD09PXIuaW5wdXRWYWx1ZSgpLmxlbmd0aCYmKHM9ZVtyLmNhcmV0UG9zXSksdm9pZCAwIT09cyYmbC5wdXNoKHMpfWlmKCFyLnNob3VsZERlbGV0ZShsLGUpKXJldHVybiExXG5mb3IoJChlLCEwKSx2b2lkIDAhPT1zJiZyLnNldENhcmV0KHMpO2wubGVuZ3RoOylyLnJlbW92ZUl0ZW0obC5wb3AoKSlcbnJldHVybiByLmlucHV0U3RhdGUoKSxyLnBvc2l0aW9uRHJvcGRvd24oKSxyLnJlZnJlc2hPcHRpb25zKCExKSwhMH1zaG91bGREZWxldGUoZSx0KXtjb25zdCBpPWUubWFwKGU9PmUuZGF0YXNldC52YWx1ZSlcbnJldHVybiEoIWkubGVuZ3RofHxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLnNldHRpbmdzLm9uRGVsZXRlJiYhMT09PXRoaXMuc2V0dGluZ3Mub25EZWxldGUuY2FsbCh0aGlzLGksdCkpfWFkdmFuY2VTZWxlY3Rpb24oZSx0KXt2YXIgaSxzLG49dGhpc1xubi5ydGwmJihlKj0tMSksbi5pbnB1dFZhbHVlKCkubGVuZ3RofHwoUihvZSx0KXx8UihcInNoaWZ0S2V5XCIsdCk/KHM9KGk9bi5nZXRMYXN0QWN0aXZlKGUpKT9pLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKT9uLmdldEFkamFjZW50KGksZSxcIml0ZW1cIik6aTplPjA/bi5jb250cm9sX2lucHV0Lm5leHRFbGVtZW50U2libGluZzpuLmNvbnRyb2xfaW5wdXQucHJldmlvdXNFbGVtZW50U2libGluZykmJihzLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSYmbi5yZW1vdmVBY3RpdmVJdGVtKGkpLG4uc2V0QWN0aXZlSXRlbUNsYXNzKHMpKTpuLm1vdmVDYXJldChlKSl9bW92ZUNhcmV0KGUpe31nZXRMYXN0QWN0aXZlKGUpe2xldCB0PXRoaXMuY29udHJvbC5xdWVyeVNlbGVjdG9yKFwiLmxhc3QtYWN0aXZlXCIpXG5pZih0KXJldHVybiB0XG52YXIgaT10aGlzLmNvbnRyb2wucXVlcnlTZWxlY3RvckFsbChcIi5hY3RpdmVcIilcbnJldHVybiBpP2VlKGksZSk6dm9pZCAwfXNldENhcmV0KGUpe3RoaXMuY2FyZXRQb3M9dGhpcy5pdGVtcy5sZW5ndGh9Y29udHJvbENoaWxkcmVuKCl7cmV0dXJuIEFycmF5LmZyb20odGhpcy5jb250cm9sLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10cy1pdGVtXVwiKSl9bG9jaygpe3RoaXMuc2V0TG9ja2VkKCEwKX11bmxvY2soKXt0aGlzLnNldExvY2tlZCghMSl9c2V0TG9ja2VkKGU9dGhpcy5pc1JlYWRPbmx5fHx0aGlzLmlzRGlzYWJsZWQpe3RoaXMuaXNMb2NrZWQ9ZSx0aGlzLnJlZnJlc2hTdGF0ZSgpfWRpc2FibGUoKXt0aGlzLnNldERpc2FibGVkKCEwKSx0aGlzLmNsb3NlKCl9ZW5hYmxlKCl7dGhpcy5zZXREaXNhYmxlZCghMSl9c2V0RGlzYWJsZWQoZSl7dGhpcy5mb2N1c19ub2RlLnRhYkluZGV4PWU/LTE6dGhpcy50YWJJbmRleCx0aGlzLmlzRGlzYWJsZWQ9ZSx0aGlzLmlucHV0LmRpc2FibGVkPWUsdGhpcy5jb250cm9sX2lucHV0LmRpc2FibGVkPWUsdGhpcy5zZXRMb2NrZWQoKX1zZXRSZWFkT25seShlKXt0aGlzLmlzUmVhZE9ubHk9ZSx0aGlzLmlucHV0LnJlYWRPbmx5PWUsdGhpcy5jb250cm9sX2lucHV0LnJlYWRPbmx5PWUsdGhpcy5zZXRMb2NrZWQoKX1kZXN0cm95KCl7dmFyIGU9dGhpcyx0PWUucmV2ZXJ0U2V0dGluZ3NcbmUudHJpZ2dlcihcImRlc3Ryb3lcIiksZS5vZmYoKSxlLndyYXBwZXIucmVtb3ZlKCksZS5kcm9wZG93bi5yZW1vdmUoKSxlLmlucHV0LmlubmVySFRNTD10LmlubmVySFRNTCxlLmlucHV0LnRhYkluZGV4PXQudGFiSW5kZXgsSihlLmlucHV0LFwidG9tc2VsZWN0ZWRcIixcInRzLWhpZGRlbi1hY2Nlc3NpYmxlXCIpLGUuX2Rlc3Ryb3koKSxkZWxldGUgZS5pbnB1dC50b21zZWxlY3R9cmVuZGVyKGUsdCl7dmFyIGksc1xuY29uc3Qgbj10aGlzXG5pZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0aGlzLnNldHRpbmdzLnJlbmRlcltlXSlyZXR1cm4gbnVsbFxuaWYoIShzPW4uc2V0dGluZ3MucmVuZGVyW2VdLmNhbGwodGhpcyx0LEQpKSlyZXR1cm4gbnVsbFxuaWYocz1LKHMpLFwib3B0aW9uXCI9PT1lfHxcIm9wdGlvbl9jcmVhdGVcIj09PWU/dFtuLnNldHRpbmdzLmRpc2FibGVkRmllbGRdP2llKHMse1wiYXJpYS1kaXNhYmxlZFwiOlwidHJ1ZVwifSk6aWUocyx7XCJkYXRhLXNlbGVjdGFibGVcIjpcIlwifSk6XCJvcHRncm91cFwiPT09ZSYmKGk9dC5ncm91cFtuLnNldHRpbmdzLm9wdGdyb3VwVmFsdWVGaWVsZF0saWUocyx7XCJkYXRhLWdyb3VwXCI6aX0pLHQuZ3JvdXBbbi5zZXR0aW5ncy5kaXNhYmxlZEZpZWxkXSYmaWUocyx7XCJkYXRhLWRpc2FibGVkXCI6XCJcIn0pKSxcIm9wdGlvblwiPT09ZXx8XCJpdGVtXCI9PT1lKXtjb25zdCBpPU4odFtuLnNldHRpbmdzLnZhbHVlRmllbGRdKVxuaWUocyx7XCJkYXRhLXZhbHVlXCI6aX0pLFwiaXRlbVwiPT09ZT8oUShzLG4uc2V0dGluZ3MuaXRlbUNsYXNzKSxpZShzLHtcImRhdGEtdHMtaXRlbVwiOlwiXCJ9KSk6KFEocyxuLnNldHRpbmdzLm9wdGlvbkNsYXNzKSxpZShzLHtyb2xlOlwib3B0aW9uXCIsaWQ6dC4kaWR9KSx0LiRkaXY9cyxuLm9wdGlvbnNbaV09dCl9cmV0dXJuIHN9X3JlbmRlcihlLHQpe2NvbnN0IGk9dGhpcy5yZW5kZXIoZSx0KVxuaWYobnVsbD09aSl0aHJvd1wiSFRNTEVsZW1lbnQgZXhwZWN0ZWRcIlxucmV0dXJuIGl9Y2xlYXJDYWNoZSgpe0IodGhpcy5vcHRpb25zLGU9PntlLiRkaXYmJihlLiRkaXYucmVtb3ZlKCksZGVsZXRlIGUuJGRpdil9KX11bmNhY2hlVmFsdWUoZSl7Y29uc3QgdD10aGlzLmdldE9wdGlvbihlKVxudCYmdC5yZW1vdmUoKX1jYW5DcmVhdGUoZSl7cmV0dXJuIHRoaXMuc2V0dGluZ3MuY3JlYXRlJiZlLmxlbmd0aD4wJiZ0aGlzLnNldHRpbmdzLmNyZWF0ZUZpbHRlci5jYWxsKHRoaXMsZSl9aG9vayhlLHQsaSl7dmFyIHM9dGhpcyxuPXNbdF1cbnNbdF09ZnVuY3Rpb24oKXt2YXIgdCxvXG5yZXR1cm5cImFmdGVyXCI9PT1lJiYodD1uLmFwcGx5KHMsYXJndW1lbnRzKSksbz1pLmFwcGx5KHMsYXJndW1lbnRzKSxcImluc3RlYWRcIj09PWU/bzooXCJiZWZvcmVcIj09PWUmJih0PW4uYXBwbHkocyxhcmd1bWVudHMpKSx0KX19fXJldHVybiBjZS5kZWZpbmUoXCJjaGFuZ2VfbGlzdGVuZXJcIixmdW5jdGlvbigpe3EodGhpcy5pbnB1dCxcImNoYW5nZVwiLCgpPT57dGhpcy5zeW5jKCl9KX0pLGNlLmRlZmluZShcImNoZWNrYm94X29wdGlvbnNcIixmdW5jdGlvbihlKXt2YXIgdD10aGlzLGk9dC5vbk9wdGlvblNlbGVjdFxudC5zZXR0aW5ncy5oaWRlU2VsZWN0ZWQ9ITFcbmNvbnN0IHM9T2JqZWN0LmFzc2lnbih7Y2xhc3NOYW1lOlwidG9tc2VsZWN0LWNoZWNrYm94XCIsY2hlY2tlZENsYXNzTmFtZXM6dm9pZCAwLHVuY2hlY2tlZENsYXNzTmFtZXM6dm9pZCAwfSxlKVxudmFyIG49ZnVuY3Rpb24oZSx0KXt0PyhlLmNoZWNrZWQ9ITAscy51bmNoZWNrZWRDbGFzc05hbWVzJiZlLmNsYXNzTGlzdC5yZW1vdmUoLi4ucy51bmNoZWNrZWRDbGFzc05hbWVzKSxzLmNoZWNrZWRDbGFzc05hbWVzJiZlLmNsYXNzTGlzdC5hZGQoLi4ucy5jaGVja2VkQ2xhc3NOYW1lcykpOihlLmNoZWNrZWQ9ITEscy5jaGVja2VkQ2xhc3NOYW1lcyYmZS5jbGFzc0xpc3QucmVtb3ZlKC4uLnMuY2hlY2tlZENsYXNzTmFtZXMpLHMudW5jaGVja2VkQ2xhc3NOYW1lcyYmZS5jbGFzc0xpc3QuYWRkKC4uLnMudW5jaGVja2VkQ2xhc3NOYW1lcykpfSxvPWZ1bmN0aW9uKGUpe3NldFRpbWVvdXQoKCk9Pnt2YXIgdD1lLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5cIitzLmNsYXNzTmFtZSlcbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50JiZuKHQsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSl9LDEpfVxudC5ob29rKFwiYWZ0ZXJcIixcInNldHVwVGVtcGxhdGVzXCIsKCk9Pnt2YXIgZT10LnNldHRpbmdzLnJlbmRlci5vcHRpb25cbnQuc2V0dGluZ3MucmVuZGVyLm9wdGlvbj0oaSxvKT0+e3ZhciByPUsoZS5jYWxsKHQsaSxvKSksbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbnMuY2xhc3NOYW1lJiZsLmNsYXNzTGlzdC5hZGQocy5jbGFzc05hbWUpLGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oZSl7JChlKX0pLGwudHlwZT1cImNoZWNrYm94XCJcbmNvbnN0IGE9UChpW3Quc2V0dGluZ3MudmFsdWVGaWVsZF0pXG5yZXR1cm4gbihsLCEhKGEmJnQuaXRlbXMuaW5kZXhPZihhKT4tMSkpLHIucHJlcGVuZChsKSxyfX0pLHQub24oXCJpdGVtX3JlbW92ZVwiLGU9Pnt2YXIgaT10LmdldE9wdGlvbihlKVxuaSYmKGkuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpLG8oaSkpfSksdC5vbihcIml0ZW1fYWRkXCIsZT0+e3ZhciBpPXQuZ2V0T3B0aW9uKGUpXG5pJiZvKGkpfSksdC5ob29rKFwiaW5zdGVhZFwiLFwib25PcHRpb25TZWxlY3RcIiwoZSxzKT0+e2lmKHMuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpcmV0dXJuIHMuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpLHQucmVtb3ZlSXRlbShzLmRhdGFzZXQudmFsdWUpLHQucmVmcmVzaE9wdGlvbnMoKSx2b2lkICQoZSwhMClcbmkuY2FsbCh0LGUscyksbyhzKX0pfSksY2UuZGVmaW5lKFwiY2xlYXJfYnV0dG9uXCIsZnVuY3Rpb24oZSl7Y29uc3QgdD10aGlzLGk9T2JqZWN0LmFzc2lnbih7Y2xhc3NOYW1lOlwiY2xlYXItYnV0dG9uXCIsdGl0bGU6XCJDbGVhciBBbGxcIixyb2xlOlwiYnV0dG9uXCIsdGFiaW5kZXg6MCxodG1sOmU9PmA8ZGl2IGNsYXNzPVwiJHtlLmNsYXNzTmFtZX1cIiB0aXRsZT1cIiR7ZS50aXRsZX1cIiByb2xlPVwiJHtlLnJvbGV9XCIgdGFiaW5kZXg9XCIke2UudGFiaW5kZXh9XCI+JnRpbWVzOzwvZGl2PmB9LGUpXG50Lm9uKFwiaW5pdGlhbGl6ZVwiLCgpPT57dmFyIGU9SyhpLmh0bWwoaSkpXG5lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGU9Pnt0LmlzTG9ja2VkfHwodC5jbGVhcigpLFwic2luZ2xlXCI9PT10LnNldHRpbmdzLm1vZGUmJnQuc2V0dGluZ3MuYWxsb3dFbXB0eU9wdGlvbiYmdC5hZGRJdGVtKFwiXCIpLHQucmVmcmVzaE9wdGlvbnMoITEpLGUucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpKX0pLHQuY29udHJvbC5hcHBlbmRDaGlsZChlKX0pfSksY2UuZGVmaW5lKFwiZHJhZ19kcm9wXCIsZnVuY3Rpb24oKXt2YXIgZT10aGlzXG5pZihcIm11bHRpXCIhPT1lLnNldHRpbmdzLm1vZGUpcmV0dXJuXG52YXIgdD1lLmxvY2ssaT1lLnVubG9ja1xubGV0IHMsbj0hMFxuZS5ob29rKFwiYWZ0ZXJcIixcInNldHVwVGVtcGxhdGVzXCIsKCk9Pnt2YXIgdD1lLnNldHRpbmdzLnJlbmRlci5pdGVtXG5lLnNldHRpbmdzLnJlbmRlci5pdGVtPShpLG8pPT57Y29uc3Qgcj1LKHQuY2FsbChlLGksbykpXG5pZShyLHtkcmFnZ2FibGU6XCJ0cnVlXCJ9KVxuY29uc3QgbD1lPT57ZS5wcmV2ZW50RGVmYXVsdCgpLHIuY2xhc3NMaXN0LmFkZChcInRzLWRyYWctb3ZlclwiKSxhKHIscyl9LGE9KGUsdCk9Pnt2YXIgaSxzLG5cbnZvaWQgMCE9PXQmJigoKGUsdCk9Pntkb3t2YXIgaVxuaWYoZT09KHQ9bnVsbD09KGk9dCk/dm9pZCAwOmkucHJldmlvdXNFbGVtZW50U2libGluZykpcmV0dXJuITB9d2hpbGUodCYmdC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKVxucmV0dXJuITF9KSh0LHIpPyhzPXQsbnVsbD09KG49KGk9ZSkucGFyZW50Tm9kZSl8fG4uaW5zZXJ0QmVmb3JlKHMsaS5uZXh0U2libGluZykpOigoZSx0KT0+e3ZhciBpXG5udWxsPT0oaT1lLnBhcmVudE5vZGUpfHxpLmluc2VydEJlZm9yZSh0LGUpfSkoZSx0KSl9XG5yZXR1cm4gcShyLFwibW91c2Vkb3duXCIsZT0+e258fCQoZSksZS5zdG9wUHJvcGFnYXRpb24oKX0pLHEocixcImRyYWdzdGFydFwiLGU9PntzPXIsc2V0VGltZW91dCgoKT0+e3IuY2xhc3NMaXN0LmFkZChcInRzLWRyYWdnaW5nXCIpfSwwKX0pLHEocixcImRyYWdlbnRlclwiLGwpLHEocixcImRyYWdvdmVyXCIsbCkscShyLFwiZHJhZ2xlYXZlXCIsKCk9PntyLmNsYXNzTGlzdC5yZW1vdmUoXCJ0cy1kcmFnLW92ZXJcIil9KSxxKHIsXCJkcmFnZW5kXCIsKCk9Pnt2YXIgdFxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50cy1kcmFnLW92ZXJcIikuZm9yRWFjaChlPT5lLmNsYXNzTGlzdC5yZW1vdmUoXCJ0cy1kcmFnLW92ZXJcIikpLG51bGw9PSh0PXMpfHx0LmNsYXNzTGlzdC5yZW1vdmUoXCJ0cy1kcmFnZ2luZ1wiKSxzPXZvaWQgMFxudmFyIGk9W11cbmUuY29udHJvbC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdmFsdWVdXCIpLmZvckVhY2goZT0+e2lmKGUuZGF0YXNldC52YWx1ZSl7bGV0IHQ9ZS5kYXRhc2V0LnZhbHVlXG50JiZpLnB1c2godCl9fSksZS5zZXRWYWx1ZShpKX0pLHJ9fSksZS5ob29rKFwiaW5zdGVhZFwiLFwibG9ja1wiLCgpPT4obj0hMSx0LmNhbGwoZSkpKSxlLmhvb2soXCJpbnN0ZWFkXCIsXCJ1bmxvY2tcIiwoKT0+KG49ITAsaS5jYWxsKGUpKSl9KSxjZS5kZWZpbmUoXCJkcm9wZG93bl9oZWFkZXJcIixmdW5jdGlvbihlKXtjb25zdCB0PXRoaXMsaT1PYmplY3QuYXNzaWduKHt0aXRsZTpcIlVudGl0bGVkXCIsaGVhZGVyQ2xhc3M6XCJkcm9wZG93bi1oZWFkZXJcIix0aXRsZVJvd0NsYXNzOlwiZHJvcGRvd24taGVhZGVyLXRpdGxlXCIsbGFiZWxDbGFzczpcImRyb3Bkb3duLWhlYWRlci1sYWJlbFwiLGNsb3NlQ2xhc3M6XCJkcm9wZG93bi1oZWFkZXItY2xvc2VcIixodG1sOmU9Pic8ZGl2IGNsYXNzPVwiJytlLmhlYWRlckNsYXNzKydcIj48ZGl2IGNsYXNzPVwiJytlLnRpdGxlUm93Q2xhc3MrJ1wiPjxzcGFuIGNsYXNzPVwiJytlLmxhYmVsQ2xhc3MrJ1wiPicrZS50aXRsZSsnPC9zcGFuPjxhIGNsYXNzPVwiJytlLmNsb3NlQ2xhc3MrJ1wiPiZ0aW1lczs8L2E+PC9kaXY+PC9kaXY+J30sZSlcbnQub24oXCJpbml0aWFsaXplXCIsKCk9Pnt2YXIgZT1LKGkuaHRtbChpKSkscz1lLnF1ZXJ5U2VsZWN0b3IoXCIuXCIraS5jbG9zZUNsYXNzKVxucyYmcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixlPT57JChlLCEwKSx0LmNsb3NlKCl9KSx0LmRyb3Bkb3duLmluc2VydEJlZm9yZShlLHQuZHJvcGRvd24uZmlyc3RDaGlsZCl9KX0pLGNlLmRlZmluZShcImNhcmV0X3Bvc2l0aW9uXCIsZnVuY3Rpb24oKXt2YXIgZT10aGlzXG5lLmhvb2soXCJpbnN0ZWFkXCIsXCJzZXRDYXJldFwiLHQ9PntcInNpbmdsZVwiIT09ZS5zZXR0aW5ncy5tb2RlJiZlLmNvbnRyb2wuY29udGFpbnMoZS5jb250cm9sX2lucHV0KT8odD1NYXRoLm1heCgwLE1hdGgubWluKGUuaXRlbXMubGVuZ3RoLHQpKSk9PWUuY2FyZXRQb3N8fGUuaXNQZW5kaW5nfHxlLmNvbnRyb2xDaGlsZHJlbigpLmZvckVhY2goKGkscyk9PntzPHQ/ZS5jb250cm9sX2lucHV0Lmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWJlZ2luXCIsaSk6ZS5jb250cm9sLmFwcGVuZENoaWxkKGkpfSk6dD1lLml0ZW1zLmxlbmd0aCxlLmNhcmV0UG9zPXR9KSxlLmhvb2soXCJpbnN0ZWFkXCIsXCJtb3ZlQ2FyZXRcIix0PT57aWYoIWUuaXNGb2N1c2VkKXJldHVyblxuY29uc3QgaT1lLmdldExhc3RBY3RpdmUodClcbmlmKGkpe2NvbnN0IHM9dGUoaSlcbmUuc2V0Q2FyZXQodD4wP3MrMTpzKSxlLnNldEFjdGl2ZUl0ZW0oKSxKKGksXCJsYXN0LWFjdGl2ZVwiKX1lbHNlIGUuc2V0Q2FyZXQoZS5jYXJldFBvcyt0KX0pfSksY2UuZGVmaW5lKFwiZHJvcGRvd25faW5wdXRcIixmdW5jdGlvbigpe2NvbnN0IGU9dGhpc1xuZS5zZXR0aW5ncy5zaG91bGRPcGVuPSEwLGUuaG9vayhcImJlZm9yZVwiLFwic2V0dXBcIiwoKT0+e3ZhciB0XG5lLmZvY3VzX25vZGU9ZS5jb250cm9sLFEoZS5jb250cm9sX2lucHV0LFwiZHJvcGRvd24taW5wdXRcIilcbmNvbnN0IGk9SygnPGRpdiBjbGFzcz1cImRyb3Bkb3duLWlucHV0LXdyYXBcIj4nKVxuaS5hcHBlbmQoZS5jb250cm9sX2lucHV0KSxlLmRyb3Bkb3duLmluc2VydEJlZm9yZShpLGUuZHJvcGRvd24uZmlyc3RDaGlsZClcbmNvbnN0IHM9SygnPGlucHV0IGNsYXNzPVwiaXRlbXMtcGxhY2Vob2xkZXJcIiB0YWJpbmRleD1cIi0xXCIgLz4nKVxucy5wbGFjZWhvbGRlcj1lLnNldHRpbmdzLnBsYWNlaG9sZGVyfHxcIlwiLGUuY29udHJvbC5hcHBlbmQocylcbmNvbnN0IG49bnVsbD09KHQ9ZS5pbnB1dCk/dm9pZCAwOnQuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKVxubiYmcy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsbil9KSxlLm9uKFwiaW5pdGlhbGl6ZVwiLCgpPT57ZS5jb250cm9sX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsdD0+e3N3aXRjaCh0LmtleUNvZGUpe2Nhc2UgMjc6cmV0dXJuIGUuaXNPcGVuJiYoJCh0LCEwKSxlLmNsb3NlKCkpLHZvaWQgZS5jbGVhckFjdGl2ZUl0ZW1zKClcbmNhc2UgOTplLmZvY3VzX25vZGUudGFiSW5kZXg9LTF9cmV0dXJuIGUub25LZXlEb3duLmNhbGwoZSx0KX0pLGUub24oXCJibHVyXCIsKCk9PntlLmZvY3VzX25vZGUudGFiSW5kZXg9ZS5pc0Rpc2FibGVkPy0xOmUudGFiSW5kZXh9KSxlLm9uKFwiZHJvcGRvd25fb3BlblwiLCgpPT57ZS5jb250cm9sX2lucHV0LmZvY3VzKCl9KVxuY29uc3QgdD1lLm9uQmx1clxuZS5ob29rKFwiaW5zdGVhZFwiLFwib25CbHVyXCIsaT0+e2lmKCFpfHxpLnJlbGF0ZWRUYXJnZXQhPWUuY29udHJvbF9pbnB1dClyZXR1cm4gdC5jYWxsKGUpfSkscShlLmNvbnRyb2xfaW5wdXQsXCJibHVyXCIsKCk9PmUub25CbHVyKCkpLGUuaG9vayhcImJlZm9yZVwiLFwiY2xvc2VcIiwoKT0+e2UuaXNPcGVuJiZlLmZvY3VzX25vZGUuZm9jdXMoe3ByZXZlbnRTY3JvbGw6ITB9KX0pfSl9KSxjZS5kZWZpbmUoXCJpbnB1dF9hdXRvZ3Jvd1wiLGZ1bmN0aW9uKCl7dmFyIGU9dGhpc1xuZS5vbihcImluaXRpYWxpemVcIiwoKT0+e3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpLGk9ZS5jb250cm9sX2lucHV0XG50LnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOi05OTk5OXB4OyBsZWZ0Oi05OTk5OXB4OyB3aWR0aDphdXRvOyBwYWRkaW5nOjA7IHdoaXRlLXNwYWNlOnByZTsgXCIsZS53cmFwcGVyLmFwcGVuZENoaWxkKHQpXG5mb3IoY29uc3QgZSBvZltcImxldHRlclNwYWNpbmdcIixcImZvbnRTaXplXCIsXCJmb250RmFtaWx5XCIsXCJmb250V2VpZ2h0XCIsXCJ0ZXh0VHJhbnNmb3JtXCJdKXQuc3R5bGVbZV09aS5zdHlsZVtlXVxudmFyIHM9KCk9Pnt0LnRleHRDb250ZW50PWkudmFsdWUsaS5zdHlsZS53aWR0aD10LmNsaWVudFdpZHRoK1wicHhcIn1cbnMoKSxlLm9uKFwidXBkYXRlIGl0ZW1fYWRkIGl0ZW1fcmVtb3ZlXCIscykscShpLFwiaW5wdXRcIixzKSxxKGksXCJrZXl1cFwiLHMpLHEoaSxcImJsdXJcIixzKSxxKGksXCJ1cGRhdGVcIixzKX0pfSksY2UuZGVmaW5lKFwibm9fYmFja3NwYWNlX2RlbGV0ZVwiLGZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuZGVsZXRlU2VsZWN0aW9uXG50aGlzLmhvb2soXCJpbnN0ZWFkXCIsXCJkZWxldGVTZWxlY3Rpb25cIixpPT4hIWUuYWN0aXZlSXRlbXMubGVuZ3RoJiZ0LmNhbGwoZSxpKSl9KSxjZS5kZWZpbmUoXCJub19hY3RpdmVfaXRlbXNcIixmdW5jdGlvbigpe3RoaXMuaG9vayhcImluc3RlYWRcIixcInNldEFjdGl2ZUl0ZW1cIiwoKT0+e30pLHRoaXMuaG9vayhcImluc3RlYWRcIixcInNlbGVjdEFsbFwiLCgpPT57fSl9KSxjZS5kZWZpbmUoXCJvcHRncm91cF9jb2x1bW5zXCIsZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS5vbktleURvd25cbmUuaG9vayhcImluc3RlYWRcIixcIm9uS2V5RG93blwiLGk9Pnt2YXIgcyxuLG8sclxuaWYoIWUuaXNPcGVufHwzNyE9PWkua2V5Q29kZSYmMzkhPT1pLmtleUNvZGUpcmV0dXJuIHQuY2FsbChlLGkpXG5lLmlnbm9yZUhvdmVyPSEwLHI9WihlLmFjdGl2ZU9wdGlvbixcIltkYXRhLWdyb3VwXVwiKSxzPXRlKGUuYWN0aXZlT3B0aW9uLFwiW2RhdGEtc2VsZWN0YWJsZV1cIiksciYmKHI9Mzc9PT1pLmtleUNvZGU/ci5wcmV2aW91c1NpYmxpbmc6ci5uZXh0U2libGluZykmJihuPShvPXIucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXNlbGVjdGFibGVdXCIpKVtNYXRoLm1pbihvLmxlbmd0aC0xLHMpXSkmJmUuc2V0QWN0aXZlT3B0aW9uKG4pfSl9KSxjZS5kZWZpbmUoXCJyZW1vdmVfYnV0dG9uXCIsZnVuY3Rpb24oZSl7Y29uc3QgdD10aGlzLGk9T2JqZWN0LmFzc2lnbih7bGFiZWw6XCLDl1wiLHRpdGxlOlwiUmVtb3ZlXCIsY2xhc3NOYW1lOlwicmVtb3ZlXCIsdGFiaW5kZXg6LTEscm9sZTpcImJ1dHRvblwiLGh0bWw6ZT0+e3ZhciB0XG5jb25zdCBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbnJldHVybiBpLmNsYXNzTmFtZT1lLmNsYXNzTmFtZXx8XCJcIixpLnRpdGxlPWUudGl0bGV8fFwiXCIsaS5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsZS5yb2xlfHxcImJ1dHRvblwiKSxpLnRhYkluZGV4PW51bGwhPSh0PWUudGFiaW5kZXgpP3Q6LTEsaS50ZXh0Q29udGVudD1lLmxhYmVsfHxcIlwiLGl9fSxlKVxudC5ob29rKFwiYWZ0ZXJcIixcInNldHVwVGVtcGxhdGVzXCIsKCk9Pnt2YXIgZT10LnNldHRpbmdzLnJlbmRlci5pdGVtXG50LnNldHRpbmdzLnJlbmRlci5pdGVtPShzLG4pPT57dmFyIG89SyhlLmNhbGwodCxzLG4pKSxyPUsoaS5odG1sKGkpKVxucmV0dXJuIG8uYXBwZW5kQ2hpbGQocikscShyLFwibW91c2Vkb3duXCIsZT0+eyQoZSwhMCl9KSxxKHIsXCJjbGlja1wiLGU9Pnt0LmlzTG9ja2VkfHwoJChlLCEwKSx0LmlzTG9ja2VkfHx0LnNob3VsZERlbGV0ZShbb10sZSkmJih0LnJlbW92ZUl0ZW0obyksdC5yZWZyZXNoT3B0aW9ucyghMSksdC5pbnB1dFN0YXRlKCkpKX0pLG99fSl9KSxjZS5kZWZpbmUoXCJyZXN0b3JlX29uX2JhY2tzcGFjZVwiLGZ1bmN0aW9uKGUpe2NvbnN0IHQ9dGhpcyxpPU9iamVjdC5hc3NpZ24oe3RleHQ6ZT0+ZVt0LnNldHRpbmdzLmxhYmVsRmllbGRdfSxlKVxudC5vbihcIml0ZW1fcmVtb3ZlXCIsZnVuY3Rpb24oZSl7aWYodC5pc0ZvY3VzZWQmJlwiXCI9PT10LmNvbnRyb2xfaW5wdXQudmFsdWUudHJpbSgpKXt2YXIgcz10Lm9wdGlvbnNbZV1cbnMmJnQuc2V0VGV4dGJveFZhbHVlKGkudGV4dC5jYWxsKHQscykpfX0pfSksY2UuZGVmaW5lKFwidmlydHVhbF9zY3JvbGxcIixmdW5jdGlvbigpe2NvbnN0IGU9dGhpcyx0PWUuY2FuTG9hZCxpPWUuY2xlYXJBY3RpdmVPcHRpb24scz1lLmxvYWRDYWxsYmFja1xudmFyIG4sbyxyLGw9e30sYT0hMSxjPVtdLGQ9ITEsdT1bXSxwPVtdXG5pZihlLnNldHRpbmdzLnNob3VsZExvYWRNb3JlfHwoZS5zZXR0aW5ncy5zaG91bGRMb2FkTW9yZT0oKT0+e2lmKG4uY2xpZW50SGVpZ2h0LyhuLnNjcm9sbEhlaWdodC1uLnNjcm9sbFRvcCk+LjkpcmV0dXJuITBcbmlmKGUuYWN0aXZlT3B0aW9uKXt2YXIgdD1lLnNlbGVjdGFibGUoKVxuaWYoQXJyYXkuZnJvbSh0KS5pbmRleE9mKGUuYWN0aXZlT3B0aW9uKT49dC5sZW5ndGgtMilyZXR1cm4hMH1yZXR1cm4hMX0pLCFlLnNldHRpbmdzLmZpcnN0VXJsKXRocm93XCJ2aXJ0dWFsX3Njcm9sbCBwbHVnaW4gcmVxdWlyZXMgYSBmaXJzdFVybCgpIG1ldGhvZFwiXG5lLnNldHRpbmdzLnNvcnRGaWVsZD1be2ZpZWxkOlwiJG9yZGVyXCJ9LHtmaWVsZDpcIiRzY29yZVwifV1cbmNvbnN0IGg9dD0+IShudWxsIT09ZS5zZXR0aW5ncy5tYXhPcHRpb25zJiZcIm51bWJlclwiPT10eXBlb2YgZS5zZXR0aW5ncy5tYXhPcHRpb25zJiZuLmNoaWxkcmVuLmxlbmd0aD49ZS5zZXR0aW5ncy5tYXhPcHRpb25zKSYmISghKHQgaW4gbCl8fCFsW3RdKSxnPSh0LGkpPT5lLml0ZW1zLmluZGV4T2YoaSk+PTB8fGMuaW5kZXhPZihpKT49MFxuZS5zZXROZXh0VXJsPShlLHQpPT57bFtlXT10fSxlLmdldFVybD10PT57aWYodCBpbiBsKXtjb25zdCBlPWxbdF1cbnJldHVybiBsW3RdPSExLGV9cmV0dXJuIGUuY2xlYXJQYWdpbmF0aW9uKCksZS5zZXR0aW5ncy5maXJzdFVybC5jYWxsKGUsdCl9LGUuY2xlYXJQYWdpbmF0aW9uPSgpPT57bD17fX0sZS5ob29rKFwiaW5zdGVhZFwiLFwiY2xlYXJBY3RpdmVPcHRpb25cIiwoKT0+e2lmKCFhKXJldHVybiBpLmNhbGwoZSl9KSxlLmhvb2soXCJpbnN0ZWFkXCIsXCJjYW5Mb2FkXCIsaT0+aSBpbiBsP2goaSk6dC5jYWxsKGUsaSkpLGUuaG9vayhcImluc3RlYWRcIixcImxvYWRDYWxsYmFja1wiLCh0LGkpPT57aWYoYSl7aWYobyl7Y29uc3QgaT10WzBdXG52b2lkIDAhPT1pJiYoby5kYXRhc2V0LnZhbHVlPWlbZS5zZXR0aW5ncy52YWx1ZUZpZWxkXSl9fWVsc2V7Y29uc3QgdD1cIlwiIT09ZS5sYXN0VmFsdWU/KHQsaSk9PmUuaXRlbXMuaW5kZXhPZihpKT49MHx8cC5pbmRleE9mKGkpPj0wOmdcbmUuY2xlYXJPcHRpb25zKHQpfXMuY2FsbChlLHQsaSksYXx8ZHx8KGQ9ITAsXCJcIj09PWUubGFzdFZhbHVlJiYoYz1PYmplY3Qua2V5cyhlLm9wdGlvbnMpLHI9bFtcIlwiXSx1PU9iamVjdC52YWx1ZXMoZS5vcHRpb25zKSkpLGE9ITF9KSxlLmhvb2soXCJiZWZvcmVcIixcInJlZnJlc2hPcHRpb25zXCIsKCk9PntlLmFjdGl2ZU9wdGlvbiYmXCJvcHRpb25cIiE9PWUuYWN0aXZlT3B0aW9uLmdldEF0dHJpYnV0ZShcInJvbGVcIikmJmUuc2V0QWN0aXZlT3B0aW9uKGUuYWN0aXZlT3B0aW9uLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpfSksZS5ob29rKFwiYWZ0ZXJcIixcInJlZnJlc2hPcHRpb25zXCIsKCk9Pntjb25zdCB0PWUubGFzdFZhbHVlXG52YXIgaVxuaCh0KT8oaT1lLnJlbmRlcihcImxvYWRpbmdfbW9yZVwiLHtxdWVyeTp0fSkpJiYoaS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNlbGVjdGFibGVcIixcIlwiKSxvPWkpOnQgaW4gbCYmIW4ucXVlcnlTZWxlY3RvcihcIi5uby1yZXN1bHRzXCIpJiYoaT1lLnJlbmRlcihcIm5vX21vcmVfcmVzdWx0c1wiLHtxdWVyeTp0fSkpLGkmJihRKGksZS5zZXR0aW5ncy5vcHRpb25DbGFzcyksbi5hcHBlbmQoaSkpfSlcbmNvbnN0IGY9KCk9PntkJiYoZS5hZGRPcHRpb25zKHUpLGUuY2xlYXJPcHRpb25zKGcpLHImJihsW1wiXCJdPXIpKX1cbmUub24oXCJ0eXBlXCIsdD0+e1wiXCI9PT10JiYoZigpLGUucmVmcmVzaE9wdGlvbnMoITEpKX0pLGUub24oXCJkcm9wZG93bl9jbG9zZVwiLGYpLGUub24oXCJpbml0aWFsaXplXCIsKCk9PntwPU9iamVjdC5rZXlzKGUub3B0aW9ucyksYz1PYmplY3Qua2V5cyhlLm9wdGlvbnMpLG49ZS5kcm9wZG93bl9jb250ZW50LGUuc2V0dGluZ3MucmVuZGVyPU9iamVjdC5hc3NpZ24oe30se2xvYWRpbmdfbW9yZTooKT0+JzxkaXYgY2xhc3M9XCJsb2FkaW5nLW1vcmUtcmVzdWx0c1wiPkxvYWRpbmcgbW9yZSByZXN1bHRzIC4uLiA8L2Rpdj4nLG5vX21vcmVfcmVzdWx0czooKT0+JzxkaXYgY2xhc3M9XCJuby1tb3JlLXJlc3VsdHNcIj5ObyBtb3JlIHJlc3VsdHM8L2Rpdj4nfSxlLnNldHRpbmdzLnJlbmRlciksbi5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsKCk9PntlLnNldHRpbmdzLnNob3VsZExvYWRNb3JlLmNhbGwoZSkmJmgoZS5sYXN0VmFsdWUpJiYoYXx8KGE9ITAsZS5sb2FkLmNhbGwoZSxlLmxhc3RWYWx1ZSkpKX0pfSl9KSxjZX0pXG52YXIgdG9tU2VsZWN0PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyBUb21TZWxlY3QoZSx0KX1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRvbS1zZWxlY3QuY29tcGxldGUubWluLmpzLm1hcFxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxuY29uc3QgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRjb25zdCBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0Y29uc3QgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRsZXQgdGhyZXcgPSB0cnVlO1xuXHR0cnkge1xuXHRcdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHRcdGNvbnN0IGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH1cblx0XHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0XHR0aHJldyA9IGZhbHNlO1xuXHR9IGZpbmFsbHkge1xuXHRcdGlmKHRocmV3KSBkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0fVxuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0Y29uc3QgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIvdmFsdWUgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGlmKEFycmF5LmlzQXJyYXkoZGVmaW5pdGlvbikpIHtcblx0XHR2YXIgaSA9IDA7XG5cdFx0d2hpbGUoaSA8IGRlZmluaXRpb24ubGVuZ3RoKSB7XG5cdFx0XHR2YXIga2V5ID0gZGVmaW5pdGlvbltpKytdO1xuXHRcdFx0dmFyIGJpbmRpbmcgPSBkZWZpbml0aW9uW2krK107XG5cdFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdFx0aWYoYmluZGluZyA9PT0gMCkge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IGRlZmluaXRpb25baSsrXSB9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogYmluZGluZyB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmKGJpbmRpbmcgPT09IDApIHsgaSsrOyB9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYoU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqIEltcG9ydCBkZXBlbmRlbmNpZXMgKi9cbmltcG9ydCB7TWFwcGVyfSBmcm9tIFwiLi4vbW9kdWxlcy9tYXBwZXIvbWFwcGVyLWNsYXNzLmpzXCI7XG5cbkhUTUxXaWRnZXRzLndpZGdldCh7XG4gIG5hbWU6IFwibWFwcGVyXCIsXG4gIHR5cGU6IFwib3V0cHV0XCIsXG4gIGZhY3Rvcnk6IGZ1bmN0aW9uKGVsLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgLy8gc2hhcmVkIHZhcmlhYmxlc1xuICAgIHZhciBlbGVtZW50SWQgPSBlbC5pZDtcbiAgICB2YXIgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB2YXIgaGFuZGxlID0gbmV3IE1hcHBlcigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlbmRlclZhbHVlOiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICAgIC8vIGlmIG5lZWRlZCwgaW5pdGlhbGl6ZSB3aWRnZXRcbiAgICAgICAgaWYgKCFpbml0aWFsaXplZCkge1xuICAgICAgICAgIC8vIHNldCBzdGF0ZSB0byBpbml0aWFsaXplZFxuICAgICAgICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAvLyBhdHRhY2ggdGhlIHdpZGdldCB0byB0aGUgRE9NXG4gICAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcbiAgICAgICAgICBlbC53aWRnZXQgPSB0aGlzO1xuICAgICAgICAgIC8vIGluaXRpYWxpemUgd2lkZ2V0XG4gICAgICAgICAgaGFuZGxlLmluaXRpYWxpemUoZWwsIG9wdHMubWFwSWQsIG9wdHMucHJvamVjdCwgb3B0cy5tYXhMYXllcnMpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICByZXNpemU6IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgLy8gd2lkZ2V0IGF1dG9tYXRpY2FsbHkgcmVzaXplc1xuICAgICAgfSxcblxuICAgICAgbWFwcGVyOiBoYW5kbGUsXG5cbiAgICAgIC8qIEFQSSBmdW5jdGlvbnMgdG8gbWFuaXB1bGF0ZSB3aWRnZXQgKi9cbiAgICAgIGFkZExheWVyOiBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgICAgLy8gc3BlY2lmeSB2aXNpYmlsaXR5XG4gICAgICAgIHBhcmFtcy52YWx1ZS5sYXllci52aXNpYmxlID0gcGFyYW1zLnZpc2libGU7XG4gICAgICAgIC8vIGFkZCBsYXllciB0byB3aWRnZXRcbiAgICAgICAgaGFuZGxlLmFkZExheWVyKHBhcmFtcy52YWx1ZSk7XG4gICAgICAgIC8vIHNpbmNlIFIgY29kZSBpcyB1c2VkIHRvIHVwZGF0ZSB0aGUgbWFwLCBzbyB1cGRhdGVNYXAgPSBmYWxzZVxuICAgICAgICBoYW5kbGUuc2hvd0xheWVyT25NZW51KHBhcmFtcy52YWx1ZS5pZCwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgfSxcblxuICAgIH07XG4gIH1cbn0pO1xuXG4vLyBBdHRhY2ggbWVzc2FnZSBoYW5kbGVycyBpZiBpbiBTaGlueSBtb2RlICh0aGVzZSBjb3JyZXNwb25kIHRvIEFQSSlcbmlmIChIVE1MV2lkZ2V0cy5zaGlueU1vZGUpIHtcbiAgdmFyIGZ4bnMgPSBbXCJhZGRMYXllclwiXTtcbiAgdmFyIGFkZFNoaW55SGFuZGxlciA9IGZ1bmN0aW9uKGZ4bikge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIFNoaW55LmFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyKFxuICAgICAgICBcIm1hcHBlcjpcIiArIGZ4biwgZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1lc3NhZ2UuaWQpO1xuICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VbXCJpZFwiXTtcbiAgICAgICAgICAgIGVsLndpZGdldFtmeG5dKG1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH07XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZnhucy5sZW5ndGg7ICsraSkge1xuICAgIGFkZFNoaW55SGFuZGxlcihmeG5zW2ldKSgpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=