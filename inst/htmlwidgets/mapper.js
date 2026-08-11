/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./srcjs/modules/mapper/css/categorical-legend.css"
/*!*********************************************************!*\
  !*** ./srcjs/modules/mapper/css/categorical-legend.css ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./srcjs/modules/mapper/css/continuous-legend.css"
/*!********************************************************!*\
  !*** ./srcjs/modules/mapper/css/continuous-legend.css ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./srcjs/modules/mapper/css/style.css"
/*!********************************************!*\
  !*** ./srcjs/modules/mapper/css/style.css ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./node_modules/sortablejs/modular/sortable.esm.js"
/*!*********************************************************!*\
  !*** ./node_modules/sortablejs/modular/sortable.esm.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "./srcjs/modules/mapper/class.js"
/*!***************************************!*\
  !*** ./srcjs/modules/mapper/class.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mapper: () => (/* binding */ Mapper)
/* harmony export */ });
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./srcjs/modules/mapper/css/style.css");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js");
/* harmony import */ var _create_menu_item_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-menu-item.js */ "./srcjs/modules/mapper/create-menu-item.js");




/** Class representing an object for managing a map. */
class Mapper {

  // private fields

  /**
   * HTML Element that contains menu items for active map layers.
   * @type {HTMLElement}
   */
  _menuElement;

  /**
   * Map that contains hidden menu items for map layers.
   * @type {HTMLElement}
   */
  _hiddenMenuItems;

  /**
   * HTML Element that contains the Mapbox map.
   * @type {HTMLElement}
   */
  _mapElement;

  /**
   * Array that contains identifiers for the layers that have been
   * added to the map. Note that this includes hidden layers.
   * @type {Array<string>}
   */
  _activeLayerIds;

  /**
   * Maximum number of layers that can be added to the map.
   * @type {number}
   */
  _maxLayers;

  /**
  * Construct a new Mapper object.
  * @return {void}
  */
  constructor() {
    // initialize fields
    this._activeLayerIds = [];
    this._hiddenMenuItems = new Map();
  }

  /**
  * Initialize Mapper object with menu, map, and project data.
  * @param {string} menuId - HTML element identifier for menu container.
  * @param {string} mapId - HTML element identifier for the mapgl map.
  * @param {Object} project - Object with various types of objects.
  * @param {Array<Object>} project.features - Array of feature objects.
  * @param {Array<Object>} project.costs - Array of cost objects.
  * @param {Array<Object>} project.lock - Array of lock objects.
  * @param {number} maxLayers - Maximum number of active layers permitted on
  * the map.
  * @return {void}
  */
  initialize(menuId, mapId, project, maxLayers = 15) {
    // initialize fields
    this._activeLayerIds = [];
    this._hiddenMenuItems = new Map();
    this._maxLayers = maxLayers;
    this._menuElement =
      document.getElementById(menuId).querySelector(".mapper-menu");
    this._mapElement = document.getElementById(mapId);

    // define temporary variables
    let i, j, el;

    // add menu items
    // note that this code assumes that the this._mapElement has been
    // initialized with layers that have the visible property set to true,
    // also note that layers must be added in the order that is the reverse
    // of that used to add layers to the map
      for (i = 0; i < project.features.length; i++) {
          el = (0,_create_menu_item_js__WEBPACK_IMPORTED_MODULE_2__.createMenuItem)(
            project.features[i], this, project.features[i].themes
          );
          if (project.features[i].layer.visible === true) {
            this._menuElement.appendChild(el);
            this._activeLayerIds.push(el.id);
          } else {
            this._hiddenMenuItems.set(el.id, el);
      }
    }
    for (i = 0; i < project.costs.length; i++) {
      el = (0,_create_menu_item_js__WEBPACK_IMPORTED_MODULE_2__.createMenuItem)(project.costs[i], this);
      if (project.costs[i].layer.visible === true) {
        this._menuElement.appendChild(el);
        this._activeLayerIds.push(el.id);
      } else {
        this._hiddenMenuItems.set(el.id, el);
      }
    }
    for (i = 0; i < project.locks.length; i++) {
      el = (0,_create_menu_item_js__WEBPACK_IMPORTED_MODULE_2__.createMenuItem)(project.locks[i], this);
      if (project.locks[i].layer.visible === true) {
        this._menuElement.appendChild(el);
        this._activeLayerIds.push(el.id);
      } else {
        this._hiddenMenuItems.set(el.id, el);
      }
    }
    for (i = 0; i < project.solutions.length; i++) {
      el = (0,_create_menu_item_js__WEBPACK_IMPORTED_MODULE_2__.createMenuItem)(project.solutions[i], this);
      if (project.solutions[i].layer.visible === true) {
        this._menuElement.appendChild(el);
        this._activeLayerIds.push(project.solutions[i].id);
      } else {
        this._hiddenMenuItems.set(el.id, el);
      }
    }

    // enable sorting in menu element
    let that = this;
    var sortable = new sortablejs__WEBPACK_IMPORTED_MODULE_1__.Sortable(
      this._menuElement, {
      animation: 150,
      dataIdAttr: "data-id",
      ghostClass: "ghost",
      onUpdate: function(evt) {
        if (HTMLWidgets.shinyMode) {
          let beforeId = undefined;
          if (evt.newIndex > 0) {
            evt.to.children[evt.newIndex - 1].getAttribute("data-id");
          }
          that.moveLayerOnMap(evt.item.getAttribute("data-id"), beforeId);
        }
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
    let el = (0,_create_menu_item_js__WEBPACK_IMPORTED_MODULE_2__.createMenuItem)(layer, this)
    // add menu item to hidden menu items
    this._hiddenMenuItems.set(el.id, el);
    // add to active layers
    this._activeLayerIds.push(layer.id);
    // if number of active layers exceeds limit, then remove oldest layer
    if (this._activeLayerIds.length > this.maxLayers) {
      this.hideLayerFromMenu(this._activeLayerIds[0]);
      this.removeLayerFromMap(this._activeLayerIds[0]);
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
    let el = this._menuElement.querySelector(`[data-id="${layerId}"]`);
    // update menu
    if (el) {
      // remove element from menu
      el.remove();
      // add menu item to hidden menu items
      this._hiddenMenuItems.set(el.id, el);
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
  * @param {boolean} endPosition - Should the layer be added to the
  * beginning or the end of the menu?
  * @param {boolean} updateMap - Should the map also be updated to reflect
  * these changes to the menu?
  * @return {void}
  */
  showLayerOnMenu(
    layerId, showLegend = true, endPosition = true, updateMap = true
  ) {
    // find element for layer's menu item
    let el = this._hiddenMenuItems.get(layerId);
    // find menu item checkbox for showing map and set accordingly
    let layerCheckbox = el.querySelector(".layer-checkbox");
    layerCheckbox.checked = true;
    // find menu item checkbox for showing legend and set accordingly
    let legendCheckbox = el.querySelector(".legend-checkbox");
    if (showLegend === true) {
      legendCheckbox.checked = true;
    }
    // if needed, show layer on map
    if (updateMap === true ) {
      this.showLayerOnMap(layerId);
    }
    // add layer to menu
    if (endPosition === true) {
      this._menuElement.appendChild(el);
    } else {
      this._menuElement.prepend(el);
    }
  }

  /**
  * Show layer on map.
  * @param {string} layerId - HTML identifier for layer.
  * @return {void}
  */
  showLayerOnMap(layerId) {
    // set layer visibility on map
    this._mapElement.map.setLayoutProperty(
      "lyr-" + layerId, "visibility", "visible"
    );
  }

  /**
  * Hide layer on map.
  * @param {string} layerId - HTML identifier for layer.
  * @return {void}
  */
  hideLayerOnMap(layerId) {
    // set layer visibility on map
    this._mapElement.map.setLayoutProperty(
      "lyr-" + layerId, "visibility", "none"
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
      this._mapElement.map.moveLayer("lyr-" + layerId, "lyr-" + beforeId);
    } else {
      this._mapElement.map.moveLayer("lyr-" + layerId, undefined);
    }
  }

  /**
  * Remove layer on map.
  * @param {string} layerId - HTML identifier for layer.
  * @return {void}
  */
  removeLayerFromMap(layerId) {
    // remove layer from menu
    this.hideLayerFromMenu(layerId);
    // remove layer from array of active layers
    this._activeLayerIds =
      this._activeLayerIds.filter((x) => x !== layer_id);
    // remove layer from map
    this._mapElement.map.removeLayer("lyr-" + layerId);
  }

  /**
  * Does the map have a particular layer active?
  * @param {string} layerId - HTML identifier for layer.
  * @return {void}
  */
  hasLayerActive(layerId) {
    this._activeLayerIds.includes(layer_id);
  }

}


/***/ },

/***/ "./srcjs/modules/mapper/create-legend.js"
/*!***********************************************!*\
  !*** ./srcjs/modules/mapper/create-legend.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCategoricalLegend: () => (/* binding */ createCategoricalLegend),
/* harmony export */   createContinuousLegend: () => (/* binding */ createContinuousLegend),
/* harmony export */   createLegend: () => (/* binding */ createLegend)
/* harmony export */ });
/* harmony import */ var _css_categorical_legend_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/categorical-legend.css */ "./srcjs/modules/mapper/css/categorical-legend.css");
/* harmony import */ var _css_continuous_legend_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/continuous-legend.css */ "./srcjs/modules/mapper/css/continuous-legend.css");
/* harmony import */ var _utils_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/element.js */ "./srcjs/modules/utils/element.js");




/**
 * Create a categorical legend.
 * @param {Object} x - Object with items to display in legend.
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
  (0,_utils_element_js__WEBPACK_IMPORTED_MODULE_2__.addTooltip)(
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
    itemLabel.className = "item-label disable-if-inactive";
    itemLabel.innerText = `${x.labels[i]}`;
    // create symbol component to display the color
    let itemSymbol = document.createElement("div");
    itemSymbol.className = "item-symbol disable-if-inactive";
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
 * @param {Object} x - Object with items to display in legend.
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
  (0,_utils_element_js__WEBPACK_IMPORTED_MODULE_2__.addTooltip)(
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
  }
}


/***/ },

/***/ "./srcjs/modules/mapper/create-menu-item.js"
/*!**************************************************!*\
  !*** ./srcjs/modules/mapper/create-menu-item.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenuItem: () => (/* binding */ createMenuItem)
/* harmony export */ });
/* harmony import */ var _create_legend_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-legend.js */ "./srcjs/modules/mapper/create-legend.js");
/* harmony import */ var _utils_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/element.js */ "./srcjs/modules/utils/element.js");




/**
 * Create a new menu item.
 * @param {Object} x - Object with menu item information.
 * @param {string} x.id - HTML element identifier for the menu item.
 * @param {string} x.name - Name for the menu item.
 * @param {Object} x.layer - {@link Layer} object.
 * @param {String} x.class - Class for layer. Available options include
 * `"Feature"`, `"Cost"`, `"Lock"`, and `"Solution"`.
 * @param {Object} mapper - {@link Mapper} object.
 * @param {Array<Object>} themes - Themes to which the menu item belongs.
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

  // set layer id
  el.id = x.id;
  el.setAttribute("data-id", el.id);

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
  if (HTMLWidgets.shinyMode) {
    showLegendCheckbox.addEventListener("change", function () {
      if (this.checked) {
        legendElement.style.display = "block";
      } else {
        legendElement.style.display = "none";
      }
    });
  }

  // set listener for button to hide layer
  if (HTMLWidgets.shinyMode) {
    showLayerCheckbox.addEventListener("change", function () {
      if (this.checked) {
        mapper.showLayerOnMap(x.id);
      } else {
        mapper.hideLayerOnMap(x.id);
      }
    });
  }

  // set listener for button to drop layer
  if (HTMLWidgets.shinyMode) {
    removeLayerFromMapButton.addEventListener("click", function () {
      mapper.hideLayerOnMap(x.id);
      mapper.hideLayerOnMenu(x.id);
    });
  }

  // return element
  return el;
};


/***/ },

/***/ "./srcjs/modules/utils/element.js"
/*!****************************************!*\
  !*** ./srcjs/modules/utils/element.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTooltip: () => (/* binding */ addTooltip),
/* harmony export */   createHandle: () => (/* binding */ createHandle),
/* harmony export */   createHoverSelect: () => (/* binding */ createHoverSelect),
/* harmony export */   createNameLabel: () => (/* binding */ createNameLabel),
/* harmony export */   createProvenance: () => (/* binding */ createProvenance),
/* harmony export */   createSwitches: () => (/* binding */ createSwitches)
/* harmony export */ });
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

/**
 * Create hover select button.
 * @param {Array<options>} options - Array of options.
 * @param {string} options.color -Option color.
 * @param {string} options.text - Option color.
 * @param {string} options.value -Option value.
 * @param {string} selectedOptionValue - Default option value.
 * @return {HTMLElement}
 */
function createHoverSelect(options, selectedOptionValue) {
  // process options
  let selectedOption =
    options.find(option => option.value === selectedOptionValue);
  let longestOption =
    options.reduce((a, b) => a.text.length > b.text.length ? a : b);
  // if selectedOption is invalid, then throw error
  if (selectedOption === undefined) {
    console.error("createHoverSelect: selectedOptionValue not valid.")
  }
  // initialize element
  let el = document.createElement("div");
  el.classList.add("hover-select");
  el.setAttribute("data-value", selectedOption.value);
  // create button
  let button = document.createElement("button");
  button.classList.add("select-button");
  button.style.backgroundColor = selectedOption.color;
  // create element to specify button text
  let text = document.createElement("span");
  text.classList.add("select-button-text");
  text.innerText = selectedOption.text;
  button.appendChild(text);
  // create dummy element to ensure button width remains constant when
  // different options are selected
  let span = document.createElement("span");
  span.classList.add("select-button-spacer");
  span.innerText = longestOption.text;
  button.appendChild(span);
  // create elements for options
  let ul = document.createElement("ul");
  ul.classList.add("select-options");
  for (let i = 0; i < options.length; ++i) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.innerText = options[i].text;
    a.setAttribute("data-option", options[i].value);
    a.setAttribute("data-color", options[i].color);
    a.classList.add("select-option");
    li.appendChild(a);
    ul.appendChild(li);
  }
  // add event listener to options
  ul.addEventListener("click", function(event) {
    let elem = event.target;
    if (elem.matches(".select-option")) {
      button.children[0].innerText = elem.innerText;
      el.setAttribute("data-value", elem.getAttribute("data-option"));
      button.style.backgroundColor = elem.getAttribute("data-color");
    }
  });
  // return element
  el.appendChild(button);
  el.appendChild(ul);
  return el;
}


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
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./srcjs/widgets/mapper.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_mapper_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/mapper/class.js */ "./srcjs/modules/mapper/class.js");


HTMLWidgets.widget({
  name: "mapper",
  type: "output",
  factory: function(el, width, height) {
    // shared variables
    var elementId = el.id;
    var initialized = false;
    var handle = new _modules_mapper_class_js__WEBPACK_IMPORTED_MODULE_0__.Mapper();

    return {
      renderValue: function(opts) {

        // alias this
        let that = this;
        let element = document.getElementById(elementId);

        // if needed, initialize widget
        if (!initialized) {
          // set state to initialized
          initialized = true;
          // attach the widget to the DOM
          element.widget = that;
          // initialize map manager
          handle.initialize(
            elementId, opts.mapId, opts.project, opts.maxLayers
          );
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
        // add layer to mapper
        handle.addLayer(params.value);
        // since R code is used to update the map, so updateMap = false
        handle.showLayerOnMenu(
          params.value.id, true, params.endPosition, false
        );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsd0NBQXdDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUZBQW1GO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ04sR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxXQUFXO0FBQ3pCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QixlQUFlLGNBQWM7QUFDN0IsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGFBQWE7QUFDekIsWUFBWSwwQkFBMEI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLGFBQWE7QUFDekIsWUFBWSw0QkFBNEI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksb0NBQW9DO0FBQ2hEO0FBQ0E7QUFDQSx5RUFBeUUsYUFBYTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0EsdUVBQXVFO0FBQ3ZFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsV0FBVyxhQUFhO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osa0NBQWtDO0FBQ2xDLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsOEJBQThCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7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RUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Fwc2NwLy4vc3JjanMvbW9kdWxlcy9tYXBwZXIvY3NzL2NhdGVnb3JpY2FsLWxlZ2VuZC5jc3M/NGRkYiIsIndlYnBhY2s6Ly9hcHNjcC8uL3NyY2pzL21vZHVsZXMvbWFwcGVyL2Nzcy9jb250aW51b3VzLWxlZ2VuZC5jc3M/MmE4MiIsIndlYnBhY2s6Ly9hcHNjcC8uL3NyY2pzL21vZHVsZXMvbWFwcGVyL2Nzcy9zdHlsZS5jc3M/OGJjYiIsIndlYnBhY2s6Ly9hcHNjcC8uL25vZGVfbW9kdWxlcy9zb3J0YWJsZWpzL21vZHVsYXIvc29ydGFibGUuZXNtLmpzIiwid2VicGFjazovL2Fwc2NwLy4vc3JjanMvbW9kdWxlcy9tYXBwZXIvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vYXBzY3AvLi9zcmNqcy9tb2R1bGVzL21hcHBlci9jcmVhdGUtbGVnZW5kLmpzIiwid2VicGFjazovL2Fwc2NwLy4vc3JjanMvbW9kdWxlcy9tYXBwZXIvY3JlYXRlLW1lbnUtaXRlbS5qcyIsIndlYnBhY2s6Ly9hcHNjcC8uL3NyY2pzL21vZHVsZXMvdXRpbHMvZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9hcHNjcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hcHNjcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXBzY3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hcHNjcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Fwc2NwLy4vc3JjanMvd2lkZ2V0cy9tYXBwZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyoqIVxuICogU29ydGFibGUgMS4xNS43XG4gKiBAYXV0aG9yXHRSdWJhWGEgICA8dHJhc2hAcnViYXhhLm9yZz5cbiAqIEBhdXRob3JcdG93ZW5tICAgIDxvd2VuMjMzNTVAZ21haWwuY29tPlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KHIsIGEpIHtcbiAgKG51bGwgPT0gYSB8fCBhID4gci5sZW5ndGgpICYmIChhID0gci5sZW5ndGgpO1xuICBmb3IgKHZhciBlID0gMCwgbiA9IEFycmF5KGEpOyBlIDwgYTsgZSsrKSBuW2VdID0gcltlXTtcbiAgcmV0dXJuIG47XG59XG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMocikge1xuICBpZiAoQXJyYXkuaXNBcnJheShyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KHIpO1xufVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KGUsIHIsIHQpIHtcbiAgcmV0dXJuIChyID0gX3RvUHJvcGVydHlLZXkocikpIGluIGUgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwge1xuICAgIHZhbHVlOiB0LFxuICAgIGVudW1lcmFibGU6ICEwLFxuICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgd3JpdGFibGU6ICEwXG4gIH0pIDogZVtyXSA9IHQsIGU7XG59XG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgcmV0dXJuIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKG4pIHtcbiAgICBmb3IgKHZhciBlID0gMTsgZSA8IGFyZ3VtZW50cy5sZW5ndGg7IGUrKykge1xuICAgICAgdmFyIHQgPSBhcmd1bWVudHNbZV07XG4gICAgICBmb3IgKHZhciByIGluIHQpICh7fSkuaGFzT3duUHJvcGVydHkuY2FsbCh0LCByKSAmJiAobltyXSA9IHRbcl0pO1xuICAgIH1cbiAgICByZXR1cm4gbjtcbiAgfSwgX2V4dGVuZHMuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkocikge1xuICBpZiAoXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIG51bGwgIT0gcltTeW1ib2wuaXRlcmF0b3JdIHx8IG51bGwgIT0gcltcIkBAaXRlcmF0b3JcIl0pIHJldHVybiBBcnJheS5mcm9tKHIpO1xufVxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbmZ1bmN0aW9uIG93bktleXMoZSwgcikge1xuICB2YXIgdCA9IE9iamVjdC5rZXlzKGUpO1xuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBvID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtcbiAgICByICYmIChvID0gby5maWx0ZXIoZnVuY3Rpb24gKHIpIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIHIpLmVudW1lcmFibGU7XG4gICAgfSkpLCB0LnB1c2guYXBwbHkodCwgbyk7XG4gIH1cbiAgcmV0dXJuIHQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMihlKSB7XG4gIGZvciAodmFyIHIgPSAxOyByIDwgYXJndW1lbnRzLmxlbmd0aDsgcisrKSB7XG4gICAgdmFyIHQgPSBudWxsICE9IGFyZ3VtZW50c1tyXSA/IGFyZ3VtZW50c1tyXSA6IHt9O1xuICAgIHIgJSAyID8gb3duS2V5cyhPYmplY3QodCksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XG4gICAgICBfZGVmaW5lUHJvcGVydHkoZSwgciwgdFtyXSk7XG4gICAgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHQpKSA6IG93bktleXMoT2JqZWN0KHQpKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LCByKSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGU7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoZSwgdCkge1xuICBpZiAobnVsbCA9PSBlKSByZXR1cm4ge307XG4gIHZhciBvLFxuICAgIHIsXG4gICAgaSA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKGUsIHQpO1xuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBuID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtcbiAgICBmb3IgKHIgPSAwOyByIDwgbi5sZW5ndGg7IHIrKykgbyA9IG5bcl0sIC0xID09PSB0LmluZGV4T2YobykgJiYge30ucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLCBvKSAmJiAoaVtvXSA9IGVbb10pO1xuICB9XG4gIHJldHVybiBpO1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UociwgZSkge1xuICBpZiAobnVsbCA9PSByKSByZXR1cm4ge307XG4gIHZhciB0ID0ge307XG4gIGZvciAodmFyIG4gaW4gcikgaWYgKHt9Lmhhc093blByb3BlcnR5LmNhbGwociwgbikpIHtcbiAgICBpZiAoLTEgIT09IGUuaW5kZXhPZihuKSkgY29udGludWU7XG4gICAgdFtuXSA9IHJbbl07XG4gIH1cbiAgcmV0dXJuIHQ7XG59XG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkocikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKHIpIHx8IF9pdGVyYWJsZVRvQXJyYXkocikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KHIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHtcbiAgaWYgKFwib2JqZWN0XCIgIT0gdHlwZW9mIHQgfHwgIXQpIHJldHVybiB0O1xuICB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgIHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChcIm9iamVjdFwiICE9IHR5cGVvZiBpKSByZXR1cm4gaTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTtcbn1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHtcbiAgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7XG4gIHJldHVybiBcInN5bWJvbFwiID09IHR5cGVvZiBpID8gaSA6IGkgKyBcIlwiO1xufVxuZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgX3R5cGVvZihvKTtcbn1cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShyLCBhKSB7XG4gIGlmIChyKSB7XG4gICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShyLCBhKTtcbiAgICB2YXIgdCA9IHt9LnRvU3RyaW5nLmNhbGwocikuc2xpY2UoOCwgLTEpO1xuICAgIHJldHVybiBcIk9iamVjdFwiID09PSB0ICYmIHIuY29uc3RydWN0b3IgJiYgKHQgPSByLmNvbnN0cnVjdG9yLm5hbWUpLCBcIk1hcFwiID09PSB0IHx8IFwiU2V0XCIgPT09IHQgPyBBcnJheS5mcm9tKHIpIDogXCJBcmd1bWVudHNcIiA9PT0gdCB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdCh0KSA/IF9hcnJheUxpa2VUb0FycmF5KHIsIGEpIDogdm9pZCAwO1xuICB9XG59XG5cbnZhciB2ZXJzaW9uID0gXCIxLjE1LjdcIjtcblxuZnVuY3Rpb24gdXNlckFnZW50KHBhdHRlcm4pIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5uYXZpZ2F0b3IpIHtcbiAgICByZXR1cm4gISEgLypAX19QVVJFX18qL25hdmlnYXRvci51c2VyQWdlbnQubWF0Y2gocGF0dGVybik7XG4gIH1cbn1cbnZhciBJRTExT3JMZXNzID0gdXNlckFnZW50KC8oPzpUcmlkZW50LipydlsgOl0/MTFcXC58bXNpZXxpZW1vYmlsZXxXaW5kb3dzIFBob25lKS9pKTtcbnZhciBFZGdlID0gdXNlckFnZW50KC9FZGdlL2kpO1xudmFyIEZpcmVGb3ggPSB1c2VyQWdlbnQoL2ZpcmVmb3gvaSk7XG52YXIgU2FmYXJpID0gdXNlckFnZW50KC9zYWZhcmkvaSkgJiYgIXVzZXJBZ2VudCgvY2hyb21lL2kpICYmICF1c2VyQWdlbnQoL2FuZHJvaWQvaSk7XG52YXIgSU9TID0gdXNlckFnZW50KC9pUChhZHxvZHxob25lKS9pKTtcbnZhciBDaHJvbWVGb3JBbmRyb2lkID0gdXNlckFnZW50KC9jaHJvbWUvaSkgJiYgdXNlckFnZW50KC9hbmRyb2lkL2kpO1xuXG52YXIgY2FwdHVyZU1vZGUgPSB7XG4gIGNhcHR1cmU6IGZhbHNlLFxuICBwYXNzaXZlOiBmYWxzZVxufTtcbmZ1bmN0aW9uIG9uKGVsLCBldmVudCwgZm4pIHtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZm4sICFJRTExT3JMZXNzICYmIGNhcHR1cmVNb2RlKTtcbn1cbmZ1bmN0aW9uIG9mZihlbCwgZXZlbnQsIGZuKSB7XG4gIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGZuLCAhSUUxMU9yTGVzcyAmJiBjYXB0dXJlTW9kZSk7XG59XG5mdW5jdGlvbiBtYXRjaGVzKCAvKipIVE1MRWxlbWVudCovZWwsIC8qKlN0cmluZyovc2VsZWN0b3IpIHtcbiAgaWYgKCFzZWxlY3RvcikgcmV0dXJuO1xuICBzZWxlY3RvclswXSA9PT0gJz4nICYmIChzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cmluZygxKSk7XG4gIGlmIChlbCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoZWwubWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gZWwubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgICB9IGVsc2UgaWYgKGVsLm1zTWF0Y2hlc1NlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBlbC5tc01hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICB9IGVsc2UgaWYgKGVsLndlYmtpdE1hdGNoZXNTZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGdldFBhcmVudE9ySG9zdChlbCkge1xuICByZXR1cm4gZWwuaG9zdCAmJiBlbCAhPT0gZG9jdW1lbnQgJiYgZWwuaG9zdC5ub2RlVHlwZSAmJiBlbC5ob3N0ICE9PSBlbCA/IGVsLmhvc3QgOiBlbC5wYXJlbnROb2RlO1xufVxuZnVuY3Rpb24gY2xvc2VzdCggLyoqSFRNTEVsZW1lbnQqL2VsLCAvKipTdHJpbmcqL3NlbGVjdG9yLCAvKipIVE1MRWxlbWVudCovY3R4LCBpbmNsdWRlQ1RYKSB7XG4gIGlmIChlbCkge1xuICAgIGN0eCA9IGN0eCB8fCBkb2N1bWVudDtcbiAgICBkbyB7XG4gICAgICBpZiAoc2VsZWN0b3IgIT0gbnVsbCAmJiAoc2VsZWN0b3JbMF0gPT09ICc+JyA/IGVsLnBhcmVudE5vZGUgPT09IGN0eCAmJiBtYXRjaGVzKGVsLCBzZWxlY3RvcikgOiBtYXRjaGVzKGVsLCBzZWxlY3RvcikpIHx8IGluY2x1ZGVDVFggJiYgZWwgPT09IGN0eCkge1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgICBpZiAoZWwgPT09IGN0eCkgYnJlYWs7XG4gICAgICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG4gICAgfSB3aGlsZSAoZWwgPSBnZXRQYXJlbnRPckhvc3QoZWwpKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbnZhciBSX1NQQUNFID0gL1xccysvZztcbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsLCBuYW1lLCBzdGF0ZSkge1xuICBpZiAoZWwgJiYgbmFtZSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgIGVsLmNsYXNzTGlzdFtzdGF0ZSA/ICdhZGQnIDogJ3JlbW92ZSddKG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gKCcgJyArIGVsLmNsYXNzTmFtZSArICcgJykucmVwbGFjZShSX1NQQUNFLCAnICcpLnJlcGxhY2UoJyAnICsgbmFtZSArICcgJywgJyAnKTtcbiAgICAgIGVsLmNsYXNzTmFtZSA9IChjbGFzc05hbWUgKyAoc3RhdGUgPyAnICcgKyBuYW1lIDogJycpKS5yZXBsYWNlKFJfU1BBQ0UsICcgJyk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBjc3MoZWwsIHByb3AsIHZhbCkge1xuICB2YXIgc3R5bGUgPSBlbCAmJiBlbC5zdHlsZTtcbiAgaWYgKHN0eWxlKSB7XG4gICAgaWYgKHZhbCA9PT0gdm9pZCAwKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuZGVmYXVsdFZpZXcgJiYgZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuICAgICAgICB2YWwgPSBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGVsLCAnJyk7XG4gICAgICB9IGVsc2UgaWYgKGVsLmN1cnJlbnRTdHlsZSkge1xuICAgICAgICB2YWwgPSBlbC5jdXJyZW50U3R5bGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvcCA9PT0gdm9pZCAwID8gdmFsIDogdmFsW3Byb3BdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIShwcm9wIGluIHN0eWxlKSAmJiBwcm9wLmluZGV4T2YoJ3dlYmtpdCcpID09PSAtMSkge1xuICAgICAgICBwcm9wID0gJy13ZWJraXQtJyArIHByb3A7XG4gICAgICB9XG4gICAgICBzdHlsZVtwcm9wXSA9IHZhbCArICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/ICcnIDogJ3B4Jyk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBtYXRyaXgoZWwsIHNlbGZPbmx5KSB7XG4gIHZhciBhcHBsaWVkVHJhbnNmb3JtcyA9ICcnO1xuICBpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJykge1xuICAgIGFwcGxpZWRUcmFuc2Zvcm1zID0gZWw7XG4gIH0gZWxzZSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRyYW5zZm9ybSA9IGNzcyhlbCwgJ3RyYW5zZm9ybScpO1xuICAgICAgaWYgKHRyYW5zZm9ybSAmJiB0cmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgICAgICBhcHBsaWVkVHJhbnNmb3JtcyA9IHRyYW5zZm9ybSArICcgJyArIGFwcGxpZWRUcmFuc2Zvcm1zO1xuICAgICAgfVxuICAgICAgLyoganNoaW50IGJvc3M6dHJ1ZSAqL1xuICAgIH0gd2hpbGUgKCFzZWxmT25seSAmJiAoZWwgPSBlbC5wYXJlbnROb2RlKSk7XG4gIH1cbiAgdmFyIG1hdHJpeEZuID0gd2luZG93LkRPTU1hdHJpeCB8fCB3aW5kb3cuV2ViS2l0Q1NTTWF0cml4IHx8IHdpbmRvdy5DU1NNYXRyaXggfHwgd2luZG93Lk1TQ1NTTWF0cml4O1xuICAvKmpzaGludCAtVzA1NiAqL1xuICByZXR1cm4gbWF0cml4Rm4gJiYgbmV3IG1hdHJpeEZuKGFwcGxpZWRUcmFuc2Zvcm1zKTtcbn1cbmZ1bmN0aW9uIGZpbmQoY3R4LCB0YWdOYW1lLCBpdGVyYXRvcikge1xuICBpZiAoY3R4KSB7XG4gICAgdmFyIGxpc3QgPSBjdHguZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnTmFtZSksXG4gICAgICBpID0gMCxcbiAgICAgIG4gPSBsaXN0Lmxlbmd0aDtcbiAgICBpZiAoaXRlcmF0b3IpIHtcbiAgICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIGl0ZXJhdG9yKGxpc3RbaV0sIGkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGlzdDtcbiAgfVxuICByZXR1cm4gW107XG59XG5mdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCkge1xuICB2YXIgc2Nyb2xsaW5nRWxlbWVudCA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQ7XG4gIGlmIChzY3JvbGxpbmdFbGVtZW50KSB7XG4gICAgcmV0dXJuIHNjcm9sbGluZ0VsZW1lbnQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxufVxuXG4vKipcclxuICogUmV0dXJucyB0aGUgXCJib3VuZGluZyBjbGllbnQgcmVjdFwiIG9mIGdpdmVuIGVsZW1lbnRcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsICAgICAgICAgICAgICAgICAgICAgICBUaGUgZWxlbWVudCB3aG9zZSBib3VuZGluZ0NsaWVudFJlY3QgaXMgd2FudGVkXHJcbiAqIEBwYXJhbSAge1tCb29sZWFuXX0gcmVsYXRpdmVUb0NvbnRhaW5pbmdCbG9jayAgV2hldGhlciB0aGUgcmVjdCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGNvbnRhaW5pbmcgYmxvY2sgb2YgKGluY2x1ZGluZykgdGhlIGNvbnRhaW5lclxyXG4gKiBAcGFyYW0gIHtbQm9vbGVhbl19IHJlbGF0aXZlVG9Ob25TdGF0aWNQYXJlbnQgIFdoZXRoZXIgdGhlIHJlY3Qgc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSByZWxhdGl2ZSBwYXJlbnQgb2YgKGluY2x1ZGluZykgdGhlIGNvbnRhaWVuclxyXG4gKiBAcGFyYW0gIHtbQm9vbGVhbl19IHVuZG9TY2FsZSAgICAgICAgICAgICAgICAgIFdoZXRoZXIgdGhlIGNvbnRhaW5lcidzIHNjYWxlKCkgc2hvdWxkIGJlIHVuZG9uZVxyXG4gKiBAcGFyYW0gIHtbSFRNTEVsZW1lbnRdfSBjb250YWluZXIgICAgICAgICAgICAgIFRoZSBwYXJlbnQgdGhlIGVsZW1lbnQgd2lsbCBiZSBwbGFjZWQgaW5cclxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgYm91bmRpbmdDbGllbnRSZWN0IG9mIGVsLCB3aXRoIHNwZWNpZmllZCBhZGp1c3RtZW50c1xyXG4gKi9cbmZ1bmN0aW9uIGdldFJlY3QoZWwsIHJlbGF0aXZlVG9Db250YWluaW5nQmxvY2ssIHJlbGF0aXZlVG9Ob25TdGF0aWNQYXJlbnQsIHVuZG9TY2FsZSwgY29udGFpbmVyKSB7XG4gIGlmICghZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICYmIGVsICE9PSB3aW5kb3cpIHJldHVybjtcbiAgdmFyIGVsUmVjdCwgdG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0LCBoZWlnaHQsIHdpZHRoO1xuICBpZiAoZWwgIT09IHdpbmRvdyAmJiBlbC5wYXJlbnROb2RlICYmIGVsICE9PSBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCkpIHtcbiAgICBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0b3AgPSBlbFJlY3QudG9wO1xuICAgIGxlZnQgPSBlbFJlY3QubGVmdDtcbiAgICBib3R0b20gPSBlbFJlY3QuYm90dG9tO1xuICAgIHJpZ2h0ID0gZWxSZWN0LnJpZ2h0O1xuICAgIGhlaWdodCA9IGVsUmVjdC5oZWlnaHQ7XG4gICAgd2lkdGggPSBlbFJlY3Qud2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgdG9wID0gMDtcbiAgICBsZWZ0ID0gMDtcbiAgICBib3R0b20gPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgcmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgfVxuICBpZiAoKHJlbGF0aXZlVG9Db250YWluaW5nQmxvY2sgfHwgcmVsYXRpdmVUb05vblN0YXRpY1BhcmVudCkgJiYgZWwgIT09IHdpbmRvdykge1xuICAgIC8vIEFkanVzdCBmb3IgdHJhbnNsYXRlKClcbiAgICBjb250YWluZXIgPSBjb250YWluZXIgfHwgZWwucGFyZW50Tm9kZTtcblxuICAgIC8vIHNvbHZlcyAjMTEyMyAoc2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzc5NTM4MDYvNjA4ODMxMilcbiAgICAvLyBOb3QgbmVlZGVkIG9uIDw9IElFMTFcbiAgICBpZiAoIUlFMTFPckxlc3MpIHtcbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKGNvbnRhaW5lciAmJiBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICYmIChjc3MoY29udGFpbmVyLCAndHJhbnNmb3JtJykgIT09ICdub25lJyB8fCByZWxhdGl2ZVRvTm9uU3RhdGljUGFyZW50ICYmIGNzcyhjb250YWluZXIsICdwb3NpdGlvbicpICE9PSAnc3RhdGljJykpIHtcbiAgICAgICAgICB2YXIgY29udGFpbmVyUmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgIC8vIFNldCByZWxhdGl2ZSB0byBlZGdlcyBvZiBwYWRkaW5nIGJveCBvZiBjb250YWluZXJcbiAgICAgICAgICB0b3AgLT0gY29udGFpbmVyUmVjdC50b3AgKyBwYXJzZUludChjc3MoY29udGFpbmVyLCAnYm9yZGVyLXRvcC13aWR0aCcpKTtcbiAgICAgICAgICBsZWZ0IC09IGNvbnRhaW5lclJlY3QubGVmdCArIHBhcnNlSW50KGNzcyhjb250YWluZXIsICdib3JkZXItbGVmdC13aWR0aCcpKTtcbiAgICAgICAgICBib3R0b20gPSB0b3AgKyBlbFJlY3QuaGVpZ2h0O1xuICAgICAgICAgIHJpZ2h0ID0gbGVmdCArIGVsUmVjdC53aWR0aDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG4gICAgICB9IHdoaWxlIChjb250YWluZXIgPSBjb250YWluZXIucGFyZW50Tm9kZSk7XG4gICAgfVxuICB9XG4gIGlmICh1bmRvU2NhbGUgJiYgZWwgIT09IHdpbmRvdykge1xuICAgIC8vIEFkanVzdCBmb3Igc2NhbGUoKVxuICAgIHZhciBlbE1hdHJpeCA9IG1hdHJpeChjb250YWluZXIgfHwgZWwpLFxuICAgICAgc2NhbGVYID0gZWxNYXRyaXggJiYgZWxNYXRyaXguYSxcbiAgICAgIHNjYWxlWSA9IGVsTWF0cml4ICYmIGVsTWF0cml4LmQ7XG4gICAgaWYgKGVsTWF0cml4KSB7XG4gICAgICB0b3AgLz0gc2NhbGVZO1xuICAgICAgbGVmdCAvPSBzY2FsZVg7XG4gICAgICB3aWR0aCAvPSBzY2FsZVg7XG4gICAgICBoZWlnaHQgLz0gc2NhbGVZO1xuICAgICAgYm90dG9tID0gdG9wICsgaGVpZ2h0O1xuICAgICAgcmlnaHQgPSBsZWZ0ICsgd2lkdGg7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgdG9wOiB0b3AsXG4gICAgbGVmdDogbGVmdCxcbiAgICBib3R0b206IGJvdHRvbSxcbiAgICByaWdodDogcmlnaHQsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0XG4gIH07XG59XG5cbi8qKlxyXG4gKiBDaGVja3MgaWYgYSBzaWRlIG9mIGFuIGVsZW1lbnQgaXMgc2Nyb2xsZWQgcGFzdCBhIHNpZGUgb2YgaXRzIHBhcmVudHNcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9ICBlbCAgICAgICAgICAgVGhlIGVsZW1lbnQgd2hvJ3Mgc2lkZSBiZWluZyBzY3JvbGxlZCBvdXQgb2YgdmlldyBpcyBpbiBxdWVzdGlvblxyXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgIGVsU2lkZSAgICAgICBTaWRlIG9mIHRoZSBlbGVtZW50IGluIHF1ZXN0aW9uICgndG9wJywgJ2xlZnQnLCAncmlnaHQnLCAnYm90dG9tJylcclxuICogQHBhcmFtICB7U3RyaW5nfSAgICAgICBwYXJlbnRTaWRlICAgU2lkZSBvZiB0aGUgcGFyZW50IGluIHF1ZXN0aW9uICgndG9wJywgJ2xlZnQnLCAncmlnaHQnLCAnYm90dG9tJylcclxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9ICAgICAgICAgICAgICAgVGhlIHBhcmVudCBzY3JvbGwgZWxlbWVudCB0aGF0IHRoZSBlbCdzIHNpZGUgaXMgc2Nyb2xsZWQgcGFzdCwgb3IgbnVsbCBpZiB0aGVyZSBpcyBubyBzdWNoIGVsZW1lbnRcclxuICovXG5mdW5jdGlvbiBpc1Njcm9sbGVkUGFzdChlbCwgZWxTaWRlLCBwYXJlbnRTaWRlKSB7XG4gIHZhciBwYXJlbnQgPSBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChlbCwgdHJ1ZSksXG4gICAgZWxTaWRlVmFsID0gZ2V0UmVjdChlbClbZWxTaWRlXTtcblxuICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG4gIHdoaWxlIChwYXJlbnQpIHtcbiAgICB2YXIgcGFyZW50U2lkZVZhbCA9IGdldFJlY3QocGFyZW50KVtwYXJlbnRTaWRlXSxcbiAgICAgIHZpc2libGUgPSB2b2lkIDA7XG4gICAgaWYgKHBhcmVudFNpZGUgPT09ICd0b3AnIHx8IHBhcmVudFNpZGUgPT09ICdsZWZ0Jykge1xuICAgICAgdmlzaWJsZSA9IGVsU2lkZVZhbCA+PSBwYXJlbnRTaWRlVmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aXNpYmxlID0gZWxTaWRlVmFsIDw9IHBhcmVudFNpZGVWYWw7XG4gICAgfVxuICAgIGlmICghdmlzaWJsZSkgcmV0dXJuIHBhcmVudDtcbiAgICBpZiAocGFyZW50ID09PSBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCkpIGJyZWFrO1xuICAgIHBhcmVudCA9IGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KHBhcmVudCwgZmFsc2UpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXHJcbiAqIEdldHMgbnRoIGNoaWxkIG9mIGVsLCBpZ25vcmluZyBoaWRkZW4gY2hpbGRyZW4sIHNvcnRhYmxlJ3MgZWxlbWVudHMgKGRvZXMgbm90IGlnbm9yZSBjbG9uZSBpZiBpdCdzIHZpc2libGUpXHJcbiAqIGFuZCBub24tZHJhZ2dhYmxlIGVsZW1lbnRzXHJcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbCAgICAgICBUaGUgcGFyZW50IGVsZW1lbnRcclxuICogQHBhcmFtICB7TnVtYmVyfSBjaGlsZE51bSAgICAgIFRoZSBpbmRleCBvZiB0aGUgY2hpbGRcclxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zICAgICAgIFBhcmVudCBTb3J0YWJsZSdzIG9wdGlvbnNcclxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9ICAgICAgICAgIFRoZSBjaGlsZCBhdCBpbmRleCBjaGlsZE51bSwgb3IgbnVsbCBpZiBub3QgZm91bmRcclxuICovXG5mdW5jdGlvbiBnZXRDaGlsZChlbCwgY2hpbGROdW0sIG9wdGlvbnMsIGluY2x1ZGVEcmFnRWwpIHtcbiAgdmFyIGN1cnJlbnRDaGlsZCA9IDAsXG4gICAgaSA9IDAsXG4gICAgY2hpbGRyZW4gPSBlbC5jaGlsZHJlbjtcbiAgd2hpbGUgKGkgPCBjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICBpZiAoY2hpbGRyZW5baV0uc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnICYmIGNoaWxkcmVuW2ldICE9PSBTb3J0YWJsZS5naG9zdCAmJiAoaW5jbHVkZURyYWdFbCB8fCBjaGlsZHJlbltpXSAhPT0gU29ydGFibGUuZHJhZ2dlZCkgJiYgY2xvc2VzdChjaGlsZHJlbltpXSwgb3B0aW9ucy5kcmFnZ2FibGUsIGVsLCBmYWxzZSkpIHtcbiAgICAgIGlmIChjdXJyZW50Q2hpbGQgPT09IGNoaWxkTnVtKSB7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbltpXTtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnRDaGlsZCsrO1xuICAgIH1cbiAgICBpKys7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxyXG4gKiBHZXRzIHRoZSBsYXN0IGNoaWxkIGluIHRoZSBlbCwgaWdub3JpbmcgZ2hvc3RFbCBvciBpbnZpc2libGUgZWxlbWVudHMgKGNsb25lcylcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsICAgICAgIFBhcmVudCBlbGVtZW50XHJcbiAqIEBwYXJhbSAge3NlbGVjdG9yfSBzZWxlY3RvciAgICBBbnkgb3RoZXIgZWxlbWVudHMgdGhhdCBzaG91bGQgYmUgaWdub3JlZFxyXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gICAgICAgICAgVGhlIGxhc3QgY2hpbGQsIGlnbm9yaW5nIGdob3N0RWxcclxuICovXG5mdW5jdGlvbiBsYXN0Q2hpbGQoZWwsIHNlbGVjdG9yKSB7XG4gIHZhciBsYXN0ID0gZWwubGFzdEVsZW1lbnRDaGlsZDtcbiAgd2hpbGUgKGxhc3QgJiYgKGxhc3QgPT09IFNvcnRhYmxlLmdob3N0IHx8IGNzcyhsYXN0LCAnZGlzcGxheScpID09PSAnbm9uZScgfHwgc2VsZWN0b3IgJiYgIW1hdGNoZXMobGFzdCwgc2VsZWN0b3IpKSkge1xuICAgIGxhc3QgPSBsYXN0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gIH1cbiAgcmV0dXJuIGxhc3QgfHwgbnVsbDtcbn1cblxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGluZGV4IG9mIGFuIGVsZW1lbnQgd2l0aGluIGl0cyBwYXJlbnQgZm9yIGEgc2VsZWN0ZWQgc2V0IG9mXHJcbiAqIGVsZW1lbnRzXHJcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbFxyXG4gKiBAcGFyYW0gIHtzZWxlY3Rvcn0gc2VsZWN0b3JcclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cbmZ1bmN0aW9uIGluZGV4KGVsLCBzZWxlY3Rvcikge1xuICB2YXIgaW5kZXggPSAwO1xuICBpZiAoIWVsIHx8ICFlbC5wYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgLyoganNoaW50IGJvc3M6dHJ1ZSAqL1xuICB3aGlsZSAoZWwgPSBlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XG4gICAgaWYgKGVsLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgIT09ICdURU1QTEFURScgJiYgZWwgIT09IFNvcnRhYmxlLmNsb25lICYmICghc2VsZWN0b3IgfHwgbWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSkge1xuICAgICAgaW5kZXgrKztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGluZGV4O1xufVxuXG4vKipcclxuICogUmV0dXJucyB0aGUgc2Nyb2xsIG9mZnNldCBvZiB0aGUgZ2l2ZW4gZWxlbWVudCwgYWRkZWQgd2l0aCBhbGwgdGhlIHNjcm9sbCBvZmZzZXRzIG9mIHBhcmVudCBlbGVtZW50cy5cclxuICogVGhlIHZhbHVlIGlzIHJldHVybmVkIGluIHJlYWwgcGl4ZWxzLlxyXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWxcclxuICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgICAgIE9mZnNldHMgaW4gdGhlIGZvcm1hdCBvZiBbbGVmdCwgdG9wXVxyXG4gKi9cbmZ1bmN0aW9uIGdldFJlbGF0aXZlU2Nyb2xsT2Zmc2V0KGVsKSB7XG4gIHZhciBvZmZzZXRMZWZ0ID0gMCxcbiAgICBvZmZzZXRUb3AgPSAwLFxuICAgIHdpblNjcm9sbGVyID0gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpO1xuICBpZiAoZWwpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgZWxNYXRyaXggPSBtYXRyaXgoZWwpLFxuICAgICAgICBzY2FsZVggPSBlbE1hdHJpeC5hLFxuICAgICAgICBzY2FsZVkgPSBlbE1hdHJpeC5kO1xuICAgICAgb2Zmc2V0TGVmdCArPSBlbC5zY3JvbGxMZWZ0ICogc2NhbGVYO1xuICAgICAgb2Zmc2V0VG9wICs9IGVsLnNjcm9sbFRvcCAqIHNjYWxlWTtcbiAgICB9IHdoaWxlIChlbCAhPT0gd2luU2Nyb2xsZXIgJiYgKGVsID0gZWwucGFyZW50Tm9kZSkpO1xuICB9XG4gIHJldHVybiBbb2Zmc2V0TGVmdCwgb2Zmc2V0VG9wXTtcbn1cblxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBvYmplY3Qgd2l0aGluIHRoZSBnaXZlbiBhcnJheVxyXG4gKiBAcGFyYW0gIHtBcnJheX0gYXJyICAgQXJyYXkgdGhhdCBtYXkgb3IgbWF5IG5vdCBob2xkIHRoZSBvYmplY3RcclxuICogQHBhcmFtICB7T2JqZWN0fSBvYmogIEFuIG9iamVjdCB0aGF0IGhhcyBhIGtleS12YWx1ZSBwYWlyIHVuaXF1ZSB0byBhbmQgaWRlbnRpY2FsIHRvIGEga2V5LXZhbHVlIHBhaXIgaW4gdGhlIG9iamVjdCB5b3Ugd2FudCB0byBmaW5kXHJcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICBUaGUgaW5kZXggb2YgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXksIG9yIC0xXHJcbiAqL1xuZnVuY3Rpb24gaW5kZXhPZk9iamVjdChhcnIsIG9iaikge1xuICBmb3IgKHZhciBpIGluIGFycikge1xuICAgIGlmICghYXJyLmhhc093blByb3BlcnR5KGkpKSBjb250aW51ZTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkgJiYgb2JqW2tleV0gPT09IGFycltpXVtrZXldKSByZXR1cm4gTnVtYmVyKGkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5mdW5jdGlvbiBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChlbCwgaW5jbHVkZVNlbGYpIHtcbiAgLy8gc2tpcCB0byB3aW5kb3dcbiAgaWYgKCFlbCB8fCAhZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSByZXR1cm4gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpO1xuICB2YXIgZWxlbSA9IGVsO1xuICB2YXIgZ290U2VsZiA9IGZhbHNlO1xuICBkbyB7XG4gICAgLy8gd2UgZG9uJ3QgbmVlZCB0byBnZXQgZWxlbSBjc3MgaWYgaXQgaXNuJ3QgZXZlbiBvdmVyZmxvd2luZyBpbiB0aGUgZmlyc3QgcGxhY2UgKHBlcmZvcm1hbmNlKVxuICAgIGlmIChlbGVtLmNsaWVudFdpZHRoIDwgZWxlbS5zY3JvbGxXaWR0aCB8fCBlbGVtLmNsaWVudEhlaWdodCA8IGVsZW0uc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICB2YXIgZWxlbUNTUyA9IGNzcyhlbGVtKTtcbiAgICAgIGlmIChlbGVtLmNsaWVudFdpZHRoIDwgZWxlbS5zY3JvbGxXaWR0aCAmJiAoZWxlbUNTUy5vdmVyZmxvd1ggPT0gJ2F1dG8nIHx8IGVsZW1DU1Mub3ZlcmZsb3dYID09ICdzY3JvbGwnKSB8fCBlbGVtLmNsaWVudEhlaWdodCA8IGVsZW0uc2Nyb2xsSGVpZ2h0ICYmIChlbGVtQ1NTLm92ZXJmbG93WSA9PSAnYXV0bycgfHwgZWxlbUNTUy5vdmVyZmxvd1kgPT0gJ3Njcm9sbCcpKSB7XG4gICAgICAgIGlmICghZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgfHwgZWxlbSA9PT0gZG9jdW1lbnQuYm9keSkgcmV0dXJuIGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKTtcbiAgICAgICAgaWYgKGdvdFNlbGYgfHwgaW5jbHVkZVNlbGYpIHJldHVybiBlbGVtO1xuICAgICAgICBnb3RTZWxmID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoganNoaW50IGJvc3M6dHJ1ZSAqL1xuICB9IHdoaWxlIChlbGVtID0gZWxlbS5wYXJlbnROb2RlKTtcbiAgcmV0dXJuIGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKTtcbn1cbmZ1bmN0aW9uIGV4dGVuZChkc3QsIHNyYykge1xuICBpZiAoZHN0ICYmIHNyYykge1xuICAgIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBkc3Rba2V5XSA9IHNyY1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZHN0O1xufVxuZnVuY3Rpb24gaXNSZWN0RXF1YWwocmVjdDEsIHJlY3QyKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKHJlY3QxLnRvcCkgPT09IE1hdGgucm91bmQocmVjdDIudG9wKSAmJiBNYXRoLnJvdW5kKHJlY3QxLmxlZnQpID09PSBNYXRoLnJvdW5kKHJlY3QyLmxlZnQpICYmIE1hdGgucm91bmQocmVjdDEuaGVpZ2h0KSA9PT0gTWF0aC5yb3VuZChyZWN0Mi5oZWlnaHQpICYmIE1hdGgucm91bmQocmVjdDEud2lkdGgpID09PSBNYXRoLnJvdW5kKHJlY3QyLndpZHRoKTtcbn1cbnZhciBfdGhyb3R0bGVUaW1lb3V0O1xuZnVuY3Rpb24gdGhyb3R0bGUoY2FsbGJhY2ssIG1zKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFfdGhyb3R0bGVUaW1lb3V0KSB7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgX3RoaXMgPSB0aGlzO1xuICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwoX3RoaXMsIGFyZ3NbMF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2suYXBwbHkoX3RoaXMsIGFyZ3MpO1xuICAgICAgfVxuICAgICAgX3Rocm90dGxlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhyb3R0bGVUaW1lb3V0ID0gdm9pZCAwO1xuICAgICAgfSwgbXMpO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGNhbmNlbFRocm90dGxlKCkge1xuICBjbGVhclRpbWVvdXQoX3Rocm90dGxlVGltZW91dCk7XG4gIF90aHJvdHRsZVRpbWVvdXQgPSB2b2lkIDA7XG59XG5mdW5jdGlvbiBzY3JvbGxCeShlbCwgeCwgeSkge1xuICBlbC5zY3JvbGxMZWZ0ICs9IHg7XG4gIGVsLnNjcm9sbFRvcCArPSB5O1xufVxuZnVuY3Rpb24gY2xvbmUoZWwpIHtcbiAgdmFyIFBvbHltZXIgPSB3aW5kb3cuUG9seW1lcjtcbiAgdmFyICQgPSB3aW5kb3cualF1ZXJ5IHx8IHdpbmRvdy5aZXB0bztcbiAgaWYgKFBvbHltZXIgJiYgUG9seW1lci5kb20pIHtcbiAgICByZXR1cm4gUG9seW1lci5kb20oZWwpLmNsb25lTm9kZSh0cnVlKTtcbiAgfSBlbHNlIGlmICgkKSB7XG4gICAgcmV0dXJuICQoZWwpLmNsb25lKHRydWUpWzBdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlbC5jbG9uZU5vZGUodHJ1ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHNldFJlY3QoZWwsIHJlY3QpIHtcbiAgY3NzKGVsLCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgY3NzKGVsLCAndG9wJywgcmVjdC50b3ApO1xuICBjc3MoZWwsICdsZWZ0JywgcmVjdC5sZWZ0KTtcbiAgY3NzKGVsLCAnd2lkdGgnLCByZWN0LndpZHRoKTtcbiAgY3NzKGVsLCAnaGVpZ2h0JywgcmVjdC5oZWlnaHQpO1xufVxuZnVuY3Rpb24gdW5zZXRSZWN0KGVsKSB7XG4gIGNzcyhlbCwgJ3Bvc2l0aW9uJywgJycpO1xuICBjc3MoZWwsICd0b3AnLCAnJyk7XG4gIGNzcyhlbCwgJ2xlZnQnLCAnJyk7XG4gIGNzcyhlbCwgJ3dpZHRoJywgJycpO1xuICBjc3MoZWwsICdoZWlnaHQnLCAnJyk7XG59XG5mdW5jdGlvbiBnZXRDaGlsZENvbnRhaW5pbmdSZWN0RnJvbUVsZW1lbnQoY29udGFpbmVyLCBvcHRpb25zLCBnaG9zdEVsKSB7XG4gIHZhciByZWN0ID0ge307XG4gIEFycmF5LmZyb20oY29udGFpbmVyLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHZhciBfcmVjdCRsZWZ0LCBfcmVjdCR0b3AsIF9yZWN0JHJpZ2h0LCBfcmVjdCRib3R0b207XG4gICAgaWYgKCFjbG9zZXN0KGNoaWxkLCBvcHRpb25zLmRyYWdnYWJsZSwgY29udGFpbmVyLCBmYWxzZSkgfHwgY2hpbGQuYW5pbWF0ZWQgfHwgY2hpbGQgPT09IGdob3N0RWwpIHJldHVybjtcbiAgICB2YXIgY2hpbGRSZWN0ID0gZ2V0UmVjdChjaGlsZCk7XG4gICAgcmVjdC5sZWZ0ID0gTWF0aC5taW4oKF9yZWN0JGxlZnQgPSByZWN0LmxlZnQpICE9PSBudWxsICYmIF9yZWN0JGxlZnQgIT09IHZvaWQgMCA/IF9yZWN0JGxlZnQgOiBJbmZpbml0eSwgY2hpbGRSZWN0LmxlZnQpO1xuICAgIHJlY3QudG9wID0gTWF0aC5taW4oKF9yZWN0JHRvcCA9IHJlY3QudG9wKSAhPT0gbnVsbCAmJiBfcmVjdCR0b3AgIT09IHZvaWQgMCA/IF9yZWN0JHRvcCA6IEluZmluaXR5LCBjaGlsZFJlY3QudG9wKTtcbiAgICByZWN0LnJpZ2h0ID0gTWF0aC5tYXgoKF9yZWN0JHJpZ2h0ID0gcmVjdC5yaWdodCkgIT09IG51bGwgJiYgX3JlY3QkcmlnaHQgIT09IHZvaWQgMCA/IF9yZWN0JHJpZ2h0IDogLUluZmluaXR5LCBjaGlsZFJlY3QucmlnaHQpO1xuICAgIHJlY3QuYm90dG9tID0gTWF0aC5tYXgoKF9yZWN0JGJvdHRvbSA9IHJlY3QuYm90dG9tKSAhPT0gbnVsbCAmJiBfcmVjdCRib3R0b20gIT09IHZvaWQgMCA/IF9yZWN0JGJvdHRvbSA6IC1JbmZpbml0eSwgY2hpbGRSZWN0LmJvdHRvbSk7XG4gIH0pO1xuICByZWN0LndpZHRoID0gcmVjdC5yaWdodCAtIHJlY3QubGVmdDtcbiAgcmVjdC5oZWlnaHQgPSByZWN0LmJvdHRvbSAtIHJlY3QudG9wO1xuICByZWN0LnggPSByZWN0LmxlZnQ7XG4gIHJlY3QueSA9IHJlY3QudG9wO1xuICByZXR1cm4gcmVjdDtcbn1cbnZhciBleHBhbmRvID0gJ1NvcnRhYmxlJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG5mdW5jdGlvbiBBbmltYXRpb25TdGF0ZU1hbmFnZXIoKSB7XG4gIHZhciBhbmltYXRpb25TdGF0ZXMgPSBbXSxcbiAgICBhbmltYXRpb25DYWxsYmFja0lkO1xuICByZXR1cm4ge1xuICAgIGNhcHR1cmVBbmltYXRpb25TdGF0ZTogZnVuY3Rpb24gY2FwdHVyZUFuaW1hdGlvblN0YXRlKCkge1xuICAgICAgYW5pbWF0aW9uU3RhdGVzID0gW107XG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5hbmltYXRpb24pIHJldHVybjtcbiAgICAgIHZhciBjaGlsZHJlbiA9IFtdLnNsaWNlLmNhbGwodGhpcy5lbC5jaGlsZHJlbik7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoY3NzKGNoaWxkLCAnZGlzcGxheScpID09PSAnbm9uZScgfHwgY2hpbGQgPT09IFNvcnRhYmxlLmdob3N0KSByZXR1cm47XG4gICAgICAgIGFuaW1hdGlvblN0YXRlcy5wdXNoKHtcbiAgICAgICAgICB0YXJnZXQ6IGNoaWxkLFxuICAgICAgICAgIHJlY3Q6IGdldFJlY3QoY2hpbGQpXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgZnJvbVJlY3QgPSBfb2JqZWN0U3ByZWFkMih7fSwgYW5pbWF0aW9uU3RhdGVzW2FuaW1hdGlvblN0YXRlcy5sZW5ndGggLSAxXS5yZWN0KTtcblxuICAgICAgICAvLyBJZiBhbmltYXRpbmc6IGNvbXBlbnNhdGUgZm9yIGN1cnJlbnQgYW5pbWF0aW9uXG4gICAgICAgIGlmIChjaGlsZC50aGlzQW5pbWF0aW9uRHVyYXRpb24pIHtcbiAgICAgICAgICB2YXIgY2hpbGRNYXRyaXggPSBtYXRyaXgoY2hpbGQsIHRydWUpO1xuICAgICAgICAgIGlmIChjaGlsZE1hdHJpeCkge1xuICAgICAgICAgICAgZnJvbVJlY3QudG9wIC09IGNoaWxkTWF0cml4LmY7XG4gICAgICAgICAgICBmcm9tUmVjdC5sZWZ0IC09IGNoaWxkTWF0cml4LmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNoaWxkLmZyb21SZWN0ID0gZnJvbVJlY3Q7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGFkZEFuaW1hdGlvblN0YXRlOiBmdW5jdGlvbiBhZGRBbmltYXRpb25TdGF0ZShzdGF0ZSkge1xuICAgICAgYW5pbWF0aW9uU3RhdGVzLnB1c2goc3RhdGUpO1xuICAgIH0sXG4gICAgcmVtb3ZlQW5pbWF0aW9uU3RhdGU6IGZ1bmN0aW9uIHJlbW92ZUFuaW1hdGlvblN0YXRlKHRhcmdldCkge1xuICAgICAgYW5pbWF0aW9uU3RhdGVzLnNwbGljZShpbmRleE9mT2JqZWN0KGFuaW1hdGlvblN0YXRlcywge1xuICAgICAgICB0YXJnZXQ6IHRhcmdldFxuICAgICAgfSksIDEpO1xuICAgIH0sXG4gICAgYW5pbWF0ZUFsbDogZnVuY3Rpb24gYW5pbWF0ZUFsbChjYWxsYmFjaykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIGlmICghdGhpcy5vcHRpb25zLmFuaW1hdGlvbikge1xuICAgICAgICBjbGVhclRpbWVvdXQoYW5pbWF0aW9uQ2FsbGJhY2tJZCk7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBhbmltYXRpbmcgPSBmYWxzZSxcbiAgICAgICAgYW5pbWF0aW9uVGltZSA9IDA7XG4gICAgICBhbmltYXRpb25TdGF0ZXMuZm9yRWFjaChmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIHRpbWUgPSAwLFxuICAgICAgICAgIHRhcmdldCA9IHN0YXRlLnRhcmdldCxcbiAgICAgICAgICBmcm9tUmVjdCA9IHRhcmdldC5mcm9tUmVjdCxcbiAgICAgICAgICB0b1JlY3QgPSBnZXRSZWN0KHRhcmdldCksXG4gICAgICAgICAgcHJldkZyb21SZWN0ID0gdGFyZ2V0LnByZXZGcm9tUmVjdCxcbiAgICAgICAgICBwcmV2VG9SZWN0ID0gdGFyZ2V0LnByZXZUb1JlY3QsXG4gICAgICAgICAgYW5pbWF0aW5nUmVjdCA9IHN0YXRlLnJlY3QsXG4gICAgICAgICAgdGFyZ2V0TWF0cml4ID0gbWF0cml4KHRhcmdldCwgdHJ1ZSk7XG4gICAgICAgIGlmICh0YXJnZXRNYXRyaXgpIHtcbiAgICAgICAgICAvLyBDb21wZW5zYXRlIGZvciBjdXJyZW50IGFuaW1hdGlvblxuICAgICAgICAgIHRvUmVjdC50b3AgLT0gdGFyZ2V0TWF0cml4LmY7XG4gICAgICAgICAgdG9SZWN0LmxlZnQgLT0gdGFyZ2V0TWF0cml4LmU7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0LnRvUmVjdCA9IHRvUmVjdDtcbiAgICAgICAgaWYgKHRhcmdldC50aGlzQW5pbWF0aW9uRHVyYXRpb24pIHtcbiAgICAgICAgICAvLyBDb3VsZCBhbHNvIGNoZWNrIGlmIGFuaW1hdGluZ1JlY3QgaXMgYmV0d2VlbiBmcm9tUmVjdCBhbmQgdG9SZWN0XG4gICAgICAgICAgaWYgKGlzUmVjdEVxdWFsKHByZXZGcm9tUmVjdCwgdG9SZWN0KSAmJiAhaXNSZWN0RXF1YWwoZnJvbVJlY3QsIHRvUmVjdCkgJiZcbiAgICAgICAgICAvLyBNYWtlIHN1cmUgYW5pbWF0aW5nUmVjdCBpcyBvbiBsaW5lIGJldHdlZW4gdG9SZWN0ICYgZnJvbVJlY3RcbiAgICAgICAgICAoYW5pbWF0aW5nUmVjdC50b3AgLSB0b1JlY3QudG9wKSAvIChhbmltYXRpbmdSZWN0LmxlZnQgLSB0b1JlY3QubGVmdCkgPT09IChmcm9tUmVjdC50b3AgLSB0b1JlY3QudG9wKSAvIChmcm9tUmVjdC5sZWZ0IC0gdG9SZWN0LmxlZnQpKSB7XG4gICAgICAgICAgICAvLyBJZiByZXR1cm5pbmcgdG8gc2FtZSBwbGFjZSBhcyBzdGFydGVkIGZyb20gYW5pbWF0aW9uIGFuZCBvbiBzYW1lIGF4aXNcbiAgICAgICAgICAgIHRpbWUgPSBjYWxjdWxhdGVSZWFsVGltZShhbmltYXRpbmdSZWN0LCBwcmV2RnJvbVJlY3QsIHByZXZUb1JlY3QsIF90aGlzLm9wdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGZyb21SZWN0ICE9IHRvUmVjdDogYW5pbWF0ZVxuICAgICAgICBpZiAoIWlzUmVjdEVxdWFsKHRvUmVjdCwgZnJvbVJlY3QpKSB7XG4gICAgICAgICAgdGFyZ2V0LnByZXZGcm9tUmVjdCA9IGZyb21SZWN0O1xuICAgICAgICAgIHRhcmdldC5wcmV2VG9SZWN0ID0gdG9SZWN0O1xuICAgICAgICAgIGlmICghdGltZSkge1xuICAgICAgICAgICAgdGltZSA9IF90aGlzLm9wdGlvbnMuYW5pbWF0aW9uO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfdGhpcy5hbmltYXRlKHRhcmdldCwgYW5pbWF0aW5nUmVjdCwgdG9SZWN0LCB0aW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGltZSkge1xuICAgICAgICAgIGFuaW1hdGluZyA9IHRydWU7XG4gICAgICAgICAgYW5pbWF0aW9uVGltZSA9IE1hdGgubWF4KGFuaW1hdGlvblRpbWUsIHRpbWUpO1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0YXJnZXQuYW5pbWF0aW9uUmVzZXRUaW1lcik7XG4gICAgICAgICAgdGFyZ2V0LmFuaW1hdGlvblJlc2V0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRhcmdldC5hbmltYXRpb25UaW1lID0gMDtcbiAgICAgICAgICAgIHRhcmdldC5wcmV2RnJvbVJlY3QgPSBudWxsO1xuICAgICAgICAgICAgdGFyZ2V0LmZyb21SZWN0ID0gbnVsbDtcbiAgICAgICAgICAgIHRhcmdldC5wcmV2VG9SZWN0ID0gbnVsbDtcbiAgICAgICAgICAgIHRhcmdldC50aGlzQW5pbWF0aW9uRHVyYXRpb24gPSBudWxsO1xuICAgICAgICAgIH0sIHRpbWUpO1xuICAgICAgICAgIHRhcmdldC50aGlzQW5pbWF0aW9uRHVyYXRpb24gPSB0aW1lO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNsZWFyVGltZW91dChhbmltYXRpb25DYWxsYmFja0lkKTtcbiAgICAgIGlmICghYW5pbWF0aW5nKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbmltYXRpb25DYWxsYmFja0lkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soKTtcbiAgICAgICAgfSwgYW5pbWF0aW9uVGltZSk7XG4gICAgICB9XG4gICAgICBhbmltYXRpb25TdGF0ZXMgPSBbXTtcbiAgICB9LFxuICAgIGFuaW1hdGU6IGZ1bmN0aW9uIGFuaW1hdGUodGFyZ2V0LCBjdXJyZW50UmVjdCwgdG9SZWN0LCBkdXJhdGlvbikge1xuICAgICAgaWYgKGR1cmF0aW9uKSB7XG4gICAgICAgIGNzcyh0YXJnZXQsICd0cmFuc2l0aW9uJywgJycpO1xuICAgICAgICBjc3ModGFyZ2V0LCAndHJhbnNmb3JtJywgJycpO1xuICAgICAgICB2YXIgZWxNYXRyaXggPSBtYXRyaXgodGhpcy5lbCksXG4gICAgICAgICAgc2NhbGVYID0gZWxNYXRyaXggJiYgZWxNYXRyaXguYSxcbiAgICAgICAgICBzY2FsZVkgPSBlbE1hdHJpeCAmJiBlbE1hdHJpeC5kLFxuICAgICAgICAgIHRyYW5zbGF0ZVggPSAoY3VycmVudFJlY3QubGVmdCAtIHRvUmVjdC5sZWZ0KSAvIChzY2FsZVggfHwgMSksXG4gICAgICAgICAgdHJhbnNsYXRlWSA9IChjdXJyZW50UmVjdC50b3AgLSB0b1JlY3QudG9wKSAvIChzY2FsZVkgfHwgMSk7XG4gICAgICAgIHRhcmdldC5hbmltYXRpbmdYID0gISF0cmFuc2xhdGVYO1xuICAgICAgICB0YXJnZXQuYW5pbWF0aW5nWSA9ICEhdHJhbnNsYXRlWTtcbiAgICAgICAgY3NzKHRhcmdldCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgnICsgdHJhbnNsYXRlWCArICdweCwnICsgdHJhbnNsYXRlWSArICdweCwwKScpO1xuICAgICAgICB0aGlzLmZvclJlcGFpbnREdW1teSA9IHJlcGFpbnQodGFyZ2V0KTsgLy8gcmVwYWludFxuXG4gICAgICAgIGNzcyh0YXJnZXQsICd0cmFuc2l0aW9uJywgJ3RyYW5zZm9ybSAnICsgZHVyYXRpb24gKyAnbXMnICsgKHRoaXMub3B0aW9ucy5lYXNpbmcgPyAnICcgKyB0aGlzLm9wdGlvbnMuZWFzaW5nIDogJycpKTtcbiAgICAgICAgY3NzKHRhcmdldCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgwLDAsMCknKTtcbiAgICAgICAgdHlwZW9mIHRhcmdldC5hbmltYXRlZCA9PT0gJ251bWJlcicgJiYgY2xlYXJUaW1lb3V0KHRhcmdldC5hbmltYXRlZCk7XG4gICAgICAgIHRhcmdldC5hbmltYXRlZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNzcyh0YXJnZXQsICd0cmFuc2l0aW9uJywgJycpO1xuICAgICAgICAgIGNzcyh0YXJnZXQsICd0cmFuc2Zvcm0nLCAnJyk7XG4gICAgICAgICAgdGFyZ2V0LmFuaW1hdGVkID0gZmFsc2U7XG4gICAgICAgICAgdGFyZ2V0LmFuaW1hdGluZ1ggPSBmYWxzZTtcbiAgICAgICAgICB0YXJnZXQuYW5pbWF0aW5nWSA9IGZhbHNlO1xuICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gcmVwYWludCh0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldC5vZmZzZXRXaWR0aDtcbn1cbmZ1bmN0aW9uIGNhbGN1bGF0ZVJlYWxUaW1lKGFuaW1hdGluZ1JlY3QsIGZyb21SZWN0LCB0b1JlY3QsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhmcm9tUmVjdC50b3AgLSBhbmltYXRpbmdSZWN0LnRvcCwgMikgKyBNYXRoLnBvdyhmcm9tUmVjdC5sZWZ0IC0gYW5pbWF0aW5nUmVjdC5sZWZ0LCAyKSkgLyBNYXRoLnNxcnQoTWF0aC5wb3coZnJvbVJlY3QudG9wIC0gdG9SZWN0LnRvcCwgMikgKyBNYXRoLnBvdyhmcm9tUmVjdC5sZWZ0IC0gdG9SZWN0LmxlZnQsIDIpKSAqIG9wdGlvbnMuYW5pbWF0aW9uO1xufVxuXG52YXIgcGx1Z2lucyA9IFtdO1xudmFyIGRlZmF1bHRzID0ge1xuICBpbml0aWFsaXplQnlEZWZhdWx0OiB0cnVlXG59O1xudmFyIFBsdWdpbk1hbmFnZXIgPSB7XG4gIG1vdW50OiBmdW5jdGlvbiBtb3VudChwbHVnaW4pIHtcbiAgICAvLyBTZXQgZGVmYXVsdCBzdGF0aWMgcHJvcGVydGllc1xuICAgIGZvciAodmFyIG9wdGlvbiBpbiBkZWZhdWx0cykge1xuICAgICAgaWYgKGRlZmF1bHRzLmhhc093blByb3BlcnR5KG9wdGlvbikgJiYgIShvcHRpb24gaW4gcGx1Z2luKSkge1xuICAgICAgICBwbHVnaW5bb3B0aW9uXSA9IGRlZmF1bHRzW29wdGlvbl07XG4gICAgICB9XG4gICAgfVxuICAgIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgaWYgKHAucGx1Z2luTmFtZSA9PT0gcGx1Z2luLnBsdWdpbk5hbWUpIHtcbiAgICAgICAgdGhyb3cgXCJTb3J0YWJsZTogQ2Fubm90IG1vdW50IHBsdWdpbiBcIi5jb25jYXQocGx1Z2luLnBsdWdpbk5hbWUsIFwiIG1vcmUgdGhhbiBvbmNlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHBsdWdpbnMucHVzaChwbHVnaW4pO1xuICB9LFxuICBwbHVnaW5FdmVudDogZnVuY3Rpb24gcGx1Z2luRXZlbnQoZXZlbnROYW1lLCBzb3J0YWJsZSwgZXZ0KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB0aGlzLmV2ZW50Q2FuY2VsZWQgPSBmYWxzZTtcbiAgICBldnQuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuZXZlbnRDYW5jZWxlZCA9IHRydWU7XG4gICAgfTtcbiAgICB2YXIgZXZlbnROYW1lR2xvYmFsID0gZXZlbnROYW1lICsgJ0dsb2JhbCc7XG4gICAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgIGlmICghc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdKSByZXR1cm47XG4gICAgICAvLyBGaXJlIGdsb2JhbCBldmVudHMgaWYgaXQgZXhpc3RzIGluIHRoaXMgc29ydGFibGVcbiAgICAgIGlmIChzb3J0YWJsZVtwbHVnaW4ucGx1Z2luTmFtZV1bZXZlbnROYW1lR2xvYmFsXSkge1xuICAgICAgICBzb3J0YWJsZVtwbHVnaW4ucGx1Z2luTmFtZV1bZXZlbnROYW1lR2xvYmFsXShfb2JqZWN0U3ByZWFkMih7XG4gICAgICAgICAgc29ydGFibGU6IHNvcnRhYmxlXG4gICAgICAgIH0sIGV2dCkpO1xuICAgICAgfVxuXG4gICAgICAvLyBPbmx5IGZpcmUgcGx1Z2luIGV2ZW50IGlmIHBsdWdpbiBpcyBlbmFibGVkIGluIHRoaXMgc29ydGFibGUsXG4gICAgICAvLyBhbmQgcGx1Z2luIGhhcyBldmVudCBkZWZpbmVkXG4gICAgICBpZiAoc29ydGFibGUub3B0aW9uc1twbHVnaW4ucGx1Z2luTmFtZV0gJiYgc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdW2V2ZW50TmFtZV0oX29iamVjdFNwcmVhZDIoe1xuICAgICAgICAgIHNvcnRhYmxlOiBzb3J0YWJsZVxuICAgICAgICB9LCBldnQpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgaW5pdGlhbGl6ZVBsdWdpbnM6IGZ1bmN0aW9uIGluaXRpYWxpemVQbHVnaW5zKHNvcnRhYmxlLCBlbCwgZGVmYXVsdHMsIG9wdGlvbnMpIHtcbiAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgdmFyIHBsdWdpbk5hbWUgPSBwbHVnaW4ucGx1Z2luTmFtZTtcbiAgICAgIGlmICghc29ydGFibGUub3B0aW9uc1twbHVnaW5OYW1lXSAmJiAhcGx1Z2luLmluaXRpYWxpemVCeURlZmF1bHQpIHJldHVybjtcbiAgICAgIHZhciBpbml0aWFsaXplZCA9IG5ldyBwbHVnaW4oc29ydGFibGUsIGVsLCBzb3J0YWJsZS5vcHRpb25zKTtcbiAgICAgIGluaXRpYWxpemVkLnNvcnRhYmxlID0gc29ydGFibGU7XG4gICAgICBpbml0aWFsaXplZC5vcHRpb25zID0gc29ydGFibGUub3B0aW9ucztcbiAgICAgIHNvcnRhYmxlW3BsdWdpbk5hbWVdID0gaW5pdGlhbGl6ZWQ7XG5cbiAgICAgIC8vIEFkZCBkZWZhdWx0IG9wdGlvbnMgZnJvbSBwbHVnaW5cbiAgICAgIF9leHRlbmRzKGRlZmF1bHRzLCBpbml0aWFsaXplZC5kZWZhdWx0cyk7XG4gICAgfSk7XG4gICAgZm9yICh2YXIgb3B0aW9uIGluIHNvcnRhYmxlLm9wdGlvbnMpIHtcbiAgICAgIGlmICghc29ydGFibGUub3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShvcHRpb24pKSBjb250aW51ZTtcbiAgICAgIHZhciBtb2RpZmllZCA9IHRoaXMubW9kaWZ5T3B0aW9uKHNvcnRhYmxlLCBvcHRpb24sIHNvcnRhYmxlLm9wdGlvbnNbb3B0aW9uXSk7XG4gICAgICBpZiAodHlwZW9mIG1vZGlmaWVkICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzb3J0YWJsZS5vcHRpb25zW29wdGlvbl0gPSBtb2RpZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGdldEV2ZW50UHJvcGVydGllczogZnVuY3Rpb24gZ2V0RXZlbnRQcm9wZXJ0aWVzKG5hbWUsIHNvcnRhYmxlKSB7XG4gICAgdmFyIGV2ZW50UHJvcGVydGllcyA9IHt9O1xuICAgIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICBpZiAodHlwZW9mIHBsdWdpbi5ldmVudFByb3BlcnRpZXMgIT09ICdmdW5jdGlvbicpIHJldHVybjtcbiAgICAgIF9leHRlbmRzKGV2ZW50UHJvcGVydGllcywgcGx1Z2luLmV2ZW50UHJvcGVydGllcy5jYWxsKHNvcnRhYmxlW3BsdWdpbi5wbHVnaW5OYW1lXSwgbmFtZSkpO1xuICAgIH0pO1xuICAgIHJldHVybiBldmVudFByb3BlcnRpZXM7XG4gIH0sXG4gIG1vZGlmeU9wdGlvbjogZnVuY3Rpb24gbW9kaWZ5T3B0aW9uKHNvcnRhYmxlLCBuYW1lLCB2YWx1ZSkge1xuICAgIHZhciBtb2RpZmllZFZhbHVlO1xuICAgIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICAvLyBQbHVnaW4gbXVzdCBleGlzdCBvbiB0aGUgU29ydGFibGVcbiAgICAgIGlmICghc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdKSByZXR1cm47XG5cbiAgICAgIC8vIElmIHN0YXRpYyBvcHRpb24gbGlzdGVuZXIgZXhpc3RzIGZvciB0aGlzIG9wdGlvbiwgY2FsbCBpbiB0aGUgY29udGV4dCBvZiB0aGUgU29ydGFibGUncyBpbnN0YW5jZSBvZiB0aGlzIHBsdWdpblxuICAgICAgaWYgKHBsdWdpbi5vcHRpb25MaXN0ZW5lcnMgJiYgdHlwZW9mIHBsdWdpbi5vcHRpb25MaXN0ZW5lcnNbbmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbW9kaWZpZWRWYWx1ZSA9IHBsdWdpbi5vcHRpb25MaXN0ZW5lcnNbbmFtZV0uY2FsbChzb3J0YWJsZVtwbHVnaW4ucGx1Z2luTmFtZV0sIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbW9kaWZpZWRWYWx1ZTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChfcmVmKSB7XG4gIHZhciBzb3J0YWJsZSA9IF9yZWYuc29ydGFibGUsXG4gICAgcm9vdEVsID0gX3JlZi5yb290RWwsXG4gICAgbmFtZSA9IF9yZWYubmFtZSxcbiAgICB0YXJnZXRFbCA9IF9yZWYudGFyZ2V0RWwsXG4gICAgY2xvbmVFbCA9IF9yZWYuY2xvbmVFbCxcbiAgICB0b0VsID0gX3JlZi50b0VsLFxuICAgIGZyb21FbCA9IF9yZWYuZnJvbUVsLFxuICAgIG9sZEluZGV4ID0gX3JlZi5vbGRJbmRleCxcbiAgICBuZXdJbmRleCA9IF9yZWYubmV3SW5kZXgsXG4gICAgb2xkRHJhZ2dhYmxlSW5kZXggPSBfcmVmLm9sZERyYWdnYWJsZUluZGV4LFxuICAgIG5ld0RyYWdnYWJsZUluZGV4ID0gX3JlZi5uZXdEcmFnZ2FibGVJbmRleCxcbiAgICBvcmlnaW5hbEV2ZW50ID0gX3JlZi5vcmlnaW5hbEV2ZW50LFxuICAgIHB1dFNvcnRhYmxlID0gX3JlZi5wdXRTb3J0YWJsZSxcbiAgICBleHRyYUV2ZW50UHJvcGVydGllcyA9IF9yZWYuZXh0cmFFdmVudFByb3BlcnRpZXM7XG4gIHNvcnRhYmxlID0gc29ydGFibGUgfHwgcm9vdEVsICYmIHJvb3RFbFtleHBhbmRvXTtcbiAgaWYgKCFzb3J0YWJsZSkgcmV0dXJuO1xuICB2YXIgZXZ0LFxuICAgIG9wdGlvbnMgPSBzb3J0YWJsZS5vcHRpb25zLFxuICAgIG9uTmFtZSA9ICdvbicgKyBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zdWJzdHIoMSk7XG4gIC8vIFN1cHBvcnQgZm9yIG5ldyBDdXN0b21FdmVudCBmZWF0dXJlXG4gIGlmICh3aW5kb3cuQ3VzdG9tRXZlbnQgJiYgIUlFMTFPckxlc3MgJiYgIUVkZ2UpIHtcbiAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBldnQuaW5pdEV2ZW50KG5hbWUsIHRydWUsIHRydWUpO1xuICB9XG4gIGV2dC50byA9IHRvRWwgfHwgcm9vdEVsO1xuICBldnQuZnJvbSA9IGZyb21FbCB8fCByb290RWw7XG4gIGV2dC5pdGVtID0gdGFyZ2V0RWwgfHwgcm9vdEVsO1xuICBldnQuY2xvbmUgPSBjbG9uZUVsO1xuICBldnQub2xkSW5kZXggPSBvbGRJbmRleDtcbiAgZXZ0Lm5ld0luZGV4ID0gbmV3SW5kZXg7XG4gIGV2dC5vbGREcmFnZ2FibGVJbmRleCA9IG9sZERyYWdnYWJsZUluZGV4O1xuICBldnQubmV3RHJhZ2dhYmxlSW5kZXggPSBuZXdEcmFnZ2FibGVJbmRleDtcbiAgZXZ0Lm9yaWdpbmFsRXZlbnQgPSBvcmlnaW5hbEV2ZW50O1xuICBldnQucHVsbE1vZGUgPSBwdXRTb3J0YWJsZSA/IHB1dFNvcnRhYmxlLmxhc3RQdXRNb2RlIDogdW5kZWZpbmVkO1xuICB2YXIgYWxsRXZlbnRQcm9wZXJ0aWVzID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGV4dHJhRXZlbnRQcm9wZXJ0aWVzKSwgUGx1Z2luTWFuYWdlci5nZXRFdmVudFByb3BlcnRpZXMobmFtZSwgc29ydGFibGUpKTtcbiAgZm9yICh2YXIgb3B0aW9uIGluIGFsbEV2ZW50UHJvcGVydGllcykge1xuICAgIGV2dFtvcHRpb25dID0gYWxsRXZlbnRQcm9wZXJ0aWVzW29wdGlvbl07XG4gIH1cbiAgaWYgKHJvb3RFbCkge1xuICAgIHJvb3RFbC5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gIH1cbiAgaWYgKG9wdGlvbnNbb25OYW1lXSkge1xuICAgIG9wdGlvbnNbb25OYW1lXS5jYWxsKHNvcnRhYmxlLCBldnQpO1xuICB9XG59XG5cbnZhciBfZXhjbHVkZWQgPSBbXCJldnRcIl07XG52YXIgcGx1Z2luRXZlbnQgPSBmdW5jdGlvbiBwbHVnaW5FdmVudChldmVudE5hbWUsIHNvcnRhYmxlKSB7XG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fSxcbiAgICBvcmlnaW5hbEV2ZW50ID0gX3JlZi5ldnQsXG4gICAgZGF0YSA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBfZXhjbHVkZWQpO1xuICBQbHVnaW5NYW5hZ2VyLnBsdWdpbkV2ZW50LmJpbmQoU29ydGFibGUpKGV2ZW50TmFtZSwgc29ydGFibGUsIF9vYmplY3RTcHJlYWQyKHtcbiAgICBkcmFnRWw6IGRyYWdFbCxcbiAgICBwYXJlbnRFbDogcGFyZW50RWwsXG4gICAgZ2hvc3RFbDogZ2hvc3RFbCxcbiAgICByb290RWw6IHJvb3RFbCxcbiAgICBuZXh0RWw6IG5leHRFbCxcbiAgICBsYXN0RG93bkVsOiBsYXN0RG93bkVsLFxuICAgIGNsb25lRWw6IGNsb25lRWwsXG4gICAgY2xvbmVIaWRkZW46IGNsb25lSGlkZGVuLFxuICAgIGRyYWdTdGFydGVkOiBtb3ZlZCxcbiAgICBwdXRTb3J0YWJsZTogcHV0U29ydGFibGUsXG4gICAgYWN0aXZlU29ydGFibGU6IFNvcnRhYmxlLmFjdGl2ZSxcbiAgICBvcmlnaW5hbEV2ZW50OiBvcmlnaW5hbEV2ZW50LFxuICAgIG9sZEluZGV4OiBvbGRJbmRleCxcbiAgICBvbGREcmFnZ2FibGVJbmRleDogb2xkRHJhZ2dhYmxlSW5kZXgsXG4gICAgbmV3SW5kZXg6IG5ld0luZGV4LFxuICAgIG5ld0RyYWdnYWJsZUluZGV4OiBuZXdEcmFnZ2FibGVJbmRleCxcbiAgICBoaWRlR2hvc3RGb3JUYXJnZXQ6IF9oaWRlR2hvc3RGb3JUYXJnZXQsXG4gICAgdW5oaWRlR2hvc3RGb3JUYXJnZXQ6IF91bmhpZGVHaG9zdEZvclRhcmdldCxcbiAgICBjbG9uZU5vd0hpZGRlbjogZnVuY3Rpb24gY2xvbmVOb3dIaWRkZW4oKSB7XG4gICAgICBjbG9uZUhpZGRlbiA9IHRydWU7XG4gICAgfSxcbiAgICBjbG9uZU5vd1Nob3duOiBmdW5jdGlvbiBjbG9uZU5vd1Nob3duKCkge1xuICAgICAgY2xvbmVIaWRkZW4gPSBmYWxzZTtcbiAgICB9LFxuICAgIGRpc3BhdGNoU29ydGFibGVFdmVudDogZnVuY3Rpb24gZGlzcGF0Y2hTb3J0YWJsZUV2ZW50KG5hbWUpIHtcbiAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgc29ydGFibGU6IHNvcnRhYmxlLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBvcmlnaW5hbEV2ZW50OiBvcmlnaW5hbEV2ZW50XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIGRhdGEpKTtcbn07XG5mdW5jdGlvbiBfZGlzcGF0Y2hFdmVudChpbmZvKSB7XG4gIGRpc3BhdGNoRXZlbnQoX29iamVjdFNwcmVhZDIoe1xuICAgIHB1dFNvcnRhYmxlOiBwdXRTb3J0YWJsZSxcbiAgICBjbG9uZUVsOiBjbG9uZUVsLFxuICAgIHRhcmdldEVsOiBkcmFnRWwsXG4gICAgcm9vdEVsOiByb290RWwsXG4gICAgb2xkSW5kZXg6IG9sZEluZGV4LFxuICAgIG9sZERyYWdnYWJsZUluZGV4OiBvbGREcmFnZ2FibGVJbmRleCxcbiAgICBuZXdJbmRleDogbmV3SW5kZXgsXG4gICAgbmV3RHJhZ2dhYmxlSW5kZXg6IG5ld0RyYWdnYWJsZUluZGV4XG4gIH0sIGluZm8pKTtcbn1cbnZhciBkcmFnRWwsXG4gIHBhcmVudEVsLFxuICBnaG9zdEVsLFxuICByb290RWwsXG4gIG5leHRFbCxcbiAgbGFzdERvd25FbCxcbiAgY2xvbmVFbCxcbiAgY2xvbmVIaWRkZW4sXG4gIG9sZEluZGV4LFxuICBuZXdJbmRleCxcbiAgb2xkRHJhZ2dhYmxlSW5kZXgsXG4gIG5ld0RyYWdnYWJsZUluZGV4LFxuICBhY3RpdmVHcm91cCxcbiAgcHV0U29ydGFibGUsXG4gIGF3YWl0aW5nRHJhZ1N0YXJ0ZWQgPSBmYWxzZSxcbiAgaWdub3JlTmV4dENsaWNrID0gZmFsc2UsXG4gIHNvcnRhYmxlcyA9IFtdLFxuICB0YXBFdnQsXG4gIHRvdWNoRXZ0LFxuICBsYXN0RHgsXG4gIGxhc3REeSxcbiAgdGFwRGlzdGFuY2VMZWZ0LFxuICB0YXBEaXN0YW5jZVRvcCxcbiAgbW92ZWQsXG4gIGxhc3RUYXJnZXQsXG4gIGxhc3REaXJlY3Rpb24sXG4gIHBhc3RGaXJzdEludmVydFRocmVzaCA9IGZhbHNlLFxuICBpc0NpcmN1bXN0YW50aWFsSW52ZXJ0ID0gZmFsc2UsXG4gIHRhcmdldE1vdmVEaXN0YW5jZSxcbiAgLy8gRm9yIHBvc2l0aW9uaW5nIGdob3N0IGFic29sdXRlbHlcbiAgZ2hvc3RSZWxhdGl2ZVBhcmVudCxcbiAgZ2hvc3RSZWxhdGl2ZVBhcmVudEluaXRpYWxTY3JvbGwgPSBbXSxcbiAgLy8gKGxlZnQsIHRvcClcblxuICBfc2lsZW50ID0gZmFsc2UsXG4gIHNhdmVkSW5wdXRDaGVja2VkID0gW107XG5cbi8qKiBAY29uc3QgKi9cbnZhciBkb2N1bWVudEV4aXN0cyA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcsXG4gIFBvc2l0aW9uR2hvc3RBYnNvbHV0ZWx5ID0gSU9TLFxuICBDU1NGbG9hdFByb3BlcnR5ID0gRWRnZSB8fCBJRTExT3JMZXNzID8gJ2Nzc0Zsb2F0JyA6ICdmbG9hdCcsXG4gIC8vIFRoaXMgd2lsbCBub3QgcGFzcyBmb3IgSUU5LCBiZWNhdXNlIElFOSBEbkQgb25seSB3b3JrcyBvbiBhbmNob3JzXG4gIHN1cHBvcnREcmFnZ2FibGUgPSBkb2N1bWVudEV4aXN0cyAmJiAhQ2hyb21lRm9yQW5kcm9pZCAmJiAhSU9TICYmICdkcmFnZ2FibGUnIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICBzdXBwb3J0Q3NzUG9pbnRlckV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWRvY3VtZW50RXhpc3RzKSByZXR1cm47XG4gICAgLy8gZmFsc2Ugd2hlbiA8PSBJRTExXG4gICAgaWYgKElFMTFPckxlc3MpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgneCcpO1xuICAgIGVsLnN0eWxlLmNzc1RleHQgPSAncG9pbnRlci1ldmVudHM6YXV0byc7XG4gICAgcmV0dXJuIGVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPT09ICdhdXRvJztcbiAgfSgpLFxuICBfZGV0ZWN0RGlyZWN0aW9uID0gZnVuY3Rpb24gX2RldGVjdERpcmVjdGlvbihlbCwgb3B0aW9ucykge1xuICAgIHZhciBlbENTUyA9IGNzcyhlbCksXG4gICAgICBlbFdpZHRoID0gcGFyc2VJbnQoZWxDU1Mud2lkdGgpIC0gcGFyc2VJbnQoZWxDU1MucGFkZGluZ0xlZnQpIC0gcGFyc2VJbnQoZWxDU1MucGFkZGluZ1JpZ2h0KSAtIHBhcnNlSW50KGVsQ1NTLmJvcmRlckxlZnRXaWR0aCkgLSBwYXJzZUludChlbENTUy5ib3JkZXJSaWdodFdpZHRoKSxcbiAgICAgIGNoaWxkMSA9IGdldENoaWxkKGVsLCAwLCBvcHRpb25zKSxcbiAgICAgIGNoaWxkMiA9IGdldENoaWxkKGVsLCAxLCBvcHRpb25zKSxcbiAgICAgIGZpcnN0Q2hpbGRDU1MgPSBjaGlsZDEgJiYgY3NzKGNoaWxkMSksXG4gICAgICBzZWNvbmRDaGlsZENTUyA9IGNoaWxkMiAmJiBjc3MoY2hpbGQyKSxcbiAgICAgIGZpcnN0Q2hpbGRXaWR0aCA9IGZpcnN0Q2hpbGRDU1MgJiYgcGFyc2VJbnQoZmlyc3RDaGlsZENTUy5tYXJnaW5MZWZ0KSArIHBhcnNlSW50KGZpcnN0Q2hpbGRDU1MubWFyZ2luUmlnaHQpICsgZ2V0UmVjdChjaGlsZDEpLndpZHRoLFxuICAgICAgc2Vjb25kQ2hpbGRXaWR0aCA9IHNlY29uZENoaWxkQ1NTICYmIHBhcnNlSW50KHNlY29uZENoaWxkQ1NTLm1hcmdpbkxlZnQpICsgcGFyc2VJbnQoc2Vjb25kQ2hpbGRDU1MubWFyZ2luUmlnaHQpICsgZ2V0UmVjdChjaGlsZDIpLndpZHRoO1xuICAgIGlmIChlbENTUy5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgIHJldHVybiBlbENTUy5mbGV4RGlyZWN0aW9uID09PSAnY29sdW1uJyB8fCBlbENTUy5mbGV4RGlyZWN0aW9uID09PSAnY29sdW1uLXJldmVyc2UnID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICB9XG4gICAgaWYgKGVsQ1NTLmRpc3BsYXkgPT09ICdncmlkJykge1xuICAgICAgcmV0dXJuIGVsQ1NTLmdyaWRUZW1wbGF0ZUNvbHVtbnMuc3BsaXQoJyAnKS5sZW5ndGggPD0gMSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgfVxuICAgIGlmIChjaGlsZDEgJiYgZmlyc3RDaGlsZENTU1tcImZsb2F0XCJdICYmIGZpcnN0Q2hpbGRDU1NbXCJmbG9hdFwiXSAhPT0gJ25vbmUnKSB7XG4gICAgICB2YXIgdG91Y2hpbmdTaWRlQ2hpbGQyID0gZmlyc3RDaGlsZENTU1tcImZsb2F0XCJdID09PSAnbGVmdCcgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgICAgcmV0dXJuIGNoaWxkMiAmJiAoc2Vjb25kQ2hpbGRDU1MuY2xlYXIgPT09ICdib3RoJyB8fCBzZWNvbmRDaGlsZENTUy5jbGVhciA9PT0gdG91Y2hpbmdTaWRlQ2hpbGQyKSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZDEgJiYgKGZpcnN0Q2hpbGRDU1MuZGlzcGxheSA9PT0gJ2Jsb2NrJyB8fCBmaXJzdENoaWxkQ1NTLmRpc3BsYXkgPT09ICdmbGV4JyB8fCBmaXJzdENoaWxkQ1NTLmRpc3BsYXkgPT09ICd0YWJsZScgfHwgZmlyc3RDaGlsZENTUy5kaXNwbGF5ID09PSAnZ3JpZCcgfHwgZmlyc3RDaGlsZFdpZHRoID49IGVsV2lkdGggJiYgZWxDU1NbQ1NTRmxvYXRQcm9wZXJ0eV0gPT09ICdub25lJyB8fCBjaGlsZDIgJiYgZWxDU1NbQ1NTRmxvYXRQcm9wZXJ0eV0gPT09ICdub25lJyAmJiBmaXJzdENoaWxkV2lkdGggKyBzZWNvbmRDaGlsZFdpZHRoID4gZWxXaWR0aCkgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICB9LFxuICBfZHJhZ0VsSW5Sb3dDb2x1bW4gPSBmdW5jdGlvbiBfZHJhZ0VsSW5Sb3dDb2x1bW4oZHJhZ1JlY3QsIHRhcmdldFJlY3QsIHZlcnRpY2FsKSB7XG4gICAgdmFyIGRyYWdFbFMxT3BwID0gdmVydGljYWwgPyBkcmFnUmVjdC5sZWZ0IDogZHJhZ1JlY3QudG9wLFxuICAgICAgZHJhZ0VsUzJPcHAgPSB2ZXJ0aWNhbCA/IGRyYWdSZWN0LnJpZ2h0IDogZHJhZ1JlY3QuYm90dG9tLFxuICAgICAgZHJhZ0VsT3BwTGVuZ3RoID0gdmVydGljYWwgPyBkcmFnUmVjdC53aWR0aCA6IGRyYWdSZWN0LmhlaWdodCxcbiAgICAgIHRhcmdldFMxT3BwID0gdmVydGljYWwgPyB0YXJnZXRSZWN0LmxlZnQgOiB0YXJnZXRSZWN0LnRvcCxcbiAgICAgIHRhcmdldFMyT3BwID0gdmVydGljYWwgPyB0YXJnZXRSZWN0LnJpZ2h0IDogdGFyZ2V0UmVjdC5ib3R0b20sXG4gICAgICB0YXJnZXRPcHBMZW5ndGggPSB2ZXJ0aWNhbCA/IHRhcmdldFJlY3Qud2lkdGggOiB0YXJnZXRSZWN0LmhlaWdodDtcbiAgICByZXR1cm4gZHJhZ0VsUzFPcHAgPT09IHRhcmdldFMxT3BwIHx8IGRyYWdFbFMyT3BwID09PSB0YXJnZXRTMk9wcCB8fCBkcmFnRWxTMU9wcCArIGRyYWdFbE9wcExlbmd0aCAvIDIgPT09IHRhcmdldFMxT3BwICsgdGFyZ2V0T3BwTGVuZ3RoIC8gMjtcbiAgfSxcbiAgLyoqXHJcbiAgICogRGV0ZWN0cyBmaXJzdCBuZWFyZXN0IGVtcHR5IHNvcnRhYmxlIHRvIFggYW5kIFkgcG9zaXRpb24gdXNpbmcgZW1wdHlJbnNlcnRUaHJlc2hvbGQuXHJcbiAgICogQHBhcmFtICB7TnVtYmVyfSB4ICAgICAgWCBwb3NpdGlvblxyXG4gICAqIEBwYXJhbSAge051bWJlcn0geSAgICAgIFkgcG9zaXRpb25cclxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gICBFbGVtZW50IG9mIHRoZSBmaXJzdCBmb3VuZCBuZWFyZXN0IFNvcnRhYmxlXHJcbiAgICovXG4gIF9kZXRlY3ROZWFyZXN0RW1wdHlTb3J0YWJsZSA9IGZ1bmN0aW9uIF9kZXRlY3ROZWFyZXN0RW1wdHlTb3J0YWJsZSh4LCB5KSB7XG4gICAgdmFyIHJldDtcbiAgICBzb3J0YWJsZXMuc29tZShmdW5jdGlvbiAoc29ydGFibGUpIHtcbiAgICAgIHZhciB0aHJlc2hvbGQgPSBzb3J0YWJsZVtleHBhbmRvXS5vcHRpb25zLmVtcHR5SW5zZXJ0VGhyZXNob2xkO1xuICAgICAgaWYgKCF0aHJlc2hvbGQgfHwgbGFzdENoaWxkKHNvcnRhYmxlKSkgcmV0dXJuO1xuICAgICAgdmFyIHJlY3QgPSBnZXRSZWN0KHNvcnRhYmxlKSxcbiAgICAgICAgaW5zaWRlSG9yaXpvbnRhbGx5ID0geCA+PSByZWN0LmxlZnQgLSB0aHJlc2hvbGQgJiYgeCA8PSByZWN0LnJpZ2h0ICsgdGhyZXNob2xkLFxuICAgICAgICBpbnNpZGVWZXJ0aWNhbGx5ID0geSA+PSByZWN0LnRvcCAtIHRocmVzaG9sZCAmJiB5IDw9IHJlY3QuYm90dG9tICsgdGhyZXNob2xkO1xuICAgICAgaWYgKGluc2lkZUhvcml6b250YWxseSAmJiBpbnNpZGVWZXJ0aWNhbGx5KSB7XG4gICAgICAgIHJldHVybiByZXQgPSBzb3J0YWJsZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9LFxuICBfcHJlcGFyZUdyb3VwID0gZnVuY3Rpb24gX3ByZXBhcmVHcm91cChvcHRpb25zKSB7XG4gICAgZnVuY3Rpb24gdG9Gbih2YWx1ZSwgcHVsbCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0bywgZnJvbSwgZHJhZ0VsLCBldnQpIHtcbiAgICAgICAgdmFyIHNhbWVHcm91cCA9IHRvLm9wdGlvbnMuZ3JvdXAubmFtZSAmJiBmcm9tLm9wdGlvbnMuZ3JvdXAubmFtZSAmJiB0by5vcHRpb25zLmdyb3VwLm5hbWUgPT09IGZyb20ub3B0aW9ucy5ncm91cC5uYW1lO1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCAmJiAocHVsbCB8fCBzYW1lR3JvdXApKSB7XG4gICAgICAgICAgLy8gRGVmYXVsdCBwdWxsIHZhbHVlXG4gICAgICAgICAgLy8gRGVmYXVsdCBwdWxsIGFuZCBwdXQgdmFsdWUgaWYgc2FtZSBncm91cFxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHB1bGwgJiYgdmFsdWUgPT09ICdjbG9uZScpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIHRvRm4odmFsdWUodG8sIGZyb20sIGRyYWdFbCwgZXZ0KSwgcHVsbCkodG8sIGZyb20sIGRyYWdFbCwgZXZ0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgb3RoZXJHcm91cCA9IChwdWxsID8gdG8gOiBmcm9tKS5vcHRpb25zLmdyb3VwLm5hbWU7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlID09PSB0cnVlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUgPT09IG90aGVyR3JvdXAgfHwgdmFsdWUuam9pbiAmJiB2YWx1ZS5pbmRleE9mKG90aGVyR3JvdXApID4gLTE7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIHZhciBncm91cCA9IHt9O1xuICAgIHZhciBvcmlnaW5hbEdyb3VwID0gb3B0aW9ucy5ncm91cDtcbiAgICBpZiAoIW9yaWdpbmFsR3JvdXAgfHwgX3R5cGVvZihvcmlnaW5hbEdyb3VwKSAhPSAnb2JqZWN0Jykge1xuICAgICAgb3JpZ2luYWxHcm91cCA9IHtcbiAgICAgICAgbmFtZTogb3JpZ2luYWxHcm91cFxuICAgICAgfTtcbiAgICB9XG4gICAgZ3JvdXAubmFtZSA9IG9yaWdpbmFsR3JvdXAubmFtZTtcbiAgICBncm91cC5jaGVja1B1bGwgPSB0b0ZuKG9yaWdpbmFsR3JvdXAucHVsbCwgdHJ1ZSk7XG4gICAgZ3JvdXAuY2hlY2tQdXQgPSB0b0ZuKG9yaWdpbmFsR3JvdXAucHV0KTtcbiAgICBncm91cC5yZXZlcnRDbG9uZSA9IG9yaWdpbmFsR3JvdXAucmV2ZXJ0Q2xvbmU7XG4gICAgb3B0aW9ucy5ncm91cCA9IGdyb3VwO1xuICB9LFxuICBfaGlkZUdob3N0Rm9yVGFyZ2V0ID0gZnVuY3Rpb24gX2hpZGVHaG9zdEZvclRhcmdldCgpIHtcbiAgICBpZiAoIXN1cHBvcnRDc3NQb2ludGVyRXZlbnRzICYmIGdob3N0RWwpIHtcbiAgICAgIGNzcyhnaG9zdEVsLCAnZGlzcGxheScsICdub25lJyk7XG4gICAgfVxuICB9LFxuICBfdW5oaWRlR2hvc3RGb3JUYXJnZXQgPSBmdW5jdGlvbiBfdW5oaWRlR2hvc3RGb3JUYXJnZXQoKSB7XG4gICAgaWYgKCFzdXBwb3J0Q3NzUG9pbnRlckV2ZW50cyAmJiBnaG9zdEVsKSB7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ2Rpc3BsYXknLCAnJyk7XG4gICAgfVxuICB9O1xuXG4vLyAjMTE4NCBmaXggLSBQcmV2ZW50IGNsaWNrIGV2ZW50IG9uIGZhbGxiYWNrIGlmIGRyYWdnZWQgYnV0IGl0ZW0gbm90IGNoYW5nZWQgcG9zaXRpb25cbmlmIChkb2N1bWVudEV4aXN0cyAmJiAhQ2hyb21lRm9yQW5kcm9pZCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAoaWdub3JlTmV4dENsaWNrKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24gJiYgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZ0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiAmJiBldnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICBpZ25vcmVOZXh0Q2xpY2sgPSBmYWxzZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHRydWUpO1xufVxudmFyIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50ID0gZnVuY3Rpb24gbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQoZXZ0KSB7XG4gIGlmIChkcmFnRWwpIHtcbiAgICBldnQgPSBldnQudG91Y2hlcyA/IGV2dC50b3VjaGVzWzBdIDogZXZ0O1xuICAgIHZhciBuZWFyZXN0ID0gX2RldGVjdE5lYXJlc3RFbXB0eVNvcnRhYmxlKGV2dC5jbGllbnRYLCBldnQuY2xpZW50WSk7XG4gICAgaWYgKG5lYXJlc3QpIHtcbiAgICAgIC8vIENyZWF0ZSBpbWl0YXRpb24gZXZlbnRcbiAgICAgIHZhciBldmVudCA9IHt9O1xuICAgICAgZm9yICh2YXIgaSBpbiBldnQpIHtcbiAgICAgICAgaWYgKGV2dC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIGV2ZW50W2ldID0gZXZ0W2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBldmVudC50YXJnZXQgPSBldmVudC5yb290RWwgPSBuZWFyZXN0O1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQgPSB2b2lkIDA7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24gPSB2b2lkIDA7XG4gICAgICBuZWFyZXN0W2V4cGFuZG9dLl9vbkRyYWdPdmVyKGV2ZW50KTtcbiAgICB9XG4gIH1cbn07XG52YXIgX2NoZWNrT3V0c2lkZVRhcmdldEVsID0gZnVuY3Rpb24gX2NoZWNrT3V0c2lkZVRhcmdldEVsKGV2dCkge1xuICBpZiAoZHJhZ0VsKSB7XG4gICAgZHJhZ0VsLnBhcmVudE5vZGVbZXhwYW5kb10uX2lzT3V0c2lkZVRoaXNFbChldnQudGFyZ2V0KTtcbiAgfVxufTtcblxuLyoqXHJcbiAqIEBjbGFzcyAgU29ydGFibGVcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9ICBlbFxyXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgICAgIFtvcHRpb25zXVxyXG4gKi9cbmZ1bmN0aW9uIFNvcnRhYmxlKGVsLCBvcHRpb25zKSB7XG4gIGlmICghKGVsICYmIGVsLm5vZGVUeXBlICYmIGVsLm5vZGVUeXBlID09PSAxKSkge1xuICAgIHRocm93IFwiU29ydGFibGU6IGBlbGAgbXVzdCBiZSBhbiBIVE1MRWxlbWVudCwgbm90IFwiLmNvbmNhdCh7fS50b1N0cmluZy5jYWxsKGVsKSk7XG4gIH1cbiAgdGhpcy5lbCA9IGVsOyAvLyByb290IGVsZW1lbnRcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyA9IF9leHRlbmRzKHt9LCBvcHRpb25zKTtcblxuICAvLyBFeHBvcnQgaW5zdGFuY2VcbiAgZWxbZXhwYW5kb10gPSB0aGlzO1xuICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgZ3JvdXA6IG51bGwsXG4gICAgc29ydDogdHJ1ZSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgc3RvcmU6IG51bGwsXG4gICAgaGFuZGxlOiBudWxsLFxuICAgIGRyYWdnYWJsZTogL15bdW9dbCQvaS50ZXN0KGVsLm5vZGVOYW1lKSA/ICc+bGknIDogJz4qJyxcbiAgICBzd2FwVGhyZXNob2xkOiAxLFxuICAgIC8vIHBlcmNlbnRhZ2U7IDAgPD0geCA8PSAxXG4gICAgaW52ZXJ0U3dhcDogZmFsc2UsXG4gICAgLy8gaW52ZXJ0IGFsd2F5c1xuICAgIGludmVydGVkU3dhcFRocmVzaG9sZDogbnVsbCxcbiAgICAvLyB3aWxsIGJlIHNldCB0byBzYW1lIGFzIHN3YXBUaHJlc2hvbGQgaWYgZGVmYXVsdFxuICAgIHJlbW92ZUNsb25lT25IaWRlOiB0cnVlLFxuICAgIGRpcmVjdGlvbjogZnVuY3Rpb24gZGlyZWN0aW9uKCkge1xuICAgICAgcmV0dXJuIF9kZXRlY3REaXJlY3Rpb24oZWwsIHRoaXMub3B0aW9ucyk7XG4gICAgfSxcbiAgICBnaG9zdENsYXNzOiAnc29ydGFibGUtZ2hvc3QnLFxuICAgIGNob3NlbkNsYXNzOiAnc29ydGFibGUtY2hvc2VuJyxcbiAgICBkcmFnQ2xhc3M6ICdzb3J0YWJsZS1kcmFnJyxcbiAgICBpZ25vcmU6ICdhLCBpbWcnLFxuICAgIGZpbHRlcjogbnVsbCxcbiAgICBwcmV2ZW50T25GaWx0ZXI6IHRydWUsXG4gICAgYW5pbWF0aW9uOiAwLFxuICAgIGVhc2luZzogbnVsbCxcbiAgICBzZXREYXRhOiBmdW5jdGlvbiBzZXREYXRhKGRhdGFUcmFuc2ZlciwgZHJhZ0VsKSB7XG4gICAgICBkYXRhVHJhbnNmZXIuc2V0RGF0YSgnVGV4dCcsIGRyYWdFbC50ZXh0Q29udGVudCk7XG4gICAgfSxcbiAgICBkcm9wQnViYmxlOiBmYWxzZSxcbiAgICBkcmFnb3ZlckJ1YmJsZTogZmFsc2UsXG4gICAgZGF0YUlkQXR0cjogJ2RhdGEtaWQnLFxuICAgIGRlbGF5OiAwLFxuICAgIGRlbGF5T25Ub3VjaE9ubHk6IGZhbHNlLFxuICAgIHRvdWNoU3RhcnRUaHJlc2hvbGQ6IChOdW1iZXIucGFyc2VJbnQgPyBOdW1iZXIgOiB3aW5kb3cpLnBhcnNlSW50KHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLCAxMCkgfHwgMSxcbiAgICBmb3JjZUZhbGxiYWNrOiBmYWxzZSxcbiAgICBmYWxsYmFja0NsYXNzOiAnc29ydGFibGUtZmFsbGJhY2snLFxuICAgIGZhbGxiYWNrT25Cb2R5OiBmYWxzZSxcbiAgICBmYWxsYmFja1RvbGVyYW5jZTogMCxcbiAgICBmYWxsYmFja09mZnNldDoge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9LFxuICAgIC8vIERpc2FibGVkIG9uIFNhZmFyaTogIzE1NzE7IEVuYWJsZWQgb24gU2FmYXJpIElPUzogIzIyNDRcbiAgICBzdXBwb3J0UG9pbnRlcjogU29ydGFibGUuc3VwcG9ydFBvaW50ZXIgIT09IGZhbHNlICYmICdQb2ludGVyRXZlbnQnIGluIHdpbmRvdyAmJiAoIVNhZmFyaSB8fCBJT1MpLFxuICAgIGVtcHR5SW5zZXJ0VGhyZXNob2xkOiA1XG4gIH07XG4gIFBsdWdpbk1hbmFnZXIuaW5pdGlhbGl6ZVBsdWdpbnModGhpcywgZWwsIGRlZmF1bHRzKTtcblxuICAvLyBTZXQgZGVmYXVsdCBvcHRpb25zXG4gIGZvciAodmFyIG5hbWUgaW4gZGVmYXVsdHMpIHtcbiAgICAhKG5hbWUgaW4gb3B0aW9ucykgJiYgKG9wdGlvbnNbbmFtZV0gPSBkZWZhdWx0c1tuYW1lXSk7XG4gIH1cbiAgX3ByZXBhcmVHcm91cChvcHRpb25zKTtcblxuICAvLyBCaW5kIGFsbCBwcml2YXRlIG1ldGhvZHNcbiAgZm9yICh2YXIgZm4gaW4gdGhpcykge1xuICAgIGlmIChmbi5jaGFyQXQoMCkgPT09ICdfJyAmJiB0eXBlb2YgdGhpc1tmbl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXNbZm5dID0gdGhpc1tmbl0uYmluZCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICAvLyBTZXR1cCBkcmFnIG1vZGVcbiAgdGhpcy5uYXRpdmVEcmFnZ2FibGUgPSBvcHRpb25zLmZvcmNlRmFsbGJhY2sgPyBmYWxzZSA6IHN1cHBvcnREcmFnZ2FibGU7XG4gIGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgIC8vIFRvdWNoIHN0YXJ0IHRocmVzaG9sZCBjYW5ub3QgYmUgZ3JlYXRlciB0aGFuIHRoZSBuYXRpdmUgZHJhZ3N0YXJ0IHRocmVzaG9sZFxuICAgIHRoaXMub3B0aW9ucy50b3VjaFN0YXJ0VGhyZXNob2xkID0gMTtcbiAgfVxuXG4gIC8vIEJpbmQgZXZlbnRzXG4gIGlmIChvcHRpb25zLnN1cHBvcnRQb2ludGVyKSB7XG4gICAgb24oZWwsICdwb2ludGVyZG93bicsIHRoaXMuX29uVGFwU3RhcnQpO1xuICB9IGVsc2Uge1xuICAgIG9uKGVsLCAnbW91c2Vkb3duJywgdGhpcy5fb25UYXBTdGFydCk7XG4gICAgb24oZWwsICd0b3VjaHN0YXJ0JywgdGhpcy5fb25UYXBTdGFydCk7XG4gIH1cbiAgaWYgKHRoaXMubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgb24oZWwsICdkcmFnb3ZlcicsIHRoaXMpO1xuICAgIG9uKGVsLCAnZHJhZ2VudGVyJywgdGhpcyk7XG4gIH1cbiAgc29ydGFibGVzLnB1c2godGhpcy5lbCk7XG5cbiAgLy8gUmVzdG9yZSBzb3J0aW5nXG4gIG9wdGlvbnMuc3RvcmUgJiYgb3B0aW9ucy5zdG9yZS5nZXQgJiYgdGhpcy5zb3J0KG9wdGlvbnMuc3RvcmUuZ2V0KHRoaXMpIHx8IFtdKTtcblxuICAvLyBBZGQgYW5pbWF0aW9uIHN0YXRlIG1hbmFnZXJcbiAgX2V4dGVuZHModGhpcywgQW5pbWF0aW9uU3RhdGVNYW5hZ2VyKCkpO1xufVxuU29ydGFibGUucHJvdG90eXBlID0gLyoqIEBsZW5kcyBTb3J0YWJsZS5wcm90b3R5cGUgKi97XG4gIGNvbnN0cnVjdG9yOiBTb3J0YWJsZSxcbiAgX2lzT3V0c2lkZVRoaXNFbDogZnVuY3Rpb24gX2lzT3V0c2lkZVRoaXNFbCh0YXJnZXQpIHtcbiAgICBpZiAoIXRoaXMuZWwuY29udGFpbnModGFyZ2V0KSAmJiB0YXJnZXQgIT09IHRoaXMuZWwpIHtcbiAgICAgIGxhc3RUYXJnZXQgPSBudWxsO1xuICAgIH1cbiAgfSxcbiAgX2dldERpcmVjdGlvbjogZnVuY3Rpb24gX2dldERpcmVjdGlvbihldnQsIHRhcmdldCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5vcHRpb25zLmRpcmVjdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMub3B0aW9ucy5kaXJlY3Rpb24uY2FsbCh0aGlzLCBldnQsIHRhcmdldCwgZHJhZ0VsKSA6IHRoaXMub3B0aW9ucy5kaXJlY3Rpb247XG4gIH0sXG4gIF9vblRhcFN0YXJ0OiBmdW5jdGlvbiBfb25UYXBTdGFydCggLyoqIEV2ZW50fFRvdWNoRXZlbnQgKi9ldnQpIHtcbiAgICBpZiAoIWV2dC5jYW5jZWxhYmxlKSByZXR1cm47XG4gICAgdmFyIF90aGlzID0gdGhpcyxcbiAgICAgIGVsID0gdGhpcy5lbCxcbiAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICBwcmV2ZW50T25GaWx0ZXIgPSBvcHRpb25zLnByZXZlbnRPbkZpbHRlcixcbiAgICAgIHR5cGUgPSBldnQudHlwZSxcbiAgICAgIHRvdWNoID0gZXZ0LnRvdWNoZXMgJiYgZXZ0LnRvdWNoZXNbMF0gfHwgZXZ0LnBvaW50ZXJUeXBlICYmIGV2dC5wb2ludGVyVHlwZSA9PT0gJ3RvdWNoJyAmJiBldnQsXG4gICAgICB0YXJnZXQgPSAodG91Y2ggfHwgZXZ0KS50YXJnZXQsXG4gICAgICBvcmlnaW5hbFRhcmdldCA9IGV2dC50YXJnZXQuc2hhZG93Um9vdCAmJiAoZXZ0LnBhdGggJiYgZXZ0LnBhdGhbMF0gfHwgZXZ0LmNvbXBvc2VkUGF0aCAmJiBldnQuY29tcG9zZWRQYXRoKClbMF0pIHx8IHRhcmdldCxcbiAgICAgIGZpbHRlciA9IG9wdGlvbnMuZmlsdGVyO1xuICAgIF9zYXZlSW5wdXRDaGVja2VkU3RhdGUoZWwpO1xuXG4gICAgLy8gRG9uJ3QgdHJpZ2dlciBzdGFydCBldmVudCB3aGVuIGFuIGVsZW1lbnQgaXMgYmVlbiBkcmFnZ2VkLCBvdGhlcndpc2UgdGhlIGV2dC5vbGRpbmRleCBhbHdheXMgd3Jvbmcgd2hlbiBzZXQgb3B0aW9uLmdyb3VwLlxuICAgIGlmIChkcmFnRWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKC9tb3VzZWRvd258cG9pbnRlcmRvd24vLnRlc3QodHlwZSkgJiYgZXZ0LmJ1dHRvbiAhPT0gMCB8fCBvcHRpb25zLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47IC8vIG9ubHkgbGVmdCBidXR0b24gYW5kIGVuYWJsZWRcbiAgICB9XG5cbiAgICAvLyBjYW5jZWwgZG5kIGlmIG9yaWdpbmFsIHRhcmdldCBpcyBjb250ZW50IGVkaXRhYmxlXG4gICAgaWYgKG9yaWdpbmFsVGFyZ2V0LmlzQ29udGVudEVkaXRhYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU2FmYXJpIGlnbm9yZXMgZnVydGhlciBldmVudCBoYW5kbGluZyBhZnRlciBtb3VzZWRvd25cbiAgICBpZiAoIXRoaXMubmF0aXZlRHJhZ2dhYmxlICYmIFNhZmFyaSAmJiB0YXJnZXQgJiYgdGFyZ2V0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGFyZ2V0ID0gY2xvc2VzdCh0YXJnZXQsIG9wdGlvbnMuZHJhZ2dhYmxlLCBlbCwgZmFsc2UpO1xuICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmFuaW1hdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChsYXN0RG93bkVsID09PSB0YXJnZXQpIHtcbiAgICAgIC8vIElnbm9yaW5nIGR1cGxpY2F0ZSBgZG93bmBcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBHZXQgdGhlIGluZGV4IG9mIHRoZSBkcmFnZ2VkIGVsZW1lbnQgd2l0aGluIGl0cyBwYXJlbnRcbiAgICBvbGRJbmRleCA9IGluZGV4KHRhcmdldCk7XG4gICAgb2xkRHJhZ2dhYmxlSW5kZXggPSBpbmRleCh0YXJnZXQsIG9wdGlvbnMuZHJhZ2dhYmxlKTtcblxuICAgIC8vIENoZWNrIGZpbHRlclxuICAgIGlmICh0eXBlb2YgZmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoZmlsdGVyLmNhbGwodGhpcywgZXZ0LCB0YXJnZXQsIHRoaXMpKSB7XG4gICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICBzb3J0YWJsZTogX3RoaXMsXG4gICAgICAgICAgcm9vdEVsOiBvcmlnaW5hbFRhcmdldCxcbiAgICAgICAgICBuYW1lOiAnZmlsdGVyJyxcbiAgICAgICAgICB0YXJnZXRFbDogdGFyZ2V0LFxuICAgICAgICAgIHRvRWw6IGVsLFxuICAgICAgICAgIGZyb21FbDogZWxcbiAgICAgICAgfSk7XG4gICAgICAgIHBsdWdpbkV2ZW50KCdmaWx0ZXInLCBfdGhpcywge1xuICAgICAgICAgIGV2dDogZXZ0XG4gICAgICAgIH0pO1xuICAgICAgICBwcmV2ZW50T25GaWx0ZXIgJiYgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjsgLy8gY2FuY2VsIGRuZFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZmlsdGVyKSB7XG4gICAgICBmaWx0ZXIgPSBmaWx0ZXIuc3BsaXQoJywnKS5zb21lKGZ1bmN0aW9uIChjcml0ZXJpYSkge1xuICAgICAgICBjcml0ZXJpYSA9IGNsb3Nlc3Qob3JpZ2luYWxUYXJnZXQsIGNyaXRlcmlhLnRyaW0oKSwgZWwsIGZhbHNlKTtcbiAgICAgICAgaWYgKGNyaXRlcmlhKSB7XG4gICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgc29ydGFibGU6IF90aGlzLFxuICAgICAgICAgICAgcm9vdEVsOiBjcml0ZXJpYSxcbiAgICAgICAgICAgIG5hbWU6ICdmaWx0ZXInLFxuICAgICAgICAgICAgdGFyZ2V0RWw6IHRhcmdldCxcbiAgICAgICAgICAgIGZyb21FbDogZWwsXG4gICAgICAgICAgICB0b0VsOiBlbFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHBsdWdpbkV2ZW50KCdmaWx0ZXInLCBfdGhpcywge1xuICAgICAgICAgICAgZXZ0OiBldnRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgIHByZXZlbnRPbkZpbHRlciAmJiBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuOyAvLyBjYW5jZWwgZG5kXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmhhbmRsZSAmJiAhY2xvc2VzdChvcmlnaW5hbFRhcmdldCwgb3B0aW9ucy5oYW5kbGUsIGVsLCBmYWxzZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBQcmVwYXJlIGBkcmFnc3RhcnRgXG4gICAgdGhpcy5fcHJlcGFyZURyYWdTdGFydChldnQsIHRvdWNoLCB0YXJnZXQpO1xuICB9LFxuICBfcHJlcGFyZURyYWdTdGFydDogZnVuY3Rpb24gX3ByZXBhcmVEcmFnU3RhcnQoIC8qKiBFdmVudCAqL2V2dCwgLyoqIFRvdWNoICovdG91Y2gsIC8qKiBIVE1MRWxlbWVudCAqL3RhcmdldCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICBlbCA9IF90aGlzLmVsLFxuICAgICAgb3B0aW9ucyA9IF90aGlzLm9wdGlvbnMsXG4gICAgICBvd25lckRvY3VtZW50ID0gZWwub3duZXJEb2N1bWVudCxcbiAgICAgIGRyYWdTdGFydEZuO1xuICAgIGlmICh0YXJnZXQgJiYgIWRyYWdFbCAmJiB0YXJnZXQucGFyZW50Tm9kZSA9PT0gZWwpIHtcbiAgICAgIHZhciBkcmFnUmVjdCA9IGdldFJlY3QodGFyZ2V0KTtcbiAgICAgIHJvb3RFbCA9IGVsO1xuICAgICAgZHJhZ0VsID0gdGFyZ2V0O1xuICAgICAgcGFyZW50RWwgPSBkcmFnRWwucGFyZW50Tm9kZTtcbiAgICAgIG5leHRFbCA9IGRyYWdFbC5uZXh0U2libGluZztcbiAgICAgIGxhc3REb3duRWwgPSB0YXJnZXQ7XG4gICAgICBhY3RpdmVHcm91cCA9IG9wdGlvbnMuZ3JvdXA7XG4gICAgICBTb3J0YWJsZS5kcmFnZ2VkID0gZHJhZ0VsO1xuICAgICAgdGFwRXZ0ID0ge1xuICAgICAgICB0YXJnZXQ6IGRyYWdFbCxcbiAgICAgICAgY2xpZW50WDogKHRvdWNoIHx8IGV2dCkuY2xpZW50WCxcbiAgICAgICAgY2xpZW50WTogKHRvdWNoIHx8IGV2dCkuY2xpZW50WVxuICAgICAgfTtcbiAgICAgIHRhcERpc3RhbmNlTGVmdCA9IHRhcEV2dC5jbGllbnRYIC0gZHJhZ1JlY3QubGVmdDtcbiAgICAgIHRhcERpc3RhbmNlVG9wID0gdGFwRXZ0LmNsaWVudFkgLSBkcmFnUmVjdC50b3A7XG4gICAgICB0aGlzLl9sYXN0WCA9ICh0b3VjaCB8fCBldnQpLmNsaWVudFg7XG4gICAgICB0aGlzLl9sYXN0WSA9ICh0b3VjaCB8fCBldnQpLmNsaWVudFk7XG4gICAgICBkcmFnRWwuc3R5bGVbJ3dpbGwtY2hhbmdlJ10gPSAnYWxsJztcbiAgICAgIGRyYWdTdGFydEZuID0gZnVuY3Rpb24gZHJhZ1N0YXJ0Rm4oKSB7XG4gICAgICAgIHBsdWdpbkV2ZW50KCdkZWxheUVuZGVkJywgX3RoaXMsIHtcbiAgICAgICAgICBldnQ6IGV2dFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKFNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHtcbiAgICAgICAgICBfdGhpcy5fb25Ecm9wKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIERlbGF5ZWQgZHJhZyBoYXMgYmVlbiB0cmlnZ2VyZWRcbiAgICAgICAgLy8gd2UgY2FuIHJlLWVuYWJsZSB0aGUgZXZlbnRzOiB0b3VjaG1vdmUvbW91c2Vtb3ZlXG4gICAgICAgIF90aGlzLl9kaXNhYmxlRGVsYXllZERyYWdFdmVudHMoKTtcbiAgICAgICAgaWYgKCFGaXJlRm94ICYmIF90aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgICAgICAgIGRyYWdFbC5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmluZCB0aGUgZXZlbnRzOiBkcmFnc3RhcnQvZHJhZ2VuZFxuICAgICAgICBfdGhpcy5fdHJpZ2dlckRyYWdTdGFydChldnQsIHRvdWNoKTtcblxuICAgICAgICAvLyBEcmFnIHN0YXJ0IGV2ZW50XG4gICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICBzb3J0YWJsZTogX3RoaXMsXG4gICAgICAgICAgbmFtZTogJ2Nob29zZScsXG4gICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENob3NlbiBpdGVtXG4gICAgICAgIHRvZ2dsZUNsYXNzKGRyYWdFbCwgb3B0aW9ucy5jaG9zZW5DbGFzcywgdHJ1ZSk7XG4gICAgICB9O1xuXG4gICAgICAvLyBEaXNhYmxlIFwiZHJhZ2dhYmxlXCJcbiAgICAgIG9wdGlvbnMuaWdub3JlLnNwbGl0KCcsJykuZm9yRWFjaChmdW5jdGlvbiAoY3JpdGVyaWEpIHtcbiAgICAgICAgZmluZChkcmFnRWwsIGNyaXRlcmlhLnRyaW0oKSwgX2Rpc2FibGVEcmFnZ2FibGUpO1xuICAgICAgfSk7XG4gICAgICBvbihvd25lckRvY3VtZW50LCAnZHJhZ292ZXInLCBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudCk7XG4gICAgICBvbihvd25lckRvY3VtZW50LCAnbW91c2Vtb3ZlJywgbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQpO1xuICAgICAgb24ob3duZXJEb2N1bWVudCwgJ3RvdWNobW92ZScsIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50KTtcbiAgICAgIGlmIChvcHRpb25zLnN1cHBvcnRQb2ludGVyKSB7XG4gICAgICAgIG9uKG93bmVyRG9jdW1lbnQsICdwb2ludGVydXAnLCBfdGhpcy5fb25Ecm9wKTtcbiAgICAgICAgLy8gTmF0aXZlIEQmRCB0cmlnZ2VycyBwb2ludGVyY2FuY2VsXG4gICAgICAgICF0aGlzLm5hdGl2ZURyYWdnYWJsZSAmJiBvbihvd25lckRvY3VtZW50LCAncG9pbnRlcmNhbmNlbCcsIF90aGlzLl9vbkRyb3ApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb24ob3duZXJEb2N1bWVudCwgJ21vdXNldXAnLCBfdGhpcy5fb25Ecm9wKTtcbiAgICAgICAgb24ob3duZXJEb2N1bWVudCwgJ3RvdWNoZW5kJywgX3RoaXMuX29uRHJvcCk7XG4gICAgICAgIG9uKG93bmVyRG9jdW1lbnQsICd0b3VjaGNhbmNlbCcsIF90aGlzLl9vbkRyb3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBNYWtlIGRyYWdFbCBkcmFnZ2FibGUgKG11c3QgYmUgYmVmb3JlIGRlbGF5IGZvciBGaXJlRm94KVxuICAgICAgaWYgKEZpcmVGb3ggJiYgdGhpcy5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnRvdWNoU3RhcnRUaHJlc2hvbGQgPSA0O1xuICAgICAgICBkcmFnRWwuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHBsdWdpbkV2ZW50KCdkZWxheVN0YXJ0JywgdGhpcywge1xuICAgICAgICBldnQ6IGV2dFxuICAgICAgfSk7XG5cbiAgICAgIC8vIERlbGF5IGlzIGltcG9zc2libGUgZm9yIG5hdGl2ZSBEbkQgaW4gRWRnZSBvciBJRVxuICAgICAgaWYgKG9wdGlvbnMuZGVsYXkgJiYgKCFvcHRpb25zLmRlbGF5T25Ub3VjaE9ubHkgfHwgdG91Y2gpICYmICghdGhpcy5uYXRpdmVEcmFnZ2FibGUgfHwgIShFZGdlIHx8IElFMTFPckxlc3MpKSkge1xuICAgICAgICBpZiAoU29ydGFibGUuZXZlbnRDYW5jZWxlZCkge1xuICAgICAgICAgIHRoaXMuX29uRHJvcCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXNlciBtb3ZlcyB0aGUgcG9pbnRlciBvciBsZXQgZ28gdGhlIGNsaWNrIG9yIHRvdWNoXG4gICAgICAgIC8vIGJlZm9yZSB0aGUgZGVsYXkgaGFzIGJlZW4gcmVhY2hlZDpcbiAgICAgICAgLy8gZGlzYWJsZSB0aGUgZGVsYXllZCBkcmFnXG4gICAgICAgIGlmIChvcHRpb25zLnN1cHBvcnRQb2ludGVyKSB7XG4gICAgICAgICAgb24ob3duZXJEb2N1bWVudCwgJ3BvaW50ZXJ1cCcsIF90aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xuICAgICAgICAgIG9uKG93bmVyRG9jdW1lbnQsICdwb2ludGVyY2FuY2VsJywgX3RoaXMuX2Rpc2FibGVEZWxheWVkRHJhZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb24ob3duZXJEb2N1bWVudCwgJ21vdXNldXAnLCBfdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICAgICAgICBvbihvd25lckRvY3VtZW50LCAndG91Y2hlbmQnLCBfdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICAgICAgICBvbihvd25lckRvY3VtZW50LCAndG91Y2hjYW5jZWwnLCBfdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICAgICAgfVxuICAgICAgICBvbihvd25lckRvY3VtZW50LCAnbW91c2Vtb3ZlJywgX3RoaXMuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcik7XG4gICAgICAgIG9uKG93bmVyRG9jdW1lbnQsICd0b3VjaG1vdmUnLCBfdGhpcy5fZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKTtcbiAgICAgICAgb3B0aW9ucy5zdXBwb3J0UG9pbnRlciAmJiBvbihvd25lckRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCBfdGhpcy5fZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKTtcbiAgICAgICAgX3RoaXMuX2RyYWdTdGFydFRpbWVyID0gc2V0VGltZW91dChkcmFnU3RhcnRGbiwgb3B0aW9ucy5kZWxheSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnU3RhcnRGbigpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcjogZnVuY3Rpb24gX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlciggLyoqIFRvdWNoRXZlbnR8UG9pbnRlckV2ZW50ICoqL2UpIHtcbiAgICB2YXIgdG91Y2ggPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0gOiBlO1xuICAgIGlmIChNYXRoLm1heChNYXRoLmFicyh0b3VjaC5jbGllbnRYIC0gdGhpcy5fbGFzdFgpLCBNYXRoLmFicyh0b3VjaC5jbGllbnRZIC0gdGhpcy5fbGFzdFkpKSA+PSBNYXRoLmZsb29yKHRoaXMub3B0aW9ucy50b3VjaFN0YXJ0VGhyZXNob2xkIC8gKHRoaXMubmF0aXZlRHJhZ2dhYmxlICYmIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpKSkge1xuICAgICAgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKCk7XG4gICAgfVxuICB9LFxuICBfZGlzYWJsZURlbGF5ZWREcmFnOiBmdW5jdGlvbiBfZGlzYWJsZURlbGF5ZWREcmFnKCkge1xuICAgIGRyYWdFbCAmJiBfZGlzYWJsZURyYWdnYWJsZShkcmFnRWwpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl9kcmFnU3RhcnRUaW1lcik7XG4gICAgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnRXZlbnRzKCk7XG4gIH0sXG4gIF9kaXNhYmxlRGVsYXllZERyYWdFdmVudHM6IGZ1bmN0aW9uIF9kaXNhYmxlRGVsYXllZERyYWdFdmVudHMoKSB7XG4gICAgdmFyIG93bmVyRG9jdW1lbnQgPSB0aGlzLmVsLm93bmVyRG9jdW1lbnQ7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICdtb3VzZXVwJywgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ3RvdWNoZW5kJywgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ3RvdWNoY2FuY2VsJywgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ3BvaW50ZXJ1cCcsIHRoaXMuX2Rpc2FibGVEZWxheWVkRHJhZyk7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICdwb2ludGVyY2FuY2VsJywgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ21vdXNlbW92ZScsIHRoaXMuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcik7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICd0b3VjaG1vdmUnLCB0aGlzLl9kZWxheWVkRHJhZ1RvdWNoTW92ZUhhbmRsZXIpO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCB0aGlzLl9kZWxheWVkRHJhZ1RvdWNoTW92ZUhhbmRsZXIpO1xuICB9LFxuICBfdHJpZ2dlckRyYWdTdGFydDogZnVuY3Rpb24gX3RyaWdnZXJEcmFnU3RhcnQoIC8qKiBFdmVudCAqL2V2dCwgLyoqIFRvdWNoICovdG91Y2gpIHtcbiAgICB0b3VjaCA9IHRvdWNoIHx8IGV2dC5wb2ludGVyVHlwZSA9PSAndG91Y2gnICYmIGV2dDtcbiAgICBpZiAoIXRoaXMubmF0aXZlRHJhZ2dhYmxlIHx8IHRvdWNoKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnN1cHBvcnRQb2ludGVyKSB7XG4gICAgICAgIG9uKGRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgICB9IGVsc2UgaWYgKHRvdWNoKSB7XG4gICAgICAgIG9uKGRvY3VtZW50LCAndG91Y2htb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb24oZG9jdW1lbnQsICdtb3VzZW1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uKGRyYWdFbCwgJ2RyYWdlbmQnLCB0aGlzKTtcbiAgICAgIG9uKHJvb3RFbCwgJ2RyYWdzdGFydCcsIHRoaXMuX29uRHJhZ1N0YXJ0KTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGlmIChkb2N1bWVudC5zZWxlY3Rpb24pIHtcbiAgICAgICAgX25leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkb2N1bWVudC5zZWxlY3Rpb24uZW1wdHkoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7fVxuICB9LFxuICBfZHJhZ1N0YXJ0ZWQ6IGZ1bmN0aW9uIF9kcmFnU3RhcnRlZChmYWxsYmFjaywgZXZ0KSB7XG4gICAgYXdhaXRpbmdEcmFnU3RhcnRlZCA9IGZhbHNlO1xuICAgIGlmIChyb290RWwgJiYgZHJhZ0VsKSB7XG4gICAgICBwbHVnaW5FdmVudCgnZHJhZ1N0YXJ0ZWQnLCB0aGlzLCB7XG4gICAgICAgIGV2dDogZXZ0XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgICAgICBvbihkb2N1bWVudCwgJ2RyYWdvdmVyJywgX2NoZWNrT3V0c2lkZVRhcmdldEVsKTtcbiAgICAgIH1cbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICAvLyBBcHBseSBlZmZlY3RcbiAgICAgICFmYWxsYmFjayAmJiB0b2dnbGVDbGFzcyhkcmFnRWwsIG9wdGlvbnMuZHJhZ0NsYXNzLCBmYWxzZSk7XG4gICAgICB0b2dnbGVDbGFzcyhkcmFnRWwsIG9wdGlvbnMuZ2hvc3RDbGFzcywgdHJ1ZSk7XG4gICAgICBTb3J0YWJsZS5hY3RpdmUgPSB0aGlzO1xuICAgICAgZmFsbGJhY2sgJiYgdGhpcy5fYXBwZW5kR2hvc3QoKTtcblxuICAgICAgLy8gRHJhZyBzdGFydCBldmVudFxuICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgbmFtZTogJ3N0YXJ0JyxcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbnVsbGluZygpO1xuICAgIH1cbiAgfSxcbiAgX2VtdWxhdGVEcmFnT3ZlcjogZnVuY3Rpb24gX2VtdWxhdGVEcmFnT3ZlcigpIHtcbiAgICBpZiAodG91Y2hFdnQpIHtcbiAgICAgIHRoaXMuX2xhc3RYID0gdG91Y2hFdnQuY2xpZW50WDtcbiAgICAgIHRoaXMuX2xhc3RZID0gdG91Y2hFdnQuY2xpZW50WTtcbiAgICAgIF9oaWRlR2hvc3RGb3JUYXJnZXQoKTtcbiAgICAgIHZhciB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHRvdWNoRXZ0LmNsaWVudFgsIHRvdWNoRXZ0LmNsaWVudFkpO1xuICAgICAgdmFyIHBhcmVudCA9IHRhcmdldDtcbiAgICAgIHdoaWxlICh0YXJnZXQgJiYgdGFyZ2V0LnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnNoYWRvd1Jvb3QuZWxlbWVudEZyb21Qb2ludCh0b3VjaEV2dC5jbGllbnRYLCB0b3VjaEV2dC5jbGllbnRZKTtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gcGFyZW50KSBicmVhaztcbiAgICAgICAgcGFyZW50ID0gdGFyZ2V0O1xuICAgICAgfVxuICAgICAgZHJhZ0VsLnBhcmVudE5vZGVbZXhwYW5kb10uX2lzT3V0c2lkZVRoaXNFbCh0YXJnZXQpO1xuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICBkbyB7XG4gICAgICAgICAgaWYgKHBhcmVudFtleHBhbmRvXSkge1xuICAgICAgICAgICAgdmFyIGluc2VydGVkID0gdm9pZCAwO1xuICAgICAgICAgICAgaW5zZXJ0ZWQgPSBwYXJlbnRbZXhwYW5kb10uX29uRHJhZ092ZXIoe1xuICAgICAgICAgICAgICBjbGllbnRYOiB0b3VjaEV2dC5jbGllbnRYLFxuICAgICAgICAgICAgICBjbGllbnRZOiB0b3VjaEV2dC5jbGllbnRZLFxuICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgcm9vdEVsOiBwYXJlbnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGluc2VydGVkICYmICF0aGlzLm9wdGlvbnMuZHJhZ292ZXJCdWJibGUpIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRhcmdldCA9IHBhcmVudDsgLy8gc3RvcmUgbGFzdCBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgLyoganNoaW50IGJvc3M6dHJ1ZSAqLyB3aGlsZSAocGFyZW50ID0gZ2V0UGFyZW50T3JIb3N0KHBhcmVudCkpO1xuICAgICAgfVxuICAgICAgX3VuaGlkZUdob3N0Rm9yVGFyZ2V0KCk7XG4gICAgfVxuICB9LFxuICBfb25Ub3VjaE1vdmU6IGZ1bmN0aW9uIF9vblRvdWNoTW92ZSggLyoqVG91Y2hFdmVudCovZXZ0KSB7XG4gICAgaWYgKHRhcEV2dCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIGZhbGxiYWNrVG9sZXJhbmNlID0gb3B0aW9ucy5mYWxsYmFja1RvbGVyYW5jZSxcbiAgICAgICAgZmFsbGJhY2tPZmZzZXQgPSBvcHRpb25zLmZhbGxiYWNrT2Zmc2V0LFxuICAgICAgICB0b3VjaCA9IGV2dC50b3VjaGVzID8gZXZ0LnRvdWNoZXNbMF0gOiBldnQsXG4gICAgICAgIGdob3N0TWF0cml4ID0gZ2hvc3RFbCAmJiBtYXRyaXgoZ2hvc3RFbCwgdHJ1ZSksXG4gICAgICAgIHNjYWxlWCA9IGdob3N0RWwgJiYgZ2hvc3RNYXRyaXggJiYgZ2hvc3RNYXRyaXguYSxcbiAgICAgICAgc2NhbGVZID0gZ2hvc3RFbCAmJiBnaG9zdE1hdHJpeCAmJiBnaG9zdE1hdHJpeC5kLFxuICAgICAgICByZWxhdGl2ZVNjcm9sbE9mZnNldCA9IFBvc2l0aW9uR2hvc3RBYnNvbHV0ZWx5ICYmIGdob3N0UmVsYXRpdmVQYXJlbnQgJiYgZ2V0UmVsYXRpdmVTY3JvbGxPZmZzZXQoZ2hvc3RSZWxhdGl2ZVBhcmVudCksXG4gICAgICAgIGR4ID0gKHRvdWNoLmNsaWVudFggLSB0YXBFdnQuY2xpZW50WCArIGZhbGxiYWNrT2Zmc2V0LngpIC8gKHNjYWxlWCB8fCAxKSArIChyZWxhdGl2ZVNjcm9sbE9mZnNldCA/IHJlbGF0aXZlU2Nyb2xsT2Zmc2V0WzBdIC0gZ2hvc3RSZWxhdGl2ZVBhcmVudEluaXRpYWxTY3JvbGxbMF0gOiAwKSAvIChzY2FsZVggfHwgMSksXG4gICAgICAgIGR5ID0gKHRvdWNoLmNsaWVudFkgLSB0YXBFdnQuY2xpZW50WSArIGZhbGxiYWNrT2Zmc2V0LnkpIC8gKHNjYWxlWSB8fCAxKSArIChyZWxhdGl2ZVNjcm9sbE9mZnNldCA/IHJlbGF0aXZlU2Nyb2xsT2Zmc2V0WzFdIC0gZ2hvc3RSZWxhdGl2ZVBhcmVudEluaXRpYWxTY3JvbGxbMV0gOiAwKSAvIChzY2FsZVkgfHwgMSk7XG5cbiAgICAgIC8vIG9ubHkgc2V0IHRoZSBzdGF0dXMgdG8gZHJhZ2dpbmcsIHdoZW4gd2UgYXJlIGFjdHVhbGx5IGRyYWdnaW5nXG4gICAgICBpZiAoIVNvcnRhYmxlLmFjdGl2ZSAmJiAhYXdhaXRpbmdEcmFnU3RhcnRlZCkge1xuICAgICAgICBpZiAoZmFsbGJhY2tUb2xlcmFuY2UgJiYgTWF0aC5tYXgoTWF0aC5hYnModG91Y2guY2xpZW50WCAtIHRoaXMuX2xhc3RYKSwgTWF0aC5hYnModG91Y2guY2xpZW50WSAtIHRoaXMuX2xhc3RZKSkgPCBmYWxsYmFja1RvbGVyYW5jZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vbkRyYWdTdGFydChldnQsIHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKGdob3N0RWwpIHtcbiAgICAgICAgaWYgKGdob3N0TWF0cml4KSB7XG4gICAgICAgICAgZ2hvc3RNYXRyaXguZSArPSBkeCAtIChsYXN0RHggfHwgMCk7XG4gICAgICAgICAgZ2hvc3RNYXRyaXguZiArPSBkeSAtIChsYXN0RHkgfHwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2hvc3RNYXRyaXggPSB7XG4gICAgICAgICAgICBhOiAxLFxuICAgICAgICAgICAgYjogMCxcbiAgICAgICAgICAgIGM6IDAsXG4gICAgICAgICAgICBkOiAxLFxuICAgICAgICAgICAgZTogZHgsXG4gICAgICAgICAgICBmOiBkeVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNzc01hdHJpeCA9IFwibWF0cml4KFwiLmNvbmNhdChnaG9zdE1hdHJpeC5hLCBcIixcIikuY29uY2F0KGdob3N0TWF0cml4LmIsIFwiLFwiKS5jb25jYXQoZ2hvc3RNYXRyaXguYywgXCIsXCIpLmNvbmNhdChnaG9zdE1hdHJpeC5kLCBcIixcIikuY29uY2F0KGdob3N0TWF0cml4LmUsIFwiLFwiKS5jb25jYXQoZ2hvc3RNYXRyaXguZiwgXCIpXCIpO1xuICAgICAgICBjc3MoZ2hvc3RFbCwgJ3dlYmtpdFRyYW5zZm9ybScsIGNzc01hdHJpeCk7XG4gICAgICAgIGNzcyhnaG9zdEVsLCAnbW96VHJhbnNmb3JtJywgY3NzTWF0cml4KTtcbiAgICAgICAgY3NzKGdob3N0RWwsICdtc1RyYW5zZm9ybScsIGNzc01hdHJpeCk7XG4gICAgICAgIGNzcyhnaG9zdEVsLCAndHJhbnNmb3JtJywgY3NzTWF0cml4KTtcbiAgICAgICAgbGFzdER4ID0gZHg7XG4gICAgICAgIGxhc3REeSA9IGR5O1xuICAgICAgICB0b3VjaEV2dCA9IHRvdWNoO1xuICAgICAgfVxuICAgICAgZXZ0LmNhbmNlbGFibGUgJiYgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9LFxuICBfYXBwZW5kR2hvc3Q6IGZ1bmN0aW9uIF9hcHBlbmRHaG9zdCgpIHtcbiAgICAvLyBCdWcgaWYgdXNpbmcgc2NhbGUoKTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjYzNzA1OFxuICAgIC8vIE5vdCBiZWluZyBhZGp1c3RlZCBmb3JcbiAgICBpZiAoIWdob3N0RWwpIHtcbiAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLm9wdGlvbnMuZmFsbGJhY2tPbkJvZHkgPyBkb2N1bWVudC5ib2R5IDogcm9vdEVsLFxuICAgICAgICByZWN0ID0gZ2V0UmVjdChkcmFnRWwsIHRydWUsIFBvc2l0aW9uR2hvc3RBYnNvbHV0ZWx5LCB0cnVlLCBjb250YWluZXIpLFxuICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICAvLyBQb3NpdGlvbiBhYnNvbHV0ZWx5XG4gICAgICBpZiAoUG9zaXRpb25HaG9zdEFic29sdXRlbHkpIHtcbiAgICAgICAgLy8gR2V0IHJlbGF0aXZlbHkgcG9zaXRpb25lZCBwYXJlbnRcbiAgICAgICAgZ2hvc3RSZWxhdGl2ZVBhcmVudCA9IGNvbnRhaW5lcjtcbiAgICAgICAgd2hpbGUgKGNzcyhnaG9zdFJlbGF0aXZlUGFyZW50LCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycgJiYgY3NzKGdob3N0UmVsYXRpdmVQYXJlbnQsICd0cmFuc2Zvcm0nKSA9PT0gJ25vbmUnICYmIGdob3N0UmVsYXRpdmVQYXJlbnQgIT09IGRvY3VtZW50KSB7XG4gICAgICAgICAgZ2hvc3RSZWxhdGl2ZVBhcmVudCA9IGdob3N0UmVsYXRpdmVQYXJlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2hvc3RSZWxhdGl2ZVBhcmVudCAhPT0gZG9jdW1lbnQuYm9keSAmJiBnaG9zdFJlbGF0aXZlUGFyZW50ICE9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgICBpZiAoZ2hvc3RSZWxhdGl2ZVBhcmVudCA9PT0gZG9jdW1lbnQpIGdob3N0UmVsYXRpdmVQYXJlbnQgPSBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCk7XG4gICAgICAgICAgcmVjdC50b3AgKz0gZ2hvc3RSZWxhdGl2ZVBhcmVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgcmVjdC5sZWZ0ICs9IGdob3N0UmVsYXRpdmVQYXJlbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnaG9zdFJlbGF0aXZlUGFyZW50ID0gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGdob3N0UmVsYXRpdmVQYXJlbnRJbml0aWFsU2Nyb2xsID0gZ2V0UmVsYXRpdmVTY3JvbGxPZmZzZXQoZ2hvc3RSZWxhdGl2ZVBhcmVudCk7XG4gICAgICB9XG4gICAgICBnaG9zdEVsID0gZHJhZ0VsLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIHRvZ2dsZUNsYXNzKGdob3N0RWwsIG9wdGlvbnMuZ2hvc3RDbGFzcywgZmFsc2UpO1xuICAgICAgdG9nZ2xlQ2xhc3MoZ2hvc3RFbCwgb3B0aW9ucy5mYWxsYmFja0NsYXNzLCB0cnVlKTtcbiAgICAgIHRvZ2dsZUNsYXNzKGdob3N0RWwsIG9wdGlvbnMuZHJhZ0NsYXNzLCB0cnVlKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAndHJhbnNpdGlvbicsICcnKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAndHJhbnNmb3JtJywgJycpO1xuICAgICAgY3NzKGdob3N0RWwsICdib3gtc2l6aW5nJywgJ2JvcmRlci1ib3gnKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAnbWFyZ2luJywgMCk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ3RvcCcsIHJlY3QudG9wKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAnbGVmdCcsIHJlY3QubGVmdCk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ3dpZHRoJywgcmVjdC53aWR0aCk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ2hlaWdodCcsIHJlY3QuaGVpZ2h0KTtcbiAgICAgIGNzcyhnaG9zdEVsLCAnb3BhY2l0eScsICcwLjgnKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAncG9zaXRpb24nLCBQb3NpdGlvbkdob3N0QWJzb2x1dGVseSA/ICdhYnNvbHV0ZScgOiAnZml4ZWQnKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAnekluZGV4JywgJzEwMDAwMCcpO1xuICAgICAgY3NzKGdob3N0RWwsICdwb2ludGVyRXZlbnRzJywgJ25vbmUnKTtcbiAgICAgIFNvcnRhYmxlLmdob3N0ID0gZ2hvc3RFbDtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnaG9zdEVsKTtcblxuICAgICAgLy8gU2V0IHRyYW5zZm9ybS1vcmlnaW5cbiAgICAgIGNzcyhnaG9zdEVsLCAndHJhbnNmb3JtLW9yaWdpbicsIHRhcERpc3RhbmNlTGVmdCAvIHBhcnNlSW50KGdob3N0RWwuc3R5bGUud2lkdGgpICogMTAwICsgJyUgJyArIHRhcERpc3RhbmNlVG9wIC8gcGFyc2VJbnQoZ2hvc3RFbC5zdHlsZS5oZWlnaHQpICogMTAwICsgJyUnKTtcbiAgICB9XG4gIH0sXG4gIF9vbkRyYWdTdGFydDogZnVuY3Rpb24gX29uRHJhZ1N0YXJ0KCAvKipFdmVudCovZXZ0LCAvKipib29sZWFuKi9mYWxsYmFjaykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGRhdGFUcmFuc2ZlciA9IGV2dC5kYXRhVHJhbnNmZXI7XG4gICAgdmFyIG9wdGlvbnMgPSBfdGhpcy5vcHRpb25zO1xuICAgIHBsdWdpbkV2ZW50KCdkcmFnU3RhcnQnLCB0aGlzLCB7XG4gICAgICBldnQ6IGV2dFxuICAgIH0pO1xuICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSB7XG4gICAgICB0aGlzLl9vbkRyb3AoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcGx1Z2luRXZlbnQoJ3NldHVwQ2xvbmUnLCB0aGlzKTtcbiAgICBpZiAoIVNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHtcbiAgICAgIGNsb25lRWwgPSBjbG9uZShkcmFnRWwpO1xuICAgICAgY2xvbmVFbC5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICAgIGNsb25lRWwuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICBjbG9uZUVsLnN0eWxlWyd3aWxsLWNoYW5nZSddID0gJyc7XG4gICAgICB0aGlzLl9oaWRlQ2xvbmUoKTtcbiAgICAgIHRvZ2dsZUNsYXNzKGNsb25lRWwsIHRoaXMub3B0aW9ucy5jaG9zZW5DbGFzcywgZmFsc2UpO1xuICAgICAgU29ydGFibGUuY2xvbmUgPSBjbG9uZUVsO1xuICAgIH1cblxuICAgIC8vICMxMTQzOiBJRnJhbWUgc3VwcG9ydCB3b3JrYXJvdW5kXG4gICAgX3RoaXMuY2xvbmVJZCA9IF9uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBwbHVnaW5FdmVudCgnY2xvbmUnLCBfdGhpcyk7XG4gICAgICBpZiAoU29ydGFibGUuZXZlbnRDYW5jZWxlZCkgcmV0dXJuO1xuICAgICAgaWYgKCFfdGhpcy5vcHRpb25zLnJlbW92ZUNsb25lT25IaWRlKSB7XG4gICAgICAgIHJvb3RFbC5pbnNlcnRCZWZvcmUoY2xvbmVFbCwgZHJhZ0VsKTtcbiAgICAgIH1cbiAgICAgIF90aGlzLl9oaWRlQ2xvbmUoKTtcbiAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgc29ydGFibGU6IF90aGlzLFxuICAgICAgICBuYW1lOiAnY2xvbmUnXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAhZmFsbGJhY2sgJiYgdG9nZ2xlQ2xhc3MoZHJhZ0VsLCBvcHRpb25zLmRyYWdDbGFzcywgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgcHJvcGVyIGRyb3AgZXZlbnRzXG4gICAgaWYgKGZhbGxiYWNrKSB7XG4gICAgICBpZ25vcmVOZXh0Q2xpY2sgPSB0cnVlO1xuICAgICAgX3RoaXMuX2xvb3BJZCA9IHNldEludGVydmFsKF90aGlzLl9lbXVsYXRlRHJhZ092ZXIsIDUwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVW5kbyB3aGF0IHdhcyBzZXQgaW4gX3ByZXBhcmVEcmFnU3RhcnQgYmVmb3JlIGRyYWcgc3RhcnRlZFxuICAgICAgb2ZmKGRvY3VtZW50LCAnbW91c2V1cCcsIF90aGlzLl9vbkRyb3ApO1xuICAgICAgb2ZmKGRvY3VtZW50LCAndG91Y2hlbmQnLCBfdGhpcy5fb25Ecm9wKTtcbiAgICAgIG9mZihkb2N1bWVudCwgJ3RvdWNoY2FuY2VsJywgX3RoaXMuX29uRHJvcCk7XG4gICAgICBpZiAoZGF0YVRyYW5zZmVyKSB7XG4gICAgICAgIGRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnO1xuICAgICAgICBvcHRpb25zLnNldERhdGEgJiYgb3B0aW9ucy5zZXREYXRhLmNhbGwoX3RoaXMsIGRhdGFUcmFuc2ZlciwgZHJhZ0VsKTtcbiAgICAgIH1cbiAgICAgIG9uKGRvY3VtZW50LCAnZHJvcCcsIF90aGlzKTtcblxuICAgICAgLy8gIzEyNzYgZml4OlxuICAgICAgY3NzKGRyYWdFbCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVaKDApJyk7XG4gICAgfVxuICAgIGF3YWl0aW5nRHJhZ1N0YXJ0ZWQgPSB0cnVlO1xuICAgIF90aGlzLl9kcmFnU3RhcnRJZCA9IF9uZXh0VGljayhfdGhpcy5fZHJhZ1N0YXJ0ZWQuYmluZChfdGhpcywgZmFsbGJhY2ssIGV2dCkpO1xuICAgIG9uKGRvY3VtZW50LCAnc2VsZWN0c3RhcnQnLCBfdGhpcyk7XG4gICAgbW92ZWQgPSB0cnVlO1xuICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBpZiAoU2FmYXJpKSB7XG4gICAgICBjc3MoZG9jdW1lbnQuYm9keSwgJ3VzZXItc2VsZWN0JywgJ25vbmUnKTtcbiAgICB9XG4gIH0sXG4gIC8vIFJldHVybnMgdHJ1ZSAtIGlmIG5vIGZ1cnRoZXIgYWN0aW9uIGlzIG5lZWRlZCAoZWl0aGVyIGluc2VydGVkIG9yIGFub3RoZXIgY29uZGl0aW9uKVxuICBfb25EcmFnT3ZlcjogZnVuY3Rpb24gX29uRHJhZ092ZXIoIC8qKkV2ZW50Ki9ldnQpIHtcbiAgICB2YXIgZWwgPSB0aGlzLmVsLFxuICAgICAgdGFyZ2V0ID0gZXZ0LnRhcmdldCxcbiAgICAgIGRyYWdSZWN0LFxuICAgICAgdGFyZ2V0UmVjdCxcbiAgICAgIHJldmVydCxcbiAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICBncm91cCA9IG9wdGlvbnMuZ3JvdXAsXG4gICAgICBhY3RpdmVTb3J0YWJsZSA9IFNvcnRhYmxlLmFjdGl2ZSxcbiAgICAgIGlzT3duZXIgPSBhY3RpdmVHcm91cCA9PT0gZ3JvdXAsXG4gICAgICBjYW5Tb3J0ID0gb3B0aW9ucy5zb3J0LFxuICAgICAgZnJvbVNvcnRhYmxlID0gcHV0U29ydGFibGUgfHwgYWN0aXZlU29ydGFibGUsXG4gICAgICB2ZXJ0aWNhbCxcbiAgICAgIF90aGlzID0gdGhpcyxcbiAgICAgIGNvbXBsZXRlZEZpcmVkID0gZmFsc2U7XG4gICAgaWYgKF9zaWxlbnQpIHJldHVybjtcbiAgICBmdW5jdGlvbiBkcmFnT3ZlckV2ZW50KG5hbWUsIGV4dHJhKSB7XG4gICAgICBwbHVnaW5FdmVudChuYW1lLCBfdGhpcywgX29iamVjdFNwcmVhZDIoe1xuICAgICAgICBldnQ6IGV2dCxcbiAgICAgICAgaXNPd25lcjogaXNPd25lcixcbiAgICAgICAgYXhpczogdmVydGljYWwgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnLFxuICAgICAgICByZXZlcnQ6IHJldmVydCxcbiAgICAgICAgZHJhZ1JlY3Q6IGRyYWdSZWN0LFxuICAgICAgICB0YXJnZXRSZWN0OiB0YXJnZXRSZWN0LFxuICAgICAgICBjYW5Tb3J0OiBjYW5Tb3J0LFxuICAgICAgICBmcm9tU29ydGFibGU6IGZyb21Tb3J0YWJsZSxcbiAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgIGNvbXBsZXRlZDogY29tcGxldGVkLFxuICAgICAgICBvbk1vdmU6IGZ1bmN0aW9uIG9uTW92ZSh0YXJnZXQsIGFmdGVyKSB7XG4gICAgICAgICAgcmV0dXJuIF9vbk1vdmUocm9vdEVsLCBlbCwgZHJhZ0VsLCBkcmFnUmVjdCwgdGFyZ2V0LCBnZXRSZWN0KHRhcmdldCksIGV2dCwgYWZ0ZXIpO1xuICAgICAgICB9LFxuICAgICAgICBjaGFuZ2VkOiBjaGFuZ2VkXG4gICAgICB9LCBleHRyYSkpO1xuICAgIH1cblxuICAgIC8vIENhcHR1cmUgYW5pbWF0aW9uIHN0YXRlXG4gICAgZnVuY3Rpb24gY2FwdHVyZSgpIHtcbiAgICAgIGRyYWdPdmVyRXZlbnQoJ2RyYWdPdmVyQW5pbWF0aW9uQ2FwdHVyZScpO1xuICAgICAgX3RoaXMuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgICBpZiAoX3RoaXMgIT09IGZyb21Tb3J0YWJsZSkge1xuICAgICAgICBmcm9tU29ydGFibGUuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGludm9jYXRpb24gd2hlbiBkcmFnRWwgaXMgaW5zZXJ0ZWQgKG9yIGNvbXBsZXRlZClcbiAgICBmdW5jdGlvbiBjb21wbGV0ZWQoaW5zZXJ0aW9uKSB7XG4gICAgICBkcmFnT3ZlckV2ZW50KCdkcmFnT3ZlckNvbXBsZXRlZCcsIHtcbiAgICAgICAgaW5zZXJ0aW9uOiBpbnNlcnRpb25cbiAgICAgIH0pO1xuICAgICAgaWYgKGluc2VydGlvbikge1xuICAgICAgICAvLyBDbG9uZXMgbXVzdCBiZSBoaWRkZW4gYmVmb3JlIGZvbGRpbmcgYW5pbWF0aW9uIHRvIGNhcHR1cmUgZHJhZ1JlY3RBYnNvbHV0ZSBwcm9wZXJseVxuICAgICAgICBpZiAoaXNPd25lcikge1xuICAgICAgICAgIGFjdGl2ZVNvcnRhYmxlLl9oaWRlQ2xvbmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhY3RpdmVTb3J0YWJsZS5fc2hvd0Nsb25lKF90aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX3RoaXMgIT09IGZyb21Tb3J0YWJsZSkge1xuICAgICAgICAgIC8vIFNldCBnaG9zdCBjbGFzcyB0byBuZXcgc29ydGFibGUncyBnaG9zdCBjbGFzc1xuICAgICAgICAgIHRvZ2dsZUNsYXNzKGRyYWdFbCwgcHV0U29ydGFibGUgPyBwdXRTb3J0YWJsZS5vcHRpb25zLmdob3N0Q2xhc3MgOiBhY3RpdmVTb3J0YWJsZS5vcHRpb25zLmdob3N0Q2xhc3MsIGZhbHNlKTtcbiAgICAgICAgICB0b2dnbGVDbGFzcyhkcmFnRWwsIG9wdGlvbnMuZ2hvc3RDbGFzcywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHB1dFNvcnRhYmxlICE9PSBfdGhpcyAmJiBfdGhpcyAhPT0gU29ydGFibGUuYWN0aXZlKSB7XG4gICAgICAgICAgcHV0U29ydGFibGUgPSBfdGhpcztcbiAgICAgICAgfSBlbHNlIGlmIChfdGhpcyA9PT0gU29ydGFibGUuYWN0aXZlICYmIHB1dFNvcnRhYmxlKSB7XG4gICAgICAgICAgcHV0U29ydGFibGUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQW5pbWF0aW9uXG4gICAgICAgIGlmIChmcm9tU29ydGFibGUgPT09IF90aGlzKSB7XG4gICAgICAgICAgX3RoaXMuX2lnbm9yZVdoaWxlQW5pbWF0aW5nID0gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLmFuaW1hdGVBbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGRyYWdPdmVyRXZlbnQoJ2RyYWdPdmVyQW5pbWF0aW9uQ29tcGxldGUnKTtcbiAgICAgICAgICBfdGhpcy5faWdub3JlV2hpbGVBbmltYXRpbmcgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKF90aGlzICE9PSBmcm9tU29ydGFibGUpIHtcbiAgICAgICAgICBmcm9tU29ydGFibGUuYW5pbWF0ZUFsbCgpO1xuICAgICAgICAgIGZyb21Tb3J0YWJsZS5faWdub3JlV2hpbGVBbmltYXRpbmcgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE51bGwgbGFzdFRhcmdldCBpZiBpdCBpcyBub3QgaW5zaWRlIGEgcHJldmlvdXNseSBzd2FwcGVkIGVsZW1lbnRcbiAgICAgIGlmICh0YXJnZXQgPT09IGRyYWdFbCAmJiAhZHJhZ0VsLmFuaW1hdGVkIHx8IHRhcmdldCA9PT0gZWwgJiYgIXRhcmdldC5hbmltYXRlZCkge1xuICAgICAgICBsYXN0VGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gbm8gYnViYmxpbmcgYW5kIG5vdCBmYWxsYmFja1xuICAgICAgaWYgKCFvcHRpb25zLmRyYWdvdmVyQnViYmxlICYmICFldnQucm9vdEVsICYmIHRhcmdldCAhPT0gZG9jdW1lbnQpIHtcbiAgICAgICAgZHJhZ0VsLnBhcmVudE5vZGVbZXhwYW5kb10uX2lzT3V0c2lkZVRoaXNFbChldnQudGFyZ2V0KTtcblxuICAgICAgICAvLyBEbyBub3QgZGV0ZWN0IGZvciBlbXB0eSBpbnNlcnQgaWYgYWxyZWFkeSBpbnNlcnRlZFxuICAgICAgICAhaW5zZXJ0aW9uICYmIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50KGV2dCk7XG4gICAgICB9XG4gICAgICAhb3B0aW9ucy5kcmFnb3ZlckJ1YmJsZSAmJiBldnQuc3RvcFByb3BhZ2F0aW9uICYmIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHJldHVybiBjb21wbGV0ZWRGaXJlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQ2FsbCB3aGVuIGRyYWdFbCBoYXMgYmVlbiBpbnNlcnRlZFxuICAgIGZ1bmN0aW9uIGNoYW5nZWQoKSB7XG4gICAgICBuZXdJbmRleCA9IGluZGV4KGRyYWdFbCk7XG4gICAgICBuZXdEcmFnZ2FibGVJbmRleCA9IGluZGV4KGRyYWdFbCwgb3B0aW9ucy5kcmFnZ2FibGUpO1xuICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICBzb3J0YWJsZTogX3RoaXMsXG4gICAgICAgIG5hbWU6ICdjaGFuZ2UnLFxuICAgICAgICB0b0VsOiBlbCxcbiAgICAgICAgbmV3SW5kZXg6IG5ld0luZGV4LFxuICAgICAgICBuZXdEcmFnZ2FibGVJbmRleDogbmV3RHJhZ2dhYmxlSW5kZXgsXG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChldnQucHJldmVudERlZmF1bHQgIT09IHZvaWQgMCkge1xuICAgICAgZXZ0LmNhbmNlbGFibGUgJiYgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIHRhcmdldCA9IGNsb3Nlc3QodGFyZ2V0LCBvcHRpb25zLmRyYWdnYWJsZSwgZWwsIHRydWUpO1xuICAgIGRyYWdPdmVyRXZlbnQoJ2RyYWdPdmVyJyk7XG4gICAgaWYgKFNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHJldHVybiBjb21wbGV0ZWRGaXJlZDtcbiAgICBpZiAoZHJhZ0VsLmNvbnRhaW5zKGV2dC50YXJnZXQpIHx8IHRhcmdldC5hbmltYXRlZCAmJiB0YXJnZXQuYW5pbWF0aW5nWCAmJiB0YXJnZXQuYW5pbWF0aW5nWSB8fCBfdGhpcy5faWdub3JlV2hpbGVBbmltYXRpbmcgPT09IHRhcmdldCkge1xuICAgICAgcmV0dXJuIGNvbXBsZXRlZChmYWxzZSk7XG4gICAgfVxuICAgIGlnbm9yZU5leHRDbGljayA9IGZhbHNlO1xuICAgIGlmIChhY3RpdmVTb3J0YWJsZSAmJiAhb3B0aW9ucy5kaXNhYmxlZCAmJiAoaXNPd25lciA/IGNhblNvcnQgfHwgKHJldmVydCA9IHBhcmVudEVsICE9PSByb290RWwpIC8vIFJldmVydGluZyBpdGVtIGludG8gdGhlIG9yaWdpbmFsIGxpc3RcbiAgICA6IHB1dFNvcnRhYmxlID09PSB0aGlzIHx8ICh0aGlzLmxhc3RQdXRNb2RlID0gYWN0aXZlR3JvdXAuY2hlY2tQdWxsKHRoaXMsIGFjdGl2ZVNvcnRhYmxlLCBkcmFnRWwsIGV2dCkpICYmIGdyb3VwLmNoZWNrUHV0KHRoaXMsIGFjdGl2ZVNvcnRhYmxlLCBkcmFnRWwsIGV2dCkpKSB7XG4gICAgICB2ZXJ0aWNhbCA9IHRoaXMuX2dldERpcmVjdGlvbihldnQsIHRhcmdldCkgPT09ICd2ZXJ0aWNhbCc7XG4gICAgICBkcmFnUmVjdCA9IGdldFJlY3QoZHJhZ0VsKTtcbiAgICAgIGRyYWdPdmVyRXZlbnQoJ2RyYWdPdmVyVmFsaWQnKTtcbiAgICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSByZXR1cm4gY29tcGxldGVkRmlyZWQ7XG4gICAgICBpZiAocmV2ZXJ0KSB7XG4gICAgICAgIHBhcmVudEVsID0gcm9vdEVsOyAvLyBhY3R1YWxpemF0aW9uXG4gICAgICAgIGNhcHR1cmUoKTtcbiAgICAgICAgdGhpcy5faGlkZUNsb25lKCk7XG4gICAgICAgIGRyYWdPdmVyRXZlbnQoJ3JldmVydCcpO1xuICAgICAgICBpZiAoIVNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHtcbiAgICAgICAgICBpZiAobmV4dEVsKSB7XG4gICAgICAgICAgICByb290RWwuaW5zZXJ0QmVmb3JlKGRyYWdFbCwgbmV4dEVsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcm9vdEVsLmFwcGVuZENoaWxkKGRyYWdFbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wbGV0ZWQodHJ1ZSk7XG4gICAgICB9XG4gICAgICB2YXIgZWxMYXN0Q2hpbGQgPSBsYXN0Q2hpbGQoZWwsIG9wdGlvbnMuZHJhZ2dhYmxlKTtcbiAgICAgIGlmICghZWxMYXN0Q2hpbGQgfHwgX2dob3N0SXNMYXN0KGV2dCwgdmVydGljYWwsIHRoaXMpICYmICFlbExhc3RDaGlsZC5hbmltYXRlZCkge1xuICAgICAgICAvLyBJbnNlcnQgdG8gZW5kIG9mIGxpc3RcblxuICAgICAgICAvLyBJZiBhbHJlYWR5IGF0IGVuZCBvZiBsaXN0OiBEbyBub3QgaW5zZXJ0XG4gICAgICAgIGlmIChlbExhc3RDaGlsZCA9PT0gZHJhZ0VsKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbXBsZXRlZChmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIGxhc3QgZWxlbWVudCwgaXQgaXMgdGhlIHRhcmdldFxuICAgICAgICBpZiAoZWxMYXN0Q2hpbGQgJiYgZWwgPT09IGV2dC50YXJnZXQpIHtcbiAgICAgICAgICB0YXJnZXQgPSBlbExhc3RDaGlsZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgdGFyZ2V0UmVjdCA9IGdldFJlY3QodGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX29uTW92ZShyb290RWwsIGVsLCBkcmFnRWwsIGRyYWdSZWN0LCB0YXJnZXQsIHRhcmdldFJlY3QsIGV2dCwgISF0YXJnZXQpICE9PSBmYWxzZSkge1xuICAgICAgICAgIGNhcHR1cmUoKTtcbiAgICAgICAgICBpZiAoZWxMYXN0Q2hpbGQgJiYgZWxMYXN0Q2hpbGQubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgIC8vIHRoZSBsYXN0IGRyYWdnYWJsZSBlbGVtZW50IGlzIG5vdCB0aGUgbGFzdCBub2RlXG4gICAgICAgICAgICBlbC5pbnNlcnRCZWZvcmUoZHJhZ0VsLCBlbExhc3RDaGlsZC5uZXh0U2libGluZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGRyYWdFbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcmVudEVsID0gZWw7IC8vIGFjdHVhbGl6YXRpb25cblxuICAgICAgICAgIGNoYW5nZWQoKTtcbiAgICAgICAgICByZXR1cm4gY29tcGxldGVkKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVsTGFzdENoaWxkICYmIF9naG9zdElzRmlyc3QoZXZ0LCB2ZXJ0aWNhbCwgdGhpcykpIHtcbiAgICAgICAgLy8gSW5zZXJ0IHRvIHN0YXJ0IG9mIGxpc3RcbiAgICAgICAgdmFyIGZpcnN0Q2hpbGQgPSBnZXRDaGlsZChlbCwgMCwgb3B0aW9ucywgdHJ1ZSk7XG4gICAgICAgIGlmIChmaXJzdENoaWxkID09PSBkcmFnRWwpIHtcbiAgICAgICAgICByZXR1cm4gY29tcGxldGVkKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQgPSBmaXJzdENoaWxkO1xuICAgICAgICB0YXJnZXRSZWN0ID0gZ2V0UmVjdCh0YXJnZXQpO1xuICAgICAgICBpZiAoX29uTW92ZShyb290RWwsIGVsLCBkcmFnRWwsIGRyYWdSZWN0LCB0YXJnZXQsIHRhcmdldFJlY3QsIGV2dCwgZmFsc2UpICE9PSBmYWxzZSkge1xuICAgICAgICAgIGNhcHR1cmUoKTtcbiAgICAgICAgICBlbC5pbnNlcnRCZWZvcmUoZHJhZ0VsLCBmaXJzdENoaWxkKTtcbiAgICAgICAgICBwYXJlbnRFbCA9IGVsOyAvLyBhY3R1YWxpemF0aW9uXG5cbiAgICAgICAgICBjaGFuZ2VkKCk7XG4gICAgICAgICAgcmV0dXJuIGNvbXBsZXRlZCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0YXJnZXQucGFyZW50Tm9kZSA9PT0gZWwpIHtcbiAgICAgICAgdGFyZ2V0UmVjdCA9IGdldFJlY3QodGFyZ2V0KTtcbiAgICAgICAgdmFyIGRpcmVjdGlvbiA9IDAsXG4gICAgICAgICAgdGFyZ2V0QmVmb3JlRmlyc3RTd2FwLFxuICAgICAgICAgIGRpZmZlcmVudExldmVsID0gZHJhZ0VsLnBhcmVudE5vZGUgIT09IGVsLFxuICAgICAgICAgIGRpZmZlcmVudFJvd0NvbCA9ICFfZHJhZ0VsSW5Sb3dDb2x1bW4oZHJhZ0VsLmFuaW1hdGVkICYmIGRyYWdFbC50b1JlY3QgfHwgZHJhZ1JlY3QsIHRhcmdldC5hbmltYXRlZCAmJiB0YXJnZXQudG9SZWN0IHx8IHRhcmdldFJlY3QsIHZlcnRpY2FsKSxcbiAgICAgICAgICBzaWRlMSA9IHZlcnRpY2FsID8gJ3RvcCcgOiAnbGVmdCcsXG4gICAgICAgICAgc2Nyb2xsZWRQYXN0VG9wID0gaXNTY3JvbGxlZFBhc3QodGFyZ2V0LCAndG9wJywgJ3RvcCcpIHx8IGlzU2Nyb2xsZWRQYXN0KGRyYWdFbCwgJ3RvcCcsICd0b3AnKSxcbiAgICAgICAgICBzY3JvbGxCZWZvcmUgPSBzY3JvbGxlZFBhc3RUb3AgPyBzY3JvbGxlZFBhc3RUb3Auc2Nyb2xsVG9wIDogdm9pZCAwO1xuICAgICAgICBpZiAobGFzdFRhcmdldCAhPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgdGFyZ2V0QmVmb3JlRmlyc3RTd2FwID0gdGFyZ2V0UmVjdFtzaWRlMV07XG4gICAgICAgICAgcGFzdEZpcnN0SW52ZXJ0VGhyZXNoID0gZmFsc2U7XG4gICAgICAgICAgaXNDaXJjdW1zdGFudGlhbEludmVydCA9ICFkaWZmZXJlbnRSb3dDb2wgJiYgb3B0aW9ucy5pbnZlcnRTd2FwIHx8IGRpZmZlcmVudExldmVsO1xuICAgICAgICB9XG4gICAgICAgIGRpcmVjdGlvbiA9IF9nZXRTd2FwRGlyZWN0aW9uKGV2dCwgdGFyZ2V0LCB0YXJnZXRSZWN0LCB2ZXJ0aWNhbCwgZGlmZmVyZW50Um93Q29sID8gMSA6IG9wdGlvbnMuc3dhcFRocmVzaG9sZCwgb3B0aW9ucy5pbnZlcnRlZFN3YXBUaHJlc2hvbGQgPT0gbnVsbCA/IG9wdGlvbnMuc3dhcFRocmVzaG9sZCA6IG9wdGlvbnMuaW52ZXJ0ZWRTd2FwVGhyZXNob2xkLCBpc0NpcmN1bXN0YW50aWFsSW52ZXJ0LCBsYXN0VGFyZ2V0ID09PSB0YXJnZXQpO1xuICAgICAgICB2YXIgc2libGluZztcbiAgICAgICAgaWYgKGRpcmVjdGlvbiAhPT0gMCkge1xuICAgICAgICAgIC8vIENoZWNrIGlmIHRhcmdldCBpcyBiZXNpZGUgZHJhZ0VsIGluIHJlc3BlY3RpdmUgZGlyZWN0aW9uIChpZ25vcmluZyBoaWRkZW4gZWxlbWVudHMpXG4gICAgICAgICAgdmFyIGRyYWdJbmRleCA9IGluZGV4KGRyYWdFbCk7XG4gICAgICAgICAgZG8ge1xuICAgICAgICAgICAgZHJhZ0luZGV4IC09IGRpcmVjdGlvbjtcbiAgICAgICAgICAgIHNpYmxpbmcgPSBwYXJlbnRFbC5jaGlsZHJlbltkcmFnSW5kZXhdO1xuICAgICAgICAgIH0gd2hpbGUgKHNpYmxpbmcgJiYgKGNzcyhzaWJsaW5nLCAnZGlzcGxheScpID09PSAnbm9uZScgfHwgc2libGluZyA9PT0gZ2hvc3RFbCkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGRyYWdFbCBpcyBhbHJlYWR5IGJlc2lkZSB0YXJnZXQ6IERvIG5vdCBpbnNlcnRcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gMCB8fCBzaWJsaW5nID09PSB0YXJnZXQpIHtcbiAgICAgICAgICByZXR1cm4gY29tcGxldGVkKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0VGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICBsYXN0RGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICB2YXIgbmV4dFNpYmxpbmcgPSB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLFxuICAgICAgICAgIGFmdGVyID0gZmFsc2U7XG4gICAgICAgIGFmdGVyID0gZGlyZWN0aW9uID09PSAxO1xuICAgICAgICB2YXIgbW92ZVZlY3RvciA9IF9vbk1vdmUocm9vdEVsLCBlbCwgZHJhZ0VsLCBkcmFnUmVjdCwgdGFyZ2V0LCB0YXJnZXRSZWN0LCBldnQsIGFmdGVyKTtcbiAgICAgICAgaWYgKG1vdmVWZWN0b3IgIT09IGZhbHNlKSB7XG4gICAgICAgICAgaWYgKG1vdmVWZWN0b3IgPT09IDEgfHwgbW92ZVZlY3RvciA9PT0gLTEpIHtcbiAgICAgICAgICAgIGFmdGVyID0gbW92ZVZlY3RvciA9PT0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgX3NpbGVudCA9IHRydWU7XG4gICAgICAgICAgc2V0VGltZW91dChfdW5zaWxlbnQsIDMwKTtcbiAgICAgICAgICBjYXB0dXJlKCk7XG4gICAgICAgICAgaWYgKGFmdGVyICYmICFuZXh0U2libGluZykge1xuICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZHJhZ0VsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRyYWdFbCwgYWZ0ZXIgPyBuZXh0U2libGluZyA6IHRhcmdldCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gVW5kbyBjaHJvbWUncyBzY3JvbGwgYWRqdXN0bWVudCAoaGFzIG5vIGVmZmVjdCBvbiBvdGhlciBicm93c2VycylcbiAgICAgICAgICBpZiAoc2Nyb2xsZWRQYXN0VG9wKSB7XG4gICAgICAgICAgICBzY3JvbGxCeShzY3JvbGxlZFBhc3RUb3AsIDAsIHNjcm9sbEJlZm9yZSAtIHNjcm9sbGVkUGFzdFRvcC5zY3JvbGxUb3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwYXJlbnRFbCA9IGRyYWdFbC5wYXJlbnROb2RlOyAvLyBhY3R1YWxpemF0aW9uXG5cbiAgICAgICAgICAvLyBtdXN0IGJlIGRvbmUgYmVmb3JlIGFuaW1hdGlvblxuICAgICAgICAgIGlmICh0YXJnZXRCZWZvcmVGaXJzdFN3YXAgIT09IHVuZGVmaW5lZCAmJiAhaXNDaXJjdW1zdGFudGlhbEludmVydCkge1xuICAgICAgICAgICAgdGFyZ2V0TW92ZURpc3RhbmNlID0gTWF0aC5hYnModGFyZ2V0QmVmb3JlRmlyc3RTd2FwIC0gZ2V0UmVjdCh0YXJnZXQpW3NpZGUxXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNoYW5nZWQoKTtcbiAgICAgICAgICByZXR1cm4gY29tcGxldGVkKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZWwuY29udGFpbnMoZHJhZ0VsKSkge1xuICAgICAgICByZXR1cm4gY29tcGxldGVkKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuICBfaWdub3JlV2hpbGVBbmltYXRpbmc6IG51bGwsXG4gIF9vZmZNb3ZlRXZlbnRzOiBmdW5jdGlvbiBfb2ZmTW92ZUV2ZW50cygpIHtcbiAgICBvZmYoZG9jdW1lbnQsICdtb3VzZW1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgb2ZmKGRvY3VtZW50LCAndG91Y2htb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xuICAgIG9mZihkb2N1bWVudCwgJ3BvaW50ZXJtb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xuICAgIG9mZihkb2N1bWVudCwgJ2RyYWdvdmVyJywgbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQpO1xuICAgIG9mZihkb2N1bWVudCwgJ21vdXNlbW92ZScsIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50KTtcbiAgICBvZmYoZG9jdW1lbnQsICd0b3VjaG1vdmUnLCBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudCk7XG4gIH0sXG4gIF9vZmZVcEV2ZW50czogZnVuY3Rpb24gX29mZlVwRXZlbnRzKCkge1xuICAgIHZhciBvd25lckRvY3VtZW50ID0gdGhpcy5lbC5vd25lckRvY3VtZW50O1xuICAgIG9mZihvd25lckRvY3VtZW50LCAnbW91c2V1cCcsIHRoaXMuX29uRHJvcCk7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICd0b3VjaGVuZCcsIHRoaXMuX29uRHJvcCk7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICdwb2ludGVydXAnLCB0aGlzLl9vbkRyb3ApO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAncG9pbnRlcmNhbmNlbCcsIHRoaXMuX29uRHJvcCk7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICd0b3VjaGNhbmNlbCcsIHRoaXMuX29uRHJvcCk7XG4gICAgb2ZmKGRvY3VtZW50LCAnc2VsZWN0c3RhcnQnLCB0aGlzKTtcbiAgfSxcbiAgX29uRHJvcDogZnVuY3Rpb24gX29uRHJvcCggLyoqRXZlbnQqL2V2dCkge1xuICAgIHZhciBlbCA9IHRoaXMuZWwsXG4gICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgLy8gR2V0IHRoZSBpbmRleCBvZiB0aGUgZHJhZ2dlZCBlbGVtZW50IHdpdGhpbiBpdHMgcGFyZW50XG4gICAgbmV3SW5kZXggPSBpbmRleChkcmFnRWwpO1xuICAgIG5ld0RyYWdnYWJsZUluZGV4ID0gaW5kZXgoZHJhZ0VsLCBvcHRpb25zLmRyYWdnYWJsZSk7XG4gICAgcGx1Z2luRXZlbnQoJ2Ryb3AnLCB0aGlzLCB7XG4gICAgICBldnQ6IGV2dFxuICAgIH0pO1xuICAgIHBhcmVudEVsID0gZHJhZ0VsICYmIGRyYWdFbC5wYXJlbnROb2RlO1xuXG4gICAgLy8gR2V0IGFnYWluIGFmdGVyIHBsdWdpbiBldmVudFxuICAgIG5ld0luZGV4ID0gaW5kZXgoZHJhZ0VsKTtcbiAgICBuZXdEcmFnZ2FibGVJbmRleCA9IGluZGV4KGRyYWdFbCwgb3B0aW9ucy5kcmFnZ2FibGUpO1xuICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSB7XG4gICAgICB0aGlzLl9udWxsaW5nKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0aW5nRHJhZ1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICBpc0NpcmN1bXN0YW50aWFsSW52ZXJ0ID0gZmFsc2U7XG4gICAgcGFzdEZpcnN0SW52ZXJ0VGhyZXNoID0gZmFsc2U7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9sb29wSWQpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl9kcmFnU3RhcnRUaW1lcik7XG4gICAgX2NhbmNlbE5leHRUaWNrKHRoaXMuY2xvbmVJZCk7XG4gICAgX2NhbmNlbE5leHRUaWNrKHRoaXMuX2RyYWdTdGFydElkKTtcblxuICAgIC8vIFVuYmluZCBldmVudHNcbiAgICBpZiAodGhpcy5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICAgIG9mZihkb2N1bWVudCwgJ2Ryb3AnLCB0aGlzKTtcbiAgICAgIG9mZihlbCwgJ2RyYWdzdGFydCcsIHRoaXMuX29uRHJhZ1N0YXJ0KTtcbiAgICB9XG4gICAgdGhpcy5fb2ZmTW92ZUV2ZW50cygpO1xuICAgIHRoaXMuX29mZlVwRXZlbnRzKCk7XG4gICAgaWYgKFNhZmFyaSkge1xuICAgICAgY3NzKGRvY3VtZW50LmJvZHksICd1c2VyLXNlbGVjdCcsICcnKTtcbiAgICB9XG4gICAgY3NzKGRyYWdFbCwgJ3RyYW5zZm9ybScsICcnKTtcbiAgICBpZiAoZXZ0KSB7XG4gICAgICBpZiAobW92ZWQpIHtcbiAgICAgICAgZXZ0LmNhbmNlbGFibGUgJiYgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICFvcHRpb25zLmRyb3BCdWJibGUgJiYgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgICAgZ2hvc3RFbCAmJiBnaG9zdEVsLnBhcmVudE5vZGUgJiYgZ2hvc3RFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGdob3N0RWwpO1xuICAgICAgaWYgKHJvb3RFbCA9PT0gcGFyZW50RWwgfHwgcHV0U29ydGFibGUgJiYgcHV0U29ydGFibGUubGFzdFB1dE1vZGUgIT09ICdjbG9uZScpIHtcbiAgICAgICAgLy8gUmVtb3ZlIGNsb25lKHMpXG4gICAgICAgIGNsb25lRWwgJiYgY2xvbmVFbC5wYXJlbnROb2RlICYmIGNsb25lRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjbG9uZUVsKTtcbiAgICAgIH1cbiAgICAgIGlmIChkcmFnRWwpIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgICAgICAgb2ZmKGRyYWdFbCwgJ2RyYWdlbmQnLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBfZGlzYWJsZURyYWdnYWJsZShkcmFnRWwpO1xuICAgICAgICBkcmFnRWwuc3R5bGVbJ3dpbGwtY2hhbmdlJ10gPSAnJztcblxuICAgICAgICAvLyBSZW1vdmUgY2xhc3Nlc1xuICAgICAgICAvLyBnaG9zdENsYXNzIGlzIGFkZGVkIGluIGRyYWdTdGFydGVkXG4gICAgICAgIGlmIChtb3ZlZCAmJiAhYXdhaXRpbmdEcmFnU3RhcnRlZCkge1xuICAgICAgICAgIHRvZ2dsZUNsYXNzKGRyYWdFbCwgcHV0U29ydGFibGUgPyBwdXRTb3J0YWJsZS5vcHRpb25zLmdob3N0Q2xhc3MgOiB0aGlzLm9wdGlvbnMuZ2hvc3RDbGFzcywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHRvZ2dsZUNsYXNzKGRyYWdFbCwgdGhpcy5vcHRpb25zLmNob3NlbkNsYXNzLCBmYWxzZSk7XG5cbiAgICAgICAgLy8gRHJhZyBzdG9wIGV2ZW50XG4gICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICBuYW1lOiAndW5jaG9vc2UnLFxuICAgICAgICAgIHRvRWw6IHBhcmVudEVsLFxuICAgICAgICAgIG5ld0luZGV4OiBudWxsLFxuICAgICAgICAgIG5ld0RyYWdnYWJsZUluZGV4OiBudWxsLFxuICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJvb3RFbCAhPT0gcGFyZW50RWwpIHtcbiAgICAgICAgICBpZiAobmV3SW5kZXggPj0gMCkge1xuICAgICAgICAgICAgLy8gQWRkIGV2ZW50XG4gICAgICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICAgIHJvb3RFbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgIG5hbWU6ICdhZGQnLFxuICAgICAgICAgICAgICB0b0VsOiBwYXJlbnRFbCxcbiAgICAgICAgICAgICAgZnJvbUVsOiByb290RWwsXG4gICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSBldmVudFxuICAgICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICAgICAgbmFtZTogJ3JlbW92ZScsXG4gICAgICAgICAgICAgIHRvRWw6IHBhcmVudEVsLFxuICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBkcmFnIGZyb20gb25lIGxpc3QgYW5kIGRyb3AgaW50byBhbm90aGVyXG4gICAgICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICAgIHJvb3RFbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgIG5hbWU6ICdzb3J0JyxcbiAgICAgICAgICAgICAgdG9FbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgIGZyb21FbDogcm9vdEVsLFxuICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICAgICAgbmFtZTogJ3NvcnQnLFxuICAgICAgICAgICAgICB0b0VsOiBwYXJlbnRFbCxcbiAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHV0U29ydGFibGUgJiYgcHV0U29ydGFibGUuc2F2ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChuZXdJbmRleCAhPT0gb2xkSW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChuZXdJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgIC8vIGRyYWcgJiBkcm9wIHdpdGhpbiB0aGUgc2FtZSBsaXN0XG4gICAgICAgICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICAgICAgICBuYW1lOiAndXBkYXRlJyxcbiAgICAgICAgICAgICAgICB0b0VsOiBwYXJlbnRFbCxcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnc29ydCcsXG4gICAgICAgICAgICAgICAgdG9FbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoU29ydGFibGUuYWN0aXZlKSB7XG4gICAgICAgICAgLyoganNoaW50IGVxbnVsbDp0cnVlICovXG4gICAgICAgICAgaWYgKG5ld0luZGV4ID09IG51bGwgfHwgbmV3SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBuZXdJbmRleCA9IG9sZEluZGV4O1xuICAgICAgICAgICAgbmV3RHJhZ2dhYmxlSW5kZXggPSBvbGREcmFnZ2FibGVJbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgc29ydGFibGU6IHRoaXMsXG4gICAgICAgICAgICBuYW1lOiAnZW5kJyxcbiAgICAgICAgICAgIHRvRWw6IHBhcmVudEVsLFxuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBTYXZlIHNvcnRpbmdcbiAgICAgICAgICB0aGlzLnNhdmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9udWxsaW5nKCk7XG4gIH0sXG4gIF9udWxsaW5nOiBmdW5jdGlvbiBfbnVsbGluZygpIHtcbiAgICBwbHVnaW5FdmVudCgnbnVsbGluZycsIHRoaXMpO1xuICAgIHJvb3RFbCA9IGRyYWdFbCA9IHBhcmVudEVsID0gZ2hvc3RFbCA9IG5leHRFbCA9IGNsb25lRWwgPSBsYXN0RG93bkVsID0gY2xvbmVIaWRkZW4gPSB0YXBFdnQgPSB0b3VjaEV2dCA9IG1vdmVkID0gbmV3SW5kZXggPSBuZXdEcmFnZ2FibGVJbmRleCA9IG9sZEluZGV4ID0gb2xkRHJhZ2dhYmxlSW5kZXggPSBsYXN0VGFyZ2V0ID0gbGFzdERpcmVjdGlvbiA9IHB1dFNvcnRhYmxlID0gYWN0aXZlR3JvdXAgPSBTb3J0YWJsZS5kcmFnZ2VkID0gU29ydGFibGUuZ2hvc3QgPSBTb3J0YWJsZS5jbG9uZSA9IFNvcnRhYmxlLmFjdGl2ZSA9IG51bGw7XG4gICAgdmFyIGVsID0gdGhpcy5lbDtcbiAgICBzYXZlZElucHV0Q2hlY2tlZC5mb3JFYWNoKGZ1bmN0aW9uIChjaGVja0VsKSB7XG4gICAgICBpZiAoZWwuY29udGFpbnMoY2hlY2tFbCkpIHtcbiAgICAgICAgY2hlY2tFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzYXZlZElucHV0Q2hlY2tlZC5sZW5ndGggPSBsYXN0RHggPSBsYXN0RHkgPSAwO1xuICB9LFxuICBoYW5kbGVFdmVudDogZnVuY3Rpb24gaGFuZGxlRXZlbnQoIC8qKkV2ZW50Ki9ldnQpIHtcbiAgICBzd2l0Y2ggKGV2dC50eXBlKSB7XG4gICAgICBjYXNlICdkcm9wJzpcbiAgICAgIGNhc2UgJ2RyYWdlbmQnOlxuICAgICAgICB0aGlzLl9vbkRyb3AoZXZ0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkcmFnZW50ZXInOlxuICAgICAgY2FzZSAnZHJhZ292ZXInOlxuICAgICAgICBpZiAoZHJhZ0VsKSB7XG4gICAgICAgICAgdGhpcy5fb25EcmFnT3ZlcihldnQpO1xuICAgICAgICAgIF9nbG9iYWxEcmFnT3ZlcihldnQpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2VsZWN0c3RhcnQnOlxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9LFxuICAvKipcclxuICAgKiBTZXJpYWxpemVzIHRoZSBpdGVtIGludG8gYW4gYXJyYXkgb2Ygc3RyaW5nLlxyXG4gICAqIEByZXR1cm5zIHtTdHJpbmdbXX1cclxuICAgKi9cbiAgdG9BcnJheTogZnVuY3Rpb24gdG9BcnJheSgpIHtcbiAgICB2YXIgb3JkZXIgPSBbXSxcbiAgICAgIGVsLFxuICAgICAgY2hpbGRyZW4gPSB0aGlzLmVsLmNoaWxkcmVuLFxuICAgICAgaSA9IDAsXG4gICAgICBuID0gY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBmb3IgKDsgaSA8IG47IGkrKykge1xuICAgICAgZWwgPSBjaGlsZHJlbltpXTtcbiAgICAgIGlmIChjbG9zZXN0KGVsLCBvcHRpb25zLmRyYWdnYWJsZSwgdGhpcy5lbCwgZmFsc2UpKSB7XG4gICAgICAgIG9yZGVyLnB1c2goZWwuZ2V0QXR0cmlidXRlKG9wdGlvbnMuZGF0YUlkQXR0cikgfHwgX2dlbmVyYXRlSWQoZWwpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9yZGVyO1xuICB9LFxuICAvKipcclxuICAgKiBTb3J0cyB0aGUgZWxlbWVudHMgYWNjb3JkaW5nIHRvIHRoZSBhcnJheS5cclxuICAgKiBAcGFyYW0gIHtTdHJpbmdbXX0gIG9yZGVyICBvcmRlciBvZiB0aGUgaXRlbXNcclxuICAgKi9cbiAgc29ydDogZnVuY3Rpb24gc29ydChvcmRlciwgdXNlQW5pbWF0aW9uKSB7XG4gICAgdmFyIGl0ZW1zID0ge30sXG4gICAgICByb290RWwgPSB0aGlzLmVsO1xuICAgIHRoaXMudG9BcnJheSgpLmZvckVhY2goZnVuY3Rpb24gKGlkLCBpKSB7XG4gICAgICB2YXIgZWwgPSByb290RWwuY2hpbGRyZW5baV07XG4gICAgICBpZiAoY2xvc2VzdChlbCwgdGhpcy5vcHRpb25zLmRyYWdnYWJsZSwgcm9vdEVsLCBmYWxzZSkpIHtcbiAgICAgICAgaXRlbXNbaWRdID0gZWw7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gICAgdXNlQW5pbWF0aW9uICYmIHRoaXMuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgb3JkZXIuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGlmIChpdGVtc1tpZF0pIHtcbiAgICAgICAgcm9vdEVsLnJlbW92ZUNoaWxkKGl0ZW1zW2lkXSk7XG4gICAgICAgIHJvb3RFbC5hcHBlbmRDaGlsZChpdGVtc1tpZF0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHVzZUFuaW1hdGlvbiAmJiB0aGlzLmFuaW1hdGVBbGwoKTtcbiAgfSxcbiAgLyoqXHJcbiAgICogU2F2ZSB0aGUgY3VycmVudCBzb3J0aW5nXHJcbiAgICovXG4gIHNhdmU6IGZ1bmN0aW9uIHNhdmUoKSB7XG4gICAgdmFyIHN0b3JlID0gdGhpcy5vcHRpb25zLnN0b3JlO1xuICAgIHN0b3JlICYmIHN0b3JlLnNldCAmJiBzdG9yZS5zZXQodGhpcyk7XG4gIH0sXG4gIC8qKlxyXG4gICAqIEZvciBlYWNoIGVsZW1lbnQgaW4gdGhlIHNldCwgZ2V0IHRoZSBmaXJzdCBlbGVtZW50IHRoYXQgbWF0Y2hlcyB0aGUgc2VsZWN0b3IgYnkgdGVzdGluZyB0aGUgZWxlbWVudCBpdHNlbGYgYW5kIHRyYXZlcnNpbmcgdXAgdGhyb3VnaCBpdHMgYW5jZXN0b3JzIGluIHRoZSBET00gdHJlZS5cclxuICAgKiBAcGFyYW0gICB7SFRNTEVsZW1lbnR9ICBlbFxyXG4gICAqIEBwYXJhbSAgIHtTdHJpbmd9ICAgICAgIFtzZWxlY3Rvcl0gIGRlZmF1bHQ6IGBvcHRpb25zLmRyYWdnYWJsZWBcclxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR8bnVsbH1cclxuICAgKi9cbiAgY2xvc2VzdDogZnVuY3Rpb24gY2xvc2VzdCQxKGVsLCBzZWxlY3Rvcikge1xuICAgIHJldHVybiBjbG9zZXN0KGVsLCBzZWxlY3RvciB8fCB0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlLCB0aGlzLmVsLCBmYWxzZSk7XG4gIH0sXG4gIC8qKlxyXG4gICAqIFNldC9nZXQgb3B0aW9uXHJcbiAgICogQHBhcmFtICAge3N0cmluZ30gbmFtZVxyXG4gICAqIEBwYXJhbSAgIHsqfSAgICAgIFt2YWx1ZV1cclxuICAgKiBAcmV0dXJucyB7Kn1cclxuICAgKi9cbiAgb3B0aW9uOiBmdW5jdGlvbiBvcHRpb24obmFtZSwgdmFsdWUpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIG9wdGlvbnNbbmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBtb2RpZmllZFZhbHVlID0gUGx1Z2luTWFuYWdlci5tb2RpZnlPcHRpb24odGhpcywgbmFtZSwgdmFsdWUpO1xuICAgICAgaWYgKHR5cGVvZiBtb2RpZmllZFZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zW25hbWVdID0gbW9kaWZpZWRWYWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbnNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChuYW1lID09PSAnZ3JvdXAnKSB7XG4gICAgICAgIF9wcmVwYXJlR3JvdXAob3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICAvKipcclxuICAgKiBEZXN0cm95XHJcbiAgICovXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgcGx1Z2luRXZlbnQoJ2Rlc3Ryb3knLCB0aGlzKTtcbiAgICB2YXIgZWwgPSB0aGlzLmVsO1xuICAgIGVsW2V4cGFuZG9dID0gbnVsbDtcbiAgICBvZmYoZWwsICdtb3VzZWRvd24nLCB0aGlzLl9vblRhcFN0YXJ0KTtcbiAgICBvZmYoZWwsICd0b3VjaHN0YXJ0JywgdGhpcy5fb25UYXBTdGFydCk7XG4gICAgb2ZmKGVsLCAncG9pbnRlcmRvd24nLCB0aGlzLl9vblRhcFN0YXJ0KTtcbiAgICBpZiAodGhpcy5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICAgIG9mZihlbCwgJ2RyYWdvdmVyJywgdGhpcyk7XG4gICAgICBvZmYoZWwsICdkcmFnZW50ZXInLCB0aGlzKTtcbiAgICB9XG4gICAgLy8gUmVtb3ZlIGRyYWdnYWJsZSBhdHRyaWJ1dGVzXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlbC5xdWVyeVNlbGVjdG9yQWxsKCdbZHJhZ2dhYmxlXScpLCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZHJhZ2dhYmxlJyk7XG4gICAgfSk7XG4gICAgdGhpcy5fb25Ecm9wKCk7XG4gICAgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnRXZlbnRzKCk7XG4gICAgc29ydGFibGVzLnNwbGljZShzb3J0YWJsZXMuaW5kZXhPZih0aGlzLmVsKSwgMSk7XG4gICAgdGhpcy5lbCA9IGVsID0gbnVsbDtcbiAgfSxcbiAgX2hpZGVDbG9uZTogZnVuY3Rpb24gX2hpZGVDbG9uZSgpIHtcbiAgICBpZiAoIWNsb25lSGlkZGVuKSB7XG4gICAgICBwbHVnaW5FdmVudCgnaGlkZUNsb25lJywgdGhpcyk7XG4gICAgICBpZiAoU29ydGFibGUuZXZlbnRDYW5jZWxlZCkgcmV0dXJuO1xuICAgICAgY3NzKGNsb25lRWwsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZlQ2xvbmVPbkhpZGUgJiYgY2xvbmVFbC5wYXJlbnROb2RlKSB7XG4gICAgICAgIGNsb25lRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjbG9uZUVsKTtcbiAgICAgIH1cbiAgICAgIGNsb25lSGlkZGVuID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG4gIF9zaG93Q2xvbmU6IGZ1bmN0aW9uIF9zaG93Q2xvbmUocHV0U29ydGFibGUpIHtcbiAgICBpZiAocHV0U29ydGFibGUubGFzdFB1dE1vZGUgIT09ICdjbG9uZScpIHtcbiAgICAgIHRoaXMuX2hpZGVDbG9uZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2xvbmVIaWRkZW4pIHtcbiAgICAgIHBsdWdpbkV2ZW50KCdzaG93Q2xvbmUnLCB0aGlzKTtcbiAgICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSByZXR1cm47XG5cbiAgICAgIC8vIHNob3cgY2xvbmUgYXQgZHJhZ0VsIG9yIG9yaWdpbmFsIHBvc2l0aW9uXG4gICAgICBpZiAoZHJhZ0VsLnBhcmVudE5vZGUgPT0gcm9vdEVsICYmICF0aGlzLm9wdGlvbnMuZ3JvdXAucmV2ZXJ0Q2xvbmUpIHtcbiAgICAgICAgcm9vdEVsLmluc2VydEJlZm9yZShjbG9uZUVsLCBkcmFnRWwpO1xuICAgICAgfSBlbHNlIGlmIChuZXh0RWwpIHtcbiAgICAgICAgcm9vdEVsLmluc2VydEJlZm9yZShjbG9uZUVsLCBuZXh0RWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdEVsLmFwcGVuZENoaWxkKGNsb25lRWwpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5ncm91cC5yZXZlcnRDbG9uZSkge1xuICAgICAgICB0aGlzLmFuaW1hdGUoZHJhZ0VsLCBjbG9uZUVsKTtcbiAgICAgIH1cbiAgICAgIGNzcyhjbG9uZUVsLCAnZGlzcGxheScsICcnKTtcbiAgICAgIGNsb25lSGlkZGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG59O1xuZnVuY3Rpb24gX2dsb2JhbERyYWdPdmVyKCAvKipFdmVudCovZXZ0KSB7XG4gIGlmIChldnQuZGF0YVRyYW5zZmVyKSB7XG4gICAgZXZ0LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnO1xuICB9XG4gIGV2dC5jYW5jZWxhYmxlICYmIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuZnVuY3Rpb24gX29uTW92ZShmcm9tRWwsIHRvRWwsIGRyYWdFbCwgZHJhZ1JlY3QsIHRhcmdldEVsLCB0YXJnZXRSZWN0LCBvcmlnaW5hbEV2ZW50LCB3aWxsSW5zZXJ0QWZ0ZXIpIHtcbiAgdmFyIGV2dCxcbiAgICBzb3J0YWJsZSA9IGZyb21FbFtleHBhbmRvXSxcbiAgICBvbk1vdmVGbiA9IHNvcnRhYmxlLm9wdGlvbnMub25Nb3ZlLFxuICAgIHJldFZhbDtcbiAgLy8gU3VwcG9ydCBmb3IgbmV3IEN1c3RvbUV2ZW50IGZlYXR1cmVcbiAgaWYgKHdpbmRvdy5DdXN0b21FdmVudCAmJiAhSUUxMU9yTGVzcyAmJiAhRWRnZSkge1xuICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudCgnbW92ZScsIHtcbiAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgZXZ0LmluaXRFdmVudCgnbW92ZScsIHRydWUsIHRydWUpO1xuICB9XG4gIGV2dC50byA9IHRvRWw7XG4gIGV2dC5mcm9tID0gZnJvbUVsO1xuICBldnQuZHJhZ2dlZCA9IGRyYWdFbDtcbiAgZXZ0LmRyYWdnZWRSZWN0ID0gZHJhZ1JlY3Q7XG4gIGV2dC5yZWxhdGVkID0gdGFyZ2V0RWwgfHwgdG9FbDtcbiAgZXZ0LnJlbGF0ZWRSZWN0ID0gdGFyZ2V0UmVjdCB8fCBnZXRSZWN0KHRvRWwpO1xuICBldnQud2lsbEluc2VydEFmdGVyID0gd2lsbEluc2VydEFmdGVyO1xuICBldnQub3JpZ2luYWxFdmVudCA9IG9yaWdpbmFsRXZlbnQ7XG4gIGZyb21FbC5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gIGlmIChvbk1vdmVGbikge1xuICAgIHJldFZhbCA9IG9uTW92ZUZuLmNhbGwoc29ydGFibGUsIGV2dCwgb3JpZ2luYWxFdmVudCk7XG4gIH1cbiAgcmV0dXJuIHJldFZhbDtcbn1cbmZ1bmN0aW9uIF9kaXNhYmxlRHJhZ2dhYmxlKGVsKSB7XG4gIGVsLmRyYWdnYWJsZSA9IGZhbHNlO1xufVxuZnVuY3Rpb24gX3Vuc2lsZW50KCkge1xuICBfc2lsZW50ID0gZmFsc2U7XG59XG5mdW5jdGlvbiBfZ2hvc3RJc0ZpcnN0KGV2dCwgdmVydGljYWwsIHNvcnRhYmxlKSB7XG4gIHZhciBmaXJzdEVsUmVjdCA9IGdldFJlY3QoZ2V0Q2hpbGQoc29ydGFibGUuZWwsIDAsIHNvcnRhYmxlLm9wdGlvbnMsIHRydWUpKTtcbiAgdmFyIGNoaWxkQ29udGFpbmluZ1JlY3QgPSBnZXRDaGlsZENvbnRhaW5pbmdSZWN0RnJvbUVsZW1lbnQoc29ydGFibGUuZWwsIHNvcnRhYmxlLm9wdGlvbnMsIGdob3N0RWwpO1xuICB2YXIgc3BhY2VyID0gMTA7XG4gIHJldHVybiB2ZXJ0aWNhbCA/IGV2dC5jbGllbnRYIDwgY2hpbGRDb250YWluaW5nUmVjdC5sZWZ0IC0gc3BhY2VyIHx8IGV2dC5jbGllbnRZIDwgZmlyc3RFbFJlY3QudG9wICYmIGV2dC5jbGllbnRYIDwgZmlyc3RFbFJlY3QucmlnaHQgOiBldnQuY2xpZW50WSA8IGNoaWxkQ29udGFpbmluZ1JlY3QudG9wIC0gc3BhY2VyIHx8IGV2dC5jbGllbnRZIDwgZmlyc3RFbFJlY3QuYm90dG9tICYmIGV2dC5jbGllbnRYIDwgZmlyc3RFbFJlY3QubGVmdDtcbn1cbmZ1bmN0aW9uIF9naG9zdElzTGFzdChldnQsIHZlcnRpY2FsLCBzb3J0YWJsZSkge1xuICB2YXIgbGFzdEVsUmVjdCA9IGdldFJlY3QobGFzdENoaWxkKHNvcnRhYmxlLmVsLCBzb3J0YWJsZS5vcHRpb25zLmRyYWdnYWJsZSkpO1xuICB2YXIgY2hpbGRDb250YWluaW5nUmVjdCA9IGdldENoaWxkQ29udGFpbmluZ1JlY3RGcm9tRWxlbWVudChzb3J0YWJsZS5lbCwgc29ydGFibGUub3B0aW9ucywgZ2hvc3RFbCk7XG4gIHZhciBzcGFjZXIgPSAxMDtcbiAgcmV0dXJuIHZlcnRpY2FsID8gZXZ0LmNsaWVudFggPiBjaGlsZENvbnRhaW5pbmdSZWN0LnJpZ2h0ICsgc3BhY2VyIHx8IGV2dC5jbGllbnRZID4gbGFzdEVsUmVjdC5ib3R0b20gJiYgZXZ0LmNsaWVudFggPiBsYXN0RWxSZWN0LmxlZnQgOiBldnQuY2xpZW50WSA+IGNoaWxkQ29udGFpbmluZ1JlY3QuYm90dG9tICsgc3BhY2VyIHx8IGV2dC5jbGllbnRYID4gbGFzdEVsUmVjdC5yaWdodCAmJiBldnQuY2xpZW50WSA+IGxhc3RFbFJlY3QudG9wO1xufVxuZnVuY3Rpb24gX2dldFN3YXBEaXJlY3Rpb24oZXZ0LCB0YXJnZXQsIHRhcmdldFJlY3QsIHZlcnRpY2FsLCBzd2FwVGhyZXNob2xkLCBpbnZlcnRlZFN3YXBUaHJlc2hvbGQsIGludmVydFN3YXAsIGlzTGFzdFRhcmdldCkge1xuICB2YXIgbW91c2VPbkF4aXMgPSB2ZXJ0aWNhbCA/IGV2dC5jbGllbnRZIDogZXZ0LmNsaWVudFgsXG4gICAgdGFyZ2V0TGVuZ3RoID0gdmVydGljYWwgPyB0YXJnZXRSZWN0LmhlaWdodCA6IHRhcmdldFJlY3Qud2lkdGgsXG4gICAgdGFyZ2V0UzEgPSB2ZXJ0aWNhbCA/IHRhcmdldFJlY3QudG9wIDogdGFyZ2V0UmVjdC5sZWZ0LFxuICAgIHRhcmdldFMyID0gdmVydGljYWwgPyB0YXJnZXRSZWN0LmJvdHRvbSA6IHRhcmdldFJlY3QucmlnaHQsXG4gICAgaW52ZXJ0ID0gZmFsc2U7XG4gIGlmICghaW52ZXJ0U3dhcCkge1xuICAgIC8vIE5ldmVyIGludmVydCBvciBjcmVhdGUgZHJhZ0VsIHNoYWRvdyB3aGVuIHRhcmdldCBtb3ZlbWVuZXQgY2F1c2VzIG1vdXNlIHRvIG1vdmUgcGFzdCB0aGUgZW5kIG9mIHJlZ3VsYXIgc3dhcFRocmVzaG9sZFxuICAgIGlmIChpc0xhc3RUYXJnZXQgJiYgdGFyZ2V0TW92ZURpc3RhbmNlIDwgdGFyZ2V0TGVuZ3RoICogc3dhcFRocmVzaG9sZCkge1xuICAgICAgLy8gbXVsdGlwbGllZCBvbmx5IGJ5IHN3YXBUaHJlc2hvbGQgYmVjYXVzZSBtb3VzZSB3aWxsIGFscmVhZHkgYmUgaW5zaWRlIHRhcmdldCBieSAoMSAtIHRocmVzaG9sZCkgKiB0YXJnZXRMZW5ndGggLyAyXG4gICAgICAvLyBjaGVjayBpZiBwYXN0IGZpcnN0IGludmVydCB0aHJlc2hvbGQgb24gc2lkZSBvcHBvc2l0ZSBvZiBsYXN0RGlyZWN0aW9uXG4gICAgICBpZiAoIXBhc3RGaXJzdEludmVydFRocmVzaCAmJiAobGFzdERpcmVjdGlvbiA9PT0gMSA/IG1vdXNlT25BeGlzID4gdGFyZ2V0UzEgKyB0YXJnZXRMZW5ndGggKiBpbnZlcnRlZFN3YXBUaHJlc2hvbGQgLyAyIDogbW91c2VPbkF4aXMgPCB0YXJnZXRTMiAtIHRhcmdldExlbmd0aCAqIGludmVydGVkU3dhcFRocmVzaG9sZCAvIDIpKSB7XG4gICAgICAgIC8vIHBhc3QgZmlyc3QgaW52ZXJ0IHRocmVzaG9sZCwgZG8gbm90IHJlc3RyaWN0IGludmVydGVkIHRocmVzaG9sZCB0byBkcmFnRWwgc2hhZG93XG4gICAgICAgIHBhc3RGaXJzdEludmVydFRocmVzaCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoIXBhc3RGaXJzdEludmVydFRocmVzaCkge1xuICAgICAgICAvLyBkcmFnRWwgc2hhZG93ICh0YXJnZXQgbW92ZSBkaXN0YW5jZSBzaGFkb3cpXG4gICAgICAgIGlmIChsYXN0RGlyZWN0aW9uID09PSAxID8gbW91c2VPbkF4aXMgPCB0YXJnZXRTMSArIHRhcmdldE1vdmVEaXN0YW5jZSAvLyBvdmVyIGRyYWdFbCBzaGFkb3dcbiAgICAgICAgOiBtb3VzZU9uQXhpcyA+IHRhcmdldFMyIC0gdGFyZ2V0TW92ZURpc3RhbmNlKSB7XG4gICAgICAgICAgcmV0dXJuIC1sYXN0RGlyZWN0aW9uO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnZlcnQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZWd1bGFyXG4gICAgICBpZiAobW91c2VPbkF4aXMgPiB0YXJnZXRTMSArIHRhcmdldExlbmd0aCAqICgxIC0gc3dhcFRocmVzaG9sZCkgLyAyICYmIG1vdXNlT25BeGlzIDwgdGFyZ2V0UzIgLSB0YXJnZXRMZW5ndGggKiAoMSAtIHN3YXBUaHJlc2hvbGQpIC8gMikge1xuICAgICAgICByZXR1cm4gX2dldEluc2VydERpcmVjdGlvbih0YXJnZXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpbnZlcnQgPSBpbnZlcnQgfHwgaW52ZXJ0U3dhcDtcbiAgaWYgKGludmVydCkge1xuICAgIC8vIEludmVydCBvZiByZWd1bGFyXG4gICAgaWYgKG1vdXNlT25BeGlzIDwgdGFyZ2V0UzEgKyB0YXJnZXRMZW5ndGggKiBpbnZlcnRlZFN3YXBUaHJlc2hvbGQgLyAyIHx8IG1vdXNlT25BeGlzID4gdGFyZ2V0UzIgLSB0YXJnZXRMZW5ndGggKiBpbnZlcnRlZFN3YXBUaHJlc2hvbGQgLyAyKSB7XG4gICAgICByZXR1cm4gbW91c2VPbkF4aXMgPiB0YXJnZXRTMSArIHRhcmdldExlbmd0aCAvIDIgPyAxIDogLTE7XG4gICAgfVxuICB9XG4gIHJldHVybiAwO1xufVxuXG4vKipcclxuICogR2V0cyB0aGUgZGlyZWN0aW9uIGRyYWdFbCBtdXN0IGJlIHN3YXBwZWQgcmVsYXRpdmUgdG8gdGFyZ2V0IGluIG9yZGVyIHRvIG1ha2UgaXRcclxuICogc2VlbSB0aGF0IGRyYWdFbCBoYXMgYmVlbiBcImluc2VydGVkXCIgaW50byB0aGF0IGVsZW1lbnQncyBwb3NpdGlvblxyXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gdGFyZ2V0ICAgICAgIFRoZSB0YXJnZXQgd2hvc2UgcG9zaXRpb24gZHJhZ0VsIGlzIGJlaW5nIGluc2VydGVkIGF0XHJcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgRGlyZWN0aW9uIGRyYWdFbCBtdXN0IGJlIHN3YXBwZWRcclxuICovXG5mdW5jdGlvbiBfZ2V0SW5zZXJ0RGlyZWN0aW9uKHRhcmdldCkge1xuICBpZiAoaW5kZXgoZHJhZ0VsKSA8IGluZGV4KHRhcmdldCkpIHtcbiAgICByZXR1cm4gMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbn1cblxuLyoqXHJcbiAqIEdlbmVyYXRlIGlkXHJcbiAqIEBwYXJhbSAgIHtIVE1MRWxlbWVudH0gZWxcclxuICogQHJldHVybnMge1N0cmluZ31cclxuICogQHByaXZhdGVcclxuICovXG5mdW5jdGlvbiBfZ2VuZXJhdGVJZChlbCkge1xuICB2YXIgc3RyID0gZWwudGFnTmFtZSArIGVsLmNsYXNzTmFtZSArIGVsLnNyYyArIGVsLmhyZWYgKyBlbC50ZXh0Q29udGVudCxcbiAgICBpID0gc3RyLmxlbmd0aCxcbiAgICBzdW0gPSAwO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgc3VtICs9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICB9XG4gIHJldHVybiBzdW0udG9TdHJpbmcoMzYpO1xufVxuZnVuY3Rpb24gX3NhdmVJbnB1dENoZWNrZWRTdGF0ZShyb290KSB7XG4gIHNhdmVkSW5wdXRDaGVja2VkLmxlbmd0aCA9IDA7XG4gIHZhciBpbnB1dHMgPSByb290LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpO1xuICB2YXIgaWR4ID0gaW5wdXRzLmxlbmd0aDtcbiAgd2hpbGUgKGlkeC0tKSB7XG4gICAgdmFyIGVsID0gaW5wdXRzW2lkeF07XG4gICAgZWwuY2hlY2tlZCAmJiBzYXZlZElucHV0Q2hlY2tlZC5wdXNoKGVsKTtcbiAgfVxufVxuZnVuY3Rpb24gX25leHRUaWNrKGZuKSB7XG4gIHJldHVybiBzZXRUaW1lb3V0KGZuLCAwKTtcbn1cbmZ1bmN0aW9uIF9jYW5jZWxOZXh0VGljayhpZCkge1xuICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn1cblxuLy8gRml4ZWQgIzk3MzpcbmlmIChkb2N1bWVudEV4aXN0cykge1xuICBvbihkb2N1bWVudCwgJ3RvdWNobW92ZScsIGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAoKFNvcnRhYmxlLmFjdGl2ZSB8fCBhd2FpdGluZ0RyYWdTdGFydGVkKSAmJiBldnQuY2FuY2VsYWJsZSkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gRXhwb3J0IHV0aWxzXG5Tb3J0YWJsZS51dGlscyA9IHtcbiAgb246IG9uLFxuICBvZmY6IG9mZixcbiAgY3NzOiBjc3MsXG4gIGZpbmQ6IGZpbmQsXG4gIGlzOiBmdW5jdGlvbiBpcyhlbCwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gISFjbG9zZXN0KGVsLCBzZWxlY3RvciwgZWwsIGZhbHNlKTtcbiAgfSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRocm90dGxlOiB0aHJvdHRsZSxcbiAgY2xvc2VzdDogY2xvc2VzdCxcbiAgdG9nZ2xlQ2xhc3M6IHRvZ2dsZUNsYXNzLFxuICBjbG9uZTogY2xvbmUsXG4gIGluZGV4OiBpbmRleCxcbiAgbmV4dFRpY2s6IF9uZXh0VGljayxcbiAgY2FuY2VsTmV4dFRpY2s6IF9jYW5jZWxOZXh0VGljayxcbiAgZGV0ZWN0RGlyZWN0aW9uOiBfZGV0ZWN0RGlyZWN0aW9uLFxuICBnZXRDaGlsZDogZ2V0Q2hpbGQsXG4gIGV4cGFuZG86IGV4cGFuZG9cbn07XG5cbi8qKlxyXG4gKiBHZXQgdGhlIFNvcnRhYmxlIGluc3RhbmNlIG9mIGFuIGVsZW1lbnRcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnRcclxuICogQHJldHVybiB7U29ydGFibGV8dW5kZWZpbmVkfSAgICAgICAgIFRoZSBpbnN0YW5jZSBvZiBTb3J0YWJsZVxyXG4gKi9cblNvcnRhYmxlLmdldCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50W2V4cGFuZG9dO1xufTtcblxuLyoqXHJcbiAqIE1vdW50IGEgcGx1Z2luIHRvIFNvcnRhYmxlXHJcbiAqIEBwYXJhbSAgey4uLlNvcnRhYmxlUGx1Z2lufFNvcnRhYmxlUGx1Z2luW119IHBsdWdpbnMgICAgICAgUGx1Z2lucyBiZWluZyBtb3VudGVkXHJcbiAqL1xuU29ydGFibGUubW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwbHVnaW5zID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHBsdWdpbnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cbiAgaWYgKHBsdWdpbnNbMF0uY29uc3RydWN0b3IgPT09IEFycmF5KSBwbHVnaW5zID0gcGx1Z2luc1swXTtcbiAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICBpZiAoIXBsdWdpbi5wcm90b3R5cGUgfHwgIXBsdWdpbi5wcm90b3R5cGUuY29uc3RydWN0b3IpIHtcbiAgICAgIHRocm93IFwiU29ydGFibGU6IE1vdW50ZWQgcGx1Z2luIG11c3QgYmUgYSBjb25zdHJ1Y3RvciBmdW5jdGlvbiwgbm90IFwiLmNvbmNhdCh7fS50b1N0cmluZy5jYWxsKHBsdWdpbikpO1xuICAgIH1cbiAgICBpZiAocGx1Z2luLnV0aWxzKSBTb3J0YWJsZS51dGlscyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBTb3J0YWJsZS51dGlscyksIHBsdWdpbi51dGlscyk7XG4gICAgUGx1Z2luTWFuYWdlci5tb3VudChwbHVnaW4pO1xuICB9KTtcbn07XG5cbi8qKlxyXG4gKiBDcmVhdGUgc29ydGFibGUgaW5zdGFuY2VcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gIGVsXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSAgICAgIFtvcHRpb25zXVxyXG4gKi9cblNvcnRhYmxlLmNyZWF0ZSA9IGZ1bmN0aW9uIChlbCwgb3B0aW9ucykge1xuICByZXR1cm4gbmV3IFNvcnRhYmxlKGVsLCBvcHRpb25zKTtcbn07XG5cbi8vIEV4cG9ydFxuU29ydGFibGUudmVyc2lvbiA9IHZlcnNpb247XG5cbnZhciBhdXRvU2Nyb2xscyA9IFtdLFxuICBzY3JvbGxFbCxcbiAgc2Nyb2xsUm9vdEVsLFxuICBzY3JvbGxpbmcgPSBmYWxzZSxcbiAgbGFzdEF1dG9TY3JvbGxYLFxuICBsYXN0QXV0b1Njcm9sbFksXG4gIHRvdWNoRXZ0JDEsXG4gIHBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsO1xuZnVuY3Rpb24gQXV0b1Njcm9sbFBsdWdpbigpIHtcbiAgZnVuY3Rpb24gQXV0b1Njcm9sbCgpIHtcbiAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgZm9yY2VBdXRvU2Nyb2xsRmFsbGJhY2s6IGZhbHNlLFxuICAgICAgc2Nyb2xsU2Vuc2l0aXZpdHk6IDMwLFxuICAgICAgc2Nyb2xsU3BlZWQ6IDEwLFxuICAgICAgYnViYmxlU2Nyb2xsOiB0cnVlXG4gICAgfTtcblxuICAgIC8vIEJpbmQgYWxsIHByaXZhdGUgbWV0aG9kc1xuICAgIGZvciAodmFyIGZuIGluIHRoaXMpIHtcbiAgICAgIGlmIChmbi5jaGFyQXQoMCkgPT09ICdfJyAmJiB0eXBlb2YgdGhpc1tmbl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpc1tmbl0gPSB0aGlzW2ZuXS5iaW5kKHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBBdXRvU2Nyb2xsLnByb3RvdHlwZSA9IHtcbiAgICBkcmFnU3RhcnRlZDogZnVuY3Rpb24gZHJhZ1N0YXJ0ZWQoX3JlZikge1xuICAgICAgdmFyIG9yaWdpbmFsRXZlbnQgPSBfcmVmLm9yaWdpbmFsRXZlbnQ7XG4gICAgICBpZiAodGhpcy5zb3J0YWJsZS5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICAgICAgb24oZG9jdW1lbnQsICdkcmFnb3ZlcicsIHRoaXMuX2hhbmRsZUF1dG9TY3JvbGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdXBwb3J0UG9pbnRlcikge1xuICAgICAgICAgIG9uKGRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCB0aGlzLl9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGwpO1xuICAgICAgICB9IGVsc2UgaWYgKG9yaWdpbmFsRXZlbnQudG91Y2hlcykge1xuICAgICAgICAgIG9uKGRvY3VtZW50LCAndG91Y2htb3ZlJywgdGhpcy5faGFuZGxlRmFsbGJhY2tBdXRvU2Nyb2xsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvbihkb2N1bWVudCwgJ21vdXNlbW92ZScsIHRoaXMuX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGRyYWdPdmVyQ29tcGxldGVkOiBmdW5jdGlvbiBkcmFnT3ZlckNvbXBsZXRlZChfcmVmMikge1xuICAgICAgdmFyIG9yaWdpbmFsRXZlbnQgPSBfcmVmMi5vcmlnaW5hbEV2ZW50O1xuICAgICAgLy8gRm9yIHdoZW4gYnViYmxpbmcgaXMgY2FuY2VsZWQgYW5kIHVzaW5nIGZhbGxiYWNrIChmYWxsYmFjayAndG91Y2htb3ZlJyBhbHdheXMgcmVhY2hlZClcbiAgICAgIGlmICghdGhpcy5vcHRpb25zLmRyYWdPdmVyQnViYmxlICYmICFvcmlnaW5hbEV2ZW50LnJvb3RFbCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVBdXRvU2Nyb2xsKG9yaWdpbmFsRXZlbnQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZHJvcDogZnVuY3Rpb24gZHJvcCgpIHtcbiAgICAgIGlmICh0aGlzLnNvcnRhYmxlLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgICAgICBvZmYoZG9jdW1lbnQsICdkcmFnb3ZlcicsIHRoaXMuX2hhbmRsZUF1dG9TY3JvbGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2ZmKGRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCB0aGlzLl9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGwpO1xuICAgICAgICBvZmYoZG9jdW1lbnQsICd0b3VjaG1vdmUnLCB0aGlzLl9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGwpO1xuICAgICAgICBvZmYoZG9jdW1lbnQsICdtb3VzZW1vdmUnLCB0aGlzLl9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGwpO1xuICAgICAgfVxuICAgICAgY2xlYXJQb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCgpO1xuICAgICAgY2xlYXJBdXRvU2Nyb2xscygpO1xuICAgICAgY2FuY2VsVGhyb3R0bGUoKTtcbiAgICB9LFxuICAgIG51bGxpbmc6IGZ1bmN0aW9uIG51bGxpbmcoKSB7XG4gICAgICB0b3VjaEV2dCQxID0gc2Nyb2xsUm9vdEVsID0gc2Nyb2xsRWwgPSBzY3JvbGxpbmcgPSBwb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCA9IGxhc3RBdXRvU2Nyb2xsWCA9IGxhc3RBdXRvU2Nyb2xsWSA9IG51bGw7XG4gICAgICBhdXRvU2Nyb2xscy5sZW5ndGggPSAwO1xuICAgIH0sXG4gICAgX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbDogZnVuY3Rpb24gX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbChldnQpIHtcbiAgICAgIHRoaXMuX2hhbmRsZUF1dG9TY3JvbGwoZXZ0LCB0cnVlKTtcbiAgICB9LFxuICAgIF9oYW5kbGVBdXRvU2Nyb2xsOiBmdW5jdGlvbiBfaGFuZGxlQXV0b1Njcm9sbChldnQsIGZhbGxiYWNrKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgdmFyIHggPSAoZXZ0LnRvdWNoZXMgPyBldnQudG91Y2hlc1swXSA6IGV2dCkuY2xpZW50WCxcbiAgICAgICAgeSA9IChldnQudG91Y2hlcyA/IGV2dC50b3VjaGVzWzBdIDogZXZ0KS5jbGllbnRZLFxuICAgICAgICBlbGVtID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KTtcbiAgICAgIHRvdWNoRXZ0JDEgPSBldnQ7XG5cbiAgICAgIC8vIElFIGRvZXMgbm90IHNlZW0gdG8gaGF2ZSBuYXRpdmUgYXV0b3Njcm9sbCxcbiAgICAgIC8vIEVkZ2UncyBhdXRvc2Nyb2xsIHNlZW1zIHRvbyBjb25kaXRpb25hbCxcbiAgICAgIC8vIE1BQ09TIFNhZmFyaSBkb2VzIG5vdCBoYXZlIGF1dG9zY3JvbGwsXG4gICAgICAvLyBGaXJlZm94IGFuZCBDaHJvbWUgYXJlIGdvb2RcbiAgICAgIGlmIChmYWxsYmFjayB8fCB0aGlzLm9wdGlvbnMuZm9yY2VBdXRvU2Nyb2xsRmFsbGJhY2sgfHwgRWRnZSB8fCBJRTExT3JMZXNzIHx8IFNhZmFyaSkge1xuICAgICAgICBhdXRvU2Nyb2xsKGV2dCwgdGhpcy5vcHRpb25zLCBlbGVtLCBmYWxsYmFjayk7XG5cbiAgICAgICAgLy8gTGlzdGVuZXIgZm9yIHBvaW50ZXIgZWxlbWVudCBjaGFuZ2VcbiAgICAgICAgdmFyIG9nRWxlbVNjcm9sbGVyID0gZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQoZWxlbSwgdHJ1ZSk7XG4gICAgICAgIGlmIChzY3JvbGxpbmcgJiYgKCFwb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCB8fCB4ICE9PSBsYXN0QXV0b1Njcm9sbFggfHwgeSAhPT0gbGFzdEF1dG9TY3JvbGxZKSkge1xuICAgICAgICAgIHBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsICYmIGNsZWFyUG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwoKTtcbiAgICAgICAgICAvLyBEZXRlY3QgZm9yIHBvaW50ZXIgZWxlbSBjaGFuZ2UsIGVtdWxhdGluZyBuYXRpdmUgRG5EIGJlaGF2aW91clxuICAgICAgICAgIHBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG5ld0VsZW0gPSBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHgsIHkpLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChuZXdFbGVtICE9PSBvZ0VsZW1TY3JvbGxlcikge1xuICAgICAgICAgICAgICBvZ0VsZW1TY3JvbGxlciA9IG5ld0VsZW07XG4gICAgICAgICAgICAgIGNsZWFyQXV0b1Njcm9sbHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF1dG9TY3JvbGwoZXZ0LCBfdGhpcy5vcHRpb25zLCBuZXdFbGVtLCBmYWxsYmFjayk7XG4gICAgICAgICAgfSwgMTApO1xuICAgICAgICAgIGxhc3RBdXRvU2Nyb2xsWCA9IHg7XG4gICAgICAgICAgbGFzdEF1dG9TY3JvbGxZID0geTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgRG5EIGlzIGVuYWJsZWQgKGFuZCBicm93c2VyIGhhcyBnb29kIGF1dG9zY3JvbGxpbmcpLCBmaXJzdCBhdXRvc2Nyb2xsIHdpbGwgYWxyZWFkeSBzY3JvbGwsIHNvIGdldCBwYXJlbnQgYXV0b3Njcm9sbCBvZiBmaXJzdCBhdXRvc2Nyb2xsXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmJ1YmJsZVNjcm9sbCB8fCBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChlbGVtLCB0cnVlKSA9PT0gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpKSB7XG4gICAgICAgICAgY2xlYXJBdXRvU2Nyb2xscygpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhdXRvU2Nyb2xsKGV2dCwgdGhpcy5vcHRpb25zLCBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChlbGVtLCBmYWxzZSksIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcyhBdXRvU2Nyb2xsLCB7XG4gICAgcGx1Z2luTmFtZTogJ3Njcm9sbCcsXG4gICAgaW5pdGlhbGl6ZUJ5RGVmYXVsdDogdHJ1ZVxuICB9KTtcbn1cbmZ1bmN0aW9uIGNsZWFyQXV0b1Njcm9sbHMoKSB7XG4gIGF1dG9TY3JvbGxzLmZvckVhY2goZnVuY3Rpb24gKGF1dG9TY3JvbGwpIHtcbiAgICBjbGVhckludGVydmFsKGF1dG9TY3JvbGwucGlkKTtcbiAgfSk7XG4gIGF1dG9TY3JvbGxzID0gW107XG59XG5mdW5jdGlvbiBjbGVhclBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsKCkge1xuICBjbGVhckludGVydmFsKHBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsKTtcbn1cbnZhciBhdXRvU2Nyb2xsID0gdGhyb3R0bGUoZnVuY3Rpb24gKGV2dCwgb3B0aW9ucywgcm9vdEVsLCBpc0ZhbGxiYWNrKSB7XG4gIC8vIEJ1ZzogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTA1NTIxXG4gIGlmICghb3B0aW9ucy5zY3JvbGwpIHJldHVybjtcbiAgdmFyIHggPSAoZXZ0LnRvdWNoZXMgPyBldnQudG91Y2hlc1swXSA6IGV2dCkuY2xpZW50WCxcbiAgICB5ID0gKGV2dC50b3VjaGVzID8gZXZ0LnRvdWNoZXNbMF0gOiBldnQpLmNsaWVudFksXG4gICAgc2VucyA9IG9wdGlvbnMuc2Nyb2xsU2Vuc2l0aXZpdHksXG4gICAgc3BlZWQgPSBvcHRpb25zLnNjcm9sbFNwZWVkLFxuICAgIHdpblNjcm9sbGVyID0gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpO1xuICB2YXIgc2Nyb2xsVGhpc0luc3RhbmNlID0gZmFsc2UsXG4gICAgc2Nyb2xsQ3VzdG9tRm47XG5cbiAgLy8gTmV3IHNjcm9sbCByb290LCBzZXQgc2Nyb2xsRWxcbiAgaWYgKHNjcm9sbFJvb3RFbCAhPT0gcm9vdEVsKSB7XG4gICAgc2Nyb2xsUm9vdEVsID0gcm9vdEVsO1xuICAgIGNsZWFyQXV0b1Njcm9sbHMoKTtcbiAgICBzY3JvbGxFbCA9IG9wdGlvbnMuc2Nyb2xsO1xuICAgIHNjcm9sbEN1c3RvbUZuID0gb3B0aW9ucy5zY3JvbGxGbjtcbiAgICBpZiAoc2Nyb2xsRWwgPT09IHRydWUpIHtcbiAgICAgIHNjcm9sbEVsID0gZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQocm9vdEVsLCB0cnVlKTtcbiAgICB9XG4gIH1cbiAgdmFyIGxheWVyc091dCA9IDA7XG4gIHZhciBjdXJyZW50UGFyZW50ID0gc2Nyb2xsRWw7XG4gIGRvIHtcbiAgICB2YXIgZWwgPSBjdXJyZW50UGFyZW50LFxuICAgICAgcmVjdCA9IGdldFJlY3QoZWwpLFxuICAgICAgdG9wID0gcmVjdC50b3AsXG4gICAgICBib3R0b20gPSByZWN0LmJvdHRvbSxcbiAgICAgIGxlZnQgPSByZWN0LmxlZnQsXG4gICAgICByaWdodCA9IHJlY3QucmlnaHQsXG4gICAgICB3aWR0aCA9IHJlY3Qud2lkdGgsXG4gICAgICBoZWlnaHQgPSByZWN0LmhlaWdodCxcbiAgICAgIGNhblNjcm9sbFggPSB2b2lkIDAsXG4gICAgICBjYW5TY3JvbGxZID0gdm9pZCAwLFxuICAgICAgc2Nyb2xsV2lkdGggPSBlbC5zY3JvbGxXaWR0aCxcbiAgICAgIHNjcm9sbEhlaWdodCA9IGVsLnNjcm9sbEhlaWdodCxcbiAgICAgIGVsQ1NTID0gY3NzKGVsKSxcbiAgICAgIHNjcm9sbFBvc1ggPSBlbC5zY3JvbGxMZWZ0LFxuICAgICAgc2Nyb2xsUG9zWSA9IGVsLnNjcm9sbFRvcDtcbiAgICBpZiAoZWwgPT09IHdpblNjcm9sbGVyKSB7XG4gICAgICBjYW5TY3JvbGxYID0gd2lkdGggPCBzY3JvbGxXaWR0aCAmJiAoZWxDU1Mub3ZlcmZsb3dYID09PSAnYXV0bycgfHwgZWxDU1Mub3ZlcmZsb3dYID09PSAnc2Nyb2xsJyB8fCBlbENTUy5vdmVyZmxvd1ggPT09ICd2aXNpYmxlJyk7XG4gICAgICBjYW5TY3JvbGxZID0gaGVpZ2h0IDwgc2Nyb2xsSGVpZ2h0ICYmIChlbENTUy5vdmVyZmxvd1kgPT09ICdhdXRvJyB8fCBlbENTUy5vdmVyZmxvd1kgPT09ICdzY3JvbGwnIHx8IGVsQ1NTLm92ZXJmbG93WSA9PT0gJ3Zpc2libGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FuU2Nyb2xsWCA9IHdpZHRoIDwgc2Nyb2xsV2lkdGggJiYgKGVsQ1NTLm92ZXJmbG93WCA9PT0gJ2F1dG8nIHx8IGVsQ1NTLm92ZXJmbG93WCA9PT0gJ3Njcm9sbCcpO1xuICAgICAgY2FuU2Nyb2xsWSA9IGhlaWdodCA8IHNjcm9sbEhlaWdodCAmJiAoZWxDU1Mub3ZlcmZsb3dZID09PSAnYXV0bycgfHwgZWxDU1Mub3ZlcmZsb3dZID09PSAnc2Nyb2xsJyk7XG4gICAgfVxuICAgIHZhciB2eCA9IGNhblNjcm9sbFggJiYgKE1hdGguYWJzKHJpZ2h0IC0geCkgPD0gc2VucyAmJiBzY3JvbGxQb3NYICsgd2lkdGggPCBzY3JvbGxXaWR0aCkgLSAoTWF0aC5hYnMobGVmdCAtIHgpIDw9IHNlbnMgJiYgISFzY3JvbGxQb3NYKTtcbiAgICB2YXIgdnkgPSBjYW5TY3JvbGxZICYmIChNYXRoLmFicyhib3R0b20gLSB5KSA8PSBzZW5zICYmIHNjcm9sbFBvc1kgKyBoZWlnaHQgPCBzY3JvbGxIZWlnaHQpIC0gKE1hdGguYWJzKHRvcCAtIHkpIDw9IHNlbnMgJiYgISFzY3JvbGxQb3NZKTtcbiAgICBpZiAoIWF1dG9TY3JvbGxzW2xheWVyc091dF0pIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IGxheWVyc091dDsgaSsrKSB7XG4gICAgICAgIGlmICghYXV0b1Njcm9sbHNbaV0pIHtcbiAgICAgICAgICBhdXRvU2Nyb2xsc1tpXSA9IHt9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhdXRvU2Nyb2xsc1tsYXllcnNPdXRdLnZ4ICE9IHZ4IHx8IGF1dG9TY3JvbGxzW2xheWVyc091dF0udnkgIT0gdnkgfHwgYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS5lbCAhPT0gZWwpIHtcbiAgICAgIGF1dG9TY3JvbGxzW2xheWVyc091dF0uZWwgPSBlbDtcbiAgICAgIGF1dG9TY3JvbGxzW2xheWVyc091dF0udnggPSB2eDtcbiAgICAgIGF1dG9TY3JvbGxzW2xheWVyc091dF0udnkgPSB2eTtcbiAgICAgIGNsZWFySW50ZXJ2YWwoYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS5waWQpO1xuICAgICAgaWYgKHZ4ICE9IDAgfHwgdnkgIT0gMCkge1xuICAgICAgICBzY3JvbGxUaGlzSW5zdGFuY2UgPSB0cnVlO1xuICAgICAgICAvKiBqc2hpbnQgbG9vcGZ1bmM6dHJ1ZSAqL1xuICAgICAgICBhdXRvU2Nyb2xsc1tsYXllcnNPdXRdLnBpZCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBlbXVsYXRlIGRyYWcgb3ZlciBkdXJpbmcgYXV0b3Njcm9sbCAoZmFsbGJhY2spLCBlbXVsYXRpbmcgbmF0aXZlIERuRCBiZWhhdmlvdXJcbiAgICAgICAgICBpZiAoaXNGYWxsYmFjayAmJiB0aGlzLmxheWVyID09PSAwKSB7XG4gICAgICAgICAgICBTb3J0YWJsZS5hY3RpdmUuX29uVG91Y2hNb3ZlKHRvdWNoRXZ0JDEpOyAvLyBUbyBtb3ZlIGdob3N0IGlmIGl0IGlzIHBvc2l0aW9uZWQgYWJzb2x1dGVseVxuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgc2Nyb2xsT2Zmc2V0WSA9IGF1dG9TY3JvbGxzW3RoaXMubGF5ZXJdLnZ5ID8gYXV0b1Njcm9sbHNbdGhpcy5sYXllcl0udnkgKiBzcGVlZCA6IDA7XG4gICAgICAgICAgdmFyIHNjcm9sbE9mZnNldFggPSBhdXRvU2Nyb2xsc1t0aGlzLmxheWVyXS52eCA/IGF1dG9TY3JvbGxzW3RoaXMubGF5ZXJdLnZ4ICogc3BlZWQgOiAwO1xuICAgICAgICAgIGlmICh0eXBlb2Ygc2Nyb2xsQ3VzdG9tRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxDdXN0b21Gbi5jYWxsKFNvcnRhYmxlLmRyYWdnZWQucGFyZW50Tm9kZVtleHBhbmRvXSwgc2Nyb2xsT2Zmc2V0WCwgc2Nyb2xsT2Zmc2V0WSwgZXZ0LCB0b3VjaEV2dCQxLCBhdXRvU2Nyb2xsc1t0aGlzLmxheWVyXS5lbCkgIT09ICdjb250aW51ZScpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzY3JvbGxCeShhdXRvU2Nyb2xsc1t0aGlzLmxheWVyXS5lbCwgc2Nyb2xsT2Zmc2V0WCwgc2Nyb2xsT2Zmc2V0WSk7XG4gICAgICAgIH0uYmluZCh7XG4gICAgICAgICAgbGF5ZXI6IGxheWVyc091dFxuICAgICAgICB9KSwgMjQpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXllcnNPdXQrKztcbiAgfSB3aGlsZSAob3B0aW9ucy5idWJibGVTY3JvbGwgJiYgY3VycmVudFBhcmVudCAhPT0gd2luU2Nyb2xsZXIgJiYgKGN1cnJlbnRQYXJlbnQgPSBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChjdXJyZW50UGFyZW50LCBmYWxzZSkpKTtcbiAgc2Nyb2xsaW5nID0gc2Nyb2xsVGhpc0luc3RhbmNlOyAvLyBpbiBjYXNlIGFub3RoZXIgZnVuY3Rpb24gY2F0Y2hlcyBzY3JvbGxpbmcgYXMgZmFsc2UgaW4gYmV0d2VlbiB3aGVuIGl0IGlzIG5vdFxufSwgMzApO1xuXG52YXIgZHJvcCA9IGZ1bmN0aW9uIGRyb3AoX3JlZikge1xuICB2YXIgb3JpZ2luYWxFdmVudCA9IF9yZWYub3JpZ2luYWxFdmVudCxcbiAgICBwdXRTb3J0YWJsZSA9IF9yZWYucHV0U29ydGFibGUsXG4gICAgZHJhZ0VsID0gX3JlZi5kcmFnRWwsXG4gICAgYWN0aXZlU29ydGFibGUgPSBfcmVmLmFjdGl2ZVNvcnRhYmxlLFxuICAgIGRpc3BhdGNoU29ydGFibGVFdmVudCA9IF9yZWYuZGlzcGF0Y2hTb3J0YWJsZUV2ZW50LFxuICAgIGhpZGVHaG9zdEZvclRhcmdldCA9IF9yZWYuaGlkZUdob3N0Rm9yVGFyZ2V0LFxuICAgIHVuaGlkZUdob3N0Rm9yVGFyZ2V0ID0gX3JlZi51bmhpZGVHaG9zdEZvclRhcmdldDtcbiAgaWYgKCFvcmlnaW5hbEV2ZW50KSByZXR1cm47XG4gIHZhciB0b1NvcnRhYmxlID0gcHV0U29ydGFibGUgfHwgYWN0aXZlU29ydGFibGU7XG4gIGhpZGVHaG9zdEZvclRhcmdldCgpO1xuICB2YXIgdG91Y2ggPSBvcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzICYmIG9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoID8gb3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlc1swXSA6IG9yaWdpbmFsRXZlbnQ7XG4gIHZhciB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHRvdWNoLmNsaWVudFgsIHRvdWNoLmNsaWVudFkpO1xuICB1bmhpZGVHaG9zdEZvclRhcmdldCgpO1xuICBpZiAodG9Tb3J0YWJsZSAmJiAhdG9Tb3J0YWJsZS5lbC5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50KCdzcGlsbCcpO1xuICAgIHRoaXMub25TcGlsbCh7XG4gICAgICBkcmFnRWw6IGRyYWdFbCxcbiAgICAgIHB1dFNvcnRhYmxlOiBwdXRTb3J0YWJsZVxuICAgIH0pO1xuICB9XG59O1xuZnVuY3Rpb24gUmV2ZXJ0KCkge31cblJldmVydC5wcm90b3R5cGUgPSB7XG4gIHN0YXJ0SW5kZXg6IG51bGwsXG4gIGRyYWdTdGFydDogZnVuY3Rpb24gZHJhZ1N0YXJ0KF9yZWYyKSB7XG4gICAgdmFyIG9sZERyYWdnYWJsZUluZGV4ID0gX3JlZjIub2xkRHJhZ2dhYmxlSW5kZXg7XG4gICAgdGhpcy5zdGFydEluZGV4ID0gb2xkRHJhZ2dhYmxlSW5kZXg7XG4gIH0sXG4gIG9uU3BpbGw6IGZ1bmN0aW9uIG9uU3BpbGwoX3JlZjMpIHtcbiAgICB2YXIgZHJhZ0VsID0gX3JlZjMuZHJhZ0VsLFxuICAgICAgcHV0U29ydGFibGUgPSBfcmVmMy5wdXRTb3J0YWJsZTtcbiAgICB0aGlzLnNvcnRhYmxlLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgIGlmIChwdXRTb3J0YWJsZSkge1xuICAgICAgcHV0U29ydGFibGUuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgfVxuICAgIHZhciBuZXh0U2libGluZyA9IGdldENoaWxkKHRoaXMuc29ydGFibGUuZWwsIHRoaXMuc3RhcnRJbmRleCwgdGhpcy5vcHRpb25zKTtcbiAgICBpZiAobmV4dFNpYmxpbmcpIHtcbiAgICAgIHRoaXMuc29ydGFibGUuZWwuaW5zZXJ0QmVmb3JlKGRyYWdFbCwgbmV4dFNpYmxpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNvcnRhYmxlLmVsLmFwcGVuZENoaWxkKGRyYWdFbCk7XG4gICAgfVxuICAgIHRoaXMuc29ydGFibGUuYW5pbWF0ZUFsbCgpO1xuICAgIGlmIChwdXRTb3J0YWJsZSkge1xuICAgICAgcHV0U29ydGFibGUuYW5pbWF0ZUFsbCgpO1xuICAgIH1cbiAgfSxcbiAgZHJvcDogZHJvcFxufTtcbl9leHRlbmRzKFJldmVydCwge1xuICBwbHVnaW5OYW1lOiAncmV2ZXJ0T25TcGlsbCdcbn0pO1xuZnVuY3Rpb24gUmVtb3ZlKCkge31cblJlbW92ZS5wcm90b3R5cGUgPSB7XG4gIG9uU3BpbGw6IGZ1bmN0aW9uIG9uU3BpbGwoX3JlZjQpIHtcbiAgICB2YXIgZHJhZ0VsID0gX3JlZjQuZHJhZ0VsLFxuICAgICAgcHV0U29ydGFibGUgPSBfcmVmNC5wdXRTb3J0YWJsZTtcbiAgICB2YXIgcGFyZW50U29ydGFibGUgPSBwdXRTb3J0YWJsZSB8fCB0aGlzLnNvcnRhYmxlO1xuICAgIHBhcmVudFNvcnRhYmxlLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgIGRyYWdFbC5wYXJlbnROb2RlICYmIGRyYWdFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRyYWdFbCk7XG4gICAgcGFyZW50U29ydGFibGUuYW5pbWF0ZUFsbCgpO1xuICB9LFxuICBkcm9wOiBkcm9wXG59O1xuX2V4dGVuZHMoUmVtb3ZlLCB7XG4gIHBsdWdpbk5hbWU6ICdyZW1vdmVPblNwaWxsJ1xufSk7XG5cbnZhciBsYXN0U3dhcEVsO1xuZnVuY3Rpb24gU3dhcFBsdWdpbigpIHtcbiAgZnVuY3Rpb24gU3dhcCgpIHtcbiAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgc3dhcENsYXNzOiAnc29ydGFibGUtc3dhcC1oaWdobGlnaHQnXG4gICAgfTtcbiAgfVxuICBTd2FwLnByb3RvdHlwZSA9IHtcbiAgICBkcmFnU3RhcnQ6IGZ1bmN0aW9uIGRyYWdTdGFydChfcmVmKSB7XG4gICAgICB2YXIgZHJhZ0VsID0gX3JlZi5kcmFnRWw7XG4gICAgICBsYXN0U3dhcEVsID0gZHJhZ0VsO1xuICAgIH0sXG4gICAgZHJhZ092ZXJWYWxpZDogZnVuY3Rpb24gZHJhZ092ZXJWYWxpZChfcmVmMikge1xuICAgICAgdmFyIGNvbXBsZXRlZCA9IF9yZWYyLmNvbXBsZXRlZCxcbiAgICAgICAgdGFyZ2V0ID0gX3JlZjIudGFyZ2V0LFxuICAgICAgICBvbk1vdmUgPSBfcmVmMi5vbk1vdmUsXG4gICAgICAgIGFjdGl2ZVNvcnRhYmxlID0gX3JlZjIuYWN0aXZlU29ydGFibGUsXG4gICAgICAgIGNoYW5nZWQgPSBfcmVmMi5jaGFuZ2VkLFxuICAgICAgICBjYW5jZWwgPSBfcmVmMi5jYW5jZWw7XG4gICAgICBpZiAoIWFjdGl2ZVNvcnRhYmxlLm9wdGlvbnMuc3dhcCkgcmV0dXJuO1xuICAgICAgdmFyIGVsID0gdGhpcy5zb3J0YWJsZS5lbCxcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSBlbCkge1xuICAgICAgICB2YXIgcHJldlN3YXBFbCA9IGxhc3RTd2FwRWw7XG4gICAgICAgIGlmIChvbk1vdmUodGFyZ2V0KSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICB0b2dnbGVDbGFzcyh0YXJnZXQsIG9wdGlvbnMuc3dhcENsYXNzLCB0cnVlKTtcbiAgICAgICAgICBsYXN0U3dhcEVsID0gdGFyZ2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhc3RTd2FwRWwgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmV2U3dhcEVsICYmIHByZXZTd2FwRWwgIT09IGxhc3RTd2FwRWwpIHtcbiAgICAgICAgICB0b2dnbGVDbGFzcyhwcmV2U3dhcEVsLCBvcHRpb25zLnN3YXBDbGFzcywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjaGFuZ2VkKCk7XG4gICAgICBjb21wbGV0ZWQodHJ1ZSk7XG4gICAgICBjYW5jZWwoKTtcbiAgICB9LFxuICAgIGRyb3A6IGZ1bmN0aW9uIGRyb3AoX3JlZjMpIHtcbiAgICAgIHZhciBhY3RpdmVTb3J0YWJsZSA9IF9yZWYzLmFjdGl2ZVNvcnRhYmxlLFxuICAgICAgICBwdXRTb3J0YWJsZSA9IF9yZWYzLnB1dFNvcnRhYmxlLFxuICAgICAgICBkcmFnRWwgPSBfcmVmMy5kcmFnRWw7XG4gICAgICB2YXIgdG9Tb3J0YWJsZSA9IHB1dFNvcnRhYmxlIHx8IHRoaXMuc29ydGFibGU7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgIGxhc3RTd2FwRWwgJiYgdG9nZ2xlQ2xhc3MobGFzdFN3YXBFbCwgb3B0aW9ucy5zd2FwQ2xhc3MsIGZhbHNlKTtcbiAgICAgIGlmIChsYXN0U3dhcEVsICYmIChvcHRpb25zLnN3YXAgfHwgcHV0U29ydGFibGUgJiYgcHV0U29ydGFibGUub3B0aW9ucy5zd2FwKSkge1xuICAgICAgICBpZiAoZHJhZ0VsICE9PSBsYXN0U3dhcEVsKSB7XG4gICAgICAgICAgdG9Tb3J0YWJsZS5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcbiAgICAgICAgICBpZiAodG9Tb3J0YWJsZSAhPT0gYWN0aXZlU29ydGFibGUpIGFjdGl2ZVNvcnRhYmxlLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgICAgICAgIHN3YXBOb2RlcyhkcmFnRWwsIGxhc3RTd2FwRWwpO1xuICAgICAgICAgIHRvU29ydGFibGUuYW5pbWF0ZUFsbCgpO1xuICAgICAgICAgIGlmICh0b1NvcnRhYmxlICE9PSBhY3RpdmVTb3J0YWJsZSkgYWN0aXZlU29ydGFibGUuYW5pbWF0ZUFsbCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBudWxsaW5nOiBmdW5jdGlvbiBudWxsaW5nKCkge1xuICAgICAgbGFzdFN3YXBFbCA9IG51bGw7XG4gICAgfVxuICB9O1xuICByZXR1cm4gX2V4dGVuZHMoU3dhcCwge1xuICAgIHBsdWdpbk5hbWU6ICdzd2FwJyxcbiAgICBldmVudFByb3BlcnRpZXM6IGZ1bmN0aW9uIGV2ZW50UHJvcGVydGllcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN3YXBJdGVtOiBsYXN0U3dhcEVsXG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBzd2FwTm9kZXMobjEsIG4yKSB7XG4gIHZhciBwMSA9IG4xLnBhcmVudE5vZGUsXG4gICAgcDIgPSBuMi5wYXJlbnROb2RlLFxuICAgIGkxLFxuICAgIGkyO1xuICBpZiAoIXAxIHx8ICFwMiB8fCBwMS5pc0VxdWFsTm9kZShuMikgfHwgcDIuaXNFcXVhbE5vZGUobjEpKSByZXR1cm47XG4gIGkxID0gaW5kZXgobjEpO1xuICBpMiA9IGluZGV4KG4yKTtcbiAgaWYgKHAxLmlzRXF1YWxOb2RlKHAyKSAmJiBpMSA8IGkyKSB7XG4gICAgaTIrKztcbiAgfVxuICBwMS5pbnNlcnRCZWZvcmUobjIsIHAxLmNoaWxkcmVuW2kxXSk7XG4gIHAyLmluc2VydEJlZm9yZShuMSwgcDIuY2hpbGRyZW5baTJdKTtcbn1cblxudmFyIG11bHRpRHJhZ0VsZW1lbnRzID0gW10sXG4gIG11bHRpRHJhZ0Nsb25lcyA9IFtdLFxuICBsYXN0TXVsdGlEcmFnU2VsZWN0LFxuICAvLyBmb3Igc2VsZWN0aW9uIHdpdGggbW9kaWZpZXIga2V5IGRvd24gKFNISUZUKVxuICBtdWx0aURyYWdTb3J0YWJsZSxcbiAgaW5pdGlhbEZvbGRpbmcgPSBmYWxzZSxcbiAgLy8gSW5pdGlhbCBtdWx0aS1kcmFnIGZvbGQgd2hlbiBkcmFnIHN0YXJ0ZWRcbiAgZm9sZGluZyA9IGZhbHNlLFxuICAvLyBGb2xkaW5nIGFueSBvdGhlciB0aW1lXG4gIGRyYWdTdGFydGVkID0gZmFsc2UsXG4gIGRyYWdFbCQxLFxuICBjbG9uZXNGcm9tUmVjdCxcbiAgY2xvbmVzSGlkZGVuO1xuZnVuY3Rpb24gTXVsdGlEcmFnUGx1Z2luKCkge1xuICBmdW5jdGlvbiBNdWx0aURyYWcoc29ydGFibGUpIHtcbiAgICAvLyBCaW5kIGFsbCBwcml2YXRlIG1ldGhvZHNcbiAgICBmb3IgKHZhciBmbiBpbiB0aGlzKSB7XG4gICAgICBpZiAoZm4uY2hhckF0KDApID09PSAnXycgJiYgdHlwZW9mIHRoaXNbZm5dID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXNbZm5dID0gdGhpc1tmbl0uYmluZCh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFzb3J0YWJsZS5vcHRpb25zLmF2b2lkSW1wbGljaXREZXNlbGVjdCkge1xuICAgICAgaWYgKHNvcnRhYmxlLm9wdGlvbnMuc3VwcG9ydFBvaW50ZXIpIHtcbiAgICAgICAgb24oZG9jdW1lbnQsICdwb2ludGVydXAnLCB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbihkb2N1bWVudCwgJ21vdXNldXAnLCB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZyk7XG4gICAgICAgIG9uKGRvY3VtZW50LCAndG91Y2hlbmQnLCB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZyk7XG4gICAgICB9XG4gICAgfVxuICAgIG9uKGRvY3VtZW50LCAna2V5ZG93bicsIHRoaXMuX2NoZWNrS2V5RG93bik7XG4gICAgb24oZG9jdW1lbnQsICdrZXl1cCcsIHRoaXMuX2NoZWNrS2V5VXApO1xuICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICBzZWxlY3RlZENsYXNzOiAnc29ydGFibGUtc2VsZWN0ZWQnLFxuICAgICAgbXVsdGlEcmFnS2V5OiBudWxsLFxuICAgICAgYXZvaWRJbXBsaWNpdERlc2VsZWN0OiBmYWxzZSxcbiAgICAgIHNldERhdGE6IGZ1bmN0aW9uIHNldERhdGEoZGF0YVRyYW5zZmVyLCBkcmFnRWwpIHtcbiAgICAgICAgdmFyIGRhdGEgPSAnJztcbiAgICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnRzLmxlbmd0aCAmJiBtdWx0aURyYWdTb3J0YWJsZSA9PT0gc29ydGFibGUpIHtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50LCBpKSB7XG4gICAgICAgICAgICBkYXRhICs9ICghaSA/ICcnIDogJywgJykgKyBtdWx0aURyYWdFbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRhdGEgPSBkcmFnRWwudGV4dENvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YVRyYW5zZmVyLnNldERhdGEoJ1RleHQnLCBkYXRhKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIE11bHRpRHJhZy5wcm90b3R5cGUgPSB7XG4gICAgbXVsdGlEcmFnS2V5RG93bjogZmFsc2UsXG4gICAgaXNNdWx0aURyYWc6IGZhbHNlLFxuICAgIGRlbGF5U3RhcnRHbG9iYWw6IGZ1bmN0aW9uIGRlbGF5U3RhcnRHbG9iYWwoX3JlZikge1xuICAgICAgdmFyIGRyYWdnZWQgPSBfcmVmLmRyYWdFbDtcbiAgICAgIGRyYWdFbCQxID0gZHJhZ2dlZDtcbiAgICB9LFxuICAgIGRlbGF5RW5kZWQ6IGZ1bmN0aW9uIGRlbGF5RW5kZWQoKSB7XG4gICAgICB0aGlzLmlzTXVsdGlEcmFnID0gfm11bHRpRHJhZ0VsZW1lbnRzLmluZGV4T2YoZHJhZ0VsJDEpO1xuICAgIH0sXG4gICAgc2V0dXBDbG9uZTogZnVuY3Rpb24gc2V0dXBDbG9uZShfcmVmMikge1xuICAgICAgdmFyIHNvcnRhYmxlID0gX3JlZjIuc29ydGFibGUsXG4gICAgICAgIGNhbmNlbCA9IF9yZWYyLmNhbmNlbDtcbiAgICAgIGlmICghdGhpcy5pc011bHRpRHJhZykgcmV0dXJuO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtdWx0aURyYWdFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBtdWx0aURyYWdDbG9uZXMucHVzaChjbG9uZShtdWx0aURyYWdFbGVtZW50c1tpXSkpO1xuICAgICAgICBtdWx0aURyYWdDbG9uZXNbaV0uc29ydGFibGVJbmRleCA9IG11bHRpRHJhZ0VsZW1lbnRzW2ldLnNvcnRhYmxlSW5kZXg7XG4gICAgICAgIG11bHRpRHJhZ0Nsb25lc1tpXS5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgICAgbXVsdGlEcmFnQ2xvbmVzW2ldLnN0eWxlWyd3aWxsLWNoYW5nZSddID0gJyc7XG4gICAgICAgIHRvZ2dsZUNsYXNzKG11bHRpRHJhZ0Nsb25lc1tpXSwgdGhpcy5vcHRpb25zLnNlbGVjdGVkQ2xhc3MsIGZhbHNlKTtcbiAgICAgICAgbXVsdGlEcmFnRWxlbWVudHNbaV0gPT09IGRyYWdFbCQxICYmIHRvZ2dsZUNsYXNzKG11bHRpRHJhZ0Nsb25lc1tpXSwgdGhpcy5vcHRpb25zLmNob3NlbkNsYXNzLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICBzb3J0YWJsZS5faGlkZUNsb25lKCk7XG4gICAgICBjYW5jZWwoKTtcbiAgICB9LFxuICAgIGNsb25lOiBmdW5jdGlvbiBjbG9uZShfcmVmMykge1xuICAgICAgdmFyIHNvcnRhYmxlID0gX3JlZjMuc29ydGFibGUsXG4gICAgICAgIHJvb3RFbCA9IF9yZWYzLnJvb3RFbCxcbiAgICAgICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50ID0gX3JlZjMuZGlzcGF0Y2hTb3J0YWJsZUV2ZW50LFxuICAgICAgICBjYW5jZWwgPSBfcmVmMy5jYW5jZWw7XG4gICAgICBpZiAoIXRoaXMuaXNNdWx0aURyYWcpIHJldHVybjtcbiAgICAgIGlmICghdGhpcy5vcHRpb25zLnJlbW92ZUNsb25lT25IaWRlKSB7XG4gICAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50cy5sZW5ndGggJiYgbXVsdGlEcmFnU29ydGFibGUgPT09IHNvcnRhYmxlKSB7XG4gICAgICAgICAgaW5zZXJ0TXVsdGlEcmFnQ2xvbmVzKHRydWUsIHJvb3RFbCk7XG4gICAgICAgICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50KCdjbG9uZScpO1xuICAgICAgICAgIGNhbmNlbCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBzaG93Q2xvbmU6IGZ1bmN0aW9uIHNob3dDbG9uZShfcmVmNCkge1xuICAgICAgdmFyIGNsb25lTm93U2hvd24gPSBfcmVmNC5jbG9uZU5vd1Nob3duLFxuICAgICAgICByb290RWwgPSBfcmVmNC5yb290RWwsXG4gICAgICAgIGNhbmNlbCA9IF9yZWY0LmNhbmNlbDtcbiAgICAgIGlmICghdGhpcy5pc011bHRpRHJhZykgcmV0dXJuO1xuICAgICAgaW5zZXJ0TXVsdGlEcmFnQ2xvbmVzKGZhbHNlLCByb290RWwpO1xuICAgICAgbXVsdGlEcmFnQ2xvbmVzLmZvckVhY2goZnVuY3Rpb24gKGNsb25lKSB7XG4gICAgICAgIGNzcyhjbG9uZSwgJ2Rpc3BsYXknLCAnJyk7XG4gICAgICB9KTtcbiAgICAgIGNsb25lTm93U2hvd24oKTtcbiAgICAgIGNsb25lc0hpZGRlbiA9IGZhbHNlO1xuICAgICAgY2FuY2VsKCk7XG4gICAgfSxcbiAgICBoaWRlQ2xvbmU6IGZ1bmN0aW9uIGhpZGVDbG9uZShfcmVmNSkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIHZhciBzb3J0YWJsZSA9IF9yZWY1LnNvcnRhYmxlLFxuICAgICAgICBjbG9uZU5vd0hpZGRlbiA9IF9yZWY1LmNsb25lTm93SGlkZGVuLFxuICAgICAgICBjYW5jZWwgPSBfcmVmNS5jYW5jZWw7XG4gICAgICBpZiAoIXRoaXMuaXNNdWx0aURyYWcpIHJldHVybjtcbiAgICAgIG11bHRpRHJhZ0Nsb25lcy5mb3JFYWNoKGZ1bmN0aW9uIChjbG9uZSkge1xuICAgICAgICBjc3MoY2xvbmUsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMucmVtb3ZlQ2xvbmVPbkhpZGUgJiYgY2xvbmUucGFyZW50Tm9kZSkge1xuICAgICAgICAgIGNsb25lLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2xvbmUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNsb25lTm93SGlkZGVuKCk7XG4gICAgICBjbG9uZXNIaWRkZW4gPSB0cnVlO1xuICAgICAgY2FuY2VsKCk7XG4gICAgfSxcbiAgICBkcmFnU3RhcnRHbG9iYWw6IGZ1bmN0aW9uIGRyYWdTdGFydEdsb2JhbChfcmVmNikge1xuICAgICAgdmFyIHNvcnRhYmxlID0gX3JlZjYuc29ydGFibGU7XG4gICAgICBpZiAoIXRoaXMuaXNNdWx0aURyYWcgJiYgbXVsdGlEcmFnU29ydGFibGUpIHtcbiAgICAgICAgbXVsdGlEcmFnU29ydGFibGUubXVsdGlEcmFnLl9kZXNlbGVjdE11bHRpRHJhZygpO1xuICAgICAgfVxuICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICBtdWx0aURyYWdFbGVtZW50LnNvcnRhYmxlSW5kZXggPSBpbmRleChtdWx0aURyYWdFbGVtZW50KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBTb3J0IG11bHRpLWRyYWcgZWxlbWVudHNcbiAgICAgIG11bHRpRHJhZ0VsZW1lbnRzID0gbXVsdGlEcmFnRWxlbWVudHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYS5zb3J0YWJsZUluZGV4IC0gYi5zb3J0YWJsZUluZGV4O1xuICAgICAgfSk7XG4gICAgICBkcmFnU3RhcnRlZCA9IHRydWU7XG4gICAgfSxcbiAgICBkcmFnU3RhcnRlZDogZnVuY3Rpb24gZHJhZ1N0YXJ0ZWQoX3JlZjcpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuICAgICAgdmFyIHNvcnRhYmxlID0gX3JlZjcuc29ydGFibGU7XG4gICAgICBpZiAoIXRoaXMuaXNNdWx0aURyYWcpIHJldHVybjtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc29ydCkge1xuICAgICAgICAvLyBDYXB0dXJlIHJlY3RzLFxuICAgICAgICAvLyBoaWRlIG11bHRpIGRyYWcgZWxlbWVudHMgKGJ5IHBvc2l0aW9uaW5nIHRoZW0gYWJzb2x1dGUpLFxuICAgICAgICAvLyBzZXQgbXVsdGkgZHJhZyBlbGVtZW50cyByZWN0cyB0byBkcmFnUmVjdCxcbiAgICAgICAgLy8gc2hvdyBtdWx0aSBkcmFnIGVsZW1lbnRzLFxuICAgICAgICAvLyBhbmltYXRlIHRvIHJlY3RzLFxuICAgICAgICAvLyB1bnNldCByZWN0cyAmIHJlbW92ZSBmcm9tIERPTVxuXG4gICAgICAgIHNvcnRhYmxlLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFuaW1hdGlvbikge1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50ID09PSBkcmFnRWwkMSkgcmV0dXJuO1xuICAgICAgICAgICAgY3NzKG11bHRpRHJhZ0VsZW1lbnQsICdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhciBkcmFnUmVjdCA9IGdldFJlY3QoZHJhZ0VsJDEsIGZhbHNlLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAobXVsdGlEcmFnRWxlbWVudCA9PT0gZHJhZ0VsJDEpIHJldHVybjtcbiAgICAgICAgICAgIHNldFJlY3QobXVsdGlEcmFnRWxlbWVudCwgZHJhZ1JlY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGZvbGRpbmcgPSB0cnVlO1xuICAgICAgICAgIGluaXRpYWxGb2xkaW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc29ydGFibGUuYW5pbWF0ZUFsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvbGRpbmcgPSBmYWxzZTtcbiAgICAgICAgaW5pdGlhbEZvbGRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKF90aGlzMi5vcHRpb25zLmFuaW1hdGlvbikge1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgIHVuc2V0UmVjdChtdWx0aURyYWdFbGVtZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBhbGwgYXV4aWxpYXJ5IG11bHRpZHJhZyBpdGVtcyBmcm9tIGVsLCBpZiBzb3J0aW5nIGVuYWJsZWRcbiAgICAgICAgaWYgKF90aGlzMi5vcHRpb25zLnNvcnQpIHtcbiAgICAgICAgICByZW1vdmVNdWx0aURyYWdFbGVtZW50cygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGRyYWdPdmVyOiBmdW5jdGlvbiBkcmFnT3ZlcihfcmVmOCkge1xuICAgICAgdmFyIHRhcmdldCA9IF9yZWY4LnRhcmdldCxcbiAgICAgICAgY29tcGxldGVkID0gX3JlZjguY29tcGxldGVkLFxuICAgICAgICBjYW5jZWwgPSBfcmVmOC5jYW5jZWw7XG4gICAgICBpZiAoZm9sZGluZyAmJiB+bXVsdGlEcmFnRWxlbWVudHMuaW5kZXhPZih0YXJnZXQpKSB7XG4gICAgICAgIGNvbXBsZXRlZChmYWxzZSk7XG4gICAgICAgIGNhbmNlbCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmV2ZXJ0OiBmdW5jdGlvbiByZXZlcnQoX3JlZjkpIHtcbiAgICAgIHZhciBmcm9tU29ydGFibGUgPSBfcmVmOS5mcm9tU29ydGFibGUsXG4gICAgICAgIHJvb3RFbCA9IF9yZWY5LnJvb3RFbCxcbiAgICAgICAgc29ydGFibGUgPSBfcmVmOS5zb3J0YWJsZSxcbiAgICAgICAgZHJhZ1JlY3QgPSBfcmVmOS5kcmFnUmVjdDtcbiAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIFNldHVwIHVuZm9sZCBhbmltYXRpb25cbiAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICAgIHNvcnRhYmxlLmFkZEFuaW1hdGlvblN0YXRlKHtcbiAgICAgICAgICAgIHRhcmdldDogbXVsdGlEcmFnRWxlbWVudCxcbiAgICAgICAgICAgIHJlY3Q6IGZvbGRpbmcgPyBnZXRSZWN0KG11bHRpRHJhZ0VsZW1lbnQpIDogZHJhZ1JlY3RcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB1bnNldFJlY3QobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudC5mcm9tUmVjdCA9IGRyYWdSZWN0O1xuICAgICAgICAgIGZyb21Tb3J0YWJsZS5yZW1vdmVBbmltYXRpb25TdGF0ZShtdWx0aURyYWdFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvbGRpbmcgPSBmYWxzZTtcbiAgICAgICAgaW5zZXJ0TXVsdGlEcmFnRWxlbWVudHMoIXRoaXMub3B0aW9ucy5yZW1vdmVDbG9uZU9uSGlkZSwgcm9vdEVsKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRyYWdPdmVyQ29tcGxldGVkOiBmdW5jdGlvbiBkcmFnT3ZlckNvbXBsZXRlZChfcmVmMTApIHtcbiAgICAgIHZhciBzb3J0YWJsZSA9IF9yZWYxMC5zb3J0YWJsZSxcbiAgICAgICAgaXNPd25lciA9IF9yZWYxMC5pc093bmVyLFxuICAgICAgICBpbnNlcnRpb24gPSBfcmVmMTAuaW5zZXJ0aW9uLFxuICAgICAgICBhY3RpdmVTb3J0YWJsZSA9IF9yZWYxMC5hY3RpdmVTb3J0YWJsZSxcbiAgICAgICAgcGFyZW50RWwgPSBfcmVmMTAucGFyZW50RWwsXG4gICAgICAgIHB1dFNvcnRhYmxlID0gX3JlZjEwLnB1dFNvcnRhYmxlO1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICBpZiAoaW5zZXJ0aW9uKSB7XG4gICAgICAgIC8vIENsb25lcyBtdXN0IGJlIGhpZGRlbiBiZWZvcmUgZm9sZGluZyBhbmltYXRpb24gdG8gY2FwdHVyZSBkcmFnUmVjdEFic29sdXRlIHByb3Blcmx5XG4gICAgICAgIGlmIChpc093bmVyKSB7XG4gICAgICAgICAgYWN0aXZlU29ydGFibGUuX2hpZGVDbG9uZSgpO1xuICAgICAgICB9XG4gICAgICAgIGluaXRpYWxGb2xkaW5nID0gZmFsc2U7XG4gICAgICAgIC8vIElmIGxlYXZpbmcgc29ydDpmYWxzZSByb290LCBvciBhbHJlYWR5IGZvbGRpbmcgLSBGb2xkIHRvIG5ldyBsb2NhdGlvblxuICAgICAgICBpZiAob3B0aW9ucy5hbmltYXRpb24gJiYgbXVsdGlEcmFnRWxlbWVudHMubGVuZ3RoID4gMSAmJiAoZm9sZGluZyB8fCAhaXNPd25lciAmJiAhYWN0aXZlU29ydGFibGUub3B0aW9ucy5zb3J0ICYmICFwdXRTb3J0YWJsZSkpIHtcbiAgICAgICAgICAvLyBGb2xkOiBTZXQgYWxsIG11bHRpIGRyYWcgZWxlbWVudHMncyByZWN0cyB0byBkcmFnRWwncyByZWN0IHdoZW4gbXVsdGktZHJhZyBlbGVtZW50cyBhcmUgaW52aXNpYmxlXG4gICAgICAgICAgdmFyIGRyYWdSZWN0QWJzb2x1dGUgPSBnZXRSZWN0KGRyYWdFbCQxLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnQgPT09IGRyYWdFbCQxKSByZXR1cm47XG4gICAgICAgICAgICBzZXRSZWN0KG11bHRpRHJhZ0VsZW1lbnQsIGRyYWdSZWN0QWJzb2x1dGUpO1xuXG4gICAgICAgICAgICAvLyBNb3ZlIGVsZW1lbnQocykgdG8gZW5kIG9mIHBhcmVudEVsIHNvIHRoYXQgaXQgZG9lcyBub3QgaW50ZXJmZXJlIHdpdGggbXVsdGktZHJhZyBjbG9uZXMgaW5zZXJ0aW9uIGlmIHRoZXkgYXJlIGluc2VydGVkXG4gICAgICAgICAgICAvLyB3aGlsZSBmb2xkaW5nLCBhbmQgc28gdGhhdCB3ZSBjYW4gY2FwdHVyZSB0aGVtIGFnYWluIGJlY2F1c2Ugb2xkIHNvcnRhYmxlIHdpbGwgbm8gbG9uZ2VyIGJlIGZyb21Tb3J0YWJsZVxuICAgICAgICAgICAgcGFyZW50RWwuYXBwZW5kQ2hpbGQobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZm9sZGluZyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDbG9uZXMgbXVzdCBiZSBzaG93biAoYW5kIGNoZWNrIHRvIHJlbW92ZSBtdWx0aSBkcmFncykgYWZ0ZXIgZm9sZGluZyB3aGVuIGludGVyZmVyaW5nIG11bHRpRHJhZ0VsZW1lbnRzIGFyZSBtb3ZlZCBvdXRcbiAgICAgICAgaWYgKCFpc093bmVyKSB7XG4gICAgICAgICAgLy8gT25seSByZW1vdmUgaWYgbm90IGZvbGRpbmcgKGZvbGRpbmcgd2lsbCByZW1vdmUgdGhlbSBhbnl3YXlzKVxuICAgICAgICAgIGlmICghZm9sZGluZykge1xuICAgICAgICAgICAgcmVtb3ZlTXVsdGlEcmFnRWxlbWVudHMoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHZhciBjbG9uZXNIaWRkZW5CZWZvcmUgPSBjbG9uZXNIaWRkZW47XG4gICAgICAgICAgICBhY3RpdmVTb3J0YWJsZS5fc2hvd0Nsb25lKHNvcnRhYmxlKTtcblxuICAgICAgICAgICAgLy8gVW5mb2xkIGFuaW1hdGlvbiBmb3IgY2xvbmVzIGlmIHNob3dpbmcgZnJvbSBoaWRkZW5cbiAgICAgICAgICAgIGlmIChhY3RpdmVTb3J0YWJsZS5vcHRpb25zLmFuaW1hdGlvbiAmJiAhY2xvbmVzSGlkZGVuICYmIGNsb25lc0hpZGRlbkJlZm9yZSkge1xuICAgICAgICAgICAgICBtdWx0aURyYWdDbG9uZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xvbmUpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVTb3J0YWJsZS5hZGRBbmltYXRpb25TdGF0ZSh7XG4gICAgICAgICAgICAgICAgICB0YXJnZXQ6IGNsb25lLFxuICAgICAgICAgICAgICAgICAgcmVjdDogY2xvbmVzRnJvbVJlY3RcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjbG9uZS5mcm9tUmVjdCA9IGNsb25lc0Zyb21SZWN0O1xuICAgICAgICAgICAgICAgIGNsb25lLnRoaXNBbmltYXRpb25EdXJhdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3RpdmVTb3J0YWJsZS5fc2hvd0Nsb25lKHNvcnRhYmxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGRyYWdPdmVyQW5pbWF0aW9uQ2FwdHVyZTogZnVuY3Rpb24gZHJhZ092ZXJBbmltYXRpb25DYXB0dXJlKF9yZWYxMSkge1xuICAgICAgdmFyIGRyYWdSZWN0ID0gX3JlZjExLmRyYWdSZWN0LFxuICAgICAgICBpc093bmVyID0gX3JlZjExLmlzT3duZXIsXG4gICAgICAgIGFjdGl2ZVNvcnRhYmxlID0gX3JlZjExLmFjdGl2ZVNvcnRhYmxlO1xuICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICBtdWx0aURyYWdFbGVtZW50LnRoaXNBbmltYXRpb25EdXJhdGlvbiA9IG51bGw7XG4gICAgICB9KTtcbiAgICAgIGlmIChhY3RpdmVTb3J0YWJsZS5vcHRpb25zLmFuaW1hdGlvbiAmJiAhaXNPd25lciAmJiBhY3RpdmVTb3J0YWJsZS5tdWx0aURyYWcuaXNNdWx0aURyYWcpIHtcbiAgICAgICAgY2xvbmVzRnJvbVJlY3QgPSBfZXh0ZW5kcyh7fSwgZHJhZ1JlY3QpO1xuICAgICAgICB2YXIgZHJhZ01hdHJpeCA9IG1hdHJpeChkcmFnRWwkMSwgdHJ1ZSk7XG4gICAgICAgIGNsb25lc0Zyb21SZWN0LnRvcCAtPSBkcmFnTWF0cml4LmY7XG4gICAgICAgIGNsb25lc0Zyb21SZWN0LmxlZnQgLT0gZHJhZ01hdHJpeC5lO1xuICAgICAgfVxuICAgIH0sXG4gICAgZHJhZ092ZXJBbmltYXRpb25Db21wbGV0ZTogZnVuY3Rpb24gZHJhZ092ZXJBbmltYXRpb25Db21wbGV0ZSgpIHtcbiAgICAgIGlmIChmb2xkaW5nKSB7XG4gICAgICAgIGZvbGRpbmcgPSBmYWxzZTtcbiAgICAgICAgcmVtb3ZlTXVsdGlEcmFnRWxlbWVudHMoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRyb3A6IGZ1bmN0aW9uIGRyb3AoX3JlZjEyKSB7XG4gICAgICB2YXIgZXZ0ID0gX3JlZjEyLm9yaWdpbmFsRXZlbnQsXG4gICAgICAgIHJvb3RFbCA9IF9yZWYxMi5yb290RWwsXG4gICAgICAgIHBhcmVudEVsID0gX3JlZjEyLnBhcmVudEVsLFxuICAgICAgICBzb3J0YWJsZSA9IF9yZWYxMi5zb3J0YWJsZSxcbiAgICAgICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50ID0gX3JlZjEyLmRpc3BhdGNoU29ydGFibGVFdmVudCxcbiAgICAgICAgb2xkSW5kZXggPSBfcmVmMTIub2xkSW5kZXgsXG4gICAgICAgIHB1dFNvcnRhYmxlID0gX3JlZjEyLnB1dFNvcnRhYmxlO1xuICAgICAgdmFyIHRvU29ydGFibGUgPSBwdXRTb3J0YWJsZSB8fCB0aGlzLnNvcnRhYmxlO1xuICAgICAgaWYgKCFldnQpIHJldHVybjtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICBjaGlsZHJlbiA9IHBhcmVudEVsLmNoaWxkcmVuO1xuXG4gICAgICAvLyBNdWx0aS1kcmFnIHNlbGVjdGlvblxuICAgICAgaWYgKCFkcmFnU3RhcnRlZCkge1xuICAgICAgICBpZiAob3B0aW9ucy5tdWx0aURyYWdLZXkgJiYgIXRoaXMubXVsdGlEcmFnS2V5RG93bikge1xuICAgICAgICAgIHRoaXMuX2Rlc2VsZWN0TXVsdGlEcmFnKCk7XG4gICAgICAgIH1cbiAgICAgICAgdG9nZ2xlQ2xhc3MoZHJhZ0VsJDEsIG9wdGlvbnMuc2VsZWN0ZWRDbGFzcywgIX5tdWx0aURyYWdFbGVtZW50cy5pbmRleE9mKGRyYWdFbCQxKSk7XG4gICAgICAgIGlmICghfm11bHRpRHJhZ0VsZW1lbnRzLmluZGV4T2YoZHJhZ0VsJDEpKSB7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMucHVzaChkcmFnRWwkMSk7XG4gICAgICAgICAgZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICBzb3J0YWJsZTogc29ydGFibGUsXG4gICAgICAgICAgICByb290RWw6IHJvb3RFbCxcbiAgICAgICAgICAgIG5hbWU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgdGFyZ2V0RWw6IGRyYWdFbCQxLFxuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBNb2RpZmllciBhY3RpdmF0ZWQsIHNlbGVjdCBmcm9tIGxhc3QgdG8gZHJhZ0VsXG4gICAgICAgICAgaWYgKGV2dC5zaGlmdEtleSAmJiBsYXN0TXVsdGlEcmFnU2VsZWN0ICYmIHNvcnRhYmxlLmVsLmNvbnRhaW5zKGxhc3RNdWx0aURyYWdTZWxlY3QpKSB7XG4gICAgICAgICAgICB2YXIgbGFzdEluZGV4ID0gaW5kZXgobGFzdE11bHRpRHJhZ1NlbGVjdCksXG4gICAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IGluZGV4KGRyYWdFbCQxKTtcbiAgICAgICAgICAgIGlmICh+bGFzdEluZGV4ICYmIH5jdXJyZW50SW5kZXggJiYgbGFzdEluZGV4ICE9PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBNdXN0IGluY2x1ZGUgbGFzdE11bHRpRHJhZ1NlbGVjdCAoc2VsZWN0IGl0KSwgaW4gY2FzZSBtb2RpZmllZCBzZWxlY3Rpb24gZnJvbSBubyBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAvLyAoYnV0IHByZXZpb3VzIHNlbGVjdGlvbiBleGlzdGVkKVxuICAgICAgICAgICAgICAgIHZhciBuLCBpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggPiBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIGkgPSBsYXN0SW5kZXg7XG4gICAgICAgICAgICAgICAgICBuID0gY3VycmVudEluZGV4O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBpID0gY3VycmVudEluZGV4O1xuICAgICAgICAgICAgICAgICAgbiA9IGxhc3RJbmRleCArIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBmaWx0ZXIgPSBvcHRpb25zLmZpbHRlcjtcbiAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgaWYgKH5tdWx0aURyYWdFbGVtZW50cy5pbmRleE9mKGNoaWxkcmVuW2ldKSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBlbGVtZW50IGlzIGRyYWdnYWJsZVxuICAgICAgICAgICAgICAgICAgaWYgKCFjbG9zZXN0KGNoaWxkcmVuW2ldLCBvcHRpb25zLmRyYWdnYWJsZSwgcGFyZW50RWwsIGZhbHNlKSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBlbGVtZW50IGlzIGZpbHRlcmVkXG4gICAgICAgICAgICAgICAgICB2YXIgZmlsdGVyZWQgPSBmaWx0ZXIgJiYgKHR5cGVvZiBmaWx0ZXIgPT09ICdmdW5jdGlvbicgPyBmaWx0ZXIuY2FsbChzb3J0YWJsZSwgZXZ0LCBjaGlsZHJlbltpXSwgc29ydGFibGUpIDogZmlsdGVyLnNwbGl0KCcsJykuc29tZShmdW5jdGlvbiAoY3JpdGVyaWEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsb3Nlc3QoY2hpbGRyZW5baV0sIGNyaXRlcmlhLnRyaW0oKSwgcGFyZW50RWwsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXJlZCkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzcyhjaGlsZHJlbltpXSwgb3B0aW9ucy5zZWxlY3RlZENsYXNzLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLnB1c2goY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBzb3J0YWJsZSxcbiAgICAgICAgICAgICAgICAgICAgcm9vdEVsOiByb290RWwsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbDogY2hpbGRyZW5baV0sXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYXN0TXVsdGlEcmFnU2VsZWN0ID0gZHJhZ0VsJDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIG11bHRpRHJhZ1NvcnRhYmxlID0gdG9Tb3J0YWJsZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5zcGxpY2UobXVsdGlEcmFnRWxlbWVudHMuaW5kZXhPZihkcmFnRWwkMSksIDEpO1xuICAgICAgICAgIGxhc3RNdWx0aURyYWdTZWxlY3QgPSBudWxsO1xuICAgICAgICAgIGRpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgc29ydGFibGU6IHNvcnRhYmxlLFxuICAgICAgICAgICAgcm9vdEVsOiByb290RWwsXG4gICAgICAgICAgICBuYW1lOiAnZGVzZWxlY3QnLFxuICAgICAgICAgICAgdGFyZ2V0RWw6IGRyYWdFbCQxLFxuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gTXVsdGktZHJhZyBkcm9wXG4gICAgICBpZiAoZHJhZ1N0YXJ0ZWQgJiYgdGhpcy5pc011bHRpRHJhZykge1xuICAgICAgICBmb2xkaW5nID0gZmFsc2U7XG4gICAgICAgIC8vIERvIG5vdCBcInVuZm9sZFwiIGFmdGVyIGFyb3VuZCBkcmFnRWwgaWYgcmV2ZXJ0ZWRcbiAgICAgICAgaWYgKChwYXJlbnRFbFtleHBhbmRvXS5vcHRpb25zLnNvcnQgfHwgcGFyZW50RWwgIT09IHJvb3RFbCkgJiYgbXVsdGlEcmFnRWxlbWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHZhciBkcmFnUmVjdCA9IGdldFJlY3QoZHJhZ0VsJDEpLFxuICAgICAgICAgICAgbXVsdGlEcmFnSW5kZXggPSBpbmRleChkcmFnRWwkMSwgJzpub3QoLicgKyB0aGlzLm9wdGlvbnMuc2VsZWN0ZWRDbGFzcyArICcpJyk7XG4gICAgICAgICAgaWYgKCFpbml0aWFsRm9sZGluZyAmJiBvcHRpb25zLmFuaW1hdGlvbikgZHJhZ0VsJDEudGhpc0FuaW1hdGlvbkR1cmF0aW9uID0gbnVsbDtcbiAgICAgICAgICB0b1NvcnRhYmxlLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgICAgICAgIGlmICghaW5pdGlhbEZvbGRpbmcpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgICBkcmFnRWwkMS5mcm9tUmVjdCA9IGRyYWdSZWN0O1xuICAgICAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgbXVsdGlEcmFnRWxlbWVudC50aGlzQW5pbWF0aW9uRHVyYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50ICE9PSBkcmFnRWwkMSkge1xuICAgICAgICAgICAgICAgICAgdmFyIHJlY3QgPSBmb2xkaW5nID8gZ2V0UmVjdChtdWx0aURyYWdFbGVtZW50KSA6IGRyYWdSZWN0O1xuICAgICAgICAgICAgICAgICAgbXVsdGlEcmFnRWxlbWVudC5mcm9tUmVjdCA9IHJlY3Q7XG5cbiAgICAgICAgICAgICAgICAgIC8vIFByZXBhcmUgdW5mb2xkIGFuaW1hdGlvblxuICAgICAgICAgICAgICAgICAgdG9Tb3J0YWJsZS5hZGRBbmltYXRpb25TdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogbXVsdGlEcmFnRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgcmVjdDogcmVjdFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTXVsdGkgZHJhZyBlbGVtZW50cyBhcmUgbm90IG5lY2Vzc2FyaWx5IHJlbW92ZWQgZnJvbSB0aGUgRE9NIG9uIGRyb3AsIHNvIHRvIHJlaW5zZXJ0XG4gICAgICAgICAgICAvLyBwcm9wZXJseSB0aGV5IG11c3QgYWxsIGJlIHJlbW92ZWRcbiAgICAgICAgICAgIHJlbW92ZU11bHRpRHJhZ0VsZW1lbnRzKCk7XG4gICAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICAgIGlmIChjaGlsZHJlblttdWx0aURyYWdJbmRleF0pIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRFbC5pbnNlcnRCZWZvcmUobXVsdGlEcmFnRWxlbWVudCwgY2hpbGRyZW5bbXVsdGlEcmFnSW5kZXhdKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRFbC5hcHBlbmRDaGlsZChtdWx0aURyYWdFbGVtZW50KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBtdWx0aURyYWdJbmRleCsrO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIElmIGluaXRpYWwgZm9sZGluZyBpcyBkb25lLCB0aGUgZWxlbWVudHMgbWF5IGhhdmUgY2hhbmdlZCBwb3NpdGlvbiBiZWNhdXNlIHRoZXkgYXJlIG5vd1xuICAgICAgICAgICAgLy8gdW5mb2xkaW5nIGFyb3VuZCBkcmFnRWwsIGV2ZW4gdGhvdWdoIGRyYWdFbCBtYXkgbm90IGhhdmUgaGlzIGluZGV4IGNoYW5nZWQsIHNvIHVwZGF0ZSBldmVudFxuICAgICAgICAgICAgLy8gbXVzdCBiZSBmaXJlZCBoZXJlIGFzIFNvcnRhYmxlIHdpbGwgbm90LlxuICAgICAgICAgICAgaWYgKG9sZEluZGV4ID09PSBpbmRleChkcmFnRWwkMSkpIHtcbiAgICAgICAgICAgICAgdmFyIHVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnQuc29ydGFibGVJbmRleCAhPT0gaW5kZXgobXVsdGlEcmFnRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgaWYgKHVwZGF0ZSkge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoU29ydGFibGVFdmVudCgndXBkYXRlJyk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50KCdzb3J0Jyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBNdXN0IGJlIGRvbmUgYWZ0ZXIgY2FwdHVyaW5nIGluZGl2aWR1YWwgcmVjdHMgKHNjcm9sbCBiYXIpXG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICAgICAgdW5zZXRSZWN0KG11bHRpRHJhZ0VsZW1lbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRvU29ydGFibGUuYW5pbWF0ZUFsbCgpO1xuICAgICAgICB9XG4gICAgICAgIG11bHRpRHJhZ1NvcnRhYmxlID0gdG9Tb3J0YWJsZTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVtb3ZlIGNsb25lcyBpZiBuZWNlc3NhcnlcbiAgICAgIGlmIChyb290RWwgPT09IHBhcmVudEVsIHx8IHB1dFNvcnRhYmxlICYmIHB1dFNvcnRhYmxlLmxhc3RQdXRNb2RlICE9PSAnY2xvbmUnKSB7XG4gICAgICAgIG11bHRpRHJhZ0Nsb25lcy5mb3JFYWNoKGZ1bmN0aW9uIChjbG9uZSkge1xuICAgICAgICAgIGNsb25lLnBhcmVudE5vZGUgJiYgY2xvbmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjbG9uZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgbnVsbGluZ0dsb2JhbDogZnVuY3Rpb24gbnVsbGluZ0dsb2JhbCgpIHtcbiAgICAgIHRoaXMuaXNNdWx0aURyYWcgPSBkcmFnU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgbXVsdGlEcmFnQ2xvbmVzLmxlbmd0aCA9IDA7XG4gICAgfSxcbiAgICBkZXN0cm95R2xvYmFsOiBmdW5jdGlvbiBkZXN0cm95R2xvYmFsKCkge1xuICAgICAgdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcoKTtcbiAgICAgIG9mZihkb2N1bWVudCwgJ3BvaW50ZXJ1cCcsIHRoaXMuX2Rlc2VsZWN0TXVsdGlEcmFnKTtcbiAgICAgIG9mZihkb2N1bWVudCwgJ21vdXNldXAnLCB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZyk7XG4gICAgICBvZmYoZG9jdW1lbnQsICd0b3VjaGVuZCcsIHRoaXMuX2Rlc2VsZWN0TXVsdGlEcmFnKTtcbiAgICAgIG9mZihkb2N1bWVudCwgJ2tleWRvd24nLCB0aGlzLl9jaGVja0tleURvd24pO1xuICAgICAgb2ZmKGRvY3VtZW50LCAna2V5dXAnLCB0aGlzLl9jaGVja0tleVVwKTtcbiAgICB9LFxuICAgIF9kZXNlbGVjdE11bHRpRHJhZzogZnVuY3Rpb24gX2Rlc2VsZWN0TXVsdGlEcmFnKGV2dCkge1xuICAgICAgaWYgKHR5cGVvZiBkcmFnU3RhcnRlZCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkcmFnU3RhcnRlZCkgcmV0dXJuO1xuXG4gICAgICAvLyBPbmx5IGRlc2VsZWN0IGlmIHNlbGVjdGlvbiBpcyBpbiB0aGlzIHNvcnRhYmxlXG4gICAgICBpZiAobXVsdGlEcmFnU29ydGFibGUgIT09IHRoaXMuc29ydGFibGUpIHJldHVybjtcblxuICAgICAgLy8gT25seSBkZXNlbGVjdCBpZiB0YXJnZXQgaXMgbm90IGl0ZW0gaW4gdGhpcyBzb3J0YWJsZVxuICAgICAgaWYgKGV2dCAmJiBjbG9zZXN0KGV2dC50YXJnZXQsIHRoaXMub3B0aW9ucy5kcmFnZ2FibGUsIHRoaXMuc29ydGFibGUuZWwsIGZhbHNlKSkgcmV0dXJuO1xuXG4gICAgICAvLyBPbmx5IGRlc2VsZWN0IGlmIGxlZnQgY2xpY2tcbiAgICAgIGlmIChldnQgJiYgZXZ0LmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xuICAgICAgd2hpbGUgKG11bHRpRHJhZ0VsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICB2YXIgZWwgPSBtdWx0aURyYWdFbGVtZW50c1swXTtcbiAgICAgICAgdG9nZ2xlQ2xhc3MoZWwsIHRoaXMub3B0aW9ucy5zZWxlY3RlZENsYXNzLCBmYWxzZSk7XG4gICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLnNoaWZ0KCk7XG4gICAgICAgIGRpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgIHNvcnRhYmxlOiB0aGlzLnNvcnRhYmxlLFxuICAgICAgICAgIHJvb3RFbDogdGhpcy5zb3J0YWJsZS5lbCxcbiAgICAgICAgICBuYW1lOiAnZGVzZWxlY3QnLFxuICAgICAgICAgIHRhcmdldEVsOiBlbCxcbiAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBfY2hlY2tLZXlEb3duOiBmdW5jdGlvbiBfY2hlY2tLZXlEb3duKGV2dCkge1xuICAgICAgaWYgKGV2dC5rZXkgPT09IHRoaXMub3B0aW9ucy5tdWx0aURyYWdLZXkpIHtcbiAgICAgICAgdGhpcy5tdWx0aURyYWdLZXlEb3duID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIF9jaGVja0tleVVwOiBmdW5jdGlvbiBfY2hlY2tLZXlVcChldnQpIHtcbiAgICAgIGlmIChldnQua2V5ID09PSB0aGlzLm9wdGlvbnMubXVsdGlEcmFnS2V5KSB7XG4gICAgICAgIHRoaXMubXVsdGlEcmFnS2V5RG93biA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzKE11bHRpRHJhZywge1xuICAgIC8vIFN0YXRpYyBtZXRob2RzICYgcHJvcGVydGllc1xuICAgIHBsdWdpbk5hbWU6ICdtdWx0aURyYWcnLFxuICAgIHV0aWxzOiB7XG4gICAgICAvKipcclxuICAgICAgICogU2VsZWN0cyB0aGUgcHJvdmlkZWQgbXVsdGktZHJhZyBpdGVtXHJcbiAgICAgICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbCAgICBUaGUgZWxlbWVudCB0byBiZSBzZWxlY3RlZFxyXG4gICAgICAgKi9cbiAgICAgIHNlbGVjdDogZnVuY3Rpb24gc2VsZWN0KGVsKSB7XG4gICAgICAgIHZhciBzb3J0YWJsZSA9IGVsLnBhcmVudE5vZGVbZXhwYW5kb107XG4gICAgICAgIGlmICghc29ydGFibGUgfHwgIXNvcnRhYmxlLm9wdGlvbnMubXVsdGlEcmFnIHx8IH5tdWx0aURyYWdFbGVtZW50cy5pbmRleE9mKGVsKSkgcmV0dXJuO1xuICAgICAgICBpZiAobXVsdGlEcmFnU29ydGFibGUgJiYgbXVsdGlEcmFnU29ydGFibGUgIT09IHNvcnRhYmxlKSB7XG4gICAgICAgICAgbXVsdGlEcmFnU29ydGFibGUubXVsdGlEcmFnLl9kZXNlbGVjdE11bHRpRHJhZygpO1xuICAgICAgICAgIG11bHRpRHJhZ1NvcnRhYmxlID0gc29ydGFibGU7XG4gICAgICAgIH1cbiAgICAgICAgdG9nZ2xlQ2xhc3MoZWwsIHNvcnRhYmxlLm9wdGlvbnMuc2VsZWN0ZWRDbGFzcywgdHJ1ZSk7XG4gICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLnB1c2goZWwpO1xuICAgICAgfSxcbiAgICAgIC8qKlxyXG4gICAgICAgKiBEZXNlbGVjdHMgdGhlIHByb3ZpZGVkIG11bHRpLWRyYWcgaXRlbVxyXG4gICAgICAgKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWwgICAgVGhlIGVsZW1lbnQgdG8gYmUgZGVzZWxlY3RlZFxyXG4gICAgICAgKi9cbiAgICAgIGRlc2VsZWN0OiBmdW5jdGlvbiBkZXNlbGVjdChlbCkge1xuICAgICAgICB2YXIgc29ydGFibGUgPSBlbC5wYXJlbnROb2RlW2V4cGFuZG9dLFxuICAgICAgICAgIGluZGV4ID0gbXVsdGlEcmFnRWxlbWVudHMuaW5kZXhPZihlbCk7XG4gICAgICAgIGlmICghc29ydGFibGUgfHwgIXNvcnRhYmxlLm9wdGlvbnMubXVsdGlEcmFnIHx8ICF+aW5kZXgpIHJldHVybjtcbiAgICAgICAgdG9nZ2xlQ2xhc3MoZWwsIHNvcnRhYmxlLm9wdGlvbnMuc2VsZWN0ZWRDbGFzcywgZmFsc2UpO1xuICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZXZlbnRQcm9wZXJ0aWVzOiBmdW5jdGlvbiBldmVudFByb3BlcnRpZXMoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcbiAgICAgIHZhciBvbGRJbmRpY2llcyA9IFtdLFxuICAgICAgICBuZXdJbmRpY2llcyA9IFtdO1xuICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICBvbGRJbmRpY2llcy5wdXNoKHtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50OiBtdWx0aURyYWdFbGVtZW50LFxuICAgICAgICAgIGluZGV4OiBtdWx0aURyYWdFbGVtZW50LnNvcnRhYmxlSW5kZXhcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gbXVsdGlEcmFnRWxlbWVudHMgd2lsbCBhbHJlYWR5IGJlIHNvcnRlZCBpZiBmb2xkaW5nXG4gICAgICAgIHZhciBuZXdJbmRleDtcbiAgICAgICAgaWYgKGZvbGRpbmcgJiYgbXVsdGlEcmFnRWxlbWVudCAhPT0gZHJhZ0VsJDEpIHtcbiAgICAgICAgICBuZXdJbmRleCA9IC0xO1xuICAgICAgICB9IGVsc2UgaWYgKGZvbGRpbmcpIHtcbiAgICAgICAgICBuZXdJbmRleCA9IGluZGV4KG11bHRpRHJhZ0VsZW1lbnQsICc6bm90KC4nICsgX3RoaXMzLm9wdGlvbnMuc2VsZWN0ZWRDbGFzcyArICcpJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3SW5kZXggPSBpbmRleChtdWx0aURyYWdFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBuZXdJbmRpY2llcy5wdXNoKHtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50OiBtdWx0aURyYWdFbGVtZW50LFxuICAgICAgICAgIGluZGV4OiBuZXdJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXRlbXM6IF90b0NvbnN1bWFibGVBcnJheShtdWx0aURyYWdFbGVtZW50cyksXG4gICAgICAgIGNsb25lczogW10uY29uY2F0KG11bHRpRHJhZ0Nsb25lcyksXG4gICAgICAgIG9sZEluZGljaWVzOiBvbGRJbmRpY2llcyxcbiAgICAgICAgbmV3SW5kaWNpZXM6IG5ld0luZGljaWVzXG4gICAgICB9O1xuICAgIH0sXG4gICAgb3B0aW9uTGlzdGVuZXJzOiB7XG4gICAgICBtdWx0aURyYWdLZXk6IGZ1bmN0aW9uIG11bHRpRHJhZ0tleShrZXkpIHtcbiAgICAgICAga2V5ID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChrZXkgPT09ICdjdHJsJykge1xuICAgICAgICAgIGtleSA9ICdDb250cm9sJztcbiAgICAgICAgfSBlbHNlIGlmIChrZXkubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGtleSA9IGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zdWJzdHIoMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gaW5zZXJ0TXVsdGlEcmFnRWxlbWVudHMoY2xvbmVzSW5zZXJ0ZWQsIHJvb3RFbCkge1xuICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50LCBpKSB7XG4gICAgdmFyIHRhcmdldCA9IHJvb3RFbC5jaGlsZHJlblttdWx0aURyYWdFbGVtZW50LnNvcnRhYmxlSW5kZXggKyAoY2xvbmVzSW5zZXJ0ZWQgPyBOdW1iZXIoaSkgOiAwKV07XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgcm9vdEVsLmluc2VydEJlZm9yZShtdWx0aURyYWdFbGVtZW50LCB0YXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByb290RWwuYXBwZW5kQ2hpbGQobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXHJcbiAqIEluc2VydCBtdWx0aS1kcmFnIGNsb25lc1xyXG4gKiBAcGFyYW0gIHtbQm9vbGVhbl19IGVsZW1lbnRzSW5zZXJ0ZWQgIFdoZXRoZXIgdGhlIG11bHRpLWRyYWcgZWxlbWVudHMgYXJlIGluc2VydGVkXHJcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSByb290RWxcclxuICovXG5mdW5jdGlvbiBpbnNlcnRNdWx0aURyYWdDbG9uZXMoZWxlbWVudHNJbnNlcnRlZCwgcm9vdEVsKSB7XG4gIG11bHRpRHJhZ0Nsb25lcy5mb3JFYWNoKGZ1bmN0aW9uIChjbG9uZSwgaSkge1xuICAgIHZhciB0YXJnZXQgPSByb290RWwuY2hpbGRyZW5bY2xvbmUuc29ydGFibGVJbmRleCArIChlbGVtZW50c0luc2VydGVkID8gTnVtYmVyKGkpIDogMCldO1xuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHJvb3RFbC5pbnNlcnRCZWZvcmUoY2xvbmUsIHRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvb3RFbC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHJlbW92ZU11bHRpRHJhZ0VsZW1lbnRzKCkge1xuICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgaWYgKG11bHRpRHJhZ0VsZW1lbnQgPT09IGRyYWdFbCQxKSByZXR1cm47XG4gICAgbXVsdGlEcmFnRWxlbWVudC5wYXJlbnROb2RlICYmIG11bHRpRHJhZ0VsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtdWx0aURyYWdFbGVtZW50KTtcbiAgfSk7XG59XG5cblNvcnRhYmxlLm1vdW50KG5ldyBBdXRvU2Nyb2xsUGx1Z2luKCkpO1xuU29ydGFibGUubW91bnQoUmVtb3ZlLCBSZXZlcnQpO1xuXG5leHBvcnQgZGVmYXVsdCBTb3J0YWJsZTtcbmV4cG9ydCB7IE11bHRpRHJhZ1BsdWdpbiBhcyBNdWx0aURyYWcsIFNvcnRhYmxlLCBTd2FwUGx1Z2luIGFzIFN3YXAgfTtcbiIsImltcG9ydCBcIi4vY3NzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHtTb3J0YWJsZX0gZnJvbSBcInNvcnRhYmxlanNcIjtcbmltcG9ydCB7Y3JlYXRlTWVudUl0ZW19IGZyb20gXCIuL2NyZWF0ZS1tZW51LWl0ZW0uanNcIjtcblxuLyoqIENsYXNzIHJlcHJlc2VudGluZyBhbiBvYmplY3QgZm9yIG1hbmFnaW5nIGEgbWFwLiAqL1xuZXhwb3J0IGNsYXNzIE1hcHBlciB7XG5cbiAgLy8gcHJpdmF0ZSBmaWVsZHNcblxuICAvKipcbiAgICogSFRNTCBFbGVtZW50IHRoYXQgY29udGFpbnMgbWVudSBpdGVtcyBmb3IgYWN0aXZlIG1hcCBsYXllcnMuXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIF9tZW51RWxlbWVudDtcblxuICAvKipcbiAgICogTWFwIHRoYXQgY29udGFpbnMgaGlkZGVuIG1lbnUgaXRlbXMgZm9yIG1hcCBsYXllcnMuXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIF9oaWRkZW5NZW51SXRlbXM7XG5cbiAgLyoqXG4gICAqIEhUTUwgRWxlbWVudCB0aGF0IGNvbnRhaW5zIHRoZSBNYXBib3ggbWFwLlxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBfbWFwRWxlbWVudDtcblxuICAvKipcbiAgICogQXJyYXkgdGhhdCBjb250YWlucyBpZGVudGlmaWVycyBmb3IgdGhlIGxheWVycyB0aGF0IGhhdmUgYmVlblxuICAgKiBhZGRlZCB0byB0aGUgbWFwLiBOb3RlIHRoYXQgdGhpcyBpbmNsdWRlcyBoaWRkZW4gbGF5ZXJzLlxuICAgKiBAdHlwZSB7QXJyYXk8c3RyaW5nPn1cbiAgICovXG4gIF9hY3RpdmVMYXllcklkcztcblxuICAvKipcbiAgICogTWF4aW11bSBudW1iZXIgb2YgbGF5ZXJzIHRoYXQgY2FuIGJlIGFkZGVkIHRvIHRoZSBtYXAuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBfbWF4TGF5ZXJzO1xuXG4gIC8qKlxuICAqIENvbnN0cnVjdCBhIG5ldyBNYXBwZXIgb2JqZWN0LlxuICAqIEByZXR1cm4ge3ZvaWR9XG4gICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIGluaXRpYWxpemUgZmllbGRzXG4gICAgdGhpcy5fYWN0aXZlTGF5ZXJJZHMgPSBbXTtcbiAgICB0aGlzLl9oaWRkZW5NZW51SXRlbXMgPSBuZXcgTWFwKCk7XG4gIH1cblxuICAvKipcbiAgKiBJbml0aWFsaXplIE1hcHBlciBvYmplY3Qgd2l0aCBtZW51LCBtYXAsIGFuZCBwcm9qZWN0IGRhdGEuXG4gICogQHBhcmFtIHtzdHJpbmd9IG1lbnVJZCAtIEhUTUwgZWxlbWVudCBpZGVudGlmaWVyIGZvciBtZW51IGNvbnRhaW5lci5cbiAgKiBAcGFyYW0ge3N0cmluZ30gbWFwSWQgLSBIVE1MIGVsZW1lbnQgaWRlbnRpZmllciBmb3IgdGhlIG1hcGdsIG1hcC5cbiAgKiBAcGFyYW0ge09iamVjdH0gcHJvamVjdCAtIE9iamVjdCB3aXRoIHZhcmlvdXMgdHlwZXMgb2Ygb2JqZWN0cy5cbiAgKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IHByb2plY3QuZmVhdHVyZXMgLSBBcnJheSBvZiBmZWF0dXJlIG9iamVjdHMuXG4gICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBwcm9qZWN0LmNvc3RzIC0gQXJyYXkgb2YgY29zdCBvYmplY3RzLlxuICAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gcHJvamVjdC5sb2NrIC0gQXJyYXkgb2YgbG9jayBvYmplY3RzLlxuICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhMYXllcnMgLSBNYXhpbXVtIG51bWJlciBvZiBhY3RpdmUgbGF5ZXJzIHBlcm1pdHRlZCBvblxuICAqIHRoZSBtYXAuXG4gICogQHJldHVybiB7dm9pZH1cbiAgKi9cbiAgaW5pdGlhbGl6ZShtZW51SWQsIG1hcElkLCBwcm9qZWN0LCBtYXhMYXllcnMgPSAxNSkge1xuICAgIC8vIGluaXRpYWxpemUgZmllbGRzXG4gICAgdGhpcy5fYWN0aXZlTGF5ZXJJZHMgPSBbXTtcbiAgICB0aGlzLl9oaWRkZW5NZW51SXRlbXMgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5fbWF4TGF5ZXJzID0gbWF4TGF5ZXJzO1xuICAgIHRoaXMuX21lbnVFbGVtZW50ID1cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1lbnVJZCkucXVlcnlTZWxlY3RvcihcIi5tYXBwZXItbWVudVwiKTtcbiAgICB0aGlzLl9tYXBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWFwSWQpO1xuXG4gICAgLy8gZGVmaW5lIHRlbXBvcmFyeSB2YXJpYWJsZXNcbiAgICBsZXQgaSwgaiwgZWw7XG5cbiAgICAvLyBhZGQgbWVudSBpdGVtc1xuICAgIC8vIG5vdGUgdGhhdCB0aGlzIGNvZGUgYXNzdW1lcyB0aGF0IHRoZSB0aGlzLl9tYXBFbGVtZW50IGhhcyBiZWVuXG4gICAgLy8gaW5pdGlhbGl6ZWQgd2l0aCBsYXllcnMgdGhhdCBoYXZlIHRoZSB2aXNpYmxlIHByb3BlcnR5IHNldCB0byB0cnVlLFxuICAgIC8vIGFsc28gbm90ZSB0aGF0IGxheWVycyBtdXN0IGJlIGFkZGVkIGluIHRoZSBvcmRlciB0aGF0IGlzIHRoZSByZXZlcnNlXG4gICAgLy8gb2YgdGhhdCB1c2VkIHRvIGFkZCBsYXllcnMgdG8gdGhlIG1hcFxuICAgICAgZm9yIChpID0gMDsgaSA8IHByb2plY3QuZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBlbCA9IGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICAgICAgcHJvamVjdC5mZWF0dXJlc1tpXSwgdGhpcywgcHJvamVjdC5mZWF0dXJlc1tpXS50aGVtZXNcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChwcm9qZWN0LmZlYXR1cmVzW2ldLmxheWVyLnZpc2libGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuX21lbnVFbGVtZW50LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgICAgIHRoaXMuX2FjdGl2ZUxheWVySWRzLnB1c2goZWwuaWQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9oaWRkZW5NZW51SXRlbXMuc2V0KGVsLmlkLCBlbCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCBwcm9qZWN0LmNvc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBlbCA9IGNyZWF0ZU1lbnVJdGVtKHByb2plY3QuY29zdHNbaV0sIHRoaXMpO1xuICAgICAgaWYgKHByb2plY3QuY29zdHNbaV0ubGF5ZXIudmlzaWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLl9tZW51RWxlbWVudC5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIHRoaXMuX2FjdGl2ZUxheWVySWRzLnB1c2goZWwuaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faGlkZGVuTWVudUl0ZW1zLnNldChlbC5pZCwgZWwpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDwgcHJvamVjdC5sb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgZWwgPSBjcmVhdGVNZW51SXRlbShwcm9qZWN0LmxvY2tzW2ldLCB0aGlzKTtcbiAgICAgIGlmIChwcm9qZWN0LmxvY2tzW2ldLmxheWVyLnZpc2libGUgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5fbWVudUVsZW1lbnQuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICB0aGlzLl9hY3RpdmVMYXllcklkcy5wdXNoKGVsLmlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hpZGRlbk1lbnVJdGVtcy5zZXQoZWwuaWQsIGVsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChpID0gMDsgaSA8IHByb2plY3Quc29sdXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBlbCA9IGNyZWF0ZU1lbnVJdGVtKHByb2plY3Quc29sdXRpb25zW2ldLCB0aGlzKTtcbiAgICAgIGlmIChwcm9qZWN0LnNvbHV0aW9uc1tpXS5sYXllci52aXNpYmxlID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuX21lbnVFbGVtZW50LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgdGhpcy5fYWN0aXZlTGF5ZXJJZHMucHVzaChwcm9qZWN0LnNvbHV0aW9uc1tpXS5pZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oaWRkZW5NZW51SXRlbXMuc2V0KGVsLmlkLCBlbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZW5hYmxlIHNvcnRpbmcgaW4gbWVudSBlbGVtZW50XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHZhciBzb3J0YWJsZSA9IG5ldyBTb3J0YWJsZShcbiAgICAgIHRoaXMuX21lbnVFbGVtZW50LCB7XG4gICAgICBhbmltYXRpb246IDE1MCxcbiAgICAgIGRhdGFJZEF0dHI6IFwiZGF0YS1pZFwiLFxuICAgICAgZ2hvc3RDbGFzczogXCJnaG9zdFwiLFxuICAgICAgb25VcGRhdGU6IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICBpZiAoSFRNTFdpZGdldHMuc2hpbnlNb2RlKSB7XG4gICAgICAgICAgbGV0IGJlZm9yZUlkID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGlmIChldnQubmV3SW5kZXggPiAwKSB7XG4gICAgICAgICAgICBldnQudG8uY2hpbGRyZW5bZXZ0Lm5ld0luZGV4IC0gMV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhhdC5tb3ZlTGF5ZXJPbk1hcChldnQuaXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpLCBiZWZvcmVJZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAqIEFkZCBhIGxheWVyIHRvIHRoZSBNYXBwZXIgb2JqZWN0LiBOb3RlIHRoYXQgaWYgYWRkaW5nIHRoaXMgbmV3IGxheWVyXG4gICogd291bGQgZXhjZWVkIHRoZSBtYXhpbXVtIG51bWJlciBvZiBwZXJtaXR0ZWQgYWN0aXZlIGxheWVycywgdGhlblxuICAqIHRoZSBvbGRlc3QgYWN0aXZlIGxheWVyIHdpbGwgYmUgcmVtb3ZlZCBhdXRvbWF0aWNhbGx5LlxuICAqIEBwYXJhbSB7T2JqZWN0fSBsYXllciAtIE9iamVjdCB0aGF0IGlzIGEgbG9jayBvciBhIHNvbHV0aW9uLlxuICAqIEByZXR1cm4ge3ZvaWR9XG4gICovXG4gIGFkZExheWVyKGxheWVyKSB7XG4gICAgLy8gY3JlYXRlIG1lbnUgaXRlbVxuICAgIGxldCBlbCA9IGNyZWF0ZU1lbnVJdGVtKGxheWVyLCB0aGlzKVxuICAgIC8vIGFkZCBtZW51IGl0ZW0gdG8gaGlkZGVuIG1lbnUgaXRlbXNcbiAgICB0aGlzLl9oaWRkZW5NZW51SXRlbXMuc2V0KGVsLmlkLCBlbCk7XG4gICAgLy8gYWRkIHRvIGFjdGl2ZSBsYXllcnNcbiAgICB0aGlzLl9hY3RpdmVMYXllcklkcy5wdXNoKGxheWVyLmlkKTtcbiAgICAvLyBpZiBudW1iZXIgb2YgYWN0aXZlIGxheWVycyBleGNlZWRzIGxpbWl0LCB0aGVuIHJlbW92ZSBvbGRlc3QgbGF5ZXJcbiAgICBpZiAodGhpcy5fYWN0aXZlTGF5ZXJJZHMubGVuZ3RoID4gdGhpcy5tYXhMYXllcnMpIHtcbiAgICAgIHRoaXMuaGlkZUxheWVyRnJvbU1lbnUodGhpcy5fYWN0aXZlTGF5ZXJJZHNbMF0pO1xuICAgICAgdGhpcy5yZW1vdmVMYXllckZyb21NYXAodGhpcy5fYWN0aXZlTGF5ZXJJZHNbMF0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAqIEhpZGUgbGF5ZXIgb24gbWVudS5cbiAgKiBAcGFyYW0ge3N0cmluZ30gbGF5ZXJJZCAtIEhUTUwgaWRlbnRpZmllciBmb3IgbGF5ZXIuXG4gICogQHBhcmFtIHtib29sZWFufSB1cGRhdGVNYXAgLSBTaG91bGQgdGhlIG1hcCBhbHNvIGJlIHVwZGF0ZWQgdG8gcmVmbGVjdFxuICAqIHRoZXNlIGNoYW5nZXMgdG8gdGhlIG1lbnU/XG4gICogQHJldHVybiB7dm9pZH1cbiAgKi9cbiAgaGlkZUxheWVyT25NZW51KGxheWVySWQsIHVwZGF0ZU1hcCA9IHRydWUpIHtcbiAgICAvLyBmaW5kIGVsZW1lbnQgZm9yIGxheWVyJ3MgbWVudSBpdGVtXG4gICAgbGV0IGVsID0gdGhpcy5fbWVudUVsZW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2xheWVySWR9XCJdYCk7XG4gICAgLy8gdXBkYXRlIG1lbnVcbiAgICBpZiAoZWwpIHtcbiAgICAgIC8vIHJlbW92ZSBlbGVtZW50IGZyb20gbWVudVxuICAgICAgZWwucmVtb3ZlKCk7XG4gICAgICAvLyBhZGQgbWVudSBpdGVtIHRvIGhpZGRlbiBtZW51IGl0ZW1zXG4gICAgICB0aGlzLl9oaWRkZW5NZW51SXRlbXMuc2V0KGVsLmlkLCBlbCk7XG4gICAgfVxuICAgIC8vIGlmIG5lZWRlZCwgdXBkYXRlIG1hcFxuICAgIGlmICh1cGRhdGVNYXAgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuaGlkZUxheWVyT25NYXAobGF5ZXJJZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICogU2hvdyBsYXllciBvbiBtZW51LlxuICAqIEBwYXJhbSB7c3RyaW5nfSBsYXllcklkIC0gSFRNTCBpZGVudGlmaWVyIGZvciBsYXllci5cbiAgKiBAcGFyYW0ge2Jvb2xlYW59IHNob3dMZWdlbmQgLSBTaG91bGQgdGhlIGxlZ2VuZCBiZSBzaG93biBvbiB0aGUgbWVudT9cbiAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuZFBvc2l0aW9uIC0gU2hvdWxkIHRoZSBsYXllciBiZSBhZGRlZCB0byB0aGVcbiAgKiBiZWdpbm5pbmcgb3IgdGhlIGVuZCBvZiB0aGUgbWVudT9cbiAgKiBAcGFyYW0ge2Jvb2xlYW59IHVwZGF0ZU1hcCAtIFNob3VsZCB0aGUgbWFwIGFsc28gYmUgdXBkYXRlZCB0byByZWZsZWN0XG4gICogdGhlc2UgY2hhbmdlcyB0byB0aGUgbWVudT9cbiAgKiBAcmV0dXJuIHt2b2lkfVxuICAqL1xuICBzaG93TGF5ZXJPbk1lbnUoXG4gICAgbGF5ZXJJZCwgc2hvd0xlZ2VuZCA9IHRydWUsIGVuZFBvc2l0aW9uID0gdHJ1ZSwgdXBkYXRlTWFwID0gdHJ1ZVxuICApIHtcbiAgICAvLyBmaW5kIGVsZW1lbnQgZm9yIGxheWVyJ3MgbWVudSBpdGVtXG4gICAgbGV0IGVsID0gdGhpcy5faGlkZGVuTWVudUl0ZW1zLmdldChsYXllcklkKTtcbiAgICAvLyBmaW5kIG1lbnUgaXRlbSBjaGVja2JveCBmb3Igc2hvd2luZyBtYXAgYW5kIHNldCBhY2NvcmRpbmdseVxuICAgIGxldCBsYXllckNoZWNrYm94ID0gZWwucXVlcnlTZWxlY3RvcihcIi5sYXllci1jaGVja2JveFwiKTtcbiAgICBsYXllckNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgIC8vIGZpbmQgbWVudSBpdGVtIGNoZWNrYm94IGZvciBzaG93aW5nIGxlZ2VuZCBhbmQgc2V0IGFjY29yZGluZ2x5XG4gICAgbGV0IGxlZ2VuZENoZWNrYm94ID0gZWwucXVlcnlTZWxlY3RvcihcIi5sZWdlbmQtY2hlY2tib3hcIik7XG4gICAgaWYgKHNob3dMZWdlbmQgPT09IHRydWUpIHtcbiAgICAgIGxlZ2VuZENoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBpZiBuZWVkZWQsIHNob3cgbGF5ZXIgb24gbWFwXG4gICAgaWYgKHVwZGF0ZU1hcCA9PT0gdHJ1ZSApIHtcbiAgICAgIHRoaXMuc2hvd0xheWVyT25NYXAobGF5ZXJJZCk7XG4gICAgfVxuICAgIC8vIGFkZCBsYXllciB0byBtZW51XG4gICAgaWYgKGVuZFBvc2l0aW9uID09PSB0cnVlKSB7XG4gICAgICB0aGlzLl9tZW51RWxlbWVudC5hcHBlbmRDaGlsZChlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX21lbnVFbGVtZW50LnByZXBlbmQoZWwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAqIFNob3cgbGF5ZXIgb24gbWFwLlxuICAqIEBwYXJhbSB7c3RyaW5nfSBsYXllcklkIC0gSFRNTCBpZGVudGlmaWVyIGZvciBsYXllci5cbiAgKiBAcmV0dXJuIHt2b2lkfVxuICAqL1xuICBzaG93TGF5ZXJPbk1hcChsYXllcklkKSB7XG4gICAgLy8gc2V0IGxheWVyIHZpc2liaWxpdHkgb24gbWFwXG4gICAgdGhpcy5fbWFwRWxlbWVudC5tYXAuc2V0TGF5b3V0UHJvcGVydHkoXG4gICAgICBcImx5ci1cIiArIGxheWVySWQsIFwidmlzaWJpbGl0eVwiLCBcInZpc2libGVcIlxuICAgICk7XG4gIH1cblxuICAvKipcbiAgKiBIaWRlIGxheWVyIG9uIG1hcC5cbiAgKiBAcGFyYW0ge3N0cmluZ30gbGF5ZXJJZCAtIEhUTUwgaWRlbnRpZmllciBmb3IgbGF5ZXIuXG4gICogQHJldHVybiB7dm9pZH1cbiAgKi9cbiAgaGlkZUxheWVyT25NYXAobGF5ZXJJZCkge1xuICAgIC8vIHNldCBsYXllciB2aXNpYmlsaXR5IG9uIG1hcFxuICAgIHRoaXMuX21hcEVsZW1lbnQubWFwLnNldExheW91dFByb3BlcnR5KFxuICAgICAgXCJseXItXCIgKyBsYXllcklkLCBcInZpc2liaWxpdHlcIiwgXCJub25lXCJcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICogTW92ZSBsYXllciBvbiBtYXAuXG4gICogQHBhcmFtIHtzdHJpbmd9IGxheWVySWQgLSBIVE1MIGlkZW50aWZpZXIgZm9yIGxheWVyIHRvIHVwZGF0ZS5cbiAgKiBAcGFyYW0ge3N0cmluZ30gYmVmb3JlSWQgLSBIVE1MIGlkZW50aWZpZXIgZm9yIHRoZSBsYXllciB0aGF0IHNob3VsZCBiZVxuICAqIGBsYXllcklkYCBzaG91bGQgYmUgaW5zZXJ0ZWQgYmVmb3JlIChpbiBvdGhlciB3b3JkcywgYGxheWVySWRgIHdpbGwgYXBwZWFyXG4gICogdW5kZXIgYGJlZm9yZUlkYCkuIElmIGBiZWZvcmVJZCA9IHVuZGVmaW5lZGAsIHRoZW4gdGhlIGxheWVyIGlzIG1vdmVkIHRvXG4gICogdGhlIHZlcnkgdG9wLlxuICAqIEByZXR1cm4ge3ZvaWR9XG4gICovXG4gIG1vdmVMYXllck9uTWFwKGxheWVySWQsIGJlZm9yZUlkKSB7XG4gICAgLy8gbW92ZSBsYXllciBvbiBtYXBcbiAgICBpZiAodHlwZW9mKGJlZm9yZUlkKSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhpcy5fbWFwRWxlbWVudC5tYXAubW92ZUxheWVyKFwibHlyLVwiICsgbGF5ZXJJZCwgXCJseXItXCIgKyBiZWZvcmVJZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX21hcEVsZW1lbnQubWFwLm1vdmVMYXllcihcImx5ci1cIiArIGxheWVySWQsIHVuZGVmaW5lZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICogUmVtb3ZlIGxheWVyIG9uIG1hcC5cbiAgKiBAcGFyYW0ge3N0cmluZ30gbGF5ZXJJZCAtIEhUTUwgaWRlbnRpZmllciBmb3IgbGF5ZXIuXG4gICogQHJldHVybiB7dm9pZH1cbiAgKi9cbiAgcmVtb3ZlTGF5ZXJGcm9tTWFwKGxheWVySWQpIHtcbiAgICAvLyByZW1vdmUgbGF5ZXIgZnJvbSBtZW51XG4gICAgdGhpcy5oaWRlTGF5ZXJGcm9tTWVudShsYXllcklkKTtcbiAgICAvLyByZW1vdmUgbGF5ZXIgZnJvbSBhcnJheSBvZiBhY3RpdmUgbGF5ZXJzXG4gICAgdGhpcy5fYWN0aXZlTGF5ZXJJZHMgPVxuICAgICAgdGhpcy5fYWN0aXZlTGF5ZXJJZHMuZmlsdGVyKCh4KSA9PiB4ICE9PSBsYXllcl9pZCk7XG4gICAgLy8gcmVtb3ZlIGxheWVyIGZyb20gbWFwXG4gICAgdGhpcy5fbWFwRWxlbWVudC5tYXAucmVtb3ZlTGF5ZXIoXCJseXItXCIgKyBsYXllcklkKTtcbiAgfVxuXG4gIC8qKlxuICAqIERvZXMgdGhlIG1hcCBoYXZlIGEgcGFydGljdWxhciBsYXllciBhY3RpdmU/XG4gICogQHBhcmFtIHtzdHJpbmd9IGxheWVySWQgLSBIVE1MIGlkZW50aWZpZXIgZm9yIGxheWVyLlxuICAqIEByZXR1cm4ge3ZvaWR9XG4gICovXG4gIGhhc0xheWVyQWN0aXZlKGxheWVySWQpIHtcbiAgICB0aGlzLl9hY3RpdmVMYXllcklkcy5pbmNsdWRlcyhsYXllcl9pZCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IFwiLi9jc3MvY2F0ZWdvcmljYWwtbGVnZW5kLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvY29udGludW91cy1sZWdlbmQuY3NzXCI7XG5pbXBvcnQge2FkZFRvb2x0aXB9IGZyb20gIFwiLi4vdXRpbHMvZWxlbWVudC5qc1wiO1xuXG4vKipcbiAqIENyZWF0ZSBhIGNhdGVnb3JpY2FsIGxlZ2VuZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSB4IC0gT2JqZWN0IHdpdGggaXRlbXMgdG8gZGlzcGxheSBpbiBsZWdlbmQuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHgudmFsdWVzIC0gU2V0IG9mIHZhbHVlcyBkZW5vdGluZyB0aGUgbnVtZXJpY1xuICogdmFsdWVzIGZvciBlYWNoIGxlZ2VuZCBpdGVtLiBOb3RlIHRoYXQgdGhlc2UgdmFsdWVzIGFyZSBub3Qgc2hvd25cbiAqIGluIHRoZSBsZWdlbmQuXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHguY29sb3JzIC0gU2V0IG9mIHZhbHVlcyBkZW5vdGluZyB0aGUgY29sb3JcbiAqIGZvciBlYWNoIGxlZ2VuZCBpdGVtLlxuICogTm90ZSB0aGF0IHRoaXMgbXVzdCBoYXZlIHRoZSBzYW1lIGxlbmd0aCBhcyB7QGxpbmsgeC52YWx1ZXN9LlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB4LmxhYmVscyAtIFNldCBvZiB2YWx1ZXMgZGVub3RpbmcgdGhlIHRleHQgbGFiZWxcbiAqIGZvciBlYWNoIGxlZ2VuZCBpdGVtLlxuICogTm90ZSB0aGF0IHRoaXMgbXVzdCBoYXZlIHRoZSBzYW1lIGxlbmd0aCBhcyB7QGxpbmsgeC52YWx1ZXN9LlxuICogQHBhcmFtIHtzdHJpbmd9IHgudW5pdHMgLSBVbml0cyBmb3IgdGhlIGxlZ2VuZCBpdGVtcy5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2F0ZWdvcmljYWxMZWdlbmQoeCkge1xuICAvLyBpbml0aWFsaXplIGxlZ2VuZFxuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbC5jbGFzc05hbWUgPSBcImNhdGVnb3JpY2FsLWxlZ2VuZFwiO1xuICBhZGRUb29sdGlwKFxuICAgIGVsLFxuICAgIFwiVGhpcyBsYXllciBoYXMgY2F0ZWdvcmljYWwgZGF0YSBhbmQgY29sb3JzIGluZGljYXRlIGVhY2ggY2F0ZWdvcnkuXCJcbiAgKTtcbiAgLy8gaWYgbmVlZGVkLCBmb3JjZSB2YWx1ZXMgaW50byBhbiBhcnJheVxuICBpZiAoIUFycmF5LmlzQXJyYXkoeC5sYWJlbHMpKSB7XG4gICAgeC5sYWJlbHMgPSBbeC5sYWJlbHNdXG4gIH1cbiAgaWYgKCFBcnJheS5pc0FycmF5KHgudmFsdWVzKSkge1xuICAgIHgudmFsdWVzID0gW3gudmFsdWVzXVxuICB9XG4gIGlmICghQXJyYXkuaXNBcnJheSh4LmNvbG9ycykpIHtcbiAgICB4LmNvbG9ycyA9IFt4LmNvbG9yc11cbiAgfVxuXG4gIC8vIGNyZWF0ZSBsZWdlbmRcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB4LnZhbHVlcy5sZW5ndGg7ICsraSkge1xuICAgIC8vIGNyZWF0ZSBpdGVtIHRvIGFkZCB0byBsZWdlbmRcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbS5jbGFzc05hbWUgPSBcIml0ZW1cIjtcbiAgICAvLyBjcmVhdGUgdGV4dCBjb21wb25lbnQgdG8gZGlzcGxheSB0aGUgdGV4dFxuICAgIGxldCBpdGVtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgaXRlbUxhYmVsLmNsYXNzTmFtZSA9IFwiaXRlbS1sYWJlbCBkaXNhYmxlLWlmLWluYWN0aXZlXCI7XG4gICAgaXRlbUxhYmVsLmlubmVyVGV4dCA9IGAke3gubGFiZWxzW2ldfWA7XG4gICAgLy8gY3JlYXRlIHN5bWJvbCBjb21wb25lbnQgdG8gZGlzcGxheSB0aGUgY29sb3JcbiAgICBsZXQgaXRlbVN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbVN5bWJvbC5jbGFzc05hbWUgPSBcIml0ZW0tc3ltYm9sIGRpc2FibGUtaWYtaW5hY3RpdmVcIjtcbiAgICBpdGVtU3ltYm9sLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHguY29sb3JzW2ldO1xuICAgIGl0ZW1TeW1ib2wuc3R5bGUuY29sb3IgPSB4LmNvbG9yc1tpXTtcbiAgICAvLyBhZGQgaXRlbSB0byBsZWdlbmRcbiAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1TeW1ib2wpO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUxhYmVsKTtcbiAgICBlbC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgfVxuXG4gIC8vIHJldHVybiBsZWdlbmRcbiAgcmV0dXJuIGVsO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGNvbnRpbnVvdXMgbGVnZW5kLlxuICogQHBhcmFtIHtPYmplY3R9IHggLSBPYmplY3Qgd2l0aCBpdGVtcyB0byBkaXNwbGF5IGluIGxlZ2VuZC5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0geC52YWx1ZXMgLSBTZXQgb2YgdmFsdWVzIHRoYXQgZGVmaW5lIGluY3JlbWVudHNcbiAqIGZvciB0aGUgY29sb3IgYmFyLlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB4LmNvbG9ycyAtIFNldCBvZiB2YWx1ZXMgdGhhdCBkZW5vdGUgYSBjb2xvciBmb3IgZWFjaFxuICogaW5jcmVtZW50IGluIHRoZSBjb2xvciBiYXIuXG4gKiBOb3RlIHRoYXQgdGhpcyBtdXN0IGhhdmUgdGhlIHNhbWUgbGVuZ3RoIGFzIHtAbGluayB4LnZhbHVlc30uXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHguYnJlYWtzIC0gU2V0IG9mIHZhbHVlcyB0aGF0IGRlbm90ZSBwb3NpdGlvbnMgZm9yIHRoZVxuICogdGV4dCBsYWJlbHMgdG8gYWNjb21wYW55IHRoZSBjb2xvciBiYXIuXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHgubGFiZWxzIC0gU2V0IG9mIHZhbHVlcyB0aGF0IGRlbm90ZSB0ZXh0IGxhYmVsXG4gKiB0byBhY2NvbXBhbnkgdGhlIGNvbG9yIGJhci5cbiAqIE5vdGUgdGhhdCB0aGlzIG11c3QgaGF2ZSB0aGUgc2FtZSBsZW5ndGggYXMge0BsaW5rIHguYnJlYWtzfS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB4LnVuaXRzIC0gVW5pdHMgZm9yIHRoZSBsZWdlbmQgaXRlbXMuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGludW91c0xlZ2VuZCh4KSB7XG4gIC8vIGluaXRpYWxpemUgbGVnZW5kXG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsLmNsYXNzTGlzdC5hZGQoXCJjb250aW51b3VzLWxlZ2VuZFwiKTtcbiAgYWRkVG9vbHRpcChcbiAgICBlbCxcbiAgICBcIlRoaXMgbGF5ZXIgaGFzIGNvbnRpbnVvdXMgZGF0YSBhbmQgdGhlIFwiICtcbiAgICAgIFwibGVnZW5kIHNob3dzIHRoZSByYW5nZSBvZiBjb2xvcnMgdXNlZCBmb3IgZGlzcGxheVwiXG4gICk7XG5cbiAgLy8gY29tcHV0ZSB2YWx1ZXNcbiAgbGV0IG1heFZhbHVlID0gTWF0aC5tYXgoLi4ueC52YWx1ZXMpO1xuICBsZXQgbWluVmFsdWUgPSBNYXRoLm1pbiguLi54LnZhbHVlcyk7XG4gIGxldCByYW5nZVZhbHVlID0gbWF4VmFsdWUgLSBtaW5WYWx1ZTtcblxuICAvLyBjcmVhdGUgY29sb3IgYmFyXG4gIGxldCBjb2xvcmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbG9yYmFyLmNsYXNzTmFtZSA9IFwiY29sb3JiYXItcmFtcFwiO1xuICBsZXQgY29sb3JiYXJCYWNrZ3JvdW5kID0gXCJsaW5lYXItZ3JhZGllbnQodG8gbGVmdFwiO1xuICBsZXQgY29sb3JiYXJQb3NpdGlvbiA9IHVuZGVmaW5lZDtcbiAgeC5jb2xvcnMgPSB4LmNvbG9ycy5yZXZlcnNlKCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgeC5jb2xvcnMubGVuZ3RoOyArK2kpIHtcbiAgICBjb2xvcmJhclBvc2l0aW9uID0gKCh4LnZhbHVlc1tpXSAtIG1pblZhbHVlKSAvIHJhbmdlVmFsdWUpICogMTAwO1xuICAgIGNvbG9yYmFyQmFja2dyb3VuZCArPVxuICAgICAgYCwgJHt4LmNvbG9yc1tpXX0gJHtjb2xvcmJhclBvc2l0aW9ufSVgO1xuICB9XG4gIGNvbG9yYmFyQmFja2dyb3VuZCArPSBcIilcIjtcbiAgY29sb3JiYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0geC5jb2xvcnNbMF07XG4gIGNvbG9yYmFyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGNvbG9yYmFyQmFja2dyb3VuZDtcblxuICAvLyBjcmVhdGUgdW5pdHMgbGFiZWxcbiAgbGV0IHVuaXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICB1bml0cy5jbGFzc05hbWUgPSBcImNvbG9yYmFyLXVuaXRzXCI7XG4gIGlmICh0eXBlb2YoeC51bml0cykgPT09IFwic3RyaW5nXCIpIHtcbiAgICB1bml0cy5pbm5lclRleHQgPSBgJHt4LnVuaXRzfWA7XG4gIH1cblxuICAvLyBjcmVhdGUgY29udGFpbmVyIGZvciB0aWNrcyBhbmQgbGFiZWxzXG4gIGxldCBpdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGl0ZW1zLmNsYXNzTmFtZSA9IFwiY29sb3JiYXItaXRlbXNcIjtcblxuICAvLyBjcmVhdGUgYXhpcyB0aWNrcyBhbmQgbGFiZWxzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgeC5icmVha3MubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBjYWxjdWxhdGUgd2lkdGhcbiAgICBsZXQgcG9zID0gTWF0aC5yb3VuZCgxMDAgKiAoKHguYnJlYWtzW2ldIC0gbWluVmFsdWUpIC8gcmFuZ2VWYWx1ZSkpO1xuICAgIC8vIGNyZWF0ZSBjb250YWluZXIgZm9yIGkndGggdGljayBhbmQgbGFiZWxcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbS5zdHlsZS56SW5kZXggPSBpO1xuICAgIGl0ZW0uY2xhc3NOYW1lID0gXCJjb2xvcmJhci1pdGVtXCI7XG4gICAgaXRlbS5zdHlsZS5ncmlkQ29sdW1uU3RhcnQgPSBwb3M7XG4gICAgaXRlbS5zdHlsZS5ncmlkQ29sdW1uRW5kID0gcG9zO1xuICAgIGl0ZW0uc3R5bGUuZ3JpZFJvdyA9IDE7XG4gICAgaXRlbS5zdHlsZS56SW5kZXggPSBpICsgMTtcbiAgICAvLyBjcmVhdGUgdGlja1xuICAgIGxldCBpdGVtVGljayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbVRpY2suY2xhc3NOYW1lID0gXCJjb2xvcmJhci10aWNrXCI7XG4gICAgaXRlbVRpY2suaW5uZXJUZXh0ID0gXCIgXCI7XG4gICAgLy8gY3JlYXRlIGxhYmVsXG4gICAgbGV0IGl0ZW1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBpdGVtTGFiZWwuY2xhc3NOYW1lID0gXCJjb2xvcmJhci1sYWJlbFwiO1xuICAgIGl0ZW1MYWJlbC5pbm5lclRleHQgPSBgJHt4LmxhYmVsc1tpXX1gO1xuICAgIC8vIGFwcGVuZCB0byB0aWNrIGFuZCBsYWJlbCB0byBpdGVtIGNvbnRhaW5lclxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVRpY2spO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUxhYmVsKTtcbiAgICBpdGVtcy5hcHBlbmRDaGlsZChpdGVtKTtcbiAgfVxuXG4gIC8vIGNvbnN0cnVjdCBsZWdlbmRcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29sb3JiYXItY29udGFpbmVyXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29sb3JiYXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbXMpO1xuICBlbC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICBlbC5hcHBlbmRDaGlsZCh1bml0cyk7XG5cbiAgLy8gcmV0dXJuIGxlZ2VuZFxuICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgbGVnZW5kLlxuICogQHBhcmFtIHtPYmplY3R9IHggLSBPYmplY3Qgd2l0aCBpdGVtcyB0byBkaXNwbGF5IGluIGxlZ2VuZC5cbiAqIFNlZSB7QGxpbmsgY3JlYXRlQ29udGludW91c0xlZ2VuZH0gYW5kIHtAbGluayBjcmVhdGVDYXRlZ29yaWNhbExlZ2VuZH1cbiAqIGZvciBhZGRpdGlvbmFsIHBhcmFtZXRlciBkZXRhaWxzLlxuICogQHBhcmFtIHtzdHJpbmd9IHguY2xhc3MgLSBWYWx1ZSBpbmRpY2F0aW5nIHRoZSBkZXNpcmVkIHR5cGUgb2YgbGVnZW5kLlxuICogQWNjZXB0YWJsZSB2YWx1ZXMgaW5jbHVkZSBgXCJDb250aW51b3VzTGVnZW5kXCJgIGFuZCBgXCJDYXRlZ29yaWNhbExlZ2VuZFwiYC5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGVnZW5kKHgpIHtcbiAgaWYgKHguY2xhc3MgPT09IFwiQ29udGludW91c0xlZ2VuZFwiKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNvbnRpbnVvdXNMZWdlbmQoeCk7XG4gIH0gZWxzZSBpZiAoeC5jbGFzcyA9PT0gXCJDYXRlZ29yaWNhbExlZ2VuZFwiKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNhdGVnb3JpY2FsTGVnZW5kKHgpO1xuICB9XG59XG4iLCJpbXBvcnQge2NyZWF0ZUxlZ2VuZH0gZnJvbSBcIi4vY3JlYXRlLWxlZ2VuZC5qc1wiO1xuaW1wb3J0IHtjcmVhdGVQcm92ZW5hbmNlfSBmcm9tIFwiLi4vdXRpbHMvZWxlbWVudC5qc1wiO1xuaW1wb3J0IHtjcmVhdGVOYW1lTGFiZWx9IGZyb20gXCIuLi91dGlscy9lbGVtZW50LmpzXCI7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IG1lbnUgaXRlbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSB4IC0gT2JqZWN0IHdpdGggbWVudSBpdGVtIGluZm9ybWF0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IHguaWQgLSBIVE1MIGVsZW1lbnQgaWRlbnRpZmllciBmb3IgdGhlIG1lbnUgaXRlbS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB4Lm5hbWUgLSBOYW1lIGZvciB0aGUgbWVudSBpdGVtLlxuICogQHBhcmFtIHtPYmplY3R9IHgubGF5ZXIgLSB7QGxpbmsgTGF5ZXJ9IG9iamVjdC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB4LmNsYXNzIC0gQ2xhc3MgZm9yIGxheWVyLiBBdmFpbGFibGUgb3B0aW9ucyBpbmNsdWRlXG4gKiBgXCJGZWF0dXJlXCJgLCBgXCJDb3N0XCJgLCBgXCJMb2NrXCJgLCBhbmQgYFwiU29sdXRpb25cImAuXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwcGVyIC0ge0BsaW5rIE1hcHBlcn0gb2JqZWN0LlxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSB0aGVtZXMgLSBUaGVtZXMgdG8gd2hpY2ggdGhlIG1lbnUgaXRlbSBiZWxvbmdzLlxuICogTm90ZSB0aGF0IHRoaXMgaXMgdGhlIG5hbWVzIG9mIHRoZSB0aGVtZXMgZm9yIGZlYXR1cmUgbGF5ZXJzLlxuICogQHJldHVyblxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0oeCwgbWFwcGVyLCB0aGVtZXMgPSB1bmRlZmluZWQpIHtcbiAgLy8gaW5pdGlhbGl6ZSBjb250YWluZXIgZWxlbWVudFxuICBsZXQgZWwgPSBkb2N1bWVudC5pbXBvcnROb2RlKFxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5cIiArIHguY2xhc3MudG9Mb3dlckNhc2UoKSArIFwiLWxheWVyLXRlbXBsYXRlXCIpXG4gICAgICAuY29udGVudCxcbiAgICB0cnVlKS5jaGlsZHJlblswXTtcblxuICAvLyBmaW5kIGNvbXBvbmVudHMgb2YgY29udGFpbmVyIGVsZW1lbnRcbiAgbGV0IHNob3dMZWdlbmRDaGVja2JveCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIubGVnZW5kLWNoZWNrYm94XCIpO1xuICBsZXQgc2hvd0xheWVyQ2hlY2tib3ggPSBlbC5xdWVyeVNlbGVjdG9yKFwiLmxheWVyLWNoZWNrYm94XCIpO1xuICBsZXQgcmVtb3ZlTGF5ZXJGcm9tTWFwQnV0dG9uID0gZWwucXVlcnlTZWxlY3RvcihcIi5sYXllci1idXR0b25cIik7XG4gIGxldCBsZWdlbmRFbGVtZW50ID0gZWwucXVlcnlTZWxlY3RvcihcIi5sZWdlbmQtY29udGFpbmVyXCIpO1xuICBsZXQgbmFtZUVsZW1lbnQgPSBlbC5xdWVyeVNlbGVjdG9yKFwiLm5hbWUtY29udGFpbmVyXCIpO1xuICBsZXQgcHJvdmVuYW5jZUVsZW1lbnQgPSBlbC5xdWVyeVNlbGVjdG9yKFwiLnByb3ZlbmFuY2UtY29udGFpbmVyXCIpO1xuXG4gIC8vIHNldCBsYXllciBpZFxuICBlbC5pZCA9IHguaWQ7XG4gIGVsLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgZWwuaWQpO1xuXG4gIC8vIGNyZWF0ZSBuYW1lIGxhYmVsXG4gIG5hbWVFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hbWVMYWJlbCh4KSk7XG5cbiAgLy8gc2V0IGxheWVyIGNoZWNrYm94IHN0YXR1c1xuICBzaG93TGF5ZXJDaGVja2JveC5jaGVja2VkID0geC5sYXllci52aXNpYmxlO1xuXG4gIC8vIHNldCBsZWdlbmQgY2hlY2tib3hcbiAgc2hvd0xlZ2VuZENoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuXG4gIC8vIGFkZCBsZWdlbmRcbiAgbGVnZW5kRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVMZWdlbmQoeC5sYXllci5sZWdlbmQpKTtcblxuICAvLyBhZGQgcHJvdmVuYW5jZVxuICBwcm92ZW5hbmNlRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVQcm92ZW5hbmNlKHgubGF5ZXIucHJvdmVuYW5jZSkpO1xuXG4gIC8vIHNldCBsaXN0ZW5lciBmb3IgY2hlY2tib3ggdG8gc2hvdy9oaWRlIGxlZ2VuZFxuICBpZiAoSFRNTFdpZGdldHMuc2hpbnlNb2RlKSB7XG4gICAgc2hvd0xlZ2VuZENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICBsZWdlbmRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZWdlbmRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIHNldCBsaXN0ZW5lciBmb3IgYnV0dG9uIHRvIGhpZGUgbGF5ZXJcbiAgaWYgKEhUTUxXaWRnZXRzLnNoaW55TW9kZSkge1xuICAgIHNob3dMYXllckNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICBtYXBwZXIuc2hvd0xheWVyT25NYXAoeC5pZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXBwZXIuaGlkZUxheWVyT25NYXAoeC5pZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBzZXQgbGlzdGVuZXIgZm9yIGJ1dHRvbiB0byBkcm9wIGxheWVyXG4gIGlmIChIVE1MV2lkZ2V0cy5zaGlueU1vZGUpIHtcbiAgICByZW1vdmVMYXllckZyb21NYXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIG1hcHBlci5oaWRlTGF5ZXJPbk1hcCh4LmlkKTtcbiAgICAgIG1hcHBlci5oaWRlTGF5ZXJPbk1lbnUoeC5pZCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyByZXR1cm4gZWxlbWVudFxuICByZXR1cm4gZWw7XG59O1xuIiwiLyoqXG4gKiBBZGQgYSB0b29sIHRpcC5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBIVE1MIGVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIHRvb2wgdGlwLjtcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCB0byBkaXNwbGF5IGluIHRvb2wgdGlwLlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvb2x0aXAoZWxlbWVudCwgdGV4dCkge1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdG9nZ2xlXCIsIFwidG9vbHRpcFwiKTtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBsYWNlbWVudFwiLCBcInRvcFwiKTtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbnRhaW5lclwiLCBcImJvZHlcIik7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgdGV4dCk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcHJvdmVuYW5jZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSB4IC0gT2JqZWN0IHdpdGggcHJvcGVydGllcyBmb3IgY3VzdG9taXphdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSB4LmRlc2NyaXB0aW9uIC0gVGV4dCB0byBkaXNwbGF5IGluIHRvb2wgdGlwLlxuICogQHBhcmFtIHtzdHJpbmd9IHguaWNvbiAtIE5hbWUgb2YgRm9udCBBd2Vzb21lIGljb24uXG4gKiBAcGFyYW0ge3N0cmluZ30geC5jb2xvciAtIENvbG9yIGZvciBpY29uLlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm92ZW5hbmNlKHgpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGVsLmNsYXNzTGlzdC5hZGQoXCJwcm92ZW5hbmNlXCIpO1xuICBpZiAodHlwZW9mKHguZGVzY3JpcHRpb24pID09PSBcInN0cmluZ1wiKSB7XG4gICAgYWRkVG9vbHRpcChlbCwgeC5kZXNjcmlwdGlvbik7XG4gIH1cbiAgZWwuY2xhc3NMaXN0LmFkZChcImZhc1wiKTtcbiAgZWwuY2xhc3NMaXN0LmFkZChcImZhLVwiICsgeC5pY29uKTtcbiAgZWwuc3R5bGUuY29sb3IgPSB4LmNvbG9yO1xuICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgbmFtZSBsYWJlbC5cbiAqIEBwYXJhbSB7T2JqZWN0fSB4IC0gT2JqZWN0IHdpdGggcHJvcGVydGllcyBmb3IgY3VzdG9taXphdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSB4LmRlc2NyaXB0aW9uIC0gVGV4dCB0byBkaXNwbGF5IGluIHRvb2wgdGlwLlxuICogQHBhcmFtIHtzdHJpbmd9IHguaWNvbiAtIE5hbWUgb2YgRm9udCBBd2Vzb21lIGljb24uXG4gKiBAcGFyYW0ge3N0cmluZ30geC5jb2xvciAtIENvbG9yIGZvciBpY29uLlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOYW1lTGFiZWwoeCkge1xuICAvLyBjcmVhdGUgZWxlbWVudFxuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGVsLmNsYXNzTGlzdC5hZGQoXCJuYW1lLWxhYmVsXCIpO1xuICAvLyBzZXQgbGF5ZXIgbmFtZVxuICBlbC5pbm5lclRleHQgPSB4Lm5hbWU7XG4gIC8vIGluaXRpYWxpemUgcG9wdXAgdGV4dFxuICBsZXQgdGl0bGUgPSBcIlwiO1xuICAvLyBpZiBuZWVkZWQsIGFkZCB0aGVtZSBpbmZvcm1hdGlvbiB0byBwb3B1cCB0ZXh0XG4gIGlmICh0eXBlb2YoeC50aGVtZXMpID09PSBcIm9iamVjdFwiKSB7XG4gICAgdGl0bGUgKz0gYFRoaXMgJHt4LmNsYXNzfSBiZWxvbmdzIHRvIHRoZSBmb2xsb3dpbmcgdGhlbWVzOmA7XG4gICAgdGl0bGUgKz0gYCAke3gudGhlbWVzWzBdLm5hbWV9ICgke3gudGhlbWVzWzBdLnpvbmV9IHpvbmUpYDtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHgudGhlbWVzLmxlbmd0aDsgKytpKSB7XG4gICAgICB0aXRsZSArPSBgLCAke3gudGhlbWVzW2ldLm5hbWV9ICgke3gudGhlbWVzW2ldLnpvbmV9IHpvbmUpYDtcbiAgICB9XG4gIH1cbiAgLy8gaWYgbmVlZGVkLCBhZGQgZGV0YWlscyB0byBwb3B1cCB0ZXh0XG4gIGlmICh0eXBlb2YoeC5sYXllcikgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mKHgubGF5ZXIuZGV0YWlscykgPT09IFwic3RyaW5nXCIpIHtcbiAgICBpZiAodGl0bGUubGVuZ3RoID4gMCkge1xuICAgICAgdGl0bGUgKz0gXCIgXCI7XG4gICAgfVxuICAgIHRpdGxlICs9IHgubGF5ZXIuZGV0YWlscztcbiAgfVxuICAvLyBpZiBuZWVkZWQsIGluaXRpYWxpemUgcG9wdXBcbiAgaWYgKHRpdGxlLmxlbmd0aCA+IDApIHtcbiAgICBhZGRUb29sdGlwKGVsLCB0aXRsZSArIFwiLlwiKTtcbiAgfVxuICAvLyByZXR1cm4gZWxlbWVudFxuICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgaGFuZGxlLlxuICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uIC0gVGV4dCB0byBkaXNwbGF5IGluIHRvb2wgdGlwLlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIYW5kbGUoZGVzY3JpcHRpb24pIHtcbiAgLy8gY3JlYXRlIGVsZW1lbnRcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWwuY2xhc3NMaXN0LmFkZChcImhhbmRsZVwiKTtcbiAgLy8gY3JlYXRlIGljb25cbiAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgaWYgKHR5cGVvZihkZXNjcmlwdGlvbikgPT09IFwic3RyaW5nXCIpIHtcbiAgICBhZGRUb29sdGlwKGVsLCBkZXNjcmlwdGlvbik7XG4gIH1cbiAgaWNvbi5jbGFzc0xpc3QuYWRkKFwiZmFzXCIsIFwiZmEtYXJyb3dzLWFsdFwiKTtcbiAgaWNvbi5zdHlsZS5jb2xvciA9IFwiLS1oYW5kbGVcIjtcbiAgLy8gYXBwZW5kIGljb24gdG8gZWxlbWVudFxuICBlbC5hcHBlbmRDaGlsZChpY29uKTtcbiAgLy8gcmV0dXJuIGVsZW1lbnRcbiAgcmV0dXJuIGVsO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIHNldCBvZiBzd2l0Y2hlc1xuICogQHBhcmFtIHtudW1iZXJ9IG4gLSBOdW1iZXIgb2Ygc3dpdGNoZXMgdG8gY3JlYXRlLlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTd2l0Y2hlcyhuID0gMSwgY2hlY2tlZCA9IHRydWUpIHtcbiAgLy8gY3JlYXRlIGNvbnRhaW5lclxuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbC5jbGFzc0xpc3QuYWRkKFwic3dpdGNoZXNcIik7XG4gIC8vIGNyZWF0ZSBzd2l0Y2hlc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgIC8vIGNyZWF0ZSBzd2l0Y2ggZm9ybVxuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNoZWNrXCIsIFwiZm9ybS1zd2l0Y2hcIiwgXCJwLTBcIiwgXCJtLTBcIik7XG4gICAgLy8gY3JlYXRlIHN3aXRjaCBpbnB1dFxuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImZvcm0tY2hlY2staW5wdXRcIiwgXCJzd2l0Y2hcIiwgXCJtcy0wXCIpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJzd2l0Y2hcIik7XG4gICAgaW5wdXQuY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgLy8gYXBwZW5kIGVsZW1lbnRcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBlbC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgfVxuICAvLyByZXR1cm4gZWxlbWVudFxuICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogQ3JlYXRlIGhvdmVyIHNlbGVjdCBidXR0b24uXG4gKiBAcGFyYW0ge0FycmF5PG9wdGlvbnM+fSBvcHRpb25zIC0gQXJyYXkgb2Ygb3B0aW9ucy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmNvbG9yIC1PcHRpb24gY29sb3IuXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50ZXh0IC0gT3B0aW9uIGNvbG9yLlxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudmFsdWUgLU9wdGlvbiB2YWx1ZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RlZE9wdGlvblZhbHVlIC0gRGVmYXVsdCBvcHRpb24gdmFsdWUuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvdmVyU2VsZWN0KG9wdGlvbnMsIHNlbGVjdGVkT3B0aW9uVmFsdWUpIHtcbiAgLy8gcHJvY2VzcyBvcHRpb25zXG4gIGxldCBzZWxlY3RlZE9wdGlvbiA9XG4gICAgb3B0aW9ucy5maW5kKG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IHNlbGVjdGVkT3B0aW9uVmFsdWUpO1xuICBsZXQgbG9uZ2VzdE9wdGlvbiA9XG4gICAgb3B0aW9ucy5yZWR1Y2UoKGEsIGIpID0+IGEudGV4dC5sZW5ndGggPiBiLnRleHQubGVuZ3RoID8gYSA6IGIpO1xuICAvLyBpZiBzZWxlY3RlZE9wdGlvbiBpcyBpbnZhbGlkLCB0aGVuIHRocm93IGVycm9yXG4gIGlmIChzZWxlY3RlZE9wdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc29sZS5lcnJvcihcImNyZWF0ZUhvdmVyU2VsZWN0OiBzZWxlY3RlZE9wdGlvblZhbHVlIG5vdCB2YWxpZC5cIilcbiAgfVxuICAvLyBpbml0aWFsaXplIGVsZW1lbnRcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWwuY2xhc3NMaXN0LmFkZChcImhvdmVyLXNlbGVjdFwiKTtcbiAgZWwuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBzZWxlY3RlZE9wdGlvbi52YWx1ZSk7XG4gIC8vIGNyZWF0ZSBidXR0b25cbiAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0LWJ1dHRvblwiKTtcbiAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHNlbGVjdGVkT3B0aW9uLmNvbG9yO1xuICAvLyBjcmVhdGUgZWxlbWVudCB0byBzcGVjaWZ5IGJ1dHRvbiB0ZXh0XG4gIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHRleHQuY2xhc3NMaXN0LmFkZChcInNlbGVjdC1idXR0b24tdGV4dFwiKTtcbiAgdGV4dC5pbm5lclRleHQgPSBzZWxlY3RlZE9wdGlvbi50ZXh0O1xuICBidXR0b24uYXBwZW5kQ2hpbGQodGV4dCk7XG4gIC8vIGNyZWF0ZSBkdW1teSBlbGVtZW50IHRvIGVuc3VyZSBidXR0b24gd2lkdGggcmVtYWlucyBjb25zdGFudCB3aGVuXG4gIC8vIGRpZmZlcmVudCBvcHRpb25zIGFyZSBzZWxlY3RlZFxuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3QtYnV0dG9uLXNwYWNlclwiKTtcbiAgc3Bhbi5pbm5lclRleHQgPSBsb25nZXN0T3B0aW9uLnRleHQ7XG4gIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgLy8gY3JlYXRlIGVsZW1lbnRzIGZvciBvcHRpb25zXG4gIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgdWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdC1vcHRpb25zXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyArK2kpIHtcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBhLmlubmVyVGV4dCA9IG9wdGlvbnNbaV0udGV4dDtcbiAgICBhLnNldEF0dHJpYnV0ZShcImRhdGEtb3B0aW9uXCIsIG9wdGlvbnNbaV0udmFsdWUpO1xuICAgIGEuc2V0QXR0cmlidXRlKFwiZGF0YS1jb2xvclwiLCBvcHRpb25zW2ldLmNvbG9yKTtcbiAgICBhLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3Qtb3B0aW9uXCIpO1xuICAgIGxpLmFwcGVuZENoaWxkKGEpO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgfVxuICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gb3B0aW9uc1xuICB1bC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBsZXQgZWxlbSA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoZWxlbS5tYXRjaGVzKFwiLnNlbGVjdC1vcHRpb25cIikpIHtcbiAgICAgIGJ1dHRvbi5jaGlsZHJlblswXS5pbm5lclRleHQgPSBlbGVtLmlubmVyVGV4dDtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgZWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9wdGlvblwiKSk7XG4gICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbG9yXCIpO1xuICAgIH1cbiAgfSk7XG4gIC8vIHJldHVybiBlbGVtZW50XG4gIGVsLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIGVsLmFwcGVuZENoaWxkKHVsKTtcbiAgcmV0dXJuIGVsO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxuY29uc3QgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRjb25zdCBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0Y29uc3QgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRsZXQgdGhyZXcgPSB0cnVlO1xuXHR0cnkge1xuXHRcdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHRcdGNvbnN0IGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH1cblx0XHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0XHR0aHJldyA9IGZhbHNlO1xuXHR9IGZpbmFsbHkge1xuXHRcdGlmKHRocmV3KSBkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0fVxuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlci92YWx1ZSBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0aWYoQXJyYXkuaXNBcnJheShkZWZpbml0aW9uKSkge1xuXHRcdHZhciBpID0gMDtcblx0XHR3aGlsZShpIDwgZGVmaW5pdGlvbi5sZW5ndGgpIHtcblx0XHRcdHZhciBrZXkgPSBkZWZpbml0aW9uW2krK107XG5cdFx0XHR2YXIgYmluZGluZyA9IGRlZmluaXRpb25baSsrXTtcblx0XHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0XHRpZihiaW5kaW5nID09PSAwKSB7XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogZGVmaW5pdGlvbltpKytdIH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBiaW5kaW5nIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYoYmluZGluZyA9PT0gMCkgeyBpKys7IH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZihTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge01hcHBlcn0gZnJvbSBcIi4uL21vZHVsZXMvbWFwcGVyL2NsYXNzLmpzXCI7XG5cbkhUTUxXaWRnZXRzLndpZGdldCh7XG4gIG5hbWU6IFwibWFwcGVyXCIsXG4gIHR5cGU6IFwib3V0cHV0XCIsXG4gIGZhY3Rvcnk6IGZ1bmN0aW9uKGVsLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgLy8gc2hhcmVkIHZhcmlhYmxlc1xuICAgIHZhciBlbGVtZW50SWQgPSBlbC5pZDtcbiAgICB2YXIgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB2YXIgaGFuZGxlID0gbmV3IE1hcHBlcigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlbmRlclZhbHVlOiBmdW5jdGlvbihvcHRzKSB7XG5cbiAgICAgICAgLy8gYWxpYXMgdGhpc1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcblxuICAgICAgICAvLyBpZiBuZWVkZWQsIGluaXRpYWxpemUgd2lkZ2V0XG4gICAgICAgIGlmICghaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAvLyBzZXQgc3RhdGUgdG8gaW5pdGlhbGl6ZWRcbiAgICAgICAgICBpbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgLy8gYXR0YWNoIHRoZSB3aWRnZXQgdG8gdGhlIERPTVxuICAgICAgICAgIGVsZW1lbnQud2lkZ2V0ID0gdGhhdDtcbiAgICAgICAgICAvLyBpbml0aWFsaXplIG1hcCBtYW5hZ2VyXG4gICAgICAgICAgaGFuZGxlLmluaXRpYWxpemUoXG4gICAgICAgICAgICBlbGVtZW50SWQsIG9wdHMubWFwSWQsIG9wdHMucHJvamVjdCwgb3B0cy5tYXhMYXllcnNcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgIH0sXG5cbiAgICAgIHJlc2l6ZTogZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xuICAgICAgICAvLyB3aWRnZXQgYXV0b21hdGljYWxseSByZXNpemVzXG4gICAgICB9LFxuXG4gICAgICBtYXBwZXI6IGhhbmRsZSxcblxuICAgICAgLyogQVBJIGZ1bmN0aW9ucyB0byBtYW5pcHVsYXRlIHdpZGdldCAqL1xuICAgICAgYWRkTGF5ZXI6IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgICAvLyBzcGVjaWZ5IHZpc2liaWxpdHlcbiAgICAgICAgcGFyYW1zLnZhbHVlLmxheWVyLnZpc2libGUgPSBwYXJhbXMudmlzaWJsZTtcbiAgICAgICAgLy8gYWRkIGxheWVyIHRvIG1hcHBlclxuICAgICAgICBoYW5kbGUuYWRkTGF5ZXIocGFyYW1zLnZhbHVlKTtcbiAgICAgICAgLy8gc2luY2UgUiBjb2RlIGlzIHVzZWQgdG8gdXBkYXRlIHRoZSBtYXAsIHNvIHVwZGF0ZU1hcCA9IGZhbHNlXG4gICAgICAgIGhhbmRsZS5zaG93TGF5ZXJPbk1lbnUoXG4gICAgICAgICAgcGFyYW1zLnZhbHVlLmlkLCB0cnVlLCBwYXJhbXMuZW5kUG9zaXRpb24sIGZhbHNlXG4gICAgICAgICk7XG4gICAgICB9LFxuXG4gICAgfTtcbiAgfVxufSk7XG5cbi8vIEF0dGFjaCBtZXNzYWdlIGhhbmRsZXJzIGlmIGluIFNoaW55IG1vZGUgKHRoZXNlIGNvcnJlc3BvbmQgdG8gQVBJKVxuaWYgKEhUTUxXaWRnZXRzLnNoaW55TW9kZSkge1xuICB2YXIgZnhucyA9IFtcImFkZExheWVyXCJdO1xuICB2YXIgYWRkU2hpbnlIYW5kbGVyID0gZnVuY3Rpb24oZnhuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoXG4gICAgICAgIFwibWFwcGVyOlwiICsgZnhuLCBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWVzc2FnZS5pZCk7XG4gICAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICBkZWxldGUgbWVzc2FnZVtcImlkXCJdO1xuICAgICAgICAgICAgZWwud2lkZ2V0W2Z4bl0obWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBmeG5zLmxlbmd0aDsgKytpKSB7XG4gICAgYWRkU2hpbnlIYW5kbGVyKGZ4bnNbaV0pKCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==